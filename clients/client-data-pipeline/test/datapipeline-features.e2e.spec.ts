import { DataPipeline } from "@aws-sdk/client-data-pipeline";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(DataPipeline.name, () => {
  let client: DataPipeline;

  beforeAll(async () => {
    client = new DataPipeline({ region: "us-west-2" });
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
