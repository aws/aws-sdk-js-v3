import { beforeAll, describe, expect, test as it } from "vitest";

import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CognitoIdentity } from "../../src/index";

describe("@aws-sdk/client-cognito-identity", () => {
  let unAuthClient: CognitoIdentity;
  let region: string;
  let IdentityPoolId: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    IdentityPoolId =
      (globalThis as any)?.window?.__env__?.AWS_SMOKE_TEST_IDENTITY_POOL_ID ||
      process?.env?.AWS_SMOKE_TEST_IDENTITY_POOL_ID;

    unAuthClient = new CognitoIdentity({
      region,
    });
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
}, 60_000);
