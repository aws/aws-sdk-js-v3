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
export const WebhookHmacAlgorithm = {
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;
/**
 * @public
 */
export type WebhookHmacAlgorithm = (typeof WebhookHmacAlgorithm)[keyof typeof WebhookHmacAlgorithm];

/**
 * @public
 * @enum
 */
export const WebhookHmacEncoding = {
  BASE64: "BASE64",
  HEX: "HEX",
} as const;
/**
 * @public
 */
export type WebhookHmacEncoding = (typeof WebhookHmacEncoding)[keyof typeof WebhookHmacEncoding];

/**
 * @public
 * @enum
 */
export const WebhookSecretEncoding = {
  BASE64: "BASE64",
  RAW: "RAW",
} as const;
/**
 * @public
 */
export type WebhookSecretEncoding = (typeof WebhookSecretEncoding)[keyof typeof WebhookSecretEncoding];

/**
 * @public
 * @enum
 */
export const WebhookSignedMessageComposition = {
  BODY: "BODY",
  MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY: "MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY",
  TIMESTAMP_DOT_BODY: "TIMESTAMP_DOT_BODY",
} as const;
/**
 * @public
 */
export type WebhookSignedMessageComposition =
  (typeof WebhookSignedMessageComposition)[keyof typeof WebhookSignedMessageComposition];

/**
 * @public
 * @enum
 */
export const WebhookDeduplicationType = {
  /**
   * <p>Duplicates are detected by a hash of the event content.</p>
   */
  CONTENT_BASED: "CONTENT_BASED",
} as const;
/**
 * @public
 */
export type WebhookDeduplicationType = (typeof WebhookDeduplicationType)[keyof typeof WebhookDeduplicationType];

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
export const MskAcks = {
  ALL: "ALL",
  LEADER: "LEADER",
} as const;
/**
 * @public
 */
export type MskAcks = (typeof MskAcks)[keyof typeof MskAcks];

/**
 * @public
 * @enum
 */
export const MskCompression = {
  GZIP: "GZIP",
  LZ4: "LZ4",
  NONE: "NONE",
  SNAPPY: "SNAPPY",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type MskCompression = (typeof MskCompression)[keyof typeof MskCompression];

/**
 * @public
 * @enum
 */
export const MskConnectivity = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type MskConnectivity = (typeof MskConnectivity)[keyof typeof MskConnectivity];

/**
 * @public
 * @enum
 */
export const PointType = {
  /**
   * <p>Start from the earliest available event.</p>
   */
  HORIZON: "HORIZON",
  /**
   * <p>Start from a specific timestamp.</p>
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
   * <p>Retry all exceptions regardless of classification.</p>
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
   * <p>Start from the latest events.</p>
   */
  LATEST: "LATEST",
  /**
   * <p>Start from a specific point in time.</p>
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
   * <p>Transform the event using a JSONata expression.</p>
   */
  JSONATA: "JSONATA",
  /**
   * <p>Deliver the raw event payload.</p>
   */
  RAW: "RAW",
  /**
   * <p>Deliver the event with metadata envelope.</p>
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
export const ConnectivityState = {
  ACTIVE: "ACTIVE",
  PROVISIONING: "PROVISIONING",
  PROVISION_FAILED: "PROVISION_FAILED",
} as const;
/**
 * @public
 */
export type ConnectivityState = (typeof ConnectivityState)[keyof typeof ConnectivityState];

/**
 * @public
 * @enum
 */
export const EventSourceType = {
  AWS_SERVICE_EVENTS: "AWS_SERVICE_EVENTS",
  PARTNER_EVENTS: "PARTNER_EVENTS",
  WEBHOOK_EVENTS: "WEBHOOK_EVENTS",
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
   * <p>The event was identified as a duplicate and was not re-published.</p>
   */
  DEDUPLICATED: "DEDUPLICATED",
  /**
   * <p>The event was published to the message store.</p>
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
   * <p>Continue delivery from where it stopped (last persisted progress).</p>
   */
  LAST_PROCESSED: "LAST_PROCESSED",
  /**
   * <p>Skip the backlog accrued while stopped; deliver only new events (resume at the tip).</p>
   */
  LATEST: "LATEST",
} as const;
/**
 * @public
 */
export type ResumePosition = (typeof ResumePosition)[keyof typeof ResumePosition];
