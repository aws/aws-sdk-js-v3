import { CodePipeline } from "@aws-sdk/client-codepipeline";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CodePipeline.name, () => {
  let client: CodePipeline;

  beforeAll(async () => {
    client = new CodePipeline({ region: "us-west-2" });
  });

  describe("Listing Pipelines", () => {
    it("should return pipelines list when listPipelines is called", async () => {
      const result = await client.listPipelines({});

      expect(Array.isArray(result.pipelines)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should handle PipelineNotFoundException for fake pipeline", async () => {
      await expect(
        client.getPipeline({
          name: "fake-pipeline", // Non-existent pipeline should cause PipelineNotFoundException
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "PipelineNotFoundException",
        })
      );
    });
  });
});
