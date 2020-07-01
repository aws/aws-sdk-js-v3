/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
import { expect } from "chai";
import { CognitoIdentity } from "../index";
import { Credentials } from "@aws-sdk/types";
import { IAM } from "@aws-sdk/client-iam";
// There will be default values of defaultRegion, credentials, and isBrowser variable in browser tests.
// Define the values for Node.js tests
const region: string | undefined =
  (globalThis as any).defaultRegion || undefined;
const credentials: Credentials | undefined =
  (globalThis as any).credentials || undefined;

describe("@aws-sdk/client-cognito-identity", function () {
  this.timeout(50000);
  // Required in run
  const unAuthClient = new CognitoIdentity({
    region
  });
  const authClient = new CognitoIdentity({
    credentials,
    region
  });
  const iam = new IAM({ credentials, region });
  const identityPoolName = `aws_sdk_unit_test_${Date.now()}`;
  const identityPoolRoleName = `${identityPoolName}-role`;
  let identityPoolRole: string;
  let identityPoolId: string;

  before(async () => {
    // Create an identity pool
    const createIdentityPoolResult = await authClient.createIdentityPool({
      IdentityPoolName: identityPoolName,
      AllowUnauthenticatedIdentities: true
    });
    expect(createIdentityPoolResult.$metadata.httpStatusCode).to.equal(200);
    expect(typeof createIdentityPoolResult.IdentityPoolId).to.equal("string");
    identityPoolId = createIdentityPoolResult.IdentityPoolId as string;

    // Create a role to be attached to identity pool
    const { Role } = await iam.createRole({
      RoleName: identityPoolRoleName,
      AssumeRolePolicyDocument: `{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Federated": "cognito-identity.amazonaws.com"
        },
        "Action": "sts:AssumeRoleWithWebIdentity"
      }
    ]
  }`
    });
    identityPoolRole = Role?.Arn as string;

    // wait for role creating
    // TODO: add RoleExists waiter
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Set role to identity pool
    await authClient.setIdentityPoolRoles({
      IdentityPoolId: identityPoolId,
      Roles: {
        unauthenticated: identityPoolRole!
      }
    });

    // wait for role propagating
    // TODO: add waiters
    await new Promise(resolve => setTimeout(resolve, 10000));
  });

  after(async () => {
    // Delete the identity pool
    if (identityPoolId) {
      await authClient.deleteIdentityPool({
        IdentityPoolId: identityPoolId
      });
    }
    // Delete identity pool role
    if (identityPoolRole) {
      await iam.deleteRole({ RoleName: identityPoolRoleName });
    }
  });

  it("should successfully fetch Id and get credentials", async () => {
    // Test getId()
    const getIdResult = await unAuthClient.getId({
      IdentityPoolId: identityPoolId
    });
    expect(getIdResult.$metadata.httpStatusCode).to.equal(200);
    expect(typeof getIdResult.IdentityId).to.equal("string");

    // Test getCredentialsForIdentity() with Id from above
    const getCredentialsResult = await unAuthClient.getCredentialsForIdentity({
      IdentityId: getIdResult.IdentityId
    });
    expect(getCredentialsResult.$metadata.httpStatusCode).to.equal(200);
    expect(typeof getCredentialsResult.Credentials?.AccessKeyId).to.equal(
      "string"
    );
    expect(typeof getCredentialsResult.Credentials?.SecretKey).to.equal(
      "string"
    );
  });
});
