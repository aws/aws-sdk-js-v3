import { _HlsEncryption, _UnmarshalledHlsEncryption } from "./_HlsEncryption";
import { _HlsManifest, _UnmarshalledHlsManifest } from "./_HlsManifest";

/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface _HlsPackage {
  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: _HlsEncryption;

  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: Array<_HlsManifest> | Iterable<_HlsManifest>;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
}

export interface _UnmarshalledHlsPackage extends _HlsPackage {
  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: _UnmarshalledHlsEncryption;

  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: Array<_UnmarshalledHlsManifest>;
}
