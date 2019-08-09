import { GameLiftClient } from "../../GameLiftClient";
import { ListBuildsCommand } from "../../commands/ListBuildsCommand";
import { DescribePlayerSessionsCommand } from "../../commands/DescribePlayerSessionsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-gamelift Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListBuilds should succeed when given correct input", done => {
    const client = new GameLiftClient({
      region: defaultRegion,
      credentials
    });

    const listBuilds = new ListBuildsCommand({});

    client
      .send(listBuilds)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribePlayerSessions should fail when given bad input", done => {
    const client = new GameLiftClient({
      region: defaultRegion,
      credentials
    });

    const describePlayerSessions = new DescribePlayerSessionsCommand({
      PlayerSessionId: "psess-fakeSessionId"
    });

    client
      .send(describePlayerSessions)
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
