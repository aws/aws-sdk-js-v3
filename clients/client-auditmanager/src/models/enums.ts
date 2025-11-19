// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
} as const;
/**
 * @public
 */
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/**
 * @public
 * @enum
 */
export const ActionEnum = {
  ACTIVE: "ACTIVE",
  CREATE: "CREATE",
  DELETE: "DELETE",
  IMPORT_EVIDENCE: "IMPORT_EVIDENCE",
  INACTIVE: "INACTIVE",
  REVIEWED: "REVIEWED",
  UNDER_REVIEW: "UNDER_REVIEW",
  UPDATE_METADATA: "UPDATE_METADATA",
} as const;
/**
 * @public
 */
export type ActionEnum = (typeof ActionEnum)[keyof typeof ActionEnum];

/**
 * @public
 * @enum
 */
export const ControlResponse = {
  AUTOMATE: "AUTOMATE",
  DEFER: "DEFER",
  IGNORE: "IGNORE",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type ControlResponse = (typeof ControlResponse)[keyof typeof ControlResponse];

/**
 * @public
 * @enum
 */
export const ControlStatus = {
  INACTIVE: "INACTIVE",
  REVIEWED: "REVIEWED",
  UNDER_REVIEW: "UNDER_REVIEW",
} as const;
/**
 * @public
 */
export type ControlStatus = (typeof ControlStatus)[keyof typeof ControlStatus];

/**
 * @public
 * @enum
 */
export const RoleType = {
  PROCESS_OWNER: "PROCESS_OWNER",
  RESOURCE_OWNER: "RESOURCE_OWNER",
} as const;
/**
 * @public
 */
export type RoleType = (typeof RoleType)[keyof typeof RoleType];

/**
 * @public
 * @enum
 */
export const DelegationStatus = {
  COMPLETE: "COMPLETE",
  IN_PROGRESS: "IN_PROGRESS",
  UNDER_REVIEW: "UNDER_REVIEW",
} as const;
/**
 * @public
 */
export type DelegationStatus = (typeof DelegationStatus)[keyof typeof DelegationStatus];

/**
 * @public
 * @enum
 */
export const ControlSetStatus = {
  ACTIVE: "ACTIVE",
  REVIEWED: "REVIEWED",
  UNDER_REVIEW: "UNDER_REVIEW",
} as const;
/**
 * @public
 */
export type ControlSetStatus = (typeof ControlSetStatus)[keyof typeof ControlSetStatus];

/**
 * @public
 * @enum
 */
export const AssessmentReportDestinationType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type AssessmentReportDestinationType =
  (typeof AssessmentReportDestinationType)[keyof typeof AssessmentReportDestinationType];

/**
 * @public
 * @enum
 */
export const AssessmentStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AssessmentStatus = (typeof AssessmentStatus)[keyof typeof AssessmentStatus];

/**
 * @public
 * @enum
 */
export const FrameworkType = {
  CUSTOM: "Custom",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type FrameworkType = (typeof FrameworkType)[keyof typeof FrameworkType];

/**
 * @public
 * @enum
 */
export const ShareRequestStatus = {
  ACTIVE: "ACTIVE",
  DECLINED: "DECLINED",
  EXPIRED: "EXPIRED",
  EXPIRING: "EXPIRING",
  FAILED: "FAILED",
  REPLICATING: "REPLICATING",
  REVOKED: "REVOKED",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type ShareRequestStatus = (typeof ShareRequestStatus)[keyof typeof ShareRequestStatus];

/**
 * @public
 * @enum
 */
export const AssessmentReportStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type AssessmentReportStatus = (typeof AssessmentReportStatus)[keyof typeof AssessmentReportStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const SourceFrequency = {
  DAILY: "DAILY",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;
/**
 * @public
 */
export type SourceFrequency = (typeof SourceFrequency)[keyof typeof SourceFrequency];

/**
 * @public
 * @enum
 */
export const KeywordInputType = {
  INPUT_TEXT: "INPUT_TEXT",
  SELECT_FROM_LIST: "SELECT_FROM_LIST",
  UPLOAD_FILE: "UPLOAD_FILE",
} as const;
/**
 * @public
 */
export type KeywordInputType = (typeof KeywordInputType)[keyof typeof KeywordInputType];

/**
 * @public
 * @enum
 */
export const SourceSetUpOption = {
  PROCEDURAL_CONTROLS_MAPPING: "Procedural_Controls_Mapping",
  SYSTEM_CONTROLS_MAPPING: "System_Controls_Mapping",
} as const;
/**
 * @public
 */
export type SourceSetUpOption = (typeof SourceSetUpOption)[keyof typeof SourceSetUpOption];

/**
 * @public
 * @enum
 */
export const SourceType = {
  AWS_API_CALL: "AWS_API_Call",
  AWS_CLOUDTRAIL: "AWS_Cloudtrail",
  AWS_CONFIG: "AWS_Config",
  AWS_SECURITY_HUB: "AWS_Security_Hub",
  COMMON_CONTROL: "Common_Control",
  CORE_CONTROL: "Core_Control",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const ControlState = {
  ACTIVE: "ACTIVE",
  END_OF_SUPPORT: "END_OF_SUPPORT",
} as const;
/**
 * @public
 */
export type ControlState = (typeof ControlState)[keyof typeof ControlState];

/**
 * @public
 * @enum
 */
export const ControlType = {
  CORE: "Core",
  CUSTOM: "Custom",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type ControlType = (typeof ControlType)[keyof typeof ControlType];

/**
 * @public
 * @enum
 */
export const ShareRequestType = {
  RECEIVED: "RECEIVED",
  SENT: "SENT",
} as const;
/**
 * @public
 */
export type ShareRequestType = (typeof ShareRequestType)[keyof typeof ShareRequestType];

/**
 * @public
 * @enum
 */
export const ObjectTypeEnum = {
  ASSESSMENT: "ASSESSMENT",
  ASSESSMENT_REPORT: "ASSESSMENT_REPORT",
  CONTROL: "CONTROL",
  CONTROL_SET: "CONTROL_SET",
  DELEGATION: "DELEGATION",
} as const;
/**
 * @public
 */
export type ObjectTypeEnum = (typeof ObjectTypeEnum)[keyof typeof ObjectTypeEnum];

/**
 * @public
 * @enum
 */
export const SettingAttribute = {
  ALL: "ALL",
  DEFAULT_ASSESSMENT_REPORTS_DESTINATION: "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
  DEFAULT_EXPORT_DESTINATION: "DEFAULT_EXPORT_DESTINATION",
  DEFAULT_PROCESS_OWNERS: "DEFAULT_PROCESS_OWNERS",
  DEREGISTRATION_POLICY: "DEREGISTRATION_POLICY",
  EVIDENCE_FINDER_ENABLEMENT: "EVIDENCE_FINDER_ENABLEMENT",
  IS_AWS_ORG_ENABLED: "IS_AWS_ORG_ENABLED",
  SNS_TOPIC: "SNS_TOPIC",
} as const;
/**
 * @public
 */
export type SettingAttribute = (typeof SettingAttribute)[keyof typeof SettingAttribute];

/**
 * @public
 * @enum
 */
export const ExportDestinationType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type ExportDestinationType = (typeof ExportDestinationType)[keyof typeof ExportDestinationType];

/**
 * @public
 * @enum
 */
export const DeleteResources = {
  ALL: "ALL",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type DeleteResources = (typeof DeleteResources)[keyof typeof DeleteResources];

/**
 * @public
 * @enum
 */
export const EvidenceFinderBackfillStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type EvidenceFinderBackfillStatus =
  (typeof EvidenceFinderBackfillStatus)[keyof typeof EvidenceFinderBackfillStatus];

/**
 * @public
 * @enum
 */
export const EvidenceFinderEnablementStatus = {
  DISABLED: "DISABLED",
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
  ENABLE_IN_PROGRESS: "ENABLE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type EvidenceFinderEnablementStatus =
  (typeof EvidenceFinderEnablementStatus)[keyof typeof EvidenceFinderEnablementStatus];

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  AWS_API_CALL: "AWS_API_Call",
  AWS_CLOUDTRAIL: "AWS_Cloudtrail",
  AWS_CONFIG: "AWS_Config",
  AWS_SECURITY_HUB: "AWS_Security_Hub",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 * @enum
 */
export const ShareRequestAction = {
  ACCEPT: "ACCEPT",
  DECLINE: "DECLINE",
  REVOKE: "REVOKE",
} as const;
/**
 * @public
 */
export type ShareRequestAction = (typeof ShareRequestAction)[keyof typeof ShareRequestAction];
