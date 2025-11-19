// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ChecksumType = {
  Sha1: "SHA1",
} as const;
/**
 * @public
 */
export type ChecksumType = (typeof ChecksumType)[keyof typeof ChecksumType];

/**
 * @public
 * @enum
 */
export const ModelState = {
  Deploy: "DEPLOY",
  Undeploy: "UNDEPLOY",
} as const;
/**
 * @public
 */
export type ModelState = (typeof ModelState)[keyof typeof ModelState];

/**
 * @public
 * @enum
 */
export const FailureHandlingPolicy = {
  DoNothing: "DO_NOTHING",
  RollbackOnFailure: "ROLLBACK_ON_FAILURE",
} as const;
/**
 * @public
 */
export type FailureHandlingPolicy = (typeof FailureHandlingPolicy)[keyof typeof FailureHandlingPolicy];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  Model: "Model",
} as const;
/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  Fail: "FAIL",
  Success: "SUCCESS",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];
