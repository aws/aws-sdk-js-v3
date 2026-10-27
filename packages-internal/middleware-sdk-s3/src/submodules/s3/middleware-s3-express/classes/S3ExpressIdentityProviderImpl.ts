import type { AwsCredentialIdentity } from "@aws-sdk/types";

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

  private accessKeyId?: string;
  private cacheGeneration = 0;

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
    if (awsIdentity.accessKeyId !== this.accessKeyId) {
      this.accessKeyId = awsIdentity.accessKeyId;
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
