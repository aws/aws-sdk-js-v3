import { WorkSpacesClient } from "../../WorkSpacesClient";
import { DescribeWorkspacesCommand } from "../../commands/DescribeWorkspacesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-workspaces-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeWorkspaces should succeed when given correct input", done => {
    const client = new WorkSpacesClient({
      region: defaultRegion,
      credentials
    });

    const describeWorkspaces = new DescribeWorkspacesCommand({});

    client
      .send(describeWorkspaces)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeWorkspaces should fail when given bad input", done => {
    const client = new WorkSpacesClient({
      region: defaultRegion,
      credentials
    });

    const describeWorkspaces = new DescribeWorkspacesCommand({
      DirectoryId: "fake-id"
    });

    client
      .send(describeWorkspaces)
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
