import {
  _AutoScalingSettingsUpdate,
  _UnmarshalledAutoScalingSettingsUpdate
} from "./_AutoScalingSettingsUpdate";

/**
 * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
 */
export interface _ReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * <p>Autoscaling settings for managing a global secondary index replica's read capacity units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettingsUpdate?: _AutoScalingSettingsUpdate;
}

export interface _UnmarshalledReplicaGlobalSecondaryIndexSettingsUpdate
  extends _ReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * <p>Autoscaling settings for managing a global secondary index replica's read capacity units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettingsUpdate?: _UnmarshalledAutoScalingSettingsUpdate;
}
