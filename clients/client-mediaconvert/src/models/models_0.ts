// smithy-typescript generated code
import {
  AacAudioDescriptionBroadcasterMix,
  AacCodecProfile,
  AacCodingMode,
  AacLoudnessMeasurementMode,
  AacRateControlMode,
  AacRawFormat,
  AacSpecification,
  AacVbrQuality,
  Ac3BitstreamMode,
  Ac3CodingMode,
  Ac3DynamicRangeCompressionLine,
  Ac3DynamicRangeCompressionProfile,
  Ac3DynamicRangeCompressionRf,
  Ac3LfeFilter,
  Ac3MetadataControl,
  AccelerationMode,
  AccelerationStatus,
  AdvancedInputFilter,
  AdvancedInputFilterAddTexture,
  AdvancedInputFilterSharpen,
  AfdSignaling,
  AlphaBehavior,
  AncillaryConvert608To708,
  AncillaryTerminateCaptions,
  AntiAlias,
  AudioChannelTag,
  AudioCodec,
  AudioDefaultSelection,
  AudioDurationCorrection,
  AudioLanguageCodeControl,
  AudioNormalizationAlgorithm,
  AudioNormalizationAlgorithmControl,
  AudioNormalizationLoudnessLogging,
  AudioNormalizationPeakCalculation,
  AudioSelectorType,
  AudioTypeControl,
  Av1AdaptiveQuantization,
  Av1BitDepth,
  Av1FilmGrainSynthesis,
  Av1FramerateControl,
  Av1FramerateConversionAlgorithm,
  Av1RateControlMode,
  Av1SpatialAdaptiveQuantization,
  AvcIntraClass,
  AvcIntraFramerateControl,
  AvcIntraFramerateConversionAlgorithm,
  AvcIntraInterlaceMode,
  AvcIntraScanTypeConversionMode,
  AvcIntraSlowPal,
  AvcIntraTelecine,
  AvcIntraUhdQualityTuningLevel,
  BandwidthReductionFilterSharpening,
  BandwidthReductionFilterStrength,
  BillingTagsSource,
  BurninSubtitleAlignment,
  BurninSubtitleApplyFontColor,
  BurninSubtitleBackgroundColor,
  BurninSubtitleFallbackFont,
  BurninSubtitleFontColor,
  BurninSubtitleOutlineColor,
  BurninSubtitleShadowColor,
  BurnInSubtitleStylePassthrough,
  BurninSubtitleTeletextSpacing,
  CaptionDestinationType,
  CaptionSourceByteRateLimit,
  CaptionSourceConvertPaintOnToPopOn,
  CaptionSourceType,
  CaptionSourceUpconvertSTLToTeletext,
  ChromaPositionMode,
  CmafClientCache,
  CmafCodecSpecification,
  CmafEncryptionType,
  CmafImageBasedTrickPlay,
  CmafInitializationVectorInManifest,
  CmafIntervalCadence,
  CmafKeyProviderType,
  CmafManifestCompression,
  CmafManifestDurationFormat,
  CmafMpdManifestBandwidthType,
  CmafMpdProfile,
  CmafPtsOffsetHandlingForBFrames,
  CmafSegmentControl,
  CmafSegmentLengthControl,
  CmafStreamInfResolution,
  CmafTargetDurationCompatibilityMode,
  CmafVideoCompositionOffsets,
  CmafWriteDASHManifest,
  CmafWriteHLSManifest,
  CmafWriteSegmentTimelineInRepresentation,
  CmfcAudioDuration,
  CmfcAudioTrackType,
  CmfcC2paManifest,
  CmfcDescriptiveVideoServiceFlag,
  CmfcIFrameOnlyManifest,
  CmfcKlvMetadata,
  CmfcManifestMetadataSignaling,
  CmfcScte35Esam,
  CmfcScte35Source,
  CmfcTimedMetadata,
  CmfcTimedMetadataBoxVersion,
  Codec,
  ColorMetadata,
  ColorPrimaries,
  ColorSpace,
  ColorSpaceConversion,
  ColorSpaceUsage,
  Commitment,
  ContainerType,
  CopyProtectionAction,
  DashIsoGroupAudioChannelConfigSchemeIdUri,
  DashIsoHbbtvCompliance,
  DashIsoImageBasedTrickPlay,
  DashIsoIntervalCadence,
  DashIsoMpdManifestBandwidthType,
  DashIsoMpdProfile,
  DashIsoPlaybackDeviceCompatibility,
  DashIsoPtsOffsetHandlingForBFrames,
  DashIsoSegmentControl,
  DashIsoSegmentLengthControl,
  DashIsoVideoCompositionOffsets,
  DashIsoWriteSegmentTimelineInRepresentation,
  DashManifestStyle,
  DecryptionMode,
  DeinterlaceAlgorithm,
  DeinterlacerControl,
  DeinterlacerMode,
  DescribeEndpointsMode,
  DolbyVisionLevel6Mode,
  DolbyVisionMapping,
  DolbyVisionProfile,
  DropFrameTimecode,
  DvbddsHandling,
  DvbSubSubtitleFallbackFont,
  DvbSubtitleAlignment,
  DvbSubtitleApplyFontColor,
  DvbSubtitleBackgroundColor,
  DvbSubtitleFontColor,
  DvbSubtitleOutlineColor,
  DvbSubtitleShadowColor,
  DvbSubtitleStylePassthrough,
  DvbSubtitleTeletextSpacing,
  DvbSubtitlingType,
  DynamicAudioSelectorType,
  Eac3AtmosBitstreamMode,
  Eac3AtmosCodingMode,
  Eac3AtmosDialogueIntelligence,
  Eac3AtmosDownmixControl,
  Eac3AtmosDynamicRangeCompressionLine,
  Eac3AtmosDynamicRangeCompressionRf,
  Eac3AtmosDynamicRangeControl,
  Eac3AtmosMeteringMode,
  Eac3AtmosStereoDownmix,
  Eac3AtmosSurroundExMode,
  Eac3AttenuationControl,
  Eac3BitstreamMode,
  Eac3CodingMode,
  Eac3DcFilter,
  Eac3DynamicRangeCompressionLine,
  Eac3DynamicRangeCompressionRf,
  Eac3LfeControl,
  Eac3LfeFilter,
  Eac3MetadataControl,
  Eac3PassthroughControl,
  Eac3PhaseControl,
  Eac3StereoDownmix,
  Eac3SurroundExMode,
  Eac3SurroundMode,
  EmbeddedConvert608To708,
  EmbeddedTerminateCaptions,
  EmbeddedTimecodeOverride,
  F4vMoovPlacement,
  FileSourceConvert608To708,
  FileSourceTimeDeltaUnits,
  FontScript,
  Format,
  FrameControl,
  FrameMetricType,
  GifFramerateControl,
  GifFramerateConversionAlgorithm,
  H264AdaptiveQuantization,
  H264CodecLevel,
  H264CodecProfile,
  H264DynamicSubGop,
  H264EndOfStreamMarkers,
  H264EntropyEncoding,
  H264FieldEncoding,
  H264FlickerAdaptiveQuantization,
  H264FramerateControl,
  H264FramerateConversionAlgorithm,
  H264GopBReference,
  H264GopSizeUnits,
  H264InterlaceMode,
  H264ParControl,
  H264QualityTuningLevel,
  H264RateControlMode,
  H264RepeatPps,
  H264SaliencyAwareEncoding,
  H264ScanTypeConversionMode,
  H264SceneChangeDetect,
  H264SlowPal,
  H264SpatialAdaptiveQuantization,
  H264Syntax,
  H264Telecine,
  H264TemporalAdaptiveQuantization,
  H264UnregisteredSeiTimecode,
  H264WriteMp4PackagingType,
  H265AdaptiveQuantization,
  H265AlternateTransferFunctionSei,
  H265CodecLevel,
  H265CodecProfile,
  H265Deblocking,
  H265DynamicSubGop,
  H265EndOfStreamMarkers,
  H265FlickerAdaptiveQuantization,
  H265FramerateControl,
  H265FramerateConversionAlgorithm,
  H265GopBReference,
  H265GopSizeUnits,
  H265InterlaceMode,
  H265MvOverPictureBoundaries,
  H265MvTemporalPredictor,
  H265ParControl,
  H265QualityTuningLevel,
  H265RateControlMode,
  H265SampleAdaptiveOffsetFilterMode,
  H265ScanTypeConversionMode,
  H265SceneChangeDetect,
  H265SlowPal,
  H265SpatialAdaptiveQuantization,
  H265Telecine,
  H265TemporalAdaptiveQuantization,
  H265TemporalIds,
  H265TilePadding,
  H265Tiles,
  H265TreeBlockSize,
  H265UnregisteredSeiTimecode,
  H265WriteMp4PackagingType,
  HDRToSDRToneMapper,
  HlsAdMarkers,
  HlsAudioOnlyContainer,
  HlsAudioOnlyHeader,
  HlsAudioTrackType,
  HlsCaptionLanguageSetting,
  HlsCaptionSegmentLengthControl,
  HlsClientCache,
  HlsCodecSpecification,
  HlsDescriptiveVideoServiceFlag,
  HlsDirectoryStructure,
  HlsEncryptionType,
  HlsIFrameOnlyManifest,
  HlsImageBasedTrickPlay,
  HlsInitializationVectorInManifest,
  HlsIntervalCadence,
  HlsKeyProviderType,
  HlsManifestCompression,
  HlsManifestDurationFormat,
  HlsOfflineEncrypted,
  HlsOutputSelection,
  HlsProgramDateTime,
  HlsProgressiveWriteHlsManifest,
  HlsSegmentControl,
  HlsSegmentLengthControl,
  HlsStreamInfResolution,
  HlsTargetDurationCompatibilityMode,
  HlsTimedMetadataId3Frame,
  ImscAccessibilitySubs,
  ImscStylePassthrough,
  InputDeblockFilter,
  InputDenoiseFilter,
  InputFilterEnable,
  InputPolicy,
  InputPsiControl,
  InputRotate,
  InputSampleRange,
  InputScanType,
  InputTimecodeSource,
  JobPhase,
  JobsQueryFilterKey,
  JobsQueryStatus,
  JobStatus,
  JobTemplateListBy,
  LanguageCode,
  M2tsAudioBufferModel,
  M2tsAudioDuration,
  M2tsBufferModel,
  M2tsDataPtsControl,
  M2tsEbpAudioInterval,
  M2tsEbpPlacement,
  M2tsEsRateInPes,
  M2tsForceTsVideoEbpOrder,
  M2tsKlvMetadata,
  M2tsNielsenId3,
  M2tsPcrControl,
  M2tsPreventBufferUnderflow,
  M2tsRateMode,
  M2tsScte35Source,
  M2tsSegmentationMarkers,
  M2tsSegmentationStyle,
  M3u8AudioDuration,
  M3u8DataPtsControl,
  M3u8NielsenId3,
  M3u8PcrControl,
  M3u8Scte35Source,
  MatrixCoefficients,
  MotionImageInsertionMode,
  MotionImagePlayback,
  MovClapAtom,
  MovCslgAtom,
  MovMpeg2FourCCControl,
  MovPaddingControl,
  MovReference,
  Mp2AudioDescriptionMix,
  Mp3RateControlMode,
  Mp4C2paManifest,
  Mp4CslgAtom,
  Mp4FreeSpaceBox,
  Mp4MoovPlacement,
  MpdAccessibilityCaptionHints,
  MpdAudioDuration,
  MpdC2paManifest,
  MpdCaptionContainerType,
  MpdKlvMetadata,
  MpdManifestMetadataSignaling,
  MpdScte35Esam,
  MpdScte35Source,
  MpdTimedMetadata,
  MpdTimedMetadataBoxVersion,
  Mpeg2AdaptiveQuantization,
  Mpeg2CodecLevel,
  Mpeg2CodecProfile,
  Mpeg2DynamicSubGop,
  Mpeg2FramerateControl,
  Mpeg2FramerateConversionAlgorithm,
  Mpeg2GopSizeUnits,
  Mpeg2InterlaceMode,
  Mpeg2IntraDcPrecision,
  Mpeg2ParControl,
  Mpeg2QualityTuningLevel,
  Mpeg2RateControlMode,
  Mpeg2ScanTypeConversionMode,
  Mpeg2SceneChangeDetect,
  Mpeg2SlowPal,
  Mpeg2SpatialAdaptiveQuantization,
  Mpeg2Syntax,
  Mpeg2Telecine,
  Mpeg2TemporalAdaptiveQuantization,
  MsSmoothAudioDeduplication,
  MsSmoothFragmentLengthControl,
  MsSmoothManifestEncoding,
  MxfAfdSignaling,
  MxfProfile,
  MxfXavcDurationMode,
  NielsenActiveWatermarkProcessType,
  NielsenSourceWatermarkStatusType,
  NielsenUniqueTicPerAudioTrackType,
  NoiseFilterPostTemporalSharpening,
  NoiseFilterPostTemporalSharpeningStrength,
  NoiseReducerFilter,
  Order,
  OutputGroupType,
  OutputSdt,
  PadVideo,
  PresetListBy,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  PricingPlan,
  ProresChromaSampling,
  ProresCodecProfile,
  ProresFramerateControl,
  ProresFramerateConversionAlgorithm,
  ProresInterlaceMode,
  ProresParControl,
  ProresScanTypeConversionMode,
  ProresSlowPal,
  ProresTelecine,
  QueueListBy,
  QueueStatus,
  RemoveRubyReserveAttributes,
  RenewalType,
  RequiredFlag,
  ReservationPlanStatus,
  RespondToAfd,
  RuleType,
  S3ObjectCannedAcl,
  S3ServerSideEncryptionType,
  S3StorageClass,
  SampleRangeConversion,
  ScalingBehavior,
  SccDestinationFramerate,
  ShareStatus,
  SimulateReservedQueue,
  SlowPalPitchCorrection,
  SrtStylePassthrough,
  StatusUpdateInterval,
  TamsGapHandling,
  TeletextPageType,
  TimecodeBurninPosition,
  TimecodeSource,
  TimecodeTrack,
  TimedMetadata,
  TrackType,
  TransferCharacteristics,
  TsPtsOffset,
  TtmlStylePassthrough,
  Type,
  UncompressedFourcc,
  UncompressedFramerateControl,
  UncompressedFramerateConversionAlgorithm,
  UncompressedInterlaceMode,
  UncompressedScanTypeConversionMode,
  UncompressedSlowPal,
  UncompressedTelecine,
  Vc3Class,
  Vc3FramerateControl,
  Vc3FramerateConversionAlgorithm,
  Vc3InterlaceMode,
  Vc3ScanTypeConversionMode,
  Vc3SlowPal,
  Vc3Telecine,
  VchipAction,
  VideoCodec,
  VideoOverlayPlayBackMode,
  VideoOverlayUnit,
  VideoSelectorMode,
  VideoSelectorType,
  VideoTimecodeInsertion,
  Vp8FramerateControl,
  Vp8FramerateConversionAlgorithm,
  Vp8ParControl,
  Vp8QualityTuningLevel,
  Vp8RateControlMode,
  Vp9FramerateControl,
  Vp9FramerateConversionAlgorithm,
  Vp9ParControl,
  Vp9QualityTuningLevel,
  Vp9RateControlMode,
  WatermarkingStrength,
  WavFormat,
  WebvttAccessibilitySubs,
  WebvttStylePassthrough,
  Xavc4kIntraCbgProfileClass,
  Xavc4kIntraVbrProfileClass,
  Xavc4kProfileBitrateClass,
  Xavc4kProfileCodecProfile,
  Xavc4kProfileQualityTuningLevel,
  XavcAdaptiveQuantization,
  XavcEntropyEncoding,
  XavcFlickerAdaptiveQuantization,
  XavcFramerateControl,
  XavcFramerateConversionAlgorithm,
  XavcGopBReference,
  XavcHdIntraCbgProfileClass,
  XavcHdProfileBitrateClass,
  XavcHdProfileQualityTuningLevel,
  XavcHdProfileTelecine,
  XavcInterlaceMode,
  XavcProfile,
  XavcSlowPal,
  XavcSpatialAdaptiveQuantization,
  XavcTemporalAdaptiveQuantization,
} from "./enums";

/**
 * Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.
 * @public
 */
export interface AllowedRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Set to ENABLED to force a rendition to be included.
   * @public
   */
  Required?: RequiredFlag | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use Audio layout tagging, your output must be in a QuickTime (MOV) container and your audio codec must be AAC, WAV, or AIFF.
 * @public
 */
export interface AudioChannelTaggingSettings {
  /**
   * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. Enter channel layout tags in the same order as your output's audio channel order. For example, if your output audio track has a left and a right channel, enter Left (L) for the first channel and Right (R) for the second. If your output has multiple single-channel audio tracks, enter a single channel layout tag for each track.
   * @public
   */
  ChannelTag?: AudioChannelTag | undefined;

  /**
   * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. Enter channel layout tags in the same order as your output's audio channel order. For example, if your output audio track has a left and a right channel, enter Left (L) for the first channel and Right (R) for the second. If your output has multiple single-channel audio tracks, enter a single channel layout tag for each track.
   * @public
   */
  ChannelTags?: AudioChannelTag[] | undefined;
}

/**
 * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
 * @public
 */
export interface AudioNormalizationSettings {
  /**
   * Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.
   * @public
   */
  Algorithm?: AudioNormalizationAlgorithm | undefined;

  /**
   * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
   * @public
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | undefined;

  /**
   * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected.
   * @public
   */
  CorrectionGateLevel?: number | undefined;

  /**
   * If set to LOG, log each output's audio track loudness to a CSV file.
   * @public
   */
  LoudnessLogging?: AudioNormalizationLoudnessLogging | undefined;

  /**
   * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
   * @public
   */
  PeakCalculation?: AudioNormalizationPeakCalculation | undefined;

  /**
   * When you use Audio normalization, optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm. If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.
   * @public
   */
  TargetLkfs?: number | undefined;

  /**
   * Specify the True-peak limiter threshold in decibels relative to full scale (dBFS). The peak inter-audio sample loudness in your output will be limited to the value that you specify, without affecting the overall target LKFS. Enter a value from 0 to -8. Leave blank to use the default value 0.
   * @public
   */
  TruePeakLimiterThreshold?: number | undefined;
}

/**
 * Settings for audio pitch correction during framerate conversion.
 * @public
 */
export interface AudioPitchCorrectionSettings {
  /**
   * Use Slow PAL pitch correction to compensate for audio pitch changes during slow PAL frame rate conversion. This setting only applies when Slow PAL is enabled in your output video codec settings. To automatically apply audio pitch correction: Choose Enabled. MediaConvert automatically applies a pitch correction to your output to match the original content's audio pitch. To not apply audio pitch correction: Keep the default value, Disabled.
   * @public
   */
  SlowPalPitchCorrection?: SlowPalPitchCorrection | undefined;
}

/**
 * Required when you set Codec to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality. In CBR mode, you use the setting Bitrate. Defaults and valid values depend on the rate control mode.
 * @public
 */
export interface AacSettings {
  /**
   * Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.
   * @public
   */
  AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix | undefined;

  /**
   * Specify the average bitrate in bits per second. The set of valid values for this setting is: 6000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000. The value you set is also constrained by the values that you choose for Profile, Bitrate control mode, and Sample rate. Default values depend on Bitrate control mode and Profile.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the AAC profile. For the widest player compatibility and where higher bitrates are acceptable: Keep the default profile, LC (AAC-LC) For improved audio performance at lower bitrates: Choose HEV1 or HEV2. HEV1 (AAC-HE v1) adds spectral band replication to improve speech audio at low bitrates. HEV2 (AAC-HE v2) adds parametric stereo, which optimizes for encoding stereo audio at very low bitrates. For improved audio quality at lower bitrates, adaptive audio bitrate switching, and loudness control: Choose XHE.
   * @public
   */
  CodecProfile?: AacCodecProfile | undefined;

  /**
   * The Coding mode that you specify determines the number of audio channels and the audio channel layout metadata in your AAC output. Valid coding modes depend on the Rate control mode and Profile that you select. The following list shows the number of audio channels and channel layout for each coding mode. * 1.0 Audio Description (Receiver Mix): One channel, C. Includes audio description data from your stereo input. For more information see ETSI TS 101 154 Annex E. * 1.0 Mono: One channel, C. * 2.0 Stereo: Two channels, L, R. * 5.1 Surround: Six channels, C, L, R, Ls, Rs, LFE.
   * @public
   */
  CodingMode?: AacCodingMode | undefined;

  /**
   * Choose the loudness measurement mode for your audio content. For music or advertisements: We recommend that you keep the default value, Program. For speech or other content: We recommend that you choose Anchor. When you do, MediaConvert optimizes the loudness of your output for clarify by applying speech gates.
   * @public
   */
  LoudnessMeasurementMode?: AacLoudnessMeasurementMode | undefined;

  /**
   * Specify the RAP (Random Access Point) interval for your xHE-AAC audio output. A RAP allows a decoder to decode audio data mid-stream, without the need to reference previous audio frames, and perform adaptive audio bitrate switching. To specify the RAP interval: Enter an integer from 2000 to 30000, in milliseconds. Smaller values allow for better seeking and more frequent stream switching, while large values improve compression efficiency. To have MediaConvert automatically determine the RAP interval: Leave blank.
   * @public
   */
  RapInterval?: number | undefined;

  /**
   * Specify the AAC rate control mode. For a constant bitrate: Choose CBR. Your AAC output bitrate will be equal to the value that you choose for Bitrate. For a variable bitrate: Choose VBR. Your AAC output bitrate will vary according to your audio content and the value that you choose for Bitrate quality.
   * @public
   */
  RateControlMode?: AacRateControlMode | undefined;

  /**
   * Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.
   * @public
   */
  RawFormat?: AacRawFormat | undefined;

  /**
   * Specify the AAC sample rate in samples per second (Hz). Valid sample rates depend on the AAC profile and Coding mode that you select. For a list of supported sample rates, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/aac-support.html
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   * @public
   */
  Specification?: AacSpecification | undefined;

  /**
   * Specify the xHE-AAC loudness target. Enter an integer from 6 to 16, representing "loudness units". For more information, see the following specification: Supplementary information for R 128 EBU Tech 3342-2023.
   * @public
   */
  TargetLoudnessRange?: number | undefined;

  /**
   * Specify the quality of your variable bitrate (VBR) AAC audio. For a list of approximate VBR bitrates, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/aac-support.html#aac_vbr
   * @public
   */
  VbrQuality?: AacVbrQuality | undefined;
}

/**
 * Required when you set Codec to the value AC3.
 * @public
 */
export interface Ac3Settings {
  /**
   * Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 64000. Maximum: 128000. Valid bitrates for coding mode 1/1: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 3/2 with FLE: Default: 384000. Minimum: 384000. Maximum: 640000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   * @public
   */
  BitstreamMode?: Ac3BitstreamMode | undefined;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Ac3CodingMode | undefined;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionLine?: Ac3DynamicRangeCompressionLine | undefined;

  /**
   * When you want to add Dolby dynamic range compression (DRC) signaling to your output stream, we recommend that you use the mode-specific settings instead of Dynamic range compression profile. The mode-specific settings are Dynamic range compression profile, line mode and Dynamic range compression profile, RF mode. Note that when you specify values for all three settings, MediaConvert ignores the value of this setting in favor of the mode-specific settings. If you do use this setting instead of the mode-specific settings, choose None to leave out DRC signaling. Keep the default Film standard to set the profile to Dolby's film standard profile for all operating modes.
   * @public
   */
  DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionRf?: Ac3DynamicRangeCompressionRf | undefined;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   * @public
   */
  LfeFilter?: Ac3LfeFilter | undefined;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Ac3MetadataControl | undefined;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec to the value AIFF.
 * @public
 */
export interface AiffSettings {
  /**
   * Specify Bit depth, in bits per sample, to choose the encoding quality for this audio track.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec to the value EAC3_ATMOS.
 * @public
 */
export interface Eac3AtmosSettings {
  /**
   * Specify the average bitrate for this output in bits per second. Valid values: 384k, 448k, 576k, 640k, 768k, 1024k Default value: 448k Note that MediaConvert supports 384k only with channel-based immersive (CBI) 7.1.4 and 5.1.4 inputs. For CBI 9.1.6 and other input types, MediaConvert automatically increases your output bitrate to 448k.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   * @public
   */
  BitstreamMode?: Eac3AtmosBitstreamMode | undefined;

  /**
   * The coding mode for Dolby Digital Plus JOC (Atmos).
   * @public
   */
  CodingMode?: Eac3AtmosCodingMode | undefined;

  /**
   * Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.
   * @public
   */
  DialogueIntelligence?: Eac3AtmosDialogueIntelligence | undefined;

  /**
   * Specify whether MediaConvert should use any downmix metadata from your input file. Keep the default value, Custom to provide downmix values in your job settings. Choose Follow source to use the metadata from your input. Related settings--Use these settings to specify your downmix values: Left only/Right only surround, Left total/Right total surround, Left total/Right total center, Left only/Right only center, and Stereo downmix. When you keep Custom for Downmix control and you don't specify values for the related settings, MediaConvert uses default values for those settings.
   * @public
   */
  DownmixControl?: Eac3AtmosDownmixControl | undefined;

  /**
   * Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the line operating mode. Default value: Film light Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom for the setting Dynamic range control. Otherwise, MediaConvert ignores Dynamic range compression line. For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine | undefined;

  /**
   * Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the RF operating mode. Default value: Film light Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom for the setting Dynamic range control. Otherwise, MediaConvert ignores Dynamic range compression RF. For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionRf | undefined;

  /**
   * Specify whether MediaConvert should use any dynamic range control metadata from your input file. Keep the default value, Custom, to provide dynamic range control values in your job settings. Choose Follow source to use the metadata from your input. Related settings--Use these settings to specify your dynamic range control values: Dynamic range compression line and Dynamic range compression RF. When you keep the value Custom for Dynamic range control and you don't specify values for the related settings, MediaConvert uses default values for those settings.
   * @public
   */
  DynamicRangeControl?: Eac3AtmosDynamicRangeControl | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. Default value: -3 dB. Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Left only/Right only center.
   * @public
   */
  LoRoCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only. MediaConvert uses this value for downmixing. Default value: -3 dB. Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Left only/Right only surround.
   * @public
   */
  LoRoSurroundMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. Default value: -3 dB Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Left total/Right total center.
   * @public
   */
  LtRtCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. Default value: -3 dB Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix. Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, the service ignores Left total/Right total surround.
   * @public
   */
  LtRtSurroundMixLevel?: number | undefined;

  /**
   * Choose how the service meters the loudness of your audio.
   * @public
   */
  MeteringMode?: Eac3AtmosMeteringMode | undefined;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Specify the percentage of audio content, from 0% to 100%, that must be speech in order for the encoder to use the measured speech loudness as the overall program loudness. Default value: 15%
   * @public
   */
  SpeechThreshold?: number | undefined;

  /**
   * Choose how the service does stereo downmixing. Default value: Not indicated Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Stereo downmix.
   * @public
   */
  StereoDownmix?: Eac3AtmosStereoDownmix | undefined;

  /**
   * Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.
   * @public
   */
  SurroundExMode?: Eac3AtmosSurroundExMode | undefined;
}

/**
 * Required when you set Codec to the value EAC3.
 * @public
 */
export interface Eac3Settings {
  /**
   * If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  AttenuationControl?: Eac3AttenuationControl | undefined;

  /**
   * Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 32000. Maximum: 3024000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 96000. Maximum: 3024000. Valid bitrates for coding mode 3/2: Default: 384000. Minimum: 192000. Maximum: 3024000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   * @public
   */
  BitstreamMode?: Eac3BitstreamMode | undefined;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Eac3CodingMode | undefined;

  /**
   * Activates a DC highpass filter for all input channels.
   * @public
   */
  DcFilter?: Eac3DcFilter | undefined;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine | undefined;

  /**
   * Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.
   * @public
   */
  DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf | undefined;

  /**
   * When encoding 3/2 audio, controls whether the LFE channel is enabled
   * @public
   */
  LfeControl?: Eac3LfeControl | undefined;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   * @public
   */
  LfeFilter?: Eac3LfeFilter | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only center mix. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left only/Right only center.
   * @public
   */
  LoRoCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left only/Right only surround.
   * @public
   */
  LoRoSurroundMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total center mix. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left total/Right total center.
   * @public
   */
  LtRtCenterMixLevel?: number | undefined;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total surround mix. MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix. Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Left total/Right total surround.
   * @public
   */
  LtRtSurroundMixLevel?: number | undefined;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Eac3MetadataControl | undefined;

  /**
   * When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   * @public
   */
  PassthroughControl?: Eac3PassthroughControl | undefined;

  /**
   * Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  PhaseControl?: Eac3PhaseControl | undefined;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Stereo downmix.
   * @public
   */
  StereoDownmix?: Eac3StereoDownmix | undefined;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   * @public
   */
  SurroundExMode?: Eac3SurroundExMode | undefined;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   * @public
   */
  SurroundMode?: Eac3SurroundMode | undefined;
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value FLAC.
 * @public
 */
export interface FlacSettings {
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are between 1 and 8.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec to the value MP2.
 * @public
 */
export interface Mp2Settings {
  /**
   * Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and FollowInputAudioType. Choose NONE when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.
   * @public
   */
  AudioDescriptionMix?: Mp2AudioDescriptionMix | undefined;

  /**
   * Specify the average bitrate in bits per second.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Set Channels to specify the number of channels in this output audio track. Choosing Mono in will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
 * @public
 */
export interface Mp3Settings {
  /**
   * Specify the average bitrate in bits per second.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).
   * @public
   */
  RateControlMode?: Mp3RateControlMode | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Required when you set Bitrate control mode to VBR. Specify the audio quality of this MP3 output from 0 (highest quality) to 9 (lowest quality).
   * @public
   */
  VbrQuality?: number | undefined;
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
 * @public
 */
export interface OpusSettings {
  /**
   * Optional. Specify the average bitrate in bits per second. Valid values are multiples of 8000, from 32000 through 192000. The default value is 96000, which we recommend for quality and bandwidth.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Optional. Sample rate in Hz. Valid values are 16000, 24000, and 48000. The default value is 48000.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
 * @public
 */
export interface VorbisSettings {
  /**
   * Optional. Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2. The default value is 2.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Optional. Specify the audio sample rate in Hz. Valid values are 22050, 32000, 44100, and 48000. The default value is 48000.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Optional. Specify the variable audio quality of this Vorbis output from -1 (lowest quality, ~45 kbit/s) to 10 (highest quality, ~500 kbit/s). The default value is 4 (~128 kbit/s). Values 5 and 6 are approximately 160 and 192 kbit/s, respectively.
   * @public
   */
  VbrQuality?: number | undefined;
}

/**
 * Required when you set Codec to the value WAV.
 * @public
 */
export interface WavSettings {
  /**
   * Specify Bit depth, in bits per sample, to choose the encoding quality for this audio track.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Specify the file format for your wave audio output. To use a RIFF wave format: Keep the default value, RIFF. If your output audio is likely to exceed 4GB in file size, or if you otherwise need the extended support of the RF64 format: Choose RF64. If your player only supports the extensible wave format: Choose Extensible.
   * @public
   */
  Format?: WavFormat | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.
 * @public
 */
export interface AudioCodecSettings {
  /**
   * Required when you set Codec to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality. In CBR mode, you use the setting Bitrate. Defaults and valid values depend on the rate control mode.
   * @public
   */
  AacSettings?: AacSettings | undefined;

  /**
   * Required when you set Codec to the value AC3.
   * @public
   */
  Ac3Settings?: Ac3Settings | undefined;

  /**
   * Required when you set Codec to the value AIFF.
   * @public
   */
  AiffSettings?: AiffSettings | undefined;

  /**
   * Choose the audio codec for this output. Note that the option Dolby Digital passthrough applies only to Dolby Digital and Dolby Digital Plus audio inputs. Make sure that you choose a codec that's supported with your output container: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#reference-codecs-containers-output-audio For audio-only outputs, make sure that both your input audio codec and your output audio codec are supported for audio-only workflows. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers-input.html#reference-codecs-containers-input-audio-only and https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#audio-only-output
   * @public
   */
  Codec?: AudioCodec | undefined;

  /**
   * Required when you set Codec to the value EAC3_ATMOS.
   * @public
   */
  Eac3AtmosSettings?: Eac3AtmosSettings | undefined;

  /**
   * Required when you set Codec to the value EAC3.
   * @public
   */
  Eac3Settings?: Eac3Settings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value FLAC.
   * @public
   */
  FlacSettings?: FlacSettings | undefined;

  /**
   * Required when you set Codec to the value MP2.
   * @public
   */
  Mp2Settings?: Mp2Settings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
   * @public
   */
  Mp3Settings?: Mp3Settings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.
   * @public
   */
  OpusSettings?: OpusSettings | undefined;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.
   * @public
   */
  VorbisSettings?: VorbisSettings | undefined;

  /**
   * Required when you set Codec to the value WAV.
   * @public
   */
  WavSettings?: WavSettings | undefined;
}

/**
 * OutputChannel mapping settings.
 * @public
 */
export interface OutputChannelMapping {
  /**
   * Use this setting to specify your remix values when they are integers, such as -10, 0, or 4.
   * @public
   */
  InputChannels?: number[] | undefined;

  /**
   * Use this setting to specify your remix values when they have a decimal component, such as -10.312, 0.08, or 4.9. MediaConvert rounds your remixing values to the nearest thousandth.
   * @public
   */
  InputChannelsFineTune?: number[] | undefined;
}

/**
 * Channel mapping contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.
 * @public
 */
export interface ChannelMapping {
  /**
   * In your JSON job specification, include one child of OutputChannels for each audio channel that you want in your output. Each child should contain one instance of InputChannels or InputChannelsFineTune.
   * @public
   */
  OutputChannels?: OutputChannelMapping[] | undefined;
}

/**
 * Use Manual audio remixing to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
 * @public
 */
export interface RemixSettings {
  /**
   * Optionally specify the channel in your input that contains your audio description audio signal. MediaConvert mixes your audio signal across all output channels, while reducing their volume according to your data stream. When you specify an audio description audio channel, you must also specify an audio description data channel. For more information about audio description signals, see the BBC WHP 198 and 051 white papers.
   * @public
   */
  AudioDescriptionAudioChannel?: number | undefined;

  /**
   * Optionally specify the channel in your input that contains your audio description data stream. MediaConvert mixes your audio signal across all output channels, while reducing their volume according to your data stream. When you specify an audio description data channel, you must also specify an audio description audio channel. For more information about audio description signals, see the BBC WHP 198 and 051 white papers.
   * @public
   */
  AudioDescriptionDataChannel?: number | undefined;

  /**
   * Channel mapping contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.
   * @public
   */
  ChannelMapping?: ChannelMapping | undefined;

  /**
   * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different. If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.
   * @public
   */
  ChannelsIn?: number | undefined;

  /**
   * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8... 64. (1 and even numbers to 64.) If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.
   * @public
   */
  ChannelsOut?: number | undefined;
}

/**
 * Settings related to one audio tab on the MediaConvert console. In your job JSON, an instance of AudioDescription is equivalent to one audio tab in the console. Usually, one audio tab corresponds to one output audio track. Depending on how you set up your input audio selectors and whether you use audio selector groups, one audio tab can correspond to a group of output audio tracks.
 * @public
 */
export interface AudioDescription {
  /**
   * Specify the QuickTime audio channel layout tags for the audio channels in this audio track. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use Audio layout tagging, your output must be in a QuickTime (MOV) container and your audio codec must be AAC, WAV, or AIFF.
   * @public
   */
  AudioChannelTaggingSettings?: AudioChannelTaggingSettings | undefined;

  /**
   * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
   * @public
   */
  AudioNormalizationSettings?: AudioNormalizationSettings | undefined;

  /**
   * Settings for audio pitch correction during framerate conversion.
   * @public
   */
  AudioPitchCorrectionSettings?: AudioPitchCorrectionSettings | undefined;

  /**
   * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
   * @public
   */
  AudioSourceName?: string | undefined;

  /**
   * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
   * @public
   */
  AudioType?: number | undefined;

  /**
   * When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.
   * @public
   */
  AudioTypeControl?: AudioTypeControl | undefined;

  /**
   * Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.
   * @public
   */
  CodecSettings?: AudioCodecSettings | undefined;

  /**
   * Specify the language for this audio output track. The service puts this language code into your output audio track when you set Language code control to Use configured. The service also uses your specified custom language code when you set Language code control to Follow input, but your input file doesn't specify a language code. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Specify the language for your output audio track. To follow the input language: Leave blank. When you do, also set Language code control to Follow input. If no input language is detected MediaConvert will not write an output language code. To follow the input langauge, but fall back to a specified language code if there is no input language to follow: Enter an ISO 639-2 three-letter language code in all capital letters. When you do, also set Language code control to Follow input. To specify the language code: Enter an ISO 639 three-letter language code in all capital letters. When you do, also set Language code control to Use configured.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify which source for language code takes precedence for this audio track. When you choose Follow input, the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code. When you choose Use configured, the service uses the language code that you specify.
   * @public
   */
  LanguageCodeControl?: AudioLanguageCodeControl | undefined;

  /**
   * Advanced audio remixing settings.
   * @public
   */
  RemixSettings?: RemixSettings | undefined;

  /**
   * Specify a label for this output audio stream. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   * @public
   */
  StreamName?: string | undefined;
}

/**
 * Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting.
 * @public
 */
export interface ForceIncludeRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.
 * @public
 */
export interface MinBottomRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.
 * @public
 */
export interface MinTopRenditionSize {
  /**
   * Use Height to define the video resolution height, in pixels, for this rule.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this rule.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Specify one or more Automated ABR rule types. Note: Force include and Allowed renditions are mutually exclusive.
 * @public
 */
export interface AutomatedAbrRule {
  /**
   * When customer adds the allowed renditions rule for auto ABR ladder, they are required to add at leat one rendition to allowedRenditions list
   * @public
   */
  AllowedRenditions?: AllowedRenditionSize[] | undefined;

  /**
   * When customer adds the force include renditions rule for auto ABR ladder, they are required to add at leat one rendition to forceIncludeRenditions list
   * @public
   */
  ForceIncludeRenditions?: ForceIncludeRenditionSize[] | undefined;

  /**
   * Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.
   * @public
   */
  MinBottomRenditionSize?: MinBottomRenditionSize | undefined;

  /**
   * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.
   * @public
   */
  MinTopRenditionSize?: MinTopRenditionSize | undefined;

  /**
   * Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * (Required) The number of resolutions that you specify must be equal to, or greater than, the Max renditions setting. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.
   * @public
   */
  Type?: RuleType | undefined;
}

/**
 * Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html.
 * @public
 */
export interface BurninDestinationSettings {
  /**
   * Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates.
   * @public
   */
  Alignment?: BurninSubtitleAlignment | undefined;

  /**
   * Ignore this setting unless Style passthrough is set to Enabled and Font color set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color for additional font color controls. When you choose White text only, or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.
   * @public
   */
  ApplyFontColor?: BurninSubtitleApplyFontColor | undefined;

  /**
   * Specify the color of the rectangle behind the captions. Leave background color blank and set Style passthrough to enabled to use the background color data from your input captions, if present.
   * @public
   */
  BackgroundColor?: BurninSubtitleBackgroundColor | undefined;

  /**
   * Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font to best match, or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.
   * @public
   */
  FallbackFont?: BurninSubtitleFallbackFont | undefined;

  /**
   * Specify the color of the burned-in captions text. Leave Font color blank and set Style passthrough to enabled to use the font color data from your input captions, if present.
   * @public
   */
  FontColor?: BurninSubtitleFontColor | undefined;

  /**
   * Specify a bold TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, an italic, and a bold italic font file.
   * @public
   */
  FontFileBold?: string | undefined;

  /**
   * Specify a bold italic TrueType font file to use when rendering your output captions.
   * Enter an S3, HTTP, or HTTPS URL.
   * When you do, you must also separately specify a regular, a bold, and an italic font file.
   * @public
   */
  FontFileBoldItalic?: string | undefined;

  /**
   * Specify an italic TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, a bold, and a bold italic font file.
   * @public
   */
  FontFileItalic?: string | undefined;

  /**
   * Specify a regular TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a bold, an italic, and a bold italic font file.
   * @public
   */
  FontFileRegular?: string | undefined;

  /**
   * Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Specify the Font resolution in DPI (dots per inch).
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * Set Font script to Automatically determined, or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese.
   * @public
   */
  FontScript?: FontScript | undefined;

  /**
   * Specify the Font size in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size.
   * @public
   */
  FontSize?: number | undefined;

  /**
   * Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.
   * @public
   */
  HexFontColor?: string | undefined;

  /**
   * Specify font outline color. Leave Outline color blank and set Style passthrough to enabled to use the font outline color data from your input captions, if present.
   * @public
   */
  OutlineColor?: BurninSubtitleOutlineColor | undefined;

  /**
   * Specify the Outline size of the caption text, in pixels. Leave Outline size blank and set Style passthrough to enabled to use the outline size data from your input captions, if present.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Optionally remove any tts:rubyReserve attributes present in your input, that do   not have a tts:ruby attribute in the same element, from your output. Use if your vertical Japanese output captions have alignment issues. To remove ruby reserve attributes when present: Choose Enabled. To not remove any ruby reserve attributes: Keep the default value, Disabled.
   * @public
   */
  RemoveRubyReserveAttributes?: RemoveRubyReserveAttributes | undefined;

  /**
   * Specify the color of the shadow cast by the captions. Leave Shadow color blank and set Style passthrough to enabled to use the shadow color data from your input captions, if present.
   * @public
   */
  ShadowColor?: BurninSubtitleShadowColor | undefined;

  /**
   * Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to Enabled, leave Shadow opacity blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset blank and set Style passthrough to enabled to use the shadow y-offset data from your input captions, if present.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * To use the available style, color, and position information from your input captions: Set Style passthrough to Enabled. Note that MediaConvert uses default settings for any missing style or position information in your input captions To ignore the style and position information from your input captions and use default settings: Leave blank or keep the default value, Disabled. Default settings include white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings. You can also override any fonts by manually specifying custom font files.
   * @public
   */
  StylePassthrough?: BurnInSubtitleStylePassthrough | undefined;

  /**
   * Specify whether the text spacing in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read for closed captions.
   * @public
   */
  TeletextSpacing?: BurninSubtitleTeletextSpacing | undefined;

  /**
   * Specify the horizontal position of the captions, relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specify the vertical position of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output.
   * @public
   */
  YPosition?: number | undefined;
}

/**
 * Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html.
 * @public
 */
export interface DvbSubDestinationSettings {
  /**
   * Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  Alignment?: DvbSubtitleAlignment | undefined;

  /**
   * Ignore this setting unless Style Passthrough is set to Enabled and Font color set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color for additional font color controls. When you choose White text only, or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.
   * @public
   */
  ApplyFontColor?: DvbSubtitleApplyFontColor | undefined;

  /**
   * Specify the color of the rectangle behind the captions. Leave background color blank and set Style passthrough to enabled to use the background color data from your input captions, if present.
   * @public
   */
  BackgroundColor?: DvbSubtitleBackgroundColor | undefined;

  /**
   * Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * Specify how MediaConvert handles the display definition segment (DDS). To exclude the DDS from this set of captions: Keep the default, None. To include the DDS: Choose Specified. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate. To include the DDS, but not include display window data: Choose No display window. When you do, you can write position metadata to the page composition segment (PCS) with DDS x-coordinate and DDS y-coordinate. For video resolutions with a height of 576 pixels or less, MediaConvert doesn't include the DDS, regardless of the value you choose for DDS handling. All burn-in and DVB-Sub font settings must match. To include the DDS, with optimized subtitle placement and reduced data overhead: We recommend that you choose Specified (optimal). This option provides the same visual positioning as Specified while using less bandwidth. This also supports resolutions higher than 1080p while maintaining full DVB-Sub compatibility. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate.
   * @public
   */
  DdsHandling?: DvbddsHandling | undefined;

  /**
   * Use this setting, along with DDS y-coordinate, to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the left side of the frame and the left side of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling to a value other than None. MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  DdsXCoordinate?: number | undefined;

  /**
   * Use this setting, along with DDS x-coordinate, to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the top of the frame and the top of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling to a value other than None. MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment (PCS). All burn-in and DVB-Sub font settings must match.
   * @public
   */
  DdsYCoordinate?: number | undefined;

  /**
   * Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font to best match, or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.
   * @public
   */
  FallbackFont?: DvbSubSubtitleFallbackFont | undefined;

  /**
   * Specify the color of the captions text. Leave Font color blank and set Style passthrough to enabled to use the font color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontColor?: DvbSubtitleFontColor | undefined;

  /**
   * Specify a bold TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, an italic, and a bold italic font file.
   * @public
   */
  FontFileBold?: string | undefined;

  /**
   * Specify a bold italic TrueType font file to use when rendering your output captions.
   * Enter an S3, HTTP, or HTTPS URL.
   * When you do, you must also separately specify a regular, a bold, and an italic font file.
   * @public
   */
  FontFileBoldItalic?: string | undefined;

  /**
   * Specify an italic TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a regular, a bold, and a bold italic font file.
   * @public
   */
  FontFileItalic?: string | undefined;

  /**
   * Specify a regular TrueType font file to use when rendering your output captions. Enter an S3, HTTP, or HTTPS URL. When you do, you must also separately specify a bold, an italic, and a bold italic font file.
   * @public
   */
  FontFileRegular?: string | undefined;

  /**
   * Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Specify the Font resolution in DPI (dots per inch).
   * Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * Set Font script to Automatically determined, or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontScript?: FontScript | undefined;

  /**
   * Specify the Font size in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  FontSize?: number | undefined;

  /**
   * Specify the height, in pixels, of this set of DVB-Sub captions. The default value is 576 pixels. Related setting: When you use this setting, you must set DDS handling to a value other than None. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Height?: number | undefined;

  /**
   * Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.
   * @public
   */
  HexFontColor?: string | undefined;

  /**
   * Specify font outline color. Leave Outline color blank and set Style passthrough to enabled to use the font outline color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  OutlineColor?: DvbSubtitleOutlineColor | undefined;

  /**
   * Specify the Outline size of the caption text, in pixels. Leave Outline size blank and set Style passthrough to enabled to use the outline size data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Specify the color of the shadow cast by the captions. Leave Shadow color blank and set Style passthrough to enabled to use the shadow color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowColor?: DvbSubtitleShadowColor | undefined;

  /**
   * Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough is set to Enabled, leave Shadow opacity blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset blank and set Style passthrough to enabled to use the shadow y-offset data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * To use the available style, color, and position information from your input captions: Set Style passthrough to Enabled. Note that MediaConvert uses default settings for any missing style or position information in your input captions To ignore the style and position information from your input captions and use default settings: Leave blank or keep the default value, Disabled. Default settings include white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings. You can also override any fonts by manually specifying custom font files.
   * @public
   */
  StylePassthrough?: DvbSubtitleStylePassthrough | undefined;

  /**
   * Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.
   * @public
   */
  SubtitlingType?: DvbSubtitlingType | undefined;

  /**
   * Specify whether the Text spacing in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read for closed captions. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  TeletextSpacing?: DvbSubtitleTeletextSpacing | undefined;

  /**
   * Specify the width, in pixels, of this set of DVB-Sub captions. The default value is 720 pixels. Related setting: When you use this setting, you must set DDS handling to a value other than None. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Width?: number | undefined;

  /**
   * Specify the horizontal position of the captions, relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specify the vertical position of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. Within your job settings, all of your DVB-Sub settings must be identical.
   * @public
   */
  YPosition?: number | undefined;
}

/**
 * Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html.
 * @public
 */
export interface EmbeddedDestinationSettings {
  /**
   * Ignore this setting unless your input captions are SCC format and your output captions are embedded in the video stream. Specify a CC number for each captions channel in this output. If you have two channels, choose CC numbers that aren't in the same field. For example, choose 1 and 3. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   * @public
   */
  Destination608ChannelNumber?: number | undefined;

  /**
   * Ignore this setting unless your input captions are SCC format and you want both 608 and 708 captions embedded in your output stream. Optionally, specify the 708 service number for each output captions channel. Choose a different number for each channel. To use this setting, also set Force 608 to 708 upconvert to Upconvert in your input captions selector settings. If you choose to upconvert but don't specify a 708 service number, MediaConvert uses the number that you specify for CC channel number for the 708 service number. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   * @public
   */
  Destination708ServiceNumber?: number | undefined;
}

/**
 * Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
 * @public
 */
export interface ImscDestinationSettings {
  /**
   * If the IMSC captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>.
   * @public
   */
  Accessibility?: ImscAccessibilitySubs | undefined;

  /**
   * Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.
   * @public
   */
  StylePassthrough?: ImscStylePassthrough | undefined;
}

/**
 * Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html.
 * @public
 */
export interface SccDestinationSettings {
  /**
   * Set Framerate to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe.
   * @public
   */
  Framerate?: SccDestinationFramerate | undefined;
}

/**
 * Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video.
 * @public
 */
export interface SrtDestinationSettings {
  /**
   * Set Style passthrough to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use simplified output captions.
   * @public
   */
  StylePassthrough?: SrtStylePassthrough | undefined;
}

/**
 * Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html.
 * @public
 */
export interface TeletextDestinationSettings {
  /**
   * Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.
   * @public
   */
  PageNumber?: string | undefined;

  /**
   * Specify the page types for this Teletext page. If you don't specify a value here, the service sets the page type to the default value Subtitle. If you pass through the entire set of Teletext data, don't use this field. When you pass through a set of Teletext pages, your output has the same page types as your input.
   * @public
   */
  PageTypes?: TeletextPageType[] | undefined;
}

/**
 * Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
 * @public
 */
export interface TtmlDestinationSettings {
  /**
   * Pass through style and position information from a TTML-like input source (TTML, IMSC, SMPTE-TT) to the TTML output.
   * @public
   */
  StylePassthrough?: TtmlStylePassthrough | undefined;
}

/**
 * Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
 * @public
 */
export interface WebvttDestinationSettings {
  /**
   * If the WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>.
   * @public
   */
  Accessibility?: WebvttAccessibilitySubs | undefined;

  /**
   * Specify how MediaConvert writes style information in your output WebVTT captions. To use the available style, color, and position information from your input captions: Choose Enabled. MediaConvert uses default settings when style and position information is missing from your input captions. To recreate the input captions exactly: Choose Strict. MediaConvert automatically applies timing adjustments, including adjustments for frame rate conversion, ad avails, and input clipping. Your input captions format must be WebVTT. To ignore the style and position information from your input captions and use simplified output captions: Keep the default value, Disabled. Or leave blank. To use the available style, color, and position information from your input captions, while merging cues with identical time ranges: Choose merge. This setting can help prevent positioning overlaps for certain players that expect a single single cue for any given time range.
   * @public
   */
  StylePassthrough?: WebvttStylePassthrough | undefined;
}

/**
 * Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
 * @public
 */
export interface CaptionDestinationSettings {
  /**
   * Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html.
   * @public
   */
  BurninDestinationSettings?: BurninDestinationSettings | undefined;

  /**
   * Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Note that your choice of video output container constrains your choice of output captions format. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/captions-support-tables.html. If you are using SCTE-20 and you want to create an output that complies with the SCTE-43 spec, choose SCTE-20 plus embedded. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20.
   * @public
   */
  DestinationType?: CaptionDestinationType | undefined;

  /**
   * Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html.
   * @public
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings | undefined;

  /**
   * Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html.
   * @public
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings | undefined;

  /**
   * Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
   * @public
   */
  ImscDestinationSettings?: ImscDestinationSettings | undefined;

  /**
   * Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html.
   * @public
   */
  SccDestinationSettings?: SccDestinationSettings | undefined;

  /**
   * Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video.
   * @public
   */
  SrtDestinationSettings?: SrtDestinationSettings | undefined;

  /**
   * Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html.
   * @public
   */
  TeletextDestinationSettings?: TeletextDestinationSettings | undefined;

  /**
   * Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
   * @public
   */
  TtmlDestinationSettings?: TtmlDestinationSettings | undefined;

  /**
   * Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html.
   * @public
   */
  WebvttDestinationSettings?: WebvttDestinationSettings | undefined;
}

/**
 * This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.
 * @public
 */
export interface CaptionDescription {
  /**
   * Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector <N>", which denotes that the Nth Caption Selector will be used from each input.
   * @public
   */
  CaptionSelectorName?: string | undefined;

  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
   * @public
   */
  DestinationSettings?: CaptionDestinationSettings | undefined;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   * @public
   */
  LanguageDescription?: string | undefined;
}

/**
 * Caption Description for preset
 * @public
 */
export interface CaptionDescriptionPreset {
  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.
   * @public
   */
  DestinationSettings?: CaptionDestinationSettings | undefined;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   * @public
   */
  LanguageDescription?: string | undefined;
}

/**
 * Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group.
 * @public
 */
export interface CmafAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   * @public
   */
  ManifestNameModifier?: string | undefined;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   * @public
   */
  SelectedOutputs?: string[] | undefined;
}

/**
 * Custom 3D lut settings
 * @public
 */
export interface ColorConversion3DLUTSetting {
  /**
   * Specify the input file S3, HTTP, or HTTPS URL for your 3D LUT .cube file. Note that MediaConvert accepts 3D LUT files up to 8MB in size.
   * @public
   */
  FileInput?: string | undefined;

  /**
   * Specify which inputs use this 3D LUT, according to their color space.
   * @public
   */
  InputColorSpace?: ColorSpace | undefined;

  /**
   * Specify which inputs use this 3D LUT, according to their luminance. To apply this 3D LUT to HDR10 or P3D65 (HDR) inputs with a specific mastering luminance: Enter an integer from 0 to 2147483647, corresponding to the input's Maximum luminance value. To apply this 3D LUT to any input regardless of its luminance: Leave blank, or enter 0.
   * @public
   */
  InputMasteringLuminance?: number | undefined;

  /**
   * Specify which outputs use this 3D LUT, according to their color space.
   * @public
   */
  OutputColorSpace?: ColorSpace | undefined;

  /**
   * Specify which outputs use this 3D LUT, according to their luminance. To apply this 3D LUT to HDR10 or P3D65 (HDR) outputs with a specific luminance: Enter an integer from 0 to 2147483647, corresponding to the output's luminance. To apply this 3D LUT to any output regardless of its luminance: Leave blank, or enter 0.
   * @public
   */
  OutputMasteringLuminance?: number | undefined;
}

/**
 * Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 * @public
 */
export interface DashAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your DASH group is film-name.mpd. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.mpd.
   * @public
   */
  ManifestNameModifier?: string | undefined;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   * @public
   */
  SelectedOutputs?: string[] | undefined;
}

/**
 * Describes an account-specific API endpoint.
 * @public
 */
export interface Endpoint {
  /**
   * URL of endpoint
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 * @public
 */
export interface HlsAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   * @public
   */
  ManifestNameModifier?: string | undefined;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   * @public
   */
  SelectedOutputs?: string[] | undefined;
}

/**
 * Caption Language Mapping
 * @public
 */
export interface HlsCaptionLanguageMapping {
  /**
   * Caption channel.
   * @public
   */
  CaptionChannel?: number | undefined;

  /**
   * Specify the language, using an ISO 639-2 three-letter code in all capital letters. You can find a list of codes at: https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Specify the language, using an ISO 639-2 three-letter code in all capital letters. You can find a list of codes at: https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Caption language description.
   * @public
   */
  LanguageDescription?: string | undefined;
}

/**
 * Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.
 * @public
 */
export interface HopDestination {
  /**
   * Optional. When you set up a job to use queue hopping, you can specify a different relative priority for the job in the destination queue. If you don't specify, the relative priority will remain the same as in the previous queue.
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional unless the job is submitted on the default queue. When you set up a job to use queue hopping, you can specify a destination queue. This queue cannot be the original queue to which the job is submitted. If the original queue isn't the default queue and you don't specify the destination queue, the job will move to the default queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Required for setting up a job to use queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. Valid range is 1 to 4320 minutes, inclusive.
   * @public
   */
  WaitMinutes?: number | undefined;
}

/**
 * To insert ID3 tags in your output, specify two values. Use ID3 tag to specify the base 64 encoded string and use Timecode to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion.
 * @public
 */
export interface Id3Insertion {
  /**
   * Use ID3 tag to provide a fully formed ID3 tag in base64-encode format.
   * @public
   */
  Id3?: string | undefined;

  /**
   * Provide a Timecode in HH:MM:SS:FF or HH:MM:SS;FF format.
   * @public
   */
  Timecode?: string | undefined;
}

/**
 * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
 * @public
 */
export interface AdvancedInputFilterSettings {
  /**
   * Add texture and detail to areas of your input video content that were lost after applying the Advanced input filter. To adaptively add texture and reduce softness: Choose Enabled. To not add any texture: Keep the default value, Disabled. We recommend that you choose Disabled for input video content that doesn't have texture, including screen recordings, computer graphics, or cartoons.
   * @public
   */
  AddTexture?: AdvancedInputFilterAddTexture | undefined;

  /**
   * Optionally specify the amount of sharpening to apply when you use the Advanced input filter. Sharpening adds contrast to the edges of your video content and can reduce softness. To apply no sharpening: Keep the default value, Off. To apply a minimal amount of sharpening choose Low, or for the maximum choose High.
   * @public
   */
  Sharpening?: AdvancedInputFilterSharpen | undefined;
}

/**
 * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
 * @public
 */
export interface AudioSelectorGroup {
  /**
   * Name of an Audio Selector within the same input to include in the group. Audio selector names are standardized, based on their order within the input (e.g., "Audio Selector 1"). The audio selector name parameter can be repeated to add any number of audio selectors to the group.
   * @public
   */
  AudioSelectorNames?: string[] | undefined;
}

/**
 * Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.
 * @public
 */
export interface HlsRenditionGroupSettings {
  /**
   * Optional. Specify alternative group ID
   * @public
   */
  RenditionGroupId?: string | undefined;

  /**
   * Optionally specify the language, using an ISO 639-2 or ISO 639-3 three-letter code in all capital letters. You can find a list of codes at: https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  RenditionLanguageCode?: LanguageCode | undefined;

  /**
   * Optional. Specify media name
   * @public
   */
  RenditionName?: string | undefined;
}

/**
 * Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
 * @public
 */
export interface AudioSelector {
  /**
   * Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion. * Force: Apply audio duration correction, either Track or Frame depending on your input, regardless of the accuracy of your input's STTS table. Your output audio and video may not be aligned or it may contain audio artifacts.
   * @public
   */
  AudioDurationCorrection?: AudioDurationCorrection | undefined;

  /**
   * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * Specify a fallback audio selector for this input. Use to ensure outputs have audio even when the audio selector you specify in your output is missing from the source. DEFAULT (Checked in the MediaConvert console): If your output settings specify an audio selector that does not exist in this input, MediaConvert uses this audio selector instead. This is useful when you have multiple inputs with a different number of audio tracks. NOT_DEFAULT (Unchecked in the MediaConvert console): MediaConvert will not fallback from any missing audio selector. Any output specifying a missing audio selector will be silent.
   * @public
   */
  DefaultSelection?: AudioDefaultSelection | undefined;

  /**
   * Specify the S3, HTTP, or HTTPS URL for your external audio file input.
   * @public
   */
  ExternalAudioFileInput?: string | undefined;

  /**
   * Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.
   * @public
   */
  HlsRenditionGroupSettings?: HlsRenditionGroupSettings | undefined;

  /**
   * Specify the language, using an ISO 639-2 three-letter code in all capital letters. You can find a list of codes at: https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a time delta, in milliseconds, to offset the audio from the input video.
   * To specify no offset: Keep the default value, 0.
   * To specify an offset: Enter an integer from -2147483648 to 2147483647
   * @public
   */
  Offset?: number | undefined;

  /**
   * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
   * @public
   */
  Pids?: number[] | undefined;

  /**
   * Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.
   * @public
   */
  ProgramSelection?: number | undefined;

  /**
   * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
   * @public
   */
  RemixSettings?: RemixSettings | undefined;

  /**
   * Specify how MediaConvert selects audio content within your input. The default is Track. PID: Select audio by specifying the Packet Identifier (PID) values for MPEG Transport Stream inputs. Use this when you know the exact PID values of your audio streams. Track: Default. Select audio by track number. This is the most common option and works with most input container formats. If more types of audio data get recognized in the future, these numberings may shift, but the numberings used for Stream mode will not. Language code: Select audio by language using an ISO 639-2 or ISO 639-3 three-letter       code in all capital letters. Use this when your source has embedded language metadata and you want to select tracks based on their language. HLS rendition group: Select audio from an HLS rendition group. Use this when your input is an HLS package with multiple audio renditions and you want to select specific rendition groups. All PCM: Select all uncompressed PCM audio tracks from your input automatically. This is useful when you want to include all PCM audio tracks without specifying individual track numbers. Stream: Select audio by stream number. Stream numbers include all tracks in the source file, regardless of type, and correspond to either the order of tracks in the file, or if applicable, the stream number metadata of the track. Although all tracks count toward these stream numbers, in this audio selector context, only the stream number of a track containing audio data may be used. If your source file contains a track which is not recognized by the service, then the corresponding stream number will still be reserved for future use. If more types of audio data get recognized in the future, these numberings will not shift.
   * @public
   */
  SelectorType?: AudioSelectorType | undefined;

  /**
   * Identify a track from the input audio to include in this selector by entering the stream index number. These numberings count all tracks in the input file, but only a track containing audio data may be used here. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For example, type "1,2,3" to include tracks 1 through 3.
   * @public
   */
  Streams?: number[] | undefined;

  /**
   * Identify a track from the input audio to include in this selector by entering the track index number. These numberings include only tracks recognized as audio. If the service recognizes more types of audio tracks in the future, these numberings may shift. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For example, type "1,2,3" to include tracks 1 through 3.
   * @public
   */
  Tracks?: number[] | undefined;
}

/**
 * Settings for ancillary captions source.
 * @public
 */
export interface AncillarySourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   * @public
   */
  Convert608To708?: AncillaryConvert608To708 | undefined;

  /**
   * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
   * @public
   */
  SourceAncillaryChannelNumber?: number | undefined;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   * @public
   */
  TerminateCaptions?: AncillaryTerminateCaptions | undefined;
}

/**
 * DVB Sub Source Settings
 * @public
 */
export interface DvbSubSourceSettings {
  /**
   * When using DVB-Sub with Burn-in, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   * @public
   */
  Pid?: number | undefined;
}

/**
 * Settings for embedded captions Source
 * @public
 */
export interface EmbeddedSourceSettings {
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   * @public
   */
  Convert608To708?: EmbeddedConvert608To708 | undefined;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   * @public
   */
  Source608ChannelNumber?: number | undefined;

  /**
   * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
   * @public
   */
  Source608TrackNumber?: number | undefined;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   * @public
   */
  TerminateCaptions?: EmbeddedTerminateCaptions | undefined;
}

/**
 * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
 * @public
 */
export interface CaptionSourceFramerate {
  /**
   * Specify the denominator of the fraction that represents the frame rate for the setting Caption source frame rate. Use this setting along with the setting Framerate numerator.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * Specify the numerator of the fraction that represents the frame rate for the setting Caption source frame rate. Use this setting along with the setting Framerate denominator.
   * @public
   */
  FramerateNumerator?: number | undefined;
}

/**
 * If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 * @public
 */
export interface FileSourceSettings {
  /**
   * Choose whether to limit the byte rate at which your SCC input captions are inserted into your output. To not limit the caption rate: We recommend that you keep the default value, Disabled. MediaConvert inserts captions in your output according to the byte rates listed in the EIA-608 specification, typically 2 or 3 caption bytes per frame depending on your output frame rate. To limit your output caption rate: Choose Enabled. Choose this option if your downstream systems require a maximum of 2 caption bytes per frame. Note that this setting has no effect when your output frame rate is 30 or 60.
   * @public
   */
  ByteRateLimit?: CaptionSourceByteRateLimit | undefined;

  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   * @public
   */
  Convert608To708?: FileSourceConvert608To708 | undefined;

  /**
   * Choose the presentation style of your input SCC captions. To use the same presentation style as your input: Keep the default value, Disabled. To convert paint-on captions to pop-on: Choose Enabled. We also recommend that you choose Enabled if you notice additional repeated lines in your output captions.
   * @public
   */
  ConvertPaintToPop?: CaptionSourceConvertPaintOnToPopOn | undefined;

  /**
   * Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.
   * @public
   */
  Framerate?: CaptionSourceFramerate | undefined;

  /**
   * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', 'xml', 'smi', 'webvtt', and 'vtt'.
   * @public
   */
  SourceFile?: string | undefined;

  /**
   * Optional. Use this setting when you need to adjust the sync between your sidecar captions and your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/time-delta-use-cases.html. Enter a positive or negative number to modify the times in the captions file. For example, type 15 to add 15 seconds to all the times in the captions file. Type -5 to subtract 5 seconds from the times in the captions file. You can optionally specify your time delta in milliseconds instead of seconds. When you do so, set the related setting, Time delta units to Milliseconds. Note that, when you specify a time delta for timecode-based caption sources, such as SCC and STL, and your time delta isn't a multiple of the input frame rate, MediaConvert snaps the captions to the nearest frame. For example, when your input video frame rate is 25 fps and you specify 1010ms for time delta, MediaConvert delays your captions by 1000 ms.
   * @public
   */
  TimeDelta?: number | undefined;

  /**
   * When you use the setting Time delta to adjust the sync between your sidecar captions and your video, use this setting to specify the units for the delta that you specify. When you don't specify a value for Time delta units, MediaConvert uses seconds by default.
   * @public
   */
  TimeDeltaUnits?: FileSourceTimeDeltaUnits | undefined;

  /**
   * Specify whether this set of input captions appears in your outputs in both STL and Teletext format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the STL data through using the Teletext compatibility bytes fields of the Teletext wrapper, and it also translates the STL data into Teletext.
   * @public
   */
  UpconvertSTLToTeletext?: CaptionSourceUpconvertSTLToTeletext | undefined;
}

/**
 * Settings specific to Teletext caption sources, including Page number.
 * @public
 */
export interface TeletextSourceSettings {
  /**
   * Use Page Number to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.
   * @public
   */
  PageNumber?: string | undefined;
}

/**
 * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
 * @public
 */
export interface TrackSourceSettings {
  /**
   * Use this setting to select a single captions track from a source. Stream numbers include all tracks in the source file, regardless of type, and correspond to either the order of tracks in the file, or if applicable, the stream number metadata of the track. Although all tracks count toward these stream numbers, in this caption selector context, only the stream number of a track containing caption data may be used. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one stream per selector. If your source file contains a track which is not recognized by the service, then the corresponding stream number will still be reserved for future use. If more types of caption data get recognized in the future, these numberings will not shift.
   * @public
   */
  StreamNumber?: number | undefined;

  /**
   * Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector. If more types of caption data get recognized in the future, these numberings may shift, but the numberings used for streamNumber will not.
   * @public
   */
  TrackNumber?: number | undefined;
}

/**
 * Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.
 * @public
 */
export interface WebvttHlsSourceSettings {
  /**
   * Optional. Specify alternative group ID
   * @public
   */
  RenditionGroupId?: string | undefined;

  /**
   * Optionally specify the language, using an ISO 639-2 or ISO 639-3 three-letter code in all capital letters. You can find a list of codes at: https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  RenditionLanguageCode?: LanguageCode | undefined;

  /**
   * Optional. Specify media name
   * @public
   */
  RenditionName?: string | undefined;
}

/**
 * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 * @public
 */
export interface CaptionSourceSettings {
  /**
   * Settings for ancillary captions source.
   * @public
   */
  AncillarySourceSettings?: AncillarySourceSettings | undefined;

  /**
   * DVB Sub Source Settings
   * @public
   */
  DvbSubSourceSettings?: DvbSubSourceSettings | undefined;

  /**
   * Settings for embedded captions Source
   * @public
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings | undefined;

  /**
   * If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   * @public
   */
  FileSourceSettings?: FileSourceSettings | undefined;

  /**
   * Use Source to identify the format of your input captions. The service cannot auto-detect caption format.
   * @public
   */
  SourceType?: CaptionSourceType | undefined;

  /**
   * Settings specific to Teletext caption sources, including Page number.
   * @public
   */
  TeletextSourceSettings?: TeletextSourceSettings | undefined;

  /**
   * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
   * @public
   */
  TrackSourceSettings?: TrackSourceSettings | undefined;

  /**
   * Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.
   * @public
   */
  WebvttHlsSourceSettings?: WebvttHlsSourceSettings | undefined;
}

/**
 * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input.
 * @public
 */
export interface CaptionSelector {
  /**
   * The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   * @public
   */
  CustomLanguageCode?: string | undefined;

  /**
   * The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   * @public
   */
  SourceSettings?: CaptionSourceSettings | undefined;
}

/**
 * Use Rectangle to identify a specific area of the video frame.
 * @public
 */
export interface Rectangle {
  /**
   * Height of rectangle in pixels. Specify only even numbers.
   * @public
   */
  Height?: number | undefined;

  /**
   * Width of rectangle in pixels. Specify only even numbers.
   * @public
   */
  Width?: number | undefined;

  /**
   * The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.
   * @public
   */
  X?: number | undefined;

  /**
   * The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.
   * @public
   */
  Y?: number | undefined;
}

/**
 * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
 * @public
 */
export interface InputDecryptionSettings {
  /**
   * Specify the encryption mode that you used to encrypt your input files.
   * @public
   */
  DecryptionMode?: DecryptionMode | undefined;

  /**
   * Warning! Don't provide your encryption key in plaintext. Your job settings could be intercepted, making your encrypted content vulnerable. Specify the encrypted version of the data key that you used to encrypt your content. The data key must be encrypted by AWS Key Management Service (KMS). The key can be 128, 192, or 256 bits.
   * @public
   */
  EncryptedDecryptionKey?: string | undefined;

  /**
   * Specify the initialization vector that you used when you encrypted your content before uploading it to Amazon S3. You can use a 16-byte initialization vector with any encryption mode. Or, you can use a 12-byte initialization vector with GCM or CTR. MediaConvert accepts only initialization vectors that are base64-encoded.
   * @public
   */
  InitializationVector?: string | undefined;

  /**
   * Specify the AWS Region for AWS Key Management Service (KMS) that you used to encrypt your data key, if that Region is different from the one you are using for AWS Elemental MediaConvert.
   * @public
   */
  KmsKeyRegion?: string | undefined;
}

/**
 * Use Dynamic audio selectors when you do not know the track layout of your source when you submit your job, but want to select multiple audio tracks. When you include an audio track in your output and specify this Dynamic audio selector as the Audio source, MediaConvert creates an audio track within that output for each dynamically selected track. Note that when you include a Dynamic audio selector for two or more inputs, each input must have the same number of audio tracks and audio channels.
 * @public
 */
export interface DynamicAudioSelector {
  /**
   * Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion. * Force: Apply audio duration correction, either Track or Frame depending on your input, regardless of the accuracy of your input's STTS table. Your output audio and video may not be aligned or it may contain audio artifacts.
   * @public
   */
  AudioDurationCorrection?: AudioDurationCorrection | undefined;

  /**
   * Specify the S3, HTTP, or HTTPS URL for your external audio file input.
   * @public
   */
  ExternalAudioFileInput?: string | undefined;

  /**
   * Specify the language, using an ISO 639-2 three-letter code in all capital letters. You can find a list of codes at: https://www.loc.gov/standards/iso639-2/php/code_list.php
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Specify a time delta, in milliseconds, to offset the audio from the input video.
   * To specify no offset: Keep the default value, 0.
   * To specify an offset: Enter an integer from -2147483648 to 2147483647
   * @public
   */
  Offset?: number | undefined;

  /**
   * Specify which audio tracks to dynamically select from your source. To select all audio tracks: Keep the default value, All tracks. To select all audio tracks with a specific language code: Choose Language code. When you do, you must also specify a language code under the Language code setting. If there is no matching Language code in your source, then no track will be selected.
   * @public
   */
  SelectorType?: DynamicAudioSelectorType | undefined;
}

/**
 * These settings apply to a specific graphic overlay. You can include multiple overlays in your job.
 * @public
 */
export interface InsertableImage {
  /**
   * Specify the time, in milliseconds, for the image to remain on the output video. This duration includes fade-in time but not fade-out time.
   * @public
   */
  Duration?: number | undefined;

  /**
   * Specify the length of time, in milliseconds, between the Start time that you specify for the image insertion and the time that the image appears at full opacity. Full opacity is the level that you specify for the opacity setting. If you don't specify a value for Fade-in, the image will appear abruptly at the overlay start time.
   * @public
   */
  FadeIn?: number | undefined;

  /**
   * Specify the length of time, in milliseconds, between the end of the time that you have specified for the image overlay Duration and when the overlaid image has faded to total transparency. If you don't specify a value for Fade-out, the image will disappear abruptly at the end of the inserted image duration.
   * @public
   */
  FadeOut?: number | undefined;

  /**
   * Specify the height of the inserted image in pixels. If you specify a value that's larger than the video resolution height, the service will crop your overlaid image to fit. To use the native height of the image, keep this setting blank.
   * @public
   */
  Height?: number | undefined;

  /**
   * Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.
   * @public
   */
  ImageInserterInput?: string | undefined;

  /**
   * Specify the distance, in pixels, between the inserted image and the left edge of the video frame. Required for any image overlay that you specify.
   * @public
   */
  ImageX?: number | undefined;

  /**
   * Specify the distance, in pixels, between the overlaid image and the top edge of the video frame. Required for any image overlay that you specify.
   * @public
   */
  ImageY?: number | undefined;

  /**
   * Specify how overlapping inserted images appear. Images with higher values for Layer appear on top of images with lower values for Layer.
   * @public
   */
  Layer?: number | undefined;

  /**
   * Use Opacity to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.
   * @public
   */
  Opacity?: number | undefined;

  /**
   * Specify the timecode of the frame that you want the overlay to first appear on. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format. Remember to take into account your timecode source settings.
   * @public
   */
  StartTime?: string | undefined;

  /**
   * Specify the width of the inserted image in pixels. If you specify a value that's larger than the video resolution width, the service will crop your overlaid image to fit. To use the native width of the image, keep this setting blank.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Use the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/graphic-overlay.html. This setting is disabled by default.
 * @public
 */
export interface ImageInserter {
  /**
   * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
   * @public
   */
  InsertableImages?: InsertableImage[] | undefined;

  /**
   * Specify the reference white level, in nits, for all of your image inserter images. Use to correct brightness levels within HDR10 outputs. For 1,000 nit peak brightness displays, we recommend that you set SDR reference white level to 203 (according to ITU-R BT.2408). Leave blank to use the default value of 100, or specify an integer from 100 to 1000.
   * @public
   */
  SdrReferenceWhiteLevel?: number | undefined;
}

/**
 * To transcode only portions of your input, include one input clip for each part of your input that you want in your output. All input clips that you specify will be included in every output of the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html.
 * @public
 */
export interface InputClipping {
  /**
   * Set End timecode to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Set Start timecode to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00.
   * @public
   */
  StartTimecode?: string | undefined;
}

/**
 * Specify a Time Addressable Media Store (TAMS) server as an input source. TAMS is an open-source API specification that provides access to time-segmented media content. Use TAMS to retrieve specific time ranges from live or archived media streams. When you specify TAMS settings, MediaConvert connects to your TAMS server, retrieves the media segments for your specified time range, and processes them as a single input. This enables workflows like extracting clips from live streams or processing specific portions of archived content. To use TAMS, you must: 1. Have access to a TAMS-compliant server 2. Specify the server URL in the Input file URL field 3. Provide the required SourceId and Timerange parameters 4. Configure authentication, if your TAMS server requires it
 * @public
 */
export interface InputTamsSettings {
  /**
   * Specify the ARN (Amazon Resource Name) of an EventBridge Connection to authenticate with your TAMS server. The EventBridge Connection stores your authentication credentials securely. MediaConvert assumes your job's IAM role to access this connection, so ensure the role has the events:RetrieveConnectionCredentials, secretsmanager:DescribeSecret, and secretsmanager:GetSecretValue permissions. Format: arn:aws:events:region:account-id:connection/connection-name/unique-id This setting is required when you include TAMS settings in your job.
   * @public
   */
  AuthConnectionArn?: string | undefined;

  /**
   * Specify how MediaConvert handles gaps between media segments in your TAMS source. Gaps can occur in live streams due to network issues or other interruptions. Choose from the following options: * Skip gaps - Default. Skip over gaps and join segments together. This creates a continuous output with no blank frames, but may cause timeline discontinuities. * Fill with black - Insert black frames to fill gaps between segments. This maintains timeline continuity but adds black frames where content is missing. * Hold last frame - Repeat the last frame before a gap until the next segment begins. This maintains visual continuity during gaps.
   * @public
   */
  GapHandling?: TamsGapHandling | undefined;

  /**
   * Specify the unique identifier for the media source in your TAMS server. MediaConvert uses this source ID to locate the appropriate flows containing the media segments you want to process. The source ID corresponds to a specific media source registered in your TAMS server. This source must be of type urn:x-nmos:format:multi, and can can reference multiple flows for audio, video, or combined audio/video content. MediaConvert automatically selects the highest quality flows available for your job. This setting is required when you include TAMS settings in your job.
   * @public
   */
  SourceId?: string | undefined;

  /**
   * Specify the time range of media segments to retrieve from your TAMS server. MediaConvert fetches only the segments that fall within this range. Use the format specified by your TAMS server implementation. This must be two timestamp values with the format \{sign?\}\{seconds\}:\{nanoseconds\}, separated by an underscore, surrounded by either parentheses or square brackets.  Example: [15:0_35:0) This setting is required when you include TAMS settings in your job.
   * @public
   */
  Timerange?: string | undefined;
}

/**
 * When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html
 * @public
 */
export interface InputVideoGenerator {
  /**
   * Specify the number of audio channels to include in your video generator input. MediaConvert creates these audio channels as silent audio within a single audio track. Enter an integer from 1 to 32.
   * @public
   */
  Channels?: number | undefined;

  /**
   * Specify the duration, in milliseconds, for your video generator input.
   * Enter an integer from 1 to 86400000.
   * @public
   */
  Duration?: number | undefined;

  /**
   * Specify the denominator of the fraction that represents the frame rate for your video generator input. When you do, you must also specify a value for Frame rate numerator. MediaConvert uses a default frame rate of 29.97 when you leave Frame rate numerator and Frame rate denominator blank.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * Specify the numerator of the fraction that represents the frame rate for your video generator input. When you do, you must also specify a value for Frame rate denominator. MediaConvert uses a default frame rate of 29.97 when you leave Frame rate numerator and Frame rate denominator blank.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Specify the height, in pixels, for your video generator input. This is useful for positioning when you include one or more video overlays for this input. To use the default resolution 540x360: Leave both width and height blank. To specify a height: Enter an even integer from 32 to 8192. When you do, you must also specify a value for width.
   * @public
   */
  Height?: number | undefined;

  /**
   * Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.
   * @public
   */
  ImageInput?: string | undefined;

  /**
   * Specify the audio sample rate, in Hz, for the silent audio in your video generator input.
   * Enter an integer from 32000 to 48000.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Specify the width, in pixels, for your video generator input. This is useful for positioning when you include one or more video overlays for this input. To use the default resolution 540x360: Leave both width and height blank. To specify a width: Enter an even integer from 32 to 8192. When you do, you must also specify a value for height.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Specify a rectangle of content to crop and use from your video overlay's input video. When you do, MediaConvert uses the cropped dimensions that you specify under X offset, Y offset, Width, and Height.
 * @public
 */
export interface VideoOverlayCrop {
  /**
   * Specify the height of the video overlay cropping rectangle. To use the same height as your overlay input video: Keep blank, or enter 0. To specify a different height for the cropping rectangle: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 100 and choose Pixels, the cropping rectangle will be 100 pixels high. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be 108 pixels high.
   * @public
   */
  Height?: number | undefined;

  /**
   * Specify the Unit type to use when you enter a value for X position, Y position, Width, or Height. You can choose Pixels or Percentage. Leave blank to use the default value, Pixels.
   * @public
   */
  Unit?: VideoOverlayUnit | undefined;

  /**
   * Specify the width of the video overlay cropping rectangle. To use the same width as your overlay input video: Keep blank, or enter 0. To specify a different width for the cropping rectangle: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 100 and choose Pixels, the cropping rectangle will be 100 pixels wide. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be 192 pixels wide.
   * @public
   */
  Width?: number | undefined;

  /**
   * Specify the distance between the cropping rectangle and the left edge of your overlay video's frame. To position the cropping rectangle along the left edge: Keep blank, or enter 0. To position the cropping rectangle to the right, relative to the left edge of your overlay video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, the cropping rectangle will be positioned 10 pixels from the left edge of the overlay video's frame. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be positioned 192 pixels from the left edge of the overlay video's frame.
   * @public
   */
  X?: number | undefined;

  /**
   * Specify the distance between the cropping rectangle and the top edge of your overlay video's frame. To position the cropping rectangle along the top edge: Keep blank, or enter 0. To position the cropping rectangle down, relative to the top edge of your overlay video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, the cropping rectangle will be positioned 10 pixels from the top edge of the overlay video's frame. When you enter 10, choose Percentage, and your overlay input video is 1920x1080, the cropping rectangle will be positioned 108 pixels from the top edge of the overlay video's frame.
   * @public
   */
  Y?: number | undefined;
}

/**
 * position of video overlay
 * @public
 */
export interface VideoOverlayPosition {
  /**
   * To scale your video overlay to the same height as the base input video: Leave blank. To scale the height of your video overlay to a different height: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 360 and choose Pixels, your video overlay will be rendered with a height of 360. When you enter 50, choose Percentage, and your overlay's source has a height of 1080, your video overlay will be rendered with a height of 540. To scale your overlay to a specific height while automatically maintaining its original aspect ratio, enter a value for Height and leave Width blank.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Opacity to specify how much of the underlying video shows through the overlay video. 0 is transparent and 100 is fully opaque. Default is 100.
   * @public
   */
  Opacity?: number | undefined;

  /**
   * Specify the Unit type to use when you enter a value for X position, Y position, Width, or Height. You can choose Pixels or Percentage. Leave blank to use the default value, Pixels.
   * @public
   */
  Unit?: VideoOverlayUnit | undefined;

  /**
   * To scale your video overlay to the same width as the base input video: Leave blank. To scale the width of your video overlay to a different width: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 640 and choose Pixels, your video overlay will scale to a height of 640 pixels. When you enter 50, choose Percentage, and your overlay's source has a width of 1920, your video overlay will scale to a width of 960. To scale your overlay to a specific width while automatically maintaining its original aspect ratio, enter a value for Width and leave Height blank.
   * @public
   */
  Width?: number | undefined;

  /**
   * To position the left edge of your video overlay along the left edge of the base input video's frame: Keep blank, or enter 0. To position the left edge of your video overlay to the right, relative to the left edge of the base input video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, your video overlay will be positioned 10 pixels from the left edge of the base input video's frame. When you enter 10, choose Percentage, and your base input video is 1920x1080, your video overlay will be positioned 192 pixels from the left edge of the base input video's frame.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * To position the top edge of your video overlay along the top edge of the base input video's frame: Keep blank, or enter 0. To position the top edge of your video overlay down, relative to the top edge of the base input video's frame: Enter an integer representing the Unit type that you choose, either Pixels or Percentage. For example, when you enter 10 and choose Pixels, your video overlay will be positioned 10 pixels from the top edge of the base input video's frame. When you enter 10, choose Percentage, and your underlying video is 1920x1080, your video overlay will be positioned 108 pixels from the top edge of the base input video's frame.
   * @public
   */
  YPosition?: number | undefined;
}

/**
 * To transcode only portions of your video overlay, include one input clip for each part of your video overlay that you want in your output.
 * @public
 */
export interface VideoOverlayInputClipping {
  /**
   * Specify the timecode of the last frame to include in your video overlay's clip. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Specify the timecode of the first frame to include in your video overlay's clip. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  StartTimecode?: string | undefined;
}

/**
 * Input settings for Video overlay. You can include one or more video overlays in sequence at different times that you specify.
 * @public
 */
export interface VideoOverlayInput {
  /**
   * Use Audio selectors to specify audio to use during your Video overlay. You can use multiple Audio selectors per Video overlay. When you include an Audio selector within a Video overlay, MediaConvert mutes any Audio selectors with the same name from the underlying input. For example, if your underlying input has Audio selector 1 and Audio selector 2, and your Video overlay only has Audio selector 1, then MediaConvert replaces all audio for Audio selector 1 during the Video overlay. To replace all audio for all Audio selectors from the underlying input by using a single Audio selector in your overlay, set DefaultSelection to DEFAULT (Check \"Use as default\" in the MediaConvert console).
   * @public
   */
  AudioSelectors?: Record<string, AudioSelector> | undefined;

  /**
   * Specify the input file S3, HTTP, or HTTPS URL for your video overlay.
   * To specify one or more Transitions for your base input video instead: Leave blank.
   * @public
   */
  FileInput?: string | undefined;

  /**
   * Specify one or more clips to use from your video overlay. When you include an input clip, you must also specify its start timecode, end timecode, or both start and end timecode.
   * @public
   */
  InputClippings?: VideoOverlayInputClipping[] | undefined;

  /**
   * Specify the timecode source for your video overlay input clips. To use the timecode present in your video overlay: Choose Embedded. To use a zerobased timecode: Choose Start at 0. To choose a timecode: Choose Specified start. When you do, enter the starting timecode in Start timecode. If you don't specify a value for Timecode source, MediaConvert uses Embedded by default.
   * @public
   */
  TimecodeSource?: InputTimecodeSource | undefined;

  /**
   * Specify the starting timecode for this video overlay. To use this setting, you must set Timecode source to Specified start.
   * @public
   */
  TimecodeStart?: string | undefined;
}

/**
 * Specify one or more Transitions for your video overlay. Use Transitions to reposition or resize your overlay over time. To use the same position and size for the duration of your video overlay: Leave blank. To specify a Transition: Enter a value for Start timecode, End Timecode, X Position, Y Position, Width, Height, or Opacity
 * @public
 */
export interface VideoOverlayTransition {
  /**
   * Specify the ending position for this transition, relative to the base input video's frame. Your video overlay will move smoothly to this position, beginning at this transition's Start timecode and ending at this transition's End timecode.
   * @public
   */
  EndPosition?: VideoOverlayPosition | undefined;

  /**
   * Specify the timecode for when this transition ends. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Specify the timecode for when this transition begins. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for Timecode source.
   * @public
   */
  StartTimecode?: string | undefined;
}

/**
 * Overlay one or more videos on top of your input video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-overlays.html
 * @public
 */
export interface VideoOverlay {
  /**
   * Specify a rectangle of content to crop and use from your video overlay's input video. When you do, MediaConvert uses the cropped dimensions that you specify under X offset, Y offset, Width, and Height.
   * @public
   */
  Crop?: VideoOverlayCrop | undefined;

  /**
   * Enter the end timecode in the base input video for this overlay. Your overlay will be active through this frame. To display your video overlay for the duration of the base input video: Leave blank. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS isthe second, and FF is the frame number. When entering this value, take into account your choice for the base input video's timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your overlay to end ten minutes into the video, enter 01:10:00:00.
   * @public
   */
  EndTimecode?: string | undefined;

  /**
   * Specify the Initial position of your video overlay. To specify the Initial position of your video overlay, including distance from the left or top edge of the base input video's frame, or size: Enter a value for X position, Y position, Width, or Height. To use the full frame of the base input video: Leave blank.
   * @public
   */
  InitialPosition?: VideoOverlayPosition | undefined;

  /**
   * Input settings for Video overlay. You can include one or more video overlays in sequence at different times that you specify.
   * @public
   */
  Input?: VideoOverlayInput | undefined;

  /**
   * Specify whether your video overlay repeats or plays only once. To repeat your video overlay on a loop: Keep the default value, Repeat. Your overlay will repeat for the duration of the base input video. To playback your video overlay only once: Choose Once. With either option, you can end playback at a time that you specify by entering a value for End timecode.
   * @public
   */
  Playback?: VideoOverlayPlayBackMode | undefined;

  /**
   * Enter the start timecode in the base input video for this overlay. Your overlay will be active starting with this frame. To display your video overlay starting at the beginning of the base input video: Leave blank. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When entering this value, take into account your choice for the base input video's timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your overlay to begin five minutes into the video, enter 01:05:00:00.
   * @public
   */
  StartTimecode?: string | undefined;

  /**
   * Specify one or more transitions for your video overlay. Use Transitions to reposition or resize your overlay over time. To use the same position and size for the duration of your video overlay: Leave blank. To specify a Transition: Enter a value for Start timecode, End Timecode, X Position, Y Position, Width, or Height.
   * @public
   */
  Transitions?: VideoOverlayTransition[] | undefined;
}

/**
 * Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator.
 * @public
 */
export interface Hdr10Metadata {
  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  BluePrimaryX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  BluePrimaryY?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  GreenPrimaryX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  GreenPrimaryY?: number | undefined;

  /**
   * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   * @public
   */
  MaxContentLightLevel?: number | undefined;

  /**
   * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   * @public
   */
  MaxFrameAverageLightLevel?: number | undefined;

  /**
   * Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.
   * @public
   */
  MaxLuminance?: number | undefined;

  /**
   * Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter
   * @public
   */
  MinLuminance?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  RedPrimaryX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  RedPrimaryY?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  WhitePointX?: number | undefined;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   * @public
   */
  WhitePointY?: number | undefined;
}

/**
 * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
 * @public
 */
export interface VideoSelector {
  /**
   * Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.
   * @public
   */
  AlphaBehavior?: AlphaBehavior | undefined;

  /**
   * If your input video has accurate color space metadata, or if you don't know about color space: Keep the default value, Follow. MediaConvert will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or has missing metadata: Specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate: Choose Force HDR 10. Specify correct values in the input HDR 10 metadata settings. For more information about HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. When you specify an input color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:
   *  * HDR 10: BT.2020, PQ, BT.2020 non-constant
   *  * HLG 2020: BT.2020, HLG, BT.2020 non-constant
   *  * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709
   *  * P3D65 (SDR): Display P3, sRGB, BT.709
   *  * P3D65 (HDR): Display P3, PQ, BT.709
   * @public
   */
  ColorSpace?: ColorSpace | undefined;

  /**
   * There are two sources for color metadata, the input file and the job input settings Color space and HDR master display information settings. The Color space usage setting determines which takes precedence. Choose Force to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.
   * @public
   */
  ColorSpaceUsage?: ColorSpaceUsage | undefined;

  /**
   * Set Embedded timecode override to Use MDPM when your AVCHD input contains timecode tag data in the Modified Digital Video Pack Metadata. When you do, we recommend you also set Timecode source to Embedded. Leave Embedded timecode override blank, or set to None, when your input does not contain MDPM timecode.
   * @public
   */
  EmbeddedTimecodeOverride?: EmbeddedTimecodeOverride | undefined;

  /**
   * Use these settings to provide HDR 10 metadata that is missing or inaccurate in your input video. Appropriate values vary depending on the input video and must be provided by a color grader. The color grader generates these values during the HDR 10 mastering process. The valid range for each of these settings is 0 to 50,000. Each increment represents 0.00002 in CIE1931 color coordinate. Related settings - When you specify these values, you must also set Color space to HDR 10. To specify whether the the values you specify here take precedence over the values in the metadata of your input file, set Color space usage. To specify whether color metadata is included in an output, set Color metadata. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   * @public
   */
  Hdr10Metadata?: Hdr10Metadata | undefined;

  /**
   * Specify the maximum mastering display luminance. Enter an integer from 0 to 2147483647, in units of 0.0001 nits. For example, enter 10000000 for 1000 nits.
   * @public
   */
  MaxLuminance?: number | undefined;

  /**
   * Use this setting if your input has video and audio durations that don't align, and your output or player has strict alignment requirements. Examples: Input audio track has a delayed start. Input video track ends before audio ends. When you set Pad video to Black, MediaConvert generates black video frames so that output video and audio durations match. Black video frames are added at the beginning or end, depending on your input. To keep the default behavior and not generate black video, set Pad video to Disabled or leave blank.
   * @public
   */
  PadVideo?: PadVideo | undefined;

  /**
   * Use PID to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
   * @public
   */
  Pid?: number | undefined;

  /**
   * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Use Rotate to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.
   * @public
   */
  Rotate?: InputRotate | undefined;

  /**
   * If the sample range metadata in your input video is accurate, or if you don't know about sample range, keep the default value, Follow, for this setting. When you do, the service automatically detects your input sample range. If your input video has metadata indicating the wrong sample range, specify the accurate sample range here. When you do, MediaConvert ignores any sample range information in the input metadata. Regardless of whether MediaConvert uses the input sample range or the sample range that you specify, MediaConvert uses the sample range for transcoding and also writes it to the output metadata.
   * @public
   */
  SampleRange?: InputSampleRange | undefined;

  /**
   * Choose the video selector type for your HLS input. Use to specify which video rendition MediaConvert uses from your HLS input. To have MediaConvert automatically use the highest bitrate rendition from your HLS input: Keep the default value, Auto. To manually specify a rendition: Choose Stream. Then enter the unique stream number in the Streams array, starting at 1, corresponding to the stream order in the manifest.
   * @public
   */
  SelectorType?: VideoSelectorType | undefined;

  /**
   * Specify one or more video streams for MediaConvert to use from your HLS input. Enter an integer corresponding to the stream number, with the first stream in your HLS multivariant playlist starting at 1.For re-encoding workflows, MediaConvert uses the video stream that you select with the highest bitrate as the input.For video passthrough workflows, you specify whether to passthrough a single video stream or multiple video streams under Video selector source in the output video encoding settings.
   * @public
   */
  Streams?: number[] | undefined;
}

/**
 * Use inputs to define the source files used in your transcoding job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/specify-input-settings.html. You can use multiple video inputs to do input stitching. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html
 * @public
 */
export interface Input {
  /**
   * Use to remove noise, blocking, blurriness, or ringing from your input as a pre-filter step before encoding. The Advanced input filter removes more types of compression artifacts and is an improvement when compared to basic Deblock and Denoise filters. To remove video compression artifacts from your input and improve the video quality: Choose Enabled. Additionally, this filter can help increase the video quality of your output relative to its bitrate, since noisy inputs are more complex and require more bits to encode. To help restore loss of detail after applying the filter, you can optionally add texture or sharpening as an additional step. Jobs that use this feature incur pro-tier pricing. To not apply advanced input filtering: Choose Disabled. Note that you can still apply basic filtering with Deblock and Denoise.
   * @public
   */
  AdvancedInputFilter?: AdvancedInputFilter | undefined;

  /**
   * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
   * @public
   */
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings | undefined;

  /**
   * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
   * @public
   */
  AudioSelectorGroups?: Record<string, AudioSelectorGroup> | undefined;

  /**
   * Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   * @public
   */
  AudioSelectors?: Record<string, AudioSelector> | undefined;

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input.
   * @public
   */
  CaptionSelectors?: Record<string, CaptionSelector> | undefined;

  /**
   * Use Cropping selection to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection.
   * @public
   */
  Crop?: Rectangle | undefined;

  /**
   * Enable Deblock to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   * @public
   */
  DeblockFilter?: InputDeblockFilter | undefined;

  /**
   * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
   * @public
   */
  DecryptionSettings?: InputDecryptionSettings | undefined;

  /**
   * Enable Denoise to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   * @public
   */
  DenoiseFilter?: InputDenoiseFilter | undefined;

  /**
   * Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   * @public
   */
  DolbyVisionMetadataXml?: string | undefined;

  /**
   * Use Dynamic audio selectors when you do not know the track layout of your source when you submit your job, but want to select multiple audio tracks. When you include an audio track in your output and specify this Dynamic audio selector as the Audio source, MediaConvert creates an output audio track for each dynamically selected track. Note that when you include a Dynamic audio selector for two or more inputs, each input must have the same number of audio tracks and audio channels.
   * @public
   */
  DynamicAudioSelectors?: Record<string, DynamicAudioSelector> | undefined;

  /**
   * Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. For standard inputs, provide the path to your S3, HTTP, or HTTPS source file. For example, s3://amzn-s3-demo-bucket/input.mp4 for an Amazon S3 input or https://example.com/input.mp4 for an HTTPS input. For TAMS inputs, specify the HTTPS endpoint of your TAMS server. For example, https://tams-server.example.com . When you do, also specify Source ID, Timerange, GAP handling, and the Authorization connection ARN under TAMS settings. (Don't include these parameters in the Input file URL.) For IMF inputs, specify your input by providing the path to your CPL. For example, s3://amzn-s3-demo-bucket/vf/cpl.xml . If the CPL is in an incomplete IMP, make sure to use Supplemental IMPsto specify any supplemental IMPs that contain assets referenced by the CPL.
   * @public
   */
  FileInput?: string | undefined;

  /**
   * Specify whether to apply input filtering to improve the video quality of your input. To apply filtering depending on your input type and quality: Choose Auto. To apply no filtering: Choose Disable. To apply filtering regardless of your input type and quality: Choose Force. When you do, you must also specify a value for Filter strength.
   * @public
   */
  FilterEnable?: InputFilterEnable | undefined;

  /**
   * Specify the strength of the input filter. To apply an automatic amount of filtering based the compression artifacts measured in your input: We recommend that you leave Filter strength blank and set Filter enable to Auto. To manually apply filtering: Enter a value from 1 to 5, where 1 is the least amount of filtering and 5 is the most. The value that you enter applies to the strength of the Deblock or Denoise filters, or to the strength of the Advanced input filter.
   * @public
   */
  FilterStrength?: number | undefined;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   * @public
   */
  ImageInserter?: ImageInserter | undefined;

  /**
   * Contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   * @public
   */
  InputClippings?: InputClipping[] | undefined;

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto. Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   * @public
   */
  InputScanType?: InputScanType | undefined;

  /**
   * Use Selection placement to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement. If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD to Respond. If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior.
   * @public
   */
  Position?: Rectangle | undefined;

  /**
   * Use Program to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Set PSI control for transport stream inputs to specify which data the demux process to scans.
   * * Ignore PSI - Scan all PIDs for audio and video.
   * * Use PSI - Scan only PSI data.
   * @public
   */
  PsiControl?: InputPsiControl | undefined;

  /**
   * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
   * @public
   */
  SupplementalImps?: string[] | undefined;

  /**
   * Specify a Time Addressable Media Store (TAMS) server as an input source. TAMS is an open-source API specification that provides access to time-segmented media content. Use TAMS to retrieve specific time ranges from live or archived media streams. When you specify TAMS settings, MediaConvert connects to your TAMS server, retrieves the media segments for your specified time range, and processes them as a single input. This enables workflows like extracting clips from live streams or processing specific portions of archived content. To use TAMS, you must: 1. Have access to a TAMS-compliant server 2. Specify the server URL in the Input file URL field 3. Provide the required SourceId and Timerange parameters 4. Configure authentication, if your TAMS server requires it
   * @public
   */
  TamsSettings?: InputTamsSettings | undefined;

  /**
   * Use this Timecode source setting, located under the input settings, to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded to use the timecodes in your input video. Choose Start at zero to start the first frame at zero. Choose Specified start to start the first frame at the timecode that you specify in the setting Start timecode. If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeSource?: InputTimecodeSource | undefined;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings, to Specified start. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeStart?: string | undefined;

  /**
   * When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html
   * @public
   */
  VideoGenerator?: InputVideoGenerator | undefined;

  /**
   * Contains an array of video overlays.
   * @public
   */
  VideoOverlays?: VideoOverlay[] | undefined;

  /**
   * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
   * @public
   */
  VideoSelector?: VideoSelector | undefined;
}

/**
 * Specified video input in a template.
 * @public
 */
export interface InputTemplate {
  /**
   * Use to remove noise, blocking, blurriness, or ringing from your input as a pre-filter step before encoding. The Advanced input filter removes more types of compression artifacts and is an improvement when compared to basic Deblock and Denoise filters. To remove video compression artifacts from your input and improve the video quality: Choose Enabled. Additionally, this filter can help increase the video quality of your output relative to its bitrate, since noisy inputs are more complex and require more bits to encode. To help restore loss of detail after applying the filter, you can optionally add texture or sharpening as an additional step. Jobs that use this feature incur pro-tier pricing. To not apply advanced input filtering: Choose Disabled. Note that you can still apply basic filtering with Deblock and Denoise.
   * @public
   */
  AdvancedInputFilter?: AdvancedInputFilter | undefined;

  /**
   * Optional settings for Advanced input filter when you set Advanced input filter to Enabled.
   * @public
   */
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings | undefined;

  /**
   * Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.
   * @public
   */
  AudioSelectorGroups?: Record<string, AudioSelectorGroup> | undefined;

  /**
   * Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.
   * @public
   */
  AudioSelectors?: Record<string, AudioSelector> | undefined;

  /**
   * Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input.
   * @public
   */
  CaptionSelectors?: Record<string, CaptionSelector> | undefined;

  /**
   * Use Cropping selection to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection.
   * @public
   */
  Crop?: Rectangle | undefined;

  /**
   * Enable Deblock to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.
   * @public
   */
  DeblockFilter?: InputDeblockFilter | undefined;

  /**
   * Enable Denoise to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   * @public
   */
  DenoiseFilter?: InputDenoiseFilter | undefined;

  /**
   * Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   * @public
   */
  DolbyVisionMetadataXml?: string | undefined;

  /**
   * Use Dynamic audio selectors when you do not know the track layout of your source when you submit your job, but want to select multiple audio tracks. When you include an audio track in your output and specify this Dynamic audio selector as the Audio source, MediaConvert creates an output audio track for each dynamically selected track. Note that when you include a Dynamic audio selector for two or more inputs, each input must have the same number of audio tracks and audio channels.
   * @public
   */
  DynamicAudioSelectors?: Record<string, DynamicAudioSelector> | undefined;

  /**
   * Specify whether to apply input filtering to improve the video quality of your input. To apply filtering depending on your input type and quality: Choose Auto. To apply no filtering: Choose Disable. To apply filtering regardless of your input type and quality: Choose Force. When you do, you must also specify a value for Filter strength.
   * @public
   */
  FilterEnable?: InputFilterEnable | undefined;

  /**
   * Specify the strength of the input filter. To apply an automatic amount of filtering based the compression artifacts measured in your input: We recommend that you leave Filter strength blank and set Filter enable to Auto. To manually apply filtering: Enter a value from 1 to 5, where 1 is the least amount of filtering and 5 is the most. The value that you enter applies to the strength of the Deblock or Denoise filters, or to the strength of the Advanced input filter.
   * @public
   */
  FilterStrength?: number | undefined;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   * @public
   */
  ImageInserter?: ImageInserter | undefined;

  /**
   * Contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   * @public
   */
  InputClippings?: InputClipping[] | undefined;

  /**
   * When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto. Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.
   * @public
   */
  InputScanType?: InputScanType | undefined;

  /**
   * Use Selection placement to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement. If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD to Respond. If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior.
   * @public
   */
  Position?: Rectangle | undefined;

  /**
   * Use Program to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Set PSI control for transport stream inputs to specify which data the demux process to scans.
   * * Ignore PSI - Scan all PIDs for audio and video.
   * * Use PSI - Scan only PSI data.
   * @public
   */
  PsiControl?: InputPsiControl | undefined;

  /**
   * Use this Timecode source setting, located under the input settings, to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded to use the timecodes in your input video. Choose Start at zero to start the first frame at zero. Choose Specified start to start the first frame at the timecode that you specify in the setting Start timecode. If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeSource?: InputTimecodeSource | undefined;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings, to Specified start. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   * @public
   */
  TimecodeStart?: string | undefined;

  /**
   * Contains an array of video overlays.
   * @public
   */
  VideoOverlays?: VideoOverlay[] | undefined;

  /**
   * Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.
   * @public
   */
  VideoSelector?: VideoSelector | undefined;
}

/**
 * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
 * @public
 */
export interface AccelerationSettings {
  /**
   * Specify the conditions when the service will run your job with accelerated transcoding.
   * @public
   */
  Mode: AccelerationMode | undefined;
}

/**
 * Provides messages from the service about jobs that you have already successfully submitted.
 * @public
 */
export interface JobMessages {
  /**
   * List of messages that are informational only and don't indicate a problem with your job.
   * @public
   */
  Info?: string[] | undefined;

  /**
   * List of messages that warn about conditions that might cause your job not to run or to fail.
   * @public
   */
  Warning?: string[] | undefined;
}

/**
 * Contains details about the output's video stream
 * @public
 */
export interface VideoDetail {
  /**
   * Height in pixels for the output
   * @public
   */
  HeightInPx?: number | undefined;

  /**
   * Width in pixels for the output
   * @public
   */
  WidthInPx?: number | undefined;
}

/**
 * Details regarding output
 * @public
 */
export interface OutputDetail {
  /**
   * Duration in milliseconds
   * @public
   */
  DurationInMs?: number | undefined;

  /**
   * Contains details about the output's video stream
   * @public
   */
  VideoDetails?: VideoDetail | undefined;
}

/**
 * Contains details about the output groups specified in the job settings.
 * @public
 */
export interface OutputGroupDetail {
  /**
   * Details about the output
   * @public
   */
  OutputDetails?: OutputDetail[] | undefined;
}

/**
 * Description of the source and destination queues between which the job has moved, along with the timestamp of the move
 * @public
 */
export interface QueueTransition {
  /**
   * The queue that the job was on after the transition.
   * @public
   */
  DestinationQueue?: string | undefined;

  /**
   * The queue that the job was on before the transition.
   * @public
   */
  SourceQueue?: string | undefined;

  /**
   * The time, in Unix epoch format, that the job moved from the source queue to the destination queue.
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Use ad avail blanking settings to specify your output content during SCTE-35 triggered ad avails. You can blank your video or overlay it with an image. MediaConvert also removes any audio and embedded captions during the ad avail. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ad-avail-blanking.html.
 * @public
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   * @public
   */
  AvailBlankingImage?: string | undefined;
}

/**
 * ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025.
 * @public
 */
export interface EsamManifestConfirmConditionNotification {
  /**
   * Provide your ESAM ManifestConfirmConditionNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the Manifest Conditioning instructions in the message that you supply.
   * @public
   */
  MccXml?: string | undefined;
}

/**
 * ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025.
 * @public
 */
export interface EsamSignalProcessingNotification {
  /**
   * Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the signal processing instructions in the message that you supply. For your MPEG2-TS file outputs, if you want the service to place SCTE-35 markers at the insertion points you specify in the XML document, you must also enable SCTE-35 ESAM. Note that you can either specify an ESAM XML document or enable SCTE-35 passthrough. You can't do both.
   * @public
   */
  SccXml?: string | undefined;
}

/**
 * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
 * @public
 */
export interface EsamSettings {
  /**
   * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML.
   * @public
   */
  ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification | undefined;

  /**
   * Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.
   * @public
   */
  ResponseSignalPreroll?: number | undefined;

  /**
   * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML.
   * @public
   */
  SignalProcessingNotification?: EsamSignalProcessingNotification | undefined;
}

/**
 * If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.
 * @public
 */
export interface ExtendedDataServices {
  /**
   * The action to take on copy and redistribution control XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.
   * @public
   */
  CopyProtectionAction?: CopyProtectionAction | undefined;

  /**
   * The action to take on content advisory XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.
   * @public
   */
  VchipAction?: VchipAction | undefined;
}

/**
 * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
 * @public
 */
export interface KantarWatermarkSettings {
  /**
   * Provide an audio channel name from your Kantar audio license.
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * Specify a unique identifier for Kantar to use for this piece of content.
   * @public
   */
  ContentReference?: string | undefined;

  /**
   * Provide the name of the AWS Secrets Manager secret where your Kantar credentials are stored. Note that your MediaConvert service role must provide access to this secret. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/granting-permissions-for-mediaconvert-to-access-secrets-manager-secret.html. For instructions on creating a secret, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_basic.html, in the AWS Secrets Manager User Guide.
   * @public
   */
  CredentialsSecretName?: string | undefined;

  /**
   * Optional. Specify an offset, in whole seconds, from the start of your output and the beginning of the watermarking. When you don't specify an offset, Kantar defaults to zero.
   * @public
   */
  FileOffset?: number | undefined;

  /**
   * Provide your Kantar license ID number. You should get this number from Kantar.
   * @public
   */
  KantarLicenseId?: number | undefined;

  /**
   * Provide the HTTPS endpoint to the Kantar server. You should get this endpoint from Kantar.
   * @public
   */
  KantarServerUrl?: string | undefined;

  /**
   * Optional. Specify the Amazon S3 bucket where you want MediaConvert to store your Kantar watermark XML logs. When you don't specify a bucket, MediaConvert doesn't save these logs. Note that your MediaConvert service role must provide access to this location. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * You can optionally use this field to specify the first timestamp that Kantar embeds during watermarking. Kantar suggests that you be very cautious when using this Kantar feature, and that you use it only on channels that are managed specifically for use with this feature by your Audience Measurement Operator. For more information about this feature, contact Kantar technical support.
   * @public
   */
  Metadata3?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata4?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata5?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata6?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata7?: string | undefined;

  /**
   * Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.
   * @public
   */
  Metadata8?: string | undefined;
}

/**
 * For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video.
 * @public
 */
export interface MotionImageInsertionFramerate {
  /**
   * The bottom of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 1.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * The top of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 24.
   * @public
   */
  FramerateNumerator?: number | undefined;
}

/**
 * Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.
 * @public
 */
export interface MotionImageInsertionOffset {
  /**
   * Set the distance, in pixels, between the overlay and the left edge of the video frame.
   * @public
   */
  ImageX?: number | undefined;

  /**
   * Set the distance, in pixels, between the overlay and the top edge of the video frame.
   * @public
   */
  ImageY?: number | undefined;
}

/**
 * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
 * @public
 */
export interface MotionImageInserter {
  /**
   * If your motion graphic asset is a .mov file, keep this setting unspecified. If your motion graphic asset is a series of .png files, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. Make sure that the number of images in your series matches the frame rate and your intended overlay duration. For example, if you want a 30-second overlay at 30 fps, you should have 900 .png images. This overlay frame rate doesn't need to match the frame rate of the underlying video.
   * @public
   */
  Framerate?: MotionImageInsertionFramerate | undefined;

  /**
   * Specify the .mov file or series of .png files that you want to overlay on your video. For .png files, provide the file name of the first file in the series. Make sure that the names of the .png files end with sequential numbers that specify the order that they are played in. For example, overlay_000.png, overlay_001.png, overlay_002.png, and so on. The sequence must start at zero, and each image file name must have the same number of digits. Pad your initial file names with enough zeros to complete the sequence. For example, if the first image is overlay_0.png, there can be only 10 images in the sequence, with the last image being overlay_9.png. But if the first image is overlay_00.png, there can be 100 images in the sequence.
   * @public
   */
  Input?: string | undefined;

  /**
   * Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.
   * @public
   */
  InsertionMode?: MotionImageInsertionMode | undefined;

  /**
   * Use Offset to specify the placement of your motion graphic overlay on the video frame. Specify in pixels, from the upper-left corner of the frame. If you don't specify an offset, the service scales your overlay to the full size of the frame. Otherwise, the service inserts the overlay at its native resolution and scales the size up or down with any video scaling.
   * @public
   */
  Offset?: MotionImageInsertionOffset | undefined;

  /**
   * Specify whether your motion graphic overlay repeats on a loop or plays only once.
   * @public
   */
  Playback?: MotionImagePlayback | undefined;

  /**
   * Specify when the motion overlay begins. Use timecode format (HH:MM:SS:FF or HH:MM:SS;FF). Make sure that the timecode you provide here takes into account how you have set up your timecode configuration under both job settings and input settings. The simplest way to do that is to set both to start at 0. If you need to set up your job to follow timecodes embedded in your source that don't start at zero, make sure that you specify a start time that is after the first embedded timecode. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-timecode.html
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration, MediaConvert enables PCM to ID3 tagging for all outputs in the job.
 * @public
 */
export interface NielsenConfiguration {
  /**
   * Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.
   * @public
   */
  BreakoutCode?: number | undefined;

  /**
   * Use Distributor ID to specify the distributor ID that is assigned to your organization by Nielsen.
   * @public
   */
  DistributorId?: string | undefined;
}

/**
 * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 6.0.13 Nielsen NLM Watermark Engine Version 1.3.3 Nielsen Watermark Authenticator [SID_TIC] Version [7.0.0]
 * @public
 */
export interface NielsenNonLinearWatermarkSettings {
  /**
   * Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW, you must provide a value for the setting SID. When you choose CBET, you must provide a value for the setting CSID. When you choose NAES 2, NW, and CBET, you must provide values for both of these settings.
   * @public
   */
  ActiveWatermarkProcess?: NielsenActiveWatermarkProcessType | undefined;

  /**
   * Optional. Use this setting when you want the service to include an ADI file in the Nielsen metadata .zip file. To provide an ADI file, store it in Amazon S3 and provide a URL to it here. The URL should be in the following format: S3://bucket/path/ADI-file. For more information about the metadata .zip file, see the setting Metadata destination.
   * @public
   */
  AdiFilename?: string | undefined;

  /**
   * Use the asset ID that you provide to Nielsen to uniquely identify this asset. Required for all Nielsen non-linear watermarking.
   * @public
   */
  AssetId?: string | undefined;

  /**
   * Use the asset name that you provide to Nielsen for this asset. Required for all Nielsen non-linear watermarking.
   * @public
   */
  AssetName?: string | undefined;

  /**
   * Use the CSID that Nielsen provides to you. This CBET source ID should be unique to your Nielsen account but common to all of your output assets that have CBET watermarking. Required when you choose a value for the setting Watermark types that includes CBET.
   * @public
   */
  CbetSourceId?: string | undefined;

  /**
   * Optional. If this asset uses an episode ID with Nielsen, provide it here.
   * @public
   */
  EpisodeId?: string | undefined;

  /**
   * Specify the Amazon S3 location where you want MediaConvert to save your Nielsen non-linear metadata .zip file. This Amazon S3 bucket must be in the same Region as the one where you do your MediaConvert transcoding. If you want to include an ADI file in this .zip file, use the setting ADI file to specify it. MediaConvert delivers the Nielsen metadata .zip files only to your metadata destination Amazon S3 bucket. It doesn't deliver the .zip files to Nielsen. You are responsible for delivering the metadata .zip files to Nielsen.
   * @public
   */
  MetadataDestination?: string | undefined;

  /**
   * Use the SID that Nielsen provides to you. This source ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking. This ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking.
   * @public
   */
  SourceId?: number | undefined;

  /**
   * Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked, the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already have non-linear Nielsen watermarks.
   * @public
   */
  SourceWatermarkStatus?: NielsenSourceWatermarkStatusType | undefined;

  /**
   * Specify the endpoint for the TIC server that you have deployed and configured in the AWS Cloud. Required for all Nielsen non-linear watermarking. MediaConvert can't connect directly to a TIC server. Instead, you must use API Gateway to provide a RESTful interface between MediaConvert and a TIC server that you deploy in your AWS account. For more information on deploying a TIC server in your AWS account and the required API Gateway, contact Nielsen support.
   * @public
   */
  TicServerUrl?: string | undefined;

  /**
   * To create assets that have the same TIC values in each audio track, keep the default value Share TICs. To create assets that have unique TIC values for each audio track, choose Use unique TICs.
   * @public
   */
  UniqueTicPerAudioTrack?: NielsenUniqueTicPerAudioTrackType | undefined;
}

/**
 * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
 * @public
 */
export interface AutomatedAbrSettings {
  /**
   * Specify the maximum average bitrate for MediaConvert to use in your automated ABR stack. If you don't specify a value, MediaConvert uses 8,000,000 (8 mb/s) by default. The average bitrate of your highest-quality rendition will be equal to or below this value, depending on the quality, complexity, and resolution of your content. Note that the instantaneous maximum bitrate may vary above the value that you specify.
   * @public
   */
  MaxAbrBitrate?: number | undefined;

  /**
   * Optional. Specify the QVBR quality level to use for all renditions in your automated ABR stack. To have MediaConvert automatically determine the quality level: Leave blank. To manually specify a quality level: Enter a value from 1 to 10. MediaConvert will use a quality level up to the value that you specify, depending on your source. For more information about QVBR quality levels, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/qvbr-guidelines.html
   * @public
   */
  MaxQualityLevel?: number | undefined;

  /**
   * Optional. The maximum number of renditions that MediaConvert will create in your automated ABR stack. The number of renditions is determined automatically, based on analysis of each job, but will never exceed this limit. When you set this to Auto in the console, which is equivalent to excluding it from your JSON job specification, MediaConvert defaults to a limit of 15.
   * @public
   */
  MaxRenditions?: number | undefined;

  /**
   * Specify the minimum average bitrate for MediaConvert to use in your automated ABR stack. If you don't specify a value, MediaConvert uses 600,000 (600 kb/s) by default. The average bitrate of your lowest-quality rendition will be near this value. Note that the instantaneous minimum bitrate may vary below the value that you specify.
   * @public
   */
  MinAbrBitrate?: number | undefined;

  /**
   * Optional. Use Automated ABR rules to specify restrictions for the rendition sizes MediaConvert will create in your ABR stack. You can use these rules if your ABR workflow has specific rendition size requirements, but you still want MediaConvert to optimize for video quality and overall file size.
   * @public
   */
  Rules?: AutomatedAbrRule[] | undefined;
}

/**
 * Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
 * @public
 */
export interface AutomatedEncodingSettings {
  /**
   * Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.
   * @public
   */
  AbrSettings?: AutomatedAbrSettings | undefined;
}

/**
 * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
 * @public
 */
export interface S3DestinationAccessControl {
  /**
   * Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.
   * @public
   */
  CannedAcl?: S3ObjectCannedAcl | undefined;
}

/**
 * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
 * @public
 */
export interface S3EncryptionSettings {
  /**
   * Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3. If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS. By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting KMS ARN.
   * @public
   */
  EncryptionType?: S3ServerSideEncryptionType | undefined;

  /**
   * Optionally, specify the encryption context that you want to use alongside your KMS key. AWS KMS uses this encryption context as additional authenticated data (AAD) to support authenticated encryption. This value must be a base64-encoded UTF-8 string holding JSON which represents a string-string map. To use this setting, you must also set Server-side encryption to AWS KMS. For more information about encryption context, see: https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context.
   * @public
   */
  KmsEncryptionContext?: string | undefined;

  /**
   * Optionally, specify the customer master key (CMK) that you want to use to encrypt the data key that AWS uses to encrypt your output content. Enter the Amazon Resource Name (ARN) of the CMK. To use this setting, you must also set Server-side encryption to AWS KMS. If you set Server-side encryption to AWS KMS but don't specify a CMK here, AWS uses the AWS managed CMK associated with Amazon S3.
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Settings associated with S3 destination
 * @public
 */
export interface S3DestinationSettings {
  /**
   * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
   * @public
   */
  AccessControl?: S3DestinationAccessControl | undefined;

  /**
   * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
   * @public
   */
  Encryption?: S3EncryptionSettings | undefined;

  /**
   * Specify the S3 storage class to use for this output. To use your destination's default storage class: Keep the default value, Not set. For more information about S3 storage classes, see https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html
   * @public
   */
  StorageClass?: S3StorageClass | undefined;
}

/**
 * Settings associated with the destination. Will vary based on the type of destination
 * @public
 */
export interface DestinationSettings {
  /**
   * Settings associated with S3 destination
   * @public
   */
  S3Settings?: S3DestinationSettings | undefined;
}

/**
 * Specify the SPEKE version, either v1.0 or v2.0, that MediaConvert uses when encrypting your output. For more information, see: https://docs.aws.amazon.com/speke/latest/documentation/speke-api-specification.html To use SPEKE v1.0: Leave blank. To use SPEKE v2.0: Specify a SPEKE v2.0 video preset and a SPEKE v2.0 audio preset.
 * @public
 */
export interface EncryptionContractConfiguration {
  /**
   * Specify which SPEKE version 2.0 audio preset MediaConvert uses to request content keys from your SPEKE server. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/drm-content-speke-v2-presets.html To encrypt to your audio outputs, choose from the following: Audio preset 1, Audio preset 2, or Audio preset 3. To encrypt your audio outputs, using the same content key for both your audio and video outputs: Choose Shared. When you do, you must also set SPEKE v2.0 video preset to Shared. To not encrypt your audio outputs: Choose Unencrypted. When you do, to encrypt your video outputs, you must also specify a SPEKE v2.0 video preset (other than Shared or Unencrypted).
   * @public
   */
  SpekeAudioPreset?: PresetSpeke20Audio | undefined;

  /**
   * Specify which SPEKE version 2.0 video preset MediaConvert uses to request content keys from your SPEKE server. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/drm-content-speke-v2-presets.html To encrypt to your video outputs, choose from the following: Video preset 1, Video preset 2, Video preset 3, Video preset 4, Video preset 5, Video preset 6, Video preset 7, or Video preset 8. To encrypt your video outputs, using the same content key for both your video and audio outputs: Choose Shared. When you do, you must also set SPEKE v2.0 audio preset to Shared. To not encrypt your video outputs: Choose Unencrypted. When you do, to encrypt your audio outputs, you must also specify a SPEKE v2.0 audio preset (other than Shared or Unencrypted).
   * @public
   */
  SpekeVideoPreset?: PresetSpeke20Video | undefined;
}

/**
 * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
 * @public
 */
export interface SpekeKeyProviderCmaf {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Specify the DRM system IDs that you want signaled in the DASH manifest that MediaConvert creates as part of this CMAF package. The DASH manifest can currently signal up to three system IDs. For more information, see https://dashif.org/identifiers/content_protection/.
   * @public
   */
  DashSignaledSystemIds?: string[] | undefined;

  /**
   * Specify the SPEKE version, either v1.0 or v2.0, that MediaConvert uses when encrypting your output. For more information, see: https://docs.aws.amazon.com/speke/latest/documentation/speke-api-specification.html To use SPEKE v1.0: Leave blank. To use SPEKE v2.0: Specify a SPEKE v2.0 video preset and a SPEKE v2.0 audio preset.
   * @public
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration | undefined;

  /**
   * Specify up to 3 DRM system IDs that you want signaled in the HLS manifest that MediaConvert creates as part of this CMAF package. For more information, see https://dashif.org/identifiers/content_protection/.
   * @public
   */
  HlsSignaledSystemIds?: string[] | undefined;

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   * @public
   */
  Url?: string | undefined;
}

/**
 * Use these settings to set up encryption with a static key provider.
 * @public
 */
export interface StaticKeyProvider {
  /**
   * Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.
   * @public
   */
  KeyFormat?: string | undefined;

  /**
   * Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   * @public
   */
  KeyFormatVersions?: string | undefined;

  /**
   * Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value.
   * @public
   */
  StaticKeyValue?: string | undefined;

  /**
   * Relates to DRM implementation. The location of the license server used for protecting content.
   * @public
   */
  Url?: string | undefined;
}

/**
 * Settings for CMAF encryption
 * @public
 */
export interface CmafEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample or AES_CTR.
   * @public
   */
  EncryptionMethod?: CmafEncryptionType | undefined;

  /**
   * When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.
   * @public
   */
  InitializationVectorInManifest?: CmafInitializationVectorInManifest | undefined;

  /**
   * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
   * @public
   */
  SpekeKeyProvider?: SpekeKeyProviderCmaf | undefined;

  /**
   * Use these settings to set up encryption with a static key provider.
   * @public
   */
  StaticKeyProvider?: StaticKeyProvider | undefined;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   * @public
   */
  Type?: CmafKeyProviderType | undefined;
}

/**
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 * @public
 */
export interface CmafImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   * @public
   */
  IntervalCadence?: CmafIntervalCadence | undefined;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   * @public
   */
  ThumbnailHeight?: number | undefined;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   * @public
   */
  ThumbnailInterval?: number | undefined;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   * @public
   */
  ThumbnailWidth?: number | undefined;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   * @public
   */
  TileWidth?: number | undefined;
}

/**
 * Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
 * @public
 */
export interface CmafGroupSettings {
  /**
   * By default, the service creates one top-level .m3u8 HLS manifest and one top -level .mpd DASH manifest for each CMAF output group in your job. These default manifests reference every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here. For each additional manifest that you specify, the service creates one HLS manifest and one DASH manifest.
   * @public
   */
  AdditionalManifests?: CmafAdditionalManifest[] | undefined;

  /**
   * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled and control caching in your video distribution set up. For example, use the Cache-Control http header.
   * @public
   */
  ClientCache?: CmafClientCache | undefined;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   * @public
   */
  CodecSpecification?: CmafCodecSpecification | undefined;

  /**
   * Specify whether MediaConvert generates I-frame only video segments for DASH trick play, also known as trick mode. When specified, the I-frame only video segments are included within an additional AdaptationSet in your DASH output manifest. To generate I-frame only video segments: Enter a name as a text string, up to 256 character long. This name is appended to the end of this output group's base filename, that you specify as part of your destination URI, and used for the I-frame only video segment files. You may also include format identifiers. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html#using-settings-variables-with-streaming-outputs To not generate I-frame only video segments: Leave blank.
   * @public
   */
  DashIFrameTrickPlayNameModifier?: string | undefined;

  /**
   * Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline for outputs that you also specify a Name modifier for: Keep the default value, Basic. Note that if you do not specify a name modifier for an output, MediaConvert will not write a SegmentTimeline for it. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct. To write a SegmentTimeline in each AdaptationSet: Choose Full.
   * @public
   */
  DashManifestStyle?: DashManifestStyle | undefined;

  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;

  /**
   * DRM settings.
   * @public
   */
  Encryption?: CmafEncryptionSettings | undefined;

  /**
   * Specify the length, in whole seconds, of the mp4 fragments. When you don't specify a value, MediaConvert defaults to 2. Related setting: Use Fragment length control to specify whether the encoder enforces this value strictly.
   * @public
   */
  FragmentLength?: number | undefined;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. When you enable Write HLS manifest, MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. When you enable Write DASH manifest, MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   * @public
   */
  ImageBasedTrickPlay?: CmafImageBasedTrickPlay | undefined;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   * @public
   */
  ImageBasedTrickPlaySettings?: CmafImageBasedTrickPlaySettings | undefined;

  /**
   * When set to GZIP, compresses HLS playlist.
   * @public
   */
  ManifestCompression?: CmafManifestCompression | undefined;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   * @public
   */
  ManifestDurationFormat?: CmafManifestDurationFormat | undefined;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   * @public
   */
  MinBufferTime?: number | undefined;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   * @public
   */
  MinFinalSegmentLength?: number | undefined;

  /**
   * Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.
   * @public
   */
  MpdManifestBandwidthType?: CmafMpdManifestBandwidthType | undefined;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile, the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand, the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control to Single file.
   * @public
   */
  MpdProfile?: CmafMpdProfile | undefined;

  /**
   * Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.
   * @public
   */
  PtsOffsetHandlingForBFrames?: CmafPtsOffsetHandlingForBFrames | undefined;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   * @public
   */
  SegmentControl?: CmafSegmentControl | undefined;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 10. Related settings: Use Segment length control to specify whether the encoder enforces this value strictly. Use Segment control to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * Specify how you want MediaConvert to determine segment lengths in this output group. To use the exact value that you specify under Segment length: Choose Exact. Note that this might result in additional I-frames in the output GOP. To create segment lengths that are a multiple of the GOP: Choose Multiple of GOP. MediaConvert will round up the segment lengths to match the next GOP boundary. To have MediaConvert automatically determine a segment duration that is a multiple of both the audio packets and the frame rates: Choose Match. When you do, also specify a target segment duration under Segment length. This is useful for some ad-insertion or segment replacement workflows. Note that Match has the following requirements: - Output containers: Include at least one video output and at least one audio output. Audio-only outputs are not supported. - Output frame rate: Follow source is not supported. - Multiple output frame rates: When you specify multiple outputs, we recommend they share a similar frame rate (as in X/3, X/2, X, or 2X). For example: 5, 15, 30 and 60. Or: 25 and 50. (Outputs must share an integer multiple.) - Output audio codec: Specify Advanced Audio Coding (AAC). - Output sample rate: Choose 48kHz.
   * @public
   */
  SegmentLengthControl?: CmafSegmentLengthControl | undefined;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   * @public
   */
  StreamInfResolution?: CmafStreamInfResolution | undefined;

  /**
   * When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.
   * @public
   */
  TargetDurationCompatibilityMode?: CmafTargetDurationCompatibilityMode | undefined;

  /**
   * Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.
   * @public
   */
  VideoCompositionOffsets?: CmafVideoCompositionOffsets | undefined;

  /**
   * When set to ENABLED, a DASH MPD manifest will be generated for this output.
   * @public
   */
  WriteDashManifest?: CmafWriteDASHManifest | undefined;

  /**
   * When set to ENABLED, an Apple HLS manifest will be generated for this output.
   * @public
   */
  WriteHlsManifest?: CmafWriteHLSManifest | undefined;

  /**
   * When you enable Precise segment duration in DASH manifests, your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.
   * @public
   */
  WriteSegmentTimelineInRepresentation?: CmafWriteSegmentTimelineInRepresentation | undefined;
}

/**
 * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
 * @public
 */
export interface SpekeKeyProvider {
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Specify the SPEKE version, either v1.0 or v2.0, that MediaConvert uses when encrypting your output. For more information, see: https://docs.aws.amazon.com/speke/latest/documentation/speke-api-specification.html To use SPEKE v1.0: Leave blank. To use SPEKE v2.0: Specify a SPEKE v2.0 video preset and a SPEKE v2.0 audio preset.
   * @public
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration | undefined;

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. HLS output groups support a max of 3 system ids. Other group types support one system id. See https://dashif.org/identifiers/content_protection/ for more details.
   * @public
   */
  SystemIds?: string[] | undefined;

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   * @public
   */
  Url?: string | undefined;
}

/**
 * Specifies DRM settings for DASH outputs.
 * @public
 */
export interface DashIsoEncryptionSettings {
  /**
   * This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1. If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.
   * @public
   */
  PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility | undefined;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   * @public
   */
  SpekeKeyProvider?: SpekeKeyProvider | undefined;
}

/**
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 * @public
 */
export interface DashIsoImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   * @public
   */
  IntervalCadence?: DashIsoIntervalCadence | undefined;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   * @public
   */
  ThumbnailHeight?: number | undefined;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   * @public
   */
  ThumbnailInterval?: number | undefined;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   * @public
   */
  ThumbnailWidth?: number | undefined;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   * @public
   */
  TileWidth?: number | undefined;
}

/**
 * Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
 * @public
 */
export interface DashIsoGroupSettings {
  /**
   * By default, the service creates one .mpd DASH manifest for each DASH ISO output group in your job. This default manifest references every output in the output group. To create additional DASH manifests that reference a subset of the outputs in the output group, specify a list of them here.
   * @public
   */
  AdditionalManifests?: DashAdditionalManifest[] | undefined;

  /**
   * Use this setting only when your audio codec is a Dolby one (AC3, EAC3, or Atmos) and your downstream workflow requires that your DASH manifest use the Dolby channel configuration tag, rather than the MPEG one. For example, you might need to use this to make dynamic ad insertion work. Specify which audio channel configuration scheme ID URI MediaConvert writes in your DASH manifest. Keep the default value, MPEG channel configuration, to have MediaConvert write this: urn:mpeg:mpegB:cicp:ChannelConfiguration. Choose Dolby channel configuration to have MediaConvert write this instead: tag:dolby.com,2014:dash:audio_channel_configuration:2011.
   * @public
   */
  AudioChannelConfigSchemeIdUri?: DashIsoGroupAudioChannelConfigSchemeIdUri | undefined;

  /**
   * A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * Specify whether MediaConvert generates I-frame only video segments for DASH trick play, also known as trick mode. When specified, the I-frame only video segments are included within an additional AdaptationSet in your DASH output manifest. To generate I-frame only video segments: Enter a name as a text string, up to 256 character long. This name is appended to the end of this output group's base filename, that you specify as part of your destination URI, and used for the I-frame only video segment files. You may also include format identifiers. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html#using-settings-variables-with-streaming-outputs To not generate I-frame only video segments: Leave blank.
   * @public
   */
  DashIFrameTrickPlayNameModifier?: string | undefined;

  /**
   * Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline for outputs that you also specify a Name modifier for: Keep the default value, Basic. Note that if you do not specify a name modifier for an output, MediaConvert will not write a SegmentTimeline for it. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct. To write a SegmentTimeline in each AdaptationSet: Choose Full.
   * @public
   */
  DashManifestStyle?: DashManifestStyle | undefined;

  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;

  /**
   * DRM settings.
   * @public
   */
  Encryption?: DashIsoEncryptionSettings | undefined;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   * @public
   */
  FragmentLength?: number | undefined;

  /**
   * Supports HbbTV specification as indicated
   * @public
   */
  HbbtvCompliance?: DashIsoHbbtvCompliance | undefined;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   * @public
   */
  ImageBasedTrickPlay?: DashIsoImageBasedTrickPlay | undefined;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   * @public
   */
  ImageBasedTrickPlaySettings?: DashIsoImageBasedTrickPlaySettings | undefined;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   * @public
   */
  MinBufferTime?: number | undefined;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   * @public
   */
  MinFinalSegmentLength?: number | undefined;

  /**
   * Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.
   * @public
   */
  MpdManifestBandwidthType?: DashIsoMpdManifestBandwidthType | undefined;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile, the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand, the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control to Single file.
   * @public
   */
  MpdProfile?: DashIsoMpdProfile | undefined;

  /**
   * Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.
   * @public
   */
  PtsOffsetHandlingForBFrames?: DashIsoPtsOffsetHandlingForBFrames | undefined;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   * @public
   */
  SegmentControl?: DashIsoSegmentControl | undefined;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 30. Related settings: Use Segment length control to specify whether the encoder enforces this value strictly. Use Segment control to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * Specify how you want MediaConvert to determine segment lengths in this output group. To use the exact value that you specify under Segment length: Choose Exact. Note that this might result in additional I-frames in the output GOP. To create segment lengths that are a multiple of the GOP: Choose Multiple of GOP. MediaConvert will round up the segment lengths to match the next GOP boundary. To have MediaConvert automatically determine a segment duration that is a multiple of both the audio packets and the frame rates: Choose Match. When you do, also specify a target segment duration under Segment length. This is useful for some ad-insertion or segment replacement workflows. Note that Match has the following requirements: - Output containers: Include at least one video output and at least one audio output. Audio-only outputs are not supported. - Output frame rate: Follow source is not supported. - Multiple output frame rates: When you specify multiple outputs, we recommend they share a similar frame rate (as in X/3, X/2, X, or 2X). For example: 5, 15, 30 and 60. Or: 25 and 50. (Outputs must share an integer multiple.) - Output audio codec: Specify Advanced Audio Coding (AAC). - Output sample rate: Choose 48kHz.
   * @public
   */
  SegmentLengthControl?: DashIsoSegmentLengthControl | undefined;

  /**
   * Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.
   * @public
   */
  VideoCompositionOffsets?: DashIsoVideoCompositionOffsets | undefined;

  /**
   * If you get an HTTP error in the 400 range when you play back your DASH output, enable this setting and run your transcoding job again. When you enable this setting, the service writes precise segment durations in the DASH manifest. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When you don't enable this setting, the service writes approximate segment durations in your DASH manifest.
   * @public
   */
  WriteSegmentTimelineInRepresentation?: DashIsoWriteSegmentTimelineInRepresentation | undefined;
}

/**
 * Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package.
 * @public
 */
export interface FileGroupSettings {
  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;
}

/**
 * Settings for HLS encryption
 * @public
 */
export interface HlsEncryptionSettings {
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.
   * @public
   */
  EncryptionMethod?: HlsEncryptionType | undefined;

  /**
   * The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.
   * @public
   */
  InitializationVectorInManifest?: HlsInitializationVectorInManifest | undefined;

  /**
   * Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.
   * @public
   */
  OfflineEncrypted?: HlsOfflineEncrypted | undefined;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   * @public
   */
  SpekeKeyProvider?: SpekeKeyProvider | undefined;

  /**
   * Use these settings to set up encryption with a static key provider.
   * @public
   */
  StaticKeyProvider?: StaticKeyProvider | undefined;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   * @public
   */
  Type?: HlsKeyProviderType | undefined;
}

/**
 * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
 * @public
 */
export interface HlsImageBasedTrickPlaySettings {
  /**
   * The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.
   * @public
   */
  IntervalCadence?: HlsIntervalCadence | undefined;

  /**
   * Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.
   * @public
   */
  ThumbnailHeight?: number | undefined;

  /**
   * Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.
   * @public
   */
  ThumbnailInterval?: number | undefined;

  /**
   * Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.
   * @public
   */
  ThumbnailWidth?: number | undefined;

  /**
   * Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Number of thumbnails in each row of a tile image. Set a value between 1 and 512.
   * @public
   */
  TileWidth?: number | undefined;
}

/**
 * Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
 * @public
 */
export interface HlsGroupSettings {
  /**
   * Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.
   * @public
   */
  AdMarkers?: HlsAdMarkers[] | undefined;

  /**
   * By default, the service creates one top-level .m3u8 HLS manifest for each HLS output group in your job. This default manifest references every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here.
   * @public
   */
  AdditionalManifests?: HlsAdditionalManifest[] | undefined;

  /**
   * Ignore this setting unless you are using FairPlay DRM with Verimatrix and you encounter playback issues. Keep the default value, Include, to output audio-only headers. Choose Exclude to remove the audio-only headers from your audio segments.
   * @public
   */
  AudioOnlyHeader?: HlsAudioOnlyHeader | undefined;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * Language to be used on Caption outputs
   * @public
   */
  CaptionLanguageMappings?: HlsCaptionLanguageMapping[] | undefined;

  /**
   * Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
   * @public
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | undefined;

  /**
   * Set Caption segment length control to Match video to create caption segments that align with the video segments from the first video output in this output group. For example, if the video segments are 2 seconds long, your WebVTT segments will also be 2 seconds long. Keep the default setting, Large segments to create caption segments that are 300 seconds long.
   * @public
   */
  CaptionSegmentLengthControl?: HlsCaptionSegmentLengthControl | undefined;

  /**
   * Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled and control caching in your video distribution set up. For example, use the Cache-Control http header.
   * @public
   */
  ClientCache?: HlsClientCache | undefined;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   * @public
   */
  CodecSpecification?: HlsCodecSpecification | undefined;

  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;

  /**
   * Indicates whether segments should be placed in subdirectories.
   * @public
   */
  DirectoryStructure?: HlsDirectoryStructure | undefined;

  /**
   * DRM settings.
   * @public
   */
  Encryption?: HlsEncryptionSettings | undefined;

  /**
   * Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md
   * @public
   */
  ImageBasedTrickPlay?: HlsImageBasedTrickPlay | undefined;

  /**
   * Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED
   * @public
   */
  ImageBasedTrickPlaySettings?: HlsImageBasedTrickPlaySettings | undefined;

  /**
   * When set to GZIP, compresses HLS playlist.
   * @public
   */
  ManifestCompression?: HlsManifestCompression | undefined;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   * @public
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | undefined;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   * @public
   */
  MinFinalSegmentLength?: number | undefined;

  /**
   * When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   * @public
   */
  MinSegmentLength?: number | undefined;

  /**
   * Indicates whether the .m3u8 manifest file should be generated for this HLS output group.
   * @public
   */
  OutputSelection?: HlsOutputSelection | undefined;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.
   * @public
   */
  ProgramDateTime?: HlsProgramDateTime | undefined;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   * @public
   */
  ProgramDateTimePeriod?: number | undefined;

  /**
   * Specify whether MediaConvert generates HLS manifests while your job is running or when your job is complete. To generate HLS manifests while your job is running: Choose Enabled. Use if you want to play back your content as soon as it's available. MediaConvert writes the parent and child manifests after the first three media segments are written to your destination S3 bucket. It then writes new updated manifests after each additional segment is written. The parent manifest includes the latest BANDWIDTH and AVERAGE-BANDWIDTH attributes, and child manifests include the latest available media segment. When your job completes, the final child playlists include an EXT-X-ENDLIST tag. To generate HLS manifests only when your job completes: Choose Disabled.
   * @public
   */
  ProgressiveWriteHlsManifest?: HlsProgressiveWriteHlsManifest | undefined;

  /**
   * When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.
   * @public
   */
  SegmentControl?: HlsSegmentControl | undefined;

  /**
   * Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 10. Related settings: Use Segment length control to specify whether the encoder enforces this value strictly. Use Segment control to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * Specify how you want MediaConvert to determine segment lengths in this output group. To use the exact value that you specify under Segment length: Choose Exact. Note that this might result in additional I-frames in the output GOP. To create segment lengths that are a multiple of the GOP: Choose Multiple of GOP. MediaConvert will round up the segment lengths to match the next GOP boundary. To have MediaConvert automatically determine a segment duration that is a multiple of both the audio packets and the frame rates: Choose Match. When you do, also specify a target segment duration under Segment length. This is useful for some ad-insertion or segment replacement workflows. Note that Match has the following requirements: - Output containers: Include at least one video output and at least one audio output. Audio-only outputs are not supported. - Output frame rate: Follow source is not supported. - Multiple output frame rates: When you specify multiple outputs, we recommend they share a similar frame rate (as in X/3, X/2, X, or 2X). For example: 5, 15, 30 and 60. Or: 25 and 50. (Outputs must share an integer multiple.) - Output audio codec: Specify Advanced Audio Coding (AAC). - Output sample rate: Choose 48kHz.
   * @public
   */
  SegmentLengthControl?: HlsSegmentLengthControl | undefined;

  /**
   * Specify the number of segments to write to a subdirectory before starting a new one. You must also set Directory structure to Subdirectory per stream for this setting to have an effect.
   * @public
   */
  SegmentsPerSubdirectory?: number | undefined;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   * @public
   */
  StreamInfResolution?: HlsStreamInfResolution | undefined;

  /**
   * When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.
   * @public
   */
  TargetDurationCompatibilityMode?: HlsTargetDurationCompatibilityMode | undefined;

  /**
   * Specify the type of the ID3 frame to use for ID3 timestamps in your output. To include ID3 timestamps: Specify PRIV or TDRL and set ID3 metadata to Passthrough. To exclude ID3 timestamps: Set ID3 timestamp frame type to None.
   * @public
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | undefined;

  /**
   * Specify the interval in seconds to write ID3 timestamps in your output. The first timestamp starts at the output timecode and date, and increases incrementally with each ID3 timestamp. To use the default interval of 10 seconds: Leave blank. To include this metadata in your output: Set ID3 timestamp frame type to PRIV or TDRL, and set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataId3Period?: number | undefined;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   * @public
   */
  TimestampDeltaMilliseconds?: number | undefined;
}

/**
 * Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 * @public
 */
export interface MsSmoothAdditionalManifest {
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your Microsoft Smooth group is film-name.ismv. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.ismv.
   * @public
   */
  ManifestNameModifier?: string | undefined;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   * @public
   */
  SelectedOutputs?: string[] | undefined;
}

/**
 * If you are using DRM, set DRM System to specify the value SpekeKeyProvider.
 * @public
 */
export interface MsSmoothEncryptionSettings {
  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   * @public
   */
  SpekeKeyProvider?: SpekeKeyProvider | undefined;
}

/**
 * Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
 * @public
 */
export interface MsSmoothGroupSettings {
  /**
   * By default, the service creates one .ism Microsoft Smooth Streaming manifest for each Microsoft Smooth Streaming output group in your job. This default manifest references every output in the output group. To create additional manifests that reference a subset of the outputs in the output group, specify a list of them here.
   * @public
   */
  AdditionalManifests?: MsSmoothAdditionalManifest[] | undefined;

  /**
   * COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.
   * @public
   */
  AudioDeduplication?: MsSmoothAudioDeduplication | undefined;

  /**
   * Use Destination to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   * @public
   */
  Destination?: string | undefined;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   * @public
   */
  DestinationSettings?: DestinationSettings | undefined;

  /**
   * If you are using DRM, set DRM System to specify the value SpekeKeyProvider.
   * @public
   */
  Encryption?: MsSmoothEncryptionSettings | undefined;

  /**
   * Specify how you want MediaConvert to determine the fragment length. Choose Exact to have the encoder use the exact length that you specify with the setting Fragment length. This might result in extra I-frames. Choose Multiple of GOP to have the encoder round up the segment lengths to match the next GOP boundary.
   * @public
   */
  FragmentLength?: number | undefined;

  /**
   * Specify how you want MediaConvert to determine the fragment length. Choose Exact to have the encoder use the exact length that you specify with the setting Fragment length. This might result in extra I-frames. Choose Multiple of GOP to have the encoder round up the segment lengths to match the next GOP boundary.
   * @public
   */
  FragmentLengthControl?: MsSmoothFragmentLengthControl | undefined;

  /**
   * Use Manifest encoding to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.
   * @public
   */
  ManifestEncoding?: MsSmoothManifestEncoding | undefined;
}

/**
 * Output Group settings, including type
 * @public
 */
export interface OutputGroupSettings {
  /**
   * Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
   * @public
   */
  CmafGroupSettings?: CmafGroupSettings | undefined;

  /**
   * Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
   * @public
   */
  DashIsoGroupSettings?: DashIsoGroupSettings | undefined;

  /**
   * Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package.
   * @public
   */
  FileGroupSettings?: FileGroupSettings | undefined;

  /**
   * Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
   * @public
   */
  HlsGroupSettings?: HlsGroupSettings | undefined;

  /**
   * Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html.
   * @public
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)
   * @public
   */
  Type?: OutputGroupType | undefined;
}

/**
 * These settings relate to the fragmented MP4 container for the segments in your CMAF outputs.
 * @public
 */
export interface CmfcSettings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   * @public
   */
  AudioDuration?: CmfcAudioDuration | undefined;

  /**
   * Specify the audio rendition group for this audio rendition. Specify up to one value for each audio output in your output group. This value appears in your HLS parent manifest in the EXT-X-MEDIA tag of TYPE=AUDIO, as the value for the GROUP-ID attribute. For example, if you specify "audio_aac_1" for Audio group ID, it appears in your manifest like this: #EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio_aac_1". Related setting: To associate the rendition group that this audio track belongs to with a video rendition, include the same value that you provide here for that video output's setting Audio rendition sets.
   * @public
   */
  AudioGroupId?: string | undefined;

  /**
   * List the audio rendition groups that you want included with this video rendition. Use a comma-separated list. For example, say you want to include the audio rendition groups that have the audio group IDs "audio_aac_1" and "audio_dolby". Then you would specify this value: "audio_aac_1,audio_dolby". Related setting: The rendition groups that you include in your comma-separated list should all match values that you specify in the setting Audio group ID for audio renditions in the same output group as this video rendition. Default behavior: If you don't specify anything here and for Audio group ID, MediaConvert puts each audio variant in its own audio rendition group and associates it with every video variant. Each value in your list appears in your HLS parent manifest in the EXT-X-STREAM-INF tag as the value for the AUDIO attribute. To continue the previous example, say that the file name for the child manifest for your video rendition is "amazing_video_1.m3u8". Then, in your parent manifest, each value will appear on separate lines, like this: #EXT-X-STREAM-INF:AUDIO="audio_aac_1"... amazing_video_1.m3u8 #EXT-X-STREAM-INF:AUDIO="audio_dolby"... amazing_video_1.m3u8
   * @public
   */
  AudioRenditionSets?: string | undefined;

  /**
   * Use this setting to control the values that MediaConvert puts in your HLS parent playlist to control how the client player selects which audio track to play. Choose Audio-only variant stream (AUDIO_ONLY_VARIANT_STREAM) for any variant that you want to prohibit the client from playing with video. This causes MediaConvert to represent the variant as an EXT-X-STREAM-INF in the HLS manifest. The other options for this setting determine the values that MediaConvert writes for the DEFAULT and AUTOSELECT attributes of the EXT-X-MEDIA entry for the audio variant. For more information about these attributes, see the Apple documentation article https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/adding_alternate_media_to_a_playlist. Choose Alternate audio, auto select, default to set DEFAULT=YES and AUTOSELECT=YES. Choose this value for only one variant in your output group. Choose Alternate audio, auto select, not default to set DEFAULT=NO and AUTOSELECT=YES. Choose Alternate Audio, Not Auto Select to set DEFAULT=NO and AUTOSELECT=NO. When you don't specify a value for this setting, MediaConvert defaults to Alternate audio, auto select, default. When there is more than one variant in your output group, you must explicitly choose a value for this setting.
   * @public
   */
  AudioTrackType?: CmfcAudioTrackType | undefined;

  /**
   * When enabled, a C2PA compliant manifest will be generated, signed and embeded in the output. For more information on C2PA, see https://c2pa.org/specifications/specifications/2.1/index.html
   * @public
   */
  C2paManifest?: CmfcC2paManifest | undefined;

  /**
   * Specify the name or ARN of the AWS Secrets Manager secret that contains your C2PA public certificate chain in PEM format. Provide a valid secret name or ARN. Note that your MediaConvert service role must allow access to this secret. The public certificate chain is added to the COSE header (x5chain) for signature validation. Include the signer's certificate and all intermediate certificates. Do not include the root certificate. For details on COSE, see: https://opensource.contentauthenticity.org/docs/manifest/signing-manifests
   * @public
   */
  CertificateSecret?: string | undefined;

  /**
   * Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag, MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don't flag, MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.
   * @public
   */
  DescriptiveVideoServiceFlag?: CmfcDescriptiveVideoServiceFlag | undefined;

  /**
   * Choose Include to have MediaConvert generate an HLS child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude.
   * @public
   */
  IFrameOnlyManifest?: CmfcIFrameOnlyManifest | undefined;

  /**
   * To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.
   * @public
   */
  KlvMetadata?: CmfcKlvMetadata | undefined;

  /**
   * To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata to Passthrough.
   * @public
   */
  ManifestMetadataSignaling?: CmfcManifestMetadataSignaling | undefined;

  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML.
   * @public
   */
  Scte35Esam?: CmfcScte35Esam | undefined;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want those SCTE-35 markers in this output.
   * @public
   */
  Scte35Source?: CmfcScte35Source | undefined;

  /**
   * Specify the ID or ARN of the AWS KMS key used to sign the C2PA manifest in your MP4 output. Provide a valid KMS key ARN. Note that your MediaConvert service role must allow access to this key.
   * @public
   */
  SigningKmsKey?: string | undefined;

  /**
   * To include ID3 metadata in this output: Set ID3 metadata to Passthrough. Specify this ID3 metadata in Custom ID3 metadata inserter. MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None or leave blank.
   * @public
   */
  TimedMetadata?: CmfcTimedMetadata | undefined;

  /**
   * Specify the event message box (eMSG) version for ID3 timed metadata in your output.
   * For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.
   * Leave blank to use the default value Version 0.
   * When you specify Version 1, you must also set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataBoxVersion?: CmfcTimedMetadataBoxVersion | undefined;

  /**
   * Specify the event message box (eMSG) scheme ID URI for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. Leave blank to use the default value: https://aomedia.org/emsg/ID3 When you specify a value for ID3 metadata scheme ID URI, you must also set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataSchemeIdUri?: string | undefined;

  /**
   * Specify the event message box (eMSG) value for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. When you specify a value for ID3 Metadata Value, you must also set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataValue?: string | undefined;
}

/**
 * Settings for F4v container
 * @public
 */
export interface F4vSettings {
  /**
   * To place the MOOV atom at the beginning of your output, which is useful for progressive downloading: Leave blank or choose Progressive download. To place the MOOV at the end of your output: Choose Normal.
   * @public
   */
  MoovPlacement?: F4vMoovPlacement | undefined;
}

/**
 * Use these settings to insert a DVB Network Information Table (NIT) in the transport stream of this output.
 * @public
 */
export interface DvbNitSettings {
  /**
   * The numeric value placed in the Network Information Table (NIT).
   * @public
   */
  NetworkId?: number | undefined;

  /**
   * The network name text placed in the network_name_descriptor inside the Network Information Table. Maximum length is 256 characters.
   * @public
   */
  NetworkName?: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  NitInterval?: number | undefined;
}

/**
 * Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output.
 * @public
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream. "Follow input SDT" copies SDT information from input stream to output stream. "Follow input SDT if present" copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT Manually" means user will enter the SDT information. "No SDT" means output stream will not contain SDT information.
   * @public
   */
  OutputSdt?: OutputSdt | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  SdtInterval?: number | undefined;

  /**
   * The service name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The service provider name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   * @public
   */
  ServiceProviderName?: string | undefined;
}

/**
 * Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output.
 * @public
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  TdtInterval?: number | undefined;
}

/**
 * Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML.
 * @public
 */
export interface M2tsScte35Esam {
  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream generated by ESAM.
   * @public
   */
  Scte35EsamPid?: number | undefined;
}

/**
 * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
 * @public
 */
export interface M2tsSettings {
  /**
   * Selects between the DVB and ATSC buffer models for Dolby Digital audio.
   * @public
   */
  AudioBufferModel?: M2tsAudioBufferModel | undefined;

  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   * @public
   */
  AudioDuration?: M2tsAudioDuration | undefined;

  /**
   * The number of audio frames to insert for each PES packet.
   * @public
   */
  AudioFramesPerPes?: number | undefined;

  /**
   * Specify the packet identifiers (PIDs) for any elementary audio streams you include in this output. Specify multiple PIDs as a JSON array. Default is the range 482-492.
   * @public
   */
  AudioPids?: number[] | undefined;

  /**
   * Manually specify the difference in PTS offset that will be applied to the audio track, in seconds or milliseconds, when you set PTS offset to Seconds or Milliseconds. Enter an integer from -10000 to 10000. Leave blank to keep the default value 0.
   * @public
   */
  AudioPtsOffsetDelta?: number | undefined;

  /**
   * Specify the output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate. Other common values are 3750000, 7500000, and 15000000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.
   * @public
   */
  BufferModel?: M2tsBufferModel | undefined;

  /**
   * If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value to allow all PTS values.
   * @public
   */
  DataPTSControl?: M2tsDataPtsControl | undefined;

  /**
   * Use these settings to insert a DVB Network Information Table (NIT) in the transport stream of this output.
   * @public
   */
  DvbNitSettings?: DvbNitSettings | undefined;

  /**
   * Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output.
   * @public
   */
  DvbSdtSettings?: DvbSdtSettings | undefined;

  /**
   * Specify the packet identifiers (PIDs) for DVB subtitle data included in this output. Specify multiple PIDs as a JSON array. Default is the range 460-479.
   * @public
   */
  DvbSubPids?: number[] | undefined;

  /**
   * Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output.
   * @public
   */
  DvbTdtSettings?: DvbTdtSettings | undefined;

  /**
   * Specify the packet identifier (PID) for DVB teletext data you include in this output. Default is 499.
   * @public
   */
  DvbTeletextPid?: number | undefined;

  /**
   * When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
   * @public
   */
  EbpAudioInterval?: M2tsEbpAudioInterval | undefined;

  /**
   * Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
   * @public
   */
  EbpPlacement?: M2tsEbpPlacement | undefined;

  /**
   * Controls whether to include the ES Rate field in the PES header.
   * @public
   */
  EsRateInPes?: M2tsEsRateInPes | undefined;

  /**
   * Keep the default value unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force.
   * @public
   */
  ForceTsVideoEbpOrder?: M2tsForceTsVideoEbpOrder | undefined;

  /**
   * The length, in seconds, of each fragment. Only used with EBP markers.
   * @public
   */
  FragmentTime?: number | undefined;

  /**
   * To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and passes it through to the output transport stream. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.
   * @public
   */
  KlvMetadata?: M2tsKlvMetadata | undefined;

  /**
   * Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
   * @public
   */
  MaxPcrInterval?: number | undefined;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   * @public
   */
  MinEbpInterval?: number | undefined;

  /**
   * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3?: M2tsNielsenId3 | undefined;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   * @public
   */
  NullPacketBitrate?: number | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  PatInterval?: number | undefined;

  /**
   * When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.
   * @public
   */
  PcrControl?: M2tsPcrControl | undefined;

  /**
   * Specify the packet identifier (PID) for the program clock reference (PCR) in this output. If you do not specify a value, the service will use the value for Video PID.
   * @public
   */
  PcrPid?: number | undefined;

  /**
   * Specify the number of milliseconds between instances of the program map table (PMT) in the output transport stream.
   * @public
   */
  PmtInterval?: number | undefined;

  /**
   * Specify the packet identifier (PID) for the program map table (PMT) itself. Default is 480.
   * @public
   */
  PmtPid?: number | undefined;

  /**
   * Specify whether MediaConvert automatically attempts to prevent decoder buffer underflows in your transport stream output. Use if you are seeing decoder buffer underflows in your output and are unable to increase your transport stream's bitrate. For most workflows: We recommend that you keep the default value, Disabled. To prevent decoder buffer underflows in your output, when possible: Choose Enabled. Note that if MediaConvert prevents a decoder buffer underflow in your output, output video quality is reduced and your job will take longer to complete.
   * @public
   */
  PreventBufferUnderflow?: M2tsPreventBufferUnderflow | undefined;

  /**
   * Specify the packet identifier (PID) of the private metadata stream. Default is 503.
   * @public
   */
  PrivateMetadataPid?: number | undefined;

  /**
   * Use Program number to specify the program number used in the program map table (PMT) for this output. Default is 1. Program numbers and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Manually specify the initial PTS offset, in seconds, when you set PTS offset to Seconds. Enter an integer from 0 to 3600. Leave blank to keep the default value 2.
   * @public
   */
  PtsOffset?: number | undefined;

  /**
   * Specify the initial presentation timestamp (PTS) offset for your transport stream output. To let MediaConvert automatically determine the initial PTS offset: Keep the default value, Auto. We recommend that you choose Auto for the widest player compatibility. The initial PTS will be at least two seconds and vary depending on your output's bitrate, HRD buffer size and HRD buffer initial fill percentage. To manually specify an initial PTS offset: Choose Seconds or Milliseconds. Then specify the number of seconds or milliseconds with PTS offset.
   * @public
   */
  PtsOffsetMode?: TsPtsOffset | undefined;

  /**
   * When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.
   * @public
   */
  RateMode?: M2tsRateMode | undefined;

  /**
   * Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML.
   * @public
   */
  Scte35Esam?: M2tsScte35Esam | undefined;

  /**
   * Specify the packet identifier (PID) of the SCTE-35 stream in the transport stream.
   * @public
   */
  Scte35Pid?: number | undefined;

  /**
   * For SCTE-35 markers from your input-- Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None. Also provide the ESAM XML as a string in the setting Signal processing notification XML. Also enable ESAM SCTE-35 (include the property scte35Esam).
   * @public
   */
  Scte35Source?: M2tsScte35Source | undefined;

  /**
   * Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   * @public
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | undefined;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.
   * @public
   */
  SegmentationStyle?: M2tsSegmentationStyle | undefined;

  /**
   * Specify the length, in seconds, of each segment. Required unless markers is set to _none_.
   * @public
   */
  SegmentationTime?: number | undefined;

  /**
   * Packet Identifier (PID) of the ID3 metadata stream in the transport stream.
   * @public
   */
  TimedMetadataPid?: number | undefined;

  /**
   * Specify the ID for the transport stream itself in the program map table for this output. Transport stream IDs and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
   * @public
   */
  TransportStreamId?: number | undefined;

  /**
   * Specify the packet identifier (PID) of the elementary video stream in the transport stream.
   * @public
   */
  VideoPid?: number | undefined;
}

/**
 * These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs.
 * @public
 */
export interface M3u8Settings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   * @public
   */
  AudioDuration?: M3u8AudioDuration | undefined;

  /**
   * The number of audio frames to insert for each PES packet.
   * @public
   */
  AudioFramesPerPes?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
   * @public
   */
  AudioPids?: number[] | undefined;

  /**
   * Manually specify the difference in PTS offset that will be applied to the audio track, in seconds or milliseconds, when you set PTS offset to Seconds or Milliseconds. Enter an integer from -10000 to 10000. Leave blank to keep the default value 0.
   * @public
   */
  AudioPtsOffsetDelta?: number | undefined;

  /**
   * If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value AUTO to allow all PTS values.
   * @public
   */
  DataPTSControl?: M3u8DataPtsControl | undefined;

  /**
   * Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
   * @public
   */
  MaxPcrInterval?: number | undefined;

  /**
   * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3?: M3u8NielsenId3 | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  PatInterval?: number | undefined;

  /**
   * When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   * @public
   */
  PcrControl?: M3u8PcrControl | undefined;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID.
   * @public
   */
  PcrPid?: number | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  PmtInterval?: number | undefined;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream.
   * @public
   */
  PmtPid?: number | undefined;

  /**
   * Packet Identifier (PID) of the private metadata stream in the transport stream.
   * @public
   */
  PrivateMetadataPid?: number | undefined;

  /**
   * The value of the program number field in the Program Map Table.
   * @public
   */
  ProgramNumber?: number | undefined;

  /**
   * Manually specify the initial PTS offset, in seconds, when you set PTS offset to Seconds. Enter an integer from 0 to 3600. Leave blank to keep the default value 2.
   * @public
   */
  PtsOffset?: number | undefined;

  /**
   * Specify the initial presentation timestamp (PTS) offset for your transport stream output. To let MediaConvert automatically determine the initial PTS offset: Keep the default value, Auto. We recommend that you choose Auto for the widest player compatibility. The initial PTS will be at least two seconds and vary depending on your output's bitrate, HRD buffer size and HRD buffer initial fill percentage. To manually specify an initial PTS offset: Choose Seconds or Milliseconds. Then specify the number of seconds or milliseconds with PTS offset.
   * @public
   */
  PtsOffsetMode?: TsPtsOffset | undefined;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream.
   * @public
   */
  Scte35Pid?: number | undefined;

  /**
   * For SCTE-35 markers from your input-- Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None if you don't want manifest conditioning. Choose Passthrough and choose Ad markers if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML.
   * @public
   */
  Scte35Source?: M3u8Scte35Source | undefined;

  /**
   * Set ID3 metadata to Passthrough to include ID3 metadata in this output. This includes ID3 metadata from the following features: ID3 timestamp period, and Custom ID3 metadata inserter. To exclude this ID3 metadata in this output: set ID3 metadata to None or leave blank.
   * @public
   */
  TimedMetadata?: TimedMetadata | undefined;

  /**
   * Packet Identifier (PID) of the ID3 metadata stream in the transport stream.
   * @public
   */
  TimedMetadataPid?: number | undefined;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   * @public
   */
  TransportStreamId?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream.
   * @public
   */
  VideoPid?: number | undefined;
}

/**
 * These settings relate to your QuickTime MOV output container.
 * @public
 */
export interface MovSettings {
  /**
   * When enabled, include 'clap' atom if appropriate for the video output settings.
   * @public
   */
  ClapAtom?: MovClapAtom | undefined;

  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   * @public
   */
  CslgAtom?: MovCslgAtom | undefined;

  /**
   * When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.
   * @public
   */
  Mpeg2FourCCControl?: MovMpeg2FourCCControl | undefined;

  /**
   * Unless you need Omneon compatibility: Keep the default value, None. To make this output compatible with Omneon: Choose Omneon. When you do, MediaConvert increases the length of the 'elst' edit list atom. Note that this might cause file rejections when a recipient of the output file doesn't expect this extra padding.
   * @public
   */
  PaddingControl?: MovPaddingControl | undefined;

  /**
   * Always keep the default value (SELF_CONTAINED) for this setting.
   * @public
   */
  Reference?: MovReference | undefined;
}

/**
 * These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only.
 * @public
 */
export interface Mp4Settings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   * @public
   */
  AudioDuration?: CmfcAudioDuration | undefined;

  /**
   * When enabled, a C2PA compliant manifest will be generated, signed and embeded in the output. For more information on C2PA, see https://c2pa.org/specifications/specifications/2.1/index.html
   * @public
   */
  C2paManifest?: Mp4C2paManifest | undefined;

  /**
   * Specify the name or ARN of the AWS Secrets Manager secret that contains your C2PA public certificate chain in PEM format. Provide a valid secret name or ARN. Note that your MediaConvert service role must allow access to this secret. The public certificate chain is added to the COSE header (x5chain) for signature validation. Include the signer's certificate and all intermediate certificates. Do not include the root certificate. For details on COSE, see: https://opensource.contentauthenticity.org/docs/manifest/signing-manifests
   * @public
   */
  CertificateSecret?: string | undefined;

  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   * @public
   */
  CslgAtom?: Mp4CslgAtom | undefined;

  /**
   * Ignore this setting unless compliance to the CTTS box version specification matters in your workflow. Specify a value of 1 to set your CTTS box version to 1 and make your output compliant with the specification. When you specify a value of 1, you must also set CSLG atom to the value INCLUDE. Keep the default value 0 to set your CTTS box version to 0. This can provide backward compatibility for some players and packagers.
   * @public
   */
  CttsVersion?: number | undefined;

  /**
   * Inserts a free-space box immediately after the moov box.
   * @public
   */
  FreeSpaceBox?: Mp4FreeSpaceBox | undefined;

  /**
   * To place the MOOV atom at the beginning of your output, which is useful for progressive downloading: Leave blank or choose Progressive download. To place the MOOV at the end of your output: Choose Normal.
   * @public
   */
  MoovPlacement?: Mp4MoovPlacement | undefined;

  /**
   * Overrides the "Major Brand" field in the output file. Usually not necessary to specify.
   * @public
   */
  Mp4MajorBrand?: string | undefined;

  /**
   * Specify the ID or ARN of the AWS KMS key used to sign the C2PA manifest in your MP4 output. Provide a valid KMS key ARN. Note that your MediaConvert service role must allow access to this key.
   * @public
   */
  SigningKmsKey?: string | undefined;
}

/**
 * These settings relate to the fragmented MP4 container for the segments in your DASH outputs.
 * @public
 */
export interface MpdSettings {
  /**
   * Optional. Choose Include to have MediaConvert mark up your DASH manifest with <Accessibility> elements for embedded 608 captions. This markup isn't generally required, but some video players require it to discover and play embedded 608 captions. Keep the default value, Exclude, to leave these elements out. When you enable this setting, this is the markup that MediaConvert includes in your manifest: <Accessibility schemeIdUri="urn:scte:dash:cc:cea-608:2015" value="CC1=eng"/>
   * @public
   */
  AccessibilityCaptionHints?: MpdAccessibilityCaptionHints | undefined;

  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   * @public
   */
  AudioDuration?: MpdAudioDuration | undefined;

  /**
   * When enabled, a C2PA compliant manifest will be generated, signed and embeded in the output. For more information on C2PA, see https://c2pa.org/specifications/specifications/2.1/index.html
   * @public
   */
  C2paManifest?: MpdC2paManifest | undefined;

  /**
   * Use this setting only in DASH output groups that include sidecar TTML, IMSC or WEBVTT captions. You specify sidecar captions in a separate output from your audio and video. Choose Raw for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files.
   * @public
   */
  CaptionContainerType?: MpdCaptionContainerType | undefined;

  /**
   * Specify the name or ARN of the AWS Secrets Manager secret that contains your C2PA public certificate chain in PEM format. Provide a valid secret name or ARN. Note that your MediaConvert service role must allow access to this secret. The public certificate chain is added to the COSE header (x5chain) for signature validation. Include the signer's certificate and all intermediate certificates. Do not include the root certificate. For details on COSE, see: https://opensource.contentauthenticity.org/docs/manifest/signing-manifests
   * @public
   */
  CertificateSecret?: string | undefined;

  /**
   * To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.
   * @public
   */
  KlvMetadata?: MpdKlvMetadata | undefined;

  /**
   * To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata to Passthrough.
   * @public
   */
  ManifestMetadataSignaling?: MpdManifestMetadataSignaling | undefined;

  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML.
   * @public
   */
  Scte35Esam?: MpdScte35Esam | undefined;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want those SCTE-35 markers in this output.
   * @public
   */
  Scte35Source?: MpdScte35Source | undefined;

  /**
   * Specify the ID or ARN of the AWS KMS key used to sign the C2PA manifest in your MP4 output. Provide a valid KMS key ARN. Note that your MediaConvert service role must allow access to this key.
   * @public
   */
  SigningKmsKey?: string | undefined;

  /**
   * To include ID3 metadata in this output: Set ID3 metadata to Passthrough. Specify this ID3 metadata in Custom ID3 metadata inserter. MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None or leave blank.
   * @public
   */
  TimedMetadata?: MpdTimedMetadata | undefined;

  /**
   * Specify the event message box (eMSG) version for ID3 timed metadata in your output.
   * For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.
   * Leave blank to use the default value Version 0.
   * When you specify Version 1, you must also set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataBoxVersion?: MpdTimedMetadataBoxVersion | undefined;

  /**
   * Specify the event message box (eMSG) scheme ID URI for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. Leave blank to use the default value: https://aomedia.org/emsg/ID3 When you specify a value for ID3 metadata scheme ID URI, you must also set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataSchemeIdUri?: string | undefined;

  /**
   * Specify the event message box (eMSG) value for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. When you specify a value for ID3 Metadata Value, you must also set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataValue?: string | undefined;
}

/**
 * Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC.
 * @public
 */
export interface MxfXavcProfileSettings {
  /**
   * To create an output that complies with the XAVC file format guidelines for interoperability, keep the default value, Drop frames for compliance. To include all frames from your input in this output, keep the default setting, Allow any duration. The number of frames that MediaConvert excludes when you set this to Drop frames for compliance depends on the output frame rate and duration.
   * @public
   */
  DurationMode?: MxfXavcDurationMode | undefined;

  /**
   * Specify a value for this setting only for outputs that you set up with one of these two XAVC profiles: XAVC HD Intra CBG or XAVC 4K Intra CBG. Specify the amount of space in each frame that the service reserves for ancillary data, such as teletext captions. The default value for this setting is 1492 bytes per frame. This should be sufficient to prevent overflow unless you have multiple pages of teletext captions data. If you have a large amount of teletext data, specify a larger number.
   * @public
   */
  MaxAncDataSize?: number | undefined;
}

/**
 * These settings relate to your MXF output container.
 * @public
 */
export interface MxfSettings {
  /**
   * Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings.
   * @public
   */
  AfdSignaling?: MxfAfdSignaling | undefined;

  /**
   * Specify the MXF profile, also called shim, for this output. To automatically select a profile according to your output video codec and resolution, leave blank. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html.
   * @public
   */
  Profile?: MxfProfile | undefined;

  /**
   * Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC.
   * @public
   */
  XavcProfileSettings?: MxfXavcProfileSettings | undefined;
}

/**
 * Container specific settings.
 * @public
 */
export interface ContainerSettings {
  /**
   * These settings relate to the fragmented MP4 container for the segments in your CMAF outputs.
   * @public
   */
  CmfcSettings?: CmfcSettings | undefined;

  /**
   * Container for this output. Some containers require a container settings object. If not specified, the default object will be created.
   * @public
   */
  Container?: ContainerType | undefined;

  /**
   * Settings for F4v container
   * @public
   */
  F4vSettings?: F4vSettings | undefined;

  /**
   * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
   * @public
   */
  M2tsSettings?: M2tsSettings | undefined;

  /**
   * These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs.
   * @public
   */
  M3u8Settings?: M3u8Settings | undefined;

  /**
   * These settings relate to your QuickTime MOV output container.
   * @public
   */
  MovSettings?: MovSettings | undefined;

  /**
   * These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only.
   * @public
   */
  Mp4Settings?: Mp4Settings | undefined;

  /**
   * These settings relate to the fragmented MP4 container for the segments in your DASH outputs.
   * @public
   */
  MpdSettings?: MpdSettings | undefined;

  /**
   * These settings relate to your MXF output container.
   * @public
   */
  MxfSettings?: MxfSettings | undefined;
}

/**
 * Settings for HLS output groups
 * @public
 */
export interface HlsSettings {
  /**
   * Specifies the group to which the audio rendition belongs.
   * @public
   */
  AudioGroupId?: string | undefined;

  /**
   * Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic to create an audio-only file in a raw container. Regardless of the value that you specify here, if this output has video, the service will place the output into an MPEG2-TS container.
   * @public
   */
  AudioOnlyContainer?: HlsAudioOnlyContainer | undefined;

  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   * @public
   */
  AudioRenditionSets?: string | undefined;

  /**
   * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   * @public
   */
  AudioTrackType?: HlsAudioTrackType | undefined;

  /**
   * Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag, MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don't flag, MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.
   * @public
   */
  DescriptiveVideoServiceFlag?: HlsDescriptiveVideoServiceFlag | undefined;

  /**
   * Generate a variant manifest that lists only the I-frames for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only variant manifest and the regular variant manifest to the multivariant manifest. To have MediaConvert write a variant manifest that references I-frames from your output content using EXT-X-BYTERANGE tags: Choose Include. To have MediaConvert output I-frames as single frame TS files and a corresponding variant manifest that references them: Choose Include as TS. When you don't need the I-frame only variant manifest: Keep the default value, Exclude.
   * @public
   */
  IFrameOnlyManifest?: HlsIFrameOnlyManifest | undefined;

  /**
   * Use this setting to add an identifying string to the filename of each segment. The service adds this string between the name modifier and segment index number. You can use format identifiers in the string. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html
   * @public
   */
  SegmentModifier?: string | undefined;
}

/**
 * Specific settings for this type of output.
 * @public
 */
export interface OutputSettings {
  /**
   * Settings for HLS output groups
   * @public
   */
  HlsSettings?: HlsSettings | undefined;
}

/**
 * Settings for quality-defined variable bitrate encoding with the AV1 codec. Use these settings only when you set QVBR for Rate control mode.
 * @public
 */
export interface Av1QvbrSettings {
  /**
   * Use this setting only when you set Rate control mode to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   * @public
   */
  QvbrQualityLevel?: number | undefined;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   * @public
   */
  QvbrQualityLevelFineTune?: number | undefined;
}

/**
 * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
 * @public
 */
export interface Av1Settings {
  /**
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization.
   * @public
   */
  AdaptiveQuantization?: Av1AdaptiveQuantization | undefined;

  /**
   * Specify the Bit depth. You can choose 8-bit or 10-bit.
   * @public
   */
  BitDepth?: Av1BitDepth | undefined;

  /**
   * Film grain synthesis replaces film grain present in your content with similar quality synthesized AV1 film grain. We recommend that you choose Enabled to reduce the bandwidth of your QVBR quality level 5, 6, 7, or 8 outputs. For QVBR quality level 9 or 10 outputs we recommend that you keep the default value, Disabled. When you include Film grain synthesis, you cannot include the Noise reducer preprocessor.
   * @public
   */
  FilmGrainSynthesis?: Av1FilmGrainSynthesis | undefined;

  /**
   * Use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: Av1FramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Specify the GOP length (keyframe interval) in frames. With AV1, MediaConvert doesn't support GOP length in seconds. This value must be greater than zero and preferably equal to 1 + ((numberBFrames + 1) * x), where x is an integer value.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Specify from the number of B-frames, in the range of 0-15. For AV1 encoding, we recommend using 7 or 15. Choose a larger number for a lower bitrate and smaller file size; choose a smaller number for better video quality.
   * @public
   */
  NumberBFramesBetweenReferenceFrames?: number | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode.
   * @public
   */
  QvbrSettings?: Av1QvbrSettings | undefined;

  /**
   * 'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.'
   * @public
   */
  RateControlMode?: Av1RateControlMode | undefined;

  /**
   * Specify the number of slices per picture. This value must be 1, 2, 4, 8, 16, or 32. For progressive pictures, this value must be less than or equal to the number of macroblock rows. For interlaced pictures, this value must be less than or equal to half the number of macroblock rows.
   * @public
   */
  Slices?: number | undefined;

  /**
   * Keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   * @public
   */
  SpatialAdaptiveQuantization?: Av1SpatialAdaptiveQuantization | undefined;
}

/**
 * Optional when you set AVC-Intra class to Class 4K/2K. When you set AVC-Intra class to a different value, this object isn't allowed.
 * @public
 */
export interface AvcIntraUhdSettings {
  /**
   * Optional. Use Quality tuning level to choose how many transcoding passes MediaConvert does with your video. When you choose Multi-pass, your video quality is better and your output bitrate is more accurate. That is, the actual bitrate of your output is closer to the target bitrate defined in the specification. When you choose Single-pass, your encoding time is faster. The default behavior is Single-pass.
   * @public
   */
  QualityTuningLevel?: AvcIntraUhdQualityTuningLevel | undefined;
}

/**
 * Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.
 * @public
 */
export interface AvcIntraSettings {
  /**
   * Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality. Note that for Class 4K/2K, MediaConvert supports only 4:2:2 chroma subsampling.
   * @public
   */
  AvcIntraClass?: AvcIntraClass | undefined;

  /**
   * Optional when you set AVC-Intra class to Class 4K/2K. When you set AVC-Intra class to a different value, this object isn't allowed.
   * @public
   */
  AvcIntraUhdSettings?: AvcIntraUhdSettings | undefined;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: AvcIntraFramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: AvcIntraFramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   * @public
   */
  InterlaceMode?: AvcIntraInterlaceMode | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive.
   * @public
   */
  ScanTypeConversionMode?: AvcIntraScanTypeConversionMode | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25.
   * @public
   */
  SlowPal?: AvcIntraSlowPal | undefined;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine to create a smoother picture. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   * @public
   */
  Telecine?: AvcIntraTelecine | undefined;
}

/**
 * Required when you set Codec to the value FRAME_CAPTURE.
 * @public
 */
export interface FrameCaptureSettings {
  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.n.jpg where n is the 0-based sequence number of each Capture.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.NNNNNNN.jpg where N is the 0-based frame sequence number zero padded to 7 decimal places.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Maximum number of captures (encoded jpg output files).
   * @public
   */
  MaxCaptures?: number | undefined;

  /**
   * JPEG Quality - a higher value equals higher quality.
   * @public
   */
  Quality?: number | undefined;
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value GIF
 * @public
 */
export interface GifSettings {
  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   * @public
   */
  FramerateControl?: GifFramerateControl | undefined;

  /**
   * Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use Drop duplicate (DUPLICATE_DROP) conversion. When you choose Interpolate (INTERPOLATE) instead, the conversion produces smoother motion.
   * @public
   */
  FramerateConversionAlgorithm?: GifFramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;
}

/**
 * The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor.
 * @public
 */
export interface BandwidthReductionFilter {
  /**
   * Optionally specify the level of sharpening to apply when you use the Bandwidth reduction filter. Sharpening adds contrast to the edges of your video content and can reduce softness. Keep the default value Off to apply no sharpening. Set Sharpening strength to Low to apply a minimal amount of sharpening, or High to apply a maximum amount of sharpening.
   * @public
   */
  Sharpening?: BandwidthReductionFilterSharpening | undefined;

  /**
   * Specify the strength of the Bandwidth reduction filter. For most workflows, we recommend that you choose Auto to reduce the bandwidth of your output with little to no perceptual decrease in video quality. For high quality and high bitrate outputs, choose Low. For the most bandwidth reduction, choose High. We recommend that you choose High for low bitrate outputs. Note that High may incur a slight increase in the softness of your output.
   * @public
   */
  Strength?: BandwidthReductionFilterStrength | undefined;
}

/**
 * Settings for quality-defined variable bitrate encoding with the H.264 codec. Use these settings only when you set QVBR for Rate control mode.
 * @public
 */
export interface H264QvbrSettings {
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   * @public
   */
  MaxAverageBitrate?: number | undefined;

  /**
   * Use this setting only when you set Rate control mode to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   * @public
   */
  QvbrQualityLevel?: number | undefined;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   * @public
   */
  QvbrQualityLevelFineTune?: number | undefined;
}

/**
 * Required when you set Codec to the value H_264.
 * @public
 */
export interface H264Settings {
  /**
   * Keep the default value, Auto, for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set H264AdaptiveQuantization to a value other than Auto. Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off. Related settings: The value that you choose here applies to the following settings: H264FlickerAdaptiveQuantization, H264SpatialAdaptiveQuantization, and H264TemporalAdaptiveQuantization.
   * @public
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | undefined;

  /**
   * The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor.
   * @public
   */
  BandwidthReductionFilter?: BandwidthReductionFilter | undefined;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto.
   * @public
   */
  CodecLevel?: H264CodecLevel | undefined;

  /**
   * H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.
   * @public
   */
  CodecProfile?: H264CodecProfile | undefined;

  /**
   * Specify whether to allow the number of B-frames in your output GOP structure to vary or not depending on your input video content. To improve the subjective video quality of your output that has high-motion content: Leave blank or keep the default value Adaptive. MediaConvert will use fewer B-frames for high-motion video content than low-motion content. The maximum number of B- frames is limited by the value that you choose for B-frames between reference frames. To use the same number B-frames for all types of content: Choose Static.
   * @public
   */
  DynamicSubGop?: H264DynamicSubGop | undefined;

  /**
   * Optionally include or suppress markers at the end of your output that signal the end of the video stream. To include end of stream markers: Leave blank or keep the default value, Include. To not include end of stream markers: Choose Suppress. This is useful when your output will be inserted into another stream.
   * @public
   */
  EndOfStreamMarkers?: H264EndOfStreamMarkers | undefined;

  /**
   * Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.
   * @public
   */
  EntropyEncoding?: H264EntropyEncoding | undefined;

  /**
   * The video encoding method for your MPEG-4 AVC output. Keep the default value, PAFF, to have MediaConvert use PAFF encoding for interlaced outputs. Choose Force field to disable PAFF encoding and create separate interlaced fields. Choose MBAFF to disable PAFF and have MediaConvert use MBAFF encoding for interlaced outputs.
   * @public
   */
  FieldEncoding?: H264FieldEncoding | undefined;

  /**
   * Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264FlickerAdaptiveQuantization is Disabled. Change this value to Enabled to reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. To manually enable or disable H264FlickerAdaptiveQuantization, you must set Adaptive quantization to a value other than AUTO.
   * @public
   */
  FlickerAdaptiveQuantization?: H264FlickerAdaptiveQuantization | undefined;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: H264FramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: H264FramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Specify whether to allow B-frames to be referenced by other frame types. To use reference B-frames when your GOP structure has 1 or more B-frames: Leave blank or keep the default value Enabled. We recommend that you choose Enabled to help improve the video quality of your output relative to its bitrate. To not use reference B-frames: Choose Disabled.
   * @public
   */
  GopBReference?: H264GopBReference | undefined;

  /**
   * Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. In the console, do this by keeping the default empty value. If you do explicitly specify a value, for segmented outputs, don't set this value to 0.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * Use this setting only when you set GOP mode control to Specified, frames or Specified, seconds. Specify the GOP length using a whole number of frames or a decimal value of seconds. MediaConvert will interpret this value as frames or seconds depending on the value you choose for GOP mode control. If you want to allow MediaConvert to automatically determine GOP size, leave GOP size blank and set GOP mode control to Auto. If your output group specifies HLS, DASH, or CMAF, leave GOP size blank and set GOP mode control to Auto in each output in your output group.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto and and leave GOP size blank. By default, if you don't specify GOP mode control, MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames or Specified, seconds and then provide the GOP length in the related setting GOP size.
   * @public
   */
  GopSizeUnits?: H264GopSizeUnits | undefined;

  /**
   * If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.
   * @public
   */
  HrdBufferFinalFillPercentage?: number | undefined;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   * @public
   */
  HrdBufferInitialFillPercentage?: number | undefined;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   * @public
   */
  HrdBufferSize?: number | undefined;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   * @public
   */
  InterlaceMode?: H264InterlaceMode | undefined;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Specify the minimum number of frames allowed between two IDR-frames in your output. This includes frames created at the start of a GOP or a scene change. Use Min I-Interval to improve video compression by varying GOP size when two IDR-frames would be created near each other. For example, if a regular cadence-driven IDR-frame would fall within 5 frames of a scene-change IDR-frame, and you set Min I-interval to 5, then the encoder would only write an IDR-frame for the scene-change. In this way, one GOP is shortened or extended. If a cadence-driven IDR-frame would be further than 5 frames from a scene-change IDR-frame, then the encoder leaves all IDR-frames in place. To use an automatically determined interval: We recommend that you keep this value blank. This allows for MediaConvert to use an optimal setting according to the characteristics of your input video, and results in better video compression. To manually specify an interval: Enter a value from 1 to 30. Use when your downstream systems have specific GOP size requirements. To disable GOP size variance: Enter 0. MediaConvert will only create IDR-frames at the start of your output's cadence-driven GOP. Use when your downstream systems require a regular GOP size.
   * @public
   */
  MinIInterval?: number | undefined;

  /**
   * Specify the number of B-frames between reference frames in this output. For the best video quality: Leave blank. MediaConvert automatically determines the number of B-frames to use based on the characteristics of your input video. To manually specify the number of B-frames between reference frames: Enter an integer from 0 to 7.
   * @public
   */
  NumberBFramesBetweenReferenceFrames?: number | undefined;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   * @public
   */
  NumberReferenceFrames?: number | undefined;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   * @public
   */
  ParControl?: H264ParControl | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * The Quality tuning level you choose represents a trade-off between the encoding speed of your job and the output video quality. For the fastest encoding speed at the cost of video quality: Choose Single pass. For a good balance between encoding speed and video quality: Leave blank or keep the default value Single pass HQ. For the best video quality, at the cost of encoding speed: Choose Multi pass HQ. MediaConvert performs an analysis pass on your input followed by an encoding pass. Outputs that use this feature incur pro-tier pricing.
   * @public
   */
  QualityTuningLevel?: H264QualityTuningLevel | undefined;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode.
   * @public
   */
  QvbrSettings?: H264QvbrSettings | undefined;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   * @public
   */
  RateControlMode?: H264RateControlMode | undefined;

  /**
   * Places a PPS header on each encoded picture, even if repeated.
   * @public
   */
  RepeatPps?: H264RepeatPps | undefined;

  /**
   * Specify whether to apply Saliency aware encoding to your output. Use to improve the perceptual video quality of your output by allocating more encoding bits to the prominent or noticeable parts of your content. To apply saliency aware encoding, when possible: We recommend that you choose Preferred. The effects of Saliency aware encoding are best seen in lower bitrate outputs. When you choose Preferred, note that Saliency aware encoding will only apply to outputs that are 720p or higher in resolution. To not apply saliency aware encoding, prioritizing encoding speed over perceptual video quality: Choose Disabled.
   * @public
   */
  SaliencyAwareEncoding?: H264SaliencyAwareEncoding | undefined;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive.
   * @public
   */
  ScanTypeConversionMode?: H264ScanTypeConversionMode | undefined;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   * @public
   */
  SceneChangeDetect?: H264SceneChangeDetect | undefined;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * @public
   */
  Slices?: number | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25.
   * @public
   */
  SlowPal?: H264SlowPal | undefined;

  /**
   * Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness or by enabling a noise reducer filter. The Softness setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   * @public
   */
  Softness?: number | undefined;

  /**
   * Only use this setting when you change the default value, Auto, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264SpatialAdaptiveQuantization is Enabled. Keep this default value to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to set H264SpatialAdaptiveQuantization to Disabled. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. To manually enable or disable H264SpatialAdaptiveQuantization, you must set Adaptive quantization to a value other than AUTO.
   * @public
   */
  SpatialAdaptiveQuantization?: H264SpatialAdaptiveQuantization | undefined;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   * @public
   */
  Syntax?: H264Syntax | undefined;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine produces a 29.97i output. Soft telecine produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   * @public
   */
  Telecine?: H264Telecine | undefined;

  /**
   * Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264TemporalAdaptiveQuantization is Enabled. Keep this default value to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to set H264TemporalAdaptiveQuantization to Disabled. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization. To manually enable or disable H264TemporalAdaptiveQuantization, you must set Adaptive quantization to a value other than AUTO.
   * @public
   */
  TemporalAdaptiveQuantization?: H264TemporalAdaptiveQuantization | undefined;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   * @public
   */
  UnregisteredSeiTimecode?: H264UnregisteredSeiTimecode | undefined;

  /**
   * Specify how SPS and PPS NAL units are written in your output MP4 container, according to ISO/IEC 14496-15. If the location of these parameters doesn't matter in your workflow: Keep the default value, AVC1. MediaConvert writes SPS and PPS NAL units in the sample description ('stsd') box (but not into samples directly). To write SPS and PPS NAL units directly into samples (but not in the 'stsd' box): Choose AVC3. When you do, note that your output might not play properly with some downstream systems or players.
   * @public
   */
  WriteMp4PackagingType?: H264WriteMp4PackagingType | undefined;
}

/**
 * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode.
 * @public
 */
export interface H265QvbrSettings {
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   * @public
   */
  MaxAverageBitrate?: number | undefined;

  /**
   * Use this setting only when you set Rate control mode to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   * @public
   */
  QvbrQualityLevel?: number | undefined;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   * @public
   */
  QvbrQualityLevelFineTune?: number | undefined;
}

/**
 * Settings for H265 codec
 * @public
 */
export interface H265Settings {
  /**
   * When you set Adaptive Quantization to Auto, or leave blank, MediaConvert automatically applies quantization to improve the video quality of your output. Set Adaptive Quantization to Low, Medium, High, Higher, or Max to manually control the strength of the quantization filter. When you do, you can specify a value for Spatial Adaptive Quantization, Temporal Adaptive Quantization, and Flicker Adaptive Quantization, to further control the quantization filter. Set Adaptive Quantization to Off to apply no quantization to your output.
   * @public
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | undefined;

  /**
   * Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).
   * @public
   */
  AlternateTransferFunctionSei?: H265AlternateTransferFunctionSei | undefined;

  /**
   * The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor.
   * @public
   */
  BandwidthReductionFilter?: BandwidthReductionFilter | undefined;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * H.265 Level.
   * @public
   */
  CodecLevel?: H265CodecLevel | undefined;

  /**
   * Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.
   * @public
   */
  CodecProfile?: H265CodecProfile | undefined;

  /**
   * Use Deblocking to improve the video quality of your output by smoothing the edges of macroblock artifacts created during video compression. To reduce blocking artifacts at block boundaries, and improve overall video quality: Keep the default value, Enabled. To not apply any deblocking: Choose Disabled. Visible block edge artifacts might appear in the output, especially at lower bitrates.
   * @public
   */
  Deblocking?: H265Deblocking | undefined;

  /**
   * Specify whether to allow the number of B-frames in your output GOP structure to vary or not depending on your input video content. To improve the subjective video quality of your output that has high-motion content: Leave blank or keep the default value Adaptive. MediaConvert will use fewer B-frames for high-motion video content than low-motion content. The maximum number of B- frames is limited by the value that you choose for B-frames between reference frames. To use the same number B-frames for all types of content: Choose Static.
   * @public
   */
  DynamicSubGop?: H265DynamicSubGop | undefined;

  /**
   * Optionally include or suppress markers at the end of your output that signal the end of the video stream. To include end of stream markers: Leave blank or keep the default value, Include. To not include end of stream markers: Choose Suppress. This is useful when your output will be inserted into another stream.
   * @public
   */
  EndOfStreamMarkers?: H265EndOfStreamMarkers | undefined;

  /**
   * Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set adaptiveQuantization to a value other than Off.
   * @public
   */
  FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization | undefined;

  /**
   * Use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: H265FramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Specify whether to allow B-frames to be referenced by other frame types. To use reference B-frames when your GOP structure has 1 or more B-frames: Leave blank or keep the default value Enabled. We recommend that you choose Enabled to help improve the video quality of your output relative to its bitrate. To not use reference B-frames: Choose Disabled.
   * @public
   */
  GopBReference?: H265GopBReference | undefined;

  /**
   * Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, do this by keeping the default empty value. If you do explicitly specify a value, for segmented outputs, don't set this value to 0.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * Use this setting only when you set GOP mode control to Specified, frames or Specified, seconds. Specify the GOP length using a whole number of frames or a decimal value of seconds. MediaConvert will interpret this value as frames or seconds depending on the value you choose for GOP mode control. If you want to allow MediaConvert to automatically determine GOP size, leave GOP size blank and set GOP mode control to Auto. If your output group specifies HLS, DASH, or CMAF, leave GOP size blank and set GOP mode control to Auto in each output in your output group.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto and and leave GOP size blank. By default, if you don't specify GOP mode control, MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames or Specified, seconds and then provide the GOP length in the related setting GOP size.
   * @public
   */
  GopSizeUnits?: H265GopSizeUnits | undefined;

  /**
   * If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.
   * @public
   */
  HrdBufferFinalFillPercentage?: number | undefined;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   * @public
   */
  HrdBufferInitialFillPercentage?: number | undefined;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   * @public
   */
  HrdBufferSize?: number | undefined;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   * @public
   */
  InterlaceMode?: H265InterlaceMode | undefined;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Specify the minimum number of frames allowed between two IDR-frames in your output. This includes frames created at the start of a GOP or a scene change. Use Min I-Interval to improve video compression by varying GOP size when two IDR-frames would be created near each other. For example, if a regular cadence-driven IDR-frame would fall within 5 frames of a scene-change IDR-frame, and you set Min I-interval to 5, then the encoder would only write an IDR-frame for the scene-change. In this way, one GOP is shortened or extended. If a cadence-driven IDR-frame would be further than 5 frames from a scene-change IDR-frame, then the encoder leaves all IDR-frames in place. To use an automatically determined interval: We recommend that you keep this value blank. This allows for MediaConvert to use an optimal setting according to the characteristics of your input video, and results in better video compression. To manually specify an interval: Enter a value from 1 to 30. Use when your downstream systems have specific GOP size requirements. To disable GOP size variance: Enter 0. MediaConvert will only create IDR-frames at the start of your output's cadence-driven GOP. Use when your downstream systems require a regular GOP size.
   * @public
   */
  MinIInterval?: number | undefined;

  /**
   * If you are setting up the picture as a tile, you must set this to "disabled". In all other configurations, you typically enter "enabled".
   * @public
   */
  MvOverPictureBoundaries?: H265MvOverPictureBoundaries | undefined;

  /**
   * If you are setting up the picture as a tile, you must set this to "disabled". In other configurations, you typically enter "enabled".
   * @public
   */
  MvTemporalPredictor?: H265MvTemporalPredictor | undefined;

  /**
   * Specify the number of B-frames between reference frames in this output. For the best video quality: Leave blank. MediaConvert automatically determines the number of B-frames to use based on the characteristics of your input video. To manually specify the number of B-frames between reference frames: Enter an integer from 0 to 7.
   * @public
   */
  NumberBFramesBetweenReferenceFrames?: number | undefined;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   * @public
   */
  NumberReferenceFrames?: number | undefined;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   * @public
   */
  ParControl?: H265ParControl | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   * @public
   */
  QualityTuningLevel?: H265QualityTuningLevel | undefined;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode.
   * @public
   */
  QvbrSettings?: H265QvbrSettings | undefined;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   * @public
   */
  RateControlMode?: H265RateControlMode | undefined;

  /**
   * Specify Sample Adaptive Offset (SAO) filter strength. Adaptive mode dynamically selects best strength based on content
   * @public
   */
  SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode | undefined;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive.
   * @public
   */
  ScanTypeConversionMode?: H265ScanTypeConversionMode | undefined;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   * @public
   */
  SceneChangeDetect?: H265SceneChangeDetect | undefined;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * @public
   */
  Slices?: number | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25.
   * @public
   */
  SlowPal?: H265SlowPal | undefined;

  /**
   * Keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   * @public
   */
  SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization | undefined;

  /**
   * This field applies only if the Streams > Advanced > Framerate field is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer field and the Streams > Advanced > Interlaced Mode field to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
   * @public
   */
  Telecine?: H265Telecine | undefined;

  /**
   * Keep the default value, Enabled, to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization.
   * @public
   */
  TemporalAdaptiveQuantization?: H265TemporalAdaptiveQuantization | undefined;

  /**
   * Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.
   * @public
   */
  TemporalIds?: H265TemporalIds | undefined;

  /**
   * Set this field to set up the picture as a tile. You must also set TileWidth. The tile height must result in 22 or fewer rows in the frame. The tile width must result in 20 or fewer columns in the frame. And finally, the product of the column count and row count must be 64 or less. If the tile width and height are specified, MediaConvert will override the video codec slices field with a value that MediaConvert calculates.
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Set to "padded" to force MediaConvert to add padding to the frame, to obtain a frame that is a whole multiple of the tile size. If you are setting up the picture as a tile, you must enter "padded". In all other configurations, you typically enter "none".
   * @public
   */
  TilePadding?: H265TilePadding | undefined;

  /**
   * Set this field to set up the picture as a tile. See TileHeight for more information.
   * @public
   */
  TileWidth?: number | undefined;

  /**
   * Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.
   * @public
   */
  Tiles?: H265Tiles | undefined;

  /**
   * Select the tree block size used for encoding. If you enter "auto", the encoder will pick the best size. If you are setting up the picture as a tile, you must set this to 32x32. In all other configurations, you typically enter "auto".
   * @public
   */
  TreeBlockSize?: H265TreeBlockSize | undefined;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   * @public
   */
  UnregisteredSeiTimecode?: H265UnregisteredSeiTimecode | undefined;

  /**
   * If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.
   * @public
   */
  WriteMp4PackagingType?: H265WriteMp4PackagingType | undefined;
}

/**
 * Required when you set Codec to the value MPEG2.
 * @public
 */
export interface Mpeg2Settings {
  /**
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Spatial adaptive quantization, and Temporal adaptive quantization.
   * @public
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | undefined;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Use Level to set the MPEG-2 level for the video output.
   * @public
   */
  CodecLevel?: Mpeg2CodecLevel | undefined;

  /**
   * Use Profile to set the MPEG-2 profile for the video output.
   * @public
   */
  CodecProfile?: Mpeg2CodecProfile | undefined;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames.
   * @public
   */
  DynamicSubGop?: Mpeg2DynamicSubGop | undefined;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: Mpeg2FramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. When you create a streaming output, we recommend that you keep the default value, 1, so that players starting mid-stream receive an IDR frame as quickly as possible. Don't set this value to 0; that would break output segmenting.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * Specify the interval between keyframes, in seconds or frames, for this output. Default: 12 Related settings: When you specify the GOP size in seconds, set GOP mode control to Specified, seconds. The default value for GOP mode control is Frames.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Specify the units for GOP size. If you don't specify a value here, by default the encoder measures GOP size in frames.
   * @public
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | undefined;

  /**
   * If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.
   * @public
   */
  HrdBufferFinalFillPercentage?: number | undefined;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   * @public
   */
  HrdBufferInitialFillPercentage?: number | undefined;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   * @public
   */
  HrdBufferSize?: number | undefined;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   * @public
   */
  InterlaceMode?: Mpeg2InterlaceMode | undefined;

  /**
   * Use Intra DC precision to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.
   * @public
   */
  IntraDcPrecision?: Mpeg2IntraDcPrecision | undefined;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Specify the minimum number of frames allowed between two IDR-frames in your output. This includes frames created at the start of a GOP or a scene change. Use Min I-Interval to improve video compression by varying GOP size when two IDR-frames would be created near each other. For example, if a regular cadence-driven IDR-frame would fall within 5 frames of a scene-change IDR-frame, and you set Min I-interval to 5, then the encoder would only write an IDR-frame for the scene-change. In this way, one GOP is shortened or extended. If a cadence-driven IDR-frame would be further than 5 frames from a scene-change IDR-frame, then the encoder leaves all IDR-frames in place. To manually specify an interval: Enter a value from 1 to 30. Use when your downstream systems have specific GOP size requirements. To disable GOP size variance: Enter 0. MediaConvert will only create IDR-frames at the start of your output's cadence-driven GOP. Use when your downstream systems require a regular GOP size.
   * @public
   */
  MinIInterval?: number | undefined;

  /**
   * Specify the number of B-frames that MediaConvert puts between reference frames in this output. Valid values are whole numbers from 0 through 7. When you don't specify a value, MediaConvert defaults to 2.
   * @public
   */
  NumberBFramesBetweenReferenceFrames?: number | undefined;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   * @public
   */
  ParControl?: Mpeg2ParControl | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   * @public
   */
  QualityTuningLevel?: Mpeg2QualityTuningLevel | undefined;

  /**
   * Use Rate control mode to specify whether the bitrate is variable (vbr) or constant (cbr).
   * @public
   */
  RateControlMode?: Mpeg2RateControlMode | undefined;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive.
   * @public
   */
  ScanTypeConversionMode?: Mpeg2ScanTypeConversionMode | undefined;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.
   * @public
   */
  SceneChangeDetect?: Mpeg2SceneChangeDetect | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25.
   * @public
   */
  SlowPal?: Mpeg2SlowPal | undefined;

  /**
   * Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness or by enabling a noise reducer filter. The Softness setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, to use the AWS Elemental default matrices. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   * @public
   */
  Softness?: number | undefined;

  /**
   * Keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   * @public
   */
  SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization | undefined;

  /**
   * Specify whether this output's video uses the D10 syntax. Keep the default value to not use the syntax. Related settings: When you choose D10 for your MXF profile, you must also set this value to D10.
   * @public
   */
  Syntax?: Mpeg2Syntax | undefined;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine produces a 29.97i output. Soft telecine produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   * @public
   */
  Telecine?: Mpeg2Telecine | undefined;

  /**
   * Keep the default value, Enabled, to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization.
   * @public
   */
  TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization | undefined;
}

/**
 * Optional settings when you set Codec to the value Passthrough.
 * @public
 */
export interface PassthroughSettings {
  /**
   * Choose how MediaConvert handles start and end times for input clipping with video passthrough. Your input video codec must be H.264 or H.265 to use IFRAME. To clip at the nearest IDR-frame: Choose Nearest IDR. If an IDR-frame is not found at the frame that you specify, MediaConvert uses the next compatible IDR-frame. Note that your output may be shorter than your input clip duration. To clip at the nearest I-frame: Choose Nearest I-frame. If an I-frame is not found at the frame that you specify, MediaConvert uses the next compatible I-frame. Note that your output may be shorter than your input clip duration. We only recommend this setting for special workflows, and when you choose this setting your output may not be compatible with most players.
   * @public
   */
  FrameControl?: FrameControl | undefined;

  /**
   * AUTO will select the highest bitrate input in the video selector source. REMUX_ALL will passthrough all the selected streams in the video selector source. When selecting streams from multiple renditions (i.e. using Stream video selector type): REMUX_ALL will only remux all streams selected, and AUTO will use the highest bitrate video stream among the selected streams as source.
   * @public
   */
  VideoSelectorMode?: VideoSelectorMode | undefined;
}

/**
 * Required when you set Codec to the value PRORES.
 * @public
 */
export interface ProresSettings {
  /**
   * This setting applies only to ProRes 4444 and ProRes 4444 XQ outputs that you create from inputs that use 4:4:4 chroma sampling. Set Preserve 4:4:4 sampling to allow outputs to also use 4:4:4 chroma sampling. You must specify a value for this setting when your output codec profile supports 4:4:4 chroma sampling. Related Settings: For Apple ProRes outputs with 4:4:4 chroma sampling: Choose Preserve 4:4:4 sampling. Use when your input has 4:4:4 chroma sampling and your output codec Profile is Apple ProRes 4444 or 4444 XQ. Note that when you choose Preserve 4:4:4 sampling, you cannot include any of the following Preprocessors: Dolby Vision, HDR10+, or Noise reducer.
   * @public
   */
  ChromaSampling?: ProresChromaSampling | undefined;

  /**
   * Use Profile to specify the type of Apple ProRes codec to use for this output.
   * @public
   */
  CodecProfile?: ProresCodecProfile | undefined;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: ProresFramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   * @public
   */
  InterlaceMode?: ProresInterlaceMode | undefined;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   * @public
   */
  ParControl?: ProresParControl | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive.
   * @public
   */
  ScanTypeConversionMode?: ProresScanTypeConversionMode | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25.
   * @public
   */
  SlowPal?: ProresSlowPal | undefined;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine to create a smoother picture. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   * @public
   */
  Telecine?: ProresTelecine | undefined;
}

/**
 * Required when you set Codec, under VideoDescription>CodecSettings to the value UNCOMPRESSED.
 * @public
 */
export interface UncompressedSettings {
  /**
   * The four character code for the uncompressed video.
   * @public
   */
  Fourcc?: UncompressedFourcc | undefined;

  /**
   * Use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: UncompressedFramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: UncompressedFramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output.
   * @public
   */
  InterlaceMode?: UncompressedInterlaceMode | undefined;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive.
   * @public
   */
  ScanTypeConversionMode?: UncompressedScanTypeConversionMode | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25.
   * @public
   */
  SlowPal?: UncompressedSlowPal | undefined;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine to create a smoother picture. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   * @public
   */
  Telecine?: UncompressedTelecine | undefined;
}

/**
 * Required when you set Codec to the value VC3
 * @public
 */
export interface Vc3Settings {
  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: Vc3FramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: Vc3FramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output.
   * @public
   */
  InterlaceMode?: Vc3InterlaceMode | undefined;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive.
   * @public
   */
  ScanTypeConversionMode?: Vc3ScanTypeConversionMode | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25.
   * @public
   */
  SlowPal?: Vc3SlowPal | undefined;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine to create a smoother picture. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   * @public
   */
  Telecine?: Vc3Telecine | undefined;

  /**
   * Specify the VC3 class to choose the quality characteristics for this output. VC3 class, together with the settings Framerate (framerateNumerator and framerateDenominator) and Resolution (height and width), determine your output bitrate. For example, say that your video resolution is 1920x1080 and your framerate is 29.97. Then Class 145 gives you an output with a bitrate of approximately 145 Mbps and Class 220 gives you and output with a bitrate of approximately 220 Mbps. VC3 class also specifies the color bit depth of your output.
   * @public
   */
  Vc3Class?: Vc3Class | undefined;
}

/**
 * Required when you set Codec to the value VP8.
 * @public
 */
export interface Vp8Settings {
  /**
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: Vp8FramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: Vp8FramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Optional. Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   * @public
   */
  HrdBufferSize?: number | undefined;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   * @public
   */
  ParControl?: Vp8ParControl | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   * @public
   */
  QualityTuningLevel?: Vp8QualityTuningLevel | undefined;

  /**
   * With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode.
   * @public
   */
  RateControlMode?: Vp8RateControlMode | undefined;
}

/**
 * Required when you set Codec to the value VP9.
 * @public
 */
export interface Vp9Settings {
  /**
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction.
   * @public
   */
  FramerateControl?: Vp9FramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: Vp9FramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   * @public
   */
  HrdBufferSize?: number | undefined;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio for this output. The default behavior is to use the same pixel aspect ratio as your input video.
   * @public
   */
  ParControl?: Vp9ParControl | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Required when you set Pixel aspect ratio to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   * @public
   */
  QualityTuningLevel?: Vp9QualityTuningLevel | undefined;

  /**
   * With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode.
   * @public
   */
  RateControlMode?: Vp9RateControlMode | undefined;
}

/**
 * Required when you set Profile to the value XAVC_4K_INTRA_CBG.
 * @public
 */
export interface Xavc4kIntraCbgProfileSettings {
  /**
   * Specify the XAVC Intra 4k (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   * @public
   */
  XavcClass?: Xavc4kIntraCbgProfileClass | undefined;
}

/**
 * Required when you set Profile to the value XAVC_4K_INTRA_VBR.
 * @public
 */
export interface Xavc4kIntraVbrProfileSettings {
  /**
   * Specify the XAVC Intra 4k (VBR) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   * @public
   */
  XavcClass?: Xavc4kIntraVbrProfileClass | undefined;
}

/**
 * Required when you set Profile to the value XAVC_4K.
 * @public
 */
export interface Xavc4kProfileSettings {
  /**
   * Specify the XAVC 4k (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   * @public
   */
  BitrateClass?: Xavc4kProfileBitrateClass | undefined;

  /**
   * Specify the codec profile for this output. Choose High, 8-bit, 4:2:0 (HIGH) or High, 10-bit, 4:2:2 (HIGH_422). These profiles are specified in ITU-T H.264.
   * @public
   */
  CodecProfile?: Xavc4kProfileCodecProfile | undefined;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto, for the setting Adaptive quantization. When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization to a value other than Off or Auto. Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.
   * @public
   */
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization | undefined;

  /**
   * Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow to allow the encoder to use B-frames as reference frames. Choose Don't allow to prevent the encoder from using B-frames as reference frames.
   * @public
   */
  GopBReference?: XavcGopBReference | undefined;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.
   * @public
   */
  HrdBufferSize?: number | undefined;

  /**
   * Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   * @public
   */
  QualityTuningLevel?: Xavc4kProfileQualityTuningLevel | undefined;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * @public
   */
  Slices?: number | undefined;
}

/**
 * Required when you set Profile to the value XAVC_HD_INTRA_CBG.
 * @public
 */
export interface XavcHdIntraCbgProfileSettings {
  /**
   * Specify the XAVC Intra HD (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   * @public
   */
  XavcClass?: XavcHdIntraCbgProfileClass | undefined;
}

/**
 * Required when you set Profile to the value XAVC_HD.
 * @public
 */
export interface XavcHdProfileSettings {
  /**
   * Specify the XAVC HD (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   * @public
   */
  BitrateClass?: XavcHdProfileBitrateClass | undefined;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto, for the setting Adaptive quantization. When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization to a value other than Off or Auto. Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.
   * @public
   */
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization | undefined;

  /**
   * Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow to allow the encoder to use B-frames as reference frames. Choose Don't allow to prevent the encoder from using B-frames as reference frames.
   * @public
   */
  GopBReference?: XavcGopBReference | undefined;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.
   * @public
   */
  HrdBufferSize?: number | undefined;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   * @public
   */
  InterlaceMode?: XavcInterlaceMode | undefined;

  /**
   * Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   * @public
   */
  QualityTuningLevel?: XavcHdProfileQualityTuningLevel | undefined;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * @public
   */
  Slices?: number | undefined;

  /**
   * Ignore this setting unless you set Frame rate (framerateNumerator divided by framerateDenominator) to 29.970. If your input framerate is 23.976, choose Hard. Otherwise, keep the default value None. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-telecine-and-inverse-telecine.html.
   * @public
   */
  Telecine?: XavcHdProfileTelecine | undefined;
}

/**
 * Required when you set Codec to the value XAVC.
 * @public
 */
export interface XavcSettings {
  /**
   * Keep the default value, Auto, for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set Adaptive quantization to a value other than Auto. Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off. Related settings: The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization, and Temporal adaptive quantization.
   * @public
   */
  AdaptiveQuantization?: XavcAdaptiveQuantization | undefined;

  /**
   * Optional. Choose a specific entropy encoding mode only when you want to override XAVC recommendations. If you choose the value auto, MediaConvert uses the mode that the XAVC file format specifies given this output's operating point.
   * @public
   */
  EntropyEncoding?: XavcEntropyEncoding | undefined;

  /**
   * If you are using the console, use the Frame rate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list. The framerates shown in the dropdown list are decimal approximations of fractions.
   * @public
   */
  FramerateControl?: XavcFramerateControl | undefined;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing your video's frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. To create an output with the same number of frames as your input: Choose Maintain frame count. When you do, MediaConvert will not drop, interpolate, add, or otherwise change the frame count from your input to your output. Note that since the frame count is maintained, the duration of your output will become shorter at higher frame rates and longer at lower frame rates.
   * @public
   */
  FramerateConversionAlgorithm?: XavcFramerateConversionAlgorithm | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Frame rate. In this example, specify 23.976.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Optionally choose one or more per frame metric reports to generate along with your output. You can use these metrics to analyze your video output according to one or more commonly used image quality metrics. You can specify per frame metrics for output groups or for individual outputs. When you do, MediaConvert writes a CSV (Comma-Separated Values) file to your S3 output destination, named after the output name and metric type. For example: videofile_PSNR.csv Jobs that generate per frame metrics will take longer to complete, depending on the resolution and complexity of your output. For example, some 4K jobs might take up to twice as long to complete. Note that when analyzing the video quality of your output, or when comparing the video quality of multiple different outputs, we generally also recommend a detailed visual review in a controlled environment. You can choose from the following per frame metrics: * PSNR: Peak Signal-to-Noise Ratio * SSIM: Structural Similarity Index Measure * MS_SSIM: Multi-Scale Similarity Index Measure * PSNR_HVS: Peak Signal-to-Noise Ratio, Human Visual System * VMAF: Video Multi-Method Assessment Fusion * QVBR: Quality-Defined Variable Bitrate. This option is only available when your output uses the QVBR rate control mode. * SHOT_CHANGE: Shot Changes
   * @public
   */
  PerFrameMetrics?: FrameMetricType[] | undefined;

  /**
   * Specify the XAVC profile for this output. For more information, see the Sony documentation at https://www.xavc-info.org/. Note that MediaConvert doesn't support the interlaced video XAVC operating points for XAVC_HD_INTRA_CBG. To create an interlaced XAVC output, choose the profile XAVC_HD.
   * @public
   */
  Profile?: XavcProfile | undefined;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Frame rate to 25.
   * @public
   */
  SlowPal?: XavcSlowPal | undefined;

  /**
   * Ignore this setting unless your downstream workflow requires that you specify it explicitly. Otherwise, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness or by enabling a noise reducer filter. The Softness setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   * @public
   */
  Softness?: number | undefined;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto, for the setting Adaptive quantization. When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   * @public
   */
  SpatialAdaptiveQuantization?: XavcSpatialAdaptiveQuantization | undefined;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto, for the setting Adaptive quantization. When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled, to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal adaptive quantization, adjust the strength of the filter with the setting Adaptive quantization.
   * @public
   */
  TemporalAdaptiveQuantization?: XavcTemporalAdaptiveQuantization | undefined;

  /**
   * Required when you set Profile to the value XAVC_4K_INTRA_CBG.
   * @public
   */
  Xavc4kIntraCbgProfileSettings?: Xavc4kIntraCbgProfileSettings | undefined;

  /**
   * Required when you set Profile to the value XAVC_4K_INTRA_VBR.
   * @public
   */
  Xavc4kIntraVbrProfileSettings?: Xavc4kIntraVbrProfileSettings | undefined;

  /**
   * Required when you set Profile to the value XAVC_4K.
   * @public
   */
  Xavc4kProfileSettings?: Xavc4kProfileSettings | undefined;

  /**
   * Required when you set Profile to the value XAVC_HD_INTRA_CBG.
   * @public
   */
  XavcHdIntraCbgProfileSettings?: XavcHdIntraCbgProfileSettings | undefined;

  /**
   * Required when you set Profile to the value XAVC_HD.
   * @public
   */
  XavcHdProfileSettings?: XavcHdProfileSettings | undefined;
}

/**
 * Video codec settings contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec. For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * GIF, GifSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * UNCOMPRESSED, UncompressedSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings
 * @public
 */
export interface VideoCodecSettings {
  /**
   * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
   * @public
   */
  Av1Settings?: Av1Settings | undefined;

  /**
   * Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.
   * @public
   */
  AvcIntraSettings?: AvcIntraSettings | undefined;

  /**
   * Specifies the video codec. This must be equal to one of the enum values defined by the object VideoCodec. To passthrough the video stream of your input without any video encoding: Choose Passthrough. More information about passthrough codec support and job settings requirements, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/video-passthrough-feature-restrictions.html
   * @public
   */
  Codec?: VideoCodec | undefined;

  /**
   * Required when you set Codec to the value FRAME_CAPTURE.
   * @public
   */
  FrameCaptureSettings?: FrameCaptureSettings | undefined;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value GIF
   * @public
   */
  GifSettings?: GifSettings | undefined;

  /**
   * Required when you set Codec to the value H_264.
   * @public
   */
  H264Settings?: H264Settings | undefined;

  /**
   * Settings for H265 codec
   * @public
   */
  H265Settings?: H265Settings | undefined;

  /**
   * Required when you set Codec to the value MPEG2.
   * @public
   */
  Mpeg2Settings?: Mpeg2Settings | undefined;

  /**
   * Optional settings when you set Codec to the value Passthrough.
   * @public
   */
  PassthroughSettings?: PassthroughSettings | undefined;

  /**
   * Required when you set Codec to the value PRORES.
   * @public
   */
  ProresSettings?: ProresSettings | undefined;

  /**
   * Required when you set Codec, under VideoDescription>CodecSettings to the value UNCOMPRESSED.
   * @public
   */
  UncompressedSettings?: UncompressedSettings | undefined;

  /**
   * Required when you set Codec to the value VC3
   * @public
   */
  Vc3Settings?: Vc3Settings | undefined;

  /**
   * Required when you set Codec to the value VP8.
   * @public
   */
  Vp8Settings?: Vp8Settings | undefined;

  /**
   * Required when you set Codec to the value VP9.
   * @public
   */
  Vp9Settings?: Vp9Settings | undefined;

  /**
   * Required when you set Codec to the value XAVC.
   * @public
   */
  XavcSettings?: XavcSettings | undefined;
}

/**
 * Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip.
 * @public
 */
export interface ClipLimits {
  /**
   * Specify the Maximum RGB color sample range tolerance for your output. MediaConvert corrects any YUV values that, when converted to RGB, would be outside the upper tolerance that you specify. Enter an integer from 90 to 105 as an offset percentage to the maximum possible value. Leave blank to use the default value 100. When you specify a value for Maximum RGB tolerance, you must set Sample range conversion to Limited range clip.
   * @public
   */
  MaximumRGBTolerance?: number | undefined;

  /**
   * Specify the Maximum YUV color sample limit. MediaConvert conforms any pixels in your input above the value that you specify to typical limited range bounds. Enter an integer from 920 to 1023. Leave blank to use the default value 940. The value that you enter applies to 10-bit ranges. For 8-bit ranges, MediaConvert automatically scales this value down. When you specify a value for Maximum YUV, you must set Sample range conversion to Limited range clip.
   * @public
   */
  MaximumYUV?: number | undefined;

  /**
   * Specify the Minimum RGB color sample range tolerance for your output. MediaConvert corrects any YUV values that, when converted to RGB, would be outside the lower tolerance that you specify. Enter an integer from -5 to 10 as an offset percentage to the minimum possible value. Leave blank to use the default value 0. When you specify a value for Minimum RGB tolerance, you must set Sample range conversion to Limited range clip.
   * @public
   */
  MinimumRGBTolerance?: number | undefined;

  /**
   * Specify the Minimum YUV color sample limit. MediaConvert conforms any pixels in your input below the value that you specify to typical limited range bounds. Enter an integer from 0 to 128. Leave blank to use the default value 64. The value that you enter applies to 10-bit ranges. For 8-bit ranges, MediaConvert automatically scales this value down. When you specify a value for Minumum YUV, you must set Sample range conversion to Limited range clip.
   * @public
   */
  MinimumYUV?: number | undefined;
}

/**
 * Settings for color correction.
 * @public
 */
export interface ColorCorrector {
  /**
   * Brightness level.
   * @public
   */
  Brightness?: number | undefined;

  /**
   * Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip.
   * @public
   */
  ClipLimits?: ClipLimits | undefined;

  /**
   * Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses tone mapping to approximate the outcome of manually regrading from HDR to SDR. When you specify an output color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:
   *   * HDR 10: BT.2020, PQ, BT.2020 non-constant
   *   * HLG 2020: BT.2020, HLG, BT.2020 non-constant
   *   * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709
   *   * P3D65 (SDR): Display P3, sRGB, BT.709
   *   * P3D65 (HDR): Display P3, PQ, BT.709
   * @public
   */
  ColorSpaceConversion?: ColorSpaceConversion | undefined;

  /**
   * Contrast level.
   * @public
   */
  Contrast?: number | undefined;

  /**
   * Use these settings when you convert to the HDR 10 color space. Specify the SMPTE ST 2086 Mastering Display Color Volume static metadata that you want signaled in the output. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. When you set Color space conversion to HDR 10, these settings are required. You must set values for Max frame average light level and Max content light level; these settings don't have a default value. The default values for the other HDR 10 metadata settings are defined by the P3D65 color space. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   * @public
   */
  Hdr10Metadata?: Hdr10Metadata | undefined;

  /**
   * Specify how MediaConvert maps brightness and colors from your HDR input to your SDR output. The mode that you select represents a creative choice, with different tradeoffs in the details and tones of your output. To maintain details in bright or saturated areas of your output: Choose Preserve details. For some sources, your SDR output may look less bright and less saturated when compared to your HDR source. MediaConvert automatically applies this mode for HLG sources, regardless of your choice. For a bright and saturated output: Choose Vibrant. We recommend that you choose this mode when any of your source content is HDR10, and for the best results when it is mastered for 1000 nits. You may notice loss of details in bright or saturated areas of your output. HDR to SDR tone mapping has no effect when your input is SDR.
   * @public
   */
  HdrToSdrToneMapper?: HDRToSDRToneMapper | undefined;

  /**
   * Hue in degrees.
   * @public
   */
  Hue?: number | undefined;

  /**
   * Specify the maximum mastering display luminance. Enter an integer from 0 to 2147483647, in units of 0.0001 nits. For example, enter 10000000 for 1000 nits.
   * @public
   */
  MaxLuminance?: number | undefined;

  /**
   * Specify how MediaConvert limits the color sample range for this output. To create a limited range output from a full range input: Choose Limited range squeeze. For full range inputs, MediaConvert performs a linear offset to color samples equally across all pixels and frames. Color samples in 10-bit outputs are limited to 64 through 940, and 8-bit outputs are limited to 16 through 235. Note: For limited range inputs, values for color samples are passed through to your output unchanged. MediaConvert does not limit the sample range. To correct pixels in your input that are out of range or out of gamut: Choose Limited range clip. Use for broadcast applications. MediaConvert conforms any pixels outside of the values that you specify under Minimum YUV and Maximum YUV to limited range bounds. MediaConvert also corrects any YUV values that, when converted to RGB, would be outside the bounds you specify under Minimum RGB tolerance and Maximum RGB tolerance. With either limited range conversion, MediaConvert writes the sample range metadata in the output.
   * @public
   */
  SampleRangeConversion?: SampleRangeConversion | undefined;

  /**
   * Saturation level.
   * @public
   */
  Saturation?: number | undefined;

  /**
   * Specify the reference white level, in nits, for all of your SDR inputs. Use to correct brightness levels within HDR10 outputs. The following color metadata must be present in your SDR input: color primaries, transfer characteristics, and matrix coefficients. If your SDR input has missing color metadata, or if you want to correct input color metadata, manually specify a color space in the input video selector. For 1,000 nit peak brightness displays, we recommend that you set SDR reference white level to 203 (according to ITU-R BT.2408). Leave blank to use the default value of 100, or specify an integer from 100 to 1000.
   * @public
   */
  SdrReferenceWhiteLevel?: number | undefined;
}

/**
 * Settings for deinterlacer
 * @public
 */
export interface Deinterlacer {
  /**
   * Only applies when you set Deinterlace mode to Deinterlace or Adaptive. Interpolate produces sharper pictures, while blend produces smoother motion. If your source file includes a ticker, such as a scrolling headline at the bottom of the frame: Choose Interpolate ticker or Blend ticker. To apply field doubling: Choose Linear interpolation. Note that Linear interpolation may introduce video artifacts into your output.
   * @public
   */
  Algorithm?: DeinterlaceAlgorithm | undefined;

  /**
   * - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is a good chance that the metadata has tagged frames as progressive when they are not progressive. Do not turn on otherwise; processing frames that are already progressive into progressive will probably result in lower quality video.
   * @public
   */
  Control?: DeinterlacerControl | undefined;

  /**
   * Use Deinterlacer to choose how the service will do deinterlacing. Default is Deinterlace.
   * - Deinterlace converts interlaced to progressive.
   * - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p.
   * - Adaptive auto-detects and converts to progressive.
   * @public
   */
  Mode?: DeinterlacerMode | undefined;
}

/**
 * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
 * @public
 */
export interface DolbyVisionLevel6Metadata {
  /**
   * Maximum Content Light Level. Static HDR metadata that corresponds to the brightest pixel in the entire stream. Measured in nits.
   * @public
   */
  MaxCll?: number | undefined;

  /**
   * Maximum Frame-Average Light Level. Static HDR metadata that corresponds to the highest frame-average brightness in the entire stream. Measured in nits.
   * @public
   */
  MaxFall?: number | undefined;
}

/**
 * Create Dolby Vision Profile 5 or Profile 8.1 compatible video output.
 * @public
 */
export interface DolbyVision {
  /**
   * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
   * @public
   */
  L6Metadata?: DolbyVisionLevel6Metadata | undefined;

  /**
   * Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.
   * @public
   */
  L6Mode?: DolbyVisionLevel6Mode | undefined;

  /**
   * Required when you set Dolby Vision Profile to Profile 8.1. When you set Content mapping to None, content mapping is not applied to the HDR10-compatible signal. Depending on the source peak nit level, clipping might occur on HDR devices without Dolby Vision. When you set Content mapping to HDR10 1000, the transcoder creates a 1,000 nits peak HDR10-compatible signal by applying static content mapping to the source. This mode is speed-optimized for PQ10 sources with metadata that is created from analysis. For graded Dolby Vision content, be aware that creative intent might not be guaranteed with extreme 1,000 nits trims.
   * @public
   */
  Mapping?: DolbyVisionMapping | undefined;

  /**
   * Required when you enable Dolby Vision. Use Profile 5 to include frame-interleaved Dolby Vision metadata in your output. Your input must include Dolby Vision metadata or an HDR10 YUV color space. Use Profile 8.1 to include frame-interleaved Dolby Vision metadata and HDR10 metadata in your output. Your input must include Dolby Vision metadata.
   * @public
   */
  Profile?: DolbyVisionProfile | undefined;
}

/**
 * Setting for HDR10+ metadata insertion
 * @public
 */
export interface Hdr10Plus {
  /**
   * Specify the HDR10+ mastering display normalized peak luminance, in nits. This is the normalized actual peak luminance of the mastering display, as defined by ST 2094-40.
   * @public
   */
  MasteringMonitorNits?: number | undefined;

  /**
   * Specify the HDR10+ target display nominal peak luminance, in nits. This is the nominal maximum luminance of the target display as defined by ST 2094-40.
   * @public
   */
  TargetMonitorNits?: number | undefined;
}

/**
 * Settings for a noise reducer filter
 * @public
 */
export interface NoiseReducerFilterSettings {
  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   * @public
   */
  Strength?: number | undefined;
}

/**
 * Noise reducer filter settings for spatial filter.
 * @public
 */
export interface NoiseReducerSpatialFilterSettings {
  /**
   * Specify strength of post noise reduction sharpening filter, with 0 disabling the filter and 3 enabling it at maximum strength.
   * @public
   */
  PostFilterSharpenStrength?: number | undefined;

  /**
   * The speed of the filter, from -2 (lower speed) to 3 (higher speed), with 0 being the nominal value.
   * @public
   */
  Speed?: number | undefined;

  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   * @public
   */
  Strength?: number | undefined;
}

/**
 * Noise reducer filter settings for temporal filter.
 * @public
 */
export interface NoiseReducerTemporalFilterSettings {
  /**
   * Use Aggressive mode for content that has complex motion. Higher values produce stronger temporal filtering. This filters highly complex scenes more aggressively and creates better VQ for low bitrate outputs.
   * @public
   */
  AggressiveMode?: number | undefined;

  /**
   * When you set Noise reducer to Temporal, the bandwidth and sharpness of your output is reduced. You can optionally use Post temporal sharpening to apply sharpening to the edges of your output. Note that Post temporal sharpening will also make the bandwidth reduction from the Noise reducer smaller. The default behavior, Auto, allows the transcoder to determine whether to apply sharpening, depending on your input type and quality. When you set Post temporal sharpening to Enabled, specify how much sharpening is applied using Post temporal sharpening strength. Set Post temporal sharpening to Disabled to not apply sharpening.
   * @public
   */
  PostTemporalSharpening?: NoiseFilterPostTemporalSharpening | undefined;

  /**
   * Use Post temporal sharpening strength to define the amount of sharpening the transcoder applies to your output. Set Post temporal sharpening strength to Low, Medium, or High to indicate the amount of sharpening.
   * @public
   */
  PostTemporalSharpeningStrength?: NoiseFilterPostTemporalSharpeningStrength | undefined;

  /**
   * The speed of the filter (higher number is faster). Low setting reduces bit rate at the cost of transcode time, high setting improves transcode time at the cost of bit rate.
   * @public
   */
  Speed?: number | undefined;

  /**
   * Specify the strength of the noise reducing filter on this output. Higher values produce stronger filtering. We recommend the following value ranges, depending on the result that you want: * 0-2 for complexity reduction with minimal sharpness loss * 2-8 for complexity reduction with image preservation * 8-16 for a high level of complexity reduction
   * @public
   */
  Strength?: number | undefined;
}

/**
 * Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter.
 * @public
 */
export interface NoiseReducer {
  /**
   * Use Noise reducer filter to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer. * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.
   * @public
   */
  Filter?: NoiseReducerFilter | undefined;

  /**
   * Settings for a noise reducer filter
   * @public
   */
  FilterSettings?: NoiseReducerFilterSettings | undefined;

  /**
   * Noise reducer filter settings for spatial filter.
   * @public
   */
  SpatialFilterSettings?: NoiseReducerSpatialFilterSettings | undefined;

  /**
   * Noise reducer filter settings for temporal filter.
   * @public
   */
  TemporalFilterSettings?: NoiseReducerTemporalFilterSettings | undefined;
}

/**
 * For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.
 * @public
 */
export interface NexGuardFileMarkerSettings {
  /**
   * Use the base64 license string that Nagra provides you. Enter it directly in your JSON job specification or in the console. Required when you include Nagra NexGuard File Marker watermarking in your job.
   * @public
   */
  License?: string | undefined;

  /**
   * Specify the payload ID that you want associated with this output. Valid values vary depending on your Nagra NexGuard forensic watermarking workflow. Required when you include Nagra NexGuard File Marker watermarking in your job. For PreRelease Content (NGPR/G2), specify an integer from 1 through 4,194,303. You must generate a unique ID for each asset you watermark, and keep a record of which ID you have assigned to each asset. Neither Nagra nor MediaConvert keep track of the relationship between output files and your IDs. For OTT Streaming, create two adaptive bitrate (ABR) stacks for each asset. Do this by setting up two output groups. For one output group, set the value of Payload ID to 0 in every output. For the other output group, set Payload ID to 1 in every output.
   * @public
   */
  Payload?: number | undefined;

  /**
   * Enter one of the watermarking preset strings that Nagra provides you. Required when you include Nagra NexGuard File Marker watermarking in your job.
   * @public
   */
  Preset?: string | undefined;

  /**
   * Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.
   * @public
   */
  Strength?: WatermarkingStrength | undefined;
}

/**
 * If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
 * @public
 */
export interface PartnerWatermarking {
  /**
   * For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.
   * @public
   */
  NexguardFileMarkerSettings?: NexGuardFileMarkerSettings | undefined;
}

/**
 * Settings for burning the output timecode and specified prefix into the output.
 * @public
 */
export interface TimecodeBurnin {
  /**
   * Use Font size to set the font size of any burned-in timecode. Valid values are 10, 16, 32, 48.
   * @public
   */
  FontSize?: number | undefined;

  /**
   * Use Position under Timecode burn-in to specify the location the burned-in timecode on output video.
   * @public
   */
  Position?: TimecodeBurninPosition | undefined;

  /**
   * Use Prefix to place ASCII characters before any burned-in timecode. For example, a prefix of "EZ-" will result in the timecode "EZ-00:00:00:00". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard.
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Find additional transcoding features under Preprocessors. Enable the features at each output individually. These features are disabled by default.
 * @public
 */
export interface VideoPreprocessor {
  /**
   * Use these settings to convert the color space or to modify properties such as hue and contrast for this output. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/converting-the-color-space.html.
   * @public
   */
  ColorCorrector?: ColorCorrector | undefined;

  /**
   * Use the deinterlacer to produce smoother motion and a clearer picture. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-scan-type.html.
   * @public
   */
  Deinterlacer?: Deinterlacer | undefined;

  /**
   * Enable Dolby Vision feature to produce Dolby Vision compatible video output.
   * @public
   */
  DolbyVision?: DolbyVision | undefined;

  /**
   * Enable HDR10+ analysis and metadata injection. Compatible with HEVC only.
   * @public
   */
  Hdr10Plus?: Hdr10Plus | undefined;

  /**
   * Enable the Image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
   * @public
   */
  ImageInserter?: ImageInserter | undefined;

  /**
   * Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter.
   * @public
   */
  NoiseReducer?: NoiseReducer | undefined;

  /**
   * If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
   * @public
   */
  PartnerWatermarking?: PartnerWatermarking | undefined;

  /**
   * Settings for burning the output timecode and specified prefix into the output.
   * @public
   */
  TimecodeBurnin?: TimecodeBurnin | undefined;
}

/**
 * Settings related to video encoding of your output. The specific video settings depend on the video codec that you choose.
 * @public
 */
export interface VideoDescription {
  /**
   * This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.
   * @public
   */
  AfdSignaling?: AfdSignaling | undefined;

  /**
   * The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.
   * @public
   */
  AntiAlias?: AntiAlias | undefined;

  /**
   * Specify the chroma sample positioning metadata for your H.264 or H.265 output. To have MediaConvert automatically determine chroma positioning: We recommend that you keep the default value, Auto. To specify center positioning: Choose Force center. To specify top left positioning: Choose Force top left.
   * @public
   */
  ChromaPositionMode?: ChromaPositionMode | undefined;

  /**
   * Video codec settings contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec. For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * GIF, GifSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * UNCOMPRESSED, UncompressedSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings
   * @public
   */
  CodecSettings?: VideoCodecSettings | undefined;

  /**
   * Choose Insert for this setting to include color metadata in this output. Choose Ignore to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.
   * @public
   */
  ColorMetadata?: ColorMetadata | undefined;

  /**
   * Use Cropping selection to specify the video area that the service will include in the output video frame.
   * @public
   */
  Crop?: Rectangle | undefined;

  /**
   * Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion or Timecode track is enabled.
   * @public
   */
  DropFrameTimecode?: DropFrameTimecode | undefined;

  /**
   * Applies only if you set AFD Signaling to Fixed. Use Fixed to specify a four-bit AFD value which the service will write on all frames of this video output.
   * @public
   */
  FixedAfd?: number | undefined;

  /**
   * Use Height to define the video resolution height, in pixels, for this output. To use the same resolution as your input: Leave both Width and Height blank. To evenly scale from your input resolution: Leave Height blank and enter a value for Width. For example, if your input is 1920x1080 and you set Width to 1280, your output will be 1280x720.
   * @public
   */
  Height?: number | undefined;

  /**
   * Use Selection placement to define the video area in your output frame. The area outside of the rectangle that you specify here is black.
   * @public
   */
  Position?: Rectangle | undefined;

  /**
   * Use Respond to AFD to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to NONE. A preferred implementation of this workflow is to set RespondToAfd to and set AfdSignaling to AUTO. * Choose None to remove all input AFD values from this output.
   * @public
   */
  RespondToAfd?: RespondToAfd | undefined;

  /**
   * Specify the video Scaling behavior when your output has a different resolution than your input. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-scaling.html
   * @public
   */
  ScalingBehavior?: ScalingBehavior | undefined;

  /**
   * Use Sharpness setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
   * @public
   */
  Sharpness?: number | undefined;

  /**
   * Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration. In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration does.
   * @public
   */
  TimecodeInsertion?: VideoTimecodeInsertion | undefined;

  /**
   * To include a timecode track in your MP4 output: Choose Enabled. MediaConvert writes the timecode track in the Null Media Header box (NMHD), without any timecode text formatting information. You can also specify dropframe or non-dropframe timecode under the Drop Frame Timecode setting. To not include a timecode track: Keep the default value, Disabled.
   * @public
   */
  TimecodeTrack?: TimecodeTrack | undefined;

  /**
   * Find additional transcoding features under Preprocessors. Enable the features at each output individually. These features are disabled by default.
   * @public
   */
  VideoPreprocessors?: VideoPreprocessor | undefined;

  /**
   * Use Width to define the video resolution width, in pixels, for this output. To use the same resolution as your input: Leave both Width and Height blank. To evenly scale from your input resolution: Leave Width blank and enter a value for Height. For example, if your input is 1920x1080 and you set Height to 720, your output will be 1280x720.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Each output in your job is a collection of settings that describes how you want MediaConvert to encode a single output file or stream. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/create-outputs.html.
 * @public
 */
export interface Output {
  /**
   * Contains groups of audio encoding settings organized by audio codec. Include one instance of per output. Can contain multiple groups of encoding settings.
   * @public
   */
  AudioDescriptions?: AudioDescription[] | undefined;

  /**
   * Contains groups of captions settings. For each output that has captions, include one instance of CaptionDescriptions. Can contain multiple groups of captions settings.
   * @public
   */
  CaptionDescriptions?: CaptionDescription[] | undefined;

  /**
   * Container specific settings.
   * @public
   */
  ContainerSettings?: ContainerSettings | undefined;

  /**
   * Use Extension to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * WebM container, webm * Animated GIF container, gif * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
   * @public
   */
  Extension?: string | undefined;

  /**
   * Use Name modifier to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.
   * @public
   */
  NameModifier?: string | undefined;

  /**
   * Specific settings for this type of output.
   * @public
   */
  OutputSettings?: OutputSettings | undefined;

  /**
   * Use Preset to specify a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset or Container settings, but not both.
   * @public
   */
  Preset?: string | undefined;

  /**
   * VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.
   * @public
   */
  VideoDescription?: VideoDescription | undefined;
}

/**
 * Group of outputs
 * @public
 */
export interface OutputGroup {
  /**
   * Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
   * @public
   */
  AutomatedEncodingSettings?: AutomatedEncodingSettings | undefined;

  /**
   * Use Custom Group Name to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores.
   * @public
   */
  CustomName?: string | undefined;

  /**
   * Name of the output group
   * @public
   */
  Name?: string | undefined;

  /**
   * Output Group settings, including type
   * @public
   */
  OutputGroupSettings?: OutputGroupSettings | undefined;

  /**
   * This object holds groups of encoding settings, one group of settings per output.
   * @public
   */
  Outputs?: Output[] | undefined;
}

/**
 * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
 * @public
 */
export interface TimecodeConfig {
  /**
   * If you use an editing platform that relies on an anchor timecode, use Anchor Timecode to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores frame rate conversion. System behavior for Anchor Timecode varies depending on your setting for Source. * If Source is set to Specified Start, the first input frame is the specified value in Start Timecode. Anchor Timecode and Start Timecode are used calculate output timecode. * If Source is set to Start at 0 the first frame is 00:00:00:00. * If Source is set to Embedded, the first frame is the timecode value on the first input frame of the input.
   * @public
   */
  Anchor?: string | undefined;

  /**
   * Use Source to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 instead. * Start at 0 - Set the timecode of the initial frame to 00:00:00:00. * Specified Start - Set the timecode of the initial frame to a value other than zero. You use Start timecode to provide this value.
   * @public
   */
  Source?: TimecodeSource | undefined;

  /**
   * Only use when you set Source to Specified start. Use Start timecode to specify the timecode for the initial frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF).
   * @public
   */
  Start?: string | undefined;

  /**
   * Only applies to outputs that support program-date-time stamp. Use Timestamp offset to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format "yyyy-mm-dd". To use Timestamp offset, you must also enable Insert program-date-time in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset to 2003-1-25.
   * @public
   */
  TimestampOffset?: string | undefined;
}

/**
 * Insert user-defined custom ID3 metadata at timecodes that you specify. In each output that you want to include this metadata, you must set ID3 metadata to Passthrough.
 * @public
 */
export interface TimedMetadataInsertion {
  /**
   * Id3Insertions contains the array of Id3Insertion instances.
   * @public
   */
  Id3Insertions?: Id3Insertion[] | undefined;
}

/**
 * JobSettings contains all the transcode settings for a job.
 * @public
 */
export interface JobSettings {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   * @public
   */
  AdAvailOffset?: number | undefined;

  /**
   * Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   * @public
   */
  AvailBlanking?: AvailBlanking | undefined;

  /**
   * Use 3D LUTs to specify custom color mapping behavior when you convert from one color space into another. You can include up to 8 different 3D LUTs. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/3d-luts.html
   * @public
   */
  ColorConversion3DLUTSettings?: ColorConversion3DLUTSetting[] | undefined;

  /**
   * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
   * @public
   */
  Esam?: EsamSettings | undefined;

  /**
   * If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.
   * @public
   */
  ExtendedDataServices?: ExtendedDataServices | undefined;

  /**
   * Specify the input that MediaConvert references for your default output settings.  MediaConvert uses this input's Resolution, Frame rate, and Pixel aspect ratio for all  outputs that you don't manually specify different output settings for. Enabling this setting will disable "Follow source" for all other inputs.  If MediaConvert cannot follow your source, for example if you specify an audio-only input,  MediaConvert uses the first followable input instead. In your JSON job specification, enter an integer from 1 to 150 corresponding  to the order of your inputs.
   * @public
   */
  FollowSource?: number | undefined;

  /**
   * Use Inputs to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.
   * @public
   */
  Inputs?: Input[] | undefined;

  /**
   * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
   * @public
   */
  KantarWatermark?: KantarWatermarkSettings | undefined;

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
   * @public
   */
  MotionImageInserter?: MotionImageInserter | undefined;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration, MediaConvert enables PCM to ID3 tagging for all outputs in the job.
   * @public
   */
  NielsenConfiguration?: NielsenConfiguration | undefined;

  /**
   * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 6.0.13 Nielsen NLM Watermark Engine Version 1.3.3 Nielsen Watermark Authenticator [SID_TIC] Version [7.0.0]
   * @public
   */
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings | undefined;

  /**
   * Contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in is a group of settings that apply to the whole group. This required object depends on the value you set for Type. Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   * @public
   */
  OutputGroups?: OutputGroup[] | undefined;

  /**
   * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
   * @public
   */
  TimecodeConfig?: TimecodeConfig | undefined;

  /**
   * Insert user-defined custom ID3 metadata at timecodes that you specify. In each output that you want to include this metadata, you must set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataInsertion?: TimedMetadataInsertion | undefined;
}

/**
 * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
 * @public
 */
export interface Timing {
  /**
   * The time, in Unix epoch format, that the transcoding job finished
   * @public
   */
  FinishTime?: Date | undefined;

  /**
   * The time, in Unix epoch format, that transcoding for the job began.
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time, in Unix epoch format, that you submitted the job.
   * @public
   */
  SubmitTime?: Date | undefined;
}

/**
 * Contains any warning codes and their count for the job.
 * @public
 */
export interface WarningGroup {
  /**
   * Warning code that identifies a specific warning in the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html
   * @public
   */
  Code: number | undefined;

  /**
   * The number of times this warning occurred in the job.
   * @public
   */
  Count: number | undefined;
}

/**
 * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 * @public
 */
export interface Job {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.
   * @public
   */
  AccelerationStatus?: AccelerationStatus | undefined;

  /**
   * An identifier for this resource that is unique within all of AWS.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.
   * @public
   */
  BillingTagsSource?: BillingTagsSource | undefined;

  /**
   * Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The time, in Unix epoch format in seconds, when the job got created.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A job's phase can be PROBING, TRANSCODING OR UPLOADING
   * @public
   */
  CurrentPhase?: JobPhase | undefined;

  /**
   * Error code for the job
   * @public
   */
  ErrorCode?: number | undefined;

  /**
   * Error message of Job
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Optional list of hop destinations.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources
   * @public
   */
  Id?: string | undefined;

  /**
   * The Job engine version that you requested for your job. Valid versions are in a YYYY-MM-DD format.
   * @public
   */
  JobEngineVersionRequested?: string | undefined;

  /**
   * The Job engine version that your job used. Job engine versions are in a YYYY-MM-DD format. When you request an expired version, the response for this property will be empty. Requests to create jobs with an expired version result in a regular job, as if no specific Job engine version was requested. When you request an invalid version, the response for this property will be empty. Requests to create jobs with an invalid version result in a 400 error message, and no job is created.
   * @public
   */
  JobEngineVersionUsed?: string | undefined;

  /**
   * An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.
   * @public
   */
  JobPercentComplete?: number | undefined;

  /**
   * The job template that the job is created from, if it is created from a job template.
   * @public
   */
  JobTemplate?: string | undefined;

  /**
   * Contains information about the most recent share attempt for the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/creating-resource-share.html
   * @public
   */
  LastShareDetails?: string | undefined;

  /**
   * Provides messages from the service about jobs that you have already successfully submitted.
   * @public
   */
  Messages?: JobMessages | undefined;

  /**
   * List of output group details
   * @public
   */
  OutputGroupDetails?: OutputGroupDetail[] | undefined;

  /**
   * Relative priority on the job.
   * @public
   */
  Priority?: number | undefined;

  /**
   * When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Queue?: string | undefined;

  /**
   * The job's queue hopping history.
   * @public
   */
  QueueTransitions?: QueueTransition[] | undefined;

  /**
   * The number of times that the service automatically attempted to process your job after encountering an error.
   * @public
   */
  RetryCount?: number | undefined;

  /**
   * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   * @public
   */
  Role: string | undefined;

  /**
   * JobSettings contains all the transcode settings for a job.
   * @public
   */
  Settings: JobSettings | undefined;

  /**
   * A job's share status can be NOT_SHARED, INITIATED, or SHARED
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   * @public
   */
  SimulateReservedQueue?: SimulateReservedQueue | undefined;

  /**
   * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;

  /**
   * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
   * @public
   */
  Timing?: Timing | undefined;

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;

  /**
   * Contains any warning messages for the job. Use to help identify potential issues with your input, output, or job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html
   * @public
   */
  Warnings?: WarningGroup[] | undefined;
}

/**
 * Use Job engine versions to run jobs for your production workflow on one version, while you test and validate the latest version. Job engine versions are in a YYYY-MM-DD format.
 * @public
 */
export interface JobEngineVersion {
  /**
   * The date that this Job engine version expires. Requests to create jobs with an expired version result in a regular job, as if no specific Job engine version was requested.
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * Use Job engine versions to run jobs for your production workflow on one version, while you test and validate the latest version. Job engine versions represent periodically grouped MediaConvert releases with new features, updates, improvements, and fixes. Job engine versions are in a YYYY-MM-DD format. Note that the Job engine version feature is not publicly available at this time. To request access, contact AWS support.
   * @public
   */
  Version?: string | undefined;
}

/**
 * Provide one or more JobsQueryFilter objects, each containing a Key with an associated Values array. Note that MediaConvert queries jobs using OR logic.
 * @public
 */
export interface JobsQueryFilter {
  /**
   * Specify job details to filter for while performing a jobs query. You specify these filters as part of a key-value pair within the JobsQueryFilter array. The following list describes which keys are available and their possible values: * queue - Your Queue's name or ARN. * status - Your job's status. (SUBMITTED | PROGRESSING | COMPLETE | CANCELED | ERROR) * fileInput - Your input file URL, or partial input file name. * jobEngineVersionRequested - The Job engine version that you requested for your job. Valid versions are in a YYYY-MM-DD format. * jobEngineVersionUsed - The Job engine version that your job used. This may differ from the version that you requested. Valid versions are in a YYYY-MM-DD format. * audioCodec - Your output's audio codec. (AAC | MP2 | MP3 | WAV | AIFF | AC3| EAC3 | EAC3_ATMOS | VORBIS | OPUS | PASSTHROUGH | FLAC) * videoCodec - Your output's video codec. (AV1 | AVC_INTRA | FRAME_CAPTURE | H_264 | H_265 | MPEG2 | PASSTHROUGH | PRORES | UNCOMPRESSED | VC3 | VP8 | VP9 | XAVC)
   * @public
   */
  Key?: JobsQueryFilterKey | undefined;

  /**
   * A list of values associated with a JobsQueryFilterKey.
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
 * @public
 */
export interface JobTemplateSettings {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   * @public
   */
  AdAvailOffset?: number | undefined;

  /**
   * Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   * @public
   */
  AvailBlanking?: AvailBlanking | undefined;

  /**
   * Use 3D LUTs to specify custom color mapping behavior when you convert from one color space into another. You can include up to 8 different 3D LUTs. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/3d-luts.html
   * @public
   */
  ColorConversion3DLUTSettings?: ColorConversion3DLUTSetting[] | undefined;

  /**
   * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
   * @public
   */
  Esam?: EsamSettings | undefined;

  /**
   * If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.
   * @public
   */
  ExtendedDataServices?: ExtendedDataServices | undefined;

  /**
   * Specify the input that MediaConvert references for your default output settings.  MediaConvert uses this input's Resolution, Frame rate, and Pixel aspect ratio for all  outputs that you don't manually specify different output settings for. Enabling this setting will disable "Follow source" for all other inputs.  If MediaConvert cannot follow your source, for example if you specify an audio-only input,  MediaConvert uses the first followable input instead. In your JSON job specification, enter an integer from 1 to 150 corresponding  to the order of your inputs.
   * @public
   */
  FollowSource?: number | undefined;

  /**
   * Use Inputs to define the source file used in the transcode job. There can only be one input in a job template. Using the API, you can include multiple inputs when referencing a job template.
   * @public
   */
  Inputs?: InputTemplate[] | undefined;

  /**
   * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
   * @public
   */
  KantarWatermark?: KantarWatermarkSettings | undefined;

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
   * @public
   */
  MotionImageInserter?: MotionImageInserter | undefined;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration, MediaConvert enables PCM to ID3 tagging for all outputs in the job.
   * @public
   */
  NielsenConfiguration?: NielsenConfiguration | undefined;

  /**
   * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 6.0.13 Nielsen NLM Watermark Engine Version 1.3.3 Nielsen Watermark Authenticator [SID_TIC] Version [7.0.0]
   * @public
   */
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings | undefined;

  /**
   * Contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in is a group of settings that apply to the whole group. This required object depends on the value you set for Type. Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   * @public
   */
  OutputGroups?: OutputGroup[] | undefined;

  /**
   * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
   * @public
   */
  TimecodeConfig?: TimecodeConfig | undefined;

  /**
   * Insert user-defined custom ID3 metadata at timecodes that you specify. In each output that you want to include this metadata, you must set ID3 metadata to Passthrough.
   * @public
   */
  TimedMetadataInsertion?: TimedMetadataInsertion | undefined;
}

/**
 * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
 * @public
 */
export interface JobTemplate {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * An identifier for this resource that is unique within all of AWS.
   * @public
   */
  Arn?: string | undefined;

  /**
   * An optional category you create to organize your job templates.
   * @public
   */
  Category?: string | undefined;

  /**
   * The timestamp in epoch seconds for Job template creation.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An optional description you create for each job template.
   * @public
   */
  Description?: string | undefined;

  /**
   * Optional list of hop destinations.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * The timestamp in epoch seconds when the Job template was last updated.
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * A name you create for each job template. Each name must be unique within your account.
   * @public
   */
  Name: string | undefined;

  /**
   * Relative priority on the job.
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   * @public
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;

  /**
   * A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user.
   * @public
   */
  Type?: Type | undefined;
}

/**
 * Settings for preset
 * @public
 */
export interface PresetSettings {
  /**
   * Contains groups of audio encoding settings organized by audio codec. Include one instance of per output. Can contain multiple groups of encoding settings.
   * @public
   */
  AudioDescriptions?: AudioDescription[] | undefined;

  /**
   * This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.
   * @public
   */
  CaptionDescriptions?: CaptionDescriptionPreset[] | undefined;

  /**
   * Container specific settings.
   * @public
   */
  ContainerSettings?: ContainerSettings | undefined;

  /**
   * VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.
   * @public
   */
  VideoDescription?: VideoDescription | undefined;
}

/**
 * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
 * @public
 */
export interface Preset {
  /**
   * An identifier for this resource that is unique within all of AWS.
   * @public
   */
  Arn?: string | undefined;

  /**
   * An optional category you create to organize your presets.
   * @public
   */
  Category?: string | undefined;

  /**
   * The timestamp in epoch seconds for preset creation.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An optional description you create for each preset.
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp in epoch seconds when the preset was last updated.
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * A name you create for each preset. Each name must be unique within your account.
   * @public
   */
  Name: string | undefined;

  /**
   * Settings for preset
   * @public
   */
  Settings: PresetSettings | undefined;

  /**
   * A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user.
   * @public
   */
  Type?: Type | undefined;
}

/**
 * The input file that needs to be analyzed.
 * @public
 */
export interface ProbeInputFile {
  /**
   * Specify the S3, HTTP, or HTTPS URL for your media file.
   * @public
   */
  FileUrl?: string | undefined;
}

/**
 * The frame rate of the video or audio track, expressed as a fraction with numerator and denominator values.
 * @public
 */
export interface FrameRate {
  /**
   * The denominator, or bottom number, in the fractional frame rate. For example, if your frame rate is 24000 / 1001 (23.976 frames per second), then the denominator would be 1001.
   * @public
   */
  Denominator?: number | undefined;

  /**
   * The numerator, or top number, in the fractional frame rate. For example, if your frame rate is 24000 / 1001 (23.976 frames per second), then the numerator would be 24000.
   * @public
   */
  Numerator?: number | undefined;
}

/**
 * Details about the media file's audio track.
 * @public
 */
export interface AudioProperties {
  /**
   * The bit depth of the audio track.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * The bit rate of the audio track, in bits per second.
   * @public
   */
  BitRate?: number | undefined;

  /**
   * The number of audio channels in the audio track.
   * @public
   */
  Channels?: number | undefined;

  /**
   * The frame rate of the video or audio track, expressed as a fraction with numerator and denominator values.
   * @public
   */
  FrameRate?: FrameRate | undefined;

  /**
   * The language code of the audio track, in three character ISO 639-3 format.
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * The sample rate of the audio track.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Details about the media file's data track.
 * @public
 */
export interface DataProperties {
  /**
   * The language code of the data track, in three character ISO 639-3 format.
   * @public
   */
  LanguageCode?: string | undefined;
}

/**
 * Codec-specific parameters parsed from the video essence headers. This information provides detailed technical specifications about how the video was encoded, including profile settings, resolution details, and color space information that can help you understand the source video characteristics and make informed encoding decisions.
 * @public
 */
export interface CodecMetadata {
  /**
   * The number of bits used per color component in the video essence such as 8, 10, or 12 bits. Standard range (SDR) video typically uses 8-bit, while 10-bit is common for high dynamic range (HDR).
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * The chroma subsampling format used in the video encoding, such as "4:2:0" or "4:4:4". This describes how color information is sampled relative to brightness information. Different subsampling ratios affect video quality and file size, with "4:4:4" providing the highest color fidelity and "4:2:0" being most common for standard video.
   * @public
   */
  ChromaSubsampling?: string | undefined;

  /**
   * The frame rate of the video or audio track, expressed as a fraction with numerator and denominator values.
   * @public
   */
  CodedFrameRate?: FrameRate | undefined;

  /**
   * The color space primaries of the video track, defining the red, green, and blue color coordinates used for the video. This information helps ensure accurate color reproduction during playback and transcoding.
   * @public
   */
  ColorPrimaries?: ColorPrimaries | undefined;

  /**
   * The height in pixels as coded by the codec. This represents the actual encoded video height as specified in the video stream headers.
   * @public
   */
  Height?: number | undefined;

  /**
   * The codec level or tier that specifies the maximum processing requirements and capabilities. Levels define constraints such as maximum bit rate, frame rate, and resolution.
   * @public
   */
  Level?: string | undefined;

  /**
   * The color space matrix coefficients of the video track, defining how RGB color values are converted to and from YUV color space. This affects color accuracy during encoding and decoding processes.
   * @public
   */
  MatrixCoefficients?: MatrixCoefficients | undefined;

  /**
   * The codec profile used to encode the video. Profiles define specific feature sets and capabilities within a codec standard. For example, H.264 profiles include Baseline, Main, and High, each supporting different encoding features and complexity levels.
   * @public
   */
  Profile?: string | undefined;

  /**
   * The scanning method specified in the video essence, indicating whether the video uses progressive or interlaced scanning.
   * @public
   */
  ScanType?: string | undefined;

  /**
   * The color space transfer characteristics of the video track, defining the relationship between linear light values and the encoded signal values. This affects brightness and contrast reproduction.
   * @public
   */
  TransferCharacteristics?: TransferCharacteristics | undefined;

  /**
   * The width in pixels as coded by the codec. This represents the actual encoded video width as specified in the video stream headers.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Details about the media file's video track.
 * @public
 */
export interface VideoProperties {
  /**
   * The number of bits used per color component such as 8, 10, or 12 bits. Standard range (SDR) video typically uses 8-bit, while 10-bit is common for high dynamic range (HDR).
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * The bit rate of the video track, in bits per second.
   * @public
   */
  BitRate?: number | undefined;

  /**
   * Codec-specific parameters parsed from the video essence headers. This information provides detailed technical specifications about how the video was encoded, including profile settings, resolution details, and color space information that can help you understand the source video characteristics and make informed encoding decisions.
   * @public
   */
  CodecMetadata?: CodecMetadata | undefined;

  /**
   * The color space primaries of the video track, defining the red, green, and blue color coordinates used for the video. This information helps ensure accurate color reproduction during playback and transcoding.
   * @public
   */
  ColorPrimaries?: ColorPrimaries | undefined;

  /**
   * The frame rate of the video or audio track, expressed as a fraction with numerator and denominator values.
   * @public
   */
  FrameRate?: FrameRate | undefined;

  /**
   * The height of the video track, in pixels.
   * @public
   */
  Height?: number | undefined;

  /**
   * The color space matrix coefficients of the video track, defining how RGB color values are converted to and from YUV color space. This affects color accuracy during encoding and decoding processes.
   * @public
   */
  MatrixCoefficients?: MatrixCoefficients | undefined;

  /**
   * The color space transfer characteristics of the video track, defining the relationship between linear light values and the encoded signal values. This affects brightness and contrast reproduction.
   * @public
   */
  TransferCharacteristics?: TransferCharacteristics | undefined;

  /**
   * The width of the video track, in pixels.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Details about each track (video, audio, or data) in the media file.
 * @public
 */
export interface Track {
  /**
   * Details about the media file's audio track.
   * @public
   */
  AudioProperties?: AudioProperties | undefined;

  /**
   * The codec of the audio or video track, or caption format of the data track.
   * @public
   */
  Codec?: Codec | undefined;

  /**
   * Details about the media file's data track.
   * @public
   */
  DataProperties?: DataProperties | undefined;

  /**
   * The duration of the track, in seconds.
   * @public
   */
  Duration?: number | undefined;

  /**
   * The unique index number of the track, starting at 1.
   * @public
   */
  Index?: number | undefined;

  /**
   * The type of track: video, audio, or data.
   * @public
   */
  TrackType?: TrackType | undefined;

  /**
   * Details about the media file's video track.
   * @public
   */
  VideoProperties?: VideoProperties | undefined;
}

/**
 * The container of your media file. This information helps you understand the overall structure and details of your media, including format, duration, and track layout.
 * @public
 */
export interface Container {
  /**
   * The total duration of your media file, in seconds.
   * @public
   */
  Duration?: number | undefined;

  /**
   * The format of your media file. For example: MP4, QuickTime (MOV), Matroska (MKV), WebM or MXF. Note that this will be blank if your media file has a format that the MediaConvert Probe operation does not recognize.
   * @public
   */
  Format?: Format | undefined;

  /**
   * Details about each track (video, audio, or data) in the media file.
   * @public
   */
  Tracks?: Track[] | undefined;
}

/**
 * Metadata and other file information.
 * @public
 */
export interface Metadata {
  /**
   * The entity tag (ETag) of the file.
   * @public
   */
  ETag?: string | undefined;

  /**
   * The size of the media file, in bytes.
   * @public
   */
  FileSize?: number | undefined;

  /**
   * The last modification timestamp of the media file, in Unix time.
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The MIME type of the media file.
   * @public
   */
  MimeType?: string | undefined;
}

/**
 * An array containing track mapping information.
 * @public
 */
export interface TrackMapping {
  /**
   * The index numbers of the audio tracks in your media file.
   * @public
   */
  AudioTrackIndexes?: number[] | undefined;

  /**
   * The index numbers of the data tracks in your media file.
   * @public
   */
  DataTrackIndexes?: number[] | undefined;

  /**
   * The index numbers of the video tracks in your media file.
   * @public
   */
  VideoTrackIndexes?: number[] | undefined;
}

/**
 * Probe results for your media file.
 * @public
 */
export interface ProbeResult {
  /**
   * The container of your media file. This information helps you understand the overall structure and details of your media, including format, duration, and track layout.
   * @public
   */
  Container?: Container | undefined;

  /**
   * Metadata and other file information.
   * @public
   */
  Metadata?: Metadata | undefined;

  /**
   * An array containing track mapping information.
   * @public
   */
  TrackMappings?: TrackMapping[] | undefined;
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 * @public
 */
export interface ReservationPlan {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   * @public
   */
  Commitment?: Commitment | undefined;

  /**
   * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
   * @public
   */
  PurchasedAt?: Date | undefined;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.
   * @public
   */
  RenewalType?: RenewalType | undefined;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.
   * @public
   */
  ReservedSlots?: number | undefined;

  /**
   * Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.
   * @public
   */
  Status?: ReservationPlanStatus | undefined;
}

/**
 * A service override applied by MediaConvert to the settings that you have configured. If you see any overrides, we recommend that you contact AWS Support.
 * @public
 */
export interface ServiceOverride {
  /**
   * Details about the service override that MediaConvert has applied.
   * @public
   */
  Message?: string | undefined;

  /**
   * The name of the setting that MediaConvert has applied an override to.
   * @public
   */
  Name?: string | undefined;

  /**
   * The current value of the service override that MediaConvert has applied.
   * @public
   */
  OverrideValue?: string | undefined;

  /**
   * The value of the setting that you configured, prior to any overrides that MediaConvert has applied.
   * @public
   */
  Value?: string | undefined;
}

/**
 * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
 * @public
 */
export interface Queue {
  /**
   * An identifier for this resource that is unique within all of AWS.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The maximum number of jobs your queue can process concurrently.
   * @public
   */
  ConcurrentJobs?: number | undefined;

  /**
   * The timestamp in epoch seconds for when you created the queue.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An optional description that you create for each queue.
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp in epoch seconds for when you most recently updated the queue.
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * A name that you create for each queue. Each name must be unique within your account.
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The estimated number of jobs with a PROGRESSING status.
   * @public
   */
  ProgressingJobsCount?: number | undefined;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   * @public
   */
  ReservationPlan?: ReservationPlan | undefined;

  /**
   * A list of any service overrides applied by MediaConvert to the settings that you have configured. If you see any overrides, we recommend that you contact AWS Support.
   * @public
   */
  ServiceOverrides?: ServiceOverride[] | undefined;

  /**
   * Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   * @public
   */
  Status?: QueueStatus | undefined;

  /**
   * The estimated number of jobs with a SUBMITTED status.
   * @public
   */
  SubmittedJobsCount?: number | undefined;

  /**
   * Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateResponse {}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The Job ID of the job to be cancelled.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * Optional. Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * Optionally choose a Billing tags source that AWS Billing and Cost Management will use to display tags for individual output costs on any billing report that you set up. Leave blank to use the default value, Job.
   * @public
   */
  BillingTagsSource?: BillingTagsSource | undefined;

  /**
   * Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * Use Job engine versions to run jobs for your production workflow on one version, while you test and validate the latest version. Job engine versions represent periodically grouped MediaConvert releases with new features, updates, improvements, and fixes. Job engine versions are in a YYYY-MM-DD format. Note that the Job engine version feature is not publicly available at this time. To request access, contact AWS support.
   * @public
   */
  JobEngineVersion?: string | undefined;

  /**
   * Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.
   * @public
   */
  JobTemplate?: string | undefined;

  /**
   * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   * @public
   */
  Role: string | undefined;

  /**
   * JobSettings contains all the transcode settings for a job.
   * @public
   */
  Settings: JobSettings | undefined;

  /**
   * Optional. Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   * @public
   */
  SimulateReservedQueue?: SimulateReservedQueue | undefined;

  /**
   * Optional. Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;

  /**
   * Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Job?: Job | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateRequest {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * Optional. A category for the job template you are creating
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. A description of the job template you are creating.
   * @public
   */
  Description?: string | undefined;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * The name of the job template you are creating.
   * @public
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   * @public
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   * @public
   */
  JobTemplate?: JobTemplate | undefined;
}

/**
 * @public
 */
export interface CreatePresetRequest {
  /**
   * Optional. A category for the preset you are creating.
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. A description of the preset you are creating.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the preset you are creating.
   * @public
   */
  Name: string | undefined;

  /**
   * Settings for preset
   * @public
   */
  Settings: PresetSettings | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   * @public
   */
  Preset?: Preset | undefined;
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 * @public
 */
export interface ReservationPlanSettings {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   * @public
   */
  Commitment: Commitment | undefined;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
   * @public
   */
  RenewalType: RenewalType | undefined;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
   * @public
   */
  ReservedSlots: number | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * Specify the maximum number of jobs your queue can process concurrently. For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.
   * @public
   */
  ConcurrentJobs?: number | undefined;

  /**
   * Optional. A description of the queue that you are creating.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the queue that you are creating.
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   * @public
   */
  ReservationPlanSettings?: ReservationPlanSettings | undefined;

  /**
   * Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.
   * @public
   */
  Status?: QueueStatus | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   * @public
   */
  Queue?: Queue | undefined;
}

/**
 * @public
 */
export interface CreateResourceShareRequest {
  /**
   * Specify MediaConvert Job ID or ARN to share
   * @public
   */
  JobId: string | undefined;

  /**
   * AWS Support case identifier
   * @public
   */
  SupportCaseId: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceShareResponse {}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * The name of the job template to be deleted.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateResponse {}

/**
 * @public
 */
export interface DeletePolicyRequest {}

/**
 * @public
 */
export interface DeletePolicyResponse {}

/**
 * @public
 */
export interface DeletePresetRequest {
  /**
   * The name of the preset to be deleted.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePresetResponse {}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * The name of the queue that you want to delete.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueResponse {}

/**
 * @public
 */
export interface DescribeEndpointsRequest {
  /**
   * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
   *
   * @deprecated DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead.
   * @public
   */
  Mode?: DescribeEndpointsMode | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of endpoints.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * List of endpoints
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * Use this string to request the next batch of endpoints.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateResponse {}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * the job ID of the job.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Job?: Job | undefined;
}

/**
 * @public
 */
export interface GetJobsQueryResultsRequest {
  /**
   * The ID of the jobs query.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetJobsQueryResultsResponse {
  /**
   * List of jobs.
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * Use this string to request the next batch of jobs via the StartJobsQuery API.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The status of the jobs query.
   * @public
   */
  Status?: JobsQueryStatus | undefined;
}

/**
 * @public
 */
export interface GetJobTemplateRequest {
  /**
   * The name of the job template.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   * @public
   */
  JobTemplate?: JobTemplate | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {}

/**
 * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 * @public
 */
export interface Policy {
  /**
   * Allow or disallow jobs that specify HTTP inputs.
   * @public
   */
  HttpInputs?: InputPolicy | undefined;

  /**
   * Allow or disallow jobs that specify HTTPS inputs.
   * @public
   */
  HttpsInputs?: InputPolicy | undefined;

  /**
   * Allow or disallow jobs that specify Amazon S3 inputs.
   * @public
   */
  S3Inputs?: InputPolicy | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetPresetRequest {
  /**
   * The name of the preset.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetPresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   * @public
   */
  Preset?: Preset | undefined;
}

/**
 * @public
 */
export interface GetQueueRequest {
  /**
   * The name of the queue that you want information about.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   * @public
   */
  Queue?: Queue | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;

  /**
   * Optional. Provide a queue name to get back only jobs from that queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   * @public
   */
  Status?: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * List of jobs
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * Use this string to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesRequest {
  /**
   * Optionally, specify a job template category to limit responses to only job templates from that category.
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   * @public
   */
  ListBy?: JobTemplateListBy | undefined;

  /**
   * Optional. Number of job templates, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of job templates.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesResponse {
  /**
   * List of Job templates.
   * @public
   */
  JobTemplates?: JobTemplate[] | undefined;

  /**
   * Use this string to request the next batch of job templates.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPresetsRequest {
  /**
   * Optionally, specify a preset category to limit responses to only presets from that category.
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   * @public
   */
  ListBy?: PresetListBy | undefined;

  /**
   * Optional. Number of presets, up to twenty, that will be returned at one time
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface ListPresetsResponse {
  /**
   * Use this string to request the next batch of presets.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of presets
   * @public
   */
  Presets?: Preset[] | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
   * @public
   */
  ListBy?: QueueListBy | undefined;

  /**
   * Optional. Number of queues, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of queues.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * Use this string to request the next batch of queues.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of queues.
   * @public
   */
  Queues?: Queue[] | undefined;

  /**
   * The maximum number of jobs that MediaConvert can process at one time, across all of your on-demand queues in the current AWS Region.
   * @public
   */
  TotalConcurrentJobs?: number | undefined;

  /**
   * The remaining number of concurrent jobs that are not associated with a queue and are available to allocate to a queue. You can allocate these jobs when you create or update a queue.
   * @public
   */
  UnallocatedConcurrentJobs?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
   * @public
   */
  Arn: string | undefined;
}

/**
 * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
 * @public
 */
export interface ResourceTags {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tags for the resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   * @public
   */
  ResourceTags?: ResourceTags | undefined;
}

/**
 * @public
 */
export interface ListVersionsRequest {
  /**
   * Optional. Number of valid Job engine versions, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of Job engine versions.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVersionsResponse {
  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of Job engine versions.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Retrieve a JSON array of all available Job engine versions and the date they expire.
   * @public
   */
  Versions?: JobEngineVersion[] | undefined;
}

/**
 * @public
 */
export interface ProbeRequest {
  /**
   * Specify a media file to probe.
   * @public
   */
  InputFiles?: ProbeInputFile[] | undefined;
}

/**
 * @public
 */
export interface ProbeResponse {
  /**
   * Probe results for your media file.
   * @public
   */
  ProbeResults?: ProbeResult[] | undefined;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Policy: Policy | undefined;
}

/**
 * @public
 */
export interface PutPolicyResponse {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * Optional. Provide your input file URL or your partial input file name. The maximum length for an input file is 300 characters.
   * @public
   */
  InputFile?: string | undefined;

  /**
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;

  /**
   * Optional. Provide a queue name, or a queue ARN, to return only jobs from that queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   * @public
   */
  Status?: JobStatus | undefined;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * List of jobs.
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * Use this string to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartJobsQueryRequest {
  /**
   * Optional. Provide an array of JobsQueryFilters for your StartJobsQuery request.
   * @public
   */
  FilterList?: JobsQueryFilter[] | undefined;

  /**
   * Optional. Number of jobs, up to twenty, that will be included in the jobs query.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this string to request the next batch of jobs matched by a jobs query.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface StartJobsQueryResponse {
  /**
   * The ID of the jobs query.
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   * @public
   */
  Arn: string | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
   * @public
   */
  Arn: string | undefined;

  /**
   * The keys of the tags that you want to remove from the resource.
   * @public
   */
  TagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateJobTemplateRequest {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * The new category for the job template, if you are changing it.
   * @public
   */
  Category?: string | undefined;

  /**
   * The new description for the job template, if you are changing it.
   * @public
   */
  Description?: string | undefined;

  /**
   * Optional list of hop destinations.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * The name of the job template you are modifying
   * @public
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   * @public
   */
  Priority?: number | undefined;

  /**
   * The new queue for the job template, if you are changing it.
   * @public
   */
  Queue?: string | undefined;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   * @public
   */
  Settings?: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;
}

/**
 * @public
 */
export interface UpdateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   * @public
   */
  JobTemplate?: JobTemplate | undefined;
}

/**
 * @public
 */
export interface UpdatePresetRequest {
  /**
   * The new category for the preset, if you are changing it.
   * @public
   */
  Category?: string | undefined;

  /**
   * The new description for the preset, if you are changing it.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the preset you are modifying.
   * @public
   */
  Name: string | undefined;

  /**
   * Settings for preset
   * @public
   */
  Settings?: PresetSettings | undefined;
}

/**
 * @public
 */
export interface UpdatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   * @public
   */
  Preset?: Preset | undefined;
}

/**
 * @public
 */
export interface UpdateQueueRequest {
  /**
   * Specify the maximum number of jobs your queue can process concurrently. For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, update your reservation plan instead in order to increase your yearly commitment.
   * @public
   */
  ConcurrentJobs?: number | undefined;

  /**
   * The new description for the queue, if you are changing it.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the queue that you are modifying.
   * @public
   */
  Name: string | undefined;

  /**
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   * @public
   */
  ReservationPlanSettings?: ReservationPlanSettings | undefined;

  /**
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   * @public
   */
  Status?: QueueStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   * @public
   */
  Queue?: Queue | undefined;
}
