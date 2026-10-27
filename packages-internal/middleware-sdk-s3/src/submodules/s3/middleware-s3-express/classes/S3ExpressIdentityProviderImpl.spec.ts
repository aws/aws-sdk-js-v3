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

    it("clears all cached entries when the AWS identity changes", async () => {
      const sessionCredentials = ["A1", "A2", "B1", "A3"].map((id) => ({
        ...Credentials,
        AccessKeyId: `S3_EXPRESS_ACCESS_KEY_${id}`,
      }));
      const createSessionFn = vi
        .fn()
        .mockResolvedValueOnce({ Credentials: sessionCredentials[0] })
        .mockResolvedValueOnce({ Credentials: sessionCredentials[1] })
        .mockResolvedValueOnce({ Credentials: sessionCredentials[2] })
        .mockResolvedValueOnce({ Credentials: sessionCredentials[3] });
      const identityProvider = new S3ExpressIdentityProviderImpl(createSessionFn);
      const otherAwsCredentials = {
        accessKeyId: "OTHER_AWS_ACCESS_KEY_ID",
        secretAccessKey: "OTHER_AWS_SECRET_ACCESS_KEY",
      };

      await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucket1" });
      await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucket2" });
      const otherIdentity = await identityProvider.getS3ExpressIdentity(otherAwsCredentials, { Bucket: "Bucket1" });
      const restoredIdentity = await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucket2" });

      expect(otherIdentity.accessKeyId).toBe(sessionCredentials[2].AccessKeyId);
      expect(restoredIdentity.accessKeyId).toBe(sessionCredentials[3].AccessKeyId);
      expect(createSessionFn).toHaveBeenCalledTimes(4);
    });

    it("does not cache a background refresh after the AWS identity changes", async () => {
      const expiringCredentials = {
        ...Credentials,
        Expiration: new Date(Date.now() + 30_000),
      };
      const refreshedCredentials = {
        ...Credentials,
        AccessKeyId: "REFRESHED_S3_EXPRESS_ACCESS_KEY_ID",
      };
      const otherCredentials = {
        ...Credentials,
        AccessKeyId: "OTHER_S3_EXPRESS_ACCESS_KEY_ID",
      };
      let resolveRefresh!: (value: { Credentials: typeof Credentials }) => void;
      const refresh = new Promise<{ Credentials: typeof Credentials }>((resolve) => {
        resolveRefresh = resolve;
      });
      const createSessionFn = vi
        .fn()
        .mockResolvedValueOnce({ Credentials: expiringCredentials })
        .mockReturnValueOnce(refresh)
        .mockResolvedValueOnce({ Credentials: otherCredentials });
      const identityProvider = new S3ExpressIdentityProviderImpl(createSessionFn);

      await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucky" });
      await identityProvider.getS3ExpressIdentity(awsCredentials, { Bucket: "Bucky" });
      await vi.waitFor(() => expect(createSessionFn).toHaveBeenCalledTimes(2));

      const otherAwsCredentials = {
        accessKeyId: "OTHER_AWS_ACCESS_KEY_ID",
        secretAccessKey: "OTHER_AWS_SECRET_ACCESS_KEY",
      };
      await identityProvider.getS3ExpressIdentity(otherAwsCredentials, { Bucket: "Bucky" });
      resolveRefresh({ Credentials: refreshedCredentials });
      await Promise.resolve();
      await Promise.resolve();

      const identity = await identityProvider.getS3ExpressIdentity(otherAwsCredentials, { Bucket: "Bucky" });
      expect(identity.accessKeyId).toBe(otherCredentials.AccessKeyId);
      expect(createSessionFn).toHaveBeenCalledTimes(3);
    });
  });
});
