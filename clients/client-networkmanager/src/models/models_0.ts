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
   * <p>The ID of the attachment. </p>
   * @public
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
 * <p>Describes a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted. </p>
 * @public
 */
export interface ProposedSegmentChange {
  /**
   * <p>The list of key-value tags that changed for the segment.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The rule number in the policy document that applies to this change.</p>
   * @public
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * <p>The name of the segment to change.</p>
   * @public
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
 * <p>Describes a core network attachment.</p>
 * @public
 */
export interface Attachment {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   * @public
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId?: string;

  /**
   * <p>The ID of the attachment account owner.</p>
   * @public
   */
  OwnerAccountId?: string;

  /**
   * <p>The type of attachment.</p>
   * @public
   */
  AttachmentType?: AttachmentType;

  /**
   * <p>The state of the attachment.</p>
   * @public
   */
  State?: AttachmentState;

  /**
   * <p>The Region where the edge is located.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The attachment resource ARN.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The policy rule number associated with the attachment.</p>
   * @public
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * <p>The name of the segment attachment.</p>
   * @public
   */
  SegmentName?: string;

  /**
   * <p>The tags associated with the attachment.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The attachment to move from one segment to another.</p>
   * @public
   */
  ProposedSegmentChange?: ProposedSegmentChange;

  /**
   * <p>The timestamp when the attachment was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp when the attachment was last updated.</p>
   * @public
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface AcceptAttachmentResponse {
  /**
   * <p>The response to the attachment request. </p>
   * @public
   */
  Attachment?: Attachment;
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
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
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   * @public
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The specified resource could not be found.</p>
   * @public
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
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   * @public
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
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The message for the field.</p>
   * @public
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
 * <p>The input fails to satisfy the constraints.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason for the error.</p>
   * @public
   */
  Reason?: ValidationExceptionReason;

  /**
   * <p>The fields that caused the error, if applicable.</p>
   * @public
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
 * @public
 */
export interface AccountStatus {
  /**
   * <p>The ID of an account within the Amazon Web Services Organization.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The status of SLR deployment for the account.</p>
   * @public
   */
  SLRDeploymentStatus?: string;
}

/**
 * @public
 */
export interface AssociateConnectPeerRequest {
  /**
   * <p>The ID of your global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the Connect peer.</p>
   * @public
   */
  ConnectPeerId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   * @public
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
 * <p>Describes a core network Connect peer association.</p>
 * @public
 */
export interface ConnectPeerAssociation {
  /**
   * <p>The ID of the Connect peer.</p>
   * @public
   */
  ConnectPeerId?: string;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device to connect to.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The state of the Connect peer association.</p>
   * @public
   */
  State?: ConnectPeerAssociationState;
}

/**
 * @public
 */
export interface AssociateConnectPeerResponse {
  /**
   * <p>The response to the Connect peer request.</p>
   * @public
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

/**
 * <p>A service limit was exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The limit code.</p>
   * @public
   */
  LimitCode: string | undefined;

  /**
   * <p>The service code.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   * @public
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   * @public
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
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 * @public
 */
export interface CustomerGatewayAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   * @public
   */
  CustomerGatewayArn?: string;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The association state.</p>
   * @public
   */
  State?: CustomerGatewayAssociationState;
}

/**
 * @public
 */
export interface AssociateCustomerGatewayResponse {
  /**
   * <p>The customer gateway association.</p>
   * @public
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

/**
 * @public
 */
export interface AssociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   * @public
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
 * <p>Describes the association between a device and a link.</p>
 * @public
 */
export interface LinkAssociation {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The device ID for the link association.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  LinkAssociationState?: LinkAssociationState;
}

/**
 * @public
 */
export interface AssociateLinkResponse {
  /**
   * <p>The link association.</p>
   * @public
   */
  LinkAssociation?: LinkAssociation;
}

/**
 * @public
 */
export interface AssociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeerArn: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   * @public
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
 * <p>Describes a transit gateway Connect peer association.</p>
 * @public
 */
export interface TransitGatewayConnectPeerAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeerArn?: string;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: TransitGatewayConnectPeerAssociationState;
}

/**
 * @public
 */
export interface AssociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   * @public
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

/**
 * <p>Specifies a location in Amazon Web Services.</p>
 * @public
 */
export interface AWSLocation {
  /**
   * <p>The Zone that the device is located in. Specify the ID of an Availability Zone, Local
   *             Zone, Wavelength Zone, or an Outpost.</p>
   * @public
   */
  Zone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet that the device is located in.</p>
   * @public
   */
  SubnetArn?: string;
}

/**
 * <p>Describes bandwidth information.</p>
 * @public
 */
export interface Bandwidth {
  /**
   * <p>Upload speed in Mbps.</p>
   * @public
   */
  UploadSpeed?: number;

  /**
   * <p>Download speed in Mbps.</p>
   * @public
   */
  DownloadSpeed?: number;
}

/**
 * <p>Describes the BGP options.</p>
 * @public
 */
export interface BgpOptions {
  /**
   * <p>The Peer ASN of the BGP.</p>
   * @public
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
  NO_ENCAP: "NO_ENCAP",
} as const;

/**
 * @public
 */
export type TunnelProtocol = (typeof TunnelProtocol)[keyof typeof TunnelProtocol];

/**
 * <p>Describes a core network Connect attachment options.</p>
 * @public
 */
export interface ConnectAttachmentOptions {
  /**
   * <p>The protocol used for the attachment connection.</p>
   * @public
   */
  Protocol?: TunnelProtocol;
}

/**
 * <p>Describes a core network Connect attachment.</p>
 * @public
 */
export interface ConnectAttachment {
  /**
   * <p>The attachment details.</p>
   * @public
   */
  Attachment?: Attachment;

  /**
   * <p>The ID of the transport attachment.</p>
   * @public
   */
  TransportAttachmentId?: string;

  /**
   * <p>Options for connecting an attachment.</p>
   * @public
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
 * <p>Describes a connection.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  ConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   * @public
   */
  ConnectionArn?: string;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the first device in the connection.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The ID of the second device in the connection.</p>
   * @public
   */
  ConnectedDeviceId?: string;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   * @public
   */
  ConnectedLinkId?: string;

  /**
   * <p>The description of the connection.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date and time that the connection was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the connection.</p>
   * @public
   */
  State?: ConnectionState;

  /**
   * <p>The tags for the connection.</p>
   * @public
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
 * <p>Describes connection health.</p>
 * @public
 */
export interface ConnectionHealth {
  /**
   * <p>The connection type.</p>
   * @public
   */
  Type?: ConnectionType;

  /**
   * <p>The connection status.</p>
   * @public
   */
  Status?: ConnectionStatus;

  /**
   * <p>The time the status was last updated.</p>
   * @public
   */
  Timestamp?: Date;
}

/**
 * <p>Describes a core network BGP configuration.</p>
 * @public
 */
export interface ConnectPeerBgpConfiguration {
  /**
   * <p>The ASN of the Coret Network.</p>
   * @public
   */
  CoreNetworkAsn?: number;

  /**
   * <p>The ASN of the Connect peer.</p>
   * @public
   */
  PeerAsn?: number;

  /**
   * <p>The address of a core network.</p>
   * @public
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The address of a core network Connect peer.</p>
   * @public
   */
  PeerAddress?: string;
}

/**
 * <p>Describes a core network Connect peer configuration.</p>
 * @public
 */
export interface ConnectPeerConfiguration {
  /**
   * <p>The IP address of a core network.</p>
   * @public
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The IP address of the Connect peer.</p>
   * @public
   */
  PeerAddress?: string;

  /**
   * <p>The inside IP addresses used for a Connect peer configuration.</p>
   * @public
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The protocol used for a Connect peer configuration.</p>
   * @public
   */
  Protocol?: TunnelProtocol;

  /**
   * <p>The Connect peer BGP configurations.</p>
   * @public
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
 * <p>Describes a core network Connect peer.</p>
 * @public
 */
export interface ConnectPeer {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the attachment to connect.</p>
   * @public
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The ID of the Connect peer.</p>
   * @public
   */
  ConnectPeerId?: string;

  /**
   * <p>The Connect peer Regions where edges are located.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The state of the Connect peer.</p>
   * @public
   */
  State?: ConnectPeerState;

  /**
   * <p>The timestamp when the Connect peer was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The configuration of the Connect peer.</p>
   * @public
   */
  Configuration?: ConnectPeerConfiguration;

  /**
   * <p>The list of key-value tags associated with the Connect peer.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The subnet ARN for the Connect peer.</p>
   * @public
   */
  SubnetArn?: string;
}

/**
 * <p>Summary description of a Connect peer.</p>
 * @public
 */
export interface ConnectPeerSummary {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of a Connect peer attachment.</p>
   * @public
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The ID of a Connect peer.</p>
   * @public
   */
  ConnectPeerId?: string;

  /**
   * <p>The Region where the edge is located.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The state of a Connect peer.</p>
   * @public
   */
  ConnectPeerState?: ConnectPeerState;

  /**
   * <p>The timestamp when a Connect peer was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The list of key-value tags associated with the Connect peer summary.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The subnet ARN for the Connect peer summary.</p>
   * @public
   */
  SubnetArn?: string;
}

/**
 * <p>Describes a core network edge.</p>
 * @public
 */
export interface CoreNetworkEdge {
  /**
   * <p>The Region where a core network edge is located.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The ASN of a core network edge.</p>
   * @public
   */
  Asn?: number;

  /**
   * <p>The inside IP addresses used for core network edges.</p>
   * @public
   */
  InsideCidrBlocks?: string[];
}

/**
 * <p>Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other.</p>
 * @public
 */
export interface CoreNetworkSegment {
  /**
   * <p>The name of a core network segment.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Regions where the edges are located.</p>
   * @public
   */
  EdgeLocations?: string[];

  /**
   * <p>The shared segments of a core network.</p>
   * @public
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
 * <p>Describes a core network.</p>
 * @public
 */
export interface CoreNetwork {
  /**
   * <p>The ID of the global network that your core network is a part of. </p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   * @public
   */
  CoreNetworkArn?: string;

  /**
   * <p>The description of a core network.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The current state of a core network.</p>
   * @public
   */
  State?: CoreNetworkState;

  /**
   * <p>The segments within a core network.</p>
   * @public
   */
  Segments?: CoreNetworkSegment[];

  /**
   * <p>The edges within a core network.</p>
   * @public
   */
  Edges?: CoreNetworkEdge[];

  /**
   * <p>The list of key-value tags associated with a core network.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Describes a core network change.</p>
 * @public
 */
export interface CoreNetworkChangeValues {
  /**
   * <p>The names of the segments in a core network.</p>
   * @public
   */
  SegmentName?: string;

  /**
   * <p>The Regions where edges are located in a core network. </p>
   * @public
   */
  EdgeLocations?: string[];

  /**
   * <p>The ASN of a core network.</p>
   * @public
   */
  Asn?: number;

  /**
   * <p>The IP addresses used for a core network.</p>
   * @public
   */
  Cidr?: string;

  /**
   * <p>The ID of the destination.</p>
   * @public
   */
  DestinationIdentifier?: string;

  /**
   * <p>The inside IP addresses used for core network change values.</p>
   * @public
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The shared segments for a core network change value. </p>
   * @public
   */
  SharedSegments?: string[];
}

/**
 * <p>Details describing a core network change.</p>
 * @public
 */
export interface CoreNetworkChange {
  /**
   * <p>The type of change.</p>
   * @public
   */
  Type?: ChangeType;

  /**
   * <p>The action to take for a core network.</p>
   * @public
   */
  Action?: ChangeAction;

  /**
   * <p>The resource identifier.</p>
   * @public
   */
  Identifier?: string;

  /**
   * <p>The previous values for a core network.</p>
   * @public
   */
  PreviousValues?: CoreNetworkChangeValues;

  /**
   * <p>The new value for a core network</p>
   * @public
   */
  NewValues?: CoreNetworkChangeValues;

  /**
   * <p>Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.</p>
   * @public
   */
  IdentifierPath?: string;
}

/**
 * <p>Describes a core network change event.</p>
 * @public
 */
export interface CoreNetworkChangeEventValues {
  /**
   * <p>The edge location for the core network change event.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The segment name if the change event is associated with a segment.</p>
   * @public
   */
  SegmentName?: string;

  /**
   * <p>The ID of the attachment if the change event is associated with an attachment.  </p>
   * @public
   */
  AttachmentId?: string;

  /**
   * <p>For a <code>STATIC_ROUTE</code> event, this is the IP address.</p>
   * @public
   */
  Cidr?: string;
}

/**
 * <p>Describes a core network change event. This can be a change to a segment, attachment, route, etc.</p>
 * @public
 */
export interface CoreNetworkChangeEvent {
  /**
   * <p>Describes the type of change event. </p>
   * @public
   */
  Type?: ChangeType;

  /**
   * <p>The action taken for the change event.</p>
   * @public
   */
  Action?: ChangeAction;

  /**
   * <p>Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.</p>
   * @public
   */
  IdentifierPath?: string;

  /**
   * <p>The timestamp for an event change in status.</p>
   * @public
   */
  EventTime?: Date;

  /**
   * <p>The status of the core network change event.</p>
   * @public
   */
  Status?: ChangeStatus;

  /**
   * <p>Details of the change event.</p>
   * @public
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
 * <p>Provides details about an error in a core network policy.</p>
 * @public
 */
export interface CoreNetworkPolicyError {
  /**
   * <p>The error code associated with a core network policy error.</p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with a core network policy error code.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The JSON path where the error was discovered in the policy document.</p>
   * @public
   */
  Path?: string;
}

/**
 * <p>Describes a core network policy. You can have only one LIVE Core Policy.</p>
 * @public
 */
export interface CoreNetworkPolicy {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the policy version.</p>
   * @public
   */
  PolicyVersionId?: number;

  /**
   * <p>Whether a core network policy is the current LIVE policy or the most recently submitted policy.</p>
   * @public
   */
  Alias?: CoreNetworkPolicyAlias;

  /**
   * <p>The description of a core network policy.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network policy was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The state of a core network policy.</p>
   * @public
   */
  ChangeSetState?: ChangeSetState;

  /**
   * <p>Describes any errors in a core network policy.</p>
   * @public
   */
  PolicyErrors?: CoreNetworkPolicyError[];

  /**
   * <p>Describes a core network policy.</p>
   * @public
   */
  PolicyDocument?: __LazyJsonString | string;
}

/**
 * <p>Describes a core network policy exception.</p>
 * @public
 */
export class CoreNetworkPolicyException extends __BaseException {
  readonly name: "CoreNetworkPolicyException" = "CoreNetworkPolicyException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Describes a core network policy exception.</p>
   * @public
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
 * @public
 */
export interface CoreNetworkPolicyVersion {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the policy version.</p>
   * @public
   */
  PolicyVersionId?: number;

  /**
   * <p>Whether a core network policy is the current policy or the most recently submitted policy.</p>
   * @public
   */
  Alias?: CoreNetworkPolicyAlias;

  /**
   * <p>The description of a core network policy version.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network policy version was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The status of the policy version change set.</p>
   * @public
   */
  ChangeSetState?: ChangeSetState;
}

/**
 * <p>Returns details about a core network edge.</p>
 * @public
 */
export interface CoreNetworkSegmentEdgeIdentifier {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The name of the segment edge.</p>
   * @public
   */
  SegmentName?: string;

  /**
   * <p>The Region where the segment edge is located.</p>
   * @public
   */
  EdgeLocation?: string;
}

/**
 * <p>Returns summary information about a core network.</p>
 * @public
 */
export interface CoreNetworkSummary {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>a core network ARN.</p>
   * @public
   */
  CoreNetworkArn?: string;

  /**
   * <p>The global network ID.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the account owner.</p>
   * @public
   */
  OwnerAccountId?: string;

  /**
   * <p>The state of a core network.</p>
   * @public
   */
  State?: CoreNetworkState;

  /**
   * <p>The description of a core network.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The key-value tags associated with a core network summary.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateConnectAttachmentRequest {
  /**
   * <p>The ID of a core network where you want to create the attachment. </p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The Region where the edge is located.</p>
   * @public
   */
  EdgeLocation: string | undefined;

  /**
   * <p>The ID of the attachment between the two connections.</p>
   * @public
   */
  TransportAttachmentId: string | undefined;

  /**
   * <p>Options for creating an attachment.</p>
   * @public
   */
  Options: ConnectAttachmentOptions | undefined;

  /**
   * <p>The list of key-value tags associated with the request.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateConnectAttachmentResponse {
  /**
   * <p>The response to a Connect attachment request.</p>
   * @public
   */
  ConnectAttachment?: ConnectAttachment;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the first device in the connection.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the second device in the connection.</p>
   * @public
   */
  ConnectedDeviceId: string | undefined;

  /**
   * <p>The ID of the link for the first device.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device.</p>
   * @public
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *          <p>Length Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   * @public
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface CreateConnectPeerRequest {
  /**
   * <p>The ID of the connection attachment.</p>
   * @public
   */
  ConnectAttachmentId: string | undefined;

  /**
   * <p>A Connect peer core network address.</p>
   * @public
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The Connect peer address.</p>
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * <p>The Connect peer BGP options.</p>
   * @public
   */
  BgpOptions?: BgpOptions;

  /**
   * <p>The inside IP addresses used for BGP peering.</p>
   * @public
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The tags associated with the peer request.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The subnet ARN for the Connect peer.</p>
   * @public
   */
  SubnetArn?: string;
}

/**
 * @public
 */
export interface CreateConnectPeerResponse {
  /**
   * <p>The response to the request.</p>
   * @public
   */
  ConnectPeer?: ConnectPeer;
}

/**
 * @public
 */
export interface CreateCoreNetworkRequest {
  /**
   * <p>The ID of the global network that a core network will be a part of. </p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The description of a core network.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Key-value tags associated with a core network request.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The policy document for creating a core network.</p>
   * @public
   */
  PolicyDocument?: string;

  /**
   * <p>The client token associated with a core network request.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateCoreNetworkResponse {
  /**
   * <p>Returns details about a core network.</p>
   * @public
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * <p>Describes a location.</p>
 * @public
 */
export interface Location {
  /**
   * <p>The physical address.</p>
   * @public
   */
  Address?: string;

  /**
   * <p>The latitude.</p>
   * @public
   */
  Latitude?: string;

  /**
   * <p>The longitude.</p>
   * @public
   */
  Longitude?: string;
}

/**
 * @public
 */
export interface CreateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   * @public
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  SerialNumber?: string;

  /**
   * <p>The location of the device.</p>
   * @public
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   * @public
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
 * <p>Describes a device.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  DeviceArn?: string;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Web Services location of the device.</p>
   * @public
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>The description of the device.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The device type.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The device vendor.</p>
   * @public
   */
  Vendor?: string;

  /**
   * <p>The device model.</p>
   * @public
   */
  Model?: string;

  /**
   * <p>The device serial number.</p>
   * @public
   */
  SerialNumber?: string;

  /**
   * <p>The site location.</p>
   * @public
   */
  Location?: Location;

  /**
   * <p>The site ID.</p>
   * @public
   */
  SiteId?: string;

  /**
   * <p>The date and time that the site was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The device state.</p>
   * @public
   */
  State?: DeviceState;

  /**
   * <p>The tags for the device.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   * @public
   */
  Device?: Device;
}

/**
 * @public
 */
export interface CreateGlobalNetworkRequest {
  /**
   * <p>A description of the global network.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   * @public
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
 * <p>Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network.</p>
 * @public
 */
export interface GlobalNetwork {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the global network.</p>
   * @public
   */
  GlobalNetworkArn?: string;

  /**
   * <p>The description of the global network.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date and time that the global network was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the global network.</p>
   * @public
   */
  State?: GlobalNetworkState;

  /**
   * <p>The tags for the global network.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   * @public
   */
  GlobalNetwork?: GlobalNetwork;
}

/**
 * @public
 */
export interface CreateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   * @public
   */
  Type?: string;

  /**
   * <p> The upload speed and download speed in Mbps. </p>
   * @public
   */
  Bandwidth: Bandwidth | undefined;

  /**
   * <p>The provider of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   * @public
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   * @public
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
 * <p>Describes a link.</p>
 * @public
 */
export interface Link {
  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the link.</p>
   * @public
   */
  LinkArn?: string;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string;

  /**
   * <p>The description of the link.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The bandwidth for the link.</p>
   * @public
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   * @public
   */
  Provider?: string;

  /**
   * <p>The date and time that the link was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the link.</p>
   * @public
   */
  State?: LinkState;

  /**
   * <p>The tags for the link.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLinkResponse {
  /**
   * <p>Information about the link.</p>
   * @public
   */
  Link?: Link;
}

/**
 * @public
 */
export interface CreateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
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
   * @public
   */
  Location?: Location;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   * @public
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
 * <p>Describes a site.</p>
 * @public
 */
export interface Site {
  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   * @public
   */
  SiteArn?: string;

  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The description of the site.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The location of the site.</p>
   * @public
   */
  Location?: Location;

  /**
   * <p>The date and time that the site was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the site.</p>
   * @public
   */
  State?: SiteState;

  /**
   * <p>The tags for the site.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSiteResponse {
  /**
   * <p>Information about the site.</p>
   * @public
   */
  Site?: Site;
}

/**
 * @public
 */
export interface CreateSiteToSiteVpnAttachmentRequest {
  /**
   * <p>The ID of a core network where you're creating a site-to-site VPN attachment.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN identifying the VPN attachment.</p>
   * @public
   */
  VpnConnectionArn: string | undefined;

  /**
   * <p>The tags associated with the request.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * <p>Creates a site-to-site VPN attachment.</p>
 * @public
 */
export interface SiteToSiteVpnAttachment {
  /**
   * <p>Provides details about a site-to-site VPN attachment.</p>
   * @public
   */
  Attachment?: Attachment;

  /**
   * <p>The ARN of the site-to-site VPN attachment. </p>
   * @public
   */
  VpnConnectionArn?: string;
}

/**
 * @public
 */
export interface CreateSiteToSiteVpnAttachmentResponse {
  /**
   * <p>Details about a site-to-site VPN attachment.</p>
   * @public
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN of the transit gateway for the peering request.</p>
   * @public
   */
  TransitGatewayArn: string | undefined;

  /**
   * <p>The list of key-value tags associated with the request.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   * @public
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
 * <p>Describes a peering connection.</p>
 * @public
 */
export interface Peering {
  /**
   * <p>The ID of the core network for the peering request.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   * @public
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ID of the peering attachment. </p>
   * @public
   */
  PeeringId?: string;

  /**
   * <p>The ID of the account owner.</p>
   * @public
   */
  OwnerAccountId?: string;

  /**
   * <p>The type of peering. This will be <code>TRANSIT_GATEWAY</code>.</p>
   * @public
   */
  PeeringType?: PeeringType;

  /**
   * <p>The current state of the peering connection. </p>
   * @public
   */
  State?: PeeringState;

  /**
   * <p>The edge location for the peer.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The resource ARN of the peer.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The list of key-value tags associated with the peering.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The timestamp when the attachment peer was created.</p>
   * @public
   */
  CreatedAt?: Date;
}

/**
 * <p>Describes a transit gateway peering attachment.</p>
 * @public
 */
export interface TransitGatewayPeering {
  /**
   * <p>Describes a transit gateway peer connection.</p>
   * @public
   */
  Peering?: Peering;

  /**
   * <p>The ARN of the transit gateway.</p>
   * @public
   */
  TransitGatewayArn?: string;

  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachmentId?: string;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringResponse {
  /**
   * <p>Returns information about the transit gateway peering connection request.</p>
   * @public
   */
  TransitGatewayPeering?: TransitGatewayPeering;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAttachmentRequest {
  /**
   * <p>The ID of the peer for the </p>
   * @public
   */
  PeeringId: string | undefined;

  /**
   * <p>The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.</p>
   * @public
   */
  TransitGatewayRouteTableArn: string | undefined;

  /**
   * <p>The list of key-value tags associated with the request.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * <p>Describes a transit gateway route table attachment.</p>
 * @public
 */
export interface TransitGatewayRouteTableAttachment {
  /**
   * <p>Describes a core network attachment.</p>
   * @public
   */
  Attachment?: Attachment;

  /**
   * <p>The ID of the peering attachment.</p>
   * @public
   */
  PeeringId?: string;

  /**
   * <p>The ARN of the transit gateway attachment route table. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.</p>
   * @public
   */
  TransitGatewayRouteTableArn?: string;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAttachmentResponse {
  /**
   * <p>The route table associated with the create transit gateway route table attachment request.</p>
   * @public
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}

/**
 * <p>Describes the VPC options.</p>
 * @public
 */
export interface VpcOptions {
  /**
   * <p>Indicates whether IPv6 is supported.</p>
   * @public
   */
  Ipv6Support?: boolean;

  /**
   * <p>Indicates whether appliance mode is supported.  If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is <code>false</code>.</p>
   * @public
   */
  ApplianceModeSupport?: boolean;
}

/**
 * @public
 */
export interface CreateVpcAttachmentRequest {
  /**
   * <p>The ID of a core network for the VPC attachment.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN of the VPC.</p>
   * @public
   */
  VpcArn: string | undefined;

  /**
   * <p>The subnet ARN of the VPC attachment.</p>
   * @public
   */
  SubnetArns: string[] | undefined;

  /**
   * <p>Options for the VPC attachment.</p>
   * @public
   */
  Options?: VpcOptions;

  /**
   * <p>The key-value tags associated with the request.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * <p>Describes a VPC attachment.</p>
 * @public
 */
export interface VpcAttachment {
  /**
   * <p>Provides details about the VPC attachment.</p>
   * @public
   */
  Attachment?: Attachment;

  /**
   * <p>The subnet ARNs.</p>
   * @public
   */
  SubnetArns?: string[];

  /**
   * <p>Provides details about the VPC attachment.</p>
   * @public
   */
  Options?: VpcOptions;
}

/**
 * @public
 */
export interface CreateVpcAttachmentResponse {
  /**
   * <p>Provides details about the VPC attachment.</p>
   * @public
   */
  VpcAttachment?: VpcAttachment;
}

/**
 * @public
 */
export interface DeleteAttachmentRequest {
  /**
   * <p>The ID of the attachment to delete.</p>
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttachmentResponse {
  /**
   * <p>Information about the deleted attachment.</p>
   * @public
   */
  Attachment?: Attachment;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   * @public
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface DeleteConnectPeerRequest {
  /**
   * <p>The ID of the deleted Connect peer.</p>
   * @public
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectPeerResponse {
  /**
   * <p>Information about the deleted Connect peer.</p>
   * @public
   */
  ConnectPeer?: ConnectPeer;
}

/**
 * @public
 */
export interface DeleteCoreNetworkRequest {
  /**
   * <p>The network ID of the deleted core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkResponse {
  /**
   * <p>Information about the deleted core network.</p>
   * @public
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPolicyVersionRequest {
  /**
   * <p>The ID of a core network for the deleted policy.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The version ID of the deleted policy.</p>
   * @public
   */
  PolicyVersionId: number | undefined;
}

/**
 * @public
 */
export interface DeleteCoreNetworkPolicyVersionResponse {
  /**
   * <p>Returns information about the deleted policy version. </p>
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceResponse {
  /**
   * <p>Information about the device.</p>
   * @public
   */
  Device?: Device;
}

/**
 * @public
 */
export interface DeleteGlobalNetworkRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalNetworkResponse {
  /**
   * <p>Information about the global network.</p>
   * @public
   */
  GlobalNetwork?: GlobalNetwork;
}

/**
 * @public
 */
export interface DeleteLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkResponse {
  /**
   * <p>Information about the link.</p>
   * @public
   */
  Link?: Link;
}

/**
 * @public
 */
export interface DeletePeeringRequest {
  /**
   * <p>The ID of the peering connection to delete.</p>
   * @public
   */
  PeeringId: string | undefined;
}

/**
 * @public
 */
export interface DeletePeeringResponse {
  /**
   * <p>Information about a deleted peering connection.</p>
   * @public
   */
  Peering?: Peering;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The ARN of the policy to delete.</p>
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
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSiteResponse {
  /**
   * <p>Information about the site.</p>
   * @public
   */
  Site?: Site;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   * @public
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
 * <p>Describes the status of a transit gateway registration.</p>
 * @public
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * <p>The code for the state reason.</p>
   * @public
   */
  Code?: TransitGatewayRegistrationState;

  /**
   * <p>The message for the state reason.</p>
   * @public
   */
  Message?: string;
}

/**
 * <p>Describes the registration of a transit gateway to a global network.</p>
 * @public
 */
export interface TransitGatewayRegistration {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   * @public
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway registration.</p>
   * @public
   */
  State?: TransitGatewayRegistrationStateReason;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayResponse {
  /**
   * <p>The transit gateway registration information.</p>
   * @public
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

/**
 * @public
 */
export interface DescribeGlobalNetworksRequest {
  /**
   * <p>The IDs of one or more global networks. The maximum is 10.</p>
   * @public
   */
  GlobalNetworkIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGlobalNetworksResponse {
  /**
   * <p>Information about the global networks.</p>
   * @public
   */
  GlobalNetworks?: GlobalNetwork[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DisassociateConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the Connect peer to disassociate from a device.</p>
   * @public
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectPeerResponse {
  /**
   * <p>Describes the Connect peer association.</p>
   * @public
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

/**
 * @public
 */
export interface DisassociateCustomerGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   * @public
   */
  CustomerGatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomerGatewayResponse {
  /**
   * <p>Information about the customer gateway association.</p>
   * @public
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

/**
 * @public
 */
export interface DisassociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateLinkResponse {
  /**
   * <p>Information about the link association.</p>
   * @public
   */
  LinkAssociation?: LinkAssociation;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeerArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   * @public
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

/**
 * @public
 */
export interface ExecuteCoreNetworkChangeSetRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
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
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectAttachmentResponse {
  /**
   * <p>Details about the Connect attachment.</p>
   * @public
   */
  ConnectAttachment?: ConnectAttachment;
}

/**
 * @public
 */
export interface GetConnectionsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more connection IDs.</p>
   * @public
   */
  ConnectionIds?: string[];

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectionsResponse {
  /**
   * <p>Information about the connections.</p>
   * @public
   */
  Connections?: Connection[];

  /**
   * <p>The token to use for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectPeerRequest {
  /**
   * <p>The ID of the Connect peer.</p>
   * @public
   */
  ConnectPeerId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectPeerResponse {
  /**
   * <p>Returns information about a core network Connect peer.</p>
   * @public
   */
  ConnectPeer?: ConnectPeer;
}

/**
 * @public
 */
export interface GetConnectPeerAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The IDs of the Connect peers.</p>
   * @public
   */
  ConnectPeerIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectPeerAssociationsResponse {
  /**
   * <p>Displays a list of Connect peer associations.</p>
   * @public
   */
  ConnectPeerAssociations?: ConnectPeerAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreNetworkResponse {
  /**
   * <p>Details about a core network.</p>
   * @public
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeEventsRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
   * @public
   */
  PolicyVersionId: number | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeEventsResponse {
  /**
   * <p>The response to <code>GetCoreNetworkChangeEventsRequest</code>.</p>
   * @public
   */
  CoreNetworkChangeEvents?: CoreNetworkChangeEvent[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeSetRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
   * @public
   */
  PolicyVersionId: number | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkChangeSetResponse {
  /**
   * <p>Describes a core network changes.</p>
   * @public
   */
  CoreNetworkChanges?: CoreNetworkChange[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCoreNetworkPolicyRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of a core network policy version.</p>
   * @public
   */
  PolicyVersionId?: number;

  /**
   * <p>The alias of a core network policy </p>
   * @public
   */
  Alias?: CoreNetworkPolicyAlias;
}

/**
 * @public
 */
export interface GetCoreNetworkPolicyResponse {
  /**
   * <p>The details about a core network policy.</p>
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface GetCustomerGatewayAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.</p>
   * @public
   */
  CustomerGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCustomerGatewayAssociationsResponse {
  /**
   * <p>The customer gateway associations.</p>
   * @public
   */
  CustomerGatewayAssociations?: CustomerGatewayAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDevicesRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more device IDs. The maximum is 10.</p>
   * @public
   */
  DeviceIds?: string[];

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDevicesResponse {
  /**
   * <p>The devices.</p>
   * @public
   */
  Devices?: Device[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinkAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinkAssociationsResponse {
  /**
   * <p>The link associations.</p>
   * @public
   */
  LinkAssociations?: LinkAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinksRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more link IDs. The maximum is 10.</p>
   * @public
   */
  LinkIds?: string[];

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string;

  /**
   * <p>The link type.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The link provider.</p>
   * @public
   */
  Provider?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLinksResponse {
  /**
   * <p>The links.</p>
   * @public
   */
  Links?: Link[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkResourceCountsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
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
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes a resource count.</p>
 * @public
 */
export interface NetworkResourceCount {
  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The resource count.</p>
   * @public
   */
  Count?: number;
}

/**
 * @public
 */
export interface GetNetworkResourceCountsResponse {
  /**
   * <p>The count of resources.</p>
   * @public
   */
  NetworkResourceCounts?: NetworkResourceCount[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkResourceRelationshipsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the registered gateway.</p>
   * @public
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string;

  /**
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
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the gateway.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes a resource relationship.</p>
 * @public
 */
export interface Relationship {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  From?: string;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  To?: string;
}

/**
 * @public
 */
export interface GetNetworkResourceRelationshipsResponse {
  /**
   * <p>The resource relationships.</p>
   * @public
   */
  Relationships?: Relationship[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkResourcesRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the gateway.</p>
   * @public
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string;

  /**
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
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes a network resource.</p>
 * @public
 */
export interface NetworkResource {
  /**
   * <p>The ARN of the gateway.</p>
   * @public
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string;

  /**
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
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   * @public
   */
  Definition?: string;

  /**
   * <p>The time that the resource definition was retrieved.</p>
   * @public
   */
  DefinitionTimestamp?: Date;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The resource metadata.</p>
   * @public
   */
  Metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface GetNetworkResourcesResponse {
  /**
   * <p>The network resources.</p>
   * @public
   */
  NetworkResources?: NetworkResource[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes a route table.</p>
 * @public
 */
export interface RouteTableIdentifier {
  /**
   * <p>The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.</p>
   * @public
   */
  TransitGatewayRouteTableArn?: string;

  /**
   * <p>The segment edge in a core network.</p>
   * @public
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
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableIdentifier: RouteTableIdentifier | undefined;

  /**
   * <p>An exact CIDR block.</p>
   * @public
   */
  ExactCidrMatches?: string[];

  /**
   * <p>The most specific route that matches the traffic (longest prefix match).</p>
   * @public
   */
  LongestPrefixMatches?: string[];

  /**
   * <p>The routes with a subnet that match the specified CIDR filter.</p>
   * @public
   */
  SubnetOfMatches?: string[];

  /**
   * <p>The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   * @public
   */
  SupernetOfMatches?: string[];

  /**
   * <p>The IDs of the prefix lists.</p>
   * @public
   */
  PrefixListIds?: string[];

  /**
   * <p>The route states.</p>
   * @public
   */
  States?: RouteState[];

  /**
   * <p>The route types.</p>
   * @public
   */
  Types?: RouteType[];

  /**
   * <p>Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.</p>
   * @public
   */
  DestinationFilters?: Record<string, string[]>;
}

/**
 * <p>Describes the destination of a network route.</p>
 * @public
 */
export interface NetworkRouteDestination {
  /**
   * <p>The ID of a core network attachment.</p>
   * @public
   */
  CoreNetworkAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The name of the segment.</p>
   * @public
   */
  SegmentName?: string;

  /**
   * <p>The edge location for the network destination.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;
}

/**
 * <p>Describes a network route.</p>
 * @public
 */
export interface NetworkRoute {
  /**
   * <p>A unique identifier for the route, such as a CIDR block.</p>
   * @public
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The destinations.</p>
   * @public
   */
  Destinations?: NetworkRouteDestination[];

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string;

  /**
   * <p>The route state. The possible values are <code>active</code> and <code>blackhole</code>.</p>
   * @public
   */
  State?: RouteState;

  /**
   * <p>The route type. The possible values are <code>propagated</code> and <code>static</code>.</p>
   * @public
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
   * <p>The ARN of the route table.</p>
   * @public
   */
  RouteTableArn?: string;

  /**
   * <p>Describes a core network segment edge.</p>
   * @public
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;

  /**
   * <p>The route table type.</p>
   * @public
   */
  RouteTableType?: RouteTableType;

  /**
   * <p>The route table creation time.</p>
   * @public
   */
  RouteTableTimestamp?: Date;

  /**
   * <p>The network routes.</p>
   * @public
   */
  NetworkRoutes?: NetworkRoute[];
}

/**
 * @public
 */
export interface GetNetworkTelemetryRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the gateway.</p>
   * @public
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string;

  /**
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
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes the telemetry information for a resource.</p>
 * @public
 */
export interface NetworkTelemetry {
  /**
   * <p>The ARN of the gateway.</p>
   * @public
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The address.</p>
   * @public
   */
  Address?: string;

  /**
   * <p>The connection health.</p>
   * @public
   */
  Health?: ConnectionHealth;
}

/**
 * @public
 */
export interface GetNetworkTelemetryResponse {
  /**
   * <p>The network telemetry.</p>
   * @public
   */
  NetworkTelemetry?: NetworkTelemetry[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The resource policy document.</p>
   * @public
   */
  PolicyDocument?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface GetRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route analysis.</p>
   * @public
   */
  RouteAnalysisId: string | undefined;
}

/**
 * <p>Describes a source or a destination.</p>
 * @public
 */
export interface RouteAnalysisEndpointOptions {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The ARN of the transit gateway.</p>
   * @public
   */
  TransitGatewayArn?: string;

  /**
   * <p>The IP address.</p>
   * @public
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
 * <p>Describes the status of an analysis at completion.</p>
 * @public
 */
export interface RouteAnalysisCompletion {
  /**
   * <p>The result of the analysis. If the status is <code>NOT_CONNECTED</code>, check the
   *             reason code.</p>
   * @public
   */
  ResultCode?: RouteAnalysisCompletionResultCode;

  /**
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
   * @public
   */
  ReasonCode?: RouteAnalysisCompletionReasonCode;

  /**
   * <p>Additional information about the path. Available only if a connection is not found.</p>
   * @public
   */
  ReasonContext?: Record<string, string>;
}

/**
 * <p>Describes a network resource.</p>
 * @public
 */
export interface NetworkResourceSummary {
  /**
   * <p>The ARN of the gateway.</p>
   * @public
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   * @public
   */
  Definition?: string;

  /**
   * <p>The value for the Name tag.</p>
   * @public
   */
  NameTag?: string;

  /**
   * <p>Indicates whether this is a middlebox appliance.</p>
   * @public
   */
  IsMiddlebox?: boolean;
}

/**
 * <p>Describes a path component.</p>
 * @public
 */
export interface PathComponent {
  /**
   * <p>The sequence number in the path. The destination is 0.</p>
   * @public
   */
  Sequence?: number;

  /**
   * <p>The resource.</p>
   * @public
   */
  Resource?: NetworkResourceSummary;

  /**
   * <p>The destination CIDR block in the route table.</p>
   * @public
   */
  DestinationCidrBlock?: string;
}

/**
 * <p>Describes a route analysis path.</p>
 * @public
 */
export interface RouteAnalysisPath {
  /**
   * <p>The status of the analysis at completion.</p>
   * @public
   */
  CompletionStatus?: RouteAnalysisCompletion;

  /**
   * <p>The route analysis path.</p>
   * @public
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
 * <p>Describes a route analysis.</p>
 * @public
 */
export interface RouteAnalysis {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the AWS account that created the route analysis.</p>
   * @public
   */
  OwnerAccountId?: string;

  /**
   * <p>The ID of the route analysis.</p>
   * @public
   */
  RouteAnalysisId?: string;

  /**
   * <p>The time that the analysis started.</p>
   * @public
   */
  StartTimestamp?: Date;

  /**
   * <p>The status of the route analysis.</p>
   * @public
   */
  Status?: RouteAnalysisStatus;

  /**
   * <p>The source.</p>
   * @public
   */
  Source?: RouteAnalysisEndpointOptions;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination?: RouteAnalysisEndpointOptions;

  /**
   * <p>Indicates whether to analyze the return path. The return path is not analyzed if the forward path
   *             analysis does not succeed.</p>
   * @public
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.</p>
   * @public
   */
  UseMiddleboxes?: boolean;

  /**
   * <p>The forward path.</p>
   * @public
   */
  ForwardPath?: RouteAnalysisPath;

  /**
   * <p>The return path.</p>
   * @public
   */
  ReturnPath?: RouteAnalysisPath;
}

/**
 * @public
 */
export interface GetRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   * @public
   */
  RouteAnalysis?: RouteAnalysis;
}

/**
 * @public
 */
export interface GetSitesRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more site IDs. The maximum is 10.</p>
   * @public
   */
  SiteIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSitesResponse {
  /**
   * <p>The sites.</p>
   * @public
   */
  Sites?: Site[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSiteToSiteVpnAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetSiteToSiteVpnAttachmentResponse {
  /**
   * <p>Describes the site-to-site attachment.</p>
   * @public
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

/**
 * @public
 */
export interface GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more transit gateway Connect peer Amazon Resource Names (ARNs).</p>
   * @public
   */
  TransitGatewayConnectPeerArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * <p>Information about the transit gateway Connect peer associations.</p>
   * @public
   */
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[];

  /**
   * <p>The token to use for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPeeringRequest {
  /**
   * <p>The ID of the peering request.</p>
   * @public
   */
  PeeringId: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPeeringResponse {
  /**
   * <p>Returns information about a transit gateway peering. </p>
   * @public
   */
  TransitGatewayPeering?: TransitGatewayPeering;
}

/**
 * @public
 */
export interface GetTransitGatewayRegistrationsRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
   *             10.</p>
   * @public
   */
  TransitGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRegistrationsResponse {
  /**
   * <p>The transit gateway registrations.</p>
   * @public
   */
  TransitGatewayRegistrations?: TransitGatewayRegistration[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAttachmentRequest {
  /**
   * <p>The ID of the transit gateway route table attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAttachmentResponse {
  /**
   * <p>Returns information about the transit gateway route table attachment.</p>
   * @public
   */
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}

/**
 * @public
 */
export interface GetVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface GetVpcAttachmentResponse {
  /**
   * <p>Returns details about a VPC attachment.</p>
   * @public
   */
  VpcAttachment?: VpcAttachment;
}

/**
 * @public
 */
export interface ListAttachmentsRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The type of attachment.</p>
   * @public
   */
  AttachmentType?: AttachmentType;

  /**
   * <p>The Region where the edge is located.</p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>The state of the attachment.</p>
   * @public
   */
  State?: AttachmentState;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAttachmentsResponse {
  /**
   * <p>Describes the list of attachments.</p>
   * @public
   */
  Attachments?: Attachment[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectPeersRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectPeersResponse {
  /**
   * <p>Describes the Connect peers.</p>
   * @public
   */
  ConnectPeers?: ConnectPeerSummary[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworkPolicyVersionsRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworkPolicyVersionsResponse {
  /**
   * <p>Describes core network policy versions.</p>
   * @public
   */
  CoreNetworkPolicyVersions?: CoreNetworkPolicyVersion[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworksRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreNetworksResponse {
  /**
   * <p>Describes the list of core networks.</p>
   * @public
   */
  CoreNetworks?: CoreNetworkSummary[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationServiceAccessStatusRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The status of an Amazon Web Services Organization and the accounts within that organization.</p>
 * @public
 */
export interface OrganizationStatus {
  /**
   * <p>The ID of an Amazon Web Services Organization.</p>
   * @public
   */
  OrganizationId?: string;

  /**
   * <p>The status  of the organization's AWS service access. This will be <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  OrganizationAwsServiceAccessStatus?: string;

  /**
   * <p>The status of the SLR deployment for the account. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.</p>
   * @public
   */
  SLRDeploymentStatus?: string;

  /**
   * <p>The current service-linked role (SLR) deployment status for an Amazon Web Services Organization's accounts. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.</p>
   * @public
   */
  AccountStatusList?: AccountStatus[];
}

/**
 * @public
 */
export interface ListOrganizationServiceAccessStatusResponse {
  /**
   * <p>Displays the status of an Amazon Web Services Organization.</p>
   * @public
   */
  OrganizationStatus?: OrganizationStatus;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPeeringsRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>Returns a list of a peering requests.</p>
   * @public
   */
  PeeringType?: PeeringType;

  /**
   * <p>Returns a list edge locations for the </p>
   * @public
   */
  EdgeLocation?: string;

  /**
   * <p>Returns a list of the peering request states.</p>
   * @public
   */
  State?: PeeringState;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPeeringsResponse {
  /**
   * <p>Lists the transit gateway peerings for the <code>ListPeerings</code> request.</p>
   * @public
   */
  Peerings?: Peering[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags.</p>
   * @public
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PutCoreNetworkPolicyRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The policy document.</p>
   * @public
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * <p>a core network policy description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ID of a core network policy. </p>
   * @public
   */
  LatestVersionId?: number;

  /**
   * <p>The client token associated with the request.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface PutCoreNetworkPolicyResponse {
  /**
   * <p>Describes the changed core network policy.</p>
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The JSON resource policy document.</p>
   * @public
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * <p>The ARN of the resource policy. </p>
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
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   * @public
   */
  TransitGatewayArn: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayResponse {
  /**
   * <p>Information about the transit gateway registration.</p>
   * @public
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

/**
 * @public
 */
export interface RejectAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;
}

/**
 * @public
 */
export interface RejectAttachmentResponse {
  /**
   * <p>Describes the rejected attachment request.</p>
   * @public
   */
  Attachment?: Attachment;
}

/**
 * @public
 */
export interface RestoreCoreNetworkPolicyVersionRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version to restore.</p>
   * @public
   */
  PolicyVersionId: number | undefined;
}

/**
 * @public
 */
export interface RestoreCoreNetworkPolicyVersionResponse {
  /**
   * <p>Describes the restored core network policy.</p>
   * @public
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

/**
 * @public
 */
export interface StartOrganizationServiceAccessUpdateRequest {
  /**
   * <p>The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.</p>
   * @public
   */
  Action: string | undefined;
}

/**
 * @public
 */
export interface StartOrganizationServiceAccessUpdateResponse {
  /**
   * <p>The status of the service access update request for an Amazon Web Services Organization.</p>
   * @public
   */
  OrganizationStatus?: OrganizationStatus;
}

/**
 * <p>Describes a source or a destination.</p>
 * @public
 */
export interface RouteAnalysisEndpointOptionsSpecification {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The IP address.</p>
   * @public
   */
  IpAddress?: string;
}

/**
 * @public
 */
export interface StartRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The source from which traffic originates.</p>
   * @public
   */
  Source: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>Indicates whether to analyze the return path. The default is <code>false</code>.</p>
   * @public
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.
   *             The default is <code>false</code>.</p>
   * @public
   */
  UseMiddleboxes?: boolean;
}

/**
 * @public
 */
export interface StartRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   * @public
   */
  RouteAnalysis?: RouteAnalysis;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply to the specified resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the specified resource.</p>
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
export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   * @public
   */
  ConnectionId: string | undefined;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   * @public
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   * @public
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *          <p>Length Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   * @public
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface UpdateCoreNetworkRequest {
  /**
   * <p>The ID of a core network.</p>
   * @public
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The description of the update.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateCoreNetworkResponse {
  /**
   * <p>Returns information about a core network update.</p>
   * @public
   */
  CoreNetwork?: CoreNetwork;
}

/**
 * @public
 */
export interface UpdateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   * @public
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  SerialNumber?: string;

  /**
   * <p>Describes a location.</p>
   * @public
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   * @public
   */
  SiteId?: string;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   * @public
   */
  Device?: Device;
}

/**
 * @public
 */
export interface UpdateGlobalNetworkRequest {
  /**
   * <p>The ID of your global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the global network.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   * @public
   */
  GlobalNetwork?: GlobalNetwork;
}

/**
 * @public
 */
export interface UpdateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   * @public
   */
  LinkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The upload and download speed in Mbps. </p>
   * @public
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   *          <p>Constraints: Maximum length of 128 characters.</p>
   * @public
   */
  Provider?: string;
}

/**
 * @public
 */
export interface UpdateLinkResponse {
  /**
   * <p>Information about the link.</p>
   * @public
   */
  Link?: Link;
}

/**
 * @public
 */
export interface UpdateNetworkResourceMetadataRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource metadata.</p>
   * @public
   */
  Metadata: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkResourceMetadataResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The updated resource metadata.</p>
   * @public
   */
  Metadata?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of your site.</p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string;

  /**
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
   * @public
   */
  Location?: Location;
}

/**
 * @public
 */
export interface UpdateSiteResponse {
  /**
   * <p>Information about the site.</p>
   * @public
   */
  Site?: Site;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>Adds a subnet ARN to the VPC attachment.</p>
   * @public
   */
  AddSubnetArns?: string[];

  /**
   * <p>Removes a subnet ARN from the attachment.</p>
   * @public
   */
  RemoveSubnetArns?: string[];

  /**
   * <p>Additional options for updating the VPC attachment. </p>
   * @public
   */
  Options?: VpcOptions;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentResponse {
  /**
   * <p>Describes the updated VPC attachment.</p>
   * @public
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
