import { AutoScalingClient } from "../../AutoScalingClient";
import { DescribeScalingProcessTypesCommand } from "../../commands/DescribeScalingProcessTypesCommand";
import { CreateLaunchConfigurationCommand } from "../../commands/CreateLaunchConfigurationCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-auto-scaling-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeScalingProcessTypes should succeed when given correct input", done => {
    const client = new AutoScalingClient({
      region: defaultRegion,
      credentials
    });

    const describeScalingProcessTypes = new DescribeScalingProcessTypesCommand(
      {}
    );

    client
      .send(describeScalingProcessTypes)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("CreateLaunchConfiguration should fail when given bad input", done => {
    const client = new AutoScalingClient({
      region: defaultRegion,
      credentials
    });

    const createLaunchConfiguration = new CreateLaunchConfigurationCommand({
      LaunchConfigurationName: "hello, world",
      ImageId: "ami-12345678",
      InstanceType: "m1.small"
    });

    client
      .send(createLaunchConfiguration)
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
