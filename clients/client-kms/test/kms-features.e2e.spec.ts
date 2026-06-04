import { KMS, KMSServiceException, NotFoundException } from "@aws-sdk/client-kms";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(KMS.name, () => {
  let client: KMS;

  beforeAll(async () => {
    client = new KMS({ region: "us-west-2", credentials: aws?.testCredentials });
  });

  describe("List keys", () => {
    it("should successfully list keys", async () => {
      const result = await client.listKeys({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Keys)).toBe(true);
    });
  });

  describe("Error types", () => {
    it("should throw a modeled NotFoundException for non-existent key", async () => {
      try {
        await client.describeKey({ KeyId: "00000000-0000-0000-0000-000000000000" });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e).toBeInstanceOf(KMSServiceException);
        expect(e.name).toBe("NotFoundException");
        expect(e.$metadata.httpStatusCode).toBe(400);
        expect(e.__type).toBe("NotFoundException");
      }
    });

    it("should throw a base KMSServiceException for validation error", async () => {
      try {
        await client.createAlias({ AliasName: "alias", TargetKeyId: "non-existent" });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(KMSServiceException);
        expect(Object.getPrototypeOf(e)).toBe(KMSServiceException.prototype);
        expect(e.name).toBe("ValidationException");
        expect(e.$metadata.httpStatusCode).toBe(400);
        expect(e.__type).toBe("ValidationException");
      }
    });
  });
});
