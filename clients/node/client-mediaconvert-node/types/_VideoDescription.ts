import {
  _VideoCodecSettings,
  _UnmarshalledVideoCodecSettings
} from "./_VideoCodecSettings";
import { _Rectangle, _UnmarshalledRectangle } from "./_Rectangle";
import {
  _VideoPreprocessor,
  _UnmarshalledVideoPreprocessor
} from "./_VideoPreprocessor";

/**
 * Settings for video outputs
 */
export interface _VideoDescription {
  /**
   * This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.
   */
  AfdSignaling?: "NONE" | "AUTO" | "FIXED" | string;

  /**
   * The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.
   */
  AntiAlias?: "DISABLED" | "ENABLED" | string;

  /**
   * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * FRAME_CAPTURE, FrameCaptureSettings
   */
  CodecSettings?: _VideoCodecSettings;

  /**
   * Enable Insert color metadata (ColorMetadata) to include color metadata in this output. This setting is enabled by default.
   */
  ColorMetadata?: "IGNORE" | "INSERT" | string;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame.
   */
  Crop?: _Rectangle;

  /**
   * Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.
   */
  DropFrameTimecode?: "DISABLED" | "ENABLED" | string;

  /**
   * Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all  frames of this video output.
   */
  FixedAfd?: number;

  /**
   * Use the Height (Height) setting to define the video resolution height for this output. Specify in pixels. If you don't provide a value here, the service will use the input height.
   */
  Height?: number;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black.
   */
  Position?: _Rectangle;

  /**
   * Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.
   */
  RespondToAfd?: "NONE" | "RESPOND" | "PASSTHROUGH" | string;

  /**
   * Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.
   */
  ScalingBehavior?: "DEFAULT" | "STRETCH_TO_OUTPUT" | string;

  /**
   * Use Sharpness (Sharpness) setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
   */
  Sharpness?: number;

  /**
   * Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.
   */
  TimecodeInsertion?: "DISABLED" | "PIC_TIMING_SEI" | string;

  /**
   * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
   */
  VideoPreprocessors?: _VideoPreprocessor;

  /**
   * Use Width (Width) to define the video resolution width, in pixels, for this output. If you don't provide a value here, the service will use the input width.
   */
  Width?: number;
}

export interface _UnmarshalledVideoDescription extends _VideoDescription {
  /**
   * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * FRAME_CAPTURE, FrameCaptureSettings
   */
  CodecSettings?: _UnmarshalledVideoCodecSettings;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame.
   */
  Crop?: _UnmarshalledRectangle;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black.
   */
  Position?: _UnmarshalledRectangle;

  /**
   * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
   */
  VideoPreprocessors?: _UnmarshalledVideoPreprocessor;
}
