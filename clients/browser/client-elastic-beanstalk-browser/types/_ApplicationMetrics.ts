import { _StatusCodes, _UnmarshalledStatusCodes } from "./_StatusCodes";
import { _Latency, _UnmarshalledLatency } from "./_Latency";

/**
 * <p>Application request metrics for an AWS Elastic Beanstalk environment.</p>
 */
export interface _ApplicationMetrics {
  /**
   * <p>The amount of time that the metrics cover (usually 10 seconds). For example, you might have 5 requests (<code>request_count</code>) within the most recent time slice of 10 seconds (<code>duration</code>).</p>
   */
  Duration?: number;

  /**
   * <p>Average number of requests handled by the web server per second over the last 10 seconds.</p>
   */
  RequestCount?: number;

  /**
   * <p>Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response.</p>
   */
  StatusCodes?: _StatusCodes;

  /**
   * <p>Represents the average latency for the slowest X percent of requests over the last 10 seconds. Latencies are in seconds with one millisecond resolution.</p>
   */
  Latency?: _Latency;
}

export interface _UnmarshalledApplicationMetrics extends _ApplicationMetrics {
  /**
   * <p>Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response.</p>
   */
  StatusCodes?: _UnmarshalledStatusCodes;

  /**
   * <p>Represents the average latency for the slowest X percent of requests over the last 10 seconds. Latencies are in seconds with one millisecond resolution.</p>
   */
  Latency?: _UnmarshalledLatency;
}
