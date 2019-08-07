/**
 * <p>An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.</p>
 */
export interface _HistogramEntry {
  /**
   * <p>The value of the entry.</p>
   */
  Value?: number;

  /**
   * <p>The prevalence of the entry.</p>
   */
  Count?: number;
}

export type _UnmarshalledHistogramEntry = _HistogramEntry;
