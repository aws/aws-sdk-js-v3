// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CampaignState = {
  /**
   * Campaign is in failed state
   */
  FAILED: "Failed",
  /**
   * Campaign is in initialized state
   */
  INITIALIZED: "Initialized",
  /**
   * Campaign is in paused state
   */
  PAUSED: "Paused",
  /**
   * Campaign is in running state
   */
  RUNNING: "Running",
  /**
   * Campaign is in stopped state
   */
  STOPPED: "Stopped",
} as const;
/**
 * @public
 */
export type CampaignState = (typeof CampaignState)[keyof typeof CampaignState];

/**
 * @public
 * @enum
 */
export const GetCampaignStateBatchFailureCode = {
  /**
   * The specified resource was not found
   */
  RESOURCE_NOT_FOUND: "ResourceNotFound",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR: "UnknownError",
} as const;
/**
 * @public
 */
export type GetCampaignStateBatchFailureCode =
  (typeof GetCampaignStateBatchFailureCode)[keyof typeof GetCampaignStateBatchFailureCode];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const InstanceOnboardingJobFailureCode = {
  EVENT_BRIDGE_ACCESS_DENIED: "EVENT_BRIDGE_ACCESS_DENIED",
  EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED: "EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED",
  IAM_ACCESS_DENIED: "IAM_ACCESS_DENIED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED",
  KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND",
} as const;
/**
 * @public
 */
export type InstanceOnboardingJobFailureCode =
  (typeof InstanceOnboardingJobFailureCode)[keyof typeof InstanceOnboardingJobFailureCode];

/**
 * @public
 * @enum
 */
export const InstanceOnboardingJobStatusCode = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type InstanceOnboardingJobStatusCode =
  (typeof InstanceOnboardingJobStatusCode)[keyof typeof InstanceOnboardingJobStatusCode];

/**
 * @public
 * @enum
 */
export const InstanceIdFilterOperator = {
  /**
   * Equals operator
   */
  EQ: "Eq",
} as const;
/**
 * @public
 */
export type InstanceIdFilterOperator = (typeof InstanceIdFilterOperator)[keyof typeof InstanceIdFilterOperator];

/**
 * @public
 * @enum
 */
export const FailureCode = {
  /**
   * The request failed to satisfy the constraints specified by the service
   */
  INVALID_INPUT: "InvalidInput",
  /**
   * Request throttled due to large number of pending dial requests
   */
  REQUEST_THROTTLED: "RequestThrottled",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR: "UnknownError",
} as const;
/**
 * @public
 */
export type FailureCode = (typeof FailureCode)[keyof typeof FailureCode];
