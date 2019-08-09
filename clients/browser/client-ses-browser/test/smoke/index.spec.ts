import { SESClient } from "../../SESClient";
import { ListIdentitiesCommand } from "../../commands/ListIdentitiesCommand";
import { VerifyEmailIdentityCommand } from "../../commands/VerifyEmailIdentityCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-ses-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListIdentities should succeed when given correct input", done => {
    const client = new SESClient({
      region: defaultRegion,
      credentials
    });

    const listIdentities = new ListIdentitiesCommand({});

    client
      .send(listIdentities)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("VerifyEmailIdentity should fail when given bad input", done => {
    const client = new SESClient({
      region: defaultRegion,
      credentials
    });

    const verifyEmailIdentity = new VerifyEmailIdentityCommand({
      EmailAddress: "fake_email"
    });

    client
      .send(verifyEmailIdentity)
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
