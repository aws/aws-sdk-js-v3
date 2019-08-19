/**
 * <p>Represents entity counters.</p>
 */
export interface _Counters {
  /**
   * <p>The total number of entities.</p>
   */
  total?: number;

  /**
   * <p>The number of passed entities.</p>
   */
  passed?: number;

  /**
   * <p>The number of failed entities.</p>
   */
  failed?: number;

  /**
   * <p>The number of warned entities.</p>
   */
  warned?: number;

  /**
   * <p>The number of errored entities.</p>
   */
  errored?: number;

  /**
   * <p>The number of stopped entities.</p>
   */
  stopped?: number;

  /**
   * <p>The number of skipped entities.</p>
   */
  skipped?: number;
}

export type _UnmarshalledCounters = _Counters;
