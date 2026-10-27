import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { Sha256 } from "@smithy/core/checksum";
import { toHex, toUint8Array } from "@smithy/core/serde";

import type { S3ExpressIdentity } from "../interfaces/S3ExpressIdentity";
import type { S3ExpressIdentityProvider } from "../interfaces/S3ExpressIdentityProvider";
import { S3ExpressIdentityCache } from "./S3ExpressIdentityCache";
import { S3ExpressIdentityCacheEntry } from "./S3ExpressIdentityCacheEntry";

/**
 * @internal
 *
 * This should match S3::CreateSessionCommandOutput::SessionCredentials
 * but it is not imported since that would create a circular dependency.
 */
type Credentials = {
  AccessKeyId: string | undefined;
  SecretAccessKey: string | undefined;
  SessionToken: string | undefined;
  Expiration: Date | undefined;
};

/**
 * @internal
 */
export class S3ExpressIdentityProviderImpl implements S3ExpressIdentityProvider {
  public static REFRESH_WINDOW_MS = 60_000;

  private identityHash?: string;
  private cacheGeneration = 0;
  private readonly identityHashes = new WeakMap<AwsCredentialIdentity, Promise<string>>();

  public constructor(
    private createSessionFn: (bucket: string) => Promise<{ Credentials: Credentials }>,
    private cache: S3ExpressIdentityCache = new S3ExpressIdentityCache()
  ) {}

  public async getS3ExpressIdentity(
    awsIdentity: AwsCredentialIdentity,
    identityProperties: { Bucket: string } & Record<string, string>
  ): Promise<S3ExpressIdentity> {
    const bucket = identityProperties.Bucket;
    const { cache } = this;
    const identityHash = await this.getIdentityHash(awsIdentity);
    if (identityHash !== this.identityHash) {
      this.identityHash = identityHash;
      this.cacheGeneration++;
      cache.clear();
    }
    const cacheGeneration = this.cacheGeneration;

    const entry = cache.get(bucket);
    if (entry) {
      return entry.identity.then((identity) => {
        const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
        if (isExpired) {
          return cache.set(bucket, new S3ExpressIdentityCacheEntry(this.getIdentity(bucket))).identity;
        }

        const isExpiringSoon =
          (identity.expiration?.getTime() ?? 0) < Date.now() + S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
        if (isExpiringSoon && !entry.isRefreshing) {
          // set lock on entry.
          entry.isRefreshing = true;

          // Promise not awaited. The cache entry is not replaced until the credential is received.
          this.getIdentity(bucket).then((id) => {
            if (cacheGeneration === this.cacheGeneration) {
              cache.set(bucket, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
            }
          });
        }

        return identity;
      });
    }

    return cache.set(bucket, new S3ExpressIdentityCacheEntry(this.getIdentity(bucket))).identity;
  }

  private getIdentityHash(identity: AwsCredentialIdentity): Promise<string> {
    let identityHash = this.identityHashes.get(identity);
    if (!identityHash) {
      const hash = new Sha256();
      hash.update(toUint8Array(identity.accessKeyId));
      identityHash = hash.digest().then(toHex);
      this.identityHashes.set(identity, identityHash);
    }
    return identityHash;
  }

  private async getIdentity(bucket: string): Promise<S3ExpressIdentity> {
    await this.cache.purgeExpired().catch((error) => {
      console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
    });
    const session = await this.createSessionFn(bucket);
    if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) {
      throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
    }
    const identity: S3ExpressIdentity = {
      accessKeyId: session.Credentials.AccessKeyId!,
      secretAccessKey: session.Credentials.SecretAccessKey!,
      sessionToken: session.Credentials.SessionToken,
      expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : undefined,
    };
    return identity;
  }
}
