// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION: "IdempotentParameterMismatchException",
  RESOURCE_CONFLICT: "ResourceConflict",
  ROOT_EVENT_IN_OTHER_SESSION: "EventInOtherSession",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const BrowserSessionStatus = {
  READY: "READY",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type BrowserSessionStatus = (typeof BrowserSessionStatus)[keyof typeof BrowserSessionStatus];

/**
 * @public
 * @enum
 */
export const AutomationStreamStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutomationStreamStatus = (typeof AutomationStreamStatus)[keyof typeof AutomationStreamStatus];

/**
 * @public
 * @enum
 */
export const CodeInterpreterSessionStatus = {
  READY: "READY",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type CodeInterpreterSessionStatus =
  (typeof CodeInterpreterSessionStatus)[keyof typeof CodeInterpreterSessionStatus];

/**
 * @public
 * @enum
 */
export const Oauth2FlowType = {
  M2M: "M2M",
  USER_FEDERATION: "USER_FEDERATION",
} as const;
/**
 * @public
 */
export type Oauth2FlowType = (typeof Oauth2FlowType)[keyof typeof Oauth2FlowType];

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 * @enum
 */
export const ProgrammingLanguage = {
  JAVASCRIPT: "javascript",
  PYTHON: "python",
  TYPESCRIPT: "typescript",
} as const;
/**
 * @public
 */
export type ProgrammingLanguage = (typeof ProgrammingLanguage)[keyof typeof ProgrammingLanguage];

/**
 * @public
 * @enum
 */
export const ToolName = {
  EXECUTE_CODE: "executeCode",
  EXECUTE_COMMAND: "executeCommand",
  GET_TASK: "getTask",
  LIST_FILES: "listFiles",
  READ_FILES: "readFiles",
  REMOVE_FILES: "removeFiles",
  START_COMMAND_EXECUTION: "startCommandExecution",
  STOP_TASK: "stopTask",
  WRITE_FILES: "writeFiles",
} as const;
/**
 * @public
 */
export type ToolName = (typeof ToolName)[keyof typeof ToolName];

/**
 * @public
 * @enum
 */
export const ResourceContentType = {
  BLOB: "blob",
  TEXT: "text",
} as const;
/**
 * @public
 */
export type ResourceContentType = (typeof ResourceContentType)[keyof typeof ResourceContentType];

/**
 * @public
 * @enum
 */
export const ContentBlockType = {
  EMBEDDED_RESOURCE: "resource",
  IMAGE: "image",
  RESOURCE_LINK: "resource_link",
  TEXT: "text",
} as const;
/**
 * @public
 */
export type ContentBlockType = (typeof ContentBlockType)[keyof typeof ContentBlockType];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  CANCELED: "canceled",
  COMPLETED: "completed",
  FAILED: "failed",
  SUBMITTED: "submitted",
  WORKING: "working",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const MemoryRecordStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type MemoryRecordStatus = (typeof MemoryRecordStatus)[keyof typeof MemoryRecordStatus];

/**
 * @public
 * @enum
 */
export const Role = {
  ASSISTANT: "ASSISTANT",
  OTHER: "OTHER",
  TOOL: "TOOL",
  USER: "USER",
} as const;
/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 * @enum
 */
export const OperatorType = {
  EQUALS_TO: "EQUALS_TO",
  EXISTS: "EXISTS",
  NOT_EXISTS: "NOT_EXISTS",
} as const;
/**
 * @public
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];
