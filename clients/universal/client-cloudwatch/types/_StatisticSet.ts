/**
 * <p>Represents a set of statistics that describes a specific metric. </p>
 */
export interface _StatisticSet {
  /**
   * <p>The number of samples used for the statistic set.</p>
   */
  SampleCount: number;

  /**
   * <p>The sum of values for the sample set.</p>
   */
  Sum: number;

  /**
   * <p>The minimum value of the sample set.</p>
   */
  Minimum: number;

  /**
   * <p>The maximum value of the sample set.</p>
   */
  Maximum: number;
}

export type _UnmarshalledStatisticSet = _StatisticSet;
