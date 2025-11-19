// smithy-typescript generated code
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
