// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DiscovererState = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type DiscovererState = (typeof DiscovererState)[keyof typeof DiscovererState];

/**
 * @public
 * @enum
 */
export const Type = {
  JSONSchemaDraft4: "JSONSchemaDraft4",
  OpenApi3: "OpenApi3",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const CodeGenerationStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CodeGenerationStatus = (typeof CodeGenerationStatus)[keyof typeof CodeGenerationStatus];
