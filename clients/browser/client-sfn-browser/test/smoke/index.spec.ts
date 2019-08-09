import { SFNClient } from "../../SFNClient";
import { ListActivitiesCommand } from "../../commands/ListActivitiesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-sfn-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListActivities should succeed when given correct input", done => {
    const client = new SFNClient({
      region: defaultRegion,
      credentials
    });

    const listActivities = new ListActivitiesCommand({});

    client
      .send(listActivities)
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
