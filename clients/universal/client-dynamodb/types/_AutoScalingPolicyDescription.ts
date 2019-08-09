import {
  _AutoScalingTargetTrackingScalingPolicyConfigurationDescription,
  _UnmarshalledAutoScalingTargetTrackingScalingPolicyConfigurationDescription
} from "./_AutoScalingTargetTrackingScalingPolicyConfigurationDescription";

/**
 * <p>Represents the properties of the scaling policy.</p>
 */
export interface _AutoScalingPolicyDescription {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>Represents a target tracking scaling policy configuration.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: _AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
}

export interface _UnmarshalledAutoScalingPolicyDescription
  extends _AutoScalingPolicyDescription {
  /**
   * <p>Represents a target tracking scaling policy configuration.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: _UnmarshalledAutoScalingTargetTrackingScalingPolicyConfigurationDescription;
}
