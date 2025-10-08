import type { AwsCredentialIdentityProvider } from "@smithy/types";
import { describe, expect, test as it, vi } from "vitest";

import { resolveAwsSdkSigV4Config } from "./resolveAwsSdkSigV4Config";

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
      $source: {
        CREDENTIALS_CODE: "e",
      },
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
});
