// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DirectConnectServiceException as __BaseException } from "./DirectConnectServiceException";

/**
 * @public
 * <p>Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP)
 *         over a public virtual interface.</p>
 */
export interface RouteFilterPrefix {
  /**
   * @public
   * <p>The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.</p>
   */
  cidr?: string;
}

/**
 * @public
 */
export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the request proposal.</p>
   */
  proposalId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the virtual private gateway or transit gateway.</p>
   */
  associatedGatewayOwnerAccount: string | undefined;

  /**
   * @public
   * <p>Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>
   */
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

/**
 * @public
 * @enum
 */
export const GatewayType = {
  TransitGateway: "transitGateway",
  VirtualPrivateGateway: "virtualPrivateGateway",
} as const;

/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * @public
 * <p>Information about the associated gateway.</p>
 */
export interface AssociatedGateway {
  /**
   * @public
   * <p>The ID of the associated gateway.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The type of associated gateway.</p>
   */
  type?: GatewayType;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the associated virtual private gateway or transit gateway.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The Region where the associated gateway is located.</p>
   */
  region?: string;
}

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAssociationState = {
  associated: "associated",
  associating: "associating",
  disassociated: "disassociated",
  disassociating: "disassociating",
  updating: "updating",
} as const;

/**
 * @public
 */
export type DirectConnectGatewayAssociationState =
  (typeof DirectConnectGatewayAssociationState)[keyof typeof DirectConnectGatewayAssociationState];

/**
 * @public
 * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
 */
export interface DirectConnectGatewayAssociation {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the associated gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * @public
   * <p>The state of the association. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>associating</code>: The initial state after calling <a>CreateDirectConnectGatewayAssociation</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated</code>: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociating</code>: The initial state after calling <a>DeleteDirectConnectGatewayAssociation</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociated</code>: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>updating</code>: The CIDR blocks for the virtual private gateway or transit gateway are currently being updated. This could
   *           be new CIDR blocks added or current CIDR blocks removed.</p>
   *             </li>
   *          </ul>
   */
  associationState?: DirectConnectGatewayAssociationState;

  /**
   * @public
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;

  /**
   * @public
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: AssociatedGateway;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * @public
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The Amazon Web Services Region where the virtual private gateway is located.</p>
   */
  virtualGatewayRegion?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the virtual private gateway.</p>
   */
  virtualGatewayOwnerAccount?: string;
}

/**
 * @public
 */
export interface AcceptDirectConnectGatewayAssociationProposalResult {
  /**
   * @public
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

/**
 * @public
 * <p>One or more parameters are not valid.</p>
 */
export class DirectConnectClientException extends __BaseException {
  readonly name: "DirectConnectClientException" = "DirectConnectClientException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectConnectClientException, __BaseException>) {
    super({
      name: "DirectConnectClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectConnectClientException.prototype);
  }
}

/**
 * @public
 * <p>A server-side error occurred.</p>
 */
export class DirectConnectServerException extends __BaseException {
  readonly name: "DirectConnectServerException" = "DirectConnectServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectConnectServerException, __BaseException>) {
    super({
      name: "DirectConnectServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectConnectServerException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AddressFamily = {
  IPv4: "ipv4",
  IPv6: "ipv6",
} as const;

/**
 * @public
 */
export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily];

/**
 * @public
 * <p>The name and status of a customer agreement. </p>
 */
export interface CustomerAgreement {
  /**
   * @public
   * <p>The name of the agreement.</p>
   */
  agreementName?: string;

  /**
   * @public
   * <p>The status of the customer agreement. This will be either <code>signed</code> or <code>unsigned</code>
   *          </p>
   */
  status?: string;
}

/**
 * @public
 */
export interface AllocateConnectionOnInterconnectRequest {
  /**
   * @public
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps,
   *       300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners
   *       who have met specific requirements
   *     are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.</p>
   */
  bandwidth: string | undefined;

  /**
   * @public
   * <p>The name of the provisioned connection.</p>
   */
  connectionName: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account of the customer for whom the connection will be provisioned.</p>
   */
  ownerAccount: string | undefined;

  /**
   * @public
   * <p>The ID of the interconnect on which the connection will be provisioned.</p>
   */
  interconnectId: string | undefined;

  /**
   * @public
   * <p>The dedicated VLAN provisioned to the connection.</p>
   */
  vlan: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  ordering: "ordering",
  pending: "pending",
  rejected: "rejected",
  requested: "requested",
  unknown: "unknown",
} as const;

/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * @enum
 */
export const HasLogicalRedundancy = {
  No: "no",
  Unknown: "unknown",
  Yes: "yes",
} as const;

/**
 * @public
 */
export type HasLogicalRedundancy = (typeof HasLogicalRedundancy)[keyof typeof HasLogicalRedundancy];

/**
 * @public
 * <p>Information about the MAC Security (MACsec) secret key.</p>
 */
export interface MacSecKey {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.</p>
   */
  secretARN?: string;

  /**
   * @public
   * <p>The Connection Key Name (CKN) for the MAC Security secret key.</p>
   */
  ckn?: string;

  /**
   * @public
   * <p>The state of the MAC Security (MACsec) secret key.</p>
   *          <p>The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>associating</code>: The MAC Security (MACsec) secret key is being validated and not yet associated with the connection or LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated</code>: The MAC Security (MACsec) secret key is validated and associated with the connection or LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociating</code>: The MAC Security (MACsec) secret key is being disassociated from the connection or LAG</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociated</code>: The MAC Security (MACsec) secret key is no longer associated with the connection or LAG.</p>
   *             </li>
   *          </ul>
   */
  state?: string;

  /**
   * @public
   * <p>The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC format.</p>
   */
  startOn?: string;
}

/**
 * @public
 * <p>Information about a tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Information about an Direct Connect connection.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the connection.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * @public
   * <p>The name of the connection.</p>
   */
  connectionName?: string;

  /**
   * @public
   * <p>The state of the connection. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The connection has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up and the connection is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The connection is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The connection has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the connection is not available.</p>
   *             </li>
   *          </ul>
   */
  connectionState?: ConnectionState;

  /**
   * @public
   * <p>The Amazon Web Services Region where the connection is located.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth?: string;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * @public
   * <p>The name of the Direct Connect service provider associated with the connection.</p>
   */
  partnerName?: string;

  /**
   * @public
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   */
  loaIssueTime?: Date;

  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDevice?: string;

  /**
   * @public
   * <p>Indicates whether jumbo frames are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   */
  awsDeviceV2?: string;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * @public
   * <p>Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy;

  /**
   * @public
   * <p>The tags associated with the connection.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The name of the service provider associated with the connection.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>Indicates whether the connection supports MAC Security (MACsec).</p>
   */
  macSecCapable?: boolean;

  /**
   * @public
   * <p>The MAC Security (MACsec) port link status of the connection.</p>
   *          <p>The valid values are <code>Encryption Up</code>, which means that there is an active Connection Key Name, or <code>Encryption Down</code>.</p>
   */
  portEncryptionStatus?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) connection encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   */
  encryptionMode?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) security keys associated with the connection.</p>
   */
  macSecKeys?: MacSecKey[];
}

/**
 * @public
 */
export interface AllocateHostedConnectionRequest {
  /**
   * @public
   * <p>The ID of the interconnect or LAG.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account ID of the customer for the connection.</p>
   */
  ownerAccount: string | undefined;

  /**
   * @public
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection. </p>
   */
  bandwidth: string | undefined;

  /**
   * @public
   * <p>The name of the hosted connection.</p>
   */
  connectionName: string | undefined;

  /**
   * @public
   * <p>The dedicated VLAN provisioned to the hosted connection.</p>
   */
  vlan: number | undefined;

  /**
   * @public
   * <p>The tags associated with the connection.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>A tag key was specified more than once.</p>
 */
export class DuplicateTagKeysException extends __BaseException {
  readonly name: "DuplicateTagKeysException" = "DuplicateTagKeysException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTagKeysException, __BaseException>) {
    super({
      name: "DuplicateTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTagKeysException.prototype);
  }
}

/**
 * @public
 * <p>You have reached the limit on the number of tags that can be assigned.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 * <p>Information about a private virtual interface to be provisioned on a connection.</p>
 */
export interface NewPrivateVirtualInterfaceAllocation {
  /**
   * @public
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * @public
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The tags associated with the private virtual interface.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface AllocatePrivateVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the connection on which the private virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the virtual private interface.</p>
   */
  ownerAccount: string | undefined;

  /**
   * @public
   * <p>Information about the private virtual interface.</p>
   */
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation | undefined;
}

/**
 * @public
 * @enum
 */
export const BGPPeerState = {
  Available: "available",
  Deleted: "deleted",
  Deleting: "deleting",
  Pending: "pending",
  Verifying: "verifying",
} as const;

/**
 * @public
 */
export type BGPPeerState = (typeof BGPPeerState)[keyof typeof BGPPeerState];

/**
 * @public
 * @enum
 */
export const BGPStatus = {
  Down: "down",
  Unknown: "unknown",
  Up: "up",
} as const;

/**
 * @public
 */
export type BGPStatus = (typeof BGPStatus)[keyof typeof BGPStatus];

/**
 * @public
 * <p>Information about a BGP peer.</p>
 */
export interface BGPPeer {
  /**
   * @public
   * <p>The ID of the BGP peer.</p>
   */
  bgpPeerId?: string;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The state of the BGP peer. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The BGP peer is created, and remains in this state until it is ready to be established.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The BGP peer is ready to be established.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>:  The BGP peer is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>:  The BGP peer is deleted and cannot be established.</p>
   *             </li>
   *          </ul>
   */
  bgpPeerState?: BGPPeerState;

  /**
   * @public
   * <p>The status of the BGP peer. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>up</code>: The BGP peer is established. This state does not indicate the
   *         state of the routing function. Ensure that you are receiving routes over the BGP session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The BGP peer is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The BGP peer status is not available.</p>
   *             </li>
   *          </ul>
   */
  bgpStatus?: BGPStatus;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the BGP peer.</p>
   */
  awsDeviceV2?: string;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;
}

/**
 * @public
 * @enum
 */
export const VirtualInterfaceState = {
  available: "available",
  confirming: "confirming",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  pending: "pending",
  rejected: "rejected",
  unknown: "unknown",
  verifying: "verifying",
} as const;

/**
 * @public
 */
export type VirtualInterfaceState = (typeof VirtualInterfaceState)[keyof typeof VirtualInterfaceState];

/**
 * @public
 * <p>Information about a virtual interface.</p>
 */
export interface VirtualInterface {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the virtual interface.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * @public
   * <p>The type of virtual interface. The possible values are <code>private</code> and <code>public</code>.</p>
   */
  virtualInterfaceType?: string;

  /**
   * @public
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName?: string;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * @public
   * <p>The autonomous system number (ASN) for the Amazon side of the connection.</p>
   */
  amazonSideAsn?: number;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState;

  /**
   * @public
   * <p>The customer router configuration.</p>
   */
  customerRouterConfig?: string;

  /**
   * @public
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500</p>
   */
  mtu?: number;

  /**
   * @public
   * <p>Indicates whether jumbo frames are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * @public
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   */
  virtualGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The BGP peers configured on this virtual interface.</p>
   */
  bgpPeers?: BGPPeer[];

  /**
   * @public
   * <p>The Amazon Web Services Region where the virtual interface is located.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   */
  awsDeviceV2?: string;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * @public
   * <p>The tags associated with the virtual interface.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether SiteLink is enabled.</p>
   */
  siteLinkEnabled?: boolean;
}

/**
 * @public
 * <p>Information about a public virtual interface to be provisioned on a connection.</p>
 */
export interface NewPublicVirtualInterfaceAllocation {
  /**
   * @public
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The tags associated with the public virtual interface.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface AllocatePublicVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the connection on which the public virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the public virtual interface.</p>
   */
  ownerAccount: string | undefined;

  /**
   * @public
   * <p>Information about the public virtual interface.</p>
   */
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation | undefined;
}

/**
 * @public
 * <p>Information about a transit virtual interface to be provisioned on a connection.</p>
 */
export interface NewTransitVirtualInterfaceAllocation {
  /**
   * @public
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName?: string;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * @public
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500 </p>
   */
  mtu?: number;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The tags associated with the transitive virtual interface.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface AllocateTransitVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the connection on which the transit virtual interface is provisioned.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the transit virtual interface.</p>
   */
  ownerAccount: string | undefined;

  /**
   * @public
   * <p>Information about the transit virtual interface.</p>
   */
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation | undefined;
}

/**
 * @public
 */
export interface AllocateTransitVirtualInterfaceResult {
  /**
   * @public
   * <p>Information about a virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

/**
 * @public
 */
export interface AssociateConnectionWithLagRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the LAG with which to associate the connection.</p>
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface AssociateHostedConnectionRequest {
  /**
   * @public
   * <p>The ID of the hosted connection.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the interconnect or the LAG.</p>
   */
  parentConnectionId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMacSecKeyRequest {
  /**
   * @public
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   *          <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve connection ID.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the dedicated connection.</p>
   *          <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve the MAC Security (MACsec) secret key.</p>
   *          <p>If you use this request parameter, you do not use the <code>ckn</code> and <code>cak</code> request parameters.</p>
   */
  secretARN?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) CKN to associate with the dedicated connection.</p>
   *          <p>You can create the CKN/CAK pair using an industry standard tool.</p>
   *          <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p>
   *          <p>If you use this request parameter, you must use the <code>cak</code> request parameter and not use the <code>secretARN</code> request parameter.</p>
   */
  ckn?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) CAK to associate with the dedicated connection.</p>
   *          <p>You can create the CKN/CAK pair using an industry standard tool.</p>
   *          <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p>
   *          <p>If you use this request parameter, you must use the <code>ckn</code> request parameter and not use the <code>secretARN</code> request parameter.</p>
   */
  cak?: string;
}

/**
 * @public
 */
export interface AssociateMacSecKeyResponse {
  /**
   * @public
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   */
  connectionId?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) security keys associated with the dedicated connection.</p>
   */
  macSecKeys?: MacSecKey[];
}

/**
 * @public
 */
export interface AssociateVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * @public
   * <p>The ID of the LAG or connection.</p>
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmConnectionRequest {
  /**
   * @public
   * <p>The ID of the hosted connection.</p>
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmConnectionResponse {
  /**
   * @public
   * <p>The state of the connection. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The connection has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up and the connection is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The connection is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The connection has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the connection is not available.</p>
   *             </li>
   *          </ul>
   */
  connectionState?: ConnectionState;
}

/**
 * @public
 */
export interface ConfirmCustomerAgreementRequest {
  /**
   * @public
   * <p>
   *
   *       The name of the customer agreement.
   *
   *     </p>
   */
  agreementName?: string;
}

/**
 * @public
 */
export interface ConfirmCustomerAgreementResponse {
  /**
   * @public
   * <p>
   *       The status of the customer agreement when the connection was created. This will be either <code>signed</code> or <code>unsigned</code>.
   *     </p>
   */
  status?: string;
}

/**
 * @public
 */
export interface ConfirmPrivateVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;
}

/**
 * @public
 */
export interface ConfirmPrivateVirtualInterfaceResponse {
  /**
   * @public
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState;
}

/**
 * @public
 */
export interface ConfirmPublicVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmPublicVirtualInterfaceResponse {
  /**
   * @public
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState;
}

/**
 * @public
 */
export interface ConfirmTransitVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmTransitVirtualInterfaceResponse {
  /**
   * @public
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState;
}

/**
 * @public
 */
export interface Connections {
  /**
   * @public
   * <p>The connections.</p>
   */
  connections?: Connection[];
}

/**
 * @public
 * <p>Information about a new BGP peer.</p>
 */
export interface NewBGPPeer {
  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;
}

/**
 * @public
 */
export interface CreateBGPPeerRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>Information about the BGP peer.</p>
   */
  newBGPPeer?: NewBGPPeer;
}

/**
 * @public
 */
export interface CreateBGPPeerResponse {
  /**
   * @public
   * <p>The virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * @public
   * <p>The location of the connection.</p>
   */
  location: string | undefined;

  /**
   * @public
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth: string | undefined;

  /**
   * @public
   * <p>The name of the connection.</p>
   */
  connectionName: string | undefined;

  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * @public
   * <p>The tags to associate with the lag.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The name of the service provider associated with the requested connection.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>Indicates whether you want the connection to support MAC Security (MACsec).</p>
   *          <p>MAC Security (MACsec) is only available on dedicated connections. For information about MAC Security (MACsec) prerequisties, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites">MACsec prerequisties</a> in the <i>Direct Connect User Guide</i>.</p>
   */
  requestMACSec?: boolean;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayRequest {
  /**
   * @public
   * <p>The name of the Direct Connect gateway.</p>
   */
  directConnectGatewayName: string | undefined;

  /**
   * @public
   * <p>The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured
   *       on the Amazon side of the connection. The ASN must be in the private range of 64,512 to
   *       65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.</p>
   */
  amazonSideAsn?: number;
}

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type DirectConnectGatewayState = (typeof DirectConnectGatewayState)[keyof typeof DirectConnectGatewayState];

/**
 * @public
 * <p>Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.</p>
 */
export interface DirectConnectGateway {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The name of the Direct Connect gateway.</p>
   */
  directConnectGatewayName?: string;

  /**
   * @public
   * <p>The autonomous system number (ASN) for the Amazon side of the connection.</p>
   */
  amazonSideAsn?: number;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The state of the Direct Connect gateway. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The initial state after calling <a>CreateDirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The Direct Connect gateway is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The initial state after calling <a>DeleteDirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The Direct Connect gateway is deleted and cannot pass traffic.</p>
   *             </li>
   *          </ul>
   */
  directConnectGatewayState?: DirectConnectGatewayState;

  /**
   * @public
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayResult {
  /**
   * @public
   * <p>The Direct Connect gateway.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  gatewayId?: string;

  /**
   * @public
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway</p>
   *          <p>This parameter is required when you create an association to a transit gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationResult {
  /**
   * @public
   * <p>The association to be created.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationProposalRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount: string | undefined;

  /**
   * @public
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAssociationProposalState = {
  accepted: "accepted",
  deleted: "deleted",
  requested: "requested",
} as const;

/**
 * @public
 */
export type DirectConnectGatewayAssociationProposalState =
  (typeof DirectConnectGatewayAssociationProposalState)[keyof typeof DirectConnectGatewayAssociationProposalState];

/**
 * @public
 * <p>Information about the  proposal request to attach a virtual private gateway to a Direct Connect gateway. </p>
 */
export interface DirectConnectGatewayAssociationProposal {
  /**
   * @public
   * <p>The ID of the association proposal.</p>
   */
  proposalId?: string;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   */
  directConnectGatewayOwnerAccount?: string;

  /**
   * @public
   * <p>The state of the proposal. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>accepted</code>: The proposal has been accepted. The Direct Connect gateway association is available to use in this state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The proposal has been deleted by the owner that made the proposal.  The Direct Connect gateway association cannot be used in this state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.</p>
   *             </li>
   *          </ul>
   */
  proposalState?: DirectConnectGatewayAssociationProposalState;

  /**
   * @public
   * <p>Information about the associated gateway.</p>
   */
  associatedGateway?: AssociatedGateway;

  /**
   * @public
   * <p>The existing Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   */
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationProposalResult {
  /**
   * @public
   * <p>Information about the Direct Connect gateway proposal.</p>
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}

/**
 * @public
 */
export interface CreateInterconnectRequest {
  /**
   * @public
   * <p>The name of the interconnect.</p>
   */
  interconnectName: string | undefined;

  /**
   * @public
   * <p>The port bandwidth, in Gbps. The possible values are 1 and 10.</p>
   */
  bandwidth: string | undefined;

  /**
   * @public
   * <p>The location of the interconnect.</p>
   */
  location: string | undefined;

  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * @public
   * <p>The tags to associate with the interconnect.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The name of the service provider associated with the interconnect.</p>
   */
  providerName?: string;
}

/**
 * @public
 * @enum
 */
export const InterconnectState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  pending: "pending",
  requested: "requested",
  unknown: "unknown",
} as const;

/**
 * @public
 */
export type InterconnectState = (typeof InterconnectState)[keyof typeof InterconnectState];

/**
 * @public
 * <p>Information about an interconnect.</p>
 */
export interface Interconnect {
  /**
   * @public
   * <p>The ID of the interconnect.</p>
   */
  interconnectId?: string;

  /**
   * @public
   * <p>The name of the interconnect.</p>
   */
  interconnectName?: string;

  /**
   * @public
   * <p>The state of the interconnect. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of an interconnect. The interconnect stays in the
   *         requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The interconnect is approved, and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up, and the interconnect is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The interconnect is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The interconnect is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the interconnect is not available.</p>
   *             </li>
   *          </ul>
   */
  interconnectState?: InterconnectState;

  /**
   * @public
   * <p>The Amazon Web Services Region where the connection is located.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The location of the connection.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The bandwidth of the connection.</p>
   */
  bandwidth?: string;

  /**
   * @public
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   */
  loaIssueTime?: Date;

  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   */
  awsDevice?: string;

  /**
   * @public
   * <p>Indicates whether jumbo frames are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   */
  awsDeviceV2?: string;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * @public
   * <p>Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy;

  /**
   * @public
   * <p>The tags associated with the interconnect.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The name of the service provider associated with the interconnect.</p>
   */
  providerName?: string;
}

/**
 * @public
 */
export interface CreateLagRequest {
  /**
   * @public
   * <p>The number of physical dedicated connections initially provisioned and bundled by the
   *       LAG.  You can have a maximum of four connections when the port speed is 1G or 10G, or two when the port speed is 100G. </p>
   */
  numberOfConnections: number | undefined;

  /**
   * @public
   * <p>The location for the LAG.</p>
   */
  location: string | undefined;

  /**
   * @public
   * <p>The bandwidth of the individual physical dedicated connections bundled by the LAG. The
   *       possible values are 1Gbps and 10Gbps. </p>
   */
  connectionsBandwidth: string | undefined;

  /**
   * @public
   * <p>The name of the LAG.</p>
   */
  lagName: string | undefined;

  /**
   * @public
   * <p>The ID of an existing dedicated connection to migrate to the LAG.</p>
   */
  connectionId?: string;

  /**
   * @public
   * <p>The tags to associate with the LAG.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The tags to associate with the automtically created LAGs.</p>
   */
  childConnectionTags?: Tag[];

  /**
   * @public
   * <p>The name of the service provider associated with the LAG.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>Indicates whether the connection will support MAC Security (MACsec).</p>
   *          <note>
   *             <p>All connections in the LAG must be capable of  supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites">MACsec prerequisties</a> in the <i>Direct Connect User Guide</i>.</p>
   *          </note>
   */
  requestMACSec?: boolean;
}

/**
 * @public
 * @enum
 */
export const LagState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  down: "down",
  pending: "pending",
  requested: "requested",
  unknown: "unknown",
} as const;

/**
 * @public
 */
export type LagState = (typeof LagState)[keyof typeof LagState];

/**
 * @public
 * <p>Information about a link aggregation group (LAG).</p>
 */
export interface Lag {
  /**
   * @public
   * <p>The individual bandwidth of the physical connections bundled by the LAG. The possible
   *       values are 1Gbps and 10Gbps. </p>
   */
  connectionsBandwidth?: string;

  /**
   * @public
   * <p>The number of physical dedicated connections bundled by the LAG, up to a maximum of 10.</p>
   */
  numberOfConnections?: number;

  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the LAG.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The name of the LAG.</p>
   */
  lagName?: string;

  /**
   * @public
   * <p>The state of the LAG. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of a LAG. The LAG stays in the
   *                 requested state until the Letter of Authorization (LOA) is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The LAG has been approved and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is established and the LAG is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The LAG is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The LAG is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the LAG is not available.</p>
   *             </li>
   *          </ul>
   */
  lagState?: LagState;

  /**
   * @public
   * <p>The location of the LAG.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region where the connection is located.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.</p>
   */
  minimumLinks?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>The Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDevice?: string;

  /**
   * @public
   * <p>The Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDeviceV2?: string;

  /**
   * @public
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   */
  awsLogicalDeviceId?: string;

  /**
   * @public
   * <p>The connections bundled by the LAG.</p>
   */
  connections?: Connection[];

  /**
   * @public
   * <p>Indicates whether the LAG can host other connections.</p>
   */
  allowsHostedConnections?: boolean;

  /**
   * @public
   * <p>Indicates whether jumbo frames are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * @public
   * <p>Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: HasLogicalRedundancy;

  /**
   * @public
   * <p>The tags associated with the LAG.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The name of the service provider associated with the LAG.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>Indicates whether the LAG supports MAC Security (MACsec).</p>
   */
  macSecCapable?: boolean;

  /**
   * @public
   * <p>The LAG MAC Security (MACsec) encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   */
  encryptionMode?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) security keys associated with the LAG.</p>
   */
  macSecKeys?: MacSecKey[];
}

/**
 * @public
 * <p>Information about a private virtual interface.</p>
 */
export interface NewPrivateVirtualInterface {
  /**
   * @public
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * @public
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The tags associated with the private virtual interface.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether to enable or disable SiteLink.</p>
   */
  enableSiteLink?: boolean;
}

/**
 * @public
 */
export interface CreatePrivateVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>Information about the private virtual interface.</p>
   */
  newPrivateVirtualInterface: NewPrivateVirtualInterface | undefined;
}

/**
 * @public
 * <p>Information about a public virtual interface.</p>
 */
export interface NewPublicVirtualInterface {
  /**
   * @public
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName: string | undefined;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan: number | undefined;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn: number | undefined;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   */
  routeFilterPrefixes?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The tags associated with the public virtual interface.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePublicVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>Information about the public virtual interface.</p>
   */
  newPublicVirtualInterface: NewPublicVirtualInterface | undefined;
}

/**
 * @public
 * <p>Information about a transit virtual interface.</p>
 */
export interface NewTransitVirtualInterface {
  /**
   * @public
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   */
  virtualInterfaceName?: string;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  vlan?: number;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   *          <p>The valid values are 1-2147483647.</p>
   */
  asn?: number;

  /**
   * @public
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * @public
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   */
  authKey?: string;

  /**
   * @public
   * <p>The IP address assigned to the Amazon interface.</p>
   */
  amazonAddress?: string;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The address family for the BGP peer.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The tags associated with the transitive virtual interface.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether to enable or disable SiteLink.</p>
   */
  enableSiteLink?: boolean;
}

/**
 * @public
 */
export interface CreateTransitVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>Information about the transit virtual interface.</p>
   */
  newTransitVirtualInterface: NewTransitVirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateTransitVirtualInterfaceResult {
  /**
   * @public
   * <p>Information about a virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

/**
 * @public
 */
export interface DeleteBGPPeerRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p>
   */
  asn?: number;

  /**
   * @public
   * <p>The IP address assigned to the customer interface.</p>
   */
  customerAddress?: string;

  /**
   * @public
   * <p>The ID of the BGP peer.</p>
   */
  bgpPeerId?: string;
}

/**
 * @public
 */
export interface DeleteBGPPeerResponse {
  /**
   * @public
   * <p>The virtual interface.</p>
   */
  virtualInterface?: VirtualInterface;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayResult {
  /**
   * @public
   * <p>The Direct Connect gateway.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationResult {
  /**
   * @public
   * <p>Information about the deleted association.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  /**
   * @public
   * <p>The ID of the proposal.</p>
   */
  proposalId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationProposalResult {
  /**
   * @public
   * <p>The ID of the associated gateway.</p>
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}

/**
 * @public
 */
export interface DeleteInterconnectRequest {
  /**
   * @public
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInterconnectResponse {
  /**
   * @public
   * <p>The state of the interconnect. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>requested</code>: The initial state of an interconnect. The interconnect stays in the
   *         requested state until the Letter of Authorization (LOA) is sent to the customer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The interconnect is approved, and is being initialized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The network link is up, and the interconnect is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: The network link is down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The interconnect is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The interconnect is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the interconnect is not available.</p>
   *             </li>
   *          </ul>
   */
  interconnectState?: InterconnectState;
}

/**
 * @public
 */
export interface DeleteLagRequest {
  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualInterfaceRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualInterfaceResponse {
  /**
   * @public
   * <p>The state of the virtual interface. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: A virtual interface that is able to forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>down</code>: A virtual interface that is BGP down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: A virtual interface that cannot forward traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code>: The state of the virtual interface is not available.</p>
   *             </li>
   *          </ul>
   */
  virtualInterfaceState?: VirtualInterfaceState;
}

/**
 * @public
 * @enum
 */
export const LoaContentType = {
  PDF: "application/pdf",
} as const;

/**
 * @public
 */
export type LoaContentType = (typeof LoaContentType)[keyof typeof LoaContentType];

/**
 * @public
 */
export interface DescribeConnectionLoaRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this parameter,
   *       the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType;
}

/**
 * @public
 * <p>Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>
 */
export interface Loa {
  /**
   * @public
   * <p>The binary contents of the LOA-CFA document.</p>
   */
  loaContent?: Uint8Array;

  /**
   * @public
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType;
}

/**
 * @public
 */
export interface DescribeConnectionLoaResponse {
  /**
   * @public
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   */
  loa?: Loa;
}

/**
 * @public
 */
export interface DescribeConnectionsRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;
}

/**
 * @public
 */
export interface DescribeConnectionsOnInterconnectRequest {
  /**
   * @public
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NniPartnerType = {
  NonPartner: "nonPartner",
  V1: "v1",
  V2: "v2",
} as const;

/**
 * @public
 */
export type NniPartnerType = (typeof NniPartnerType)[keyof typeof NniPartnerType];

/**
 * @public
 */
export interface DescribeCustomerMetadataResponse {
  /**
   * @public
   * <p>The list of customer agreements.</p>
   */
  agreements?: CustomerAgreement[];

  /**
   * @public
   * <p>The type of network-to-network interface (NNI) partner. The partner type will be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections.</p>
   *             </li>
   *             <li>
   *                <p>V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections.</p>
   *             </li>
   *             <li>
   *                <p>nonPartner: The customer is not a partner.</p>
   *             </li>
   *          </ul>
   */
  nniPartnerType?: NniPartnerType;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The ID of the proposal.</p>
   */
  proposalId?: string;

  /**
   * @public
   * <p>The ID of the associated gateway.</p>
   */
  associatedGatewayId?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  /**
   * @public
   * <p>Describes the Direct Connect gateway association proposals.</p>
   */
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationsRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * @public
   * <p>The ID of the associated gateway.</p>
   */
  associatedGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   */
  virtualGatewayId?: string;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationsResult {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[];

  /**
   * @public
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAttachmentsRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAttachmentState = {
  attached: "attached",
  attaching: "attaching",
  detached: "detached",
  detaching: "detaching",
} as const;

/**
 * @public
 */
export type DirectConnectGatewayAttachmentState =
  (typeof DirectConnectGatewayAttachmentState)[keyof typeof DirectConnectGatewayAttachmentState];

/**
 * @public
 * @enum
 */
export const DirectConnectGatewayAttachmentType = {
  PrivateVirtualInterface: "PrivateVirtualInterface",
  TransitVirtualInterface: "TransitVirtualInterface",
} as const;

/**
 * @public
 */
export type DirectConnectGatewayAttachmentType =
  (typeof DirectConnectGatewayAttachmentType)[keyof typeof DirectConnectGatewayAttachmentType];

/**
 * @public
 * <p>Information about an attachment between a Direct Connect gateway and a virtual interface.</p>
 */
export interface DirectConnectGatewayAttachment {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region where the virtual interface is located.</p>
   */
  virtualInterfaceRegion?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the virtual interface.</p>
   */
  virtualInterfaceOwnerAccount?: string;

  /**
   * @public
   * <p>The state of the attachment. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attaching</code>: The initial state after a virtual interface is created using the Direct Connect gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attached</code>: The Direct Connect gateway and virtual interface are attached and ready to pass traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detaching</code>: The initial state after calling <a>DeleteVirtualInterface</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detached</code>: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.</p>
   *             </li>
   *          </ul>
   */
  attachmentState?: DirectConnectGatewayAttachmentState;

  /**
   * @public
   * <p>The type of attachment.</p>
   */
  attachmentType?: DirectConnectGatewayAttachmentType;

  /**
   * @public
   * <p>The error message if the state of an object failed to advance.</p>
   */
  stateChangeError?: string;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAttachmentsResult {
  /**
   * @public
   * <p>The attachments.</p>
   */
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[];

  /**
   * @public
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewaysRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token provided in the previous call to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewaysResult {
  /**
   * @public
   * <p>The Direct Connect gateways.</p>
   */
  directConnectGateways?: DirectConnectGateway[];

  /**
   * @public
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeHostedConnectionsRequest {
  /**
   * @public
   * <p>The ID of the interconnect or LAG.</p>
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeInterconnectLoaRequest {
  /**
   * @public
   * <p>The ID of the interconnect.</p>
   */
  interconnectId: string | undefined;

  /**
   * @public
   * <p>The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType;
}

/**
 * @public
 */
export interface DescribeInterconnectLoaResponse {
  /**
   * @public
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   */
  loa?: Loa;
}

/**
 * @public
 */
export interface DescribeInterconnectsRequest {
  /**
   * @public
   * <p>The ID of the interconnect.</p>
   */
  interconnectId?: string;
}

/**
 * @public
 */
export interface Interconnects {
  /**
   * @public
   * <p>The interconnects.</p>
   */
  interconnects?: Interconnect[];
}

/**
 * @public
 */
export interface DescribeLagsRequest {
  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;
}

/**
 * @public
 */
export interface Lags {
  /**
   * @public
   * <p>The LAGs.</p>
   */
  lags?: Lag[];
}

/**
 * @public
 */
export interface DescribeLoaRequest {
  /**
   * @public
   * <p>The ID of a connection, LAG, or interconnect.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The name of the service provider who establishes connectivity on your behalf. If you specify this parameter, the
   *       LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: LoaContentType;
}

/**
 * @public
 * <p>Information about an Direct Connect location.</p>
 */
export interface Location {
  /**
   * @public
   * <p>The code for the location.</p>
   */
  locationCode?: string;

  /**
   * @public
   * <p>The name of the location. This includes the name of the colocation partner and the physical site of the building.</p>
   */
  locationName?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region for the location.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The available port speeds for the location.</p>
   */
  availablePortSpeeds?: string[];

  /**
   * @public
   * <p>The name of the service provider for the location.</p>
   */
  availableProviders?: string[];

  /**
   * @public
   * <p>The available MAC Security (MACsec) port speeds for the location.</p>
   */
  availableMacSecPortSpeeds?: string[];
}

/**
 * @public
 */
export interface Locations {
  /**
   * @public
   * <p>The locations.</p>
   */
  locations?: Location[];
}

/**
 * @public
 * <p>Provides the details about a virtual interface's router.</p>
 */
export interface DescribeRouterConfigurationRequest {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * @public
   * <p>Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.</p>
   */
  routerTypeIdentifier?: string;
}

/**
 * @public
 * <p>Information about the virtual router.</p>
 */
export interface RouterType {
  /**
   * @public
   * <p>The vendor for the virtual interface's router.</p>
   */
  vendor?: string;

  /**
   * @public
   * <p>The virtual interface router platform.</p>
   */
  platform?: string;

  /**
   * @public
   * <p>The router software. </p>
   */
  software?: string;

  /**
   * @public
   * <p>The template for the virtual interface's router.</p>
   */
  xsltTemplateName?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) template for the virtual interface's router.</p>
   */
  xsltTemplateNameForMacSec?: string;

  /**
   * @public
   * <p>Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.</p>
   */
  routerTypeIdentifier?: string;
}

/**
 * @public
 */
export interface DescribeRouterConfigurationResponse {
  /**
   * @public
   * <p>The customer router configuration.</p>
   */
  customerRouterConfig?: string;

  /**
   * @public
   * <p>The details about the router.</p>
   */
  router?: RouterType;

  /**
   * @public
   * <p>The ID assigned to the virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>Provides the details about a virtual interface's router.</p>
   */
  virtualInterfaceName?: string;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns: string[] | undefined;
}

/**
 * @public
 * <p>Information about a tag associated with an Direct Connect resource.</p>
 */
export interface ResourceTag {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The tags.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeTagsResponse {
  /**
   * @public
   * <p>Information about the tags.</p>
   */
  resourceTags?: ResourceTag[];
}

/**
 * @public
 * <p>Information about a virtual private gateway for a private virtual interface.</p>
 */
export interface VirtualGateway {
  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  virtualGatewayId?: string;

  /**
   * @public
   * <p>The state of the virtual private gateway. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: Initial state after creating the virtual private gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: Ready for use by a private virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: Initial state after deleting the virtual private gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.</p>
   *             </li>
   *          </ul>
   */
  virtualGatewayState?: string;
}

/**
 * @public
 */
export interface VirtualGateways {
  /**
   * @public
   * <p>The virtual private gateways.</p>
   */
  virtualGateways?: VirtualGateway[];
}

/**
 * @public
 */
export interface DescribeVirtualInterfacesRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId?: string;

  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  virtualInterfaceId?: string;
}

/**
 * @public
 */
export interface VirtualInterfaces {
  /**
   * @public
   * <p>The virtual interfaces</p>
   */
  virtualInterfaces?: VirtualInterface[];
}

/**
 * @public
 */
export interface DisassociateConnectionFromLagRequest {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMacSecKeyRequest {
  /**
   * @public
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   *          <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve connection ID.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.</p>
   *          <p>You can use <a>DescribeConnections</a> to retrieve the ARN of the MAC Security (MACsec) secret key.</p>
   */
  secretARN: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMacSecKeyResponse {
  /**
   * @public
   * <p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p>
   */
  connectionId?: string;

  /**
   * @public
   * <p>The MAC Security (MACsec) security keys no longer associated with the dedicated connection.</p>
   */
  macSecKeys?: MacSecKey[];
}

/**
 * @public
 */
export interface ListVirtualInterfaceTestHistoryRequest {
  /**
   * @public
   * <p>The ID of the virtual interface failover test.</p>
   */
  testId?: string;

  /**
   * @public
   * <p>The ID of the virtual interface that was tested.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>The BGP peers that were placed in the DOWN state during the virtual interface failover test.</p>
   */
  bgpPeers?: string[];

  /**
   * @public
   * <p>The status of the virtual interface failover test.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the virtual interface failover test.</p>
 */
export interface VirtualInterfaceTestHistory {
  /**
   * @public
   * <p>The ID of the virtual interface failover test.</p>
   */
  testId?: string;

  /**
   * @public
   * <p>The ID of the tested virtual interface.</p>
   */
  virtualInterfaceId?: string;

  /**
   * @public
   * <p>The BGP peers that were put in the DOWN state as part of the virtual interface failover test.</p>
   */
  bgpPeers?: string[];

  /**
   * @public
   * <p>The status of the virtual interface failover test.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The owner ID of the tested virtual interface.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The time that the virtual interface failover test ran in minutes.</p>
   */
  testDurationInMinutes?: number;

  /**
   * @public
   * <p>The time that the virtual interface moves to the DOWN state.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The time that the virtual interface moves out of the DOWN state.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListVirtualInterfaceTestHistoryResponse {
  /**
   * @public
   * <p>The ID of the tested virtual interface.</p>
   */
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartBgpFailoverTestRequest {
  /**
   * @public
   * <p>The ID of the virtual interface you want to test.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * @public
   * <p>The BGP peers to place in the DOWN state.</p>
   */
  bgpPeers?: string[];

  /**
   * @public
   * <p>The time in minutes that the virtual interface failover test will last.</p>
   *          <p>Maximum value: 4,320 minutes (72 hours).</p>
   *          <p>Default: 180 minutes (3 hours).</p>
   */
  testDurationInMinutes?: number;
}

/**
 * @public
 */
export interface StartBgpFailoverTestResponse {
  /**
   * @public
   * <p>Information about the virtual interface failover test.</p>
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}

/**
 * @public
 */
export interface StopBgpFailoverTestRequest {
  /**
   * @public
   * <p>The ID of the virtual interface you no longer want to test.</p>
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface StopBgpFailoverTestResponse {
  /**
   * @public
   * <p>Information about the virtual interface failover test.</p>
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * @public
   * <p>The ID of the dedicated connection.</p>
   *          <p>You can use <a>DescribeConnections</a> to retrieve the connection ID.</p>
   */
  connectionId: string | undefined;

  /**
   * @public
   * <p>The name of the connection.</p>
   */
  connectionName?: string;

  /**
   * @public
   * <p>The connection MAC Security (MACsec) encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   */
  encryptionMode?: string;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway to update.</p>
   */
  directConnectGatewayId: string | undefined;

  /**
   * @public
   * <p>The new name for the Direct Connect gateway.</p>
   */
  newDirectConnectGatewayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayResponse {
  /**
   * @public
   * <p>Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.</p>
   */
  directConnectGateway?: DirectConnectGateway;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAssociationRequest {
  /**
   * @public
   * <p>The ID of the Direct Connect gateway association.</p>
   */
  associationId?: string;

  /**
   * @public
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  /**
   * @public
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAssociationResult {
  /**
   * @public
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}

/**
 * @public
 */
export interface UpdateLagRequest {
  /**
   * @public
   * <p>The ID of the LAG.</p>
   */
  lagId: string | undefined;

  /**
   * @public
   * <p>The name of the LAG.</p>
   */
  lagName?: string;

  /**
   * @public
   * <p>The minimum number of physical connections that must be operational for the LAG itself to be operational.</p>
   */
  minimumLinks?: number;

  /**
   * @public
   * <p>The LAG MAC Security (MACsec) encryption mode.</p>
   *          <p>Amazon Web Services applies the value to all connections which are part of the LAG.</p>
   */
  encryptionMode?: string;
}

/**
 * @public
 */
export interface UpdateVirtualInterfaceAttributesRequest {
  /**
   * @public
   * <p>The ID of the virtual private interface.</p>
   */
  virtualInterfaceId: string | undefined;

  /**
   * @public
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.</p>
   */
  mtu?: number;

  /**
   * @public
   * <p>Indicates whether to enable or disable SiteLink.</p>
   */
  enableSiteLink?: boolean;

  /**
   * @public
   * <p>The name of the virtual private interface.</p>
   */
  virtualInterfaceName?: string;
}
