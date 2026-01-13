// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConnectorOperationStepState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ConnectorOperationStepState =
  (typeof ConnectorOperationStepState)[keyof typeof ConnectorOperationStepState];

/**
 * @public
 * @enum
 */
export const ConnectorOperationStepType = {
  FINALIZE_UPDATE: "FINALIZE_UPDATE",
  INITIALIZE_UPDATE: "INITIALIZE_UPDATE",
  UPDATE_CONNECTOR_CONFIGURATION: "UPDATE_CONNECTOR_CONFIGURATION",
  UPDATE_WORKER_SETTING: "UPDATE_WORKER_SETTING",
  VALIDATE_UPDATE: "VALIDATE_UPDATE",
} as const;
/**
 * @public
 */
export type ConnectorOperationStepType = (typeof ConnectorOperationStepType)[keyof typeof ConnectorOperationStepType];

/**
 * @public
 * @enum
 */
export const ConnectorOperationState = {
  PENDING: "PENDING",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ConnectorOperationState = (typeof ConnectorOperationState)[keyof typeof ConnectorOperationState];

/**
 * @public
 * @enum
 */
export const ConnectorOperationType = {
  ISOLATE_CONNECTOR: "ISOLATE_CONNECTOR",
  RESTORE_CONNECTOR: "RESTORE_CONNECTOR",
  UPDATE_CONNECTOR_CONFIGURATION: "UPDATE_CONNECTOR_CONFIGURATION",
  UPDATE_WORKER_SETTING: "UPDATE_WORKER_SETTING",
} as const;
/**
 * @public
 */
export type ConnectorOperationType = (typeof ConnectorOperationType)[keyof typeof ConnectorOperationType];

/**
 * @public
 * @enum
 */
export const ConnectorState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ConnectorState = (typeof ConnectorState)[keyof typeof ConnectorState];

/**
 * @public
 * @enum
 */
export const KafkaClusterClientAuthenticationType = {
  IAM: "IAM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type KafkaClusterClientAuthenticationType =
  (typeof KafkaClusterClientAuthenticationType)[keyof typeof KafkaClusterClientAuthenticationType];

/**
 * @public
 * @enum
 */
export const KafkaClusterEncryptionInTransitType = {
  PLAINTEXT: "PLAINTEXT",
  TLS: "TLS",
} as const;
/**
 * @public
 */
export type KafkaClusterEncryptionInTransitType =
  (typeof KafkaClusterEncryptionInTransitType)[keyof typeof KafkaClusterEncryptionInTransitType];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL: "DUAL",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const CustomPluginState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type CustomPluginState = (typeof CustomPluginState)[keyof typeof CustomPluginState];

/**
 * @public
 * @enum
 */
export const CustomPluginContentType = {
  JAR: "JAR",
  ZIP: "ZIP",
} as const;
/**
 * @public
 */
export type CustomPluginContentType = (typeof CustomPluginContentType)[keyof typeof CustomPluginContentType];

/**
 * @public
 * @enum
 */
export const WorkerConfigurationState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type WorkerConfigurationState = (typeof WorkerConfigurationState)[keyof typeof WorkerConfigurationState];
