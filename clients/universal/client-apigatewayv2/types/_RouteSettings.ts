/**
 * <p>Represents a collection of route settings.</p>
 */
export interface _RouteSettings {
  /**
   * <p>Specifies whether (true) or not (false) data trace
   *  logging is enabled for this route. This property affects the log entries pushed to
   *  Amazon CloudWatch Logs.</p>
   */
  DataTraceEnabled?: boolean;

  /**
   * <p>Specifies whether detailed metrics are enabled.</p>
   */
  DetailedMetricsEnabled?: boolean;

  /**
   * <p>Specifies the logging level for this route: DEBUG, INFO,
   *  or WARN. This property affects the log entries pushed to Amazon
   *  CloudWatch Logs.</p>
   */
  LoggingLevel?: "ERROR" | "INFO" | "false" | string;

  /**
   * <p>Specifies the throttling burst limit.</p>
   */
  ThrottlingBurstLimit?: number;

  /**
   * <p>Specifies the throttling rate limit.</p>
   */
  ThrottlingRateLimit?: number;
}

export type _UnmarshalledRouteSettings = _RouteSettings;
