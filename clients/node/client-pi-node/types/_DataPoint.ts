/**
 * <p>A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.</p>
 */
export interface _DataPoint {
  /**
   * <p>The time, in epoch format, associated with a particular <code>Value</code>.</p>
   */
  Timestamp: Date | string | number;

  /**
   * <p>The actual value associated with a particular <code>Timestamp</code>.</p>
   */
  Value: number;
}

export interface _UnmarshalledDataPoint extends _DataPoint {
  /**
   * <p>The time, in epoch format, associated with a particular <code>Value</code>.</p>
   */
  Timestamp: Date;
}
