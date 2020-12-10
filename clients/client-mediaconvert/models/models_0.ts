export enum AudioChannelTag {
  C = "C",
  CS = "CS",
  L = "L",
  LC = "LC",
  LFE = "LFE",
  LS = "LS",
  LSD = "LSD",
  R = "R",
  RC = "RC",
  RS = "RS",
  RSD = "RSD",
  TCS = "TCS",
  VHC = "VHC",
  VHL = "VHL",
  VHR = "VHR",
}

/**
 * When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel.
 */
export interface AudioChannelTaggingSettings {
  /**
   * You can add a tag for this mono-channel audio track to mimic its placement in a multi-channel layout.  For example, if this track is the left surround channel, choose Left surround (LS).
   */
  ChannelTag?: AudioChannelTag | string;
}

export namespace AudioChannelTaggingSettings {
  export const filterSensitiveLog = (obj: AudioChannelTaggingSettings): any => ({
    ...obj,
  });
}

export enum AudioNormalizationAlgorithm {
  ITU_BS_1770_1 = "ITU_BS_1770_1",
  ITU_BS_1770_2 = "ITU_BS_1770_2",
  ITU_BS_1770_3 = "ITU_BS_1770_3",
  ITU_BS_1770_4 = "ITU_BS_1770_4",
}

export enum AudioNormalizationAlgorithmControl {
  CORRECT_AUDIO = "CORRECT_AUDIO",
  MEASURE_ONLY = "MEASURE_ONLY",
}

export enum AudioNormalizationLoudnessLogging {
  DONT_LOG = "DONT_LOG",
  LOG = "LOG",
}

export enum AudioNormalizationPeakCalculation {
  NONE = "NONE",
  TRUE_PEAK = "TRUE_PEAK",
}

/**
 * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
 */
export interface AudioNormalizationSettings {
  /**
   * Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.
   */
  Algorithm?: AudioNormalizationAlgorithm | string;

  /**
   * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | string;

  /**
   * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected.
   */
  CorrectionGateLevel?: number;

  /**
   * If set to LOG, log each output's audio track loudness to a CSV file.
   */
  LoudnessLogging?: AudioNormalizationLoudnessLogging | string;

  /**
   * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
   */
  PeakCalculation?: AudioNormalizationPeakCalculation | string;

  /**
   * When you use Audio normalization (AudioNormalizationSettings), optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm (algorithm). If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.
   */
  TargetLkfs?: number;
}

export namespace AudioNormalizationSettings {
  export const filterSensitiveLog = (obj: AudioNormalizationSettings): any => ({
    ...obj,
  });
}

export enum AudioTypeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum AacAudioDescriptionBroadcasterMix {
  BROADCASTER_MIXED_AD = "BROADCASTER_MIXED_AD",
  NORMAL = "NORMAL",
}

export enum AacCodecProfile {
  HEV1 = "HEV1",
  HEV2 = "HEV2",
  LC = "LC",
}

export enum AacCodingMode {
  AD_RECEIVER_MIX = "AD_RECEIVER_MIX",
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_5_1 = "CODING_MODE_5_1",
}

export enum AacRateControlMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum AacRawFormat {
  LATM_LOAS = "LATM_LOAS",
  NONE = "NONE",
}

export enum AacSpecification {
  MPEG2 = "MPEG2",
  MPEG4 = "MPEG4",
}

export enum AacVbrQuality {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM_HIGH = "MEDIUM_HIGH",
  MEDIUM_LOW = "MEDIUM_LOW",
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
 */
export interface AacSettings {
  /**
   * Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and  FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.
   */
  AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix | string;

  /**
   * Specify the average bitrate in bits per second. The set of valid values for this setting is: 6000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000. The value you set is also constrained by the values that you choose for Profile (codecProfile), Bitrate control mode (codingMode), and Sample rate (sampleRate). Default values depend on Bitrate control mode and Profile.
   */
  Bitrate?: number;

  /**
   * AAC Profile.
   */
  CodecProfile?: AacCodecProfile | string;

  /**
   * Mono (Audio Description), Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. "1.0 - Audio Description (Receiver Mix)" setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   */
  CodingMode?: AacCodingMode | string;

  /**
   * Rate Control Mode.
   */
  RateControlMode?: AacRateControlMode | string;

  /**
   * Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.
   */
  RawFormat?: AacRawFormat | string;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   */
  SampleRate?: number;

  /**
   * Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   */
  Specification?: AacSpecification | string;

  /**
   * VBR Quality Level - Only used if rate_control_mode is VBR.
   */
  VbrQuality?: AacVbrQuality | string;
}

export namespace AacSettings {
  export const filterSensitiveLog = (obj: AacSettings): any => ({
    ...obj,
  });
}

export enum Ac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  DIALOGUE = "DIALOGUE",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  MUSIC_AND_EFFECTS = "MUSIC_AND_EFFECTS",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
  VOICE_OVER = "VOICE_OVER",
}

export enum Ac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2_LFE = "CODING_MODE_3_2_LFE",
}

export enum Ac3DynamicRangeCompressionProfile {
  FILM_STANDARD = "FILM_STANDARD",
  NONE = "NONE",
}

export enum Ac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Ac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
 */
export interface Ac3Settings {
  /**
   * Specify the average bitrate in bits per second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Ac3BitstreamMode | string;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   */
  CodingMode?: Ac3CodingMode | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   */
  DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile | string;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   */
  LfeFilter?: Ac3LfeFilter | string;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Ac3MetadataControl | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;
}

export namespace Ac3Settings {
  export const filterSensitiveLog = (obj: Ac3Settings): any => ({
    ...obj,
  });
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
 */
export interface AiffSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   */
  Channels?: number;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;
}

export namespace AiffSettings {
  export const filterSensitiveLog = (obj: AiffSettings): any => ({
    ...obj,
  });
}

export enum AudioCodec {
  AAC = "AAC",
  AC3 = "AC3",
  AIFF = "AIFF",
  EAC3 = "EAC3",
  EAC3_ATMOS = "EAC3_ATMOS",
  MP2 = "MP2",
  MP3 = "MP3",
  OPUS = "OPUS",
  PASSTHROUGH = "PASSTHROUGH",
  VORBIS = "VORBIS",
  WAV = "WAV",
}

export enum Eac3AtmosBitstreamMode {
  COMPLETE_MAIN = "COMPLETE_MAIN",
}

export enum Eac3AtmosCodingMode {
  CODING_MODE_9_1_6 = "CODING_MODE_9_1_6",
}

export enum Eac3AtmosDialogueIntelligence {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3AtmosDynamicRangeCompressionLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3AtmosDynamicRangeCompressionRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3AtmosMeteringMode {
  ITU_BS_1770_1 = "ITU_BS_1770_1",
  ITU_BS_1770_2 = "ITU_BS_1770_2",
  ITU_BS_1770_3 = "ITU_BS_1770_3",
  ITU_BS_1770_4 = "ITU_BS_1770_4",
  LEQ_A = "LEQ_A",
}

export enum Eac3AtmosStereoDownmix {
  DPL2 = "DPL2",
  NOT_INDICATED = "NOT_INDICATED",
  STEREO = "STEREO",
  SURROUND = "SURROUND",
}

export enum Eac3AtmosSurroundExMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
 */
export interface Eac3AtmosSettings {
  /**
   * Specify the average bitrate in bits per second.
   * Valid values: 384k, 448k, 640k, 768k
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Eac3AtmosBitstreamMode | string;

  /**
   * The coding mode for Dolby Digital Plus JOC (Atmos) is always 9.1.6 (CODING_MODE_9_1_6).
   */
  CodingMode?: Eac3AtmosCodingMode | string;

  /**
   * Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.
   */
  DialogueIntelligence?: Eac3AtmosDialogueIntelligence | string;

  /**
   * Specify the absolute peak level for a signal with dynamic range compression.
   */
  DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine | string;

  /**
   * Specify how the service limits the audio dynamic range when compressing the audio.
   */
  DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionRf | string;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only center mix
   * (Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this
   * value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix).
   * Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0.
   */
  LoRoCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel.
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0.
   */
  LtRtCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel.
   */
  LtRtSurroundMixLevel?: number;

  /**
   * Choose how the service meters the loudness of your audio.
   */
  MeteringMode?: Eac3AtmosMeteringMode | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * Specify the percentage of audio content that must be speech before the encoder uses the measured speech loudness as the overall program loudness.
   */
  SpeechThreshold?: number;

  /**
   * Choose how the service does stereo downmixing.
   */
  StereoDownmix?: Eac3AtmosStereoDownmix | string;

  /**
   * Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.
   */
  SurroundExMode?: Eac3AtmosSurroundExMode | string;
}

export namespace Eac3AtmosSettings {
  export const filterSensitiveLog = (obj: Eac3AtmosSettings): any => ({
    ...obj,
  });
}

export enum Eac3AttenuationControl {
  ATTENUATE_3_DB = "ATTENUATE_3_DB",
  NONE = "NONE",
}

export enum Eac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
}

export enum Eac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2 = "CODING_MODE_3_2",
}

export enum Eac3DcFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3DynamicRangeCompressionLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3DynamicRangeCompressionRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3LfeControl {
  LFE = "LFE",
  NO_LFE = "NO_LFE",
}

export enum Eac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum Eac3PassthroughControl {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  WHEN_POSSIBLE = "WHEN_POSSIBLE",
}

export enum Eac3PhaseControl {
  NO_SHIFT = "NO_SHIFT",
  SHIFT_90_DEGREES = "SHIFT_90_DEGREES",
}

export enum Eac3StereoDownmix {
  DPL2 = "DPL2",
  LO_RO = "LO_RO",
  LT_RT = "LT_RT",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundExMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
 */
export interface Eac3Settings {
  /**
   * If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: Eac3AttenuationControl | string;

  /**
   * Specify the average bitrate in bits per second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Eac3BitstreamMode | string;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   */
  CodingMode?: Eac3CodingMode | string;

  /**
   * Activates a DC highpass filter for all input channels.
   */
  DcFilter?: Eac3DcFilter | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * Specify the absolute peak level for a signal with dynamic range compression.
   */
  DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine | string;

  /**
   * Specify how the service limits the audio dynamic range when compressing the audio.
   */
  DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf | string;

  /**
   * When encoding 3/2 audio, controls whether the LFE channel is enabled
   */
  LfeControl?: Eac3LfeControl | string;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   */
  LfeFilter?: Eac3LfeFilter | string;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only center (loRoCenterMixLevel).
   */
  LoRoCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only surround (loRoSurroundMixLevel).
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total center (ltRtCenterMixLevel).
   */
  LtRtCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total surround (ltRtSurroundMixLevel).
   */
  LtRtSurroundMixLevel?: number;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Eac3MetadataControl | string;

  /**
   * When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: Eac3PassthroughControl | string;

  /**
   * Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: Eac3PhaseControl | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).
   */
  StereoDownmix?: Eac3StereoDownmix | string;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   */
  SurroundExMode?: Eac3SurroundExMode | string;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   */
  SurroundMode?: Eac3SurroundMode | string;
}

export namespace Eac3Settings {
  export const filterSensitiveLog = (obj: Eac3Settings): any => ({
    ...obj,
  });
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
 */
export interface Mp2Settings {
  /**
   * Specify the average bitrate in bits per second.
   */
  Bitrate?: number;

  /**
   * Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;
}

export namespace Mp2Settings {
  export const filterSensitiveLog = (obj: Mp2Settings): any => ({
    ...obj,
  });
}

export enum Mp3RateControlMode {
  CBR = "CBR",
  VBR = "VBR",
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
 */
export interface Mp3Settings {
  /**
   * Specify the average bitrate in bits per second.
   */
  Bitrate?: number;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).
   */
  RateControlMode?: Mp3RateControlMode | string;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;

  /**
   * Required when you set Bitrate control mode (rateControlMode) to VBR. Specify the audio quality of this MP3 output from 0 (highest quality) to 9 (lowest quality).
   */
  VbrQuality?: number;
}

export namespace Mp3Settings {
  export const filterSensitiveLog = (obj: Mp3Settings): any => ({
    ...obj,
  });
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
 */
export interface OpusSettings {
  /**
   * Optional. Specify the average bitrate in bits per second. Valid values are multiples of 8000, from 32000 through 192000. The default value is 96000, which we recommend for quality and bandwidth.
   */
  Bitrate?: number;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Optional. Sample rate in hz. Valid values are 16000, 24000, and 48000. The default value is 48000.
   */
  SampleRate?: number;
}

export namespace OpusSettings {
  export const filterSensitiveLog = (obj: OpusSettings): any => ({
    ...obj,
  });
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
 */
export interface VorbisSettings {
  /**
   * Optional. Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2. The default value is 2.
   */
  Channels?: number;

  /**
   * Optional. Specify the audio sample rate in Hz. Valid values are 22050, 32000, 44100, and 48000. The default value is 48000.
   */
  SampleRate?: number;

  /**
   * Optional. Specify the variable audio quality of this Vorbis output from -1 (lowest quality, ~45 kbit/s) to 10 (highest quality, ~500 kbit/s). The default value is 4 (~128 kbit/s). Values 5 and 6 are approximately 160 and 192 kbit/s, respectively.
   */
  VbrQuality?: number;
}

export namespace VorbisSettings {
  export const filterSensitiveLog = (obj: VorbisSettings): any => ({
    ...obj,
  });
}

export enum WavFormat {
  RF64 = "RF64",
  RIFF = "RIFF",
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
 */
export interface WavSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   */
  Channels?: number;

  /**
   * The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.
   */
  Format?: WavFormat | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

export namespace WavSettings {
  export const filterSensitiveLog = (obj: WavSettings): any => ({
    ...obj,
  });
}

/**
 * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * MP3, Mp3Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings * VORBIS, VorbisSettings * OPUS, OpusSettings
 */
export interface AudioCodecSettings {
  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
   */
  AacSettings?: AacSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
   */
  Ac3Settings?: Ac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
   */
  AiffSettings?: AiffSettings;

  /**
   * Type of Audio codec.
   */
  Codec?: AudioCodec | string;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
   */
  Eac3AtmosSettings?: Eac3AtmosSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
   */
  Eac3Settings?: Eac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
   */
  Mp2Settings?: Mp2Settings;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
   */
  Mp3Settings?: Mp3Settings;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
   */
  OpusSettings?: OpusSettings;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
   */
  VorbisSettings?: VorbisSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
   */
  WavSettings?: WavSettings;
}

export namespace AudioCodecSettings {
  export const filterSensitiveLog = (obj: AudioCodecSettings): any => ({
    ...obj,
  });
}

export enum LanguageCode {
  AAR = "AAR",
  ABK = "ABK",
  AFR = "AFR",
  AKA = "AKA",
  AMH = "AMH",
  ARA = "ARA",
  ARG = "ARG",
  ASM = "ASM",
  AVA = "AVA",
  AVE = "AVE",
  AYM = "AYM",
  AZE = "AZE",
  BAK = "BAK",
  BAM = "BAM",
  BEL = "BEL",
  BEN = "BEN",
  BIH = "BIH",
  BIS = "BIS",
  BOD = "BOD",
  BOS = "BOS",
  BRE = "BRE",
  BUL = "BUL",
  CAT = "CAT",
  CES = "CES",
  CHA = "CHA",
  CHE = "CHE",
  CHU = "CHU",
  CHV = "CHV",
  COR = "COR",
  COS = "COS",
  CRE = "CRE",
  CYM = "CYM",
  DAN = "DAN",
  DEU = "DEU",
  DIV = "DIV",
  DZO = "DZO",
  ELL = "ELL",
  ENG = "ENG",
  ENM = "ENM",
  EPO = "EPO",
  EST = "EST",
  EUS = "EUS",
  EWE = "EWE",
  FAO = "FAO",
  FAS = "FAS",
  FIJ = "FIJ",
  FIN = "FIN",
  FRA = "FRA",
  FRM = "FRM",
  FRY = "FRY",
  FUL = "FUL",
  GER = "GER",
  GLA = "GLA",
  GLE = "GLE",
  GLG = "GLG",
  GLV = "GLV",
  GRN = "GRN",
  GUJ = "GUJ",
  HAT = "HAT",
  HAU = "HAU",
  HEB = "HEB",
  HER = "HER",
  HIN = "HIN",
  HMO = "HMO",
  HRV = "HRV",
  HUN = "HUN",
  HYE = "HYE",
  IBO = "IBO",
  IDO = "IDO",
  III = "III",
  IKU = "IKU",
  ILE = "ILE",
  INA = "INA",
  IND = "IND",
  IPK = "IPK",
  ISL = "ISL",
  ITA = "ITA",
  JAV = "JAV",
  JPN = "JPN",
  KAL = "KAL",
  KAN = "KAN",
  KAS = "KAS",
  KAT = "KAT",
  KAU = "KAU",
  KAZ = "KAZ",
  KHM = "KHM",
  KIK = "KIK",
  KIN = "KIN",
  KIR = "KIR",
  KOM = "KOM",
  KON = "KON",
  KOR = "KOR",
  KUA = "KUA",
  KUR = "KUR",
  LAO = "LAO",
  LAT = "LAT",
  LAV = "LAV",
  LIM = "LIM",
  LIN = "LIN",
  LIT = "LIT",
  LTZ = "LTZ",
  LUB = "LUB",
  LUG = "LUG",
  MAH = "MAH",
  MAL = "MAL",
  MAR = "MAR",
  MKD = "MKD",
  MLG = "MLG",
  MLT = "MLT",
  MON = "MON",
  MRI = "MRI",
  MSA = "MSA",
  MYA = "MYA",
  NAU = "NAU",
  NAV = "NAV",
  NBL = "NBL",
  NDE = "NDE",
  NDO = "NDO",
  NEP = "NEP",
  NLD = "NLD",
  NNO = "NNO",
  NOB = "NOB",
  NOR = "NOR",
  NYA = "NYA",
  OCI = "OCI",
  OJI = "OJI",
  ORI = "ORI",
  ORJ = "ORJ",
  ORM = "ORM",
  OSS = "OSS",
  PAN = "PAN",
  PLI = "PLI",
  POL = "POL",
  POR = "POR",
  PUS = "PUS",
  QAA = "QAA",
  QPC = "QPC",
  QUE = "QUE",
  ROH = "ROH",
  RON = "RON",
  RUN = "RUN",
  RUS = "RUS",
  SAG = "SAG",
  SAN = "SAN",
  SIN = "SIN",
  SLK = "SLK",
  SLV = "SLV",
  SME = "SME",
  SMO = "SMO",
  SNA = "SNA",
  SND = "SND",
  SOM = "SOM",
  SOT = "SOT",
  SPA = "SPA",
  SQI = "SQI",
  SRB = "SRB",
  SRD = "SRD",
  SSW = "SSW",
  SUN = "SUN",
  SWA = "SWA",
  SWE = "SWE",
  TAH = "TAH",
  TAM = "TAM",
  TAT = "TAT",
  TEL = "TEL",
  TGK = "TGK",
  TGL = "TGL",
  THA = "THA",
  TIR = "TIR",
  TNG = "TNG",
  TON = "TON",
  TSN = "TSN",
  TSO = "TSO",
  TUK = "TUK",
  TUR = "TUR",
  TWI = "TWI",
  UIG = "UIG",
  UKR = "UKR",
  URD = "URD",
  UZB = "UZB",
  VEN = "VEN",
  VIE = "VIE",
  VOL = "VOL",
  WLN = "WLN",
  WOL = "WOL",
  XHO = "XHO",
  YID = "YID",
  YOR = "YOR",
  ZHA = "ZHA",
  ZHO = "ZHO",
  ZUL = "ZUL",
}

export enum AudioLanguageCodeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * OutputChannel mapping settings.
 */
export interface OutputChannelMapping {
  /**
   * List of input channels
   */
  InputChannels?: number[];
}

export namespace OutputChannelMapping {
  export const filterSensitiveLog = (obj: OutputChannelMapping): any => ({
    ...obj,
  });
}

/**
 * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
 */
export interface ChannelMapping {
  /**
   * List of output channels
   */
  OutputChannels?: OutputChannelMapping[];
}

export namespace ChannelMapping {
  export const filterSensitiveLog = (obj: ChannelMapping): any => ({
    ...obj,
  });
}

/**
 * Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
 */
export interface RemixSettings {
  /**
   * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
   */
  ChannelMapping?: ChannelMapping;

  /**
   * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different.
   */
  ChannelsIn?: number;

  /**
   * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8... 64. (1 and even numbers to 64.)
   */
  ChannelsOut?: number;
}

export namespace RemixSettings {
  export const filterSensitiveLog = (obj: RemixSettings): any => ({
    ...obj,
  });
}

/**
 * Description of audio output
 */
export interface AudioDescription {
  /**
   * When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel.
   */
  AudioChannelTaggingSettings?: AudioChannelTaggingSettings;

  /**
   * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
   */
  AudioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
   */
  AudioSourceName?: string;

  /**
   * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
   */
  AudioType?: number;

  /**
   * When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.
   */
  AudioTypeControl?: AudioTypeControl | string;

  /**
   * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * MP3, Mp3Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings * VORBIS, VorbisSettings * OPUS, OpusSettings
   */
  CodecSettings?: AudioCodecSettings;

  /**
   * Specify the language for this audio output track. The service puts this language code into your output audio track when you set Language code control (AudioLanguageCodeControl) to Use configured (USE_CONFIGURED). The service also uses your specified custom language code when you set Language code control (AudioLanguageCodeControl) to Follow input (FOLLOW_INPUT), but your input file doesn't specify a language code. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify.
   */
  LanguageCodeControl?: AudioLanguageCodeControl | string;

  /**
   * Advanced audio remixing settings.
   */
  RemixSettings?: RemixSettings;

  /**
   * Specify a label for this output audio stream. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  StreamName?: string;
}

export namespace AudioDescription {
  export const filterSensitiveLog = (obj: AudioDescription): any => ({
    ...obj,
  });
}

export enum BurninSubtitleAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
}

export enum BurninSubtitleBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum BurninSubtitleFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum FontScript {
  AUTOMATIC = "AUTOMATIC",
  HANS = "HANS",
  HANT = "HANT",
}

export enum BurninSubtitleOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum BurninSubtitleShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum BurninSubtitleTeletextSpacing {
  FIXED_GRID = "FIXED_GRID",
  PROPORTIONAL = "PROPORTIONAL",
}

/**
 * Burn-In Destination Settings.
 */
export interface BurninDestinationSettings {
  /**
   * If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: BurninSubtitleAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: BurninSubtitleBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: BurninSubtitleFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. This is used to help determine the appropriate font for rendering burn-in captions.
   */
  FontScript?: FontScript | string;

  /**
   * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: number;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: BurninSubtitleOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: BurninSubtitleShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.
   */
  TeletextSpacing?: BurninSubtitleTeletextSpacing | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export namespace BurninDestinationSettings {
  export const filterSensitiveLog = (obj: BurninDestinationSettings): any => ({
    ...obj,
  });
}

export enum CaptionDestinationType {
  BURN_IN = "BURN_IN",
  DVB_SUB = "DVB_SUB",
  EMBEDDED = "EMBEDDED",
  EMBEDDED_PLUS_SCTE20 = "EMBEDDED_PLUS_SCTE20",
  IMSC = "IMSC",
  SCC = "SCC",
  SCTE20_PLUS_EMBEDDED = "SCTE20_PLUS_EMBEDDED",
  SMI = "SMI",
  SRT = "SRT",
  TELETEXT = "TELETEXT",
  TTML = "TTML",
  WEBVTT = "WEBVTT",
}

export enum DvbSubtitleAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
}

export enum DvbSubtitleBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubtitleFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubtitleOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubtitleShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubtitlingType {
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  STANDARD = "STANDARD",
}

export enum DvbSubtitleTeletextSpacing {
  FIXED_GRID = "FIXED_GRID",
  PROPORTIONAL = "PROPORTIONAL",
}

/**
 * DVB-Sub Destination Settings
 */
export interface DvbSubDestinationSettings {
  /**
   * If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: DvbSubtitleAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: DvbSubtitleBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: DvbSubtitleFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. This is used to help determine the appropriate font for rendering DVB-Sub captions.
   */
  FontScript?: FontScript | string;

  /**
   * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: number;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: DvbSubtitleOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: DvbSubtitleShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.
   */
  SubtitlingType?: DvbSubtitlingType | string;

  /**
   * Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.
   */
  TeletextSpacing?: DvbSubtitleTeletextSpacing | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export namespace DvbSubDestinationSettings {
  export const filterSensitiveLog = (obj: DvbSubDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
 */
export interface EmbeddedDestinationSettings {
  /**
   * Ignore this setting unless your input captions are SCC format and your output captions are embedded in the video stream. Specify a CC number for each captions channel in this output. If you have two channels, choose CC numbers that aren't in the same field. For example, choose 1 and 3. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   */
  Destination608ChannelNumber?: number;

  /**
   * Ignore this setting unless your input captions are SCC format and you want both 608 and 708 captions embedded in your output stream. Optionally, specify the 708 service number for each output captions channel. Choose a different number for each channel. To use this setting, also set Force 608 to 708 upconvert (Convert608To708) to Upconvert (UPCONVERT) in your input captions selector settings. If you choose to upconvert but don't specify a 708 service number, MediaConvert uses the number that you specify for CC channel number (destination608ChannelNumber) for the 708 service number. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   */
  Destination708ServiceNumber?: number;
}

export namespace EmbeddedDestinationSettings {
  export const filterSensitiveLog = (obj: EmbeddedDestinationSettings): any => ({
    ...obj,
  });
}

export enum ImscStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Settings specific to IMSC caption outputs.
 */
export interface ImscDestinationSettings {
  /**
   * Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.
   */
  StylePassthrough?: ImscStylePassthrough | string;
}

export namespace ImscDestinationSettings {
  export const filterSensitiveLog = (obj: ImscDestinationSettings): any => ({
    ...obj,
  });
}

export enum SccDestinationFramerate {
  FRAMERATE_23_97 = "FRAMERATE_23_97",
  FRAMERATE_24 = "FRAMERATE_24",
  FRAMERATE_25 = "FRAMERATE_25",
  FRAMERATE_29_97_DROPFRAME = "FRAMERATE_29_97_DROPFRAME",
  FRAMERATE_29_97_NON_DROPFRAME = "FRAMERATE_29_97_NON_DROPFRAME",
}

/**
 * Settings for SCC caption output.
 */
export interface SccDestinationSettings {
  /**
   * Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).
   */
  Framerate?: SccDestinationFramerate | string;
}

export namespace SccDestinationSettings {
  export const filterSensitiveLog = (obj: SccDestinationSettings): any => ({
    ...obj,
  });
}

export enum TeletextPageType {
  PAGE_TYPE_ADDL_INFO = "PAGE_TYPE_ADDL_INFO",
  PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE = "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE",
  PAGE_TYPE_INITIAL = "PAGE_TYPE_INITIAL",
  PAGE_TYPE_PROGRAM_SCHEDULE = "PAGE_TYPE_PROGRAM_SCHEDULE",
  PAGE_TYPE_SUBTITLE = "PAGE_TYPE_SUBTITLE",
}

/**
 * Settings for Teletext caption output
 */
export interface TeletextDestinationSettings {
  /**
   * Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.
   */
  PageNumber?: string;

  /**
   * Specify the page types for this Teletext page. If you don't specify a value here, the service sets the page type to the default value Subtitle (PAGE_TYPE_SUBTITLE). If you pass through the entire set of Teletext data, don't use this field. When you pass through a set of Teletext pages, your output has the same page types as your input.
   */
  PageTypes?: (TeletextPageType | string)[];
}

export namespace TeletextDestinationSettings {
  export const filterSensitiveLog = (obj: TeletextDestinationSettings): any => ({
    ...obj,
  });
}

export enum TtmlStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
 */
export interface TtmlDestinationSettings {
  /**
   * Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT) to the TTML output.
   */
  StylePassthrough?: TtmlStylePassthrough | string;
}

export namespace TtmlDestinationSettings {
  export const filterSensitiveLog = (obj: TtmlDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
 */
export interface CaptionDestinationSettings {
  /**
   * Burn-In Destination Settings.
   */
  BurninDestinationSettings?: BurninDestinationSettings;

  /**
   * Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Other options are embedded with SCTE-20, burn-in, DVB-sub, IMSC, SCC, SRT, teletext, TTML, and web-VTT. If you are using SCTE-20, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED) to create an output that complies with the SCTE-43 spec. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).
   */
  DestinationType?: CaptionDestinationType | string;

  /**
   * DVB-Sub Destination Settings
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * Settings specific to IMSC caption outputs.
   */
  ImscDestinationSettings?: ImscDestinationSettings;

  /**
   * Settings for SCC caption output.
   */
  SccDestinationSettings?: SccDestinationSettings;

  /**
   * Settings for Teletext caption output
   */
  TeletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
   */
  TtmlDestinationSettings?: TtmlDestinationSettings;
}

export namespace CaptionDestinationSettings {
  export const filterSensitiveLog = (obj: CaptionDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Description of Caption output
 */
export interface CaptionDescription {
  /**
   * Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector <N>", which denotes that the Nth Caption Selector will be used from each input.
   */
  CaptionSelectorName?: string;

  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  LanguageDescription?: string;
}

export namespace CaptionDescription {
  export const filterSensitiveLog = (obj: CaptionDescription): any => ({
    ...obj,
  });
}

/**
 * Caption Description for preset
 */
export interface CaptionDescriptionPreset {
  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  LanguageDescription?: string;
}

export namespace CaptionDescriptionPreset {
  export const filterSensitiveLog = (obj: CaptionDescriptionPreset): any => ({
    ...obj,
  });
}

/**
 * Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group.
 */
export interface CmafAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace CmafAdditionalManifest {
  export const filterSensitiveLog = (obj: CmafAdditionalManifest): any => ({
    ...obj,
  });
}

/**
 * Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface DashAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your DASH group is film-name.mpd. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.mpd.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace DashAdditionalManifest {
  export const filterSensitiveLog = (obj: DashAdditionalManifest): any => ({
    ...obj,
  });
}

/**
 * Describes an account-specific API endpoint.
 */
export interface Endpoint {
  /**
   * URL of endpoint
   */
  Url?: string;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

/**
 * Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface HlsAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace HlsAdditionalManifest {
  export const filterSensitiveLog = (obj: HlsAdditionalManifest): any => ({
    ...obj,
  });
}

export enum HlsAdMarkers {
  ELEMENTAL = "ELEMENTAL",
  ELEMENTAL_SCTE35 = "ELEMENTAL_SCTE35",
}

/**
 * Caption Language Mapping
 */
export interface HlsCaptionLanguageMapping {
  /**
   * Caption channel.
   */
  CaptionChannel?: number;

  /**
   * Specify the language for this captions channel, using the ISO 639-2 or ISO 639-3 three-letter language code
   */
  CustomLanguageCode?: string;

  /**
   * Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Caption language description.
   */
  LanguageDescription?: string;
}

export namespace HlsCaptionLanguageMapping {
  export const filterSensitiveLog = (obj: HlsCaptionLanguageMapping): any => ({
    ...obj,
  });
}

/**
 * Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.
 */
export interface HopDestination {
  /**
   * Optional. When you set up a job to use queue hopping, you can specify a different relative priority for the job in the destination queue. If you don't specify, the relative priority will remain the same as in the previous queue.
   */
  Priority?: number;

  /**
   * Optional unless the job is submitted on the default queue. When you set up a job to use queue hopping, you can specify a destination queue. This queue cannot be the original queue to which the job is submitted. If the original queue isn't the default queue and you don't specify the destination queue, the job will move to the default queue.
   */
  Queue?: string;

  /**
   * Required for setting up a job to use queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. Valid range is 1 to 1440 minutes, inclusive.
   */
  WaitMinutes?: number;
}

export namespace HopDestination {
  export const filterSensitiveLog = (obj: HopDestination): any => ({
    ...obj,
  });
}

/**
 * To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion).
 */
export interface Id3Insertion {
  /**
   * Use ID3 tag (Id3) to provide a tag value in base64-encode format.
   */
  Id3?: string;

  /**
   * Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format.
   */
  Timecode?: string;
}

export namespace Id3Insertion {
  export const filterSensitiveLog = (obj: Id3Insertion): any => ({
    ...obj,
  });
}

/**
 * Group of Audio Selectors
 */
export interface AudioSelectorGroup {
  /**
   * Name of an Audio Selector within the same input to include in the group.  Audio selector names are standardized, based on their order within the input (e.g., "Audio Selector 1"). The audio selector name parameter can be repeated to add any number of audio selectors to the group.
   */
  AudioSelectorNames?: string[];
}

export namespace AudioSelectorGroup {
  export const filterSensitiveLog = (obj: AudioSelectorGroup): any => ({
    ...obj,
  });
}

export enum AudioDefaultSelection {
  DEFAULT = "DEFAULT",
  NOT_DEFAULT = "NOT_DEFAULT",
}

export enum AudioSelectorType {
  LANGUAGE_CODE = "LANGUAGE_CODE",
  PID = "PID",
  TRACK = "TRACK",
}

/**
 * Selector for Audio
 */
export interface AudioSelector {
  /**
   * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
   */
  CustomLanguageCode?: string;

  /**
   * Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.
   */
  DefaultSelection?: AudioDefaultSelection | string;

  /**
   * Specifies audio data from an external file source.
   */
  ExternalAudioFileInput?: string;

  /**
   * Selects a specific language code from within an audio source.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specifies a time delta in milliseconds to offset the audio from the input video.
   */
  Offset?: number;

  /**
   * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
   */
  Pids?: number[];

  /**
   * Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If you are sending a JSON file, provide the program ID, which is part of the audio metadata. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.
   */
  ProgramSelection?: number;

  /**
   * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
   */
  RemixSettings?: RemixSettings;

  /**
   * Specifies the type of the audio selector.
   */
  SelectorType?: AudioSelectorType | string;

  /**
   * Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type "1,2,3" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, "tracks": [1,2,3].
   */
  Tracks?: number[];
}

export namespace AudioSelector {
  export const filterSensitiveLog = (obj: AudioSelector): any => ({
    ...obj,
  });
}

export enum AncillaryConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum AncillaryTerminateCaptions {
  DISABLED = "DISABLED",
  END_OF_INPUT = "END_OF_INPUT",
}

/**
 * Settings for ancillary captions source.
 */
export interface AncillarySourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: AncillaryConvert608To708 | string;

  /**
   * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
   */
  SourceAncillaryChannelNumber?: number;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   */
  TerminateCaptions?: AncillaryTerminateCaptions | string;
}

export namespace AncillarySourceSettings {
  export const filterSensitiveLog = (obj: AncillarySourceSettings): any => ({
    ...obj,
  });
}

/**
 * DVB Sub Source Settings
 */
export interface DvbSubSourceSettings {
  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   */
  Pid?: number;
}

export namespace DvbSubSourceSettings {
  export const filterSensitiveLog = (obj: DvbSubSourceSettings): any => ({
    ...obj,
  });
}

export enum EmbeddedConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum EmbeddedTerminateCaptions {
  DISABLED = "DISABLED",
  END_OF_INPUT = "END_OF_INPUT",
}

/**
 * Settings for embedded captions Source
 */
export interface EmbeddedSourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: EmbeddedConvert608To708 | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
   */
  Source608TrackNumber?: number;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   */
  TerminateCaptions?: EmbeddedTerminateCaptions | string;
}

export namespace EmbeddedSourceSettings {
  export const filterSensitiveLog = (obj: EmbeddedSourceSettings): any => ({
    ...obj,
  });
}

export enum FileSourceConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

/**
 * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction, using the settings Framerate numerator (framerateNumerator) and Framerate denominator (framerateDenominator). For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
 */
export interface CaptionSourceFramerate {
  /**
   * Specify the denominator of the fraction that represents the frame rate for the setting Caption source frame rate (CaptionSourceFramerate). Use this setting along with the setting Framerate numerator (framerateNumerator).
   */
  FramerateDenominator?: number;

  /**
   * Specify the numerator of the fraction that represents the frame rate for the setting Caption source frame rate (CaptionSourceFramerate). Use this setting along with the setting Framerate denominator (framerateDenominator).
   */
  FramerateNumerator?: number;
}

export namespace CaptionSourceFramerate {
  export const filterSensitiveLog = (obj: CaptionSourceFramerate): any => ({
    ...obj,
  });
}

/**
 * If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 */
export interface FileSourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: FileSourceConvert608To708 | string;

  /**
   * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction, using the settings Framerate numerator (framerateNumerator) and Framerate denominator (framerateDenominator). For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
   */
  Framerate?: CaptionSourceFramerate;

  /**
   * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', 'xml', and 'smi'.
   */
  SourceFile?: string;

  /**
   * Specifies a time delta in seconds to offset the captions from the source file.
   */
  TimeDelta?: number;
}

export namespace FileSourceSettings {
  export const filterSensitiveLog = (obj: FileSourceSettings): any => ({
    ...obj,
  });
}

export enum CaptionSourceType {
  ANCILLARY = "ANCILLARY",
  DVB_SUB = "DVB_SUB",
  EMBEDDED = "EMBEDDED",
  IMSC = "IMSC",
  NULL_SOURCE = "NULL_SOURCE",
  SCC = "SCC",
  SCTE20 = "SCTE20",
  SMI = "SMI",
  SRT = "SRT",
  STL = "STL",
  TELETEXT = "TELETEXT",
  TTML = "TTML",
}

/**
 * Settings specific to Teletext caption sources, including Page number.
 */
export interface TeletextSourceSettings {
  /**
   * Use Page Number (PageNumber) to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.
   */
  PageNumber?: string;
}

export namespace TeletextSourceSettings {
  export const filterSensitiveLog = (obj: TeletextSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
 */
export interface TrackSourceSettings {
  /**
   * Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector.
   */
  TrackNumber?: number;
}

export namespace TrackSourceSettings {
  export const filterSensitiveLog = (obj: TrackSourceSettings): any => ({
    ...obj,
  });
}

/**
 * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 */
export interface CaptionSourceSettings {
  /**
   * Settings for ancillary captions source.
   */
  AncillarySourceSettings?: AncillarySourceSettings;

  /**
   * DVB Sub Source Settings
   */
  DvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * Settings for embedded captions Source
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   */
  FileSourceSettings?: FileSourceSettings;

  /**
   * Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.
   */
  SourceType?: CaptionSourceType | string;

  /**
   * Settings specific to Teletext caption sources, including Page number.
   */
  TeletextSourceSettings?: TeletextSourceSettings;

  /**
   * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
   */
  TrackSourceSettings?: TrackSourceSettings;
}

export namespace CaptionSourceSettings {
  export const filterSensitiveLog = (obj: CaptionSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Set up captions in your outputs by first selecting them from your input here.
 */
export interface CaptionSelector {
  /**
   * The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   */
  CustomLanguageCode?: string;

  /**
   * The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   */
  SourceSettings?: CaptionSourceSettings;
}

export namespace CaptionSelector {
  export const filterSensitiveLog = (obj: CaptionSelector): any => ({
    ...obj,
  });
}

/**
 * Use Rectangle to identify a specific area of the video frame.
 */
export interface Rectangle {
  /**
   * Height of rectangle in pixels. Specify only even numbers.
   */
  Height?: number;

  /**
   * Width of rectangle in pixels. Specify only even numbers.
   */
  Width?: number;

  /**
   * The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.
   */
  X?: number;

  /**
   * The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.
   */
  Y?: number;
}

export namespace Rectangle {
  export const filterSensitiveLog = (obj: Rectangle): any => ({
    ...obj,
  });
}

export enum InputDeblockFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DecryptionMode {
  AES_CBC = "AES_CBC",
  AES_CTR = "AES_CTR",
  AES_GCM = "AES_GCM",
}

/**
 * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
 */
export interface InputDecryptionSettings {
  /**
   * Specify the encryption mode that you used to encrypt your input files.
   */
  DecryptionMode?: DecryptionMode | string;

  /**
   * Warning! Don't provide your encryption key in plaintext. Your job settings could be intercepted, making your encrypted content vulnerable. Specify the encrypted version of the data key that you used to encrypt your content. The data key must be encrypted by AWS Key Management Service (KMS). The key can be 128, 192, or 256 bits.
   */
  EncryptedDecryptionKey?: string;

  /**
   * Specify the initialization vector that you used when you encrypted your content before uploading it to Amazon S3. You can use a 16-byte initialization vector with any encryption mode. Or, you can use a 12-byte initialization vector with GCM or CTR. MediaConvert accepts only initialization vectors that are base64-encoded.
   */
  InitializationVector?: string;

  /**
   * Specify the AWS Region for AWS Key Management Service (KMS) that you used to encrypt your data key, if that Region is different from the one you are using for AWS Elemental MediaConvert.
   */
  KmsKeyRegion?: string;
}

export namespace InputDecryptionSettings {
  export const filterSensitiveLog = (obj: InputDecryptionSettings): any => ({
    ...obj,
  });
}

export enum InputDenoiseFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum InputFilterEnable {
  AUTO = "AUTO",
  DISABLE = "DISABLE",
  FORCE = "FORCE",
}

/**
 * Settings that specify how your still graphic overlay appears.
 */
export interface InsertableImage {
  /**
   * Specify the time, in milliseconds, for the image to remain on the output video. This duration includes fade-in time but not fade-out time.
   */
  Duration?: number;

  /**
   * Specify the length of time, in milliseconds, between the Start time that you specify for the image insertion and the time that the image appears at full opacity. Full opacity is the level that you specify for the opacity setting. If you don't specify a value for Fade-in, the image will appear abruptly at the overlay start time.
   */
  FadeIn?: number;

  /**
   * Specify the length of time, in milliseconds, between the end of the time that you have specified for the image overlay Duration and when the overlaid image has faded to total transparency. If you don't specify a value for Fade-out, the image will disappear abruptly at the end of the inserted image duration.
   */
  FadeOut?: number;

  /**
   * Specify the height of the inserted image in pixels. If you specify a value that's larger than the video resolution height, the service will crop your overlaid image to fit. To use the native height of the image, keep this setting blank.
   */
  Height?: number;

  /**
   * Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.
   */
  ImageInserterInput?: string;

  /**
   * Specify the distance, in pixels, between the inserted image and the left edge of the video frame. Required for any image overlay that you specify.
   */
  ImageX?: number;

  /**
   * Specify the distance, in pixels, between the overlaid image and the top edge of the video frame. Required for any image overlay that you specify.
   */
  ImageY?: number;

  /**
   * Specify how overlapping inserted images appear. Images with higher values for Layer appear on top of images with lower values for Layer.
   */
  Layer?: number;

  /**
   * Use Opacity (Opacity) to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.
   */
  Opacity?: number;

  /**
   * Specify the timecode of the frame that you want the overlay to first appear on. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format. Remember to take into account your timecode source settings.
   */
  StartTime?: string;

  /**
   * Specify the width of the inserted image in pixels. If you specify a value that's larger than the video resolution width, the service will crop your overlaid image to fit. To use the native width of the image, keep this setting blank.
   */
  Width?: number;
}

export namespace InsertableImage {
  export const filterSensitiveLog = (obj: InsertableImage): any => ({
    ...obj,
  });
}

/**
 * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default.
 */
export interface ImageInserter {
  /**
   * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
   */
  InsertableImages?: InsertableImage[];
}

export namespace ImageInserter {
  export const filterSensitiveLog = (obj: ImageInserter): any => ({
    ...obj,
  });
}

/**
 * To transcode only portions of your input (clips), include one Input clipping (one instance of InputClipping in the JSON job file) for each input clip. All input clips you specify will be included in every output of the job.
 */
export interface InputClipping {
  /**
   * Set End timecode (EndTimecode) to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings (InputTimecodeSource). For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00.
   */
  EndTimecode?: string;

  /**
   * Set Start timecode (StartTimecode) to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00.
   */
  StartTimecode?: string;
}

export namespace InputClipping {
  export const filterSensitiveLog = (obj: InputClipping): any => ({
    ...obj,
  });
}

export enum InputScanType {
  AUTO = "AUTO",
  PSF = "PSF",
}

export enum InputPsiControl {
  IGNORE_PSI = "IGNORE_PSI",
  USE_PSI = "USE_PSI",
}

export enum InputTimecodeSource {
  EMBEDDED = "EMBEDDED",
  SPECIFIEDSTART = "SPECIFIEDSTART",
  ZEROBASED = "ZEROBASED",
}

export enum AlphaBehavior {
  DISCARD = "DISCARD",
  REMAP_TO_LUMA = "REMAP_TO_LUMA",
}

export enum ColorSpace {
  FOLLOW = "FOLLOW",
  HDR10 = "HDR10",
  HLG_2020 = "HLG_2020",
  REC_601 = "REC_601",
  REC_709 = "REC_709",
}

export enum ColorSpaceUsage {
  FALLBACK = "FALLBACK",
  FORCE = "FORCE",
}

/**
 * Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator.
 */
export interface Hdr10Metadata {
  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryY?: number;

  /**
   * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter.  This setting doesn't have a default value; you must specify a value that is suitable for the content.
   */
  MaxContentLightLevel?: number;

  /**
   * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   */
  MaxFrameAverageLightLevel?: number;

  /**
   * Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.
   */
  MaxLuminance?: number;

  /**
   * Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter
   */
  MinLuminance?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointY?: number;
}

export namespace Hdr10Metadata {
  export const filterSensitiveLog = (obj: Hdr10Metadata): any => ({
    ...obj,
  });
}

export enum InputRotate {
  AUTO = "AUTO",
  DEGREES_180 = "DEGREES_180",
  DEGREES_270 = "DEGREES_270",
  DEGREES_90 = "DEGREES_90",
  DEGREE_0 = "DEGREE_0",
}

/**
 * Selector for video.
 */
export interface VideoSelector {
  /**
   * Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.
   */
  AlphaBehavior?: AlphaBehavior | string;

  /**
   * If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value Follow (FOLLOW). The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate, choose Force HDR 10 (FORCE_HDR10) here and specify correct values in the input HDR 10 metadata (Hdr10Metadata) settings. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  ColorSpace?: ColorSpace | string;

  /**
   * There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.
   */
  ColorSpaceUsage?: ColorSpaceUsage | string;

  /**
   * Use these settings to provide HDR 10 metadata that is missing or inaccurate in your input video. Appropriate values vary depending on the input video and must be provided by a color grader. The color grader generates these values during the HDR 10 mastering process. The valid range for each of these settings is 0 to 50,000. Each increment represents 0.00002 in CIE1931 color coordinate. Related settings - When you specify these values, you must also set Color space (ColorSpace) to HDR 10 (HDR10). To specify whether the the values you specify here take precedence over the values in the metadata of your input file, set Color space usage (ColorSpaceUsage). To specify whether color metadata is included in an output, set Color metadata (ColorMetadata). For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  Hdr10Metadata?: Hdr10Metadata;

  /**
   * Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
   */
  Pid?: number;

  /**
   * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
   */
  ProgramNumber?: number;

  /**
   * Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.
   */
  Rotate?: InputRotate | string;
}

export namespace VideoSelector {
  export const filterSensitiveLog = (obj: VideoSelector): any => ({
    ...obj,
  });
}

/**
 * Specifies media input
 */
export interface Input {
  /**
   * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
   */
  AudioSelectorGroups?: { [key: string]: AudioSelectorGroup };

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   */
  AudioSelectors?: { [key: string]: AudioSelector };

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.
   */
  CaptionSelectors?: { [key: string]: CaptionSelector };

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: Rectangle;

  /**
   * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
   */
  DecryptionSettings?: InputDecryptionSettings;

  /**
   * Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. If your input format is IMF, specify your input by providing the path to your CPL. For example, "s3://bucket/vf/cpl.xml". If the CPL is in an incomplete IMP, make sure to use *Supplemental IMPs* (SupplementalImps) to specify any supplemental IMPs that contain assets referenced by the CPL.
   */
  FileInput?: string;

  /**
   * Specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The input is filtered regardless of input type.
   */
  FilterEnable?: InputFilterEnable | string;

  /**
   * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
   */
  FilterStrength?: number;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: InputClipping[];

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   */
  InputScanType?: InputScanType | string;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: Rectangle;

  /**
   * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   */
  ProgramNumber?: number;

  /**
   * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
   */
  PsiControl?: InputPsiControl | string;

  /**
   * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
   */
  SupplementalImps?: string[];

  /**
   * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeSource?: InputTimecodeSource | string;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeStart?: string;

  /**
   * Selector for video.
   */
  VideoSelector?: VideoSelector;
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

/**
 * Specified video input in a template.
 */
export interface InputTemplate {
  /**
   * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
   */
  AudioSelectorGroups?: { [key: string]: AudioSelectorGroup };

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   */
  AudioSelectors?: { [key: string]: AudioSelector };

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.
   */
  CaptionSelectors?: { [key: string]: CaptionSelector };

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: Rectangle;

  /**
   * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The input is filtered regardless of input type.
   */
  FilterEnable?: InputFilterEnable | string;

  /**
   * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
   */
  FilterStrength?: number;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: InputClipping[];

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   */
  InputScanType?: InputScanType | string;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: Rectangle;

  /**
   * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   */
  ProgramNumber?: number;

  /**
   * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
   */
  PsiControl?: InputPsiControl | string;

  /**
   * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeSource?: InputTimecodeSource | string;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeStart?: string;

  /**
   * Selector for video.
   */
  VideoSelector?: VideoSelector;
}

export namespace InputTemplate {
  export const filterSensitiveLog = (obj: InputTemplate): any => ({
    ...obj,
  });
}

export enum AccelerationMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  PREFERRED = "PREFERRED",
}

/**
 * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
 */
export interface AccelerationSettings {
  /**
   * Specify the conditions when the service will run your job with accelerated transcoding.
   */
  Mode: AccelerationMode | string | undefined;
}

export namespace AccelerationSettings {
  export const filterSensitiveLog = (obj: AccelerationSettings): any => ({
    ...obj,
  });
}

export enum AccelerationStatus {
  ACCELERATED = "ACCELERATED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_ACCELERATED = "NOT_ACCELERATED",
  NOT_APPLICABLE = "NOT_APPLICABLE",
}

export enum BillingTagsSource {
  JOB = "JOB",
  JOB_TEMPLATE = "JOB_TEMPLATE",
  PRESET = "PRESET",
  QUEUE = "QUEUE",
}

export enum JobPhase {
  PROBING = "PROBING",
  TRANSCODING = "TRANSCODING",
  UPLOADING = "UPLOADING",
}

/**
 * Provides messages from the service about jobs that you have already successfully submitted.
 */
export interface JobMessages {
  /**
   * List of messages that are informational only and don't indicate a problem with your job.
   */
  Info?: string[];

  /**
   * List of messages that warn about conditions that might cause your job not to run or to fail.
   */
  Warning?: string[];
}

export namespace JobMessages {
  export const filterSensitiveLog = (obj: JobMessages): any => ({
    ...obj,
  });
}

/**
 * Contains details about the output's video stream
 */
export interface VideoDetail {
  /**
   * Height in pixels for the output
   */
  HeightInPx?: number;

  /**
   * Width in pixels for the output
   */
  WidthInPx?: number;
}

export namespace VideoDetail {
  export const filterSensitiveLog = (obj: VideoDetail): any => ({
    ...obj,
  });
}

/**
 * Details regarding output
 */
export interface OutputDetail {
  /**
   * Duration in milliseconds
   */
  DurationInMs?: number;

  /**
   * Contains details about the output's video stream
   */
  VideoDetails?: VideoDetail;
}

export namespace OutputDetail {
  export const filterSensitiveLog = (obj: OutputDetail): any => ({
    ...obj,
  });
}

/**
 * Contains details about the output groups specified in the job settings.
 */
export interface OutputGroupDetail {
  /**
   * Details about the output
   */
  OutputDetails?: OutputDetail[];
}

export namespace OutputGroupDetail {
  export const filterSensitiveLog = (obj: OutputGroupDetail): any => ({
    ...obj,
  });
}

/**
 * Description of the source and destination queues between which the job has moved, along with the timestamp of the move
 */
export interface QueueTransition {
  /**
   * The queue that the job was on after the transition.
   */
  DestinationQueue?: string;

  /**
   * The queue that the job was on before the transition.
   */
  SourceQueue?: string;

  /**
   * The time, in Unix epoch format, that the job moved from the source queue to the destination queue.
   */
  Timestamp?: Date;
}

export namespace QueueTransition {
  export const filterSensitiveLog = (obj: QueueTransition): any => ({
    ...obj,
  });
}

/**
 * Settings for Avail Blanking
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: string;
}

export namespace AvailBlanking {
  export const filterSensitiveLog = (obj: AvailBlanking): any => ({
    ...obj,
  });
}

/**
 * ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025.
 */
export interface EsamManifestConfirmConditionNotification {
  /**
   * Provide your ESAM ManifestConfirmConditionNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the Manifest Conditioning instructions in the message that you supply.
   */
  MccXml?: string;
}

export namespace EsamManifestConfirmConditionNotification {
  export const filterSensitiveLog = (obj: EsamManifestConfirmConditionNotification): any => ({
    ...obj,
  });
}

/**
 * ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025.
 */
export interface EsamSignalProcessingNotification {
  /**
   * Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the signal processing instructions in the message that you supply. Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. For your MPEG2-TS file outputs, if you want the service to place SCTE-35 markers at the insertion points you specify in the XML document, you must also enable SCTE-35 ESAM (scte35Esam). Note that you can either specify an ESAM XML document or enable SCTE-35 passthrough. You can't do both.
   */
  SccXml?: string;
}

export namespace EsamSignalProcessingNotification {
  export const filterSensitiveLog = (obj: EsamSignalProcessingNotification): any => ({
    ...obj,
  });
}

/**
 * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
 */
export interface EsamSettings {
  /**
   * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML (mccXml).
   */
  ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;

  /**
   * Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.
   */
  ResponseSignalPreroll?: number;

  /**
   * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML (sccXml).
   */
  SignalProcessingNotification?: EsamSignalProcessingNotification;
}

export namespace EsamSettings {
  export const filterSensitiveLog = (obj: EsamSettings): any => ({
    ...obj,
  });
}

/**
 * For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video.
 */
export interface MotionImageInsertionFramerate {
  /**
   * The bottom of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 1.
   */
  FramerateDenominator?: number;

  /**
   * The top of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 24.
   */
  FramerateNumerator?: number;
}

export namespace MotionImageInsertionFramerate {
  export const filterSensitiveLog = (obj: MotionImageInsertionFramerate): any => ({
    ...obj,
  });
}

export enum MotionImageInsertionMode {
  MOV = "MOV",
  PNG = "PNG",
}

/**
 * Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.
 */
export interface MotionImageInsertionOffset {
  /**
   * Set the distance, in pixels, between the overlay and the left edge of the video frame.
   */
  ImageX?: number;

  /**
   * Set the distance, in pixels, between the overlay and the top edge of the video frame.
   */
  ImageY?: number;
}

export namespace MotionImageInsertionOffset {
  export const filterSensitiveLog = (obj: MotionImageInsertionOffset): any => ({
    ...obj,
  });
}

export enum MotionImagePlayback {
  ONCE = "ONCE",
  REPEAT = "REPEAT",
}

/**
 * Overlay motion graphics on top of your video at the time that you specify.
 */
export interface MotionImageInserter {
  /**
   * If your motion graphic asset is a .mov file, keep this setting unspecified. If your motion graphic asset is a series of .png files, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. Make sure that the number of images in your series matches the frame rate and your intended overlay duration. For example, if you want a 30-second overlay at 30 fps, you should have 900 .png images. This overlay frame rate doesn't need to match the frame rate of the underlying video.
   */
  Framerate?: MotionImageInsertionFramerate;

  /**
   * Specify the .mov file or series of .png files that you want to overlay on your video. For .png files, provide the file name of the first file in the series. Make sure that the names of the .png files end with sequential numbers that specify the order that they are played in. For example, overlay_000.png, overlay_001.png, overlay_002.png, and so on. The sequence must start at zero, and each image file name must have the same number of digits. Pad your initial file names with enough zeros to complete the sequence. For example, if the first image is overlay_0.png, there can be only 10 images in the sequence, with the last image being overlay_9.png. But if the first image is overlay_00.png, there can be 100 images in the sequence.
   */
  Input?: string;

  /**
   * Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.
   */
  InsertionMode?: MotionImageInsertionMode | string;

  /**
   * Use Offset to specify the placement of your motion graphic overlay on the video frame. Specify in pixels, from the upper-left corner of the frame. If you don't specify an offset, the service scales your overlay to the full size of the frame. Otherwise, the service inserts the overlay at its native resolution and scales the size up or down with any video scaling.
   */
  Offset?: MotionImageInsertionOffset;

  /**
   * Specify whether your motion graphic overlay repeats on a loop or plays only once.
   */
  Playback?: MotionImagePlayback | string;

  /**
   * Specify when the motion overlay begins. Use timecode format (HH:MM:SS:FF or HH:MM:SS;FF). Make sure that the timecode you provide here takes into account how you have set up your timecode configuration under both job settings and input settings. The simplest way to do that is to set both to start at 0. If you need to set up your job to follow timecodes embedded in your source that don't start at zero, make sure that you specify a start time that is after the first embedded timecode. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-timecode.html Find job-wide and input timecode configuration settings in your JSON job settings specification at settings>timecodeConfig>source and settings>inputs>timecodeSource.
   */
  StartTime?: string;
}

export namespace MotionImageInserter {
  export const filterSensitiveLog = (obj: MotionImageInserter): any => ({
    ...obj,
  });
}

/**
 * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
 */
export interface NielsenConfiguration {
  /**
   * Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.
   */
  BreakoutCode?: number;

  /**
   * Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.
   */
  DistributorId?: string;
}

export namespace NielsenConfiguration {
  export const filterSensitiveLog = (obj: NielsenConfiguration): any => ({
    ...obj,
  });
}

export enum NielsenActiveWatermarkProcessType {
  CBET = "CBET",
  NAES2_AND_NW = "NAES2_AND_NW",
  NAES2_AND_NW_AND_CBET = "NAES2_AND_NW_AND_CBET",
}

export enum NielsenSourceWatermarkStatusType {
  CLEAN = "CLEAN",
  WATERMARKED = "WATERMARKED",
}

export enum NielsenUniqueTicPerAudioTrackType {
  RESERVE_UNIQUE_TICS_PER_TRACK = "RESERVE_UNIQUE_TICS_PER_TRACK",
  SAME_TICS_PER_TRACK = "SAME_TICS_PER_TRACK",
}

/**
 * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that  MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to  specifying these values, you also need to set up your cloud TIC server. These settings apply to  every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]
 */
export interface NielsenNonLinearWatermarkSettings {
  /**
   * Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW (NAES2_AND_NW), you must provide a value for the setting SID (sourceId). When you choose CBET (CBET), you must provide a value for the setting CSID (cbetSourceId). When you choose NAES 2, NW, and CBET (NAES2_AND_NW_AND_CBET), you must provide values for both of these settings.
   */
  ActiveWatermarkProcess?: NielsenActiveWatermarkProcessType | string;

  /**
   * Optional. Use this setting when you want the service to include an ADI file in the Nielsen  metadata .zip file. To provide an ADI file, store it in Amazon S3 and provide a URL to it  here. The URL should be in the following format: S3://bucket/path/ADI-file. For more information about the metadata .zip file, see the setting Metadata destination (metadataDestination).
   */
  AdiFilename?: string;

  /**
   * Use the asset ID that you provide to Nielsen to uniquely identify this asset. Required for all Nielsen non-linear watermarking.
   */
  AssetId?: string;

  /**
   * Use the asset name that you provide to Nielsen for this asset. Required for all Nielsen non-linear watermarking.
   */
  AssetName?: string;

  /**
   * Use the CSID that Nielsen provides to you. This CBET source ID should be unique to your Nielsen account but common to all of your output assets that have CBET watermarking. Required when you choose a value for the setting Watermark types (ActiveWatermarkProcess) that includes CBET.
   */
  CbetSourceId?: string;

  /**
   * Optional. If this asset uses an episode ID with Nielsen, provide it here.
   */
  EpisodeId?: string;

  /**
   * Specify the Amazon S3 location where you want MediaConvert to save your Nielsen non-linear metadata .zip file. This Amazon S3 bucket must be in the same Region as the one where you do your MediaConvert transcoding. If you want to include an ADI file in this .zip file, use the setting ADI file (adiFilename) to specify it. MediaConvert delivers the Nielsen metadata .zip files only to your metadata destination Amazon S3 bucket. It doesn't deliver the .zip files to Nielsen. You are responsible for delivering the metadata .zip files to Nielsen.
   */
  MetadataDestination?: string;

  /**
   * Use the SID that Nielsen provides to you. This source ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking. This ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking.
   */
  SourceId?: number;

  /**
   * Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked (WATERMARKED), the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already  have non-linear Nielsen watermarks.
   */
  SourceWatermarkStatus?: NielsenSourceWatermarkStatusType | string;

  /**
   * Specify the endpoint for the TIC server that you have deployed and configured in the AWS Cloud. Required for all Nielsen non-linear watermarking. MediaConvert can't connect directly to a TIC server. Instead, you must use API Gateway to provide a RESTful interface between MediaConvert and a TIC server that you deploy in your AWS account. For more information on deploying a TIC server in your AWS account and the required API Gateway, contact Nielsen support.
   */
  TicServerUrl?: string;

  /**
   * To create assets that have the same TIC values in each audio track, keep the default value Share TICs (SAME_TICS_PER_TRACK). To create assets that have unique TIC values for each audio track, choose Use unique TICs (RESERVE_UNIQUE_TICS_PER_TRACK).
   */
  UniqueTicPerAudioTrack?: NielsenUniqueTicPerAudioTrackType | string;
}

export namespace NielsenNonLinearWatermarkSettings {
  export const filterSensitiveLog = (obj: NielsenNonLinearWatermarkSettings): any => ({
    ...obj,
  });
}

/**
 * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
 */
export interface AutomatedAbrSettings {
  /**
   * Optional. The maximum target bit rate used in your automated ABR stack. Use this value to set an upper limit on the bandwidth consumed by the highest-quality rendition. This is the rendition that is delivered to viewers with the fastest internet connections. If you don't specify a value, MediaConvert uses 8,000,000 (8 mb/s) by default.
   */
  MaxAbrBitrate?: number;

  /**
   * Optional. The maximum number of renditions that MediaConvert will create in your automated ABR stack. The number of renditions is determined automatically, based on analysis of each job, but will never exceed this limit. When you set this to Auto in the console, which is equivalent to excluding it from your JSON job specification, MediaConvert defaults to a limit of 15.
   */
  MaxRenditions?: number;

  /**
   * Optional. The minimum target bitrate used in your automated ABR stack. Use this value to set a lower limit on the bitrate of video delivered to viewers with slow internet connections. If you don't specify a value, MediaConvert uses 600,000 (600 kb/s) by default.
   */
  MinAbrBitrate?: number;
}

export namespace AutomatedAbrSettings {
  export const filterSensitiveLog = (obj: AutomatedAbrSettings): any => ({
    ...obj,
  });
}

/**
 * Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
 */
export interface AutomatedEncodingSettings {
  /**
   * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
   */
  AbrSettings?: AutomatedAbrSettings;
}

export namespace AutomatedEncodingSettings {
  export const filterSensitiveLog = (obj: AutomatedEncodingSettings): any => ({
    ...obj,
  });
}

export enum CmafClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum CmafCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381",
}

export enum S3ObjectCannedAcl {
  AUTHENTICATED_READ = "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ = "BUCKET_OWNER_READ",
  PUBLIC_READ = "PUBLIC_READ",
}

/**
 * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
 */
export interface S3DestinationAccessControl {
  /**
   * Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.
   */
  CannedAcl?: S3ObjectCannedAcl | string;
}

export namespace S3DestinationAccessControl {
  export const filterSensitiveLog = (obj: S3DestinationAccessControl): any => ({
    ...obj,
  });
}

export enum S3ServerSideEncryptionType {
  SERVER_SIDE_ENCRYPTION_KMS = "SERVER_SIDE_ENCRYPTION_KMS",
  SERVER_SIDE_ENCRYPTION_S3 = "SERVER_SIDE_ENCRYPTION_S3",
}

/**
 * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
 */
export interface S3EncryptionSettings {
  /**
   * Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting  KMS ARN (kmsKeyArn).
   */
  EncryptionType?: S3ServerSideEncryptionType | string;

  /**
   * Optionally, specify the customer master key (CMK) that you want to use to encrypt the data key that AWS uses to encrypt your output content. Enter the Amazon Resource Name (ARN) of the CMK. To use this setting, you must also set Server-side encryption (S3ServerSideEncryptionType) to AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). If you set Server-side encryption to AWS KMS but don't specify a CMK here, AWS uses the AWS managed CMK associated with Amazon S3.
   */
  KmsKeyArn?: string;
}

export namespace S3EncryptionSettings {
  export const filterSensitiveLog = (obj: S3EncryptionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings associated with S3 destination
 */
export interface S3DestinationSettings {
  /**
   * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
   */
  AccessControl?: S3DestinationAccessControl;

  /**
   * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
   */
  Encryption?: S3EncryptionSettings;
}

export namespace S3DestinationSettings {
  export const filterSensitiveLog = (obj: S3DestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Settings associated with the destination. Will vary based on the type of destination
 */
export interface DestinationSettings {
  /**
   * Settings associated with S3 destination
   */
  S3Settings?: S3DestinationSettings;
}

export namespace DestinationSettings {
  export const filterSensitiveLog = (obj: DestinationSettings): any => ({
    ...obj,
  });
}

export enum CmafEncryptionType {
  AES_CTR = "AES_CTR",
  SAMPLE_AES = "SAMPLE_AES",
}

export enum CmafInitializationVectorInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

/**
 * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
 */
export interface SpekeKeyProviderCmaf {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   */
  CertificateArn?: string;

  /**
   * Specify the DRM system IDs that you want signaled in the DASH manifest that MediaConvert creates as part of this CMAF package. The DASH manifest can currently signal up to three system IDs. For more information, see https://dashif.org/identifiers/content_protection/.
   */
  DashSignaledSystemIds?: string[];

  /**
   * Specify the DRM system ID that you want signaled in the HLS manifest that MediaConvert creates as part of this CMAF package. The HLS manifest can currently signal only one system ID. For more information, see https://dashif.org/identifiers/content_protection/.
   */
  HlsSignaledSystemIds?: string[];

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   */
  ResourceId?: string;

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   */
  Url?: string;
}

export namespace SpekeKeyProviderCmaf {
  export const filterSensitiveLog = (obj: SpekeKeyProviderCmaf): any => ({
    ...obj,
  });
}

/**
 * Use these settings to set up encryption with a static key provider.
 */
export interface StaticKeyProvider {
  /**
   * Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.
   */
  KeyFormat?: string;

  /**
   * Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value (StaticKeyValue).
   */
  StaticKeyValue?: string;

  /**
   * Relates to DRM implementation. The location of the license server used for protecting content.
   */
  Url?: string;
}

export namespace StaticKeyProvider {
  export const filterSensitiveLog = (obj: StaticKeyProvider): any => ({
    ...obj,
  });
}

export enum CmafKeyProviderType {
  SPEKE = "SPEKE",
  STATIC_KEY = "STATIC_KEY",
}

/**
 * Settings for CMAF encryption
 */
export interface CmafEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   */
  ConstantInitializationVector?: string;

  /**
   * Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR).
   */
  EncryptionMethod?: CmafEncryptionType | string;

  /**
   * When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.
   */
  InitializationVectorInManifest?: CmafInitializationVectorInManifest | string;

  /**
   * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProviderCmaf;

  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: StaticKeyProvider;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   */
  Type?: CmafKeyProviderType | string;
}

export namespace CmafEncryptionSettings {
  export const filterSensitiveLog = (obj: CmafEncryptionSettings): any => ({
    ...obj,
  });
}

export enum CmafManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

export enum CmafManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER",
}

export enum CmafMpdProfile {
  MAIN_PROFILE = "MAIN_PROFILE",
  ON_DEMAND_PROFILE = "ON_DEMAND_PROFILE",
}

export enum CmafSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum CmafStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum CmafWriteDASHManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum CmafWriteHLSManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum CmafWriteSegmentTimelineInRepresentation {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
 */
export interface CmafGroupSettings {
  /**
   * By default, the service creates one top-level .m3u8 HLS manifest and one top -level .mpd DASH manifest for each CMAF output group in your job. These default manifests reference every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here. For each additional manifest that you specify, the service creates one HLS manifest and one DASH manifest.
   */
  AdditionalManifests?: CmafAdditionalManifest[];

  /**
   * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

  /**
   * Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.
   */
  ClientCache?: CmafClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: CmafCodecSpecification | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: CmafEncryptionSettings;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  FragmentLength?: number;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: CmafManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: CmafManifestDurationFormat | string;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
   */
  MpdProfile?: CmafMpdProfile | string;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: CmafSegmentControl | string;

  /**
   * Use this setting to specify the length, in seconds, of each individual CMAF segment. This value applies to the whole package; that is, to every output in the output group. Note that segments end on the first keyframe after this number of seconds, so the actual segment length might be slightly longer. If you set Segment control (CmafSegmentControl) to single file, the service puts the content of each output in a single file that has metadata that marks these segments. If you set it to segmented files, the service creates multiple files for each output, each with the content of one segment.
   */
  SegmentLength?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: CmafStreamInfResolution | string;

  /**
   * When set to ENABLED, a DASH MPD manifest will be generated for this output.
   */
  WriteDashManifest?: CmafWriteDASHManifest | string;

  /**
   * When set to ENABLED, an Apple HLS manifest will be generated for this output.
   */
  WriteHlsManifest?: CmafWriteHLSManifest | string;

  /**
   * When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.
   */
  WriteSegmentTimelineInRepresentation?: CmafWriteSegmentTimelineInRepresentation | string;
}

export namespace CmafGroupSettings {
  export const filterSensitiveLog = (obj: CmafGroupSettings): any => ({
    ...obj,
  });
}

export enum DashIsoPlaybackDeviceCompatibility {
  CENC_V1 = "CENC_V1",
  UNENCRYPTED_SEI = "UNENCRYPTED_SEI",
}

/**
 * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
 */
export interface SpekeKeyProvider {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   */
  CertificateArn?: string;

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   */
  ResourceId?: string;

  /**
   * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id. See
   *  https://dashif.org/identifiers/content_protection/ for more details.
   */
  SystemIds?: string[];

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   */
  Url?: string;
}

export namespace SpekeKeyProvider {
  export const filterSensitiveLog = (obj: SpekeKeyProvider): any => ({
    ...obj,
  });
}

/**
 * Specifies DRM settings for DASH outputs.
 */
export interface DashIsoEncryptionSettings {
  /**
   * This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.
   */
  PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility | string;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;
}

export namespace DashIsoEncryptionSettings {
  export const filterSensitiveLog = (obj: DashIsoEncryptionSettings): any => ({
    ...obj,
  });
}

export enum DashIsoHbbtvCompliance {
  HBBTV_1_5 = "HBBTV_1_5",
  NONE = "NONE",
}

export enum DashIsoMpdProfile {
  MAIN_PROFILE = "MAIN_PROFILE",
  ON_DEMAND_PROFILE = "ON_DEMAND_PROFILE",
}

export enum DashIsoSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum DashIsoWriteSegmentTimelineInRepresentation {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
 */
export interface DashIsoGroupSettings {
  /**
   * By default, the service creates one .mpd DASH manifest for each DASH ISO output group in your job. This default manifest references every output in the output group. To create additional DASH manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: DashAdditionalManifest[];

  /**
   * A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: DashIsoEncryptionSettings;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  FragmentLength?: number;

  /**
   * Supports HbbTV specification as indicated
   */
  HbbtvCompliance?: DashIsoHbbtvCompliance | string;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
   */
  MpdProfile?: DashIsoMpdProfile | string;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: DashIsoSegmentControl | string;

  /**
   * Length of mpd segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer. When Emit Single File is checked, the segmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  SegmentLength?: number;

  /**
   * If you get an HTTP error in the 400 range when you play back your DASH output, enable this setting and run your transcoding job again. When you enable this setting, the service writes precise segment durations in the DASH manifest. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When you don't enable this setting, the service writes approximate segment durations in your DASH manifest.
   */
  WriteSegmentTimelineInRepresentation?: DashIsoWriteSegmentTimelineInRepresentation | string;
}

export namespace DashIsoGroupSettings {
  export const filterSensitiveLog = (obj: DashIsoGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
 */
export interface FileGroupSettings {
  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;
}

export namespace FileGroupSettings {
  export const filterSensitiveLog = (obj: FileGroupSettings): any => ({
    ...obj,
  });
}

export enum HlsAudioOnlyHeader {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsCaptionLanguageSetting {
  INSERT = "INSERT",
  NONE = "NONE",
  OMIT = "OMIT",
}

export enum HlsClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381",
}

export enum HlsDirectoryStructure {
  SINGLE_DIRECTORY = "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM = "SUBDIRECTORY_PER_STREAM",
}

export enum HlsEncryptionType {
  AES128 = "AES128",
  SAMPLE_AES = "SAMPLE_AES",
}

export enum HlsInitializationVectorInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsOfflineEncrypted {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsKeyProviderType {
  SPEKE = "SPEKE",
  STATIC_KEY = "STATIC_KEY",
}

/**
 * Settings for HLS encryption
 */
export interface HlsEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   */
  ConstantInitializationVector?: string;

  /**
   * Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.
   */
  EncryptionMethod?: HlsEncryptionType | string;

  /**
   * The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.
   */
  InitializationVectorInManifest?: HlsInitializationVectorInManifest | string;

  /**
   * Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.
   */
  OfflineEncrypted?: HlsOfflineEncrypted | string;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;

  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: StaticKeyProvider;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   */
  Type?: HlsKeyProviderType | string;
}

export namespace HlsEncryptionSettings {
  export const filterSensitiveLog = (obj: HlsEncryptionSettings): any => ({
    ...obj,
  });
}

export enum HlsManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

export enum HlsManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER",
}

export enum HlsOutputSelection {
  MANIFESTS_AND_SEGMENTS = "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY = "SEGMENTS_ONLY",
}

export enum HlsProgramDateTime {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum HlsStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL",
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
 */
export interface HlsGroupSettings {
  /**
   * Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.
   */
  AdMarkers?: (HlsAdMarkers | string)[];

  /**
   * By default, the service creates one top-level .m3u8 HLS manifest for each HLS output group in your job. This default manifest references every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: HlsAdditionalManifest[];

  /**
   * Ignore this setting unless you are using FairPlay DRM with Verimatrix and you encounter playback issues. Keep the default value, Include (INCLUDE), to output audio-only headers. Choose Exclude (EXCLUDE) to remove the audio-only headers from your audio segments.
   */
  AudioOnlyHeader?: HlsAudioOnlyHeader | string;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrl?: string;

  /**
   * Language to be used on Caption outputs
   */
  CaptionLanguageMappings?: HlsCaptionLanguageMapping[];

  /**
   * Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | string;

  /**
   * Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.
   */
  ClientCache?: HlsClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: HlsCodecSpecification | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * Indicates whether segments should be placed in subdirectories.
   */
  DirectoryStructure?: HlsDirectoryStructure | string;

  /**
   * DRM settings.
   */
  Encryption?: HlsEncryptionSettings;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: HlsManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | string;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * Indicates whether the .m3u8 manifest file should be generated for this HLS output group.
   */
  OutputSelection?: HlsOutputSelection | string;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.
   */
  ProgramDateTime?: HlsProgramDateTime | string;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.
   */
  SegmentControl?: HlsSegmentControl | string;

  /**
   * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
   */
  SegmentLength?: number;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: HlsStreamInfResolution | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;
}

export namespace HlsGroupSettings {
  export const filterSensitiveLog = (obj: HlsGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface MsSmoothAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your Microsoft Smooth group is film-name.ismv. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.ismv.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace MsSmoothAdditionalManifest {
  export const filterSensitiveLog = (obj: MsSmoothAdditionalManifest): any => ({
    ...obj,
  });
}

export enum MsSmoothAudioDeduplication {
  COMBINE_DUPLICATE_STREAMS = "COMBINE_DUPLICATE_STREAMS",
  NONE = "NONE",
}

/**
 * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
 */
export interface MsSmoothEncryptionSettings {
  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;
}

export namespace MsSmoothEncryptionSettings {
  export const filterSensitiveLog = (obj: MsSmoothEncryptionSettings): any => ({
    ...obj,
  });
}

export enum MsSmoothManifestEncoding {
  UTF16 = "UTF16",
  UTF8 = "UTF8",
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
 */
export interface MsSmoothGroupSettings {
  /**
   * By default, the service creates one .ism Microsoft Smooth Streaming manifest for each Microsoft Smooth Streaming output group in your job. This default manifest references every output in the output group. To create additional manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: MsSmoothAdditionalManifest[];

  /**
   * COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.
   */
  AudioDeduplication?: MsSmoothAudioDeduplication | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
   */
  Encryption?: MsSmoothEncryptionSettings;

  /**
   * Use Fragment length (FragmentLength) to specify the mp4 fragment sizes in seconds. Fragment length must be compatible with GOP size and frame rate.
   */
  FragmentLength?: number;

  /**
   * Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.
   */
  ManifestEncoding?: MsSmoothManifestEncoding | string;
}

export namespace MsSmoothGroupSettings {
  export const filterSensitiveLog = (obj: MsSmoothGroupSettings): any => ({
    ...obj,
  });
}

export enum OutputGroupType {
  CMAF_GROUP_SETTINGS = "CMAF_GROUP_SETTINGS",
  DASH_ISO_GROUP_SETTINGS = "DASH_ISO_GROUP_SETTINGS",
  FILE_GROUP_SETTINGS = "FILE_GROUP_SETTINGS",
  HLS_GROUP_SETTINGS = "HLS_GROUP_SETTINGS",
  MS_SMOOTH_GROUP_SETTINGS = "MS_SMOOTH_GROUP_SETTINGS",
}

/**
 * Output Group settings, including type
 */
export interface OutputGroupSettings {
  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
   */
  CmafGroupSettings?: CmafGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
   */
  DashIsoGroupSettings?: DashIsoGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
   */
  FileGroupSettings?: FileGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)
   */
  Type?: OutputGroupType | string;
}

export namespace OutputGroupSettings {
  export const filterSensitiveLog = (obj: OutputGroupSettings): any => ({
    ...obj,
  });
}

export enum CmfcAudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum CmfcScte35Esam {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum CmfcScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Settings for MP4 segments in CMAF
 */
export interface CmfcSettings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: CmfcAudioDuration | string;

  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: CmfcScte35Esam | string;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.
   */
  Scte35Source?: CmfcScte35Source | string;
}

export namespace CmfcSettings {
  export const filterSensitiveLog = (obj: CmfcSettings): any => ({
    ...obj,
  });
}

export enum ContainerType {
  CMFC = "CMFC",
  F4V = "F4V",
  ISMV = "ISMV",
  M2TS = "M2TS",
  M3U8 = "M3U8",
  MOV = "MOV",
  MP4 = "MP4",
  MPD = "MPD",
  MXF = "MXF",
  RAW = "RAW",
  WEBM = "WEBM",
}

export enum F4vMoovPlacement {
  NORMAL = "NORMAL",
  PROGRESSIVE_DOWNLOAD = "PROGRESSIVE_DOWNLOAD",
}

/**
 * Settings for F4v container
 */
export interface F4vSettings {
  /**
   * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
   */
  MoovPlacement?: F4vMoovPlacement | string;
}

export namespace F4vSettings {
  export const filterSensitiveLog = (obj: F4vSettings): any => ({
    ...obj,
  });
}

export enum M2tsAudioBufferModel {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsAudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum M2tsBufferModel {
  MULTIPLEX = "MULTIPLEX",
  NONE = "NONE",
}

/**
 * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
 */
export interface DvbNitSettings {
  /**
   * The numeric value placed in the Network Information Table (NIT).
   */
  NetworkId?: number;

  /**
   * The network name text placed in the network_name_descriptor inside the Network Information Table. Maximum length is 256 characters.
   */
  NetworkName?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  NitInterval?: number;
}

export namespace DvbNitSettings {
  export const filterSensitiveLog = (obj: DvbNitSettings): any => ({
    ...obj,
  });
}

export enum OutputSdt {
  SDT_FOLLOW = "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT = "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL = "SDT_MANUAL",
  SDT_NONE = "SDT_NONE",
}

/**
 * Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information.
   */
  OutputSdt?: OutputSdt | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  SdtInterval?: number;

  /**
   * The service name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceName?: string;

  /**
   * The service provider name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceProviderName?: string;
}

export namespace DvbSdtSettings {
  export const filterSensitiveLog = (obj: DvbSdtSettings): any => ({
    ...obj,
  });
}

/**
 * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  TdtInterval?: number;
}

export namespace DvbTdtSettings {
  export const filterSensitiveLog = (obj: DvbTdtSettings): any => ({
    ...obj,
  });
}

export enum M2tsEbpAudioInterval {
  VIDEO_AND_FIXED_INTERVALS = "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL = "VIDEO_INTERVAL",
}

export enum M2tsEbpPlacement {
  VIDEO_AND_AUDIO_PIDS = "VIDEO_AND_AUDIO_PIDS",
  VIDEO_PID = "VIDEO_PID",
}

export enum M2tsEsRateInPes {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum M2tsForceTsVideoEbpOrder {
  DEFAULT = "DEFAULT",
  FORCE = "FORCE",
}

export enum M2tsNielsenId3 {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum M2tsPcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M2tsRateMode {
  CBR = "CBR",
  VBR = "VBR",
}

/**
 * Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
 */
export interface M2tsScte35Esam {
  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream generated by ESAM.
   */
  Scte35EsamPid?: number;
}

export namespace M2tsScte35Esam {
  export const filterSensitiveLog = (obj: M2tsScte35Esam): any => ({
    ...obj,
  });
}

export enum M2tsScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsSegmentationMarkers {
  EBP = "EBP",
  EBP_LEGACY = "EBP_LEGACY",
  NONE = "NONE",
  PSI_SEGSTART = "PSI_SEGSTART",
  RAI_ADAPT = "RAI_ADAPT",
  RAI_SEGSTART = "RAI_SEGSTART",
}

export enum M2tsSegmentationStyle {
  MAINTAIN_CADENCE = "MAINTAIN_CADENCE",
  RESET_CADENCE = "RESET_CADENCE",
}

/**
 * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
 */
export interface M2tsSettings {
  /**
   * Selects between the DVB and ATSC buffer models for Dolby Digital audio.
   */
  AudioBufferModel?: M2tsAudioBufferModel | string;

  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: M2tsAudioDuration | string;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Specify the packet identifiers (PIDs) for any elementary audio streams you include in this output. Specify multiple PIDs as a JSON array. Default is the range 482-492.
   */
  AudioPids?: number[];

  /**
   * Specify the output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate. Other common values are 3750000, 7500000, and 15000000.
   */
  Bitrate?: number;

  /**
   * Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.
   */
  BufferModel?: M2tsBufferModel | string;

  /**
   * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
   */
  DvbNitSettings?: DvbNitSettings;

  /**
   * Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
   */
  DvbSdtSettings?: DvbSdtSettings;

  /**
   * Specify the packet identifiers (PIDs) for DVB subtitle data included in this output. Specify multiple PIDs as a JSON array. Default is the range 460-479.
   */
  DvbSubPids?: number[];

  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
   */
  DvbTdtSettings?: DvbTdtSettings;

  /**
   * Specify the packet identifier (PID) for DVB teletext data you include in this output. Default is 499.
   */
  DvbTeletextPid?: number;

  /**
   * When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
   */
  EbpAudioInterval?: M2tsEbpAudioInterval | string;

  /**
   * Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
   */
  EbpPlacement?: M2tsEbpPlacement | string;

  /**
   * Controls whether to include the ES Rate field in the PES header.
   */
  EsRateInPes?: M2tsEsRateInPes | string;

  /**
   * Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE).
   */
  ForceTsVideoEbpOrder?: M2tsForceTsVideoEbpOrder | string;

  /**
   * The length, in seconds, of each fragment. Only used with EBP markers.
   */
  FragmentTime?: number;

  /**
   * Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
   */
  MaxPcrInterval?: number;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   */
  MinEbpInterval?: number;

  /**
   * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3?: M2tsNielsenId3 | string;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   */
  NullPacketBitrate?: number;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PatInterval?: number;

  /**
   * When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M2tsPcrControl | string;

  /**
   * Specify the packet identifier (PID) for the program clock reference (PCR) in this output. If you do not specify a value, the service will use the value for Video PID (VideoPid).
   */
  PcrPid?: number;

  /**
   * Specify the number of milliseconds between instances of the program map table (PMT) in the output transport stream.
   */
  PmtInterval?: number;

  /**
   * Specify the packet identifier (PID) for the program map table (PMT) itself. Default is 480.
   */
  PmtPid?: number;

  /**
   * Specify the packet identifier (PID) of the private metadata stream. Default is 503.
   */
  PrivateMetadataPid?: number;

  /**
   * Use Program number (programNumber) to specify the program number used in the program map table (PMT) for this output. Default is 1. Program numbers and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
   */
  ProgramNumber?: number;

  /**
   * When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.
   */
  RateMode?: M2tsRateMode | string;

  /**
   * Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: M2tsScte35Esam;

  /**
   * Specify the packet identifier (PID) of the SCTE-35 stream in the transport stream.
   */
  Scte35Pid?: number;

  /**
   * For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam).
   */
  Scte35Source?: M2tsScte35Source | string;

  /**
   * Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | string;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.
   */
  SegmentationStyle?: M2tsSegmentationStyle | string;

  /**
   * Specify the length, in seconds, of each segment. Required unless markers is set to _none_.
   */
  SegmentationTime?: number;

  /**
   * Specify the packet identifier (PID) for timed metadata in this output. Default is 502.
   */
  TimedMetadataPid?: number;

  /**
   * Specify the ID for the transport stream itself in the program map table for this output. Transport stream IDs and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
   */
  TransportStreamId?: number;

  /**
   * Specify the packet identifier (PID) of the elementary video stream in the transport stream.
   */
  VideoPid?: number;
}

export namespace M2tsSettings {
  export const filterSensitiveLog = (obj: M2tsSettings): any => ({
    ...obj,
  });
}

export enum M3u8AudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum M3u8NielsenId3 {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum M3u8PcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M3u8Scte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum TimedMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Settings for TS segments in HLS
 */
export interface M3u8Settings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: M3u8AudioDuration | string;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
   */
  AudioPids?: number[];

  /**
   * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3?: M3u8NielsenId3 | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PatInterval?: number;

  /**
   * When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M3u8PcrControl | string;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID.
   */
  PcrPid?: number;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream.
   */
  PmtPid?: number;

  /**
   * Packet Identifier (PID) of the private metadata stream in the transport stream.
   */
  PrivateMetadataPid?: number;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNumber?: number;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream.
   */
  Scte35Pid?: number;

  /**
   * For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml).
   */
  Scte35Source?: M3u8Scte35Source | string;

  /**
   * Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output.
   */
  TimedMetadata?: TimedMetadata | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream.
   */
  TimedMetadataPid?: number;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream.
   */
  VideoPid?: number;
}

export namespace M3u8Settings {
  export const filterSensitiveLog = (obj: M3u8Settings): any => ({
    ...obj,
  });
}

export enum MovClapAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum MovCslgAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum MovMpeg2FourCCControl {
  MPEG = "MPEG",
  XDCAM = "XDCAM",
}

export enum MovPaddingControl {
  NONE = "NONE",
  OMNEON = "OMNEON",
}

export enum MovReference {
  EXTERNAL = "EXTERNAL",
  SELF_CONTAINED = "SELF_CONTAINED",
}

/**
 * Settings for MOV Container.
 */
export interface MovSettings {
  /**
   * When enabled, include 'clap' atom if appropriate for the video output settings.
   */
  ClapAtom?: MovClapAtom | string;

  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   */
  CslgAtom?: MovCslgAtom | string;

  /**
   * When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.
   */
  Mpeg2FourCCControl?: MovMpeg2FourCCControl | string;

  /**
   * To make this output compatible with Omenon, keep the default value, OMNEON. Unless you need Omneon compatibility, set this value to NONE. When you keep the default value, OMNEON, MediaConvert increases the length of the edit list atom. This might cause file rejections when a recipient of the output file doesn't expct this extra padding.
   */
  PaddingControl?: MovPaddingControl | string;

  /**
   * Always keep the default value (SELF_CONTAINED) for this setting.
   */
  Reference?: MovReference | string;
}

export namespace MovSettings {
  export const filterSensitiveLog = (obj: MovSettings): any => ({
    ...obj,
  });
}

export enum Mp4CslgAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum Mp4FreeSpaceBox {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum Mp4MoovPlacement {
  NORMAL = "NORMAL",
  PROGRESSIVE_DOWNLOAD = "PROGRESSIVE_DOWNLOAD",
}

/**
 * Settings for MP4 container. You can create audio-only AAC outputs with this container.
 */
export interface Mp4Settings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: CmfcAudioDuration | string;

  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   */
  CslgAtom?: Mp4CslgAtom | string;

  /**
   * Ignore this setting unless compliance to the CTTS box version specification matters in your workflow. Specify a value of 1 to set your CTTS box version to 1 and make your output compliant with the specification. When you specify a value of 1, you must also set CSLG atom (cslgAtom) to the value INCLUDE. Keep the default value 0 to set your CTTS box version to 0. This can provide backward compatibility for some players and packagers.
   */
  CttsVersion?: number;

  /**
   * Inserts a free-space box immediately after the moov box.
   */
  FreeSpaceBox?: Mp4FreeSpaceBox | string;

  /**
   * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
   */
  MoovPlacement?: Mp4MoovPlacement | string;

  /**
   * Overrides the "Major Brand" field in the output file. Usually not necessary to specify.
   */
  Mp4MajorBrand?: string;
}

export namespace Mp4Settings {
  export const filterSensitiveLog = (obj: Mp4Settings): any => ({
    ...obj,
  });
}

export enum MpdAccessibilityCaptionHints {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum MpdAudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum MpdCaptionContainerType {
  FRAGMENTED_MP4 = "FRAGMENTED_MP4",
  RAW = "RAW",
}

export enum MpdScte35Esam {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum MpdScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Settings for MP4 segments in DASH
 */
export interface MpdSettings {
  /**
   * Optional. Choose Include (INCLUDE) to have MediaConvert mark up your DASH manifest with <Accessibility> elements for embedded 608 captions. This markup isn't generally required, but some video players require it to discover and play embedded 608 captions. Keep the default value, Exclude (EXCLUDE), to leave these elements out. When you enable this setting, this is the markup that MediaConvert includes in your manifest: <Accessibility schemeIdUri="urn:scte:dash:cc:cea-608:2015" value="CC1=eng"/>
   */
  AccessibilityCaptionHints?: MpdAccessibilityCaptionHints | string;

  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: MpdAudioDuration | string;

  /**
   * Use this setting only in DASH output groups that include sidecar TTML or IMSC captions.  You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files.
   */
  CaptionContainerType?: MpdCaptionContainerType | string;

  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: MpdScte35Esam | string;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.
   */
  Scte35Source?: MpdScte35Source | string;
}

export namespace MpdSettings {
  export const filterSensitiveLog = (obj: MpdSettings): any => ({
    ...obj,
  });
}

export enum MxfAfdSignaling {
  COPY_FROM_VIDEO = "COPY_FROM_VIDEO",
  NO_COPY = "NO_COPY",
}

export enum MxfProfile {
  D_10 = "D_10",
  OP1A = "OP1A",
  XDCAM = "XDCAM",
}

/**
 * MXF settings
 */
export interface MxfSettings {
  /**
   * Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings.
   */
  AfdSignaling?: MxfAfdSignaling | string;

  /**
   * Specify the MXF profile, also called shim, for this output. When you choose Auto, MediaConvert chooses a profile based on the video codec and resolution. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html.
   */
  Profile?: MxfProfile | string;
}

export namespace MxfSettings {
  export const filterSensitiveLog = (obj: MxfSettings): any => ({
    ...obj,
  });
}

/**
 * Container specific settings.
 */
export interface ContainerSettings {
  /**
   * Settings for MP4 segments in CMAF
   */
  CmfcSettings?: CmfcSettings;

  /**
   * Container for this output. Some containers require a container settings object. If not specified, the default object will be created.
   */
  Container?: ContainerType | string;

  /**
   * Settings for F4v container
   */
  F4vSettings?: F4vSettings;

  /**
   * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
   */
  M2tsSettings?: M2tsSettings;

  /**
   * Settings for TS segments in HLS
   */
  M3u8Settings?: M3u8Settings;

  /**
   * Settings for MOV Container.
   */
  MovSettings?: MovSettings;

  /**
   * Settings for MP4 container. You can create audio-only AAC outputs with this container.
   */
  Mp4Settings?: Mp4Settings;

  /**
   * Settings for MP4 segments in DASH
   */
  MpdSettings?: MpdSettings;

  /**
   * MXF settings
   */
  MxfSettings?: MxfSettings;
}

export namespace ContainerSettings {
  export const filterSensitiveLog = (obj: ContainerSettings): any => ({
    ...obj,
  });
}

export enum HlsAudioOnlyContainer {
  AUTOMATIC = "AUTOMATIC",
  M2TS = "M2TS",
}

export enum HlsAudioTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM = "AUDIO_ONLY_VARIANT_STREAM",
}

export enum HlsIFrameOnlyManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

/**
 * Settings for HLS output groups
 */
export interface HlsSettings {
  /**
   * Specifies the group to which the audio Rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create an audio-only file in a raw container. Regardless of the value that you specify here, if this output has video, the service will place the output into an MPEG2-TS container.
   */
  AudioOnlyContainer?: HlsAudioOnlyContainer | string;

  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   */
  AudioTrackType?: HlsAudioTrackType | string;

  /**
   * When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest
   */
  IFrameOnlyManifest?: HlsIFrameOnlyManifest | string;

  /**
   * Use this setting to add an identifying string to the filename of each segment. The service adds this string between the name modifier and segment index number. You can use format identifiers in the string. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html
   */
  SegmentModifier?: string;
}

export namespace HlsSettings {
  export const filterSensitiveLog = (obj: HlsSettings): any => ({
    ...obj,
  });
}

/**
 * Specific settings for this type of output.
 */
export interface OutputSettings {
  /**
   * Settings for HLS output groups
   */
  HlsSettings?: HlsSettings;
}

export namespace OutputSettings {
  export const filterSensitiveLog = (obj: OutputSettings): any => ({
    ...obj,
  });
}

export enum AfdSignaling {
  AUTO = "AUTO",
  FIXED = "FIXED",
  NONE = "NONE",
}

export enum AntiAlias {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Av1AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum Av1FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Av1FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

/**
 * Settings for quality-defined variable bitrate encoding with the AV1 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
 */
export interface Av1QvbrSettings {
  /**
   * Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within av1Settings. Specify the general target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;
}

export namespace Av1QvbrSettings {
  export const filterSensitiveLog = (obj: Av1QvbrSettings): any => ({
    ...obj,
  });
}

export enum Av1RateControlMode {
  QVBR = "QVBR",
}

export enum Av1SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
 */
export interface Av1Settings {
  /**
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization (spatialAdaptiveQuantization).
   */
  AdaptiveQuantization?: Av1AdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Av1FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Specify the GOP length (keyframe interval) in frames. With AV1, MediaConvert doesn't support GOP length in seconds. This value must be greater than zero and preferably equal to 1 + ((numberBFrames + 1) * x), where x is an integer value.
   */
  GopSize?: number;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Specify the number of B-frames. With AV1, MediaConvert supports only 7 or 15.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Settings for quality-defined variable bitrate encoding with the AV1 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
   */
  QvbrSettings?: Av1QvbrSettings;

  /**
   * 'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.'
   */
  RateControlMode?: Av1RateControlMode | string;

  /**
   * Specify the number of slices per picture. This value must be 1, 2, 4, 8, 16, or 32. For progressive pictures, this value must be less than or equal to the number of macroblock rows. For interlaced pictures, this value must be less than or equal to half the number of macroblock rows.
   */
  Slices?: number;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: Av1SpatialAdaptiveQuantization | string;
}

export namespace Av1Settings {
  export const filterSensitiveLog = (obj: Av1Settings): any => ({
    ...obj,
  });
}

export enum AvcIntraClass {
  CLASS_100 = "CLASS_100",
  CLASS_200 = "CLASS_200",
  CLASS_50 = "CLASS_50",
}

export enum AvcIntraFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum AvcIntraFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum AvcIntraInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum AvcIntraSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum AvcIntraTelecine {
  HARD = "HARD",
  NONE = "NONE",
}

/**
 * Required when you set your output video codec to AVC-Intra. For more information about the AVC-I settings, see the relevant specification. For detailed information about SD and HD in AVC-I, see https://ieeexplore.ieee.org/document/7290936.
 */
export interface AvcIntraSettings {
  /**
   * Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality.
   */
  AvcIntraClass?: AvcIntraClass | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: AvcIntraFramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: AvcIntraFramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: AvcIntraInterlaceMode | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: AvcIntraSlowPal | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: AvcIntraTelecine | string;
}

export namespace AvcIntraSettings {
  export const filterSensitiveLog = (obj: AvcIntraSettings): any => ({
    ...obj,
  });
}

export enum VideoCodec {
  AV1 = "AV1",
  AVC_INTRA = "AVC_INTRA",
  FRAME_CAPTURE = "FRAME_CAPTURE",
  H_264 = "H_264",
  H_265 = "H_265",
  MPEG2 = "MPEG2",
  PRORES = "PRORES",
  VC3 = "VC3",
  VP8 = "VP8",
  VP9 = "VP9",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
 */
export interface FrameCaptureSettings {
  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.n.jpg where n is the 0-based sequence number of each Capture.
   */
  FramerateDenominator?: number;

  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.NNNNNNN.jpg where N is the 0-based frame sequence number zero padded to 7 decimal places.
   */
  FramerateNumerator?: number;

  /**
   * Maximum number of captures (encoded jpg output files).
   */
  MaxCaptures?: number;

  /**
   * JPEG Quality - a higher value equals higher quality.
   */
  Quality?: number;
}

export namespace FrameCaptureSettings {
  export const filterSensitiveLog = (obj: FrameCaptureSettings): any => ({
    ...obj,
  });
}

export enum H264AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H264CodecLevel {
  AUTO = "AUTO",
  LEVEL_1 = "LEVEL_1",
  LEVEL_1_1 = "LEVEL_1_1",
  LEVEL_1_2 = "LEVEL_1_2",
  LEVEL_1_3 = "LEVEL_1_3",
  LEVEL_2 = "LEVEL_2",
  LEVEL_2_1 = "LEVEL_2_1",
  LEVEL_2_2 = "LEVEL_2_2",
  LEVEL_3 = "LEVEL_3",
  LEVEL_3_1 = "LEVEL_3_1",
  LEVEL_3_2 = "LEVEL_3_2",
  LEVEL_4 = "LEVEL_4",
  LEVEL_4_1 = "LEVEL_4_1",
  LEVEL_4_2 = "LEVEL_4_2",
  LEVEL_5 = "LEVEL_5",
  LEVEL_5_1 = "LEVEL_5_1",
  LEVEL_5_2 = "LEVEL_5_2",
}

export enum H264CodecProfile {
  BASELINE = "BASELINE",
  HIGH = "HIGH",
  HIGH_10BIT = "HIGH_10BIT",
  HIGH_422 = "HIGH_422",
  HIGH_422_10BIT = "HIGH_422_10BIT",
  MAIN = "MAIN",
}

export enum H264DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC",
}
