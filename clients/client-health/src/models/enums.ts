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
