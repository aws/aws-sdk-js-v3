// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApprovalState = {
  APPROVE: "APPROVE",
  REVOKE: "REVOKE",
} as const;
/**
 * @public
 */
export type ApprovalState = (typeof ApprovalState)[keyof typeof ApprovalState];

/**
 * @public
 * @enum
 */
export const OverrideStatus = {
  OVERRIDE: "OVERRIDE",
  REVOKE: "REVOKE",
} as const;
/**
 * @public
 */
export type OverrideStatus = (typeof OverrideStatus)[keyof typeof OverrideStatus];

/**
 * @public
 * @enum
 */
export const ConflictDetailLevelTypeEnum = {
  FILE_LEVEL: "FILE_LEVEL",
  LINE_LEVEL: "LINE_LEVEL",
} as const;
/**
 * @public
 */
export type ConflictDetailLevelTypeEnum =
  (typeof ConflictDetailLevelTypeEnum)[keyof typeof ConflictDetailLevelTypeEnum];

/**
 * @public
 * @enum
 */
export const ConflictResolutionStrategyTypeEnum = {
  ACCEPT_DESTINATION: "ACCEPT_DESTINATION",
  ACCEPT_SOURCE: "ACCEPT_SOURCE",
  AUTOMERGE: "AUTOMERGE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ConflictResolutionStrategyTypeEnum =
  (typeof ConflictResolutionStrategyTypeEnum)[keyof typeof ConflictResolutionStrategyTypeEnum];

/**
 * @public
 * @enum
 */
export const MergeOptionTypeEnum = {
  FAST_FORWARD_MERGE: "FAST_FORWARD_MERGE",
  SQUASH_MERGE: "SQUASH_MERGE",
  THREE_WAY_MERGE: "THREE_WAY_MERGE",
} as const;
/**
 * @public
 */
export type MergeOptionTypeEnum = (typeof MergeOptionTypeEnum)[keyof typeof MergeOptionTypeEnum];

/**
 * @public
 * @enum
 */
export const FileModeTypeEnum = {
  EXECUTABLE: "EXECUTABLE",
  NORMAL: "NORMAL",
  SYMLINK: "SYMLINK",
} as const;
/**
 * @public
 */
export type FileModeTypeEnum = (typeof FileModeTypeEnum)[keyof typeof FileModeTypeEnum];

/**
 * @public
 * @enum
 */
export const ChangeTypeEnum = {
  ADDED: "A",
  DELETED: "D",
  MODIFIED: "M",
} as const;
/**
 * @public
 */
export type ChangeTypeEnum = (typeof ChangeTypeEnum)[keyof typeof ChangeTypeEnum];

/**
 * @public
 * @enum
 */
export const ObjectTypeEnum = {
  DIRECTORY: "DIRECTORY",
  FILE: "FILE",
  GIT_LINK: "GIT_LINK",
  SYMBOLIC_LINK: "SYMBOLIC_LINK",
} as const;
/**
 * @public
 */
export type ObjectTypeEnum = (typeof ObjectTypeEnum)[keyof typeof ObjectTypeEnum];

/**
 * @public
 * @enum
 */
export const BatchGetRepositoriesErrorCodeEnum = {
  ENCRYPTION_INTEGRITY_CHECKS_FAILED_EXCEPTION: "EncryptionIntegrityChecksFailedException",
  ENCRYPTION_KEY_ACCESS_DENIED_EXCEPTION: "EncryptionKeyAccessDeniedException",
  ENCRYPTION_KEY_DISABLED_EXCEPTION: "EncryptionKeyDisabledException",
  ENCRYPTION_KEY_NOT_FOUND_EXCEPTION: "EncryptionKeyNotFoundException",
  ENCRYPTION_KEY_UNAVAILABLE_EXCEPTION: "EncryptionKeyUnavailableException",
  REPOSITORY_DOES_NOT_EXIST_EXCEPTION: "RepositoryDoesNotExistException",
} as const;
/**
 * @public
 */
export type BatchGetRepositoriesErrorCodeEnum =
  (typeof BatchGetRepositoriesErrorCodeEnum)[keyof typeof BatchGetRepositoriesErrorCodeEnum];

/**
 * @public
 * @enum
 */
export const PullRequestStatusEnum = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type PullRequestStatusEnum = (typeof PullRequestStatusEnum)[keyof typeof PullRequestStatusEnum];

/**
 * @public
 * @enum
 */
export const ReplacementTypeEnum = {
  KEEP_BASE: "KEEP_BASE",
  KEEP_DESTINATION: "KEEP_DESTINATION",
  KEEP_SOURCE: "KEEP_SOURCE",
  USE_NEW_CONTENT: "USE_NEW_CONTENT",
} as const;
/**
 * @public
 */
export type ReplacementTypeEnum = (typeof ReplacementTypeEnum)[keyof typeof ReplacementTypeEnum];

/**
 * @public
 * @enum
 */
export const PullRequestEventType = {
  PULL_REQUEST_APPROVAL_RULE_CREATED: "PULL_REQUEST_APPROVAL_RULE_CREATED",
  PULL_REQUEST_APPROVAL_RULE_DELETED: "PULL_REQUEST_APPROVAL_RULE_DELETED",
  PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN: "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN",
  PULL_REQUEST_APPROVAL_RULE_UPDATED: "PULL_REQUEST_APPROVAL_RULE_UPDATED",
  PULL_REQUEST_APPROVAL_STATE_CHANGED: "PULL_REQUEST_APPROVAL_STATE_CHANGED",
  PULL_REQUEST_CREATED: "PULL_REQUEST_CREATED",
  PULL_REQUEST_MERGE_STATE_CHANGED: "PULL_REQUEST_MERGE_STATE_CHANGED",
  PULL_REQUEST_SOURCE_REFERENCE_UPDATED: "PULL_REQUEST_SOURCE_REFERENCE_UPDATED",
  PULL_REQUEST_STATUS_CHANGED: "PULL_REQUEST_STATUS_CHANGED",
} as const;
/**
 * @public
 */
export type PullRequestEventType = (typeof PullRequestEventType)[keyof typeof PullRequestEventType];

/**
 * @public
 * @enum
 */
export const RelativeFileVersionEnum = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
} as const;
/**
 * @public
 */
export type RelativeFileVersionEnum = (typeof RelativeFileVersionEnum)[keyof typeof RelativeFileVersionEnum];

/**
 * @public
 * @enum
 */
export const RepositoryTriggerEventEnum = {
  ALL: "all",
  CREATE_REFERENCE: "createReference",
  DELETE_REFERENCE: "deleteReference",
  UPDATE_REFERENCE: "updateReference",
} as const;
/**
 * @public
 */
export type RepositoryTriggerEventEnum = (typeof RepositoryTriggerEventEnum)[keyof typeof RepositoryTriggerEventEnum];

/**
 * @public
 * @enum
 */
export const OrderEnum = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
} as const;
/**
 * @public
 */
export type OrderEnum = (typeof OrderEnum)[keyof typeof OrderEnum];

/**
 * @public
 * @enum
 */
export const SortByEnum = {
  MODIFIED_DATE: "lastModifiedDate",
  REPOSITORY_NAME: "repositoryName",
} as const;
/**
 * @public
 */
export type SortByEnum = (typeof SortByEnum)[keyof typeof SortByEnum];
