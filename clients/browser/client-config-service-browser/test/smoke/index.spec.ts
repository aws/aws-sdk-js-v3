import { ConfigServiceClient } from "../../ConfigServiceClient";
import { DescribeConfigurationRecordersCommand } from "../../commands/DescribeConfigurationRecordersCommand";
import { GetResourceConfigHistoryCommand } from "../../commands/GetResourceConfigHistoryCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-config-service-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeConfigurationRecorders should succeed when given correct input", done => {
    const client = new ConfigServiceClient({
      region: defaultRegion,
      credentials
    });

    const describeConfigurationRecorders = new DescribeConfigurationRecordersCommand(
      {} as any
    );

    client
      .send(describeConfigurationRecorders)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetResourceConfigHistory should fail when given bad input", done => {
    const client = new ConfigServiceClient({
      region: defaultRegion,
      credentials
    });

    const getResourceConfigHistory = new GetResourceConfigHistoryCommand({
      resourceType: "fake-type",
      resourceId: "fake-id"
    } as any);

    client
      .send(getResourceConfigHistory)
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
