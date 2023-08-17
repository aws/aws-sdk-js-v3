/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
import { expect } from "chai";

import { CognitoIdentity } from "../../src/index";
// There will be default values of defaultRegion, credentials, and isBrowser variable in browser tests.
// Define the values for Node.js tests
const region: string | undefined = (globalThis as any).defaultRegion || process?.env?.AWS_SMOKE_TEST_REGION;
const IdentityPoolId =
  (globalThis as any)?.window?.__env__?.AWS_SMOKE_TEST_IDENTITY_POOL_ID ||
  process?.env?.AWS_SMOKE_TEST_IDENTITY_POOL_ID;

describe("@aws-sdk/client-cognito-identity", function () {
  const unAuthClient = new CognitoIdentity({
    region,
  });

  it("should successfully fetch Id and get credentials", async () => {
    // Test getId()
    const getIdResult = await unAuthClient.getId({
      IdentityPoolId,
    });
    expect(getIdResult.$metadata.httpStatusCode).to.equal(200);
    expect(typeof getIdResult.IdentityId).to.equal("string");

    // Test getCredentialsForIdentity() with Id from above
    const getCredentialsResult = await unAuthClient.getCredentialsForIdentity({
      IdentityId: getIdResult.IdentityId,
    });
    expect(getCredentialsResult.$metadata.httpStatusCode).to.equal(200);
    expect(typeof getCredentialsResult.Credentials?.AccessKeyId).to.equal("string");
    expect(typeof getCredentialsResult.Credentials?.SecretKey).to.equal("string");
  });
});
