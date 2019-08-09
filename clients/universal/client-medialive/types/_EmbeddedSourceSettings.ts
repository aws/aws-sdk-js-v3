/**
 * Embedded Source Settings
 */
export interface _EmbeddedSourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: "DISABLED" | "UPCONVERT" | string;

  /**
   * Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
   */
  Scte20Detection?: "AUTO" | "OFF" | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * This field is unused and deprecated.
   */
  Source608TrackNumber?: number;
}

export type _UnmarshalledEmbeddedSourceSettings = _EmbeddedSourceSettings;
