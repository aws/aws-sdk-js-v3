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

/**
 * @public
 * @enum
 */
export const CustomOutputStatus = {
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
} as const;
/**
 * @public
 */
export type CustomOutputStatus = (typeof CustomOutputStatus)[keyof typeof CustomOutputStatus];

/**
 * @public
 * @enum
 */
export const SemanticModality = {
  AUDIO: "AUDIO",
  DOCUMENT: "DOCUMENT",
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type SemanticModality = (typeof SemanticModality)[keyof typeof SemanticModality];
