// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OriginType = {
  REPLICATION: "REPLICATION",
  TTL: "TTL",
  USER: "USER",
} as const;
/**
 * @public
 */
export type OriginType = (typeof OriginType)[keyof typeof OriginType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionType = {
  ExpiredIterator: "ExpiredIterator",
  ExpiredNextToken: "ExpiredNextToken",
  InvalidFormat: "InvalidFormat",
  TrimmedDataAccess: "TrimmedDataAccess",
} as const;
/**
 * @public
 */
export type ValidationExceptionType = (typeof ValidationExceptionType)[keyof typeof ValidationExceptionType];

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
