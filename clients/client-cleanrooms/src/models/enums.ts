// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AutoRefreshMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoRefreshMode = (typeof AutoRefreshMode)[keyof typeof AutoRefreshMode];

/**
 * @public
 * @enum
 */
export const AccessBudgetType = {
  CALENDAR_DAY: "CALENDAR_DAY",
  CALENDAR_MONTH: "CALENDAR_MONTH",
  CALENDAR_WEEK: "CALENDAR_WEEK",
  LIFETIME: "LIFETIME",
} as const;
/**
 * @public
 */
export type AccessBudgetType = (typeof AccessBudgetType)[keyof typeof AccessBudgetType];

/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
} as const;
/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * @enum
 */
export const AdditionalAnalyses = {
  ALLOWED: "ALLOWED",
  NOT_ALLOWED: "NOT_ALLOWED",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type AdditionalAnalyses = (typeof AdditionalAnalyses)[keyof typeof AdditionalAnalyses];

/**
 * @public
 * @enum
 */
export const AggregateFunctionName = {
  AVG: "AVG",
  COUNT: "COUNT",
  COUNT_DISTINCT: "COUNT_DISTINCT",
  SUM: "SUM",
  SUM_DISTINCT: "SUM_DISTINCT",
} as const;
/**
 * @public
 */
export type AggregateFunctionName = (typeof AggregateFunctionName)[keyof typeof AggregateFunctionName];

/**
 * @public
 * @enum
 */
export const AggregationType = {
  COUNT_DISTINCT: "COUNT_DISTINCT",
} as const;
/**
 * @public
 */
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType];

/**
 * @public
 * @enum
 */
export const SupportedS3Region = {
  AF_SOUTH_1: "af-south-1",
  AP_EAST_1: "ap-east-1",
  AP_EAST_2: "ap-east-2",
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_NORTHEAST_3: "ap-northeast-3",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTHEAST_3: "ap-southeast-3",
  AP_SOUTHEAST_4: "ap-southeast-4",
  AP_SOUTHEAST_5: "ap-southeast-5",
  AP_SOUTHEAST_7: "ap-southeast-7",
  AP_SOUTH_1: "ap-south-1",
  AP_SOUTH_2: "ap-south-2",
  CA_CENTRAL_1: "ca-central-1",
  CA_WEST_1: "ca-west-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_CENTRAL_2: "eu-central-2",
  EU_NORTH_1: "eu-north-1",
  EU_SOUTH_1: "eu-south-1",
  EU_SOUTH_2: "eu-south-2",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  EU_WEST_3: "eu-west-3",
  IL_CENTRAL_1: "il-central-1",
  ME_CENTRAL_1: "me-central-1",
  ME_SOUTH_1: "me-south-1",
  MX_CENTRAL_1: "mx-central-1",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_1: "us-west-1",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type SupportedS3Region = (typeof SupportedS3Region)[keyof typeof SupportedS3Region];

/**
 * @public
 * @enum
 */
export const AnalysisFormat = {
  PYSPARK_1_0: "PYSPARK_1_0",
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type AnalysisFormat = (typeof AnalysisFormat)[keyof typeof AnalysisFormat];

/**
 * @public
 * @enum
 */
export const AnalysisMethod = {
  DIRECT_JOB: "DIRECT_JOB",
  DIRECT_QUERY: "DIRECT_QUERY",
  MULTIPLE: "MULTIPLE",
} as const;
/**
 * @public
 */
export type AnalysisMethod = (typeof AnalysisMethod)[keyof typeof AnalysisMethod];

/**
 * @public
 * @enum
 */
export const ParameterType = {
  BIGINT: "BIGINT",
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  BYTE: "BYTE",
  CHAR: "CHAR",
  CHARACTER: "CHARACTER",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DOUBLE: "DOUBLE",
  DOUBLE_PRECISION: "DOUBLE_PRECISION",
  FLOAT: "FLOAT",
  INT: "INT",
  INTEGER: "INTEGER",
  LONG: "LONG",
  NUMERIC: "NUMERIC",
  REAL: "REAL",
  SHORT: "SHORT",
  SMALLINT: "SMALLINT",
  STRING: "STRING",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  TIMESTAMPTZ: "TIMESTAMPTZ",
  TIMESTAMP_LTZ: "TIMESTAMP_LTZ",
  TIMESTAMP_NTZ: "TIMESTAMP_NTZ",
  TIMETZ: "TIMETZ",
  TINYINT: "TINYINT",
  VARBYTE: "VARBYTE",
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * @public
 * @enum
 */
export const JoinOperator = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type JoinOperator = (typeof JoinOperator)[keyof typeof JoinOperator];

/**
 * @public
 * @enum
 */
export const JoinRequiredOption = {
  QUERY_RUNNER: "QUERY_RUNNER",
} as const;
/**
 * @public
 */
export type JoinRequiredOption = (typeof JoinRequiredOption)[keyof typeof JoinRequiredOption];

/**
 * @public
 * @enum
 */
export const ScalarFunctions = {
  ABS: "ABS",
  CAST: "CAST",
  CEILING: "CEILING",
  COALESCE: "COALESCE",
  CONVERT: "CONVERT",
  CURRENT_DATE: "CURRENT_DATE",
  DATEADD: "DATEADD",
  EXTRACT: "EXTRACT",
  FLOOR: "FLOOR",
  GETDATE: "GETDATE",
  LN: "LN",
  LOG: "LOG",
  LOWER: "LOWER",
  ROUND: "ROUND",
  RTRIM: "RTRIM",
  SQRT: "SQRT",
  SUBSTRING: "SUBSTRING",
  TO_CHAR: "TO_CHAR",
  TO_DATE: "TO_DATE",
  TO_NUMBER: "TO_NUMBER",
  TO_TIMESTAMP: "TO_TIMESTAMP",
  TRIM: "TRIM",
  TRUNC: "TRUNC",
  UPPER: "UPPER",
} as const;
/**
 * @public
 */
export type ScalarFunctions = (typeof ScalarFunctions)[keyof typeof ScalarFunctions];

/**
 * @public
 * @enum
 */
export const AnalysisRuleType = {
  AGGREGATION: "AGGREGATION",
  CUSTOM: "CUSTOM",
  ID_MAPPING_TABLE: "ID_MAPPING_TABLE",
  LIST: "LIST",
} as const;
/**
 * @public
 */
export type AnalysisRuleType = (typeof AnalysisRuleType)[keyof typeof AnalysisRuleType];

/**
 * @public
 * @enum
 */
export const ErrorMessageType = {
  DETAILED: "DETAILED",
} as const;
/**
 * @public
 */
export type ErrorMessageType = (typeof ErrorMessageType)[keyof typeof ErrorMessageType];

/**
 * @public
 * @enum
 */
export const AnalysisTemplateValidationStatus = {
  INVALID: "INVALID",
  UNABLE_TO_VALIDATE: "UNABLE_TO_VALIDATE",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type AnalysisTemplateValidationStatus =
  (typeof AnalysisTemplateValidationStatus)[keyof typeof AnalysisTemplateValidationStatus];

/**
 * @public
 * @enum
 */
export const AnalysisTemplateValidationType = {
  DIFFERENTIAL_PRIVACY: "DIFFERENTIAL_PRIVACY",
} as const;
/**
 * @public
 */
export type AnalysisTemplateValidationType =
  (typeof AnalysisTemplateValidationType)[keyof typeof AnalysisTemplateValidationType];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  ALREADY_EXISTS: "ALREADY_EXISTS",
  INVALID_STATE: "INVALID_STATE",
  SUBRESOURCES_EXIST: "SUBRESOURCES_EXIST",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  COLLABORATION: "COLLABORATION",
  CONFIGURED_TABLE: "CONFIGURED_TABLE",
  CONFIGURED_TABLE_ASSOCIATION: "CONFIGURED_TABLE_ASSOCIATION",
  MEMBERSHIP: "MEMBERSHIP",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  IAM_SYNCHRONIZATION_DELAY: "IAM_SYNCHRONIZATION_DELAY",
  INVALID_CONFIGURATION: "INVALID_CONFIGURATION",
  INVALID_QUERY: "INVALID_QUERY",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AnalysisType = {
  ADDITIONAL_ANALYSIS: "ADDITIONAL_ANALYSIS",
  DIRECT_ANALYSIS: "DIRECT_ANALYSIS",
} as const;
/**
 * @public
 */
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType];

/**
 * @public
 * @enum
 */
export const AnalyticsEngine = {
  CLEAN_ROOMS_SQL: "CLEAN_ROOMS_SQL",
  SPARK: "SPARK",
} as const;
/**
 * @public
 */
export type AnalyticsEngine = (typeof AnalyticsEngine)[keyof typeof AnalyticsEngine];

/**
 * @public
 * @enum
 */
export const CommercialRegion = {
  AF_SOUTH_1: "af-south-1",
  AP_EAST_1: "ap-east-1",
  AP_EAST_2: "ap-east-2",
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_NORTHEAST_3: "ap-northeast-3",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTHEAST_3: "ap-southeast-3",
  AP_SOUTHEAST_4: "ap-southeast-4",
  AP_SOUTHEAST_5: "ap-southeast-5",
  AP_SOUTHEAST_7: "ap-southeast-7",
  AP_SOUTH_1: "ap-south-1",
  AP_SOUTH_2: "ap-south-2",
  CA_CENTRAL_1: "ca-central-1",
  CA_WEST_1: "ca-west-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_CENTRAL_2: "eu-central-2",
  EU_NORTH_1: "eu-north-1",
  EU_SOUTH_1: "eu-south-1",
  EU_SOUTH_2: "eu-south-2",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  EU_WEST_3: "eu-west-3",
  IL_CENTRAL_1: "il-central-1",
  ME_CENTRAL_1: "me-central-1",
  ME_SOUTH_1: "me-south-1",
  MX_CENTRAL_1: "mx-central-1",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_1: "us-west-1",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type CommercialRegion = (typeof CommercialRegion)[keyof typeof CommercialRegion];

/**
 * @public
 * @enum
 */
export const AutoApprovedChangeType = {
  ADD_MEMBER: "ADD_MEMBER",
} as const;
/**
 * @public
 */
export type AutoApprovedChangeType = (typeof AutoApprovedChangeType)[keyof typeof AutoApprovedChangeType];

/**
 * @public
 * @enum
 */
export const SchemaConfiguration = {
  DIFFERENTIAL_PRIVACY: "DIFFERENTIAL_PRIVACY",
} as const;
/**
 * @public
 */
export type SchemaConfiguration = (typeof SchemaConfiguration)[keyof typeof SchemaConfiguration];

/**
 * @public
 * @enum
 */
export const SchemaStatusReasonCode = {
  ADDITIONAL_ANALYSES_NOT_ALLOWED: "ADDITIONAL_ANALYSES_NOT_ALLOWED",
  ADDITIONAL_ANALYSES_NOT_CONFIGURED: "ADDITIONAL_ANALYSES_NOT_CONFIGURED",
  ANALYSIS_PROVIDERS_NOT_CONFIGURED: "ANALYSIS_PROVIDERS_NOT_CONFIGURED",
  ANALYSIS_RULE_MISSING: "ANALYSIS_RULE_MISSING",
  ANALYSIS_RULE_TYPES_NOT_COMPATIBLE: "ANALYSIS_RULE_TYPES_NOT_COMPATIBLE",
  ANALYSIS_TEMPLATES_NOT_CONFIGURED: "ANALYSIS_TEMPLATES_NOT_CONFIGURED",
  COLLABORATION_ANALYSIS_RULE_NOT_CONFIGURED: "COLLABORATION_ANALYSIS_RULE_NOT_CONFIGURED",
  DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED: "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED",
  ID_MAPPING_TABLE_NOT_POPULATED: "ID_MAPPING_TABLE_NOT_POPULATED",
  RESULT_RECEIVERS_NOT_ALLOWED: "RESULT_RECEIVERS_NOT_ALLOWED",
  RESULT_RECEIVERS_NOT_CONFIGURED: "RESULT_RECEIVERS_NOT_CONFIGURED",
} as const;
/**
 * @public
 */
export type SchemaStatusReasonCode = (typeof SchemaStatusReasonCode)[keyof typeof SchemaStatusReasonCode];

/**
 * @public
 * @enum
 */
export const SchemaStatus = {
  NOT_READY: "NOT_READY",
  READY: "READY",
} as const;
/**
 * @public
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

/**
 * @public
 * @enum
 */
export const IdNamespaceType = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;
/**
 * @public
 */
export type IdNamespaceType = (typeof IdNamespaceType)[keyof typeof IdNamespaceType];

/**
 * @public
 * @enum
 */
export const SelectedAnalysisMethod = {
  DIRECT_JOB: "DIRECT_JOB",
  DIRECT_QUERY: "DIRECT_QUERY",
} as const;
/**
 * @public
 */
export type SelectedAnalysisMethod = (typeof SelectedAnalysisMethod)[keyof typeof SelectedAnalysisMethod];

/**
 * @public
 * @enum
 */
export const SchemaType = {
  ID_MAPPING_TABLE: "ID_MAPPING_TABLE",
  TABLE: "TABLE",
} as const;
/**
 * @public
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

/**
 * @public
 * @enum
 */
export const MemberAbility = {
  CAN_QUERY: "CAN_QUERY",
  CAN_RECEIVE_RESULTS: "CAN_RECEIVE_RESULTS",
  CAN_RUN_JOB: "CAN_RUN_JOB",
} as const;
/**
 * @public
 */
export type MemberAbility = (typeof MemberAbility)[keyof typeof MemberAbility];

/**
 * @public
 * @enum
 */
export const CustomMLMemberAbility = {
  CAN_RECEIVE_INFERENCE_OUTPUT: "CAN_RECEIVE_INFERENCE_OUTPUT",
  CAN_RECEIVE_MODEL_OUTPUT: "CAN_RECEIVE_MODEL_OUTPUT",
} as const;
/**
 * @public
 */
export type CustomMLMemberAbility = (typeof CustomMLMemberAbility)[keyof typeof CustomMLMemberAbility];

/**
 * @public
 * @enum
 */
export const CollaborationJobLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CollaborationJobLogStatus = (typeof CollaborationJobLogStatus)[keyof typeof CollaborationJobLogStatus];

/**
 * @public
 * @enum
 */
export const CollaborationQueryLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CollaborationQueryLogStatus =
  (typeof CollaborationQueryLogStatus)[keyof typeof CollaborationQueryLogStatus];

/**
 * @public
 * @enum
 */
export const MemberStatus = {
  ACTIVE: "ACTIVE",
  INVITED: "INVITED",
  LEFT: "LEFT",
  REMOVED: "REMOVED",
} as const;
/**
 * @public
 */
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

/**
 * @public
 * @enum
 */
export const ChangeSpecificationType = {
  MEMBER: "MEMBER",
} as const;
/**
 * @public
 */
export type ChangeSpecificationType = (typeof ChangeSpecificationType)[keyof typeof ChangeSpecificationType];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  ADD_MEMBER: "ADD_MEMBER",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const ChangeRequestStatus = {
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  COMMITTED: "COMMITTED",
  DENIED: "DENIED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ChangeRequestStatus = (typeof ChangeRequestStatus)[keyof typeof ChangeRequestStatus];

/**
 * @public
 * @enum
 */
export const PrivacyBudgetTemplateAutoRefresh = {
  CALENDAR_MONTH: "CALENDAR_MONTH",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type PrivacyBudgetTemplateAutoRefresh =
  (typeof PrivacyBudgetTemplateAutoRefresh)[keyof typeof PrivacyBudgetTemplateAutoRefresh];

/**
 * @public
 * @enum
 */
export const PrivacyBudgetType = {
  ACCESS_BUDGET: "ACCESS_BUDGET",
  DIFFERENTIAL_PRIVACY: "DIFFERENTIAL_PRIVACY",
} as const;
/**
 * @public
 */
export type PrivacyBudgetType = (typeof PrivacyBudgetType)[keyof typeof PrivacyBudgetType];

/**
 * @public
 * @enum
 */
export const DifferentialPrivacyAggregationType = {
  AVG: "AVG",
  COUNT: "COUNT",
  COUNT_DISTINCT: "COUNT_DISTINCT",
  STDDEV: "STDDEV",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type DifferentialPrivacyAggregationType =
  (typeof DifferentialPrivacyAggregationType)[keyof typeof DifferentialPrivacyAggregationType];

/**
 * @public
 * @enum
 */
export const FilterableMemberStatus = {
  ACTIVE: "ACTIVE",
  INVITED: "INVITED",
} as const;
/**
 * @public
 */
export type FilterableMemberStatus = (typeof FilterableMemberStatus)[keyof typeof FilterableMemberStatus];

/**
 * @public
 * @enum
 */
export const ConfiguredTableAssociationAnalysisRuleType = {
  AGGREGATION: "AGGREGATION",
  CUSTOM: "CUSTOM",
  LIST: "LIST",
} as const;
/**
 * @public
 */
export type ConfiguredTableAssociationAnalysisRuleType =
  (typeof ConfiguredTableAssociationAnalysisRuleType)[keyof typeof ConfiguredTableAssociationAnalysisRuleType];

/**
 * @public
 * @enum
 */
export const ConfiguredTableAnalysisRuleType = {
  AGGREGATION: "AGGREGATION",
  CUSTOM: "CUSTOM",
  LIST: "LIST",
} as const;
/**
 * @public
 */
export type ConfiguredTableAnalysisRuleType =
  (typeof ConfiguredTableAnalysisRuleType)[keyof typeof ConfiguredTableAnalysisRuleType];

/**
 * @public
 * @enum
 */
export const JobType = {
  BATCH: "BATCH",
  DELETE_ONLY: "DELETE_ONLY",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const ResultFormat = {
  CSV: "CSV",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type ResultFormat = (typeof ResultFormat)[keyof typeof ResultFormat];

/**
 * @public
 * @enum
 */
export const MembershipJobLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MembershipJobLogStatus = (typeof MembershipJobLogStatus)[keyof typeof MembershipJobLogStatus];

/**
 * @public
 * @enum
 */
export const MembershipQueryLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MembershipQueryLogStatus = (typeof MembershipQueryLogStatus)[keyof typeof MembershipQueryLogStatus];

/**
 * @public
 * @enum
 */
export const MembershipStatus = {
  ACTIVE: "ACTIVE",
  COLLABORATION_DELETED: "COLLABORATION_DELETED",
  REMOVED: "REMOVED",
} as const;
/**
 * @public
 */
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];

/**
 * @public
 * @enum
 */
export const ProtectedJobWorkerComputeType = {
  CR1X: "CR.1X",
  CR4X: "CR.4X",
} as const;
/**
 * @public
 */
export type ProtectedJobWorkerComputeType =
  (typeof ProtectedJobWorkerComputeType)[keyof typeof ProtectedJobWorkerComputeType];

/**
 * @public
 * @enum
 */
export const ProtectedJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ProtectedJobStatus = (typeof ProtectedJobStatus)[keyof typeof ProtectedJobStatus];

/**
 * @public
 * @enum
 */
export const WorkerComputeType = {
  CR1X: "CR.1X",
  CR4X: "CR.4X",
} as const;
/**
 * @public
 */
export type WorkerComputeType = (typeof WorkerComputeType)[keyof typeof WorkerComputeType];

/**
 * @public
 * @enum
 */
export const ProtectedQueryStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type ProtectedQueryStatus = (typeof ProtectedQueryStatus)[keyof typeof ProtectedQueryStatus];

/**
 * @public
 * @enum
 */
export const ProtectedJobAnalysisType = {
  DIRECT_ANALYSIS: "DIRECT_ANALYSIS",
} as const;
/**
 * @public
 */
export type ProtectedJobAnalysisType = (typeof ProtectedJobAnalysisType)[keyof typeof ProtectedJobAnalysisType];

/**
 * @public
 * @enum
 */
export const ProtectedJobType = {
  PYSPARK: "PYSPARK",
} as const;
/**
 * @public
 */
export type ProtectedJobType = (typeof ProtectedJobType)[keyof typeof ProtectedJobType];

/**
 * @public
 * @enum
 */
export const ProtectedQueryType = {
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type ProtectedQueryType = (typeof ProtectedQueryType)[keyof typeof ProtectedQueryType];

/**
 * @public
 * @enum
 */
export const TargetProtectedJobStatus = {
  CANCELLED: "CANCELLED",
} as const;
/**
 * @public
 */
export type TargetProtectedJobStatus = (typeof TargetProtectedJobStatus)[keyof typeof TargetProtectedJobStatus];

/**
 * @public
 * @enum
 */
export const TargetProtectedQueryStatus = {
  CANCELLED: "CANCELLED",
} as const;
/**
 * @public
 */
export type TargetProtectedQueryStatus = (typeof TargetProtectedQueryStatus)[keyof typeof TargetProtectedQueryStatus];
