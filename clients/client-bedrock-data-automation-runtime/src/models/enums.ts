// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AutomationJobStatus = {
  CLIENT_ERROR: "ClientError",
  CREATED: "Created",
  IN_PROGRESS: "InProgress",
  SERVICE_ERROR: "ServiceError",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type AutomationJobStatus = (typeof AutomationJobStatus)[keyof typeof AutomationJobStatus];

/**
 * @public
 * @enum
 */
export const BlueprintStage = {
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type BlueprintStage = (typeof BlueprintStage)[keyof typeof BlueprintStage];

/**
 * @public
 * @enum
 */
export const DataAutomationStage = {
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type DataAutomationStage = (typeof DataAutomationStage)[keyof typeof DataAutomationStage];
