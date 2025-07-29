import { Sha256 } from "@aws-crypto/sha256-js";
import { describe, expect, test as it } from "vitest";

import { DsqlSigner, DsqlSignerConfig } from "./Signer";

describe("dsql-signer integration", () => {
  it("creates a token", async () => {
    const allParamsConfig: DsqlSignerConfig = {
      hostname: "localhost",
      region: "us-east-2",
      credentials: {
        accessKeyId: "allParamsAccessKey",
        secretAccessKey: "allParamsSecretAccessKey",
        sessionToken: "allParamsSessionToken",
      },
      expiresIn: 1000,
      sha256: Sha256,
    };
    const signer = new DsqlSigner(allParamsConfig);
    const token = await signer.getDbConnectAdminAuthToken();

    expect(token.split("&").sort()).toMatchObject([
      /localhost\/\?Action=DbConnectAdmin/,
      /X-Amz-Algorithm=AWS4-HMAC-SHA256/,
      /X-Amz-Credential=allParamsAccessKey%2F(\d+)%2Fus-east-2%2Fdsql%2Faws4_request/,
      /X-Amz-Date=(\d+T\d+Z)/,
      /X-Amz-Expires=1000/,
      /X-Amz-Security-Token=allParamsSessionToken/,
      /X-Amz-Signature=(.*?)/,
      /X-Amz-SignedHeaders=host/,
    ]);
  });
});
