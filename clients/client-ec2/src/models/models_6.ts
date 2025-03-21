// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccessScopeAnalysisFinding,
  AddressAttribute,
  AddressTransfer,
  AllowedImagesSettingsEnabledState,
  AutoPlacement,
  CurrencyCodeValues,
  DeviceTrustProviderType,
  HostMaintenance,
  HostRecovery,
  IpamPoolAllocation,
  SubnetAssociation,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  TargetConfigurationRequest,
  TransitGatewayAssociation,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPolicyTableAssociation,
  UnsuccessfulItem,
  UserTrustProviderType,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
} from "./models_0";

import {
  _InstanceType,
  AttributeValue,
  CapacityReservationPreference,
  CapacityReservationState,
  CapacityReservationTarget,
  ClientConnectOptions,
  ClientLoginBannerOptions,
  ConnectionLogOptions,
  DiskImageFormat,
  EndDateType,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateConfigRequest,
  InstanceMatchCriteria,
  InstanceRequirementsRequest,
  IpamResourceTag,
  Placement,
  PlatformValues,
  RequestIpamResourceTag,
  ResponseLaunchTemplateData,
  ResponseLaunchTemplateDataFilterSensitiveLog,
  SelfServicePortal,
  ShutdownBehavior,
  TargetCapacitySpecificationRequest,
  TargetCapacityUnitType,
} from "./models_1";

import {
  NetworkInsightsAccessScopeContent,
  SSEType,
  SubnetCidrReservation,
  TransitGatewayPrefixListReference,
} from "./models_2";

import {
  ConversionTask,
  ConversionTaskFilterSensitiveLog,
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchResourceType,
  Filter,
  IpamPoolCidr,
  MetricType,
  PeriodType,
  StatisticType,
} from "./models_3";

import {
  AnalysisStatus,
  ArchitectureType,
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  FastLaunchSnapshotConfigurationResponse,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FpgaImageAttribute,
  FpgaImageAttributeName,
  HttpTokensState,
  ImportImageLicenseConfigurationResponse,
  InstanceAttributeName,
  InstanceMetadataEndpointState,
  InstanceMetadataTagsState,
  LaunchPermission,
  LockState,
  PaymentOption,
  PermissionGroup,
  SnapshotDetail,
  SnapshotDetailFilterSensitiveLog,
  SnapshotTaskDetail,
  SnapshotTaskDetailFilterSensitiveLog,
  VirtualizationType,
} from "./models_4";

import {
  ManagedBy,
  SnapshotBlockPublicAccessState,
  TransitGatewayPropagation,
  TransitGatewayPropagationState,
} from "./models_5";

/**
 * @public
 */
export interface DisassociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   * @public
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of the subnets;</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the disassociated policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment to disassociate from the policy table.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayPolicyTableResult {
  /**
   * <p>Returns details about the transit gateway policy table disassociation.</p>
   * @public
   */
  Association?: TransitGatewayPolicyTableAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  Association?: TransitGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the association</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTrunkInterfaceResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   * @public
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation | undefined;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   * @public
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface EnableAddressTransferRequest {
  /**
   * <p>The allocation ID of an Elastic IP address.</p>
   * @public
   */
  AllocationId: string | undefined;

  /**
   * <p>The ID of the account that you want to transfer the Elastic IP address to.</p>
   * @public
   */
  TransferAccountId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfer?: AddressTransfer | undefined;
}

/**
 * @public
 */
export interface EnableAllowedImagesSettingsRequest {
  /**
   * <p>Specify <code>enabled</code> to apply the image criteria specified by the Allowed AMIs
   *       settings. Specify <code>audit-mode</code> so that you can check which AMIs will be allowed or
   *       not allowed by the image criteria.</p>
   * @public
   */
  AllowedImagesSettingsState: AllowedImagesSettingsEnabledState | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableAllowedImagesSettingsResult {
  /**
   * <p>Returns <code>enabled</code> or <code>audit-mode</code> if the request succeeds;
   *       otherwise, it returns an error.</p>
   * @public
   */
  AllowedImagesSettingsState?: AllowedImagesSettingsEnabledState | undefined;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * <p>The source Region (like <code>us-east-1</code>) or Availability Zone ID (like <code>use1-az1</code>) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The target Region (like <code>us-east-2</code>) or Availability Zone ID (like <code>use2-az2</code>) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the enabled subscription.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The statistic used for the enabled subscription.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * <p>Indicates whether the subscribe action was successful.</p>
   * @public
   */
  Output?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;
}

/**
 * <p>Request to create a launch template for a Windows fast launch enabled AMI.</p>
 *          <note>
 *             <p>Note - You can specify either the <code>LaunchTemplateName</code> or the
 *           <code>LaunchTemplateId</code>, but not both.</p>
 *          </note>
 * @public
 */
export interface FastLaunchLaunchTemplateSpecificationRequest {
  /**
   * <p>Specify the ID of the launch template that the AMI should use for Windows fast
   *       launch.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>Specify the name of the launch template that the AMI should use for Windows fast
   *       launch.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>Specify the version of the launch template that the AMI should use for Windows fast
   *       launch.</p>
   * @public
   */
  Version: string | undefined;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a Windows
 *       fast launch enabled AMI.</p>
 * @public
 */
export interface FastLaunchSnapshotConfigurationRequest {
  /**
   * <p>The number of pre-provisioned snapshots to keep on hand for a Windows fast launch enabled
   *       AMI.</p>
   * @public
   */
  TargetResourceCount?: number | undefined;
}

/**
 * @public
 */
export interface EnableFastLaunchRequest {
  /**
   * <p>Specify the ID of the image for which to enable Windows fast launch.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The type of resource to use for pre-provisioning the AMI for Windows fast launch.
   *       Supported values include: <code>snapshot</code>, which is the default value.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Configuration settings for creating and managing the snapshots that are used for
   *       pre-provisioning the AMI for Windows fast launch. The associated <code>ResourceType</code>
   *       must be <code>snapshot</code>.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest | undefined;

  /**
   * <p>The launch template to use when launching Windows instances from pre-provisioned
   *       snapshots. Launch template parameters can include either the name or ID of the launch
   *       template, but not both.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest | undefined;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   *       pre-provisioned snapshots for Windows fast launch. Value must be <code>6</code> or
   *       greater.</p>
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableFastLaunchResult {
  /**
   * <p>The image ID that identifies the AMI for which Windows fast launch was enabled.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The type of resource that was defined for pre-provisioning the AMI for Windows fast
   *       launch.</p>
   * @public
   */
  ResourceType?: FastLaunchResourceType | undefined;

  /**
   * <p>Settings to create and manage the pre-provisioned snapshots that Amazon EC2 uses for faster
   *       launches from the Windows AMI. This property is returned when the associated
   *         <code>resourceType</code> is <code>snapshot</code>.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse | undefined;

  /**
   * <p>The launch template that is used when launching Windows instances from pre-provisioned
   *       snapshots.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse | undefined;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   *       pre-provisioned snapshots for Windows fast launch.</p>
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * <p>The owner ID for the AMI for which Windows fast launch was enabled.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of Windows fast launch for the specified AMI.</p>
   * @public
   */
  State?: FastLaunchStateCode | undefined;

  /**
   * <p>The reason that the state changed for Windows fast launch for the AMI.</p>
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The time that the state changed for Windows fast launch for the AMI.</p>
   * @public
   */
  StateTransitionTime?: Date | undefined;
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   * @public
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another Amazon Web Services account.</p>
   * @public
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The state of fast snapshot restores.</p>
   * @public
   */
  State?: FastSnapshotRestoreStateCode | undefined;

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
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   * @public
   */
  EnablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   * @public
   */
  OptimizingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   * @public
   */
  EnabledTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   * @public
   */
  DisablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   * @public
   */
  DisabledTime?: Date | undefined;
}

/**
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The error.</p>
   * @public
   */
  Error?: EnableFastSnapshotRestoreStateError | undefined;
}

/**
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The errors.</p>
   * @public
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[] | undefined;
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully enabled.</p>
   * @public
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[] | undefined;

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be enabled.</p>
   * @public
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[] | undefined;
}

/**
 * @public
 */
export interface EnableImageRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageBlockPublicAccessEnabledState = {
  block_new_sharing: "block-new-sharing",
} as const;

/**
 * @public
 */
export type ImageBlockPublicAccessEnabledState =
  (typeof ImageBlockPublicAccessEnabledState)[keyof typeof ImageBlockPublicAccessEnabledState];

/**
 * @public
 */
export interface EnableImageBlockPublicAccessRequest {
  /**
   * <p>Specify <code>block-new-sharing</code> to enable block public access for AMIs at the
   *       account level in the specified Region. This will block any attempt to publicly share your AMIs
   *       in the specified Region.</p>
   * @public
   */
  ImageBlockPublicAccessState: ImageBlockPublicAccessEnabledState | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageBlockPublicAccessResult {
  /**
   * <p>Returns <code>block-new-sharing</code> if the request succeeds; otherwise, it returns an
   *       error.</p>
   * @public
   */
  ImageBlockPublicAccessState?: ImageBlockPublicAccessEnabledState | undefined;
}

/**
 * @public
 */
export interface EnableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specify a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.</p>
   *          <p>You can’t specify a date in the past. The upper limit for <code>DeprecateAt</code> is 10
   *       years from now, except for public AMIs, where the upper limit is 2 years from the creation
   *       date.</p>
   * @public
   */
  DeprecateAt: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageDeregistrationProtectionRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>If <code>true</code>, enforces deregistration protection for 24 hours after deregistration
   *       protection is disabled.</p>
   * @public
   */
  WithCooldown?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageDeregistrationProtectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Organizations member account ID that you want to enable as the IPAM account.</p>
   * @public
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountResult {
  /**
   * <p>The result of enabling the IPAM account.</p>
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableReachabilityAnalyzerOrganizationSharingRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableReachabilityAnalyzerOrganizationSharingResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotBlockPublicAccessRequest {
  /**
   * <p>The mode in which to enable block public access for snapshots for the Region.
   *       Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>block-all-sharing</code> - Prevents all public sharing of snapshots in
   *           the Region. Users in the account will no longer be able to request new public
   *           sharing. Additionally, snapshots that are already publicly shared are treated as
   *           private and they are no longer publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-new-sharing</code>  - Prevents only new public sharing of snapshots
   *           in the Region. Users in the account will no longer be able to request new public
   *           sharing. However, snapshots that are already publicly shared, remain publicly
   *           available.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>unblocked</code> is not a valid value for <b>EnableSnapshotBlockPublicAccess</b>.</p>
   * @public
   */
  State: SnapshotBlockPublicAccessState | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotBlockPublicAccessResult {
  /**
   * <p>The state of block public access for snapshots for the account and Region. Returns
   *       either <code>block-all-sharing</code> or <code>block-new-sharing</code> if the request
   *       succeeds.</p>
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   * @public
   */
  Propagation?: TransitGatewayPropagation | undefined;
}

/**
 * <p>Contains the parameters for EnableVgwRoutePropagation.</p>
 * @public
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway that is attached to a VPC. The virtual private
   *             gateway must be attached to the same VPC that the routing tables are associated with.
   *         </p>
   * @public
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table. The routing table must be associated with the same VPC that
   *             the virtual private gateway is attached to. </p>
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableVolumeIORequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientCertificateRevocationListStatusCode = {
  active: "active",
  pending: "pending",
} as const;

/**
 * @public
 */
export type ClientCertificateRevocationListStatusCode =
  (typeof ClientCertificateRevocationListStatusCode)[keyof typeof ClientCertificateRevocationListStatusCode];

/**
 * <p>Describes the state of a client certificate revocation list.</p>
 * @public
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * <p>The state of the client certificate revocation list.</p>
   * @public
   */
  Code?: ClientCertificateRevocationListStatusCode | undefined;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Information about the client certificate revocation list.</p>
   * @public
   */
  CertificateRevocationList?: string | undefined;

  /**
   * <p>The current state of the client certificate revocation list.</p>
   * @public
   */
  Status?: ClientCertificateRevocationListStatus | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationResult {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   * @public
   */
  ClientConfiguration?: string | undefined;
}

/**
 * <p>Describes the destination for an export image task.</p>
 * @public
 */
export interface ExportTaskS3LocationRequest {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface ExportImageRequest {
  /**
   * <p>Token to enable idempotency for export image requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The disk image format.</p>
   * @public
   */
  DiskImageFormat: DiskImageFormat | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the image.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist.</p>
   * @public
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The tags to apply to the export image task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface ExportImageResult {
  /**
   * <p>A description of the image being exported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The disk image format for the exported image.</p>
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * <p>The ID of the export image task.</p>
   * @public
   */
  ExportImageTaskId?: string | undefined;

  /**
   * <p>The ID of the image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The percent complete of the export image task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   * @public
   */
  S3ExportLocation?: ExportTaskS3Location | undefined;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The status message for the export image task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Any tags assigned to the export image task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ExportTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the route table.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportTransitGatewayRoutesResult {
  /**
   * <p>The URL of the exported file in Amazon S3. For example,
   *          s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   * @public
   */
  S3Location?: string | undefined;
}

/**
 * @public
 */
export interface ExportVerifiedAccessInstanceClientConfigurationRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a route.</p>
 * @public
 */
export interface VerifiedAccessInstanceOpenVpnClientConfigurationRoute {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Describes a set of routes.</p>
 * @public
 */
export interface VerifiedAccessInstanceOpenVpnClientConfiguration {
  /**
   * <p>The base64-encoded Open VPN client configuration.</p>
   * @public
   */
  Config?: string | undefined;

  /**
   * <p>The routes.</p>
   * @public
   */
  Routes?: VerifiedAccessInstanceOpenVpnClientConfigurationRoute[] | undefined;
}

/**
 * <p>Describes the trust provider.</p>
 * @public
 */
export interface VerifiedAccessInstanceUserTrustProviderClientConfiguration {
  /**
   * <p>The trust provider type.</p>
   * @public
   */
  Type?: UserTrustProviderType | undefined;

  /**
   * <p>The set of user claims to be requested from the IdP.</p>
   * @public
   */
  Scopes?: string | undefined;

  /**
   * <p>The OIDC issuer identifier of the IdP.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The authorization endpoint of the IdP.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The public signing key endpoint.</p>
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

  /**
   * <p>The token endpoint of the IdP.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The user info endpoint of the IdP.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The OAuth 2.0 client identifier.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The OAuth 2.0 client secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>Indicates whether Proof of Key Code Exchange (PKCE) is enabled.</p>
   * @public
   */
  PkceEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportVerifiedAccessInstanceClientConfigurationResult {
  /**
   * <p>The version.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>The Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The device trust providers.</p>
   * @public
   */
  DeviceTrustProviders?: DeviceTrustProviderType[] | undefined;

  /**
   * <p>The user identity trust provider.</p>
   * @public
   */
  UserTrustProvider?: VerifiedAccessInstanceUserTrustProviderClientConfiguration | undefined;

  /**
   * <p>The Open VPN configuration.</p>
   * @public
   */
  OpenVpnConfigurations?: VerifiedAccessInstanceOpenVpnClientConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAllowedImagesSettingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>The list of criteria that are evaluated to determine whch AMIs are discoverable and usable
 *       in the account in the specified Amazon Web Services Region. Currently, the only criteria that can be
 *       specified are AMI providers. </p>
 *          <p>Up to 10 <code>imageCriteria</code> objects can be specified, and up to a total of 200
 *       values for all <code>imageProviders</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html#allowed-amis-json-configuration">JSON
 *         configuration for the Allowed AMIs criteria</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ImageCriterion {
  /**
   * <p>A list of AMI providers whose AMIs are discoverable and useable in the account. Up to a
   *       total of 200 values can be specified.</p>
   *          <p>Possible values:</p>
   *          <p>
   *             <code>amazon</code>: Allow AMIs created by Amazon Web Services.</p>
   *          <p>
   *             <code>aws-marketplace</code>: Allow AMIs created by verified providers in the Amazon Web Services
   *       Marketplace.</p>
   *          <p>
   *             <code>aws-backup-vault</code>: Allow AMIs created by Amazon Web Services Backup. </p>
   *          <p>12-digit account ID: Allow AMIs created by this account. One or more account IDs can be
   *       specified.</p>
   *          <p>
   *             <code>none</code>: Allow AMIs created by your own account only.</p>
   * @public
   */
  ImageProviders?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAllowedImagesSettingsResult {
  /**
   * <p>The current state of the Allowed AMIs setting at the account level in the specified Amazon Web Services
   *       Region.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>disabled</code>: All AMIs are allowed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audit-mode</code>: All AMIs are allowed, but the <code>ImageAllowed</code> field
   *           is set to <code>true</code> if the AMI would be allowed with the current list of criteria
   *           if allowed AMIs was enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enabled</code>: Only AMIs matching the image criteria are discoverable and
   *           available for use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The list of criteria for images that are discoverable and usable in the account in the
   *       specified Amazon Web Services Region.</p>
   * @public
   */
  ImageCriteria?: ImageCriterion[] | undefined;

  /**
   * <p>The entity that manages the Allowed AMIs settings. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - The Allowed AMIs settings is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The Allowed AMIs settings is managed by a
   *                     declarative policy and can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * <p>The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon
   * 			S3 object information.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about the associated IAM roles.</p>
 * @public
 */
export interface AssociatedRole {
  /**
   * <p>The ARN of the associated IAM role.</p>
   * @public
   */
  AssociatedRoleArn?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   * @public
   */
  CertificateS3BucketName?: string | undefined;

  /**
   * <p>The key of the Amazon S3 object where the certificate, certificate chain, and encrypted private key bundle
   * 			are stored. The object key is formatted as follows: <code>role_arn</code>/<code>certificate_arn</code>.
   * 		</p>
   * @public
   */
  CertificateS3ObjectKey?: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the private key.</p>
   * @public
   */
  EncryptionKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * <p>Information about the associated IAM roles.</p>
   * @public
   */
  AssociatedRoles?: AssociatedRole[] | undefined;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * <p>The ID of the IPv6 address pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an IPv6 CIDR block association.</p>
 * @public
 */
export interface Ipv6CidrAssociation {
  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6Cidr?: string | undefined;

  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   * @public
   */
  AssociatedResource?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * <p>Information about the IPv6 CIDR block associations.</p>
   * @public
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A query used for retrieving network health data. </p>
 * @public
 */
export interface DataQuery {
  /**
   * <p>A user-defined ID associated with a data query that's returned in the <code>dataResponse</code> identifying the query. For example, if you set the Id to <code>MyQuery01</code>in the query, the <code>dataResponse</code> identifies the query as <code>MyQuery01</code>.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the target for the data query. For example, <code>eu-north-1</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the network performance request.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The metric data aggregation period, <code>p50</code>, between the specified <code>startDate</code>
   *          and <code>endDate</code>. For example, a metric of <code>five_minutes</code> is the median of all
   *          the data points gathered within those five minutes. <code>p50</code> is the only supported metric.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * <p>The aggregation period used for the data query.</p>
   * @public
   */
  Period?: PeriodType | undefined;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataRequest {
  /**
   * <p>A list of network performance data queries.</p>
   * @public
   */
  DataQueries?: DataQuery[] | undefined;

  /**
   * <p>The starting time for the performance data request. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The ending time for the performance data request. The end time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Indicates whether the network was healthy or degraded at a particular point. The value is aggregated from the <code>startDate</code> to the <code>endDate</code>. Currently only <code>five_minutes</code> is supported.</p>
 * @public
 */
export interface MetricPoint {
  /**
   * <p>The start date for the metric point. The starting date for the metric point. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The end date for the metric point. The ending time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   * @public
   */
  EndDate?: Date | undefined;

  Value?: number | undefined;
  /**
   * <p>The status of the metric point.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>The response to a <code>DataQuery</code>.</p>
 * @public
 */
export interface DataResponse {
  /**
   * <p>The ID passed in the <code>DataQuery</code>.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the destination for the data query. For example, <code>eu-west-1</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the network performance request.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The statistic used for the network performance request.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * <p>The period used for the network performance request.</p>
   * @public
   */
  Period?: PeriodType | undefined;

  /**
   * <p>A list of <code>MetricPoint</code> objects.</p>
   * @public
   */
  MetricPoints?: MetricPoint[] | undefined;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataResult {
  /**
   * <p>The list of data responses.</p>
   * @public
   */
  DataResponses?: DataResponse[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 * @public
 */
export interface InstanceUsage {
  /**
   * <p>The ID of the Amazon Web Services account that is making use of the Capacity
   * 			Reservation.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The number of instances the Amazon Web Services account currently has in the Capacity
   * 			Reservation.</p>
   * @public
   */
  UsedInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the
   * 			Capacity Reservation.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of
   * 			the following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The capacity is available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time
   * 		specified in your reservation request. The reserved capacity is no longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation was canceled. The reserved capacity is no
   * 		longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
   * 		provisioning is still pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation request has failed. A request can fail due to
   * 		request parameters that are not valid, capacity constraints, or instance limit constraints. You
   * 		can view a failed request for 60 minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scheduled</code> - (<i>Future-dated Capacity Reservations</i>) The
   * 		future-dated Capacity Reservation request was approved and the Capacity Reservation is scheduled
   * 		for delivery on the requested start date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-pending</code> - (<i>Capacity Blocks</i>) The upfront
   * 	    payment has not been processed yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-failed</code> - (<i>Capacity Blocks</i>) The upfront
   * 	    payment was not processed in the 12-hour time frame. Your Capacity Block was released.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>assessing</code> - (<i>Future-dated Capacity Reservations</i>)
   * 		Amazon EC2 is assessing your request for a future-dated Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delayed</code> - (<i>Future-dated Capacity Reservations</i>) Amazon EC2
   * 		encountered a delay in provisioning the requested future-dated Capacity Reservation. Amazon EC2 is
   * 		unable to deliver the requested capacity by the requested start date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unsupported</code> - (<i>Future-dated Capacity Reservations</i>) Amazon EC2
   * 		can't support the future-dated Capacity Reservation request due to capacity constraints. You can view
   * 		unsupported requests for 30 days. The Capacity Reservation will not be delivered.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: CapacityReservationState | undefined;

  /**
   * <p>Information about the Capacity Reservation usage.</p>
   * @public
   */
  InstanceUsages?: InstanceUsage[] | undefined;
}

/**
 * @public
 */
export interface GetCoipPoolUsageRequest {
  /**
   * <p>The ID of the address pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.allocation-id</code> - The allocation ID of the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-account-id</code> - The ID of the Amazon Web Services account that is using the customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-service</code> - The Amazon Web Services service that is using the customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.co-ip</code> - The customer-owned IP address.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes address usage for a customer-owned address pool.</p>
 * @public
 */
export interface CoipAddressUsage {
  /**
   * <p>The allocation ID of the address.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services service.</p>
   * @public
   */
  AwsService?: string | undefined;

  /**
   * <p>The customer-owned IP address.</p>
   * @public
   */
  CoIp?: string | undefined;
}

/**
 * @public
 */
export interface GetCoipPoolUsageResult {
  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * <p>Information about the address usage.</p>
   * @public
   */
  CoipAddressUsages?: CoipAddressUsage[] | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConsoleOutputRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *          <p>Default: disabled (<code>false</code>)</p>
   * @public
   */
  Latest?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConsoleOutputResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The time at which the output was last updated.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   * @public
   */
  Output?: string | undefined;
}

/**
 * @public
 */
export interface GetConsoleScreenshotRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>When set to <code>true</code>, acts as keystroke input and wakes up an instance that's
   *             in standby or "sleep" mode.</p>
   * @public
   */
  WakeUp?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConsoleScreenshotResult {
  /**
   * <p>The data that comprises the image.</p>
   * @public
   */
  ImageData?: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 */
export interface GetDeclarativePoliciesReportSummaryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId: string | undefined;
}

/**
 * <p>A summary report for the attribute for a Region.</p>
 * @public
 */
export interface RegionalSummary {
  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The number of accounts in the Region with the same configuration value for the
   *             attribute that is most frequently observed.</p>
   * @public
   */
  NumberOfMatchedAccounts?: number | undefined;

  /**
   * <p>The number of accounts in the Region with a configuration value different from the
   *             most frequently observed value for the attribute.</p>
   * @public
   */
  NumberOfUnmatchedAccounts?: number | undefined;
}

/**
 * <p>A summary report for the attribute across all Regions.</p>
 * @public
 */
export interface AttributeSummary {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The configuration value that is most frequently observed for the attribute.</p>
   * @public
   */
  MostFrequentValue?: string | undefined;

  /**
   * <p>The number of accounts with the same configuration value for the attribute that is
   *             most frequently observed.</p>
   * @public
   */
  NumberOfMatchedAccounts?: number | undefined;

  /**
   * <p>The number of accounts with a configuration value different from the most frequently
   *             observed value for the attribute.</p>
   * @public
   */
  NumberOfUnmatchedAccounts?: number | undefined;

  /**
   * <p>The summary report for each Region for the attribute.</p>
   * @public
   */
  RegionalSummaries?: RegionalSummary[] | undefined;
}

/**
 * @public
 */
export interface GetDeclarativePoliciesReportSummaryResult {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where the report is located.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The prefix for your S3 object.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>The root ID, organizational unit ID, or account ID.</p>
   *          <p>Format:</p>
   *          <ul>
   *             <li>
   *                <p>For root: <code>r-ab12</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For OU: <code>ou-ab12-cdef1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For account: <code>123456789012</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The time when the report generation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when the report generation ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The total number of accounts associated with the specified
   *             <code>targetId</code>.</p>
   * @public
   */
  NumberOfAccounts?: number | undefined;

  /**
   * <p>The number of accounts where attributes could not be retrieved in any Region.</p>
   * @public
   */
  NumberOfFailedAccounts?: number | undefined;

  /**
   * <p>The attributes described in the report.</p>
   * @public
   */
  AttributeSummaries?: AttributeSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UnlimitedSupportedInstanceFamily = {
  t2: "t2",
  t3: "t3",
  t3a: "t3a",
  t4g: "t4g",
} as const;

/**
 * @public
 */
export type UnlimitedSupportedInstanceFamily =
  (typeof UnlimitedSupportedInstanceFamily)[keyof typeof UnlimitedSupportedInstanceFamily];

/**
 * @public
 */
export interface GetDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The instance family.</p>
   * @public
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | undefined;
}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance
 *             family.</p>
 * @public
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * <p>The instance family.</p>
   * @public
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | undefined;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface GetDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   * @public
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification | undefined;
}

/**
 * @public
 */
export interface GetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;
}

/**
 * @public
 * @enum
 */
export const PartitionLoadFrequency = {
  DAILY: "daily",
  MONTHLY: "monthly",
  NONE: "none",
  WEEKLY: "weekly",
} as const;

/**
 * @public
 */
export type PartitionLoadFrequency = (typeof PartitionLoadFrequency)[keyof typeof PartitionLoadFrequency];

/**
 * <p>Describes integration options for Amazon Athena.</p>
 * @public
 */
export interface AthenaIntegration {
  /**
   * <p>The location in Amazon S3 to store the generated CloudFormation template.</p>
   * @public
   */
  IntegrationResultS3DestinationArn: string | undefined;

  /**
   * <p>The schedule for adding new partitions to the table.</p>
   * @public
   */
  PartitionLoadFrequency: PartitionLoadFrequency | undefined;

  /**
   * <p>The start date for the partition.</p>
   * @public
   */
  PartitionStartDate?: Date | undefined;

  /**
   * <p>The end date for the partition.</p>
   * @public
   */
  PartitionEndDate?: Date | undefined;
}

/**
 * <p>Describes service integrations with VPC Flow logs.</p>
 * @public
 */
export interface IntegrateServices {
  /**
   * <p>Information about the integration with Amazon Athena.</p>
   * @public
   */
  AthenaIntegrations?: AthenaIntegration[] | undefined;
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the flow log.</p>
   * @public
   */
  FlowLogId: string | undefined;

  /**
   * <p>To store the CloudFormation template in Amazon S3, specify the location in Amazon S3.</p>
   * @public
   */
  ConfigDeliveryS3DestinationArn: string | undefined;

  /**
   * <p>Information about the service integration.</p>
   * @public
   */
  IntegrateServices: IntegrateServices | undefined;
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateResult {
  /**
   * <p>The generated CloudFormation template.</p>
   * @public
   */
  Result?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation. If you specify a Capacity Reservation that is
   * 			shared with you, the operation returns only Capacity Reservation groups that you
   * 			own.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a resource group to which a Capacity Reservation has been added.</p>
 * @public
 */
export interface CapacityReservationGroup {
  /**
   * <p>The ARN of the resource group.</p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource group.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the resource groups to which the Capacity Reservation has been
   * 			added.</p>
   * @public
   */
  CapacityReservationGroups?: CapacityReservationGroup[] | undefined;
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewRequest {
  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation is associated.</p>
   * @public
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The offering ID of the reservation.</p>
   * @public
   */
  OfferingId: string | undefined;
}

/**
 * <p>Describes the result of the purchase.</p>
 * @public
 */
export interface Purchase {
  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   * @public
   */
  HostIdSet?: string[] | undefined;

  /**
   * <p>The ID of the reservation.</p>
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The payment option for the reservation.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The upfront price of the reservation.</p>
   * @public
   */
  UpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewResult {
  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   * @public
   */
  Purchase?: Purchase[] | undefined;

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   * @public
   */
  TotalHourlyPrice?: string | undefined;

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   * @public
   */
  TotalUpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface GetImageBlockPublicAccessStateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetImageBlockPublicAccessStateResult {
  /**
   * <p>The current state of block public access for AMIs at the account level in the specified
   *       Amazon Web Services Region.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>block-new-sharing</code> - Any attempt to publicly share your AMIs in the
   *           specified Region is blocked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unblocked</code> - Your AMIs in the specified Region can be publicly
   *           shared.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ImageBlockPublicAccessState?: string | undefined;

  /**
   * <p>The entity that manages the state for block public access for AMIs. Possible values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> -  The state is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The state is managed by a declarative policy and
   *             can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>The default instance metadata service (IMDS) settings that were set at the account
 *             level in the specified Amazon Web Services  Region.</p>
 * @public
 */
export interface InstanceMetadataDefaultsResponse {
  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> – IMDSv2 is optional, which means that you can
   *                     use either IMDSv2 or IMDSv1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> – IMDSv2 is required, which means that IMDSv1 is
   *                     disabled, and you must use IMDSv2.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel.</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Indicates whether the IMDS endpoint for an instance is enabled or disabled. When disabled, the instance
   *             metadata can't be accessed.</p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;

  /**
   * <p>The entity that manages the IMDS default settings. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - The IMDS default settings are managed by the
   *             account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The IMDS default settings are managed
   *             by a declarative policy and can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;

  /**
   * <p>The customized exception message that is specified in the declarative policy.</p>
   * @public
   */
  ManagedExceptionMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsResult {
  /**
   * <p>The account-level default IMDS settings.</p>
   * @public
   */
  AccountLevel?: InstanceMetadataDefaultsResponse | undefined;
}

/**
 * @public
 * @enum
 */
export const EkPubKeyFormat = {
  der: "der",
  tpmt: "tpmt",
} as const;

/**
 * @public
 */
export type EkPubKeyFormat = (typeof EkPubKeyFormat)[keyof typeof EkPubKeyFormat];

/**
 * @public
 * @enum
 */
export const EkPubKeyType = {
  ECC_SEC_P384: "ecc-sec-p384",
  RSA_2048: "rsa-2048",
} as const;

/**
 * @public
 */
export type EkPubKeyType = (typeof EkPubKeyType)[keyof typeof EkPubKeyType];

/**
 * @public
 */
export interface GetInstanceTpmEkPubRequest {
  /**
   * <p>The ID of the instance for which to get the public endorsement key.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The required public endorsement key type.</p>
   * @public
   */
  KeyType: EkPubKeyType | undefined;

  /**
   * <p>The required public endorsement key format. Specify <code>der</code> for a DER-encoded public
   *             key that is compatible with OpenSSL. Specify <code>tpmt</code> for a TPM 2.0 format that is
   *             compatible with tpm2-tools. The returned key is base64 encoded.</p>
   * @public
   */
  KeyFormat: EkPubKeyFormat | undefined;

  /**
   * <p>Specify this parameter to verify whether the request will succeed, without actually making the
   *             request. If the request will succeed, the response is <code>DryRunOperation</code>. Otherwise,
   *             the response is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetInstanceTpmEkPubResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The public endorsement key type.</p>
   * @public
   */
  KeyType?: EkPubKeyType | undefined;

  /**
   * <p>The public endorsement key format.</p>
   * @public
   */
  KeyFormat?: EkPubKeyFormat | undefined;

  /**
   * <p>The public endorsement key material.</p>
   * @public
   */
  KeyValue?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The processor architecture type.</p>
   * @public
   */
  ArchitectureTypes: ArchitectureType[] | undefined;

  /**
   * <p>The virtualization type.</p>
   * @public
   */
  VirtualizationTypes: VirtualizationType[] | undefined;

  /**
   * <p>The attributes required for the instance types.</p>
   * @public
   */
  InstanceRequirements: InstanceRequirementsRequest | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The list of instance types with the specified instance attributes.</p>
 * @public
 */
export interface InstanceTypeInfoFromInstanceRequirements {
  /**
   * <p>The matching instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsResult {
  /**
   * <p>The instance types with the specified instance attributes.</p>
   * @public
   */
  InstanceTypes?: InstanceTypeInfoFromInstanceRequirements[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceUefiDataRequest {
  /**
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetInstanceUefiDataResult {
  /**
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store.</p>
   * @public
   */
  UefiData?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The CIDR you want the history of. The CIDR can be an IPv4 or IPv6 IP address range.
   *          If you enter a /16 IPv4 CIDR, you will get records that match it exactly. You will not get records for any subnets within the /16 CIDR.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The ID of the IPAM scope that the CIDR is in.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The ID of the VPC you want your history records filtered by.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The maximum number of historical results you would like returned per page. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamComplianceStatus = {
  compliant: "compliant",
  ignored: "ignored",
  noncompliant: "noncompliant",
  unmanaged: "unmanaged",
} as const;

/**
 * @public
 */
export type IpamComplianceStatus = (typeof IpamComplianceStatus)[keyof typeof IpamComplianceStatus];

/**
 * @public
 * @enum
 */
export const IpamOverlapStatus = {
  ignored: "ignored",
  nonoverlapping: "nonoverlapping",
  overlapping: "overlapping",
} as const;

/**
 * @public
 */
export type IpamOverlapStatus = (typeof IpamOverlapStatus)[keyof typeof IpamOverlapStatus];

/**
 * @public
 * @enum
 */
export const IpamAddressHistoryResourceType = {
  eip: "eip",
  instance: "instance",
  network_interface: "network-interface",
  subnet: "subnet",
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type IpamAddressHistoryResourceType =
  (typeof IpamAddressHistoryResourceType)[keyof typeof IpamAddressHistoryResourceType];

/**
 * <p>The historical record of a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @public
 */
export interface IpamAddressHistoryRecord {
  /**
   * <p>The ID of the resource owner.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: IpamAddressHistoryResourceType | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The CIDR of the resource.</p>
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The compliance status of a resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ResourceComplianceStatus?: IpamComplianceStatus | undefined;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ResourceOverlapStatus?: IpamOverlapStatus | undefined;

  /**
   * <p>The VPC ID of the resource.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.</p>
   * @public
   */
  SampledStartTime?: Date | undefined;

  /**
   * <p>Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.</p>
   * @public
   */
  SampledEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryResult {
  /**
   * <p>A historical record for a CIDR within an IPAM scope. If the CIDR is associated with an EC2 instance, you will see an object in the response for the instance and one for the network interface.</p>
   * @public
   */
  HistoryRecords?: IpamAddressHistoryRecord[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>The Amazon Web Services Region that the account information is returned from.</p>
   * @public
   */
  DiscoveryRegion: string | undefined;

  /**
   * <p>Discovered account filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of discovered accounts to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamDiscoveryFailureCode = {
  assume_role_failure: "assume-role-failure",
  throttling_failure: "throttling-failure",
  unauthorized_failure: "unauthorized-failure",
} as const;

/**
 * @public
 */
export type IpamDiscoveryFailureCode = (typeof IpamDiscoveryFailureCode)[keyof typeof IpamDiscoveryFailureCode];

/**
 * <p>The discovery failure reason.</p>
 * @public
 */
export interface IpamDiscoveryFailureReason {
  /**
   * <p>The discovery failure code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>assume-role-failure</code> - IPAM could not assume the Amazon Web Services IAM service-linked role. This could be because of any of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>SLR has not been created yet and IPAM is still creating it.</p>
   *                   </li>
   *                   <li>
   *                      <p>You have opted-out of the IPAM home Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Account you are using as your IPAM account has been suspended.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throttling-failure</code> - IPAM account is already using the allotted transactions per second and IPAM is receiving a throttling error when assuming the Amazon Web Services IAM SLR.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unauthorized-failure</code> - Amazon Web Services account making the request is not authorized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">AuthFailure</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Code?: IpamDiscoveryFailureCode | undefined;

  /**
   * <p>The discovery failure message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>An IPAM discovered account. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts.</p>
 * @public
 */
export interface IpamDiscoveredAccount {
  /**
   * <p>The account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region that the account information is returned from.
   *          An account can be discovered in multiple regions and will have a separate discovered account for each Region.</p>
   * @public
   */
  DiscoveryRegion?: string | undefined;

  /**
   * <p>The resource discovery failure reason.</p>
   * @public
   */
  FailureReason?: IpamDiscoveryFailureReason | undefined;

  /**
   * <p>The last attempted resource discovery time.</p>
   * @public
   */
  LastAttemptedDiscoveryTime?: Date | undefined;

  /**
   * <p>The last successful resource discovery time.</p>
   * @public
   */
  LastSuccessfulDiscoveryTime?: Date | undefined;

  /**
   * <p>The ID of an Organizational Unit in Amazon Web Services Organizations.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsResult {
  /**
   * <p>Discovered accounts.</p>
   * @public
   */
  IpamDiscoveredAccounts?: IpamDiscoveredAccount[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredPublicAddressesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>An IPAM resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the IP address.</p>
   * @public
   */
  AddressRegion: string | undefined;

  /**
   * <p>Filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of IPAM discovered public addresses to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPublicAddressType = {
  AMAZON_OWNED_CONTIG: "amazon-owned-contig",
  AMAZON_OWNED_EIP: "amazon-owned-eip",
  BYOIP: "byoip",
  EC2_PUBLIC_IP: "ec2-public-ip",
  SERVICE_MANAGED_BYOIP: "service-managed-byoip",
  SERVICE_MANAGED_IP: "service-managed-ip",
} as const;

/**
 * @public
 */
export type IpamPublicAddressType = (typeof IpamPublicAddressType)[keyof typeof IpamPublicAddressType];

/**
 * @public
 * @enum
 */
export const IpamPublicAddressAssociationStatus = {
  ASSOCIATED: "associated",
  DISASSOCIATED: "disassociated",
} as const;

/**
 * @public
 */
export type IpamPublicAddressAssociationStatus =
  (typeof IpamPublicAddressAssociationStatus)[keyof typeof IpamPublicAddressAssociationStatus];

/**
 * <p>The security group that the resource with the public IP address is in.</p>
 * @public
 */
export interface IpamPublicAddressSecurityGroup {
  /**
   * <p>The security group's name.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The security group's ID.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPublicAddressAwsService = {
  AGA: "global-accelerator",
  DMS: "database-migration-service",
  EC2_LB: "load-balancer",
  ECS: "elastic-container-service",
  NAT_GATEWAY: "nat-gateway",
  OTHER: "other",
  RDS: "relational-database-service",
  REDSHIFT: "redshift",
  S2S_VPN: "site-to-site-vpn",
} as const;

/**
 * @public
 */
export type IpamPublicAddressAwsService =
  (typeof IpamPublicAddressAwsService)[keyof typeof IpamPublicAddressAwsService];

/**
 * <p>A tag for a public IP address discovered by IPAM.</p>
 * @public
 */
export interface IpamPublicAddressTag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Tags for a public IP address discovered by IPAM.</p>
 * @public
 */
export interface IpamPublicAddressTags {
  /**
   * <p>Tags for an Elastic IP address.</p>
   * @public
   */
  EipTags?: IpamPublicAddressTag[] | undefined;
}

/**
 * <p>A public IP Address discovered by IPAM.</p>
 * @public
 */
export interface IpamDiscoveredPublicAddress {
  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The Region of the resource the IP address is assigned to.</p>
   * @public
   */
  AddressRegion?: string | undefined;

  /**
   * <p>The IP address.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The ID of the owner of the resource the IP address is assigned to.</p>
   * @public
   */
  AddressOwnerId?: string | undefined;

  /**
   * <p>The allocation ID of the resource the IP address is assigned to.</p>
   * @public
   */
  AddressAllocationId?: string | undefined;

  /**
   * <p>The association status.</p>
   * @public
   */
  AssociationStatus?: IpamPublicAddressAssociationStatus | undefined;

  /**
   * <p>The IP address type.</p>
   * @public
   */
  AddressType?: IpamPublicAddressType | undefined;

  /**
   * <p>The Amazon Web Services service associated with the IP address.</p>
   * @public
   */
  Service?: IpamPublicAddressAwsService | undefined;

  /**
   * <p>The resource ARN or ID.</p>
   * @public
   */
  ServiceResource?: string | undefined;

  /**
   * <p>The ID of the VPC that the resource with the assigned IP address is in.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the subnet that the resource with the assigned IP address is in.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the public IPv4 pool that the resource with the assigned IP address is from.</p>
   * @public
   */
  PublicIpv4PoolId?: string | undefined;

  /**
   * <p>The network interface ID of the resource with the assigned IP address.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The description of the network interface that IP address is assigned to.</p>
   * @public
   */
  NetworkInterfaceDescription?: string | undefined;

  /**
   * <p>The instance ID of the instance the assigned IP address is assigned to.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Tags associated with the IP address.</p>
   * @public
   */
  Tags?: IpamPublicAddressTags | undefined;

  /**
   * <p>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">Local Zone availability</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>Security groups associated with the resource that the IP address is assigned to.</p>
   * @public
   */
  SecurityGroups?: IpamPublicAddressSecurityGroup[] | undefined;

  /**
   * <p>The last successful resource discovery time.</p>
   * @public
   */
  SampleTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredPublicAddressesResult {
  /**
   * <p>IPAM discovered public addresses.</p>
   * @public
   */
  IpamDiscoveredPublicAddresses?: IpamDiscoveredPublicAddress[] | undefined;

  /**
   * <p>The oldest successful resource discovery time.</p>
   * @public
   */
  OldestSampleTime?: Date | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>A resource Region.</p>
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * <p>Filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of discovered resource CIDRs to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamResourceCidrIpSource = {
  amazon: "amazon",
  byoip: "byoip",
  none: "none",
} as const;

/**
 * @public
 */
export type IpamResourceCidrIpSource = (typeof IpamResourceCidrIpSource)[keyof typeof IpamResourceCidrIpSource];

/**
 * @public
 * @enum
 */
export const IpamNetworkInterfaceAttachmentStatus = {
  available: "available",
  in_use: "in-use",
} as const;

/**
 * @public
 */
export type IpamNetworkInterfaceAttachmentStatus =
  (typeof IpamNetworkInterfaceAttachmentStatus)[keyof typeof IpamNetworkInterfaceAttachmentStatus];

/**
 * @public
 * @enum
 */
export const IpamResourceType = {
  eip: "eip",
  eni: "eni",
  ipv6_pool: "ipv6-pool",
  public_ipv4_pool: "public-ipv4-pool",
  subnet: "subnet",
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type IpamResourceType = (typeof IpamResourceType)[keyof typeof IpamResourceType];

/**
 * <p>An IPAM discovered resource CIDR. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. The discovered resource CIDR is the IP address range in CIDR notation that is associated with the resource.</p>
 * @public
 */
export interface IpamDiscoveredResourceCidr {
  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The resource Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource owner ID.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The resource CIDR.</p>
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * <p>The source that allocated the IP address space. <code>byoip</code> or <code>amazon</code> indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). <code>none</code> indicates private space.</p>
   * @public
   */
  IpSource?: IpamResourceCidrIpSource | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The resource tags.</p>
   * @public
   */
  ResourceTags?: IpamResourceTag[] | undefined;

  /**
   * <p>The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).
   *          </p>
   *             </li>
   *          </ul>
   * @public
   */
  IpUsage?: number | undefined;

  /**
   * <p>The VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The subnet ID.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>For elastic network interfaces, this is the status of whether or not the elastic network interface is attached.</p>
   * @public
   */
  NetworkInterfaceAttachmentStatus?: IpamNetworkInterfaceAttachmentStatus | undefined;

  /**
   * <p>The last successful resource discovery time.</p>
   * @public
   */
  SampleTime?: Date | undefined;

  /**
   * <p>The Availability Zone ID.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsResult {
  /**
   * <p>Discovered resource CIDRs.</p>
   * @public
   */
  IpamDiscoveredResourceCidrs?: IpamDiscoveredResourceCidr[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolAllocationsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you want to see the allocations for.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The ID of the allocation.</p>
   * @public
   */
  IpamPoolAllocationId?: string | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results you would like returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolAllocationsResult {
  /**
   * <p>The IPAM pool allocations you want information on.</p>
   * @public
   */
  IpamPoolAllocations?: IpamPoolAllocation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you want the CIDR for.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolCidrsResult {
  /**
   * <p>Information about the CIDRs provisioned to an IPAM pool.</p>
   * @public
   */
  IpamPoolCidrs?: IpamPoolCidr[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the scope that the resource is in.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The ID of the IPAM pool that the resource is in.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The resource tag.</p>
   * @public
   */
  ResourceTag?: RequestIpamResourceTag | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamManagementState = {
  ignored: "ignored",
  managed: "managed",
  unmanaged: "unmanaged",
} as const;

/**
 * @public
 */
export type IpamManagementState = (typeof IpamManagementState)[keyof typeof IpamManagementState];

/**
 * <p>The CIDR for an IPAM resource.</p>
 * @public
 */
export interface IpamResourceCidr {
  /**
   * <p>The IPAM ID for an IPAM resource.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The scope ID for an IPAM resource.</p>
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * <p>The pool ID for an IPAM resource.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for an IPAM resource.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The Amazon Web Services account number of the owner of an IPAM resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The ID of an IPAM resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The name of an IPAM resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The CIDR for an IPAM resource.</p>
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * <p>The type of IPAM resource.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The tags for an IPAM resource.</p>
   * @public
   */
  ResourceTags?: IpamResourceTag[] | undefined;

  /**
   * <p>The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).
   *          </p>
   *             </li>
   *          </ul>
   * @public
   */
  IpUsage?: number | undefined;

  /**
   * <p>The compliance status of the IPAM resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ComplianceStatus?: IpamComplianceStatus | undefined;

  /**
   * <p>The management state of the resource. For more information about management states, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ManagementState?: IpamManagementState | undefined;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  OverlapStatus?: IpamOverlapStatus | undefined;

  /**
   * <p>The ID of a VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Availability Zone ID.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The resource CIDRs.</p>
   * @public
   */
  IpamResourceCidrs?: IpamResourceCidr[] | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataResult {
  /**
   * <p>The instance data.</p>
   * @public
   */
  LaunchTemplateData?: ResponseLaunchTemplateData | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the resource with which a prefix list is associated.</p>
 * @public
 */
export interface PrefixListAssociation {
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The owner of the resource.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  PrefixListAssociations?: PrefixListAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The version of the prefix list for which to return the entries. The default is the current version.</p>
   * @public
   */
  TargetVersion?: number | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a prefix list entry.</p>
 * @public
 */
export interface PrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesResult {
  /**
   * <p>Information about the prefix list entries.</p>
   * @public
   */
  Entries?: PrefixListEntry[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsRequest {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsResult {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * <p>The status of Network Access Scope Analysis.</p>
   * @public
   */
  AnalysisStatus?: AnalysisStatus | undefined;

  /**
   * <p>The findings associated with Network Access Scope Analysis.</p>
   * @public
   */
  AnalysisFindings?: AccessScopeAnalysisFinding[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentRequest {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentResult {
  /**
   * <p>The Network Access Scope content.</p>
   * @public
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent | undefined;
}

/**
 * @public
 */
export interface GetPasswordDataRequest {
  /**
   * <p>The ID of the Windows instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetPasswordDataResult {
  /**
   * <p>The ID of the Windows instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The time the data was last updated.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   * @public
   */
  PasswordData?: string | undefined;
}

/**
 * <p>Contains the parameters for GetReservedInstanceExchangeQuote.</p>
 * @public
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   * @public
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   * @public
   */
  TargetConfigurations?: TargetConfigurationRequest[] | undefined;
}

/**
 * <p>The cost associated with the Reserved Instance.</p>
 * @public
 */
export interface ReservationValue {
  /**
   * <p>The hourly rate of the reservation.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   * @public
   */
  RemainingTotalValue?: string | undefined;

  /**
   * <p>The remaining upfront cost of the reservation.</p>
   * @public
   */
  RemainingUpfrontValue?: string | undefined;
}

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 * @public
 */
export interface ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   * @public
   */
  ReservationValue?: ReservationValue | undefined;

  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   * @public
   */
  ReservedInstanceId?: string | undefined;
}

/**
 * <p>Information about the Convertible Reserved Instance offering.</p>
 * @public
 */
export interface TargetConfiguration {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is
   *       reserved and cannot be specified in a request</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * <p>The total value of the new Convertible Reserved Instances.</p>
 * @public
 */
export interface TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of
   *       the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   * @public
   */
  ReservationValue?: ReservationValue | undefined;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;
}

/**
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 * @public
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * <p>The currency of the transaction.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   * @public
   */
  IsValidExchange?: boolean | undefined;

  /**
   * <p>The new end date of the reservation term.</p>
   * @public
   */
  OutputReservedInstancesWillExpireAt?: Date | undefined;

  /**
   * <p>The total true upfront charge for the exchange.</p>
   * @public
   */
  PaymentDue?: string | undefined;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   * @public
   */
  ReservedInstanceValueRollup?: ReservationValue | undefined;

  /**
   * <p>The configuration of your Convertible Reserved Instances.</p>
   * @public
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[] | undefined;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   * @public
   */
  TargetConfigurationValueRollup?: ReservationValue | undefined;

  /**
   * <p>The values of the target Convertible Reserved Instances.</p>
   * @public
   */
  TargetConfigurationValueSet?: TargetReservationValue[] | undefined;

  /**
   * <p>Describes the reason why the exchange cannot be completed.</p>
   * @public
   */
  ValidationFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcRequest {
  /**
   * <p>The VPC ID where the security group can be used.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filters. If using multiple filters, the results include security groups which match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code>: The security group ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code>: The security group's description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code>: The security group name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The security group owner ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>primary-vpc-id</code>: The VPC ID in which the security group was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>A security group that can be used by interfaces in the VPC.</p>
 * @public
 */
export interface SecurityGroupForVpc {
  /**
   * <p>The security group's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The security group name.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The security group owner ID.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The security group tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The VPC ID in which the security group was created.</p>
   * @public
   */
  PrimaryVpcId?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The security group that can be used by interfaces in the VPC.</p>
   * @public
   */
  SecurityGroupForVpcs?: SecurityGroupForVpc[] | undefined;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;

  /**
   * <p>The entity that manages access to the serial console. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - Access is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - Access is managed by a declarative policy and can't
   *             be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockPublicAccessStateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockPublicAccessStateResult {
  /**
   * <p>The current state of block public access for snapshots. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>block-all-sharing</code> - All public sharing of snapshots is blocked. Users in
   *           the account can't request new public sharing. Additionally, snapshots that were already
   *           publicly shared are treated as private and are not publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-new-sharing</code>  - Only new public sharing of snapshots is blocked.
   *           Users in the account can't request new public sharing. However, snapshots that were
   *           already publicly shared, remain publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unblocked</code>  - Public sharing is not blocked. Users can publicly share
   *           snapshots.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;

  /**
   * <p>The entity that manages the state for block public access for snapshots. Possible
   *             values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - The state is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The state is managed by a declarative policy and
   *             can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * <p>The architecture type, virtualization type, and other attributes for the instance types.
 *          When you specify instance attributes, Amazon EC2 will identify instance types with those
 *          attributes.</p>
 *          <p>If you specify <code>InstanceRequirementsWithMetadataRequest</code>, you can't specify
 *          <code>InstanceTypes</code>.</p>
 * @public
 */
export interface InstanceRequirementsWithMetadataRequest {
  /**
   * <p>The architecture type.</p>
   * @public
   */
  ArchitectureTypes?: ArchitectureType[] | undefined;

  /**
   * <p>The virtualization type.</p>
   * @public
   */
  VirtualizationTypes?: VirtualizationType[] | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresRequest {
  /**
   * <p>The instance types. We recommend that you specify at least three instance types. If you
   *          specify one or two instance types, or specify variations of a single instance type (for
   *          example, an <code>m3.xlarge</code> with and without instance storage), the returned
   *          placement score will always be low. </p>
   *          <p>If you specify <code>InstanceTypes</code>, you can't specify
   *             <code>InstanceRequirementsWithMetadata</code>.</p>
   * @public
   */
  InstanceTypes?: string[] | undefined;

  /**
   * <p>The target capacity.</p>
   * @public
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The unit for the target capacity.</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;

  /**
   * <p>Specify <code>true</code> so that the response returns a list of scored Availability Zones.
   *          Otherwise, the response returns a list of scored Regions.</p>
   *          <p>A list of scored Availability Zones is useful if you want to launch all of your Spot
   *          capacity into a single Availability Zone.</p>
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * <p>The Regions used to narrow down the list of Regions to be scored. Enter the Region code,
   *          for example, <code>us-east-1</code>.</p>
   * @public
   */
  RegionNames?: string[] | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <p>If you specify <code>InstanceRequirementsWithMetadata</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   * @public
   */
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The Spot placement score for this Region or Availability Zone. The score is calculated
 *          based on the assumption that the <code>capacity-optimized</code> allocation strategy is
 *          used and that all of the Availability Zones in the Region can be used.</p>
 * @public
 */
export interface SpotPlacementScore {
  /**
   * <p>The Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The placement score, on a scale from <code>1</code> to <code>10</code>. A score of
   *             <code>10</code> indicates that your Spot request is highly likely to succeed in this
   *          Region or Availability Zone. A score of <code>1</code> indicates that your Spot request is
   *          not likely to succeed. </p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresResult {
  /**
   * <p>The Spot placement score for the top 10 Regions or Availability Zones, scored on a scale
   *          from 1 to 10. Each score  reflects how likely it is that each Region or Availability Zone
   *          will succeed at fulfilling the specified target capacity  <i>at the time of the Spot
   *             placement score request</i>. A score of <code>10</code> means that your Spot
   *          capacity request is highly likely to succeed in that Region or Availability Zone. </p>
   *          <p>If you request a Spot placement score for Regions, a high score assumes that your fleet
   *          request will be configured to use all Availability Zones and the
   *             <code>capacity-optimized</code> allocation strategy. If you request a Spot placement
   *          score for Availability Zones, a high score assumes that your fleet request will be
   *          configured to use a single Availability Zone and the <code>capacity-optimized</code>
   *          allocation strategy.</p>
   *          <p>Different  Regions or Availability Zones might return the same score.</p>
   *          <note>
   *             <p>The Spot placement score serves as a recommendation only. No score guarantees that your
   *             Spot request will be fully or partially fulfilled.</p>
   *          </note>
   * @public
   */
  SpotPlacementScores?: SpotPlacementScore[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reservationType</code> - The type of reservation (<code>prefix</code> |
   *                     <code>explicit</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsResult {
  /**
   * <p>Information about the IPv4 subnet CIDR reservations.</p>
   * @public
   */
  SubnetIpv4CidrReservations?: SubnetCidrReservation[] | undefined;

  /**
   * <p>Information about the IPv6 subnet CIDR reservations.</p>
   * @public
   */
  SubnetIpv6CidrReservations?: SubnetCidrReservation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a propagation route table.</p>
 * @public
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * <p>The ID of the propagation route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The state of the propagation route table.</p>
   * @public
   */
  State?: TransitGatewayPropagationState | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * <p>Information about the propagation route tables.</p>
   * @public
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The type of resource. The valid value is: <code>vpc</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the subnet association. Valid values are
   *                         <code>associated</code> | <code>associating</code> |
   *                         <code>disassociated</code> | <code>disassociating</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 * @public
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   * @public
   */
  Subnet?: SubnetAssociation | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   * @public
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsRequest {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsResult {
  /**
   * <p>Returns details about the transit gateway policy table association.</p>
   * @public
   */
  Associations?: TransitGatewayPolicyTableAssociation[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesRequest {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the meta data tags associated with a transit gateway policy rule.</p>
 * @public
 */
export interface TransitGatewayPolicyRuleMetaData {
  /**
   * <p>The key name for the transit gateway policy rule meta data tag.</p>
   * @public
   */
  MetaDataKey?: string | undefined;

  /**
   * <p>The value of the key for the transit gateway policy rule meta data tag.</p>
   * @public
   */
  MetaDataValue?: string | undefined;
}

/**
 * <p>Describes a rule associated with a transit gateway policy.</p>
 * @public
 */
export interface TransitGatewayPolicyRule {
  /**
   * <p>The source CIDR block for the transit gateway policy rule.</p>
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   * @public
   */
  SourcePortRange?: string | undefined;

  /**
   * <p>The destination CIDR block for the transit gateway policy rule.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   * @public
   */
  DestinationPortRange?: string | undefined;

  /**
   * <p>The protocol used by the transit gateway policy rule.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The meta data tags used for the transit gateway policy rule.</p>
   * @public
   */
  MetaData?: TransitGatewayPolicyRuleMetaData | undefined;
}

/**
 * <p>Describes a transit gateway policy table entry</p>
 * @public
 */
export interface TransitGatewayPolicyTableEntry {
  /**
   * <p>The rule number for the transit gateway policy table entry.</p>
   * @public
   */
  PolicyRuleNumber?: string | undefined;

  /**
   * <p>The policy rule associated with the transit gateway policy table.</p>
   * @public
   */
  PolicyRule?: TransitGatewayPolicyRule | undefined;

  /**
   * <p>The ID of the target route table.</p>
   * @public
   */
  TargetRouteTableId?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesResult {
  /**
   * <p>The entries for the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableEntries?: TransitGatewayPolicyTableEntry[] | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The ID of the resource for the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-type</code> - The type of resource for the
   *                     attachment. Valid values are <code>vpc</code> | <code>vpn</code> |
   *                         <code>direct-connect-gateway</code> | <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-blackhole</code> - Whether traffic matching the route is blocked (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-owner-id</code> - The ID of the owner of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the prefix list reference (<code>pending</code> | <code>available</code> | <code>modifying</code> | <code>deleting</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * <p>Information about the prefix list references.</p>
   * @public
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an association between a route table and a resource attachment.</p>
 * @public
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  Associations?: TransitGatewayRouteTableAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a route table propagation.</p>
 * @public
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The state of the resource.</p>
   * @public
   */
  State?: TransitGatewayPropagationState | undefined;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * <p>Information about the route table propagations.</p>
   * @public
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointTargetsRequest {
  /**
   * <p>The ID of the network CIDR endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the targets for the specified Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointTarget {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId?: string | undefined;

  /**
   * <p>The IP address of the target.</p>
   * @public
   */
  VerifiedAccessEndpointTargetIpAddress?: string | undefined;

  /**
   * <p>The DNS name of the target.</p>
   * @public
   */
  VerifiedAccessEndpointTargetDns?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointTargetsResult {
  /**
   * <p>The Verified Access targets.</p>
   * @public
   */
  VerifiedAccessEndpointTargets?: VerifiedAccessEndpointTarget[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessGroupPolicyRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessGroupPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceSampleConfigurationRequest {
  /**
   * <p>The <code>VpnConnectionId</code> specifies the Site-to-Site VPN connection used for the sample
   *             configuration.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>Device identifier provided by the <code>GetVpnConnectionDeviceTypes</code> API.</p>
   * @public
   */
  VpnConnectionDeviceTypeId: string | undefined;

  /**
   * <p>The IKE version to be used in the sample configuration file for your customer gateway
   *             device. You can specify one of the following versions: <code>ikev1</code> or
   *                 <code>ikev2</code>.</p>
   * @public
   */
  InternetKeyExchangeVersion?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceSampleConfigurationResult {
  /**
   * <p>Sample configuration file for the specified customer gateway device.</p>
   * @public
   */
  VpnConnectionDeviceSampleConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesRequest {
  /**
   * <p>The maximum number of results returned by <code>GetVpnConnectionDeviceTypes</code> in
   *             paginated output. When this parameter is used, <code>GetVpnConnectionDeviceTypes</code>
   *             only returns <code>MaxResults</code> results in a single page along with a
   *                 <code>NextToken</code> response element. The remaining results of the initial
   *             request can be seen by sending another <code>GetVpnConnectionDeviceTypes</code> request
   *             with the returned <code>NextToken</code> value. This value can be between 200 and 1000.
   *             If this parameter is not used, then <code>GetVpnConnectionDeviceTypes</code> returns all
   *             results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *                 <code>GetVpnConnectionDeviceTypes</code> request where <code>MaxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>NextToken</code> value. This value
   *             is null when there are no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>List of customer gateway devices that have a sample configuration file available for
 *             use. You can also see the list of device types with sample configuration files available
 *             under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer
 *                 gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 * @public
 */
export interface VpnConnectionDeviceType {
  /**
   * <p>Customer gateway device identifier.</p>
   * @public
   */
  VpnConnectionDeviceTypeId?: string | undefined;

  /**
   * <p>Customer gateway device vendor.</p>
   * @public
   */
  Vendor?: string | undefined;

  /**
   * <p>Customer gateway device platform.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>Customer gateway device software version.</p>
   * @public
   */
  Software?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesResult {
  /**
   * <p>List of customer gateway devices that have a sample configuration file available for
   *             use.</p>
   * @public
   */
  VpnConnectionDeviceTypes?: VpnConnectionDeviceType[] | undefined;

  /**
   * <p>The <code>NextToken</code> value to include in a future
   *                 <code>GetVpnConnectionDeviceTypes</code> request. When the results of a
   *                 <code>GetVpnConnectionDeviceTypes</code> request exceed <code>MaxResults</code>,
   *             this value can be used to retrieve the next page of results. This value is null when
   *             there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Details for Site-to-Site VPN tunnel endpoint maintenance events.</p>
 * @public
 */
export interface MaintenanceDetails {
  /**
   * <p>Verify existence of a pending maintenance.</p>
   * @public
   */
  PendingMaintenance?: string | undefined;

  /**
   * <p>The timestamp after which Amazon Web Services will automatically apply maintenance.</p>
   * @public
   */
  MaintenanceAutoAppliedAfter?: Date | undefined;

  /**
   * <p>Timestamp of last applied maintenance.</p>
   * @public
   */
  LastMaintenanceApplied?: Date | undefined;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusResult {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   * @public
   */
  VpnConnectionId?: string | undefined;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the customer gateway.</p>
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress?: string | undefined;

  /**
   * <p>Get details of pending tunnel endpoint maintenance.</p>
   * @public
   */
  MaintenanceDetails?: MaintenanceDetails | undefined;
}

/**
 * @public
 */
export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client certificate revocation list applies.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The client certificate revocation list file. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate">Generate a Client Certificate Revocation List</a> in the
   * 				<i>Client VPN Administrator Guide</i>.</p>
   * @public
   */
  CertificateRevocationList: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Describes the client-specific data.</p>
 * @public
 */
export interface ClientData {
  /**
   * <p>A user-defined comment about the disk upload.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The time that the disk upload ends.</p>
   * @public
   */
  UploadEnd?: Date | undefined;

  /**
   * <p>The size of the uploaded disk image, in GiB.</p>
   * @public
   */
  UploadSize?: number | undefined;

  /**
   * <p>The time that the disk upload starts.</p>
   * @public
   */
  UploadStart?: Date | undefined;
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 * @public
 */
export interface UserBucket {
  /**
   * <p>The name of the Amazon S3 bucket where the disk image is located.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The file name of the disk image.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Describes the disk container object for an import image task.</p>
 * @public
 */
export interface ImageDiskContainer {
  /**
   * <p>The description of the disk image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The block device mapping for the disk.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an
   *    Amazon S3 URL (s3://..)</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucket | undefined;
}

/**
 * <p>The request information of license configurations.</p>
 * @public
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * <p>The ARN of a license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportImageRequest {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code>
   *          </p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>The client-specific data.</p>
   * @public
   */
  ClientData?: ClientData | undefined;

  /**
   * <p>The token to enable idempotency for VM import requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A description string for the import image task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the disk containers.</p>
   * @public
   */
  DiskContainers?: ImageDiskContainer[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default KMS key for EBS is used
   *    unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The target hypervisor platform.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted AMI. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the AMI is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The license type to be used for the Amazon Machine Image (AMI) after importing.</p>
   *          <p>Specify <code>AWS</code> to replace the source-system license with an Amazon Web Services
   *    license or <code>BYOL</code> to retain the source-system license. Leaving this parameter
   *    undefined is the same as choosing <code>AWS</code> when importing a Windows Server operating
   *    system, and the same as choosing <code>BYOL</code> when importing a Windows client operating
   *    system (such as Windows 10) or a Linux operating system.</p>
   *          <p>To use <code>BYOL</code>, you must have existing licenses with rights to use these licenses in a third party
   *    cloud, such as Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image">Prerequisites</a> in the
   *    VM Import/Export User Guide.</p>
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * <p>The operating system of the virtual machine. If you import a VM that is compatible with
   *    Unified Extensible Firmware Interface (UEFI) using an EBS snapshot, you must specify a value for
   *    the platform.</p>
   *          <p>Valid values: <code>Windows</code> | <code>Linux</code>
   *          </p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The ARNs of the license configurations.</p>
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[] | undefined;

  /**
   * <p>The tags to apply to the import image task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The usage operation value. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#prerequisites">Licensing options</a> in the <i>VM Import/Export User Guide</i>.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>The boot mode of the virtual machine.</p>
   *          <note>
   *             <p>The <code>uefi-preferred</code> boot mode isn't supported for importing images. For more
   *     information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/prerequisites.html#vmimport-boot-modes">Boot modes</a> in
   *     the <i>VM Import/Export User Guide</i>.</p>
   *          </note>
   * @public
   */
  BootMode?: BootModeValues | undefined;
}

/**
 * @public
 */
export interface ImportImageResult {
  /**
   * <p>The architecture of the virtual machine.</p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>A description of the import task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the AMI is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The target hypervisor of the import task.</p>
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) created by the import task.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The task ID of the import image task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>The identifier for the symmetric KMS key that was used to create the encrypted AMI.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The license type of the virtual machine.</p>
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * <p>The operating system of the virtual machine.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The progress of the task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  SnapshotDetails?: SnapshotDetail[] | undefined;

  /**
   * <p>A brief status of the task.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status message of the import task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The ARNs of the license configurations.</p>
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[] | undefined;

  /**
   * <p>Any tags assigned to the import image task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The usage operation value.</p>
   * @public
   */
  UsageOperation?: string | undefined;
}

/**
 * <p>Describes a disk image.</p>
 * @public
 */
export interface DiskImageDetail {
  /**
   * <p>The disk image format.</p>
   * @public
   */
  Format: DiskImageFormat | undefined;

  /**
   * <p>The size of the disk image, in GiB.</p>
   * @public
   */
  Bytes: number | undefined;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL.
   *    For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication
   *    Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in the <i>Amazon Simple Storage Service Developer
   *     Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   * @public
   */
  ImportManifestUrl: string | undefined;
}

/**
 * <p>Describes an EBS volume.</p>
 * @public
 */
export interface VolumeDetail {
  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  Size: number | undefined;
}

/**
 * <p>Describes a disk image.</p>
 * @public
 */
export interface DiskImage {
  /**
   * <p>A description of the disk image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the disk image.</p>
   * @public
   */
  Image?: DiskImageDetail | undefined;

  /**
   * <p>Information about the volume.</p>
   * @public
   */
  Volume?: VolumeDetail | undefined;
}

/**
 * <p>Describes the user data for an instance.</p>
 * @public
 */
export interface UserData {
  /**
   * <p>The user data. If you are using an Amazon Web Services SDK or command line tool, Base64-encoding is performed for you, and you
   *    can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   * @public
   */
  Data?: string | undefined;
}

/**
 * <p>Describes the launch specification for VM import.</p>
 * @public
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * <p>The architecture of the instance.</p>
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * <p>The security group names.</p>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The security group IDs.</p>
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>The Base64-encoded user data to make available to the instance.</p>
   * @public
   */
  UserData?: UserData | undefined;

  /**
   * <p>The instance type. For more information about the instance types that you can import, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-instance-types">Instance Types</a> in the
   *    VM Import/Export User Guide.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The placement information for the instance.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>Indicates whether monitoring is enabled.</p>
   * @public
   */
  Monitoring?: boolean | undefined;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which to launch the instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the
   *    operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>[EC2-VPC] An available IP address from the IP address range of the subnet.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface ImportInstanceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A description for the instance being imported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The launch specification.</p>
   * @public
   */
  LaunchSpecification?: ImportInstanceLaunchSpecification | undefined;

  /**
   * <p>The disk image.</p>
   * @public
   */
  DiskImages?: DiskImage[] | undefined;

  /**
   * <p>The instance operating system.</p>
   * @public
   */
  Platform: PlatformValues | undefined;
}

/**
 * @public
 */
export interface ImportInstanceResult {
  /**
   * <p>Information about the conversion task.</p>
   * @public
   */
  ConversionTask?: ConversionTask | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairRequest {
  /**
   * <p>The tags to apply to the imported key pair.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique name for the key pair.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>The public key.</p>
   * @public
   */
  PublicKeyMaterial: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairResult {
  /**
   * <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC 4716.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyFingerprint?: string | undefined;

  /**
   * <p>The key pair name that you provided.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The ID of the resulting key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * <p>The tags applied to the imported key pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The disk container object for the import snapshot request.</p>
 * @public
 */
export interface SnapshotDiskContainer {
  /**
   * <p>The description of the disk image being imported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>VHD</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon
   *    S3 URL (s3://..).</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucket | undefined;
}

/**
 * @public
 */
export interface ImportSnapshotRequest {
  /**
   * <p>The client-specific data.</p>
   * @public
   */
  ClientData?: ClientData | undefined;

  /**
   * <p>Token to enable idempotency for VM import requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The description string for the import snapshot task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the disk container.</p>
   * @public
   */
  DiskContainer?: SnapshotDiskContainer | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is
   *    used unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the snapshot is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The tags to apply to the import snapshot task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface ImportSnapshotResult {
  /**
   * <p>A description of the import snapshot task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the import snapshot task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>Information about the import snapshot task.</p>
   * @public
   */
  SnapshotTaskDetail?: SnapshotTaskDetail | undefined;

  /**
   * <p>Any tags assigned to the import snapshot task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportVolumeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Availability Zone for the resulting EBS volume.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The disk image.</p>
   * @public
   */
  Image: DiskImageDetail | undefined;

  /**
   * <p>A description of the volume.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The volume size.</p>
   * @public
   */
  Volume: VolumeDetail | undefined;
}

/**
 * @public
 */
export interface ImportVolumeResult {
  /**
   * <p>Information about the conversion task.</p>
   * @public
   */
  ConversionTask?: ConversionTask | undefined;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinRequest {
  /**
   * <p>The IDs of the AMIs to list. Omit this parameter to list all of the AMIs that are in the
   *       Recycle Bin. You can specify up to 20 IDs in a single request.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about an AMI that is currently in the Recycle Bin.</p>
 * @public
 */
export interface ImageRecycleBinInfo {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The name of the AMI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the AMI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the AMI entered the Recycle Bin.</p>
   * @public
   */
  RecycleBinEnterTime?: Date | undefined;

  /**
   * <p>The date and time when the AMI is to be permanently deleted from the Recycle Bin.</p>
   * @public
   */
  RecycleBinExitTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinResult {
  /**
   * <p>Information about the AMIs.</p>
   * @public
   */
  Images?: ImageRecycleBinInfo[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSnapshotsInRecycleBinRequest {
  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the snapshots to list. Omit this parameter to list all of the
   *       snapshots that are in the Recycle Bin.</p>
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a snapshot that is currently in the Recycle Bin.</p>
 * @public
 */
export interface SnapshotRecycleBinInfo {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The date and time when the snapshot entered the Recycle Bin.</p>
   * @public
   */
  RecycleBinEnterTime?: Date | undefined;

  /**
   * <p>The date and time when the snapshot is to be permanently deleted from the Recycle Bin.</p>
   * @public
   */
  RecycleBinExitTime?: Date | undefined;

  /**
   * <p>The description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * @public
 */
export interface ListSnapshotsInRecycleBinResult {
  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  Snapshots?: SnapshotRecycleBinInfo[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LockMode = {
  compliance: "compliance",
  governance: "governance",
} as const;

/**
 * @public
 */
export type LockMode = (typeof LockMode)[keyof typeof LockMode];

/**
 * @public
 */
export interface LockSnapshotRequest {
  /**
   * <p>The ID of the snapshot to lock.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The mode in which to lock the snapshot. Specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>governance</code> - Locks the snapshot in governance mode. Snapshots locked in governance
   *           mode can't be deleted until one of the following conditions are met:</p>
   *                <ul>
   *                   <li>
   *                      <p>The lock duration expires.</p>
   *                   </li>
   *                   <li>
   *                      <p>The snapshot is unlocked by a user with the appropriate permissions.</p>
   *                   </li>
   *                </ul>
   *                <p>Users with the appropriate IAM permissions can unlock the snapshot, increase or decrease the lock
   *           duration, and change the lock mode to <code>compliance</code> at any time.</p>
   *                <p>If you lock a snapshot in <code>governance</code> mode, omit <b>
   *           CoolOffPeriod</b>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>compliance</code> - Locks the snapshot in compliance mode. Snapshots locked in compliance
   *           mode can't be unlocked by any user. They can be deleted only after the lock duration expires. Users
   *           can't decrease the lock duration or change the lock mode to <code>governance</code>. However, users
   *           with appropriate IAM permissions can increase the lock duration at any time.</p>
   *                <p>If you lock a snapshot in <code>compliance</code> mode, you can optionally specify
   *           <b>CoolOffPeriod</b>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockMode: LockMode | undefined;

  /**
   * <p>The cooling-off period during which you can unlock the snapshot or modify the lock settings after
   *       locking the snapshot in compliance mode, in hours. After the cooling-off period expires, you can't
   *       unlock or delete the snapshot, decrease the lock duration, or change the lock mode. You can increase
   *       the lock duration after the cooling-off period expires.</p>
   *          <p>The cooling-off period is optional when locking a snapshot in compliance mode. If you are locking
   *       the snapshot in governance mode, omit this parameter.</p>
   *          <p>To lock the snapshot in compliance mode immediately without a cooling-off period, omit this
   *       parameter.</p>
   *          <p>If you are extending the lock duration for a snapshot that is locked in compliance mode after
   *       the cooling-off period has expired, omit this parameter. If you specify a cooling-period in a such
   *       a request, the request fails.</p>
   *          <p>Allowed values: Min 1, max 72.</p>
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * <p>The period of time for which to lock the snapshot, in days. The snapshot lock will automatically
   *       expire after this period lapses.</p>
   *          <p>You must specify either this parameter or <b>ExpirationDate</b>, but
   *       not both.</p>
   *          <p>Allowed values: Min: 1, max 36500</p>
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * <p>The date and time at which the snapshot lock is to automatically expire, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   *          <p>You must specify either this parameter or <b>LockDuration</b>, but
   *       not both.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;
}

/**
 * @public
 */
export interface LockSnapshotResult {
  /**
   * <p>The ID of the snapshot</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The state of the snapshot lock. Valid states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>compliance-cooloff</code> - The snapshot has been locked in
   *           compliance mode but it is still within the cooling-off period. The snapshot can't be
   *           deleted, but it can be unlocked and the lock settings can be modified by users with
   *           appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>governance</code> - The snapshot is locked in governance mode. The
   *           snapshot can't be deleted, but it can be unlocked and the lock settings can be
   *           modified by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>compliance</code> - The snapshot is locked in compliance mode and the
   *           cooling-off period has expired. The snapshot can't be unlocked or deleted. The lock
   *           duration can only be increased by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The snapshot was locked in compliance or governance
   *           mode but the lock duration has expired. The snapshot is not locked and can be deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The period of time for which the snapshot is locked, in days.</p>
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * <p>The compliance mode cooling-off period, in hours.</p>
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * <p>The date and time at which the compliance mode cooling-off period expires, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  CoolOffPeriodExpiresOn?: Date | undefined;

  /**
   * <p>The date and time at which the snapshot was locked, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockCreatedOn?: Date | undefined;

  /**
   * <p>The date and time at which the lock will expire, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockExpiresOn?: Date | undefined;

  /**
   * <p>The date and time at which the lock duration started, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockDurationStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface ModifyAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   * @public
   */
  AllocationId: string | undefined;

  /**
   * <p>The domain name to modify for the IP address.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyAddressAttributeResult {
  /**
   * <p>Information about the Elastic IP address.</p>
   * @public
   */
  Address?: AddressAttribute | undefined;
}

/**
 * @public
 * @enum
 */
export const ModifyAvailabilityZoneOptInStatus = {
  not_opted_in: "not-opted-in",
  opted_in: "opted-in",
} as const;

/**
 * @public
 */
export type ModifyAvailabilityZoneOptInStatus =
  (typeof ModifyAvailabilityZoneOptInStatus)[keyof typeof ModifyAvailabilityZoneOptInStatus];

/**
 * @public
 */
export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * <p>The name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>Indicates whether to opt in to the zone group. The only valid value is <code>opted-in</code>.
   *       You must contact Amazon Web Services Support to opt out of a Local Zone or Wavelength Zone group.</p>
   * @public
   */
  OptInStatus: ModifyAvailabilityZoneOptInStatus | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyAvailabilityZoneGroupResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The number of instances for which to reserve capacity. The number of instances can't
   * 			be increased or decreased by more than <code>1000</code> in a single request.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity
   * 			Reservation expires, the reserved capacity is released and you can no longer launch
   * 			instances into it. The Capacity Reservation's state changes to <code>expired</code> when
   * 			it reaches its end date and time.</p>
   *          <p>The Capacity Reservation is cancelled within an hour from the specified time. For
   * 			example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to
   * 			end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   *          <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can
   * 			have one of the following end types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you
   * 					explicitly cancel it. Do not provide an <code>EndDate</code> value if
   * 						<code>EndDateType</code> is <code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a
   * 					specified date and time. You must provide an <code>EndDate</code> value if
   * 						<code>EndDateType</code> is <code>limited</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * <p>Reserved. Capacity Reservations you have created are accepted by default.</p>
   * @public
   */
  Accept?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p> The matching criteria (instance eligibility) that you want to use in the modified
   * 			Capacity Reservation. If you change the instance eligibility of an existing Capacity
   * 			Reservation from <code>targeted</code> to <code>open</code>, any running instances that
   * 			match the attributes of the Capacity Reservation, have the
   * 				<code>CapacityReservationPreference</code> set to <code>open</code>, and are not yet
   * 			running in the Capacity Reservation, will automatically use the modified Capacity
   * 			Reservation. </p>
   *          <p>To modify the instance eligibility, the Capacity Reservation must be completely idle
   * 			(zero usage).</p>
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetRequest {
  /**
   * <p>The ID of the Capacity Reservation Fleet to modify.</p>
   * @public
   */
  CapacityReservationFleetId: string | undefined;

  /**
   * <p>The total number of capacity units to be reserved by the Capacity Reservation Fleet.
   * 			This value, together with the instance type weights that you assign to each instance
   * 			type used by the Fleet determine the number of instances for which the Fleet reserves
   * 			capacity. Both values are based on units that make sense for your workload. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires. When the Capacity
   * 			Reservation Fleet expires, its state changes to <code>expired</code> and all of the
   * 			Capacity Reservations in the Fleet expire.</p>
   *          <p>The Capacity Reservation Fleet expires within an hour after the specified time. For
   * 			example, if you specify <code>5/31/2019</code>, <code>13:30:55</code>, the Capacity
   * 			Reservation Fleet is guaranteed to expire between <code>13:30:55</code> and
   * 				<code>14:30:55</code> on <code>5/31/2019</code>.</p>
   *          <p>You can't specify <b>EndDate</b> and <b>
   * 				RemoveEndDate</b> in the same request.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether to remove the end date from the Capacity Reservation Fleet. If you
   * 			remove the end date, the Capacity Reservation Fleet does not expire and it remains
   * 			active until you explicitly cancel it using the <b>CancelCapacityReservationFleet</b> action.</p>
   *          <p>You can't specify <b>RemoveEndDate</b> and <b> EndDate</b> in the same request.</p>
   * @public
   */
  RemoveEndDate?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Information about the DNS server to be used.</p>
 * @public
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to
   * 			two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values
   * 			overwrite the existing values.</p>
   * @public
   */
  CustomDnsServers?: string[] | undefined;

  /**
   * <p>Indicates whether DNS servers should be used. Specify <code>False</code> to delete the existing DNS
   * 			servers.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN endpoint to modify.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ARN of the server certificate to be used. The server certificate must be provisioned in
   * 			Certificate Manager (ACM).</p>
   * @public
   */
  ServerCertificateArn?: string | undefined;

  /**
   * <p>Information about the client connection logging options.</p>
   *          <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   *          <ul>
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
   * @public
   */
  ConnectionLogOptions?: ConnectionLogOptions | undefined;

  /**
   * <p>Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have
   * 			up to two DNS servers.</p>
   * @public
   */
  DnsServers?: DnsServersOptionsModifyStructure | undefined;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   *          <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   *          <p>Default Value: <code>443</code>
   *          </p>
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the VPN is split-tunnel.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   *         	<i>Client VPN Administrator Guide</i>.</p>
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of one or more security groups to apply to the target network.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   * @public
   */
  SelfServicePortal?: SelfServicePortal | undefined;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   * @public
   */
  ClientConnectOptions?: ClientConnectOptions | undefined;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   * @public
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions | undefined;

  /**
   * <p>Indicates whether the client VPN session is disconnected after the maximum timeout specified in <code>sessionTimeoutHours</code> is reached. If <code>true</code>, users are prompted to reconnect client VPN. If <code>false</code>, client VPN attempts to reconnect automatically. The default value is <code>false</code>.</p>
   * @public
   */
  DisconnectOnSessionTimeout?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The instance family.</p>
   * @public
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | undefined;

  /**
   * <p>The credit option for CPU usage of the instance family.</p>
   *          <p>Valid Values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits: string | undefined;
}

/**
 * @public
 */
export interface ModifyDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   * @public
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification | undefined;
}

/**
 * @public
 */
export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * <p>The identifier of the KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
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
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   * @public
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The launch template and overrides.</p>
   * @public
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The size of the EC2 Fleet.</p>
   * @public
   */
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFleetResult {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *          no response is returned, and instead an error message is returned.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Describes a load permission.</p>
 * @public
 */
export interface LoadPermissionRequest {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * <p>Describes modifications to the load permissions of an Amazon FPGA image (AFI).</p>
 * @public
 */
export interface LoadPermissionModifications {
  /**
   * <p>The load permissions to add.</p>
   * @public
   */
  Add?: LoadPermissionRequest[] | undefined;

  /**
   * <p>The load permissions to remove.</p>
   * @public
   */
  Remove?: LoadPermissionRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationType = {
  add: "add",
  remove: "remove",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 */
export interface ModifyFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the AFI.</p>
   * @public
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  Attribute?: FpgaImageAttributeName | undefined;

  /**
   * <p>The operation type.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>The Amazon Web Services account IDs. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * <p>The user groups. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   * @public
   */
  UserGroups?: string[] | undefined;

  /**
   * <p>The product codes. After you add a product code to an AFI, it can't be removed.
   * 		    This parameter is valid only when modifying the <code>productCodes</code> attribute.</p>
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * <p>The load permission for the AFI.</p>
   * @public
   */
  LoadPermission?: LoadPermissionModifications | undefined;

  /**
   * <p>A description for the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A name for the AFI.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   * @public
   */
  FpgaImageAttribute?: FpgaImageAttribute | undefined;
}

/**
 * @public
 */
export interface ModifyHostsRequest {
  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">Host recovery</a> in
   *             the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support only a specific instance type.</p>
   *          <p>If you want to modify a Dedicated Host to support multiple instance types in its
   *             current instance family, omit this parameter and specify <b>InstanceFamily</b> instead. You cannot specify <b>InstanceType</b> and <b>InstanceFamily</b> in the
   *             same request.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support multiple instance types within its
   *             current instance family.</p>
   *          <p>If you want to modify a Dedicated Host to support a specific instance type only, omit
   *             this parameter and specify <b>InstanceType</b> instead. You
   *             cannot specify <b>InstanceFamily</b> and <b>InstanceType</b> in the same request.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>Indicates whether to enable or disable host maintenance for the Dedicated Host. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html">Host
   *                 maintenance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts to modify.</p>
   * @public
   */
  HostIds: string[] | undefined;

  /**
   * <p>Specify whether to enable or disable auto-placement.</p>
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;
}

/**
 * @public
 */
export interface ModifyHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully modified.</p>
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts that could not be modified. Check whether the setting
   *             you requested can be used.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface ModifyIdentityIdFormatRequest {
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
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>Indicates whether the resource should use longer IDs (17-character IDs)</p>
   * @public
   */
  UseLongIds: boolean | undefined;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify
   *        <code>all</code> to modify the ID format for all IAM users, IAM roles, and the root user of
   *        the account.</p>
   * @public
   */
  PrincipalArn: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>Indicate whether the resource should use longer IDs (17-character IDs).</p>
   * @public
   */
  UseLongIds: boolean | undefined;
}

/**
 * <p>Describes a launch permission modification.</p>
 * @public
 */
export interface LaunchPermissionModifications {
  /**
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to add to the list of
   *       launch permissions for the AMI.</p>
   * @public
   */
  Add?: LaunchPermission[] | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to remove from the list of
   *       launch permissions for the AMI.</p>
   * @public
   */
  Remove?: LaunchPermission[] | undefined;
}

/**
 * <p>Contains the parameters for ModifyImageAttribute.</p>
 * @public
 */
export interface ModifyImageAttributeRequest {
  /**
   * <p>The name of the attribute to modify.</p>
   *          <p>Valid values: <code>description</code> | <code>imdsSupport</code> |
   *         <code>launchPermission</code>
   *          </p>
   * @public
   */
  Attribute?: string | undefined;

  /**
   * <p>A new description for the AMI.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>A new launch permission for the AMI.</p>
   * @public
   */
  LaunchPermission?: LaunchPermissionModifications | undefined;

  /**
   * <p>The operation type. This parameter can be used only when the <code>Attribute</code>
   *       parameter is <code>launchPermission</code>.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * <p>The user groups. This parameter can be used only when the <code>Attribute</code> parameter
   *       is <code>launchPermission</code>.</p>
   * @public
   */
  UserGroups?: string[] | undefined;

  /**
   * <p>The Amazon Web Services account IDs. This parameter can be used only when the
   *         <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * <p>The value of the attribute being modified. This parameter can be used only when the
   *         <code>Attribute</code> parameter is <code>description</code> or
   *       <code>imdsSupport</code>.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organization. This parameter can be used only when
   *       the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   * @public
   */
  OrganizationArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU). This parameter can be used
   *       only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   * @public
   */
  OrganizationalUnitArns?: string[] | undefined;

  /**
   * <p>Set to <code>v2.0</code> to indicate that IMDSv2 is specified in the AMI. Instances
   *       launched from this AMI will have <code>HttpTokens</code> automatically set to
   *         <code>required</code> so that, by default, the instance requires that IMDSv2 is used when
   *       requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to
   *         <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <important>
   *             <p>Do not use this parameter unless your AMI software supports IMDSv2. After you set the
   *         value to <code>v2.0</code>, you can't undo it. The only way to “reset” your AMI is to create
   *         a new AMI from the underlying snapshot.</p>
   *          </important>
   * @public
   */
  ImdsSupport?: AttributeValue | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes information used to set up an EBS volume specified in a block device
 *             mapping.</p>
 * @public
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>The ID of the EBS volume.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;
}

/**
 * <p>Describes a block device mapping entry.</p>
 * @public
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: EbsInstanceBlockDeviceSpecification | undefined;

  /**
   * <p>The virtual device name.</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Suppresses the specified device included in the block device mapping.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * @public
 */
export interface BlobAttributeValue {
  Value?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceAttributeRequest {
  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html">Enable stop
   *                 protection for your instance</a>.</p>
   *          <p></p>
   * @public
   */
  DisableApiStop?: AttributeBooleanValue | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the attribute to modify.</p>
   *          <important>
   *             <p>You can modify the following attributes only: <code>disableApiTermination</code> |
   *                     <code>instanceType</code> | <code>kernel</code> | <code>ramdisk</code> |
   *                     <code>instanceInitiatedShutdownBehavior</code> | <code>blockDeviceMapping</code>
   *                 | <code>userData</code> | <code>sourceDestCheck</code> | <code>groupSet</code> |
   *                     <code>ebsOptimized</code> | <code>sriovNetSupport</code> |
   *                     <code>enaSupport</code> | <code>nvmeSupport</code> | <code>disableApiStop</code>
   *                 | <code>enclaveOptions</code>
   *             </p>
   *          </important>
   * @public
   */
  Attribute?: InstanceAttributeName | undefined;

  /**
   * <p>A new value for the attribute. Use only with the <code>kernel</code>,
   *                 <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, or
   *                 <code>instanceInitiatedShutdownBehavior</code> attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Modifies the <code>DeleteOnTermination</code> attribute for volumes that are currently
   *             attached. The volume must be owned by the caller. If no value is specified for
   *                 <code>DeleteOnTermination</code>, the default is <code>true</code> and the volume is
   *             deleted when the instance is terminated. You can't modify the <code>DeleteOnTermination</code>
   *             attribute for volumes that are attached to Fargate tasks.</p>
   *          <p>To add instance store volumes to an Amazon EBS-backed instance, you must add them when
   *             you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Update the block device mapping when launching an instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMappingSpecification[] | undefined;

  /**
   * <p>Enable or disable termination protection for the instance. If the value is <code>true</code>,
   *             you can't terminate the instance using the Amazon EC2 console, command line interface, or API.
   *             You can't enable termination protection for Spot Instances.</p>
   * @public
   */
  DisableApiTermination?: AttributeBooleanValue | undefined;

  /**
   * <p>Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *                 types</a> in the <i>Amazon EC2 User Guide</i>. If the instance type is
   *             not valid, the error returned is <code>InvalidInstanceAttributeValue</code>.</p>
   * @public
   */
  InstanceType?: AttributeValue | undefined;

  /**
   * <p>Changes the instance's kernel to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   * @public
   */
  Kernel?: AttributeValue | undefined;

  /**
   * <p>Changes the instance's RAM disk to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   * @public
   */
  Ramdisk?: AttributeValue | undefined;

  /**
   * <p>Changes the instance's user data to the specified value. User data must be base64-encoded.
   *             Depending on the tool or SDK that you're using, the base64-encoding might be performed for you.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-add-user-data.html">Work with instance user data</a>.</p>
   * @public
   */
  UserData?: BlobAttributeValue | undefined;

  /**
   * <p>Specifies whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue | undefined;

  /**
   * <p>Replaces the security groups of the instance with the specified security groups.
   *             You must specify the ID of at least one security group, even if it's just the default
   *             security group for the VPC.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal EBS I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   * @public
   */
  EbsOptimized?: AttributeBooleanValue | undefined;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *             Function interface for the instance.</p>
   *          <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function
   *             interface at this time.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the
   *             instance.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   * @public
   */
  EnaSupport?: AttributeBooleanValue | undefined;
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. </p>
 *          <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance to
 * 			run as an On-Demand Instance, to run in any <code>open</code> Capacity Reservation that
 * 			has matching attributes, or to run only in a Capacity Reservation or Capacity
 * 			Reservation group. Use the <code>CapacityReservationTarget</code> parameter to
 * 			explicitly target a specific Capacity Reservation or a Capacity Reservation
 * 			group.</p>
 *          <p>You can only specify <code>CapacityReservationPreference</code> and <code>CapacityReservationTarget</code> if the <code>CapacityReservationPreference</code> is <code>capacity-reservations-only</code>.</p>
 * @public
 */
export interface CapacityReservationSpecification {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   * 			include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>capacity-reservations-only</code> - The instance will only run in a
   * 					Capacity Reservation or Capacity Reservation group. If capacity isn't
   * 					available, the instance will fail to launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   * 					Reservation that has matching attributes (instance type, platform,
   * 					Availability Zone, and tenancy). If capacity isn't available, the instance
   * 					runs as an On-Demand Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance doesn't run in a Capacity Reservation even if one is available. The
   * 					instance runs as an On-Demand Instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * <p>The ID of the instance to be modified.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   * @public
   */
  CapacityReservationSpecification: CapacityReservationSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @internal
 */
export const VerifiedAccessInstanceUserTrustProviderClientConfigurationFilterSensitiveLog = (
  obj: VerifiedAccessInstanceUserTrustProviderClientConfiguration
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExportVerifiedAccessInstanceClientConfigurationResultFilterSensitiveLog = (
  obj: ExportVerifiedAccessInstanceClientConfigurationResult
): any => ({
  ...obj,
  ...(obj.UserTrustProvider && {
    UserTrustProvider: VerifiedAccessInstanceUserTrustProviderClientConfigurationFilterSensitiveLog(
      obj.UserTrustProvider
    ),
  }),
});

/**
 * @internal
 */
export const GetInstanceTpmEkPubResultFilterSensitiveLog = (obj: GetInstanceTpmEkPubResult): any => ({
  ...obj,
  ...(obj.KeyValue && { KeyValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetLaunchTemplateDataResultFilterSensitiveLog = (obj: GetLaunchTemplateDataResult): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: ResponseLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const GetPasswordDataResultFilterSensitiveLog = (obj: GetPasswordDataResult): any => ({
  ...obj,
  ...(obj.PasswordData && { PasswordData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog = (
  obj: GetVpnConnectionDeviceSampleConfigurationResult
): any => ({
  ...obj,
  ...(obj.VpnConnectionDeviceSampleConfiguration && { VpnConnectionDeviceSampleConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImageDiskContainerFilterSensitiveLog = (obj: ImageDiskContainer): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportImageRequestFilterSensitiveLog = (obj: ImportImageRequest): any => ({
  ...obj,
  ...(obj.DiskContainers && {
    DiskContainers: obj.DiskContainers.map((item) => ImageDiskContainerFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ImportImageResultFilterSensitiveLog = (obj: ImportImageResult): any => ({
  ...obj,
  ...(obj.SnapshotDetails && {
    SnapshotDetails: obj.SnapshotDetails.map((item) => SnapshotDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DiskImageDetailFilterSensitiveLog = (obj: DiskImageDetail): any => ({
  ...obj,
  ...(obj.ImportManifestUrl && { ImportManifestUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DiskImageFilterSensitiveLog = (obj: DiskImage): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDetailFilterSensitiveLog(obj.Image) }),
});

/**
 * @internal
 */
export const UserDataFilterSensitiveLog = (obj: UserData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportInstanceLaunchSpecificationFilterSensitiveLog = (obj: ImportInstanceLaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportInstanceRequestFilterSensitiveLog = (obj: ImportInstanceRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && {
    LaunchSpecification: ImportInstanceLaunchSpecificationFilterSensitiveLog(obj.LaunchSpecification),
  }),
  ...(obj.DiskImages && { DiskImages: obj.DiskImages.map((item) => DiskImageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ImportInstanceResultFilterSensitiveLog = (obj: ImportInstanceResult): any => ({
  ...obj,
  ...(obj.ConversionTask && { ConversionTask: ConversionTaskFilterSensitiveLog(obj.ConversionTask) }),
});

/**
 * @internal
 */
export const SnapshotDiskContainerFilterSensitiveLog = (obj: SnapshotDiskContainer): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportSnapshotRequestFilterSensitiveLog = (obj: ImportSnapshotRequest): any => ({
  ...obj,
  ...(obj.DiskContainer && { DiskContainer: SnapshotDiskContainerFilterSensitiveLog(obj.DiskContainer) }),
});

/**
 * @internal
 */
export const ImportSnapshotResultFilterSensitiveLog = (obj: ImportSnapshotResult): any => ({
  ...obj,
  ...(obj.SnapshotTaskDetail && { SnapshotTaskDetail: SnapshotTaskDetailFilterSensitiveLog(obj.SnapshotTaskDetail) }),
});

/**
 * @internal
 */
export const ImportVolumeRequestFilterSensitiveLog = (obj: ImportVolumeRequest): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDetailFilterSensitiveLog(obj.Image) }),
});

/**
 * @internal
 */
export const ImportVolumeResultFilterSensitiveLog = (obj: ImportVolumeResult): any => ({
  ...obj,
  ...(obj.ConversionTask && { ConversionTask: ConversionTaskFilterSensitiveLog(obj.ConversionTask) }),
});
