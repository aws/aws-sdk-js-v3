import { ElasticLoadBalancingV2 } from "@aws-sdk/client-elastic-load-balancing-v2";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(ElasticLoadBalancingV2.name, () => {
  let client: ElasticLoadBalancingV2;

  beforeAll(async () => {
    client = new ElasticLoadBalancingV2({ region: "us-west-2" });
  });

  describe("Making a request", () => {
    it("should successfully describe target groups", async () => {
      const result = await client.describeTargetGroups({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.TargetGroups)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for fake ARN", async () => {
      await expect(
        client.describeTags({
          ResourceArns: ["fake_arn"],
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationError",
        })
      );
    });
  });
});
