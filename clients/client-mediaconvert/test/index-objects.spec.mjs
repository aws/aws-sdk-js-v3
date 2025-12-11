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
  AssociateCertificateCommand,
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
  BadRequestException,
  BandwidthReductionFilterSharpening,
  BandwidthReductionFilterStrength,
  BillingTagsSource,
  BurnInSubtitleStylePassthrough,
  BurninSubtitleAlignment,
  BurninSubtitleApplyFontColor,
  BurninSubtitleBackgroundColor,
  BurninSubtitleFallbackFont,
  BurninSubtitleFontColor,
  BurninSubtitleOutlineColor,
  BurninSubtitleShadowColor,
  BurninSubtitleTeletextSpacing,
  CancelJobCommand,
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
  ConflictException,
  ContainerType,
  CopyProtectionAction,
  CreateJobCommand,
  CreateJobTemplateCommand,
  CreatePresetCommand,
  CreateQueueCommand,
  CreateResourceShareCommand,
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
  DeleteJobTemplateCommand,
  DeletePolicyCommand,
  DeletePresetCommand,
  DeleteQueueCommand,
  DescribeEndpointsCommand,
  DescribeEndpointsMode,
  DisassociateCertificateCommand,
  DolbyVisionLevel6Mode,
  DolbyVisionMapping,
  DolbyVisionProfile,
  DropFrameTimecode,
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
  DvbddsHandling,
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
  ForbiddenException,
  Format,
  FrameControl,
  FrameMetricType,
  GetJobCommand,
  GetJobTemplateCommand,
  GetJobsQueryResultsCommand,
  GetPolicyCommand,
  GetPresetCommand,
  GetQueueCommand,
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
  H265Tiles,
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
  InternalServerErrorException,
  JobPhase,
  JobStatus,
  JobTemplateListBy,
  JobsQueryFilterKey,
  JobsQueryStatus,
  LanguageCode,
  ListJobTemplatesCommand,
  ListJobsCommand,
  ListPresetsCommand,
  ListQueuesCommand,
  ListTagsForResourceCommand,
  ListVersionsCommand,
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
  MediaConvert,
  MediaConvertClient,
  MediaConvertServiceException,
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
  NotFoundException,
  Order,
  OutputGroupType,
  OutputSdt,
  PadVideo,
  PresetListBy,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  PricingPlan,
  ProbeCommand,
  ProresChromaSampling,
  ProresCodecProfile,
  ProresFramerateControl,
  ProresFramerateConversionAlgorithm,
  ProresInterlaceMode,
  ProresParControl,
  ProresScanTypeConversionMode,
  ProresSlowPal,
  ProresTelecine,
  PutPolicyCommand,
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
  SearchJobsCommand,
  ServiceQuotaExceededException,
  ShareStatus,
  SimulateReservedQueue,
  SlowPalPitchCorrection,
  SrtStylePassthrough,
  StartJobsQueryCommand,
  StatusUpdateInterval,
  TagResourceCommand,
  TamsGapHandling,
  TeletextPageType,
  TimecodeBurninPosition,
  TimecodeSource,
  TimecodeTrack,
  TimedMetadata,
  TooManyRequestsException,
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
  UntagResourceCommand,
  UpdateJobTemplateCommand,
  UpdatePresetCommand,
  UpdateQueueCommand,
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
  paginateDescribeEndpoints,
  paginateListJobTemplates,
  paginateListJobs,
  paginateListPresets,
  paginateListQueues,
  paginateListVersions,
  paginateSearchJobs,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaConvertClient === "function");
assert(typeof MediaConvert === "function");
// commands
assert(typeof AssociateCertificateCommand === "function");
assert(typeof CancelJobCommand === "function");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJobTemplateCommand === "function");
assert(typeof CreatePresetCommand === "function");
assert(typeof CreateQueueCommand === "function");
assert(typeof CreateResourceShareCommand === "function");
assert(typeof DeleteJobTemplateCommand === "function");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePresetCommand === "function");
assert(typeof DeleteQueueCommand === "function");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DisassociateCertificateCommand === "function");
assert(typeof GetJobCommand === "function");
assert(typeof GetJobsQueryResultsCommand === "function");
assert(typeof GetJobTemplateCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPresetCommand === "function");
assert(typeof GetQueueCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobTemplatesCommand === "function");
assert(typeof ListPresetsCommand === "function");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVersionsCommand === "function");
assert(typeof ProbeCommand === "function");
assert(typeof PutPolicyCommand === "function");
assert(typeof SearchJobsCommand === "function");
assert(typeof StartJobsQueryCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateJobTemplateCommand === "function");
assert(typeof UpdatePresetCommand === "function");
assert(typeof UpdateQueueCommand === "function");
// enums
assert(typeof AacAudioDescriptionBroadcasterMix === "object");
assert(typeof AacCodecProfile === "object");
assert(typeof AacCodingMode === "object");
assert(typeof AacLoudnessMeasurementMode === "object");
assert(typeof AacRateControlMode === "object");
assert(typeof AacRawFormat === "object");
assert(typeof AacSpecification === "object");
assert(typeof AacVbrQuality === "object");
assert(typeof Ac3BitstreamMode === "object");
assert(typeof Ac3CodingMode === "object");
assert(typeof Ac3DynamicRangeCompressionLine === "object");
assert(typeof Ac3DynamicRangeCompressionProfile === "object");
assert(typeof Ac3DynamicRangeCompressionRf === "object");
assert(typeof Ac3LfeFilter === "object");
assert(typeof Ac3MetadataControl === "object");
assert(typeof AccelerationMode === "object");
assert(typeof AccelerationStatus === "object");
assert(typeof AdvancedInputFilter === "object");
assert(typeof AdvancedInputFilterAddTexture === "object");
assert(typeof AdvancedInputFilterSharpen === "object");
assert(typeof AfdSignaling === "object");
assert(typeof AlphaBehavior === "object");
assert(typeof AncillaryConvert608To708 === "object");
assert(typeof AncillaryTerminateCaptions === "object");
assert(typeof AntiAlias === "object");
assert(typeof AudioChannelTag === "object");
assert(typeof AudioCodec === "object");
assert(typeof AudioDefaultSelection === "object");
assert(typeof AudioDurationCorrection === "object");
assert(typeof AudioLanguageCodeControl === "object");
assert(typeof AudioNormalizationAlgorithm === "object");
assert(typeof AudioNormalizationAlgorithmControl === "object");
assert(typeof AudioNormalizationLoudnessLogging === "object");
assert(typeof AudioNormalizationPeakCalculation === "object");
assert(typeof AudioSelectorType === "object");
assert(typeof AudioTypeControl === "object");
assert(typeof Av1AdaptiveQuantization === "object");
assert(typeof Av1BitDepth === "object");
assert(typeof Av1FilmGrainSynthesis === "object");
assert(typeof Av1FramerateControl === "object");
assert(typeof Av1FramerateConversionAlgorithm === "object");
assert(typeof Av1RateControlMode === "object");
assert(typeof Av1SpatialAdaptiveQuantization === "object");
assert(typeof AvcIntraClass === "object");
assert(typeof AvcIntraFramerateControl === "object");
assert(typeof AvcIntraFramerateConversionAlgorithm === "object");
assert(typeof AvcIntraInterlaceMode === "object");
assert(typeof AvcIntraScanTypeConversionMode === "object");
assert(typeof AvcIntraSlowPal === "object");
assert(typeof AvcIntraTelecine === "object");
assert(typeof AvcIntraUhdQualityTuningLevel === "object");
assert(typeof BandwidthReductionFilterSharpening === "object");
assert(typeof BandwidthReductionFilterStrength === "object");
assert(typeof BillingTagsSource === "object");
assert(typeof BurninSubtitleAlignment === "object");
assert(typeof BurninSubtitleApplyFontColor === "object");
assert(typeof BurninSubtitleBackgroundColor === "object");
assert(typeof BurninSubtitleFallbackFont === "object");
assert(typeof BurninSubtitleFontColor === "object");
assert(typeof BurninSubtitleOutlineColor === "object");
assert(typeof BurninSubtitleShadowColor === "object");
assert(typeof BurnInSubtitleStylePassthrough === "object");
assert(typeof BurninSubtitleTeletextSpacing === "object");
assert(typeof CaptionDestinationType === "object");
assert(typeof CaptionSourceByteRateLimit === "object");
assert(typeof CaptionSourceConvertPaintOnToPopOn === "object");
assert(typeof CaptionSourceType === "object");
assert(typeof CaptionSourceUpconvertSTLToTeletext === "object");
assert(typeof ChromaPositionMode === "object");
assert(typeof CmafClientCache === "object");
assert(typeof CmafCodecSpecification === "object");
assert(typeof CmafEncryptionType === "object");
assert(typeof CmafImageBasedTrickPlay === "object");
assert(typeof CmafInitializationVectorInManifest === "object");
assert(typeof CmafIntervalCadence === "object");
assert(typeof CmafKeyProviderType === "object");
assert(typeof CmafManifestCompression === "object");
assert(typeof CmafManifestDurationFormat === "object");
assert(typeof CmafMpdManifestBandwidthType === "object");
assert(typeof CmafMpdProfile === "object");
assert(typeof CmafPtsOffsetHandlingForBFrames === "object");
assert(typeof CmafSegmentControl === "object");
assert(typeof CmafSegmentLengthControl === "object");
assert(typeof CmafStreamInfResolution === "object");
assert(typeof CmafTargetDurationCompatibilityMode === "object");
assert(typeof CmafVideoCompositionOffsets === "object");
assert(typeof CmafWriteDASHManifest === "object");
assert(typeof CmafWriteHLSManifest === "object");
assert(typeof CmafWriteSegmentTimelineInRepresentation === "object");
assert(typeof CmfcAudioDuration === "object");
assert(typeof CmfcAudioTrackType === "object");
assert(typeof CmfcC2paManifest === "object");
assert(typeof CmfcDescriptiveVideoServiceFlag === "object");
assert(typeof CmfcIFrameOnlyManifest === "object");
assert(typeof CmfcKlvMetadata === "object");
assert(typeof CmfcManifestMetadataSignaling === "object");
assert(typeof CmfcScte35Esam === "object");
assert(typeof CmfcScte35Source === "object");
assert(typeof CmfcTimedMetadata === "object");
assert(typeof CmfcTimedMetadataBoxVersion === "object");
assert(typeof Codec === "object");
assert(typeof ColorMetadata === "object");
assert(typeof ColorPrimaries === "object");
assert(typeof ColorSpace === "object");
assert(typeof ColorSpaceConversion === "object");
assert(typeof ColorSpaceUsage === "object");
assert(typeof Commitment === "object");
assert(typeof ContainerType === "object");
assert(typeof CopyProtectionAction === "object");
assert(typeof DashIsoGroupAudioChannelConfigSchemeIdUri === "object");
assert(typeof DashIsoHbbtvCompliance === "object");
assert(typeof DashIsoImageBasedTrickPlay === "object");
assert(typeof DashIsoIntervalCadence === "object");
assert(typeof DashIsoMpdManifestBandwidthType === "object");
assert(typeof DashIsoMpdProfile === "object");
assert(typeof DashIsoPlaybackDeviceCompatibility === "object");
assert(typeof DashIsoPtsOffsetHandlingForBFrames === "object");
assert(typeof DashIsoSegmentControl === "object");
assert(typeof DashIsoSegmentLengthControl === "object");
assert(typeof DashIsoVideoCompositionOffsets === "object");
assert(typeof DashIsoWriteSegmentTimelineInRepresentation === "object");
assert(typeof DashManifestStyle === "object");
assert(typeof DecryptionMode === "object");
assert(typeof DeinterlaceAlgorithm === "object");
assert(typeof DeinterlacerControl === "object");
assert(typeof DeinterlacerMode === "object");
assert(typeof DescribeEndpointsMode === "object");
assert(typeof DolbyVisionLevel6Mode === "object");
assert(typeof DolbyVisionMapping === "object");
assert(typeof DolbyVisionProfile === "object");
assert(typeof DropFrameTimecode === "object");
assert(typeof DvbddsHandling === "object");
assert(typeof DvbSubSubtitleFallbackFont === "object");
assert(typeof DvbSubtitleAlignment === "object");
assert(typeof DvbSubtitleApplyFontColor === "object");
assert(typeof DvbSubtitleBackgroundColor === "object");
assert(typeof DvbSubtitleFontColor === "object");
assert(typeof DvbSubtitleOutlineColor === "object");
assert(typeof DvbSubtitleShadowColor === "object");
assert(typeof DvbSubtitleStylePassthrough === "object");
assert(typeof DvbSubtitleTeletextSpacing === "object");
assert(typeof DvbSubtitlingType === "object");
assert(typeof DynamicAudioSelectorType === "object");
assert(typeof Eac3AtmosBitstreamMode === "object");
assert(typeof Eac3AtmosCodingMode === "object");
assert(typeof Eac3AtmosDialogueIntelligence === "object");
assert(typeof Eac3AtmosDownmixControl === "object");
assert(typeof Eac3AtmosDynamicRangeCompressionLine === "object");
assert(typeof Eac3AtmosDynamicRangeCompressionRf === "object");
assert(typeof Eac3AtmosDynamicRangeControl === "object");
assert(typeof Eac3AtmosMeteringMode === "object");
assert(typeof Eac3AtmosStereoDownmix === "object");
assert(typeof Eac3AtmosSurroundExMode === "object");
assert(typeof Eac3AttenuationControl === "object");
assert(typeof Eac3BitstreamMode === "object");
assert(typeof Eac3CodingMode === "object");
assert(typeof Eac3DcFilter === "object");
assert(typeof Eac3DynamicRangeCompressionLine === "object");
assert(typeof Eac3DynamicRangeCompressionRf === "object");
assert(typeof Eac3LfeControl === "object");
assert(typeof Eac3LfeFilter === "object");
assert(typeof Eac3MetadataControl === "object");
assert(typeof Eac3PassthroughControl === "object");
assert(typeof Eac3PhaseControl === "object");
assert(typeof Eac3StereoDownmix === "object");
assert(typeof Eac3SurroundExMode === "object");
assert(typeof Eac3SurroundMode === "object");
assert(typeof EmbeddedConvert608To708 === "object");
assert(typeof EmbeddedTerminateCaptions === "object");
assert(typeof EmbeddedTimecodeOverride === "object");
assert(typeof F4vMoovPlacement === "object");
assert(typeof FileSourceConvert608To708 === "object");
assert(typeof FileSourceTimeDeltaUnits === "object");
assert(typeof FontScript === "object");
assert(typeof Format === "object");
assert(typeof FrameControl === "object");
assert(typeof FrameMetricType === "object");
assert(typeof GifFramerateControl === "object");
assert(typeof GifFramerateConversionAlgorithm === "object");
assert(typeof H264AdaptiveQuantization === "object");
assert(typeof H264CodecLevel === "object");
assert(typeof H264CodecProfile === "object");
assert(typeof H264DynamicSubGop === "object");
assert(typeof H264EndOfStreamMarkers === "object");
assert(typeof H264EntropyEncoding === "object");
assert(typeof H264FieldEncoding === "object");
assert(typeof H264FlickerAdaptiveQuantization === "object");
assert(typeof H264FramerateControl === "object");
assert(typeof H264FramerateConversionAlgorithm === "object");
assert(typeof H264GopBReference === "object");
assert(typeof H264GopSizeUnits === "object");
assert(typeof H264InterlaceMode === "object");
assert(typeof H264ParControl === "object");
assert(typeof H264QualityTuningLevel === "object");
assert(typeof H264RateControlMode === "object");
assert(typeof H264RepeatPps === "object");
assert(typeof H264SaliencyAwareEncoding === "object");
assert(typeof H264ScanTypeConversionMode === "object");
assert(typeof H264SceneChangeDetect === "object");
assert(typeof H264SlowPal === "object");
assert(typeof H264SpatialAdaptiveQuantization === "object");
assert(typeof H264Syntax === "object");
assert(typeof H264Telecine === "object");
assert(typeof H264TemporalAdaptiveQuantization === "object");
assert(typeof H264UnregisteredSeiTimecode === "object");
assert(typeof H264WriteMp4PackagingType === "object");
assert(typeof H265AdaptiveQuantization === "object");
assert(typeof H265AlternateTransferFunctionSei === "object");
assert(typeof H265CodecLevel === "object");
assert(typeof H265CodecProfile === "object");
assert(typeof H265Deblocking === "object");
assert(typeof H265DynamicSubGop === "object");
assert(typeof H265EndOfStreamMarkers === "object");
assert(typeof H265FlickerAdaptiveQuantization === "object");
assert(typeof H265FramerateControl === "object");
assert(typeof H265FramerateConversionAlgorithm === "object");
assert(typeof H265GopBReference === "object");
assert(typeof H265GopSizeUnits === "object");
assert(typeof H265InterlaceMode === "object");
assert(typeof H265ParControl === "object");
assert(typeof H265QualityTuningLevel === "object");
assert(typeof H265RateControlMode === "object");
assert(typeof H265SampleAdaptiveOffsetFilterMode === "object");
assert(typeof H265ScanTypeConversionMode === "object");
assert(typeof H265SceneChangeDetect === "object");
assert(typeof H265SlowPal === "object");
assert(typeof H265SpatialAdaptiveQuantization === "object");
assert(typeof H265Telecine === "object");
assert(typeof H265TemporalAdaptiveQuantization === "object");
assert(typeof H265TemporalIds === "object");
assert(typeof H265Tiles === "object");
assert(typeof H265UnregisteredSeiTimecode === "object");
assert(typeof H265WriteMp4PackagingType === "object");
assert(typeof HDRToSDRToneMapper === "object");
assert(typeof HlsAdMarkers === "object");
assert(typeof HlsAudioOnlyContainer === "object");
assert(typeof HlsAudioOnlyHeader === "object");
assert(typeof HlsAudioTrackType === "object");
assert(typeof HlsCaptionLanguageSetting === "object");
assert(typeof HlsCaptionSegmentLengthControl === "object");
assert(typeof HlsClientCache === "object");
assert(typeof HlsCodecSpecification === "object");
assert(typeof HlsDescriptiveVideoServiceFlag === "object");
assert(typeof HlsDirectoryStructure === "object");
assert(typeof HlsEncryptionType === "object");
assert(typeof HlsIFrameOnlyManifest === "object");
assert(typeof HlsImageBasedTrickPlay === "object");
assert(typeof HlsInitializationVectorInManifest === "object");
assert(typeof HlsIntervalCadence === "object");
assert(typeof HlsKeyProviderType === "object");
assert(typeof HlsManifestCompression === "object");
assert(typeof HlsManifestDurationFormat === "object");
assert(typeof HlsOfflineEncrypted === "object");
assert(typeof HlsOutputSelection === "object");
assert(typeof HlsProgramDateTime === "object");
assert(typeof HlsProgressiveWriteHlsManifest === "object");
assert(typeof HlsSegmentControl === "object");
assert(typeof HlsSegmentLengthControl === "object");
assert(typeof HlsStreamInfResolution === "object");
assert(typeof HlsTargetDurationCompatibilityMode === "object");
assert(typeof HlsTimedMetadataId3Frame === "object");
assert(typeof ImscAccessibilitySubs === "object");
assert(typeof ImscStylePassthrough === "object");
assert(typeof InputDeblockFilter === "object");
assert(typeof InputDenoiseFilter === "object");
assert(typeof InputFilterEnable === "object");
assert(typeof InputPolicy === "object");
assert(typeof InputPsiControl === "object");
assert(typeof InputRotate === "object");
assert(typeof InputSampleRange === "object");
assert(typeof InputScanType === "object");
assert(typeof InputTimecodeSource === "object");
assert(typeof JobPhase === "object");
assert(typeof JobsQueryFilterKey === "object");
assert(typeof JobsQueryStatus === "object");
assert(typeof JobStatus === "object");
assert(typeof JobTemplateListBy === "object");
assert(typeof LanguageCode === "object");
assert(typeof M2tsAudioBufferModel === "object");
assert(typeof M2tsAudioDuration === "object");
assert(typeof M2tsBufferModel === "object");
assert(typeof M2tsDataPtsControl === "object");
assert(typeof M2tsEbpAudioInterval === "object");
assert(typeof M2tsEbpPlacement === "object");
assert(typeof M2tsEsRateInPes === "object");
assert(typeof M2tsForceTsVideoEbpOrder === "object");
assert(typeof M2tsKlvMetadata === "object");
assert(typeof M2tsNielsenId3 === "object");
assert(typeof M2tsPcrControl === "object");
assert(typeof M2tsPreventBufferUnderflow === "object");
assert(typeof M2tsRateMode === "object");
assert(typeof M2tsScte35Source === "object");
assert(typeof M2tsSegmentationMarkers === "object");
assert(typeof M2tsSegmentationStyle === "object");
assert(typeof M3u8AudioDuration === "object");
assert(typeof M3u8DataPtsControl === "object");
assert(typeof M3u8NielsenId3 === "object");
assert(typeof M3u8PcrControl === "object");
assert(typeof M3u8Scte35Source === "object");
assert(typeof MatrixCoefficients === "object");
assert(typeof MotionImageInsertionMode === "object");
assert(typeof MotionImagePlayback === "object");
assert(typeof MovClapAtom === "object");
assert(typeof MovCslgAtom === "object");
assert(typeof MovMpeg2FourCCControl === "object");
assert(typeof MovPaddingControl === "object");
assert(typeof MovReference === "object");
assert(typeof Mp2AudioDescriptionMix === "object");
assert(typeof Mp3RateControlMode === "object");
assert(typeof Mp4C2paManifest === "object");
assert(typeof Mp4CslgAtom === "object");
assert(typeof Mp4FreeSpaceBox === "object");
assert(typeof Mp4MoovPlacement === "object");
assert(typeof MpdAccessibilityCaptionHints === "object");
assert(typeof MpdAudioDuration === "object");
assert(typeof MpdC2paManifest === "object");
assert(typeof MpdCaptionContainerType === "object");
assert(typeof MpdKlvMetadata === "object");
assert(typeof MpdManifestMetadataSignaling === "object");
assert(typeof MpdScte35Esam === "object");
assert(typeof MpdScte35Source === "object");
assert(typeof MpdTimedMetadata === "object");
assert(typeof MpdTimedMetadataBoxVersion === "object");
assert(typeof Mpeg2AdaptiveQuantization === "object");
assert(typeof Mpeg2CodecLevel === "object");
assert(typeof Mpeg2CodecProfile === "object");
assert(typeof Mpeg2DynamicSubGop === "object");
assert(typeof Mpeg2FramerateControl === "object");
assert(typeof Mpeg2FramerateConversionAlgorithm === "object");
assert(typeof Mpeg2GopSizeUnits === "object");
assert(typeof Mpeg2InterlaceMode === "object");
assert(typeof Mpeg2IntraDcPrecision === "object");
assert(typeof Mpeg2ParControl === "object");
assert(typeof Mpeg2QualityTuningLevel === "object");
assert(typeof Mpeg2RateControlMode === "object");
assert(typeof Mpeg2ScanTypeConversionMode === "object");
assert(typeof Mpeg2SceneChangeDetect === "object");
assert(typeof Mpeg2SlowPal === "object");
assert(typeof Mpeg2SpatialAdaptiveQuantization === "object");
assert(typeof Mpeg2Syntax === "object");
assert(typeof Mpeg2Telecine === "object");
assert(typeof Mpeg2TemporalAdaptiveQuantization === "object");
assert(typeof MsSmoothAudioDeduplication === "object");
assert(typeof MsSmoothFragmentLengthControl === "object");
assert(typeof MsSmoothManifestEncoding === "object");
assert(typeof MxfAfdSignaling === "object");
assert(typeof MxfProfile === "object");
assert(typeof MxfXavcDurationMode === "object");
assert(typeof NielsenActiveWatermarkProcessType === "object");
assert(typeof NielsenSourceWatermarkStatusType === "object");
assert(typeof NielsenUniqueTicPerAudioTrackType === "object");
assert(typeof NoiseFilterPostTemporalSharpening === "object");
assert(typeof NoiseFilterPostTemporalSharpeningStrength === "object");
assert(typeof NoiseReducerFilter === "object");
assert(typeof Order === "object");
assert(typeof OutputGroupType === "object");
assert(typeof OutputSdt === "object");
assert(typeof PadVideo === "object");
assert(typeof PresetListBy === "object");
assert(typeof PresetSpeke20Audio === "object");
assert(typeof PresetSpeke20Video === "object");
assert(typeof PricingPlan === "object");
assert(typeof ProresChromaSampling === "object");
assert(typeof ProresCodecProfile === "object");
assert(typeof ProresFramerateControl === "object");
assert(typeof ProresFramerateConversionAlgorithm === "object");
assert(typeof ProresInterlaceMode === "object");
assert(typeof ProresParControl === "object");
assert(typeof ProresScanTypeConversionMode === "object");
assert(typeof ProresSlowPal === "object");
assert(typeof ProresTelecine === "object");
assert(typeof QueueListBy === "object");
assert(typeof QueueStatus === "object");
assert(typeof RemoveRubyReserveAttributes === "object");
assert(typeof RenewalType === "object");
assert(typeof RequiredFlag === "object");
assert(typeof ReservationPlanStatus === "object");
assert(typeof RespondToAfd === "object");
assert(typeof RuleType === "object");
assert(typeof S3ObjectCannedAcl === "object");
assert(typeof S3ServerSideEncryptionType === "object");
assert(typeof S3StorageClass === "object");
assert(typeof SampleRangeConversion === "object");
assert(typeof ScalingBehavior === "object");
assert(typeof SccDestinationFramerate === "object");
assert(typeof ShareStatus === "object");
assert(typeof SimulateReservedQueue === "object");
assert(typeof SlowPalPitchCorrection === "object");
assert(typeof SrtStylePassthrough === "object");
assert(typeof StatusUpdateInterval === "object");
assert(typeof TamsGapHandling === "object");
assert(typeof TeletextPageType === "object");
assert(typeof TimecodeBurninPosition === "object");
assert(typeof TimecodeSource === "object");
assert(typeof TimecodeTrack === "object");
assert(typeof TimedMetadata === "object");
assert(typeof TrackType === "object");
assert(typeof TransferCharacteristics === "object");
assert(typeof TsPtsOffset === "object");
assert(typeof TtmlStylePassthrough === "object");
assert(typeof Type === "object");
assert(typeof UncompressedFourcc === "object");
assert(typeof UncompressedFramerateControl === "object");
assert(typeof UncompressedFramerateConversionAlgorithm === "object");
assert(typeof UncompressedInterlaceMode === "object");
assert(typeof UncompressedScanTypeConversionMode === "object");
assert(typeof UncompressedSlowPal === "object");
assert(typeof UncompressedTelecine === "object");
assert(typeof Vc3Class === "object");
assert(typeof Vc3FramerateControl === "object");
assert(typeof Vc3FramerateConversionAlgorithm === "object");
assert(typeof Vc3InterlaceMode === "object");
assert(typeof Vc3ScanTypeConversionMode === "object");
assert(typeof Vc3SlowPal === "object");
assert(typeof Vc3Telecine === "object");
assert(typeof VchipAction === "object");
assert(typeof VideoCodec === "object");
assert(typeof VideoOverlayPlayBackMode === "object");
assert(typeof VideoOverlayUnit === "object");
assert(typeof VideoSelectorMode === "object");
assert(typeof VideoSelectorType === "object");
assert(typeof VideoTimecodeInsertion === "object");
assert(typeof Vp8FramerateControl === "object");
assert(typeof Vp8FramerateConversionAlgorithm === "object");
assert(typeof Vp8ParControl === "object");
assert(typeof Vp8QualityTuningLevel === "object");
assert(typeof Vp8RateControlMode === "object");
assert(typeof Vp9FramerateControl === "object");
assert(typeof Vp9FramerateConversionAlgorithm === "object");
assert(typeof Vp9ParControl === "object");
assert(typeof Vp9QualityTuningLevel === "object");
assert(typeof Vp9RateControlMode === "object");
assert(typeof WatermarkingStrength === "object");
assert(typeof WavFormat === "object");
assert(typeof WebvttAccessibilitySubs === "object");
assert(typeof WebvttStylePassthrough === "object");
assert(typeof Xavc4kIntraCbgProfileClass === "object");
assert(typeof Xavc4kIntraVbrProfileClass === "object");
assert(typeof Xavc4kProfileBitrateClass === "object");
assert(typeof Xavc4kProfileCodecProfile === "object");
assert(typeof Xavc4kProfileQualityTuningLevel === "object");
assert(typeof XavcAdaptiveQuantization === "object");
assert(typeof XavcEntropyEncoding === "object");
assert(typeof XavcFlickerAdaptiveQuantization === "object");
assert(typeof XavcFramerateControl === "object");
assert(typeof XavcFramerateConversionAlgorithm === "object");
assert(typeof XavcGopBReference === "object");
assert(typeof XavcHdIntraCbgProfileClass === "object");
assert(typeof XavcHdProfileBitrateClass === "object");
assert(typeof XavcHdProfileQualityTuningLevel === "object");
assert(typeof XavcHdProfileTelecine === "object");
assert(typeof XavcInterlaceMode === "object");
assert(typeof XavcProfile === "object");
assert(typeof XavcSlowPal === "object");
assert(typeof XavcSpatialAdaptiveQuantization === "object");
assert(typeof XavcTemporalAdaptiveQuantization === "object");
// errors
assert(BadRequestException.prototype instanceof MediaConvertServiceException);
assert(ConflictException.prototype instanceof MediaConvertServiceException);
assert(ForbiddenException.prototype instanceof MediaConvertServiceException);
assert(InternalServerErrorException.prototype instanceof MediaConvertServiceException);
assert(NotFoundException.prototype instanceof MediaConvertServiceException);
assert(ServiceQuotaExceededException.prototype instanceof MediaConvertServiceException);
assert(TooManyRequestsException.prototype instanceof MediaConvertServiceException);
assert(MediaConvertServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeEndpoints === "function");
assert(typeof paginateListJobTemplates === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListPresets === "function");
assert(typeof paginateListQueues === "function");
assert(typeof paginateListVersions === "function");
assert(typeof paginateSearchJobs === "function");
console.log(`MediaConvert index test passed.`);
