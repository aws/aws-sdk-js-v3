/**
 * <p>The name and value of a sampling rule to apply to a trace summary.</p>
 */
export interface _SamplingStrategy {
  /**
   * <p>The name of a sampling rule.</p>
   */
  Name?: "PartialScan" | "FixedRate" | string;

  /**
   * <p>The value of a sampling rule.</p>
   */
  Value?: number;
}

export type _UnmarshalledSamplingStrategy = _SamplingStrategy;
