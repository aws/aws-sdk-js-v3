import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about the transit virtual interface.</p>
 */
export interface _NewTransitVirtualInterface {
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
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500. </p>
   */
  mtu?: number;

  /**
   * <p>The authentication key for BGP configuration.</p>
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
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * <p>Any tags assigned to the transit virtual interface.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledNewTransitVirtualInterface
  extends _NewTransitVirtualInterface {
  /**
   * <p>Any tags assigned to the transit virtual interface.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
