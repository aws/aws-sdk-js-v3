// smithy-typescript generated code
import type {
  AmdSevSnpEnum,
  AutoRecoveryEnum,
  BandwidthWeightingEnum,
  BillingMode,
  CapacityReservationPreferenceEnum,
  CpuCreditsEnum,
  DisassociateModeEnum,
  HostnameTypeEnum,
  HttpEndpointEnum,
  HttpProtocolIpv6Enum,
  HttpTokensEnum,
  InstanceConfigurationTenancyEnum,
  InstanceInterruptionBehaviorEnum,
  InstanceMetadataTagsEnum,
  InterfaceTypeEnum,
  MarketTypeEnum,
  NestedVirtualizationEnum,
  PlatformTypeEnum,
  ProvisionStateEnum,
  ResourceTypeEnum,
  SpotInstanceTypeEnum,
  TenancyEnum,
  VolumeTypeEnum,
} from "./enums";

/**
 * Specifies volume attachment parameters.
 *
 * @public
 */
export interface AssociateVolumeRequest {
  /**
   * WorkSpace Instance to attach volume to.
   *
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * Volume to be attached.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Device path for volume attachment.
   *
   * @public
   */
  Device: string | undefined;
}

/**
 * Confirms volume attachment.
 *
 * @public
 */
export interface AssociateVolumeResponse {}

/**
 * Represents a validation error field in an API request.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Name of the field that failed validation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Reason for the validation failure.
   *
   * @public
   */
  Reason: string | undefined;

  /**
   * Detailed error message describing the validation issue.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Defines billing configuration settings for WorkSpace Instances, containing the billing mode selection.
 *
 * @public
 */
export interface BillingConfiguration {
  /**
   * Specifies the billing mode for WorkSpace Instances. MONTHLY provides fixed monthly rates for predictable budgeting, while HOURLY enables pay-per-second billing for actual usage.
   *
   * @public
   */
  BillingMode: BillingMode | undefined;
}

/**
 * Defines configuration for an Elastic Block Store volume.
 *
 * @public
 */
export interface EbsBlockDevice {
  /**
   * Type of EBS volume (e.g., gp2, io1).
   *
   * @public
   */
  VolumeType?: VolumeTypeEnum | undefined;

  /**
   * Indicates if the volume is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * KMS key used for volume encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Input/output operations per second for the volume.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Volume data transfer rate.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Size of the EBS volume in gigabytes.
   *
   * @public
   */
  VolumeSize?: number | undefined;
}

/**
 * Defines device mapping for WorkSpace Instance storage.
 *
 * @public
 */
export interface BlockDeviceMappingRequest {
  /**
   * Name of the device for storage mapping.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * EBS volume configuration for the device.
   *
   * @public
   */
  Ebs?: EbsBlockDevice | undefined;

  /**
   * Indicates device should not be mapped.
   *
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * Virtual device name for ephemeral storage.
   *
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * Identifies a specific capacity reservation.
 *
 * @public
 */
export interface CapacityReservationTarget {
  /**
   * Unique identifier for the capacity reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * ARN of the capacity reservation resource group.
   *
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * Specifies capacity reservation preferences.
 *
 * @public
 */
export interface CapacityReservationSpecification {
  /**
   * Preference for using capacity reservation.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreferenceEnum | undefined;

  /**
   * Specific capacity reservation target.
   *
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * Defines connection tracking parameters for network interfaces.
 *
 * @public
 */
export interface ConnectionTrackingSpecificationRequest {
  /**
   * Timeout for established TCP connections.
   *
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * Timeout for UDP stream connections.
   *
   * @public
   */
  UdpStreamTimeout?: number | undefined;

  /**
   * General timeout for UDP connections.
   *
   * @public
   */
  UdpTimeout?: number | undefined;
}

/**
 * Configures CPU-specific settings for WorkSpace Instance.
 *
 * @public
 */
export interface CpuOptionsRequest {
  /**
   * AMD Secure Encrypted Virtualization configuration.
   *
   * @public
   */
  AmdSevSnp?: AmdSevSnpEnum | undefined;

  /**
   * Number of CPU cores to allocate.
   *
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * Number of threads per CPU core.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Specifies whether to enable or disable nested virtualization.
   *
   * @public
   */
  NestedVirtualization?: NestedVirtualizationEnum | undefined;
}

/**
 * Represents a key-value metadata tag.
 *
 * @public
 */
export interface Tag {
  /**
   * Unique identifier for the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Value associated with the tag key.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Defines tagging configuration for a resource.
 *
 * @public
 */
export interface TagSpecification {
  /**
   * Type of resource being tagged.
   *
   * @public
   */
  ResourceType?: ResourceTypeEnum | undefined;

  /**
   * Collection of tags for the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Specifies volume creation parameters.
 *
 * @public
 */
export interface CreateVolumeRequest {
  /**
   * Availability zone for the volume.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * Unique token to prevent duplicate volume creation.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates if the volume should be encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Input/output operations per second for the volume.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * KMS key for volume encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Volume size in gigabytes.
   *
   * @public
   */
  SizeInGB?: number | undefined;

  /**
   * Source snapshot for volume creation.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * Metadata tags for the volume.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Volume throughput performance.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Type of EBS volume.
   *
   * @public
   */
  VolumeType?: VolumeTypeEnum | undefined;
}

/**
 * Returns the created volume identifier.
 *
 * @public
 */
export interface CreateVolumeResponse {
  /**
   * Unique identifier for the new volume.
   *
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * Defines CPU credit configuration for burstable instances.
 *
 * @public
 */
export interface CreditSpecificationRequest {
  /**
   * CPU credit specification mode.
   *
   * @public
   */
  CpuCredits?: CpuCreditsEnum | undefined;
}

/**
 * Configures AWS Nitro Enclave options for the WorkSpace Instance.
 *
 * @public
 */
export interface EnclaveOptionsRequest {
  /**
   * Enables or disables AWS Nitro Enclaves for enhanced security.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Defines hibernation configuration for the WorkSpace Instance.
 *
 * @public
 */
export interface HibernationOptionsRequest {
  /**
   * Enables or disables instance hibernation capability.
   *
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * Defines IAM instance profile configuration for WorkSpace Instance.
 *
 * @public
 */
export interface IamInstanceProfileSpecification {
  /**
   * Amazon Resource Name (ARN) of the IAM instance profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the IAM instance profile.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Defines configuration for spot instance deployment.
 *
 * @public
 */
export interface SpotMarketOptions {
  /**
   * Duration of spot instance block reservation.
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * Specifies behavior when spot instance is interrupted.
   *
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum | undefined;

  /**
   * Maximum hourly price for spot instance.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * Defines the type of spot instance request.
   *
   * @public
   */
  SpotInstanceType?: SpotInstanceTypeEnum | undefined;

  /**
   * Timestamp until which spot instance request is valid.
   *
   * @public
   */
  ValidUntilUtc?: Date | undefined;
}

/**
 * Configures marketplace-specific instance deployment options.
 *
 * @public
 */
export interface InstanceMarketOptionsRequest {
  /**
   * Specifies the type of marketplace for instance deployment.
   *
   * @public
   */
  MarketType?: MarketTypeEnum | undefined;

  /**
   * Configuration options for spot instance deployment.
   *
   * @public
   */
  SpotOptions?: SpotMarketOptions | undefined;
}

/**
 * Represents an IPv6 address configuration for a WorkSpace Instance.
 *
 * @public
 */
export interface InstanceIpv6Address {
  /**
   * Specific IPv6 address assigned to the instance.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * Indicates if this is the primary IPv6 address for the instance.
   *
   * @public
   */
  IsPrimaryIpv6?: boolean | undefined;
}

/**
 * Specifies license configuration for WorkSpace Instance.
 *
 * @public
 */
export interface LicenseConfigurationRequest {
  /**
   * ARN of the license configuration for the WorkSpace Instance.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * Configures automatic maintenance settings for WorkSpace Instance.
 *
 * @public
 */
export interface InstanceMaintenanceOptionsRequest {
  /**
   * Enables or disables automatic instance recovery.
   *
   * @public
   */
  AutoRecovery?: AutoRecoveryEnum | undefined;
}

/**
 * Defines instance metadata service configuration.
 *
 * @public
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * Enables or disables HTTP endpoint for instance metadata.
   *
   * @public
   */
  HttpEndpoint?: HttpEndpointEnum | undefined;

  /**
   * Configures IPv6 support for instance metadata HTTP protocol.
   *
   * @public
   */
  HttpProtocolIpv6?: HttpProtocolIpv6Enum | undefined;

  /**
   * Sets maximum number of network hops for metadata PUT responses.
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Configures token requirement for instance metadata retrieval.
   *
   * @public
   */
  HttpTokens?: HttpTokensEnum | undefined;

  /**
   * Enables or disables instance metadata tags retrieval.
   *
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsEnum | undefined;
}

/**
 * Configures detailed monitoring for WorkSpace Instance.
 *
 * @public
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * Enables or disables detailed instance monitoring.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Specifies UDP configuration for ENA SRD.
 *
 * @public
 */
export interface EnaSrdUdpSpecificationRequest {
  /**
   * Enables or disables ENA SRD for UDP traffic.
   *
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * Defines Elastic Network Adapter (ENA) Scalable Reliable Datagram (SRD) configuration.
 *
 * @public
 */
export interface EnaSrdSpecificationRequest {
  /**
   * Enables or disables ENA SRD for network performance.
   *
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * Configures UDP-specific ENA SRD settings.
   *
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecificationRequest | undefined;
}

/**
 * Specifies IPv4 prefix configuration for network interfaces.
 *
 * @public
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * Specific IPv4 prefix for network interface configuration.
   *
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * Specifies IPv6 prefix configuration for network interfaces.
 *
 * @public
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * Specific IPv6 prefix for network interface configuration.
   *
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * Defines private IP address configuration for network interface.
 *
 * @public
 */
export interface PrivateIpAddressSpecification {
  /**
   * Indicates if this is the primary private IP address.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * Specific private IP address for the network interface.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Defines network interface configuration for WorkSpace Instance.
 *
 * @public
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * Enables carrier IP address association.
   *
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * Enables public IP address assignment.
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * Configures network connection tracking parameters.
   *
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * Descriptive text for the network interface.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Unique index for the network interface.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * Configures Elastic Network Adapter Scalable Reliable Datagram settings.
   *
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * Specifies the type of network interface.
   *
   * @public
   */
  InterfaceType?: InterfaceTypeEnum | undefined;

  /**
   * IPv4 prefix configurations for the interface.
   *
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * Number of IPv4 prefixes to assign.
   *
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * Number of IPv6 addresses to assign.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * Specific IPv6 addresses for the interface.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * IPv6 prefix configurations for the interface.
   *
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * Number of IPv6 prefixes to assign.
   *
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * Index of the network card for multiple network interfaces.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * Unique identifier for the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Indicates the primary IPv6 configuration.
   *
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * Primary private IP address for the interface.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * List of private IP addresses for the interface.
   *
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * Number of additional private IP addresses to assign.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * Security groups associated with the network interface.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * Subnet identifier for the network interface.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * Configures network performance settings for WorkSpace Instance.
 *
 * @public
 */
export interface InstanceNetworkPerformanceOptionsRequest {
  /**
   * Defines bandwidth allocation strategy for network interfaces.
   *
   * @public
   */
  BandwidthWeighting?: BandwidthWeightingEnum | undefined;
}

/**
 * Defines instance placement configuration for WorkSpace Instance.
 *
 * @public
 */
export interface Placement {
  /**
   * Specifies host affinity for dedicated instances.
   *
   * @public
   */
  Affinity?: string | undefined;

  /**
   * Identifies the specific AWS availability zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Unique identifier for placement group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * Name of the placement group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * Identifies the specific dedicated host.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * ARN of the host resource group.
   *
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * Specifies partition number for partition placement groups.
   *
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * Defines instance tenancy configuration.
   *
   * @public
   */
  Tenancy?: TenancyEnum | undefined;
}

/**
 * Configures private DNS name settings for WorkSpace Instance.
 *
 * @public
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * Specifies the type of hostname configuration.
   *
   * @public
   */
  HostnameType?: HostnameTypeEnum | undefined;

  /**
   * Enables DNS A record for resource name resolution.
   *
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * Enables DNS AAAA record for resource name resolution.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * Defines comprehensive configuration for a managed WorkSpace Instance.
 *
 * @public
 */
export interface ManagedInstanceRequest {
  /**
   * Configures block device mappings for storage.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMappingRequest[] | undefined;

  /**
   * Specifies capacity reservation preferences.
   *
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * Configures CPU-specific settings.
   *
   * @public
   */
  CpuOptions?: CpuOptionsRequest | undefined;

  /**
   * Defines CPU credit configuration for burstable instances.
   *
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * Prevents API-initiated instance stop.
   *
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * Enables optimized EBS performance.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * Enables primary IPv6 address configuration.
   *
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * Configures AWS Nitro Enclave settings.
   *
   * @public
   */
  EnclaveOptions?: EnclaveOptionsRequest | undefined;

  /**
   * Configures instance hibernation capabilities.
   *
   * @public
   */
  HibernationOptions?: HibernationOptionsRequest | undefined;

  /**
   * Specifies IAM instance profile configuration.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * Identifies the Amazon Machine Image (AMI) for the instance.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * Configures marketplace-specific deployment options.
   *
   * @public
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest | undefined;

  /**
   * Specifies the WorkSpace Instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Configures specific IPv6 addresses.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * Specifies number of IPv6 addresses to assign.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * Identifies the kernel for the instance.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * Specifies the key pair for instance access.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * Configures license-related settings.
   *
   * @public
   */
  LicenseSpecifications?: LicenseConfigurationRequest[] | undefined;

  /**
   * Defines automatic maintenance settings.
   *
   * @public
   */
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest | undefined;

  /**
   * Configures instance metadata service settings.
   *
   * @public
   */
  MetadataOptions?: InstanceMetadataOptionsRequest | undefined;

  /**
   * Enables or disables detailed instance monitoring.
   *
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * Configures network interface settings.
   *
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * Defines network performance configuration.
   *
   * @public
   */
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest | undefined;

  /**
   * Specifies instance placement preferences.
   *
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * Configures private DNS name settings.
   *
   * @public
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest | undefined;

  /**
   * Specifies the primary private IP address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * Identifies the ramdisk for the instance.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * Specifies security group identifiers.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Configures security group settings.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Identifies the subnet for the instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Configures resource tagging specifications.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Provides custom initialization data for the instance.
   *
   * @public
   */
  UserData?: string | undefined;
}

/**
 * Defines the configuration parameters for creating a new WorkSpaces Instance.
 *
 * @public
 */
export interface CreateWorkspaceInstanceRequest {
  /**
   * Unique token to ensure idempotent instance creation, preventing duplicate workspace launches.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Optional metadata tags for categorizing and managing WorkSpaces Instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Comprehensive configuration settings for the WorkSpaces Instance, including network, compute, and storage parameters.
   *
   * @public
   */
  ManagedInstance: ManagedInstanceRequest | undefined;

  /**
   * Optional billing configuration for the WorkSpace Instance. Allows customers to specify their preferred billing mode when creating a new instance. Defaults to hourly billing if not specified.
   *
   * @public
   */
  BillingConfiguration?: BillingConfiguration | undefined;
}

/**
 * Returns the unique identifier for the newly created WorkSpaces Instance.
 *
 * @public
 */
export interface CreateWorkspaceInstanceResponse {
  /**
   * Unique identifier assigned to the newly created WorkSpaces Instance.
   *
   * @public
   */
  WorkspaceInstanceId?: string | undefined;
}

/**
 * Specifies the volume to delete.
 *
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * Identifier of the volume to delete.
   *
   * @public
   */
  VolumeId: string | undefined;
}

/**
 * Confirms volume deletion.
 *
 * @public
 */
export interface DeleteVolumeResponse {}

/**
 * The WorkSpace to delete
 *
 * @public
 */
export interface DeleteWorkspaceInstanceRequest {
  /**
   * Unique identifier of the WorkSpaces Instance targeted for deletion.
   *
   * @public
   */
  WorkspaceInstanceId: string | undefined;
}

/**
 * Confirms the successful deletion of the specified WorkSpace Instance.
 *
 * @public
 */
export interface DeleteWorkspaceInstanceResponse {}

/**
 * Specifies volume detachment parameters.
 *
 * @public
 */
export interface DisassociateVolumeRequest {
  /**
   * WorkSpace Instance to detach volume from.
   *
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * Volume to be detached.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Device path of volume to detach.
   *
   * @public
   */
  Device?: string | undefined;

  /**
   * Mode for volume detachment.
   *
   * @public
   */
  DisassociateMode?: DisassociateModeEnum | undefined;
}

/**
 * Confirms volume detachment.
 *
 * @public
 */
export interface DisassociateVolumeResponse {}

/**
 * Captures detailed error information for EC2 instance operations.
 *
 * @public
 */
export interface EC2InstanceError {
  /**
   * Unique error code identifying the specific EC2 instance error.
   *
   * @public
   */
  EC2ErrorCode?: string | undefined;

  /**
   * Type of exception encountered during EC2 instance operation.
   *
   * @public
   */
  EC2ExceptionType?: string | undefined;

  /**
   * Detailed description of the EC2 instance error.
   *
   * @public
   */
  EC2ErrorMessage?: string | undefined;
}

/**
 * Represents an EC2 instance managed by WorkSpaces.
 *
 * @public
 */
export interface EC2ManagedInstance {
  /**
   * Unique identifier of the managed EC2 instance.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Identifies the WorkSpaces Instance to retrieve detailed information for.
 *
 * @public
 */
export interface GetWorkspaceInstanceRequest {
  /**
   * Unique identifier of the WorkSpace Instance to retrieve.
   *
   * @public
   */
  WorkspaceInstanceId: string | undefined;
}

/**
 * Captures errors specific to WorkSpace Instance operations.
 *
 * @public
 */
export interface WorkspaceInstanceError {
  /**
   * Unique error code for the WorkSpace Instance error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Detailed description of the WorkSpace Instance error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Provides comprehensive details about the requested WorkSpaces Instance.
 *
 * @public
 */
export interface GetWorkspaceInstanceResponse {
  /**
   * Captures any errors specific to the WorkSpace Instance lifecycle.
   *
   * @public
   */
  WorkspaceInstanceErrors?: WorkspaceInstanceError[] | undefined;

  /**
   * Includes any underlying EC2 instance errors encountered.
   *
   * @public
   */
  EC2InstanceErrors?: EC2InstanceError[] | undefined;

  /**
   * Current provisioning state of the WorkSpaces Instance.
   *
   * @public
   */
  ProvisionState?: ProvisionStateEnum | undefined;

  /**
   * Unique identifier of the retrieved WorkSpaces Instance.
   *
   * @public
   */
  WorkspaceInstanceId?: string | undefined;

  /**
   * Details of the associated EC2 managed instance.
   *
   * @public
   */
  EC2ManagedInstance?: EC2ManagedInstance | undefined;

  /**
   * Returns the current billing configuration for the WorkSpace Instance, indicating the active billing mode.
   *
   * @public
   */
  BillingConfiguration?: BillingConfiguration | undefined;
}

/**
 * Defines filtering criteria for WorkSpace Instance type searches. Combines multiple filter conditions including billing mode, platform type, and tenancy to help customers find instance types that meet their specific requirements.
 *
 * @public
 */
export interface InstanceConfigurationFilter {
  /**
   * Filters WorkSpace Instance types based on supported billing modes. Allows customers to search for instance types that support their preferred billing model, such as HOURLY or MONTHLY billing.
   *
   * @public
   */
  BillingMode: BillingMode | undefined;

  /**
   * Filters WorkSpace Instance types by operating system platform. Allows customers to find instances that support their desired OS, such as Windows, Linux/UNIX, Ubuntu Pro, RHEL, or SUSE.
   *
   * @public
   */
  PlatformType: PlatformTypeEnum | undefined;

  /**
   * Filters WorkSpace Instance types by tenancy model. Allows customers to find instances that match their tenancy requirements, such as SHARED or DEDICATED.
   *
   * @public
   */
  Tenancy: InstanceConfigurationTenancyEnum | undefined;
}

/**
 * Defines input parameters for retrieving supported WorkSpaces Instances instance types.
 *
 * @public
 */
export interface ListInstanceTypesRequest {
  /**
   * Maximum number of instance types to return in a single API call. Enables pagination of instance type results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token for retrieving subsequent pages of instance type results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional filter to narrow instance type results based on configuration requirements. Only returns instance types that support the specified combination of tenancy, platform type, and billing mode.
   *
   * @public
   */
  InstanceConfigurationFilter?: InstanceConfigurationFilter | undefined;
}

/**
 * Represents a single valid configuration combination that an instance type supports, combining tenancy, platform type, and billing mode into one complete configuration specification.
 *
 * @public
 */
export interface SupportedInstanceConfiguration {
  /**
   * Specifies the billing mode supported in this configuration combination.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * Specifies the operating system platform supported in this configuration combination.
   *
   * @public
   */
  PlatformType?: PlatformTypeEnum | undefined;

  /**
   * Specifies the tenancy model supported in this configuration combination.
   *
   * @public
   */
  Tenancy?: InstanceConfigurationTenancyEnum | undefined;
}

/**
 * Provides details about a specific WorkSpace Instance type.
 *
 * @public
 */
export interface InstanceTypeInfo {
  /**
   * Unique identifier for the WorkSpace Instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Lists all valid combinations of tenancy, platform type, and billing mode supported for the specific WorkSpace Instance type. Contains the complete set of configuration options available for this instance type.
   *
   * @public
   */
  SupportedInstanceConfigurations?: SupportedInstanceConfiguration[] | undefined;
}

/**
 * Contains the list of instance types supported by WorkSpaces Instances.
 *
 * @public
 */
export interface ListInstanceTypesResponse {
  /**
   * Collection of supported instance types for WorkSpaces Instances.
   *
   * @public
   */
  InstanceTypes: InstanceTypeInfo[] | undefined;

  /**
   * Token for retrieving additional instance types if the result set is paginated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines input parameters for retrieving supported WorkSpaces Instances regions.
 *
 * @public
 */
export interface ListRegionsRequest {
  /**
   * Maximum number of regions to return in a single API call. Enables pagination of region results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token for retrieving subsequent pages of region results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents an AWS region supported by WorkSpaces Instances.
 *
 * @public
 */
export interface Region {
  /**
   * Name of the AWS region.
   *
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * Contains the list of supported AWS regions for WorkSpaces Instances.
 *
 * @public
 */
export interface ListRegionsResponse {
  /**
   * Collection of AWS regions supported by WorkSpaces Instances.
   *
   * @public
   */
  Regions: Region[] | undefined;

  /**
   * Token for retrieving additional regions if the result set is paginated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the WorkSpace Instance to retrieve tags for.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Unique identifier of the WorkSpace Instance.
   *
   * @public
   */
  WorkspaceInstanceId: string | undefined;
}

/**
 * Returns the list of tags for the specified WorkSpace Instance.
 *
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Collection of tags associated with the WorkSpace Instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Defines filters and pagination parameters for retrieving WorkSpaces Instances.
 *
 * @public
 */
export interface ListWorkspaceInstancesRequest {
  /**
   * Filter WorkSpaces Instances by their current provisioning states.
   *
   * @public
   */
  ProvisionStates?: ProvisionStateEnum[] | undefined;

  /**
   * Maximum number of WorkSpaces Instances to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token for retrieving subsequent pages of WorkSpaces Instances.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a single WorkSpace Instance.
 *
 * @public
 */
export interface WorkspaceInstance {
  /**
   * Current provisioning state of the WorkSpace Instance.
   *
   * @public
   */
  ProvisionState?: ProvisionStateEnum | undefined;

  /**
   * Unique identifier for the WorkSpace Instance.
   *
   * @public
   */
  WorkspaceInstanceId?: string | undefined;

  /**
   * Details of the associated EC2 managed instance.
   *
   * @public
   */
  EC2ManagedInstance?: EC2ManagedInstance | undefined;
}

/**
 * Contains the list of WorkSpaces Instances matching the specified criteria.
 *
 * @public
 */
export interface ListWorkspaceInstancesResponse {
  /**
   * Collection of WorkSpaces Instances returned by the query.
   *
   * @public
   */
  WorkspaceInstances: WorkspaceInstance[] | undefined;

  /**
   * Token for retrieving additional WorkSpaces Instances if the result set is paginated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the parameters for modifying a volume, including the target size, volume type, IOPS, or throughput.
 *
 * @public
 */
export interface ModifyVolumeRequest {
  /**
   * Specifies the identifier of the volume to modify.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Specifies the target size of the volume, in GiB. The target size must be greater than or equal to the current size of the volume. If you don't specify a size, the current size is retained.
   *
   * @public
   */
  SizeInGB?: number | undefined;

  /**
   * Specifies the target Amazon Elastic Block Store (Amazon EBS) volume type. If you don't specify a volume type, the current volume type is retained.
   *
   * @public
   */
  VolumeType?: VolumeTypeEnum | undefined;

  /**
   * Specifies the target IOPS rate of the volume. This parameter is valid only for `gp3`, `io1`, and `io2` volumes. If you don't specify IOPS and keep the same volume type, the current IOPS rate is retained.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies the target throughput of the volume, in MiB/s. This parameter is valid only for `gp3` volumes. If you don't specify throughput and the volume remains `gp3`, the current throughput is retained.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Unique token to ensure idempotent volume modification, preventing duplicate volume modifications.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Contains the target configuration of the volume after the modification, including the size, volume type, IOPS, and throughput where applicable.
 *
 * @public
 */
export interface ModifyVolumeResponse {
  /**
   * Specifies the identifier of the modified volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * Specifies the target size of the volume, in GiB.
   *
   * @public
   */
  TargetSize?: number | undefined;

  /**
   * Specifies the target Amazon EBS volume type.
   *
   * @public
   */
  TargetVolumeType?: VolumeTypeEnum | undefined;

  /**
   * Specifies the target IOPS rate of the volume.
   *
   * @public
   */
  TargetIops?: number | undefined;

  /**
   * Specifies the target throughput of the volume, in MiB/s.
   *
   * @public
   */
  TargetThroughput?: number | undefined;
}

/**
 * Specifies tags to add to a WorkSpace Instance.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * Unique identifier of the WorkSpace Instance to tag.
   *
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * Tags to be added to the WorkSpace Instance.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * Confirms successful tag addition.
 *
 * @public
 */
export interface TagResourceResponse {}

/**
 * Specifies tags to remove from a WorkSpace Instance.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Unique identifier of the WorkSpace Instance to untag.
   *
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * Keys of tags to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Confirms successful tag removal.
 *
 * @public
 */
export interface UntagResourceResponse {}
