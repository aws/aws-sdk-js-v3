import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { credentialsWillNeedRefresh } from "../defaultProvider";
import { memoizeChain } from "./memoize-chain";

describe("memoize runtime config aware AWS credential chain", () => {
  let staticCredentials!: RuntimeConfigAwsCredentialIdentityProvider;
  let expiringCredentials!: RuntimeConfigAwsCredentialIdentityProvider;

  const expiration = new Date(Date.now() + 5_000);

  beforeEach(() => {
    vi.resetAllMocks();
    staticCredentials = vi.fn().mockImplementation(async (options?: AwsIdentityProperties) => {
      await new Promise((r) => setTimeout(r, 100));
      return {
        accessKeyId: "",
        secretAccessKey: "",
        runtimeOptions: Object.keys(options ?? {}).concat(Object.keys(options?.callerClientConfig ?? {})),
      };
    });

    let sequence = 0;

    expiringCredentials = vi.fn().mockImplementation(async (options?: AwsIdentityProperties) => {
      await new Promise((r) => setTimeout(r, 100));
      return {
        accessKeyId: "",
        secretAccessKey: "",
        expiration,
        sequence: sequence++,
        runtimeOptions: Object.keys(options ?? {}).concat(Object.keys(options?.callerClientConfig ?? {})),
      };
    });
  });

  it("should call composed provider functions", async () => {
    const provider = memoizeChain([staticCredentials], credentialsWillNeedRefresh);

    const credentials = await provider({
      callerClientConfig: {
        region: async () => "context-region",
        profile: "alt",
      },
    });

    expect(credentials).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      runtimeOptions: ["callerClientConfig", "region", "profile"],
    });
    expect(staticCredentials).toHaveBeenCalledTimes(1);
  });

  it("should use an active lock when no credentials exist", async () => {
    const provider = memoizeChain([staticCredentials], credentialsWillNeedRefresh);

    const [credentials] = await Promise.all([provider(), provider(), provider(), provider(), provider()]);

    expect(credentials).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      runtimeOptions: [],
    });
    expect(staticCredentials).toHaveBeenCalledTimes(1);
  });

  it("should use a cache", async () => {
    const provider = memoizeChain([staticCredentials], credentialsWillNeedRefresh);

    await Promise.all([provider(), provider(), provider(), provider(), provider()]);
    const [credentials] = await Promise.all([provider(), provider(), provider(), provider(), provider()]);

    expect(credentials).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      runtimeOptions: [],
    });
    expect(staticCredentials).toHaveBeenCalledTimes(1);
  });

  it("should use a passive lock when credentials do exist", async () => {
    const provider = memoizeChain([expiringCredentials], credentialsWillNeedRefresh);

    {
      // initial invocation returns sequence-0 credentials.
      const credentials = await Promise.all([provider(), provider(), provider(), provider(), provider()]);
      for (const c of credentials) {
        expect(c).toEqual({
          accessKeyId: "",
          secretAccessKey: "",
          expiration,
          sequence: 0,
          runtimeOptions: [],
        });
      }
      expect(expiringCredentials).toHaveBeenCalledTimes(1);
    }

    {
      // second invocation returns sequence-0 credentials, but background initializes refresh.
      const credentials = await Promise.all([provider(), provider(), provider(), provider(), provider()]);
      for (const c of credentials) {
        expect(c).toEqual({
          accessKeyId: "",
          secretAccessKey: "",
          expiration,
          sequence: 0,
          runtimeOptions: [],
        });
      }
      expect(expiringCredentials).toHaveBeenCalledTimes(2);
    }

    // allow new credentials to settle
    await new Promise((r) => setTimeout(r, 200));

    {
      // third invocation group returns sequence-1 credentials, also with background refresh.
      const credentials = await Promise.all([provider(), provider(), provider(), provider(), provider()]);
      for (const c of credentials) {
        expect(c).toEqual({
          accessKeyId: "",
          secretAccessKey: "",
          expiration,
          sequence: 1,
          runtimeOptions: [],
        });
      }
      expect(expiringCredentials).toHaveBeenCalledTimes(3);
    }
  });

  it("can be force refreshed", async () => {
    const provider = memoizeChain([expiringCredentials], credentialsWillNeedRefresh);

    const credentials = await Promise.all([
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
    ]);
    let sequence = 0;

    for (const c of credentials) {
      expect(c).toEqual({
        accessKeyId: "",
        secretAccessKey: "",
        expiration,
        sequence: sequence++,
        runtimeOptions: ["forceRefresh"],
      });
    }

    expect(expiringCredentials).toHaveBeenCalledTimes(5);
  });
});
