// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Action = {
  READ: "read",
  WRITE: "write",
} as const;
/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const CardType = {
  FILE_UPLOAD: "file-upload",
  FORM_INPUT: "form-input",
  Q_PLUGIN: "q-plugin",
  Q_QUERY: "q-query",
  TEXT_INPUT: "text-input",
} as const;
/**
 * @public
 */
export type CardType = (typeof CardType)[keyof typeof CardType];

/**
 * @public
 * @enum
 */
export const InputCardComputeMode = {
  APPEND: "append",
  REPLACE: "replace",
} as const;
/**
 * @public
 */
export type InputCardComputeMode = (typeof InputCardComputeMode)[keyof typeof InputCardComputeMode];

/**
 * @public
 * @enum
 */
export const PluginType = {
  ASANA: "ASANA",
  ATLASSIAN_CONFLUENCE: "ATLASSIAN_CONFLUENCE",
  CUSTOM: "CUSTOM",
  GOOGLE_CALENDAR: "GOOGLE_CALENDAR",
  JIRA: "JIRA",
  JIRA_CLOUD: "JIRA_CLOUD",
  MICROSOFT_EXCHANGE: "MICROSOFT_EXCHANGE",
  MICROSOFT_TEAMS: "MICROSOFT_TEAMS",
  PAGERDUTY_ADVANCE: "PAGERDUTY_ADVANCE",
  SALESFORCE: "SALESFORCE",
  SALESFORCE_CRM: "SALESFORCE_CRM",
  SERVICENOW_NOW_PLATFORM: "SERVICENOW_NOW_PLATFORM",
  SERVICE_NOW: "SERVICE_NOW",
  SMARTSHEET: "SMARTSHEET",
  ZENDESK: "ZENDESK",
  ZENDESK_SUITE: "ZENDESK_SUITE",
} as const;
/**
 * @public
 */
export type PluginType = (typeof PluginType)[keyof typeof PluginType];

/**
 * @public
 * @enum
 */
export const CardOutputSource = {
  APPROVED_SOURCES: "approved-sources",
  LLM: "llm",
} as const;
/**
 * @public
 */
export type CardOutputSource = (typeof CardOutputSource)[keyof typeof CardOutputSource];

/**
 * @public
 * @enum
 */
export const AppRequiredCapability = {
  CREATOR_MODE: "CreatorMode",
  FILE_UPLOAD: "FileUpload",
  PLUGIN_MODE: "PluginMode",
  RETRIEVAL_MODE: "RetrievalMode",
} as const;
/**
 * @public
 */
export type AppRequiredCapability = (typeof AppRequiredCapability)[keyof typeof AppRequiredCapability];

/**
 * @public
 * @enum
 */
export const AppStatus = {
  DELETED: "DELETED",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const SubmissionMutationKind = {
  add: "add",
  delete: "delete",
  edit: "edit",
} as const;
/**
 * @public
 */
export type SubmissionMutationKind = (typeof SubmissionMutationKind)[keyof typeof SubmissionMutationKind];

/**
 * @public
 * @enum
 */
export const Sender = {
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;
/**
 * @public
 */
export type Sender = (typeof Sender)[keyof typeof Sender];

/**
 * @public
 * @enum
 */
export const DocumentScope = {
  APPLICATION: "APPLICATION",
  SESSION: "SESSION",
} as const;
/**
 * @public
 */
export type DocumentScope = (typeof DocumentScope)[keyof typeof DocumentScope];

/**
 * @public
 * @enum
 */
export const UserType = {
  OWNER: "owner",
  USER: "user",
} as const;
/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * @enum
 */
export const LibraryItemStatus = {
  DISABLED: "DISABLED",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type LibraryItemStatus = (typeof LibraryItemStatus)[keyof typeof LibraryItemStatus];
