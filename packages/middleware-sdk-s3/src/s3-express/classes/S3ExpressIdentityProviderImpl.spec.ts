import { describe, expect, test as it, vi } from "vitest";

import { S3ExpressIdentityProviderImpl } from "./S3ExpressIdentityProviderImpl";

describe(S3ExpressIdentityProviderImpl.name, () => {
  const timestamp = Date.now() + 90_000;

  const Credentials = {
    AccessKeyId: "MOCK_S3_EXPRESS_ACCESS_KEY_ID",
    SecretAccessKey: "MOCK_S3_EXPRESS_SECRET_ACCESS_KEY",
    SessionToken: "MOCK_S3_EXPRESS_SESSION_TOKEN",
    Expiration: new Date(timestamp),
  };

  const s3ExpressCredentials = {
    accessKeyId: "MOCK_S3_EXPRESS_ACCESS_KEY_ID",
    secretAccessKey: "MOCK_S3_EXPRESS_SECRET_ACCESS_KEY",
    sessionToken: "MOCK_S3_EXPRESS_SESSION_TOKEN",
    expiration: new Date(timestamp),
  };

  describe(S3ExpressIdentityProviderImpl.prototype.getS3ExpressIdentity.name, () => {
    it("calls getIdentity when cache is empty", async () => {
      const createSessionFn = vi.fn().mockImplementation(async () => ({ Credentials }));
      const identityProvider = new S3ExpressIdentityProviderImpl(createSessionFn);
      const identity = await identityProvider.getS3ExpressIdentity(s3ExpressCredentials, { Bucket: "Bucky" });

      expect(identity).toEqual(s3ExpressCredentials);
      expect(createSessionFn).toHaveBeenCalled();
    });

    it("returns cached entries", async () => {
      const createSessionFn = vi.fn().mockImplementation(async () => ({ Credentials }));
      const identityProvider = new S3ExpressIdentityProviderImpl(createSessionFn);
      const identity = await identityProvider.getS3ExpressIdentity(s3ExpressCredentials, { Bucket: "Bucky" });

      expect(identity).toEqual(s3ExpressCredentials);
      expect(createSessionFn).toHaveBeenCalledTimes(1);

      await identityProvider.getS3ExpressIdentity(s3ExpressCredentials, { Bucket: "Bucky" });
      await identityProvider.getS3ExpressIdentity(s3ExpressCredentials, { Bucket: "Bucky" });
      expect(createSessionFn).toHaveBeenCalledTimes(1);
    });
  });
});
