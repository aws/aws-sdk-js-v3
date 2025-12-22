import { SSM } from "@aws-sdk/client-ssm";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(SSM.name, () => {
  let client: SSM;

  beforeAll(async () => {
    client = new SSM({ region: "us-west-2" });
  });

  describe("Listing Documents", () => {
    it("should successfully list documents", async () => {
      const result = await client.listDocuments({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.DocumentIdentifiers)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain invalid document error for non-existent document", async () => {
      await expect(
        client.describeDocument({
          Name: "foo-bar-baz",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidDocument",
        })
      );
    });
  });
});
