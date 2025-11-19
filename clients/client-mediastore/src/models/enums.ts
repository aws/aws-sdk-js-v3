// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MethodName = {
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type MethodName = (typeof MethodName)[keyof typeof MethodName];

/**
 * @public
 * @enum
 */
export const ContainerStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ContainerStatus = (typeof ContainerStatus)[keyof typeof ContainerStatus];

/**
 * @public
 * @enum
 */
export const ContainerLevelMetrics = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ContainerLevelMetrics = (typeof ContainerLevelMetrics)[keyof typeof ContainerLevelMetrics];
