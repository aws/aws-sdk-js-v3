/**
 * <p>The schedule for when to trigger an update.</p>
 */
export interface _Schedule {
  /**
   * <p>The expression that defines when to trigger an update. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html"> Schedule Expressions for Rules</a> in the Amazon CloudWatch Events User Guide.</p>
   */
  expression?: string;
}

export type _UnmarshalledSchedule = _Schedule;
