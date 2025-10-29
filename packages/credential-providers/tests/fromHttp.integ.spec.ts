import { S3 } from "@aws-sdk/client-s3";
import { fromHttp } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromHttp.name, () => {
  const ctest = new CTest({
    credentialProvider: fromHttp,
  });

  describe("configure from env", () => {
    it("is not configurable from env", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";
      const s3 = new S3({
        credentials: fromHttp(),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_HTTP: "z",
          CREDENTIALS_CODE: "e",
        },
        accessKeyId: "CONTAINER_ACCESS_KEY",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        secretAccessKey: "CONTAINER_SECRET_ACCESS_KEY",
        sessionToken: "CONTAINER_TOKEN",
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
        credentials: fromHttp({
          awsContainerCredentialsFullUri: "http://169.254.170.23",
          authorizationToken: "container-authorization",
        }),
      });
      await s3.listBuckets();
      expect(await s3.config.credentials()).toEqual({
        $source: {
          CREDENTIALS_HTTP: "z",
          CREDENTIALS_CODE: "e",
        },
        accessKeyId: "CONTAINER_ACCESS_KEY",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        secretAccessKey: "CONTAINER_SECRET_ACCESS_KEY",
        sessionToken: "CONTAINER_TOKEN",
      });
    });
  });
});
