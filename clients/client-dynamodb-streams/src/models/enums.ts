// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ShardFilterType = {
  CHILD_SHARDS: "CHILD_SHARDS",
} as const;
/**
 * @public
 */
export type ShardFilterType = (typeof ShardFilterType)[keyof typeof ShardFilterType];

/**
 * @public
 * @enum
 */
export const KeyType = {
  HASH: "HASH",
  RANGE: "RANGE",
} as const;
/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 * @enum
 */
export const StreamStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];

/**
 * @public
 * @enum
 */
export const StreamViewType = {
  KEYS_ONLY: "KEYS_ONLY",
  NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
  NEW_IMAGE: "NEW_IMAGE",
  OLD_IMAGE: "OLD_IMAGE",
} as const;
/**
 * @public
 */
export type StreamViewType = (typeof StreamViewType)[keyof typeof StreamViewType];

/**
 * @public
 * @enum
 */
export const OperationType = {
  INSERT: "INSERT",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * @enum
 */
export const ShardIteratorType = {
  AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER",
  AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type ShardIteratorType = (typeof ShardIteratorType)[keyof typeof ShardIteratorType];
