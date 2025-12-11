// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Action = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
  CAPTCHA: "CAPTCHA",
  CHALLENGE: "CHALLENGE",
  COUNT: "COUNT",
  EXCLUDED_AS_COUNT: "EXCLUDED_AS_COUNT",
} as const;
/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const CentralizationFailureReason = {
  DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION: "DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  TRUSTED_ACCESS_NOT_ENABLED: "TRUSTED_ACCESS_NOT_ENABLED",
} as const;
/**
 * @public
 */
export type CentralizationFailureReason =
  (typeof CentralizationFailureReason)[keyof typeof CentralizationFailureReason];

/**
 * @public
 * @enum
 */
export const EncryptionConflictResolutionStrategy = {
  ALLOW: "ALLOW",
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type EncryptionConflictResolutionStrategy =
  (typeof EncryptionConflictResolutionStrategy)[keyof typeof EncryptionConflictResolutionStrategy];

/**
 * @public
 * @enum
 */
export const EncryptionStrategy = {
  AWS_OWNED: "AWS_OWNED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type EncryptionStrategy = (typeof EncryptionStrategy)[keyof typeof EncryptionStrategy];

/**
 * @public
 * @enum
 */
export const EncryptedLogGroupStrategy = {
  ALLOW: "ALLOW",
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type EncryptedLogGroupStrategy = (typeof EncryptedLogGroupStrategy)[keyof typeof EncryptedLogGroupStrategy];

/**
 * @public
 * @enum
 */
export const RuleHealth = {
  HEALTHY: "Healthy",
  PROVISIONING: "Provisioning",
  UNHEALTHY: "Unhealthy",
} as const;
/**
 * @public
 */
export type RuleHealth = (typeof RuleHealth)[keyof typeof RuleHealth];

/**
 * @public
 * @enum
 */
export const SSEAlgorithm = {
  SSE_KMS: "aws:kms",
  SSE_S3: "AES256",
} as const;
/**
 * @public
 */
export type SSEAlgorithm = (typeof SSEAlgorithm)[keyof typeof SSEAlgorithm];

/**
 * @public
 * @enum
 */
export const DestinationType = {
  CLOUDWATCH_LOGS: "cloud-watch-logs",
} as const;
/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  JSON: "json",
  PLAIN: "plain",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const LogType = {
  APPLICATION: "APPLICATION_LOGS",
  USAGE: "USAGE_LOGS",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const FilterBehavior = {
  DROP: "DROP",
  KEEP: "KEEP",
} as const;
/**
 * @public
 */
export type FilterBehavior = (typeof FilterBehavior)[keyof typeof FilterBehavior];

/**
 * @public
 * @enum
 */
export const FilterRequirement = {
  MEETS_ALL: "MEETS_ALL",
  MEETS_ANY: "MEETS_ANY",
} as const;
/**
 * @public
 */
export type FilterRequirement = (typeof FilterRequirement)[keyof typeof FilterRequirement];

/**
 * @public
 * @enum
 */
export const WAFLogType = {
  WAF_LOGS: "WAF_LOGS",
} as const;
/**
 * @public
 */
export type WAFLogType = (typeof WAFLogType)[keyof typeof WAFLogType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_BEDROCK_AGENTCORE_BROWSER: "AWS::BedrockAgentCore::Browser",
  AWS_BEDROCK_AGENTCORE_CODE_INTERPRETER: "AWS::BedrockAgentCore::CodeInterpreter",
  AWS_BEDROCK_AGENTCORE_RUNTIME: "AWS::BedrockAgentCore::Runtime",
  AWS_CLOUDTRAIL: "AWS::CloudTrail",
  AWS_EC2_INSTANCE: "AWS::EC2::Instance",
  AWS_EC2_VPC: "AWS::EC2::VPC",
  AWS_EKS_CLUSTER: "AWS::EKS::Cluster",
  AWS_ELB_LOADBALANCER: "AWS::ElasticLoadBalancingV2::LoadBalancer",
  AWS_LAMDBA_FUNCTION: "AWS::Lambda::Function",
  AWS_ROUTE53_RESOLVER_RESOLVER_ENDPOINT: "AWS::Route53Resolver::ResolverEndpoint",
  AWS_WAF_V2_WEB_ACL: "AWS::WAFv2::WebACL",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const TelemetrySourceType = {
  EKS_API_LOGS: "EKS_API_LOGS",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_AUTHENTICATOR_LOGS: "EKS_AUTHENTICATOR_LOGS",
  EKS_CONTROLLER_MANAGER_LOGS: "EKS_CONTROLLER_MANAGER_LOGS",
  EKS_SCHEDULER_LOGS: "EKS_SCHEDULER_LOGS",
  ROUTE53_RESOLVER_QUERY_LOGS: "ROUTE53_RESOLVER_QUERY_LOGS",
  VPC_FLOW_LOGS: "VPC_FLOW_LOGS",
} as const;
/**
 * @public
 */
export type TelemetrySourceType = (typeof TelemetrySourceType)[keyof typeof TelemetrySourceType];

/**
 * @public
 * @enum
 */
export const TelemetryType = {
  LOGS: "Logs",
  METRICS: "Metrics",
  TRACES: "Traces",
} as const;
/**
 * @public
 */
export type TelemetryType = (typeof TelemetryType)[keyof typeof TelemetryType];

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const TelemetryEnrichmentStatus = {
  IMPAIRED: "Impaired",
  RUNNING: "Running",
  STOPPED: "Stopped",
} as const;
/**
 * @public
 */
export type TelemetryEnrichmentStatus = (typeof TelemetryEnrichmentStatus)[keyof typeof TelemetryEnrichmentStatus];

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED_START: "FAILED_START",
  FAILED_STOP: "FAILED_STOP",
  NOT_STARTED: "NOT_STARTED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const TelemetryPipelineStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type TelemetryPipelineStatus = (typeof TelemetryPipelineStatus)[keyof typeof TelemetryPipelineStatus];

/**
 * @public
 * @enum
 */
export const TelemetryState = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
  NOT_APPLICABLE: "NotApplicable",
} as const;
/**
 * @public
 */
export type TelemetryState = (typeof TelemetryState)[keyof typeof TelemetryState];

/**
 * @public
 * @enum
 */
export const RecordFormat = {
  JSON: "JSON",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type RecordFormat = (typeof RecordFormat)[keyof typeof RecordFormat];
