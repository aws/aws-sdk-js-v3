// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountingMode = {
  NONE: "NONE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type AccountingMode = (typeof AccountingMode)[keyof typeof AccountingMode];

/**
 * @public
 * @enum
 */
export const PurchaseOption = {
  CAPACITY_BLOCK: "CAPACITY_BLOCK",
  ONDEMAND: "ONDEMAND",
  SPOT: "SPOT",
} as const;
/**
 * @public
 */
export type PurchaseOption = (typeof PurchaseOption)[keyof typeof PurchaseOption];

/**
 * @public
 * @enum
 */
export const SpotAllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacity-optimized",
  LOWEST_PRICE: "lowest-price",
  PRICE_CAPACITY_OPTIMIZED: "price-capacity-optimized",
} as const;
/**
 * @public
 */
export type SpotAllocationStrategy = (typeof SpotAllocationStrategy)[keyof typeof SpotAllocationStrategy];

/**
 * @public
 * @enum
 */
export const ComputeNodeGroupStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ComputeNodeGroupStatus = (typeof ComputeNodeGroupStatus)[keyof typeof ComputeNodeGroupStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const SchedulerType = {
  SLURM: "SLURM",
} as const;
/**
 * @public
 */
export type SchedulerType = (typeof SchedulerType)[keyof typeof SchedulerType];

/**
 * @public
 * @enum
 */
export const Size = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
} as const;
/**
 * @public
 */
export type Size = (typeof Size)[keyof typeof Size];

/**
 * @public
 * @enum
 */
export const SlurmRestMode = {
  NONE: "NONE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type SlurmRestMode = (typeof SlurmRestMode)[keyof typeof SlurmRestMode];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  SLURMCTLD: "SLURMCTLD",
  SLURMDBD: "SLURMDBD",
  SLURMRESTD: "SLURMRESTD",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];
