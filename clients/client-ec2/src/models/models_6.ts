// smithy-typescript generated code
import type {
  AllowedImagesSettingsEnabledState,
  AnalysisStatus,
  ArchitectureType,
  CapacityManagerMonitoredTagKeyStatus,
  CapacityManagerStatus,
  CapacityReservationState,
  CapacityTenancy,
  CapacityUnit,
  ChronologicalOrder,
  ClientCertificateRevocationListStatusCode,
  ClientVpnAuthorizationPolicyShadowMode,
  ClientVpnAuthorizationPolicyStatus,
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
  ReservationEndDateType,
  ReservationState,
  ReservationType,
  RouteServerRouteInstallationStatus,
  RouteServerRouteStatus,
  SeverityLabel,
  SnapshotBlockPublicAccessState,
  SSEType,
  StatisticType,
  SupportabilityMarketType,
  SupportabilityScore,
  TargetCapacityUnitType,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentNatGatewaySupportState,
  TransitGatewayAttachmentNatSystemRouteSupportValue,
  TransitGatewayAttachmentResourceType,
  TransitGatewayNatRuleState,
  TransitGatewayPropagationState,
  UnlimitedSupportedInstanceFamily,
  UserTrustProviderType,
  VirtualizationType,
} from "./enums";
import type {
  AccessScopeAnalysisFinding,
  ActiveVpnTunnelStatus,
  AddressTransfer,
  InterruptibleCapacityAllocation,
  InterruptionInfo,
  IpamPoolAllocation,
  IpamRoutingPolicyRegistrationDelta,
  RouteServerAssociation,
  SubnetAssociation,
  Tag,
  TagSpecification,
  TargetConfigurationRequest,
  TransitGatewayAssociation,
  TransitGatewayPolicyTableAssociation,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
} from "./models_0";
import type {
  InstanceRequirementsRequest,
  IpamInternetRegistryAssociation,
  IpamResourceTag,
  NetworkInsightsAccessScopeContent,
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
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchSnapshotConfigurationResponse,
  Filter,
  IpamPoolCidr,
} from "./models_3";
import type { RegisteredInstance } from "./models_4";
import type {
  RouteServerPropagation,
  SuccessfulSuppressionResponseObject,
  TransitGatewayPropagation,
  UnsuccessfulSuppressionResponseObject,
} from "./models_5";

/**
 * @public
 */
export interface DisassociateTransitGatewayPolicyTableRequest {
  /**
   * The ID of the disassociated policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * The ID of the transit gateway attachment to disassociate from the policy table.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayPolicyTableResult {
  /**
   * Returns details about the transit gateway policy table disassociation.
   *
   * @public
   */
  Association?: TransitGatewayPolicyTableAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * Information about the association.
   *
   * @public
   */
  Association?: TransitGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateTrunkInterfaceRequest {
  /**
   * The ID of the association
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateTrunkInterfaceResult {
  /**
   * Is `true` if the request succeeds and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockRequest {
  /**
   * The association ID for the CIDR block.
   *
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockResult {
  /**
   * Information about the IPv6 CIDR block association.
   *
   * @public
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation | undefined;

  /**
   * Information about the IPv4 CIDR block association.
   *
   * @public
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface EnableAddressTransferRequest {
  /**
   * The allocation ID of an Elastic IP address.
   *
   * @public
   */
  AllocationId: string | undefined;

  /**
   * The ID of the account that you want to transfer the Elastic IP address to.
   *
   * @public
   */
  TransferAccountId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableAddressTransferResult {
  /**
   * An Elastic IP address transfer.
   *
   * @public
   */
  AddressTransfer?: AddressTransfer | undefined;
}

/**
 * @public
 */
export interface EnableAllowedImagesSettingsRequest {
  /**
   * Specify `enabled` to apply the image criteria specified by the Allowed AMIs settings. Specify `audit-mode` so that you can check which AMIs will be allowed or not allowed by the image criteria.
   *
   * @public
   */
  AllowedImagesSettingsState: AllowedImagesSettingsEnabledState | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableAllowedImagesSettingsResult {
  /**
   * Returns `enabled` or `audit-mode` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  AllowedImagesSettingsState?: AllowedImagesSettingsEnabledState | undefined;
}

/**
 * @public
 */
export interface EnableApplicationStatusCheckSuppressionRequest {
  /**
   * The IDs of the instances for which to suppress application status checks.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The duration, in seconds, for which to suppress application status checks. If omitted, the application status check is suppressed indefinitely until you call `DisableApplicationStatusCheckSuppression`.
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same token, the service ignores the request but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableApplicationStatusCheckSuppressionResult {
  /**
   * The instances for which suppression was successfully enabled.
   *
   * @public
   */
  SuccessfulResults?: SuccessfulSuppressionResponseObject[] | undefined;

  /**
   * The instances for which suppression failed to be enabled.
   *
   * @public
   */
  UnsuccessfulResults?: UnsuccessfulSuppressionResponseObject[] | undefined;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * The source Region (like `us-east-1`) or Availability Zone ID (like `use1-az1`) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The target Region (like `us-east-2`) or Availability Zone ID (like `use2-az2`) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The metric used for the enabled subscription.
   *
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * The statistic used for the enabled subscription.
   *
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * Indicates whether the subscribe action was successful.
   *
   * @public
   */
  Output?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableCapacityManagerRequest {
  /**
   * Specifies whether to enable cross-account access for Amazon Web Services Organizations. When enabled, Capacity Manager can aggregate data from all accounts in your organization. Default is false.
   *
   * @public
   */
  OrganizationsAccess?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableCapacityManagerResult {
  /**
   * The current status of Capacity Manager after the enable operation.
   *
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * Indicates whether Organizations access is enabled for cross-account data aggregation.
   *
   * @public
   */
  OrganizationsAccess?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableEbsEncryptionByDefaultResult {
  /**
   * The updated status of encryption by default.
   *
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;
}

/**
 * Request to create a launch template for a Windows fast launch enabled AMI.
 *
 * > **Note:** Note - You can specify either the `LaunchTemplateName` or the `LaunchTemplateId`, but not both.
 *
 * @public
 */
export interface FastLaunchLaunchTemplateSpecificationRequest {
  /**
   * Specify the ID of the launch template that the AMI should use for Windows fast launch.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * Specify the name of the launch template that the AMI should use for Windows fast launch.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * Specify the version of the launch template that the AMI should use for Windows fast launch.
   *
   * @public
   */
  Version: string | undefined;
}

/**
 * Configuration settings for creating and managing pre-provisioned snapshots for a Windows fast launch enabled AMI.
 *
 * @public
 */
export interface FastLaunchSnapshotConfigurationRequest {
  /**
   * The number of pre-provisioned snapshots to keep on hand for a Windows fast launch enabled AMI.
   *
   * @public
   */
  TargetResourceCount?: number | undefined;
}

/**
 * @public
 */
export interface EnableFastLaunchRequest {
  /**
   * Specify the ID of the image for which to enable Windows fast launch.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The type of resource to use for pre-provisioning the AMI for Windows fast launch. Supported values include: `snapshot`, which is the default value.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Configuration settings for creating and managing the snapshots that are used for pre-provisioning the AMI for Windows fast launch. The associated `ResourceType` must be `snapshot`.
   *
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest | undefined;

  /**
   * The launch template to use when launching Windows instances from pre-provisioned snapshots. Launch template parameters can include either the name or ID of the launch template, but not both.
   *
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest | undefined;

  /**
   * The maximum number of instances that Amazon EC2 can launch at the same time to create pre-provisioned snapshots for Windows fast launch. Value must be `6` or greater.
   *
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableFastLaunchResult {
  /**
   * The image ID that identifies the AMI for which Windows fast launch was enabled.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The type of resource that was defined for pre-provisioning the AMI for Windows fast launch.
   *
   * @public
   */
  ResourceType?: FastLaunchResourceType | undefined;

  /**
   * Settings to create and manage the pre-provisioned snapshots that Amazon EC2 uses for faster launches from the Windows AMI. This property is returned when the associated `resourceType` is `snapshot`.
   *
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse | undefined;

  /**
   * The launch template that is used when launching Windows instances from pre-provisioned snapshots.
   *
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse | undefined;

  /**
   * The maximum number of instances that Amazon EC2 can launch at the same time to create pre-provisioned snapshots for Windows fast launch.
   *
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * The owner ID for the AMI for which Windows fast launch was enabled.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The current state of Windows fast launch for the specified AMI.
   *
   * @public
   */
  State?: FastLaunchStateCode | undefined;

  /**
   * The reason that the state changed for Windows fast launch for the AMI.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * The time that the state changed for Windows fast launch for the AMI.
   *
   * @public
   */
  StateTransitionTime?: Date | undefined;
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresRequest {
  /**
   * One or more Availability Zones. For example, `us-east-2a`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * One or more Availability Zone IDs. For example, `use2-az1`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * The IDs of one or more snapshots. For example, `snap-1234567890abcdef0`. You can specify a snapshot that was shared with you from another Amazon Web Services account.
   *
   * @public
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes fast snapshot restores that were successfully enabled.
 *
 * @public
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The state of fast snapshot restores.
   *
   * @public
   */
  State?: FastSnapshotRestoreStateCode | undefined;

  /**
   * The reason for the state transition. The possible values are as follows:
   *
   * - `Client.UserInitiated` - The state successfully transitioned to `enabling` or `disabling`.
   * - `Client.UserInitiated - Lifecycle state transition` - The state successfully transitioned to `optimizing`, `enabled`, or `disabled`.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.
   *
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * The time at which fast snapshot restores entered the `enabling` state.
   *
   * @public
   */
  EnablingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `optimizing` state.
   *
   * @public
   */
  OptimizingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `enabled` state.
   *
   * @public
   */
  EnabledTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `disabling` state.
   *
   * @public
   */
  DisablingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `disabled` state.
   *
   * @public
   */
  DisabledTime?: Date | undefined;
}

/**
 * Describes an error that occurred when enabling fast snapshot restores.
 *
 * @public
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains information about an error that occurred when enabling fast snapshot restores.
 *
 * @public
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The error.
   *
   * @public
   */
  Error?: EnableFastSnapshotRestoreStateError | undefined;
}

/**
 * Contains information about the errors that occurred when enabling fast snapshot restores.
 *
 * @public
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The errors.
   *
   * @public
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[] | undefined;
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresResult {
  /**
   * Information about the snapshots for which fast snapshot restores were successfully enabled.
   *
   * @public
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[] | undefined;

  /**
   * Information about the snapshots for which fast snapshot restores could not be enabled.
   *
   * @public
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[] | undefined;
}

/**
 * @public
 */
export interface EnableImageRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageBlockPublicAccessRequest {
  /**
   * Specify `block-new-sharing` to enable block public access for AMIs at the account level in the specified Region. This will block any attempt to publicly share your AMIs in the specified Region.
   *
   * @public
   */
  ImageBlockPublicAccessState: ImageBlockPublicAccessEnabledState | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageBlockPublicAccessResult {
  /**
   * Returns `block-new-sharing` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ImageBlockPublicAccessState?: ImageBlockPublicAccessEnabledState | undefined;
}

/**
 * @public
 */
export interface EnableImageDeprecationRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The date and time to deprecate the AMI, in UTC, in the following format: *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z. If you specify a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.
   *
   * You can’t specify a date in the past. The upper limit for `DeprecateAt` is 10 years from now, except for public AMIs, where the upper limit is 2 years from the creation date.
   *
   * @public
   */
  DeprecateAt: Date | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageDeprecationResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageDeregistrationProtectionRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * If `true`, enforces deregistration protection for 24 hours after deregistration protection is disabled.
   *
   * @public
   */
  WithCooldown?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageDeregistrationProtectionResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: string | undefined;
}

/**
 * @public
 */
export interface EnableInstanceSqlHaStandbyDetectionsRequest {
  /**
   * The IDs of the instances to enable for SQL Server High Availability standby detection monitoring.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * The ARN of the Secrets Manager secret containing the SQL Server access credentials. The specified secret must contain valid SQL Server credentials for the specified instances. If not specified, deafult local user credentials will be used by the Amazon Web Services Systems Manager agent. To enable instances with different credentials, you must make separate requests.
   *
   * @public
   */
  SqlServerCredentials?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableInstanceSqlHaStandbyDetectionsResult {
  /**
   * Information about the instances that were enabled for SQL Server High Availability standby detection monitoring.
   *
   * @public
   */
  Instances?: RegisteredInstance[] | undefined;
}

/**
 * @public
 */
export interface EnableIpamInternetRegistryAssociationRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association to enable.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * The RPKI version to use from the Parent Response XML.
   *
   * @public
   */
  RpkiVersion: string | undefined;

  /**
   * The RPKI service URI for the publication point from the Parent Response XML.
   *
   * @public
   */
  ServiceUri: string | undefined;

  /**
   * The child handle for the BPKI certificate hierarchy from the Parent Response XML.
   *
   * @public
   */
  ChildHandle: string | undefined;

  /**
   * The parent handle for the BPKI certificate hierarchy from the Parent Response XML.
   *
   * @public
   */
  ParentHandle: string | undefined;

  /**
   * The parent BPKI Trust Anchor certificate in PEM format from the Parent Response XML.
   *
   * @public
   */
  ParentBpkiTa: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamInternetRegistryAssociationResult {
  /**
   * Information about the enabled internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociation?: IpamInternetRegistryAssociation | undefined;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The Organizations member account ID that you want to enable as the IPAM account.
   *
   * @public
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountResult {
  /**
   * The result of enabling the IPAM account.
   *
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableIpamPolicyRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM policy to enable.
   *
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.
   *
   * The ID of the Amazon Web Services Organizations target for which to enable the IPAM policy. This parameter is required only when IPAM is integrated with Amazon Web Services Organizations. When IPAM is not integrated with Amazon Web Services Organizations, omit this parameter and the policy will apply to the current account.
   *
   * @public
   */
  OrganizationTargetId?: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamPolicyResult {
  /**
   * The ID of the IPAM policy that was enabled.
   *
   * @public
   */
  IpamPolicyId?: string | undefined;
}

/**
 * @public
 */
export interface EnableReachabilityAnalyzerOrganizationSharingRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableReachabilityAnalyzerOrganizationSharingResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableRouteServerPropagationRequest {
  /**
   * The ID of the route server for which to enable propagation.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * The ID of the route table to which route server will propagate routes.
   *
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableRouteServerPropagationResult {
  /**
   * Information about the enabled route server propagation.
   *
   * @public
   */
  RouteServerPropagation?: RouteServerPropagation | undefined;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessResult {
  /**
   * If `true`, access to the EC2 serial console of all instances is enabled for your account. If `false`, access to the EC2 serial console of all instances is disabled for your account.
   *
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotBlockPublicAccessRequest {
  /**
   * The mode in which to enable block public access for snapshots for the Region. Specify one of the following values:
   *
   * - `block-all-sharing` - Prevents all public sharing of snapshots in the Region. Users in the account will no longer be able to request new public sharing. Additionally, snapshots that are already publicly shared are treated as private and they are no longer publicly available.
   * - `block-new-sharing` - Prevents only new public sharing of snapshots in the Region. Users in the account will no longer be able to request new public sharing. However, snapshots that are already publicly shared, remain publicly available.
   *
   * `unblocked` is not a valid value for **EnableSnapshotBlockPublicAccess**.
   *
   * @public
   */
  State: SnapshotBlockPublicAccessState | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotBlockPublicAccessResult {
  /**
   * The state of block public access for snapshots for the account and Region. Returns either `block-all-sharing` or `block-new-sharing` if the request succeeds.
   *
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * The ID of the propagation route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the transit gateway route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * Information about route propagation.
   *
   * @public
   */
  Propagation?: TransitGatewayPropagation | undefined;
}

/**
 * Contains the parameters for EnableVgwRoutePropagation.
 *
 * @public
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with.
   *
   * @public
   */
  GatewayId: string | undefined;

  /**
   * The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to.
   *
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableVolumeIORequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the state of a client certificate revocation list.
 *
 * @public
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * The state of the client certificate revocation list.
   *
   * @public
   */
  Code?: ClientCertificateRevocationListStatusCode | undefined;

  /**
   * A message about the status of the client certificate revocation list, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * Information about the client certificate revocation list.
   *
   * @public
   */
  CertificateRevocationList?: string | undefined;

  /**
   * The current state of the client certificate revocation list.
   *
   * @public
   */
  Status?: ClientCertificateRevocationListStatus | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationResult {
  /**
   * The contents of the Client VPN endpoint configuration file.
   *
   * @public
   */
  ClientConfiguration?: string | undefined;
}

/**
 * Describes the destination for an export image task.
 *
 * @public
 */
export interface ExportTaskS3LocationRequest {
  /**
   * The destination Amazon S3 bucket.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The prefix (logical hierarchy) in the bucket.
   *
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface ExportImageRequest {
  /**
   * Token to enable idempotency for export image requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A description of the image being exported. The maximum length is 255 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The disk image format.
   *
   * @public
   */
  DiskImageFormat: DiskImageFormat | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the image.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The Amazon S3 bucket for the destination image. The destination bucket must exist.
   *
   * @public
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * The name of the role that grants VM Import/Export permission to export images to your Amazon S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The tags to apply to the export image task during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface ExportImageResult {
  /**
   * A description of the image being exported.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The disk image format for the exported image.
   *
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * The ID of the export image task.
   *
   * @public
   */
  ExportImageTaskId?: string | undefined;

  /**
   * The ID of the image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The name of the role that grants VM Import/Export permission to export images to your Amazon S3 bucket.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The percent complete of the export image task.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * Information about the destination Amazon S3 bucket.
   *
   * @public
   */
  S3ExportLocation?: ExportTaskS3Location | undefined;

  /**
   * The status of the export image task. The possible values are `active`, `completed`, `deleting`, and `deleted`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The status message for the export image task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Any tags assigned to the export image task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ExportTransitGatewayRoutesRequest {
  /**
   * The ID of the route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `attachment.transit-gateway-attachment-id` - The id of the transit gateway attachment.
   * - `attachment.resource-id` - The resource id of the transit gateway attachment.
   * - `route-search.exact-match` - The exact match of the specified filter.
   * - `route-search.longest-prefix-match` - The longest prefix that matches the route.
   * - `route-search.subnet-of-match` - The routes with a subnet that match the specified CIDR filter.
   * - `route-search.supernet-of-match` - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29.
   * - `state` - The state of the route (`active` | `blackhole`).
   * - `transit-gateway-route-destination-cidr-block` - The CIDR range.
   * - `type` - The type of route (`propagated` | `static`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportTransitGatewayRoutesResult {
  /**
   * The URL of the exported file in Amazon S3. For example, s3://*bucket_name*\/VPCTransitGateway/TransitGatewayRouteTables/*file_name*.
   *
   * @public
   */
  S3Location?: string | undefined;
}

/**
 * @public
 */
export interface ExportVerifiedAccessInstanceClientConfigurationRequest {
  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a route.
 *
 * @public
 */
export interface VerifiedAccessInstanceOpenVpnClientConfigurationRoute {
  /**
   * The CIDR block.
   *
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Describes a set of routes.
 *
 * @public
 */
export interface VerifiedAccessInstanceOpenVpnClientConfiguration {
  /**
   * The base64-encoded Open VPN client configuration.
   *
   * @public
   */
  Config?: string | undefined;

  /**
   * The routes.
   *
   * @public
   */
  Routes?: VerifiedAccessInstanceOpenVpnClientConfigurationRoute[] | undefined;
}

/**
 * Describes the trust provider.
 *
 * @public
 */
export interface VerifiedAccessInstanceUserTrustProviderClientConfiguration {
  /**
   * The trust provider type.
   *
   * @public
   */
  Type?: UserTrustProviderType | undefined;

  /**
   * The set of user claims to be requested from the IdP.
   *
   * @public
   */
  Scopes?: string | undefined;

  /**
   * The OIDC issuer identifier of the IdP.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The authorization endpoint of the IdP.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The public signing key endpoint.
   *
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

  /**
   * The token endpoint of the IdP.
   *
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * The user info endpoint of the IdP.
   *
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * The OAuth 2.0 client identifier.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The OAuth 2.0 client secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * Indicates whether Proof of Key Code Exchange (PKCE) is enabled.
   *
   * @public
   */
  PkceEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportVerifiedAccessInstanceClientConfigurationResult {
  /**
   * The version.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * The Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The device trust providers.
   *
   * @public
   */
  DeviceTrustProviders?: DeviceTrustProviderType[] | undefined;

  /**
   * The user identity trust provider.
   *
   * @public
   */
  UserTrustProvider?: VerifiedAccessInstanceUserTrustProviderClientConfiguration | undefined;

  /**
   * The Open VPN configuration.
   *
   * @public
   */
  OpenVpnConfigurations?: VerifiedAccessInstanceOpenVpnClientConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetActiveVpnTunnelStatusRequest {
  /**
   * The ID of the VPN connection for which to retrieve the active tunnel status.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * The external IP address of the VPN tunnel for which to retrieve the active status.
   *
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetActiveVpnTunnelStatusResult {
  /**
   * Information about the current security configuration of the VPN tunnel.
   *
   * @public
   */
  ActiveVpnTunnelStatus?: ActiveVpnTunnelStatus | undefined;
}

/**
 * @public
 */
export interface GetAllowedImagesSettingsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * The maximum age for allowed images.
 *
 * @public
 */
export interface CreationDateCondition {
  /**
   * The maximum number of days that have elapsed since the image was created. For example, a value of `300` allows images that were created within the last 300 days.
   *
   * @public
   */
  MaximumDaysSinceCreated?: number | undefined;
}

/**
 * The maximum period since deprecation for allowed images.
 *
 * @public
 */
export interface DeprecationTimeCondition {
  /**
   * The maximum number of days that have elapsed since the image was deprecated. When set to `0`, no deprecated images are allowed.
   *
   * @public
   */
  MaximumDaysSinceDeprecated?: number | undefined;
}

/**
 * The watermark filter criteria for an allowed image. Each entry can specify one or more fields. All specified fields must match the same watermark on the image.
 *
 * @public
 */
export interface ImageWatermarkFilterResponse {
  /**
   * The `accountId:name` of the watermark. Supports wildcards (`*`, `?`).
   *
   * @public
   */
  WatermarkKey?: string | undefined;

  /**
   * The Region where the watermark was originally created. Supports wildcards (`*`, `?`).
   *
   * @public
   */
  SourceImageRegion?: string | undefined;

  /**
   * The maximum number of days that have elapsed since the source image was created.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaximumDaysSinceSourceImageCreated?: number | undefined;

  /**
   * The maximum number of days that have elapsed since the watermark was attached to the image.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaximumDaysSinceWatermarkCreated?: number | undefined;
}

/**
 * The Amazon Inspector scan-result criteria that an AMI must meet to be allowed. The criteria can limit the highest finding severity. They can also limit, for each severity, the days since Amazon Inspector reported a fix as available.
 *
 * The severity limit applies to all findings, whether or not a fix is available. The day limits for each severity apply only to findings that have a fix available. A scanned AMI that has no fix-available finding of a given severity meets that severity's day limit. AMIs that Amazon Inspector has not scanned are not allowed when you specify this condition.
 *
 * @public
 */
export interface ScanResultCondition {
  /**
   * The maximum number of days that have elapsed since Amazon Inspector last scanned the AMI. For example, a value of `7` allows AMIs that were scanned within the last 7 days. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceLastFindingScan?: number | undefined;

  /**
   * The maximum severity that an AMI's Amazon Inspector findings can have for the AMI to be allowed. Findings count whether or not a fix is available. For example, a value of `medium` allows AMIs whose highest severity is `informational`, `low`, or `medium`.
   *
   * The valid values are the following Amazon Inspector severity levels, which correspond to CVSS score ranges:
   *
   * - `informational` - CVSS score of 0.
   * - `low` - CVSS score of 0.1 to 3.9.
   * - `medium` - CVSS score of 4.0 to 6.9.
   * - `high` - CVSS score of 7.0 to 8.9.
   * - `critical` - CVSS score of 9.0 to 10.0.
   *
   * For more information, see [Software package vulnerability severity](https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html#findings-understanding-package-score) in the *Amazon Inspector User Guide*.
   *
   * A scanned AMI that has no findings meets this limit.
   *
   * AMIs that Amazon Inspector has not scanned are not allowed when you specify this condition.
   *
   * @public
   */
  MaximumSeverityLabel?: SeverityLabel | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for an `informational` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `informational` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceInformationalFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `low` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `low` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceLowFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `medium` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `medium` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceMediumFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `high` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `high` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceHighFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `critical` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `critical` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceCriticalFixAvailable?: number | undefined;
}

/**
 * The criteria that are evaluated to determine which AMIs are discoverable and usable in your account for the specified Amazon Web Services Region.
 *
 * For more information, see [How Allowed AMIs works](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html#how-allowed-amis-works) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface ImageCriterion {
  /**
   * The image providers whose images are allowed.
   *
   * Possible values:
   *
   * - `amazon`: Allow AMIs created by Amazon or verified providers.
   * - `aws-marketplace`: Allow AMIs created by verified providers in the Amazon Web Services Marketplace.
   * - `aws-backup-vault`: Allow AMIs created by Amazon Web Services Backup.
   * - 12-digit account ID: Allow AMIs created by this account. One or more account IDs can be specified.
   * - `none`: Allow AMIs created by your own account only.
   *
   * Maximum: 200 values
   *
   * @public
   */
  ImageProviders?: string[] | undefined;

  /**
   * The Amazon Web Services Marketplace product codes for allowed images.
   *
   * Length: 1-25 characters
   *
   * Valid characters: Letters (`A–Z, a–z`) and numbers (`0–9`)
   *
   * Maximum: 50 values
   *
   * @public
   */
  MarketplaceProductCodes?: string[] | undefined;

  /**
   * The names of allowed images. Names can include wildcards (`?` and `*`).
   *
   * Length: 1–128 characters. With `?`, the minimum is 3 characters.
   *
   * Valid characters:
   *
   * - Letters: `A–Z, a–z`
   * - Numbers: `0–9`
   * - Special characters: `( ) [ ] . / - ' @ _ * ?`
   * - Spaces
   *
   * Maximum: 50 values
   *
   * @public
   */
  ImageNames?: string[] | undefined;

  /**
   * The maximum period since deprecation for allowed images.
   *
   * @public
   */
  DeprecationTimeCondition?: DeprecationTimeCondition | undefined;

  /**
   * The maximum age for allowed images.
   *
   * @public
   */
  CreationDateCondition?: CreationDateCondition | undefined;

  /**
   * The watermark criteria that an AMI must match to be allowed. An AMI is allowed if it carries at least one watermark that satisfies an ImageWatermarkFilter. A watermark satisfies a filter when all specified fields in the ImageWatermarkFilter match the corresponding values on the watermark of the AMI.
   *
   * Maximum: 50 values
   *
   * @public
   */
  ImageWatermarks?: ImageWatermarkFilterResponse[] | undefined;

  /**
   * The Amazon Inspector scan-result criteria that an AMI must meet to be allowed. The criteria can limit the highest finding severity, the number of days since Amazon Inspector last scanned the AMI, and the number of days since Amazon Inspector reported a fix as available.
   *
   * @public
   */
  ScanResultCondition?: ScanResultCondition | undefined;
}

/**
 * @public
 */
export interface GetAllowedImagesSettingsResult {
  /**
   * The current state of the Allowed AMIs setting at the account level in the specified Amazon Web Services Region.
   *
   * Possible values:
   *
   * - `disabled`: All AMIs are allowed.
   * - `audit-mode`: All AMIs are allowed, but the `ImageAllowed` field is set to `true` if the AMI would be allowed with the current list of criteria if allowed AMIs was enabled.
   * - `enabled`: Only AMIs matching the image criteria are discoverable and available for use.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The list of criteria for images that are discoverable and usable in the account in the specified Amazon Web Services Region.
   *
   * @public
   */
  ImageCriteria?: ImageCriterion[] | undefined;

  /**
   * The entity that manages the Allowed AMIs settings. Possible values include:
   *
   * - `account` - The Allowed AMIs settings is managed by the account.
   * - `declarative-policy` - The Allowed AMIs settings is managed by a declarative policy and can't be modified by the account.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon S3 object information.
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about the associated IAM roles.
 *
 * @public
 */
export interface AssociatedRole {
  /**
   * The ARN of the associated IAM role.
   *
   * @public
   */
  AssociatedRoleArn?: string | undefined;

  /**
   * The name of the Amazon S3 bucket in which the Amazon S3 object is stored.
   *
   * @public
   */
  CertificateS3BucketName?: string | undefined;

  /**
   * The key of the Amazon S3 object where the certificate, certificate chain, and encrypted private key bundle are stored. The object key is formatted as follows: `role_arn`/`certificate_arn`.
   *
   * @public
   */
  CertificateS3ObjectKey?: string | undefined;

  /**
   * The ID of the KMS key used to encrypt the private key.
   *
   * @public
   */
  EncryptionKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * Information about the associated IAM roles.
   *
   * @public
   */
  AssociatedRoles?: AssociatedRole[] | undefined;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * The ID of the IPv6 address pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an IPv6 CIDR block association.
 *
 * @public
 */
export interface Ipv6CidrAssociation {
  /**
   * The IPv6 CIDR block.
   *
   * @public
   */
  Ipv6Cidr?: string | undefined;

  /**
   * The resource that's associated with the IPv6 CIDR block.
   *
   * @public
   */
  AssociatedResource?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * Information about the IPv6 CIDR block associations.
   *
   * @public
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A query used for retrieving network health data.
 *
 * @public
 */
export interface DataQuery {
  /**
   * A user-defined ID associated with a data query that's returned in the `dataResponse` identifying the query. For example, if you set the Id to `MyQuery01`in the query, the `dataResponse` identifies the query as `MyQuery01`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Region or Availability Zone that's the source for the data query. For example, `us-east-1`.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The Region or Availability Zone that's the target for the data query. For example, `eu-north-1`.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The metric used for the network performance request.
   *
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * The metric data aggregation period, `p50`, between the specified `startDate` and `endDate`. For example, a metric of `five_minutes` is the median of all the data points gathered within those five minutes. `p50` is the only supported metric.
   *
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * The aggregation period used for the data query.
   *
   * @public
   */
  Period?: PeriodType | undefined;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataRequest {
  /**
   * A list of network performance data queries.
   *
   * @public
   */
  DataQueries?: DataQuery[] | undefined;

  /**
   * The starting time for the performance data request. The starting time must be formatted as `yyyy-mm-ddThh:mm:ss`. For example, `2022-06-10T12:00:00.000Z`.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The ending time for the performance data request. The end time must be formatted as `yyyy-mm-ddThh:mm:ss`. For example, `2022-06-12T12:00:00.000Z`.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Indicates whether the network was healthy or degraded at a particular point. The value is aggregated from the `startDate` to the `endDate`. Currently only `five_minutes` is supported.
 *
 * @public
 */
export interface MetricPoint {
  /**
   * The start date for the metric point. The starting date for the metric point. The starting time must be formatted as `yyyy-mm-ddThh:mm:ss`. For example, `2022-06-10T12:00:00.000Z`.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The end date for the metric point. The ending time must be formatted as `yyyy-mm-ddThh:mm:ss`. For example, `2022-06-12T12:00:00.000Z`.
   *
   * @public
   */
  EndDate?: Date | undefined;

  Value?: number | undefined;
  /**
   * The status of the metric point.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The response to a `DataQuery`.
 *
 * @public
 */
export interface DataResponse {
  /**
   * The ID passed in the `DataQuery`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Region or Availability Zone that's the source for the data query. For example, `us-east-1`.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The Region or Availability Zone that's the destination for the data query. For example, `eu-west-1`.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The metric used for the network performance request.
   *
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * The statistic used for the network performance request.
   *
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * The period used for the network performance request.
   *
   * @public
   */
  Period?: PeriodType | undefined;

  /**
   * A list of `MetricPoint` objects.
   *
   * @public
   */
  MetricPoints?: MetricPoint[] | undefined;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataResult {
  /**
   * The list of data responses.
   *
   * @public
   */
  DataResponses?: DataResponse[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerAttributesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerAttributesResult {
  /**
   * The current status of Capacity Manager.
   *
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * Indicates whether Organizations access is enabled for cross-account data aggregation.
   *
   * @public
   */
  OrganizationsAccess?: boolean | undefined;

  /**
   * The number of active data export configurations for this account. This count includes all data exports regardless of their current delivery status.
   *
   * @public
   */
  DataExportCount?: number | undefined;

  /**
   * The current data ingestion status. Initial ingestion may take several hours after enabling Capacity Manager.
   *
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;

  /**
   * A descriptive message providing additional details about the current ingestion status. This may include error information if ingestion has failed or progress details during initial setup.
   *
   * @public
   */
  IngestionStatusMessage?: string | undefined;

  /**
   * The timestamp of the earliest data point available in Capacity Manager, in milliseconds since epoch. This indicates how far back historical data is available for queries.
   *
   * @public
   */
  EarliestDatapointTimestamp?: Date | undefined;

  /**
   * The timestamp of the most recent data point ingested by Capacity Manager, in milliseconds since epoch. This indicates how current your capacity data is.
   *
   * @public
   */
  LatestDatapointTimestamp?: Date | undefined;
}

/**
 * Specifies a condition for filtering capacity data based on dimension values. Used to create precise filters for metric queries and dimension lookups.
 *
 * @public
 */
export interface DimensionCondition {
  /**
   * The name of the dimension to filter by.
   *
   * @public
   */
  Dimension?: FilterByDimension | undefined;

  /**
   * The comparison operator to use for the filter.
   *
   * @public
   */
  Comparison?: Comparison | undefined;

  /**
   * The list of values to match against the specified dimension. For 'equals' comparison, only the first value is used. For 'in' comparison, any matching value will satisfy the condition.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Represents a filter condition for Capacity Manager queries. Contains dimension-based filtering criteria used to narrow down metric data and dimension results.
 *
 * @public
 */
export interface CapacityManagerCondition {
  /**
   * The dimension-based condition that specifies how to filter the data based on dimension values.
   *
   * @public
   */
  DimensionCondition?: DimensionCondition | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDataRequest {
  /**
   * The names of the metrics to retrieve. Maximum of 10 metrics per request.
   *
   * @public
   */
  MetricNames: Metric[] | undefined;

  /**
   * The start time for the metric data query, in ISO 8601 format. The time range (end time - start time) must be a multiple of the specified period.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time for the metric data query, in ISO 8601 format. If the end time is beyond the latest ingested data, it will be automatically adjusted to the latest available data point.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The granularity, in seconds, of the returned data points.
   *
   * @public
   */
  Period: number | undefined;

  /**
   * The dimensions by which to group the metric data. This determines how the data is aggregated and returned.
   *
   * @public
   */
  GroupBy?: GroupBy[] | undefined;

  /**
   * Conditions to filter the metric data. Each filter specifies a dimension, comparison operator ('equals', 'in'), and values to match against.
   *
   * @public
   */
  FilterBy?: CapacityManagerCondition[] | undefined;

  /**
   * The maximum number of data points to return. Valid range is 1 to 100,000. Use with NextToken for pagination of large result sets.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional data points.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * A key-value pair representing a tag associated with a capacity resource in Capacity Manager.
 *
 * @public
 */
export interface CapacityManagerTagDimension {
  /**
   * The tag key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Represents dimension values for capacity metrics, including resource identifiers, geographic information, and reservation details used for grouping and filtering capacity data.
 *
 * @public
 */
export interface CapacityManagerDimension {
  /**
   * The Amazon Web Services Region where the capacity resource is located.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The unique identifier of the Availability Zone where the capacity resource is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the capacity resource.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Amazon Web Services account that owns the capacity resource. This dimension is only available when Organizations access is enabled for Capacity Manager.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The EC2 instance family of the capacity resource.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The specific EC2 instance type of the capacity resource.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The platform or operating system of the instance.
   *
   * @public
   */
  InstancePlatform?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the capacity reservation. This provides a unique identifier that can be used across Amazon Web Services services to reference the specific reservation.
   *
   * @public
   */
  ReservationArn?: string | undefined;

  /**
   * The unique identifier of the capacity reservation.
   *
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * The type of capacity reservation.
   *
   * @public
   */
  ReservationType?: ReservationType | undefined;

  /**
   * The timestamp when the capacity reservation was originally created, in milliseconds since epoch. This differs from the start timestamp as reservations can be created before they become active.
   *
   * @public
   */
  ReservationCreateTimestamp?: Date | undefined;

  /**
   * The timestamp when the capacity reservation becomes active and available for use, in milliseconds since epoch. This is when the reservation begins providing capacity.
   *
   * @public
   */
  ReservationStartTimestamp?: Date | undefined;

  /**
   * The timestamp when the capacity reservation expires and is no longer available, in milliseconds since epoch. After this time, the reservation will not provide any capacity.
   *
   * @public
   */
  ReservationEndTimestamp?: Date | undefined;

  /**
   * The type of end date for the capacity reservation. This indicates whether the reservation has a fixed end date, is open-ended, or follows a specific termination pattern.
   *
   * @public
   */
  ReservationEndDateType?: ReservationEndDateType | undefined;

  /**
   * The tenancy of the EC2 instances associated with this capacity dimension. Valid values are 'default' for shared tenancy, 'dedicated' for dedicated instances, or 'host' for dedicated hosts.
   *
   * @public
   */
  Tenancy?: CapacityTenancy | undefined;

  /**
   * The current state of the capacity reservation.
   *
   * @public
   */
  ReservationState?: ReservationState | undefined;

  /**
   * The instance matching criteria for the capacity reservation, determining how instances are matched to the reservation.
   *
   * @public
   */
  ReservationInstanceMatchCriteria?: string | undefined;

  /**
   * The Amazon Web Services account ID that is financially responsible for unused capacity reservation costs.
   *
   * @public
   */
  ReservationUnusedFinancialOwner?: string | undefined;

  /**
   * The tags associated with the capacity resource, represented as key-value pairs. Only tags that have been activated for monitoring via `UpdateCapacityManagerMonitoredTagKeys` are included.
   *
   * @public
   */
  Tags?: CapacityManagerTagDimension[] | undefined;
}

/**
 * Represents a single metric value with its associated statistic, such as the sum or average of unused capacity hours.
 *
 * @public
 */
export interface MetricValue {
  /**
   * The name of the metric.
   *
   * @public
   */
  Metric?: Metric | undefined;

  /**
   * The numerical value of the metric for the specified statistic and time period.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Contains a single data point from a capacity metrics query, including the dimension values, timestamp, and metric values for that specific combination.
 *
 * @public
 */
export interface MetricDataResult {
  /**
   * The dimension values that identify this specific data point, such as account ID, region, and instance family.
   *
   * @public
   */
  Dimension?: CapacityManagerDimension | undefined;

  /**
   * The timestamp for this data point, indicating when the capacity usage occurred.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The metric values and statistics for this data point, containing the actual capacity usage numbers.
   *
   * @public
   */
  MetricValues?: MetricValue[] | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDataResult {
  /**
   * The metric data points returned by the query. Each result contains dimension values, timestamp, and metric values with their associated statistics.
   *
   * @public
   */
  MetricDataResults?: MetricDataResult[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDimensionsRequest {
  /**
   * The dimensions to group by when retrieving available dimension values. This determines which dimension combinations are returned. Required parameter.
   *
   * @public
   */
  GroupBy: GroupBy[] | undefined;

  /**
   * Conditions to filter which dimension values are returned. Each filter specifies a dimension, comparison operator, and values to match against.
   *
   * @public
   */
  FilterBy?: CapacityManagerCondition[] | undefined;

  /**
   * The start time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The metric names to use as an additional filter when retrieving dimensions. Only dimensions that have data for these metrics will be returned. Required parameter with maximum size of 1 for v1.
   *
   * @public
   */
  MetricNames: Metric[] | undefined;

  /**
   * The maximum number of dimension combinations to return. Valid range is 1 to 1000. Use with NextToken for pagination.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional dimension values.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDimensionsResult {
  /**
   * The available dimension combinations that have data within the specified time range and filters.
   *
   * @public
   */
  MetricDimensionResults?: CapacityManagerDimension[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMonitoredTagKeysRequest {
  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value. If not specified, up to 1000 results are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results. Use the value returned from a previous call to retrieve additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a tag key that is being monitored by Capacity Manager, including its activation status and the earliest available data point.
 *
 * @public
 */
export interface CapacityManagerMonitoredTagKey {
  /**
   * The tag key being monitored.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * The current status of the monitored tag key. Valid values are `activating`, `activated`, `deactivating`, and `suspended`.
   *
   * @public
   */
  Status?: CapacityManagerMonitoredTagKeyStatus | undefined;

  /**
   * A message providing additional details about the current status of the monitored tag key.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Indicates whether this tag key is provided by Capacity Manager by default, rather than being user-activated.
   *
   * @public
   */
  CapacityManagerProvided?: boolean | undefined;

  /**
   * The earliest timestamp from which tag data is available for queries, in UTC ISO 8601 format.
   *
   * @public
   */
  EarliestDatapointTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMonitoredTagKeysResult {
  /**
   * The list of tag keys being monitored by Capacity Manager, including their current status and metadata.
   *
   * @public
   */
  CapacityManagerTagKeys?: CapacityManagerMonitoredTagKey[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The architecture type, virtualization type, and other attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
 *
 * If you specify `InstanceRequirementsWithMetadataRequest`, you can't specify `InstanceTypes`.
 *
 * @public
 */
export interface InstanceRequirementsWithMetadataRequest {
  /**
   * The architecture type.
   *
   * @public
   */
  ArchitectureTypes?: ArchitectureType[] | undefined;

  /**
   * The virtualization type.
   *
   * @public
   */
  VirtualizationTypes?: VirtualizationType[] | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerSupportabilityScoresRequest {
  /**
   * The capacity market to score.
   *
   * @public
   */
  MarketType: SupportabilityMarketType | undefined;

  /**
   * The amount of capacity that you need, in the unit that you specify for `CapacityUnit`. Each score is relative to this amount.
   *
   * @public
   */
  CapacityAmount: number | undefined;

  /**
   * The unit for `CapacityAmount`.
   *
   * @public
   */
  CapacityUnit: CapacityUnit | undefined;

  /**
   * The IDs of the Availability Zones to score, such as `use1-az1`. You can specify Availability Zones in different Regions. You can specify up to 10 Availability Zones.
   *
   * @public
   */
  CapacityAvailabilityZoneIds: string[] | undefined;

  /**
   * The instance types to score. You can specify up to 50 instance types.
   *
   * Specify either `InstanceTypes` or `InstanceRequirementsWithMetadata`, but not both.
   *
   * @public
   */
  InstanceTypes?: string[] | undefined;

  /**
   * The attributes that the instance types must have, such as vCPU and memory ranges. Capacity Manager resolves the attributes into matching instance types and scores each one.
   *
   * Specify either `InstanceTypes` or `InstanceRequirementsWithMetadata`, but not both.
   *
   * @public
   */
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * The supportability score for a single instance type and Availability Zone combination.
 *
 * @public
 */
export interface CapacityManagerSupportabilityScore {
  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * How well the combination can support the requested capacity right now. `high` means that the combination holds several times the requested amount. `medium` means that it can cover the request with little to spare. `low` means that it holds less than the requested amount.
   *
   * @public
   */
  Score?: SupportabilityScore | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerSupportabilityScoresResult {
  /**
   * The score for all instance type and Availability Zone combinations in the request together. A `high` aggregate score with lower individual scores means that no single combination can support the full request, but the combinations together can.
   *
   * @public
   */
  AggregateScore?: SupportabilityScore | undefined;

  /**
   * The score for each instance type and Availability Zone combination in the request.
   *
   * @public
   */
  CapacityManagerSupportabilityScores?: CapacityManagerSupportabilityScore[] | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageRequest {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about the Capacity Reservation usage.
 *
 * @public
 */
export interface InstanceUsage {
  /**
   * The ID of the Amazon Web Services account that is making use of the Capacity Reservation.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The number of instances the Amazon Web Services account currently has in the Capacity Reservation.
   *
   * @public
   */
  UsedInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The type of instance for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of instances for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:
   *
   * - `active` - The capacity is available for use.
   * - `expired` - The Capacity Reservation expired automatically at the date and time specified in your reservation request. The reserved capacity is no longer available for your use.
   * - `cancelled` - The Capacity Reservation was canceled. The reserved capacity is no longer available for your use.
   * - `pending` - The Capacity Reservation request was successful but the capacity provisioning is still pending.
   * - `failed` - The Capacity Reservation request has failed. A request can fail due to request parameters that are not valid, capacity constraints, or instance limit constraints. You can view a failed request for 60 minutes.
   * - `scheduled` - (*Future-dated Capacity Reservations*) The future-dated Capacity Reservation request was approved and the Capacity Reservation is scheduled for delivery on the requested start date.
   * - `payment-pending` - (*Capacity Blocks*) The upfront payment has not been processed yet.
   * - `payment-failed` - (*Capacity Blocks*) The upfront payment was not processed in the 12-hour time frame. Your Capacity Block was released.
   * - `assessing` - (*Future-dated Capacity Reservations*) Amazon EC2 is assessing your request for a future-dated Capacity Reservation.
   * - `delayed` - (*Future-dated Capacity Reservations*) Amazon EC2 encountered a delay in provisioning the requested future-dated Capacity Reservation. Amazon EC2 is unable to deliver the requested capacity by the requested start date and time.
   * - `unsupported` - (*Future-dated Capacity Reservations*) Amazon EC2 can't support the future-dated Capacity Reservation request due to capacity constraints. You can view unsupported requests for 30 days. The Capacity Reservation will not be delivered.
   * - `cancelling` - (*Future-dated Capacity Reservations*) The Capacity Reservation is being cancelled. Capacity has been released but charges continue for the commitment wind-down period. The reservation transitions to `cancelled` when the wind-down completes.
   *
   * @public
   */
  State?: CapacityReservationState | undefined;

  /**
   * Information about the Capacity Reservation usage.
   *
   * @public
   */
  InstanceUsages?: InstanceUsage[] | undefined;

  /**
   * Indicates whether the Capacity Reservation is interruptible, meaning instances may be terminated when the owner reclaims capacity.
   *
   * @public
   */
  Interruptible?: boolean | undefined;

  /**
   * Information about the capacity allocated to the interruptible Capacity Reservation, including instance counts and allocation status.
   *
   * @public
   */
  InterruptibleCapacityAllocation?: InterruptibleCapacityAllocation | undefined;

  /**
   * Details about the interruption configuration and source reservation for interruptible Capacity Reservations.
   *
   * @public
   */
  InterruptionInfo?: InterruptionInfo | undefined;
}

/**
 * @public
 */
export interface GetClientVpnEndpointAuthorizationPolicyRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetClientVpnEndpointAuthorizationPolicyResult {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * The authorization policy document, written in the Cedar policy language.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * A brief description of the authorization policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether the authorization policy is evaluated in shadow mode. Possible values include:
   *
   * - `enabled` - The authorization policy is evaluated and the results are logged, but access is not enforced.
   * - `disabled` - The authorization policy is enforced.
   *
   * @public
   */
  ShadowMode?: ClientVpnAuthorizationPolicyShadowMode | undefined;

  /**
   * The current state of the authorization policy.
   *
   * @public
   */
  Status?: ClientVpnAuthorizationPolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetCoipPoolUsageRequest {
  /**
   * The ID of the address pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * One or more filters.
   *
   * - `coip-address-usage.allocation-id` - The allocation ID of the address.
   * - `coip-address-usage.aws-account-id` - The ID of the Amazon Web Services account that is using the customer-owned IP address.
   * - `coip-address-usage.aws-service` - The Amazon Web Services service that is using the customer-owned IP address.
   * - `coip-address-usage.co-ip` - The customer-owned IP address.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes address usage for a customer-owned address pool.
 *
 * @public
 */
export interface CoipAddressUsage {
  /**
   * The allocation ID of the address.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The Amazon Web Services service.
   *
   * @public
   */
  AwsService?: string | undefined;

  /**
   * The customer-owned IP address.
   *
   * @public
   */
  CoIp?: string | undefined;
}

/**
 * @public
 */
export interface GetCoipPoolUsageResult {
  /**
   * The ID of the customer-owned address pool.
   *
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * Information about the address usage.
   *
   * @public
   */
  CoipAddressUsages?: CoipAddressUsage[] | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConsoleOutputRequest {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * When enabled, retrieves the latest console output for the instance.
   *
   * Default: disabled (`false`)
   *
   * @public
   */
  Latest?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConsoleOutputResult {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The time at which the output was last updated.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The console output, base64-encoded. If you are using a command line tool, the tool decodes the output for you.
   *
   * @public
   */
  Output?: string | undefined;
}

/**
 * @public
 */
export interface GetConsoleScreenshotRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * When set to `true`, acts as keystroke input and wakes up an instance that's in standby or "sleep" mode.
   *
   * @public
   */
  WakeUp?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConsoleScreenshotResult {
  /**
   * The data that comprises the image.
   *
   * @public
   */
  ImageData?: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 */
export interface GetDeclarativePoliciesReportSummaryRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId: string | undefined;
}

/**
 * A summary report for the attribute for a Region.
 *
 * @public
 */
export interface RegionalSummary {
  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The number of accounts in the Region with the same configuration value for the attribute that is most frequently observed.
   *
   * @public
   */
  NumberOfMatchedAccounts?: number | undefined;

  /**
   * The number of accounts in the Region with a configuration value different from the most frequently observed value for the attribute.
   *
   * @public
   */
  NumberOfUnmatchedAccounts?: number | undefined;
}

/**
 * A summary report for the attribute across all Regions.
 *
 * @public
 */
export interface AttributeSummary {
  /**
   * The name of the attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The configuration value that is most frequently observed for the attribute.
   *
   * @public
   */
  MostFrequentValue?: string | undefined;

  /**
   * The number of accounts with the same configuration value for the attribute that is most frequently observed.
   *
   * @public
   */
  NumberOfMatchedAccounts?: number | undefined;

  /**
   * The number of accounts with a configuration value different from the most frequently observed value for the attribute.
   *
   * @public
   */
  NumberOfUnmatchedAccounts?: number | undefined;

  /**
   * The summary report for each Region for the attribute.
   *
   * @public
   */
  RegionalSummaries?: RegionalSummary[] | undefined;
}

/**
 * @public
 */
export interface GetDeclarativePoliciesReportSummaryResult {
  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId?: string | undefined;

  /**
   * The name of the Amazon S3 bucket where the report is located.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The prefix for your S3 object.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The root ID, organizational unit ID, or account ID.
   *
   * Format:
   *
   * - For root: `r-ab12`
   * - For OU: `ou-ab12-cdef1234`
   * - For account: `123456789012`
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The time when the report generation started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the report generation ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The total number of accounts associated with the specified `targetId`.
   *
   * @public
   */
  NumberOfAccounts?: number | undefined;

  /**
   * The number of accounts where attributes could not be retrieved in any Region.
   *
   * @public
   */
  NumberOfFailedAccounts?: number | undefined;

  /**
   * The attributes described in the report.
   *
   * @public
   */
  AttributeSummaries?: AttributeSummary[] | undefined;
}

/**
 * @public
 */
export interface GetDefaultCreditSpecificationRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The instance family.
   *
   * @public
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | undefined;
}

/**
 * Describes the default credit option for CPU usage of a burstable performance instance family.
 *
 * @public
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * The instance family.
   *
   * @public
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | undefined;

  /**
   * The default credit option for CPU usage of the instance family. Valid values are `standard` and `unlimited`.
   *
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface GetDefaultCreditSpecificationResult {
  /**
   * The default credit option for CPU usage of the instance family.
   *
   * @public
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification | undefined;
}

/**
 * @public
 */
export interface GetEbsDefaultKmsKeyIdRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * The Amazon Resource Name (ARN) of the default KMS key for encryption by default.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetEbsEncryptionByDefaultRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEbsEncryptionByDefaultResult {
  /**
   * Indicates whether encryption by default is enabled.
   *
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SseType?: SSEType | undefined;
}

/**
 * @public
 */
export interface GetEnabledIpamPolicyRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEnabledIpamPolicyResult {
  /**
   * Indicates whether the IPAM policy is enabled.
   *
   * @public
   */
  IpamPolicyEnabled?: boolean | undefined;

  /**
   * The ID of the enabled IPAM policy.
   *
   * @public
   */
  IpamPolicyId?: string | undefined;

  /**
   * The entity that manages the IPAM policy.
   *
   * @public
   */
  ManagedBy?: IpamPolicyManagedBy | undefined;
}

/**
 * Describes integration options for Amazon Athena.
 *
 * @public
 */
export interface AthenaIntegration {
  /**
   * The location in Amazon S3 to store the generated CloudFormation template.
   *
   * @public
   */
  IntegrationResultS3DestinationArn: string | undefined;

  /**
   * The schedule for adding new partitions to the table.
   *
   * @public
   */
  PartitionLoadFrequency: PartitionLoadFrequency | undefined;

  /**
   * The start date for the partition.
   *
   * @public
   */
  PartitionStartDate?: Date | undefined;

  /**
   * The end date for the partition.
   *
   * @public
   */
  PartitionEndDate?: Date | undefined;
}

/**
 * Describes service integrations with VPC Flow logs.
 *
 * @public
 */
export interface IntegrateServices {
  /**
   * Information about the integration with Amazon Athena.
   *
   * @public
   */
  AthenaIntegrations?: AthenaIntegration[] | undefined;
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the flow log.
   *
   * @public
   */
  FlowLogId: string | undefined;

  /**
   * To store the CloudFormation template in Amazon S3, specify the location in Amazon S3.
   *
   * @public
   */
  ConfigDeliveryS3DestinationArn: string | undefined;

  /**
   * Information about the service integration.
   *
   * @public
   */
  IntegrateServices: IntegrateServices | undefined;
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateResult {
  /**
   * The generated CloudFormation template.
   *
   * @public
   */
  Result?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationRequest {
  /**
   * The ID of the Capacity Reservation. If you specify a Capacity Reservation that is shared with you, the operation returns only Capacity Reservation groups that you own.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a resource group to which a Capacity Reservation has been added.
 *
 * @public
 */
export interface CapacityReservationGroup {
  /**
   * The ARN of the resource group.
   *
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the resource group.
   *
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the resource groups to which the Capacity Reservation has been added.
   *
   * @public
   */
  CapacityReservationGroups?: CapacityReservationGroup[] | undefined;
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewRequest {
  /**
   * The IDs of the Dedicated Hosts with which the reservation is associated.
   *
   * @public
   */
  HostIdSet: string[] | undefined;

  /**
   * The offering ID of the reservation.
   *
   * @public
   */
  OfferingId: string | undefined;
}

/**
 * Describes the result of the purchase.
 *
 * @public
 */
export interface Purchase {
  /**
   * The currency in which the `UpfrontPrice` and `HourlyPrice` amounts are specified. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The duration of the reservation's term in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The IDs of the Dedicated Hosts associated with the reservation.
   *
   * @public
   */
  HostIdSet?: string[] | undefined;

  /**
   * The ID of the reservation.
   *
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * The hourly price of the reservation per hour.
   *
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * The instance family on the Dedicated Host that the reservation can be associated with.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The payment option for the reservation.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The upfront price of the reservation.
   *
   * @public
   */
  UpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewResult {
  /**
   * The currency in which the `totalUpfrontPrice` and `totalHourlyPrice` amounts are specified. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The purchase information of the Dedicated Host reservation and the Dedicated Hosts associated with it.
   *
   * @public
   */
  Purchase?: Purchase[] | undefined;

  /**
   * The potential total hourly price of the reservation per hour.
   *
   * @public
   */
  TotalHourlyPrice?: string | undefined;

  /**
   * The potential total upfront price. This is billed immediately.
   *
   * @public
   */
  TotalUpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface GetImageAncestryRequest {
  /**
   * The ID of the AMI whose ancestry you want to trace.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a single AMI in the ancestry chain and its source (parent) AMI.
 *
 * @public
 */
export interface ImageAncestryEntry {
  /**
   * The date and time when this AMI was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The ID of this AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The owner alias (`amazon` | `aws-backup-vault` | `aws-marketplace` ) of this AMI, if one is assigned. Otherwise, the value is `null`.
   *
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * The ID of the parent AMI.
   *
   * @public
   */
  SourceImageId?: string | undefined;

  /**
   * The Amazon Web Services Region of the parent AMI.
   *
   * @public
   */
  SourceImageRegion?: string | undefined;
}

/**
 * @public
 */
export interface GetImageAncestryResult {
  /**
   * A list of entries in the AMI ancestry chain, from the specified AMI to the root AMI.
   *
   * @public
   */
  ImageAncestryEntries?: ImageAncestryEntry[] | undefined;
}

/**
 * @public
 */
export interface GetImageBlockPublicAccessStateRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetImageBlockPublicAccessStateResult {
  /**
   * The current state of block public access for AMIs at the account level in the specified Amazon Web Services Region.
   *
   * Possible values:
   *
   * - `block-new-sharing` - Any attempt to publicly share your AMIs in the specified Region is blocked.
   * - `unblocked` - Your AMIs in the specified Region can be publicly shared.
   *
   * @public
   */
  ImageBlockPublicAccessState?: string | undefined;

  /**
   * The entity that manages the state for block public access for AMIs. Possible values include:
   *
   * - `account` - The state is managed by the account.
   * - `declarative-policy` - The state is managed by a declarative policy and can't be modified by the account.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetImageFindingsRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an Amazon Inspector vulnerability finding for an AMI.
 *
 * @public
 */
export interface ImageFinding {
  /**
   * Specifies whether a fix is available for the finding. This value is `true` when Amazon Inspector reports a full or partial fix for the finding.
   *
   * @public
   */
  FixAvailable?: boolean | undefined;

  /**
   * The Amazon Inspector score for the finding.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), when Amazon Inspector first observed the finding.
   *
   * @public
   */
  FirstObservedAt?: Date | undefined;

  /**
   * The date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), when Amazon Inspector last updated the finding.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The title of the finding.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The file paths in the AMI that are affected by the finding. Amazon EC2 returns up to 10 file paths for each finding.
   *
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * The severity of the finding.
   *
   * The valid values are the following Amazon Inspector severity levels, which correspond to CVSS score ranges:
   *
   * - `informational` - CVSS score of 0.
   * - `low` - CVSS score of 0.1 to 3.9.
   * - `medium` - CVSS score of 4.0 to 6.9.
   * - `high` - CVSS score of 7.0 to 8.9.
   * - `critical` - CVSS score of 9.0 to 10.0.
   *
   * For more information, see [Software package vulnerability severity](https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html#findings-understanding-package-score) in the *Amazon Inspector User Guide*.
   *
   * @public
   */
  SeverityLabel?: SeverityLabel | undefined;

  /**
   * The ID of the Amazon EBS snapshot of the AMI in which the finding was detected.
   *
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * @public
 */
export interface GetImageFindingsResult {
  /**
   * The Amazon Inspector findings for the AMI.
   *
   * @public
   */
  ImageFindings?: ImageFinding[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * The default instance metadata service (IMDS) settings that were set at the account level in the specified Amazon Web Services  Region.
 *
 * @public
 */
export interface InstanceMetadataDefaultsResponse {
  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` – IMDSv2 is optional, which means that you can use either IMDSv2 or IMDSv1.
   * - `required` – IMDSv2 is required, which means that IMDSv1 is disabled, and you must use IMDSv2.
   *
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * The maximum number of hops that the metadata token can travel.
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Indicates whether the IMDS endpoint for an instance is enabled or disabled. When disabled, the instance metadata can't be accessed.
   *
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * Indicates whether access to instance tags from the instance metadata is enabled or disabled. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;

  /**
   * The entity that manages the IMDS default settings. Possible values include:
   *
   * - `account` - The IMDS default settings are managed by the account.
   * - `declarative-policy` - The IMDS default settings are managed by a declarative policy and can't be modified by the account.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;

  /**
   * The customized exception message that is specified in the declarative policy.
   *
   * @public
   */
  ManagedExceptionMessage?: string | undefined;

  /**
   * Indicates whether to enforce the requirement of IMDSv2 on an instance at the time of launch. When enforcement is enabled, the instance can't launch unless IMDSv2 (`HttpTokens`) is set to `required`.
   *
   * @public
   */
  HttpTokensEnforced?: HttpTokensEnforcedState | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsResult {
  /**
   * The account-level default IMDS settings.
   *
   * @public
   */
  AccountLevel?: InstanceMetadataDefaultsResponse | undefined;
}

/**
 * @public
 */
export interface GetInstanceTpmEkPubRequest {
  /**
   * The ID of the instance for which to get the public endorsement key.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The required public endorsement key type.
   *
   * @public
   */
  KeyType: EkPubKeyType | undefined;

  /**
   * The required public endorsement key format. Specify `der` for a DER-encoded public key that is compatible with OpenSSL. Specify `tpmt` for a TPM 2.0 format that is compatible with tpm2-tools. The returned key is base64 encoded.
   *
   * @public
   */
  KeyFormat: EkPubKeyFormat | undefined;

  /**
   * Specify this parameter to verify whether the request will succeed, without actually making the request. If the request will succeed, the response is `DryRunOperation`. Otherwise, the response is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetInstanceTpmEkPubResult {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The public endorsement key type.
   *
   * @public
   */
  KeyType?: EkPubKeyType | undefined;

  /**
   * The public endorsement key format.
   *
   * @public
   */
  KeyFormat?: EkPubKeyFormat | undefined;

  /**
   * The public endorsement key material.
   *
   * @public
   */
  KeyValue?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The processor architecture type.
   *
   * @public
   */
  ArchitectureTypes: ArchitectureType[] | undefined;

  /**
   * The virtualization type.
   *
   * @public
   */
  VirtualizationTypes: VirtualizationType[] | undefined;

  /**
   * The attributes required for the instance types.
   *
   * @public
   */
  InstanceRequirements: InstanceRequirementsRequest | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * The list of instance types with the specified instance attributes.
 *
 * @public
 */
export interface InstanceTypeInfoFromInstanceRequirements {
  /**
   * The matching instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsResult {
  /**
   * The instance types with the specified instance attributes.
   *
   * @public
   */
  InstanceTypes?: InstanceTypeInfoFromInstanceRequirements[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceUefiDataRequest {
  /**
   * The ID of the instance from which to retrieve the UEFI data.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetInstanceUefiDataResult {
  /**
   * The ID of the instance from which to retrieve the UEFI data.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Base64 representation of the non-volatile UEFI variable store.
   *
   * @public
   */
  UefiData?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The CIDR you want the history of. The CIDR can be an IPv4 or IPv6 IP address range. If you enter a /16 IPv4 CIDR, you will get records that match it exactly. You will not get records for any subnets within the /16 CIDR.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The ID of the IPAM scope that the CIDR is in.
   *
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * The ID of the VPC you want your history records filtered by.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The maximum number of historical results you would like returned per page. Defaults to 100.
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
 * The historical record of a CIDR within an IPAM scope. For more information, see [View the history of IP addresses](https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface IpamAddressHistoryRecord {
  /**
   * The ID of the resource owner.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The Amazon Web Services Region of the resource.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType?: IpamAddressHistoryResourceType | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The CIDR of the resource.
   *
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The compliance status of a resource. For more information on compliance statuses, see [Monitor CIDR usage by resource](https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  ResourceComplianceStatus?: IpamComplianceStatus | undefined;

  /**
   * The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see [Monitor CIDR usage by resource](https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  ResourceOverlapStatus?: IpamOverlapStatus | undefined;

  /**
   * The VPC ID of the resource.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.
   *
   * @public
   */
  SampledStartTime?: Date | undefined;

  /**
   * Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.
   *
   * @public
   */
  SampledEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryResult {
  /**
   * A historical record for a CIDR within an IPAM scope. If the CIDR is associated with an EC2 instance, you will see an object in the response for the instance and one for the network interface.
   *
   * @public
   */
  HistoryRecords?: IpamAddressHistoryRecord[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * The Amazon Web Services Region that the account information is returned from.
   *
   * @public
   */
  DiscoveryRegion: string | undefined;

  /**
   * Discovered account filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of discovered accounts to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The discovery failure reason.
 *
 * @public
 */
export interface IpamDiscoveryFailureReason {
  /**
   * The discovery failure code.
   *
   * - `assume-role-failure` - IPAM could not assume the Amazon Web Services IAM service-linked role. This could be because of any of the following:
   *
   *   - SLR has not been created yet and IPAM is still creating it.
   *   - You have opted-out of the IPAM home Region.
   *   - Account you are using as your IPAM account has been suspended.
   * - `throttling-failure` - IPAM account is already using the allotted transactions per second and IPAM is receiving a throttling error when assuming the Amazon Web Services IAM SLR.
   * - `unauthorized-failure` - Amazon Web Services account making the request is not authorized. For more information, see [AuthFailure](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html) in the *Amazon Elastic Compute Cloud API Reference*.
   *
   * @public
   */
  Code?: IpamDiscoveryFailureCode | undefined;

  /**
   * The discovery failure message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * An IPAM discovered account. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts.
 *
 * @public
 */
export interface IpamDiscoveredAccount {
  /**
   * The account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Web Services Region that the account information is returned from. An account can be discovered in multiple regions and will have a separate discovered account for each Region.
   *
   * @public
   */
  DiscoveryRegion?: string | undefined;

  /**
   * The resource discovery failure reason.
   *
   * @public
   */
  FailureReason?: IpamDiscoveryFailureReason | undefined;

  /**
   * The last attempted resource discovery time.
   *
   * @public
   */
  LastAttemptedDiscoveryTime?: Date | undefined;

  /**
   * The last successful resource discovery time.
   *
   * @public
   */
  LastSuccessfulDiscoveryTime?: Date | undefined;

  /**
   * The ID of an Organizational Unit in Amazon Web Services Organizations.
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsResult {
  /**
   * Discovered accounts.
   *
   * @public
   */
  IpamDiscoveredAccounts?: IpamDiscoveredAccount[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredPublicAddressesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * An IPAM resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * The Amazon Web Services Region for the IP address.
   *
   * @public
   */
  AddressRegion: string | undefined;

  /**
   * Filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of IPAM discovered public addresses to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The security group that the resource with the public IP address is in.
 *
 * @public
 */
export interface IpamPublicAddressSecurityGroup {
  /**
   * The security group's name.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The security group's ID.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * A tag for a public IP address discovered by IPAM.
 *
 * @public
 */
export interface IpamPublicAddressTag {
  /**
   * The tag's key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Tags for a public IP address discovered by IPAM.
 *
 * @public
 */
export interface IpamPublicAddressTags {
  /**
   * Tags for an Elastic IP address.
   *
   * @public
   */
  EipTags?: IpamPublicAddressTag[] | undefined;
}

/**
 * A public IP Address discovered by IPAM.
 *
 * @public
 */
export interface IpamDiscoveredPublicAddress {
  /**
   * The resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * The Region of the resource the IP address is assigned to.
   *
   * @public
   */
  AddressRegion?: string | undefined;

  /**
   * The IP address.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The ID of the owner of the resource the IP address is assigned to.
   *
   * @public
   */
  AddressOwnerId?: string | undefined;

  /**
   * The allocation ID of the resource the IP address is assigned to.
   *
   * @public
   */
  AddressAllocationId?: string | undefined;

  /**
   * The association status.
   *
   * @public
   */
  AssociationStatus?: IpamPublicAddressAssociationStatus | undefined;

  /**
   * The IP address type.
   *
   * @public
   */
  AddressType?: IpamPublicAddressType | undefined;

  /**
   * The Amazon Web Services service associated with the IP address.
   *
   * @public
   */
  Service?: IpamPublicAddressAwsService | undefined;

  /**
   * The resource ARN or ID.
   *
   * @public
   */
  ServiceResource?: string | undefined;

  /**
   * The ID of the VPC that the resource with the assigned IP address is in.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the subnet that the resource with the assigned IP address is in.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the public IPv4 pool that the resource with the assigned IP address is from.
   *
   * @public
   */
  PublicIpv4PoolId?: string | undefined;

  /**
   * The network interface ID of the resource with the assigned IP address.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The description of the network interface that IP address is assigned to.
   *
   * @public
   */
  NetworkInterfaceDescription?: string | undefined;

  /**
   * The instance ID of the instance the assigned IP address is assigned to.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Tags associated with the IP address.
   *
   * @public
   */
  Tags?: IpamPublicAddressTags | undefined;

  /**
   * The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see [Local Zone availability](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * Security groups associated with the resource that the IP address is assigned to.
   *
   * @public
   */
  SecurityGroups?: IpamPublicAddressSecurityGroup[] | undefined;

  /**
   * The last successful resource discovery time.
   *
   * @public
   */
  SampleTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredPublicAddressesResult {
  /**
   * IPAM discovered public addresses.
   *
   * @public
   */
  IpamDiscoveredPublicAddresses?: IpamDiscoveredPublicAddress[] | undefined;

  /**
   * The oldest successful resource discovery time.
   *
   * @public
   */
  OldestSampleTime?: Date | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * A resource Region.
   *
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * Filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of discovered resource CIDRs to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An IPAM discovered resource CIDR. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. The discovered resource CIDR is the IP address range in CIDR notation that is associated with the resource.
 *
 * @public
 */
export interface IpamDiscoveredResourceCidr {
  /**
   * The resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * The resource Region.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The resource ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource owner ID.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The resource CIDR.
   *
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * The source that allocated the IP address space. `byoip` or `amazon` indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). `none` indicates private space.
   *
   * @public
   */
  IpSource?: IpamResourceCidrIpSource | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * The resource tags.
   *
   * @public
   */
  ResourceTags?: IpamResourceTag[] | undefined;

  /**
   * The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following:
   *
   * - For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs.
   * - For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated.
   * - For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).
   *
   * @public
   */
  IpUsage?: number | undefined;

  /**
   * The VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The subnet ID.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * For elastic network interfaces, this is the status of whether or not the elastic network interface is attached.
   *
   * @public
   */
  NetworkInterfaceAttachmentStatus?: IpamNetworkInterfaceAttachmentStatus | undefined;

  /**
   * The last successful resource discovery time.
   *
   * @public
   */
  SampleTime?: Date | undefined;

  /**
   * The Availability Zone ID.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsResult {
  /**
   * Discovered resource CIDRs.
   *
   * @public
   */
  IpamDiscoveredResourceCidrs?: IpamDiscoveredResourceCidr[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredRoutesRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM resource discovery.
   *
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * The Amazon Web Services Region to retrieve discovered routes for.
   *
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * One or more filters to apply to the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a BGP route discovered by IPAM resource discovery.
 *
 * @public
 */
export interface IpamDiscoveredRoute {
  /**
   * The ID of the IPAM resource discovery that discovered the route.
   *
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * The Amazon Web Services Region where the route was discovered.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The ID of the resource owner.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The IP address prefix of the discovered route in CIDR notation.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The Autonomous System Number (ASN) that originates the route.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The state of the BYOIP CIDR. Possible values:
   *
   * - `advertised` - The CIDR is being advertised.
   * - `deprovisioned` - The CIDR has been deprovisioned.
   * - `failed-deprovision` - Deprovisioning failed.
   * - `failed-provision` - Provisioning failed.
   * - `pending-deprovision` - Deprovisioning is in progress.
   * - `pending-provision` - Provisioning is in progress.
   * - `provisioned` - The CIDR is provisioned.
   * - `provisioned-not-publicly-advertisable` - The CIDR is provisioned but not publicly advertisable.
   *
   * @public
   */
  State?: IpamByoipCidrState | undefined;

  /**
   * The advertisement type of the route. Possible values:
   *
   * - `regional` - The IP address is advertised from a single location (regional services such as Amazon EC2).
   * - `global` - The IP address is advertised from multiple global locations simultaneously (global services such as Amazon CloudFront).
   *
   * @public
   */
  AdvertisementType?: IpamByoipAdvertisementType | undefined;

  /**
   * The network border group for the route.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The ID of the BYOIP pool associated with the route.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The ID of the IPAM pool associated with the route.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * The time when the route was last sampled.
   *
   * @public
   */
  SampleTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredRoutesResult {
  /**
   * The discovered BGP routes.
   *
   * @public
   */
  IpamDiscoveredRoutes?: IpamDiscoveredRoute[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationAsnsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * One or more filters to apply to the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains information about an Autonomous System Number (ASN) registered at an internet registry and associated with an IPAM.
 *
 * @public
 */
export interface IpamInternetRegistryAssociationAsn {
  /**
   * The Autonomous System Number.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The time when the ASN was last observed at the internet registry.
   *
   * @public
   */
  LastObservedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationAsnsResult {
  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ASNs registered with the internet registry.
   *
   * @public
   */
  IpamInternetRegistryAssociationAsns?: IpamInternetRegistryAssociationAsn[] | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationCidrsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * One or more filters to apply to the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains information about an IP address CIDR registered at an internet registry and associated with an IPAM.
 *
 * @public
 */
export interface IpamInternetRegistryAssociationCidr {
  /**
   * The IP address prefix in CIDR notation.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The time when the CIDR was last observed at the internet registry.
   *
   * @public
   */
  LastObservedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamInternetRegistryAssociationCidrsResult {
  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The CIDRs registered with the internet registry.
   *
   * @public
   */
  IpamInternetRegistryAssociationCidrs?: IpamInternetRegistryAssociationCidr[] | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyAllocationRulesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM policy for which to get allocation rules.
   *
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * One or more filters for the allocation rules.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The locale for which to get the allocation rules.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * The resource type for which to get the allocation rules.
   *
   * The Amazon Web Services service or resource type that can use IP addresses through IPAM policies. Supported services and resource types include:
   *
   * - Elastic IP addresses
   *
   * @public
   */
  ResourceType?: IpamPolicyResourceType | undefined;

  /**
   * The maximum number of results to return in a single call.
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
 * Information about an IPAM policy allocation rule.
 *
 * Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.
 *
 * @public
 */
export interface IpamPolicyAllocationRule {
  /**
   * The ID of the source IPAM pool for the allocation rule.
   *
   * An IPAM pool is a collection of IP addresses in IPAM that can be allocated to Amazon Web Services resources.
   *
   * @public
   */
  SourceIpamPoolId?: string | undefined;
}

/**
 * Information about an IPAM policy.
 *
 * @public
 */
export interface IpamPolicyDocument {
  /**
   * The ID of the IPAM policy.
   *
   * @public
   */
  IpamPolicyId?: string | undefined;

  /**
   * The locale of the IPAM policy document.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * The resource type of the IPAM policy document.
   *
   * The Amazon Web Services service or resource type that can use IP addresses through IPAM policies. Supported services and resource types include:
   *
   * - Elastic IP addresses
   *
   * @public
   */
  ResourceType?: IpamPolicyResourceType | undefined;

  /**
   * The allocation rules in the IPAM policy document.
   *
   * Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.
   *
   * @public
   */
  AllocationRules?: IpamPolicyAllocationRule[] | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyAllocationRulesResult {
  /**
   * The IPAM policy documents containing the allocation rules.
   *
   * Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.
   *
   * @public
   */
  IpamPolicyDocuments?: IpamPolicyDocument[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyOrganizationTargetsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of results to return in a single call.
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

  /**
   * The ID of the IPAM policy for which to get Amazon Web Services Organizations targets.
   *
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * One or more filters for the Amazon Web Services Organizations targets.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * The Amazon Web Services Organizations target for an IPAM policy.
 *
 * @public
 */
export interface IpamPolicyOrganizationTarget {
  /**
   * The ID of the Amazon Web Services Organizations target.
   *
   * A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.
   *
   * @public
   */
  OrganizationTargetId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPolicyOrganizationTargetsResult {
  /**
   * The IDs of the Amazon Web Services Organizations targets.
   *
   * A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.
   *
   * @public
   */
  OrganizationTargets?: IpamPolicyOrganizationTarget[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolAllocationsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool you want to see the allocations for.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The ID of the allocation.
   *
   * @public
   */
  IpamPoolAllocationId?: string | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results you would like returned per page.
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
export interface GetIpamPoolAllocationsResult {
  /**
   * The IPAM pool allocations you want information on.
   *
   * @public
   */
  IpamPoolAllocations?: IpamPoolAllocation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolCidrsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool you want the CIDR for.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
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
export interface GetIpamPoolCidrsResult {
  /**
   * Information about the CIDRs provisioned to an IPAM pool.
   *
   * @public
   */
  IpamPoolCidrs?: IpamPoolCidr[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverRulesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver whose rules you want to retrieve.
   *
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * One or more filters to limit the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
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
 * Describes a condition within a CIDR selection rule. Conditions define the criteria for selecting CIDRs from IPAM's database based on resource attributes.
 *
 * CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.
 *
 * There are three rule types. Only 2 of the 3 rule types support conditions - **IPAM pool CIDR** and **Scope resource CIDR**. **Static CIDR** rules cannot have conditions.
 *
 * - **Static CIDR**: A fixed list of CIDRs that do not change (like a manual list replicated across Regions)
 * - **IPAM pool CIDR**: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool)
 *
 *   If you choose this option, choose the following:
 *
 *   - **IPAM scope**: Select the IPAM scope to search for resources
 *   - **Conditions:**
 *
 *     - **Property**
 *
 *       - **IPAM pool ID**: Select an IPAM pool that contains the resources
 *       - **CIDR** (like 10.24.34.0/23)
 *     - **Operation**: Equals/Not equals
 *     - **Value**: The value on which to match the condition
 * - **Scope resource CIDR**: CIDRs from Amazon Web Services resources like VPCs, subnets, EIPs within an IPAM scope
 *
 *   If you choose this option, choose the following:
 *
 *   - **IPAM scope**: Select the IPAM scope to search for resources
 *   - **Resource type**: Select a resource, like a VPC or subnet.
 *   - **Conditions**:
 *
 *     - **Property**:
 *
 *       - Resource ID: The unique ID of a resource (like vpc-1234567890abcdef0)
 *       - Resource owner (like 111122223333)
 *       - Resource region (like us-east-1)
 *       - Resource tag (like key: name, value: dev-vpc-1)
 *       - CIDR (like 10.24.34.0/23)
 *     - **Operation**: Equals/Not equals
 *     - **Value**: The value on which to match the condition
 *
 * @public
 */
export interface IpamPrefixListResolverRuleCondition {
  /**
   * The operation to perform when evaluating this condition. Valid values include `equals`, `not-equals`, `contains`, and `not-contains`.
   *
   * @public
   */
  Operation?: IpamPrefixListResolverRuleConditionOperation | undefined;

  /**
   * The ID of the IPAM pool to match against. This condition selects CIDRs that belong to the specified IPAM pool.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * The ID of the Amazon Web Services resource to match against. This condition selects CIDRs associated with the specified resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the resources to match against. This condition selects CIDRs from resources owned by the specified account.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The Amazon Web Services Region where the resources are located. This condition selects CIDRs from resources in the specified Region.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * A tag key-value pair to match against. This condition selects CIDRs from resources that have the specified tag.
   *
   * @public
   */
  ResourceTag?: IpamResourceTag | undefined;

  /**
   * A CIDR block to match against. This condition selects CIDRs that fall within or match the specified CIDR range.
   *
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Describes a CIDR selection rule.
 *
 * CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.
 *
 * @public
 */
export interface IpamPrefixListResolverRule {
  /**
   * The type of CIDR selection rule. Valid values include `include` for selecting CIDRs that match the conditions, and `exclude` for excluding CIDRs that match the conditions.
   *
   * @public
   */
  RuleType?: IpamPrefixListResolverRuleType | undefined;

  /**
   * A fixed list of CIDRs that do not change (like a manual list replicated across Regions).
   *
   * @public
   */
  StaticCidr?: string | undefined;

  /**
   * The ID of the IPAM scope from which to select CIDRs. This determines whether to select from public or private IP address space.
   *
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * For rules of type `ipam-resource-cidr`, this is the resource type.
   *
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * The conditions that determine which CIDRs are selected by this rule. Conditions specify criteria such as resource type, tags, account IDs, and Regions.
   *
   * @public
   */
  Conditions?: IpamPrefixListResolverRuleCondition[] | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverRulesResult {
  /**
   * The CIDR selection rules for the IPAM prefix list resolver.
   *
   * @public
   */
  Rules?: IpamPrefixListResolverRule[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionEntriesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver whose version entries you want to retrieve.
   *
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * The version number of the resolver for which to retrieve CIDR entries. If not specified, the latest version is used.
   *
   * @public
   */
  IpamPrefixListResolverVersion: number | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
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
 * Describes a CIDR entry in a specific version of an IPAM prefix list resolver. This represents a CIDR that was selected and synchronized at a particular point in time.
 *
 * @public
 */
export interface IpamPrefixListResolverVersionEntry {
  /**
   * The CIDR block that was selected and synchronized in this resolver version.
   *
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionEntriesResult {
  /**
   * The CIDR entries for the specified resolver version.
   *
   * @public
   */
  Entries?: IpamPrefixListResolverVersionEntry[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver whose versions you want to retrieve.
   *
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * Specific version numbers to retrieve. If not specified, all versions are returned.
   *
   * @public
   */
  IpamPrefixListResolverVersions?: number[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters to limit the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a version of an IPAM prefix list resolver.
 *
 * Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.
 *
 * **Version example:**
 *
 * **Initial State (Version 1)**
 *
 * Production environment:
 *
 * - vpc-prod-web (10.1.0.0/16) - tagged env=prod
 * - vpc-prod-db (10.2.0.0/16) - tagged env=prod
 *
 * Resolver rule: Include all VPCs tagged env=prod
 *
 * **Version 1 CIDRs:** 10.1.0.0/16, 10.2.0.0/16
 *
 * **Infrastructure Change (Version 2)**
 *
 * New VPC added:
 *
 * - vpc-prod-api (10.3.0.0/16) - tagged env=prod
 *
 * IPAM automatically detects the change and creates a new version.
 *
 * **Version 2 CIDRs:** 10.1.0.0/16, 10.2.0.0/16, 10.3.0.0/16
 *
 * @public
 */
export interface IpamPrefixListResolverVersion {
  /**
   * The version number of the IPAM prefix list resolver.
   *
   * Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface GetIpamPrefixListResolverVersionsResult {
  /**
   * Information about the IPAM prefix list resolver versions.
   *
   * @public
   */
  IpamPrefixListResolverVersions?: IpamPrefixListResolverVersion[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
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

  /**
   * The ID of the scope that the resource is in.
   *
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * The ID of the IPAM pool that the resource is in.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * The resource tag.
   *
   * @public
   */
  ResourceTag?: RequestIpamResourceTag | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the resource.
   *
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * The CIDR for an IPAM resource.
 *
 * @public
 */
export interface IpamResourceCidr {
  /**
   * The IPAM ID for an IPAM resource.
   *
   * @public
   */
  IpamId?: string | undefined;

  /**
   * The scope ID for an IPAM resource.
   *
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * The pool ID for an IPAM resource.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * The Amazon Web Services Region for an IPAM resource.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The Amazon Web Services account number of the owner of an IPAM resource.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The ID of an IPAM resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The name of an IPAM resource.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The CIDR for an IPAM resource.
   *
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * The type of IPAM resource.
   *
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * The tags for an IPAM resource.
   *
   * @public
   */
  ResourceTags?: IpamResourceTag[] | undefined;

  /**
   * The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following:
   *
   * - For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs.
   * - For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated.
   * - For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).
   *
   * @public
   */
  IpUsage?: number | undefined;

  /**
   * The compliance status of the IPAM resource. For more information on compliance statuses, see [Monitor CIDR usage by resource](https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  ComplianceStatus?: IpamComplianceStatus | undefined;

  /**
   * The management state of the resource. For more information about management states, see [Monitor CIDR usage by resource](https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  ManagementState?: IpamManagementState | undefined;

  /**
   * The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see [Monitor CIDR usage by resource](https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  OverlapStatus?: IpamOverlapStatus | undefined;

  /**
   * The ID of a VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Availability Zone ID.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The resource CIDRs.
   *
   * @public
   */
  IpamResourceCidrs?: IpamResourceCidr[] | undefined;
}

/**
 * @public
 */
export interface GetIpamRouteOriginAuthorizationsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * Filter results to a specific CIDR prefix.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
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
 * Contains information about a Route Origin Authorization (ROA) currently published in the RPKI.
 *
 * @public
 */
export interface IpamRouteOriginAuthorizationInfo {
  /**
   * The IP address prefix in CIDR notation authorized by the ROA.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The Autonomous System Number (ASN) authorized to originate the prefix.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The maximum prefix length that the ASN is authorized to announce.
   *
   * @public
   */
  MaxLength?: number | undefined;
}

/**
 * @public
 */
export interface GetIpamRouteOriginAuthorizationsResult {
  /**
   * The Route Origin Authorizations published to the RPKI.
   *
   * @public
   */
  IpamRouteOriginAuthorizations?: IpamRouteOriginAuthorizationInfo[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamRouteProtectionFindingsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM to retrieve route protection findings for.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * One or more filters to apply to the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a Route Origin Authorization (ROA) published in the RPKI. A ROA cryptographically attests that a specific ASN is authorized to originate a specific IP address prefix.
 *
 * @public
 */
export interface IpamRouteOriginAuthorization {
  /**
   * The Autonomous System Number (ASN) authorized by the ROA.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The IP address prefix authorized by the ROA in CIDR notation.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The maximum prefix length that the ASN is authorized to announce.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * Specifies whether the ROA matches the route announcement.
   *
   * @public
   */
  Match?: boolean | undefined;

  /**
   * The expiration date of the ROA.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * Contains information about an overlapping route detected for a BYOIP prefix.
 *
 * @public
 */
export interface IpamRouteOverlap {
  /**
   * The overlapping IP address prefix in CIDR notation.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The ASN originating the overlapping route.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The time when the overlap was detected.
   *
   * @public
   */
  DetectedAt?: Date | undefined;
}

/**
 * Contains information about a route protection finding, including the RPKI validation status of a BYOIP route announcement.
 *
 * @public
 */
export interface IpamRouteProtectionFinding {
  /**
   * The ID of the resource owner.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The Amazon Web Services Region of the resource.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The ID of the IPAM pool associated with the finding.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * The IP address prefix in CIDR notation.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The state of the BYOIP CIDR. Possible values:
   *
   * - `advertised` - The CIDR is being advertised.
   * - `deprovisioned` - The CIDR has been deprovisioned.
   * - `failed-deprovision` - Deprovisioning failed.
   * - `failed-provision` - Provisioning failed.
   * - `pending-deprovision` - Deprovisioning is in progress.
   * - `pending-provision` - Provisioning is in progress.
   * - `provisioned` - The CIDR is provisioned.
   * - `provisioned-not-publicly-advertisable` - The CIDR is provisioned but not publicly advertisable.
   *
   * @public
   */
  State?: IpamByoipCidrState | undefined;

  /**
   * The advertisement type. Possible values:
   *
   * - `regional` - The IP address is advertised from a single location (regional services such as Amazon EC2).
   * - `global` - The IP address is advertised from multiple global locations simultaneously (global services such as Amazon CloudFront).
   *
   * @public
   */
  AdvertisementType?: IpamByoipAdvertisementType | undefined;

  /**
   * The network border group.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The ID of the BYOIP pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The Autonomous System Number (ASN) that originates the route.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The RPKI validation status of the route. Possible values:
   *
   * - `valid` - The route has a matching ROA that covers the prefix and origin ASN.
   * - `invalid` - The route has a ROA for the prefix, but the origin ASN or prefix length does not match.
   * - `unknown` - No ROA exists for the prefix, so RPKI validation cannot be performed.
   *
   * @public
   */
  RpkiStatus?: IpamRpkiStatus | undefined;

  /**
   * The RPKI enforcement strength for the route. Possible values:
   *
   * - `strict` - Invalid routes are rejected.
   * - `permissive` - Invalid routes are accepted but flagged.
   *
   * @public
   */
  RpkiStrength?: IpamRpkiStrength | undefined;

  /**
   * The Route Origin Authorizations (ROAs) that cover the prefix.
   *
   * @public
   */
  Roas?: IpamRouteOriginAuthorization[] | undefined;

  /**
   * The overlapping routes detected for this prefix.
   *
   * @public
   */
  RouteOverlaps?: IpamRouteOverlap[] | undefined;

  /**
   * The time when the route was last sampled.
   *
   * @public
   */
  SampleTime?: Date | undefined;

  /**
   * The time when the ROA data was last sampled.
   *
   * @public
   */
  RoaSampleTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamRouteProtectionFindingsResult {
  /**
   * The ID of the IPAM.
   *
   * @public
   */
  IpamId?: string | undefined;

  /**
   * The route protection findings.
   *
   * @public
   */
  RouteProtectionFindings?: IpamRouteProtectionFinding[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamRoutingPolicyRegistrationDeltasRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * Filter results to a specific delta ID.
   *
   * @public
   */
  DeltaId?: string | undefined;

  /**
   * The start of the time range to filter deltas by.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time range to filter deltas by.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The chronological order to return results in. Valid values: `forward` | `reverse`.
   *
   * @public
   */
  ChronologicalOrder?: ChronologicalOrder | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
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
export interface GetIpamRoutingPolicyRegistrationDeltasResult {
  /**
   * The routing policy registration deltas.
   *
   * @public
   */
  IpamRoutingPolicyRegistrationDeltas?: IpamRoutingPolicyRegistrationDelta[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamRoutingPolicyRegistrationsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * Filter results to a specific CIDR prefix.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
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
 * Contains information about a routing policy registration that represents a Route Origin Authorization (ROA) managed through IPAM.
 *
 * @public
 */
export interface IpamRoutingPolicyRegistration {
  /**
   * The IP address prefix in CIDR notation authorized by the ROA.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The Autonomous System Numbers (ASNs) authorized to originate the prefix.
   *
   * @public
   */
  Asns?: string[] | undefined;

  /**
   * Specifies whether to permit more specific route announcements than the CIDR prefix. When enabled, ASNs can announce sub-prefixes of the authorized CIDR up to the specified maximum length. Default: `false`.
   *
   * @public
   */
  PermitMoreSpecificAnnouncements?: boolean | undefined;

  /**
   * The maximum prefix length that the ASNs are authorized to announce.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * The description of the routing policy registration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the most recent delta that modified this registration.
   *
   * @public
   */
  LatestDeltaId?: string | undefined;

  /**
   * The state of the routing policy registration. Valid values: `pending-activate` | `activate-failed` | `create-in-progress` | `create-complete` | `update-in-progress` | `update-complete` | `delete-in-progress` | `delete-complete`.
   *
   * @public
   */
  State?: IpamRoutingPolicyRegistrationState | undefined;
}

/**
 * @public
 */
export interface GetIpamRoutingPolicyRegistrationsResult {
  /**
   * The routing policy registrations.
   *
   * @public
   */
  IpamRoutingPolicyRegistrations?: IpamRoutingPolicyRegistration[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataResult {
  /**
   * The instance data.
   *
   * @public
   */
  LaunchTemplateData?: ResponseLaunchTemplateData | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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
 * Describes the resource with which a prefix list is associated.
 *
 * @public
 */
export interface PrefixListAssociation {
  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The owner of the resource.
   *
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsResult {
  /**
   * Information about the associations.
   *
   * @public
   */
  PrefixListAssociations?: PrefixListAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * The version of the prefix list for which to return the entries. The default is the current version.
   *
   * @public
   */
  TargetVersion?: number | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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
 * Describes a prefix list entry.
 *
 * @public
 */
export interface PrefixListEntry {
  /**
   * The CIDR block.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesResult {
  /**
   * Information about the prefix list entries.
   *
   * @public
   */
  Entries?: PrefixListEntry[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedResourceVisibilityRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the managed resource visibility settings for the account.
 *
 * @public
 */
export interface ManagedResourceVisibilitySettings {
  /**
   * The default visibility setting for managed resources. A value of `hidden` indicates that managed resources are not included in Describe operation responses by default. A value of `visible` indicates that managed resources are included by default.
   *
   * @public
   */
  DefaultVisibility?: ManagedResourceDefaultVisibility | undefined;
}

/**
 * @public
 */
export interface GetManagedResourceVisibilityResult {
  /**
   * The managed resource visibility settings for the account.
   *
   * @public
   */
  Visibility?: ManagedResourceVisibilitySettings | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsRequest {
  /**
   * The ID of the Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsResult {
  /**
   * The ID of the Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * The status of Network Access Scope Analysis.
   *
   * @public
   */
  AnalysisStatus?: AnalysisStatus | undefined;

  /**
   * The findings associated with Network Access Scope Analysis.
   *
   * @public
   */
  AnalysisFindings?: AccessScopeAnalysisFinding[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentRequest {
  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentResult {
  /**
   * The Network Access Scope content.
   *
   * @public
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent | undefined;
}

/**
 * @public
 */
export interface GetPasswordDataRequest {
  /**
   * The ID of the Windows instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetPasswordDataResult {
  /**
   * The ID of the Windows instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The time the data was last updated.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The password of the instance. Returns an empty string if the password is not available.
   *
   * @public
   */
  PasswordData?: string | undefined;
}

/**
 * Contains the parameters for GetReservedInstanceExchangeQuote.
 *
 * @public
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Convertible Reserved Instances to exchange.
   *
   * @public
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * The configuration of the target Convertible Reserved Instance to exchange for your current Convertible Reserved Instances.
   *
   * @public
   */
  TargetConfigurations?: TargetConfigurationRequest[] | undefined;
}

/**
 * The cost associated with the Reserved Instance.
 *
 * @public
 */
export interface ReservationValue {
  /**
   * The hourly rate of the reservation.
   *
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).
   *
   * @public
   */
  RemainingTotalValue?: string | undefined;

  /**
   * The remaining upfront cost of the reservation.
   *
   * @public
   */
  RemainingUpfrontValue?: string | undefined;
}

/**
 * The total value of the Convertible Reserved Instance.
 *
 * @public
 */
export interface ReservedInstanceReservationValue {
  /**
   * The total value of the Convertible Reserved Instance that you are exchanging.
   *
   * @public
   */
  ReservationValue?: ReservationValue | undefined;

  /**
   * The ID of the Convertible Reserved Instance that you are exchanging.
   *
   * @public
   */
  ReservedInstanceId?: string | undefined;
}

/**
 * Information about the Convertible Reserved Instance offering.
 *
 * @public
 */
export interface TargetConfiguration {
  /**
   * The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is reserved and cannot be specified in a request
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The ID of the Convertible Reserved Instance offering.
   *
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * The total value of the new Convertible Reserved Instances.
 *
 * @public
 */
export interface TargetReservationValue {
  /**
   * The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of the list value, remaining upfront price, and additional upfront cost of the exchange.
   *
   * @public
   */
  ReservationValue?: ReservationValue | undefined;

  /**
   * The configuration of the Convertible Reserved Instances that make up the exchange.
   *
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;
}

/**
 * Contains the output of GetReservedInstancesExchangeQuote.
 *
 * @public
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * The currency of the transaction.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * If `true`, the exchange is valid. If `false`, the exchange cannot be completed.
   *
   * @public
   */
  IsValidExchange?: boolean | undefined;

  /**
   * The new end date of the reservation term.
   *
   * @public
   */
  OutputReservedInstancesWillExpireAt?: Date | undefined;

  /**
   * The total true upfront charge for the exchange.
   *
   * @public
   */
  PaymentDue?: string | undefined;

  /**
   * The cost associated with the Reserved Instance.
   *
   * @public
   */
  ReservedInstanceValueRollup?: ReservationValue | undefined;

  /**
   * The configuration of your Convertible Reserved Instances.
   *
   * @public
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[] | undefined;

  /**
   * The cost associated with the Reserved Instance.
   *
   * @public
   */
  TargetConfigurationValueRollup?: ReservationValue | undefined;

  /**
   * The values of the target Convertible Reserved Instances.
   *
   * @public
   */
  TargetConfigurationValueSet?: TargetReservationValue[] | undefined;

  /**
   * Describes the reason why the exchange cannot be completed.
   *
   * @public
   */
  ValidationFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteServerAssociationsRequest {
  /**
   * The ID of the route server for which to get association information.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRouteServerAssociationsResult {
  /**
   * Information about the associations for the specified route server.
   *
   * @public
   */
  RouteServerAssociations?: RouteServerAssociation[] | undefined;
}

/**
 * @public
 */
export interface GetRouteServerPropagationsRequest {
  /**
   * The ID of the route server for which to get propagation information.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * The ID of the route table for which to get propagation information.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRouteServerPropagationsResult {
  /**
   * Information about the route propagations for the specified route server.
   *
   * @public
   */
  RouteServerPropagations?: RouteServerPropagation[] | undefined;
}

/**
 * @public
 */
export interface GetRouteServerRoutingDatabaseRequest {
  /**
   * The ID of the route server for which to get the routing database.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of routing database entries to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Filters to apply to the routing database query.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes the installation status of a route in a route table.
 *
 * @public
 */
export interface RouteServerRouteInstallationDetail {
  /**
   * The ID of the route table where the route is being installed.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The current installation status of the route in the route table.
   *
   * @public
   */
  RouteInstallationStatus?: RouteServerRouteInstallationStatus | undefined;

  /**
   * The reason for the current installation status of the route.
   *
   * @public
   */
  RouteInstallationStatusReason?: string | undefined;
}

/**
 * Describes a route in the route server's routing database.
 *
 * @public
 */
export interface RouteServerRoute {
  /**
   * The ID of the route server endpoint that received this route.
   *
   * @public
   */
  RouteServerEndpointId?: string | undefined;

  /**
   * The ID of the route server peer that advertised this route.
   *
   * @public
   */
  RouteServerPeerId?: string | undefined;

  /**
   * Details about the installation status of this route in route tables.
   *
   * @public
   */
  RouteInstallationDetails?: RouteServerRouteInstallationDetail[] | undefined;

  /**
   * The current status of the route in the routing database. Values are `in-rib` or `in-fib` depending on if the routes are in the RIB or the FIB database.
   *
   * The [Routing Information Base (RIB)](https://en.wikipedia.org/wiki/Routing_table) serves as a database that stores all the routing information and network topology data collected by a router or routing system, such as routes learned from BGP peers. The RIB is constantly updated as new routing information is received or existing routes change. This ensures that the route server always has the most current view of the network topology and can make optimal routing decisions.
   *
   * The [Forwarding Information Base (FIB)](https://en.wikipedia.org/wiki/Forwarding_information_base) serves as a forwarding table for what route server has determined are the best-path routes in the RIB after evaluating all available routing information and policies. The FIB routes are installed on the route tables. The FIB is recomputed whenever there are changes to the RIB.
   *
   * @public
   */
  RouteStatus?: RouteServerRouteStatus | undefined;

  /**
   * The destination CIDR block of the route.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The AS path attributes of the BGP route.
   *
   * @public
   */
  AsPaths?: string[] | undefined;

  /**
   * The Multi-Exit Discriminator (MED) value of the BGP route.
   *
   * @public
   */
  Med?: number | undefined;

  /**
   * The IP address for the next hop.
   *
   * @public
   */
  NextHopIp?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteServerRoutingDatabaseResult {
  /**
   * Indicates whether routes are being persisted in the routing database.
   *
   * @public
   */
  AreRoutesPersisted?: boolean | undefined;

  /**
   * The collection of routes in the route server's routing database.
   *
   * @public
   */
  Routes?: RouteServerRoute[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcRequest {
  /**
   * The VPC ID where the security group can be used.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filters. If using multiple filters, the results include security groups which match all filters.
   *
   * - `group-id`: The security group ID.
   * - `description`: The security group's description.
   * - `group-name`: The security group name.
   * - `owner-id`: The security group owner ID.
   * - `primary-vpc-id`: The VPC ID in which the security group was created.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * A security group that can be used by interfaces in the VPC.
 *
 * @public
 */
export interface SecurityGroupForVpc {
  /**
   * The security group's description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The security group name.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The security group owner ID.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The security group ID.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The security group tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The VPC ID in which the security group was created.
   *
   * @public
   */
  PrimaryVpcId?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The security group that can be used by interfaces in the VPC.
   *
   * @public
   */
  SecurityGroupForVpcs?: SecurityGroupForVpc[] | undefined;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusResult {
  /**
   * If `true`, access to the EC2 serial console of all instances is enabled for your account. If `false`, access to the EC2 serial console of all instances is disabled for your account.
   *
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;

  /**
   * The entity that manages access to the serial console. Possible values include:
   *
   * - `account` - Access is managed by the account.
   * - `declarative-policy` - Access is managed by a declarative policy and can't be modified by the account.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockPublicAccessStateRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockPublicAccessStateResult {
  /**
   * The current state of block public access for snapshots. Possible values include:
   *
   * - `block-all-sharing` - All public sharing of snapshots is blocked. Users in the account can't request new public sharing. Additionally, snapshots that were already publicly shared are treated as private and are not publicly available.
   * - `block-new-sharing` - Only new public sharing of snapshots is blocked. Users in the account can't request new public sharing. However, snapshots that were already publicly shared, remain publicly available.
   * - `unblocked` - Public sharing is not blocked. Users can publicly share snapshots.
   *
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;

  /**
   * The entity that manages the state for block public access for snapshots. Possible values include:
   *
   * - `account` - The state is managed by the account.
   * - `declarative-policy` - The state is managed by a declarative policy and can't be modified by the account.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresRequest {
  /**
   * The instance types. We recommend that you specify at least three instance types. If you specify one or two instance types, or specify variations of a single instance type (for example, an `m3.xlarge` with and without instance storage), the returned placement score will always be low.
   *
   * If you specify `InstanceTypes`, you can't specify `InstanceRequirementsWithMetadata`.
   *
   * @public
   */
  InstanceTypes?: string[] | undefined;

  /**
   * The target capacity.
   *
   * @public
   */
  TargetCapacity: number | undefined;

  /**
   * The unit for the target capacity.
   *
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;

  /**
   * Specify `true` so that the response returns a list of scored Availability Zones. Otherwise, the response returns a list of scored Regions.
   *
   * A list of scored Availability Zones is useful if you want to launch all of your Spot capacity into a single Availability Zone.
   *
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * The Regions used to narrow down the list of Regions to be scored. Enter the Region code, for example, `us-east-1`.
   *
   * @public
   */
  RegionNames?: string[] | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
   *
   * If you specify `InstanceRequirementsWithMetadata`, you can't specify `InstanceTypes`.
   *
   * @public
   */
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify `true` so that the response returns scores that include Local Zones. Otherwise, the response ignores Local Zones.
   *
   * When you request regional scores, Local Zone capacity counts toward its parent Region.
   *
   * @public
   */
  IncludeLocalZones?: boolean | undefined;
}

/**
 * The Spot placement score for this Region or Availability Zone. The score is calculated based on the assumption that the `capacity-optimized` allocation strategy is used and that all of the Availability Zones in the Region can be used.
 *
 * @public
 */
export interface SpotPlacementScore {
  /**
   * The Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The placement score, on a scale from `1` to `10`. A score of `10` indicates that your Spot request is highly likely to succeed in this Region or Availability Zone. A score of `1` indicates that your Spot request is not likely to succeed.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresResult {
  /**
   * The Spot placement score for the top 10 Regions or Availability Zones, scored on a scale from 1 to 10. Each score  reflects how likely it is that each Region or Availability Zone will succeed at fulfilling the specified target capacity  *at the time of the Spot placement score request*. A score of `10` means that your Spot capacity request is highly likely to succeed in that Region or Availability Zone.
   *
   * If you request a Spot placement score for Regions, a high score assumes that your fleet request will be configured to use all Availability Zones and the `capacity-optimized` allocation strategy. If you request a Spot placement score for Availability Zones, a high score assumes that your fleet request will be configured to use a single Availability Zone and the `capacity-optimized` allocation strategy.
   *
   * Different  Regions or Availability Zones might return the same score.
   *
   * > **Note:** The Spot placement score serves as a recommendation only. No score guarantees that your Spot request will be fully or partially fulfilled.
   *
   * @public
   */
  SpotPlacementScores?: SpotPlacementScore[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsRequest {
  /**
   * One or more filters.
   *
   * - `reservationType` - The type of reservation (`prefix` | `explicit`).
   * - `subnet-id` - The ID of the subnet.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsResult {
  /**
   * Information about the IPv4 subnet CIDR reservations.
   *
   * @public
   */
  SubnetIpv4CidrReservations?: SubnetCidrReservation[] | undefined;

  /**
   * Information about the IPv6 subnet CIDR reservations.
   *
   * @public
   */
  SubnetIpv6CidrReservations?: SubnetCidrReservation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentNatConfigurationRequest {
  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains information about a NAT gateway rule for a transit gateway attachment, including the rule number, the source CIDR block, the translated CIDR block, and the state of the rule.
 *
 * @public
 */
export interface TransitGatewayNatRule {
  /**
   * The rule number.
   *
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * The IPv4 CIDR block of the source addresses to translate.
   *
   * @public
   */
  MatchSourceCidr?: string | undefined;

  /**
   * The IPv4 CIDR block that the transit gateway translates the source addresses to.
   *
   * @public
   */
  NatCidr?: string | undefined;

  /**
   * The state of the NAT gateway rule. The possible values are:
   *
   * - `pending` - The transit gateway is applying a change to the rule.
   * - `activated` - The rule is in effect because NAT gateway support is enabled for the attachment.
   * - `deactivated` - The rule isn't in effect because NAT gateway support is disabled for the attachment.
   *
   * @public
   */
  State?: TransitGatewayNatRuleState | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentNatConfigurationResult {
  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The state of NAT gateway support for the attachment.
   *
   * @public
   */
  NatGatewaySupport?: TransitGatewayAttachmentNatGatewaySupportState | undefined;

  /**
   * Specifies whether the transit gateway installs routes for the NAT CIDRs in the route tables to which the attachment propagates.
   *
   * @public
   */
  NatSystemRouteSupport?: TransitGatewayAttachmentNatSystemRouteSupportValue | undefined;

  /**
   * The NAT gateway rules for the attachment.
   *
   * @public
   */
  NatGatewayRules?: TransitGatewayNatRule[] | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `transit-gateway-route-table-id` - The ID of the transit gateway route table.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a propagation route table.
 *
 * @public
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * The ID of the propagation route table.
   *
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * The state of the propagation route table.
   *
   * @public
   */
  State?: TransitGatewayPropagationState | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * Information about the propagation route tables.
   *
   * @public
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMeteringPolicyEntriesRequest {
  /**
   * The ID of the transit gateway metering policy to retrieve entries for.
   *
   * @public
   */
  TransitGatewayMeteringPolicyId: string | undefined;

  /**
   * One or more filters to apply when retrieving metering policy entries.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMeteringPolicyEntriesResult {
  /**
   * Information about the transit gateway metering policy entries.
   *
   * @public
   */
  TransitGatewayMeteringPolicyEntries?: TransitGatewayMeteringPolicyEntry[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `resource-id` - The ID of the resource.
   * - `resource-type` - The type of resource. The valid value is: `vpc`.
   * - `state` - The state of the subnet association. Valid values are `associated` | `associating` | `disassociated` | `disassociating`.
   * - `subnet-id` - The ID of the subnet.
   * - `transit-gateway-attachment-id` - The id of the transit gateway attachment.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the resources associated with the transit gateway multicast domain.
 *
 * @public
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource, for example a VPC attachment.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The subnet associated with the transit gateway multicast domain.
   *
   * @public
   */
  Subnet?: SubnetAssociation | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * Information about the multicast domain associations.
   *
   * @public
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsRequest {
  /**
   * The ID of the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * The filters associated with the transit gateway policy table.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsResult {
  /**
   * Returns details about the transit gateway policy table association.
   *
   * @public
   */
  Associations?: TransitGatewayPolicyTableAssociation[] | undefined;

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
export interface GetTransitGatewayPolicyTableEntriesRequest {
  /**
   * The ID of the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `policy-rule-number` - The rule number for the transit gateway policy table entry.
   * - `target-route-table-id` - The ID of the target route table.
   * - `policy-rule.source-ip` - The source CIDR block for the policy rule.
   * - `policy-rule.destination-ip` - The destination CIDR block for the policy rule.
   * - `policy-rule.source-port` - The source port or port range for the policy rule.
   * - `policy-rule.destination-port` - The destination port or port range for the policy rule.
   * - `policy-rule.protocol` - The protocol for the policy rule.
   * - `policy-rule.meta-data.key` - The metadata key for the policy rule.
   * - `policy-rule.meta-data.value` - The metadata value for the policy rule.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesResult {
  /**
   * The entries for the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableEntries?: TransitGatewayPolicyTableEntry[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `attachment.resource-id` - The ID of the resource for the attachment.
   * - `attachment.resource-type` - The type of resource for the attachment. Valid values are `vpc` | `vpn` | `direct-connect-gateway` | `peering`.
   * - `attachment.transit-gateway-attachment-id` - The ID of the attachment.
   * - `is-blackhole` - Whether traffic matching the route is blocked (`true` | `false`).
   * - `prefix-list-id` - The ID of the prefix list.
   * - `prefix-list-owner-id` - The ID of the owner of the prefix list.
   * - `state` - The state of the prefix list reference (`pending` | `available` | `modifying` | `deleting`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * Information about the prefix list references.
   *
   * @public
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `resource-id` - The ID of the resource.
   * - `resource-type` - The resource type. Valid values are `vpc` | `vpn` | `direct-connect-gateway` | `peering` | `connect`.
   * - `transit-gateway-attachment-id` - The ID of the attachment.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an association between a route table and a resource attachment.
 *
 * @public
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type. Note that the `tgw-peering` resource type has been deprecated.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * Information about the associations.
   *
   * @public
   */
  Associations?: TransitGatewayRouteTableAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `resource-id` - The ID of the resource.
   * - `resource-type` - The resource type. Valid values are `vpc` | `vpn` | `direct-connect-gateway` | `peering` | `connect`.
   * - `transit-gateway-attachment-id` - The ID of the attachment.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a route table propagation.
 *
 * @public
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource. Note that the `tgw-peering` resource type has been deprecated.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The state of the resource.
   *
   * @public
   */
  State?: TransitGatewayPropagationState | undefined;

  /**
   * The ID of the transit gateway route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * Information about the route table propagations.
   *
   * @public
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyRequest {
  /**
   * The ID of the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyResult {
  /**
   * The status of the Verified Access policy.
   *
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * The Verified Access policy document.
   *
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointTargetsRequest {
  /**
   * The ID of the network CIDR endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
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

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}
