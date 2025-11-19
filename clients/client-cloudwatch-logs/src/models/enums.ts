// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const PolicyType = {
  DATA_PROTECTION_POLICY: "DATA_PROTECTION_POLICY",
  FIELD_INDEX_POLICY: "FIELD_INDEX_POLICY",
  METRIC_EXTRACTION_POLICY: "METRIC_EXTRACTION_POLICY",
  SUBSCRIPTION_FILTER_POLICY: "SUBSCRIPTION_FILTER_POLICY",
  TRANSFORMER_POLICY: "TRANSFORMER_POLICY",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const Scope = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const ActionStatus = {
  CLIENT_ERROR: "CLIENT_ERROR",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];

/**
 * @public
 * @enum
 */
export const State = {
  Active: "Active",
  Baseline: "Baseline",
  Suppressed: "Suppressed",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const AnomalyDetectorStatus = {
  ANALYZING: "ANALYZING",
  DELETED: "DELETED",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  PAUSED: "PAUSED",
  TRAINING: "TRAINING",
} as const;
/**
 * @public
 */
export type AnomalyDetectorStatus = (typeof AnomalyDetectorStatus)[keyof typeof AnomalyDetectorStatus];

/**
 * @public
 * @enum
 */
export const EvaluationFrequency = {
  FIFTEEN_MIN: "FIFTEEN_MIN",
  FIVE_MIN: "FIVE_MIN",
  ONE_HOUR: "ONE_HOUR",
  ONE_MIN: "ONE_MIN",
  TEN_MIN: "TEN_MIN",
  THIRTY_MIN: "THIRTY_MIN",
} as const;
/**
 * @public
 */
export type EvaluationFrequency = (typeof EvaluationFrequency)[keyof typeof EvaluationFrequency];

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  JSON: "json",
  PARQUET: "parquet",
  PLAIN: "plain",
  RAW: "raw",
  W3C: "w3c",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const DeliveryDestinationType = {
  CWL: "CWL",
  FH: "FH",
  S3: "S3",
  XRAY: "XRAY",
} as const;
/**
 * @public
 */
export type DeliveryDestinationType = (typeof DeliveryDestinationType)[keyof typeof DeliveryDestinationType];

/**
 * @public
 * @enum
 */
export const LogGroupClass = {
  DELIVERY: "DELIVERY",
  INFREQUENT_ACCESS: "INFREQUENT_ACCESS",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type LogGroupClass = (typeof LogGroupClass)[keyof typeof LogGroupClass];

/**
 * @public
 * @enum
 */
export const QueryLanguage = {
  CWLI: "CWLI",
  PPL: "PPL",
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type QueryLanguage = (typeof QueryLanguage)[keyof typeof QueryLanguage];

/**
 * @public
 * @enum
 */
export const ScheduledQueryState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ScheduledQueryState = (typeof ScheduledQueryState)[keyof typeof ScheduledQueryState];

/**
 * @public
 * @enum
 */
export const DataProtectionStatus = {
  ACTIVATED: "ACTIVATED",
  ARCHIVED: "ARCHIVED",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type DataProtectionStatus = (typeof DataProtectionStatus)[keyof typeof DataProtectionStatus];

/**
 * @public
 * @enum
 */
export const ExportTaskStatusCode = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PENDING_CANCEL: "PENDING_CANCEL",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ExportTaskStatusCode = (typeof ExportTaskStatusCode)[keyof typeof ExportTaskStatusCode];

/**
 * @public
 * @enum
 */
export const IndexSource = {
  ACCOUNT: "ACCOUNT",
  LOG_GROUP: "LOG_GROUP",
} as const;
/**
 * @public
 */
export type IndexSource = (typeof IndexSource)[keyof typeof IndexSource];

/**
 * @public
 * @enum
 */
export const InheritedProperty = {
  ACCOUNT_DATA_PROTECTION: "ACCOUNT_DATA_PROTECTION",
} as const;
/**
 * @public
 */
export type InheritedProperty = (typeof InheritedProperty)[keyof typeof InheritedProperty];

/**
 * @public
 * @enum
 */
export const OrderBy = {
  LastEventTime: "LastEventTime",
  LogStreamName: "LogStreamName",
} as const;
/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];

/**
 * @public
 * @enum
 */
export const StandardUnit = {
  Bits: "Bits",
  BitsSecond: "Bits/Second",
  Bytes: "Bytes",
  BytesSecond: "Bytes/Second",
  Count: "Count",
  CountSecond: "Count/Second",
  Gigabits: "Gigabits",
  GigabitsSecond: "Gigabits/Second",
  Gigabytes: "Gigabytes",
  GigabytesSecond: "Gigabytes/Second",
  Kilobits: "Kilobits",
  KilobitsSecond: "Kilobits/Second",
  Kilobytes: "Kilobytes",
  KilobytesSecond: "Kilobytes/Second",
  Megabits: "Megabits",
  MegabitsSecond: "Megabits/Second",
  Megabytes: "Megabytes",
  MegabytesSecond: "Megabytes/Second",
  Microseconds: "Microseconds",
  Milliseconds: "Milliseconds",
  None: "None",
  Percent: "Percent",
  Seconds: "Seconds",
  Terabits: "Terabits",
  TerabitsSecond: "Terabits/Second",
  Terabytes: "Terabytes",
  TerabytesSecond: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type StandardUnit = (typeof StandardUnit)[keyof typeof StandardUnit];

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  Cancelled: "Cancelled",
  Complete: "Complete",
  Failed: "Failed",
  Running: "Running",
  Scheduled: "Scheduled",
  Timeout: "Timeout",
  Unknown: "Unknown",
} as const;
/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 * @enum
 */
export const PolicyScope = {
  ACCOUNT: "ACCOUNT",
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type PolicyScope = (typeof PolicyScope)[keyof typeof PolicyScope];

/**
 * @public
 * @enum
 */
export const Distribution = {
  ByLogStream: "ByLogStream",
  Random: "Random",
} as const;
/**
 * @public
 */
export type Distribution = (typeof Distribution)[keyof typeof Distribution];

/**
 * @public
 * @enum
 */
export const EntityRejectionErrorType = {
  ENTITY_SIZE_TOO_LARGE: "EntitySizeTooLarge",
  INVALID_ATTRIBUTES: "InvalidAttributes",
  INVALID_ENTITY: "InvalidEntity",
  INVALID_KEY_ATTRIBUTE: "InvalidKeyAttributes",
  INVALID_TYPE_VALUE: "InvalidTypeValue",
  MISSING_REQUIRED_FIELDS: "MissingRequiredFields",
  UNSUPPORTED_LOG_GROUP_TYPE: "UnsupportedLogGroupType",
} as const;
/**
 * @public
 */
export type EntityRejectionErrorType = (typeof EntityRejectionErrorType)[keyof typeof EntityRejectionErrorType];

/**
 * @public
 * @enum
 */
export const EventSource = {
  AWSWAF: "AWSWAF",
  CLOUD_TRAIL: "CloudTrail",
  EKS_AUDIT: "EKSAudit",
  ROUTE53_RESOLVER: "Route53Resolver",
  VPC_FLOW: "VPCFlow",
} as const;
/**
 * @public
 */
export type EventSource = (typeof EventSource)[keyof typeof EventSource];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  Complete: "Complete",
  Failed: "Failed",
  InvalidQuery: "InvalidQuery",
  Running: "Running",
  Timeout: "Timeout",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const FlattenedElement = {
  FIRST: "first",
  LAST: "last",
} as const;
/**
 * @public
 */
export type FlattenedElement = (typeof FlattenedElement)[keyof typeof FlattenedElement];

/**
 * @public
 * @enum
 */
export const OpenSearchResourceStatusType = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type OpenSearchResourceStatusType =
  (typeof OpenSearchResourceStatusType)[keyof typeof OpenSearchResourceStatusType];

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
} as const;
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  OPENSEARCH: "OPENSEARCH",
} as const;
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const ScheduledQueryDestinationType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type ScheduledQueryDestinationType =
  (typeof ScheduledQueryDestinationType)[keyof typeof ScheduledQueryDestinationType];

/**
 * @public
 * @enum
 */
export const OCSFVersion = {
  V1_1: "V1.1",
} as const;
/**
 * @public
 */
export type OCSFVersion = (typeof OCSFVersion)[keyof typeof OCSFVersion];

/**
 * @public
 * @enum
 */
export const Type = {
  BOOLEAN: "boolean",
  DOUBLE: "double",
  INTEGER: "integer",
  STRING: "string",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const SuppressionState = {
  SUPPRESSED: "SUPPRESSED",
  UNSUPPRESSED: "UNSUPPRESSED",
} as const;
/**
 * @public
 */
export type SuppressionState = (typeof SuppressionState)[keyof typeof SuppressionState];

/**
 * @public
 * @enum
 */
export const SuppressionUnit = {
  HOURS: "HOURS",
  MINUTES: "MINUTES",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type SuppressionUnit = (typeof SuppressionUnit)[keyof typeof SuppressionUnit];

/**
 * @public
 * @enum
 */
export const SuppressionType = {
  INFINITE: "INFINITE",
  LIMITED: "LIMITED",
} as const;
/**
 * @public
 */
export type SuppressionType = (typeof SuppressionType)[keyof typeof SuppressionType];
