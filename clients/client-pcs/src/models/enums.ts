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
export const ScriptCachingPolicy = {
  CACHE_ONCE: "CACHE_ONCE",
  REFRESH_ON_REBOOT: "REFRESH_ON_REBOOT",
} as const;
/**
 * @public
 */
export type ScriptCachingPolicy = (typeof ScriptCachingPolicy)[keyof typeof ScriptCachingPolicy];

/**
 * @public
 * @enum
 */
export const ExecutionPolicy = {
  EVERY_BOOT: "EVERY_BOOT",
  FIRST_BOOT_ONLY: "FIRST_BOOT_ONLY",
} as const;
/**
 * @public
 */
export type ExecutionPolicy = (typeof ExecutionPolicy)[keyof typeof ExecutionPolicy];

/**
 * @public
 * @enum
 */
export const OnError = {
  CONTINUE: "CONTINUE",
  STOP_SEQUENCE: "STOP_SEQUENCE",
  TERMINATE: "TERMINATE",
} as const;
/**
 * @public
 */
export type OnError = (typeof OnError)[keyof typeof OnError];

/**
 * @public
 * @enum
 */
export const PurchaseOption = {
  CAPACITY_BLOCK: "CAPACITY_BLOCK",
  INTERRUPTIBLE_CAPACITY_RESERVATION: "INTERRUPTIBLE_CAPACITY_RESERVATION",
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
  RESUMING: "RESUMING",
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
  RESUMING: "RESUMING",
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
  RESUMING: "RESUMING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];
