import {
  _RouteFilterPrefix,
  _UnmarshalledRouteFilterPrefix
} from "./_RouteFilterPrefix";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about a public virtual interface.</p>
 */
export interface _NewPublicVirtualInterface {
  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan: number;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: "ipv4" | "ipv6" | string;

  /**
   * <p>The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;

  /**
   * <p>Any tags assigned to the public virtual interface.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledNewPublicVirtualInterface
  extends _NewPublicVirtualInterface {
  /**
   * <p>The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: Array<_UnmarshalledRouteFilterPrefix>;

  /**
   * <p>Any tags assigned to the public virtual interface.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
