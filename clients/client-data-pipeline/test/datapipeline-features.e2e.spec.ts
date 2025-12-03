import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { DataPipeline } from "@aws-sdk/client-data-pipeline";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Data Pipeline Features", () => {
  let client: DataPipeline;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new DataPipeline({ region });
  });

  describe("Listing pipelines", () => {
    it("should successfully list pipelines", async () => {
      const result = await client.listPipelines({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.pipelineIdList)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for empty name prefix", async () => {
      await expect(
        client.createPipeline({
          name: "",
          uniqueId: "test-unique-id-" + Date.now(),
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
          message: expect.stringContaining("Member must have length greater than or equal to 1"),
        })
      );
    });
  });
});
