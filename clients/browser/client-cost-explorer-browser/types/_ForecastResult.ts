import { _DateInterval, _UnmarshalledDateInterval } from "./_DateInterval";

/**
 * <p>The forecast created for your query.</p>
 */
export interface _ForecastResult {
  /**
   * <p>The period of time that the forecast covers.</p>
   */
  TimePeriod?: _DateInterval;

  /**
   * <p>The mean value of the forecast.</p>
   */
  MeanValue?: string;

  /**
   * <p>The lower limit for the prediction interval. </p>
   */
  PredictionIntervalLowerBound?: string;

  /**
   * <p>The upper limit for the prediction interval. </p>
   */
  PredictionIntervalUpperBound?: string;
}

export interface _UnmarshalledForecastResult extends _ForecastResult {
  /**
   * <p>The period of time that the forecast covers.</p>
   */
  TimePeriod?: _UnmarshalledDateInterval;
}
