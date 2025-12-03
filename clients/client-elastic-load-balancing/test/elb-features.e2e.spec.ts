import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ElasticLoadBalancing } from "@aws-sdk/client-elastic-load-balancing";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Elastic Load Balancing Features", () => {
  let client: ElasticLoadBalancing;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ElasticLoadBalancing({ region });
  });

  describe("Making a request", () => {
    it("should successfully describe load balancers", async () => {
      const result = await client.describeLoadBalancers({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for very long load balancer name", async () => {
      await expect(
        client.createLoadBalancer({
          LoadBalancerName: "verylongelasticloadbalancername",
          Listeners: [
            {
              Protocol: "HTTP",
              LoadBalancerPort: 80,
              InstancePort: 80,
            },
          ],
          AvailabilityZones: ["us-east-1a"],
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationError",
          $metadata: expect.objectContaining({
            httpStatusCode: 400,
          }),
        })
      );
    });
  });
});
