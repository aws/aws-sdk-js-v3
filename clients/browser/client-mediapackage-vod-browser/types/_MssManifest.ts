import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * A Microsoft Smooth Streaming (MSS) manifest configuration.
 */
export interface _MssManifest {
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _StreamSelection;
}

export interface _UnmarshalledMssManifest extends _MssManifest {
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
