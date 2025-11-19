// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CentralizationFailureReason = {
  DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION: "DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  TRUSTED_ACCESS_NOT_ENABLED: "TRUSTED_ACCESS_NOT_ENABLED",
} as const;
/**
 * @public
 */
export type CentralizationFailureReason =
  (typeof CentralizationFailureReason)[keyof typeof CentralizationFailureReason];

/**
 * @public
 * @enum
 */
export const EncryptionConflictResolutionStrategy = {
  ALLOW: "ALLOW",
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type EncryptionConflictResolutionStrategy =
  (typeof EncryptionConflictResolutionStrategy)[keyof typeof EncryptionConflictResolutionStrategy];

/**
 * @public
 * @enum
 */
export const EncryptionStrategy = {
  AWS_OWNED: "AWS_OWNED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type EncryptionStrategy = (typeof EncryptionStrategy)[keyof typeof EncryptionStrategy];

/**
 * @public
 * @enum
 */
export const EncryptedLogGroupStrategy = {
  ALLOW: "ALLOW",
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type EncryptedLogGroupStrategy = (typeof EncryptedLogGroupStrategy)[keyof typeof EncryptedLogGroupStrategy];

/**
 * @public
 * @enum
 */
export const RuleHealth = {
  HEALTHY: "Healthy",
  PROVISIONING: "Provisioning",
  UNHEALTHY: "Unhealthy",
} as const;
/**
 * @public
 */
export type RuleHealth = (typeof RuleHealth)[keyof typeof RuleHealth];

/**
 * @public
 * @enum
 */
export const DestinationType = {
  CLOUDWATCH_LOGS: "cloud-watch-logs",
} as const;
/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_EC2_INSTANCE: "AWS::EC2::Instance",
  AWS_EC2_VPC: "AWS::EC2::VPC",
  AWS_LAMDBA_FUNCTION: "AWS::Lambda::Function",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const TelemetryType = {
  LOGS: "Logs",
  METRICS: "Metrics",
  TRACES: "Traces",
} as const;
/**
 * @public
 */
export type TelemetryType = (typeof TelemetryType)[keyof typeof TelemetryType];

/**
 * @public
 * @enum
 */
export const TelemetryEnrichmentStatus = {
  IMPAIRED: "Impaired",
  RUNNING: "Running",
  STOPPED: "Stopped",
} as const;
/**
 * @public
 */
export type TelemetryEnrichmentStatus = (typeof TelemetryEnrichmentStatus)[keyof typeof TelemetryEnrichmentStatus];

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED_START: "FAILED_START",
  FAILED_STOP: "FAILED_STOP",
  NOT_STARTED: "NOT_STARTED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const TelemetryState = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
  NOT_APPLICABLE: "NotApplicable",
} as const;
/**
 * @public
 */
export type TelemetryState = (typeof TelemetryState)[keyof typeof TelemetryState];
