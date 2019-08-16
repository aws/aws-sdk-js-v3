import { Route53Client } from "../../Route53Client";
import { ListHostedZonesCommand } from "../../commands/ListHostedZonesCommand";
import { GetHostedZoneCommand } from "../../commands/GetHostedZoneCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-route-53-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-east-1";
  it("ListHostedZones should succeed when given correct input", done => {
    const client = new Route53Client({
      region: defaultRegion,
      credentials
    });

    const listHostedZones = new ListHostedZonesCommand({} as any);

    client
      .send(listHostedZones)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetHostedZone should fail when given bad input", done => {
    const client = new Route53Client({
      region: defaultRegion,
      credentials
    });

    const getHostedZone = new GetHostedZoneCommand({
      Id: "fake-zone"
    } as any);

    client
      .send(getHostedZone)
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
