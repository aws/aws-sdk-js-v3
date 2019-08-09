/**
 * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
 */
export interface _WeeklyStartTime {
  /**
   * Required. The day of the week.
   */
  DayOfWeek?:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | string;

  /**
   * Required. The time, in 24-hour format.
   */
  TimeOfDay?: string;

  /**
   * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
   */
  TimeZone?: string;
}

export type _UnmarshalledWeeklyStartTime = _WeeklyStartTime;
