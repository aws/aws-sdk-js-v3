import { PinpointClient } from "../../PinpointClient";
import { GetAppsCommand } from "../../commands/GetAppsCommand";
import { GetAppCommand } from "../../commands/GetAppCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-pinpoint-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("GetApps should succeed when given correct input", done => {
    const client = new PinpointClient({
      region: defaultRegion,
      credentials
    });

    const getApps = new GetAppsCommand({});

    client
      .send(getApps)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetApp should fail when given bad input", done => {
    const client = new PinpointClient({
      region: defaultRegion,
      credentials
    });

    const getApp = new GetAppCommand({
      ApplicationId: "InvalidApplicationId"
    });

    client
      .send(getApp)
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
