import { S3 } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromEnv.name, () => {
  const ctest = new CTest({
    credentialProvider: fromEnv,
  });

  describe("configure from env", () => {
    it("is configurable from env", async () => {
      process.env.AWS_ACCESS_KEY_ID = "AK";
      process.env.AWS_SECRET_ACCESS_KEY = "SK";
      process.env.AWS_SESSION_TOKEN = "session-token-env";
      const s3 = new S3({});
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_ENV_VARS: "g",
        },
        accessKeyId: "AK",
        secretAccessKey: "SK",
        sessionToken: "session-token-env",
      });
    });
  });

  describe("configure from profile", () => {
    it("is not configurable from profile", async () => {
      expect("ok").toBeTruthy();
    });
  });

  describe("configure from code", () => {
    it("is not configurable from code", async () => {
      expect("ok").toBeTruthy();
    });
  });
});
