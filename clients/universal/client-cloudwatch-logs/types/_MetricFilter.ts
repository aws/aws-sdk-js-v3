import {
  _MetricTransformation,
  _UnmarshalledMetricTransformation
} from "./_MetricTransformation";

/**
 * <p>Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.</p>
 */
export interface _MetricFilter {
  /**
   * <p>The name of the metric filter.</p>
   */
  filterName?: string;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * <p>The metric transformations.</p>
   */
  metricTransformations?:
    | Array<_MetricTransformation>
    | Iterable<_MetricTransformation>;

  /**
   * <p>The creation time of the metric filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;
}

export interface _UnmarshalledMetricFilter extends _MetricFilter {
  /**
   * <p>The metric transformations.</p>
   */
  metricTransformations?: Array<_UnmarshalledMetricTransformation>;
}
