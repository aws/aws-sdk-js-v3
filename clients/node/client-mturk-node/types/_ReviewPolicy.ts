import {
  _PolicyParameter,
  _UnmarshalledPolicyParameter
} from "./_PolicyParameter";

/**
 * <p> HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. </p>
 */
export interface _ReviewPolicy {
  /**
   * <p> Name of a Review Policy: SimplePlurality/2011-09-01 or ScoreMyKnownAnswers/2011-09-01 </p>
   */
  PolicyName: string;

  /**
   * <p>Name of the parameter from the Review policy.</p>
   */
  Parameters?: Array<_PolicyParameter> | Iterable<_PolicyParameter>;
}

export interface _UnmarshalledReviewPolicy extends _ReviewPolicy {
  /**
   * <p>Name of the parameter from the Review policy.</p>
   */
  Parameters?: Array<_UnmarshalledPolicyParameter>;
}
