import { CodeBuildClient } from "../../CodeBuildClient";
import { ListBuildsCommand } from "../../commands/ListBuildsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-codebuild-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListBuilds should succeed when given correct input", done => {
    const client = new CodeBuildClient({
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
});
