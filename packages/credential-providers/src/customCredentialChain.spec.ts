import { ProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@smithy/types";

import { chain } from "./customCredentialChain";

describe(chain.name, () => {
  const mockCredentials: AwsCredentialIdentity = {
    accessKeyId: "AKI",
    secretAccessKey: "SAK",
  };

  const failure = async () => {
    throw new ProviderError("", { tryNextLink: true });
  };

  it("should throw an error if zero providers are chained", async () => {
    const credentialProvider = chain();

    try {
      await credentialProvider();
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect.assertions(1);
  });

  it("should create a custom chain", async () => {
    const credentialProvider = chain(async () => mockCredentials);

    const credentials = await credentialProvider();

    expect(credentials).toEqual(mockCredentials);
  });

  it("should resolve a successful provider function", async () => {
    const credentialProvider = chain(failure, failure, async () => mockCredentials, failure);

    const credentials = await credentialProvider();

    expect(credentials).toEqual(mockCredentials);
  });

  it("should resolve the first successful provider function", async () => {
    const credentialProvider = chain(
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
    const credentialProvider: AwsCredentialIdentityProvider = chain(
      failure,
      failure,
      async () => ({ ...mockCredentials, order: "1st" }),
      failure,
      async () => ({ ...mockCredentials, order: "2nd" })
    ).expireAfter(15_000);

    const credentials = await credentialProvider();

    expect(credentials.expiration).toBeDefined();
    expect(credentials.expiration?.getTime()).toBeGreaterThan(Date.now());
    expect(credentials.expiration?.getTime()).toBeLessThan(Date.now() + 30_000);
  });
});
