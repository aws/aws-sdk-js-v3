import { ElastiCache } from "@aws-sdk/client-elasticache";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(ElastiCache.name, () => {
  let client: ElastiCache;
  let cacheParameterGroupName: string;

  beforeAll(async () => {
    client = new ElastiCache({ region: "us-west-2" });
  });

  describe("Creating and deleting cache parameter groups", () => {
    it("should create, describe, and delete cache parameter group", async () => {
      cacheParameterGroupName = `aws-js-sdk-${Date.now()}`;

      // Create cache parameter group
      const createResult = await client.createCacheParameterGroup({
        CacheParameterGroupName: cacheParameterGroupName,
        CacheParameterGroupFamily: "redis7",
        Description: "Test parameter group for SDK",
      });

      expect(createResult.CacheParameterGroup?.CacheParameterGroupName).toBe(cacheParameterGroupName);

      // Describe cache parameter groups
      const describeResult = await client.describeCacheParameterGroups({});

      expect(Array.isArray(describeResult.CacheParameterGroups)).toBe(true);

      // Check if parameter group is in the list
      const foundGroup = describeResult.CacheParameterGroups?.find(
        (group) => group.CacheParameterGroupName === cacheParameterGroupName
      );
      expect(foundGroup?.CacheParameterGroupName).toBe(cacheParameterGroupName);

      // Cleanup - delete the parameter group
      await client.deleteCacheParameterGroup({
        CacheParameterGroupName: cacheParameterGroupName,
      });
    });
  });

  describe("Error handling", () => {
    it("should contain invalid parameter error for empty parameter group name", async () => {
      await expect(
        client.createCacheParameterGroup({
          CacheParameterGroupName: "",
          CacheParameterGroupFamily: "redis7",
          Description: "Test parameter group",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidParameterValueException",
        })
      );
    });
  });
});
