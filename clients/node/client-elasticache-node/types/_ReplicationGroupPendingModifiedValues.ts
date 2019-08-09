import {
  _ReshardingStatus,
  _UnmarshalledReshardingStatus
} from "./_ReshardingStatus";

/**
 * <p>The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.</p>
 */
export interface _ReplicationGroupPendingModifiedValues {
  /**
   * <p>The primary cluster ID that is applied immediately (if <code>--apply-immediately</code> was specified), or during the next maintenance window.</p>
   */
  PrimaryClusterId?: string;

  /**
   * <p>Indicates the status of Multi-AZ with automatic failover for this Redis replication group.</p> <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p> <ul> <li> <p>Redis versions earlier than 2.8.6.</p> </li> <li> <p>Redis (cluster mode disabled): T1 node types.</p> </li> <li> <p>Redis (cluster mode enabled): T1 node types.</p> </li> </ul>
   */
  AutomaticFailoverStatus?: "enabled" | "disabled" | string;

  /**
   * <p>The status of an online resharding operation.</p>
   */
  Resharding?: _ReshardingStatus;
}

export interface _UnmarshalledReplicationGroupPendingModifiedValues
  extends _ReplicationGroupPendingModifiedValues {
  /**
   * <p>The status of an online resharding operation.</p>
   */
  Resharding?: _UnmarshalledReshardingStatus;
}
