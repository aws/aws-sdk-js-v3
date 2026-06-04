import { S3Control, S3ControlServiceException, TooManyTagsException } from "@aws-sdk/client-s3-control";
import { STS } from "@aws-sdk/client-sts";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(S3Control.name, () => {
  let client: S3Control;
  let accountId: string;

  beforeAll(async () => {
    client = new S3Control({ region: "us-west-2", credentials: aws?.testCredentials });
    const sts = new STS({ region: "us-west-2", credentials: aws?.testCredentials });
    const identity = await sts.getCallerIdentity({});
    accountId = identity.Account!;
  });

  describe("List access points", () => {
    it("should list access points for the account", async () => {
      const result = await client.listAccessPoints({ AccountId: accountId });

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.AccessPointList)).toBe(true);
    });
  });

  describe("Error types", () => {
    it("should throw a S3ControlServiceException for non-existent access point", async () => {
      try {
        await client.getAccessPoint({
          AccountId: accountId,
          Name: "nonexistent-ap-sdk-e2e-test",
        });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(S3ControlServiceException);
        expect(e.name).toBe("NoSuchAccessPoint");
        expect(e.$metadata.httpStatusCode).toBe(404);
      }
    });

    it("should throw a base S3ControlServiceException for invalid account ID", async () => {
      try {
        await client.listAccessPoints({ AccountId: "invalid-account-id" });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(S3ControlServiceException);
        expect(Object.getPrototypeOf(e)).toBe(S3ControlServiceException.prototype);
        expect(e.$metadata.httpStatusCode).toBeGreaterThanOrEqual(400);
      }
    });

    it("should throw TooManyTagsException for exceeding tag limit", async () => {
      const tags = Array.from({ length: 51 }, (_, i) => ({ Key: `k${i}`, Value: `v${i}` }));
      try {
        await client.createStorageLensGroup({
          AccountId: accountId,
          StorageLensGroup: { Name: "sdk-e2e-test-group", Filter: { MatchAnyPrefix: ["test/"] } },
          Tags: tags,
        });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(S3ControlServiceException);
        // todo: Service returns "TooManyTags" but modeled class name is "TooManyTagsException"
        // todo: this is a modeling error. Nothing to do in the SDK.
        expect(e).not.toBeInstanceOf(TooManyTagsException);
        expect(e.name).toBe("TooManyTags");
        expect(e.$metadata.httpStatusCode).toBe(400);
      }
    });
  });
});
