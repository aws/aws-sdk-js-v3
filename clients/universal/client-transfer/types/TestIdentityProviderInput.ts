import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TestIdentityProviderInput shape
 */
export interface TestIdentityProviderInput {
  /**
   * <p>A system assigned identifier for a specific server. That server's user authentication method is tested with a user name and password.</p>
   */
  ServerId: string;

  /**
   * <p>This request parameter is name of the user account to be tested.</p>
   */
  UserName: string;

  /**
   * <p>The password of the user account to be tested.</p>
   */
  UserPassword?: string;

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
