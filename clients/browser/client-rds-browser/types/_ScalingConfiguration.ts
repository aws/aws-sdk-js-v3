/**
 * <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export interface _ScalingConfiguration {
  /**
   * <p>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>Valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p> <p>The minimum capacity must be less than or equal to the maximum capacity.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>Valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p> <p>The maximum capacity must be greater than or equal to the minimum capacity.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>A value that indicates whether to allow or disallow automatic pause for an Aurora DB cluster in <code>serverless</code> DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).</p> <note> <p>If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it. </p> </note>
   */
  AutoPause?: boolean;

  /**
   * <p>The time, in seconds, before an Aurora DB cluster in <code>serverless</code> mode is paused.</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p> <p> <code>ForceApplyCapacityChange</code> sets the capacity to the specified value as soon as possible.</p> <p> <code>RollbackCapacityChange</code>, the default, ignores the capacity change if a scaling point is not found in the timeout period.</p> <important> <p>If you specify <code>ForceApplyCapacityChange</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  TimeoutAction?: string;
}

export type _UnmarshalledScalingConfiguration = _ScalingConfiguration;
