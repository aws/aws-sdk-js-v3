// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  AttachmentErrorCode,
  AttachmentState,
  AttachmentType,
  ChangeAction,
  ChangeSetState,
  ChangeStatus,
  ChangeType,
  ConnectionState,
  ConnectionStatus,
  ConnectionType,
  ConnectPeerAssociationState,
  ConnectPeerErrorCode,
  ConnectPeerState,
  CoreNetworkPolicyAlias,
  CoreNetworkState,
  CustomerGatewayAssociationState,
  DeviceState,
  GlobalNetworkState,
  LinkAssociationState,
  LinkState,
  NatGatewaySupportState,
  NatGatewaySupportValue,
  NatRuleState,
  PeeringErrorCode,
  PeeringState,
  PeeringType,
  RouteAnalysisCompletionReasonCode,
  RouteAnalysisCompletionResultCode,
  RouteAnalysisStatus,
  RouteState,
  RouteTableType,
  RouteType,
  RoutingPolicyDirection,
  SegmentActionServiceInsertion,
  SendViaMode,
  SiteState,
  TransitGatewayConnectPeerAssociationState,
  TransitGatewayRegistrationState,
  TunnelProtocol,
} from "./enums";

/**
 * @public
 */
export interface AcceptAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * Describes the error associated with an attachment request.
 *
 * @public
 */
export interface AttachmentError {
  /**
   * The error code for the attachment request.
   *
   * @public
   */
  Code?: AttachmentErrorCode | undefined;

  /**
   * The message associated with the error `code`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The ARN of the requested attachment resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The ID of the attachment request.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * Describes a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag value.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes proposed changes to a network function group.
 *
 * @public
 */
export interface ProposedNetworkFunctionGroupChange {
  /**
   * The list of proposed changes to the key-value tags associated with the network function group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The proposed new attachment policy rule number for the network function group.
   *
   * @public
   */
  AttachmentPolicyRuleNumber?: number | undefined;

  /**
   * The proposed name change for the network function group name.
   *
   * @public
   */
  NetworkFunctionGroupName?: string | undefined;
}

/**
 * Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.
 *
 * @public
 */
export interface ProposedSegmentChange {
  /**
   * The list of key-value tags that changed for the segment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The rule number in the policy document that applies to this change.
   *
   * @public
   */
  AttachmentPolicyRuleNumber?: number | undefined;

  /**
   * The name of the segment to change.
   *
   * @public
   */
  SegmentName?: string | undefined;
}

/**
 * Describes a core network attachment.
 *
 * @public
 */
export interface Attachment {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of a core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The ID of the attachment account owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The type of attachment.
   *
   * @public
   */
  AttachmentType?: AttachmentType | undefined;

  /**
   * The state of the attachment.
   *
   * @public
   */
  State?: AttachmentState | undefined;

  /**
   * The Region where the edge is located. This is returned for all attachment types except a Direct Connect gateway attachment, which instead returns `EdgeLocations`.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The edge locations that the Direct Connect gateway is associated with. This is returned only for Direct Connect gateway attachments. All other attachment types retrun `EdgeLocation`.
   *
   * @public
   */
  EdgeLocations?: string[] | undefined;

  /**
   * The attachment resource ARN.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The policy rule number associated with the attachment.
   *
   * @public
   */
  AttachmentPolicyRuleNumber?: number | undefined;

  /**
   * The name of the segment attachment.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * The name of the network function group.
   *
   * @public
   */
  NetworkFunctionGroupName?: string | undefined;

  /**
   * The state of NAT gateway support on the attachment. This is returned only to the core network owner for attachment types that support NAT.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportState | undefined;

  /**
   * Indicates whether the core network installs system routes for the NAT CIDR blocks of the attachment's NAT rules. This is returned only to the core network owner for attachment types that support NAT.
   *
   * @public
   */
  NatSystemRouteSupport?: boolean | undefined;

  /**
   * The tags associated with the attachment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The attachment to move from one segment to another.
   *
   * @public
   */
  ProposedSegmentChange?: ProposedSegmentChange | undefined;

  /**
   * Describes a proposed change to a network function group associated with the attachment.
   *
   * @public
   */
  ProposedNetworkFunctionGroupChange?: ProposedNetworkFunctionGroupChange | undefined;

  /**
   * The timestamp when the attachment was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the attachment was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Describes the error associated with the attachment request.
   *
   * @public
   */
  LastModificationErrors?: AttachmentError[] | undefined;
}

/**
 * @public
 */
export interface AcceptAttachmentResponse {
  /**
   * The response to the attachment request.
   *
   * @public
   */
  Attachment?: Attachment | undefined;
}

/**
 * Describes a validation exception for a field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The message for the field.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Describes the current status of an account within an Amazon Web Services Organization, including service-linked roles (SLRs).
 *
 * @public
 */
export interface AccountStatus {
  /**
   * The ID of an account within the Amazon Web Services Organization.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The status of SLR deployment for the account.
   *
   * @public
   */
  SLRDeploymentStatus?: string | undefined;
}

/**
 * @public
 */
export interface AssociateConnectPeerRequest {
  /**
   * The ID of your global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the Connect peer.
   *
   * @public
   */
  ConnectPeerId: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;
}

/**
 * Describes a core network Connect peer association.
 *
 * @public
 */
export interface ConnectPeerAssociation {
  /**
   * The ID of the Connect peer.
   *
   * @public
   */
  ConnectPeerId?: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of the device to connect to.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The state of the Connect peer association.
   *
   * @public
   */
  State?: ConnectPeerAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateConnectPeerResponse {
  /**
   * The response to the Connect peer request.
   *
   * @public
   */
  ConnectPeerAssociation?: ConnectPeerAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateCustomerGatewayRequest {
  /**
   * The Amazon Resource Name (ARN) of the customer gateway.
   *
   * @public
   */
  CustomerGatewayArn: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;
}

/**
 * Describes the association between a customer gateway, a device, and a link.
 *
 * @public
 */
export interface CustomerGatewayAssociation {
  /**
   * The Amazon Resource Name (ARN) of the customer gateway.
   *
   * @public
   */
  CustomerGatewayArn?: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The association state.
   *
   * @public
   */
  State?: CustomerGatewayAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateCustomerGatewayResponse {
  /**
   * The customer gateway association.
   *
   * @public
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateLinkRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId: string | undefined;
}

/**
 * Describes the association between a device and a link.
 *
 * @public
 */
export interface LinkAssociation {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The device ID for the link association.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  LinkAssociationState?: LinkAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateLinkResponse {
  /**
   * The link association.
   *
   * @public
   */
  LinkAssociation?: LinkAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayConnectPeerRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Connect peer.
   *
   * @public
   */
  TransitGatewayConnectPeerArn: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;
}

/**
 * Describes a transit gateway Connect peer association.
 *
 * @public
 */
export interface TransitGatewayConnectPeerAssociation {
  /**
   * The Amazon Resource Name (ARN) of the transit gateway Connect peer.
   *
   * @public
   */
  TransitGatewayConnectPeerArn?: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  State?: TransitGatewayConnectPeerAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayConnectPeerResponse {
  /**
   * The transit gateway Connect peer association.
   *
   * @public
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation | undefined;
}

/**
 * Describes a NAT rule of an attachment.
 *
 * @public
 */
export interface NatRule {
  /**
   * The rule number. Rule numbers identify the rules of an attachment and don't set the order in which rules are evaluated.
   *
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * The source CIDR block that the rule matches for traffic from the attachment.
   *
   * @public
   */
  MatchSourceCidr?: string | undefined;

  /**
   * The CIDR block that matching source addresses are translated to.
   *
   * @public
   */
  NatCidr?: string | undefined;

  /**
   * The state of the NAT rule. The possible values are the following:
   *
   * - `CREATING`: The rule is being created.
   * - `MODIFYING`: The rule is being modified.
   * - `DELETING`: The rule is being deleted.
   * - `ACTIVATING`: NAT gateway support is being enabled, and the rule is being applied.
   * - `ACTIVATED`: NAT gateway support is enabled, and the rule is applied.
   * - `DEACTIVATING`: NAT gateway support is being disabled, and the rule is being removed from use.
   * - `DEACTIVATED`: NAT gateway support is disabled, and the rule isn't applied.
   * - `FAILED`: The attachment failed to be created, and the rule isn't applied.
   * - `PENDING_ATTACHMENT_ACCEPTANCE`: The attachment is pending acceptance. The rule is applied after the attachment is accepted.
   *
   * @public
   */
  State?: NatRuleState | undefined;
}

/**
 * Describes the NAT configuration of a core network attachment.
 *
 * @public
 */
export interface AttachmentNatConfiguration {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The state of NAT gateway support on the attachment.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportState | undefined;

  /**
   * Indicates whether the core network installs system routes for the NAT CIDR blocks of the attachment's NAT rules.
   *
   * @public
   */
  NatSystemRouteSupport?: boolean | undefined;

  /**
   * The NAT rules of the attachment.
   *
   * @public
   */
  NatGatewayRules?: NatRule[] | undefined;
}

/**
 * Summary information about routing policy associations for an attachment.
 *
 * @public
 */
export interface AttachmentRoutingPolicyAssociationSummary {
  /**
   * The ID of the attachment associated with the routing policy.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The list of routing policies that are pending association with the attachment.
   *
   * @public
   */
  PendingRoutingPolicies?: string[] | undefined;

  /**
   * The list of routing policies currently associated with the attachment.
   *
   * @public
   */
  AssociatedRoutingPolicies?: string[] | undefined;

  /**
   * The routing policy label associated with the attachment.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;
}

/**
 * Specifies a location in Amazon Web Services.
 *
 * @public
 */
export interface AWSLocation {
  /**
   * The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.
   *
   * @public
   */
  Zone?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the subnet that the device is located in.
   *
   * @public
   */
  SubnetArn?: string | undefined;
}

/**
 * Describes bandwidth information.
 *
 * @public
 */
export interface Bandwidth {
  /**
   * Upload speed in Mbps.
   *
   * @public
   */
  UploadSpeed?: number | undefined;

  /**
   * Download speed in Mbps.
   *
   * @public
   */
  DownloadSpeed?: number | undefined;
}

/**
 * Describes the BGP options.
 *
 * @public
 */
export interface BgpOptions {
  /**
   * The Peer ASN of the BGP.
   *
   * @public
   */
  PeerAsn?: number | undefined;
}

/**
 * Describes a core network Connect attachment options.
 *
 * @public
 */
export interface ConnectAttachmentOptions {
  /**
   * The protocol used for the attachment connection.
   *
   * @public
   */
  Protocol?: TunnelProtocol | undefined;
}

/**
 * Describes a core network Connect attachment.
 *
 * @public
 */
export interface ConnectAttachment {
  /**
   * The attachment details.
   *
   * @public
   */
  Attachment?: Attachment | undefined;

  /**
   * The ID of the transport attachment.
   *
   * @public
   */
  TransportAttachmentId?: string | undefined;

  /**
   * Options for connecting an attachment.
   *
   * @public
   */
  Options?: ConnectAttachmentOptions | undefined;
}

/**
 * Describes a connection.
 *
 * @public
 */
export interface Connection {
  /**
   * The ID of the connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of the first device in the connection.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The ID of the second device in the connection.
   *
   * @public
   */
  ConnectedDeviceId?: string | undefined;

  /**
   * The ID of the link for the first device in the connection.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The ID of the link for the second device in the connection.
   *
   * @public
   */
  ConnectedLinkId?: string | undefined;

  /**
   * The description of the connection.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that the connection was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The state of the connection.
   *
   * @public
   */
  State?: ConnectionState | undefined;

  /**
   * The tags for the connection.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes connection health.
 *
 * @public
 */
export interface ConnectionHealth {
  /**
   * The connection type.
   *
   * @public
   */
  Type?: ConnectionType | undefined;

  /**
   * The connection status.
   *
   * @public
   */
  Status?: ConnectionStatus | undefined;

  /**
   * The time the status was last updated.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Describes a core network BGP configuration.
 *
 * @public
 */
export interface ConnectPeerBgpConfiguration {
  /**
   * The ASN of the Coret Network.
   *
   * @public
   */
  CoreNetworkAsn?: number | undefined;

  /**
   * The ASN of the Connect peer.
   *
   * @public
   */
  PeerAsn?: number | undefined;

  /**
   * The address of a core network.
   *
   * @public
   */
  CoreNetworkAddress?: string | undefined;

  /**
   * The address of a core network Connect peer.
   *
   * @public
   */
  PeerAddress?: string | undefined;
}

/**
 * Describes a core network Connect peer configuration.
 *
 * @public
 */
export interface ConnectPeerConfiguration {
  /**
   * The IP address of a core network.
   *
   * @public
   */
  CoreNetworkAddress?: string | undefined;

  /**
   * The IP address of the Connect peer.
   *
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * The inside IP addresses used for a Connect peer configuration.
   *
   * @public
   */
  InsideCidrBlocks?: string[] | undefined;

  /**
   * The protocol used for a Connect peer configuration.
   *
   * @public
   */
  Protocol?: TunnelProtocol | undefined;

  /**
   * The Connect peer BGP configurations.
   *
   * @public
   */
  BgpConfigurations?: ConnectPeerBgpConfiguration[] | undefined;
}

/**
 * Describes an error associated with a Connect peer request
 *
 * @public
 */
export interface ConnectPeerError {
  /**
   * The error code for the Connect peer request.
   *
   * @public
   */
  Code?: ConnectPeerErrorCode | undefined;

  /**
   * The message associated with the error `code`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The ARN of the requested Connect peer resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The ID of the Connect peer request.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * Describes a core network Connect peer.
 *
 * @public
 */
export interface ConnectPeer {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the attachment to connect.
   *
   * @public
   */
  ConnectAttachmentId?: string | undefined;

  /**
   * The ID of the Connect peer.
   *
   * @public
   */
  ConnectPeerId?: string | undefined;

  /**
   * The Connect peer Regions where edges are located.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The state of the Connect peer.
   *
   * @public
   */
  State?: ConnectPeerState | undefined;

  /**
   * The timestamp when the Connect peer was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The configuration of the Connect peer.
   *
   * @public
   */
  Configuration?: ConnectPeerConfiguration | undefined;

  /**
   * The list of key-value tags associated with the Connect peer.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The subnet ARN for the Connect peer. This only applies only when the protocol is NO_ENCAP.
   *
   * @public
   */
  SubnetArn?: string | undefined;

  /**
   * Describes the error associated with the attachment request.
   *
   * @public
   */
  LastModificationErrors?: ConnectPeerError[] | undefined;
}

/**
 * Summary description of a Connect peer.
 *
 * @public
 */
export interface ConnectPeerSummary {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of a Connect peer attachment.
   *
   * @public
   */
  ConnectAttachmentId?: string | undefined;

  /**
   * The ID of a Connect peer.
   *
   * @public
   */
  ConnectPeerId?: string | undefined;

  /**
   * The Region where the edge is located.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The state of a Connect peer.
   *
   * @public
   */
  ConnectPeerState?: ConnectPeerState | undefined;

  /**
   * The timestamp when a Connect peer was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The list of key-value tags associated with the Connect peer summary.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The subnet ARN for the Connect peer summary.
   *
   * @public
   */
  SubnetArn?: string | undefined;
}

/**
 * Describes a core network edge.
 *
 * @public
 */
export interface CoreNetworkEdge {
  /**
   * The Region where a core network edge is located.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The ASN of a core network edge.
   *
   * @public
   */
  Asn?: number | undefined;

  /**
   * The inside IP addresses used for core network edges.
   *
   * @public
   */
  InsideCidrBlocks?: string[] | undefined;
}

/**
 * Describes the segments associated with the service insertion action.
 *
 * @public
 */
export interface ServiceInsertionSegments {
  /**
   * The list of segments associated with the `send-via` action.
   *
   * @public
   */
  SendVia?: string[] | undefined;

  /**
   * The list of segments associated with the `send-to` action.
   *
   * @public
   */
  SendTo?: string[] | undefined;
}

/**
 * Describes a network function group.
 *
 * @public
 */
export interface CoreNetworkNetworkFunctionGroup {
  /**
   * The name of the network function group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The core network edge locations.
   *
   * @public
   */
  EdgeLocations?: string[] | undefined;

  /**
   * The segments associated with the network function group.
   *
   * @public
   */
  Segments?: ServiceInsertionSegments | undefined;
}

/**
 * Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other.
 *
 * @public
 */
export interface CoreNetworkSegment {
  /**
   * The name of a core network segment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Regions where the edges are located.
   *
   * @public
   */
  EdgeLocations?: string[] | undefined;

  /**
   * The shared segments of a core network.
   *
   * @public
   */
  SharedSegments?: string[] | undefined;
}

/**
 * Describes a core network.
 *
 * @public
 */
export interface CoreNetwork {
  /**
   * The ID of the global network that your core network is a part of.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of a core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The description of a core network.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when a core network was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The current state of a core network.
   *
   * @public
   */
  State?: CoreNetworkState | undefined;

  /**
   * The segments within a core network.
   *
   * @public
   */
  Segments?: CoreNetworkSegment[] | undefined;

  /**
   * The network function groups associated with a core network.
   *
   * @public
   */
  NetworkFunctionGroups?: CoreNetworkNetworkFunctionGroup[] | undefined;

  /**
   * The edges within a core network.
   *
   * @public
   */
  Edges?: CoreNetworkEdge[] | undefined;

  /**
   * The list of key-value tags associated with a core network.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Information about a routing policy association.
 *
 * @public
 */
export interface RoutingPolicyAssociationDetail {
  /**
   * The names of the routing policies in the association.
   *
   * @public
   */
  RoutingPolicyNames?: string[] | undefined;

  /**
   * The names of the segments that are shared with each other in the association.
   *
   * @public
   */
  SharedSegments?: string[] | undefined;
}

/**
 * Describes a network function group for service insertion.
 *
 * @public
 */
export interface NetworkFunctionGroup {
  /**
   * The name of the network function group.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the edge that's used for the override.
 *
 * @public
 */
export interface EdgeOverride {
  /**
   * The list of edge locations.
   *
   * @public
   */
  EdgeSets?: string[][] | undefined;

  /**
   * The edge that should be used when overriding the current edge order.
   *
   * @public
   */
  UseEdge?: string | undefined;
}

/**
 * The list of network function groups and edge overrides for the service insertion action. Used for both the `send-to` and `send-via` actions.
 *
 * @public
 */
export interface Via {
  /**
   * The list of network function groups associated with the service insertion action.
   *
   * @public
   */
  NetworkFunctionGroups?: NetworkFunctionGroup[] | undefined;

  /**
   * Describes any edge overrides. An edge override is a specific edge to be used for traffic.
   *
   * @public
   */
  WithEdgeOverrides?: EdgeOverride[] | undefined;
}

/**
 * Displays a list of the destination segments. Used only when the service insertion action is `send-to`.
 *
 * @public
 */
export interface WhenSentTo {
  /**
   * The list of destination segments when the service insertion action is `send-to`.
   *
   * @public
   */
  WhenSentToSegmentsList?: string[] | undefined;
}

/**
 * Describes the action that the service insertion will take for any segments associated with it.
 *
 * @public
 */
export interface ServiceInsertionAction {
  /**
   * The action the service insertion takes for traffic. `send-via` sends east-west traffic between attachments. `send-to` sends north-south traffic to the security appliance, and then from that to either the Internet or to an on-premesis location.
   *
   * @public
   */
  Action?: SegmentActionServiceInsertion | undefined;

  /**
   * Describes the mode packets take for the `send-via` action. This is not used when the action is `send-to`. `dual-hop` packets traverse attachments in both the source to the destination core network edges. This mode requires that an inspection attachment must be present in all Regions of the service insertion-enabled segments. For `single-hop`, packets traverse a single intermediate inserted attachment. You can use `EdgeOverride` to specify a specific edge to use.
   *
   * @public
   */
  Mode?: SendViaMode | undefined;

  /**
   * The list of destination segments if the service insertion action is `send-via`.
   *
   * @public
   */
  WhenSentTo?: WhenSentTo | undefined;

  /**
   * The list of network function groups and any edge overrides for the chosen service insertion action. Used for both `send-to` or `send-via`.
   *
   * @public
   */
  Via?: Via | undefined;
}

/**
 * Describes a core network change.
 *
 * @public
 */
export interface CoreNetworkChangeValues {
  /**
   * The names of the segments in a core network.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * The network function group name if the change event is associated with a network function group.
   *
   * @public
   */
  NetworkFunctionGroupName?: string | undefined;

  /**
   * The Regions where edges are located in a core network.
   *
   * @public
   */
  EdgeLocations?: string[] | undefined;

  /**
   * The ASN of a core network.
   *
   * @public
   */
  Asn?: number | undefined;

  /**
   * The IP addresses used for a core network.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The ID of the destination.
   *
   * @public
   */
  DestinationIdentifier?: string | undefined;

  /**
   * The inside IP addresses used for core network change values.
   *
   * @public
   */
  InsideCidrBlocks?: string[] | undefined;

  /**
   * The shared segments for a core network change value.
   *
   * @public
   */
  SharedSegments?: string[] | undefined;

  /**
   * Describes the service insertion action.
   *
   * @public
   */
  ServiceInsertionActions?: ServiceInsertionAction[] | undefined;

  /**
   * Indicates whether Equal Cost Multipath (ECMP) is enabled for the core network.
   *
   * @public
   */
  VpnEcmpSupport?: boolean | undefined;

  /**
   * Indicates whether public DNS support is supported. The default is `true`.
   *
   * @public
   */
  DnsSupport?: boolean | undefined;

  /**
   * Indicates whether security group referencing is enabled for the core network.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: boolean | undefined;

  /**
   * The routing policy direction (inbound/outbound) in the core network change values.
   *
   * @public
   */
  RoutingPolicyDirection?: RoutingPolicyDirection | undefined;

  /**
   * The routing policy configuration in the core network change values.
   *
   * @public
   */
  RoutingPolicy?: string | undefined;

  /**
   * The edge locations of peers in the core network change values.
   *
   * @public
   */
  PeerEdgeLocations?: string[] | undefined;

  /**
   * The attachment identifier in the core network change values.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The names of the routing policies and other association details in the core network change values.
   *
   * @public
   */
  RoutingPolicyAssociationDetails?: RoutingPolicyAssociationDetail[] | undefined;
}

/**
 * Details describing a core network change.
 *
 * @public
 */
export interface CoreNetworkChange {
  /**
   * The type of change.
   *
   * @public
   */
  Type?: ChangeType | undefined;

  /**
   * The action to take for a core network.
   *
   * @public
   */
  Action?: ChangeAction | undefined;

  /**
   * The resource identifier.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The previous values for a core network.
   *
   * @public
   */
  PreviousValues?: CoreNetworkChangeValues | undefined;

  /**
   * The new value for a core network
   *
   * @public
   */
  NewValues?: CoreNetworkChangeValues | undefined;

  /**
   * Uniquely identifies the path for a change within the changeset. For example, the `IdentifierPath` for a core network segment change might be `"CORE_NETWORK_SEGMENT/us-east-1/devsegment"`.
   *
   * @public
   */
  IdentifierPath?: string | undefined;
}

/**
 * Describes a core network change event.
 *
 * @public
 */
export interface CoreNetworkChangeEventValues {
  /**
   * The edge location for the core network change event.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The edge location of the peer in a core network change event.
   *
   * @public
   */
  PeerEdgeLocation?: string | undefined;

  /**
   * The routing policy direction (inbound/outbound) in a core network change event.
   *
   * @public
   */
  RoutingPolicyDirection?: RoutingPolicyDirection | undefined;

  /**
   * The segment name if the change event is associated with a segment.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * The changed network function group name.
   *
   * @public
   */
  NetworkFunctionGroupName?: string | undefined;

  /**
   * The ID of the attachment if the change event is associated with an attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * For a `STATIC_ROUTE` event, this is the IP address.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The names of the routing policies and other association details in a core network change event.
   *
   * @public
   */
  RoutingPolicyAssociationDetails?: RoutingPolicyAssociationDetail[] | undefined;
}

/**
 * Describes a core network change event. This can be a change to a segment, attachment, route, etc.
 *
 * @public
 */
export interface CoreNetworkChangeEvent {
  /**
   * Describes the type of change event.
   *
   * @public
   */
  Type?: ChangeType | undefined;

  /**
   * The action taken for the change event.
   *
   * @public
   */
  Action?: ChangeAction | undefined;

  /**
   * Uniquely identifies the path for a change within the changeset. For example, the `IdentifierPath` for a core network segment change might be `"CORE_NETWORK_SEGMENT/us-east-1/devsegment"`.
   *
   * @public
   */
  IdentifierPath?: string | undefined;

  /**
   * The timestamp for an event change in status.
   *
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * The status of the core network change event.
   *
   * @public
   */
  Status?: ChangeStatus | undefined;

  /**
   * Details of the change event.
   *
   * @public
   */
  Values?: CoreNetworkChangeEventValues | undefined;
}

/**
 * Describes a core network
 *
 * @public
 */
export interface CoreNetworkNetworkFunctionGroupIdentifier {
  /**
   * The ID of the core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The network function group name.
   *
   * @public
   */
  NetworkFunctionGroupName?: string | undefined;

  /**
   * The location for the core network edge.
   *
   * @public
   */
  EdgeLocation?: string | undefined;
}

/**
 * Provides details about an error in a core network policy.
 *
 * @public
 */
export interface CoreNetworkPolicyError {
  /**
   * The error code associated with a core network policy error.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The message associated with a core network policy error code.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The JSON path where the error was discovered in the policy document.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * Describes a core network policy. You can have only one LIVE Core Policy.
 *
 * @public
 */
export interface CoreNetworkPolicy {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the policy version.
   *
   * @public
   */
  PolicyVersionId?: number | undefined;

  /**
   * Whether a core network policy is the current LIVE policy or the most recently submitted policy.
   *
   * @public
   */
  Alias?: CoreNetworkPolicyAlias | undefined;

  /**
   * The description of a core network policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when a core network policy was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The state of a core network policy.
   *
   * @public
   */
  ChangeSetState?: ChangeSetState | undefined;

  /**
   * Describes any errors in a core network policy.
   *
   * @public
   */
  PolicyErrors?: CoreNetworkPolicyError[] | undefined;

  /**
   * Describes a core network policy.
   *
   * @public
   */
  PolicyDocument?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * Describes a core network policy version.
 *
 * @public
 */
export interface CoreNetworkPolicyVersion {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the policy version.
   *
   * @public
   */
  PolicyVersionId?: number | undefined;

  /**
   * Whether a core network policy is the current policy or the most recently submitted policy.
   *
   * @public
   */
  Alias?: CoreNetworkPolicyAlias | undefined;

  /**
   * The description of a core network policy version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when a core network policy version was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The status of the policy version change set.
   *
   * @public
   */
  ChangeSetState?: ChangeSetState | undefined;
}

/**
 * Information about the next hop for a route in the core network.
 *
 * @public
 */
export interface RoutingInformationNextHop {
  /**
   * The IP address of the next hop.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The ID of the core network attachment for the next hop.
   *
   * @public
   */
  CoreNetworkAttachmentId?: string | undefined;

  /**
   * The ID of the resource for the next hop.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource for the next hop.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The name of the segment for the next hop.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * The edge location for the next hop.
   *
   * @public
   */
  EdgeLocation?: string | undefined;
}

/**
 * Routing information for a core network, including route details and BGP attributes.
 *
 * @public
 */
export interface CoreNetworkRoutingInformation {
  /**
   * The IP prefix for the route.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The next hop information for the route.
   *
   * @public
   */
  NextHop?: RoutingInformationNextHop | undefined;

  /**
   * The BGP local preference value for the route.
   *
   * @public
   */
  LocalPreference?: string | undefined;

  /**
   * The BGP Multi-Exit Discriminator (MED) value for the route.
   *
   * @public
   */
  Med?: string | undefined;

  /**
   * The BGP AS path for the route.
   *
   * @public
   */
  AsPath?: string[] | undefined;

  /**
   * The BGP community values for the route.
   *
   * @public
   */
  Communities?: string[] | undefined;
}

/**
 * Returns details about a core network edge.
 *
 * @public
 */
export interface CoreNetworkSegmentEdgeIdentifier {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The name of the segment edge.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * The Region where the segment edge is located.
   *
   * @public
   */
  EdgeLocation?: string | undefined;
}

/**
 * Returns summary information about a core network.
 *
 * @public
 */
export interface CoreNetworkSummary {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * a core network ARN.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The global network ID.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of the account owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The state of a core network.
   *
   * @public
   */
  State?: CoreNetworkState | undefined;

  /**
   * The description of a core network.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key-value tags associated with a core network summary.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a NAT rule to configure on an attachment. Source addresses in the source CIDR block of traffic from the attachment are translated to the same host addresses in the NAT CIDR block. Traffic to an address in the NAT CIDR block is translated back to the matching address in the source CIDR block.
 *
 * @public
 */
export interface NatRuleRequest {
  /**
   * The rule number, from 1 to 32766. Each rule number must be unique for the attachment.
   *
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * The IPv4 CIDR block to match against the source address of traffic from the attachment. The CIDR block can't overlap with the multicast range (224.0.0.0/4).
   *
   * @public
   */
  MatchSourceCidr: string | undefined;

  /**
   * The IPv4 CIDR block to translate matching source addresses to. The prefix length must be the same as the prefix length of `MatchSourceCidr`. The CIDR block must be within a private (RFC 1918) or shared address space (RFC 6598) range. The CIDR blocks of the NAT rules of an attachment can't overlap with each other.
   *
   * @public
   */
  NatCidr: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectAttachmentRequest {
  /**
   * The ID of a core network where you want to create the attachment.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The Region where the edge is located.
   *
   * @public
   */
  EdgeLocation: string | undefined;

  /**
   * The ID of the attachment between the two connections.
   *
   * @public
   */
  TransportAttachmentId: string | undefined;

  /**
   * The routing policy label to apply to the Connect attachment for traffic routing decisions.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;

  /**
   * Specifies whether to enable NAT gateway support on the Connect attachment. NAT is supported only on Connect attachments that use the GRE tunnel protocol. Tunnel-less Connect attachments aren't supported. To enable NAT gateway support, you must also specify at least one NAT rule. If you don't specify a value, NAT gateway support is disabled. Only the core network owner can configure NAT on an attachment.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportValue | undefined;

  /**
   * The NAT rules for the Connect attachment, up to 50 rules.
   *
   * @public
   */
  NatGatewayRules?: NatRuleRequest[] | undefined;

  /**
   * Options for creating an attachment.
   *
   * @public
   */
  Options: ConnectAttachmentOptions | undefined;

  /**
   * The list of key-value tags associated with the request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectAttachmentResponse {
  /**
   * The response to a Connect attachment request.
   *
   * @public
   */
  ConnectAttachment?: ConnectAttachment | undefined;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the first device in the connection.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The ID of the second device in the connection.
   *
   * @public
   */
  ConnectedDeviceId: string | undefined;

  /**
   * The ID of the link for the first device.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The ID of the link for the second device.
   *
   * @public
   */
  ConnectedLinkId?: string | undefined;

  /**
   * A description of the connection.
   *
   * Length Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to apply to the resource during creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * Information about the connection.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface CreateConnectPeerRequest {
  /**
   * The ID of the connection attachment.
   *
   * @public
   */
  ConnectAttachmentId: string | undefined;

  /**
   * A Connect peer core network address. This only applies only when the protocol is `GRE`.
   *
   * @public
   */
  CoreNetworkAddress?: string | undefined;

  /**
   * The Connect peer address.
   *
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * The Connect peer BGP options. This only applies only when the protocol is `GRE`.
   *
   * @public
   */
  BgpOptions?: BgpOptions | undefined;

  /**
   * The inside IP addresses used for BGP peering.
   *
   * @public
   */
  InsideCidrBlocks?: string[] | undefined;

  /**
   * The tags associated with the peer request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The subnet ARN for the Connect peer. This only applies only when the protocol is NO_ENCAP.
   *
   * @public
   */
  SubnetArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectPeerResponse {
  /**
   * The response to the request.
   *
   * @public
   */
  ConnectPeer?: ConnectPeer | undefined;
}

/**
 * @public
 */
export interface CreateCoreNetworkRequest {
  /**
   * The ID of the global network that a core network will be a part of.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The description of a core network.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Key-value tags associated with a core network request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The policy document for creating a core network.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * The client token associated with a core network request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCoreNetworkResponse {
  /**
   * Returns details about a core network.
   *
   * @public
   */
  CoreNetwork?: CoreNetwork | undefined;
}

/**
 * @public
 */
export interface CreateCoreNetworkPrefixListAssociationRequest {
  /**
   * The ID of the core network to associate with the prefix list.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ARN of the prefix list to associate with the core network.
   *
   * @public
   */
  PrefixListArn: string | undefined;

  /**
   * An optional alias for the prefix list association.
   *
   * @public
   */
  PrefixListAlias: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCoreNetworkPrefixListAssociationResponse {
  /**
   * The ID of the core network associated with the prefix list.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of the prefix list that was associated with the core network.
   *
   * @public
   */
  PrefixListArn?: string | undefined;

  /**
   * The alias of the prefix list association, if provided.
   *
   * @public
   */
  PrefixListAlias?: string | undefined;
}

/**
 * Describes a location.
 *
 * @public
 */
export interface Location {
  /**
   * The physical address.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The latitude.
   *
   * @public
   */
  Latitude?: string | undefined;

  /**
   * The longitude.
   *
   * @public
   */
  Longitude?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeviceRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.
   *
   * @public
   */
  AWSLocation?: AWSLocation | undefined;

  /**
   * A description of the device.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of the device.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The vendor of the device.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  Vendor?: string | undefined;

  /**
   * The model of the device.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The serial number of the device.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The location of the device.
   *
   * @public
   */
  Location?: Location | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The tags to apply to the resource during creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a device.
 *
 * @public
 */
export interface Device {
  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  DeviceArn?: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The Amazon Web Services location of the device.
   *
   * @public
   */
  AWSLocation?: AWSLocation | undefined;

  /**
   * The description of the device.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The device type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The device vendor.
   *
   * @public
   */
  Vendor?: string | undefined;

  /**
   * The device model.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The device serial number.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The site location.
   *
   * @public
   */
  Location?: Location | undefined;

  /**
   * The site ID.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The date and time that the site was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The device state.
   *
   * @public
   */
  State?: DeviceState | undefined;

  /**
   * The tags for the device.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDeviceResponse {
  /**
   * Information about the device.
   *
   * @public
   */
  Device?: Device | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAttachmentRequest {
  /**
   * The ID of the Cloud WAN core network that the Direct Connect gateway attachment should be attached to.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ARN of the Direct Connect gateway attachment.
   *
   * @public
   */
  DirectConnectGatewayArn: string | undefined;

  /**
   * The routing policy label to apply to the Direct Connect Gateway attachment for traffic routing decisions.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;

  /**
   * One or more core network edge locations that the Direct Connect gateway attachment is associated with.
   *
   * @public
   */
  EdgeLocations: string[] | undefined;

  /**
   * Specifies whether to enable NAT gateway support on the Direct Connect gateway attachment. To enable NAT gateway support, you must also specify at least one NAT rule. If you don't specify a value, NAT gateway support is disabled. Only the core network owner can configure NAT on an attachment.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportValue | undefined;

  /**
   * Specifies whether the core network installs system routes for the NAT CIDR blocks of the attachment's NAT rules. System routes have a route type of `SYSTEM`. NAT is applied to traffic whether or not this option is enabled. The default is `true`.
   *
   * @public
   */
  NatSystemRouteSupport?: boolean | undefined;

  /**
   * The NAT rules for the Direct Connect gateway attachment, up to 50 rules.
   *
   * @public
   */
  NatGatewayRules?: NatRuleRequest[] | undefined;

  /**
   * The key value tags to apply to the Direct Connect gateway attachment during creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * client token
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes a Direct Connect gateway attachment.
 *
 * @public
 */
export interface DirectConnectGatewayAttachment {
  /**
   * Describes a core network attachment.
   *
   * @public
   */
  Attachment?: Attachment | undefined;

  /**
   * The Direct Connect gateway attachment ARN.
   *
   * @public
   */
  DirectConnectGatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectConnectGatewayAttachmentResponse {
  /**
   * Describes the details of a `CreateDirectConnectGatewayAttachment` request.
   *
   * @public
   */
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment | undefined;
}

/**
 * @public
 */
export interface CreateGlobalNetworkRequest {
  /**
   * A description of the global network.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to apply to the resource during creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network.
 *
 * @public
 */
export interface GlobalNetwork {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the global network.
   *
   * @public
   */
  GlobalNetworkArn?: string | undefined;

  /**
   * The description of the global network.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that the global network was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The state of the global network.
   *
   * @public
   */
  State?: GlobalNetworkState | undefined;

  /**
   * The tags for the global network.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGlobalNetworkResponse {
  /**
   * Information about the global network object.
   *
   * @public
   */
  GlobalNetwork?: GlobalNetwork | undefined;
}

/**
 * @public
 */
export interface CreateLinkRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * A description of the link.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of the link.
   *
   * Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The upload speed and download speed in Mbps.
   *
   * @public
   */
  Bandwidth: Bandwidth | undefined;

  /**
   * The provider of the link.
   *
   * Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^
   *
   * @public
   */
  Provider?: string | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId: string | undefined;

  /**
   * The tags to apply to the resource during creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a link.
 *
 * @public
 */
export interface Link {
  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the link.
   *
   * @public
   */
  LinkArn?: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The description of the link.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of the link.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The bandwidth for the link.
   *
   * @public
   */
  Bandwidth?: Bandwidth | undefined;

  /**
   * The provider of the link.
   *
   * @public
   */
  Provider?: string | undefined;

  /**
   * The date and time that the link was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The state of the link.
   *
   * @public
   */
  State?: LinkState | undefined;

  /**
   * The tags for the link.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLinkResponse {
  /**
   * Information about the link.
   *
   * @public
   */
  Link?: Link | undefined;
}

/**
 * @public
 */
export interface CreateSiteRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * A description of your site.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.
   *
   * - `Address`: The physical address of the site.
   * - `Latitude`: The latitude of the site.
   * - `Longitude`: The longitude of the site.
   *
   * @public
   */
  Location?: Location | undefined;

  /**
   * The tags to apply to the resource during creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a site.
 *
 * @public
 */
export interface Site {
  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the site.
   *
   * @public
   */
  SiteArn?: string | undefined;

  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The description of the site.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The location of the site.
   *
   * @public
   */
  Location?: Location | undefined;

  /**
   * The date and time that the site was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The state of the site.
   *
   * @public
   */
  State?: SiteState | undefined;

  /**
   * The tags for the site.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSiteResponse {
  /**
   * Information about the site.
   *
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface CreateSiteToSiteVpnAttachmentRequest {
  /**
   * The ID of a core network where you're creating a site-to-site VPN attachment.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ARN identifying the VPN attachment.
   *
   * @public
   */
  VpnConnectionArn: string | undefined;

  /**
   * The routing policy label to apply to the Site-to-Site VPN attachment for traffic routing decisions.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;

  /**
   * Specifies whether to enable NAT gateway support on the Site-to-Site VPN attachment. To enable NAT gateway support, you must also specify at least one NAT rule. If you don't specify a value, NAT gateway support is disabled. Only the core network owner can configure NAT on an attachment.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportValue | undefined;

  /**
   * Specifies whether the core network installs system routes for the NAT CIDR blocks of the attachment's NAT rules. System routes have a route type of `SYSTEM`. NAT is applied to traffic whether or not this option is enabled. The default is `true` for VPN connections that use BGP and `false` for VPN connections that use static routing. If the VPN connection uses static routing, you must specify `false` or omit this parameter.
   *
   * @public
   */
  NatSystemRouteSupport?: boolean | undefined;

  /**
   * The NAT rules for the Site-to-Site VPN attachment, up to 50 rules.
   *
   * @public
   */
  NatGatewayRules?: NatRuleRequest[] | undefined;

  /**
   * The tags associated with the request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Creates a site-to-site VPN attachment.
 *
 * @public
 */
export interface SiteToSiteVpnAttachment {
  /**
   * Provides details about a site-to-site VPN attachment.
   *
   * @public
   */
  Attachment?: Attachment | undefined;

  /**
   * The ARN of the site-to-site VPN attachment.
   *
   * @public
   */
  VpnConnectionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSiteToSiteVpnAttachmentResponse {
  /**
   * Details about a site-to-site VPN attachment.
   *
   * @public
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ARN of the transit gateway for the peering request.
   *
   * @public
   */
  TransitGatewayArn: string | undefined;

  /**
   * The list of key-value tags associated with the request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes additional information about missing permissions.
 *
 * @public
 */
export interface PermissionsErrorContext {
  /**
   * The missing permissions.
   *
   * @public
   */
  MissingPermission?: string | undefined;
}

/**
 * Describes an error associated with a peering request.
 *
 * @public
 */
export interface PeeringError {
  /**
   * The error code for the peering request.
   *
   * @public
   */
  Code?: PeeringErrorCode | undefined;

  /**
   * The message associated with the error `code`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The ARN of the requested peering resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The ID of the Peering request.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Provides additional information about missing permissions for the peering error.
   *
   * @public
   */
  MissingPermissionsContext?: PermissionsErrorContext | undefined;
}

/**
 * Describes a peering connection.
 *
 * @public
 */
export interface Peering {
  /**
   * The ID of the core network for the peering request.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of a core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The ID of the peering attachment.
   *
   * @public
   */
  PeeringId?: string | undefined;

  /**
   * The ID of the account owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The type of peering. This will be `TRANSIT_GATEWAY`.
   *
   * @public
   */
  PeeringType?: PeeringType | undefined;

  /**
   * The current state of the peering connection.
   *
   * @public
   */
  State?: PeeringState | undefined;

  /**
   * The edge location for the peer.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The resource ARN of the peer.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The list of key-value tags associated with the peering.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The timestamp when the attachment peer was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Describes the error associated with the peering request.
   *
   * @public
   */
  LastModificationErrors?: PeeringError[] | undefined;
}

/**
 * Describes a transit gateway peering attachment.
 *
 * @public
 */
export interface TransitGatewayPeering {
  /**
   * Describes a transit gateway peer connection.
   *
   * @public
   */
  Peering?: Peering | undefined;

  /**
   * The ARN of the transit gateway.
   *
   * @public
   */
  TransitGatewayArn?: string | undefined;

  /**
   * The ID of the transit gateway peering attachment.
   *
   * @public
   */
  TransitGatewayPeeringAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringResponse {
  /**
   * Returns information about the transit gateway peering connection request.
   *
   * @public
   */
  TransitGatewayPeering?: TransitGatewayPeering | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAttachmentRequest {
  /**
   * The ID of the peer for the
   *
   * @public
   */
  PeeringId: string | undefined;

  /**
   * The ARN of the transit gateway route table for the attachment request. For example, `"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"`.
   *
   * @public
   */
  TransitGatewayRouteTableArn: string | undefined;

  /**
   * The routing policy label to apply to the Transit Gateway route table attachment for traffic routing decisions.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;

  /**
   * The list of key-value tags associated with the request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes a transit gateway route table attachment.
 *
 * @public
 */
export interface TransitGatewayRouteTableAttachment {
  /**
   * Describes a core network attachment.
   *
   * @public
   */
  Attachment?: Attachment | undefined;

  /**
   * The ID of the peering attachment.
   *
   * @public
   */
  PeeringId?: string | undefined;

  /**
   * The ARN of the transit gateway attachment route table. For example, `"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"`.
   *
   * @public
   */
  TransitGatewayRouteTableArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAttachmentResponse {
  /**
   * The route table associated with the create transit gateway route table attachment request.
   *
   * @public
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment | undefined;
}

/**
 * Describes the VPC options.
 *
 * @public
 */
export interface VpcOptions {
  /**
   * Indicates whether IPv6 is supported.
   *
   * @public
   */
  Ipv6Support?: boolean | undefined;

  /**
   * Indicates whether appliance mode is supported. If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is `false`.
   *
   * @public
   */
  ApplianceModeSupport?: boolean | undefined;

  /**
   * Indicates whether DNS is supported.
   *
   * @public
   */
  DnsSupport?: boolean | undefined;

  /**
   * Indicates whether security group referencing is enabled for this VPC attachment. The default is `true`. However, at the core network policy-level the default is set to `false`.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateVpcAttachmentRequest {
  /**
   * The ID of a core network for the VPC attachment.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ARN of the VPC.
   *
   * @public
   */
  VpcArn: string | undefined;

  /**
   * The subnet ARN of the VPC attachment.
   *
   * @public
   */
  SubnetArns: string[] | undefined;

  /**
   * Options for the VPC attachment.
   *
   * @public
   */
  Options?: VpcOptions | undefined;

  /**
   * The routing policy label to apply to the VPC attachment for traffic routing decisions.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;

  /**
   * Specifies whether to enable NAT gateway support on the VPC attachment. To enable NAT gateway support, you must also specify at least one NAT rule. If you don't specify a value, NAT gateway support is disabled. Only the core network owner can configure NAT on an attachment.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportValue | undefined;

  /**
   * The NAT rules for the VPC attachment, up to 50 rules.
   *
   * @public
   */
  NatGatewayRules?: NatRuleRequest[] | undefined;

  /**
   * The key-value tags associated with the request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes a VPC attachment.
 *
 * @public
 */
export interface VpcAttachment {
  /**
   * Provides details about the VPC attachment.
   *
   * @public
   */
  Attachment?: Attachment | undefined;

  /**
   * The subnet ARNs.
   *
   * @public
   */
  SubnetArns?: string[] | undefined;

  /**
   * Provides details about the VPC attachment.
   *
   * @public
   */
  Options?: VpcOptions | undefined;
}

/**
 * @public
 */
export interface CreateVpcAttachmentResponse {
  /**
   * Provides details about the VPC attachment.
   *
   * @public
   */
  VpcAttachment?: VpcAttachment | undefined;
}

/**
 * @public
 */
export interface DeleteAttachmentRequest {
  /**
   * The ID of the attachment to delete.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttachmentResponse {
  /**
   * Information about the deleted attachment.
   *
   * @public
   */
  Attachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * Information about the connection.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DeleteConnectPeerRequest {
  /**
   * The ID of the deleted Connect peer.
   *
   * @public
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectPeerResponse {
  /**
   * Information about the deleted Connect peer.
   *
   * @public
   */
  ConnectPeer?: ConnectPeer | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkRequest {
  /**
   * The network ID of the deleted core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkResponse {
  /**
   * Information about the deleted core network.
   *
   * @public
   */
  CoreNetwork?: CoreNetwork | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPolicyVersionRequest {
  /**
   * The ID of a core network for the deleted policy.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The version ID of the deleted policy.
   *
   * @public
   */
  PolicyVersionId: number | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPolicyVersionResponse {
  /**
   * Returns information about the deleted policy version.
   *
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPrefixListAssociationRequest {
  /**
   * The ID of the core network from which to delete the prefix list association.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ARN of the prefix list to disassociate from the core network.
   *
   * @public
   */
  PrefixListArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPrefixListAssociationResponse {
  /**
   * The ID of the core network from which the prefix list association was deleted.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of the prefix list that was disassociated from the core network.
   *
   * @public
   */
  PrefixListArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceResponse {
  /**
   * Information about the device.
   *
   * @public
   */
  Device?: Device | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalNetworkRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalNetworkResponse {
  /**
   * Information about the global network.
   *
   * @public
   */
  GlobalNetwork?: GlobalNetwork | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkResponse {
  /**
   * Information about the link.
   *
   * @public
   */
  Link?: Link | undefined;
}

/**
 * @public
 */
export interface DeletePeeringRequest {
  /**
   * The ID of the peering connection to delete.
   *
   * @public
   */
  PeeringId: string | undefined;
}

/**
 * @public
 */
export interface DeletePeeringResponse {
  /**
   * Information about a deleted peering connection.
   *
   * @public
   */
  Peering?: Peering | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The ARN of the policy to delete.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteSiteRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSiteResponse {
  /**
   * Information about the site.
   *
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transit gateway.
   *
   * @public
   */
  TransitGatewayArn: string | undefined;
}

/**
 * Describes the status of a transit gateway registration.
 *
 * @public
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * The code for the state reason.
   *
   * @public
   */
  Code?: TransitGatewayRegistrationState | undefined;

  /**
   * The message for the state reason.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes the registration of a transit gateway to a global network.
 *
 * @public
 */
export interface TransitGatewayRegistration {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transit gateway.
   *
   * @public
   */
  TransitGatewayArn?: string | undefined;

  /**
   * The state of the transit gateway registration.
   *
   * @public
   */
  State?: TransitGatewayRegistrationStateReason | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayResponse {
  /**
   * The transit gateway registration information.
   *
   * @public
   */
  TransitGatewayRegistration?: TransitGatewayRegistration | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalNetworksRequest {
  /**
   * The IDs of one or more global networks. The maximum is 10.
   *
   * @public
   */
  GlobalNetworkIds?: string[] | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalNetworksResponse {
  /**
   * Information about the global networks.
   *
   * @public
   */
  GlobalNetworks?: GlobalNetwork[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectPeerRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the Connect peer to disassociate from a device.
   *
   * @public
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectPeerResponse {
  /**
   * Describes the Connect peer association.
   *
   * @public
   */
  ConnectPeerAssociation?: ConnectPeerAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomerGatewayRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer gateway.
   *
   * @public
   */
  CustomerGatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomerGatewayResponse {
  /**
   * Information about the customer gateway association.
   *
   * @public
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateLinkRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateLinkResponse {
  /**
   * Information about the link association.
   *
   * @public
   */
  LinkAssociation?: LinkAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayConnectPeerRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transit gateway Connect peer.
   *
   * @public
   */
  TransitGatewayConnectPeerArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayConnectPeerResponse {
  /**
   * The transit gateway Connect peer association.
   *
   * @public
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation | undefined;
}

/**
 * @public
 */
export interface ExecuteCoreNetworkChangeSetRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of the policy version.
   *
   * @public
   */
  PolicyVersionId: number | undefined;
}

/**
 * @public
 */
export interface ExecuteCoreNetworkChangeSetResponse {}

/**
 * @public
 */
export interface GetConnectAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectAttachmentResponse {
  /**
   * Details about the Connect attachment.
   *
   * @public
   */
  ConnectAttachment?: ConnectAttachment | undefined;
}

/**
 * @public
 */
export interface GetConnectionsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * One or more connection IDs.
   *
   * @public
   */
  ConnectionIds?: string[] | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionsResponse {
  /**
   * Information about the connections.
   *
   * @public
   */
  Connections?: Connection[] | undefined;

  /**
   * The token to use for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectPeerRequest {
  /**
   * The ID of the Connect peer.
   *
   * @public
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectPeerResponse {
  /**
   * Returns information about a core network Connect peer.
   *
   * @public
   */
  ConnectPeer?: ConnectPeer | undefined;
}

/**
 * @public
 */
export interface GetConnectPeerAssociationsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The IDs of the Connect peers.
   *
   * @public
   */
  ConnectPeerIds?: string[] | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectPeerAssociationsResponse {
  /**
   * Displays a list of Connect peer associations.
   *
   * @public
   */
  ConnectPeerAssociations?: ConnectPeerAssociation[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkResponse {
  /**
   * Details about a core network.
   *
   * @public
   */
  CoreNetwork?: CoreNetwork | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeEventsRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of the policy version.
   *
   * @public
   */
  PolicyVersionId: number | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeEventsResponse {
  /**
   * The response to `GetCoreNetworkChangeEventsRequest`.
   *
   * @public
   */
  CoreNetworkChangeEvents?: CoreNetworkChangeEvent[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeSetRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of the policy version.
   *
   * @public
   */
  PolicyVersionId: number | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeSetResponse {
  /**
   * Describes a core network changes.
   *
   * @public
   */
  CoreNetworkChanges?: CoreNetworkChange[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkPolicyRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of a core network policy version.
   *
   * @public
   */
  PolicyVersionId?: number | undefined;

  /**
   * The alias of a core network policy
   *
   * @public
   */
  Alias?: CoreNetworkPolicyAlias | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkPolicyResponse {
  /**
   * The details about a core network policy.
   *
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy | undefined;
}

/**
 * @public
 */
export interface GetCustomerGatewayAssociationsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.
   *
   * @public
   */
  CustomerGatewayArns?: string[] | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCustomerGatewayAssociationsResponse {
  /**
   * The customer gateway associations.
   *
   * @public
   */
  CustomerGatewayAssociations?: CustomerGatewayAssociation[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDevicesRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * One or more device IDs. The maximum is 10.
   *
   * @public
   */
  DeviceIds?: string[] | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDevicesResponse {
  /**
   * The devices.
   *
   * @public
   */
  Devices?: Device[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDirectConnectGatewayAttachmentRequest {
  /**
   * The ID of the Direct Connect gateway attachment that you want to see details about.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetDirectConnectGatewayAttachmentResponse {
  /**
   * Shows details about the Direct Connect gateway attachment.
   *
   * @public
   */
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment | undefined;
}

/**
 * @public
 */
export interface GetLinkAssociationsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLinkAssociationsResponse {
  /**
   * The link associations.
   *
   * @public
   */
  LinkAssociations?: LinkAssociation[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLinksRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * One or more link IDs. The maximum is 10.
   *
   * @public
   */
  LinkIds?: string[] | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;

  /**
   * The link type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The link provider.
   *
   * @public
   */
  Provider?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLinksResponse {
  /**
   * The links.
   *
   * @public
   */
  Links?: Link[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourceCountsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The resource type.
   *
   * The following are the supported resource types for Direct Connect:
   *
   * - `dxcon`
   * - `dx-gateway`
   * - `dx-vif`
   *
   * The following are the supported resource types for Network Manager:
   *
   * - `attachment`
   * - `connect-peer`
   * - `connection`
   * - `core-network`
   * - `device`
   * - `link`
   * - `peering`
   * - `site`
   *
   * The following are the supported resource types for Amazon VPC:
   *
   * - `customer-gateway`
   * - `transit-gateway`
   * - `transit-gateway-attachment`
   * - `transit-gateway-connect-peer`
   * - `transit-gateway-route-table`
   * - `vpn-connection`
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a resource count.
 *
 * @public
 */
export interface NetworkResourceCount {
  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The resource count.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourceCountsResponse {
  /**
   * The count of resources.
   *
   * @public
   */
  NetworkResourceCounts?: NetworkResourceCount[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourceRelationshipsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of the registered gateway.
   *
   * @public
   */
  RegisteredGatewayArn?: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The resource type.
   *
   * The following are the supported resource types for Direct Connect:
   *
   * - `dxcon`
   * - `dx-gateway`
   * - `dx-vif`
   *
   * The following are the supported resource types for Network Manager:
   *
   * - `attachment`
   * - `connect-peer`
   * - `connection`
   * - `core-network`
   * - `device`
   * - `link`
   * - `peering`
   * - `site`
   *
   * The following are the supported resource types for Amazon VPC:
   *
   * - `customer-gateway`
   * - `transit-gateway`
   * - `transit-gateway-attachment`
   * - `transit-gateway-connect-peer`
   * - `transit-gateway-route-table`
   * - `vpn-connection`
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ARN of the gateway.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a resource relationship.
 *
 * @public
 */
export interface Relationship {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  From?: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  To?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourceRelationshipsResponse {
  /**
   * The resource relationships.
   *
   * @public
   */
  Relationships?: Relationship[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourcesRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of the gateway.
   *
   * @public
   */
  RegisteredGatewayArn?: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The resource type.
   *
   * The following are the supported resource types for Direct Connect:
   *
   * - `dxcon`
   * - `dx-gateway`
   * - `dx-vif`
   *
   * The following are the supported resource types for Network Manager:
   *
   * - `attachment`
   * - `connect-peer`
   * - `connection`
   * - `core-network`
   * - `device`
   * - `link`
   * - `peering`
   * - `site`
   *
   * The following are the supported resource types for Amazon VPC:
   *
   * - `customer-gateway`
   * - `transit-gateway`
   * - `transit-gateway-attachment`
   * - `transit-gateway-connect-peer`
   * - `transit-gateway-route-table`
   * - `vpn-connection`
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a network resource.
 *
 * @public
 */
export interface NetworkResource {
  /**
   * The ARN of the gateway.
   *
   * @public
   */
  RegisteredGatewayArn?: string | undefined;

  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The resource type.
   *
   * The following are the supported resource types for Direct Connect:
   *
   * - `dxcon`
   * - `dx-gateway`
   * - `dx-vif`
   *
   * The following are the supported resource types for Network Manager:
   *
   * - `attachment`
   * - `connect-peer`
   * - `connection`
   * - `core-network`
   * - `device`
   * - `link`
   * - `peering`
   * - `site`
   *
   * The following are the supported resource types for Amazon VPC:
   *
   * - `customer-gateway`
   * - `transit-gateway`
   * - `transit-gateway-attachment`
   * - `transit-gateway-connect-peer`
   * - `transit-gateway-route-table`
   * - `vpn-connection`
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.
   *
   * @public
   */
  Definition?: string | undefined;

  /**
   * The time that the resource definition was retrieved.
   *
   * @public
   */
  DefinitionTimestamp?: Date | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The resource metadata.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetNetworkResourcesResponse {
  /**
   * The network resources.
   *
   * @public
   */
  NetworkResources?: NetworkResource[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a route table.
 *
 * @public
 */
export interface RouteTableIdentifier {
  /**
   * The ARN of the transit gateway route table for the attachment request. For example, `"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"`.
   *
   * @public
   */
  TransitGatewayRouteTableArn?: string | undefined;

  /**
   * The segment edge in a core network.
   *
   * @public
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier | undefined;

  /**
   * The route table identifier associated with the network function group.
   *
   * @public
   */
  CoreNetworkNetworkFunctionGroup?: CoreNetworkNetworkFunctionGroupIdentifier | undefined;
}

/**
 * @public
 */
export interface GetNetworkRoutesRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableIdentifier: RouteTableIdentifier | undefined;

  /**
   * An exact CIDR block.
   *
   * @public
   */
  ExactCidrMatches?: string[] | undefined;

  /**
   * The most specific route that matches the traffic (longest prefix match).
   *
   * @public
   */
  LongestPrefixMatches?: string[] | undefined;

  /**
   * The routes with a subnet that match the specified CIDR filter.
   *
   * @public
   */
  SubnetOfMatches?: string[] | undefined;

  /**
   * The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.
   *
   * @public
   */
  SupernetOfMatches?: string[] | undefined;

  /**
   * The IDs of the prefix lists.
   *
   * @public
   */
  PrefixListIds?: string[] | undefined;

  /**
   * The route states.
   *
   * @public
   */
  States?: RouteState[] | undefined;

  /**
   * The route types.
   *
   * @public
   */
  Types?: RouteType[] | undefined;

  /**
   * Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.
   *
   * @public
   */
  DestinationFilters?: Record<string, string[]> | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the destination of a network route.
 *
 * @public
 */
export interface NetworkRouteDestination {
  /**
   * The ID of a core network attachment.
   *
   * @public
   */
  CoreNetworkAttachmentId?: string | undefined;

  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The name of the segment.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * The network function group name associated with the destination.
   *
   * @public
   */
  NetworkFunctionGroupName?: string | undefined;

  /**
   * The edge location for the network destination.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * Describes a network route.
 *
 * @public
 */
export interface NetworkRoute {
  /**
   * A unique identifier for the route, such as a CIDR block.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The destinations.
   *
   * @public
   */
  Destinations?: NetworkRouteDestination[] | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The route state. The possible values are `active` and `blackhole`.
   *
   * @public
   */
  State?: RouteState | undefined;

  /**
   * The route type. The possible values are `PROPAGATED`, `STATIC`, and `SYSTEM`. A `SYSTEM` route is installed by the core network for the NAT CIDR block of an attachment's NAT rule.
   *
   * @public
   */
  Type?: RouteType | undefined;
}

/**
 * @public
 */
export interface GetNetworkRoutesResponse {
  /**
   * The ARN of the route table.
   *
   * @public
   */
  RouteTableArn?: string | undefined;

  /**
   * Describes a core network segment edge.
   *
   * @public
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier | undefined;

  /**
   * Describes the network function group route table that the routes are from. This field is present only when you specify `CoreNetworkNetworkFunctionGroup` in `RouteTableIdentifier`.
   *
   * @public
   */
  CoreNetworkNetworkFunctionGroup?: CoreNetworkNetworkFunctionGroupIdentifier | undefined;

  /**
   * The route table type.
   *
   * @public
   */
  RouteTableType?: RouteTableType | undefined;

  /**
   * The route table creation time.
   *
   * @public
   */
  RouteTableTimestamp?: Date | undefined;

  /**
   * The network routes.
   *
   * @public
   */
  NetworkRoutes?: NetworkRoute[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkTelemetryRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of the gateway.
   *
   * @public
   */
  RegisteredGatewayArn?: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The resource type. The following are the supported resource types:
   *
   * - `connect-peer`
   * - `transit-gateway-connect-peer`
   * - `vpn-connection`
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the telemetry information for a resource.
 *
 * @public
 */
export interface NetworkTelemetry {
  /**
   * The ARN of the gateway.
   *
   * @public
   */
  RegisteredGatewayArn?: string | undefined;

  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The address.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The connection health.
   *
   * @public
   */
  Health?: ConnectionHealth | undefined;
}

/**
 * @public
 */
export interface GetNetworkTelemetryResponse {
  /**
   * The network telemetry.
   *
   * @public
   */
  NetworkTelemetry?: NetworkTelemetry[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The resource policy document.
   *
   * @public
   */
  PolicyDocument?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface GetRouteAnalysisRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the route analysis.
   *
   * @public
   */
  RouteAnalysisId: string | undefined;
}

/**
 * Describes a source or a destination.
 *
 * @public
 */
export interface RouteAnalysisEndpointOptions {
  /**
   * The ARN of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentArn?: string | undefined;

  /**
   * The ARN of the transit gateway.
   *
   * @public
   */
  TransitGatewayArn?: string | undefined;

  /**
   * The IP address.
   *
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * Describes the status of an analysis at completion.
 *
 * @public
 */
export interface RouteAnalysisCompletion {
  /**
   * The result of the analysis. If the status is `NOT_CONNECTED`, check the reason code.
   *
   * @public
   */
  ResultCode?: RouteAnalysisCompletionResultCode | undefined;

  /**
   * The reason code. Available only if a connection is not found.
   *
   * - `BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND` - Found a black hole route with the destination CIDR block.
   * - `CYCLIC_PATH_DETECTED` - Found the same resource multiple times while traversing the path.
   * - `INACTIVE_ROUTE_FOR_DESTINATION_FOUND` - Found an inactive route with the destination CIDR block.
   * - `MAX_HOPS_EXCEEDED` - Analysis exceeded 64 hops without finding the destination.
   * - `ROUTE_NOT_FOUND` - Cannot find a route table with the destination CIDR block.
   * - `TGW_ATTACH_ARN_NO_MATCH` - Found an attachment, but not with the correct destination ARN.
   * - `TGW_ATTACH_NOT_FOUND` - Cannot find an attachment.
   * - `TGW_ATTACH_NOT_IN_TGW` - Found an attachment, but not to the correct transit gateway.
   * - `TGW_ATTACH_STABLE_ROUTE_TABLE_NOT_FOUND` - The state of the route table association is not associated.
   *
   * @public
   */
  ReasonCode?: RouteAnalysisCompletionReasonCode | undefined;

  /**
   * Additional information about the path. Available only if a connection is not found.
   *
   * @public
   */
  ReasonContext?: Record<string, string> | undefined;
}

/**
 * Describes a network resource.
 *
 * @public
 */
export interface NetworkResourceSummary {
  /**
   * The ARN of the gateway.
   *
   * @public
   */
  RegisteredGatewayArn?: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.
   *
   * @public
   */
  Definition?: string | undefined;

  /**
   * The value for the Name tag.
   *
   * @public
   */
  NameTag?: string | undefined;

  /**
   * Indicates whether this is a middlebox appliance.
   *
   * @public
   */
  IsMiddlebox?: boolean | undefined;
}

/**
 * Describes a path component.
 *
 * @public
 */
export interface PathComponent {
  /**
   * The sequence number in the path. The destination is 0.
   *
   * @public
   */
  Sequence?: number | undefined;

  /**
   * The resource.
   *
   * @public
   */
  Resource?: NetworkResourceSummary | undefined;

  /**
   * The destination CIDR block in the route table.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;
}

/**
 * Describes a route analysis path.
 *
 * @public
 */
export interface RouteAnalysisPath {
  /**
   * The status of the analysis at completion.
   *
   * @public
   */
  CompletionStatus?: RouteAnalysisCompletion | undefined;

  /**
   * The route analysis path.
   *
   * @public
   */
  Path?: PathComponent[] | undefined;
}

/**
 * Describes a route analysis.
 *
 * @public
 */
export interface RouteAnalysis {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId?: string | undefined;

  /**
   * The ID of the AWS account that created the route analysis.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The ID of the route analysis.
   *
   * @public
   */
  RouteAnalysisId?: string | undefined;

  /**
   * The time that the analysis started.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The status of the route analysis.
   *
   * @public
   */
  Status?: RouteAnalysisStatus | undefined;

  /**
   * The source.
   *
   * @public
   */
  Source?: RouteAnalysisEndpointOptions | undefined;

  /**
   * The destination.
   *
   * @public
   */
  Destination?: RouteAnalysisEndpointOptions | undefined;

  /**
   * Indicates whether to analyze the return path. The return path is not analyzed if the forward path analysis does not succeed.
   *
   * @public
   */
  IncludeReturnPath?: boolean | undefined;

  /**
   * Indicates whether to include the location of middlebox appliances in the route analysis.
   *
   * @public
   */
  UseMiddleboxes?: boolean | undefined;

  /**
   * The forward path.
   *
   * @public
   */
  ForwardPath?: RouteAnalysisPath | undefined;

  /**
   * The return path.
   *
   * @public
   */
  ReturnPath?: RouteAnalysisPath | undefined;
}

/**
 * @public
 */
export interface GetRouteAnalysisResponse {
  /**
   * The route analysis.
   *
   * @public
   */
  RouteAnalysis?: RouteAnalysis | undefined;
}

/**
 * @public
 */
export interface GetSitesRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * One or more site IDs. The maximum is 10.
   *
   * @public
   */
  SiteIds?: string[] | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSitesResponse {
  /**
   * The sites.
   *
   * @public
   */
  Sites?: Site[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSiteToSiteVpnAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetSiteToSiteVpnAttachmentResponse {
  /**
   * Describes the site-to-site attachment.
   *
   * @public
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * One or more transit gateway Connect peer Amazon Resource Names (ARNs).
   *
   * @public
   */
  TransitGatewayConnectPeerArns?: string[] | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * Information about the transit gateway Connect peer associations.
   *
   * @public
   */
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[] | undefined;

  /**
   * The token to use for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPeeringRequest {
  /**
   * The ID of the peering request.
   *
   * @public
   */
  PeeringId: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPeeringResponse {
  /**
   * Returns information about a transit gateway peering.
   *
   * @public
   */
  TransitGatewayPeering?: TransitGatewayPeering | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRegistrationsRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is 10.
   *
   * @public
   */
  TransitGatewayArns?: string[] | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRegistrationsResponse {
  /**
   * The transit gateway registrations.
   *
   * @public
   */
  TransitGatewayRegistrations?: TransitGatewayRegistration[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAttachmentRequest {
  /**
   * The ID of the transit gateway route table attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAttachmentResponse {
  /**
   * Returns information about the transit gateway route table attachment.
   *
   * @public
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment | undefined;
}

/**
 * @public
 */
export interface GetVpcAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetVpcAttachmentResponse {
  /**
   * Returns details about a VPC attachment.
   *
   * @public
   */
  VpcAttachment?: VpcAttachment | undefined;
}

/**
 * @public
 */
export interface ListAttachmentNatConfigurationsRequest {
  /**
   * The ID of a core network. Returns the NAT configurations of attachments in the core network that support NAT.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of an attachment. Returns the NAT configuration of the specified attachment. If you specify both an attachment ID and a core network ID, the attachment ID is used.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The filters to apply to the results. Values for the same filter are joined with OR, and different filters are joined with AND. You can specify up to 10 filter values in total. The following filters are supported:
   *
   * - `nat-gateway-support`: The state of NAT gateway support on the attachment, for example `ENABLED`.
   * - `nat-system-route-support`: Whether system routes are installed for the attachment, `true` or `false`.
   * - `rule-number`: The rule number of a NAT rule.
   * - `match-source-cidr`: The source CIDR block of a NAT rule. The value must exactly match the CIDR block of the rule.
   * - `nat-cidr`: The NAT CIDR block of a NAT rule. The value must exactly match the CIDR block of the rule.
   * - `nat-rule-state`: The state of a NAT rule, for example `ACTIVATED`.
   *
   * @public
   */
  Filters?: Record<string, string[]> | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachmentNatConfigurationsResponse {
  /**
   * The NAT configurations of the attachments.
   *
   * @public
   */
  AttachmentNatConfigurations: AttachmentNatConfiguration[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachmentRoutingPolicyAssociationsRequest {
  /**
   * The ID of the core network to list attachment routing policy associations for.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of a specific attachment to filter the routing policy associations.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The maximum number of results to return in a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachmentRoutingPolicyAssociationsResponse {
  /**
   * The list of attachment routing policy associations.
   *
   * @public
   */
  AttachmentRoutingPolicyAssociations?: AttachmentRoutingPolicyAssociationSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The type of attachment.
   *
   * @public
   */
  AttachmentType?: AttachmentType | undefined;

  /**
   * The Region where the edge is located.
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * The state of the attachment.
   *
   * @public
   */
  State?: AttachmentState | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsResponse {
  /**
   * Describes the list of attachments.
   *
   * @public
   */
  Attachments?: Attachment[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectPeersRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  ConnectAttachmentId?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectPeersResponse {
  /**
   * Describes the Connect peers.
   *
   * @public
   */
  ConnectPeers?: ConnectPeerSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworkPolicyVersionsRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworkPolicyVersionsResponse {
  /**
   * Describes core network policy versions.
   *
   * @public
   */
  CoreNetworkPolicyVersions?: CoreNetworkPolicyVersion[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworkPrefixListAssociationsRequest {
  /**
   * The ID of the core network to list prefix list associations for.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ARN of a specific prefix list to filter the associations.
   *
   * @public
   */
  PrefixListArn?: string | undefined;

  /**
   * The maximum number of results to return in a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a prefix list association with a core network.
 *
 * @public
 */
export interface PrefixListAssociation {
  /**
   * The ID of the core network in the association.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ARN of the prefix list in the association.
   *
   * @public
   */
  PrefixListArn?: string | undefined;

  /**
   * The alias of the prefix list in the association.
   *
   * @public
   */
  PrefixListAlias?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworkPrefixListAssociationsResponse {
  /**
   * The list of prefix list associations for the core network.
   *
   * @public
   */
  PrefixListAssociations?: PrefixListAssociation[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworkRoutingInformationRequest {
  /**
   * The ID of the core network to retrieve routing information for.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The name of the segment to filter routing information by.
   *
   * @public
   */
  SegmentName: string | undefined;

  /**
   * The edge location to filter routing information by.
   *
   * @public
   */
  EdgeLocation: string | undefined;

  /**
   * Filters to apply based on next hop information. Each filter value must exactly match the corresponding next hop value. Values for the same filter are joined with OR, and different filters are joined with AND. The following filters are supported:
   *
   * - `core-network-attachment-id`: The ID of the core network attachment for the next hop, for example `attachment-0123456789abcdef0`.
   * - `segment-name`: The name of the segment for the next hop.
   * - `edge-location`: The edge location for the next hop, for example `us-east-1`.
   * - `resource-id`: The ID of the resource for the next hop.
   * - `resource-type`: The type of resource for the next hop. The possible values are `vpc`, `vpn`, `connect-peer`, `direct-connect-gateway`, `transit-gateway-route-table`, `attachment`, and `blackhole`.
   * - `ip-address`: The IP address of the next hop. For a Site-to-Site VPN next hop, this is the outside IP address of the AWS side of the VPN tunnel. For a Connect peer next hop, this is the core network BGP address of the Connect peer. The value must be a single IPv4 or IPv6 address.
   *
   * You can specify up to 10 filter values in total across `NextHopFilters` and the other match parameters in the request. Each filter value can be up to 256 characters.
   *
   * @public
   */
  NextHopFilters?: Record<string, string[]> | undefined;

  /**
   * Exact prefix values to match when filtering routing information.
   *
   * @public
   */
  ExactPrefixMatches?: string[] | undefined;

  /**
   * Filters routing information based on the longest prefix that matches each provided IP address.
   *
   * @public
   */
  LongestPrefixMatches?: string[] | undefined;

  /**
   * Prefix values to filter routing information whose prefix is a subnet of the prefixes provided.
   *
   * @public
   */
  SubnetOfMatches?: string[] | undefined;

  /**
   * Prefix values to filter routing information whose prefix is a supernet of the prefixes provided.
   *
   * @public
   */
  SupernetOfMatches?: string[] | undefined;

  /**
   * Local preference values to match when filtering routing information.
   *
   * @public
   */
  LocalPreferenceMatches?: string[] | undefined;

  /**
   * Exact AS path values to match when filtering routing information.
   *
   * @public
   */
  ExactAsPathMatches?: string[] | undefined;

  /**
   * Multi-Exit Discriminator (MED) values to match when filtering routing information.
   *
   * @public
   */
  MedMatches?: string[] | undefined;

  /**
   * BGP community values to match when filtering routing information.
   *
   * @public
   */
  CommunityMatches?: string[] | undefined;

  /**
   * The maximum number of routing information entries to return in a single page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworkRoutingInformationResponse {
  /**
   * The list of routing information for the core network.
   *
   * @public
   */
  CoreNetworkRoutingInformation?: CoreNetworkRoutingInformation[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworksRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreNetworksResponse {
  /**
   * Describes the list of core networks.
   *
   * @public
   */
  CoreNetworks?: CoreNetworkSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationServiceAccessStatusRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The status of an Amazon Web Services Organization and the accounts within that organization.
 *
 * @public
 */
export interface OrganizationStatus {
  /**
   * The ID of an Amazon Web Services Organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The status of the organization's AWS service access. This will be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  OrganizationAwsServiceAccessStatus?: string | undefined;

  /**
   * The status of the SLR deployment for the account. This will be either `SUCCEEDED` or `IN_PROGRESS`.
   *
   * @public
   */
  SLRDeploymentStatus?: string | undefined;

  /**
   * The current service-linked role (SLR) deployment status for an Amazon Web Services Organization's accounts. This will be either `SUCCEEDED` or `IN_PROGRESS`.
   *
   * @public
   */
  AccountStatusList?: AccountStatus[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationServiceAccessStatusResponse {
  /**
   * Displays the status of an Amazon Web Services Organization.
   *
   * @public
   */
  OrganizationStatus?: OrganizationStatus | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPeeringsRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * Returns a list of a peering requests.
   *
   * @public
   */
  PeeringType?: PeeringType | undefined;

  /**
   * Returns a list edge locations for the
   *
   * @public
   */
  EdgeLocation?: string | undefined;

  /**
   * Returns a list of the peering request states.
   *
   * @public
   */
  State?: PeeringState | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPeeringsResponse {
  /**
   * Lists the transit gateway peerings for the `ListPeerings` request.
   *
   * @public
   */
  Peerings?: Peering[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAttachmentRoutingPolicyLabelRequest {
  /**
   * The ID of the core network containing the attachment.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of the attachment to apply the routing policy label to.
   *
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * The routing policy label to apply to the attachment.
   *
   * @public
   */
  RoutingPolicyLabel: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAttachmentRoutingPolicyLabelResponse {
  /**
   * The ID of the core network containing the attachment.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the attachment that received the routing policy label.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The routing policy label that was applied to the attachment.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;
}

/**
 * @public
 */
export interface PutCoreNetworkPolicyRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The policy document.
   *
   * @public
   */
  PolicyDocument: __AutomaticJsonStringConversion | string | undefined;

  /**
   * a core network policy description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of a core network policy.
   *
   * @public
   */
  LatestVersionId?: number | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutCoreNetworkPolicyResponse {
  /**
   * Describes the changed core network policy.
   *
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The JSON resource policy document.
   *
   * @public
   */
  PolicyDocument: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The ARN of the resource policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * @public
 */
export interface RegisterTransitGatewayRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transit gateway.
   *
   * @public
   */
  TransitGatewayArn: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayResponse {
  /**
   * Information about the transit gateway registration.
   *
   * @public
   */
  TransitGatewayRegistration?: TransitGatewayRegistration | undefined;
}

/**
 * @public
 */
export interface RejectAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface RejectAttachmentResponse {
  /**
   * Describes the rejected attachment request.
   *
   * @public
   */
  Attachment?: Attachment | undefined;
}

/**
 * @public
 */
export interface RemoveAttachmentRoutingPolicyLabelRequest {
  /**
   * The ID of the core network containing the attachment.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of the attachment to remove the routing policy label from.
   *
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface RemoveAttachmentRoutingPolicyLabelResponse {
  /**
   * The ID of the core network containing the attachment.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the attachment from which the routing policy label was removed.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The routing policy label that was removed from the attachment.
   *
   * @public
   */
  RoutingPolicyLabel?: string | undefined;
}

/**
 * @public
 */
export interface RestoreCoreNetworkPolicyVersionRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The ID of the policy version to restore.
   *
   * @public
   */
  PolicyVersionId: number | undefined;
}

/**
 * @public
 */
export interface RestoreCoreNetworkPolicyVersionResponse {
  /**
   * Describes the restored core network policy.
   *
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy | undefined;
}

/**
 * @public
 */
export interface StartOrganizationServiceAccessUpdateRequest {
  /**
   * The action to take for the update request. This can be either `ENABLE` or `DISABLE`.
   *
   * @public
   */
  Action: string | undefined;
}

/**
 * @public
 */
export interface StartOrganizationServiceAccessUpdateResponse {
  /**
   * The status of the service access update request for an Amazon Web Services Organization.
   *
   * @public
   */
  OrganizationStatus?: OrganizationStatus | undefined;
}

/**
 * Describes a source or a destination.
 *
 * @public
 */
export interface RouteAnalysisEndpointOptionsSpecification {
  /**
   * The ARN of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentArn?: string | undefined;

  /**
   * The IP address.
   *
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * @public
 */
export interface StartRouteAnalysisRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The source from which traffic originates.
   *
   * @public
   */
  Source: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * The destination.
   *
   * @public
   */
  Destination: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * Indicates whether to analyze the return path. The default is `false`.
   *
   * @public
   */
  IncludeReturnPath?: boolean | undefined;

  /**
   * Indicates whether to include the location of middlebox appliances in the route analysis. The default is `false`.
   *
   * @public
   */
  UseMiddleboxes?: boolean | undefined;
}

/**
 * @public
 */
export interface StartRouteAnalysisResponse {
  /**
   * The route analysis.
   *
   * @public
   */
  RouteAnalysis?: RouteAnalysis | undefined;
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
  ResourceArn: string | undefined;

  /**
   * The tags to apply to the specified resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
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
  ResourceArn: string | undefined;

  /**
   * The tag keys to remove from the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAttachmentNatConfigurationRequest {
  /**
   * The ID of the attachment to update the NAT configuration for.
   *
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * Specifies whether to enable or disable NAT gateway support on the attachment. When you disable NAT gateway support, the attachment keeps its NAT rules but doesn't apply them. To enable NAT gateway support, the attachment must have at least one NAT rule, either specified in this request or already configured on the attachment. If you omit this parameter, NAT gateway support is unchanged.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportValue | undefined;

  /**
   * Specifies whether the core network installs system routes for the NAT CIDR blocks of the attachment's NAT rules. System routes have a route type of `SYSTEM`. NAT is applied to traffic whether or not this option is enabled. If you omit this parameter, the current value is unchanged.
   *
   * @public
   */
  NatSystemRouteSupport?: boolean | undefined;

  /**
   * The complete set of NAT rules for the attachment, up to 50 rules. The rules that you specify replace the existing rules of the attachment, matched by rule number. Existing rules that aren't included in the request are deleted. To delete all NAT rules, specify an empty list. You can delete all NAT rules only when NAT gateway support is disabled, or when you disable it in the same request. If you omit this parameter, the existing rules are unchanged.
   *
   * @public
   */
  NatGatewayRules?: NatRuleRequest[] | undefined;

  /**
   * The client token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAttachmentNatConfigurationResponse {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The state of NAT gateway support on the attachment. The transitional states `ENABLING` and `DISABLING` change to `ENABLED` or `DISABLED` after the update is applied. The state is `PENDING_ATTACHMENT_ACCEPTANCE` when NAT gateway support is enabled on an attachment that is pending acceptance.
   *
   * @public
   */
  NatGatewaySupport?: NatGatewaySupportState | undefined;

  /**
   * Indicates whether the core network installs system routes for the NAT CIDR blocks of the attachment's NAT rules.
   *
   * @public
   */
  NatSystemRouteSupport?: boolean | undefined;

  /**
   * The NAT rules of the attachment, including rules that are being deleted.
   *
   * @public
   */
  NatGatewayRules?: NatRule[] | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the connection.
   *
   * @public
   */
  ConnectionId: string | undefined;

  /**
   * The ID of the link for the first device in the connection.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The ID of the link for the second device in the connection.
   *
   * @public
   */
  ConnectedLinkId?: string | undefined;

  /**
   * A description of the connection.
   *
   * Length Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * Information about the connection.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface UpdateCoreNetworkRequest {
  /**
   * The ID of a core network.
   *
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * The description of the update.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCoreNetworkResponse {
  /**
   * Returns information about a core network update.
   *
   * @public
   */
  CoreNetwork?: CoreNetwork | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.
   *
   * @public
   */
  AWSLocation?: AWSLocation | undefined;

  /**
   * A description of the device.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of the device.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The vendor of the device.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  Vendor?: string | undefined;

  /**
   * The model of the device.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The serial number of the device.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * Describes a location.
   *
   * @public
   */
  Location?: Location | undefined;

  /**
   * The ID of the site.
   *
   * @public
   */
  SiteId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {
  /**
   * Information about the device.
   *
   * @public
   */
  Device?: Device | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAttachmentRequest {
  /**
   * The ID of the Direct Connect gateway attachment for the updated edge locations.
   *
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * One or more edge locations to update for the Direct Connect gateway attachment. The updated array of edge locations overwrites the previous array of locations. `EdgeLocations` is only used for Direct Connect gateway attachments.
   *
   * @public
   */
  EdgeLocations?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDirectConnectGatewayAttachmentResponse {
  /**
   * Returns details of the Direct Connect gateway attachment with the updated edge locations.
   *
   * @public
   */
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalNetworkRequest {
  /**
   * The ID of your global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * A description of the global network.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalNetworkResponse {
  /**
   * Information about the global network object.
   *
   * @public
   */
  GlobalNetwork?: GlobalNetwork | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of the link.
   *
   * @public
   */
  LinkId: string | undefined;

  /**
   * A description of the link.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of the link.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The upload and download speed in Mbps.
   *
   * @public
   */
  Bandwidth?: Bandwidth | undefined;

  /**
   * The provider of the link.
   *
   * Constraints: Maximum length of 128 characters.
   *
   * @public
   */
  Provider?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLinkResponse {
  /**
   * Information about the link.
   *
   * @public
   */
  Link?: Link | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkResourceMetadataRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource metadata.
   *
   * @public
   */
  Metadata: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkResourceMetadataResponse {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The updated resource metadata.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSiteRequest {
  /**
   * The ID of the global network.
   *
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * The ID of your site.
   *
   * @public
   */
  SiteId: string | undefined;

  /**
   * A description of your site.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The site location:
   *
   * - `Address`: The physical address of the site.
   * - `Latitude`: The latitude of the site.
   * - `Longitude`: The longitude of the site.
   *
   * @public
   */
  Location?: Location | undefined;
}

/**
 * @public
 */
export interface UpdateSiteResponse {
  /**
   * Information about the site.
   *
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * Adds a subnet ARN to the VPC attachment.
   *
   * @public
   */
  AddSubnetArns?: string[] | undefined;

  /**
   * Removes a subnet ARN from the attachment.
   *
   * @public
   */
  RemoveSubnetArns?: string[] | undefined;

  /**
   * Additional options for updating the VPC attachment.
   *
   * @public
   */
  Options?: VpcOptions | undefined;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentResponse {
  /**
   * Describes the updated VPC attachment.
   *
   * @public
   */
  VpcAttachment?: VpcAttachment | undefined;
}
