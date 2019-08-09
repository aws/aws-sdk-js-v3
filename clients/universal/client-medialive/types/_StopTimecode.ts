/**
 * Settings to identify the end of the clip.
 */
export interface _StopTimecode {
  /**
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   */
  LastFrameClippingBehavior?:
    | "EXCLUDE_LAST_FRAME"
    | "INCLUDE_LAST_FRAME"
    | string;

  /**
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export type _UnmarshalledStopTimecode = _StopTimecode;
