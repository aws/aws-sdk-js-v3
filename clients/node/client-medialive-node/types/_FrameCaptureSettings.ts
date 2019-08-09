/**
 * Frame Capture Settings
 */
export interface _FrameCaptureSettings {
  /**
   * The frequency, in seconds, for capturing frames for inclusion in the output.  For example, "10" means capture a frame every 10 seconds.
   */
  CaptureInterval: number;
}

export type _UnmarshalledFrameCaptureSettings = _FrameCaptureSettings;
