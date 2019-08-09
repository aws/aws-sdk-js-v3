import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResetPasswordInput shape
 */
export interface ResetPasswordInput {
  /**
   * <p>The identifier of the organization that contains the user for which the password is reset.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifier of the user for whom the password is reset.</p>
   */
  UserId: string;

  /**
   * <p>The new password for the user.</p>
   */
  Password: string;

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
