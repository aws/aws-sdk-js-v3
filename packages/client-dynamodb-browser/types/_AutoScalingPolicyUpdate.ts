import {
  _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
  _UnmarshalledAutoScalingTargetTrackingScalingPolicyConfigurationUpdate
} from "./_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate";

/**
 * <p>Represents the autoscaling policy to be modified.</p>
 */
export interface _AutoScalingPolicyUpdate {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>Represents a target tracking scaling policy configuration.</p>
   */
  TargetTrackingScalingPolicyConfiguration: _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
}

export interface _UnmarshalledAutoScalingPolicyUpdate
  extends _AutoScalingPolicyUpdate {
  /**
   * <p>Represents a target tracking scaling policy configuration.</p>
   */
  TargetTrackingScalingPolicyConfiguration: _UnmarshalledAutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
}
