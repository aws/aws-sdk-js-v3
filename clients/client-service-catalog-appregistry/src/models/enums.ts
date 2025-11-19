// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApplicationTagStatus = {
  FAILURE: "FAILURE",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ApplicationTagStatus = (typeof ApplicationTagStatus)[keyof typeof ApplicationTagStatus];

/**
 * @public
 * @enum
 */
export const AssociationOption = {
  APPLY_APPLICATION_TAG: "APPLY_APPLICATION_TAG",
  SKIP_APPLICATION_TAG: "SKIP_APPLICATION_TAG",
} as const;
/**
 * @public
 */
export type AssociationOption = (typeof AssociationOption)[keyof typeof AssociationOption];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CFN_STACK: "CFN_STACK",
  RESOURCE_TAG_VALUE: "RESOURCE_TAG_VALUE",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ResourceGroupState = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ResourceGroupState = (typeof ResourceGroupState)[keyof typeof ResourceGroupState];

/**
 * @public
 * @enum
 */
export const ResourceItemStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ResourceItemStatus = (typeof ResourceItemStatus)[keyof typeof ResourceItemStatus];

/**
 * @public
 * @enum
 */
export const SyncAction = {
  NO_ACTION: "NO_ACTION",
  START_SYNC: "START_SYNC",
} as const;
/**
 * @public
 */
export type SyncAction = (typeof SyncAction)[keyof typeof SyncAction];
