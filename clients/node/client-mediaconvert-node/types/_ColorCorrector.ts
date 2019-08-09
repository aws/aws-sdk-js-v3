import { _Hdr10Metadata, _UnmarshalledHdr10Metadata } from "./_Hdr10Metadata";

/**
 * Settings for color correction.
 */
export interface _ColorCorrector {
  /**
   * Brightness level.
   */
  Brightness?: number;

  /**
   * Determines if colorspace conversion will be performed. If set to _None_, no conversion will be performed. If _Force 601_ or _Force 709_ are selected, conversion will be performed for inputs with differing colorspaces. An input's colorspace can be specified explicitly in the "Video Selector":#inputs-video_selector if necessary.
   */
  ColorSpaceConversion?:
    | "NONE"
    | "FORCE_601"
    | "FORCE_709"
    | "FORCE_HDR10"
    | "FORCE_HLG_2020"
    | string;

  /**
   * Contrast level.
   */
  Contrast?: number;

  /**
   * Use the HDR master display (Hdr10Metadata) settings to correct HDR metadata or to provide missing metadata. Note that these settings are not color correction.
   */
  Hdr10Metadata?: _Hdr10Metadata;

  /**
   * Hue in degrees.
   */
  Hue?: number;

  /**
   * Saturation level.
   */
  Saturation?: number;
}

export interface _UnmarshalledColorCorrector extends _ColorCorrector {
  /**
   * Use the HDR master display (Hdr10Metadata) settings to correct HDR metadata or to provide missing metadata. Note that these settings are not color correction.
   */
  Hdr10Metadata?: _UnmarshalledHdr10Metadata;
}
