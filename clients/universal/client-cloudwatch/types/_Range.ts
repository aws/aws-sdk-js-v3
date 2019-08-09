/**
 * <p>Specifies one range of days or times to exclude from use for training an anomaly detection model.</p>
 */
export interface _Range {
  /**
   * <p>The start time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The end time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.</p>
   */
  EndTime: Date | string | number;
}

export interface _UnmarshalledRange extends _Range {
  /**
   * <p>The start time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.</p>
   */
  StartTime: Date;

  /**
   * <p>The end time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.</p>
   */
  EndTime: Date;
}
