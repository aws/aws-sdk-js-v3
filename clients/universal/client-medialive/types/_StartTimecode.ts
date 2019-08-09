/**
 * Settings to identify the start of the clip.
 */
export interface _StartTimecode {
  /**
   * The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export type _UnmarshalledStartTimecode = _StartTimecode;
