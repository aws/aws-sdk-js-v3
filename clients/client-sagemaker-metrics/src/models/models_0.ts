// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MetricStatistic = {
  AVG: "Avg",
  COUNT: "Count",
  LAST: "Last",
  MAX: "Max",
  MIN: "Min",
  STD_DEV: "StdDev",
} as const;

/**
 * @public
 */
export type MetricStatistic = (typeof MetricStatistic)[keyof typeof MetricStatistic];

/**
 * @public
 * @enum
 */
export const Period = {
  FIVE_MINUTE: "FiveMinute",
  ITERATION_NUMBER: "IterationNumber",
  ONE_HOUR: "OneHour",
  ONE_MINUTE: "OneMinute",
} as const;

/**
 * @public
 */
export type Period = (typeof Period)[keyof typeof Period];

/**
 * @public
 * @enum
 */
export const XAxisType = {
  ITERATION_NUMBER: "IterationNumber",
  TIMESTAMP: "Timestamp",
} as const;

/**
 * @public
 */
export type XAxisType = (typeof XAxisType)[keyof typeof XAxisType];

/**
 * <p>Specifies a query to retrieve training metrics from SageMaker.</p>
 * @public
 */
export interface MetricQuery {
  /**
   * <p>The name of the metric to retrieve.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>The ARN of the SageMaker resource to retrieve metrics for.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The metrics stat type of metrics to retrieve.</p>
   * @public
   */
  MetricStat: MetricStatistic | undefined;

  /**
   * <p>The time period of metrics to retrieve.</p>
   * @public
   */
  Period: Period | undefined;

  /**
   * <p>The x-axis type of metrics to retrieve.</p>
   * @public
   */
  XAxisType: XAxisType | undefined;

  /**
   * <p>The start time of metrics to retrieve.</p>
   * @public
   */
  Start?: number | undefined;

  /**
   * <p>The end time of metrics to retrieve.</p>
   * @public
   */
  End?: number | undefined;
}

/**
 * @public
 */
export interface BatchGetMetricsRequest {
  /**
   * <p>Queries made to retrieve training metrics from SageMaker.</p>
   * @public
   */
  MetricQueries: MetricQuery[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MetricQueryResultStatus = {
  COMPLETE: "Complete",
  INTERNAL_ERROR: "InternalError",
  TRUNCATED: "Truncated",
  VALIDATION_ERROR: "ValidationError",
} as const;

/**
 * @public
 */
export type MetricQueryResultStatus = (typeof MetricQueryResultStatus)[keyof typeof MetricQueryResultStatus];

/**
 * <p>The result of a query to retrieve training metrics from SageMaker.</p>
 * @public
 */
export interface MetricQueryResult {
  /**
   * <p>The status of the metric query.</p>
   * @public
   */
  Status: MetricQueryResultStatus | undefined;

  /**
   * <p>A message describing the status of the metric query.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The values for the x-axis of the metrics.</p>
   * @public
   */
  XAxisValues: number[] | undefined;

  /**
   * <p>The metric values retrieved by the query.</p>
   * @public
   */
  MetricValues: number[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMetricsResponse {
  /**
   * <p>The results of a query to retrieve training metrics from SageMaker.</p>
   * @public
   */
  MetricQueryResults?: MetricQueryResult[] | undefined;
}

/**
 * <p>The raw metric data to associate with the resource.</p>
 * @public
 */
export interface RawMetricData {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>The time that the metric was recorded.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>The metric step (epoch).
   *       </p>
   * @public
   */
  Step?: number | undefined;

  /**
   * <p>The metric value.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * @public
 */
export interface BatchPutMetricsRequest {
  /**
   * <p>The name of the Trial Component to associate with the metrics. The Trial Component name must be entirely lowercase.</p>
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * <p>A list of raw metric values to put.</p>
   * @public
   */
  MetricData: RawMetricData[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PutMetricsErrorCode = {
  CONFLICT_ERROR: "CONFLICT_ERROR",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  METRIC_LIMIT_EXCEEDED: "METRIC_LIMIT_EXCEEDED",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type PutMetricsErrorCode = (typeof PutMetricsErrorCode)[keyof typeof PutMetricsErrorCode];

/**
 * <p>An error that occured when putting the metric data.</p>
 * @public
 */
export interface BatchPutMetricsError {
  /**
   * <p>The error code of an error that occured when attempting to put metrics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>METRIC_LIMIT_EXCEEDED</code>: The maximum amount of metrics per resource is
   *                exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_ERROR</code>: An internal error occured.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VALIDATION_ERROR</code>: The metric data failed validation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONFLICT_ERROR</code>: Multiple requests attempted to modify the same data
   *                simultaneously.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Code?: PutMetricsErrorCode | undefined;

  /**
   * <p>An index that corresponds to the metric in the request.</p>
   * @public
   */
  MetricIndex?: number | undefined;
}

/**
 * @public
 */
export interface BatchPutMetricsResponse {
  /**
   * <p>Lists any errors that occur when inserting metric data.</p>
   * @public
   */
  Errors?: BatchPutMetricsError[] | undefined;
}
