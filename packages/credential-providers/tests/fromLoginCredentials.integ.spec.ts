import { S3 } from "@aws-sdk/client-s3";
import { fromLoginCredentials } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromLoginCredentials.name, () => {
  const ctest = new CTest({
    credentialProvider: fromLoginCredentials,
    providerParams: (testParams) => {
      return {
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: true,
    fallbackRegion: "unresolved",
  });

  const loginSession = "arn:aws:sts::012345678910:assumed-role/Test";

  ctest.testRegion();

  describe("configure from env", () => {
    it("is not configurable from env", async () => {
      expect("ok").toBeTruthy();
    });
  });

  describe("configure from profile", () => {
    it("should load credentials from profile with login_session", async () => {
      ctest.setIni({
        default: {
          login_session: loginSession,
          region: "ap-south-2",
        },
      });

      const s3 = new S3({
        region: "us-east-1",
        credentials: fromLoginCredentials({}),
      });

      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_LOGIN: "AD",
        },
        accessKeyId: "LOGIN_ACCESS_KEY_ID",
        secretAccessKey: "LOGIN_SECRET_ACCESS_KEY",
        sessionToken: "LOGIN_SESSION_TOKEN",
        accountId: "012345678910",
        expiration: expect.any(Date),
      });
    });

    it("should throw error when profile lacks login_session", async () => {
      ctest.setIni({
        default: {
          region: "us-east-1",
        },
      });

      const s3 = new S3({
        region: "us-east-1",
        credentials: fromLoginCredentials(),
      });

      await expect(s3.listBuckets()).rejects.toThrow("Profile default does not contain login_session.");
    });
  });

  describe("configure from code", () => {
    it("should be configurable with profile parameter", async () => {
      ctest.setIni({
        test: {
          login_session: loginSession,
          region: "us-west-2",
        },
      });

      const s3 = new S3({
        region: "us-west-2",
        credentials: fromLoginCredentials({ profile: "test" }),
      });

      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_LOGIN: "AD",
        },
        accessKeyId: "LOGIN_ACCESS_KEY_ID",
        secretAccessKey: "LOGIN_SECRET_ACCESS_KEY",
        sessionToken: "LOGIN_SESSION_TOKEN",
        accountId: "012345678910",
        expiration: expect.any(Date),
      });
    });
  });
});
