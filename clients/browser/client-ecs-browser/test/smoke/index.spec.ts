import { ECSClient } from "../../ECSClient";
import { ListClustersCommand } from "../../commands/ListClustersCommand";
import { StopTaskCommand } from "../../commands/StopTaskCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-ecs-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListClusters should succeed when given correct input", done => {
    const client = new ECSClient({
      region: defaultRegion,
      credentials
    });

    const listClusters = new ListClustersCommand({});

    client
      .send(listClusters)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("StopTask should fail when given bad input", done => {
    const client = new ECSClient({
      region: defaultRegion,
      credentials
    });

    const stopTask = new StopTaskCommand({
      task: "xxxxxxxxxxx-xxxxxxxxxxxx-xxxxxxxxxxx"
    });

    client
      .send(stopTask)
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
