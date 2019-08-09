import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserProfileInput shape
 */
export interface CreateUserProfileInput {
  /**
   * <p>The user's IAM ARN; this can also be a federated user's ARN.</p>
   */
  IamUserArn: string;

  /**
   * <p>The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example, <code>my.name</code> will be changed to <code>myname</code>. If you do not specify an SSH user name, AWS OpsWorks Stacks generates one from the IAM user name. </p>
   */
  SshUsername?: string;

  /**
   * <p>The user's public SSH key.</p>
   */
  SshPublicKey?: string;

  /**
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Setting an IAM User's Public SSH Key</a>.</p>
   */
  AllowSelfManagement?: boolean;

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
