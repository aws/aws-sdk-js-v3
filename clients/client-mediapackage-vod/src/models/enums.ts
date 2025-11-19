// smithy-typescript generated code
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
export const ManifestLayout = {
  COMPACT: "COMPACT",
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
  HBBTV_1_5: "HBBTV_1_5",
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
export const ScteMarkersSource = {
  MANIFEST: "MANIFEST",
  SEGMENTS: "SEGMENTS",
} as const;
/**
 * @public
 */
export type ScteMarkersSource = (typeof ScteMarkersSource)[keyof typeof ScteMarkersSource];

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
export const AdMarkers = {
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
export const EncryptionMethod = {
  AES_128: "AES_128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;
/**
 * @public
 */
export type EncryptionMethod = (typeof EncryptionMethod)[keyof typeof EncryptionMethod];
