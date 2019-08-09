/**
 * <p>Describes a static route for a VPN connection.</p>
 */
export interface _VpnStaticRoute {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Indicates how the routes were provided.</p>
   */
  Source?: "Static" | string;

  /**
   * <p>The current state of the static route.</p>
   */
  State?: "pending" | "available" | "deleting" | "deleted" | string;
}

export type _UnmarshalledVpnStaticRoute = _VpnStaticRoute;
