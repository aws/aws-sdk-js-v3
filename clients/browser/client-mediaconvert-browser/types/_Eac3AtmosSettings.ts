/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
 */
export interface _Eac3AtmosSettings {
  /**
   * Specify the average bitrate in bits per second.
   * Valid values: 384k, 448k, 640k, 768k
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: "COMPLETE_MAIN" | string;

  /**
   * The coding mode for Dolby Digital Plus JOC (Atmos) is always 9.1.6 (CODING_MODE_9_1_6).
   */
  CodingMode?: "CODING_MODE_9_1_6" | string;

  /**
   * Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.
   */
  DialogueIntelligence?: "ENABLED" | "DISABLED" | string;

  /**
   * Specify the absolute peak level for a signal with dynamic range compression.
   */
  DynamicRangeCompressionLine?:
    | "NONE"
    | "FILM_STANDARD"
    | "FILM_LIGHT"
    | "MUSIC_STANDARD"
    | "MUSIC_LIGHT"
    | "SPEECH"
    | string;

  /**
   * Specify how the service limits the audio dynamic range when compressing the audio.
   */
  DynamicRangeCompressionRf?:
    | "NONE"
    | "FILM_STANDARD"
    | "FILM_LIGHT"
    | "MUSIC_STANDARD"
    | "MUSIC_LIGHT"
    | "SPEECH"
    | string;

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
  MeteringMode?:
    | "LEQ_A"
    | "ITU_BS_1770_1"
    | "ITU_BS_1770_2"
    | "ITU_BS_1770_3"
    | "ITU_BS_1770_4"
    | string;

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
  StereoDownmix?: "NOT_INDICATED" | "STEREO" | "SURROUND" | "DPL2" | string;

  /**
   * Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.
   */
  SurroundExMode?: "NOT_INDICATED" | "ENABLED" | "DISABLED" | string;
}

export type _UnmarshalledEac3AtmosSettings = _Eac3AtmosSettings;
