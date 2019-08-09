import { SMSClient } from "../../SMSClient";
import { GetConnectorsCommand } from "../../commands/GetConnectorsCommand";
import { DeleteReplicationJobCommand } from "../../commands/DeleteReplicationJobCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-sms Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("GetConnectors should succeed when given correct input", done => {
    const client = new SMSClient({
      region: defaultRegion,
      credentials
    });

    const getConnectors = new GetConnectorsCommand({});

    client
      .send(getConnectors)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DeleteReplicationJob should fail when given bad input", done => {
    const client = new SMSClient({
      region: defaultRegion,
      credentials
    });

    const deleteReplicationJob = new DeleteReplicationJobCommand({
      replicationJobId: "invalidId"
    });

    client
      .send(deleteReplicationJob)
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
