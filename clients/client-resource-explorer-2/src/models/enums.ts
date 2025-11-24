// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AWSServiceAccessStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AWSServiceAccessStatus = (typeof AWSServiceAccessStatus)[keyof typeof AWSServiceAccessStatus];

/**
 * @public
 * @enum
 */
export const IndexState = {
  /**
   * Index is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Resource Explorer is creating the index.
   */
  CREATING: "CREATING",
  /**
   * Resource Explorer successfully deleted the index.
   */
  DELETED: "DELETED",
  /**
   * Resource Explorer is deleting the index.
   */
  DELETING: "DELETING",
  /**
   * Resource Explorer is switching the index type between local and aggregator.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type IndexState = (typeof IndexState)[keyof typeof IndexState];

/**
 * @public
 * @enum
 */
export const IndexType = {
  /**
   * aggregator index
   */
  AGGREGATOR: "AGGREGATOR",
  /**
   * local index
   */
  LOCAL: "LOCAL",
} as const;
/**
 * @public
 */
export type IndexType = (typeof IndexType)[keyof typeof IndexType];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];
