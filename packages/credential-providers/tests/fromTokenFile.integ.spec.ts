import { S3 } from "@aws-sdk/client-s3";
import { fromTokenFile } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromTokenFile.name, () => {
  const ctest = new CTest({
    credentialProvider: fromTokenFile,
    providerParams: (testParams) => {
      return {
        webIdentityTokenFile: "token-filepath",
        roleArn: "arn:aws:iam::1234567890:role/Rigmarole",
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();

  describe("configure from env", () => {
    it("is configurable from env", async () => {
      process.env.AWS_WEB_IDENTITY_TOKEN_FILE = "token-filepath";
      process.env.AWS_ROLE_ARN = "arn:aws:iam::1234567890:role/Rigmarole";
      process.env.AWS_ROLE_SESSION_NAME = "role-session-1234";
      const s3 = new S3({
        region: "us-west-2",
        credentials: fromTokenFile({}),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
          CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN: "h",
        },
        accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
        sessionToken: "STS_ARWI_SESSION_TOKEN_us-west-2",
      });
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
        credentials: fromTokenFile({
          webIdentityTokenFile: "token-filepath",
          roleArn: "arn:aws:iam::1234567890:role/Rigmarole",
          roleSessionName: "role-session-1234",
        }),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
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
