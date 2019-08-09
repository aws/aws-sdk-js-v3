import { _MssEncryption, _UnmarshalledMssEncryption } from "./_MssEncryption";
import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * A Microsoft Smooth Streaming (MSS) packaging configuration.
 */
export interface _MssPackage {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: _MssEncryption;

  /**
   * The time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _StreamSelection;
}

export interface _UnmarshalledMssPackage extends _MssPackage {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: _UnmarshalledMssEncryption;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
