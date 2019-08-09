import {
  _AutoScalingPolicyDescription,
  _UnmarshalledAutoScalingPolicyDescription
} from "./_AutoScalingPolicyDescription";

/**
 * <p>Represents the autoscaling settings for a global table or global secondary index.</p>
 */
export interface _AutoScalingSettingsDescription {
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
   * <p>Role ARN used for configuring autoScaling policy.</p>
   */
  AutoScalingRoleArn?: string;

  /**
   * <p>Information about the scaling policies.</p>
   */
  ScalingPolicies?:
    | Array<_AutoScalingPolicyDescription>
    | Iterable<_AutoScalingPolicyDescription>;
}

export interface _UnmarshalledAutoScalingSettingsDescription
  extends _AutoScalingSettingsDescription {
  /**
   * <p>Information about the scaling policies.</p>
   */
  ScalingPolicies?: Array<_UnmarshalledAutoScalingPolicyDescription>;
}
