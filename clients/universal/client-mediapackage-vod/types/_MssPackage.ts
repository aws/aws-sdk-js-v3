import { _MssEncryption, _UnmarshalledMssEncryption } from "./_MssEncryption";
import { _MssManifest, _UnmarshalledMssManifest } from "./_MssManifest";

/**
 * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
 */
export interface _MssPackage {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: _MssEncryption;

  /**
   * A list of MSS manifest configurations.
   */
  MssManifests: Array<_MssManifest> | Iterable<_MssManifest>;

  /**
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;
}

export interface _UnmarshalledMssPackage extends _MssPackage {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: _UnmarshalledMssEncryption;

  /**
   * A list of MSS manifest configurations.
   */
  MssManifests: Array<_UnmarshalledMssManifest>;
}
