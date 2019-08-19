import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutScheduledUpdateGroupActionInput shape
 */
export interface PutScheduledUpdateGroupActionInput {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string;

  /**
   * <p>The name of this scaling action.</p>
   */
  ScheduledActionName: string;

  /**
   * <p>This parameter is deprecated.</p>
   */
  Time?: Date | string | number;

  /**
   * <p>The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, <code>"2019-06-01T00:00:00Z"</code>).</p> <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the action after this time. </p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The recurring schedule for this action, in Unix cron syntax format. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p> <p>When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action starts and stops.</p>
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
   * <p>The number of EC2 instances that should be running in the Auto Scaling group.</p>
   */
  DesiredCapacity?: number;

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
