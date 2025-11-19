// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResourceMappingType = {
  APP_REGISTRY_APP: "AppRegistryApp",
  CFN_STACK: "CfnStack",
  EKS: "EKS",
  RESOURCE: "Resource",
  RESOURCE_GROUP: "ResourceGroup",
  TERRAFORM: "Terraform",
} as const;
/**
 * @public
 */
export type ResourceMappingType = (typeof ResourceMappingType)[keyof typeof ResourceMappingType];

/**
 * @public
 * @enum
 */
export const PhysicalIdentifierType = {
  ARN: "Arn",
  NATIVE: "Native",
} as const;
/**
 * @public
 */
export type PhysicalIdentifierType = (typeof PhysicalIdentifierType)[keyof typeof PhysicalIdentifierType];

/**
 * @public
 * @enum
 */
export const ExcludeRecommendationReason = {
  ALREADY_IMPLEMENTED: "AlreadyImplemented",
  COMPLEXITY_OF_IMPLEMENTATION: "ComplexityOfImplementation",
  NOT_RELEVANT: "NotRelevant",
} as const;
/**
 * @public
 */
export type ExcludeRecommendationReason =
  (typeof ExcludeRecommendationReason)[keyof typeof ExcludeRecommendationReason];

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  EXCLUDED: "Excluded",
  IMPLEMENTED: "Implemented",
  INACTIVE: "Inactive",
  NOT_IMPLEMENTED: "NotImplemented",
} as const;
/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const AlarmType = {
  CANARY: "Canary",
  COMPOSITE: "Composite",
  EVENT: "Event",
  LOGS: "Logs",
  METRIC: "Metric",
} as const;
/**
 * @public
 */
export type AlarmType = (typeof AlarmType)[keyof typeof AlarmType];

/**
 * @public
 * @enum
 */
export const AppAssessmentScheduleType = {
  DAILY: "Daily",
  DISABLED: "Disabled",
} as const;
/**
 * @public
 */
export type AppAssessmentScheduleType = (typeof AppAssessmentScheduleType)[keyof typeof AppAssessmentScheduleType];

/**
 * @public
 * @enum
 */
export const AppComplianceStatusType = {
  CHANGES_DETECTED: "ChangesDetected",
  MISSING_POLICY: "MissingPolicy",
  NOT_APPLICABLE: "NotApplicable",
  NOT_ASSESSED: "NotAssessed",
  POLICY_BREACHED: "PolicyBreached",
  POLICY_MET: "PolicyMet",
} as const;
/**
 * @public
 */
export type AppComplianceStatusType = (typeof AppComplianceStatusType)[keyof typeof AppComplianceStatusType];

/**
 * @public
 * @enum
 */
export const AppDriftStatusType = {
  DETECTED: "Detected",
  NOT_CHECKED: "NotChecked",
  NOT_DETECTED: "NotDetected",
} as const;
/**
 * @public
 */
export type AppDriftStatusType = (typeof AppDriftStatusType)[keyof typeof AppDriftStatusType];

/**
 * @public
 * @enum
 */
export const EventType = {
  DRIFT_DETECTED: "DriftDetected",
  SCHEDULED_ASSESSMENT_FAILURE: "ScheduledAssessmentFailure",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const PermissionModelType = {
  LEGACY_IAM_USER: "LegacyIAMUser",
  ROLE_BASED: "RoleBased",
} as const;
/**
 * @public
 */
export type PermissionModelType = (typeof PermissionModelType)[keyof typeof PermissionModelType];

/**
 * @public
 * @enum
 */
export const AppStatusType = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;
/**
 * @public
 */
export type AppStatusType = (typeof AppStatusType)[keyof typeof AppStatusType];

/**
 * @public
 * @enum
 */
export const AssessmentStatus = {
  FAILED: "Failed",
  INPROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type AssessmentStatus = (typeof AssessmentStatus)[keyof typeof AssessmentStatus];

/**
 * @public
 * @enum
 */
export const DisruptionType = {
  AZ: "AZ",
  HARDWARE: "Hardware",
  REGION: "Region",
  SOFTWARE: "Software",
} as const;
/**
 * @public
 */
export type DisruptionType = (typeof DisruptionType)[keyof typeof DisruptionType];

/**
 * @public
 * @enum
 */
export const ComplianceStatus = {
  MISSING_POLICY: "MissingPolicy",
  NOT_APPLICABLE: "NotApplicable",
  POLICY_BREACHED: "PolicyBreached",
  POLICY_MET: "PolicyMet",
} as const;
/**
 * @public
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

/**
 * @public
 * @enum
 */
export const CostFrequency = {
  DAILY: "Daily",
  HOURLY: "Hourly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
} as const;
/**
 * @public
 */
export type CostFrequency = (typeof CostFrequency)[keyof typeof CostFrequency];

/**
 * @public
 * @enum
 */
export const DriftStatus = {
  DETECTED: "Detected",
  NOT_CHECKED: "NotChecked",
  NOT_DETECTED: "NotDetected",
} as const;
/**
 * @public
 */
export type DriftStatus = (typeof DriftStatus)[keyof typeof DriftStatus];

/**
 * @public
 * @enum
 */
export const AssessmentInvoker = {
  SYSTEM: "System",
  USER: "User",
} as const;
/**
 * @public
 */
export type AssessmentInvoker = (typeof AssessmentInvoker)[keyof typeof AssessmentInvoker];

/**
 * @public
 * @enum
 */
export const DataLocationConstraint = {
  ANY_LOCATION: "AnyLocation",
  SAME_CONTINENT: "SameContinent",
  SAME_COUNTRY: "SameCountry",
} as const;
/**
 * @public
 */
export type DataLocationConstraint = (typeof DataLocationConstraint)[keyof typeof DataLocationConstraint];

/**
 * @public
 * @enum
 */
export const EstimatedCostTier = {
  L1: "L1",
  L2: "L2",
  L3: "L3",
  L4: "L4",
} as const;
/**
 * @public
 */
export type EstimatedCostTier = (typeof EstimatedCostTier)[keyof typeof EstimatedCostTier];

/**
 * @public
 * @enum
 */
export const ResiliencyPolicyTier = {
  CORE_SERVICES: "CoreServices",
  CRITICAL: "Critical",
  IMPORTANT: "Important",
  MISSION_CRITICAL: "MissionCritical",
  NON_CRITICAL: "NonCritical",
  NOT_APPLICABLE: "NotApplicable",
} as const;
/**
 * @public
 */
export type ResiliencyPolicyTier = (typeof ResiliencyPolicyTier)[keyof typeof ResiliencyPolicyTier];

/**
 * @public
 * @enum
 */
export const ResiliencyScoreType = {
  ALARM: "Alarm",
  COMPLIANCE: "Compliance",
  SOP: "Sop",
  TEST: "Test",
} as const;
/**
 * @public
 */
export type ResiliencyScoreType = (typeof ResiliencyScoreType)[keyof typeof ResiliencyScoreType];

/**
 * @public
 * @enum
 */
export const ResourceSourceType = {
  APP_TEMPLATE: "AppTemplate",
  DISCOVERED: "Discovered",
} as const;
/**
 * @public
 */
export type ResourceSourceType = (typeof ResourceSourceType)[keyof typeof ResourceSourceType];

/**
 * @public
 * @enum
 */
export const TemplateFormat = {
  CFN_JSON: "CfnJson",
  CFN_YAML: "CfnYaml",
} as const;
/**
 * @public
 */
export type TemplateFormat = (typeof TemplateFormat)[keyof typeof TemplateFormat];

/**
 * @public
 * @enum
 */
export const RenderRecommendationType = {
  ALARM: "Alarm",
  SOP: "Sop",
  TEST: "Test",
} as const;
/**
 * @public
 */
export type RenderRecommendationType = (typeof RenderRecommendationType)[keyof typeof RenderRecommendationType];

/**
 * @public
 * @enum
 */
export const RecommendationTemplateStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type RecommendationTemplateStatus =
  (typeof RecommendationTemplateStatus)[keyof typeof RecommendationTemplateStatus];

/**
 * @public
 * @enum
 */
export const ResourceResolutionStatusType = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type ResourceResolutionStatusType =
  (typeof ResourceResolutionStatusType)[keyof typeof ResourceResolutionStatusType];

/**
 * @public
 * @enum
 */
export const ResourceImportStatusType = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type ResourceImportStatusType = (typeof ResourceImportStatusType)[keyof typeof ResourceImportStatusType];

/**
 * @public
 * @enum
 */
export const MetricsExportStatusType = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type MetricsExportStatusType = (typeof MetricsExportStatusType)[keyof typeof MetricsExportStatusType];

/**
 * @public
 * @enum
 */
export const ResourcesGroupingRecGenStatusType = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type ResourcesGroupingRecGenStatusType =
  (typeof ResourcesGroupingRecGenStatusType)[keyof typeof ResourcesGroupingRecGenStatusType];

/**
 * @public
 * @enum
 */
export const ResourceImportStrategyType = {
  ADD_ONLY: "AddOnly",
  REPLACE_ALL: "ReplaceAll",
} as const;
/**
 * @public
 */
export type ResourceImportStrategyType = (typeof ResourceImportStrategyType)[keyof typeof ResourceImportStrategyType];

/**
 * @public
 * @enum
 */
export const DifferenceType = {
  ADDED: "Added",
  NOT_EQUAL: "NotEqual",
  REMOVED: "Removed",
} as const;
/**
 * @public
 */
export type DifferenceType = (typeof DifferenceType)[keyof typeof DifferenceType];

/**
 * @public
 * @enum
 */
export const DriftType = {
  APPLICATION_COMPLIANCE: "ApplicationCompliance",
  APP_COMPONENT_RESILIENCY_COMPLIANCE_STATUS: "AppComponentResiliencyComplianceStatus",
} as const;
/**
 * @public
 */
export type DriftType = (typeof DriftType)[keyof typeof DriftType];

/**
 * @public
 * @enum
 */
export const HaArchitecture = {
  BACKUP_AND_RESTORE: "BackupAndRestore",
  MULTI_SITE: "MultiSite",
  NO_RECOVERY_PLAN: "NoRecoveryPlan",
  PILOT_LIGHT: "PilotLight",
  WARM_STANDBY: "WarmStandby",
} as const;
/**
 * @public
 */
export type HaArchitecture = (typeof HaArchitecture)[keyof typeof HaArchitecture];

/**
 * @public
 * @enum
 */
export const ConfigRecommendationOptimizationType = {
  BEST_ATTAINABLE: "BestAttainable",
  BEST_AZ_RECOVERY: "BestAZRecovery",
  BEST_REGION_RECOVERY: "BestRegionRecovery",
  LEAST_CHANGE: "LeastChange",
  LEAST_COST: "LeastCost",
  LEAST_ERRORS: "LeastErrors",
} as const;
/**
 * @public
 */
export type ConfigRecommendationOptimizationType =
  (typeof ConfigRecommendationOptimizationType)[keyof typeof ConfigRecommendationOptimizationType];

/**
 * @public
 * @enum
 */
export const RecommendationComplianceStatus = {
  BREACHED_CAN_MEET: "BreachedCanMeet",
  BREACHED_UNATTAINABLE: "BreachedUnattainable",
  MET_CAN_IMPROVE: "MetCanImprove",
  MISSING_POLICY: "MissingPolicy",
} as const;
/**
 * @public
 */
export type RecommendationComplianceStatus =
  (typeof RecommendationComplianceStatus)[keyof typeof RecommendationComplianceStatus];

/**
 * @public
 * @enum
 */
export const ConditionOperatorType = {
  EQUALS: "Equals",
  GREATER_OR_EQUALS: "GreaterOrEquals",
  GREATER_THEN: "GreaterThen",
  LESS_OR_EQUALS: "LessOrEquals",
  LESS_THEN: "LessThen",
  NOT_EQUALS: "NotEquals",
} as const;
/**
 * @public
 */
export type ConditionOperatorType = (typeof ConditionOperatorType)[keyof typeof ConditionOperatorType];

/**
 * @public
 * @enum
 */
export const FieldAggregationType = {
  AVG: "Avg",
  COUNT: "Count",
  MAX: "Max",
  MIN: "Min",
  SUM: "Sum",
} as const;
/**
 * @public
 */
export type FieldAggregationType = (typeof FieldAggregationType)[keyof typeof FieldAggregationType];

/**
 * @public
 * @enum
 */
export const GroupingRecommendationConfidenceLevel = {
  HIGH: "High",
  MEDIUM: "Medium",
} as const;
/**
 * @public
 */
export type GroupingRecommendationConfidenceLevel =
  (typeof GroupingRecommendationConfidenceLevel)[keyof typeof GroupingRecommendationConfidenceLevel];

/**
 * @public
 * @enum
 */
export const GroupingRecommendationRejectionReason = {
  DISTINCT_BUSINESS_PURPOSE: "DistinctBusinessPurpose",
  DISTINCT_USER_GROUP_HANDLING: "DistinctUserGroupHandling",
  OTHER: "Other",
  SEPARATE_DATA_CONCERN: "SeparateDataConcern",
} as const;
/**
 * @public
 */
export type GroupingRecommendationRejectionReason =
  (typeof GroupingRecommendationRejectionReason)[keyof typeof GroupingRecommendationRejectionReason];

/**
 * @public
 * @enum
 */
export const GroupingRecommendationStatusType = {
  ACCEPTED: "Accepted",
  PENDING_DECISION: "PendingDecision",
  REJECTED: "Rejected",
} as const;
/**
 * @public
 */
export type GroupingRecommendationStatusType =
  (typeof GroupingRecommendationStatusType)[keyof typeof GroupingRecommendationStatusType];

/**
 * @public
 * @enum
 */
export const SopServiceType = {
  SSM: "SSM",
} as const;
/**
 * @public
 */
export type SopServiceType = (typeof SopServiceType)[keyof typeof SopServiceType];

/**
 * @public
 * @enum
 */
export const TestRisk = {
  HIGH: "High",
  MEDIUM: "Medium",
  SMALL: "Small",
} as const;
/**
 * @public
 */
export type TestRisk = (typeof TestRisk)[keyof typeof TestRisk];

/**
 * @public
 * @enum
 */
export const TestType = {
  AZ: "AZ",
  HARDWARE: "Hardware",
  REGION: "Region",
  SOFTWARE: "Software",
} as const;
/**
 * @public
 */
export type TestType = (typeof TestType)[keyof typeof TestType];
