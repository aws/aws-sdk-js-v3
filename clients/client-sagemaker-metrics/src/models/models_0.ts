// smithy-typescript generated code
/**
 * <p>The raw metric data to associate with the resource.</p>
 */
export interface RawMetricData {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The time that the metric was recorded.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The metric step (epoch).
   *       </p>
   */
  Step?: number;

  /**
   * <p>The metric value.</p>
   */
  Value: number | undefined;
}

export interface BatchPutMetricsRequest {
  /**
   * <p>The name of the Trial Component to associate with the metrics.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>A list of raw metric values to put.</p>
   */
  MetricData: RawMetricData[] | undefined;
}

export enum PutMetricsErrorCode {
  CONFLICT_ERROR = "CONFLICT_ERROR",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  METRIC_LIMIT_EXCEEDED = "METRIC_LIMIT_EXCEEDED",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

/**
 * <p>An error that occured when putting the metric data.</p>
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
   */
  Code?: PutMetricsErrorCode | string;

  /**
   * <p>An index that corresponds to the metric in the request.</p>
   */
  MetricIndex?: number;
}

export interface BatchPutMetricsResponse {
  /**
   * <p>Lists any errors that occur when inserting metric data.</p>
   */
  Errors?: BatchPutMetricsError[];
}

/**
 * @internal
 */
export const RawMetricDataFilterSensitiveLog = (obj: RawMetricData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutMetricsRequestFilterSensitiveLog = (obj: BatchPutMetricsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutMetricsErrorFilterSensitiveLog = (obj: BatchPutMetricsError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutMetricsResponseFilterSensitiveLog = (obj: BatchPutMetricsResponse): any => ({
  ...obj,
});
