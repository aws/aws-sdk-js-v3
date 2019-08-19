import { _ConfigureShard } from "./_ConfigureShard";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DecreaseReplicaCountInput shape
 */
export interface DecreaseReplicaCountInput {
  /**
   * <p>The id of the replication group from which you want to remove replica nodes.</p>
   */
  ReplicationGroupId: string;

  /**
   * <p>The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ with Automatic Failover is enabled: 1</p> </li> <li> <p>If Multi-AZ with Automatic Failover is not enabled: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>
   */
  NewReplicaCount?: number;

  /**
   * <p>A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.</p>
   */
  ReplicaConfiguration?: Array<_ConfigureShard> | Iterable<_ConfigureShard>;

  /**
   * <p>A list of the node ids to remove from the replication group or node group (shard).</p>
   */
  ReplicasToRemove?: Array<string> | Iterable<string>;

  /**
   * <p>If <code>True</code>, the number of replica nodes is decreased immediately. <code>ApplyImmediately=False</code> is not currently supported.</p>
   */
  ApplyImmediately: boolean;

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
