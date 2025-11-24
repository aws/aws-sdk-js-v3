// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OrganizationRuleMode = {
  ANY_ALLOWED: "AnyAllowed",
  NONE_ALLOWED: "NoneAllowed",
} as const;
/**
 * @public
 */
export type OrganizationRuleMode = (typeof OrganizationRuleMode)[keyof typeof OrganizationRuleMode];

/**
 * @public
 * @enum
 */
export const EnrollmentStatus = {
  ACTIVE: "Active",
  FAILED: "Failed",
  INACTIVE: "Inactive",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];

/**
 * @public
 * @enum
 */
export const SavingsEstimationMode = {
  AFTER_DISCOUNT: "AfterDiscount",
  BEFORE_DISCOUNT: "BeforeDiscount",
} as const;
/**
 * @public
 */
export type SavingsEstimationMode = (typeof SavingsEstimationMode)[keyof typeof SavingsEstimationMode];

/**
 * @public
 * @enum
 */
export const EventStatus = {
  CANCELLED: "Cancelled",
  COMPLETE: "Complete",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  READY: "Ready",
  ROLLBACK_COMPLETE: "RollbackComplete",
  ROLLBACK_FAILED: "RollbackFailed",
  ROLLBACK_IN_PROGRESS: "RollbackInProgress",
  ROLLBACK_READY: "RollbackReady",
} as const;
/**
 * @public
 */
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

/**
 * @public
 * @enum
 */
export const EventType = {
  SNAPSHOT_AND_DELETE_UNATTACHED_EBS_VOLUME: "SnapshotAndDeleteUnattachedEbsVolume",
  UPGRADE_EBS_VOLUME_TYPE: "UpgradeEbsVolumeType",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EBS_VOLUME: "EbsVolume",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const AutomationEventFilterName = {
  ACCOUNT_ID: "AccountId",
  EVENT_STATUS: "EventStatus",
  EVENT_TYPE: "EventType",
  RESOURCE_TYPE: "ResourceType",
} as const;
/**
 * @public
 */
export type AutomationEventFilterName = (typeof AutomationEventFilterName)[keyof typeof AutomationEventFilterName];

/**
 * @public
 * @enum
 */
export const StepStatus = {
  COMPLETE: "Complete",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  READY: "Ready",
} as const;
/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * @public
 * @enum
 */
export const StepType = {
  CREATE_EBS_SNAPSHOT: "CreateEbsSnapshot",
  CREATE_EBS_VOLUME: "CreateEbsVolume",
  DELETE_EBS_VOLUME: "DeleteEbsVolume",
  MODIFY_EBS_VOLUME: "ModifyEbsVolume",
} as const;
/**
 * @public
 */
export type StepType = (typeof StepType)[keyof typeof StepType];

/**
 * @public
 * @enum
 */
export const SummaryDimensionKey = {
  EVENT_STATUS: "EventStatus",
} as const;
/**
 * @public
 */
export type SummaryDimensionKey = (typeof SummaryDimensionKey)[keyof typeof SummaryDimensionKey];

/**
 * @public
 * @enum
 */
export const RuleApplyOrder = {
  AFTER_ACCOUNT_RULES: "AfterAccountRules",
  BEFORE_ACCOUNT_RULES: "BeforeAccountRules",
} as const;
/**
 * @public
 */
export type RuleApplyOrder = (typeof RuleApplyOrder)[keyof typeof RuleApplyOrder];

/**
 * @public
 * @enum
 */
export const RecommendedActionType = {
  SNAPSHOT_AND_DELETE_UNATTACHED_EBS_VOLUME: "SnapshotAndDeleteUnattachedEbsVolume",
  UPGRADE_EBS_VOLUME_TYPE: "UpgradeEbsVolumeType",
} as const;
/**
 * @public
 */
export type RecommendedActionType = (typeof RecommendedActionType)[keyof typeof RecommendedActionType];

/**
 * @public
 * @enum
 */
export const RuleType = {
  ACCOUNT_RULE: "AccountRule",
  ORGANIZATIONAL_RULE: "OrganizationRule",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const RuleStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;
/**
 * @public
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

/**
 * @public
 * @enum
 */
export const AutomationRuleFilterName = {
  ACCOUNT_ID: "AccountId",
  NAME: "Name",
  ORGANIZATION_CONFIGURATION_RULE_APPLY_ORDER: "OrganizationConfigurationRuleApplyOrder",
  RECOMMENDED_ACTION_TYPE: "RecommendedActionType",
  RULE_TYPE: "RuleType",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type AutomationRuleFilterName = (typeof AutomationRuleFilterName)[keyof typeof AutomationRuleFilterName];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  NUMERIC_EQUALS: "NumericEquals",
  NUMERIC_GREATER_THAN: "NumericGreaterThan",
  NUMERIC_GREATER_THAN_EQUALS: "NumericGreaterThanEquals",
  NUMERIC_LESS_THAN: "NumericLessThan",
  NUMERIC_LESS_THAN_EQUALS: "NumericLessThanEquals",
  NUMERIC_NOT_EQUALS: "NumericNotEquals",
  STRING_EQUALS: "StringEquals",
  STRING_EQUALS_IGNORE_CASE: "StringEqualsIgnoreCase",
  STRING_LIKE: "StringLike",
  STRING_NOT_EQUALS: "StringNotEquals",
  STRING_NOT_EQUALS_IGNORE_CASE: "StringNotEqualsIgnoreCase",
  STRING_NOT_LIKE: "StringNotLike",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const RecommendedActionFilterName = {
  ACCOUNT_ID: "AccountId",
  CURRENT_RESOURCE_DETAILS_EBS_VOLUME_TYPE: "CurrentResourceDetailsEbsVolumeType",
  LOOK_BACK_PERIOD_IN_DAYS: "LookBackPeriodInDays",
  RECOMMENDED_ACTION_TYPE: "RecommendedActionType",
  RESOURCE_ID: "ResourceId",
  RESOURCE_TAGS_KEY: "ResourceTagsKey",
  RESOURCE_TAGS_VALUE: "ResourceTagsValue",
  RESOURCE_TYPE: "ResourceType",
  RESTART_NEEDED: "RestartNeeded",
} as const;
/**
 * @public
 */
export type RecommendedActionFilterName =
  (typeof RecommendedActionFilterName)[keyof typeof RecommendedActionFilterName];
