import { S3 } from "@aws-sdk/client-s3";
import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib";

describe(fromTemporaryCredentials.name, () => {
  const ctest = new CTest({
    credentialProvider: fromTemporaryCredentials,
    providerParams: (testParams) => {
      return {
        params: {
          RoleArn: "arn:aws:iam::1234567890:role/Rigmarole",
        },
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();

  describe("configure from env", () => {
    it("is not configurable from env", async () => {
      expect("ok").toBeTruthy();
    });
  });

  describe("configure from profile", () => {
    it("is not configurable from profile", async () => {
      expect("ok").toBeTruthy();
    });
  });

  describe("configure from code", () => {
    it("should be configurable from code", async () => {
      ctest.setIni({
        alt: {
          region: "us-east-2",
        },
      });

      const s3 = new S3({
        profile: "alt",
        credentials: fromTemporaryCredentials({
          masterCredentials: {
            accessKeyId: "M",
            secretAccessKey: "M",
          },
          params: {
            RoleArn: "arn:aws:iam::1234567890:role/Rigmarole",
          },
        }),
      });

      expect(await s3.config.credentials()).toMatchObject({
        sessionToken: "STS_AR_SESSION_TOKEN_us-east-2",
      });
    });
  });
});
