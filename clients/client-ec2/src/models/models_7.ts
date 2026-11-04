// smithy-typescript generated code
import type {
  _InstanceType,
  AccountVpcEncryptionControlMode,
  Affinity,
  AggregationStatusEnum,
  ApplianceModeSupportValue,
  ArchitectureValues,
  AutoAcceptSharedAttachmentsValue,
  AutoPlacement,
  BootModeValues,
  CapacityReservationAdjustmentStatus,
  CapacityReservationInstancePlatform,
  CapacityReservationPreference,
  ClientVpnAuthorizationPolicyShadowMode,
  ClientVpnAuthorizationPolicyStatus,
  CurrencyCodeValues,
  DefaultHttpTokensEnforcedState,
  DefaultInstanceMetadataEndpointState,
  DefaultInstanceMetadataTagsState,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DiskImageFormat,
  DnsSupportValue,
  EncryptionSupportOptionValue,
  EndDateType,
  ExcessCapacityTerminationPolicy,
  FleetExcessCapacityTerminationPolicy,
  FpgaImageAttributeName,
  HostMaintenance,
  HostnameType,
  HostRecovery,
  HostTenancy,
  HttpTokensState,
  ImdsSupportValues,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceBandwidthWeighting,
  InstanceMatchCriteria,
  InstanceMetadataEndpointState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceRebootMigrationState,
  InternetGatewayBlockMode,
  InternetGatewayExclusionMode,
  IpAddressType,
  IpamMeteredAccount,
  IpamPolicyResourceType,
  IpamTier,
  IpScopeEnum,
  Ipv6SupportValue,
  IpVersionEnum,
  LockMode,
  LockState,
  ManagedResourceDefaultVisibility,
  MetadataDefaultHttpTokensState,
  ModifyAvailabilityZoneOptInStatus,
  NestedVirtualizationSpecification,
  NetworkProtocolEnum,
  OperationType,
  PayerResponsibility,
  PayerResponsibilityScope,
  PayerResponsibilityType,
  PermissionGroup,
  PlatformValues,
  PublicIpDnsOption,
  RouteServerPersistRoutesAction,
  SecurityGroupReferencingSupportValue,
  SelfServicePortal,
  ShutdownBehavior,
  SnapshotAttributeName,
  Status,
  TargetStorageTier,
  TpmSupportValues,
  TrafficDirection,
  TrafficMirrorFilterRuleField,
  TrafficMirrorNetworkService,
  TrafficMirrorRuleAction,
  TrafficMirrorSessionField,
  TransitGatewayAttachmentNatGatewaySupportState,
  TransitGatewayAttachmentNatGatewaySupportValue,
  TransitGatewayAttachmentNatSystemRouteSupportValue,
  UnlimitedSupportedInstanceFamily,
  UnsuccessfulInstanceCreditSpecificationErrorCode,
  VerificationMethod,
  VerifiedAccessEndpointProtocol,
  VolumeState,
  VolumeType,
  VpcEncryptionControlExclusionStateInput,
  VpcEncryptionControlMode,
  VpcTenancy,
  VpnEcmpSupportValue,
  VpnTunnelBandwidth,
} from "./enums";
import type {
  AccountVpcEncryptionControl,
  AddedPrincipal,
  AddIpamOperatingRegion,
  AddIpamOrganizationalUnitExclusion,
  AddPrefixListEntry,
  AddressAttribute,
  ApplicationStatusCheckResponseObject,
  ByoipCidr,
  CapacityReservation,
  CapacityReservationAdjustmentDetails,
  EnaSrdSpecification,
  HealthCheckPathRequestObject,
  InstanceEventWindow,
  IpamPoolAllocation,
  IpamRoutingPolicyRegistrationDelta,
  OperatorResponse,
  Tag,
  TagSpecification,
  TransitGatewayClientVpnAttachment,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
} from "./models_0";
import type {
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservationTarget,
  ClientConnectOptions,
  ClientLoginBannerOptions,
  ClientRouteEnforcementOptions,
  ConnectionLogOptions,
  ConnectionTrackingSpecificationRequest,
  DevicePostureOptions,
  ExternalAuthorityConfiguration,
  FleetLaunchTemplateConfigRequest,
  InstanceEventWindowTimeRangeRequest,
  Ipam,
  IpamPool,
  IpamPrefixListResolver,
  IpamPrefixListResolverRuleRequest,
  IpamPrefixListResolverTarget,
  IpamResourceDiscovery,
  IpamScope,
  LaunchTemplate,
  LocalGatewayRoute,
  ManagedPrefixList,
  Placement,
  RequestIpamResourceTag,
  TargetCapacitySpecificationRequest,
  TransitGatewayConfigurationInputStructure,
  VpcEncryptionControl,
} from "./models_1";
import type {
  DnsOptionsSpecification,
  IKEVersionsRequestListValue,
  PayerResponsibilityEntry,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  RouteServer,
  SubnetConfiguration,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorPortRangeRequest,
  TrafficMirrorSession,
  TransitGateway,
  TransitGatewayMeteringPolicy,
  TransitGatewayPolicyTableEntry,
  TransitGatewayPrefixListReference,
  TransitGatewayRequestPolicyRule,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
  VerifiedAccessSseSpecificationRequest,
  VpcBlockPublicAccessExclusion,
  VpnConnection,
  VpnTunnelLogOptionsSpecification,
} from "./models_2";
import type {
  Byoasn,
  CapacityBlock,
  CapacityBlockExtension,
  ConversionTask,
  InstanceTagNotificationAttribute,
  IpamPoolCidr,
} from "./models_3";
import type {
  AttributeBooleanValue,
  FpgaImageAttribute,
  ImportImageLicenseConfigurationResponse,
  InstanceMetadataOptionsResponse,
  InstanceStatusEvent,
  LaunchPermission,
  Monitoring,
  PublicIpv4PoolRange,
  ReservedInstancesConfiguration,
  SnapshotDetail,
  SnapshotTaskDetail,
} from "./models_4";
import type {
  CreateVolumePermission,
  LaunchTemplateConfig,
  ScheduledInstance,
  VerifiedAccessInstanceLoggingConfiguration,
  VolumeModification,
  VpcBlockPublicAccessOptions,
} from "./models_5";
import type {
  InstanceFamilyCreditSpecification,
  IpamPolicyDocument,
  IpamResourceCidr,
  ManagedResourceVisibilitySettings,
  Purchase,
  TransitGatewayNatRule,
} from "./models_6";

/**
 * Describes the targets for the specified Verified Access endpoint.
 *
 * @public
 */
export interface VerifiedAccessEndpointTarget {
  /**
   * The ID of the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointId?: string | undefined;

  /**
   * The IP address of the target.
   *
   * @public
   */
  VerifiedAccessEndpointTargetIpAddress?: string | undefined;

  /**
   * The DNS name of the target.
   *
   * @public
   */
  VerifiedAccessEndpointTargetDns?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointTargetsResult {
  /**
   * The Verified Access targets.
   *
   * @public
   */
  VerifiedAccessEndpointTargets?: VerifiedAccessEndpointTarget[] | undefined;

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
export interface GetVerifiedAccessGroupPolicyRequest {
  /**
   * The ID of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

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
export interface GetVerifiedAccessGroupPolicyResult {
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
export interface GetVpcResourcesBlockingEncryptionEnforcementRequest {
  /**
   * The ID of the VPC to check for resources blocking encryption enforcement.
   *
   * @public
   */
  VpcId: string | undefined;

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
 * Describes a resource that is not compliant with VPC encryption requirements.
 *
 * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface VpcEncryptionNonCompliantResource {
  /**
   * The ID of the non-compliant resource.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the non-compliant resource.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A description of the non-compliant resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the resource can be excluded from encryption enforcement.
   *
   * @public
   */
  IsExcludable?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVpcResourcesBlockingEncryptionEnforcementResult {
  /**
   * Information about resources that are blocking encryption enforcement.
   *
   * @public
   */
  NonCompliantResources?: VpcEncryptionNonCompliantResource[] | undefined;

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
export interface GetVpnConnectionDeviceSampleConfigurationRequest {
  /**
   * The `VpnConnectionId` specifies the Site-to-Site VPN connection used for the sample configuration.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * Device identifier provided by the `GetVpnConnectionDeviceTypes` API.
   *
   * @public
   */
  VpnConnectionDeviceTypeId: string | undefined;

  /**
   * The IKE version to be used in the sample configuration file for your customer gateway device. You can specify one of the following versions: `ikev1` or `ikev2`.
   *
   * @public
   */
  InternetKeyExchangeVersion?: string | undefined;

  /**
   * The type of sample configuration to generate. Valid values are "compatibility" (includes IKEv1) or "recommended" (throws UnsupportedOperationException for IKEv1).
   *
   * @public
   */
  SampleType?: string | undefined;

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
export interface GetVpnConnectionDeviceSampleConfigurationResult {
  /**
   * Sample configuration file for the specified customer gateway device.
   *
   * @public
   */
  VpnConnectionDeviceSampleConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesRequest {
  /**
   * The maximum number of results returned by `GetVpnConnectionDeviceTypes` in paginated output. When this parameter is used, `GetVpnConnectionDeviceTypes` only returns `MaxResults` results in a single page along with a `NextToken` response element. The remaining results of the initial request can be seen by sending another `GetVpnConnectionDeviceTypes` request with the returned `NextToken` value. This value can be between 200 and 1000. If this parameter is not used, then `GetVpnConnectionDeviceTypes` returns all results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The `NextToken` value returned from a previous paginated `GetVpnConnectionDeviceTypes` request where `MaxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `NextToken` value. This value is null when there are no more results to return.
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
 * List of customer gateway devices that have a sample configuration file available for use. You can also see the list of device types with sample configuration files available under [Your customer gateway device](https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html) in the *Amazon Web Services Site-to-Site VPN User Guide*.
 *
 * @public
 */
export interface VpnConnectionDeviceType {
  /**
   * Customer gateway device identifier.
   *
   * @public
   */
  VpnConnectionDeviceTypeId?: string | undefined;

  /**
   * Customer gateway device vendor.
   *
   * @public
   */
  Vendor?: string | undefined;

  /**
   * Customer gateway device platform.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * Customer gateway device software version.
   *
   * @public
   */
  Software?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesResult {
  /**
   * List of customer gateway devices that have a sample configuration file available for use.
   *
   * @public
   */
  VpnConnectionDeviceTypes?: VpnConnectionDeviceType[] | undefined;

  /**
   * The `NextToken` value to include in a future `GetVpnConnectionDeviceTypes` request. When the results of a `GetVpnConnectionDeviceTypes` request exceed `MaxResults`, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusRequest {
  /**
   * The ID of the Site-to-Site VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * The external IP address of the VPN tunnel.
   *
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Details for Site-to-Site VPN tunnel endpoint maintenance events.
 *
 * @public
 */
export interface MaintenanceDetails {
  /**
   * Verify existence of a pending maintenance.
   *
   * @public
   */
  PendingMaintenance?: string | undefined;

  /**
   * The timestamp after which Amazon Web Services will automatically apply maintenance.
   *
   * @public
   */
  MaintenanceAutoAppliedAfter?: Date | undefined;

  /**
   * Timestamp of last applied maintenance.
   *
   * @public
   */
  LastMaintenanceApplied?: Date | undefined;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusResult {
  /**
   * The ID of the Site-to-Site VPN connection.
   *
   * @public
   */
  VpnConnectionId?: string | undefined;

  /**
   * The ID of the transit gateway associated with the VPN connection.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the customer gateway.
   *
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * The external IP address of the VPN tunnel.
   *
   * @public
   */
  VpnTunnelOutsideIpAddress?: string | undefined;

  /**
   * Get details of pending tunnel endpoint maintenance.
   *
   * @public
   */
  MaintenanceDetails?: MaintenanceDetails | undefined;
}

/**
 * @public
 */
export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * The ID of the Client VPN endpoint to which the client certificate revocation list applies.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The client certificate revocation list file. For more information, see [Generate a Client Certificate Revocation List](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate) in the *Client VPN Administrator Guide*.
   *
   * @public
   */
  CertificateRevocationList: string | undefined;

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
export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Describes the client-specific data.
 *
 * @public
 */
export interface ClientData {
  /**
   * A user-defined comment about the disk upload.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The time that the disk upload ends.
   *
   * @public
   */
  UploadEnd?: Date | undefined;

  /**
   * The size of the uploaded disk image, in GiB.
   *
   * @public
   */
  UploadSize?: number | undefined;

  /**
   * The time that the disk upload starts.
   *
   * @public
   */
  UploadStart?: Date | undefined;
}

/**
 * Describes the Amazon S3 bucket for the disk image.
 *
 * @public
 */
export interface UserBucket {
  /**
   * The name of the Amazon S3 bucket where the disk image is located.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The file name of the disk image.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * Describes the disk container object for an import image task.
 *
 * @public
 */
export interface ImageDiskContainer {
  /**
   * The description of the disk image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The block device mapping for the disk.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The format of the disk image being imported.
   *
   * Valid values: `OVA` | `VHD` | `VHDX` | `VMDK` | `RAW`
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The ID of the EBS snapshot to be used for importing the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an Amazon S3 URL (s3://..)
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The S3 bucket for the disk image.
   *
   * @public
   */
  UserBucket?: UserBucket | undefined;
}

/**
 * The request information of license configurations.
 *
 * @public
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * The ARN of a license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportImageRequest {
  /**
   * The architecture of the virtual machine.
   *
   * Valid values: `i386` | `x86_64`
   *
   * @public
   */
  Architecture?: string | undefined;

  /**
   * The client-specific data.
   *
   * @public
   */
  ClientData?: ClientData | undefined;

  /**
   * The token to enable idempotency for VM import requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A description string for the import image task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the disk containers.
   *
   * @public
   */
  DiskContainers?: ImageDiskContainer[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies whether the destination AMI of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using `KmsKeyId`. For more information, see [Amazon EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The target hypervisor platform.
   *
   * Valid values: `xen`
   *
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * An identifier for the symmetric KMS key to use when creating the encrypted AMI. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a `KmsKeyId` is specified, the `Encrypted` flag must also be set.
   *
   * The KMS key identifier may be provided in any of the following formats:
   *
   * - Key ID
   * - Key alias
   * - ARN using key ID. The ID ARN contains the `arn:aws:kms` namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the `key` namespace, and then the key ID. For example, arn:aws:kms:*us-east-1*:*012345678910*:key/*abcd1234-a123-456a-a12b-a123b4cd56ef*.
   * - ARN using key alias. The alias ARN contains the `arn:aws:kms` namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the `alias` namespace, and then the key alias. For example, arn:aws:kms:*us-east-1*:*012345678910*:alias/*ExampleAlias*.
   *
   * Amazon Web Services parses `KmsKeyId` asynchronously, meaning that the action you call may appear to complete even though you provided an invalid identifier. This action will eventually report failure.
   *
   * The specified KMS key must exist in the Region that the AMI is being copied to.
   *
   * Amazon EBS does not support asymmetric KMS keys.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The license type to be used for the Amazon Machine Image (AMI) after importing.
   *
   * Specify `AWS` to replace the source-system license with an Amazon Web Services license or `BYOL` to retain the source-system license. Leaving this parameter undefined is the same as choosing `AWS` when importing a Windows Server operating system, and the same as choosing `BYOL` when importing a Windows client operating system (such as Windows 10) or a Linux operating system.
   *
   * To use `BYOL`, you must have existing licenses with rights to use these licenses in a third party cloud, such as Amazon Web Services. For more information, see [Prerequisites](https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image) in the VM Import/Export User Guide.
   *
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * The operating system of the virtual machine. If you import a VM that is compatible with Unified Extensible Firmware Interface (UEFI) using an EBS snapshot, you must specify a value for the platform.
   *
   * Valid values: `Windows` | `Linux`
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The name of the role to use when not using the default role, 'vmimport'.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The ARNs of the license configurations.
   *
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[] | undefined;

  /**
   * The tags to apply to the import image task during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The usage operation value. For more information, see [Licensing options](https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#prerequisites) in the *VM Import/Export User Guide*.
   *
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * The boot mode of the virtual machine.
   *
   * > **Note:** The `uefi-preferred` boot mode isn't supported for importing images. For more information, see [Boot modes](https://docs.aws.amazon.com/vm-import/latest/userguide/prerequisites.html#vmimport-boot-modes) in the *VM Import/Export User Guide*.
   *
   * @public
   */
  BootMode?: BootModeValues | undefined;
}

/**
 * @public
 */
export interface ImportImageResult {
  /**
   * The architecture of the virtual machine.
   *
   * @public
   */
  Architecture?: string | undefined;

  /**
   * A description of the import task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the AMI is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The target hypervisor of the import task.
   *
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) created by the import task.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The task ID of the import image task.
   *
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * The identifier for the symmetric KMS key that was used to create the encrypted AMI.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The license type of the virtual machine.
   *
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * The operating system of the virtual machine.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The progress of the task.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * Information about the snapshots.
   *
   * @public
   */
  SnapshotDetails?: SnapshotDetail[] | undefined;

  /**
   * A brief status of the task.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A detailed status message of the import task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The ARNs of the license configurations.
   *
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[] | undefined;

  /**
   * Any tags assigned to the import image task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The usage operation value.
   *
   * @public
   */
  UsageOperation?: string | undefined;
}

/**
 * Describes a disk image.
 *
 * @public
 */
export interface DiskImageDetail {
  /**
   * The disk image format.
   *
   * @public
   */
  Format: DiskImageFormat | undefined;

  /**
   * The size of the disk image, in GiB.
   *
   * @public
   */
  Bytes: number | undefined;

  /**
   * A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL. For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the [Authenticating REST Requests](https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html) topic in the *Amazon Simple Storage Service Developer Guide*.
   *
   * For information about the import manifest referenced by this API action, see [VM Import Manifest](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html).
   *
   * @public
   */
  ImportManifestUrl: string | undefined;
}

/**
 * Describes an EBS volume.
 *
 * @public
 */
export interface VolumeDetail {
  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  Size: number | undefined;
}

/**
 * Describes a disk image.
 *
 * @public
 */
export interface DiskImage {
  /**
   * A description of the disk image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the disk image.
   *
   * @public
   */
  Image?: DiskImageDetail | undefined;

  /**
   * Information about the volume.
   *
   * @public
   */
  Volume?: VolumeDetail | undefined;
}

/**
 * Describes the user data for an instance.
 *
 * @public
 */
export interface UserData {
  /**
   * The user data. If you are using an Amazon Web Services SDK or command line tool, Base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide Base64-encoded text.
   *
   * @public
   */
  Data?: string | undefined;
}

/**
 * Describes the launch specification for VM import.
 *
 * @public
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * The architecture of the instance.
   *
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * The security group names.
   *
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * The security group IDs.
   *
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * The Base64-encoded user data to make available to the instance.
   *
   * @public
   */
  UserData?: UserData | undefined;

  /**
   * The instance type. For more information about the instance types that you can import, see [Instance Types](https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-instance-types) in the VM Import/Export User Guide.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The placement information for the instance.
   *
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * Indicates whether monitoring is enabled.
   *
   * @public
   */
  Monitoring?: boolean | undefined;

  /**
   * [EC2-VPC] The ID of the subnet in which to launch the instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   *
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * [EC2-VPC] An available IP address from the IP address range of the subnet.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface ImportInstanceRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A description for the instance being imported.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The launch specification.
   *
   * @public
   */
  LaunchSpecification?: ImportInstanceLaunchSpecification | undefined;

  /**
   * The disk image.
   *
   * @public
   */
  DiskImages?: DiskImage[] | undefined;

  /**
   * The instance operating system.
   *
   * @public
   */
  Platform: PlatformValues | undefined;
}

/**
 * @public
 */
export interface ImportInstanceResult {
  /**
   * Information about the conversion task.
   *
   * @public
   */
  ConversionTask?: ConversionTask | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairRequest {
  /**
   * The tags to apply to the imported key pair.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A unique name for the key pair.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * The public key.
   *
   * @public
   */
  PublicKeyMaterial: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairResult {
  /**
   * - For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC 4716.
   * - For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with [OpenSSH 6.8](http://www.openssh.com/txt/release-6.8).
   *
   * @public
   */
  KeyFingerprint?: string | undefined;

  /**
   * The key pair name that you provided.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The ID of the resulting key pair.
   *
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * The tags applied to the imported key pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The disk container object for the import snapshot request.
 *
 * @public
 */
export interface SnapshotDiskContainer {
  /**
   * The description of the disk image being imported.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The format of the disk image being imported.
   *
   * Valid values: `VHD` | `VMDK` | `RAW`
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon S3 URL (s3://..).
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The Amazon S3 bucket for the disk image.
   *
   * @public
   */
  UserBucket?: UserBucket | undefined;
}

/**
 * @public
 */
export interface ImportSnapshotRequest {
  /**
   * The client-specific data.
   *
   * @public
   */
  ClientData?: ClientData | undefined;

  /**
   * Token to enable idempotency for VM import requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The description string for the import snapshot task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the disk container.
   *
   * @public
   */
  DiskContainer?: SnapshotDiskContainer | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using `KmsKeyId`. For more information, see [Amazon EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a `KmsKeyId` is specified, the `Encrypted` flag must also be set.
   *
   * The KMS key identifier may be provided in any of the following formats:
   *
   * - Key ID
   * - Key alias
   * - ARN using key ID. The ID ARN contains the `arn:aws:kms` namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the `key` namespace, and then the key ID. For example, arn:aws:kms:*us-east-1*:*012345678910*:key/*abcd1234-a123-456a-a12b-a123b4cd56ef*.
   * - ARN using key alias. The alias ARN contains the `arn:aws:kms` namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the `alias` namespace, and then the key alias. For example, arn:aws:kms:*us-east-1*:*012345678910*:alias/*ExampleAlias*.
   *
   * Amazon Web Services parses `KmsKeyId` asynchronously, meaning that the action you call may appear to complete even though you provided an invalid identifier. This action will eventually report failure.
   *
   * The specified KMS key must exist in the Region that the snapshot is being copied to.
   *
   * Amazon EBS does not support asymmetric KMS keys.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The name of the role to use when not using the default role, 'vmimport'.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The tags to apply to the import snapshot task during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface ImportSnapshotResult {
  /**
   * A description of the import snapshot task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the import snapshot task.
   *
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * Information about the import snapshot task.
   *
   * @public
   */
  SnapshotTaskDetail?: SnapshotTaskDetail | undefined;

  /**
   * Any tags assigned to the import snapshot task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportVolumeRequest {
  /**
   * The ID of the Availability Zone for the resulting EBS volume.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The Availability Zone for the resulting EBS volume.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The disk image.
   *
   * @public
   */
  Image: DiskImageDetail | undefined;

  /**
   * A description of the volume.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The volume size.
   *
   * @public
   */
  Volume: VolumeDetail | undefined;
}

/**
 * @public
 */
export interface ImportVolumeResult {
  /**
   * Information about the conversion task.
   *
   * @public
   */
  ConversionTask?: ConversionTask | undefined;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinRequest {
  /**
   * The IDs of the AMIs to list. Omit this parameter to list all of the AMIs that are in the Recycle Bin. You can specify up to 20 IDs in a single request.
   *
   * @public
   */
  ImageIds?: string[] | undefined;

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
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about an AMI that is currently in the Recycle Bin.
 *
 * @public
 */
export interface ImageRecycleBinInfo {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The name of the AMI.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the AMI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time when the AMI entered the Recycle Bin.
   *
   * @public
   */
  RecycleBinEnterTime?: Date | undefined;

  /**
   * The date and time when the AMI is to be permanently deleted from the Recycle Bin.
   *
   * @public
   */
  RecycleBinExitTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinResult {
  /**
   * Information about the AMIs.
   *
   * @public
   */
  Images?: ImageRecycleBinInfo[] | undefined;

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
export interface ListSnapshotsInRecycleBinRequest {
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
   * The IDs of the snapshots to list. Omit this parameter to list all of the snapshots that are in the Recycle Bin.
   *
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a snapshot that is currently in the Recycle Bin.
 *
 * @public
 */
export interface SnapshotRecycleBinInfo {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The date and time when the snapshot entered the Recycle Bin.
   *
   * @public
   */
  RecycleBinEnterTime?: Date | undefined;

  /**
   * The date and time when the snapshot is to be permanently deleted from the Recycle Bin.
   *
   * @public
   */
  RecycleBinExitTime?: Date | undefined;

  /**
   * The description for the snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the volume from which the snapshot was created.
   *
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * @public
 */
export interface ListSnapshotsInRecycleBinResult {
  /**
   * Information about the snapshots.
   *
   * @public
   */
  Snapshots?: SnapshotRecycleBinInfo[] | undefined;

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
export interface ListVolumesInRecycleBinRequest {
  /**
   * The IDs of the volumes to list. Omit this parameter to list all of the volumes that are in the Recycle Bin.
   *
   * @public
   */
  VolumeIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * Valid range: 5 - 500
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
}

/**
 * Information about a volume that is currently in the Recycle Bin.
 *
 * @public
 */
export interface VolumeRecycleBinInfo {
  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The volume type.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * The state of the volume.
   *
   * @public
   */
  State?: VolumeState | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The number of I/O operations per second (IOPS) for the volume.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The throughput that the volume supports, in MiB/s.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * The ARN of the Outpost on which the volume is stored. For more information, see [Amazon EBS volumes on Outposts](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-outposts.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The Availability Zone for the volume.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone for the volume.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The ID of the source volume.
   *
   * @public
   */
  SourceVolumeId?: string | undefined;

  /**
   * The snapshot from which the volume was created, if applicable.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The service provider that manages the volume.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * The time stamp when volume creation was initiated.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time when the volume entered the Recycle Bin.
   *
   * @public
   */
  RecycleBinEnterTime?: Date | undefined;

  /**
   * The date and time when the volume is to be permanently deleted from the Recycle Bin.
   *
   * @public
   */
  RecycleBinExitTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListVolumesInRecycleBinResult {
  /**
   * Information about the volumes.
   *
   * @public
   */
  Volumes?: VolumeRecycleBinInfo[] | undefined;

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
export interface LockSnapshotRequest {
  /**
   * The ID of the snapshot to lock.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The mode in which to lock the snapshot. Specify one of the following:
   *
   * - `governance` - Locks the snapshot in governance mode. Snapshots locked in governance mode can't be deleted until one of the following conditions are met:
   *
   *   - The lock duration expires.
   *   - The snapshot is unlocked by a user with the appropriate permissions.
   *
   *   Users with the appropriate IAM permissions can unlock the snapshot, increase or decrease the lock duration, and change the lock mode to `compliance` at any time.
   *
   *   If you lock a snapshot in `governance` mode, omit **CoolOffPeriod**.
   * - `compliance` - Locks the snapshot in compliance mode. Snapshots locked in compliance mode can't be unlocked by any user. They can be deleted only after the lock duration expires. Users can't decrease the lock duration or change the lock mode to `governance`. However, users with appropriate IAM permissions can increase the lock duration at any time.
   *
   *   If you lock a snapshot in `compliance` mode, you can optionally specify **CoolOffPeriod**.
   *
   * @public
   */
  LockMode: LockMode | undefined;

  /**
   * The cooling-off period during which you can unlock the snapshot or modify the lock settings after locking the snapshot in compliance mode, in hours. After the cooling-off period expires, you can't unlock or delete the snapshot, decrease the lock duration, or change the lock mode. You can increase the lock duration after the cooling-off period expires.
   *
   * The cooling-off period is optional when locking a snapshot in compliance mode. If you are locking the snapshot in governance mode, omit this parameter.
   *
   * To lock the snapshot in compliance mode immediately without a cooling-off period, omit this parameter.
   *
   * If you are extending the lock duration for a snapshot that is locked in compliance mode after the cooling-off period has expired, omit this parameter. If you specify a cooling-period in a such a request, the request fails.
   *
   * Allowed values: Min 1, max 72.
   *
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * The period of time for which to lock the snapshot, in days. The snapshot lock will automatically expire after this period lapses.
   *
   * You must specify either this parameter or **ExpirationDate**, but not both.
   *
   * Allowed values: Min: 1, max 36500
   *
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * The date and time at which the snapshot lock is to automatically expire, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * You must specify either this parameter or **LockDuration**, but not both.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;
}

/**
 * @public
 */
export interface LockSnapshotResult {
  /**
   * The ID of the snapshot
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The state of the snapshot lock. Valid states include:
   *
   * - `compliance-cooloff` - The snapshot has been locked in compliance mode but it is still within the cooling-off period. The snapshot can't be deleted, but it can be unlocked and the lock settings can be modified by users with appropriate permissions.
   * - `governance` - The snapshot is locked in governance mode. The snapshot can't be deleted, but it can be unlocked and the lock settings can be modified by users with appropriate permissions.
   * - `compliance` - The snapshot is locked in compliance mode and the cooling-off period has expired. The snapshot can't be unlocked or deleted. The lock duration can only be increased by users with appropriate permissions.
   * - `expired` - The snapshot was locked in compliance or governance mode but the lock duration has expired. The snapshot is not locked and can be deleted.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The period of time for which the snapshot is locked, in days.
   *
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * The compliance mode cooling-off period, in hours.
   *
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * The date and time at which the compliance mode cooling-off period expires, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  CoolOffPeriodExpiresOn?: Date | undefined;

  /**
   * The date and time at which the snapshot was locked, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  LockCreatedOn?: Date | undefined;

  /**
   * The date and time at which the lock will expire, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  LockExpiresOn?: Date | undefined;

  /**
   * The date and time at which the lock duration started, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  LockDurationStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface ModifyAccountVpcEncryptionControlRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The encryption mode for the account encryption control configuration.
   *
   * @public
   */
  Mode?: AccountVpcEncryptionControlMode | undefined;

  /**
   * Specifies whether to exclude internet gateway resource from account-level encryption enforcement.
   *
   * @public
   */
  InternetGateway?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude egress-only internet gateway resource from account-level encryption enforcement.
   *
   * @public
   */
  EgressOnlyInternetGateway?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude NAT gateway resource from account-level encryption enforcement.
   *
   * @public
   */
  NatGateway?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude virtual private gateway resource from account-level encryption enforcement.
   *
   * @public
   */
  VirtualPrivateGateway?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude VPC peering connection resource from account-level encryption enforcement.
   *
   * @public
   */
  VpcPeering?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude Lambda service from account-level encryption enforcement.
   *
   * @public
   */
  Lambda?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude VPC Lattice service from account-level encryption enforcement.
   *
   * @public
   */
  VpcLattice?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude Elastic File System service from account-level encryption enforcement.
   *
   * @public
   */
  ElasticFileSystem?: VpcEncryptionControlExclusionStateInput | undefined;
}

/**
 * @public
 */
export interface ModifyAccountVpcEncryptionControlResult {
  /**
   * Information about the account-level VPC Encryption Control configuration.
   *
   * @public
   */
  AccountVpcEncryptionControl?: AccountVpcEncryptionControl | undefined;
}

/**
 * @public
 */
export interface ModifyAddressAttributeRequest {
  /**
   * [EC2-VPC] The allocation ID.
   *
   * @public
   */
  AllocationId: string | undefined;

  /**
   * The domain name to modify for the IP address.
   *
   * @public
   */
  DomainName?: string | undefined;

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
export interface ModifyAddressAttributeResult {
  /**
   * Information about the Elastic IP address.
   *
   * @public
   */
  Address?: AddressAttribute | undefined;
}

/**
 * @public
 */
export interface ModifyApplicationStatusCheckRequest {
  /**
   * The ID of the application status check to modify.
   *
   * @public
   */
  ApplicationStatusCheckId: string | undefined;

  /**
   * The aggregation setting for the application status check. When set to `included`, the result of this check contributes to the instance-level application status reported by `DescribeApplicationStatus`. When set to `excluded`, the check runs independently and does not affect the instance-level status. Valid values: `included` | `excluded`.
   *
   * @public
   */
  Aggregation?: AggregationStatusEnum | undefined;

  /**
   * The health check paths to use for the application status check.
   *
   * @public
   */
  HealthCheckPaths?: HealthCheckPathRequestObject[] | undefined;

  /**
   * The protocol to use for the health check. Valid values: `http` | `https`.
   *
   * @public
   */
  Protocol?: NetworkProtocolEnum | undefined;

  /**
   * The port to use for the health check. Valid values: 1 to 65535.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The URL path to use for the health check HTTP request (for example, `/health` or `/status`).
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The index of the network device to use for the health check. The value must be greater than or equal to 0.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IP version to use for the health check. Valid values: `ipv4` and `ipv6`.
   *
   * @public
   */
  IpVersion?: IpVersionEnum | undefined;

  /**
   * The IP scope to use for the health check. Valid value: `private`.
   *
   * @public
   */
  IpScope?: IpScopeEnum | undefined;

  /**
   * The interval, in seconds, between health checks. Valid value: 60.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The amount of time, in seconds, to wait for a health check response before considering it failed. Valid values: 1 to 30. The value must be less than `Interval`.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The number of consecutive failed health checks before the application status is considered impaired. The value must be greater than 0.
   *
   * @public
   */
  FailureThreshold?: number | undefined;

  /**
   * The number of consecutive successful health checks before the application status is considered healthy. The value must be greater than 0.
   *
   * @public
   */
  SuccessThreshold?: number | undefined;

  /**
   * The HTTP status codes that indicate a successful health check response. Specify a comma-separated list of individual status codes or ranges, for example, `200,202,300-399`. For a range, the first value must be less than the second value. Maximum length: 64 characters.
   *
   * @public
   */
  StatusCodeMatcher?: string | undefined;

  /**
   * The number of seconds to wait before starting health checks after an instance is launched. Valid values: 1 to 600.
   *
   * @public
   */
  InitializationGracePeriodSeconds?: number | undefined;

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
export interface ModifyApplicationStatusCheckResult {
  /**
   * Information about the modified application status check.
   *
   * @public
   */
  ApplicationStatusCheck?: ApplicationStatusCheckResponseObject | undefined;
}

/**
 * @public
 */
export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * The name of the Availability Zone group, Local Zone group, or Wavelength Zone group.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * Indicates whether to opt in to the zone group. The only valid value is `opted-in`. You must contact Amazon Web Services Support to opt out of a Local Zone or Wavelength Zone group.
   *
   * @public
   */
  OptInStatus: ModifyAvailabilityZoneOptInStatus | undefined;

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
export interface ModifyAvailabilityZoneGroupResult {
  /**
   * Is `true` if the request succeeds, and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationRequest {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The number of instances for which to reserve capacity. The number of instances can't be increased or decreased by more than `1000` in a single request.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to `expired` when it reaches its end date and time.
   *
   * The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.
   *
   * You must provide an `EndDate` value if `EndDateType` is `limited`. Omit `EndDate` if `EndDateType` is `unlimited`.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:
   *
   * - `unlimited` - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an `EndDate` value if `EndDateType` is `unlimited`.
   * - `limited` - The Capacity Reservation expires automatically at a specified date and time. You must provide an `EndDate` value if `EndDateType` is `limited`.
   *
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * Reserved. Capacity Reservations you have created are accepted by default.
   *
   * @public
   */
  Accept?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * The matching criteria (instance eligibility) that you want to use in the modified Capacity Reservation. If you change the instance eligibility of an existing Capacity Reservation from `targeted` to `open`, any running instances that match the attributes of the Capacity Reservation, have the `CapacityReservationPreference` set to `open`, and are not yet running in the Capacity Reservation, will automatically use the modified Capacity Reservation.
   *
   * To modify the instance eligibility, the Capacity Reservation must be completely idle (zero usage).
   *
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;

  /**
   * Indicates that you accept the modification terms of the quote identified by `QuoteId`. To apply a quoted modification, set this parameter to `true`.
   *
   * @public
   */
  AcceptModificationTerms?: boolean | undefined;

  /**
   * The new start date for the Capacity Reservation, in the ISO8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`). Applies to future-dated Capacity Reservations only. Requires a quote from `CreateCapacityReservationDateChangeQuote`; pass the quote ID in `QuoteId` with `AcceptModificationTerms` set to `true`.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The ID of the quote that describes the modification you want to apply. Generate a quote by using `CreateCapacityReservationDateChangeQuote`. The quote must be in the `active` state, and each quote can be used only once.
   *
   * @public
   */
  QuoteId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * The status of the requested modification. For a description of each possible value, see the `adjustmentStatus` field of the `CapacityReservation` data type.
   *
   * @public
   */
  AdjustmentStatus?: CapacityReservationAdjustmentStatus | undefined;

  /**
   * The configuration that the Capacity Reservation will have after the adjustment is applied.
   *
   * @public
   */
  AdjustmentDetails?: CapacityReservationAdjustmentDetails | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetRequest {
  /**
   * The ID of the Capacity Reservation Fleet to modify.
   *
   * @public
   */
  CapacityReservationFleetId: string | undefined;

  /**
   * The total number of capacity units to be reserved by the Capacity Reservation Fleet. This value, together with the instance type weights that you assign to each instance type used by the Fleet determine the number of instances for which the Fleet reserves capacity. Both values are based on units that make sense for your workload. For more information, see [Total target capacity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * The date and time at which the Capacity Reservation Fleet expires. When the Capacity Reservation Fleet expires, its state changes to `expired` and all of the Capacity Reservations in the Fleet expire.
   *
   * The Capacity Reservation Fleet expires within an hour after the specified time. For example, if you specify `5/31/2019`, `13:30:55`, the Capacity Reservation Fleet is guaranteed to expire between `13:30:55` and `14:30:55` on `5/31/2019`.
   *
   * You can't specify **EndDate** and **RemoveEndDate** in the same request.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Indicates whether to remove the end date from the Capacity Reservation Fleet. If you remove the end date, the Capacity Reservation Fleet does not expire and it remains active until you explicitly cancel it using the **CancelCapacityReservationFleet** action.
   *
   * You can't specify **RemoveEndDate** and **EndDate** in the same request.
   *
   * @public
   */
  RemoveEndDate?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Information about the DNS server to be used.
 *
 * @public
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values overwrite the existing values.
   *
   * @public
   */
  CustomDnsServers?: string[] | undefined;

  /**
   * Indicates whether DNS servers should be used. Specify `False` to delete the existing DNS servers.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointRequest {
  /**
   * The ID of the Client VPN endpoint to modify.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The ARN of the server certificate to be used. The server certificate must be provisioned in Certificate Manager (ACM).
   *
   * @public
   */
  ServerCertificateArn?: string | undefined;

  /**
   * Information about the client connection logging options.
   *
   * If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged:
   *
   * - Client connection requests
   * - Client connection results (successful and unsuccessful)
   * - Reasons for unsuccessful client connection requests
   * - Client connection termination time
   *
   * @public
   */
  ConnectionLogOptions?: ConnectionLogOptions | undefined;

  /**
   * Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have up to two DNS servers.
   *
   * @public
   */
  DnsServers?: DnsServersOptionsModifyStructure | undefined;

  /**
   * The port number to assign to the Client VPN endpoint for TCP and UDP traffic.
   *
   * Valid Values: `443` | `1194`
   *
   * Default Value: `443`
   *
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * A brief description of the Client VPN endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the VPN is split-tunnel.
   *
   * For information about split-tunnel VPN endpoints, see [Split-tunnel Client VPN endpoint](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html) in the *Client VPN Administrator Guide*.
   *
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of one or more security groups to apply to the target network.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The ID of the VPC to associate with the Client VPN endpoint.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specify whether to enable the self-service portal for the Client VPN endpoint.
   *
   * @public
   */
  SelfServicePortal?: SelfServicePortal | undefined;

  /**
   * The options for managing connection authorization for new client connections.
   *
   * @public
   */
  ClientConnectOptions?: ClientConnectOptions | undefined;

  /**
   * The maximum VPN session duration time in hours.
   *
   * Valid values: `8 | 10 | 12 | 24`
   *
   * Default value: `24`
   *
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
   *
   * @public
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions | undefined;

  /**
   * Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
   *
   * Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
   *
   * @public
   */
  ClientRouteEnforcementOptions?: ClientRouteEnforcementOptions | undefined;

  /**
   * Indicates whether the client VPN session is disconnected after the maximum timeout specified in `sessionTimeoutHours` is reached. If `true`, users are prompted to reconnect client VPN. If `false`, client VPN attempts to reconnect automatically. The default value is `true`.
   *
   * @public
   */
  DisconnectOnSessionTimeout?: boolean | undefined;

  /**
   * The Transit Gateway configuration for the Client VPN endpoint. This option is currently not supported.
   *
   * @public
   */
  TransitGatewayConfiguration?: TransitGatewayConfigurationInputStructure | undefined;

  /**
   * The device posture options for the Client VPN endpoint. Specifying this parameter replaces the entire device posture configuration for the endpoint. To disable device posture and remove all device trust providers, specify `false` for `Enabled`.
   *
   * @public
   */
  DevicePostureOptions?: DevicePostureOptions | undefined;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointResult {
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
export interface ModifyClientVpnEndpointAuthorizationPolicyRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The authorization policy document, written in the Cedar policy language. This parameter is required when you create the authorization policy for a Client VPN endpoint that does not already have one.
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
   * The default value is `disabled`.
   *
   * @public
   */
  ShadowMode?: ClientVpnAuthorizationPolicyShadowMode | undefined;

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
export interface ModifyClientVpnEndpointAuthorizationPolicyResult {
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
export interface ModifyDefaultCreditSpecificationRequest {
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

  /**
   * The credit option for CPU usage of the instance family.
   *
   * Valid Values: `standard` | `unlimited`
   *
   * @public
   */
  CpuCredits: string | undefined;
}

/**
 * @public
 */
export interface ModifyDefaultCreditSpecificationResult {
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
export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * The identifier of the KMS key to use for Amazon EBS encryption. If this parameter is not specified, your KMS key for Amazon EBS is used. If `KmsKeyId` is specified, the encrypted state must be `true`.
   *
   * You can specify the KMS key using any of the following:
   *
   * - Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Key alias. For example, alias/ExampleAlias.
   * - Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
   *
   * Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
   *
   * Amazon EBS does not support asymmetric KMS keys.
   *
   * @public
   */
  KmsKeyId: string | undefined;

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
export interface ModifyEbsDefaultKmsKeyIdResult {
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
export interface ModifyFleetRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.
   *
   * Supported only for fleets of type `maintain`.
   *
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * The launch template and overrides.
   *
   * @public
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The size of the EC2 Fleet.
   *
   * @public
   */
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFleetResult {
  /**
   * If the request succeeds, the response returns `true`. If the request fails, no response is returned, and instead an error message is returned.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Describes a load permission.
 *
 * @public
 */
export interface LoadPermissionRequest {
  /**
   * The name of the group.
   *
   * @public
   */
  Group?: PermissionGroup | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * Describes modifications to the load permissions of an Amazon FPGA image (AFI).
 *
 * @public
 */
export interface LoadPermissionModifications {
  /**
   * The load permissions to add.
   *
   * @public
   */
  Add?: LoadPermissionRequest[] | undefined;

  /**
   * The load permissions to remove.
   *
   * @public
   */
  Remove?: LoadPermissionRequest[] | undefined;
}

/**
 * @public
 */
export interface ModifyFpgaImageAttributeRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the AFI.
   *
   * @public
   */
  FpgaImageId: string | undefined;

  /**
   * The name of the attribute.
   *
   * @public
   */
  Attribute?: FpgaImageAttributeName | undefined;

  /**
   * The operation type.
   *
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * The Amazon Web Services account IDs. This parameter is valid only when modifying the `loadPermission` attribute.
   *
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * The user groups. This parameter is valid only when modifying the `loadPermission` attribute.
   *
   * @public
   */
  UserGroups?: string[] | undefined;

  /**
   * The product codes. After you add a product code to an AFI, it can't be removed. This parameter is valid only when modifying the `productCodes` attribute.
   *
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * The load permission for the AFI.
   *
   * @public
   */
  LoadPermission?: LoadPermissionModifications | undefined;

  /**
   * A description for the AFI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A name for the AFI.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFpgaImageAttributeResult {
  /**
   * Information about the attribute.
   *
   * @public
   */
  FpgaImageAttribute?: FpgaImageAttribute | undefined;
}

/**
 * @public
 */
export interface ModifyHostsRequest {
  /**
   * Indicates whether to enable or disable host recovery for the Dedicated Host. For more information, see [Host recovery](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * Specifies the instance type to be supported by the Dedicated Host. Specify this parameter to modify a Dedicated Host to support only a specific instance type.
   *
   * If you want to modify a Dedicated Host to support multiple instance types in its current instance family, omit this parameter and specify **InstanceFamily** instead. You cannot specify **InstanceType** and **InstanceFamily** in the same request.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Specifies the instance family to be supported by the Dedicated Host. Specify this parameter to modify a Dedicated Host to support multiple instance types within its current instance family.
   *
   * If you want to modify a Dedicated Host to support a specific instance type only, omit this parameter and specify **InstanceType** instead. You cannot specify **InstanceFamily** and **InstanceType** in the same request.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * Indicates whether to enable or disable host maintenance for the Dedicated Host. For more information, see [Host maintenance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * The IDs of the Dedicated Hosts to modify.
   *
   * @public
   */
  HostIds: string[] | undefined;

  /**
   * Specify whether to enable or disable auto-placement.
   *
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;
}

/**
 * @public
 */
export interface ModifyHostsResult {
  /**
   * The IDs of the Dedicated Hosts that were successfully modified.
   *
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * The IDs of the Dedicated Hosts that could not be modified. Check whether the setting you requested can be used.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface ModifyIdentityIdFormatRequest {
  /**
   * The type of resource: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `route-table` | `route-table-association` | `security-group` | `subnet` | `subnet-cidr-block-association` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
   *
   * Alternatively, use the `all-current` option to include all resource types that are currently within their opt-in period for longer IDs.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * Indicates whether the resource should use longer IDs (17-character IDs)
   *
   * @public
   */
  UseLongIds: boolean | undefined;

  /**
   * The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify `all` to modify the ID format for all IAM users, IAM roles, and the root user of the account.
   *
   * @public
   */
  PrincipalArn: string | undefined;
}

/**
 * @public
 */
export interface ModifyIdFormatRequest {
  /**
   * The type of resource: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `route-table` | `route-table-association` | `security-group` | `subnet` | `subnet-cidr-block-association` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
   *
   * Alternatively, use the `all-current` option to include all resource types that are currently within their opt-in period for longer IDs.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * Indicate whether the resource should use longer IDs (17-character IDs).
   *
   * @public
   */
  UseLongIds: boolean | undefined;
}

/**
 * Describes a launch permission modification.
 *
 * @public
 */
export interface LaunchPermissionModifications {
  /**
   * The Amazon Web Services account ID, organization ARN, or OU ARN to add to the list of launch permissions for the AMI.
   *
   * @public
   */
  Add?: LaunchPermission[] | undefined;

  /**
   * The Amazon Web Services account ID, organization ARN, or OU ARN to remove from the list of launch permissions for the AMI.
   *
   * @public
   */
  Remove?: LaunchPermission[] | undefined;
}

/**
 * Contains the parameters for ModifyImageAttribute.
 *
 * @public
 */
export interface ModifyImageAttributeRequest {
  /**
   * The name of the attribute to modify.
   *
   * Valid values: `description` | `imdsSupport` | `launchPermission`
   *
   * @public
   */
  Attribute?: string | undefined;

  /**
   * A new description for the AMI.
   *
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * A new launch permission for the AMI.
   *
   * @public
   */
  LaunchPermission?: LaunchPermissionModifications | undefined;

  /**
   * The operation type. This parameter can be used only when the `Attribute` parameter is `launchPermission`.
   *
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * Not supported.
   *
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * The user groups. This parameter can be used only when the `Attribute` parameter is `launchPermission`.
   *
   * @public
   */
  UserGroups?: string[] | undefined;

  /**
   * The Amazon Web Services account IDs. This parameter can be used only when the `Attribute` parameter is `launchPermission`.
   *
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * The value of the attribute being modified. This parameter can be used only when the `Attribute` parameter is `description` or `imdsSupport`.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an organization. This parameter can be used only when the `Attribute` parameter is `launchPermission`.
   *
   * @public
   */
  OrganizationArns?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an organizational unit (OU). This parameter can be used only when the `Attribute` parameter is `launchPermission`.
   *
   * @public
   */
  OrganizationalUnitArns?: string[] | undefined;

  /**
   * Set to `v2.0` to indicate that IMDSv2 is specified in the AMI. Instances launched from this AMI will have `HttpTokens` automatically set to `required` so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, `HttpPutResponseHopLimit` is set to `2`. For more information, see [Configure the AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration) in the *Amazon EC2 User Guide*.
   *
   * > **Important:** Do not use this parameter unless your AMI software supports IMDSv2. After you set the value to `v2.0`, you can't undo it. The only way to “reset” your AMI is to create a new AMI from the underlying snapshot.
   *
   * @public
   */
  ImdsSupport?: AttributeValue | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes information used to set up an EBS volume specified in a block device mapping.
 *
 * @public
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * The ID of the EBS volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * Indicates whether the volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;
}

/**
 * Describes a block device mapping entry.
 *
 * @public
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * The device name. For available device names, see [Device names for volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html).
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * @public
   */
  Ebs?: EbsInstanceBlockDeviceSpecification | undefined;

  /**
   * The virtual device name.
   *
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * Suppresses the specified device included in the block device mapping.
   *
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see [What is Amazon Web Services Nitro Enclaves?](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the *Amazon Web Services Nitro Enclaves User Guide*.
 *
 * @public
 */
export interface EnclaveOptionsRequest {
  /**
   * To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to `true`.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Describes a value for a resource attribute that is a Base64-encoded binary data object.
 *
 * @public
 */
export interface SecureBlobAttributeValue {
  /**
   * The attribute value.
   *
   * @public
   */
  Value?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceAttributeRequest {
  /**
   * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is `true`, source/destination checks are enabled; otherwise, they are disabled. The default value is `true`. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
   *
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * Enables or disables the instance for Amazon Web Services Nitro Enclaves. For more information, see the [Amazon Web Services Nitro Enclaves User Guide](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html).
   *
   * @public
   */
  EnclaveOptions?: EnclaveOptionsRequest | undefined;

  /**
   * Indicates whether an instance is enabled for stop protection. For more information, see [Enable stop protection for your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html).
   *
   * @public
   */
  DisableApiStop?: AttributeBooleanValue | undefined;

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
   * The name of the attribute to modify.
   *
   * > **Note:** When changing the instance type: If the original instance type is configured for configurable bandwidth, and the desired instance type doesn't support configurable bandwidth, first set the existing bandwidth configuration to `default` using the ModifyInstanceNetworkPerformanceOptions operation.
   *
   * > **Important:** You can modify the following attributes only: `disableApiTermination` | `instanceType` | `kernel` | `ramdisk` | `instanceInitiatedShutdownBehavior` | `blockDeviceMapping` | `userData` | `sourceDestCheck` | `groupSet` | `ebsOptimized` | `sriovNetSupport` | `enaSupport` | `nvmeSupport` | `disableApiStop` | `enclaveOptions`
   *
   * @public
   */
  Attribute?: InstanceAttributeName | undefined;

  /**
   * A new value for the attribute. Use only with the `kernel`, `ramdisk`, `userData`, `disableApiTermination`, or `instanceInitiatedShutdownBehavior` attribute.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Modifies the `DeleteOnTermination` attribute for volumes that are currently attached. The volume must be owned by the caller. If no value is specified for `DeleteOnTermination`, the default is `true` and the volume is deleted when the instance is terminated. You can't modify the `DeleteOnTermination` attribute for volumes that are attached to Amazon Web Services-managed resources.
   *
   * To add instance store volumes to an Amazon EBS-backed instance, you must add them when you launch the instance. For more information, see [Update the block device mapping when launching an instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMappingSpecification[] | undefined;

  /**
   * Enable or disable termination protection for the instance. If the value is `true`, you can't terminate the instance using the Amazon EC2 console, command line interface, or API. You can't enable termination protection for Spot Instances.
   *
   * @public
   */
  DisableApiTermination?: AttributeBooleanValue | undefined;

  /**
   * Changes the instance type to the specified value. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*. If the instance type is not valid, the error returned is `InvalidInstanceAttributeValue`.
   *
   * @public
   */
  InstanceType?: AttributeValue | undefined;

  /**
   * Changes the instance's kernel to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [PV-GRUB](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html).
   *
   * @public
   */
  Kernel?: AttributeValue | undefined;

  /**
   * Changes the instance's RAM disk to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [PV-GRUB](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html).
   *
   * @public
   */
  Ramdisk?: AttributeValue | undefined;

  /**
   * Changes the instance's user data to the specified value. User data must be base64-encoded. Depending on the tool or SDK that you're using, the base64-encoding might be performed for you. For more information, see [Work with instance user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-add-user-data.html).
   *
   * @public
   */
  UserData?: SecureBlobAttributeValue | undefined;

  /**
   * Specifies whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   *
   * @public
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue | undefined;

  /**
   * Replaces the security groups of the instance with the specified security groups. You must specify the ID of at least one security group, even if it's just the default security group for the VPC.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * Specifies whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.
   *
   * @public
   */
  EbsOptimized?: AttributeBooleanValue | undefined;

  /**
   * Set to `simple` to enable enhanced networking with the Intel 82599 Virtual Function interface for the instance.
   *
   * There is no way to disable enhanced networking with the Intel 82599 Virtual Function interface at this time.
   *
   * This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.
   *
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * Set to `true` to enable enhanced networking with ENA for the instance.
   *
   * This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.
   *
   * @public
   */
  EnaSupport?: AttributeBooleanValue | undefined;
}

/**
 * Describes an instance's Capacity Reservation targeting option.
 *
 * Use the `CapacityReservationPreference` parameter to configure the instance to run as an On-Demand Instance, to run in any `open` Capacity Reservation that has matching attributes, or to run only in a Capacity Reservation or Capacity Reservation group. Use the `CapacityReservationTarget` parameter to explicitly target a specific Capacity Reservation or a Capacity Reservation group.
 *
 * You can only specify `CapacityReservationPreference` and `CapacityReservationTarget` if the `CapacityReservationPreference` is `capacity-reservations-only`.
 *
 * @public
 */
export interface CapacityReservationSpecification {
  /**
   * Indicates the instance's Capacity Reservation preferences. Possible preferences include:
   *
   * - `capacity-reservations-only` - The instance will only run in a Capacity Reservation or Capacity Reservation group. If capacity isn't available, the instance will fail to launch.
   * - `open` - The instance can run in any `open` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, and tenancy). If capacity isn't available, the instance runs as an On-Demand Instance.
   * - `none` - The instance doesn't run in a Capacity Reservation even if one is available. The instance runs as an On-Demand Instance.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * Information about the target Capacity Reservation or Capacity Reservation group.
   *
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * The ID of the instance to be modified.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Information about the Capacity Reservation targeting option.
   *
   * @public
   */
  CapacityReservationSpecification: CapacityReservationSpecification | undefined;

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
export interface ModifyInstanceCapacityReservationAttributesResult {
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
export interface ModifyInstanceConnectEndpointRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the EC2 Instance Connect Endpoint to modify.
   *
   * @public
   */
  InstanceConnectEndpointId: string | undefined;

  /**
   * The new IP address type for the EC2 Instance Connect Endpoint.
   *
   * > **Note:** `PreserveClientIp` is only supported on IPv4 EC2 Instance Connect Endpoints. To use `PreserveClientIp`, the value for `IpAddressType` must be `ipv4`.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Changes the security groups for the EC2 Instance Connect Endpoint. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether the client IP address is preserved as the source when you connect to a resource. The following are the possible values.
   *
   * - `true` - Use the IP address of the client. Your instance must have an IPv4 address.
   * - `false` - Use the IP address of the network interface.
   *
   * @public
   */
  PreserveClientIp?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceConnectEndpointResult {
  /**
   * Is `true` if the request succeeds and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCpuOptionsRequest {
  /**
   * The ID of the instance to update.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The number of CPU cores to activate for the specified instance.
   *
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * The number of threads to run for each CPU core.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Indicates whether to enable or disable nested virtualization for the instance. When nested virtualization is enabled, Virtual Secure Mode (VSM) is automatically disabled for the instance.
   *
   * @public
   */
  NestedVirtualization?: NestedVirtualizationSpecification | undefined;

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
export interface ModifyInstanceCpuOptionsResult {
  /**
   * The ID of the instance that was updated.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The number of CPU cores that are running for the specified instance after the update.
   *
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * The number of threads that are running per CPU core for the specified instance after the update.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Indicates whether nested virtualization has been enabled or disabled.
   *
   * @public
   */
  NestedVirtualization?: NestedVirtualizationSpecification | undefined;
}

/**
 * Describes the credit option for CPU usage of a burstable performance instance.
 *
 * @public
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The credit option for CPU usage of the instance.
   *
   * Valid values: `standard` | `unlimited`
   *
   * T3 instances with `host` tenancy do not support the `unlimited` CPU credit option.
   *
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Information about the credit option for CPU usage.
   *
   * @public
   */
  InstanceCreditSpecifications: InstanceCreditSpecificationRequest[] | undefined;
}

/**
 * Describes the burstable performance instance whose credit option for CPU usage was successfully modified.
 *
 * @public
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Information about the error for the burstable performance instance whose credit option for CPU usage was not modified.
 *
 * @public
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode | undefined;

  /**
   * The applicable error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes the burstable performance instance whose credit option for CPU usage was not modified.
 *
 * @public
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The applicable error for the burstable performance instance whose credit option for CPU usage was not modified.
   *
   * @public
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationResult {
  /**
   * Information about the instances whose credit option for CPU usage was successfully modified.
   *
   * @public
   */
  SuccessfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[] | undefined;

  /**
   * Information about the instances whose credit option for CPU usage was not modified.
   *
   * @public
   */
  UnsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[] | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the instance with the scheduled event.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The ID of the event whose date and time you are modifying.
   *
   * @public
   */
  InstanceEventId: string | undefined;

  /**
   * The new date and time when the event will take place.
   *
   * @public
   */
  NotBefore: Date | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeResult {
  /**
   * Information about the event.
   *
   * @public
   */
  Event?: InstanceStatusEvent | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The name of the event window.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the event window.
   *
   * @public
   */
  InstanceEventWindowId: string | undefined;

  /**
   * The time ranges of the event window.
   *
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[] | undefined;

  /**
   * The cron expression of the event window, for example, `* 0-4,20-23 * * 1,5`.
   *
   * Constraints:
   *
   * - Only hour and day of the week values are supported.
   * - For day of the week values, you can specify either integers `0` through `6`, or alternative single values `SUN` through `SAT`.
   * - The minute, month, and year must be specified by `*`.
   * - The hour value must be one or a multiple range, for example, `0-4` or `0-4,20-23`.
   * - Each hour range must be >= 2 hours, for example, `0-2` or `20-23`.
   * - The event window must be >= 4 hours. The combined total time ranges in the event window must be >= 4 hours.
   *
   * For more information about cron expressions, see [cron](https://en.wikipedia.org/wiki/Cron) on the *Wikipedia website*.
   *
   * @public
   */
  CronExpression?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowResult {
  /**
   * Information about the event window.
   *
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMaintenanceOptionsRequest {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Disables the automatic recovery behavior of your instance or sets it to default.
   *
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;

  /**
   * Specifies whether to attempt reboot migration during a user-initiated reboot of an instance that has a scheduled `system-reboot` event:
   *
   * - `default` - Amazon EC2 attempts to migrate the instance to new hardware (reboot migration). If successful, the `system-reboot` event is cleared. If unsuccessful, an in-place reboot occurs and the event remains scheduled.
   * - `disabled` - Amazon EC2 keeps the instance on the same hardware (in-place reboot). The `system-reboot` event remains scheduled.
   *
   * This setting only applies to supported instances that have a scheduled reboot event. For more information, see [Enable or disable reboot migration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  RebootMigration?: InstanceRebootMigrationState | undefined;

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
export interface ModifyInstanceMaintenanceOptionsResult {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Provides information on the current automatic recovery behavior of your instance.
   *
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;

  /**
   * Specifies whether to attempt reboot migration during a user-initiated reboot of an instance that has a scheduled `system-reboot` event:
   *
   * - `default` - Amazon EC2 attempts to migrate the instance to new hardware (reboot migration). If successful, the `system-reboot` event is cleared. If unsuccessful, an in-place reboot occurs and the event remains scheduled.
   * - `disabled` - Amazon EC2 keeps the instance on the same hardware (in-place reboot). The `system-reboot` event remains scheduled.
   *
   * This setting only applies to supported instances that have a scheduled reboot event. For more information, see [Enable or disable reboot migration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  RebootMigration?: InstanceRebootMigrationState | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataDefaultsRequest {
  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` – IMDSv2 is optional, which means that you can use either IMDSv2 or IMDSv1.
   * - `required` – IMDSv2 is required, which means that IMDSv1 is disabled, and you must use IMDSv2.
   *
   * @public
   */
  HttpTokens?: MetadataDefaultHttpTokensState | undefined;

  /**
   * The maximum number of hops that the metadata token can travel. To indicate no preference, specify `-1`.
   *
   * Possible values: Integers from `1` to `64`, and `-1` to indicate no preference
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Enables or disables the IMDS endpoint on an instance. When disabled, the instance metadata can't be accessed.
   *
   * @public
   */
  HttpEndpoint?: DefaultInstanceMetadataEndpointState | undefined;

  /**
   * Enables or disables access to an instance's tags from the instance metadata. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceMetadataTags?: DefaultInstanceMetadataTagsState | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies whether to enforce the requirement of IMDSv2 on an instance at the time of launch. When enforcement is enabled, the instance can't launch unless IMDSv2 (`HttpTokens`) is set to `required`. For more information, see [Enforce IMDSv2 at the account level](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#enforce-imdsv2-at-the-account-level) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HttpTokensEnforced?: DefaultHttpTokensEnforcedState | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataDefaultsResult {
  /**
   * If the request succeeds, the response returns `true`. If the request fails, no response is returned, and instead an error message is returned.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials.
   * - `required` - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.
   *
   * Default:
   *
   * - If the value of `ImdsSupport` for the Amazon Machine Image (AMI) for your instance is `v2.0` and the account level default is set to `no-preference`, the default is `required`.
   * - If the value of `ImdsSupport` for the Amazon Machine Image (AMI) for your instance is `v2.0`, but the account level default is set to `V1 or V2`, the default is `optional`.
   *
   * The default value can also be affected by other combinations of parameters. For more information, see [Order of precedence for instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html#instance-metadata-options-order-of-precedence) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. If no parameter is specified, the existing state is maintained.
   *
   * Possible values: Integers from 1 to 64
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Enables or disables the HTTP metadata endpoint on your instances. If this parameter is not specified, the existing state is maintained.
   *
   * If you specify a value of `disabled`, you cannot access your instance metadata.
   *
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service. Applies only if you enabled the HTTP metadata endpoint.
   *
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * Set to `enabled` to allow access to instance tags from the instance metadata. Set to `disabled` to turn off access to instance tags from the instance metadata. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html).
   *
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsResult {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The metadata options for the instance.
   *
   * @public
   */
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceNetworkPerformanceRequest {
  /**
   * The ID of the instance to update.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:
   *
   * - **default**
   *
   *   This option uses the standard bandwidth configuration for your instance type.
   *
   * - **vpc-1**
   *
   *   This option boosts your networking baseline bandwidth and reduces your EBS baseline bandwidth.
   *
   * - **ebs-1**
   *
   *   This option boosts your EBS baseline bandwidth and reduces your networking baseline bandwidth.
   *
   * @public
   */
  BandwidthWeighting: InstanceBandwidthWeighting | undefined;

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
export interface ModifyInstanceNetworkPerformanceResult {
  /**
   * The instance ID that was updated.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Contains the updated configuration for bandwidth weighting on the specified instance.
   *
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * @public
 */
export interface ModifyInstancePlacementRequest {
  /**
   * The name of the placement group in which to place the instance. For spread placement groups, the instance must have a tenancy of `default`. For cluster and partition placement groups, the instance must have a tenancy of `default` or `dedicated`.
   *
   * To remove an instance from a placement group, specify an empty string ("").
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The number of the partition in which to place the instance. Valid only if the placement group strategy is set to `partition`.
   *
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * The ARN of the host resource group in which to place the instance. The instance must have a tenancy of `host` to specify this parameter.
   *
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * The Group Id of a placement group. You must specify the Placement Group **Group Id** to launch an instance in a shared placement group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The ID of the instance that you are modifying.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The tenancy for the instance.
   *
   * > **Note:** For T3 instances, you must launch the instance on a Dedicated Host to use a tenancy of `host`. You can't change the tenancy from `host` to `dedicated` or `default`. Attempting to make one of these unsupported tenancy changes results in an `InvalidRequest` error code.
   *
   * @public
   */
  Tenancy?: HostTenancy | undefined;

  /**
   * The affinity setting for the instance. For more information, see [Host affinity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-affinity) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Affinity?: Affinity | undefined;

  /**
   * The ID of the Dedicated Host with which to associate the instance.
   *
   * @public
   */
  HostId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstancePlacementResult {
  /**
   * Is `true` if the request succeeds, and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Remove an operating Region from an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
 *
 * For more information about operating Regions, see [Create an IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html) in the *Amazon VPC IPAM User Guide*
 *
 * @public
 */
export interface RemoveIpamOperatingRegion {
  /**
   * The name of the operating Region you want to remove.
   *
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM you want to modify.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * The description of the IPAM you want to modify.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Choose the operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
   *
   * For more information about operating Regions, see [Create an IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  AddOperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * The operating Regions to remove.
   *
   * @public
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[] | undefined;

  /**
   * IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see [Amazon VPC pricing > IPAM tab](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.
   *
   * @public
   */
  EnablePrivateGua?: boolean | undefined;

  /**
   * A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see [Enable cost distribution](https://docs.aws.amazon.com/vpc/latest/ipam/ipam-enable-cost-distro.html) in the *Amazon VPC IPAM User Guide*.
   *
   * Possible values:
   *
   * - `ipam-owner` (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM.
   * - `resource-owner`: The Amazon Web Services account that owns the IP address is charged for the active IP address.
   *
   * @public
   */
  MeteredAccount?: IpamMeteredAccount | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResult {
  /**
   * The results of the modification.
   *
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * Information about a requested IPAM policy allocation rule.
 *
 * Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.
 *
 * @public
 */
export interface IpamPolicyAllocationRuleRequest {
  /**
   * The ID of the source IPAM pool for the requested allocation rule.
   *
   * An IPAM pool is a collection of IP addresses in IPAM that can be allocated to Amazon Web Services resources.
   *
   * @public
   */
  SourceIpamPoolId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPolicyAllocationRulesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM policy whose allocation rules you want to modify.
   *
   * @public
   */
  IpamPolicyId: string | undefined;

  /**
   * The locale for which to modify the allocation rules.
   *
   * @public
   */
  Locale: string | undefined;

  /**
   * The resource type for which to modify the allocation rules.
   *
   * The Amazon Web Services service or resource type that can use IP addresses through IPAM policies. Supported services and resource types include:
   *
   * - Elastic IP addresses
   *
   * @public
   */
  ResourceType: IpamPolicyResourceType | undefined;

  /**
   * The new allocation rules to apply to the IPAM policy.
   *
   * Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.
   *
   * @public
   */
  AllocationRules?: IpamPolicyAllocationRuleRequest[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPolicyAllocationRulesResult {
  /**
   * The modified IPAM policy containing the updated allocation rules.
   *
   * @public
   */
  IpamPolicyDocument?: IpamPolicyDocument | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool you want to modify.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The description of the IPAM pool you want to modify.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If true, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *
   * A locale must be set on the pool for this feature to work.
   *
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128. The minimum netmask length must be less than the maximum netmask length.
   *
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.The maximum netmask length must be greater than the minimum netmask length.
   *
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.
   *
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * Clear the default netmask length allocation rule for this pool.
   *
   * @public
   */
  ClearAllocationDefaultNetmaskLength?: boolean | undefined;

  /**
   * Add tag allocation rules to a pool. For more information about allocation rules, see [Create a top-level pool](https://docs.aws.amazon.com/vpc/latest/ipam/create-top-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  AddAllocationResourceTags?: RequestIpamResourceTag[] | undefined;

  /**
   * Remove tag allocation rules from a pool.
   *
   * @public
   */
  RemoveAllocationResourceTags?: RequestIpamResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolResult {
  /**
   * The results of the modification.
   *
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolAllocationRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool allocation you want to modify.
   *
   * @public
   */
  IpamPoolAllocationId: string | undefined;

  /**
   * The new description for the IPAM pool allocation. If you submit a `null` value, the description is removed from the allocation.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolAllocationResult {
  /**
   * The modified IPAM pool allocation.
   *
   * @public
   */
  IpamPoolAllocation?: IpamPoolAllocation | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPrefixListResolverRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver to modify.
   *
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * A new description for the IPAM prefix list resolver.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated CIDR selection rules for the resolver. These rules replace the existing rules entirely.
   *
   * @public
   */
  Rules?: IpamPrefixListResolverRuleRequest[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPrefixListResolverResult {
  /**
   * Information about the modified IPAM prefix list resolver.
   *
   * @public
   */
  IpamPrefixListResolver?: IpamPrefixListResolver | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPrefixListResolverTargetRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver target to modify.
   *
   * @public
   */
  IpamPrefixListResolverTargetId: string | undefined;

  /**
   * The desired version of the prefix list to target. This allows you to pin the target to a specific version.
   *
   * @public
   */
  DesiredVersion?: number | undefined;

  /**
   * Indicates whether the resolver target should automatically track the latest version of the prefix list. When enabled, the target will always synchronize with the most current version.
   *
   * Choose this for automatic updates when you want your prefix lists to stay current with infrastructure changes without manual intervention.
   *
   * @public
   */
  TrackLatestVersion?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPrefixListResolverTargetResult {
  /**
   * Information about the modified IPAM prefix list resolver target.
   *
   * @public
   */
  IpamPrefixListResolverTarget?: IpamPrefixListResolverTarget | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the resource you want to modify.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The CIDR of the resource you want to modify.
   *
   * @public
   */
  ResourceCidr: string | undefined;

  /**
   * The Amazon Web Services Region of the resource you want to modify.
   *
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * The ID of the current scope that the resource CIDR is in.
   *
   * @public
   */
  CurrentIpamScopeId: string | undefined;

  /**
   * The ID of the scope you want to transfer the resource CIDR to.
   *
   * @public
   */
  DestinationIpamScopeId?: string | undefined;

  /**
   * Determines if the resource is monitored by IPAM. If a resource is monitored, the resource is discovered by IPAM and you can view details about the resource’s CIDR.
   *
   * @public
   */
  Monitored: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrResult {
  /**
   * The CIDR of the resource.
   *
   * @public
   */
  IpamResourceCidr?: IpamResourceCidr | undefined;
}

/**
 * Remove an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see [Quotas for your IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface RemoveIpamOrganizationalUnitExclusion {
  /**
   * An Amazon Web Services Organizations entity path. Build the path for the OU(s) using Amazon Web Services Organizations IDs separated by a `/`. Include all child OUs by ending the path with `/*`.
   *
   * - Example 1
   *
   *   - Path to a child OU: `o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/ou-jkl0-awsddddd/`
   *   - In this example, `o-a1b2c3d4e5` is the organization ID, `r-f6g7h8i9j0example` is the root ID , `ou-ghi0-awsccccc` is an OU ID, and `ou-jkl0-awsddddd` is a child OU ID.
   *   - IPAM will not manage the IP addresses in accounts in the child OU.
   * - Example 2
   *
   *   - Path where all child OUs will be part of the exclusion: `o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/*`
   *   - In this example, IPAM will not manage the IP addresses in accounts in the OU (`ou-ghi0-awsccccc`) or in accounts in any OUs that are children of the OU.
   *
   * For more information on how to construct an entity path, see [Understand the Amazon Web Services Organizations entity path](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_last-accessed-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  OrganizationsEntityPath?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryRequest {
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
   * A resource discovery description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Add operating Regions to the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
   *
   * @public
   */
  AddOperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * Remove operating Regions.
   *
   * @public
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[] | undefined;

  /**
   * Add an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see [Quotas for your IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * > **Note:** The resulting set of exclusions must not result in "overlap", meaning two or more OU exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in [Add or remove OU exclusions](https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html#exclude-ous-create-delete) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  AddOrganizationalUnitExclusions?: AddIpamOrganizationalUnitExclusion[] | undefined;

  /**
   * Remove an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see [Quotas for your IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * > **Note:** The resulting set of exclusions must not result in "overlap", meaning two or more OU exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in [Add or remove OU exclusions](https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html#exclude-ous-create-delete) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  RemoveOrganizationalUnitExclusions?: RemoveIpamOrganizationalUnitExclusion[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryResult {
  /**
   * A resource discovery.
   *
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * @public
 */
export interface ModifyIpamRoutingPolicyRegistrationRequest {
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
   * The IP address prefix in CIDR notation identifying the routing policy registration to modify.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The updated list of Autonomous System Numbers (ASNs) authorized to originate the prefix.
   *
   * @public
   */
  Asns: string[] | undefined;

  /**
   * Specifies whether to permit more specific route announcements than the CIDR prefix. Default: `false`.
   *
   * @public
   */
  PermitMoreSpecificAnnouncements?: boolean | undefined;

  /**
   * The new maximum prefix length that the ASNs are authorized to announce. Must be greater than or equal to the prefix length of the CIDR.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * A new description for the routing policy registration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Forces the modification even if it conflicts with an announced route. Default: `false`.
   *
   * @public
   */
  Force?: boolean | undefined;

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
export interface ModifyIpamRoutingPolicyRegistrationResult {
  /**
   * Information about the routing policy registration delta created by this modification.
   *
   * @public
   */
  IpamRoutingPolicyRegistrationDelta?: IpamRoutingPolicyRegistrationDelta | undefined;
}

/**
 * @public
 */
export interface ModifyIpamScopeRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the scope you want to modify.
   *
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * The description of the scope you want to modify.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.
   *
   * In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.
   *
   * @public
   */
  ExternalAuthorityConfiguration?: ExternalAuthorityConfiguration | undefined;

  /**
   * Remove the external authority configuration. `true` to remove.
   *
   * @public
   */
  RemoveExternalAuthorityConfiguration?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyIpamScopeResult {
  /**
   * The results of the modification.
   *
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency.
   *
   * For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * Constraint: Maximum 128 ASCII characters.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version number of the launch template to set as the default version.
   *
   * @public
   */
  DefaultVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateResult {
  /**
   * Information about the launch template.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteRequest {
  /**
   * The CIDR block used for destination matches. The value that you provide must match the CIDR of an existing route in the table.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * The ID of the virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the prefix list. Use a prefix list in place of `DestinationCidrBlock`. You cannot use `DestinationPrefixListId` and `DestinationCidrBlock` in the same request.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteResult {
  /**
   * Information about the local gateway route table.
   *
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * An entry for a prefix list.
 *
 * @public
 */
export interface RemovePrefixListEntry {
  /**
   * The CIDR block.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListRequest {
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
   * The current version of the prefix list.
   *
   * @public
   */
  CurrentVersion?: number | undefined;

  /**
   * A name for the prefix list.
   *
   * @public
   */
  PrefixListName?: string | undefined;

  /**
   * One or more entries to add to the prefix list.
   *
   * @public
   */
  AddEntries?: AddPrefixListEntry[] | undefined;

  /**
   * One or more entries to remove from the prefix list.
   *
   * @public
   */
  RemoveEntries?: RemovePrefixListEntry[] | undefined;

  /**
   * The maximum number of entries for the prefix list. You cannot modify the entries of a prefix list and modify the size of a prefix list at the same time.
   *
   * If any of the resources that reference the prefix list cannot support the new maximum size, the modify operation fails. Check the state message for the IDs of the first ten resources that do not support the new maximum size.
   *
   * @public
   */
  MaxEntries?: number | undefined;

  /**
   * Indicates whether synchronization with an IPAM prefix list resolver should be enabled for this managed prefix list. When enabled, the prefix list CIDRs are automatically updated based on the associated resolver's CIDR selection rules.
   *
   * @public
   */
  IpamPrefixListResolverSyncEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListResult {
  /**
   * Information about the prefix list.
   *
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 */
export interface ModifyManagedResourceVisibilityRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The default visibility setting for managed resources. Valid values: `hidden` | `visible`.
   *
   * @public
   */
  DefaultVisibility: ManagedResourceDefaultVisibility | undefined;
}

/**
 * @public
 */
export interface ModifyManagedResourceVisibilityResult {
  /**
   * The updated managed resource visibility settings for the account.
   *
   * @public
   */
  Visibility?: ManagedResourceVisibilitySettings | undefined;
}

/**
 * Describes an attachment change.
 *
 * @public
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * The default number of the ENA queues.
   *
   * @public
   */
  DefaultEnaQueueCount?: boolean | undefined;

  /**
   * The number of ENA queues to be created with the instance.
   *
   * @public
   */
  EnaQueueCount?: number | undefined;

  /**
   * The ID of the network interface attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;
}

/**
 * Contains the parameters for ModifyNetworkInterfaceAttribute.
 *
 * @public
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * Updates the ENA Express configuration for the network interface that’s attached to the instance.
   *
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecification | undefined;

  /**
   * If you’re modifying a network interface in a dual-stack or IPv6-only subnet, you have the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that this ENI will be attached to relies on its IPv6 address not changing. Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
   *
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * A connection tracking specification.
   *
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * Indicates whether to assign a public IPv4 address to a network interface. This option can be enabled for any network interface but will only apply to the primary network interface (eth0).
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * A list of subnet IDs to associate with the network interface.
   *
   * @public
   */
  AssociatedSubnetIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * A description for the network interface.
   *
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is `true`, source/destination checks are enabled; otherwise, they are disabled. The default value is `true`. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
   *
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * Changes the security groups for the network interface. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * Information about the interface attachment. If modifying the `delete on termination` attribute, you must specify the ID of the interface attachment.
   *
   * @public
   */
  Attachment?: NetworkInterfaceAttachmentChanges | undefined;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsRequest {
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

  /**
   * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
   *
   * @public
   */
  PrivateDnsHostnameType?: HostnameType | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsResult {
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
export interface ModifyPublicIpDnsNameOptionsRequest {
  /**
   * A network interface ID.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The public hostname type. For more information, see [EC2 instance hostnames, DNS names, and domains](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *Amazon EC2 User Guide*.
   *
   * - `public-dual-stack-dns-name`: A dual-stack public hostname for a network interface. Requests from within the VPC resolve to both the private IPv4 address and the IPv6 Global Unicast Address of the network interface. Requests from the internet resolve to both the public IPv4 and the IPv6 GUA address of the network interface.
   * - `public-ipv4-dns-name`: An IPv4-enabled public hostname for a network interface. Requests from within the VPC resolve to the private primary IPv4 address of the network interface. Requests from the internet resolve to the public IPv4 address of the network interface.
   * - `public-ipv6-dns-name`: An IPv6-enabled public hostname for a network interface. Requests from within the VPC or from the internet resolve to the IPv6 GUA of the network interface.
   *
   * @public
   */
  HostnameType: PublicIpDnsOption | undefined;

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
export interface ModifyPublicIpDnsNameOptionsResult {
  /**
   * Whether or not the request was successful.
   *
   * @public
   */
  Successful?: boolean | undefined;
}

/**
 * Contains the parameters for ModifyReservedInstances.
 *
 * @public
 */
export interface ModifyReservedInstancesRequest {
  /**
   * The IDs of the Reserved Instances to modify.
   *
   * @public
   */
  ReservedInstancesIds: string[] | undefined;

  /**
   * A unique, case-sensitive token you provide to ensure idempotency of your modification request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The configuration settings for the Reserved Instances to modify.
   *
   * @public
   */
  TargetConfigurations: ReservedInstancesConfiguration[] | undefined;
}

/**
 * Contains the output of ModifyReservedInstances.
 *
 * @public
 */
export interface ModifyReservedInstancesResult {
  /**
   * The ID for the modification.
   *
   * @public
   */
  ReservedInstancesModificationId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyRouteServerRequest {
  /**
   * The ID of the route server to modify.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * Specifies whether to persist routes after all BGP sessions are terminated.
   *
   * - enable: Routes will be persisted in FIB and RIB after all BGP sessions are terminated.
   * - disable: Routes will not be persisted in FIB and RIB after all BGP sessions are terminated.
   * - reset: If a route server has persisted routes due to all BGP sessions having ended, reset will withdraw all routes and reset route server to an empty FIB and RIB.
   *
   * @public
   */
  PersistRoutes?: RouteServerPersistRoutesAction | undefined;

  /**
   * The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. Required if PersistRoutes is `enabled`.
   *
   * If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.
   *
   * @public
   */
  PersistRoutesDuration?: number | undefined;

  /**
   * Specifies whether to enable SNS notifications for route server events. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.
   *
   * @public
   */
  SnsNotificationsEnabled?: boolean | undefined;

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
export interface ModifyRouteServerResult {
  /**
   * Information about the modified route server.
   *
   * @public
   */
  RouteServer?: RouteServer | undefined;
}

/**
 * Describes a security group rule.
 *
 * You must specify exactly one of the following parameters, based on the rule type:
 *
 * - CidrIpv4
 * - CidrIpv6
 * - PrefixListId
 * - ReferencedGroupId
 *
 * > **Note:** Amazon Web Services [canonicalizes](https://en.wikipedia.org/wiki/Canonicalization) IPv4 and IPv6 CIDRs. For example, if you specify 100.68.0.18/18 for the CIDR block, Amazon Web Services canonicalizes the CIDR block to 100.68.0.0/18. Any subsequent DescribeSecurityGroups and DescribeSecurityGroupRules calls will return the canonicalized form of the CIDR block. Additionally, if you attempt to add another rule with the non-canonical form of the CIDR (such as 100.68.0.18/18) and there is already a rule for the canonicalized form of the CIDR block (such as 100.68.0.0/18), the API throws an duplicate rule error.
 *
 * When you modify a rule, you cannot change the rule type. For example, if the rule uses an IPv4 address range, you must use `CidrIpv4` to specify a new IPv4 address range.
 *
 * @public
 */
export interface SecurityGroupRuleRequest {
  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number (see [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).
   *
   * Use `-1` to specify all protocols.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The IPv4 CIDR range. To specify a single IPv4 address, use the /32 prefix length.
   *
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * The IPv6 CIDR range. To specify a single IPv6 address, use the /128 prefix length.
   *
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The ID of the security group that is referenced in the security group rule.
   *
   * @public
   */
  ReferencedGroupId?: string | undefined;

  /**
   * The description of the security group rule.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Describes an update to a security group rule.
 *
 * @public
 */
export interface SecurityGroupRuleUpdate {
  /**
   * The ID of the security group rule.
   *
   * @public
   */
  SecurityGroupRuleId: string | undefined;

  /**
   * Information about the security group rule.
   *
   * @public
   */
  SecurityGroupRule?: SecurityGroupRuleRequest | undefined;
}

/**
 * @public
 */
export interface ModifySecurityGroupRulesRequest {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * Information about the security group properties to update.
   *
   * @public
   */
  SecurityGroupRules: SecurityGroupRuleUpdate[] | undefined;

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
export interface ModifySecurityGroupRulesResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Describes modifications to the list of create volume permissions for a volume.
 *
 * @public
 */
export interface CreateVolumePermissionModifications {
  /**
   * Adds the specified Amazon Web Services account ID or group to the list.
   *
   * @public
   */
  Add?: CreateVolumePermission[] | undefined;

  /**
   * Removes the specified Amazon Web Services account ID or group from the list.
   *
   * @public
   */
  Remove?: CreateVolumePermission[] | undefined;
}

/**
 * @public
 */
export interface ModifySnapshotAttributeRequest {
  /**
   * The snapshot attribute to modify. Only volume creation permissions can be modified.
   *
   * @public
   */
  Attribute?: SnapshotAttributeName | undefined;

  /**
   * A JSON representation of the snapshot attribute modification.
   *
   * @public
   */
  CreateVolumePermission?: CreateVolumePermissionModifications | undefined;

  /**
   * The group to modify for the snapshot.
   *
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * The type of operation to perform to the attribute.
   *
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The account ID to modify for the snapshot.
   *
   * @public
   */
  UserIds?: string[] | undefined;

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
export interface ModifySnapshotTierRequest {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The name of the storage tier. You must specify `archive`.
   *
   * @public
   */
  StorageTier?: TargetStorageTier | undefined;

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
export interface ModifySnapshotTierResult {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The date and time when the archive process was started.
   *
   * @public
   */
  TieringStartTime?: Date | undefined;
}

/**
 * Contains the parameters for ModifySpotFleetRequest.
 *
 * @public
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * The launch template and overrides. You can only use this parameter if you specified a launch template (`LaunchTemplateConfigs`) in your Spot Fleet request. If you specified `LaunchSpecifications` in your Spot Fleet request, then omit this parameter.
   *
   * @public
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[] | undefined;

  /**
   * The number of On-Demand Instances in the fleet.
   *
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * The size of the fleet.
   *
   * @public
   */
  TargetCapacity?: number | undefined;

  /**
   * Indicates whether running instances should be terminated if the target capacity of the Spot Fleet request is decreased below the current size of the Spot Fleet.
   *
   * Supported only for fleets of type `maintain`.
   *
   * @public
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | undefined;
}

/**
 * Contains the output of ModifySpotFleetRequest.
 *
 * @public
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * If the request succeeds, the response returns `true`. If the request fails, no response is returned, and instead an error message is returned.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifySubnetAttributeRequest {
  /**
   * Specify `true` to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This includes a network interface that's created when launching an instance into the subnet (the instance therefore receives an IPv6 address).
   *
   * If you enable the IPv6 addressing feature for your subnet, your network interface or instance only receives an IPv6 address if it's created using version `2016-11-15` or later of the Amazon EC2 API.
   *
   * @public
   */
  AssignIpv6AddressOnCreation?: AttributeBooleanValue | undefined;

  /**
   * Specify `true` to indicate that network interfaces attached to instances created in the specified subnet should be assigned a public IPv4 address.
   *
   * Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  MapPublicIpOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * Specify `true` to indicate that network interfaces attached to instances created in the specified subnet should be assigned a customer-owned IPv4 address.
   *
   * When this value is `true`, you must specify the customer-owned IP pool using `CustomerOwnedIpv4Pool`.
   *
   * @public
   */
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * The customer-owned IPv4 address pool associated with the subnet.
   *
   * You must set this value when you specify `true` for `MapCustomerOwnedIpOnLaunch`.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
   *
   * You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a `0.0.0.0/0` route pointing to the internet gateway. For more information, see [Configure DNS64 and NAT64](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  EnableDns64?: AttributeBooleanValue | undefined;

  /**
   * The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance DNS name must be based on the instance ID (resource-name).
   *
   * @public
   */
  PrivateDnsHostnameTypeOnLaunch?: HostnameType | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *
   * @public
   */
  EnableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * Indicates the device position for local network interfaces in this subnet. For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1). A local network interface cannot be the primary network interface (eth0).
   *
   * @public
   */
  EnableLniAtDeviceIndex?: number | undefined;

  /**
   * Specify `true` to indicate that local network interfaces at the current position should be disabled.
   *
   * @public
   */
  DisableLniAtDeviceIndex?: AttributeBooleanValue | undefined;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * The network service, for example Amazon DNS, that you want to mirror.
   *
   * @public
   */
  AddNetworkServices?: TrafficMirrorNetworkService[] | undefined;

  /**
   * The network service, for example Amazon DNS, that you no longer want to mirror.
   *
   * @public
   */
  RemoveNetworkServices?: TrafficMirrorNetworkService[] | undefined;

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
export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * The Traffic Mirror filter that the network service is associated with.
   *
   * @public
   */
  TrafficMirrorFilter?: TrafficMirrorFilter | undefined;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * The ID of the Traffic Mirror rule.
   *
   * @public
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * The type of traffic to assign to the rule.
   *
   * @public
   */
  TrafficDirection?: TrafficDirection | undefined;

  /**
   * The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.
   *
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * The action to assign to the rule.
   *
   * @public
   */
  RuleAction?: TrafficMirrorRuleAction | undefined;

  /**
   * The destination ports that are associated with the Traffic Mirror rule.
   *
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * The port range to assign to the Traffic Mirror rule.
   *
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * The protocol, for example TCP, to assign to the Traffic Mirror rule.
   *
   * @public
   */
  Protocol?: number | undefined;

  /**
   * The destination CIDR block to assign to the Traffic Mirror rule.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The source CIDR block to assign to the Traffic Mirror rule.
   *
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * The description to assign to the Traffic Mirror rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The properties that you want to remove from the Traffic Mirror filter rule.
   *
   * When you remove a property from a Traffic Mirror filter rule, the property is set to the default.
   *
   * @public
   */
  RemoveFields?: TrafficMirrorFilterRuleField[] | undefined;

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
export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * > **Note:** Tags are not returned for ModifyTrafficMirrorFilterRule.
   *
   * A Traffic Mirror rule.
   *
   * @public
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule | undefined;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorSessionRequest {
  /**
   * The ID of the Traffic Mirror session.
   *
   * @public
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.
   *
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.
   *
   * For sessions with Network Load Balancer (NLB) traffic mirror targets, the default `PacketLength` will be set to 8500. Valid values are 1-8500. Setting a `PacketLength` greater than 8500 will result in an error response.
   *
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.
   *
   * Valid values are 1-32766.
   *
   * @public
   */
  SessionNumber?: number | undefined;

  /**
   * The virtual network ID of the Traffic Mirror session.
   *
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * The description to assign to the Traffic Mirror session.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The properties that you want to remove from the Traffic Mirror session.
   *
   * When you remove a property from a Traffic Mirror session, the property is set to the default.
   *
   * @public
   */
  RemoveFields?: TrafficMirrorSessionField[] | undefined;

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
export interface ModifyTrafficMirrorSessionResult {
  /**
   * Information about the Traffic Mirror session.
   *
   * @public
   */
  TrafficMirrorSession?: TrafficMirrorSession | undefined;
}

/**
 * The transit gateway options.
 *
 * @public
 */
export interface ModifyTransitGatewayOptions {
  /**
   * Adds IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.
   *
   * @public
   */
  AddTransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * Removes CIDR blocks for the transit gateway.
   *
   * @public
   */
  RemoveTransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * Enable or disable Equal Cost Multipath Protocol support.
   *
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * Enable or disable DNS support.
   *
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * This option is disabled by default.
   *
   * For more information about security group referencing, see [Security group referencing](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security) in the *Amazon Web Services Transit Gateways Guide*.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * Enable or disable automatic acceptance of attachment requests.
   *
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * Enable or disable automatic association with the default association route table.
   *
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * The ID of the default association route table.
   *
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * Indicates whether resource attachments automatically propagate routes to the default propagation route table. Enabled by default. If `defaultRouteTablePropagation` is set to `enable`, Amazon Web Services Transit Gateway will create the default transit gateway route table.
   *
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * The ID of the default propagation route table.
   *
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.
   *
   * The modify ASN operation is not allowed on a transit gateway if it has the following attachments:
   *
   * - Dynamic VPN
   * - Static VPN
   * - Direct Connect Gateway
   * - Connect
   * - VPN Concentrator
   * - Client VPN
   *
   * You must first delete all transit gateway attachments configured prior to modifying the ASN on the transit gateway.
   *
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * Enable or disable encryption support for VPC Encryption Control.
   *
   * @public
   */
  EncryptionSupport?: EncryptionSupportOptionValue | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayRequest {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * The description for the transit gateway.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The options to modify.
   *
   * @public
   */
  Options?: ModifyTransitGatewayOptions | undefined;

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
export interface ModifyTransitGatewayResult {
  /**
   * Information about the transit gateway.
   *
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * Describes a NAT gateway rule to apply to a transit gateway attachment. A NAT gateway rule translates source addresses in the `MatchSourceCidr` range to the corresponding addresses in the `NatCidr` range.
 *
 * @public
 */
export interface TransitGatewayNatRuleRequest {
  /**
   * The rule number. Valid values are 1 to 32766. Each rule number must be unique within the request.
   *
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * The IPv4 CIDR block of the source addresses to translate. The CIDR block can't overlap the multicast range (`224.0.0.0/4`) or the link-local range (`169.254.0.0/16`).
   *
   * @public
   */
  MatchSourceCidr?: string | undefined;

  /**
   * The IPv4 CIDR block to translate the source addresses to. The CIDR block must be in a private (RFC 1918) or shared address space (RFC 6598) range, and must have the same prefix length as `MatchSourceCidr`. The CIDR blocks in the rules for an attachment can't overlap each other.
   *
   * @public
   */
  NatCidr?: string | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayAttachmentNatConfigurationRequest {
  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Specifies whether to enable or disable NAT gateway support for the attachment. To enable NAT gateway support, the attachment must have at least one NAT gateway rule. You can't modify the NAT configuration while NAT gateway support is `enabling` or `disabling`. If you omit this parameter, the current value doesn't change.
   *
   * @public
   */
  NatGatewaySupport?: TransitGatewayAttachmentNatGatewaySupportValue | undefined;

  /**
   * Specifies whether the transit gateway installs routes for the NAT CIDRs in the route tables to which the attachment propagates. For VPC attachments, the transit gateway always installs these routes. You can enable or disable this option only for Amazon Web Services Direct Connect gateway attachments and Site-to-Site VPN attachments that use dynamic routing. For these attachments, the default is `enable`. If you omit this parameter, the current value doesn't change.
   *
   * @public
   */
  NatSystemRouteSupport?: TransitGatewayAttachmentNatSystemRouteSupportValue | undefined;

  /**
   * The NAT gateway rules for the attachment. The rules that you specify replace all existing NAT gateway rules for the attachment. You can specify up to 50 rules for an attachment. If you omit this parameter, the existing rules don't change. To remove all rules, use `ResetNatGatewayRules`.
   *
   * @public
   */
  NatGatewayRules?: TransitGatewayNatRuleRequest[] | undefined;

  /**
   * Specifies whether to remove all NAT gateway rules from the attachment. If you omit this parameter, the transit gateway doesn't remove any rules. You can't specify this parameter together with `NatGatewayRules`. Because you can't enable NAT gateway support without rules, also set `NatGatewaySupport` to `disable` in the same request if NAT gateway support is currently enabled.
   *
   * @public
   */
  ResetNatGatewayRules?: boolean | undefined;

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
export interface ModifyTransitGatewayAttachmentNatConfigurationResult {
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
export interface ModifyTransitGatewayMeteringPolicyRequest {
  /**
   * The ID of the transit gateway metering policy to modify.
   *
   * @public
   */
  TransitGatewayMeteringPolicyId: string | undefined;

  /**
   * The IDs of middlebox attachments to add to the metering policy.
   *
   * @public
   */
  AddMiddleboxAttachmentIds?: string[] | undefined;

  /**
   * The IDs of middlebox attachments to remove from the metering policy.
   *
   * @public
   */
  RemoveMiddleboxAttachmentIds?: string[] | undefined;

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
export interface ModifyTransitGatewayMeteringPolicyResult {
  /**
   * Information about the modified transit gateway metering policy.
   *
   * @public
   */
  TransitGatewayMeteringPolicy?: TransitGatewayMeteringPolicy | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayPolicyTableEntryRequest {
  /**
   * The ID of the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * The rule number of the policy table entry to modify.
   *
   * @public
   */
  PolicyRuleNumber: string | undefined;

  /**
   * The updated matching criteria for the policy table entry. Unspecified fields retain their current values.
   *
   * @public
   */
  PolicyRule?: TransitGatewayRequestPolicyRule | undefined;

  /**
   * The ID of the transit gateway route table to use for traffic matching this rule.
   *
   * @public
   */
  TargetRouteTableId?: string | undefined;

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
export interface ModifyTransitGatewayPolicyTableEntryResult {
  /**
   * Describes a transit gateway policy table entry
   *
   * @public
   */
  TransitGatewayPolicyTableEntry?: TransitGatewayPolicyTableEntry | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * The ID of the attachment to which traffic is routed.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * Indicates whether to drop traffic that matches this route.
   *
   * @public
   */
  Blackhole?: boolean | undefined;

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
export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * Information about the prefix list reference.
   *
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * Describes the options for a VPC attachment.
 *
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * Enable or disable DNS support. The default is `enable`.
   *
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * This option is disabled by default.
   *
   * For more information about security group referencing, see [Security group referencing](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security) in the *Amazon Web Services Transit Gateways Guide*.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * Specifies whether IPv6 support is enabled for the attachment. When enabled, the transit gateway network interface receives an IPv6 address. When you enable route propagation, IPv6 VPC CIDRs propagate to the transit gateway route tables. When disabled, the network interface does not receive an IPv6 address, and IPv6 routes do not propagate. The setting does not filter IPv6 traffic.
   *
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is `disable`.
   *
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.
   *
   * @public
   */
  AddSubnetIds?: string[] | undefined;

  /**
   * The IDs of one or more subnets to remove.
   *
   * @public
   */
  RemoveSubnetIds?: string[] | undefined;

  /**
   * The new VPC attachment options.
   *
   * @public
   */
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions | undefined;

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
export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * Information about the modified attachment.
   *
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * Describes the port range for a Verified Access endpoint.
 *
 * @public
 */
export interface ModifyVerifiedAccessEndpointPortRange {
  /**
   * The start of the port range.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The end of the port range.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * The CIDR options for a Verified Access endpoint.
 *
 * @public
 */
export interface ModifyVerifiedAccessEndpointCidrOptions {
  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the `load-balancer` type.
 *
 * @public
 */
export interface ModifyVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * The IDs of the subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The IP protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IP port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * Describes the options when modifying a Verified Access endpoint with the `network-interface` type.
 *
 * @public
 */
export interface ModifyVerifiedAccessEndpointEniOptions {
  /**
   * The IP protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IP port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * The RDS options for a Verified Access endpoint.
 *
 * @public
 */
export interface ModifyVerifiedAccessEndpointRdsOptions {
  /**
   * The IDs of the subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The RDS endpoint.
   *
   * @public
   */
  RdsEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointRequest {
  /**
   * The ID of the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * The ID of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * The load balancer details if creating the Verified Access endpoint as `load-balancer`type.
   *
   * @public
   */
  LoadBalancerOptions?: ModifyVerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * The network interface options.
   *
   * @public
   */
  NetworkInterfaceOptions?: ModifyVerifiedAccessEndpointEniOptions | undefined;

  /**
   * A description for the Verified Access endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
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

  /**
   * The RDS options.
   *
   * @public
   */
  RdsOptions?: ModifyVerifiedAccessEndpointRdsOptions | undefined;

  /**
   * The CIDR options.
   *
   * @public
   */
  CidrOptions?: ModifyVerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointResult {
  /**
   * Details about the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyRequest {
  /**
   * The ID of the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

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

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
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

  /**
   * The options for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyResult {
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

  /**
   * The options in use for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupRequest {
  /**
   * The ID of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * A description for the Verified Access group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
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
export interface ModifyVerifiedAccessGroupResult {
  /**
   * Details about the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyRequest {
  /**
   * The ID of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

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

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
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

  /**
   * The options for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyResult {
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

  /**
   * The options in use for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceRequest {
  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * A description for the Verified Access instance.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The custom subdomain.
   *
   * @public
   */
  CidrEndpointsCustomSubDomain?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceResult {
  /**
   * Details about the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * Options for CloudWatch Logs as a logging destination.
 *
 * @public
 */
export interface VerifiedAccessLogCloudWatchLogsDestinationOptions {
  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The ID of the CloudWatch Logs log group.
   *
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * Describes Amazon Kinesis Data Firehose logging options.
 *
 * @public
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestinationOptions {
  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The ID of the delivery stream.
   *
   * @public
   */
  DeliveryStream?: string | undefined;
}

/**
 * Options for Amazon S3 as a logging destination.
 *
 * @public
 */
export interface VerifiedAccessLogS3DestinationOptions {
  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The bucket name.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The bucket prefix.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Amazon S3 bucket.
   *
   * @public
   */
  BucketOwner?: string | undefined;
}

/**
 * Options for Verified Access logs.
 *
 * @public
 */
export interface VerifiedAccessLogOptions {
  /**
   * Sends Verified Access logs to Amazon S3.
   *
   * @public
   */
  S3?: VerifiedAccessLogS3DestinationOptions | undefined;

  /**
   * Sends Verified Access logs to CloudWatch Logs.
   *
   * @public
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestinationOptions | undefined;

  /**
   * Sends Verified Access logs to Kinesis.
   *
   * @public
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestinationOptions | undefined;

  /**
   * The logging version.
   *
   * Valid values: `ocsf-0.1` | `ocsf-1.0.0-rc.2`
   *
   * @public
   */
  LogVersion?: string | undefined;

  /**
   * Indicates whether to include trust data sent by trust providers in the logs.
   *
   * @public
   */
  IncludeTrustContext?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationRequest {
  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * The configuration options for Verified Access instances.
   *
   * @public
   */
  AccessLogs: VerifiedAccessLogOptions | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationResult {
  /**
   * The logging configuration for the Verified Access instance.
   *
   * @public
   */
  LoggingConfiguration?: VerifiedAccessInstanceLoggingConfiguration | undefined;
}

/**
 * Modifies the configuration of the specified device-based Amazon Web Services Verified Access trust provider.
 *
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderDeviceOptions {
  /**
   * The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.
   *
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * Describes the OpenID Connect (OIDC) options.
 *
 * @public
 */
export interface ModifyVerifiedAccessNativeApplicationOidcOptions {
  /**
   * The public signing key endpoint.
   *
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

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
   * The set of user claims to be requested from the IdP.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * Options for an OpenID Connect-compatible user-identity trust provider.
 *
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderOidcOptions {
  /**
   * The OIDC issuer.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The OIDC authorization endpoint.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The OIDC token endpoint.
   *
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * The OIDC user info endpoint.
   *
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * The client identifier.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The client secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderRequest {
  /**
   * The ID of the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * The options for an OpenID Connect-compatible user-identity trust provider.
   *
   * @public
   */
  OidcOptions?: ModifyVerifiedAccessTrustProviderOidcOptions | undefined;

  /**
   * The options for a device-based trust provider. This parameter is required when the provider type is `device`.
   *
   * @public
   */
  DeviceOptions?: ModifyVerifiedAccessTrustProviderDeviceOptions | undefined;

  /**
   * A description for the Verified Access trust provider.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The options for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * The OpenID Connect (OIDC) options.
   *
   * @public
   */
  NativeApplicationOidcOptions?: ModifyVerifiedAccessNativeApplicationOidcOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderResult {
  /**
   * Details about the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeRequest {
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

  /**
   * The target size of the volume, in GiB. The target volume size must be greater than or equal to the existing size of the volume.
   *
   * The following are the supported volumes sizes for each volume type:
   *
   * - `gp2`: 1 - 16,384 GiB
   * - `gp3`: 1 - 65,536 GiB
   * - `io1`: 4 - 16,384 GiB
   * - `io2`: 4 - 65,536 GiB
   * - `st1` and `sc1`: 125 - 16,384 GiB
   * - `standard`: 1 - 1024 GiB
   *
   * Default: The existing size is retained.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The target EBS volume type of the volume. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   *
   * Default: The existing type is retained.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * The target IOPS rate of the volume. This parameter is valid only for `gp3`, `io1`, and `io2` volumes.
   *
   * The following are the supported values for each volume type:
   *
   * - `gp3`: 3,000 - 80,000 IOPS
   * - `io1`: 100 - 64,000 IOPS
   * - `io2`: 100 - 256,000 IOPS
   *
   * > **Note:** [Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.
   *
   * Default: The existing value is retained if you keep the same volume type. If you change the volume type to `io1`, `io2`, or `gp3`, the default is 3,000.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The target throughput of the volume, in MiB/s. This parameter is valid only for `gp3` volumes. The maximum value is 2,000.
   *
   * Default: The existing value is retained if the source and target volume type is `gp3`. Otherwise, the default value is 125.
   *
   * Valid Range: Minimum value of 125. Maximum value of 2,000.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the volume to up to 16 [Nitro-based instances](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) in the same Availability Zone. This parameter is supported with `io1` and `io2` volumes only. For more information, see [Amazon EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeResult {
  /**
   * Information about the volume modification.
   *
   * @public
   */
  VolumeModification?: VolumeModification | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeAttributeRequest {
  /**
   * Indicates whether the volume should be auto-enabled for I/O operations.
   *
   * @public
   */
  AutoEnableIO?: AttributeBooleanValue | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId: string | undefined;

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
export interface ModifyVpcAttributeRequest {
  /**
   * Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.
   *
   * You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.
   *
   * @public
   */
  EnableDnsHostnames?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled.
   *
   * You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.
   *
   * @public
   */
  EnableDnsSupport?: AttributeBooleanValue | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Indicates whether Network Address Usage metrics are enabled for your VPC.
   *
   * @public
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessExclusionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of an exclusion.
   *
   * @public
   */
  ExclusionId: string | undefined;

  /**
   * The exclusion mode for internet gateway traffic.
   *
   * - `allow-bidirectional`: Allow all internet traffic to and from the excluded VPCs and subnets.
   * - `allow-egress`: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.
   *
   * @public
   */
  InternetGatewayExclusionMode: InternetGatewayExclusionMode | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessExclusionResult {
  /**
   * Details related to the exclusion.
   *
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessOptionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The mode of VPC BPA.
   *
   * - `off`: VPC BPA is not enabled and traffic is allowed to and from internet gateways and egress-only internet gateways in this Region.
   * - `block-bidirectional`: Block all traffic to and from internet gateways and egress-only internet gateways in this Region (except for excluded VPCs and subnets).
   * - `block-ingress`: Block all internet traffic to the VPCs in this Region (except for VPCs or subnets which are excluded). Only traffic to and from NAT gateways and egress-only internet gateways is allowed because these gateways only allow outbound connections to be established.
   *
   * @public
   */
  InternetGatewayBlockMode: InternetGatewayBlockMode | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessOptionsResult {
  /**
   * Details related to the VPC Block Public Access (BPA) options.
   *
   * @public
   */
  VpcBlockPublicAccessOptions?: VpcBlockPublicAccessOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEncryptionControlRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC Encryption Control resource to modify.
   *
   * @public
   */
  VpcEncryptionControlId: string | undefined;

  /**
   * The encryption mode for the VPC Encryption Control configuration.
   *
   * @public
   */
  Mode?: VpcEncryptionControlMode | undefined;

  /**
   * Specifies whether to exclude internet gateway traffic from encryption enforcement.
   *
   * @public
   */
  InternetGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude egress-only internet gateway traffic from encryption enforcement.
   *
   * @public
   */
  EgressOnlyInternetGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude NAT gateway traffic from encryption enforcement.
   *
   * @public
   */
  NatGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude virtual private gateway traffic from encryption enforcement.
   *
   * @public
   */
  VirtualPrivateGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude VPC peering connection traffic from encryption enforcement.
   *
   * @public
   */
  VpcPeeringExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude Lambda function traffic from encryption enforcement.
   *
   * @public
   */
  LambdaExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude VPC Lattice traffic from encryption enforcement.
   *
   * @public
   */
  VpcLatticeExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude Elastic File System traffic from encryption enforcement.
   *
   * @public
   */
  ElasticFileSystemExclusion?: VpcEncryptionControlExclusionStateInput | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEncryptionControlResult {
  /**
   * Information about the VPC Encryption Control configuration.
   *
   * @public
   */
  VpcEncryptionControl?: VpcEncryptionControl | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the endpoint.
   *
   * @public
   */
  VpcEndpointId: string | undefined;

  /**
   * (Gateway endpoint) Specify `true` to reset the policy document to the default policy. The default policy allows full access to the service.
   *
   * @public
   */
  ResetPolicy?: boolean | undefined;

  /**
   * (Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * (Gateway endpoint) The IDs of the route tables to associate with the endpoint.
   *
   * @public
   */
  AddRouteTableIds?: string[] | undefined;

  /**
   * (Gateway endpoint) The IDs of the route tables to disassociate from the endpoint.
   *
   * @public
   */
  RemoveRouteTableIds?: string[] | undefined;

  /**
   * (Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to serve the endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.
   *
   * @public
   */
  AddSubnetIds?: string[] | undefined;

  /**
   * (Interface endpoint) The IDs of the subnets from which to remove the endpoint.
   *
   * @public
   */
  RemoveSubnetIds?: string[] | undefined;

  /**
   * (Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces.
   *
   * @public
   */
  AddSecurityGroupIds?: string[] | undefined;

  /**
   * (Interface endpoint) The IDs of the security groups to disassociate from the endpoint network interfaces.
   *
   * @public
   */
  RemoveSecurityGroupIds?: string[] | undefined;

  /**
   * The IP address type for the endpoint.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The DNS options for the endpoint.
   *
   * @public
   */
  DnsOptions?: DnsOptionsSpecification | undefined;

  /**
   * (Interface endpoint) Indicates whether a private hosted zone is associated with the VPC.
   *
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * The subnet configurations for the endpoint.
   *
   * @public
   */
  SubnetConfigurations?: SubnetConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointResult {
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
export interface ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the notification.
   *
   * @public
   */
  ConnectionNotificationId: string | undefined;

  /**
   * The ARN for the SNS topic for the notification.
   *
   * @public
   */
  ConnectionNotificationArn?: string | undefined;

  /**
   * The events for the endpoint. Valid values are `Accept`, `Connect`, `Delete`, and `Reject`.
   *
   * @public
   */
  ConnectionEvents?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointPayerResponsibilityRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC endpoint service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the VPC endpoint.
   *
   * @public
   */
  VpcEndpointId: string | undefined;

  /**
   * The Amazon Web Services account to which the usage of VPC endpoint is charged.
   *
   * @public
   */
  PayerResponsibility: PayerResponsibilityType | undefined;

  /**
   * The scope of usage/charges for which the billing account is being modified.
   *
   * @public
   */
  Scope: PayerResponsibilityScope | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointPayerResponsibilityResult {
  /**
   * The ID of the VPC endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The payer responsibility settings for the VPC endpoint.
   *
   * @public
   */
  PayerResponsibilities?: PayerResponsibilityEntry[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * (Interface endpoint configuration) The private DNS name to assign to the endpoint service.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * (Interface endpoint configuration) Removes the private DNS name of the endpoint service.
   *
   * @public
   */
  RemovePrivateDnsName?: boolean | undefined;

  /**
   * Indicates whether requests to create an endpoint to the service must be accepted.
   *
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * The Amazon Resource Names (ARNs) of Network Load Balancers to add to the service configuration.
   *
   * @public
   */
  AddNetworkLoadBalancerArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of Network Load Balancers to remove from the service configuration.
   *
   * @public
   */
  RemoveNetworkLoadBalancerArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to the service configuration.
   *
   * @public
   */
  AddGatewayLoadBalancerArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from the service configuration.
   *
   * @public
   */
  RemoveGatewayLoadBalancerArns?: string[] | undefined;

  /**
   * The IP address types to add to the service configuration.
   *
   * @public
   */
  AddSupportedIpAddressTypes?: string[] | undefined;

  /**
   * The IP address types to remove from the service configuration.
   *
   * @public
   */
  RemoveSupportedIpAddressTypes?: string[] | undefined;

  /**
   * The supported Regions to add to the service configuration.
   *
   * @public
   */
  AddSupportedRegions?: string[] | undefined;

  /**
   * The supported Regions to remove from the service configuration.
   *
   * @public
   */
  RemoveSupportedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationResult {
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
export interface ModifyVpcEndpointServicePayerResponsibilityRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The entity that is responsible for the endpoint costs. The default is the endpoint owner. If you set the payer responsibility to the service owner, you cannot set it back to the endpoint owner.
   *
   * @public
   */
  PayerResponsibility: PayerResponsibility | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePayerResponsibilityResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The Amazon Resource Names (ARN) of the principals. Permissions are granted to the principals in this list. To grant permissions to all principals, specify an asterisk (*).
   *
   * @public
   */
  AddAllowedPrincipals?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARN) of the principals. Permissions are revoked for principals in this list.
   *
   * @public
   */
  RemoveAllowedPrincipals?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * Information about the added principals.
   *
   * @public
   */
  AddedPrincipals?: AddedPrincipal[] | undefined;

  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * The VPC peering connection options.
 *
 * @public
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * If true, enables a local VPC to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.
   *
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * The VPC peering connection options for the accepter VPC.
   *
   * @public
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The VPC peering connection options for the requester VPC.
   *
   * @public
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest | undefined;

  /**
   * The ID of the VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * Describes the VPC peering connection options.
 *
 * @public
 */
export interface PeeringConnectionOptions {
  /**
   * If true, the public DNS hostnames of instances in the specified VPC resolve to private IP addresses when queried from instances in the peer VPC.
   *
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * Information about the VPC peering connection options for the accepter VPC.
   *
   * @public
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions | undefined;

  /**
   * Information about the VPC peering connection options for the requester VPC.
   *
   * @public
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVpcTenancyRequest {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The instance tenancy attribute for the VPC.
   *
   * @public
   */
  InstanceTenancy: VpcTenancy | undefined;

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
export interface ModifyVpcTenancyResult {
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
export interface ModifyVpnConnectionRequest {
  /**
   * The ID of the VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the customer gateway at your end of the VPN connection.
   *
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * The ID of the virtual private gateway at the Amazon Web Services side of the VPN connection.
   *
   * @public
   */
  VpnGatewayId?: string | undefined;

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
export interface ModifyVpnConnectionResult {
  /**
   * Information about the VPN connection.
   *
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface ModifyVpnConnectionOptionsRequest {
  /**
   * The ID of the Site-to-Site VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
   *
   * Default: `0.0.0.0/0`
   *
   * @public
   */
  LocalIpv4NetworkCidr?: string | undefined;

  /**
   * The IPv4 CIDR on the Amazon Web Services side of the VPN connection.
   *
   * Default: `0.0.0.0/0`
   *
   * @public
   */
  RemoteIpv4NetworkCidr?: string | undefined;

  /**
   * The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
   *
   * Default: `::/0`
   *
   * @public
   */
  LocalIpv6NetworkCidr?: string | undefined;

  /**
   * The IPv6 CIDR on the Amazon Web Services side of the VPN connection.
   *
   * Default: `::/0`
   *
   * @public
   */
  RemoteIpv6NetworkCidr?: string | undefined;

  /**
   * The desired bandwidth specification for the VPN connection. `standard` supports up to 1.25 Gbps per tunnel, while `large` supports up to 5 Gbps per tunnel. Large bandwidth is only available for VPN connections attached to a transit gateway or to Cloud WAN. The default value is `standard`.
   *
   * @public
   */
  TunnelBandwidth?: VpnTunnelBandwidth | undefined;

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
export interface ModifyVpnConnectionOptionsResult {
  /**
   * Information about the VPN connection.
   *
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelCertificateRequest {
  /**
   * The ID of the Amazon Web Services Site-to-Site VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * The external IP address of the VPN tunnel.
   *
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

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
export interface ModifyVpnTunnelCertificateResult {
  /**
   * Information about the VPN connection.
   *
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * The Amazon Web Services Site-to-Site VPN tunnel options to modify.
 *
 * @public
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
   * The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
   *
   * Constraints: A size /30 CIDR block from the `169.254.0.0/16` range. The following CIDR blocks are reserved and cannot be used:
   *
   * - `169.254.0.0/30`
   * - `169.254.1.0/30`
   * - `169.254.2.0/30`
   * - `169.254.3.0/30`
   * - `169.254.4.0/30`
   * - `169.254.5.0/30`
   * - `169.254.169.252/30`
   *
   * @public
   */
  TunnelInsideCidr?: string | undefined;

  /**
   * The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
   *
   * Constraints: A size /126 CIDR block from the local `fd00::/8` range.
   *
   * @public
   */
  TunnelInsideIpv6Cidr?: string | undefined;

  /**
   * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and the customer gateway.
   *
   * Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).
   *
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * The lifetime for phase 1 of the IKE negotiation, in seconds.
   *
   * Constraints: A value between 900 and 28,800.
   *
   * Default: `28800`
   *
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * The lifetime for phase 2 of the IKE negotiation, in seconds.
   *
   * Constraints: A value between 900 and 3,600. The value must be less than the value for `Phase1LifetimeSeconds`.
   *
   * Default: `3600`
   *
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * The margin time, in seconds, before the phase 2 lifetime expires, during which the Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `RekeyFuzzPercentage`.
   *
   * Constraints: A value between 60 and half of `Phase2LifetimeSeconds`.
   *
   * Default: `270`
   *
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * The percentage of the rekey window (determined by `RekeyMarginTimeSeconds`) during which the rekey time is randomly selected.
   *
   * Constraints: A value between 0 and 100.
   *
   * Default: `100`
   *
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * The number of packets in an IKE replay window.
   *
   * Constraints: A value between 64 and 2048.
   *
   * Default: `1024`
   *
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * The number of seconds after which a DPD timeout occurs. A DPD timeout of 40 seconds means that the VPN endpoint will consider the peer dead 30 seconds after the first failed keep-alive.
   *
   * Constraints: A value greater than or equal to 30.
   *
   * Default: `40`
   *
   * @public
   */
  DPDTimeoutSeconds?: number | undefined;

  /**
   * The action to take after DPD timeout occurs. Specify `restart` to restart the IKE initiation. Specify `clear` to end the IKE session.
   *
   * Valid Values: `clear` | `none` | `restart`
   *
   * Default: `clear`
   *
   * @public
   */
  DPDTimeoutAction?: string | undefined;

  /**
   * One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
   *
   * Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
   *
   * @public
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
   *
   * Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
   *
   * @public
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
   *
   * Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
   *
   * @public
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
   *
   * Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
   *
   * @public
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.
   *
   * Valid values: `2` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
   *
   * @public
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[] | undefined;

  /**
   * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.
   *
   * Valid values: `2` | `5` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
   *
   * @public
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[] | undefined;

  /**
   * The IKE versions that are permitted for the VPN tunnel.
   *
   * Valid values: `ikev1` | `ikev2`
   *
   * @public
   */
  IKEVersions?: IKEVersionsRequestListValue[] | undefined;

  /**
   * The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify `start` for Amazon Web Services to initiate the IKE negotiation.
   *
   * Valid Values: `add` | `start`
   *
   * Default: `add`
   *
   * @public
   */
  StartupAction?: string | undefined;

  /**
   * Options for logging VPN tunnel activity.
   *
   * @public
   */
  LogOptions?: VpnTunnelLogOptionsSpecification | undefined;

  /**
   * Turn on or off tunnel endpoint lifecycle control feature.
   *
   * @public
   */
  EnableTunnelLifecycleControl?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsRequest {
  /**
   * The ID of the Amazon Web Services Site-to-Site VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * The external IP address of the VPN tunnel.
   *
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * The tunnel options to modify.
   *
   * @public
   */
  TunnelOptions: ModifyVpnTunnelOptionsSpecification | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Choose whether or not to trigger immediate tunnel replacement. This is only applicable when turning on or off `EnableTunnelLifecycleControl`.
   *
   * Valid values: `True` | `False`
   *
   * @public
   */
  SkipTunnelReplacement?: boolean | undefined;

  /**
   * Specifies the storage mode for the pre-shared key (PSK). Valid values are `Standard` (stored in Site-to-Site VPN service) or `SecretsManager` (stored in Amazon Web Services Secrets Manager).
   *
   * @public
   */
  PreSharedKeyStorage?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsResult {
  /**
   * Information about the VPN connection.
   *
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface MonitorInstancesRequest {
  /**
   * The IDs of the instances.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the monitoring of an instance.
 *
 * @public
 */
export interface InstanceMonitoring {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The monitoring for the instance.
   *
   * @public
   */
  Monitoring?: Monitoring | undefined;
}

/**
 * @public
 */
export interface MonitorInstancesResult {
  /**
   * The monitoring information.
   *
   * @public
   */
  InstanceMonitorings?: InstanceMonitoring[] | undefined;
}

/**
 * @public
 */
export interface MoveAddressToVpcRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The Elastic IP address.
   *
   * @public
   */
  PublicIp: string | undefined;
}

/**
 * @public
 */
export interface MoveAddressToVpcResult {
  /**
   * The allocation ID for the Elastic IP address.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The status of the move of the IP address.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The BYOIP CIDR.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The IPAM pool ID.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the IPAM pool.
   *
   * @public
   */
  IpamPoolOwner: string | undefined;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamResult {
  /**
   * The BYOIP CIDR.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface MoveCapacityReservationInstancesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the Capacity Reservation from which you want to move capacity.
   *
   * @public
   */
  SourceCapacityReservationId: string | undefined;

  /**
   * The ID of the Capacity Reservation that you want to move capacity into.
   *
   * @public
   */
  DestinationCapacityReservationId: string | undefined;

  /**
   * The number of instances that you want to move from the source Capacity Reservation.
   *
   * @public
   */
  InstanceCount: number | undefined;
}

/**
 * @public
 */
export interface MoveCapacityReservationInstancesResult {
  /**
   * Information about the source Capacity Reservation.
   *
   * @public
   */
  SourceCapacityReservation?: CapacityReservation | undefined;

  /**
   * Information about the destination Capacity Reservation.
   *
   * @public
   */
  DestinationCapacityReservation?: CapacityReservation | undefined;

  /**
   * The number of instances that were moved from the source Capacity Reservation to the destination Capacity Reservation.
   *
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services account using bring your own IP addresses (BYOIP). For more information, see [Configuring your BYOIP address range](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface CidrAuthorizationContext {
  /**
   * The plain-text authorization message for the prefix and account.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The signed authorization message for the prefix and account.
   *
   * @public
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrRequest {
  /**
   * The public IPv4 or IPv6 address range, in CIDR notation. The most specific IPv4 prefix that you can specify is /24. The most specific IPv6 address range that you can bring is /48 for CIDRs that are publicly advertisable and /56 for CIDRs that are not publicly advertisable. The address range cannot overlap with another address range that you've brought to this or another Region.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.
   *
   * @public
   */
  CidrAuthorizationContext?: CidrAuthorizationContext | undefined;

  /**
   * (IPv6 only) Indicate whether the address range will be publicly advertised to the internet.
   *
   * Default: true
   *
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * A description for the address range and the address pool.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply to the address pool.
   *
   * @public
   */
  PoolTagSpecifications?: TagSpecification[] | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  MultiRegion?: boolean | undefined;

  /**
   * If you have [Local Zones](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html) enabled, you can choose a network border group for Local Zones when you provision and advertise a BYOIPv4 CIDR. Choose the network border group carefully as the EIP and the Amazon Web Services resource it is associated with must reside in the same network border group.
   *
   * You can provision BYOIP address ranges to and advertise them in the following Local Zone network border groups:
   *
   * - us-east-1-dfw-2
   * - us-west-2-lax-1
   * - us-west-2-phx-2
   *
   * > **Note:** You cannot provision or advertise BYOIPv6 address ranges in Local Zones at this time.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrResult {
  /**
   * Information about the address range.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * Provides authorization for Amazon to bring an Autonomous System Number (ASN) to a specific Amazon Web Services account using bring your own ASN (BYOASN). For details on the format of the message and signature, see [Tutorial: Bring your ASN to IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html) in the *Amazon VPC IPAM guide*.
 *
 * @public
 */
export interface AsnAuthorizationContext {
  /**
   * The authorization context's message.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The authorization context's signature.
   *
   * @public
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * An IPAM ID.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * A public 2-byte or 4-byte ASN.
   *
   * @public
   */
  Asn: string | undefined;

  /**
   * An ASN authorization context.
   *
   * @public
   */
  AsnAuthorizationContext: AsnAuthorizationContext | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnResult {
  /**
   * An ASN and BYOIP CIDR association.
   *
   * @public
   */
  Byoasn?: Byoasn | undefined;
}

/**
 * A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.
 *
 * @public
 */
export interface IpamCidrAuthorizationContext {
  /**
   * The plain-text authorization message for the prefix and account.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The signed authorization message for the prefix and account.
   *
   * @public
   */
  Signature?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamPoolCidrRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool to which you want to assign a CIDR.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The CIDR you want to assign to the IPAM pool. Either "NetmaskLength" or "Cidr" is required. This value will be null if you specify "NetmaskLength" and will be filled in during the provisioning process.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * A signed document that proves that you are authorized to bring a specified IP address range to Amazon using BYOIP. This option only applies to IPv4 and IPv6 pools in the public scope.
   *
   * @public
   */
  CidrAuthorizationContext?: IpamCidrAuthorizationContext | undefined;

  /**
   * The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. Either "NetmaskLength" or "Cidr" is required.
   *
   * @public
   */
  NetmaskLength?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The method for verifying control of a public IP address range. Defaults to `remarks-x509` if not specified. This option only applies to IPv4 and IPv6 pools in the public scope.
   *
   * @public
   */
  VerificationMethod?: VerificationMethod | undefined;

  /**
   * Verification token ID. This option only applies to IPv4 and IPv6 pools in the public scope.
   *
   * @public
   */
  IpamExternalResourceVerificationTokenId?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamPoolCidrResult {
  /**
   * Information about the provisioned CIDR.
   *
   * @public
   */
  IpamPoolCidr?: IpamPoolCidr | undefined;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool you would like to use to allocate this CIDR.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The ID of the public IPv4 pool you would like to use for this CIDR.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The netmask length of the CIDR you would like to allocate to the public IPv4 pool. The least specific netmask length you can define is 24.
   *
   * @public
   */
  NetmaskLength: number | undefined;

  /**
   * The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see [Local Zone availability](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrResult {
  /**
   * The ID of the pool that you want to provision the CIDR to.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * Information about the address range of the public IPv4 pool.
   *
   * @public
   */
  PoolAddressRange?: PublicIpv4PoolRange | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply to the Capacity Block during launch.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The ID of the Capacity Block offering.
   *
   * @public
   */
  CapacityBlockOfferingId: string | undefined;

  /**
   * The type of operating system for which to reserve capacity.
   *
   * @public
   */
  InstancePlatform: CapacityReservationInstancePlatform | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockResult {
  /**
   * The Capacity Reservation.
   *
   * @public
   */
  CapacityReservation?: CapacityReservation | undefined;

  /**
   * The Capacity Block.
   *
   * @public
   */
  CapacityBlocks?: CapacityBlock[] | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockExtensionRequest {
  /**
   * The ID of the Capacity Block extension offering to purchase.
   *
   * @public
   */
  CapacityBlockExtensionOfferingId: string | undefined;

  /**
   * The ID of the Capacity reservation to be extended.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

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
export interface PurchaseCapacityBlockExtensionResult {
  /**
   * The purchased Capacity Block extensions.
   *
   * @public
   */
  CapacityBlockExtensions?: CapacityBlockExtension[] | undefined;
}

/**
 * @public
 */
export interface PurchaseHostReservationRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The currency in which the `totalUpfrontPrice`, `LimitPrice`, and `totalHourlyPrice` amounts are specified. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The IDs of the Dedicated Hosts with which the reservation will be associated.
   *
   * @public
   */
  HostIdSet: string[] | undefined;

  /**
   * The specified limit is checked against the total upfront cost of the reservation (calculated as the offering's upfront cost multiplied by the host count). If the total upfront cost is greater than the specified price limit, the request fails. This is used to ensure that the purchase does not exceed the expected upfront cost of the purchase. At this time, the only supported currency is `USD`. For example, to indicate a limit price of USD 100, specify 100.00.
   *
   * @public
   */
  LimitPrice?: string | undefined;

  /**
   * The ID of the offering.
   *
   * @public
   */
  OfferingId: string | undefined;

  /**
   * The tags to apply to the Dedicated Host Reservation during purchase.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface PurchaseHostReservationResult {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The currency in which the `totalUpfrontPrice` and `totalHourlyPrice` amounts are specified. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * Describes the details of the purchase.
   *
   * @public
   */
  Purchase?: Purchase[] | undefined;

  /**
   * The total hourly price of the reservation calculated per hour.
   *
   * @public
   */
  TotalHourlyPrice?: string | undefined;

  /**
   * The total amount charged to your account when you purchase the reservation.
   *
   * @public
   */
  TotalUpfrontPrice?: string | undefined;
}

/**
 * Describes the limit price of a Reserved Instance offering.
 *
 * @public
 */
export interface ReservedInstanceLimitPrice {
  /**
   * Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total order (instanceCount * price).
   *
   * @public
   */
  Amount?: number | undefined;

  /**
   * The currency in which the `limitPrice` amount is specified. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;
}

/**
 * Contains the parameters for PurchaseReservedInstancesOffering.
 *
 * @public
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * The number of Reserved Instances to purchase.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * The ID of the Reserved Instance offering to purchase.
   *
   * @public
   */
  ReservedInstancesOfferingId: string | undefined;

  /**
   * The time at which to purchase the Reserved Instance, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  PurchaseTime?: Date | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.
   *
   * @public
   */
  LimitPrice?: ReservedInstanceLimitPrice | undefined;
}

/**
 * Contains the output of PurchaseReservedInstancesOffering.
 *
 * @public
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * The IDs of the purchased Reserved Instances. If your purchase crosses into a discounted pricing tier, the final Reserved Instances IDs might change. For more information, see [Crossing pricing tiers](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html#crossing-pricing-tiers) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * Describes a request to purchase Scheduled Instances.
 *
 * @public
 */
export interface PurchaseRequest {
  /**
   * The number of instances.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * The purchase token.
   *
   * @public
   */
  PurchaseToken: string | undefined;
}

/**
 * Contains the parameters for PurchaseScheduledInstances.
 *
 * @public
 */
export interface PurchaseScheduledInstancesRequest {
  /**
   * Unique, case-sensitive identifier that ensures the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
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

  /**
   * The purchase requests.
   *
   * @public
   */
  PurchaseRequests: PurchaseRequest[] | undefined;
}

/**
 * Contains the output of PurchaseScheduledInstances.
 *
 * @public
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * Information about the Scheduled Instances.
   *
   * @public
   */
  ScheduledInstanceSet?: ScheduledInstance[] | undefined;
}

/**
 * @public
 */
export interface RebootInstancesRequest {
  /**
   * The instance IDs.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the parameters for RegisterImage.
 *
 * @public
 */
export interface RegisterImageRequest {
  /**
   * The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the `aws-exec-read` canned access control list (ACL) to ensure that it can be accessed by Amazon EC2. For more information, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 Service Developer Guide*.
   *
   * @public
   */
  ImageLocation?: string | undefined;

  /**
   * The billing product codes. Your account must be authorized to specify billing product codes.
   *
   * If your account is not authorized to specify billing product codes, you can publish AMIs that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller on the Amazon Web Services Marketplace. For more information, see [Getting started as an Amazon Web Services Marketplace seller](https://docs.aws.amazon.com/marketplace/latest/userguide/user-guide-for-sellers.html) and [AMI-based products in Amazon Web Services Marketplace](https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html) in the *Amazon Web Services Marketplace Seller Guide*.
   *
   * @public
   */
  BillingProducts?: string[] | undefined;

  /**
   * The boot mode of the AMI. A value of `uefi-preferred` indicates that the AMI supports both UEFI and Legacy BIOS.
   *
   * > **Note:** The operating system contained in the AMI must be configured to support the specified boot mode.
   *
   * For more information, see [Instance launch behavior with Amazon EC2 boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * Set to `v2.0` to enable Trusted Platform Module (TPM) support. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  TpmSupport?: TpmSupportValues | undefined;

  /**
   * Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the [GetInstanceUefiData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData) command. You can inspect and modify the UEFI data by using the [python-uefivars tool](https://github.com/awslabs/python-uefivars) on GitHub. For more information, see [UEFI Secure Boot for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  UefiData?: string | undefined;

  /**
   * Set to `v2.0` to indicate that IMDSv2 is specified in the AMI. Instances launched from this AMI will have `HttpTokens` automatically set to `required` so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, `HttpPutResponseHopLimit` is set to `2`. For more information, see [Configure the AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration) in the *Amazon EC2 User Guide*.
   *
   * > **Note:** If you set the value to `v2.0`, make sure that your AMI software can support IMDSv2.
   *
   * @public
   */
  ImdsSupport?: ImdsSupportValues | undefined;

  /**
   * The tags to apply to the AMI.
   *
   * To tag the AMI, the value for `ResourceType` must be `image`. If you specify another value for `ResourceType`, the request fails.
   *
   * To tag an AMI after it has been registered, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A name for your AMI.
   *
   * Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for your AMI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The architecture of the AMI.
   *
   * Default: For Amazon EBS-backed AMIs, `i386`. For instance store-backed AMIs, the architecture specified in the manifest file.
   *
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * The ID of the kernel.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The ID of the RAM disk.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The device name of the root device volume (for example, `/dev/sda1`).
   *
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * The block device mapping entries.
   *
   * If you specify an Amazon EBS volume using the ID of an Amazon EBS snapshot, you can't specify the encryption state of the volume.
   *
   * If you create an AMI on an Outpost, then all backing snapshots must be on the same Outpost or in the Region of that Outpost. AMIs on an Outpost that include local snapshots can be used to launch instances on the same Outpost only. For more information, [Create AMIs from local snapshots](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#ami) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * The type of virtualization (`hvm` | `paravirtual`).
   *
   * Default: `paravirtual`
   *
   * @public
   */
  VirtualizationType?: string | undefined;

  /**
   * Set to `simple` to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI.
   *
   * There is no way to disable `sriovNetSupport` at this time.
   *
   * This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.
   *
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * Set to `true` to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI.
   *
   * This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.
   *
   * @public
   */
  EnaSupport?: boolean | undefined;
}

/**
 * Contains the output of RegisterImage.
 *
 * @public
 */
export interface RegisterImageResult {
  /**
   * The ID of the newly registered AMI.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * Information about the tag keys to register for the current Region. You can either specify individual tag keys or register all tag keys in the current Region. You must specify either `IncludeAllTagsOfInstance` or `InstanceTagKeys` in the request
 *
 * @public
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * Indicates whether to register all tag keys in the current Region. Specify `true` to register all tag keys.
   *
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;

  /**
   * The tag keys to register.
   *
   * @public
   */
  InstanceTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Information about the tag keys to register.
   *
   * @public
   */
  InstanceTagAttribute: RegisterInstanceTagAttributeRequest | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * The resulting set of tag keys.
   *
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * The group members' network interface IDs to register with the transit gateway multicast group.
   *
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the registered transit gateway multicast group members.
 *
 * @public
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The ID of the registered network interfaces.
   *
   * @public
   */
  RegisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * Information about the registered transit gateway multicast group members.
   *
   * @public
   */
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * The group sources' network interface IDs to register with the transit gateway multicast group.
   *
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the members registered with the transit gateway multicast group.
 *
 * @public
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The IDs of the network interfaces members registered with the transit gateway multicast group.
   *
   * @public
   */
  RegisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * Information about the transit gateway multicast group sources.
   *
   * @public
   */
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources | undefined;
}

/**
 * @public
 */
export interface RejectCapacityReservationBillingOwnershipRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the Capacity Reservation for which to reject the request.
   *
   * @public
   */
  CapacityReservationId: string | undefined;
}

/**
 * @public
 */
export interface RejectCapacityReservationBillingOwnershipResult {
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
export interface RejectTransitGatewayClientVpnAttachmentRequest {
  /**
   * The ID of the Transit Gateway attachment.
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
export interface RejectTransitGatewayClientVpnAttachmentResult {
  /**
   * Information about the Transit Gateway Client VPN attachment.
   *
   * @public
   */
  TransitGatewayClientVpnAttachment?: TransitGatewayClientVpnAttachment | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The IDs of the subnets to associate with the transit gateway multicast domain.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

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
export interface RejectTransitGatewayMulticastDomainAssociationsResult {
  /**
   * Information about the multicast domain associations.
   *
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}
