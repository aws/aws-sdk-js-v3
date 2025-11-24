// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EndpointManagement = {
  CUSTOMER: "CUSTOMER",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type EndpointManagement = (typeof EndpointManagement)[keyof typeof EndpointManagement];

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  CRITICAL: "CRITICAL",
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * @enum
 */
export const WebserverAccessMode = {
  PRIVATE_ONLY: "PRIVATE_ONLY",
  PUBLIC_ONLY: "PUBLIC_ONLY",
} as const;
/**
 * @public
 */
export type WebserverAccessMode = (typeof WebserverAccessMode)[keyof typeof WebserverAccessMode];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * @enum
 */
export const WorkerReplacementStrategy = {
  FORCED: "FORCED",
  GRACEFUL: "GRACEFUL",
} as const;
/**
 * @public
 */
export type WorkerReplacementStrategy = (typeof WorkerReplacementStrategy)[keyof typeof WorkerReplacementStrategy];

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  CREATING_SNAPSHOT: "CREATING_SNAPSHOT",
  DELETED: "DELETED",
  DELETING: "DELETING",
  MAINTENANCE: "MAINTENANCE",
  PENDING: "PENDING",
  ROLLING_BACK: "ROLLING_BACK",
  UNAVAILABLE: "UNAVAILABLE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 * @enum
 */
export const RestApiMethod = {
  DELETE: "DELETE",
  GET: "GET",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type RestApiMethod = (typeof RestApiMethod)[keyof typeof RestApiMethod];

/**
 * @public
 * @enum
 */
export const Unit = {
  BITS: "Bits",
  BITS_PER_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_PER_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_PER_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_PER_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_PER_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_PER_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_PER_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_PER_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_PER_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_PER_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_PER_SECOND: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];
