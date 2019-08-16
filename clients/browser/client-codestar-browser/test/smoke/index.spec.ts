import { CodeStarClient } from "../../CodeStarClient";
import { ListProjectsCommand } from "../../commands/ListProjectsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-codestar-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListProjects should succeed when given correct input", done => {
    const client = new CodeStarClient({
      region: defaultRegion,
      credentials
    });

    const listProjects = new ListProjectsCommand({} as any);

    client
      .send(listProjects)
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
