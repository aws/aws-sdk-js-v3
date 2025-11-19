// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AutoScalingMetric = {
  CPU_UTILIZATION_PERCENTAGE: "CPU_UTILIZATION_PERCENTAGE",
} as const;
/**
 * @public
 */
export type AutoScalingMetric = (typeof AutoScalingMetric)[keyof typeof AutoScalingMetric];

/**
 * @public
 * @enum
 */
export const FederationMode = {
  FEDERATED: "FEDERATED",
  LOCAL: "LOCAL",
} as const;
/**
 * @public
 */
export type FederationMode = (typeof FederationMode)[keyof typeof FederationMode];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  DELETE: "DELETE",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const ErrorDetails = {
  ACCESS_DENIED: "Missing required permission to perform this request.",
  CANCELLED: "Cancelled",
  INTERNAL_SERVICE_EXCEPTION: "An internal error has occurred.",
  RESOURCE_NOT_FOUND: "One or more inputs to this request were not found.",
  SERVICE_QUOTA_EXCEEDED: "Service limits have been exceeded.",
  THROTTLING: "The system temporarily lacks sufficient resources to process the request.",
  USER_RECOVERABLE: "A user recoverable error has occurred",
  VALIDATION: "The inputs to this request are invalid.",
} as const;
/**
 * @public
 */
export type ErrorDetails = (typeof ErrorDetails)[keyof typeof ErrorDetails];

/**
 * @public
 * @enum
 */
export const ChangesetStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type ChangesetStatus = (typeof ChangesetStatus)[keyof typeof ChangesetStatus];

/**
 * @public
 * @enum
 */
export const KxAzMode = {
  MULTI: "MULTI",
  SINGLE: "SINGLE",
} as const;
/**
 * @public
 */
export type KxAzMode = (typeof KxAzMode)[keyof typeof KxAzMode];

/**
 * @public
 * @enum
 */
export const KxClusterType = {
  GATEWAY: "GATEWAY",
  GP: "GP",
  HDB: "HDB",
  RDB: "RDB",
  TICKERPLANT: "TICKERPLANT",
} as const;
/**
 * @public
 */
export type KxClusterType = (typeof KxClusterType)[keyof typeof KxClusterType];

/**
 * @public
 * @enum
 */
export const KxSavedownStorageType = {
  SDS01: "SDS01",
} as const;
/**
 * @public
 */
export type KxSavedownStorageType = (typeof KxSavedownStorageType)[keyof typeof KxSavedownStorageType];

/**
 * @public
 * @enum
 */
export const IPAddressType = {
  IP_V4: "IP_V4",
} as const;
/**
 * @public
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

/**
 * @public
 * @enum
 */
export const KxClusterStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type KxClusterStatus = (typeof KxClusterStatus)[keyof typeof KxClusterStatus];

/**
 * @public
 * @enum
 */
export const VolumeType = {
  NAS_1: "NAS_1",
} as const;
/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * @enum
 */
export const KxDataviewStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type KxDataviewStatus = (typeof KxDataviewStatus)[keyof typeof KxDataviewStatus];

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  CREATED: "CREATED",
  CREATE_REQUESTED: "CREATE_REQUESTED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_REQUESTED: "DELETE_REQUESTED",
  DELETING: "DELETING",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  FAILED_UPDATING_NETWORK: "FAILED_UPDATING_NETWORK",
  RETRY_DELETION: "RETRY_DELETION",
  SUSPENDED: "SUSPENDED",
  UPDATE_NETWORK_REQUESTED: "UPDATE_NETWORK_REQUESTED",
  UPDATING_NETWORK: "UPDATING_NETWORK",
} as const;
/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 * @enum
 */
export const KxScalingGroupStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type KxScalingGroupStatus = (typeof KxScalingGroupStatus)[keyof typeof KxScalingGroupStatus];

/**
 * @public
 * @enum
 */
export const KxNAS1Type = {
  HDD_12: "HDD_12",
  SSD_1000: "SSD_1000",
  SSD_250: "SSD_250",
} as const;
/**
 * @public
 */
export type KxNAS1Type = (typeof KxNAS1Type)[keyof typeof KxNAS1Type];

/**
 * @public
 * @enum
 */
export const KxVolumeType = {
  NAS_1: "NAS_1",
} as const;
/**
 * @public
 */
export type KxVolumeType = (typeof KxVolumeType)[keyof typeof KxVolumeType];

/**
 * @public
 * @enum
 */
export const KxVolumeStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type KxVolumeStatus = (typeof KxVolumeStatus)[keyof typeof KxVolumeStatus];

/**
 * @public
 * @enum
 */
export const DnsStatus = {
  FAILED_UPDATE: "FAILED_UPDATE",
  NONE: "NONE",
  SUCCESSFULLY_UPDATED: "SUCCESSFULLY_UPDATED",
  UPDATE_REQUESTED: "UPDATE_REQUESTED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DnsStatus = (typeof DnsStatus)[keyof typeof DnsStatus];

/**
 * @public
 * @enum
 */
export const TgwStatus = {
  FAILED_UPDATE: "FAILED_UPDATE",
  NONE: "NONE",
  SUCCESSFULLY_UPDATED: "SUCCESSFULLY_UPDATED",
  UPDATE_REQUESTED: "UPDATE_REQUESTED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type TgwStatus = (typeof TgwStatus)[keyof typeof TgwStatus];

/**
 * @public
 * @enum
 */
export const RuleAction = {
  ALLOW: "allow",
  DENY: "deny",
} as const;
/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * @public
 * @enum
 */
export const KxNodeStatus = {
  PROVISIONING: "PROVISIONING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type KxNodeStatus = (typeof KxNodeStatus)[keyof typeof KxNodeStatus];

/**
 * @public
 * @enum
 */
export const KxClusterCodeDeploymentStrategy = {
  FORCE: "FORCE",
  NO_RESTART: "NO_RESTART",
  ROLLING: "ROLLING",
} as const;
/**
 * @public
 */
export type KxClusterCodeDeploymentStrategy =
  (typeof KxClusterCodeDeploymentStrategy)[keyof typeof KxClusterCodeDeploymentStrategy];

/**
 * @public
 * @enum
 */
export const KxDeploymentStrategy = {
  NO_RESTART: "NO_RESTART",
  ROLLING: "ROLLING",
} as const;
/**
 * @public
 */
export type KxDeploymentStrategy = (typeof KxDeploymentStrategy)[keyof typeof KxDeploymentStrategy];
