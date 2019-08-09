/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
 */
export interface _Eac3Settings {
  /**
   * If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: "ATTENUATE_3_DB" | "NONE" | string;

  /**
   * Specify the average bitrate in bits per second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?:
    | "COMPLETE_MAIN"
    | "COMMENTARY"
    | "EMERGENCY"
    | "HEARING_IMPAIRED"
    | "VISUALLY_IMPAIRED"
    | string;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   */
  CodingMode?:
    | "CODING_MODE_1_0"
    | "CODING_MODE_2_0"
    | "CODING_MODE_3_2"
    | string;

  /**
   * Activates a DC highpass filter for all input channels.
   */
  DcFilter?: "ENABLED" | "DISABLED" | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

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
   * When encoding 3/2 audio, controls whether the LFE channel is enabled
   */
  LfeControl?: "LFE" | "NO_LFE" | string;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   */
  LfeFilter?: "ENABLED" | "DISABLED" | string;

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
  MetadataControl?: "FOLLOW_INPUT" | "USE_CONFIGURED" | string;

  /**
   * When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: "WHEN_POSSIBLE" | "NO_PASSTHROUGH" | string;

  /**
   * Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: "SHIFT_90_DEGREES" | "NO_SHIFT" | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).
   */
  StereoDownmix?: "NOT_INDICATED" | "LO_RO" | "LT_RT" | "DPL2" | string;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   */
  SurroundExMode?: "NOT_INDICATED" | "ENABLED" | "DISABLED" | string;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   */
  SurroundMode?: "NOT_INDICATED" | "ENABLED" | "DISABLED" | string;
}

export type _UnmarshalledEac3Settings = _Eac3Settings;
