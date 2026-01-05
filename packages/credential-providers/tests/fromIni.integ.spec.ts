import { S3 } from "@aws-sdk/client-s3";
import { fromIni } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromIni.name, () => {
  const ctest = new CTest({
    credentialProvider: fromIni,
    providerParams: CTest.defaultRegionConfigProvider,
    profileCredentials: true,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();

  describe("configure from env", () => {
    it("is configurable from env", async () => {
      process.env.AWS_PROFILE = "alt";
      ctest.setIni({
        alt: {
          region: "us-west-2",
          aws_access_key_id: "A",
          aws_secret_access_key: "S",
          aws_session_token: "T",
        },
      });
      const s3 = new S3({
        credentials: fromIni(),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
        accessKeyId: "A",
        secretAccessKey: "S",
        sessionToken: "T",
      });
    });
  });

  describe("configure from profile", () => {
    it("is not configurable from profile", async () => {
      ctest.setIni({
        default: {
          region: "us-west-2",
          aws_access_key_id: "A",
          aws_secret_access_key: "S",
          aws_session_token: "T",
        },
      });
      const s3 = new S3({
        credentials: fromIni(),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
        accessKeyId: "A",
        secretAccessKey: "S",
        sessionToken: "T",
      });
    });
  });

  describe("configure from code", () => {
    it("should be configurable from code", async () => {
      ctest.setIni({
        alt: {
          region: "us-west-2",
          aws_access_key_id: "A",
          aws_secret_access_key: "S",
          aws_session_token: "T",
        },
      });
      const s3 = new S3({
        profile: "alt",
        credentials: fromIni(),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
        accessKeyId: "A",
        secretAccessKey: "S",
        sessionToken: "T",
      });
    });
  });
});
