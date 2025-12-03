import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { KMS } from "@aws-sdk/client-kms";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Key Management Service Features", () => {
  let client: KMS;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new KMS({ region });
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
