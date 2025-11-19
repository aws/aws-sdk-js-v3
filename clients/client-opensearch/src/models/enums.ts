// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConnectionMode = {
  DIRECT: "DIRECT",
  VPC_ENDPOINT: "VPC_ENDPOINT",
} as const;
/**
 * @public
 */
export type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];

/**
 * @public
 * @enum
 */
export const InboundConnectionStatusCode = {
  ACTIVE: "ACTIVE",
  APPROVED: "APPROVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  PROVISIONING: "PROVISIONING",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
} as const;
/**
 * @public
 */
export type InboundConnectionStatusCode =
  (typeof InboundConnectionStatusCode)[keyof typeof InboundConnectionStatusCode];

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
export const ActionSeverity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type ActionSeverity = (typeof ActionSeverity)[keyof typeof ActionSeverity];

/**
 * @public
 * @enum
 */
export const ActionStatus = {
  COMPLETED: "COMPLETED",
  ELIGIBLE: "ELIGIBLE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_ELIGIBLE: "NOT_ELIGIBLE",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];

/**
 * @public
 * @enum
 */
export const ActionType = {
  JVM_HEAP_SIZE_TUNING: "JVM_HEAP_SIZE_TUNING",
  JVM_YOUNG_GEN_TUNING: "JVM_YOUNG_GEN_TUNING",
  SERVICE_SOFTWARE_UPDATE: "SERVICE_SOFTWARE_UPDATE",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const NaturalLanguageQueryGenerationDesiredState = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;
/**
 * @public
 */
export type NaturalLanguageQueryGenerationDesiredState =
  (typeof NaturalLanguageQueryGenerationDesiredState)[keyof typeof NaturalLanguageQueryGenerationDesiredState];

/**
 * @public
 * @enum
 */
export const NaturalLanguageQueryGenerationCurrentState = {
  DisableComplete: "DISABLE_COMPLETE",
  DisableFailed: "DISABLE_FAILED",
  DisableInProgress: "DISABLE_IN_PROGRESS",
  EnableComplete: "ENABLE_COMPLETE",
  EnableFailed: "ENABLE_FAILED",
  EnableInProgress: "ENABLE_IN_PROGRESS",
  NotEnabled: "NOT_ENABLED",
} as const;
/**
 * @public
 */
export type NaturalLanguageQueryGenerationCurrentState =
  (typeof NaturalLanguageQueryGenerationCurrentState)[keyof typeof NaturalLanguageQueryGenerationCurrentState];

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
  PACKAGE_CONFIG: "PACKAGE-CONFIG",
  PACKAGE_LICENSE: "PACKAGE-LICENSE",
  TXT_DICTIONARY: "TXT-DICTIONARY",
  ZIP_PLUGIN: "ZIP-PLUGIN",
} as const;
/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

/**
 * @public
 * @enum
 */
export const AWSServicePrincipal = {
  application_opensearchservice_amazonaws_com: "application.opensearchservice.amazonaws.com",
} as const;
/**
 * @public
 */
export type AWSServicePrincipal = (typeof AWSServicePrincipal)[keyof typeof AWSServicePrincipal];

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
export const AppConfigType = {
  OpensearchDashboardAdminGroups: "opensearchDashboards.dashboardAdmin.groups",
  OpensearchDashboardAdminUsers: "opensearchDashboards.dashboardAdmin.users",
} as const;
/**
 * @public
 */
export type AppConfigType = (typeof AppConfigType)[keyof typeof AppConfigType];

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
export const OpenSearchPartitionInstanceType = {
  c4_2xlarge_search: "c4.2xlarge.search",
  c4_4xlarge_search: "c4.4xlarge.search",
  c4_8xlarge_search: "c4.8xlarge.search",
  c4_large_search: "c4.large.search",
  c4_xlarge_search: "c4.xlarge.search",
  c5_18xlarge_search: "c5.18xlarge.search",
  c5_2xlarge_search: "c5.2xlarge.search",
  c5_4xlarge_search: "c5.4xlarge.search",
  c5_9xlarge_search: "c5.9xlarge.search",
  c5_large_search: "c5.large.search",
  c5_xlarge_search: "c5.xlarge.search",
  c6g_12xlarge_search: "c6g.12xlarge.search",
  c6g_2xlarge_search: "c6g.2xlarge.search",
  c6g_4xlarge_search: "c6g.4xlarge.search",
  c6g_8xlarge_search: "c6g.8xlarge.search",
  c6g_large_search: "c6g.large.search",
  c6g_xlarge_search: "c6g.xlarge.search",
  d2_2xlarge_search: "d2.2xlarge.search",
  d2_4xlarge_search: "d2.4xlarge.search",
  d2_8xlarge_search: "d2.8xlarge.search",
  d2_xlarge_search: "d2.xlarge.search",
  i2_2xlarge_search: "i2.2xlarge.search",
  i2_xlarge_search: "i2.xlarge.search",
  i3_16xlarge_search: "i3.16xlarge.search",
  i3_2xlarge_search: "i3.2xlarge.search",
  i3_4xlarge_search: "i3.4xlarge.search",
  i3_8xlarge_search: "i3.8xlarge.search",
  i3_large_search: "i3.large.search",
  i3_xlarge_search: "i3.xlarge.search",
  m3_2xlarge_search: "m3.2xlarge.search",
  m3_large_search: "m3.large.search",
  m3_medium_search: "m3.medium.search",
  m3_xlarge_search: "m3.xlarge.search",
  m4_10xlarge_search: "m4.10xlarge.search",
  m4_2xlarge_search: "m4.2xlarge.search",
  m4_4xlarge_search: "m4.4xlarge.search",
  m4_large_search: "m4.large.search",
  m4_xlarge_search: "m4.xlarge.search",
  m5_12xlarge_search: "m5.12xlarge.search",
  m5_24xlarge_search: "m5.24xlarge.search",
  m5_2xlarge_search: "m5.2xlarge.search",
  m5_4xlarge_search: "m5.4xlarge.search",
  m5_large_search: "m5.large.search",
  m5_xlarge_search: "m5.xlarge.search",
  m6g_12xlarge_search: "m6g.12xlarge.search",
  m6g_2xlarge_search: "m6g.2xlarge.search",
  m6g_4xlarge_search: "m6g.4xlarge.search",
  m6g_8xlarge_search: "m6g.8xlarge.search",
  m6g_large_search: "m6g.large.search",
  m6g_xlarge_search: "m6g.xlarge.search",
  or1_12xlarge_search: "or1.12xlarge.search",
  or1_16xlarge_search: "or1.16xlarge.search",
  or1_2xlarge_search: "or1.2xlarge.search",
  or1_4xlarge_search: "or1.4xlarge.search",
  or1_8xlarge_search: "or1.8xlarge.search",
  or1_large_search: "or1.large.search",
  or1_medium_search: "or1.medium.search",
  or1_xlarge_search: "or1.xlarge.search",
  r3_2xlarge_search: "r3.2xlarge.search",
  r3_4xlarge_search: "r3.4xlarge.search",
  r3_8xlarge_search: "r3.8xlarge.search",
  r3_large_search: "r3.large.search",
  r3_xlarge_search: "r3.xlarge.search",
  r4_16xlarge_search: "r4.16xlarge.search",
  r4_2xlarge_search: "r4.2xlarge.search",
  r4_4xlarge_search: "r4.4xlarge.search",
  r4_8xlarge_search: "r4.8xlarge.search",
  r4_large_search: "r4.large.search",
  r4_xlarge_search: "r4.xlarge.search",
  r5_12xlarge_search: "r5.12xlarge.search",
  r5_24xlarge_search: "r5.24xlarge.search",
  r5_2xlarge_search: "r5.2xlarge.search",
  r5_4xlarge_search: "r5.4xlarge.search",
  r5_large_search: "r5.large.search",
  r5_xlarge_search: "r5.xlarge.search",
  r6g_12xlarge_search: "r6g.12xlarge.search",
  r6g_2xlarge_search: "r6g.2xlarge.search",
  r6g_4xlarge_search: "r6g.4xlarge.search",
  r6g_8xlarge_search: "r6g.8xlarge.search",
  r6g_large_search: "r6g.large.search",
  r6g_xlarge_search: "r6g.xlarge.search",
  r6gd_12xlarge_search: "r6gd.12xlarge.search",
  r6gd_16xlarge_search: "r6gd.16xlarge.search",
  r6gd_2xlarge_search: "r6gd.2xlarge.search",
  r6gd_4xlarge_search: "r6gd.4xlarge.search",
  r6gd_8xlarge_search: "r6gd.8xlarge.search",
  r6gd_large_search: "r6gd.large.search",
  r6gd_xlarge_search: "r6gd.xlarge.search",
  t2_medium_search: "t2.medium.search",
  t2_micro_search: "t2.micro.search",
  t2_small_search: "t2.small.search",
  t3_2xlarge_search: "t3.2xlarge.search",
  t3_large_search: "t3.large.search",
  t3_medium_search: "t3.medium.search",
  t3_micro_search: "t3.micro.search",
  t3_nano_search: "t3.nano.search",
  t3_small_search: "t3.small.search",
  t3_xlarge_search: "t3.xlarge.search",
  t4g_medium_search: "t4g.medium.search",
  t4g_small_search: "t4g.small.search",
  ultrawarm1_large_search: "ultrawarm1.large.search",
  ultrawarm1_medium_search: "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search: "ultrawarm1.xlarge.search",
} as const;
/**
 * @public
 */
export type OpenSearchPartitionInstanceType =
  (typeof OpenSearchPartitionInstanceType)[keyof typeof OpenSearchPartitionInstanceType];

/**
 * @public
 * @enum
 */
export const NodeOptionsNodeType = {
  COORDINATOR: "coordinator",
} as const;
/**
 * @public
 */
export type NodeOptionsNodeType = (typeof NodeOptionsNodeType)[keyof typeof NodeOptionsNodeType];

/**
 * @public
 * @enum
 */
export const OpenSearchWarmPartitionInstanceType = {
  ultrawarm1_large_search: "ultrawarm1.large.search",
  ultrawarm1_medium_search: "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search: "ultrawarm1.xlarge.search",
} as const;
/**
 * @public
 */
export type OpenSearchWarmPartitionInstanceType =
  (typeof OpenSearchWarmPartitionInstanceType)[keyof typeof OpenSearchWarmPartitionInstanceType];

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
export const RolesKeyIdCOption = {
  GroupId: "GroupId",
  GroupName: "GroupName",
} as const;
/**
 * @public
 */
export type RolesKeyIdCOption = (typeof RolesKeyIdCOption)[keyof typeof RolesKeyIdCOption];

/**
 * @public
 * @enum
 */
export const SubjectKeyIdCOption = {
  Email: "Email",
  UserId: "UserId",
  UserName: "UserName",
} as const;
/**
 * @public
 */
export type SubjectKeyIdCOption = (typeof SubjectKeyIdCOption)[keyof typeof SubjectKeyIdCOption];

/**
 * @public
 * @enum
 */
export const IPAddressType = {
  DUALSTACK: "dualstack",
  IPV4: "ipv4",
} as const;
/**
 * @public
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

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
export const IndexStatus = {
  CREATED: "CREATED",
  DELETED: "DELETED",
  UPDATED: "UPDATED",
} as const;
/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 * @enum
 */
export const SkipUnavailableStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SkipUnavailableStatus = (typeof SkipUnavailableStatus)[keyof typeof SkipUnavailableStatus];

/**
 * @public
 * @enum
 */
export const OutboundConnectionStatusCode = {
  ACTIVE: "ACTIVE",
  APPROVED: "APPROVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  PROVISIONING: "PROVISIONING",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type OutboundConnectionStatusCode =
  (typeof OutboundConnectionStatusCode)[keyof typeof OutboundConnectionStatusCode];

/**
 * @public
 * @enum
 */
export const RequirementLevel = {
  NONE: "NONE",
  OPTIONAL: "OPTIONAL",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type RequirementLevel = (typeof RequirementLevel)[keyof typeof RequirementLevel];

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
export const DomainHealth = {
  Green: "Green",
  NotAvailable: "NotAvailable",
  Red: "Red",
  Yellow: "Yellow",
} as const;
/**
 * @public
 */
export type DomainHealth = (typeof DomainHealth)[keyof typeof DomainHealth];

/**
 * @public
 * @enum
 */
export const DomainState = {
  Active: "Active",
  NotAvailable: "NotAvailable",
  Processing: "Processing",
} as const;
/**
 * @public
 */
export type DomainState = (typeof DomainState)[keyof typeof DomainState];

/**
 * @public
 * @enum
 */
export const ZoneStatus = {
  Active: "Active",
  NotAvailable: "NotAvailable",
  StandBy: "StandBy",
} as const;
/**
 * @public
 */
export type ZoneStatus = (typeof ZoneStatus)[keyof typeof ZoneStatus];

/**
 * @public
 * @enum
 */
export const MasterNodeStatus = {
  Available: "Available",
  UnAvailable: "UnAvailable",
} as const;
/**
 * @public
 */
export type MasterNodeStatus = (typeof MasterNodeStatus)[keyof typeof MasterNodeStatus];

/**
 * @public
 * @enum
 */
export const NodeStatus = {
  Active: "Active",
  NotAvailable: "NotAvailable",
  StandBy: "StandBy",
} as const;
/**
 * @public
 */
export type NodeStatus = (typeof NodeStatus)[keyof typeof NodeStatus];

/**
 * @public
 * @enum
 */
export const NodeType = {
  Data: "Data",
  Master: "Master",
  Ultrawarm: "Ultrawarm",
} as const;
/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * @enum
 */
export const DescribePackagesFilterName = {
  EngineVersion: "EngineVersion",
  PackageID: "PackageID",
  PackageName: "PackageName",
  PackageOwner: "PackageOwner",
  PackageStatus: "PackageStatus",
  PackageType: "PackageType",
} as const;
/**
 * @public
 */
export type DescribePackagesFilterName = (typeof DescribePackagesFilterName)[keyof typeof DescribePackagesFilterName];

/**
 * @public
 * @enum
 */
export const ReservedInstancePaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;
/**
 * @public
 */
export type ReservedInstancePaymentOption =
  (typeof ReservedInstancePaymentOption)[keyof typeof ReservedInstancePaymentOption];

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
export const ApplicationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 * @enum
 */
export const MaintenanceType = {
  REBOOT_NODE: "REBOOT_NODE",
  RESTART_DASHBOARD: "RESTART_DASHBOARD",
  RESTART_SEARCH_PROCESS: "RESTART_SEARCH_PROCESS",
} as const;
/**
 * @public
 */
export type MaintenanceType = (typeof MaintenanceType)[keyof typeof MaintenanceType];

/**
 * @public
 * @enum
 */
export const MaintenanceStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];

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

/**
 * @public
 * @enum
 */
export const ScheduledBy = {
  CUSTOMER: "CUSTOMER",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type ScheduledBy = (typeof ScheduledBy)[keyof typeof ScheduledBy];

/**
 * @public
 * @enum
 */
export const ScheduleAt = {
  NOW: "NOW",
  OFF_PEAK_WINDOW: "OFF_PEAK_WINDOW",
  TIMESTAMP: "TIMESTAMP",
} as const;
/**
 * @public
 */
export type ScheduleAt = (typeof ScheduleAt)[keyof typeof ScheduleAt];

/**
 * @public
 * @enum
 */
export const DryRunMode = {
  Basic: "Basic",
  Verbose: "Verbose",
} as const;
/**
 * @public
 */
export type DryRunMode = (typeof DryRunMode)[keyof typeof DryRunMode];

/**
 * @public
 * @enum
 */
export const PackageScopeOperationEnum = {
  ADD: "ADD",
  OVERRIDE: "OVERRIDE",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type PackageScopeOperationEnum = (typeof PackageScopeOperationEnum)[keyof typeof PackageScopeOperationEnum];
