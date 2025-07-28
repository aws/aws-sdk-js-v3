import { describe, expect, test as it } from "vitest";

import { Signer } from "./Signer";

describe("rds-signer integration", () => {
  it("creates an auth token", async () => {
    const signer = new Signer({
      credentials: {
        accessKeyId: "INTEG",
        secretAccessKey: "INTEG",
      },
      username: "me",
      hostname: "localhost",
      port: 443,
      region: "us-west-2",
    });

    const token = await signer.getAuthToken();

    expect(token.split("&").sort()).toMatchObject([
      /localhost:443\/\?Action=connect/,
      /DBUser=me/,
      /X-Amz-Algorithm=AWS4-HMAC-SHA256/,
      /X-Amz-Credential=INTEG%2F(\d{8})%2Fus-west-2%2Frds-db%2Faws4_request/,
      /X-Amz-Date=(\d{8})T(\d+)Z/,
      /X-Amz-Expires=900/,
      /X-Amz-Signature=(.*?)/,
      /X-Amz-SignedHeaders=host/,
    ]);
  });
});
