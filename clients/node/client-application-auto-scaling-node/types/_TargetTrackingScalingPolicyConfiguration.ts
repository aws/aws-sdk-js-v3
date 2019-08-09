import {
  _PredefinedMetricSpecification,
  _UnmarshalledPredefinedMetricSpecification
} from "./_PredefinedMetricSpecification";
import {
  _CustomizedMetricSpecification,
  _UnmarshalledCustomizedMetricSpecification
} from "./_CustomizedMetricSpecification";

/**
 * <p>Represents a target tracking scaling policy configuration to use with Application Auto Scaling.</p>
 */
export interface _TargetTrackingScalingPolicyConfiguration {
  /**
   * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).</p>
   */
  TargetValue: number;

  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized metric.</p>
   */
  PredefinedMetricSpecification?: _PredefinedMetricSpecification;

  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized metric.</p>
   */
  CustomizedMetricSpecification?: _CustomizedMetricSpecification;

  /**
   * <p>The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.</p> <p>While the cooldown period is in effect, the capacity that has been added by the previous scale-out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.</p>
   */
  ScaleOutCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start.</p> <p>The cooldown period is used to block subsequent scale-in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale-out policy during the cooldown period after a scale-in, Application Auto Scaling scales out your scalable target immediately.</p>
   */
  ScaleInCooldown?: number;

  /**
   * <p>Indicates whether scale in by the target tracking scaling policy is disabled. If the value is <code>true</code>, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. The default value is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;
}

export interface _UnmarshalledTargetTrackingScalingPolicyConfiguration
  extends _TargetTrackingScalingPolicyConfiguration {
  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized metric.</p>
   */
  PredefinedMetricSpecification?: _UnmarshalledPredefinedMetricSpecification;

  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized metric.</p>
   */
  CustomizedMetricSpecification?: _UnmarshalledCustomizedMetricSpecification;
}
