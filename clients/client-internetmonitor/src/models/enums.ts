// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const LocalHealthEventsConfigStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type LocalHealthEventsConfigStatus =
  (typeof LocalHealthEventsConfigStatus)[keyof typeof LocalHealthEventsConfigStatus];

/**
 * @public
 * @enum
 */
export const LogDeliveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type LogDeliveryStatus = (typeof LogDeliveryStatus)[keyof typeof LogDeliveryStatus];

/**
 * @public
 * @enum
 */
export const MonitorConfigState = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type MonitorConfigState = (typeof MonitorConfigState)[keyof typeof MonitorConfigState];

/**
 * @public
 * @enum
 */
export const Operator = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const TriangulationEventType = {
  AWS: "AWS",
  INTERNET: "Internet",
} as const;
/**
 * @public
 */
export type TriangulationEventType = (typeof TriangulationEventType)[keyof typeof TriangulationEventType];

/**
 * @public
 * @enum
 */
export const HealthEventStatus = {
  ACTIVE: "ACTIVE",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type HealthEventStatus = (typeof HealthEventStatus)[keyof typeof HealthEventStatus];

/**
 * @public
 * @enum
 */
export const HealthEventImpactType = {
  AVAILABILITY: "AVAILABILITY",
  LOCAL_AVAILABILITY: "LOCAL_AVAILABILITY",
  LOCAL_PERFORMANCE: "LOCAL_PERFORMANCE",
  PERFORMANCE: "PERFORMANCE",
} as const;
/**
 * @public
 */
export type HealthEventImpactType = (typeof HealthEventImpactType)[keyof typeof HealthEventImpactType];

/**
 * @public
 * @enum
 */
export const InternetEventStatus = {
  ACTIVE: "ACTIVE",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type InternetEventStatus = (typeof InternetEventStatus)[keyof typeof InternetEventStatus];

/**
 * @public
 * @enum
 */
export const InternetEventType = {
  AVAILABILITY: "AVAILABILITY",
  PERFORMANCE: "PERFORMANCE",
} as const;
/**
 * @public
 */
export type InternetEventType = (typeof InternetEventType)[keyof typeof InternetEventType];

/**
 * @public
 * @enum
 */
export const MonitorProcessingStatusCode = {
  COLLECTING_DATA: "COLLECTING_DATA",
  FAULT_ACCESS_CLOUDWATCH: "FAULT_ACCESS_CLOUDWATCH",
  FAULT_SERVICE: "FAULT_SERVICE",
  INACTIVE: "INACTIVE",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;
/**
 * @public
 */
export type MonitorProcessingStatusCode =
  (typeof MonitorProcessingStatusCode)[keyof typeof MonitorProcessingStatusCode];

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 * @enum
 */
export const QueryType = {
  MEASUREMENTS: "MEASUREMENTS",
  OVERALL_TRAFFIC_SUGGESTIONS: "OVERALL_TRAFFIC_SUGGESTIONS",
  OVERALL_TRAFFIC_SUGGESTIONS_DETAILS: "OVERALL_TRAFFIC_SUGGESTIONS_DETAILS",
  ROUTING_SUGGESTIONS: "ROUTING_SUGGESTIONS",
  TOP_LOCATIONS: "TOP_LOCATIONS",
  TOP_LOCATION_DETAILS: "TOP_LOCATION_DETAILS",
} as const;
/**
 * @public
 */
export type QueryType = (typeof QueryType)[keyof typeof QueryType];
