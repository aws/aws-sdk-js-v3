/**
 * <p>Information about a BGP peer.</p>
 */
export interface _BGPPeer {
  /**
   * <p>The ID of the BGP peer.</p>
   */
  bgpPeerId?: string;

  /**
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: "ipv4" | "ipv6" | string;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * <p>The state of the BGP peer. The following are the possible values:</p> <ul> <li> <p> <code>verifying</code>: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces.</p> </li> <li> <p> <code>pending</code>: The BGP peer is created, and remains in this state until it is ready to be established.</p> </li> <li> <p> <code>available</code>: The BGP peer is ready to be established.</p> </li> <li> <p> <code>deleting</code>: The BGP peer is being deleted.</p> </li> <li> <p> <code>deleted</code>: The BGP peer is deleted and cannot be established.</p> </li> </ul>
   */
  bgpPeerState?:
    | "verifying"
    | "pending"
    | "available"
    | "deleting"
    | "deleted"
    | string;

  /**
   * <p>The status of the BGP peer. The following are the possible values:</p> <ul> <li> <p> <code>up</code>: The BGP peer is established. This state does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session.</p> </li> <li> <p> <code>down</code>: The BGP peer is down.</p> </li> <li> <p> <code>unknown</code>: The BGP peer status is not available.</p> </li> </ul>
   */
  bgpStatus?: "up" | "down" | "unknown" | string;

  /**
   * <p>The Direct Connect endpoint on which the BGP peer terminates.</p>
   */
  awsDeviceV2?: string;
}

export type _UnmarshalledBGPPeer = _BGPPeer;
