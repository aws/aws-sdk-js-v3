/**
 * H264 Settings
 */
export interface _H264Settings {
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?:
    | "HIGH"
    | "HIGHER"
    | "LOW"
    | "MAX"
    | "MEDIUM"
    | "OFF"
    | string;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: "AUTO" | "FIXED" | "NONE" | string;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  BufFillPct?: number;

  /**
   * Size of buffer (HRD buffer model) in bits/second.
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: "IGNORE" | "INSERT" | string;

  /**
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   */
  EntropyEncoding?: "CABAC" | "CAVLC" | string;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?:
    | "AFD_0000"
    | "AFD_0010"
    | "AFD_0011"
    | "AFD_0100"
    | "AFD_1000"
    | "AFD_1001"
    | "AFD_1010"
    | "AFD_1011"
    | "AFD_1101"
    | "AFD_1110"
    | "AFD_1111"
    | string;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: "DISABLED" | "ENABLED" | string;

  /**
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   */
  FramerateControl?: "INITIALIZE_FROM_SOURCE" | "SPECIFIED" | string;

  /**
   * Framerate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * Documentation update needed
   */
  GopBReference?: "DISABLED" | "ENABLED" | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Number of B-frames between reference frames.
   */
  GopNumBFrames?: number;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: "FRAMES" | "SECONDS" | string;

  /**
   * H.264 Level.
   */
  Level?:
    | "H264_LEVEL_1"
    | "H264_LEVEL_1_1"
    | "H264_LEVEL_1_2"
    | "H264_LEVEL_1_3"
    | "H264_LEVEL_2"
    | "H264_LEVEL_2_1"
    | "H264_LEVEL_2_2"
    | "H264_LEVEL_3"
    | "H264_LEVEL_3_1"
    | "H264_LEVEL_3_2"
    | "H264_LEVEL_4"
    | "H264_LEVEL_4_1"
    | "H264_LEVEL_4_2"
    | "H264_LEVEL_5"
    | "H264_LEVEL_5_1"
    | "H264_LEVEL_5_2"
    | "H264_LEVEL_AUTO"
    | string;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: "HIGH" | "LOW" | "MEDIUM" | string;

  /**
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   */
  MaxBitrate?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumRefFrames?: number;

  /**
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
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
   * H.264 Profile.
   */
  Profile?:
    | "BASELINE"
    | "HIGH"
    | "HIGH_10BIT"
    | "HIGH_422"
    | "HIGH_422_10BIT"
    | "MAIN"
    | string;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   */
  QvbrQualityLevel?: number;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * VBR: Quality and bitrate vary, depending on the video complexity. Recommended instead of QVBR
   * if you want to maintain a specific average bitrate over the duration of the channel.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   */
  RateControlMode?: "CBR" | "QVBR" | "VBR" | string;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: "INTERLACED" | "PROGRESSIVE" | string;

  /**
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   */
  SceneChangeDetect?: "DISABLED" | "ENABLED" | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
   */
  Softness?: number;

  /**
   * If set to enabled, adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAq?: "DISABLED" | "ENABLED" | string;

  /**
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   */
  SubgopLength?: "DYNAMIC" | "FIXED" | string;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: "DEFAULT" | "RP2027" | string;

  /**
   * If set to enabled, adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAq?: "DISABLED" | "ENABLED" | string;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: "DISABLED" | "PIC_TIMING_SEI" | string;
}

export type _UnmarshalledH264Settings = _H264Settings;
