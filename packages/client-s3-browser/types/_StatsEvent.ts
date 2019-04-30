import { _Stats, _UnmarshalledStats } from "./_Stats";

/**
 * _StatsEvent shape
 */
export interface _StatsEvent {
  /**
   * <p>The Stats event details.</p>
   */
  Details?: _Stats;
}

export interface _UnmarshalledStatsEvent extends _StatsEvent {
  /**
   * <p>The Stats event details.</p>
   */
  Details?: _UnmarshalledStats;
}
