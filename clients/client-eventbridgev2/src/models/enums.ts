// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BusState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type BusState = (typeof BusState)[keyof typeof BusState];

/**
 * @public
 * @enum
 */
export const EventSourceState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EventSourceState = (typeof EventSourceState)[keyof typeof EventSourceState];

/**
 * @public
 * @enum
 */
export const FilterScope = {
  DATA: "DATA",
  METADATA: "METADATA",
  SYSTEM_METADATA: "SYSTEM_METADATA",
} as const;
/**
 * @public
 */
export type FilterScope = (typeof FilterScope)[keyof typeof FilterScope];

/**
 * @public
 * @enum
 */
export const FilterLanguage = {
  EVENT_BRIDGE_PATTERN: "EVENT_BRIDGE_PATTERN",
} as const;
/**
 * @public
 */
export type FilterLanguage = (typeof FilterLanguage)[keyof typeof FilterLanguage];

/**
 * @public
 * @enum
 */
export const DeduplicationType = {
  CONTENT_BASED: "CONTENT_BASED",
} as const;
/**
 * @public
 */
export type DeduplicationType = (typeof DeduplicationType)[keyof typeof DeduplicationType];

/**
 * @public
 * @enum
 */
export const InvocationType = {
  EVENT: "EVENT",
  REQUEST_RESPONSE: "REQUEST_RESPONSE",
} as const;
/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * @public
 * @enum
 */
export const IncludePayload = {
  FULL: "FULL",
  ON_ERROR_ONLY: "ON_ERROR_ONLY",
} as const;
/**
 * @public
 */
export type IncludePayload = (typeof IncludePayload)[keyof typeof IncludePayload];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const PointType = {
  /**
   * Start from the earliest available event.
   */
  HORIZON: "HORIZON",
  /**
   * Start from a specific timestamp.
   */
  TIMESTAMP: "TIMESTAMP",
} as const;
/**
 * @public
 */
export type PointType = (typeof PointType)[keyof typeof PointType];

/**
 * @public
 * @enum
 */
export const RetryStrategy = {
  /**
   * Retry all exceptions regardless of classification.
   */
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type RetryStrategy = (typeof RetryStrategy)[keyof typeof RetryStrategy];

/**
 * @public
 * @enum
 */
export const StartingPosition = {
  /**
   * Start from the latest events.
   */
  LATEST: "LATEST",
  /**
   * Start from a specific point in time.
   */
  POINT_IN_TIME: "POINT_IN_TIME",
} as const;
/**
 * @public
 */
export type StartingPosition = (typeof StartingPosition)[keyof typeof StartingPosition];

/**
 * @public
 * @enum
 */
export const SubscriberState = {
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type SubscriberState = (typeof SubscriberState)[keyof typeof SubscriberState];

/**
 * @public
 * @enum
 */
export const TransformerType = {
  /**
   * Transform the event using a JSONata expression.
   */
  JSONATA: "JSONATA",
  /**
   * Deliver the raw event payload.
   */
  RAW: "RAW",
  /**
   * Deliver the event with metadata envelope.
   */
  WITH_METADATA: "WITH_METADATA",
} as const;
/**
 * @public
 */
export type TransformerType = (typeof TransformerType)[keyof typeof TransformerType];

/**
 * @public
 * @enum
 */
export const OrderingType = {
  FIFO: "FIFO",
  UNORDERED: "UNORDERED",
} as const;
/**
 * @public
 */
export type OrderingType = (typeof OrderingType)[keyof typeof OrderingType];

/**
 * @public
 * @enum
 */
export const EventSourceType = {
  AWS_SERVICE_EVENTS: "AWS_SERVICE_EVENTS",
  PARTNER_EVENTS: "PARTNER_EVENTS",
} as const;
/**
 * @public
 */
export type EventSourceType = (typeof EventSourceType)[keyof typeof EventSourceType];

/**
 * @public
 * @enum
 */
export const SuccessCode = {
  /**
   * The event was identified as a duplicate and was not re-published.
   */
  DEDUPLICATED: "DEDUPLICATED",
  /**
   * The event was published to the message store.
   */
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type SuccessCode = (typeof SuccessCode)[keyof typeof SuccessCode];

/**
 * @public
 * @enum
 */
export const ResumePosition = {
  /**
   * Continue delivery from where it stopped (last persisted progress).
   */
  LAST_PROCESSED: "LAST_PROCESSED",
  /**
   * Skip the backlog accrued while stopped; deliver only new events (resume at the tip).
   */
  LATEST: "LATEST",
} as const;
/**
 * @public
 */
export type ResumePosition = (typeof ResumePosition)[keyof typeof ResumePosition];
