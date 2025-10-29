import { S3 } from "@aws-sdk/client-s3";
import { fromWebToken } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromWebToken.name, () => {
  const ctest = new CTest({
    credentialProvider: fromWebToken,
    providerParams: (testParams) => {
      return {
        webIdentityToken: "token-contents",
        roleArn: "arn:aws:iam::1234567890:role/Rigmarole",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "us-east-1",
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
        region: "us-west-2",
        credentials: fromWebToken({
          webIdentityToken: "token-contents",
          roleArn: "arn:aws:iam::1234567890:role/Rigmarole",
          roleSessionName: "role-session-1234",
        }),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
        },
        accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
        sessionToken: "STS_ARWI_SESSION_TOKEN_us-west-2",
      });
    });
  });
});
