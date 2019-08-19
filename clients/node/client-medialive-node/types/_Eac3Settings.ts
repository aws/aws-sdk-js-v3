/**
 * Eac3 Settings
 */
export interface _Eac3Settings {
  /**
   * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: "ATTENUATE_3_DB" | "NONE" | string;

  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.
   */
  BitstreamMode?:
    | "COMMENTARY"
    | "COMPLETE_MAIN"
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
   * When set to enabled, activates a DC highpass filter for all input channels.
   */
  DcFilter?: "DISABLED" | "ENABLED" | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * Sets the Dolby dynamic range compression profile.
   */
  DrcLine?:
    | "FILM_LIGHT"
    | "FILM_STANDARD"
    | "MUSIC_LIGHT"
    | "MUSIC_STANDARD"
    | "NONE"
    | "SPEECH"
    | string;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   */
  DrcRf?:
    | "FILM_LIGHT"
    | "FILM_STANDARD"
    | "MUSIC_LIGHT"
    | "MUSIC_STANDARD"
    | "NONE"
    | "SPEECH"
    | string;

  /**
   * When encoding 3/2 audio, setting to lfe enables the LFE channel
   */
  LfeControl?: "LFE" | "NO_LFE" | string;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.
   */
  LfeFilter?: "DISABLED" | "ENABLED" | string;

  /**
   * Left only/Right only center mix level. Only used for 3/2 coding mode.
   */
  LoRoCenterMixLevel?: number;

  /**
   * Left only/Right only surround mix level. Only used for 3/2 coding mode.
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Left total/Right total center mix level. Only used for 3/2 coding mode.
   */
  LtRtCenterMixLevel?: number;

  /**
   * Left total/Right total surround mix level. Only used for 3/2 coding mode.
   */
  LtRtSurroundMixLevel?: number;

  /**
   * When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: "FOLLOW_INPUT" | "USE_CONFIGURED" | string;

  /**
   * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: "NO_PASSTHROUGH" | "WHEN_POSSIBLE" | string;

  /**
   * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: "NO_SHIFT" | "SHIFT_90_DEGREES" | string;

  /**
   * Stereo downmix preference. Only used for 3/2 coding mode.
   */
  StereoDownmix?: "DPL2" | "LO_RO" | "LT_RT" | "NOT_INDICATED" | string;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   */
  SurroundExMode?: "DISABLED" | "ENABLED" | "NOT_INDICATED" | string;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   */
  SurroundMode?: "DISABLED" | "ENABLED" | "NOT_INDICATED" | string;
}

export type _UnmarshalledEac3Settings = _Eac3Settings;
