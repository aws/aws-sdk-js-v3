import { BatchClient } from "../../BatchClient";
import { DescribeComputeEnvironmentsCommand } from "../../commands/DescribeComputeEnvironmentsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-batch-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeComputeEnvironments should succeed when given correct input", done => {
    const client = new BatchClient({
      region: defaultRegion,
      credentials
    });

    const describeComputeEnvironments = new DescribeComputeEnvironmentsCommand(
      {}
    );

    client
      .send(describeComputeEnvironments)
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
