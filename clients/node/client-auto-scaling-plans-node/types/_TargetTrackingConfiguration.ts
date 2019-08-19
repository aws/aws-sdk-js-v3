import {
  _PredefinedScalingMetricSpecification,
  _UnmarshalledPredefinedScalingMetricSpecification
} from "./_PredefinedScalingMetricSpecification";
import {
  _CustomizedScalingMetricSpecification,
  _UnmarshalledCustomizedScalingMetricSpecification
} from "./_CustomizedScalingMetricSpecification";

/**
 * <p>Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.</p>
 */
export interface _TargetTrackingConfiguration {
  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized metric.</p>
   */
  PredefinedScalingMetricSpecification?: _PredefinedScalingMetricSpecification;

  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized metric. </p>
   */
  CustomizedScalingMetricSpecification?: _CustomizedScalingMetricSpecification;

  /**
   * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).</p>
   */
  TargetValue: number;

  /**
   * <p>Indicates whether scale in by the target tracking scaling policy is disabled. If the value is <code>true</code>, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. </p> <p>The default value is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;

  /**
   * <p>The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.</p> <p>While the cooldown period is in effect, the capacity that has been added by the previous scale-out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.</p>
   */
  ScaleOutCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.</p> <p>The cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale-out policy during the cooldown period after a scale-in, AWS Auto Scaling scales out your scalable target immediately.</p>
   */
  ScaleInCooldown?: number;

  /**
   * <p>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.</p>
   */
  EstimatedInstanceWarmup?: number;
}

export interface _UnmarshalledTargetTrackingConfiguration
  extends _TargetTrackingConfiguration {
  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized metric.</p>
   */
  PredefinedScalingMetricSpecification?: _UnmarshalledPredefinedScalingMetricSpecification;

  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized metric. </p>
   */
  CustomizedScalingMetricSpecification?: _UnmarshalledCustomizedScalingMetricSpecification;
}
