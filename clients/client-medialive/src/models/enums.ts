// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DashRoleAudio = {
  ALTERNATE: "ALTERNATE",
  COMMENTARY: "COMMENTARY",
  DESCRIPTION: "DESCRIPTION",
  DUB: "DUB",
  EMERGENCY: "EMERGENCY",
  ENHANCED_AUDIO_INTELLIGIBILITY: "ENHANCED-AUDIO-INTELLIGIBILITY",
  KARAOKE: "KARAOKE",
  MAIN: "MAIN",
  SUPPLEMENTARY: "SUPPLEMENTARY",
} as const;
/**
 * @public
 */
export type DashRoleAudio = (typeof DashRoleAudio)[keyof typeof DashRoleAudio];

/**
 * @public
 * @enum
 */
export const AudioNormalizationAlgorithm = {
  ITU_1770_1: "ITU_1770_1",
  ITU_1770_2: "ITU_1770_2",
} as const;
/**
 * @public
 */
export type AudioNormalizationAlgorithm =
  (typeof AudioNormalizationAlgorithm)[keyof typeof AudioNormalizationAlgorithm];

/**
 * @public
 * @enum
 */
export const AudioNormalizationAlgorithmControl = {
  CORRECT_AUDIO: "CORRECT_AUDIO",
} as const;
/**
 * @public
 */
export type AudioNormalizationAlgorithmControl =
  (typeof AudioNormalizationAlgorithmControl)[keyof typeof AudioNormalizationAlgorithmControl];

/**
 * @public
 * @enum
 */
export const AudioType = {
  CLEAN_EFFECTS: "CLEAN_EFFECTS",
  HEARING_IMPAIRED: "HEARING_IMPAIRED",
  UNDEFINED: "UNDEFINED",
  VISUAL_IMPAIRED_COMMENTARY: "VISUAL_IMPAIRED_COMMENTARY",
} as const;
/**
 * @public
 */
export type AudioType = (typeof AudioType)[keyof typeof AudioType];

/**
 * @public
 * @enum
 */
export const AudioDescriptionAudioTypeControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type AudioDescriptionAudioTypeControl =
  (typeof AudioDescriptionAudioTypeControl)[keyof typeof AudioDescriptionAudioTypeControl];

/**
 * @public
 * @enum
 */
export const NielsenWatermarksCbetStepaside = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type NielsenWatermarksCbetStepaside =
  (typeof NielsenWatermarksCbetStepaside)[keyof typeof NielsenWatermarksCbetStepaside];

/**
 * @public
 * @enum
 */
export const NielsenWatermarksDistributionTypes = {
  FINAL_DISTRIBUTOR: "FINAL_DISTRIBUTOR",
  PROGRAM_CONTENT: "PROGRAM_CONTENT",
} as const;
/**
 * @public
 */
export type NielsenWatermarksDistributionTypes =
  (typeof NielsenWatermarksDistributionTypes)[keyof typeof NielsenWatermarksDistributionTypes];

/**
 * @public
 * @enum
 */
export const NielsenWatermarkTimezones = {
  AMERICA_PUERTO_RICO: "AMERICA_PUERTO_RICO",
  US_ALASKA: "US_ALASKA",
  US_ARIZONA: "US_ARIZONA",
  US_CENTRAL: "US_CENTRAL",
  US_EASTERN: "US_EASTERN",
  US_HAWAII: "US_HAWAII",
  US_MOUNTAIN: "US_MOUNTAIN",
  US_PACIFIC: "US_PACIFIC",
  US_SAMOA: "US_SAMOA",
  UTC: "UTC",
} as const;
/**
 * @public
 */
export type NielsenWatermarkTimezones = (typeof NielsenWatermarkTimezones)[keyof typeof NielsenWatermarkTimezones];

/**
 * @public
 * @enum
 */
export const AacCodingMode = {
  AD_RECEIVER_MIX: "AD_RECEIVER_MIX",
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_1_1: "CODING_MODE_1_1",
  CODING_MODE_2_0: "CODING_MODE_2_0",
  CODING_MODE_5_1: "CODING_MODE_5_1",
} as const;
/**
 * @public
 */
export type AacCodingMode = (typeof AacCodingMode)[keyof typeof AacCodingMode];

/**
 * @public
 * @enum
 */
export const AacInputType = {
  BROADCASTER_MIXED_AD: "BROADCASTER_MIXED_AD",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type AacInputType = (typeof AacInputType)[keyof typeof AacInputType];

/**
 * @public
 * @enum
 */
export const AacProfile = {
  HEV1: "HEV1",
  HEV2: "HEV2",
  LC: "LC",
} as const;
/**
 * @public
 */
export type AacProfile = (typeof AacProfile)[keyof typeof AacProfile];

/**
 * @public
 * @enum
 */
export const AacRateControlMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type AacRateControlMode = (typeof AacRateControlMode)[keyof typeof AacRateControlMode];

/**
 * @public
 * @enum
 */
export const AacRawFormat = {
  LATM_LOAS: "LATM_LOAS",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AacRawFormat = (typeof AacRawFormat)[keyof typeof AacRawFormat];

/**
 * @public
 * @enum
 */
export const AacSpec = {
  MPEG2: "MPEG2",
  MPEG4: "MPEG4",
} as const;
/**
 * @public
 */
export type AacSpec = (typeof AacSpec)[keyof typeof AacSpec];

/**
 * @public
 * @enum
 */
export const AacVbrQuality = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM_HIGH: "MEDIUM_HIGH",
  MEDIUM_LOW: "MEDIUM_LOW",
} as const;
/**
 * @public
 */
export type AacVbrQuality = (typeof AacVbrQuality)[keyof typeof AacVbrQuality];

/**
 * @public
 * @enum
 */
export const Ac3AttenuationControl = {
  ATTENUATE_3_DB: "ATTENUATE_3_DB",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Ac3AttenuationControl = (typeof Ac3AttenuationControl)[keyof typeof Ac3AttenuationControl];

/**
 * @public
 * @enum
 */
export const Ac3BitstreamMode = {
  COMMENTARY: "COMMENTARY",
  COMPLETE_MAIN: "COMPLETE_MAIN",
  DIALOGUE: "DIALOGUE",
  EMERGENCY: "EMERGENCY",
  HEARING_IMPAIRED: "HEARING_IMPAIRED",
  MUSIC_AND_EFFECTS: "MUSIC_AND_EFFECTS",
  VISUALLY_IMPAIRED: "VISUALLY_IMPAIRED",
  VOICE_OVER: "VOICE_OVER",
} as const;
/**
 * @public
 */
export type Ac3BitstreamMode = (typeof Ac3BitstreamMode)[keyof typeof Ac3BitstreamMode];

/**
 * @public
 * @enum
 */
export const Ac3CodingMode = {
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_1_1: "CODING_MODE_1_1",
  CODING_MODE_2_0: "CODING_MODE_2_0",
  CODING_MODE_3_2_LFE: "CODING_MODE_3_2_LFE",
} as const;
/**
 * @public
 */
export type Ac3CodingMode = (typeof Ac3CodingMode)[keyof typeof Ac3CodingMode];

/**
 * @public
 * @enum
 */
export const Ac3DrcProfile = {
  FILM_STANDARD: "FILM_STANDARD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Ac3DrcProfile = (typeof Ac3DrcProfile)[keyof typeof Ac3DrcProfile];

/**
 * @public
 * @enum
 */
export const Ac3LfeFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Ac3LfeFilter = (typeof Ac3LfeFilter)[keyof typeof Ac3LfeFilter];

/**
 * @public
 * @enum
 */
export const Ac3MetadataControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type Ac3MetadataControl = (typeof Ac3MetadataControl)[keyof typeof Ac3MetadataControl];

/**
 * @public
 * @enum
 */
export const Eac3AtmosCodingMode = {
  CODING_MODE_5_1_4: "CODING_MODE_5_1_4",
  CODING_MODE_7_1_4: "CODING_MODE_7_1_4",
  CODING_MODE_9_1_6: "CODING_MODE_9_1_6",
} as const;
/**
 * @public
 */
export type Eac3AtmosCodingMode = (typeof Eac3AtmosCodingMode)[keyof typeof Eac3AtmosCodingMode];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDrcLine = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;
/**
 * @public
 */
export type Eac3AtmosDrcLine = (typeof Eac3AtmosDrcLine)[keyof typeof Eac3AtmosDrcLine];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDrcRf = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;
/**
 * @public
 */
export type Eac3AtmosDrcRf = (typeof Eac3AtmosDrcRf)[keyof typeof Eac3AtmosDrcRf];

/**
 * @public
 * @enum
 */
export const Eac3AttenuationControl = {
  ATTENUATE_3_DB: "ATTENUATE_3_DB",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Eac3AttenuationControl = (typeof Eac3AttenuationControl)[keyof typeof Eac3AttenuationControl];

/**
 * @public
 * @enum
 */
export const Eac3BitstreamMode = {
  COMMENTARY: "COMMENTARY",
  COMPLETE_MAIN: "COMPLETE_MAIN",
  EMERGENCY: "EMERGENCY",
  HEARING_IMPAIRED: "HEARING_IMPAIRED",
  VISUALLY_IMPAIRED: "VISUALLY_IMPAIRED",
} as const;
/**
 * @public
 */
export type Eac3BitstreamMode = (typeof Eac3BitstreamMode)[keyof typeof Eac3BitstreamMode];

/**
 * @public
 * @enum
 */
export const Eac3CodingMode = {
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_2_0: "CODING_MODE_2_0",
  CODING_MODE_3_2: "CODING_MODE_3_2",
} as const;
/**
 * @public
 */
export type Eac3CodingMode = (typeof Eac3CodingMode)[keyof typeof Eac3CodingMode];

/**
 * @public
 * @enum
 */
export const Eac3DcFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Eac3DcFilter = (typeof Eac3DcFilter)[keyof typeof Eac3DcFilter];

/**
 * @public
 * @enum
 */
export const Eac3DrcLine = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;
/**
 * @public
 */
export type Eac3DrcLine = (typeof Eac3DrcLine)[keyof typeof Eac3DrcLine];

/**
 * @public
 * @enum
 */
export const Eac3DrcRf = {
  FILM_LIGHT: "FILM_LIGHT",
  FILM_STANDARD: "FILM_STANDARD",
  MUSIC_LIGHT: "MUSIC_LIGHT",
  MUSIC_STANDARD: "MUSIC_STANDARD",
  NONE: "NONE",
  SPEECH: "SPEECH",
} as const;
/**
 * @public
 */
export type Eac3DrcRf = (typeof Eac3DrcRf)[keyof typeof Eac3DrcRf];

/**
 * @public
 * @enum
 */
export const Eac3LfeControl = {
  LFE: "LFE",
  NO_LFE: "NO_LFE",
} as const;
/**
 * @public
 */
export type Eac3LfeControl = (typeof Eac3LfeControl)[keyof typeof Eac3LfeControl];

/**
 * @public
 * @enum
 */
export const Eac3LfeFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Eac3LfeFilter = (typeof Eac3LfeFilter)[keyof typeof Eac3LfeFilter];

/**
 * @public
 * @enum
 */
export const Eac3MetadataControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type Eac3MetadataControl = (typeof Eac3MetadataControl)[keyof typeof Eac3MetadataControl];

/**
 * @public
 * @enum
 */
export const Eac3PassthroughControl = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  WHEN_POSSIBLE: "WHEN_POSSIBLE",
} as const;
/**
 * @public
 */
export type Eac3PassthroughControl = (typeof Eac3PassthroughControl)[keyof typeof Eac3PassthroughControl];

/**
 * @public
 * @enum
 */
export const Eac3PhaseControl = {
  NO_SHIFT: "NO_SHIFT",
  SHIFT_90_DEGREES: "SHIFT_90_DEGREES",
} as const;
/**
 * @public
 */
export type Eac3PhaseControl = (typeof Eac3PhaseControl)[keyof typeof Eac3PhaseControl];

/**
 * @public
 * @enum
 */
export const Eac3StereoDownmix = {
  DPL2: "DPL2",
  LO_RO: "LO_RO",
  LT_RT: "LT_RT",
  NOT_INDICATED: "NOT_INDICATED",
} as const;
/**
 * @public
 */
export type Eac3StereoDownmix = (typeof Eac3StereoDownmix)[keyof typeof Eac3StereoDownmix];

/**
 * @public
 * @enum
 */
export const Eac3SurroundExMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  NOT_INDICATED: "NOT_INDICATED",
} as const;
/**
 * @public
 */
export type Eac3SurroundExMode = (typeof Eac3SurroundExMode)[keyof typeof Eac3SurroundExMode];

/**
 * @public
 * @enum
 */
export const Eac3SurroundMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  NOT_INDICATED: "NOT_INDICATED",
} as const;
/**
 * @public
 */
export type Eac3SurroundMode = (typeof Eac3SurroundMode)[keyof typeof Eac3SurroundMode];

/**
 * @public
 * @enum
 */
export const Mp2CodingMode = {
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_2_0: "CODING_MODE_2_0",
} as const;
/**
 * @public
 */
export type Mp2CodingMode = (typeof Mp2CodingMode)[keyof typeof Mp2CodingMode];

/**
 * @public
 * @enum
 */
export const WavCodingMode = {
  CODING_MODE_1_0: "CODING_MODE_1_0",
  CODING_MODE_2_0: "CODING_MODE_2_0",
  CODING_MODE_4_0: "CODING_MODE_4_0",
  CODING_MODE_8_0: "CODING_MODE_8_0",
} as const;
/**
 * @public
 */
export type WavCodingMode = (typeof WavCodingMode)[keyof typeof WavCodingMode];

/**
 * @public
 * @enum
 */
export const DvbDashAccessibility = {
  DVBDASH_1_VISUALLY_IMPAIRED: "DVBDASH_1_VISUALLY_IMPAIRED",
  DVBDASH_2_HARD_OF_HEARING: "DVBDASH_2_HARD_OF_HEARING",
  DVBDASH_3_SUPPLEMENTAL_COMMENTARY: "DVBDASH_3_SUPPLEMENTAL_COMMENTARY",
  DVBDASH_4_DIRECTORS_COMMENTARY: "DVBDASH_4_DIRECTORS_COMMENTARY",
  DVBDASH_5_EDUCATIONAL_NOTES: "DVBDASH_5_EDUCATIONAL_NOTES",
  DVBDASH_6_MAIN_PROGRAM: "DVBDASH_6_MAIN_PROGRAM",
  DVBDASH_7_CLEAN_FEED: "DVBDASH_7_CLEAN_FEED",
} as const;
/**
 * @public
 */
export type DvbDashAccessibility = (typeof DvbDashAccessibility)[keyof typeof DvbDashAccessibility];

/**
 * @public
 * @enum
 */
export const AudioDescriptionLanguageCodeControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type AudioDescriptionLanguageCodeControl =
  (typeof AudioDescriptionLanguageCodeControl)[keyof typeof AudioDescriptionLanguageCodeControl];

/**
 * @public
 * @enum
 */
export const AudioLanguageSelectionPolicy = {
  LOOSE: "LOOSE",
  STRICT: "STRICT",
} as const;
/**
 * @public
 */
export type AudioLanguageSelectionPolicy =
  (typeof AudioLanguageSelectionPolicy)[keyof typeof AudioLanguageSelectionPolicy];

/**
 * @public
 * @enum
 */
export const DolbyEProgramSelection = {
  ALL_CHANNELS: "ALL_CHANNELS",
  PROGRAM_1: "PROGRAM_1",
  PROGRAM_2: "PROGRAM_2",
  PROGRAM_3: "PROGRAM_3",
  PROGRAM_4: "PROGRAM_4",
  PROGRAM_5: "PROGRAM_5",
  PROGRAM_6: "PROGRAM_6",
  PROGRAM_7: "PROGRAM_7",
  PROGRAM_8: "PROGRAM_8",
} as const;
/**
 * @public
 */
export type DolbyEProgramSelection = (typeof DolbyEProgramSelection)[keyof typeof DolbyEProgramSelection];

/**
 * @public
 * @enum
 */
export const AccessibilityType = {
  DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES: "DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES",
  IMPLEMENTS_ACCESSIBILITY_FEATURES: "IMPLEMENTS_ACCESSIBILITY_FEATURES",
} as const;
/**
 * @public
 */
export type AccessibilityType = (typeof AccessibilityType)[keyof typeof AccessibilityType];

/**
 * @public
 * @enum
 */
export const DashRoleCaption = {
  ALTERNATE: "ALTERNATE",
  CAPTION: "CAPTION",
  COMMENTARY: "COMMENTARY",
  DESCRIPTION: "DESCRIPTION",
  DUB: "DUB",
  EASYREADER: "EASYREADER",
  EMERGENCY: "EMERGENCY",
  FORCED_SUBTITLE: "FORCED-SUBTITLE",
  KARAOKE: "KARAOKE",
  MAIN: "MAIN",
  METADATA: "METADATA",
  SUBTITLE: "SUBTITLE",
  SUPPLEMENTARY: "SUPPLEMENTARY",
} as const;
/**
 * @public
 */
export type DashRoleCaption = (typeof DashRoleCaption)[keyof typeof DashRoleCaption];

/**
 * @public
 * @enum
 */
export const BurnInAlignment = {
  CENTERED: "CENTERED",
  LEFT: "LEFT",
  SMART: "SMART",
} as const;
/**
 * @public
 */
export type BurnInAlignment = (typeof BurnInAlignment)[keyof typeof BurnInAlignment];

/**
 * @public
 * @enum
 */
export const BurnInBackgroundColor = {
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type BurnInBackgroundColor = (typeof BurnInBackgroundColor)[keyof typeof BurnInBackgroundColor];

/**
 * @public
 * @enum
 */
export const BurnInFontColor = {
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;
/**
 * @public
 */
export type BurnInFontColor = (typeof BurnInFontColor)[keyof typeof BurnInFontColor];

/**
 * @public
 * @enum
 */
export const BurnInOutlineColor = {
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;
/**
 * @public
 */
export type BurnInOutlineColor = (typeof BurnInOutlineColor)[keyof typeof BurnInOutlineColor];

/**
 * @public
 * @enum
 */
export const BurnInShadowColor = {
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type BurnInShadowColor = (typeof BurnInShadowColor)[keyof typeof BurnInShadowColor];

/**
 * @public
 * @enum
 */
export const BurnInDestinationSubtitleRows = {
  ROWS_16: "ROWS_16",
  ROWS_20: "ROWS_20",
  ROWS_24: "ROWS_24",
} as const;
/**
 * @public
 */
export type BurnInDestinationSubtitleRows =
  (typeof BurnInDestinationSubtitleRows)[keyof typeof BurnInDestinationSubtitleRows];

/**
 * @public
 * @enum
 */
export const BurnInTeletextGridControl = {
  FIXED: "FIXED",
  SCALED: "SCALED",
} as const;
/**
 * @public
 */
export type BurnInTeletextGridControl = (typeof BurnInTeletextGridControl)[keyof typeof BurnInTeletextGridControl];

/**
 * @public
 * @enum
 */
export const DvbSubDestinationAlignment = {
  CENTERED: "CENTERED",
  LEFT: "LEFT",
  SMART: "SMART",
} as const;
/**
 * @public
 */
export type DvbSubDestinationAlignment = (typeof DvbSubDestinationAlignment)[keyof typeof DvbSubDestinationAlignment];

/**
 * @public
 * @enum
 */
export const DvbSubDestinationBackgroundColor = {
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type DvbSubDestinationBackgroundColor =
  (typeof DvbSubDestinationBackgroundColor)[keyof typeof DvbSubDestinationBackgroundColor];

/**
 * @public
 * @enum
 */
export const DvbSubDestinationFontColor = {
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;
/**
 * @public
 */
export type DvbSubDestinationFontColor = (typeof DvbSubDestinationFontColor)[keyof typeof DvbSubDestinationFontColor];

/**
 * @public
 * @enum
 */
export const DvbSubDestinationOutlineColor = {
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;
/**
 * @public
 */
export type DvbSubDestinationOutlineColor =
  (typeof DvbSubDestinationOutlineColor)[keyof typeof DvbSubDestinationOutlineColor];

/**
 * @public
 * @enum
 */
export const DvbSubDestinationShadowColor = {
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type DvbSubDestinationShadowColor =
  (typeof DvbSubDestinationShadowColor)[keyof typeof DvbSubDestinationShadowColor];

/**
 * @public
 * @enum
 */
export const DvbSubDestinationSubtitleRows = {
  ROWS_16: "ROWS_16",
  ROWS_20: "ROWS_20",
  ROWS_24: "ROWS_24",
} as const;
/**
 * @public
 */
export type DvbSubDestinationSubtitleRows =
  (typeof DvbSubDestinationSubtitleRows)[keyof typeof DvbSubDestinationSubtitleRows];

/**
 * @public
 * @enum
 */
export const DvbSubDestinationTeletextGridControl = {
  FIXED: "FIXED",
  SCALED: "SCALED",
} as const;
/**
 * @public
 */
export type DvbSubDestinationTeletextGridControl =
  (typeof DvbSubDestinationTeletextGridControl)[keyof typeof DvbSubDestinationTeletextGridControl];

/**
 * @public
 * @enum
 */
export const EbuTtDFillLineGapControl = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EbuTtDFillLineGapControl = (typeof EbuTtDFillLineGapControl)[keyof typeof EbuTtDFillLineGapControl];

/**
 * @public
 * @enum
 */
export const EbuTtDDestinationStyleControl = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type EbuTtDDestinationStyleControl =
  (typeof EbuTtDDestinationStyleControl)[keyof typeof EbuTtDDestinationStyleControl];

/**
 * @public
 * @enum
 */
export const TtmlDestinationStyleControl = {
  PASSTHROUGH: "PASSTHROUGH",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type TtmlDestinationStyleControl =
  (typeof TtmlDestinationStyleControl)[keyof typeof TtmlDestinationStyleControl];

/**
 * @public
 * @enum
 */
export const WebvttDestinationStyleControl = {
  NO_STYLE_DATA: "NO_STYLE_DATA",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type WebvttDestinationStyleControl =
  (typeof WebvttDestinationStyleControl)[keyof typeof WebvttDestinationStyleControl];

/**
 * @public
 * @enum
 */
export const DvbSubOcrLanguage = {
  DEU: "DEU",
  ENG: "ENG",
  FRA: "FRA",
  NLD: "NLD",
  POR: "POR",
  SPA: "SPA",
} as const;
/**
 * @public
 */
export type DvbSubOcrLanguage = (typeof DvbSubOcrLanguage)[keyof typeof DvbSubOcrLanguage];

/**
 * @public
 * @enum
 */
export const EmbeddedConvert608To708 = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;
/**
 * @public
 */
export type EmbeddedConvert608To708 = (typeof EmbeddedConvert608To708)[keyof typeof EmbeddedConvert608To708];

/**
 * @public
 * @enum
 */
export const EmbeddedScte20Detection = {
  AUTO: "AUTO",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type EmbeddedScte20Detection = (typeof EmbeddedScte20Detection)[keyof typeof EmbeddedScte20Detection];

/**
 * @public
 * @enum
 */
export const Scte20Convert608To708 = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;
/**
 * @public
 */
export type Scte20Convert608To708 = (typeof Scte20Convert608To708)[keyof typeof Scte20Convert608To708];

/**
 * @public
 * @enum
 */
export const Scte27OcrLanguage = {
  DEU: "DEU",
  ENG: "ENG",
  FRA: "FRA",
  NLD: "NLD",
  POR: "POR",
  SPA: "SPA",
} as const;
/**
 * @public
 */
export type Scte27OcrLanguage = (typeof Scte27OcrLanguage)[keyof typeof Scte27OcrLanguage];

/**
 * @public
 * @enum
 */
export const ChannelAlertState = {
  CLEARED: "CLEARED",
  SET: "SET",
} as const;
/**
 * @public
 */
export type ChannelAlertState = (typeof ChannelAlertState)[keyof typeof ChannelAlertState];

/**
 * @public
 * @enum
 */
export const ChannelPipelineIdToRestart = {
  PIPELINE_0: "PIPELINE_0",
  PIPELINE_1: "PIPELINE_1",
} as const;
/**
 * @public
 */
export type ChannelPipelineIdToRestart = (typeof ChannelPipelineIdToRestart)[keyof typeof ChannelPipelineIdToRestart];

/**
 * @public
 * @enum
 */
export const CdiInputResolution = {
  FHD: "FHD",
  HD: "HD",
  SD: "SD",
  UHD: "UHD",
} as const;
/**
 * @public
 */
export type CdiInputResolution = (typeof CdiInputResolution)[keyof typeof CdiInputResolution];

/**
 * @public
 * @enum
 */
export const ChannelClass = {
  SINGLE_PIPELINE: "SINGLE_PIPELINE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ChannelClass = (typeof ChannelClass)[keyof typeof ChannelClass];

/**
 * @public
 * @enum
 */
export const InputPreference = {
  EQUAL_INPUT_PREFERENCE: "EQUAL_INPUT_PREFERENCE",
  PRIMARY_INPUT_PREFERRED: "PRIMARY_INPUT_PREFERRED",
} as const;
/**
 * @public
 */
export type InputPreference = (typeof InputPreference)[keyof typeof InputPreference];

/**
 * @public
 * @enum
 */
export const InputDeblockFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type InputDeblockFilter = (typeof InputDeblockFilter)[keyof typeof InputDeblockFilter];

/**
 * @public
 * @enum
 */
export const InputDenoiseFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type InputDenoiseFilter = (typeof InputDenoiseFilter)[keyof typeof InputDenoiseFilter];

/**
 * @public
 * @enum
 */
export const InputFilter = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  FORCED: "FORCED",
} as const;
/**
 * @public
 */
export type InputFilter = (typeof InputFilter)[keyof typeof InputFilter];

/**
 * @public
 * @enum
 */
export const HlsScte35SourceType = {
  MANIFEST: "MANIFEST",
  SEGMENTS: "SEGMENTS",
} as const;
/**
 * @public
 */
export type HlsScte35SourceType = (typeof HlsScte35SourceType)[keyof typeof HlsScte35SourceType];

/**
 * @public
 * @enum
 */
export const NetworkInputServerValidation = {
  CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME: "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME",
  CHECK_CRYPTOGRAPHY_ONLY: "CHECK_CRYPTOGRAPHY_ONLY",
} as const;
/**
 * @public
 */
export type NetworkInputServerValidation =
  (typeof NetworkInputServerValidation)[keyof typeof NetworkInputServerValidation];

/**
 * @public
 * @enum
 */
export const Smpte2038DataPreference = {
  IGNORE: "IGNORE",
  PREFER: "PREFER",
} as const;
/**
 * @public
 */
export type Smpte2038DataPreference = (typeof Smpte2038DataPreference)[keyof typeof Smpte2038DataPreference];

/**
 * @public
 * @enum
 */
export const InputSourceEndBehavior = {
  CONTINUE: "CONTINUE",
  LOOP: "LOOP",
} as const;
/**
 * @public
 */
export type InputSourceEndBehavior = (typeof InputSourceEndBehavior)[keyof typeof InputSourceEndBehavior];

/**
 * @public
 * @enum
 */
export const VideoSelectorColorSpace = {
  FOLLOW: "FOLLOW",
  HDR10: "HDR10",
  HLG_2020: "HLG_2020",
  REC_601: "REC_601",
  REC_709: "REC_709",
} as const;
/**
 * @public
 */
export type VideoSelectorColorSpace = (typeof VideoSelectorColorSpace)[keyof typeof VideoSelectorColorSpace];

/**
 * @public
 * @enum
 */
export const VideoSelectorColorSpaceUsage = {
  FALLBACK: "FALLBACK",
  FORCE: "FORCE",
} as const;
/**
 * @public
 */
export type VideoSelectorColorSpaceUsage =
  (typeof VideoSelectorColorSpaceUsage)[keyof typeof VideoSelectorColorSpaceUsage];

/**
 * @public
 * @enum
 */
export const InputCodec = {
  AVC: "AVC",
  HEVC: "HEVC",
  MPEG2: "MPEG2",
} as const;
/**
 * @public
 */
export type InputCodec = (typeof InputCodec)[keyof typeof InputCodec];

/**
 * @public
 * @enum
 */
export const InputMaximumBitrate = {
  MAX_10_MBPS: "MAX_10_MBPS",
  MAX_20_MBPS: "MAX_20_MBPS",
  MAX_50_MBPS: "MAX_50_MBPS",
} as const;
/**
 * @public
 */
export type InputMaximumBitrate = (typeof InputMaximumBitrate)[keyof typeof InputMaximumBitrate];

/**
 * @public
 * @enum
 */
export const InputResolution = {
  HD: "HD",
  SD: "SD",
  UHD: "UHD",
} as const;
/**
 * @public
 */
export type InputResolution = (typeof InputResolution)[keyof typeof InputResolution];

/**
 * @public
 * @enum
 */
export const LinkedChannelType = {
  FOLLOWING_CHANNEL: "FOLLOWING_CHANNEL",
  PRIMARY_CHANNEL: "PRIMARY_CHANNEL",
} as const;
/**
 * @public
 */
export type LinkedChannelType = (typeof LinkedChannelType)[keyof typeof LinkedChannelType];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "DEBUG",
  DISABLED: "DISABLED",
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const MaintenanceDay = {
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
export type MaintenanceDay = (typeof MaintenanceDay)[keyof typeof MaintenanceDay];

/**
 * @public
 * @enum
 */
export const ChannelState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  IDLE: "IDLE",
  RECOVERING: "RECOVERING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ChannelState = (typeof ChannelState)[keyof typeof ChannelState];

/**
 * @public
 * @enum
 */
export const CloudWatchAlarmTemplateComparisonOperator = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;
/**
 * @public
 */
export type CloudWatchAlarmTemplateComparisonOperator =
  (typeof CloudWatchAlarmTemplateComparisonOperator)[keyof typeof CloudWatchAlarmTemplateComparisonOperator];

/**
 * @public
 * @enum
 */
export const CloudWatchAlarmTemplateStatistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;
/**
 * @public
 */
export type CloudWatchAlarmTemplateStatistic =
  (typeof CloudWatchAlarmTemplateStatistic)[keyof typeof CloudWatchAlarmTemplateStatistic];

/**
 * @public
 * @enum
 */
export const CloudWatchAlarmTemplateTargetResourceType = {
  CLOUDFRONT_DISTRIBUTION: "CLOUDFRONT_DISTRIBUTION",
  MEDIACONNECT_FLOW: "MEDIACONNECT_FLOW",
  MEDIALIVE_CHANNEL: "MEDIALIVE_CHANNEL",
  MEDIALIVE_INPUT_DEVICE: "MEDIALIVE_INPUT_DEVICE",
  MEDIALIVE_MULTIPLEX: "MEDIALIVE_MULTIPLEX",
  MEDIAPACKAGE_CHANNEL: "MEDIAPACKAGE_CHANNEL",
  MEDIAPACKAGE_ORIGIN_ENDPOINT: "MEDIAPACKAGE_ORIGIN_ENDPOINT",
  MEDIATAILOR_PLAYBACK_CONFIGURATION: "MEDIATAILOR_PLAYBACK_CONFIGURATION",
  S3_BUCKET: "S3_BUCKET",
} as const;
/**
 * @public
 */
export type CloudWatchAlarmTemplateTargetResourceType =
  (typeof CloudWatchAlarmTemplateTargetResourceType)[keyof typeof CloudWatchAlarmTemplateTargetResourceType];

/**
 * @public
 * @enum
 */
export const CloudWatchAlarmTemplateTreatMissingData = {
  breaching: "breaching",
  ignore: "ignore",
  missing: "missing",
  notBreaching: "notBreaching",
} as const;
/**
 * @public
 */
export type CloudWatchAlarmTemplateTreatMissingData =
  (typeof CloudWatchAlarmTemplateTreatMissingData)[keyof typeof CloudWatchAlarmTemplateTreatMissingData];

/**
 * @public
 * @enum
 */
export const ClusterAlertState = {
  CLEARED: "CLEARED",
  SET: "SET",
} as const;
/**
 * @public
 */
export type ClusterAlertState = (typeof ClusterAlertState)[keyof typeof ClusterAlertState];

/**
 * @public
 * @enum
 */
export const ColorSpace = {
  HDR10: "HDR10",
  HLG_2020: "HLG_2020",
  REC_601: "REC_601",
  REC_709: "REC_709",
} as const;
/**
 * @public
 */
export type ColorSpace = (typeof ColorSpace)[keyof typeof ColorSpace];

/**
 * @public
 * @enum
 */
export const ChannelPlacementGroupState = {
  ASSIGNED: "ASSIGNED",
  ASSIGNING: "ASSIGNING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UNASSIGNED: "UNASSIGNED",
  UNASSIGNING: "UNASSIGNING",
} as const;
/**
 * @public
 */
export type ChannelPlacementGroupState = (typeof ChannelPlacementGroupState)[keyof typeof ChannelPlacementGroupState];

/**
 * @public
 * @enum
 */
export const ClusterType = {
  ON_PREMISES: "ON_PREMISES",
} as const;
/**
 * @public
 */
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

/**
 * @public
 * @enum
 */
export const ClusterState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * @public
 * @enum
 */
export const NetworkState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  IDLE: "IDLE",
  IN_USE: "IN_USE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type NetworkState = (typeof NetworkState)[keyof typeof NetworkState];

/**
 * @public
 * @enum
 */
export const NodeConnectionState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;
/**
 * @public
 */
export type NodeConnectionState = (typeof NodeConnectionState)[keyof typeof NodeConnectionState];

/**
 * @public
 * @enum
 */
export const NetworkInterfaceMode = {
  BRIDGE: "BRIDGE",
  NAT: "NAT",
} as const;
/**
 * @public
 */
export type NetworkInterfaceMode = (typeof NetworkInterfaceMode)[keyof typeof NetworkInterfaceMode];

/**
 * @public
 * @enum
 */
export const NodeRole = {
  ACTIVE: "ACTIVE",
  BACKUP: "BACKUP",
} as const;
/**
 * @public
 */
export type NodeRole = (typeof NodeRole)[keyof typeof NodeRole];

/**
 * @public
 * @enum
 */
export const NodeState = {
  ACTIVATION_FAILED: "ACTIVATION_FAILED",
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  DEREGISTERED: "DEREGISTERED",
  DEREGISTERING: "DEREGISTERING",
  DEREGISTRATION_FAILED: "DEREGISTRATION_FAILED",
  DRAINING: "DRAINING",
  IN_USE: "IN_USE",
  READY: "READY",
  READY_TO_ACTIVATE: "READY_TO_ACTIVATE",
  REGISTERING: "REGISTERING",
  REGISTRATION_FAILED: "REGISTRATION_FAILED",
} as const;
/**
 * @public
 */
export type NodeState = (typeof NodeState)[keyof typeof NodeState];

/**
 * @public
 * @enum
 */
export const EventBridgeRuleTemplateEventType = {
  MEDIACONNECT_ALERT: "MEDIACONNECT_ALERT",
  MEDIACONNECT_FLOW_STATUS_CHANGE: "MEDIACONNECT_FLOW_STATUS_CHANGE",
  MEDIACONNECT_OUTPUT_HEALTH: "MEDIACONNECT_OUTPUT_HEALTH",
  MEDIACONNECT_SOURCE_HEALTH: "MEDIACONNECT_SOURCE_HEALTH",
  MEDIALIVE_CHANNEL_ALERT: "MEDIALIVE_CHANNEL_ALERT",
  MEDIALIVE_CHANNEL_INPUT_CHANGE: "MEDIALIVE_CHANNEL_INPUT_CHANGE",
  MEDIALIVE_CHANNEL_STATE_CHANGE: "MEDIALIVE_CHANNEL_STATE_CHANGE",
  MEDIALIVE_MULTIPLEX_ALERT: "MEDIALIVE_MULTIPLEX_ALERT",
  MEDIALIVE_MULTIPLEX_STATE_CHANGE: "MEDIALIVE_MULTIPLEX_STATE_CHANGE",
  MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION: "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION",
  MEDIAPACKAGE_INPUT_NOTIFICATION: "MEDIAPACKAGE_INPUT_NOTIFICATION",
  MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION: "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION",
  SIGNAL_MAP_ACTIVE_ALARM: "SIGNAL_MAP_ACTIVE_ALARM",
} as const;
/**
 * @public
 */
export type EventBridgeRuleTemplateEventType =
  (typeof EventBridgeRuleTemplateEventType)[keyof typeof EventBridgeRuleTemplateEventType];

/**
 * @public
 * @enum
 */
export const HlsAdMarkers = {
  ADOBE: "ADOBE",
  ELEMENTAL: "ELEMENTAL",
  ELEMENTAL_SCTE35: "ELEMENTAL_SCTE35",
} as const;
/**
 * @public
 */
export type HlsAdMarkers = (typeof HlsAdMarkers)[keyof typeof HlsAdMarkers];

/**
 * @public
 * @enum
 */
export const InputClass = {
  SINGLE_PIPELINE: "SINGLE_PIPELINE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type InputClass = (typeof InputClass)[keyof typeof InputClass];

/**
 * @public
 * @enum
 */
export const InputNetworkLocation = {
  AWS: "AWS",
  ON_PREMISES: "ON_PREMISES",
} as const;
/**
 * @public
 */
export type InputNetworkLocation = (typeof InputNetworkLocation)[keyof typeof InputNetworkLocation];

/**
 * @public
 * @enum
 */
export const InputSourceType = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type InputSourceType = (typeof InputSourceType)[keyof typeof InputSourceType];

/**
 * @public
 * @enum
 */
export const RouterEncryptionType = {
  AUTOMATIC: "AUTOMATIC",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type RouterEncryptionType = (typeof RouterEncryptionType)[keyof typeof RouterEncryptionType];

/**
 * @public
 * @enum
 */
export const Algorithm = {
  AES128: "AES128",
  AES192: "AES192",
  AES256: "AES256",
} as const;
/**
 * @public
 */
export type Algorithm = (typeof Algorithm)[keyof typeof Algorithm];

/**
 * @public
 * @enum
 */
export const InputState = {
  ATTACHED: "ATTACHED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DETACHED: "DETACHED",
} as const;
/**
 * @public
 */
export type InputState = (typeof InputState)[keyof typeof InputState];

/**
 * @public
 * @enum
 */
export const InputType = {
  AWS_CDI: "AWS_CDI",
  INPUT_DEVICE: "INPUT_DEVICE",
  MEDIACONNECT: "MEDIACONNECT",
  MEDIACONNECT_ROUTER: "MEDIACONNECT_ROUTER",
  MP4_FILE: "MP4_FILE",
  MULTICAST: "MULTICAST",
  RTMP_PULL: "RTMP_PULL",
  RTMP_PUSH: "RTMP_PUSH",
  RTP_PUSH: "RTP_PUSH",
  SDI: "SDI",
  SMPTE_2110_RECEIVER_GROUP: "SMPTE_2110_RECEIVER_GROUP",
  SRT_CALLER: "SRT_CALLER",
  TS_FILE: "TS_FILE",
  UDP_PUSH: "UDP_PUSH",
  URL_PULL: "URL_PULL",
} as const;
/**
 * @public
 */
export type InputType = (typeof InputType)[keyof typeof InputType];

/**
 * @public
 * @enum
 */
export const InputDeviceConfigurableAudioChannelPairProfile = {
  CBR_AAC_HQ_192000: "CBR-AAC_HQ-192000",
  CBR_AAC_HQ_256000: "CBR-AAC_HQ-256000",
  CBR_AAC_HQ_384000: "CBR-AAC_HQ-384000",
  CBR_AAC_HQ_512000: "CBR-AAC_HQ-512000",
  DISABLED: "DISABLED",
  VBR_AAC_HE_64000: "VBR-AAC_HE-64000",
  VBR_AAC_HHE_16000: "VBR-AAC_HHE-16000",
  VBR_AAC_LC_128000: "VBR-AAC_LC-128000",
} as const;
/**
 * @public
 */
export type InputDeviceConfigurableAudioChannelPairProfile =
  (typeof InputDeviceConfigurableAudioChannelPairProfile)[keyof typeof InputDeviceConfigurableAudioChannelPairProfile];

/**
 * @public
 * @enum
 */
export const InputDeviceConnectionState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;
/**
 * @public
 */
export type InputDeviceConnectionState = (typeof InputDeviceConnectionState)[keyof typeof InputDeviceConnectionState];

/**
 * @public
 * @enum
 */
export const DeviceSettingsSyncState = {
  SYNCED: "SYNCED",
  SYNCING: "SYNCING",
} as const;
/**
 * @public
 */
export type DeviceSettingsSyncState = (typeof DeviceSettingsSyncState)[keyof typeof DeviceSettingsSyncState];

/**
 * @public
 * @enum
 */
export const DeviceUpdateStatus = {
  NOT_UP_TO_DATE: "NOT_UP_TO_DATE",
  UPDATING: "UPDATING",
  UP_TO_DATE: "UP_TO_DATE",
} as const;
/**
 * @public
 */
export type DeviceUpdateStatus = (typeof DeviceUpdateStatus)[keyof typeof DeviceUpdateStatus];

/**
 * @public
 * @enum
 */
export const InputDeviceActiveInput = {
  HDMI: "HDMI",
  SDI: "SDI",
} as const;
/**
 * @public
 */
export type InputDeviceActiveInput = (typeof InputDeviceActiveInput)[keyof typeof InputDeviceActiveInput];

/**
 * @public
 * @enum
 */
export const InputDeviceConfiguredInput = {
  AUTO: "AUTO",
  HDMI: "HDMI",
  SDI: "SDI",
} as const;
/**
 * @public
 */
export type InputDeviceConfiguredInput = (typeof InputDeviceConfiguredInput)[keyof typeof InputDeviceConfiguredInput];

/**
 * @public
 * @enum
 */
export const InputDeviceState = {
  IDLE: "IDLE",
  STREAMING: "STREAMING",
} as const;
/**
 * @public
 */
export type InputDeviceState = (typeof InputDeviceState)[keyof typeof InputDeviceState];

/**
 * @public
 * @enum
 */
export const InputDeviceScanType = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;
/**
 * @public
 */
export type InputDeviceScanType = (typeof InputDeviceScanType)[keyof typeof InputDeviceScanType];

/**
 * @public
 * @enum
 */
export const InputDeviceIpScheme = {
  DHCP: "DHCP",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type InputDeviceIpScheme = (typeof InputDeviceIpScheme)[keyof typeof InputDeviceIpScheme];

/**
 * @public
 * @enum
 */
export const InputDeviceOutputType = {
  MEDIACONNECT_FLOW: "MEDIACONNECT_FLOW",
  MEDIALIVE_INPUT: "MEDIALIVE_INPUT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type InputDeviceOutputType = (typeof InputDeviceOutputType)[keyof typeof InputDeviceOutputType];

/**
 * @public
 * @enum
 */
export const InputDeviceType = {
  HD: "HD",
  UHD: "UHD",
} as const;
/**
 * @public
 */
export type InputDeviceType = (typeof InputDeviceType)[keyof typeof InputDeviceType];

/**
 * @public
 * @enum
 */
export const InputDeviceUhdAudioChannelPairProfile = {
  CBR_AAC_HQ_192000: "CBR-AAC_HQ-192000",
  CBR_AAC_HQ_256000: "CBR-AAC_HQ-256000",
  CBR_AAC_HQ_384000: "CBR-AAC_HQ-384000",
  CBR_AAC_HQ_512000: "CBR-AAC_HQ-512000",
  DISABLED: "DISABLED",
  VBR_AAC_HE_64000: "VBR-AAC_HE-64000",
  VBR_AAC_HHE_16000: "VBR-AAC_HHE-16000",
  VBR_AAC_LC_128000: "VBR-AAC_LC-128000",
} as const;
/**
 * @public
 */
export type InputDeviceUhdAudioChannelPairProfile =
  (typeof InputDeviceUhdAudioChannelPairProfile)[keyof typeof InputDeviceUhdAudioChannelPairProfile];

/**
 * @public
 * @enum
 */
export const InputDeviceCodec = {
  AVC: "AVC",
  HEVC: "HEVC",
} as const;
/**
 * @public
 */
export type InputDeviceCodec = (typeof InputDeviceCodec)[keyof typeof InputDeviceCodec];

/**
 * @public
 * @enum
 */
export const InputSecurityGroupState = {
  DELETED: "DELETED",
  IDLE: "IDLE",
  IN_USE: "IN_USE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type InputSecurityGroupState = (typeof InputSecurityGroupState)[keyof typeof InputSecurityGroupState];

/**
 * @public
 * @enum
 */
export const MultiplexAlertState = {
  CLEARED: "CLEARED",
  SET: "SET",
} as const;
/**
 * @public
 */
export type MultiplexAlertState = (typeof MultiplexAlertState)[keyof typeof MultiplexAlertState];

/**
 * @public
 * @enum
 */
export const MultiplexState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  IDLE: "IDLE",
  RECOVERING: "RECOVERING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type MultiplexState = (typeof MultiplexState)[keyof typeof MultiplexState];

/**
 * @public
 * @enum
 */
export const OfferingDurationUnits = {
  MONTHS: "MONTHS",
} as const;
/**
 * @public
 */
export type OfferingDurationUnits = (typeof OfferingDurationUnits)[keyof typeof OfferingDurationUnits];

/**
 * @public
 * @enum
 */
export const OfferingType = {
  NO_UPFRONT: "NO_UPFRONT",
} as const;
/**
 * @public
 */
export type OfferingType = (typeof OfferingType)[keyof typeof OfferingType];

/**
 * @public
 * @enum
 */
export const ReservationCodec = {
  AUDIO: "AUDIO",
  AV1: "AV1",
  AVC: "AVC",
  HEVC: "HEVC",
  LINK: "LINK",
  MPEG2: "MPEG2",
} as const;
/**
 * @public
 */
export type ReservationCodec = (typeof ReservationCodec)[keyof typeof ReservationCodec];

/**
 * @public
 * @enum
 */
export const ReservationMaximumBitrate = {
  MAX_10_MBPS: "MAX_10_MBPS",
  MAX_20_MBPS: "MAX_20_MBPS",
  MAX_50_MBPS: "MAX_50_MBPS",
} as const;
/**
 * @public
 */
export type ReservationMaximumBitrate = (typeof ReservationMaximumBitrate)[keyof typeof ReservationMaximumBitrate];

/**
 * @public
 * @enum
 */
export const ReservationMaximumFramerate = {
  MAX_30_FPS: "MAX_30_FPS",
  MAX_60_FPS: "MAX_60_FPS",
} as const;
/**
 * @public
 */
export type ReservationMaximumFramerate =
  (typeof ReservationMaximumFramerate)[keyof typeof ReservationMaximumFramerate];

/**
 * @public
 * @enum
 */
export const ReservationResolution = {
  FHD: "FHD",
  HD: "HD",
  SD: "SD",
  UHD: "UHD",
} as const;
/**
 * @public
 */
export type ReservationResolution = (typeof ReservationResolution)[keyof typeof ReservationResolution];

/**
 * @public
 * @enum
 */
export const ReservationResourceType = {
  CHANNEL: "CHANNEL",
  INPUT: "INPUT",
  MULTIPLEX: "MULTIPLEX",
  OUTPUT: "OUTPUT",
} as const;
/**
 * @public
 */
export type ReservationResourceType = (typeof ReservationResourceType)[keyof typeof ReservationResourceType];

/**
 * @public
 * @enum
 */
export const ReservationSpecialFeature = {
  ADVANCED_AUDIO: "ADVANCED_AUDIO",
  AUDIO_NORMALIZATION: "AUDIO_NORMALIZATION",
  MGHD: "MGHD",
  MGUHD: "MGUHD",
} as const;
/**
 * @public
 */
export type ReservationSpecialFeature = (typeof ReservationSpecialFeature)[keyof typeof ReservationSpecialFeature];

/**
 * @public
 * @enum
 */
export const ReservationVideoQuality = {
  ENHANCED: "ENHANCED",
  PREMIUM: "PREMIUM",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ReservationVideoQuality = (typeof ReservationVideoQuality)[keyof typeof ReservationVideoQuality];

/**
 * @public
 * @enum
 */
export const M2tsAbsentInputAudioBehavior = {
  DROP: "DROP",
  ENCODE_SILENCE: "ENCODE_SILENCE",
} as const;
/**
 * @public
 */
export type M2tsAbsentInputAudioBehavior =
  (typeof M2tsAbsentInputAudioBehavior)[keyof typeof M2tsAbsentInputAudioBehavior];

/**
 * @public
 * @enum
 */
export const M2tsArib = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type M2tsArib = (typeof M2tsArib)[keyof typeof M2tsArib];

/**
 * @public
 * @enum
 */
export const M2tsAribCaptionsPidControl = {
  AUTO: "AUTO",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type M2tsAribCaptionsPidControl = (typeof M2tsAribCaptionsPidControl)[keyof typeof M2tsAribCaptionsPidControl];

/**
 * @public
 * @enum
 */
export const M2tsAudioBufferModel = {
  ATSC: "ATSC",
  DVB: "DVB",
} as const;
/**
 * @public
 */
export type M2tsAudioBufferModel = (typeof M2tsAudioBufferModel)[keyof typeof M2tsAudioBufferModel];

/**
 * @public
 * @enum
 */
export const M2tsAudioStreamType = {
  ATSC: "ATSC",
  DVB: "DVB",
} as const;
/**
 * @public
 */
export type M2tsAudioStreamType = (typeof M2tsAudioStreamType)[keyof typeof M2tsAudioStreamType];

/**
 * @public
 * @enum
 */
export const M2tsBufferModel = {
  MULTIPLEX: "MULTIPLEX",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type M2tsBufferModel = (typeof M2tsBufferModel)[keyof typeof M2tsBufferModel];

/**
 * @public
 * @enum
 */
export const M2tsCcDescriptor = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type M2tsCcDescriptor = (typeof M2tsCcDescriptor)[keyof typeof M2tsCcDescriptor];

/**
 * @public
 * @enum
 */
export const DvbSdtOutputSdt = {
  SDT_FOLLOW: "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT: "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL: "SDT_MANUAL",
  SDT_NONE: "SDT_NONE",
} as const;
/**
 * @public
 */
export type DvbSdtOutputSdt = (typeof DvbSdtOutputSdt)[keyof typeof DvbSdtOutputSdt];

/**
 * @public
 * @enum
 */
export const M2tsEbifControl = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M2tsEbifControl = (typeof M2tsEbifControl)[keyof typeof M2tsEbifControl];

/**
 * @public
 * @enum
 */
export const M2tsAudioInterval = {
  VIDEO_AND_FIXED_INTERVALS: "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL: "VIDEO_INTERVAL",
} as const;
/**
 * @public
 */
export type M2tsAudioInterval = (typeof M2tsAudioInterval)[keyof typeof M2tsAudioInterval];

/**
 * @public
 * @enum
 */
export const M2tsEbpPlacement = {
  VIDEO_AND_AUDIO_PIDS: "VIDEO_AND_AUDIO_PIDS",
  VIDEO_PID: "VIDEO_PID",
} as const;
/**
 * @public
 */
export type M2tsEbpPlacement = (typeof M2tsEbpPlacement)[keyof typeof M2tsEbpPlacement];

/**
 * @public
 * @enum
 */
export const M2tsEsRateInPes = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type M2tsEsRateInPes = (typeof M2tsEsRateInPes)[keyof typeof M2tsEsRateInPes];

/**
 * @public
 * @enum
 */
export const M2tsKlv = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M2tsKlv = (typeof M2tsKlv)[keyof typeof M2tsKlv];

/**
 * @public
 * @enum
 */
export const M2tsNielsenId3Behavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M2tsNielsenId3Behavior = (typeof M2tsNielsenId3Behavior)[keyof typeof M2tsNielsenId3Behavior];

/**
 * @public
 * @enum
 */
export const M2tsPcrControl = {
  CONFIGURED_PCR_PERIOD: "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET: "PCR_EVERY_PES_PACKET",
} as const;
/**
 * @public
 */
export type M2tsPcrControl = (typeof M2tsPcrControl)[keyof typeof M2tsPcrControl];

/**
 * @public
 * @enum
 */
export const M2tsRateMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type M2tsRateMode = (typeof M2tsRateMode)[keyof typeof M2tsRateMode];

/**
 * @public
 * @enum
 */
export const M2tsScte35Control = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M2tsScte35Control = (typeof M2tsScte35Control)[keyof typeof M2tsScte35Control];

/**
 * @public
 * @enum
 */
export const M2tsSegmentationMarkers = {
  EBP: "EBP",
  EBP_LEGACY: "EBP_LEGACY",
  NONE: "NONE",
  PSI_SEGSTART: "PSI_SEGSTART",
  RAI_ADAPT: "RAI_ADAPT",
  RAI_SEGSTART: "RAI_SEGSTART",
} as const;
/**
 * @public
 */
export type M2tsSegmentationMarkers = (typeof M2tsSegmentationMarkers)[keyof typeof M2tsSegmentationMarkers];

/**
 * @public
 * @enum
 */
export const M2tsSegmentationStyle = {
  MAINTAIN_CADENCE: "MAINTAIN_CADENCE",
  RESET_CADENCE: "RESET_CADENCE",
} as const;
/**
 * @public
 */
export type M2tsSegmentationStyle = (typeof M2tsSegmentationStyle)[keyof typeof M2tsSegmentationStyle];

/**
 * @public
 * @enum
 */
export const M2tsTimedMetadataBehavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M2tsTimedMetadataBehavior = (typeof M2tsTimedMetadataBehavior)[keyof typeof M2tsTimedMetadataBehavior];

/**
 * @public
 * @enum
 */
export const HlsH265PackagingType = {
  HEV1: "HEV1",
  HVC1: "HVC1",
} as const;
/**
 * @public
 */
export type HlsH265PackagingType = (typeof HlsH265PackagingType)[keyof typeof HlsH265PackagingType];

/**
 * @public
 * @enum
 */
export const AudioOnlyHlsTrackType = {
  ALTERNATE_AUDIO_AUTO_SELECT: "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT: "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM: "AUDIO_ONLY_VARIANT_STREAM",
} as const;
/**
 * @public
 */
export type AudioOnlyHlsTrackType = (typeof AudioOnlyHlsTrackType)[keyof typeof AudioOnlyHlsTrackType];

/**
 * @public
 * @enum
 */
export const AudioOnlyHlsSegmentType = {
  AAC: "AAC",
  FMP4: "FMP4",
} as const;
/**
 * @public
 */
export type AudioOnlyHlsSegmentType = (typeof AudioOnlyHlsSegmentType)[keyof typeof AudioOnlyHlsSegmentType];

/**
 * @public
 * @enum
 */
export const Fmp4NielsenId3Behavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type Fmp4NielsenId3Behavior = (typeof Fmp4NielsenId3Behavior)[keyof typeof Fmp4NielsenId3Behavior];

/**
 * @public
 * @enum
 */
export const Fmp4TimedMetadataBehavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type Fmp4TimedMetadataBehavior = (typeof Fmp4TimedMetadataBehavior)[keyof typeof Fmp4TimedMetadataBehavior];

/**
 * @public
 * @enum
 */
export const M3u8KlvBehavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M3u8KlvBehavior = (typeof M3u8KlvBehavior)[keyof typeof M3u8KlvBehavior];

/**
 * @public
 * @enum
 */
export const M3u8NielsenId3Behavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M3u8NielsenId3Behavior = (typeof M3u8NielsenId3Behavior)[keyof typeof M3u8NielsenId3Behavior];

/**
 * @public
 * @enum
 */
export const M3u8PcrControl = {
  CONFIGURED_PCR_PERIOD: "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET: "PCR_EVERY_PES_PACKET",
} as const;
/**
 * @public
 */
export type M3u8PcrControl = (typeof M3u8PcrControl)[keyof typeof M3u8PcrControl];

/**
 * @public
 * @enum
 */
export const M3u8Scte35Behavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M3u8Scte35Behavior = (typeof M3u8Scte35Behavior)[keyof typeof M3u8Scte35Behavior];

/**
 * @public
 * @enum
 */
export const M3u8TimedMetadataBehavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M3u8TimedMetadataBehavior = (typeof M3u8TimedMetadataBehavior)[keyof typeof M3u8TimedMetadataBehavior];

/**
 * @public
 * @enum
 */
export const HlsAutoSelect = {
  NO: "NO",
  OMIT: "OMIT",
  YES: "YES",
} as const;
/**
 * @public
 */
export type HlsAutoSelect = (typeof HlsAutoSelect)[keyof typeof HlsAutoSelect];

/**
 * @public
 * @enum
 */
export const HlsDefault = {
  NO: "NO",
  OMIT: "OMIT",
  YES: "YES",
} as const;
/**
 * @public
 */
export type HlsDefault = (typeof HlsDefault)[keyof typeof HlsDefault];

/**
 * @public
 * @enum
 */
export const MsSmoothH265PackagingType = {
  HEV1: "HEV1",
  HVC1: "HVC1",
} as const;
/**
 * @public
 */
export type MsSmoothH265PackagingType = (typeof MsSmoothH265PackagingType)[keyof typeof MsSmoothH265PackagingType];

/**
 * @public
 * @enum
 */
export const RtmpOutputCertificateMode = {
  SELF_SIGNED: "SELF_SIGNED",
  VERIFY_AUTHENTICITY: "VERIFY_AUTHENTICITY",
} as const;
/**
 * @public
 */
export type RtmpOutputCertificateMode = (typeof RtmpOutputCertificateMode)[keyof typeof RtmpOutputCertificateMode];

/**
 * @public
 * @enum
 */
export const SrtEncryptionType = {
  AES128: "AES128",
  AES192: "AES192",
  AES256: "AES256",
} as const;
/**
 * @public
 */
export type SrtEncryptionType = (typeof SrtEncryptionType)[keyof typeof SrtEncryptionType];

/**
 * @public
 * @enum
 */
export const FecOutputIncludeFec = {
  COLUMN: "COLUMN",
  COLUMN_AND_ROW: "COLUMN_AND_ROW",
} as const;
/**
 * @public
 */
export type FecOutputIncludeFec = (typeof FecOutputIncludeFec)[keyof typeof FecOutputIncludeFec];

/**
 * @public
 * @enum
 */
export const S3CannedAcl = {
  AUTHENTICATED_READ: "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL: "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ: "BUCKET_OWNER_READ",
  PUBLIC_READ: "PUBLIC_READ",
} as const;
/**
 * @public
 */
export type S3CannedAcl = (typeof S3CannedAcl)[keyof typeof S3CannedAcl];

/**
 * @public
 * @enum
 */
export const CmafId3Behavior = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CmafId3Behavior = (typeof CmafId3Behavior)[keyof typeof CmafId3Behavior];

/**
 * @public
 * @enum
 */
export const CmafKLVBehavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type CmafKLVBehavior = (typeof CmafKLVBehavior)[keyof typeof CmafKLVBehavior];

/**
 * @public
 * @enum
 */
export const CmafNielsenId3Behavior = {
  NO_PASSTHROUGH: "NO_PASSTHROUGH",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type CmafNielsenId3Behavior = (typeof CmafNielsenId3Behavior)[keyof typeof CmafNielsenId3Behavior];

/**
 * @public
 * @enum
 */
export const Scte35Type = {
  NONE: "NONE",
  SCTE_35_WITHOUT_SEGMENTATION: "SCTE_35_WITHOUT_SEGMENTATION",
} as const;
/**
 * @public
 */
export type Scte35Type = (typeof Scte35Type)[keyof typeof Scte35Type];

/**
 * @public
 * @enum
 */
export const CmafIngestSegmentLengthUnits = {
  MILLISECONDS: "MILLISECONDS",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type CmafIngestSegmentLengthUnits =
  (typeof CmafIngestSegmentLengthUnits)[keyof typeof CmafIngestSegmentLengthUnits];

/**
 * @public
 * @enum
 */
export const CmafTimedMetadataId3Frame = {
  NONE: "NONE",
  PRIV: "PRIV",
  TDRL: "TDRL",
} as const;
/**
 * @public
 */
export type CmafTimedMetadataId3Frame = (typeof CmafTimedMetadataId3Frame)[keyof typeof CmafTimedMetadataId3Frame];

/**
 * @public
 * @enum
 */
export const CmafTimedMetadataPassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CmafTimedMetadataPassthrough =
  (typeof CmafTimedMetadataPassthrough)[keyof typeof CmafTimedMetadataPassthrough];

/**
 * @public
 * @enum
 */
export const HlsCaptionLanguageSetting = {
  INSERT: "INSERT",
  NONE: "NONE",
  OMIT: "OMIT",
} as const;
/**
 * @public
 */
export type HlsCaptionLanguageSetting = (typeof HlsCaptionLanguageSetting)[keyof typeof HlsCaptionLanguageSetting];

/**
 * @public
 * @enum
 */
export const HlsClientCache = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type HlsClientCache = (typeof HlsClientCache)[keyof typeof HlsClientCache];

/**
 * @public
 * @enum
 */
export const HlsCodecSpecification = {
  RFC_4281: "RFC_4281",
  RFC_6381: "RFC_6381",
} as const;
/**
 * @public
 */
export type HlsCodecSpecification = (typeof HlsCodecSpecification)[keyof typeof HlsCodecSpecification];

/**
 * @public
 * @enum
 */
export const HlsDirectoryStructure = {
  SINGLE_DIRECTORY: "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM: "SUBDIRECTORY_PER_STREAM",
} as const;
/**
 * @public
 */
export type HlsDirectoryStructure = (typeof HlsDirectoryStructure)[keyof typeof HlsDirectoryStructure];

/**
 * @public
 * @enum
 */
export const HlsDiscontinuityTags = {
  INSERT: "INSERT",
  NEVER_INSERT: "NEVER_INSERT",
} as const;
/**
 * @public
 */
export type HlsDiscontinuityTags = (typeof HlsDiscontinuityTags)[keyof typeof HlsDiscontinuityTags];

/**
 * @public
 * @enum
 */
export const HlsEncryptionType = {
  AES128: "AES128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;
/**
 * @public
 */
export type HlsEncryptionType = (typeof HlsEncryptionType)[keyof typeof HlsEncryptionType];

/**
 * @public
 * @enum
 */
export const HlsAkamaiHttpTransferMode = {
  CHUNKED: "CHUNKED",
  NON_CHUNKED: "NON_CHUNKED",
} as const;
/**
 * @public
 */
export type HlsAkamaiHttpTransferMode = (typeof HlsAkamaiHttpTransferMode)[keyof typeof HlsAkamaiHttpTransferMode];

/**
 * @public
 * @enum
 */
export const HlsMediaStoreStorageClass = {
  TEMPORAL: "TEMPORAL",
} as const;
/**
 * @public
 */
export type HlsMediaStoreStorageClass = (typeof HlsMediaStoreStorageClass)[keyof typeof HlsMediaStoreStorageClass];

/**
 * @public
 * @enum
 */
export const HlsWebdavHttpTransferMode = {
  CHUNKED: "CHUNKED",
  NON_CHUNKED: "NON_CHUNKED",
} as const;
/**
 * @public
 */
export type HlsWebdavHttpTransferMode = (typeof HlsWebdavHttpTransferMode)[keyof typeof HlsWebdavHttpTransferMode];

/**
 * @public
 * @enum
 */
export const HlsId3SegmentTaggingState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type HlsId3SegmentTaggingState = (typeof HlsId3SegmentTaggingState)[keyof typeof HlsId3SegmentTaggingState];

/**
 * @public
 * @enum
 */
export const IFrameOnlyPlaylistType = {
  DISABLED: "DISABLED",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type IFrameOnlyPlaylistType = (typeof IFrameOnlyPlaylistType)[keyof typeof IFrameOnlyPlaylistType];

/**
 * @public
 * @enum
 */
export const HlsIncompleteSegmentBehavior = {
  AUTO: "AUTO",
  SUPPRESS: "SUPPRESS",
} as const;
/**
 * @public
 */
export type HlsIncompleteSegmentBehavior =
  (typeof HlsIncompleteSegmentBehavior)[keyof typeof HlsIncompleteSegmentBehavior];

/**
 * @public
 * @enum
 */
export const InputLossActionForHlsOut = {
  EMIT_OUTPUT: "EMIT_OUTPUT",
  PAUSE_OUTPUT: "PAUSE_OUTPUT",
} as const;
/**
 * @public
 */
export type InputLossActionForHlsOut = (typeof InputLossActionForHlsOut)[keyof typeof InputLossActionForHlsOut];

/**
 * @public
 * @enum
 */
export const HlsIvInManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type HlsIvInManifest = (typeof HlsIvInManifest)[keyof typeof HlsIvInManifest];

/**
 * @public
 * @enum
 */
export const HlsIvSource = {
  EXPLICIT: "EXPLICIT",
  FOLLOWS_SEGMENT_NUMBER: "FOLLOWS_SEGMENT_NUMBER",
} as const;
/**
 * @public
 */
export type HlsIvSource = (typeof HlsIvSource)[keyof typeof HlsIvSource];

/**
 * @public
 * @enum
 */
export const HlsManifestCompression = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type HlsManifestCompression = (typeof HlsManifestCompression)[keyof typeof HlsManifestCompression];

/**
 * @public
 * @enum
 */
export const HlsManifestDurationFormat = {
  FLOATING_POINT: "FLOATING_POINT",
  INTEGER: "INTEGER",
} as const;
/**
 * @public
 */
export type HlsManifestDurationFormat = (typeof HlsManifestDurationFormat)[keyof typeof HlsManifestDurationFormat];

/**
 * @public
 * @enum
 */
export const HlsMode = {
  LIVE: "LIVE",
  VOD: "VOD",
} as const;
/**
 * @public
 */
export type HlsMode = (typeof HlsMode)[keyof typeof HlsMode];

/**
 * @public
 * @enum
 */
export const HlsOutputSelection = {
  MANIFESTS_AND_SEGMENTS: "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY: "SEGMENTS_ONLY",
  VARIANT_MANIFESTS_AND_SEGMENTS: "VARIANT_MANIFESTS_AND_SEGMENTS",
} as const;
/**
 * @public
 */
export type HlsOutputSelection = (typeof HlsOutputSelection)[keyof typeof HlsOutputSelection];

/**
 * @public
 * @enum
 */
export const HlsProgramDateTime = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type HlsProgramDateTime = (typeof HlsProgramDateTime)[keyof typeof HlsProgramDateTime];

/**
 * @public
 * @enum
 */
export const HlsProgramDateTimeClock = {
  INITIALIZE_FROM_OUTPUT_TIMECODE: "INITIALIZE_FROM_OUTPUT_TIMECODE",
  SYSTEM_CLOCK: "SYSTEM_CLOCK",
} as const;
/**
 * @public
 */
export type HlsProgramDateTimeClock = (typeof HlsProgramDateTimeClock)[keyof typeof HlsProgramDateTimeClock];

/**
 * @public
 * @enum
 */
export const HlsRedundantManifest = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type HlsRedundantManifest = (typeof HlsRedundantManifest)[keyof typeof HlsRedundantManifest];

/**
 * @public
 * @enum
 */
export const HlsSegmentationMode = {
  USE_INPUT_SEGMENTATION: "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION: "USE_SEGMENT_DURATION",
} as const;
/**
 * @public
 */
export type HlsSegmentationMode = (typeof HlsSegmentationMode)[keyof typeof HlsSegmentationMode];

/**
 * @public
 * @enum
 */
export const HlsStreamInfResolution = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type HlsStreamInfResolution = (typeof HlsStreamInfResolution)[keyof typeof HlsStreamInfResolution];

/**
 * @public
 * @enum
 */
export const HlsTimedMetadataId3Frame = {
  NONE: "NONE",
  PRIV: "PRIV",
  TDRL: "TDRL",
} as const;
/**
 * @public
 */
export type HlsTimedMetadataId3Frame = (typeof HlsTimedMetadataId3Frame)[keyof typeof HlsTimedMetadataId3Frame];

/**
 * @public
 * @enum
 */
export const HlsTsFileMode = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;
/**
 * @public
 */
export type HlsTsFileMode = (typeof HlsTsFileMode)[keyof typeof HlsTsFileMode];

/**
 * @public
 * @enum
 */
export const SmoothGroupAudioOnlyTimecodeControl = {
  PASSTHROUGH: "PASSTHROUGH",
  USE_CONFIGURED_CLOCK: "USE_CONFIGURED_CLOCK",
} as const;
/**
 * @public
 */
export type SmoothGroupAudioOnlyTimecodeControl =
  (typeof SmoothGroupAudioOnlyTimecodeControl)[keyof typeof SmoothGroupAudioOnlyTimecodeControl];

/**
 * @public
 * @enum
 */
export const SmoothGroupCertificateMode = {
  SELF_SIGNED: "SELF_SIGNED",
  VERIFY_AUTHENTICITY: "VERIFY_AUTHENTICITY",
} as const;
/**
 * @public
 */
export type SmoothGroupCertificateMode = (typeof SmoothGroupCertificateMode)[keyof typeof SmoothGroupCertificateMode];

/**
 * @public
 * @enum
 */
export const SmoothGroupEventIdMode = {
  NO_EVENT_ID: "NO_EVENT_ID",
  USE_CONFIGURED: "USE_CONFIGURED",
  USE_TIMESTAMP: "USE_TIMESTAMP",
} as const;
/**
 * @public
 */
export type SmoothGroupEventIdMode = (typeof SmoothGroupEventIdMode)[keyof typeof SmoothGroupEventIdMode];

/**
 * @public
 * @enum
 */
export const SmoothGroupEventStopBehavior = {
  NONE: "NONE",
  SEND_EOS: "SEND_EOS",
} as const;
/**
 * @public
 */
export type SmoothGroupEventStopBehavior =
  (typeof SmoothGroupEventStopBehavior)[keyof typeof SmoothGroupEventStopBehavior];

/**
 * @public
 * @enum
 */
export const InputLossActionForMsSmoothOut = {
  EMIT_OUTPUT: "EMIT_OUTPUT",
  PAUSE_OUTPUT: "PAUSE_OUTPUT",
} as const;
/**
 * @public
 */
export type InputLossActionForMsSmoothOut =
  (typeof InputLossActionForMsSmoothOut)[keyof typeof InputLossActionForMsSmoothOut];

/**
 * @public
 * @enum
 */
export const SmoothGroupSegmentationMode = {
  USE_INPUT_SEGMENTATION: "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION: "USE_SEGMENT_DURATION",
} as const;
/**
 * @public
 */
export type SmoothGroupSegmentationMode =
  (typeof SmoothGroupSegmentationMode)[keyof typeof SmoothGroupSegmentationMode];

/**
 * @public
 * @enum
 */
export const SmoothGroupSparseTrackType = {
  NONE: "NONE",
  SCTE_35: "SCTE_35",
  SCTE_35_WITHOUT_SEGMENTATION: "SCTE_35_WITHOUT_SEGMENTATION",
} as const;
/**
 * @public
 */
export type SmoothGroupSparseTrackType = (typeof SmoothGroupSparseTrackType)[keyof typeof SmoothGroupSparseTrackType];

/**
 * @public
 * @enum
 */
export const SmoothGroupStreamManifestBehavior = {
  DO_NOT_SEND: "DO_NOT_SEND",
  SEND: "SEND",
} as const;
/**
 * @public
 */
export type SmoothGroupStreamManifestBehavior =
  (typeof SmoothGroupStreamManifestBehavior)[keyof typeof SmoothGroupStreamManifestBehavior];

/**
 * @public
 * @enum
 */
export const SmoothGroupTimestampOffsetMode = {
  USE_CONFIGURED_OFFSET: "USE_CONFIGURED_OFFSET",
  USE_EVENT_START_DATE: "USE_EVENT_START_DATE",
} as const;
/**
 * @public
 */
export type SmoothGroupTimestampOffsetMode =
  (typeof SmoothGroupTimestampOffsetMode)[keyof typeof SmoothGroupTimestampOffsetMode];

/**
 * @public
 * @enum
 */
export const RtmpAdMarkers = {
  ON_CUE_POINT_SCTE35: "ON_CUE_POINT_SCTE35",
} as const;
/**
 * @public
 */
export type RtmpAdMarkers = (typeof RtmpAdMarkers)[keyof typeof RtmpAdMarkers];

/**
 * @public
 * @enum
 */
export const AuthenticationScheme = {
  AKAMAI: "AKAMAI",
  COMMON: "COMMON",
} as const;
/**
 * @public
 */
export type AuthenticationScheme = (typeof AuthenticationScheme)[keyof typeof AuthenticationScheme];

/**
 * @public
 * @enum
 */
export const RtmpCacheFullBehavior = {
  DISCONNECT_IMMEDIATELY: "DISCONNECT_IMMEDIATELY",
  WAIT_FOR_SERVER: "WAIT_FOR_SERVER",
} as const;
/**
 * @public
 */
export type RtmpCacheFullBehavior = (typeof RtmpCacheFullBehavior)[keyof typeof RtmpCacheFullBehavior];

/**
 * @public
 * @enum
 */
export const RtmpCaptionData = {
  ALL: "ALL",
  FIELD1_608: "FIELD1_608",
  FIELD1_AND_FIELD2_608: "FIELD1_AND_FIELD2_608",
} as const;
/**
 * @public
 */
export type RtmpCaptionData = (typeof RtmpCaptionData)[keyof typeof RtmpCaptionData];

/**
 * @public
 * @enum
 */
export const IncludeFillerNalUnits = {
  AUTO: "AUTO",
  DROP: "DROP",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type IncludeFillerNalUnits = (typeof IncludeFillerNalUnits)[keyof typeof IncludeFillerNalUnits];

/**
 * @public
 * @enum
 */
export const InputLossActionForRtmpOut = {
  EMIT_OUTPUT: "EMIT_OUTPUT",
  PAUSE_OUTPUT: "PAUSE_OUTPUT",
} as const;
/**
 * @public
 */
export type InputLossActionForRtmpOut = (typeof InputLossActionForRtmpOut)[keyof typeof InputLossActionForRtmpOut];

/**
 * @public
 * @enum
 */
export const InputLossActionForUdpOut = {
  DROP_PROGRAM: "DROP_PROGRAM",
  DROP_TS: "DROP_TS",
  EMIT_PROGRAM: "EMIT_PROGRAM",
} as const;
/**
 * @public
 */
export type InputLossActionForUdpOut = (typeof InputLossActionForUdpOut)[keyof typeof InputLossActionForUdpOut];

/**
 * @public
 * @enum
 */
export const UdpTimedMetadataId3Frame = {
  NONE: "NONE",
  PRIV: "PRIV",
  TDRL: "TDRL",
} as const;
/**
 * @public
 */
export type UdpTimedMetadataId3Frame = (typeof UdpTimedMetadataId3Frame)[keyof typeof UdpTimedMetadataId3Frame];

/**
 * @public
 * @enum
 */
export const PipelineId = {
  PIPELINE_0: "PIPELINE_0",
  PIPELINE_1: "PIPELINE_1",
} as const;
/**
 * @public
 */
export type PipelineId = (typeof PipelineId)[keyof typeof PipelineId];

/**
 * @public
 * @enum
 */
export const ReservationAutomaticRenewal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type ReservationAutomaticRenewal =
  (typeof ReservationAutomaticRenewal)[keyof typeof ReservationAutomaticRenewal];

/**
 * @public
 * @enum
 */
export const ReservationState = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  DELETED: "DELETED",
  EXPIRED: "EXPIRED",
} as const;
/**
 * @public
 */
export type ReservationState = (typeof ReservationState)[keyof typeof ReservationState];

/**
 * @public
 * @enum
 */
export const InputTimecodeSource = {
  EMBEDDED: "EMBEDDED",
  ZEROBASED: "ZEROBASED",
} as const;
/**
 * @public
 */
export type InputTimecodeSource = (typeof InputTimecodeSource)[keyof typeof InputTimecodeSource];

/**
 * @public
 * @enum
 */
export const LastFrameClippingBehavior = {
  EXCLUDE_LAST_FRAME: "EXCLUDE_LAST_FRAME",
  INCLUDE_LAST_FRAME: "INCLUDE_LAST_FRAME",
} as const;
/**
 * @public
 */
export type LastFrameClippingBehavior = (typeof LastFrameClippingBehavior)[keyof typeof LastFrameClippingBehavior];

/**
 * @public
 * @enum
 */
export const Scte35InputMode = {
  FIXED: "FIXED",
  FOLLOW_ACTIVE: "FOLLOW_ACTIVE",
} as const;
/**
 * @public
 */
export type Scte35InputMode = (typeof Scte35InputMode)[keyof typeof Scte35InputMode];

/**
 * @public
 * @enum
 */
export const Scte35ArchiveAllowedFlag = {
  ARCHIVE_ALLOWED: "ARCHIVE_ALLOWED",
  ARCHIVE_NOT_ALLOWED: "ARCHIVE_NOT_ALLOWED",
} as const;
/**
 * @public
 */
export type Scte35ArchiveAllowedFlag = (typeof Scte35ArchiveAllowedFlag)[keyof typeof Scte35ArchiveAllowedFlag];

/**
 * @public
 * @enum
 */
export const Scte35DeviceRestrictions = {
  NONE: "NONE",
  RESTRICT_GROUP0: "RESTRICT_GROUP0",
  RESTRICT_GROUP1: "RESTRICT_GROUP1",
  RESTRICT_GROUP2: "RESTRICT_GROUP2",
} as const;
/**
 * @public
 */
export type Scte35DeviceRestrictions = (typeof Scte35DeviceRestrictions)[keyof typeof Scte35DeviceRestrictions];

/**
 * @public
 * @enum
 */
export const Scte35NoRegionalBlackoutFlag = {
  NO_REGIONAL_BLACKOUT: "NO_REGIONAL_BLACKOUT",
  REGIONAL_BLACKOUT: "REGIONAL_BLACKOUT",
} as const;
/**
 * @public
 */
export type Scte35NoRegionalBlackoutFlag =
  (typeof Scte35NoRegionalBlackoutFlag)[keyof typeof Scte35NoRegionalBlackoutFlag];

/**
 * @public
 * @enum
 */
export const Scte35WebDeliveryAllowedFlag = {
  WEB_DELIVERY_ALLOWED: "WEB_DELIVERY_ALLOWED",
  WEB_DELIVERY_NOT_ALLOWED: "WEB_DELIVERY_NOT_ALLOWED",
} as const;
/**
 * @public
 */
export type Scte35WebDeliveryAllowedFlag =
  (typeof Scte35WebDeliveryAllowedFlag)[keyof typeof Scte35WebDeliveryAllowedFlag];

/**
 * @public
 * @enum
 */
export const Scte35SegmentationCancelIndicator = {
  SEGMENTATION_EVENT_CANCELED: "SEGMENTATION_EVENT_CANCELED",
  SEGMENTATION_EVENT_NOT_CANCELED: "SEGMENTATION_EVENT_NOT_CANCELED",
} as const;
/**
 * @public
 */
export type Scte35SegmentationCancelIndicator =
  (typeof Scte35SegmentationCancelIndicator)[keyof typeof Scte35SegmentationCancelIndicator];

/**
 * @public
 * @enum
 */
export const FollowPoint = {
  END: "END",
  START: "START",
} as const;
/**
 * @public
 */
export type FollowPoint = (typeof FollowPoint)[keyof typeof FollowPoint];

/**
 * @public
 * @enum
 */
export const SdiSourceMode = {
  INTERLEAVE: "INTERLEAVE",
  QUADRANT: "QUADRANT",
} as const;
/**
 * @public
 */
export type SdiSourceMode = (typeof SdiSourceMode)[keyof typeof SdiSourceMode];

/**
 * @public
 * @enum
 */
export const SdiSourceState = {
  DELETED: "DELETED",
  IDLE: "IDLE",
  IN_USE: "IN_USE",
} as const;
/**
 * @public
 */
export type SdiSourceState = (typeof SdiSourceState)[keyof typeof SdiSourceState];

/**
 * @public
 * @enum
 */
export const SdiSourceType = {
  QUAD: "QUAD",
  SINGLE: "SINGLE",
} as const;
/**
 * @public
 */
export type SdiSourceType = (typeof SdiSourceType)[keyof typeof SdiSourceType];

/**
 * @public
 * @enum
 */
export const SignalMapMonitorDeploymentStatus = {
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DEPLOYMENT_COMPLETE: "DEPLOYMENT_COMPLETE",
  DEPLOYMENT_FAILED: "DEPLOYMENT_FAILED",
  DEPLOYMENT_IN_PROGRESS: "DEPLOYMENT_IN_PROGRESS",
  DRY_RUN_DEPLOYMENT_COMPLETE: "DRY_RUN_DEPLOYMENT_COMPLETE",
  DRY_RUN_DEPLOYMENT_FAILED: "DRY_RUN_DEPLOYMENT_FAILED",
  DRY_RUN_DEPLOYMENT_IN_PROGRESS: "DRY_RUN_DEPLOYMENT_IN_PROGRESS",
  NOT_DEPLOYED: "NOT_DEPLOYED",
} as const;
/**
 * @public
 */
export type SignalMapMonitorDeploymentStatus =
  (typeof SignalMapMonitorDeploymentStatus)[keyof typeof SignalMapMonitorDeploymentStatus];

/**
 * @public
 * @enum
 */
export const SignalMapStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  NOT_READY: "NOT_READY",
  READY: "READY",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_REVERTED: "UPDATE_REVERTED",
} as const;
/**
 * @public
 */
export type SignalMapStatus = (typeof SignalMapStatus)[keyof typeof SignalMapStatus];

/**
 * @public
 * @enum
 */
export const ThumbnailType = {
  CURRENT_ACTIVE: "CURRENT_ACTIVE",
  UNSPECIFIED: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type ThumbnailType = (typeof ThumbnailType)[keyof typeof ThumbnailType];

/**
 * @public
 * @enum
 */
export const InputDeviceTransferType = {
  INCOMING: "INCOMING",
  OUTGOING: "OUTGOING",
} as const;
/**
 * @public
 */
export type InputDeviceTransferType = (typeof InputDeviceTransferType)[keyof typeof InputDeviceTransferType];

/**
 * @public
 * @enum
 */
export const AfdSignaling = {
  AUTO: "AUTO",
  FIXED: "FIXED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AfdSignaling = (typeof AfdSignaling)[keyof typeof AfdSignaling];

/**
 * @public
 * @enum
 */
export const FixedAfd = {
  AFD_0000: "AFD_0000",
  AFD_0010: "AFD_0010",
  AFD_0011: "AFD_0011",
  AFD_0100: "AFD_0100",
  AFD_1000: "AFD_1000",
  AFD_1001: "AFD_1001",
  AFD_1010: "AFD_1010",
  AFD_1011: "AFD_1011",
  AFD_1101: "AFD_1101",
  AFD_1110: "AFD_1110",
  AFD_1111: "AFD_1111",
} as const;
/**
 * @public
 */
export type FixedAfd = (typeof FixedAfd)[keyof typeof FixedAfd];

/**
 * @public
 * @enum
 */
export const Av1GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type Av1GopSizeUnits = (typeof Av1GopSizeUnits)[keyof typeof Av1GopSizeUnits];

/**
 * @public
 * @enum
 */
export const Av1Level = {
  AV1_LEVEL_2: "AV1_LEVEL_2",
  AV1_LEVEL_2_1: "AV1_LEVEL_2_1",
  AV1_LEVEL_3: "AV1_LEVEL_3",
  AV1_LEVEL_3_1: "AV1_LEVEL_3_1",
  AV1_LEVEL_4: "AV1_LEVEL_4",
  AV1_LEVEL_4_1: "AV1_LEVEL_4_1",
  AV1_LEVEL_5: "AV1_LEVEL_5",
  AV1_LEVEL_5_1: "AV1_LEVEL_5_1",
  AV1_LEVEL_5_2: "AV1_LEVEL_5_2",
  AV1_LEVEL_5_3: "AV1_LEVEL_5_3",
  AV1_LEVEL_6: "AV1_LEVEL_6",
  AV1_LEVEL_6_1: "AV1_LEVEL_6_1",
  AV1_LEVEL_6_2: "AV1_LEVEL_6_2",
  AV1_LEVEL_6_3: "AV1_LEVEL_6_3",
  AV1_LEVEL_AUTO: "AV1_LEVEL_AUTO",
} as const;
/**
 * @public
 */
export type Av1Level = (typeof Av1Level)[keyof typeof Av1Level];

/**
 * @public
 * @enum
 */
export const Av1LookAheadRateControl = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type Av1LookAheadRateControl = (typeof Av1LookAheadRateControl)[keyof typeof Av1LookAheadRateControl];

/**
 * @public
 * @enum
 */
export const Av1RateControlMode = {
  CBR: "CBR",
  QVBR: "QVBR",
} as const;
/**
 * @public
 */
export type Av1RateControlMode = (typeof Av1RateControlMode)[keyof typeof Av1RateControlMode];

/**
 * @public
 * @enum
 */
export const Av1SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Av1SceneChangeDetect = (typeof Av1SceneChangeDetect)[keyof typeof Av1SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const Av1SpatialAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Av1SpatialAq = (typeof Av1SpatialAq)[keyof typeof Av1SpatialAq];

/**
 * @public
 * @enum
 */
export const Av1TemporalAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Av1TemporalAq = (typeof Av1TemporalAq)[keyof typeof Av1TemporalAq];

/**
 * @public
 * @enum
 */
export const TimecodeBurninFontSize = {
  EXTRA_SMALL_10: "EXTRA_SMALL_10",
  LARGE_48: "LARGE_48",
  MEDIUM_32: "MEDIUM_32",
  SMALL_16: "SMALL_16",
} as const;
/**
 * @public
 */
export type TimecodeBurninFontSize = (typeof TimecodeBurninFontSize)[keyof typeof TimecodeBurninFontSize];

/**
 * @public
 * @enum
 */
export const TimecodeBurninPosition = {
  BOTTOM_CENTER: "BOTTOM_CENTER",
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
  MIDDLE_CENTER: "MIDDLE_CENTER",
  MIDDLE_LEFT: "MIDDLE_LEFT",
  MIDDLE_RIGHT: "MIDDLE_RIGHT",
  TOP_CENTER: "TOP_CENTER",
  TOP_LEFT: "TOP_LEFT",
  TOP_RIGHT: "TOP_RIGHT",
} as const;
/**
 * @public
 */
export type TimecodeBurninPosition = (typeof TimecodeBurninPosition)[keyof typeof TimecodeBurninPosition];

/**
 * @public
 * @enum
 */
export const FrameCaptureIntervalUnit = {
  MILLISECONDS: "MILLISECONDS",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type FrameCaptureIntervalUnit = (typeof FrameCaptureIntervalUnit)[keyof typeof FrameCaptureIntervalUnit];

/**
 * @public
 * @enum
 */
export const H264AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type H264AdaptiveQuantization = (typeof H264AdaptiveQuantization)[keyof typeof H264AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H264ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;
/**
 * @public
 */
export type H264ColorMetadata = (typeof H264ColorMetadata)[keyof typeof H264ColorMetadata];

/**
 * @public
 * @enum
 */
export const H264EntropyEncoding = {
  CABAC: "CABAC",
  CAVLC: "CAVLC",
} as const;
/**
 * @public
 */
export type H264EntropyEncoding = (typeof H264EntropyEncoding)[keyof typeof H264EntropyEncoding];

/**
 * @public
 * @enum
 */
export const BandwidthReductionPostFilterSharpening = {
  DISABLED: "DISABLED",
  SHARPENING_1: "SHARPENING_1",
  SHARPENING_2: "SHARPENING_2",
  SHARPENING_3: "SHARPENING_3",
} as const;
/**
 * @public
 */
export type BandwidthReductionPostFilterSharpening =
  (typeof BandwidthReductionPostFilterSharpening)[keyof typeof BandwidthReductionPostFilterSharpening];

/**
 * @public
 * @enum
 */
export const BandwidthReductionFilterStrength = {
  AUTO: "AUTO",
  STRENGTH_1: "STRENGTH_1",
  STRENGTH_2: "STRENGTH_2",
  STRENGTH_3: "STRENGTH_3",
  STRENGTH_4: "STRENGTH_4",
} as const;
/**
 * @public
 */
export type BandwidthReductionFilterStrength =
  (typeof BandwidthReductionFilterStrength)[keyof typeof BandwidthReductionFilterStrength];

/**
 * @public
 * @enum
 */
export const TemporalFilterPostFilterSharpening = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TemporalFilterPostFilterSharpening =
  (typeof TemporalFilterPostFilterSharpening)[keyof typeof TemporalFilterPostFilterSharpening];

/**
 * @public
 * @enum
 */
export const TemporalFilterStrength = {
  AUTO: "AUTO",
  STRENGTH_1: "STRENGTH_1",
  STRENGTH_10: "STRENGTH_10",
  STRENGTH_11: "STRENGTH_11",
  STRENGTH_12: "STRENGTH_12",
  STRENGTH_13: "STRENGTH_13",
  STRENGTH_14: "STRENGTH_14",
  STRENGTH_15: "STRENGTH_15",
  STRENGTH_16: "STRENGTH_16",
  STRENGTH_2: "STRENGTH_2",
  STRENGTH_3: "STRENGTH_3",
  STRENGTH_4: "STRENGTH_4",
  STRENGTH_5: "STRENGTH_5",
  STRENGTH_6: "STRENGTH_6",
  STRENGTH_7: "STRENGTH_7",
  STRENGTH_8: "STRENGTH_8",
  STRENGTH_9: "STRENGTH_9",
} as const;
/**
 * @public
 */
export type TemporalFilterStrength = (typeof TemporalFilterStrength)[keyof typeof TemporalFilterStrength];

/**
 * @public
 * @enum
 */
export const H264FlickerAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264FlickerAq = (typeof H264FlickerAq)[keyof typeof H264FlickerAq];

/**
 * @public
 * @enum
 */
export const H264ForceFieldPictures = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264ForceFieldPictures = (typeof H264ForceFieldPictures)[keyof typeof H264ForceFieldPictures];

/**
 * @public
 * @enum
 */
export const H264FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type H264FramerateControl = (typeof H264FramerateControl)[keyof typeof H264FramerateControl];

/**
 * @public
 * @enum
 */
export const H264GopBReference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264GopBReference = (typeof H264GopBReference)[keyof typeof H264GopBReference];

/**
 * @public
 * @enum
 */
export const H264GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type H264GopSizeUnits = (typeof H264GopSizeUnits)[keyof typeof H264GopSizeUnits];

/**
 * @public
 * @enum
 */
export const H264Level = {
  H264_LEVEL_1: "H264_LEVEL_1",
  H264_LEVEL_1_1: "H264_LEVEL_1_1",
  H264_LEVEL_1_2: "H264_LEVEL_1_2",
  H264_LEVEL_1_3: "H264_LEVEL_1_3",
  H264_LEVEL_2: "H264_LEVEL_2",
  H264_LEVEL_2_1: "H264_LEVEL_2_1",
  H264_LEVEL_2_2: "H264_LEVEL_2_2",
  H264_LEVEL_3: "H264_LEVEL_3",
  H264_LEVEL_3_1: "H264_LEVEL_3_1",
  H264_LEVEL_3_2: "H264_LEVEL_3_2",
  H264_LEVEL_4: "H264_LEVEL_4",
  H264_LEVEL_4_1: "H264_LEVEL_4_1",
  H264_LEVEL_4_2: "H264_LEVEL_4_2",
  H264_LEVEL_5: "H264_LEVEL_5",
  H264_LEVEL_5_1: "H264_LEVEL_5_1",
  H264_LEVEL_5_2: "H264_LEVEL_5_2",
  H264_LEVEL_AUTO: "H264_LEVEL_AUTO",
} as const;
/**
 * @public
 */
export type H264Level = (typeof H264Level)[keyof typeof H264Level];

/**
 * @public
 * @enum
 */
export const H264LookAheadRateControl = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type H264LookAheadRateControl = (typeof H264LookAheadRateControl)[keyof typeof H264LookAheadRateControl];

/**
 * @public
 * @enum
 */
export const H264ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type H264ParControl = (typeof H264ParControl)[keyof typeof H264ParControl];

/**
 * @public
 * @enum
 */
export const H264Profile = {
  BASELINE: "BASELINE",
  HIGH: "HIGH",
  HIGH_10BIT: "HIGH_10BIT",
  HIGH_422: "HIGH_422",
  HIGH_422_10BIT: "HIGH_422_10BIT",
  MAIN: "MAIN",
} as const;
/**
 * @public
 */
export type H264Profile = (typeof H264Profile)[keyof typeof H264Profile];

/**
 * @public
 * @enum
 */
export const H264QualityLevel = {
  ENHANCED_QUALITY: "ENHANCED_QUALITY",
  STANDARD_QUALITY: "STANDARD_QUALITY",
} as const;
/**
 * @public
 */
export type H264QualityLevel = (typeof H264QualityLevel)[keyof typeof H264QualityLevel];

/**
 * @public
 * @enum
 */
export const H264RateControlMode = {
  CBR: "CBR",
  MULTIPLEX: "MULTIPLEX",
  QVBR: "QVBR",
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type H264RateControlMode = (typeof H264RateControlMode)[keyof typeof H264RateControlMode];

/**
 * @public
 * @enum
 */
export const H264ScanType = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;
/**
 * @public
 */
export type H264ScanType = (typeof H264ScanType)[keyof typeof H264ScanType];

/**
 * @public
 * @enum
 */
export const H264SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264SceneChangeDetect = (typeof H264SceneChangeDetect)[keyof typeof H264SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H264SpatialAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264SpatialAq = (typeof H264SpatialAq)[keyof typeof H264SpatialAq];

/**
 * @public
 * @enum
 */
export const H264SubGopLength = {
  DYNAMIC: "DYNAMIC",
  FIXED: "FIXED",
} as const;
/**
 * @public
 */
export type H264SubGopLength = (typeof H264SubGopLength)[keyof typeof H264SubGopLength];

/**
 * @public
 * @enum
 */
export const H264Syntax = {
  DEFAULT: "DEFAULT",
  RP2027: "RP2027",
} as const;
/**
 * @public
 */
export type H264Syntax = (typeof H264Syntax)[keyof typeof H264Syntax];

/**
 * @public
 * @enum
 */
export const H264TemporalAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264TemporalAq = (typeof H264TemporalAq)[keyof typeof H264TemporalAq];

/**
 * @public
 * @enum
 */
export const H264TimecodeInsertionBehavior = {
  DISABLED: "DISABLED",
  PIC_TIMING_SEI: "PIC_TIMING_SEI",
} as const;
/**
 * @public
 */
export type H264TimecodeInsertionBehavior =
  (typeof H264TimecodeInsertionBehavior)[keyof typeof H264TimecodeInsertionBehavior];

/**
 * @public
 * @enum
 */
export const H265AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type H265AdaptiveQuantization = (typeof H265AdaptiveQuantization)[keyof typeof H265AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265AlternativeTransferFunction = {
  INSERT: "INSERT",
  OMIT: "OMIT",
} as const;
/**
 * @public
 */
export type H265AlternativeTransferFunction =
  (typeof H265AlternativeTransferFunction)[keyof typeof H265AlternativeTransferFunction];

/**
 * @public
 * @enum
 */
export const H265ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;
/**
 * @public
 */
export type H265ColorMetadata = (typeof H265ColorMetadata)[keyof typeof H265ColorMetadata];

/**
 * @public
 * @enum
 */
export const H265Deblocking = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265Deblocking = (typeof H265Deblocking)[keyof typeof H265Deblocking];

/**
 * @public
 * @enum
 */
export const H265FlickerAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265FlickerAq = (typeof H265FlickerAq)[keyof typeof H265FlickerAq];

/**
 * @public
 * @enum
 */
export const H265GopBReference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265GopBReference = (typeof H265GopBReference)[keyof typeof H265GopBReference];

/**
 * @public
 * @enum
 */
export const H265GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type H265GopSizeUnits = (typeof H265GopSizeUnits)[keyof typeof H265GopSizeUnits];

/**
 * @public
 * @enum
 */
export const H265Level = {
  H265_LEVEL_1: "H265_LEVEL_1",
  H265_LEVEL_2: "H265_LEVEL_2",
  H265_LEVEL_2_1: "H265_LEVEL_2_1",
  H265_LEVEL_3: "H265_LEVEL_3",
  H265_LEVEL_3_1: "H265_LEVEL_3_1",
  H265_LEVEL_4: "H265_LEVEL_4",
  H265_LEVEL_4_1: "H265_LEVEL_4_1",
  H265_LEVEL_5: "H265_LEVEL_5",
  H265_LEVEL_5_1: "H265_LEVEL_5_1",
  H265_LEVEL_5_2: "H265_LEVEL_5_2",
  H265_LEVEL_6: "H265_LEVEL_6",
  H265_LEVEL_6_1: "H265_LEVEL_6_1",
  H265_LEVEL_6_2: "H265_LEVEL_6_2",
  H265_LEVEL_AUTO: "H265_LEVEL_AUTO",
} as const;
/**
 * @public
 */
export type H265Level = (typeof H265Level)[keyof typeof H265Level];

/**
 * @public
 * @enum
 */
export const H265LookAheadRateControl = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type H265LookAheadRateControl = (typeof H265LookAheadRateControl)[keyof typeof H265LookAheadRateControl];

/**
 * @public
 * @enum
 */
export const H265MvOverPictureBoundaries = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265MvOverPictureBoundaries =
  (typeof H265MvOverPictureBoundaries)[keyof typeof H265MvOverPictureBoundaries];

/**
 * @public
 * @enum
 */
export const H265MvTemporalPredictor = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265MvTemporalPredictor = (typeof H265MvTemporalPredictor)[keyof typeof H265MvTemporalPredictor];

/**
 * @public
 * @enum
 */
export const H265Profile = {
  MAIN: "MAIN",
  MAIN_10BIT: "MAIN_10BIT",
} as const;
/**
 * @public
 */
export type H265Profile = (typeof H265Profile)[keyof typeof H265Profile];

/**
 * @public
 * @enum
 */
export const H265RateControlMode = {
  CBR: "CBR",
  MULTIPLEX: "MULTIPLEX",
  QVBR: "QVBR",
} as const;
/**
 * @public
 */
export type H265RateControlMode = (typeof H265RateControlMode)[keyof typeof H265RateControlMode];

/**
 * @public
 * @enum
 */
export const H265ScanType = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;
/**
 * @public
 */
export type H265ScanType = (typeof H265ScanType)[keyof typeof H265ScanType];

/**
 * @public
 * @enum
 */
export const H265SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265SceneChangeDetect = (typeof H265SceneChangeDetect)[keyof typeof H265SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H265SubGopLength = {
  DYNAMIC: "DYNAMIC",
  FIXED: "FIXED",
} as const;
/**
 * @public
 */
export type H265SubGopLength = (typeof H265SubGopLength)[keyof typeof H265SubGopLength];

/**
 * @public
 * @enum
 */
export const H265Tier = {
  HIGH: "HIGH",
  MAIN: "MAIN",
} as const;
/**
 * @public
 */
export type H265Tier = (typeof H265Tier)[keyof typeof H265Tier];

/**
 * @public
 * @enum
 */
export const H265TilePadding = {
  NONE: "NONE",
  PADDED: "PADDED",
} as const;
/**
 * @public
 */
export type H265TilePadding = (typeof H265TilePadding)[keyof typeof H265TilePadding];

/**
 * @public
 * @enum
 */
export const H265TimecodeInsertionBehavior = {
  DISABLED: "DISABLED",
  PIC_TIMING_SEI: "PIC_TIMING_SEI",
} as const;
/**
 * @public
 */
export type H265TimecodeInsertionBehavior =
  (typeof H265TimecodeInsertionBehavior)[keyof typeof H265TimecodeInsertionBehavior];

/**
 * @public
 * @enum
 */
export const H265TreeblockSize = {
  AUTO: "AUTO",
  TREE_SIZE_32X32: "TREE_SIZE_32X32",
} as const;
/**
 * @public
 */
export type H265TreeblockSize = (typeof H265TreeblockSize)[keyof typeof H265TreeblockSize];

/**
 * @public
 * @enum
 */
export const Mpeg2AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type Mpeg2AdaptiveQuantization = (typeof Mpeg2AdaptiveQuantization)[keyof typeof Mpeg2AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Mpeg2ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;
/**
 * @public
 */
export type Mpeg2ColorMetadata = (typeof Mpeg2ColorMetadata)[keyof typeof Mpeg2ColorMetadata];

/**
 * @public
 * @enum
 */
export const Mpeg2ColorSpace = {
  AUTO: "AUTO",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type Mpeg2ColorSpace = (typeof Mpeg2ColorSpace)[keyof typeof Mpeg2ColorSpace];

/**
 * @public
 * @enum
 */
export const Mpeg2DisplayRatio = {
  DISPLAYRATIO16X9: "DISPLAYRATIO16X9",
  DISPLAYRATIO4X3: "DISPLAYRATIO4X3",
} as const;
/**
 * @public
 */
export type Mpeg2DisplayRatio = (typeof Mpeg2DisplayRatio)[keyof typeof Mpeg2DisplayRatio];

/**
 * @public
 * @enum
 */
export const Mpeg2GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type Mpeg2GopSizeUnits = (typeof Mpeg2GopSizeUnits)[keyof typeof Mpeg2GopSizeUnits];

/**
 * @public
 * @enum
 */
export const Mpeg2ScanType = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;
/**
 * @public
 */
export type Mpeg2ScanType = (typeof Mpeg2ScanType)[keyof typeof Mpeg2ScanType];

/**
 * @public
 * @enum
 */
export const Mpeg2SubGopLength = {
  DYNAMIC: "DYNAMIC",
  FIXED: "FIXED",
} as const;
/**
 * @public
 */
export type Mpeg2SubGopLength = (typeof Mpeg2SubGopLength)[keyof typeof Mpeg2SubGopLength];

/**
 * @public
 * @enum
 */
export const Mpeg2TimecodeInsertionBehavior = {
  DISABLED: "DISABLED",
  GOP_TIMECODE: "GOP_TIMECODE",
} as const;
/**
 * @public
 */
export type Mpeg2TimecodeInsertionBehavior =
  (typeof Mpeg2TimecodeInsertionBehavior)[keyof typeof Mpeg2TimecodeInsertionBehavior];

/**
 * @public
 * @enum
 */
export const VideoDescriptionRespondToAfd = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
  RESPOND: "RESPOND",
} as const;
/**
 * @public
 */
export type VideoDescriptionRespondToAfd =
  (typeof VideoDescriptionRespondToAfd)[keyof typeof VideoDescriptionRespondToAfd];

/**
 * @public
 * @enum
 */
export const VideoDescriptionScalingBehavior = {
  DEFAULT: "DEFAULT",
  STRETCH_TO_OUTPUT: "STRETCH_TO_OUTPUT",
} as const;
/**
 * @public
 */
export type VideoDescriptionScalingBehavior =
  (typeof VideoDescriptionScalingBehavior)[keyof typeof VideoDescriptionScalingBehavior];

/**
 * @public
 * @enum
 */
export const AcceptHeader = {
  image_jpeg: "image/jpeg",
} as const;
/**
 * @public
 */
export type AcceptHeader = (typeof AcceptHeader)[keyof typeof AcceptHeader];

/**
 * @public
 * @enum
 */
export const AvailBlankingState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AvailBlankingState = (typeof AvailBlankingState)[keyof typeof AvailBlankingState];

/**
 * @public
 * @enum
 */
export const Scte35SpliceInsertNoRegionalBlackoutBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type Scte35SpliceInsertNoRegionalBlackoutBehavior =
  (typeof Scte35SpliceInsertNoRegionalBlackoutBehavior)[keyof typeof Scte35SpliceInsertNoRegionalBlackoutBehavior];

/**
 * @public
 * @enum
 */
export const Scte35SpliceInsertWebDeliveryAllowedBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type Scte35SpliceInsertWebDeliveryAllowedBehavior =
  (typeof Scte35SpliceInsertWebDeliveryAllowedBehavior)[keyof typeof Scte35SpliceInsertWebDeliveryAllowedBehavior];

/**
 * @public
 * @enum
 */
export const Scte35AposNoRegionalBlackoutBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type Scte35AposNoRegionalBlackoutBehavior =
  (typeof Scte35AposNoRegionalBlackoutBehavior)[keyof typeof Scte35AposNoRegionalBlackoutBehavior];

/**
 * @public
 * @enum
 */
export const Scte35AposWebDeliveryAllowedBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type Scte35AposWebDeliveryAllowedBehavior =
  (typeof Scte35AposWebDeliveryAllowedBehavior)[keyof typeof Scte35AposWebDeliveryAllowedBehavior];

/**
 * @public
 * @enum
 */
export const Scte35SegmentationScope = {
  ALL_OUTPUT_GROUPS: "ALL_OUTPUT_GROUPS",
  SCTE35_ENABLED_OUTPUT_GROUPS: "SCTE35_ENABLED_OUTPUT_GROUPS",
} as const;
/**
 * @public
 */
export type Scte35SegmentationScope = (typeof Scte35SegmentationScope)[keyof typeof Scte35SegmentationScope];

/**
 * @public
 * @enum
 */
export const BlackoutSlateNetworkEndBlackout = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type BlackoutSlateNetworkEndBlackout =
  (typeof BlackoutSlateNetworkEndBlackout)[keyof typeof BlackoutSlateNetworkEndBlackout];

/**
 * @public
 * @enum
 */
export const BlackoutSlateState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type BlackoutSlateState = (typeof BlackoutSlateState)[keyof typeof BlackoutSlateState];

/**
 * @public
 * @enum
 */
export const FeatureActivationsInputPrepareScheduleActions = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FeatureActivationsInputPrepareScheduleActions =
  (typeof FeatureActivationsInputPrepareScheduleActions)[keyof typeof FeatureActivationsInputPrepareScheduleActions];

/**
 * @public
 * @enum
 */
export const FeatureActivationsOutputStaticImageOverlayScheduleActions = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FeatureActivationsOutputStaticImageOverlayScheduleActions =
  (typeof FeatureActivationsOutputStaticImageOverlayScheduleActions)[keyof typeof FeatureActivationsOutputStaticImageOverlayScheduleActions];

/**
 * @public
 * @enum
 */
export const GlobalConfigurationInputEndAction = {
  NONE: "NONE",
  SWITCH_AND_LOOP_INPUTS: "SWITCH_AND_LOOP_INPUTS",
} as const;
/**
 * @public
 */
export type GlobalConfigurationInputEndAction =
  (typeof GlobalConfigurationInputEndAction)[keyof typeof GlobalConfigurationInputEndAction];

/**
 * @public
 * @enum
 */
export const InputLossImageType = {
  COLOR: "COLOR",
  SLATE: "SLATE",
} as const;
/**
 * @public
 */
export type InputLossImageType = (typeof InputLossImageType)[keyof typeof InputLossImageType];

/**
 * @public
 * @enum
 */
export const GlobalConfigurationOutputLockingMode = {
  DISABLED: "DISABLED",
  EPOCH_LOCKING: "EPOCH_LOCKING",
  PIPELINE_LOCKING: "PIPELINE_LOCKING",
} as const;
/**
 * @public
 */
export type GlobalConfigurationOutputLockingMode =
  (typeof GlobalConfigurationOutputLockingMode)[keyof typeof GlobalConfigurationOutputLockingMode];

/**
 * @public
 * @enum
 */
export const PipelineLockingMethod = {
  SOURCE_TIMECODE: "SOURCE_TIMECODE",
  VIDEO_ALIGNMENT: "VIDEO_ALIGNMENT",
} as const;
/**
 * @public
 */
export type PipelineLockingMethod = (typeof PipelineLockingMethod)[keyof typeof PipelineLockingMethod];

/**
 * @public
 * @enum
 */
export const GlobalConfigurationOutputTimingSource = {
  INPUT_CLOCK: "INPUT_CLOCK",
  SYSTEM_CLOCK: "SYSTEM_CLOCK",
} as const;
/**
 * @public
 */
export type GlobalConfigurationOutputTimingSource =
  (typeof GlobalConfigurationOutputTimingSource)[keyof typeof GlobalConfigurationOutputTimingSource];

/**
 * @public
 * @enum
 */
export const GlobalConfigurationLowFramerateInputs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type GlobalConfigurationLowFramerateInputs =
  (typeof GlobalConfigurationLowFramerateInputs)[keyof typeof GlobalConfigurationLowFramerateInputs];

/**
 * @public
 * @enum
 */
export const MotionGraphicsInsertion = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MotionGraphicsInsertion = (typeof MotionGraphicsInsertion)[keyof typeof MotionGraphicsInsertion];

/**
 * @public
 * @enum
 */
export const NielsenPcmToId3TaggingState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type NielsenPcmToId3TaggingState =
  (typeof NielsenPcmToId3TaggingState)[keyof typeof NielsenPcmToId3TaggingState];

/**
 * @public
 * @enum
 */
export const ThumbnailState = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type ThumbnailState = (typeof ThumbnailState)[keyof typeof ThumbnailState];

/**
 * @public
 * @enum
 */
export const TimecodeConfigSource = {
  EMBEDDED: "EMBEDDED",
  SYSTEMCLOCK: "SYSTEMCLOCK",
  ZEROBASED: "ZEROBASED",
} as const;
/**
 * @public
 */
export type TimecodeConfigSource = (typeof TimecodeConfigSource)[keyof typeof TimecodeConfigSource];

/**
 * @public
 * @enum
 */
export const ContentType = {
  image_jpeg: "image/jpeg",
} as const;
/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * @enum
 */
export const PreferredChannelPipeline = {
  CURRENTLY_ACTIVE: "CURRENTLY_ACTIVE",
  PIPELINE_0: "PIPELINE_0",
  PIPELINE_1: "PIPELINE_1",
} as const;
/**
 * @public
 */
export type PreferredChannelPipeline = (typeof PreferredChannelPipeline)[keyof typeof PreferredChannelPipeline];

/**
 * @public
 * @enum
 */
export const RebootInputDeviceForce = {
  NO: "NO",
  YES: "YES",
} as const;
/**
 * @public
 */
export type RebootInputDeviceForce = (typeof RebootInputDeviceForce)[keyof typeof RebootInputDeviceForce];

/**
 * @public
 * @enum
 */
export const UpdateNodeStateShape = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
} as const;
/**
 * @public
 */
export type UpdateNodeStateShape = (typeof UpdateNodeStateShape)[keyof typeof UpdateNodeStateShape];
