import { S3ExpressIdentityCacheEntry } from "./S3ExpressIdentityCacheEntry";

/**
 * @internal
 *
 * Stores identities by key.
 */
export class S3ExpressIdentityCache {
  private lastPurgeTime = Date.now();

  public static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 30_000;

  public constructor(private data: Record<string, S3ExpressIdentityCacheEntry> = {}) {}

  public get(key: string): undefined | S3ExpressIdentityCacheEntry {
    const entry: S3ExpressIdentityCacheEntry = this.data[key];
    if (!entry) {
      return;
    }

    return entry;
  }

  public set(key: string, entry: S3ExpressIdentityCacheEntry): S3ExpressIdentityCacheEntry {
    this.data[key] = entry;
    return entry;
  }

  public delete(key: string) {
    delete this.data[key];
  }

  public async purgeExpired(): Promise<void> {
    const now = Date.now();
    if (this.lastPurgeTime + S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
      return;
    }

    for (const key in this.data) {
      const entry = this.data[key];
      if (!entry.isRefreshing) {
        const credential = await entry.identity;
        if (credential.expiration) {
          if (credential.expiration.getTime() < now) {
            delete this.data[key];
          }
        }
      }
    }
  }
}
