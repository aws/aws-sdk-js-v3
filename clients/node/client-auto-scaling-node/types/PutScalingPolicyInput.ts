import { _StepAdjustment } from "./_StepAdjustment";
import { _TargetTrackingConfiguration } from "./_TargetTrackingConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutScalingPolicyInput shape
 */
export interface PutScalingPolicyInput {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string;

  /**
   * <p>The policy type. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, and <code>TargetTrackingScaling</code>. If the policy type is null, the value is treated as <code>SimpleScaling</code>.</p>
   */
  PolicyType?: string;

  /**
   * <p>The adjustment type. The valid values are <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p> <p>This parameter is supported if the policy type is <code>SimpleScaling</code> or <code>StepScaling</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html">Dynamic Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  AdjustmentType?: string;

  /**
   * <p>Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code> instead.</p>
   */
  MinAdjustmentStep?: number;

  /**
   * <p>The minimum number of instances to scale. If the value of <code>AdjustmentType</code> is <code>PercentChangeInCapacity</code>, the scaling policy changes the <code>DesiredCapacity</code> of the Auto Scaling group by at least this many instances. Otherwise, the error is <code>ValidationError</code>.</p> <p>This parameter is supported if the policy type is <code>SimpleScaling</code> or <code>StepScaling</code>.</p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity.</p> <p>Conditional: This parameter is required if the policy type is <code>SimpleScaling</code> and not supported otherwise.</p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start. If this parameter is not specified, the default cooldown period for the group applies.</p> <p>This parameter is supported if the policy type is <code>SimpleScaling</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Cooldown?: number;

  /**
   * <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the value is treated as <code>Average</code>.</p> <p>This parameter is supported if the policy type is <code>StepScaling</code>.</p>
   */
  MetricAggregationType?: string;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p> <p>Conditional: This parameter is required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>
   */
  StepAdjustments?: Array<_StepAdjustment> | Iterable<_StepAdjustment>;

  /**
   * <p>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. The default is to use the value specified for the default cooldown period for the group.</p> <p>This parameter is supported if the policy type is <code>StepScaling</code> or <code>TargetTrackingScaling</code>.</p>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p> <p>Conditional: This parameter is required if the policy type is <code>TargetTrackingScaling</code> and not supported otherwise.</p>
   */
  TargetTrackingConfiguration?: _TargetTrackingConfiguration;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
