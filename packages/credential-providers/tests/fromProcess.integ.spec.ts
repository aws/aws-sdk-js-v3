import { S3 } from "@aws-sdk/client-s3";
import { fromProcess } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromProcess.name, () => {
  const ctest = new CTest({
    credentialProvider: fromProcess,
  });

  describe("configure from env", () => {
    it("is partially configurable from env - but only in selecting a profile", async () => {
      process.env.AWS_PROFILE = "alt";
      ctest.setIni({
        alt: {
          credential_process: "credential-process",
        },
      });
      const s3 = new S3({
        region: "us-east-2",
        credentials: fromProcess({}),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROCESS: "w",
        },
        accessKeyId: "PROCESS_ACCESS_KEY_ID",
        secretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
        sessionToken: "PROCESS_SESSION_TOKEN",
      });
    });
  });

  describe("configure from profile", () => {
    it("is configurable from profile", async () => {
      ctest.setIni({
        default: {
          credential_process: "credential-process",
        },
      });
      const s3 = new S3({
        region: "us-east-2",
        credentials: fromProcess(),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROCESS: "w",
        },
        accessKeyId: "PROCESS_ACCESS_KEY_ID",
        secretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
        sessionToken: "PROCESS_SESSION_TOKEN",
      });
    });
  });

  describe("configure from code", () => {
    it("is partially configurable from code - but only in selecting a profile", async () => {
      ctest.setIni({
        alt: {
          credential_process: "credential-process",
        },
      });
      const s3 = new S3({
        region: "us-east-2",
        profile: "alt",
        credentials: fromProcess({}),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROCESS: "w",
        },
        accessKeyId: "PROCESS_ACCESS_KEY_ID",
        secretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
        sessionToken: "PROCESS_SESSION_TOKEN",
      });
    });
  });
});
