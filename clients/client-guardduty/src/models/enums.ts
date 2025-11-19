// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FreeTrialFeatureResult = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EC2_RUNTIME_MONITORING: "EC2_RUNTIME_MONITORING",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  FARGATE_RUNTIME_MONITORING: "FARGATE_RUNTIME_MONITORING",
  FLOW_LOGS: "FLOW_LOGS",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;
/**
 * @public
 */
export type FreeTrialFeatureResult = (typeof FreeTrialFeatureResult)[keyof typeof FreeTrialFeatureResult];

/**
 * @public
 * @enum
 */
export const MfaStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MfaStatus = (typeof MfaStatus)[keyof typeof MfaStatus];

/**
 * @public
 * @enum
 */
export const AdminStatus = {
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus];

/**
 * @public
 * @enum
 */
export const ProfileSubtype = {
  FREQUENT: "FREQUENT",
  INFREQUENT: "INFREQUENT",
  RARE: "RARE",
  UNSEEN: "UNSEEN",
} as const;
/**
 * @public
 */
export type ProfileSubtype = (typeof ProfileSubtype)[keyof typeof ProfileSubtype];

/**
 * @public
 * @enum
 */
export const ProfileType = {
  FREQUENCY: "FREQUENCY",
} as const;
/**
 * @public
 */
export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

/**
 * @public
 * @enum
 */
export const AutoEnableMembers = {
  ALL: "ALL",
  NEW: "NEW",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AutoEnableMembers = (typeof AutoEnableMembers)[keyof typeof AutoEnableMembers];

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const CoverageStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type CoverageStatus = (typeof CoverageStatus)[keyof typeof CoverageStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EC2: "EC2",
  ECS: "ECS",
  EKS: "EKS",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ManagementType = {
  AUTO_MANAGED: "AUTO_MANAGED",
  DISABLED: "DISABLED",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type ManagementType = (typeof ManagementType)[keyof typeof ManagementType];

/**
 * @public
 * @enum
 */
export const CoverageFilterCriterionKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  ADDON_VERSION: "ADDON_VERSION",
  AGENT_VERSION: "AGENT_VERSION",
  CLUSTER_ARN: "CLUSTER_ARN",
  CLUSTER_NAME: "CLUSTER_NAME",
  COVERAGE_STATUS: "COVERAGE_STATUS",
  ECS_CLUSTER_NAME: "ECS_CLUSTER_NAME",
  EKS_CLUSTER_NAME: "EKS_CLUSTER_NAME",
  INSTANCE_ID: "INSTANCE_ID",
  MANAGEMENT_TYPE: "MANAGEMENT_TYPE",
  RESOURCE_TYPE: "RESOURCE_TYPE",
} as const;
/**
 * @public
 */
export type CoverageFilterCriterionKey = (typeof CoverageFilterCriterionKey)[keyof typeof CoverageFilterCriterionKey];

/**
 * @public
 * @enum
 */
export const CoverageSortKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  ADDON_VERSION: "ADDON_VERSION",
  CLUSTER_NAME: "CLUSTER_NAME",
  COVERAGE_STATUS: "COVERAGE_STATUS",
  ECS_CLUSTER_NAME: "ECS_CLUSTER_NAME",
  EKS_CLUSTER_NAME: "EKS_CLUSTER_NAME",
  INSTANCE_ID: "INSTANCE_ID",
  ISSUE: "ISSUE",
  UPDATED_AT: "UPDATED_AT",
} as const;
/**
 * @public
 */
export type CoverageSortKey = (typeof CoverageSortKey)[keyof typeof CoverageSortKey];

/**
 * @public
 * @enum
 */
export const OrderBy = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];

/**
 * @public
 * @enum
 */
export const CoverageStatisticsType = {
  COUNT_BY_COVERAGE_STATUS: "COUNT_BY_COVERAGE_STATUS",
  COUNT_BY_RESOURCE_TYPE: "COUNT_BY_RESOURCE_TYPE",
} as const;
/**
 * @public
 */
export type CoverageStatisticsType = (typeof CoverageStatisticsType)[keyof typeof CoverageStatisticsType];

/**
 * @public
 * @enum
 */
export const FeatureAdditionalConfiguration = {
  EC2_AGENT_MANAGEMENT: "EC2_AGENT_MANAGEMENT",
  ECS_FARGATE_AGENT_MANAGEMENT: "ECS_FARGATE_AGENT_MANAGEMENT",
  EKS_ADDON_MANAGEMENT: "EKS_ADDON_MANAGEMENT",
} as const;
/**
 * @public
 */
export type FeatureAdditionalConfiguration =
  (typeof FeatureAdditionalConfiguration)[keyof typeof FeatureAdditionalConfiguration];

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * @enum
 */
export const DetectorFeature = {
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  RUNTIME_MONITORING: "RUNTIME_MONITORING",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;
/**
 * @public
 */
export type DetectorFeature = (typeof DetectorFeature)[keyof typeof DetectorFeature];

/**
 * @public
 * @enum
 */
export const FindingPublishingFrequency = {
  FIFTEEN_MINUTES: "FIFTEEN_MINUTES",
  ONE_HOUR: "ONE_HOUR",
  SIX_HOURS: "SIX_HOURS",
} as const;
/**
 * @public
 */
export type FindingPublishingFrequency = (typeof FindingPublishingFrequency)[keyof typeof FindingPublishingFrequency];

/**
 * @public
 * @enum
 */
export const FilterAction = {
  ARCHIVE: "ARCHIVE",
  NOOP: "NOOP",
} as const;
/**
 * @public
 */
export type FilterAction = (typeof FilterAction)[keyof typeof FilterAction];

/**
 * @public
 * @enum
 */
export const IpSetFormat = {
  ALIEN_VAULT: "ALIEN_VAULT",
  FIRE_EYE: "FIRE_EYE",
  OTX_CSV: "OTX_CSV",
  PROOF_POINT: "PROOF_POINT",
  STIX: "STIX",
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type IpSetFormat = (typeof IpSetFormat)[keyof typeof IpSetFormat];

/**
 * @public
 * @enum
 */
export const MalwareProtectionPlanTaggingActionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MalwareProtectionPlanTaggingActionStatus =
  (typeof MalwareProtectionPlanTaggingActionStatus)[keyof typeof MalwareProtectionPlanTaggingActionStatus];

/**
 * @public
 * @enum
 */
export const DestinationType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const ThreatEntitySetFormat = {
  ALIEN_VAULT: "ALIEN_VAULT",
  FIRE_EYE: "FIRE_EYE",
  OTX_CSV: "OTX_CSV",
  PROOF_POINT: "PROOF_POINT",
  STIX: "STIX",
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type ThreatEntitySetFormat = (typeof ThreatEntitySetFormat)[keyof typeof ThreatEntitySetFormat];

/**
 * @public
 * @enum
 */
export const ThreatIntelSetFormat = {
  ALIEN_VAULT: "ALIEN_VAULT",
  FIRE_EYE: "FIRE_EYE",
  OTX_CSV: "OTX_CSV",
  PROOF_POINT: "PROOF_POINT",
  STIX: "STIX",
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type ThreatIntelSetFormat = (typeof ThreatIntelSetFormat)[keyof typeof ThreatIntelSetFormat];

/**
 * @public
 * @enum
 */
export const TrustedEntitySetFormat = {
  ALIEN_VAULT: "ALIEN_VAULT",
  FIRE_EYE: "FIRE_EYE",
  OTX_CSV: "OTX_CSV",
  PROOF_POINT: "PROOF_POINT",
  STIX: "STIX",
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type TrustedEntitySetFormat = (typeof TrustedEntitySetFormat)[keyof typeof TrustedEntitySetFormat];

/**
 * @public
 * @enum
 */
export const CriterionKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  EC2_INSTANCE_ARN: "EC2_INSTANCE_ARN",
  GUARDDUTY_FINDING_ID: "GUARDDUTY_FINDING_ID",
  SCAN_ID: "SCAN_ID",
  SCAN_START_TIME: "SCAN_START_TIME",
  SCAN_STATUS: "SCAN_STATUS",
  SCAN_TYPE: "SCAN_TYPE",
} as const;
/**
 * @public
 */
export type CriterionKey = (typeof CriterionKey)[keyof typeof CriterionKey];

/**
 * @public
 * @enum
 */
export const DataSource = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EC2_MALWARE_SCAN: "EC2_MALWARE_SCAN",
  FLOW_LOGS: "FLOW_LOGS",
  KUBERNETES_AUDIT_LOGS: "KUBERNETES_AUDIT_LOGS",
  S3_LOGS: "S3_LOGS",
} as const;
/**
 * @public
 */
export type DataSource = (typeof DataSource)[keyof typeof DataSource];

/**
 * @public
 * @enum
 */
export const ScanResult = {
  CLEAN: "CLEAN",
  INFECTED: "INFECTED",
} as const;
/**
 * @public
 */
export type ScanResult = (typeof ScanResult)[keyof typeof ScanResult];

/**
 * @public
 * @enum
 */
export const ScanStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus];

/**
 * @public
 * @enum
 */
export const ScanType = {
  GUARDDUTY_INITIATED: "GUARDDUTY_INITIATED",
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  BACKUP: "BACKUP",
  GUARDDUTY: "GUARDDUTY",
} as const;
/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * @public
 * @enum
 */
export const OrgFeatureStatus = {
  ALL: "ALL",
  NEW: "NEW",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type OrgFeatureStatus = (typeof OrgFeatureStatus)[keyof typeof OrgFeatureStatus];

/**
 * @public
 * @enum
 */
export const OrgFeatureAdditionalConfiguration = {
  EC2_AGENT_MANAGEMENT: "EC2_AGENT_MANAGEMENT",
  ECS_FARGATE_AGENT_MANAGEMENT: "ECS_FARGATE_AGENT_MANAGEMENT",
  EKS_ADDON_MANAGEMENT: "EKS_ADDON_MANAGEMENT",
} as const;
/**
 * @public
 */
export type OrgFeatureAdditionalConfiguration =
  (typeof OrgFeatureAdditionalConfiguration)[keyof typeof OrgFeatureAdditionalConfiguration];

/**
 * @public
 * @enum
 */
export const OrgFeature = {
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  RUNTIME_MONITORING: "RUNTIME_MONITORING",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;
/**
 * @public
 */
export type OrgFeature = (typeof OrgFeature)[keyof typeof OrgFeature];

/**
 * @public
 * @enum
 */
export const PublishingStatus = {
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  PUBLISHING: "PUBLISHING",
  STOPPED: "STOPPED",
  UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY: "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY",
} as const;
/**
 * @public
 */
export type PublishingStatus = (typeof PublishingStatus)[keyof typeof PublishingStatus];

/**
 * @public
 * @enum
 */
export const NetworkDirection = {
  INBOUND: "INBOUND",
  OUTBOUND: "OUTBOUND",
} as const;
/**
 * @public
 */
export type NetworkDirection = (typeof NetworkDirection)[keyof typeof NetworkDirection];

/**
 * @public
 * @enum
 */
export const KubernetesResourcesTypes = {
  CRONJOBS: "CRONJOBS",
  DAEMONSETS: "DAEMONSETS",
  DEPLOYMENTS: "DEPLOYMENTS",
  JOBS: "JOBS",
  PODS: "PODS",
  REPLICASETS: "REPLICASETS",
  REPLICATIONCONTROLLERS: "REPLICATIONCONTROLLERS",
  STATEFULSETS: "STATEFULSETS",
} as const;
/**
 * @public
 */
export type KubernetesResourcesTypes = (typeof KubernetesResourcesTypes)[keyof typeof KubernetesResourcesTypes];

/**
 * @public
 * @enum
 */
export const PublicAccessStatus = {
  ALLOWED: "ALLOWED",
  BLOCKED: "BLOCKED",
} as const;
/**
 * @public
 */
export type PublicAccessStatus = (typeof PublicAccessStatus)[keyof typeof PublicAccessStatus];

/**
 * @public
 * @enum
 */
export const PublicAclIgnoreBehavior = {
  IGNORED: "IGNORED",
  NOT_IGNORED: "NOT_IGNORED",
} as const;
/**
 * @public
 */
export type PublicAclIgnoreBehavior = (typeof PublicAclIgnoreBehavior)[keyof typeof PublicAclIgnoreBehavior];

/**
 * @public
 * @enum
 */
export const PublicBucketRestrictBehavior = {
  NOT_RESTRICTED: "NOT_RESTRICTED",
  RESTRICTED: "RESTRICTED",
} as const;
/**
 * @public
 */
export type PublicBucketRestrictBehavior =
  (typeof PublicBucketRestrictBehavior)[keyof typeof PublicBucketRestrictBehavior];

/**
 * @public
 * @enum
 */
export const FindingResourceType = {
  ACCESS_KEY: "ACCESS_KEY",
  CONTAINER: "CONTAINER",
  EC2_INSTANCE: "EC2_INSTANCE",
  EC2_NETWORK_INTERFACE: "EC2_NETWORK_INTERFACE",
  EKS_CLUSTER: "EKS_CLUSTER",
  KUBERNETES_WORKLOAD: "KUBERNETES_WORKLOAD",
  S3_BUCKET: "S3_BUCKET",
  S3_OBJECT: "S3_OBJECT",
} as const;
/**
 * @public
 */
export type FindingResourceType = (typeof FindingResourceType)[keyof typeof FindingResourceType];

/**
 * @public
 * @enum
 */
export const IndicatorType = {
  ATTACK_TACTIC: "ATTACK_TACTIC",
  ATTACK_TECHNIQUE: "ATTACK_TECHNIQUE",
  CRYPTOMINING_DOMAIN: "CRYPTOMINING_DOMAIN",
  CRYPTOMINING_IP: "CRYPTOMINING_IP",
  CRYPTOMINING_PROCESS: "CRYPTOMINING_PROCESS",
  HIGH_RISK_API: "HIGH_RISK_API",
  MALICIOUS_DOMAIN: "MALICIOUS_DOMAIN",
  MALICIOUS_IP: "MALICIOUS_IP",
  MALICIOUS_PROCESS: "MALICIOUS_PROCESS",
  SUSPICIOUS_NETWORK: "SUSPICIOUS_NETWORK",
  SUSPICIOUS_PROCESS: "SUSPICIOUS_PROCESS",
  SUSPICIOUS_USER_AGENT: "SUSPICIOUS_USER_AGENT",
  TOR_IP: "TOR_IP",
  UNUSUAL_API_FOR_ACCOUNT: "UNUSUAL_API_FOR_ACCOUNT",
  UNUSUAL_ASN_FOR_ACCOUNT: "UNUSUAL_ASN_FOR_ACCOUNT",
  UNUSUAL_ASN_FOR_USER: "UNUSUAL_ASN_FOR_USER",
} as const;
/**
 * @public
 */
export type IndicatorType = (typeof IndicatorType)[keyof typeof IndicatorType];

/**
 * @public
 * @enum
 */
export const SignalType = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  FINDING: "FINDING",
  FLOW_LOGS: "FLOW_LOGS",
  RUNTIME_MONITORING: "RUNTIME_MONITORING",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;
/**
 * @public
 */
export type SignalType = (typeof SignalType)[keyof typeof SignalType];

/**
 * @public
 * @enum
 */
export const DetectionSource = {
  AMAZON: "AMAZON",
  BITDEFENDER: "BITDEFENDER",
} as const;
/**
 * @public
 */
export type DetectionSource = (typeof DetectionSource)[keyof typeof DetectionSource];

/**
 * @public
 * @enum
 */
export const DetectorFeatureResult = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  FLOW_LOGS: "FLOW_LOGS",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  RUNTIME_MONITORING: "RUNTIME_MONITORING",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;
/**
 * @public
 */
export type DetectorFeatureResult = (typeof DetectorFeatureResult)[keyof typeof DetectorFeatureResult];

/**
 * @public
 * @enum
 */
export const DetectorStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DetectorStatus = (typeof DetectorStatus)[keyof typeof DetectorStatus];

/**
 * @public
 * @enum
 */
export const EbsSnapshotPreservation = {
  NO_RETENTION: "NO_RETENTION",
  RETENTION_WITH_FINDING: "RETENTION_WITH_FINDING",
} as const;
/**
 * @public
 */
export type EbsSnapshotPreservation = (typeof EbsSnapshotPreservation)[keyof typeof EbsSnapshotPreservation];

/**
 * @public
 * @enum
 */
export const Feedback = {
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;
/**
 * @public
 */
export type Feedback = (typeof Feedback)[keyof typeof Feedback];

/**
 * @public
 * @enum
 */
export const ScanCategory = {
  FULL_SCAN: "FULL_SCAN",
  INCREMENTAL_SCAN: "INCREMENTAL_SCAN",
} as const;
/**
 * @public
 */
export type ScanCategory = (typeof ScanCategory)[keyof typeof ScanCategory];

/**
 * @public
 * @enum
 */
export const MalwareProtectionScanType = {
  BACKUP_INITIATED: "BACKUP_INITIATED",
  GUARDDUTY_INITIATED: "GUARDDUTY_INITIATED",
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type MalwareProtectionScanType = (typeof MalwareProtectionScanType)[keyof typeof MalwareProtectionScanType];

/**
 * @public
 * @enum
 */
export const FindingStatisticType = {
  COUNT_BY_SEVERITY: "COUNT_BY_SEVERITY",
} as const;
/**
 * @public
 */
export type FindingStatisticType = (typeof FindingStatisticType)[keyof typeof FindingStatisticType];

/**
 * @public
 * @enum
 */
export const GroupByType = {
  ACCOUNT: "ACCOUNT",
  DATE: "DATE",
  FINDING_TYPE: "FINDING_TYPE",
  RESOURCE: "RESOURCE",
  SEVERITY: "SEVERITY",
} as const;
/**
 * @public
 */
export type GroupByType = (typeof GroupByType)[keyof typeof GroupByType];

/**
 * @public
 * @enum
 */
export const IpSetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type IpSetStatus = (typeof IpSetStatus)[keyof typeof IpSetStatus];

/**
 * @public
 * @enum
 */
export const MalwareProtectionPlanStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type MalwareProtectionPlanStatus =
  (typeof MalwareProtectionPlanStatus)[keyof typeof MalwareProtectionPlanStatus];

/**
 * @public
 * @enum
 */
export const MalwareProtectionResourceType = {
  EBS_RECOVERY_POINT: "EBS_RECOVERY_POINT",
  EBS_SNAPSHOT: "EBS_SNAPSHOT",
  EBS_VOLUME: "EBS_VOLUME",
  EC2_AMI: "EC2_AMI",
  EC2_INSTANCE: "EC2_INSTANCE",
  EC2_RECOVERY_POINT: "EC2_RECOVERY_POINT",
  S3_BUCKET: "S3_BUCKET",
  S3_RECOVERY_POINT: "S3_RECOVERY_POINT",
} as const;
/**
 * @public
 */
export type MalwareProtectionResourceType =
  (typeof MalwareProtectionResourceType)[keyof typeof MalwareProtectionResourceType];

/**
 * @public
 * @enum
 */
export const MalwareProtectionScanStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ISSUES: "COMPLETED_WITH_ISSUES",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type MalwareProtectionScanStatus =
  (typeof MalwareProtectionScanStatus)[keyof typeof MalwareProtectionScanStatus];

/**
 * @public
 * @enum
 */
export const ScanStatusReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  AMI_SNAPSHOT_LIMIT_EXCEEDED: "AMI_SNAPSHOT_LIMIT_EXCEEDED",
  BASE_CREATED_AFTER_TARGET: "BASE_CREATED_AFTER_TARGET",
  BASE_RESOURCE_NOT_SCANNED: "BASE_RESOURCE_NOT_SCANNED",
  INCONSISTENT_SOURCE: "INCONSISTENT_SOURCE",
  INCREMENTAL_NO_DIFFERENCE: "INCREMENTAL_NO_DIFFERENCE",
  NO_EBS_VOLUMES_FOUND: "NO_EBS_VOLUMES_FOUND",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  RESOURCE_UNAVAILABLE: "RESOURCE_UNAVAILABLE",
  SNAPSHOT_SIZE_LIMIT_EXCEEDED: "SNAPSHOT_SIZE_LIMIT_EXCEEDED",
  UNRELATED_RESOURCES: "UNRELATED_RESOURCES",
  UNSUPPORTED_AMI: "UNSUPPORTED_AMI",
  UNSUPPORTED_COMPOSITE_RECOVERY_POINT: "UNSUPPORTED_COMPOSITE_RECOVERY_POINT",
  UNSUPPORTED_FOR_INCREMENTAL: "UNSUPPORTED_FOR_INCREMENTAL",
  UNSUPPORTED_PRODUCT_CODE_TYPE: "UNSUPPORTED_PRODUCT_CODE_TYPE",
  UNSUPPORTED_SNAPSHOT: "UNSUPPORTED_SNAPSHOT",
} as const;
/**
 * @public
 */
export type ScanStatusReason = (typeof ScanStatusReason)[keyof typeof ScanStatusReason];

/**
 * @public
 * @enum
 */
export const ScanResultStatus = {
  NO_THREATS_FOUND: "NO_THREATS_FOUND",
  THREATS_FOUND: "THREATS_FOUND",
} as const;
/**
 * @public
 */
export type ScanResultStatus = (typeof ScanResultStatus)[keyof typeof ScanResultStatus];

/**
 * @public
 * @enum
 */
export const ScanCriterionKey = {
  EC2_INSTANCE_TAG: "EC2_INSTANCE_TAG",
} as const;
/**
 * @public
 */
export type ScanCriterionKey = (typeof ScanCriterionKey)[keyof typeof ScanCriterionKey];

/**
 * @public
 * @enum
 */
export const ThreatEntitySetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ThreatEntitySetStatus = (typeof ThreatEntitySetStatus)[keyof typeof ThreatEntitySetStatus];

/**
 * @public
 * @enum
 */
export const ThreatIntelSetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ThreatIntelSetStatus = (typeof ThreatIntelSetStatus)[keyof typeof ThreatIntelSetStatus];

/**
 * @public
 * @enum
 */
export const TrustedEntitySetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type TrustedEntitySetStatus = (typeof TrustedEntitySetStatus)[keyof typeof TrustedEntitySetStatus];

/**
 * @public
 * @enum
 */
export const UsageFeature = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EC2_RUNTIME_MONITORING: "EC2_RUNTIME_MONITORING",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  FARGATE_RUNTIME_MONITORING: "FARGATE_RUNTIME_MONITORING",
  FLOW_LOGS: "FLOW_LOGS",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_DBI_PROTECTION_PROVISIONED: "RDS_DBI_PROTECTION_PROVISIONED",
  RDS_DBI_PROTECTION_SERVERLESS: "RDS_DBI_PROTECTION_SERVERLESS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;
/**
 * @public
 */
export type UsageFeature = (typeof UsageFeature)[keyof typeof UsageFeature];

/**
 * @public
 * @enum
 */
export const UsageStatisticType = {
  SUM_BY_ACCOUNT: "SUM_BY_ACCOUNT",
  SUM_BY_DATA_SOURCE: "SUM_BY_DATA_SOURCE",
  SUM_BY_FEATURES: "SUM_BY_FEATURES",
  SUM_BY_RESOURCE: "SUM_BY_RESOURCE",
  TOP_ACCOUNTS_BY_FEATURE: "TOP_ACCOUNTS_BY_FEATURE",
  TOP_RESOURCES: "TOP_RESOURCES",
} as const;
/**
 * @public
 */
export type UsageStatisticType = (typeof UsageStatisticType)[keyof typeof UsageStatisticType];

/**
 * @public
 * @enum
 */
export const ListMalwareScansCriterionKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  GUARDDUTY_FINDING_ID: "GUARDDUTY_FINDING_ID",
  RESOURCE_ARN: "RESOURCE_ARN",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SCAN_ID: "SCAN_ID",
  SCAN_START_TIME: "SCAN_START_TIME",
  SCAN_STATUS: "SCAN_STATUS",
  SCAN_TYPE: "SCAN_TYPE",
} as const;
/**
 * @public
 */
export type ListMalwareScansCriterionKey =
  (typeof ListMalwareScansCriterionKey)[keyof typeof ListMalwareScansCriterionKey];
