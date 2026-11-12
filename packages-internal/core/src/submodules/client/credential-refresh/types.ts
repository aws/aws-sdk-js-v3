import type { AwsIdentityProperties, RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity, Logger } from "@smithy/types";

/**
 * credential cache states.
 *
 * - `none`      no credentials have been successfully obtained yet.
 * - `valid`     cached credentials exist and are not in refresh window.
 * - `advisory`  within the advisory window but not the mandatory window.
 * - `mandatory` within the mandatory window.
 * - `expired`   at or past the expiration time.
 *
 * @internal
 */
export type CredentialCacheState = "none" | "valid" | "advisory" | "mandatory" | "expired";

/**
 * The advisory and mandatory refresh windows in effect for one credential set.
 * @internal
 */
export interface CredentialCacheWindows {
  advisoryWindow: number;
  mandatoryWindow: number;
}

/**
 * Options a caller passes to a credential refresh provider.
 * @internal
 */
export type CredentialRefreshCallOptions = AwsIdentityProperties & { forceRefresh?: boolean };

/**
 * A credential provider that owns the credential refresh lifecycle.
 * @internal
 */
export interface CredentialRefreshProvider<
  Identity extends AwsCredentialIdentity = AwsCredentialIdentity,
> extends RuntimeConfigIdentityProvider<Identity> {
  (options?: CredentialRefreshCallOptions): Promise<Identity>;

  /**
   * Expires the cached credentials if they still have the rejected access key ID, so the next call refreshes.
   * Never discards credentials or bypasses the refresh backoff.
   */
  invalidate(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void;

  /**
   * Marks this provider as already wrapped, so it is not wrapped again.
   */
  readonly memoized: true;
}

/**
 * @internal
 */
export interface CredentialRefreshProviderOptions {
  logger?: Logger;
}
