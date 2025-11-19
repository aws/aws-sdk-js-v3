// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  AMAZON_COGNITO_USER_POOLS: "AMAZON_COGNITO_USER_POOLS",
  API_KEY: "API_KEY",
  AWS_IAM: "AWS_IAM",
  AWS_LAMBDA: "AWS_LAMBDA",
  OPENID_CONNECT: "OPENID_CONNECT",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const EventLogLevel = {
  ALL: "ALL",
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type EventLogLevel = (typeof EventLogLevel)[keyof typeof EventLogLevel];

/**
 * @public
 * @enum
 */
export const AssociationStatus = {
  Failed: "FAILED",
  Processing: "PROCESSING",
  Success: "SUCCESS",
} as const;
/**
 * @public
 */
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus];

/**
 * @public
 * @enum
 */
export const ApiCachingBehavior = {
  FULL_REQUEST_CACHING: "FULL_REQUEST_CACHING",
  OPERATION_LEVEL_CACHING: "OPERATION_LEVEL_CACHING",
  PER_RESOLVER_CACHING: "PER_RESOLVER_CACHING",
} as const;
/**
 * @public
 */
export type ApiCachingBehavior = (typeof ApiCachingBehavior)[keyof typeof ApiCachingBehavior];

/**
 * @public
 * @enum
 */
export const CacheHealthMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CacheHealthMetricsConfig = (typeof CacheHealthMetricsConfig)[keyof typeof CacheHealthMetricsConfig];

/**
 * @public
 * @enum
 */
export const ApiCacheStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MODIFYING: "MODIFYING",
} as const;
/**
 * @public
 */
export type ApiCacheStatus = (typeof ApiCacheStatus)[keyof typeof ApiCacheStatus];

/**
 * @public
 * @enum
 */
export const ApiCacheType = {
  LARGE: "LARGE",
  LARGE_12X: "LARGE_12X",
  LARGE_2X: "LARGE_2X",
  LARGE_4X: "LARGE_4X",
  LARGE_8X: "LARGE_8X",
  MEDIUM: "MEDIUM",
  R4_2XLARGE: "R4_2XLARGE",
  R4_4XLARGE: "R4_4XLARGE",
  R4_8XLARGE: "R4_8XLARGE",
  R4_LARGE: "R4_LARGE",
  R4_XLARGE: "R4_XLARGE",
  SMALL: "SMALL",
  T2_MEDIUM: "T2_MEDIUM",
  T2_SMALL: "T2_SMALL",
  XLARGE: "XLARGE",
} as const;
/**
 * @public
 */
export type ApiCacheType = (typeof ApiCacheType)[keyof typeof ApiCacheType];

/**
 * @public
 * @enum
 */
export const RuntimeName = {
  APPSYNC_JS: "APPSYNC_JS",
} as const;
/**
 * @public
 */
export type RuntimeName = (typeof RuntimeName)[keyof typeof RuntimeName];

/**
 * @public
 * @enum
 */
export const BadRequestReason = {
  CODE_ERROR: "CODE_ERROR",
} as const;
/**
 * @public
 */
export type BadRequestReason = (typeof BadRequestReason)[keyof typeof BadRequestReason];

/**
 * @public
 * @enum
 */
export const MergeType = {
  AUTO_MERGE: "AUTO_MERGE",
  MANUAL_MERGE: "MANUAL_MERGE",
} as const;
/**
 * @public
 */
export type MergeType = (typeof MergeType)[keyof typeof MergeType];

/**
 * @public
 * @enum
 */
export const SourceApiAssociationStatus = {
  AUTO_MERGE_SCHEDULE_FAILED: "AUTO_MERGE_SCHEDULE_FAILED",
  DELETION_FAILED: "DELETION_FAILED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  DELETION_SCHEDULED: "DELETION_SCHEDULED",
  MERGE_FAILED: "MERGE_FAILED",
  MERGE_IN_PROGRESS: "MERGE_IN_PROGRESS",
  MERGE_SCHEDULED: "MERGE_SCHEDULED",
  MERGE_SUCCESS: "MERGE_SUCCESS",
} as const;
/**
 * @public
 */
export type SourceApiAssociationStatus = (typeof SourceApiAssociationStatus)[keyof typeof SourceApiAssociationStatus];

/**
 * @public
 * @enum
 */
export const AuthorizationType = {
  AWS_IAM: "AWS_IAM",
} as const;
/**
 * @public
 */
export type AuthorizationType = (typeof AuthorizationType)[keyof typeof AuthorizationType];

/**
 * @public
 * @enum
 */
export const HandlerBehavior = {
  CODE: "CODE",
  DIRECT: "DIRECT",
} as const;
/**
 * @public
 */
export type HandlerBehavior = (typeof HandlerBehavior)[keyof typeof HandlerBehavior];

/**
 * @public
 * @enum
 */
export const InvokeType = {
  EVENT: "EVENT",
  REQUEST_RESPONSE: "REQUEST_RESPONSE",
} as const;
/**
 * @public
 */
export type InvokeType = (typeof InvokeType)[keyof typeof InvokeType];

/**
 * @public
 * @enum
 */
export const DataSourceLevelMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DataSourceLevelMetricsConfig =
  (typeof DataSourceLevelMetricsConfig)[keyof typeof DataSourceLevelMetricsConfig];

/**
 * @public
 * @enum
 */
export const RelationalDatabaseSourceType = {
  RDS_HTTP_ENDPOINT: "RDS_HTTP_ENDPOINT",
} as const;
/**
 * @public
 */
export type RelationalDatabaseSourceType =
  (typeof RelationalDatabaseSourceType)[keyof typeof RelationalDatabaseSourceType];

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  AMAZON_BEDROCK_RUNTIME: "AMAZON_BEDROCK_RUNTIME",
  AMAZON_DYNAMODB: "AMAZON_DYNAMODB",
  AMAZON_ELASTICSEARCH: "AMAZON_ELASTICSEARCH",
  AMAZON_EVENTBRIDGE: "AMAZON_EVENTBRIDGE",
  AMAZON_OPENSEARCH_SERVICE: "AMAZON_OPENSEARCH_SERVICE",
  AWS_LAMBDA: "AWS_LAMBDA",
  HTTP: "HTTP",
  NONE: "NONE",
  RELATIONAL_DATABASE: "RELATIONAL_DATABASE",
} as const;
/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 * @enum
 */
export const ConflictDetectionType = {
  NONE: "NONE",
  VERSION: "VERSION",
} as const;
/**
 * @public
 */
export type ConflictDetectionType = (typeof ConflictDetectionType)[keyof typeof ConflictDetectionType];

/**
 * @public
 * @enum
 */
export const ConflictHandlerType = {
  AUTOMERGE: "AUTOMERGE",
  LAMBDA: "LAMBDA",
  NONE: "NONE",
  OPTIMISTIC_CONCURRENCY: "OPTIMISTIC_CONCURRENCY",
} as const;
/**
 * @public
 */
export type ConflictHandlerType = (typeof ConflictHandlerType)[keyof typeof ConflictHandlerType];

/**
 * @public
 * @enum
 */
export const GraphQLApiType = {
  GRAPHQL: "GRAPHQL",
  MERGED: "MERGED",
} as const;
/**
 * @public
 */
export type GraphQLApiType = (typeof GraphQLApiType)[keyof typeof GraphQLApiType];

/**
 * @public
 * @enum
 */
export const DataSourceLevelMetricsBehavior = {
  FULL_REQUEST_DATA_SOURCE_METRICS: "FULL_REQUEST_DATA_SOURCE_METRICS",
  PER_DATA_SOURCE_METRICS: "PER_DATA_SOURCE_METRICS",
} as const;
/**
 * @public
 */
export type DataSourceLevelMetricsBehavior =
  (typeof DataSourceLevelMetricsBehavior)[keyof typeof DataSourceLevelMetricsBehavior];

/**
 * @public
 * @enum
 */
export const OperationLevelMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OperationLevelMetricsConfig =
  (typeof OperationLevelMetricsConfig)[keyof typeof OperationLevelMetricsConfig];

/**
 * @public
 * @enum
 */
export const ResolverLevelMetricsBehavior = {
  FULL_REQUEST_RESOLVER_METRICS: "FULL_REQUEST_RESOLVER_METRICS",
  PER_RESOLVER_METRICS: "PER_RESOLVER_METRICS",
} as const;
/**
 * @public
 */
export type ResolverLevelMetricsBehavior =
  (typeof ResolverLevelMetricsBehavior)[keyof typeof ResolverLevelMetricsBehavior];

/**
 * @public
 * @enum
 */
export const GraphQLApiIntrospectionConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type GraphQLApiIntrospectionConfig =
  (typeof GraphQLApiIntrospectionConfig)[keyof typeof GraphQLApiIntrospectionConfig];

/**
 * @public
 * @enum
 */
export const FieldLogLevel = {
  ALL: "ALL",
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type FieldLogLevel = (typeof FieldLogLevel)[keyof typeof FieldLogLevel];

/**
 * @public
 * @enum
 */
export const DefaultAction = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

/**
 * @public
 * @enum
 */
export const GraphQLApiVisibility = {
  GLOBAL: "GLOBAL",
  PRIVATE: "PRIVATE",
} as const;
/**
 * @public
 */
export type GraphQLApiVisibility = (typeof GraphQLApiVisibility)[keyof typeof GraphQLApiVisibility];

/**
 * @public
 * @enum
 */
export const ResolverKind = {
  PIPELINE: "PIPELINE",
  UNIT: "UNIT",
} as const;
/**
 * @public
 */
export type ResolverKind = (typeof ResolverKind)[keyof typeof ResolverKind];

/**
 * @public
 * @enum
 */
export const ResolverLevelMetricsConfig = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ResolverLevelMetricsConfig = (typeof ResolverLevelMetricsConfig)[keyof typeof ResolverLevelMetricsConfig];

/**
 * @public
 * @enum
 */
export const TypeDefinitionFormat = {
  JSON: "JSON",
  SDL: "SDL",
} as const;
/**
 * @public
 */
export type TypeDefinitionFormat = (typeof TypeDefinitionFormat)[keyof typeof TypeDefinitionFormat];

/**
 * @public
 * @enum
 */
export const DataSourceIntrospectionStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type DataSourceIntrospectionStatus =
  (typeof DataSourceIntrospectionStatus)[keyof typeof DataSourceIntrospectionStatus];

/**
 * @public
 * @enum
 */
export const OutputType = {
  JSON: "JSON",
  SDL: "SDL",
} as const;
/**
 * @public
 */
export type OutputType = (typeof OutputType)[keyof typeof OutputType];

/**
 * @public
 * @enum
 */
export const SchemaStatus = {
  Active: "ACTIVE",
  Deleting: "DELETING",
  Failed: "FAILED",
  NotApplicable: "NOT_APPLICABLE",
  Processing: "PROCESSING",
  Success: "SUCCESS",
} as const;
/**
 * @public
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

/**
 * @public
 * @enum
 */
export const Ownership = {
  CURRENT_ACCOUNT: "CURRENT_ACCOUNT",
  OTHER_ACCOUNTS: "OTHER_ACCOUNTS",
} as const;
/**
 * @public
 */
export type Ownership = (typeof Ownership)[keyof typeof Ownership];
