// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ImageSetState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  LOCKED: "LOCKED",
} as const;
/**
 * @public
 */
export type ImageSetState = (typeof ImageSetState)[keyof typeof ImageSetState];

/**
 * @public
 * @enum
 */
export const ImageSetWorkflowStatus = {
  COPIED: "COPIED",
  COPYING: "COPYING",
  COPYING_WITH_READ_ONLY_ACCESS: "COPYING_WITH_READ_ONLY_ACCESS",
  COPY_FAILED: "COPY_FAILED",
  CREATED: "CREATED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  IMPORTED: "IMPORTED",
  IMPORTING: "IMPORTING",
  IMPORT_FAILED: "IMPORT_FAILED",
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ImageSetWorkflowStatus = (typeof ImageSetWorkflowStatus)[keyof typeof ImageSetWorkflowStatus];

/**
 * @public
 * @enum
 */
export const LosslessStorageFormat = {
  HTJ2K: "HTJ2K",
  JPEG_2000_LOSSLESS: "JPEG_2000_LOSSLESS",
} as const;
/**
 * @public
 */
export type LosslessStorageFormat = (typeof LosslessStorageFormat)[keyof typeof LosslessStorageFormat];

/**
 * @public
 * @enum
 */
export const DatastoreStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type DatastoreStatus = (typeof DatastoreStatus)[keyof typeof DatastoreStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const StorageTier = {
  /**
   * Archive instant access storage tier for image sets that are accessed infrequently
   */
  ARCHIVE_INSTANT_ACCESS: "ARCHIVE_INSTANT_ACCESS",
  /**
   * Frequent access storage tier for image sets that are accessed regularly
   */
  FREQUENT_ACCESS: "FREQUENT_ACCESS",
} as const;
/**
 * @public
 */
export type StorageTier = (typeof StorageTier)[keyof typeof StorageTier];

/**
 * @public
 * @enum
 */
export const Operator = {
  BETWEEN: "BETWEEN",
  EQUAL: "EQUAL",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const SortField = {
  DICOMStudyDateAndTime: "DICOMStudyDateAndTime",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;
/**
 * @public
 */
export type SortField = (typeof SortField)[keyof typeof SortField];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
