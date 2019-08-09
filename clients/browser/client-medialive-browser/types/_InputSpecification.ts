/**
 * Placeholder documentation for InputSpecification
 */
export interface _InputSpecification {
  /**
   * Input codec
   */
  Codec?: "MPEG2" | "AVC" | "HEVC" | string;

  /**
   * Maximum input bitrate, categorized coarsely
   */
  MaximumBitrate?: "MAX_10_MBPS" | "MAX_20_MBPS" | "MAX_50_MBPS" | string;

  /**
   * Input resolution, categorized coarsely
   */
  Resolution?: "SD" | "HD" | "UHD" | string;
}

export type _UnmarshalledInputSpecification = _InputSpecification;
