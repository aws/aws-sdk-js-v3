import { CredentialsProviderError } from "@smithy/core/config";
import type { Logger } from "@smithy/types";

/**
 * Stable codes for failures of the credential daemon credential provider.
 * @internal
 */
export type CredentialDaemonErrorCode =
  | "NOT_RUNNING"
  | "REAUTH_REQUIRED"
  | "CREDENTIAL_NOT_FOUND"
  | "REQUEST_REJECTED"
  | "UNSUPPORTED_MATERIAL"
  | "PROTOCOL_ERROR"
  | "INVALID_CONFIG"
  | "UNSUPPORTED_PLATFORM";

/**
 * A failure of the credential daemon credential provider.
 * It never lets a credential chain try the next provider.
 * @internal
 */
export class CredentialDaemonProviderError extends CredentialsProviderError {
  name = "CredentialDaemonProviderError";

  /**
   * The stable failure code.
   */
  public readonly code: CredentialDaemonErrorCode;

  public constructor(message: string, code: CredentialDaemonErrorCode, options: { logger?: Logger } = {}) {
    super(message, { logger: options.logger, tryNextLink: false });
    Object.setPrototypeOf(this, CredentialDaemonProviderError.prototype);
    this.code = code;
  }
}
