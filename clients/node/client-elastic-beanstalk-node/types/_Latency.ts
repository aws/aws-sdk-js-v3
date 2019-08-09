/**
 * <p>Represents the average latency for the slowest X percent of requests over the last 10 seconds.</p>
 */
export interface _Latency {
  /**
   * <p>The average latency for the slowest 0.1 percent of requests over the last 10 seconds.</p>
   */
  P999?: number;

  /**
   * <p>The average latency for the slowest 1 percent of requests over the last 10 seconds.</p>
   */
  P99?: number;

  /**
   * <p>The average latency for the slowest 5 percent of requests over the last 10 seconds.</p>
   */
  P95?: number;

  /**
   * <p>The average latency for the slowest 10 percent of requests over the last 10 seconds.</p>
   */
  P90?: number;

  /**
   * <p>The average latency for the slowest 15 percent of requests over the last 10 seconds.</p>
   */
  P85?: number;

  /**
   * <p>The average latency for the slowest 25 percent of requests over the last 10 seconds.</p>
   */
  P75?: number;

  /**
   * <p>The average latency for the slowest 50 percent of requests over the last 10 seconds.</p>
   */
  P50?: number;

  /**
   * <p>The average latency for the slowest 90 percent of requests over the last 10 seconds.</p>
   */
  P10?: number;
}

export type _UnmarshalledLatency = _Latency;
