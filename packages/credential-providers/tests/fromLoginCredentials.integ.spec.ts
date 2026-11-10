import { S3 } from "@aws-sdk/client-s3";
import { fromLoginCredentials } from "@aws-sdk/credential-providers";
import { createHash, generateKeyPairSync } from "node:crypto";
import { promises as fsPromises } from "node:fs";
import { join } from "node:path";
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

  describe("refresh", () => {
    const writeExpiredToken = async (extra: Record<string, string> = {}) => {
      const { privateKey } = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
      const cacheName = createHash("sha256").update(Buffer.from(loginSession, "utf8")).digest("hex");
      await fsPromises.writeFile(
        join(process.env.AWS_LOGIN_CACHE_DIRECTORY!, `${cacheName}.json`),
        JSON.stringify({
          accessToken: {
            accessKeyId: "EXPIRED_ACCESS_KEY_ID",
            secretAccessKey: "EXPIRED_SECRET_ACCESS_KEY",
            sessionToken: "EXPIRED_SESSION_TOKEN",
            accountId: "012345678910",
            expiresAt: "2020-01-01T00:00:00.000Z",
          },
          tokenType: "accessToken",
          clientId: "test-client-id",
          refreshToken: "test-refresh-token",
          idToken: "test-id-token",
          dpopKey: privateKey.export({ type: "sec1", format: "pem" }),
          ...extra,
        }),
        "utf8"
      );
    };

    const refreshedCredentials = (region: string) => ({
      $source: {
        CREDENTIALS_LOGIN: "AD",
      },
      accessKeyId: "LOGIN_ACCESS_KEY_ID",
      secretAccessKey: "LOGIN_SECRET_ACCESS_KEY",
      sessionToken: `LOGIN_SESSION_TOKEN_${region}`,
      accountId: "012345678910",
      expiration: expect.any(Date),
    });

    it("should refresh in the token's signInRegion instead of the profile or client region", async () => {
      await writeExpiredToken({ signInRegion: "eu-west-1" });
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
      expect(await s3.config.credentials()).toEqual(refreshedCredentials("eu-west-1"));
    });

    it("should refresh in the profile region when the token has no signInRegion", async () => {
      await writeExpiredToken();
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
      expect(await s3.config.credentials()).toEqual(refreshedCredentials("ap-south-2"));
    });

    it("should refresh in the token's signInRegion instead of clientConfig.region", async () => {
      await writeExpiredToken({ signInRegion: "eu-west-1" });
      ctest.setIni({
        default: {
          login_session: loginSession,
          region: "ap-south-2",
        },
      });

      const s3 = new S3({
        region: "us-east-1",
        credentials: fromLoginCredentials({ clientConfig: { region: "us-west-2" } }),
      });

      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual(refreshedCredentials("eu-west-1"));
    });
  });
});
