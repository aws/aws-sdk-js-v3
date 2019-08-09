/**
 * <p>Describes one or more scheduled scaling action updates for a specified Auto Scaling group. Used in combination with <a>BatchPutScheduledUpdateGroupAction</a>.</p> <p>When updating a scheduled scaling action, all optional parameters are left unchanged if not specified. </p>
 */
export interface _ScheduledUpdateGroupActionRequest {
  /**
   * <p>The name of the scaling action.</p>
   */
  ScheduledActionName: string;

  /**
   * <p>The date and time for the action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, <code>"2019-06-01T00:00:00Z"</code>).</p> <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.</p> <p>If you try to schedule the action in the past, Amazon EC2 Auto Scaling returns an error message.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the action after this time.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The recurring schedule for the action, in Unix cron syntax format. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p> <p>When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action starts and stops.</p>
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
   * <p>The number of EC2 instances that should be running in the group.</p>
   */
  DesiredCapacity?: number;
}

export interface _UnmarshalledScheduledUpdateGroupActionRequest
  extends _ScheduledUpdateGroupActionRequest {
  /**
   * <p>The date and time for the action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, <code>"2019-06-01T00:00:00Z"</code>).</p> <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.</p> <p>If you try to schedule the action in the past, Amazon EC2 Auto Scaling returns an error message.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the action after this time.</p>
   */
  EndTime?: Date;
}
