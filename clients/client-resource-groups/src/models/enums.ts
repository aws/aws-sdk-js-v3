// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const GroupLifecycleEventsDesiredStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type GroupLifecycleEventsDesiredStatus =
  (typeof GroupLifecycleEventsDesiredStatus)[keyof typeof GroupLifecycleEventsDesiredStatus];

/**
 * @public
 * @enum
 */
export const GroupLifecycleEventsStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type GroupLifecycleEventsStatus = (typeof GroupLifecycleEventsStatus)[keyof typeof GroupLifecycleEventsStatus];

/**
 * @public
 * @enum
 */
export const QueryType = {
  CLOUDFORMATION_STACK_1_0: "CLOUDFORMATION_STACK_1_0",
  TAG_FILTERS_1_0: "TAG_FILTERS_1_0",
} as const;
/**
 * @public
 */
export type QueryType = (typeof QueryType)[keyof typeof QueryType];

/**
 * @public
 * @enum
 */
export const GroupConfigurationStatus = {
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type GroupConfigurationStatus = (typeof GroupConfigurationStatus)[keyof typeof GroupConfigurationStatus];

/**
 * @public
 * @enum
 */
export const TagSyncTaskStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
} as const;
/**
 * @public
 */
export type TagSyncTaskStatus = (typeof TagSyncTaskStatus)[keyof typeof TagSyncTaskStatus];

/**
 * @public
 * @enum
 */
export const ListGroupingStatusesFilterName = {
  ResourceArn: "resource-arn",
  Status: "status",
} as const;
/**
 * @public
 */
export type ListGroupingStatusesFilterName =
  (typeof ListGroupingStatusesFilterName)[keyof typeof ListGroupingStatusesFilterName];

/**
 * @public
 * @enum
 */
export const GroupingType = {
  GROUP: "GROUP",
  UNGROUP: "UNGROUP",
} as const;
/**
 * @public
 */
export type GroupingType = (typeof GroupingType)[keyof typeof GroupingType];

/**
 * @public
 * @enum
 */
export const GroupingStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type GroupingStatus = (typeof GroupingStatus)[keyof typeof GroupingStatus];

/**
 * @public
 * @enum
 */
export const ResourceFilterName = {
  ResourceType: "resource-type",
} as const;
/**
 * @public
 */
export type ResourceFilterName = (typeof ResourceFilterName)[keyof typeof ResourceFilterName];

/**
 * @public
 * @enum
 */
export const QueryErrorCode = {
  CLOUDFORMATION_STACK_INACTIVE: "CLOUDFORMATION_STACK_INACTIVE",
  CLOUDFORMATION_STACK_NOT_EXISTING: "CLOUDFORMATION_STACK_NOT_EXISTING",
  CLOUDFORMATION_STACK_UNASSUMABLE_ROLE: "CLOUDFORMATION_STACK_UNASSUMABLE_ROLE",
  RESOURCE_TYPE_NOT_SUPPORTED: "RESOURCE_TYPE_NOT_SUPPORTED",
} as const;
/**
 * @public
 */
export type QueryErrorCode = (typeof QueryErrorCode)[keyof typeof QueryErrorCode];

/**
 * @public
 * @enum
 */
export const ResourceStatusValue = {
  Pending: "PENDING",
} as const;
/**
 * @public
 */
export type ResourceStatusValue = (typeof ResourceStatusValue)[keyof typeof ResourceStatusValue];

/**
 * @public
 * @enum
 */
export const GroupFilterName = {
  ConfigurationType: "configuration-type",
  Criticality: "criticality",
  DisplayName: "display-name",
  Owner: "owner",
  ResourceType: "resource-type",
} as const;
/**
 * @public
 */
export type GroupFilterName = (typeof GroupFilterName)[keyof typeof GroupFilterName];
