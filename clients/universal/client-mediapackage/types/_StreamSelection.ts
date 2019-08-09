/**
 * A StreamSelection configuration.
 */
export interface _StreamSelection {
  /**
   * The maximum video bitrate (bps) to include in output.
   */
  MaxVideoBitsPerSecond?: number;

  /**
   * The minimum video bitrate (bps) to include in output.
   */
  MinVideoBitsPerSecond?: number;

  /**
   * A directive that determines the order of streams in the output.
   */
  StreamOrder?:
    | "ORIGINAL"
    | "VIDEO_BITRATE_ASCENDING"
    | "VIDEO_BITRATE_DESCENDING"
    | string;
}

export type _UnmarshalledStreamSelection = _StreamSelection;
