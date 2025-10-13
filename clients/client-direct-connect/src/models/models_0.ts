// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DirectConnectServiceException as __BaseException } from "./DirectConnectServiceException";

/**
 * <p>Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP)
 *         over a public virtual interface.</p>
 * @public
 */
export interface RouteFilterPrefix {
  /**
   * <p>The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.</p>
   * @public
   */
  cidr?: string | undefined;
}

/**
 * @public
 */
export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the request proposal.</p>
   * @public
   */
  proposalId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual private gateway or transit gateway.</p>
   * @public
   */
  associatedGatewayOwnerAccount: string | undefined;

  /**
   * <p>Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>
   * @public
   */
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
}

/**
 * <p>The Amazon Web Services Cloud WAN core network that the Direct Connect gateway is associated to. This is only returned when a Direct Connect gateway is associated to a Cloud WAN core network.</p>
 * @public
 */
export interface AssociatedCoreNetwork {
  /**
   * <p>The ID of the Cloud WAN core network that the Direct Connect gateway is associated to.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The account owner of the Cloud WAN core network.</p>
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * <p>the ID of the Direct Connect gateway attachment.</p>
   * @public
   */
  attachmentId?: string | undefined;
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
 * <p>Information about the associated gateway.</p>
 * @public
 */
export interface AssociatedGateway {
  /**
   * <p>The ID of the associated gateway.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of associated gateway.</p>
   * @public
   */
  type?: GatewayType | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the associated virtual private gateway or transit gateway.</p>
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * <p>The Region where the associated gateway is located.</p>
   * @public
   */
  region?: string | undefined;
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
 * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
 * @public
 */
export interface DirectConnectGatewayAssociation {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the associated gateway.</p>
   * @public
   */
  directConnectGatewayOwnerAccount?: string | undefined;

  /**
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
   * @public
   */
  associationState?: DirectConnectGatewayAssociationState | undefined;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   * @public
   */
  stateChangeError?: string | undefined;

  /**
   * <p>Information about the associated gateway.</p>
   * @public
   */
  associatedGateway?: AssociatedGateway | undefined;

  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   * @public
   */
  associationId?: string | undefined;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   * @public
   */
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The ID of the Cloud WAN core network associated with the Direct Connect gateway attachment.</p>
   * @public
   */
  associatedCoreNetwork?: AssociatedCoreNetwork | undefined;

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the virtual private gateway is located.</p>
   *
   * @deprecated deprecated
   * @public
   */
  virtualGatewayRegion?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual private gateway.</p>
   * @public
   */
  virtualGatewayOwnerAccount?: string | undefined;
}

/**
 * @public
 */
export interface AcceptDirectConnectGatewayAssociationProposalResult {
  /**
   * <p>Information about an association between a Direct Connect gateway and a virtual gateway or transit gateway.</p>
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * <p>One or more parameters are not valid.</p>
 * @public
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
 * <p>A server-side error occurred.</p>
 * @public
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
 * <p>The name and status of a customer agreement. </p>
 * @public
 */
export interface CustomerAgreement {
  /**
   * <p>The name of the agreement.</p>
   * @public
   */
  agreementName?: string | undefined;

  /**
   * <p>The status of the customer agreement. This will be either <code>signed</code> or <code>unsigned</code>
   *          </p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface AllocateConnectionOnInterconnectRequest {
  /**
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps,
   *       300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners
   *       who have met specific requirements
   *     are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.</p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the provisioned connection.</p>
   * @public
   */
  connectionName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account of the customer for whom the connection will be provisioned.</p>
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * <p>The ID of the interconnect on which the connection will be provisioned.</p>
   * @public
   */
  interconnectId: string | undefined;

  /**
   * <p>The dedicated VLAN provisioned to the connection.</p>
   * @public
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
 * <p>Information about the MAC Security (MACsec) secret key.</p>
 * @public
 */
export interface MacSecKey {
  /**
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.</p>
   * @public
   */
  secretARN?: string | undefined;

  /**
   * <p>The Connection Key Name (CKN) for the MAC Security secret key.</p>
   * @public
   */
  ckn?: string | undefined;

  /**
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
   * @public
   */
  state?: string | undefined;

  /**
   * <p>The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC format.</p>
   * @public
   */
  startOn?: string | undefined;
}

/**
 * <p>Information about a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Information about an Direct Connect connection.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The ID of the Amazon Web Services account that owns the connection.</p>
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The name of the connection.</p>
   * @public
   */
  connectionName?: string | undefined;

  /**
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
   * @public
   */
  connectionState?: ConnectionState | undefined;

  /**
   * <p>The Amazon Web Services Region where the connection is located.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The location of the connection.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The bandwidth of the connection.</p>
   * @public
   */
  bandwidth?: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan?: number | undefined;

  /**
   * <p>The name of the Direct Connect service provider associated with the connection.</p>
   * @public
   */
  partnerName?: string | undefined;

  /**
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   * @public
   */
  loaIssueTime?: Date | undefined;

  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId?: string | undefined;

  /**
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   *
   * @deprecated deprecated
   * @public
   */
  awsDevice?: string | undefined;

  /**
   * <p>Indicates whether jumbo frames are supported.</p>
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * <p>Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   * @public
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | undefined;

  /**
   * <p>The tags associated with the connection.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the service provider associated with the connection.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>Indicates whether the connection supports MAC Security (MACsec).</p>
   * @public
   */
  macSecCapable?: boolean | undefined;

  /**
   * <p>The MAC Security (MACsec) port link status of the connection.</p>
   *          <p>The valid values are <code>Encryption Up</code>, which means that there is an active Connection Key Name, or <code>Encryption Down</code>.</p>
   * @public
   */
  portEncryptionStatus?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) connection encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   * @public
   */
  encryptionMode?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) security keys associated with the connection.</p>
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;

  /**
   * <p>Indicates whether the interconnect hosting this connection supports MAC Security (MACsec).</p>
   * @public
   */
  partnerInterconnectMacSecCapable?: boolean | undefined;
}

/**
 * @public
 */
export interface AllocateHostedConnectionRequest {
  /**
   * <p>The ID of the interconnect or LAG.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account ID of the customer for the connection.</p>
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps,
   *       300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps, and 25Gbps. Note that only those
   *       Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps,
   *       10Gbps, or 25Gbps hosted connection. </p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the hosted connection.</p>
   * @public
   */
  connectionName: string | undefined;

  /**
   * <p>The dedicated VLAN provisioned to the hosted connection.</p>
   * @public
   */
  vlan: number | undefined;

  /**
   * <p>The tags associated with the connection.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>A tag key was specified more than once.</p>
 * @public
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
 * <p>You have reached the limit on the number of tags that can be assigned.</p>
 * @public
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
 * <p>Information about a private virtual interface to be provisioned on a connection.</p>
 * @public
 */
export interface NewPrivateVirtualInterfaceAllocation {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>The valid values are 1-2147483646.</p>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The ASN when allocating a new private virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.</p>
   * @public
   */
  mtu?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The tags associated with the private virtual interface.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AllocatePrivateVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection on which the private virtual interface is provisioned.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual private interface.</p>
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * <p>Information about the private virtual interface.</p>
   * @public
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
 * <p>Information about a BGP peer.</p>
 * @public
 */
export interface BGPPeer {
  /**
   * <p>The ID of the BGP peer.</p>
   * @public
   */
  bgpPeerId?: string | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The long ASN for the BGP peer. The valid range is from 1 to 4294967294 for BGP configuration. </p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
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
   * @public
   */
  bgpPeerState?: BGPPeerState | undefined;

  /**
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
   * @public
   */
  bgpStatus?: BGPStatus | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the BGP peer.</p>
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   * @public
   */
  awsLogicalDeviceId?: string | undefined;
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
  testing: "testing",
  unknown: "unknown",
  verifying: "verifying",
} as const;

/**
 * @public
 */
export type VirtualInterfaceState = (typeof VirtualInterfaceState)[keyof typeof VirtualInterfaceState];

/**
 * <p>Information about a virtual interface.</p>
 * @public
 */
export interface VirtualInterface {
  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual interface.</p>
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>The location of the connection.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The type of virtual interface. The possible values are <code>private</code>, <code>public</code> and <code>transit</code>.</p>
   * @public
   */
  virtualInterfaceType?: string | undefined;

  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   * @public
   */
  virtualInterfaceName?: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan?: number | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The long ASN for the virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The autonomous system number (AS) for the Amazon side of the connection.</p>
   * @public
   */
  amazonSideAsn?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
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
   *                   <code>testing</code>: A virtual interface is in this state immediately after calling <a>StartBgpFailoverTest</a> and remains in this state during the duration of the test.</p>
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
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;

  /**
   * <p>The customer router configuration.</p>
   * @public
   */
  customerRouterConfig?: string | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500</p>
   * @public
   */
  mtu?: number | undefined;

  /**
   * <p>Indicates whether jumbo frames are supported.</p>
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * <p>The ID of the virtual private gateway. Applies only to private virtual interfaces.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   * @public
   */
  routeFilterPrefixes?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The BGP peers configured on this virtual interface.</p>
   * @public
   */
  bgpPeers?: BGPPeer[] | undefined;

  /**
   * <p>The Amazon Web Services Region where the virtual interface is located.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * <p>The tags associated with the virtual interface.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether SiteLink is enabled.</p>
   * @public
   */
  siteLinkEnabled?: boolean | undefined;
}

/**
 * <p>Information about a public virtual interface to be provisioned on a connection.</p>
 * @public
 */
export interface NewPublicVirtualInterfaceAllocation {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>The valid values are 1-2147483646.</p>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The ASN when allocating a new public virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   * @public
   */
  routeFilterPrefixes?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The tags associated with the public virtual interface.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AllocatePublicVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection on which the public virtual interface is provisioned.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the public virtual interface.</p>
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * <p>Information about the public virtual interface.</p>
   * @public
   */
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation | undefined;
}

/**
 * <p>Information about a transit virtual interface to be provisioned on a connection.</p>
 * @public
 */
export interface NewTransitVirtualInterfaceAllocation {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   * @public
   */
  virtualInterfaceName?: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan?: number | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>The valid values are 1-2147483646.</p>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The ASN when allocating a new transit virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500 </p>
   * @public
   */
  mtu?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The tags associated with the transitive virtual interface.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AllocateTransitVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection on which the transit virtual interface is provisioned.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit virtual interface.</p>
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * <p>Information about the transit virtual interface.</p>
   * @public
   */
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation | undefined;
}

/**
 * @public
 */
export interface AllocateTransitVirtualInterfaceResult {
  /**
   * <p>Information about the transit virtual interface.</p>
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionWithLagRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the LAG with which to associate the connection.</p>
   * @public
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface AssociateHostedConnectionRequest {
  /**
   * <p>The ID of the hosted connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the interconnect or the LAG.</p>
   * @public
   */
  parentConnectionId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMacSecKeyRequest {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).</p>
   *          <p>You can use <a>DescribeConnections</a>, <a>DescribeInterconnects</a>, or <a>DescribeLags</a> to retrieve connection ID.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the connection.</p>
   *          <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve the MAC Security (MACsec) secret key.</p>
   *          <p>If you use this request parameter, you do not use the <code>ckn</code> and <code>cak</code> request parameters.</p>
   * @public
   */
  secretARN?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) CKN to associate with the connection.</p>
   *          <p>You can create the CKN/CAK pair using an industry standard tool.</p>
   *          <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p>
   *          <p>If you use this request parameter, you must use the <code>cak</code> request parameter and not use the <code>secretARN</code> request parameter.</p>
   * @public
   */
  ckn?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) CAK to associate with the connection.</p>
   *          <p>You can create the CKN/CAK pair using an industry standard tool.</p>
   *          <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p>
   *          <p>If you use this request parameter, you must use the <code>ckn</code> request parameter and not use the <code>secretARN</code> request parameter.</p>
   * @public
   */
  cak?: string | undefined;
}

/**
 * @public
 */
export interface AssociateMacSecKeyResponse {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) security keys associated with the connection.</p>
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;
}

/**
 * @public
 */
export interface AssociateVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The ID of the LAG or connection.</p>
   * @public
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmConnectionRequest {
  /**
   * <p>The ID of the hosted connection.</p>
   * @public
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmConnectionResponse {
  /**
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
   * @public
   */
  connectionState?: ConnectionState | undefined;
}

/**
 * @public
 */
export interface ConfirmCustomerAgreementRequest {
  /**
   * <p>
   *
   *       The name of the customer agreement.
   *
   *     </p>
   * @public
   */
  agreementName?: string | undefined;
}

/**
 * @public
 */
export interface ConfirmCustomerAgreementResponse {
  /**
   * <p>
   *       The status of the customer agreement when the connection was created. This will be either <code>signed</code> or <code>unsigned</code>.
   *     </p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface ConfirmPrivateVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface ConfirmPrivateVirtualInterfaceResponse {
  /**
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
   *                   <code>testing</code>: A virtual interface is in this state immediately after calling <a>StartBgpFailoverTest</a> and remains in this state during the duration of the test.</p>
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
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
}

/**
 * @public
 */
export interface ConfirmPublicVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmPublicVirtualInterfaceResponse {
  /**
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
   *                   <code>testing</code>: A virtual interface is in this state immediately after calling <a>StartBgpFailoverTest</a> and remains in this state during the duration of the test.</p>
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
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
}

/**
 * @public
 */
export interface ConfirmTransitVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmTransitVirtualInterfaceResponse {
  /**
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
   *                   <code>testing</code>: A virtual interface is in this state immediately after calling <a>StartBgpFailoverTest</a> and remains in this state during the duration of the test.</p>
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
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
}

/**
 * @public
 */
export interface Connections {
  /**
   * <p>The connections.</p>
   * @public
   */
  connections?: Connection[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about a new BGP peer.</p>
 * @public
 */
export interface NewBGPPeer {
  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The long ASN for a new BGP peer.  The valid range is  from 1 to 4294967294.</p>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;
}

/**
 * @public
 */
export interface CreateBGPPeerRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>Information about the BGP peer.</p>
   * @public
   */
  newBGPPeer?: NewBGPPeer | undefined;
}

/**
 * @public
 */
export interface CreateBGPPeerResponse {
  /**
   * <p>The virtual interface.</p>
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * <p>The location of the connection.</p>
   * @public
   */
  location: string | undefined;

  /**
   * <p>The bandwidth of the connection.</p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The name of the connection.</p>
   * @public
   */
  connectionName: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId?: string | undefined;

  /**
   * <p>The tags to associate with the lag.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the service provider associated with the requested connection.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>Indicates whether you want the connection to support MAC Security (MACsec).</p>
   *          <p>MAC Security (MACsec) is unavailable on hosted connections. For information about MAC Security (MACsec) prerequisites, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/MACSec.html">MAC Security in Direct Connect</a> in the <i>Direct Connect User Guide</i>.</p>
   * @public
   */
  requestMACSec?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayRequest {
  /**
   * <p>The name of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayName: string | undefined;

  /**
   * <p>The key-value pair tags associated with the request.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured
   *       on the Amazon side of the connection. The ASN must be in the private range of 64,512 to
   *       65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.</p>
   * @public
   */
  amazonSideAsn?: number | undefined;
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
 * <p>Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.</p>
 * @public
 */
export interface DirectConnectGateway {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The name of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayName?: string | undefined;

  /**
   * <p>The autonomous system number (AS) for the Amazon side of the connection.</p>
   * @public
   */
  amazonSideAsn?: number | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   * @public
   */
  ownerAccount?: string | undefined;

  /**
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
   * @public
   */
  directConnectGatewayState?: DirectConnectGatewayState | undefined;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   * @public
   */
  stateChangeError?: string | undefined;

  /**
   * <p>Information about a tag.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayResult {
  /**
   * <p>The Direct Connect gateway.</p>
   * @public
   */
  directConnectGateway?: DirectConnectGateway | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   * @public
   */
  gatewayId?: string | undefined;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway</p>
   *          <p>This parameter is required when you create an association to a transit gateway.</p>
   *          <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>
   * @public
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationResult {
  /**
   * <p>The association to be created.</p>
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationProposalRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayOwnerAccount: string | undefined;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   * @public
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   * @public
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
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
 * <p>Information about the  proposal request to attach a virtual private gateway to a Direct Connect gateway. </p>
 * @public
 */
export interface DirectConnectGatewayAssociationProposal {
  /**
   * <p>The ID of the association proposal.</p>
   * @public
   */
  proposalId?: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayOwnerAccount?: string | undefined;

  /**
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
   * @public
   */
  proposalState?: DirectConnectGatewayAssociationProposalState | undefined;

  /**
   * <p>Information about the associated gateway.</p>
   * @public
   */
  associatedGateway?: AssociatedGateway | undefined;

  /**
   * <p>The existing Amazon VPC prefixes advertised to the Direct Connect gateway.</p>
   * @public
   */
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   * @public
   */
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationProposalResult {
  /**
   * <p>Information about the Direct Connect gateway proposal.</p>
   * @public
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal | undefined;
}

/**
 * @public
 */
export interface CreateInterconnectRequest {
  /**
   * <p>The name of the interconnect.</p>
   * @public
   */
  interconnectName: string | undefined;

  /**
   * <p>The port bandwidth, in Gbps. The possible values are 1, 10, and 100.</p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The location of the interconnect.</p>
   * @public
   */
  location: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId?: string | undefined;

  /**
   * <p>The tags to associate with the interconnect.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the service provider associated with the interconnect.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>Indicates whether you want the interconnect to support MAC Security (MACsec).</p>
   * @public
   */
  requestMACSec?: boolean | undefined;
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
 * <p>Information about an interconnect.</p>
 * @public
 */
export interface Interconnect {
  /**
   * <p>The ID of the interconnect.</p>
   * @public
   */
  interconnectId?: string | undefined;

  /**
   * <p>The name of the interconnect.</p>
   * @public
   */
  interconnectName?: string | undefined;

  /**
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
   * @public
   */
  interconnectState?: InterconnectState | undefined;

  /**
   * <p>The Amazon Web Services Region where the connection is located.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The location of the connection.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The bandwidth of the connection.</p>
   * @public
   */
  bandwidth?: string | undefined;

  /**
   * <p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>
   * @public
   */
  loaIssueTime?: Date | undefined;

  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId?: string | undefined;

  /**
   * <p>The Direct Connect endpoint on which the physical connection terminates.</p>
   *
   * @deprecated deprecated
   * @public
   */
  awsDevice?: string | undefined;

  /**
   * <p>Indicates whether jumbo frames are supported.</p>
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the physical connection.</p>
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * <p>Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).</p>
   * @public
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | undefined;

  /**
   * <p>The tags associated with the interconnect.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the service provider associated with the interconnect.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>Indicates whether the interconnect supports MAC Security (MACsec).</p>
   * @public
   */
  macSecCapable?: boolean | undefined;

  /**
   * <p>The MAC Security (MACsec) port link status.</p>
   *          <p>The valid values are <code>Encryption Up</code>, which means that there is an active Connection Key Name, or <code>Encryption Down</code>.</p>
   * @public
   */
  portEncryptionStatus?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   * @public
   */
  encryptionMode?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) security keys.</p>
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;
}

/**
 * @public
 */
export interface CreateLagRequest {
  /**
   * <p>The number of physical dedicated connections initially provisioned and bundled by the LAG.
   *       You can have a maximum of four connections when the port speed is 1Gbps or 10Gbps, or two when
   *       the port speed is 100Gbps or 400Gbps.</p>
   * @public
   */
  numberOfConnections: number | undefined;

  /**
   * <p>The location for the LAG.</p>
   * @public
   */
  location: string | undefined;

  /**
   * <p>The bandwidth of the individual physical dedicated connections bundled by the LAG. The
   *       possible values are  1Gbps,10Gbps, 100Gbps, and 400Gbps. </p>
   * @public
   */
  connectionsBandwidth: string | undefined;

  /**
   * <p>The name of the LAG.</p>
   * @public
   */
  lagName: string | undefined;

  /**
   * <p>The ID of an existing dedicated connection to migrate to the LAG.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The tags to associate with the LAG.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The tags to associate with the automtically created LAGs.</p>
   * @public
   */
  childConnectionTags?: Tag[] | undefined;

  /**
   * <p>The name of the service provider associated with the LAG.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>Indicates whether the connection will support MAC Security (MACsec).</p>
   *          <note>
   *             <p>All connections in the LAG must be capable of  supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites">MACsec prerequisties</a> in the <i>Direct Connect User Guide</i>.</p>
   *          </note>
   * @public
   */
  requestMACSec?: boolean | undefined;
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
 * <p>Information about a link aggregation group (LAG).</p>
 * @public
 */
export interface Lag {
  /**
   * <p>The individual bandwidth of the physical connections bundled by the LAG. The possible
   *       values are 1Gbps, 10Gbps, 100Gbps, or 400 Gbps.. </p>
   * @public
   */
  connectionsBandwidth?: string | undefined;

  /**
   * <p>The number of physical dedicated connections initially provisioned and bundled by the LAG.
   *       You can have a maximum of four connections when the port speed is 1 Gbps or 10 Gbps, or two
   *       when the port speed is 100 Gbps or 400 Gbps.</p>
   * @public
   */
  numberOfConnections?: number | undefined;

  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the LAG.</p>
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * <p>The name of the LAG.</p>
   * @public
   */
  lagName?: string | undefined;

  /**
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
   * @public
   */
  lagState?: LagState | undefined;

  /**
   * <p>The location of the LAG.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the connection is located.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.</p>
   * @public
   */
  minimumLinks?: number | undefined;

  /**
   * <p>The Direct Connect endpoint that hosts the LAG.</p>
   *
   * @deprecated deprecated
   * @public
   */
  awsDevice?: string | undefined;

  /**
   * <p>The Direct Connect endpoint that hosts the LAG.</p>
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * <p>The Direct Connect endpoint that terminates the logical connection. This device might be
   *       different than the device that terminates the physical connection.</p>
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * <p>The connections bundled by the LAG.</p>
   * @public
   */
  connections?: Connection[] | undefined;

  /**
   * <p>Indicates whether the LAG can host other connections.</p>
   * @public
   */
  allowsHostedConnections?: boolean | undefined;

  /**
   * <p>Indicates whether jumbo frames are supported.</p>
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * <p>Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   * @public
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | undefined;

  /**
   * <p>The tags associated with the LAG.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the service provider associated with the LAG.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>Indicates whether the LAG supports MAC Security (MACsec).</p>
   * @public
   */
  macSecCapable?: boolean | undefined;

  /**
   * <p>The LAG MAC Security (MACsec) encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   * @public
   */
  encryptionMode?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) security keys associated with the LAG.</p>
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;
}

/**
 * <p>Information about a private virtual interface.</p>
 * @public
 */
export interface NewPrivateVirtualInterface {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>The valid values are 1-2147483646.</p>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The long ASN for a new private virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.</p>
   * @public
   */
  mtu?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The tags associated with the private virtual interface.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether to enable or disable SiteLink.</p>
   * @public
   */
  enableSiteLink?: boolean | undefined;
}

/**
 * @public
 */
export interface CreatePrivateVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the private virtual interface.</p>
   * @public
   */
  newPrivateVirtualInterface: NewPrivateVirtualInterface | undefined;
}

/**
 * <p>Information about a public virtual interface.</p>
 * @public
 */
export interface NewPublicVirtualInterface {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan: number | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The long ASN for a new public virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.</p>
   * @public
   */
  routeFilterPrefixes?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The tags associated with the public virtual interface.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePublicVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the public virtual interface.</p>
   * @public
   */
  newPublicVirtualInterface: NewPublicVirtualInterface | undefined;
}

/**
 * <p>Information about a transit virtual interface.</p>
 * @public
 */
export interface NewTransitVirtualInterface {
  /**
   * <p>The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).</p>
   * @public
   */
  virtualInterfaceName?: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  vlan?: number | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The long ASN for a new transit virtual interface.The valid range is from 1 to 4294967294 for BGP configuration.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.</p>
   * @public
   */
  mtu?: number | undefined;

  /**
   * <p>The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.</p>
   * @public
   */
  authKey?: string | undefined;

  /**
   * <p>The IP address assigned to the Amazon interface.</p>
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The address family for the BGP peer.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The tags associated with the transitive virtual interface.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether to enable or disable SiteLink.</p>
   * @public
   */
  enableSiteLink?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateTransitVirtualInterfaceRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>Information about the transit virtual interface.</p>
   * @public
   */
  newTransitVirtualInterface: NewTransitVirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateTransitVirtualInterfaceResult {
  /**
   * <p>Information about a virtual interface.</p>
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * @public
 */
export interface DeleteBGPPeerRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use <code>asnLong</code> instead.</p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asn?: number | undefined;

  /**
   * <p>The long ASN for the BGP peer to be deleted from a Direct Connect virtual interface. The valid range is from 1 to 4294967294 for BGP configuration. </p>
   *          <note>
   *             <p>You can use <code>asnLong</code> or <code>asn</code>, but not both. We recommend using <code>asnLong</code> as it supports a greater pool of numbers. </p>
   *             <ul>
   *                <li>
   *                   <p>The <code>asnLong</code> attribute accepts both ASN and long ASN
   *                             ranges.</p>
   *                </li>
   *                <li>
   *                   <p>If you provide a value in the same API call for both <code>asn</code>
   *                             and <code>asnLong</code>, the API will only accept the value for
   *                                 <code>asnLong</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  asnLong?: number | undefined;

  /**
   * <p>The IP address assigned to the customer interface.</p>
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * <p>The ID of the BGP peer.</p>
   * @public
   */
  bgpPeerId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBGPPeerResponse {
  /**
   * <p>The virtual interface.</p>
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayResult {
  /**
   * <p>The Direct Connect gateway.</p>
   * @public
   */
  directConnectGateway?: DirectConnectGateway | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationRequest {
  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   * @public
   */
  associationId?: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationResult {
  /**
   * <p>Information about the deleted association.</p>
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  /**
   * <p>The ID of the proposal.</p>
   * @public
   */
  proposalId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationProposalResult {
  /**
   * <p>The ID of the associated gateway.</p>
   * @public
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal | undefined;
}

/**
 * @public
 */
export interface DeleteInterconnectRequest {
  /**
   * <p>The ID of the interconnect.</p>
   * @public
   */
  interconnectId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInterconnectResponse {
  /**
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
   * @public
   */
  interconnectState?: InterconnectState | undefined;
}

/**
 * @public
 */
export interface DeleteLagRequest {
  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualInterfaceRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualInterfaceResponse {
  /**
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
   *                   <code>testing</code>: A virtual interface is in this state immediately after calling <a>StartBgpFailoverTest</a> and remains in this state during the duration of the test.</p>
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
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
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
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this parameter,
   *       the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * <p>Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>
 * @public
 */
export interface Loa {
  /**
   * <p>The binary contents of the LOA-CFA document.</p>
   * @public
   */
  loaContent?: Uint8Array | undefined;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionLoaResponse {
  /**
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   * @public
   */
  loa?: Loa | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionsRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionsOnInterconnectRequest {
  /**
   * <p>The ID of the interconnect.</p>
   * @public
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
   * <p>The list of customer agreements.</p>
   * @public
   */
  agreements?: CustomerAgreement[] | undefined;

  /**
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
   * @public
   */
  nniPartnerType?: NniPartnerType | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The ID of the proposal.</p>
   * @public
   */
  proposalId?: string | undefined;

  /**
   * <p>The ID of the associated gateway.</p>
   * @public
   */
  associatedGatewayId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  /**
   * <p>Describes the Direct Connect gateway association proposals.</p>
   * @public
   */
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationsRequest {
  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   * @public
   */
  associationId?: string | undefined;

  /**
   * <p>The ID of the associated gateway.</p>
   * @public
   */
  associatedGatewayId?: string | undefined;

  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the virtual private gateway or transit gateway.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[] | undefined;

  /**
   * <p>The token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAttachmentsRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>Information about an attachment between a Direct Connect gateway and a virtual interface.</p>
 * @public
 */
export interface DirectConnectGatewayAttachment {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the virtual interface is located.</p>
   * @public
   */
  virtualInterfaceRegion?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the virtual interface.</p>
   * @public
   */
  virtualInterfaceOwnerAccount?: string | undefined;

  /**
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
   * @public
   */
  attachmentState?: DirectConnectGatewayAttachmentState | undefined;

  /**
   * <p>The type of attachment.</p>
   * @public
   */
  attachmentType?: DirectConnectGatewayAttachmentType | undefined;

  /**
   * <p>The error message if the state of an object failed to advance.</p>
   * @public
   */
  stateChangeError?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAttachmentsResult {
  /**
   * <p>The attachments.</p>
   * @public
   */
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[] | undefined;

  /**
   * <p>The token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewaysRequest {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token provided in the previous call to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewaysResult {
  /**
   * <p>The Direct Connect gateways.</p>
   * @public
   */
  directConnectGateways?: DirectConnectGateway[] | undefined;

  /**
   * <p>The token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostedConnectionsRequest {
  /**
   * <p>The ID of the interconnect or LAG.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInterconnectLoaRequest {
  /**
   * <p>The ID of the interconnect.</p>
   * @public
   */
  interconnectId: string | undefined;

  /**
   * <p>The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * @public
 */
export interface DescribeInterconnectLoaResponse {
  /**
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   * @public
   */
  loa?: Loa | undefined;
}

/**
 * @public
 */
export interface DescribeInterconnectsRequest {
  /**
   * <p>The ID of the interconnect.</p>
   * @public
   */
  interconnectId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface Interconnects {
  /**
   * <p>The interconnects.</p>
   * @public
   */
  interconnects?: Interconnect[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLagsRequest {
  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface Lags {
  /**
   * <p>The LAGs.</p>
   * @public
   */
  lags?: Lag[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLoaRequest {
  /**
   * <p>The ID of a connection, LAG, or interconnect.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The name of the service provider who establishes connectivity on your behalf. If you specify this parameter, the
   *       LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * <p>Information about an Direct Connect location.</p>
 * @public
 */
export interface Location {
  /**
   * <p>The code for the location.</p>
   * @public
   */
  locationCode?: string | undefined;

  /**
   * <p>The name of the location. This includes the name of the colocation partner and the physical site of the building.</p>
   * @public
   */
  locationName?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the location.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The available port speeds for the location.</p>
   * @public
   */
  availablePortSpeeds?: string[] | undefined;

  /**
   * <p>The name of the service provider for the location.</p>
   * @public
   */
  availableProviders?: string[] | undefined;

  /**
   * <p>The available MAC Security (MACsec) port speeds for the location.</p>
   * @public
   */
  availableMacSecPortSpeeds?: string[] | undefined;
}

/**
 * @public
 */
export interface Locations {
  /**
   * <p>The locations.</p>
   * @public
   */
  locations?: Location[] | undefined;
}

/**
 * <p>Provides the details about a virtual interface's router.</p>
 * @public
 */
export interface DescribeRouterConfigurationRequest {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.</p>
   * @public
   */
  routerTypeIdentifier?: string | undefined;
}

/**
 * <p>Information about the virtual router.</p>
 * @public
 */
export interface RouterType {
  /**
   * <p>The vendor for the virtual interface's router.</p>
   * @public
   */
  vendor?: string | undefined;

  /**
   * <p>The virtual interface router platform.</p>
   * @public
   */
  platform?: string | undefined;

  /**
   * <p>The router software. </p>
   * @public
   */
  software?: string | undefined;

  /**
   * <p>The template for the virtual interface's router.</p>
   * @public
   */
  xsltTemplateName?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) template for the virtual interface's router.</p>
   * @public
   */
  xsltTemplateNameForMacSec?: string | undefined;

  /**
   * <p>Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.</p>
   * @public
   */
  routerTypeIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouterConfigurationResponse {
  /**
   * <p>The customer router configuration.</p>
   * @public
   */
  customerRouterConfig?: string | undefined;

  /**
   * <p>The details about the router.</p>
   * @public
   */
  router?: RouterType | undefined;

  /**
   * <p>The ID assigned to the virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>Provides the details about a virtual interface's router.</p>
   * @public
   */
  virtualInterfaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   * @public
   */
  resourceArns: string[] | undefined;
}

/**
 * <p>Information about a tag associated with an Direct Connect resource.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * <p>Information about a virtual private gateway for a private virtual interface.</p>
 * @public
 */
export interface VirtualGateway {
  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
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
   * @public
   */
  virtualGatewayState?: string | undefined;
}

/**
 * @public
 */
export interface VirtualGateways {
  /**
   * <p>The virtual private gateways.</p>
   * @public
   */
  virtualGateways?: VirtualGateway[] | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualInterfacesRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface VirtualInterfaces {
  /**
   * <p>The virtual interfaces</p>
   * @public
   */
  virtualInterfaces?: VirtualInterface[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectionFromLagRequest {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMacSecKeyRequest {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).</p>
   *          <p>You can use <a>DescribeConnections</a>, <a>DescribeInterconnects</a>, or <a>DescribeLags</a> to retrieve connection ID.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.</p>
   *          <p>You can use <a>DescribeConnections</a> to retrieve the ARN of the MAC Security (MACsec) secret key.</p>
   * @public
   */
  secretARN: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMacSecKeyResponse {
  /**
   * <p>The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).</p>
   * @public
   */
  connectionId?: string | undefined;

  /**
   * <p>The MAC Security (MACsec) security keys no longer associated with the connection.</p>
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;
}

/**
 * @public
 */
export interface ListVirtualInterfaceTestHistoryRequest {
  /**
   * <p>The ID of the virtual interface failover test.</p>
   * @public
   */
  testId?: string | undefined;

  /**
   * <p>The ID of the virtual interface that was tested.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>The BGP peers that were placed in the DOWN state during the virtual interface failover test.</p>
   * @public
   */
  bgpPeers?: string[] | undefined;

  /**
   * <p>The status of the virtual interface failover test.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the virtual interface failover test.</p>
 * @public
 */
export interface VirtualInterfaceTestHistory {
  /**
   * <p>The ID of the virtual interface failover test.</p>
   * @public
   */
  testId?: string | undefined;

  /**
   * <p>The ID of the tested virtual interface.</p>
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * <p>The BGP peers that were put in the DOWN state as part of the virtual interface failover test.</p>
   * @public
   */
  bgpPeers?: string[] | undefined;

  /**
   * <p>The status of the virtual interface failover test.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The owner ID of the tested virtual interface.</p>
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * <p>The time that the virtual interface failover test ran in minutes.</p>
   * @public
   */
  testDurationInMinutes?: number | undefined;

  /**
   * <p>The time that the virtual interface moves to the DOWN state.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time that the virtual interface moves out of the DOWN state.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualInterfaceTestHistoryResponse {
  /**
   * <p>The ID of the tested virtual interface.</p>
   * @public
   */
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartBgpFailoverTestRequest {
  /**
   * <p>The ID of the virtual interface you want to test.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The BGP peers to place in the DOWN state.</p>
   * @public
   */
  bgpPeers?: string[] | undefined;

  /**
   * <p>The time in minutes that the virtual interface failover test will last.</p>
   *          <p>Maximum value: 4,320 minutes (72 hours).</p>
   *          <p>Default: 180 minutes (3 hours).</p>
   * @public
   */
  testDurationInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface StartBgpFailoverTestResponse {
  /**
   * <p>Information about the virtual interface failover test.</p>
   * @public
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory | undefined;
}

/**
 * @public
 */
export interface StopBgpFailoverTestRequest {
  /**
   * <p>The ID of the virtual interface you no longer want to test.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface StopBgpFailoverTestResponse {
  /**
   * <p>Information about the virtual interface failover test.</p>
   * @public
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove.</p>
   * @public
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
   * <p>The ID of the connection.</p>
   *          <p>You can use <a>DescribeConnections</a> to retrieve the connection ID.</p>
   * @public
   */
  connectionId: string | undefined;

  /**
   * <p>The name of the connection.</p>
   * @public
   */
  connectionName?: string | undefined;

  /**
   * <p>The connection MAC Security (MACsec) encryption mode.</p>
   *          <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>
   * @public
   */
  encryptionMode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayRequest {
  /**
   * <p>The ID of the Direct Connect gateway to update.</p>
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * <p>The new name for the Direct Connect gateway.</p>
   * @public
   */
  newDirectConnectGatewayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayResponse {
  /**
   * <p>Informaiton about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateways or transit gateways.</p>
   * @public
   */
  directConnectGateway?: DirectConnectGateway | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAssociationRequest {
  /**
   * <p>The ID of the Direct Connect gateway association.</p>
   * @public
   */
  associationId?: string | undefined;

  /**
   * <p>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</p>
   * @public
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * <p>The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.</p>
   * @public
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAssociationResult {
  /**
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface UpdateLagRequest {
  /**
   * <p>The ID of the LAG.</p>
   * @public
   */
  lagId: string | undefined;

  /**
   * <p>The name of the LAG.</p>
   * @public
   */
  lagName?: string | undefined;

  /**
   * <p>The minimum number of physical connections that must be operational for the LAG itself to be operational.</p>
   * @public
   */
  minimumLinks?: number | undefined;

  /**
   * <p>The LAG MAC Security (MACsec) encryption mode.</p>
   *          <p>Amazon Web Services applies the value to all connections which are part of the LAG.</p>
   * @public
   */
  encryptionMode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVirtualInterfaceAttributesRequest {
  /**
   * <p>The ID of the virtual private interface.</p>
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * <p>The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.</p>
   * @public
   */
  mtu?: number | undefined;

  /**
   * <p>Indicates whether to enable or disable SiteLink.</p>
   * @public
   */
  enableSiteLink?: boolean | undefined;

  /**
   * <p>The name of the virtual private interface.</p>
   * @public
   */
  virtualInterfaceName?: string | undefined;
}
