import {_AutoScalingPolicyUpdate, _UnmarshalledAutoScalingPolicyUpdate} from './_AutoScalingPolicyUpdate';

/**
 * <p>Represents the autoscaling settings to be modified for a global table or global secondary index.</p>
 */
export interface _AutoScalingSettingsUpdate {
    /**
     * <p>The minimum capacity units that a global table or global secondary index should be scaled down to.</p>
     */
    MinimumUnits?: number;

    /**
     * <p>The maximum capacity units that a global table or global secondary index should be scaled up to.</p>
     */
    MaximumUnits?: number;

    /**
     * <p>Disabled autoscaling for this global table or global secondary index.</p>
     */
    AutoScalingDisabled?: boolean;

    /**
     * <p>Role ARN used for configuring autoscaling policy.</p>
     */
    AutoScalingRoleArn?: string;

    /**
     * <p>The scaling policy to apply for scaling target global table or global secondary index capacity units.</p>
     */
    ScalingPolicyUpdate?: _AutoScalingPolicyUpdate;
}

export interface _UnmarshalledAutoScalingSettingsUpdate extends _AutoScalingSettingsUpdate {
    /**
     * <p>The scaling policy to apply for scaling target global table or global secondary index capacity units.</p>
     */
    ScalingPolicyUpdate?: _UnmarshalledAutoScalingPolicyUpdate;
}