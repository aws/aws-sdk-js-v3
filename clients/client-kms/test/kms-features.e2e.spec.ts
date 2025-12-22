import { KMS } from "@aws-sdk/client-kms";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(KMS.name, () => {
  let client: KMS;

  beforeAll(async () => {
    client = new KMS({ region: "us-west-2" });
  });

  describe("List keys", () => {
    it("should successfully list keys", async () => {
      const result = await client.listKeys({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Keys)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid alias creation", async () => {
      await expect(
        client.createAlias({
          AliasName: "alias",
          TargetKeyId: "non-existent",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
