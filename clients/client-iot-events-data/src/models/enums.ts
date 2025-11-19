// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CustomerActionName = {
  ACKNOWLEDGE: "ACKNOWLEDGE",
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  RESET: "RESET",
  SNOOZE: "SNOOZE",
} as const;
/**
 * @public
 */
export type CustomerActionName = (typeof CustomerActionName)[keyof typeof CustomerActionName];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQUAL: "EQUAL",
  GREATER: "GREATER",
  GREATER_OR_EQUAL: "GREATER_OR_EQUAL",
  LESS: "LESS",
  LESS_OR_EQUAL: "LESS_OR_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const AlarmStateName = {
  ACKNOWLEDGED: "ACKNOWLEDGED",
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  LATCHED: "LATCHED",
  NORMAL: "NORMAL",
  SNOOZE_DISABLED: "SNOOZE_DISABLED",
} as const;
/**
 * @public
 */
export type AlarmStateName = (typeof AlarmStateName)[keyof typeof AlarmStateName];

/**
 * @public
 * @enum
 */
export const EventType = {
  STATE_CHANGE: "STATE_CHANGE",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  SNOOZE_TIMEOUT: "SNOOZE_TIMEOUT",
} as const;
/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  InternalFailureException: "InternalFailureException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ServiceUnavailableException: "ServiceUnavailableException",
  ThrottlingException: "ThrottlingException",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
