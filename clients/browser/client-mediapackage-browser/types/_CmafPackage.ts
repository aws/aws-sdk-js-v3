import {
  _CmafEncryption,
  _UnmarshalledCmafEncryption
} from "./_CmafEncryption";
import { _HlsManifest, _UnmarshalledHlsManifest } from "./_HlsManifest";
import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface _CmafPackage {
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: _CmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: Array<_HlsManifest> | Iterable<_HlsManifest>;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _StreamSelection;
}

export interface _UnmarshalledCmafPackage extends _CmafPackage {
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: _UnmarshalledCmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: Array<_UnmarshalledHlsManifest>;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
