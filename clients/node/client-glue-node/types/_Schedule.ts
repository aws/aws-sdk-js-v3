/**
 * <p>A scheduling object using a <code>cron</code> statement to schedule an event.</p>
 */
export interface _Schedule {
  /**
   * <p>A <code>cron</code> expression used to specify the schedule. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The state of the schedule.</p>
   */
  State?: "SCHEDULED" | "NOT_SCHEDULED" | "TRANSITIONING" | string;
}

export type _UnmarshalledSchedule = _Schedule;
