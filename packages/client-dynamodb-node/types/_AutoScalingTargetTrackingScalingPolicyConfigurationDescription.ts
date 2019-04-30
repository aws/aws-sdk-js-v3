/**
 * <p>Represents the properties of a target tracking scaling policy.</p>
 */
export interface _AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  /**
   * <p>Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.</p>
   */
  DisableScaleIn?: boolean;

  /**
   * <p>The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. You should scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, application autoscaling scales out your scalable target immediately. </p>
   */
  ScaleInCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. You should continuously (but not excessively) scale out.</p>
   */
  ScaleOutCooldown?: number;

  /**
   * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).</p>
   */
  TargetValue: number;
}

export type _UnmarshalledAutoScalingTargetTrackingScalingPolicyConfigurationDescription = _AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
