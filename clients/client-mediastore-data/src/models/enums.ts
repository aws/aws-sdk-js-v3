// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ItemType = {
  FOLDER: "FOLDER",
  OBJECT: "OBJECT",
} as const;
/**
 * @public
 */
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  TEMPORAL: "TEMPORAL",
} as const;
/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 * @enum
 */
export const UploadAvailability = {
  STANDARD: "STANDARD",
  STREAMING: "STREAMING",
} as const;
/**
 * @public
 */
export type UploadAvailability = (typeof UploadAvailability)[keyof typeof UploadAvailability];
