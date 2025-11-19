// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AdsInteractionExcludeEventType = {
  AD_MARKER_FOUND: "AD_MARKER_FOUND",
  BEACON_FIRED: "BEACON_FIRED",
  EMPTY_VAST_RESPONSE: "EMPTY_VAST_RESPONSE",
  EMPTY_VMAP_RESPONSE: "EMPTY_VMAP_RESPONSE",
  ERROR_ADS_INVALID_RESPONSE: "ERROR_ADS_INVALID_RESPONSE",
  ERROR_ADS_IO: "ERROR_ADS_IO",
  ERROR_ADS_RESPONSE_PARSE: "ERROR_ADS_RESPONSE_PARSE",
  ERROR_ADS_RESPONSE_UNKNOWN_ROOT_ELEMENT: "ERROR_ADS_RESPONSE_UNKNOWN_ROOT_ELEMENT",
  ERROR_ADS_TIMEOUT: "ERROR_ADS_TIMEOUT",
  ERROR_DISALLOWED_HOST: "ERROR_DISALLOWED_HOST",
  ERROR_FIRING_BEACON_FAILED: "ERROR_FIRING_BEACON_FAILED",
  ERROR_PERSONALIZATION_DISABLED: "ERROR_PERSONALIZATION_DISABLED",
  ERROR_UNKNOWN: "ERROR_UNKNOWN",
  ERROR_UNKNOWN_HOST: "ERROR_UNKNOWN_HOST",
  ERROR_VAST_INVALID_MEDIA_FILE: "ERROR_VAST_INVALID_MEDIA_FILE",
  ERROR_VAST_INVALID_VAST_AD_TAG_URI: "ERROR_VAST_INVALID_VAST_AD_TAG_URI",
  ERROR_VAST_MISSING_CREATIVES: "ERROR_VAST_MISSING_CREATIVES",
  ERROR_VAST_MISSING_IMPRESSION: "ERROR_VAST_MISSING_IMPRESSION",
  ERROR_VAST_MISSING_MEDIAFILES: "ERROR_VAST_MISSING_MEDIAFILES",
  ERROR_VAST_MISSING_OVERLAYS: "ERROR_VAST_MISSING_OVERLAYS",
  ERROR_VAST_MULTIPLE_LINEAR: "ERROR_VAST_MULTIPLE_LINEAR",
  ERROR_VAST_MULTIPLE_TRACKING_EVENTS: "ERROR_VAST_MULTIPLE_TRACKING_EVENTS",
  ERROR_VAST_REDIRECT_EMPTY_RESPONSE: "ERROR_VAST_REDIRECT_EMPTY_RESPONSE",
  ERROR_VAST_REDIRECT_FAILED: "ERROR_VAST_REDIRECT_FAILED",
  ERROR_VAST_REDIRECT_MULTIPLE_VAST: "ERROR_VAST_REDIRECT_MULTIPLE_VAST",
  FILLED_AVAIL: "FILLED_AVAIL",
  FILLED_OVERLAY_AVAIL: "FILLED_OVERLAY_AVAIL",
  INTERSTITIAL_VOD_FAILURE: "INTERSTITIAL_VOD_FAILURE",
  INTERSTITIAL_VOD_SUCCESS: "INTERSTITIAL_VOD_SUCCESS",
  MAKING_ADS_REQUEST: "MAKING_ADS_REQUEST",
  MODIFIED_TARGET_URL: "MODIFIED_TARGET_URL",
  NON_AD_MARKER_FOUND: "NON_AD_MARKER_FOUND",
  REDIRECTED_VAST_RESPONSE: "REDIRECTED_VAST_RESPONSE",
  VAST_REDIRECT: "VAST_REDIRECT",
  VAST_RESPONSE: "VAST_RESPONSE",
  VOD_TIME_BASED_AVAIL_PLAN_SUCCESS: "VOD_TIME_BASED_AVAIL_PLAN_SUCCESS",
  VOD_TIME_BASED_AVAIL_PLAN_VAST_RESPONSE_FOR_OFFSET: "VOD_TIME_BASED_AVAIL_PLAN_VAST_RESPONSE_FOR_OFFSET",
  VOD_TIME_BASED_AVAIL_PLAN_WARNING_NO_ADVERTISEMENTS: "VOD_TIME_BASED_AVAIL_PLAN_WARNING_NO_ADVERTISEMENTS",
  WARNING_NO_ADVERTISEMENTS: "WARNING_NO_ADVERTISEMENTS",
  WARNING_URL_VARIABLE_SUBSTITUTION_FAILED: "WARNING_URL_VARIABLE_SUBSTITUTION_FAILED",
  WARNING_VPAID_AD_DROPPED: "WARNING_VPAID_AD_DROPPED",
} as const;
/**
 * @public
 */
export type AdsInteractionExcludeEventType =
  (typeof AdsInteractionExcludeEventType)[keyof typeof AdsInteractionExcludeEventType];

/**
 * @public
 * @enum
 */
export const AdsInteractionPublishOptInEventType = {
  RAW_ADS_RESPONSE: "RAW_ADS_RESPONSE",
} as const;
/**
 * @public
 */
export type AdsInteractionPublishOptInEventType =
  (typeof AdsInteractionPublishOptInEventType)[keyof typeof AdsInteractionPublishOptInEventType];

/**
 * @public
 * @enum
 */
export const MessageType = {
  SPLICE_INSERT: "SPLICE_INSERT",
  TIME_SIGNAL: "TIME_SIGNAL",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * @enum
 */
export const AlertCategory = {
  INFO: "INFO",
  PLAYBACK_WARNING: "PLAYBACK_WARNING",
  SCHEDULING_ERROR: "SCHEDULING_ERROR",
} as const;
/**
 * @public
 */
export type AlertCategory = (typeof AlertCategory)[keyof typeof AlertCategory];

/**
 * @public
 * @enum
 */
export const Operator = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const LogType = {
  AS_RUN: "AS_RUN",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const AdMarkupType = {
  DATERANGE: "DATERANGE",
  SCTE35_ENHANCED: "SCTE35_ENHANCED",
} as const;
/**
 * @public
 */
export type AdMarkupType = (typeof AdMarkupType)[keyof typeof AdMarkupType];

/**
 * @public
 * @enum
 */
export const Type = {
  DASH: "DASH",
  HLS: "HLS",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const LoggingStrategy = {
  LEGACY_CLOUDWATCH: "LEGACY_CLOUDWATCH",
  VENDED_LOGS: "VENDED_LOGS",
} as const;
/**
 * @public
 */
export type LoggingStrategy = (typeof LoggingStrategy)[keyof typeof LoggingStrategy];

/**
 * @public
 * @enum
 */
export const StreamingMediaFileConditioning = {
  NONE: "NONE",
  TRANSCODE: "TRANSCODE",
} as const;
/**
 * @public
 */
export type StreamingMediaFileConditioning =
  (typeof StreamingMediaFileConditioning)[keyof typeof StreamingMediaFileConditioning];

/**
 * @public
 * @enum
 */
export const FillPolicy = {
  FULL_AVAIL_ONLY: "FULL_AVAIL_ONLY",
  PARTIAL_AVAIL: "PARTIAL_AVAIL",
} as const;
/**
 * @public
 */
export type FillPolicy = (typeof FillPolicy)[keyof typeof FillPolicy];

/**
 * @public
 * @enum
 */
export const Mode = {
  AFTER_LIVE_EDGE: "AFTER_LIVE_EDGE",
  BEHIND_LIVE_EDGE: "BEHIND_LIVE_EDGE",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const OriginManifestType = {
  MULTI_PERIOD: "MULTI_PERIOD",
  SINGLE_PERIOD: "SINGLE_PERIOD",
} as const;
/**
 * @public
 */
export type OriginManifestType = (typeof OriginManifestType)[keyof typeof OriginManifestType];

/**
 * @public
 * @enum
 */
export const InsertionMode = {
  PLAYER_SELECT: "PLAYER_SELECT",
  STITCHED_ONLY: "STITCHED_ONLY",
} as const;
/**
 * @public
 */
export type InsertionMode = (typeof InsertionMode)[keyof typeof InsertionMode];

/**
 * @public
 * @enum
 */
export const ManifestServiceExcludeEventType = {
  CONFIG_SECURITY_ERROR: "CONFIG_SECURITY_ERROR",
  CONFIG_SYNTAX_ERROR: "CONFIG_SYNTAX_ERROR",
  CONNECTION_ERROR: "CONNECTION_ERROR",
  ERROR_ADS_INTERPOLATION: "ERROR_ADS_INTERPOLATION",
  ERROR_BUMPER_END_INTERPOLATION: "ERROR_BUMPER_END_INTERPOLATION",
  ERROR_BUMPER_START_INTERPOLATION: "ERROR_BUMPER_START_INTERPOLATION",
  ERROR_CDN_AD_SEGMENT_INTERPOLATION: "ERROR_CDN_AD_SEGMENT_INTERPOLATION",
  ERROR_CDN_CONTENT_SEGMENT_INTERPOLATION: "ERROR_CDN_CONTENT_SEGMENT_INTERPOLATION",
  ERROR_LIVE_PRE_ROLL_ADS_INTERPOLATION: "ERROR_LIVE_PRE_ROLL_ADS_INTERPOLATION",
  ERROR_ORIGIN_PREFIX_INTERPOLATION: "ERROR_ORIGIN_PREFIX_INTERPOLATION",
  ERROR_PROFILE_NAME_INTERPOLATION: "ERROR_PROFILE_NAME_INTERPOLATION",
  ERROR_SLATE_AD_URL_INTERPOLATION: "ERROR_SLATE_AD_URL_INTERPOLATION",
  GENERATED_MANIFEST: "GENERATED_MANIFEST",
  HOST_DISALLOWED: "HOST_DISALLOWED",
  INCOMPATIBLE_HLS_VERSION: "INCOMPATIBLE_HLS_VERSION",
  INVALID_SINGLE_PERIOD_DASH_MANIFEST: "INVALID_SINGLE_PERIOD_DASH_MANIFEST",
  IO_ERROR: "IO_ERROR",
  LAST_PERIOD_MISSING_AUDIO: "LAST_PERIOD_MISSING_AUDIO",
  LAST_PERIOD_MISSING_AUDIO_WARNING: "LAST_PERIOD_MISSING_AUDIO_WARNING",
  MANIFEST_ERROR: "MANIFEST_ERROR",
  NO_MASTER_OR_MEDIA_PLAYLIST: "NO_MASTER_OR_MEDIA_PLAYLIST",
  NO_MASTER_PLAYLIST: "NO_MASTER_PLAYLIST",
  NO_MEDIA_PLAYLIST: "NO_MEDIA_PLAYLIST",
  ORIGIN_MANIFEST: "ORIGIN_MANIFEST",
  PARSING_ERROR: "PARSING_ERROR",
  SCTE35_PARSING_ERROR: "SCTE35_PARSING_ERROR",
  SESSION_INITIALIZED: "SESSION_INITIALIZED",
  TIMEOUT_ERROR: "TIMEOUT_ERROR",
  TRACKING_RESPONSE: "TRACKING_RESPONSE",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  UNKNOWN_HOST: "UNKNOWN_HOST",
  UNSUPPORTED_SINGLE_PERIOD_DASH_MANIFEST: "UNSUPPORTED_SINGLE_PERIOD_DASH_MANIFEST",
} as const;
/**
 * @public
 */
export type ManifestServiceExcludeEventType =
  (typeof ManifestServiceExcludeEventType)[keyof typeof ManifestServiceExcludeEventType];

/**
 * @public
 * @enum
 */
export const TrafficShapingType = {
  RETRIEVAL_WINDOW: "RETRIEVAL_WINDOW",
  TPS: "TPS",
} as const;
/**
 * @public
 */
export type TrafficShapingType = (typeof TrafficShapingType)[keyof typeof TrafficShapingType];

/**
 * @public
 * @enum
 */
export const PrefetchScheduleType = {
  RECURRING: "RECURRING",
  SINGLE: "SINGLE",
} as const;
/**
 * @public
 */
export type PrefetchScheduleType = (typeof PrefetchScheduleType)[keyof typeof PrefetchScheduleType];

/**
 * @public
 * @enum
 */
export const ScheduleEntryType = {
  ALTERNATE_MEDIA: "ALTERNATE_MEDIA",
  FILLER_SLATE: "FILLER_SLATE",
  PROGRAM: "PROGRAM",
} as const;
/**
 * @public
 */
export type ScheduleEntryType = (typeof ScheduleEntryType)[keyof typeof ScheduleEntryType];

/**
 * @public
 * @enum
 */
export const AccessType = {
  AUTODETECT_SIGV4: "AUTODETECT_SIGV4",
  S3_SIGV4: "S3_SIGV4",
  SECRETS_MANAGER_ACCESS_TOKEN: "SECRETS_MANAGER_ACCESS_TOKEN",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const PlaybackMode = {
  LINEAR: "LINEAR",
  LOOP: "LOOP",
} as const;
/**
 * @public
 */
export type PlaybackMode = (typeof PlaybackMode)[keyof typeof PlaybackMode];

/**
 * @public
 * @enum
 */
export const Tier = {
  BASIC: "BASIC",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

/**
 * @public
 * @enum
 */
export const ChannelState = {
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type ChannelState = (typeof ChannelState)[keyof typeof ChannelState];

/**
 * @public
 * @enum
 */
export const RelativePosition = {
  AFTER_PROGRAM: "AFTER_PROGRAM",
  BEFORE_PROGRAM: "BEFORE_PROGRAM",
} as const;
/**
 * @public
 */
export type RelativePosition = (typeof RelativePosition)[keyof typeof RelativePosition];

/**
 * @public
 * @enum
 */
export const ListPrefetchScheduleType = {
  ALL: "ALL",
  RECURRING: "RECURRING",
  SINGLE: "SINGLE",
} as const;
/**
 * @public
 */
export type ListPrefetchScheduleType = (typeof ListPrefetchScheduleType)[keyof typeof ListPrefetchScheduleType];
