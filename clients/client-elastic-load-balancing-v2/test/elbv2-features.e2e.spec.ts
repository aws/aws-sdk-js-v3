import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ElasticLoadBalancingV2 } from "@aws-sdk/client-elastic-load-balancing-v2";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Elastic Load Balancing v2 Features", () => {
  let client: ElasticLoadBalancingV2;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ElasticLoadBalancingV2({ region });
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
