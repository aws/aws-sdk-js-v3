import {
  _StepAdjustment,
  _UnmarshalledStepAdjustment
} from "./_StepAdjustment";

/**
 * <p>Represents a step scaling policy configuration to use with Application Auto Scaling.</p>
 */
export interface _StepScalingPolicyConfiguration {
  /**
   * <p>The adjustment type, which specifies how the <code>ScalingAdjustment</code> parameter in a <a>StepAdjustment</a> is interpreted.</p>
   */
  AdjustmentType?:
    | "ChangeInCapacity"
    | "PercentChangeInCapacity"
    | "ExactCapacity"
    | string;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p>
   */
  StepAdjustments?: Array<_StepAdjustment> | Iterable<_StepAdjustment>;

  /**
   * <p>The minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is <code>PercentChangeInCapacity</code>, the scaling policy changes the scalable dimension of the scalable target by this amount.</p> <p>For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a <code>MinAdjustmentMagnitude</code> of 2, Application Auto Scaling scales out the service by 2 tasks.</p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes where previous trigger-related scaling activities can influence future scaling events.</p> <p>For scale-out policies, while the cooldown period is in effect, the capacity that has been added by the previous scale-out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out. For example, an alarm triggers a step scaling policy to scale out an Amazon ECS service by 2 tasks, the scaling activity completes successfully, and a cooldown period of 5 minutes starts. During the cooldown period, if the alarm triggers the same policy again but at a more aggressive step adjustment to scale out the service by 3 tasks, the 2 tasks that were added in the previous scale-out event are considered part of that capacity and only 1 additional task is added to the desired count.</p> <p>For scale-in policies, the cooldown period is used to block subsequent scale-in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale-out policy during the cooldown period after a scale-in, Application Auto Scaling scales out your scalable target immediately.</p>
   */
  Cooldown?: number;

  /**
   * <p>The aggregation type for the CloudWatch metrics. Valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the value is treated as <code>Average</code>.</p>
   */
  MetricAggregationType?: "Average" | "Minimum" | "Maximum" | string;
}

export interface _UnmarshalledStepScalingPolicyConfiguration
  extends _StepScalingPolicyConfiguration {
  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p>
   */
  StepAdjustments?: Array<_UnmarshalledStepAdjustment>;
}
