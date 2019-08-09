/**
 * <p>The time period that you want the usage and costs for. </p>
 */
export interface _DateInterval {
  /**
   * <p>The beginning of the time period that you want the usage and costs for. The start date is inclusive. For example, if <code>start</code> is <code>2017-01-01</code>, AWS retrieves cost and usage data starting at <code>2017-01-01</code> up to the end date.</p>
   */
  Start: string;

  /**
   * <p>The end of the time period that you want the usage and costs for. The end date is exclusive. For example, if <code>end</code> is <code>2017-05-01</code>, AWS retrieves cost and usage data from the start date up to, but not including, <code>2017-05-01</code>.</p>
   */
  End: string;
}

export type _UnmarshalledDateInterval = _DateInterval;
