import { LightsailClient } from "../../LightsailClient";
import { GetActiveNamesCommand } from "../../commands/GetActiveNamesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-lightsail-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("GetActiveNames should succeed when given correct input", done => {
    const client = new LightsailClient({
      region: defaultRegion,
      credentials
    });

    const getActiveNames = new GetActiveNamesCommand({});

    client
      .send(getActiveNames)
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
