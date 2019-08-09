import {
  _VideoCodecSettings,
  _UnmarshalledVideoCodecSettings
} from "./_VideoCodecSettings";

/**
 * Video settings for this stream.
 */
export interface _VideoDescription {
  /**
   * Video codec settings.
   */
  CodecSettings?: _VideoCodecSettings;

  /**
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Height?: number;

  /**
   * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
   */
  Name: string;

  /**
   * Indicates how to respond to the AFD values in the input stream. RESPOND causes input video to be clipped, depending on the AFD value, input display aspect ratio, and output display aspect ratio, and (except for FRAMECAPTURE codec) includes the values in the output. PASSTHROUGH (does not apply to FRAMECAPTURE codec) ignores the AFD values and includes the values in the output, so input video is not clipped. NONE ignores the AFD values and does not include the values through to the output, so input video is not clipped.
   */
  RespondToAfd?: "NONE" | "PASSTHROUGH" | "RESPOND" | string;

  /**
   * STRETCHTOOUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   */
  ScalingBehavior?: "DEFAULT" | "STRETCH_TO_OUTPUT" | string;

  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   */
  Sharpness?: number;

  /**
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Width?: number;
}

export interface _UnmarshalledVideoDescription extends _VideoDescription {
  /**
   * Video codec settings.
   */
  CodecSettings?: _UnmarshalledVideoCodecSettings;
}
