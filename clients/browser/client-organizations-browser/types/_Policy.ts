import { _PolicySummary, _UnmarshalledPolicySummary } from "./_PolicySummary";

/**
 * <p>Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.</p>
 */
export interface _Policy {
  /**
   * <p>A structure that contains additional details about the policy.</p>
   */
  PolicySummary?: _PolicySummary;

  /**
   * <p>The text content of the policy.</p>
   */
  Content?: string;
}

export interface _UnmarshalledPolicy extends _Policy {
  /**
   * <p>A structure that contains additional details about the policy.</p>
   */
  PolicySummary?: _UnmarshalledPolicySummary;
}
