// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EntityStatusCode = {
  IMPAIRED: "IMPAIRED",
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  UNIMPAIRED: "UNIMPAIRED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type EntityStatusCode = (typeof EntityStatusCode)[keyof typeof EntityStatusCode];

/**
 * @public
 * @enum
 */
export const EventScopeCode = {
  ACCOUNT_SPECIFIC: "ACCOUNT_SPECIFIC",
  NONE: "NONE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type EventScopeCode = (typeof EventScopeCode)[keyof typeof EventScopeCode];

/**
 * @public
 * @enum
 */
export const EventAggregateField = {
  EventTypeCategory: "eventTypeCategory",
} as const;
/**
 * @public
 */
export type EventAggregateField = (typeof EventAggregateField)[keyof typeof EventAggregateField];

/**
 * @public
 * @enum
 */
export const EventActionability = {
  ACTION_MAY_BE_REQUIRED: "ACTION_MAY_BE_REQUIRED",
  ACTION_REQUIRED: "ACTION_REQUIRED",
  INFORMATIONAL: "INFORMATIONAL",
} as const;
/**
 * @public
 */
export type EventActionability = (typeof EventActionability)[keyof typeof EventActionability];

/**
 * @public
 * @enum
 */
export const EventStatusCode = {
  CLOSED: "closed",
  OPEN: "open",
  UPCOMING: "upcoming",
} as const;
/**
 * @public
 */
export type EventStatusCode = (typeof EventStatusCode)[keyof typeof EventStatusCode];

/**
 * @public
 * @enum
 */
export const EventTypeCategory = {
  ACCOUNT_NOTIFICATION: "accountNotification",
  INVESTIGATION: "investigation",
  ISSUE: "issue",
  SCHEDULED_CHANGE: "scheduledChange",
} as const;
/**
 * @public
 */
export type EventTypeCategory = (typeof EventTypeCategory)[keyof typeof EventTypeCategory];

/**
 * @public
 * @enum
 */
export const EventPersona = {
  BILLING: "BILLING",
  OPERATIONS: "OPERATIONS",
  SECURITY: "SECURITY",
} as const;
/**
 * @public
 */
export type EventPersona = (typeof EventPersona)[keyof typeof EventPersona];

/**
 * @public
 * @enum
 */
export const EventTypeActionability = {
  ACTION_MAY_BE_REQUIRED: "ACTION_MAY_BE_REQUIRED",
  ACTION_REQUIRED: "ACTION_REQUIRED",
  INFORMATIONAL: "INFORMATIONAL",
} as const;
/**
 * @public
 */
export type EventTypeActionability = (typeof EventTypeActionability)[keyof typeof EventTypeActionability];

/**
 * @public
 * @enum
 */
export const EventTypePersona = {
  BILLING: "BILLING",
  OPERATIONS: "OPERATIONS",
  SECURITY: "SECURITY",
} as const;
/**
 * @public
 */
export type EventTypePersona = (typeof EventTypePersona)[keyof typeof EventTypePersona];
