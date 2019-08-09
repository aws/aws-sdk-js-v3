/**
 * <p>The counter that describes a DDoS attack.</p>
 */
export interface _SummarizedCounter {
  /**
   * <p>The counter name.</p>
   */
  Name?: string;

  /**
   * <p>The maximum value of the counter for a specified time period.</p>
   */
  Max?: number;

  /**
   * <p>The average value of the counter for a specified time period.</p>
   */
  Average?: number;

  /**
   * <p>The total of counter values for a specified time period.</p>
   */
  Sum?: number;

  /**
   * <p>The number of counters for a specified time period.</p>
   */
  N?: number;

  /**
   * <p>The unit of the counters.</p>
   */
  Unit?: string;
}

export type _UnmarshalledSummarizedCounter = _SummarizedCounter;
