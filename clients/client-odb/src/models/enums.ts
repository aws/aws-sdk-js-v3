// smithy-typescript generated code
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
export const Access = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Access = (typeof Access)[keyof typeof Access];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  AVAILABLE: "AVAILABLE",
  FAILED: "FAILED",
  MAINTENANCE_IN_PROGRESS: "MAINTENANCE_IN_PROGRESS",
  PROVISIONING: "PROVISIONING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * @enum
 */
export const ComputeModel = {
  ECPU: "ECPU",
  OCPU: "OCPU",
} as const;
/**
 * @public
 */
export type ComputeModel = (typeof ComputeModel)[keyof typeof ComputeModel];

/**
 * @public
 * @enum
 */
export const LicenseModel = {
  BRING_YOUR_OWN_LICENSE: "BRING_YOUR_OWN_LICENSE",
  LICENSE_INCLUDED: "LICENSE_INCLUDED",
} as const;
/**
 * @public
 */
export type LicenseModel = (typeof LicenseModel)[keyof typeof LicenseModel];

/**
 * @public
 * @enum
 */
export const DayOfWeekName = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeekName = (typeof DayOfWeekName)[keyof typeof DayOfWeekName];

/**
 * @public
 * @enum
 */
export const MonthName = {
  APRIL: "APRIL",
  AUGUST: "AUGUST",
  DECEMBER: "DECEMBER",
  FEBRUARY: "FEBRUARY",
  JANUARY: "JANUARY",
  JULY: "JULY",
  JUNE: "JUNE",
  MARCH: "MARCH",
  MAY: "MAY",
  NOVEMBER: "NOVEMBER",
  OCTOBER: "OCTOBER",
  SEPTEMBER: "SEPTEMBER",
} as const;
/**
 * @public
 */
export type MonthName = (typeof MonthName)[keyof typeof MonthName];

/**
 * @public
 * @enum
 */
export const PatchingModeType = {
  NONROLLING: "NONROLLING",
  ROLLING: "ROLLING",
} as const;
/**
 * @public
 */
export type PatchingModeType = (typeof PatchingModeType)[keyof typeof PatchingModeType];

/**
 * @public
 * @enum
 */
export const PreferenceType = {
  CUSTOM_PREFERENCE: "CUSTOM_PREFERENCE",
  NO_PREFERENCE: "NO_PREFERENCE",
} as const;
/**
 * @public
 */
export type PreferenceType = (typeof PreferenceType)[keyof typeof PreferenceType];

/**
 * @public
 * @enum
 */
export const DbServerPatchingStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  MAINTENANCE_IN_PROGRESS: "MAINTENANCE_IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type DbServerPatchingStatus = (typeof DbServerPatchingStatus)[keyof typeof DbServerPatchingStatus];

/**
 * @public
 * @enum
 */
export const DiskRedundancy = {
  HIGH: "HIGH",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type DiskRedundancy = (typeof DiskRedundancy)[keyof typeof DiskRedundancy];

/**
 * @public
 * @enum
 */
export const IormLifecycleState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type IormLifecycleState = (typeof IormLifecycleState)[keyof typeof IormLifecycleState];

/**
 * @public
 * @enum
 */
export const Objective = {
  AUTO: "AUTO",
  BALANCED: "BALANCED",
  BASIC: "BASIC",
  HIGH_THROUGHPUT: "HIGH_THROUGHPUT",
  LOW_LATENCY: "LOW_LATENCY",
} as const;
/**
 * @public
 */
export type Objective = (typeof Objective)[keyof typeof Objective];

/**
 * @public
 * @enum
 */
export const DbNodeMaintenanceType = {
  VMDB_REBOOT_MIGRATION: "VMDB_REBOOT_MIGRATION",
} as const;
/**
 * @public
 */
export type DbNodeMaintenanceType = (typeof DbNodeMaintenanceType)[keyof typeof DbNodeMaintenanceType];

/**
 * @public
 * @enum
 */
export const DbNodeResourceStatus = {
  AVAILABLE: "AVAILABLE",
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DbNodeResourceStatus = (typeof DbNodeResourceStatus)[keyof typeof DbNodeResourceStatus];

/**
 * @public
 * @enum
 */
export const ShapeType = {
  AMD: "AMD",
  AMPERE_FLEX_A1: "AMPERE_FLEX_A1",
  INTEL: "INTEL",
  INTEL_FLEX_X9: "INTEL_FLEX_X9",
} as const;
/**
 * @public
 */
export type ShapeType = (typeof ShapeType)[keyof typeof ShapeType];

/**
 * @public
 * @enum
 */
export const OciOnboardingStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ACTIVE_IN_HOME_REGION: "ACTIVE_IN_HOME_REGION",
  ACTIVE_LIMITED: "ACTIVE_LIMITED",
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING_CUSTOMER_ACTION: "PENDING_CUSTOMER_ACTION",
  PENDING_INITIALIZATION: "PENDING_INITIALIZATION",
  PENDING_LINK_GENERATION: "PENDING_LINK_GENERATION",
  PUBLIC_OFFER_UNSUPPORTED: "PUBLIC_OFFER_UNSUPPORTED",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type OciOnboardingStatus = (typeof OciOnboardingStatus)[keyof typeof OciOnboardingStatus];

/**
 * @public
 * @enum
 */
export const ManagedResourceStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type ManagedResourceStatus = (typeof ManagedResourceStatus)[keyof typeof ManagedResourceStatus];

/**
 * @public
 * @enum
 */
export const VpcEndpointType = {
  SERVICENETWORK: "SERVICENETWORK",
} as const;
/**
 * @public
 */
export type VpcEndpointType = (typeof VpcEndpointType)[keyof typeof VpcEndpointType];
