import { _Threshold, _UnmarshalledThreshold } from "./_Threshold";

/**
 * <p>A <code>HistoricalMetric</code> object that contains the Name, Unit, Statistic, and Threshold for the metric.</p>
 */
export interface _HistoricalMetric {
  /**
   * <p>The name of the historical metric.</p>
   */
  Name?:
    | "CONTACTS_QUEUED"
    | "CONTACTS_HANDLED"
    | "CONTACTS_ABANDONED"
    | "CONTACTS_CONSULTED"
    | "CONTACTS_AGENT_HUNG_UP_FIRST"
    | "CONTACTS_HANDLED_INCOMING"
    | "CONTACTS_HANDLED_OUTBOUND"
    | "CONTACTS_HOLD_ABANDONS"
    | "CONTACTS_TRANSFERRED_IN"
    | "CONTACTS_TRANSFERRED_OUT"
    | "CONTACTS_TRANSFERRED_IN_FROM_QUEUE"
    | "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE"
    | "CONTACTS_MISSED"
    | "CALLBACK_CONTACTS_HANDLED"
    | "API_CONTACTS_HANDLED"
    | "OCCUPANCY"
    | "HANDLE_TIME"
    | "AFTER_CONTACT_WORK_TIME"
    | "QUEUED_TIME"
    | "ABANDON_TIME"
    | "QUEUE_ANSWER_TIME"
    | "HOLD_TIME"
    | "INTERACTION_TIME"
    | "INTERACTION_AND_HOLD_TIME"
    | "SERVICE_LEVEL"
    | string;

  /**
   * <p>The threshold for the metric, used with service level metrics.</p>
   */
  Threshold?: _Threshold;

  /**
   * <p>The statistic for the metric.</p>
   */
  Statistic?: "SUM" | "MAX" | "AVG" | string;

  /**
   * <p>The unit for the metric.</p>
   */
  Unit?: "SECONDS" | "COUNT" | "PERCENT" | string;
}

export interface _UnmarshalledHistoricalMetric extends _HistoricalMetric {
  /**
   * <p>The threshold for the metric, used with service level metrics.</p>
   */
  Threshold?: _UnmarshalledThreshold;
}
