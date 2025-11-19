// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DetailType = {
  BASIC: "BASIC",
  FULL: "FULL",
} as const;
/**
 * @public
 */
export type DetailType = (typeof DetailType)[keyof typeof DetailType];

/**
 * @public
 * @enum
 */
export const NotificationRuleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type NotificationRuleStatus = (typeof NotificationRuleStatus)[keyof typeof NotificationRuleStatus];

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  ACTIVE: "ACTIVE",
  DEACTIVATED: "DEACTIVATED",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  UNREACHABLE: "UNREACHABLE",
} as const;
/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

/**
 * @public
 * @enum
 */
export const ListEventTypesFilterName = {
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SERVICE_NAME: "SERVICE_NAME",
} as const;
/**
 * @public
 */
export type ListEventTypesFilterName = (typeof ListEventTypesFilterName)[keyof typeof ListEventTypesFilterName];

/**
 * @public
 * @enum
 */
export const ListNotificationRulesFilterName = {
  CREATED_BY: "CREATED_BY",
  EVENT_TYPE_ID: "EVENT_TYPE_ID",
  RESOURCE: "RESOURCE",
  TARGET_ADDRESS: "TARGET_ADDRESS",
} as const;
/**
 * @public
 */
export type ListNotificationRulesFilterName =
  (typeof ListNotificationRulesFilterName)[keyof typeof ListNotificationRulesFilterName];

/**
 * @public
 * @enum
 */
export const ListTargetsFilterName = {
  TARGET_ADDRESS: "TARGET_ADDRESS",
  TARGET_STATUS: "TARGET_STATUS",
  TARGET_TYPE: "TARGET_TYPE",
} as const;
/**
 * @public
 */
export type ListTargetsFilterName = (typeof ListTargetsFilterName)[keyof typeof ListTargetsFilterName];
