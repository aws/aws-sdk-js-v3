import { OpsWorksClient } from "../../OpsWorksClient";
import { DescribeStacksCommand } from "../../commands/DescribeStacksCommand";
import { DescribeLayersCommand } from "../../commands/DescribeLayersCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-opsworks-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeStacks should succeed when given correct input", done => {
    const client = new OpsWorksClient({
      region: defaultRegion,
      credentials
    });

    const describeStacks = new DescribeStacksCommand({} as any);

    client
      .send(describeStacks)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeLayers should fail when given bad input", done => {
    const client = new OpsWorksClient({
      region: defaultRegion,
      credentials
    });

    const describeLayers = new DescribeLayersCommand({
      StackId: "fake_stack"
    } as any);

    client
      .send(describeLayers)
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
