import { ApplicationAutoScalingClient } from "../../ApplicationAutoScalingClient";
import { DescribeScalableTargetsCommand } from "../../commands/DescribeScalableTargetsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-application-auto-scaling Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeScalableTargets should succeed when given correct input", done => {
    const client = new ApplicationAutoScalingClient({
      region: defaultRegion,
      credentials
    });

    const describeScalableTargets = new DescribeScalableTargetsCommand({
      ServiceNamespace: "ec2"
    });

    client
      .send(describeScalableTargets)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
});
