import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetPermissionInput shape
 */
export interface SetPermissionInput {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string;

  /**
   * <p>The user's IAM ARN. This can also be a federated user's ARN.</p>
   */
  IamUserArn: string;

  /**
   * <p>The user is allowed to use SSH to communicate with the instance.</p>
   */
  AllowSsh?: boolean;

  /**
   * <p>The user is allowed to use <b>sudo</b> to elevate privileges.</p>
   */
  AllowSudo?: boolean;

  /**
   * <p>The user's permission level, which must be set to one of the following strings. You cannot set your own permissions level.</p> <ul> <li> <p> <code>deny</code> </p> </li> <li> <p> <code>show</code> </p> </li> <li> <p> <code>deploy</code> </p> </li> <li> <p> <code>manage</code> </p> </li> <li> <p> <code>iam_only</code> </p> </li> </ul> <p>For more information about the permissions associated with these levels, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
   */
  Level?: string;

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
