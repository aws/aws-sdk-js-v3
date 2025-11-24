// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const AggregationFindingType = {
  CODE_VULNERABILITY: "CODE_VULNERABILITY",
  NETWORK_REACHABILITY: "NETWORK_REACHABILITY",
  PACKAGE_VULNERABILITY: "PACKAGE_VULNERABILITY",
} as const;
/**
 * @public
 */
export type AggregationFindingType = (typeof AggregationFindingType)[keyof typeof AggregationFindingType];

/**
 * @public
 * @enum
 */
export const AggregationResourceType = {
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE: "AWS_ECR_CONTAINER_IMAGE",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;
/**
 * @public
 */
export type AggregationResourceType = (typeof AggregationResourceType)[keyof typeof AggregationResourceType];

/**
 * @public
 * @enum
 */
export const AccountSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type AccountSortBy = (typeof AccountSortBy)[keyof typeof AccountSortBy];

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
export const CisStringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  PREFIX: "PREFIX",
} as const;
/**
 * @public
 */
export type CisStringComparison = (typeof CisStringComparison)[keyof typeof CisStringComparison];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ACCOUNT_IS_ISOLATED: "ACCOUNT_IS_ISOLATED",
  ALREADY_ENABLED: "ALREADY_ENABLED",
  BLOCKED_BY_ORGANIZATION_POLICY: "BLOCKED_BY_ORGANIZATION_POLICY",
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  DISASSOCIATE_ALL_MEMBERS: "DISASSOCIATE_ALL_MEMBERS",
  EC2_SSM_ASSOCIATION_VERSION_LIMIT_EXCEEDED: "EC2_SSM_ASSOCIATION_VERSION_LIMIT_EXCEEDED",
  EC2_SSM_RESOURCE_DATA_SYNC_LIMIT_EXCEEDED: "EC2_SSM_RESOURCE_DATA_SYNC_LIMIT_EXCEEDED",
  ENABLE_IN_PROGRESS: "ENABLE_IN_PROGRESS",
  EVENTBRIDGE_THROTTLED: "EVENTBRIDGE_THROTTLED",
  EVENTBRIDGE_UNAVAILABLE: "EVENTBRIDGE_UNAVAILABLE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  RESOURCE_SCAN_NOT_DISABLED: "RESOURCE_SCAN_NOT_DISABLED",
  SSM_THROTTLED: "SSM_THROTTLED",
  SSM_UNAVAILABLE: "SSM_UNAVAILABLE",
  SUSPEND_IN_PROGRESS: "SUSPEND_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const StringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  PREFIX: "PREFIX",
} as const;
/**
 * @public
 */
export type StringComparison = (typeof StringComparison)[keyof typeof StringComparison];

/**
 * @public
 * @enum
 */
export const AmiSortBy = {
  AFFECTED_INSTANCES: "AFFECTED_INSTANCES",
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type AmiSortBy = (typeof AmiSortBy)[keyof typeof AmiSortBy];

/**
 * @public
 * @enum
 */
export const AwsEcrContainerSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type AwsEcrContainerSortBy = (typeof AwsEcrContainerSortBy)[keyof typeof AwsEcrContainerSortBy];

/**
 * @public
 * @enum
 */
export const CodeRepositorySortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type CodeRepositorySortBy = (typeof CodeRepositorySortBy)[keyof typeof CodeRepositorySortBy];

/**
 * @public
 * @enum
 */
export const MapComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type MapComparison = (typeof MapComparison)[keyof typeof MapComparison];

/**
 * @public
 * @enum
 */
export const Ec2InstanceSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  NETWORK_FINDINGS: "NETWORK_FINDINGS",
} as const;
/**
 * @public
 */
export type Ec2InstanceSortBy = (typeof Ec2InstanceSortBy)[keyof typeof Ec2InstanceSortBy];

/**
 * @public
 * @enum
 */
export const FindingTypeSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type FindingTypeSortBy = (typeof FindingTypeSortBy)[keyof typeof FindingTypeSortBy];

/**
 * @public
 * @enum
 */
export const ImageLayerSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type ImageLayerSortBy = (typeof ImageLayerSortBy)[keyof typeof ImageLayerSortBy];

/**
 * @public
 * @enum
 */
export const LambdaFunctionSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type LambdaFunctionSortBy = (typeof LambdaFunctionSortBy)[keyof typeof LambdaFunctionSortBy];

/**
 * @public
 * @enum
 */
export const LambdaLayerSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type LambdaLayerSortBy = (typeof LambdaLayerSortBy)[keyof typeof LambdaLayerSortBy];

/**
 * @public
 * @enum
 */
export const PackageSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type PackageSortBy = (typeof PackageSortBy)[keyof typeof PackageSortBy];

/**
 * @public
 * @enum
 */
export const RepositorySortBy = {
  AFFECTED_IMAGES: "AFFECTED_IMAGES",
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type RepositorySortBy = (typeof RepositorySortBy)[keyof typeof RepositorySortBy];

/**
 * @public
 * @enum
 */
export const TitleSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;
/**
 * @public
 */
export type TitleSortBy = (typeof TitleSortBy)[keyof typeof TitleSortBy];

/**
 * @public
 * @enum
 */
export const AggregationType = {
  ACCOUNT: "ACCOUNT",
  AMI: "AMI",
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER: "AWS_ECR_CONTAINER",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
  FINDING_TYPE: "FINDING_TYPE",
  IMAGE_LAYER: "IMAGE_LAYER",
  LAMBDA_LAYER: "LAMBDA_LAYER",
  PACKAGE: "PACKAGE",
  REPOSITORY: "REPOSITORY",
  TITLE: "TITLE",
} as const;
/**
 * @public
 */
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType];

/**
 * @public
 * @enum
 */
export const Architecture = {
  ARM64: "ARM64",
  X86_64: "X86_64",
} as const;
/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
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
export const AssociationResultStatusCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_INPUT: "INVALID_INPUT",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  SCAN_CONFIGURATION_NOT_FOUND: "SCAN_CONFIGURATION_NOT_FOUND",
} as const;
/**
 * @public
 */
export type AssociationResultStatusCode =
  (typeof AssociationResultStatusCode)[keyof typeof AssociationResultStatusCode];

/**
 * @public
 * @enum
 */
export const PackageType = {
  IMAGE: "IMAGE",
  ZIP: "ZIP",
} as const;
/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

/**
 * @public
 * @enum
 */
export const Runtime = {
  DOTNETCORE_3_1: "DOTNETCORE_3_1",
  DOTNET_6: "DOTNET_6",
  DOTNET_7: "DOTNET_7",
  GO_1_X: "GO_1_X",
  JAVA_11: "JAVA_11",
  JAVA_17: "JAVA_17",
  JAVA_8: "JAVA_8",
  JAVA_8_AL2: "JAVA_8_AL2",
  NODEJS: "NODEJS",
  NODEJS_12_X: "NODEJS_12_X",
  NODEJS_14_X: "NODEJS_14_X",
  NODEJS_16_X: "NODEJS_16_X",
  NODEJS_18_X: "NODEJS_18_X",
  PYTHON_3_10: "PYTHON_3_10",
  PYTHON_3_11: "PYTHON_3_11",
  PYTHON_3_7: "PYTHON_3_7",
  PYTHON_3_8: "PYTHON_3_8",
  PYTHON_3_9: "PYTHON_3_9",
  RUBY_2_7: "RUBY_2_7",
  RUBY_3_2: "RUBY_3_2",
  UNSUPPORTED: "UNSUPPORTED",
} as const;
/**
 * @public
 */
export type Runtime = (typeof Runtime)[keyof typeof Runtime];

/**
 * @public
 * @enum
 */
export const CodeSnippetErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CODE_SNIPPET_NOT_FOUND: "CODE_SNIPPET_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_INPUT: "INVALID_INPUT",
} as const;
/**
 * @public
 */
export type CodeSnippetErrorCode = (typeof CodeSnippetErrorCode)[keyof typeof CodeSnippetErrorCode];

/**
 * @public
 * @enum
 */
export const FindingDetailsErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  FINDING_DETAILS_NOT_FOUND: "FINDING_DETAILS_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_INPUT: "INVALID_INPUT",
} as const;
/**
 * @public
 */
export type FindingDetailsErrorCode = (typeof FindingDetailsErrorCode)[keyof typeof FindingDetailsErrorCode];

/**
 * @public
 * @enum
 */
export const FreeTrialStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type FreeTrialStatus = (typeof FreeTrialStatus)[keyof typeof FreeTrialStatus];

/**
 * @public
 * @enum
 */
export const FreeTrialType = {
  CODE_REPOSITORY: "CODE_REPOSITORY",
  EC2: "EC2",
  ECR: "ECR",
  LAMBDA: "LAMBDA",
  LAMBDA_CODE: "LAMBDA_CODE",
} as const;
/**
 * @public
 */
export type FreeTrialType = (typeof FreeTrialType)[keyof typeof FreeTrialType];

/**
 * @public
 * @enum
 */
export const FreeTrialInfoErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type FreeTrialInfoErrorCode = (typeof FreeTrialInfoErrorCode)[keyof typeof FreeTrialInfoErrorCode];

/**
 * @public
 * @enum
 */
export const Ec2DeepInspectionStatus = {
  ACTIVATED: "ACTIVATED",
  DEACTIVATED: "DEACTIVATED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type Ec2DeepInspectionStatus = (typeof Ec2DeepInspectionStatus)[keyof typeof Ec2DeepInspectionStatus];

/**
 * @public
 * @enum
 */
export const CisSecurityLevel = {
  LEVEL_1: "LEVEL_1",
  LEVEL_2: "LEVEL_2",
} as const;
/**
 * @public
 */
export type CisSecurityLevel = (typeof CisSecurityLevel)[keyof typeof CisSecurityLevel];

/**
 * @public
 * @enum
 */
export const CisFindingStatus = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type CisFindingStatus = (typeof CisFindingStatus)[keyof typeof CisFindingStatus];

/**
 * @public
 * @enum
 */
export const CisFindingStatusComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type CisFindingStatusComparison = (typeof CisFindingStatusComparison)[keyof typeof CisFindingStatusComparison];

/**
 * @public
 * @enum
 */
export const CisReportFormat = {
  CSV: "CSV",
  PDF: "PDF",
} as const;
/**
 * @public
 */
export type CisReportFormat = (typeof CisReportFormat)[keyof typeof CisReportFormat];

/**
 * @public
 * @enum
 */
export const CisReportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CisReportStatus = (typeof CisReportStatus)[keyof typeof CisReportStatus];

/**
 * @public
 * @enum
 */
export const CisResultStatus = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type CisResultStatus = (typeof CisResultStatus)[keyof typeof CisResultStatus];

/**
 * @public
 * @enum
 */
export const CisResultStatusComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type CisResultStatusComparison = (typeof CisResultStatusComparison)[keyof typeof CisResultStatusComparison];

/**
 * @public
 * @enum
 */
export const CisRuleStatus = {
  ERROR: "ERROR",
  FAILED: "FAILED",
  INFORMATIONAL: "INFORMATIONAL",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  NOT_EVALUATED: "NOT_EVALUATED",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type CisRuleStatus = (typeof CisRuleStatus)[keyof typeof CisRuleStatus];

/**
 * @public
 * @enum
 */
export const CisScanStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CisScanStatus = (typeof CisScanStatus)[keyof typeof CisScanStatus];

/**
 * @public
 * @enum
 */
export const Day = {
  FRI: "FRI",
  MON: "MON",
  SAT: "SAT",
  SUN: "SUN",
  THU: "THU",
  TUE: "TUE",
  WED: "WED",
} as const;
/**
 * @public
 */
export type Day = (typeof Day)[keyof typeof Day];

/**
 * @public
 * @enum
 */
export const CisScanConfigurationsSortBy = {
  SCAN_CONFIGURATION_ARN: "SCAN_CONFIGURATION_ARN",
  SCAN_NAME: "SCAN_NAME",
} as const;
/**
 * @public
 */
export type CisScanConfigurationsSortBy =
  (typeof CisScanConfigurationsSortBy)[keyof typeof CisScanConfigurationsSortBy];

/**
 * @public
 * @enum
 */
export const CisSecurityLevelComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type CisSecurityLevelComparison = (typeof CisSecurityLevelComparison)[keyof typeof CisSecurityLevelComparison];

/**
 * @public
 * @enum
 */
export const CisScanResultDetailsSortBy = {
  CHECK_ID: "CHECK_ID",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type CisScanResultDetailsSortBy = (typeof CisScanResultDetailsSortBy)[keyof typeof CisScanResultDetailsSortBy];

/**
 * @public
 * @enum
 */
export const CisScanResultsAggregatedByChecksSortBy = {
  CHECK_ID: "CHECK_ID",
  FAILED_COUNTS: "FAILED_COUNTS",
  PLATFORM: "PLATFORM",
  SECURITY_LEVEL: "SECURITY_LEVEL",
  TITLE: "TITLE",
} as const;
/**
 * @public
 */
export type CisScanResultsAggregatedByChecksSortBy =
  (typeof CisScanResultsAggregatedByChecksSortBy)[keyof typeof CisScanResultsAggregatedByChecksSortBy];

/**
 * @public
 * @enum
 */
export const TagComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type TagComparison = (typeof TagComparison)[keyof typeof TagComparison];

/**
 * @public
 * @enum
 */
export const CisTargetStatusComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type CisTargetStatusComparison = (typeof CisTargetStatusComparison)[keyof typeof CisTargetStatusComparison];

/**
 * @public
 * @enum
 */
export const CisTargetStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type CisTargetStatus = (typeof CisTargetStatus)[keyof typeof CisTargetStatus];

/**
 * @public
 * @enum
 */
export const CisTargetStatusReason = {
  SCAN_IN_PROGRESS: "SCAN_IN_PROGRESS",
  SSM_UNMANAGED: "SSM_UNMANAGED",
  UNSUPPORTED_OS: "UNSUPPORTED_OS",
} as const;
/**
 * @public
 */
export type CisTargetStatusReason = (typeof CisTargetStatusReason)[keyof typeof CisTargetStatusReason];

/**
 * @public
 * @enum
 */
export const CisScanResultsAggregatedByTargetResourceSortBy = {
  ACCOUNT_ID: "ACCOUNT_ID",
  FAILED_COUNTS: "FAILED_COUNTS",
  PLATFORM: "PLATFORM",
  RESOURCE_ID: "RESOURCE_ID",
  TARGET_STATUS: "TARGET_STATUS",
  TARGET_STATUS_REASON: "TARGET_STATUS_REASON",
} as const;
/**
 * @public
 */
export type CisScanResultsAggregatedByTargetResourceSortBy =
  (typeof CisScanResultsAggregatedByTargetResourceSortBy)[keyof typeof CisScanResultsAggregatedByTargetResourceSortBy];

/**
 * @public
 * @enum
 */
export const CisScanStatusComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type CisScanStatusComparison = (typeof CisScanStatusComparison)[keyof typeof CisScanStatusComparison];

/**
 * @public
 * @enum
 */
export const CisSortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type CisSortOrder = (typeof CisSortOrder)[keyof typeof CisSortOrder];

/**
 * @public
 * @enum
 */
export const CodeRepositoryProviderType = {
  GITHUB: "GITHUB",
  GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
} as const;
/**
 * @public
 */
export type CodeRepositoryProviderType = (typeof CodeRepositoryProviderType)[keyof typeof CodeRepositoryProviderType];

/**
 * @public
 * @enum
 */
export const ScanStatusReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ACCESS_DENIED_TO_ENCRYPTION_KEY: "ACCESS_DENIED_TO_ENCRYPTION_KEY",
  AGENTLESS_INSTANCE_COLLECTION_TIME_LIMIT_EXCEEDED: "AGENTLESS_INSTANCE_COLLECTION_TIME_LIMIT_EXCEEDED",
  AGENTLESS_INSTANCE_STORAGE_LIMIT_EXCEEDED: "AGENTLESS_INSTANCE_STORAGE_LIMIT_EXCEEDED",
  DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED: "DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED",
  DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED: "DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED",
  DEEP_INSPECTION_NO_INVENTORY: "DEEP_INSPECTION_NO_INVENTORY",
  DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED: "DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED",
  EC2_INSTANCE_STOPPED: "EC2_INSTANCE_STOPPED",
  EXCLUDED_BY_TAG: "EXCLUDED_BY_TAG",
  IMAGE_ARCHIVED: "IMAGE_ARCHIVED",
  IMAGE_SIZE_EXCEEDED: "IMAGE_SIZE_EXCEEDED",
  INTEGRATION_CONNECTION_LOST: "INTEGRATION_CONNECTION_LOST",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  NO_INVENTORY: "NO_INVENTORY",
  NO_RESOURCES_FOUND: "NO_RESOURCES_FOUND",
  NO_SCAN_CONFIGURATION_ASSOCIATED: "NO_SCAN_CONFIGURATION_ASSOCIATED",
  PENDING_DISABLE: "PENDING_DISABLE",
  PENDING_INITIAL_SCAN: "PENDING_INITIAL_SCAN",
  PENDING_REVIVAL_SCAN: "PENDING_REVIVAL_SCAN",
  RESOURCE_TERMINATED: "RESOURCE_TERMINATED",
  SCAN_ELIGIBILITY_EXPIRED: "SCAN_ELIGIBILITY_EXPIRED",
  SCAN_FREQUENCY_MANUAL: "SCAN_FREQUENCY_MANUAL",
  SCAN_FREQUENCY_SCAN_ON_PUSH: "SCAN_FREQUENCY_SCAN_ON_PUSH",
  SCAN_IN_PROGRESS: "SCAN_IN_PROGRESS",
  STALE_INVENTORY: "STALE_INVENTORY",
  SUCCESSFUL: "SUCCESSFUL",
  UNMANAGED_EC2_INSTANCE: "UNMANAGED_EC2_INSTANCE",
  UNSUPPORTED_CONFIG_FILE: "UNSUPPORTED_CONFIG_FILE",
  UNSUPPORTED_LANGUAGE: "UNSUPPORTED_LANGUAGE",
  UNSUPPORTED_MEDIA_TYPE: "UNSUPPORTED_MEDIA_TYPE",
  UNSUPPORTED_OS: "UNSUPPORTED_OS",
  UNSUPPORTED_RUNTIME: "UNSUPPORTED_RUNTIME",
} as const;
/**
 * @public
 */
export type ScanStatusReason = (typeof ScanStatusReason)[keyof typeof ScanStatusReason];

/**
 * @public
 * @enum
 */
export const ScanStatusCode = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ScanStatusCode = (typeof ScanStatusCode)[keyof typeof ScanStatusCode];

/**
 * @public
 * @enum
 */
export const RuleSetCategory = {
  IAC: "IAC",
  SAST: "SAST",
  SCA: "SCA",
} as const;
/**
 * @public
 */
export type RuleSetCategory = (typeof RuleSetCategory)[keyof typeof RuleSetCategory];

/**
 * @public
 * @enum
 */
export const ContinuousIntegrationScanEvent = {
  PULL_REQUEST: "PULL_REQUEST",
  PUSH: "PUSH",
} as const;
/**
 * @public
 */
export type ContinuousIntegrationScanEvent =
  (typeof ContinuousIntegrationScanEvent)[keyof typeof ContinuousIntegrationScanEvent];

/**
 * @public
 * @enum
 */
export const CodeScanStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type CodeScanStatus = (typeof CodeScanStatus)[keyof typeof CodeScanStatus];

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "ACTIVE",
  DISABLING: "DISABLING",
  INACTIVE: "INACTIVE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  GITHUB: "GITHUB",
  GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
} as const;
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const PeriodicScanFrequency = {
  MONTHLY: "MONTHLY",
  NEVER: "NEVER",
  WEEKLY: "WEEKLY",
} as const;
/**
 * @public
 */
export type PeriodicScanFrequency = (typeof PeriodicScanFrequency)[keyof typeof PeriodicScanFrequency];

/**
 * @public
 * @enum
 */
export const ProjectSelectionScope = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type ProjectSelectionScope = (typeof ProjectSelectionScope)[keyof typeof ProjectSelectionScope];

/**
 * @public
 * @enum
 */
export const ConfigurationLevel = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATION: "ORGANIZATION",
} as const;
/**
 * @public
 */
export type ConfigurationLevel = (typeof ConfigurationLevel)[keyof typeof ConfigurationLevel];

/**
 * @public
 * @enum
 */
export const GroupKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  ECR_REPOSITORY_NAME: "ECR_REPOSITORY_NAME",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SCAN_STATUS_CODE: "SCAN_STATUS_CODE",
  SCAN_STATUS_REASON: "SCAN_STATUS_REASON",
} as const;
/**
 * @public
 */
export type GroupKey = (typeof GroupKey)[keyof typeof GroupKey];

/**
 * @public
 * @enum
 */
export const CoverageStringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type CoverageStringComparison = (typeof CoverageStringComparison)[keyof typeof CoverageStringComparison];

/**
 * @public
 * @enum
 */
export const CoverageMapComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type CoverageMapComparison = (typeof CoverageMapComparison)[keyof typeof CoverageMapComparison];

/**
 * @public
 * @enum
 */
export const CoverageResourceType = {
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE: "AWS_ECR_CONTAINER_IMAGE",
  AWS_ECR_REPOSITORY: "AWS_ECR_REPOSITORY",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;
/**
 * @public
 */
export type CoverageResourceType = (typeof CoverageResourceType)[keyof typeof CoverageResourceType];

/**
 * @public
 * @enum
 */
export const Ec2Platform = {
  LINUX: "LINUX",
  MACOS: "MACOS",
  UNKNOWN: "UNKNOWN",
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type Ec2Platform = (typeof Ec2Platform)[keyof typeof Ec2Platform];

/**
 * @public
 * @enum
 */
export const EcrScanFrequency = {
  CONTINUOUS_SCAN: "CONTINUOUS_SCAN",
  MANUAL: "MANUAL",
  SCAN_ON_PUSH: "SCAN_ON_PUSH",
} as const;
/**
 * @public
 */
export type EcrScanFrequency = (typeof EcrScanFrequency)[keyof typeof EcrScanFrequency];

/**
 * @public
 * @enum
 */
export const ScanMode = {
  EC2_AGENTLESS: "EC2_AGENTLESS",
  EC2_SSM_AGENT_BASED: "EC2_SSM_AGENT_BASED",
} as const;
/**
 * @public
 */
export type ScanMode = (typeof ScanMode)[keyof typeof ScanMode];

/**
 * @public
 * @enum
 */
export const ScanType = {
  CODE: "CODE",
  NETWORK: "NETWORK",
  PACKAGE: "PACKAGE",
} as const;
/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 * @enum
 */
export const FilterAction = {
  NONE: "NONE",
  SUPPRESS: "SUPPRESS",
} as const;
/**
 * @public
 */
export type FilterAction = (typeof FilterAction)[keyof typeof FilterAction];

/**
 * @public
 * @enum
 */
export const ReportFormat = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type ReportFormat = (typeof ReportFormat)[keyof typeof ReportFormat];

/**
 * @public
 * @enum
 */
export const SbomReportFormat = {
  CYCLONEDX_1_4: "CYCLONEDX_1_4",
  SPDX_2_3: "SPDX_2_3",
} as const;
/**
 * @public
 */
export type SbomReportFormat = (typeof SbomReportFormat)[keyof typeof SbomReportFormat];

/**
 * @public
 * @enum
 */
export const ResourceStringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type ResourceStringComparison = (typeof ResourceStringComparison)[keyof typeof ResourceStringComparison];

/**
 * @public
 * @enum
 */
export const ResourceMapComparison = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type ResourceMapComparison = (typeof ResourceMapComparison)[keyof typeof ResourceMapComparison];

/**
 * @public
 * @enum
 */
export const Currency = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

/**
 * @public
 * @enum
 */
export const RelationshipStatus = {
  ACCOUNT_SUSPENDED: "ACCOUNT_SUSPENDED",
  CANNOT_CREATE_DETECTOR_IN_ORG_MASTER: "CANNOT_CREATE_DETECTOR_IN_ORG_MASTER",
  CREATED: "CREATED",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  EMAIL_VERIFICATION_FAILED: "EMAIL_VERIFICATION_FAILED",
  EMAIL_VERIFICATION_IN_PROGRESS: "EMAIL_VERIFICATION_IN_PROGRESS",
  ENABLED: "ENABLED",
  INVITED: "INVITED",
  REGION_DISABLED: "REGION_DISABLED",
  REMOVED: "REMOVED",
  RESIGNED: "RESIGNED",
} as const;
/**
 * @public
 */
export type RelationshipStatus = (typeof RelationshipStatus)[keyof typeof RelationshipStatus];

/**
 * @public
 * @enum
 */
export const DelegatedAdminStatus = {
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DelegatedAdminStatus = (typeof DelegatedAdminStatus)[keyof typeof DelegatedAdminStatus];

/**
 * @public
 * @enum
 */
export const ResourceScanType = {
  CODE_REPOSITORY: "CODE_REPOSITORY",
  EC2: "EC2",
  ECR: "ECR",
  LAMBDA: "LAMBDA",
  LAMBDA_CODE: "LAMBDA_CODE",
} as const;
/**
 * @public
 */
export type ResourceScanType = (typeof ResourceScanType)[keyof typeof ResourceScanType];

/**
 * @public
 * @enum
 */
export const Ec2ScanMode = {
  EC2_HYBRID: "EC2_HYBRID",
  EC2_SSM_AGENT_BASED: "EC2_SSM_AGENT_BASED",
} as const;
/**
 * @public
 */
export type Ec2ScanMode = (typeof Ec2ScanMode)[keyof typeof Ec2ScanMode];

/**
 * @public
 * @enum
 */
export const Ec2ScanModeStatus = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type Ec2ScanModeStatus = (typeof Ec2ScanModeStatus)[keyof typeof Ec2ScanModeStatus];

/**
 * @public
 * @enum
 */
export const EcrPullDateRescanDuration = {
  DAYS_14: "DAYS_14",
  DAYS_180: "DAYS_180",
  DAYS_30: "DAYS_30",
  DAYS_60: "DAYS_60",
  DAYS_90: "DAYS_90",
} as const;
/**
 * @public
 */
export type EcrPullDateRescanDuration = (typeof EcrPullDateRescanDuration)[keyof typeof EcrPullDateRescanDuration];

/**
 * @public
 * @enum
 */
export const EcrPullDateRescanMode = {
  LAST_IN_USE_AT: "LAST_IN_USE_AT",
  LAST_PULL_DATE: "LAST_PULL_DATE",
} as const;
/**
 * @public
 */
export type EcrPullDateRescanMode = (typeof EcrPullDateRescanMode)[keyof typeof EcrPullDateRescanMode];

/**
 * @public
 * @enum
 */
export const EcrRescanDuration = {
  DAYS_14: "DAYS_14",
  DAYS_180: "DAYS_180",
  DAYS_30: "DAYS_30",
  DAYS_60: "DAYS_60",
  DAYS_90: "DAYS_90",
  LIFETIME: "LIFETIME",
} as const;
/**
 * @public
 */
export type EcrRescanDuration = (typeof EcrRescanDuration)[keyof typeof EcrRescanDuration];

/**
 * @public
 * @enum
 */
export const EcrRescanDurationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type EcrRescanDurationStatus = (typeof EcrRescanDurationStatus)[keyof typeof EcrRescanDurationStatus];

/**
 * @public
 * @enum
 */
export const ExploitAvailable = {
  NO: "NO",
  YES: "YES",
} as const;
/**
 * @public
 */
export type ExploitAvailable = (typeof ExploitAvailable)[keyof typeof ExploitAvailable];

/**
 * @public
 * @enum
 */
export const ExternalReportStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ExternalReportStatus = (typeof ExternalReportStatus)[keyof typeof ExternalReportStatus];

/**
 * @public
 * @enum
 */
export const FixAvailable = {
  NO: "NO",
  PARTIAL: "PARTIAL",
  YES: "YES",
} as const;
/**
 * @public
 */
export type FixAvailable = (typeof FixAvailable)[keyof typeof FixAvailable];

/**
 * @public
 * @enum
 */
export const NetworkProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type NetworkProtocol = (typeof NetworkProtocol)[keyof typeof NetworkProtocol];

/**
 * @public
 * @enum
 */
export const PackageManager = {
  BUNDLER: "BUNDLER",
  CARGO: "CARGO",
  COMPOSER: "COMPOSER",
  DOTNET_CORE: "DOTNET_CORE",
  GEMSPEC: "GEMSPEC",
  GOBINARY: "GOBINARY",
  GOMOD: "GOMOD",
  JAR: "JAR",
  NODEPKG: "NODEPKG",
  NPM: "NPM",
  NUGET: "NUGET",
  OS: "OS",
  PIP: "PIP",
  PIPENV: "PIPENV",
  POETRY: "POETRY",
  POM: "POM",
  PYTHONPKG: "PYTHONPKG",
  YARN: "YARN",
} as const;
/**
 * @public
 */
export type PackageManager = (typeof PackageManager)[keyof typeof PackageManager];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE: "AWS_ECR_CONTAINER_IMAGE",
  AWS_ECR_REPOSITORY: "AWS_ECR_REPOSITORY",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNTRIAGED: "UNTRIAGED",
} as const;
/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const FindingStatus = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  SUPPRESSED: "SUPPRESSED",
} as const;
/**
 * @public
 */
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];

/**
 * @public
 * @enum
 */
export const FindingType = {
  CODE_VULNERABILITY: "CODE_VULNERABILITY",
  NETWORK_REACHABILITY: "NETWORK_REACHABILITY",
  PACKAGE_VULNERABILITY: "PACKAGE_VULNERABILITY",
} as const;
/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

/**
 * @public
 * @enum
 */
export const ReportingErrorCode = {
  BUCKET_NOT_FOUND: "BUCKET_NOT_FOUND",
  INCOMPATIBLE_BUCKET_REGION: "INCOMPATIBLE_BUCKET_REGION",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_PERMISSIONS: "INVALID_PERMISSIONS",
  MALFORMED_KMS_KEY: "MALFORMED_KMS_KEY",
  NO_FINDINGS_FOUND: "NO_FINDINGS_FOUND",
} as const;
/**
 * @public
 */
export type ReportingErrorCode = (typeof ReportingErrorCode)[keyof typeof ReportingErrorCode];

/**
 * @public
 * @enum
 */
export const Service = {
  EC2: "EC2",
  ECR: "ECR",
  LAMBDA: "LAMBDA",
} as const;
/**
 * @public
 */
export type Service = (typeof Service)[keyof typeof Service];

/**
 * @public
 * @enum
 */
export const Operation = {
  DISABLE_REPOSITORY: "DISABLE_REPOSITORY",
  DISABLE_SCANNING: "DISABLE_SCANNING",
  ENABLE_REPOSITORY: "ENABLE_REPOSITORY",
  ENABLE_SCANNING: "ENABLE_SCANNING",
} as const;
/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * @public
 * @enum
 */
export const ListCisScansDetailLevel = {
  MEMBER: "MEMBER",
  ORGANIZATION: "ORGANIZATION",
} as const;
/**
 * @public
 */
export type ListCisScansDetailLevel = (typeof ListCisScansDetailLevel)[keyof typeof ListCisScansDetailLevel];

/**
 * @public
 * @enum
 */
export const ListCisScansSortBy = {
  FAILED_CHECKS: "FAILED_CHECKS",
  SCAN_START_DATE: "SCAN_START_DATE",
  SCHEDULED_BY: "SCHEDULED_BY",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type ListCisScansSortBy = (typeof ListCisScansSortBy)[keyof typeof ListCisScansSortBy];

/**
 * @public
 * @enum
 */
export const SortField = {
  AWS_ACCOUNT_ID: "AWS_ACCOUNT_ID",
  COMPONENT_TYPE: "COMPONENT_TYPE",
  ECR_IMAGE_PUSHED_AT: "ECR_IMAGE_PUSHED_AT",
  ECR_IMAGE_REGISTRY: "ECR_IMAGE_REGISTRY",
  ECR_IMAGE_REPOSITORY_NAME: "ECR_IMAGE_REPOSITORY_NAME",
  EPSS_SCORE: "EPSS_SCORE",
  FINDING_STATUS: "FINDING_STATUS",
  FINDING_TYPE: "FINDING_TYPE",
  FIRST_OBSERVED_AT: "FIRST_OBSERVED_AT",
  INSPECTOR_SCORE: "INSPECTOR_SCORE",
  LAST_OBSERVED_AT: "LAST_OBSERVED_AT",
  NETWORK_PROTOCOL: "NETWORK_PROTOCOL",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SEVERITY: "SEVERITY",
  VENDOR_SEVERITY: "VENDOR_SEVERITY",
  VULNERABILITY_ID: "VULNERABILITY_ID",
  VULNERABILITY_SOURCE: "VULNERABILITY_SOURCE",
} as const;
/**
 * @public
 */
export type SortField = (typeof SortField)[keyof typeof SortField];

/**
 * @public
 * @enum
 */
export const UsageType = {
  CODE_REPOSITORY_IAC: "CODE_REPOSITORY_IAC",
  CODE_REPOSITORY_SAST: "CODE_REPOSITORY_SAST",
  CODE_REPOSITORY_SCA: "CODE_REPOSITORY_SCA",
  EC2_AGENTLESS_INSTANCE_HOURS: "EC2_AGENTLESS_INSTANCE_HOURS",
  EC2_INSTANCE_HOURS: "EC2_INSTANCE_HOURS",
  ECR_INITIAL_SCAN: "ECR_INITIAL_SCAN",
  ECR_RESCAN: "ECR_RESCAN",
  LAMBDA_FUNCTION_CODE_HOURS: "LAMBDA_FUNCTION_CODE_HOURS",
  LAMBDA_FUNCTION_HOURS: "LAMBDA_FUNCTION_HOURS",
} as const;
/**
 * @public
 */
export type UsageType = (typeof UsageType)[keyof typeof UsageType];

/**
 * @public
 * @enum
 */
export const VulnerabilitySource = {
  NVD: "NVD",
} as const;
/**
 * @public
 */
export type VulnerabilitySource = (typeof VulnerabilitySource)[keyof typeof VulnerabilitySource];

/**
 * @public
 * @enum
 */
export const StopCisSessionStatus = {
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  SUCCESS: "SUCCESS",
  UNSUPPORTED_OS: "UNSUPPORTED_OS",
} as const;
/**
 * @public
 */
export type StopCisSessionStatus = (typeof StopCisSessionStatus)[keyof typeof StopCisSessionStatus];
