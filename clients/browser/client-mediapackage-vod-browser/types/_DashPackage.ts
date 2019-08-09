import { _DashManifest, _UnmarshalledDashManifest } from "./_DashManifest";
import {
  _DashEncryption,
  _UnmarshalledDashEncryption
} from "./_DashEncryption";

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface _DashPackage {
  /**
   * A list of DASH manifest configurations.
   */
  DashManifests: Array<_DashManifest> | Iterable<_DashManifest>;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: _DashEncryption;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   *
   */
  SegmentDurationSeconds?: number;
}

export interface _UnmarshalledDashPackage extends _DashPackage {
  /**
   * A list of DASH manifest configurations.
   */
  DashManifests: Array<_UnmarshalledDashManifest>;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: _UnmarshalledDashEncryption;
}
