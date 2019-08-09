import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserProfileInput shape
 */
export interface CreateUserProfileInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string;

  /**
   * <p>The name that will be displayed as the friendly name for the user in AWS CodeStar. </p>
   */
  displayName: string;

  /**
   * <p>The email address that will be displayed as part of the user's profile in AWS CodeStar.</p>
   */
  emailAddress: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the user remote access to project resources, this public key will be used along with the user's private key for SSH access.</p>
   */
  sshPublicKey?: string;

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
