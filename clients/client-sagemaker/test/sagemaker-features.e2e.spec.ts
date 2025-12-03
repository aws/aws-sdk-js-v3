import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { SageMaker } from "@aws-sdk/client-sagemaker";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon SageMaker Features", () => {
  let client: SageMaker;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new SageMaker({ region });
  });

  describe("List Endpoints", () => {
    it("should successfully list endpoints", async () => {
      const result = await client.listEndpoints({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Endpoints)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for non-existent endpoint", async () => {
      await expect(
        client.describeEndpoint({
          EndpointName: "non-existent",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
