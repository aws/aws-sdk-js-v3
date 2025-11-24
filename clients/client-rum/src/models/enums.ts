// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Telemetry = {
  /**
   * Includes JS error event plugin
   */
  ERRORS: "errors",
  /**
   * Includes X-Ray Xhr and X-Ray Fetch plugin
   */
  HTTP: "http",
  /**
   * Includes navigation, paint, resource and web vital event plugins
   */
  PERFORMANCE: "performance",
} as const;
/**
 * @public
 */
export type Telemetry = (typeof Telemetry)[keyof typeof Telemetry];

/**
 * @public
 * @enum
 */
export const CustomEventsStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CustomEventsStatus = (typeof CustomEventsStatus)[keyof typeof CustomEventsStatus];

/**
 * @public
 * @enum
 */
export const DeobfuscationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DeobfuscationStatus = (typeof DeobfuscationStatus)[keyof typeof DeobfuscationStatus];

/**
 * @public
 * @enum
 */
export const AppMonitorPlatform = {
  ANDROID: "Android",
  IOS: "iOS",
  WEB: "Web",
} as const;
/**
 * @public
 */
export type AppMonitorPlatform = (typeof AppMonitorPlatform)[keyof typeof AppMonitorPlatform];

/**
 * @public
 * @enum
 */
export const StateEnum = {
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type StateEnum = (typeof StateEnum)[keyof typeof StateEnum];

/**
 * @public
 * @enum
 */
export const MetricDestination = {
  CloudWatch: "CloudWatch",
  Evidently: "Evidently",
} as const;
/**
 * @public
 */
export type MetricDestination = (typeof MetricDestination)[keyof typeof MetricDestination];
