import {
  AacCodingMode,
  AacInputType,
  AacProfile,
  AacRateControlMode,
  AacRawFormat,
  AacSpec,
  AacVbrQuality,
  Ac3AttenuationControl,
  Ac3BitstreamMode,
  Ac3CodingMode,
  Ac3DrcProfile,
  Ac3LfeFilter,
  Ac3MetadataControl,
  AcceptHeader,
  AcceptInputDeviceTransferCommand,
  AccessibilityType,
  AfdSignaling,
  Algorithm,
  AudioDescriptionAudioTypeControl,
  AudioDescriptionLanguageCodeControl,
  AudioLanguageSelectionPolicy,
  AudioNormalizationAlgorithm,
  AudioNormalizationAlgorithmControl,
  AudioOnlyHlsSegmentType,
  AudioOnlyHlsTrackType,
  AudioType,
  AuthenticationScheme,
  Av1GopSizeUnits,
  Av1Level,
  Av1LookAheadRateControl,
  Av1RateControlMode,
  Av1SceneChangeDetect,
  Av1SpatialAq,
  Av1TemporalAq,
  AvailBlankingState,
  BadGatewayException,
  BadRequestException,
  BandwidthReductionFilterStrength,
  BandwidthReductionPostFilterSharpening,
  BatchDeleteCommand,
  BatchStartCommand,
  BatchStopCommand,
  BatchUpdateScheduleCommand,
  BlackoutSlateNetworkEndBlackout,
  BlackoutSlateState,
  BurnInAlignment,
  BurnInBackgroundColor,
  BurnInDestinationSubtitleRows,
  BurnInFontColor,
  BurnInOutlineColor,
  BurnInShadowColor,
  BurnInTeletextGridControl,
  CancelInputDeviceTransferCommand,
  CdiInputResolution,
  ChannelAlertState,
  ChannelClass,
  ChannelPipelineIdToRestart,
  ChannelPlacementGroupState,
  ChannelState,
  ClaimDeviceCommand,
  CloudWatchAlarmTemplateComparisonOperator,
  CloudWatchAlarmTemplateStatistic,
  CloudWatchAlarmTemplateTargetResourceType,
  CloudWatchAlarmTemplateTreatMissingData,
  ClusterAlertState,
  ClusterState,
  ClusterType,
  CmafId3Behavior,
  CmafIngestSegmentLengthUnits,
  CmafKLVBehavior,
  CmafNielsenId3Behavior,
  CmafTimedMetadataId3Frame,
  CmafTimedMetadataPassthrough,
  ColorSpace,
  ConflictException,
  ContentType,
  CreateChannelCommand,
  CreateChannelPlacementGroupCommand,
  CreateCloudWatchAlarmTemplateCommand,
  CreateCloudWatchAlarmTemplateGroupCommand,
  CreateClusterCommand,
  CreateEventBridgeRuleTemplateCommand,
  CreateEventBridgeRuleTemplateGroupCommand,
  CreateInputCommand,
  CreateInputSecurityGroupCommand,
  CreateMultiplexCommand,
  CreateMultiplexProgramCommand,
  CreateNetworkCommand,
  CreateNodeCommand,
  CreateNodeRegistrationScriptCommand,
  CreatePartnerInputCommand,
  CreateSdiSourceCommand,
  CreateSignalMapCommand,
  CreateTagsCommand,
  DashRoleAudio,
  DashRoleCaption,
  DeleteChannelCommand,
  DeleteChannelPlacementGroupCommand,
  DeleteCloudWatchAlarmTemplateCommand,
  DeleteCloudWatchAlarmTemplateGroupCommand,
  DeleteClusterCommand,
  DeleteEventBridgeRuleTemplateCommand,
  DeleteEventBridgeRuleTemplateGroupCommand,
  DeleteInputCommand,
  DeleteInputSecurityGroupCommand,
  DeleteMultiplexCommand,
  DeleteMultiplexProgramCommand,
  DeleteNetworkCommand,
  DeleteNodeCommand,
  DeleteReservationCommand,
  DeleteScheduleCommand,
  DeleteSdiSourceCommand,
  DeleteSignalMapCommand,
  DeleteTagsCommand,
  DescribeAccountConfigurationCommand,
  DescribeChannelCommand,
  DescribeChannelPlacementGroupCommand,
  DescribeClusterCommand,
  DescribeInputCommand,
  DescribeInputDeviceCommand,
  DescribeInputDeviceThumbnailCommand,
  DescribeInputSecurityGroupCommand,
  DescribeMultiplexCommand,
  DescribeMultiplexProgramCommand,
  DescribeNetworkCommand,
  DescribeNodeCommand,
  DescribeOfferingCommand,
  DescribeReservationCommand,
  DescribeScheduleCommand,
  DescribeSdiSourceCommand,
  DescribeThumbnailsCommand,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  DolbyEProgramSelection,
  DvbDashAccessibility,
  DvbSdtOutputSdt,
  DvbSubDestinationAlignment,
  DvbSubDestinationBackgroundColor,
  DvbSubDestinationFontColor,
  DvbSubDestinationOutlineColor,
  DvbSubDestinationShadowColor,
  DvbSubDestinationSubtitleRows,
  DvbSubDestinationTeletextGridControl,
  DvbSubOcrLanguage,
  Eac3AtmosCodingMode,
  Eac3AtmosDrcLine,
  Eac3AtmosDrcRf,
  Eac3AttenuationControl,
  Eac3BitstreamMode,
  Eac3CodingMode,
  Eac3DcFilter,
  Eac3DrcLine,
  Eac3DrcRf,
  Eac3LfeControl,
  Eac3LfeFilter,
  Eac3MetadataControl,
  Eac3PassthroughControl,
  Eac3PhaseControl,
  Eac3StereoDownmix,
  Eac3SurroundExMode,
  Eac3SurroundMode,
  EbuTtDDestinationStyleControl,
  EbuTtDFillLineGapControl,
  EmbeddedConvert608To708,
  EmbeddedScte20Detection,
  EventBridgeRuleTemplateEventType,
  FeatureActivationsInputPrepareScheduleActions,
  FeatureActivationsOutputStaticImageOverlayScheduleActions,
  FecOutputIncludeFec,
  FixedAfd,
  Fmp4NielsenId3Behavior,
  Fmp4TimedMetadataBehavior,
  FollowPoint,
  ForbiddenException,
  FrameCaptureIntervalUnit,
  GatewayTimeoutException,
  GetCloudWatchAlarmTemplateCommand,
  GetCloudWatchAlarmTemplateGroupCommand,
  GetEventBridgeRuleTemplateCommand,
  GetEventBridgeRuleTemplateGroupCommand,
  GetSignalMapCommand,
  GlobalConfigurationInputEndAction,
  GlobalConfigurationLowFramerateInputs,
  GlobalConfigurationOutputLockingMode,
  GlobalConfigurationOutputTimingSource,
  H264AdaptiveQuantization,
  H264ColorMetadata,
  H264EntropyEncoding,
  H264FlickerAq,
  H264ForceFieldPictures,
  H264FramerateControl,
  H264GopBReference,
  H264GopSizeUnits,
  H264Level,
  H264LookAheadRateControl,
  H264ParControl,
  H264Profile,
  H264QualityLevel,
  H264RateControlMode,
  H264ScanType,
  H264SceneChangeDetect,
  H264SpatialAq,
  H264SubGopLength,
  H264Syntax,
  H264TemporalAq,
  H264TimecodeInsertionBehavior,
  H265AdaptiveQuantization,
  H265AlternativeTransferFunction,
  H265ColorMetadata,
  H265Deblocking,
  H265FlickerAq,
  H265GopBReference,
  H265GopSizeUnits,
  H265Level,
  H265LookAheadRateControl,
  H265MvOverPictureBoundaries,
  H265MvTemporalPredictor,
  H265Profile,
  H265RateControlMode,
  H265ScanType,
  H265SceneChangeDetect,
  H265SubGopLength,
  H265Tier,
  H265TilePadding,
  H265TimecodeInsertionBehavior,
  H265TreeblockSize,
  HlsAdMarkers,
  HlsAkamaiHttpTransferMode,
  HlsAutoSelect,
  HlsCaptionLanguageSetting,
  HlsClientCache,
  HlsCodecSpecification,
  HlsDefault,
  HlsDirectoryStructure,
  HlsDiscontinuityTags,
  HlsEncryptionType,
  HlsH265PackagingType,
  HlsId3SegmentTaggingState,
  HlsIncompleteSegmentBehavior,
  HlsIvInManifest,
  HlsIvSource,
  HlsManifestCompression,
  HlsManifestDurationFormat,
  HlsMediaStoreStorageClass,
  HlsMode,
  HlsOutputSelection,
  HlsProgramDateTime,
  HlsProgramDateTimeClock,
  HlsRedundantManifest,
  HlsScte35SourceType,
  HlsSegmentationMode,
  HlsStreamInfResolution,
  HlsTimedMetadataId3Frame,
  HlsTsFileMode,
  HlsWebdavHttpTransferMode,
  IFrameOnlyPlaylistType,
  IncludeFillerNalUnits,
  InputClass,
  InputCodec,
  InputDeblockFilter,
  InputDenoiseFilter,
  InputDeviceActiveInput,
  InputDeviceCodec,
  InputDeviceConfigurableAudioChannelPairProfile,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceIpScheme,
  InputDeviceOutputType,
  InputDeviceScanType,
  InputDeviceState,
  InputDeviceTransferType,
  InputDeviceType,
  InputDeviceUhdAudioChannelPairProfile,
  InputFilter,
  InputLossActionForHlsOut,
  InputLossActionForMsSmoothOut,
  InputLossActionForRtmpOut,
  InputLossActionForUdpOut,
  InputLossImageType,
  InputMaximumBitrate,
  InputNetworkLocation,
  InputPreference,
  InputResolution,
  InputSecurityGroupState,
  InputSourceEndBehavior,
  InputSourceType,
  InputState,
  InputTimecodeSource,
  InputType,
  InternalServerErrorException,
  LastFrameClippingBehavior,
  ListAlertsCommand,
  ListChannelPlacementGroupsCommand,
  ListChannelsCommand,
  ListCloudWatchAlarmTemplateGroupsCommand,
  ListCloudWatchAlarmTemplatesCommand,
  ListClusterAlertsCommand,
  ListClustersCommand,
  ListEventBridgeRuleTemplateGroupsCommand,
  ListEventBridgeRuleTemplatesCommand,
  ListInputDeviceTransfersCommand,
  ListInputDevicesCommand,
  ListInputSecurityGroupsCommand,
  ListInputsCommand,
  ListMultiplexAlertsCommand,
  ListMultiplexProgramsCommand,
  ListMultiplexesCommand,
  ListNetworksCommand,
  ListNodesCommand,
  ListOfferingsCommand,
  ListReservationsCommand,
  ListSdiSourcesCommand,
  ListSignalMapsCommand,
  ListTagsForResourceCommand,
  ListVersionsCommand,
  LogLevel,
  M2tsAbsentInputAudioBehavior,
  M2tsArib,
  M2tsAribCaptionsPidControl,
  M2tsAudioBufferModel,
  M2tsAudioInterval,
  M2tsAudioStreamType,
  M2tsBufferModel,
  M2tsCcDescriptor,
  M2tsEbifControl,
  M2tsEbpPlacement,
  M2tsEsRateInPes,
  M2tsKlv,
  M2tsNielsenId3Behavior,
  M2tsPcrControl,
  M2tsRateMode,
  M2tsScte35Control,
  M2tsSegmentationMarkers,
  M2tsSegmentationStyle,
  M2tsTimedMetadataBehavior,
  M3u8KlvBehavior,
  M3u8NielsenId3Behavior,
  M3u8PcrControl,
  M3u8Scte35Behavior,
  M3u8TimedMetadataBehavior,
  MaintenanceDay,
  MediaLive,
  MediaLiveClient,
  MediaLiveServiceException,
  MotionGraphicsInsertion,
  Mp2CodingMode,
  Mpeg2AdaptiveQuantization,
  Mpeg2ColorMetadata,
  Mpeg2ColorSpace,
  Mpeg2DisplayRatio,
  Mpeg2GopSizeUnits,
  Mpeg2ScanType,
  Mpeg2SubGopLength,
  Mpeg2TimecodeInsertionBehavior,
  MsSmoothH265PackagingType,
  MultiplexAlertState,
  MultiplexState,
  NetworkInputServerValidation,
  NetworkInterfaceMode,
  NetworkState,
  NielsenPcmToId3TaggingState,
  NielsenWatermarkTimezones,
  NielsenWatermarksCbetStepaside,
  NielsenWatermarksDistributionTypes,
  NodeConnectionState,
  NodeRole,
  NodeState,
  NotFoundException,
  OfferingDurationUnits,
  OfferingType,
  PipelineId,
  PreferredChannelPipeline,
  PurchaseOfferingCommand,
  RebootInputDeviceCommand,
  RebootInputDeviceForce,
  RejectInputDeviceTransferCommand,
  ReservationAutomaticRenewal,
  ReservationCodec,
  ReservationMaximumBitrate,
  ReservationMaximumFramerate,
  ReservationResolution,
  ReservationResourceType,
  ReservationSpecialFeature,
  ReservationState,
  ReservationVideoQuality,
  RestartChannelPipelinesCommand,
  RouterEncryptionType,
  RtmpAdMarkers,
  RtmpCacheFullBehavior,
  RtmpCaptionData,
  RtmpOutputCertificateMode,
  S3CannedAcl,
  Scte20Convert608To708,
  Scte27OcrLanguage,
  Scte35AposNoRegionalBlackoutBehavior,
  Scte35AposWebDeliveryAllowedBehavior,
  Scte35ArchiveAllowedFlag,
  Scte35DeviceRestrictions,
  Scte35InputMode,
  Scte35NoRegionalBlackoutFlag,
  Scte35SegmentationCancelIndicator,
  Scte35SegmentationScope,
  Scte35SpliceInsertNoRegionalBlackoutBehavior,
  Scte35SpliceInsertWebDeliveryAllowedBehavior,
  Scte35Type,
  Scte35WebDeliveryAllowedFlag,
  SdiSourceMode,
  SdiSourceState,
  SdiSourceType,
  SignalMapMonitorDeploymentStatus,
  SignalMapStatus,
  SmoothGroupAudioOnlyTimecodeControl,
  SmoothGroupCertificateMode,
  SmoothGroupEventIdMode,
  SmoothGroupEventStopBehavior,
  SmoothGroupSegmentationMode,
  SmoothGroupSparseTrackType,
  SmoothGroupStreamManifestBehavior,
  SmoothGroupTimestampOffsetMode,
  Smpte2038DataPreference,
  SrtEncryptionType,
  StartChannelCommand,
  StartDeleteMonitorDeploymentCommand,
  StartInputDeviceCommand,
  StartInputDeviceMaintenanceWindowCommand,
  StartMonitorDeploymentCommand,
  StartMultiplexCommand,
  StartUpdateSignalMapCommand,
  StopChannelCommand,
  StopInputDeviceCommand,
  StopMultiplexCommand,
  TemporalFilterPostFilterSharpening,
  TemporalFilterStrength,
  ThumbnailState,
  ThumbnailType,
  TimecodeBurninFontSize,
  TimecodeBurninPosition,
  TimecodeConfigSource,
  TooManyRequestsException,
  TransferInputDeviceCommand,
  TtmlDestinationStyleControl,
  UdpTimedMetadataId3Frame,
  UnprocessableEntityException,
  UpdateAccountConfigurationCommand,
  UpdateChannelClassCommand,
  UpdateChannelCommand,
  UpdateChannelPlacementGroupCommand,
  UpdateCloudWatchAlarmTemplateCommand,
  UpdateCloudWatchAlarmTemplateGroupCommand,
  UpdateClusterCommand,
  UpdateEventBridgeRuleTemplateCommand,
  UpdateEventBridgeRuleTemplateGroupCommand,
  UpdateInputCommand,
  UpdateInputDeviceCommand,
  UpdateInputSecurityGroupCommand,
  UpdateMultiplexCommand,
  UpdateMultiplexProgramCommand,
  UpdateNetworkCommand,
  UpdateNodeCommand,
  UpdateNodeStateCommand,
  UpdateNodeStateShape,
  UpdateReservationCommand,
  UpdateSdiSourceCommand,
  VideoDescriptionRespondToAfd,
  VideoDescriptionScalingBehavior,
  VideoSelectorColorSpace,
  VideoSelectorColorSpaceUsage,
  WavCodingMode,
  WebvttDestinationStyleControl,
  paginateDescribeSchedule,
  paginateListAlerts,
  paginateListChannelPlacementGroups,
  paginateListChannels,
  paginateListCloudWatchAlarmTemplateGroups,
  paginateListCloudWatchAlarmTemplates,
  paginateListClusterAlerts,
  paginateListClusters,
  paginateListEventBridgeRuleTemplateGroups,
  paginateListEventBridgeRuleTemplates,
  paginateListInputDeviceTransfers,
  paginateListInputDevices,
  paginateListInputSecurityGroups,
  paginateListInputs,
  paginateListMultiplexAlerts,
  paginateListMultiplexPrograms,
  paginateListMultiplexes,
  paginateListNetworks,
  paginateListNodes,
  paginateListOfferings,
  paginateListReservations,
  paginateListSdiSources,
  paginateListSignalMaps,
  waitForChannelCreated,
  waitForChannelDeleted,
  waitForChannelPlacementGroupAssigned,
  waitForChannelPlacementGroupDeleted,
  waitForChannelPlacementGroupUnassigned,
  waitForChannelRunning,
  waitForChannelStopped,
  waitForClusterCreated,
  waitForClusterDeleted,
  waitForInputAttached,
  waitForInputDeleted,
  waitForInputDetached,
  waitForMultiplexCreated,
  waitForMultiplexDeleted,
  waitForMultiplexRunning,
  waitForMultiplexStopped,
  waitForNodeDeregistered,
  waitForNodeRegistered,
  waitForSignalMapCreated,
  waitForSignalMapMonitorDeleted,
  waitForSignalMapMonitorDeployed,
  waitForSignalMapUpdated,
  waitUntilChannelCreated,
  waitUntilChannelDeleted,
  waitUntilChannelPlacementGroupAssigned,
  waitUntilChannelPlacementGroupDeleted,
  waitUntilChannelPlacementGroupUnassigned,
  waitUntilChannelRunning,
  waitUntilChannelStopped,
  waitUntilClusterCreated,
  waitUntilClusterDeleted,
  waitUntilInputAttached,
  waitUntilInputDeleted,
  waitUntilInputDetached,
  waitUntilMultiplexCreated,
  waitUntilMultiplexDeleted,
  waitUntilMultiplexRunning,
  waitUntilMultiplexStopped,
  waitUntilNodeDeregistered,
  waitUntilNodeRegistered,
  waitUntilSignalMapCreated,
  waitUntilSignalMapMonitorDeleted,
  waitUntilSignalMapMonitorDeployed,
  waitUntilSignalMapUpdated,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaLiveClient === "function");
assert(typeof MediaLive === "function");
// commands
assert(typeof AcceptInputDeviceTransferCommand === "function");
assert(typeof BatchDeleteCommand === "function");
assert(typeof BatchStartCommand === "function");
assert(typeof BatchStopCommand === "function");
assert(typeof BatchUpdateScheduleCommand === "function");
assert(typeof CancelInputDeviceTransferCommand === "function");
assert(typeof ClaimDeviceCommand === "function");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannelPlacementGroupCommand === "function");
assert(typeof CreateCloudWatchAlarmTemplateCommand === "function");
assert(typeof CreateCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateEventBridgeRuleTemplateCommand === "function");
assert(typeof CreateEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof CreateInputCommand === "function");
assert(typeof CreateInputSecurityGroupCommand === "function");
assert(typeof CreateMultiplexCommand === "function");
assert(typeof CreateMultiplexProgramCommand === "function");
assert(typeof CreateNetworkCommand === "function");
assert(typeof CreateNodeCommand === "function");
assert(typeof CreateNodeRegistrationScriptCommand === "function");
assert(typeof CreatePartnerInputCommand === "function");
assert(typeof CreateSdiSourceCommand === "function");
assert(typeof CreateSignalMapCommand === "function");
assert(typeof CreateTagsCommand === "function");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannelPlacementGroupCommand === "function");
assert(typeof DeleteCloudWatchAlarmTemplateCommand === "function");
assert(typeof DeleteCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteEventBridgeRuleTemplateCommand === "function");
assert(typeof DeleteEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof DeleteInputCommand === "function");
assert(typeof DeleteInputSecurityGroupCommand === "function");
assert(typeof DeleteMultiplexCommand === "function");
assert(typeof DeleteMultiplexProgramCommand === "function");
assert(typeof DeleteNetworkCommand === "function");
assert(typeof DeleteNodeCommand === "function");
assert(typeof DeleteReservationCommand === "function");
assert(typeof DeleteScheduleCommand === "function");
assert(typeof DeleteSdiSourceCommand === "function");
assert(typeof DeleteSignalMapCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DescribeAccountConfigurationCommand === "function");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeChannelPlacementGroupCommand === "function");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeInputCommand === "function");
assert(typeof DescribeInputDeviceCommand === "function");
assert(typeof DescribeInputDeviceThumbnailCommand === "function");
assert(typeof DescribeInputSecurityGroupCommand === "function");
assert(typeof DescribeMultiplexCommand === "function");
assert(typeof DescribeMultiplexProgramCommand === "function");
assert(typeof DescribeNetworkCommand === "function");
assert(typeof DescribeNodeCommand === "function");
assert(typeof DescribeOfferingCommand === "function");
assert(typeof DescribeReservationCommand === "function");
assert(typeof DescribeScheduleCommand === "function");
assert(typeof DescribeSdiSourceCommand === "function");
assert(typeof DescribeThumbnailsCommand === "function");
assert(typeof GetCloudWatchAlarmTemplateCommand === "function");
assert(typeof GetCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof GetEventBridgeRuleTemplateCommand === "function");
assert(typeof GetEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof GetSignalMapCommand === "function");
assert(typeof ListAlertsCommand === "function");
assert(typeof ListChannelPlacementGroupsCommand === "function");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListCloudWatchAlarmTemplateGroupsCommand === "function");
assert(typeof ListCloudWatchAlarmTemplatesCommand === "function");
assert(typeof ListClusterAlertsCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListEventBridgeRuleTemplateGroupsCommand === "function");
assert(typeof ListEventBridgeRuleTemplatesCommand === "function");
assert(typeof ListInputDevicesCommand === "function");
assert(typeof ListInputDeviceTransfersCommand === "function");
assert(typeof ListInputsCommand === "function");
assert(typeof ListInputSecurityGroupsCommand === "function");
assert(typeof ListMultiplexAlertsCommand === "function");
assert(typeof ListMultiplexesCommand === "function");
assert(typeof ListMultiplexProgramsCommand === "function");
assert(typeof ListNetworksCommand === "function");
assert(typeof ListNodesCommand === "function");
assert(typeof ListOfferingsCommand === "function");
assert(typeof ListReservationsCommand === "function");
assert(typeof ListSdiSourcesCommand === "function");
assert(typeof ListSignalMapsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVersionsCommand === "function");
assert(typeof PurchaseOfferingCommand === "function");
assert(typeof RebootInputDeviceCommand === "function");
assert(typeof RejectInputDeviceTransferCommand === "function");
assert(typeof RestartChannelPipelinesCommand === "function");
assert(typeof StartChannelCommand === "function");
assert(typeof StartDeleteMonitorDeploymentCommand === "function");
assert(typeof StartInputDeviceCommand === "function");
assert(typeof StartInputDeviceMaintenanceWindowCommand === "function");
assert(typeof StartMonitorDeploymentCommand === "function");
assert(typeof StartMultiplexCommand === "function");
assert(typeof StartUpdateSignalMapCommand === "function");
assert(typeof StopChannelCommand === "function");
assert(typeof StopInputDeviceCommand === "function");
assert(typeof StopMultiplexCommand === "function");
assert(typeof TransferInputDeviceCommand === "function");
assert(typeof UpdateAccountConfigurationCommand === "function");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannelClassCommand === "function");
assert(typeof UpdateChannelPlacementGroupCommand === "function");
assert(typeof UpdateCloudWatchAlarmTemplateCommand === "function");
assert(typeof UpdateCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateEventBridgeRuleTemplateCommand === "function");
assert(typeof UpdateEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof UpdateInputCommand === "function");
assert(typeof UpdateInputDeviceCommand === "function");
assert(typeof UpdateInputSecurityGroupCommand === "function");
assert(typeof UpdateMultiplexCommand === "function");
assert(typeof UpdateMultiplexProgramCommand === "function");
assert(typeof UpdateNetworkCommand === "function");
assert(typeof UpdateNodeCommand === "function");
assert(typeof UpdateNodeStateCommand === "function");
assert(typeof UpdateReservationCommand === "function");
assert(typeof UpdateSdiSourceCommand === "function");
// enums
assert(typeof AacCodingMode === "object");
assert(typeof AacInputType === "object");
assert(typeof AacProfile === "object");
assert(typeof AacRateControlMode === "object");
assert(typeof AacRawFormat === "object");
assert(typeof AacSpec === "object");
assert(typeof AacVbrQuality === "object");
assert(typeof Ac3AttenuationControl === "object");
assert(typeof Ac3BitstreamMode === "object");
assert(typeof Ac3CodingMode === "object");
assert(typeof Ac3DrcProfile === "object");
assert(typeof Ac3LfeFilter === "object");
assert(typeof Ac3MetadataControl === "object");
assert(typeof AcceptHeader === "object");
assert(typeof AccessibilityType === "object");
assert(typeof AfdSignaling === "object");
assert(typeof Algorithm === "object");
assert(typeof AudioDescriptionAudioTypeControl === "object");
assert(typeof AudioDescriptionLanguageCodeControl === "object");
assert(typeof AudioLanguageSelectionPolicy === "object");
assert(typeof AudioNormalizationAlgorithm === "object");
assert(typeof AudioNormalizationAlgorithmControl === "object");
assert(typeof AudioOnlyHlsSegmentType === "object");
assert(typeof AudioOnlyHlsTrackType === "object");
assert(typeof AudioType === "object");
assert(typeof AuthenticationScheme === "object");
assert(typeof Av1GopSizeUnits === "object");
assert(typeof Av1Level === "object");
assert(typeof Av1LookAheadRateControl === "object");
assert(typeof Av1RateControlMode === "object");
assert(typeof Av1SceneChangeDetect === "object");
assert(typeof Av1SpatialAq === "object");
assert(typeof Av1TemporalAq === "object");
assert(typeof AvailBlankingState === "object");
assert(typeof BandwidthReductionFilterStrength === "object");
assert(typeof BandwidthReductionPostFilterSharpening === "object");
assert(typeof BlackoutSlateNetworkEndBlackout === "object");
assert(typeof BlackoutSlateState === "object");
assert(typeof BurnInAlignment === "object");
assert(typeof BurnInBackgroundColor === "object");
assert(typeof BurnInDestinationSubtitleRows === "object");
assert(typeof BurnInFontColor === "object");
assert(typeof BurnInOutlineColor === "object");
assert(typeof BurnInShadowColor === "object");
assert(typeof BurnInTeletextGridControl === "object");
assert(typeof CdiInputResolution === "object");
assert(typeof ChannelAlertState === "object");
assert(typeof ChannelClass === "object");
assert(typeof ChannelPipelineIdToRestart === "object");
assert(typeof ChannelPlacementGroupState === "object");
assert(typeof ChannelState === "object");
assert(typeof CloudWatchAlarmTemplateComparisonOperator === "object");
assert(typeof CloudWatchAlarmTemplateStatistic === "object");
assert(typeof CloudWatchAlarmTemplateTargetResourceType === "object");
assert(typeof CloudWatchAlarmTemplateTreatMissingData === "object");
assert(typeof ClusterAlertState === "object");
assert(typeof ClusterState === "object");
assert(typeof ClusterType === "object");
assert(typeof CmafId3Behavior === "object");
assert(typeof CmafIngestSegmentLengthUnits === "object");
assert(typeof CmafKLVBehavior === "object");
assert(typeof CmafNielsenId3Behavior === "object");
assert(typeof CmafTimedMetadataId3Frame === "object");
assert(typeof CmafTimedMetadataPassthrough === "object");
assert(typeof ColorSpace === "object");
assert(typeof ContentType === "object");
assert(typeof DashRoleAudio === "object");
assert(typeof DashRoleCaption === "object");
assert(typeof DeviceSettingsSyncState === "object");
assert(typeof DeviceUpdateStatus === "object");
assert(typeof DolbyEProgramSelection === "object");
assert(typeof DvbDashAccessibility === "object");
assert(typeof DvbSdtOutputSdt === "object");
assert(typeof DvbSubDestinationAlignment === "object");
assert(typeof DvbSubDestinationBackgroundColor === "object");
assert(typeof DvbSubDestinationFontColor === "object");
assert(typeof DvbSubDestinationOutlineColor === "object");
assert(typeof DvbSubDestinationShadowColor === "object");
assert(typeof DvbSubDestinationSubtitleRows === "object");
assert(typeof DvbSubDestinationTeletextGridControl === "object");
assert(typeof DvbSubOcrLanguage === "object");
assert(typeof Eac3AtmosCodingMode === "object");
assert(typeof Eac3AtmosDrcLine === "object");
assert(typeof Eac3AtmosDrcRf === "object");
assert(typeof Eac3AttenuationControl === "object");
assert(typeof Eac3BitstreamMode === "object");
assert(typeof Eac3CodingMode === "object");
assert(typeof Eac3DcFilter === "object");
assert(typeof Eac3DrcLine === "object");
assert(typeof Eac3DrcRf === "object");
assert(typeof Eac3LfeControl === "object");
assert(typeof Eac3LfeFilter === "object");
assert(typeof Eac3MetadataControl === "object");
assert(typeof Eac3PassthroughControl === "object");
assert(typeof Eac3PhaseControl === "object");
assert(typeof Eac3StereoDownmix === "object");
assert(typeof Eac3SurroundExMode === "object");
assert(typeof Eac3SurroundMode === "object");
assert(typeof EbuTtDDestinationStyleControl === "object");
assert(typeof EbuTtDFillLineGapControl === "object");
assert(typeof EmbeddedConvert608To708 === "object");
assert(typeof EmbeddedScte20Detection === "object");
assert(typeof EventBridgeRuleTemplateEventType === "object");
assert(typeof FeatureActivationsInputPrepareScheduleActions === "object");
assert(typeof FeatureActivationsOutputStaticImageOverlayScheduleActions === "object");
assert(typeof FecOutputIncludeFec === "object");
assert(typeof FixedAfd === "object");
assert(typeof Fmp4NielsenId3Behavior === "object");
assert(typeof Fmp4TimedMetadataBehavior === "object");
assert(typeof FollowPoint === "object");
assert(typeof FrameCaptureIntervalUnit === "object");
assert(typeof GlobalConfigurationInputEndAction === "object");
assert(typeof GlobalConfigurationLowFramerateInputs === "object");
assert(typeof GlobalConfigurationOutputLockingMode === "object");
assert(typeof GlobalConfigurationOutputTimingSource === "object");
assert(typeof H264AdaptiveQuantization === "object");
assert(typeof H264ColorMetadata === "object");
assert(typeof H264EntropyEncoding === "object");
assert(typeof H264FlickerAq === "object");
assert(typeof H264ForceFieldPictures === "object");
assert(typeof H264FramerateControl === "object");
assert(typeof H264GopBReference === "object");
assert(typeof H264GopSizeUnits === "object");
assert(typeof H264Level === "object");
assert(typeof H264LookAheadRateControl === "object");
assert(typeof H264ParControl === "object");
assert(typeof H264Profile === "object");
assert(typeof H264QualityLevel === "object");
assert(typeof H264RateControlMode === "object");
assert(typeof H264ScanType === "object");
assert(typeof H264SceneChangeDetect === "object");
assert(typeof H264SpatialAq === "object");
assert(typeof H264SubGopLength === "object");
assert(typeof H264Syntax === "object");
assert(typeof H264TemporalAq === "object");
assert(typeof H264TimecodeInsertionBehavior === "object");
assert(typeof H265AdaptiveQuantization === "object");
assert(typeof H265AlternativeTransferFunction === "object");
assert(typeof H265ColorMetadata === "object");
assert(typeof H265Deblocking === "object");
assert(typeof H265FlickerAq === "object");
assert(typeof H265GopBReference === "object");
assert(typeof H265GopSizeUnits === "object");
assert(typeof H265Level === "object");
assert(typeof H265LookAheadRateControl === "object");
assert(typeof H265MvOverPictureBoundaries === "object");
assert(typeof H265MvTemporalPredictor === "object");
assert(typeof H265Profile === "object");
assert(typeof H265RateControlMode === "object");
assert(typeof H265ScanType === "object");
assert(typeof H265SceneChangeDetect === "object");
assert(typeof H265SubGopLength === "object");
assert(typeof H265Tier === "object");
assert(typeof H265TilePadding === "object");
assert(typeof H265TimecodeInsertionBehavior === "object");
assert(typeof H265TreeblockSize === "object");
assert(typeof HlsAdMarkers === "object");
assert(typeof HlsAkamaiHttpTransferMode === "object");
assert(typeof HlsAutoSelect === "object");
assert(typeof HlsCaptionLanguageSetting === "object");
assert(typeof HlsClientCache === "object");
assert(typeof HlsCodecSpecification === "object");
assert(typeof HlsDefault === "object");
assert(typeof HlsDirectoryStructure === "object");
assert(typeof HlsDiscontinuityTags === "object");
assert(typeof HlsEncryptionType === "object");
assert(typeof HlsH265PackagingType === "object");
assert(typeof HlsId3SegmentTaggingState === "object");
assert(typeof HlsIncompleteSegmentBehavior === "object");
assert(typeof HlsIvInManifest === "object");
assert(typeof HlsIvSource === "object");
assert(typeof HlsManifestCompression === "object");
assert(typeof HlsManifestDurationFormat === "object");
assert(typeof HlsMediaStoreStorageClass === "object");
assert(typeof HlsMode === "object");
assert(typeof HlsOutputSelection === "object");
assert(typeof HlsProgramDateTime === "object");
assert(typeof HlsProgramDateTimeClock === "object");
assert(typeof HlsRedundantManifest === "object");
assert(typeof HlsScte35SourceType === "object");
assert(typeof HlsSegmentationMode === "object");
assert(typeof HlsStreamInfResolution === "object");
assert(typeof HlsTimedMetadataId3Frame === "object");
assert(typeof HlsTsFileMode === "object");
assert(typeof HlsWebdavHttpTransferMode === "object");
assert(typeof IFrameOnlyPlaylistType === "object");
assert(typeof IncludeFillerNalUnits === "object");
assert(typeof InputClass === "object");
assert(typeof InputCodec === "object");
assert(typeof InputDeblockFilter === "object");
assert(typeof InputDenoiseFilter === "object");
assert(typeof InputDeviceActiveInput === "object");
assert(typeof InputDeviceCodec === "object");
assert(typeof InputDeviceConfigurableAudioChannelPairProfile === "object");
assert(typeof InputDeviceConfiguredInput === "object");
assert(typeof InputDeviceConnectionState === "object");
assert(typeof InputDeviceIpScheme === "object");
assert(typeof InputDeviceOutputType === "object");
assert(typeof InputDeviceScanType === "object");
assert(typeof InputDeviceState === "object");
assert(typeof InputDeviceTransferType === "object");
assert(typeof InputDeviceType === "object");
assert(typeof InputDeviceUhdAudioChannelPairProfile === "object");
assert(typeof InputFilter === "object");
assert(typeof InputLossActionForHlsOut === "object");
assert(typeof InputLossActionForMsSmoothOut === "object");
assert(typeof InputLossActionForRtmpOut === "object");
assert(typeof InputLossActionForUdpOut === "object");
assert(typeof InputLossImageType === "object");
assert(typeof InputMaximumBitrate === "object");
assert(typeof InputNetworkLocation === "object");
assert(typeof InputPreference === "object");
assert(typeof InputResolution === "object");
assert(typeof InputSecurityGroupState === "object");
assert(typeof InputSourceEndBehavior === "object");
assert(typeof InputSourceType === "object");
assert(typeof InputState === "object");
assert(typeof InputTimecodeSource === "object");
assert(typeof InputType === "object");
assert(typeof LastFrameClippingBehavior === "object");
assert(typeof LogLevel === "object");
assert(typeof M2tsAbsentInputAudioBehavior === "object");
assert(typeof M2tsArib === "object");
assert(typeof M2tsAribCaptionsPidControl === "object");
assert(typeof M2tsAudioBufferModel === "object");
assert(typeof M2tsAudioInterval === "object");
assert(typeof M2tsAudioStreamType === "object");
assert(typeof M2tsBufferModel === "object");
assert(typeof M2tsCcDescriptor === "object");
assert(typeof M2tsEbifControl === "object");
assert(typeof M2tsEbpPlacement === "object");
assert(typeof M2tsEsRateInPes === "object");
assert(typeof M2tsKlv === "object");
assert(typeof M2tsNielsenId3Behavior === "object");
assert(typeof M2tsPcrControl === "object");
assert(typeof M2tsRateMode === "object");
assert(typeof M2tsScte35Control === "object");
assert(typeof M2tsSegmentationMarkers === "object");
assert(typeof M2tsSegmentationStyle === "object");
assert(typeof M2tsTimedMetadataBehavior === "object");
assert(typeof M3u8KlvBehavior === "object");
assert(typeof M3u8NielsenId3Behavior === "object");
assert(typeof M3u8PcrControl === "object");
assert(typeof M3u8Scte35Behavior === "object");
assert(typeof M3u8TimedMetadataBehavior === "object");
assert(typeof MaintenanceDay === "object");
assert(typeof MotionGraphicsInsertion === "object");
assert(typeof Mp2CodingMode === "object");
assert(typeof Mpeg2AdaptiveQuantization === "object");
assert(typeof Mpeg2ColorMetadata === "object");
assert(typeof Mpeg2ColorSpace === "object");
assert(typeof Mpeg2DisplayRatio === "object");
assert(typeof Mpeg2GopSizeUnits === "object");
assert(typeof Mpeg2ScanType === "object");
assert(typeof Mpeg2SubGopLength === "object");
assert(typeof Mpeg2TimecodeInsertionBehavior === "object");
assert(typeof MsSmoothH265PackagingType === "object");
assert(typeof MultiplexAlertState === "object");
assert(typeof MultiplexState === "object");
assert(typeof NetworkInputServerValidation === "object");
assert(typeof NetworkInterfaceMode === "object");
assert(typeof NetworkState === "object");
assert(typeof NielsenPcmToId3TaggingState === "object");
assert(typeof NielsenWatermarksCbetStepaside === "object");
assert(typeof NielsenWatermarksDistributionTypes === "object");
assert(typeof NielsenWatermarkTimezones === "object");
assert(typeof NodeConnectionState === "object");
assert(typeof NodeRole === "object");
assert(typeof NodeState === "object");
assert(typeof OfferingDurationUnits === "object");
assert(typeof OfferingType === "object");
assert(typeof PipelineId === "object");
assert(typeof PreferredChannelPipeline === "object");
assert(typeof RebootInputDeviceForce === "object");
assert(typeof ReservationAutomaticRenewal === "object");
assert(typeof ReservationCodec === "object");
assert(typeof ReservationMaximumBitrate === "object");
assert(typeof ReservationMaximumFramerate === "object");
assert(typeof ReservationResolution === "object");
assert(typeof ReservationResourceType === "object");
assert(typeof ReservationSpecialFeature === "object");
assert(typeof ReservationState === "object");
assert(typeof ReservationVideoQuality === "object");
assert(typeof RouterEncryptionType === "object");
assert(typeof RtmpAdMarkers === "object");
assert(typeof RtmpCacheFullBehavior === "object");
assert(typeof RtmpCaptionData === "object");
assert(typeof RtmpOutputCertificateMode === "object");
assert(typeof S3CannedAcl === "object");
assert(typeof Scte20Convert608To708 === "object");
assert(typeof Scte27OcrLanguage === "object");
assert(typeof Scte35AposNoRegionalBlackoutBehavior === "object");
assert(typeof Scte35AposWebDeliveryAllowedBehavior === "object");
assert(typeof Scte35ArchiveAllowedFlag === "object");
assert(typeof Scte35DeviceRestrictions === "object");
assert(typeof Scte35InputMode === "object");
assert(typeof Scte35NoRegionalBlackoutFlag === "object");
assert(typeof Scte35SegmentationCancelIndicator === "object");
assert(typeof Scte35SegmentationScope === "object");
assert(typeof Scte35SpliceInsertNoRegionalBlackoutBehavior === "object");
assert(typeof Scte35SpliceInsertWebDeliveryAllowedBehavior === "object");
assert(typeof Scte35Type === "object");
assert(typeof Scte35WebDeliveryAllowedFlag === "object");
assert(typeof SdiSourceMode === "object");
assert(typeof SdiSourceState === "object");
assert(typeof SdiSourceType === "object");
assert(typeof SignalMapMonitorDeploymentStatus === "object");
assert(typeof SignalMapStatus === "object");
assert(typeof SmoothGroupAudioOnlyTimecodeControl === "object");
assert(typeof SmoothGroupCertificateMode === "object");
assert(typeof SmoothGroupEventIdMode === "object");
assert(typeof SmoothGroupEventStopBehavior === "object");
assert(typeof SmoothGroupSegmentationMode === "object");
assert(typeof SmoothGroupSparseTrackType === "object");
assert(typeof SmoothGroupStreamManifestBehavior === "object");
assert(typeof SmoothGroupTimestampOffsetMode === "object");
assert(typeof Smpte2038DataPreference === "object");
assert(typeof SrtEncryptionType === "object");
assert(typeof TemporalFilterPostFilterSharpening === "object");
assert(typeof TemporalFilterStrength === "object");
assert(typeof ThumbnailState === "object");
assert(typeof ThumbnailType === "object");
assert(typeof TimecodeBurninFontSize === "object");
assert(typeof TimecodeBurninPosition === "object");
assert(typeof TimecodeConfigSource === "object");
assert(typeof TtmlDestinationStyleControl === "object");
assert(typeof UdpTimedMetadataId3Frame === "object");
assert(typeof UpdateNodeStateShape === "object");
assert(typeof VideoDescriptionRespondToAfd === "object");
assert(typeof VideoDescriptionScalingBehavior === "object");
assert(typeof VideoSelectorColorSpace === "object");
assert(typeof VideoSelectorColorSpaceUsage === "object");
assert(typeof WavCodingMode === "object");
assert(typeof WebvttDestinationStyleControl === "object");
// errors
assert(BadGatewayException.prototype instanceof MediaLiveServiceException);
assert(BadRequestException.prototype instanceof MediaLiveServiceException);
assert(ConflictException.prototype instanceof MediaLiveServiceException);
assert(ForbiddenException.prototype instanceof MediaLiveServiceException);
assert(GatewayTimeoutException.prototype instanceof MediaLiveServiceException);
assert(InternalServerErrorException.prototype instanceof MediaLiveServiceException);
assert(NotFoundException.prototype instanceof MediaLiveServiceException);
assert(TooManyRequestsException.prototype instanceof MediaLiveServiceException);
assert(UnprocessableEntityException.prototype instanceof MediaLiveServiceException);
assert(MediaLiveServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForChannelCreated === "function");
assert(typeof waitForChannelDeleted === "function");
assert(typeof waitForChannelPlacementGroupAssigned === "function");
assert(typeof waitForChannelPlacementGroupDeleted === "function");
assert(typeof waitForChannelPlacementGroupUnassigned === "function");
assert(typeof waitForChannelRunning === "function");
assert(typeof waitForChannelStopped === "function");
assert(typeof waitForClusterCreated === "function");
assert(typeof waitForClusterDeleted === "function");
assert(typeof waitForInputAttached === "function");
assert(typeof waitForInputDeleted === "function");
assert(typeof waitForInputDetached === "function");
assert(typeof waitForMultiplexCreated === "function");
assert(typeof waitForMultiplexDeleted === "function");
assert(typeof waitForMultiplexRunning === "function");
assert(typeof waitForMultiplexStopped === "function");
assert(typeof waitForNodeDeregistered === "function");
assert(typeof waitForNodeRegistered === "function");
assert(typeof waitForSignalMapCreated === "function");
assert(typeof waitForSignalMapMonitorDeleted === "function");
assert(typeof waitForSignalMapMonitorDeployed === "function");
assert(typeof waitForSignalMapUpdated === "function");
assert(typeof waitUntilChannelCreated === "function");
assert(typeof waitUntilChannelDeleted === "function");
assert(typeof waitUntilChannelPlacementGroupAssigned === "function");
assert(typeof waitUntilChannelPlacementGroupDeleted === "function");
assert(typeof waitUntilChannelPlacementGroupUnassigned === "function");
assert(typeof waitUntilChannelRunning === "function");
assert(typeof waitUntilChannelStopped === "function");
assert(typeof waitUntilClusterCreated === "function");
assert(typeof waitUntilClusterDeleted === "function");
assert(typeof waitUntilInputAttached === "function");
assert(typeof waitUntilInputDeleted === "function");
assert(typeof waitUntilInputDetached === "function");
assert(typeof waitUntilMultiplexCreated === "function");
assert(typeof waitUntilMultiplexDeleted === "function");
assert(typeof waitUntilMultiplexRunning === "function");
assert(typeof waitUntilMultiplexStopped === "function");
assert(typeof waitUntilNodeDeregistered === "function");
assert(typeof waitUntilNodeRegistered === "function");
assert(typeof waitUntilSignalMapCreated === "function");
assert(typeof waitUntilSignalMapMonitorDeleted === "function");
assert(typeof waitUntilSignalMapMonitorDeployed === "function");
assert(typeof waitUntilSignalMapUpdated === "function");
// paginators
assert(typeof paginateDescribeSchedule === "function");
assert(typeof paginateListAlerts === "function");
assert(typeof paginateListChannelPlacementGroups === "function");
assert(typeof paginateListChannels === "function");
assert(typeof paginateListCloudWatchAlarmTemplateGroups === "function");
assert(typeof paginateListCloudWatchAlarmTemplates === "function");
assert(typeof paginateListClusterAlerts === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListEventBridgeRuleTemplateGroups === "function");
assert(typeof paginateListEventBridgeRuleTemplates === "function");
assert(typeof paginateListInputDeviceTransfers === "function");
assert(typeof paginateListInputDevices === "function");
assert(typeof paginateListInputSecurityGroups === "function");
assert(typeof paginateListInputs === "function");
assert(typeof paginateListMultiplexAlerts === "function");
assert(typeof paginateListMultiplexPrograms === "function");
assert(typeof paginateListMultiplexes === "function");
assert(typeof paginateListNetworks === "function");
assert(typeof paginateListNodes === "function");
assert(typeof paginateListOfferings === "function");
assert(typeof paginateListReservations === "function");
assert(typeof paginateListSdiSources === "function");
assert(typeof paginateListSignalMaps === "function");
console.log(`MediaLive index test passed.`);
