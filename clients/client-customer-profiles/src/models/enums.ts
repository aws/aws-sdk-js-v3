// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionType = {
  ADDED_PROFILE_KEY: "ADDED_PROFILE_KEY",
  CREATED: "CREATED",
  DELETED_BY_CUSTOMER: "DELETED_BY_CUSTOMER",
  DELETED_BY_MERGE: "DELETED_BY_MERGE",
  DELETED_PROFILE_KEY: "DELETED_PROFILE_KEY",
  EXPIRED: "EXPIRED",
  INGESTED: "INGESTED",
  MERGED: "MERGED",
  UPDATED: "UPDATED",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const StringDimensionType = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
} as const;
/**
 * @public
 */
export type StringDimensionType = (typeof StringDimensionType)[keyof typeof StringDimensionType];

/**
 * @public
 * @enum
 */
export const SourceConnectorType = {
  MARKETO: "Marketo",
  S3: "S3",
  SALESFORCE: "Salesforce",
  SERVICENOW: "Servicenow",
  ZENDESK: "Zendesk",
} as const;
/**
 * @public
 */
export type SourceConnectorType = (typeof SourceConnectorType)[keyof typeof SourceConnectorType];

/**
 * @public
 * @enum
 */
export const MarketoConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;
/**
 * @public
 */
export type MarketoConnectorOperator = (typeof MarketoConnectorOperator)[keyof typeof MarketoConnectorOperator];

/**
 * @public
 * @enum
 */
export const S3ConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;
/**
 * @public
 */
export type S3ConnectorOperator = (typeof S3ConnectorOperator)[keyof typeof S3ConnectorOperator];

/**
 * @public
 * @enum
 */
export const SalesforceConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;
/**
 * @public
 */
export type SalesforceConnectorOperator =
  (typeof SalesforceConnectorOperator)[keyof typeof SalesforceConnectorOperator];

/**
 * @public
 * @enum
 */
export const ServiceNowConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;
/**
 * @public
 */
export type ServiceNowConnectorOperator =
  (typeof ServiceNowConnectorOperator)[keyof typeof ServiceNowConnectorOperator];

/**
 * @public
 * @enum
 */
export const ZendeskConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  GREATER_THAN: "GREATER_THAN",
  MASK_ALL: "MASK_ALL",
  MASK_FIRST_N: "MASK_FIRST_N",
  MASK_LAST_N: "MASK_LAST_N",
  MULTIPLICATION: "MULTIPLICATION",
  NO_OP: "NO_OP",
  PROJECTION: "PROJECTION",
  SUBTRACTION: "SUBTRACTION",
  VALIDATE_NON_NEGATIVE: "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL: "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO: "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC: "VALIDATE_NUMERIC",
} as const;
/**
 * @public
 */
export type ZendeskConnectorOperator = (typeof ZendeskConnectorOperator)[keyof typeof ZendeskConnectorOperator];

/**
 * @public
 * @enum
 */
export const OperatorPropertiesKeys = {
  CONCAT_FORMAT: "CONCAT_FORMAT",
  DATA_TYPE: "DATA_TYPE",
  DESTINATION_DATA_TYPE: "DESTINATION_DATA_TYPE",
  LOWER_BOUND: "LOWER_BOUND",
  MASK_LENGTH: "MASK_LENGTH",
  MASK_VALUE: "MASK_VALUE",
  MATH_OPERATION_FIELDS_ORDER: "MATH_OPERATION_FIELDS_ORDER",
  SOURCE_DATA_TYPE: "SOURCE_DATA_TYPE",
  SUBFIELD_CATEGORY_MAP: "SUBFIELD_CATEGORY_MAP",
  TRUNCATE_LENGTH: "TRUNCATE_LENGTH",
  UPPER_BOUND: "UPPER_BOUND",
  VALIDATION_ACTION: "VALIDATION_ACTION",
  VALUE: "VALUE",
  VALUES: "VALUES",
} as const;
/**
 * @public
 */
export type OperatorPropertiesKeys = (typeof OperatorPropertiesKeys)[keyof typeof OperatorPropertiesKeys];

/**
 * @public
 * @enum
 */
export const TaskType = {
  ARITHMETIC: "Arithmetic",
  FILTER: "Filter",
  MAP: "Map",
  MASK: "Mask",
  MERGE: "Merge",
  TRUNCATE: "Truncate",
  VALIDATE: "Validate",
} as const;
/**
 * @public
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

/**
 * @public
 * @enum
 */
export const DataPullMode = {
  COMPLETE: "Complete",
  INCREMENTAL: "Incremental",
} as const;
/**
 * @public
 */
export type DataPullMode = (typeof DataPullMode)[keyof typeof DataPullMode];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  EVENT: "Event",
  ONDEMAND: "OnDemand",
  SCHEDULED: "Scheduled",
} as const;
/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * @public
 * @enum
 */
export const Status = {
  CANCELLED: "CANCELLED",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  RETRY: "RETRY",
  SPLIT: "SPLIT",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const AttributeDimensionType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUAL: "EQUAL",
  EXCLUSIVE: "EXCLUSIVE",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  INCLUSIVE: "INCLUSIVE",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;
/**
 * @public
 */
export type AttributeDimensionType = (typeof AttributeDimensionType)[keyof typeof AttributeDimensionType];

/**
 * @public
 * @enum
 */
export const FilterDimensionType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUAL: "EQUAL",
  EXCLUSIVE: "EXCLUSIVE",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  INCLUSIVE: "INCLUSIVE",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;
/**
 * @public
 */
export type FilterDimensionType = (typeof FilterDimensionType)[keyof typeof FilterDimensionType];

/**
 * @public
 * @enum
 */
export const AttributeMatchingModel = {
  MANY_TO_MANY: "MANY_TO_MANY",
  ONE_TO_ONE: "ONE_TO_ONE",
} as const;
/**
 * @public
 */
export type AttributeMatchingModel = (typeof AttributeMatchingModel)[keyof typeof AttributeMatchingModel];

/**
 * @public
 * @enum
 */
export const ConflictResolvingModel = {
  RECENCY: "RECENCY",
  SOURCE: "SOURCE",
} as const;
/**
 * @public
 */
export type ConflictResolvingModel = (typeof ConflictResolvingModel)[keyof typeof ConflictResolvingModel];

/**
 * @public
 * @enum
 */
export const RangeUnit = {
  DAYS: "DAYS",
} as const;
/**
 * @public
 */
export type RangeUnit = (typeof RangeUnit)[keyof typeof RangeUnit];

/**
 * @public
 * @enum
 */
export const ContactType = {
  BUSINESS_EMAIL_ADDRESS: "BusinessEmailAddress",
  BUSINESS_PHONE_NUMBER: "BusinessPhoneNumber",
  EMAIL_ADDRESS: "EmailAddress",
  HOME_PHONE_NUMBER: "HomePhoneNumber",
  MOBILE_PHONE_NUMBER: "MobilePhoneNumber",
  PERSONAL_EMAIL_ADDRESS: "PersonalEmailAddress",
  PHONE_NUMBER: "PhoneNumber",
} as const;
/**
 * @public
 */
export type ContactType = (typeof ContactType)[keyof typeof ContactType];

/**
 * @public
 * @enum
 */
export const Gender = {
  FEMALE: "FEMALE",
  MALE: "MALE",
  UNSPECIFIED: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type Gender = (typeof Gender)[keyof typeof Gender];

/**
 * @public
 * @enum
 */
export const PartyType = {
  BUSINESS: "BUSINESS",
  INDIVIDUAL: "INDIVIDUAL",
  OTHER: "OTHER",
} as const;
/**
 * @public
 */
export type PartyType = (typeof PartyType)[keyof typeof PartyType];

/**
 * @public
 * @enum
 */
export const ProfileType = {
  ACCOUNT_PROFILE: "ACCOUNT_PROFILE",
  PROFILE: "PROFILE",
} as const;
/**
 * @public
 */
export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

/**
 * @public
 * @enum
 */
export const ReadinessStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PREPARING: "PREPARING",
} as const;
/**
 * @public
 */
export type ReadinessStatus = (typeof ReadinessStatus)[keyof typeof ReadinessStatus];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUAL: "EQUAL",
  EXCLUSIVE: "EXCLUSIVE",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  INCLUSIVE: "INCLUSIVE",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const Unit = {
  DAYS: "DAYS",
} as const;
/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * @enum
 */
export const Operator = {
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const ContentType = {
  NUMBER: "NUMBER",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * @enum
 */
export const Type = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const Include = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Include = (typeof Include)[keyof typeof Include];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  FIRST_OCCURRENCE: "FIRST_OCCURRENCE",
  LAST_OCCURRENCE: "LAST_OCCURRENCE",
  MAXIMUM: "MAXIMUM",
  MAX_OCCURRENCE: "MAX_OCCURRENCE",
  MINIMUM: "MINIMUM",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const JobScheduleDayOfTheWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type JobScheduleDayOfTheWeek = (typeof JobScheduleDayOfTheWeek)[keyof typeof JobScheduleDayOfTheWeek];

/**
 * @public
 * @enum
 */
export const RuleBasedMatchingStatus = {
  ACTIVE: "ACTIVE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type RuleBasedMatchingStatus = (typeof RuleBasedMatchingStatus)[keyof typeof RuleBasedMatchingStatus];

/**
 * @public
 * @enum
 */
export const LayoutType = {
  PROFILE_EXPLORER: "PROFILE_EXPLORER",
} as const;
/**
 * @public
 */
export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];

/**
 * @public
 * @enum
 */
export const EventTriggerLogicalOperator = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type EventTriggerLogicalOperator =
  (typeof EventTriggerLogicalOperator)[keyof typeof EventTriggerLogicalOperator];

/**
 * @public
 * @enum
 */
export const PeriodUnit = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
} as const;
/**
 * @public
 */
export type PeriodUnit = (typeof PeriodUnit)[keyof typeof PeriodUnit];

/**
 * @public
 * @enum
 */
export const WorkflowType = {
  APPFLOW_INTEGRATION: "APPFLOW_INTEGRATION",
} as const;
/**
 * @public
 */
export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];

/**
 * @public
 * @enum
 */
export const RecommenderRecipeName = {
  FREQUENTLY_PAIRED_ITEMS: "frequently-paired-items",
  POPULAR_ITEMS: "popular-items",
  RECOMMENDED_FOR_YOU: "recommended-for-you",
  SIMILAR_ITEMS: "similar-items",
  TRENDING_NOW: "trending-now",
} as const;
/**
 * @public
 */
export type RecommenderRecipeName = (typeof RecommenderRecipeName)[keyof typeof RecommenderRecipeName];

/**
 * @public
 * @enum
 */
export const DateDimensionType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BETWEEN: "BETWEEN",
  NOT_BETWEEN: "NOT_BETWEEN",
  ON: "ON",
} as const;
/**
 * @public
 */
export type DateDimensionType = (typeof DateDimensionType)[keyof typeof DateDimensionType];

/**
 * @public
 * @enum
 */
export const ProfileTypeDimensionType = {
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
} as const;
/**
 * @public
 */
export type ProfileTypeDimensionType = (typeof ProfileTypeDimensionType)[keyof typeof ProfileTypeDimensionType];

/**
 * @public
 * @enum
 */
export const IncludeOptions = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type IncludeOptions = (typeof IncludeOptions)[keyof typeof IncludeOptions];

/**
 * @public
 * @enum
 */
export const DataFormat = {
  CSV: "CSV",
  JSONL: "JSONL",
  ORC: "ORC",
} as const;
/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 * @enum
 */
export const FieldContentType = {
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  NAME: "NAME",
  NUMBER: "NUMBER",
  PHONE_NUMBER: "PHONE_NUMBER",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type FieldContentType = (typeof FieldContentType)[keyof typeof FieldContentType];

/**
 * @public
 * @enum
 */
export const StandardIdentifier = {
  AIR_BOOKING: "AIR_BOOKING",
  AIR_PREFERENCE: "AIR_PREFERENCE",
  AIR_SEGMENT: "AIR_SEGMENT",
  ASSET: "ASSET",
  CASE: "CASE",
  COMMUNICATION_RECORD: "COMMUNICATION_RECORD",
  HOTEL_PREFERENCE: "HOTEL_PREFERENCE",
  HOTEL_RESERVATION: "HOTEL_RESERVATION",
  HOTEL_STAY_REVENUE: "HOTEL_STAY_REVENUE",
  LOOKUP_ONLY: "LOOKUP_ONLY",
  LOYALTY: "LOYALTY",
  LOYALTY_PROMOTION: "LOYALTY_PROMOTION",
  LOYALTY_TRANSACTION: "LOYALTY_TRANSACTION",
  NEW_ONLY: "NEW_ONLY",
  ORDER: "ORDER",
  PROFILE: "PROFILE",
  SECONDARY: "SECONDARY",
  UNIQUE: "UNIQUE",
} as const;
/**
 * @public
 */
export type StandardIdentifier = (typeof StandardIdentifier)[keyof typeof StandardIdentifier];

/**
 * @public
 * @enum
 */
export const FeatureType = {
  CATEGORICAL: "CATEGORICAL",
  TEXTUAL: "TEXTUAL",
} as const;
/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * @enum
 */
export const EventStreamDestinationStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type EventStreamDestinationStatus =
  (typeof EventStreamDestinationStatus)[keyof typeof EventStreamDestinationStatus];

/**
 * @public
 * @enum
 */
export const EventStreamState = {
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type EventStreamState = (typeof EventStreamState)[keyof typeof EventStreamState];

/**
 * @public
 * @enum
 */
export const IdentityResolutionJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  FIND_MATCHING: "FIND_MATCHING",
  MERGING: "MERGING",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  PENDING: "PENDING",
  PREPROCESSING: "PREPROCESSING",
} as const;
/**
 * @public
 */
export type IdentityResolutionJobStatus =
  (typeof IdentityResolutionJobStatus)[keyof typeof IdentityResolutionJobStatus];

/**
 * @public
 * @enum
 */
export const Scope = {
  DOMAIN: "DOMAIN",
  PROFILE: "PROFILE",
} as const;
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const RecommenderStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type RecommenderStatus = (typeof RecommenderStatus)[keyof typeof RecommenderStatus];

/**
 * @public
 * @enum
 */
export const TrainingMetricName = {
  COVERAGE: "coverage",
  FRESHNESS: "freshness",
  HIT: "hit",
  POPULARITY: "popularity",
  RECALL: "recall",
  SIMILARITY: "similarity",
} as const;
/**
 * @public
 */
export type TrainingMetricName = (typeof TrainingMetricName)[keyof typeof TrainingMetricName];

/**
 * @public
 * @enum
 */
export const SegmentType = {
  CLASSIC: "CLASSIC",
  ENHANCED: "ENHANCED",
} as const;
/**
 * @public
 */
export type SegmentType = (typeof SegmentType)[keyof typeof SegmentType];

/**
 * @public
 * @enum
 */
export const EstimateStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type EstimateStatus = (typeof EstimateStatus)[keyof typeof EstimateStatus];

/**
 * @public
 * @enum
 */
export const QueryResult = {
  ABSENT: "ABSENT",
  PRESENT: "PRESENT",
} as const;
/**
 * @public
 */
export type QueryResult = (typeof QueryResult)[keyof typeof QueryResult];

/**
 * @public
 * @enum
 */
export const SegmentSnapshotStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type SegmentSnapshotStatus = (typeof SegmentSnapshotStatus)[keyof typeof SegmentSnapshotStatus];

/**
 * @public
 * @enum
 */
export const MatchType = {
  ML_BASED_MATCHING: "ML_BASED_MATCHING",
  RULE_BASED_MATCHING: "RULE_BASED_MATCHING",
} as const;
/**
 * @public
 */
export type MatchType = (typeof MatchType)[keyof typeof MatchType];

/**
 * @public
 * @enum
 */
export const UploadJobStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type UploadJobStatus = (typeof UploadJobStatus)[keyof typeof UploadJobStatus];

/**
 * @public
 * @enum
 */
export const StatusReason = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  VALIDATION_FAILURE: "VALIDATION_FAILURE",
} as const;
/**
 * @public
 */
export type StatusReason = (typeof StatusReason)[keyof typeof StatusReason];

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];
