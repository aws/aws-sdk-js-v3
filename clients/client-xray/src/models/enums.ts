// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EncryptionStatus = {
  ACTIVE: "ACTIVE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const InsightCategory = {
  FAULT: "FAULT",
} as const;
/**
 * @public
 */
export type InsightCategory = (typeof InsightCategory)[keyof typeof InsightCategory];

/**
 * @public
 * @enum
 */
export const InsightState = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
} as const;
/**
 * @public
 */
export type InsightState = (typeof InsightState)[keyof typeof InsightState];

/**
 * @public
 * @enum
 */
export const RetrievalStatus = {
  CANCELLED: "CANCELLED",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type RetrievalStatus = (typeof RetrievalStatus)[keyof typeof RetrievalStatus];

/**
 * @public
 * @enum
 */
export const TraceSegmentDestination = {
  CloudWatchLogs: "CloudWatchLogs",
  XRay: "XRay",
} as const;
/**
 * @public
 */
export type TraceSegmentDestination = (typeof TraceSegmentDestination)[keyof typeof TraceSegmentDestination];

/**
 * @public
 * @enum
 */
export const TraceSegmentDestinationStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type TraceSegmentDestinationStatus =
  (typeof TraceSegmentDestinationStatus)[keyof typeof TraceSegmentDestinationStatus];

/**
 * @public
 * @enum
 */
export const SamplingStrategyName = {
  FixedRate: "FixedRate",
  PartialScan: "PartialScan",
} as const;
/**
 * @public
 */
export type SamplingStrategyName = (typeof SamplingStrategyName)[keyof typeof SamplingStrategyName];

/**
 * @public
 * @enum
 */
export const TimeRangeType = {
  Event: "Event",
  Service: "Service",
  TraceId: "TraceId",
} as const;
/**
 * @public
 */
export type TimeRangeType = (typeof TimeRangeType)[keyof typeof TimeRangeType];

/**
 * @public
 * @enum
 */
export const TraceFormatType = {
  OTEL: "OTEL",
  XRAY: "XRAY",
} as const;
/**
 * @public
 */
export type TraceFormatType = (typeof TraceFormatType)[keyof typeof TraceFormatType];
