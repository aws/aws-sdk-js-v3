import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddRoleToDBClusterInput shape
 */
export interface AddRoleToDBClusterInput {
  /**
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   */
  DBClusterIdentifier: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;

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
