// smithy-typescript generated code
/**
 * Input Channel Level
 * @public
 */
export interface InputChannelLevel {
  /**
   * Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.
   * @public
   */
  Gain: number | undefined;

  /**
   * The index of the input channel used as a source.
   * @public
   */
  InputChannel: number | undefined;
}

/**
 * Audio Channel Mapping
 * @public
 */
export interface AudioChannelMapping {
  /**
   * Indices and gain values for each input channel that should be remixed into this output channel.
   * @public
   */
  InputChannelLevels: InputChannelLevel[] | undefined;

  /**
   * The index of the output channel being produced.
   * @public
   */
  OutputChannel: number | undefined;
}

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
 * Audio Normalization Settings
 * @public
 */
export interface AudioNormalizationSettings {
  /**
   * Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification.
   * @public
   */
  Algorithm?: AudioNormalizationAlgorithm | undefined;

  /**
   * When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted.
   * @public
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | undefined;

  /**
   * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
   * @public
   */
  TargetLkfs?: number | undefined;
}

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
 * Nielsen CBET
 * @public
 */
export interface NielsenCBET {
  /**
   * Enter the CBET check digits to use in the watermark.
   * @public
   */
  CbetCheckDigitString: string | undefined;

  /**
   * Determines the method of CBET insertion mode when prior encoding is detected on the same layer.
   * @public
   */
  CbetStepaside: NielsenWatermarksCbetStepaside | undefined;

  /**
   * Enter the CBET Source ID (CSID) to use in the watermark
   * @public
   */
  Csid: string | undefined;
}

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
 * Nielsen Naes Ii Nw
 * @public
 */
export interface NielsenNaesIiNw {
  /**
   * Enter the check digit string for the watermark
   * @public
   */
  CheckDigitString: string | undefined;

  /**
   * Enter the Nielsen Source ID (SID) to include in the watermark
   * @public
   */
  Sid: number | undefined;

  /**
   * Choose the timezone for the time stamps in the watermark. If not provided,
   * the timestamps will be in Coordinated Universal Time (UTC)
   * @public
   */
  Timezone?: NielsenWatermarkTimezones | undefined;
}

/**
 * Nielsen Watermarks Settings
 * @public
 */
export interface NielsenWatermarksSettings {
  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen CBET
   * @public
   */
  NielsenCbetSettings?: NielsenCBET | undefined;

  /**
   * Choose the distribution types that you want to assign to the watermarks:
   * - PROGRAM_CONTENT
   * - FINAL_DISTRIBUTOR
   * @public
   */
  NielsenDistributionType?: NielsenWatermarksDistributionTypes | undefined;

  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
   * @public
   */
  NielsenNaesIiNwSettings?: NielsenNaesIiNw | undefined;
}

/**
 * Audio Watermark Settings
 * @public
 */
export interface AudioWatermarkSettings {
  /**
   * Settings to configure Nielsen Watermarks in the audio encode
   * @public
   */
  NielsenWatermarksSettings?: NielsenWatermarksSettings | undefined;
}

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
 * Aac Settings
 * @public
 */
export interface AacSettings {
  /**
   * Average bitrate in bits/second. Valid values depend on rate control mode and profile.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   * @public
   */
  CodingMode?: AacCodingMode | undefined;

  /**
   * Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.
   *
   * Leave set to "normal" when input does not contain pre-mixed audio + AD.
   * @public
   */
  InputType?: AacInputType | undefined;

  /**
   * AAC Profile.
   * @public
   */
  Profile?: AacProfile | undefined;

  /**
   * Rate Control Mode.
   * @public
   */
  RateControlMode?: AacRateControlMode | undefined;

  /**
   * Sets LATM / LOAS AAC output for raw containers.
   * @public
   */
  RawFormat?: AacRawFormat | undefined;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   * @public
   */
  Spec?: AacSpec | undefined;

  /**
   * VBR Quality Level - Only used if rateControlMode is VBR.
   * @public
   */
  VbrQuality?: AacVbrQuality | undefined;
}

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
 * Ac3 Settings
 * @public
 */
export interface Ac3Settings {
  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.
   * @public
   */
  BitstreamMode?: Ac3BitstreamMode | undefined;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Ac3CodingMode | undefined;

  /**
   * Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   * @public
   */
  DrcProfile?: Ac3DrcProfile | undefined;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode.
   * @public
   */
  LfeFilter?: Ac3LfeFilter | undefined;

  /**
   * When set to "followInput", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Ac3MetadataControl | undefined;

  /**
   * Applies a 3 dB attenuation to the surround channels. Applies only when the coding mode parameter is CODING_MODE_3_2_LFE.
   * @public
   */
  AttenuationControl?: Ac3AttenuationControl | undefined;
}

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
 * Eac3 Atmos Settings
 * @public
 */
export interface Eac3AtmosSettings {
  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Dolby Digital Plus with Dolby Atmos coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Eac3AtmosCodingMode | undefined;

  /**
   * Sets the dialnorm for the output. Default 23.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Sets the Dolby dynamic range compression profile.
   * @public
   */
  DrcLine?: Eac3AtmosDrcLine | undefined;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   * @public
   */
  DrcRf?: Eac3AtmosDrcRf | undefined;

  /**
   * Height dimensional trim. Sets the maximum amount to attenuate the height channels when the downstream player isn??t configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.
   * @public
   */
  HeightTrim?: number | undefined;

  /**
   * Surround dimensional trim. Sets the maximum amount to attenuate the surround channels when the downstream player isn't configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.
   * @public
   */
  SurroundTrim?: number | undefined;
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
 * Eac3 Settings
 * @public
 */
export interface Eac3Settings {
  /**
   * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  AttenuationControl?: Eac3AttenuationControl | undefined;

  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.
   * @public
   */
  BitstreamMode?: Eac3BitstreamMode | undefined;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Eac3CodingMode | undefined;

  /**
   * When set to enabled, activates a DC highpass filter for all input channels.
   * @public
   */
  DcFilter?: Eac3DcFilter | undefined;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Sets the Dolby dynamic range compression profile.
   * @public
   */
  DrcLine?: Eac3DrcLine | undefined;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   * @public
   */
  DrcRf?: Eac3DrcRf | undefined;

  /**
   * When encoding 3/2 audio, setting to lfe enables the LFE channel
   * @public
   */
  LfeControl?: Eac3LfeControl | undefined;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.
   * @public
   */
  LfeFilter?: Eac3LfeFilter | undefined;

  /**
   * Left only/Right only center mix level. Only used for 3/2 coding mode.
   * @public
   */
  LoRoCenterMixLevel?: number | undefined;

  /**
   * Left only/Right only surround mix level. Only used for 3/2 coding mode.
   * @public
   */
  LoRoSurroundMixLevel?: number | undefined;

  /**
   * Left total/Right total center mix level. Only used for 3/2 coding mode.
   * @public
   */
  LtRtCenterMixLevel?: number | undefined;

  /**
   * Left total/Right total surround mix level. Only used for 3/2 coding mode.
   * @public
   */
  LtRtSurroundMixLevel?: number | undefined;

  /**
   * When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Eac3MetadataControl | undefined;

  /**
   * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   * @public
   */
  PassthroughControl?: Eac3PassthroughControl | undefined;

  /**
   * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  PhaseControl?: Eac3PhaseControl | undefined;

  /**
   * Stereo downmix preference. Only used for 3/2 coding mode.
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
 * Mp2 Settings
 * @public
 */
export interface Mp2Settings {
  /**
   * Average bitrate in bits/second.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
   * @public
   */
  CodingMode?: Mp2CodingMode | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Pass Through Settings
 * @public
 */
export interface PassThroughSettings {}

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
 * Wav Settings
 * @public
 */
export interface WavSettings {
  /**
   * Bits per sample.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * The audio coding mode for the WAV audio. The mode determines the number of channels in the audio.
   * @public
   */
  CodingMode?: WavCodingMode | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Audio Codec Settings
 * @public
 */
export interface AudioCodecSettings {
  /**
   * Aac Settings
   * @public
   */
  AacSettings?: AacSettings | undefined;

  /**
   * Ac3 Settings
   * @public
   */
  Ac3Settings?: Ac3Settings | undefined;

  /**
   * Eac3 Atmos Settings
   * @public
   */
  Eac3AtmosSettings?: Eac3AtmosSettings | undefined;

  /**
   * Eac3 Settings
   * @public
   */
  Eac3Settings?: Eac3Settings | undefined;

  /**
   * Mp2 Settings
   * @public
   */
  Mp2Settings?: Mp2Settings | undefined;

  /**
   * Pass Through Settings
   * @public
   */
  PassThroughSettings?: PassThroughSettings | undefined;

  /**
   * Wav Settings
   * @public
   */
  WavSettings?: WavSettings | undefined;
}

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
 * Remix Settings
 * @public
 */
export interface RemixSettings {
  /**
   * Mapping of input channels to output channels, with appropriate gain adjustments.
   * @public
   */
  ChannelMappings: AudioChannelMapping[] | undefined;

  /**
   * Number of input channels to be used.
   * @public
   */
  ChannelsIn?: number | undefined;

  /**
   * Number of output channels to be produced.
   * Valid values: 1, 2, 4, 6, 8
   * @public
   */
  ChannelsOut?: number | undefined;
}

/**
 * Audio Description
 * @public
 */
export interface AudioDescription {
  /**
   * Advanced audio normalization settings.
   * @public
   */
  AudioNormalizationSettings?: AudioNormalizationSettings | undefined;

  /**
   * The name of the AudioSelector used as the source for this AudioDescription.
   * @public
   */
  AudioSelectorName: string | undefined;

  /**
   * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
   * @public
   */
  AudioType?: AudioType | undefined;

  /**
   * Determines how audio type is determined.
   *   followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.
   *   useConfigured: The value in Audio Type is included in the output.
   * Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
   * @public
   */
  AudioTypeControl?: AudioDescriptionAudioTypeControl | undefined;

  /**
   * Settings to configure one or more solutions that insert audio watermarks in the audio encode
   * @public
   */
  AudioWatermarkingSettings?: AudioWatermarkSettings | undefined;

  /**
   * Audio codec settings.
   * @public
   */
  CodecSettings?: AudioCodecSettings | undefined;

  /**
   * RFC 5646 language code representing the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
   * @public
   */
  LanguageCodeControl?: AudioDescriptionLanguageCodeControl | undefined;

  /**
   * The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.
   * @public
   */
  Name: string | undefined;

  /**
   * Settings that control how input audio channels are remixed into the output audio channels.
   * @public
   */
  RemixSettings?: RemixSettings | undefined;

  /**
   * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).
   * @public
   */
  StreamName?: string | undefined;

  /**
   * Identifies the DASH roles to assign to this audio output. Applies only when the audio output is configured for DVB DASH accessibility signaling.
   * @public
   */
  AudioDashRoles?: DashRoleAudio[] | undefined;

  /**
   * Identifies DVB DASH accessibility signaling in this audio output. Used in Microsoft Smooth Streaming outputs to signal accessibility information to packagers.
   * @public
   */
  DvbDashAccessibility?: DvbDashAccessibility | undefined;
}

/**
 * Audio Hls Rendition Selection
 * @public
 */
export interface AudioHlsRenditionSelection {
  /**
   * Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   * @public
   */
  GroupId: string | undefined;

  /**
   * Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   * @public
   */
  Name: string | undefined;
}

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
 * Audio Language Selection
 * @public
 */
export interface AudioLanguageSelection {
  /**
   * Selects a specific three-letter language code from within an audio source.
   * @public
   */
  LanguageCode: string | undefined;

  /**
   * When set to "strict", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If "loose", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can't find one with the same language.
   * @public
   */
  LanguageSelectionPolicy?: AudioLanguageSelectionPolicy | undefined;
}

/**
 * Audio Pid Selection
 * @public
 */
export interface AudioPidSelection {
  /**
   * Selects a specific PID from within a source.
   * @public
   */
  Pid: number | undefined;
}

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
 * Audio Dolby EDecode
 * @public
 */
export interface AudioDolbyEDecode {
  /**
   * Applies only to Dolby E. Enter the program ID (according to the metadata in the audio) of the Dolby E program to extract from the specified track. One program extracted per audio selector. To select multiple programs, create multiple selectors with the same Track and different Program numbers. “All channels” means to ignore the program IDs and include all the channels in this selector; useful if metadata is known to be incorrect.
   * @public
   */
  ProgramSelection: DolbyEProgramSelection | undefined;
}

/**
 * Audio Track
 * @public
 */
export interface AudioTrack {
  /**
   * 1-based integer value that maps to a specific audio track
   * @public
   */
  Track: number | undefined;
}

/**
 * Audio Track Selection
 * @public
 */
export interface AudioTrackSelection {
  /**
   * Selects one or more unique audio tracks from within a source.
   * @public
   */
  Tracks: AudioTrack[] | undefined;

  /**
   * Configure decoding options for Dolby E streams - these should be Dolby E frames carried in PCM streams tagged with SMPTE-337
   * @public
   */
  DolbyEDecode?: AudioDolbyEDecode | undefined;
}

/**
 * Audio Selector Settings
 * @public
 */
export interface AudioSelectorSettings {
  /**
   * Audio Hls Rendition Selection
   * @public
   */
  AudioHlsRenditionSelection?: AudioHlsRenditionSelection | undefined;

  /**
   * Audio Language Selection
   * @public
   */
  AudioLanguageSelection?: AudioLanguageSelection | undefined;

  /**
   * Audio Pid Selection
   * @public
   */
  AudioPidSelection?: AudioPidSelection | undefined;

  /**
   * Audio Track Selection
   * @public
   */
  AudioTrackSelection?: AudioTrackSelection | undefined;
}

/**
 * Audio Selector
 * @public
 */
export interface AudioSelector {
  /**
   * The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.
   * @public
   */
  Name: string | undefined;

  /**
   * The audio selector settings.
   * @public
   */
  SelectorSettings?: AudioSelectorSettings | undefined;
}

/**
 * Details from a failed operation
 * @public
 */
export interface BatchFailedResultModel {
  /**
   * ARN of the resource
   * @public
   */
  Arn?: string | undefined;

  /**
   * Error code for the failed operation
   * @public
   */
  Code?: string | undefined;

  /**
   * ID of the resource
   * @public
   */
  Id?: string | undefined;

  /**
   * Error message for the failed operation
   * @public
   */
  Message?: string | undefined;
}

/**
 * Details from a successful operation
 * @public
 */
export interface BatchSuccessfulResultModel {
  /**
   * ARN of the resource
   * @public
   */
  Arn?: string | undefined;

  /**
   * ID of the resource
   * @public
   */
  Id?: string | undefined;

  /**
   * Current state of the resource
   * @public
   */
  State?: string | undefined;
}

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
 * Arib Destination Settings
 * @public
 */
export interface AribDestinationSettings {}

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
 * Input Location
 * @public
 */
export interface InputLocation {
  /**
   * key used to extract the password from EC2 Parameter store
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: "rtmp://fmsserver/live".
   * @public
   */
  Uri: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  Username?: string | undefined;
}

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
export const BurnInTeletextGridControl = {
  FIXED: "FIXED",
  SCALED: "SCALED",
} as const;

/**
 * @public
 */
export type BurnInTeletextGridControl = (typeof BurnInTeletextGridControl)[keyof typeof BurnInTeletextGridControl];

/**
 * Burn In Destination Settings
 * @public
 */
export interface BurnInDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Alignment?: BurnInAlignment | undefined;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundColor?: BurnInBackgroundColor | undefined;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Font?: InputLocation | undefined;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontColor?: BurnInFontColor | undefined;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontSize?: string | undefined;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineColor?: BurnInOutlineColor | undefined;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowColor?: BurnInShadowColor | undefined;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   * @public
   */
  TeletextGridControl?: BurnInTeletextGridControl | undefined;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  YPosition?: number | undefined;
}

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
 * Dvb Sub Destination Settings
 * @public
 */
export interface DvbSubDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Alignment?: DvbSubDestinationAlignment | undefined;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundColor?: DvbSubDestinationBackgroundColor | undefined;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Font?: InputLocation | undefined;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontColor?: DvbSubDestinationFontColor | undefined;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontSize?: string | undefined;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineColor?: DvbSubDestinationOutlineColor | undefined;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowColor?: DvbSubDestinationShadowColor | undefined;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   * @public
   */
  TeletextGridControl?: DvbSubDestinationTeletextGridControl | undefined;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  YPosition?: number | undefined;
}

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
 * Ebu Tt DDestination Settings
 * @public
 */
export interface EbuTtDDestinationSettings {
  /**
   * Complete this field if you want to include the name of the copyright holder in the copyright tag in the captions metadata.
   * @public
   */
  CopyrightHolder?: string | undefined;

  /**
   * Specifies how to handle the gap between the lines (in multi-line captions).
   *
   * - enabled: Fill with the captions background color (as specified in the input captions).
   * - disabled: Leave the gap unfilled.
   * @public
   */
  FillLineGap?: EbuTtDFillLineGapControl | undefined;

  /**
   * Specifies the font family to include in the font data attached to the EBU-TT captions. Valid only if styleControl is set to include. If you leave this field empty, the font family is set to "monospaced". (If styleControl is set to exclude, the font family is always set to "monospaced".)
   *
   * You specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size.
   *
   * - Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as “Arial”), or a generic font family (such as “serif”), or “default” (to let the downstream player choose the font).
   * - Leave blank to set the family to “monospace”.
   * @public
   */
  FontFamily?: string | undefined;

  /**
   * Specifies the style information (font color, font position, and so on) to include in the font data that is attached to the EBU-TT captions.
   *
   * - include: Take the style information (font color, font position, and so on) from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext.
   * - exclude: In the font data attached to the EBU-TT captions, set the font family to "monospaced". Do not include any other style information.
   * @public
   */
  StyleControl?: EbuTtDDestinationStyleControl | undefined;
}

/**
 * Embedded Destination Settings
 * @public
 */
export interface EmbeddedDestinationSettings {}

/**
 * Embedded Plus Scte20 Destination Settings
 * @public
 */
export interface EmbeddedPlusScte20DestinationSettings {}

/**
 * Rtmp Caption Info Destination Settings
 * @public
 */
export interface RtmpCaptionInfoDestinationSettings {}

/**
 * Scte20 Plus Embedded Destination Settings
 * @public
 */
export interface Scte20PlusEmbeddedDestinationSettings {}

/**
 * Scte27 Destination Settings
 * @public
 */
export interface Scte27DestinationSettings {}

/**
 * Smpte Tt Destination Settings
 * @public
 */
export interface SmpteTtDestinationSettings {}

/**
 * Teletext Destination Settings
 * @public
 */
export interface TeletextDestinationSettings {}

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
 * Ttml Destination Settings
 * @public
 */
export interface TtmlDestinationSettings {
  /**
   * This field is not currently supported and will not affect the output styling. Leave the default value.
   * @public
   */
  StyleControl?: TtmlDestinationStyleControl | undefined;
}

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
 * Webvtt Destination Settings
 * @public
 */
export interface WebvttDestinationSettings {
  /**
   * Controls whether the color and position of the source captions is passed through to the WebVTT output captions.  PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT.  NO_STYLE_DATA - Don't pass through the style. The output captions will not contain any font styling information.
   * @public
   */
  StyleControl?: WebvttDestinationStyleControl | undefined;
}

/**
 * Caption Destination Settings
 * @public
 */
export interface CaptionDestinationSettings {
  /**
   * Arib Destination Settings
   * @public
   */
  AribDestinationSettings?: AribDestinationSettings | undefined;

  /**
   * Burn In Destination Settings
   * @public
   */
  BurnInDestinationSettings?: BurnInDestinationSettings | undefined;

  /**
   * Dvb Sub Destination Settings
   * @public
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings | undefined;

  /**
   * Ebu Tt DDestination Settings
   * @public
   */
  EbuTtDDestinationSettings?: EbuTtDDestinationSettings | undefined;

  /**
   * Embedded Destination Settings
   * @public
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings | undefined;

  /**
   * Embedded Plus Scte20 Destination Settings
   * @public
   */
  EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings | undefined;

  /**
   * Rtmp Caption Info Destination Settings
   * @public
   */
  RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings | undefined;

  /**
   * Scte20 Plus Embedded Destination Settings
   * @public
   */
  Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings | undefined;

  /**
   * Scte27 Destination Settings
   * @public
   */
  Scte27DestinationSettings?: Scte27DestinationSettings | undefined;

  /**
   * Smpte Tt Destination Settings
   * @public
   */
  SmpteTtDestinationSettings?: SmpteTtDestinationSettings | undefined;

  /**
   * Teletext Destination Settings
   * @public
   */
  TeletextDestinationSettings?: TeletextDestinationSettings | undefined;

  /**
   * Ttml Destination Settings
   * @public
   */
  TtmlDestinationSettings?: TtmlDestinationSettings | undefined;

  /**
   * Webvtt Destination Settings
   * @public
   */
  WebvttDestinationSettings?: WebvttDestinationSettings | undefined;
}

/**
 * Caption Description
 * @public
 */
export interface CaptionDescription {
  /**
   * Indicates whether the caption track implements accessibility features such as written descriptions of spoken dialog, music, and sounds. This signaling is added to HLS output group and MediaPackage output group.
   * @public
   */
  Accessibility?: AccessibilityType | undefined;

  /**
   * Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
   * @public
   */
  CaptionSelectorName: string | undefined;

  /**
   * Additional settings for captions destination that depend on the destination type.
   * @public
   */
  DestinationSettings?: CaptionDestinationSettings | undefined;

  /**
   * ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * Human readable information to indicate captions available for players (eg. English, or Spanish).
   * @public
   */
  LanguageDescription?: string | undefined;

  /**
   * Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.
   * @public
   */
  Name: string | undefined;

  /**
   * Identifies the DASH roles to assign to this captions output. Applies only when the captions output is configured for DVB DASH accessibility signaling.
   * @public
   */
  CaptionDashRoles?: DashRoleCaption[] | undefined;

  /**
   * Identifies DVB DASH accessibility signaling in this captions output. Used in Microsoft Smooth Streaming outputs to signal accessibility information to packagers.
   * @public
   */
  DvbDashAccessibility?: DvbDashAccessibility | undefined;
}

/**
 * Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
 * @public
 */
export interface CaptionLanguageMapping {
  /**
   * The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)
   * @public
   */
  CaptionChannel: number | undefined;

  /**
   * Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)
   * @public
   */
  LanguageCode: string | undefined;

  /**
   * Textual description of language
   * @public
   */
  LanguageDescription: string | undefined;
}

/**
 * Ancillary Source Settings
 * @public
 */
export interface AncillarySourceSettings {
  /**
   * Specifies the number (1 to 4) of the captions channel you want to extract from the ancillary captions. If you plan to convert the ancillary captions to another format, complete this field. If you plan to choose Embedded as the captions destination in the output (to pass through all the channels in the ancillary captions), leave this field blank because MediaLive ignores the field.
   * @public
   */
  SourceAncillaryChannelNumber?: number | undefined;
}

/**
 * Arib Source Settings
 * @public
 */
export interface AribSourceSettings {}

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
 * Dvb Sub Source Settings
 * @public
 */
export interface DvbSubSourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   * @public
   */
  OcrLanguage?: DvbSubOcrLanguage | undefined;

  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
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
export const EmbeddedScte20Detection = {
  AUTO: "AUTO",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type EmbeddedScte20Detection = (typeof EmbeddedScte20Detection)[keyof typeof EmbeddedScte20Detection];

/**
 * Embedded Source Settings
 * @public
 */
export interface EmbeddedSourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   * @public
   */
  Convert608To708?: EmbeddedConvert608To708 | undefined;

  /**
   * Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
   * @public
   */
  Scte20Detection?: EmbeddedScte20Detection | undefined;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   * @public
   */
  Source608ChannelNumber?: number | undefined;

  /**
   * This field is unused and deprecated.
   * @public
   */
  Source608TrackNumber?: number | undefined;
}

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
 * Scte20 Source Settings
 * @public
 */
export interface Scte20SourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   * @public
   */
  Convert608To708?: Scte20Convert608To708 | undefined;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   * @public
   */
  Source608ChannelNumber?: number | undefined;
}

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
 * Scte27 Source Settings
 * @public
 */
export interface Scte27SourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   * @public
   */
  OcrLanguage?: Scte27OcrLanguage | undefined;

  /**
   * The pid field is used in conjunction with the caption selector languageCode field as follows:
   *   - Specify PID and Language: Extracts captions from that PID; the language is "informational".
   *   - Specify PID and omit Language: Extracts the specified PID.
   *   - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.
   *   - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through.
   * @public
   */
  Pid?: number | undefined;
}

/**
 * Caption Rectangle
 * @public
 */
export interface CaptionRectangle {
  /**
   * See the description in leftOffset.
   * For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, \"80\" means the rectangle height is 80% of the underlying frame height. The topOffset and rectangleHeight must add up to 100% or less.
   * This field corresponds to tts:extent - Y in the TTML standard.
   * @public
   */
  Height: number | undefined;

  /**
   * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don't have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages.
   * If you specify a value for one of these fields, you must specify a value for all of them.
   * For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame.
   * This field corresponds to tts:origin - X in the TTML standard.
   * @public
   */
  LeftOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For topOffset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame.
   * This field corresponds to tts:origin - Y in the TTML standard.
   * @public
   */
  TopOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, \"80\" means the rectangle width is 80% of the underlying frame width. The leftOffset and rectangleWidth must add up to 100% or less.
   * This field corresponds to tts:extent - X in the TTML standard.
   * @public
   */
  Width: number | undefined;
}

/**
 * Teletext Source Settings
 * @public
 */
export interface TeletextSourceSettings {
  /**
   * Optionally defines a region where TTML style captions will be displayed
   * @public
   */
  OutputRectangle?: CaptionRectangle | undefined;

  /**
   * Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.
   * @public
   */
  PageNumber?: string | undefined;
}

/**
 * Caption Selector Settings
 * @public
 */
export interface CaptionSelectorSettings {
  /**
   * Ancillary Source Settings
   * @public
   */
  AncillarySourceSettings?: AncillarySourceSettings | undefined;

  /**
   * Arib Source Settings
   * @public
   */
  AribSourceSettings?: AribSourceSettings | undefined;

  /**
   * Dvb Sub Source Settings
   * @public
   */
  DvbSubSourceSettings?: DvbSubSourceSettings | undefined;

  /**
   * Embedded Source Settings
   * @public
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings | undefined;

  /**
   * Scte20 Source Settings
   * @public
   */
  Scte20SourceSettings?: Scte20SourceSettings | undefined;

  /**
   * Scte27 Source Settings
   * @public
   */
  Scte27SourceSettings?: Scte27SourceSettings | undefined;

  /**
   * Teletext Source Settings
   * @public
   */
  TeletextSourceSettings?: TeletextSourceSettings | undefined;
}

/**
 * Caption Selector
 * @public
 */
export interface CaptionSelector {
  /**
   * When specified this field indicates the three letter language code of the caption track to extract from the source.
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.
   * @public
   */
  Name: string | undefined;

  /**
   * Caption selector settings.
   * @public
   */
  SelectorSettings?: CaptionSelectorSettings | undefined;
}

/**
 * Placeholder documentation for ChannelEgressEndpoint
 * @public
 */
export interface ChannelEgressEndpoint {
  /**
   * Public IP of where a channel's output comes from
   * @public
   */
  SourceIp?: string | undefined;
}

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
 * Elemental anywhere settings
 * @public
 */
export interface DescribeAnywhereSettings {
  /**
   * The ID of the channel placement group for the channel.
   * @public
   */
  ChannelPlacementGroupId?: string | undefined;

  /**
   * The ID of the cluster for the channel.
   * @public
   */
  ClusterId?: string | undefined;
}

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
 * Placeholder documentation for CdiInputSpecification
 * @public
 */
export interface CdiInputSpecification {
  /**
   * Maximum CDI input resolution
   * @public
   */
  Resolution?: CdiInputResolution | undefined;
}

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
 * MediaPackage Output Destination Settings
 * @public
 */
export interface MediaPackageOutputDestinationSettings {
  /**
   * ID of the channel in MediaPackage that is the destination for this output group. You do not need to specify the individual inputs in MediaPackage; MediaLive will handle the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same region.
   * @public
   */
  ChannelId?: string | undefined;
}

/**
 * Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex
 * @public
 */
export interface MultiplexProgramChannelDestinationSettings {
  /**
   * The ID of the Multiplex that the encoder is providing output to. You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances.
   * The Multiplex must be in the same region as the Channel.
   * @public
   */
  MultiplexId?: string | undefined;

  /**
   * The program name of the Multiplex program that the encoder is providing output to.
   * @public
   */
  ProgramName?: string | undefined;
}

/**
 * Placeholder documentation for OutputDestinationSettings
 * @public
 */
export interface OutputDestinationSettings {
  /**
   * key used to extract the password from EC2 Parameter store
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * Stream name for RTMP destinations (URLs of type rtmp://)
   * @public
   */
  StreamName?: string | undefined;

  /**
   * A URL specifying a destination
   * @public
   */
  Url?: string | undefined;

  /**
   * username for destination
   * @public
   */
  Username?: string | undefined;
}

/**
 * Placeholder documentation for SrtOutputDestinationSettings
 * @public
 */
export interface SrtOutputDestinationSettings {
  /**
   * Arn used to extract the password from Secrets Manager
   * @public
   */
  EncryptionPassphraseSecretArn?: string | undefined;

  /**
   * Stream id for SRT destinations (URLs of type srt://)
   * @public
   */
  StreamId?: string | undefined;

  /**
   * A URL specifying a destination
   * @public
   */
  Url?: string | undefined;
}

/**
 * Placeholder documentation for OutputDestination
 * @public
 */
export interface OutputDestination {
  /**
   * User-specified id. This is used in an output group or an output.
   * @public
   */
  Id?: string | undefined;

  /**
   * Destination settings for a MediaPackage output; one destination for both encoders.
   * @public
   */
  MediaPackageSettings?: MediaPackageOutputDestinationSettings[] | undefined;

  /**
   * Destination settings for a Multiplex output; one destination for both encoders.
   * @public
   */
  MultiplexSettings?: MultiplexProgramChannelDestinationSettings | undefined;

  /**
   * Destination settings for a standard output; one destination for each redundant encoder.
   * @public
   */
  Settings?: OutputDestinationSettings[] | undefined;

  /**
   * SRT settings for an SRT output; one destination for each redundant encoder.
   * @public
   */
  SrtSettings?: SrtOutputDestinationSettings[] | undefined;
}

/**
 * Placeholder documentation for AudioSilenceFailoverSettings
 * @public
 */
export interface AudioSilenceFailoverSettings {
  /**
   * The name of the audio selector in the input that MediaLive should monitor to detect silence. Select your most important rendition. If you didn't create an audio selector in this input, leave blank.
   * @public
   */
  AudioSelectorName: string | undefined;

  /**
   * The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.
   * @public
   */
  AudioSilenceThresholdMsec?: number | undefined;
}

/**
 * MediaLive will perform a failover if content is not detected in this input for the specified period.
 * @public
 */
export interface InputLossFailoverSettings {
  /**
   * The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.
   * @public
   */
  InputLossThresholdMsec?: number | undefined;
}

/**
 * Placeholder documentation for VideoBlackFailoverSettings
 * @public
 */
export interface VideoBlackFailoverSettings {
  /**
   * A value used in calculating the threshold below which MediaLive considers a pixel to be 'black'. For the input to be considered black, every pixel in a frame must be below this threshold. The threshold is calculated as a percentage (expressed as a decimal) of white. Therefore .1 means 10% white (or 90% black). Note how the formula works for any color depth. For example, if you set this field to 0.1 in 10-bit color depth: (1023*0.1=102.3), which means a pixel value of 102 or less is 'black'. If you set this field to .1 in an 8-bit color depth: (255*0.1=25.5), which means a pixel value of 25 or less is 'black'. The range is 0.0 to 1.0, with any number of decimal places.
   * @public
   */
  BlackDetectThreshold?: number | undefined;

  /**
   * The amount of time (in milliseconds) that the active input must be black before automatic input failover occurs.
   * @public
   */
  VideoBlackThresholdMsec?: number | undefined;
}

/**
 * Settings for one failover condition.
 * @public
 */
export interface FailoverConditionSettings {
  /**
   * MediaLive will perform a failover if the specified audio selector is silent for the specified period.
   * @public
   */
  AudioSilenceSettings?: AudioSilenceFailoverSettings | undefined;

  /**
   * MediaLive will perform a failover if content is not detected in this input for the specified period.
   * @public
   */
  InputLossSettings?: InputLossFailoverSettings | undefined;

  /**
   * MediaLive will perform a failover if content is considered black for the specified period.
   * @public
   */
  VideoBlackSettings?: VideoBlackFailoverSettings | undefined;
}

/**
 * Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.
 * @public
 */
export interface FailoverCondition {
  /**
   * Failover condition type-specific settings.
   * @public
   */
  FailoverConditionSettings?: FailoverConditionSettings | undefined;
}

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
 * The settings for Automatic Input Failover.
 * @public
 */
export interface AutomaticInputFailoverSettings {
  /**
   * This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input_preference for the failover pair is set to PRIMARY_INPUT_PREFERRED, because after this time, MediaLive will switch back to the primary input.
   * @public
   */
  ErrorClearTimeMsec?: number | undefined;

  /**
   * A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input.
   * @public
   */
  FailoverConditions?: FailoverCondition[] | undefined;

  /**
   * Input preference when deciding which input to make active when a previously failed input has recovered.
   * @public
   */
  InputPreference?: InputPreference | undefined;

  /**
   * The input ID of the secondary input in the automatic input failover pair.
   * @public
   */
  SecondaryInputId: string | undefined;
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
 * Hls Input Settings
 * @public
 */
export interface HlsInputSettings {
  /**
   * When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest.
   * @public
   */
  Bandwidth?: number | undefined;

  /**
   * When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8.
   * @public
   */
  BufferSegments?: number | undefined;

  /**
   * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
   * @public
   */
  Retries?: number | undefined;

  /**
   * The number of seconds between retries when an attempt to read a manifest or segment fails.
   * @public
   */
  RetryInterval?: number | undefined;

  /**
   * Identifies the source for the SCTE-35 messages that MediaLive will ingest. Messages can be ingested from the content segments (in the stream) or from tags in the playlist (the HLS manifest). MediaLive ignores SCTE-35 information in the source that is not selected.
   * @public
   */
  Scte35Source?: HlsScte35SourceType | undefined;
}

/**
 * Multicast-specific input settings.
 * @public
 */
export interface MulticastInputSettings {
  /**
   * Optionally, a source ip address to filter by for Source-specific Multicast (SSM)
   * @public
   */
  SourceIpAddress?: string | undefined;
}

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
 * Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
 * @public
 */
export interface NetworkInputSettings {
  /**
   * Specifies HLS input settings when the uri is for a HLS manifest.
   * @public
   */
  HlsInputSettings?: HlsInputSettings | undefined;

  /**
   * Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.
   * @public
   */
  ServerValidation?: NetworkInputServerValidation | undefined;

  /**
   * Specifies multicast input settings when the uri is for a multicast event.
   * @public
   */
  MulticastInputSettings?: MulticastInputSettings | undefined;
}

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
 * Hdr10 Settings
 * @public
 */
export interface Hdr10Settings {
  /**
   * Maximum Content Light Level
   * An integer metadata value defining the maximum light level, in nits,
   * of any single pixel within an encoded HDR video stream or file.
   * @public
   */
  MaxCll?: number | undefined;

  /**
   * Maximum Frame Average Light Level
   * An integer metadata value defining the maximum average light level, in nits,
   * for any single frame within an encoded HDR video stream or file.
   * @public
   */
  MaxFall?: number | undefined;
}

/**
 * Video Selector Color Space Settings
 * @public
 */
export interface VideoSelectorColorSpaceSettings {
  /**
   * Hdr10 Settings
   * @public
   */
  Hdr10Settings?: Hdr10Settings | undefined;
}

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
 * Video Selector Pid
 * @public
 */
export interface VideoSelectorPid {
  /**
   * Selects a specific PID from within a video source.
   * @public
   */
  Pid?: number | undefined;
}

/**
 * Video Selector Program Id
 * @public
 */
export interface VideoSelectorProgramId {
  /**
   * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.
   * @public
   */
  ProgramId?: number | undefined;
}

/**
 * Video Selector Settings
 * @public
 */
export interface VideoSelectorSettings {
  /**
   * Video Selector Pid
   * @public
   */
  VideoSelectorPid?: VideoSelectorPid | undefined;

  /**
   * Video Selector Program Id
   * @public
   */
  VideoSelectorProgramId?: VideoSelectorProgramId | undefined;
}

/**
 * Specifies a particular video stream within an input source. An input may have only a single video selector.
 * @public
 */
export interface VideoSelector {
  /**
   * Specifies the color space of an input. This setting works in tandem with colorSpaceUsage and a video description's colorSpaceSettingsChoice to determine if any conversion will be performed.
   * @public
   */
  ColorSpace?: VideoSelectorColorSpace | undefined;

  /**
   * Color space settings
   * @public
   */
  ColorSpaceSettings?: VideoSelectorColorSpaceSettings | undefined;

  /**
   * Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
   * @public
   */
  ColorSpaceUsage?: VideoSelectorColorSpaceUsage | undefined;

  /**
   * The video selector settings.
   * @public
   */
  SelectorSettings?: VideoSelectorSettings | undefined;
}

/**
 * Live Event input parameters. There can be multiple inputs in a single Live Event.
 * @public
 */
export interface InputSettings {
  /**
   * Used to select the audio stream to decode for inputs that have multiple available.
   * @public
   */
  AudioSelectors?: AudioSelector[] | undefined;

  /**
   * Used to select the caption input to use for inputs that have multiple available.
   * @public
   */
  CaptionSelectors?: CaptionSelector[] | undefined;

  /**
   * Enable or disable the deblock filter when filtering.
   * @public
   */
  DeblockFilter?: InputDeblockFilter | undefined;

  /**
   * Enable or disable the denoise filter when filtering.
   * @public
   */
  DenoiseFilter?: InputDenoiseFilter | undefined;

  /**
   * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
   * @public
   */
  FilterStrength?: number | undefined;

  /**
   * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.
   * 1) auto - filtering will be applied depending on input type/quality
   * 2) disabled - no filtering will be applied to the input
   * 3) forced - filtering will be applied regardless of input type
   * @public
   */
  InputFilter?: InputFilter | undefined;

  /**
   * Input settings.
   * @public
   */
  NetworkInputSettings?: NetworkInputSettings | undefined;

  /**
   * PID from which to read SCTE-35 messages. If left undefined, EML will select the first SCTE-35 PID found in the input.
   * @public
   */
  Scte35Pid?: number | undefined;

  /**
   * Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input. Applicable data types are captions, timecode, AFD, and SCTE-104 messages.
   * - PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any).
   * - IGNORE: Never extract any ancillary data from SMPTE-2038.
   * @public
   */
  Smpte2038DataPreference?: Smpte2038DataPreference | undefined;

  /**
   * Loop input if it is a file. This allows a file input to be streamed indefinitely.
   * @public
   */
  SourceEndBehavior?: InputSourceEndBehavior | undefined;

  /**
   * Informs which video elementary stream to decode for input types that have multiple available.
   * @public
   */
  VideoSelector?: VideoSelector | undefined;
}

/**
 * Placeholder documentation for InputAttachment
 * @public
 */
export interface InputAttachment {
  /**
   * User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input.
   * @public
   */
  AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings | undefined;

  /**
   * User-specified name for the attachment. This is required if the user wants to use this input in an input switch action.
   * @public
   */
  InputAttachmentName?: string | undefined;

  /**
   * The ID of the input
   * @public
   */
  InputId?: string | undefined;

  /**
   * Settings of an input (caption selector, etc.)
   * @public
   */
  InputSettings?: InputSettings | undefined;

  /**
   * Optional assignment of an input to a logical interface on the Node. Only applies to on premises channels.
   * @public
   */
  LogicalInterfaceNames?: string[] | undefined;
}

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
 * Placeholder documentation for InputSpecification
 * @public
 */
export interface InputSpecification {
  /**
   * Input codec
   * @public
   */
  Codec?: InputCodec | undefined;

  /**
   * Maximum input bitrate, categorized coarsely
   * @public
   */
  MaximumBitrate?: InputMaximumBitrate | undefined;

  /**
   * Input resolution, categorized coarsely
   * @public
   */
  Resolution?: InputResolution | undefined;
}

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
 * Placeholder documentation for MaintenanceStatus
 * @public
 */
export interface MaintenanceStatus {
  /**
   * The currently selected maintenance day.
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * Maintenance is required by the displayed date and time. Date and time is in ISO.
   * @public
   */
  MaintenanceDeadline?: string | undefined;

  /**
   * The currently scheduled maintenance date and time. Date and time is in ISO.
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * The currently selected maintenance start time. Time is in UTC.
   * @public
   */
  MaintenanceStartTime?: string | undefined;
}

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
 * The properties for a private VPC Output
 * @public
 */
export interface VpcOutputSettingsDescription {
  /**
   * The Availability Zones where the vpc subnets are located.
   * The first Availability Zone applies to the first subnet in the list of subnets.
   * The second Availability Zone applies to the second subnet.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of Elastic Network Interfaces created by MediaLive in the customer's VPC
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * A list of up EC2 VPC security group IDs attached to the Output VPC network interfaces.
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * Placeholder documentation for ChannelSummary
 * @public
 */
export interface ChannelSummary {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for any VPC outputs.
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * AnywhereSettings settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;
}

/**
 * Placeholder documentation for CloudWatchAlarmTemplateGroupSummary
 * @public
 */
export interface CloudWatchAlarmTemplateGroupSummary {
  /**
   * A cloudwatch alarm template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The number of templates in a group.
   * @public
   */
  TemplateCount: number | undefined;
}

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
 * Placeholder documentation for CloudWatchAlarmTemplateSummary
 * @public
 */
export interface CloudWatchAlarmTemplateSummary {
  /**
   * A cloudwatch alarm template's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods: number | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId: string | undefined;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period: number | undefined;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic: CloudWatchAlarmTemplateStatistic | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType: CloudWatchAlarmTemplateTargetResourceType | undefined;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold: number | undefined;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData: CloudWatchAlarmTemplateTreatMissingData | undefined;
}

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
 * Property of ColorCorrectionSettings. Used for custom color space conversion. The object identifies one 3D LUT file and specifies the input/output color space combination that the file will be used for.
 * @public
 */
export interface ColorCorrection {
  /**
   * The color space of the input.
   * @public
   */
  InputColorSpace: ColorSpace | undefined;

  /**
   * The color space of the output.
   * @public
   */
  OutputColorSpace: ColorSpace | undefined;

  /**
   * The URI of the 3D LUT file. The protocol must be 's3:' or 's3ssl:':.
   * @public
   */
  Uri: string | undefined;
}

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
 * Contains the response for ListChannelPlacementGroups
 * @public
 */
export interface DescribeChannelPlacementGroupSummary {
  /**
   * The ARN of this ChannelPlacementGroup. It is automatically assigned when the ChannelPlacementGroup is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[] | undefined;

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState | undefined;
}

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
 * Used in ClusterNetworkSettings
 * @public
 */
export interface InterfaceMapping {
  /**
   * The logical name for one interface (on every Node) that handles a specific type of traffic. We recommend that the name hints at the physical interface it applies to. For example, it could refer to the traffic that the physical interface handles. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The ID of the network that you want to connect to the specified logicalInterfaceName.
   * @public
   */
  NetworkId?: string | undefined;
}

/**
 * Used in DescribeClusterResult, DescribeClusterSummary, UpdateClusterResult.
 * @public
 */
export interface ClusterNetworkSettings {
  /**
   * The network interface that is the default route for traffic to and from the node. MediaLive Anywhere uses this default when the destination for the traffic isn't covered by the route table for any of the networks. Specify the value of the appropriate logicalInterfaceName parameter that you create in the interfaceMappings.
   * @public
   */
  DefaultRoute?: string | undefined;

  /**
   * An array of interfaceMapping objects for this Cluster. Each mapping logically connects one interface on the nodes with one Network. You need only one mapping for each interface because all the Nodes share the mapping.
   * @public
   */
  InterfaceMappings?: InterfaceMapping[] | undefined;
}

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
 * Used in ListClustersResult.
 * @public
 */
export interface DescribeClusterSummary {
  /**
   * The ARN of this Cluster. It is automatically assigned when the Cluster is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * An array of the IDs of the Channels that are associated with this Cluster. One Channel is associated with the Cluster as follows: A Channel belongs to a ChannelPlacementGroup. A ChannelPlacementGroup is attached to a Node. A Node belongs to a Cluster.
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * The hardware type for the Cluster.
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The ID of the Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings | undefined;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState | undefined;
}

/**
 * Used in DescribeNetworkResult, DescribeNetworkSummary, UpdateNetworkResult.
 * @public
 */
export interface IpPool {
  /**
   * A CIDR block of IP addresses that are reserved for MediaLive Anywhere.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Used in DescribeNetworkResult, DescribeNetworkSummary, UpdateNetworkResult.
 * @public
 */
export interface Route {
  /**
   * A CIDR block for one Route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The IP address of the Gateway for this route, if applicable.
   * @public
   */
  Gateway?: string | undefined;
}

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
 * Used in ListNetworksResult.
 * @public
 */
export interface DescribeNetworkSummary {
  /**
   * The ARN of this Network. It is automatically assigned when the Network is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[] | undefined;

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in your organization's network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[] | undefined;

  /**
   * The name that you specified for this Network.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState | undefined;
}

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
 * A mapping that's used to pair a logical network interface name on a Node with the physical interface name exposed in the operating system.
 * @public
 */
export interface NodeInterfaceMapping {
  /**
   * A uniform logical interface name to address in a MediaLive channel configuration.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * Used in NodeInterfaceMapping and NodeInterfaceMappingCreateRequest
   * @public
   */
  NetworkInterfaceMode?: NetworkInterfaceMode | undefined;

  /**
   * The name of the physical interface on the hardware that will be running Elemental anywhere.
   * @public
   */
  PhysicalInterfaceName?: string | undefined;
}

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
 * Placeholder documentation for DescribeNodeSummary
 * @public
 */
export interface DescribeNodeSummary {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The EC2 ARN of the Instance associated with the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * At the routing layer will get it from the callerId/context for use with bring your own device.
   * @public
   */
  ManagedInstanceId?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;
}

/**
 * Placeholder documentation for EventBridgeRuleTemplateGroupSummary
 * @public
 */
export interface EventBridgeRuleTemplateGroupSummary {
  /**
   * An eventbridge rule template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The number of templates in a group.
   * @public
   */
  TemplateCount: number | undefined;
}

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
 * Placeholder documentation for EventBridgeRuleTemplateSummary
 * @public
 */
export interface EventBridgeRuleTemplateSummary {
  /**
   * An eventbridge rule template's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of targets configured to send matching events.
   * @public
   */
  EventTargetCount: number | undefined;

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId: string | undefined;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The target to which to send matching events.
 * @public
 */
export interface EventBridgeRuleTemplateTarget {
  /**
   * Target ARNs must be either an SNS topic or CloudWatch log group.
   * @public
   */
  Arn: string | undefined;
}

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
 * A network route configuration.
 * @public
 */
export interface InputDestinationRoute {
  /**
   * The CIDR of the route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * An optional gateway for the route.
   * @public
   */
  Gateway?: string | undefined;
}

/**
 * The properties for a VPC type input destination.
 * @public
 */
export interface InputDestinationVpc {
  /**
   * The availability zone of the Input destination.
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The network interface ID of the Input destination in the VPC.
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * The settings for a PUSH type input.
 * @public
 */
export interface InputDestination {
  /**
   * The system-generated static IP address of endpoint.
   * It remains fixed for the lifetime of the input.
   * @public
   */
  Ip?: string | undefined;

  /**
   * The port number for the input.
   * @public
   */
  Port?: string | undefined;

  /**
   * This represents the endpoint that the customer stream will be
   * pushed to.
   * @public
   */
  Url?: string | undefined;

  /**
   * The properties for a VPC type input destination.
   * @public
   */
  Vpc?: InputDestinationVpc | undefined;

  /**
   * The ID of the attached network.
   * @public
   */
  Network?: string | undefined;

  /**
   * If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input
   * is going to be on the customer local network.
   * @public
   */
  NetworkRoutes?: InputDestinationRoute[] | undefined;
}

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
 * Settings for an input device.
 * @public
 */
export interface InputDeviceSettings {
  /**
   * The unique ID for the device.
   * @public
   */
  Id?: string | undefined;
}

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
 * The settings for a MediaConnect Flow.
 * @public
 */
export interface MediaConnectFlow {
  /**
   * The unique ARN of the MediaConnect Flow being used as a source.
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * Pair of multicast url and source ip address (optional) that make up a multicast source.
 * @public
 */
export interface MulticastSource {
  /**
   * This represents the ip address of the device sending the multicast stream.
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * This represents the customer's source URL where multicast stream is pulled from.
   * @public
   */
  Url: string | undefined;
}

/**
 * Settings for a Multicast input. Contains a list of multicast Urls and optional source ip addresses.
 * @public
 */
export interface MulticastSettings {
  /**
   * Placeholder documentation for __listOfMulticastSource
   * @public
   */
  Sources?: MulticastSource[] | undefined;
}

/**
 * The settings for a PULL type input.
 * @public
 */
export interface InputSource {
  /**
   * The key used to extract the password from EC2 Parameter store.
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   * @public
   */
  Url?: string | undefined;

  /**
   * The username for the input source.
   * @public
   */
  Username?: string | undefined;
}

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
 * The decryption settings for the SRT caller source. Present only if the source has decryption enabled.
 * @public
 */
export interface SrtCallerDecryption {
  /**
   * The algorithm used to encrypt content.
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.
   * @public
   */
  PassphraseSecretArn?: string | undefined;
}

/**
 * The configuration for a source that uses SRT as the connection protocol. In terms of establishing the connection, MediaLive is always caller and the upstream system is always the listener. In terms of transmission of the source content, MediaLive is always the receiver and the upstream system is always the sender.
 * @public
 */
export interface SrtCallerSource {
  /**
   * The decryption settings for the SRT caller source. Present only if the source has decryption enabled.
   * @public
   */
  Decryption?: SrtCallerDecryption | undefined;

  /**
   * The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.
   * @public
   */
  MinimumLatency?: number | undefined;

  /**
   * The IP address at the upstream system (the listener) that MediaLive (the caller) connects to.
   * @public
   */
  SrtListenerAddress?: string | undefined;

  /**
   * The port at the upstream system (the listener) that MediaLive (the caller) connects to.
   * @public
   */
  SrtListenerPort?: string | undefined;

  /**
   * The stream ID, if the upstream system uses this identifier.
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * The configured sources for this SRT input.
 * @public
 */
export interface SrtSettings {
  /**
   * Placeholder documentation for __listOfSrtCallerSource
   * @public
   */
  SrtCallerSources?: SrtCallerSource[] | undefined;
}

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
  MP4_FILE: "MP4_FILE",
  MULTICAST: "MULTICAST",
  RTMP_PULL: "RTMP_PULL",
  RTMP_PUSH: "RTMP_PUSH",
  RTP_PUSH: "RTP_PUSH",
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
 * Placeholder documentation for Input
 * @public
 */
export interface Input {
  /**
   * The Unique ARN of the input (generated, immutable).
   * @public
   */
  Arn?: string | undefined;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   * @public
   */
  AttachedChannels?: string[] | undefined;

  /**
   * A list of the destinations of the input (PUSH-type).
   * @public
   */
  Destinations?: InputDestination[] | undefined;

  /**
   * The generated ID of the input (unique for user account, immutable).
   * @public
   */
  Id?: string | undefined;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   * @public
   */
  InputClass?: InputClass | undefined;

  /**
   * Settings for the input devices.
   * @public
   */
  InputDevices?: InputDeviceSettings[] | undefined;

  /**
   * A list of IDs for all Inputs which are partners of this one.
   * @public
   */
  InputPartnerIds?: string[] | undefined;

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   * @public
   */
  InputSourceType?: InputSourceType | undefined;

  /**
   * A list of MediaConnect Flows for this input.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlow[] | undefined;

  /**
   * The user-assigned name (This is a mutable value).
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * A list of the sources of the input (PULL-type).
   * @public
   */
  Sources?: InputSource[] | undefined;

  /**
   * Placeholder documentation for InputState
   * @public
   */
  State?: InputState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   * @public
   */
  Type?: InputType | undefined;

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettings | undefined;

  /**
   * The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
   * an input in a customer network.
   * @public
   */
  InputNetworkLocation?: InputNetworkLocation | undefined;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettings | undefined;
}

/**
 * A network route configuration.
 * @public
 */
export interface InputRequestDestinationRoute {
  /**
   * The CIDR of the route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * An optional gateway for the route.
   * @public
   */
  Gateway?: string | undefined;
}

/**
 * Endpoint settings for a PUSH type input.
 * @public
 */
export interface InputDestinationRequest {
  /**
   * A unique name for the location the RTMP stream is being pushed
   * to.
   * @public
   */
  StreamName?: string | undefined;

  /**
   * If the push input has an input location of ON-PREM, ID the ID of the attached network.
   * @public
   */
  Network?: string | undefined;

  /**
   * If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input
   * is going to be on the customer local network.
   * @public
   */
  NetworkRoutes?: InputRequestDestinationRoute[] | undefined;

  /**
   * If the push input has an input location of ON-PREM it's optional to specify what the ip address
   * of the input is going to be on the customer local network.
   * @public
   */
  StaticIpAddress?: string | undefined;
}

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
 * One audio configuration that specifies the format for one audio pair that the device produces as output.
 * @public
 */
export interface InputDeviceConfigurableAudioChannelPairConfig {
  /**
   * The ID for one audio pair configuration, a value from 1 to 8.
   * @public
   */
  Id?: number | undefined;

  /**
   * The profile to set for one audio pair configuration. Choose an enumeration value. Each value describes one audio configuration using the format (rate control algorithm)-(codec)_(quality)-(bitrate in bytes). For example, CBR-AAC_HQ-192000. Or choose DISABLED, in which case the device won't produce audio for this pair.
   * @public
   */
  Profile?: InputDeviceConfigurableAudioChannelPairProfile | undefined;
}

/**
 * Settings for an input device.
 * @public
 */
export interface InputDeviceRequest {
  /**
   * The unique ID for the device.
   * @public
   */
  Id?: string | undefined;
}

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
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 * @public
 */
export interface InputDeviceHdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   * @public
   */
  ActiveInput?: InputDeviceActiveInput | undefined;

  /**
   * The source at the input device that is currently active. You can specify this source.
   * @public
   */
  ConfiguredInput?: InputDeviceConfiguredInput | undefined;

  /**
   * The state of the input device.
   * @public
   */
  DeviceState?: InputDeviceState | undefined;

  /**
   * The frame rate of the video source.
   * @public
   */
  Framerate?: number | undefined;

  /**
   * The height of the video source, in pixels.
   * @public
   */
  Height?: number | undefined;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The scan type of the video source.
   * @public
   */
  ScanType?: InputDeviceScanType | undefined;

  /**
   * The width of the video source, in pixels.
   * @public
   */
  Width?: number | undefined;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.
   * @public
   */
  LatencyMs?: number | undefined;
}

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
 * The network settings for the input device.
 * @public
 */
export interface InputDeviceNetworkSettings {
  /**
   * The DNS addresses of the input device.
   * @public
   */
  DnsAddresses?: string[] | undefined;

  /**
   * The network gateway IP address.
   * @public
   */
  Gateway?: string | undefined;

  /**
   * The IP address of the input device.
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.
   * @public
   */
  IpScheme?: InputDeviceIpScheme | undefined;

  /**
   * The subnet mask of the input device.
   * @public
   */
  SubnetMask?: string | undefined;
}

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
 * One audio configuration that specifies the format for one audio pair that the device produces as output.
 * @public
 */
export interface InputDeviceUhdAudioChannelPairConfig {
  /**
   * The ID for one audio pair configuration, a value from 1 to 8.
   * @public
   */
  Id?: number | undefined;

  /**
   * The profile for one audio pair configuration. This property describes one audio configuration in the format (rate control algorithm)-(codec)_(quality)-(bitrate in bytes). For example, CBR-AAC_HQ-192000. Or DISABLED, in which case the device won't produce audio for this pair.
   * @public
   */
  Profile?: InputDeviceUhdAudioChannelPairProfile | undefined;
}

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
 * Information about the MediaConnect flow attached to the device.
 * @public
 */
export interface InputDeviceMediaConnectSettings {
  /**
   * The ARN of the MediaConnect flow.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN for the role that MediaLive assumes to access the attached flow and secret.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN of the secret used to encrypt the stream.
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The name of the MediaConnect flow source.
   * @public
   */
  SourceName?: string | undefined;
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 * @public
 */
export interface InputDeviceUhdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   * @public
   */
  ActiveInput?: InputDeviceActiveInput | undefined;

  /**
   * The source at the input device that is currently active. You can specify this source.
   * @public
   */
  ConfiguredInput?: InputDeviceConfiguredInput | undefined;

  /**
   * The state of the input device.
   * @public
   */
  DeviceState?: InputDeviceState | undefined;

  /**
   * The frame rate of the video source.
   * @public
   */
  Framerate?: number | undefined;

  /**
   * The height of the video source, in pixels.
   * @public
   */
  Height?: number | undefined;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The scan type of the video source.
   * @public
   */
  ScanType?: InputDeviceScanType | undefined;

  /**
   * The width of the video source, in pixels.
   * @public
   */
  Width?: number | undefined;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.
   * @public
   */
  LatencyMs?: number | undefined;

  /**
   * The codec for the video that the device produces.
   * @public
   */
  Codec?: InputDeviceCodec | undefined;

  /**
   * Information about the MediaConnect flow attached to the device. Returned only if the outputType is MEDIACONNECT_FLOW.
   * @public
   */
  MediaconnectSettings?: InputDeviceMediaConnectSettings | undefined;

  /**
   * An array of eight audio configurations, one for each audio pair in the source. Each audio configuration specifies either to exclude the pair, or to format it and include it in the output from the UHD device. Applies only when the device is configured as the source for a MediaConnect flow.
   * @public
   */
  AudioChannelPairs?: InputDeviceUhdAudioChannelPairConfig[] | undefined;
}

/**
 * Details of the input device.
 * @public
 */
export interface InputDeviceSummary {
  /**
   * The unique ARN of the input device.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The state of the connection between the input device and AWS.
   * @public
   */
  ConnectionState?: InputDeviceConnectionState | undefined;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   * @public
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | undefined;

  /**
   * The status of software on the input device.
   * @public
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | undefined;

  /**
   * Settings that describe an input device that is type HD.
   * @public
   */
  HdDeviceSettings?: InputDeviceHdSettings | undefined;

  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string | undefined;

  /**
   * The network MAC address of the input device.
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * A name that you specify for the input device.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings for the input device.
   * @public
   */
  NetworkSettings?: InputDeviceNetworkSettings | undefined;

  /**
   * The unique serial number of the input device.
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The type of the input device.
   * @public
   */
  Type?: InputDeviceType | undefined;

  /**
   * Settings that describe an input device that is type UHD.
   * @public
   */
  UhdDeviceSettings?: InputDeviceUhdSettings | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Availability Zone associated with this input device.
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   * @public
   */
  MedialiveInputArns?: string[] | undefined;

  /**
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   * @public
   */
  OutputType?: InputDeviceOutputType | undefined;
}

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
 * Whitelist rule
 * @public
 */
export interface InputWhitelistRule {
  /**
   * The IPv4 CIDR that's whitelisted.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * An Input Security Group
 * @public
 */
export interface InputSecurityGroup {
  /**
   * Unique ARN of Input Security Group
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Id of the Input Security Group
   * @public
   */
  Id?: string | undefined;

  /**
   * The list of inputs currently using this Input Security Group.
   * @public
   */
  Inputs?: string[] | undefined;

  /**
   * The current state of the Input Security Group.
   * @public
   */
  State?: InputSecurityGroupState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Whitelist rules and their sync status
   * @public
   */
  WhitelistRules?: InputWhitelistRule[] | undefined;
}

/**
 * Settings for for a PULL type input.
 * @public
 */
export interface InputSourceRequest {
  /**
   * The key used to extract the password from EC2 Parameter store.
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   * @public
   */
  Url?: string | undefined;

  /**
   * The username for the input source.
   * @public
   */
  Username?: string | undefined;
}

/**
 * An IPv4 CIDR to whitelist.
 * @public
 */
export interface InputWhitelistRuleCidr {
  /**
   * The IPv4 CIDR to whitelist.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Used in ClusterNetworkSettingsCreateRequest.
 * @public
 */
export interface InterfaceMappingCreateRequest {
  /**
   * The logical name for one interface (on every Node) that handles a specific type of traffic. We recommend that the name hints at the physical interface it applies to. For example, it could refer to the traffic that the physical interface handles. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The ID of the network that you want to connect to the specified logicalInterfaceName.
   * @public
   */
  NetworkId?: string | undefined;
}

/**
 * Placeholder documentation for InterfaceMappingUpdateRequest
 * @public
 */
export interface InterfaceMappingUpdateRequest {
  /**
   * The logical name for one interface (on every Node) that handles a specific type of traffic. We recommend that the name hints at the physical interface it applies to. For example, it could refer to the traffic that the physical interface handles. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The ID of the network that you want to connect to the specified logicalInterfaceName. You can use the ListNetworks operation to discover all the IDs.
   * @public
   */
  NetworkId?: string | undefined;
}

/**
 * Used in CreateNetworkRequest.
 * @public
 */
export interface IpPoolCreateRequest {
  /**
   * A CIDR block of IP addresses to reserve for MediaLive Anywhere.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Used in UpdateNetworkRequest.
 * @public
 */
export interface IpPoolUpdateRequest {
  /**
   * A CIDR block of IP addresses to reserve for MediaLive Anywhere.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * The settings for a MediaConnect Flow.
 * @public
 */
export interface MediaConnectFlowRequest {
  /**
   * The ARN of the MediaConnect Flow that you want to use as a source.
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * A direct source or destination neighbor to an AWS media resource.
 * @public
 */
export interface MediaResourceNeighbor {
  /**
   * The ARN of a resource used in AWS media workflows.
   * @public
   */
  Arn: string | undefined;

  /**
   * The logical name of an AWS media resource.
   * @public
   */
  Name?: string | undefined;
}

/**
 * Pair of multicast url and source ip address (optional) that make up a multicast source.
 * @public
 */
export interface MulticastSourceCreateRequest {
  /**
   * This represents the ip address of the device sending the multicast stream.
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * This represents the customer's source URL where multicast stream is pulled from.
   * @public
   */
  Url: string | undefined;
}

/**
 * Pair of multicast url and source ip address (optional) that make up a multicast source.
 * @public
 */
export interface MulticastSourceUpdateRequest {
  /**
   * This represents the ip address of the device sending the multicast stream.
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * This represents the customer's source URL where multicast stream is pulled from.
   * @public
   */
  Url: string | undefined;
}

/**
 * Multiplex MediaConnect output destination settings.
 * @public
 */
export interface MultiplexMediaConnectOutputDestinationSettings {
  /**
   * The MediaConnect entitlement ARN available as a Flow source.
   * @public
   */
  EntitlementArn?: string | undefined;
}

/**
 * Multiplex output destination settings
 * @public
 */
export interface MultiplexOutputDestination {
  /**
   * Multiplex MediaConnect output destination settings.
   * @public
   */
  MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings | undefined;
}

/**
 * The current source for one of the pipelines in the multiplex.
 * @public
 */
export interface MultiplexProgramPipelineDetail {
  /**
   * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
   * @public
   */
  ActiveChannelPipeline?: string | undefined;

  /**
   * Identifies a specific pipeline in the multiplex.
   * @public
   */
  PipelineId?: string | undefined;
}

/**
 * Placeholder documentation for MultiplexProgramSummary
 * @public
 */
export interface MultiplexProgramSummary {
  /**
   * The MediaLive Channel associated with the program.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string | undefined;
}

/**
 * Contains summary configuration for a Multiplex event.
 * @public
 */
export interface MultiplexSettingsSummary {
  /**
   * Transport stream bit rate.
   * @public
   */
  TransportStreamBitrate?: number | undefined;
}

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
 * Placeholder documentation for MultiplexSummary
 * @public
 */
export interface MultiplexSummary {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string | undefined;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettingsSummary | undefined;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number | undefined;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Used in CreateNodeRequest.
 * @public
 */
export interface NodeInterfaceMappingCreateRequest {
  /**
   * Specify one of the logicalInterfaceNames that you created in the Cluster that this node belongs to. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The style of the network -- NAT or BRIDGE.
   * @public
   */
  NetworkInterfaceMode?: NetworkInterfaceMode | undefined;

  /**
   * Specify the physical name that corresponds to the logicalInterfaceName that you specified in this interface mapping. For example, Eth1 or ENO1234EXAMPLE.
   * @public
   */
  PhysicalInterfaceName?: string | undefined;
}

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
 * Resource configuration (codec, resolution, bitrate, ...)
 * @public
 */
export interface ReservationResourceSpecification {
  /**
   * Channel class, e.g. 'STANDARD'
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * Codec, e.g. 'AVC'
   * @public
   */
  Codec?: ReservationCodec | undefined;

  /**
   * Maximum bitrate, e.g. 'MAX_20_MBPS'
   * @public
   */
  MaximumBitrate?: ReservationMaximumBitrate | undefined;

  /**
   * Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)
   * @public
   */
  MaximumFramerate?: ReservationMaximumFramerate | undefined;

  /**
   * Resolution, e.g. 'HD'
   * @public
   */
  Resolution?: ReservationResolution | undefined;

  /**
   * Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: ReservationResourceType | undefined;

  /**
   * Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)
   * @public
   */
  SpecialFeature?: ReservationSpecialFeature | undefined;

  /**
   * Video quality, e.g. 'STANDARD' (Outputs only)
   * @public
   */
  VideoQuality?: ReservationVideoQuality | undefined;
}

/**
 * Reserved resources available for purchase
 * @public
 */
export interface Offering {
  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   * @public
   */
  Arn?: string | undefined;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number | undefined;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits | undefined;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string | undefined;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType | undefined;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string | undefined;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification | undefined;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number | undefined;
}

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
 * DVB Network Information Table (NIT)
 * @public
 */
export interface DvbNitSettings {
  /**
   * The numeric value placed in the Network Information Table (NIT).
   * @public
   */
  NetworkId: number | undefined;

  /**
   * The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  RepInterval?: number | undefined;
}

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
 * DVB Service Description Table (SDT)
 * @public
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information.
   * @public
   */
  OutputSdt?: DvbSdtOutputSdt | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  RepInterval?: number | undefined;

  /**
   * The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   * @public
   */
  ServiceProviderName?: string | undefined;
}

/**
 * DVB Time and Date Table (SDT)
 * @public
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  RepInterval?: number | undefined;
}

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
 * M2ts Settings
 * @public
 */
export interface M2tsSettings {
  /**
   * When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
   * @public
   */
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior | undefined;

  /**
   * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
   * @public
   */
  Arib?: M2tsArib | undefined;

  /**
   * Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  AribCaptionsPid?: string | undefined;

  /**
   * If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number.
   * @public
   */
  AribCaptionsPidControl?: M2tsAribCaptionsPidControl | undefined;

  /**
   * When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.
   * @public
   */
  AudioBufferModel?: M2tsAudioBufferModel | undefined;

  /**
   * The number of audio frames to insert for each PES packet.
   * @public
   */
  AudioFramesPerPes?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  AudioPids?: string | undefined;

  /**
   * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
   * @public
   */
  AudioStreamType?: M2tsAudioStreamType | undefined;

  /**
   * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Controls the timing accuracy for output network traffic. Leave as MULTIPLEX to ensure accurate network packet timing. Or set to NONE, which might result in lower latency but will result in more variability in output network packet timing. This variability might cause interruptions, jitter, or bursty behavior in your playback or receiving devices.
   * @public
   */
  BufferModel?: M2tsBufferModel | undefined;

  /**
   * When set to enabled, generates captionServiceDescriptor in PMT.
   * @public
   */
  CcDescriptor?: M2tsCcDescriptor | undefined;

  /**
   * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
   * @public
   */
  DvbNitSettings?: DvbNitSettings | undefined;

  /**
   * Inserts DVB Service Description Table (SDT) at the specified table repetition interval.
   * @public
   */
  DvbSdtSettings?: DvbSdtSettings | undefined;

  /**
   * Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  DvbSubPids?: string | undefined;

  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
   * @public
   */
  DvbTdtSettings?: DvbTdtSettings | undefined;

  /**
   * Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  DvbTeletextPid?: string | undefined;

  /**
   * If set to passthrough, passes any EBIF data from the input source to this output.
   * @public
   */
  Ebif?: M2tsEbifControl | undefined;

  /**
   * When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval.
   * @public
   */
  EbpAudioInterval?: M2tsAudioInterval | undefined;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   * @public
   */
  EbpLookaheadMs?: number | undefined;

  /**
   * Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID.
   * @public
   */
  EbpPlacement?: M2tsEbpPlacement | undefined;

  /**
   * This field is unused and deprecated.
   * @public
   */
  EcmPid?: string | undefined;

  /**
   * Include or exclude the ES Rate field in the PES header.
   * @public
   */
  EsRateInPes?: M2tsEsRateInPes | undefined;

  /**
   * Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  EtvPlatformPid?: string | undefined;

  /**
   * Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  EtvSignalPid?: string | undefined;

  /**
   * The length in seconds of each fragment. Only used with EBP markers.
   * @public
   */
  FragmentTime?: number | undefined;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   * @public
   */
  Klv?: M2tsKlv | undefined;

  /**
   * Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  KlvDataPids?: string | undefined;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3Behavior?: M2tsNielsenId3Behavior | undefined;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   * @public
   */
  NullPacketBitrate?: number | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000.
   * @public
   */
  PatInterval?: number | undefined;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   * @public
   */
  PcrControl?: M2tsPcrControl | undefined;

  /**
   * Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.
   * @public
   */
  PcrPeriod?: number | undefined;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  PcrPid?: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
   * @public
   */
  PmtInterval?: number | undefined;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  PmtPid?: string | undefined;

  /**
   * The value of the program number field in the Program Map Table.
   * @public
   */
  ProgramNum?: number | undefined;

  /**
   * When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set.
   * @public
   */
  RateMode?: M2tsRateMode | undefined;

  /**
   * Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  Scte27Pids?: string | undefined;

  /**
   * Optionally pass SCTE-35 signals from the input source to this output.
   * @public
   */
  Scte35Control?: M2tsScte35Control | undefined;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  Scte35Pid?: string | undefined;

  /**
   * Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   * @public
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | undefined;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.
   *
   * When a segmentation style of "resetCadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.
   *
   * When a segmentation style of "maintainCadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
   * @public
   */
  SegmentationStyle?: M2tsSegmentationStyle | undefined;

  /**
   * The length in seconds of each segment. Required unless markers is set to _none_.
   * @public
   */
  SegmentationTime?: number | undefined;

  /**
   * When set to passthrough, timed metadata will be passed through from input to output.
   * @public
   */
  TimedMetadataBehavior?: M2tsTimedMetadataBehavior | undefined;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  TimedMetadataPid?: string | undefined;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   * @public
   */
  TransportStreamId?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  VideoPid?: string | undefined;

  /**
   * Defines the amount SCTE-35 preroll will be increased (in milliseconds) on the output. Preroll is the amount of time between the presence of a SCTE-35 indication in a transport stream and the PTS of the video frame it references. Zero means don't add pullup (it doesn't mean set the preroll to zero). Negative pullup is not supported, which means that you can't make the preroll shorter. Be aware that latency in the output will increase by the pullup amount.
   * @public
   */
  Scte35PrerollPullupMilliseconds?: number | undefined;
}

/**
 * Raw Settings
 * @public
 */
export interface RawSettings {}

/**
 * Archive Container Settings
 * @public
 */
export interface ArchiveContainerSettings {
  /**
   * M2ts Settings
   * @public
   */
  M2tsSettings?: M2tsSettings | undefined;

  /**
   * Raw Settings
   * @public
   */
  RawSettings?: RawSettings | undefined;
}

/**
 * Archive Output Settings
 * @public
 */
export interface ArchiveOutputSettings {
  /**
   * Settings specific to the container type of the file.
   * @public
   */
  ContainerSettings: ArchiveContainerSettings | undefined;

  /**
   * Output file extension. If excluded, this will be auto-selected from the container type.
   * @public
   */
  Extension?: string | undefined;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   * @public
   */
  NameModifier?: string | undefined;
}

/**
 * Cmaf Ingest Output Settings
 * @public
 */
export interface CmafIngestOutputSettings {
  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   * @public
   */
  NameModifier?: string | undefined;
}
