// smithy-typescript generated code
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
