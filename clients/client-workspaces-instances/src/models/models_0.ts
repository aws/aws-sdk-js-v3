// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkspacesInstancesServiceException as __BaseException } from "./WorkspacesInstancesServiceException";

/**
 * <p>Indicates insufficient permissions to perform the requested action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Detailed explanation of the access denial.</p>
   * @public
   */
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
 * @enum
 */
export const AmdSevSnpEnum = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type AmdSevSnpEnum = (typeof AmdSevSnpEnum)[keyof typeof AmdSevSnpEnum];

/**
 * <p>Specifies volume attachment parameters.</p>
 * @public
 */
export interface AssociateVolumeRequest {
  /**
   * <p>WorkSpace Instance to attach volume to.</p>
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * <p>Volume to be attached.</p>
   * @public
   */
  VolumeId: string | undefined;

  /**
   * <p>Device path for volume attachment.</p>
   * @public
   */
  Device: string | undefined;
}

/**
 * <p>Confirms volume attachment.</p>
 * @public
 */
export interface AssociateVolumeResponse {}

/**
 * <p>Signals a conflict with the current state of the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the conflict encountered.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the conflicting resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the conflicting resource.</p>
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
 * <p>Indicates an unexpected server-side error occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Description of the internal server error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Recommended wait time before retrying the request.</p>
   * @public
   */
  RetryAfterSeconds?: number | undefined;
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
 * <p>Indicates the requested resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Details about the missing resource.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource that was not found.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource that was not found.</p>
   * @public
   */
  ResourceType: string | undefined;
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
  }
}

/**
 * <p>Indicates the request rate has exceeded limits.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>Description of the throttling event.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Code identifying the service experiencing throttling.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * <p>Specific code for the throttling quota.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>Recommended wait time before retrying the request.</p>
   * @public
   */
  RetryAfterSeconds?: number | undefined;
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
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>Represents a validation error field in an API request.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Name of the field that failed validation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Reason for the validation failure.</p>
   * @public
   */
  Reason: string | undefined;

  /**
   * <p>Detailed error message describing the validation issue.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  DEPENDENCY_FAILURE: "DEPENDENCY_FAILURE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
  UNSUPPORTED_OPERATION: "UNSUPPORTED_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>Indicates invalid input parameters in the request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Overall description of validation failures.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Specific reason for the validation failure.</p>
   * @public
   */
  Reason: ValidationExceptionReason | undefined;

  /**
   * <p>List of fields that failed validation.</p>
   * @public
   */
  FieldList?: ValidationExceptionField[] | undefined;
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
    this.FieldList = opts.FieldList;
  }
}

/**
 * @public
 * @enum
 */
export const AutoRecoveryEnum = {
  DEFAULT: "default",
  DISABLED: "disabled",
} as const;

/**
 * @public
 */
export type AutoRecoveryEnum = (typeof AutoRecoveryEnum)[keyof typeof AutoRecoveryEnum];

/**
 * @public
 * @enum
 */
export const BandwidthWeightingEnum = {
  DEFAULT: "default",
  EBS_1: "ebs-1",
  VPC_1: "vpc-1",
} as const;

/**
 * @public
 */
export type BandwidthWeightingEnum = (typeof BandwidthWeightingEnum)[keyof typeof BandwidthWeightingEnum];

/**
 * @public
 * @enum
 */
export const VolumeTypeEnum = {
  GP2: "gp2",
  GP3: "gp3",
  IO1: "io1",
  IO2: "io2",
  SC1: "sc1",
  ST1: "st1",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type VolumeTypeEnum = (typeof VolumeTypeEnum)[keyof typeof VolumeTypeEnum];

/**
 * <p>Defines configuration for an Elastic Block Store volume.</p>
 * @public
 */
export interface EbsBlockDevice {
  /**
   * <p>Type of EBS volume (e.g., gp2, io1).</p>
   * @public
   */
  VolumeType?: VolumeTypeEnum | undefined;

  /**
   * <p>Indicates if the volume is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>KMS key used for volume encryption.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Input/output operations per second for the volume.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Volume data transfer rate.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Size of the EBS volume in gigabytes.</p>
   * @public
   */
  VolumeSize?: number | undefined;
}

/**
 * <p>Defines device mapping for WorkSpace Instance storage.</p>
 * @public
 */
export interface BlockDeviceMappingRequest {
  /**
   * <p>Name of the device for storage mapping.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>EBS volume configuration for the device.</p>
   * @public
   */
  Ebs?: EbsBlockDevice | undefined;

  /**
   * <p>Indicates device should not be mapped.</p>
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * <p>Virtual device name for ephemeral storage.</p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationPreferenceEnum = {
  CAPACITY_RESERVATIONS_ONLY: "capacity-reservations-only",
  NONE: "none",
  OPEN: "open",
} as const;

/**
 * @public
 */
export type CapacityReservationPreferenceEnum =
  (typeof CapacityReservationPreferenceEnum)[keyof typeof CapacityReservationPreferenceEnum];

/**
 * <p>Identifies a specific capacity reservation.</p>
 * @public
 */
export interface CapacityReservationTarget {
  /**
   * <p>Unique identifier for the capacity reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>ARN of the capacity reservation resource group.</p>
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * <p>Specifies capacity reservation preferences.</p>
 * @public
 */
export interface CapacityReservationSpecification {
  /**
   * <p>Preference for using capacity reservation.</p>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreferenceEnum | undefined;

  /**
   * <p>Specific capacity reservation target.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * <p>Defines connection tracking parameters for network interfaces.</p>
 * @public
 */
export interface ConnectionTrackingSpecificationRequest {
  /**
   * <p>Timeout for established TCP connections.</p>
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * <p>Timeout for UDP stream connections.</p>
   * @public
   */
  UdpStreamTimeout?: number | undefined;

  /**
   * <p>General timeout for UDP connections.</p>
   * @public
   */
  UdpTimeout?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const CpuCreditsEnum = {
  STANDARD: "standard",
  UNLIMITED: "unlimited",
} as const;

/**
 * @public
 */
export type CpuCreditsEnum = (typeof CpuCreditsEnum)[keyof typeof CpuCreditsEnum];

/**
 * <p>Configures CPU-specific settings for WorkSpace Instance.</p>
 * @public
 */
export interface CpuOptionsRequest {
  /**
   * <p>AMD Secure Encrypted Virtualization configuration.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpEnum | undefined;

  /**
   * <p>Number of CPU cores to allocate.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>Number of threads per CPU core.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceTypeEnum = {
  INSTANCE: "instance",
  NETWORK_INTERFACE: "network-interface",
  SPOT_INSTANCES_REQUEST: "spot-instances-request",
  VOLUME: "volume",
} as const;

/**
 * @public
 */
export type ResourceTypeEnum = (typeof ResourceTypeEnum)[keyof typeof ResourceTypeEnum];

/**
 * <p>Represents a key-value metadata tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Unique identifier for the tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Value associated with the tag key.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Defines tagging configuration for a resource.</p>
 * @public
 */
export interface TagSpecification {
  /**
   * <p>Type of resource being tagged.</p>
   * @public
   */
  ResourceType?: ResourceTypeEnum | undefined;

  /**
   * <p>Collection of tags for the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Specifies volume creation parameters.</p>
 * @public
 */
export interface CreateVolumeRequest {
  /**
   * <p>Availability zone for the volume.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Unique token to prevent duplicate volume creation.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates if the volume should be encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Input/output operations per second for the volume.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>KMS key for volume encryption.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Volume size in gigabytes.</p>
   * @public
   */
  SizeInGB?: number | undefined;

  /**
   * <p>Source snapshot for volume creation.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>Metadata tags for the volume.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Volume throughput performance.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Type of EBS volume.</p>
   * @public
   */
  VolumeType?: VolumeTypeEnum | undefined;
}

/**
 * <p>Returns the created volume identifier.</p>
 * @public
 */
export interface CreateVolumeResponse {
  /**
   * <p>Unique identifier for the new volume.</p>
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * <p>Indicates that a service quota has been exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the quota limitation.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource related to the quota.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of resource related to the quota.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Code identifying the service with the quota limitation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specific code for the exceeded quota.</p>
   * @public
   */
  QuotaCode: string | undefined;
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
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
  }
}

/**
 * <p>Defines CPU credit configuration for burstable instances.</p>
 * @public
 */
export interface CreditSpecificationRequest {
  /**
   * <p>CPU credit specification mode.</p>
   * @public
   */
  CpuCredits?: CpuCreditsEnum | undefined;
}

/**
 * <p>Configures AWS Nitro Enclave options for the WorkSpace Instance.</p>
 * @public
 */
export interface EnclaveOptionsRequest {
  /**
   * <p>Enables or disables AWS Nitro Enclaves for enhanced security.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Defines hibernation configuration for the WorkSpace Instance.</p>
 * @public
 */
export interface HibernationOptionsRequest {
  /**
   * <p>Enables or disables instance hibernation capability.</p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>Defines IAM instance profile configuration for WorkSpace Instance.</p>
 * @public
 */
export interface IamInstanceProfileSpecification {
  /**
   * <p>Amazon Resource Name (ARN) of the IAM instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Name of the IAM instance profile.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MarketTypeEnum = {
  CAPACITY_BLOCK: "capacity-block",
  SPOT: "spot",
} as const;

/**
 * @public
 */
export type MarketTypeEnum = (typeof MarketTypeEnum)[keyof typeof MarketTypeEnum];

/**
 * @public
 * @enum
 */
export const InstanceInterruptionBehaviorEnum = {
  HIBERNATE: "hibernate",
  STOP: "stop",
} as const;

/**
 * @public
 */
export type InstanceInterruptionBehaviorEnum =
  (typeof InstanceInterruptionBehaviorEnum)[keyof typeof InstanceInterruptionBehaviorEnum];

/**
 * @public
 * @enum
 */
export const SpotInstanceTypeEnum = {
  ONE_TIME: "one-time",
  PERSISTENT: "persistent",
} as const;

/**
 * @public
 */
export type SpotInstanceTypeEnum = (typeof SpotInstanceTypeEnum)[keyof typeof SpotInstanceTypeEnum];

/**
 * <p>Defines configuration for spot instance deployment.</p>
 * @public
 */
export interface SpotMarketOptions {
  /**
   * <p>Duration of spot instance block reservation.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>Specifies behavior when spot instance is interrupted.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum | undefined;

  /**
   * <p>Maximum hourly price for spot instance.</p>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>Defines the type of spot instance request.</p>
   * @public
   */
  SpotInstanceType?: SpotInstanceTypeEnum | undefined;

  /**
   * <p>Timestamp until which spot instance request is valid.</p>
   * @public
   */
  ValidUntilUtc?: Date | undefined;
}

/**
 * <p>Configures marketplace-specific instance deployment options.</p>
 * @public
 */
export interface InstanceMarketOptionsRequest {
  /**
   * <p>Specifies the type of marketplace for instance deployment.</p>
   * @public
   */
  MarketType?: MarketTypeEnum | undefined;

  /**
   * <p>Configuration options for spot instance deployment.</p>
   * @public
   */
  SpotOptions?: SpotMarketOptions | undefined;
}

/**
 * <p>Represents an IPv6 address configuration for a WorkSpace Instance.</p>
 * @public
 */
export interface InstanceIpv6Address {
  /**
   * <p>Specific IPv6 address assigned to the instance.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>Indicates if this is the primary IPv6 address for the instance.</p>
   * @public
   */
  IsPrimaryIpv6?: boolean | undefined;
}

/**
 * <p>Specifies license configuration for WorkSpace Instance.</p>
 * @public
 */
export interface LicenseConfigurationRequest {
  /**
   * <p>ARN of the license configuration for the WorkSpace Instance.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>Configures automatic maintenance settings for WorkSpace Instance.</p>
 * @public
 */
export interface InstanceMaintenanceOptionsRequest {
  /**
   * <p>Enables or disables automatic instance recovery.</p>
   * @public
   */
  AutoRecovery?: AutoRecoveryEnum | undefined;
}

/**
 * @public
 * @enum
 */
export const HttpEndpointEnum = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type HttpEndpointEnum = (typeof HttpEndpointEnum)[keyof typeof HttpEndpointEnum];

/**
 * @public
 * @enum
 */
export const HttpProtocolIpv6Enum = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type HttpProtocolIpv6Enum = (typeof HttpProtocolIpv6Enum)[keyof typeof HttpProtocolIpv6Enum];

/**
 * @public
 * @enum
 */
export const HttpTokensEnum = {
  OPTIONAL: "optional",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type HttpTokensEnum = (typeof HttpTokensEnum)[keyof typeof HttpTokensEnum];

/**
 * @public
 * @enum
 */
export const InstanceMetadataTagsEnum = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type InstanceMetadataTagsEnum = (typeof InstanceMetadataTagsEnum)[keyof typeof InstanceMetadataTagsEnum];

/**
 * <p>Defines instance metadata service configuration.</p>
 * @public
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * <p>Enables or disables HTTP endpoint for instance metadata.</p>
   * @public
   */
  HttpEndpoint?: HttpEndpointEnum | undefined;

  /**
   * <p>Configures IPv6 support for instance metadata HTTP protocol.</p>
   * @public
   */
  HttpProtocolIpv6?: HttpProtocolIpv6Enum | undefined;

  /**
   * <p>Sets maximum number of network hops for metadata PUT responses.</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Configures token requirement for instance metadata retrieval.</p>
   * @public
   */
  HttpTokens?: HttpTokensEnum | undefined;

  /**
   * <p>Enables or disables instance metadata tags retrieval.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsEnum | undefined;
}

/**
 * <p>Configures detailed monitoring for WorkSpace Instance.</p>
 * @public
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * <p>Enables or disables detailed instance monitoring.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Specifies UDP configuration for ENA SRD.</p>
 * @public
 */
export interface EnaSrdUdpSpecificationRequest {
  /**
   * <p>Enables or disables ENA SRD for UDP traffic.</p>
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * <p>Defines Elastic Network Adapter (ENA) Scalable Reliable Datagram (SRD) configuration.</p>
 * @public
 */
export interface EnaSrdSpecificationRequest {
  /**
   * <p>Enables or disables ENA SRD for network performance.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Configures UDP-specific ENA SRD settings.</p>
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecificationRequest | undefined;
}

/**
 * @public
 * @enum
 */
export const InterfaceTypeEnum = {
  EFA: "efa",
  EFA_ONLY: "efa-only",
  INTERFACE: "interface",
} as const;

/**
 * @public
 */
export type InterfaceTypeEnum = (typeof InterfaceTypeEnum)[keyof typeof InterfaceTypeEnum];

/**
 * <p>Specifies IPv4 prefix configuration for network interfaces.</p>
 * @public
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * <p>Specific IPv4 prefix for network interface configuration.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * <p>Specifies IPv6 prefix configuration for network interfaces.</p>
 * @public
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * <p>Specific IPv6 prefix for network interface configuration.</p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>Defines private IP address configuration for network interface.</p>
 * @public
 */
export interface PrivateIpAddressSpecification {
  /**
   * <p>Indicates if this is the primary private IP address.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>Specific private IP address for the network interface.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>Defines network interface configuration for WorkSpace Instance.</p>
 * @public
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * <p>Enables carrier IP address association.</p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>Enables public IP address assignment.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Configures network connection tracking parameters.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * <p>Descriptive text for the network interface.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Unique index for the network interface.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>Configures Elastic Network Adapter Scalable Reliable Datagram settings.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * <p>Specifies the type of network interface.</p>
   * @public
   */
  InterfaceType?: InterfaceTypeEnum | undefined;

  /**
   * <p>IPv4 prefix configurations for the interface.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * <p>Number of IPv4 prefixes to assign.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>Number of IPv6 addresses to assign.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>Specific IPv6 addresses for the interface.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>IPv6 prefix configurations for the interface.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * <p>Number of IPv6 prefixes to assign.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>Index of the network card for multiple network interfaces.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>Unique identifier for the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Indicates the primary IPv6 configuration.</p>
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * <p>Primary private IP address for the interface.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>List of private IP addresses for the interface.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * <p>Number of additional private IP addresses to assign.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>Security groups associated with the network interface.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Subnet identifier for the network interface.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Configures network performance settings for WorkSpace Instance.</p>
 * @public
 */
export interface InstanceNetworkPerformanceOptionsRequest {
  /**
   * <p>Defines bandwidth allocation strategy for network interfaces.</p>
   * @public
   */
  BandwidthWeighting?: BandwidthWeightingEnum | undefined;
}

/**
 * @public
 * @enum
 */
export const TenancyEnum = {
  DEDICATED: "dedicated",
  DEFAULT: "default",
  HOST: "host",
} as const;

/**
 * @public
 */
export type TenancyEnum = (typeof TenancyEnum)[keyof typeof TenancyEnum];

/**
 * <p>Defines instance placement configuration for WorkSpace Instance.</p>
 * @public
 */
export interface Placement {
  /**
   * <p>Specifies host affinity for dedicated instances.</p>
   * @public
   */
  Affinity?: string | undefined;

  /**
   * <p>Identifies the specific AWS availability zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Unique identifier for placement group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>Name of the placement group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>Identifies the specific dedicated host.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>ARN of the host resource group.</p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>Specifies partition number for partition placement groups.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>Defines instance tenancy configuration.</p>
   * @public
   */
  Tenancy?: TenancyEnum | undefined;
}

/**
 * @public
 * @enum
 */
export const HostnameTypeEnum = {
  IP_NAME: "ip-name",
  RESOURCE_NAME: "resource-name",
} as const;

/**
 * @public
 */
export type HostnameTypeEnum = (typeof HostnameTypeEnum)[keyof typeof HostnameTypeEnum];

/**
 * <p>Configures private DNS name settings for WorkSpace Instance.</p>
 * @public
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * <p>Specifies the type of hostname configuration.</p>
   * @public
   */
  HostnameType?: HostnameTypeEnum | undefined;

  /**
   * <p>Enables DNS A record for resource name resolution.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Enables DNS AAAA record for resource name resolution.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * <p>Defines comprehensive configuration for a managed WorkSpace Instance.</p>
 * @public
 */
export interface ManagedInstanceRequest {
  /**
   * <p>Configures block device mappings for storage.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMappingRequest[] | undefined;

  /**
   * <p>Specifies capacity reservation preferences.</p>
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * <p>Configures CPU-specific settings.</p>
   * @public
   */
  CpuOptions?: CpuOptionsRequest | undefined;

  /**
   * <p>Defines CPU credit configuration for burstable instances.</p>
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * <p>Prevents API-initiated instance stop.</p>
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * <p>Enables optimized EBS performance.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>Enables primary IPv6 address configuration.</p>
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * <p>Configures AWS Nitro Enclave settings.</p>
   * @public
   */
  EnclaveOptions?: EnclaveOptionsRequest | undefined;

  /**
   * <p>Configures instance hibernation capabilities.</p>
   * @public
   */
  HibernationOptions?: HibernationOptionsRequest | undefined;

  /**
   * <p>Specifies IAM instance profile configuration.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * <p>Identifies the Amazon Machine Image (AMI) for the instance.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>Configures marketplace-specific deployment options.</p>
   * @public
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest | undefined;

  /**
   * <p>Specifies the WorkSpace Instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>Configures specific IPv6 addresses.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>Specifies number of IPv6 addresses to assign.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>Identifies the kernel for the instance.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>Specifies the key pair for instance access.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>Configures license-related settings.</p>
   * @public
   */
  LicenseSpecifications?: LicenseConfigurationRequest[] | undefined;

  /**
   * <p>Defines automatic maintenance settings.</p>
   * @public
   */
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest | undefined;

  /**
   * <p>Configures instance metadata service settings.</p>
   * @public
   */
  MetadataOptions?: InstanceMetadataOptionsRequest | undefined;

  /**
   * <p>Enables or disables detailed instance monitoring.</p>
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * <p>Configures network interface settings.</p>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>Defines network performance configuration.</p>
   * @public
   */
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest | undefined;

  /**
   * <p>Specifies instance placement preferences.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>Configures private DNS name settings.</p>
   * @public
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest | undefined;

  /**
   * <p>Specifies the primary private IP address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Identifies the ramdisk for the instance.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>Specifies security group identifiers.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Configures security group settings.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Identifies the subnet for the instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Configures resource tagging specifications.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Provides custom initialization data for the instance.</p>
   * @public
   */
  UserData?: string | undefined;
}

/**
 * <p>Defines the configuration parameters for creating a new WorkSpaces Instance.</p>
 * @public
 */
export interface CreateWorkspaceInstanceRequest {
  /**
   * <p>Unique token to ensure idempotent instance creation, preventing duplicate workspace launches.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Optional metadata tags for categorizing and managing WorkSpaces Instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Comprehensive configuration settings for the WorkSpaces Instance, including network, compute, and storage parameters.</p>
   * @public
   */
  ManagedInstance: ManagedInstanceRequest | undefined;
}

/**
 * <p>Returns the unique identifier for the newly created WorkSpaces Instance.</p>
 * @public
 */
export interface CreateWorkspaceInstanceResponse {
  /**
   * <p>Unique identifier assigned to the newly created WorkSpaces Instance.</p>
   * @public
   */
  WorkspaceInstanceId?: string | undefined;
}

/**
 * <p>Specifies the volume to delete.</p>
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * <p>Identifier of the volume to delete.</p>
   * @public
   */
  VolumeId: string | undefined;
}

/**
 * <p>Confirms volume deletion.</p>
 * @public
 */
export interface DeleteVolumeResponse {}

/**
 * <p>The WorkSpace to delete</p>
 * @public
 */
export interface DeleteWorkspaceInstanceRequest {
  /**
   * <p>Unique identifier of the WorkSpaces Instance targeted for deletion.</p>
   * @public
   */
  WorkspaceInstanceId: string | undefined;
}

/**
 * <p>Confirms the successful deletion of the specified WorkSpace Instance.</p>
 * @public
 */
export interface DeleteWorkspaceInstanceResponse {}

/**
 * @public
 * @enum
 */
export const DisassociateModeEnum = {
  FORCE: "FORCE",
  NO_FORCE: "NO_FORCE",
} as const;

/**
 * @public
 */
export type DisassociateModeEnum = (typeof DisassociateModeEnum)[keyof typeof DisassociateModeEnum];

/**
 * <p>Specifies volume detachment parameters.</p>
 * @public
 */
export interface DisassociateVolumeRequest {
  /**
   * <p>WorkSpace Instance to detach volume from.</p>
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * <p>Volume to be detached.</p>
   * @public
   */
  VolumeId: string | undefined;

  /**
   * <p>Device path of volume to detach.</p>
   * @public
   */
  Device?: string | undefined;

  /**
   * <p>Mode for volume detachment.</p>
   * @public
   */
  DisassociateMode?: DisassociateModeEnum | undefined;
}

/**
 * <p>Confirms volume detachment.</p>
 * @public
 */
export interface DisassociateVolumeResponse {}

/**
 * <p>Captures detailed error information for EC2 instance operations.</p>
 * @public
 */
export interface EC2InstanceError {
  /**
   * <p>Unique error code identifying the specific EC2 instance error.</p>
   * @public
   */
  EC2ErrorCode?: string | undefined;

  /**
   * <p>Type of exception encountered during EC2 instance operation.</p>
   * @public
   */
  EC2ExceptionType?: string | undefined;

  /**
   * <p>Detailed description of the EC2 instance error.</p>
   * @public
   */
  EC2ErrorMessage?: string | undefined;
}

/**
 * <p>Represents an EC2 instance managed by WorkSpaces.</p>
 * @public
 */
export interface EC2ManagedInstance {
  /**
   * <p>Unique identifier of the managed EC2 instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * <p>Identifies the WorkSpaces Instance to retrieve detailed information for.</p>
 * @public
 */
export interface GetWorkspaceInstanceRequest {
  /**
   * <p>Unique identifier of the WorkSpace Instance to retrieve.</p>
   * @public
   */
  WorkspaceInstanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionStateEnum = {
  ALLOCATED: "ALLOCATED",
  ALLOCATING: "ALLOCATING",
  DEALLOCATED: "DEALLOCATED",
  DEALLOCATING: "DEALLOCATING",
  ERROR_ALLOCATING: "ERROR_ALLOCATING",
  ERROR_DEALLOCATING: "ERROR_DEALLOCATING",
} as const;

/**
 * @public
 */
export type ProvisionStateEnum = (typeof ProvisionStateEnum)[keyof typeof ProvisionStateEnum];

/**
 * <p>Captures errors specific to WorkSpace Instance operations.</p>
 * @public
 */
export interface WorkspaceInstanceError {
  /**
   * <p>Unique error code for the WorkSpace Instance error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Detailed description of the WorkSpace Instance error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Provides comprehensive details about the requested WorkSpaces Instance.</p>
 * @public
 */
export interface GetWorkspaceInstanceResponse {
  /**
   * <p>Captures any errors specific to the WorkSpace Instance lifecycle.</p>
   * @public
   */
  WorkspaceInstanceErrors?: WorkspaceInstanceError[] | undefined;

  /**
   * <p>Includes any underlying EC2 instance errors encountered.</p>
   * @public
   */
  EC2InstanceErrors?: EC2InstanceError[] | undefined;

  /**
   * <p>Current provisioning state of the WorkSpaces Instance.</p>
   * @public
   */
  ProvisionState?: ProvisionStateEnum | undefined;

  /**
   * <p>Unique identifier of the retrieved WorkSpaces Instance.</p>
   * @public
   */
  WorkspaceInstanceId?: string | undefined;

  /**
   * <p>Details of the associated EC2 managed instance.</p>
   * @public
   */
  EC2ManagedInstance?: EC2ManagedInstance | undefined;
}

/**
 * <p>Defines input parameters for retrieving supported WorkSpaces Instances instance types.</p>
 * @public
 */
export interface ListInstanceTypesRequest {
  /**
   * <p>Maximum number of instance types to return in a single API call. Enables pagination of instance type results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token for retrieving subsequent pages of instance type results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Provides details about a specific WorkSpace Instance type.</p>
 * @public
 */
export interface InstanceTypeInfo {
  /**
   * <p>Unique identifier for the WorkSpace Instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * <p>Contains the list of instance types supported by WorkSpaces Instances.</p>
 * @public
 */
export interface ListInstanceTypesResponse {
  /**
   * <p>Collection of supported instance types for WorkSpaces Instances.</p>
   * @public
   */
  InstanceTypes: InstanceTypeInfo[] | undefined;

  /**
   * <p>Token for retrieving additional instance types if the result set is paginated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines input parameters for retrieving supported WorkSpaces Instances regions.</p>
 * @public
 */
export interface ListRegionsRequest {
  /**
   * <p>Maximum number of regions to return in a single API call. Enables pagination of region results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token for retrieving subsequent pages of region results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents an AWS region supported by WorkSpaces Instances.</p>
 * @public
 */
export interface Region {
  /**
   * <p>Name of the AWS region.</p>
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * <p>Contains the list of supported AWS regions for WorkSpaces Instances.</p>
 * @public
 */
export interface ListRegionsResponse {
  /**
   * <p>Collection of AWS regions supported by WorkSpaces Instances.</p>
   * @public
   */
  Regions: Region[] | undefined;

  /**
   * <p>Token for retrieving additional regions if the result set is paginated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies the WorkSpace Instance to retrieve tags for.</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Unique identifier of the WorkSpace Instance.</p>
   * @public
   */
  WorkspaceInstanceId: string | undefined;
}

/**
 * <p>Returns the list of tags for the specified WorkSpace Instance.</p>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Collection of tags associated with the WorkSpace Instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Defines filters and pagination parameters for retrieving WorkSpaces Instances.</p>
 * @public
 */
export interface ListWorkspaceInstancesRequest {
  /**
   * <p>Filter WorkSpaces Instances by their current provisioning states.</p>
   * @public
   */
  ProvisionStates?: ProvisionStateEnum[] | undefined;

  /**
   * <p>Maximum number of WorkSpaces Instances to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token for retrieving subsequent pages of WorkSpaces Instances.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a single WorkSpace Instance.</p>
 * @public
 */
export interface WorkspaceInstance {
  /**
   * <p>Current provisioning state of the WorkSpace Instance.</p>
   * @public
   */
  ProvisionState?: ProvisionStateEnum | undefined;

  /**
   * <p>Unique identifier for the WorkSpace Instance.</p>
   * @public
   */
  WorkspaceInstanceId?: string | undefined;

  /**
   * <p>Details of the associated EC2 managed instance.</p>
   * @public
   */
  EC2ManagedInstance?: EC2ManagedInstance | undefined;
}

/**
 * <p>Contains the list of WorkSpaces Instances matching the specified criteria.</p>
 * @public
 */
export interface ListWorkspaceInstancesResponse {
  /**
   * <p>Collection of WorkSpaces Instances returned by the query.</p>
   * @public
   */
  WorkspaceInstances: WorkspaceInstance[] | undefined;

  /**
   * <p>Token for retrieving additional WorkSpaces Instances if the result set is paginated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies tags to add to a WorkSpace Instance.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Unique identifier of the WorkSpace Instance to tag.</p>
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * <p>Tags to be added to the WorkSpace Instance.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>Confirms successful tag addition.</p>
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>Specifies tags to remove from a WorkSpace Instance.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Unique identifier of the WorkSpace Instance to untag.</p>
   * @public
   */
  WorkspaceInstanceId: string | undefined;

  /**
   * <p>Keys of tags to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>Confirms successful tag removal.</p>
 * @public
 */
export interface UntagResourceResponse {}
