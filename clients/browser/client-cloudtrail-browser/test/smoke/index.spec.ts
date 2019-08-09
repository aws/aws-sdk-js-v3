import { CloudTrailClient } from "../../CloudTrailClient";
import { DescribeTrailsCommand } from "../../commands/DescribeTrailsCommand";
import { DeleteTrailCommand } from "../../commands/DeleteTrailCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cloudtrail-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeTrails should succeed when given correct input", done => {
    const client = new CloudTrailClient({
      region: defaultRegion,
      credentials
    });

    const describeTrails = new DescribeTrailsCommand({});

    client
      .send(describeTrails)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DeleteTrail should fail when given bad input", done => {
    const client = new CloudTrailClient({
      region: defaultRegion,
      credentials
    });

    const deleteTrail = new DeleteTrailCommand({
      Name: "faketrail"
    });

    client
      .send(deleteTrail)
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
