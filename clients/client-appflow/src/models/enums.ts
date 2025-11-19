// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AggregationType = {
  NONE: "None",
  SINGLE_FILE: "SingleFile",
} as const;
/**
 * @public
 */
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType];

/**
 * @public
 * @enum
 */
export const AmplitudeConnectorOperator = {
  BETWEEN: "BETWEEN",
} as const;
/**
 * @public
 */
export type AmplitudeConnectorOperator = (typeof AmplitudeConnectorOperator)[keyof typeof AmplitudeConnectorOperator];

/**
 * @public
 * @enum
 */
export const OAuth2CustomPropType = {
  AUTH_URL: "AUTH_URL",
  TOKEN_URL: "TOKEN_URL",
} as const;
/**
 * @public
 */
export type OAuth2CustomPropType = (typeof OAuth2CustomPropType)[keyof typeof OAuth2CustomPropType];

/**
 * @public
 * @enum
 */
export const OAuth2GrantType = {
  AUTHORIZATION_CODE: "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
  JWT_BEARER: "JWT_BEARER",
} as const;
/**
 * @public
 */
export type OAuth2GrantType = (typeof OAuth2GrantType)[keyof typeof OAuth2GrantType];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  APIKEY: "APIKEY",
  BASIC: "BASIC",
  CUSTOM: "CUSTOM",
  OAUTH2: "OAUTH2",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const CatalogType = {
  GLUE: "GLUE",
} as const;
/**
 * @public
 */
export type CatalogType = (typeof CatalogType)[keyof typeof CatalogType];

/**
 * @public
 * @enum
 */
export const ConnectionMode = {
  PRIVATE: "Private",
  PUBLIC: "Public",
} as const;
/**
 * @public
 */
export type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];

/**
 * @public
 * @enum
 */
export const SalesforceDataTransferApi = {
  AUTOMATIC: "AUTOMATIC",
  BULKV2: "BULKV2",
  REST_SYNC: "REST_SYNC",
} as const;
/**
 * @public
 */
export type SalesforceDataTransferApi = (typeof SalesforceDataTransferApi)[keyof typeof SalesforceDataTransferApi];

/**
 * @public
 * @enum
 */
export const ConnectorProvisioningType = {
  LAMBDA: "LAMBDA",
} as const;
/**
 * @public
 */
export type ConnectorProvisioningType = (typeof ConnectorProvisioningType)[keyof typeof ConnectorProvisioningType];

/**
 * @public
 * @enum
 */
export const ConnectorType = {
  AMPLITUDE: "Amplitude",
  CUSTOMCONNECTOR: "CustomConnector",
  CUSTOMERPROFILES: "CustomerProfiles",
  DATADOG: "Datadog",
  DYNATRACE: "Dynatrace",
  EVENTBRIDGE: "EventBridge",
  GOOGLEANALYTICS: "Googleanalytics",
  HONEYCODE: "Honeycode",
  INFORNEXUS: "Infornexus",
  LOOKOUTMETRICS: "LookoutMetrics",
  MARKETO: "Marketo",
  PARDOT: "Pardot",
  REDSHIFT: "Redshift",
  S3: "S3",
  SALESFORCE: "Salesforce",
  SAPODATA: "SAPOData",
  SERVICENOW: "Servicenow",
  SINGULAR: "Singular",
  SLACK: "Slack",
  SNOWFLAKE: "Snowflake",
  TRENDMICRO: "Trendmicro",
  UPSOLVER: "Upsolver",
  VEEVA: "Veeva",
  ZENDESK: "Zendesk",
} as const;
/**
 * @public
 */
export type ConnectorType = (typeof ConnectorType)[keyof typeof ConnectorType];

/**
 * @public
 * @enum
 */
export const DataTransferApiType = {
  ASYNC: "ASYNC",
  AUTOMATIC: "AUTOMATIC",
  SYNC: "SYNC",
} as const;
/**
 * @public
 */
export type DataTransferApiType = (typeof DataTransferApiType)[keyof typeof DataTransferApiType];

/**
 * @public
 * @enum
 */
export const SupportedDataTransferType = {
  FILE: "FILE",
  RECORD: "RECORD",
} as const;
/**
 * @public
 */
export type SupportedDataTransferType = (typeof SupportedDataTransferType)[keyof typeof SupportedDataTransferType];

/**
 * @public
 * @enum
 */
export const Operators = {
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
export type Operators = (typeof Operators)[keyof typeof Operators];

/**
 * @public
 * @enum
 */
export const ScheduleFrequencyType = {
  BYMINUTE: "BYMINUTE",
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
  ONCE: "ONCE",
  WEEKLY: "WEEKLY",
} as const;
/**
 * @public
 */
export type ScheduleFrequencyType = (typeof ScheduleFrequencyType)[keyof typeof ScheduleFrequencyType];

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
export const WriteOperationType = {
  DELETE: "DELETE",
  INSERT: "INSERT",
  UPDATE: "UPDATE",
  UPSERT: "UPSERT",
} as const;
/**
 * @public
 */
export type WriteOperationType = (typeof WriteOperationType)[keyof typeof WriteOperationType];

/**
 * @public
 * @enum
 */
export const Operator = {
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
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const DatadogConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
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
export type DatadogConnectorOperator = (typeof DatadogConnectorOperator)[keyof typeof DatadogConnectorOperator];

/**
 * @public
 * @enum
 */
export const DynatraceConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
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
export type DynatraceConnectorOperator = (typeof DynatraceConnectorOperator)[keyof typeof DynatraceConnectorOperator];

/**
 * @public
 * @enum
 */
export const GoogleAnalyticsConnectorOperator = {
  BETWEEN: "BETWEEN",
  PROJECTION: "PROJECTION",
} as const;
/**
 * @public
 */
export type GoogleAnalyticsConnectorOperator =
  (typeof GoogleAnalyticsConnectorOperator)[keyof typeof GoogleAnalyticsConnectorOperator];

/**
 * @public
 * @enum
 */
export const InforNexusConnectorOperator = {
  ADDITION: "ADDITION",
  BETWEEN: "BETWEEN",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
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
export type InforNexusConnectorOperator =
  (typeof InforNexusConnectorOperator)[keyof typeof InforNexusConnectorOperator];

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
export const PardotConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
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
export type PardotConnectorOperator = (typeof PardotConnectorOperator)[keyof typeof PardotConnectorOperator];

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
export const SAPODataConnectorOperator = {
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
export type SAPODataConnectorOperator = (typeof SAPODataConnectorOperator)[keyof typeof SAPODataConnectorOperator];

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
export const SingularConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
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
export type SingularConnectorOperator = (typeof SingularConnectorOperator)[keyof typeof SingularConnectorOperator];

/**
 * @public
 * @enum
 */
export const SlackConnectorOperator = {
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
export type SlackConnectorOperator = (typeof SlackConnectorOperator)[keyof typeof SlackConnectorOperator];

/**
 * @public
 * @enum
 */
export const TrendmicroConnectorOperator = {
  ADDITION: "ADDITION",
  DIVISION: "DIVISION",
  EQUAL_TO: "EQUAL_TO",
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
export type TrendmicroConnectorOperator =
  (typeof TrendmicroConnectorOperator)[keyof typeof TrendmicroConnectorOperator];

/**
 * @public
 * @enum
 */
export const VeevaConnectorOperator = {
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
export type VeevaConnectorOperator = (typeof VeevaConnectorOperator)[keyof typeof VeevaConnectorOperator];

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
export const PrivateConnectionProvisioningFailureCause = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CONNECTOR_AUTHENTICATION: "CONNECTOR_AUTHENTICATION",
  CONNECTOR_SERVER: "CONNECTOR_SERVER",
  INTERNAL_SERVER: "INTERNAL_SERVER",
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type PrivateConnectionProvisioningFailureCause =
  (typeof PrivateConnectionProvisioningFailureCause)[keyof typeof PrivateConnectionProvisioningFailureCause];

/**
 * @public
 * @enum
 */
export const PrivateConnectionProvisioningStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type PrivateConnectionProvisioningStatus =
  (typeof PrivateConnectionProvisioningStatus)[keyof typeof PrivateConnectionProvisioningStatus];

/**
 * @public
 * @enum
 */
export const FileType = {
  CSV: "CSV",
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type FileType = (typeof FileType)[keyof typeof FileType];

/**
 * @public
 * @enum
 */
export const PathPrefix = {
  EXECUTION_ID: "EXECUTION_ID",
  SCHEMA_VERSION: "SCHEMA_VERSION",
} as const;
/**
 * @public
 */
export type PathPrefix = (typeof PathPrefix)[keyof typeof PathPrefix];

/**
 * @public
 * @enum
 */
export const PrefixFormat = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
  MONTH: "MONTH",
  YEAR: "YEAR",
} as const;
/**
 * @public
 */
export type PrefixFormat = (typeof PrefixFormat)[keyof typeof PrefixFormat];

/**
 * @public
 * @enum
 */
export const PrefixType = {
  FILENAME: "FILENAME",
  PATH: "PATH",
  PATH_AND_FILENAME: "PATH_AND_FILENAME",
} as const;
/**
 * @public
 */
export type PrefixType = (typeof PrefixType)[keyof typeof PrefixType];

/**
 * @public
 * @enum
 */
export const S3InputFileType = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type S3InputFileType = (typeof S3InputFileType)[keyof typeof S3InputFileType];

/**
 * @public
 * @enum
 */
export const OperatorPropertiesKeys = {
  CONCAT_FORMAT: "CONCAT_FORMAT",
  DATA_TYPE: "DATA_TYPE",
  DESTINATION_DATA_TYPE: "DESTINATION_DATA_TYPE",
  EXCLUDE_SOURCE_FIELDS_LIST: "EXCLUDE_SOURCE_FIELDS_LIST",
  INCLUDE_NEW_FIELDS: "INCLUDE_NEW_FIELDS",
  LOWER_BOUND: "LOWER_BOUND",
  MASK_LENGTH: "MASK_LENGTH",
  MASK_VALUE: "MASK_VALUE",
  MATH_OPERATION_FIELDS_ORDER: "MATH_OPERATION_FIELDS_ORDER",
  ORDERED_PARTITION_KEYS_LIST: "ORDERED_PARTITION_KEYS_LIST",
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
  MAP_ALL: "Map_all",
  MASK: "Mask",
  MERGE: "Merge",
  PARTITION: "Partition",
  PASSTHROUGH: "Passthrough",
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
export const FlowStatus = {
  ACTIVE: "Active",
  DELETED: "Deleted",
  DEPRECATED: "Deprecated",
  DRAFT: "Draft",
  ERRORED: "Errored",
  SUSPENDED: "Suspended",
} as const;
/**
 * @public
 */
export type FlowStatus = (typeof FlowStatus)[keyof typeof FlowStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  CANCELED: "Canceled",
  CANCELSTARTED: "CancelStarted",
  ERROR: "Error",
  INPROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];
