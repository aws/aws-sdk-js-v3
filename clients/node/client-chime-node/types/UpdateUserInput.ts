import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateUserInput shape
 */
export interface UpdateUserInput {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string;

  /**
   * <p>The user ID.</p>
   */
  UserId: string;

  /**
   * <p>The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.</p>
   */
  LicenseType?: "Basic" | "Plus" | "Pro" | "ProTrial" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
