// smithy-typescript generated code
/**
 * @public
 * <p>The raw metric data to associate with the resource.</p>
 */
export interface RawMetricData {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The time that the metric was recorded.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>The metric step (epoch).
   *       </p>
   */
  Step?: number;

  /**
   * @public
   * <p>The metric value.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 */
export interface BatchPutMetricsRequest {
  /**
   * @public
   * <p>The name of the Trial Component to associate with the metrics.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * @public
   * <p>A list of raw metric values to put.</p>
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
 * @public
 * <p>An error that occured when putting the metric data.</p>
 */
export interface BatchPutMetricsError {
  /**
   * @public
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
   */
  Code?: PutMetricsErrorCode | string;

  /**
   * @public
   * <p>An index that corresponds to the metric in the request.</p>
   */
  MetricIndex?: number;
}

/**
 * @public
 */
export interface BatchPutMetricsResponse {
  /**
   * @public
   * <p>Lists any errors that occur when inserting metric data.</p>
   */
  Errors?: BatchPutMetricsError[];
}
