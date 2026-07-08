// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AchievabilityStatus = {
  ACHIEVABLE: "ACHIEVABLE",
  NOT_ACHIEVABLE: "NOT_ACHIEVABLE",
} as const;
/**
 * @public
 */
export type AchievabilityStatus = (typeof AchievabilityStatus)[keyof typeof AchievabilityStatus];

/**
 * @public
 * @enum
 */
export const ActorType = {
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;
/**
 * @public
 */
export type ActorType = (typeof ActorType)[keyof typeof ActorType];

/**
 * @public
 * @enum
 */
export const AssertionSource = {
  AI_GENERATED: "AI_GENERATED",
  USER: "USER",
} as const;
/**
 * @public
 */
export type AssertionSource = (typeof AssertionSource)[keyof typeof AssertionSource];

/**
 * @public
 * @enum
 */
export const CostCurrency = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type CostCurrency = (typeof CostCurrency)[keyof typeof CostCurrency];

/**
 * @public
 * @enum
 */
export const AssessmentErrorCode = {
  AGENT_ERROR: "AGENT_ERROR",
  CMK_ACCESS_DENIED: "CMK_ACCESS_DENIED",
  DESIGN_FILE_ACCESS_DENIED: "DESIGN_FILE_ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_PERMISSIONS: "INVALID_PERMISSIONS",
} as const;
/**
 * @public
 */
export type AssessmentErrorCode = (typeof AssessmentErrorCode)[keyof typeof AssessmentErrorCode];

/**
 * @public
 * @enum
 */
export const AssessmentSortField = {
  STARTED_AT: "STARTED_AT",
} as const;
/**
 * @public
 */
export type AssessmentSortField = (typeof AssessmentSortField)[keyof typeof AssessmentSortField];

/**
 * @public
 * @enum
 */
export const AssessmentStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type AssessmentStatus = (typeof AssessmentStatus)[keyof typeof AssessmentStatus];

/**
 * @public
 * @enum
 */
export const AssessmentStep = {
  DESIGN_ANALYSIS: "DESIGN_ANALYSIS",
  FAILURE_MODE_FINDINGS_CONSOLIDATION: "FAILURE_MODE_FINDINGS_CONSOLIDATION",
  FAILURE_MODE_FINDINGS_ENRICHMENT: "FAILURE_MODE_FINDINGS_ENRICHMENT",
  INPUT_VALIDATION: "INPUT_VALIDATION",
  POLICY_VALIDATION: "POLICY_VALIDATION",
  RESILIENCE_ASSESSMENT: "RESILIENCE_ASSESSMENT",
  SERVICE_FUNCTION_GENERATION: "SERVICE_FUNCTION_GENERATION",
  TOPOLOGY_ENHANCEMENT: "TOPOLOGY_ENHANCEMENT",
  TOPOLOGY_GENERATION: "TOPOLOGY_GENERATION",
} as const;
/**
 * @public
 */
export type AssessmentStep = (typeof AssessmentStep)[keyof typeof AssessmentStep];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  DUPLICATE_VALUE: "DUPLICATE_VALUE",
  INVALID_FIELD_VALUE: "INVALID_FIELD_VALUE",
  MISSING_REQUIRED_FIELD: "MISSING_REQUIRED_FIELD",
  OTHER: "OTHER",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const MultiAzDisasterRecoveryApproach = {
  ACTIVE_ACTIVE: "ACTIVE_ACTIVE",
  BACKUP_AND_RESTORE: "BACKUP_AND_RESTORE",
  HOT_STANDBY: "HOT_STANDBY",
  PILOT_LIGHT: "PILOT_LIGHT",
  WARM_STANDBY: "WARM_STANDBY",
} as const;
/**
 * @public
 */
export type MultiAzDisasterRecoveryApproach =
  (typeof MultiAzDisasterRecoveryApproach)[keyof typeof MultiAzDisasterRecoveryApproach];

/**
 * @public
 * @enum
 */
export const MultiRegionDisasterRecoveryApproach = {
  ACTIVE_ACTIVE: "ACTIVE_ACTIVE",
  BACKUP_AND_RESTORE: "BACKUP_AND_RESTORE",
  HOT_STANDBY: "HOT_STANDBY",
  PILOT_LIGHT: "PILOT_LIGHT",
  WARM_STANDBY: "WARM_STANDBY",
} as const;
/**
 * @public
 */
export type MultiRegionDisasterRecoveryApproach =
  (typeof MultiRegionDisasterRecoveryApproach)[keyof typeof MultiRegionDisasterRecoveryApproach];

/**
 * @public
 * @enum
 */
export const ReportType = {
  FAILURE_MODE: "FAILURE_MODE",
} as const;
/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 * @enum
 */
export const ReportGenerationErrorCode = {
  CONFIGURATION_ERROR: "CONFIGURATION_ERROR",
  INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type ReportGenerationErrorCode = (typeof ReportGenerationErrorCode)[keyof typeof ReportGenerationErrorCode];

/**
 * @public
 * @enum
 */
export const ReportGenerationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ReportGenerationStatus = (typeof ReportGenerationStatus)[keyof typeof ReportGenerationStatus];

/**
 * @public
 * @enum
 */
export const DependencyDiscoveryInput = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DependencyDiscoveryInput = (typeof DependencyDiscoveryInput)[keyof typeof DependencyDiscoveryInput];

/**
 * @public
 * @enum
 */
export const DependencyDiscoveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  INITIALIZING: "INITIALIZING",
} as const;
/**
 * @public
 */
export type DependencyDiscoveryStatus = (typeof DependencyDiscoveryStatus)[keyof typeof DependencyDiscoveryStatus];

/**
 * @public
 * @enum
 */
export const PolicyValueSource = {
  CROSS_ACCOUNT: "CROSS_ACCOUNT",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type PolicyValueSource = (typeof PolicyValueSource)[keyof typeof PolicyValueSource];

/**
 * @public
 * @enum
 */
export const ResourceDiscoveryErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CLUSTER_NOT_FOUND: "CLUSTER_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_PERMISSIONS: "INVALID_PERMISSIONS",
  STACK_NOT_FOUND: "STACK_NOT_FOUND",
  STATE_FILE_NOT_FOUND: "STATE_FILE_NOT_FOUND",
  UNSUPPORTED_CLUSTER: "UNSUPPORTED_CLUSTER",
} as const;
/**
 * @public
 */
export type ResourceDiscoveryErrorCode = (typeof ResourceDiscoveryErrorCode)[keyof typeof ResourceDiscoveryErrorCode];

/**
 * @public
 * @enum
 */
export const ResourceDiscoveryRunStatus = {
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ResourceDiscoveryRunStatus = (typeof ResourceDiscoveryRunStatus)[keyof typeof ResourceDiscoveryRunStatus];

/**
 * @public
 * @enum
 */
export const ServiceFunctionCriticality = {
  PRIMARY: "PRIMARY",
  SUPPLEMENTAL: "SUPPLEMENTAL",
} as const;
/**
 * @public
 */
export type ServiceFunctionCriticality = (typeof ServiceFunctionCriticality)[keyof typeof ServiceFunctionCriticality];

/**
 * @public
 * @enum
 */
export const ServiceFunctionSource = {
  AI_GENERATED: "AI_GENERATED",
  USER: "USER",
} as const;
/**
 * @public
 */
export type ServiceFunctionSource = (typeof ServiceFunctionSource)[keyof typeof ServiceFunctionSource];

/**
 * @public
 * @enum
 */
export const DependencyCriticality = {
  HARD: "HARD",
  SOFT: "SOFT",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type DependencyCriticality = (typeof DependencyCriticality)[keyof typeof DependencyCriticality];

/**
 * @public
 * @enum
 */
export const QueryGranularity = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
} as const;
/**
 * @public
 */
export type QueryGranularity = (typeof QueryGranularity)[keyof typeof QueryGranularity];

/**
 * @public
 * @enum
 */
export const TopologyType = {
  CONTAINMENT: "CONTAINMENT",
  DATA_FLOW: "DATA_FLOW",
  OBSERVABILITY: "OBSERVABILITY",
  PERMISSIONS: "PERMISSIONS",
} as const;
/**
 * @public
 */
export type TopologyType = (typeof TopologyType)[keyof typeof TopologyType];

/**
 * @public
 * @enum
 */
export const FailureCategory = {
  EXCESSIVE_LATENCY: "EXCESSIVE_LATENCY",
  EXCESSIVE_LOAD: "EXCESSIVE_LOAD",
  MISCONFIGURATION_AND_BUGS: "MISCONFIGURATION_AND_BUGS",
  SHARED_FATE: "SHARED_FATE",
  SINGLE_POINT_OF_FAILURE: "SINGLE_POINT_OF_FAILURE",
} as const;
/**
 * @public
 */
export type FailureCategory = (typeof FailureCategory)[keyof typeof FailureCategory];

/**
 * @public
 * @enum
 */
export const PolicyComponent = {
  AVAILABILITY_SLO: "AVAILABILITY_SLO",
  DATA_RECOVERY: "DATA_RECOVERY",
  MULTI_AZ_DISASTER_RECOVERY: "MULTI_AZ_DISASTER_RECOVERY",
  MULTI_REGION_DISASTER_RECOVERY: "MULTI_REGION_DISASTER_RECOVERY",
} as const;
/**
 * @public
 */
export type PolicyComponent = (typeof PolicyComponent)[keyof typeof PolicyComponent];

/**
 * @public
 * @enum
 */
export const FindingSeverity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type FindingSeverity = (typeof FindingSeverity)[keyof typeof FindingSeverity];

/**
 * @public
 * @enum
 */
export const FindingStatus = {
  IRRELEVANT: "IRRELEVANT",
  OPEN: "OPEN",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];

/**
 * @public
 * @enum
 */
export const InputSourceType = {
  CFN_STACK: "CFN_STACK",
  DESIGN_FILE: "DESIGN_FILE",
  EKS: "EKS",
  MONITORING: "MONITORING",
  TAGS: "TAGS",
  TERRAFORM: "TERRAFORM",
} as const;
/**
 * @public
 */
export type InputSourceType = (typeof InputSourceType)[keyof typeof InputSourceType];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const ServiceEventType = {
  ASSERTION_CREATED: "ASSERTION_CREATED",
  ASSERTION_DELETED: "ASSERTION_DELETED",
  ASSERTION_UPDATED: "ASSERTION_UPDATED",
  SERVICE_ACHIEVABILITY_UPDATED: "SERVICE_ACHIEVABILITY_UPDATED",
  SERVICE_CREATED: "SERVICE_CREATED",
  SERVICE_DELETED: "SERVICE_DELETED",
  SERVICE_FUNCTION_CREATED: "SERVICE_FUNCTION_CREATED",
  SERVICE_FUNCTION_DELETED: "SERVICE_FUNCTION_DELETED",
  SERVICE_FUNCTION_RESOURCES_ADDED: "SERVICE_FUNCTION_RESOURCES_ADDED",
  SERVICE_FUNCTION_RESOURCES_REMOVED: "SERVICE_FUNCTION_RESOURCES_REMOVED",
  SERVICE_FUNCTION_UPDATED: "SERVICE_FUNCTION_UPDATED",
  SERVICE_INPUT_SOURCES_UPDATED: "SERVICE_INPUT_SOURCES_UPDATED",
  SERVICE_POLICY_ASSOCIATED: "SERVICE_POLICY_ASSOCIATED",
  SERVICE_POLICY_DISASSOCIATED: "SERVICE_POLICY_DISASSOCIATED",
  SERVICE_RESOURCES_ASSOCIATED: "SERVICE_RESOURCES_ASSOCIATED",
  SERVICE_RESOURCES_DISASSOCIATED: "SERVICE_RESOURCES_DISASSOCIATED",
  SERVICE_SYSTEM_ASSOCIATED: "SERVICE_SYSTEM_ASSOCIATED",
  SERVICE_SYSTEM_DISASSOCIATED: "SERVICE_SYSTEM_DISASSOCIATED",
  SERVICE_WORKFLOW_UPDATED: "SERVICE_WORKFLOW_UPDATED",
} as const;
/**
 * @public
 */
export type ServiceEventType = (typeof ServiceEventType)[keyof typeof ServiceEventType];

/**
 * @public
 * @enum
 */
export const SystemEventType = {
  SYSTEM_CREATED: "SYSTEM_CREATED",
  SYSTEM_DELETED: "SYSTEM_DELETED",
  SYSTEM_POLICY_ASSOCIATED: "SYSTEM_POLICY_ASSOCIATED",
  SYSTEM_POLICY_DISASSOCIATED: "SYSTEM_POLICY_DISASSOCIATED",
  SYSTEM_SERVICE_ASSOCIATED: "SYSTEM_SERVICE_ASSOCIATED",
  SYSTEM_SERVICE_DISASSOCIATED: "SYSTEM_SERVICE_DISASSOCIATED",
  SYSTEM_USER_JOURNEY_CREATED: "SYSTEM_USER_JOURNEY_CREATED",
  SYSTEM_USER_JOURNEY_DELETED: "SYSTEM_USER_JOURNEY_DELETED",
  SYSTEM_USER_JOURNEY_UPDATED: "SYSTEM_USER_JOURNEY_UPDATED",
} as const;
/**
 * @public
 */
export type SystemEventType = (typeof SystemEventType)[keyof typeof SystemEventType];
