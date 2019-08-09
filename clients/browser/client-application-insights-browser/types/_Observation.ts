/**
 * <p>Describes an anomaly or error with the application.</p>
 */
export interface _Observation {
  /**
   * <p>The ID of the observation type.</p>
   */
  Id?: string;

  /**
   * <p>The time when the observation was first detected, in epoch seconds.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time when the observation ended, in epoch seconds.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The source type of the observation.</p>
   */
  SourceType?: string;

  /**
   * <p>The source resource ARN of the observation.</p>
   */
  SourceARN?: string;

  /**
   * <p>The log group name.</p>
   */
  LogGroup?: string;

  /**
   * <p>The timestamp in the CloudWatch Logs that specifies when the matched line occurred.</p>
   */
  LineTime?: Date | string | number;

  /**
   * <p>The log text of the observation.</p>
   */
  LogText?: string;

  /**
   * <p>The log filter of the observation.</p>
   */
  LogFilter?: "ERROR" | "WARN" | "INFO" | string;

  /**
   * <p>The namespace of the observation metric.</p>
   */
  MetricNamespace?: string;

  /**
   * <p>The name of the observation metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The unit of the source observation metric.</p>
   */
  Unit?: string;

  /**
   * <p>The value of the source observation metric.</p>
   */
  Value?: number;
}

export interface _UnmarshalledObservation extends _Observation {
  /**
   * <p>The time when the observation was first detected, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the observation ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * <p>The timestamp in the CloudWatch Logs that specifies when the matched line occurred.</p>
   */
  LineTime?: Date;
}
