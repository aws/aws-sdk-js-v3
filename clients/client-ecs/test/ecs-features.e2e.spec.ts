import { ECS } from "@aws-sdk/client-ecs";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(ECS.name, () => {
  let client: ECS;

  beforeAll(async () => {
    client = new ECS({ region: "us-west-2" });
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
