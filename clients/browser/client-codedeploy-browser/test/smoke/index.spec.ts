import { CodeDeployClient } from "../../CodeDeployClient";
import { ListApplicationsCommand } from "../../commands/ListApplicationsCommand";
import { GetDeploymentCommand } from "../../commands/GetDeploymentCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-codedeploy-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListApplications should succeed when given correct input", done => {
    const client = new CodeDeployClient({
      region: defaultRegion,
      credentials
    });

    const listApplications = new ListApplicationsCommand({} as any);

    client
      .send(listApplications)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetDeployment should fail when given bad input", done => {
    const client = new CodeDeployClient({
      region: defaultRegion,
      credentials
    });

    const getDeployment = new GetDeploymentCommand({
      deploymentId: "d-USUAELQEX"
    } as any);

    client
      .send(getDeployment)
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
