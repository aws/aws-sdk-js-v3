/**
 * Resource configuration (codec, resolution, bitrate, ...)
 */
export interface _ReservationResourceSpecification {
  /**
   * Channel class, e.g. 'STANDARD'
   */
  ChannelClass?: "STANDARD" | "SINGLE_PIPELINE" | string;

  /**
   * Codec, e.g. 'AVC'
   */
  Codec?: "MPEG2" | "AVC" | "HEVC" | "AUDIO" | string;

  /**
   * Maximum bitrate, e.g. 'MAX_20_MBPS'
   */
  MaximumBitrate?: "MAX_10_MBPS" | "MAX_20_MBPS" | "MAX_50_MBPS" | string;

  /**
   * Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)
   */
  MaximumFramerate?: "MAX_30_FPS" | "MAX_60_FPS" | string;

  /**
   * Resolution, e.g. 'HD'
   */
  Resolution?: "SD" | "HD" | "UHD" | string;

  /**
   * Resource type, 'INPUT', 'OUTPUT', or 'CHANNEL'
   */
  ResourceType?: "INPUT" | "OUTPUT" | "CHANNEL" | string;

  /**
   * Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)
   */
  SpecialFeature?: "ADVANCED_AUDIO" | "AUDIO_NORMALIZATION" | string;

  /**
   * Video quality, e.g. 'STANDARD' (Outputs only)
   */
  VideoQuality?: "STANDARD" | "ENHANCED" | "PREMIUM" | string;
}

export type _UnmarshalledReservationResourceSpecification = _ReservationResourceSpecification;
