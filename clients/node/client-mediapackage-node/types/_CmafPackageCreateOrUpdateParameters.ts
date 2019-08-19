import {
  _CmafEncryption,
  _UnmarshalledCmafEncryption
} from "./_CmafEncryption";
import {
  _HlsManifestCreateOrUpdateParameters,
  _UnmarshalledHlsManifestCreateOrUpdateParameters
} from "./_HlsManifestCreateOrUpdateParameters";
import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface _CmafPackageCreateOrUpdateParameters {
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: _CmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?:
    | Array<_HlsManifestCreateOrUpdateParameters>
    | Iterable<_HlsManifestCreateOrUpdateParameters>;

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

export interface _UnmarshalledCmafPackageCreateOrUpdateParameters
  extends _CmafPackageCreateOrUpdateParameters {
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: _UnmarshalledCmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: Array<_UnmarshalledHlsManifestCreateOrUpdateParameters>;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
