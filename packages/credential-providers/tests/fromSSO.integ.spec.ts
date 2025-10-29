import { S3 } from "@aws-sdk/client-s3";
import { fromSSO } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromSSO.name, () => {
  const ctest = new CTest({
    credentialProvider: fromSSO,
    providerParams: (testParams) => {
      return {
        ssoStartUrl: "SSO_START_URL",
        ssoAccountId: "1234567890",
        ssoRegion: "sso-region-1",
        ssoRoleName: "arn:aws:iam::1234567890:role/Rigmarole",
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
      ctest.setIni({
        default: {
          sso_start_url: "SSO_START_URL",
          sso_account_id: "1234567890",
          sso_region: "us-east-1",
          sso_role_name: "Rigmarole",
        },
      });
      const s3 = new S3({
        region: "us-east-1",
        credentials: fromSSO({}),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_SSO_LEGACY: "u",
        },
        accessKeyId: "SSO_ACCESS_KEY_ID",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        secretAccessKey: "SSO_SECRET_ACCESS_KEY",
        sessionToken: "SSO_SESSION_TOKEN_us-east-1",
      });
    });
  });

  describe("configure from code", () => {
    it("should be configurable from code", async () => {
      const s3 = new S3({
        credentials: fromSSO({
          ssoStartUrl: "SSO_START_URL",
          ssoAccountId: "1234567890",
          ssoRegion: "us-east-1",
          ssoRoleName: "Rigmarole",
        }),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_SSO_LEGACY: "u",
        },
        accessKeyId: "SSO_ACCESS_KEY_ID",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        secretAccessKey: "SSO_SECRET_ACCESS_KEY",
        sessionToken: "SSO_SESSION_TOKEN_us-east-1",
      });
    });
  });
});
