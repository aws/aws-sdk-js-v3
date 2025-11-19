// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OnboardingState = {
  CREATED: "CREATED",
  ERROR: "ERROR",
  ONBOARDED: "ONBOARDED",
} as const;
/**
 * @public
 */
export type OnboardingState = (typeof OnboardingState)[keyof typeof OnboardingState];

/**
 * @public
 * @enum
 */
export const OperationalState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OperationalState = (typeof OperationalState)[keyof typeof OperationalState];

/**
 * @public
 * @enum
 */
export const UsageState = {
  IN_USE: "IN_USE",
  NOT_IN_USE: "NOT_IN_USE",
} as const;
/**
 * @public
 */
export type UsageState = (typeof UsageState)[keyof typeof UsageState];

/**
 * @public
 * @enum
 */
export const NsdOnboardingState = {
  CREATED: "CREATED",
  ERROR: "ERROR",
  ONBOARDED: "ONBOARDED",
} as const;
/**
 * @public
 */
export type NsdOnboardingState = (typeof NsdOnboardingState)[keyof typeof NsdOnboardingState];

/**
 * @public
 * @enum
 */
export const NsdOperationalState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type NsdOperationalState = (typeof NsdOperationalState)[keyof typeof NsdOperationalState];

/**
 * @public
 * @enum
 */
export const NsdUsageState = {
  IN_USE: "IN_USE",
  NOT_IN_USE: "NOT_IN_USE",
} as const;
/**
 * @public
 */
export type NsdUsageState = (typeof NsdUsageState)[keyof typeof NsdUsageState];

/**
 * @public
 * @enum
 */
export const DescriptorContentType = {
  TEXT_PLAIN: "text/plain",
} as const;
/**
 * @public
 */
export type DescriptorContentType = (typeof DescriptorContentType)[keyof typeof DescriptorContentType];

/**
 * @public
 * @enum
 */
export const VnfOperationalState = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type VnfOperationalState = (typeof VnfOperationalState)[keyof typeof VnfOperationalState];

/**
 * @public
 * @enum
 */
export const VnfInstantiationState = {
  INSTANTIATED: "INSTANTIATED",
  NOT_INSTANTIATED: "NOT_INSTANTIATED",
} as const;
/**
 * @public
 */
export type VnfInstantiationState = (typeof VnfInstantiationState)[keyof typeof VnfInstantiationState];

/**
 * @public
 * @enum
 */
export const PackageContentType = {
  APPLICATION_ZIP: "application/zip",
} as const;
/**
 * @public
 */
export type PackageContentType = (typeof PackageContentType)[keyof typeof PackageContentType];

/**
 * @public
 * @enum
 */
export const NsState = {
  DELETED: "DELETED",
  IMPAIRED: "IMPAIRED",
  INSTANTIATED: "INSTANTIATED",
  INSTANTIATE_IN_PROGRESS: "INSTANTIATE_IN_PROGRESS",
  INTENT_TO_UPDATE_IN_PROGRESS: "INTENT_TO_UPDATE_IN_PROGRESS",
  NOT_INSTANTIATED: "NOT_INSTANTIATED",
  STOPPED: "STOPPED",
  TERMINATE_IN_PROGRESS: "TERMINATE_IN_PROGRESS",
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type NsState = (typeof NsState)[keyof typeof NsState];

/**
 * @public
 * @enum
 */
export const LcmOperationType = {
  INSTANTIATE: "INSTANTIATE",
  TERMINATE: "TERMINATE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type LcmOperationType = (typeof LcmOperationType)[keyof typeof LcmOperationType];

/**
 * @public
 * @enum
 */
export const NsLcmOperationState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type NsLcmOperationState = (typeof NsLcmOperationState)[keyof typeof NsLcmOperationState];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
  SKIPPED: "SKIPPED",
  STARTED: "STARTED",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const UpdateSolNetworkType = {
  MODIFY_VNF_INFORMATION: "MODIFY_VNF_INFORMATION",
  UPDATE_NS: "UPDATE_NS",
} as const;
/**
 * @public
 */
export type UpdateSolNetworkType = (typeof UpdateSolNetworkType)[keyof typeof UpdateSolNetworkType];
