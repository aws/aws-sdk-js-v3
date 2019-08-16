import { EC2Client } from "../../EC2Client";
import { DescribeRegionsCommand } from "../../commands/DescribeRegionsCommand";
import { DescribeInstancesCommand } from "../../commands/DescribeInstancesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-ec2-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeRegions should succeed when given correct input", done => {
    const client = new EC2Client({
      region: defaultRegion,
      credentials
    });

    const describeRegions = new DescribeRegionsCommand({} as any);

    client
      .send(describeRegions)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeInstances should fail when given bad input", done => {
    const client = new EC2Client({
      region: defaultRegion,
      credentials
    });

    const describeInstances = new DescribeInstancesCommand({
      InstanceIds: ["i-12345678"]
    } as any);

    client
      .send(describeInstances)
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
