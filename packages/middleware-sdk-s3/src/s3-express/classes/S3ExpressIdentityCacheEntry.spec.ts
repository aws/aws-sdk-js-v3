import { describe, expect, test as it } from "vitest";

import { S3ExpressIdentityCacheEntry } from "./S3ExpressIdentityCacheEntry";

describe(S3ExpressIdentityCacheEntry.name, () => {
  const s3ExpressCredentials = {
    accessKeyId: "MOCK_S3_EXPRESS_ACCESS_KEY_ID",
    secretAccessKey: "MOCK_S3_EXPRESS_SECRET_ACCESS_KEY",
    sessionToken: "MOCK_S3_EXPRESS_SESSION_TOKEN",
    expiration: new Date(Date.now() + 10_000),
  };

  it("should update access date when retrieving identity", async () => {
    const entry = new S3ExpressIdentityCacheEntry(Promise.resolve(s3ExpressCredentials));
    const accessed = entry.accessed;

    await new Promise((r) => setTimeout(r, 10));

    entry.identity;

    expect(entry.accessed).toBeGreaterThan(accessed);
  });
});
