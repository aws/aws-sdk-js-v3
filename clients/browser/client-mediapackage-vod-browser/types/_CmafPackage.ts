import {
  _CmafEncryption,
  _UnmarshalledCmafEncryption
} from "./_CmafEncryption";
import { _HlsManifest, _UnmarshalledHlsManifest } from "./_HlsManifest";

/**
 * A CMAF packaging configuration.
 */
export interface _CmafPackage {
  /**
   * A CMAF encryption configuration.
   */
  Encryption?: _CmafEncryption;

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
}

export interface _UnmarshalledCmafPackage extends _CmafPackage {
  /**
   * A CMAF encryption configuration.
   */
  Encryption?: _UnmarshalledCmafEncryption;

  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: Array<_UnmarshalledHlsManifest>;
}
