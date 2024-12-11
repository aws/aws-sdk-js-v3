import { RegionalAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { ProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createCredentialChain } from "./createCredentialChain";

describe(createCredentialChain.name, () => {
  const mockCredentials: AwsCredentialIdentity = {
    accessKeyId: "AKI",
    secretAccessKey: "SAK",
  };

  const failure = async () => {
    throw new ProviderError("", { tryNextLink: true });
  };

  it("should throw an error if zero providers are chained", async () => {
    const credentialProvider = createCredentialChain();

    try {
      await credentialProvider();
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect.assertions(1);
  });

  it("should create a custom chain", async () => {
    const credentialProvider = createCredentialChain(async () => mockCredentials);

    const credentials = await credentialProvider();

    expect(credentials).toEqual(mockCredentials);
  });

  it("should resolve a successful provider function", async () => {
    const credentialProvider = createCredentialChain(failure, failure, async () => mockCredentials, failure);

    const credentials = await credentialProvider();

    expect(credentials).toEqual(mockCredentials);
  });

  it("should resolve the first successful provider function", async () => {
    const credentialProvider = createCredentialChain(
      failure,
      failure,
      async () => ({ ...mockCredentials, order: "1st" }),
      failure,
      async () => ({ ...mockCredentials, order: "2nd" })
    );

    const credentials = await credentialProvider();

    expect(credentials).toEqual({ ...mockCredentials, order: "1st" });
  });

  it("should allow setting a duration", async () => {
    const credentialProvider: AwsCredentialIdentityProvider = createCredentialChain(
      failure,
      failure,
      async () => ({ ...mockCredentials, order: "1st" }),
      failure,
      async () => ({ ...mockCredentials, order: "2nd" })
    ).expireAfter(6 * 60_000);

    const credentials = await credentialProvider();

    expect(credentials.expiration).toBeDefined();
    expect(credentials.expiration?.getTime()).toBeGreaterThan(Date.now());
    expect(credentials.expiration?.getTime()).toBeLessThan(Date.now() + 375_000);
  });

  it("it should throw an error for durations less than 5 minutes", async () => {
    expect(() => {
      createCredentialChain(async () => mockCredentials).expireAfter(299_999);
    }).toThrow(
      "@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes."
    );
  });

  it("is compatible with contextual-region-aware credential providers", async () => {
    const provider: RegionalAwsCredentialIdentityProvider = async ({ contextClientConfig } = {}) => {
      return {
        accessKeyId: "",
        secretAccessKey: "",
        sessionToken: (await contextClientConfig?.region()) ?? "wrong_region",
      };
    };
    const errorProvider = async () => {
      throw new ProviderError("", { tryNextLink: true });
    };

    const chain = createCredentialChain(errorProvider, provider);

    expect(
      await chain({
        contextClientConfig: {
          async region() {
            return "ap-northeast-1";
          },
        },
      })
    ).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      sessionToken: "ap-northeast-1",
    });
  });
});
