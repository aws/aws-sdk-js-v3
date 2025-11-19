// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RetentionIntervalUnitValues = {
  DAYS: "DAYS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
  YEARS: "YEARS",
} as const;
/**
 * @public
 */
export type RetentionIntervalUnitValues =
  (typeof RetentionIntervalUnitValues)[keyof typeof RetentionIntervalUnitValues];

/**
 * @public
 * @enum
 */
export const DefaultPolicyTypeValues = {
  INSTANCE: "INSTANCE",
  VOLUME: "VOLUME",
} as const;
/**
 * @public
 */
export type DefaultPolicyTypeValues = (typeof DefaultPolicyTypeValues)[keyof typeof DefaultPolicyTypeValues];

/**
 * @public
 * @enum
 */
export const EventTypeValues = {
  SHARE_SNAPSHOT: "shareSnapshot",
} as const;
/**
 * @public
 */
export type EventTypeValues = (typeof EventTypeValues)[keyof typeof EventTypeValues];

/**
 * @public
 * @enum
 */
export const EventSourceValues = {
  MANAGED_CWE: "MANAGED_CWE",
} as const;
/**
 * @public
 */
export type EventSourceValues = (typeof EventSourceValues)[keyof typeof EventSourceValues];

/**
 * @public
 * @enum
 */
export const PolicyLanguageValues = {
  SIMPLIFIED: "SIMPLIFIED",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type PolicyLanguageValues = (typeof PolicyLanguageValues)[keyof typeof PolicyLanguageValues];

/**
 * @public
 * @enum
 */
export const PolicyTypeValues = {
  EBS_SNAPSHOT_MANAGEMENT: "EBS_SNAPSHOT_MANAGEMENT",
  EVENT_BASED_POLICY: "EVENT_BASED_POLICY",
  IMAGE_MANAGEMENT: "IMAGE_MANAGEMENT",
} as const;
/**
 * @public
 */
export type PolicyTypeValues = (typeof PolicyTypeValues)[keyof typeof PolicyTypeValues];

/**
 * @public
 * @enum
 */
export const ResourceLocationValues = {
  CLOUD: "CLOUD",
  LOCAL_ZONE: "LOCAL_ZONE",
  OUTPOST: "OUTPOST",
} as const;
/**
 * @public
 */
export type ResourceLocationValues = (typeof ResourceLocationValues)[keyof typeof ResourceLocationValues];

/**
 * @public
 * @enum
 */
export const ResourceTypeValues = {
  INSTANCE: "INSTANCE",
  VOLUME: "VOLUME",
} as const;
/**
 * @public
 */
export type ResourceTypeValues = (typeof ResourceTypeValues)[keyof typeof ResourceTypeValues];

/**
 * @public
 * @enum
 */
export const IntervalUnitValues = {
  HOURS: "HOURS",
} as const;
/**
 * @public
 */
export type IntervalUnitValues = (typeof IntervalUnitValues)[keyof typeof IntervalUnitValues];

/**
 * @public
 * @enum
 */
export const LocationValues = {
  CLOUD: "CLOUD",
  LOCAL_ZONE: "LOCAL_ZONE",
  OUTPOST_LOCAL: "OUTPOST_LOCAL",
} as const;
/**
 * @public
 */
export type LocationValues = (typeof LocationValues)[keyof typeof LocationValues];

/**
 * @public
 * @enum
 */
export const ExecutionHandlerServiceValues = {
  AWS_SYSTEMS_MANAGER: "AWS_SYSTEMS_MANAGER",
} as const;
/**
 * @public
 */
export type ExecutionHandlerServiceValues =
  (typeof ExecutionHandlerServiceValues)[keyof typeof ExecutionHandlerServiceValues];

/**
 * @public
 * @enum
 */
export const StageValues = {
  POST: "POST",
  PRE: "PRE",
} as const;
/**
 * @public
 */
export type StageValues = (typeof StageValues)[keyof typeof StageValues];

/**
 * @public
 * @enum
 */
export const SettablePolicyStateValues = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SettablePolicyStateValues = (typeof SettablePolicyStateValues)[keyof typeof SettablePolicyStateValues];

/**
 * @public
 * @enum
 */
export const DefaultPoliciesTypeValues = {
  ALL: "ALL",
  INSTANCE: "INSTANCE",
  VOLUME: "VOLUME",
} as const;
/**
 * @public
 */
export type DefaultPoliciesTypeValues = (typeof DefaultPoliciesTypeValues)[keyof typeof DefaultPoliciesTypeValues];

/**
 * @public
 * @enum
 */
export const GettablePolicyStateValues = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ERROR: "ERROR",
} as const;
/**
 * @public
 */
export type GettablePolicyStateValues = (typeof GettablePolicyStateValues)[keyof typeof GettablePolicyStateValues];
