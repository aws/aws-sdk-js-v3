import { afterAll, describe, expect, test as it } from "vitest";

import { S3ExpressIdentityCache } from "./S3ExpressIdentityCache";
import { S3ExpressIdentityCacheEntry } from "./S3ExpressIdentityCacheEntry";

describe(S3ExpressIdentityCache.name, () => {
  const s3ExpressCredentials = {
    accessKeyId: "MOCK_S3_EXPRESS_ACCESS_KEY_ID",
    secretAccessKey: "MOCK_S3_EXPRESS_SECRET_ACCESS_KEY",
    sessionToken: "MOCK_S3_EXPRESS_SESSION_TOKEN",
    expiration: new Date(Date.now() + 10_000),
  };

  afterAll(() => {
    S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 30_000;
  });

  it("can set, get, and delete entries", async () => {
    const cache = new S3ExpressIdentityCache();
    const entry = new S3ExpressIdentityCacheEntry(Promise.resolve(s3ExpressCredentials));

    cache.set("abc", entry);
    expect(await cache.get("abc")?.identity).toEqual(s3ExpressCredentials);

    cache.delete("abc");
    expect(cache.get("abc")).toBeUndefined();
  });

  it("can purge expired entries", async () => {
    const expiredCredentials = {
      accessKeyId: "MOCK_S3_EXPRESS_ACCESS_KEY_ID",
      secretAccessKey: "MOCK_S3_EXPRESS_SECRET_ACCESS_KEY",
      sessionToken: "MOCK_S3_EXPRESS_SESSION_TOKEN",
      expiration: new Date(Date.now() - 1_000),
    };

    const cache = new S3ExpressIdentityCache();
    const entry = new S3ExpressIdentityCacheEntry(Promise.resolve(s3ExpressCredentials));
    const expiredEntry = new S3ExpressIdentityCacheEntry(Promise.resolve(expiredCredentials));

    cache.set("abc", entry);
    cache.set("expired", expiredEntry);
    expect(await cache.get("abc")?.identity).toEqual(s3ExpressCredentials);
    expect(await cache.get("expired")?.identity).toEqual(expiredCredentials);

    S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = -10;
    await cache.purgeExpired();
    expect(await cache.get("abc")?.identity).toEqual(s3ExpressCredentials);
    expect(cache.get("expired")).toBeUndefined();
  });
});
