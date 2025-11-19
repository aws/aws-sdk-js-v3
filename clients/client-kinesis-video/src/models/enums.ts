// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const APIName = {
  GET_CLIP: "GET_CLIP",
  GET_DASH_STREAMING_SESSION_URL: "GET_DASH_STREAMING_SESSION_URL",
  GET_HLS_STREAMING_SESSION_URL: "GET_HLS_STREAMING_SESSION_URL",
  GET_IMAGES: "GET_IMAGES",
  GET_MEDIA: "GET_MEDIA",
  GET_MEDIA_FOR_FRAGMENT_LIST: "GET_MEDIA_FOR_FRAGMENT_LIST",
  LIST_FRAGMENTS: "LIST_FRAGMENTS",
  PUT_MEDIA: "PUT_MEDIA",
} as const;
/**
 * @public
 */
export type APIName = (typeof APIName)[keyof typeof APIName];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  FULL_MESH: "FULL_MESH",
  SINGLE_MASTER: "SINGLE_MASTER",
} as const;
/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  BEGINS_WITH: "BEGINS_WITH",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const ChannelProtocol = {
  HTTPS: "HTTPS",
  WEBRTC: "WEBRTC",
  WSS: "WSS",
} as const;
/**
 * @public
 */
export type ChannelProtocol = (typeof ChannelProtocol)[keyof typeof ChannelProtocol];

/**
 * @public
 * @enum
 */
export const ChannelRole = {
  MASTER: "MASTER",
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type ChannelRole = (typeof ChannelRole)[keyof typeof ChannelRole];

/**
 * @public
 * @enum
 */
export const ConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ConfigurationStatus = (typeof ConfigurationStatus)[keyof typeof ConfigurationStatus];

/**
 * @public
 * @enum
 */
export const StrategyOnFullSize = {
  DELETE_OLDEST_MEDIA: "DELETE_OLDEST_MEDIA",
  DENY_NEW_MEDIA: "DENY_NEW_MEDIA",
} as const;
/**
 * @public
 */
export type StrategyOnFullSize = (typeof StrategyOnFullSize)[keyof typeof StrategyOnFullSize];

/**
 * @public
 * @enum
 */
export const RecorderStatus = {
  SUCCESS: "SUCCESS",
  SYSTEM_ERROR: "SYSTEM_ERROR",
  USER_ERROR: "USER_ERROR",
} as const;
/**
 * @public
 */
export type RecorderStatus = (typeof RecorderStatus)[keyof typeof RecorderStatus];

/**
 * @public
 * @enum
 */
export const UploaderStatus = {
  SUCCESS: "SUCCESS",
  SYSTEM_ERROR: "SYSTEM_ERROR",
  USER_ERROR: "USER_ERROR",
} as const;
/**
 * @public
 */
export type UploaderStatus = (typeof UploaderStatus)[keyof typeof UploaderStatus];

/**
 * @public
 * @enum
 */
export const MediaUriType = {
  FILE_URI: "FILE_URI",
  RTSP_URI: "RTSP_URI",
} as const;
/**
 * @public
 */
export type MediaUriType = (typeof MediaUriType)[keyof typeof MediaUriType];

/**
 * @public
 * @enum
 */
export const SyncStatus = {
  ACKNOWLEDGED: "ACKNOWLEDGED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  DELETING_ACKNOWLEDGED: "DELETING_ACKNOWLEDGED",
  IN_SYNC: "IN_SYNC",
  SYNCING: "SYNCING",
  SYNC_FAILED: "SYNC_FAILED",
} as const;
/**
 * @public
 */
export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus];

/**
 * @public
 * @enum
 */
export const Format = {
  JPEG: "JPEG",
  PNG: "PNG",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const FormatConfigKey = {
  JPEGQuality: "JPEGQuality",
} as const;
/**
 * @public
 */
export type FormatConfigKey = (typeof FormatConfigKey)[keyof typeof FormatConfigKey];

/**
 * @public
 * @enum
 */
export const ImageSelectorType = {
  PRODUCER_TIMESTAMP: "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP: "SERVER_TIMESTAMP",
} as const;
/**
 * @public
 */
export type ImageSelectorType = (typeof ImageSelectorType)[keyof typeof ImageSelectorType];

/**
 * @public
 * @enum
 */
export const MediaStorageConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MediaStorageConfigurationStatus =
  (typeof MediaStorageConfigurationStatus)[keyof typeof MediaStorageConfigurationStatus];

/**
 * @public
 * @enum
 */
export const UpdateDataRetentionOperation = {
  DECREASE_DATA_RETENTION: "DECREASE_DATA_RETENTION",
  INCREASE_DATA_RETENTION: "INCREASE_DATA_RETENTION",
} as const;
/**
 * @public
 */
export type UpdateDataRetentionOperation =
  (typeof UpdateDataRetentionOperation)[keyof typeof UpdateDataRetentionOperation];
