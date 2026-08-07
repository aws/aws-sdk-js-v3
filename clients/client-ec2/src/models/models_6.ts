// smithy-typescript generated code
import type {
  _InstanceType,
  AnalysisStatus,
  ArchitectureType,
  ArchitectureValues,
  BootModeValues,
  CapacityManagerMonitoredTagKeyStatus,
  CapacityManagerStatus,
  CapacityReservationState,
  CapacityTenancy,
  ChronologicalOrder,
  ClientCertificateRevocationListStatusCode,
  Comparison,
  CurrencyCodeValues,
  DeviceTrustProviderType,
  DiskImageFormat,
  EkPubKeyFormat,
  EkPubKeyType,
  FastLaunchResourceType,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FilterByDimension,
  GroupBy,
  HttpTokensEnforcedState,
  HttpTokensState,
  ImageBlockPublicAccessEnabledState,
  IngestionStatus,
  InstanceMetadataEndpointState,
  InstanceMetadataTagsState,
  IpamAddressHistoryResourceType,
  IpamByoipAdvertisementType,
  IpamByoipCidrState,
  IpamComplianceStatus,
  IpamDiscoveryFailureCode,
  IpamManagementState,
  IpamNetworkInterfaceAttachmentStatus,
  IpamOverlapStatus,
  IpamPolicyManagedBy,
  IpamPolicyResourceType,
  IpamPrefixListResolverRuleConditionOperation,
  IpamPrefixListResolverRuleType,
  IpamPublicAddressAssociationStatus,
  IpamPublicAddressAwsService,
  IpamPublicAddressType,
  IpamResourceCidrIpSource,
  IpamResourceType,
  IpamRoutingPolicyRegistrationState,
  IpamRpkiStatus,
  IpamRpkiStrength,
  ManagedBy,
  ManagedResourceDefaultVisibility,
  Metric,
  MetricType,
  PartitionLoadFrequency,
  PaymentOption,
  PeriodType,
  PlatformValues,
  ReservationEndDateType,
  ReservationState,
  ReservationType,
  RouteServerRouteInstallationStatus,
  RouteServerRouteStatus,
  ShutdownBehavior,
  SnapshotBlockPublicAccessState,
  SSEType,
  StatisticType,
  TargetCapacityUnitType,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayPropagationState,
  UnlimitedSupportedInstanceFamily,
  UserTrustProviderType,
  VirtualizationType,
} from "./enums";
import type {
  AccessScopeAnalysisFinding,
  ActiveVpnTunnelStatus,
  InterruptibleCapacityAllocation,
  InterruptionInfo,
  IpamPoolAllocation,
  IpamRoutingPolicyRegistrationDelta,
  RouteServerAssociation,
  SubnetAssociation,
  Tag,
  TagSpecification,
  TargetConfigurationRequest,
  TransitGatewayPolicyTableAssociation,
} from "./models_0";
import type {
  InstanceRequirementsRequest,
  IpamInternetRegistryAssociation,
  IpamResourceTag,
  NetworkInsightsAccessScopeContent,
  Placement,
  RequestIpamResourceTag,
  ResponseLaunchTemplateData,
} from "./models_1";
import type {
  SubnetCidrReservation,
  TransitGatewayMeteringPolicyEntry,
  TransitGatewayPolicyTableEntry,
  TransitGatewayPrefixListReference,
} from "./models_2";
import type {
  ConversionTask,
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchSnapshotConfigurationResponse,
  Filter,
  IpamPoolCidr,
} from "./models_3";
import type {
  ImportImageLicenseConfigurationResponse,
  RegisteredInstance,
  SnapshotDetail,
  SnapshotTaskDetail,
} from "./models_4";
import type { RouteServerPropagation, TransitGatewayPropagation } from "./models_5";

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
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> must be specified in the request, but not both.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>One or more Availability Zone IDs. For example, <code>use2-az1</code>.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> must be specified in the request, but not both.</p>
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

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
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

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
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

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
   *       <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
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
export interface EnableInstanceSqlHaStandbyDetectionsRequest {
  /**
   * <p>The IDs of the instances to enable for SQL Server High Availability standby detection monitoring.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret containing the SQL Server access credentials. The specified
   *       secret must contain valid SQL Server credentials for the specified instances. If not specified,
   *       deafult local user credentials will be used by the Amazon Web Services Systems Manager agent. To enable
   *       instances with different credentials, you must make separate requests.</p>
   * @public
   */
  SqlServerCredentials?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action,
   *     without actually making the request, and provides an error response. If you have the
   *     required permissions, the error response is <code>DryRunOperation</code>. Otherwise,
   *     it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableInstanceSqlHaStandbyDetectionsResult {
  /**
   * <p>Information about the instances that were enabled for SQL Server High Availability standby
   *       detection monitoring.</p>
   * @public
   */
  Instances?: RegisteredInstance[] | undefined;
}

/**
 * @public
 */
export interface EnableIpamInternetRegistryAssociationRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM internet registry association to enable.</p>
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * <p>The RPKI version to use from the Parent Response XML.</p>
   * @public
   */
  RpkiVersion: string | undefined;

  /**
   * <p>The RPKI service URI for the publication point from the Parent Response XML.</p>
   * @public
   */
  ServiceUri: string | undefined;

  /**
   * <p>The child handle for the BPKI certificate hierarchy from the Parent Response XML.</p>
   * @public
   */
  ChildHandle: string | undefined;

  /**
   * <p>The parent handle for the BPKI certificate hierarchy from the Parent Response XML.</p>
   * @public
   */
  ParentHandle: string | undefined;

  /**
   * <p>The parent BPKI Trust Anchor certificate in PEM format from the Parent Response XML.</p>
   * @public
   */
  ParentBpkiTa: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamInternetRegistryAssociationResult {
  /**
   * <p>Information about the enabled internet registry association.</p>
   * @public
   */
  IpamInternetRegistryAssociation?: IpamInternetRegistryAssociation | undefined;
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
export interface EnableIpamPolicyRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM policy to enable.</p>
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * <p>A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.</p>
   *          <p>The ID of the Amazon Web Services Organizations target for which to enable the IPAM policy. This parameter is required only when IPAM is integrated with Amazon Web Services Organizations. When IPAM is not integrated with Amazon Web Services Organizations, omit this parameter and the policy will apply to the current account.</p>
   * @public
   */
  OrganizationTargetId?: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamPolicyResult {
  /**
   * <p>The ID of the IPAM policy that was enabled.</p>
   * @public
   */
  IpamPolicyId?: string | undefined;
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
export interface EnableRouteServerPropagationRequest {
  /**
   * <p>The ID of the route server for which to enable propagation.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The ID of the route table to which route server will propagate routes.</p>
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableRouteServerPropagationResult {
  /**
   * <p>Information about the enabled route server propagation.</p>
   * @public
   */
  RouteServerPropagation?: RouteServerPropagation | undefined;
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
export interface GetActiveVpnTunnelStatusRequest {
  /**
   * <p>The ID of the VPN connection for which to retrieve the active tunnel status.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel for which to retrieve the active status.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetActiveVpnTunnelStatusResult {
  /**
   * <p>Information about the current security configuration of the VPN tunnel.</p>
   * @public
   */
  ActiveVpnTunnelStatus?: ActiveVpnTunnelStatus | undefined;
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
 * <p>The maximum age for allowed images.</p>
 * @public
 */
export interface CreationDateCondition {
  /**
   * <p>The maximum number of days that have elapsed since the image was created. For example, a
   *       value of <code>300</code> allows images that were created within the last 300 days.</p>
   * @public
   */
  MaximumDaysSinceCreated?: number | undefined;
}

/**
 * <p>The maximum period since deprecation for allowed images.</p>
 * @public
 */
export interface DeprecationTimeCondition {
  /**
   * <p>The maximum number of days that have elapsed since the image was deprecated. When set to
   *       <code>0</code>, no deprecated images are allowed.</p>
   * @public
   */
  MaximumDaysSinceDeprecated?: number | undefined;
}

/**
 * <p>The watermark filter criteria for an allowed image. Each entry can specify one or more
 *       fields. All specified fields must match the same watermark on the image.</p>
 * @public
 */
export interface ImageWatermarkFilterResponse {
  /**
   * <p>The <code>accountId:name</code> of the watermark. Supports wildcards (<code>*</code>,
   *       <code>?</code>).</p>
   * @public
   */
  WatermarkKey?: string | undefined;

  /**
   * <p>The Region where the watermark was originally created. Supports wildcards (<code>*</code>,
   *       <code>?</code>).</p>
   * @public
   */
  SourceImageRegion?: string | undefined;

  /**
   * <p>The maximum number of days that have elapsed since the source image was
   *       created.</p>
   *          <p>Constraints: Minimum value of 0. Maximum value of 2147483647.</p>
   * @public
   */
  MaximumDaysSinceSourceImageCreated?: number | undefined;

  /**
   * <p>The maximum number of days that have elapsed since the watermark was attached to the
   *       image.</p>
   *          <p>Constraints: Minimum value of 0. Maximum value of 2147483647.</p>
   * @public
   */
  MaximumDaysSinceWatermarkCreated?: number | undefined;
}

/**
 * <p>The criteria that are evaluated to determine which AMIs are discoverable and usable in
 *       your account for the specified Amazon Web Services Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html#how-allowed-amis-works">How Allowed AMIs
 *         works</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ImageCriterion {
  /**
   * <p>The image providers whose images are allowed.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>amazon</code>: Allow AMIs created by Amazon or verified providers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-marketplace</code>: Allow AMIs created by verified providers in the Amazon Web Services
   *           Marketplace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-backup-vault</code>: Allow AMIs created by Amazon Web Services Backup. </p>
   *             </li>
   *             <li>
   *                <p>12-digit account ID: Allow AMIs created by this account. One or more account IDs can be
   *           specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>: Allow AMIs created by your own account only.</p>
   *             </li>
   *          </ul>
   *          <p>Maximum: 200 values</p>
   * @public
   */
  ImageProviders?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Marketplace product codes for allowed images.</p>
   *          <p>Length: 1-25 characters</p>
   *          <p>Valid characters: Letters (<code>A–Z, a–z</code>) and numbers (<code>0–9</code>)</p>
   *          <p>Maximum: 50 values</p>
   * @public
   */
  MarketplaceProductCodes?: string[] | undefined;

  /**
   * <p>The names of allowed images. Names can include wildcards (<code>?</code> and
   *         <code>*</code>).</p>
   *          <p>Length: 1–128 characters. With <code>?</code>, the minimum is 3 characters.</p>
   *          <p>Valid characters:</p>
   *          <ul>
   *             <li>
   *                <p>Letters: <code>A–Z, a–z</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Numbers: <code>0–9</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Special characters: <code>( ) [ ] . / - ' @ _ * ?</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Spaces</p>
   *             </li>
   *          </ul>
   *          <p>Maximum: 50 values</p>
   * @public
   */
  ImageNames?: string[] | undefined;

  /**
   * <p>The maximum period since deprecation for allowed images.</p>
   * @public
   */
  DeprecationTimeCondition?: DeprecationTimeCondition | undefined;

  /**
   * <p>The maximum age for allowed images.</p>
   * @public
   */
  CreationDateCondition?: CreationDateCondition | undefined;

  /**
   * <p>The watermark criteria that an AMI must match to be allowed. An AMI is allowed if it
   *       carries at least one watermark that satisfies an ImageWatermarkFilter. A watermark satisfies a
   *       filter when all specified fields in the ImageWatermarkFilter match the corresponding values on
   *       the watermark of the AMI.</p>
   *          <p>Maximum: 50 values</p>
   * @public
   */
  ImageWatermarks?: ImageWatermarkFilterResponse[] | undefined;
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
export interface GetCapacityManagerAttributesRequest {
  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerAttributesResult {
  /**
   * <p>
   * The current status of Capacity Manager.
   * </p>
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * <p>
   * Indicates whether Organizations access is enabled for cross-account data aggregation.
   * </p>
   * @public
   */
  OrganizationsAccess?: boolean | undefined;

  /**
   * <p>
   * The number of active data export configurations for this account. This count includes all data exports regardless of their current delivery status.
   * </p>
   * @public
   */
  DataExportCount?: number | undefined;

  /**
   * <p>
   * The current data ingestion status. Initial ingestion may take several hours after enabling Capacity Manager.
   * </p>
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;

  /**
   * <p>
   * A descriptive message providing additional details about the current ingestion status. This may include error information if ingestion has
   * failed or progress details during initial setup.
   * </p>
   * @public
   */
  IngestionStatusMessage?: string | undefined;

  /**
   * <p>
   * The timestamp of the earliest data point available in Capacity Manager, in milliseconds since epoch. This indicates how far back historical data is available for queries.
   * </p>
   * @public
   */
  EarliestDatapointTimestamp?: Date | undefined;

  /**
   * <p>
   * The timestamp of the most recent data point ingested by Capacity Manager, in milliseconds since epoch. This indicates how current your capacity data is.
   * </p>
   * @public
   */
  LatestDatapointTimestamp?: Date | undefined;
}

/**
 * <p>
 * Specifies a condition for filtering capacity data based on dimension values. Used to create precise filters for metric queries and dimension lookups.
 * </p>
 * @public
 */
export interface DimensionCondition {
  /**
   * <p>
   * The name of the dimension to filter by.
   * </p>
   * @public
   */
  Dimension?: FilterByDimension | undefined;

  /**
   * <p>
   * The comparison operator to use for the filter.
   * </p>
   * @public
   */
  Comparison?: Comparison | undefined;

  /**
   * <p>
   * The list of values to match against the specified dimension. For 'equals' comparison, only the first value is used. For 'in' comparison, any matching value will satisfy the condition.
   * </p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>
 * Represents a filter condition for Capacity Manager queries. Contains dimension-based filtering criteria used to narrow down metric data and dimension results.
 * </p>
 * @public
 */
export interface CapacityManagerCondition {
  /**
   * <p>
   * The dimension-based condition that specifies how to filter the data based on dimension values.
   * </p>
   * @public
   */
  DimensionCondition?: DimensionCondition | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDataRequest {
  /**
   * <p>
   * The names of the metrics to retrieve. Maximum of 10 metrics per request.
   * </p>
   * @public
   */
  MetricNames: Metric[] | undefined;

  /**
   * <p>
   * The start time for the metric data query, in ISO 8601 format. The time range (end time - start time) must be a multiple of the specified period.
   * </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>
   * The end time for the metric data query, in ISO 8601 format. If the end time is beyond the latest ingested data, it will be automatically adjusted to the latest available data point.
   * </p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>
   * The granularity, in seconds, of the returned data points.
   * </p>
   * @public
   */
  Period: number | undefined;

  /**
   * <p>
   * The dimensions by which to group the metric data. This determines how the data is aggregated and returned.
   * </p>
   * @public
   */
  GroupBy?: GroupBy[] | undefined;

  /**
   * <p>
   * Conditions to filter the metric data. Each filter specifies a dimension, comparison operator ('equals', 'in'), and values to match against.
   * </p>
   * @public
   */
  FilterBy?: CapacityManagerCondition[] | undefined;

  /**
   * <p>
   * The maximum number of data points to return. Valid range is 1 to 100,000. Use with NextToken for pagination of large result sets.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional data points.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have
   * the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>
 * A key-value pair representing a tag associated with a capacity resource in Capacity Manager.
 * </p>
 * @public
 */
export interface CapacityManagerTagDimension {
  /**
   * <p>
   * The tag key.
   * </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>
   * The tag value.
   * </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>
 * Represents dimension values for capacity metrics, including resource identifiers, geographic information, and reservation details used for grouping and filtering capacity data.
 * </p>
 * @public
 */
export interface CapacityManagerDimension {
  /**
   * <p>
   *     The Amazon Web Services Region where the capacity resource is located.
   * </p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>
   * The unique identifier of the Availability Zone where the capacity resource is located.
   * </p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>
   *     The Amazon Web Services account ID that owns the capacity resource.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   *     The name of the Amazon Web Services account that owns the capacity resource. This dimension is only available when Organizations access is enabled for Capacity Manager.
   * </p>
   * @public
   */
  AccountName?: string | undefined;

  /**
   * <p>
   * The EC2 instance family of the capacity resource.
   * </p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>
   * The specific EC2 instance type of the capacity resource.
   * </p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>
   * The platform or operating system of the instance.
   * </p>
   * @public
   */
  InstancePlatform?: string | undefined;

  /**
   * <p>
   *     The Amazon Resource Name (ARN) of the capacity reservation. This provides a unique identifier that can be used across Amazon Web Services services to reference the specific reservation.
   * </p>
   * @public
   */
  ReservationArn?: string | undefined;

  /**
   * <p>
   * The unique identifier of the capacity reservation.
   * </p>
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * <p>
   * The type of capacity reservation.
   * </p>
   * @public
   */
  ReservationType?: ReservationType | undefined;

  /**
   * <p>
   * The timestamp when the capacity reservation was originally created, in milliseconds since epoch. This differs from the start timestamp as
   * reservations can be created before they become active.
   * </p>
   * @public
   */
  ReservationCreateTimestamp?: Date | undefined;

  /**
   * <p>
   * The timestamp when the capacity reservation becomes active and available for use, in milliseconds since epoch. This is when the reservation begins providing capacity.
   * </p>
   * @public
   */
  ReservationStartTimestamp?: Date | undefined;

  /**
   * <p>
   * The timestamp when the capacity reservation expires and is no longer available, in milliseconds since epoch. After this time, the reservation will not provide any capacity.
   * </p>
   * @public
   */
  ReservationEndTimestamp?: Date | undefined;

  /**
   * <p>
   * The type of end date for the capacity reservation. This indicates whether the reservation has a fixed end date, is open-ended, or follows a specific termination pattern.
   * </p>
   * @public
   */
  ReservationEndDateType?: ReservationEndDateType | undefined;

  /**
   * <p>
   * The tenancy of the EC2 instances associated with this capacity dimension. Valid values are 'default' for shared tenancy, 'dedicated' for dedicated instances, or 'host' for dedicated hosts.
   * </p>
   * @public
   */
  Tenancy?: CapacityTenancy | undefined;

  /**
   * <p>
   * The current state of the capacity reservation.
   * </p>
   * @public
   */
  ReservationState?: ReservationState | undefined;

  /**
   * <p>
   * The instance matching criteria for the capacity reservation, determining how instances are matched to the reservation.
   * </p>
   * @public
   */
  ReservationInstanceMatchCriteria?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID that is financially responsible for unused capacity reservation costs.
   *     </p>
   * @public
   */
  ReservationUnusedFinancialOwner?: string | undefined;

  /**
   * <p>
   * The tags associated with the capacity resource, represented as key-value pairs. Only tags that have been activated for monitoring via <code>UpdateCapacityManagerMonitoredTagKeys</code> are included.
   * </p>
   * @public
   */
  Tags?: CapacityManagerTagDimension[] | undefined;
}

/**
 * <p>
 * Represents a single metric value with its associated statistic, such as the sum or average of unused capacity hours.
 * </p>
 * @public
 */
export interface MetricValue {
  /**
   * <p>
   * The name of the metric.
   * </p>
   * @public
   */
  Metric?: Metric | undefined;

  /**
   * <p>
   * The numerical value of the metric for the specified statistic and time period.
   * </p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>
 * Contains a single data point from a capacity metrics query, including the dimension values, timestamp, and metric values for that specific combination.
 * </p>
 * @public
 */
export interface MetricDataResult {
  /**
   * <p>
   * The dimension values that identify this specific data point, such as account ID, region, and instance family.
   * </p>
   * @public
   */
  Dimension?: CapacityManagerDimension | undefined;

  /**
   * <p>
   * The timestamp for this data point, indicating when the capacity usage occurred.
   * </p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>
   * The metric values and statistics for this data point, containing the actual capacity usage numbers.
   * </p>
   * @public
   */
  MetricValues?: MetricValue[] | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDataResult {
  /**
   * <p>
   * The metric data points returned by the query. Each result contains dimension values, timestamp, and metric values with their associated statistics.
   * </p>
   * @public
   */
  MetricDataResults?: MetricDataResult[] | undefined;

  /**
   * <p>
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   * </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDimensionsRequest {
  /**
   * <p>
   * The dimensions to group by when retrieving available dimension values. This determines which dimension combinations are returned. Required parameter.
   * </p>
   * @public
   */
  GroupBy: GroupBy[] | undefined;

  /**
   * <p>
   * Conditions to filter which dimension values are returned. Each filter specifies a dimension, comparison operator, and values to match against.
   * </p>
   * @public
   */
  FilterBy?: CapacityManagerCondition[] | undefined;

  /**
   * <p>
   * The start time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.
   * </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>
   * The end time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.
   * </p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>
   * The metric names to use as an additional filter when retrieving dimensions. Only dimensions that have data for these
   * metrics will be returned. Required parameter with maximum size of 1 for v1.
   * </p>
   * @public
   */
  MetricNames: Metric[] | undefined;

  /**
   * <p>
   * The maximum number of dimension combinations to return. Valid range is 1 to 1000. Use with NextToken for pagination.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional dimension values.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides
   * an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDimensionsResult {
  /**
   * <p>
   * The available dimension combinations that have data within the specified time range and filters.
   * </p>
   * @public
   */
  MetricDimensionResults?: CapacityManagerDimension[] | undefined;

  /**
   * <p>
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   * </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMonitoredTagKeysRequest {
  /**
   * <p>
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. If not specified, up to 1000 results are returned.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   * The token for the next page of results. Use the value returned from a previous call to retrieve additional results.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>
 * Describes a tag key that is being monitored by Capacity Manager, including its activation status and the earliest available data point.
 * </p>
 * @public
 */
export interface CapacityManagerMonitoredTagKey {
  /**
   * <p>
   * The tag key being monitored.
   * </p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>
   * The current status of the monitored tag key. Valid values are <code>activating</code>, <code>activated</code>, <code>deactivating</code>, and <code>suspended</code>.
   * </p>
   * @public
   */
  Status?: CapacityManagerMonitoredTagKeyStatus | undefined;

  /**
   * <p>
   * A message providing additional details about the current status of the monitored tag key.
   * </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>
   * Indicates whether this tag key is provided by Capacity Manager by default, rather than being user-activated.
   * </p>
   * @public
   */
  CapacityManagerProvided?: boolean | undefined;

  /**
   * <p>
   * The earliest timestamp from which tag data is available for queries, in UTC ISO 8601 format.
   * </p>
   * @public
   */
  EarliestDatapointTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMonitoredTagKeysResult {
  /**
   * <p>
   * The list of tag keys being monitored by Capacity Manager, including their current status and metadata.
   * </p>
   * @public
   */
  CapacityManagerTagKeys?: CapacityManagerMonitoredTagKey[] | undefined;

  /**
   * <p>
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   * </p>
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
   *             <li>
   *                <p>
   *                   <code>cancelling</code> - (<i>Future-dated Capacity Reservations</i>) The
   * 		Capacity Reservation is being cancelled. Capacity has been released but charges continue for
   * 		the commitment wind-down period. The reservation transitions to <code>cancelled</code> when
   * 		the wind-down completes.</p>
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

  /**
   * <p>
   * 			Indicates whether the Capacity Reservation is interruptible, meaning instances may be terminated when the owner reclaims capacity.
   * 		</p>
   * @public
   */
  Interruptible?: boolean | undefined;

  /**
   * <p>
   * 			Information about the capacity allocated to the interruptible Capacity Reservation, including instance counts and allocation status.
   * 		</p>
   * @public
   */
  InterruptibleCapacityAllocation?: InterruptibleCapacityAllocation | undefined;

  /**
   * <p>
   * 			Details about the interruption configuration and source reservation for interruptible Capacity Reservations.
   * 		</p>
   * @public
   */
  InterruptionInfo?: InterruptionInfo | undefined;
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
 */
export interface GetEnabledIpamPolicyRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEnabledIpamPolicyResult {
  /**
   * <p>Indicates whether the IPAM policy is enabled.</p>
   * @public
   */
  IpamPolicyEnabled?: boolean | undefined;

  /**
   * <p>The ID of the enabled IPAM policy.</p>
   * @public
   */
  IpamPolicyId?: string | undefined;

  /**
   * <p>The entity that manages the IPAM policy.</p>
   * @public
   */
  ManagedBy?: IpamPolicyManagedBy | undefined;
}

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
export interface GetImageAncestryRequest {
  /**
   * <p>The ID of the AMI whose ancestry you want to trace.</p>
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
 * <p>Information about a single AMI in the ancestry chain and its source (parent) AMI.</p>
 * @public
 */
export interface ImageAncestryEntry {
  /**
   * <p>The date and time when this AMI was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The ID of this AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The owner alias (<code>amazon</code> | <code>aws-backup-vault</code> |
   *       <code>aws-marketplace</code> ) of this AMI, if one is assigned. Otherwise, the value is
   *       <code>null</code>.</p>
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * <p>The ID of the parent AMI.</p>
   * @public
   */
  SourceImageId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the parent AMI.</p>
   * @public
   */
  SourceImageRegion?: string | undefined;
}

/**
 * @public
 */
export interface GetImageAncestryResult {
  /**
   * <p>A list of entries in the AMI ancestry chain, from the specified AMI to the root
   *       AMI.</p>
   * @public
   */
  ImageAncestryEntries?: ImageAncestryEntry[] | undefined;
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
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html">View tags for your EC2
   *                 instances using instance metadata</a> in the
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

  /**
   * <p>Indicates whether to enforce the requirement of IMDSv2 on an instance at the time of
   *             launch. When enforcement is enabled, the instance can't launch unless IMDSv2
   *                 (<code>HttpTokens</code>) is set to <code>required</code>.</p>
   * @public
   */
  HttpTokensEnforced?: HttpTokensEnforcedState | undefined;
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

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
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
export interface GetIpamDiscoveredRoutesRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM resource discovery.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>The Amazon Web Services Region to retrieve discovered routes for.</p>
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * <p>One or more filters to apply to the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a BGP route discovered by IPAM resource discovery.</p>
 * @public
 */
export interface IpamDiscoveredRoute {
  /**
   * <p>The ID of the IPAM resource discovery that discovered the route.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the route was discovered.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The ID of the resource owner.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The IP address prefix of the discovered route in CIDR notation.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) that originates the route.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>The state of the BYOIP CIDR. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>advertised</code> - The CIDR is being advertised.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deprovisioned</code> - The CIDR has been deprovisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-deprovision</code> - Deprovisioning failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-provision</code> - Provisioning failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-deprovision</code> - Deprovisioning is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-provision</code> - Provisioning is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned</code> - The CIDR is provisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned-not-publicly-advertisable</code> - The CIDR is provisioned but not publicly advertisable.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: IpamByoipCidrState | undefined;

  /**
   * <p>The advertisement type of the route. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>regional</code> - The IP address is advertised from a single location (regional services such as Amazon EC2).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>global</code> - The IP address is advertised from multiple global locations simultaneously (global services such as Amazon CloudFront).</p>
   *             </li>
   *          </ul>
   * @public
   */
  AdvertisementType?: IpamByoipAdvertisementType | undefined;

  /**
   * <p>The network border group for the route.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The ID of the BYOIP pool associated with the route.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The ID of the IPAM pool associated with the route.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The time when the route was last sampled.</p>
   * @public
   */
  SampleTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredRoutesResult {
  /**
   * <p>The discovered BGP routes.</p>
   * @public
   */
  IpamDiscoveredRoutes?: IpamDiscoveredRoute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationAsnsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM internet registry association.</p>
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters to apply to the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains information about an Autonomous System Number (ASN) registered at an internet registry and associated with an IPAM.</p>
 * @public
 */
export interface IpamInternetRegistryAssociationAsn {
  /**
   * <p>The Autonomous System Number.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>The time when the ASN was last observed at the internet registry.</p>
   * @public
   */
  LastObservedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationAsnsResult {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ASNs registered with the internet registry.</p>
   * @public
   */
  IpamInternetRegistryAssociationAsns?: IpamInternetRegistryAssociationAsn[] | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationCidrsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM internet registry association.</p>
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters to apply to the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains information about an IP address CIDR registered at an internet registry and associated with an IPAM.</p>
 * @public
 */
export interface IpamInternetRegistryAssociationCidr {
  /**
   * <p>The IP address prefix in CIDR notation.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The time when the CIDR was last observed at the internet registry.</p>
   * @public
   */
  LastObservedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationCidrsResult {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The CIDRs registered with the internet registry.</p>
   * @public
   */
  IpamInternetRegistryAssociationCidrs?: IpamInternetRegistryAssociationCidr[] | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyAllocationRulesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM policy for which to get allocation rules.</p>
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * <p>One or more filters for the allocation rules.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The locale for which to get the allocation rules.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The resource type for which to get the allocation rules.</p>
   *          <p>The Amazon Web Services service or resource type that can use IP addresses through IPAM policies. Supported services and resource types include:</p>
   *          <ul>
   *             <li>
   *                <p>Elastic IP addresses</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType?: IpamPolicyResourceType | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
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
 * <p>Information about an IPAM policy allocation rule.</p>
 *          <p>Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</p>
 * @public
 */
export interface IpamPolicyAllocationRule {
  /**
   * <p>The ID of the source IPAM pool for the allocation rule.</p>
   *          <p>An IPAM pool is a collection of IP addresses in IPAM that can be allocated to Amazon Web Services resources.</p>
   * @public
   */
  SourceIpamPoolId?: string | undefined;
}

/**
 * <p>Information about an IPAM policy.</p>
 * @public
 */
export interface IpamPolicyDocument {
  /**
   * <p>The ID of the IPAM policy.</p>
   * @public
   */
  IpamPolicyId?: string | undefined;

  /**
   * <p>The locale of the IPAM policy document.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The resource type of the IPAM policy document.</p>
   *          <p>The Amazon Web Services service or resource type that can use IP addresses through IPAM policies. Supported services and resource types include:</p>
   *          <ul>
   *             <li>
   *                <p>Elastic IP addresses</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType?: IpamPolicyResourceType | undefined;

  /**
   * <p>The allocation rules in the IPAM policy document.</p>
   *          <p>Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</p>
   * @public
   */
  AllocationRules?: IpamPolicyAllocationRule[] | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyAllocationRulesResult {
  /**
   * <p>The IPAM policy documents containing the allocation rules.</p>
   *          <p>Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</p>
   * @public
   */
  IpamPolicyDocuments?: IpamPolicyDocument[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyOrganizationTargetsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the IPAM policy for which to get Amazon Web Services Organizations targets.</p>
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * <p>One or more filters for the Amazon Web Services Organizations targets.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>The Amazon Web Services Organizations target for an IPAM policy.</p>
 * @public
 */
export interface IpamPolicyOrganizationTarget {
  /**
   * <p>The ID of the Amazon Web Services Organizations target.</p>
   *          <p>A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.</p>
   * @public
   */
  OrganizationTargetId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyOrganizationTargetsResult {
  /**
   * <p>The IDs of the Amazon Web Services Organizations targets.</p>
   *          <p>A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.</p>
   * @public
   */
  OrganizationTargets?: IpamPolicyOrganizationTarget[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
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
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
export interface GetIpamPrefixListResolverRulesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver whose rules you want to retrieve.</p>
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * <p>One or more filters to limit the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
 * <p>Describes a condition within a CIDR selection rule. Conditions define the criteria for selecting CIDRs from IPAM's database based on resource attributes.</p>
 *          <p>CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.</p>
 *          <p>There are three rule types. Only 2 of the 3 rule types support conditions - <b>IPAM pool CIDR</b> and <b>Scope resource CIDR</b>. <b>Static CIDR</b> rules cannot have conditions.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Static CIDR</b>: A fixed list of CIDRs that do not change (like a manual list replicated across Regions)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IPAM pool CIDR</b>: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool)</p>
 *                <p>If you choose this option, choose the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>IPAM scope</b>: Select the IPAM scope to search for resources</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Conditions:</b>
 *                      </p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>Property</b>
 *                            </p>
 *                            <ul>
 *                               <li>
 *                                  <p>
 *                                     <b>IPAM pool ID</b>: Select an IPAM pool that contains the resources</p>
 *                               </li>
 *                               <li>
 *                                  <p>
 *                                     <b>CIDR</b> (like 10.24.34.0/23)</p>
 *                               </li>
 *                            </ul>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Operation</b>: Equals/Not equals</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Value</b>: The value on which to match the condition</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Scope resource CIDR</b>: CIDRs from Amazon Web Services resources like VPCs, subnets, EIPs within an IPAM scope</p>
 *                <p>If you choose this option, choose the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>IPAM scope</b>: Select the IPAM scope to search for resources</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Resource type</b>: Select a resource, like a VPC or subnet.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Conditions</b>:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>Property</b>:</p>
 *                            <ul>
 *                               <li>
 *                                  <p>Resource ID: The unique ID of a resource (like vpc-1234567890abcdef0)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource owner (like 111122223333)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource region (like us-east-1)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource tag (like key: name, value: dev-vpc-1)</p>
 *                               </li>
 *                               <li>
 *                                  <p>CIDR (like 10.24.34.0/23)</p>
 *                               </li>
 *                            </ul>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Operation</b>: Equals/Not equals</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Value</b>: The value on which to match the condition</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @public
 */
export interface IpamPrefixListResolverRuleCondition {
  /**
   * <p>The operation to perform when evaluating this condition. Valid values include <code>equals</code>, <code>not-equals</code>, <code>contains</code>, and <code>not-contains</code>.</p>
   * @public
   */
  Operation?: IpamPrefixListResolverRuleConditionOperation | undefined;

  /**
   * <p>The ID of the IPAM pool to match against. This condition selects CIDRs that belong to the specified IPAM pool.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource to match against. This condition selects CIDRs associated with the specified resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resources to match against. This condition selects CIDRs from resources owned by the specified account.</p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the resources are located. This condition selects CIDRs from resources in the specified Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>A tag key-value pair to match against. This condition selects CIDRs from resources that have the specified tag.</p>
   * @public
   */
  ResourceTag?: IpamResourceTag | undefined;

  /**
   * <p>A CIDR block to match against. This condition selects CIDRs that fall within or match the specified CIDR range.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Describes a CIDR selection rule.</p>
 *          <p>CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.</p>
 * @public
 */
export interface IpamPrefixListResolverRule {
  /**
   * <p>The type of CIDR selection rule. Valid values include <code>include</code> for selecting CIDRs that match the conditions, and <code>exclude</code> for excluding CIDRs that match the conditions.</p>
   * @public
   */
  RuleType?: IpamPrefixListResolverRuleType | undefined;

  /**
   * <p>A fixed list of CIDRs that do not change (like a manual list replicated across Regions).</p>
   * @public
   */
  StaticCidr?: string | undefined;

  /**
   * <p>The ID of the IPAM scope from which to select CIDRs. This determines whether to select from public or private IP address space.</p>
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * <p>For rules of type <code>ipam-resource-cidr</code>, this is the resource type.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The conditions that determine which CIDRs are selected by this rule. Conditions specify criteria such as resource type, tags, account IDs, and Regions.</p>
   * @public
   */
  Conditions?: IpamPrefixListResolverRuleCondition[] | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverRulesResult {
  /**
   * <p>The CIDR selection rules for the IPAM prefix list resolver.</p>
   * @public
   */
  Rules?: IpamPrefixListResolverRule[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionEntriesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver whose version entries you want to retrieve.</p>
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * <p>The version number of the resolver for which to retrieve CIDR entries. If not specified, the latest version is used.</p>
   * @public
   */
  IpamPrefixListResolverVersion: number | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
 * <p>Describes a CIDR entry in a specific version of an IPAM prefix list resolver. This represents a CIDR that was selected and synchronized at a particular point in time.</p>
 * @public
 */
export interface IpamPrefixListResolverVersionEntry {
  /**
   * <p>The CIDR block that was selected and synchronized in this resolver version.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionEntriesResult {
  /**
   * <p>The CIDR entries for the specified resolver version.</p>
   * @public
   */
  Entries?: IpamPrefixListResolverVersionEntry[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver whose versions you want to retrieve.</p>
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * <p>Specific version numbers to retrieve. If not specified, all versions are returned.</p>
   * @public
   */
  IpamPrefixListResolverVersions?: number[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to limit the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a version of an IPAM prefix list resolver.</p>
 *          <p>Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list
 * changes due to infrastructure changes.</p>
 *          <p>
 *             <b>Version example:</b>
 *          </p>
 *          <p>
 *             <b>Initial State (Version 1)</b>
 *          </p>
 *          <p>Production environment:</p>
 *          <ul>
 *             <li>
 *                <p>vpc-prod-web (10.1.0.0/16) - tagged env=prod</p>
 *             </li>
 *             <li>
 *                <p>vpc-prod-db (10.2.0.0/16) - tagged env=prod</p>
 *             </li>
 *          </ul>
 *          <p>Resolver rule: Include all VPCs tagged env=prod</p>
 *          <p>
 *             <b>Version 1 CIDRs:</b> 10.1.0.0/16, 10.2.0.0/16</p>
 *          <p>
 *             <b>Infrastructure Change (Version 2)</b>
 *          </p>
 *          <p>New VPC added:</p>
 *          <ul>
 *             <li>
 *                <p>vpc-prod-api (10.3.0.0/16) - tagged env=prod</p>
 *             </li>
 *          </ul>
 *          <p>IPAM automatically detects the change and creates a new version.</p>
 *          <p>
 *             <b>Version 2 CIDRs:</b> 10.1.0.0/16, 10.2.0.0/16, 10.3.0.0/16</p>
 * @public
 */
export interface IpamPrefixListResolverVersion {
  /**
   * <p>The version number of the IPAM prefix list resolver.</p>
   *          <p>Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list
   * changes due to infrastructure changes.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionsResult {
  /**
   * <p>Information about the IPAM prefix list resolver versions.</p>
   * @public
   */
  IpamPrefixListResolverVersions?: IpamPrefixListResolverVersion[] | undefined;

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
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
export interface GetIpamRouteOriginAuthorizationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM internet registry association.</p>
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * <p>Filter results to a specific CIDR prefix.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
 * <p>Contains information about a Route Origin Authorization (ROA) currently published in the RPKI.</p>
 * @public
 */
export interface IpamRouteOriginAuthorizationInfo {
  /**
   * <p>The IP address prefix in CIDR notation authorized by the ROA.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) authorized to originate the prefix.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>The maximum prefix length that the ASN is authorized to announce.</p>
   * @public
   */
  MaxLength?: number | undefined;
}

/**
 * @public
 */
export interface GetIpamRouteOriginAuthorizationsResult {
  /**
   * <p>The Route Origin Authorizations published to the RPKI.</p>
   * @public
   */
  IpamRouteOriginAuthorizations?: IpamRouteOriginAuthorizationInfo[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamRouteProtectionFindingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM to retrieve route protection findings for.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>One or more filters to apply to the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a Route Origin Authorization (ROA) published in the RPKI. A ROA cryptographically attests that a specific ASN is authorized to originate a specific IP address prefix.</p>
 * @public
 */
export interface IpamRouteOriginAuthorization {
  /**
   * <p>The Autonomous System Number (ASN) authorized by the ROA.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>The IP address prefix authorized by the ROA in CIDR notation.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The maximum prefix length that the ASN is authorized to announce.</p>
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * <p>Specifies whether the ROA matches the route announcement.</p>
   * @public
   */
  Match?: boolean | undefined;

  /**
   * <p>The expiration date of the ROA.</p>
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * <p>Contains information about an overlapping route detected for a BYOIP prefix.</p>
 * @public
 */
export interface IpamRouteOverlap {
  /**
   * <p>The overlapping IP address prefix in CIDR notation.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The ASN originating the overlapping route.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>The time when the overlap was detected.</p>
   * @public
   */
  DetectedAt?: Date | undefined;
}

/**
 * <p>Contains information about a route protection finding, including the RPKI validation status of a BYOIP route announcement.</p>
 * @public
 */
export interface IpamRouteProtectionFinding {
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
   * <p>The ID of the IPAM pool associated with the finding.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The IP address prefix in CIDR notation.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The state of the BYOIP CIDR. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>advertised</code> - The CIDR is being advertised.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deprovisioned</code> - The CIDR has been deprovisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-deprovision</code> - Deprovisioning failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-provision</code> - Provisioning failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-deprovision</code> - Deprovisioning is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-provision</code> - Provisioning is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned</code> - The CIDR is provisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned-not-publicly-advertisable</code> - The CIDR is provisioned but not publicly advertisable.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: IpamByoipCidrState | undefined;

  /**
   * <p>The advertisement type. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>regional</code> - The IP address is advertised from a single location (regional services such as Amazon EC2).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>global</code> - The IP address is advertised from multiple global locations simultaneously (global services such as Amazon CloudFront).</p>
   *             </li>
   *          </ul>
   * @public
   */
  AdvertisementType?: IpamByoipAdvertisementType | undefined;

  /**
   * <p>The network border group.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The ID of the BYOIP pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) that originates the route.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>The RPKI validation status of the route. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>valid</code> - The route has a matching ROA that covers the prefix and origin ASN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>invalid</code> - The route has a ROA for the prefix, but the origin ASN or prefix length does not match.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown</code> - No ROA exists for the prefix, so RPKI validation cannot be performed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RpkiStatus?: IpamRpkiStatus | undefined;

  /**
   * <p>The RPKI enforcement strength for the route. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>strict</code> - Invalid routes are rejected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>permissive</code> - Invalid routes are accepted but flagged.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RpkiStrength?: IpamRpkiStrength | undefined;

  /**
   * <p>The Route Origin Authorizations (ROAs) that cover the prefix.</p>
   * @public
   */
  Roas?: IpamRouteOriginAuthorization[] | undefined;

  /**
   * <p>The overlapping routes detected for this prefix.</p>
   * @public
   */
  RouteOverlaps?: IpamRouteOverlap[] | undefined;

  /**
   * <p>The time when the route was last sampled.</p>
   * @public
   */
  SampleTime?: Date | undefined;

  /**
   * <p>The time when the ROA data was last sampled.</p>
   * @public
   */
  RoaSampleTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamRouteProtectionFindingsResult {
  /**
   * <p>The ID of the IPAM.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The route protection findings.</p>
   * @public
   */
  RouteProtectionFindings?: IpamRouteProtectionFinding[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamRoutingPolicyRegistrationDeltasRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM internet registry association.</p>
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * <p>Filter results to a specific delta ID.</p>
   * @public
   */
  DeltaId?: string | undefined;

  /**
   * <p>The start of the time range to filter deltas by.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time range to filter deltas by.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The chronological order to return results in. Valid values: <code>forward</code> | <code>reverse</code>.</p>
   * @public
   */
  ChronologicalOrder?: ChronologicalOrder | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
export interface GetIpamRoutingPolicyRegistrationDeltasResult {
  /**
   * <p>The routing policy registration deltas.</p>
   * @public
   */
  IpamRoutingPolicyRegistrationDeltas?: IpamRoutingPolicyRegistrationDelta[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamRoutingPolicyRegistrationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM internet registry association.</p>
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * <p>Filter results to a specific CIDR prefix.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
 * <p>Contains information about a routing policy registration that represents a Route Origin Authorization (ROA) managed through IPAM.</p>
 * @public
 */
export interface IpamRoutingPolicyRegistration {
  /**
   * <p>The IP address prefix in CIDR notation authorized by the ROA.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The Autonomous System Numbers (ASNs) authorized to originate the prefix.</p>
   * @public
   */
  Asns?: string[] | undefined;

  /**
   * <p>Specifies whether to permit more specific route announcements than the CIDR prefix. When enabled, ASNs can announce sub-prefixes of the authorized CIDR up to the specified maximum length. Default: <code>false</code>.</p>
   * @public
   */
  PermitMoreSpecificAnnouncements?: boolean | undefined;

  /**
   * <p>The maximum prefix length that the ASNs are authorized to announce.</p>
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * <p>The description of the routing policy registration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the most recent delta that modified this registration.</p>
   * @public
   */
  LatestDeltaId?: string | undefined;

  /**
   * <p>The state of the routing policy registration. Valid values: <code>pending-activate</code> | <code>activate-failed</code> | <code>create-in-progress</code> | <code>create-complete</code> | <code>update-in-progress</code> | <code>update-complete</code> | <code>delete-in-progress</code> | <code>delete-complete</code>.</p>
   * @public
   */
  State?: IpamRoutingPolicyRegistrationState | undefined;
}

/**
 * @public
 */
export interface GetIpamRoutingPolicyRegistrationsResult {
  /**
   * <p>The routing policy registrations.</p>
   * @public
   */
  IpamRoutingPolicyRegistrations?: IpamRoutingPolicyRegistration[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
export interface GetManagedResourceVisibilityRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the managed resource visibility settings for the account.</p>
 * @public
 */
export interface ManagedResourceVisibilitySettings {
  /**
   * <p>The default visibility setting for managed resources. A value of
   *             <code>hidden</code> indicates that managed resources are not included in Describe
   *             operation responses by default. A value of <code>visible</code> indicates that managed
   *             resources are included by default.</p>
   * @public
   */
  DefaultVisibility?: ManagedResourceDefaultVisibility | undefined;
}

/**
 * @public
 */
export interface GetManagedResourceVisibilityResult {
  /**
   * <p>The managed resource visibility settings for the account.</p>
   * @public
   */
  Visibility?: ManagedResourceVisibilitySettings | undefined;
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
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   * @public
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your current
   *       Convertible Reserved Instances.</p>
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
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of
   *       hours remaining).</p>
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
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This
   *       parameter is reserved and cannot be specified in a request</p>
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
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is
   *       the sum of the list value, remaining upfront price, and additional upfront cost of the
   *       exchange.</p>
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
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be
   *       completed.</p>
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
export interface GetRouteServerAssociationsRequest {
  /**
   * <p>The ID of the route server for which to get association information.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRouteServerAssociationsResult {
  /**
   * <p>Information about the associations for the specified route server.</p>
   * @public
   */
  RouteServerAssociations?: RouteServerAssociation[] | undefined;
}

/**
 * @public
 */
export interface GetRouteServerPropagationsRequest {
  /**
   * <p>The ID of the route server for which to get propagation information.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The ID of the route table for which to get propagation information.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRouteServerPropagationsResult {
  /**
   * <p>Information about the route propagations for the specified route server.</p>
   * @public
   */
  RouteServerPropagations?: RouteServerPropagation[] | undefined;
}

/**
 * @public
 */
export interface GetRouteServerRoutingDatabaseRequest {
  /**
   * <p>The ID of the route server for which to get the routing database.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of routing database entries to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Filters to apply to the routing database query.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes the installation status of a route in a route table.</p>
 * @public
 */
export interface RouteServerRouteInstallationDetail {
  /**
   * <p>The ID of the route table where the route is being installed.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The current installation status of the route in the route table.</p>
   * @public
   */
  RouteInstallationStatus?: RouteServerRouteInstallationStatus | undefined;

  /**
   * <p>The reason for the current installation status of the route.</p>
   * @public
   */
  RouteInstallationStatusReason?: string | undefined;
}

/**
 * <p>Describes a route in the route server's routing database.</p>
 * @public
 */
export interface RouteServerRoute {
  /**
   * <p>The ID of the route server endpoint that received this route.</p>
   * @public
   */
  RouteServerEndpointId?: string | undefined;

  /**
   * <p>The ID of the route server peer that advertised this route.</p>
   * @public
   */
  RouteServerPeerId?: string | undefined;

  /**
   * <p>Details about the installation status of this route in route tables.</p>
   * @public
   */
  RouteInstallationDetails?: RouteServerRouteInstallationDetail[] | undefined;

  /**
   * <p>The current status of the route in the routing database. Values are <code>in-rib</code> or <code>in-fib</code> depending on if the routes are in the RIB or the FIB database.</p>
   *          <p>The <a href="https://en.wikipedia.org/wiki/Routing_table">Routing Information Base (RIB)</a> serves as a database that stores all the routing information and network topology data collected by a router or routing system, such as routes learned from BGP peers. The RIB is constantly updated as new routing information is received or existing routes change. This ensures that the route server always has the most current view of the network topology and can make optimal routing decisions.</p>
   *          <p>The <a href="https://en.wikipedia.org/wiki/Forwarding_information_base">Forwarding Information Base (FIB)</a> serves as a forwarding table for what route server has determined are the best-path routes in the RIB after evaluating all available routing information and policies. The FIB routes are installed on the route tables. The FIB is recomputed whenever there are changes to the RIB.</p>
   * @public
   */
  RouteStatus?: RouteServerRouteStatus | undefined;

  /**
   * <p>The destination CIDR block of the route.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The AS path attributes of the BGP route.</p>
   * @public
   */
  AsPaths?: string[] | undefined;

  /**
   * <p>The Multi-Exit Discriminator (MED) value of the BGP route.</p>
   * @public
   */
  Med?: number | undefined;

  /**
   * <p>The IP address for the next hop.</p>
   * @public
   */
  NextHopIp?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteServerRoutingDatabaseResult {
  /**
   * <p>Indicates whether routes are being persisted in the routing database.</p>
   * @public
   */
  AreRoutesPersisted?: boolean | undefined;

  /**
   * <p>The collection of routes in the route server's routing database.</p>
   * @public
   */
  Routes?: RouteServerRoute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
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

  /**
   * <p>Specify <code>true</code> so that the response returns scores that include Local Zones. Otherwise, the response ignores Local Zones.</p>
   *          <p>When you request regional scores, Local Zone capacity counts toward its parent Region.</p>
   * @public
   */
  IncludeLocalZones?: boolean | undefined;
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
   *          <code>10</code> indicates that your Spot request is highly likely to succeed in this
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
   *          <code>capacity-optimized</code> allocation strategy. If you request a Spot placement
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
export interface GetTransitGatewayMeteringPolicyEntriesRequest {
  /**
   * <p>The ID of the transit gateway metering policy to retrieve entries for.</p>
   * @public
   */
  TransitGatewayMeteringPolicyId: string | undefined;

  /**
   * <p>One or more filters to apply when retrieving metering policy entries.</p>
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
export interface GetTransitGatewayMeteringPolicyEntriesResult {
  /**
   * <p>Information about the transit gateway metering policy entries.</p>
   * @public
   */
  TransitGatewayMeteringPolicyEntries?: TransitGatewayMeteringPolicyEntry[] | undefined;

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
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>policy-rule-number</code> - The rule number for the transit gateway policy table entry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-route-table-id</code> - The ID of the target route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>policy-rule.source-ip</code> - The source CIDR block for the policy rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>policy-rule.destination-ip</code> - The destination CIDR block for the policy rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>policy-rule.source-port</code> - The source port or port range for the policy rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>policy-rule.destination-port</code> - The destination port or port range for the policy rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>policy-rule.protocol</code> - The protocol for the policy rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>policy-rule.meta-data.key</code> - The metadata key for the policy rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>policy-rule.meta-data.value</code> - The metadata value for the policy rule.</p>
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
export interface GetTransitGatewayPolicyTableEntriesResult {
  /**
   * <p>The entries for the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableEntries?: TransitGatewayPolicyTableEntry[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
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
export interface GetVpcResourcesBlockingEncryptionEnforcementRequest {
  /**
   * <p>The ID of the VPC to check for resources blocking encryption enforcement.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
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
 * <p>Describes a resource that is not compliant with VPC encryption requirements.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @public
 */
export interface VpcEncryptionNonCompliantResource {
  /**
   * <p>The ID of the non-compliant resource.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the non-compliant resource.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>A description of the non-compliant resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the resource can be excluded from encryption enforcement.</p>
   * @public
   */
  IsExcludable?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVpcResourcesBlockingEncryptionEnforcementResult {
  /**
   * <p>Information about resources that are blocking encryption enforcement.</p>
   * @public
   */
  NonCompliantResources?: VpcEncryptionNonCompliantResource[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The type of sample configuration to generate. Valid values are "compatibility" (includes IKEv1) or "recommended" (throws UnsupportedOperationException for IKEv1).</p>
   * @public
   */
  SampleType?: string | undefined;

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
