/**
 * <p>Describes a scheduled scaling action. Used in response to <a>DescribeScheduledActions</a>. </p>
 */
export interface _ScheduledUpdateGroupAction {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled action.</p>
   */
  ScheduledActionARN?: string;

  /**
   * <p>This parameter is deprecated.</p>
   */
  Time?: Date | string | number;

  /**
   * <p>The date and time in UTC for this action to start. For example, <code>"2019-06-01T00:00:00Z"</code>. </p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The date and time in UTC for the recurring schedule to end. For example, <code>"2019-06-01T00:00:00Z"</code>. </p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The recurring schedule for the action, in Unix cron syntax format. </p> <p>When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action starts and stops.</p>
   */
  Recurrence?: string;

  /**
   * <p>The minimum number of instances in the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The maximum number of instances in the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The number of instances you prefer to maintain in the group.</p>
   */
  DesiredCapacity?: number;
}

export interface _UnmarshalledScheduledUpdateGroupAction
  extends _ScheduledUpdateGroupAction {
  /**
   * <p>This parameter is deprecated.</p>
   */
  Time?: Date;

  /**
   * <p>The date and time in UTC for this action to start. For example, <code>"2019-06-01T00:00:00Z"</code>. </p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time in UTC for the recurring schedule to end. For example, <code>"2019-06-01T00:00:00Z"</code>. </p>
   */
  EndTime?: Date;
}
