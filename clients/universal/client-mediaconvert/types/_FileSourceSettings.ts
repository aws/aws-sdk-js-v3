/**
 * Settings for File-based Captions in Source
 */
export interface _FileSourceSettings {
  /**
   * If set to UPCONVERT, 608 caption data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: "UPCONVERT" | "DISABLED" | string;

  /**
   * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', and 'smi'.
   */
  SourceFile?: string;

  /**
   * Specifies a time delta in seconds to offset the captions from the source file.
   */
  TimeDelta?: number;
}

export type _UnmarshalledFileSourceSettings = _FileSourceSettings;
