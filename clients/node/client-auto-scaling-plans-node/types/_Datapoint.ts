/**
 * <p>Represents a single value in the forecast data used for predictive scaling.</p>
 */
export interface _Datapoint {
  /**
   * <p>The time stamp for the data point in UTC format.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The value of the data point.</p>
   */
  Value?: number;
}

export interface _UnmarshalledDatapoint extends _Datapoint {
  /**
   * <p>The time stamp for the data point in UTC format.</p>
   */
  Timestamp?: Date;
}
