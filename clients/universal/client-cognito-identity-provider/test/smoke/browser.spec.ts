import { CognitoIdentityProviderClient } from "../../CognitoIdentityProviderClient";
import { ListUserPoolsCommand } from "../../commands/ListUserPoolsCommand";
import { DescribeUserPoolCommand } from "../../commands/DescribeUserPoolCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cognito-identity-provider Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListUserPools should succeed when given correct input", done => {
    const client = new CognitoIdentityProviderClient({
      region: defaultRegion,
      credentials
    });

    const listUserPools = new ListUserPoolsCommand({
      MaxResults: 10
    });

    client
      .send(listUserPools)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeUserPool should fail when given bad input", done => {
    const client = new CognitoIdentityProviderClient({
      region: defaultRegion,
      credentials
    });

    const describeUserPool = new DescribeUserPoolCommand({
      UserPoolId: "us-east-1:aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
    });

    client
      .send(describeUserPool)
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
