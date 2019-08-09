import { _Range, _UnmarshalledRange } from "./_Range";

/**
 * <p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.</p>
 */
export interface _AnomalyDetectorConfiguration {
  /**
   * <p>An array of time ranges to exclude from use when the anomaly detection model is trained. Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates the model.</p>
   */
  ExcludedTimeRanges?: Array<_Range> | Iterable<_Range>;

  /**
   * <p>The time zone to use for the metric. This is useful to enable the model to automatically account for daylight savings time changes if the metric is sensitive to such time changes.</p> <p>To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information, see <a href="https://en.wikipedia.org/wiki/Tz_database">tz database</a>.</p>
   */
  MetricTimezone?: string;
}

export interface _UnmarshalledAnomalyDetectorConfiguration
  extends _AnomalyDetectorConfiguration {
  /**
   * <p>An array of time ranges to exclude from use when the anomaly detection model is trained. Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates the model.</p>
   */
  ExcludedTimeRanges?: Array<_UnmarshalledRange>;
}
