/**
 * <p>One or more policies assigned to a parameter.</p>
 */
export interface _ParameterInlinePolicy {
  /**
   * <p>The JSON text of the policy.</p>
   */
  PolicyText?: string;

  /**
   * <p>The type of policy. Parameter Store supports the following policy types: Expiration, ExpirationNotification, and NoChangeNotification. </p>
   */
  PolicyType?: string;

  /**
   * <p>The status of the policy. Policies report the following statuses: Pending (the policy has not been enforced or applied yet), Finished (the policy was applied), Failed (the policy was not applied), or InProgress (the policy is being applied now). </p>
   */
  PolicyStatus?: string;
}

export type _UnmarshalledParameterInlinePolicy = _ParameterInlinePolicy;
