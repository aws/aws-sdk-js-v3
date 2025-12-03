import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CodePipeline } from "@aws-sdk/client-codepipeline";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-codepipeline", () => {
  let client: CodePipeline;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CodePipeline({ region });
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
