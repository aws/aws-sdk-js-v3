import { ApplicationDiscoveryServiceClient } from "../../ApplicationDiscoveryServiceClient";
import { DescribeAgentsCommand } from "../../commands/DescribeAgentsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-application-discovery-service Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeAgents should succeed when given correct input", done => {
    const client = new ApplicationDiscoveryServiceClient({
      region: defaultRegion,
      credentials
    });

    const describeAgents = new DescribeAgentsCommand({});

    client
      .send(describeAgents)
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
