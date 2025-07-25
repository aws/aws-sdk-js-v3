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
 * Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.
 * @public
 */
export interface AllowedRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Set to ENABLED to force a rendition to be included.
   * @public
   */
  Required?: RequiredFlag | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

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
 * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use Audio layout tagging, your output must be in a QuickTime (MOV) container and your audio codec must be AAC, WAV, or AIFF.
 * @public
 */
export interface AudioChannelTaggingSettings {
  /**
   * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. Enter channel layout tags in the same order as your output's audio channel order. For example, if your output audio track has a left and a right channel, enter Left (L) for the first channel and Right (R) for the second. If your output has multiple single-channel audio tracks, enter a single channel layout tag for each track.
   * @public
   */
  ChannelTag?: AudioChannelTag | undefined;

  /**
   * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. Enter channel layout tags in the same order as your output's audio channel order. For example, if your output audio track has a left and a right channel, enter Left (L) for the first channel and Right (R) for the second. If your output has multiple single-channel audio tracks, enter a single channel layout tag for each track.
   * @public
   */
  ChannelTags?: AudioChannelTag[] | undefined;
}

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
 * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
 * @public
 */
export interface AudioNormalizationSettings {
  /**
   * Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.
   * @public
   */
  Algorithm?: AudioNormalizationAlgorithm | undefined;

  /**
   * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
   * @public
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | undefined;

  /**
   * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected.
   * @public
   */
  CorrectionGateLevel?: number | undefined;

  /**
   * If set to LOG, log each output's audio track loudness to a CSV file.
   * @public
   */
  LoudnessLogging?: AudioNormalizationLoudnessLogging | undefined;

  /**
   * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
   * @public
   */
  PeakCalculation?: AudioNormalizationPeakCalculation | undefined;

  /**
   * When you use Audio normalization, optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm. If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.
   * @public
   */
  TargetLkfs?: number | undefined;

  /**
   * Specify the True-peak limiter threshold in decibels relative to full scale (dBFS). The peak inter-audio sample loudness in your output will be limited to the value that you specify, without affecting the overall target LKFS. Enter a value from 0 to -8. Leave blank to use the default value 0.
   * @public
   */
  TruePeakLimiterThreshold?: number | undefined;
}

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
 * Required when you set Codec to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality. In CBR mode, you use the setting Bitrate. Defaults and valid values depend on the rate control mode.
 * @public
 */
export interface AacSettings {
  /**
   * Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.
   * @public
   */
  AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix | undefined;

  /**
   * Specify the average bitrate in bits per second. The set of valid values for this setting is: 6000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000. The value you set is also constrained by the values that you choose for Profile, Bitrate control mode, and Sample rate. Default values depend on Bitrate control mode and Profile.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the AAC profile. For the widest player compatibility and where higher bitrates are acceptable: Keep the default profile, LC (AAC-LC) For improved audio performance at lower bitrates: Choose HEV1 or HEV2. HEV1 (AAC-HE v1) adds spectral band replication to improve speech audio at low bitrates. HEV2 (AAC-HE v2) adds parametric stereo, which optimizes for encoding stereo audio at very low bitrates.
   * @public
   */
  CodecProfile?: AacCodecProfile | undefined;

  /**
   * The Coding mode that you specify determines the number of audio channels and the audio channel layout metadata in your AAC output. Valid coding modes depend on the Rate control mode and Profile that you select. The following list shows the number of audio channels and channel layout for each coding mode. * 1.0 Audio Description (Receiver Mix): One channel, C. Includes audio description data from your stereo input. For more information see ETSI TS 101 154 Annex E. * 1.0 Mono: One channel, C. * 2.0 Stereo: Two channels, L, R. * 5.1 Surround: Six channels, C, L, R, Ls, Rs, LFE.
   * @public
   */
  CodingMode?: AacCodingMode | undefined;

  /**
   * Choose the loudness measurement mode for your audio content. For music or advertisements: We recommend that you keep the default value, Program. For speech or other content: We recommend that you choose Anchor. When you do, MediaConvert optimizes the loudness of your output for clarify by applying speech gates.
   * @public
   */
  LoudnessMeasurementMode?: AacLoudnessMeasurementMode | undefined;

  /**
   * Specify the RAP (Random Access Point) interval for your xHE-AAC audio output. A RAP allows a decoder to decode audio data mid-stream, without the need to reference previous audio frames, and perform adaptive audio bitrate switching. To specify the RAP interval: Enter an integer from 2000 to 30000, in milliseconds. Smaller values allow for better seeking and more frequent stream switching, while large values improve compression efficiency. To have MediaConvert automatically determine the RAP interval: Leave blank.
   * @public
   */
  RapInterval?: number | undefined;

  /**
   * Specify the AAC rate control mode. For a constant bitrate: Choose CBR. Your AAC output bitrate will be equal to the value that you choose for Bitrate. For a variable bitrate: Choose VBR. Your AAC output bitrate will vary according to your audio content and the value that you choose for Bitrate quality.
   * @public
   */
  RateControlMode?: AacRateControlMode | undefined;

  /**
   * Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.
   * @public
   */
  RawFormat?: AacRawFormat | undefined;

  /**
   * Specify the AAC sample rate in samples per second (Hz). Valid sample rates depend on the AAC profile and Coding mode that you select. For a list of supported sample rates, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/aac-support.html
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   * @public
   */
  Specification?: AacSpecification | undefined;

  /**
   * Specify the xHE-AAC loudness target. Enter an integer from 6 to 16, representing "loudness units". For more information, see the following specification: Supplementary information for R 128 EBU Tech 3342-2023.
   * @public
   */
  TargetLoudnessRange?: number | undefined;

  /**
   * Specify the quality of your variable bitrate (VBR) AAC audio. For a list of approximate VBR bitrates, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/aac-support.html#aac_vbr
   * @public
   */
  VbrQuality?: AacVbrQuality | undefined;
}

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
 * Required when you set Codec to the value AC3.
 * @public
 */
export interface Ac3Settings {
  /**
   * Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 64000. Maximum: 128000. Valid bitrates for coding mode 1/1: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 3/2 with FLE: Default: 384000. Minimum: 384000. Maximum: 640000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   * @public
   */
  BitstreamMode?: Ac3BitstreamMode | undefined;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Ac3CodingMode | undefined;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionLine?: Ac3DynamicRangeCompressionLine | undefined;

  /**
   * When you want to add Dolby dynamic range compression (DRC) signaling to your output stream, we recommend that you use the mode-specific settings instead of Dynamic range compression profile. The mode-specific settings are Dynamic range compression profile, line mode and Dynamic range compression profile, RF mode. Note that when you specify values for all three settings, MediaConvert ignores the value of this setting in favor of the mode-specific settings. If you do use this setting instead of the mode-specific settings, choose None to leave out DRC signaling. Keep the default Film standard to set the profile to Dolby's film standard profile for all operating modes.
   * @public
   */
  DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionRf?: Ac3DynamicRangeCompressionRf | undefined;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   * @public
   */
  LfeFilter?: Ac3LfeFilter | undefined;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Ac3MetadataControl | undefined;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec to the value AIFF.
 * @public
 */
export interface AiffSettings {
  /**
   * Specify Bit depth, in bits per sample, to choose the encoding quality for this audio track.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

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
 * Required when you set Codec to the value EAC3_ATMOS.
 * @public
 */
export interface Eac3AtmosSettings {
  /**
   * Specify the average bitrate for this output in bits per second. Valid values: 384k, 448k, 576k, 640k, 768k, 1024k Default value: 448k Note that MediaConvert supports 384k only with channel-based immersive (CBI) 7.1.4 and 5.1.4 inputs. For CBI 9.1.6 and other input types, MediaConvert automatically increases your output bitrate to 448k.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   * @public
   */
  BitstreamMode?: Eac3AtmosBitstreamMode | undefined;

  /**
   * The coding mode for Dolby Digital Plus JOC (Atmos).
   * @public
   */
  CodingMode?: Eac3AtmosCodingMode | undefined;

  /**
   * Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.
   * @public
   */
  DialogueIntelligence?: Eac3AtmosDialogueIntelligence | undefined;

  /**
   * Specify whether MediaConvert should use any downmix metadata from your input file. Keep the default value, Custom to provide downmix values in your job settings. Choose Follow source to use the metadata from your input. Related settings--Use these settings to specify your downmix values: Left only/Right only surround, Left total/Right total surround, Left total/Right total center, Left only/Right only center, and Stereo downmix. When you keep Custom for Downmix control and you don't specify values for the related settings, MediaConvert uses default values for those settings.
   * @public
   */
  DownmixControl?: Eac3AtmosDownmixControl | undefined;

  /**
   * Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the line operating mode. Default value: Film light Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom for the setting Dynamic range control. Otherwise, MediaConvert ignores Dynamic range compression line. For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine | undefined;

  /**
   * Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the RF operating mode. Default value: Film light Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom for the setting Dynamic range control. Otherwise, MediaConvert ignores Dynamic range compression RF. For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionRf | undefined;

  /**
   * Specify whether MediaConvert should use any dynamic range control metadata from your input file. Keep the default value, Custom, to provide dynamic range control values in your job settings. Choose Follow source to use the metadata from your input. Related settings--Use these settings to specify your dynamic range control values: Dynamic range compression line and Dynamic range compression RF. When you keep the value Custom for Dynamic range control and you don't specify values for the related settings, MediaConvert uses default values for those settings.
   * @public
   */
  DynamicRangeControl?: Eac3AtmosDynamicRangeControl | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. Default value: -3 dB. Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Left only/Right only center.
   * @public
   */
  LoRoCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only. MediaConvert uses this value for downmixing. Default value: -3 dB. Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Left only/Right only surround.
   * @public
   */
  LoRoSurroundMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. Default value: -3 dB Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Left total/Right total center.
   * @public
   */
  LtRtCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. Default value: -3 dB Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, the service ignores Left total/Right total surround.
   * @public
   */
  LtRtSurroundMixLevel?: number | undefined;

  /**
   * Choose how the service meters the loudness of your audio.
   * @public
   */
  MeteringMode?: Eac3AtmosMeteringMode | undefined;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Specify the percentage of audio content, from 0% to 100%, that must be speech in order for the encoder to use the measured speech loudness as the overall program loudness. Default value: 15%
   * @public
   */
  SpeechThreshold?: number | undefined;

  /**
   * Choose how the service does stereo downmixing. Default value: Not indicated Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Stereo downmix.
   * @public
   */
  StereoDownmix?: Eac3AtmosStereoDownmix | undefined;

  /**
   * Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.
   * @public
   */
  SurroundExMode?: Eac3AtmosSurroundExMode | undefined;
}

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
 * Required when you set Codec to the value EAC3.
 * @public
 */
export interface Eac3Settings {
  /**
   * If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  AttenuationControl?: Eac3AttenuationControl | undefined;

  /**
   * Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 32000. Maximum: 3024000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 96000. Maximum: 3024000. Valid bitrates for coding mode 3/2: Default: 384000. Minimum: 192000. Maximum: 3024000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   * @public
   */
  BitstreamMode?: Eac3BitstreamMode | undefined;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Eac3CodingMode | undefined;

  /**
   * Activates a DC highpass filter for all input channels.
   * @public
   */
  DcFilter?: Eac3DcFilter | undefined;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf | undefined;

  /**
   * When encoding 3/2 audio, controls whether the LFE channel is enabled
   * @public
   */
  LfeControl?: Eac3LfeControl | undefined;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   * @public
   */
  LfeFilter?: Eac3LfeFilter | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only center mix. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left only/Right only center.
   * @public
   */
  LoRoCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left only/Right only surround.
   * @public
   */
  LoRoSurroundMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total center mix. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left total/Right total center.
   * @public
   */
  LtRtCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total surround mix. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left total/Right total surround.
   * @public
   */
  LtRtSurroundMixLevel?: number | undefined;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Eac3MetadataControl | undefined;

  /**
   * When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   * @public
   */
  PassthroughControl?: Eac3PassthroughControl | undefined;

  /**
   * Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  PhaseControl?: Eac3PhaseControl | undefined;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Stereo downmix.
   * @public
   */
  StereoDownmix?: Eac3StereoDownmix | undefined;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   * @public
   */
  SurroundExMode?: Eac3SurroundExMode | undefined;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   * @public
   */
  SurroundMode?: Eac3SurroundMode | undefined;
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value FLAC.
 * @public
 */
export interface FlacSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are between 1 and 8.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec to the value MP2.
 * @public
 */
export interface Mp2Settings {
  /**
   * Specify the average bitrate in bits per second.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Set Channels to specify the number of channels in this output audio track. Choosing Mono in will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

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
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
 * @public
 */
export interface Mp3Settings {
  /**
   * Specify the average bitrate in bits per second.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).
   * @public
   */
  RateControlMode?: Mp3RateControlMode | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Required when you set Bitrate control mode to VBR. Specify the audio quality of this MP3 output from 0 (highest quality) to 9 (lowest quality).
   * @public
   */
  VbrQuality?: number | undefined;
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
 * @public
 */
export interface OpusSettings {
  /**
   * Optional. Specify the average bitrate in bits per second. Valid values are multiples of 8000, from 32000 through 192000. The default value is 96000, which we recommend for quality and bandwidth.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Optional. Sample rate in Hz. Valid values are 16000, 24000, and 48000. The default value is 48000.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
 * @public
 */
export interface VorbisSettings {
  /**
   * Optional. Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2. The default value is 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Optional. Specify the audio sample rate in Hz. Valid values are 22050, 32000, 44100, and 48000. The default value is 48000.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Optional. Specify the variable audio quality of this Vorbis output from -1 (lowest quality, ~45 kbit/s) to 10 (highest quality, ~500 kbit/s). The default value is 4 (~128 kbit/s). Values 5 and 6 are approximately 160 and 192 kbit/s, respectively.
   * @public
   */
  VbrQuality?: number | undefined;
}

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
 * Required when you set Codec to the value WAV.
 * @public
 */
export interface WavSettings {
  /**
   * Specify Bit depth, in bits per sample, to choose the encoding quality for this audio track.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Specify the file format for your wave audio output. To use a RIFF wave format: Keep the default value, RIFF. If your output audio is likely to exceed 4GB in file size, or if you otherwise need the extended support of the RF64 format: Choose RF64. If your player only supports the extensible wave format: Choose Extensible.
   * @public
   */
  Format?: WavFormat | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.
 * @public
 */
export interface AudioCodecSettings {
  /**
   * Required when you set Codec to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality. In CBR mode, you use the setting Bitrate. Defaults and valid values depend on the rate control mode.
   * @public
   */
  AacSettings?: AacSettings | undefined;

  /**
   * Required when you set Codec to the value AC3.
   * @public
   */
  Ac3Settings?: Ac3Settings | undefined;

  /**
   * Required when you set Codec to the value AIFF.
   * @public
   */
  AiffSettings?: AiffSettings | undefined;

  /**
   * Choose the audio codec for this output. Note that the option Dolby Digital passthrough applies only to Dolby Digital and Dolby Digital Plus audio inputs. Make sure that you choose a codec that's supported with your output container: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#reference-codecs-containers-output-audio For audio-only outputs, make sure that both your input audio codec and your output audio codec are supported for audio-only workflows. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers-input.html#reference-codecs-containers-input-audio-only and https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#audio-only-output
   * @public
   */
  Codec?: AudioCodec | undefined;

  /**
   * Required when you set Codec to the value EAC3_ATMOS.
   * @public
   */
  Eac3AtmosSettings?: Eac3AtmosSettings | undefined;

  /**
   * Required when you set Codec to the value EAC3.
   * @public
   */
  Eac3Settings?: Eac3Settings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value FLAC.
   * @public
   */
  FlacSettings?: FlacSettings | undefined;

  /**
   * Required when you set Codec to the value MP2.
   * @public
   */
  Mp2Settings?: Mp2Settings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
   * @public
   */
  Mp3Settings?: Mp3Settings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
   * @public
   */
  OpusSettings?: OpusSettings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
   * @public
   */
  VorbisSettings?: VorbisSettings | undefined;

  /**
   * Required when you set Codec to the value WAV.
   * @public
   */
  WavSettings?: WavSettings | undefined;
}

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
 * OutputChannel mapping settings.
 * @public
 */
export interface OutputChannelMapping {
  /**
   * Use this setting to specify your remix values when they are integers, such as -10, 0, or 4.
   * @public
   */
  InputChannels?: number[] | undefined;

  /**
   * Use this setting to specify your remix values when they have a decimal component, such as -10.312, 0.08, or 4.9. MediaConvert rounds your remixing values to the nearest thousandth.
   * @public
   */
  InputChannelsFineTune?: number[] | undefined;
}

/**
 * Channel mapping contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.
 * @public
 */
export interface ChannelMapping {
  /**
   * In your JSON job specification, include one child of OutputChannels for each audio channel that you want in your output. Each child should contain one instance of InputChannels or InputChannelsFineTune.
   * @public
   */
  OutputChannels?: OutputChannelMapping[] | undefined;
}

/**
 * Use Manual audio remixing to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
 * @public
 */
export interface RemixSettings {
  /**
   * Optionally specify the channel in your input that contains your audio description audio signal. MediaConvert mixes your audio signal across all output channels, while reducing their volume according to your data stream. When you specify an audio description audio channel, you must also specify an audio description data channel. For more information about audio description signals, see the BBC WHP 198 and 051 white papers.
   * @public
   */
  AudioDescriptionAudioChannel?: number | undefined;

  /**
   * Optionally specify the channel in your input that contains your audio description data stream. MediaConvert mixes your audio signal across all output channels, while reducing their volume according to your data stream. When you specify an audio description data channel, you must also specify an audio description audio channel. For more information about audio description signals, see the BBC WHP 198 and 051 white papers.
   * @public
   */
  AudioDescriptionDataChannel?: number | undefined;

  /**
   * Channel mapping contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.
   * @public
   */
  ChannelMapping?: ChannelMapping | undefined;

  /**
   * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different. If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.
   * @public
   */
  ChannelsIn?: number | undefined;

  /**
   * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8... 64. (1 and even numbers to 64.) If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.
   * @public
   */
  ChannelsOut?: number | undefined;
}

/**
 * Settings related to one audio tab on the MediaConvert console. In your job JSON, an instance of AudioDescription is equivalent to one audio tab in the console. Usually, one audio tab corresponds to one output audio track. Depending on how you set up your input audio selectors and whether you use audio selector groups, one audio tab can correspond to a group of output audio tracks.
 * @public
 */
export interface AudioDescription {
  /**
   * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use Audio layout tagging, your output must be in a QuickTime (MOV) container and your audio codec must be AAC, WAV, or AIFF.
   * @public
   */
  AudioChannelTaggingSettings?: AudioChannelTaggingSettings | undefined;

  /**
   * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
   * @public
   */
  AudioNormalizationSettings?: AudioNormalizationSettings | undefined;

  /**
   * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
   * @public
   */
  AudioSourceName?: string | undefined;

  /**
   * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
   * @public
   */
  AudioType?: number | undefined;

  /**
   * When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.
   * @public
   */
  AudioTypeControl?: AudioTypeControl | undefined;

  /**
   * Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.
   * @public
   */
  CodecSettings?: AudioCodecSettings | undefined;

  /**
   * Specify the language for this audio output track. The service puts this language code into your output audio track when you set Language code control to Use configured. The service also uses your specified custom language code when you set Language code control to Follow input, but your input file doesn't specify a language code. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify which source for language code takes precedence for this audio track. When you choose Follow input, the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code. When you choose Use configured, the service uses the language code that you specify.
   * @public
   */
  LanguageCodeControl?: AudioLanguageCodeControl | undefined;

  /**
   * Advanced audio remixing settings.
   * @public
   */
  RemixSettings?: RemixSettings | undefined;

  /**
   * Specify a label for this output audio stream. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   * @public
   */
  StreamName?: string | undefined;
}

/**
 * Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting.
 * @public
 */
export interface ForceIncludeRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.
 * @public
 */
export interface MinBottomRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.
 * @public
 */
export interface MinTopRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

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
 * Specify one or more Automated ABR rule types. Note: Force include and Allowed renditions are mutually exclusive.
 * @public
 */
export interface AutomatedAbrRule {
  /**
   * When customer adds the allowed renditions rule for auto ABR ladder, they are required to add at leat one rendition to allowedRenditions list
   * @public
   */
  AllowedRenditions?: AllowedRenditionSize[] | undefined;

  /**
   * When customer adds the force include renditions rule for auto ABR ladder, they are required to add at leat one rendition to forceIncludeRenditions list
   * @public
   */
  ForceIncludeRenditions?: ForceIncludeRenditionSize[] | undefined;

  /**
   * Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.
   * @public
   */
  MinBottomRenditionSize?: MinBottomRenditionSize | undefined;

  /**
   * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.
   * @public
   */
  MinTopRenditionSize?: MinTopRenditionSize | undefined;

  /**
   * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * (Required) The number of resolutions that you specify must be equal to, or greater than, the Max renditions setting. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.
   * @public
   */
  Type?: RuleType | undefined;
}

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
 * Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html.
 * @public
 */
export interface BurninDestinationSettings {
  /**
   * Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates.
   * @public
   */
  Alignment?: BurninSubtitleAlignment | undefined;

  /**
   * Ignore this setting unless Style passthrough is set to Enabled and Font color set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color for additional font color controls. When you choose White text only, or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.
   * @public
   */
  ApplyFontColor?: BurninSubtitleApplyFontColor | undefined;

  /**
   * Specify the color of the rectangle behind the captions. Leave background color blank and set Style passthrough to enabled to use the background color data from your input captions, if present.
   * @public
   */
  BackgroundColor?: BurninSubtitleBackgroundColor | undefined;

  /**
   * Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font to best match, or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.
   * @public
   */
  FallbackFont?: BurninSubtitleFallbackFont | undefined;

  /**
   * Specify the color of the burned-in captions text. Leave Font color blank and set Style passthrough to enabled to use the font color data from your input captions, if present.
   * @public
   */
  FontColor?: BurninSubtitleFontColor | undefined;

  /**
   * Specify a bold TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, an italic, and a bold italic font file.
   * @public
   */
  FontFileBold?: string | undefined;

  /**
   * Specify a bold italic TrueType font file to use when rendering your output captions.
   * Enter an S3, HTTP, or HTTPS URL.
   * When you do, you must also separately specify a regular, a bold, and an italic font file.
   * @public
   */
  FontFileBoldItalic?: string | undefined;

  /**
   * Specify an italic TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, a bold, and a bold italic font file.
   * @public
   */
  FontFileItalic?: string | undefined;

  /**
   * Specify a regular TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a bold, an italic, and a bold italic font file.
   * @public
   */
  FontFileRegular?: string | undefined;

  /**
   * Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Specify the Font resolution in DPI (dots per inch).
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * Set Font script to Automatically determined, or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese.
   * @public
   */
  FontScript?: FontScript | undefined;

  /**
   * Specify the Font size in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size.
   * @public
   */
  FontSize?: number | undefined;

  /**
   * Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.
   * @public
   */
  HexFontColor?: string | undefined;

  /**
   * Specify font outline color. Leave Outline color blank and set Style passthrough to enabled to use the font outline color data from your input captions, if present.
   * @public
   */
  OutlineColor?: BurninSubtitleOutlineColor | undefined;

  /**
   * Specify the Outline size of the caption text, in pixels. Leave Outline size blank and set Style passthrough to enabled to use the outline size data from your input captions, if present.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Optionally remove any tts:rubyReserve attributes present in your input, that do   not have a tts:ruby attribute in the same element, from your output. Use if your vertical Japanese output captions have alignment issues. To remove ruby reserve attributes when present: Choose Enabled. To not remove any ruby reserve attributes: Keep the default value, Disabled.
   * @public
   */
  RemoveRubyReserveAttributes?: RemoveRubyReserveAttributes | undefined;

  /**
   * Specify the color of the shadow cast by the captions. Leave Shadow color blank and set Style passthrough to enabled to use the shadow color data from your input captions, if present.
   * @public
   */
  ShadowColor?: BurninSubtitleShadowColor | undefined;

  /**
   * Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to Enabled, leave Shadow opacity blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset blank and set Style passthrough to enabled to use the shadow y-offset data from your input captions, if present.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * To use the available style, color, and position information from your input captions: Set Style passthrough to Enabled. Note that MediaConvert uses default settings for any missing style or position information in your input captions To ignore the style and position information from your input captions and use default settings: Leave blank or keep the default value, Disabled. Default settings include white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings. You can also override any fonts by manually specifying custom font files.
   * @public
   */
  StylePassthrough?: BurnInSubtitleStylePassthrough | undefined;

  /**
   * Specify whether the text spacing in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read for closed captions.
   * @public
   */
  TeletextSpacing?: BurninSubtitleTeletextSpacing | undefined;

  /**
   * Specify the horizontal position of the captions, relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specify the vertical position of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output.
   * @public
   */
  YPosition?: number | undefined;
}

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
 * Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html.
 * @public
 */
export interface DvbSubDestinationSettings {
  /**
   * Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  Alignment?: DvbSubtitleAlignment | undefined;

  /**
   * Ignore this setting unless Style Passthrough is set to Enabled and Font color set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color for additional font color controls. When you choose White text only, or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.
   * @public
   */
  ApplyFontColor?: DvbSubtitleApplyFontColor | undefined;

  /**
   * Specify the color of the rectangle behind the captions. Leave background color blank and set Style passthrough to enabled to use the background color data from your input captions, if present.
   * @public
   */
  BackgroundColor?: DvbSubtitleBackgroundColor | undefined;

  /**
   * Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * Specify how MediaConvert handles the display definition segment (DDS). To exclude the DDS from this set of captions: Keep the default, None. To include the DDS: Choose Specified. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate. To include the DDS, but not include display window data: Choose No display window. When you do, you can write position metadata to the page composition segment (PCS) with DDS x-coordinate and DDS y-coordinate. For video resolutions with a height of 576 pixels or less, MediaConvert doesn't include the DDS, regardless of the value you choose for DDS handling. All burn-in and DVB-Sub font settings must match. To include the DDS, with optimized subtitle placement and reduced data overhead: We recommend that you choose Specified (optimal). This option provides the same visual positioning as Specified while using less bandwidth. This also supports resolutions higher than 1080p while maintaining full DVB-Sub compatibility. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate.
   * @public
   */
  DdsHandling?: DvbddsHandling | undefined;

  /**
   * Use this setting, along with DDS y-coordinate, to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the left side of the frame and the left side of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling to a value other than None. MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  DdsXCoordinate?: number | undefined;

  /**
   * Use this setting, along with DDS x-coordinate, to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the top of the frame and the top of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling to a value other than None. MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment (PCS). All burn-in and DVB-Sub font settings must match.
   * @public
   */
  DdsYCoordinate?: number | undefined;

  /**
   * Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font to best match, or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.
   * @public
   */
  FallbackFont?: DvbSubSubtitleFallbackFont | undefined;

  /**
   * Specify the color of the captions text. Leave Font color blank and set Style passthrough to enabled to use the font color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontColor?: DvbSubtitleFontColor | undefined;

  /**
   * Specify a bold TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, an italic, and a bold italic font file.
   * @public
   */
  FontFileBold?: string | undefined;

  /**
   * Specify a bold italic TrueType font file to use when rendering your output captions.
   * Enter an S3, HTTP, or HTTPS URL.
   * When you do, you must also separately specify a regular, a bold, and an italic font file.
   * @public
   */
  FontFileBoldItalic?: string | undefined;

  /**
   * Specify an italic TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, a bold, and a bold italic font file.
   * @public
   */
  FontFileItalic?: string | undefined;

  /**
   * Specify a regular TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a bold, an italic, and a bold italic font file.
   * @public
   */
  FontFileRegular?: string | undefined;

  /**
   * Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Specify the Font resolution in DPI (dots per inch).
   * Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * Set Font script to Automatically determined, or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontScript?: FontScript | undefined;

  /**
   * Specify the Font size in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontSize?: number | undefined;

  /**
   * Specify the height, in pixels, of this set of DVB-Sub captions. The default value is 576 pixels. Related setting: When you use this setting, you must set DDS handling to a value other than None. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Height?: number | undefined;

  /**
   * Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.
   * @public
   */
  HexFontColor?: string | undefined;

  /**
   * Specify font outline color. Leave Outline color blank and set Style passthrough to enabled to use the font outline color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  OutlineColor?: DvbSubtitleOutlineColor | undefined;

  /**
   * Specify the Outline size of the caption text, in pixels. Leave Outline size blank and set Style passthrough to enabled to use the outline size data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Specify the color of the shadow cast by the captions. Leave Shadow color blank and set Style passthrough to enabled to use the shadow color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowColor?: DvbSubtitleShadowColor | undefined;

  /**
   * Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to Enabled, leave Shadow opacity blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset blank and set Style passthrough to enabled to use the shadow y-offset data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * To use the available style, color, and position information from your input captions: Set Style passthrough to Enabled. Note that MediaConvert uses default settings for any missing style or position information in your input captions To ignore the style and position information from your input captions and use default settings: Leave blank or keep the default value, Disabled. Default settings include white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings. You can also override any fonts by manually specifying custom font files.
   * @public
   */
  StylePassthrough?: DvbSubtitleStylePassthrough | undefined;

  /**
   * Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.
   * @public
   */
  SubtitlingType?: DvbSubtitlingType | undefined;

  /**
   * Specify whether the Text spacing in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read for closed captions. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  TeletextSpacing?: DvbSubtitleTeletextSpacing | undefined;

  /**
   * Specify the width, in pixels, of this set of DVB-Sub captions. The default value is 720 pixels. Related setting: When you use this setting, you must set DDS handling to a value other than None. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Width?: number | undefined;

  /**
   * Specify the horizontal position of the captions, relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specify the vertical position of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  YPosition?: number | undefined;
}

/**
 * Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html.
 * @public
 */
export interface EmbeddedDestinationSettings {
  /**
   * Ignore this setting unless your input captions are SCC format and your output captions are embedded in the video stream. Specify a CC number for each captions channel in this output. If you have two channels, choose CC numbers that aren't in the same field. For example, choose 1 and 3. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   * @public
   */
  Destination608ChannelNumber?: number | undefined;

  /**
   * Ignore this setting unless your input captions are SCC format and you want both 608 and 708 captions embedded in your output stream. Optionally, specify the 708 service number for each output captions channel. Choose a different number for each channel. To use this setting, also set Force 608 to 708 upconvert to Upconvert in your input captions selector settings. If you choose to upconvert but don't specify a 708 service number, MediaConvert uses the number that you specify for CC channel number for the 708 service number. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   * @public
   */
  Destination708ServiceNumber?: number | undefined;
}

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
 * Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
 * @public
 */
export interface ImscDestinationSettings {
  /**
   * If the IMSC captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>.
   * @public
   */
  Accessibility?: ImscAccessibilitySubs | undefined;

  /**
   * Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.
   * @public
   */
  StylePassthrough?: ImscStylePassthrough | undefined;
}

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
 * Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html.
 * @public
 */
export interface SccDestinationSettings {
  /**
   * Set Framerate to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe.
   * @public
   */
  Framerate?: SccDestinationFramerate | undefined;
}

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
 * Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video.
 * @public
 */
export interface SrtDestinationSettings {
  /**
   * Set Style passthrough to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use simplified output captions.
   * @public
   */
  StylePassthrough?: SrtStylePassthrough | undefined;
}

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
 * Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html.
 * @public
 */
export interface TeletextDestinationSettings {
  /**
   * Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.
   * @public
   */
  PageNumber?: string | undefined;

  /**
   * Specify the page types for this Teletext page. If you don't specify a value here, the service sets the page type to the default value Subtitle. If you pass through the entire set of Teletext data, don't use this field. When you pass through a set of Teletext pages, your output has the same page types as your input.
   * @public
   */
  PageTypes?: TeletextPageType[] | undefined;
}

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
 * Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
 * @public
 */
export interface TtmlDestinationSettings {
  /**
   * Pass through style and position information from a TTML-like input source (TTML, IMSC, SMPTE-TT) to the TTML output.
   * @public
   */
  StylePassthrough?: TtmlStylePassthrough | undefined;
}

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
 * Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
 * @public
 */
export interface WebvttDestinationSettings {
  /**
   * If the WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>.
   * @public
   */
  Accessibility?: WebvttAccessibilitySubs | undefined;

  /**
   * Specify how MediaConvert writes style information in your output WebVTT captions. To use the available style, color, and position information from your input captions: Choose Enabled. MediaConvert uses default settings when style and position information is missing from your input captions. To recreate the input captions exactly: Choose Strict. MediaConvert automatically applies timing adjustments, including adjustments for frame rate conversion, ad avails, and input clipping. Your input captions format must be WebVTT. To ignore the style and position information from your input captions and use simplified output captions: Keep the default value, Disabled. Or leave blank. To use the available style, color, and position information from your input captions, while merging cues with identical time ranges: Choose merge. This setting can help prevent positioning overlaps for certain players that expect a single single cue for any given time range.
   * @public
   */
  StylePassthrough?: WebvttStylePassthrough | undefined;
}

/**
 * Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
 * @public
 */
export interface CaptionDestinationSettings {
  /**
   * Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html.
   * @public
   */
  BurninDestinationSettings?: BurninDestinationSettings | undefined;

  /**
   * Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Note that your choice of video output container constrains your choice of output captions format. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/captions-support-tables.html. If you are using SCTE-20 and you want to create an output that complies with the SCTE-43 spec, choose SCTE-20 plus embedded. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20.
   * @public
   */
  DestinationType?: CaptionDestinationType | undefined;

  /**
   * Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html.
   * @public
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings | undefined;

  /**
   * Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html.
   * @public
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings | undefined;

  /**
   * Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
   * @public
   */
  ImscDestinationSettings?: ImscDestinationSettings | undefined;

  /**
   * Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html.
   * @public
   */
  SccDestinationSettings?: SccDestinationSettings | undefined;

  /**
   * Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video.
   * @public
   */
  SrtDestinationSettings?: SrtDestinationSettings | undefined;

  /**
   * Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html.
   * @public
   */
  TeletextDestinationSettings?: TeletextDestinationSettings | undefined;

  /**
   * Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
   * @public
   */
  TtmlDestinationSettings?: TtmlDestinationSettings | undefined;

  /**
   * Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
   * @public
   */
  WebvttDestinationSettings?: WebvttDestinationSettings | undefined;
}

/**
 * This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.
 * @public
 */
export interface CaptionDescription {
  /**
   * Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector <N>", which denotes that the Nth Caption Selector will be used from each input.
   * @public
   */
  CaptionSelectorName?: string | undefined;

  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
   * @public
   */
  DestinationSettings?: CaptionDestinationSettings | undefined;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   * @public
   */
  LanguageDescription?: string | undefined;
}

/**
 * Caption Description for preset
 * @public
 */
export interface CaptionDescriptionPreset {
  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
   * @public
   */
  DestinationSettings?: CaptionDestinationSettings | undefined;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   * @public
   */
  LanguageDescription?: string | undefined;
}

/**
 * Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group.
 * @public
 */
export interface CmafAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   * @public
   */
  ManifestNameModifier?: string | undefined;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   * @public
   */
  SelectedOutputs?: string[] | undefined;
}

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
 * Custom 3D lut settings
 * @public
 */
export interface ColorConversion3DLUTSetting {
  /**
   * Specify the input file S3, HTTP, or HTTPS URL for your 3D LUT .cube file. Note that MediaConvert accepts 3D LUT files up to 8MB in size.
   * @public
   */
  FileInput?: string | undefined;

  /**
   * Specify which inputs use this 3D LUT, according to their color space.
   * @public
   */
  InputColorSpace?: ColorSpace | undefined;

  /**
   * Specify which inputs use this 3D LUT, according to their luminance. To apply this 3D LUT to HDR10 or P3D65 (HDR) inputs with a specific mastering luminance: Enter an integer from 0 to 2147483647, corresponding to the input's Maximum luminance value. To apply this 3D LUT to any input regardless of its luminance: Leave blank, or enter 0.
   * @public
   */
  InputMasteringLuminance?: number | undefined;

  /**
   * Specify which outputs use this 3D LUT, according to their color space.
   * @public
   */
  OutputColorSpace?: ColorSpace | undefined;

  /**
   * Specify which outputs use this 3D LUT, according to their luminance. To apply this 3D LUT to HDR10 or P3D65 (HDR) outputs with a specific luminance: Enter an integer from 0 to 2147483647, corresponding to the output's luminance. To apply this 3D LUT to any output regardless of its luminance: Leave blank, or enter 0.
   * @public
   */
  OutputMasteringLuminance?: number | undefined;
}

/**
 * Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 * @public
 */
export interface DashAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your DASH group is film-name.mpd. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.mpd.
   * @public
   */
  ManifestNameModifier?: string | undefined;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   * @public
   */
  SelectedOutputs?: string[] | undefined;
}

/**
 * Describes an account-specific API endpoint.
 * @public
 */
export interface Endpoint {
  /**
   * URL of endpoint
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FrameMetricType = {
  MS_SSIM: "MS_SSIM",
  PSNR: "PSNR",
  PSNR_HVS: "PSNR_HVS",
  QVBR: "QVBR",
  SSIM: "SSIM",
  VMAF: "VMAF",
} as const;

/**
 * @public
 */
export type FrameMetricType = (typeof FrameMetricType)[keyof typeof FrameMetricType];

/**
 * Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 * @public
 */
export interface HlsAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   * @public
   */
  ManifestNameModifier?: string | undefined;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   * @public
   */
  SelectedOutputs?: string[] | undefined;
}

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
 * Caption Language Mapping
 * @public
 */
export interface HlsCaptionLanguageMapping {
  /**
   * Caption channel.
   * @public
   */
  CaptionChannel?: number | undefined;

  /**
   * Specify the language for this captions channel, using the ISO 639-2 or ISO 639-3 three-letter language code
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Caption language description.
   * @public
   */
  LanguageDescription?: string | undefined;
}

/**
 * Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.
 * @public
 */
export interface HopDestination {
  /**
   * Optional. When you set up a job to use queue hopping, you can specify a different relative priority for the job in the destination queue. If you don't specify, the relative priority will remain the same as in the previous queue.
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional unless the job is submitted on the default queue. When you set up a job to use queue hopping, you can specify a destination queue. This queue cannot be the original queue to which the job is submitted. If the original queue isn't the default queue and you don't specify the destination queue, the job will move to the default queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Required for setting up a job to use queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. Valid range is 1 to 4320 minutes, inclusive.
   * @public
   */
  WaitMinutes?: number | undefined;
}

/**
 * To insert ID3 tags in your output, specify two values. Use ID3 tag to specify the base 64 encoded string and use Timecode to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion.
 * @public
 */
export interface Id3Insertion {
  /**
   * Use ID3 tag to provide a fully formed ID3 tag in base64-encode format.
   * @public
   */
  Id3?: string | undefined;

  /**
   * Provide a Timecode in HH:MM:SS:FF or HH:MM:SS;FF format.
   * @public
   */
  Timecode?: string | undefined;
}

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
 * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
 * @public
 */
export interface AdvancedInputFilterSettings {
  /**
   * Add texture and detail to areas of your input video content that were lost after applying the Advanced input filter. To adaptively add texture and reduce softness: Choose Enabled. To not add any texture: Keep the default value, Disabled. We recommend that you choose Disabled for input video content that doesn't have texture, including screen recordings, computer graphics, or cartoons.
   * @public
   */
  AddTexture?: AdvancedInputFilterAddTexture | undefined;

  /**
   * Optionally specify the amount of sharpening to apply when you use the Advanced input filter. Sharpening adds contrast to the edges of your video content and can reduce softness. To apply no sharpening: Keep the default value, Off. To apply a minimal amount of sharpening choose Low, or for the maximum choose High.
   * @public
   */
  Sharpening?: AdvancedInputFilterSharpen | undefined;
}

/**
 * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
 * @public
 */
export interface AudioSelectorGroup {
  /**
   * Name of an Audio Selector within the same input to include in the group. Audio selector names are standardized, based on their order within the input (e.g., "Audio Selector 1"). The audio selector name parameter can be repeated to add any number of audio selectors to the group.
   * @public
   */
  AudioSelectorNames?: string[] | undefined;
}

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
 * Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.
 * @public
 */
export interface HlsRenditionGroupSettings {
  /**
   * Optional. Specify alternative group ID
   * @public
   */
  RenditionGroupId?: string | undefined;

  /**
   * Optional. Specify ISO 639-2 or ISO 639-3 code in the language property
   * @public
   */
  RenditionLanguageCode?: LanguageCode | undefined;

  /**
   * Optional. Specify media name
   * @public
   */
  RenditionName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AudioSelectorType = {
  ALL_PCM: "ALL_PCM",
  HLS_RENDITION_GROUP: "HLS_RENDITION_GROUP",
  LANGUAGE_CODE: "LANGUAGE_CODE",
  PID: "PID",
  TRACK: "TRACK",
} as const;

/**
 * @public
 */
export type AudioSelectorType = (typeof AudioSelectorType)[keyof typeof AudioSelectorType];

/**
 * Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
 * @public
 */
export interface AudioSelector {
  /**
   * Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion. * Force: Apply audio duration correction, either Track or Frame depending on your input, regardless of the accuracy of your input's STTS table. Your output audio and video may not be aligned or it may contain audio artifacts.
   * @public
   */
  AudioDurationCorrection?: AudioDurationCorrection | undefined;

  /**
   * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.
   * @public
   */
  DefaultSelection?: AudioDefaultSelection | undefined;

  /**
   * Specify the S3, HTTP, or HTTPS URL for your external audio file input.
   * @public
   */
  ExternalAudioFileInput?: string | undefined;

  /**
   * Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.
   * @public
   */
  HlsRenditionGroupSettings?: HlsRenditionGroupSettings | undefined;

  /**
   * Specify the language to select from your audio input. In the MediaConvert console choose from a list of languages. In your JSON job settings choose from an ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a time delta, in milliseconds, to offset the audio from the input video.
   * To specify no offset: Keep the default value, 0.
   * To specify an offset: Enter an integer from -2147483648 to 2147483647
   * @public
   */
  Offset?: number | undefined;

  /**
   * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
   * @public
   */
  Pids?: number[] | undefined;

  /**
   * Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.
   * @public
   */
  ProgramSelection?: number | undefined;

  /**
   * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
   * @public
   */
  RemixSettings?: RemixSettings | undefined;

  /**
   * Specify how MediaConvert selects audio content within your input. The default is Track. PID: Select audio by specifying the Packet Identifier (PID) values for MPEG Transport Stream inputs. Use this when you know the exact PID values of your audio streams. Track: Default. Select audio by track number. This is the most common option and works with most input container formats. Language code: Select audio by language using ISO 639-2 or ISO 639-3 three-letter language codes. Use this when your source has embedded language metadata and you want to select tracks based on their language. HLS rendition group: Select audio from an HLS rendition group. Use this when your input is an HLS package with multiple audio renditions and you want to select specific rendition groups. All PCM: Select all uncompressed PCM audio tracks from your input automatically. This is useful when you want to include all PCM audio tracks without specifying individual track numbers.
   * @public
   */
  SelectorType?: AudioSelectorType | undefined;

  /**
   * Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For example, type "1,2,3" to include tracks 1 through 3.
   * @public
   */
  Tracks?: number[] | undefined;
}

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
 * Settings for ancillary captions source.
 * @public
 */
export interface AncillarySourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   * @public
   */
  Convert608To708?: AncillaryConvert608To708 | undefined;

  /**
   * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
   * @public
   */
  SourceAncillaryChannelNumber?: number | undefined;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   * @public
   */
  TerminateCaptions?: AncillaryTerminateCaptions | undefined;
}

/**
 * DVB Sub Source Settings
 * @public
 */
export interface DvbSubSourceSettings {
  /**
   * When using DVB-Sub with Burn-in, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   * @public
   */
  Pid?: number | undefined;
}

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
 * Settings for embedded captions Source
 * @public
 */
export interface EmbeddedSourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   * @public
   */
  Convert608To708?: EmbeddedConvert608To708 | undefined;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   * @public
   */
  Source608ChannelNumber?: number | undefined;

  /**
   * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
   * @public
   */
  Source608TrackNumber?: number | undefined;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   * @public
   */
  TerminateCaptions?: EmbeddedTerminateCaptions | undefined;
}

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
 * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
 * @public
 */
export interface CaptionSourceFramerate {
  /**
   * Specify the denominator of the fraction that represents the frame rate for the setting Caption source frame rate. Use this setting along with the setting Framerate numerator.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * Specify the numerator of the fraction that represents the frame rate for the setting Caption source frame rate. Use this setting along with the setting Framerate denominator.
   * @public
   */
  FramerateNumerator?: number | undefined;
}

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
 * If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 * @public
 */
export interface FileSourceSettings {
  /**
   * Choose whether to limit the byte rate at which your SCC input captions are inserted into your output. To not limit the caption rate: We recommend that you keep the default value, Disabled. MediaConvert inserts captions in your output according to the byte rates listed in the EIA-608 specification, typically 2 or 3 caption bytes per frame depending on your output frame rate. To limit your output caption rate: Choose Enabled. Choose this option if your downstream systems require a maximum of 2 caption bytes per frame. Note that this setting has no effect when your output frame rate is 30 or 60.
   * @public
   */
  ByteRateLimit?: CaptionSourceByteRateLimit | undefined;

  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   * @public
   */
  Convert608To708?: FileSourceConvert608To708 | undefined;

  /**
   * Choose the presentation style of your input SCC captions. To use the same presentation style as your input: Keep the default value, Disabled. To convert paint-on captions to pop-on: Choose Enabled. We also recommend that you choose Enabled if you notice additional repeated lines in your output captions.
   * @public
   */
  ConvertPaintToPop?: CaptionSourceConvertPaintOnToPopOn | undefined;

  /**
   * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
   * @public
   */
  Framerate?: CaptionSourceFramerate | undefined;

  /**
   * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', 'xml', 'smi', 'webvtt', and 'vtt'.
   * @public
   */
  SourceFile?: string | undefined;

  /**
   * Optional. Use this setting when you need to adjust the sync between your sidecar captions and your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/time-delta-use-cases.html. Enter a positive or negative number to modify the times in the captions file. For example, type 15 to add 15 seconds to all the times in the captions file. Type -5 to subtract 5 seconds from the times in the captions file. You can optionally specify your time delta in milliseconds instead of seconds. When you do so, set the related setting, Time delta units to Milliseconds. Note that, when you specify a time delta for timecode-based caption sources, such as SCC and STL, and your time delta isn't a multiple of the input frame rate, MediaConvert snaps the captions to the nearest frame. For example, when your input video frame rate is 25 fps and you specify 1010ms for time delta, MediaConvert delays your captions by 1000 ms.
   * @public
   */
  TimeDelta?: number | undefined;

  /**
   * When you use the setting Time delta to adjust the sync between your sidecar captions and your video, use this setting to specify the units for the delta that you specify. When you don't specify a value for Time delta units, MediaConvert uses seconds by default.
   * @public
   */
  TimeDeltaUnits?: FileSourceTimeDeltaUnits | undefined;

  /**
   * Specify whether this set of input captions appears in your outputs in both STL and Teletext format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the STL data through using the Teletext compatibility bytes fields of the Teletext wrapper, and it also translates the STL data into Teletext.
   * @public
   */
  UpconvertSTLToTeletext?: CaptionSourceUpconvertSTLToTeletext | undefined;
}

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
 * Settings specific to Teletext caption sources, including Page number.
 * @public
 */
export interface TeletextSourceSettings {
  /**
   * Use Page Number to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.
   * @public
   */
  PageNumber?: string | undefined;
}

/**
 * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
 * @public
 */
export interface TrackSourceSettings {
  /**
   * Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector.
   * @public
   */
  TrackNumber?: number | undefined;
}

/**
 * Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.
 * @public
 */
export interface WebvttHlsSourceSettings {
  /**
   * Optional. Specify alternative group ID
   * @public
   */
  RenditionGroupId?: string | undefined;

  /**
   * Optional. Specify ISO 639-2 or ISO 639-3 code in the language property
   * @public
   */
  RenditionLanguageCode?: LanguageCode | undefined;

  /**
   * Optional. Specify media name
   * @public
   */
  RenditionName?: string | undefined;
}

/**
 * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 * @public
 */
export interface CaptionSourceSettings {
  /**
   * Settings for ancillary captions source.
   * @public
   */
  AncillarySourceSettings?: AncillarySourceSettings | undefined;

  /**
   * DVB Sub Source Settings
   * @public
   */
  DvbSubSourceSettings?: DvbSubSourceSettings | undefined;

  /**
   * Settings for embedded captions Source
   * @public
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings | undefined;

  /**
   * If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   * @public
   */
  FileSourceSettings?: FileSourceSettings | undefined;

  /**
   * Use Source to identify the format of your input captions. The service cannot auto-detect caption format.
   * @public
   */
  SourceType?: CaptionSourceType | undefined;

  /**
   * Settings specific to Teletext caption sources, including Page number.
   * @public
   */
  TeletextSourceSettings?: TeletextSourceSettings | undefined;

  /**
   * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
   * @public
   */
  TrackSourceSettings?: TrackSourceSettings | undefined;

  /**
   * Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.
   * @public
   */
  WebvttHlsSourceSettings?: WebvttHlsSourceSettings | undefined;
}

/**
 * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input.
 * @public
 */
export interface CaptionSelector {
  /**
   * The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   * @public
   */
  SourceSettings?: CaptionSourceSettings | undefined;
}

/**
 * Use Rectangle to identify a specific area of the video frame.
 * @public
 */
export interface Rectangle {
  /**
   * Height of rectangle in pixels. Specify only even numbers.
   * @public
   */
  Height?: number | undefined;

  /**
   * Width of rectangle in pixels. Specify only even numbers.
   * @public
   */
  Width?: number | undefined;

  /**
   * The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.
   * @public
   */
  X?: number | undefined;

  /**
   * The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.
   * @public
   */
  Y?: number | undefined;
}

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
 * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
 * @public
 */
export interface InputDecryptionSettings {
  /**
   * Specify the encryption mode that you used to encrypt your input files.
   * @public
   */
  DecryptionMode?: DecryptionMode | undefined;

  /**
   * Warning! Don't provide your encryption key in plaintext. Your job settings could be intercepted, making your encrypted content vulnerable. Specify the encrypted version of the data key that you used to encrypt your content. The data key must be encrypted by AWS Key Management Service (KMS). The key can be 128, 192, or 256 bits.
   * @public
   */
  EncryptedDecryptionKey?: string | undefined;

  /**
   * Specify the initialization vector that you used when you encrypted your content before uploading it to Amazon S3. You can use a 16-byte initialization vector with any encryption mode. Or, you can use a 12-byte initialization vector with GCM or CTR. MediaConvert accepts only initialization vectors that are base64-encoded.
   * @public
   */
  InitializationVector?: string | undefined;

  /**
   * Specify the AWS Region for AWS Key Management Service (KMS) that you used to encrypt your data key, if that Region is different from the one you are using for AWS Elemental MediaConvert.
   * @public
   */
  KmsKeyRegion?: string | undefined;
}

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
 * Use Dynamic audio selectors when you do not know the track layout of your source when you submit your job, but want to select multiple audio tracks. When you include an audio track in your output and specify this Dynamic audio selector as the Audio source, MediaConvert creates an audio track within that output for each dynamically selected track. Note that when you include a Dynamic audio selector for two or more inputs, each input must have the same number of audio tracks and audio channels.
 * @public
 */
export interface DynamicAudioSelector {
  /**
   * Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion. * Force: Apply audio duration correction, either Track or Frame depending on your input, regardless of the accuracy of your input's STTS table. Your output audio and video may not be aligned or it may contain audio artifacts.
   * @public
   */
  AudioDurationCorrection?: AudioDurationCorrection | undefined;

  /**
   * Specify the S3, HTTP, or HTTPS URL for your external audio file input.
   * @public
   */
  ExternalAudioFileInput?: string | undefined;

  /**
   * Specify the language to select from your audio input. In the MediaConvert console choose from a list of languages. In your JSON job settings choose from an ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a time delta, in milliseconds, to offset the audio from the input video.
   * To specify no offset: Keep the default value, 0.
   * To specify an offset: Enter an integer from -2147483648 to 2147483647
   * @public
   */
  Offset?: number | undefined;

  /**
   * Specify which audio tracks to dynamically select from your source. To select all audio tracks: Keep the default value, All tracks. To select all audio tracks with a specific language code: Choose Language code. When you do, you must also specify a language code under the Language code setting. If there is no matching Language code in your source, then no track will be selected.
   * @public
   */
  SelectorType?: DynamicAudioSelectorType | undefined;
}

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
 * These settings apply to a specific graphic overlay. You can include multiple overlays in your job.
 * @public
 */
export interface InsertableImage {
  /**
   * Specify the time, in milliseconds, for the image to remain on the output video. This duration includes fade-in time but not fade-out time.
   * @public
   */
  Duration?: number | undefined;

  /**
   * Specify the length of time, in milliseconds, between the Start time that you specify for the image insertion and the time that the image appears at full opacity. Full opacity is the level that you specify for the opacity setting. If you don't specify a value for Fade-in, the image will appear abruptly at the overlay start time.
   * @public
   */
  FadeIn?: number | undefined;

  /**
   * Specify the length of time, in milliseconds, between the end of the time that you have specified for the image overlay Duration and when the overlaid image has faded to total transparency. If you don't specify a value for Fade-out, the image will disappear abruptly at the end of the inserted image duration.
   * @public
   */
  FadeOut?: number | undefined;

  /**
   * Specify the height of the inserted image in pixels. If you specify a value that's larger than the video resolution height, the service will crop your overlaid image to fit. To use the native height of the image, keep this setting blank.
   * @public
   */
  Height?: number | undefined;

  /**
   * Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.
   * @public
   */
  ImageInserterInput?: string | undefined;

  /**
   * Specify the distance, in pixels, between the inserted image and the left edge of the video frame. Required for any image overlay that you specify.
   * @public
   */
  ImageX?: number | undefined;

  /**
   * Specify the distance, in pixels, between the overlaid image and the top edge of the video frame. Required for any image overlay that you specify.
   * @public
   */
  ImageY?: number | undefined;

  /**
   * Specify how overlapping inserted images appear. Images with higher values for Layer appear on top of images with lower values for Layer.
   * @public
   */
  Layer?: number | undefined;

  /**
   * Use Opacity to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.
   * @public
   */
  Opacity?: number | undefined;

  /**
   * Specify the timecode of the frame that you want the overlay to first appear on. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format. Remember to take into account your timecode source settings.
   * @public
   */
  StartTime?: string | undefined;

  /**
   * Specify the width of the inserted image in pixels. If you specify a value that's larger than the video resolution width, the service will crop your overlaid image to fit. To use the native width of the image, keep this setting blank.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Use the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/graphic-overlay.html. This setting is disabled by default.
 * @public
 */
export interface ImageInserter {
  /**
   * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
   * @public
   */
  InsertableImages?: InsertableImage[] | undefined;

  /**
   * Specify the reference white level, in nits, for all of your image inserter images. Use to correct brightness levels within HDR10 outputs. For 1,000 nit peak brightness displays, we recommend that you set SDR reference white level to 203 (according to ITU-R BT.2408). Leave blank to use the default value of 100, or specify an integer from 100 to 1000.
   * @public
   */
  SdrReferenceWhiteLevel?: number | undefined;
}

/**
 * To transcode only portions of your input, include one input clip for each part of your input that you want in your output. All input clips that you specify will be included in every output of the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html.
 * @public
 */
export interface InputClipping {
  /**
   * Set End timecode to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Set Start timecode to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00.
   * @public
   */
  StartTimecode?: string | undefined;
}

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
 * Specify a Time Addressable Media Store (TAMS) server as an input source. TAMS is an open-source API specification that provides access to time-segmented media content. Use TAMS to retrieve specific time ranges from live or archived media streams. When you specify TAMS settings, MediaConvert connects to your TAMS server, retrieves the media segments for your specified time range, and processes them as a single input. This enables workflows like extracting clips from live streams or processing specific portions of archived content. To use TAMS, you must: 1. Have access to a TAMS-compliant server 2. Specify the server URL in the Input file URL field 3. Provide the required SourceId and Timerange parameters 4. Configure authentication, if your TAMS server requires it
 * @public
 */
export interface InputTamsSettings {
  /**
   * Specify the ARN (Amazon Resource Name) of an EventBridge Connection to authenticate with your TAMS server. The EventBridge Connection stores your authentication credentials securely. MediaConvert assumes your job's IAM role to access this connection, so ensure the role has the events:RetrieveConnectionCredentials, secretsmanager:DescribeSecret, and secretsmanager:GetSecretValue permissions. Format: arn:aws:events:region:account-id:connection/connection-name/unique-id
   * @public
   */
  AuthConnectionArn?: string | undefined;

  /**
   * Specify how MediaConvert handles gaps between media segments in your TAMS source. Gaps can occur in live streams due to network issues or other interruptions. Choose from the following options: * Skip gaps - Default. Skip over gaps and join segments together. This creates a continuous output with no blank frames, but may cause timeline discontinuities. * Fill with black - Insert black frames to fill gaps between segments. This maintains timeline continuity but adds black frames where content is missing. * Hold last frame - Repeat the last frame before a gap until the next segment begins. This maintains visual continuity during gaps.
   * @public
   */
  GapHandling?: TamsGapHandling | undefined;

  /**
   * Specify the unique identifier for the media source in your TAMS server. MediaConvert uses this source ID to locate the appropriate flows containing the media segments you want to process. The source ID corresponds to a specific media source registered in your TAMS server. This source must be of type urn:x-nmos:format:multi, and can can reference multiple flows for audio, video, or combined audio/video content. MediaConvert automatically selects the highest quality flows available for your job. This setting is required when include TAMS settings in your job.
   * @public
   */
  SourceId?: string | undefined;

  /**
   * Specify the time range of media segments to retrieve from your TAMS server. MediaConvert fetches only the segments that fall within this range. Use the format specified by your TAMS server implementation. This must be two timestamp values with the format \{sign?\}\{seconds\}:\{nanoseconds\}, separated by an underscore, surrounded by either parentheses or square brackets.  Example: [15:0_35:0) This setting is required when include TAMS settings in your job.
   * @public
   */
  Timerange?: string | undefined;
}

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
 * When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html
 * @public
 */
export interface InputVideoGenerator {
  /**
   * Specify the number of audio channels to include in your video generator input. MediaConvert creates these audio channels as silent audio within a single audio track. Enter an integer from 1 to 32.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Specify the duration, in milliseconds, for your video generator input.
   * Enter an integer from 50 to 86400000.
   * @public
   */
  Duration?: number | undefined;

  /**
   * Specify the denominator of the fraction that represents the frame rate for your video generator input. When you do, you must also specify a value for Frame rate numerator. MediaConvert uses a default frame rate of 29.97 when you leave Frame rate numerator and Frame rate denominator blank.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * Specify the numerator of the fraction that represents the frame rate for your video generator input. When you do, you must also specify a value for Frame rate denominator. MediaConvert uses a default frame rate of 29.97 when you leave Frame rate numerator and Frame rate denominator blank.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Specify the audio sample rate, in Hz, for the silent audio in your video generator input.
   * Enter an integer from 32000 to 48000.
   * @public
   */
  SampleRate?: number | undefined;
}

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
 * Specify a rectangle of content to crop and use from your video overlay's input video. When you do, MediaConvert uses the cropped dimensions that you specify under X offset, Y offset, Width, and Height.
 * @public
 */
export interface VideoOverlayCrop {
  /**
   * Specify the height of the video overlay cropping rectangle. To use the same height as your overlay input video: Keep blank, or enter 0. To specify a different height for the cropping rectangle: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 100 and choose Pixels, the cropping rectangle will be 100 pixels high. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be 108 pixels high.
   * @public
   */
  Height?: number | undefined;

  /**
   * Specify the Unit type to use when you enter a value for X position, Y position, Width, or Height. You can choose Pixels or Percentage. Leave blank to use the default value, Pixels.
   * @public
   */
  Unit?: VideoOverlayUnit | undefined;

  /**
   * Specify the width of the video overlay cropping rectangle. To use the same width as your overlay input video: Keep blank, or enter 0. To specify a different width for the cropping rectangle: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 100 and choose Pixels, the cropping rectangle will be 100 pixels wide. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be 192 pixels wide.
   * @public
   */
  Width?: number | undefined;

  /**
   * Specify the distance between the cropping rectangle and the left edge of your overlay video's frame. To position the cropping rectangle along the left edge: Keep blank, or enter 0. To position the cropping rectangle to the right, relative to the left edge of your overlay video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, the cropping rectangle will be positioned 10 pixels from the left edge of the overlay video's frame. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be positioned 192 pixels from the left edge of the overlay video's frame.
   * @public
   */
  X?: number | undefined;

  /**
   * Specify the distance between the cropping rectangle and the top edge of your overlay video's frame. To position the cropping rectangle along the top edge: Keep blank, or enter 0. To position the cropping rectangle down, relative to the top edge of your overlay video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, the cropping rectangle will be positioned 10 pixels from the top edge of the overlay video's frame. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be positioned 108 pixels from the top edge of the overlay video's frame.
   * @public
   */
  Y?: number | undefined;
}

/**
 * position of video overlay
 * @public
 */
export interface VideoOverlayPosition {
  /**
   * To scale your video overlay to the same height as the base input video: Leave blank. To scale the height of your video overlay to a different height: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 360 and choose Pixels, your video overlay will be rendered with a height of 360. When you enter 50, choose Percentage, and your overlay's source has a height of 1080, your video overlay will be rendered with a height of 540. To scale your overlay to a specific height while automatically maintaining its original aspect ratio, enter a value for Height and leave Width blank.
   * @public
   */
  Height?: number | undefined;

  /**
   * Specify the Unit type to use when you enter a value for X position, Y position, Width, or Height. You can choose Pixels or Percentage. Leave blank to use the default value, Pixels.
   * @public
   */
  Unit?: VideoOverlayUnit | undefined;

  /**
   * To scale your video overlay to the same width as the base input video: Leave blank. To scale the width of your video overlay to a different width: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 640 and choose Pixels, your video overlay will scale to a height of 640 pixels. When you enter 50, choose Percentage, and your overlay's source has a width of 1920, your video overlay will scale to a width of 960. To scale your overlay to a specific width while automatically maintaining its original aspect ratio, enter a value for Width and leave Height blank.
   * @public
   */
  Width?: number | undefined;

  /**
   * To position the left edge of your video overlay along the left edge of the base input video's frame: Keep blank, or enter 0. To position the left edge of your video overlay to the right, relative to the left edge of the base input video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, your video overlay will be positioned 10 pixels from the left edge of the base input video's frame. When you enter 10, choose Percentage, and your base input video is 1920x1080, your video overlay will be positioned 192 pixels from the left edge of the base input video's frame.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * To position the top edge of your video overlay along the top edge of the base input video's frame: Keep blank, or enter 0. To position the top edge of your video overlay down, relative to the top edge of the base input video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, your video overlay will be positioned 10 pixels from the top edge of the base input video's frame. When you enter 10, choose Percentage, and your underlying video is 1920x1080, your video overlay will be positioned 108 pixels from the top edge of the base input video's frame.
   * @public
   */
  YPosition?: number | undefined;
}

/**
 * To transcode only portions of your video overlay, include one input clip for each part of your video overlay that you want in your output.
 * @public
 */
export interface VideoOverlayInputClipping {
  /**
   * Specify the timecode of the last frame to include in your video overlay's clip. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Specify the timecode of the first frame to include in your video overlay's clip. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  StartTimecode?: string | undefined;
}

/**
 * Input settings for Video overlay. You can include one or more video overlays in sequence at different times that you specify.
 * @public
 */
export interface VideoOverlayInput {
  /**
   * Specify the input file S3, HTTP, or HTTPS URL for your video overlay.
   * To specify one or more Transitions for your base input video instead: Leave blank.
   * @public
   */
  FileInput?: string | undefined;

  /**
   * Specify one or more clips to use from your video overlay. When you include an input clip, you must also specify its start timecode, end timecode, or both start and end timecode.
   * @public
   */
  InputClippings?: VideoOverlayInputClipping[] | undefined;

  /**
   * Specify the timecode source for your video overlay input clips. To use the timecode present in your video overlay: Choose Embedded. To use a zerobased timecode: Choose Start at 0. To choose a timecode: Choose Specified start. When you do, enter the starting timecode in Start timecode. If you don't specify a value for Timecode source, MediaConvert uses Embedded by default.
   * @public
   */
  TimecodeSource?: InputTimecodeSource | undefined;

  /**
   * Specify the starting timecode for this video overlay. To use this setting, you must set Timecode source to Specified start.
   * @public
   */
  TimecodeStart?: string | undefined;
}

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
 * Specify one or more Transitions for your video overlay. Use Transitions to reposition or resize your overlay over time. To use the same position and size for the duration of your video overlay: Leave blank. To specify a Transition: Enter a value for Start timecode, End Timecode, X Position, Y Position, Width, or Height.
 * @public
 */
export interface VideoOverlayTransition {
  /**
   * Specify the ending position for this transition, relative to the base input video's frame. Your video overlay will move smoothly to this position, beginning at this transition's Start timecode and ending at this transition's End timecode.
   * @public
   */
  EndPosition?: VideoOverlayPosition | undefined;

  /**
   * Specify the timecode for when this transition ends. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Specify the timecode for when this transition begins. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  StartTimecode?: string | undefined;
}

/**
 * Overlay one or more videos on top of your input video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-overlays.html
 * @public
 */
export interface VideoOverlay {
  /**
   * Specify a rectangle of content to crop and use from your video overlay's input video. When you do, MediaConvert uses the cropped dimensions that you specify under X offset, Y offset, Width, and Height.
   * @public
   */
  Crop?: VideoOverlayCrop | undefined;

  /**
   * Enter the end timecode in the base input video for this overlay. Your overlay will be active through this frame. To display your video overlay for the duration of the base input video: Leave blank. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS isthe second, and FF is the frame number. When entering this value, take into account your choice for the base input video's timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your overlay to end ten minutes into the video, enter 01:10:00:00.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Specify the Initial position of your video overlay. To specify the Initial position of your video overlay, including distance from the left or top edge of the base input video's frame, or size: Enter a value for X position, Y position, Width, or Height. To use the full frame of the base input video: Leave blank.
   * @public
   */
  InitialPosition?: VideoOverlayPosition | undefined;

  /**
   * Input settings for Video overlay. You can include one or more video overlays in sequence at different times that you specify.
   * @public
   */
  Input?: VideoOverlayInput | undefined;

  /**
   * Specify whether your video overlay repeats or plays only once. To repeat your video overlay on a loop: Keep the default value, Repeat. Your overlay will repeat for the duration of the base input video. To playback your video overlay only once: Choose Once. With either option, you can end playback at a time that you specify by entering a value for End timecode.
   * @public
   */
  Playback?: VideoOverlayPlayBackMode | undefined;

  /**
   * Enter the start timecode in the base input video for this overlay. Your overlay will be active starting with this frame. To display your video overlay starting at the beginning of the base input video: Leave blank. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for the base input video's timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your overlay to begin five minutes into the video, enter 01:05:00:00.
   * @public
   */
  StartTimecode?: string | undefined;

  /**
   * Specify one or more transitions for your video overlay. Use Transitions to reposition or resize your overlay over time. To use the same position and size for the duration of your video overlay: Leave blank. To specify a Transition: Enter a value for Start timecode, End Timecode, X Position, Y Position, Width, or Height.
   * @public
   */
  Transitions?: VideoOverlayTransition[] | undefined;
}

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
 * Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator.
 * @public
 */
export interface Hdr10Metadata {
  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  BluePrimaryX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  BluePrimaryY?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  GreenPrimaryX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  GreenPrimaryY?: number | undefined;

  /**
   * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   * @public
   */
  MaxContentLightLevel?: number | undefined;

  /**
   * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   * @public
   */
  MaxFrameAverageLightLevel?: number | undefined;

  /**
   * Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.
   * @public
   */
  MaxLuminance?: number | undefined;

  /**
   * Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter
   * @public
   */
  MinLuminance?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  RedPrimaryX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  RedPrimaryY?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  WhitePointX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  WhitePointY?: number | undefined;
}

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
 * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
 * @public
 */
export interface VideoSelector {
  /**
   * Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.
   * @public
   */
  AlphaBehavior?: AlphaBehavior | undefined;

  /**
   * If your input video has accurate color space metadata, or if you don't know about color space: Keep the default value, Follow. MediaConvert will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or has missing metadata: Specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate: Choose Force HDR 10. Specify correct values in the input HDR 10 metadata settings. For more information about HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. When you specify an input color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:
   *  * HDR 10: BT.2020, PQ, BT.2020 non-constant
   *  * HLG 2020: BT.2020, HLG, BT.2020 non-constant
   *  * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709
   *  * P3D65 (SDR): Display P3, sRGB, BT.709
   *  * P3D65 (HDR): Display P3, PQ, BT.709
   * @public
   */
  ColorSpace?: ColorSpace | undefined;

  /**
   * There are two sources for color metadata, the input file and the job input settings Color space and HDR master display information settings. The Color space usage setting determines which takes precedence. Choose Force to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.
   * @public
   */
  ColorSpaceUsage?: ColorSpaceUsage | undefined;

  /**
   * Set Embedded timecode override to Use MDPM when your AVCHD input contains timecode tag data in the Modified Digital Video Pack Metadata. When you do, we recommend you also set Timecode source to Embedded. Leave Embedded timecode override blank, or set to None, when your input does not contain MDPM timecode.
   * @public
   */
  EmbeddedTimecodeOverride?: EmbeddedTimecodeOverride | undefined;

  /**
   * Use these settings to provide HDR 10 metadata that is missing or inaccurate in your input video. Appropriate values vary depending on the input video and must be provided by a color grader. The color grader generates these values during the HDR 10 mastering process. The valid range for each of these settings is 0 to 50,000. Each increment represents 0.00002 in CIE1931 color coordinate. Related settings - When you specify these values, you must also set Color space to HDR 10. To specify whether the the values you specify here take precedence over the values in the metadata of your input file, set Color space usage. To specify whether color metadata is included in an output, set Color metadata. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   * @public
   */
  Hdr10Metadata?: Hdr10Metadata | undefined;

  /**
   * Specify the maximum mastering display luminance. Enter an integer from 0 to 2147483647, in units of 0.0001 nits. For example, enter 10000000 for 1000 nits.
   * @public
   */
  MaxLuminance?: number | undefined;

  /**
   * Use this setting if your input has video and audio durations that don't align, and your output or player has strict alignment requirements. Examples: Input audio track has a delayed start. Input video track ends before audio ends. When you set Pad video to Black, MediaConvert generates black video frames so that output video and audio durations match. Black video frames are added at the beginning or end, depending on your input. To keep the default behavior and not generate black video, set Pad video to Disabled or leave blank.
   * @public
   */
  PadVideo?: PadVideo | undefined;

  /**
   * Use PID to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
   * @public
   */
  Pid?: number | undefined;

  /**
   * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Use Rotate to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.
   * @public
   */
  Rotate?: InputRotate | undefined;

  /**
   * If the sample range metadata in your input video is accurate, or if you don't know about sample range, keep the default value, Follow, for this setting. When you do, the service automatically detects your input sample range. If your input video has metadata indicating the wrong sample range, specify the accurate sample range here. When you do, MediaConvert ignores any sample range information in the input metadata. Regardless of whether MediaConvert uses the input sample range or the sample range that you specify, MediaConvert uses the sample range for transcoding and also writes it to the output metadata.
   * @public
   */
  SampleRange?: InputSampleRange | undefined;
}

/**
 * Use inputs to define the source files used in your transcoding job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/specify-input-settings.html. You can use multiple video inputs to do input stitching. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html
 * @public
 */
export interface Input {
  /**
   * Use to remove noise, blocking, blurriness, or ringing from your input as a pre-filter step before encoding. The Advanced input filter removes more types of compression artifacts and is an improvement when compared to basic Deblock and Denoise filters. To remove video compression artifacts from your input and improve the video quality: Choose Enabled. Additionally, this filter can help increase the video quality of your output relative to its bitrate, since noisy inputs are more complex and require more bits to encode. To help restore loss of detail after applying the filter, you can optionally add texture or sharpening as an additional step. Jobs that use this feature incur pro-tier pricing. To not apply advanced input filtering: Choose Disabled. Note that you can still apply basic filtering with Deblock and Denoise.
   * @public
   */
  AdvancedInputFilter?: AdvancedInputFilter | undefined;

  /**
   * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
   * @public
   */
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings | undefined;

  /**
   * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
   * @public
   */
  AudioSelectorGroups?: Record<string, AudioSelectorGroup> | undefined;

  /**
   * Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   * @public
   */
  AudioSelectors?: Record<string, AudioSelector> | undefined;

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input.
   * @public
   */
  CaptionSelectors?: Record<string, CaptionSelector> | undefined;

  /**
   * Use Cropping selection to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection.
   * @public
   */
  Crop?: Rectangle | undefined;

  /**
   * Enable Deblock to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   * @public
   */
  DeblockFilter?: InputDeblockFilter | undefined;

  /**
   * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
   * @public
   */
  DecryptionSettings?: InputDecryptionSettings | undefined;

  /**
   * Enable Denoise to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   * @public
   */
  DenoiseFilter?: InputDenoiseFilter | undefined;

  /**
   * Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   * @public
   */
  DolbyVisionMetadataXml?: string | undefined;

  /**
   * Use Dynamic audio selectors when you do not know the track layout of your source when you submit your job, but want to select multiple audio tracks. When you include an audio track in your output and specify this Dynamic audio selector as the Audio source, MediaConvert creates an output audio track for each dynamically selected track. Note that when you include a Dynamic audio selector for two or more inputs, each input must have the same number of audio tracks and audio channels.
   * @public
   */
  DynamicAudioSelectors?: Record<string, DynamicAudioSelector> | undefined;

  /**
   * Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. For standard inputs, provide the path to your S3, HTTP, or HTTPS source file. For example, s3://amzn-s3-demo-bucket/input.mp4 for an Amazon S3 input or https://example.com/input.mp4 for an HTTPS input. For TAMS inputs, specify the HTTPS endpoint of your TAMS server. For example, https://tams-server.example.com . When you do, also specify Source ID, Timerange, GAP handling, and the Authorization connection ARN under TAMS settings. (Don't include these parameters in the Input file URL.) For IMF inputs, specify your input by providing the path to your CPL. For example, s3://amzn-s3-demo-bucket/vf/cpl.xml . If the CPL is in an incomplete IMP, make sure to use Supplemental IMPsto specify any supplemental IMPs that contain assets referenced by the CPL.
   * @public
   */
  FileInput?: string | undefined;

  /**
   * Specify whether to apply input filtering to improve the video quality of your input. To apply filtering depending on your input type and quality: Choose Auto. To apply no filtering: Choose Disable. To apply filtering regardless of your input type and quality: Choose Force. When you do, you must also specify a value for Filter strength.
   * @public
   */
  FilterEnable?: InputFilterEnable | undefined;

  /**
   * Specify the strength of the input filter. To apply an automatic amount of filtering based the compression artifacts measured in your input: We recommend that you leave Filter strength blank and set Filter enable to Auto. To manually apply filtering: Enter a value from 1 to 5, where 1 is the least amount of filtering and 5 is the most. The value that you enter applies to the strength of the Deblock or Denoise filters, or to the strength of the Advanced input filter.
   * @public
   */
  FilterStrength?: number | undefined;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   * @public
   */
  ImageInserter?: ImageInserter | undefined;

  /**
   * Contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   * @public
   */
  InputClippings?: InputClipping[] | undefined;

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto. Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   * @public
   */
  InputScanType?: InputScanType | undefined;

  /**
   * Use Selection placement to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement. If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD to Respond. If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior.
   * @public
   */
  Position?: Rectangle | undefined;

  /**
   * Use Program to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Set PSI control for transport stream inputs to specify which data the demux process to scans.
   * * Ignore PSI - Scan all PIDs for audio and video.
   * * Use PSI - Scan only PSI data.
   * @public
   */
  PsiControl?: InputPsiControl | undefined;

  /**
   * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
   * @public
   */
  SupplementalImps?: string[] | undefined;

  /**
   * Specify a Time Addressable Media Store (TAMS) server as an input source. TAMS is an open-source API specification that provides access to time-segmented media content. Use TAMS to retrieve specific time ranges from live or archived media streams. When you specify TAMS settings, MediaConvert connects to your TAMS server, retrieves the media segments for your specified time range, and processes them as a single input. This enables workflows like extracting clips from live streams or processing specific portions of archived content. To use TAMS, you must: 1. Have access to a TAMS-compliant server 2. Specify the server URL in the Input file URL field 3. Provide the required SourceId and Timerange parameters 4. Configure authentication, if your TAMS server requires it
   * @public
   */
  TamsSettings?: InputTamsSettings | undefined;

  /**
   * Use this Timecode source setting, located under the input settings, to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded to use the timecodes in your input video. Choose Start at zero to start the first frame at zero. Choose Specified start to start the first frame at the timecode that you specify in the setting Start timecode. If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeSource?: InputTimecodeSource | undefined;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings, to Specified start. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeStart?: string | undefined;

  /**
   * When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html
   * @public
   */
  VideoGenerator?: InputVideoGenerator | undefined;

  /**
   * Contains an array of video overlays.
   * @public
   */
  VideoOverlays?: VideoOverlay[] | undefined;

  /**
   * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
   * @public
   */
  VideoSelector?: VideoSelector | undefined;
}

/**
 * Specified video input in a template.
 * @public
 */
export interface InputTemplate {
  /**
   * Use to remove noise, blocking, blurriness, or ringing from your input as a pre-filter step before encoding. The Advanced input filter removes more types of compression artifacts and is an improvement when compared to basic Deblock and Denoise filters. To remove video compression artifacts from your input and improve the video quality: Choose Enabled. Additionally, this filter can help increase the video quality of your output relative to its bitrate, since noisy inputs are more complex and require more bits to encode. To help restore loss of detail after applying the filter, you can optionally add texture or sharpening as an additional step. Jobs that use this feature incur pro-tier pricing. To not apply advanced input filtering: Choose Disabled. Note that you can still apply basic filtering with Deblock and Denoise.
   * @public
   */
  AdvancedInputFilter?: AdvancedInputFilter | undefined;

  /**
   * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
   * @public
   */
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings | undefined;

  /**
   * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
   * @public
   */
  AudioSelectorGroups?: Record<string, AudioSelectorGroup> | undefined;

  /**
   * Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   * @public
   */
  AudioSelectors?: Record<string, AudioSelector> | undefined;

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input.
   * @public
   */
  CaptionSelectors?: Record<string, CaptionSelector> | undefined;

  /**
   * Use Cropping selection to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection.
   * @public
   */
  Crop?: Rectangle | undefined;

  /**
   * Enable Deblock to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   * @public
   */
  DeblockFilter?: InputDeblockFilter | undefined;

  /**
   * Enable Denoise to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   * @public
   */
  DenoiseFilter?: InputDenoiseFilter | undefined;

  /**
   * Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   * @public
   */
  DolbyVisionMetadataXml?: string | undefined;

  /**
   * Use Dynamic audio selectors when you do not know the track layout of your source when you submit your job, but want to select multiple audio tracks. When you include an audio track in your output and specify this Dynamic audio selector as the Audio source, MediaConvert creates an output audio track for each dynamically selected track. Note that when you include a Dynamic audio selector for two or more inputs, each input must have the same number of audio tracks and audio channels.
   * @public
   */
  DynamicAudioSelectors?: Record<string, DynamicAudioSelector> | undefined;

  /**
   * Specify whether to apply input filtering to improve the video quality of your input. To apply filtering depending on your input type and quality: Choose Auto. To apply no filtering: Choose Disable. To apply filtering regardless of your input type and quality: Choose Force. When you do, you must also specify a value for Filter strength.
   * @public
   */
  FilterEnable?: InputFilterEnable | undefined;

  /**
   * Specify the strength of the input filter. To apply an automatic amount of filtering based the compression artifacts measured in your input: We recommend that you leave Filter strength blank and set Filter enable to Auto. To manually apply filtering: Enter a value from 1 to 5, where 1 is the least amount of filtering and 5 is the most. The value that you enter applies to the strength of the Deblock or Denoise filters, or to the strength of the Advanced input filter.
   * @public
   */
  FilterStrength?: number | undefined;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   * @public
   */
  ImageInserter?: ImageInserter | undefined;

  /**
   * Contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   * @public
   */
  InputClippings?: InputClipping[] | undefined;

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto. Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   * @public
   */
  InputScanType?: InputScanType | undefined;

  /**
   * Use Selection placement to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement. If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD to Respond. If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior.
   * @public
   */
  Position?: Rectangle | undefined;

  /**
   * Use Program to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Set PSI control for transport stream inputs to specify which data the demux process to scans.
   * * Ignore PSI - Scan all PIDs for audio and video.
   * * Use PSI - Scan only PSI data.
   * @public
   */
  PsiControl?: InputPsiControl | undefined;

  /**
   * Use this Timecode source setting, located under the input settings, to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded to use the timecodes in your input video. Choose Start at zero to start the first frame at zero. Choose Specified start to start the first frame at the timecode that you specify in the setting Start timecode. If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeSource?: InputTimecodeSource | undefined;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings, to Specified start. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeStart?: string | undefined;

  /**
   * Contains an array of video overlays.
   * @public
   */
  VideoOverlays?: VideoOverlay[] | undefined;

  /**
   * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
   * @public
   */
  VideoSelector?: VideoSelector | undefined;
}

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
 * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
 * @public
 */
export interface AccelerationSettings {
  /**
   * Specify the conditions when the service will run your job with accelerated transcoding.
   * @public
   */
  Mode: AccelerationMode | undefined;
}

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
 * Provides messages from the service about jobs that you have already successfully submitted.
 * @public
 */
export interface JobMessages {
  /**
   * List of messages that are informational only and don't indicate a problem with your job.
   * @public
   */
  Info?: string[] | undefined;

  /**
   * List of messages that warn about conditions that might cause your job not to run or to fail.
   * @public
   */
  Warning?: string[] | undefined;
}

/**
 * Contains details about the output's video stream
 * @public
 */
export interface VideoDetail {
  /**
   * Height in pixels for the output
   * @public
   */
  HeightInPx?: number | undefined;

  /**
   * Width in pixels for the output
   * @public
   */
  WidthInPx?: number | undefined;
}

/**
 * Details regarding output
 * @public
 */
export interface OutputDetail {
  /**
   * Duration in milliseconds
   * @public
   */
  DurationInMs?: number | undefined;

  /**
   * Contains details about the output's video stream
   * @public
   */
  VideoDetails?: VideoDetail | undefined;
}

/**
 * Contains details about the output groups specified in the job settings.
 * @public
 */
export interface OutputGroupDetail {
  /**
   * Details about the output
   * @public
   */
  OutputDetails?: OutputDetail[] | undefined;
}

/**
 * Description of the source and destination queues between which the job has moved, along with the timestamp of the move
 * @public
 */
export interface QueueTransition {
  /**
   * The queue that the job was on after the transition.
   * @public
   */
  DestinationQueue?: string | undefined;

  /**
   * The queue that the job was on before the transition.
   * @public
   */
  SourceQueue?: string | undefined;

  /**
   * The time, in Unix epoch format, that the job moved from the source queue to the destination queue.
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Use ad avail blanking settings to specify your output content during SCTE-35 triggered ad avails. You can blank your video or overlay it with an image. MediaConvert also removes any audio and embedded captions during the ad avail. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ad-avail-blanking.html.
 * @public
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   * @public
   */
  AvailBlankingImage?: string | undefined;
}

/**
 * ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025.
 * @public
 */
export interface EsamManifestConfirmConditionNotification {
  /**
   * Provide your ESAM ManifestConfirmConditionNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the Manifest Conditioning instructions in the message that you supply.
   * @public
   */
  MccXml?: string | undefined;
}

/**
 * ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025.
 * @public
 */
export interface EsamSignalProcessingNotification {
  /**
   * Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the signal processing instructions in the message that you supply. For your MPEG2-TS file outputs, if you want the service to place SCTE-35 markers at the insertion points you specify in the XML document, you must also enable SCTE-35 ESAM. Note that you can either specify an ESAM XML document or enable SCTE-35 passthrough. You can't do both.
   * @public
   */
  SccXml?: string | undefined;
}

/**
 * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
 * @public
 */
export interface EsamSettings {
  /**
   * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML.
   * @public
   */
  ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification | undefined;

  /**
   * Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.
   * @public
   */
  ResponseSignalPreroll?: number | undefined;

  /**
   * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML.
   * @public
   */
  SignalProcessingNotification?: EsamSignalProcessingNotification | undefined;
}

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
 * If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.
 * @public
 */
export interface ExtendedDataServices {
  /**
   * The action to take on copy and redistribution control XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.
   * @public
   */
  CopyProtectionAction?: CopyProtectionAction | undefined;

  /**
   * The action to take on content advisory XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.
   * @public
   */
  VchipAction?: VchipAction | undefined;
}

/**
 * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
 * @public
 */
export interface KantarWatermarkSettings {
  /**
   * Provide an audio channel name from your Kantar audio license.
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * Specify a unique identifier for Kantar to use for this piece of content.
   * @public
   */
  ContentReference?: string | undefined;

  /**
   * Provide the name of the AWS Secrets Manager secret where your Kantar credentials are stored. Note that your MediaConvert service role must provide access to this secret. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/granting-permissions-for-mediaconvert-to-access-secrets-manager-secret.html. For instructions on creating a secret, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_basic.html, in the AWS Secrets Manager User Guide.
   * @public
   */
  CredentialsSecretName?: string | undefined;

  /**
   * Optional. Specify an offset, in whole seconds, from the start of your output and the beginning of the watermarking. When you don't specify an offset, Kantar defaults to zero.
   * @public
   */
  FileOffset?: number | undefined;

  /**
   * Provide your Kantar license ID number. You should get this number from Kantar.
   * @public
   */
  KantarLicenseId?: number | undefined;

  /**
   * Provide the HTTPS endpoint to the Kantar server. You should get this endpoint from Kantar.
   * @public
   */
  KantarServerUrl?: string | undefined;

  /**
   * Optional. Specify the Amazon S3 bucket where you want MediaConvert to store your Kantar watermark XML logs. When you don't specify a bucket, MediaConvert doesn't save these logs. Note that your MediaConvert service role must provide access to this location. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * You can optionally use this field to specify the first timestamp that Kantar embeds during watermarking. Kantar suggests that you be very cautious when using this Kantar feature, and that you use it only on channels that are managed specifically for use with this feature by your Audience Measurement Operator. For more information about this feature, contact Kantar technical support.
   * @public
   */
  Metadata3?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata4?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata5?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata6?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata7?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata8?: string | undefined;
}

/**
 * For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video.
 * @public
 */
export interface MotionImageInsertionFramerate {
  /**
   * The bottom of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 1.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * The top of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 24.
   * @public
   */
  FramerateNumerator?: number | undefined;
}

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
 * Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.
 * @public
 */
export interface MotionImageInsertionOffset {
  /**
   * Set the distance, in pixels, between the overlay and the left edge of the video frame.
   * @public
   */
  ImageX?: number | undefined;

  /**
   * Set the distance, in pixels, between the overlay and the top edge of the video frame.
   * @public
   */
  ImageY?: number | undefined;
}

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
 * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
 * @public
 */
export interface MotionImageInserter {
  /**
   * If your motion graphic asset is a .mov file, keep this setting unspecified. If your motion graphic asset is a series of .png files, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. Make sure that the number of images in your series matches the frame rate and your intended overlay duration. For example, if you want a 30-second overlay at 30 fps, you should have 900 .png images. This overlay frame rate doesn't need to match the frame rate of the underlying video.
   * @public
   */
  Framerate?: MotionImageInsertionFramerate | undefined;

  /**
   * Specify the .mov file or series of .png files that you want to overlay on your video. For .png files, provide the file name of the first file in the series. Make sure that the names of the .png files end with sequential numbers that specify the order that they are played in. For example, overlay_000.png, overlay_001.png, overlay_002.png, and so on. The sequence must start at zero, and each image file name must have the same number of digits. Pad your initial file names with enough zeros to complete the sequence. For example, if the first image is overlay_0.png, there can be only 10 images in the sequence, with the last image being overlay_9.png. But if the first image is overlay_00.png, there can be 100 images in the sequence.
   * @public
   */
  Input?: string | undefined;

  /**
   * Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.
   * @public
   */
  InsertionMode?: MotionImageInsertionMode | undefined;

  /**
   * Use Offset to specify the placement of your motion graphic overlay on the video frame. Specify in pixels, from the upper-left corner of the frame. If you don't specify an offset, the service scales your overlay to the full size of the frame. Otherwise, the service inserts the overlay at its native resolution and scales the size up or down with any video scaling.
   * @public
   */
  Offset?: MotionImageInsertionOffset | undefined;

  /**
   * Specify whether your motion graphic overlay repeats on a loop or plays only once.
   * @public
   */
  Playback?: MotionImagePlayback | undefined;

  /**
   * Specify when the motion overlay begins. Use timecode format (HH:MM:SS:FF or HH:MM:SS;FF). Make sure that the timecode you provide here takes into account how you have set up your timecode configuration under both job settings and input settings. The simplest way to do that is to set both to start at 0. If you need to set up your job to follow timecodes embedded in your source that don't start at zero, make sure that you specify a start time that is after the first embedded timecode. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-timecode.html
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration, MediaConvert enables PCM to ID3 tagging for all outputs in the job.
 * @public
 */
export interface NielsenConfiguration {
  /**
   * Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.
   * @public
   */
  BreakoutCode?: number | undefined;

  /**
   * Use Distributor ID to specify the distributor ID that is assigned to your organization by Nielsen.
   * @public
   */
  DistributorId?: string | undefined;
}

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
 * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 6.0.13 Nielsen NLM Watermark Engine Version 1.3.3 Nielsen Watermark Authenticator [SID_TIC] Version [7.0.0]
 * @public
 */
export interface NielsenNonLinearWatermarkSettings {
  /**
   * Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW, you must provide a value for the setting SID. When you choose CBET, you must provide a value for the setting CSID. When you choose NAES 2, NW, and CBET, you must provide values for both of these settings.
   * @public
   */
  ActiveWatermarkProcess?: NielsenActiveWatermarkProcessType | undefined;

  /**
   * Optional. Use this setting when you want the service to include an ADI file in the Nielsen metadata .zip file. To provide an ADI file, store it in Amazon S3 and provide a URL to it here. The URL should be in the following format: S3://bucket/path/ADI-file. For more information about the metadata .zip file, see the setting Metadata destination.
   * @public
   */
  AdiFilename?: string | undefined;

  /**
   * Use the asset ID that you provide to Nielsen to uniquely identify this asset. Required for all Nielsen non-linear watermarking.
   * @public
   */
  AssetId?: string | undefined;

  /**
   * Use the asset name that you provide to Nielsen for this asset. Required for all Nielsen non-linear watermarking.
   * @public
   */
  AssetName?: string | undefined;

  /**
   * Use the CSID that Nielsen provides to you. This CBET source ID should be unique to your Nielsen account but common to all of your output assets that have CBET watermarking. Required when you choose a value for the setting Watermark types that includes CBET.
   * @public
   */
  CbetSourceId?: string | undefined;

  /**
   * Optional. If this asset uses an episode ID with Nielsen, provide it here.
   * @public
   */
  EpisodeId?: string | undefined;

  /**
   * Specify the Amazon S3 location where you want MediaConvert to save your Nielsen non-linear metadata .zip file. This Amazon S3 bucket must be in the same Region as the one where you do your MediaConvert transcoding. If you want to include an ADI file in this .zip file, use the setting ADI file to specify it. MediaConvert delivers the Nielsen metadata .zip files only to your metadata destination Amazon S3 bucket. It doesn't deliver the .zip files to Nielsen. You are responsible for delivering the metadata .zip files to Nielsen.
   * @public
   */
  MetadataDestination?: string | undefined;

  /**
   * Use the SID that Nielsen provides to you. This source ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking. This ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking.
   * @public
   */
  SourceId?: number | undefined;

  /**
   * Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked, the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already have non-linear Nielsen watermarks.
   * @public
   */
  SourceWatermarkStatus?: NielsenSourceWatermarkStatusType | undefined;

  /**
   * Specify the endpoint for the TIC server that you have deployed and configured in the AWS Cloud. Required for all Nielsen non-linear watermarking. MediaConvert can't connect directly to a TIC server. Instead, you must use API Gateway to provide a RESTful interface between MediaConvert and a TIC server that you deploy in your AWS account. For more information on deploying a TIC server in your AWS account and the required API Gateway, contact Nielsen support.
   * @public
   */
  TicServerUrl?: string | undefined;

  /**
   * To create assets that have the same TIC values in each audio track, keep the default value Share TICs. To create assets that have unique TIC values for each audio track, choose Use unique TICs.
   * @public
   */
  UniqueTicPerAudioTrack?: NielsenUniqueTicPerAudioTrackType | undefined;
}

/**
 * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
 * @public
 */
export interface AutomatedAbrSettings {
  /**
   * Specify the maximum average bitrate for MediaConvert to use in your automated ABR stack. If you don't specify a value, MediaConvert uses 8,000,000 (8 mb/s) by default. The average bitrate of your highest-quality rendition will be equal to or below this value, depending on the quality, complexity, and resolution of your content. Note that the instantaneous maximum bitrate may vary above the value that you specify.
   * @public
   */
  MaxAbrBitrate?: number | undefined;

  /**
   * Optional. Specify the QVBR quality level to use for all renditions in your automated ABR stack. To have MediaConvert automatically determine the quality level: Leave blank. To manually specify a quality level: Enter a value from 1 to 10. MediaConvert will use a quality level up to the value that you specify, depending on your source. For more information about QVBR quality levels, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/qvbr-guidelines.html
   * @public
   */
  MaxQualityLevel?: number | undefined;

  /**
   * Optional. The maximum number of renditions that MediaConvert will create in your automated ABR stack. The number of renditions is determined automatically, based on analysis of each job, but will never exceed this limit. When you set this to Auto in the console, which is equivalent to excluding it from your JSON job specification, MediaConvert defaults to a limit of 15.
   * @public
   */
  MaxRenditions?: number | undefined;

  /**
   * Specify the minimum average bitrate for MediaConvert to use in your automated ABR stack. If you don't specify a value, MediaConvert uses 600,000 (600 kb/s) by default. The average bitrate of your lowest-quality rendition will be near this value. Note that the instantaneous minimum bitrate may vary below the value that you specify.
   * @public
   */
  MinAbrBitrate?: number | undefined;

  /**
   * Optional. Use Automated ABR rules to specify restrictions for the rendition sizes MediaConvert will create in your ABR stack. You can use these rules if your ABR workflow has specific rendition size requirements, but you still want MediaConvert to optimize for video quality and overall file size.
   * @public
   */
  Rules?: AutomatedAbrRule[] | undefined;
}

/**
 * Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
 * @public
 */
export interface AutomatedEncodingSettings {
  /**
   * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
   * @public
   */
  AbrSettings?: AutomatedAbrSettings | undefined;
}

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
 * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
 * @public
 */
export interface S3DestinationAccessControl {
  /**
   * Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.
   * @public
   */
  CannedAcl?: S3ObjectCannedAcl | undefined;
}

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
 * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
 * @public
 */
export interface S3EncryptionSettings {
  /**
   * Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3. If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS. By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting KMS ARN.
   * @public
   */
  EncryptionType?: S3ServerSideEncryptionType | undefined;

  /**
   * Optionally, specify the encryption context that you want to use alongside your KMS key. AWS KMS uses this encryption context as additional authenticated data (AAD) to support authenticated encryption. This value must be a base64-encoded UTF-8 string holding JSON which represents a string-string map. To use this setting, you must also set Server-side encryption to AWS KMS. For more information about encryption context, see: https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context.
   * @public
   */
  KmsEncryptionContext?: string | undefined;

  /**
   * Optionally, specify the customer master key (CMK) that you want to use to encrypt the data key that AWS uses to encrypt your output content. Enter the Amazon Resource Name (ARN) of the CMK. To use this setting, you must also set Server-side encryption to AWS KMS. If you set Server-side encryption to AWS KMS but don't specify a CMK here, AWS uses the AWS managed CMK associated with Amazon S3.
   * @public
   */
  KmsKeyArn?: string | undefined;
}

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
 * Settings associated with S3 destination
 * @public
 */
export interface S3DestinationSettings {
  /**
   * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
   * @public
   */
  AccessControl?: S3DestinationAccessControl | undefined;

  /**
   * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
   * @public
   */
  Encryption?: S3EncryptionSettings | undefined;

  /**
   * Specify the S3 storage class to use for this output. To use your destination's default storage class: Keep the default value, Not set. For more information about S3 storage classes, see https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html
   * @public
   */
  StorageClass?: S3StorageClass | undefined;
}

/**
 * Settings associated with the destination. Will vary based on the type of destination
 * @public
 */
export interface DestinationSettings {
  /**
   * Settings associated with S3 destination
   * @public
   */
  S3Settings?: S3DestinationSettings | undefined;
}

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
 * Specify the SPEKE version, either v1.0 or v2.0, that MediaConvert uses when encrypting your output. For more information, see: https://docs.aws.amazon.com/speke/latest/documentation/speke-api-specification.html To use SPEKE v1.0: Leave blank. To use SPEKE v2.0: Specify a SPEKE v2.0 video preset and a SPEKE v2.0 audio preset.
 * @public
 */
export interface EncryptionContractConfiguration {
  /**
   * Specify which SPEKE version 2.0 audio preset MediaConvert uses to request content keys from your SPEKE server. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/drm-content-speke-v2-presets.html To encrypt to your audio outputs, choose from the following: Audio preset 1, Audio preset 2, or Audio preset 3. To encrypt your audio outputs, using the same content key for both your audio and video outputs: Choose Shared. When you do, you must also set SPEKE v2.0 video preset to Shared. To not encrypt your audio outputs: Choose Unencrypted. When you do, to encrypt your video outputs, you must also specify a SPEKE v2.0 video preset (other than Shared or Unencrypted).
   * @public
   */
  SpekeAudioPreset?: PresetSpeke20Audio | undefined;

  /**
   * Specify which SPEKE version 2.0 video preset MediaConvert uses to request content keys from your SPEKE server. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/drm-content-speke-v2-presets.html To encrypt to your video outputs, choose from the following: Video preset 1, Video preset 2, Video preset 3, Video preset 4, Video preset 5, Video preset 6, Video preset 7, or Video preset 8. To encrypt your video outputs, using the same content key for both your video and audio outputs: Choose Shared. When you do, you must also set SPEKE v2.0 audio preset to Shared. To not encrypt your video outputs: Choose Unencrypted. When you do, to encrypt your audio outputs, you must also specify a SPEKE v2.0 audio preset (other than Shared or Unencrypted).
   * @public
   */
  SpekeVideoPreset?: PresetSpeke20Video | undefined;
}

/**
 * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
 * @public
 */
export interface SpekeKeyProviderCmaf {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Specify the DRM system IDs that you want signaled in the DASH manifest that MediaConvert creates as part of this CMAF package. The DASH manifest can currently signal up to three system IDs. For more information, see https://dashif.org/identifiers/content_protection/.
   * @public
   */
  DashSignaledSystemIds?: string[] | undefined;

  /**
   * Specify the SPEKE version, either v1.0 or v2.0, that MediaConvert uses when encrypting your output. For more information, see: https://docs.aws.amazon.com/speke/latest/documentation/speke-api-specification.html To use SPEKE v1.0: Leave blank. To use SPEKE v2.0: Specify a SPEKE v2.0 video preset and a SPEKE v2.0 audio preset.
   * @public
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration | undefined;

  /**
   * Specify up to 3 DRM system IDs that you want signaled in the HLS manifest that MediaConvert creates as part of this CMAF package. For more information, see https://dashif.org/identifiers/content_protection/.
   * @public
   */
  HlsSignaledSystemIds?: string[] | undefined;

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   * @public
   */
  Url?: string | undefined;
}

/**
 * Use these settings to set up encryption with a static key provider.
 * @public
 */
export interface StaticKeyProvider {
  /**
   * Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.
   * @public
   */
  KeyFormat?: string | undefined;

  /**
   * Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   * @public
   */
  KeyFormatVersions?: string | undefined;

  /**
   * Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value.
   * @public
   */
  StaticKeyValue?: string | undefined;

  /**
   * Relates to DRM implementation. The location of the license server used for protecting content.
   * @public
   */
  Url?: string | undefined;
}

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
 * Settings for CMAF encryption
 * @public
 */
export interface CmafEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample or AES_CTR.
   * @public
   */
  EncryptionMethod?: CmafEncryptionType | undefined;

  /**
   * When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.
   * @public
   */
  InitializationVectorInManifest?: CmafInitializationVectorInManifest | undefined;

  /**
   * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
   * @public
   */
  SpekeKeyProvider?: SpekeKeyProviderCmaf | undefined;

  /**
   * Use these settings to set up encryption with a static key provider.
   * @public
   */
  StaticKeyProvider?: StaticKeyProvider | undefined;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   * @public
   */
  Type?: CmafKeyProviderType | undefined;
}

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
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 * @public
 */
export interface CmafImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   * @public
   */
  IntervalCadence?: CmafIntervalCadence | undefined;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   * @public
   */
  ThumbnailHeight?: number | undefined;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   * @public
   */
  ThumbnailInterval?: number | undefined;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   * @public
   */
  ThumbnailWidth?: number | undefined;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   * @public
   */
  TileWidth?: number | undefined;
}

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
 * Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
 * @public
 */
export interface CmafGroupSettings {
  /**
   * By default, the service creates one top-level .m3u8 HLS manifest and one top -level .mpd DASH manifest for each CMAF output group in your job. These default manifests reference every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here. For each additional manifest that you specify, the service creates one HLS manifest and one DASH manifest.
   * @public
   */
  AdditionalManifests?: CmafAdditionalManifest[] | undefined;

  /**
   * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled and control caching in your video distribution set up. For example, use the Cache-Control http header.
   * @public
   */
  ClientCache?: CmafClientCache | undefined;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   * @public
   */
  CodecSpecification?: CmafCodecSpecification | undefined;

  /**
   * Specify whether MediaConvert generates I-frame only video segments for DASH trick play, also known as trick mode. When specified, the I-frame only video segments are included within an additional AdaptationSet in your DASH output manifest. To generate I-frame only video segments: Enter a name as a text string, up to 256 character long. This name is appended to the end of this output group's base filename, that you specify as part of your destination URI, and used for the I-frame only video segment files. You may also include format identifiers. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html#using-settings-variables-with-streaming-outputs To not generate I-frame only video segments: Leave blank.
   * @public
   */
  DashIFrameTrickPlayNameModifier?: string | undefined;

  /**
   * Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct.
   * @public
   */
  DashManifestStyle?: DashManifestStyle | undefined;

  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;

  /**
   * DRM settings.
   * @public
   */
  Encryption?: CmafEncryptionSettings | undefined;

  /**
   * Specify the length, in whole seconds, of the mp4 fragments. When you don't specify a value, MediaConvert defaults to 2. Related setting: Use Fragment length control to specify whether the encoder enforces this value strictly.
   * @public
   */
  FragmentLength?: number | undefined;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. When you enable Write HLS manifest, MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. When you enable Write DASH manifest, MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   * @public
   */
  ImageBasedTrickPlay?: CmafImageBasedTrickPlay | undefined;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   * @public
   */
  ImageBasedTrickPlaySettings?: CmafImageBasedTrickPlaySettings | undefined;

  /**
   * When set to GZIP, compresses HLS playlist.
   * @public
   */
  ManifestCompression?: CmafManifestCompression | undefined;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   * @public
   */
  ManifestDurationFormat?: CmafManifestDurationFormat | undefined;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   * @public
   */
  MinBufferTime?: number | undefined;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   * @public
   */
  MinFinalSegmentLength?: number | undefined;

  /**
   * Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.
   * @public
   */
  MpdManifestBandwidthType?: CmafMpdManifestBandwidthType | undefined;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile, the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand, the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control to Single file.
   * @public
   */
  MpdProfile?: CmafMpdProfile | undefined;

  /**
   * Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.
   * @public
   */
  PtsOffsetHandlingForBFrames?: CmafPtsOffsetHandlingForBFrames | undefined;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   * @public
   */
  SegmentControl?: CmafSegmentControl | undefined;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 10. Related settings: Use Segment length control to specify whether the encoder enforces this value strictly. Use Segment control to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * Specify how you want MediaConvert to determine segment lengths in this output group. To use the exact value that you specify under Segment length: Choose Exact. Note that this might result in additional I-frames in the output GOP. To create segment lengths that are a multiple of the GOP: Choose Multiple of GOP. MediaConvert will round up the segment lengths to match the next GOP boundary. To have MediaConvert automatically determine a segment duration that is a multiple of both the audio packets and the frame rates: Choose Match. When you do, also specify a target segment duration under Segment length. This is useful for some ad-insertion or segment replacement workflows. Note that Match has the following requirements: - Output containers: Include at least one video output and at least one audio output. Audio-only outputs are not supported. - Output frame rate: Follow source is not supported. - Multiple output frame rates: When you specify multiple outputs, we recommend they share a similar frame rate (as in X/3, X/2, X, or 2X). For example: 5, 15, 30 and 60. Or: 25 and 50. (Outputs must share an integer multiple.) - Output audio codec: Specify Advanced Audio Coding (AAC). - Output sample rate: Choose 48kHz.
   * @public
   */
  SegmentLengthControl?: CmafSegmentLengthControl | undefined;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   * @public
   */
  StreamInfResolution?: CmafStreamInfResolution | undefined;

  /**
   * When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.
   * @public
   */
  TargetDurationCompatibilityMode?: CmafTargetDurationCompatibilityMode | undefined;

  /**
   * Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.
   * @public
   */
  VideoCompositionOffsets?: CmafVideoCompositionOffsets | undefined;

  /**
   * When set to ENABLED, a DASH MPD manifest will be generated for this output.
   * @public
   */
  WriteDashManifest?: CmafWriteDASHManifest | undefined;

  /**
   * When set to ENABLED, an Apple HLS manifest will be generated for this output.
   * @public
   */
  WriteHlsManifest?: CmafWriteHLSManifest | undefined;

  /**
   * When you enable Precise segment duration in DASH manifests, your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.
   * @public
   */
  WriteSegmentTimelineInRepresentation?: CmafWriteSegmentTimelineInRepresentation | undefined;
}

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
 * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
 * @public
 */
export interface SpekeKeyProvider {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Specify the SPEKE version, either v1.0 or v2.0, that MediaConvert uses when encrypting your output. For more information, see: https://docs.aws.amazon.com/speke/latest/documentation/speke-api-specification.html To use SPEKE v1.0: Leave blank. To use SPEKE v2.0: Specify a SPEKE v2.0 video preset and a SPEKE v2.0 audio preset.
   * @public
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration | undefined;

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. HLS output groups support a max of 3 system ids. Other group types support one system id. See https://dashif.org/identifiers/content_protection/ for more details.
   * @public
   */
  SystemIds?: string[] | undefined;

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies DRM settings for DASH outputs.
 * @public
 */
export interface DashIsoEncryptionSettings {
  /**
   * This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1. If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.
   * @public
   */
  PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility | undefined;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   * @public
   */
  SpekeKeyProvider?: SpekeKeyProvider | undefined;
}

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
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 * @public
 */
export interface DashIsoImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   * @public
   */
  IntervalCadence?: DashIsoIntervalCadence | undefined;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   * @public
   */
  ThumbnailHeight?: number | undefined;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   * @public
   */
  ThumbnailInterval?: number | undefined;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   * @public
   */
  ThumbnailWidth?: number | undefined;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   * @public
   */
  TileWidth?: number | undefined;
}

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
 * Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
 * @public
 */
export interface DashIsoGroupSettings {
  /**
   * By default, the service creates one .mpd DASH manifest for each DASH ISO output group in your job. This default manifest references every output in the output group. To create additional DASH manifests that reference a subset of the outputs in the output group, specify a list of them here.
   * @public
   */
  AdditionalManifests?: DashAdditionalManifest[] | undefined;

  /**
   * Use this setting only when your audio codec is a Dolby one (AC3, EAC3, or Atmos) and your downstream workflow requires that your DASH manifest use the Dolby channel configuration tag, rather than the MPEG one. For example, you might need to use this to make dynamic ad insertion work. Specify which audio channel configuration scheme ID URI MediaConvert writes in your DASH manifest. Keep the default value, MPEG channel configuration, to have MediaConvert write this: urn:mpeg:mpegB:cicp:ChannelConfiguration. Choose Dolby channel configuration to have MediaConvert write this instead: tag:dolby.com,2014:dash:audio_channel_configuration:2011.
   * @public
   */
  AudioChannelConfigSchemeIdUri?: DashIsoGroupAudioChannelConfigSchemeIdUri | undefined;

  /**
   * A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * Specify whether MediaConvert generates I-frame only video segments for DASH trick play, also known as trick mode. When specified, the I-frame only video segments are included within an additional AdaptationSet in your DASH output manifest. To generate I-frame only video segments: Enter a name as a text string, up to 256 character long. This name is appended to the end of this output group's base filename, that you specify as part of your destination URI, and used for the I-frame only video segment files. You may also include format identifiers. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html#using-settings-variables-with-streaming-outputs To not generate I-frame only video segments: Leave blank.
   * @public
   */
  DashIFrameTrickPlayNameModifier?: string | undefined;

  /**
   * Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct.
   * @public
   */
  DashManifestStyle?: DashManifestStyle | undefined;

  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;

  /**
   * DRM settings.
   * @public
   */
  Encryption?: DashIsoEncryptionSettings | undefined;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   * @public
   */
  FragmentLength?: number | undefined;

  /**
   * Supports HbbTV specification as indicated
   * @public
   */
  HbbtvCompliance?: DashIsoHbbtvCompliance | undefined;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   * @public
   */
  ImageBasedTrickPlay?: DashIsoImageBasedTrickPlay | undefined;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   * @public
   */
  ImageBasedTrickPlaySettings?: DashIsoImageBasedTrickPlaySettings | undefined;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   * @public
   */
  MinBufferTime?: number | undefined;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   * @public
   */
  MinFinalSegmentLength?: number | undefined;

  /**
   * Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.
   * @public
   */
  MpdManifestBandwidthType?: DashIsoMpdManifestBandwidthType | undefined;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile, the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand, the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control to Single file.
   * @public
   */
  MpdProfile?: DashIsoMpdProfile | undefined;

  /**
   * Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.
   * @public
   */
  PtsOffsetHandlingForBFrames?: DashIsoPtsOffsetHandlingForBFrames | undefined;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   * @public
   */
  SegmentControl?: DashIsoSegmentControl | undefined;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 30. Related settings: Use Segment length control to specify whether the encoder enforces this value strictly. Use Segment control to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * Specify how you want MediaConvert to determine segment lengths in this output group. To use the exact value that you specify under Segment length: Choose Exact. Note that this might result in additional I-frames in the output GOP. To create segment lengths that are a multiple of the GOP: Choose Multiple of GOP. MediaConvert will round up the segment lengths to match the next GOP boundary. To have MediaConvert automatically determine a segment duration that is a multiple of both the audio packets and the frame rates: Choose Match. When you do, also specify a target segment duration under Segment length. This is useful for some ad-insertion or segment replacement workflows. Note that Match has the following requirements: - Output containers: Include at least one video output and at least one audio output. Audio-only outputs are not supported. - Output frame rate: Follow source is not supported. - Multiple output frame rates: When you specify multiple outputs, we recommend they share a similar frame rate (as in X/3, X/2, X, or 2X). For example: 5, 15, 30 and 60. Or: 25 and 50. (Outputs must share an integer multiple.) - Output audio codec: Specify Advanced Audio Coding (AAC). - Output sample rate: Choose 48kHz.
   * @public
   */
  SegmentLengthControl?: DashIsoSegmentLengthControl | undefined;

  /**
   * Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.
   * @public
   */
  VideoCompositionOffsets?: DashIsoVideoCompositionOffsets | undefined;

  /**
   * If you get an HTTP error in the 400 range when you play back your DASH output, enable this setting and run your transcoding job again. When you enable this setting, the service writes precise segment durations in the DASH manifest. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When you don't enable this setting, the service writes approximate segment durations in your DASH manifest.
   * @public
   */
  WriteSegmentTimelineInRepresentation?: DashIsoWriteSegmentTimelineInRepresentation | undefined;
}

/**
 * Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package.
 * @public
 */
export interface FileGroupSettings {
  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;
}

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
 * Settings for HLS encryption
 * @public
 */
export interface HlsEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.
   * @public
   */
  EncryptionMethod?: HlsEncryptionType | undefined;

  /**
   * The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.
   * @public
   */
  InitializationVectorInManifest?: HlsInitializationVectorInManifest | undefined;

  /**
   * Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.
   * @public
   */
  OfflineEncrypted?: HlsOfflineEncrypted | undefined;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   * @public
   */
  SpekeKeyProvider?: SpekeKeyProvider | undefined;

  /**
   * Use these settings to set up encryption with a static key provider.
   * @public
   */
  StaticKeyProvider?: StaticKeyProvider | undefined;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   * @public
   */
  Type?: HlsKeyProviderType | undefined;
}

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
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 * @public
 */
export interface HlsImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   * @public
   */
  IntervalCadence?: HlsIntervalCadence | undefined;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   * @public
   */
  ThumbnailHeight?: number | undefined;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   * @public
   */
  ThumbnailInterval?: number | undefined;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   * @public
   */
  ThumbnailWidth?: number | undefined;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   * @public
   */
  TileWidth?: number | undefined;
}

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
