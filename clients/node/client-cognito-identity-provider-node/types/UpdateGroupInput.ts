import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGroupInput shape
 */
export interface UpdateGroupInput {
  /**
   * <p>The name of the group.</p>
   */
  GroupName: string;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string;

  /**
   * <p>A string containing the new description of the group.</p>
   */
  Description?: string;

  /**
   * <p>The new role ARN for the group. This is used for setting the <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the token.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new precedence value for the group. For more information about this parameter, see .</p>
   */
  Precedence?: number;

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
