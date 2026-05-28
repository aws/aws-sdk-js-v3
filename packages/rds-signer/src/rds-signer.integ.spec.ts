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

  it("force refreshes credentials expiring within 15 minutes", async () => {
    let callCount = 0;

    const provider = async (options?: Record<string, any>) => {
      ++callCount;
      if (callCount === 1) {
        return {
          accessKeyId: "EXPIRING_KEY",
          secretAccessKey: "secret",
          expiration: new Date(Date.now() + 14 * 60_000),
        };
      }
      return {
        accessKeyId: "REFRESHED_KEY",
        secretAccessKey: "secret",
        expiration: new Date(Date.now() + 60 * 60_000),
      };
    };

    const signer = new Signer({
      credentials: provider,
      username: "me",
      hostname: "localhost",
      port: 443,
      region: "us-west-2",
    });

    const token = await signer.getAuthToken();

    expect(callCount).toBe(2);
    expect(token).toContain("X-Amz-Credential=REFRESHED_KEY");
    expect(token).not.toContain("EXPIRING_KEY");
    expect(token).toContain("X-Amz-Expires=900");
    expect(token).not.toMatch(/^https?:\/\//);
  });
});
