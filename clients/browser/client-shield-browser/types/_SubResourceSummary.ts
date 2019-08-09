import {
  _SummarizedAttackVector,
  _UnmarshalledSummarizedAttackVector
} from "./_SummarizedAttackVector";
import {
  _SummarizedCounter,
  _UnmarshalledSummarizedCounter
} from "./_SummarizedCounter";

/**
 * <p>The attack information for the specified SubResource.</p>
 */
export interface _SubResourceSummary {
  /**
   * <p>The <code>SubResource</code> type.</p>
   */
  Type?: "IP" | "URL" | string;

  /**
   * <p>The unique identifier (ID) of the <code>SubResource</code>.</p>
   */
  Id?: string;

  /**
   * <p>The list of attack types and associated counters.</p>
   */
  AttackVectors?:
    | Array<_SummarizedAttackVector>
    | Iterable<_SummarizedAttackVector>;

  /**
   * <p>The counters that describe the details of the attack.</p>
   */
  Counters?: Array<_SummarizedCounter> | Iterable<_SummarizedCounter>;
}

export interface _UnmarshalledSubResourceSummary extends _SubResourceSummary {
  /**
   * <p>The list of attack types and associated counters.</p>
   */
  AttackVectors?: Array<_UnmarshalledSummarizedAttackVector>;

  /**
   * <p>The counters that describe the details of the attack.</p>
   */
  Counters?: Array<_UnmarshalledSummarizedCounter>;
}
