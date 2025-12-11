// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AgentAction = {
  DISCARD: "DISCARD",
} as const;
/**
 * @public
 */
export type AgentAction = (typeof AgentAction)[keyof typeof AgentAction];

/**
 * @public
 * @enum
 */
export const CommunicationLimitTimeUnit = {
  DAY: "DAY",
} as const;
/**
 * @public
 */
export type CommunicationLimitTimeUnit = (typeof CommunicationLimitTimeUnit)[keyof typeof CommunicationLimitTimeUnit];

/**
 * @public
 * @enum
 */
export const InstanceLimitsHandling = {
  OPT_IN: "OPT_IN",
  OPT_OUT: "OPT_OUT",
} as const;
/**
 * @public
 */
export type InstanceLimitsHandling = (typeof InstanceLimitsHandling)[keyof typeof InstanceLimitsHandling];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const LocalTimeZoneDetectionType = {
  AREA_CODE: "AREA_CODE",
  ZIP_CODE: "ZIP_CODE",
} as const;
/**
 * @public
 */
export type LocalTimeZoneDetectionType = (typeof LocalTimeZoneDetectionType)[keyof typeof LocalTimeZoneDetectionType];

/**
 * @public
 * @enum
 */
export const ExternalCampaignType = {
  JOURNEY: "JOURNEY",
  MANAGED: "MANAGED",
} as const;
/**
 * @public
 */
export type ExternalCampaignType = (typeof ExternalCampaignType)[keyof typeof ExternalCampaignType];

/**
 * @public
 * @enum
 */
export const ChannelSubtype = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  TELEPHONY: "TELEPHONY",
  WHATSAPP: "WHATSAPP",
} as const;
/**
 * @public
 */
export type ChannelSubtype = (typeof ChannelSubtype)[keyof typeof ChannelSubtype];

/**
 * @public
 * @enum
 */
export const CommunicationLimitsConfigType = {
  ALL_CHANNEL_SUBTYPES: "ALL_CHANNEL_SUBTYPES",
} as const;
/**
 * @public
 */
export type CommunicationLimitsConfigType =
  (typeof CommunicationLimitsConfigType)[keyof typeof CommunicationLimitsConfigType];

/**
 * @public
 * @enum
 */
export const CampaignState = {
  /**
   * Campaign is in completed state
   */
  COMPLETED: "Completed",
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
export const CommunicationTimeConfigType = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  TELEPHONY: "TELEPHONY",
  WHATSAPP: "WHATSAPP",
} as const;
/**
 * @public
 */
export type CommunicationTimeConfigType =
  (typeof CommunicationTimeConfigType)[keyof typeof CommunicationTimeConfigType];

/**
 * @public
 * @enum
 */
export const CampaignDeletionPolicy = {
  DELETE_ALL: "DELETE_ALL",
  RETAIN_ALL: "RETAIN_ALL",
} as const;
/**
 * @public
 */
export type CampaignDeletionPolicy = (typeof CampaignDeletionPolicy)[keyof typeof CampaignDeletionPolicy];

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
export const EventType = {
  CAMPAIGN_EMAIL: "Campaign-Email",
  CAMPAIGN_ORCHESTRATION: "Campaign-Orchestration",
  CAMPAIGN_SMS: "Campaign-SMS",
  CAMPAIGN_TELEPHONY: "Campaign-Telephony",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const FailureCode = {
  /**
   * Request throttled due to large number of pending dial requests
   */
  BUFFER_LIMIT_EXCEEDED: "BufferLimitExceeded",
  /**
   * The request failed to satisfy the constraints specified by the service
   */
  INVALID_INPUT: "InvalidInput",
  /**
   * The request was throttled due to excessive usage
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

/**
 * @public
 * @enum
 */
export const ProfileOutboundRequestFailureCode = {
  /**
   * The specified resource conflicts with another resource
   */
  CONFLICT: "Conflict",
  /**
   * The request failed to satisfy the constraints specified by the service
   */
  INVALID_INPUT: "InvalidInput",
  /**
   * Request throttled due to large number of requests
   */
  REQUEST_THROTTLED: "RequestThrottled",
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
export type ProfileOutboundRequestFailureCode =
  (typeof ProfileOutboundRequestFailureCode)[keyof typeof ProfileOutboundRequestFailureCode];
