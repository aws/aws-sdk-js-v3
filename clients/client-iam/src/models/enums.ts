// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessAdvisorUsageGranularityType = {
  ACTION_LEVEL: "ACTION_LEVEL",
  SERVICE_LEVEL: "SERVICE_LEVEL",
} as const;
/**
 * @public
 */
export type AccessAdvisorUsageGranularityType =
  (typeof AccessAdvisorUsageGranularityType)[keyof typeof AccessAdvisorUsageGranularityType];

/**
 * @public
 * @enum
 */
export const StatusType = {
  Active: "Active",
  Expired: "Expired",
  Inactive: "Inactive",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * @enum
 */
export const AssertionEncryptionModeType = {
  Allowed: "Allowed",
  Required: "Required",
} as const;
/**
 * @public
 */
export type AssertionEncryptionModeType =
  (typeof AssertionEncryptionModeType)[keyof typeof AssertionEncryptionModeType];

/**
 * @public
 * @enum
 */
export const AssignmentStatusType = {
  Any: "Any",
  Assigned: "Assigned",
  Unassigned: "Unassigned",
} as const;
/**
 * @public
 */
export type AssignmentStatusType = (typeof AssignmentStatusType)[keyof typeof AssignmentStatusType];

/**
 * @public
 * @enum
 */
export const PermissionsBoundaryAttachmentType = {
  Policy: "PermissionsBoundaryPolicy",
} as const;
/**
 * @public
 */
export type PermissionsBoundaryAttachmentType =
  (typeof PermissionsBoundaryAttachmentType)[keyof typeof PermissionsBoundaryAttachmentType];

/**
 * @public
 * @enum
 */
export const PolicyParameterTypeEnum = {
  STRING: "string",
  STRING_LIST: "stringList",
} as const;
/**
 * @public
 */
export type PolicyParameterTypeEnum = (typeof PolicyParameterTypeEnum)[keyof typeof PolicyParameterTypeEnum];

/**
 * @public
 * @enum
 */
export const FeatureType = {
  ROOT_CREDENTIALS_MANAGEMENT: "RootCredentialsManagement",
  ROOT_SESSIONS: "RootSessions",
} as const;
/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * @enum
 */
export const ReportStateType = {
  COMPLETE: "COMPLETE",
  INPROGRESS: "INPROGRESS",
  STARTED: "STARTED",
} as const;
/**
 * @public
 */
export type ReportStateType = (typeof ReportStateType)[keyof typeof ReportStateType];

/**
 * @public
 * @enum
 */
export const EntityType = {
  AWSManagedPolicy: "AWSManagedPolicy",
  Group: "Group",
  LocalManagedPolicy: "LocalManagedPolicy",
  Role: "Role",
  User: "User",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const SummaryKeyType = {
  AccessKeysPerUserQuota: "AccessKeysPerUserQuota",
  AccountAccessKeysPresent: "AccountAccessKeysPresent",
  AccountMFAEnabled: "AccountMFAEnabled",
  AccountPasswordPresent: "AccountPasswordPresent",
  AccountSigningCertificatesPresent: "AccountSigningCertificatesPresent",
  AssumeRolePolicySizeQuota: "AssumeRolePolicySizeQuota",
  AttachedPoliciesPerGroupQuota: "AttachedPoliciesPerGroupQuota",
  AttachedPoliciesPerRoleQuota: "AttachedPoliciesPerRoleQuota",
  AttachedPoliciesPerUserQuota: "AttachedPoliciesPerUserQuota",
  GlobalEndpointTokenVersion: "GlobalEndpointTokenVersion",
  GroupPolicySizeQuota: "GroupPolicySizeQuota",
  Groups: "Groups",
  GroupsPerUserQuota: "GroupsPerUserQuota",
  GroupsQuota: "GroupsQuota",
  InstanceProfiles: "InstanceProfiles",
  InstanceProfilesQuota: "InstanceProfilesQuota",
  MFADevices: "MFADevices",
  MFADevicesInUse: "MFADevicesInUse",
  Policies: "Policies",
  PoliciesQuota: "PoliciesQuota",
  PolicySizeQuota: "PolicySizeQuota",
  PolicyVersionsInUse: "PolicyVersionsInUse",
  PolicyVersionsInUseQuota: "PolicyVersionsInUseQuota",
  Providers: "Providers",
  RolePolicySizeQuota: "RolePolicySizeQuota",
  Roles: "Roles",
  RolesQuota: "RolesQuota",
  ServerCertificates: "ServerCertificates",
  ServerCertificatesQuota: "ServerCertificatesQuota",
  SigningCertificatesPerUserQuota: "SigningCertificatesPerUserQuota",
  UserPolicySizeQuota: "UserPolicySizeQuota",
  Users: "Users",
  UsersQuota: "UsersQuota",
  VersionsPerPolicyQuota: "VersionsPerPolicyQuota",
} as const;
/**
 * @public
 */
export type SummaryKeyType = (typeof SummaryKeyType)[keyof typeof SummaryKeyType];

/**
 * @public
 * @enum
 */
export const ReportFormatType = {
  text_csv: "text/csv",
} as const;
/**
 * @public
 */
export type ReportFormatType = (typeof ReportFormatType)[keyof typeof ReportFormatType];

/**
 * @public
 * @enum
 */
export const StateType = {
  ACCEPTED: "ACCEPTED",
  ASSIGNED: "ASSIGNED",
  EXPIRED: "EXPIRED",
  FINALIZED: "FINALIZED",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  REJECTED: "REJECTED",
  UNASSIGNED: "UNASSIGNED",
} as const;
/**
 * @public
 */
export type StateType = (typeof StateType)[keyof typeof StateType];

/**
 * @public
 * @enum
 */
export const PermissionCheckResultType = {
  ALLOWED: "ALLOWED",
  DENIED: "DENIED",
  UNSURE: "UNSURE",
} as const;
/**
 * @public
 */
export type PermissionCheckResultType = (typeof PermissionCheckResultType)[keyof typeof PermissionCheckResultType];

/**
 * @public
 * @enum
 */
export const PermissionCheckStatusType = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PermissionCheckStatusType = (typeof PermissionCheckStatusType)[keyof typeof PermissionCheckStatusType];

/**
 * @public
 * @enum
 */
export const SummaryStateType = {
  AVAILABLE: "AVAILABLE",
  FAILED: "FAILED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  NOT_SUPPORTED: "NOT_SUPPORTED",
} as const;
/**
 * @public
 */
export type SummaryStateType = (typeof SummaryStateType)[keyof typeof SummaryStateType];

/**
 * @public
 * @enum
 */
export const SortKeyType = {
  LAST_AUTHENTICATED_TIME_ASCENDING: "LAST_AUTHENTICATED_TIME_ASCENDING",
  LAST_AUTHENTICATED_TIME_DESCENDING: "LAST_AUTHENTICATED_TIME_DESCENDING",
  SERVICE_NAMESPACE_ASCENDING: "SERVICE_NAMESPACE_ASCENDING",
  SERVICE_NAMESPACE_DESCENDING: "SERVICE_NAMESPACE_DESCENDING",
} as const;
/**
 * @public
 */
export type SortKeyType = (typeof SortKeyType)[keyof typeof SortKeyType];

/**
 * @public
 * @enum
 */
export const JobStatusType = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type JobStatusType = (typeof JobStatusType)[keyof typeof JobStatusType];

/**
 * @public
 * @enum
 */
export const PolicyOwnerEntityType = {
  GROUP: "GROUP",
  ROLE: "ROLE",
  USER: "USER",
} as const;
/**
 * @public
 */
export type PolicyOwnerEntityType = (typeof PolicyOwnerEntityType)[keyof typeof PolicyOwnerEntityType];

/**
 * @public
 * @enum
 */
export const DeletionTaskStatusType = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DeletionTaskStatusType = (typeof DeletionTaskStatusType)[keyof typeof DeletionTaskStatusType];

/**
 * @public
 * @enum
 */
export const EncodingType = {
  PEM: "PEM",
  SSH: "SSH",
} as const;
/**
 * @public
 */
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];

/**
 * @public
 * @enum
 */
export const PolicyUsageType = {
  PermissionsBoundary: "PermissionsBoundary",
  PermissionsPolicy: "PermissionsPolicy",
} as const;
/**
 * @public
 */
export type PolicyUsageType = (typeof PolicyUsageType)[keyof typeof PolicyUsageType];

/**
 * @public
 * @enum
 */
export const PolicyScopeType = {
  AWS: "AWS",
  All: "All",
  Local: "Local",
} as const;
/**
 * @public
 */
export type PolicyScopeType = (typeof PolicyScopeType)[keyof typeof PolicyScopeType];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  INLINE: "INLINE",
  MANAGED: "MANAGED",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const GlobalEndpointTokenVersion = {
  v1Token: "v1Token",
  v2Token: "v2Token",
} as const;
/**
 * @public
 */
export type GlobalEndpointTokenVersion = (typeof GlobalEndpointTokenVersion)[keyof typeof GlobalEndpointTokenVersion];

/**
 * @public
 * @enum
 */
export const ContextKeyTypeEnum = {
  BINARY: "binary",
  BINARY_LIST: "binaryList",
  BOOLEAN: "boolean",
  BOOLEAN_LIST: "booleanList",
  DATE: "date",
  DATE_LIST: "dateList",
  IP: "ip",
  IP_LIST: "ipList",
  NUMERIC: "numeric",
  NUMERIC_LIST: "numericList",
  STRING: "string",
  STRING_LIST: "stringList",
} as const;
/**
 * @public
 */
export type ContextKeyTypeEnum = (typeof ContextKeyTypeEnum)[keyof typeof ContextKeyTypeEnum];

/**
 * @public
 * @enum
 */
export const PolicyEvaluationDecisionType = {
  ALLOWED: "allowed",
  EXPLICIT_DENY: "explicitDeny",
  IMPLICIT_DENY: "implicitDeny",
} as const;
/**
 * @public
 */
export type PolicyEvaluationDecisionType =
  (typeof PolicyEvaluationDecisionType)[keyof typeof PolicyEvaluationDecisionType];

/**
 * @public
 * @enum
 */
export const PolicySourceType = {
  AWS_MANAGED: "aws-managed",
  GROUP: "group",
  NONE: "none",
  RESOURCE: "resource",
  ROLE: "role",
  USER: "user",
  USER_MANAGED: "user-managed",
} as const;
/**
 * @public
 */
export type PolicySourceType = (typeof PolicySourceType)[keyof typeof PolicySourceType];
