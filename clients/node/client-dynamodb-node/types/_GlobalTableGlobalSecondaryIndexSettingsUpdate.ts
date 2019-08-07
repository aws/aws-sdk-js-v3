import {
  _AutoScalingSettingsUpdate,
  _UnmarshalledAutoScalingSettingsUpdate
} from "./_AutoScalingSettingsUpdate";

/**
 * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
 */
export interface _GlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code> </p>
   */
  ProvisionedWriteCapacityUnits?: number;

  /**
   * <p>AutoScaling settings for managing a global secondary index's write capacity units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettingsUpdate?: _AutoScalingSettingsUpdate;
}

export interface _UnmarshalledGlobalTableGlobalSecondaryIndexSettingsUpdate
  extends _GlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * <p>AutoScaling settings for managing a global secondary index's write capacity units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettingsUpdate?: _UnmarshalledAutoScalingSettingsUpdate;
}
