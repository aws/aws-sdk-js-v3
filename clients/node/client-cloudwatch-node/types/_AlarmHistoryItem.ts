/**
 * <p>Represents the history of a specific alarm.</p>
 */
export interface _AlarmHistoryItem {
  /**
   * <p>The descriptive name for the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>The time stamp for the alarm history item.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The type of alarm history item.</p>
   */
  HistoryItemType?: "ConfigurationUpdate" | "StateUpdate" | "Action" | string;

  /**
   * <p>A summary of the alarm history, in text format.</p>
   */
  HistorySummary?: string;

  /**
   * <p>Data about the alarm, in JSON format.</p>
   */
  HistoryData?: string;
}

export interface _UnmarshalledAlarmHistoryItem extends _AlarmHistoryItem {
  /**
   * <p>The time stamp for the alarm history item.</p>
   */
  Timestamp?: Date;
}
