/**
 * Aac Settings
 */
export interface _AacSettings {
  /**
   * Average bitrate in bits/second. Valid values depend on rate control mode and profile.
   */
  Bitrate?: number;

  /**
   * Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   */
  CodingMode?:
    | "AD_RECEIVER_MIX"
    | "CODING_MODE_1_0"
    | "CODING_MODE_1_1"
    | "CODING_MODE_2_0"
    | "CODING_MODE_5_1"
    | string;

  /**
   * Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.
   *
   * Leave set to "normal" when input does not contain pre-mixed audio + AD.
   */
  InputType?: "BROADCASTER_MIXED_AD" | "NORMAL" | string;

  /**
   * AAC Profile.
   */
  Profile?: "HEV1" | "HEV2" | "LC" | string;

  /**
   * Rate Control Mode.
   */
  RateControlMode?: "CBR" | "VBR" | string;

  /**
   * Sets LATM / LOAS AAC output for raw containers.
   */
  RawFormat?: "LATM_LOAS" | "NONE" | string;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   */
  SampleRate?: number;

  /**
   * Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   */
  Spec?: "MPEG2" | "MPEG4" | string;

  /**
   * VBR Quality Level - Only used if rateControlMode is VBR.
   */
  VbrQuality?: "HIGH" | "LOW" | "MEDIUM_HIGH" | "MEDIUM_LOW" | string;
}

export type _UnmarshalledAacSettings = _AacSettings;
