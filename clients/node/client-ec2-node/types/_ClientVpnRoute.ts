import {
  _ClientVpnRouteStatus,
  _UnmarshalledClientVpnRouteStatus
} from "./_ClientVpnRouteStatus";

/**
 * <p>Information about a Client VPN endpoint route.</p>
 */
export interface _ClientVpnRoute {
  /**
   * <p>The ID of the Client VPN endpoint with which the route is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The ID of the subnet through which traffic is routed.</p>
   */
  TargetSubnet?: string;

  /**
   * <p>The route type.</p>
   */
  Type?: string;

  /**
   * <p>Indicates how the route was associated with the Client VPN endpoint. <code>associate</code> indicates that the route was automatically added when the target network was associated with the Client VPN endpoint. <code>add-route</code> indicates that the route was manually added using the <b>CreateClientVpnRoute</b> action.</p>
   */
  Origin?: string;

  /**
   * <p>The current state of the route.</p>
   */
  Status?: _ClientVpnRouteStatus;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;
}

export interface _UnmarshalledClientVpnRoute extends _ClientVpnRoute {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: _UnmarshalledClientVpnRouteStatus;
}
