import type { AwsCredentialIdentityProvider } from "@smithy/types";
import { describe, expect, test as it, vi } from "vitest";

import { createCredentialRefreshProvider } from "@aws-sdk/core/client";
import { resolveAwsSdkSigV4Config } from "../index";

const START_MS = new Date("2024-01-01T00:00:00Z").getTime();

describe(resolveAwsSdkSigV4Config.name, () => {
  it("maintains object custody", () => {
    const input = {
      region: "",
      sha256: vi.fn(),
      serviceId: "",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
    };
    expect(resolveAwsSdkSigV4Config(input)).toBe(input);
  });

  it("should allow one argument to be passed to the resolved credentials function", async () => {
    const fn = vi.fn();

    const myCredentialsProvider: AwsCredentialIdentityProvider = async (arg) => {
      fn(arg);
      return {
        accessKeyId: "",
        secretAccessKey: "",
      };
    };

    const input = {
      credentials: myCredentialsProvider,
      region: "us-east-1",
      sha256: vi.fn(),
      serviceId: "",
      useDualstackEndpoint: async () => false,
      useFipsEndpoint: async () => false,
    };

    const config = resolveAwsSdkSigV4Config(input);

    const arg = {
      forceRefresh: true,
      a: "a",
      b: "b",
      [Math.random()]: Math.random(),
    };

    await config.credentials(arg);
    expect(fn).toHaveBeenCalledWith(expect.objectContaining(arg));
    expect(fn).toHaveBeenCalledWith({
      ...arg,
      callerClientConfig: config,
    });
  });

  it("should use a credentials getter/setter to normalize the memoization and config binding transform", async () => {
    const myCredentialsProvider: AwsCredentialIdentityProvider = async (arg) => {
      return {
        accessKeyId: "unit-test",
        secretAccessKey: "unit-test",
      };
    };

    const input = {
      credentials: myCredentialsProvider,
      region: "us-east-1",
      sha256: vi.fn(),
      serviceId: "",
      useDualstackEndpoint: async () => false,
      useFipsEndpoint: async () => false,
    };

    const config = resolveAwsSdkSigV4Config(input);

    expect(config.credentials).not.toBe(myCredentialsProvider);
    expect(config.credentials.memoized).toBe(true);
    expect(config.credentials.configBound).toBe(true);
    expect(config.credentials.attributed).toBe(true);

    // consistent getter retrieval
    expect(config.credentials).toBe(config.credentials);

    // no transform applied if set to itself.
    const snapshot = config.credentials;
    config.credentials = (() => config.credentials)();
    expect(config.credentials).toBe(snapshot);

    // re-normalizes input
    config.credentials = myCredentialsProvider;
    expect(config.credentials).not.toBe(myCredentialsProvider);
    expect(config.credentials.memoized).toBe(true);
    expect(config.credentials.configBound).toBe(true);
    expect(config.credentials.attributed).toBe(true);
    expect(await config.credentials()).toEqual({
      accessKeyId: "unit-test",
      secretAccessKey: "unit-test",
    });

    {
      // no transforms applied if they are already present according to function state variables.
      const fn = Object.assign(
        async () => {
          return {
            accessKeyId: "unit-test-2",
            secretAccessKey: "unit-test-2",
          };
        },
        {
          memoized: true,
          configBound: true,
          attributed: true,
        }
      ) as any;
      config.credentials = fn;
      expect(config.credentials).toBe(fn);
      expect(await config.credentials()).toEqual({
        accessKeyId: "unit-test-2",
        secretAccessKey: "unit-test-2",
      });
    }
  });

  it("keeps customer-provided providers on the existing client cache", async () => {
    const custom = vi.fn(async () => ({ accessKeyId: "CUSTOM", secretAccessKey: "SECRET" }));
    const config = resolveAwsSdkSigV4Config({
      credentials: custom,
      region: "us-east-1",
      sha256: vi.fn(),
      serviceId: "",
      useDualstackEndpoint: async () => false,
      useFipsEndpoint: async () => false,
    });

    await config.credentials();
    await config.credentials();

    expect(custom).toHaveBeenCalledTimes(1);
    // A customer-written function cannot invalidate, so ExpiredToken is not retried for it.
    expect((config.credentials as { invalidate?: unknown }).invalidate).toBeUndefined();
  });

  it("does not add a second cache around a lifecycle-wrapped SDK provider", async () => {
    let now = START_MS;
    const spy = vi.spyOn(Date, "now").mockImplementation(() => now);
    const source = vi.fn(async () => ({
      accessKeyId: "SDK",
      secretAccessKey: "SECRET",
      expiration: new Date(now + 6 * 3600_000),
    }));
    const sdkProvider = createCredentialRefreshProvider(source);
    const config = resolveAwsSdkSigV4Config({
      credentials: sdkProvider,
      region: "us-east-1",
      sha256: vi.fn(),
      serviceId: "",
      useDualstackEndpoint: async () => false,
      useFipsEndpoint: async () => false,
    });

    await config.credentials();
    // 30 minutes before expiry: the provider's own advisory window refreshes, but a second
    // client-side cache (5 minute window) would return the cached credentials without asking it.
    now += 6 * 3600_000 - 30 * 60_000;
    await config.credentials();

    expect(source).toHaveBeenCalledTimes(2);
    // invalidate reaches the provider's lifecycle through the client's wrappers.
    expect(typeof (config.credentials as { invalidate?: unknown }).invalidate).toBe("function");
    spy.mockRestore();
  });
});
