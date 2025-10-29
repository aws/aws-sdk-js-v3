import { S3 } from "@aws-sdk/client-s3";
import { fromInstanceMetadata } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromInstanceMetadata.name, () => {
  const ctest = new CTest({
    credentialProvider: fromInstanceMetadata,
  });

  void ctest;

  describe("configure from env", () => {
    it.skip("is configurable from env", async () => {
      void S3;
      // todo: there are no integration hooks in this provider.
      // process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      // process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";
      // const s3 = new S3({
      //   credentials: fromInstanceMetadata(),
      // });
      // await s3.listBuckets();
      // expect(await s3.config.credentials()).toEqual({});
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
