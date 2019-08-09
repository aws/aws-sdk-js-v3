import { DirectConnectClient } from "../../DirectConnectClient";
import { DescribeConnectionsCommand } from "../../commands/DescribeConnectionsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-direct-connect-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeConnections should succeed when given correct input", done => {
    const client = new DirectConnectClient({
      region: defaultRegion,
      credentials
    });

    const describeConnections = new DescribeConnectionsCommand({});

    client
      .send(describeConnections)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeConnections should fail when given bad input", done => {
    const client = new DirectConnectClient({
      region: defaultRegion,
      credentials
    });

    const describeConnections = new DescribeConnectionsCommand({
      connectionId: "fake-connection"
    });

    client
      .send(describeConnections)
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
