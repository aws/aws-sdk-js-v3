/**
 * <p>A policy enabling one or more entities to put logs to a log group in this account.</p>
 */
export interface _ResourcePolicy {
  /**
   * <p>The name of the resource policy.</p>
   */
  policyName?: string;

  /**
   * <p>The details of the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>Timestamp showing when this policy was last updated, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  lastUpdatedTime?: number;
}

export type _UnmarshalledResourcePolicy = _ResourcePolicy;
