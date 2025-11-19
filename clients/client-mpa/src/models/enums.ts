// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionCompletionStrategy = {
  AUTO_COMPLETION_UPON_APPROVAL: "AUTO_COMPLETION_UPON_APPROVAL",
} as const;
/**
 * @public
 */
export type ActionCompletionStrategy = (typeof ActionCompletionStrategy)[keyof typeof ActionCompletionStrategy];

/**
 * @public
 * @enum
 */
export const IdentityStatus = {
  ACCEPTED: "ACCEPTED",
  INVALID: "INVALID",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type IdentityStatus = (typeof IdentityStatus)[keyof typeof IdentityStatus];

/**
 * @public
 * @enum
 */
export const ApprovalTeamStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ApprovalTeamStatus = (typeof ApprovalTeamStatus)[keyof typeof ApprovalTeamStatus];

/**
 * @public
 * @enum
 */
export const ApprovalTeamStatusCode = {
  DELETE_FAILED_APPROVAL: "DELETE_FAILED_APPROVAL",
  DELETE_FAILED_VALIDATION: "DELETE_FAILED_VALIDATION",
  DELETE_PENDING_APPROVAL: "DELETE_PENDING_APPROVAL",
  FAILED_ACTIVATION: "FAILED_ACTIVATION",
  FAILED_VALIDATION: "FAILED_VALIDATION",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
  UPDATE_FAILED_ACTIVATION: "UPDATE_FAILED_ACTIVATION",
  UPDATE_FAILED_APPROVAL: "UPDATE_FAILED_APPROVAL",
  UPDATE_FAILED_VALIDATION: "UPDATE_FAILED_VALIDATION",
  UPDATE_PENDING_ACTIVATION: "UPDATE_PENDING_ACTIVATION",
  UPDATE_PENDING_APPROVAL: "UPDATE_PENDING_APPROVAL",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type ApprovalTeamStatusCode = (typeof ApprovalTeamStatusCode)[keyof typeof ApprovalTeamStatusCode];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  AWS_MANAGED: "AWS_MANAGED",
  AWS_RAM: "AWS_RAM",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const PolicyStatus = {
  ATTACHABLE: "ATTACHABLE",
  DEPRECATED: "DEPRECATED",
} as const;
/**
 * @public
 */
export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

/**
 * @public
 * @enum
 */
export const IdentitySourceType = {
  IAM_IDENTITY_CENTER: "IAM_IDENTITY_CENTER",
} as const;
/**
 * @public
 */
export type IdentitySourceType = (typeof IdentitySourceType)[keyof typeof IdentitySourceType];

/**
 * @public
 * @enum
 */
export const IdentitySourceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
} as const;
/**
 * @public
 */
export type IdentitySourceStatus = (typeof IdentitySourceStatus)[keyof typeof IdentitySourceStatus];

/**
 * @public
 * @enum
 */
export const IdentitySourceStatusCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  DELETION_FAILED: "DELETION_FAILED",
  IDC_INSTANCE_NOT_FOUND: "IDC_INSTANCE_NOT_FOUND",
  IDC_INSTANCE_NOT_VALID: "IDC_INSTANCE_NOT_VALID",
} as const;
/**
 * @public
 */
export type IdentitySourceStatusCode = (typeof IdentitySourceStatusCode)[keyof typeof IdentitySourceStatusCode];

/**
 * @public
 * @enum
 */
export const SessionResponse = {
  APPROVED: "APPROVED",
  NO_RESPONSE: "NO_RESPONSE",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type SessionResponse = (typeof SessionResponse)[keyof typeof SessionResponse];

/**
 * @public
 * @enum
 */
export const SessionExecutionStatus = {
  EXECUTED: "EXECUTED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SessionExecutionStatus = (typeof SessionExecutionStatus)[keyof typeof SessionExecutionStatus];

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  CREATING: "CREATING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 * @enum
 */
export const SessionStatusCode = {
  CONFIGURATION_CHANGED: "CONFIGURATION_CHANGED",
  EXPIRED: "EXPIRED",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type SessionStatusCode = (typeof SessionStatusCode)[keyof typeof SessionStatusCode];

/**
 * @public
 * @enum
 */
export const FilterField = {
  ACTION_NAME: "ActionName",
  APPROVAL_TEAM_NAME: "ApprovalTeamName",
  INITIATION_TIME: "InitiationTime",
  SESSION_STATUS: "SessionStatus",
  VOTE: "Vote",
  VOTING_TIME: "VotingTime",
} as const;
/**
 * @public
 */
export type FilterField = (typeof FilterField)[keyof typeof FilterField];

/**
 * @public
 * @enum
 */
export const Operator = {
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  DOES_NOT_CONTAIN: "NOT_CONTAINS",
  EQUALS: "EQ",
  GREATER_THAN: "GT",
  GREATER_THAN_OR_EQUAL_TO: "GTE",
  LESS_THAN: "LT",
  LESS_THAN_OR_EQUAL_TO: "LTE",
  NOT_EQUALS: "NE",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];
