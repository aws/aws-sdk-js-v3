import { STSClient } from "../../STSClient";
import { GetSessionTokenCommand } from "../../commands/GetSessionTokenCommand";
import { GetFederationTokenCommand } from "../../commands/GetFederationTokenCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-sts Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("GetSessionToken should succeed when given correct input", done => {
    const client = new STSClient({
      region: defaultRegion,
      credentials
    });

    const getSessionToken = new GetSessionTokenCommand({});

    client
      .send(getSessionToken)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetFederationToken should fail when given bad input", done => {
    const client = new STSClient({
      region: defaultRegion,
      credentials
    });

    const getFederationToken = new GetFederationTokenCommand({
      Name: "temp",
      Policy: '{\\"temp\\":true}'
    });

    client
      .send(getFederationToken)
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
