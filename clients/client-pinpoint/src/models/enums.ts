// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const __EndpointTypesElement = {
  ADM: "ADM",
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  APNS_VOIP: "APNS_VOIP",
  APNS_VOIP_SANDBOX: "APNS_VOIP_SANDBOX",
  BAIDU: "BAIDU",
  CUSTOM: "CUSTOM",
  EMAIL: "EMAIL",
  GCM: "GCM",
  IN_APP: "IN_APP",
  PUSH: "PUSH",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type __EndpointTypesElement = (typeof __EndpointTypesElement)[keyof typeof __EndpointTypesElement];

/**
 * @public
 * @enum
 */
export const __TimezoneEstimationMethodsElement = {
  PHONE_NUMBER: "PHONE_NUMBER",
  POSTAL_CODE: "POSTAL_CODE",
} as const;
/**
 * @public
 */
export type __TimezoneEstimationMethodsElement =
  (typeof __TimezoneEstimationMethodsElement)[keyof typeof __TimezoneEstimationMethodsElement];

/**
 * @public
 * @enum
 */
export const Action = {
  DEEP_LINK: "DEEP_LINK",
  OPEN_APP: "OPEN_APP",
  URL: "URL",
} as const;
/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const AttributeType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
  ON: "ON",
} as const;
/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

/**
 * @public
 * @enum
 */
export const DimensionType = {
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
} as const;
/**
 * @public
 */
export type DimensionType = (typeof DimensionType)[keyof typeof DimensionType];

/**
 * @public
 * @enum
 */
export const Duration = {
  DAY_14: "DAY_14",
  DAY_30: "DAY_30",
  DAY_7: "DAY_7",
  HR_24: "HR_24",
} as const;
/**
 * @public
 */
export type Duration = (typeof Duration)[keyof typeof Duration];

/**
 * @public
 * @enum
 */
export const RecencyType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type RecencyType = (typeof RecencyType)[keyof typeof RecencyType];

/**
 * @public
 * @enum
 */
export const Operator = {
  ALL: "ALL",
  ANY: "ANY",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const MessageType = {
  PROMOTIONAL: "PROMOTIONAL",
  TRANSACTIONAL: "TRANSACTIONAL",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  ADM: "ADM",
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  APNS_VOIP: "APNS_VOIP",
  APNS_VOIP_SANDBOX: "APNS_VOIP_SANDBOX",
  BAIDU: "BAIDU",
  CUSTOM: "CUSTOM",
  EMAIL: "EMAIL",
  GCM: "GCM",
  IN_APP: "IN_APP",
  PUSH: "PUSH",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * @enum
 */
export const Alignment = {
  CENTER: "CENTER",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;
/**
 * @public
 */
export type Alignment = (typeof Alignment)[keyof typeof Alignment];

/**
 * @public
 * @enum
 */
export const Mode = {
  DELIVERY: "DELIVERY",
  FILTER: "FILTER",
} as const;
/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const ButtonAction = {
  CLOSE: "CLOSE",
  DEEP_LINK: "DEEP_LINK",
  LINK: "LINK",
} as const;
/**
 * @public
 */
export type ButtonAction = (typeof ButtonAction)[keyof typeof ButtonAction];

/**
 * @public
 * @enum
 */
export const FilterType = {
  ENDPOINT: "ENDPOINT",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * @public
 * @enum
 */
export const Layout = {
  BOTTOM_BANNER: "BOTTOM_BANNER",
  CAROUSEL: "CAROUSEL",
  MIDDLE_BANNER: "MIDDLE_BANNER",
  MOBILE_FEED: "MOBILE_FEED",
  OVERLAYS: "OVERLAYS",
  TOP_BANNER: "TOP_BANNER",
} as const;
/**
 * @public
 */
export type Layout = (typeof Layout)[keyof typeof Layout];

/**
 * @public
 * @enum
 */
export const Frequency = {
  DAILY: "DAILY",
  EVENT: "EVENT",
  HOURLY: "HOURLY",
  IN_APP_EVENT: "IN_APP_EVENT",
  MONTHLY: "MONTHLY",
  ONCE: "ONCE",
  WEEKLY: "WEEKLY",
} as const;
/**
 * @public
 */
export type Frequency = (typeof Frequency)[keyof typeof Frequency];

/**
 * @public
 * @enum
 */
export const CampaignStatus = {
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  EXECUTING: "EXECUTING",
  INVALID: "INVALID",
  PAUSED: "PAUSED",
  PENDING_NEXT_RUN: "PENDING_NEXT_RUN",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  COMPLETING: "COMPLETING",
  CREATED: "CREATED",
  FAILED: "FAILED",
  FAILING: "FAILING",
  INITIALIZING: "INITIALIZING",
  PENDING_JOB: "PENDING_JOB",
  PREPARING_FOR_INITIALIZATION: "PREPARING_FOR_INITIALIZATION",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  CANCELLED: "CANCELLED",
  CLOSED: "CLOSED",
  COMPLETED: "COMPLETED",
  DRAFT: "DRAFT",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const SourceType = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const Type = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const Include = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Include = (typeof Include)[keyof typeof Include];

/**
 * @public
 * @enum
 */
export const SegmentType = {
  DIMENSIONAL: "DIMENSIONAL",
  IMPORT: "IMPORT",
} as const;
/**
 * @public
 */
export type SegmentType = (typeof SegmentType)[keyof typeof SegmentType];

/**
 * @public
 * @enum
 */
export const DeliveryStatus = {
  DUPLICATE: "DUPLICATE",
  OPT_OUT: "OPT_OUT",
  PERMANENT_FAILURE: "PERMANENT_FAILURE",
  SUCCESSFUL: "SUCCESSFUL",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
  THROTTLED: "THROTTLED",
  UNKNOWN_FAILURE: "UNKNOWN_FAILURE",
} as const;
/**
 * @public
 */
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

/**
 * @public
 * @enum
 */
export const TemplateType = {
  EMAIL: "EMAIL",
  INAPP: "INAPP",
  PUSH: "PUSH",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

/**
 * @public
 * @enum
 */
export const JourneyRunStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type JourneyRunStatus = (typeof JourneyRunStatus)[keyof typeof JourneyRunStatus];
