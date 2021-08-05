import {
  AccelerationSettings,
  AccelerationStatus,
  AudioDescription,
  AutomatedEncodingSettings,
  AvailBlanking,
  BillingTagsSource,
  CaptionDescription,
  CaptionDescriptionPreset,
  CmfcSettings,
  ContainerType,
  Endpoint,
  EsamSettings,
  ExtendedDataServices,
  F4vSettings,
  Hdr10Metadata,
  HopDestination,
  Id3Insertion,
  ImageInserter,
  Input,
  InputTemplate,
  JobMessages,
  JobPhase,
  KantarWatermarkSettings,
  M2tsSettings,
  M3u8Settings,
  MotionImageInserter,
  MovSettings,
  Mp4Settings,
  MpdSettings,
  MxfAfdSignaling,
  MxfProfile,
  MxfXavcProfileSettings,
  NielsenConfiguration,
  NielsenNonLinearWatermarkSettings,
  OutputGroupDetail,
  OutputGroupSettings,
  QueueTransition,
  Rectangle,
} from "./models_0";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * These settings relate to your MXF output container.
 */
export interface MxfSettings {
  /**
   * Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings.
   */
  AfdSignaling?: MxfAfdSignaling | string;

  /**
   * Specify the MXF profile, also called shim, for this output. When you choose Auto, MediaConvert chooses a profile based on the video codec and resolution. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html.
   */
  Profile?: MxfProfile | string;

  /**
   * Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC.
   */
  XavcProfileSettings?: MxfXavcProfileSettings;
}

export namespace MxfSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MxfSettings): any => ({
    ...obj,
  });
}

/**
 * Container specific settings.
 */
export interface ContainerSettings {
  /**
   * These settings relate to the fragmented MP4 container for the segments in your CMAF outputs.
   */
  CmfcSettings?: CmfcSettings;

  /**
   * Container for this output. Some containers require a container settings object. If not specified, the default object will be created.
   */
  Container?: ContainerType | string;

  /**
   * Settings for F4v container
   */
  F4vSettings?: F4vSettings;

  /**
   * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
   */
  M2tsSettings?: M2tsSettings;

  /**
   * These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs.
   */
  M3u8Settings?: M3u8Settings;

  /**
   * These settings relate to your QuickTime MOV output container.
   */
  MovSettings?: MovSettings;

  /**
   * These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only.
   */
  Mp4Settings?: Mp4Settings;

  /**
   * These settings relate to the fragmented MP4 container for the segments in your DASH outputs.
   */
  MpdSettings?: MpdSettings;

  /**
   * These settings relate to your MXF output container.
   */
  MxfSettings?: MxfSettings;
}

export namespace ContainerSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerSettings): any => ({
    ...obj,
  });
}

export enum HlsAudioOnlyContainer {
  AUTOMATIC = "AUTOMATIC",
  M2TS = "M2TS",
}

export enum HlsAudioTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM = "AUDIO_ONLY_VARIANT_STREAM",
}

export enum HlsDescriptiveVideoServiceFlag {
  DONT_FLAG = "DONT_FLAG",
  FLAG = "FLAG",
}

export enum HlsIFrameOnlyManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

/**
 * Settings for HLS output groups
 */
export interface HlsSettings {
  /**
   * Specifies the group to which the audio rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create an audio-only file in a raw container. Regardless of the value that you specify here, if this output has video, the service will place the output into an MPEG2-TS container.
   */
  AudioOnlyContainer?: HlsAudioOnlyContainer | string;

  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   */
  AudioTrackType?: HlsAudioTrackType | string;

  /**
   * Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag (FLAG), MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don't flag (DONT_FLAG), MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.
   */
  DescriptiveVideoServiceFlag?: HlsDescriptiveVideoServiceFlag | string;

  /**
   * Choose Include (INCLUDE) to have MediaConvert generate a child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude (EXCLUDE).
   */
  IFrameOnlyManifest?: HlsIFrameOnlyManifest | string;

  /**
   * Use this setting to add an identifying string to the filename of each segment. The service adds this string between the name modifier and segment index number. You can use format identifiers in the string. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html
   */
  SegmentModifier?: string;
}

export namespace HlsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsSettings): any => ({
    ...obj,
  });
}

/**
 * Specific settings for this type of output.
 */
export interface OutputSettings {
  /**
   * Settings for HLS output groups
   */
  HlsSettings?: HlsSettings;
}

export namespace OutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputSettings): any => ({
    ...obj,
  });
}

export enum AfdSignaling {
  AUTO = "AUTO",
  FIXED = "FIXED",
  NONE = "NONE",
}

export enum AntiAlias {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Av1AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum Av1FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Av1FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

/**
 * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
 */
export interface Av1QvbrSettings {
  /**
   * Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;
}

export namespace Av1QvbrSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Av1QvbrSettings): any => ({
    ...obj,
  });
}

export enum Av1RateControlMode {
  QVBR = "QVBR",
}

export enum Av1SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
 */
export interface Av1Settings {
  /**
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization (spatialAdaptiveQuantization).
   */
  AdaptiveQuantization?: Av1AdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Av1FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Specify the GOP length (keyframe interval) in frames. With AV1, MediaConvert doesn't support GOP length in seconds. This value must be greater than zero and preferably equal to 1 + ((numberBFrames + 1) * x), where x is an integer value.
   */
  GopSize?: number;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Specify from the number of B-frames, in the range of 0-15. For AV1 encoding, we recommend using 7 or 15. Choose a larger number for a lower bitrate and smaller file size; choose a smaller number for better video quality.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
   */
  QvbrSettings?: Av1QvbrSettings;

  /**
   * 'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.'
   */
  RateControlMode?: Av1RateControlMode | string;

  /**
   * Specify the number of slices per picture. This value must be 1, 2, 4, 8, 16, or 32. For progressive pictures, this value must be less than or equal to the number of macroblock rows. For interlaced pictures, this value must be less than or equal to half the number of macroblock rows.
   */
  Slices?: number;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: Av1SpatialAdaptiveQuantization | string;
}

export namespace Av1Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Av1Settings): any => ({
    ...obj,
  });
}

export enum AvcIntraClass {
  CLASS_100 = "CLASS_100",
  CLASS_200 = "CLASS_200",
  CLASS_4K_2K = "CLASS_4K_2K",
  CLASS_50 = "CLASS_50",
}

export enum AvcIntraUhdQualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  SINGLE_PASS = "SINGLE_PASS",
}

/**
 * Optional when you set AVC-Intra class (avcIntraClass) to Class 4K/2K (CLASS_4K_2K). When you set AVC-Intra class to a different value, this object isn't allowed.
 */
export interface AvcIntraUhdSettings {
  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how many transcoding passes MediaConvert does with your video. When you choose Multi-pass (MULTI_PASS), your video quality is better and your output bitrate is more accurate. That is, the actual bitrate of your output is closer to the target bitrate defined in the specification. When you choose Single-pass (SINGLE_PASS), your encoding time is faster. The default behavior is Single-pass (SINGLE_PASS).
   */
  QualityTuningLevel?: AvcIntraUhdQualityTuningLevel | string;
}

export namespace AvcIntraUhdSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvcIntraUhdSettings): any => ({
    ...obj,
  });
}

export enum AvcIntraFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum AvcIntraFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum AvcIntraInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum AvcIntraScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum AvcIntraSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum AvcIntraTelecine {
  HARD = "HARD",
  NONE = "NONE",
}

/**
 * Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.
 */
export interface AvcIntraSettings {
  /**
   * Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality. Note that for Class 4K/2K, MediaConvert supports only 4:2:2 chroma subsampling.
   */
  AvcIntraClass?: AvcIntraClass | string;

  /**
   * Optional when you set AVC-Intra class (avcIntraClass) to Class 4K/2K (CLASS_4K_2K). When you set AVC-Intra class to a different value, this object isn't allowed.
   */
  AvcIntraUhdSettings?: AvcIntraUhdSettings;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: AvcIntraFramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: AvcIntraFramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: AvcIntraInterlaceMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: AvcIntraScanTypeConversionMode | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: AvcIntraSlowPal | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: AvcIntraTelecine | string;
}

export namespace AvcIntraSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvcIntraSettings): any => ({
    ...obj,
  });
}

export enum VideoCodec {
  AV1 = "AV1",
  AVC_INTRA = "AVC_INTRA",
  FRAME_CAPTURE = "FRAME_CAPTURE",
  H_264 = "H_264",
  H_265 = "H_265",
  MPEG2 = "MPEG2",
  PRORES = "PRORES",
  VC3 = "VC3",
  VP8 = "VP8",
  VP9 = "VP9",
  XAVC = "XAVC",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
 */
export interface FrameCaptureSettings {
  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.n.jpg where n is the 0-based sequence number of each Capture.
   */
  FramerateDenominator?: number;

  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.NNNNNNN.jpg where N is the 0-based frame sequence number zero padded to 7 decimal places.
   */
  FramerateNumerator?: number;

  /**
   * Maximum number of captures (encoded jpg output files).
   */
  MaxCaptures?: number;

  /**
   * JPEG Quality - a higher value equals higher quality.
   */
  Quality?: number;
}

export namespace FrameCaptureSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureSettings): any => ({
    ...obj,
  });
}

export enum H264AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H264CodecLevel {
  AUTO = "AUTO",
  LEVEL_1 = "LEVEL_1",
  LEVEL_1_1 = "LEVEL_1_1",
  LEVEL_1_2 = "LEVEL_1_2",
  LEVEL_1_3 = "LEVEL_1_3",
  LEVEL_2 = "LEVEL_2",
  LEVEL_2_1 = "LEVEL_2_1",
  LEVEL_2_2 = "LEVEL_2_2",
  LEVEL_3 = "LEVEL_3",
  LEVEL_3_1 = "LEVEL_3_1",
  LEVEL_3_2 = "LEVEL_3_2",
  LEVEL_4 = "LEVEL_4",
  LEVEL_4_1 = "LEVEL_4_1",
  LEVEL_4_2 = "LEVEL_4_2",
  LEVEL_5 = "LEVEL_5",
  LEVEL_5_1 = "LEVEL_5_1",
  LEVEL_5_2 = "LEVEL_5_2",
}

export enum H264CodecProfile {
  BASELINE = "BASELINE",
  HIGH = "HIGH",
  HIGH_10BIT = "HIGH_10BIT",
  HIGH_422 = "HIGH_422",
  HIGH_422_10BIT = "HIGH_422_10BIT",
  MAIN = "MAIN",
}

export enum H264DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC",
}

export enum H264EntropyEncoding {
  CABAC = "CABAC",
  CAVLC = "CAVLC",
}

export enum H264FieldEncoding {
  FORCE_FIELD = "FORCE_FIELD",
  PAFF = "PAFF",
}

export enum H264FlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum H264GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H264InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum H264ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264QualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

/**
 * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
 */
export interface H264QvbrSettings {
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   */
  MaxAverageBitrate?: number;

  /**
   * Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;
}

export namespace H264QvbrSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264QvbrSettings): any => ({
    ...obj,
  });
}

export enum H264RateControlMode {
  CBR = "CBR",
  QVBR = "QVBR",
  VBR = "VBR",
}

export enum H264RepeatPps {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum H264SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  TRANSITION_DETECTION = "TRANSITION_DETECTION",
}

export enum H264SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264Syntax {
  DEFAULT = "DEFAULT",
  RP2027 = "RP2027",
}

export enum H264Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT",
}

export enum H264TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264UnregisteredSeiTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
 */
export interface H264Settings {
  /**
   * Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set H264AdaptiveQuantization to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization (H264AdaptiveQuantization) to Off (OFF). Related settings: The value that you choose here applies to the following settings: H264FlickerAdaptiveQuantization, H264SpatialAdaptiveQuantization, and H264TemporalAdaptiveQuantization.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO).
   */
  CodecLevel?: H264CodecLevel | string;

  /**
   * H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.
   */
  CodecProfile?: H264CodecProfile | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: H264DynamicSubGop | string;

  /**
   * Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.
   */
  EntropyEncoding?: H264EntropyEncoding | string;

  /**
   * Keep the default value, PAFF, to have MediaConvert use PAFF encoding for interlaced outputs. Choose Force field (FORCE_FIELD) to disable PAFF encoding and create separate interlaced fields.
   */
  FieldEncoding?: H264FieldEncoding | string;

  /**
   * Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264FlickerAdaptiveQuantization is Disabled (DISABLED). Change this value to Enabled (ENABLED) to reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. To manually enable or disable H264FlickerAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.
   */
  FlickerAdaptiveQuantization?: H264FlickerAdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: H264FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: H264FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: H264GopBReference | string;

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
  GopSizeUnits?: H264GopSizeUnits | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: H264InterlaceMode | string;

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
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: H264ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: H264QualityTuningLevel | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
   */
  QvbrSettings?: H264QvbrSettings;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   */
  RateControlMode?: H264RateControlMode | string;

  /**
   * Places a PPS header on each encoded picture, even if repeated.
   */
  RepeatPps?: H264RepeatPps | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: H264ScanTypeConversionMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   */
  SceneChangeDetect?: H264SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: H264SlowPal | string;

  /**
   * Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   */
  Softness?: number;

  /**
   * Only use this setting when you change the default value, Auto (AUTO), for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264SpatialAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to set H264SpatialAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (H264AdaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. To manually enable or disable H264SpatialAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.
   */
  SpatialAdaptiveQuantization?: H264SpatialAdaptiveQuantization | string;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: H264Telecine | string;

  /**
   * Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264TemporalAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to set H264TemporalAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization). To manually enable or disable H264TemporalAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.
   */
  TemporalAdaptiveQuantization?: H264TemporalAdaptiveQuantization | string;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   */
  UnregisteredSeiTimecode?: H264UnregisteredSeiTimecode | string;
}

export namespace H264Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264Settings): any => ({
    ...obj,
  });
}

export enum H265AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H265AlternateTransferFunctionSei {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

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
  FRAMEFORMER = "FRAMEFORMER",
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
 * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
 */
export interface H265QvbrSettings {
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   */
  MaxAverageBitrate?: number;

  /**
   * Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;
}

export namespace H265QvbrSettings {
  /**
   * @internal
   */
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

export enum H265ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
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
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | string;

  /**
   * Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).
   */
  AlternateTransferFunctionSei?: H265AlternateTransferFunctionSei | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * H.265 Level.
   */
  CodecLevel?: H265CodecLevel | string;

  /**
   * Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.
   */
  CodecProfile?: H265CodecProfile | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: H265DynamicSubGop | string;

  /**
   * Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set adaptiveQuantization to a value other than Off (OFF).
   */
  FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: H265FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: H265GopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: H265InterlaceMode | string;

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
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: H265ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: H265QualityTuningLevel | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
   */
  QvbrSettings?: H265QvbrSettings;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content
   */
  SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: H265ScanTypeConversionMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: H265SlowPal | string;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization | string;

  /**
   * This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
   */
  Telecine?: H265Telecine | string;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).
   */
  TemporalAdaptiveQuantization?: H265TemporalAdaptiveQuantization | string;

  /**
   * Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.
   */
  TemporalIds?: H265TemporalIds | string;

  /**
   * Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.
   */
  Tiles?: H265Tiles | string;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   */
  UnregisteredSeiTimecode?: H265UnregisteredSeiTimecode | string;

  /**
   * If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.
   */
  WriteMp4PackagingType?: H265WriteMp4PackagingType | string;
}

export namespace H265Settings {
  /**
   * @internal
   */
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
  FRAMEFORMER = "FRAMEFORMER",
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

export enum Mpeg2ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
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
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.
   */
  CodecLevel?: Mpeg2CodecLevel | string;

  /**
   * Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.
   */
  CodecProfile?: Mpeg2CodecProfile | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: Mpeg2DynamicSubGop | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Mpeg2FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
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
  GopSizeUnits?: Mpeg2GopSizeUnits | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: Mpeg2InterlaceMode | string;

  /**
   * Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.
   */
  IntraDcPrecision?: Mpeg2IntraDcPrecision | string;

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
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: Mpeg2ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: Mpeg2QualityTuningLevel | string;

  /**
   * Use Rate control mode (Mpeg2RateControlMode) to specify whether the bitrate is variable (vbr) or constant (cbr).
   */
  RateControlMode?: Mpeg2RateControlMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: Mpeg2ScanTypeConversionMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.
   */
  SceneChangeDetect?: Mpeg2SceneChangeDetect | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: Mpeg2SlowPal | string;

  /**
   * Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, to use the AWS Elemental default matrices. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   */
  Softness?: number;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization | string;

  /**
   * Specify whether this output's video uses the D10 syntax. Keep the default value to  not use the syntax. Related settings: When you choose D10 (D_10) for your MXF  profile (profile), you must also set this value to to D10 (D_10).
   */
  Syntax?: Mpeg2Syntax | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: Mpeg2Telecine | string;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).
   */
  TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization | string;
}

export namespace Mpeg2Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Mpeg2Settings): any => ({
    ...obj,
  });
}

export enum ProresChromaSampling {
  PRESERVE_444_SAMPLING = "PRESERVE_444_SAMPLING",
  SUBSAMPLE_TO_422 = "SUBSAMPLE_TO_422",
}

export enum ProresCodecProfile {
  APPLE_PRORES_422 = "APPLE_PRORES_422",
  APPLE_PRORES_422_HQ = "APPLE_PRORES_422_HQ",
  APPLE_PRORES_422_LT = "APPLE_PRORES_422_LT",
  APPLE_PRORES_422_PROXY = "APPLE_PRORES_422_PROXY",
  APPLE_PRORES_4444 = "APPLE_PRORES_4444",
  APPLE_PRORES_4444_XQ = "APPLE_PRORES_4444_XQ",
}

export enum ProresFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum ProresFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
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

export enum ProresScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
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
   * This setting applies only to ProRes 4444 and ProRes 4444 XQ outputs that you create from inputs that use 4:4:4 chroma sampling. Set Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING) to allow outputs to also use 4:4:4 chroma sampling. You must specify a value for this setting when your output codec profile supports 4:4:4 chroma sampling. Related Settings: When you set Chroma sampling to Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING), you must choose an output codec profile that supports 4:4:4 chroma sampling. These values for Profile (CodecProfile) support 4:4:4 chroma sampling: Apple ProRes 4444 (APPLE_PRORES_4444) or Apple ProRes 4444 XQ (APPLE_PRORES_4444_XQ). When you set Chroma sampling to Preserve 4:4:4 sampling, you must disable all video preprocessors except for Nexguard file marker (PartnerWatermarking). When you set Chroma sampling to Preserve 4:4:4 sampling and use framerate conversion, you must set Frame rate conversion algorithm (FramerateConversionAlgorithm) to Drop duplicate (DUPLICATE_DROP).
   */
  ChromaSampling?: ProresChromaSampling | string;

  /**
   * Use Profile (ProResCodecProfile) to specify the type of Apple ProRes codec to use for this output.
   */
  CodecProfile?: ProresCodecProfile | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: ProresFramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: ProresInterlaceMode | string;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: ProresParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: ProresScanTypeConversionMode | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: ProresSlowPal | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: ProresTelecine | string;
}

export namespace ProresSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProresSettings): any => ({
    ...obj,
  });
}

export enum Vc3FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vc3FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum Vc3InterlaceMode {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum Vc3ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum Vc3SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Vc3Telecine {
  HARD = "HARD",
  NONE = "NONE",
}

export enum Vc3Class {
  CLASS_145_8BIT = "CLASS_145_8BIT",
  CLASS_220_10BIT = "CLASS_220_10BIT",
  CLASS_220_8BIT = "CLASS_220_8BIT",
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VC3
 */
export interface Vc3Settings {
  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vc3FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Vc3FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output.
   */
  InterlaceMode?: Vc3InterlaceMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: Vc3ScanTypeConversionMode | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: Vc3SlowPal | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: Vc3Telecine | string;

  /**
   * Specify the VC3 class to choose the quality characteristics for this output. VC3 class, together with the settings Framerate (framerateNumerator and framerateDenominator) and Resolution (height and width), determine your output bitrate. For example, say that your video resolution is 1920x1080 and your framerate is 29.97. Then Class 145 (CLASS_145) gives you an output with a bitrate of approximately 145 Mbps and Class 220 (CLASS_220) gives you and output with a bitrate of approximately 220 Mbps. VC3 class also specifies the color bit depth of your output.
   */
  Vc3Class?: Vc3Class | string;
}

export namespace Vc3Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vc3Settings): any => ({
    ...obj,
  });
}

export enum Vp8FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp8FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
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
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  Bitrate?: number;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vp8FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Vp8FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Optional. Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   */
  MaxBitrate?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: Vp8ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   */
  QualityTuningLevel?: Vp8QualityTuningLevel | string;

  /**
   * With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode.
   */
  RateControlMode?: Vp8RateControlMode | string;
}

export namespace Vp8Settings {
  /**
   * @internal
   */
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
  FRAMEFORMER = "FRAMEFORMER",
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
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  Bitrate?: number;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vp9FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Vp9FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   */
  MaxBitrate?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio for this output. The default behavior is to use the same pixel aspect ratio as your input video.
   */
  ParControl?: Vp9ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   */
  QualityTuningLevel?: Vp9QualityTuningLevel | string;

  /**
   * With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode.
   */
  RateControlMode?: Vp9RateControlMode | string;
}

export namespace Vp9Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vp9Settings): any => ({
    ...obj,
  });
}

export enum XavcAdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum XavcEntropyEncoding {
  AUTO = "AUTO",
  CABAC = "CABAC",
  CAVLC = "CAVLC",
}

export enum XavcFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum XavcFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum XavcProfile {
  XAVC_4K = "XAVC_4K",
  XAVC_4K_INTRA_CBG = "XAVC_4K_INTRA_CBG",
  XAVC_4K_INTRA_VBR = "XAVC_4K_INTRA_VBR",
  XAVC_HD = "XAVC_HD",
  XAVC_HD_INTRA_CBG = "XAVC_HD_INTRA_CBG",
}

export enum XavcSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum XavcSpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum XavcTemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Xavc4kIntraCbgProfileClass {
  CLASS_100 = "CLASS_100",
  CLASS_300 = "CLASS_300",
  CLASS_480 = "CLASS_480",
}

/**
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_CBG.
 */
export interface Xavc4kIntraCbgProfileSettings {
  /**
   * Specify the XAVC Intra 4k (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  XavcClass?: Xavc4kIntraCbgProfileClass | string;
}

export namespace Xavc4kIntraCbgProfileSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Xavc4kIntraCbgProfileSettings): any => ({
    ...obj,
  });
}

export enum Xavc4kIntraVbrProfileClass {
  CLASS_100 = "CLASS_100",
  CLASS_300 = "CLASS_300",
  CLASS_480 = "CLASS_480",
}

/**
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_VBR.
 */
export interface Xavc4kIntraVbrProfileSettings {
  /**
   * Specify the XAVC Intra 4k (VBR) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  XavcClass?: Xavc4kIntraVbrProfileClass | string;
}

export namespace Xavc4kIntraVbrProfileSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Xavc4kIntraVbrProfileSettings): any => ({
    ...obj,
  });
}

export enum Xavc4kProfileBitrateClass {
  BITRATE_CLASS_100 = "BITRATE_CLASS_100",
  BITRATE_CLASS_140 = "BITRATE_CLASS_140",
  BITRATE_CLASS_200 = "BITRATE_CLASS_200",
}

export enum Xavc4kProfileCodecProfile {
  HIGH = "HIGH",
  HIGH_422 = "HIGH_422",
}

export enum XavcFlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum XavcGopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Xavc4kProfileQualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

/**
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K.
 */
export interface Xavc4kProfileSettings {
  /**
   * Specify the XAVC 4k (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  BitrateClass?: Xavc4kProfileBitrateClass | string;

  /**
   * Specify the codec profile for this output. Choose High, 8-bit, 4:2:0 (HIGH) or High, 10-bit, 4:2:2 (HIGH_422). These profiles are specified in ITU-T H.264.
   */
  CodecProfile?: Xavc4kProfileCodecProfile | string;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (XavcAdaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization (adaptiveQuantization) to a value other than Off (OFF) or Auto (AUTO). Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.
   */
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization | string;

  /**
   * Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow (ENABLED) to allow the encoder to use B-frames as reference frames. Choose Don't allow (DISABLED) to prevent the encoder from using B-frames as reference frames.
   */
  GopBReference?: XavcGopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.
   */
  HrdBufferSize?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: Xavc4kProfileQualityTuningLevel | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;
}

export namespace Xavc4kProfileSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Xavc4kProfileSettings): any => ({
    ...obj,
  });
}

export enum XavcHdIntraCbgProfileClass {
  CLASS_100 = "CLASS_100",
  CLASS_200 = "CLASS_200",
  CLASS_50 = "CLASS_50",
}

/**
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD_INTRA_CBG.
 */
export interface XavcHdIntraCbgProfileSettings {
  /**
   * Specify the XAVC Intra HD (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  XavcClass?: XavcHdIntraCbgProfileClass | string;
}

export namespace XavcHdIntraCbgProfileSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XavcHdIntraCbgProfileSettings): any => ({
    ...obj,
  });
}

export enum XavcHdProfileBitrateClass {
  BITRATE_CLASS_25 = "BITRATE_CLASS_25",
  BITRATE_CLASS_35 = "BITRATE_CLASS_35",
  BITRATE_CLASS_50 = "BITRATE_CLASS_50",
}

export enum XavcInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum XavcHdProfileQualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

export enum XavcHdProfileTelecine {
  HARD = "HARD",
  NONE = "NONE",
}

/**
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD.
 */
export interface XavcHdProfileSettings {
  /**
   * Specify the XAVC HD (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  BitrateClass?: XavcHdProfileBitrateClass | string;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (XavcAdaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization (adaptiveQuantization) to a value other than Off (OFF) or Auto (AUTO). Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.
   */
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization | string;

  /**
   * Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow (ENABLED) to allow the encoder to use B-frames as reference frames. Choose Don't allow (DISABLED) to prevent the encoder from using B-frames as reference frames.
   */
  GopBReference?: XavcGopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: XavcInterlaceMode | string;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: XavcHdProfileQualityTuningLevel | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Ignore this setting unless you set Frame rate (framerateNumerator divided by framerateDenominator) to 29.970. If your input framerate is 23.976, choose Hard (HARD). Otherwise, keep the default value None (NONE). For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-telecine-and-inverse-telecine.html.
   */
  Telecine?: XavcHdProfileTelecine | string;
}

export namespace XavcHdProfileSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XavcHdProfileSettings): any => ({
    ...obj,
  });
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value XAVC.
 */
export interface XavcSettings {
  /**
   * Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set Adaptive quantization (adaptiveQuantization) to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off (OFF). Related settings: The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).
   */
  AdaptiveQuantization?: XavcAdaptiveQuantization | string;

  /**
   * Optional. Choose a specific entropy encoding mode only when you want to override XAVC recommendations. If you choose the value auto, MediaConvert uses the mode that the XAVC file format specifies given this output's operating point.
   */
  EntropyEncoding?: XavcEntropyEncoding | string;

  /**
   * If you are using the console, use the Frame rate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list. The framerates shown in the dropdown list are decimal approximations of fractions. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate that you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: XavcFramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: XavcFramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Frame rate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Specify the XAVC profile for this output. For more information, see the Sony documentation at https://www.xavc-info.org/. Note that MediaConvert doesn't support the interlaced video XAVC operating points for XAVC_HD_INTRA_CBG. To create an interlaced XAVC output, choose the profile XAVC_HD.
   */
  Profile?: XavcProfile | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Frame rate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: XavcSlowPal | string;

  /**
   * Ignore this setting unless your downstream workflow requires that you specify it explicitly. Otherwise, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   */
  Softness?: number;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: XavcSpatialAdaptiveQuantization | string;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal adaptive quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).
   */
  TemporalAdaptiveQuantization?: XavcTemporalAdaptiveQuantization | string;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_CBG.
   */
  Xavc4kIntraCbgProfileSettings?: Xavc4kIntraCbgProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_VBR.
   */
  Xavc4kIntraVbrProfileSettings?: Xavc4kIntraVbrProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K.
   */
  Xavc4kProfileSettings?: Xavc4kProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD_INTRA_CBG.
   */
  XavcHdIntraCbgProfileSettings?: XavcHdIntraCbgProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD.
   */
  XavcHdProfileSettings?: XavcHdProfileSettings;
}

export namespace XavcSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XavcSettings): any => ({
    ...obj,
  });
}

/**
 * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings
 */
export interface VideoCodecSettings {
  /**
   * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
   */
  Av1Settings?: Av1Settings;

  /**
   * Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.
   */
  AvcIntraSettings?: AvcIntraSettings;

  /**
   * Specifies the video codec. This must be equal to one of the enum values defined by the object  VideoCodec.
   */
  Codec?: VideoCodec | string;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
   */
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
   */
  H264Settings?: H264Settings;

  /**
   * Settings for H265 codec
   */
  H265Settings?: H265Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
   */
  Mpeg2Settings?: Mpeg2Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
   */
  ProresSettings?: ProresSettings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VC3
   */
  Vc3Settings?: Vc3Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.
   */
  Vp8Settings?: Vp8Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.
   */
  Vp9Settings?: Vp9Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value XAVC.
   */
  XavcSettings?: XavcSettings;
}

export namespace VideoCodecSettings {
  /**
   * @internal
   */
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

export enum SampleRangeConversion {
  LIMITED_RANGE_SQUEEZE = "LIMITED_RANGE_SQUEEZE",
  NONE = "NONE",
}

/**
 * Settings for color correction.
 */
export interface ColorCorrector {
  /**
   * Brightness level.
   */
  Brightness?: number;

  /**
   * Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses Elemental tone mapping technology to approximate the outcome of manually regrading from HDR to SDR.
   */
  ColorSpaceConversion?: ColorSpaceConversion | string;

  /**
   * Contrast level.
   */
  Contrast?: number;

  /**
   * Use these settings when you convert to the HDR 10 color space. Specify the SMPTE ST 2086 Mastering Display Color Volume static metadata that you want signaled in the output. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. When you set Color space conversion (ColorSpaceConversion) to HDR 10 (FORCE_HDR10), these settings are required. You must set values for Max frame average light level (maxFrameAverageLightLevel) and Max content light level (maxContentLightLevel); these settings don't have a default value. The default values for the other HDR 10 metadata settings are defined by the P3D65 color space. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  Hdr10Metadata?: Hdr10Metadata;

  /**
   * Hue in degrees.
   */
  Hue?: number;

  /**
   * Specify the video color sample range for this output. To create a full range output, you must start with a full range YUV input and keep the default value, None (NONE). To create a limited range output from a full range input, choose Limited range (LIMITED_RANGE_SQUEEZE). With RGB inputs, your output is always limited range, regardless of your choice here. When you create a limited range output from a full range input, MediaConvert limits the active pixel values in a way that depends on the output's bit depth: 8-bit outputs contain only values from 16 through 235 and 10-bit outputs contain only values from 64 through 940. With this conversion, MediaConvert also changes the output metadata to note the limited range.
   */
  SampleRangeConversion?: SampleRangeConversion | string;

  /**
   * Saturation level.
   */
  Saturation?: number;
}

export namespace ColorCorrector {
  /**
   * @internal
   */
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
   * Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.
   */
  Algorithm?: DeinterlaceAlgorithm | string;

  /**
   * - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video.
   */
  Control?: DeinterlacerControl | string;

  /**
   * Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.
   */
  Mode?: DeinterlacerMode | string;
}

export namespace Deinterlacer {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
 * With AWS Elemental MediaConvert, you can create profile 5 Dolby Vision outputs from MXF and IMF sources that contain mastering information as frame-interleaved Dolby Vision metadata.
 */
export interface DolbyVision {
  /**
   * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
   */
  L6Metadata?: DolbyVisionLevel6Metadata;

  /**
   * Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.
   */
  L6Mode?: DolbyVisionLevel6Mode | string;

  /**
   * In the current MediaConvert implementation, the Dolby Vision profile is always 5 (PROFILE_5). Therefore, all of your inputs must contain Dolby Vision frame interleaved data.
   */
  Profile?: DolbyVisionProfile | string;
}

export namespace DolbyVision {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DolbyVision): any => ({
    ...obj,
  });
}

/**
 * Setting for HDR10+ metadata insertion
 */
export interface Hdr10Plus {
  /**
   * Specify the HDR10+ mastering display normalized peak luminance, in nits. This is the normalized actual peak luminance of the mastering display, as defined by ST 2094-40.
   */
  MasteringMonitorNits?: number;

  /**
   * Specify the HDR10+ target display nominal peak luminance, in nits. This is the nominal maximum luminance of the target display as defined by ST 2094-40.
   */
  TargetMonitorNits?: number;
}

export namespace Hdr10Plus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Hdr10Plus): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * Optional. When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), you can use this setting to apply sharpening. The default behavior, Auto (AUTO), allows the transcoder to determine whether to apply filtering, depending on input type and quality. When you set Noise reducer to Temporal, your output bandwidth is reduced. When Post temporal sharpening is also enabled, that bandwidth reduction is smaller.
   */
  PostTemporalSharpening?: NoiseFilterPostTemporalSharpening | string;

  /**
   * The speed of the filter (higher number is faster). Low setting reduces bit rate at the cost of transcode time, high setting improves transcode time at the cost of bit rate.
   */
  Speed?: number;

  /**
   * Specify the strength of the noise reducing filter on this output. Higher values produce stronger filtering. We recommend the following value ranges, depending on the result that you want: * 0-2 for complexity reduction with minimal sharpness loss * 2-8 for complexity reduction with image preservation * 8-16 for a high level of complexity reduction
   */
  Strength?: number;
}

export namespace NoiseReducerTemporalFilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoiseReducerTemporalFilterSettings): any => ({
    ...obj,
  });
}

/**
 * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter).
 */
export interface NoiseReducer {
  /**
   * Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.
   */
  Filter?: NoiseReducerFilter | string;

  /**
   * Settings for a noise reducer filter
   */
  FilterSettings?: NoiseReducerFilterSettings;

  /**
   * Noise reducer filter settings for spatial filter.
   */
  SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;

  /**
   * Noise reducer filter settings for temporal filter.
   */
  TemporalFilterSettings?: NoiseReducerTemporalFilterSettings;
}

export namespace NoiseReducer {
  /**
   * @internal
   */
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
   * Use the base64 license string that Nagra provides you. Enter it directly in your JSON job specification or in the console. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.
   */
  License?: string;

  /**
   * Specify the payload ID that you want associated with this output. Valid values vary depending on your Nagra NexGuard forensic watermarking workflow. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job. For PreRelease Content (NGPR/G2), specify an integer from 1 through 4,194,303. You must generate a unique ID for each asset you watermark, and keep a record of which ID you have assigned to each asset. Neither Nagra nor MediaConvert keep track of the relationship between output files and your IDs. For OTT Streaming, create two adaptive bitrate (ABR) stacks for each asset. Do this by setting up two output groups. For one output group, set the value of Payload ID (payload) to 0 in every output. For the other output group, set Payload ID (payload) to 1 in every output.
   */
  Payload?: number;

  /**
   * Enter one of the watermarking preset strings that Nagra provides you. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.
   */
  Preset?: string;

  /**
   * Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.
   */
  Strength?: WatermarkingStrength | string;
}

export namespace NexGuardFileMarkerSettings {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
 * Settings for burning the output timecode and specified prefix into the output.
 */
export interface TimecodeBurnin {
  /**
   * Use Font Size (FontSize) to set the font size of any burned-in timecode. Valid values are 10, 16, 32, 48.
   */
  FontSize?: number;

  /**
   * Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.
   */
  Position?: TimecodeBurninPosition | string;

  /**
   * Use Prefix (Prefix) to place ASCII characters before any burned-in timecode. For example, a prefix of "EZ-" will result in the timecode "EZ-00:00:00:00". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard.
   */
  Prefix?: string;
}

export namespace TimecodeBurnin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimecodeBurnin): any => ({
    ...obj,
  });
}

/**
 * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
 */
export interface VideoPreprocessor {
  /**
   * Use these settings to convert the color space or to modify properties such as hue and contrast for this output. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/converting-the-color-space.html.
   */
  ColorCorrector?: ColorCorrector;

  /**
   * Use the deinterlacer to produce smoother motion and a clearer picture. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-scan-type.html.
   */
  Deinterlacer?: Deinterlacer;

  /**
   * Enable Dolby Vision feature to produce Dolby Vision compatible video output.
   */
  DolbyVision?: DolbyVision;

  /**
   * Enable HDR10+ analyis and metadata injection. Compatible with HEVC only.
   */
  Hdr10Plus?: Hdr10Plus;

  /**
   * Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  NoiseReducer?: NoiseReducer;

  /**
   * If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
   */
  PartnerWatermarking?: PartnerWatermarking;

  /**
   * Settings for burning the output timecode and specified prefix into the output.
   */
  TimecodeBurnin?: TimecodeBurnin;
}

export namespace VideoPreprocessor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoPreprocessor): any => ({
    ...obj,
  });
}

/**
 * Settings related to video encoding of your output. The specific video settings depend on the video codec that you choose. When you work directly in your JSON job specification, include one instance of Video description (VideoDescription) per output.
 */
export interface VideoDescription {
  /**
   * This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.
   */
  AntiAlias?: AntiAlias | string;

  /**
   * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.
   */
  ColorMetadata?: ColorMetadata | string;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame.
   */
  Crop?: Rectangle;

  /**
   * Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.
   */
  DropFrameTimecode?: DropFrameTimecode | string;

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
  Position?: Rectangle;

  /**
   * Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.
   */
  RespondToAfd?: RespondToAfd | string;

  /**
   * Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.
   */
  ScalingBehavior?: ScalingBehavior | string;

  /**
   * Use Sharpness (Sharpness) setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
   */
  Sharpness?: number;

  /**
   * Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.
   */
  TimecodeInsertion?: VideoTimecodeInsertion | string;

  /**
   * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
   */
  VideoPreprocessors?: VideoPreprocessor;

  /**
   * Use Width (Width) to define the video resolution width, in pixels, for this output. If you don't provide a value here, the service will use the input width.
   */
  Width?: number;
}

export namespace VideoDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoDescription): any => ({
    ...obj,
  });
}

/**
 * Each output in your job is a collection of settings that describes how you want MediaConvert to encode a single output file or stream. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/create-outputs.html.
 */
export interface Output {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: AudioDescription[];

  /**
   * (CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings.
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Container specific settings.
   */
  ContainerSettings?: ContainerSettings;

  /**
   * Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * WebM container, webm * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
   */
  Extension?: string;

  /**
   * Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.
   */
  NameModifier?: string;

  /**
   * Specific settings for this type of output.
   */
  OutputSettings?: OutputSettings;

  /**
   * Use Preset (Preset) to specify a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.
   */
  Preset?: string;

  /**
   * VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.
   */
  VideoDescription?: VideoDescription;
}

export namespace Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
}

/**
 * Group of outputs
 */
export interface OutputGroup {
  /**
   * Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
   */
  AutomatedEncodingSettings?: AutomatedEncodingSettings;

  /**
   * Use Custom Group Name (CustomName) to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores.
   */
  CustomName?: string;

  /**
   * Name of the output group
   */
  Name?: string;

  /**
   * Output Group settings, including type
   */
  OutputGroupSettings?: OutputGroupSettings;

  /**
   * This object holds groups of encoding settings, one group of settings per output.
   */
  Outputs?: Output[];
}

export namespace OutputGroup {
  /**
   * @internal
   */
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
   * If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores frame rate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED)  the  first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the  first frame is the timecode value on the first input frame of the input.
   */
  Anchor?: string;

  /**
   * Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.
   */
  Source?: TimecodeSource | string;

  /**
   * Only use when you set Source (TimecodeSource) to Specified start (SPECIFIEDSTART). Use Start timecode (Start) to specify the timecode for the initial frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF).
   */
  Start?: string;

  /**
   * Only applies to outputs that support program-date-time stamp. Use Timestamp offset (TimestampOffset) to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format "yyyy-mm-dd".  To use Time stamp offset, you must also enable Insert program-date-time (InsertProgramDateTime) in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset (TimestampOffset) to 2003-1-25.
   */
  TimestampOffset?: string;
}

export namespace TimecodeConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimecodeConfig): any => ({
    ...obj,
  });
}

/**
 * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in any HLS outputs. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
 */
export interface TimedMetadataInsertion {
  /**
   * Id3Insertions contains the array of Id3Insertion instances.
   */
  Id3Insertions?: Id3Insertion[];
}

export namespace TimedMetadataInsertion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimedMetadataInsertion): any => ({
    ...obj,
  });
}

/**
 * JobSettings contains all the transcode settings for a job.
 */
export interface JobSettings {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   */
  AdAvailOffset?: number;

  /**
   * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
   */
  Esam?: EsamSettings;

  /**
   * Hexadecimal value as per EIA-608 Line 21 Data Services, section 9.5.1.5 05h Content Advisory.
   */
  ExtendedDataServices?: ExtendedDataServices;

  /**
   * Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.
   */
  Inputs?: Input[];

  /**
   * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
   */
  KantarWatermark?: KantarWatermarkSettings;

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that  MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to  specifying these values, you also need to set up your cloud TIC server. These settings apply to  every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]
   */
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in any HLS outputs. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;
}

export namespace JobSettings {
  /**
   * @internal
   */
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
   * The time, in Unix epoch format, that the transcoding job finished
   */
  FinishTime?: Date;

  /**
   * The time, in Unix epoch format, that transcoding for the job began.
   */
  StartTime?: Date;

  /**
   * The time, in Unix epoch format, that you submitted the job.
   */
  SubmitTime?: Date;
}

export namespace Timing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Timing): any => ({
    ...obj,
  });
}

/**
 * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 */
export interface Job {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.
   */
  AccelerationStatus?: AccelerationStatus | string;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.
   */
  BillingTagsSource?: BillingTagsSource | string;

  /**
   * The time, in Unix epoch format in seconds, when the job got created.
   */
  CreatedAt?: Date;

  /**
   * A job's phase can be PROBING, TRANSCODING OR UPLOADING
   */
  CurrentPhase?: JobPhase | string;

  /**
   * Error code for the job
   */
  ErrorCode?: number;

  /**
   * Error message of Job
   */
  ErrorMessage?: string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources
   */
  Id?: string;

  /**
   * An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.
   */
  JobPercentComplete?: number;

  /**
   * The job template that the job is created from, if it is created from a job template.
   */
  JobTemplate?: string;

  /**
   * Provides messages from the service about jobs that you have already successfully submitted.
   */
  Messages?: JobMessages;

  /**
   * List of output group details
   */
  OutputGroupDetails?: OutputGroupDetail[];

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Queue?: string;

  /**
   * The job's queue hopping history.
   */
  QueueTransitions?: QueueTransition[];

  /**
   * The number of times that the service automatically attempted to process your job after encountering an error.
   */
  RetryCount?: number;

  /**
   * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   */
  Role: string | undefined;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: JobSettings | undefined;

  /**
   * Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   */
  SimulateReservedQueue?: SimulateReservedQueue | string;

  /**
   * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus | string;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
   */
  Timing?: Timing;

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: { [key: string]: string };
}

export namespace Job {
  /**
   * @internal
   */
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
   * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
   */
  Esam?: EsamSettings;

  /**
   * Hexadecimal value as per EIA-608 Line 21 Data Services, section 9.5.1.5 05h Content Advisory.
   */
  ExtendedDataServices?: ExtendedDataServices;

  /**
   * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template.
   */
  Inputs?: InputTemplate[];

  /**
   * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
   */
  KantarWatermark?: KantarWatermarkSettings;

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that  MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to  specifying these values, you also need to set up your cloud TIC server. These settings apply to  every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]
   */
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in any HLS outputs. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;
}

export namespace JobTemplateSettings {
  /**
   * @internal
   */
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
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * An optional category you create to organize your job templates.
   */
  Category?: string;

  /**
   * The timestamp in epoch seconds for Job template creation.
   */
  CreatedAt?: Date;

  /**
   * An optional description you create for each job template.
   */
  Description?: string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * The timestamp in epoch seconds when the Job template was last updated.
   */
  LastUpdated?: Date;

  /**
   * A name you create for each job template. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user.
   */
  Type?: Type | string;
}

export namespace JobTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobTemplate): any => ({
    ...obj,
  });
}

/**
 * Settings for preset
 */
export interface PresetSettings {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: AudioDescription[];

  /**
   * This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.
   */
  CaptionDescriptions?: CaptionDescriptionPreset[];

  /**
   * Container specific settings.
   */
  ContainerSettings?: ContainerSettings;

  /**
   * VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.
   */
  VideoDescription?: VideoDescription;
}

export namespace PresetSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PresetSettings): any => ({
    ...obj,
  });
}

/**
 * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
 */
export interface Preset {
  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * An optional category you create to organize your presets.
   */
  Category?: string;

  /**
   * The timestamp in epoch seconds for preset creation.
   */
  CreatedAt?: Date;

  /**
   * An optional description you create for each preset.
   */
  Description?: string;

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
   * A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user.
   */
  Type?: Type | string;
}

export namespace Preset {
  /**
   * @internal
   */
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
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment?: Commitment | string;

  /**
   * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
   */
  ExpiresAt?: Date;

  /**
   * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
   */
  PurchasedAt?: Date;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.
   */
  RenewalType?: RenewalType | string;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.
   */
  ReservedSlots?: number;

  /**
   * Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.
   */
  Status?: ReservationPlanStatus | string;
}

export namespace ReservationPlan {
  /**
   * @internal
   */
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
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * The timestamp in epoch seconds for when you created the queue.
   */
  CreatedAt?: Date;

  /**
   * An optional description that you create for each queue.
   */
  Description?: string;

  /**
   * The timestamp in epoch seconds for when you most recently updated the queue.
   */
  LastUpdated?: Date;

  /**
   * A name that you create for each queue. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
   */
  PricingPlan?: PricingPlan | string;

  /**
   * The estimated number of jobs with a PROGRESSING status.
   */
  ProgressingJobsCount?: number;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlan?: ReservationPlan;

  /**
   * Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;

  /**
   * The estimated number of jobs with a SUBMITTED status.
   */
  SubmittedJobsCount?: number;

  /**
   * Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.
   */
  Type?: Type | string;
}

export namespace Queue {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateCertificateRequest): any => ({
    ...obj,
  });
}

export interface AssociateCertificateResponse {}

export namespace AssociateCertificateResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj,
  });
}

export interface CancelJobResponse {}

export namespace CancelJobResponse {
  /**
   * @internal
   */
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
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   */
  BillingTagsSource?: BillingTagsSource | string;

  /**
   * Optional. Idempotency token for CreateJob operation.
   */
  ClientRequestToken?: string;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.
   */
  JobTemplate?: string;

  /**
   * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   */
  Queue?: string;

  /**
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   */
  Role: string | undefined;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: JobSettings | undefined;

  /**
   * Optional. Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   */
  SimulateReservedQueue?: SimulateReservedQueue | string;

  /**
   * Optional. Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.
   */
  Tags?: { [key: string]: string };

  /**
   * Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.
   */
  UserMetadata?: { [key: string]: string };
}

export namespace CreateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
  });
}

export interface CreateJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

export namespace CreateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj,
  });
}

export interface CreateJobTemplateRequest {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Optional. A category for the job template you are creating
   */
  Category?: string;

  /**
   * Optional. A description of the job template you are creating.
   */
  Description?: string;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * The name of the job template you are creating.
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };
}

export namespace CreateJobTemplateRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface CreatePresetRequest {
  /**
   * Optional. A category for the preset you are creating.
   */
  Category?: string;

  /**
   * Optional. A description of the preset you are creating.
   */
  Description?: string;

  /**
   * The name of the preset you are creating.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings: PresetSettings | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };
}

export namespace CreatePresetRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePresetResponse): any => ({
    ...obj,
  });
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlanSettings {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment: Commitment | string | undefined;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
   */
  RenewalType: RenewalType | string | undefined;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
   */
  ReservedSlots: number | undefined;
}

export namespace ReservationPlanSettings {
  /**
   * @internal
   */
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
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
   */
  PricingPlan?: PricingPlan | string;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.
   */
  Status?: QueueStatus | string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };
}

export namespace CreateQueueRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobTemplateResponse {}

export namespace DeleteJobTemplateResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePresetRequest): any => ({
    ...obj,
  });
}

export interface DeletePresetResponse {}

export namespace DeletePresetResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueueRequest): any => ({
    ...obj,
  });
}

export interface DeleteQueueResponse {}

export namespace DeleteQueueResponse {
  /**
   * @internal
   */
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
   * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
   */
  Mode?: DescribeEndpointsMode | string;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of endpoints.
   */
  NextToken?: string;
}

export namespace DescribeEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsResponse {
  /**
   * List of endpoints
   */
  Endpoints?: Endpoint[];

  /**
   * Use this string to request the next batch of endpoints.
   */
  NextToken?: string;
}

export namespace DescribeEndpointsResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateCertificateRequest): any => ({
    ...obj,
  });
}

export interface DisassociateCertificateResponse {}

export namespace DisassociateCertificateResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
}

export interface GetJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

export namespace GetJobResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;

  /**
   * Optional. Provide a queue name to get back only jobs from that queue.
   */
  Queue?: string;

  /**
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus | string;
}

export namespace ListJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * List of jobs
   */
  Jobs?: Job[];

  /**
   * Use this string to request the next batch of jobs.
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListJobTemplatesRequest {
  /**
   * Optionally, specify a job template category to limit responses to only job templates from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: JobTemplateListBy | string;

  /**
   * Optional. Number of job templates, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of job templates.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListJobTemplatesRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * Optionally, specify a preset category to limit responses to only presets from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: PresetListBy | string;

  /**
   * Optional. Number of presets, up to twenty, that will be returned at one time
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListPresetsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * Optional. Number of queues, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuesRequest): any => ({
    ...obj,
  });
}

export interface ListQueuesResponse {
  /**
   * Use this string to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * List of queues.
   */
  Queues?: Queue[];
}

export namespace ListQueuesResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateJobTemplateRequest {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * The new category for the job template, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the job template, if you are changing it.
   */
  Description?: string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * The name of the job template you are modifying
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * The new queue for the job template, if you are changing it.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings?: JobTemplateSettings;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;
}

export namespace UpdateJobTemplateRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdatePresetRequest {
  /**
   * The new category for the preset, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the preset, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the preset you are modifying.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings?: PresetSettings;
}

export namespace UpdatePresetRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * The name of the queue that you are modifying.
   */
  Name: string | undefined;

  /**
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;
}

export namespace UpdateQueueRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueResponse): any => ({
    ...obj,
  });
}
