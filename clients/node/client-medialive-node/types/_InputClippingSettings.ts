import { _StartTimecode, _UnmarshalledStartTimecode } from "./_StartTimecode";
import { _StopTimecode, _UnmarshalledStopTimecode } from "./_StopTimecode";

/**
 * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
 */
export interface _InputClippingSettings {
  /**
   * The source of the timecodes in the source being clipped.
   */
  InputTimecodeSource: "ZEROBASED" | "EMBEDDED" | string;

  /**
   * Settings to identify the start of the clip.
   */
  StartTimecode?: _StartTimecode;

  /**
   * Settings to identify the end of the clip.
   */
  StopTimecode?: _StopTimecode;
}

export interface _UnmarshalledInputClippingSettings
  extends _InputClippingSettings {
  /**
   * Settings to identify the start of the clip.
   */
  StartTimecode?: _UnmarshalledStartTimecode;

  /**
   * Settings to identify the end of the clip.
   */
  StopTimecode?: _UnmarshalledStopTimecode;
}
