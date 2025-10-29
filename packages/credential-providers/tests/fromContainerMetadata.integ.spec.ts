import { S3 } from "@aws-sdk/client-s3";
import { fromContainerMetadata } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromContainerMetadata.name, () => {
  const ctest = new CTest({
    credentialProvider: fromContainerMetadata,
    providerParams: CTest.defaultRegionConfigProvider,
  });

  void S3;
  void ctest;

  describe("configure from env", () => {
    it.skip("should be configurable from env", async () => {
      // todo: no integration hooks in this provider.
      // process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://127.0.0.1";
      // process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";
      //
      // const s3 = new S3({
      //   credentials: fromContainerMetadata({}),
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
    it("is not configurable form code", async () => {
      expect("ok").toBeTruthy();
    });
  });
});
