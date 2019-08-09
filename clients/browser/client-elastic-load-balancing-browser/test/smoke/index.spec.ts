import { ElasticLoadBalancingClient } from "../../ElasticLoadBalancingClient";
import { DescribeLoadBalancersCommand } from "../../commands/DescribeLoadBalancersCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-elastic-load-balancing-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeLoadBalancers should succeed when given correct input", done => {
    const client = new ElasticLoadBalancingClient({
      region: defaultRegion,
      credentials
    });

    const describeLoadBalancers = new DescribeLoadBalancersCommand({});

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
    const client = new ElasticLoadBalancingClient({
      region: defaultRegion,
      credentials
    });

    const describeLoadBalancers = new DescribeLoadBalancersCommand({
      LoadBalancerNames: ["fake_load_balancer"]
    });

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
