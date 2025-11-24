// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const InvalidParameterProblem = {
  /**
   * The parameter was corrupted and could not be understood by the service.
   */
  CORRUPTED: "Corrupted",
  /**
   * The parameter was expired and can no longer be used.
   */
  EXPIRED: "Expired",
  /**
   * The client called the service before the time specified in the poll interval.
   */
  POLL_INTERVAL_NOT_SATISFIED: "PollIntervalNotSatisfied",
} as const;
/**
 * @public
 */
export type InvalidParameterProblem = (typeof InvalidParameterProblem)[keyof typeof InvalidParameterProblem];

/**
 * @public
 * @enum
 */
export const BadRequestReason = {
  /**
   * Indicates there was a problem with one or more of the parameters.
   * See InvalidParameters in the BadRequestDetails for more information.
   */
  INVALID_PARAMETERS: "InvalidParameters",
} as const;
/**
 * @public
 */
export type BadRequestReason = (typeof BadRequestReason)[keyof typeof BadRequestReason];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  /**
   * Resource type value for the Application resource.
   */
  APPLICATION: "Application",
  /**
   * Resource type value for the Configuration resource.
   */
  CONFIGURATION: "Configuration",
  /**
   * Resource type value for the ConfigurationProfile resource.
   */
  CONFIGURATION_PROFILE: "ConfigurationProfile",
  /**
   * Resource type value for the Deployment resource.
   */
  DEPLOYMENT: "Deployment",
  /**
   * Resource type value for the Environment resource.
   */
  ENVIRONMENT: "Environment",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
