/**
 * <p>A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.</p>
 */
export interface _DateTimeRange {
  /**
   * <p>The starting date and time of a time range.</p>
   */
  from?: Date | string | number;

  /**
   * <p>The ending date and time of a time range.</p>
   */
  to?: Date | string | number;
}

export interface _UnmarshalledDateTimeRange extends _DateTimeRange {
  /**
   * <p>The starting date and time of a time range.</p>
   */
  from?: Date;

  /**
   * <p>The ending date and time of a time range.</p>
   */
  to?: Date;
}
