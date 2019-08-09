import {
  _SummarizedCounter,
  _UnmarshalledSummarizedCounter
} from "./_SummarizedCounter";

/**
 * <p>A summary of information about the attack.</p>
 */
export interface _SummarizedAttackVector {
  /**
   * <p>The attack type, for example, SNMP reflection or SYN flood.</p>
   */
  VectorType: string;

  /**
   * <p>The list of counters that describe the details of the attack.</p>
   */
  VectorCounters?: Array<_SummarizedCounter> | Iterable<_SummarizedCounter>;
}

export interface _UnmarshalledSummarizedAttackVector
  extends _SummarizedAttackVector {
  /**
   * <p>The list of counters that describe the details of the attack.</p>
   */
  VectorCounters?: Array<_UnmarshalledSummarizedCounter>;
}
