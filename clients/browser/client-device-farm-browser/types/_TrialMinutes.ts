/**
 * <p>Represents information about free trial device minutes for an AWS account.</p>
 */
export interface _TrialMinutes {
  /**
   * <p>The total number of free trial minutes that the account started with.</p>
   */
  total?: number;

  /**
   * <p>The number of free trial minutes remaining in the account.</p>
   */
  remaining?: number;
}

export type _UnmarshalledTrialMinutes = _TrialMinutes;
