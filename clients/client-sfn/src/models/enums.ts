// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KEY: "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  ALL: "ALL",
  ERROR: "ERROR",
  FATAL: "FATAL",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const StateMachineType = {
  EXPRESS: "EXPRESS",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type StateMachineType = (typeof StateMachineType)[keyof typeof StateMachineType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  API_DOES_NOT_SUPPORT_LABELED_ARNS: "API_DOES_NOT_SUPPORT_LABELED_ARNS",
  CANNOT_UPDATE_COMPLETED_MAP_RUN: "CANNOT_UPDATE_COMPLETED_MAP_RUN",
  INVALID_ROUTING_CONFIGURATION: "INVALID_ROUTING_CONFIGURATION",
  MISSING_REQUIRED_PARAMETER: "MISSING_REQUIRED_PARAMETER",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const IncludedData = {
  ALL_DATA: "ALL_DATA",
  METADATA_ONLY: "METADATA_ONLY",
} as const;
/**
 * @public
 */
export type IncludedData = (typeof IncludedData)[keyof typeof IncludedData];

/**
 * @public
 * @enum
 */
export const ExecutionRedriveStatus = {
  NOT_REDRIVABLE: "NOT_REDRIVABLE",
  REDRIVABLE: "REDRIVABLE",
  REDRIVABLE_BY_MAP_RUN: "REDRIVABLE_BY_MAP_RUN",
} as const;
/**
 * @public
 */
export type ExecutionRedriveStatus = (typeof ExecutionRedriveStatus)[keyof typeof ExecutionRedriveStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  PENDING_REDRIVE: "PENDING_REDRIVE",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const KmsKeyState = {
  CREATING: "CREATING",
  DISABLED: "DISABLED",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_IMPORT: "PENDING_IMPORT",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type KmsKeyState = (typeof KmsKeyState)[keyof typeof KmsKeyState];

/**
 * @public
 * @enum
 */
export const MapRunStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type MapRunStatus = (typeof MapRunStatus)[keyof typeof MapRunStatus];

/**
 * @public
 * @enum
 */
export const StateMachineStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type StateMachineStatus = (typeof StateMachineStatus)[keyof typeof StateMachineStatus];

/**
 * @public
 * @enum
 */
export const HistoryEventType = {
  ActivityFailed: "ActivityFailed",
  ActivityScheduleFailed: "ActivityScheduleFailed",
  ActivityScheduled: "ActivityScheduled",
  ActivityStarted: "ActivityStarted",
  ActivitySucceeded: "ActivitySucceeded",
  ActivityTimedOut: "ActivityTimedOut",
  ChoiceStateEntered: "ChoiceStateEntered",
  ChoiceStateExited: "ChoiceStateExited",
  EvaluationFailed: "EvaluationFailed",
  ExecutionAborted: "ExecutionAborted",
  ExecutionFailed: "ExecutionFailed",
  ExecutionRedriven: "ExecutionRedriven",
  ExecutionStarted: "ExecutionStarted",
  ExecutionSucceeded: "ExecutionSucceeded",
  ExecutionTimedOut: "ExecutionTimedOut",
  FailStateEntered: "FailStateEntered",
  LambdaFunctionFailed: "LambdaFunctionFailed",
  LambdaFunctionScheduleFailed: "LambdaFunctionScheduleFailed",
  LambdaFunctionScheduled: "LambdaFunctionScheduled",
  LambdaFunctionStartFailed: "LambdaFunctionStartFailed",
  LambdaFunctionStarted: "LambdaFunctionStarted",
  LambdaFunctionSucceeded: "LambdaFunctionSucceeded",
  LambdaFunctionTimedOut: "LambdaFunctionTimedOut",
  MapIterationAborted: "MapIterationAborted",
  MapIterationFailed: "MapIterationFailed",
  MapIterationStarted: "MapIterationStarted",
  MapIterationSucceeded: "MapIterationSucceeded",
  MapRunAborted: "MapRunAborted",
  MapRunFailed: "MapRunFailed",
  MapRunRedriven: "MapRunRedriven",
  MapRunStarted: "MapRunStarted",
  MapRunSucceeded: "MapRunSucceeded",
  MapStateAborted: "MapStateAborted",
  MapStateEntered: "MapStateEntered",
  MapStateExited: "MapStateExited",
  MapStateFailed: "MapStateFailed",
  MapStateStarted: "MapStateStarted",
  MapStateSucceeded: "MapStateSucceeded",
  ParallelStateAborted: "ParallelStateAborted",
  ParallelStateEntered: "ParallelStateEntered",
  ParallelStateExited: "ParallelStateExited",
  ParallelStateFailed: "ParallelStateFailed",
  ParallelStateStarted: "ParallelStateStarted",
  ParallelStateSucceeded: "ParallelStateSucceeded",
  PassStateEntered: "PassStateEntered",
  PassStateExited: "PassStateExited",
  SucceedStateEntered: "SucceedStateEntered",
  SucceedStateExited: "SucceedStateExited",
  TaskFailed: "TaskFailed",
  TaskScheduled: "TaskScheduled",
  TaskStartFailed: "TaskStartFailed",
  TaskStarted: "TaskStarted",
  TaskStateAborted: "TaskStateAborted",
  TaskStateEntered: "TaskStateEntered",
  TaskStateExited: "TaskStateExited",
  TaskSubmitFailed: "TaskSubmitFailed",
  TaskSubmitted: "TaskSubmitted",
  TaskSucceeded: "TaskSucceeded",
  TaskTimedOut: "TaskTimedOut",
  WaitStateAborted: "WaitStateAborted",
  WaitStateEntered: "WaitStateEntered",
  WaitStateExited: "WaitStateExited",
} as const;
/**
 * @public
 */
export type HistoryEventType = (typeof HistoryEventType)[keyof typeof HistoryEventType];

/**
 * @public
 * @enum
 */
export const ExecutionRedriveFilter = {
  NOT_REDRIVEN: "NOT_REDRIVEN",
  REDRIVEN: "REDRIVEN",
} as const;
/**
 * @public
 */
export type ExecutionRedriveFilter = (typeof ExecutionRedriveFilter)[keyof typeof ExecutionRedriveFilter];

/**
 * @public
 * @enum
 */
export const SyncExecutionStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type SyncExecutionStatus = (typeof SyncExecutionStatus)[keyof typeof SyncExecutionStatus];

/**
 * @public
 * @enum
 */
export const InspectionLevel = {
  DEBUG: "DEBUG",
  INFO: "INFO",
  TRACE: "TRACE",
} as const;
/**
 * @public
 */
export type InspectionLevel = (typeof InspectionLevel)[keyof typeof InspectionLevel];

/**
 * @public
 * @enum
 */
export const MockResponseValidationMode = {
  NONE: "NONE",
  PRESENT: "PRESENT",
  STRICT: "STRICT",
} as const;
/**
 * @public
 */
export type MockResponseValidationMode = (typeof MockResponseValidationMode)[keyof typeof MockResponseValidationMode];

/**
 * @public
 * @enum
 */
export const TestExecutionStatus = {
  CAUGHT_ERROR: "CAUGHT_ERROR",
  FAILED: "FAILED",
  RETRIABLE: "RETRIABLE",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type TestExecutionStatus = (typeof TestExecutionStatus)[keyof typeof TestExecutionStatus];

/**
 * @public
 * @enum
 */
export const ValidateStateMachineDefinitionSeverity = {
  ERROR: "ERROR",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type ValidateStateMachineDefinitionSeverity =
  (typeof ValidateStateMachineDefinitionSeverity)[keyof typeof ValidateStateMachineDefinitionSeverity];

/**
 * @public
 * @enum
 */
export const ValidateStateMachineDefinitionResultCode = {
  FAIL: "FAIL",
  OK: "OK",
} as const;
/**
 * @public
 */
export type ValidateStateMachineDefinitionResultCode =
  (typeof ValidateStateMachineDefinitionResultCode)[keyof typeof ValidateStateMachineDefinitionResultCode];
