import {
  _AutoScalingSettingsDescription,
  _UnmarshalledAutoScalingSettingsDescription
} from "./_AutoScalingSettingsDescription";

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface _ReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string;

  /**
   * <p> The current status of the global secondary index:</p> <ul> <li> <p> <code>CREATING</code> - The global secondary index is being created.</p> </li> <li> <p> <code>UPDATING</code> - The global secondary index is being updated.</p> </li> <li> <p> <code>DELETING</code> - The global secondary index is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The global secondary index is ready for use.</p> </li> </ul>
   */
  IndexStatus?: "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | string;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * <p>Autoscaling settings for a global secondary index replica's read capacity units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettings?: _AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedWriteCapacityUnits?: number;

  /**
   * <p>AutoScaling settings for a global secondary index replica's write capacity units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettings?: _AutoScalingSettingsDescription;
}

export interface _UnmarshalledReplicaGlobalSecondaryIndexSettingsDescription
  extends _ReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * <p>Autoscaling settings for a global secondary index replica's read capacity units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettings?: _UnmarshalledAutoScalingSettingsDescription;

  /**
   * <p>AutoScaling settings for a global secondary index replica's write capacity units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettings?: _UnmarshalledAutoScalingSettingsDescription;
}
