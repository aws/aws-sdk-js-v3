// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ClipFragmentSelectorType = {
  PRODUCER_TIMESTAMP: "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP: "SERVER_TIMESTAMP",
} as const;
/**
 * @public
 */
export type ClipFragmentSelectorType = (typeof ClipFragmentSelectorType)[keyof typeof ClipFragmentSelectorType];

/**
 * @public
 * @enum
 */
export const DASHFragmentSelectorType = {
  PRODUCER_TIMESTAMP: "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP: "SERVER_TIMESTAMP",
} as const;
/**
 * @public
 */
export type DASHFragmentSelectorType = (typeof DASHFragmentSelectorType)[keyof typeof DASHFragmentSelectorType];

/**
 * @public
 * @enum
 */
export const DASHDisplayFragmentNumber = {
  ALWAYS: "ALWAYS",
  NEVER: "NEVER",
} as const;
/**
 * @public
 */
export type DASHDisplayFragmentNumber = (typeof DASHDisplayFragmentNumber)[keyof typeof DASHDisplayFragmentNumber];

/**
 * @public
 * @enum
 */
export const DASHDisplayFragmentTimestamp = {
  ALWAYS: "ALWAYS",
  NEVER: "NEVER",
} as const;
/**
 * @public
 */
export type DASHDisplayFragmentTimestamp =
  (typeof DASHDisplayFragmentTimestamp)[keyof typeof DASHDisplayFragmentTimestamp];

/**
 * @public
 * @enum
 */
export const DASHPlaybackMode = {
  LIVE: "LIVE",
  LIVE_REPLAY: "LIVE_REPLAY",
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type DASHPlaybackMode = (typeof DASHPlaybackMode)[keyof typeof DASHPlaybackMode];

/**
 * @public
 * @enum
 */
export const ContainerFormat = {
  FRAGMENTED_MP4: "FRAGMENTED_MP4",
  MPEG_TS: "MPEG_TS",
} as const;
/**
 * @public
 */
export type ContainerFormat = (typeof ContainerFormat)[keyof typeof ContainerFormat];

/**
 * @public
 * @enum
 */
export const HLSDiscontinuityMode = {
  ALWAYS: "ALWAYS",
  NEVER: "NEVER",
  ON_DISCONTINUITY: "ON_DISCONTINUITY",
} as const;
/**
 * @public
 */
export type HLSDiscontinuityMode = (typeof HLSDiscontinuityMode)[keyof typeof HLSDiscontinuityMode];

/**
 * @public
 * @enum
 */
export const HLSDisplayFragmentTimestamp = {
  ALWAYS: "ALWAYS",
  NEVER: "NEVER",
} as const;
/**
 * @public
 */
export type HLSDisplayFragmentTimestamp =
  (typeof HLSDisplayFragmentTimestamp)[keyof typeof HLSDisplayFragmentTimestamp];

/**
 * @public
 * @enum
 */
export const HLSFragmentSelectorType = {
  PRODUCER_TIMESTAMP: "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP: "SERVER_TIMESTAMP",
} as const;
/**
 * @public
 */
export type HLSFragmentSelectorType = (typeof HLSFragmentSelectorType)[keyof typeof HLSFragmentSelectorType];

/**
 * @public
 * @enum
 */
export const HLSPlaybackMode = {
  LIVE: "LIVE",
  LIVE_REPLAY: "LIVE_REPLAY",
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type HLSPlaybackMode = (typeof HLSPlaybackMode)[keyof typeof HLSPlaybackMode];

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
export const ImageError = {
  MEDIA_ERROR: "MEDIA_ERROR",
  NO_MEDIA: "NO_MEDIA",
} as const;
/**
 * @public
 */
export type ImageError = (typeof ImageError)[keyof typeof ImageError];

/**
 * @public
 * @enum
 */
export const FragmentSelectorType = {
  PRODUCER_TIMESTAMP: "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP: "SERVER_TIMESTAMP",
} as const;
/**
 * @public
 */
export type FragmentSelectorType = (typeof FragmentSelectorType)[keyof typeof FragmentSelectorType];
