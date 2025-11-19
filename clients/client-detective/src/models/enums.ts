// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ErrorCode = {
  InternalError: "INTERNAL_ERROR",
  InvalidGraphArn: "INVALID_GRAPH_ARN",
  InvalidRequestBody: "INVALID_REQUEST_BODY",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const DatasourcePackage = {
  ASFF_SECURITYHUB_FINDING: "ASFF_SECURITYHUB_FINDING",
  DETECTIVE_CORE: "DETECTIVE_CORE",
  EKS_AUDIT: "EKS_AUDIT",
} as const;
/**
 * @public
 */
export type DatasourcePackage = (typeof DatasourcePackage)[keyof typeof DatasourcePackage];

/**
 * @public
 * @enum
 */
export const DatasourcePackageIngestState = {
  DISABLED: "DISABLED",
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type DatasourcePackageIngestState =
  (typeof DatasourcePackageIngestState)[keyof typeof DatasourcePackageIngestState];

/**
 * @public
 * @enum
 */
export const MemberDisabledReason = {
  VOLUME_TOO_HIGH: "VOLUME_TOO_HIGH",
  VOLUME_UNKNOWN: "VOLUME_UNKNOWN",
} as const;
/**
 * @public
 */
export type MemberDisabledReason = (typeof MemberDisabledReason)[keyof typeof MemberDisabledReason];

/**
 * @public
 * @enum
 */
export const InvitationType = {
  INVITATION: "INVITATION",
  ORGANIZATION: "ORGANIZATION",
} as const;
/**
 * @public
 */
export type InvitationType = (typeof InvitationType)[keyof typeof InvitationType];

/**
 * @public
 * @enum
 */
export const MemberStatus = {
  ACCEPTED_BUT_DISABLED: "ACCEPTED_BUT_DISABLED",
  ENABLED: "ENABLED",
  INVITED: "INVITED",
  VERIFICATION_FAILED: "VERIFICATION_FAILED",
  VERIFICATION_IN_PROGRESS: "VERIFICATION_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

/**
 * @public
 * @enum
 */
export const EntityType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

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
} as const;
/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const IndicatorType = {
  FLAGGED_IP_ADDRESS: "FLAGGED_IP_ADDRESS",
  IMPOSSIBLE_TRAVEL: "IMPOSSIBLE_TRAVEL",
  NEW_ASO: "NEW_ASO",
  NEW_GEOLOCATION: "NEW_GEOLOCATION",
  NEW_USER_AGENT: "NEW_USER_AGENT",
  RELATED_FINDING: "RELATED_FINDING",
  RELATED_FINDING_GROUP: "RELATED_FINDING_GROUP",
  TTP_OBSERVED: "TTP_OBSERVED",
} as const;
/**
 * @public
 */
export type IndicatorType = (typeof IndicatorType)[keyof typeof IndicatorType];

/**
 * @public
 * @enum
 */
export const Reason = {
  AWS_THREAT_INTELLIGENCE: "AWS_THREAT_INTELLIGENCE",
} as const;
/**
 * @public
 */
export type Reason = (typeof Reason)[keyof typeof Reason];

/**
 * @public
 * @enum
 */
export const Field = {
  CREATED_TIME: "CREATED_TIME",
  SEVERITY: "SEVERITY",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type Field = (typeof Field)[keyof typeof Field];

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
