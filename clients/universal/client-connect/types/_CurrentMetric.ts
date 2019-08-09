/**
 * <p>A <code>CurrentMetric</code> object that contains the Name and Unit for the metric.</p>
 */
export interface _CurrentMetric {
  /**
   * <p>The name of the metric.</p>
   */
  Name?:
    | "AGENTS_ONLINE"
    | "AGENTS_AVAILABLE"
    | "AGENTS_ON_CALL"
    | "AGENTS_NON_PRODUCTIVE"
    | "AGENTS_AFTER_CONTACT_WORK"
    | "AGENTS_ERROR"
    | "AGENTS_STAFFED"
    | "CONTACTS_IN_QUEUE"
    | "OLDEST_CONTACT_AGE"
    | "CONTACTS_SCHEDULED"
    | string;

  /**
   * <p>The unit for the metric.</p>
   */
  Unit?: "SECONDS" | "COUNT" | "PERCENT" | string;
}

export type _UnmarshalledCurrentMetric = _CurrentMetric;
