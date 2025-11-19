// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const IntegrationStatusInput = {
  NOT_CONFIGURED: "NOT_CONFIGURED",
} as const;
/**
 * @public
 */
export type IntegrationStatusInput = (typeof IntegrationStatusInput)[keyof typeof IntegrationStatusInput];

/**
 * @public
 * @enum
 */
export const AccountJiraIssueManagementStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AccountJiraIssueManagementStatus =
  (typeof AccountJiraIssueManagementStatus)[keyof typeof AccountJiraIssueManagementStatus];

/**
 * @public
 * @enum
 */
export const IssueManagementType = {
  AUTO: "AUTO",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type IssueManagementType = (typeof IssueManagementType)[keyof typeof IssueManagementType];

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  CONFIGURED: "CONFIGURED",
  NOT_CONFIGURED: "NOT_CONFIGURED",
} as const;
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const CheckStatus = {
  ERROR: "ERROR",
  FETCH_FAILED: "FETCH_FAILED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  OKAY: "OKAY",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type CheckStatus = (typeof CheckStatus)[keyof typeof CheckStatus];

/**
 * @public
 * @enum
 */
export const AdditionalResourceType = {
  HELPFUL_RESOURCE: "HELPFUL_RESOURCE",
  IMPROVEMENT_PLAN: "IMPROVEMENT_PLAN",
} as const;
/**
 * @public
 */
export type AdditionalResourceType = (typeof AdditionalResourceType)[keyof typeof AdditionalResourceType];

/**
 * @public
 * @enum
 */
export const ChoiceReason = {
  ARCHITECTURE_CONSTRAINTS: "ARCHITECTURE_CONSTRAINTS",
  BUSINESS_PRIORITIES: "BUSINESS_PRIORITIES",
  NONE: "NONE",
  OTHER: "OTHER",
  OUT_OF_SCOPE: "OUT_OF_SCOPE",
} as const;
/**
 * @public
 */
export type ChoiceReason = (typeof ChoiceReason)[keyof typeof ChoiceReason];

/**
 * @public
 * @enum
 */
export const ChoiceStatus = {
  NOT_APPLICABLE: "NOT_APPLICABLE",
  SELECTED: "SELECTED",
  UNSELECTED: "UNSELECTED",
} as const;
/**
 * @public
 */
export type ChoiceStatus = (typeof ChoiceStatus)[keyof typeof ChoiceStatus];

/**
 * @public
 * @enum
 */
export const AnswerReason = {
  ARCHITECTURE_CONSTRAINTS: "ARCHITECTURE_CONSTRAINTS",
  BUSINESS_PRIORITIES: "BUSINESS_PRIORITIES",
  NONE: "NONE",
  OTHER: "OTHER",
  OUT_OF_SCOPE: "OUT_OF_SCOPE",
} as const;
/**
 * @public
 */
export type AnswerReason = (typeof AnswerReason)[keyof typeof AnswerReason];

/**
 * @public
 * @enum
 */
export const Risk = {
  HIGH: "HIGH",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  UNANSWERED: "UNANSWERED",
} as const;
/**
 * @public
 */
export type Risk = (typeof Risk)[keyof typeof Risk];

/**
 * @public
 * @enum
 */
export const QuestionType = {
  NON_PRIORITIZED: "NON_PRIORITIZED",
  PRIORITIZED: "PRIORITIZED",
} as const;
/**
 * @public
 */
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
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
export const CheckProvider = {
  TRUSTED_ADVISOR: "TRUSTED_ADVISOR",
} as const;
/**
 * @public
 */
export type CheckProvider = (typeof CheckProvider)[keyof typeof CheckProvider];

/**
 * @public
 * @enum
 */
export const CheckFailureReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ASSUME_ROLE_ERROR: "ASSUME_ROLE_ERROR",
  PREMIUM_SUPPORT_REQUIRED: "PREMIUM_SUPPORT_REQUIRED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;
/**
 * @public
 */
export type CheckFailureReason = (typeof CheckFailureReason)[keyof typeof CheckFailureReason];

/**
 * @public
 * @enum
 */
export const MetricType = {
  WORKLOAD: "WORKLOAD",
} as const;
/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * @public
 * @enum
 */
export const TrustedAdvisorIntegrationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TrustedAdvisorIntegrationStatus =
  (typeof TrustedAdvisorIntegrationStatus)[keyof typeof TrustedAdvisorIntegrationStatus];

/**
 * @public
 * @enum
 */
export const DefinitionType = {
  APP_REGISTRY: "APP_REGISTRY",
  WORKLOAD_METADATA: "WORKLOAD_METADATA",
} as const;
/**
 * @public
 */
export type DefinitionType = (typeof DefinitionType)[keyof typeof DefinitionType];

/**
 * @public
 * @enum
 */
export const WorkloadEnvironment = {
  PREPRODUCTION: "PREPRODUCTION",
  PRODUCTION: "PRODUCTION",
} as const;
/**
 * @public
 */
export type WorkloadEnvironment = (typeof WorkloadEnvironment)[keyof typeof WorkloadEnvironment];

/**
 * @public
 * @enum
 */
export const WorkloadIssueManagementStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  INHERIT: "INHERIT",
} as const;
/**
 * @public
 */
export type WorkloadIssueManagementStatus =
  (typeof WorkloadIssueManagementStatus)[keyof typeof WorkloadIssueManagementStatus];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  CONTRIBUTOR: "CONTRIBUTOR",
  READONLY: "READONLY",
} as const;
/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 * @enum
 */
export const LensStatusType = {
  ALL: "ALL",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type LensStatusType = (typeof LensStatusType)[keyof typeof LensStatusType];

/**
 * @public
 * @enum
 */
export const DifferenceStatus = {
  DELETED: "DELETED",
  NEW: "NEW",
  UPDATED: "UPDATED",
} as const;
/**
 * @public
 */
export type DifferenceStatus = (typeof DifferenceStatus)[keyof typeof DifferenceStatus];

/**
 * @public
 * @enum
 */
export const DiscoveryIntegrationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DiscoveryIntegrationStatus = (typeof DiscoveryIntegrationStatus)[keyof typeof DiscoveryIntegrationStatus];

/**
 * @public
 * @enum
 */
export const ReportFormat = {
  JSON: "JSON",
  PDF: "PDF",
} as const;
/**
 * @public
 */
export type ReportFormat = (typeof ReportFormat)[keyof typeof ReportFormat];

/**
 * @public
 * @enum
 */
export const OrganizationSharingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OrganizationSharingStatus = (typeof OrganizationSharingStatus)[keyof typeof OrganizationSharingStatus];

/**
 * @public
 * @enum
 */
export const LensStatus = {
  CURRENT: "CURRENT",
  DELETED: "DELETED",
  DEPRECATED: "DEPRECATED",
  NOT_CURRENT: "NOT_CURRENT",
  UNSHARED: "UNSHARED",
} as const;
/**
 * @public
 */
export type LensStatus = (typeof LensStatus)[keyof typeof LensStatus];

/**
 * @public
 * @enum
 */
export const WorkloadImprovementStatus = {
  COMPLETE: "COMPLETE",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  NOT_STARTED: "NOT_STARTED",
  RISK_ACKNOWLEDGED: "RISK_ACKNOWLEDGED",
} as const;
/**
 * @public
 */
export type WorkloadImprovementStatus = (typeof WorkloadImprovementStatus)[keyof typeof WorkloadImprovementStatus];

/**
 * @public
 * @enum
 */
export const Question = {
  ANSWERED: "ANSWERED",
  UNANSWERED: "UNANSWERED",
} as const;
/**
 * @public
 */
export type Question = (typeof Question)[keyof typeof Question];

/**
 * @public
 * @enum
 */
export const ReviewTemplateUpdateStatus = {
  CURRENT: "CURRENT",
  LENS_NOT_CURRENT: "LENS_NOT_CURRENT",
} as const;
/**
 * @public
 */
export type ReviewTemplateUpdateStatus = (typeof ReviewTemplateUpdateStatus)[keyof typeof ReviewTemplateUpdateStatus];

/**
 * @public
 * @enum
 */
export const ReviewTemplateAnswerStatus = {
  ANSWERED: "ANSWERED",
  UNANSWERED: "UNANSWERED",
} as const;
/**
 * @public
 */
export type ReviewTemplateAnswerStatus = (typeof ReviewTemplateAnswerStatus)[keyof typeof ReviewTemplateAnswerStatus];

/**
 * @public
 * @enum
 */
export const ImportLensStatus = {
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ImportLensStatus = (typeof ImportLensStatus)[keyof typeof ImportLensStatus];

/**
 * @public
 * @enum
 */
export const IntegratingService = {
  JIRA: "JIRA",
} as const;
/**
 * @public
 */
export type IntegratingService = (typeof IntegratingService)[keyof typeof IntegratingService];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  ACCEPTED: "ACCEPTED",
  ASSOCIATED: "ASSOCIATED",
  ASSOCIATING: "ASSOCIATING",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  REVOKED: "REVOKED",
} as const;
/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * @enum
 */
export const LensType = {
  AWS_OFFICIAL: "AWS_OFFICIAL",
  CUSTOM_SELF: "CUSTOM_SELF",
  CUSTOM_SHARED: "CUSTOM_SHARED",
} as const;
/**
 * @public
 */
export type LensType = (typeof LensType)[keyof typeof LensType];

/**
 * @public
 * @enum
 */
export const QuestionPriority = {
  NONE: "NONE",
  PRIORITIZED: "PRIORITIZED",
} as const;
/**
 * @public
 */
export type QuestionPriority = (typeof QuestionPriority)[keyof typeof QuestionPriority];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  LENS_VERSION_DEPRECATED: "LENS_VERSION_DEPRECATED",
  LENS_VERSION_UPGRADED: "LENS_VERSION_UPGRADED",
} as const;
/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 * @enum
 */
export const ProfileNotificationType = {
  PROFILE_ANSWERS_UPDATED: "PROFILE_ANSWERS_UPDATED",
  PROFILE_DELETED: "PROFILE_DELETED",
} as const;
/**
 * @public
 */
export type ProfileNotificationType = (typeof ProfileNotificationType)[keyof typeof ProfileNotificationType];

/**
 * @public
 * @enum
 */
export const ProfileOwnerType = {
  SELF: "SELF",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type ProfileOwnerType = (typeof ProfileOwnerType)[keyof typeof ProfileOwnerType];

/**
 * @public
 * @enum
 */
export const ShareResourceType = {
  LENS: "LENS",
  PROFILE: "PROFILE",
  TEMPLATE: "TEMPLATE",
  WORKLOAD: "WORKLOAD",
} as const;
/**
 * @public
 */
export type ShareResourceType = (typeof ShareResourceType)[keyof typeof ShareResourceType];

/**
 * @public
 * @enum
 */
export const ShareInvitationAction = {
  ACCEPT: "ACCEPT",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type ShareInvitationAction = (typeof ShareInvitationAction)[keyof typeof ShareInvitationAction];
