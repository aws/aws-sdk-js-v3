import { IAMClient } from "../../IAMClient";
import { ListUsersCommand } from "../../commands/ListUsersCommand";
import { GetUserCommand } from "../../commands/GetUserCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-iam Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-east-1";
  it("ListUsers should succeed when given correct input", done => {
    const client = new IAMClient({
      region: defaultRegion,
      credentials
    });

    const listUsers = new ListUsersCommand({});

    client
      .send(listUsers)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetUser should fail when given bad input", done => {
    const client = new IAMClient({
      region: defaultRegion,
      credentials
    });

    const getUser = new GetUserCommand({
      UserName: "fake_user"
    });

    client
      .send(getUser)
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
