// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const LifeCycleState = {
  available: "available",
  creating: "creating",
  deleted: "deleted",
  deleting: "deleting",
  error: "error",
  updating: "updating",
} as const;
/**
 * @public
 */
export type LifeCycleState = (typeof LifeCycleState)[keyof typeof LifeCycleState];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4_ONLY: "IPV4_ONLY",
  IPV6_ONLY: "IPV6_ONLY",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const ImportTrigger = {
  ON_DIRECTORY_FIRST_ACCESS: "ON_DIRECTORY_FIRST_ACCESS",
  ON_FILE_ACCESS: "ON_FILE_ACCESS",
} as const;
/**
 * @public
 */
export type ImportTrigger = (typeof ImportTrigger)[keyof typeof ImportTrigger];
