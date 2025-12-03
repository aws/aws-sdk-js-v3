import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ECS } from "@aws-sdk/client-ecs";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon ECS Features", () => {
  let client: ECS;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ECS({ region });
  });

  describe("Listing clusters", () => {
    it("should successfully list clusters", async () => {
      const result = await client.listClusters({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.clusterArns)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should return 400 status code for invalid task", async () => {
      await expect(
        client.stopTask({
          task: "xxxxxxxxxxx-xxxxxxxxxxxx-xxxxxxxxxxx",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          $metadata: expect.objectContaining({
            httpStatusCode: 400,
          }),
        })
      );
    });
  });
});
