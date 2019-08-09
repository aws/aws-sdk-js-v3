/**
 * <p>Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.</p>
 */
export interface _RouteFilterPrefix {
  /**
   * <p>The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.</p>
   */
  cidr?: string;
}

export type _UnmarshalledRouteFilterPrefix = _RouteFilterPrefix;
