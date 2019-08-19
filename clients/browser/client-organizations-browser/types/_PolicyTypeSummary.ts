/**
 * <p>Contains information about a policy type and its status in the associated root.</p>
 */
export interface _PolicyTypeSummary {
  /**
   * <p>The name of the policy type.</p>
   */
  Type?: "SERVICE_CONTROL_POLICY" | string;

  /**
   * <p>The status of the policy type as it relates to the associated root. To attach a policy of the specified type to a root or to an OU or account in that root, it must be available in the organization and enabled for that root.</p>
   */
  Status?: "ENABLED" | "PENDING_ENABLE" | "PENDING_DISABLE" | string;
}

export type _UnmarshalledPolicyTypeSummary = _PolicyTypeSummary;
