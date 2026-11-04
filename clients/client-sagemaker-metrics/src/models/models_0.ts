// smithy-typescript generated code
import type { MetricQueryResultStatus, MetricStatistic, Period, PutMetricsErrorCode, XAxisType } from "./enums";

/**
 * Specifies a query to retrieve training metrics from SageMaker.
 *
 * @public
 */
export interface MetricQuery {
  /**
   * The name of the metric to retrieve.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The ARN of the SageMaker resource to retrieve metrics for.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The metrics stat type of metrics to retrieve.
   *
   * @public
   */
  MetricStat: MetricStatistic | undefined;

  /**
   * The time period of metrics to retrieve.
   *
   * @public
   */
  Period: Period | undefined;

  /**
   * The x-axis type of metrics to retrieve.
   *
   * @public
   */
  XAxisType: XAxisType | undefined;

  /**
   * The start time of metrics to retrieve.
   *
   * @public
   */
  Start?: number | undefined;

  /**
   * The end time of metrics to retrieve.
   *
   * @public
   */
  End?: number | undefined;
}

/**
 * @public
 */
export interface BatchGetMetricsRequest {
  /**
   * Queries made to retrieve training metrics from SageMaker.
   *
   * @public
   */
  MetricQueries: MetricQuery[] | undefined;
}

/**
 * The result of a query to retrieve training metrics from SageMaker.
 *
 * @public
 */
export interface MetricQueryResult {
  /**
   * The status of the metric query.
   *
   * @public
   */
  Status: MetricQueryResultStatus | undefined;

  /**
   * A message describing the status of the metric query.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The values for the x-axis of the metrics.
   *
   * @public
   */
  XAxisValues: number[] | undefined;

  /**
   * The metric values retrieved by the query.
   *
   * @public
   */
  MetricValues: number[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMetricsResponse {
  /**
   * The results of a query to retrieve training metrics from SageMaker.
   *
   * @public
   */
  MetricQueryResults?: MetricQueryResult[] | undefined;
}

/**
 * The raw metric data to associate with the resource.
 *
 * @public
 */
export interface RawMetricData {
  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The time that the metric was recorded.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The metric step (epoch).
   *
   * @public
   */
  Step?: number | undefined;

  /**
   * The metric value.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * @public
 */
export interface BatchPutMetricsRequest {
  /**
   * The name of the Trial Component to associate with the metrics. The Trial Component name must be entirely lowercase.
   *
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * A list of raw metric values to put.
   *
   * @public
   */
  MetricData: RawMetricData[] | undefined;
}

/**
 * An error that occured when putting the metric data.
 *
 * @public
 */
export interface BatchPutMetricsError {
  /**
   * The error code of an error that occured when attempting to put metrics.
   *
   * - `METRIC_LIMIT_EXCEEDED`: The maximum amount of metrics per resource is exceeded.
   * - `INTERNAL_ERROR`: An internal error occured.
   * - `VALIDATION_ERROR`: The metric data failed validation.
   * - `CONFLICT_ERROR`: Multiple requests attempted to modify the same data simultaneously.
   *
   * @public
   */
  Code?: PutMetricsErrorCode | undefined;

  /**
   * An index that corresponds to the metric in the request.
   *
   * @public
   */
  MetricIndex?: number | undefined;
}

/**
 * @public
 */
export interface BatchPutMetricsResponse {
  /**
   * Lists any errors that occur when inserting metric data.
   *
   * @public
   */
  Errors?: BatchPutMetricsError[] | undefined;
}
