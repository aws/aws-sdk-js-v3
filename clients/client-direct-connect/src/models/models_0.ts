// smithy-typescript generated code
import type {
  AddressFamily,
  AsPathType,
  BGPPeerState,
  BGPStatus,
  BillingMode,
  ConnectionState,
  DirectConnectGatewayAssociationProposalState,
  DirectConnectGatewayAssociationState,
  DirectConnectGatewayAttachmentState,
  DirectConnectGatewayAttachmentType,
  DirectConnectGatewayState,
  GatewayType,
  HasLogicalRedundancy,
  InterconnectState,
  LagState,
  LoaContentType,
  NniPartnerType,
  RequestBillingMode,
  ResiliencyGroupAssociationState,
  ResiliencyGroupState,
  ResiliencyGroupType,
  ResiliencyModel,
  RouteDirection,
  VirtualInterfaceState,
} from "./enums";

/**
 * Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
 *
 * @public
 */
export interface RouteFilterPrefix {
  /**
   * The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.
   *
   * @public
   */
  cidr?: string | undefined;
}

/**
 * @public
 */
export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * The ID of the request proposal.
   *
   * @public
   */
  proposalId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the virtual private gateway or transit gateway.
   *
   * @public
   */
  associatedGatewayOwnerAccount: string | undefined;

  /**
   * Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway.
   *
   * For information about how to set the prefixes, see [Allowed Prefixes](https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes) in the *Direct Connect User Guide*.
   *
   * @public
   */
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
}

/**
 * The Amazon Web Services Cloud WAN core network that the Direct Connect gateway is associated to. This is only returned when a Direct Connect gateway is associated to a Cloud WAN core network.
 *
 * @public
 */
export interface AssociatedCoreNetwork {
  /**
   * The ID of the Cloud WAN core network that the Direct Connect gateway is associated to.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The account owner of the Cloud WAN core network.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * the ID of the Direct Connect gateway attachment.
   *
   * @public
   */
  attachmentId?: string | undefined;
}

/**
 * Information about the associated gateway.
 *
 * @public
 */
export interface AssociatedGateway {
  /**
   * The ID of the associated gateway.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of associated gateway.
   *
   * @public
   */
  type?: GatewayType | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the associated virtual private gateway or transit gateway.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The Region where the associated gateway is located.
   *
   * @public
   */
  region?: string | undefined;
}

/**
 * Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
 *
 * @public
 */
export interface DirectConnectGatewayAssociation {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the associated gateway.
   *
   * @public
   */
  directConnectGatewayOwnerAccount?: string | undefined;

  /**
   * The state of the association. The following are the possible values:
   *
   * - `associating`: The initial state after calling CreateDirectConnectGatewayAssociation.
   * - `associated`: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic.
   * - `disassociating`: The initial state after calling DeleteDirectConnectGatewayAssociation.
   * - `disassociated`: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.
   * - `updating`: The CIDR blocks for the virtual private gateway or transit gateway are currently being updated. This could be new CIDR blocks added or current CIDR blocks removed.
   *
   * @public
   */
  associationState?: DirectConnectGatewayAssociationState | undefined;

  /**
   * The error message if the state of an object failed to advance.
   *
   * @public
   */
  stateChangeError?: string | undefined;

  /**
   * Information about the associated gateway.
   *
   * @public
   */
  associatedGateway?: AssociatedGateway | undefined;

  /**
   * The ID of the Direct Connect gateway association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The Amazon VPC prefixes to advertise to the Direct Connect gateway.
   *
   * @public
   */
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * The ID of the Cloud WAN core network associated with the Direct Connect gateway attachment.
   *
   * @public
   */
  associatedCoreNetwork?: AssociatedCoreNetwork | undefined;

  /**
   * The ID of the virtual private gateway. Applies only to private virtual interfaces.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * The Amazon Web Services Region where the virtual private gateway is located.
   *
   * @deprecated deprecated.
   * @public
   */
  virtualGatewayRegion?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the virtual private gateway.
   *
   * @public
   */
  virtualGatewayOwnerAccount?: string | undefined;
}

/**
 * @public
 */
export interface AcceptDirectConnectGatewayAssociationProposalResult {
  /**
   * Information about an association between a Direct Connect gateway and a virtual gateway or transit gateway.
   *
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * The name and status of a customer agreement.
 *
 * @public
 */
export interface CustomerAgreement {
  /**
   * The name of the agreement.
   *
   * @public
   */
  agreementName?: string | undefined;

  /**
   * The status of the customer agreement. This will be either `signed` or `unsigned`
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface AllocateConnectionOnInterconnectRequest {
  /**
   * The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The name of the provisioned connection.
   *
   * @public
   */
  connectionName: string | undefined;

  /**
   * The ID of the Amazon Web Services account of the customer for whom the connection will be provisioned.
   *
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * The ID of the interconnect on which the connection will be provisioned.
   *
   * @public
   */
  interconnectId: string | undefined;

  /**
   * The dedicated VLAN provisioned to the connection.
   *
   * @public
   */
  vlan: number | undefined;
}

/**
 * Information about the MAC Security (MACsec) secret key.
 *
 * @public
 */
export interface MacSecKey {
  /**
   * The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.
   *
   * @public
   */
  secretARN?: string | undefined;

  /**
   * The Connection Key Name (CKN) for the MAC Security secret key.
   *
   * @public
   */
  ckn?: string | undefined;

  /**
   * The state of the MAC Security (MACsec) secret key.
   *
   * The possible values are:
   *
   * - `associating`: The MAC Security (MACsec) secret key is being validated and not yet associated with the connection or LAG.
   * - `associated`: The MAC Security (MACsec) secret key is validated and associated with the connection or LAG.
   * - `disassociating`: The MAC Security (MACsec) secret key is being disassociated from the connection or LAG
   * - `disassociated`: The MAC Security (MACsec) secret key is no longer associated with the connection or LAG.
   *
   * @public
   */
  state?: string | undefined;

  /**
   * The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC format.
   *
   * @public
   */
  startOn?: string | undefined;
}

/**
 * Contains information about the rate limiter status for a connection, including the maximum number of rate limiters allowed, the number currently in use, and the remaining capacity.
 *
 * @public
 */
export interface RateLimiterStatus {
  /**
   * The maximum number of rate limiters allowed on the connection.
   *
   * @public
   */
  maxAllowed?: number | undefined;

  /**
   * The number of rate limiters currently in use on the connection.
   *
   * @public
   */
  inUse?: number | undefined;

  /**
   * The number of rate limiters remaining (available) on the connection.
   *
   * @public
   */
  remaining?: number | undefined;

  /**
   * The total bandwidth allocated across all rate limiters on the connection.
   *
   * @public
   */
  totalBandwidth?: string | undefined;
}

/**
 * Information about a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Information about an Direct Connect connection.
 *
 * @public
 */
export interface Connection {
  /**
   * The ID of the Amazon Web Services account that owns the connection.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The name of the connection.
   *
   * @public
   */
  connectionName?: string | undefined;

  /**
   * The state of the connection. The following are the possible values:
   *
   * - `ordering`: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.
   * - `requested`: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.
   * - `pending`: The connection has been approved and is being initialized.
   * - `available`: The network link is up and the connection is ready for use.
   * - `down`: The network link is down.
   * - `deleting`: The connection is being deleted.
   * - `deleted`: The connection has been deleted.
   * - `rejected`: A hosted connection in the `ordering` state enters the `rejected` state if it is deleted by the customer.
   * - `unknown`: The state of the connection is not available.
   *
   * @public
   */
  connectionState?: ConnectionState | undefined;

  /**
   * The Amazon Web Services Region where the connection is located.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The location of the connection.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The bandwidth of the connection.
   *
   * @public
   */
  bandwidth?: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan?: number | undefined;

  /**
   * The name of the Direct Connect service provider associated with the connection.
   *
   * @public
   */
  partnerName?: string | undefined;

  /**
   * The time of the most recent call to DescribeLoa for this connection.
   *
   * @public
   */
  loaIssueTime?: Date | undefined;

  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId?: string | undefined;

  /**
   * The Direct Connect endpoint on which the physical connection terminates.
   *
   * @deprecated deprecated.
   * @public
   */
  awsDevice?: string | undefined;

  /**
   * Indicates whether jumbo frames are supported.
   *
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * The Direct Connect endpoint that terminates the physical connection.
   *
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
   *
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).
   *
   * @public
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | undefined;

  /**
   * The tags associated with the connection.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the service provider associated with the connection.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * Indicates whether the connection supports MAC Security (MACsec).
   *
   * @public
   */
  macSecCapable?: boolean | undefined;

  /**
   * The MAC Security (MACsec) port link status of the connection.
   *
   * The valid values are `Encryption Up`, which means that there is an active Connection Key Name, or `Encryption Down`.
   *
   * @public
   */
  portEncryptionStatus?: string | undefined;

  /**
   * The MAC Security (MACsec) connection encryption mode.
   *
   * The valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`.
   *
   * @public
   */
  encryptionMode?: string | undefined;

  /**
   * The MAC Security (MACsec) security keys associated with the connection.
   *
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;

  /**
   * The rate limiter status for the connection, including how many rate limiters are in use and the maximum allowed.
   *
   * @public
   */
  rateLimiterStatus?: RateLimiterStatus | undefined;

  /**
   * Indicates whether the interconnect hosting this connection supports MAC Security (MACsec).
   *
   * @public
   */
  partnerInterconnectMacSecCapable?: boolean | undefined;

  /**
   * The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces on the connection. Not applicable to hosted connections or interconnects.
   *
   * @public
   */
  prefixPoolSizeIpv4?: number | undefined;

  /**
   * The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces on the connection. Not applicable to hosted connections or interconnects.
   *
   * @public
   */
  prefixPoolSizeIpv6?: number | undefined;

  /**
   * The number of inbound IPv4 route prefixes in the connection prefix pool not yet allocated to a virtual interface. Not applicable to hosted connections or interconnects.
   *
   * @public
   */
  prefixPoolUnallocatedCountIpv4?: number | undefined;

  /**
   * The number of inbound IPv6 route prefixes in the connection prefix pool not yet allocated to a virtual interface. Not applicable to hosted connections or interconnects.
   *
   * @public
   */
  prefixPoolUnallocatedCountIpv6?: number | undefined;

  /**
   * The billing mode of the connection.
   *
   * @public
   */
  billingMode?: BillingMode | undefined;
}

/**
 * @public
 */
export interface AllocateHostedConnectionRequest {
  /**
   * The ID of the interconnect or LAG.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The ID of the Amazon Web Services account ID of the customer for the connection.
   *
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps, and 25Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps, 10Gbps, or 25Gbps hosted connection.
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The name of the hosted connection.
   *
   * @public
   */
  connectionName: string | undefined;

  /**
   * The dedicated VLAN provisioned to the hosted connection.
   *
   * @public
   */
  vlan: number | undefined;

  /**
   * The tags associated with the connection.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Information about a private virtual interface to be provisioned on a connection.
 *
 * @public
 */
export interface NewPrivateVirtualInterfaceAllocation {
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   *
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan: number | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * The valid values are 1-2147483646.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The ASN when allocating a new private virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.
   *
   * @public
   */
  mtu?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The tags associated with the private virtual interface.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
   *
   * @public
   */
  rateLimit?: string | undefined;
}

/**
 * @public
 */
export interface AllocatePrivateVirtualInterfaceRequest {
  /**
   * The ID of the connection on which the private virtual interface is provisioned.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the virtual private interface.
   *
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * Information about the private virtual interface.
   *
   * @public
   */
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation | undefined;
}

/**
 * Information about a BGP peer.
 *
 * @public
 */
export interface BGPPeer {
  /**
   * The ID of the BGP peer.
   *
   * @public
   */
  bgpPeerId?: string | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The long ASN for the BGP peer. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The state of the BGP peer. The following are the possible values:
   *
   * - `verifying`: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces.
   * - `pending`: The BGP peer is created, and remains in this state until it is ready to be established.
   * - `available`: The BGP peer is ready to be established.
   * - `deleting`: The BGP peer is being deleted.
   * - `deleted`: The BGP peer is deleted and cannot be established.
   *
   * @public
   */
  bgpPeerState?: BGPPeerState | undefined;

  /**
   * The status of the BGP peer. The following are the possible values:
   *
   * - `up`: The BGP peer is established. This state does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session.
   * - `down`: The BGP peer is down.
   * - `unknown`: The BGP peer status is not available.
   *
   * @public
   */
  bgpStatus?: BGPStatus | undefined;

  /**
   * The Direct Connect endpoint that terminates the BGP peer.
   *
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
   *
   * @public
   */
  awsLogicalDeviceId?: string | undefined;
}

/**
 * Information about a virtual interface.
 *
 * @public
 */
export interface VirtualInterface {
  /**
   * The ID of the Amazon Web Services account that owns the virtual interface.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The location of the connection.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The type of virtual interface. The possible values are `private`, `public` and `transit`.
   *
   * @public
   */
  virtualInterfaceType?: string | undefined;

  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   *
   * @public
   */
  virtualInterfaceName?: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan?: number | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The long ASN for the virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The autonomous system number (AS) for the Amazon side of the connection.
   *
   * @public
   */
  amazonSideAsn?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The state of the virtual interface. The following are the possible values:
   *
   * - `confirming`: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.
   * - `verifying`: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
   * - `pending`: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.
   * - `available`: A virtual interface that is able to forward traffic.
   * - `down`: A virtual interface that is BGP down.
   * - `testing`: A virtual interface is in this state immediately after calling StartBgpFailoverTest and remains in this state during the duration of the test.
   * - `deleting`: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.
   * - `deleted`: A virtual interface that cannot forward traffic.
   * - `rejected`: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the `Confirming` state is deleted by the virtual interface owner, the virtual interface enters the `Rejected` state.
   * - `unknown`: The state of the virtual interface is not available.
   *
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;

  /**
   * The customer router configuration.
   *
   * @public
   */
  customerRouterConfig?: string | undefined;

  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500
   *
   * @public
   */
  mtu?: number | undefined;

  /**
   * Indicates whether jumbo frames are supported.
   *
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * The ID of the virtual private gateway. Applies only to private virtual interfaces.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.
   *
   * @public
   */
  routeFilterPrefixes?: RouteFilterPrefix[] | undefined;

  /**
   * The BGP peers configured on this virtual interface.
   *
   * @public
   */
  bgpPeers?: BGPPeer[] | undefined;

  /**
   * The Amazon Web Services Region where the virtual interface is located.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The Direct Connect endpoint that terminates the physical connection.
   *
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
   *
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * The tags associated with the virtual interface.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Indicates whether SiteLink is enabled.
   *
   * @public
   */
  siteLinkEnabled?: boolean | undefined;

  /**
   * The number of inbound IPv4 route prefixes allocated to the virtual interface. Not applicable to public virtual interfaces.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv4?: number | undefined;

  /**
   * The number of inbound IPv6 route prefixes allocated to the virtual interface. Not applicable to public virtual interfaces.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv6?: number | undefined;

  /**
   * The rate limit (bandwidth allocation) applied to the virtual interface. The value must be one of the supported bandwidth values and cannot exceed the bandwidth of the parent connection or LAG. Supported values: `50Mbps`, `100Mbps`, `200Mbps`, `300Mbps`, `400Mbps`, `500Mbps`, `600Mbps`, `700Mbps`, `800Mbps`, `900Mbps`, `1Gbps`, `1.2Gbps`, `1.5Gbps`, `1.8Gbps`, `2Gbps`, `2.1Gbps`, `2.4Gbps`, `2.7Gbps`, `3Gbps`, `3.2Gbps`, `3.6Gbps`, `4Gbps`, `5Gbps`, `6Gbps`, `7Gbps`, `8Gbps`, `9Gbps`, `10Gbps`, `12Gbps`, `15Gbps`, `18Gbps`, `20Gbps`, `21Gbps`, `24Gbps`, `27Gbps`, `30Gbps`, `32Gbps`, `36Gbps`, `40Gbps`, `50Gbps`, `60Gbps`, `70Gbps`, `80Gbps`, `100Gbps`, `120Gbps`, `150Gbps`, `180Gbps`, `200Gbps`, `210Gbps`, `240Gbps`, `270Gbps`, `300Gbps`, `320Gbps`, `360Gbps`, `400Gbps`, `450Gbps`, `480Gbps`, `500Gbps`, `540Gbps`, `600Gbps`, `700Gbps`, `800Gbps`, `900Gbps`, `1Tbps`, `1.1Tbps`, `1.2Tbps`, `1.3Tbps`, `1.4Tbps`, `1.5Tbps`, `1.6Tbps`.
   *
   * @public
   */
  rateLimit?: string | undefined;
}

/**
 * Information about a public virtual interface to be provisioned on a connection.
 *
 * @public
 */
export interface NewPublicVirtualInterfaceAllocation {
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   *
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan: number | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * The valid values are 1-2147483646.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The ASN when allocating a new public virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.
   *
   * @public
   */
  routeFilterPrefixes?: RouteFilterPrefix[] | undefined;

  /**
   * The tags associated with the public virtual interface.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
   *
   * @public
   */
  rateLimit?: string | undefined;
}

/**
 * @public
 */
export interface AllocatePublicVirtualInterfaceRequest {
  /**
   * The ID of the connection on which the public virtual interface is provisioned.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the public virtual interface.
   *
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * Information about the public virtual interface.
   *
   * @public
   */
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation | undefined;
}

/**
 * Information about a transit virtual interface to be provisioned on a connection.
 *
 * @public
 */
export interface NewTransitVirtualInterfaceAllocation {
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   *
   * @public
   */
  virtualInterfaceName?: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan?: number | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * The valid values are 1-2147483646.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The ASN when allocating a new transit virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500
   *
   * @public
   */
  mtu?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The tags associated with the transitive virtual interface.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
   *
   * @public
   */
  rateLimit?: string | undefined;
}

/**
 * @public
 */
export interface AllocateTransitVirtualInterfaceRequest {
  /**
   * The ID of the connection on which the transit virtual interface is provisioned.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the transit virtual interface.
   *
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * Information about the transit virtual interface.
   *
   * @public
   */
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation | undefined;
}

/**
 * @public
 */
export interface AllocateTransitVirtualInterfaceResult {
  /**
   * Information about the transit virtual interface.
   *
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * A segment of an autonomous system (AS) path.
 *
 * @public
 */
export interface AsPathSegment {
  /**
   * The type of the AS path segment.
   *
   * The valid values are `seq` (an ordered `AS_SEQUENCE`) and `set` (an unordered `AS_SET`).
   *
   * @public
   */
  pathType?: AsPathType | undefined;

  /**
   * The autonomous system (AS) numbers in the segment.
   *
   * @public
   */
  path?: number[] | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionsToResiliencyGroupRequest {
  /**
   * The IDs or ARNs of the connections to associate with the resiliency group.
   *
   * @public
   */
  connectionIdentifiers: string[] | undefined;

  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Information about an association between a connection and a resiliency group.
 *
 * @public
 */
export interface ResiliencyGroupAssociation {
  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated connection.
   *
   * @public
   */
  connectionArn?: string | undefined;

  /**
   * The state of the association. The valid values are `associating`, `associated`, `disassociating`, and `disassociated`.
   *
   * @public
   */
  state?: ResiliencyGroupAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionsToResiliencyGroupResult {
  /**
   * The connection associations for the resiliency group.
   *
   * @public
   */
  resiliencyGroupAssociations?: ResiliencyGroupAssociation[] | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionWithLagRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The ID of the LAG with which to associate the connection.
   *
   * @public
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface AssociateHostedConnectionRequest {
  /**
   * The ID of the hosted connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The ID of the interconnect or the LAG.
   *
   * @public
   */
  parentConnectionId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMacSecKeyRequest {
  /**
   * The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).
   *
   * You can use DescribeConnections, DescribeInterconnects, or DescribeLags to retrieve connection ID.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the connection.
   *
   * You can use DescribeConnections or DescribeLags to retrieve the MAC Security (MACsec) secret key.
   *
   * If you use this request parameter, you do not use the `ckn` and `cak` request parameters.
   *
   * @public
   */
  secretARN?: string | undefined;

  /**
   * The MAC Security (MACsec) CKN to associate with the connection.
   *
   * You can create the CKN/CAK pair using an industry standard tool.
   *
   * The valid values are 64 hexadecimal characters (0-9, A-E).
   *
   * If you use this request parameter, you must use the `cak` request parameter and not use the `secretARN` request parameter.
   *
   * @public
   */
  ckn?: string | undefined;

  /**
   * The MAC Security (MACsec) CAK to associate with the connection.
   *
   * You can create the CKN/CAK pair using an industry standard tool.
   *
   * The valid values are 64 hexadecimal characters (0-9, A-E).
   *
   * If you use this request parameter, you must use the `ckn` request parameter and not use the `secretARN` request parameter.
   *
   * @public
   */
  cak?: string | undefined;
}

/**
 * @public
 */
export interface AssociateMacSecKeyResponse {
  /**
   * The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The MAC Security (MACsec) security keys associated with the connection.
   *
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;
}

/**
 * @public
 */
export interface AssociateVirtualInterfaceRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * The ID of the LAG or connection.
   *
   * @public
   */
  connectionId: string | undefined;
}

/**
 * Information about a billing mode available at an Direct Connect location.
 *
 * @public
 */
export interface AvailableBillingMode {
  /**
   * The billing mode.
   *
   * @public
   */
  billingMode?: BillingMode | undefined;

  /**
   * The port speeds available for the billing mode.
   *
   * @public
   */
  availablePortSpeeds?: string[] | undefined;

  /**
   * The Amazon Web Services Regions included with the billing mode.
   *
   * @public
   */
  includedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ConfirmConnectionRequest {
  /**
   * The ID of the hosted connection.
   *
   * @public
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmConnectionResponse {
  /**
   * The state of the connection. The following are the possible values:
   *
   * - `ordering`: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.
   * - `requested`: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.
   * - `pending`: The connection has been approved and is being initialized.
   * - `available`: The network link is up and the connection is ready for use.
   * - `down`: The network link is down.
   * - `deleting`: The connection is being deleted.
   * - `deleted`: The connection has been deleted.
   * - `rejected`: A hosted connection in the `ordering` state enters the `rejected` state if it is deleted by the customer.
   * - `unknown`: The state of the connection is not available.
   *
   * @public
   */
  connectionState?: ConnectionState | undefined;
}

/**
 * @public
 */
export interface ConfirmCustomerAgreementRequest {
  /**
   * The name of the customer agreement.
   *
   * @public
   */
  agreementName?: string | undefined;
}

/**
 * @public
 */
export interface ConfirmCustomerAgreementResponse {
  /**
   * The status of the customer agreement when the connection was created. This will be either `signed` or `unsigned`.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface ConfirmPrivateVirtualInterfaceRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface ConfirmPrivateVirtualInterfaceResponse {
  /**
   * The state of the virtual interface. The following are the possible values:
   *
   * - `confirming`: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.
   * - `verifying`: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
   * - `pending`: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.
   * - `available`: A virtual interface that is able to forward traffic.
   * - `down`: A virtual interface that is BGP down.
   * - `testing`: A virtual interface is in this state immediately after calling StartBgpFailoverTest and remains in this state during the duration of the test.
   * - `deleting`: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.
   * - `deleted`: A virtual interface that cannot forward traffic.
   * - `rejected`: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the `Confirming` state is deleted by the virtual interface owner, the virtual interface enters the `Rejected` state.
   * - `unknown`: The state of the virtual interface is not available.
   *
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
}

/**
 * @public
 */
export interface ConfirmPublicVirtualInterfaceRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmPublicVirtualInterfaceResponse {
  /**
   * The state of the virtual interface. The following are the possible values:
   *
   * - `confirming`: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.
   * - `verifying`: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
   * - `pending`: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.
   * - `available`: A virtual interface that is able to forward traffic.
   * - `down`: A virtual interface that is BGP down.
   * - `testing`: A virtual interface is in this state immediately after calling StartBgpFailoverTest and remains in this state during the duration of the test.
   * - `deleting`: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.
   * - `deleted`: A virtual interface that cannot forward traffic.
   * - `rejected`: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the `Confirming` state is deleted by the virtual interface owner, the virtual interface enters the `Rejected` state.
   * - `unknown`: The state of the virtual interface is not available.
   *
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
}

/**
 * @public
 */
export interface ConfirmTransitVirtualInterfaceRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId: string | undefined;
}

/**
 * @public
 */
export interface ConfirmTransitVirtualInterfaceResponse {
  /**
   * The state of the virtual interface. The following are the possible values:
   *
   * - `confirming`: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.
   * - `verifying`: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
   * - `pending`: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.
   * - `available`: A virtual interface that is able to forward traffic.
   * - `down`: A virtual interface that is BGP down.
   * - `testing`: A virtual interface is in this state immediately after calling StartBgpFailoverTest and remains in this state during the duration of the test.
   * - `deleting`: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.
   * - `deleted`: A virtual interface that cannot forward traffic.
   * - `rejected`: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the `Confirming` state is deleted by the virtual interface owner, the virtual interface enters the `Rejected` state.
   * - `unknown`: The state of the virtual interface is not available.
   *
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
}

/**
 * @public
 */
export interface Connections {
  /**
   * The connections.
   *
   * @public
   */
  connections?: Connection[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a new BGP peer.
 *
 * @public
 */
export interface NewBGPPeer {
  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The long ASN for a new BGP peer. The valid range is from 1 to 4294967294.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;
}

/**
 * @public
 */
export interface CreateBGPPeerRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * Information about the BGP peer.
   *
   * @public
   */
  newBGPPeer?: NewBGPPeer | undefined;
}

/**
 * @public
 */
export interface CreateBGPPeerResponse {
  /**
   * The virtual interface.
   *
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * The location of the connection.
   *
   * @public
   */
  location: string | undefined;

  /**
   * The bandwidth of the connection.
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The name of the connection.
   *
   * @public
   */
  connectionName: string | undefined;

  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId?: string | undefined;

  /**
   * The tags to associate with the lag.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the service provider associated with the requested connection.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * Indicates whether you want the connection to support MAC Security (MACsec).
   *
   * MAC Security (MACsec) is unavailable on hosted connections. For information about MAC Security (MACsec) prerequisites, see [MAC Security in Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/MACSec.html) in the *Direct Connect User Guide*.
   *
   * @public
   */
  requestMACSec?: boolean | undefined;

  /**
   * The billing mode for the connection.
   *
   * @public
   */
  billingMode?: RequestBillingMode | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayRequest {
  /**
   * The name of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayName: string | undefined;

  /**
   * The key-value pair tags associated with the request.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.
   *
   * @public
   */
  amazonSideAsn?: number | undefined;
}

/**
 * Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.
 *
 * @public
 */
export interface DirectConnectGateway {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The name of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayName?: string | undefined;

  /**
   * The autonomous system number (AS) for the Amazon side of the connection.
   *
   * @public
   */
  amazonSideAsn?: number | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Direct Connect gateway.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The state of the Direct Connect gateway. The following are the possible values:
   *
   * - `pending`: The initial state after calling CreateDirectConnectGateway.
   * - `available`: The Direct Connect gateway is ready for use.
   * - `deleting`: The initial state after calling DeleteDirectConnectGateway.
   * - `deleted`: The Direct Connect gateway is deleted and cannot pass traffic.
   *
   * @public
   */
  directConnectGatewayState?: DirectConnectGatewayState | undefined;

  /**
   * The error message if the state of an object failed to advance.
   *
   * @public
   */
  stateChangeError?: string | undefined;

  /**
   * The total number of inbound route prefixes allocated to the attachments on the Direct Connect gateway. The count combines the IPv4 and IPv6 address families.
   *
   * @public
   */
  totalPrefixPoolAllocations?: number | undefined;

  /**
   * Information about a tag.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayResult {
  /**
   * The Direct Connect gateway.
   *
   * @public
   */
  directConnectGateway?: DirectConnectGateway | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationRequest {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * The ID of the virtual private gateway or transit gateway.
   *
   * @public
   */
  gatewayId?: string | undefined;

  /**
   * The Amazon VPC prefixes to advertise to the Direct Connect gateway
   *
   * This parameter is required when you create an association to a transit gateway.
   *
   * For information about how to set the prefixes, see [Allowed Prefixes](https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes) in the *Direct Connect User Guide*.
   *
   * @public
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationResult {
  /**
   * The association to be created.
   *
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationProposalRequest {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayOwnerAccount: string | undefined;

  /**
   * The ID of the virtual private gateway or transit gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The Amazon VPC prefixes to advertise to the Direct Connect gateway.
   *
   * @public
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.
   *
   * @public
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
}

/**
 * Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway.
 *
 * @public
 */
export interface DirectConnectGatewayAssociationProposal {
  /**
   * The ID of the association proposal.
   *
   * @public
   */
  proposalId?: string | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayOwnerAccount?: string | undefined;

  /**
   * The state of the proposal. The following are possible values:
   *
   * - `accepted`: The proposal has been accepted. The Direct Connect gateway association is available to use in this state.
   * - `deleted`: The proposal has been deleted by the owner that made the proposal. The Direct Connect gateway association cannot be used in this state.
   * - `requested`: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.
   *
   * @public
   */
  proposalState?: DirectConnectGatewayAssociationProposalState | undefined;

  /**
   * Information about the associated gateway.
   *
   * @public
   */
  associatedGateway?: AssociatedGateway | undefined;

  /**
   * The existing Amazon VPC prefixes advertised to the Direct Connect gateway.
   *
   * @public
   */
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * The Amazon VPC prefixes to advertise to the Direct Connect gateway.
   *
   * @public
   */
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAssociationProposalResult {
  /**
   * Information about the Direct Connect gateway proposal.
   *
   * @public
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal | undefined;
}

/**
 * @public
 */
export interface CreateInterconnectRequest {
  /**
   * The name of the interconnect.
   *
   * @public
   */
  interconnectName: string | undefined;

  /**
   * The port bandwidth, in Gbps. The possible values are 1, 10, and 100.
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The location of the interconnect.
   *
   * @public
   */
  location: string | undefined;

  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId?: string | undefined;

  /**
   * The tags to associate with the interconnect.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the service provider associated with the interconnect.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * Indicates whether you want the interconnect to support MAC Security (MACsec).
   *
   * @public
   */
  requestMACSec?: boolean | undefined;
}

/**
 * Information about an interconnect.
 *
 * @public
 */
export interface Interconnect {
  /**
   * The ID of the interconnect.
   *
   * @public
   */
  interconnectId?: string | undefined;

  /**
   * The name of the interconnect.
   *
   * @public
   */
  interconnectName?: string | undefined;

  /**
   * The state of the interconnect. The following are the possible values:
   *
   * - `requested`: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.
   * - `pending`: The interconnect is approved, and is being initialized.
   * - `available`: The network link is up, and the interconnect is ready for use.
   * - `down`: The network link is down.
   * - `deleting`: The interconnect is being deleted.
   * - `deleted`: The interconnect is deleted.
   * - `unknown`: The state of the interconnect is not available.
   *
   * @public
   */
  interconnectState?: InterconnectState | undefined;

  /**
   * The Amazon Web Services Region where the connection is located.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The location of the connection.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The bandwidth of the connection.
   *
   * @public
   */
  bandwidth?: string | undefined;

  /**
   * The time of the most recent call to DescribeLoa for this connection.
   *
   * @public
   */
  loaIssueTime?: Date | undefined;

  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId?: string | undefined;

  /**
   * The Direct Connect endpoint on which the physical connection terminates.
   *
   * @deprecated deprecated.
   * @public
   */
  awsDevice?: string | undefined;

  /**
   * Indicates whether jumbo frames are supported.
   *
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * The Direct Connect endpoint that terminates the physical connection.
   *
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
   *
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).
   *
   * @public
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | undefined;

  /**
   * The tags associated with the interconnect.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the service provider associated with the interconnect.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * Indicates whether the interconnect supports MAC Security (MACsec).
   *
   * @public
   */
  macSecCapable?: boolean | undefined;

  /**
   * The MAC Security (MACsec) port link status.
   *
   * The valid values are `Encryption Up`, which means that there is an active Connection Key Name, or `Encryption Down`.
   *
   * @public
   */
  portEncryptionStatus?: string | undefined;

  /**
   * The MAC Security (MACsec) encryption mode.
   *
   * The valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`.
   *
   * @public
   */
  encryptionMode?: string | undefined;

  /**
   * The MAC Security (MACsec) security keys.
   *
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;
}

/**
 * @public
 */
export interface CreateLagRequest {
  /**
   * The number of physical dedicated connections initially provisioned and bundled by the LAG. You can have a maximum of four connections when the port speed is 1Gbps or 10Gbps, or two when the port speed is 100Gbps or 400Gbps.
   *
   * @public
   */
  numberOfConnections: number | undefined;

  /**
   * The location for the LAG.
   *
   * @public
   */
  location: string | undefined;

  /**
   * The bandwidth of the individual physical dedicated connections bundled by the LAG. The possible values are 1Gbps,10Gbps, 100Gbps, and 400Gbps.
   *
   * @public
   */
  connectionsBandwidth: string | undefined;

  /**
   * The name of the LAG.
   *
   * @public
   */
  lagName: string | undefined;

  /**
   * The ID of an existing dedicated connection to migrate to the LAG.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The tags to associate with the LAG.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The tags to associate with the automtically created LAGs.
   *
   * @public
   */
  childConnectionTags?: Tag[] | undefined;

  /**
   * The name of the service provider associated with the LAG.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * Indicates whether the connection will support MAC Security (MACsec).
   *
   * > **Note:** All connections in the LAG must be capable of supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see [MACsec prerequisties](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites) in the *Direct Connect User Guide*.
   *
   * @public
   */
  requestMACSec?: boolean | undefined;

  /**
   * The billing mode for the LAG.
   *
   * @public
   */
  billingMode?: RequestBillingMode | undefined;
}

/**
 * Information about a link aggregation group (LAG).
 *
 * @public
 */
export interface Lag {
  /**
   * The individual bandwidth of the physical connections bundled by the LAG. The possible values are 1Gbps, 10Gbps, 100Gbps, or 400 Gbps..
   *
   * @public
   */
  connectionsBandwidth?: string | undefined;

  /**
   * The number of physical dedicated connections initially provisioned and bundled by the LAG. You can have a maximum of four connections when the port speed is 1 Gbps or 10 Gbps, or two when the port speed is 100 Gbps or 400 Gbps.
   *
   * @public
   */
  numberOfConnections?: number | undefined;

  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the LAG.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The name of the LAG.
   *
   * @public
   */
  lagName?: string | undefined;

  /**
   * The state of the LAG. The following are the possible values:
   *
   * - `requested`: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.
   * - `pending`: The LAG has been approved and is being initialized.
   * - `available`: The network link is established and the LAG is ready for use.
   * - `down`: The network link is down.
   * - `deleting`: The LAG is being deleted.
   * - `deleted`: The LAG is deleted.
   * - `unknown`: The state of the LAG is not available.
   *
   * @public
   */
  lagState?: LagState | undefined;

  /**
   * The location of the LAG.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The Amazon Web Services Region where the connection is located.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.
   *
   * @public
   */
  minimumLinks?: number | undefined;

  /**
   * The Direct Connect endpoint that hosts the LAG.
   *
   * @deprecated deprecated.
   * @public
   */
  awsDevice?: string | undefined;

  /**
   * The Direct Connect endpoint that hosts the LAG.
   *
   * @public
   */
  awsDeviceV2?: string | undefined;

  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
   *
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * The connections bundled by the LAG.
   *
   * @public
   */
  connections?: Connection[] | undefined;

  /**
   * Indicates whether the LAG can host other connections.
   *
   * @public
   */
  allowsHostedConnections?: boolean | undefined;

  /**
   * Indicates whether jumbo frames are supported.
   *
   * @public
   */
  jumboFrameCapable?: boolean | undefined;

  /**
   * Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).
   *
   * @public
   */
  hasLogicalRedundancy?: HasLogicalRedundancy | undefined;

  /**
   * The tags associated with the LAG.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the service provider associated with the LAG.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * Indicates whether the LAG supports MAC Security (MACsec).
   *
   * @public
   */
  macSecCapable?: boolean | undefined;

  /**
   * The LAG MAC Security (MACsec) encryption mode.
   *
   * The valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`.
   *
   * @public
   */
  encryptionMode?: string | undefined;

  /**
   * The MAC Security (MACsec) security keys associated with the LAG.
   *
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;

  /**
   * The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces on the LAG. Not applicable to LAGs that are interconnects and support hosted connections.
   *
   * @public
   */
  prefixPoolSizeIpv4?: number | undefined;

  /**
   * The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces on the LAG. Not applicable to LAGs that are interconnects and support hosted connections.
   *
   * @public
   */
  prefixPoolSizeIpv6?: number | undefined;

  /**
   * The number of inbound IPv4 route prefixes in the LAG prefix pool not yet allocated to a virtual interface. Not applicable to LAGs that are interconnects and support hosted connections.
   *
   * @public
   */
  prefixPoolUnallocatedCountIpv4?: number | undefined;

  /**
   * The number of inbound IPv6 route prefixes in the LAG prefix pool not yet allocated to a virtual interface. Not applicable to LAGs that are interconnects and support hosted connections.
   *
   * @public
   */
  prefixPoolUnallocatedCountIpv6?: number | undefined;

  /**
   * The rate limiter status for the LAG, including how many rate limiters are in use and the maximum allowed.
   *
   * @public
   */
  rateLimiterStatus?: RateLimiterStatus | undefined;

  /**
   * The billing mode of the LAG.
   *
   * @public
   */
  billingMode?: BillingMode | undefined;
}

/**
 * Information about a private virtual interface.
 *
 * @public
 */
export interface NewPrivateVirtualInterface {
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   *
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan: number | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * The valid values are 1-2147483646.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The long ASN for a new private virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.
   *
   * @public
   */
  mtu?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The tags associated with the private virtual interface.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Indicates whether to enable or disable SiteLink.
   *
   * @public
   */
  enableSiteLink?: boolean | undefined;

  /**
   * The number of inbound IPv4 route prefixes to allocate to the virtual interface.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv4?: number | undefined;

  /**
   * The number of inbound IPv6 route prefixes to allocate to the virtual interface.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv6?: number | undefined;

  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
   *
   * @public
   */
  rateLimit?: string | undefined;
}

/**
 * @public
 */
export interface CreatePrivateVirtualInterfaceRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * Information about the private virtual interface.
   *
   * @public
   */
  newPrivateVirtualInterface: NewPrivateVirtualInterface | undefined;
}

/**
 * Information about a public virtual interface.
 *
 * @public
 */
export interface NewPublicVirtualInterface {
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   *
   * @public
   */
  virtualInterfaceName: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan: number | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The long ASN for a new public virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.
   *
   * @public
   */
  routeFilterPrefixes?: RouteFilterPrefix[] | undefined;

  /**
   * The tags associated with the public virtual interface.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
   *
   * @public
   */
  rateLimit?: string | undefined;
}

/**
 * @public
 */
export interface CreatePublicVirtualInterfaceRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * Information about the public virtual interface.
   *
   * @public
   */
  newPublicVirtualInterface: NewPublicVirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateResiliencyGroupRequest {
  /**
   * The name of the resiliency group.
   *
   * @public
   */
  resiliencyGroupName: string | undefined;

  /**
   * The resiliency model that the resiliency group is intended to meet. The valid values are `maximum-resiliency`, `high-resiliency`, and `basic-resiliency`.
   *
   * @public
   */
  intendedResiliencyModel: ResiliencyModel | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to associate with the resiliency group.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Information about a resiliency group.
 *
 * @public
 */
export interface ResiliencyGroup {
  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resiliency group.
   *
   * @public
   */
  resiliencyGroupArn?: string | undefined;

  /**
   * The name of the resiliency group.
   *
   * @public
   */
  resiliencyGroupName?: string | undefined;

  /**
   * The type of the resiliency group. The valid value is `Managed`.
   *
   * @public
   */
  resiliencyGroupType?: ResiliencyGroupType | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the resiliency group.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The state of the resiliency group. The valid values are `pending`, `available`, `deleting`, and `deleted`.
   *
   * @public
   */
  state?: ResiliencyGroupState | undefined;

  /**
   * The tags associated with the resiliency group.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateResiliencyGroupResult {
  /**
   * Information about the resiliency group.
   *
   * @public
   */
  resiliencyGroup?: ResiliencyGroup | undefined;
}

/**
 * Information about a transit virtual interface.
 *
 * @public
 */
export interface NewTransitVirtualInterface {
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   *
   * @public
   */
  virtualInterfaceName?: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  vlan?: number | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The long ASN for a new transit virtual interface.The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.
   *
   * @public
   */
  mtu?: number | undefined;

  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
   *
   * @public
   */
  authKey?: string | undefined;

  /**
   * The IP address assigned to the Amazon interface.
   *
   * @public
   */
  amazonAddress?: string | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The address family for the BGP peer.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The tags associated with the transitive virtual interface.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Indicates whether to enable or disable SiteLink.
   *
   * @public
   */
  enableSiteLink?: boolean | undefined;

  /**
   * The number of inbound IPv4 route prefixes to allocate to the virtual interface.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv4?: number | undefined;

  /**
   * The number of inbound IPv6 route prefixes to allocate to the virtual interface.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv6?: number | undefined;

  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
   *
   * @public
   */
  rateLimit?: string | undefined;
}

/**
 * @public
 */
export interface CreateTransitVirtualInterfaceRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * Information about the transit virtual interface.
   *
   * @public
   */
  newTransitVirtualInterface: NewTransitVirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateTransitVirtualInterfaceResult {
  /**
   * Information about a virtual interface.
   *
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * @public
 */
export interface DeleteBGPPeerRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use `asnLong` instead.
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   * - If you enter a 4-byte ASN for the `asn` parameter, the API returns an error.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   *
   * @public
   */
  asn?: number | undefined;

  /**
   * The long ASN for the BGP peer to be deleted from a Direct Connect virtual interface. The valid range is from 1 to 4294967294 for BGP configuration.
   *
   * Note the following limitations when using `asnLong`:
   *
   * - You can use `asnLong` or `asn`, but not both. We recommend using `asnLong` as it supports a greater pool of numbers.
   * - `asnLong` accepts any valid ASN value, regardless if it's 2-byte or 4-byte.
   * - When using a 4-byte `asnLong`, the API response returns `0` for the legacy `asn` attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647.
   * - If you are using a 2-byte ASN, the API response will include the 2-byte value for both the `asn` and `asnLong` fields.
   * - If you provide a value in the same API call for both `asn` and `asnLong`, the API will only accept the value for `asnLong`.
   *
   * @public
   */
  asnLong?: number | undefined;

  /**
   * The IP address assigned to the customer interface.
   *
   * @public
   */
  customerAddress?: string | undefined;

  /**
   * The ID of the BGP peer.
   *
   * @public
   */
  bgpPeerId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBGPPeerResponse {
  /**
   * The virtual interface.
   *
   * @public
   */
  virtualInterface?: VirtualInterface | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayRequest {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayResult {
  /**
   * The Direct Connect gateway.
   *
   * @public
   */
  directConnectGateway?: DirectConnectGateway | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationRequest {
  /**
   * The ID of the Direct Connect gateway association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationResult {
  /**
   * Information about the deleted association.
   *
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  /**
   * The ID of the proposal.
   *
   * @public
   */
  proposalId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectConnectGatewayAssociationProposalResult {
  /**
   * The ID of the associated gateway.
   *
   * @public
   */
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal | undefined;
}

/**
 * @public
 */
export interface DeleteInterconnectRequest {
  /**
   * The ID of the interconnect.
   *
   * @public
   */
  interconnectId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInterconnectResponse {
  /**
   * The state of the interconnect. The following are the possible values:
   *
   * - `requested`: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.
   * - `pending`: The interconnect is approved, and is being initialized.
   * - `available`: The network link is up, and the interconnect is ready for use.
   * - `down`: The network link is down.
   * - `deleting`: The interconnect is being deleted.
   * - `deleted`: The interconnect is deleted.
   * - `unknown`: The state of the interconnect is not available.
   *
   * @public
   */
  interconnectState?: InterconnectState | undefined;
}

/**
 * @public
 */
export interface DeleteLagRequest {
  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResiliencyGroupRequest {
  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResiliencyGroupResult {
  /**
   * Information about the resiliency group.
   *
   * @public
   */
  resiliencyGroup?: ResiliencyGroup | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualInterfaceRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualInterfaceResponse {
  /**
   * The state of the virtual interface. The following are the possible values:
   *
   * - `confirming`: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.
   * - `verifying`: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
   * - `pending`: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.
   * - `available`: A virtual interface that is able to forward traffic.
   * - `down`: A virtual interface that is BGP down.
   * - `testing`: A virtual interface is in this state immediately after calling StartBgpFailoverTest and remains in this state during the duration of the test.
   * - `deleting`: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.
   * - `deleted`: A virtual interface that cannot forward traffic.
   * - `rejected`: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the `Confirming` state is deleted by the virtual interface owner, the virtual interface enters the `Rejected` state.
   * - `unknown`: The state of the virtual interface is not available.
   *
   * @public
   */
  virtualInterfaceState?: VirtualInterfaceState | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionLoaRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
   *
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
 *
 * @public
 */
export interface Loa {
  /**
   * The binary contents of the LOA-CFA document.
   *
   * @public
   */
  loaContent?: Uint8Array | undefined;

  /**
   * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
   *
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionLoaResponse {
  /**
   * The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).
   *
   * @public
   */
  loa?: Loa | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionsRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionsOnInterconnectRequest {
  /**
   * The ID of the interconnect.
   *
   * @public
   */
  interconnectId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomerMetadataResponse {
  /**
   * The list of customer agreements.
   *
   * @public
   */
  agreements?: CustomerAgreement[] | undefined;

  /**
   * The type of network-to-network interface (NNI) partner. The partner type will be one of the following:
   *
   * - V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections.
   * - V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections.
   * - nonPartner: The customer is not a partner.
   *
   * @public
   */
  nniPartnerType?: NniPartnerType | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The ID of the proposal.
   *
   * @public
   */
  proposalId?: string | undefined;

  /**
   * The ID of the associated gateway.
   *
   * @public
   */
  associatedGatewayId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  /**
   * Describes the Direct Connect gateway association proposals.
   *
   * @public
   */
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationsRequest {
  /**
   * The ID of the Direct Connect gateway association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The ID of the associated gateway.
   *
   * @public
   */
  associatedGatewayId?: string | undefined;

  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token provided in the previous call to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the virtual private gateway or transit gateway.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAssociationsResult {
  /**
   * Information about the associations.
   *
   * @public
   */
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[] | undefined;

  /**
   * The token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAttachmentsRequest {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token provided in the previous call to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about an attachment between a Direct Connect gateway and a virtual interface.
 *
 * @public
 */
export interface DirectConnectGatewayAttachment {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The Amazon Web Services Region where the virtual interface is located.
   *
   * @public
   */
  virtualInterfaceRegion?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the virtual interface.
   *
   * @public
   */
  virtualInterfaceOwnerAccount?: string | undefined;

  /**
   * The state of the attachment. The following are the possible values:
   *
   * - `attaching`: The initial state after a virtual interface is created using the Direct Connect gateway.
   * - `attached`: The Direct Connect gateway and virtual interface are attached and ready to pass traffic.
   * - `detaching`: The initial state after calling DeleteVirtualInterface.
   * - `detached`: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.
   *
   * @public
   */
  attachmentState?: DirectConnectGatewayAttachmentState | undefined;

  /**
   * The type of attachment.
   *
   * @public
   */
  attachmentType?: DirectConnectGatewayAttachmentType | undefined;

  /**
   * The error message if the state of an object failed to advance.
   *
   * @public
   */
  stateChangeError?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewayAttachmentsResult {
  /**
   * The attachments.
   *
   * @public
   */
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[] | undefined;

  /**
   * The token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewaysRequest {
  /**
   * The ID of the Direct Connect gateway.
   *
   * @public
   */
  directConnectGatewayId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token provided in the previous call to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectConnectGatewaysResult {
  /**
   * The Direct Connect gateways.
   *
   * @public
   */
  directConnectGateways?: DirectConnectGateway[] | undefined;

  /**
   * The token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostedConnectionsRequest {
  /**
   * The ID of the interconnect or LAG.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInterconnectLoaRequest {
  /**
   * The ID of the interconnect.
   *
   * @public
   */
  interconnectId: string | undefined;

  /**
   * The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
   *
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * @public
 */
export interface DescribeInterconnectLoaResponse {
  /**
   * The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).
   *
   * @public
   */
  loa?: Loa | undefined;
}

/**
 * @public
 */
export interface DescribeInterconnectsRequest {
  /**
   * The ID of the interconnect.
   *
   * @public
   */
  interconnectId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface Interconnects {
  /**
   * The interconnects.
   *
   * @public
   */
  interconnects?: Interconnect[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLagsRequest {
  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface Lags {
  /**
   * The LAGs.
   *
   * @public
   */
  lags?: Lag[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLoaRequest {
  /**
   * The ID of a connection, LAG, or interconnect.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The name of the service provider who establishes connectivity on your behalf. If you specify this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
   *
   * @public
   */
  loaContentType?: LoaContentType | undefined;
}

/**
 * Information about an Direct Connect location.
 *
 * @public
 */
export interface Location {
  /**
   * The code for the location.
   *
   * @public
   */
  locationCode?: string | undefined;

  /**
   * The name of the location. This includes the name of the colocation partner and the physical site of the building.
   *
   * @public
   */
  locationName?: string | undefined;

  /**
   * The Amazon Web Services Region for the location.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The available port speeds for the location.
   *
   * @public
   */
  availablePortSpeeds?: string[] | undefined;

  /**
   * The name of the service provider for the location.
   *
   * @public
   */
  availableProviders?: string[] | undefined;

  /**
   * The available MAC Security (MACsec) port speeds for the location.
   *
   * @public
   */
  availableMacSecPortSpeeds?: string[] | undefined;

  /**
   * The billing modes available at the location, including the port speeds and Amazon Web Services Regions supported by each mode.
   *
   * @public
   */
  availableBillingModes?: AvailableBillingMode[] | undefined;
}

/**
 * @public
 */
export interface Locations {
  /**
   * The locations.
   *
   * @public
   */
  locations?: Location[] | undefined;
}

/**
 * Provides the details about a virtual interface's router.
 *
 * @public
 */
export interface DescribeRouterConfigurationRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * Identifies the router by a combination of vendor, platform, and software version. For example, `CiscoSystemsInc-2900SeriesRouters-IOS124`.
   *
   * @public
   */
  routerTypeIdentifier?: string | undefined;
}

/**
 * Information about the virtual router.
 *
 * @public
 */
export interface RouterType {
  /**
   * The vendor for the virtual interface's router.
   *
   * @public
   */
  vendor?: string | undefined;

  /**
   * The virtual interface router platform.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The router software.
   *
   * @public
   */
  software?: string | undefined;

  /**
   * The template for the virtual interface's router.
   *
   * @public
   */
  xsltTemplateName?: string | undefined;

  /**
   * The MAC Security (MACsec) template for the virtual interface's router.
   *
   * @public
   */
  xsltTemplateNameForMacSec?: string | undefined;

  /**
   * Identifies the router by a combination of vendor, platform, and software version. For example, `CiscoSystemsInc-2900SeriesRouters-IOS124`.
   *
   * @public
   */
  routerTypeIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouterConfigurationResponse {
  /**
   * The customer router configuration.
   *
   * @public
   */
  customerRouterConfig?: string | undefined;

  /**
   * The details about the router.
   *
   * @public
   */
  router?: RouterType | undefined;

  /**
   * The ID assigned to the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * Provides the details about a virtual interface's router.
   *
   * @public
   */
  virtualInterfaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * The Amazon Resource Names (ARNs) of the resources.
   *
   * @public
   */
  resourceArns: string[] | undefined;
}

/**
 * Information about a tag associated with an Direct Connect resource.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResponse {
  /**
   * Information about the tags.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * Information about a virtual private gateway for a private virtual interface.
 *
 * @public
 */
export interface VirtualGateway {
  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  virtualGatewayId?: string | undefined;

  /**
   * The state of the virtual private gateway. The following are the possible values:
   *
   * - `pending`: Initial state after creating the virtual private gateway.
   * - `available`: Ready for use by a private virtual interface.
   * - `deleting`: Initial state after deleting the virtual private gateway.
   * - `deleted`: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.
   *
   * @public
   */
  virtualGatewayState?: string | undefined;
}

/**
 * @public
 */
export interface VirtualGateways {
  /**
   * The virtual private gateways.
   *
   * @public
   */
  virtualGateways?: VirtualGateway[] | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualInterfacesRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface VirtualInterfaces {
  /**
   * The virtual interfaces
   *
   * @public
   */
  virtualInterfaces?: VirtualInterface[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectionFromLagRequest {
  /**
   * The ID of the connection.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectionsFromResiliencyGroupRequest {
  /**
   * The IDs or ARNs of the connections to disassociate from the resiliency group.
   *
   * @public
   */
  connectionIdentifiers: string[] | undefined;

  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectionsFromResiliencyGroupResult {
  /**
   * The connection associations for the resiliency group.
   *
   * @public
   */
  resiliencyGroupAssociations?: ResiliencyGroupAssociation[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMacSecKeyRequest {
  /**
   * The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).
   *
   * You can use DescribeConnections, DescribeInterconnects, or DescribeLags to retrieve connection ID.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.
   *
   * You can use DescribeConnections to retrieve the ARN of the MAC Security (MACsec) secret key.
   *
   * @public
   */
  secretARN: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMacSecKeyResponse {
  /**
   * The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).
   *
   * @public
   */
  connectionId?: string | undefined;

  /**
   * The MAC Security (MACsec) security keys no longer associated with the connection.
   *
   * @public
   */
  macSecKeys?: MacSecKey[] | undefined;
}

/**
 * @public
 */
export interface GetResiliencyGroupRequest {
  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetResiliencyGroupResult {
  /**
   * Information about the resiliency group.
   *
   * @public
   */
  resiliencyGroup?: ResiliencyGroup | undefined;
}

/**
 * @public
 */
export interface ListResiliencyGroupAssociationsRequest {
  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResiliencyGroupAssociationsResult {
  /**
   * The connection associations for the resiliency group.
   *
   * @public
   */
  items?: ResiliencyGroupAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResiliencyGroupsRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a resiliency group.
 *
 * @public
 */
export interface ResiliencyGroupSummary {
  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resiliency group.
   *
   * @public
   */
  resiliencyGroupArn?: string | undefined;

  /**
   * The name of the resiliency group.
   *
   * @public
   */
  resiliencyGroupName?: string | undefined;

  /**
   * The type of the resiliency group. The valid value is `Managed`.
   *
   * @public
   */
  resiliencyGroupType?: ResiliencyGroupType | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the resiliency group.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The state of the resiliency group.
   *
   * @public
   */
  state?: ResiliencyGroupState | undefined;
}

/**
 * @public
 */
export interface ListResiliencyGroupsResult {
  /**
   * Summary information about the resiliency groups.
   *
   * @public
   */
  items?: ResiliencyGroupSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The filters used to limit the routes returned by ListVirtualInterfaceRoutes.
 *
 * @public
 */
export interface RouteFilters {
  /**
   * The direction of the routes to return.
   *
   * The valid values are `accepted` (routes received from the customer network) and `advertised` (routes advertised to the customer network).
   *
   * @public
   */
  routeDirection?: RouteDirection | undefined;

  /**
   * The address family of the routes to return.
   *
   * The valid values are `ipv4` and `ipv6`.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The CIDRs (prefixes) used to filter the routes. You can specify up to 10 CIDRs.
   *
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * The autonomous system (AS) numbers used to filter the routes by their AS path.
   *
   * @public
   */
  asPath?: number[] | undefined;

  /**
   * The BGP communities used to filter the routes.
   *
   * @public
   */
  communities?: string[] | undefined;
}

/**
 * @public
 */
export interface ListVirtualInterfaceRoutesRequest {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The filters to apply to the routes returned.
   *
   * @public
   */
  filters?: RouteFilters | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a route for a virtual interface.
 *
 * @public
 */
export interface Route {
  /**
   * The CIDR (prefix) of the route.
   *
   * @public
   */
  cidr?: string | undefined;

  /**
   * The direction of the route.
   *
   * The valid values are `accepted` (received from the customer network) and `advertised` (advertised to the customer network).
   *
   * @public
   */
  routeDirection?: RouteDirection | undefined;

  /**
   * The address family of the route.
   *
   * The valid values are `ipv4` and `ipv6`.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The autonomous system (AS) path of the route.
   *
   * @public
   */
  asPath?: AsPathSegment[] | undefined;

  /**
   * The BGP communities associated with the route.
   *
   * @public
   */
  communities?: string[] | undefined;

  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
   *
   * @public
   */
  awsLogicalDeviceId?: string | undefined;

  /**
   * The time when the route was installed. The value is displayed in UTC format.
   *
   * @public
   */
  routeInstalledAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualInterfaceRoutesResponse {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The routes for the virtual interface.
   *
   * @public
   */
  routes?: Route[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVirtualInterfaceTestHistoryRequest {
  /**
   * The ID of the virtual interface failover test.
   *
   * @public
   */
  testId?: string | undefined;

  /**
   * The ID of the virtual interface that was tested.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The BGP peers that were placed in the DOWN state during the virtual interface failover test.
   *
   * @public
   */
  bgpPeers?: string[] | undefined;

  /**
   * The status of the virtual interface failover test.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the virtual interface failover test.
 *
 * @public
 */
export interface VirtualInterfaceTestHistory {
  /**
   * The ID of the virtual interface failover test.
   *
   * @public
   */
  testId?: string | undefined;

  /**
   * The ID of the tested virtual interface.
   *
   * @public
   */
  virtualInterfaceId?: string | undefined;

  /**
   * The BGP peers that were put in the DOWN state as part of the virtual interface failover test.
   *
   * @public
   */
  bgpPeers?: string[] | undefined;

  /**
   * The status of the virtual interface failover test.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The owner ID of the tested virtual interface.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The time that the virtual interface failover test ran in minutes.
   *
   * @public
   */
  testDurationInMinutes?: number | undefined;

  /**
   * The time that the virtual interface moves to the DOWN state.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time that the virtual interface moves out of the DOWN state.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualInterfaceTestHistoryResponse {
  /**
   * The ID of the tested virtual interface.
   *
   * @public
   */
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartBgpFailoverTestRequest {
  /**
   * The ID of the virtual interface you want to test.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * The BGP peers to place in the DOWN state.
   *
   * @public
   */
  bgpPeers?: string[] | undefined;

  /**
   * The time in minutes that the virtual interface failover test will last.
   *
   * Maximum value: 4,320 minutes (72 hours).
   *
   * Default: 180 minutes (3 hours).
   *
   * @public
   */
  testDurationInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface StartBgpFailoverTestResponse {
  /**
   * Information about the virtual interface failover test.
   *
   * @public
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory | undefined;
}

/**
 * @public
 */
export interface StopBgpFailoverTestRequest {
  /**
   * The ID of the virtual interface you no longer want to test.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface StopBgpFailoverTestResponse {
  /**
   * Information about the virtual interface failover test.
   *
   * @public
   */
  virtualInterfaceTest?: VirtualInterfaceTestHistory | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys of the tags to remove.
   *
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
   * The ID of the connection.
   *
   * You can use DescribeConnections to retrieve the connection ID.
   *
   * @public
   */
  connectionId: string | undefined;

  /**
   * The name of the connection.
   *
   * @public
   */
  connectionName?: string | undefined;

  /**
   * The connection MAC Security (MACsec) encryption mode.
   *
   * The valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`.
   *
   * @public
   */
  encryptionMode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionsBillingModeRequest {
  /**
   * The IDs of the connections to update. You can specify from 1 to 200 connections.
   *
   * @public
   */
  connectionIds: string[] | undefined;

  /**
   * The billing mode to apply to the specified connections. The valid values are `PayAsYouGo`, `FlatRateTier1`, `FlatRateTier2`, `FlatRateTier3`, `FlatRateTier4`, and `FlatRateTier5`.
   *
   * @public
   */
  billingMode: RequestBillingMode | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionsBillingModeResponse {
  /**
   * The billing mode applied to the connections.
   *
   * @public
   */
  billingMode?: BillingMode | undefined;

  /**
   * The connections with the updated billing mode.
   *
   * @public
   */
  connections?: Connection[] | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayRequest {
  /**
   * The ID of the Direct Connect gateway to update.
   *
   * @public
   */
  directConnectGatewayId: string | undefined;

  /**
   * The new name for the Direct Connect gateway.
   *
   * @public
   */
  newDirectConnectGatewayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayResponse {
  /**
   * Informaiton about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateways or transit gateways.
   *
   * @public
   */
  directConnectGateway?: DirectConnectGateway | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAssociationRequest {
  /**
   * The ID of the Direct Connect gateway association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The Amazon VPC prefixes to advertise to the Direct Connect gateway.
   *
   * @public
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;

  /**
   * The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.
   *
   * @public
   */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAssociationResult {
  /**
   * Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
   *
   * @public
   */
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface UpdateLagRequest {
  /**
   * The ID of the LAG.
   *
   * @public
   */
  lagId: string | undefined;

  /**
   * The name of the LAG.
   *
   * @public
   */
  lagName?: string | undefined;

  /**
   * The minimum number of physical connections that must be operational for the LAG itself to be operational.
   *
   * @public
   */
  minimumLinks?: number | undefined;

  /**
   * The LAG MAC Security (MACsec) encryption mode.
   *
   * Amazon Web Services applies the value to all connections which are part of the LAG.
   *
   * @public
   */
  encryptionMode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResiliencyGroupRequest {
  /**
   * The ID of the resiliency group.
   *
   * @public
   */
  resiliencyGroupId: string | undefined;

  /**
   * The new name of the resiliency group.
   *
   * @public
   */
  resiliencyGroupName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResiliencyGroupResult {
  /**
   * Information about the resiliency group.
   *
   * @public
   */
  resiliencyGroup?: ResiliencyGroup | undefined;
}

/**
 * @public
 */
export interface UpdateVirtualInterfaceAttributesRequest {
  /**
   * The ID of the virtual private interface.
   *
   * @public
   */
  virtualInterfaceId: string | undefined;

  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.
   *
   * @public
   */
  mtu?: number | undefined;

  /**
   * Indicates whether to enable or disable SiteLink.
   *
   * @public
   */
  enableSiteLink?: boolean | undefined;

  /**
   * The name of the virtual private interface.
   *
   * @public
   */
  virtualInterfaceName?: string | undefined;

  /**
   * The number of inbound IPv4 route prefixes to allocate to the virtual interface. Not applicable to public virtual interfaces.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv4?: number | undefined;

  /**
   * The number of inbound IPv6 route prefixes to allocate to the virtual interface. Not applicable to public virtual interfaces.
   *
   * @public
   */
  prefixPoolAllocatedCountIpv6?: number | undefined;

  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. Use this to update the bandwidth allocation on an existing virtual interface.
   *
   * @public
   */
  rateLimit?: string | undefined;
}
