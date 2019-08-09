import {
  _ClientVpnAuthorizationRuleStatus,
  _UnmarshalledClientVpnAuthorizationRuleStatus
} from "./_ClientVpnAuthorizationRuleStatus";

/**
 * <p>Information about an authorization rule.</p>
 */
export interface _AuthorizationRule {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Active Directory group to which the authorization rule grants access.</p>
   */
  GroupId?: string;

  /**
   * <p>Indicates whether the authorization rule grants access to all clients.</p>
   */
  AccessAll?: boolean;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: _ClientVpnAuthorizationRuleStatus;
}

export interface _UnmarshalledAuthorizationRule extends _AuthorizationRule {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: _UnmarshalledClientVpnAuthorizationRuleStatus;
}
