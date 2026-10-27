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

  const awsCredentials = {
    accessKeyId: "MOCK_AWS_ACCESS_KEY_ID",
    secretAccessKey: "MOCK_AWS_SECRET_ACCESS_KEY",
  };

  describe(S3ExpressIdentityProviderImpl.prototype.getS3ExpressIdentity.name, () => {
    it("calls getIdentity when cache is empty", async () => {
      const createSessionFn = vi.fn().mockImplementation(async () => ({ Credentials }));
      const identityProvider = new S3ExpressIdentityProviderImpl(createSessionFn);
      const identity = await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucky" });

      expect(identity).toEqual(s3ExpressCredentials);
      expect(createSessionFn).toHaveBeenCalledWith("Bucky");
    });

    it("returns cached entries", async () => {
      const createSessionFn = vi.fn().mockImplementation(async () => ({ Credentials }));
      const identityProvider = new S3ExpressIdentityProviderImpl(createSessionFn);
      const identity = await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucky" });

      expect(identity).toEqual(s3ExpressCredentials);
      expect(createSessionFn).toHaveBeenCalledTimes(1);

      await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucky" });
      await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucky" });
      expect(createSessionFn).toHaveBeenCalledTimes(1);
    });

    it("does not share cached entries across AWS identities", async () => {
      const otherCredentials = {
        ...Credentials,
        AccessKeyId: "OTHER_S3_EXPRESS_ACCESS_KEY_ID",
      };
      const createSessionFn = vi
        .fn()
        .mockResolvedValueOnce({ Credentials })
        .mockResolvedValueOnce({ Credentials: otherCredentials });
      const identityProvider = new S3ExpressIdentityProviderImpl(createSessionFn);

      const first = await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucky" });
      const second = await identityProvider.getS3ExpressIdentity(
        {
          accessKeyId: "OTHER_AWS_ACCESS_KEY_ID",
          secretAccessKey: "OTHER_AWS_SECRET_ACCESS_KEY",
        },
        { Bucket: "Bucky" }
      );

      expect(first.accessKeyId).toBe(Credentials.AccessKeyId);
      expect(second.accessKeyId).toBe(otherCredentials.AccessKeyId);
      expect(createSessionFn).toHaveBeenCalledTimes(2);
      expect(createSessionFn).toHaveBeenNthCalledWith(1, "Bucky");
      expect(createSessionFn).toHaveBeenNthCalledWith(2, "Bucky");
    });
  });
});
