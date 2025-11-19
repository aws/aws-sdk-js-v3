// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ReservedNodeOfferingType = {
  Regular: "Regular",
  Upgradable: "Upgradable",
} as const;
/**
 * @public
 */
export type ReservedNodeOfferingType = (typeof ReservedNodeOfferingType)[keyof typeof ReservedNodeOfferingType];

/**
 * @public
 * @enum
 */
export const ActionType = {
  RECOMMEND_NODE_CONFIG: "recommend-node-config",
  RESIZE_CLUSTER: "resize-cluster",
  RESTORE_CLUSTER: "restore-cluster",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const AquaConfigurationStatus = {
  AUTO: "auto",
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type AquaConfigurationStatus = (typeof AquaConfigurationStatus)[keyof typeof AquaConfigurationStatus];

/**
 * @public
 * @enum
 */
export const AquaStatus = {
  APPLYING: "applying",
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type AquaStatus = (typeof AquaStatus)[keyof typeof AquaStatus];

/**
 * @public
 * @enum
 */
export const DataShareStatus = {
  ACTIVE: "ACTIVE",
  AUTHORIZED: "AUTHORIZED",
  AVAILABLE: "AVAILABLE",
  DEAUTHORIZED: "DEAUTHORIZED",
  PENDING_AUTHORIZATION: "PENDING_AUTHORIZATION",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type DataShareStatus = (typeof DataShareStatus)[keyof typeof DataShareStatus];

/**
 * @public
 * @enum
 */
export const DataShareType = {
  INTERNAL: "INTERNAL",
} as const;
/**
 * @public
 */
export type DataShareType = (typeof DataShareType)[keyof typeof DataShareType];

/**
 * @public
 * @enum
 */
export const ScheduleState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  MODIFYING: "MODIFYING",
} as const;
/**
 * @public
 */
export type ScheduleState = (typeof ScheduleState)[keyof typeof ScheduleState];

/**
 * @public
 * @enum
 */
export const AuthorizationStatus = {
  AUTHORIZED: "Authorized",
  REVOKING: "Revoking",
} as const;
/**
 * @public
 */
export type AuthorizationStatus = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

/**
 * @public
 * @enum
 */
export const ReservedNodeExchangeStatusType = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REQUESTED: "REQUESTED",
  RETRYING: "RETRYING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ReservedNodeExchangeStatusType =
  (typeof ReservedNodeExchangeStatusType)[keyof typeof ReservedNodeExchangeStatusType];

/**
 * @public
 * @enum
 */
export const ParameterApplyType = {
  dynamic: "dynamic",
  static: "static",
} as const;
/**
 * @public
 */
export type ParameterApplyType = (typeof ParameterApplyType)[keyof typeof ParameterApplyType];

/**
 * @public
 * @enum
 */
export const ZeroETLIntegrationStatus = {
  ACTIVE: "active",
  CREATING: "creating",
  DELETING: "deleting",
  FAILED: "failed",
  MODIFYING: "modifying",
  NEEDS_ATTENTION: "needs_attention",
  SYNCING: "syncing",
} as const;
/**
 * @public
 */
export type ZeroETLIntegrationStatus = (typeof ZeroETLIntegrationStatus)[keyof typeof ZeroETLIntegrationStatus];

/**
 * @public
 * @enum
 */
export const ServiceAuthorization = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type ServiceAuthorization = (typeof ServiceAuthorization)[keyof typeof ServiceAuthorization];

/**
 * @public
 * @enum
 */
export const ScheduledActionState = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type ScheduledActionState = (typeof ScheduledActionState)[keyof typeof ScheduledActionState];

/**
 * @public
 * @enum
 */
export const UsageLimitBreachAction = {
  DISABLE: "disable",
  EMIT_METRIC: "emit-metric",
  LOG: "log",
} as const;
/**
 * @public
 */
export type UsageLimitBreachAction = (typeof UsageLimitBreachAction)[keyof typeof UsageLimitBreachAction];

/**
 * @public
 * @enum
 */
export const UsageLimitFeatureType = {
  CONCURRENCY_SCALING: "concurrency-scaling",
  CROSS_REGION_DATASHARING: "cross-region-datasharing",
  SPECTRUM: "spectrum",
} as const;
/**
 * @public
 */
export type UsageLimitFeatureType = (typeof UsageLimitFeatureType)[keyof typeof UsageLimitFeatureType];

/**
 * @public
 * @enum
 */
export const UsageLimitLimitType = {
  DATA_SCANNED: "data-scanned",
  TIME: "time",
} as const;
/**
 * @public
 */
export type UsageLimitLimitType = (typeof UsageLimitLimitType)[keyof typeof UsageLimitLimitType];

/**
 * @public
 * @enum
 */
export const UsageLimitPeriod = {
  DAILY: "daily",
  MONTHLY: "monthly",
  WEEKLY: "weekly",
} as const;
/**
 * @public
 */
export type UsageLimitPeriod = (typeof UsageLimitPeriod)[keyof typeof UsageLimitPeriod];

/**
 * @public
 * @enum
 */
export const DataShareStatusForConsumer = {
  ACTIVE: "ACTIVE",
  AVAILABLE: "AVAILABLE",
} as const;
/**
 * @public
 */
export type DataShareStatusForConsumer = (typeof DataShareStatusForConsumer)[keyof typeof DataShareStatusForConsumer];

/**
 * @public
 * @enum
 */
export const DataShareStatusForProducer = {
  ACTIVE: "ACTIVE",
  AUTHORIZED: "AUTHORIZED",
  DEAUTHORIZED: "DEAUTHORIZED",
  PENDING_AUTHORIZATION: "PENDING_AUTHORIZATION",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type DataShareStatusForProducer = (typeof DataShareStatusForProducer)[keyof typeof DataShareStatusForProducer];

/**
 * @public
 * @enum
 */
export const NamespaceRegistrationStatus = {
  DEREGISTERING: "Deregistering",
  REGISTERING: "Registering",
} as const;
/**
 * @public
 */
export type NamespaceRegistrationStatus =
  (typeof NamespaceRegistrationStatus)[keyof typeof NamespaceRegistrationStatus];

/**
 * @public
 * @enum
 */
export const SnapshotAttributeToSortBy = {
  CREATE_TIME: "CREATE_TIME",
  SOURCE_TYPE: "SOURCE_TYPE",
  TOTAL_SIZE: "TOTAL_SIZE",
} as const;
/**
 * @public
 */
export type SnapshotAttributeToSortBy = (typeof SnapshotAttributeToSortBy)[keyof typeof SnapshotAttributeToSortBy];

/**
 * @public
 * @enum
 */
export const SortByOrder = {
  ASCENDING: "ASC",
  DESCENDING: "DESC",
} as const;
/**
 * @public
 */
export type SortByOrder = (typeof SortByOrder)[keyof typeof SortByOrder];

/**
 * @public
 * @enum
 */
export const SourceType = {
  cluster: "cluster",
  cluster_parameter_group: "cluster-parameter-group",
  cluster_security_group: "cluster-security-group",
  cluster_snapshot: "cluster-snapshot",
  scheduled_action: "scheduled-action",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const DescribeIntegrationsFilterName = {
  INTEGRATION_ARN: "integration-arn",
  SOURCE_ARN: "source-arn",
  SOURCE_TYPES: "source-types",
  STATUS: "status",
} as const;
/**
 * @public
 */
export type DescribeIntegrationsFilterName =
  (typeof DescribeIntegrationsFilterName)[keyof typeof DescribeIntegrationsFilterName];

/**
 * @public
 * @enum
 */
export const LogDestinationType = {
  CLOUDWATCH: "cloudwatch",
  S3: "s3",
} as const;
/**
 * @public
 */
export type LogDestinationType = (typeof LogDestinationType)[keyof typeof LogDestinationType];

/**
 * @public
 * @enum
 */
export const NodeConfigurationOptionsFilterName = {
  ESTIMATED_DISK_UTILIZATION_PERCENT: "EstimatedDiskUtilizationPercent",
  MODE: "Mode",
  NODE_TYPE: "NodeType",
  NUM_NODES: "NumberOfNodes",
} as const;
/**
 * @public
 */
export type NodeConfigurationOptionsFilterName =
  (typeof NodeConfigurationOptionsFilterName)[keyof typeof NodeConfigurationOptionsFilterName];

/**
 * @public
 * @enum
 */
export const OperatorType = {
  BETWEEN: "between",
  EQ: "eq",
  GE: "ge",
  GT: "gt",
  IN: "in",
  LE: "le",
  LT: "lt",
} as const;
/**
 * @public
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

/**
 * @public
 * @enum
 */
export const Mode = {
  HIGH_PERFORMANCE: "high-performance",
  STANDARD: "standard",
} as const;
/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const PartnerIntegrationStatus = {
  Active: "Active",
  ConnectionFailure: "ConnectionFailure",
  Inactive: "Inactive",
  RuntimeFailure: "RuntimeFailure",
} as const;
/**
 * @public
 */
export type PartnerIntegrationStatus = (typeof PartnerIntegrationStatus)[keyof typeof PartnerIntegrationStatus];

/**
 * @public
 * @enum
 */
export const ScheduledActionFilterName = {
  CLUSTER_IDENTIFIER: "cluster-identifier",
  IAM_ROLE: "iam-role",
} as const;
/**
 * @public
 */
export type ScheduledActionFilterName = (typeof ScheduledActionFilterName)[keyof typeof ScheduledActionFilterName];

/**
 * @public
 * @enum
 */
export const ScheduledActionTypeValues = {
  PAUSE_CLUSTER: "PauseCluster",
  RESIZE_CLUSTER: "ResizeCluster",
  RESUME_CLUSTER: "ResumeCluster",
} as const;
/**
 * @public
 */
export type ScheduledActionTypeValues = (typeof ScheduledActionTypeValues)[keyof typeof ScheduledActionTypeValues];

/**
 * @public
 * @enum
 */
export const TableRestoreStatusType = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type TableRestoreStatusType = (typeof TableRestoreStatusType)[keyof typeof TableRestoreStatusType];

/**
 * @public
 * @enum
 */
export const ReservedNodeExchangeActionType = {
  RESIZE_CLUSTER: "resize-cluster",
  RESTORE_CLUSTER: "restore-cluster",
} as const;
/**
 * @public
 */
export type ReservedNodeExchangeActionType =
  (typeof ReservedNodeExchangeActionType)[keyof typeof ReservedNodeExchangeActionType];

/**
 * @public
 * @enum
 */
export const ImpactRankingType = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type ImpactRankingType = (typeof ImpactRankingType)[keyof typeof ImpactRankingType];

/**
 * @public
 * @enum
 */
export const RecommendedActionType = {
  CLI: "CLI",
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type RecommendedActionType = (typeof RecommendedActionType)[keyof typeof RecommendedActionType];
