// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BillingMode = {
  EXTENDABLE_RETENTION_PRICING: "EXTENDABLE_RETENTION_PRICING",
  FIXED_RETENTION_PRICING: "FIXED_RETENTION_PRICING",
} as const;
/**
 * @public
 */
export type BillingMode = (typeof BillingMode)[keyof typeof BillingMode];

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 * @enum
 */
export const DestinationType = {
  AWS_SERVICE: "AWS_SERVICE",
  EVENT_DATA_STORE: "EVENT_DATA_STORE",
} as const;
/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const RefreshScheduleFrequencyUnit = {
  DAYS: "DAYS",
  HOURS: "HOURS",
} as const;
/**
 * @public
 */
export type RefreshScheduleFrequencyUnit =
  (typeof RefreshScheduleFrequencyUnit)[keyof typeof RefreshScheduleFrequencyUnit];

/**
 * @public
 * @enum
 */
export const RefreshScheduleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RefreshScheduleStatus = (typeof RefreshScheduleStatus)[keyof typeof RefreshScheduleStatus];

/**
 * @public
 * @enum
 */
export const DashboardType = {
  CUSTOM: "CUSTOM",
  MANAGED: "MANAGED",
} as const;
/**
 * @public
 */
export type DashboardType = (typeof DashboardType)[keyof typeof DashboardType];

/**
 * @public
 * @enum
 */
export const EventDataStoreStatus = {
  CREATED: "CREATED",
  ENABLED: "ENABLED",
  PENDING_DELETION: "PENDING_DELETION",
  STARTING_INGESTION: "STARTING_INGESTION",
  STOPPED_INGESTION: "STOPPED_INGESTION",
  STOPPING_INGESTION: "STOPPING_INGESTION",
} as const;
/**
 * @public
 */
export type EventDataStoreStatus = (typeof EventDataStoreStatus)[keyof typeof EventDataStoreStatus];

/**
 * @public
 * @enum
 */
export const DeliveryStatus = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ACCESS_DENIED_SIGNING_FILE: "ACCESS_DENIED_SIGNING_FILE",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FAILED_SIGNING_FILE: "FAILED_SIGNING_FILE",
  PENDING: "PENDING",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  SUCCESS: "SUCCESS",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

/**
 * @public
 * @enum
 */
export const FederationStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type FederationStatus = (typeof FederationStatus)[keyof typeof FederationStatus];

/**
 * @public
 * @enum
 */
export const DashboardStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATED: "UPDATED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DashboardStatus = (typeof DashboardStatus)[keyof typeof DashboardStatus];

/**
 * @public
 * @enum
 */
export const Type = {
  RequestContext: "RequestContext",
  TagContext: "TagContext",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const MaxEventSize = {
  Large: "Large",
  Standard: "Standard",
} as const;
/**
 * @public
 */
export type MaxEventSize = (typeof MaxEventSize)[keyof typeof MaxEventSize];

/**
 * @public
 * @enum
 */
export const ReadWriteType = {
  All: "All",
  ReadOnly: "ReadOnly",
  WriteOnly: "WriteOnly",
} as const;
/**
 * @public
 */
export type ReadWriteType = (typeof ReadWriteType)[keyof typeof ReadWriteType];

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * @enum
 */
export const SourceEventCategory = {
  Data: "Data",
  Management: "Management",
} as const;
/**
 * @public
 */
export type SourceEventCategory = (typeof SourceEventCategory)[keyof typeof SourceEventCategory];

/**
 * @public
 * @enum
 */
export const InsightType = {
  ApiCallRateInsight: "ApiCallRateInsight",
  ApiErrorRateInsight: "ApiErrorRateInsight",
} as const;
/**
 * @public
 */
export type InsightType = (typeof InsightType)[keyof typeof InsightType];

/**
 * @public
 * @enum
 */
export const ImportFailureStatus = {
  FAILED: "FAILED",
  RETRY: "RETRY",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ImportFailureStatus = (typeof ImportFailureStatus)[keyof typeof ImportFailureStatus];

/**
 * @public
 * @enum
 */
export const ListInsightsDataType = {
  INSIGHTS_EVENTS: "InsightsEvents",
} as const;
/**
 * @public
 */
export type ListInsightsDataType = (typeof ListInsightsDataType)[keyof typeof ListInsightsDataType];

/**
 * @public
 * @enum
 */
export const ListInsightsDataDimensionKey = {
  EVENT_ID: "EventId",
  EVENT_NAME: "EventName",
  EVENT_SOURCE: "EventSource",
} as const;
/**
 * @public
 */
export type ListInsightsDataDimensionKey =
  (typeof ListInsightsDataDimensionKey)[keyof typeof ListInsightsDataDimensionKey];

/**
 * @public
 * @enum
 */
export const InsightsMetricDataType = {
  FILL_WITH_ZEROS: "FillWithZeros",
  NON_ZERO_DATA: "NonZeroData",
} as const;
/**
 * @public
 */
export type InsightsMetricDataType = (typeof InsightsMetricDataType)[keyof typeof InsightsMetricDataType];

/**
 * @public
 * @enum
 */
export const EventCategory = {
  Insight: "insight",
} as const;
/**
 * @public
 */
export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory];

/**
 * @public
 * @enum
 */
export const LookupAttributeKey = {
  ACCESS_KEY_ID: "AccessKeyId",
  EVENT_ID: "EventId",
  EVENT_NAME: "EventName",
  EVENT_SOURCE: "EventSource",
  READ_ONLY: "ReadOnly",
  RESOURCE_NAME: "ResourceName",
  RESOURCE_TYPE: "ResourceType",
  USERNAME: "Username",
} as const;
/**
 * @public
 */
export type LookupAttributeKey = (typeof LookupAttributeKey)[keyof typeof LookupAttributeKey];
