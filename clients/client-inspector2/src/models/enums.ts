// smithy-typescript generated code
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
