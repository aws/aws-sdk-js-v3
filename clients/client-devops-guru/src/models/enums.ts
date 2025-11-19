// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const NotificationMessageType = {
  CLOSED_INSIGHT: "CLOSED_INSIGHT",
  NEW_ASSOCIATION: "NEW_ASSOCIATION",
  NEW_INSIGHT: "NEW_INSIGHT",
  NEW_RECOMMENDATION: "NEW_RECOMMENDATION",
  SEVERITY_UPGRADED: "SEVERITY_UPGRADED",
} as const;
/**
 * @public
 */
export type NotificationMessageType = (typeof NotificationMessageType)[keyof typeof NotificationMessageType];

/**
 * @public
 * @enum
 */
export const InsightSeverity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type InsightSeverity = (typeof InsightSeverity)[keyof typeof InsightSeverity];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  INVALID_PARAMETER_COMBINATION: "INVALID_PARAMETER_COMBINATION",
  OTHER: "OTHER",
  PARAMETER_INCONSISTENT_WITH_SERVICE_STATE: "PARAMETER_INCONSISTENT_WITH_SERVICE_STATE",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const EventSourceOptInStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EventSourceOptInStatus = (typeof EventSourceOptInStatus)[keyof typeof EventSourceOptInStatus];

/**
 * @public
 * @enum
 */
export const LogAnomalyType = {
  BLOCK_FORMAT: "BLOCK_FORMAT",
  FORMAT: "FORMAT",
  HTTP_CODE: "HTTP_CODE",
  KEYWORD: "KEYWORD",
  KEYWORD_TOKEN: "KEYWORD_TOKEN",
  NEW_FIELD_NAME: "NEW_FIELD_NAME",
  NUMERICAL_NAN: "NUMERICAL_NAN",
  NUMERICAL_POINT: "NUMERICAL_POINT",
} as const;
/**
 * @public
 */
export type LogAnomalyType = (typeof LogAnomalyType)[keyof typeof LogAnomalyType];

/**
 * @public
 * @enum
 */
export const AnomalySeverity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type AnomalySeverity = (typeof AnomalySeverity)[keyof typeof AnomalySeverity];

/**
 * @public
 * @enum
 */
export const CloudWatchMetricDataStatusCode = {
  COMPLETE: "Complete",
  INTERNAL_ERROR: "InternalError",
  PARTIAL_DATA: "PartialData",
} as const;
/**
 * @public
 */
export type CloudWatchMetricDataStatusCode =
  (typeof CloudWatchMetricDataStatusCode)[keyof typeof CloudWatchMetricDataStatusCode];

/**
 * @public
 * @enum
 */
export const CloudWatchMetricsStat = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
  MINIMUM: "Minimum",
  P50: "p50",
  P90: "p90",
  P99: "p99",
  SAMPLE_COUNT: "SampleCount",
  SUM: "Sum",
} as const;
/**
 * @public
 */
export type CloudWatchMetricsStat = (typeof CloudWatchMetricsStat)[keyof typeof CloudWatchMetricsStat];

/**
 * @public
 * @enum
 */
export const AnomalyStatus = {
  CLOSED: "CLOSED",
  ONGOING: "ONGOING",
} as const;
/**
 * @public
 */
export type AnomalyStatus = (typeof AnomalyStatus)[keyof typeof AnomalyStatus];

/**
 * @public
 * @enum
 */
export const AnomalyType = {
  CAUSAL: "CAUSAL",
  CONTEXTUAL: "CONTEXTUAL",
} as const;
/**
 * @public
 */
export type AnomalyType = (typeof AnomalyType)[keyof typeof AnomalyType];

/**
 * @public
 * @enum
 */
export const InsightFeedbackOption = {
  ALERT_TOO_SENSITIVE: "ALERT_TOO_SENSITIVE",
  DATA_INCORRECT: "DATA_INCORRECT",
  DATA_NOISY_ANOMALY: "DATA_NOISY_ANOMALY",
  RECOMMENDATION_USEFUL: "RECOMMENDATION_USEFUL",
  VALID_COLLECTION: "VALID_COLLECTION",
} as const;
/**
 * @public
 */
export type InsightFeedbackOption = (typeof InsightFeedbackOption)[keyof typeof InsightFeedbackOption];

/**
 * @public
 * @enum
 */
export const InsightStatus = {
  CLOSED: "CLOSED",
  ONGOING: "ONGOING",
} as const;
/**
 * @public
 */
export type InsightStatus = (typeof InsightStatus)[keyof typeof InsightStatus];

/**
 * @public
 * @enum
 */
export const OrganizationResourceCollectionType = {
  AWS_ACCOUNT: "AWS_ACCOUNT",
  AWS_CLOUD_FORMATION: "AWS_CLOUD_FORMATION",
  AWS_SERVICE: "AWS_SERVICE",
  AWS_TAGS: "AWS_TAGS",
} as const;
/**
 * @public
 */
export type OrganizationResourceCollectionType =
  (typeof OrganizationResourceCollectionType)[keyof typeof OrganizationResourceCollectionType];

/**
 * @public
 * @enum
 */
export const ServiceName = {
  API_GATEWAY: "API_GATEWAY",
  APPLICATION_ELB: "APPLICATION_ELB",
  AUTO_SCALING_GROUP: "AUTO_SCALING_GROUP",
  CLOUD_FRONT: "CLOUD_FRONT",
  DYNAMO_DB: "DYNAMO_DB",
  EC2: "EC2",
  ECS: "ECS",
  EKS: "EKS",
  ELASTIC_BEANSTALK: "ELASTIC_BEANSTALK",
  ELASTI_CACHE: "ELASTI_CACHE",
  ELB: "ELB",
  ES: "ES",
  KINESIS: "KINESIS",
  LAMBDA: "LAMBDA",
  NAT_GATEWAY: "NAT_GATEWAY",
  NETWORK_ELB: "NETWORK_ELB",
  RDS: "RDS",
  REDSHIFT: "REDSHIFT",
  ROUTE_53: "ROUTE_53",
  S3: "S3",
  SAGE_MAKER: "SAGE_MAKER",
  SNS: "SNS",
  SQS: "SQS",
  STEP_FUNCTIONS: "STEP_FUNCTIONS",
  SWF: "SWF",
} as const;
/**
 * @public
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

/**
 * @public
 * @enum
 */
export const ResourceCollectionType = {
  AWS_CLOUD_FORMATION: "AWS_CLOUD_FORMATION",
  AWS_SERVICE: "AWS_SERVICE",
  AWS_TAGS: "AWS_TAGS",
} as const;
/**
 * @public
 */
export type ResourceCollectionType = (typeof ResourceCollectionType)[keyof typeof ResourceCollectionType];

/**
 * @public
 * @enum
 */
export const OptInStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OptInStatus = (typeof OptInStatus)[keyof typeof OptInStatus];

/**
 * @public
 * @enum
 */
export const ServerSideEncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;
/**
 * @public
 */
export type ServerSideEncryptionType = (typeof ServerSideEncryptionType)[keyof typeof ServerSideEncryptionType];

/**
 * @public
 * @enum
 */
export const CostEstimationServiceResourceState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type CostEstimationServiceResourceState =
  (typeof CostEstimationServiceResourceState)[keyof typeof CostEstimationServiceResourceState];

/**
 * @public
 * @enum
 */
export const CostEstimationStatus = {
  COMPLETED: "COMPLETED",
  ONGOING: "ONGOING",
} as const;
/**
 * @public
 */
export type CostEstimationStatus = (typeof CostEstimationStatus)[keyof typeof CostEstimationStatus];

/**
 * @public
 * @enum
 */
export const EventDataSource = {
  AWS_CLOUD_TRAIL: "AWS_CLOUD_TRAIL",
  AWS_CODE_DEPLOY: "AWS_CODE_DEPLOY",
} as const;
/**
 * @public
 */
export type EventDataSource = (typeof EventDataSource)[keyof typeof EventDataSource];

/**
 * @public
 * @enum
 */
export const EventClass = {
  CONFIG_CHANGE: "CONFIG_CHANGE",
  DEPLOYMENT: "DEPLOYMENT",
  INFRASTRUCTURE: "INFRASTRUCTURE",
  SCHEMA_CHANGE: "SCHEMA_CHANGE",
  SECURITY_CHANGE: "SECURITY_CHANGE",
} as const;
/**
 * @public
 */
export type EventClass = (typeof EventClass)[keyof typeof EventClass];

/**
 * @public
 * @enum
 */
export const InsightType = {
  PROACTIVE: "PROACTIVE",
  REACTIVE: "REACTIVE",
} as const;
/**
 * @public
 */
export type InsightType = (typeof InsightType)[keyof typeof InsightType];

/**
 * @public
 * @enum
 */
export const ResourcePermission = {
  FULL_PERMISSION: "FULL_PERMISSION",
  MISSING_PERMISSION: "MISSING_PERMISSION",
} as const;
/**
 * @public
 */
export type ResourcePermission = (typeof ResourcePermission)[keyof typeof ResourcePermission];

/**
 * @public
 * @enum
 */
export const ResourceTypeFilter = {
  CLOUDFRONT_DISTRIBUTION: "CLOUDFRONT_DISTRIBUTION",
  DYNAMODB_TABLE: "DYNAMODB_TABLE",
  EC2_NAT_GATEWAY: "EC2_NAT_GATEWAY",
  ECS_CLUSTER: "ECS_CLUSTER",
  ECS_SERVICE: "ECS_SERVICE",
  EKS_CLUSTER: "EKS_CLUSTER",
  ELASTICACHE_CACHE_CLUSTER: "ELASTICACHE_CACHE_CLUSTER",
  ELASTICSEARCH_DOMAIN: "ELASTICSEARCH_DOMAIN",
  ELASTIC_BEANSTALK_ENVIRONMENT: "ELASTIC_BEANSTALK_ENVIRONMENT",
  ELASTIC_LOAD_BALANCER_LOAD_BALANCER: "ELASTIC_LOAD_BALANCER_LOAD_BALANCER",
  ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER: "ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER",
  ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP: "ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP",
  KINESIS_STREAM: "KINESIS_STREAM",
  LAMBDA_FUNCTION: "LAMBDA_FUNCTION",
  LOG_GROUPS: "LOG_GROUPS",
  OPEN_SEARCH_SERVICE_DOMAIN: "OPEN_SEARCH_SERVICE_DOMAIN",
  RDS_DB_CLUSTER: "RDS_DB_CLUSTER",
  RDS_DB_INSTANCE: "RDS_DB_INSTANCE",
  REDSHIFT_CLUSTER: "REDSHIFT_CLUSTER",
  ROUTE53_HEALTH_CHECK: "ROUTE53_HEALTH_CHECK",
  ROUTE53_HOSTED_ZONE: "ROUTE53_HOSTED_ZONE",
  S3_BUCKET: "S3_BUCKET",
  SAGEMAKER_ENDPOINT: "SAGEMAKER_ENDPOINT",
  SNS_TOPIC: "SNS_TOPIC",
  SQS_QUEUE: "SQS_QUEUE",
  STEP_FUNCTIONS_ACTIVITY: "STEP_FUNCTIONS_ACTIVITY",
  STEP_FUNCTIONS_STATE_MACHINE: "STEP_FUNCTIONS_STATE_MACHINE",
} as const;
/**
 * @public
 */
export type ResourceTypeFilter = (typeof ResourceTypeFilter)[keyof typeof ResourceTypeFilter];

/**
 * @public
 * @enum
 */
export const Locale = {
  DE_DE: "DE_DE",
  EN_GB: "EN_GB",
  EN_US: "EN_US",
  ES_ES: "ES_ES",
  FR_FR: "FR_FR",
  IT_IT: "IT_IT",
  JA_JP: "JA_JP",
  KO_KR: "KO_KR",
  PT_BR: "PT_BR",
  ZH_CN: "ZH_CN",
  ZH_TW: "ZH_TW",
} as const;
/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 * @enum
 */
export const UpdateResourceCollectionAction = {
  ADD: "ADD",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type UpdateResourceCollectionAction =
  (typeof UpdateResourceCollectionAction)[keyof typeof UpdateResourceCollectionAction];
