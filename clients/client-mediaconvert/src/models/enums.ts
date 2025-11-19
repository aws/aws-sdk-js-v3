// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RequiredFlag = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RequiredFlag = (typeof RequiredFlag)[keyof typeof RequiredFlag];

/**
 * @public
 * @enum
 */
export const AudioChannelTag = {
  C: "C",
  CS: "CS",
  HI: "HI",
  L: "L",
  LC: "LC",
  LFE: "LFE",
  LFE2: "LFE2",
  LS: "LS",
  LSD: "LSD",
  LT: "LT",
  LW: "LW",
  M: "M",
  NAR: "NAR",
  R: "R",
  RC: "RC",
  RS: "RS",
  RSD: "RSD",
  RSL: "RSL",
  RSR: "RSR",
  RT: "RT",
  RW: "RW",
  TBC: "TBC",
  TBL: "TBL",
  TBR: "TBR",
  TCS: "TCS",
  VHC: "VHC",
  VHL: "VHL",
  VHR: "VHR",
} as const;
/**
 * @public
 */
export type AudioChannelTag = (typeof AudioChannelTag)[keyof typeof AudioChannelTag];

/**
 * @public
 * @enum
 */
export const AudioNormalizationAlgorithm = {
  ITU_BS_1770_1: "ITU_BS_1770_1",
  ITU_BS_1770_2: "ITU_BS_1770_2",
  ITU_BS_1770_3: "ITU_BS_1770_3",
  ITU_BS_1770_4: "ITU_BS_1770_4",
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
  MEASURE_ONLY: "MEASURE_ONLY",
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
export const AudioNormalizationLoudnessLogging = {
  DONT_LOG: "DONT_LOG",
  LOG: "LOG",
} as const;
/**
 * @public
 */
export type AudioNormalizationLoudnessLogging =
  (typeof AudioNormalizationLoudnessLogging)[keyof typeof AudioNormalizationLoudnessLogging];

/**
 * @public
 * @enum
 */
export const AudioNormalizationPeakCalculation = {
  NONE: "NONE",
  TRUE_PEAK: "TRUE_PEAK",
} as const;
/**
 * @public
 */
export type AudioNormalizationPeakCalculation =
  (typeof AudioNormalizationPeakCalculation)[keyof typeof AudioNormalizationPeakCalculation];

/**
 * @public
 * @enum
 */
export const SlowPalPitchCorrection = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SlowPalPitchCorrection = (typeof SlowPalPitchCorrection)[keyof typeof SlowPalPitchCorrection];

/**
 * @public
 * @enum
 */
export const AudioTypeControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type AudioTypeControl = (typeof AudioTypeControl)[keyof typeof AudioTypeControl];

/**
 * @public
 * @enum
 */
export const AacAudioDescriptionBroadcasterMix = {
  BROADCASTER_MIXED_AD: "BROADCASTER_MIXED_AD",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type AacAudioDescriptionBroadcasterMix =
  (typeof AacAudioDescriptionBroadcasterMix)[keyof typeof AacAudioDescriptionBroadcasterMix];

/**
 * @public
 * @enum
 */
export const AacCodecProfile = {
  HEV1: "HEV1",
  HEV2: "HEV2",
  LC: "LC",
  XHE: "XHE",
} as const;
/**
 * @public
 */
export type AacCodecProfile = (typeof AacCodecProfile)[keyof typeof AacCodecProfile];

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
export const AacLoudnessMeasurementMode = {
  ANCHOR: "ANCHOR",
  PROGRAM: "PROGRAM",
} as const;
/**
 * @public
 */
export type AacLoudnessMeasurementMode = (typeof AacLoudnessMeasurementMode)[keyof typeof AacLoudnessMeasurementMode];

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
export const AacSpecification = {
  MPEG2: "MPEG2",
  MPEG4: "MPEG4",
} as const;
/**
 * @public
 */
export type AacSpecification = (typeof AacSpecification)[keyof typeof AacSpecification];

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
export const Ac3DynamicRangeCompressionLine = {
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
export type Ac3DynamicRangeCompressionLine =
  (typeof Ac3DynamicRangeCompressionLine)[keyof typeof Ac3DynamicRangeCompressionLine];

/**
 * @public
 * @enum
 */
export const Ac3DynamicRangeCompressionProfile = {
  FILM_STANDARD: "FILM_STANDARD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Ac3DynamicRangeCompressionProfile =
  (typeof Ac3DynamicRangeCompressionProfile)[keyof typeof Ac3DynamicRangeCompressionProfile];

/**
 * @public
 * @enum
 */
export const Ac3DynamicRangeCompressionRf = {
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
export type Ac3DynamicRangeCompressionRf =
  (typeof Ac3DynamicRangeCompressionRf)[keyof typeof Ac3DynamicRangeCompressionRf];

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
export const AudioCodec = {
  AAC: "AAC",
  AC3: "AC3",
  AIFF: "AIFF",
  EAC3: "EAC3",
  EAC3_ATMOS: "EAC3_ATMOS",
  FLAC: "FLAC",
  MP2: "MP2",
  MP3: "MP3",
  OPUS: "OPUS",
  PASSTHROUGH: "PASSTHROUGH",
  VORBIS: "VORBIS",
  WAV: "WAV",
} as const;
/**
 * @public
 */
export type AudioCodec = (typeof AudioCodec)[keyof typeof AudioCodec];

/**
 * @public
 * @enum
 */
export const Eac3AtmosBitstreamMode = {
  COMPLETE_MAIN: "COMPLETE_MAIN",
} as const;
/**
 * @public
 */
export type Eac3AtmosBitstreamMode = (typeof Eac3AtmosBitstreamMode)[keyof typeof Eac3AtmosBitstreamMode];

/**
 * @public
 * @enum
 */
export const Eac3AtmosCodingMode = {
  CODING_MODE_5_1_4: "CODING_MODE_5_1_4",
  CODING_MODE_7_1_4: "CODING_MODE_7_1_4",
  CODING_MODE_9_1_6: "CODING_MODE_9_1_6",
  CODING_MODE_AUTO: "CODING_MODE_AUTO",
} as const;
/**
 * @public
 */
export type Eac3AtmosCodingMode = (typeof Eac3AtmosCodingMode)[keyof typeof Eac3AtmosCodingMode];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDialogueIntelligence = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Eac3AtmosDialogueIntelligence =
  (typeof Eac3AtmosDialogueIntelligence)[keyof typeof Eac3AtmosDialogueIntelligence];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDownmixControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Eac3AtmosDownmixControl = (typeof Eac3AtmosDownmixControl)[keyof typeof Eac3AtmosDownmixControl];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDynamicRangeCompressionLine = {
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
export type Eac3AtmosDynamicRangeCompressionLine =
  (typeof Eac3AtmosDynamicRangeCompressionLine)[keyof typeof Eac3AtmosDynamicRangeCompressionLine];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDynamicRangeCompressionRf = {
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
export type Eac3AtmosDynamicRangeCompressionRf =
  (typeof Eac3AtmosDynamicRangeCompressionRf)[keyof typeof Eac3AtmosDynamicRangeCompressionRf];

/**
 * @public
 * @enum
 */
export const Eac3AtmosDynamicRangeControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Eac3AtmosDynamicRangeControl =
  (typeof Eac3AtmosDynamicRangeControl)[keyof typeof Eac3AtmosDynamicRangeControl];

/**
 * @public
 * @enum
 */
export const Eac3AtmosMeteringMode = {
  ITU_BS_1770_1: "ITU_BS_1770_1",
  ITU_BS_1770_2: "ITU_BS_1770_2",
  ITU_BS_1770_3: "ITU_BS_1770_3",
  ITU_BS_1770_4: "ITU_BS_1770_4",
  LEQ_A: "LEQ_A",
} as const;
/**
 * @public
 */
export type Eac3AtmosMeteringMode = (typeof Eac3AtmosMeteringMode)[keyof typeof Eac3AtmosMeteringMode];

/**
 * @public
 * @enum
 */
export const Eac3AtmosStereoDownmix = {
  DPL2: "DPL2",
  NOT_INDICATED: "NOT_INDICATED",
  STEREO: "STEREO",
  SURROUND: "SURROUND",
} as const;
/**
 * @public
 */
export type Eac3AtmosStereoDownmix = (typeof Eac3AtmosStereoDownmix)[keyof typeof Eac3AtmosStereoDownmix];

/**
 * @public
 * @enum
 */
export const Eac3AtmosSurroundExMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  NOT_INDICATED: "NOT_INDICATED",
} as const;
/**
 * @public
 */
export type Eac3AtmosSurroundExMode = (typeof Eac3AtmosSurroundExMode)[keyof typeof Eac3AtmosSurroundExMode];

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
export const Eac3DynamicRangeCompressionLine = {
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
export type Eac3DynamicRangeCompressionLine =
  (typeof Eac3DynamicRangeCompressionLine)[keyof typeof Eac3DynamicRangeCompressionLine];

/**
 * @public
 * @enum
 */
export const Eac3DynamicRangeCompressionRf = {
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
export type Eac3DynamicRangeCompressionRf =
  (typeof Eac3DynamicRangeCompressionRf)[keyof typeof Eac3DynamicRangeCompressionRf];

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
export const Mp2AudioDescriptionMix = {
  BROADCASTER_MIXED_AD: "BROADCASTER_MIXED_AD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Mp2AudioDescriptionMix = (typeof Mp2AudioDescriptionMix)[keyof typeof Mp2AudioDescriptionMix];

/**
 * @public
 * @enum
 */
export const Mp3RateControlMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type Mp3RateControlMode = (typeof Mp3RateControlMode)[keyof typeof Mp3RateControlMode];

/**
 * @public
 * @enum
 */
export const WavFormat = {
  EXTENSIBLE: "EXTENSIBLE",
  RF64: "RF64",
  RIFF: "RIFF",
} as const;
/**
 * @public
 */
export type WavFormat = (typeof WavFormat)[keyof typeof WavFormat];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  AAR: "AAR",
  ABK: "ABK",
  AFR: "AFR",
  AKA: "AKA",
  AMH: "AMH",
  ARA: "ARA",
  ARG: "ARG",
  ASM: "ASM",
  AVA: "AVA",
  AVE: "AVE",
  AYM: "AYM",
  AZE: "AZE",
  BAK: "BAK",
  BAM: "BAM",
  BEL: "BEL",
  BEN: "BEN",
  BIH: "BIH",
  BIS: "BIS",
  BOD: "BOD",
  BOS: "BOS",
  BRE: "BRE",
  BUL: "BUL",
  CAT: "CAT",
  CES: "CES",
  CHA: "CHA",
  CHE: "CHE",
  CHU: "CHU",
  CHV: "CHV",
  COR: "COR",
  COS: "COS",
  CRE: "CRE",
  CYM: "CYM",
  DAN: "DAN",
  DEU: "DEU",
  DIV: "DIV",
  DZO: "DZO",
  ELL: "ELL",
  ENG: "ENG",
  ENM: "ENM",
  EPO: "EPO",
  EST: "EST",
  EUS: "EUS",
  EWE: "EWE",
  FAO: "FAO",
  FAS: "FAS",
  FIJ: "FIJ",
  FIN: "FIN",
  FRA: "FRA",
  FRM: "FRM",
  FRY: "FRY",
  FUL: "FUL",
  GER: "GER",
  GLA: "GLA",
  GLE: "GLE",
  GLG: "GLG",
  GLV: "GLV",
  GRN: "GRN",
  GUJ: "GUJ",
  HAT: "HAT",
  HAU: "HAU",
  HEB: "HEB",
  HER: "HER",
  HIN: "HIN",
  HMO: "HMO",
  HRV: "HRV",
  HUN: "HUN",
  HYE: "HYE",
  IBO: "IBO",
  IDO: "IDO",
  III: "III",
  IKU: "IKU",
  ILE: "ILE",
  INA: "INA",
  IND: "IND",
  IPK: "IPK",
  ISL: "ISL",
  ITA: "ITA",
  JAV: "JAV",
  JPN: "JPN",
  KAL: "KAL",
  KAN: "KAN",
  KAS: "KAS",
  KAT: "KAT",
  KAU: "KAU",
  KAZ: "KAZ",
  KHM: "KHM",
  KIK: "KIK",
  KIN: "KIN",
  KIR: "KIR",
  KOM: "KOM",
  KON: "KON",
  KOR: "KOR",
  KUA: "KUA",
  KUR: "KUR",
  LAO: "LAO",
  LAT: "LAT",
  LAV: "LAV",
  LIM: "LIM",
  LIN: "LIN",
  LIT: "LIT",
  LTZ: "LTZ",
  LUB: "LUB",
  LUG: "LUG",
  MAH: "MAH",
  MAL: "MAL",
  MAR: "MAR",
  MKD: "MKD",
  MLG: "MLG",
  MLT: "MLT",
  MON: "MON",
  MRI: "MRI",
  MSA: "MSA",
  MYA: "MYA",
  NAU: "NAU",
  NAV: "NAV",
  NBL: "NBL",
  NDE: "NDE",
  NDO: "NDO",
  NEP: "NEP",
  NLD: "NLD",
  NNO: "NNO",
  NOB: "NOB",
  NOR: "NOR",
  NYA: "NYA",
  OCI: "OCI",
  OJI: "OJI",
  ORI: "ORI",
  ORJ: "ORJ",
  ORM: "ORM",
  OSS: "OSS",
  PAN: "PAN",
  PLI: "PLI",
  POL: "POL",
  POR: "POR",
  PUS: "PUS",
  QAA: "QAA",
  QPC: "QPC",
  QUE: "QUE",
  ROH: "ROH",
  RON: "RON",
  RUN: "RUN",
  RUS: "RUS",
  SAG: "SAG",
  SAN: "SAN",
  SIN: "SIN",
  SLK: "SLK",
  SLV: "SLV",
  SME: "SME",
  SMO: "SMO",
  SNA: "SNA",
  SND: "SND",
  SOM: "SOM",
  SOT: "SOT",
  SPA: "SPA",
  SQI: "SQI",
  SRB: "SRB",
  SRD: "SRD",
  SRP: "SRP",
  SSW: "SSW",
  SUN: "SUN",
  SWA: "SWA",
  SWE: "SWE",
  TAH: "TAH",
  TAM: "TAM",
  TAT: "TAT",
  TEL: "TEL",
  TGK: "TGK",
  TGL: "TGL",
  THA: "THA",
  TIR: "TIR",
  TNG: "TNG",
  TON: "TON",
  TSN: "TSN",
  TSO: "TSO",
  TUK: "TUK",
  TUR: "TUR",
  TWI: "TWI",
  UIG: "UIG",
  UKR: "UKR",
  URD: "URD",
  UZB: "UZB",
  VEN: "VEN",
  VIE: "VIE",
  VOL: "VOL",
  WLN: "WLN",
  WOL: "WOL",
  XHO: "XHO",
  YID: "YID",
  YOR: "YOR",
  ZHA: "ZHA",
  ZHO: "ZHO",
  ZUL: "ZUL",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const AudioLanguageCodeControl = {
  FOLLOW_INPUT: "FOLLOW_INPUT",
  USE_CONFIGURED: "USE_CONFIGURED",
} as const;
/**
 * @public
 */
export type AudioLanguageCodeControl = (typeof AudioLanguageCodeControl)[keyof typeof AudioLanguageCodeControl];

/**
 * @public
 * @enum
 */
export const RuleType = {
  ALLOWED_RENDITIONS: "ALLOWED_RENDITIONS",
  FORCE_INCLUDE_RENDITIONS: "FORCE_INCLUDE_RENDITIONS",
  MIN_BOTTOM_RENDITION_SIZE: "MIN_BOTTOM_RENDITION_SIZE",
  MIN_TOP_RENDITION_SIZE: "MIN_TOP_RENDITION_SIZE",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const BurninSubtitleAlignment = {
  AUTO: "AUTO",
  CENTERED: "CENTERED",
  LEFT: "LEFT",
} as const;
/**
 * @public
 */
export type BurninSubtitleAlignment = (typeof BurninSubtitleAlignment)[keyof typeof BurninSubtitleAlignment];

/**
 * @public
 * @enum
 */
export const BurninSubtitleApplyFontColor = {
  ALL_TEXT: "ALL_TEXT",
  WHITE_TEXT_ONLY: "WHITE_TEXT_ONLY",
} as const;
/**
 * @public
 */
export type BurninSubtitleApplyFontColor =
  (typeof BurninSubtitleApplyFontColor)[keyof typeof BurninSubtitleApplyFontColor];

/**
 * @public
 * @enum
 */
export const BurninSubtitleBackgroundColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type BurninSubtitleBackgroundColor =
  (typeof BurninSubtitleBackgroundColor)[keyof typeof BurninSubtitleBackgroundColor];

/**
 * @public
 * @enum
 */
export const BurninSubtitleFallbackFont = {
  BEST_MATCH: "BEST_MATCH",
  MONOSPACED_SANSSERIF: "MONOSPACED_SANSSERIF",
  MONOSPACED_SERIF: "MONOSPACED_SERIF",
  PROPORTIONAL_SANSSERIF: "PROPORTIONAL_SANSSERIF",
  PROPORTIONAL_SERIF: "PROPORTIONAL_SERIF",
} as const;
/**
 * @public
 */
export type BurninSubtitleFallbackFont = (typeof BurninSubtitleFallbackFont)[keyof typeof BurninSubtitleFallbackFont];

/**
 * @public
 * @enum
 */
export const BurninSubtitleFontColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  HEX: "HEX",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;
/**
 * @public
 */
export type BurninSubtitleFontColor = (typeof BurninSubtitleFontColor)[keyof typeof BurninSubtitleFontColor];

/**
 * @public
 * @enum
 */
export const FontScript = {
  AUTOMATIC: "AUTOMATIC",
  HANS: "HANS",
  HANT: "HANT",
} as const;
/**
 * @public
 */
export type FontScript = (typeof FontScript)[keyof typeof FontScript];

/**
 * @public
 * @enum
 */
export const BurninSubtitleOutlineColor = {
  AUTO: "AUTO",
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
export type BurninSubtitleOutlineColor = (typeof BurninSubtitleOutlineColor)[keyof typeof BurninSubtitleOutlineColor];

/**
 * @public
 * @enum
 */
export const RemoveRubyReserveAttributes = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RemoveRubyReserveAttributes =
  (typeof RemoveRubyReserveAttributes)[keyof typeof RemoveRubyReserveAttributes];

/**
 * @public
 * @enum
 */
export const BurninSubtitleShadowColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type BurninSubtitleShadowColor = (typeof BurninSubtitleShadowColor)[keyof typeof BurninSubtitleShadowColor];

/**
 * @public
 * @enum
 */
export const BurnInSubtitleStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type BurnInSubtitleStylePassthrough =
  (typeof BurnInSubtitleStylePassthrough)[keyof typeof BurnInSubtitleStylePassthrough];

/**
 * @public
 * @enum
 */
export const BurninSubtitleTeletextSpacing = {
  AUTO: "AUTO",
  FIXED_GRID: "FIXED_GRID",
  PROPORTIONAL: "PROPORTIONAL",
} as const;
/**
 * @public
 */
export type BurninSubtitleTeletextSpacing =
  (typeof BurninSubtitleTeletextSpacing)[keyof typeof BurninSubtitleTeletextSpacing];

/**
 * @public
 * @enum
 */
export const CaptionDestinationType = {
  BURN_IN: "BURN_IN",
  DVB_SUB: "DVB_SUB",
  EMBEDDED: "EMBEDDED",
  EMBEDDED_PLUS_SCTE20: "EMBEDDED_PLUS_SCTE20",
  IMSC: "IMSC",
  SCC: "SCC",
  SCTE20_PLUS_EMBEDDED: "SCTE20_PLUS_EMBEDDED",
  SMI: "SMI",
  SRT: "SRT",
  TELETEXT: "TELETEXT",
  TTML: "TTML",
  WEBVTT: "WEBVTT",
} as const;
/**
 * @public
 */
export type CaptionDestinationType = (typeof CaptionDestinationType)[keyof typeof CaptionDestinationType];

/**
 * @public
 * @enum
 */
export const DvbSubtitleAlignment = {
  AUTO: "AUTO",
  CENTERED: "CENTERED",
  LEFT: "LEFT",
} as const;
/**
 * @public
 */
export type DvbSubtitleAlignment = (typeof DvbSubtitleAlignment)[keyof typeof DvbSubtitleAlignment];

/**
 * @public
 * @enum
 */
export const DvbSubtitleApplyFontColor = {
  ALL_TEXT: "ALL_TEXT",
  WHITE_TEXT_ONLY: "WHITE_TEXT_ONLY",
} as const;
/**
 * @public
 */
export type DvbSubtitleApplyFontColor = (typeof DvbSubtitleApplyFontColor)[keyof typeof DvbSubtitleApplyFontColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleBackgroundColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type DvbSubtitleBackgroundColor = (typeof DvbSubtitleBackgroundColor)[keyof typeof DvbSubtitleBackgroundColor];

/**
 * @public
 * @enum
 */
export const DvbddsHandling = {
  NONE: "NONE",
  NO_DISPLAY_WINDOW: "NO_DISPLAY_WINDOW",
  SPECIFIED: "SPECIFIED",
  SPECIFIED_OPTIMAL: "SPECIFIED_OPTIMAL",
} as const;
/**
 * @public
 */
export type DvbddsHandling = (typeof DvbddsHandling)[keyof typeof DvbddsHandling];

/**
 * @public
 * @enum
 */
export const DvbSubSubtitleFallbackFont = {
  BEST_MATCH: "BEST_MATCH",
  MONOSPACED_SANSSERIF: "MONOSPACED_SANSSERIF",
  MONOSPACED_SERIF: "MONOSPACED_SERIF",
  PROPORTIONAL_SANSSERIF: "PROPORTIONAL_SANSSERIF",
  PROPORTIONAL_SERIF: "PROPORTIONAL_SERIF",
} as const;
/**
 * @public
 */
export type DvbSubSubtitleFallbackFont = (typeof DvbSubSubtitleFallbackFont)[keyof typeof DvbSubSubtitleFallbackFont];

/**
 * @public
 * @enum
 */
export const DvbSubtitleFontColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  BLUE: "BLUE",
  GREEN: "GREEN",
  HEX: "HEX",
  RED: "RED",
  WHITE: "WHITE",
  YELLOW: "YELLOW",
} as const;
/**
 * @public
 */
export type DvbSubtitleFontColor = (typeof DvbSubtitleFontColor)[keyof typeof DvbSubtitleFontColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleOutlineColor = {
  AUTO: "AUTO",
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
export type DvbSubtitleOutlineColor = (typeof DvbSubtitleOutlineColor)[keyof typeof DvbSubtitleOutlineColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleShadowColor = {
  AUTO: "AUTO",
  BLACK: "BLACK",
  NONE: "NONE",
  WHITE: "WHITE",
} as const;
/**
 * @public
 */
export type DvbSubtitleShadowColor = (typeof DvbSubtitleShadowColor)[keyof typeof DvbSubtitleShadowColor];

/**
 * @public
 * @enum
 */
export const DvbSubtitleStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DvbSubtitleStylePassthrough =
  (typeof DvbSubtitleStylePassthrough)[keyof typeof DvbSubtitleStylePassthrough];

/**
 * @public
 * @enum
 */
export const DvbSubtitlingType = {
  HEARING_IMPAIRED: "HEARING_IMPAIRED",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type DvbSubtitlingType = (typeof DvbSubtitlingType)[keyof typeof DvbSubtitlingType];

/**
 * @public
 * @enum
 */
export const DvbSubtitleTeletextSpacing = {
  AUTO: "AUTO",
  FIXED_GRID: "FIXED_GRID",
  PROPORTIONAL: "PROPORTIONAL",
} as const;
/**
 * @public
 */
export type DvbSubtitleTeletextSpacing = (typeof DvbSubtitleTeletextSpacing)[keyof typeof DvbSubtitleTeletextSpacing];

/**
 * @public
 * @enum
 */
export const ImscAccessibilitySubs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ImscAccessibilitySubs = (typeof ImscAccessibilitySubs)[keyof typeof ImscAccessibilitySubs];

/**
 * @public
 * @enum
 */
export const ImscStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ImscStylePassthrough = (typeof ImscStylePassthrough)[keyof typeof ImscStylePassthrough];

/**
 * @public
 * @enum
 */
export const SccDestinationFramerate = {
  FRAMERATE_23_97: "FRAMERATE_23_97",
  FRAMERATE_24: "FRAMERATE_24",
  FRAMERATE_25: "FRAMERATE_25",
  FRAMERATE_29_97_DROPFRAME: "FRAMERATE_29_97_DROPFRAME",
  FRAMERATE_29_97_NON_DROPFRAME: "FRAMERATE_29_97_NON_DROPFRAME",
} as const;
/**
 * @public
 */
export type SccDestinationFramerate = (typeof SccDestinationFramerate)[keyof typeof SccDestinationFramerate];

/**
 * @public
 * @enum
 */
export const SrtStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SrtStylePassthrough = (typeof SrtStylePassthrough)[keyof typeof SrtStylePassthrough];

/**
 * @public
 * @enum
 */
export const TeletextPageType = {
  PAGE_TYPE_ADDL_INFO: "PAGE_TYPE_ADDL_INFO",
  PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE: "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE",
  PAGE_TYPE_INITIAL: "PAGE_TYPE_INITIAL",
  PAGE_TYPE_PROGRAM_SCHEDULE: "PAGE_TYPE_PROGRAM_SCHEDULE",
  PAGE_TYPE_SUBTITLE: "PAGE_TYPE_SUBTITLE",
} as const;
/**
 * @public
 */
export type TeletextPageType = (typeof TeletextPageType)[keyof typeof TeletextPageType];

/**
 * @public
 * @enum
 */
export const TtmlStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TtmlStylePassthrough = (typeof TtmlStylePassthrough)[keyof typeof TtmlStylePassthrough];

/**
 * @public
 * @enum
 */
export const WebvttAccessibilitySubs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type WebvttAccessibilitySubs = (typeof WebvttAccessibilitySubs)[keyof typeof WebvttAccessibilitySubs];

/**
 * @public
 * @enum
 */
export const WebvttStylePassthrough = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  MERGE: "MERGE",
  STRICT: "STRICT",
} as const;
/**
 * @public
 */
export type WebvttStylePassthrough = (typeof WebvttStylePassthrough)[keyof typeof WebvttStylePassthrough];

/**
 * @public
 * @enum
 */
export const ColorSpace = {
  FOLLOW: "FOLLOW",
  HDR10: "HDR10",
  HLG_2020: "HLG_2020",
  P3D65_HDR: "P3D65_HDR",
  P3D65_SDR: "P3D65_SDR",
  P3DCI: "P3DCI",
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
export const FrameMetricType = {
  MS_SSIM: "MS_SSIM",
  PSNR: "PSNR",
  PSNR_HVS: "PSNR_HVS",
  QVBR: "QVBR",
  SHOT_CHANGE: "SHOT_CHANGE",
  SSIM: "SSIM",
  VMAF: "VMAF",
} as const;
/**
 * @public
 */
export type FrameMetricType = (typeof FrameMetricType)[keyof typeof FrameMetricType];

/**
 * @public
 * @enum
 */
export const HlsAdMarkers = {
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
export const AdvancedInputFilter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AdvancedInputFilter = (typeof AdvancedInputFilter)[keyof typeof AdvancedInputFilter];

/**
 * @public
 * @enum
 */
export const AdvancedInputFilterAddTexture = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AdvancedInputFilterAddTexture =
  (typeof AdvancedInputFilterAddTexture)[keyof typeof AdvancedInputFilterAddTexture];

/**
 * @public
 * @enum
 */
export const AdvancedInputFilterSharpen = {
  HIGH: "HIGH",
  LOW: "LOW",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type AdvancedInputFilterSharpen = (typeof AdvancedInputFilterSharpen)[keyof typeof AdvancedInputFilterSharpen];

/**
 * @public
 * @enum
 */
export const AudioDurationCorrection = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  FORCE: "FORCE",
  FRAME: "FRAME",
  TRACK: "TRACK",
} as const;
/**
 * @public
 */
export type AudioDurationCorrection = (typeof AudioDurationCorrection)[keyof typeof AudioDurationCorrection];

/**
 * @public
 * @enum
 */
export const AudioDefaultSelection = {
  DEFAULT: "DEFAULT",
  NOT_DEFAULT: "NOT_DEFAULT",
} as const;
/**
 * @public
 */
export type AudioDefaultSelection = (typeof AudioDefaultSelection)[keyof typeof AudioDefaultSelection];

/**
 * @public
 * @enum
 */
export const AudioSelectorType = {
  ALL_PCM: "ALL_PCM",
  HLS_RENDITION_GROUP: "HLS_RENDITION_GROUP",
  LANGUAGE_CODE: "LANGUAGE_CODE",
  PID: "PID",
  STREAM: "STREAM",
  TRACK: "TRACK",
} as const;
/**
 * @public
 */
export type AudioSelectorType = (typeof AudioSelectorType)[keyof typeof AudioSelectorType];

/**
 * @public
 * @enum
 */
export const AncillaryConvert608To708 = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;
/**
 * @public
 */
export type AncillaryConvert608To708 = (typeof AncillaryConvert608To708)[keyof typeof AncillaryConvert608To708];

/**
 * @public
 * @enum
 */
export const AncillaryTerminateCaptions = {
  DISABLED: "DISABLED",
  END_OF_INPUT: "END_OF_INPUT",
} as const;
/**
 * @public
 */
export type AncillaryTerminateCaptions = (typeof AncillaryTerminateCaptions)[keyof typeof AncillaryTerminateCaptions];

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
export const EmbeddedTerminateCaptions = {
  DISABLED: "DISABLED",
  END_OF_INPUT: "END_OF_INPUT",
} as const;
/**
 * @public
 */
export type EmbeddedTerminateCaptions = (typeof EmbeddedTerminateCaptions)[keyof typeof EmbeddedTerminateCaptions];

/**
 * @public
 * @enum
 */
export const CaptionSourceByteRateLimit = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CaptionSourceByteRateLimit = (typeof CaptionSourceByteRateLimit)[keyof typeof CaptionSourceByteRateLimit];

/**
 * @public
 * @enum
 */
export const FileSourceConvert608To708 = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;
/**
 * @public
 */
export type FileSourceConvert608To708 = (typeof FileSourceConvert608To708)[keyof typeof FileSourceConvert608To708];

/**
 * @public
 * @enum
 */
export const CaptionSourceConvertPaintOnToPopOn = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CaptionSourceConvertPaintOnToPopOn =
  (typeof CaptionSourceConvertPaintOnToPopOn)[keyof typeof CaptionSourceConvertPaintOnToPopOn];

/**
 * @public
 * @enum
 */
export const FileSourceTimeDeltaUnits = {
  MILLISECONDS: "MILLISECONDS",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type FileSourceTimeDeltaUnits = (typeof FileSourceTimeDeltaUnits)[keyof typeof FileSourceTimeDeltaUnits];

/**
 * @public
 * @enum
 */
export const CaptionSourceUpconvertSTLToTeletext = {
  DISABLED: "DISABLED",
  UPCONVERT: "UPCONVERT",
} as const;
/**
 * @public
 */
export type CaptionSourceUpconvertSTLToTeletext =
  (typeof CaptionSourceUpconvertSTLToTeletext)[keyof typeof CaptionSourceUpconvertSTLToTeletext];

/**
 * @public
 * @enum
 */
export const CaptionSourceType = {
  ANCILLARY: "ANCILLARY",
  DVB_SUB: "DVB_SUB",
  EMBEDDED: "EMBEDDED",
  IMSC: "IMSC",
  NULL_SOURCE: "NULL_SOURCE",
  SCC: "SCC",
  SCTE20: "SCTE20",
  SMI: "SMI",
  SMPTE_TT: "SMPTE_TT",
  SRT: "SRT",
  STL: "STL",
  TELETEXT: "TELETEXT",
  TTML: "TTML",
  WEBVTT: "WEBVTT",
} as const;
/**
 * @public
 */
export type CaptionSourceType = (typeof CaptionSourceType)[keyof typeof CaptionSourceType];

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
export const DecryptionMode = {
  AES_CBC: "AES_CBC",
  AES_CTR: "AES_CTR",
  AES_GCM: "AES_GCM",
} as const;
/**
 * @public
 */
export type DecryptionMode = (typeof DecryptionMode)[keyof typeof DecryptionMode];

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
export const DynamicAudioSelectorType = {
  ALL_TRACKS: "ALL_TRACKS",
  LANGUAGE_CODE: "LANGUAGE_CODE",
} as const;
/**
 * @public
 */
export type DynamicAudioSelectorType = (typeof DynamicAudioSelectorType)[keyof typeof DynamicAudioSelectorType];

/**
 * @public
 * @enum
 */
export const InputFilterEnable = {
  AUTO: "AUTO",
  DISABLE: "DISABLE",
  FORCE: "FORCE",
} as const;
/**
 * @public
 */
export type InputFilterEnable = (typeof InputFilterEnable)[keyof typeof InputFilterEnable];

/**
 * @public
 * @enum
 */
export const InputScanType = {
  AUTO: "AUTO",
  PSF: "PSF",
} as const;
/**
 * @public
 */
export type InputScanType = (typeof InputScanType)[keyof typeof InputScanType];

/**
 * @public
 * @enum
 */
export const InputPsiControl = {
  IGNORE_PSI: "IGNORE_PSI",
  USE_PSI: "USE_PSI",
} as const;
/**
 * @public
 */
export type InputPsiControl = (typeof InputPsiControl)[keyof typeof InputPsiControl];

/**
 * @public
 * @enum
 */
export const TamsGapHandling = {
  FILL_WITH_BLACK: "FILL_WITH_BLACK",
  HOLD_LAST_FRAME: "HOLD_LAST_FRAME",
  SKIP_GAPS: "SKIP_GAPS",
} as const;
/**
 * @public
 */
export type TamsGapHandling = (typeof TamsGapHandling)[keyof typeof TamsGapHandling];

/**
 * @public
 * @enum
 */
export const InputTimecodeSource = {
  EMBEDDED: "EMBEDDED",
  SPECIFIEDSTART: "SPECIFIEDSTART",
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
export const VideoOverlayUnit = {
  PERCENTAGE: "PERCENTAGE",
  PIXELS: "PIXELS",
} as const;
/**
 * @public
 */
export type VideoOverlayUnit = (typeof VideoOverlayUnit)[keyof typeof VideoOverlayUnit];

/**
 * @public
 * @enum
 */
export const VideoOverlayPlayBackMode = {
  ONCE: "ONCE",
  REPEAT: "REPEAT",
} as const;
/**
 * @public
 */
export type VideoOverlayPlayBackMode = (typeof VideoOverlayPlayBackMode)[keyof typeof VideoOverlayPlayBackMode];

/**
 * @public
 * @enum
 */
export const AlphaBehavior = {
  DISCARD: "DISCARD",
  REMAP_TO_LUMA: "REMAP_TO_LUMA",
} as const;
/**
 * @public
 */
export type AlphaBehavior = (typeof AlphaBehavior)[keyof typeof AlphaBehavior];

/**
 * @public
 * @enum
 */
export const ColorSpaceUsage = {
  FALLBACK: "FALLBACK",
  FORCE: "FORCE",
} as const;
/**
 * @public
 */
export type ColorSpaceUsage = (typeof ColorSpaceUsage)[keyof typeof ColorSpaceUsage];

/**
 * @public
 * @enum
 */
export const EmbeddedTimecodeOverride = {
  NONE: "NONE",
  USE_MDPM: "USE_MDPM",
} as const;
/**
 * @public
 */
export type EmbeddedTimecodeOverride = (typeof EmbeddedTimecodeOverride)[keyof typeof EmbeddedTimecodeOverride];

/**
 * @public
 * @enum
 */
export const PadVideo = {
  BLACK: "BLACK",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type PadVideo = (typeof PadVideo)[keyof typeof PadVideo];

/**
 * @public
 * @enum
 */
export const InputRotate = {
  AUTO: "AUTO",
  DEGREES_180: "DEGREES_180",
  DEGREES_270: "DEGREES_270",
  DEGREES_90: "DEGREES_90",
  DEGREE_0: "DEGREE_0",
} as const;
/**
 * @public
 */
export type InputRotate = (typeof InputRotate)[keyof typeof InputRotate];

/**
 * @public
 * @enum
 */
export const InputSampleRange = {
  FOLLOW: "FOLLOW",
  FULL_RANGE: "FULL_RANGE",
  LIMITED_RANGE: "LIMITED_RANGE",
} as const;
/**
 * @public
 */
export type InputSampleRange = (typeof InputSampleRange)[keyof typeof InputSampleRange];

/**
 * @public
 * @enum
 */
export const VideoSelectorType = {
  AUTO: "AUTO",
  STREAM: "STREAM",
} as const;
/**
 * @public
 */
export type VideoSelectorType = (typeof VideoSelectorType)[keyof typeof VideoSelectorType];

/**
 * @public
 * @enum
 */
export const AccelerationMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  PREFERRED: "PREFERRED",
} as const;
/**
 * @public
 */
export type AccelerationMode = (typeof AccelerationMode)[keyof typeof AccelerationMode];

/**
 * @public
 * @enum
 */
export const AccelerationStatus = {
  ACCELERATED: "ACCELERATED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_ACCELERATED: "NOT_ACCELERATED",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;
/**
 * @public
 */
export type AccelerationStatus = (typeof AccelerationStatus)[keyof typeof AccelerationStatus];

/**
 * @public
 * @enum
 */
export const BillingTagsSource = {
  JOB: "JOB",
  JOB_TEMPLATE: "JOB_TEMPLATE",
  PRESET: "PRESET",
  QUEUE: "QUEUE",
} as const;
/**
 * @public
 */
export type BillingTagsSource = (typeof BillingTagsSource)[keyof typeof BillingTagsSource];

/**
 * @public
 * @enum
 */
export const JobPhase = {
  PROBING: "PROBING",
  TRANSCODING: "TRANSCODING",
  UPLOADING: "UPLOADING",
} as const;
/**
 * @public
 */
export type JobPhase = (typeof JobPhase)[keyof typeof JobPhase];

/**
 * @public
 * @enum
 */
export const CopyProtectionAction = {
  PASSTHROUGH: "PASSTHROUGH",
  STRIP: "STRIP",
} as const;
/**
 * @public
 */
export type CopyProtectionAction = (typeof CopyProtectionAction)[keyof typeof CopyProtectionAction];

/**
 * @public
 * @enum
 */
export const VchipAction = {
  PASSTHROUGH: "PASSTHROUGH",
  STRIP: "STRIP",
} as const;
/**
 * @public
 */
export type VchipAction = (typeof VchipAction)[keyof typeof VchipAction];

/**
 * @public
 * @enum
 */
export const MotionImageInsertionMode = {
  MOV: "MOV",
  PNG: "PNG",
} as const;
/**
 * @public
 */
export type MotionImageInsertionMode = (typeof MotionImageInsertionMode)[keyof typeof MotionImageInsertionMode];

/**
 * @public
 * @enum
 */
export const MotionImagePlayback = {
  ONCE: "ONCE",
  REPEAT: "REPEAT",
} as const;
/**
 * @public
 */
export type MotionImagePlayback = (typeof MotionImagePlayback)[keyof typeof MotionImagePlayback];

/**
 * @public
 * @enum
 */
export const NielsenActiveWatermarkProcessType = {
  CBET: "CBET",
  NAES2_AND_NW: "NAES2_AND_NW",
  NAES2_AND_NW_AND_CBET: "NAES2_AND_NW_AND_CBET",
} as const;
/**
 * @public
 */
export type NielsenActiveWatermarkProcessType =
  (typeof NielsenActiveWatermarkProcessType)[keyof typeof NielsenActiveWatermarkProcessType];

/**
 * @public
 * @enum
 */
export const NielsenSourceWatermarkStatusType = {
  CLEAN: "CLEAN",
  WATERMARKED: "WATERMARKED",
} as const;
/**
 * @public
 */
export type NielsenSourceWatermarkStatusType =
  (typeof NielsenSourceWatermarkStatusType)[keyof typeof NielsenSourceWatermarkStatusType];

/**
 * @public
 * @enum
 */
export const NielsenUniqueTicPerAudioTrackType = {
  RESERVE_UNIQUE_TICS_PER_TRACK: "RESERVE_UNIQUE_TICS_PER_TRACK",
  SAME_TICS_PER_TRACK: "SAME_TICS_PER_TRACK",
} as const;
/**
 * @public
 */
export type NielsenUniqueTicPerAudioTrackType =
  (typeof NielsenUniqueTicPerAudioTrackType)[keyof typeof NielsenUniqueTicPerAudioTrackType];

/**
 * @public
 * @enum
 */
export const CmafClientCache = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CmafClientCache = (typeof CmafClientCache)[keyof typeof CmafClientCache];

/**
 * @public
 * @enum
 */
export const CmafCodecSpecification = {
  RFC_4281: "RFC_4281",
  RFC_6381: "RFC_6381",
} as const;
/**
 * @public
 */
export type CmafCodecSpecification = (typeof CmafCodecSpecification)[keyof typeof CmafCodecSpecification];

/**
 * @public
 * @enum
 */
export const DashManifestStyle = {
  BASIC: "BASIC",
  COMPACT: "COMPACT",
  DISTINCT: "DISTINCT",
  FULL: "FULL",
} as const;
/**
 * @public
 */
export type DashManifestStyle = (typeof DashManifestStyle)[keyof typeof DashManifestStyle];

/**
 * @public
 * @enum
 */
export const S3ObjectCannedAcl = {
  AUTHENTICATED_READ: "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL: "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ: "BUCKET_OWNER_READ",
  PUBLIC_READ: "PUBLIC_READ",
} as const;
/**
 * @public
 */
export type S3ObjectCannedAcl = (typeof S3ObjectCannedAcl)[keyof typeof S3ObjectCannedAcl];

/**
 * @public
 * @enum
 */
export const S3ServerSideEncryptionType = {
  SERVER_SIDE_ENCRYPTION_KMS: "SERVER_SIDE_ENCRYPTION_KMS",
  SERVER_SIDE_ENCRYPTION_S3: "SERVER_SIDE_ENCRYPTION_S3",
} as const;
/**
 * @public
 */
export type S3ServerSideEncryptionType = (typeof S3ServerSideEncryptionType)[keyof typeof S3ServerSideEncryptionType];

/**
 * @public
 * @enum
 */
export const S3StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;
/**
 * @public
 */
export type S3StorageClass = (typeof S3StorageClass)[keyof typeof S3StorageClass];

/**
 * @public
 * @enum
 */
export const CmafEncryptionType = {
  AES_CTR: "AES_CTR",
  SAMPLE_AES: "SAMPLE_AES",
} as const;
/**
 * @public
 */
export type CmafEncryptionType = (typeof CmafEncryptionType)[keyof typeof CmafEncryptionType];

/**
 * @public
 * @enum
 */
export const CmafInitializationVectorInManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type CmafInitializationVectorInManifest =
  (typeof CmafInitializationVectorInManifest)[keyof typeof CmafInitializationVectorInManifest];

/**
 * @public
 * @enum
 */
export const PresetSpeke20Audio = {
  PRESET_AUDIO_1: "PRESET_AUDIO_1",
  PRESET_AUDIO_2: "PRESET_AUDIO_2",
  PRESET_AUDIO_3: "PRESET_AUDIO_3",
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
  PRESET_VIDEO_1: "PRESET_VIDEO_1",
  PRESET_VIDEO_2: "PRESET_VIDEO_2",
  PRESET_VIDEO_3: "PRESET_VIDEO_3",
  PRESET_VIDEO_4: "PRESET_VIDEO_4",
  PRESET_VIDEO_5: "PRESET_VIDEO_5",
  PRESET_VIDEO_6: "PRESET_VIDEO_6",
  PRESET_VIDEO_7: "PRESET_VIDEO_7",
  PRESET_VIDEO_8: "PRESET_VIDEO_8",
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
export const CmafKeyProviderType = {
  SPEKE: "SPEKE",
  STATIC_KEY: "STATIC_KEY",
} as const;
/**
 * @public
 */
export type CmafKeyProviderType = (typeof CmafKeyProviderType)[keyof typeof CmafKeyProviderType];

/**
 * @public
 * @enum
 */
export const CmafImageBasedTrickPlay = {
  ADVANCED: "ADVANCED",
  NONE: "NONE",
  THUMBNAIL: "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME: "THUMBNAIL_AND_FULLFRAME",
} as const;
/**
 * @public
 */
export type CmafImageBasedTrickPlay = (typeof CmafImageBasedTrickPlay)[keyof typeof CmafImageBasedTrickPlay];

/**
 * @public
 * @enum
 */
export const CmafIntervalCadence = {
  FOLLOW_CUSTOM: "FOLLOW_CUSTOM",
  FOLLOW_IFRAME: "FOLLOW_IFRAME",
} as const;
/**
 * @public
 */
export type CmafIntervalCadence = (typeof CmafIntervalCadence)[keyof typeof CmafIntervalCadence];

/**
 * @public
 * @enum
 */
export const CmafManifestCompression = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type CmafManifestCompression = (typeof CmafManifestCompression)[keyof typeof CmafManifestCompression];

/**
 * @public
 * @enum
 */
export const CmafManifestDurationFormat = {
  FLOATING_POINT: "FLOATING_POINT",
  INTEGER: "INTEGER",
} as const;
/**
 * @public
 */
export type CmafManifestDurationFormat = (typeof CmafManifestDurationFormat)[keyof typeof CmafManifestDurationFormat];

/**
 * @public
 * @enum
 */
export const CmafMpdManifestBandwidthType = {
  AVERAGE: "AVERAGE",
  MAX: "MAX",
} as const;
/**
 * @public
 */
export type CmafMpdManifestBandwidthType =
  (typeof CmafMpdManifestBandwidthType)[keyof typeof CmafMpdManifestBandwidthType];

/**
 * @public
 * @enum
 */
export const CmafMpdProfile = {
  MAIN_PROFILE: "MAIN_PROFILE",
  ON_DEMAND_PROFILE: "ON_DEMAND_PROFILE",
} as const;
/**
 * @public
 */
export type CmafMpdProfile = (typeof CmafMpdProfile)[keyof typeof CmafMpdProfile];

/**
 * @public
 * @enum
 */
export const CmafPtsOffsetHandlingForBFrames = {
  MATCH_INITIAL_PTS: "MATCH_INITIAL_PTS",
  ZERO_BASED: "ZERO_BASED",
} as const;
/**
 * @public
 */
export type CmafPtsOffsetHandlingForBFrames =
  (typeof CmafPtsOffsetHandlingForBFrames)[keyof typeof CmafPtsOffsetHandlingForBFrames];

/**
 * @public
 * @enum
 */
export const CmafSegmentControl = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;
/**
 * @public
 */
export type CmafSegmentControl = (typeof CmafSegmentControl)[keyof typeof CmafSegmentControl];

/**
 * @public
 * @enum
 */
export const CmafSegmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
  MATCH: "MATCH",
} as const;
/**
 * @public
 */
export type CmafSegmentLengthControl = (typeof CmafSegmentLengthControl)[keyof typeof CmafSegmentLengthControl];

/**
 * @public
 * @enum
 */
export const CmafStreamInfResolution = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type CmafStreamInfResolution = (typeof CmafStreamInfResolution)[keyof typeof CmafStreamInfResolution];

/**
 * @public
 * @enum
 */
export const CmafTargetDurationCompatibilityMode = {
  LEGACY: "LEGACY",
  SPEC_COMPLIANT: "SPEC_COMPLIANT",
} as const;
/**
 * @public
 */
export type CmafTargetDurationCompatibilityMode =
  (typeof CmafTargetDurationCompatibilityMode)[keyof typeof CmafTargetDurationCompatibilityMode];

/**
 * @public
 * @enum
 */
export const CmafVideoCompositionOffsets = {
  SIGNED: "SIGNED",
  UNSIGNED: "UNSIGNED",
} as const;
/**
 * @public
 */
export type CmafVideoCompositionOffsets =
  (typeof CmafVideoCompositionOffsets)[keyof typeof CmafVideoCompositionOffsets];

/**
 * @public
 * @enum
 */
export const CmafWriteDASHManifest = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CmafWriteDASHManifest = (typeof CmafWriteDASHManifest)[keyof typeof CmafWriteDASHManifest];

/**
 * @public
 * @enum
 */
export const CmafWriteHLSManifest = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CmafWriteHLSManifest = (typeof CmafWriteHLSManifest)[keyof typeof CmafWriteHLSManifest];

/**
 * @public
 * @enum
 */
export const CmafWriteSegmentTimelineInRepresentation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CmafWriteSegmentTimelineInRepresentation =
  (typeof CmafWriteSegmentTimelineInRepresentation)[keyof typeof CmafWriteSegmentTimelineInRepresentation];

/**
 * @public
 * @enum
 */
export const DashIsoGroupAudioChannelConfigSchemeIdUri = {
  DOLBY_CHANNEL_CONFIGURATION: "DOLBY_CHANNEL_CONFIGURATION",
  MPEG_CHANNEL_CONFIGURATION: "MPEG_CHANNEL_CONFIGURATION",
} as const;
/**
 * @public
 */
export type DashIsoGroupAudioChannelConfigSchemeIdUri =
  (typeof DashIsoGroupAudioChannelConfigSchemeIdUri)[keyof typeof DashIsoGroupAudioChannelConfigSchemeIdUri];

/**
 * @public
 * @enum
 */
export const DashIsoPlaybackDeviceCompatibility = {
  CENC_V1: "CENC_V1",
  UNENCRYPTED_SEI: "UNENCRYPTED_SEI",
} as const;
/**
 * @public
 */
export type DashIsoPlaybackDeviceCompatibility =
  (typeof DashIsoPlaybackDeviceCompatibility)[keyof typeof DashIsoPlaybackDeviceCompatibility];

/**
 * @public
 * @enum
 */
export const DashIsoHbbtvCompliance = {
  HBBTV_1_5: "HBBTV_1_5",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type DashIsoHbbtvCompliance = (typeof DashIsoHbbtvCompliance)[keyof typeof DashIsoHbbtvCompliance];

/**
 * @public
 * @enum
 */
export const DashIsoImageBasedTrickPlay = {
  ADVANCED: "ADVANCED",
  NONE: "NONE",
  THUMBNAIL: "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME: "THUMBNAIL_AND_FULLFRAME",
} as const;
/**
 * @public
 */
export type DashIsoImageBasedTrickPlay = (typeof DashIsoImageBasedTrickPlay)[keyof typeof DashIsoImageBasedTrickPlay];

/**
 * @public
 * @enum
 */
export const DashIsoIntervalCadence = {
  FOLLOW_CUSTOM: "FOLLOW_CUSTOM",
  FOLLOW_IFRAME: "FOLLOW_IFRAME",
} as const;
/**
 * @public
 */
export type DashIsoIntervalCadence = (typeof DashIsoIntervalCadence)[keyof typeof DashIsoIntervalCadence];

/**
 * @public
 * @enum
 */
export const DashIsoMpdManifestBandwidthType = {
  AVERAGE: "AVERAGE",
  MAX: "MAX",
} as const;
/**
 * @public
 */
export type DashIsoMpdManifestBandwidthType =
  (typeof DashIsoMpdManifestBandwidthType)[keyof typeof DashIsoMpdManifestBandwidthType];

/**
 * @public
 * @enum
 */
export const DashIsoMpdProfile = {
  MAIN_PROFILE: "MAIN_PROFILE",
  ON_DEMAND_PROFILE: "ON_DEMAND_PROFILE",
} as const;
/**
 * @public
 */
export type DashIsoMpdProfile = (typeof DashIsoMpdProfile)[keyof typeof DashIsoMpdProfile];

/**
 * @public
 * @enum
 */
export const DashIsoPtsOffsetHandlingForBFrames = {
  MATCH_INITIAL_PTS: "MATCH_INITIAL_PTS",
  ZERO_BASED: "ZERO_BASED",
} as const;
/**
 * @public
 */
export type DashIsoPtsOffsetHandlingForBFrames =
  (typeof DashIsoPtsOffsetHandlingForBFrames)[keyof typeof DashIsoPtsOffsetHandlingForBFrames];

/**
 * @public
 * @enum
 */
export const DashIsoSegmentControl = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;
/**
 * @public
 */
export type DashIsoSegmentControl = (typeof DashIsoSegmentControl)[keyof typeof DashIsoSegmentControl];

/**
 * @public
 * @enum
 */
export const DashIsoSegmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
  MATCH: "MATCH",
} as const;
/**
 * @public
 */
export type DashIsoSegmentLengthControl =
  (typeof DashIsoSegmentLengthControl)[keyof typeof DashIsoSegmentLengthControl];

/**
 * @public
 * @enum
 */
export const DashIsoVideoCompositionOffsets = {
  SIGNED: "SIGNED",
  UNSIGNED: "UNSIGNED",
} as const;
/**
 * @public
 */
export type DashIsoVideoCompositionOffsets =
  (typeof DashIsoVideoCompositionOffsets)[keyof typeof DashIsoVideoCompositionOffsets];

/**
 * @public
 * @enum
 */
export const DashIsoWriteSegmentTimelineInRepresentation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DashIsoWriteSegmentTimelineInRepresentation =
  (typeof DashIsoWriteSegmentTimelineInRepresentation)[keyof typeof DashIsoWriteSegmentTimelineInRepresentation];

/**
 * @public
 * @enum
 */
export const HlsAudioOnlyHeader = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type HlsAudioOnlyHeader = (typeof HlsAudioOnlyHeader)[keyof typeof HlsAudioOnlyHeader];

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
export const HlsCaptionSegmentLengthControl = {
  LARGE_SEGMENTS: "LARGE_SEGMENTS",
  MATCH_VIDEO: "MATCH_VIDEO",
} as const;
/**
 * @public
 */
export type HlsCaptionSegmentLengthControl =
  (typeof HlsCaptionSegmentLengthControl)[keyof typeof HlsCaptionSegmentLengthControl];

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
export const HlsInitializationVectorInManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type HlsInitializationVectorInManifest =
  (typeof HlsInitializationVectorInManifest)[keyof typeof HlsInitializationVectorInManifest];

/**
 * @public
 * @enum
 */
export const HlsOfflineEncrypted = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type HlsOfflineEncrypted = (typeof HlsOfflineEncrypted)[keyof typeof HlsOfflineEncrypted];

/**
 * @public
 * @enum
 */
export const HlsKeyProviderType = {
  SPEKE: "SPEKE",
  STATIC_KEY: "STATIC_KEY",
} as const;
/**
 * @public
 */
export type HlsKeyProviderType = (typeof HlsKeyProviderType)[keyof typeof HlsKeyProviderType];

/**
 * @public
 * @enum
 */
export const HlsImageBasedTrickPlay = {
  ADVANCED: "ADVANCED",
  NONE: "NONE",
  THUMBNAIL: "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME: "THUMBNAIL_AND_FULLFRAME",
} as const;
/**
 * @public
 */
export type HlsImageBasedTrickPlay = (typeof HlsImageBasedTrickPlay)[keyof typeof HlsImageBasedTrickPlay];

/**
 * @public
 * @enum
 */
export const HlsIntervalCadence = {
  FOLLOW_CUSTOM: "FOLLOW_CUSTOM",
  FOLLOW_IFRAME: "FOLLOW_IFRAME",
} as const;
/**
 * @public
 */
export type HlsIntervalCadence = (typeof HlsIntervalCadence)[keyof typeof HlsIntervalCadence];

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
export const HlsOutputSelection = {
  MANIFESTS_AND_SEGMENTS: "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY: "SEGMENTS_ONLY",
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
export const HlsProgressiveWriteHlsManifest = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type HlsProgressiveWriteHlsManifest =
  (typeof HlsProgressiveWriteHlsManifest)[keyof typeof HlsProgressiveWriteHlsManifest];

/**
 * @public
 * @enum
 */
export const HlsSegmentControl = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;
/**
 * @public
 */
export type HlsSegmentControl = (typeof HlsSegmentControl)[keyof typeof HlsSegmentControl];

/**
 * @public
 * @enum
 */
export const HlsSegmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
  MATCH: "MATCH",
} as const;
/**
 * @public
 */
export type HlsSegmentLengthControl = (typeof HlsSegmentLengthControl)[keyof typeof HlsSegmentLengthControl];

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
export const HlsTargetDurationCompatibilityMode = {
  LEGACY: "LEGACY",
  SPEC_COMPLIANT: "SPEC_COMPLIANT",
} as const;
/**
 * @public
 */
export type HlsTargetDurationCompatibilityMode =
  (typeof HlsTargetDurationCompatibilityMode)[keyof typeof HlsTargetDurationCompatibilityMode];

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
export const MsSmoothAudioDeduplication = {
  COMBINE_DUPLICATE_STREAMS: "COMBINE_DUPLICATE_STREAMS",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type MsSmoothAudioDeduplication = (typeof MsSmoothAudioDeduplication)[keyof typeof MsSmoothAudioDeduplication];

/**
 * @public
 * @enum
 */
export const MsSmoothFragmentLengthControl = {
  EXACT: "EXACT",
  GOP_MULTIPLE: "GOP_MULTIPLE",
} as const;
/**
 * @public
 */
export type MsSmoothFragmentLengthControl =
  (typeof MsSmoothFragmentLengthControl)[keyof typeof MsSmoothFragmentLengthControl];

/**
 * @public
 * @enum
 */
export const MsSmoothManifestEncoding = {
  UTF16: "UTF16",
  UTF8: "UTF8",
} as const;
/**
 * @public
 */
export type MsSmoothManifestEncoding = (typeof MsSmoothManifestEncoding)[keyof typeof MsSmoothManifestEncoding];

/**
 * @public
 * @enum
 */
export const OutputGroupType = {
  CMAF_GROUP_SETTINGS: "CMAF_GROUP_SETTINGS",
  DASH_ISO_GROUP_SETTINGS: "DASH_ISO_GROUP_SETTINGS",
  FILE_GROUP_SETTINGS: "FILE_GROUP_SETTINGS",
  HLS_GROUP_SETTINGS: "HLS_GROUP_SETTINGS",
  MS_SMOOTH_GROUP_SETTINGS: "MS_SMOOTH_GROUP_SETTINGS",
} as const;
/**
 * @public
 */
export type OutputGroupType = (typeof OutputGroupType)[keyof typeof OutputGroupType];

/**
 * @public
 * @enum
 */
export const CmfcAudioDuration = {
  DEFAULT_CODEC_DURATION: "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION: "MATCH_VIDEO_DURATION",
} as const;
/**
 * @public
 */
export type CmfcAudioDuration = (typeof CmfcAudioDuration)[keyof typeof CmfcAudioDuration];

/**
 * @public
 * @enum
 */
export const CmfcAudioTrackType = {
  ALTERNATE_AUDIO_AUTO_SELECT: "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT: "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM: "AUDIO_ONLY_VARIANT_STREAM",
} as const;
/**
 * @public
 */
export type CmfcAudioTrackType = (typeof CmfcAudioTrackType)[keyof typeof CmfcAudioTrackType];

/**
 * @public
 * @enum
 */
export const CmfcC2paManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type CmfcC2paManifest = (typeof CmfcC2paManifest)[keyof typeof CmfcC2paManifest];

/**
 * @public
 * @enum
 */
export const CmfcDescriptiveVideoServiceFlag = {
  DONT_FLAG: "DONT_FLAG",
  FLAG: "FLAG",
} as const;
/**
 * @public
 */
export type CmfcDescriptiveVideoServiceFlag =
  (typeof CmfcDescriptiveVideoServiceFlag)[keyof typeof CmfcDescriptiveVideoServiceFlag];

/**
 * @public
 * @enum
 */
export const CmfcIFrameOnlyManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type CmfcIFrameOnlyManifest = (typeof CmfcIFrameOnlyManifest)[keyof typeof CmfcIFrameOnlyManifest];

/**
 * @public
 * @enum
 */
export const CmfcKlvMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type CmfcKlvMetadata = (typeof CmfcKlvMetadata)[keyof typeof CmfcKlvMetadata];

/**
 * @public
 * @enum
 */
export const CmfcManifestMetadataSignaling = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CmfcManifestMetadataSignaling =
  (typeof CmfcManifestMetadataSignaling)[keyof typeof CmfcManifestMetadataSignaling];

/**
 * @public
 * @enum
 */
export const CmfcScte35Esam = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type CmfcScte35Esam = (typeof CmfcScte35Esam)[keyof typeof CmfcScte35Esam];

/**
 * @public
 * @enum
 */
export const CmfcScte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type CmfcScte35Source = (typeof CmfcScte35Source)[keyof typeof CmfcScte35Source];

/**
 * @public
 * @enum
 */
export const CmfcTimedMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type CmfcTimedMetadata = (typeof CmfcTimedMetadata)[keyof typeof CmfcTimedMetadata];

/**
 * @public
 * @enum
 */
export const CmfcTimedMetadataBoxVersion = {
  VERSION_0: "VERSION_0",
  VERSION_1: "VERSION_1",
} as const;
/**
 * @public
 */
export type CmfcTimedMetadataBoxVersion =
  (typeof CmfcTimedMetadataBoxVersion)[keyof typeof CmfcTimedMetadataBoxVersion];

/**
 * @public
 * @enum
 */
export const ContainerType = {
  CMFC: "CMFC",
  F4V: "F4V",
  GIF: "GIF",
  ISMV: "ISMV",
  M2TS: "M2TS",
  M3U8: "M3U8",
  MOV: "MOV",
  MP4: "MP4",
  MPD: "MPD",
  MXF: "MXF",
  OGG: "OGG",
  RAW: "RAW",
  WEBM: "WEBM",
  Y4M: "Y4M",
} as const;
/**
 * @public
 */
export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

/**
 * @public
 * @enum
 */
export const F4vMoovPlacement = {
  NORMAL: "NORMAL",
  PROGRESSIVE_DOWNLOAD: "PROGRESSIVE_DOWNLOAD",
} as const;
/**
 * @public
 */
export type F4vMoovPlacement = (typeof F4vMoovPlacement)[keyof typeof F4vMoovPlacement];

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
export const M2tsAudioDuration = {
  DEFAULT_CODEC_DURATION: "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION: "MATCH_VIDEO_DURATION",
} as const;
/**
 * @public
 */
export type M2tsAudioDuration = (typeof M2tsAudioDuration)[keyof typeof M2tsAudioDuration];

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
export const M2tsDataPtsControl = {
  ALIGN_TO_VIDEO: "ALIGN_TO_VIDEO",
  AUTO: "AUTO",
} as const;
/**
 * @public
 */
export type M2tsDataPtsControl = (typeof M2tsDataPtsControl)[keyof typeof M2tsDataPtsControl];

/**
 * @public
 * @enum
 */
export const OutputSdt = {
  SDT_FOLLOW: "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT: "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL: "SDT_MANUAL",
  SDT_NONE: "SDT_NONE",
} as const;
/**
 * @public
 */
export type OutputSdt = (typeof OutputSdt)[keyof typeof OutputSdt];

/**
 * @public
 * @enum
 */
export const M2tsEbpAudioInterval = {
  VIDEO_AND_FIXED_INTERVALS: "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL: "VIDEO_INTERVAL",
} as const;
/**
 * @public
 */
export type M2tsEbpAudioInterval = (typeof M2tsEbpAudioInterval)[keyof typeof M2tsEbpAudioInterval];

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
export const M2tsForceTsVideoEbpOrder = {
  DEFAULT: "DEFAULT",
  FORCE: "FORCE",
} as const;
/**
 * @public
 */
export type M2tsForceTsVideoEbpOrder = (typeof M2tsForceTsVideoEbpOrder)[keyof typeof M2tsForceTsVideoEbpOrder];

/**
 * @public
 * @enum
 */
export const M2tsKlvMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M2tsKlvMetadata = (typeof M2tsKlvMetadata)[keyof typeof M2tsKlvMetadata];

/**
 * @public
 * @enum
 */
export const M2tsNielsenId3 = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type M2tsNielsenId3 = (typeof M2tsNielsenId3)[keyof typeof M2tsNielsenId3];

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
export const M2tsPreventBufferUnderflow = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type M2tsPreventBufferUnderflow = (typeof M2tsPreventBufferUnderflow)[keyof typeof M2tsPreventBufferUnderflow];

/**
 * @public
 * @enum
 */
export const TsPtsOffset = {
  AUTO: "AUTO",
  MILLISECONDS: "MILLISECONDS",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type TsPtsOffset = (typeof TsPtsOffset)[keyof typeof TsPtsOffset];

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
export const M2tsScte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M2tsScte35Source = (typeof M2tsScte35Source)[keyof typeof M2tsScte35Source];

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
export const M3u8AudioDuration = {
  DEFAULT_CODEC_DURATION: "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION: "MATCH_VIDEO_DURATION",
} as const;
/**
 * @public
 */
export type M3u8AudioDuration = (typeof M3u8AudioDuration)[keyof typeof M3u8AudioDuration];

/**
 * @public
 * @enum
 */
export const M3u8DataPtsControl = {
  ALIGN_TO_VIDEO: "ALIGN_TO_VIDEO",
  AUTO: "AUTO",
} as const;
/**
 * @public
 */
export type M3u8DataPtsControl = (typeof M3u8DataPtsControl)[keyof typeof M3u8DataPtsControl];

/**
 * @public
 * @enum
 */
export const M3u8NielsenId3 = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type M3u8NielsenId3 = (typeof M3u8NielsenId3)[keyof typeof M3u8NielsenId3];

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
export const M3u8Scte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type M3u8Scte35Source = (typeof M3u8Scte35Source)[keyof typeof M3u8Scte35Source];

/**
 * @public
 * @enum
 */
export const TimedMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type TimedMetadata = (typeof TimedMetadata)[keyof typeof TimedMetadata];

/**
 * @public
 * @enum
 */
export const MovClapAtom = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type MovClapAtom = (typeof MovClapAtom)[keyof typeof MovClapAtom];

/**
 * @public
 * @enum
 */
export const MovCslgAtom = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type MovCslgAtom = (typeof MovCslgAtom)[keyof typeof MovCslgAtom];

/**
 * @public
 * @enum
 */
export const MovMpeg2FourCCControl = {
  MPEG: "MPEG",
  XDCAM: "XDCAM",
} as const;
/**
 * @public
 */
export type MovMpeg2FourCCControl = (typeof MovMpeg2FourCCControl)[keyof typeof MovMpeg2FourCCControl];

/**
 * @public
 * @enum
 */
export const MovPaddingControl = {
  NONE: "NONE",
  OMNEON: "OMNEON",
} as const;
/**
 * @public
 */
export type MovPaddingControl = (typeof MovPaddingControl)[keyof typeof MovPaddingControl];

/**
 * @public
 * @enum
 */
export const MovReference = {
  EXTERNAL: "EXTERNAL",
  SELF_CONTAINED: "SELF_CONTAINED",
} as const;
/**
 * @public
 */
export type MovReference = (typeof MovReference)[keyof typeof MovReference];

/**
 * @public
 * @enum
 */
export const Mp4C2paManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type Mp4C2paManifest = (typeof Mp4C2paManifest)[keyof typeof Mp4C2paManifest];

/**
 * @public
 * @enum
 */
export const Mp4CslgAtom = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type Mp4CslgAtom = (typeof Mp4CslgAtom)[keyof typeof Mp4CslgAtom];

/**
 * @public
 * @enum
 */
export const Mp4FreeSpaceBox = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type Mp4FreeSpaceBox = (typeof Mp4FreeSpaceBox)[keyof typeof Mp4FreeSpaceBox];

/**
 * @public
 * @enum
 */
export const Mp4MoovPlacement = {
  NORMAL: "NORMAL",
  PROGRESSIVE_DOWNLOAD: "PROGRESSIVE_DOWNLOAD",
} as const;
/**
 * @public
 */
export type Mp4MoovPlacement = (typeof Mp4MoovPlacement)[keyof typeof Mp4MoovPlacement];

/**
 * @public
 * @enum
 */
export const MpdAccessibilityCaptionHints = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type MpdAccessibilityCaptionHints =
  (typeof MpdAccessibilityCaptionHints)[keyof typeof MpdAccessibilityCaptionHints];

/**
 * @public
 * @enum
 */
export const MpdAudioDuration = {
  DEFAULT_CODEC_DURATION: "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION: "MATCH_VIDEO_DURATION",
} as const;
/**
 * @public
 */
export type MpdAudioDuration = (typeof MpdAudioDuration)[keyof typeof MpdAudioDuration];

/**
 * @public
 * @enum
 */
export const MpdC2paManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type MpdC2paManifest = (typeof MpdC2paManifest)[keyof typeof MpdC2paManifest];

/**
 * @public
 * @enum
 */
export const MpdCaptionContainerType = {
  FRAGMENTED_MP4: "FRAGMENTED_MP4",
  RAW: "RAW",
} as const;
/**
 * @public
 */
export type MpdCaptionContainerType = (typeof MpdCaptionContainerType)[keyof typeof MpdCaptionContainerType];

/**
 * @public
 * @enum
 */
export const MpdKlvMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type MpdKlvMetadata = (typeof MpdKlvMetadata)[keyof typeof MpdKlvMetadata];

/**
 * @public
 * @enum
 */
export const MpdManifestMetadataSignaling = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MpdManifestMetadataSignaling =
  (typeof MpdManifestMetadataSignaling)[keyof typeof MpdManifestMetadataSignaling];

/**
 * @public
 * @enum
 */
export const MpdScte35Esam = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type MpdScte35Esam = (typeof MpdScte35Esam)[keyof typeof MpdScte35Esam];

/**
 * @public
 * @enum
 */
export const MpdScte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type MpdScte35Source = (typeof MpdScte35Source)[keyof typeof MpdScte35Source];

/**
 * @public
 * @enum
 */
export const MpdTimedMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type MpdTimedMetadata = (typeof MpdTimedMetadata)[keyof typeof MpdTimedMetadata];

/**
 * @public
 * @enum
 */
export const MpdTimedMetadataBoxVersion = {
  VERSION_0: "VERSION_0",
  VERSION_1: "VERSION_1",
} as const;
/**
 * @public
 */
export type MpdTimedMetadataBoxVersion = (typeof MpdTimedMetadataBoxVersion)[keyof typeof MpdTimedMetadataBoxVersion];

/**
 * @public
 * @enum
 */
export const MxfAfdSignaling = {
  COPY_FROM_VIDEO: "COPY_FROM_VIDEO",
  NO_COPY: "NO_COPY",
} as const;
/**
 * @public
 */
export type MxfAfdSignaling = (typeof MxfAfdSignaling)[keyof typeof MxfAfdSignaling];

/**
 * @public
 * @enum
 */
export const MxfProfile = {
  D_10: "D_10",
  OP1A: "OP1A",
  XAVC: "XAVC",
  XDCAM: "XDCAM",
  XDCAM_RDD9: "XDCAM_RDD9",
} as const;
/**
 * @public
 */
export type MxfProfile = (typeof MxfProfile)[keyof typeof MxfProfile];

/**
 * @public
 * @enum
 */
export const MxfXavcDurationMode = {
  ALLOW_ANY_DURATION: "ALLOW_ANY_DURATION",
  DROP_FRAMES_FOR_COMPLIANCE: "DROP_FRAMES_FOR_COMPLIANCE",
} as const;
/**
 * @public
 */
export type MxfXavcDurationMode = (typeof MxfXavcDurationMode)[keyof typeof MxfXavcDurationMode];

/**
 * @public
 * @enum
 */
export const HlsAudioOnlyContainer = {
  AUTOMATIC: "AUTOMATIC",
  M2TS: "M2TS",
} as const;
/**
 * @public
 */
export type HlsAudioOnlyContainer = (typeof HlsAudioOnlyContainer)[keyof typeof HlsAudioOnlyContainer];

/**
 * @public
 * @enum
 */
export const HlsAudioTrackType = {
  ALTERNATE_AUDIO_AUTO_SELECT: "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT: "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM: "AUDIO_ONLY_VARIANT_STREAM",
} as const;
/**
 * @public
 */
export type HlsAudioTrackType = (typeof HlsAudioTrackType)[keyof typeof HlsAudioTrackType];

/**
 * @public
 * @enum
 */
export const HlsDescriptiveVideoServiceFlag = {
  DONT_FLAG: "DONT_FLAG",
  FLAG: "FLAG",
} as const;
/**
 * @public
 */
export type HlsDescriptiveVideoServiceFlag =
  (typeof HlsDescriptiveVideoServiceFlag)[keyof typeof HlsDescriptiveVideoServiceFlag];

/**
 * @public
 * @enum
 */
export const HlsIFrameOnlyManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
  INCLUDE_AS_TS: "INCLUDE_AS_TS",
} as const;
/**
 * @public
 */
export type HlsIFrameOnlyManifest = (typeof HlsIFrameOnlyManifest)[keyof typeof HlsIFrameOnlyManifest];

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
export const AntiAlias = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AntiAlias = (typeof AntiAlias)[keyof typeof AntiAlias];

/**
 * @public
 * @enum
 */
export const ChromaPositionMode = {
  AUTO: "AUTO",
  FORCE_CENTER: "FORCE_CENTER",
  FORCE_TOP_LEFT: "FORCE_TOP_LEFT",
} as const;
/**
 * @public
 */
export type ChromaPositionMode = (typeof ChromaPositionMode)[keyof typeof ChromaPositionMode];

/**
 * @public
 * @enum
 */
export const Av1AdaptiveQuantization = {
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
export type Av1AdaptiveQuantization = (typeof Av1AdaptiveQuantization)[keyof typeof Av1AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Av1BitDepth = {
  BIT_10: "BIT_10",
  BIT_8: "BIT_8",
} as const;
/**
 * @public
 */
export type Av1BitDepth = (typeof Av1BitDepth)[keyof typeof Av1BitDepth];

/**
 * @public
 * @enum
 */
export const Av1FilmGrainSynthesis = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Av1FilmGrainSynthesis = (typeof Av1FilmGrainSynthesis)[keyof typeof Av1FilmGrainSynthesis];

/**
 * @public
 * @enum
 */
export const Av1FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Av1FramerateControl = (typeof Av1FramerateControl)[keyof typeof Av1FramerateControl];

/**
 * @public
 * @enum
 */
export const Av1FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type Av1FramerateConversionAlgorithm =
  (typeof Av1FramerateConversionAlgorithm)[keyof typeof Av1FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Av1RateControlMode = {
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
export const Av1SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Av1SpatialAdaptiveQuantization =
  (typeof Av1SpatialAdaptiveQuantization)[keyof typeof Av1SpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const AvcIntraClass = {
  CLASS_100: "CLASS_100",
  CLASS_200: "CLASS_200",
  CLASS_4K_2K: "CLASS_4K_2K",
  CLASS_50: "CLASS_50",
} as const;
/**
 * @public
 */
export type AvcIntraClass = (typeof AvcIntraClass)[keyof typeof AvcIntraClass];

/**
 * @public
 * @enum
 */
export const AvcIntraUhdQualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  SINGLE_PASS: "SINGLE_PASS",
} as const;
/**
 * @public
 */
export type AvcIntraUhdQualityTuningLevel =
  (typeof AvcIntraUhdQualityTuningLevel)[keyof typeof AvcIntraUhdQualityTuningLevel];

/**
 * @public
 * @enum
 */
export const AvcIntraFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type AvcIntraFramerateControl = (typeof AvcIntraFramerateControl)[keyof typeof AvcIntraFramerateControl];

/**
 * @public
 * @enum
 */
export const AvcIntraFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type AvcIntraFramerateConversionAlgorithm =
  (typeof AvcIntraFramerateConversionAlgorithm)[keyof typeof AvcIntraFramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const AvcIntraInterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;
/**
 * @public
 */
export type AvcIntraInterlaceMode = (typeof AvcIntraInterlaceMode)[keyof typeof AvcIntraInterlaceMode];

/**
 * @public
 * @enum
 */
export const AvcIntraScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;
/**
 * @public
 */
export type AvcIntraScanTypeConversionMode =
  (typeof AvcIntraScanTypeConversionMode)[keyof typeof AvcIntraScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const AvcIntraSlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AvcIntraSlowPal = (typeof AvcIntraSlowPal)[keyof typeof AvcIntraSlowPal];

/**
 * @public
 * @enum
 */
export const AvcIntraTelecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AvcIntraTelecine = (typeof AvcIntraTelecine)[keyof typeof AvcIntraTelecine];

/**
 * @public
 * @enum
 */
export const VideoCodec = {
  AV1: "AV1",
  AVC_INTRA: "AVC_INTRA",
  FRAME_CAPTURE: "FRAME_CAPTURE",
  GIF: "GIF",
  H_264: "H_264",
  H_265: "H_265",
  MPEG2: "MPEG2",
  PASSTHROUGH: "PASSTHROUGH",
  PRORES: "PRORES",
  UNCOMPRESSED: "UNCOMPRESSED",
  VC3: "VC3",
  VP8: "VP8",
  VP9: "VP9",
  XAVC: "XAVC",
} as const;
/**
 * @public
 */
export type VideoCodec = (typeof VideoCodec)[keyof typeof VideoCodec];

/**
 * @public
 * @enum
 */
export const GifFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type GifFramerateControl = (typeof GifFramerateControl)[keyof typeof GifFramerateControl];

/**
 * @public
 * @enum
 */
export const GifFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  INTERPOLATE: "INTERPOLATE",
} as const;
/**
 * @public
 */
export type GifFramerateConversionAlgorithm =
  (typeof GifFramerateConversionAlgorithm)[keyof typeof GifFramerateConversionAlgorithm];

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
export const BandwidthReductionFilterSharpening = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type BandwidthReductionFilterSharpening =
  (typeof BandwidthReductionFilterSharpening)[keyof typeof BandwidthReductionFilterSharpening];

/**
 * @public
 * @enum
 */
export const BandwidthReductionFilterStrength = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
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
export const H264CodecLevel = {
  AUTO: "AUTO",
  LEVEL_1: "LEVEL_1",
  LEVEL_1_1: "LEVEL_1_1",
  LEVEL_1_2: "LEVEL_1_2",
  LEVEL_1_3: "LEVEL_1_3",
  LEVEL_2: "LEVEL_2",
  LEVEL_2_1: "LEVEL_2_1",
  LEVEL_2_2: "LEVEL_2_2",
  LEVEL_3: "LEVEL_3",
  LEVEL_3_1: "LEVEL_3_1",
  LEVEL_3_2: "LEVEL_3_2",
  LEVEL_4: "LEVEL_4",
  LEVEL_4_1: "LEVEL_4_1",
  LEVEL_4_2: "LEVEL_4_2",
  LEVEL_5: "LEVEL_5",
  LEVEL_5_1: "LEVEL_5_1",
  LEVEL_5_2: "LEVEL_5_2",
} as const;
/**
 * @public
 */
export type H264CodecLevel = (typeof H264CodecLevel)[keyof typeof H264CodecLevel];

/**
 * @public
 * @enum
 */
export const H264CodecProfile = {
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
export type H264CodecProfile = (typeof H264CodecProfile)[keyof typeof H264CodecProfile];

/**
 * @public
 * @enum
 */
export const H264DynamicSubGop = {
  ADAPTIVE: "ADAPTIVE",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type H264DynamicSubGop = (typeof H264DynamicSubGop)[keyof typeof H264DynamicSubGop];

/**
 * @public
 * @enum
 */
export const H264EndOfStreamMarkers = {
  INCLUDE: "INCLUDE",
  SUPPRESS: "SUPPRESS",
} as const;
/**
 * @public
 */
export type H264EndOfStreamMarkers = (typeof H264EndOfStreamMarkers)[keyof typeof H264EndOfStreamMarkers];

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
export const H264FieldEncoding = {
  FORCE_FIELD: "FORCE_FIELD",
  MBAFF: "MBAFF",
  PAFF: "PAFF",
} as const;
/**
 * @public
 */
export type H264FieldEncoding = (typeof H264FieldEncoding)[keyof typeof H264FieldEncoding];

/**
 * @public
 * @enum
 */
export const H264FlickerAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264FlickerAdaptiveQuantization =
  (typeof H264FlickerAdaptiveQuantization)[keyof typeof H264FlickerAdaptiveQuantization];

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
export const H264FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type H264FramerateConversionAlgorithm =
  (typeof H264FramerateConversionAlgorithm)[keyof typeof H264FramerateConversionAlgorithm];

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
  AUTO: "AUTO",
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
export const H264InterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;
/**
 * @public
 */
export type H264InterlaceMode = (typeof H264InterlaceMode)[keyof typeof H264InterlaceMode];

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
export const H264QualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;
/**
 * @public
 */
export type H264QualityTuningLevel = (typeof H264QualityTuningLevel)[keyof typeof H264QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const H264RateControlMode = {
  CBR: "CBR",
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
export const H264RepeatPps = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264RepeatPps = (typeof H264RepeatPps)[keyof typeof H264RepeatPps];

/**
 * @public
 * @enum
 */
export const H264SaliencyAwareEncoding = {
  DISABLED: "DISABLED",
  PREFERRED: "PREFERRED",
} as const;
/**
 * @public
 */
export type H264SaliencyAwareEncoding = (typeof H264SaliencyAwareEncoding)[keyof typeof H264SaliencyAwareEncoding];

/**
 * @public
 * @enum
 */
export const H264ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;
/**
 * @public
 */
export type H264ScanTypeConversionMode = (typeof H264ScanTypeConversionMode)[keyof typeof H264ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const H264SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  TRANSITION_DETECTION: "TRANSITION_DETECTION",
} as const;
/**
 * @public
 */
export type H264SceneChangeDetect = (typeof H264SceneChangeDetect)[keyof typeof H264SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H264SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264SlowPal = (typeof H264SlowPal)[keyof typeof H264SlowPal];

/**
 * @public
 * @enum
 */
export const H264SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264SpatialAdaptiveQuantization =
  (typeof H264SpatialAdaptiveQuantization)[keyof typeof H264SpatialAdaptiveQuantization];

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
export const H264Telecine = {
  HARD: "HARD",
  NONE: "NONE",
  SOFT: "SOFT",
} as const;
/**
 * @public
 */
export type H264Telecine = (typeof H264Telecine)[keyof typeof H264Telecine];

/**
 * @public
 * @enum
 */
export const H264TemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264TemporalAdaptiveQuantization =
  (typeof H264TemporalAdaptiveQuantization)[keyof typeof H264TemporalAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H264UnregisteredSeiTimecode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H264UnregisteredSeiTimecode =
  (typeof H264UnregisteredSeiTimecode)[keyof typeof H264UnregisteredSeiTimecode];

/**
 * @public
 * @enum
 */
export const H264WriteMp4PackagingType = {
  AVC1: "AVC1",
  AVC3: "AVC3",
} as const;
/**
 * @public
 */
export type H264WriteMp4PackagingType = (typeof H264WriteMp4PackagingType)[keyof typeof H264WriteMp4PackagingType];

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
export const H265AlternateTransferFunctionSei = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265AlternateTransferFunctionSei =
  (typeof H265AlternateTransferFunctionSei)[keyof typeof H265AlternateTransferFunctionSei];

/**
 * @public
 * @enum
 */
export const H265CodecLevel = {
  AUTO: "AUTO",
  LEVEL_1: "LEVEL_1",
  LEVEL_2: "LEVEL_2",
  LEVEL_2_1: "LEVEL_2_1",
  LEVEL_3: "LEVEL_3",
  LEVEL_3_1: "LEVEL_3_1",
  LEVEL_4: "LEVEL_4",
  LEVEL_4_1: "LEVEL_4_1",
  LEVEL_5: "LEVEL_5",
  LEVEL_5_1: "LEVEL_5_1",
  LEVEL_5_2: "LEVEL_5_2",
  LEVEL_6: "LEVEL_6",
  LEVEL_6_1: "LEVEL_6_1",
  LEVEL_6_2: "LEVEL_6_2",
} as const;
/**
 * @public
 */
export type H265CodecLevel = (typeof H265CodecLevel)[keyof typeof H265CodecLevel];

/**
 * @public
 * @enum
 */
export const H265CodecProfile = {
  MAIN10_HIGH: "MAIN10_HIGH",
  MAIN10_MAIN: "MAIN10_MAIN",
  MAIN_422_10BIT_HIGH: "MAIN_422_10BIT_HIGH",
  MAIN_422_10BIT_MAIN: "MAIN_422_10BIT_MAIN",
  MAIN_422_8BIT_HIGH: "MAIN_422_8BIT_HIGH",
  MAIN_422_8BIT_MAIN: "MAIN_422_8BIT_MAIN",
  MAIN_HIGH: "MAIN_HIGH",
  MAIN_MAIN: "MAIN_MAIN",
} as const;
/**
 * @public
 */
export type H265CodecProfile = (typeof H265CodecProfile)[keyof typeof H265CodecProfile];

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
export const H265DynamicSubGop = {
  ADAPTIVE: "ADAPTIVE",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type H265DynamicSubGop = (typeof H265DynamicSubGop)[keyof typeof H265DynamicSubGop];

/**
 * @public
 * @enum
 */
export const H265EndOfStreamMarkers = {
  INCLUDE: "INCLUDE",
  SUPPRESS: "SUPPRESS",
} as const;
/**
 * @public
 */
export type H265EndOfStreamMarkers = (typeof H265EndOfStreamMarkers)[keyof typeof H265EndOfStreamMarkers];

/**
 * @public
 * @enum
 */
export const H265FlickerAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265FlickerAdaptiveQuantization =
  (typeof H265FlickerAdaptiveQuantization)[keyof typeof H265FlickerAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type H265FramerateControl = (typeof H265FramerateControl)[keyof typeof H265FramerateControl];

/**
 * @public
 * @enum
 */
export const H265FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type H265FramerateConversionAlgorithm =
  (typeof H265FramerateConversionAlgorithm)[keyof typeof H265FramerateConversionAlgorithm];

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
  AUTO: "AUTO",
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
export const H265InterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;
/**
 * @public
 */
export type H265InterlaceMode = (typeof H265InterlaceMode)[keyof typeof H265InterlaceMode];

/**
 * @public
 * @enum
 */
export const H265ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type H265ParControl = (typeof H265ParControl)[keyof typeof H265ParControl];

/**
 * @public
 * @enum
 */
export const H265QualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;
/**
 * @public
 */
export type H265QualityTuningLevel = (typeof H265QualityTuningLevel)[keyof typeof H265QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const H265RateControlMode = {
  CBR: "CBR",
  QVBR: "QVBR",
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type H265RateControlMode = (typeof H265RateControlMode)[keyof typeof H265RateControlMode];

/**
 * @public
 * @enum
 */
export const H265SampleAdaptiveOffsetFilterMode = {
  ADAPTIVE: "ADAPTIVE",
  DEFAULT: "DEFAULT",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type H265SampleAdaptiveOffsetFilterMode =
  (typeof H265SampleAdaptiveOffsetFilterMode)[keyof typeof H265SampleAdaptiveOffsetFilterMode];

/**
 * @public
 * @enum
 */
export const H265ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;
/**
 * @public
 */
export type H265ScanTypeConversionMode = (typeof H265ScanTypeConversionMode)[keyof typeof H265ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const H265SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  TRANSITION_DETECTION: "TRANSITION_DETECTION",
} as const;
/**
 * @public
 */
export type H265SceneChangeDetect = (typeof H265SceneChangeDetect)[keyof typeof H265SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H265SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265SlowPal = (typeof H265SlowPal)[keyof typeof H265SlowPal];

/**
 * @public
 * @enum
 */
export const H265SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265SpatialAdaptiveQuantization =
  (typeof H265SpatialAdaptiveQuantization)[keyof typeof H265SpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265Telecine = {
  HARD: "HARD",
  NONE: "NONE",
  SOFT: "SOFT",
} as const;
/**
 * @public
 */
export type H265Telecine = (typeof H265Telecine)[keyof typeof H265Telecine];

/**
 * @public
 * @enum
 */
export const H265TemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265TemporalAdaptiveQuantization =
  (typeof H265TemporalAdaptiveQuantization)[keyof typeof H265TemporalAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265TemporalIds = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265TemporalIds = (typeof H265TemporalIds)[keyof typeof H265TemporalIds];

/**
 * @public
 * @enum
 */
export const H265Tiles = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265Tiles = (typeof H265Tiles)[keyof typeof H265Tiles];

/**
 * @public
 * @enum
 */
export const H265UnregisteredSeiTimecode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type H265UnregisteredSeiTimecode =
  (typeof H265UnregisteredSeiTimecode)[keyof typeof H265UnregisteredSeiTimecode];

/**
 * @public
 * @enum
 */
export const H265WriteMp4PackagingType = {
  HEV1: "HEV1",
  HVC1: "HVC1",
} as const;
/**
 * @public
 */
export type H265WriteMp4PackagingType = (typeof H265WriteMp4PackagingType)[keyof typeof H265WriteMp4PackagingType];

/**
 * @public
 * @enum
 */
export const Mpeg2AdaptiveQuantization = {
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
export const Mpeg2CodecLevel = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGH1440: "HIGH1440",
  LOW: "LOW",
  MAIN: "MAIN",
} as const;
/**
 * @public
 */
export type Mpeg2CodecLevel = (typeof Mpeg2CodecLevel)[keyof typeof Mpeg2CodecLevel];

/**
 * @public
 * @enum
 */
export const Mpeg2CodecProfile = {
  MAIN: "MAIN",
  PROFILE_422: "PROFILE_422",
} as const;
/**
 * @public
 */
export type Mpeg2CodecProfile = (typeof Mpeg2CodecProfile)[keyof typeof Mpeg2CodecProfile];

/**
 * @public
 * @enum
 */
export const Mpeg2DynamicSubGop = {
  ADAPTIVE: "ADAPTIVE",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type Mpeg2DynamicSubGop = (typeof Mpeg2DynamicSubGop)[keyof typeof Mpeg2DynamicSubGop];

/**
 * @public
 * @enum
 */
export const Mpeg2FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Mpeg2FramerateControl = (typeof Mpeg2FramerateControl)[keyof typeof Mpeg2FramerateControl];

/**
 * @public
 * @enum
 */
export const Mpeg2FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type Mpeg2FramerateConversionAlgorithm =
  (typeof Mpeg2FramerateConversionAlgorithm)[keyof typeof Mpeg2FramerateConversionAlgorithm];

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
export const Mpeg2InterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;
/**
 * @public
 */
export type Mpeg2InterlaceMode = (typeof Mpeg2InterlaceMode)[keyof typeof Mpeg2InterlaceMode];

/**
 * @public
 * @enum
 */
export const Mpeg2IntraDcPrecision = {
  AUTO: "AUTO",
  INTRA_DC_PRECISION_10: "INTRA_DC_PRECISION_10",
  INTRA_DC_PRECISION_11: "INTRA_DC_PRECISION_11",
  INTRA_DC_PRECISION_8: "INTRA_DC_PRECISION_8",
  INTRA_DC_PRECISION_9: "INTRA_DC_PRECISION_9",
} as const;
/**
 * @public
 */
export type Mpeg2IntraDcPrecision = (typeof Mpeg2IntraDcPrecision)[keyof typeof Mpeg2IntraDcPrecision];

/**
 * @public
 * @enum
 */
export const Mpeg2ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Mpeg2ParControl = (typeof Mpeg2ParControl)[keyof typeof Mpeg2ParControl];

/**
 * @public
 * @enum
 */
export const Mpeg2QualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  SINGLE_PASS: "SINGLE_PASS",
} as const;
/**
 * @public
 */
export type Mpeg2QualityTuningLevel = (typeof Mpeg2QualityTuningLevel)[keyof typeof Mpeg2QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const Mpeg2RateControlMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type Mpeg2RateControlMode = (typeof Mpeg2RateControlMode)[keyof typeof Mpeg2RateControlMode];

/**
 * @public
 * @enum
 */
export const Mpeg2ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;
/**
 * @public
 */
export type Mpeg2ScanTypeConversionMode =
  (typeof Mpeg2ScanTypeConversionMode)[keyof typeof Mpeg2ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const Mpeg2SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Mpeg2SceneChangeDetect = (typeof Mpeg2SceneChangeDetect)[keyof typeof Mpeg2SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const Mpeg2SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Mpeg2SlowPal = (typeof Mpeg2SlowPal)[keyof typeof Mpeg2SlowPal];

/**
 * @public
 * @enum
 */
export const Mpeg2SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Mpeg2SpatialAdaptiveQuantization =
  (typeof Mpeg2SpatialAdaptiveQuantization)[keyof typeof Mpeg2SpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Mpeg2Syntax = {
  DEFAULT: "DEFAULT",
  D_10: "D_10",
} as const;
/**
 * @public
 */
export type Mpeg2Syntax = (typeof Mpeg2Syntax)[keyof typeof Mpeg2Syntax];

/**
 * @public
 * @enum
 */
export const Mpeg2Telecine = {
  HARD: "HARD",
  NONE: "NONE",
  SOFT: "SOFT",
} as const;
/**
 * @public
 */
export type Mpeg2Telecine = (typeof Mpeg2Telecine)[keyof typeof Mpeg2Telecine];

/**
 * @public
 * @enum
 */
export const Mpeg2TemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Mpeg2TemporalAdaptiveQuantization =
  (typeof Mpeg2TemporalAdaptiveQuantization)[keyof typeof Mpeg2TemporalAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const FrameControl = {
  NEAREST_IDRFRAME: "NEAREST_IDRFRAME",
  NEAREST_IFRAME: "NEAREST_IFRAME",
} as const;
/**
 * @public
 */
export type FrameControl = (typeof FrameControl)[keyof typeof FrameControl];

/**
 * @public
 * @enum
 */
export const VideoSelectorMode = {
  AUTO: "AUTO",
  REMUX_ALL: "REMUX_ALL",
} as const;
/**
 * @public
 */
export type VideoSelectorMode = (typeof VideoSelectorMode)[keyof typeof VideoSelectorMode];

/**
 * @public
 * @enum
 */
export const ProresChromaSampling = {
  PRESERVE_444_SAMPLING: "PRESERVE_444_SAMPLING",
  SUBSAMPLE_TO_422: "SUBSAMPLE_TO_422",
} as const;
/**
 * @public
 */
export type ProresChromaSampling = (typeof ProresChromaSampling)[keyof typeof ProresChromaSampling];

/**
 * @public
 * @enum
 */
export const ProresCodecProfile = {
  APPLE_PRORES_422: "APPLE_PRORES_422",
  APPLE_PRORES_422_HQ: "APPLE_PRORES_422_HQ",
  APPLE_PRORES_422_LT: "APPLE_PRORES_422_LT",
  APPLE_PRORES_422_PROXY: "APPLE_PRORES_422_PROXY",
  APPLE_PRORES_4444: "APPLE_PRORES_4444",
  APPLE_PRORES_4444_XQ: "APPLE_PRORES_4444_XQ",
} as const;
/**
 * @public
 */
export type ProresCodecProfile = (typeof ProresCodecProfile)[keyof typeof ProresCodecProfile];

/**
 * @public
 * @enum
 */
export const ProresFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type ProresFramerateControl = (typeof ProresFramerateControl)[keyof typeof ProresFramerateControl];

/**
 * @public
 * @enum
 */
export const ProresFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type ProresFramerateConversionAlgorithm =
  (typeof ProresFramerateConversionAlgorithm)[keyof typeof ProresFramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const ProresInterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;
/**
 * @public
 */
export type ProresInterlaceMode = (typeof ProresInterlaceMode)[keyof typeof ProresInterlaceMode];

/**
 * @public
 * @enum
 */
export const ProresParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type ProresParControl = (typeof ProresParControl)[keyof typeof ProresParControl];

/**
 * @public
 * @enum
 */
export const ProresScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;
/**
 * @public
 */
export type ProresScanTypeConversionMode =
  (typeof ProresScanTypeConversionMode)[keyof typeof ProresScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const ProresSlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ProresSlowPal = (typeof ProresSlowPal)[keyof typeof ProresSlowPal];

/**
 * @public
 * @enum
 */
export const ProresTelecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ProresTelecine = (typeof ProresTelecine)[keyof typeof ProresTelecine];

/**
 * @public
 * @enum
 */
export const UncompressedFourcc = {
  I420: "I420",
  I422: "I422",
  I444: "I444",
} as const;
/**
 * @public
 */
export type UncompressedFourcc = (typeof UncompressedFourcc)[keyof typeof UncompressedFourcc];

/**
 * @public
 * @enum
 */
export const UncompressedFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type UncompressedFramerateControl =
  (typeof UncompressedFramerateControl)[keyof typeof UncompressedFramerateControl];

/**
 * @public
 * @enum
 */
export const UncompressedFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type UncompressedFramerateConversionAlgorithm =
  (typeof UncompressedFramerateConversionAlgorithm)[keyof typeof UncompressedFramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const UncompressedInterlaceMode = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;
/**
 * @public
 */
export type UncompressedInterlaceMode = (typeof UncompressedInterlaceMode)[keyof typeof UncompressedInterlaceMode];

/**
 * @public
 * @enum
 */
export const UncompressedScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;
/**
 * @public
 */
export type UncompressedScanTypeConversionMode =
  (typeof UncompressedScanTypeConversionMode)[keyof typeof UncompressedScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const UncompressedSlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type UncompressedSlowPal = (typeof UncompressedSlowPal)[keyof typeof UncompressedSlowPal];

/**
 * @public
 * @enum
 */
export const UncompressedTelecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type UncompressedTelecine = (typeof UncompressedTelecine)[keyof typeof UncompressedTelecine];

/**
 * @public
 * @enum
 */
export const Vc3FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Vc3FramerateControl = (typeof Vc3FramerateControl)[keyof typeof Vc3FramerateControl];

/**
 * @public
 * @enum
 */
export const Vc3FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type Vc3FramerateConversionAlgorithm =
  (typeof Vc3FramerateConversionAlgorithm)[keyof typeof Vc3FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Vc3InterlaceMode = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;
/**
 * @public
 */
export type Vc3InterlaceMode = (typeof Vc3InterlaceMode)[keyof typeof Vc3InterlaceMode];

/**
 * @public
 * @enum
 */
export const Vc3ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;
/**
 * @public
 */
export type Vc3ScanTypeConversionMode = (typeof Vc3ScanTypeConversionMode)[keyof typeof Vc3ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const Vc3SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Vc3SlowPal = (typeof Vc3SlowPal)[keyof typeof Vc3SlowPal];

/**
 * @public
 * @enum
 */
export const Vc3Telecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Vc3Telecine = (typeof Vc3Telecine)[keyof typeof Vc3Telecine];

/**
 * @public
 * @enum
 */
export const Vc3Class = {
  CLASS_145_8BIT: "CLASS_145_8BIT",
  CLASS_220_10BIT: "CLASS_220_10BIT",
  CLASS_220_8BIT: "CLASS_220_8BIT",
} as const;
/**
 * @public
 */
export type Vc3Class = (typeof Vc3Class)[keyof typeof Vc3Class];

/**
 * @public
 * @enum
 */
export const Vp8FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Vp8FramerateControl = (typeof Vp8FramerateControl)[keyof typeof Vp8FramerateControl];

/**
 * @public
 * @enum
 */
export const Vp8FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type Vp8FramerateConversionAlgorithm =
  (typeof Vp8FramerateConversionAlgorithm)[keyof typeof Vp8FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Vp8ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Vp8ParControl = (typeof Vp8ParControl)[keyof typeof Vp8ParControl];

/**
 * @public
 * @enum
 */
export const Vp8QualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
} as const;
/**
 * @public
 */
export type Vp8QualityTuningLevel = (typeof Vp8QualityTuningLevel)[keyof typeof Vp8QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const Vp8RateControlMode = {
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type Vp8RateControlMode = (typeof Vp8RateControlMode)[keyof typeof Vp8RateControlMode];

/**
 * @public
 * @enum
 */
export const Vp9FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Vp9FramerateControl = (typeof Vp9FramerateControl)[keyof typeof Vp9FramerateControl];

/**
 * @public
 * @enum
 */
export const Vp9FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type Vp9FramerateConversionAlgorithm =
  (typeof Vp9FramerateConversionAlgorithm)[keyof typeof Vp9FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Vp9ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type Vp9ParControl = (typeof Vp9ParControl)[keyof typeof Vp9ParControl];

/**
 * @public
 * @enum
 */
export const Vp9QualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
} as const;
/**
 * @public
 */
export type Vp9QualityTuningLevel = (typeof Vp9QualityTuningLevel)[keyof typeof Vp9QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const Vp9RateControlMode = {
  VBR: "VBR",
} as const;
/**
 * @public
 */
export type Vp9RateControlMode = (typeof Vp9RateControlMode)[keyof typeof Vp9RateControlMode];

/**
 * @public
 * @enum
 */
export const XavcAdaptiveQuantization = {
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
export type XavcAdaptiveQuantization = (typeof XavcAdaptiveQuantization)[keyof typeof XavcAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const XavcEntropyEncoding = {
  AUTO: "AUTO",
  CABAC: "CABAC",
  CAVLC: "CAVLC",
} as const;
/**
 * @public
 */
export type XavcEntropyEncoding = (typeof XavcEntropyEncoding)[keyof typeof XavcEntropyEncoding];

/**
 * @public
 * @enum
 */
export const XavcFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;
/**
 * @public
 */
export type XavcFramerateControl = (typeof XavcFramerateControl)[keyof typeof XavcFramerateControl];

/**
 * @public
 * @enum
 */
export const XavcFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
  MAINTAIN_FRAME_COUNT: "MAINTAIN_FRAME_COUNT",
} as const;
/**
 * @public
 */
export type XavcFramerateConversionAlgorithm =
  (typeof XavcFramerateConversionAlgorithm)[keyof typeof XavcFramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const XavcProfile = {
  XAVC_4K: "XAVC_4K",
  XAVC_4K_INTRA_CBG: "XAVC_4K_INTRA_CBG",
  XAVC_4K_INTRA_VBR: "XAVC_4K_INTRA_VBR",
  XAVC_HD: "XAVC_HD",
  XAVC_HD_INTRA_CBG: "XAVC_HD_INTRA_CBG",
} as const;
/**
 * @public
 */
export type XavcProfile = (typeof XavcProfile)[keyof typeof XavcProfile];

/**
 * @public
 * @enum
 */
export const XavcSlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type XavcSlowPal = (typeof XavcSlowPal)[keyof typeof XavcSlowPal];

/**
 * @public
 * @enum
 */
export const XavcSpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type XavcSpatialAdaptiveQuantization =
  (typeof XavcSpatialAdaptiveQuantization)[keyof typeof XavcSpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const XavcTemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type XavcTemporalAdaptiveQuantization =
  (typeof XavcTemporalAdaptiveQuantization)[keyof typeof XavcTemporalAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Xavc4kIntraCbgProfileClass = {
  CLASS_100: "CLASS_100",
  CLASS_300: "CLASS_300",
  CLASS_480: "CLASS_480",
} as const;
/**
 * @public
 */
export type Xavc4kIntraCbgProfileClass = (typeof Xavc4kIntraCbgProfileClass)[keyof typeof Xavc4kIntraCbgProfileClass];

/**
 * @public
 * @enum
 */
export const Xavc4kIntraVbrProfileClass = {
  CLASS_100: "CLASS_100",
  CLASS_300: "CLASS_300",
  CLASS_480: "CLASS_480",
} as const;
/**
 * @public
 */
export type Xavc4kIntraVbrProfileClass = (typeof Xavc4kIntraVbrProfileClass)[keyof typeof Xavc4kIntraVbrProfileClass];

/**
 * @public
 * @enum
 */
export const Xavc4kProfileBitrateClass = {
  BITRATE_CLASS_100: "BITRATE_CLASS_100",
  BITRATE_CLASS_140: "BITRATE_CLASS_140",
  BITRATE_CLASS_200: "BITRATE_CLASS_200",
} as const;
/**
 * @public
 */
export type Xavc4kProfileBitrateClass = (typeof Xavc4kProfileBitrateClass)[keyof typeof Xavc4kProfileBitrateClass];

/**
 * @public
 * @enum
 */
export const Xavc4kProfileCodecProfile = {
  HIGH: "HIGH",
  HIGH_422: "HIGH_422",
} as const;
/**
 * @public
 */
export type Xavc4kProfileCodecProfile = (typeof Xavc4kProfileCodecProfile)[keyof typeof Xavc4kProfileCodecProfile];

/**
 * @public
 * @enum
 */
export const XavcFlickerAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type XavcFlickerAdaptiveQuantization =
  (typeof XavcFlickerAdaptiveQuantization)[keyof typeof XavcFlickerAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const XavcGopBReference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type XavcGopBReference = (typeof XavcGopBReference)[keyof typeof XavcGopBReference];

/**
 * @public
 * @enum
 */
export const Xavc4kProfileQualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;
/**
 * @public
 */
export type Xavc4kProfileQualityTuningLevel =
  (typeof Xavc4kProfileQualityTuningLevel)[keyof typeof Xavc4kProfileQualityTuningLevel];

/**
 * @public
 * @enum
 */
export const XavcHdIntraCbgProfileClass = {
  CLASS_100: "CLASS_100",
  CLASS_200: "CLASS_200",
  CLASS_50: "CLASS_50",
} as const;
/**
 * @public
 */
export type XavcHdIntraCbgProfileClass = (typeof XavcHdIntraCbgProfileClass)[keyof typeof XavcHdIntraCbgProfileClass];

/**
 * @public
 * @enum
 */
export const XavcHdProfileBitrateClass = {
  BITRATE_CLASS_25: "BITRATE_CLASS_25",
  BITRATE_CLASS_35: "BITRATE_CLASS_35",
  BITRATE_CLASS_50: "BITRATE_CLASS_50",
} as const;
/**
 * @public
 */
export type XavcHdProfileBitrateClass = (typeof XavcHdProfileBitrateClass)[keyof typeof XavcHdProfileBitrateClass];

/**
 * @public
 * @enum
 */
export const XavcInterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;
/**
 * @public
 */
export type XavcInterlaceMode = (typeof XavcInterlaceMode)[keyof typeof XavcInterlaceMode];

/**
 * @public
 * @enum
 */
export const XavcHdProfileQualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;
/**
 * @public
 */
export type XavcHdProfileQualityTuningLevel =
  (typeof XavcHdProfileQualityTuningLevel)[keyof typeof XavcHdProfileQualityTuningLevel];

/**
 * @public
 * @enum
 */
export const XavcHdProfileTelecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type XavcHdProfileTelecine = (typeof XavcHdProfileTelecine)[keyof typeof XavcHdProfileTelecine];

/**
 * @public
 * @enum
 */
export const ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;
/**
 * @public
 */
export type ColorMetadata = (typeof ColorMetadata)[keyof typeof ColorMetadata];

/**
 * @public
 * @enum
 */
export const DropFrameTimecode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DropFrameTimecode = (typeof DropFrameTimecode)[keyof typeof DropFrameTimecode];

/**
 * @public
 * @enum
 */
export const RespondToAfd = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
  RESPOND: "RESPOND",
} as const;
/**
 * @public
 */
export type RespondToAfd = (typeof RespondToAfd)[keyof typeof RespondToAfd];

/**
 * @public
 * @enum
 */
export const ScalingBehavior = {
  DEFAULT: "DEFAULT",
  FILL: "FILL",
  FIT: "FIT",
  FIT_NO_UPSCALE: "FIT_NO_UPSCALE",
  STRETCH_TO_OUTPUT: "STRETCH_TO_OUTPUT",
} as const;
/**
 * @public
 */
export type ScalingBehavior = (typeof ScalingBehavior)[keyof typeof ScalingBehavior];

/**
 * @public
 * @enum
 */
export const VideoTimecodeInsertion = {
  DISABLED: "DISABLED",
  PIC_TIMING_SEI: "PIC_TIMING_SEI",
} as const;
/**
 * @public
 */
export type VideoTimecodeInsertion = (typeof VideoTimecodeInsertion)[keyof typeof VideoTimecodeInsertion];

/**
 * @public
 * @enum
 */
export const TimecodeTrack = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TimecodeTrack = (typeof TimecodeTrack)[keyof typeof TimecodeTrack];

/**
 * @public
 * @enum
 */
export const ColorSpaceConversion = {
  FORCE_601: "FORCE_601",
  FORCE_709: "FORCE_709",
  FORCE_HDR10: "FORCE_HDR10",
  FORCE_HLG_2020: "FORCE_HLG_2020",
  FORCE_P3D65_HDR: "FORCE_P3D65_HDR",
  FORCE_P3D65_SDR: "FORCE_P3D65_SDR",
  FORCE_P3DCI: "FORCE_P3DCI",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ColorSpaceConversion = (typeof ColorSpaceConversion)[keyof typeof ColorSpaceConversion];

/**
 * @public
 * @enum
 */
export const HDRToSDRToneMapper = {
  PRESERVE_DETAILS: "PRESERVE_DETAILS",
  VIBRANT: "VIBRANT",
} as const;
/**
 * @public
 */
export type HDRToSDRToneMapper = (typeof HDRToSDRToneMapper)[keyof typeof HDRToSDRToneMapper];

/**
 * @public
 * @enum
 */
export const SampleRangeConversion = {
  LIMITED_RANGE_CLIP: "LIMITED_RANGE_CLIP",
  LIMITED_RANGE_SQUEEZE: "LIMITED_RANGE_SQUEEZE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type SampleRangeConversion = (typeof SampleRangeConversion)[keyof typeof SampleRangeConversion];

/**
 * @public
 * @enum
 */
export const DeinterlaceAlgorithm = {
  BLEND: "BLEND",
  BLEND_TICKER: "BLEND_TICKER",
  INTERPOLATE: "INTERPOLATE",
  INTERPOLATE_TICKER: "INTERPOLATE_TICKER",
  LINEAR_INTERPOLATION: "LINEAR_INTERPOLATION",
} as const;
/**
 * @public
 */
export type DeinterlaceAlgorithm = (typeof DeinterlaceAlgorithm)[keyof typeof DeinterlaceAlgorithm];

/**
 * @public
 * @enum
 */
export const DeinterlacerControl = {
  FORCE_ALL_FRAMES: "FORCE_ALL_FRAMES",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type DeinterlacerControl = (typeof DeinterlacerControl)[keyof typeof DeinterlacerControl];

/**
 * @public
 * @enum
 */
export const DeinterlacerMode = {
  ADAPTIVE: "ADAPTIVE",
  DEINTERLACE: "DEINTERLACE",
  INVERSE_TELECINE: "INVERSE_TELECINE",
} as const;
/**
 * @public
 */
export type DeinterlacerMode = (typeof DeinterlacerMode)[keyof typeof DeinterlacerMode];

/**
 * @public
 * @enum
 */
export const DolbyVisionLevel6Mode = {
  PASSTHROUGH: "PASSTHROUGH",
  RECALCULATE: "RECALCULATE",
  SPECIFY: "SPECIFY",
} as const;
/**
 * @public
 */
export type DolbyVisionLevel6Mode = (typeof DolbyVisionLevel6Mode)[keyof typeof DolbyVisionLevel6Mode];

/**
 * @public
 * @enum
 */
export const DolbyVisionMapping = {
  HDR10_1000: "HDR10_1000",
  HDR10_NOMAP: "HDR10_NOMAP",
} as const;
/**
 * @public
 */
export type DolbyVisionMapping = (typeof DolbyVisionMapping)[keyof typeof DolbyVisionMapping];

/**
 * @public
 * @enum
 */
export const DolbyVisionProfile = {
  PROFILE_5: "PROFILE_5",
  PROFILE_8_1: "PROFILE_8_1",
} as const;
/**
 * @public
 */
export type DolbyVisionProfile = (typeof DolbyVisionProfile)[keyof typeof DolbyVisionProfile];

/**
 * @public
 * @enum
 */
export const NoiseReducerFilter = {
  BILATERAL: "BILATERAL",
  CONSERVE: "CONSERVE",
  GAUSSIAN: "GAUSSIAN",
  LANCZOS: "LANCZOS",
  MEAN: "MEAN",
  SHARPEN: "SHARPEN",
  SPATIAL: "SPATIAL",
  TEMPORAL: "TEMPORAL",
} as const;
/**
 * @public
 */
export type NoiseReducerFilter = (typeof NoiseReducerFilter)[keyof typeof NoiseReducerFilter];

/**
 * @public
 * @enum
 */
export const NoiseFilterPostTemporalSharpening = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type NoiseFilterPostTemporalSharpening =
  (typeof NoiseFilterPostTemporalSharpening)[keyof typeof NoiseFilterPostTemporalSharpening];

/**
 * @public
 * @enum
 */
export const NoiseFilterPostTemporalSharpeningStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type NoiseFilterPostTemporalSharpeningStrength =
  (typeof NoiseFilterPostTemporalSharpeningStrength)[keyof typeof NoiseFilterPostTemporalSharpeningStrength];

/**
 * @public
 * @enum
 */
export const WatermarkingStrength = {
  DEFAULT: "DEFAULT",
  LIGHTER: "LIGHTER",
  LIGHTEST: "LIGHTEST",
  STRONGER: "STRONGER",
  STRONGEST: "STRONGEST",
} as const;
/**
 * @public
 */
export type WatermarkingStrength = (typeof WatermarkingStrength)[keyof typeof WatermarkingStrength];

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
export const TimecodeSource = {
  EMBEDDED: "EMBEDDED",
  SPECIFIEDSTART: "SPECIFIEDSTART",
  ZEROBASED: "ZEROBASED",
} as const;
/**
 * @public
 */
export type TimecodeSource = (typeof TimecodeSource)[keyof typeof TimecodeSource];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  INITIATED: "INITIATED",
  NOT_SHARED: "NOT_SHARED",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * @enum
 */
export const SimulateReservedQueue = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SimulateReservedQueue = (typeof SimulateReservedQueue)[keyof typeof SimulateReservedQueue];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
  PROGRESSING: "PROGRESSING",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const StatusUpdateInterval = {
  SECONDS_10: "SECONDS_10",
  SECONDS_12: "SECONDS_12",
  SECONDS_120: "SECONDS_120",
  SECONDS_15: "SECONDS_15",
  SECONDS_180: "SECONDS_180",
  SECONDS_20: "SECONDS_20",
  SECONDS_240: "SECONDS_240",
  SECONDS_30: "SECONDS_30",
  SECONDS_300: "SECONDS_300",
  SECONDS_360: "SECONDS_360",
  SECONDS_420: "SECONDS_420",
  SECONDS_480: "SECONDS_480",
  SECONDS_540: "SECONDS_540",
  SECONDS_60: "SECONDS_60",
  SECONDS_600: "SECONDS_600",
} as const;
/**
 * @public
 */
export type StatusUpdateInterval = (typeof StatusUpdateInterval)[keyof typeof StatusUpdateInterval];

/**
 * @public
 * @enum
 */
export const JobsQueryFilterKey = {
  audioCodec: "audioCodec",
  fileInput: "fileInput",
  jobEngineVersionRequested: "jobEngineVersionRequested",
  jobEngineVersionUsed: "jobEngineVersionUsed",
  queue: "queue",
  status: "status",
  videoCodec: "videoCodec",
} as const;
/**
 * @public
 */
export type JobsQueryFilterKey = (typeof JobsQueryFilterKey)[keyof typeof JobsQueryFilterKey];

/**
 * @public
 * @enum
 */
export const Type = {
  CUSTOM: "CUSTOM",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const Format = {
  matroska: "matroska",
  mp4: "mp4",
  mxf: "mxf",
  quicktime: "quicktime",
  webm: "webm",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const Codec = {
  AAC: "AAC",
  AC3: "AC3",
  AV1: "AV1",
  AVC: "AVC",
  C608: "C608",
  C708: "C708",
  EAC3: "EAC3",
  FLAC: "FLAC",
  HEVC: "HEVC",
  JPEG2000: "JPEG2000",
  MJPEG: "MJPEG",
  MP3: "MP3",
  MP4V: "MP4V",
  MPEG1: "MPEG1",
  MPEG2: "MPEG2",
  OPUS: "OPUS",
  PCM: "PCM",
  PRORES: "PRORES",
  QTRLE: "QTRLE",
  THEORA: "THEORA",
  UNKNOWN: "UNKNOWN",
  VFW: "VFW",
  VORBIS: "VORBIS",
  VP8: "VP8",
  VP9: "VP9",
  WEBVTT: "WEBVTT",
} as const;
/**
 * @public
 */
export type Codec = (typeof Codec)[keyof typeof Codec];

/**
 * @public
 * @enum
 */
export const TrackType = {
  audio: "audio",
  data: "data",
  video: "video",
} as const;
/**
 * @public
 */
export type TrackType = (typeof TrackType)[keyof typeof TrackType];

/**
 * @public
 * @enum
 */
export const ColorPrimaries = {
  EBU_3213_E: "EBU_3213_E",
  GENERIC_FILM: "GENERIC_FILM",
  IPT: "IPT",
  ITU_2020: "ITU_2020",
  ITU_470BG: "ITU_470BG",
  ITU_470M: "ITU_470M",
  ITU_709: "ITU_709",
  LAST: "LAST",
  RESERVED: "RESERVED",
  SMPTE_170M: "SMPTE_170M",
  SMPTE_2067XYZ: "SMPTE_2067XYZ",
  SMPTE_240M: "SMPTE_240M",
  SMPTE_428_1: "SMPTE_428_1",
  SMPTE_431_2: "SMPTE_431_2",
  SMPTE_EG_432_1: "SMPTE_EG_432_1",
  UNSPECIFIED: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type ColorPrimaries = (typeof ColorPrimaries)[keyof typeof ColorPrimaries];

/**
 * @public
 * @enum
 */
export const MatrixCoefficients = {
  CD_CL: "CD_CL",
  CD_NCL: "CD_NCL",
  EBU3213: "EBU3213",
  FCC: "FCC",
  IPT: "IPT",
  ITU_2020_CL: "ITU_2020_CL",
  ITU_2020_NCL: "ITU_2020_NCL",
  ITU_2100ICtCp: "ITU_2100ICtCp",
  ITU_470BG: "ITU_470BG",
  ITU_709: "ITU_709",
  LAST: "LAST",
  RESERVED: "RESERVED",
  RGB: "RGB",
  SMPTE_170M: "SMPTE_170M",
  SMPTE_2085: "SMPTE_2085",
  SMPTE_240M: "SMPTE_240M",
  UNSPECIFIED: "UNSPECIFIED",
  YCgCo: "YCgCo",
} as const;
/**
 * @public
 */
export type MatrixCoefficients = (typeof MatrixCoefficients)[keyof typeof MatrixCoefficients];

/**
 * @public
 * @enum
 */
export const TransferCharacteristics = {
  ARIB_B67: "ARIB_B67",
  IEC_61966_2_1: "IEC_61966_2_1",
  IEC_61966_2_4: "IEC_61966_2_4",
  ITU_1361: "ITU_1361",
  ITU_2020_10bit: "ITU_2020_10bit",
  ITU_2020_12bit: "ITU_2020_12bit",
  ITU_470BG: "ITU_470BG",
  ITU_470M: "ITU_470M",
  ITU_709: "ITU_709",
  LAST: "LAST",
  LINEAR: "LINEAR",
  LOC10_2_5: "LOC10_2_5",
  LOG10_2: "LOG10_2",
  RESERVED: "RESERVED",
  SMPTE_170M: "SMPTE_170M",
  SMPTE_2084: "SMPTE_2084",
  SMPTE_240M: "SMPTE_240M",
  SMPTE_428_1: "SMPTE_428_1",
  UNSPECIFIED: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type TransferCharacteristics = (typeof TransferCharacteristics)[keyof typeof TransferCharacteristics];

/**
 * @public
 * @enum
 */
export const PricingPlan = {
  ON_DEMAND: "ON_DEMAND",
  RESERVED: "RESERVED",
} as const;
/**
 * @public
 */
export type PricingPlan = (typeof PricingPlan)[keyof typeof PricingPlan];

/**
 * @public
 * @enum
 */
export const Commitment = {
  ONE_YEAR: "ONE_YEAR",
} as const;
/**
 * @public
 */
export type Commitment = (typeof Commitment)[keyof typeof Commitment];

/**
 * @public
 * @enum
 */
export const RenewalType = {
  AUTO_RENEW: "AUTO_RENEW",
  EXPIRE: "EXPIRE",
} as const;
/**
 * @public
 */
export type RenewalType = (typeof RenewalType)[keyof typeof RenewalType];

/**
 * @public
 * @enum
 */
export const ReservationPlanStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
} as const;
/**
 * @public
 */
export type ReservationPlanStatus = (typeof ReservationPlanStatus)[keyof typeof ReservationPlanStatus];

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  ACTIVE: "ACTIVE",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * @public
 * @enum
 */
export const DescribeEndpointsMode = {
  DEFAULT: "DEFAULT",
  GET_ONLY: "GET_ONLY",
} as const;
/**
 * @public
 */
export type DescribeEndpointsMode = (typeof DescribeEndpointsMode)[keyof typeof DescribeEndpointsMode];

/**
 * @public
 * @enum
 */
export const JobsQueryStatus = {
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
  PROGRESSING: "PROGRESSING",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type JobsQueryStatus = (typeof JobsQueryStatus)[keyof typeof JobsQueryStatus];

/**
 * @public
 * @enum
 */
export const InputPolicy = {
  ALLOWED: "ALLOWED",
  DISALLOWED: "DISALLOWED",
} as const;
/**
 * @public
 */
export type InputPolicy = (typeof InputPolicy)[keyof typeof InputPolicy];

/**
 * @public
 * @enum
 */
export const JobTemplateListBy = {
  CREATION_DATE: "CREATION_DATE",
  NAME: "NAME",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type JobTemplateListBy = (typeof JobTemplateListBy)[keyof typeof JobTemplateListBy];

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const PresetListBy = {
  CREATION_DATE: "CREATION_DATE",
  NAME: "NAME",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type PresetListBy = (typeof PresetListBy)[keyof typeof PresetListBy];

/**
 * @public
 * @enum
 */
export const QueueListBy = {
  CREATION_DATE: "CREATION_DATE",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type QueueListBy = (typeof QueueListBy)[keyof typeof QueueListBy];
