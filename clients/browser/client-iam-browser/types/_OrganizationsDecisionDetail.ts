/**
 * <p>Contains information about the effect that Organizations has on a policy simulation.</p>
 */
export interface _OrganizationsDecisionDetail {
  /**
   * <p>Specifies whether the simulated operation is allowed by the Organizations service control policies that impact the simulated user's account.</p>
   */
  AllowedByOrganizations?: boolean;
}

export type _UnmarshalledOrganizationsDecisionDetail = _OrganizationsDecisionDetail;
