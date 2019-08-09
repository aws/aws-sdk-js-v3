/**
 * Mp2 Settings
 */
export interface _Mp2Settings {
  /**
   * Average bitrate in bits/second.
   */
  Bitrate?: number;

  /**
   * The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
   */
  CodingMode?: "CODING_MODE_1_0" | "CODING_MODE_2_0" | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

export type _UnmarshalledMp2Settings = _Mp2Settings;
