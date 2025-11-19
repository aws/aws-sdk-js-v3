// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const __AdTriggersElement = {
  BREAK: "BREAK",
  DISTRIBUTOR_ADVERTISEMENT: "DISTRIBUTOR_ADVERTISEMENT",
  DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY: "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
  DISTRIBUTOR_PLACEMENT_OPPORTUNITY: "DISTRIBUTOR_PLACEMENT_OPPORTUNITY",
  PROVIDER_ADVERTISEMENT: "PROVIDER_ADVERTISEMENT",
  PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY: "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY",
  PROVIDER_PLACEMENT_OPPORTUNITY: "PROVIDER_PLACEMENT_OPPORTUNITY",
  SPLICE_INSERT: "SPLICE_INSERT",
} as const;
/**
 * @public
 */
export type __AdTriggersElement = (typeof __AdTriggersElement)[keyof typeof __AdTriggersElement];

/**
 * @public
 * @enum
 */
export const __PeriodTriggersElement = {
  ADS: "ADS",
} as const;
/**
 * @public
 */
export type __PeriodTriggersElement = (typeof __PeriodTriggersElement)[keyof typeof __PeriodTriggersElement];

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const AdMarkers = {
  DATERANGE: "DATERANGE",
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
  SCTE35_ENHANCED: "SCTE35_ENHANCED",
} as const;
/**
 * @public
 */
export type AdMarkers = (typeof AdMarkers)[keyof typeof AdMarkers];

/**
 * @public
 * @enum
 */
export const AdsOnDeliveryRestrictions = {
  BOTH: "BOTH",
  NONE: "NONE",
  RESTRICTED: "RESTRICTED",
  UNRESTRICTED: "UNRESTRICTED",
} as const;
/**
 * @public
 */
export type AdsOnDeliveryRestrictions = (typeof AdsOnDeliveryRestrictions)[keyof typeof AdsOnDeliveryRestrictions];

/**
 * @public
 * @enum
 */
export const PlaylistType = {
  EVENT: "EVENT",
  NONE: "NONE",
  VOD: "VOD",
} as const;
/**
 * @public
 */
export type PlaylistType = (typeof PlaylistType)[keyof typeof PlaylistType];

/**
 * @public
 * @enum
 */
export const CmafEncryptionMethod = {
  AES_CTR: "AES_CTR",
  SAMPLE_AES: "SAMPLE_AES",
} as const;
/**
 * @public
 */
export type CmafEncryptionMethod = (typeof CmafEncryptionMethod)[keyof typeof CmafEncryptionMethod];

/**
 * @public
 * @enum
 */
export const PresetSpeke20Audio = {
  PRESET_AUDIO_1: "PRESET-AUDIO-1",
  PRESET_AUDIO_2: "PRESET-AUDIO-2",
  PRESET_AUDIO_3: "PRESET-AUDIO-3",
  SHARED: "SHARED",
  UNENCRYPTED: "UNENCRYPTED",
} as const;
/**
 * @public
 */
export type PresetSpeke20Audio = (typeof PresetSpeke20Audio)[keyof typeof PresetSpeke20Audio];

/**
 * @public
 * @enum
 */
export const PresetSpeke20Video = {
  PRESET_VIDEO_1: "PRESET-VIDEO-1",
  PRESET_VIDEO_2: "PRESET-VIDEO-2",
  PRESET_VIDEO_3: "PRESET-VIDEO-3",
  PRESET_VIDEO_4: "PRESET-VIDEO-4",
  PRESET_VIDEO_5: "PRESET-VIDEO-5",
  PRESET_VIDEO_6: "PRESET-VIDEO-6",
  PRESET_VIDEO_7: "PRESET-VIDEO-7",
  PRESET_VIDEO_8: "PRESET-VIDEO-8",
  SHARED: "SHARED",
  UNENCRYPTED: "UNENCRYPTED",
} as const;
/**
 * @public
 */
export type PresetSpeke20Video = (typeof PresetSpeke20Video)[keyof typeof PresetSpeke20Video];

/**
 * @public
 * @enum
 */
export const StreamOrder = {
  ORIGINAL: "ORIGINAL",
  VIDEO_BITRATE_ASCENDING: "VIDEO_BITRATE_ASCENDING",
  VIDEO_BITRATE_DESCENDING: "VIDEO_BITRATE_DESCENDING",
} as const;
/**
 * @public
 */
export type StreamOrder = (typeof StreamOrder)[keyof typeof StreamOrder];

/**
 * @public
 * @enum
 */
export const ManifestLayout = {
  COMPACT: "COMPACT",
  DRM_TOP_LEVEL_COMPACT: "DRM_TOP_LEVEL_COMPACT",
  FULL: "FULL",
} as const;
/**
 * @public
 */
export type ManifestLayout = (typeof ManifestLayout)[keyof typeof ManifestLayout];

/**
 * @public
 * @enum
 */
export const Profile = {
  DVB_DASH_2014: "DVB_DASH_2014",
  HBBTV_1_5: "HBBTV_1_5",
  HYBRIDCAST: "HYBRIDCAST",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Profile = (typeof Profile)[keyof typeof Profile];

/**
 * @public
 * @enum
 */
export const SegmentTemplateFormat = {
  NUMBER_WITH_DURATION: "NUMBER_WITH_DURATION",
  NUMBER_WITH_TIMELINE: "NUMBER_WITH_TIMELINE",
  TIME_WITH_TIMELINE: "TIME_WITH_TIMELINE",
} as const;
/**
 * @public
 */
export type SegmentTemplateFormat = (typeof SegmentTemplateFormat)[keyof typeof SegmentTemplateFormat];

/**
 * @public
 * @enum
 */
export const UtcTiming = {
  HTTP_HEAD: "HTTP-HEAD",
  HTTP_ISO: "HTTP-ISO",
  HTTP_XSDATE: "HTTP-XSDATE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type UtcTiming = (typeof UtcTiming)[keyof typeof UtcTiming];

/**
 * @public
 * @enum
 */
export const EncryptionMethod = {
  AES_128: "AES_128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;
/**
 * @public
 */
export type EncryptionMethod = (typeof EncryptionMethod)[keyof typeof EncryptionMethod];

/**
 * @public
 * @enum
 */
export const Origination = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type Origination = (typeof Origination)[keyof typeof Origination];
