import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateClusterInput shape
 */
export interface UpdateClusterInput {
  /**
   * <p>The name of the DAX cluster to be modified.</p>
   */
  ClusterName: string;

  /**
   * <p>A description of the changes being made to the cluster.</p>
   */
  Description?: string;

  /**
   * <p>A range of time when maintenance of DAX cluster software will be performed. For example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The current state of the topic.</p>
   */
  NotificationTopicStatus?: string;

  /**
   * <p>The name of a parameter group for this cluster.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>A list of user-specified security group IDs to be assigned to each node in the DAX cluster. If this parameter is not specified, DAX assigns the default VPC security group to each node.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

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
