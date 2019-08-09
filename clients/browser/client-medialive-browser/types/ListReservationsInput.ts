import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for ListReservationsRequest
 */
export interface ListReservationsInput {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   *
   */
  ChannelClass?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'
   */
  Codec?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   *
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   *
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   *
   */
  VideoQuality?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
