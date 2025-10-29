import { S3 } from "@aws-sdk/client-s3";
import { fromCognitoIdentity } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromCognitoIdentity.name, () => {
  const ctest = new CTest({
    credentialProvider: fromCognitoIdentity,
    providerParams: (testParams) => {
      return {
        identityId: "us-east-1:128d0a74-c82f-4553-916d-90053example",
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
        credentials: fromCognitoIdentity({
          identityId: "us-east-2:128d0a74-c82f-4553-916d-90053example",
        }),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_CODE: "e",
        },
        accessKeyId: "COGNITO_ACCESS_KEY_ID",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        identityId: "us-east-2:128d0a74-c82f-4553-916d-90053example",
        secretAccessKey: "COGNITO_SECRET_KEY",
        sessionToken: "COGNITO_SESSION_TOKEN_us-east-2",
      });
    });
  });
});
