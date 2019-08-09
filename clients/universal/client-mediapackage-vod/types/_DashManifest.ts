import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * A DASH manifest configuration.
 */
export interface _DashManifest {
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: "NONE" | "HBBTV_1_5" | string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _StreamSelection;
}

export interface _UnmarshalledDashManifest extends _DashManifest {
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
