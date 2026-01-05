import { S3 } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromCognitoIdentityPool.name, () => {
  const ctest = new CTest({
    credentialProvider: fromCognitoIdentityPool,
    providerParams: (testParams) => {
      return {
        identityPoolId: "us-east-1:1699ebc0-7900-4099-b910-2df94f52a030",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "unresolved",
  });

  ctest.testRegion();

  describe("configure from env", () => {
    it("is not configurable from env", async () => {
      expect("ok").toBeTruthy();
    });
  });

  describe("configure from profile", () => {
    it("is not configurable from profile", async () => {
      expect("ok").toBeTruthy();
    });
  });

  describe("configure from code", () => {
    it("should be configurable from code", async () => {
      const s3 = new S3({
        region: "us-east-2",
        credentials: fromCognitoIdentityPool({
          identityPoolId: "us-east-2:COGNITO_IDENTITY_ID",
        }),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        accessKeyId: "COGNITO_ACCESS_KEY_ID",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        identityId: "us-east-2:COGNITO_IDENTITY_ID",
        secretAccessKey: "COGNITO_SECRET_KEY",
        sessionToken: "COGNITO_SESSION_TOKEN_us-east-2",
      });
    });
  });
});
