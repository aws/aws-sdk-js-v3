// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApplicationLogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  FATAL: "FATAL",
  INFO: "INFO",
  TRACE: "TRACE",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type ApplicationLogLevel = (typeof ApplicationLogLevel)[keyof typeof ApplicationLogLevel];

/**
 * @public
 * @enum
 */
export const AuthType = {
  APPLICATION_MANAGED: "ApplicationManaged",
  IAM_AUTH: "IamAuth",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const AutoDeploymentMode = {
  DISABLED: "Disabled",
  LATEST_REVISION: "LatestRevision",
} as const;
/**
 * @public
 */
export type AutoDeploymentMode = (typeof AutoDeploymentMode)[keyof typeof AutoDeploymentMode];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  HOME_REGION: "HomeRegion",
  MULTI_REGION: "MultiRegion",
  PER_REGION: "PerRegion",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const SystemLogLevel = {
  DEBUG: "DEBUG",
  INFO: "INFO",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type SystemLogLevel = (typeof SystemLogLevel)[keyof typeof SystemLogLevel];

/**
 * @public
 * @enum
 */
export const EndpointState = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type EndpointState = (typeof EndpointState)[keyof typeof EndpointState];

/**
 * @public
 * @enum
 */
export const EndpointUpdateStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type EndpointUpdateStatus = (typeof EndpointUpdateStatus)[keyof typeof EndpointUpdateStatus];

/**
 * @public
 * @enum
 */
export const RevisionState = {
  ACTIVE: "Active",
  FAILED: "Failed",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type RevisionState = (typeof RevisionState)[keyof typeof RevisionState];

/**
 * @public
 * @enum
 */
export const FunctionState = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type FunctionState = (typeof FunctionState)[keyof typeof FunctionState];
