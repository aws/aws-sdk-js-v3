import {
  _RouteFilterPrefix,
  _UnmarshalledRouteFilterPrefix
} from "./_RouteFilterPrefix";
import { _BGPPeer, _UnmarshalledBGPPeer } from "./_BGPPeer";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about a virtual interface.</p>
 */
export interface _VirtualInterface {
  /**
   * <p>The ID of the AWS account that owns the virtual interface.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * <p>The type of virtual interface. The possible values are <code>private</code> and <code>public</code>.</p>
   */
  virtualInterfaceType?: string;

  /**
   * <p>The name of the virtual interface assigned by the customer network.</p>
   */
  virtualInterfaceName?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The autonomous system number (ASN) for the Amazon side of the connection.</p>
   */
  amazonSideAsn?: number;

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
   * <p>The state of the virtual interface. The following are the possible values:</p> <ul> <li> <p> <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <code>available</code>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <code>down</code>: A virtual interface that is BGP down.</p> </li> <li> <p> <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <code>deleted</code>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p> </li> <li> <p> <code>unknown</code>: The state of the virtual interface is not available.</p> </li> </ul>
   */
  virtualInterfaceState?:
    | "confirming"
    | "verifying"
    | "pending"
    | "available"
    | "down"
    | "deleting"
    | "deleted"
    | "rejected"
    | "unknown"
    | string;

  /**
   * <p>The customer router configuration.</p>
   */
  customerRouterConfig?: string;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;

  /**
   * <p>The BGP peers configured on this virtual interface.</p>
   */
  bgpPeers?: Array<_BGPPeer> | Iterable<_BGPPeer>;

  /**
   * <p>The AWS Region where the virtual interface is located.</p>
   */
  region?: string;

  /**
   * <p>The Direct Connect endpoint on which the virtual interface terminates.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>Any tags assigned to the virtual interface.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledVirtualInterface extends _VirtualInterface {
  /**
   * <p>The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: Array<_UnmarshalledRouteFilterPrefix>;

  /**
   * <p>The BGP peers configured on this virtual interface.</p>
   */
  bgpPeers?: Array<_UnmarshalledBGPPeer>;

  /**
   * <p>Any tags assigned to the virtual interface.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
