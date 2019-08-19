import {
  _StepAdjustment,
  _UnmarshalledStepAdjustment
} from "./_StepAdjustment";
import { _Alarm, _UnmarshalledAlarm } from "./_Alarm";
import {
  _TargetTrackingConfiguration,
  _UnmarshalledTargetTrackingConfiguration
} from "./_TargetTrackingConfiguration";

/**
 * <p>Describes a scaling policy.</p>
 */
export interface _ScalingPolicy {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyARN?: string;

  /**
   * <p>The policy type. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, and <code>TargetTrackingScaling</code>.</p>
   */
  PolicyType?: string;

  /**
   * <p>The adjustment type, which specifies how <code>ScalingAdjustment</code> is interpreted. The valid values are <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p>
   */
  AdjustmentType?: string;

  /**
   * <p>Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code> instead.</p>
   */
  MinAdjustmentStep?: number;

  /**
   * <p>The minimum number of instances to scale. If the value of <code>AdjustmentType</code> is <code>PercentChangeInCapacity</code>, the scaling policy changes the <code>DesiredCapacity</code> of the Auto Scaling group by at least this many instances. Otherwise, the error is <code>ValidationError</code>.</p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity.</p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before any further dynamic scaling activities can start.</p>
   */
  Cooldown?: number;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p>
   */
  StepAdjustments?: Array<_StepAdjustment> | Iterable<_StepAdjustment>;

  /**
   * <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>.</p>
   */
  MetricAggregationType?: string;

  /**
   * <p>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.</p>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>The CloudWatch alarms related to the policy.</p>
   */
  Alarms?: Array<_Alarm> | Iterable<_Alarm>;

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingConfiguration?: _TargetTrackingConfiguration;
}

export interface _UnmarshalledScalingPolicy extends _ScalingPolicy {
  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p>
   */
  StepAdjustments?: Array<_UnmarshalledStepAdjustment>;

  /**
   * <p>The CloudWatch alarms related to the policy.</p>
   */
  Alarms?: Array<_UnmarshalledAlarm>;

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingConfiguration?: _UnmarshalledTargetTrackingConfiguration;
}
