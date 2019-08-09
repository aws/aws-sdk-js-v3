import { CodeCommitClient } from "../../CodeCommitClient";
import { ListRepositoriesCommand } from "../../commands/ListRepositoriesCommand";
import { ListBranchesCommand } from "../../commands/ListBranchesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-codecommit-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListRepositories should succeed when given correct input", done => {
    const client = new CodeCommitClient({
      region: defaultRegion,
      credentials
    });

    const listRepositories = new ListRepositoriesCommand({});

    client
      .send(listRepositories)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("ListBranches should fail when given bad input", done => {
    const client = new CodeCommitClient({
      region: defaultRegion,
      credentials
    });

    const listBranches = new ListBranchesCommand({
      repositoryName: "fake-repo"
    });

    client
      .send(listBranches)
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
