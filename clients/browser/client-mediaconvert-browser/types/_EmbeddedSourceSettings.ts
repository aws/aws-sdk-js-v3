/**
 * Settings for embedded captions Source
 */
export interface _EmbeddedSourceSettings {
  /**
   * When set to UPCONVERT, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: "UPCONVERT" | "DISABLED" | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
   */
  Source608TrackNumber?: number;
}

export type _UnmarshalledEmbeddedSourceSettings = _EmbeddedSourceSettings;
