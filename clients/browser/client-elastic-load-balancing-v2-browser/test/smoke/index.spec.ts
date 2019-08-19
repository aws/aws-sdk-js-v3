import { ElasticLoadBalancingv2Client } from "../../ElasticLoadBalancingv2Client";
import { DescribeLoadBalancersCommand } from "../../commands/DescribeLoadBalancersCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-elastic-load-balancing-v2-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeLoadBalancers should succeed when given correct input", done => {
    const client = new ElasticLoadBalancingv2Client({
      region: defaultRegion,
      credentials
    });

    const describeLoadBalancers = new DescribeLoadBalancersCommand({} as any);

    client
      .send(describeLoadBalancers)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeLoadBalancers should fail when given bad input", done => {
    const client = new ElasticLoadBalancingv2Client({
      region: defaultRegion,
      credentials
    });

    const describeLoadBalancers = new DescribeLoadBalancersCommand({
      LoadBalancerArns: ["fake_load_balancer"]
    } as any);

    client
      .send(describeLoadBalancers)
      .then(result => {
        expect(result).toBeUndefined();
        done();
      })
      .catch(err => {
        expect(err).toBeDefined();
        done();
      });
  });
});
