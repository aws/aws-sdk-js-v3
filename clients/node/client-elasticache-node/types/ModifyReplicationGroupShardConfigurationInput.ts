import { _ReshardingConfiguration } from "./_ReshardingConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.</p>
 */
export interface ModifyReplicationGroupShardConfigurationInput {
  /**
   * <p>The name of the Redis (cluster mode enabled) cluster (replication group) on which the shards are to be configured.</p>
   */
  ReplicationGroupId: string;

  /**
   * <p>The number of node groups (shards) that results from the modification of the shard configuration.</p>
   */
  NodeGroupCount: number;

  /**
   * <p>Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is <code>true</code>.</p> <p>Value: true</p>
   */
  ApplyImmediately: boolean;

  /**
   * <p>Specifies the preferred availability zones for each node group in the cluster. If the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards), you can use this parameter to specify the preferred availability zones of the cluster's shards. If you omit this parameter ElastiCache selects availability zones for you.</p> <p>You can specify this parameter only if the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards).</p>
   */
  ReshardingConfiguration?:
    | Array<_ReshardingConfiguration>
    | Iterable<_ReshardingConfiguration>;

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRemove</code> is a list of <code>NodeGroupId</code>s to remove from the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups listed by <code>NodeGroupsToRemove</code> from the cluster.</p>
   */
  NodeGroupsToRemove?: Array<string> | Iterable<string>;

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRetain</code> is a list of <code>NodeGroupId</code>s to retain in the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups except those listed by <code>NodeGroupsToRetain</code> from the cluster.</p>
   */
  NodeGroupsToRetain?: Array<string> | Iterable<string>;

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
