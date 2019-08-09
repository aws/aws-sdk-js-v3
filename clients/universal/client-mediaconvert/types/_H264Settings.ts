import {
  _H264QvbrSettings,
  _UnmarshalledH264QvbrSettings
} from "./_H264QvbrSettings";

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
 */
export interface _H264Settings {
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?:
    | "OFF"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "HIGHER"
    | "MAX"
    | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO).
   */
  CodecLevel?:
    | "AUTO"
    | "LEVEL_1"
    | "LEVEL_1_1"
    | "LEVEL_1_2"
    | "LEVEL_1_3"
    | "LEVEL_2"
    | "LEVEL_2_1"
    | "LEVEL_2_2"
    | "LEVEL_3"
    | "LEVEL_3_1"
    | "LEVEL_3_2"
    | "LEVEL_4"
    | "LEVEL_4_1"
    | "LEVEL_4_2"
    | "LEVEL_5"
    | "LEVEL_5_1"
    | "LEVEL_5_2"
    | string;

  /**
   * H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.
   */
  CodecProfile?:
    | "BASELINE"
    | "HIGH"
    | "HIGH_10BIT"
    | "HIGH_422"
    | "HIGH_422_10BIT"
    | "MAIN"
    | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: "ADAPTIVE" | "STATIC" | string;

  /**
   * Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.
   */
  EntropyEncoding?: "CABAC" | "CAVLC" | string;

  /**
   * Choosing FORCE_FIELD disables PAFF encoding for interlaced outputs.
   */
  FieldEncoding?: "PAFF" | "FORCE_FIELD" | string;

  /**
   * Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAdaptiveQuantization?: "DISABLED" | "ENABLED" | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: "INITIALIZE_FROM_SOURCE" | "SPECIFIED" | string;

  /**
   * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
   */
  FramerateConversionAlgorithm?: "DUPLICATE_DROP" | "INTERPOLATE" | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: "DISABLED" | "ENABLED" | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
   */
  GopSizeUnits?: "FRAMES" | "SECONDS" | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type, as follows.
   *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
   *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
   */
  InterlaceMode?:
    | "PROGRESSIVE"
    | "TOP_FIELD"
    | "BOTTOM_FIELD"
    | "FOLLOW_TOP_FIELD"
    | "FOLLOW_BOTTOM_FIELD"
    | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Number of B-frames between reference frames.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumberReferenceFrames?: number;

  /**
   * Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.
   */
  ParControl?: "INITIALIZE_FROM_SOURCE" | "SPECIFIED" | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Use Quality tuning level (H264QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.
   */
  QualityTuningLevel?:
    | "SINGLE_PASS"
    | "SINGLE_PASS_HQ"
    | "MULTI_PASS_HQ"
    | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
   */
  QvbrSettings?: _H264QvbrSettings;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   */
  RateControlMode?: "VBR" | "CBR" | "QVBR" | string;

  /**
   * Places a PPS header on each encoded picture, even if repeated.
   */
  RepeatPps?: "DISABLED" | "ENABLED" | string;

  /**
   * Scene change detection (inserts I-frames on scene changes).
   */
  SceneChangeDetect?: "DISABLED" | "ENABLED" | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: "DISABLED" | "ENABLED" | string;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
   */
  Softness?: number;

  /**
   * Adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAdaptiveQuantization?: "DISABLED" | "ENABLED" | string;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: "DEFAULT" | "RP2027" | string;

  /**
   * This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
   */
  Telecine?: "NONE" | "SOFT" | "HARD" | string;

  /**
   * Adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAdaptiveQuantization?: "DISABLED" | "ENABLED" | string;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   */
  UnregisteredSeiTimecode?: "DISABLED" | "ENABLED" | string;
}

export interface _UnmarshalledH264Settings extends _H264Settings {
  /**
   * Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
   */
  QvbrSettings?: _UnmarshalledH264QvbrSettings;
}
