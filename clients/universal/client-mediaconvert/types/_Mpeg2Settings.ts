/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
 */
export interface _Mpeg2Settings {
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: "OFF" | "LOW" | "MEDIUM" | "HIGH" | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.
   */
  CodecLevel?: "AUTO" | "LOW" | "MAIN" | "HIGH1440" | "HIGH" | string;

  /**
   * Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.
   */
  CodecProfile?: "MAIN" | "PROFILE_422" | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: "ADAPTIVE" | "STATIC" | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: "INITIALIZE_FROM_SOURCE" | "SPECIFIED" | string;

  /**
   * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
   */
  FramerateConversionAlgorithm?: "DUPLICATE_DROP" | "INTERPOLATE" | string;

  /**
   * Frame rate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
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
   * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
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
   * Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.
   */
  IntraDcPrecision?:
    | "AUTO"
    | "INTRA_DC_PRECISION_8"
    | "INTRA_DC_PRECISION_9"
    | "INTRA_DC_PRECISION_10"
    | "INTRA_DC_PRECISION_11"
    | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000.
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
   * Use Quality tuning level (Mpeg2QualityTuningLevel) to specifiy whether to use single-pass or multipass video encoding.
   */
  QualityTuningLevel?: "SINGLE_PASS" | "MULTI_PASS" | string;

  /**
   * Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr).
   */
  RateControlMode?: "VBR" | "CBR" | string;

  /**
   * Scene change detection (inserts I-frames on scene changes).
   */
  SceneChangeDetect?: "DISABLED" | "ENABLED" | string;

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
   * Produces a Type D-10 compatible bitstream (SMPTE 356M-2001).
   */
  Syntax?: "DEFAULT" | "D_10" | string;

  /**
   * Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.
   */
  Telecine?: "NONE" | "SOFT" | "HARD" | string;

  /**
   * Adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAdaptiveQuantization?: "DISABLED" | "ENABLED" | string;
}

export type _UnmarshalledMpeg2Settings = _Mpeg2Settings;
