/**
 * <p>Describes the state of an authorization rule.</p>
 */
export interface _ClientVpnAuthorizationRuleStatus {
  /**
   * <p>The state of the authorization rule.</p>
   */
  Code?: "authorizing" | "active" | "failed" | "revoking" | string;

  /**
   * <p>A message about the status of the authorization rule, if applicable.</p>
   */
  Message?: string;
}

export type _UnmarshalledClientVpnAuthorizationRuleStatus = _ClientVpnAuthorizationRuleStatus;
