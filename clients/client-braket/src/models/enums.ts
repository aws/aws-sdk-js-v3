// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CompressionType = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const AssociationType = {
  RESERVATION_TIME_WINDOW_ARN: "RESERVATION_TIME_WINDOW_ARN",
} as const;
/**
 * @public
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

/**
 * @public
 * @enum
 */
export const QueueName = {
  JOBS_QUEUE: "JOBS_QUEUE",
  QUANTUM_TASKS_QUEUE: "QUANTUM_TASKS_QUEUE",
} as const;
/**
 * @public
 */
export type QueueName = (typeof QueueName)[keyof typeof QueueName];

/**
 * @public
 * @enum
 */
export const QueuePriority = {
  NORMAL: "Normal",
  PRIORITY: "Priority",
} as const;
/**
 * @public
 */
export type QueuePriority = (typeof QueuePriority)[keyof typeof QueuePriority];

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  RETIRED: "RETIRED",
} as const;
/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  QPU: "QPU",
  SIMULATOR: "SIMULATOR",
} as const;
/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  PROGRAM_SET_VALIDATION_FAILED: "ProgramSetValidationFailed",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const CancellationStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
} as const;
/**
 * @public
 */
export type CancellationStatus = (typeof CancellationStatus)[keyof typeof CancellationStatus];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5N_18XLARGE: "ml.c5n.18xlarge",
  ML_C5N_2XLARGE: "ml.c5n.2xlarge",
  ML_C5N_4XLARGE: "ml.c5n.4xlarge",
  ML_C5N_9XLARGE: "ml.c5n.9xlarge",
  ML_C5N_XLARGE: "ml.c5n.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
} as const;
/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * @enum
 */
export const HybridJobAdditionalAttributeName = {
  QUEUE_INFO: "QueueInfo",
} as const;
/**
 * @public
 */
export type HybridJobAdditionalAttributeName =
  (typeof HybridJobAdditionalAttributeName)[keyof typeof HybridJobAdditionalAttributeName];

/**
 * @public
 * @enum
 */
export const JobEventType = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  DEPRIORITIZED_DUE_TO_INACTIVITY: "DEPRIORITIZED_DUE_TO_INACTIVITY",
  DOWNLOADING_DATA: "DOWNLOADING_DATA",
  FAILED: "FAILED",
  MAX_RUNTIME_EXCEEDED: "MAX_RUNTIME_EXCEEDED",
  QUEUED_FOR_EXECUTION: "QUEUED_FOR_EXECUTION",
  RUNNING: "RUNNING",
  STARTING_INSTANCE: "STARTING_INSTANCE",
  UPLOADING_RESULTS: "UPLOADING_RESULTS",
  WAITING_FOR_PRIORITY: "WAITING_FOR_PRIORITY",
} as const;
/**
 * @public
 */
export type JobEventType = (typeof JobEventType)[keyof typeof JobEventType];

/**
 * @public
 * @enum
 */
export const JobPrimaryStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type JobPrimaryStatus = (typeof JobPrimaryStatus)[keyof typeof JobPrimaryStatus];

/**
 * @public
 * @enum
 */
export const SearchJobsFilterOperator = {
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EQUAL: "EQUAL",
  GT: "GT",
  GTE: "GTE",
  LT: "LT",
  LTE: "LTE",
} as const;
/**
 * @public
 */
export type SearchJobsFilterOperator = (typeof SearchJobsFilterOperator)[keyof typeof SearchJobsFilterOperator];

/**
 * @public
 * @enum
 */
export const ExperimentalCapabilitiesEnablementType = {
  ALL: "ALL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ExperimentalCapabilitiesEnablementType =
  (typeof ExperimentalCapabilitiesEnablementType)[keyof typeof ExperimentalCapabilitiesEnablementType];

/**
 * @public
 * @enum
 */
export const QuantumTaskAdditionalAttributeName = {
  QUEUE_INFO: "QueueInfo",
} as const;
/**
 * @public
 */
export type QuantumTaskAdditionalAttributeName =
  (typeof QuantumTaskAdditionalAttributeName)[keyof typeof QuantumTaskAdditionalAttributeName];

/**
 * @public
 * @enum
 */
export const QuantumTaskStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type QuantumTaskStatus = (typeof QuantumTaskStatus)[keyof typeof QuantumTaskStatus];

/**
 * @public
 * @enum
 */
export const SearchQuantumTasksFilterOperator = {
  BETWEEN: "BETWEEN",
  EQUAL: "EQUAL",
  GT: "GT",
  GTE: "GTE",
  LT: "LT",
  LTE: "LTE",
} as const;
/**
 * @public
 */
export type SearchQuantumTasksFilterOperator =
  (typeof SearchQuantumTasksFilterOperator)[keyof typeof SearchQuantumTasksFilterOperator];

/**
 * @public
 * @enum
 */
export const SearchSpendingLimitsFilterOperator = {
  EQUAL: "EQUAL",
} as const;
/**
 * @public
 */
export type SearchSpendingLimitsFilterOperator =
  (typeof SearchSpendingLimitsFilterOperator)[keyof typeof SearchSpendingLimitsFilterOperator];
