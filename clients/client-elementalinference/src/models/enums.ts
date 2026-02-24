// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OutputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OutputStatus = (typeof OutputStatus)[keyof typeof OutputStatus];

/**
 * @public
 * @enum
 */
export const FeedStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FeedStatus = (typeof FeedStatus)[keyof typeof FeedStatus];
