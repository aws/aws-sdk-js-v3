import {
  _InstanceType,
  AddPrefixListEntry,
  AddressAttribute,
  AddressAttributeName,
  Affinity,
  ApplianceModeSupportValue,
  AttributeValue,
  ByoipCidr,
  ClientVpnAuthorizationRuleStatus,
  CurrencyCodeValues,
  DnsSupportValue,
  HostnameType,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceEventWindow,
  IpPermission,
  Ipv6SupportValue,
  Placement,
  RouteTableAssociationState,
  TagSpecification,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
} from "./models_0";
import {
  AutoAcceptSharedAttachmentsValue,
  BlockDeviceMapping,
  CapacityReservationPreference,
  CapacityReservationTarget,
  CreditSpecificationRequest,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  ElasticGpuSpecification,
  IcmpTypeCode,
  InstanceEventWindowTimeRangeRequest,
  InstanceInterruptionBehavior,
  InstanceIpv6Address,
  LaunchTemplate,
  LocalGatewayRoute,
  ManagedPrefixList,
  MarketType,
  PortRange,
  RuleAction,
  ShutdownBehavior,
  SpotInstanceType,
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
  VolumeType,
  VpnEcmpSupportValue,
} from "./models_1";
import {
  ClientVpnConnectionStatus,
  Filter,
  IKEVersionsRequestListValue,
  InstanceTagNotificationAttribute,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  VpnConnection,
} from "./models_2";
import {
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  HttpTokensState,
  InstanceAttributeName,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceMetadataProtocolState,
  InstanceNetworkInterfaceSpecification,
  InstanceState,
  InstanceStatusEvent,
  LaunchTemplateConfig,
  Monitoring,
  NetworkInsightsAnalysis,
  ReservedInstancesConfiguration,
  RunInstancesMonitoringEnabled,
  ScheduledInstance,
  SnapshotAttributeName,
  SpotFleetRequestConfigData,
  SpotInstanceRequest,
  SpotPlacement,
} from "./models_3";
import {
  BlobAttributeValue,
  InstanceBlockDeviceMappingSpecification,
  OperationType,
  Purchase,
  VolumeModification,
} from "./models_4";

export interface ModifyInstanceAttributeRequest {
  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance
   *             is either the source or the destination of any traffic that it receives.
   *             If the value is <code>true</code>, source/destination checks are enabled;
   *             otherwise, they are disabled. The default value is <code>true</code>.
   *             You must disable source/destination checks if the instance runs services
   *             such as network address translation, routing, or firewalls.</p>
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
   *             you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Update the block device mapping when launching an instance</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
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
   * <p>[EC2-VPC] Replaces the security groups of the instance with the specified security groups.
   *             You must specify at least one security group, even if it's just the default security group for the VPC. You must
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
   *             types</a> in the <i>Amazon EC2 User Guide</i>. If the instance type is not valid,
   *             the error returned is <code>InvalidInstanceAttributeValue</code>.</p>
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
   * <p>Changes the instance's user data to the specified value. If you are using an Amazon Web Services SDK
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *         <p>T3 instances with <code>host</code> tenancy do not support the <code>unlimited</code>
   *             CPU credit option.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceCreditSpecificationRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyInstanceEventStartTimeResult): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>The time ranges of the event window.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

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
   */
  CronExpression?: string;
}

export namespace ModifyInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

export interface ModifyInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export namespace ModifyInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyInstanceEventWindowResult): any => ({
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
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If
   *             the parameter is not specified, the existing state is maintained.</p>
   *         <p>If you specify a value of <code>disabled</code>, you cannot access your
   *             instance metadata.</p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is
   *             <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service. This setting
   *             applies only if you have enabled the HTTP metadata endpoint.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;
}

export namespace ModifyInstanceMetadataOptionsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *
   *         <note>
   *             <p>For T3 instances, you can't change the tenancy from <code>dedicated</code>
   *             to <code>host</code>, or from <code>host</code> to <code>dedicated</code>.
   *             Attempting to make one of these unsupported tenancy changes results in the
   *             <code>InvalidTenancy</code> error code.</p>
   *          </note>
   */
  Tenancy?: HostTenancy | string;

  /**
   * <p>The number of the partition in which to place the instance. Valid only if the
   *             placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The ARN of the host resource group in which to place the instance.</p>
   */
  HostResourceGroupArn?: string;
}

export namespace ModifyInstancePlacementRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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

  /**
   * <p>The maximum number of entries for the prefix list. You cannot modify the entries
   *             of a prefix list and modify the size of a prefix list at the same time.</p>
   *         <p>If any of the resources that reference the prefix list cannot support the new
   *             maximum size, the modify operation fails. Check the state message for the IDs of
   *             the first ten resources that do not support the new maximum size.</p>
   */
  MaxEntries?: number;
}

export namespace ModifyManagedPrefixListRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Enable or disable source/destination checks, which ensure that the instance
   *             is either the source or the destination of any traffic that it receives.
   *             If the value is <code>true</code>, source/destination checks are enabled;
   *             otherwise, they are disabled. The default value is <code>true</code>.
   *             You must disable source/destination checks if the instance runs services
   *             such as network address translation, routing, or firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

export namespace ModifyNetworkInterfaceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

export interface ModifyPrivateDnsNameOptionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be
   *             based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based
   *             on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance
   *             IPv4 address or the instance ID.</p>
   */
  PrivateDnsHostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export namespace ModifyPrivateDnsNameOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyPrivateDnsNameOptionsRequest): any => ({
    ...obj,
  });
}

export interface ModifyPrivateDnsNameOptionsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifyPrivateDnsNameOptionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyPrivateDnsNameOptionsResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyReservedInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group rule.</p>
 *         <p>You must specify exactly one of the following parameters, based on the rule type:</p>
 *         <ul>
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
 *         <p>When you modify a rule, you cannot change the rule type. For example, if the rule
 *             uses an IPv4 address range, you must use <code>CidrIpv4</code> to specify a new IPv4
 *             address range.</p>
 */
export interface SecurityGroupRuleRequest {
  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *         <p>Use <code>-1</code> to specify all protocols.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type. A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes. </p>
   */
  ToPort?: number;

  /**
   * <p>The IPv4 CIDR range. To specify a single IPv4 address, use the /32 prefix length. </p>
   */
  CidrIpv4?: string;

  /**
   * <p>The IPv6 CIDR range. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the security group that is referenced in the security group rule.</p>
   */
  ReferencedGroupId?: string;

  /**
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

export namespace SecurityGroupRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an update to a security group rule.</p>
 */
export interface SecurityGroupRuleUpdate {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>Information about the security group rule.</p>
   */
  SecurityGroupRule?: SecurityGroupRuleRequest;
}

export namespace SecurityGroupRuleUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRuleUpdate): any => ({
    ...obj,
  });
}

export interface ModifySecurityGroupRulesRequest {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>Information about the security group properties to update.</p>
   */
  SecurityGroupRules: SecurityGroupRuleUpdate[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifySecurityGroupRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySecurityGroupRulesRequest): any => ({
    ...obj,
  });
}

export interface ModifySecurityGroupRulesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace ModifySecurityGroupRulesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySecurityGroupRulesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 */
export interface CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified Amazon Web Services account ID or group to the list.</p>
   */
  Add?: CreateVolumePermission[];

  /**
   * <p>Removes the specified Amazon Web Services account ID or group from the list.</p>
   */
  Remove?: CreateVolumePermission[];
}

export namespace CreateVolumePermissionModifications {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySnapshotAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * <p>Indicates whether running Spot Instances should be terminated if the target capacity
   *             of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides. You can only use this parameter if you specified a
   *             launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you
   *             specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this
   *             parameter.</p>
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

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

export namespace ModifySpotFleetRequestRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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

  /**
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   */
  EnableDns64?: AttributeBooleanValue;

  /**
   * <p>The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an
   *             instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance
   *             DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  PrivateDnsHostnameTypeOnLaunch?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue;
}

export namespace ModifySubnetAttributeRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The type of traffic to assign to the rule.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *          <p>Default: The existing size is retained.</p>
   */
  Size?: number;

  /**
   * <p>The target EBS volume type of the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: The existing type is retained.</p>
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
   *          <p>Default: The existing value is retained if you keep the same volume type. If you change
   *       the volume type to <code>io1</code>, <code>io2</code>, or <code>gp3</code>, the default is 3,000.</p>
   */
  Iops?: number;

  /**
   * <p>The target throughput of the volume, in MiB/s. This parameter is valid only for <code>gp3</code> volumes.
   *       The maximum value is 1,000.</p>
   *          <p>Default: The existing value is retained if the source and target volume type is <code>gp3</code>.
   *       Otherwise, the default value is 125.</p>
   *   	      <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   * 		volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">
   * 			Nitro-based instances</a> in the same Availability Zone. This parameter is
   * 		supported with <code>io1</code> and <code>io2</code> volumes only. For more information, see
   * 		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   * 			Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;
}

export namespace ModifyVolumeRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnConnectionRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyVpnConnectionResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnConnectionOptionsRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
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
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyVpnConnectionOptionsResult): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelCertificateRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnTunnelCertificateRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyVpnTunnelCertificateResult): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Web Services Site-to-Site VPN tunnel options to modify.</p>
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same virtual private gateway. </p>
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
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
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
   *         <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *         <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *         <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *         <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
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
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *         <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *         <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
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
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *         <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *         <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;
}

export namespace ModifyVpnTunnelOptionsSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyVpnTunnelOptionsSpecification): any => ({
    ...obj,
  });
}

export interface ModifyVpnTunnelOptionsRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
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
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ModifyVpnTunnelOptionsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MoveAddressToVpcResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific
 *           Amazon Web Services account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Configuring your BYOIP address range</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
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
  /**
   * @internal
   */
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

  /**
   * <p>Reserved.</p>
   */
  MultiRegion?: boolean;
}

export namespace ProvisionByoipCidrRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionByoipCidrResult): any => ({
    ...obj,
  });
}

export interface PurchaseHostReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseHostReservationRequest): any => ({
    ...obj,
  });
}

export interface PurchaseHostReservationResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedInstancesOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * <p>The IDs of the purchased Reserved Instances. If your purchase crosses into a discounted
   *       pricing tier, the final Reserved Instances IDs might change. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html#crossing-pricing-tiers">Crossing
   *         pricing tiers</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ReservedInstancesId?: string;
}

export namespace PurchaseReservedInstancesOfferingResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *    	     <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>.
   *         For instance store-backed AMIs, the architecture specified in the manifest file.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The block device mapping entries.</p>
   *    	     <p>If you specify an Amazon EBS volume using the ID of an Amazon EBS snapshot, you can't specify the encryption state of the volume.</p>
   *          <p>If you create an AMI on an Outpost, then all backing snapshots must be on the same Outpost or in the Region
   *     	 of that Outpost. AMIs on an Outpost that include local snapshots can be used to launch instances on the same Outpost
   *     	 only. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">
   *     	 	Amazon EBS local snapshots on Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
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
   *      	you can use the Amazon Web Services Marketplace to bill for the use of an AMI.</p>
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

  /**
   * <p>The boot mode of the AMI. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;
}

export namespace RegisterImageRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   *          <p>If you provide an incorrect network border group, you receive an <code>InvalidAddress.NotFound</code> error.</p>
   *          <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 classic, you
   *       receive an <code>InvalidParameterCombination</code> error.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

export namespace ReplaceRouteRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReportInstanceStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RequestSpotFleet.</p>
 */
export interface RequestSpotFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The configuration for the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

export namespace RequestSpotFleetRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data for the instance. User data is limited to 16 KB.</p>
   */
  UserData?: string;
}

export namespace RequestSpotLaunchSpecification {
  /**
   * @internal
   */
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
   *         <p>When you specify an Availability Zone group in a Spot Instance request, all Spot
   *             Instances in the request are launched in the same Availability Zone. Instance proximity
   *             is maintained with this parameter, but the choice of Availability Zone is not. The group
   *             applies only to requests for Spot Instances of the same instance type. Any additional
   *             Spot Instance requests that are specified with the same Availability Zone group name are
   *             launched in that same Availability Zone, as long as at least one instance from the group
   *             is still active.</p>
   *         <p>If there is no active instance running in the Availability Zone group that you specify
   *             for a new Spot Instance request (all instances are terminated, the request is expired,
   *             or the maximum price you specified falls below current Spot price), then Amazon EC2 launches
   *             the instance in any Availability Zone where the constraint can be met. Consequently, the
   *             subsequent set of Spot Instances could be placed in a different zone from the original
   *             request, even if you specified the same Availability Zone group.</p>
   *         <p>Default: Instances are launched in any available Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of Spot Instances to launch.</p>
   *         <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and
   *             terminate together.</p>
   *         <p>Default: Instances are launched and terminated individually</p>
   */
  LaunchGroup?: string;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: RequestSpotLaunchSpecification;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance. The
   *             default is the On-Demand price.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   *         <p>Default: <code>one-time</code>
   *         </p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The start date of the request. If this is a one-time request, the request becomes
   *             active at this date and time and remains active until all instances launch, the request
   *             expires, or the request is canceled. If the request is persistent, the request becomes
   *             active at this date and time and remains active until it expires or is canceled.</p>
   *         <p>The specified start date and time cannot be equal to the current date and time. You
   *             must specify a start date and time that occurs after the current date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *         <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it. </p>
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
   * <p>The key-value pair for tagging the Spot Instance request on creation. The value for
   *                 <code>ResourceType</code> must be <code>spot-instances-request</code>, otherwise the
   *             Spot Instance request fails. To tag the Spot Instance request after it has been created,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace RequestSpotInstancesRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestSpotInstancesResult): any => ({
    ...obj,
  });
}

export interface ResetAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId: string | undefined;

  /**
   * <p>The attribute of the IP address.</p>
   */
  Attribute: AddressAttributeName | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetAddressAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetAddressAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetAddressAttributeResult {
  /**
   * <p>Information about the IP address.</p>
   */
  Address?: AddressAttribute;
}

export namespace ResetAddressAttributeResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for EBS encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace ResetEbsDefaultKmsKeyIdResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreAddressToClassicResult): any => ({
    ...obj,
  });
}

export interface RestoreManagedPrefixListVersionRequest {
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
   * <p>The version to restore.</p>
   */
  PreviousVersion: number | undefined;

  /**
   * <p>The current version number for the prefix list.</p>
   */
  CurrentVersion: number | undefined;
}

export namespace RestoreManagedPrefixListVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreManagedPrefixListVersionRequest): any => ({
    ...obj,
  });
}

export interface RestoreManagedPrefixListVersionResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace RestoreManagedPrefixListVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreManagedPrefixListVersionResult): any => ({
    ...obj,
  });
}

export interface RevokeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being removed.</p>
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the Active Directory group for which to revoke access. </p>
   */
  AccessGroupId?: string;

  /**
   * <p>Indicates whether access should be revoked for all clients.</p>
   */
  RevokeAllGroups?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RevokeClientVpnIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeClientVpnIngressRequest): any => ({
    ...obj,
  });
}

export interface RevokeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

export namespace RevokeClientVpnIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeClientVpnIngressResult): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *            destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a destination security
   *             group.</p>
   */
  SourceSecurityGroupOwnerId?: string;
}

export namespace RevokeSecurityGroupEgressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupEgressRequest): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>The outbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

export namespace RevokeSecurityGroupEgressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupEgressResult): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupIngressRequest {
  /**
   * <p>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</p>
   */
  CidrIp?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number. For the ICMP type number,
   *         use <code>-1</code> to specify all ICMP types.</p>
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   *            security group name in the request. For security groups in a nondefault VPC, you must
   *            specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   *            security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *         (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).
   *         Use <code>-1</code> to specify all.</p>
   */
  IpProtocol?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the start of the port range, the IP protocol, and the end of the port range. For EC2-VPC, the source security group must be in the same VPC. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>[EC2-Classic] The Amazon Web Services account ID of the source security group, if the source security group is in a different account. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number. For the ICMP code number,
   *         use <code>-1</code> to specify all ICMP codes for the ICMP type.</p>
   */
  ToPort?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];
}

export namespace RevokeSecurityGroupIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupIngressRequest): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>The inbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

export namespace RevokeSecurityGroupIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 */
export interface CpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for
   *             the instance, specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   */
  ThreadsPerCore?: number;
}

export namespace CpuOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CpuOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *            Describes an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAccelerator {
  /**
   * <p>
   *         	The type of elastic inference accelerator. The possible values are <code>eia1.medium</code>, <code>eia1.large</code>, <code>eia1.xlarge</code>, <code>eia2.medium</code>, <code>eia2.large</code>, and <code>eia2.xlarge</code>.
   *         </p>
   */
  Type: string | undefined;

  /**
   * <p>
   *             The number of elastic inference accelerators to attach to the instance.
   *         </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

export namespace ElasticInferenceAccelerator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticInferenceAccelerator): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information,
 *     		see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
 *     		    What is Amazon Web Services Nitro Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 */
export interface EnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>.</p>
   */
  Enabled?: boolean;
}

export namespace EnclaveOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnclaveOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface HibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, your instance is enabled for
   *             hibernation.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

export namespace HibernationOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HibernationOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface SpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. The default is
   *             the On-Demand price.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type. For <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances">RunInstances</a>, persistent Spot
   *             Instance requests are only supported when the instance interruption behavior is either <code>hibernate</code> or
   *                 <code>stop</code>.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             Supported only for persistent requests.</p>
   *         <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                 <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
   *                     remains active until all instances launch or you cancel the request.</p>
   *             </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace SpotMarketOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the market (purchasing) option for the instances.</p>
 */
export interface InstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: SpotMarketOptions;
}

export namespace InstanceMarketOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The launch template to use. You must specify either the launch template ID or
 *             launch template name in the request, but not both.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   *         <p>Default: The default version for the launch template.</p>
   */
  Version?: string;
}

export namespace LaunchTemplateSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LicenseConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LicenseConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *             specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credentials
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not
   *             specified, the default state is <code>enabled</code>.</p>
   *         <p>If you specify a value of <code>disabled</code>, you will not be able to access your
   *             instance metadata.</p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;
}

export namespace InstanceMetadataOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be
   *             based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based
   *             on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance
   *             IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export namespace PrivateDnsNameOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsNameOptionsRequest): any => ({
    ...obj,
  });
}

export interface RunInstancesRequest {
  /**
   * <p>The block device mapping, which defines the EBS volumes and instance store
   *             volumes to attach to the instance at launch. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device mappings</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of the AMI. An AMI ID is required to launch an instance and must be
   *         	specified here or in a launch template.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *         <p>Default: <code>m1.small</code>
   *          </p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>[EC2-VPC] The number of IPv6 addresses to associate with the primary network
   *             interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You
   *             cannot specify this option and the option to assign specific IPv6 addresses in the same
   *             request. You can specify this option if you've specified a minimum number of instances
   *             to launch.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the
   *             primary network interface. You cannot specify this option and the option to assign a
   *             number of IPv6 addresses in the same request. You cannot specify this option if you've
   *             specified a minimum number of instances to launch.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the kernel.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *         </important>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *         <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *         </important>
   */
  KeyName?: string;

  /**
   * <p>The maximum number of instances to launch. If you specify more instances than Amazon
   *             EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible
   *             number of instances above <code>MinCount</code>.</p>
   *         <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 FAQ.</p>
   */
  MaxCount: number | undefined;

  /**
   * <p>The minimum number of instances to launch. If you specify a minimum that is more
   *             instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
   *             launches no instances.</p>
   *         <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 General FAQ.</p>
   */
  MinCount: number | undefined;

  /**
   * <p>Specifies whether detailed monitoring is enabled for the instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: Placement;

  /**
   * <p>The ID of the RAM disk to select. Some kernels require additional drivers at launch.
   *             Check the kernel requirements for information about whether you need to specify a RAM
   *             disk. To find kernel requirements, go to the Amazon Web Services Resource Center and search for the
   *             kernel ID.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *         </important>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups. You can create a security group using
   * 	<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p>
   *         <p>If you specify a network interface, you must specify any security groups as part of the network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>[EC2-Classic, default VPC] The names of the security groups. For a nondefault VPC, you
   *             must use security group IDs instead.</p>
   *         <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   *         <p>Default: Amazon EC2 uses the default security group.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>[EC2-VPC] The ID of the subnet to launch the instance into.</p>
   *         <p>If you specify a network interface, you must specify any subnets as part of the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The user data to make available to the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run commands
   *                 on your Linux instance at launch</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-windows-user-data.html">Run commands on your Windows instance at launch</a>. If you are using a command line tool,
   *             base64-encoding is performed for you, and you can load the text from a file. Otherwise,
   *             you must provide base64-encoded text. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you do not specify a client token, a randomly generated token is used for the
   *             request to ensure idempotency.</p>
   *
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch,
   *             use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>.
   *             Alternatively, if you set <code>InstanceInitiatedShutdownBehavior</code> to
   *                 <code>terminate</code>, you can terminate the instance by running the shutdown
   *             command from the instance.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *         <p>Default: <code>stop</code>
   *         </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The network interfaces to associate with the instance. If you specify a network interface,
   *             you must specify any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address
   *             range of the subnet.</p>
   *         <p>Only one private IP address can be designated as primary. You can't specify this
   *             option if you've specified the option to designate a private IP address as the primary
   *             IP address in a network interface specification. You cannot specify this option if
   *             you're launching more than one instance in the request.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>An elastic GPU to associate with the instance. An Elastic GPU is a GPU resource that
   *             you can attach to your Windows instance to accelerate the graphics performance of your
   *             applications. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon EC2 Elastic
   *                 GPUs</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ElasticGpuSpecification?: ElasticGpuSpecification[];

  /**
   * <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *         <p>You cannot specify accelerators from different generations in the same request.</p>
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[];

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and
   *             volumes on launch. The specified tags are applied to all instances or volumes that are
   *             created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The launch template to use to launch the instances. Any parameters that you specify in
   *                 <a>RunInstances</a> override the same parameters in the launch template.
   *             You can specify either the name or ID of a launch template, but not both.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   *         <p>For <a>RunInstances</a>, persistent Spot Instance requests are
   *             only supported when <b>InstanceInterruptionBehavior</b> is set
   *             to either <code>hibernate</code> or <code>stop</code>.</p>
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the burstable performance instance. Valid values
   *             are <code>standard</code> and <code>unlimited</code>. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html">
   *                 ModifyInstanceCreditSpecification</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3/T3a
   *             instances)</p>
   *
   *         <p>For T3 instances with <code>host</code> tenancy, only <code>standard</code> is
   *             supported.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  CpuOptions?: CpuOptionsRequest;

  /**
   * <p>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecification;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p>You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same instance.</p>
   */
  HibernationOptions?: HibernationOptionsRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LicenseConfigurationRequest[];

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsRequest;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information,
   * 			see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
   * 			    What is Amazon Web Services Nitro Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
   * 	        <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.</p>
   */
  EnclaveOptions?: EnclaveOptionsRequest;

  /**
   * <p>The options for the instance hostname. The default values are inherited from the subnet.</p>
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest;
}

export namespace RunInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesEbs {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that support them.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for an <code>io1</code> or <code>io2</code> volume, with a maximum
   *    		ratio of 50 IOPS/GiB for <code>io1</code>, and 500 IOPS/GiB for <code>io2</code>. Range is 100 to 64,000 IOPS for
   *    		volumes in most Regions. Maximum IOPS of 64,000 is guaranteed only on
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">instances built on the Nitro System</a>. Other instance families guarantee performance up to
   *    		32,000 IOPS. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *    		<i>Amazon EC2 User Guide</i>.</p>
   *    	     <p>This parameter is valid only for Provisioned IOPS SSD (<code>io1</code> and <code>io2</code>) volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   *          <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. <code>gp2</code> for General Purpose SSD, <code>io1</code> or <code> io2</code> for Provisioned IOPS SSD, Throughput Optimized HDD
   *          for <code>st1</code>, Cold HDD for <code>sc1</code>, or <code>standard</code> for
   *          Magnetic.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: string;
}

export namespace ScheduledInstancesEbs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesEbs): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   */
  Ebs?: ScheduledInstancesEbs;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *          starting from 0. An instance type with two available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store
   *          volumes depends on the instance type. After you connect to the instance, you must mount the
   *          volume.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block device
   *          mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes
   *          specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;
}

export namespace ScheduledInstancesBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>The name.</p>
   */
  Name?: string;
}

export namespace ScheduledInstancesIamInstanceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesIamInstanceProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesMonitoring {
  /**
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace ScheduledInstancesMonitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace ScheduledInstancesIpv6Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   */
  Primary?: boolean;

  /**
   * <p>The IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace ScheduledInstancesPrivateIpAddressConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesPrivateIpAddressConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The
   *          public IPv4 address can only be assigned to a network interface for eth0, and can only be
   *          assigned to a new network interface, not an existing one. You cannot specify more than one
   *          network interface in the request. If launching into a default subnet, the default value is
   *          <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of the security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[];

  /**
   * <p>The number of secondary private IPv4 addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace ScheduledInstancesNetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesNetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPlacement {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;
}

export namespace ScheduledInstancesPlacement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for a Scheduled Instance.</p>
 *          <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet.
 *           You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[];

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: ScheduledInstancesMonitoring;

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[];

  /**
   * <p>The placement information.</p>
   */
  Placement?: ScheduledInstancesPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The base64-encoded MIME user data.</p>
   */
  UserData?: string;
}

export namespace ScheduledInstancesLaunchSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesLaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesRequest {
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
   * <p>The number of instances.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The launch specification. You must match the instance type, Availability Zone,
   *          network, and platform of the schedule that you purchased.</p>
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId: string | undefined;
}

export namespace RunScheduledInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunScheduledInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesResult {
  /**
   * <p>The IDs of the newly launched instances.</p>
   */
  InstanceIdSet?: string[];
}

export namespace RunScheduledInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunScheduledInstancesResult): any => ({
    ...obj,
  });
}

export interface SearchLocalGatewayRoutesRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters.</p>
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

export namespace SearchLocalGatewayRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchLocalGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface SearchLocalGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   */
  Routes?: LocalGatewayRoute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace SearchLocalGatewayRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchLocalGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>group-ip-address</code> - The IP address of the  transit gateway multicast group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-group-member</code> - The resource is a group member. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-group-source</code> - The resource is a group source. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>member-type</code> - The member type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-type</code> - The type of resource. Valid values are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>tgw-peering</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>source-type</code> - The source type. Valid values are <code>igmp</code> | <code>static</code>.</p>
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

export namespace SearchTransitGatewayMulticastGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayMulticastGroupsRequest): any => ({
    ...obj,
  });
}

export type MembershipType = "igmp" | "static";

/**
 * <p>Describes the  transit gateway multicast group resources.</p>
 */
export interface TransitGatewayMulticastGroup {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupMember?: boolean;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupSource?: boolean;

  /**
   * <p>The member type (for example, <code>static</code>).</p>
   */
  MemberType?: MembershipType | string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: MembershipType | string;
}

export namespace TransitGatewayMulticastGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastGroup): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * <p>Information about the  transit gateway multicast group.</p>
   */
  MulticastGroups?: TransitGatewayMulticastGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace SearchTransitGatewayMulticastGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayMulticastGroupsResult): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
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
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The maximum number of routes to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace SearchTransitGatewayRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   */
  Routes?: TransitGatewayRoute[];

  /**
   * <p>Indicates whether there are additional routes available.</p>
   */
  AdditionalRoutesAvailable?: boolean;
}

export namespace SearchTransitGatewayRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface SendDiagnosticInterruptRequest {
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
}

export namespace SendDiagnosticInterruptRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendDiagnosticInterruptRequest): any => ({
    ...obj,
  });
}

export interface StartInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace StartInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance state change.</p>
 */
export interface InstanceStateChange {
  /**
   * <p>The current state of the instance.</p>
   */
  CurrentState?: InstanceState;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The previous state of the instance.</p>
   */
  PreviousState?: InstanceState;
}

export namespace InstanceStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStateChange): any => ({
    ...obj,
  });
}

export interface StartInstancesResult {
  /**
   * <p>Information about the started instances.</p>
   */
  StartingInstances?: InstanceStateChange[];
}

export namespace StartInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInstancesResult): any => ({
    ...obj,
  });
}

export interface StartNetworkInsightsAnalysisRequest {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources that the path must traverse.</p>
   */
  FilterInArns?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace StartNetworkInsightsAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNetworkInsightsAnalysisRequest): any => ({
    ...obj,
  });
}

export interface StartNetworkInsightsAnalysisResult {
  /**
   * <p>Information about the network insights analysis.</p>
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis;
}

export namespace StartNetworkInsightsAnalysisResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNetworkInsightsAnalysisResult): any => ({
    ...obj,
  });
}

export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId: string | undefined;
}

export namespace StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartVpcEndpointServicePrivateDnsVerificationRequest): any => ({
    ...obj,
  });
}

export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export namespace StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartVpcEndpointServicePrivateDnsVerificationResult): any => ({
    ...obj,
  });
}

export interface StopInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Hibernates the instance if the instance was enabled for hibernation at launch. If the
   *             instance cannot hibernate successfully, a normal shutdown occurs. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p> Default: <code>false</code>
   *          </p>
   */
  Hibernate?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Forces the instances to stop. The instances do not have an opportunity to flush file
   *             system caches or file system metadata. If you use this option, you must perform file
   *             system check and repair procedures. This option is not recommended for Windows
   *             instances.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  Force?: boolean;
}

export namespace StopInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInstancesRequest): any => ({
    ...obj,
  });
}

export interface StopInstancesResult {
  /**
   * <p>Information about the stopped instances.</p>
   */
  StoppingInstances?: InstanceStateChange[];
}

export namespace StopInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInstancesResult): any => ({
    ...obj,
  });
}

export interface TerminateClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the client connection to be terminated.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The name of the user who initiated the connection. Use this option to terminate all active connections for
   * 			the specified user. This option can only be used if the user has established up to five connections.</p>
   */
  Username?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace TerminateClientVpnConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateClientVpnConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a terminated Client VPN endpoint client connection.</p>
 */
export interface TerminateConnectionStatus {
  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The state of the client connection.</p>
   */
  PreviousStatus?: ClientVpnConnectionStatus;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  CurrentStatus?: ClientVpnConnectionStatus;
}

export namespace TerminateConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateConnectionStatus): any => ({
    ...obj,
  });
}

export interface TerminateClientVpnConnectionsResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The user who established the terminated client connections.</p>
   */
  Username?: string;

  /**
   * <p>The current state of the client connections.</p>
   */
  ConnectionStatuses?: TerminateConnectionStatus[];
}

export namespace TerminateClientVpnConnectionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateClientVpnConnectionsResult): any => ({
    ...obj,
  });
}

export interface TerminateInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   *         <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
   *             smaller batches.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace TerminateInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateInstancesRequest): any => ({
    ...obj,
  });
}

export interface TerminateInstancesResult {
  /**
   * <p>Information about the terminated instances.</p>
   */
  TerminatingInstances?: InstanceStateChange[];
}

export namespace TerminateInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateInstancesResult): any => ({
    ...obj,
  });
}

export interface UnassignIpv6AddressesRequest {
  /**
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>One or more IPv6 prefixes to unassign from the network interface.</p>
   */
  Ipv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace UnassignIpv6AddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnassignIpv6AddressesRequest): any => ({
    ...obj,
  });
}

export interface UnassignIpv6AddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   */
  UnassignedIpv6Addresses?: string[];

  /**
   * <p>The IPv4 prefixes that have been unassigned from  the network interface.</p>
   */
  UnassignedIpv6Prefixes?: string[];
}

export namespace UnassignIpv6AddressesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnassignIpv6AddressesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for UnassignPrivateIpAddresses.</p>
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The secondary private IP addresses to unassign from the network interface. You can specify this option multiple times to unassign more than one IP address.</p>
   */
  PrivateIpAddresses?: string[];

  /**
   * <p>The IPv4 prefixes to unassign from  the network interface.</p>
   */
  Ipv4Prefixes?: string[];
}

export namespace UnassignPrivateIpAddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnassignPrivateIpAddressesRequest): any => ({
    ...obj,
  });
}

export interface UnmonitorInstancesRequest {
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

export namespace UnmonitorInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnmonitorInstancesRequest): any => ({
    ...obj,
  });
}

export interface UnmonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

export namespace UnmonitorInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnmonitorInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the description of a security group rule.</p>
 *         <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

export namespace SecurityGroupRuleDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRuleDescription): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule. You must specify either the IP permissions
   * 		    or the description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The description for the egress security group rules. You must specify either the
   *             description or the IP permissions.</p>
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[];
}

export namespace UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsEgressRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsEgressResult): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   * 			security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule. You must specify either IP permissions
   * 		    or a description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>[VPC only] The description for the ingress security group rules. You must specify either
   *             a description or IP permissions.</p>
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[];
}

export namespace UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsIngressRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsIngressResult): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace WithdrawByoipCidrRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WithdrawByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace WithdrawByoipCidrResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WithdrawByoipCidrResult): any => ({
    ...obj,
  });
}
