import { SecretsManagerClient } from "../../SecretsManagerClient";
import { ListSecretsCommand } from "../../commands/ListSecretsCommand";
import { DescribeSecretCommand } from "../../commands/DescribeSecretCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-secrets-manager Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListSecrets should succeed when given correct input", done => {
    const client = new SecretsManagerClient({
      region: defaultRegion,
      credentials
    });

    const listSecrets = new ListSecretsCommand({});

    client
      .send(listSecrets)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeSecret should fail when given bad input", done => {
    const client = new SecretsManagerClient({
      region: defaultRegion,
      credentials
    });

    const describeSecret = new DescribeSecretCommand({
      SecretId: "fake-secret-id"
    });

    client
      .send(describeSecret)
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
