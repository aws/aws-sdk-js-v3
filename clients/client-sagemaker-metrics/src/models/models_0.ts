// smithy-typescript generated code
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
  Step?: number;

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
   * <p>The name of the Trial Component to associate with the metrics.</p>
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
  Code?: PutMetricsErrorCode;

  /**
   * <p>An index that corresponds to the metric in the request.</p>
   * @public
   */
  MetricIndex?: number;
}

/**
 * @public
 */
export interface BatchPutMetricsResponse {
  /**
   * <p>Lists any errors that occur when inserting metric data.</p>
   * @public
   */
  Errors?: BatchPutMetricsError[];
}
