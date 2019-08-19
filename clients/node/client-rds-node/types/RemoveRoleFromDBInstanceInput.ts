import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveRoleFromDBInstanceInput shape
 */
export interface RemoveRoleFromDBInstanceInput {
  /**
   * <p>The name of the DB instance to disassociate the IAM role from.</p>
   */
  DBInstanceIdentifier: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance, for example <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   */
  RoleArn: string;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be disassociated from. For the list of supported feature names, see <code>DBEngineVersion</code>. </p>
   */
  FeatureName: string;

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
