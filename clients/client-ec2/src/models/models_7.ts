// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AddedPrincipal,
  AddIpamOperatingRegion,
  AddIpamOrganizationalUnitExclusion,
  AddPrefixListEntry,
  AddressAttribute,
  AddressAttributeName,
  Affinity,
  ApplianceModeSupportValue,
  ByoipCidr,
  ClientVpnAuthorizationRuleStatus,
  CurrencyCodeValues,
  DnsSupportValue,
  EnaSrdSpecification,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceEventWindow,
  IpPermission,
  Ipv6SupportValue,
  PortRange,
  RouteTableAssociationState,
  SecurityGroupReferencingSupportValue,
  TagSpecification,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
} from "./models_0";

import {
  _InstanceType,
  AmdSevSnpSpecification,
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservation,
  CapacityReservationInstancePlatform,
  ConnectionTrackingSpecificationRequest,
  CreditSpecificationRequest,
  ElasticGpuSpecification,
  HostnameType,
  InstanceBandwidthWeighting,
  InstanceEventWindowTimeRangeRequest,
  InstanceInterruptionBehavior,
  InstanceIpv6Address,
  Ipam,
  IpamPool,
  IpamResourceDiscovery,
  IpamScope,
  IpamTier,
  LaunchTemplate,
  LocalGatewayRoute,
  MarketType,
  OperatorRequest,
  Placement,
  RequestIpamResourceTag,
  ShutdownBehavior,
  SpotInstanceType,
  VolumeType,
} from "./models_1";

import {
  AutoAcceptSharedAttachmentsValue,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DnsOptionsSpecification,
  IcmpTypeCode,
  IKEVersionsRequestListValue,
  InternetGatewayExclusionMode,
  IpAddressType,
  ManagedPrefixList,
  PayerResponsibility,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  RuleAction,
  SnapshotState,
  SSEType,
  SubnetConfiguration,
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
  VerifiedAccessEndpoint,
  VerifiedAccessEndpointProtocol,
  VerifiedAccessGroup,
  VerifiedAccessSseSpecificationRequest,
  VpcBlockPublicAccessExclusion,
  VpnEcmpSupportValue,
  VpnTunnelLogOptionsSpecification,
} from "./models_2";

import {
  Byoasn,
  CapacityBlockExtension,
  Filter,
  InstanceTagNotificationAttribute,
  IpamPoolCidr,
  VpnConnection,
  VpnConnectionFilterSensitiveLog,
} from "./models_3";

import {
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  HttpTokensState,
  ImdsSupportValues,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceState,
  InstanceStatusEvent,
  Monitoring,
  NetworkInsightsAccessScopeAnalysis,
  NetworkInsightsAnalysis,
  TpmSupportValues,
} from "./models_4";

import {
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  InstanceNetworkInterfaceSpecification,
  InternetGatewayBlockMode,
  LaunchTemplateConfig,
  PublicIpv4PoolRange,
  ReservedInstancesConfiguration,
  RunInstancesMonitoringEnabled,
  ScheduledInstance,
  SnapshotAttributeName,
  SpotFleetRequestConfigData,
  SpotFleetRequestConfigDataFilterSensitiveLog,
  SpotInstanceRequest,
  SpotInstanceRequestFilterSensitiveLog,
  SpotPlacement,
  VerifiedAccessInstanceLoggingConfiguration,
  VolumeModification,
  VpcBlockPublicAccessOptions,
} from "./models_5";

import { CapacityReservationSpecification, IpamResourceCidr, OperationType, Purchase } from "./models_6";

/**
 * @public
 */
export interface ModifyInstanceCapacityReservationAttributesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCpuOptionsRequest {
  /**
   * <p>The ID of the instance to update.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The number of CPU cores to activate for the specified instance.</p>
   * @public
   */
  CoreCount: number | undefined;

  /**
   * <p>The number of threads to run for each CPU core.</p>
   * @public
   */
  ThreadsPerCore: number | undefined;

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
export interface ModifyInstanceCpuOptionsResult {
  /**
   * <p>The ID of the instance that was updated.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The number of CPU cores that are running for the specified instance after the
   * 			update.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads that are running per CPU core for the specified
   * 			instance after the update.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance.</p>
 * @public
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   *          <p>T3 instances with <code>host</code> tenancy do not support the <code>unlimited</code>
   *             CPU credit option.</p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information about the credit option for CPU usage.</p>
   * @public
   */
  InstanceCreditSpecifications: InstanceCreditSpecificationRequest[] | undefined;
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was
 *             successfully modified.</p>
 * @public
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UnsuccessfulInstanceCreditSpecificationErrorCode = {
  INCORRECT_INSTANCE_STATE: "IncorrectInstanceState",
  INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED: "InstanceCreditSpecification.NotSupported",
  INSTANCE_NOT_FOUND: "InvalidInstanceID.NotFound",
  INVALID_INSTANCE_ID: "InvalidInstanceID.Malformed",
} as const;

/**
 * @public
 */
export type UnsuccessfulInstanceCreditSpecificationErrorCode =
  (typeof UnsuccessfulInstanceCreditSpecificationErrorCode)[keyof typeof UnsuccessfulInstanceCreditSpecificationErrorCode];

/**
 * <p>Information about the error for the burstable performance instance whose credit option
 *             for CPU usage was not modified.</p>
 * @public
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode | undefined;

  /**
   * <p>The applicable error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was not
 *             modified.</p>
 * @public
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The applicable error for the burstable performance instance whose credit option for
   *             CPU usage was not modified.</p>
   * @public
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationResult {
  /**
   * <p>Information about the instances whose credit option for CPU usage was successfully
   *             modified.</p>
   * @public
   */
  SuccessfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[] | undefined;

  /**
   * <p>Information about the instances whose credit option for CPU usage was not
   *             modified.</p>
   * @public
   */
  UnsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[] | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance with the scheduled event.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the event whose date and time you are modifying.</p>
   * @public
   */
  InstanceEventId: string | undefined;

  /**
   * <p>The new date and time when the event will take place.</p>
   * @public
   */
  NotBefore: Date | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeResult {
  /**
   * <p>Information about the event.</p>
   * @public
   */
  Event?: InstanceStatusEvent | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the event window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the event window.</p>
   * @public
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>The time ranges of the event window.</p>
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[] | undefined;

  /**
   * <p>The cron expression of the event window, for example, <code>* 0-4,20-23 * * 1,5</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Only hour and day of the week values are supported.</p>
   *             </li>
   *             <li>
   *                <p>For day of the week values, you can specify either integers <code>0</code> through
   *                   <code>6</code>, or alternative single values <code>SUN</code> through
   *                   <code>SAT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The minute, month, and year must be specified by <code>*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The hour value must be one or a multiple range, for example, <code>0-4</code> or
   *                   <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *                   <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   * @public
   */
  CronExpression?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMaintenanceOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;

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
export interface ModifyInstanceMaintenanceOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultInstanceMetadataEndpointState = {
  disabled: "disabled",
  enabled: "enabled",
  no_preference: "no-preference",
} as const;

/**
 * @public
 */
export type DefaultInstanceMetadataEndpointState =
  (typeof DefaultInstanceMetadataEndpointState)[keyof typeof DefaultInstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const MetadataDefaultHttpTokensState = {
  no_preference: "no-preference",
  optional: "optional",
  required: "required",
} as const;

/**
 * @public
 */
export type MetadataDefaultHttpTokensState =
  (typeof MetadataDefaultHttpTokensState)[keyof typeof MetadataDefaultHttpTokensState];

/**
 * @public
 * @enum
 */
export const DefaultInstanceMetadataTagsState = {
  disabled: "disabled",
  enabled: "enabled",
  no_preference: "no-preference",
} as const;

/**
 * @public
 */
export type DefaultInstanceMetadataTagsState =
  (typeof DefaultInstanceMetadataTagsState)[keyof typeof DefaultInstanceMetadataTagsState];

/**
 * @public
 */
export interface ModifyInstanceMetadataDefaultsRequest {
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
  HttpTokens?: MetadataDefaultHttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel. To indicate no
   *             preference, specify <code>-1</code>.</p>
   *          <p>Possible values: Integers from <code>1</code> to <code>64</code>, and <code>-1</code>
   *             to indicate no preference</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the IMDS endpoint on an instance. When disabled, the instance
   *             metadata can't be accessed.</p>
   * @public
   */
  HttpEndpoint?: DefaultInstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables access to an instance's tags from the instance metadata. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceMetadataTags?: DefaultInstanceMetadataTagsState | undefined;

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
export interface ModifyInstanceMetadataDefaultsResult {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *             no response is returned, and instead an error message is returned.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional. You can choose whether to send a
   *                     session token in your instance metadata retrieval requests. If you retrieve
   *                     IAM role credentials without a session token, you receive the IMDSv1 role
   *                     credentials. If you retrieve IAM role credentials using a valid session token,
   *                     you receive the IMDSv2 role credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required. You must send a session token
   *                     in your instance metadata retrieval requests. With this option, retrieving the
   *                     IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are
   *                     not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code> and the account level default is set to
   *                     <code>no-preference</code>, the default is <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code>, but the account level default is set to
   *                     <code>V1 or V2</code>, the default is <code>optional</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The default value can also be affected by other combinations of parameters. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html#instance-metadata-options-order-of-precedence">Order of precedence for instance metadata options</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel. If no parameter is specified,
   *             the existing state is maintained.</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is
   *             not specified, the existing state is maintained.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.
   *             Applies only if you enabled the HTTP metadata endpoint.</p>
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The metadata options for the instance.</p>
   * @public
   */
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceNetworkPerformanceRequest {
  /**
   * <p>The ID of the instance to update.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:</p>
   *          <dl>
   *             <dt>default</dt>
   *             <dd>
   *                <p>This option uses the standard bandwidth configuration for your instance type.</p>
   *             </dd>
   *             <dt>vpc-1</dt>
   *             <dd>
   *                <p>This option boosts your networking baseline bandwidth and reduces your EBS
   *     					baseline bandwidth.</p>
   *             </dd>
   *             <dt>ebs-1</dt>
   *             <dd>
   *                <p>This option boosts your EBS baseline bandwidth and reduces your networking
   *     					baseline bandwidth.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  BandwidthWeighting: InstanceBandwidthWeighting | undefined;

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
export interface ModifyInstanceNetworkPerformanceResult {
  /**
   * <p>The instance ID that was updated.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Contains the updated configuration for bandwidth weighting on the specified instance.</p>
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * @public
 * @enum
 */
export const HostTenancy = {
  dedicated: "dedicated",
  default: "default",
  host: "host",
} as const;

/**
 * @public
 */
export type HostTenancy = (typeof HostTenancy)[keyof typeof HostTenancy];

/**
 * @public
 */
export interface ModifyInstancePlacementRequest {
  /**
   * <p>The name of the placement group in which to place the instance. For spread placement
   *             groups, the instance must have a tenancy of <code>default</code>. For cluster and
   *             partition placement groups, the instance must have a tenancy of <code>default</code> or
   *                 <code>dedicated</code>.</p>
   *          <p>To remove an instance from a placement group, specify an empty string ("").</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The number of the partition in which to place the instance. Valid only if the
   *             placement group strategy is set to <code>partition</code>.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>The ARN of the host resource group in which to place the instance. The instance must
   *             have a tenancy of <code>host</code> to specify this parameter.</p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The ID of the instance that you are modifying.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tenancy for the instance.</p>
   *          <note>
   *             <p>For T3 instances, you must launch the instance on a Dedicated Host to use a
   *                 tenancy of <code>host</code>. You can't change the tenancy from
   *                 <code>host</code> to <code>dedicated</code> or <code>default</code>.
   *                 Attempting to make one of these unsupported tenancy changes results in an
   *                 <code>InvalidRequest</code> error code.</p>
   *          </note>
   * @public
   */
  Tenancy?: HostTenancy | undefined;

  /**
   * <p>The affinity setting for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-affinity">Host affinity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Affinity?: Affinity | undefined;

  /**
   * <p>The ID of the Dedicated Host with which to associate the instance.</p>
   * @public
   */
  HostId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstancePlacementResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Remove an operating Region from an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>
 *          </p>
 * @public
 */
export interface RemoveIpamOperatingRegion {
  /**
   * <p>The name of the operating Region you want to remove.</p>
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM you want to modify.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>The description of the IPAM you want to modify.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Choose the operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  AddOperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>The operating Regions to remove.</p>
   * @public
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[] | undefined;

  /**
   * <p>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing > IPAM tab</a>.</p>
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * <p>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</p>
   * @public
   */
  EnablePrivateGua?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResult {
  /**
   * <p>The results of the modification.</p>
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you want to modify.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The description of the IPAM pool you want to modify.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If true, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128. The minimum netmask
   *          length must be less than the maximum netmask length.</p>
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.The maximum netmask
   *          length must be greater than the minimum netmask length.</p>
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * <p>Clear the default netmask length allocation rule for this pool.</p>
   * @public
   */
  ClearAllocationDefaultNetmaskLength?: boolean | undefined;

  /**
   * <p>Add tag allocation rules to a pool. For more information about allocation rules, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-top-ipam.html">Create a top-level pool</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  AddAllocationResourceTags?: RequestIpamResourceTag[] | undefined;

  /**
   * <p>Remove tag allocation rules from a pool.</p>
   * @public
   */
  RemoveAllocationResourceTags?: RequestIpamResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolResult {
  /**
   * <p>The results of the modification.</p>
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the resource you want to modify.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The CIDR of the resource you want to modify.</p>
   * @public
   */
  ResourceCidr: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource you want to modify.</p>
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * <p>The ID of the current scope that the resource CIDR is in.</p>
   * @public
   */
  CurrentIpamScopeId: string | undefined;

  /**
   * <p>The ID of the scope you want to transfer the resource CIDR to.</p>
   * @public
   */
  DestinationIpamScopeId?: string | undefined;

  /**
   * <p>Determines if the resource is monitored by IPAM. If a resource is monitored, the resource is discovered by IPAM and you can view details about the resource’s CIDR.</p>
   * @public
   */
  Monitored: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrResult {
  /**
   * <p>The CIDR of the resource.</p>
   * @public
   */
  IpamResourceCidr?: IpamResourceCidr | undefined;
}

/**
 * <p>Remove an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface RemoveIpamOrganizationalUnitExclusion {
  /**
   * <p>An Amazon Web Services Organizations entity path. Build the path for the OU(s) using Amazon Web Services Organizations IDs separated by a <code>/</code>. Include all child OUs by ending the path with <code>/*</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Example 1</p>
   *                <ul>
   *                   <li>
   *                      <p>Path to a child OU: <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/ou-jkl0-awsddddd/</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>In this example, <code>o-a1b2c3d4e5</code> is the organization ID, <code>r-f6g7h8i9j0example</code> is the root ID , <code>ou-ghi0-awsccccc</code> is an OU ID, and <code>ou-jkl0-awsddddd</code> is a child OU ID.</p>
   *                   </li>
   *                   <li>
   *                      <p>IPAM will not manage the IP addresses in accounts in the child OU.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Example 2</p>
   *                <ul>
   *                   <li>
   *                      <p>Path where all child OUs will be part of the exclusion: <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/*</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>In this example, IPAM will not manage the IP addresses in accounts in the OU (<code>ou-ghi0-awsccccc</code>) or in accounts in any OUs that are children of the OU.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>For more information on how to construct an entity path, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_last-accessed-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path">Understand the Amazon Web Services Organizations entity path</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   * @public
   */
  OrganizationsEntityPath?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryRequest {
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
   * <p>A resource discovery description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Add operating Regions to the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   * @public
   */
  AddOperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>Remove operating Regions.</p>
   * @public
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[] | undefined;

  /**
   * <p>Add an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   *          <note>
   *             <p>The resulting set of exclusions must not result in "overlap", meaning two or more OU
   *          exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html#exclude-ous-create-delete">Add or remove OU exclusions
   *          </a> in the <i>Amazon VPC User Guide</i>.</p>
   *          </note>
   * @public
   */
  AddOrganizationalUnitExclusions?: AddIpamOrganizationalUnitExclusion[] | undefined;

  /**
   * <p>Remove an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   *          <note>
   *             <p>The resulting set of exclusions must not result in "overlap", meaning two or more OU
   *             exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html#exclude-ous-create-delete">Add or remove OU exclusions
   *             </a> in the <i>Amazon VPC User Guide</i>.</p>
   *          </note>
   * @public
   */
  RemoveOrganizationalUnitExclusions?: RemoveIpamOrganizationalUnitExclusion[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryResult {
  /**
   * <p>A resource discovery.</p>
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * @public
 */
export interface ModifyIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the scope you want to modify.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The description of the scope you want to modify.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamScopeResult {
  /**
   * <p>The results of the modification.</p>
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version number of the launch template to set as the default version.</p>
   * @public
   */
  DefaultVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteRequest {
  /**
   * <p>The CIDR block used for destination matches. The value that you provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *          The ID of the virtual interface group.
   *       </p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>
   *          The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You
   *          cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteResult {
  /**
   * <p>Information about the local gateway route table.</p>
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * <p>An entry for a prefix list.</p>
 * @public
 */
export interface RemovePrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListRequest {
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
   * <p>The current version of the prefix list.</p>
   * @public
   */
  CurrentVersion?: number | undefined;

  /**
   * <p>A name for the prefix list.</p>
   * @public
   */
  PrefixListName?: string | undefined;

  /**
   * <p>One or more entries to add to the prefix list.</p>
   * @public
   */
  AddEntries?: AddPrefixListEntry[] | undefined;

  /**
   * <p>One or more entries to remove from the prefix list.</p>
   * @public
   */
  RemoveEntries?: RemovePrefixListEntry[] | undefined;

  /**
   * <p>The maximum number of entries for the prefix list. You cannot modify the entries
   *             of a prefix list and modify the size of a prefix list at the same time.</p>
   *          <p>If any of the resources that reference the prefix list cannot support the new
   *             maximum size, the modify operation fails. Check the state message for the IDs of
   *             the first ten resources that do not support the new maximum size.</p>
   * @public
   */
  MaxEntries?: number | undefined;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * <p>Describes an attachment change.</p>
 * @public
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * <p>The ID of the network interface attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;
}

/**
 * <p>Contains the parameters for ModifyNetworkInterfaceAttribute.</p>
 * @public
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * <p>Updates the ENA Express configuration for the network interface that’s attached to the
   * 			instance.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecification | undefined;

  /**
   * <p>If you’re modifying a network interface in a dual-stack or IPv6-only subnet, you have
   *             the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA
   *             address associated with an ENI that you have enabled to use a primary IPv6 address. Use
   *             this option if the instance that this ENI will be attached to relies on its IPv6 address
   *             not changing. Amazon Web Services will automatically assign an IPv6 address associated
   *             with the ENI attached to your instance to be the primary IPv6 address. Once you enable
   *             an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6
   *             GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6
   *             address until the instance is terminated or the network interface is detached. If you
   *             have multiple IPv6 addresses associated with an ENI attached to your instance and you
   *             enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI
   *             becomes the primary IPv6 address.</p>
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * <p>A connection tracking specification.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * <p>Indicates whether to assign a public IPv4 address to a network interface.
   *             This option can be enabled for any network interface but will only apply to the primary network interface (eth0).</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>A description for the network interface.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance
   *             is either the source or the destination of any traffic that it receives.
   *             If the value is <code>true</code>, source/destination checks are enabled;
   *             otherwise, they are disabled. The default value is <code>true</code>.
   *             You must disable source/destination checks if the instance runs services
   *             such as network address translation, routing, or firewalls.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Changes the security groups for the network interface. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Information about the interface attachment. If modifying the <code>delete on
   * 				termination</code> attribute, you must specify the ID of the interface
   * 			attachment.</p>
   * @public
   */
  Attachment?: NetworkInterfaceAttachmentChanges | undefined;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsRequest {
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

  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   * @public
   */
  PrivateDnsHostnameType?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an
   *             error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Contains the parameters for ModifyReservedInstances.</p>
 * @public
 */
export interface ModifyReservedInstancesRequest {
  /**
   * <p>The IDs of the Reserved Instances to modify.</p>
   * @public
   */
  ReservedInstancesIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive token you provide to ensure idempotency of your modification request. For more information, see
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The configuration settings for the Reserved Instances to modify.</p>
   * @public
   */
  TargetConfigurations: ReservedInstancesConfiguration[] | undefined;
}

/**
 * <p>Contains the output of ModifyReservedInstances.</p>
 * @public
 */
export interface ModifyReservedInstancesResult {
  /**
   * <p>The ID for the modification.</p>
   * @public
   */
  ReservedInstancesModificationId?: string | undefined;
}

/**
 * <p>Describes a security group rule.</p>
 *          <p>You must specify exactly one of the following parameters, based on the rule type:</p>
 *          <ul>
 *             <li>
 *                <p>CidrIpv4</p>
 *             </li>
 *             <li>
 *                <p>CidrIpv6</p>
 *             </li>
 *             <li>
 *                <p>PrefixListId</p>
 *             </li>
 *             <li>
 *                <p>ReferencedGroupId</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>
 *                 Amazon Web Services <a href="https://en.wikipedia.org/wiki/Canonicalization">canonicalizes</a> IPv4 and IPv6 CIDRs. For example, if you specify 100.68.0.18/18 for the CIDR block,
 *               Amazon Web Services canonicalizes the CIDR block to 100.68.0.0/18. Any subsequent DescribeSecurityGroups and DescribeSecurityGroupRules calls will
 *               return the canonicalized form of the CIDR block. Additionally, if you attempt to add another rule with the
 *               non-canonical form of the CIDR (such as 100.68.0.18/18) and there is already a rule for the canonicalized
 *               form of the CIDR block (such as 100.68.0.0/18), the API throws an duplicate rule error.</p>
 *          </note>
 *          <p>When you modify a rule, you cannot change the rule type. For example, if the rule
 *             uses an IPv4 address range, you must use <code>CidrIpv4</code> to specify a new IPv4
 *             address range.</p>
 * @public
 */
export interface SecurityGroupRuleRequest {
  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *          <p>Use <code>-1</code> to specify all protocols.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).
   *             If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The IPv4 CIDR range. To specify a single IPv4 address, use the /32 prefix length. </p>
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * <p>The IPv6 CIDR range. To specify a single IPv6 address, use the /128 prefix length.</p>
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of the security group that is referenced in the security group rule.</p>
   * @public
   */
  ReferencedGroupId?: string | undefined;

  /**
   * <p>The description of the security group rule.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Describes an update to a security group rule.</p>
 * @public
 */
export interface SecurityGroupRuleUpdate {
  /**
   * <p>The ID of the security group rule.</p>
   * @public
   */
  SecurityGroupRuleId: string | undefined;

  /**
   * <p>Information about the security group rule.</p>
   * @public
   */
  SecurityGroupRule?: SecurityGroupRuleRequest | undefined;
}

/**
 * @public
 */
export interface ModifySecurityGroupRulesRequest {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>Information about the security group properties to update.</p>
   * @public
   */
  SecurityGroupRules: SecurityGroupRuleUpdate[] | undefined;

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
export interface ModifySecurityGroupRulesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 * @public
 */
export interface CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified Amazon Web Services account ID or group to the list.</p>
   * @public
   */
  Add?: CreateVolumePermission[] | undefined;

  /**
   * <p>Removes the specified Amazon Web Services account ID or group from the list.</p>
   * @public
   */
  Remove?: CreateVolumePermission[] | undefined;
}

/**
 * @public
 */
export interface ModifySnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute to modify. Only volume creation permissions can be modified.</p>
   * @public
   */
  Attribute?: SnapshotAttributeName | undefined;

  /**
   * <p>A JSON representation of the snapshot attribute modification.</p>
   * @public
   */
  CreateVolumePermission?: CreateVolumePermissionModifications | undefined;

  /**
   * <p>The group to modify for the snapshot.</p>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The type of operation to perform to the attribute.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The account ID to modify for the snapshot.</p>
   * @public
   */
  UserIds?: string[] | undefined;

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
 * @enum
 */
export const TargetStorageTier = {
  archive: "archive",
} as const;

/**
 * @public
 */
export type TargetStorageTier = (typeof TargetStorageTier)[keyof typeof TargetStorageTier];

/**
 * @public
 */
export interface ModifySnapshotTierRequest {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The name of the storage tier. You must specify <code>archive</code>.</p>
   * @public
   */
  StorageTier?: TargetStorageTier | undefined;

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
export interface ModifySnapshotTierResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The date and time when the archive process was started.</p>
   * @public
   */
  TieringStartTime?: Date | undefined;
}

/**
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 * @public
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * <p>The launch template and overrides. You can only use this parameter if you specified a
   *             launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you
   *             specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this
   *             parameter.</p>
   * @public
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[] | undefined;

  /**
   * <p>The number of On-Demand Instances in the fleet.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The size of the fleet.</p>
   * @public
   */
  TargetCapacity?: number | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity
   *             of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | undefined;
}

/**
 * <p>Contains the output of ModifySpotFleetRequest.</p>
 * @public
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *             no response is returned, and instead an error message is returned.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifySubnetAttributeRequest {
  /**
   * <p>Specify <code>true</code> to indicate that network interfaces created in the
   *             specified subnet should be assigned an IPv6 address. This includes a network interface
   *             that's created when launching an instance into the subnet (the instance therefore
   *             receives an IPv6 address). </p>
   *          <p>If you enable the IPv6 addressing feature for your subnet, your network interface
   *             or instance only receives an IPv6 address if it's created using version
   *                 <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
   * @public
   */
  AssignIpv6AddressOnCreation?: AttributeBooleanValue | undefined;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces attached to instances created in the
   *             specified subnet should be assigned a public IPv4 address.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  MapPublicIpOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces  attached to instances created in the
   *             specified subnet should be assigned a customer-owned IPv4 address.</p>
   *          <p>When this value is <code>true</code>, you must specify the customer-owned IP pool using <code>CustomerOwnedIpv4Pool</code>.</p>
   * @public
   */
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   *          <p>You must set this value when you specify <code>true</code> for <code>MapCustomerOwnedIpOnLaunch</code>.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   *          <p>You must first configure a NAT gateway in a public subnet (separate from the subnet
   *            containing the IPv6-only workloads). For example, the subnet containing the NAT gateway
   *            should have a <code>0.0.0.0/0</code> route pointing to the internet gateway. For more
   *            information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough">Configure DNS64 and NAT64</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  EnableDns64?: AttributeBooleanValue | undefined;

  /**
   * <p>The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an
   *             instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance
   *             DNS name must be based on the instance ID (resource-name).</p>
   * @public
   */
  PrivateDnsHostnameTypeOnLaunch?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   * @public
   */
  EnableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1). A local network interface cannot be the primary network
   *             interface (eth0).
   *         </p>
   * @public
   */
  EnableLniAtDeviceIndex?: number | undefined;

  /**
   * <p>
   *             Specify <code>true</code> to indicate that local network interfaces at the current
   *             position should be disabled.
   *         </p>
   * @public
   */
  DisableLniAtDeviceIndex?: AttributeBooleanValue | undefined;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The network service, for example Amazon DNS, that you want to mirror.</p>
   * @public
   */
  AddNetworkServices?: TrafficMirrorNetworkService[] | undefined;

  /**
   * <p>The network service, for example Amazon DNS, that you no longer want to mirror.</p>
   * @public
   */
  RemoveNetworkServices?: TrafficMirrorNetworkService[] | undefined;

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
export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * <p>The Traffic Mirror filter that the network service is associated with.</p>
   * @public
   */
  TrafficMirrorFilter?: TrafficMirrorFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorFilterRuleField = {
  description: "description",
  destination_port_range: "destination-port-range",
  protocol: "protocol",
  source_port_range: "source-port-range",
} as const;

/**
 * @public
 */
export type TrafficMirrorFilterRuleField =
  (typeof TrafficMirrorFilterRuleField)[keyof typeof TrafficMirrorFilterRuleField];

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>The type of traffic to assign to the rule.</p>
   * @public
   */
  TrafficDirection?: TrafficDirection | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * <p>The action to assign to the rule.</p>
   * @public
   */
  RuleAction?: TrafficMirrorRuleAction | undefined;

  /**
   * <p>The destination ports that are associated with the Traffic Mirror rule.</p>
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The port range to assign to the Traffic Mirror rule.</p>
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The protocol, for example TCP, to assign to the Traffic Mirror rule.</p>
   * @public
   */
  Protocol?: number | undefined;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * <p>The description to assign to the Traffic Mirror rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror filter rule.</p>
   *          <p>When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</p>
   * @public
   */
  RemoveFields?: TrafficMirrorFilterRuleField[] | undefined;

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
export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * <note>
   *             <p>Tags are not returned for ModifyTrafficMirrorFilterRule.</p>
   *          </note>
   *          <p>A Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorSessionField = {
  description: "description",
  packet_length: "packet-length",
  virtual_network_id: "virtual-network-id",
} as const;

/**
 * @public
 */
export type TrafficMirrorSessionField = (typeof TrafficMirrorSessionField)[keyof typeof TrafficMirrorSessionField];

/**
 * @public
 */
export interface ModifyTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.</p>
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.</p>
   *          <p>For sessions with Network Load Balancer (NLB) traffic mirror targets, the default <code>PacketLength</code> will be set to 8500. Valid values are 1-8500. Setting a <code>PacketLength</code> greater than 8500 will result in an error response.</p>
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   * @public
   */
  SessionNumber?: number | undefined;

  /**
   * <p>The virtual network ID of the Traffic Mirror session.</p>
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * <p>The description to assign to the Traffic Mirror session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror session.</p>
   *          <p>When you remove a property from a Traffic Mirror session, the property is set to the default.</p>
   * @public
   */
  RemoveFields?: TrafficMirrorSessionField[] | undefined;

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
export interface ModifyTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSession?: TrafficMirrorSession | undefined;
}

/**
 * <p>The transit gateway options.</p>
 * @public
 */
export interface ModifyTransitGatewayOptions {
  /**
   * <p>Adds IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   * @public
   */
  AddTransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * <p>Removes CIDR blocks for the transit gateway.</p>
   * @public
   */
  RemoveTransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support.</p>
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * <p>Enable or disable DNS support.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests.</p>
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * <p>Enable or disable automatic association with the default association route table.</p>
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * <p>The ID of the default association route table.</p>
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table.</p>
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * <p>The ID of the default propagation route table.</p>
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *             The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   *          <p>The modify ASN operation is not allowed on a transit gateway if it has the following attachments:</p>
   *          <ul>
   *             <li>
   *                <p>Dynamic VPN</p>
   *             </li>
   *             <li>
   *                <p>Static VPN</p>
   *             </li>
   *             <li>
   *                <p>Direct Connect Gateway</p>
   *             </li>
   *             <li>
   *                <p>Connect</p>
   *             </li>
   *          </ul>
   *          <p>You must first delete all transit gateway attachments configured prior to modifying the ASN on
   *             the transit gateway.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The description for the transit gateway.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The options to modify.</p>
   * @public
   */
  Options?: ModifyTransitGatewayOptions | undefined;

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
export interface ModifyTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

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
export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Enable or disable IPv6 support. The default is <code>enable</code>.</p>
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.</p>
   * @public
   */
  AddSubnetIds?: string[] | undefined;

  /**
   * <p>The IDs of one or more subnets to remove.</p>
   * @public
   */
  RemoveSubnetIds?: string[] | undefined;

  /**
   * <p>The new VPC attachment options.</p>
   * @public
   */
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions | undefined;

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
export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the modified attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * <p>Describes the port range for a Verified Access endpoint.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointPortRange {
  /**
   * <p>The start of the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>The CIDR options for a Verified Access endpoint.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointCidrOptions {
  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the options when modifying a Verified Access endpoint with the
 *             <code>network-interface</code> type.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointEniOptions {
  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>The RDS options for a Verified Access endpoint.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointRdsOptions {
  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The RDS endpoint.</p>
   * @public
   */
  RdsEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * <p>The load balancer details if creating the Verified Access endpoint as
   *          <code>load-balancer</code>type.</p>
   * @public
   */
  LoadBalancerOptions?: ModifyVerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * <p>The network interface options.</p>
   * @public
   */
  NetworkInterfaceOptions?: ModifyVerifiedAccessEndpointEniOptions | undefined;

  /**
   * <p>A description for the Verified Access endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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

  /**
   * <p>The RDS options.</p>
   * @public
   */
  RdsOptions?: ModifyVerifiedAccessEndpointRdsOptions | undefined;

  /**
   * <p>The CIDR options.</p>
   * @public
   */
  CidrOptions?: ModifyVerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointResult {
  /**
   * <p>Details about the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

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

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyResult {
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

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>A description for the Verified Access group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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
export interface ModifyVerifiedAccessGroupResult {
  /**
   * <p>Details about the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

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

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyResult {
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

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>A description for the Verified Access instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The custom subdomain.</p>
   * @public
   */
  CidrEndpointsCustomSubDomain?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceResult {
  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * <p>Options for CloudWatch Logs as a logging destination.</p>
 * @public
 */
export interface VerifiedAccessLogCloudWatchLogsDestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The ID of the CloudWatch Logs log group.</p>
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * <p>Describes Amazon Kinesis Data Firehose logging options.</p>
 * @public
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The ID of the delivery stream.</p>
   * @public
   */
  DeliveryStream?: string | undefined;
}

/**
 * <p>Options for Amazon S3 as a logging destination.</p>
 * @public
 */
export interface VerifiedAccessLogS3DestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The bucket name.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Amazon S3 bucket.</p>
   * @public
   */
  BucketOwner?: string | undefined;
}

/**
 * <p>Options for Verified Access logs.</p>
 * @public
 */
export interface VerifiedAccessLogOptions {
  /**
   * <p>Sends Verified Access logs to Amazon S3.</p>
   * @public
   */
  S3?: VerifiedAccessLogS3DestinationOptions | undefined;

  /**
   * <p>Sends Verified Access logs to CloudWatch Logs.</p>
   * @public
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestinationOptions | undefined;

  /**
   * <p>Sends Verified Access logs to Kinesis.</p>
   * @public
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestinationOptions | undefined;

  /**
   * <p>The logging version.</p>
   *          <p>Valid values: <code>ocsf-0.1</code> | <code>ocsf-1.0.0-rc.2</code>
   *          </p>
   * @public
   */
  LogVersion?: string | undefined;

  /**
   * <p>Indicates whether to include trust data sent by trust providers in the logs.</p>
   * @public
   */
  IncludeTrustContext?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>The configuration options for Verified Access instances.</p>
   * @public
   */
  AccessLogs: VerifiedAccessLogOptions | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationResult {
  /**
   * <p>The logging configuration for the Verified Access instance.</p>
   * @public
   */
  LoggingConfiguration?: VerifiedAccessInstanceLoggingConfiguration | undefined;
}

/**
 * <p>Modifies the configuration of the specified device-based Amazon Web Services Verified Access trust provider.</p>
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderDeviceOptions {
  /**
   * <p> The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.</p>
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * <p>Describes the OpenID Connect (OIDC) options.</p>
 * @public
 */
export interface ModifyVerifiedAccessNativeApplicationOidcOptions {
  /**
   * <p>The public signing key endpoint.</p>
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

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
   * <p>The set of user claims to be requested from the IdP.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * <p>Options for an OpenID Connect-compatible user-identity trust provider.</p>
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderOidcOptions {
  /**
   * <p>The OIDC issuer.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The OIDC authorization endpoint.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The OIDC token endpoint.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The OIDC user info endpoint.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The client identifier.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The client secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * <p>The options for an OpenID Connect-compatible user-identity trust provider.</p>
   * @public
   */
  OidcOptions?: ModifyVerifiedAccessTrustProviderOidcOptions | undefined;

  /**
   * <p>The options for a device-based trust provider. This parameter is required when the
   *          provider type is <code>device</code>.</p>
   * @public
   */
  DeviceOptions?: ModifyVerifiedAccessTrustProviderDeviceOptions | undefined;

  /**
   * <p>A description for the Verified Access trust provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * <p>The OpenID Connect (OIDC) options.</p>
   * @public
   */
  NativeApplicationOidcOptions?: ModifyVerifiedAccessNativeApplicationOidcOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeRequest {
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

  /**
   * <p>The target size of the volume, in GiB. The target volume size must be greater than or
   *       equal to the existing size of the volume.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 4 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 4 - 65,536 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1 - 1024 GiB</p>
   *             </li>
   *          </ul>
   *          <p>Default: The existing size is retained.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The target EBS volume type of the volume. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the <i>Amazon EBS User Guide</i>.</p>
   *          <p>Default: The existing type is retained.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The target IOPS rate of the volume. This parameter is valid only for <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100 - 64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100 - 256,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io2</code> volumes, you can achieve up to 256,000 IOPS on
   * <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">instances
   * built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.</p>
   *          <p>Default: The existing value is retained if you keep the same volume type. If you change
   *       the volume type to <code>io1</code>, <code>io2</code>, or <code>gp3</code>, the default is 3,000.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The target throughput of the volume, in MiB/s. This parameter is valid only for <code>gp3</code> volumes.
   *       The maximum value is 1,000.</p>
   *          <p>Default: The existing value is retained if the source and target volume type is <code>gp3</code>.
   *       Otherwise, the default value is 125.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   * 	  volume to up to 16 <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">
   * 			Nitro-based instances</a> in the same Availability Zone. This parameter is
   * 		supported with <code>io1</code> and <code>io2</code> volumes only. For more information, see
   * 	  <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html">
   * 			Amazon EBS Multi-Attach</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeResult {
  /**
   * <p>Information about the volume modification.</p>
   * @public
   */
  VolumeModification?: VolumeModification | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeAttributeRequest {
  /**
   * <p>Indicates whether the volume should be auto-enabled for I/O operations.</p>
   * @public
   */
  AutoEnableIO?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId: string | undefined;

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
export interface ModifyVpcAttributeRequest {
  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</p>
   * @public
   */
  EnableDnsHostnames?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to
   * 			the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP
   * 			address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon
   * 			provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is
   * 			not enabled.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</p>
   * @public
   */
  EnableDnsSupport?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   * @public
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessExclusionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of an exclusion.</p>
   * @public
   */
  ExclusionId: string | undefined;

  /**
   * <p>The exclusion mode for internet gateway traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-bidirectional</code>: Allow all internet traffic to and from the excluded VPCs and subnets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allow-egress</code>: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayExclusionMode: InternetGatewayExclusionMode | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessExclusionResult {
  /**
   * <p>Details related to the exclusion.</p>
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessOptionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The mode of VPC BPA.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>off</code>: VPC BPA is not enabled and traffic is allowed to and from internet gateways and egress-only internet gateways in this Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-bidirectional</code>: Block all traffic to and from internet gateways and egress-only internet gateways in this Region (except for excluded VPCs and subnets).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-ingress</code>: Block all internet traffic to the VPCs in this Region (except for VPCs or subnets which are excluded). Only traffic to and from NAT gateways and egress-only internet gateways is allowed because these gateways only allow outbound connections to be established.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayBlockMode: InternetGatewayBlockMode | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessOptionsResult {
  /**
   * <p>Details related to the VPC Block Public Access (BPA) options.</p>
   * @public
   */
  VpcBlockPublicAccessOptions?: VpcBlockPublicAccessOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the endpoint.</p>
   * @public
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>(Gateway endpoint) Specify <code>true</code> to reset the policy document to the
   *             default policy. The default policy allows full access to the service.</p>
   * @public
   */
  ResetPolicy?: boolean | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must
   *             be in valid JSON format.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>(Gateway endpoint) The IDs of the route tables to associate with the endpoint.</p>
   * @public
   */
  AddRouteTableIds?: string[] | undefined;

  /**
   * <p>(Gateway endpoint) The IDs of the route tables to disassociate from the endpoint.</p>
   * @public
   */
  RemoveRouteTableIds?: string[] | undefined;

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to serve the endpoint.
   *             For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   * @public
   */
  AddSubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the subnets from which to remove the endpoint.</p>
   * @public
   */
  RemoveSubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces.</p>
   * @public
   */
  AddSecurityGroupIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the security groups to disassociate from the endpoint network interfaces.</p>
   * @public
   */
  RemoveSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The DNS options for the endpoint.</p>
   * @public
   */
  DnsOptions?: DnsOptionsSpecification | undefined;

  /**
   * <p>(Interface endpoint) Indicates whether a private hosted zone is associated with the VPC.</p>
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * <p>The subnet configurations for the endpoint.</p>
   * @public
   */
  SubnetConfigurations?: SubnetConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the notification.</p>
   * @public
   */
  ConnectionNotificationId: string | undefined;

  /**
   * <p>The ARN for the SNS topic for the notification.</p>
   * @public
   */
  ConnectionNotificationArn?: string | undefined;

  /**
   * <p>The events for the endpoint. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   * @public
   */
  ConnectionEvents?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId: string | undefined;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the endpoint service.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>(Interface endpoint configuration) Removes the private DNS name of the endpoint service.</p>
   * @public
   */
  RemovePrivateDnsName?: boolean | undefined;

  /**
   * <p>Indicates whether requests to create an endpoint to the service must be accepted.</p>
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to add to the service
   *             configuration.</p>
   * @public
   */
  AddNetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to remove from the service
   *             configuration.</p>
   * @public
   */
  RemoveNetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to the service configuration.</p>
   * @public
   */
  AddGatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from the service configuration.</p>
   * @public
   */
  RemoveGatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The IP address types to add to the service configuration.</p>
   * @public
   */
  AddSupportedIpAddressTypes?: string[] | undefined;

  /**
   * <p>The IP address types to remove from the service configuration.</p>
   * @public
   */
  RemoveSupportedIpAddressTypes?: string[] | undefined;

  /**
   * <p>The supported Regions to add to the service configuration.</p>
   * @public
   */
  AddSupportedRegions?: string[] | undefined;

  /**
   * <p>The supported Regions to remove from the service configuration.</p>
   * @public
   */
  RemoveSupportedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePayerResponsibilityRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId: string | undefined;

  /**
   * <p>The entity that is responsible for the endpoint costs. The default is the endpoint owner.
   *             If you set the payer responsibility to the service owner, you cannot set it back to the
   *             endpoint owner.</p>
   * @public
   */
  PayerResponsibility: PayerResponsibility | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePayerResponsibilityResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are granted to the principals in this list.
   * 	        To grant permissions to all principals, specify an asterisk (*).</p>
   * @public
   */
  AddAllowedPrincipals?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are revoked for principals in this list.</p>
   * @public
   */
  RemoveAllowedPrincipals?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about the added principals.</p>
   * @public
   */
  AddedPrincipals?: AddedPrincipal[] | undefined;

  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * <p>The VPC peering connection options.</p>
 * @public
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * <p>If true, enables a local VPC to resolve public DNS hostnames to private IP addresses
   *         when queried from instances in the peer VPC.</p>
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * <p>The VPC peering connection options for the accepter VPC.</p>
   * @public
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The VPC peering connection options for the requester VPC.</p>
   * @public
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest | undefined;

  /**
   * <p>The ID of the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * <p>Describes the VPC peering connection options.</p>
 * @public
 */
export interface PeeringConnectionOptions {
  /**
   * <p>If true, the public DNS hostnames of instances in the specified VPC resolve to private
   *             IP addresses when queried from instances in the peer VPC.</p>
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * <p>Information about the VPC peering connection options for the accepter VPC.</p>
   * @public
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions | undefined;

  /**
   * <p>Information about the VPC peering connection options for the requester VPC.</p>
   * @public
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcTenancy = {
  default: "default",
} as const;

/**
 * @public
 */
export type VpcTenancy = (typeof VpcTenancy)[keyof typeof VpcTenancy];

/**
 * @public
 */
export interface ModifyVpcTenancyRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The instance tenancy attribute for the VPC. </p>
   * @public
   */
  InstanceTenancy: VpcTenancy | undefined;

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
export interface ModifyVpcTenancyResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an
   *             error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;

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
export interface ModifyVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface ModifyVpnConnectionOptionsRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   * @public
   */
  LocalIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   * @public
   */
  RemoteIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   * @public
   */
  LocalIpv6NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   * @public
   */
  RemoteIpv6NetworkCidr?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnConnectionOptionsResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelCertificateRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

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
export interface ModifyVpnTunnelCertificateResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * <p>The Amazon Web Services Site-to-Site VPN tunnel options to modify.</p>
 * @public
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same virtual private gateway. </p>
   *          <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TunnelInsideCidr?: string | undefined;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *          <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   * @public
   */
  TunnelInsideIpv6Cidr?: string | undefined;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   *          <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 28,800.</p>
   *          <p>Default: <code>28800</code>
   *          </p>
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *          <p>Default: <code>3600</code>
   *          </p>
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *          <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *          <p>Default: <code>270</code>
   *          </p>
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *          <p>Constraints: A value between 0 and 100.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *          <p>Constraints: A value between 64 and 2048.</p>
   *          <p>Default: <code>1024</code>
   *          </p>
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * <p>The number of seconds after which a DPD timeout occurs. A DPD timeout of 40 seconds means that the VPN endpoint will consider the peer dead 30 seconds after the first failed keep-alive.</p>
   *          <p>Constraints: A value greater than or equal to 30.</p>
   *          <p>Default: <code>40</code>
   *          </p>
   * @public
   */
  DPDTimeoutSeconds?: number | undefined;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *          <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *          <p>Default: <code>clear</code>
   *          </p>
   * @public
   */
  DPDTimeoutAction?: string | undefined;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   * @public
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   * @public
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   * @public
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   * @public
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   * @public
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[] | undefined;

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   * @public
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[] | undefined;

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *          <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   * @public
   */
  IKEVersions?: IKEVersionsRequestListValue[] | undefined;

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *          <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *          <p>Default: <code>add</code>
   *          </p>
   * @public
   */
  StartupAction?: string | undefined;

  /**
   * <p>Options for logging VPN tunnel activity.</p>
   * @public
   */
  LogOptions?: VpnTunnelLogOptionsSpecification | undefined;

  /**
   * <p>Turn on or off tunnel endpoint lifecycle control feature.</p>
   * @public
   */
  EnableTunnelLifecycleControl?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>The tunnel options to modify.</p>
   * @public
   */
  TunnelOptions: ModifyVpnTunnelOptionsSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Choose whether or not to trigger immediate tunnel replacement. This is only applicable when turning on or off <code>EnableTunnelLifecycleControl</code>.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   * @public
   */
  SkipTunnelReplacement?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface MonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the monitoring of an instance.</p>
 * @public
 */
export interface InstanceMonitoring {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The monitoring for the instance.</p>
   * @public
   */
  Monitoring?: Monitoring | undefined;
}

/**
 * @public
 */
export interface MonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   * @public
   */
  InstanceMonitorings?: InstanceMonitoring[] | undefined;
}

/**
 * @public
 */
export interface MoveAddressToVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  inClassic: "InClassic",
  inVpc: "InVpc",
  moveInProgress: "MoveInProgress",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface MoveAddressToVpcResult {
  /**
   * <p>The allocation ID for the Elastic IP address.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The status of the move of the IP address.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The BYOIP CIDR.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The IPAM pool ID.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   * @public
   */
  IpamPoolOwner: string | undefined;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamResult {
  /**
   * <p>The BYOIP CIDR.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface MoveCapacityReservationInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p> The ID of the Capacity Reservation from which you want to move capacity. </p>
   * @public
   */
  SourceCapacityReservationId: string | undefined;

  /**
   * <p> The ID of the Capacity Reservation that you want to move capacity into. </p>
   * @public
   */
  DestinationCapacityReservationId: string | undefined;

  /**
   * <p>The number of instances that you want to move from the source Capacity Reservation.
   * 		</p>
   * @public
   */
  InstanceCount: number | undefined;
}

/**
 * @public
 */
export interface MoveCapacityReservationInstancesResult {
  /**
   * <p> Information about the source Capacity Reservation. </p>
   * @public
   */
  SourceCapacityReservation?: CapacityReservation | undefined;

  /**
   * <p> Information about the destination Capacity Reservation. </p>
   * @public
   */
  DestinationCapacityReservation?: CapacityReservation | undefined;

  /**
   * <p> The number of instances that were moved from the source Capacity Reservation to the
   * 			destination Capacity Reservation. </p>
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific
 *           Amazon Web Services account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Configuring your BYOIP address range</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   * @public
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrRequest {
  /**
   * <p>The public IPv4 or IPv6 address range, in CIDR notation. The most specific IPv4 prefix that you can
   *           specify is /24. The most specific IPv6 address range that you can bring is /48 for CIDRs that are publicly advertisable and /56 for CIDRs that are not publicly advertisable. The address range cannot overlap with another address range that you've
   *          brought to this or another Region.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address
   *          range to Amazon using BYOIP.</p>
   * @public
   */
  CidrAuthorizationContext?: CidrAuthorizationContext | undefined;

  /**
   * <p>(IPv6 only) Indicate whether the address range will be publicly advertised to the
   *             internet.</p>
   *          <p>Default: true</p>
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * <p>A description for the address range and the address pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply to the address pool.</p>
   * @public
   */
  PoolTagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MultiRegion?: boolean | undefined;

  /**
   * <p>If you have <a href="https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html">Local Zones</a> enabled, you can choose a network border group for Local Zones when you provision and advertise a BYOIPv4 CIDR. Choose the network border group carefully as the EIP and the Amazon Web Services resource it is associated with must reside in the same network border group.</p>
   *          <p>You can provision BYOIP address ranges to and advertise them in the following Local Zone network border groups:</p>
   *          <ul>
   *             <li>
   *                <p>us-east-1-dfw-2</p>
   *             </li>
   *             <li>
   *                <p>us-west-2-lax-1</p>
   *             </li>
   *             <li>
   *                <p>us-west-2-phx-2</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You cannot provision or advertise BYOIPv6 address ranges in Local Zones at this time.</p>
   *          </note>
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * <p>Provides authorization for Amazon to bring an Autonomous System Number (ASN) to a specific Amazon Web Services account using bring your own ASN (BYOASN).
 *             For details on the format of the message and signature, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @public
 */
export interface AsnAuthorizationContext {
  /**
   * <p>The authorization context's message.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The authorization context's signature.</p>
   * @public
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>An IPAM ID.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>A public 2-byte or 4-byte ASN.</p>
   * @public
   */
  Asn: string | undefined;

  /**
   * <p>An ASN authorization context.</p>
   * @public
   */
  AsnAuthorizationContext: AsnAuthorizationContext | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnResult {
  /**
   * <p>An ASN and BYOIP CIDR association.</p>
   * @public
   */
  Byoasn?: Byoasn | undefined;
}

/**
 * <p>A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.</p>
 * @public
 */
export interface IpamCidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   * @public
   */
  Signature?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VerificationMethod = {
  dns_token: "dns-token",
  remarks_x509: "remarks-x509",
} as const;

/**
 * @public
 */
export type VerificationMethod = (typeof VerificationMethod)[keyof typeof VerificationMethod];

/**
 * @public
 */
export interface ProvisionIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool to which you want to assign a CIDR.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR you want to assign to the IPAM pool. Either "NetmaskLength" or "Cidr" is required. This value will be null if you specify "NetmaskLength" and will be filled in during the provisioning process.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring a specified IP address range to Amazon using BYOIP. This option only applies to IPv4 and IPv6 pools in the public scope.</p>
   * @public
   */
  CidrAuthorizationContext?: IpamCidrAuthorizationContext | undefined;

  /**
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. Either "NetmaskLength" or "Cidr" is required.</p>
   * @public
   */
  NetmaskLength?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The method for verifying control of a public IP address range. Defaults to <code>remarks-x509</code> if not specified. This option only applies to IPv4 and IPv6 pools in the public scope.</p>
   * @public
   */
  VerificationMethod?: VerificationMethod | undefined;

  /**
   * <p>Verification token ID. This option only applies to IPv4 and IPv6 pools in the public scope.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenId?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamPoolCidrResult {
  /**
   * <p>Information about the provisioned CIDR.</p>
   * @public
   */
  IpamPoolCidr?: IpamPoolCidr | undefined;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you would like to use to allocate this CIDR.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The ID of the public IPv4 pool you would like to use for this CIDR.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The netmask length of the CIDR you would like to allocate to the public IPv4 pool. The least specific netmask length you can define is 24.</p>
   * @public
   */
  NetmaskLength: number | undefined;

  /**
   * <p>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">Local Zone availability</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrResult {
  /**
   * <p>The ID of the pool that you want to provision the CIDR to.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>Information about the address range of the public IPv4 pool.</p>
   * @public
   */
  PoolAddressRange?: PublicIpv4PoolRange | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply to the Capacity Block during launch.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The ID of the Capacity Block offering.</p>
   * @public
   */
  CapacityBlockOfferingId: string | undefined;

  /**
   * <p>The type of operating system for which to reserve capacity.</p>
   * @public
   */
  InstancePlatform: CapacityReservationInstancePlatform | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockResult {
  /**
   * <p>The Capacity Reservation.</p>
   * @public
   */
  CapacityReservation?: CapacityReservation | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockExtensionRequest {
  /**
   * <p>The ID of the Capacity Block extension offering to purchase.</p>
   * @public
   */
  CapacityBlockExtensionOfferingId: string | undefined;

  /**
   * <p>The ID of the Capacity reservation to be extended.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockExtensionResult {
  /**
   * <p>The purchased Capacity Block extensions. </p>
   * @public
   */
  CapacityBlockExtensions?: CapacityBlockExtension[] | undefined;
}

/**
 * @public
 */
export interface PurchaseHostReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code>, <code>LimitPrice</code>, and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation will be associated.</p>
   * @public
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The specified limit is checked against the total upfront cost of the reservation
   *             (calculated as the offering's upfront cost multiplied by the host count). If the total
   *             upfront cost is greater than the specified price limit, the request fails. This is used
   *             to ensure that the purchase does not exceed the expected upfront cost of the purchase.
   *             At this time, the only supported currency is <code>USD</code>. For example, to indicate
   *             a limit price of USD 100, specify 100.00.</p>
   * @public
   */
  LimitPrice?: string | undefined;

  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  OfferingId: string | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host Reservation during purchase.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface PurchaseHostReservationResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>Describes the details of the purchase.</p>
   * @public
   */
  Purchase?: Purchase[] | undefined;

  /**
   * <p>The total hourly price of the reservation calculated per hour.</p>
   * @public
   */
  TotalHourlyPrice?: string | undefined;

  /**
   * <p>The total amount charged to your account when you purchase the reservation.</p>
   * @public
   */
  TotalUpfrontPrice?: string | undefined;
}

/**
 * <p>Describes the limit price of a Reserved Instance offering.</p>
 * @public
 */
export interface ReservedInstanceLimitPrice {
  /**
   * <p>Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total order (instanceCount * price).</p>
   * @public
   */
  Amount?: number | undefined;

  /**
   * <p>The currency in which the <code>limitPrice</code> amount is specified.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;
}

/**
 * <p>Contains the parameters for PurchaseReservedInstancesOffering.</p>
 * @public
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * <p>The number of Reserved Instances to purchase.</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   * @public
   */
  ReservedInstancesOfferingId: string | undefined;

  /**
   * <p>The time at which to purchase the Reserved Instance, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  PurchaseTime?: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.</p>
   * @public
   */
  LimitPrice?: ReservedInstanceLimitPrice | undefined;
}

/**
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 * @public
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * <p>The IDs of the purchased Reserved Instances. If your purchase crosses into a discounted
   *       pricing tier, the final Reserved Instances IDs might change. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html#crossing-pricing-tiers">Crossing
   *         pricing tiers</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * <p>Describes a request to purchase Scheduled Instances.</p>
 * @public
 */
export interface PurchaseRequest {
  /**
   * <p>The number of instances.</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>The purchase token.</p>
   * @public
   */
  PurchaseToken: string | undefined;
}

/**
 * <p>Contains the parameters for PurchaseScheduledInstances.</p>
 * @public
 */
export interface PurchaseScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
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

  /**
   * <p>The purchase requests.</p>
   * @public
   */
  PurchaseRequests: PurchaseRequest[] | undefined;
}

/**
 * <p>Contains the output of PurchaseScheduledInstances.</p>
 * @public
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * <p>Information about the Scheduled Instances.</p>
   * @public
   */
  ScheduledInstanceSet?: ScheduledInstance[] | undefined;
}

/**
 * @public
 */
export interface RebootInstancesRequest {
  /**
   * <p>The instance IDs.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Contains the parameters for RegisterImage.</p>
 * @public
 */
export interface RegisterImageRequest {
  /**
   * <p>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the
   *         <code>aws-exec-read</code> canned access control list (ACL) to ensure that it can be
   *       accessed by Amazon EC2. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACLs</a> in the
   *         <i>Amazon S3 Service Developer Guide</i>.</p>
   * @public
   */
  ImageLocation?: string | undefined;

  /**
   * <p>The billing product codes. Your account must be authorized to specify billing product
   *       codes.</p>
   *          <p>If your account is not authorized to specify billing product codes, you can publish AMIs
   *       that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller
   *       on the Amazon Web Services Marketplace. For more information, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/user-guide-for-sellers.html">Getting started as a
   *         seller</a> and <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html">AMI-based products</a> in the
   *         <i>Amazon Web Services Marketplace Seller Guide</i>.</p>
   * @public
   */
  BillingProducts?: string[] | undefined;

  /**
   * <p>The boot mode of the AMI. A value of <code>uefi-preferred</code> indicates that the AMI
   *       supports both UEFI and Legacy BIOS.</p>
   *          <note>
   *             <p>The operating system contained in the AMI must be configured to support the specified
   *         boot mode.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * <p>Set to <code>v2.0</code> to enable Trusted Platform Module (TPM) support. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TpmSupport?: TpmSupportValues | undefined;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *         <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  UefiData?: string | undefined;

  /**
   * <p>Set to <code>v2.0</code> to indicate that IMDSv2 is specified in the AMI. Instances
   *       launched from this AMI will have <code>HttpTokens</code> automatically set to
   *         <code>required</code> so that, by default, the instance requires that IMDSv2 is used when
   *       requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to
   *         <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>If you set the value to <code>v2.0</code>, make sure that your AMI software can support
   *         IMDSv2.</p>
   *          </note>
   * @public
   */
  ImdsSupport?: ImdsSupportValues | undefined;

  /**
   * <p>The tags to apply to the AMI.</p>
   *          <p>To tag the AMI, the value for <code>ResourceType</code> must be <code>image</code>. If you
   *       specify another value for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI after it has been registered, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A name for your AMI.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces
   *       ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or
   *       underscores(_)</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for your AMI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The architecture of the AMI.</p>
   *          <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>. For instance store-backed AMIs, the
   *       architecture specified in the manifest file.</p>
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * <p>The ID of the kernel.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * <p>The block device mapping entries.</p>
   *          <p>If you specify an Amazon EBS volume using the ID of an Amazon EBS snapshot, you can't specify the
   *       encryption state of the volume.</p>
   *          <p>If you create an AMI on an Outpost, then all backing snapshots must be on the same Outpost
   *       or in the Region of that Outpost. AMIs on an Outpost that include local snapshots can be used
   *       to launch instances on the same Outpost only. For more information, <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#ami">Amazon EBS local
   *         snapshots on Outposts</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>The type of virtualization (<code>hvm</code> | <code>paravirtual</code>).</p>
   *          <p>Default: <code>paravirtual</code>
   *          </p>
   * @public
   */
  VirtualizationType?: string | undefined;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *       Function interface for the AMI and any instances that you launch from the AMI.</p>
   *          <p>There is no way to disable <code>sriovNetSupport</code> at this time.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make
   *       instances launched from the AMI unreachable.</p>
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the AMI and any
   *       instances that you launch from the AMI.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make
   *       instances launched from the AMI unreachable.</p>
   * @public
   */
  EnaSupport?: boolean | undefined;
}

/**
 * <p>Contains the output of RegisterImage.</p>
 * @public
 */
export interface RegisterImageResult {
  /**
   * <p>The ID of the newly registered AMI.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * <p>Information about the tag keys to register for the current Region. You can either specify
 *       	individual tag keys or register all tag keys in the current Region. You must specify either
 *       	<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 * @public
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to register all tag keys in the current Region. Specify <code>true</code>
   *       	to register all tag keys.</p>
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;

  /**
   * <p>The tag keys to register.</p>
   * @public
   */
  InstanceTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Information about the tag keys to register.</p>
   * @public
   */
  InstanceTagAttribute: RegisterInstanceTagAttributeRequest | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The group members' network interface IDs to register with the  transit gateway multicast group.</p>
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the registered  transit gateway multicast group members.</p>
 * @public
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The ID of the registered network interfaces.</p>
   * @public
   */
  RegisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the registered  transit gateway multicast group members.</p>
   * @public
   */
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The group sources' network interface IDs to register with the  transit gateway multicast group.</p>
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the members registered with the  transit gateway multicast group.</p>
 * @public
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The IDs of the network interfaces members registered with the  transit gateway multicast group.</p>
   * @public
   */
  RegisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the  transit gateway multicast group sources.</p>
   * @public
   */
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources | undefined;
}

/**
 * @public
 */
export interface RejectCapacityReservationBillingOwnershipRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Capacity Reservation for which to reject the request.</p>
   * @public
   */
  CapacityReservationId: string | undefined;
}

/**
 * @public
 */
export interface RejectCapacityReservationBillingOwnershipResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

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
export interface RejectTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
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
export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayVpcAttachmentRequest {
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
export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsResult {
  /**
   * <p>Information about the endpoints that were not rejected, if applicable.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ReleaseAddressRequest {
  /**
   * <p>The allocation ID. This parameter is required.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   *          <p>If you provide an incorrect network border group, you receive an <code>InvalidAddress.NotFound</code> error.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

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
export interface ReleaseHostsRequest {
  /**
   * <p>The IDs of the Dedicated Hosts to release.</p>
   * @public
   */
  HostIds: string[] | undefined;
}

/**
 * @public
 */
export interface ReleaseHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully released.</p>
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts that could not be released, including an error
   *             message.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool which contains the allocation you want to release.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR of the allocation you want to release.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The ID of the allocation.</p>
   * @public
   */
  IpamPoolAllocationId: string | undefined;
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationResult {
  /**
   * <p>Indicates if the release was successful.</p>
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the existing IAM instance profile association.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
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
export interface ImageCriterionRequest {
  /**
   * <p>A list of image providers whose AMIs are discoverable and useable in the account. Up to a
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
   *             <code>none</code>: Allow AMIs created by your own account only. When <code>none</code> is
   *       specified, no other values can be specified.</p>
   * @public
   */
  ImageProviders?: string[] | undefined;
}

/**
 * @public
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsRequest {
  /**
   * <p>The list of criteria that are evaluated to determine whether AMIs are discoverable and
   *       usable in the account in the specified Amazon Web Services Region.</p>
   * @public
   */
  ImageCriteria?: ImageCriterionRequest[] | undefined;

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
export interface ReplaceImageCriteriaInAllowedImagesSettingsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the current association between the original network ACL and the subnet.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The ID of the new network ACL to associate with the subnet.</p>
   * @public
   */
  NetworkAclId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   * @public
   */
  NewAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the ACL.</p>
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number of the entry to replace.</p>
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *            protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   *            allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   *            protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   *            codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   *            and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   * @public
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   * @public
   */
  RuleAction: RuleAction | undefined;

  /**
   * <p>Indicates whether to replace the egress rule.</p>
   *          <p>Default: If no value is specified, we replace the ingress rule.</p>
   * @public
   */
  Egress: boolean | undefined;

  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   *                 <code>172.16.0.0/24</code>).</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:bd8:1234:1a00::/64</code>).</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   * @public
   */
  PortRange?: PortRange | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteRequest {
  /**
   * <p>The ID of the prefix list for the route.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>Specifies whether to reset the local route to its default target (<code>local</code>).</p>
   * @public
   */
  LocalTarget?: boolean | undefined;

  /**
   * <p>The ID of a transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>[IPv4 traffic only] The ID of a carrier gateway.</p>
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * <p>The IPv4 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of an internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The IPv6 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID of a network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The ID of the new route table to associate with the subnet.</p>
   * @public
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   * @public
   */
  NewAssociationId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  AssociationState?: RouteTableAssociationState | undefined;
}

/**
 * @public
 */
export interface ReplaceTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for the destination match. Routing decisions are based on the most specific match.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether traffic matching this route is to be dropped.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

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
export interface ReplaceTransitGatewayRouteResult {
  /**
   * <p>Information about the modified route.</p>
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelRequest {
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
   * <p>Trigger pending tunnel endpoint maintenance.</p>
   * @public
   */
  ApplyPendingMaintenance?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelResult {
  /**
   * <p>Confirmation of replace tunnel operation.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportInstanceReasonCodes = {
  instance_stuck_in_state: "instance-stuck-in-state",
  not_accepting_credentials: "not-accepting-credentials",
  other: "other",
  password_not_available: "password-not-available",
  performance_ebs_volume: "performance-ebs-volume",
  performance_instance_store: "performance-instance-store",
  performance_network: "performance-network",
  performance_other: "performance-other",
  unresponsive: "unresponsive",
} as const;

/**
 * @public
 */
export type ReportInstanceReasonCodes = (typeof ReportInstanceReasonCodes)[keyof typeof ReportInstanceReasonCodes];

/**
 * @public
 * @enum
 */
export const ReportStatusType = {
  impaired: "impaired",
  ok: "ok",
} as const;

/**
 * @public
 */
export type ReportStatusType = (typeof ReportStatusType)[keyof typeof ReportStatusType];

/**
 * @public
 */
export interface ReportInstanceStatusRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The instances.</p>
   * @public
   */
  Instances: string[] | undefined;

  /**
   * <p>The status of all instances listed.</p>
   * @public
   */
  Status: ReportStatusType | undefined;

  /**
   * <p>The time at which the reported instance health state began.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time at which the reported instance health state ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The reason codes that describe the health state of your instance.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-stuck-in-state</code>: My instance is stuck in a state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unresponsive</code>: My instance is unresponsive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>not-accepting-credentials</code>: My instance is not accepting my
   *                     credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>password-not-available</code>: A password is not available for my
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-network</code>: My instance is experiencing performance
   *                     problems that I believe are network related.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-instance-store</code>: My instance is experiencing performance
   *                     problems that I believe are related to the instance stores.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-ebs-volume</code>: My instance is experiencing performance
   *                     problems that I believe are related to an EBS volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-other</code>: My instance is experiencing performance
   *                     problems.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>other</code>: [explain using the description parameter]</p>
   *             </li>
   *          </ul>
   * @public
   */
  ReasonCodes: ReportInstanceReasonCodes[] | undefined;

  /**
   * <p>Descriptive text about the health state of your instance.</p>
   *
   * @deprecated
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Contains the parameters for RequestSpotFleet.</p>
 * @public
 */
export interface RequestSpotFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The configuration for the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

/**
 * <p>Contains the output of RequestSpotFleet.</p>
 * @public
 */
export interface RequestSpotFleetResponse {
  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * <p>Describes the launch specification for an instance.</p>
 * @public
 */
export interface RequestSpotLaunchSpecification {
  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * <p>The block device mapping entries. You can't specify both a snapshot ID and an encryption value.
   *            This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume,
   *            it is not blank and its encryption status is used for the volume encryption status.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type. Only one instance type can be specified.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The ID of the kernel.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>Indicates whether basic or detailed monitoring is enabled for the instance.</p>
   *          <p>Default: Disabled</p>
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * <p>The network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The placement information for the instance.</p>
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   * @public
   */
  UserData?: string | undefined;
}

/**
 * <p>Contains the parameters for RequestSpotInstances.</p>
 * @public
 */
export interface RequestSpotInstancesRequest {
  /**
   * <p>The launch specification.</p>
   * @public
   */
  LaunchSpecification?: RequestSpotLaunchSpecification | undefined;

  /**
   * <p>The key-value pair for tagging the Spot Instance request on creation. The value for
   *             <code>ResourceType</code> must be <code>spot-instances-request</code>, otherwise the
   *             Spot Instance request fails. To tag the Spot Instance request after it has been created,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring idempotency in
   *                 Amazon EC2 API requests</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The maximum number of Spot Instances to launch.</p>
   *          <p>Default: 1</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   *          <p>Default: <code>one-time</code>
   *          </p>
   * @public
   */
  Type?: SpotInstanceType | undefined;

  /**
   * <p>The start date of the request. If this is a one-time request, the request becomes
   *             active at this date and time and remains active until all instances launch, the request
   *             expires, or the request is canceled. If the request is persistent, the request becomes
   *             active at this date and time and remains active until it expires or is canceled.</p>
   *          <p>The specified start date and time cannot be equal to the current date and time. You
   *             must specify a start date and time that occurs after the current date and time.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it. </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>ValidUntil</code> date and time is
   *                     reached. By default, the request is valid for 7 days from the date the request
   *                     was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and
   *             terminate together.</p>
   *          <p>Default: Instances are launched and terminated individually</p>
   * @public
   */
  LaunchGroup?: string | undefined;

  /**
   * <p>The user-specified name for a logical grouping of requests.</p>
   *          <p>When you specify an Availability Zone group in a Spot Instance request, all Spot
   *             Instances in the request are launched in the same Availability Zone. Instance proximity
   *             is maintained with this parameter, but the choice of Availability Zone is not. The group
   *             applies only to requests for Spot Instances of the same instance type. Any additional
   *             Spot Instance requests that are specified with the same Availability Zone group name are
   *             launched in that same Availability Zone, as long as at least one instance from the group
   *             is still active.</p>
   *          <p>If there is no active instance running in the Availability Zone group that you specify
   *             for a new Spot Instance request (all instances are terminated, the request is expired,
   *             or the maximum price you specified falls below current Spot price), then Amazon EC2 launches
   *             the instance in any Availability Zone where the constraint can be met. Consequently, the
   *             subsequent set of Spot Instances could be placed in a different zone from the original
   *             request, even if you specified the same Availability Zone group.</p>
   *          <p>Default: Instances are launched in any available Availability Zone.</p>
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;
}

/**
 * <p>Contains the output of RequestSpotInstances.</p>
 * @public
 */
export interface RequestSpotInstancesResult {
  /**
   * <p>The Spot Instance requests.</p>
   * @public
   */
  SpotInstanceRequests?: SpotInstanceRequest[] | undefined;
}

/**
 * @public
 */
export interface ResetAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   * @public
   */
  AllocationId: string | undefined;

  /**
   * <p>The attribute of the IP address.</p>
   * @public
   */
  Attribute: AddressAttributeName | undefined;

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
export interface ResetAddressAttributeResult {
  /**
   * <p>Information about the IP address.</p>
   * @public
   */
  Address?: AddressAttribute | undefined;
}

/**
 * @public
 */
export interface ResetEbsDefaultKmsKeyIdRequest {
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
export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for EBS encryption by default.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResetFpgaImageAttributeName = {
  loadPermission: "loadPermission",
} as const;

/**
 * @public
 */
export type ResetFpgaImageAttributeName =
  (typeof ResetFpgaImageAttributeName)[keyof typeof ResetFpgaImageAttributeName];

/**
 * @public
 */
export interface ResetFpgaImageAttributeRequest {
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
   * <p>The attribute.</p>
   * @public
   */
  Attribute?: ResetFpgaImageAttributeName | undefined;
}

/**
 * @public
 */
export interface ResetFpgaImageAttributeResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ResetImageAttributeName = {
  launchPermission: "launchPermission",
} as const;

/**
 * @public
 */
export type ResetImageAttributeName = (typeof ResetImageAttributeName)[keyof typeof ResetImageAttributeName];

/**
 * <p>Contains the parameters for ResetImageAttribute.</p>
 * @public
 */
export interface ResetImageAttributeRequest {
  /**
   * <p>The attribute to reset (currently you can only reset the launch permission
   *       attribute).</p>
   * @public
   */
  Attribute: ResetImageAttributeName | undefined;

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
export interface ResetInstanceAttributeRequest {
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
   * <p>The attribute to reset.</p>
   *          <important>
   *             <p>You can only reset the following attributes: <code>kernel</code> |
   *                     <code>ramdisk</code> | <code>sourceDestCheck</code>.</p>
   *          </important>
   * @public
   */
  Attribute: InstanceAttributeName | undefined;
}

/**
 * <p>Contains the parameters for ResetNetworkInterfaceAttribute.</p>
 * @public
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The source/destination checking attribute. Resets the value to <code>true</code>.</p>
   * @public
   */
  SourceDestCheck?: string | undefined;
}

/**
 * @public
 */
export interface ResetSnapshotAttributeRequest {
  /**
   * <p>The attribute to reset. Currently, only the attribute for permission to create volumes can
   *       be reset.</p>
   * @public
   */
  Attribute: SnapshotAttributeName | undefined;

  /**
   * <p>The ID of the snapshot.</p>
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
}

/**
 * @public
 */
export interface RestoreAddressToClassicRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp: string | undefined;
}

/**
 * @public
 */
export interface RestoreAddressToClassicResult {
  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The move status for the IP address.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface RestoreImageFromRecycleBinRequest {
  /**
   * <p>The ID of the AMI to restore.</p>
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
export interface RestoreImageFromRecycleBinResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionRequest {
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
   * <p>The version to restore.</p>
   * @public
   */
  PreviousVersion: number | undefined;

  /**
   * <p>The current version number for the prefix list.</p>
   * @public
   */
  CurrentVersion: number | undefined;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionResult {
  /**
   * <p>Information about the prefix list.</p>
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotFromRecycleBinRequest {
  /**
   * <p>The ID of the snapshot to restore.</p>
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
}

/**
 * @public
 */
export interface RestoreSnapshotFromRecycleBinResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *       <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The state of the snapshot.</p>
   * @public
   */
  State?: SnapshotState | undefined;

  /**
   * <p>The ID of the volume that was used to create the snapshot.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotTierRequest {
  /**
   * <p>The ID of the snapshot to restore.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>Specifies the number of days for which to temporarily restore an archived snapshot.
   *       Required for temporary restores only. The snapshot will be automatically re-archived
   *       after this period.</p>
   *          <p>To temporarily restore an archived snapshot, specify the number of days and omit
   *       the <b>PermanentRestore</b> parameter or set it to
   *       <code>false</code>.</p>
   * @public
   */
  TemporaryRestoreDays?: number | undefined;

  /**
   * <p>Indicates whether to permanently restore an archived snapshot. To permanently restore
   *       an archived snapshot, specify <code>true</code> and omit the
   *       <b>RestoreSnapshotTierRequest$TemporaryRestoreDays</b> parameter.</p>
   * @public
   */
  PermanentRestore?: boolean | undefined;

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
export interface RestoreSnapshotTierResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The date and time when the snapshot restore process started.</p>
   * @public
   */
  RestoreStartTime?: Date | undefined;

  /**
   * <p>For temporary restores only. The number of days for which the archived snapshot
   *       is temporarily restored.</p>
   * @public
   */
  RestoreDuration?: number | undefined;

  /**
   * <p>Indicates whether the snapshot is permanently restored. <code>true</code> indicates a permanent
   *       restore. <code>false</code> indicates a temporary restore.</p>
   * @public
   */
  IsPermanentRestore?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being removed.</p>
   * @public
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the Active Directory group for which to revoke access. </p>
   * @public
   */
  AccessGroupId?: string | undefined;

  /**
   * <p>Indicates whether access should be revoked for all groups for a single <code>TargetNetworkCidr</code> that earlier authorized ingress for all groups using <code>AuthorizeAllGroups</code>.
   * 			This does not impact other authorization rules that allowed ingress to the same <code>TargetNetworkCidr</code> with a specific <code>AccessGroupId</code>.</p>
   * @public
   */
  RevokeAllGroups?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressRequest {
  /**
   * <p>The IDs of the security group rules.</p>
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *            destination security group.</p>
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a destination security
   *             group.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * <p>A security group rule removed with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html">RevokeSecurityGroupEgress</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html">RevokeSecurityGroupIngress</a>.</p>
 * @public
 */
export interface RevokedSecurityGroupRule {
  /**
   * <p>A security group rule ID.</p>
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * <p>A security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>Defines if a security group rule is an outbound rule.</p>
   * @public
   */
  IsEgress?: boolean | undefined;

  /**
   * <p>The security group rule's protocol.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>The 'from' port number of the security group rule.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The 'to' port number of the security group rule.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The IPv4 CIDR of the traffic source.</p>
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * <p>The IPv6 CIDR of the traffic source.</p>
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * <p>The ID of a prefix list that's the traffic source.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of a referenced security group.</p>
   * @public
   */
  ReferencedGroupId?: string | undefined;

  /**
   * <p>A description of the revoked security group rule.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The outbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   * @public
   */
  UnknownIpPermissions?: IpPermission[] | undefined;

  /**
   * <p>Details about the revoked security group rules.</p>
   * @public
   */
  RevokedSecurityGroupRules?: RevokedSecurityGroupRule[] | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupIngressRequest {
  /**
   * <p>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *            If the protocol is ICMP, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name in the request. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *         (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).
   *         Use <code>-1</code> to specify all.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>[Default VPC] The name of the source security group. You can't specify this parameter
   *          in combination with the following parameters: the CIDR IP address range, the start of the port range,
   *          the IP protocol, and the end of the port range. The source security group must be in the same VPC.
   *          To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *          If the protocol is ICMP, this is the ICMP code or -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The IDs of the security group rules.</p>
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

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
export interface RevokeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The inbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   * @public
   */
  UnknownIpPermissions?: IpPermission[] | undefined;

  /**
   * <p>Details about the revoked security group rules.</p>
   * @public
   */
  RevokedSecurityGroupRules?: RevokedSecurityGroupRule[] | undefined;
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 * @public
 */
export interface CpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * <p>Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported
   *             with M6a, R6a, and C6a instance types only. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>
 *            Describes an elastic inference accelerator.
 *         </p>
 * @public
 */
export interface ElasticInferenceAccelerator {
  /**
   * <p>
   *         	The type of elastic inference accelerator. The possible values are <code>eia1.medium</code>, <code>eia1.large</code>, <code>eia1.xlarge</code>, <code>eia2.medium</code>, <code>eia2.large</code>, and <code>eia2.xlarge</code>.
   *         </p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>
   *             The number of elastic inference accelerators to attach to the instance.
   *         </p>
   *          <p>Default: 1</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
 *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is Amazon Web Services Nitro
 *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
 *                 Guide</i>.</p>
 * @public
 */
export interface EnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2
 *                 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface HibernationOptionsRequest {
  /**
   * <p>Set to <code>true</code> to enable your instance for hibernation.</p>
   *          <p>For Spot Instances, if you set <code>Configured</code> to <code>true</code>, either
   *             omit the <code>InstanceInterruptionBehavior</code> parameter (for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotMarketOptions.html">
   *                <code>SpotMarketOptions</code>
   *             </a>), or set it to
   *                 <code>hibernate</code>. When <code>Configured</code> is true:</p>
   *          <ul>
   *             <li>
   *                <p>If you omit <code>InstanceInterruptionBehavior</code>, it defaults to
   *                         <code>hibernate</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you set <code>InstanceInterruptionBehavior</code> to a value other than
   *                         <code>hibernate</code>, you'll get an error.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>The options for Spot Instances.</p>
 * @public
 */
export interface SpotMarketOptions {
  /**
   * <p>The maximum hourly price that you're willing to pay for a Spot Instance. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *             <p>If you specify a maximum price, it must be more than USD $0.001. Specifying a value
   *                 below USD $0.001 will result in an <code>InvalidParameterValue</code> error
   *                 message.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The Spot Instance request type. For <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances">RunInstances</a>, persistent
   *             Spot Instance requests are only supported when the instance interruption behavior is
   *             either <code>hibernate</code> or <code>stop</code>.</p>
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             Supported only for persistent requests.</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
   *                     remains active until all instances launch or you cancel the request.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>If <code>Configured</code> (for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html">
   *                <code>HibernationOptions</code>
   *             </a>) is set to <code>true</code>, the
   *                 <code>InstanceInterruptionBehavior</code> parameter is automatically set to
   *                 <code>hibernate</code>. If you set it to <code>stop</code> or
   *             <code>terminate</code>, you'll get an error.</p>
   *          <p>If <code>Configured</code> (for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html">
   *                <code>HibernationOptions</code>
   *             </a>) is set to <code>false</code> or
   *                 <code>null</code>, the <code>InstanceInterruptionBehavior</code> parameter is
   *             automatically set to <code>terminate</code>. You can also set it to <code>stop</code> or
   *                 <code>hibernate</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/interruption-behavior.html">Interruption
   *                 behavior</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * <p>Describes the market (purchasing) option for the instances.</p>
 * @public
 */
export interface InstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * <p>The options for Spot Instances.</p>
   * @public
   */
  SpotOptions?: SpotMarketOptions | undefined;
}

/**
 * <p>Describes the launch template to use.</p>
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or
   *             <code>$Default</code>.</p>
   *          <p>A value of <code>$Latest</code> uses the latest version of the launch template.</p>
   *          <p>A value of <code>$Default</code> uses the default version of the launch template.</p>
   *          <p>Default: The default version of the launch template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>The maintenance options for the instance.</p>
 * @public
 */
export interface InstanceMaintenanceOptionsRequest {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;
}

/**
 * <p>The metadata options for the instance.</p>
 * @public
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional, which means that you can use
   *                     either IMDSv2 or IMDSv1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required, which means that IMDSv1 is
   *                     disabled, and you must use IMDSv2.</p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code> and the account level default is set to
   *                         <code>no-preference</code>, the default is <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code>, but the account level default is set to
   *                         <code>V1 or V2</code>, the default is <code>optional</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The default value can also be affected by other combinations of parameters. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html#instance-metadata-options-order-of-precedence">Order of precedence for instance metadata options</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel.</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   *          <p>Default: <code>enabled</code>
   *          </p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * <p>Configure network performance options for your instance that are geared towards performance
 *     		improvements based on the workload that it runs.</p>
 * @public
 */
export interface InstanceNetworkPerformanceOptionsRequest {
  /**
   * <p>Specify the bandwidth weighting option to boost the associated type of baseline bandwidth,
   *     		as follows:</p>
   *          <dl>
   *             <dt>default</dt>
   *             <dd>
   *                <p>This option uses the standard bandwidth configuration for your instance type.</p>
   *             </dd>
   *             <dt>vpc-1</dt>
   *             <dd>
   *                <p>This option boosts your networking baseline bandwidth and reduces your EBS baseline
   *     					bandwidth.</p>
   *             </dd>
   *             <dt>ebs-1</dt>
   *             <dd>
   *                <p>This option boosts your EBS baseline bandwidth and reduces your networking baseline
   *     					bandwidth.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * @public
 */
export interface RunInstancesRequest {
  /**
   * <p>The block device mapping, which defines the EBS volumes and instance store volumes to
   *             attach to the instance at launch. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device
   *                 mappings</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>The ID of the AMI. An AMI ID is required to launch an instance and must be specified
   *             here or in a launch template.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Amazon EC2 instance
   *                 types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The number of IPv6 addresses to associate with the primary network
   *             interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You
   *             cannot specify this option and the option to assign specific IPv6 addresses in the same
   *             request. You can specify this option if you've specified a minimum number of instances
   *             to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The IPv6 addresses from the range of the subnet to associate with the
   *             primary network interface. You cannot specify this option and the option to assign a
   *             number of IPv6 addresses in the same request. You cannot specify this option if you've
   *             specified a minimum number of instances to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The maximum number of instances to launch. If you specify a value that is more
   *             capacity than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
   *             launches the largest possible number of instances above the specified minimum
   *             count.</p>
   *          <p>Constraints: Between 1 and the quota for the specified instance type for your account for this Region.
   *             For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html">Amazon EC2 instance type quotas</a>.</p>
   * @public
   */
  MaxCount: number | undefined;

  /**
   * <p>The minimum number of instances to launch. If you specify a value that is more
   *             capacity than Amazon EC2 can provide in the target Availability Zone, Amazon EC2 does
   *             not launch any instances.</p>
   *          <p>Constraints: Between 1 and the quota for the specified instance type for your account for this Region.
   *             For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html">Amazon EC2 instance type quotas</a>.</p>
   * @public
   */
  MinCount: number | undefined;

  /**
   * <p>Specifies whether detailed monitoring is enabled for the instance.</p>
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * <p>The placement for the instance.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>The ID of the RAM disk to select. Some kernels require additional drivers at launch.
   *             Check the kernel requirements for information about whether you need to specify a RAM
   *             disk. To find kernel requirements, go to the Amazon Web Services Resource Center and
   *             search for the kernel ID.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The IDs of the security groups. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>[Default VPC] The names of the security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   *          <p>Default: Amazon EC2 uses the default security group.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The ID of the subnet to launch the instance into.</p>
   *          <p>If you specify a network interface, you must specify any subnets as part of the
   *             network interface instead of using this parameter.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The user data to make available to the instance. User data must be base64-encoded.
   *             Depending on the tool or SDK that you're using, the base64-encoding might be performed for you.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-add-user-data.html">Work with instance user data</a>.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
   *          </note>
   * @public
   */
  ElasticGpuSpecification?: ElasticGpuSpecification[] | undefined;

  /**
   * <p>An elastic inference accelerator to associate with the instance.</p>
   *          <note>
   *             <p>Amazon Elastic Inference is no longer available.</p>
   *          </note>
   * @public
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[] | undefined;

  /**
   * <p>The tags to apply to the resources that are created during instance launch.</p>
   *          <p>You can specify tags for the following resources only:</p>
   *          <ul>
   *             <li>
   *                <p>Instances</p>
   *             </li>
   *             <li>
   *                <p>Volumes</p>
   *             </li>
   *             <li>
   *                <p>Spot Instance requests</p>
   *             </li>
   *             <li>
   *                <p>Network interfaces</p>
   *             </li>
   *          </ul>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The launch template. Any additional parameters that you specify for the new instance
   *             overwrite the corresponding parameters included in the launch template.</p>
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   *          <p>For <a>RunInstances</a>, persistent Spot Instance requests are
   *             only supported when <b>InstanceInterruptionBehavior</b> is set
   *             to either <code>hibernate</code> or <code>stop</code>.</p>
   * @public
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest | undefined;

  /**
   * <p>The credit option for CPU usage of the burstable performance instance. Valid values
   *             are <code>standard</code> and <code>unlimited</code>. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html">
   *                 ModifyInstanceCreditSpecification</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3/T3a/T4g
   *             instances)</p>
   *          <p>For T3 instances with <code>host</code> tenancy, only <code>standard</code> is
   *             supported.</p>
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CpuOptions?: CpuOptionsRequest | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone, and tenancy).</p>
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2
   *                 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same
   *             instance.</p>
   * @public
   */
  HibernationOptions?: HibernationOptionsRequest | undefined;

  /**
   * <p>The license configurations.</p>
   * @public
   */
  LicenseSpecifications?: LicenseConfigurationRequest[] | undefined;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
   * @public
   */
  MetadataOptions?: InstanceMetadataOptionsRequest | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
   *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Amazon Web Services Nitro
   *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
   *                 Guide</i>.</p>
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same
   *             instance.</p>
   * @public
   */
  EnclaveOptions?: EnclaveOptionsRequest | undefined;

  /**
   * <p>The options for the instance hostname.
   *             The default values are inherited from the subnet.
   *             Applies only if creating a network interface, not attaching an existing one.</p>
   * @public
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest | undefined;

  /**
   * <p>The maintenance and recovery options for the instance.</p>
   * @public
   */
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest | undefined;

  /**
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a>. </p>
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * <p>If you’re launching an instance into a dual-stack or IPv6-only subnet, you can enable
   *             assigning a primary IPv6 address. A primary IPv6 address is an IPv6 GUA address
   *             associated with an ENI that you have enabled to use a primary IPv6 address. Use this
   *             option if an instance relies on its IPv6 address not changing. When you launch the
   *             instance, Amazon Web Services will automatically assign an IPv6 address associated with
   *             the ENI attached to your instance to be the primary IPv6 address. Once you enable an
   *             IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6
   *             GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6
   *             address until the instance is terminated or the network interface is detached. If you
   *             have multiple IPv6 addresses associated with an ENI attached to your instance and you
   *             enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI
   *             becomes the primary IPv6 address.</p>
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * <p>Contains settings for the network performance options for the instance.</p>
   * @public
   */
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether termination protection is enabled for the instance. The default
   *             is <code>false</code>, which means that you can terminate the instance using
   *             the Amazon EC2 console, command line tools, or API. You can enable termination protection
   *             when you launch an instance, while the instance is running, or while the instance
   *             is stopped.</p>
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *          <p>Default: <code>stop</code>
   *          </p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>The primary IPv4 address. You must specify a value from the IPv4 address
   *             range of the subnet.</p>
   *          <p>Only one private IP address can be designated as primary. You can't specify this
   *             option if you've specified the option to designate a private IP address as the primary
   *             IP address in a network interface specification. You cannot specify this option if
   *             you're launching more than one instance in the request.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you do not specify a client token, a randomly generated token is used for
   *             the request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>The network interfaces to associate with the instance.</p>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance
   *             profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;
}

/**
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesEbs {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that
   *          support them.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for a <code>gp3</code>, <code>io1</code>, or <code>io2</code>
   *    	   volume.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   *          <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default
   *          is the snapshot size.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   * @public
   */
  Ebs?: ScheduledInstancesEbs | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *          starting from 0. An instance type with two available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store
   *          volumes depends on the instance type. After you connect to the instance, you must mount the
   *          volume.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block device
   *          mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes
   *          specified in the block device mapping for the AMI.</p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * <p>Describes an IAM instance profile for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesMonitoring {
  /**
   * <p>Indicates whether monitoring is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Describes an IPv6 address.</p>
 * @public
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The IPv4 address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>Describes a network interface for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The
   *          public IPv4 address can only be assigned to a network interface for eth0, and can only be
   *          assigned to a new network interface, not an existing one. You cannot specify more than one
   *          network interface in the request. If launching into a default subnet, the default value is
   *          <code>true</code>.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   * @public
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private IPv4 addresses.</p>
   * @public
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Describes the placement for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesPlacement {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The name of the placement group.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>Describes the launch specification for a Scheduled Instance.</p>
 *          <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet.
 *           You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 * @public
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The ID of the kernel.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   * @public
   */
  Monitoring?: ScheduledInstancesMonitoring | undefined;

  /**
   * <p>The network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[] | undefined;

  /**
   * <p>The placement information.</p>
   * @public
   */
  Placement?: ScheduledInstancesPlacement | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The base64-encoded MIME user data.</p>
   * @public
   */
  UserData?: string | undefined;
}

/**
 * <p>Contains the parameters for RunScheduledInstances.</p>
 * @public
 */
export interface RunScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
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

  /**
   * <p>The number of instances.</p>
   *          <p>Default: 1</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The launch specification. You must match the instance type, Availability Zone,
   *          network, and platform of the schedule that you purchased.</p>
   * @public
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   * @public
   */
  ScheduledInstanceId: string | undefined;
}

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 * @public
 */
export interface RunScheduledInstancesResult {
  /**
   * <p>The IDs of the newly launched instances.</p>
   * @public
   */
  InstanceIdSet?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchLocalGatewayRoutesRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
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
   *                   <code>route-search.supernet-of-match</code> - The routes with a CIDR that encompass the CIDR filter.
   *                For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify <code>supernet-of-match</code>
   *                as 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The route type.</p>
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
export interface SearchLocalGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   * @public
   */
  Routes?: LocalGatewayRoute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsRequest {
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
   *                   <code>group-ip-address</code> - The IP address of the  transit gateway multicast group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-group-member</code> - The resource is a group member. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-group-source</code> - The resource is a group source. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>member-type</code> - The member type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The type of resource. Valid values are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>tgw-peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-type</code> - The source type. Valid values are <code>igmp</code> | <code>static</code>.</p>
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
 * @public
 * @enum
 */
export const MembershipType = {
  igmp: "igmp",
  static: "static",
} as const;

/**
 * @public
 */
export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType];

/**
 * <p>Describes the  transit gateway multicast group resources.</p>
 * @public
 */
export interface TransitGatewayMulticastGroup {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

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
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   * @public
   */
  GroupMember?: boolean | undefined;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   * @public
   */
  GroupSource?: boolean | undefined;

  /**
   * <p>The member type (for example, <code>static</code>).</p>
   * @public
   */
  MemberType?: MembershipType | undefined;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: MembershipType | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * <p>Information about the  transit gateway multicast group.</p>
   * @public
   */
  MulticastGroups?: TransitGatewayMulticastGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesRequest {
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
   *                   <code>attachment.transit-gateway-attachment-id</code>- The id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The resource id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-type</code> - The attachment resource type. Valid values
   *                     are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> |
   *                         <code>peering</code> | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
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
   *                   <code>type</code> - The type of route (<code>propagated</code> |
   *                   <code>static</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The maximum number of routes to return. If a value is not provided, the default is
   *          1000.</p>
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
 * @public
 */
export interface SearchTransitGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   * @public
   */
  Routes?: TransitGatewayRoute[] | undefined;

  /**
   * <p>Indicates whether there are additional routes available.</p>
   * @public
   */
  AdditionalRoutesAvailable?: boolean | undefined;
}

/**
 * @public
 */
export interface SendDiagnosticInterruptRequest {
  /**
   * <p>The ID of the instance.</p>
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
export interface StartDeclarativePoliciesReportRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where the report will be saved. The bucket must be in the
   *             same Region where the report generation request is made.</p>
   * @public
   */
  S3Bucket: string | undefined;

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
  TargetId: string | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface StartDeclarativePoliciesReportResult {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;
}

/**
 * @public
 */
export interface StartInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an instance state change.</p>
 * @public
 */
export interface InstanceStateChange {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  CurrentState?: InstanceState | undefined;

  /**
   * <p>The previous state of the instance.</p>
   * @public
   */
  PreviousState?: InstanceState | undefined;
}

/**
 * @public
 */
export interface StartInstancesResult {
  /**
   * <p>Information about the started instances.</p>
   * @public
   */
  StartingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisRequest {
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

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisRequest {
  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * <p>The member accounts that contain resources that the path can traverse.</p>
   * @public
   */
  AdditionalAccounts?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources that the path must traverse.</p>
   * @public
   */
  FilterInArns?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisResult {
  /**
   * <p>Information about the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the endpoint service.</p>
   * @public
   */
  ServiceId: string | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @internal
 */
export const ModifyVerifiedAccessNativeApplicationOidcOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessNativeApplicationOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
  ...(obj.OidcOptions && {
    OidcOptions: ModifyVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog(obj.OidcOptions),
  }),
  ...(obj.NativeApplicationOidcOptions && {
    NativeApplicationOidcOptions: ModifyVerifiedAccessNativeApplicationOidcOptionsFilterSensitiveLog(
      obj.NativeApplicationOidcOptions
    ),
  }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

/**
 * @internal
 */
export const ModifyVpnConnectionResultFilterSensitiveLog = (obj: ModifyVpnConnectionResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnConnectionOptionsResultFilterSensitiveLog = (obj: ModifyVpnConnectionOptionsResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelCertificateResultFilterSensitiveLog = (obj: ModifyVpnTunnelCertificateResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsSpecificationFilterSensitiveLog = (
  obj: ModifyVpnTunnelOptionsSpecification
): any => ({
  ...obj,
  ...(obj.PreSharedKey && { PreSharedKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsRequestFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsRequest): any => ({
  ...obj,
  ...(obj.TunnelOptions && { TunnelOptions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsResultFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ReportInstanceStatusRequestFilterSensitiveLog = (obj: ReportInstanceStatusRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RequestSpotFleetRequestFilterSensitiveLog = (obj: RequestSpotFleetRequest): any => ({
  ...obj,
  ...(obj.SpotFleetRequestConfig && {
    SpotFleetRequestConfig: SpotFleetRequestConfigDataFilterSensitiveLog(obj.SpotFleetRequestConfig),
  }),
});

/**
 * @internal
 */
export const RequestSpotLaunchSpecificationFilterSensitiveLog = (obj: RequestSpotLaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RequestSpotInstancesRequestFilterSensitiveLog = (obj: RequestSpotInstancesRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && {
    LaunchSpecification: RequestSpotLaunchSpecificationFilterSensitiveLog(obj.LaunchSpecification),
  }),
});

/**
 * @internal
 */
export const RequestSpotInstancesResultFilterSensitiveLog = (obj: RequestSpotInstancesResult): any => ({
  ...obj,
  ...(obj.SpotInstanceRequests && {
    SpotInstanceRequests: obj.SpotInstanceRequests.map((item) => SpotInstanceRequestFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RunInstancesRequestFilterSensitiveLog = (obj: RunInstancesRequest): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ScheduledInstancesLaunchSpecificationFilterSensitiveLog = (
  obj: ScheduledInstancesLaunchSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunScheduledInstancesRequestFilterSensitiveLog = (obj: RunScheduledInstancesRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && { LaunchSpecification: SENSITIVE_STRING }),
});
