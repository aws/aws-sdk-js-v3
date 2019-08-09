import { _MessageData, _UnmarshalledMessageData } from "./_MessageData";

/**
 * <p>A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.</p>
 */
export interface _MetricDataResult {
  /**
   * <p>The short name you specified to represent this metric.</p>
   */
  Id?: string;

  /**
   * <p>The human-readable label associated with the data.</p>
   */
  Label?: string;

  /**
   * <p>The timestamps for the data points, formatted in Unix timestamp format. The number of timestamps always matches the number of values and the value for Timestamps[x] is Values[x].</p>
   */
  Timestamps?: Array<Date | string | number> | Iterable<Date | string | number>;

  /**
   * <p>The data points for the metric corresponding to <code>Timestamps</code>. The number of values always matches the number of timestamps and the timestamp for Values[x] is Timestamps[x].</p>
   */
  Values?: Array<number> | Iterable<number>;

  /**
   * <p>The status of the returned data. <code>Complete</code> indicates that all data points in the requested time range were returned. <code>PartialData</code> means that an incomplete set of data points were returned. You can use the <code>NextToken</code> value that was returned and repeat your request to get more data points. <code>NextToken</code> is not returned if you are performing a math expression. <code>InternalError</code> indicates that an error occurred. Retry your request using <code>NextToken</code>, if present.</p>
   */
  StatusCode?: "Complete" | "InternalError" | "PartialData" | string;

  /**
   * <p>A list of messages with additional information about the data returned.</p>
   */
  Messages?: Array<_MessageData> | Iterable<_MessageData>;
}

export interface _UnmarshalledMetricDataResult extends _MetricDataResult {
  /**
   * <p>The timestamps for the data points, formatted in Unix timestamp format. The number of timestamps always matches the number of values and the value for Timestamps[x] is Values[x].</p>
   */
  Timestamps?: Array<Date>;

  /**
   * <p>The data points for the metric corresponding to <code>Timestamps</code>. The number of values always matches the number of timestamps and the timestamp for Values[x] is Timestamps[x].</p>
   */
  Values?: Array<number>;

  /**
   * <p>A list of messages with additional information about the data returned.</p>
   */
  Messages?: Array<_UnmarshalledMessageData>;
}
