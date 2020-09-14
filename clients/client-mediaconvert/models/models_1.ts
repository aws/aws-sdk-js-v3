import {
  AccelerationSettings,
  AccelerationStatus,
  AfdSignaling,
  AntiAlias,
  AudioDescription,
  Av1Settings,
  AvailBlanking,
  BillingTagsSource,
  CaptionDescription,
  CaptionDescriptionPreset,
  ContainerSettings,
  Endpoint,
  EsamSettings,
  FrameCaptureSettings,
  H264Settings,
  H265AdaptiveQuantization,
  H265AlternateTransferFunctionSei,
  Hdr10Metadata,
  HopDestination,
  Id3Insertion,
  ImageInserter,
  Input,
  InputTemplate,
  JobMessages,
  JobPhase,
  MotionImageInserter,
  NielsenConfiguration,
  OutputGroupDetail,
  OutputGroupSettings,
  OutputSettings,
  QueueTransition,
  Rectangle,
  VideoCodec,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum H265CodecLevel {
  AUTO = "AUTO",
  LEVEL_1 = "LEVEL_1",
  LEVEL_2 = "LEVEL_2",
  LEVEL_2_1 = "LEVEL_2_1",
  LEVEL_3 = "LEVEL_3",
  LEVEL_3_1 = "LEVEL_3_1",
  LEVEL_4 = "LEVEL_4",
  LEVEL_4_1 = "LEVEL_4_1",
  LEVEL_5 = "LEVEL_5",
  LEVEL_5_1 = "LEVEL_5_1",
  LEVEL_5_2 = "LEVEL_5_2",
  LEVEL_6 = "LEVEL_6",
  LEVEL_6_1 = "LEVEL_6_1",
  LEVEL_6_2 = "LEVEL_6_2",
}

export enum H265CodecProfile {
  MAIN10_HIGH = "MAIN10_HIGH",
  MAIN10_MAIN = "MAIN10_MAIN",
  MAIN_422_10BIT_HIGH = "MAIN_422_10BIT_HIGH",
  MAIN_422_10BIT_MAIN = "MAIN_422_10BIT_MAIN",
  MAIN_422_8BIT_HIGH = "MAIN_422_8BIT_HIGH",
  MAIN_422_8BIT_MAIN = "MAIN_422_8BIT_MAIN",
  MAIN_HIGH = "MAIN_HIGH",
  MAIN_MAIN = "MAIN_MAIN",
}

export enum H265DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC",
}

export enum H265FlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H265FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE",
}

export enum H265GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H265InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum H265ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H265QualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

/**
 * Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
 */
export interface H265QvbrSettings {
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   */
  MaxAverageBitrate?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;

  /**
   * Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within h265Settings. Specify the general target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;
}

export namespace H265QvbrSettings {
  export const filterSensitiveLog = (obj: H265QvbrSettings): any => ({
    ...obj,
  });
}

export enum H265RateControlMode {
  CBR = "CBR",
  QVBR = "QVBR",
  VBR = "VBR",
}

export enum H265SampleAdaptiveOffsetFilterMode {
  ADAPTIVE = "ADAPTIVE",
  DEFAULT = "DEFAULT",
  OFF = "OFF",
}

export enum H265SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  TRANSITION_DETECTION = "TRANSITION_DETECTION",
}

export enum H265SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT",
}

export enum H265TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265TemporalIds {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265Tiles {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265UnregisteredSeiTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265WriteMp4PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

/**
 * Settings for H265 codec
 */
export interface H265Settings {
  /**
   * Choose the scan line type for the output. Choose Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Choose Top Field First (TOP_FIELD) or Bottom Field First (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Choose Follow, Default Top (FOLLOW_TOP_FIELD) or Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) to create an interlaced output with the same field polarity as the source. If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". If the source is progressive, your output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose. If you don't choose a value, the service will default to Progressive (PROGRESSIVE).
   */
  InterlaceMode?: H265InterlaceMode | string;

  /**
   * H.265 Level.
   */
  CodecLevel?: H265CodecLevel | string;

  /**
   * If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.
   */
  WriteMp4PackagingType?: H265WriteMp4PackagingType | string;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: H265GopBReference | string;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: H265SlowPal | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: H265ParControl | string;

  /**
   * Adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization | string;

  /**
   * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * Frame rate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.
   */
  TemporalIds?: H265TemporalIds | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: H265FramerateControl | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
   */
  Telecine?: H265Telecine | string;

  /**
   * Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).
   */
  AlternateTransferFunctionSei?: H265AlternateTransferFunctionSei | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
   */
  QvbrSettings?: H265QvbrSettings;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.
   */
  Tiles?: H265Tiles | string;

  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | string;

  /**
   * Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumberReferenceFrames?: number;

  /**
   * Adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAdaptiveQuantization?: H265TemporalAdaptiveQuantization | string;

  /**
   * Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization | string;

  /**
   * Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content
   */
  SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion.
   */
  FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: H265DynamicSubGop | string;

  /**
   * Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.
   */
  CodecProfile?: H265CodecProfile | string;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   */
  UnregisteredSeiTimecode?: H265UnregisteredSeiTimecode | string;

  /**
   * Number of B-frames between reference frames.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: H265QualityTuningLevel | string;
}

export namespace H265Settings {
  export const filterSensitiveLog = (obj: H265Settings): any => ({
    ...obj,
  });
}

export enum Mpeg2AdaptiveQuantization {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum Mpeg2CodecLevel {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGH1440 = "HIGH1440",
  LOW = "LOW",
  MAIN = "MAIN",
}

export enum Mpeg2CodecProfile {
  MAIN = "MAIN",
  PROFILE_422 = "PROFILE_422",
}

export enum Mpeg2DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC",
}

export enum Mpeg2FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Mpeg2FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE",
}

export enum Mpeg2GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum Mpeg2InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum Mpeg2IntraDcPrecision {
  AUTO = "AUTO",
  INTRA_DC_PRECISION_10 = "INTRA_DC_PRECISION_10",
  INTRA_DC_PRECISION_11 = "INTRA_DC_PRECISION_11",
  INTRA_DC_PRECISION_8 = "INTRA_DC_PRECISION_8",
  INTRA_DC_PRECISION_9 = "INTRA_DC_PRECISION_9",
}

export enum Mpeg2ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Mpeg2QualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  SINGLE_PASS = "SINGLE_PASS",
}

export enum Mpeg2RateControlMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum Mpeg2SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Mpeg2SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Mpeg2SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Mpeg2Syntax {
  DEFAULT = "DEFAULT",
  D_10 = "D_10",
}

export enum Mpeg2Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT",
}

export enum Mpeg2TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
 */
export interface Mpeg2Settings {
  /**
   * Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.
   */
  Telecine?: Mpeg2Telecine | string;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
   */
  Softness?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.
   */
  CodecProfile?: Mpeg2CodecProfile | string;

  /**
   * Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion.
   */
  FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm | string;

  /**
   * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
   *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
   *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
   */
  InterlaceMode?: Mpeg2InterlaceMode | string;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  MaxBitrate?: number;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.
   */
  SceneChangeDetect?: Mpeg2SceneChangeDetect | string;

  /**
   * Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Mpeg2FramerateControl | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.
   */
  CodecLevel?: Mpeg2CodecLevel | string;

  /**
   * Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr).
   */
  RateControlMode?: Mpeg2RateControlMode | string;

  /**
   * Adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: Mpeg2ParControl | string;

  /**
   * Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.
   */
  IntraDcPrecision?: Mpeg2IntraDcPrecision | string;

  /**
   * Produces a Type D-10 compatible bitstream (SMPTE 356M-2001).
   */
  Syntax?: Mpeg2Syntax | string;

  /**
   * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * Number of B-frames between reference frames.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Frame rate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: Mpeg2SlowPal | string;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: Mpeg2QualityTuningLevel | string;

  /**
   * Adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: Mpeg2DynamicSubGop | string;
}

export namespace Mpeg2Settings {
  export const filterSensitiveLog = (obj: Mpeg2Settings): any => ({
    ...obj,
  });
}

export enum ProresCodecProfile {
  APPLE_PRORES_422 = "APPLE_PRORES_422",
  APPLE_PRORES_422_HQ = "APPLE_PRORES_422_HQ",
  APPLE_PRORES_422_LT = "APPLE_PRORES_422_LT",
  APPLE_PRORES_422_PROXY = "APPLE_PRORES_422_PROXY",
}

export enum ProresFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum ProresFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE",
}

export enum ProresInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum ProresParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum ProresSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum ProresTelecine {
  HARD = "HARD",
  NONE = "NONE",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
 */
export interface ProresSettings {
  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
   *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
   *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
   */
  InterlaceMode?: ProresInterlaceMode | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion.
   */
  FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm | string;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: ProresSlowPal | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator.
   */
  FramerateNumerator?: number;

  /**
   * Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.
   */
  Telecine?: ProresTelecine | string;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: ProresParControl | string;

  /**
   * Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output.
   */
  CodecProfile?: ProresCodecProfile | string;

  /**
   * Frame rate denominator.
   */
  FramerateDenominator?: number;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: ProresFramerateControl | string;
}

export namespace ProresSettings {
  export const filterSensitiveLog = (obj: ProresSettings): any => ({
    ...obj,
  });
}

export enum Vp8FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp8FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE",
}

export enum Vp8ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp8QualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
}

export enum Vp8RateControlMode {
  VBR = "VBR",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.
 */
export interface Vp8Settings {
  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: Vp8ParControl | string;

  /**
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  Bitrate?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode.
   */
  RateControlMode?: Vp8RateControlMode | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use Drop duplicate (DUPLICATE_DROP) conversion. When you choose Interpolate (INTERPOLATE) instead, the conversion produces smoother motion.
   */
  FramerateConversionAlgorithm?: Vp8FramerateConversionAlgorithm | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vp8FramerateControl | string;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   */
  MaxBitrate?: number;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   */
  QualityTuningLevel?: Vp8QualityTuningLevel | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;
}

export namespace Vp8Settings {
  export const filterSensitiveLog = (obj: Vp8Settings): any => ({
    ...obj,
  });
}

export enum Vp9FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp9FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE",
}

export enum Vp9ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp9QualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
}

export enum Vp9RateControlMode {
  VBR = "VBR",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.
 */
export interface Vp9Settings {
  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio for this output. The default behavior is to use the same pixel aspect ratio as your input video.
   */
  ParControl?: Vp9ParControl | string;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   */
  MaxBitrate?: number;

  /**
   * Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use Drop duplicate (DUPLICATE_DROP) conversion. When you choose Interpolate (INTERPOLATE) instead, the conversion produces smoother motion.
   */
  FramerateConversionAlgorithm?: Vp9FramerateConversionAlgorithm | string;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode.
   */
  RateControlMode?: Vp9RateControlMode | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vp9FramerateControl | string;

  /**
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  Bitrate?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   */
  QualityTuningLevel?: Vp9QualityTuningLevel | string;
}

export namespace Vp9Settings {
  export const filterSensitiveLog = (obj: Vp9Settings): any => ({
    ...obj,
  });
}

/**
 * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * FRAME_CAPTURE, FrameCaptureSettings * AV1, Av1Settings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VP8, Vp8Settings * VP9, Vp9Settings
 */
export interface VideoCodecSettings {
  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
   */
  ProresSettings?: ProresSettings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
   */
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * Settings for H265 codec
   */
  H265Settings?: H265Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
   */
  Mpeg2Settings?: Mpeg2Settings;

  /**
   * Specifies the video codec. This must be equal to one of the enum values defined by the object  VideoCodec.
   */
  Codec?: VideoCodec | string;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.
   */
  Vp9Settings?: Vp9Settings;

  /**
   * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
   */
  Av1Settings?: Av1Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.
   */
  Vp8Settings?: Vp8Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
   */
  H264Settings?: H264Settings;
}

export namespace VideoCodecSettings {
  export const filterSensitiveLog = (obj: VideoCodecSettings): any => ({
    ...obj,
  });
}

export enum ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

export enum DropFrameTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum RespondToAfd {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  RESPOND = "RESPOND",
}

export enum ScalingBehavior {
  DEFAULT = "DEFAULT",
  STRETCH_TO_OUTPUT = "STRETCH_TO_OUTPUT",
}

export enum VideoTimecodeInsertion {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

export enum ColorSpaceConversion {
  FORCE_601 = "FORCE_601",
  FORCE_709 = "FORCE_709",
  FORCE_HDR10 = "FORCE_HDR10",
  FORCE_HLG_2020 = "FORCE_HLG_2020",
  NONE = "NONE",
}

/**
 * Settings for color correction.
 */
export interface ColorCorrector {
  /**
   * Contrast level.
   */
  Contrast?: number;

  /**
   * Use these settings when you convert to the HDR 10 color space. Specify the SMPTE ST 2086 Mastering Display Color Volume static metadata that you want signaled in the output. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. When you set Color space conversion (ColorSpaceConversion) to HDR 10 (FORCE_HDR10), these settings are required. You must set values for Max frame average light level (maxFrameAverageLightLevel) and Max content light level (maxContentLightLevel); these settings don't have a default value. The default values for the other HDR 10 metadata settings are defined by the P3D65 color space. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  Hdr10Metadata?: Hdr10Metadata;

  /**
   * Brightness level.
   */
  Brightness?: number;

  /**
   * Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses Elemental tone mapping technology to approximate the outcome of manually regrading from HDR to SDR.
   */
  ColorSpaceConversion?: ColorSpaceConversion | string;

  /**
   * Saturation level.
   */
  Saturation?: number;

  /**
   * Hue in degrees.
   */
  Hue?: number;
}

export namespace ColorCorrector {
  export const filterSensitiveLog = (obj: ColorCorrector): any => ({
    ...obj,
  });
}

export enum DeinterlaceAlgorithm {
  BLEND = "BLEND",
  BLEND_TICKER = "BLEND_TICKER",
  INTERPOLATE = "INTERPOLATE",
  INTERPOLATE_TICKER = "INTERPOLATE_TICKER",
}

export enum DeinterlacerControl {
  FORCE_ALL_FRAMES = "FORCE_ALL_FRAMES",
  NORMAL = "NORMAL",
}

export enum DeinterlacerMode {
  ADAPTIVE = "ADAPTIVE",
  DEINTERLACE = "DEINTERLACE",
  INVERSE_TELECINE = "INVERSE_TELECINE",
}

/**
 * Settings for deinterlacer
 */
export interface Deinterlacer {
  /**
   * - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video.
   */
  Control?: DeinterlacerControl | string;

  /**
   * Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.
   */
  Algorithm?: DeinterlaceAlgorithm | string;

  /**
   * Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.
   */
  Mode?: DeinterlacerMode | string;
}

export namespace Deinterlacer {
  export const filterSensitiveLog = (obj: Deinterlacer): any => ({
    ...obj,
  });
}

/**
 * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
 */
export interface DolbyVisionLevel6Metadata {
  /**
   * Maximum Content Light Level. Static HDR metadata that corresponds to the brightest pixel in the entire stream. Measured in nits.
   */
  MaxCll?: number;

  /**
   * Maximum Frame-Average Light Level. Static HDR metadata that corresponds to the highest frame-average brightness in the entire stream. Measured in nits.
   */
  MaxFall?: number;
}

export namespace DolbyVisionLevel6Metadata {
  export const filterSensitiveLog = (obj: DolbyVisionLevel6Metadata): any => ({
    ...obj,
  });
}

export enum DolbyVisionLevel6Mode {
  PASSTHROUGH = "PASSTHROUGH",
  RECALCULATE = "RECALCULATE",
  SPECIFY = "SPECIFY",
}

export enum DolbyVisionProfile {
  PROFILE_5 = "PROFILE_5",
}

/**
 * Settings for Dolby Vision
 */
export interface DolbyVision {
  /**
   * Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.
   */
  L6Mode?: DolbyVisionLevel6Mode | string;

  /**
   * In the current MediaConvert implementation, the Dolby Vision profile is always 5 (PROFILE_5). Therefore, all of your inputs must contain Dolby Vision frame interleaved data.
   */
  Profile?: DolbyVisionProfile | string;

  /**
   * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
   */
  L6Metadata?: DolbyVisionLevel6Metadata;
}

export namespace DolbyVision {
  export const filterSensitiveLog = (obj: DolbyVision): any => ({
    ...obj,
  });
}

export enum NoiseReducerFilter {
  BILATERAL = "BILATERAL",
  CONSERVE = "CONSERVE",
  GAUSSIAN = "GAUSSIAN",
  LANCZOS = "LANCZOS",
  MEAN = "MEAN",
  SHARPEN = "SHARPEN",
  SPATIAL = "SPATIAL",
  TEMPORAL = "TEMPORAL",
}

/**
 * Settings for a noise reducer filter
 */
export interface NoiseReducerFilterSettings {
  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   */
  Strength?: number;
}

export namespace NoiseReducerFilterSettings {
  export const filterSensitiveLog = (obj: NoiseReducerFilterSettings): any => ({
    ...obj,
  });
}

/**
 * Noise reducer filter settings for spatial filter.
 */
export interface NoiseReducerSpatialFilterSettings {
  /**
   * Specify strength of post noise reduction sharpening filter, with 0 disabling the filter and 3 enabling it at maximum strength.
   */
  PostFilterSharpenStrength?: number;

  /**
   * The speed of the filter, from -2 (lower speed) to 3 (higher speed), with 0 being the nominal value.
   */
  Speed?: number;

  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   */
  Strength?: number;
}

export namespace NoiseReducerSpatialFilterSettings {
  export const filterSensitiveLog = (obj: NoiseReducerSpatialFilterSettings): any => ({
    ...obj,
  });
}

export enum NoiseFilterPostTemporalSharpening {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Noise reducer filter settings for temporal filter.
 */
export interface NoiseReducerTemporalFilterSettings {
  /**
   * Use Aggressive mode for content that has complex motion. Higher values produce stronger temporal filtering. This filters highly complex scenes more aggressively and creates better VQ for low bitrate outputs.
   */
  AggressiveMode?: number;

  /**
   * Specify the strength of the noise reducing filter on this output. Higher values produce stronger filtering. We recommend the following value ranges, depending on the result that you want: * 0-2 for complexity reduction with minimal sharpness loss * 2-8 for complexity reduction with image preservation * 8-16 for a high level of complexity reduction
   */
  Strength?: number;

  /**
   * The speed of the filter (higher number is faster). Low setting reduces bit rate at the cost of transcode time, high setting improves transcode time at the cost of bit rate.
   */
  Speed?: number;

  /**
   * Optional. When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), you can optionally use this setting to apply additional sharpening. The default behavior, Auto (AUTO) allows the transcoder to determine whether to apply filtering, depending on input type and quality.
   */
  PostTemporalSharpening?: NoiseFilterPostTemporalSharpening | string;
}

export namespace NoiseReducerTemporalFilterSettings {
  export const filterSensitiveLog = (obj: NoiseReducerTemporalFilterSettings): any => ({
    ...obj,
  });
}

/**
 * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter).
 */
export interface NoiseReducer {
  /**
   * Noise reducer filter settings for temporal filter.
   */
  TemporalFilterSettings?: NoiseReducerTemporalFilterSettings;

  /**
   * Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.
   */
  Filter?: NoiseReducerFilter | string;

  /**
   * Noise reducer filter settings for spatial filter.
   */
  SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;

  /**
   * Settings for a noise reducer filter
   */
  FilterSettings?: NoiseReducerFilterSettings;
}

export namespace NoiseReducer {
  export const filterSensitiveLog = (obj: NoiseReducer): any => ({
    ...obj,
  });
}

export enum WatermarkingStrength {
  DEFAULT = "DEFAULT",
  LIGHTER = "LIGHTER",
  LIGHTEST = "LIGHTEST",
  STRONGER = "STRONGER",
  STRONGEST = "STRONGEST",
}

/**
 * For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.
 */
export interface NexGuardFileMarkerSettings {
  /**
   * Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.
   */
  Strength?: WatermarkingStrength | string;

  /**
   * Enter one of the watermarking preset strings that Nagra provides you. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.
   */
  Preset?: string;

  /**
   * Specify the payload ID that you want associated with this output. Valid values vary depending on your Nagra NexGuard forensic watermarking workflow. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job. For PreRelease Content (NGPR/G2), specify an integer from 1 through 4,194,303. You must generate a unique ID for each asset you watermark, and keep a record of which ID you have assigned to each asset. Neither Nagra nor MediaConvert keep track of the relationship between output files and your IDs. For OTT Streaming, create two adaptive bitrate (ABR) stacks for each asset. Do this by setting up two output groups. For one output group, set the value of Payload ID (payload) to 0 in every output. For the other output group, set Payload ID (payload) to 1 in every output.
   */
  Payload?: number;

  /**
   * Use the base64 license string that Nagra provides you. Enter it directly in your JSON job specification or in the console. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.
   */
  License?: string;
}

export namespace NexGuardFileMarkerSettings {
  export const filterSensitiveLog = (obj: NexGuardFileMarkerSettings): any => ({
    ...obj,
  });
}

/**
 * If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
 */
export interface PartnerWatermarking {
  /**
   * For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.
   */
  NexguardFileMarkerSettings?: NexGuardFileMarkerSettings;
}

export namespace PartnerWatermarking {
  export const filterSensitiveLog = (obj: PartnerWatermarking): any => ({
    ...obj,
  });
}

export enum TimecodeBurninPosition {
  BOTTOM_CENTER = "BOTTOM_CENTER",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
  MIDDLE_CENTER = "MIDDLE_CENTER",
  MIDDLE_LEFT = "MIDDLE_LEFT",
  MIDDLE_RIGHT = "MIDDLE_RIGHT",
  TOP_CENTER = "TOP_CENTER",
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
}

/**
 * Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
 */
export interface TimecodeBurnin {
  /**
   * Use Prefix (Prefix) to place ASCII characters before any burned-in timecode. For example, a prefix of "EZ-" will result in the timecode "EZ-00:00:00:00". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard.
   */
  Prefix?: string;

  /**
   * Use Font Size (FontSize) to set the font size of any burned-in timecode. Valid values are 10, 16, 32, 48.
   */
  FontSize?: number;

  /**
   * Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.
   */
  Position?: TimecodeBurninPosition | string;
}

export namespace TimecodeBurnin {
  export const filterSensitiveLog = (obj: TimecodeBurnin): any => ({
    ...obj,
  });
}

/**
 * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
 */
export interface VideoPreprocessor {
  /**
   * Use Deinterlacer (Deinterlacer) to produce smoother motion and a clearer picture.
   */
  Deinterlacer?: Deinterlacer;

  /**
   * Enable Dolby Vision feature to produce Dolby Vision compatible video output.
   */
  DolbyVision?: DolbyVision;

  /**
   * Enable the Color corrector (ColorCorrector) feature if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ColorCorrector?: ColorCorrector;

  /**
   * Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
   */
  PartnerWatermarking?: PartnerWatermarking;

  /**
   * Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
   */
  TimecodeBurnin?: TimecodeBurnin;

  /**
   * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  NoiseReducer?: NoiseReducer;
}

export namespace VideoPreprocessor {
  export const filterSensitiveLog = (obj: VideoPreprocessor): any => ({
    ...obj,
  });
}

/**
 * Settings for video outputs
 */
export interface VideoDescription {
  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black.
   */
  Position?: Rectangle;

  /**
   * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
   */
  VideoPreprocessors?: VideoPreprocessor;

  /**
   * Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.
   */
  RespondToAfd?: RespondToAfd | string;

  /**
   * Use the Height (Height) setting to define the video resolution height for this output. Specify in pixels. If you don't provide a value here, the service will use the input height.
   */
  Height?: number;

  /**
   * Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.
   */
  ScalingBehavior?: ScalingBehavior | string;

  /**
   * Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.
   */
  DropFrameTimecode?: DropFrameTimecode | string;

  /**
   * Use Width (Width) to define the video resolution width, in pixels, for this output. If you don't provide a value here, the service will use the input width.
   */
  Width?: number;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame.
   */
  Crop?: Rectangle;

  /**
   * Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.
   */
  ColorMetadata?: ColorMetadata | string;

  /**
   * Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.
   */
  TimecodeInsertion?: VideoTimecodeInsertion | string;

  /**
   * This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Use Sharpness (Sharpness) setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
   */
  Sharpness?: number;

  /**
   * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * FRAME_CAPTURE, FrameCaptureSettings * AV1, Av1Settings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VP8, Vp8Settings * VP9, Vp9Settings
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all  frames of this video output.
   */
  FixedAfd?: number;

  /**
   * The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.
   */
  AntiAlias?: AntiAlias | string;
}

export namespace VideoDescription {
  export const filterSensitiveLog = (obj: VideoDescription): any => ({
    ...obj,
  });
}

/**
 * An output object describes the settings for a single output file or stream in an output group.
 */
export interface Output {
  /**
   * Use Preset (Preset) to specifiy a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.
   */
  Preset?: string;

  /**
   * (CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings.
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Container specific settings.
   */
  ContainerSettings?: ContainerSettings;

  /**
   * Specific settings for this type of output.
   */
  OutputSettings?: OutputSettings;

  /**
   * Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.
   */
  NameModifier?: string;

  /**
   * Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * WebM container, webm * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
   */
  Extension?: string;

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: VideoDescription;

  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: AudioDescription[];
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
}

/**
 * Group of outputs
 */
export interface OutputGroup {
  /**
   * Output Group settings, including type
   */
  OutputGroupSettings?: OutputGroupSettings;

  /**
   * Use Custom Group Name (CustomName) to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores.
   */
  CustomName?: string;

  /**
   * Name of the output group
   */
  Name?: string;

  /**
   * This object holds groups of encoding settings, one group of settings per output.
   */
  Outputs?: Output[];
}

export namespace OutputGroup {
  export const filterSensitiveLog = (obj: OutputGroup): any => ({
    ...obj,
  });
}

export enum TimecodeSource {
  EMBEDDED = "EMBEDDED",
  SPECIFIEDSTART = "SPECIFIEDSTART",
  ZEROBASED = "ZEROBASED",
}

/**
 * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
 */
export interface TimecodeConfig {
  /**
   * Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.
   */
  Source?: TimecodeSource | string;

  /**
   * Only use when you set Source (TimecodeSource) to Specified start (SPECIFIEDSTART). Use Start timecode (Start) to specify the timecode for the initial frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF).
   */
  Start?: string;

  /**
   * If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores frame rate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED)  the  first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the  first frame is the timecode value on the first input frame of the input.
   */
  Anchor?: string;

  /**
   * Only applies to outputs that support program-date-time stamp. Use Timestamp offset (TimestampOffset) to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format "yyyy-mm-dd".  To use Time stamp offset, you must also enable Insert program-date-time (InsertProgramDateTime) in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset (TimestampOffset) to 2003-1-25.
   */
  TimestampOffset?: string;
}

export namespace TimecodeConfig {
  export const filterSensitiveLog = (obj: TimecodeConfig): any => ({
    ...obj,
  });
}

/**
 * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
 */
export interface TimedMetadataInsertion {
  /**
   * Id3Insertions contains the array of Id3Insertion instances.
   */
  Id3Insertions?: Id3Insertion[];
}

export namespace TimedMetadataInsertion {
  export const filterSensitiveLog = (obj: TimedMetadataInsertion): any => ({
    ...obj,
  });
}

/**
 * JobSettings contains all the transcode settings for a job.
 */
export interface JobSettings {
  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;

  /**
   * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.
   */
  Inputs?: Input[];

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   */
  AdAvailOffset?: number;

  /**
   * Settings for Event Signaling And Messaging (ESAM).
   */
  Esam?: EsamSettings;
}

export namespace JobSettings {
  export const filterSensitiveLog = (obj: JobSettings): any => ({
    ...obj,
  });
}

export enum SimulateReservedQueue {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum JobStatus {
  CANCELED = "CANCELED",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
  PROGRESSING = "PROGRESSING",
  SUBMITTED = "SUBMITTED",
}

export enum StatusUpdateInterval {
  SECONDS_10 = "SECONDS_10",
  SECONDS_12 = "SECONDS_12",
  SECONDS_120 = "SECONDS_120",
  SECONDS_15 = "SECONDS_15",
  SECONDS_180 = "SECONDS_180",
  SECONDS_20 = "SECONDS_20",
  SECONDS_240 = "SECONDS_240",
  SECONDS_30 = "SECONDS_30",
  SECONDS_300 = "SECONDS_300",
  SECONDS_360 = "SECONDS_360",
  SECONDS_420 = "SECONDS_420",
  SECONDS_480 = "SECONDS_480",
  SECONDS_540 = "SECONDS_540",
  SECONDS_60 = "SECONDS_60",
  SECONDS_600 = "SECONDS_600",
}

/**
 * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
 */
export interface Timing {
  /**
   * The time, in Unix epoch format, that transcoding for the job began.
   */
  StartTime?: Date;

  /**
   * The time, in Unix epoch format, that you submitted the job.
   */
  SubmitTime?: Date;

  /**
   * The time, in Unix epoch format, that the transcoding job finished
   */
  FinishTime?: Date;
}

export namespace Timing {
  export const filterSensitiveLog = (obj: Timing): any => ({
    ...obj,
  });
}

/**
 * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 */
export interface Job {
  /**
   * Error code for the job
   */
  ErrorCode?: number;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: JobSettings | undefined;

  /**
   * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   */
  Role: string | undefined;

  /**
   * Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.
   */
  AccelerationStatus?: AccelerationStatus | string;

  /**
   * Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   */
  SimulateReservedQueue?: SimulateReservedQueue | string;

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * A job's phase can be PROBING, TRANSCODING OR UPLOADING
   */
  CurrentPhase?: JobPhase | string;

  /**
   * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus | string;

  /**
   * The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.
   */
  BillingTagsSource?: BillingTagsSource | string;

  /**
   * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
   */
  Timing?: Timing;

  /**
   * A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources
   */
  Id?: string;

  /**
   * Provides messages from the service about jobs that you have already successfully submitted.
   */
  Messages?: JobMessages;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * The time, in Unix epoch format in seconds, when the job got created.
   */
  CreatedAt?: Date;

  /**
   * The job template that the job is created from, if it is created from a job template.
   */
  JobTemplate?: string;

  /**
   * An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.
   */
  JobPercentComplete?: number;

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: { [key: string]: string };

  /**
   * When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Queue?: string;

  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * Error message of Job
   */
  ErrorMessage?: string;

  /**
   * List of output group details
   */
  OutputGroupDetails?: OutputGroupDetail[];

  /**
   * The number of times that the service automatically attempted to process your job after encountering an error.
   */
  RetryCount?: number;

  /**
   * The job's queue hopping history.
   */
  QueueTransitions?: QueueTransition[];
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
}

/**
 * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
 */
export interface JobTemplateSettings {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   */
  AdAvailOffset?: number;

  /**
   * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;

  /**
   * Settings for Event Signaling And Messaging (ESAM).
   */
  Esam?: EsamSettings;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template.
   */
  Inputs?: InputTemplate[];

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;
}

export namespace JobTemplateSettings {
  export const filterSensitiveLog = (obj: JobTemplateSettings): any => ({
    ...obj,
  });
}

export enum Type {
  CUSTOM = "CUSTOM",
  SYSTEM = "SYSTEM",
}

/**
 * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
 */
export interface JobTemplate {
  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * A name you create for each job template. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * The timestamp in epoch seconds when the Job template was last updated.
   */
  LastUpdated?: Date;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user.
   */
  Type?: Type | string;

  /**
   * The timestamp in epoch seconds for Job template creation.
   */
  CreatedAt?: Date;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * An optional category you create to organize your job templates.
   */
  Category?: string;

  /**
   * An optional description you create for each job template.
   */
  Description?: string;
}

export namespace JobTemplate {
  export const filterSensitiveLog = (obj: JobTemplate): any => ({
    ...obj,
  });
}

/**
 * Settings for preset
 */
export interface PresetSettings {
  /**
   * Caption settings for this preset. There can be multiple caption settings in a single output.
   */
  CaptionDescriptions?: CaptionDescriptionPreset[];

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: VideoDescription;

  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: AudioDescription[];

  /**
   * Container specific settings.
   */
  ContainerSettings?: ContainerSettings;
}

export namespace PresetSettings {
  export const filterSensitiveLog = (obj: PresetSettings): any => ({
    ...obj,
  });
}

/**
 * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
 */
export interface Preset {
  /**
   * The timestamp in epoch seconds when the preset was last updated.
   */
  LastUpdated?: Date;

  /**
   * A name you create for each preset. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings: PresetSettings | undefined;

  /**
   * The timestamp in epoch seconds for preset creation.
   */
  CreatedAt?: Date;

  /**
   * An optional description you create for each preset.
   */
  Description?: string;

  /**
   * An optional category you create to organize your presets.
   */
  Category?: string;

  /**
   * A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user.
   */
  Type?: Type | string;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;
}

export namespace Preset {
  export const filterSensitiveLog = (obj: Preset): any => ({
    ...obj,
  });
}

export enum PricingPlan {
  ON_DEMAND = "ON_DEMAND",
  RESERVED = "RESERVED",
}

export enum Commitment {
  ONE_YEAR = "ONE_YEAR",
}

export enum RenewalType {
  AUTO_RENEW = "AUTO_RENEW",
  EXPIRE = "EXPIRE",
}

export enum ReservationPlanStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlan {
  /**
   * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
   */
  PurchasedAt?: Date;

  /**
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment?: Commitment | string;

  /**
   * Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.
   */
  Status?: ReservationPlanStatus | string;

  /**
   * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
   */
  ExpiresAt?: Date;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.
   */
  ReservedSlots?: number;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.
   */
  RenewalType?: RenewalType | string;
}

export namespace ReservationPlan {
  export const filterSensitiveLog = (obj: ReservationPlan): any => ({
    ...obj,
  });
}

export enum QueueStatus {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
}

/**
 * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
 */
export interface Queue {
  /**
   * The estimated number of jobs with a SUBMITTED status.
   */
  SubmittedJobsCount?: number;

  /**
   * An optional description that you create for each queue.
   */
  Description?: string;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * The timestamp in epoch seconds for when you created the queue.
   */
  CreatedAt?: Date;

  /**
   * A name that you create for each queue. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * The estimated number of jobs with a PROGRESSING status.
   */
  ProgressingJobsCount?: number;

  /**
   * Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.
   */
  Type?: Type | string;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
   */
  PricingPlan?: PricingPlan | string;

  /**
   * Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;

  /**
   * The timestamp in epoch seconds for when you most recently updated the queue.
   */
  LastUpdated?: Date;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlan?: ReservationPlan;
}

export namespace Queue {
  export const filterSensitiveLog = (obj: Queue): any => ({
    ...obj,
  });
}

export interface AssociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
   */
  Arn: string | undefined;
}

export namespace AssociateCertificateRequest {
  export const filterSensitiveLog = (obj: AssociateCertificateRequest): any => ({
    ...obj,
  });
}

export interface AssociateCertificateResponse {}

export namespace AssociateCertificateResponse {
  export const filterSensitiveLog = (obj: AssociateCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * The service can't process your request because of a problem in the request. Please check your request form and syntax.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * The service couldn't complete your request because there is a conflict with the current state of the resource.
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * You don't have permissions for this action with the credentials you sent.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * The service encountered an unexpected condition and can't fulfill your request.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * The resource you requested doesn't exist.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

export interface CancelJobRequest {
  /**
   * The Job ID of the job to be cancelled.
   */
  Id: string | undefined;
}

export namespace CancelJobRequest {
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj,
  });
}

export interface CancelJobResponse {}

export namespace CancelJobResponse {
  export const filterSensitiveLog = (obj: CancelJobResponse): any => ({
    ...obj,
  });
}

export interface CreateJobRequest {
  /**
   * Optional. Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * Optional. Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   */
  SimulateReservedQueue?: SimulateReservedQueue | string;

  /**
   * Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: JobSettings | undefined;

  /**
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   */
  Role: string | undefined;

  /**
   * Optional. Idempotency token for CreateJob operation.
   */
  ClientRequestToken?: string;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   */
  Queue?: string;

  /**
   * Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.
   */
  JobTemplate?: string;

  /**
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   */
  BillingTagsSource?: BillingTagsSource | string;

  /**
   * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: { [key: string]: string };

  /**
   * Optional. Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
  });
}

export interface CreateJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

export namespace CreateJobResponse {
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj,
  });
}

export interface CreateJobTemplateRequest {
  /**
   * The name of the job template you are creating.
   */
  Name: string | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * Optional. A description of the job template you are creating.
   */
  Description?: string;

  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Optional. A category for the job template you are creating
   */
  Category?: string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: JobTemplateSettings | undefined;
}

export namespace CreateJobTemplateRequest {
  export const filterSensitiveLog = (obj: CreateJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

export namespace CreateJobTemplateResponse {
  export const filterSensitiveLog = (obj: CreateJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface CreatePresetRequest {
  /**
   * Optional. A description of the preset you are creating.
   */
  Description?: string;

  /**
   * Optional. A category for the preset you are creating.
   */
  Category?: string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };

  /**
   * The name of the preset you are creating.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings: PresetSettings | undefined;
}

export namespace CreatePresetRequest {
  export const filterSensitiveLog = (obj: CreatePresetRequest): any => ({
    ...obj,
  });
}

export interface CreatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace CreatePresetResponse {
  export const filterSensitiveLog = (obj: CreatePresetResponse): any => ({
    ...obj,
  });
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlanSettings {
  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
   */
  RenewalType: RenewalType | string | undefined;

  /**
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment: Commitment | string | undefined;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
   */
  ReservedSlots: number | undefined;
}

export namespace ReservationPlanSettings {
  export const filterSensitiveLog = (obj: ReservationPlanSettings): any => ({
    ...obj,
  });
}

export interface CreateQueueRequest {
  /**
   * Optional. A description of the queue that you are creating.
   */
  Description?: string;

  /**
   * The name of the queue that you are creating.
   */
  Name: string | undefined;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };

  /**
   * Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.
   */
  Status?: QueueStatus | string;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
   */
  PricingPlan?: PricingPlan | string;
}

export namespace CreateQueueRequest {
  export const filterSensitiveLog = (obj: CreateQueueRequest): any => ({
    ...obj,
  });
}

export interface CreateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace CreateQueueResponse {
  export const filterSensitiveLog = (obj: CreateQueueResponse): any => ({
    ...obj,
  });
}

export interface DeleteJobTemplateRequest {
  /**
   * The name of the job template to be deleted.
   */
  Name: string | undefined;
}

export namespace DeleteJobTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobTemplateResponse {}

export namespace DeleteJobTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeletePresetRequest {
  /**
   * The name of the preset to be deleted.
   */
  Name: string | undefined;
}

export namespace DeletePresetRequest {
  export const filterSensitiveLog = (obj: DeletePresetRequest): any => ({
    ...obj,
  });
}

export interface DeletePresetResponse {}

export namespace DeletePresetResponse {
  export const filterSensitiveLog = (obj: DeletePresetResponse): any => ({
    ...obj,
  });
}

export interface DeleteQueueRequest {
  /**
   * The name of the queue that you want to delete.
   */
  Name: string | undefined;
}

export namespace DeleteQueueRequest {
  export const filterSensitiveLog = (obj: DeleteQueueRequest): any => ({
    ...obj,
  });
}

export interface DeleteQueueResponse {}

export namespace DeleteQueueResponse {
  export const filterSensitiveLog = (obj: DeleteQueueResponse): any => ({
    ...obj,
  });
}

export enum DescribeEndpointsMode {
  DEFAULT = "DEFAULT",
  GET_ONLY = "GET_ONLY",
}

/**
 * DescribeEndpointsRequest
 */
export interface DescribeEndpointsRequest {
  /**
   * Use this string, provided with the response to a previous request, to request the next batch of endpoints.
   */
  NextToken?: string;

  /**
   * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
   */
  Mode?: DescribeEndpointsMode | string;
}

export namespace DescribeEndpointsRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsResponse {
  /**
   * Use this string to request the next batch of endpoints.
   */
  NextToken?: string;

  /**
   * List of endpoints
   */
  Endpoints?: Endpoint[];
}

export namespace DescribeEndpointsResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
    ...obj,
  });
}

export interface DisassociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
   */
  Arn: string | undefined;
}

export namespace DisassociateCertificateRequest {
  export const filterSensitiveLog = (obj: DisassociateCertificateRequest): any => ({
    ...obj,
  });
}

export interface DisassociateCertificateResponse {}

export namespace DisassociateCertificateResponse {
  export const filterSensitiveLog = (obj: DisassociateCertificateResponse): any => ({
    ...obj,
  });
}

export interface GetJobRequest {
  /**
   * the job ID of the job.
   */
  Id: string | undefined;
}

export namespace GetJobRequest {
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
}

export interface GetJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

export namespace GetJobResponse {
  export const filterSensitiveLog = (obj: GetJobResponse): any => ({
    ...obj,
  });
}

export interface GetJobTemplateRequest {
  /**
   * The name of the job template.
   */
  Name: string | undefined;
}

export namespace GetJobTemplateRequest {
  export const filterSensitiveLog = (obj: GetJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

export namespace GetJobTemplateResponse {
  export const filterSensitiveLog = (obj: GetJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetPresetRequest {
  /**
   * The name of the preset.
   */
  Name: string | undefined;
}

export namespace GetPresetRequest {
  export const filterSensitiveLog = (obj: GetPresetRequest): any => ({
    ...obj,
  });
}

export interface GetPresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace GetPresetResponse {
  export const filterSensitiveLog = (obj: GetPresetResponse): any => ({
    ...obj,
  });
}

export interface GetQueueRequest {
  /**
   * The name of the queue that you want information about.
   */
  Name: string | undefined;
}

export namespace GetQueueRequest {
  export const filterSensitiveLog = (obj: GetQueueRequest): any => ({
    ...obj,
  });
}

export interface GetQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace GetQueueResponse {
  export const filterSensitiveLog = (obj: GetQueueResponse): any => ({
    ...obj,
  });
}

export enum JobTemplateListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM",
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ListJobsRequest {
  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;

  /**
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus | string;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   */
  NextToken?: string;

  /**
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional. Provide a queue name to get back only jobs from that queue.
   */
  Queue?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * Use this string to request the next batch of jobs.
   */
  NextToken?: string;

  /**
   * List of jobs
   */
  Jobs?: Job[];
}

export namespace ListJobsResponse {
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListJobTemplatesRequest {
  /**
   * Use this string, provided with the response to a previous request, to request the next batch of job templates.
   */
  NextToken?: string;

  /**
   * Optionally, specify a job template category to limit responses to only job templates from that category.
   */
  Category?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;

  /**
   * Optional. Number of job templates, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: JobTemplateListBy | string;
}

export namespace ListJobTemplatesRequest {
  export const filterSensitiveLog = (obj: ListJobTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListJobTemplatesResponse {
  /**
   * List of Job templates.
   */
  JobTemplates?: JobTemplate[];

  /**
   * Use this string to request the next batch of job templates.
   */
  NextToken?: string;
}

export namespace ListJobTemplatesResponse {
  export const filterSensitiveLog = (obj: ListJobTemplatesResponse): any => ({
    ...obj,
  });
}

export enum PresetListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM",
}

export interface ListPresetsRequest {
  /**
   * Optional. Number of presets, up to twenty, that will be returned at one time
   */
  MaxResults?: number;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * Optionally, specify a preset category to limit responses to only presets from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: PresetListBy | string;
}

export namespace ListPresetsRequest {
  export const filterSensitiveLog = (obj: ListPresetsRequest): any => ({
    ...obj,
  });
}

export interface ListPresetsResponse {
  /**
   * Use this string to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * List of presets
   */
  Presets?: Preset[];
}

export namespace ListPresetsResponse {
  export const filterSensitiveLog = (obj: ListPresetsResponse): any => ({
    ...obj,
  });
}

export enum QueueListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
}

export interface ListQueuesRequest {
  /**
   * Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
   */
  ListBy?: QueueListBy | string;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * Optional. Number of queues, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListQueuesRequest {
  export const filterSensitiveLog = (obj: ListQueuesRequest): any => ({
    ...obj,
  });
}

export interface ListQueuesResponse {
  /**
   * List of queues.
   */
  Queues?: Queue[];

  /**
   * Use this string to request the next batch of queues.
   */
  NextToken?: string;
}

export namespace ListQueuesResponse {
  export const filterSensitiveLog = (obj: ListQueuesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
 */
export interface ResourceTags {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  Arn?: string;

  /**
   * The tags for the resource.
   */
  Tags?: { [key: string]: string };
}

export namespace ResourceTags {
  export const filterSensitiveLog = (obj: ResourceTags): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   */
  ResourceTags?: ResourceTags;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags: { [key: string]: string } | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * The keys of the tags that you want to remove from the resource.
   */
  TagKeys?: string[];
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateJobTemplateRequest {
  /**
   * The new category for the job template, if you are changing it.
   */
  Category?: string;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * The new description for the job template, if you are changing it.
   */
  Description?: string;

  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * The new queue for the job template, if you are changing it.
   */
  Queue?: string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * The name of the job template you are modifying
   */
  Name: string | undefined;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings?: JobTemplateSettings;
}

export namespace UpdateJobTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

export namespace UpdateJobTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdatePresetRequest {
  /**
   * Settings for preset
   */
  Settings?: PresetSettings;

  /**
   * The name of the preset you are modifying.
   */
  Name: string | undefined;

  /**
   * The new category for the preset, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the preset, if you are changing it.
   */
  Description?: string;
}

export namespace UpdatePresetRequest {
  export const filterSensitiveLog = (obj: UpdatePresetRequest): any => ({
    ...obj,
  });
}

export interface UpdatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace UpdatePresetResponse {
  export const filterSensitiveLog = (obj: UpdatePresetResponse): any => ({
    ...obj,
  });
}

export interface UpdateQueueRequest {
  /**
   * The new description for the queue, if you are changing it.
   */
  Description?: string;

  /**
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;

  /**
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * The name of the queue that you are modifying.
   */
  Name: string | undefined;
}

export namespace UpdateQueueRequest {
  export const filterSensitiveLog = (obj: UpdateQueueRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace UpdateQueueResponse {
  export const filterSensitiveLog = (obj: UpdateQueueResponse): any => ({
    ...obj,
  });
}
