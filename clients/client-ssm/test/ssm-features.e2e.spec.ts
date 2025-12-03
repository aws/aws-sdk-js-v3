import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { SSM } from "@aws-sdk/client-ssm";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Simple Systems Management Features", () => {
  let client: SSM;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new SSM({ region });
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
