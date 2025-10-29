import { S3 } from "@aws-sdk/client-s3";
import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";
import { describe, expect, test as it } from "vitest";

import { CTest } from "./_test-lib.spec";

describe(fromTemporaryCredentials.name, () => {
  const ctest = new CTest({
    credentialProvider: fromTemporaryCredentials,
    providerParams: (testParams) => {
      return {
        params: {
          RoleArn: "arn:aws:iam::1234567890:role/Rigamarole",
        },
        ...CTest.defaultRegionConfigProvider(testParams),
      };
    },
    profileCredentials: false,
    fallbackRegion: "us-east-1",
  });

  ctest.testRegion();

  it("should resolve region", async () => {
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
          RoleArn: "arn:aws:iam::1234567890:role/Rigamarole",
        },
      }),
    });

    expect(await s3.config.credentials()).toMatchObject({
      sessionToken: "STS_AR_SESSION_TOKEN_us-east-2",
    });
  });
});
