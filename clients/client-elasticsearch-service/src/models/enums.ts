// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const InboundCrossClusterSearchConnectionStatusCode = {
  APPROVED: "APPROVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
} as const;
/**
 * @public
 */
export type InboundCrossClusterSearchConnectionStatusCode =
  (typeof InboundCrossClusterSearchConnectionStatusCode)[keyof typeof InboundCrossClusterSearchConnectionStatusCode];

/**
 * @public
 * @enum
 */
export const OptionState = {
  Active: "Active",
  Processing: "Processing",
  RequiresIndexDocuments: "RequiresIndexDocuments",
} as const;
/**
 * @public
 */
export type OptionState = (typeof OptionState)[keyof typeof OptionState];

/**
 * @public
 * @enum
 */
export const DomainPackageStatus = {
  ACTIVE: "ACTIVE",
  ASSOCIATING: "ASSOCIATING",
  ASSOCIATION_FAILED: "ASSOCIATION_FAILED",
  DISSOCIATING: "DISSOCIATING",
  DISSOCIATION_FAILED: "DISSOCIATION_FAILED",
} as const;
/**
 * @public
 */
export type DomainPackageStatus = (typeof DomainPackageStatus)[keyof typeof DomainPackageStatus];

/**
 * @public
 * @enum
 */
export const PackageType = {
  TXT_DICTIONARY: "TXT-DICTIONARY",
} as const;
/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  AWS_ACCOUNT: "AWS_ACCOUNT",
  AWS_SERVICE: "AWS_SERVICE",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  COMPLETED: "COMPLETED",
  ELIGIBLE: "ELIGIBLE",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_ELIGIBLE: "NOT_ELIGIBLE",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const AutoTuneDesiredState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoTuneDesiredState = (typeof AutoTuneDesiredState)[keyof typeof AutoTuneDesiredState];

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  HOURS: "HOURS",
} as const;
/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

/**
 * @public
 * @enum
 */
export const TLSSecurityPolicy = {
  POLICY_MIN_TLS_1_0_2019_07: "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07: "Policy-Min-TLS-1-2-2019-07",
  POLICY_MIN_TLS_1_2_PFS_2023_10: "Policy-Min-TLS-1-2-PFS-2023-10",
} as const;
/**
 * @public
 */
export type TLSSecurityPolicy = (typeof TLSSecurityPolicy)[keyof typeof TLSSecurityPolicy];

/**
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  gp3: "gp3",
  io1: "io1",
  standard: "standard",
} as const;
/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * @enum
 */
export const ESPartitionInstanceType = {
  c4_2xlarge_elasticsearch: "c4.2xlarge.elasticsearch",
  c4_4xlarge_elasticsearch: "c4.4xlarge.elasticsearch",
  c4_8xlarge_elasticsearch: "c4.8xlarge.elasticsearch",
  c4_large_elasticsearch: "c4.large.elasticsearch",
  c4_xlarge_elasticsearch: "c4.xlarge.elasticsearch",
  c5_18xlarge_elasticsearch: "c5.18xlarge.elasticsearch",
  c5_2xlarge_elasticsearch: "c5.2xlarge.elasticsearch",
  c5_4xlarge_elasticsearch: "c5.4xlarge.elasticsearch",
  c5_9xlarge_elasticsearch: "c5.9xlarge.elasticsearch",
  c5_large_elasticsearch: "c5.large.elasticsearch",
  c5_xlarge_elasticsearch: "c5.xlarge.elasticsearch",
  d2_2xlarge_elasticsearch: "d2.2xlarge.elasticsearch",
  d2_4xlarge_elasticsearch: "d2.4xlarge.elasticsearch",
  d2_8xlarge_elasticsearch: "d2.8xlarge.elasticsearch",
  d2_xlarge_elasticsearch: "d2.xlarge.elasticsearch",
  i2_2xlarge_elasticsearch: "i2.2xlarge.elasticsearch",
  i2_xlarge_elasticsearch: "i2.xlarge.elasticsearch",
  i3_16xlarge_elasticsearch: "i3.16xlarge.elasticsearch",
  i3_2xlarge_elasticsearch: "i3.2xlarge.elasticsearch",
  i3_4xlarge_elasticsearch: "i3.4xlarge.elasticsearch",
  i3_8xlarge_elasticsearch: "i3.8xlarge.elasticsearch",
  i3_large_elasticsearch: "i3.large.elasticsearch",
  i3_xlarge_elasticsearch: "i3.xlarge.elasticsearch",
  m3_2xlarge_elasticsearch: "m3.2xlarge.elasticsearch",
  m3_large_elasticsearch: "m3.large.elasticsearch",
  m3_medium_elasticsearch: "m3.medium.elasticsearch",
  m3_xlarge_elasticsearch: "m3.xlarge.elasticsearch",
  m4_10xlarge_elasticsearch: "m4.10xlarge.elasticsearch",
  m4_2xlarge_elasticsearch: "m4.2xlarge.elasticsearch",
  m4_4xlarge_elasticsearch: "m4.4xlarge.elasticsearch",
  m4_large_elasticsearch: "m4.large.elasticsearch",
  m4_xlarge_elasticsearch: "m4.xlarge.elasticsearch",
  m5_12xlarge_elasticsearch: "m5.12xlarge.elasticsearch",
  m5_2xlarge_elasticsearch: "m5.2xlarge.elasticsearch",
  m5_4xlarge_elasticsearch: "m5.4xlarge.elasticsearch",
  m5_large_elasticsearch: "m5.large.elasticsearch",
  m5_xlarge_elasticsearch: "m5.xlarge.elasticsearch",
  r3_2xlarge_elasticsearch: "r3.2xlarge.elasticsearch",
  r3_4xlarge_elasticsearch: "r3.4xlarge.elasticsearch",
  r3_8xlarge_elasticsearch: "r3.8xlarge.elasticsearch",
  r3_large_elasticsearch: "r3.large.elasticsearch",
  r3_xlarge_elasticsearch: "r3.xlarge.elasticsearch",
  r4_16xlarge_elasticsearch: "r4.16xlarge.elasticsearch",
  r4_2xlarge_elasticsearch: "r4.2xlarge.elasticsearch",
  r4_4xlarge_elasticsearch: "r4.4xlarge.elasticsearch",
  r4_8xlarge_elasticsearch: "r4.8xlarge.elasticsearch",
  r4_large_elasticsearch: "r4.large.elasticsearch",
  r4_xlarge_elasticsearch: "r4.xlarge.elasticsearch",
  r5_12xlarge_elasticsearch: "r5.12xlarge.elasticsearch",
  r5_2xlarge_elasticsearch: "r5.2xlarge.elasticsearch",
  r5_4xlarge_elasticsearch: "r5.4xlarge.elasticsearch",
  r5_large_elasticsearch: "r5.large.elasticsearch",
  r5_xlarge_elasticsearch: "r5.xlarge.elasticsearch",
  t2_medium_elasticsearch: "t2.medium.elasticsearch",
  t2_micro_elasticsearch: "t2.micro.elasticsearch",
  t2_small_elasticsearch: "t2.small.elasticsearch",
  ultrawarm1_large_elasticsearch: "ultrawarm1.large.elasticsearch",
  ultrawarm1_medium_elasticsearch: "ultrawarm1.medium.elasticsearch",
} as const;
/**
 * @public
 */
export type ESPartitionInstanceType = (typeof ESPartitionInstanceType)[keyof typeof ESPartitionInstanceType];

/**
 * @public
 * @enum
 */
export const ESWarmPartitionInstanceType = {
  ultrawarm1_large_elasticsearch: "ultrawarm1.large.elasticsearch",
  ultrawarm1_medium_elasticsearch: "ultrawarm1.medium.elasticsearch",
} as const;
/**
 * @public
 */
export type ESWarmPartitionInstanceType =
  (typeof ESWarmPartitionInstanceType)[keyof typeof ESWarmPartitionInstanceType];

/**
 * @public
 * @enum
 */
export const LogType = {
  AUDIT_LOGS: "AUDIT_LOGS",
  ES_APPLICATION_LOGS: "ES_APPLICATION_LOGS",
  INDEX_SLOW_LOGS: "INDEX_SLOW_LOGS",
  SEARCH_SLOW_LOGS: "SEARCH_SLOW_LOGS",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const AutoTuneState = {
  DISABLED: "DISABLED",
  DISABLED_AND_ROLLBACK_COMPLETE: "DISABLED_AND_ROLLBACK_COMPLETE",
  DISABLED_AND_ROLLBACK_ERROR: "DISABLED_AND_ROLLBACK_ERROR",
  DISABLED_AND_ROLLBACK_IN_PROGRESS: "DISABLED_AND_ROLLBACK_IN_PROGRESS",
  DISABLED_AND_ROLLBACK_SCHEDULED: "DISABLED_AND_ROLLBACK_SCHEDULED",
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
  ENABLE_IN_PROGRESS: "ENABLE_IN_PROGRESS",
  ERROR: "ERROR",
} as const;
/**
 * @public
 */
export type AutoTuneState = (typeof AutoTuneState)[keyof typeof AutoTuneState];

/**
 * @public
 * @enum
 */
export const ConfigChangeStatus = {
  APPLYING_CHANGES: "ApplyingChanges",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  INITIALIZING: "Initializing",
  PENDING: "Pending",
  PENDING_USER_INPUT: "PendingUserInput",
  VALIDATING: "Validating",
  VALIDATION_FAILED: "ValidationFailed",
} as const;
/**
 * @public
 */
export type ConfigChangeStatus = (typeof ConfigChangeStatus)[keyof typeof ConfigChangeStatus];

/**
 * @public
 * @enum
 */
export const InitiatedBy = {
  CUSTOMER: "CUSTOMER",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type InitiatedBy = (typeof InitiatedBy)[keyof typeof InitiatedBy];

/**
 * @public
 * @enum
 */
export const DomainProcessingStatusType = {
  ACTIVE: "Active",
  CREATING: "Creating",
  DELETING: "Deleting",
  ISOLATED: "Isolated",
  MODIFYING: "Modifying",
  UPDATING: "UpdatingServiceSoftware",
  UPGRADING: "UpgradingEngineVersion",
} as const;
/**
 * @public
 */
export type DomainProcessingStatusType = (typeof DomainProcessingStatusType)[keyof typeof DomainProcessingStatusType];

/**
 * @public
 * @enum
 */
export const PropertyValueType = {
  PLAIN_TEXT: "PLAIN_TEXT",
  STRINGIFIED_JSON: "STRINGIFIED_JSON",
} as const;
/**
 * @public
 */
export type PropertyValueType = (typeof PropertyValueType)[keyof typeof PropertyValueType];

/**
 * @public
 * @enum
 */
export const OutboundCrossClusterSearchConnectionStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  PROVISIONING: "PROVISIONING",
  REJECTED: "REJECTED",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type OutboundCrossClusterSearchConnectionStatusCode =
  (typeof OutboundCrossClusterSearchConnectionStatusCode)[keyof typeof OutboundCrossClusterSearchConnectionStatusCode];

/**
 * @public
 * @enum
 */
export const PackageStatus = {
  AVAILABLE: "AVAILABLE",
  COPYING: "COPYING",
  COPY_FAILED: "COPY_FAILED",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type PackageStatus = (typeof PackageStatus)[keyof typeof PackageStatus];

/**
 * @public
 * @enum
 */
export const VpcEndpointStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type VpcEndpointStatus = (typeof VpcEndpointStatus)[keyof typeof VpcEndpointStatus];

/**
 * @public
 * @enum
 */
export const ScheduledAutoTuneActionType = {
  JVM_HEAP_SIZE_TUNING: "JVM_HEAP_SIZE_TUNING",
  JVM_YOUNG_GEN_TUNING: "JVM_YOUNG_GEN_TUNING",
} as const;
/**
 * @public
 */
export type ScheduledAutoTuneActionType =
  (typeof ScheduledAutoTuneActionType)[keyof typeof ScheduledAutoTuneActionType];

/**
 * @public
 * @enum
 */
export const ScheduledAutoTuneSeverityType = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type ScheduledAutoTuneSeverityType =
  (typeof ScheduledAutoTuneSeverityType)[keyof typeof ScheduledAutoTuneSeverityType];

/**
 * @public
 * @enum
 */
export const AutoTuneType = {
  SCHEDULED_ACTION: "SCHEDULED_ACTION",
} as const;
/**
 * @public
 */
export type AutoTuneType = (typeof AutoTuneType)[keyof typeof AutoTuneType];

/**
 * @public
 * @enum
 */
export const OverallChangeStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type OverallChangeStatus = (typeof OverallChangeStatus)[keyof typeof OverallChangeStatus];

/**
 * @public
 * @enum
 */
export const RollbackOnDisable = {
  DEFAULT_ROLLBACK: "DEFAULT_ROLLBACK",
  NO_ROLLBACK: "NO_ROLLBACK",
} as const;
/**
 * @public
 */
export type RollbackOnDisable = (typeof RollbackOnDisable)[keyof typeof RollbackOnDisable];

/**
 * @public
 * @enum
 */
export const DescribePackagesFilterName = {
  PackageID: "PackageID",
  PackageName: "PackageName",
  PackageStatus: "PackageStatus",
} as const;
/**
 * @public
 */
export type DescribePackagesFilterName = (typeof DescribePackagesFilterName)[keyof typeof DescribePackagesFilterName];

/**
 * @public
 * @enum
 */
export const ReservedElasticsearchInstancePaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;
/**
 * @public
 */
export type ReservedElasticsearchInstancePaymentOption =
  (typeof ReservedElasticsearchInstancePaymentOption)[keyof typeof ReservedElasticsearchInstancePaymentOption];

/**
 * @public
 * @enum
 */
export const VpcEndpointErrorCode = {
  ENDPOINT_NOT_FOUND: "ENDPOINT_NOT_FOUND",
  SERVER_ERROR: "SERVER_ERROR",
} as const;
/**
 * @public
 */
export type VpcEndpointErrorCode = (typeof VpcEndpointErrorCode)[keyof typeof VpcEndpointErrorCode];

/**
 * @public
 * @enum
 */
export const UpgradeStep = {
  PRE_UPGRADE_CHECK: "PRE_UPGRADE_CHECK",
  SNAPSHOT: "SNAPSHOT",
  UPGRADE: "UPGRADE",
} as const;
/**
 * @public
 */
export type UpgradeStep = (typeof UpgradeStep)[keyof typeof UpgradeStep];

/**
 * @public
 * @enum
 */
export const UpgradeStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
  SUCCEEDED_WITH_ISSUES: "SUCCEEDED_WITH_ISSUES",
} as const;
/**
 * @public
 */
export type UpgradeStatus = (typeof UpgradeStatus)[keyof typeof UpgradeStatus];

/**
 * @public
 * @enum
 */
export const EngineType = {
  Elasticsearch: "Elasticsearch",
  OpenSearch: "OpenSearch",
} as const;
/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];
