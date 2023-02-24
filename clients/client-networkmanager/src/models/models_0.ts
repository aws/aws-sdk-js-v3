// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@aws-sdk/smithy-client";

import { NetworkManagerServiceException as __BaseException } from "./NetworkManagerServiceException";

export interface AcceptAttachmentRequest {
  /**
   * <p>The ID of the attachment. </p>
   */
  AttachmentId: string | undefined;
}

export enum AttachmentType {
  CONNECT = "CONNECT",
  SITE_TO_SITE_VPN = "SITE_TO_SITE_VPN",
  TRANSIT_GATEWAY_ROUTE_TABLE = "TRANSIT_GATEWAY_ROUTE_TABLE",
  VPC = "VPC",
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Value?: string;
}

/**
 * <p>Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted. </p>
 */
export interface ProposedSegmentChange {
  /**
   * <p>The list of key-value tags that changed for the segment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The rule number in the policy document that applies to this change.</p>
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * <p>The name of the segment to change.</p>
   */
  SegmentName?: string;
}

export enum AttachmentState {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING_ATTACHMENT_ACCEPTANCE = "PENDING_ATTACHMENT_ACCEPTANCE",
  PENDING_NETWORK_UPDATE = "PENDING_NETWORK_UPDATE",
  PENDING_TAG_ACCEPTANCE = "PENDING_TAG_ACCEPTANCE",
  REJECTED = "REJECTED",
  UPDATING = "UPDATING",
}

/**
 * <p>Describes a core network attachment.</p>
 */
export interface Attachment {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>The ID of the attachment account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The type of attachment.</p>
   */
  AttachmentType?: AttachmentType | string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: AttachmentState | string;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The attachment resource ARN.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The policy rule number associated with the attachment.</p>
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * <p>The name of the segment attachment.</p>
   */
  SegmentName?: string;

  /**
   * <p>The tags associated with the attachment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The attachment to move from one segment to another.</p>
   */
  ProposedSegmentChange?: ProposedSegmentChange;

  /**
   * <p>The timestamp when the attachment was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp when the attachment was last updated.</p>
   */
  UpdatedAt?: Date;
}

export interface AcceptAttachmentResponse {
  /**
   * <p>The response to the attachment request. </p>
   */
  Attachment?: Attachment;
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request has failed due to an internal error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The specified resource could not be found.</p>
   */
  Context?: Record<string, string>;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.Context = opts.Context;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>Describes a validation exception for a field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * <p>The message for the field.</p>
   */
  Message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CannotParse",
  FIELD_VALIDATION_FAILED = "FieldValidationFailed",
  OTHER = "Other",
  UNKNOWN_OPERATION = "UnknownOperation",
}

/**
 * <p>The input fails to satisfy the constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason for the error.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>The fields that caused the error, if applicable.</p>
   */
  Fields?: ValidationExceptionField[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

/**
 * <p>Describes the current status of an account within an Amazon Web Services Organization, including service-linked roles (SLRs).</p>
 */
export interface AccountStatus {
  /**
   * <p>The ID of an account within the Amazon Web Services Organization.</p>
   */
  AccountId?: string;

  /**
   * <p>The status of SLR deployment for the account.</p>
   */
  SLRDeploymentStatus?: string;
}

export interface AssociateConnectPeerRequest {
  /**
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export enum ConnectPeerAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes a core network Connect peer association.</p>
 */
export interface ConnectPeerAssociation {
  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device to connect to.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the Connect peer association.</p>
   */
  State?: ConnectPeerAssociationState | string;
}

export interface AssociateConnectPeerResponse {
  /**
   * <p>The response to the Connect peer request.</p>
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

/**
 * <p>A service limit was exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   */
  Message: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The limit code.</p>
   */
  LimitCode: string | undefined;

  /**
   * <p>The service code.</p>
   */
  ServiceCode: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.LimitCode = opts.LimitCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

export interface AssociateCustomerGatewayRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export enum CustomerGatewayAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 */
export interface CustomerGatewayAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The association state.</p>
   */
  State?: CustomerGatewayAssociationState | string;
}

export interface AssociateCustomerGatewayResponse {
  /**
   * <p>The customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export interface AssociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export enum LinkAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes the association between a device and a link.</p>
 */
export interface LinkAssociation {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The device ID for the link association.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  LinkAssociationState?: LinkAssociationState | string;
}

export interface AssociateLinkResponse {
  /**
   * <p>The link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export interface AssociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export enum TransitGatewayConnectPeerAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes a transit gateway Connect peer association.</p>
 */
export interface TransitGatewayConnectPeerAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayConnectPeerAssociationState | string;
}

export interface AssociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

/**
 * <p>Specifies a location in Amazon Web Services.</p>
 */
export interface AWSLocation {
  /**
   * <p>The Zone that the device is located in. Specify the ID of an Availability Zone, Local
   *             Zone, Wavelength Zone, or an Outpost.</p>
   */
  Zone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet that the device is located in.</p>
   */
  SubnetArn?: string;
}

/**
 * <p>Describes bandwidth information.</p>
 */
export interface Bandwidth {
  /**
   * <p>Upload speed in Mbps.</p>
   */
  UploadSpeed?: number;

  /**
   * <p>Download speed in Mbps.</p>
   */
  DownloadSpeed?: number;
}

/**
 * <p>Describes the BGP options.</p>
 */
export interface BgpOptions {
  /**
   * <p>The Peer ASN of the BGP.</p>
   */
  PeerAsn?: number;
}

export enum ChangeAction {
  ADD = "ADD",
  MODIFY = "MODIFY",
  REMOVE = "REMOVE",
}

export enum ChangeSetState {
  EXECUTING = "EXECUTING",
  EXECUTION_SUCCEEDED = "EXECUTION_SUCCEEDED",
  FAILED_GENERATION = "FAILED_GENERATION",
  OUT_OF_DATE = "OUT_OF_DATE",
  PENDING_GENERATION = "PENDING_GENERATION",
  READY_TO_EXECUTE = "READY_TO_EXECUTE",
}

export enum ChangeStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

export enum ChangeType {
  ATTACHMENT_MAPPING = "ATTACHMENT_MAPPING",
  ATTACHMENT_POLICIES_CONFIGURATION = "ATTACHMENT_POLICIES_CONFIGURATION",
  ATTACHMENT_ROUTE_PROPAGATION = "ATTACHMENT_ROUTE_PROPAGATION",
  ATTACHMENT_ROUTE_STATIC = "ATTACHMENT_ROUTE_STATIC",
  CORE_NETWORK_CONFIGURATION = "CORE_NETWORK_CONFIGURATION",
  CORE_NETWORK_EDGE = "CORE_NETWORK_EDGE",
  CORE_NETWORK_SEGMENT = "CORE_NETWORK_SEGMENT",
  SEGMENTS_CONFIGURATION = "SEGMENTS_CONFIGURATION",
  SEGMENT_ACTIONS_CONFIGURATION = "SEGMENT_ACTIONS_CONFIGURATION",
}

export enum TunnelProtocol {
  GRE = "GRE",
}

/**
 * <p>Describes a core network Connect attachment options.</p>
 */
export interface ConnectAttachmentOptions {
  /**
   * <p>The protocol used for the attachment connection.</p>
   */
  Protocol?: TunnelProtocol | string;
}

/**
 * <p>Describes a core network Connect attachment.</p>
 */
export interface ConnectAttachment {
  /**
   * <p>The attachment details.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The ID of the transport attachment.</p>
   */
  TransportAttachmentId?: string;

  /**
   * <p>Options for connecting an attachment.</p>
   */
  Options?: ConnectAttachmentOptions;
}

export enum ConnectionState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a connection.</p>
 */
export interface Connection {
  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId?: string;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that the connection was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the connection.</p>
   */
  State?: ConnectionState | string;

  /**
   * <p>The tags for the connection.</p>
   */
  Tags?: Tag[];
}

export enum ConnectionStatus {
  DOWN = "DOWN",
  UP = "UP",
}

export enum ConnectionType {
  BGP = "BGP",
  IPSEC = "IPSEC",
}

/**
 * <p>Describes connection health.</p>
 */
export interface ConnectionHealth {
  /**
   * <p>The connection type.</p>
   */
  Type?: ConnectionType | string;

  /**
   * <p>The connection status.</p>
   */
  Status?: ConnectionStatus | string;

  /**
   * <p>The time the status was last updated.</p>
   */
  Timestamp?: Date;
}

/**
 * <p>Describes a core network BGP configuration.</p>
 */
export interface ConnectPeerBgpConfiguration {
  /**
   * <p>The ASN of the Coret Network.</p>
   */
  CoreNetworkAsn?: number;

  /**
   * <p>The ASN of the Connect peer.</p>
   */
  PeerAsn?: number;

  /**
   * <p>The address of a core network.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The address of a core network Connect peer.</p>
   */
  PeerAddress?: string;
}

/**
 * <p>Describes a core network Connect peer configuration.</p>
 */
export interface ConnectPeerConfiguration {
  /**
   * <p>The IP address of a core network.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The IP address of the Connect peer.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The inside IP addresses used for a Connect peer configuration.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The protocol used for a Connect peer configuration.</p>
   */
  Protocol?: TunnelProtocol | string;

  /**
   * <p>The Connect peer BGP configurations.</p>
   */
  BgpConfigurations?: ConnectPeerBgpConfiguration[];
}

export enum ConnectPeerState {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
}

/**
 * <p>Describes a core network Connect peer.</p>
 */
export interface ConnectPeer {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the attachment to connect.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * <p>The Connect peer Regions where edges are located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The state of the Connect peer.</p>
   */
  State?: ConnectPeerState | string;

  /**
   * <p>The timestamp when the Connect peer was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The configuration of the Connect peer.</p>
   */
  Configuration?: ConnectPeerConfiguration;

  /**
   * <p>The list of key-value tags associated with the Connect peer.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Summary description of a Connect peer.</p>
 */
export interface ConnectPeerSummary {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of a Connect peer attachment.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The ID of a Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The state of a Connect peer.</p>
   */
  ConnectPeerState?: ConnectPeerState | string;

  /**
   * <p>The timestamp when a Connect peer was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The list of key-value tags associated with the Connect peer summary.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Describes a core network edge.</p>
 */
export interface CoreNetworkEdge {
  /**
   * <p>The Region where a core network edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The ASN of a core network edge.</p>
   */
  Asn?: number;

  /**
   * <p>The inside IP addresses used for core network edges.</p>
   */
  InsideCidrBlocks?: string[];
}

/**
 * <p>Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other.</p>
 */
export interface CoreNetworkSegment {
  /**
   * <p>The name of a core network segment.</p>
   */
  Name?: string;

  /**
   * <p>The Regions where the edges are located.</p>
   */
  EdgeLocations?: string[];

  /**
   * <p>The shared segments of a core network.</p>
   */
  SharedSegments?: string[];
}

export enum CoreNetworkState {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

/**
 * <p>Describes a core network.</p>
 */
export interface CoreNetwork {
  /**
   * <p>The ID of the global network that your core network is a part of. </p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The current state of a core network.</p>
   */
  State?: CoreNetworkState | string;

  /**
   * <p>The segments within a core network.</p>
   */
  Segments?: CoreNetworkSegment[];

  /**
   * <p>The edges within a core network.</p>
   */
  Edges?: CoreNetworkEdge[];

  /**
   * <p>The list of key-value tags associated with a core network.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Describes a core network change.</p>
 */
export interface CoreNetworkChangeValues {
  /**
   * <p>The names of the segments in a core network.</p>
   */
  SegmentName?: string;

  /**
   * <p>The Regions where edges are located in a core network. </p>
   */
  EdgeLocations?: string[];

  /**
   * <p>The ASN of a core network.</p>
   */
  Asn?: number;

  /**
   * <p>The IP addresses used for a core network.</p>
   */
  Cidr?: string;

  /**
   * <p>The ID of the destination.</p>
   */
  DestinationIdentifier?: string;

  /**
   * <p>The inside IP addresses used for core network change values.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The shared segments for a core network change value. </p>
   */
  SharedSegments?: string[];
}

/**
 * <p>Details describing a core network change.</p>
 */
export interface CoreNetworkChange {
  /**
   * <p>The type of change.</p>
   */
  Type?: ChangeType | string;

  /**
   * <p>The action to take for a core network.</p>
   */
  Action?: ChangeAction | string;

  /**
   * <p>The resource identifier.</p>
   */
  Identifier?: string;

  /**
   * <p>The previous values for a core network.</p>
   */
  PreviousValues?: CoreNetworkChangeValues;

  /**
   * <p>The new value for a core network</p>
   */
  NewValues?: CoreNetworkChangeValues;

  /**
   * <p>Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.</p>
   */
  IdentifierPath?: string;
}

/**
 * <p>Describes a core network change event.</p>
 */
export interface CoreNetworkChangeEventValues {
  /**
   * <p>The edge location for the core network change event.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The segment name if the change event is associated with a segment.</p>
   */
  SegmentName?: string;

  /**
   * <p>The ID of the attachment if the change event is associated with an attachment.  </p>
   */
  AttachmentId?: string;

  /**
   * <p>For a <code>STATIC_ROUTE</code> event, this is the IP address.</p>
   */
  Cidr?: string;
}

/**
 * <p>Describes a core network change event. This can be a change to a segment, attachment, route, etc.</p>
 */
export interface CoreNetworkChangeEvent {
  /**
   * <p>Describes the type of change event. </p>
   */
  Type?: ChangeType | string;

  /**
   * <p>The action taken for the change event.</p>
   */
  Action?: ChangeAction | string;

  /**
   * <p>Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.</p>
   */
  IdentifierPath?: string;

  /**
   * <p>The timestamp for an event change in status.</p>
   */
  EventTime?: Date;

  /**
   * <p>The status of the core network change event.</p>
   */
  Status?: ChangeStatus | string;

  /**
   * <p>Details of the change event.</p>
   */
  Values?: CoreNetworkChangeEventValues;
}

export enum CoreNetworkPolicyAlias {
  LATEST = "LATEST",
  LIVE = "LIVE",
}

/**
 * <p>Provides details about an error in a core network policy.</p>
 */
export interface CoreNetworkPolicyError {
  /**
   * <p>The error code associated with a core network policy error.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with a core network policy error code.</p>
   */
  Message: string | undefined;

  /**
   * <p>The JSON path where the error was discovered in the policy document.</p>
   */
  Path?: string;
}

/**
 * <p>Describes a core network policy. You can have only one LIVE Core Policy.</p>
 */
export interface CoreNetworkPolicy {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * <p>Whether a core network policy is the current LIVE policy or the most recently submitted policy.</p>
   */
  Alias?: CoreNetworkPolicyAlias | string;

  /**
   * <p>The description of a core network policy.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network policy was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of a core network policy.</p>
   */
  ChangeSetState?: ChangeSetState | string;

  /**
   * <p>Describes any errors in a core network policy.</p>
   */
  PolicyErrors?: CoreNetworkPolicyError[];

  /**
   * <p>Describes a core network policy.</p>
   */
  PolicyDocument?: __LazyJsonString | string;
}

/**
 * <p>Describes a core network policy exception.</p>
 */
export class CoreNetworkPolicyException extends __BaseException {
  readonly name: "CoreNetworkPolicyException" = "CoreNetworkPolicyException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Describes a core network policy exception.</p>
   */
  Errors?: CoreNetworkPolicyError[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CoreNetworkPolicyException, __BaseException>) {
    super({
      name: "CoreNetworkPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CoreNetworkPolicyException.prototype);
    this.Message = opts.Message;
    this.Errors = opts.Errors;
  }
}

/**
 * <p>Describes a core network policy version.</p>
 */
export interface CoreNetworkPolicyVersion {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * <p>Whether a core network policy is the current policy or the most recently submitted policy.</p>
   */
  Alias?: CoreNetworkPolicyAlias | string;

  /**
   * <p>The description of a core network policy version.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network policy version was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The status of the policy version change set.</p>
   */
  ChangeSetState?: ChangeSetState | string;
}

/**
 * <p>Returns details about a core network edge.</p>
 */
export interface CoreNetworkSegmentEdgeIdentifier {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The name of the segment edge.</p>
   */
  SegmentName?: string;

  /**
   * <p>The Region where the segment edge is located.</p>
   */
  EdgeLocation?: string;
}

/**
 * <p>Returns summary information about a core network.</p>
 */
export interface CoreNetworkSummary {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>a core network ARN.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The global network ID.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The state of a core network.</p>
   */
  State?: CoreNetworkState | string;

  /**
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * <p>The key-value tags associated with a core network summary.</p>
   */
  Tags?: Tag[];
}

export interface CreateConnectAttachmentRequest {
  /**
   * <p>The ID of a core network where you want to create the attachment. </p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation: string | undefined;

  /**
   * <p>The ID of the attachment between the two connections.</p>
   */
  TransportAttachmentId: string | undefined;

  /**
   * <p>Options for creating an attachment.</p>
   */
  Options: ConnectAttachmentOptions | undefined;

  /**
   * <p>The list of key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export interface CreateConnectAttachmentResponse {
  /**
   * <p>The response to a Connect attachment request.</p>
   */
  ConnectAttachment?: ConnectAttachment;
}

export interface CreateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId: string | undefined;

  /**
   * <p>The ID of the link for the first device.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export interface CreateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export interface CreateConnectPeerRequest {
  /**
   * <p>The ID of the connection attachment.</p>
   */
  ConnectAttachmentId: string | undefined;

  /**
   * <p>A Connect peer core network address.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The Connect peer address.</p>
   */
  PeerAddress: string | undefined;

  /**
   * <p>The Connect peer BGP options.</p>
   */
  BgpOptions?: BgpOptions;

  /**
   * <p>The inside IP addresses used for BGP peering.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags associated with the peer request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export interface CreateConnectPeerResponse {
  /**
   * <p>The response to the request.</p>
   */
  ConnectPeer?: ConnectPeer;
}

export interface CreateCoreNetworkRequest {
  /**
   * <p>The ID of the global network that a core network will be a part of. </p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * <p>Key-value tags associated with a core network request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The policy document for creating a core network.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>The client token associated with a core network request.</p>
   */
  ClientToken?: string;
}

export interface CreateCoreNetworkResponse {
  /**
   * <p>Returns details about a core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * <p>Describes a location.</p>
 */
export interface Location {
  /**
   * <p>The physical address.</p>
   */
  Address?: string;

  /**
   * <p>The latitude.</p>
   */
  Latitude?: string;

  /**
   * <p>The longitude.</p>
   */
  Longitude?: string;
}

export interface CreateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The location of the device.</p>
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export enum DeviceState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a device.</p>
 */
export interface Device {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Web Services location of the device.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The device type.</p>
   */
  Type?: string;

  /**
   * <p>The device vendor.</p>
   */
  Vendor?: string;

  /**
   * <p>The device model.</p>
   */
  Model?: string;

  /**
   * <p>The device serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The site location.</p>
   */
  Location?: Location;

  /**
   * <p>The site ID.</p>
   */
  SiteId?: string;

  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The device state.</p>
   */
  State?: DeviceState | string;

  /**
   * <p>The tags for the device.</p>
   */
  Tags?: Tag[];
}

export interface CreateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export interface CreateGlobalNetworkRequest {
  /**
   * <p>A description of the global network.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export enum GlobalNetworkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network.</p>
 */
export interface GlobalNetwork {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the global network.</p>
   */
  GlobalNetworkArn?: string;

  /**
   * <p>The description of the global network.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that the global network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the global network.</p>
   */
  State?: GlobalNetworkState | string;

  /**
   * <p>The tags for the global network.</p>
   */
  Tags?: Tag[];
}

export interface CreateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export interface CreateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Type?: string;

  /**
   * <p> The upload speed and download speed in Mbps. </p>
   */
  Bandwidth: Bandwidth | undefined;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export enum LinkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a link.</p>
 */
export interface Link {
  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the link.</p>
   */
  LinkArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The description of the link.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   */
  Type?: string;

  /**
   * <p>The bandwidth for the link.</p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   */
  Provider?: string;

  /**
   * <p>The date and time that the link was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the link.</p>
   */
  State?: LinkState | string;

  /**
   * <p>The tags for the link.</p>
   */
  Tags?: Tag[];
}

export interface CreateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export interface CreateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export enum SiteState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a site.</p>
 */
export interface Site {
  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The location of the site.</p>
   */
  Location?: Location;

  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the site.</p>
   */
  State?: SiteState | string;

  /**
   * <p>The tags for the site.</p>
   */
  Tags?: Tag[];
}

export interface CreateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export interface CreateSiteToSiteVpnAttachmentRequest {
  /**
   * <p>The ID of a core network where you're creating a site-to-site VPN attachment.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN identifying the VPN attachment.</p>
   */
  VpnConnectionArn: string | undefined;

  /**
   * <p>The tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * <p>Creates a site-to-site VPN attachment.</p>
 */
export interface SiteToSiteVpnAttachment {
  /**
   * <p>Provides details about a site-to-site VPN attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The ARN of the site-to-site VPN attachment. </p>
   */
  VpnConnectionArn?: string;
}

export interface CreateSiteToSiteVpnAttachmentResponse {
  /**
   * <p>Details about a site-to-site VPN attachment.</p>
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

export interface CreateTransitGatewayPeeringRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN of the transit gateway for the peering request.</p>
   */
  TransitGatewayArn: string | undefined;

  /**
   * <p>The list of key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export enum PeeringType {
  TRANSIT_GATEWAY = "TRANSIT_GATEWAY",
}

export enum PeeringState {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
}

/**
 * <p>Describes a peering connection.</p>
 */
export interface Peering {
  /**
   * <p>The ID of the core network for the peering request.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ID of the peering attachment. </p>
   */
  PeeringId?: string;

  /**
   * <p>The ID of the account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The type of peering. This will be <code>TRANSIT_GATEWAY</code>.</p>
   */
  PeeringType?: PeeringType | string;

  /**
   * <p>The current state of the peering connection. </p>
   */
  State?: PeeringState | string;

  /**
   * <p>The edge location for the peer.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The resource ARN of the peer.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The list of key-value tags associated with the peering.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The timestamp when the attachment peer was created.</p>
   */
  CreatedAt?: Date;
}

/**
 * <p>Describes a transit gateway peering attachment.</p>
 */
export interface TransitGatewayPeering {
  /**
   * <p>Describes a transit gateway peer connection.</p>
   */
  Peering?: Peering;

  /**
   * <p>The ARN of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachmentId?: string;
}

export interface CreateTransitGatewayPeeringResponse {
  /**
   * <p>Returns information about the transit gateway peering connection request.</p>
   */
  TransitGatewayPeering?: TransitGatewayPeering;
}

export interface CreateTransitGatewayRouteTableAttachmentRequest {
  /**
   * <p>The ID of the peer for the </p>
   */
  PeeringId: string | undefined;

  /**
   * <p>The ARN of the transit gateway route table for the attachment request.</p>
   */
  TransitGatewayRouteTableArn: string | undefined;

  /**
   * <p>The list of key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * <p>Describes a transit gateway route table attachment.</p>
 */
export interface TransitGatewayRouteTableAttachment {
  /**
   * <p>Describes a core network attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The ID of the peering attachment.</p>
   */
  PeeringId?: string;

  /**
   * <p>The ARN of the transit gateway attachment route table.</p>
   */
  TransitGatewayRouteTableArn?: string;
}

export interface CreateTransitGatewayRouteTableAttachmentResponse {
  /**
   * <p>The route table associated with the create transit gateway route table attachment request.</p>
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}

/**
 * <p>Describes the VPC options.</p>
 */
export interface VpcOptions {
  /**
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Support?: boolean;

  /**
   * <p>Indicates whether appliance mode is supported.  If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is <code>false</code>.</p>
   */
  ApplianceModeSupport?: boolean;
}

export interface CreateVpcAttachmentRequest {
  /**
   * <p>The ID of a core network for the VPC attachment.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN of the VPC.</p>
   */
  VpcArn: string | undefined;

  /**
   * <p>The subnet ARN of the VPC attachment.</p>
   */
  SubnetArns: string[] | undefined;

  /**
   * <p>Options for the VPC attachment.</p>
   */
  Options?: VpcOptions;

  /**
   * <p>The key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * <p>Describes a VPC attachment.</p>
 */
export interface VpcAttachment {
  /**
   * <p>Provides details about the VPC attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The subnet ARNs.</p>
   */
  SubnetArns?: string[];

  /**
   * <p>Provides details about the VPC attachment.</p>
   */
  Options?: VpcOptions;
}

export interface CreateVpcAttachmentResponse {
  /**
   * <p>Provides details about the VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export interface DeleteAttachmentRequest {
  /**
   * <p>The ID of the attachment to delete.</p>
   */
  AttachmentId: string | undefined;
}

export interface DeleteAttachmentResponse {
  /**
   * <p>Information about the deleted attachment.</p>
   */
  Attachment?: Attachment;
}

export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;
}

export interface DeleteConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export interface DeleteConnectPeerRequest {
  /**
   * <p>The ID of the deleted Connect peer.</p>
   */
  ConnectPeerId: string | undefined;
}

export interface DeleteConnectPeerResponse {
  /**
   * <p>Information about the deleted Connect peer.</p>
   */
  ConnectPeer?: ConnectPeer;
}

export interface DeleteCoreNetworkRequest {
  /**
   * <p>The network ID of the deleted core network.</p>
   */
  CoreNetworkId: string | undefined;
}

export interface DeleteCoreNetworkResponse {
  /**
   * <p>Information about the deleted core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

export interface DeleteCoreNetworkPolicyVersionRequest {
  /**
   * <p>The ID of a core network for the deleted policy.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The version ID of the deleted policy.</p>
   */
  PolicyVersionId: number | undefined;
}

export interface DeleteCoreNetworkPolicyVersionResponse {
  /**
   * <p>Returns information about the deleted policy version. </p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export interface DeleteDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;
}

export interface DeleteDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export interface DeleteGlobalNetworkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export interface DeleteGlobalNetworkResponse {
  /**
   * <p>Information about the global network.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export interface DeleteLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export interface DeleteLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export interface DeletePeeringRequest {
  /**
   * <p>The ID of the peering connection to delete.</p>
   */
  PeeringId: string | undefined;
}

export interface DeletePeeringResponse {
  /**
   * <p>Information about a deleted peering connection.</p>
   */
  Peering?: Peering;
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The ARN of the policy to delete.</p>
   */
  ResourceArn: string | undefined;
}

export interface DeleteResourcePolicyResponse {}

export interface DeleteSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export interface DeleteSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export interface DeregisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export enum TransitGatewayRegistrationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  failed = "FAILED",
  pending = "PENDING",
}

/**
 * <p>Describes the status of a transit gateway registration.</p>
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * <p>The code for the state reason.</p>
   */
  Code?: TransitGatewayRegistrationState | string;

  /**
   * <p>The message for the state reason.</p>
   */
  Message?: string;
}

/**
 * <p>Describes the registration of a transit gateway to a global network.</p>
 */
export interface TransitGatewayRegistration {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway registration.</p>
   */
  State?: TransitGatewayRegistrationStateReason;
}

export interface DeregisterTransitGatewayResponse {
  /**
   * <p>The transit gateway registration information.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export interface DescribeGlobalNetworksRequest {
  /**
   * <p>The IDs of one or more global networks. The maximum is 10.</p>
   */
  GlobalNetworkIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeGlobalNetworksResponse {
  /**
   * <p>Information about the global networks.</p>
   */
  GlobalNetworks?: GlobalNetwork[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DisassociateConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the Connect peer to disassociate from a device.</p>
   */
  ConnectPeerId: string | undefined;
}

export interface DisassociateConnectPeerResponse {
  /**
   * <p>Describes the Connect peer association.</p>
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

export interface DisassociateCustomerGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;
}

export interface DisassociateCustomerGatewayResponse {
  /**
   * <p>Information about the customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export interface DisassociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export interface DisassociateLinkResponse {
  /**
   * <p>Information about the link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export interface DisassociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;
}

export interface DisassociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

export interface ExecuteCoreNetworkChangeSetRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId: number | undefined;
}

export interface ExecuteCoreNetworkChangeSetResponse {}

export interface GetConnectAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export interface GetConnectAttachmentResponse {
  /**
   * <p>Details about the Connect attachment.</p>
   */
  ConnectAttachment?: ConnectAttachment;
}

export interface GetConnectionsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more connection IDs.</p>
   */
  ConnectionIds?: string[];

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetConnectionsResponse {
  /**
   * <p>Information about the connections.</p>
   */
  Connections?: Connection[];

  /**
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetConnectPeerRequest {
  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId: string | undefined;
}

export interface GetConnectPeerResponse {
  /**
   * <p>Returns information about a core network Connect peer.</p>
   */
  ConnectPeer?: ConnectPeer;
}

export interface GetConnectPeerAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The IDs of the Connect peers.</p>
   */
  ConnectPeerIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetConnectPeerAssociationsResponse {
  /**
   * <p>Displays a list of Connect peer associations.</p>
   */
  ConnectPeerAssociations?: ConnectPeerAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetCoreNetworkRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;
}

export interface GetCoreNetworkResponse {
  /**
   * <p>Details about a core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

export interface GetCoreNetworkChangeEventsRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId: number | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetCoreNetworkChangeEventsResponse {
  /**
   * <p>The response to <code>GetCoreNetworkChangeEventsRequest</code>.</p>
   */
  CoreNetworkChangeEvents?: CoreNetworkChangeEvent[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetCoreNetworkChangeSetRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId: number | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetCoreNetworkChangeSetResponse {
  /**
   * <p>Describes a core network changes.</p>
   */
  CoreNetworkChanges?: CoreNetworkChange[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetCoreNetworkPolicyRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of a core network policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * <p>The alias of a core network policy </p>
   */
  Alias?: CoreNetworkPolicyAlias | string;
}

export interface GetCoreNetworkPolicyResponse {
  /**
   * <p>The details about a core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export interface GetCustomerGatewayAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.</p>
   */
  CustomerGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetCustomerGatewayAssociationsResponse {
  /**
   * <p>The customer gateway associations.</p>
   */
  CustomerGatewayAssociations?: CustomerGatewayAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetDevicesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more device IDs. The maximum is 10.</p>
   */
  DeviceIds?: string[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetDevicesResponse {
  /**
   * <p>The devices.</p>
   */
  Devices?: Device[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetLinkAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetLinkAssociationsResponse {
  /**
   * <p>The link associations.</p>
   */
  LinkAssociations?: LinkAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetLinksRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more link IDs. The maximum is 10.</p>
   */
  LinkIds?: string[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The link type.</p>
   */
  Type?: string;

  /**
   * <p>The link provider.</p>
   */
  Provider?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetLinksResponse {
  /**
   * <p>The links.</p>
   */
  Links?: Link[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetNetworkResourceCountsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a resource count.</p>
 */
export interface NetworkResourceCount {
  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The resource count.</p>
   */
  Count?: number;
}

export interface GetNetworkResourceCountsResponse {
  /**
   * <p>The count of resources.</p>
   */
  NetworkResourceCounts?: NetworkResourceCount[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetNetworkResourceRelationshipsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the registered gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *         <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the gateway.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a resource relationship.</p>
 */
export interface Relationship {
  /**
   * <p>The ARN of the resource.</p>
   */
  From?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  To?: string;
}

export interface GetNetworkResourceRelationshipsResponse {
  /**
   * <p>The resource relationships.</p>
   */
  Relationships?: Relationship[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetNetworkResourcesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>dxcon</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html">Connection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html">DirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-vif</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html">VirtualInterface</a>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>connection</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Connection.html">Connection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>device</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Device.html">Device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>link</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Link.html">Link</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>site</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Site.html">Site</a>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CustomerGateway.html">CustomerGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGateway.html">TransitGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayAttachment.html">TransitGatewayAttachment</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayConnectPeer.html">TransitGatewayConnectPeer</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayRouteTable.html">TransitGatewayRouteTable</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpnConnection.html">VpnConnection</a>.</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a network resource.</p>
 */
export interface NetworkResource {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * <p>The time that the resource definition was retrieved.</p>
   */
  DefinitionTimestamp?: Date;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The resource metadata.</p>
   */
  Metadata?: Record<string, string>;
}

export interface GetNetworkResourcesResponse {
  /**
   * <p>The network resources.</p>
   */
  NetworkResources?: NetworkResource[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a route table.</p>
 */
export interface RouteTableIdentifier {
  /**
   * <p>The ARN of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableArn?: string;

  /**
   * <p>The segment edge in a core network.</p>
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
}

export enum RouteState {
  ACTIVE = "ACTIVE",
  BLACKHOLE = "BLACKHOLE",
}

export enum RouteType {
  PROPAGATED = "PROPAGATED",
  STATIC = "STATIC",
}

export interface GetNetworkRoutesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableIdentifier: RouteTableIdentifier | undefined;

  /**
   * <p>An exact CIDR block.</p>
   */
  ExactCidrMatches?: string[];

  /**
   * <p>The most specific route that matches the traffic (longest prefix match).</p>
   */
  LongestPrefixMatches?: string[];

  /**
   * <p>The routes with a subnet that match the specified CIDR filter.</p>
   */
  SubnetOfMatches?: string[];

  /**
   * <p>The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   */
  SupernetOfMatches?: string[];

  /**
   * <p>The IDs of the prefix lists.</p>
   */
  PrefixListIds?: string[];

  /**
   * <p>The route states.</p>
   */
  States?: (RouteState | string)[];

  /**
   * <p>The route types.</p>
   */
  Types?: (RouteType | string)[];

  /**
   * <p>Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.</p>
   */
  DestinationFilters?: Record<string, string[]>;
}

/**
 * <p>Describes the destination of a network route.</p>
 */
export interface NetworkRouteDestination {
  /**
   * <p>The ID of a core network attachment.</p>
   */
  CoreNetworkAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The name of the segment.</p>
   */
  SegmentName?: string;

  /**
   * <p>The edge location for the network destination.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

/**
 * <p>Describes a network route.</p>
 */
export interface NetworkRoute {
  /**
   * <p>A unique identifier for the route, such as a CIDR block.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The destinations.</p>
   */
  Destinations?: NetworkRouteDestination[];

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The route state. The possible values are <code>active</code> and <code>blackhole</code>.</p>
   */
  State?: RouteState | string;

  /**
   * <p>The route type. The possible values are <code>propagated</code> and <code>static</code>.</p>
   */
  Type?: RouteType | string;
}

export enum RouteTableType {
  CORE_NETWORK_SEGMENT = "CORE_NETWORK_SEGMENT",
  TRANSIT_GATEWAY_ROUTE_TABLE = "TRANSIT_GATEWAY_ROUTE_TABLE",
}

export interface GetNetworkRoutesResponse {
  /**
   * <p>The ARN of the route table.</p>
   */
  RouteTableArn?: string;

  /**
   * <p>Describes a core network segment edge.</p>
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;

  /**
   * <p>The route table type.</p>
   */
  RouteTableType?: RouteTableType | string;

  /**
   * <p>The route table creation time.</p>
   */
  RouteTableTimestamp?: Date;

  /**
   * <p>The network routes.</p>
   */
  NetworkRoutes?: NetworkRoute[];
}

export interface GetNetworkTelemetryRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *         <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the telemetry information for a resource.</p>
 */
export interface NetworkTelemetry {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The address.</p>
   */
  Address?: string;

  /**
   * <p>The connection health.</p>
   */
  Health?: ConnectionHealth;
}

export interface GetNetworkTelemetryResponse {
  /**
   * <p>The network telemetry.</p>
   */
  NetworkTelemetry?: NetworkTelemetry[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface GetResourcePolicyResponse {
  /**
   * <p>The resource policy document.</p>
   */
  PolicyDocument?: __LazyJsonString | string;
}

export interface GetRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId: string | undefined;
}

/**
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptions {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The ARN of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

export enum RouteAnalysisCompletionReasonCode {
  BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND = "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND",
  CYCLIC_PATH_DETECTED = "CYCLIC_PATH_DETECTED",
  INACTIVE_ROUTE_FOR_DESTINATION_FOUND = "INACTIVE_ROUTE_FOR_DESTINATION_FOUND",
  MAX_HOPS_EXCEEDED = "MAX_HOPS_EXCEEDED",
  NO_DESTINATION_ARN_PROVIDED = "NO_DESTINATION_ARN_PROVIDED",
  POSSIBLE_MIDDLEBOX = "POSSIBLE_MIDDLEBOX",
  ROUTE_NOT_FOUND = "ROUTE_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT = "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND = "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY = "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND = "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND",
}

export enum RouteAnalysisCompletionResultCode {
  CONNECTED = "CONNECTED",
  NOT_CONNECTED = "NOT_CONNECTED",
}

/**
 * <p>Describes the status of an analysis at completion.</p>
 */
export interface RouteAnalysisCompletion {
  /**
   * <p>The result of the analysis. If the status is <code>NOT_CONNECTED</code>, check the
   *             reason code.</p>
   */
  ResultCode?: RouteAnalysisCompletionResultCode | string;

  /**
   * <p>The reason code. Available only if a connection is not found.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND</code> - Found a black hole route with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CYCLIC_PATH_DETECTED</code> - Found the same resource multiple times while traversing the path.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE_ROUTE_FOR_DESTINATION_FOUND</code> - Found an inactive route with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAX_HOPS_EXCEEDED</code> - Analysis exceeded 64 hops without finding the destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROUTE_NOT_FOUND</code> - Cannot find a route table with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_ARN_NO_MATCH</code> - Found an attachment, but not with the correct destination ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_NOT_FOUND</code> - Cannot find an attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_NOT_IN_TGW</code> - Found an attachment, but not to the correct transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_STABLE_ROUTE_TABLE_NOT_FOUND</code> - The state of the route table association is not associated.</p>
   *             </li>
   *          </ul>
   */
  ReasonCode?: RouteAnalysisCompletionReasonCode | string;

  /**
   * <p>Additional information about the path. Available only if a connection is not found.</p>
   */
  ReasonContext?: Record<string, string>;
}

/**
 * <p>Describes a network resource.</p>
 */
export interface NetworkResourceSummary {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * <p>The value for the Name tag.</p>
   */
  NameTag?: string;

  /**
   * <p>Indicates whether this is a middlebox appliance.</p>
   */
  IsMiddlebox?: boolean;
}

/**
 * <p>Describes a path component.</p>
 */
export interface PathComponent {
  /**
   * <p>The sequence number in the path. The destination is 0.</p>
   */
  Sequence?: number;

  /**
   * <p>The resource.</p>
   */
  Resource?: NetworkResourceSummary;

  /**
   * <p>The destination CIDR block in the route table.</p>
   */
  DestinationCidrBlock?: string;
}

/**
 * <p>Describes a route analysis path.</p>
 */
export interface RouteAnalysisPath {
  /**
   * <p>The status of the analysis at completion.</p>
   */
  CompletionStatus?: RouteAnalysisCompletion;

  /**
   * <p>The route analysis path.</p>
   */
  Path?: PathComponent[];
}

export enum RouteAnalysisStatus {
  completed = "COMPLETED",
  failed = "FAILED",
  running = "RUNNING",
}

/**
 * <p>Describes a route analysis.</p>
 */
export interface RouteAnalysis {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the AWS account that created the route analysis.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId?: string;

  /**
   * <p>The time that the analysis started.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p>The status of the route analysis.</p>
   */
  Status?: RouteAnalysisStatus | string;

  /**
   * <p>The source.</p>
   */
  Source?: RouteAnalysisEndpointOptions;

  /**
   * <p>The destination.</p>
   */
  Destination?: RouteAnalysisEndpointOptions;

  /**
   * <p>Indicates whether to analyze the return path. The return path is not analyzed if the forward path
   *             analysis does not succeed.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.</p>
   */
  UseMiddleboxes?: boolean;

  /**
   * <p>The forward path.</p>
   */
  ForwardPath?: RouteAnalysisPath;

  /**
   * <p>The return path.</p>
   */
  ReturnPath?: RouteAnalysisPath;
}

export interface GetRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

export interface GetSitesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more site IDs. The maximum is 10.</p>
   */
  SiteIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetSitesResponse {
  /**
   * <p>The sites.</p>
   */
  Sites?: Site[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetSiteToSiteVpnAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export interface GetSiteToSiteVpnAttachmentResponse {
  /**
   * <p>Describes the site-to-site attachment.</p>
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

export interface GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more transit gateway Connect peer Amazon Resource Names (ARNs).</p>
   */
  TransitGatewayConnectPeerArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * <p>Information about the transit gateway Connect peer associations.</p>
   */
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[];

  /**
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayPeeringRequest {
  /**
   * <p>The ID of the peering request.</p>
   */
  PeeringId: string | undefined;
}

export interface GetTransitGatewayPeeringResponse {
  /**
   * <p>Returns information about a transit gateway peering. </p>
   */
  TransitGatewayPeering?: TransitGatewayPeering;
}

export interface GetTransitGatewayRegistrationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
   *             10.</p>
   */
  TransitGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayRegistrationsResponse {
  /**
   * <p>The transit gateway registrations.</p>
   */
  TransitGatewayRegistrations?: TransitGatewayRegistration[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayRouteTableAttachmentRequest {
  /**
   * <p>The ID of the transit gateway route table attachment.</p>
   */
  AttachmentId: string | undefined;
}

export interface GetTransitGatewayRouteTableAttachmentResponse {
  /**
   * <p>Returns information about the transit gateway route table attachment.</p>
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}

export interface GetVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export interface GetVpcAttachmentResponse {
  /**
   * <p>Returns details about a VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export interface ListAttachmentsRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The type of attachment.</p>
   */
  AttachmentType?: AttachmentType | string;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: AttachmentState | string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListAttachmentsResponse {
  /**
   * <p>Describes the list of attachments.</p>
   */
  Attachments?: Attachment[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListConnectPeersRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListConnectPeersResponse {
  /**
   * <p>Describes the Connect peers.</p>
   */
  ConnectPeers?: ConnectPeerSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListCoreNetworkPolicyVersionsRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListCoreNetworkPolicyVersionsResponse {
  /**
   * <p>Describes core network policy versions.</p>
   */
  CoreNetworkPolicyVersions?: CoreNetworkPolicyVersion[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListCoreNetworksRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListCoreNetworksResponse {
  /**
   * <p>Describes the list of core networks.</p>
   */
  CoreNetworks?: CoreNetworkSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListOrganizationServiceAccessStatusRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The status of an Amazon Web Services Organization and the accounts within that organization.</p>
 */
export interface OrganizationStatus {
  /**
   * <p>The ID of an Amazon Web Services Organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The status  of the organization's AWS service access. This will be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   */
  OrganizationAwsServiceAccessStatus?: string;

  /**
   * <p>The status of the SLR deployment for the account. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.</p>
   */
  SLRDeploymentStatus?: string;

  /**
   * <p>The current service-linked role (SLR) deployment status for an Amazon Web Services Organization's accounts. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.</p>
   */
  AccountStatusList?: AccountStatus[];
}

export interface ListOrganizationServiceAccessStatusResponse {
  /**
   * <p>Displays the status of an Amazon Web Services Organization.</p>
   */
  OrganizationStatus?: OrganizationStatus;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListPeeringsRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>Returns a list of a peering requests.</p>
   */
  PeeringType?: PeeringType | string;

  /**
   * <p>Returns a list edge locations for the </p>
   */
  EdgeLocation?: string;

  /**
   * <p>Returns a list of the peering request states.</p>
   */
  State?: PeeringState | string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListPeeringsResponse {
  /**
   * <p>Lists the transit gateway peerings for the <code>ListPeerings</code> request.</p>
   */
  Peerings?: Peering[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags.</p>
   */
  TagList?: Tag[];
}

export interface PutCoreNetworkPolicyRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The policy document.</p>
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * <p>a core network policy description.</p>
   */
  Description?: string;

  /**
   * <p>The ID of a core network policy. </p>
   */
  LatestVersionId?: number;

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export interface PutCoreNetworkPolicyResponse {
  /**
   * <p>Describes the changed core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The JSON resource policy document.</p>
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * <p>The ARN of the resource policy. </p>
   */
  ResourceArn: string | undefined;
}

export interface PutResourcePolicyResponse {}

export interface RegisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export interface RegisterTransitGatewayResponse {
  /**
   * <p>Information about the transit gateway registration.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export interface RejectAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export interface RejectAttachmentResponse {
  /**
   * <p>Describes the rejected attachment request.</p>
   */
  Attachment?: Attachment;
}

export interface RestoreCoreNetworkPolicyVersionRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version to restore.</p>
   */
  PolicyVersionId: number | undefined;
}

export interface RestoreCoreNetworkPolicyVersionResponse {
  /**
   * <p>Describes the restored core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export interface StartOrganizationServiceAccessUpdateRequest {
  /**
   * <p>The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.</p>
   */
  Action: string | undefined;
}

export interface StartOrganizationServiceAccessUpdateResponse {
  /**
   * <p>The status of the service access update request for an Amazon Web Services Organization.</p>
   */
  OrganizationStatus?: OrganizationStatus;
}

/**
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptionsSpecification {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

export interface StartRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The source from which traffic originates.</p>
   */
  Source: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>The destination.</p>
   */
  Destination: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>Indicates whether to analyze the return path. The default is <code>false</code>.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.
   *             The default is <code>false</code>.</p>
   */
  UseMiddleboxes?: boolean;
}

export interface StartRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply to the specified resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export interface UpdateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export interface UpdateCoreNetworkRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The description of the update.</p>
   */
  Description?: string;
}

export interface UpdateCoreNetworkResponse {
  /**
   * <p>Returns information about a core network update.</p>
   */
  CoreNetwork?: CoreNetwork;
}

export interface UpdateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>Describes a location.</p>
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

export interface UpdateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export interface UpdateGlobalNetworkRequest {
  /**
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the global network.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export interface UpdateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export interface UpdateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;

  /**
   * <p>The upload and download speed in Mbps. </p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;
}

export interface UpdateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export interface UpdateNetworkResourceMetadataRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource metadata.</p>
   */
  Metadata: Record<string, string> | undefined;
}

export interface UpdateNetworkResourceMetadataResponse {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The updated resource metadata.</p>
   */
  Metadata?: Record<string, string>;
}

export interface UpdateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of your site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The site location:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;
}

export interface UpdateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export interface UpdateVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * <p>Adds a subnet ARN to the VPC attachment.</p>
   */
  AddSubnetArns?: string[];

  /**
   * <p>Removes a subnet ARN from the attachment.</p>
   */
  RemoveSubnetArns?: string[];

  /**
   * <p>Additional options for updating the VPC attachment. </p>
   */
  Options?: VpcOptions;
}

export interface UpdateVpcAttachmentResponse {
  /**
   * <p>Describes the updated VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

/**
 * @internal
 */
export const AcceptAttachmentRequestFilterSensitiveLog = (obj: AcceptAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProposedSegmentChangeFilterSensitiveLog = (obj: ProposedSegmentChange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachmentFilterSensitiveLog = (obj: Attachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptAttachmentResponseFilterSensitiveLog = (obj: AcceptAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountStatusFilterSensitiveLog = (obj: AccountStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateConnectPeerRequestFilterSensitiveLog = (obj: AssociateConnectPeerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectPeerAssociationFilterSensitiveLog = (obj: ConnectPeerAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateConnectPeerResponseFilterSensitiveLog = (obj: AssociateConnectPeerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateCustomerGatewayRequestFilterSensitiveLog = (obj: AssociateCustomerGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerGatewayAssociationFilterSensitiveLog = (obj: CustomerGatewayAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateCustomerGatewayResponseFilterSensitiveLog = (obj: AssociateCustomerGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateLinkRequestFilterSensitiveLog = (obj: AssociateLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LinkAssociationFilterSensitiveLog = (obj: LinkAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateLinkResponseFilterSensitiveLog = (obj: AssociateLinkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayConnectPeerRequestFilterSensitiveLog = (
  obj: AssociateTransitGatewayConnectPeerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayConnectPeerAssociationFilterSensitiveLog = (
  obj: TransitGatewayConnectPeerAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayConnectPeerResponseFilterSensitiveLog = (
  obj: AssociateTransitGatewayConnectPeerResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AWSLocationFilterSensitiveLog = (obj: AWSLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BandwidthFilterSensitiveLog = (obj: Bandwidth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BgpOptionsFilterSensitiveLog = (obj: BgpOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectAttachmentOptionsFilterSensitiveLog = (obj: ConnectAttachmentOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectAttachmentFilterSensitiveLog = (obj: ConnectAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionFilterSensitiveLog = (obj: Connection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionHealthFilterSensitiveLog = (obj: ConnectionHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectPeerBgpConfigurationFilterSensitiveLog = (obj: ConnectPeerBgpConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectPeerConfigurationFilterSensitiveLog = (obj: ConnectPeerConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectPeerFilterSensitiveLog = (obj: ConnectPeer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectPeerSummaryFilterSensitiveLog = (obj: ConnectPeerSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkEdgeFilterSensitiveLog = (obj: CoreNetworkEdge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkSegmentFilterSensitiveLog = (obj: CoreNetworkSegment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkFilterSensitiveLog = (obj: CoreNetwork): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkChangeValuesFilterSensitiveLog = (obj: CoreNetworkChangeValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkChangeFilterSensitiveLog = (obj: CoreNetworkChange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkChangeEventValuesFilterSensitiveLog = (obj: CoreNetworkChangeEventValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkChangeEventFilterSensitiveLog = (obj: CoreNetworkChangeEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkPolicyErrorFilterSensitiveLog = (obj: CoreNetworkPolicyError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkPolicyFilterSensitiveLog = (obj: CoreNetworkPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkPolicyVersionFilterSensitiveLog = (obj: CoreNetworkPolicyVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkSegmentEdgeIdentifierFilterSensitiveLog = (obj: CoreNetworkSegmentEdgeIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreNetworkSummaryFilterSensitiveLog = (obj: CoreNetworkSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectAttachmentRequestFilterSensitiveLog = (obj: CreateConnectAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectAttachmentResponseFilterSensitiveLog = (obj: CreateConnectAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionRequestFilterSensitiveLog = (obj: CreateConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionResponseFilterSensitiveLog = (obj: CreateConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectPeerRequestFilterSensitiveLog = (obj: CreateConnectPeerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectPeerResponseFilterSensitiveLog = (obj: CreateConnectPeerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoreNetworkRequestFilterSensitiveLog = (obj: CreateCoreNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoreNetworkResponseFilterSensitiveLog = (obj: CreateCoreNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocationFilterSensitiveLog = (obj: Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceRequestFilterSensitiveLog = (obj: CreateDeviceRequest): any => ({
  ...obj,
  ...(obj.Location && { Location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
  ...(obj.Location && { Location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDeviceResponseFilterSensitiveLog = (obj: CreateDeviceResponse): any => ({
  ...obj,
  ...(obj.Device && { Device: DeviceFilterSensitiveLog(obj.Device) }),
});

/**
 * @internal
 */
export const CreateGlobalNetworkRequestFilterSensitiveLog = (obj: CreateGlobalNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalNetworkFilterSensitiveLog = (obj: GlobalNetwork): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGlobalNetworkResponseFilterSensitiveLog = (obj: CreateGlobalNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLinkRequestFilterSensitiveLog = (obj: CreateLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LinkFilterSensitiveLog = (obj: Link): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLinkResponseFilterSensitiveLog = (obj: CreateLinkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSiteRequestFilterSensitiveLog = (obj: CreateSiteRequest): any => ({
  ...obj,
  ...(obj.Location && { Location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SiteFilterSensitiveLog = (obj: Site): any => ({
  ...obj,
  ...(obj.Location && { Location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSiteResponseFilterSensitiveLog = (obj: CreateSiteResponse): any => ({
  ...obj,
  ...(obj.Site && { Site: SiteFilterSensitiveLog(obj.Site) }),
});

/**
 * @internal
 */
export const CreateSiteToSiteVpnAttachmentRequestFilterSensitiveLog = (
  obj: CreateSiteToSiteVpnAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SiteToSiteVpnAttachmentFilterSensitiveLog = (obj: SiteToSiteVpnAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSiteToSiteVpnAttachmentResponseFilterSensitiveLog = (
  obj: CreateSiteToSiteVpnAttachmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPeeringRequestFilterSensitiveLog = (obj: CreateTransitGatewayPeeringRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PeeringFilterSensitiveLog = (obj: Peering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPeeringFilterSensitiveLog = (obj: TransitGatewayPeering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayPeeringResponseFilterSensitiveLog = (
  obj: CreateTransitGatewayPeeringResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteTableAttachmentRequestFilterSensitiveLog = (
  obj: CreateTransitGatewayRouteTableAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteTableAttachmentFilterSensitiveLog = (obj: TransitGatewayRouteTableAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTransitGatewayRouteTableAttachmentResponseFilterSensitiveLog = (
  obj: CreateTransitGatewayRouteTableAttachmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcOptionsFilterSensitiveLog = (obj: VpcOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcAttachmentRequestFilterSensitiveLog = (obj: CreateVpcAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcAttachmentFilterSensitiveLog = (obj: VpcAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcAttachmentResponseFilterSensitiveLog = (obj: CreateVpcAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAttachmentRequestFilterSensitiveLog = (obj: DeleteAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAttachmentResponseFilterSensitiveLog = (obj: DeleteAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectionRequestFilterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectionResponseFilterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectPeerRequestFilterSensitiveLog = (obj: DeleteConnectPeerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectPeerResponseFilterSensitiveLog = (obj: DeleteConnectPeerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoreNetworkRequestFilterSensitiveLog = (obj: DeleteCoreNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoreNetworkResponseFilterSensitiveLog = (obj: DeleteCoreNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoreNetworkPolicyVersionRequestFilterSensitiveLog = (
  obj: DeleteCoreNetworkPolicyVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoreNetworkPolicyVersionResponseFilterSensitiveLog = (
  obj: DeleteCoreNetworkPolicyVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceRequestFilterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceResponseFilterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
  ...obj,
  ...(obj.Device && { Device: DeviceFilterSensitiveLog(obj.Device) }),
});

/**
 * @internal
 */
export const DeleteGlobalNetworkRequestFilterSensitiveLog = (obj: DeleteGlobalNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGlobalNetworkResponseFilterSensitiveLog = (obj: DeleteGlobalNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLinkRequestFilterSensitiveLog = (obj: DeleteLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLinkResponseFilterSensitiveLog = (obj: DeleteLinkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePeeringRequestFilterSensitiveLog = (obj: DeletePeeringRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePeeringResponseFilterSensitiveLog = (obj: DeletePeeringResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyResponseFilterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSiteRequestFilterSensitiveLog = (obj: DeleteSiteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSiteResponseFilterSensitiveLog = (obj: DeleteSiteResponse): any => ({
  ...obj,
  ...(obj.Site && { Site: SiteFilterSensitiveLog(obj.Site) }),
});

/**
 * @internal
 */
export const DeregisterTransitGatewayRequestFilterSensitiveLog = (obj: DeregisterTransitGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRegistrationStateReasonFilterSensitiveLog = (
  obj: TransitGatewayRegistrationStateReason
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRegistrationFilterSensitiveLog = (obj: TransitGatewayRegistration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayResponseFilterSensitiveLog = (obj: DeregisterTransitGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGlobalNetworksRequestFilterSensitiveLog = (obj: DescribeGlobalNetworksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGlobalNetworksResponseFilterSensitiveLog = (obj: DescribeGlobalNetworksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConnectPeerRequestFilterSensitiveLog = (obj: DisassociateConnectPeerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConnectPeerResponseFilterSensitiveLog = (obj: DisassociateConnectPeerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateCustomerGatewayRequestFilterSensitiveLog = (obj: DisassociateCustomerGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateCustomerGatewayResponseFilterSensitiveLog = (
  obj: DisassociateCustomerGatewayResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateLinkRequestFilterSensitiveLog = (obj: DisassociateLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateLinkResponseFilterSensitiveLog = (obj: DisassociateLinkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayConnectPeerRequestFilterSensitiveLog = (
  obj: DisassociateTransitGatewayConnectPeerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayConnectPeerResponseFilterSensitiveLog = (
  obj: DisassociateTransitGatewayConnectPeerResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecuteCoreNetworkChangeSetRequestFilterSensitiveLog = (obj: ExecuteCoreNetworkChangeSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecuteCoreNetworkChangeSetResponseFilterSensitiveLog = (
  obj: ExecuteCoreNetworkChangeSetResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectAttachmentRequestFilterSensitiveLog = (obj: GetConnectAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectAttachmentResponseFilterSensitiveLog = (obj: GetConnectAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectionsRequestFilterSensitiveLog = (obj: GetConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectionsResponseFilterSensitiveLog = (obj: GetConnectionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectPeerRequestFilterSensitiveLog = (obj: GetConnectPeerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectPeerResponseFilterSensitiveLog = (obj: GetConnectPeerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectPeerAssociationsRequestFilterSensitiveLog = (obj: GetConnectPeerAssociationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectPeerAssociationsResponseFilterSensitiveLog = (obj: GetConnectPeerAssociationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkRequestFilterSensitiveLog = (obj: GetCoreNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkResponseFilterSensitiveLog = (obj: GetCoreNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkChangeEventsRequestFilterSensitiveLog = (obj: GetCoreNetworkChangeEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkChangeEventsResponseFilterSensitiveLog = (obj: GetCoreNetworkChangeEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkChangeSetRequestFilterSensitiveLog = (obj: GetCoreNetworkChangeSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkChangeSetResponseFilterSensitiveLog = (obj: GetCoreNetworkChangeSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkPolicyRequestFilterSensitiveLog = (obj: GetCoreNetworkPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreNetworkPolicyResponseFilterSensitiveLog = (obj: GetCoreNetworkPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCustomerGatewayAssociationsRequestFilterSensitiveLog = (
  obj: GetCustomerGatewayAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCustomerGatewayAssociationsResponseFilterSensitiveLog = (
  obj: GetCustomerGatewayAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDevicesRequestFilterSensitiveLog = (obj: GetDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDevicesResponseFilterSensitiveLog = (obj: GetDevicesResponse): any => ({
  ...obj,
  ...(obj.Devices && { Devices: obj.Devices.map((item) => DeviceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetLinkAssociationsRequestFilterSensitiveLog = (obj: GetLinkAssociationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLinkAssociationsResponseFilterSensitiveLog = (obj: GetLinkAssociationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLinksRequestFilterSensitiveLog = (obj: GetLinksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLinksResponseFilterSensitiveLog = (obj: GetLinksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResourceCountsRequestFilterSensitiveLog = (obj: GetNetworkResourceCountsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkResourceCountFilterSensitiveLog = (obj: NetworkResourceCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResourceCountsResponseFilterSensitiveLog = (obj: GetNetworkResourceCountsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResourceRelationshipsRequestFilterSensitiveLog = (
  obj: GetNetworkResourceRelationshipsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelationshipFilterSensitiveLog = (obj: Relationship): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResourceRelationshipsResponseFilterSensitiveLog = (
  obj: GetNetworkResourceRelationshipsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResourcesRequestFilterSensitiveLog = (obj: GetNetworkResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkResourceFilterSensitiveLog = (obj: NetworkResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkResourcesResponseFilterSensitiveLog = (obj: GetNetworkResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteTableIdentifierFilterSensitiveLog = (obj: RouteTableIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkRoutesRequestFilterSensitiveLog = (obj: GetNetworkRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkRouteDestinationFilterSensitiveLog = (obj: NetworkRouteDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkRouteFilterSensitiveLog = (obj: NetworkRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkRoutesResponseFilterSensitiveLog = (obj: GetNetworkRoutesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkTelemetryRequestFilterSensitiveLog = (obj: GetNetworkTelemetryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkTelemetryFilterSensitiveLog = (obj: NetworkTelemetry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkTelemetryResponseFilterSensitiveLog = (obj: GetNetworkTelemetryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePolicyRequestFilterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePolicyResponseFilterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRouteAnalysisRequestFilterSensitiveLog = (obj: GetRouteAnalysisRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteAnalysisEndpointOptionsFilterSensitiveLog = (obj: RouteAnalysisEndpointOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteAnalysisCompletionFilterSensitiveLog = (obj: RouteAnalysisCompletion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkResourceSummaryFilterSensitiveLog = (obj: NetworkResourceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathComponentFilterSensitiveLog = (obj: PathComponent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteAnalysisPathFilterSensitiveLog = (obj: RouteAnalysisPath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteAnalysisFilterSensitiveLog = (obj: RouteAnalysis): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRouteAnalysisResponseFilterSensitiveLog = (obj: GetRouteAnalysisResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSitesRequestFilterSensitiveLog = (obj: GetSitesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSitesResponseFilterSensitiveLog = (obj: GetSitesResponse): any => ({
  ...obj,
  ...(obj.Sites && { Sites: obj.Sites.map((item) => SiteFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetSiteToSiteVpnAttachmentRequestFilterSensitiveLog = (obj: GetSiteToSiteVpnAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSiteToSiteVpnAttachmentResponseFilterSensitiveLog = (obj: GetSiteToSiteVpnAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayConnectPeerAssociationsRequestFilterSensitiveLog = (
  obj: GetTransitGatewayConnectPeerAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayConnectPeerAssociationsResponseFilterSensitiveLog = (
  obj: GetTransitGatewayConnectPeerAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPeeringRequestFilterSensitiveLog = (obj: GetTransitGatewayPeeringRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPeeringResponseFilterSensitiveLog = (obj: GetTransitGatewayPeeringResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRegistrationsRequestFilterSensitiveLog = (
  obj: GetTransitGatewayRegistrationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRegistrationsResponseFilterSensitiveLog = (
  obj: GetTransitGatewayRegistrationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRouteTableAttachmentRequestFilterSensitiveLog = (
  obj: GetTransitGatewayRouteTableAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRouteTableAttachmentResponseFilterSensitiveLog = (
  obj: GetTransitGatewayRouteTableAttachmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVpcAttachmentRequestFilterSensitiveLog = (obj: GetVpcAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVpcAttachmentResponseFilterSensitiveLog = (obj: GetVpcAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttachmentsRequestFilterSensitiveLog = (obj: ListAttachmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttachmentsResponseFilterSensitiveLog = (obj: ListAttachmentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectPeersRequestFilterSensitiveLog = (obj: ListConnectPeersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectPeersResponseFilterSensitiveLog = (obj: ListConnectPeersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreNetworkPolicyVersionsRequestFilterSensitiveLog = (
  obj: ListCoreNetworkPolicyVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreNetworkPolicyVersionsResponseFilterSensitiveLog = (
  obj: ListCoreNetworkPolicyVersionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreNetworksRequestFilterSensitiveLog = (obj: ListCoreNetworksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreNetworksResponseFilterSensitiveLog = (obj: ListCoreNetworksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationServiceAccessStatusRequestFilterSensitiveLog = (
  obj: ListOrganizationServiceAccessStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationStatusFilterSensitiveLog = (obj: OrganizationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationServiceAccessStatusResponseFilterSensitiveLog = (
  obj: ListOrganizationServiceAccessStatusResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPeeringsRequestFilterSensitiveLog = (obj: ListPeeringsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPeeringsResponseFilterSensitiveLog = (obj: ListPeeringsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCoreNetworkPolicyRequestFilterSensitiveLog = (obj: PutCoreNetworkPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCoreNetworkPolicyResponseFilterSensitiveLog = (obj: PutCoreNetworkPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyRequestFilterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyResponseFilterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTransitGatewayRequestFilterSensitiveLog = (obj: RegisterTransitGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTransitGatewayResponseFilterSensitiveLog = (obj: RegisterTransitGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectAttachmentRequestFilterSensitiveLog = (obj: RejectAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectAttachmentResponseFilterSensitiveLog = (obj: RejectAttachmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreCoreNetworkPolicyVersionRequestFilterSensitiveLog = (
  obj: RestoreCoreNetworkPolicyVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreCoreNetworkPolicyVersionResponseFilterSensitiveLog = (
  obj: RestoreCoreNetworkPolicyVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOrganizationServiceAccessUpdateRequestFilterSensitiveLog = (
  obj: StartOrganizationServiceAccessUpdateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOrganizationServiceAccessUpdateResponseFilterSensitiveLog = (
  obj: StartOrganizationServiceAccessUpdateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteAnalysisEndpointOptionsSpecificationFilterSensitiveLog = (
  obj: RouteAnalysisEndpointOptionsSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRouteAnalysisRequestFilterSensitiveLog = (obj: StartRouteAnalysisRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRouteAnalysisResponseFilterSensitiveLog = (obj: StartRouteAnalysisResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionRequestFilterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionResponseFilterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCoreNetworkRequestFilterSensitiveLog = (obj: UpdateCoreNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCoreNetworkResponseFilterSensitiveLog = (obj: UpdateCoreNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceRequestFilterSensitiveLog = (obj: UpdateDeviceRequest): any => ({
  ...obj,
  ...(obj.Location && { Location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDeviceResponseFilterSensitiveLog = (obj: UpdateDeviceResponse): any => ({
  ...obj,
  ...(obj.Device && { Device: DeviceFilterSensitiveLog(obj.Device) }),
});

/**
 * @internal
 */
export const UpdateGlobalNetworkRequestFilterSensitiveLog = (obj: UpdateGlobalNetworkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGlobalNetworkResponseFilterSensitiveLog = (obj: UpdateGlobalNetworkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLinkRequestFilterSensitiveLog = (obj: UpdateLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLinkResponseFilterSensitiveLog = (obj: UpdateLinkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNetworkResourceMetadataRequestFilterSensitiveLog = (
  obj: UpdateNetworkResourceMetadataRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNetworkResourceMetadataResponseFilterSensitiveLog = (
  obj: UpdateNetworkResourceMetadataResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSiteRequestFilterSensitiveLog = (obj: UpdateSiteRequest): any => ({
  ...obj,
  ...(obj.Location && { Location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSiteResponseFilterSensitiveLog = (obj: UpdateSiteResponse): any => ({
  ...obj,
  ...(obj.Site && { Site: SiteFilterSensitiveLog(obj.Site) }),
});

/**
 * @internal
 */
export const UpdateVpcAttachmentRequestFilterSensitiveLog = (obj: UpdateVpcAttachmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVpcAttachmentResponseFilterSensitiveLog = (obj: UpdateVpcAttachmentResponse): any => ({
  ...obj,
});
