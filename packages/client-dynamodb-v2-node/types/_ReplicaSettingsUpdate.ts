import {_AutoScalingSettingsUpdate, _UnmarshalledAutoScalingSettingsUpdate} from './_AutoScalingSettingsUpdate';
import {_ReplicaGlobalSecondaryIndexSettingsUpdate, _UnmarshalledReplicaGlobalSecondaryIndexSettingsUpdate} from './_ReplicaGlobalSecondaryIndexSettingsUpdate';

/**
 * <p>Represents the settings for a global table in a region that will be modified.</p>
 */
export interface _ReplicaSettingsUpdate {
    /**
     * <p>The region of the replica to be added.</p>
     */
    RegionName: string;

    /**
     * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>. For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
     */
    ReplicaProvisionedReadCapacityUnits?: number;

    /**
     * <p>Autoscaling settings for managing a global table replica's read capacity units.</p>
     */
    ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: _AutoScalingSettingsUpdate;

    /**
     * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
     */
    ReplicaGlobalSecondaryIndexSettingsUpdate?: Array<_ReplicaGlobalSecondaryIndexSettingsUpdate>|Iterable<_ReplicaGlobalSecondaryIndexSettingsUpdate>;
}

export interface _UnmarshalledReplicaSettingsUpdate extends _ReplicaSettingsUpdate {
    /**
     * <p>Autoscaling settings for managing a global table replica's read capacity units.</p>
     */
    ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: _UnmarshalledAutoScalingSettingsUpdate;

    /**
     * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
     */
    ReplicaGlobalSecondaryIndexSettingsUpdate?: Array<_UnmarshalledReplicaGlobalSecondaryIndexSettingsUpdate>;
}