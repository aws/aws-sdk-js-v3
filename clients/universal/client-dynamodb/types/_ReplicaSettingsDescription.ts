import {
  _BillingModeSummary,
  _UnmarshalledBillingModeSummary
} from "./_BillingModeSummary";
import {
  _AutoScalingSettingsDescription,
  _UnmarshalledAutoScalingSettingsDescription
} from "./_AutoScalingSettingsDescription";
import {
  _ReplicaGlobalSecondaryIndexSettingsDescription,
  _UnmarshalledReplicaGlobalSecondaryIndexSettingsDescription
} from "./_ReplicaGlobalSecondaryIndexSettingsDescription";

/**
 * <p>Represents the properties of a replica.</p>
 */
export interface _ReplicaSettingsDescription {
  /**
   * <p>The region name of the replica.</p>
   */
  RegionName: string;

  /**
   * <p>The current state of the region:</p> <ul> <li> <p> <code>CREATING</code> - The region is being created.</p> </li> <li> <p> <code>UPDATING</code> - The region is being updated.</p> </li> <li> <p> <code>DELETING</code> - The region is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The region is ready for use.</p> </li> </ul>
   */
  ReplicaStatus?: "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | string;

  /**
   * <p>The read/write capacity mode of the replica.</p>
   */
  ReplicaBillingModeSummary?: _BillingModeSummary;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
   */
  ReplicaProvisionedReadCapacityUnits?: number;

  /**
   * <p>Autoscaling settings for a global table replica's read capacity units.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingSettings?: _AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ReplicaProvisionedWriteCapacityUnits?: number;

  /**
   * <p>AutoScaling settings for a global table replica's write capacity units.</p>
   */
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: _AutoScalingSettingsDescription;

  /**
   * <p>Replica global secondary index settings for the global table.</p>
   */
  ReplicaGlobalSecondaryIndexSettings?:
    | Array<_ReplicaGlobalSecondaryIndexSettingsDescription>
    | Iterable<_ReplicaGlobalSecondaryIndexSettingsDescription>;
}

export interface _UnmarshalledReplicaSettingsDescription
  extends _ReplicaSettingsDescription {
  /**
   * <p>The read/write capacity mode of the replica.</p>
   */
  ReplicaBillingModeSummary?: _UnmarshalledBillingModeSummary;

  /**
   * <p>Autoscaling settings for a global table replica's read capacity units.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingSettings?: _UnmarshalledAutoScalingSettingsDescription;

  /**
   * <p>AutoScaling settings for a global table replica's write capacity units.</p>
   */
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: _UnmarshalledAutoScalingSettingsDescription;

  /**
   * <p>Replica global secondary index settings for the global table.</p>
   */
  ReplicaGlobalSecondaryIndexSettings?: Array<
    _UnmarshalledReplicaGlobalSecondaryIndexSettingsDescription
  >;
}
