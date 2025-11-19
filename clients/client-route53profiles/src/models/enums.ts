// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ProfileStatus = {
  COMPLETE: "COMPLETE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  NOT_SHARED: "NOT_SHARED",
  SHARED_BY_ME: "SHARED_BY_ME",
  SHARED_WITH_ME: "SHARED_WITH_ME",
} as const;
/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];
