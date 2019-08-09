import {
  _FrameCaptureSettings,
  _UnmarshalledFrameCaptureSettings
} from "./_FrameCaptureSettings";
import { _H264Settings, _UnmarshalledH264Settings } from "./_H264Settings";

/**
 * Video Codec Settings
 */
export interface _VideoCodecSettings {
  /**
   * Frame Capture Settings
   */
  FrameCaptureSettings?: _FrameCaptureSettings;

  /**
   * H264 Settings
   */
  H264Settings?: _H264Settings;
}

export interface _UnmarshalledVideoCodecSettings extends _VideoCodecSettings {
  /**
   * Frame Capture Settings
   */
  FrameCaptureSettings?: _UnmarshalledFrameCaptureSettings;

  /**
   * H264 Settings
   */
  H264Settings?: _UnmarshalledH264Settings;
}
