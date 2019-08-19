/**
 * <p> The API request rate limits.</p>
 */
export interface _ThrottleSettings {
  /**
   * <p>The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.</p>
   */
  burstLimit?: number;

  /**
   * <p>The API request steady-state rate limit.</p>
   */
  rateLimit?: number;
}

export type _UnmarshalledThrottleSettings = _ThrottleSettings;
