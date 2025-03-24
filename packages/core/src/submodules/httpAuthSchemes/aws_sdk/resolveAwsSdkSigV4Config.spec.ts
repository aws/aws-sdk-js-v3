import { AwsCredentialIdentityProvider, IdentityProvider } from "@smithy/types";
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
    // todo: callerClientConfig should be `config` after https://github.com/aws/aws-sdk-js-v3/pull/6959.
    // expect(fn).toHaveBeenCalledWith({
    //   ...arg,
    //   callerClientConfig: input,
    // });
  });
});
