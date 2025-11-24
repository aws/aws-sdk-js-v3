// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ContainerFormat = {
  FragmentedMP4: "FRAGMENTED_MP4",
  TS: "TS",
} as const;
/**
 * @public
 */
export type ContainerFormat = (typeof ContainerFormat)[keyof typeof ContainerFormat];

/**
 * @public
 * @enum
 */
export const ChannelLatencyMode = {
  LowLatency: "LOW",
  NormalLatency: "NORMAL",
} as const;
/**
 * @public
 */
export type ChannelLatencyMode = (typeof ChannelLatencyMode)[keyof typeof ChannelLatencyMode];

/**
 * @public
 * @enum
 */
export const MultitrackMaximumResolution = {
  FULL_HD: "FULL_HD",
  HD: "HD",
  SD: "SD",
} as const;
/**
 * @public
 */
export type MultitrackMaximumResolution =
  (typeof MultitrackMaximumResolution)[keyof typeof MultitrackMaximumResolution];

/**
 * @public
 * @enum
 */
export const MultitrackPolicy = {
  ALLOW: "ALLOW",
  REQUIRE: "REQUIRE",
} as const;
/**
 * @public
 */
export type MultitrackPolicy = (typeof MultitrackPolicy)[keyof typeof MultitrackPolicy];

/**
 * @public
 * @enum
 */
export const TranscodePreset = {
  ConstrainedBandwidthTranscodePreset: "CONSTRAINED_BANDWIDTH_DELIVERY",
  HigherBandwidthTranscodePreset: "HIGHER_BANDWIDTH_DELIVERY",
} as const;
/**
 * @public
 */
export type TranscodePreset = (typeof TranscodePreset)[keyof typeof TranscodePreset];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  AdvancedHDChannelType: "ADVANCED_HD",
  AdvancedSDChannelType: "ADVANCED_SD",
  BasicChannelType: "BASIC",
  StandardChannelType: "STANDARD",
} as const;
/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * @enum
 */
export const RenditionConfigurationRendition = {
  FULL_HD: "FULL_HD",
  HD: "HD",
  LOWEST_RESOLUTION: "LOWEST_RESOLUTION",
  SD: "SD",
} as const;
/**
 * @public
 */
export type RenditionConfigurationRendition =
  (typeof RenditionConfigurationRendition)[keyof typeof RenditionConfigurationRendition];

/**
 * @public
 * @enum
 */
export const RenditionConfigurationRenditionSelection = {
  ALL: "ALL",
  CUSTOM: "CUSTOM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type RenditionConfigurationRenditionSelection =
  (typeof RenditionConfigurationRenditionSelection)[keyof typeof RenditionConfigurationRenditionSelection];

/**
 * @public
 * @enum
 */
export const RecordingMode = {
  Disabled: "DISABLED",
  Interval: "INTERVAL",
} as const;
/**
 * @public
 */
export type RecordingMode = (typeof RecordingMode)[keyof typeof RecordingMode];

/**
 * @public
 * @enum
 */
export const ThumbnailConfigurationResolution = {
  FULL_HD: "FULL_HD",
  HD: "HD",
  LOWEST_RESOLUTION: "LOWEST_RESOLUTION",
  SD: "SD",
} as const;
/**
 * @public
 */
export type ThumbnailConfigurationResolution =
  (typeof ThumbnailConfigurationResolution)[keyof typeof ThumbnailConfigurationResolution];

/**
 * @public
 * @enum
 */
export const ThumbnailConfigurationStorage = {
  LATEST: "LATEST",
  SEQUENTIAL: "SEQUENTIAL",
} as const;
/**
 * @public
 */
export type ThumbnailConfigurationStorage =
  (typeof ThumbnailConfigurationStorage)[keyof typeof ThumbnailConfigurationStorage];

/**
 * @public
 * @enum
 */
export const RecordingConfigurationState = {
  Active: "ACTIVE",
  CreateFailed: "CREATE_FAILED",
  Creating: "CREATING",
} as const;
/**
 * @public
 */
export type RecordingConfigurationState =
  (typeof RecordingConfigurationState)[keyof typeof RecordingConfigurationState];

/**
 * @public
 * @enum
 */
export const StreamHealth = {
  Starving: "STARVING",
  StreamHealthy: "HEALTHY",
  Unknown: "UNKNOWN",
} as const;
/**
 * @public
 */
export type StreamHealth = (typeof StreamHealth)[keyof typeof StreamHealth];

/**
 * @public
 * @enum
 */
export const StreamState = {
  StreamLive: "LIVE",
  StreamOffline: "OFFLINE",
} as const;
/**
 * @public
 */
export type StreamState = (typeof StreamState)[keyof typeof StreamState];
