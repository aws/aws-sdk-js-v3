import {
  AddPrefixListEntry,
  AddressAttribute,
  AddressAttributeName,
  Affinity,
  ApplianceModeSupportValue,
  AttributeValue,
  AutoPlacement,
  BlockDeviceMapping,
  ByoipCidr,
  CapacityReservationPreference,
  CapacityReservationState,
  CapacityReservationTarget,
  ClientConnectOptions,
  ConnectionLogOptions,
  CurrencyCodeValues,
  DiskImageFormat,
  DnsSupportValue,
  EndDateType,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateConfigRequest,
  HostRecovery,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceInterruptionBehavior,
  Ipv6SupportValue,
  Placement,
  PlatformValues,
  RouteTableAssociationState,
  SelfServicePortal,
  ShutdownBehavior,
  SpotInstanceType,
  SubnetAssociation,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  TargetCapacitySpecificationRequest,
  TargetConfigurationRequest,
  TransitGatewayAssociation,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VolumeType,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  _InstanceType,
} from "./models_0";
import {
  AutoAcceptSharedAttachmentsValue,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  IKEVersionsRequestListValue,
  IcmpTypeCode,
  LaunchTemplate,
  ManagedPrefixList,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  PortRange,
  ResponseLaunchTemplateData,
  RuleAction,
  TrafficDirection,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorNetworkService,
  TrafficMirrorPortRangeRequest,
  TrafficMirrorRuleAction,
  TrafficMirrorSession,
  TransitGateway,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  VpnConnection,
  VpnEcmpSupportValue,
} from "./models_1";
import {
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  ConversionTask,
  ExportTaskS3Location,
  FastSnapshotRestoreStateCode,
  Filter,
  FpgaImageAttribute,
  FpgaImageAttributeName,
  HttpTokensState,
  ImportImageLicenseConfigurationResponse,
  InstanceAttributeName,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceStatusEvent,
  InstanceTagNotificationAttribute,
  LaunchPermission,
  Monitoring,
  PaymentOption,
  PermissionGroup,
  SnapshotDetail,
  SnapshotTaskDetail,
} from "./models_2";
import {
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  InstanceNetworkInterfaceSpecification,
  LaunchTemplateConfig,
  ReservedInstancesConfiguration,
  RunInstancesMonitoringEnabled,
  ScheduledInstance,
  SnapshotAttributeName,
  SpotFleetRequestConfigData,
  SpotInstanceRequest,
  SpotPlacement,
  TransitGatewayPropagation,
  TransitGatewayPropagationState,
  VolumeModification,
} from "./models_3";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface DisassociateIamInstanceProfileRequest {
  /**
   * <p>The ID of the IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateIamInstanceProfileRequest {
  export const filterSensitiveLog = (obj: DisassociateIamInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface DisassociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export namespace DisassociateIamInstanceProfileResult {
  export const filterSensitiveLog = (obj: DisassociateIamInstanceProfileResult): any => ({
    ...obj,
  });
}

export interface DisassociateRouteTableRequest {
  /**
   * <p>The association ID representing the current association between the route table and subnet or gateway.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateRouteTableRequest {
  export const filterSensitiveLog = (obj: DisassociateRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSubnetCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateSubnetCidrBlockRequest {
  export const filterSensitiveLog = (obj: DisassociateSubnetCidrBlockRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace DisassociateSubnetCidrBlockResult {
  export const filterSensitiveLog = (obj: DisassociateSubnetCidrBlockResult): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets;</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateTransitGatewayMulticastDomainRequest {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export namespace DisassociateTransitGatewayMulticastDomainResult {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisassociateTransitGatewayRouteTableRequest {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export namespace DisassociateTransitGatewayRouteTableResult {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface DisassociateVpcCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateVpcCidrBlockRequest {
  export const filterSensitiveLog = (obj: DisassociateVpcCidrBlockRequest): any => ({
    ...obj,
  });
}

export interface DisassociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace DisassociateVpcCidrBlockResult {
  export const filterSensitiveLog = (obj: DisassociateVpcCidrBlockResult): any => ({
    ...obj,
  });
}

export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableEbsEncryptionByDefaultRequest {
  export const filterSensitiveLog = (obj: EnableEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace EnableEbsEncryptionByDefaultResult {
  export const filterSensitiveLog = (obj: EnableEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface EnableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another AWS account.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableFastSnapshotRestoresRequest {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the AWS account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The AWS owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

export namespace EnableFastSnapshotRestoreSuccessItem {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace EnableFastSnapshotRestoreStateError {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: EnableFastSnapshotRestoreStateError;
}

export namespace EnableFastSnapshotRestoreStateErrorItem {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];
}

export namespace EnableFastSnapshotRestoreErrorItem {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
}

export interface EnableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully enabled.</p>
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be enabled.</p>
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[];
}

export namespace EnableFastSnapshotRestoresResult {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableTransitGatewayRouteTablePropagationRequest {
  export const filterSensitiveLog = (obj: EnableTransitGatewayRouteTablePropagationRequest): any => ({
    ...obj,
  });
}

export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

export namespace EnableTransitGatewayRouteTablePropagationResult {
  export const filterSensitiveLog = (obj: EnableTransitGatewayRouteTablePropagationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for EnableVgwRoutePropagation.</p>
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with. </p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to. </p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableVgwRoutePropagationRequest {
  export const filterSensitiveLog = (obj: EnableVgwRoutePropagationRequest): any => ({
    ...obj,
  });
}

export interface EnableVolumeIORequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;
}

export namespace EnableVolumeIORequest {
  export const filterSensitiveLog = (obj: EnableVolumeIORequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace EnableVpcClassicLinkRequest {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace EnableVpcClassicLinkResult {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace EnableVpcClassicLinkDnsSupportRequest {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace EnableVpcClassicLinkDnsSupportResult {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ExportClientVpnClientCertificateRevocationListRequest {
  export const filterSensitiveLog = (obj: ExportClientVpnClientCertificateRevocationListRequest): any => ({
    ...obj,
  });
}

export type ClientCertificateRevocationListStatusCode = "active" | "pending";

/**
 * <p>Describes the state of a client certificate revocation list.</p>
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * <p>The state of the client certificate revocation list.</p>
   */
  Code?: ClientCertificateRevocationListStatusCode | string;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   */
  Message?: string;
}

export namespace ClientCertificateRevocationListStatus {
  export const filterSensitiveLog = (obj: ClientCertificateRevocationListStatus): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Information about the client certificate revocation list.</p>
   */
  CertificateRevocationList?: string;

  /**
   * <p>The current state of the client certificate revocation list.</p>
   */
  Status?: ClientCertificateRevocationListStatus;
}

export namespace ExportClientVpnClientCertificateRevocationListResult {
  export const filterSensitiveLog = (obj: ExportClientVpnClientCertificateRevocationListResult): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientConfigurationRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ExportClientVpnClientConfigurationRequest {
  export const filterSensitiveLog = (obj: ExportClientVpnClientConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientConfigurationResult {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   */
  ClientConfiguration?: string;
}

export namespace ExportClientVpnClientConfigurationResult {
  export const filterSensitiveLog = (obj: ExportClientVpnClientConfigurationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3LocationRequest {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

export namespace ExportTaskS3LocationRequest {
  export const filterSensitiveLog = (obj: ExportTaskS3LocationRequest): any => ({
    ...obj,
  });
}

export interface ExportImageRequest {
  /**
   * <p>Token to enable idempotency for export image requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The disk image format.</p>
   */
  DiskImageFormat: DiskImageFormat | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Information about the destination Amazon S3 bucket. The bucket must exist and grant WRITE
   *    and READ_ACP permissions to the AWS account vm-import-export@amazon.com.</p>
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The tags to apply to the image being exported.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ExportImageRequest {
  export const filterSensitiveLog = (obj: ExportImageRequest): any => ({
    ...obj,
  });
}

export interface ExportImageResult {
  /**
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * <p>The disk image format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket.</p>
   */
  RoleName?: string;

  /**
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the image being exported.</p>
   */
  Tags?: Tag[];
}

export namespace ExportImageResult {
  export const filterSensitiveLog = (obj: ExportImageResult): any => ({
    ...obj,
  });
}

export interface ExportTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The resource id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.exact-match</code> - The exact match of the specified filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.longest-prefix-match</code> - The longest prefix that matches the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.subnet-of-match</code> - The routes with a subnet that match the specified CIDR filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.supernet-of-match</code> - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route (<code>active</code> | <code>blackhole</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-destination-cidr-block</code> - The CIDR range.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of route (<code>propagated</code> |
   *                <code>static</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ExportTransitGatewayRoutesRequest {
  export const filterSensitiveLog = (obj: ExportTransitGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface ExportTransitGatewayRoutesResult {
  /**
   * <p>The URL of the exported file in Amazon S3. For example,
   *          s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   */
  S3Location?: string;
}

export namespace ExportTransitGatewayRoutesResult {
  export const filterSensitiveLog = (obj: ExportTransitGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * <p>The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon
   * 			S3 object information.</p>
   */
  CertificateArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetAssociatedEnclaveCertificateIamRolesRequest {
  export const filterSensitiveLog = (obj: GetAssociatedEnclaveCertificateIamRolesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the associated IAM roles.</p>
 */
export interface AssociatedRole {
  /**
   * <p>The ARN of the associated IAM role.</p>
   */
  AssociatedRoleArn?: string;

  /**
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The key of the Amazon S3 object ey where the certificate, certificate chain, and encrypted private key bundle
   * 			is stored. The object key is formated as follows:  <code>certificate_arn</code>/<code>role_arn</code>.
   * 		</p>
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS customer master key (CMK) used to encrypt the private key.</p>
   */
  EncryptionKmsKeyId?: string;
}

export namespace AssociatedRole {
  export const filterSensitiveLog = (obj: AssociatedRole): any => ({
    ...obj,
  });
}

export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * <p>Information about the associated IAM roles.</p>
   */
  AssociatedRoles?: AssociatedRole[];
}

export namespace GetAssociatedEnclaveCertificateIamRolesResult {
  export const filterSensitiveLog = (obj: GetAssociatedEnclaveCertificateIamRolesResult): any => ({
    ...obj,
  });
}

export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * <p>The ID of the IPv6 address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetAssociatedIpv6PoolCidrsRequest {
  export const filterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block association.</p>
 */
export interface Ipv6CidrAssociation {
  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6Cidr?: string;

  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   */
  AssociatedResource?: string;
}

export namespace Ipv6CidrAssociation {
  export const filterSensitiveLog = (obj: Ipv6CidrAssociation): any => ({
    ...obj,
  });
}

export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * <p>Information about the IPv6 CIDR block associations.</p>
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetAssociatedIpv6PoolCidrsResult {
  export const filterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsResult): any => ({
    ...obj,
  });
}

export interface GetCapacityReservationUsageRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   * 		       <p>Valid range: Minimum value of 1. Maximum value of 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetCapacityReservationUsageRequest {
  export const filterSensitiveLog = (obj: GetCapacityReservationUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 */
export interface InstanceUsage {
  /**
   * <p>The ID of the AWS account that is making use of the Capacity Reservation.</p>
   */
  AccountId?: string;

  /**
   * <p>The number of instances the AWS account currently has in the Capacity Reservation.</p>
   */
  UsedInstanceCount?: number;
}

export namespace InstanceUsage {
  export const filterSensitiveLog = (obj: InstanceUsage): any => ({
    ...obj,
  });
}

export interface GetCapacityReservationUsageResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified
   * 					in your request. The reserved capacity is no longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation was manually cancelled. The reserved capacity is no
   * 					longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
   * 					provisioning is still pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation request has failed. A request might fail
   * 					due to invalid request parameters, capacity constraints, or instance limit constraints.
   * 					Failed requests are retained for 60 minutes.</p>
   *             </li>
   *          </ul>
   */
  State?: CapacityReservationState | string;

  /**
   * <p>Information about the Capacity Reservation usage.</p>
   */
  InstanceUsages?: InstanceUsage[];
}

export namespace GetCapacityReservationUsageResult {
  export const filterSensitiveLog = (obj: GetCapacityReservationUsageResult): any => ({
    ...obj,
  });
}

export interface GetCoipPoolUsageRequest {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.allocation-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-account-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-service</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.co-ip</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetCoipPoolUsageRequest {
  export const filterSensitiveLog = (obj: GetCoipPoolUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes address usage for a customer-owned address pool.</p>
 */
export interface CoipAddressUsage {
  /**
   * <p>The allocation ID of the address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The AWS service.</p>
   */
  AwsService?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CoIp?: string;
}

export namespace CoipAddressUsage {
  export const filterSensitiveLog = (obj: CoipAddressUsage): any => ({
    ...obj,
  });
}

export interface GetCoipPoolUsageResult {
  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CoipPoolId?: string;

  /**
   * <p>Information about the address usage.</p>
   */
  CoipAddressUsages?: CoipAddressUsage[];

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;
}

export namespace GetCoipPoolUsageResult {
  export const filterSensitiveLog = (obj: GetCoipPoolUsageResult): any => ({
    ...obj,
  });
}

export interface GetConsoleOutputRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *         <p>Default: disabled (<code>false</code>)</p>
   */
  Latest?: boolean;
}

export namespace GetConsoleOutputRequest {
  export const filterSensitiveLog = (obj: GetConsoleOutputRequest): any => ({
    ...obj,
  });
}

export interface GetConsoleOutputResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   */
  Output?: string;

  /**
   * <p>The time at which the output was last updated.</p>
   */
  Timestamp?: Date;
}

export namespace GetConsoleOutputResult {
  export const filterSensitiveLog = (obj: GetConsoleOutputResult): any => ({
    ...obj,
  });
}

export interface GetConsoleScreenshotRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>When set to <code>true</code>, acts as keystroke input and wakes up an instance that's
   *             in standby or "sleep" mode.</p>
   */
  WakeUp?: boolean;
}

export namespace GetConsoleScreenshotRequest {
  export const filterSensitiveLog = (obj: GetConsoleScreenshotRequest): any => ({
    ...obj,
  });
}

export interface GetConsoleScreenshotResult {
  /**
   * <p>The data that comprises the image.</p>
   */
  ImageData?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export namespace GetConsoleScreenshotResult {
  export const filterSensitiveLog = (obj: GetConsoleScreenshotResult): any => ({
    ...obj,
  });
}

export type UnlimitedSupportedInstanceFamily = "t2" | "t3" | "t3a" | "t4g";

export interface GetDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | string | undefined;
}

export namespace GetDefaultCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: GetDefaultCreditSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p>
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * <p>The instance family.</p>
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | string;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceFamilyCreditSpecification {
  export const filterSensitiveLog = (obj: InstanceFamilyCreditSpecification): any => ({
    ...obj,
  });
}

export interface GetDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

export namespace GetDefaultCreditSpecificationResult {
  export const filterSensitiveLog = (obj: GetDefaultCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface GetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetEbsDefaultKmsKeyIdRequest {
  export const filterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default CMK for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace GetEbsDefaultKmsKeyIdResult {
  export const filterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export interface GetEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetEbsEncryptionByDefaultRequest {
  export const filterSensitiveLog = (obj: GetEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace GetEbsEncryptionByDefaultResult {
  export const filterSensitiveLog = (obj: GetEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface GetGroupsForCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetGroupsForCapacityReservationRequest {
  export const filterSensitiveLog = (obj: GetGroupsForCapacityReservationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource group to which a Capacity Reservation has been added.</p>
 */
export interface CapacityReservationGroup {
  /**
   * <p>The ARN of the resource group.</p>
   */
  GroupArn?: string;

  /**
   * <p>The ID of the AWS account that owns the resource group.</p>
   */
  OwnerId?: string;
}

export namespace CapacityReservationGroup {
  export const filterSensitiveLog = (obj: CapacityReservationGroup): any => ({
    ...obj,
  });
}

export interface GetGroupsForCapacityReservationResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the resource groups to which the Capacity Reservation has been added.</p>
   */
  CapacityReservationGroups?: CapacityReservationGroup[];
}

export namespace GetGroupsForCapacityReservationResult {
  export const filterSensitiveLog = (obj: GetGroupsForCapacityReservationResult): any => ({
    ...obj,
  });
}

export interface GetHostReservationPurchasePreviewRequest {
  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation is associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The offering ID of the reservation.</p>
   */
  OfferingId: string | undefined;
}

export namespace GetHostReservationPurchasePreviewRequest {
  export const filterSensitiveLog = (obj: GetHostReservationPurchasePreviewRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the result of the purchase.</p>
 */
export interface Purchase {
  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The ID of the reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The payment option for the reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;
}

export namespace Purchase {
  export const filterSensitiveLog = (obj: Purchase): any => ({
    ...obj,
  });
}

export interface GetHostReservationPurchasePreviewResult {
  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   */
  Purchase?: Purchase[];

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   */
  TotalUpfrontPrice?: string;
}

export namespace GetHostReservationPurchasePreviewResult {
  export const filterSensitiveLog = (obj: GetHostReservationPurchasePreviewResult): any => ({
    ...obj,
  });
}

export interface GetLaunchTemplateDataRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace GetLaunchTemplateDataRequest {
  export const filterSensitiveLog = (obj: GetLaunchTemplateDataRequest): any => ({
    ...obj,
  });
}

export interface GetLaunchTemplateDataResult {
  /**
   * <p>The instance data.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export namespace GetLaunchTemplateDataResult {
  export const filterSensitiveLog = (obj: GetLaunchTemplateDataResult): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListAssociationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListAssociationsRequest {
  export const filterSensitiveLog = (obj: GetManagedPrefixListAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resource with which a prefix list is associated.</p>
 */
export interface PrefixListAssociation {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

export namespace PrefixListAssociation {
  export const filterSensitiveLog = (obj: PrefixListAssociation): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  PrefixListAssociations?: PrefixListAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListAssociationsResult {
  export const filterSensitiveLog = (obj: GetManagedPrefixListAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListEntriesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The version of the prefix list for which to return the entries. The default is the current version.</p>
   */
  TargetVersion?: number;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListEntriesRequest {
  export const filterSensitiveLog = (obj: GetManagedPrefixListEntriesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a prefix list entry.</p>
 */
export interface PrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;

  /**
   * <p>The description.</p>
   */
  Description?: string;
}

export namespace PrefixListEntry {
  export const filterSensitiveLog = (obj: PrefixListEntry): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListEntriesResult {
  /**
   * <p>Information about the prefix list entries.</p>
   */
  Entries?: PrefixListEntry[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetManagedPrefixListEntriesResult {
  export const filterSensitiveLog = (obj: GetManagedPrefixListEntriesResult): any => ({
    ...obj,
  });
}

export interface GetPasswordDataRequest {
  /**
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetPasswordDataRequest {
  export const filterSensitiveLog = (obj: GetPasswordDataRequest): any => ({
    ...obj,
  });
}

export interface GetPasswordDataResult {
  /**
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   */
  PasswordData?: string;

  /**
   * <p>The time the data was last updated.</p>
   */
  Timestamp?: Date;
}

export namespace GetPasswordDataResult {
  export const filterSensitiveLog = (obj: GetPasswordDataResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for GetReservedInstanceExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];
}

export namespace GetReservedInstancesExchangeQuoteRequest {
  export const filterSensitiveLog = (obj: GetReservedInstancesExchangeQuoteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The cost associated with the Reserved Instance.</p>
 */
export interface ReservationValue {
  /**
   * <p>The hourly rate of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;

  /**
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;
}

export namespace ReservationValue {
  export const filterSensitiveLog = (obj: ReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;
}

export namespace ReservedInstanceReservationValue {
  export const filterSensitiveLog = (obj: ReservedInstanceReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Convertible Reserved Instance offering.</p>
 */
export interface TargetConfiguration {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is
   *       reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   */
  OfferingId?: string;
}

export namespace TargetConfiguration {
  export const filterSensitiveLog = (obj: TargetConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The total value of the new Convertible Reserved Instances.</p>
 */
export interface TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of
   *       the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

export namespace TargetReservationValue {
  export const filterSensitiveLog = (obj: TargetReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * <p>The currency of the transaction.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   */
  IsValidExchange?: boolean;

  /**
   * <p>The new end date of the reservation term.</p>
   */
  OutputReservedInstancesWillExpireAt?: Date;

  /**
   * <p>The total true upfront charge for the exchange.</p>
   */
  PaymentDue?: string;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  ReservedInstanceValueRollup?: ReservationValue;

  /**
   * <p>The configuration of your Convertible Reserved Instances.</p>
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[];

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  TargetConfigurationValueRollup?: ReservationValue;

  /**
   * <p>The values of the target Convertible Reserved Instances.</p>
   */
  TargetConfigurationValueSet?: TargetReservationValue[];

  /**
   * <p>Describes the reason why the exchange cannot be completed.</p>
   */
  ValidationFailureReason?: string;
}

export namespace GetReservedInstancesExchangeQuoteResult {
  export const filterSensitiveLog = (obj: GetReservedInstancesExchangeQuoteResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayAttachmentPropagationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayAttachmentPropagationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a propagation route table.</p>
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the propagation route table.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayAttachmentPropagation {
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentPropagation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * <p>Information about the propagation route tables.</p>
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayAttachmentPropagationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayAttachmentPropagationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-type</code> - The type of resource. The valid value is: <code>vpc</code>.</p>
   *             </li>
   *             <li>
   *
   *                 <p>
   *                   <code>state</code> - The state of the subnet association. Valid values are
   *                         <code>associated</code> |
   *                         <code>associating</code>
   *                     | <code>disassociated</code> | <code>disassociating</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayMulticastDomainAssociationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayMulticastDomainAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p> The ID of the AWS account that owns the transit gateway multicast domain association resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;
}

export namespace TransitGatewayMulticastDomainAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainAssociation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayMulticastDomainAssociationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayMulticastDomainAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>attachment.resource-id</code> - The ID of the resource for the attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.resource-type</code> - The type of resource for the
   *                     attachment. Valid values are <code>vpc</code> | <code>vpn</code> |
   *                         <code>direct-connect-gateway</code> | <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-blackhole</code> - Whether traffic matching the route is blocked (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>prefix-list-owner-id</code> - The ID of the owner of the prefix list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the prefix list reference (<code>pending</code> | <code>available</code> | <code>modifying</code> | <code>deleting</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayPrefixListReferencesRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayPrefixListReferencesRequest): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * <p>Information about the prefix list references.</p>
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayPrefixListReferencesResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayPrefixListReferencesResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayRouteTableAssociationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTableAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export namespace TransitGatewayRouteTableAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayRouteTableAssociation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  Associations?: TransitGatewayRouteTableAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRouteTableAssociationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTableAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetTransitGatewayRouteTablePropagationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTablePropagationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table propagation.</p>
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the resource.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayRouteTablePropagation {
  export const filterSensitiveLog = (obj: TransitGatewayRouteTablePropagation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * <p>Information about the route table propagations.</p>
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRouteTablePropagationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTablePropagationsResult): any => ({
    ...obj,
  });
}

export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client certificate revocation list applies.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The client certificate revocation list file. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate">Generate a Client Certificate Revocation List</a> in the
   * 				<i>AWS Client VPN Administrator Guide</i>.</p>
   */
  CertificateRevocationList: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ImportClientVpnClientCertificateRevocationListRequest {
  export const filterSensitiveLog = (obj: ImportClientVpnClientCertificateRevocationListRequest): any => ({
    ...obj,
  });
}

export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ImportClientVpnClientCertificateRevocationListResult {
  export const filterSensitiveLog = (obj: ImportClientVpnClientCertificateRevocationListResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the client-specific data.</p>
 */
export interface ClientData {
  /**
   * <p>A user-defined comment about the disk upload.</p>
   */
  Comment?: string;

  /**
   * <p>The time that the disk upload ends.</p>
   */
  UploadEnd?: Date;

  /**
   * <p>The size of the uploaded disk image, in GiB.</p>
   */
  UploadSize?: number;

  /**
   * <p>The time that the disk upload starts.</p>
   */
  UploadStart?: Date;
}

export namespace ClientData {
  export const filterSensitiveLog = (obj: ClientData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucket {
  /**
   * <p>The name of the Amazon S3 bucket where the disk image is located.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

export namespace UserBucket {
  export const filterSensitiveLog = (obj: UserBucket): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the disk container object for an import image task.</p>
 */
export interface ImageDiskContainer {
  /**
   * <p>The description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the disk.</p>
   */
  DeviceName?: string;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> |<code>VMDK</code>
   *          </p>
   */
  Format?: string;

  /**
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an
   *    Amazon S3 URL (s3://..)</p>
   */
  Url?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

export namespace ImageDiskContainer {
  export const filterSensitiveLog = (obj: ImageDiskContainer): any => ({
    ...obj,
  });
}

/**
 * <p>The request information of license configurations.</p>
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace ImportImageLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: ImportImageLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ImportImageRequest {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * <p>The token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description string for the import image task.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk containers.</p>
   */
  DiskContainers?: ImageDiskContainer[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default CMK for EBS is used
   *    unless you specify a non-default AWS Key Management Service (AWS KMS) CMK using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor platform.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * <p>An identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the
   *    encrypted AMI. This parameter is only required if you want to use a non-default CMK; if this
   *    parameter is not specified, the default CMK for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The CMK identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>key</code> namespace, and then the CMK ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>AWS parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified CMK must exist in the Region that the AMI is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type to be used for the Amazon Machine Image (AMI) after importing.</p>
   *          <p>By default, we detect the source-system operating system (OS) and apply the appropriate license. Specify
   *     <code>AWS</code> to replace the source-system license with an AWS license, if appropriate. Specify <code>BYOL</code>
   *    to retain the source-system license, if appropriate.</p>
   *          <p>To use <code>BYOL</code>, you must have existing licenses with rights to use these licenses in a third party
   *    cloud, such as AWS. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image">Prerequisites</a> in the
   *    VM Import/Export User Guide.</p>
   */
  LicenseType?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   *          <p>Valid values: <code>Windows</code> | <code>Linux</code>
   *          </p>
   */
  Platform?: string;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[];

  /**
   * <p>The tags to apply to the image being imported.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ImportImageRequest {
  export const filterSensitiveLog = (obj: ImportImageRequest): any => ({
    ...obj,
  });
}

export interface ImportImageResult {
  /**
   * <p>The architecture of the virtual machine.</p>
   */
  Architecture?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the AMI is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor of the import task.</p>
   */
  Hypervisor?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) created by the import task.</p>
   */
  ImageId?: string;

  /**
   * <p>The task ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key
   *    (CMK) that was used to create the encrypted AMI.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   */
  Platform?: string;

  /**
   * <p>The progress of the task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * <p>A brief status of the task.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message of the import task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * <p>Any tags assigned to the image being imported.</p>
   */
  Tags?: Tag[];
}

export namespace ImportImageResult {
  export const filterSensitiveLog = (obj: ImportImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDetail {
  /**
   * <p>The size of the disk image, in GiB.</p>
   */
  Bytes: number | undefined;

  /**
   * <p>The disk image format.</p>
   */
  Format: DiskImageFormat | string | undefined;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL.
   *    For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication
   *    Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in the <i>Amazon Simple Storage Service Developer
   *     Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl: string | undefined;
}

export namespace DiskImageDetail {
  export const filterSensitiveLog = (obj: DiskImageDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EBS volume.</p>
 */
export interface VolumeDetail {
  /**
   * <p>The size of the volume, in GiB.</p>
   */
  Size: number | undefined;
}

export namespace VolumeDetail {
  export const filterSensitiveLog = (obj: VolumeDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImage {
  /**
   * <p>A description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk image.</p>
   */
  Image?: DiskImageDetail;

  /**
   * <p>Information about the volume.</p>
   */
  Volume?: VolumeDetail;
}

export namespace DiskImage {
  export const filterSensitiveLog = (obj: DiskImage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the user data for an instance.</p>
 */
export interface UserData {
  /**
   * <p>The user data. If you are using an AWS SDK or command line tool, Base64-encoding is performed for you, and you
   *    can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   */
  Data?: string;
}

export namespace UserData {
  export const filterSensitiveLog = (obj: UserData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for VM import.</p>
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>The architecture of the instance.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The security group IDs.</p>
   */
  GroupIds?: string[];

  /**
   * <p>The security group names.</p>
   */
  GroupNames?: string[];

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the
   *    operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The instance type. For more information about the instance types that you can import, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-instance-types">Instance Types</a> in the
   *    VM Import/Export User Guide.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Monitoring?: boolean;

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: Placement;

  /**
   * <p>[EC2-VPC] An available IP address from the IP address range of the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data to make available to the instance.</p>
   */
  UserData?: UserData;
}

export namespace ImportInstanceLaunchSpecification {
  export const filterSensitiveLog = (obj: ImportInstanceLaunchSpecification): any => ({
    ...obj,
    ...(obj.UserData && { UserData: SENSITIVE_STRING }),
  });
}

export interface ImportInstanceRequest {
  /**
   * <p>A description for the instance being imported.</p>
   */
  Description?: string;

  /**
   * <p>The disk image.</p>
   */
  DiskImages?: DiskImage[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: ImportInstanceLaunchSpecification;

  /**
   * <p>The instance operating system.</p>
   */
  Platform: PlatformValues | string | undefined;
}

export namespace ImportInstanceRequest {
  export const filterSensitiveLog = (obj: ImportInstanceRequest): any => ({
    ...obj,
    ...(obj.LaunchSpecification && {
      LaunchSpecification: ImportInstanceLaunchSpecification.filterSensitiveLog(obj.LaunchSpecification),
    }),
  });
}

export interface ImportInstanceResult {
  /**
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

export namespace ImportInstanceResult {
  export const filterSensitiveLog = (obj: ImportInstanceResult): any => ({
    ...obj,
  });
}

export interface ImportKeyPairRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique name for the key pair.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>The public key. For API calls, the text must be base64-encoded. For command line tools, base64 encoding is performed for you.</p>
   */
  PublicKeyMaterial: Uint8Array | undefined;

  /**
   * <p>The tags to apply to the imported key pair.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ImportKeyPairRequest {
  export const filterSensitiveLog = (obj: ImportKeyPairRequest): any => ({
    ...obj,
  });
}

export interface ImportKeyPairResult {
  /**
   * <p>The MD5 public key fingerprint as specified in section 4 of RFC 4716.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>The key pair name you provided.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the resulting key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>The tags applied to the imported key pair.</p>
   */
  Tags?: Tag[];
}

export namespace ImportKeyPairResult {
  export const filterSensitiveLog = (obj: ImportKeyPairResult): any => ({
    ...obj,
  });
}

/**
 * <p>The disk container object for the import snapshot request.</p>
 */
export interface SnapshotDiskContainer {
  /**
   * <p>The description of the disk image being imported.</p>
   */
  Description?: string;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>VHD</code> | <code>VMDK</code>
   *          </p>
   */
  Format?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon
   *    S3 URL (s3://..).</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

export namespace SnapshotDiskContainer {
  export const filterSensitiveLog = (obj: SnapshotDiskContainer): any => ({
    ...obj,
  });
}

export interface ImportSnapshotRequest {
  /**
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * <p>Token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>The description string for the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk container.</p>
   */
  DiskContainer?: SnapshotDiskContainer;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the destination snapshot of the imported image should be encrypted. The default CMK for EBS is
   *    used unless you specify a non-default AWS Key Management Service (AWS KMS) CMK using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>An identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the
   *    encrypted snapshot. This parameter is only required if you want to use a non-default CMK; if this
   *    parameter is not specified, the default CMK for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The CMK identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>key</code> namespace, and then the CMK ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>AWS parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified CMK must exist in the Region that the snapshot is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The tags to apply to the snapshot being imported.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace ImportSnapshotRequest {
  export const filterSensitiveLog = (obj: ImportSnapshotRequest): any => ({
    ...obj,
  });
}

export interface ImportSnapshotResult {
  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Information about the import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * <p>Any tags assigned to the snapshot being imported.</p>
   */
  Tags?: Tag[];
}

export namespace ImportSnapshotResult {
  export const filterSensitiveLog = (obj: ImportSnapshotResult): any => ({
    ...obj,
  });
}

export interface ImportVolumeRequest {
  /**
   * <p>The Availability Zone for the resulting EBS volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>A description of the volume.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The disk image.</p>
   */
  Image: DiskImageDetail | undefined;

  /**
   * <p>The volume size.</p>
   */
  Volume: VolumeDetail | undefined;
}

export namespace ImportVolumeRequest {
  export const filterSensitiveLog = (obj: ImportVolumeRequest): any => ({
    ...obj,
  });
}

export interface ImportVolumeResult {
  /**
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

export namespace ImportVolumeResult {
  export const filterSensitiveLog = (obj: ImportVolumeResult): any => ({
    ...obj,
  });
}

export interface ModifyAddressAttributeRequest {
  AllocationId: string | undefined;
  DomainName?: string;
  DryRun?: boolean;
}

export namespace ModifyAddressAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyAddressAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyAddressAttributeResult {
  Address?: AddressAttribute;
}

export namespace ModifyAddressAttributeResult {
  export const filterSensitiveLog = (obj: ModifyAddressAttributeResult): any => ({
    ...obj,
  });
}

export type ModifyAvailabilityZoneOptInStatus = "not-opted-in" | "opted-in";

export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * <p>The name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Indicates whether you are opted in to the Local Zone group or Wavelength Zone group. The
   *       only valid value is <code>opted-in</code>. You must contact <a href="https://console.aws.amazon.com/support/home#/case/create%3FissueType=customer-service%26serviceCode=general-info%26getting-started%26categoryCode=using-aws%26services">AWS Support</a> to opt out of a Local Zone group, or Wavelength Zone group.</p>
   */
  OptInStatus: ModifyAvailabilityZoneOptInStatus | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyAvailabilityZoneGroupRequest {
  export const filterSensitiveLog = (obj: ModifyAvailabilityZoneGroupRequest): any => ({
    ...obj,
  });
}

export interface ModifyAvailabilityZoneGroupResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifyAvailabilityZoneGroupResult {
  export const filterSensitiveLog = (obj: ModifyAvailabilityZoneGroupResult): any => ({
    ...obj,
  });
}

export interface ModifyCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The number of instances for which to reserve capacity.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   * 		       <p>The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   * 		       <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyCapacityReservationRequest {
  export const filterSensitiveLog = (obj: ModifyCapacityReservationRequest): any => ({
    ...obj,
  });
}

export interface ModifyCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyCapacityReservationResult {
  export const filterSensitiveLog = (obj: ModifyCapacityReservationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the DNS server to be used.</p>
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to
   * 			two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values
   * 			overwrite the existing values.</p>
   */
  CustomDnsServers?: string[];

  /**
   * <p>Indicates whether DNS servers should be used. Specify <code>False</code> to delete the existing DNS
   * 			servers.</p>
   */
  Enabled?: boolean;
}

export namespace DnsServersOptionsModifyStructure {
  export const filterSensitiveLog = (obj: DnsServersOptionsModifyStructure): any => ({
    ...obj,
  });
}

export interface ModifyClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN endpoint to modify.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ARN of the server certificate to be used. The server certificate must be provisioned in AWS Certificate Manager (ACM).</p>
   */
  ServerCertificateArn?: string;

  /**
   * <p>Information about the client connection logging options.</p>
   * 		       <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   * 		       <ul>
   *             <li>
   *                <p>Client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection results (successful and unsuccessful)</p>
   *             </li>
   *             <li>
   *                <p>Reasons for unsuccessful client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection termination time</p>
   *             </li>
   *          </ul>
   */
  ConnectionLogOptions?: ConnectionLogOptions;

  /**
   * <p>Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have
   * 			up to two DNS servers.</p>
   */
  DnsServers?: DnsServersOptionsModifyStructure;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   * 	        <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   * 	        <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the VPN is split-tunnel.</p>
   *         <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel AWS Client VPN Endpoint</a> in the <i>AWS
   *                 Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more security groups to apply to the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint.</p>
   */
  VpcId?: string;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   */
  SelfServicePortal?: SelfServicePortal | string;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectOptions;
}

export namespace ModifyClientVpnEndpointRequest {
  export const filterSensitiveLog = (obj: ModifyClientVpnEndpointRequest): any => ({
    ...obj,
  });
}

export interface ModifyClientVpnEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyClientVpnEndpointResult {
  export const filterSensitiveLog = (obj: ModifyClientVpnEndpointResult): any => ({
    ...obj,
  });
}

export interface ModifyDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | string | undefined;

  /**
   * <p>The credit option for CPU usage of the instance family.</p>
   *         <p>Valid Values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits: string | undefined;
}

export namespace ModifyDefaultCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: ModifyDefaultCreditSpecificationRequest): any => ({
    ...obj,
  });
}

export interface ModifyDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

export namespace ModifyDefaultCreditSpecificationResult {
  export const filterSensitiveLog = (obj: ModifyDefaultCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.
   *       If this parameter is not specified, your AWS managed CMK for EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the CMK using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyEbsDefaultKmsKeyIdRequest {
  export const filterSensitiveLog = (obj: ModifyEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default CMK for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace ModifyEbsDefaultKmsKeyIdResult {
  export const filterSensitiveLog = (obj: ModifyEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export interface ModifyFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfigRequest[];

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The size of the EC2 Fleet.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest;
}

export namespace ModifyFleetRequest {
  export const filterSensitiveLog = (obj: ModifyFleetRequest): any => ({
    ...obj,
  });
}

export interface ModifyFleetResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifyFleetResult {
  export const filterSensitiveLog = (obj: ModifyFleetResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load permission.</p>
 */
export interface LoadPermissionRequest {
  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * <p>The AWS account ID.</p>
   */
  UserId?: string;
}

export namespace LoadPermissionRequest {
  export const filterSensitiveLog = (obj: LoadPermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes modifications to the load permissions of an Amazon FPGA image (AFI).</p>
 */
export interface LoadPermissionModifications {
  /**
   * <p>The load permissions to add.</p>
   */
  Add?: LoadPermissionRequest[];

  /**
   * <p>The load permissions to remove.</p>
   */
  Remove?: LoadPermissionRequest[];
}

export namespace LoadPermissionModifications {
  export const filterSensitiveLog = (obj: LoadPermissionModifications): any => ({
    ...obj,
  });
}

export type OperationType = "add" | "remove";

export interface ModifyFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The name of the attribute.</p>
   */
  Attribute?: FpgaImageAttributeName | string;

  /**
   * <p>The operation type.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The AWS account IDs. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserIds?: string[];

  /**
   * <p>The user groups. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserGroups?: string[];

  /**
   * <p>The product codes. After you add a product code to an AFI, it can't be removed.
   * 		    This parameter is valid only when modifying the <code>productCodes</code> attribute.</p>
   */
  ProductCodes?: string[];

  /**
   * <p>The load permission for the AFI.</p>
   */
  LoadPermission?: LoadPermissionModifications;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;
}

export namespace ModifyFpgaImageAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyFpgaImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

export namespace ModifyFpgaImageAttributeResult {
  export const filterSensitiveLog = (obj: ModifyFpgaImageAttributeResult): any => ({
    ...obj,
  });
}

export interface ModifyHostsRequest {
  /**
   * <p>Specify whether to enable or disable auto-placement.</p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The IDs of the Dedicated Hosts to modify.</p>
   */
  HostIds: string[] | undefined;

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">
   * 				Host Recovery</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Host. Specify this parameter to
   * 			modify a Dedicated Host to support only a specific instance type.</p>
   *
   * 		       <p>If you want to modify a Dedicated Host to support multiple instance types in its current instance
   * 			family, omit this parameter and specify <b>InstanceFamily</b>
   * 			instead. You cannot specify <b>InstanceType</b> and
   * 			<b>InstanceFamily</b> in the same request.</p>
   */
  InstanceType?: string;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Host. Specify this parameter
   * 			to modify a Dedicated Host to support multiple instance types within its current
   * 			instance family.</p>
   *
   * 		       <p>If you want to modify a Dedicated Host to support a specific instance type only, omit this parameter
   * 			and specify <b>InstanceType</b> instead. You cannot specify
   * 			<b>InstanceFamily</b> and <b>InstanceType</b>
   * 			in the same request.</p>
   */
  InstanceFamily?: string;
}

export namespace ModifyHostsRequest {
  export const filterSensitiveLog = (obj: ModifyHostsRequest): any => ({
    ...obj,
  });
}

export interface ModifyHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully modified.</p>
   */
  Successful?: string[];

  /**
   * <p>The IDs of the Dedicated Hosts that could not be modified. Check whether the
   *             setting you requested can be used.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace ModifyHostsResult {
  export const filterSensitiveLog = (obj: ModifyHostsResult): any => ({
    ...obj,
  });
}

export interface ModifyIdentityIdFormatRequest {
  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify
   *        <code>all</code> to modify the ID format for all IAM users, IAM roles, and the root user of
   *        the account.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *           | <code>network-acl-association</code> | <code>network-interface</code> |
   *           <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *           <code>route-table</code> | <code>route-table-association</code> |
   *           <code>security-group</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *           <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *           currently within their opt-in period for longer IDs.</p>
   */
  Resource: string | undefined;

  /**
   * <p>Indicates whether the resource should use longer IDs (17-character IDs)</p>
   */
  UseLongIds: boolean | undefined;
}

export namespace ModifyIdentityIdFormatRequest {
  export const filterSensitiveLog = (obj: ModifyIdentityIdFormatRequest): any => ({
    ...obj,
  });
}

export interface ModifyIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *            | <code>network-acl-association</code> | <code>network-interface</code> |
   *            <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *            <code>route-table</code> | <code>route-table-association</code> |
   *            <code>security-group</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *            <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *        currently within their opt-in period for longer IDs.</p>
   */
  Resource: string | undefined;

  /**
   * <p>Indicate whether the resource should use longer IDs (17-character IDs).</p>
   */
  UseLongIds: boolean | undefined;
}

export namespace ModifyIdFormatRequest {
  export const filterSensitiveLog = (obj: ModifyIdFormatRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch permission modification.</p>
 */
export interface LaunchPermissionModifications {
  /**
   * <p>The AWS account ID to add to the list of launch permissions for the AMI.</p>
   */
  Add?: LaunchPermission[];

  /**
   * <p>The AWS account ID to remove from the list of launch permissions for the AMI.</p>
   */
  Remove?: LaunchPermission[];
}

export namespace LaunchPermissionModifications {
  export const filterSensitiveLog = (obj: LaunchPermissionModifications): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyImageAttribute.</p>
 */
export interface ModifyImageAttributeRequest {
  /**
   * <p>The name of the attribute to modify.
   *        The valid values are <code>description</code>, <code>launchPermission</code>, and <code>productCodes</code>.</p>
   */
  Attribute?: string;

  /**
   * <p>A new description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>A new launch permission for the AMI.</p>
   */
  LaunchPermission?: LaunchPermissionModifications;

  /**
   * <p>The operation type.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The DevPay product codes. After you add a product code to an AMI, it can't be removed.</p>
   */
  ProductCodes?: string[];

  /**
   * <p>The user groups.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserGroups?: string[];

  /**
   * <p>The AWS account IDs.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserIds?: string[];

  /**
   * <p>The value of the attribute being modified.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>description</code> or <code>productCodes</code>.</p>
   */
  Value?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyImageAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyImageAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes information used to set up an EBS volume specified in a block device
 *             mapping.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

export namespace EbsInstanceBlockDeviceSpecification {
  export const filterSensitiveLog = (obj: EbsInstanceBlockDeviceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping entry.</p>
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * <p>suppress the specified device included in the block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name.</p>
   */
  VirtualName?: string;
}

export namespace InstanceBlockDeviceMappingSpecification {
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMappingSpecification): any => ({
    ...obj,
  });
}

export interface BlobAttributeValue {
  Value?: Uint8Array;
}

export namespace BlobAttributeValue {
  export const filterSensitiveLog = (obj: BlobAttributeValue): any => ({
    ...obj,
  });
}

export interface ModifyInstanceAttributeRequest {
  /**
   * <p>Specifies whether source/destination checking is enabled. A value of <code>true</code>
   *             means that checking is enabled, and <code>false</code> means that checking is disabled.
   *             This value must be <code>false</code> for a NAT instance to perform NAT.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * <p>The name of the attribute.</p>
   */
  Attribute?: InstanceAttributeName | string;

  /**
   * <p>Modifies the <code>DeleteOnTermination</code> attribute for volumes that are currently
   *             attached. The volume must be owned by the caller. If no value is specified for
   *                 <code>DeleteOnTermination</code>, the default is <code>true</code> and the volume is
   *             deleted when the instance is terminated.</p>
   *         <p>To add instance store volumes to an Amazon EBS-backed instance, you must add them when
   *             you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Updating the block device mapping when launching an instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMappingSpecification[];

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance using the Amazon
   *             EC2 console, CLI, or API; otherwise, you can. You cannot use this parameter for Spot
   *             Instances.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal EBS I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: AttributeBooleanValue;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the
   *             instance.</p>
   *         <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * <p>[EC2-VPC] Changes the security groups of the instance. You must specify at least one
   *             security group, even if it's just the default security group for the VPC. You must
   *             specify the security group ID, not the security group name.</p>
   */
  Groups?: string[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Specifies whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * <p>Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *                 types</a>. If the instance type is not valid, the error returned is
   *                 <code>InvalidInstanceAttributeValue</code>.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * <p>Changes the instance's kernel to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Kernel?: AttributeValue;

  /**
   * <p>Changes the instance's RAM disk to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Ramdisk?: AttributeValue;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *             Function interface for the instance.</p>
   *         <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function
   *             interface at this time.</p>
   *         <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>Changes the instance's user data to the specified value. If you are using an AWS SDK
   *             or command line tool, base64-encoding is performed for you, and you can load the text
   *             from a file. Otherwise, you must provide base64-encoded text.</p>
   */
  UserData?: BlobAttributeValue;

  /**
   * <p>A new value for the attribute. Use only with the <code>kernel</code>,
   *                 <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, or
   *                 <code>instanceInitiatedShutdownBehavior</code> attribute.</p>
   */
  Value?: string;
}

export namespace ModifyInstanceAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one parameter
 * 			at a time. If you specify <code>CapacityReservationPreference</code> and
 * 			<code>CapacityReservationTarget</code>, the request fails.</p>
 * 			      <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance
 * 			to run as an On-Demand Instance or to run in any <code>open</code> Capacity Reservation that has
 * 			matching attributes (instance type, platform, Availability Zone). Use the
 * 			<code>CapacityReservationTarget</code> parameter to explicitly target a specific
 * 			   	Capacity Reservation or a Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecification {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The
   * 					instance runs as an On-Demand Instance.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;
}

export namespace CapacityReservationSpecification {
  export const filterSensitiveLog = (obj: CapacityReservationSpecification): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * <p>The ID of the instance to be modified.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification: CapacityReservationSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyInstanceCapacityReservationAttributesRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceCapacityReservationAttributesRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCapacityReservationAttributesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyInstanceCapacityReservationAttributesResult {
  export const filterSensitiveLog = (obj: ModifyInstanceCapacityReservationAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance.</p>
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The credit option for CPU usage of the instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: InstanceCreditSpecificationRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the credit option for CPU usage.</p>
   */
  InstanceCreditSpecifications: InstanceCreditSpecificationRequest[] | undefined;
}

export namespace ModifyInstanceCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceCreditSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was
 *             successfully modified.</p>
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export namespace SuccessfulInstanceCreditSpecificationItem {
  export const filterSensitiveLog = (obj: SuccessfulInstanceCreditSpecificationItem): any => ({
    ...obj,
  });
}

export enum UnsuccessfulInstanceCreditSpecificationErrorCode {
  INCORRECT_INSTANCE_STATE = "IncorrectInstanceState",
  INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED = "InstanceCreditSpecification.NotSupported",
  INSTANCE_NOT_FOUND = "InvalidInstanceID.NotFound",
  INVALID_INSTANCE_ID = "InvalidInstanceID.Malformed",
}

/**
 * <p>Information about the error for the burstable performance instance whose credit option
 *             for CPU usage was not modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * <p>The error code.</p>
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode | string;

  /**
   * <p>The applicable error message.</p>
   */
  Message?: string;
}

export namespace UnsuccessfulInstanceCreditSpecificationItemError {
  export const filterSensitiveLog = (obj: UnsuccessfulInstanceCreditSpecificationItemError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was not
 *             modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The applicable error for the burstable performance instance whose credit option for
   *             CPU usage was not modified.</p>
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError;
}

export namespace UnsuccessfulInstanceCreditSpecificationItem {
  export const filterSensitiveLog = (obj: UnsuccessfulInstanceCreditSpecificationItem): any => ({
    ...obj,
  });
}

export interface ModifyInstanceCreditSpecificationResult {
  /**
   * <p>Information about the instances whose credit option for CPU usage was successfully
   *             modified.</p>
   */
  SuccessfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[];

  /**
   * <p>Information about the instances whose credit option for CPU usage was not
   *             modified.</p>
   */
  UnsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[];
}

export namespace ModifyInstanceCreditSpecificationResult {
  export const filterSensitiveLog = (obj: ModifyInstanceCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventStartTimeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance with the scheduled event.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the event whose date and time you are modifying.</p>
   */
  InstanceEventId: string | undefined;

  /**
   * <p>The new date and time when the event will take place.</p>
   */
  NotBefore: Date | undefined;
}

export namespace ModifyInstanceEventStartTimeRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceEventStartTimeRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventStartTimeResult {
  /**
   * <p>Describes a scheduled event for an instance.</p>
   */
  Event?: InstanceStatusEvent;
}

export namespace ModifyInstanceEventStartTimeResult {
  export const filterSensitiveLog = (obj: ModifyInstanceEventStartTimeResult): any => ({
    ...obj,
  });
}

export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *             specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credential
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel. If no parameter is specified, the existing state is maintained.</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If
   *             the parameter is not specified, the existing state is maintained.</p>
   *         <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your
   *                 instance metadata.</p>
   *         </note>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyInstanceMetadataOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyInstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceMetadataOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The metadata options for the instance.</p>
   */
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse;
}

export namespace ModifyInstanceMetadataOptionsResult {
  export const filterSensitiveLog = (obj: ModifyInstanceMetadataOptionsResult): any => ({
    ...obj,
  });
}

export type HostTenancy = "dedicated" | "host";

export interface ModifyInstancePlacementRequest {
  /**
   * <p>The affinity setting for the instance.</p>
   */
  Affinity?: Affinity | string;

  /**
   * <p>The name of the placement group in which to place the instance. For spread placement
   *             groups, the instance must have a tenancy of <code>default</code>. For cluster and
   *             partition placement groups, the instance must have a tenancy of <code>default</code> or
   *                 <code>dedicated</code>.</p>
   *         <p>To remove an instance from a placement group, specify an empty string
   *             ("").</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host with which to associate the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The ID of the instance that you are modifying.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The tenancy for the instance.</p>
   */
  Tenancy?: HostTenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The ARN of the host resource group in which to place the instance.</p>
   */
  HostResourceGroupArn?: string;
}

export namespace ModifyInstancePlacementRequest {
  export const filterSensitiveLog = (obj: ModifyInstancePlacementRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstancePlacementResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifyInstancePlacementResult {
  export const filterSensitiveLog = (obj: ModifyInstancePlacementResult): any => ({
    ...obj,
  });
}

export interface ModifyLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template to set as the default version.</p>
   */
  DefaultVersion?: string;
}

export namespace ModifyLaunchTemplateRequest {
  export const filterSensitiveLog = (obj: ModifyLaunchTemplateRequest): any => ({
    ...obj,
  });
}

export interface ModifyLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export namespace ModifyLaunchTemplateResult {
  export const filterSensitiveLog = (obj: ModifyLaunchTemplateResult): any => ({
    ...obj,
  });
}

/**
 * <p>An entry for a prefix list.</p>
 */
export interface RemovePrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr: string | undefined;
}

export namespace RemovePrefixListEntry {
  export const filterSensitiveLog = (obj: RemovePrefixListEntry): any => ({
    ...obj,
  });
}

export interface ModifyManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The current version of the prefix list.</p>
   */
  CurrentVersion?: number;

  /**
   * <p>A name for the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * <p>One or more entries to add to the prefix list.</p>
   */
  AddEntries?: AddPrefixListEntry[];

  /**
   * <p>One or more entries to remove from the prefix list.</p>
   */
  RemoveEntries?: RemovePrefixListEntry[];
}

export namespace ModifyManagedPrefixListRequest {
  export const filterSensitiveLog = (obj: ModifyManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export interface ModifyManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace ModifyManagedPrefixListResult {
  export const filterSensitiveLog = (obj: ModifyManagedPrefixListResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an attachment change.</p>
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;
}

export namespace NetworkInterfaceAttachmentChanges {
  export const filterSensitiveLog = (obj: NetworkInterfaceAttachmentChanges): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyNetworkInterfaceAttribute.</p>
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * <p>Information about the interface attachment. If modifying the 'delete on termination' attribute, you must specify the ID of the interface attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachmentChanges;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Changes the security groups for the network interface. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.</p>
   */
  Groups?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>Indicates whether source/destination checking is enabled.
   *             A value of <code>true</code> means checking
   *             is enabled, and <code>false</code> means checking is disabled. This value
   *             must be <code>false</code> for a NAT instance to perform NAT. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT
   *                 Instances</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

export namespace ModifyNetworkInterfaceAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesRequest {
  /**
   * <p>The IDs of the Reserved Instances to modify.</p>
   */
  ReservedInstancesIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive token you provide to ensure idempotency of your modification request. For more information, see
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The configuration settings for the Reserved Instances to modify.</p>
   */
  TargetConfigurations: ReservedInstancesConfiguration[] | undefined;
}

export namespace ModifyReservedInstancesRequest {
  export const filterSensitiveLog = (obj: ModifyReservedInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesResult {
  /**
   * <p>The ID for the modification.</p>
   */
  ReservedInstancesModificationId?: string;
}

export namespace ModifyReservedInstancesResult {
  export const filterSensitiveLog = (obj: ModifyReservedInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 */
export interface CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified AWS account ID or group to the list.</p>
   */
  Add?: CreateVolumePermission[];

  /**
   * <p>Removes the specified AWS account ID or group from the list.</p>
   */
  Remove?: CreateVolumePermission[];
}

export namespace CreateVolumePermissionModifications {
  export const filterSensitiveLog = (obj: CreateVolumePermissionModifications): any => ({
    ...obj,
  });
}

export interface ModifySnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute to modify. Only volume creation permissions can be modified.</p>
   */
  Attribute?: SnapshotAttributeName | string;

  /**
   * <p>A JSON representation of the snapshot attribute modification.</p>
   */
  CreateVolumePermission?: CreateVolumePermissionModifications;

  /**
   * <p>The group to modify for the snapshot.</p>
   */
  GroupNames?: string[];

  /**
   * <p>The type of operation to perform to the attribute.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The account ID to modify for the snapshot.</p>
   */
  UserIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifySnapshotAttributeRequest {
  export const filterSensitiveLog = (obj: ModifySnapshotAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * <p>Indicates whether running Spot Instances should be terminated if the target capacity of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides. You can only use this parameter if you specified a launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this parameter.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The size of the fleet.</p>
   */
  TargetCapacity?: number;

  /**
   * <p>The number of On-Demand Instances in the fleet.</p>
   */
  OnDemandTargetCapacity?: number;
}

export namespace ModifySpotFleetRequestRequest {
  export const filterSensitiveLog = (obj: ModifySpotFleetRequestRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ModifySpotFleetRequestResponse {
  export const filterSensitiveLog = (obj: ModifySpotFleetRequestResponse): any => ({
    ...obj,
  });
}

export interface ModifySubnetAttributeRequest {
  /**
   * <p>Specify <code>true</code> to indicate that network interfaces created in the
   *             specified subnet should be assigned an IPv6 address. This includes a network interface
   *             that's created when launching an instance into the subnet (the instance therefore
   *             receives an IPv6 address). </p>
   *         <p>If you enable the IPv6 addressing feature for your subnet, your network interface
   *             or instance only receives an IPv6 address if it's created using version
   *                 <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
   */
  AssignIpv6AddressOnCreation?: AttributeBooleanValue;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces attached to instances created in the
   *             specified subnet should be assigned a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: AttributeBooleanValue;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces  attached to instances created in the
   *             specified subnet should be assigned a customer-owned IPv4 address.</p>
   *         <p>When this value is <code>true</code>, you must specify the customer-owned IP pool using <code>CustomerOwnedIpv4Pool</code>.</p>
   */
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   *         <p>You must set this value when you specify <code>true</code> for <code>MapCustomerOwnedIpOnLaunch</code>.</p>
   */
  CustomerOwnedIpv4Pool?: string;
}

export namespace ModifySubnetAttributeRequest {
  export const filterSensitiveLog = (obj: ModifySubnetAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The network service, for example Amazon DNS, that you want to mirror.</p>
   */
  AddNetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>The network service, for example Amazon DNS, that you no longer want to mirror.</p>
   */
  RemoveNetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTrafficMirrorFilterNetworkServicesRequest {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterNetworkServicesRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * <p>The Traffic Mirror filter that the network service is associated with.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;
}

export namespace ModifyTrafficMirrorFilterNetworkServicesResult {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterNetworkServicesResult): any => ({
    ...obj,
  });
}

export type TrafficMirrorFilterRuleField = "description" | "destination-port-range" | "protocol" | "source-port-range";

export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>The type of traffic (<code>ingress</code> | <code>egress</code>) to assign to the rule.</p>
   */
  TrafficDirection?: TrafficDirection | string;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;

  /**
   * <p>The action to assign to the rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction | string;

  /**
   * <p>The destination ports that are associated with the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The port range to assign to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example TCP, to assign to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * <p>The description to assign to the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror filter rule.</p>
   *          <p>When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</p>
   */
  RemoveFields?: (TrafficMirrorFilterRuleField | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTrafficMirrorFilterRuleRequest {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterRuleRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * <p>Modifies a Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;
}

export namespace ModifyTrafficMirrorFilterRuleResult {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorFilterRuleResult): any => ({
    ...obj,
  });
}

export type TrafficMirrorSessionField = "description" | "packet-length" | "virtual-network-id";

export interface ModifyTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * <p>The virtual network ID of the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description to assign to the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror session.</p>
   *          <p>When you remove a property from a Traffic Mirror session, the property is set to the default.</p>
   */
  RemoveFields?: (TrafficMirrorSessionField | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTrafficMirrorSessionRequest {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorSessionRequest): any => ({
    ...obj,
  });
}

export interface ModifyTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;
}

export namespace ModifyTrafficMirrorSessionResult {
  export const filterSensitiveLog = (obj: ModifyTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The transit gateway options.</p>
 */
export interface ModifyTransitGatewayOptions {
  /**
   * <p>Adds IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  AddTransitGatewayCidrBlocks?: string[];

  /**
   * <p>Removes CIDR blocks for the transit gateway.</p>
   */
  RemoveTransitGatewayCidrBlocks?: string[];

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Enable or disable DNS support.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Enable or disable automatic association with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;
}

export namespace ModifyTransitGatewayOptions {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayOptions): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The description for the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The options to modify.</p>
   */
  Options?: ModifyTransitGatewayOptions;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTransitGatewayRequest {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayResult {
  /**
   * <p>Describes a transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export namespace ModifyTransitGatewayResult {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayResult): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTransitGatewayPrefixListReferenceRequest {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayPrefixListReferenceRequest): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export namespace ModifyTransitGatewayPrefixListReferenceResult {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayPrefixListReferenceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable IPv6 support. The default is <code>enable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

export namespace ModifyTransitGatewayVpcAttachmentRequestOptions {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayVpcAttachmentRequestOptions): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.</p>
   */
  AddSubnetIds?: string[];

  /**
   * <p>The IDs of one or more subnets to remove.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * <p>The new VPC attachment options.</p>
   *          <note>
   *             <p>You cannot modify the IPv6 options.</p>
   *          </note>
   */
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyTransitGatewayVpcAttachmentRequest {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the modified attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace ModifyTransitGatewayVpcAttachmentResult {
  export const filterSensitiveLog = (obj: ModifyTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface ModifyVolumeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The target size of the volume, in GiB. The target volume size must be greater than or
   *       equal to the existing size of the volume.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   *          <p>Default: If no size is specified, the existing size is retained.</p>
   */
  Size?: number;

  /**
   * <p>The target EBS volume type of the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: If no type is specified, the existing type is retained.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The target IOPS rate of the volume. This parameter is valid only for <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>Default: If no IOPS value is specified, the existing value is retained.</p>
   */
  Iops?: number;

  /**
   * <p>The target throughput of the volume, in MiB/s. This parameter is valid only for <code>gp3</code> volumes.
   *       The maximum value is 1,000.</p>
   *          <p>Default: If no throughput value is specified, the existing value is retained.</p>
   *   	      <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  MultiAttachEnabled?: boolean;
}

export namespace ModifyVolumeRequest {
  export const filterSensitiveLog = (obj: ModifyVolumeRequest): any => ({
    ...obj,
  });
}

export interface ModifyVolumeResult {
  /**
   * <p>Information about the volume modification.</p>
   */
  VolumeModification?: VolumeModification;
}

export namespace ModifyVolumeResult {
  export const filterSensitiveLog = (obj: ModifyVolumeResult): any => ({
    ...obj,
  });
}

export interface ModifyVolumeAttributeRequest {
  /**
   * <p>Indicates whether the volume should be auto-enabled for I/O operations.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVolumeAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyVolumeAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcAttributeRequest {
  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to
   * 			the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP
   * 			address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon
   * 			provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is
   * 			not enabled.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace ModifyVpcAttributeRequest {
  export const filterSensitiveLog = (obj: ModifyVpcAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifyVpcEndpoint.</p>
 */
export interface ModifyVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>(Gateway endpoint) Specify <code>true</code> to reset the policy document to the
   *             default policy. The default policy allows full access to the service.</p>
   */
  ResetPolicy?: boolean;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must
   *             be in valid JSON format.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables IDs to associate with the endpoint.</p>
   */
  AddRouteTableIds?: string[];

  /**
   * <p>(Gateway endpoint) One or more route table IDs to disassociate from the endpoint.</p>
   */
  RemoveRouteTableIds?: string[];

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) One or more subnet IDs in which to serve the endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   */
  AddSubnetIds?: string[];

  /**
   * <p>(Interface endpoint) One or more subnets IDs in which to remove the endpoint.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * <p>(Interface endpoint) One or more security group IDs to associate with the network interface.</p>
   */
  AddSecurityGroupIds?: string[];

  /**
   * <p>(Interface endpoint) One or more security group IDs to disassociate from the network interface.</p>
   */
  RemoveSecurityGroupIds?: string[];

  /**
   * <p>(Interface endpoint) Indicates whether a private hosted zone is associated with the
   *             VPC.</p>
   */
  PrivateDnsEnabled?: boolean;
}

export namespace ModifyVpcEndpointRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyVpcEndpointResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointResult): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId: string | undefined;

  /**
   * <p>The ARN for the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>One or more events for the endpoint. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];
}

export namespace ModifyVpcEndpointConnectionNotificationRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointConnectionNotificationRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export namespace ModifyVpcEndpointConnectionNotificationResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointConnectionNotificationResult): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>(Interface endpoint configuration) Removes the private DNS name of the endpoint service.</p>
   */
  RemovePrivateDnsName?: boolean;

  /**
   * <p>Indicates whether requests to create an endpoint to your service must be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to add to your service
   *             configuration.</p>
   */
  AddNetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveNetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to your service
   *             configuration.</p>
   */
  AddGatewayLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveGatewayLoadBalancerArns?: string[];
}

export namespace ModifyVpcEndpointServiceConfigurationRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServiceConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServiceConfigurationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyVpcEndpointServiceConfigurationResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServiceConfigurationResult): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of one or more principals.
   * 	        Permissions are granted to the principals in this list.
   * 	        To grant permissions to all principals, specify an asterisk (*).</p>
   */
  AddAllowedPrincipals?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of one or more principals.
   * 	        Permissions are revoked for principals in this list.</p>
   */
  RemoveAllowedPrincipals?: string[];
}

export namespace ModifyVpcEndpointServicePermissionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServicePermissionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export namespace ModifyVpcEndpointServicePermissionsResult {
  export const filterSensitiveLog = (obj: ModifyVpcEndpointServicePermissionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC peering connection options.</p>
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * <p>If true, enables a local VPC to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to
   *             a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an
   *             EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export namespace PeeringConnectionOptionsRequest {
  export const filterSensitiveLog = (obj: PeeringConnectionOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * <p>The VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export namespace ModifyVpcPeeringConnectionOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpcPeeringConnectionOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the VPC peering connection options.</p>
 */
export interface PeeringConnectionOptions {
  /**
   * <p>If true, the public DNS hostnames of instances in the specified VPC resolve to private
   *             IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to
   *             a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an
   *             EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export namespace PeeringConnectionOptions {
  export const filterSensitiveLog = (obj: PeeringConnectionOptions): any => ({
    ...obj,
  });
}

export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * <p>Information about the VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions;

  /**
   * <p>Information about the VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions;
}

export namespace ModifyVpcPeeringConnectionOptionsResult {
  export const filterSensitiveLog = (obj: ModifyVpcPeeringConnectionOptionsResult): any => ({
    ...obj,
  });
}

export type VpcTenancy = "default";

export interface ModifyVpcTenancyRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The instance tenancy attribute for the VPC. </p>
   */
  InstanceTenancy: VpcTenancy | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpcTenancyRequest {
  export const filterSensitiveLog = (obj: ModifyVpcTenancyRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpcTenancyResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an
   *             error.</p>
   */
  ReturnValue?: boolean;
}

export namespace ModifyVpcTenancyResult {
  export const filterSensitiveLog = (obj: ModifyVpcTenancyResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The ID of the virtual private gateway at the AWS side of the VPN connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnConnectionRequest {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnConnectionResult {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionOptionsRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection.
   *         </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the AWS side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the AWS side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnConnectionOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionOptionsResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnConnectionOptionsResult {
  export const filterSensitiveLog = (obj: ModifyVpnConnectionOptionsResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelCertificateRequest {
  /**
   * <p>The ID of the AWS Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnTunnelCertificateRequest {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelCertificateRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelCertificateResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnTunnelCertificateResult {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelCertificateResult): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS Site-to-Site VPN tunnel options to modify.</p>
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be unique
   *             across all VPN connections that use the same virtual private gateway. </p>
   *         <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.</p>
   *         <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   *         <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 28,800.</p>
   *         <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 3,600. The value must be less than the value for <code>Phase1LifetimeSeconds</code>.</p>
   *         <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for <code>RekeyFuzzPercentage</code>.</p>
   *         <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *         <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>) during which the rekey time is randomly selected.</p>
   *         <p>Constraints: A value between 0 and 100.</p>
   *         <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *         <p>Constraints: A value between 64 and 2048.</p>
   *         <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *         <p>Constraints: A value between 0 and 30.</p>
   *         <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *         <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *         <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *         <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify <code>start</code> for AWS to initiate the IKE negotiation.</p>
   *         <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *         <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;
}

export namespace ModifyVpnTunnelOptionsSpecification {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelOptionsSpecification): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelOptionsRequest {
  /**
   * <p>The ID of the AWS Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>The tunnel options to modify.</p>
   */
  TunnelOptions: ModifyVpnTunnelOptionsSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnTunnelOptionsRequest {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelOptionsResult {
  /**
   * <p>Describes a VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace ModifyVpnTunnelOptionsResult {
  export const filterSensitiveLog = (obj: ModifyVpnTunnelOptionsResult): any => ({
    ...obj,
  });
}

export interface MonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace MonitorInstancesRequest {
  export const filterSensitiveLog = (obj: MonitorInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface InstanceMonitoring {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;
}

export namespace InstanceMonitoring {
  export const filterSensitiveLog = (obj: InstanceMonitoring): any => ({
    ...obj,
  });
}

export interface MonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

export namespace MonitorInstancesResult {
  export const filterSensitiveLog = (obj: MonitorInstancesResult): any => ({
    ...obj,
  });
}

export interface MoveAddressToVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp: string | undefined;
}

export namespace MoveAddressToVpcRequest {
  export const filterSensitiveLog = (obj: MoveAddressToVpcRequest): any => ({
    ...obj,
  });
}

export enum Status {
  inClassic = "InClassic",
  inVpc = "InVpc",
  moveInProgress = "MoveInProgress",
}

export interface MoveAddressToVpcResult {
  /**
   * <p>The allocation ID for the Elastic IP address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The status of the move of the IP address.</p>
   */
  Status?: Status | string;
}

export namespace MoveAddressToVpcResult {
  export const filterSensitiveLog = (obj: MoveAddressToVpcResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific
 *          AWS account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Prepare to Bring Your Address Range to Your AWS Account</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature: string | undefined;
}

export namespace CidrAuthorizationContext {
  export const filterSensitiveLog = (obj: CidrAuthorizationContext): any => ({
    ...obj,
  });
}

export interface ProvisionByoipCidrRequest {
  /**
   * <p>The public IPv4 or IPv6 address range, in CIDR notation. The most specific IPv4 prefix that you can
   *          specify is /24. The most specific IPv6 prefix you can specify is /56. The address range cannot overlap with another address range that you've
   *          brought to this or another Region.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address
   *          range to Amazon using BYOIP.</p>
   */
  CidrAuthorizationContext?: CidrAuthorizationContext;

  /**
   * <p>(IPv6 only) Indicate whether the address range will be publicly advertised to the
   *             internet.</p>
   *         <p>Default: true</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * <p>A description for the address range and the address pool.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the address pool.</p>
   */
  PoolTagSpecifications?: TagSpecification[];
}

export namespace ProvisionByoipCidrRequest {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface ProvisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace ProvisionByoipCidrResult {
  export const filterSensitiveLog = (obj: ProvisionByoipCidrResult): any => ({
    ...obj,
  });
}

export interface PurchaseHostReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code>, <code>LimitPrice</code>,
   *             and <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation will be associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The specified limit is checked against the total upfront cost of the reservation
   *             (calculated as the offering's upfront cost multiplied by the host count). If the total
   *             upfront cost is greater than the specified price limit, the request fails. This is used
   *             to ensure that the purchase does not exceed the expected upfront cost of the purchase.
   *             At this time, the only supported currency is <code>USD</code>. For example, to indicate
   *             a limit price of USD 100, specify 100.00.</p>
   */
  LimitPrice?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId: string | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host Reservation during purchase.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace PurchaseHostReservationRequest {
  export const filterSensitiveLog = (obj: PurchaseHostReservationRequest): any => ({
    ...obj,
  });
}

export interface PurchaseHostReservationResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>Describes the details of the purchase.</p>
   */
  Purchase?: Purchase[];

  /**
   * <p>The total hourly price of the reservation calculated per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The total amount charged to your account when you purchase the reservation.</p>
   */
  TotalUpfrontPrice?: string;
}

export namespace PurchaseHostReservationResult {
  export const filterSensitiveLog = (obj: PurchaseHostReservationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the limit price of a Reserved Instance offering.</p>
 */
export interface ReservedInstanceLimitPrice {
  /**
   * <p>Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total order (instanceCount * price).</p>
   */
  Amount?: number;

  /**
   * <p>The currency in which the <code>limitPrice</code> amount is specified.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;
}

export namespace ReservedInstanceLimitPrice {
  export const filterSensitiveLog = (obj: ReservedInstanceLimitPrice): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * <p>The number of Reserved Instances to purchase.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   */
  ReservedInstancesOfferingId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.</p>
   */
  LimitPrice?: ReservedInstanceLimitPrice;

  /**
   * <p>The time at which to purchase the Reserved Instance, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  PurchaseTime?: Date;
}

export namespace PurchaseReservedInstancesOfferingRequest {
  export const filterSensitiveLog = (obj: PurchaseReservedInstancesOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * <p>The IDs of the purchased Reserved Instances.</p>
   */
  ReservedInstancesId?: string;
}

export namespace PurchaseReservedInstancesOfferingResult {
  export const filterSensitiveLog = (obj: PurchaseReservedInstancesOfferingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a request to purchase Scheduled Instances.</p>
 */
export interface PurchaseRequest {
  /**
   * <p>The number of instances.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The purchase token.</p>
   */
  PurchaseToken: string | undefined;
}

export namespace PurchaseRequest {
  export const filterSensitiveLog = (obj: PurchaseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The purchase requests.</p>
   */
  PurchaseRequests: PurchaseRequest[] | undefined;
}

export namespace PurchaseScheduledInstancesRequest {
  export const filterSensitiveLog = (obj: PurchaseScheduledInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

export namespace PurchaseScheduledInstancesResult {
  export const filterSensitiveLog = (obj: PurchaseScheduledInstancesResult): any => ({
    ...obj,
  });
}

export interface RebootInstancesRequest {
  /**
   * <p>The instance IDs.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RebootInstancesRequest {
  export const filterSensitiveLog = (obj: RebootInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RegisterImage.</p>
 */
export interface RegisterImageRequest {
  /**
   * <p>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the
   *    		<code>aws-exec-read</code> canned access control list (ACL) to ensure that it can be accessed
   *    		by Amazon EC2. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACLs</a> in the
   *    		<i>Amazon S3 Service Developer Guide</i>.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The architecture of the AMI.</p>
   *          <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>.
   *         For instance store-backed AMIs, the architecture specified in the manifest file.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>A description for your AMI.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>A name for your AMI.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * <p>The billing product codes. Your account must be authorized to specify billing product codes. Otherwise,
   *          you can use the AWS Marketplace to bill for the use of an AMI.</p>
   */
  BillingProducts?: string[];

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI.</p>
   *          <p>There is no way to disable <code>sriovNetSupport</code> at this time.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The type of virtualization (<code>hvm</code> | <code>paravirtual</code>).</p>
   *          <p>Default: <code>paravirtual</code>
   *          </p>
   */
  VirtualizationType?: string;

  BootMode?: BootModeValues | string;
}

export namespace RegisterImageRequest {
  export const filterSensitiveLog = (obj: RegisterImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RegisterImage.</p>
 */
export interface RegisterImageResult {
  /**
   * <p>The ID of the newly registered AMI.</p>
   */
  ImageId?: string;
}

export namespace RegisterImageResult {
  export const filterSensitiveLog = (obj: RegisterImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the tag keys to register for the current Region. You can either specify
 *       	individual tag keys or register all tag keys in the current Region. You must specify either
 *       	<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to register all tag keys in the current Region. Specify <code>true</code>
   *       	to register all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * <p>The tag keys to register.</p>
   */
  InstanceTagKeys?: string[];
}

export namespace RegisterInstanceTagAttributeRequest {
  export const filterSensitiveLog = (obj: RegisterInstanceTagAttributeRequest): any => ({
    ...obj,
  });
}

export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Information about the tag keys to register.</p>
   */
  InstanceTagAttribute?: RegisterInstanceTagAttributeRequest;
}

export namespace RegisterInstanceEventNotificationAttributesRequest {
  export const filterSensitiveLog = (obj: RegisterInstanceEventNotificationAttributesRequest): any => ({
    ...obj,
  });
}

export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export namespace RegisterInstanceEventNotificationAttributesResult {
  export const filterSensitiveLog = (obj: RegisterInstanceEventNotificationAttributesResult): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The group members' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RegisterTransitGatewayMulticastGroupMembersRequest {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the registered network interfaces.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastRegisteredGroupMembers {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastRegisteredGroupMembers): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the registered  transit gateway multicast group members.</p>
   */
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers;
}

export namespace RegisterTransitGatewayMulticastGroupMembersResult {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupMembersResult): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The group sources' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RegisterTransitGatewayMulticastGroupSourcesRequest {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupSourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the members registered with the  transit gateway multicast group.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IDs of the network interfaces members registered with the  transit gateway multicast group.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastRegisteredGroupSources {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastRegisteredGroupSources): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the  transit gateway multicast group sources.</p>
   */
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources;
}

export namespace RegisterTransitGatewayMulticastGroupSourcesResult {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayMulticastGroupSourcesResult): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RejectTransitGatewayMulticastDomainAssociationsRequest {
  export const filterSensitiveLog = (obj: RejectTransitGatewayMulticastDomainAssociationsRequest): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Describes the multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export namespace RejectTransitGatewayMulticastDomainAssociationsResult {
  export const filterSensitiveLog = (obj: RejectTransitGatewayMulticastDomainAssociationsResult): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RejectTransitGatewayPeeringAttachmentRequest {
  export const filterSensitiveLog = (obj: RejectTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace RejectTransitGatewayPeeringAttachmentResult {
  export const filterSensitiveLog = (obj: RejectTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RejectTransitGatewayVpcAttachmentRequest {
  export const filterSensitiveLog = (obj: RejectTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace RejectTransitGatewayVpcAttachmentResult {
  export const filterSensitiveLog = (obj: RejectTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface RejectVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of one or more VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export namespace RejectVpcEndpointConnectionsRequest {
  export const filterSensitiveLog = (obj: RejectVpcEndpointConnectionsRequest): any => ({
    ...obj,
  });
}

export interface RejectVpcEndpointConnectionsResult {
  /**
   * <p>Information about the endpoints that were not rejected, if applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace RejectVpcEndpointConnectionsResult {
  export const filterSensitiveLog = (obj: RejectVpcEndpointConnectionsResult): any => ({
    ...obj,
  });
}

export interface RejectVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export namespace RejectVpcPeeringConnectionRequest {
  export const filterSensitiveLog = (obj: RejectVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface RejectVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace RejectVpcPeeringConnectionResult {
  export const filterSensitiveLog = (obj: RejectVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

export interface ReleaseAddressRequest {
  /**
   * <p>[EC2-VPC] The allocation ID. Required for EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises
   *       IP addresses.</p>
   *          <p>If you provide an incorrect network border group, you will receive an <code>InvalidAddress.NotFound</code> error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
   *          <note>
   *             <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 classic, you will receive an <code>InvalidParameterCombination</code> error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
   *          </note>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ReleaseAddressRequest {
  export const filterSensitiveLog = (obj: ReleaseAddressRequest): any => ({
    ...obj,
  });
}

export interface ReleaseHostsRequest {
  /**
   * <p>The IDs of the Dedicated Hosts to release.</p>
   */
  HostIds: string[] | undefined;
}

export namespace ReleaseHostsRequest {
  export const filterSensitiveLog = (obj: ReleaseHostsRequest): any => ({
    ...obj,
  });
}

export interface ReleaseHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully released.</p>
   */
  Successful?: string[];

  /**
   * <p>The IDs of the Dedicated Hosts that could not be released, including an error
   *             message.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace ReleaseHostsResult {
  export const filterSensitiveLog = (obj: ReleaseHostsResult): any => ({
    ...obj,
  });
}

export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the existing IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export namespace ReplaceIamInstanceProfileAssociationRequest {
  export const filterSensitiveLog = (obj: ReplaceIamInstanceProfileAssociationRequest): any => ({
    ...obj,
  });
}

export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export namespace ReplaceIamInstanceProfileAssociationResult {
  export const filterSensitiveLog = (obj: ReplaceIamInstanceProfileAssociationResult): any => ({
    ...obj,
  });
}

export interface ReplaceNetworkAclAssociationRequest {
  /**
   * <p>The ID of the current association between the original network ACL and the subnet.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the new network ACL to associate with the subnet.</p>
   */
  NetworkAclId: string | undefined;
}

export namespace ReplaceNetworkAclAssociationRequest {
  export const filterSensitiveLog = (obj: ReplaceNetworkAclAssociationRequest): any => ({
    ...obj,
  });
}

export interface ReplaceNetworkAclAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;
}

export namespace ReplaceNetworkAclAssociationResult {
  export const filterSensitiveLog = (obj: ReplaceNetworkAclAssociationResult): any => ({
    ...obj,
  });
}

export interface ReplaceNetworkAclEntryRequest {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   *                 <code>172.16.0.0/24</code>).</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to replace the egress rule.</p>
   * 		       <p>Default: If no value is specified, we replace the ingress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:bd8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *            protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   *            allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   *            protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   *            codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   *            and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | string | undefined;

  /**
   * <p>The rule number of the entry to replace.</p>
   */
  RuleNumber: number | undefined;
}

export namespace ReplaceNetworkAclEntryRequest {
  export const filterSensitiveLog = (obj: ReplaceNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export interface ReplaceRouteRequest {
  /**
   * <p>The IPv4 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>Specifies whether to reset the local route to its default target (<code>local</code>).</p>
   */
  LocalTarget?: boolean;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>[IPv4 traffic only] The ID of a carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace ReplaceRouteRequest {
  export const filterSensitiveLog = (obj: ReplaceRouteRequest): any => ({
    ...obj,
  });
}

export interface ReplaceRouteTableAssociationRequest {
  /**
   * <p>The association ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the new route table to associate with the subnet.</p>
   */
  RouteTableId: string | undefined;
}

export namespace ReplaceRouteTableAssociationRequest {
  export const filterSensitiveLog = (obj: ReplaceRouteTableAssociationRequest): any => ({
    ...obj,
  });
}

export interface ReplaceRouteTableAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export namespace ReplaceRouteTableAssociationResult {
  export const filterSensitiveLog = (obj: ReplaceRouteTableAssociationResult): any => ({
    ...obj,
  });
}

export interface ReplaceTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether traffic matching this route is to be dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ReplaceTransitGatewayRouteRequest {
  export const filterSensitiveLog = (obj: ReplaceTransitGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface ReplaceTransitGatewayRouteResult {
  /**
   * <p>Information about the modified route.</p>
   */
  Route?: TransitGatewayRoute;
}

export namespace ReplaceTransitGatewayRouteResult {
  export const filterSensitiveLog = (obj: ReplaceTransitGatewayRouteResult): any => ({
    ...obj,
  });
}

export type ReportInstanceReasonCodes =
  | "instance-stuck-in-state"
  | "not-accepting-credentials"
  | "other"
  | "password-not-available"
  | "performance-ebs-volume"
  | "performance-instance-store"
  | "performance-network"
  | "performance-other"
  | "unresponsive";

export type ReportStatusType = "impaired" | "ok";

export interface ReportInstanceStatusRequest {
  /**
   * <p>Descriptive text about the health state of your instance.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The time at which the reported instance health state ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The instances.</p>
   */
  Instances: string[] | undefined;

  /**
   * <p>The reason codes that describe the health state of your instance.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>instance-stuck-in-state</code>: My instance is stuck in a state.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>unresponsive</code>: My instance is unresponsive.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>not-accepting-credentials</code>: My instance is not accepting my
   *                     credentials.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>password-not-available</code>: A password is not available for my
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-network</code>: My instance is experiencing performance
   *                     problems that I believe are network related.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-instance-store</code>: My instance is experiencing performance
   *                     problems that I believe are related to the instance stores.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-ebs-volume</code>: My instance is experiencing performance
   *                     problems that I believe are related to an EBS volume.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>performance-other</code>: My instance is experiencing performance
   *                     problems.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>other</code>: [explain using the description parameter]</p>
   *             </li>
   *          </ul>
   */
  ReasonCodes: (ReportInstanceReasonCodes | string)[] | undefined;

  /**
   * <p>The time at which the reported instance health state began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of all instances listed.</p>
   */
  Status: ReportStatusType | string | undefined;
}

export namespace ReportInstanceStatusRequest {
  export const filterSensitiveLog = (obj: ReportInstanceStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RequestSpotFleet.</p>
 */
export interface RequestSpotFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The configuration for the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

export namespace RequestSpotFleetRequest {
  export const filterSensitiveLog = (obj: RequestSpotFleetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RequestSpotFleet.</p>
 */
export interface RequestSpotFleetResponse {
  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export namespace RequestSpotFleetResponse {
  export const filterSensitiveLog = (obj: RequestSpotFleetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for an instance.</p>
 */
export interface RequestSpotLaunchSpecification {
  /**
   * <p>One or more security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block device mapping entries. You can't specify both a snapshot ID and an encryption value.
   *            This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume,
   *            it is not blank and its encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Indicates whether basic or detailed monitoring is enabled for the instance.</p>
   *          <p>Default: Disabled</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the subnets in which to launch the instance. To specify multiple subnets, separate
   *            them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data for the instance. User data is limited to 16 KB.</p>
   */
  UserData?: string;
}

export namespace RequestSpotLaunchSpecification {
  export const filterSensitiveLog = (obj: RequestSpotLaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesRequest {
  /**
   * <p>The user-specified name for a logical grouping of requests.</p>
   *          <p>When you specify an Availability Zone group in a Spot Instance request, all Spot Instances in the request are launched in the same Availability Zone. Instance proximity is maintained with this parameter, but the choice of Availability Zone is not. The group applies only to requests for Spot Instances of the same instance type. Any additional Spot Instance requests that are specified with the same Availability Zone group name are launched in that same Availability Zone, as long as at least one instance from the group is still active.</p>
   *          <p>If there is no active instance running in the Availability Zone group that you specify for a new Spot Instance request (all instances are terminated, the request is expired, or the maximum price you specified falls below current Spot price), then Amazon EC2 launches the instance in any Availability Zone where the constraint can be met. Consequently, the subsequent set of Spot Instances could be placed in a different zone from the original request, even if you specified the same Availability Zone group.</p>
   *          <p>Default: Instances are launched in any available Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   *          <p>The duration period starts as soon as your Spot Instance receives its instance ID. At
   *             the end of the duration period, Amazon EC2 marks the Spot Instance for termination and
   *             provides a Spot Instance termination notice, which gives the instance a two-minute
   *             warning before it terminates.</p>
   *          <p>You can't specify an Availability Zone group or a launch group if you specify a
   *             duration.</p>
   *          <p>New accounts or accounts with no previous billing history with AWS are not eligible for
   *             Spot Instances with a defined duration (also known as Spot blocks).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>
   *        in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of Spot Instances to launch.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   *          <p>Default: Instances are launched and terminated individually</p>
   */
  LaunchGroup?: string;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: RequestSpotLaunchSpecification;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance. The default is the On-Demand price.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   *          <p>Default: <code>one-time</code>
   *          </p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The start date of the request. If this is a one-time request, the request becomes active at this date and time and remains active until all instances launch, the request expires, or the request is canceled. If the request is persistent, the request becomes active at this date and time and remains active until it expires or is canceled.</p>
   *    	     <p>The specified start date and time cannot be equal to the current date and time. You must specify a start date and time that occurs after the current date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the <code>ValidUntil</code> date
   *                     and time is reached. Otherwise, the request remains active until you cancel it.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>ValidUntil</code> date and time is
   *                     reached. By default, the request is valid for 7 days from the date the request
   *                     was created.</p>
   *             </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The key-value pair for tagging the Spot Instance request on creation. The value for <code>ResourceType</code> must be <code>spot-instances-request</code>, otherwise the Spot Instance request fails. To tag the Spot Instance request after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.
   *         </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace RequestSpotInstancesRequest {
  export const filterSensitiveLog = (obj: RequestSpotInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];
}

export namespace RequestSpotInstancesResult {
  export const filterSensitiveLog = (obj: RequestSpotInstancesResult): any => ({
    ...obj,
  });
}

export interface ResetAddressAttributeRequest {
  AllocationId: string | undefined;
  Attribute: AddressAttributeName | string | undefined;
  DryRun?: boolean;
}

export namespace ResetAddressAttributeRequest {
  export const filterSensitiveLog = (obj: ResetAddressAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetAddressAttributeResult {
  Address?: AddressAttribute;
}

export namespace ResetAddressAttributeResult {
  export const filterSensitiveLog = (obj: ResetAddressAttributeResult): any => ({
    ...obj,
  });
}

export interface ResetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetEbsDefaultKmsKeyIdRequest {
  export const filterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default CMK for EBS encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace ResetEbsDefaultKmsKeyIdResult {
  export const filterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export type ResetFpgaImageAttributeName = "loadPermission";

export interface ResetFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The attribute.</p>
   */
  Attribute?: ResetFpgaImageAttributeName | string;
}

export namespace ResetFpgaImageAttributeRequest {
  export const filterSensitiveLog = (obj: ResetFpgaImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetFpgaImageAttributeResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ResetFpgaImageAttributeResult {
  export const filterSensitiveLog = (obj: ResetFpgaImageAttributeResult): any => ({
    ...obj,
  });
}

export type ResetImageAttributeName = "launchPermission";

/**
 * <p>Contains the parameters for ResetImageAttribute.</p>
 */
export interface ResetImageAttributeRequest {
  /**
   * <p>The attribute to reset (currently you can only reset the launch permission attribute).</p>
   */
  Attribute: ResetImageAttributeName | string | undefined;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetImageAttributeRequest {
  export const filterSensitiveLog = (obj: ResetImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetInstanceAttributeRequest {
  /**
   * <p>The attribute to reset.</p>
   *         <important>
   *             <p>You can only reset the following attributes: <code>kernel</code> |
   *                     <code>ramdisk</code> | <code>sourceDestCheck</code>. To change an instance
   *                 attribute, use <a>ModifyInstanceAttribute</a>.</p>
   *         </important>
   */
  Attribute: InstanceAttributeName | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace ResetInstanceAttributeRequest {
  export const filterSensitiveLog = (obj: ResetInstanceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ResetNetworkInterfaceAttribute.</p>
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The source/destination checking attribute. Resets the value to <code>true</code>.</p>
   */
  SourceDestCheck?: string;
}

export namespace ResetNetworkInterfaceAttributeRequest {
  export const filterSensitiveLog = (obj: ResetNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetSnapshotAttributeRequest {
  /**
   * <p>The attribute to reset. Currently, only the attribute for permission to create volumes can
   *       be reset.</p>
   */
  Attribute: SnapshotAttributeName | string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetSnapshotAttributeRequest {
  export const filterSensitiveLog = (obj: ResetSnapshotAttributeRequest): any => ({
    ...obj,
  });
}

export interface RestoreAddressToClassicRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp: string | undefined;
}

export namespace RestoreAddressToClassicRequest {
  export const filterSensitiveLog = (obj: RestoreAddressToClassicRequest): any => ({
    ...obj,
  });
}

export interface RestoreAddressToClassicResult {
  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The move status for the IP address.</p>
   */
  Status?: Status | string;
}

export namespace RestoreAddressToClassicResult {
  export const filterSensitiveLog = (obj: RestoreAddressToClassicResult): any => ({
    ...obj,
  });
}
