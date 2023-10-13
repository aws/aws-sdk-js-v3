// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@smithy/smithy-client";

import { NetworkManagerServiceException as __BaseException } from "./NetworkManagerServiceException";

/**
 * @public
 */
export interface AcceptAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment. </p>
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AttachmentType = {
  CONNECT: "CONNECT",
  SITE_TO_SITE_VPN: "SITE_TO_SITE_VPN",
  TRANSIT_GATEWAY_ROUTE_TABLE: "TRANSIT_GATEWAY_ROUTE_TABLE",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType];

/**
 * @public
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag key.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The tag value.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted. </p>
 */
export interface ProposedSegmentChange {
  /**
   * @public
   * <p>The list of key-value tags that changed for the segment.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The rule number in the policy document that applies to this change.</p>
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * @public
   * <p>The name of the segment to change.</p>
   */
  SegmentName?: string;
}

/**
 * @public
 * @enum
 */
export const AttachmentState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING_ATTACHMENT_ACCEPTANCE: "PENDING_ATTACHMENT_ACCEPTANCE",
  PENDING_NETWORK_UPDATE: "PENDING_NETWORK_UPDATE",
  PENDING_TAG_ACCEPTANCE: "PENDING_TAG_ACCEPTANCE",
  REJECTED: "REJECTED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AttachmentState = (typeof AttachmentState)[keyof typeof AttachmentState];

/**
 * @public
 * <p>Describes a core network attachment.</p>
 */
export interface Attachment {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  AttachmentId?: string;

  /**
   * @public
   * <p>The ID of the attachment account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The type of attachment.</p>
   */
  AttachmentType?: AttachmentType;

  /**
   * @public
   * <p>The state of the attachment.</p>
   */
  State?: AttachmentState;

  /**
   * @public
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The attachment resource ARN.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The policy rule number associated with the attachment.</p>
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * @public
   * <p>The name of the segment attachment.</p>
   */
  SegmentName?: string;

  /**
   * @public
   * <p>The tags associated with the attachment.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The attachment to move from one segment to another.</p>
   */
  ProposedSegmentChange?: ProposedSegmentChange;

  /**
   * @public
   * <p>The timestamp when the attachment was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The timestamp when the attachment was last updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface AcceptAttachmentResponse {
  /**
   * @public
   * <p>The response to the attachment request. </p>
   */
  Attachment?: Attachment;
}

/**
 * @public
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
 * @public
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The request has failed due to an internal error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @public
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
 * @public
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
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
 * @public
 * <p>Describes a validation exception for a field.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The message for the field.</p>
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  OTHER: "Other",
  UNKNOWN_OPERATION: "UnknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The input fails to satisfy the constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The reason for the error.</p>
   */
  Reason?: ValidationExceptionReason;

  /**
   * @public
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
 * @public
 * <p>Describes the current status of an account within an Amazon Web Services Organization, including service-linked roles (SLRs).</p>
 */
export interface AccountStatus {
  /**
   * @public
   * <p>The ID of an account within the Amazon Web Services Organization.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The status of SLR deployment for the account.</p>
   */
  SLRDeploymentStatus?: string;
}

/**
 * @public
 */
export interface AssociateConnectPeerRequest {
  /**
   * @public
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

/**
 * @public
 * @enum
 */
export const ConnectPeerAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;

/**
 * @public
 */
export type ConnectPeerAssociationState =
  (typeof ConnectPeerAssociationState)[keyof typeof ConnectPeerAssociationState];

/**
 * @public
 * <p>Describes a core network Connect peer association.</p>
 */
export interface ConnectPeerAssociation {
  /**
   * @public
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of the device to connect to.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The state of the Connect peer association.</p>
   */
  State?: ConnectPeerAssociationState;
}

/**
 * @public
 */
export interface AssociateConnectPeerResponse {
  /**
   * @public
   * <p>The response to the Connect peer request.</p>
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

/**
 * @public
 * <p>A service limit was exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error message.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The limit code.</p>
   */
  LimitCode: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface AssociateCustomerGatewayRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

/**
 * @public
 * @enum
 */
export const CustomerGatewayAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;

/**
 * @public
 */
export type CustomerGatewayAssociationState =
  (typeof CustomerGatewayAssociationState)[keyof typeof CustomerGatewayAssociationState];

/**
 * @public
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 */
export interface CustomerGatewayAssociation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn?: string;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The association state.</p>
   */
  State?: CustomerGatewayAssociationState;
}

/**
 * @public
 */
export interface AssociateCustomerGatewayResponse {
  /**
   * @public
   * <p>The customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

/**
 * @public
 */
export interface AssociateLinkRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LinkAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;

/**
 * @public
 */
export type LinkAssociationState = (typeof LinkAssociationState)[keyof typeof LinkAssociationState];

/**
 * @public
 * <p>Describes the association between a device and a link.</p>
 */
export interface LinkAssociation {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The device ID for the link association.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  LinkAssociationState?: LinkAssociationState;
}

/**
 * @public
 */
export interface AssociateLinkResponse {
  /**
   * @public
   * <p>The link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

/**
 * @public
 */
export interface AssociateTransitGatewayConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayConnectPeerAssociationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  pending: "PENDING",
} as const;

/**
 * @public
 */
export type TransitGatewayConnectPeerAssociationState =
  (typeof TransitGatewayConnectPeerAssociationState)[keyof typeof TransitGatewayConnectPeerAssociationState];

/**
 * @public
 * <p>Describes a transit gateway Connect peer association.</p>
 */
export interface TransitGatewayConnectPeerAssociation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn?: string;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayConnectPeerAssociationState;
}

/**
 * @public
 */
export interface AssociateTransitGatewayConnectPeerResponse {
  /**
   * @public
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

/**
 * @public
 * <p>Specifies a location in Amazon Web Services.</p>
 */
export interface AWSLocation {
  /**
   * @public
   * <p>The Zone that the device is located in. Specify the ID of an Availability Zone, Local
   *             Zone, Wavelength Zone, or an Outpost.</p>
   */
  Zone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the subnet that the device is located in.</p>
   */
  SubnetArn?: string;
}

/**
 * @public
 * <p>Describes bandwidth information.</p>
 */
export interface Bandwidth {
  /**
   * @public
   * <p>Upload speed in Mbps.</p>
   */
  UploadSpeed?: number;

  /**
   * @public
   * <p>Download speed in Mbps.</p>
   */
  DownloadSpeed?: number;
}

/**
 * @public
 * <p>Describes the BGP options.</p>
 */
export interface BgpOptions {
  /**
   * @public
   * <p>The Peer ASN of the BGP.</p>
   */
  PeerAsn?: number;
}

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  ADD: "ADD",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;

/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const ChangeSetState = {
  EXECUTING: "EXECUTING",
  EXECUTION_SUCCEEDED: "EXECUTION_SUCCEEDED",
  FAILED_GENERATION: "FAILED_GENERATION",
  OUT_OF_DATE: "OUT_OF_DATE",
  PENDING_GENERATION: "PENDING_GENERATION",
  READY_TO_EXECUTE: "READY_TO_EXECUTE",
} as const;

/**
 * @public
 */
export type ChangeSetState = (typeof ChangeSetState)[keyof typeof ChangeSetState];

/**
 * @public
 * @enum
 */
export const ChangeStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ChangeStatus = (typeof ChangeStatus)[keyof typeof ChangeStatus];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  ATTACHMENT_MAPPING: "ATTACHMENT_MAPPING",
  ATTACHMENT_POLICIES_CONFIGURATION: "ATTACHMENT_POLICIES_CONFIGURATION",
  ATTACHMENT_ROUTE_PROPAGATION: "ATTACHMENT_ROUTE_PROPAGATION",
  ATTACHMENT_ROUTE_STATIC: "ATTACHMENT_ROUTE_STATIC",
  CORE_NETWORK_CONFIGURATION: "CORE_NETWORK_CONFIGURATION",
  CORE_NETWORK_EDGE: "CORE_NETWORK_EDGE",
  CORE_NETWORK_SEGMENT: "CORE_NETWORK_SEGMENT",
  SEGMENTS_CONFIGURATION: "SEGMENTS_CONFIGURATION",
  SEGMENT_ACTIONS_CONFIGURATION: "SEGMENT_ACTIONS_CONFIGURATION",
} as const;

/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const TunnelProtocol = {
  GRE: "GRE",
} as const;

/**
 * @public
 */
export type TunnelProtocol = (typeof TunnelProtocol)[keyof typeof TunnelProtocol];

/**
 * @public
 * <p>Describes a core network Connect attachment options.</p>
 */
export interface ConnectAttachmentOptions {
  /**
   * @public
   * <p>The protocol used for the attachment connection.</p>
   */
  Protocol?: TunnelProtocol;
}

/**
 * @public
 * <p>Describes a core network Connect attachment.</p>
 */
export interface ConnectAttachment {
  /**
   * @public
   * <p>The attachment details.</p>
   */
  Attachment?: Attachment;

  /**
   * @public
   * <p>The ID of the transport attachment.</p>
   */
  TransportAttachmentId?: string;

  /**
   * @public
   * <p>Options for connecting an attachment.</p>
   */
  Options?: ConnectAttachmentOptions;
}

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;

/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * <p>Describes a connection.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId?: string;

  /**
   * @public
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * @public
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time that the connection was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The state of the connection.</p>
   */
  State?: ConnectionState;

  /**
   * @public
   * <p>The tags for the connection.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  DOWN: "DOWN",
  UP: "UP",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  BGP: "BGP",
  IPSEC: "IPSEC",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * <p>Describes connection health.</p>
 */
export interface ConnectionHealth {
  /**
   * @public
   * <p>The connection type.</p>
   */
  Type?: ConnectionType;

  /**
   * @public
   * <p>The connection status.</p>
   */
  Status?: ConnectionStatus;

  /**
   * @public
   * <p>The time the status was last updated.</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 * <p>Describes a core network BGP configuration.</p>
 */
export interface ConnectPeerBgpConfiguration {
  /**
   * @public
   * <p>The ASN of the Coret Network.</p>
   */
  CoreNetworkAsn?: number;

  /**
   * @public
   * <p>The ASN of the Connect peer.</p>
   */
  PeerAsn?: number;

  /**
   * @public
   * <p>The address of a core network.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * @public
   * <p>The address of a core network Connect peer.</p>
   */
  PeerAddress?: string;
}

/**
 * @public
 * <p>Describes a core network Connect peer configuration.</p>
 */
export interface ConnectPeerConfiguration {
  /**
   * @public
   * <p>The IP address of a core network.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * @public
   * <p>The IP address of the Connect peer.</p>
   */
  PeerAddress?: string;

  /**
   * @public
   * <p>The inside IP addresses used for a Connect peer configuration.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * @public
   * <p>The protocol used for a Connect peer configuration.</p>
   */
  Protocol?: TunnelProtocol;

  /**
   * @public
   * <p>The Connect peer BGP configurations.</p>
   */
  BgpConfigurations?: ConnectPeerBgpConfiguration[];
}

/**
 * @public
 * @enum
 */
export const ConnectPeerState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ConnectPeerState = (typeof ConnectPeerState)[keyof typeof ConnectPeerState];

/**
 * @public
 * <p>Describes a core network Connect peer.</p>
 */
export interface ConnectPeer {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ID of the attachment to connect.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * @public
   * <p>The Connect peer Regions where edges are located.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The state of the Connect peer.</p>
   */
  State?: ConnectPeerState;

  /**
   * @public
   * <p>The timestamp when the Connect peer was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The configuration of the Connect peer.</p>
   */
  Configuration?: ConnectPeerConfiguration;

  /**
   * @public
   * <p>The list of key-value tags associated with the Connect peer.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Summary description of a Connect peer.</p>
 */
export interface ConnectPeerSummary {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ID of a Connect peer attachment.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * @public
   * <p>The ID of a Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * @public
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The state of a Connect peer.</p>
   */
  ConnectPeerState?: ConnectPeerState;

  /**
   * @public
   * <p>The timestamp when a Connect peer was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The list of key-value tags associated with the Connect peer summary.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Describes a core network edge.</p>
 */
export interface CoreNetworkEdge {
  /**
   * @public
   * <p>The Region where a core network edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The ASN of a core network edge.</p>
   */
  Asn?: number;

  /**
   * @public
   * <p>The inside IP addresses used for core network edges.</p>
   */
  InsideCidrBlocks?: string[];
}

/**
 * @public
 * <p>Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other.</p>
 */
export interface CoreNetworkSegment {
  /**
   * @public
   * <p>The name of a core network segment.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Regions where the edges are located.</p>
   */
  EdgeLocations?: string[];

  /**
   * @public
   * <p>The shared segments of a core network.</p>
   */
  SharedSegments?: string[];
}

/**
 * @public
 * @enum
 */
export const CoreNetworkState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type CoreNetworkState = (typeof CoreNetworkState)[keyof typeof CoreNetworkState];

/**
 * @public
 * <p>Describes a core network.</p>
 */
export interface CoreNetwork {
  /**
   * @public
   * <p>The ID of the global network that your core network is a part of. </p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * @public
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp when a core network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The current state of a core network.</p>
   */
  State?: CoreNetworkState;

  /**
   * @public
   * <p>The segments within a core network.</p>
   */
  Segments?: CoreNetworkSegment[];

  /**
   * @public
   * <p>The edges within a core network.</p>
   */
  Edges?: CoreNetworkEdge[];

  /**
   * @public
   * <p>The list of key-value tags associated with a core network.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Describes a core network change.</p>
 */
export interface CoreNetworkChangeValues {
  /**
   * @public
   * <p>The names of the segments in a core network.</p>
   */
  SegmentName?: string;

  /**
   * @public
   * <p>The Regions where edges are located in a core network. </p>
   */
  EdgeLocations?: string[];

  /**
   * @public
   * <p>The ASN of a core network.</p>
   */
  Asn?: number;

  /**
   * @public
   * <p>The IP addresses used for a core network.</p>
   */
  Cidr?: string;

  /**
   * @public
   * <p>The ID of the destination.</p>
   */
  DestinationIdentifier?: string;

  /**
   * @public
   * <p>The inside IP addresses used for core network change values.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * @public
   * <p>The shared segments for a core network change value. </p>
   */
  SharedSegments?: string[];
}

/**
 * @public
 * <p>Details describing a core network change.</p>
 */
export interface CoreNetworkChange {
  /**
   * @public
   * <p>The type of change.</p>
   */
  Type?: ChangeType;

  /**
   * @public
   * <p>The action to take for a core network.</p>
   */
  Action?: ChangeAction;

  /**
   * @public
   * <p>The resource identifier.</p>
   */
  Identifier?: string;

  /**
   * @public
   * <p>The previous values for a core network.</p>
   */
  PreviousValues?: CoreNetworkChangeValues;

  /**
   * @public
   * <p>The new value for a core network</p>
   */
  NewValues?: CoreNetworkChangeValues;

  /**
   * @public
   * <p>Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.</p>
   */
  IdentifierPath?: string;
}

/**
 * @public
 * <p>Describes a core network change event.</p>
 */
export interface CoreNetworkChangeEventValues {
  /**
   * @public
   * <p>The edge location for the core network change event.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The segment name if the change event is associated with a segment.</p>
   */
  SegmentName?: string;

  /**
   * @public
   * <p>The ID of the attachment if the change event is associated with an attachment.  </p>
   */
  AttachmentId?: string;

  /**
   * @public
   * <p>For a <code>STATIC_ROUTE</code> event, this is the IP address.</p>
   */
  Cidr?: string;
}

/**
 * @public
 * <p>Describes a core network change event. This can be a change to a segment, attachment, route, etc.</p>
 */
export interface CoreNetworkChangeEvent {
  /**
   * @public
   * <p>Describes the type of change event. </p>
   */
  Type?: ChangeType;

  /**
   * @public
   * <p>The action taken for the change event.</p>
   */
  Action?: ChangeAction;

  /**
   * @public
   * <p>Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.</p>
   */
  IdentifierPath?: string;

  /**
   * @public
   * <p>The timestamp for an event change in status.</p>
   */
  EventTime?: Date;

  /**
   * @public
   * <p>The status of the core network change event.</p>
   */
  Status?: ChangeStatus;

  /**
   * @public
   * <p>Details of the change event.</p>
   */
  Values?: CoreNetworkChangeEventValues;
}

/**
 * @public
 * @enum
 */
export const CoreNetworkPolicyAlias = {
  LATEST: "LATEST",
  LIVE: "LIVE",
} as const;

/**
 * @public
 */
export type CoreNetworkPolicyAlias = (typeof CoreNetworkPolicyAlias)[keyof typeof CoreNetworkPolicyAlias];

/**
 * @public
 * <p>Provides details about an error in a core network policy.</p>
 */
export interface CoreNetworkPolicyError {
  /**
   * @public
   * <p>The error code associated with a core network policy error.</p>
   */
  ErrorCode: string | undefined;

  /**
   * @public
   * <p>The message associated with a core network policy error code.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The JSON path where the error was discovered in the policy document.</p>
   */
  Path?: string;
}

/**
 * @public
 * <p>Describes a core network policy. You can have only one LIVE Core Policy.</p>
 */
export interface CoreNetworkPolicy {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * @public
   * <p>Whether a core network policy is the current LIVE policy or the most recently submitted policy.</p>
   */
  Alias?: CoreNetworkPolicyAlias;

  /**
   * @public
   * <p>The description of a core network policy.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp when a core network policy was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The state of a core network policy.</p>
   */
  ChangeSetState?: ChangeSetState;

  /**
   * @public
   * <p>Describes any errors in a core network policy.</p>
   */
  PolicyErrors?: CoreNetworkPolicyError[];

  /**
   * @public
   * <p>Describes a core network policy.</p>
   */
  PolicyDocument?: __LazyJsonString | string;
}

/**
 * @public
 * <p>Describes a core network policy exception.</p>
 */
export class CoreNetworkPolicyException extends __BaseException {
  readonly name: "CoreNetworkPolicyException" = "CoreNetworkPolicyException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
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
 * @public
 * <p>Describes a core network policy version.</p>
 */
export interface CoreNetworkPolicyVersion {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * @public
   * <p>Whether a core network policy is the current policy or the most recently submitted policy.</p>
   */
  Alias?: CoreNetworkPolicyAlias;

  /**
   * @public
   * <p>The description of a core network policy version.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp when a core network policy version was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The status of the policy version change set.</p>
   */
  ChangeSetState?: ChangeSetState;
}

/**
 * @public
 * <p>Returns details about a core network edge.</p>
 */
export interface CoreNetworkSegmentEdgeIdentifier {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The name of the segment edge.</p>
   */
  SegmentName?: string;

  /**
   * @public
   * <p>The Region where the segment edge is located.</p>
   */
  EdgeLocation?: string;
}

/**
 * @public
 * <p>Returns summary information about a core network.</p>
 */
export interface CoreNetworkSummary {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>a core network ARN.</p>
   */
  CoreNetworkArn?: string;

  /**
   * @public
   * <p>The global network ID.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of the account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The state of a core network.</p>
   */
  State?: CoreNetworkState;

  /**
   * @public
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The key-value tags associated with a core network summary.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateConnectAttachmentRequest {
  /**
   * @public
   * <p>The ID of a core network where you want to create the attachment. </p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment between the two connections.</p>
   */
  TransportAttachmentId: string | undefined;

  /**
   * @public
   * <p>Options for creating an attachment.</p>
   */
  Options: ConnectAttachmentOptions | undefined;

  /**
   * @public
   * <p>The list of key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateConnectAttachmentResponse {
  /**
   * @public
   * <p>The response to a Connect attachment request.</p>
   */
  ConnectAttachment?: ConnectAttachment;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId: string | undefined;

  /**
   * @public
   * <p>The ID of the link for the first device.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The ID of the link for the second device.</p>
   */
  ConnectedLinkId?: string;

  /**
   * @public
   * <p>A description of the connection.</p>
   *          <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * @public
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface CreateConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the connection attachment.</p>
   */
  ConnectAttachmentId: string | undefined;

  /**
   * @public
   * <p>A Connect peer core network address.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * @public
   * <p>The Connect peer address.</p>
   */
  PeerAddress: string | undefined;

  /**
   * @public
   * <p>The Connect peer BGP options.</p>
   */
  BgpOptions?: BgpOptions;

  /**
   * @public
   * <p>The inside IP addresses used for BGP peering.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * @public
   * <p>The tags associated with the peer request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateConnectPeerResponse {
  /**
   * @public
   * <p>The response to the request.</p>
   */
  ConnectPeer?: ConnectPeer;
}

/**
 * @public
 */
export interface CreateCoreNetworkRequest {
  /**
   * @public
   * <p>The ID of the global network that a core network will be a part of. </p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Key-value tags associated with a core network request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The policy document for creating a core network.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>The client token associated with a core network request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateCoreNetworkResponse {
  /**
   * @public
   * <p>Returns details about a core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * @public
 * <p>Describes a location.</p>
 */
export interface Location {
  /**
   * @public
   * <p>The physical address.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The latitude.</p>
   */
  Latitude?: string;

  /**
   * @public
   * <p>The longitude.</p>
   */
  Longitude?: string;
}

/**
 * @public
 */
export interface CreateDeviceRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * @public
   * <p>A description of the device.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The vendor of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * @public
   * <p>The model of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * @public
   * <p>The serial number of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * @public
   * <p>The location of the device.</p>
   */
  Location?: Location;

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const DeviceState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;

/**
 * @public
 */
export type DeviceState = (typeof DeviceState)[keyof typeof DeviceState];

/**
 * @public
 * <p>Describes a device.</p>
 */
export interface Device {
  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The Amazon Web Services location of the device.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * @public
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The device type.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The device vendor.</p>
   */
  Vendor?: string;

  /**
   * @public
   * <p>The device model.</p>
   */
  Model?: string;

  /**
   * @public
   * <p>The device serial number.</p>
   */
  SerialNumber?: string;

  /**
   * @public
   * <p>The site location.</p>
   */
  Location?: Location;

  /**
   * @public
   * <p>The site ID.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The device state.</p>
   */
  State?: DeviceState;

  /**
   * @public
   * <p>The tags for the device.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDeviceResponse {
  /**
   * @public
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

/**
 * @public
 */
export interface CreateGlobalNetworkRequest {
  /**
   * @public
   * <p>A description of the global network.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const GlobalNetworkState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;

/**
 * @public
 */
export type GlobalNetworkState = (typeof GlobalNetworkState)[keyof typeof GlobalNetworkState];

/**
 * @public
 * <p>Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network.</p>
 */
export interface GlobalNetwork {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the global network.</p>
   */
  GlobalNetworkArn?: string;

  /**
   * @public
   * <p>The description of the global network.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time that the global network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The state of the global network.</p>
   */
  State?: GlobalNetworkState;

  /**
   * @public
   * <p>The tags for the global network.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateGlobalNetworkResponse {
  /**
   * @public
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

/**
 * @public
 */
export interface CreateLinkRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>A description of the link.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Type?: string;

  /**
   * @public
   * <p> The upload speed and download speed in Mbps. </p>
   */
  Bandwidth: Bandwidth | undefined;

  /**
   * @public
   * <p>The provider of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Provider?: string;

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const LinkState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;

/**
 * @public
 */
export type LinkState = (typeof LinkState)[keyof typeof LinkState];

/**
 * @public
 * <p>Describes a link.</p>
 */
export interface Link {
  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the link.</p>
   */
  LinkArn?: string;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The description of the link.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of the link.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The bandwidth for the link.</p>
   */
  Bandwidth?: Bandwidth;

  /**
   * @public
   * <p>The provider of the link.</p>
   */
  Provider?: string;

  /**
   * @public
   * <p>The date and time that the link was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The state of the link.</p>
   */
  State?: LinkState;

  /**
   * @public
   * <p>The tags for the link.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLinkResponse {
  /**
   * @public
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

/**
 * @public
 */
export interface CreateSiteRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>A description of your site.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p>
   *          <ul>
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
   * @public
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const SiteState = {
  available: "AVAILABLE",
  deleting: "DELETING",
  pending: "PENDING",
  updating: "UPDATING",
} as const;

/**
 * @public
 */
export type SiteState = (typeof SiteState)[keyof typeof SiteState];

/**
 * @public
 * <p>Describes a site.</p>
 */
export interface Site {
  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The location of the site.</p>
   */
  Location?: Location;

  /**
   * @public
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The state of the site.</p>
   */
  State?: SiteState;

  /**
   * @public
   * <p>The tags for the site.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSiteResponse {
  /**
   * @public
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

/**
 * @public
 */
export interface CreateSiteToSiteVpnAttachmentRequest {
  /**
   * @public
   * <p>The ID of a core network where you're creating a site-to-site VPN attachment.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ARN identifying the VPN attachment.</p>
   */
  VpnConnectionArn: string | undefined;

  /**
   * @public
   * <p>The tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>Creates a site-to-site VPN attachment.</p>
 */
export interface SiteToSiteVpnAttachment {
  /**
   * @public
   * <p>Provides details about a site-to-site VPN attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * @public
   * <p>The ARN of the site-to-site VPN attachment. </p>
   */
  VpnConnectionArn?: string;
}

/**
 * @public
 */
export interface CreateSiteToSiteVpnAttachmentResponse {
  /**
   * @public
   * <p>Details about a site-to-site VPN attachment.</p>
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ARN of the transit gateway for the peering request.</p>
   */
  TransitGatewayArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const PeeringType = {
  TRANSIT_GATEWAY: "TRANSIT_GATEWAY",
} as const;

/**
 * @public
 */
export type PeeringType = (typeof PeeringType)[keyof typeof PeeringType];

/**
 * @public
 * @enum
 */
export const PeeringState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type PeeringState = (typeof PeeringState)[keyof typeof PeeringState];

/**
 * @public
 * <p>Describes a peering connection.</p>
 */
export interface Peering {
  /**
   * @public
   * <p>The ID of the core network for the peering request.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * @public
   * <p>The ID of the peering attachment. </p>
   */
  PeeringId?: string;

  /**
   * @public
   * <p>The ID of the account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The type of peering. This will be <code>TRANSIT_GATEWAY</code>.</p>
   */
  PeeringType?: PeeringType;

  /**
   * @public
   * <p>The current state of the peering connection. </p>
   */
  State?: PeeringState;

  /**
   * @public
   * <p>The edge location for the peer.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The resource ARN of the peer.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The list of key-value tags associated with the peering.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The timestamp when the attachment peer was created.</p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 * <p>Describes a transit gateway peering attachment.</p>
 */
export interface TransitGatewayPeering {
  /**
   * @public
   * <p>Describes a transit gateway peer connection.</p>
   */
  Peering?: Peering;

  /**
   * @public
   * <p>The ARN of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * @public
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachmentId?: string;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringResponse {
  /**
   * @public
   * <p>Returns information about the transit gateway peering connection request.</p>
   */
  TransitGatewayPeering?: TransitGatewayPeering;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAttachmentRequest {
  /**
   * @public
   * <p>The ID of the peer for the </p>
   */
  PeeringId: string | undefined;

  /**
   * @public
   * <p>The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.</p>
   */
  TransitGatewayRouteTableArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>Describes a transit gateway route table attachment.</p>
 */
export interface TransitGatewayRouteTableAttachment {
  /**
   * @public
   * <p>Describes a core network attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * @public
   * <p>The ID of the peering attachment.</p>
   */
  PeeringId?: string;

  /**
   * @public
   * <p>The ARN of the transit gateway attachment route table. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.</p>
   */
  TransitGatewayRouteTableArn?: string;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAttachmentResponse {
  /**
   * @public
   * <p>The route table associated with the create transit gateway route table attachment request.</p>
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}

/**
 * @public
 * <p>Describes the VPC options.</p>
 */
export interface VpcOptions {
  /**
   * @public
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Support?: boolean;

  /**
   * @public
   * <p>Indicates whether appliance mode is supported.  If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is <code>false</code>.</p>
   */
  ApplianceModeSupport?: boolean;
}

/**
 * @public
 */
export interface CreateVpcAttachmentRequest {
  /**
   * @public
   * <p>The ID of a core network for the VPC attachment.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ARN of the VPC.</p>
   */
  VpcArn: string | undefined;

  /**
   * @public
   * <p>The subnet ARN of the VPC attachment.</p>
   */
  SubnetArns: string[] | undefined;

  /**
   * @public
   * <p>Options for the VPC attachment.</p>
   */
  Options?: VpcOptions;

  /**
   * @public
   * <p>The key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>Describes a VPC attachment.</p>
 */
export interface VpcAttachment {
  /**
   * @public
   * <p>Provides details about the VPC attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * @public
   * <p>The subnet ARNs.</p>
   */
  SubnetArns?: string[];

  /**
   * @public
   * <p>Provides details about the VPC attachment.</p>
   */
  Options?: VpcOptions;
}

/**
 * @public
 */
export interface CreateVpcAttachmentResponse {
  /**
   * @public
   * <p>Provides details about the VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

/**
 * @public
 */
export interface DeleteAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment to delete.</p>
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttachmentResponse {
  /**
   * @public
   * <p>Information about the deleted attachment.</p>
   */
  Attachment?: Attachment;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * @public
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface DeleteConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the deleted Connect peer.</p>
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectPeerResponse {
  /**
   * @public
   * <p>Information about the deleted Connect peer.</p>
   */
  ConnectPeer?: ConnectPeer;
}

/**
 * @public
 */
export interface DeleteCoreNetworkRequest {
  /**
   * @public
   * <p>The network ID of the deleted core network.</p>
   */
  CoreNetworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkResponse {
  /**
   * @public
   * <p>Information about the deleted core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPolicyVersionRequest {
  /**
   * @public
   * <p>The ID of a core network for the deleted policy.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The version ID of the deleted policy.</p>
   */
  PolicyVersionId: number | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPolicyVersionResponse {
  /**
   * @public
   * <p>Returns information about the deleted policy version. </p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceResponse {
  /**
   * @public
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

/**
 * @public
 */
export interface DeleteGlobalNetworkRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalNetworkResponse {
  /**
   * @public
   * <p>Information about the global network.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

/**
 * @public
 */
export interface DeleteLinkRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkResponse {
  /**
   * @public
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

/**
 * @public
 */
export interface DeletePeeringRequest {
  /**
   * @public
   * <p>The ID of the peering connection to delete.</p>
   */
  PeeringId: string | undefined;
}

/**
 * @public
 */
export interface DeletePeeringResponse {
  /**
   * @public
   * <p>Information about a deleted peering connection.</p>
   */
  Peering?: Peering;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The ARN of the policy to delete.</p>
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
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSiteResponse {
  /**
   * @public
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayRegistrationState = {
  available: "AVAILABLE",
  deleted: "DELETED",
  deleting: "DELETING",
  failed: "FAILED",
  pending: "PENDING",
} as const;

/**
 * @public
 */
export type TransitGatewayRegistrationState =
  (typeof TransitGatewayRegistrationState)[keyof typeof TransitGatewayRegistrationState];

/**
 * @public
 * <p>Describes the status of a transit gateway registration.</p>
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * @public
   * <p>The code for the state reason.</p>
   */
  Code?: TransitGatewayRegistrationState;

  /**
   * @public
   * <p>The message for the state reason.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Describes the registration of a transit gateway to a global network.</p>
 */
export interface TransitGatewayRegistration {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * @public
   * <p>The state of the transit gateway registration.</p>
   */
  State?: TransitGatewayRegistrationStateReason;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayResponse {
  /**
   * @public
   * <p>The transit gateway registration information.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

/**
 * @public
 */
export interface DescribeGlobalNetworksRequest {
  /**
   * @public
   * <p>The IDs of one or more global networks. The maximum is 10.</p>
   */
  GlobalNetworkIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGlobalNetworksResponse {
  /**
   * @public
   * <p>Information about the global networks.</p>
   */
  GlobalNetworks?: GlobalNetwork[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DisassociateConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the Connect peer to disassociate from a device.</p>
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectPeerResponse {
  /**
   * @public
   * <p>Describes the Connect peer association.</p>
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

/**
 * @public
 */
export interface DisassociateCustomerGatewayRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomerGatewayResponse {
  /**
   * @public
   * <p>Information about the customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

/**
 * @public
 */
export interface DisassociateLinkRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateLinkResponse {
  /**
   * @public
   * <p>Information about the link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayConnectPeerResponse {
  /**
   * @public
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

/**
 * @public
 */
export interface ExecuteCoreNetworkChangeSetRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the policy version.</p>
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
   * @public
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectAttachmentResponse {
  /**
   * @public
   * <p>Details about the Connect attachment.</p>
   */
  ConnectAttachment?: ConnectAttachment;
}

/**
 * @public
 */
export interface GetConnectionsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>One or more connection IDs.</p>
   */
  ConnectionIds?: string[];

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectionsResponse {
  /**
   * @public
   * <p>Information about the connections.</p>
   */
  Connections?: Connection[];

  /**
   * @public
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectPeerResponse {
  /**
   * @public
   * <p>Returns information about a core network Connect peer.</p>
   */
  ConnectPeer?: ConnectPeer;
}

/**
 * @public
 */
export interface GetConnectPeerAssociationsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The IDs of the Connect peers.</p>
   */
  ConnectPeerIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectPeerAssociationsResponse {
  /**
   * @public
   * <p>Displays a list of Connect peer associations.</p>
   */
  ConnectPeerAssociations?: ConnectPeerAssociation[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkResponse {
  /**
   * @public
   * <p>Details about a core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeEventsRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId: number | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeEventsResponse {
  /**
   * @public
   * <p>The response to <code>GetCoreNetworkChangeEventsRequest</code>.</p>
   */
  CoreNetworkChangeEvents?: CoreNetworkChangeEvent[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeSetRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId: number | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeSetResponse {
  /**
   * @public
   * <p>Describes a core network changes.</p>
   */
  CoreNetworkChanges?: CoreNetworkChange[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkPolicyRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of a core network policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * @public
   * <p>The alias of a core network policy </p>
   */
  Alias?: CoreNetworkPolicyAlias;
}

/**
 * @public
 */
export interface GetCoreNetworkPolicyResponse {
  /**
   * @public
   * <p>The details about a core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface GetCustomerGatewayAssociationsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.</p>
   */
  CustomerGatewayArns?: string[];

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCustomerGatewayAssociationsResponse {
  /**
   * @public
   * <p>The customer gateway associations.</p>
   */
  CustomerGatewayAssociations?: CustomerGatewayAssociation[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDevicesRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>One or more device IDs. The maximum is 10.</p>
   */
  DeviceIds?: string[];

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDevicesResponse {
  /**
   * @public
   * <p>The devices.</p>
   */
  Devices?: Device[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinkAssociationsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinkAssociationsResponse {
  /**
   * @public
   * <p>The link associations.</p>
   */
  LinkAssociations?: LinkAssociation[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinksRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>One or more link IDs. The maximum is 10.</p>
   */
  LinkIds?: string[];

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * @public
   * <p>The link type.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The link provider.</p>
   */
  Provider?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinksResponse {
  /**
   * @public
   * <p>The links.</p>
   */
  Links?: Link[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkResourceCountsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Network Manager:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a resource count.</p>
 */
export interface NetworkResourceCount {
  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The resource count.</p>
   */
  Count?: number;
}

/**
 * @public
 */
export interface GetNetworkResourceCountsResponse {
  /**
   * @public
   * <p>The count of resources.</p>
   */
  NetworkResourceCounts?: NetworkResourceCount[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkResourceRelationshipsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ARN of the registered gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Network Manager:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a resource relationship.</p>
 */
export interface Relationship {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  From?: string;

  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  To?: string;
}

/**
 * @public
 */
export interface GetNetworkResourceRelationshipsResponse {
  /**
   * @public
   * <p>The resource relationships.</p>
   */
  Relationships?: Relationship[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkResourcesRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *          <ul>
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
   *          <p>The following are the supported resource types for Network Manager:</p>
   *          <ul>
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
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *          <ul>
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
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a network resource.</p>
 */
export interface NetworkResource {
  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Network Manager:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * @public
   * <p>The time that the resource definition was retrieved.</p>
   */
  DefinitionTimestamp?: Date;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The resource metadata.</p>
   */
  Metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface GetNetworkResourcesResponse {
  /**
   * @public
   * <p>The network resources.</p>
   */
  NetworkResources?: NetworkResource[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a route table.</p>
 */
export interface RouteTableIdentifier {
  /**
   * @public
   * <p>The ARN of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableArn?: string;

  /**
   * @public
   * <p>The segment edge in a core network.</p>
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
}

/**
 * @public
 * @enum
 */
export const RouteState = {
  ACTIVE: "ACTIVE",
  BLACKHOLE: "BLACKHOLE",
} as const;

/**
 * @public
 */
export type RouteState = (typeof RouteState)[keyof typeof RouteState];

/**
 * @public
 * @enum
 */
export const RouteType = {
  PROPAGATED: "PROPAGATED",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type RouteType = (typeof RouteType)[keyof typeof RouteType];

/**
 * @public
 */
export interface GetNetworkRoutesRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableIdentifier: RouteTableIdentifier | undefined;

  /**
   * @public
   * <p>An exact CIDR block.</p>
   */
  ExactCidrMatches?: string[];

  /**
   * @public
   * <p>The most specific route that matches the traffic (longest prefix match).</p>
   */
  LongestPrefixMatches?: string[];

  /**
   * @public
   * <p>The routes with a subnet that match the specified CIDR filter.</p>
   */
  SubnetOfMatches?: string[];

  /**
   * @public
   * <p>The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   */
  SupernetOfMatches?: string[];

  /**
   * @public
   * <p>The IDs of the prefix lists.</p>
   */
  PrefixListIds?: string[];

  /**
   * @public
   * <p>The route states.</p>
   */
  States?: RouteState[];

  /**
   * @public
   * <p>The route types.</p>
   */
  Types?: RouteType[];

  /**
   * @public
   * <p>Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.</p>
   */
  DestinationFilters?: Record<string, string[]>;
}

/**
 * @public
 * <p>Describes the destination of a network route.</p>
 */
export interface NetworkRouteDestination {
  /**
   * @public
   * <p>The ID of a core network attachment.</p>
   */
  CoreNetworkAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The name of the segment.</p>
   */
  SegmentName?: string;

  /**
   * @public
   * <p>The edge location for the network destination.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

/**
 * @public
 * <p>Describes a network route.</p>
 */
export interface NetworkRoute {
  /**
   * @public
   * <p>A unique identifier for the route, such as a CIDR block.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The destinations.</p>
   */
  Destinations?: NetworkRouteDestination[];

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>The route state. The possible values are <code>active</code> and <code>blackhole</code>.</p>
   */
  State?: RouteState;

  /**
   * @public
   * <p>The route type. The possible values are <code>propagated</code> and <code>static</code>.</p>
   */
  Type?: RouteType;
}

/**
 * @public
 * @enum
 */
export const RouteTableType = {
  CORE_NETWORK_SEGMENT: "CORE_NETWORK_SEGMENT",
  TRANSIT_GATEWAY_ROUTE_TABLE: "TRANSIT_GATEWAY_ROUTE_TABLE",
} as const;

/**
 * @public
 */
export type RouteTableType = (typeof RouteTableType)[keyof typeof RouteTableType];

/**
 * @public
 */
export interface GetNetworkRoutesResponse {
  /**
   * @public
   * <p>The ARN of the route table.</p>
   */
  RouteTableArn?: string;

  /**
   * @public
   * <p>Describes a core network segment edge.</p>
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;

  /**
   * @public
   * <p>The route table type.</p>
   */
  RouteTableType?: RouteTableType;

  /**
   * @public
   * <p>The route table creation time.</p>
   */
  RouteTableTimestamp?: Date;

  /**
   * @public
   * <p>The network routes.</p>
   */
  NetworkRoutes?: NetworkRoute[];
}

/**
 * @public
 */
export interface GetNetworkTelemetryRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Network Manager:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the telemetry information for a resource.</p>
 */
export interface NetworkTelemetry {
  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The address.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The connection health.</p>
   */
  Health?: ConnectionHealth;
}

/**
 * @public
 */
export interface GetNetworkTelemetryResponse {
  /**
   * @public
   * <p>The network telemetry.</p>
   */
  NetworkTelemetry?: NetworkTelemetry[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * @public
   * <p>The resource policy document.</p>
   */
  PolicyDocument?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface GetRouteAnalysisRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId: string | undefined;
}

/**
 * @public
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptions {
  /**
   * @public
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * @public
   * <p>The ARN of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * @public
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

/**
 * @public
 * @enum
 */
export const RouteAnalysisCompletionReasonCode = {
  BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND: "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND",
  CYCLIC_PATH_DETECTED: "CYCLIC_PATH_DETECTED",
  INACTIVE_ROUTE_FOR_DESTINATION_FOUND: "INACTIVE_ROUTE_FOR_DESTINATION_FOUND",
  MAX_HOPS_EXCEEDED: "MAX_HOPS_EXCEEDED",
  NO_DESTINATION_ARN_PROVIDED: "NO_DESTINATION_ARN_PROVIDED",
  POSSIBLE_MIDDLEBOX: "POSSIBLE_MIDDLEBOX",
  ROUTE_NOT_FOUND: "ROUTE_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT: "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND: "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY: "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND: "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type RouteAnalysisCompletionReasonCode =
  (typeof RouteAnalysisCompletionReasonCode)[keyof typeof RouteAnalysisCompletionReasonCode];

/**
 * @public
 * @enum
 */
export const RouteAnalysisCompletionResultCode = {
  CONNECTED: "CONNECTED",
  NOT_CONNECTED: "NOT_CONNECTED",
} as const;

/**
 * @public
 */
export type RouteAnalysisCompletionResultCode =
  (typeof RouteAnalysisCompletionResultCode)[keyof typeof RouteAnalysisCompletionResultCode];

/**
 * @public
 * <p>Describes the status of an analysis at completion.</p>
 */
export interface RouteAnalysisCompletion {
  /**
   * @public
   * <p>The result of the analysis. If the status is <code>NOT_CONNECTED</code>, check the
   *             reason code.</p>
   */
  ResultCode?: RouteAnalysisCompletionResultCode;

  /**
   * @public
   * <p>The reason code. Available only if a connection is not found.</p>
   *          <ul>
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
  ReasonCode?: RouteAnalysisCompletionReasonCode;

  /**
   * @public
   * <p>Additional information about the path. Available only if a connection is not found.</p>
   */
  ReasonContext?: Record<string, string>;
}

/**
 * @public
 * <p>Describes a network resource.</p>
 */
export interface NetworkResourceSummary {
  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * @public
   * <p>The value for the Name tag.</p>
   */
  NameTag?: string;

  /**
   * @public
   * <p>Indicates whether this is a middlebox appliance.</p>
   */
  IsMiddlebox?: boolean;
}

/**
 * @public
 * <p>Describes a path component.</p>
 */
export interface PathComponent {
  /**
   * @public
   * <p>The sequence number in the path. The destination is 0.</p>
   */
  Sequence?: number;

  /**
   * @public
   * <p>The resource.</p>
   */
  Resource?: NetworkResourceSummary;

  /**
   * @public
   * <p>The destination CIDR block in the route table.</p>
   */
  DestinationCidrBlock?: string;
}

/**
 * @public
 * <p>Describes a route analysis path.</p>
 */
export interface RouteAnalysisPath {
  /**
   * @public
   * <p>The status of the analysis at completion.</p>
   */
  CompletionStatus?: RouteAnalysisCompletion;

  /**
   * @public
   * <p>The route analysis path.</p>
   */
  Path?: PathComponent[];
}

/**
 * @public
 * @enum
 */
export const RouteAnalysisStatus = {
  completed: "COMPLETED",
  failed: "FAILED",
  running: "RUNNING",
} as const;

/**
 * @public
 */
export type RouteAnalysisStatus = (typeof RouteAnalysisStatus)[keyof typeof RouteAnalysisStatus];

/**
 * @public
 * <p>Describes a route analysis.</p>
 */
export interface RouteAnalysis {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * @public
   * <p>The ID of the AWS account that created the route analysis.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId?: string;

  /**
   * @public
   * <p>The time that the analysis started.</p>
   */
  StartTimestamp?: Date;

  /**
   * @public
   * <p>The status of the route analysis.</p>
   */
  Status?: RouteAnalysisStatus;

  /**
   * @public
   * <p>The source.</p>
   */
  Source?: RouteAnalysisEndpointOptions;

  /**
   * @public
   * <p>The destination.</p>
   */
  Destination?: RouteAnalysisEndpointOptions;

  /**
   * @public
   * <p>Indicates whether to analyze the return path. The return path is not analyzed if the forward path
   *             analysis does not succeed.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * @public
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.</p>
   */
  UseMiddleboxes?: boolean;

  /**
   * @public
   * <p>The forward path.</p>
   */
  ForwardPath?: RouteAnalysisPath;

  /**
   * @public
   * <p>The return path.</p>
   */
  ReturnPath?: RouteAnalysisPath;
}

/**
 * @public
 */
export interface GetRouteAnalysisResponse {
  /**
   * @public
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

/**
 * @public
 */
export interface GetSitesRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>One or more site IDs. The maximum is 10.</p>
   */
  SiteIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSitesResponse {
  /**
   * @public
   * <p>The sites.</p>
   */
  Sites?: Site[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSiteToSiteVpnAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetSiteToSiteVpnAttachmentResponse {
  /**
   * @public
   * <p>Describes the site-to-site attachment.</p>
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

/**
 * @public
 */
export interface GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>One or more transit gateway Connect peer Amazon Resource Names (ARNs).</p>
   */
  TransitGatewayConnectPeerArns?: string[];

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * @public
   * <p>Information about the transit gateway Connect peer associations.</p>
   */
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[];

  /**
   * @public
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPeeringRequest {
  /**
   * @public
   * <p>The ID of the peering request.</p>
   */
  PeeringId: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPeeringResponse {
  /**
   * @public
   * <p>Returns information about a transit gateway peering. </p>
   */
  TransitGatewayPeering?: TransitGatewayPeering;
}

/**
 * @public
 */
export interface GetTransitGatewayRegistrationsRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
   *             10.</p>
   */
  TransitGatewayArns?: string[];

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRegistrationsResponse {
  /**
   * @public
   * <p>The transit gateway registrations.</p>
   */
  TransitGatewayRegistrations?: TransitGatewayRegistration[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAttachmentRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table attachment.</p>
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAttachmentResponse {
  /**
   * @public
   * <p>Returns information about the transit gateway route table attachment.</p>
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}

/**
 * @public
 */
export interface GetVpcAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetVpcAttachmentResponse {
  /**
   * @public
   * <p>Returns details about a VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

/**
 * @public
 */
export interface ListAttachmentsRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The type of attachment.</p>
   */
  AttachmentType?: AttachmentType;

  /**
   * @public
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>The state of the attachment.</p>
   */
  State?: AttachmentState;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAttachmentsResponse {
  /**
   * @public
   * <p>Describes the list of attachments.</p>
   */
  Attachments?: Attachment[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectPeersRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectPeersResponse {
  /**
   * @public
   * <p>Describes the Connect peers.</p>
   */
  ConnectPeers?: ConnectPeerSummary[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworkPolicyVersionsRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworkPolicyVersionsResponse {
  /**
   * @public
   * <p>Describes core network policy versions.</p>
   */
  CoreNetworkPolicyVersions?: CoreNetworkPolicyVersion[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworksRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworksResponse {
  /**
   * @public
   * <p>Describes the list of core networks.</p>
   */
  CoreNetworks?: CoreNetworkSummary[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationServiceAccessStatusRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The status of an Amazon Web Services Organization and the accounts within that organization.</p>
 */
export interface OrganizationStatus {
  /**
   * @public
   * <p>The ID of an Amazon Web Services Organization.</p>
   */
  OrganizationId?: string;

  /**
   * @public
   * <p>The status  of the organization's AWS service access. This will be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   */
  OrganizationAwsServiceAccessStatus?: string;

  /**
   * @public
   * <p>The status of the SLR deployment for the account. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.</p>
   */
  SLRDeploymentStatus?: string;

  /**
   * @public
   * <p>The current service-linked role (SLR) deployment status for an Amazon Web Services Organization's accounts. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.</p>
   */
  AccountStatusList?: AccountStatus[];
}

/**
 * @public
 */
export interface ListOrganizationServiceAccessStatusResponse {
  /**
   * @public
   * <p>Displays the status of an Amazon Web Services Organization.</p>
   */
  OrganizationStatus?: OrganizationStatus;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPeeringsRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>Returns a list of a peering requests.</p>
   */
  PeeringType?: PeeringType;

  /**
   * @public
   * <p>Returns a list edge locations for the </p>
   */
  EdgeLocation?: string;

  /**
   * @public
   * <p>Returns a list of the peering request states.</p>
   */
  State?: PeeringState;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPeeringsResponse {
  /**
   * @public
   * <p>Lists the transit gateway peerings for the <code>ListPeerings</code> request.</p>
   */
  Peerings?: Peering[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PutCoreNetworkPolicyRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The policy document.</p>
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>a core network policy description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of a core network policy. </p>
   */
  LatestVersionId?: number;

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface PutCoreNetworkPolicyResponse {
  /**
   * @public
   * <p>Describes the changed core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>The JSON resource policy document.</p>
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>The ARN of the resource policy. </p>
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
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayResponse {
  /**
   * @public
   * <p>Information about the transit gateway registration.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

/**
 * @public
 */
export interface RejectAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface RejectAttachmentResponse {
  /**
   * @public
   * <p>Describes the rejected attachment request.</p>
   */
  Attachment?: Attachment;
}

/**
 * @public
 */
export interface RestoreCoreNetworkPolicyVersionRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the policy version to restore.</p>
   */
  PolicyVersionId: number | undefined;
}

/**
 * @public
 */
export interface RestoreCoreNetworkPolicyVersionResponse {
  /**
   * @public
   * <p>Describes the restored core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface StartOrganizationServiceAccessUpdateRequest {
  /**
   * @public
   * <p>The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.</p>
   */
  Action: string | undefined;
}

/**
 * @public
 */
export interface StartOrganizationServiceAccessUpdateResponse {
  /**
   * @public
   * <p>The status of the service access update request for an Amazon Web Services Organization.</p>
   */
  OrganizationStatus?: OrganizationStatus;
}

/**
 * @public
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptionsSpecification {
  /**
   * @public
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * @public
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

/**
 * @public
 */
export interface StartRouteAnalysisRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The source from which traffic originates.</p>
   */
  Source: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * @public
   * <p>The destination.</p>
   */
  Destination: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * @public
   * <p>Indicates whether to analyze the return path. The default is <code>false</code>.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * @public
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.
   *             The default is <code>false</code>.</p>
   */
  UseMiddleboxes?: boolean;
}

/**
 * @public
 */
export interface StartRouteAnalysisResponse {
  /**
   * @public
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the specified resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys to remove from the specified resource.</p>
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
export interface UpdateConnectionRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;

  /**
   * @public
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * @public
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * @public
   * <p>A description of the connection.</p>
   *          <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * @public
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface UpdateCoreNetworkRequest {
  /**
   * @public
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * @public
   * <p>The description of the update.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateCoreNetworkResponse {
  /**
   * @public
   * <p>Returns information about a core network update.</p>
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * @public
 */
export interface UpdateDeviceRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * @public
   * <p>A description of the device.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The vendor of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * @public
   * <p>The model of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * @public
   * <p>The serial number of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * @public
   * <p>Describes a location.</p>
   */
  Location?: Location;

  /**
   * @public
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {
  /**
   * @public
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

/**
 * @public
 */
export interface UpdateGlobalNetworkRequest {
  /**
   * @public
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>A description of the global network.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateGlobalNetworkResponse {
  /**
   * @public
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

/**
 * @public
 */
export interface UpdateLinkRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;

  /**
   * @public
   * <p>A description of the link.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The upload and download speed in Mbps. </p>
   */
  Bandwidth?: Bandwidth;

  /**
   * @public
   * <p>The provider of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;
}

/**
 * @public
 */
export interface UpdateLinkResponse {
  /**
   * @public
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

/**
 * @public
 */
export interface UpdateNetworkResourceMetadataRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The resource metadata.</p>
   */
  Metadata: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkResourceMetadataResponse {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The updated resource metadata.</p>
   */
  Metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSiteRequest {
  /**
   * @public
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * @public
   * <p>The ID of your site.</p>
   */
  SiteId: string | undefined;

  /**
   * @public
   * <p>A description of your site.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The site location:</p>
   *          <ul>
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

/**
 * @public
 */
export interface UpdateSiteResponse {
  /**
   * @public
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * @public
   * <p>Adds a subnet ARN to the VPC attachment.</p>
   */
  AddSubnetArns?: string[];

  /**
   * @public
   * <p>Removes a subnet ARN from the attachment.</p>
   */
  RemoveSubnetArns?: string[];

  /**
   * @public
   * <p>Additional options for updating the VPC attachment. </p>
   */
  Options?: VpcOptions;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentResponse {
  /**
   * @public
   * <p>Describes the updated VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

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
export const DeleteDeviceResponseFilterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
  ...obj,
  ...(obj.Device && { Device: DeviceFilterSensitiveLog(obj.Device) }),
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
export const GetDevicesResponseFilterSensitiveLog = (obj: GetDevicesResponse): any => ({
  ...obj,
  ...(obj.Devices && { Devices: obj.Devices.map((item) => DeviceFilterSensitiveLog(item)) }),
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
