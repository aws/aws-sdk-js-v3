/**
 * Scte20 Source Settings
 */
export interface _Scte20SourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: "DISABLED" | "UPCONVERT" | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;
}

export type _UnmarshalledScte20SourceSettings = _Scte20SourceSettings;
