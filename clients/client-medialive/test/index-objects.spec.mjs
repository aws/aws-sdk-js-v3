import {
  AacCodingMode,
  AacInputType,
  AacProfile,
  AacRateControlMode,
  AacRawFormat,
  AacSettings$,
  AacSpec,
  AacVbrQuality,
  Ac3AttenuationControl,
  Ac3BitstreamMode,
  Ac3CodingMode,
  Ac3DrcProfile,
  Ac3LfeFilter,
  Ac3MetadataControl,
  Ac3Settings$,
  AcceptHeader,
  AcceptInputDeviceTransfer$,
  AcceptInputDeviceTransferCommand,
  AcceptInputDeviceTransferRequest$,
  AcceptInputDeviceTransferResponse$,
  AccessibilityType,
  AccountConfiguration$,
  AdditionalDestinations$,
  AfdSignaling,
  Algorithm,
  AncillarySourceSettings$,
  AnywhereSettings$,
  ArchiveCdnSettings$,
  ArchiveContainerSettings$,
  ArchiveGroupSettings$,
  ArchiveOutputSettings$,
  ArchiveS3Settings$,
  AribDestinationSettings$,
  AribSourceSettings$,
  AudioChannelMapping$,
  AudioCodecSettings$,
  AudioDescription$,
  AudioDescriptionAudioTypeControl,
  AudioDescriptionLanguageCodeControl,
  AudioDolbyEDecode$,
  AudioHlsRenditionSelection$,
  AudioLanguageSelection$,
  AudioLanguageSelectionPolicy,
  AudioNormalizationAlgorithm,
  AudioNormalizationAlgorithmControl,
  AudioNormalizationSettings$,
  AudioOnlyHlsSegmentType,
  AudioOnlyHlsSettings$,
  AudioOnlyHlsTrackType,
  AudioPidSelection$,
  AudioSelector$,
  AudioSelectorSettings$,
  AudioSilenceFailoverSettings$,
  AudioTrack$,
  AudioTrackSelection$,
  AudioType,
  AudioWatermarkSettings$,
  AuthenticationScheme,
  AutomaticInputFailoverSettings$,
  Av1ColorSpaceSettings$,
  Av1GopSizeUnits,
  Av1Level,
  Av1LookAheadRateControl,
  Av1RateControlMode,
  Av1SceneChangeDetect,
  Av1Settings$,
  Av1SpatialAq,
  Av1TemporalAq,
  AvailBlanking$,
  AvailBlankingState,
  AvailConfiguration$,
  AvailSettings$,
  BadGatewayException,
  BadGatewayException$,
  BadRequestException,
  BadRequestException$,
  BandwidthReductionFilterSettings$,
  BandwidthReductionFilterStrength,
  BandwidthReductionPostFilterSharpening,
  BatchDelete$,
  BatchDeleteCommand,
  BatchDeleteRequest$,
  BatchDeleteResponse$,
  BatchFailedResultModel$,
  BatchScheduleActionCreateRequest$,
  BatchScheduleActionCreateResult$,
  BatchScheduleActionDeleteRequest$,
  BatchScheduleActionDeleteResult$,
  BatchStart$,
  BatchStartCommand,
  BatchStartRequest$,
  BatchStartResponse$,
  BatchStop$,
  BatchStopCommand,
  BatchStopRequest$,
  BatchStopResponse$,
  BatchSuccessfulResultModel$,
  BatchUpdateSchedule$,
  BatchUpdateScheduleCommand,
  BatchUpdateScheduleRequest$,
  BatchUpdateScheduleResponse$,
  BlackoutSlate$,
  BlackoutSlateNetworkEndBlackout,
  BlackoutSlateState,
  BurnInAlignment,
  BurnInBackgroundColor,
  BurnInDestinationSettings$,
  BurnInDestinationSubtitleRows,
  BurnInFontColor,
  BurnInOutlineColor,
  BurnInShadowColor,
  BurnInTeletextGridControl,
  CancelInputDeviceTransfer$,
  CancelInputDeviceTransferCommand,
  CancelInputDeviceTransferRequest$,
  CancelInputDeviceTransferResponse$,
  CaptionDescription$,
  CaptionDestinationSettings$,
  CaptionLanguageMapping$,
  CaptionRectangle$,
  CaptionSelector$,
  CaptionSelectorSettings$,
  CdiInputResolution,
  CdiInputSpecification$,
  Channel$,
  ChannelAlert$,
  ChannelAlertState,
  ChannelClass,
  ChannelEgressEndpoint$,
  ChannelEngineVersionRequest$,
  ChannelEngineVersionResponse$,
  ChannelPipelineIdToRestart,
  ChannelPlacementGroupState,
  ChannelState,
  ChannelSummary$,
  ClaimDevice$,
  ClaimDeviceCommand,
  ClaimDeviceRequest$,
  ClaimDeviceResponse$,
  CloudWatchAlarmTemplateComparisonOperator,
  CloudWatchAlarmTemplateGroupSummary$,
  CloudWatchAlarmTemplateStatistic,
  CloudWatchAlarmTemplateSummary$,
  CloudWatchAlarmTemplateTargetResourceType,
  CloudWatchAlarmTemplateTreatMissingData,
  ClusterAlert$,
  ClusterAlertState,
  ClusterNetworkSettings$,
  ClusterNetworkSettingsCreateRequest$,
  ClusterNetworkSettingsUpdateRequest$,
  ClusterState,
  ClusterType,
  CmafId3Behavior,
  CmafIngestCaptionLanguageMapping$,
  CmafIngestGroupSettings$,
  CmafIngestOutputSettings$,
  CmafIngestSegmentLengthUnits,
  CmafKLVBehavior,
  CmafNielsenId3Behavior,
  CmafTimedMetadataId3Frame,
  CmafTimedMetadataPassthrough,
  ColorCorrection$,
  ColorCorrectionSettings$,
  ColorSpace,
  ColorSpacePassthroughSettings$,
  ConflictException,
  ConflictException$,
  ContentType,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelPlacementGroup$,
  CreateChannelPlacementGroupCommand,
  CreateChannelPlacementGroupRequest$,
  CreateChannelPlacementGroupResponse$,
  CreateChannelRequest$,
  CreateChannelResponse$,
  CreateCloudWatchAlarmTemplate$,
  CreateCloudWatchAlarmTemplateCommand,
  CreateCloudWatchAlarmTemplateGroup$,
  CreateCloudWatchAlarmTemplateGroupCommand,
  CreateCloudWatchAlarmTemplateGroupRequest$,
  CreateCloudWatchAlarmTemplateGroupResponse$,
  CreateCloudWatchAlarmTemplateRequest$,
  CreateCloudWatchAlarmTemplateResponse$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateEventBridgeRuleTemplate$,
  CreateEventBridgeRuleTemplateCommand,
  CreateEventBridgeRuleTemplateGroup$,
  CreateEventBridgeRuleTemplateGroupCommand,
  CreateEventBridgeRuleTemplateGroupRequest$,
  CreateEventBridgeRuleTemplateGroupResponse$,
  CreateEventBridgeRuleTemplateRequest$,
  CreateEventBridgeRuleTemplateResponse$,
  CreateInput$,
  CreateInputCommand,
  CreateInputRequest$,
  CreateInputResponse$,
  CreateInputSecurityGroup$,
  CreateInputSecurityGroupCommand,
  CreateInputSecurityGroupRequest$,
  CreateInputSecurityGroupResponse$,
  CreateMultiplex$,
  CreateMultiplexCommand,
  CreateMultiplexProgram$,
  CreateMultiplexProgramCommand,
  CreateMultiplexProgramRequest$,
  CreateMultiplexProgramResponse$,
  CreateMultiplexRequest$,
  CreateMultiplexResponse$,
  CreateNetwork$,
  CreateNetworkCommand,
  CreateNetworkRequest$,
  CreateNetworkResponse$,
  CreateNode$,
  CreateNodeCommand,
  CreateNodeRegistrationScript$,
  CreateNodeRegistrationScriptCommand,
  CreateNodeRegistrationScriptRequest$,
  CreateNodeRegistrationScriptResponse$,
  CreateNodeRequest$,
  CreateNodeResponse$,
  CreatePartnerInput$,
  CreatePartnerInputCommand,
  CreatePartnerInputRequest$,
  CreatePartnerInputResponse$,
  CreateSdiSource$,
  CreateSdiSourceCommand,
  CreateSdiSourceRequest$,
  CreateSdiSourceResponse$,
  CreateSignalMap$,
  CreateSignalMapCommand,
  CreateSignalMapRequest$,
  CreateSignalMapResponse$,
  CreateTags$,
  CreateTagsCommand,
  CreateTagsRequest$,
  DashRoleAudio,
  DashRoleCaption,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelPlacementGroup$,
  DeleteChannelPlacementGroupCommand,
  DeleteChannelPlacementGroupRequest$,
  DeleteChannelPlacementGroupResponse$,
  DeleteChannelRequest$,
  DeleteChannelResponse$,
  DeleteCloudWatchAlarmTemplate$,
  DeleteCloudWatchAlarmTemplateCommand,
  DeleteCloudWatchAlarmTemplateGroup$,
  DeleteCloudWatchAlarmTemplateGroupCommand,
  DeleteCloudWatchAlarmTemplateGroupRequest$,
  DeleteCloudWatchAlarmTemplateRequest$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteEventBridgeRuleTemplate$,
  DeleteEventBridgeRuleTemplateCommand,
  DeleteEventBridgeRuleTemplateGroup$,
  DeleteEventBridgeRuleTemplateGroupCommand,
  DeleteEventBridgeRuleTemplateGroupRequest$,
  DeleteEventBridgeRuleTemplateRequest$,
  DeleteInput$,
  DeleteInputCommand,
  DeleteInputRequest$,
  DeleteInputResponse$,
  DeleteInputSecurityGroup$,
  DeleteInputSecurityGroupCommand,
  DeleteInputSecurityGroupRequest$,
  DeleteInputSecurityGroupResponse$,
  DeleteMultiplex$,
  DeleteMultiplexCommand,
  DeleteMultiplexProgram$,
  DeleteMultiplexProgramCommand,
  DeleteMultiplexProgramRequest$,
  DeleteMultiplexProgramResponse$,
  DeleteMultiplexRequest$,
  DeleteMultiplexResponse$,
  DeleteNetwork$,
  DeleteNetworkCommand,
  DeleteNetworkRequest$,
  DeleteNetworkResponse$,
  DeleteNode$,
  DeleteNodeCommand,
  DeleteNodeRequest$,
  DeleteNodeResponse$,
  DeleteReservation$,
  DeleteReservationCommand,
  DeleteReservationRequest$,
  DeleteReservationResponse$,
  DeleteSchedule$,
  DeleteScheduleCommand,
  DeleteScheduleRequest$,
  DeleteScheduleResponse$,
  DeleteSdiSource$,
  DeleteSdiSourceCommand,
  DeleteSdiSourceRequest$,
  DeleteSdiSourceResponse$,
  DeleteSignalMap$,
  DeleteSignalMapCommand,
  DeleteSignalMapRequest$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsRequest$,
  DescribeAccountConfiguration$,
  DescribeAccountConfigurationCommand,
  DescribeAccountConfigurationRequest$,
  DescribeAccountConfigurationResponse$,
  DescribeAnywhereSettings$,
  DescribeChannel$,
  DescribeChannelCommand,
  DescribeChannelPlacementGroup$,
  DescribeChannelPlacementGroupCommand,
  DescribeChannelPlacementGroupRequest$,
  DescribeChannelPlacementGroupResponse$,
  DescribeChannelPlacementGroupSummary$,
  DescribeChannelRequest$,
  DescribeChannelResponse$,
  DescribeCluster$,
  DescribeClusterCommand,
  DescribeClusterRequest$,
  DescribeClusterResponse$,
  DescribeClusterSummary$,
  DescribeInput$,
  DescribeInputCommand,
  DescribeInputDevice$,
  DescribeInputDeviceCommand,
  DescribeInputDeviceRequest$,
  DescribeInputDeviceResponse$,
  DescribeInputDeviceThumbnail$,
  DescribeInputDeviceThumbnailCommand,
  DescribeInputDeviceThumbnailRequest$,
  DescribeInputDeviceThumbnailResponse$,
  DescribeInputRequest$,
  DescribeInputResponse$,
  DescribeInputSecurityGroup$,
  DescribeInputSecurityGroupCommand,
  DescribeInputSecurityGroupRequest$,
  DescribeInputSecurityGroupResponse$,
  DescribeMultiplex$,
  DescribeMultiplexCommand,
  DescribeMultiplexProgram$,
  DescribeMultiplexProgramCommand,
  DescribeMultiplexProgramRequest$,
  DescribeMultiplexProgramResponse$,
  DescribeMultiplexRequest$,
  DescribeMultiplexResponse$,
  DescribeNetwork$,
  DescribeNetworkCommand,
  DescribeNetworkRequest$,
  DescribeNetworkResponse$,
  DescribeNetworkSummary$,
  DescribeNode$,
  DescribeNodeCommand,
  DescribeNodeRequest$,
  DescribeNodeResponse$,
  DescribeNodeSummary$,
  DescribeOffering$,
  DescribeOfferingCommand,
  DescribeOfferingRequest$,
  DescribeOfferingResponse$,
  DescribeReservation$,
  DescribeReservationCommand,
  DescribeReservationRequest$,
  DescribeReservationResponse$,
  DescribeSchedule$,
  DescribeScheduleCommand,
  DescribeScheduleRequest$,
  DescribeScheduleResponse$,
  DescribeSdiSource$,
  DescribeSdiSourceCommand,
  DescribeSdiSourceRequest$,
  DescribeSdiSourceResponse$,
  DescribeThumbnails$,
  DescribeThumbnailsCommand,
  DescribeThumbnailsRequest$,
  DescribeThumbnailsResponse$,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  DolbyEProgramSelection,
  DolbyVision81Settings$,
  DvbDashAccessibility,
  DvbNitSettings$,
  DvbSdtOutputSdt,
  DvbSdtSettings$,
  DvbSubDestinationAlignment,
  DvbSubDestinationBackgroundColor,
  DvbSubDestinationFontColor,
  DvbSubDestinationOutlineColor,
  DvbSubDestinationSettings$,
  DvbSubDestinationShadowColor,
  DvbSubDestinationSubtitleRows,
  DvbSubDestinationTeletextGridControl,
  DvbSubOcrLanguage,
  DvbSubSourceSettings$,
  DvbTdtSettings$,
  Eac3AtmosCodingMode,
  Eac3AtmosDrcLine,
  Eac3AtmosDrcRf,
  Eac3AtmosSettings$,
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
  Eac3Settings$,
  Eac3StereoDownmix,
  Eac3SurroundExMode,
  Eac3SurroundMode,
  EbuTtDDestinationSettings$,
  EbuTtDDestinationStyleControl,
  EbuTtDFillLineGapControl,
  EmbeddedConvert608To708,
  EmbeddedDestinationSettings$,
  EmbeddedPlusScte20DestinationSettings$,
  EmbeddedScte20Detection,
  EmbeddedSourceSettings$,
  EncoderSettings$,
  EpochLockingSettings$,
  Esam$,
  EventBridgeRuleTemplateEventType,
  EventBridgeRuleTemplateGroupSummary$,
  EventBridgeRuleTemplateSummary$,
  EventBridgeRuleTemplateTarget$,
  FailoverCondition$,
  FailoverConditionSettings$,
  FeatureActivations$,
  FeatureActivationsInputPrepareScheduleActions,
  FeatureActivationsOutputStaticImageOverlayScheduleActions,
  FecOutputIncludeFec,
  FecOutputSettings$,
  FixedAfd,
  FixedModeScheduleActionStartSettings$,
  Fmp4HlsSettings$,
  Fmp4NielsenId3Behavior,
  Fmp4TimedMetadataBehavior,
  FollowModeScheduleActionStartSettings$,
  FollowPoint,
  ForbiddenException,
  ForbiddenException$,
  FrameCaptureCdnSettings$,
  FrameCaptureGroupSettings$,
  FrameCaptureHlsSettings$,
  FrameCaptureIntervalUnit,
  FrameCaptureOutputSettings$,
  FrameCaptureS3Settings$,
  FrameCaptureSettings$,
  GatewayTimeoutException,
  GatewayTimeoutException$,
  GetCloudWatchAlarmTemplate$,
  GetCloudWatchAlarmTemplateCommand,
  GetCloudWatchAlarmTemplateGroup$,
  GetCloudWatchAlarmTemplateGroupCommand,
  GetCloudWatchAlarmTemplateGroupRequest$,
  GetCloudWatchAlarmTemplateGroupResponse$,
  GetCloudWatchAlarmTemplateRequest$,
  GetCloudWatchAlarmTemplateResponse$,
  GetEventBridgeRuleTemplate$,
  GetEventBridgeRuleTemplateCommand,
  GetEventBridgeRuleTemplateGroup$,
  GetEventBridgeRuleTemplateGroupCommand,
  GetEventBridgeRuleTemplateGroupRequest$,
  GetEventBridgeRuleTemplateGroupResponse$,
  GetEventBridgeRuleTemplateRequest$,
  GetEventBridgeRuleTemplateResponse$,
  GetSignalMap$,
  GetSignalMapCommand,
  GetSignalMapRequest$,
  GetSignalMapResponse$,
  GlobalConfiguration$,
  GlobalConfigurationInputEndAction,
  GlobalConfigurationLowFramerateInputs,
  GlobalConfigurationOutputLockingMode,
  GlobalConfigurationOutputTimingSource,
  H264AdaptiveQuantization,
  H264ColorMetadata,
  H264ColorSpaceSettings$,
  H264EntropyEncoding,
  H264FilterSettings$,
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
  H264Settings$,
  H264SpatialAq,
  H264SubGopLength,
  H264Syntax,
  H264TemporalAq,
  H264TimecodeInsertionBehavior,
  H265AdaptiveQuantization,
  H265AlternativeTransferFunction,
  H265ColorMetadata,
  H265ColorSpaceSettings$,
  H265Deblocking,
  H265FilterSettings$,
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
  H265Settings$,
  H265SubGopLength,
  H265Tier,
  H265TilePadding,
  H265TimecodeInsertionBehavior,
  H265TreeblockSize,
  Hdr10Settings$,
  Hlg2020Settings$,
  HlsAdMarkers,
  HlsAkamaiHttpTransferMode,
  HlsAkamaiSettings$,
  HlsAutoSelect,
  HlsBasicPutSettings$,
  HlsCaptionLanguageSetting,
  HlsCdnSettings$,
  HlsClientCache,
  HlsCodecSpecification,
  HlsDefault,
  HlsDirectoryStructure,
  HlsDiscontinuityTags,
  HlsEncryptionType,
  HlsGroupSettings$,
  HlsH265PackagingType,
  HlsId3SegmentTaggingScheduleActionSettings$,
  HlsId3SegmentTaggingState,
  HlsIncompleteSegmentBehavior,
  HlsInputSettings$,
  HlsIvInManifest,
  HlsIvSource,
  HlsManifestCompression,
  HlsManifestDurationFormat,
  HlsMediaStoreSettings$,
  HlsMediaStoreStorageClass,
  HlsMode,
  HlsOutputSelection,
  HlsOutputSettings$,
  HlsProgramDateTime,
  HlsProgramDateTimeClock,
  HlsRedundantManifest,
  HlsS3Settings$,
  HlsScte35SourceType,
  HlsSegmentationMode,
  HlsSettings$,
  HlsStreamInfResolution,
  HlsTimedMetadataId3Frame,
  HlsTimedMetadataScheduleActionSettings$,
  HlsTsFileMode,
  HlsWebdavHttpTransferMode,
  HlsWebdavSettings$,
  HtmlMotionGraphicsSettings$,
  IFrameOnlyPlaylistType,
  Id3SegmentTaggingScheduleActionSettings$,
  ImmediateModeScheduleActionStartSettings$,
  IncludeFillerNalUnits,
  Input$,
  InputAttachment$,
  InputChannelLevel$,
  InputClass,
  InputClippingSettings$,
  InputCodec,
  InputDeblockFilter,
  InputDenoiseFilter,
  InputDestination$,
  InputDestinationRequest$,
  InputDestinationRoute$,
  InputDestinationVpc$,
  InputDeviceActiveInput,
  InputDeviceCodec,
  InputDeviceConfigurableAudioChannelPairConfig$,
  InputDeviceConfigurableAudioChannelPairProfile,
  InputDeviceConfigurableSettings$,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceHdSettings$,
  InputDeviceIpScheme,
  InputDeviceMediaConnectConfigurableSettings$,
  InputDeviceMediaConnectSettings$,
  InputDeviceNetworkSettings$,
  InputDeviceOutputType,
  InputDeviceRequest$,
  InputDeviceScanType,
  InputDeviceSettings$,
  InputDeviceState,
  InputDeviceSummary$,
  InputDeviceTransferType,
  InputDeviceType,
  InputDeviceUhdAudioChannelPairConfig$,
  InputDeviceUhdAudioChannelPairProfile,
  InputDeviceUhdSettings$,
  InputFilter,
  InputLocation$,
  InputLossActionForHlsOut,
  InputLossActionForMsSmoothOut,
  InputLossActionForRtmpOut,
  InputLossActionForUdpOut,
  InputLossBehavior$,
  InputLossFailoverSettings$,
  InputLossImageType,
  InputMaximumBitrate,
  InputNetworkLocation,
  InputPreference,
  InputPrepareScheduleActionSettings$,
  InputRequestDestinationRoute$,
  InputResolution,
  InputSdpLocation$,
  InputSecurityGroup$,
  InputSecurityGroupState,
  InputSettings$,
  InputSource$,
  InputSourceEndBehavior,
  InputSourceRequest$,
  InputSourceType,
  InputSpecification$,
  InputState,
  InputSwitchScheduleActionSettings$,
  InputTimecodeSource,
  InputType,
  InputVpcRequest$,
  InputWhitelistRule$,
  InputWhitelistRuleCidr$,
  InterfaceMapping$,
  InterfaceMappingCreateRequest$,
  InterfaceMappingUpdateRequest$,
  InternalServerErrorException,
  InternalServerErrorException$,
  IpPool$,
  IpPoolCreateRequest$,
  IpPoolUpdateRequest$,
  KeyProviderSettings$,
  LastFrameClippingBehavior,
  ListAlerts$,
  ListAlertsCommand,
  ListAlertsRequest$,
  ListAlertsResponse$,
  ListChannelPlacementGroups$,
  ListChannelPlacementGroupsCommand,
  ListChannelPlacementGroupsRequest$,
  ListChannelPlacementGroupsResponse$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListCloudWatchAlarmTemplateGroups$,
  ListCloudWatchAlarmTemplateGroupsCommand,
  ListCloudWatchAlarmTemplateGroupsRequest$,
  ListCloudWatchAlarmTemplateGroupsResponse$,
  ListCloudWatchAlarmTemplates$,
  ListCloudWatchAlarmTemplatesCommand,
  ListCloudWatchAlarmTemplatesRequest$,
  ListCloudWatchAlarmTemplatesResponse$,
  ListClusterAlerts$,
  ListClusterAlertsCommand,
  ListClusterAlertsRequest$,
  ListClusterAlertsResponse$,
  ListClusters$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResponse$,
  ListEventBridgeRuleTemplateGroups$,
  ListEventBridgeRuleTemplateGroupsCommand,
  ListEventBridgeRuleTemplateGroupsRequest$,
  ListEventBridgeRuleTemplateGroupsResponse$,
  ListEventBridgeRuleTemplates$,
  ListEventBridgeRuleTemplatesCommand,
  ListEventBridgeRuleTemplatesRequest$,
  ListEventBridgeRuleTemplatesResponse$,
  ListInputDeviceTransfers$,
  ListInputDeviceTransfersCommand,
  ListInputDeviceTransfersRequest$,
  ListInputDeviceTransfersResponse$,
  ListInputDevices$,
  ListInputDevicesCommand,
  ListInputDevicesRequest$,
  ListInputDevicesResponse$,
  ListInputSecurityGroups$,
  ListInputSecurityGroupsCommand,
  ListInputSecurityGroupsRequest$,
  ListInputSecurityGroupsResponse$,
  ListInputs$,
  ListInputsCommand,
  ListInputsRequest$,
  ListInputsResponse$,
  ListMultiplexAlerts$,
  ListMultiplexAlertsCommand,
  ListMultiplexAlertsRequest$,
  ListMultiplexAlertsResponse$,
  ListMultiplexPrograms$,
  ListMultiplexProgramsCommand,
  ListMultiplexProgramsRequest$,
  ListMultiplexProgramsResponse$,
  ListMultiplexes$,
  ListMultiplexesCommand,
  ListMultiplexesRequest$,
  ListMultiplexesResponse$,
  ListNetworks$,
  ListNetworksCommand,
  ListNetworksRequest$,
  ListNetworksResponse$,
  ListNodes$,
  ListNodesCommand,
  ListNodesRequest$,
  ListNodesResponse$,
  ListOfferings$,
  ListOfferingsCommand,
  ListOfferingsRequest$,
  ListOfferingsResponse$,
  ListReservations$,
  ListReservationsCommand,
  ListReservationsRequest$,
  ListReservationsResponse$,
  ListSdiSources$,
  ListSdiSourcesCommand,
  ListSdiSourcesRequest$,
  ListSdiSourcesResponse$,
  ListSignalMaps$,
  ListSignalMapsCommand,
  ListSignalMapsRequest$,
  ListSignalMapsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVersions$,
  ListVersionsCommand,
  ListVersionsRequest$,
  ListVersionsResponse$,
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
  M2tsSettings$,
  M2tsTimedMetadataBehavior,
  M3u8KlvBehavior,
  M3u8NielsenId3Behavior,
  M3u8PcrControl,
  M3u8Scte35Behavior,
  M3u8Settings$,
  M3u8TimedMetadataBehavior,
  MaintenanceCreateSettings$,
  MaintenanceDay,
  MaintenanceStatus$,
  MaintenanceUpdateSettings$,
  MediaConnectFlow$,
  MediaConnectFlowRequest$,
  MediaLive,
  MediaLiveClient,
  MediaLiveServiceException,
  MediaPackageGroupSettings$,
  MediaPackageOutputDestinationSettings$,
  MediaPackageOutputSettings$,
  MediaPackageV2DestinationSettings$,
  MediaPackageV2GroupSettings$,
  MediaResource$,
  MediaResourceNeighbor$,
  MonitorDeployment$,
  MotionGraphicsActivateScheduleActionSettings$,
  MotionGraphicsConfiguration$,
  MotionGraphicsDeactivateScheduleActionSettings$,
  MotionGraphicsInsertion,
  MotionGraphicsSettings$,
  Mp2CodingMode,
  Mp2Settings$,
  Mpeg2AdaptiveQuantization,
  Mpeg2ColorMetadata,
  Mpeg2ColorSpace,
  Mpeg2DisplayRatio,
  Mpeg2FilterSettings$,
  Mpeg2GopSizeUnits,
  Mpeg2ScanType,
  Mpeg2Settings$,
  Mpeg2SubGopLength,
  Mpeg2TimecodeInsertionBehavior,
  MsSmoothGroupSettings$,
  MsSmoothH265PackagingType,
  MsSmoothOutputSettings$,
  MulticastInputSettings$,
  MulticastSettings$,
  MulticastSettingsCreateRequest$,
  MulticastSettingsUpdateRequest$,
  MulticastSource$,
  MulticastSourceCreateRequest$,
  MulticastSourceUpdateRequest$,
  Multiplex$,
  MultiplexAlert$,
  MultiplexAlertState,
  MultiplexContainerSettings$,
  MultiplexGroupSettings$,
  MultiplexM2tsSettings$,
  MultiplexMediaConnectOutputDestinationSettings$,
  MultiplexOutputDestination$,
  MultiplexOutputSettings$,
  MultiplexProgram$,
  MultiplexProgramChannelDestinationSettings$,
  MultiplexProgramPacketIdentifiersMap$,
  MultiplexProgramPipelineDetail$,
  MultiplexProgramServiceDescriptor$,
  MultiplexProgramSettings$,
  MultiplexProgramSummary$,
  MultiplexSettings$,
  MultiplexSettingsSummary$,
  MultiplexState,
  MultiplexStatmuxVideoSettings$,
  MultiplexSummary$,
  MultiplexVideoSettings$,
  NetworkInputServerValidation,
  NetworkInputSettings$,
  NetworkInterfaceMode,
  NetworkState,
  NielsenCBET$,
  NielsenConfiguration$,
  NielsenNaesIiNw$,
  NielsenPcmToId3TaggingState,
  NielsenWatermarkTimezones,
  NielsenWatermarksCbetStepaside,
  NielsenWatermarksDistributionTypes,
  NielsenWatermarksSettings$,
  NodeConnectionState,
  NodeInterfaceMapping$,
  NodeInterfaceMappingCreateRequest$,
  NodeRole,
  NodeState,
  NotFoundException,
  NotFoundException$,
  Offering$,
  OfferingDurationUnits,
  OfferingType,
  Output$,
  OutputDestination$,
  OutputDestinationSettings$,
  OutputGroup$,
  OutputGroupSettings$,
  OutputLocationRef$,
  OutputLockingSettings$,
  OutputSettings$,
  PassThroughSettings$,
  PauseStateScheduleActionSettings$,
  PipelineDetail$,
  PipelineId,
  PipelineLockingSettings$,
  PipelinePauseStateSettings$,
  PreferredChannelPipeline,
  PurchaseOffering$,
  PurchaseOfferingCommand,
  PurchaseOfferingRequest$,
  PurchaseOfferingResponse$,
  RawSettings$,
  RebootInputDevice$,
  RebootInputDeviceCommand,
  RebootInputDeviceForce,
  RebootInputDeviceRequest$,
  RebootInputDeviceResponse$,
  Rec601Settings$,
  Rec709Settings$,
  RejectInputDeviceTransfer$,
  RejectInputDeviceTransferCommand,
  RejectInputDeviceTransferRequest$,
  RejectInputDeviceTransferResponse$,
  RemixSettings$,
  RenewalSettings$,
  Reservation$,
  ReservationAutomaticRenewal,
  ReservationCodec,
  ReservationMaximumBitrate,
  ReservationMaximumFramerate,
  ReservationResolution,
  ReservationResourceSpecification$,
  ReservationResourceType,
  ReservationSpecialFeature,
  ReservationState,
  ReservationVideoQuality,
  RestartChannelPipelines$,
  RestartChannelPipelinesCommand,
  RestartChannelPipelinesRequest$,
  RestartChannelPipelinesResponse$,
  Route$,
  RouteCreateRequest$,
  RouteUpdateRequest$,
  RouterDestination$,
  RouterDestinationSettings$,
  RouterEncryptionType,
  RouterInputSettings$,
  RouterSettings$,
  RtmpAdMarkers,
  RtmpCacheFullBehavior,
  RtmpCaptionData,
  RtmpCaptionInfoDestinationSettings$,
  RtmpGroupSettings$,
  RtmpOutputCertificateMode,
  RtmpOutputSettings$,
  S3CannedAcl,
  ScheduleAction$,
  ScheduleActionSettings$,
  ScheduleActionStartSettings$,
  Scte20Convert608To708,
  Scte20PlusEmbeddedDestinationSettings$,
  Scte20SourceSettings$,
  Scte27DestinationSettings$,
  Scte27OcrLanguage,
  Scte27SourceSettings$,
  Scte35AposNoRegionalBlackoutBehavior,
  Scte35AposWebDeliveryAllowedBehavior,
  Scte35ArchiveAllowedFlag,
  Scte35DeliveryRestrictions$,
  Scte35Descriptor$,
  Scte35DescriptorSettings$,
  Scte35DeviceRestrictions,
  Scte35InputMode,
  Scte35InputScheduleActionSettings$,
  Scte35NoRegionalBlackoutFlag,
  Scte35ReturnToNetworkScheduleActionSettings$,
  Scte35SegmentationCancelIndicator,
  Scte35SegmentationDescriptor$,
  Scte35SegmentationScope,
  Scte35SpliceInsert$,
  Scte35SpliceInsertNoRegionalBlackoutBehavior,
  Scte35SpliceInsertScheduleActionSettings$,
  Scte35SpliceInsertWebDeliveryAllowedBehavior,
  Scte35TimeSignalApos$,
  Scte35TimeSignalScheduleActionSettings$,
  Scte35Type,
  Scte35WebDeliveryAllowedFlag,
  SdiSource$,
  SdiSourceMapping$,
  SdiSourceMappingUpdateRequest$,
  SdiSourceMode,
  SdiSourceState,
  SdiSourceSummary$,
  SdiSourceType,
  SignalMapMonitorDeploymentStatus,
  SignalMapStatus,
  SignalMapSummary$,
  SmoothGroupAudioOnlyTimecodeControl,
  SmoothGroupCertificateMode,
  SmoothGroupEventIdMode,
  SmoothGroupEventStopBehavior,
  SmoothGroupSegmentationMode,
  SmoothGroupSparseTrackType,
  SmoothGroupStreamManifestBehavior,
  SmoothGroupTimestampOffsetMode,
  Smpte2038DataPreference,
  Smpte2110ReceiverGroup$,
  Smpte2110ReceiverGroupSdpSettings$,
  Smpte2110ReceiverGroupSettings$,
  SmpteTtDestinationSettings$,
  SpecialRouterSettings$,
  SrtCallerDecryption$,
  SrtCallerDecryptionRequest$,
  SrtCallerSource$,
  SrtCallerSourceRequest$,
  SrtEncryptionType,
  SrtGroupSettings$,
  SrtOutputDestinationSettings$,
  SrtOutputSettings$,
  SrtSettings$,
  SrtSettingsRequest$,
  StandardHlsSettings$,
  StartChannel$,
  StartChannelCommand,
  StartChannelRequest$,
  StartChannelResponse$,
  StartDeleteMonitorDeployment$,
  StartDeleteMonitorDeploymentCommand,
  StartDeleteMonitorDeploymentRequest$,
  StartDeleteMonitorDeploymentResponse$,
  StartInputDevice$,
  StartInputDeviceCommand,
  StartInputDeviceMaintenanceWindow$,
  StartInputDeviceMaintenanceWindowCommand,
  StartInputDeviceMaintenanceWindowRequest$,
  StartInputDeviceMaintenanceWindowResponse$,
  StartInputDeviceRequest$,
  StartInputDeviceResponse$,
  StartMonitorDeployment$,
  StartMonitorDeploymentCommand,
  StartMonitorDeploymentRequest$,
  StartMonitorDeploymentResponse$,
  StartMultiplex$,
  StartMultiplexCommand,
  StartMultiplexRequest$,
  StartMultiplexResponse$,
  StartTimecode$,
  StartUpdateSignalMap$,
  StartUpdateSignalMapCommand,
  StartUpdateSignalMapRequest$,
  StartUpdateSignalMapResponse$,
  StaticImageActivateScheduleActionSettings$,
  StaticImageDeactivateScheduleActionSettings$,
  StaticImageOutputActivateScheduleActionSettings$,
  StaticImageOutputDeactivateScheduleActionSettings$,
  StaticKeySettings$,
  StopChannel$,
  StopChannelCommand,
  StopChannelRequest$,
  StopChannelResponse$,
  StopInputDevice$,
  StopInputDeviceCommand,
  StopInputDeviceRequest$,
  StopInputDeviceResponse$,
  StopMultiplex$,
  StopMultiplexCommand,
  StopMultiplexRequest$,
  StopMultiplexResponse$,
  StopTimecode$,
  SuccessfulMonitorDeployment$,
  TeletextDestinationSettings$,
  TeletextSourceSettings$,
  TemporalFilterPostFilterSharpening,
  TemporalFilterSettings$,
  TemporalFilterStrength,
  Thumbnail$,
  ThumbnailConfiguration$,
  ThumbnailDetail$,
  ThumbnailState,
  ThumbnailType,
  TimecodeBurninFontSize,
  TimecodeBurninPosition,
  TimecodeBurninSettings$,
  TimecodeConfig$,
  TimecodeConfigSource,
  TimedMetadataScheduleActionSettings$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TransferInputDevice$,
  TransferInputDeviceCommand,
  TransferInputDeviceRequest$,
  TransferInputDeviceResponse$,
  TransferringInputDeviceSummary$,
  TtmlDestinationSettings$,
  TtmlDestinationStyleControl,
  UdpContainerSettings$,
  UdpGroupSettings$,
  UdpOutputSettings$,
  UdpTimedMetadataId3Frame,
  UnprocessableEntityException,
  UnprocessableEntityException$,
  UpdateAccountConfiguration$,
  UpdateAccountConfigurationCommand,
  UpdateAccountConfigurationRequest$,
  UpdateAccountConfigurationResponse$,
  UpdateChannel$,
  UpdateChannelClass$,
  UpdateChannelClassCommand,
  UpdateChannelClassRequest$,
  UpdateChannelClassResponse$,
  UpdateChannelCommand,
  UpdateChannelPlacementGroup$,
  UpdateChannelPlacementGroupCommand,
  UpdateChannelPlacementGroupRequest$,
  UpdateChannelPlacementGroupResponse$,
  UpdateChannelRequest$,
  UpdateChannelResponse$,
  UpdateCloudWatchAlarmTemplate$,
  UpdateCloudWatchAlarmTemplateCommand,
  UpdateCloudWatchAlarmTemplateGroup$,
  UpdateCloudWatchAlarmTemplateGroupCommand,
  UpdateCloudWatchAlarmTemplateGroupRequest$,
  UpdateCloudWatchAlarmTemplateGroupResponse$,
  UpdateCloudWatchAlarmTemplateRequest$,
  UpdateCloudWatchAlarmTemplateResponse$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResponse$,
  UpdateEventBridgeRuleTemplate$,
  UpdateEventBridgeRuleTemplateCommand,
  UpdateEventBridgeRuleTemplateGroup$,
  UpdateEventBridgeRuleTemplateGroupCommand,
  UpdateEventBridgeRuleTemplateGroupRequest$,
  UpdateEventBridgeRuleTemplateGroupResponse$,
  UpdateEventBridgeRuleTemplateRequest$,
  UpdateEventBridgeRuleTemplateResponse$,
  UpdateInput$,
  UpdateInputCommand,
  UpdateInputDevice$,
  UpdateInputDeviceCommand,
  UpdateInputDeviceRequest$,
  UpdateInputDeviceResponse$,
  UpdateInputRequest$,
  UpdateInputResponse$,
  UpdateInputSecurityGroup$,
  UpdateInputSecurityGroupCommand,
  UpdateInputSecurityGroupRequest$,
  UpdateInputSecurityGroupResponse$,
  UpdateMultiplex$,
  UpdateMultiplexCommand,
  UpdateMultiplexProgram$,
  UpdateMultiplexProgramCommand,
  UpdateMultiplexProgramRequest$,
  UpdateMultiplexProgramResponse$,
  UpdateMultiplexRequest$,
  UpdateMultiplexResponse$,
  UpdateNetwork$,
  UpdateNetworkCommand,
  UpdateNetworkRequest$,
  UpdateNetworkResponse$,
  UpdateNode$,
  UpdateNodeCommand,
  UpdateNodeRequest$,
  UpdateNodeResponse$,
  UpdateNodeState$,
  UpdateNodeStateCommand,
  UpdateNodeStateRequest$,
  UpdateNodeStateResponse$,
  UpdateNodeStateShape,
  UpdateReservation$,
  UpdateReservationCommand,
  UpdateReservationRequest$,
  UpdateReservationResponse$,
  UpdateSdiSource$,
  UpdateSdiSourceCommand,
  UpdateSdiSourceRequest$,
  UpdateSdiSourceResponse$,
  ValidationError$,
  VideoBlackFailoverSettings$,
  VideoCodecSettings$,
  VideoDescription$,
  VideoDescriptionRespondToAfd,
  VideoDescriptionScalingBehavior,
  VideoSelector$,
  VideoSelectorColorSpace,
  VideoSelectorColorSpaceSettings$,
  VideoSelectorColorSpaceUsage,
  VideoSelectorPid$,
  VideoSelectorProgramId$,
  VideoSelectorSettings$,
  VpcOutputSettings$,
  VpcOutputSettingsDescription$,
  WavCodingMode,
  WavSettings$,
  WebvttDestinationSettings$,
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
assert(typeof AcceptInputDeviceTransfer$ === "object");
assert(typeof BatchDeleteCommand === "function");
assert(typeof BatchDelete$ === "object");
assert(typeof BatchStartCommand === "function");
assert(typeof BatchStart$ === "object");
assert(typeof BatchStopCommand === "function");
assert(typeof BatchStop$ === "object");
assert(typeof BatchUpdateScheduleCommand === "function");
assert(typeof BatchUpdateSchedule$ === "object");
assert(typeof CancelInputDeviceTransferCommand === "function");
assert(typeof CancelInputDeviceTransfer$ === "object");
assert(typeof ClaimDeviceCommand === "function");
assert(typeof ClaimDevice$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateChannelPlacementGroupCommand === "function");
assert(typeof CreateChannelPlacementGroup$ === "object");
assert(typeof CreateCloudWatchAlarmTemplateCommand === "function");
assert(typeof CreateCloudWatchAlarmTemplate$ === "object");
assert(typeof CreateCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof CreateCloudWatchAlarmTemplateGroup$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateEventBridgeRuleTemplateCommand === "function");
assert(typeof CreateEventBridgeRuleTemplate$ === "object");
assert(typeof CreateEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof CreateEventBridgeRuleTemplateGroup$ === "object");
assert(typeof CreateInputCommand === "function");
assert(typeof CreateInput$ === "object");
assert(typeof CreateInputSecurityGroupCommand === "function");
assert(typeof CreateInputSecurityGroup$ === "object");
assert(typeof CreateMultiplexCommand === "function");
assert(typeof CreateMultiplex$ === "object");
assert(typeof CreateMultiplexProgramCommand === "function");
assert(typeof CreateMultiplexProgram$ === "object");
assert(typeof CreateNetworkCommand === "function");
assert(typeof CreateNetwork$ === "object");
assert(typeof CreateNodeCommand === "function");
assert(typeof CreateNode$ === "object");
assert(typeof CreateNodeRegistrationScriptCommand === "function");
assert(typeof CreateNodeRegistrationScript$ === "object");
assert(typeof CreatePartnerInputCommand === "function");
assert(typeof CreatePartnerInput$ === "object");
assert(typeof CreateSdiSourceCommand === "function");
assert(typeof CreateSdiSource$ === "object");
assert(typeof CreateSignalMapCommand === "function");
assert(typeof CreateSignalMap$ === "object");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTags$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteChannelPlacementGroupCommand === "function");
assert(typeof DeleteChannelPlacementGroup$ === "object");
assert(typeof DeleteCloudWatchAlarmTemplateCommand === "function");
assert(typeof DeleteCloudWatchAlarmTemplate$ === "object");
assert(typeof DeleteCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof DeleteCloudWatchAlarmTemplateGroup$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteEventBridgeRuleTemplateCommand === "function");
assert(typeof DeleteEventBridgeRuleTemplate$ === "object");
assert(typeof DeleteEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof DeleteEventBridgeRuleTemplateGroup$ === "object");
assert(typeof DeleteInputCommand === "function");
assert(typeof DeleteInput$ === "object");
assert(typeof DeleteInputSecurityGroupCommand === "function");
assert(typeof DeleteInputSecurityGroup$ === "object");
assert(typeof DeleteMultiplexCommand === "function");
assert(typeof DeleteMultiplex$ === "object");
assert(typeof DeleteMultiplexProgramCommand === "function");
assert(typeof DeleteMultiplexProgram$ === "object");
assert(typeof DeleteNetworkCommand === "function");
assert(typeof DeleteNetwork$ === "object");
assert(typeof DeleteNodeCommand === "function");
assert(typeof DeleteNode$ === "object");
assert(typeof DeleteReservationCommand === "function");
assert(typeof DeleteReservation$ === "object");
assert(typeof DeleteScheduleCommand === "function");
assert(typeof DeleteSchedule$ === "object");
assert(typeof DeleteSdiSourceCommand === "function");
assert(typeof DeleteSdiSource$ === "object");
assert(typeof DeleteSignalMapCommand === "function");
assert(typeof DeleteSignalMap$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DescribeAccountConfigurationCommand === "function");
assert(typeof DescribeAccountConfiguration$ === "object");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeChannel$ === "object");
assert(typeof DescribeChannelPlacementGroupCommand === "function");
assert(typeof DescribeChannelPlacementGroup$ === "object");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeCluster$ === "object");
assert(typeof DescribeInputCommand === "function");
assert(typeof DescribeInput$ === "object");
assert(typeof DescribeInputDeviceCommand === "function");
assert(typeof DescribeInputDevice$ === "object");
assert(typeof DescribeInputDeviceThumbnailCommand === "function");
assert(typeof DescribeInputDeviceThumbnail$ === "object");
assert(typeof DescribeInputSecurityGroupCommand === "function");
assert(typeof DescribeInputSecurityGroup$ === "object");
assert(typeof DescribeMultiplexCommand === "function");
assert(typeof DescribeMultiplex$ === "object");
assert(typeof DescribeMultiplexProgramCommand === "function");
assert(typeof DescribeMultiplexProgram$ === "object");
assert(typeof DescribeNetworkCommand === "function");
assert(typeof DescribeNetwork$ === "object");
assert(typeof DescribeNodeCommand === "function");
assert(typeof DescribeNode$ === "object");
assert(typeof DescribeOfferingCommand === "function");
assert(typeof DescribeOffering$ === "object");
assert(typeof DescribeReservationCommand === "function");
assert(typeof DescribeReservation$ === "object");
assert(typeof DescribeScheduleCommand === "function");
assert(typeof DescribeSchedule$ === "object");
assert(typeof DescribeSdiSourceCommand === "function");
assert(typeof DescribeSdiSource$ === "object");
assert(typeof DescribeThumbnailsCommand === "function");
assert(typeof DescribeThumbnails$ === "object");
assert(typeof GetCloudWatchAlarmTemplateCommand === "function");
assert(typeof GetCloudWatchAlarmTemplate$ === "object");
assert(typeof GetCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof GetCloudWatchAlarmTemplateGroup$ === "object");
assert(typeof GetEventBridgeRuleTemplateCommand === "function");
assert(typeof GetEventBridgeRuleTemplate$ === "object");
assert(typeof GetEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof GetEventBridgeRuleTemplateGroup$ === "object");
assert(typeof GetSignalMapCommand === "function");
assert(typeof GetSignalMap$ === "object");
assert(typeof ListAlertsCommand === "function");
assert(typeof ListAlerts$ === "object");
assert(typeof ListChannelPlacementGroupsCommand === "function");
assert(typeof ListChannelPlacementGroups$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListCloudWatchAlarmTemplateGroupsCommand === "function");
assert(typeof ListCloudWatchAlarmTemplateGroups$ === "object");
assert(typeof ListCloudWatchAlarmTemplatesCommand === "function");
assert(typeof ListCloudWatchAlarmTemplates$ === "object");
assert(typeof ListClusterAlertsCommand === "function");
assert(typeof ListClusterAlerts$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListEventBridgeRuleTemplateGroupsCommand === "function");
assert(typeof ListEventBridgeRuleTemplateGroups$ === "object");
assert(typeof ListEventBridgeRuleTemplatesCommand === "function");
assert(typeof ListEventBridgeRuleTemplates$ === "object");
assert(typeof ListInputDevicesCommand === "function");
assert(typeof ListInputDevices$ === "object");
assert(typeof ListInputDeviceTransfersCommand === "function");
assert(typeof ListInputDeviceTransfers$ === "object");
assert(typeof ListInputsCommand === "function");
assert(typeof ListInputs$ === "object");
assert(typeof ListInputSecurityGroupsCommand === "function");
assert(typeof ListInputSecurityGroups$ === "object");
assert(typeof ListMultiplexAlertsCommand === "function");
assert(typeof ListMultiplexAlerts$ === "object");
assert(typeof ListMultiplexesCommand === "function");
assert(typeof ListMultiplexes$ === "object");
assert(typeof ListMultiplexProgramsCommand === "function");
assert(typeof ListMultiplexPrograms$ === "object");
assert(typeof ListNetworksCommand === "function");
assert(typeof ListNetworks$ === "object");
assert(typeof ListNodesCommand === "function");
assert(typeof ListNodes$ === "object");
assert(typeof ListOfferingsCommand === "function");
assert(typeof ListOfferings$ === "object");
assert(typeof ListReservationsCommand === "function");
assert(typeof ListReservations$ === "object");
assert(typeof ListSdiSourcesCommand === "function");
assert(typeof ListSdiSources$ === "object");
assert(typeof ListSignalMapsCommand === "function");
assert(typeof ListSignalMaps$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVersionsCommand === "function");
assert(typeof ListVersions$ === "object");
assert(typeof PurchaseOfferingCommand === "function");
assert(typeof PurchaseOffering$ === "object");
assert(typeof RebootInputDeviceCommand === "function");
assert(typeof RebootInputDevice$ === "object");
assert(typeof RejectInputDeviceTransferCommand === "function");
assert(typeof RejectInputDeviceTransfer$ === "object");
assert(typeof RestartChannelPipelinesCommand === "function");
assert(typeof RestartChannelPipelines$ === "object");
assert(typeof StartChannelCommand === "function");
assert(typeof StartChannel$ === "object");
assert(typeof StartDeleteMonitorDeploymentCommand === "function");
assert(typeof StartDeleteMonitorDeployment$ === "object");
assert(typeof StartInputDeviceCommand === "function");
assert(typeof StartInputDevice$ === "object");
assert(typeof StartInputDeviceMaintenanceWindowCommand === "function");
assert(typeof StartInputDeviceMaintenanceWindow$ === "object");
assert(typeof StartMonitorDeploymentCommand === "function");
assert(typeof StartMonitorDeployment$ === "object");
assert(typeof StartMultiplexCommand === "function");
assert(typeof StartMultiplex$ === "object");
assert(typeof StartUpdateSignalMapCommand === "function");
assert(typeof StartUpdateSignalMap$ === "object");
assert(typeof StopChannelCommand === "function");
assert(typeof StopChannel$ === "object");
assert(typeof StopInputDeviceCommand === "function");
assert(typeof StopInputDevice$ === "object");
assert(typeof StopMultiplexCommand === "function");
assert(typeof StopMultiplex$ === "object");
assert(typeof TransferInputDeviceCommand === "function");
assert(typeof TransferInputDevice$ === "object");
assert(typeof UpdateAccountConfigurationCommand === "function");
assert(typeof UpdateAccountConfiguration$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateChannelClassCommand === "function");
assert(typeof UpdateChannelClass$ === "object");
assert(typeof UpdateChannelPlacementGroupCommand === "function");
assert(typeof UpdateChannelPlacementGroup$ === "object");
assert(typeof UpdateCloudWatchAlarmTemplateCommand === "function");
assert(typeof UpdateCloudWatchAlarmTemplate$ === "object");
assert(typeof UpdateCloudWatchAlarmTemplateGroupCommand === "function");
assert(typeof UpdateCloudWatchAlarmTemplateGroup$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateEventBridgeRuleTemplateCommand === "function");
assert(typeof UpdateEventBridgeRuleTemplate$ === "object");
assert(typeof UpdateEventBridgeRuleTemplateGroupCommand === "function");
assert(typeof UpdateEventBridgeRuleTemplateGroup$ === "object");
assert(typeof UpdateInputCommand === "function");
assert(typeof UpdateInput$ === "object");
assert(typeof UpdateInputDeviceCommand === "function");
assert(typeof UpdateInputDevice$ === "object");
assert(typeof UpdateInputSecurityGroupCommand === "function");
assert(typeof UpdateInputSecurityGroup$ === "object");
assert(typeof UpdateMultiplexCommand === "function");
assert(typeof UpdateMultiplex$ === "object");
assert(typeof UpdateMultiplexProgramCommand === "function");
assert(typeof UpdateMultiplexProgram$ === "object");
assert(typeof UpdateNetworkCommand === "function");
assert(typeof UpdateNetwork$ === "object");
assert(typeof UpdateNodeCommand === "function");
assert(typeof UpdateNode$ === "object");
assert(typeof UpdateNodeStateCommand === "function");
assert(typeof UpdateNodeState$ === "object");
assert(typeof UpdateReservationCommand === "function");
assert(typeof UpdateReservation$ === "object");
assert(typeof UpdateSdiSourceCommand === "function");
assert(typeof UpdateSdiSource$ === "object");
// structural schemas
assert(typeof AacSettings$ === "object");
assert(typeof Ac3Settings$ === "object");
assert(typeof AcceptInputDeviceTransferRequest$ === "object");
assert(typeof AcceptInputDeviceTransferResponse$ === "object");
assert(typeof AccountConfiguration$ === "object");
assert(typeof AdditionalDestinations$ === "object");
assert(typeof AncillarySourceSettings$ === "object");
assert(typeof AnywhereSettings$ === "object");
assert(typeof ArchiveCdnSettings$ === "object");
assert(typeof ArchiveContainerSettings$ === "object");
assert(typeof ArchiveGroupSettings$ === "object");
assert(typeof ArchiveOutputSettings$ === "object");
assert(typeof ArchiveS3Settings$ === "object");
assert(typeof AribDestinationSettings$ === "object");
assert(typeof AribSourceSettings$ === "object");
assert(typeof AudioChannelMapping$ === "object");
assert(typeof AudioCodecSettings$ === "object");
assert(typeof AudioDescription$ === "object");
assert(typeof AudioDolbyEDecode$ === "object");
assert(typeof AudioHlsRenditionSelection$ === "object");
assert(typeof AudioLanguageSelection$ === "object");
assert(typeof AudioNormalizationSettings$ === "object");
assert(typeof AudioOnlyHlsSettings$ === "object");
assert(typeof AudioPidSelection$ === "object");
assert(typeof AudioSelector$ === "object");
assert(typeof AudioSelectorSettings$ === "object");
assert(typeof AudioSilenceFailoverSettings$ === "object");
assert(typeof AudioTrack$ === "object");
assert(typeof AudioTrackSelection$ === "object");
assert(typeof AudioWatermarkSettings$ === "object");
assert(typeof AutomaticInputFailoverSettings$ === "object");
assert(typeof Av1ColorSpaceSettings$ === "object");
assert(typeof Av1Settings$ === "object");
assert(typeof AvailBlanking$ === "object");
assert(typeof AvailConfiguration$ === "object");
assert(typeof AvailSettings$ === "object");
assert(typeof BandwidthReductionFilterSettings$ === "object");
assert(typeof BatchDeleteRequest$ === "object");
assert(typeof BatchDeleteResponse$ === "object");
assert(typeof BatchFailedResultModel$ === "object");
assert(typeof BatchScheduleActionCreateRequest$ === "object");
assert(typeof BatchScheduleActionCreateResult$ === "object");
assert(typeof BatchScheduleActionDeleteRequest$ === "object");
assert(typeof BatchScheduleActionDeleteResult$ === "object");
assert(typeof BatchStartRequest$ === "object");
assert(typeof BatchStartResponse$ === "object");
assert(typeof BatchStopRequest$ === "object");
assert(typeof BatchStopResponse$ === "object");
assert(typeof BatchSuccessfulResultModel$ === "object");
assert(typeof BatchUpdateScheduleRequest$ === "object");
assert(typeof BatchUpdateScheduleResponse$ === "object");
assert(typeof BlackoutSlate$ === "object");
assert(typeof BurnInDestinationSettings$ === "object");
assert(typeof CancelInputDeviceTransferRequest$ === "object");
assert(typeof CancelInputDeviceTransferResponse$ === "object");
assert(typeof CaptionDescription$ === "object");
assert(typeof CaptionDestinationSettings$ === "object");
assert(typeof CaptionLanguageMapping$ === "object");
assert(typeof CaptionRectangle$ === "object");
assert(typeof CaptionSelector$ === "object");
assert(typeof CaptionSelectorSettings$ === "object");
assert(typeof CdiInputSpecification$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ChannelAlert$ === "object");
assert(typeof ChannelEgressEndpoint$ === "object");
assert(typeof ChannelEngineVersionRequest$ === "object");
assert(typeof ChannelEngineVersionResponse$ === "object");
assert(typeof ChannelSummary$ === "object");
assert(typeof ClaimDeviceRequest$ === "object");
assert(typeof ClaimDeviceResponse$ === "object");
assert(typeof CloudWatchAlarmTemplateGroupSummary$ === "object");
assert(typeof CloudWatchAlarmTemplateSummary$ === "object");
assert(typeof ClusterAlert$ === "object");
assert(typeof ClusterNetworkSettings$ === "object");
assert(typeof ClusterNetworkSettingsCreateRequest$ === "object");
assert(typeof ClusterNetworkSettingsUpdateRequest$ === "object");
assert(typeof CmafIngestCaptionLanguageMapping$ === "object");
assert(typeof CmafIngestGroupSettings$ === "object");
assert(typeof CmafIngestOutputSettings$ === "object");
assert(typeof ColorCorrection$ === "object");
assert(typeof ColorCorrectionSettings$ === "object");
assert(typeof ColorSpacePassthroughSettings$ === "object");
assert(typeof CreateChannelPlacementGroupRequest$ === "object");
assert(typeof CreateChannelPlacementGroupResponse$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof CreateCloudWatchAlarmTemplateGroupRequest$ === "object");
assert(typeof CreateCloudWatchAlarmTemplateGroupResponse$ === "object");
assert(typeof CreateCloudWatchAlarmTemplateRequest$ === "object");
assert(typeof CreateCloudWatchAlarmTemplateResponse$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateEventBridgeRuleTemplateGroupRequest$ === "object");
assert(typeof CreateEventBridgeRuleTemplateGroupResponse$ === "object");
assert(typeof CreateEventBridgeRuleTemplateRequest$ === "object");
assert(typeof CreateEventBridgeRuleTemplateResponse$ === "object");
assert(typeof CreateInputRequest$ === "object");
assert(typeof CreateInputResponse$ === "object");
assert(typeof CreateInputSecurityGroupRequest$ === "object");
assert(typeof CreateInputSecurityGroupResponse$ === "object");
assert(typeof CreateMultiplexProgramRequest$ === "object");
assert(typeof CreateMultiplexProgramResponse$ === "object");
assert(typeof CreateMultiplexRequest$ === "object");
assert(typeof CreateMultiplexResponse$ === "object");
assert(typeof CreateNetworkRequest$ === "object");
assert(typeof CreateNetworkResponse$ === "object");
assert(typeof CreateNodeRegistrationScriptRequest$ === "object");
assert(typeof CreateNodeRegistrationScriptResponse$ === "object");
assert(typeof CreateNodeRequest$ === "object");
assert(typeof CreateNodeResponse$ === "object");
assert(typeof CreatePartnerInputRequest$ === "object");
assert(typeof CreatePartnerInputResponse$ === "object");
assert(typeof CreateSdiSourceRequest$ === "object");
assert(typeof CreateSdiSourceResponse$ === "object");
assert(typeof CreateSignalMapRequest$ === "object");
assert(typeof CreateSignalMapResponse$ === "object");
assert(typeof CreateTagsRequest$ === "object");
assert(typeof DeleteChannelPlacementGroupRequest$ === "object");
assert(typeof DeleteChannelPlacementGroupResponse$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeleteChannelResponse$ === "object");
assert(typeof DeleteCloudWatchAlarmTemplateGroupRequest$ === "object");
assert(typeof DeleteCloudWatchAlarmTemplateRequest$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteEventBridgeRuleTemplateGroupRequest$ === "object");
assert(typeof DeleteEventBridgeRuleTemplateRequest$ === "object");
assert(typeof DeleteInputRequest$ === "object");
assert(typeof DeleteInputResponse$ === "object");
assert(typeof DeleteInputSecurityGroupRequest$ === "object");
assert(typeof DeleteInputSecurityGroupResponse$ === "object");
assert(typeof DeleteMultiplexProgramRequest$ === "object");
assert(typeof DeleteMultiplexProgramResponse$ === "object");
assert(typeof DeleteMultiplexRequest$ === "object");
assert(typeof DeleteMultiplexResponse$ === "object");
assert(typeof DeleteNetworkRequest$ === "object");
assert(typeof DeleteNetworkResponse$ === "object");
assert(typeof DeleteNodeRequest$ === "object");
assert(typeof DeleteNodeResponse$ === "object");
assert(typeof DeleteReservationRequest$ === "object");
assert(typeof DeleteReservationResponse$ === "object");
assert(typeof DeleteScheduleRequest$ === "object");
assert(typeof DeleteScheduleResponse$ === "object");
assert(typeof DeleteSdiSourceRequest$ === "object");
assert(typeof DeleteSdiSourceResponse$ === "object");
assert(typeof DeleteSignalMapRequest$ === "object");
assert(typeof DeleteTagsRequest$ === "object");
assert(typeof DescribeAccountConfigurationRequest$ === "object");
assert(typeof DescribeAccountConfigurationResponse$ === "object");
assert(typeof DescribeAnywhereSettings$ === "object");
assert(typeof DescribeChannelPlacementGroupRequest$ === "object");
assert(typeof DescribeChannelPlacementGroupResponse$ === "object");
assert(typeof DescribeChannelPlacementGroupSummary$ === "object");
assert(typeof DescribeChannelRequest$ === "object");
assert(typeof DescribeChannelResponse$ === "object");
assert(typeof DescribeClusterRequest$ === "object");
assert(typeof DescribeClusterResponse$ === "object");
assert(typeof DescribeClusterSummary$ === "object");
assert(typeof DescribeInputDeviceRequest$ === "object");
assert(typeof DescribeInputDeviceResponse$ === "object");
assert(typeof DescribeInputDeviceThumbnailRequest$ === "object");
assert(typeof DescribeInputDeviceThumbnailResponse$ === "object");
assert(typeof DescribeInputRequest$ === "object");
assert(typeof DescribeInputResponse$ === "object");
assert(typeof DescribeInputSecurityGroupRequest$ === "object");
assert(typeof DescribeInputSecurityGroupResponse$ === "object");
assert(typeof DescribeMultiplexProgramRequest$ === "object");
assert(typeof DescribeMultiplexProgramResponse$ === "object");
assert(typeof DescribeMultiplexRequest$ === "object");
assert(typeof DescribeMultiplexResponse$ === "object");
assert(typeof DescribeNetworkRequest$ === "object");
assert(typeof DescribeNetworkResponse$ === "object");
assert(typeof DescribeNetworkSummary$ === "object");
assert(typeof DescribeNodeRequest$ === "object");
assert(typeof DescribeNodeResponse$ === "object");
assert(typeof DescribeNodeSummary$ === "object");
assert(typeof DescribeOfferingRequest$ === "object");
assert(typeof DescribeOfferingResponse$ === "object");
assert(typeof DescribeReservationRequest$ === "object");
assert(typeof DescribeReservationResponse$ === "object");
assert(typeof DescribeScheduleRequest$ === "object");
assert(typeof DescribeScheduleResponse$ === "object");
assert(typeof DescribeSdiSourceRequest$ === "object");
assert(typeof DescribeSdiSourceResponse$ === "object");
assert(typeof DescribeThumbnailsRequest$ === "object");
assert(typeof DescribeThumbnailsResponse$ === "object");
assert(typeof DolbyVision81Settings$ === "object");
assert(typeof DvbNitSettings$ === "object");
assert(typeof DvbSdtSettings$ === "object");
assert(typeof DvbSubDestinationSettings$ === "object");
assert(typeof DvbSubSourceSettings$ === "object");
assert(typeof DvbTdtSettings$ === "object");
assert(typeof Eac3AtmosSettings$ === "object");
assert(typeof Eac3Settings$ === "object");
assert(typeof EbuTtDDestinationSettings$ === "object");
assert(typeof EmbeddedDestinationSettings$ === "object");
assert(typeof EmbeddedPlusScte20DestinationSettings$ === "object");
assert(typeof EmbeddedSourceSettings$ === "object");
assert(typeof EncoderSettings$ === "object");
assert(typeof EpochLockingSettings$ === "object");
assert(typeof Esam$ === "object");
assert(typeof EventBridgeRuleTemplateGroupSummary$ === "object");
assert(typeof EventBridgeRuleTemplateSummary$ === "object");
assert(typeof EventBridgeRuleTemplateTarget$ === "object");
assert(typeof FailoverCondition$ === "object");
assert(typeof FailoverConditionSettings$ === "object");
assert(typeof FeatureActivations$ === "object");
assert(typeof FecOutputSettings$ === "object");
assert(typeof FixedModeScheduleActionStartSettings$ === "object");
assert(typeof Fmp4HlsSettings$ === "object");
assert(typeof FollowModeScheduleActionStartSettings$ === "object");
assert(typeof FrameCaptureCdnSettings$ === "object");
assert(typeof FrameCaptureGroupSettings$ === "object");
assert(typeof FrameCaptureHlsSettings$ === "object");
assert(typeof FrameCaptureOutputSettings$ === "object");
assert(typeof FrameCaptureS3Settings$ === "object");
assert(typeof FrameCaptureSettings$ === "object");
assert(typeof GetCloudWatchAlarmTemplateGroupRequest$ === "object");
assert(typeof GetCloudWatchAlarmTemplateGroupResponse$ === "object");
assert(typeof GetCloudWatchAlarmTemplateRequest$ === "object");
assert(typeof GetCloudWatchAlarmTemplateResponse$ === "object");
assert(typeof GetEventBridgeRuleTemplateGroupRequest$ === "object");
assert(typeof GetEventBridgeRuleTemplateGroupResponse$ === "object");
assert(typeof GetEventBridgeRuleTemplateRequest$ === "object");
assert(typeof GetEventBridgeRuleTemplateResponse$ === "object");
assert(typeof GetSignalMapRequest$ === "object");
assert(typeof GetSignalMapResponse$ === "object");
assert(typeof GlobalConfiguration$ === "object");
assert(typeof H264ColorSpaceSettings$ === "object");
assert(typeof H264FilterSettings$ === "object");
assert(typeof H264Settings$ === "object");
assert(typeof H265ColorSpaceSettings$ === "object");
assert(typeof H265FilterSettings$ === "object");
assert(typeof H265Settings$ === "object");
assert(typeof Hdr10Settings$ === "object");
assert(typeof Hlg2020Settings$ === "object");
assert(typeof HlsAkamaiSettings$ === "object");
assert(typeof HlsBasicPutSettings$ === "object");
assert(typeof HlsCdnSettings$ === "object");
assert(typeof HlsGroupSettings$ === "object");
assert(typeof HlsId3SegmentTaggingScheduleActionSettings$ === "object");
assert(typeof HlsInputSettings$ === "object");
assert(typeof HlsMediaStoreSettings$ === "object");
assert(typeof HlsOutputSettings$ === "object");
assert(typeof HlsS3Settings$ === "object");
assert(typeof HlsSettings$ === "object");
assert(typeof HlsTimedMetadataScheduleActionSettings$ === "object");
assert(typeof HlsWebdavSettings$ === "object");
assert(typeof HtmlMotionGraphicsSettings$ === "object");
assert(typeof Id3SegmentTaggingScheduleActionSettings$ === "object");
assert(typeof ImmediateModeScheduleActionStartSettings$ === "object");
assert(typeof Input$ === "object");
assert(typeof InputAttachment$ === "object");
assert(typeof InputChannelLevel$ === "object");
assert(typeof InputClippingSettings$ === "object");
assert(typeof InputDestination$ === "object");
assert(typeof InputDestinationRequest$ === "object");
assert(typeof InputDestinationRoute$ === "object");
assert(typeof InputDestinationVpc$ === "object");
assert(typeof InputDeviceConfigurableAudioChannelPairConfig$ === "object");
assert(typeof InputDeviceConfigurableSettings$ === "object");
assert(typeof InputDeviceHdSettings$ === "object");
assert(typeof InputDeviceMediaConnectConfigurableSettings$ === "object");
assert(typeof InputDeviceMediaConnectSettings$ === "object");
assert(typeof InputDeviceNetworkSettings$ === "object");
assert(typeof InputDeviceRequest$ === "object");
assert(typeof InputDeviceSettings$ === "object");
assert(typeof InputDeviceSummary$ === "object");
assert(typeof InputDeviceUhdAudioChannelPairConfig$ === "object");
assert(typeof InputDeviceUhdSettings$ === "object");
assert(typeof InputLocation$ === "object");
assert(typeof InputLossBehavior$ === "object");
assert(typeof InputLossFailoverSettings$ === "object");
assert(typeof InputPrepareScheduleActionSettings$ === "object");
assert(typeof InputRequestDestinationRoute$ === "object");
assert(typeof InputSdpLocation$ === "object");
assert(typeof InputSecurityGroup$ === "object");
assert(typeof InputSettings$ === "object");
assert(typeof InputSource$ === "object");
assert(typeof InputSourceRequest$ === "object");
assert(typeof InputSpecification$ === "object");
assert(typeof InputSwitchScheduleActionSettings$ === "object");
assert(typeof InputVpcRequest$ === "object");
assert(typeof InputWhitelistRule$ === "object");
assert(typeof InputWhitelistRuleCidr$ === "object");
assert(typeof InterfaceMapping$ === "object");
assert(typeof InterfaceMappingCreateRequest$ === "object");
assert(typeof InterfaceMappingUpdateRequest$ === "object");
assert(typeof IpPool$ === "object");
assert(typeof IpPoolCreateRequest$ === "object");
assert(typeof IpPoolUpdateRequest$ === "object");
assert(typeof KeyProviderSettings$ === "object");
assert(typeof ListAlertsRequest$ === "object");
assert(typeof ListAlertsResponse$ === "object");
assert(typeof ListChannelPlacementGroupsRequest$ === "object");
assert(typeof ListChannelPlacementGroupsResponse$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListCloudWatchAlarmTemplateGroupsRequest$ === "object");
assert(typeof ListCloudWatchAlarmTemplateGroupsResponse$ === "object");
assert(typeof ListCloudWatchAlarmTemplatesRequest$ === "object");
assert(typeof ListCloudWatchAlarmTemplatesResponse$ === "object");
assert(typeof ListClusterAlertsRequest$ === "object");
assert(typeof ListClusterAlertsResponse$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResponse$ === "object");
assert(typeof ListEventBridgeRuleTemplateGroupsRequest$ === "object");
assert(typeof ListEventBridgeRuleTemplateGroupsResponse$ === "object");
assert(typeof ListEventBridgeRuleTemplatesRequest$ === "object");
assert(typeof ListEventBridgeRuleTemplatesResponse$ === "object");
assert(typeof ListInputDevicesRequest$ === "object");
assert(typeof ListInputDevicesResponse$ === "object");
assert(typeof ListInputDeviceTransfersRequest$ === "object");
assert(typeof ListInputDeviceTransfersResponse$ === "object");
assert(typeof ListInputSecurityGroupsRequest$ === "object");
assert(typeof ListInputSecurityGroupsResponse$ === "object");
assert(typeof ListInputsRequest$ === "object");
assert(typeof ListInputsResponse$ === "object");
assert(typeof ListMultiplexAlertsRequest$ === "object");
assert(typeof ListMultiplexAlertsResponse$ === "object");
assert(typeof ListMultiplexesRequest$ === "object");
assert(typeof ListMultiplexesResponse$ === "object");
assert(typeof ListMultiplexProgramsRequest$ === "object");
assert(typeof ListMultiplexProgramsResponse$ === "object");
assert(typeof ListNetworksRequest$ === "object");
assert(typeof ListNetworksResponse$ === "object");
assert(typeof ListNodesRequest$ === "object");
assert(typeof ListNodesResponse$ === "object");
assert(typeof ListOfferingsRequest$ === "object");
assert(typeof ListOfferingsResponse$ === "object");
assert(typeof ListReservationsRequest$ === "object");
assert(typeof ListReservationsResponse$ === "object");
assert(typeof ListSdiSourcesRequest$ === "object");
assert(typeof ListSdiSourcesResponse$ === "object");
assert(typeof ListSignalMapsRequest$ === "object");
assert(typeof ListSignalMapsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVersionsRequest$ === "object");
assert(typeof ListVersionsResponse$ === "object");
assert(typeof M2tsSettings$ === "object");
assert(typeof M3u8Settings$ === "object");
assert(typeof MaintenanceCreateSettings$ === "object");
assert(typeof MaintenanceStatus$ === "object");
assert(typeof MaintenanceUpdateSettings$ === "object");
assert(typeof MediaConnectFlow$ === "object");
assert(typeof MediaConnectFlowRequest$ === "object");
assert(typeof MediaPackageGroupSettings$ === "object");
assert(typeof MediaPackageOutputDestinationSettings$ === "object");
assert(typeof MediaPackageOutputSettings$ === "object");
assert(typeof MediaPackageV2DestinationSettings$ === "object");
assert(typeof MediaPackageV2GroupSettings$ === "object");
assert(typeof MediaResource$ === "object");
assert(typeof MediaResourceNeighbor$ === "object");
assert(typeof MonitorDeployment$ === "object");
assert(typeof MotionGraphicsActivateScheduleActionSettings$ === "object");
assert(typeof MotionGraphicsConfiguration$ === "object");
assert(typeof MotionGraphicsDeactivateScheduleActionSettings$ === "object");
assert(typeof MotionGraphicsSettings$ === "object");
assert(typeof Mp2Settings$ === "object");
assert(typeof Mpeg2FilterSettings$ === "object");
assert(typeof Mpeg2Settings$ === "object");
assert(typeof MsSmoothGroupSettings$ === "object");
assert(typeof MsSmoothOutputSettings$ === "object");
assert(typeof MulticastInputSettings$ === "object");
assert(typeof MulticastSettings$ === "object");
assert(typeof MulticastSettingsCreateRequest$ === "object");
assert(typeof MulticastSettingsUpdateRequest$ === "object");
assert(typeof MulticastSource$ === "object");
assert(typeof MulticastSourceCreateRequest$ === "object");
assert(typeof MulticastSourceUpdateRequest$ === "object");
assert(typeof Multiplex$ === "object");
assert(typeof MultiplexAlert$ === "object");
assert(typeof MultiplexContainerSettings$ === "object");
assert(typeof MultiplexGroupSettings$ === "object");
assert(typeof MultiplexM2tsSettings$ === "object");
assert(typeof MultiplexMediaConnectOutputDestinationSettings$ === "object");
assert(typeof MultiplexOutputDestination$ === "object");
assert(typeof MultiplexOutputSettings$ === "object");
assert(typeof MultiplexProgram$ === "object");
assert(typeof MultiplexProgramChannelDestinationSettings$ === "object");
assert(typeof MultiplexProgramPacketIdentifiersMap$ === "object");
assert(typeof MultiplexProgramPipelineDetail$ === "object");
assert(typeof MultiplexProgramServiceDescriptor$ === "object");
assert(typeof MultiplexProgramSettings$ === "object");
assert(typeof MultiplexProgramSummary$ === "object");
assert(typeof MultiplexSettings$ === "object");
assert(typeof MultiplexSettingsSummary$ === "object");
assert(typeof MultiplexStatmuxVideoSettings$ === "object");
assert(typeof MultiplexSummary$ === "object");
assert(typeof MultiplexVideoSettings$ === "object");
assert(typeof NetworkInputSettings$ === "object");
assert(typeof NielsenCBET$ === "object");
assert(typeof NielsenConfiguration$ === "object");
assert(typeof NielsenNaesIiNw$ === "object");
assert(typeof NielsenWatermarksSettings$ === "object");
assert(typeof NodeInterfaceMapping$ === "object");
assert(typeof NodeInterfaceMappingCreateRequest$ === "object");
assert(typeof Offering$ === "object");
assert(typeof Output$ === "object");
assert(typeof OutputDestination$ === "object");
assert(typeof OutputDestinationSettings$ === "object");
assert(typeof OutputGroup$ === "object");
assert(typeof OutputGroupSettings$ === "object");
assert(typeof OutputLocationRef$ === "object");
assert(typeof OutputLockingSettings$ === "object");
assert(typeof OutputSettings$ === "object");
assert(typeof PassThroughSettings$ === "object");
assert(typeof PauseStateScheduleActionSettings$ === "object");
assert(typeof PipelineDetail$ === "object");
assert(typeof PipelineLockingSettings$ === "object");
assert(typeof PipelinePauseStateSettings$ === "object");
assert(typeof PurchaseOfferingRequest$ === "object");
assert(typeof PurchaseOfferingResponse$ === "object");
assert(typeof RawSettings$ === "object");
assert(typeof RebootInputDeviceRequest$ === "object");
assert(typeof RebootInputDeviceResponse$ === "object");
assert(typeof Rec601Settings$ === "object");
assert(typeof Rec709Settings$ === "object");
assert(typeof RejectInputDeviceTransferRequest$ === "object");
assert(typeof RejectInputDeviceTransferResponse$ === "object");
assert(typeof RemixSettings$ === "object");
assert(typeof RenewalSettings$ === "object");
assert(typeof Reservation$ === "object");
assert(typeof ReservationResourceSpecification$ === "object");
assert(typeof RestartChannelPipelinesRequest$ === "object");
assert(typeof RestartChannelPipelinesResponse$ === "object");
assert(typeof Route$ === "object");
assert(typeof RouteCreateRequest$ === "object");
assert(typeof RouterDestination$ === "object");
assert(typeof RouterDestinationSettings$ === "object");
assert(typeof RouterInputSettings$ === "object");
assert(typeof RouterSettings$ === "object");
assert(typeof RouteUpdateRequest$ === "object");
assert(typeof RtmpCaptionInfoDestinationSettings$ === "object");
assert(typeof RtmpGroupSettings$ === "object");
assert(typeof RtmpOutputSettings$ === "object");
assert(typeof ScheduleAction$ === "object");
assert(typeof ScheduleActionSettings$ === "object");
assert(typeof ScheduleActionStartSettings$ === "object");
assert(typeof Scte20PlusEmbeddedDestinationSettings$ === "object");
assert(typeof Scte20SourceSettings$ === "object");
assert(typeof Scte27DestinationSettings$ === "object");
assert(typeof Scte27SourceSettings$ === "object");
assert(typeof Scte35DeliveryRestrictions$ === "object");
assert(typeof Scte35Descriptor$ === "object");
assert(typeof Scte35DescriptorSettings$ === "object");
assert(typeof Scte35InputScheduleActionSettings$ === "object");
assert(typeof Scte35ReturnToNetworkScheduleActionSettings$ === "object");
assert(typeof Scte35SegmentationDescriptor$ === "object");
assert(typeof Scte35SpliceInsert$ === "object");
assert(typeof Scte35SpliceInsertScheduleActionSettings$ === "object");
assert(typeof Scte35TimeSignalApos$ === "object");
assert(typeof Scte35TimeSignalScheduleActionSettings$ === "object");
assert(typeof SdiSource$ === "object");
assert(typeof SdiSourceMapping$ === "object");
assert(typeof SdiSourceMappingUpdateRequest$ === "object");
assert(typeof SdiSourceSummary$ === "object");
assert(typeof SignalMapSummary$ === "object");
assert(typeof Smpte2110ReceiverGroup$ === "object");
assert(typeof Smpte2110ReceiverGroupSdpSettings$ === "object");
assert(typeof Smpte2110ReceiverGroupSettings$ === "object");
assert(typeof SmpteTtDestinationSettings$ === "object");
assert(typeof SpecialRouterSettings$ === "object");
assert(typeof SrtCallerDecryption$ === "object");
assert(typeof SrtCallerDecryptionRequest$ === "object");
assert(typeof SrtCallerSource$ === "object");
assert(typeof SrtCallerSourceRequest$ === "object");
assert(typeof SrtGroupSettings$ === "object");
assert(typeof SrtOutputDestinationSettings$ === "object");
assert(typeof SrtOutputSettings$ === "object");
assert(typeof SrtSettings$ === "object");
assert(typeof SrtSettingsRequest$ === "object");
assert(typeof StandardHlsSettings$ === "object");
assert(typeof StartChannelRequest$ === "object");
assert(typeof StartChannelResponse$ === "object");
assert(typeof StartDeleteMonitorDeploymentRequest$ === "object");
assert(typeof StartDeleteMonitorDeploymentResponse$ === "object");
assert(typeof StartInputDeviceMaintenanceWindowRequest$ === "object");
assert(typeof StartInputDeviceMaintenanceWindowResponse$ === "object");
assert(typeof StartInputDeviceRequest$ === "object");
assert(typeof StartInputDeviceResponse$ === "object");
assert(typeof StartMonitorDeploymentRequest$ === "object");
assert(typeof StartMonitorDeploymentResponse$ === "object");
assert(typeof StartMultiplexRequest$ === "object");
assert(typeof StartMultiplexResponse$ === "object");
assert(typeof StartTimecode$ === "object");
assert(typeof StartUpdateSignalMapRequest$ === "object");
assert(typeof StartUpdateSignalMapResponse$ === "object");
assert(typeof StaticImageActivateScheduleActionSettings$ === "object");
assert(typeof StaticImageDeactivateScheduleActionSettings$ === "object");
assert(typeof StaticImageOutputActivateScheduleActionSettings$ === "object");
assert(typeof StaticImageOutputDeactivateScheduleActionSettings$ === "object");
assert(typeof StaticKeySettings$ === "object");
assert(typeof StopChannelRequest$ === "object");
assert(typeof StopChannelResponse$ === "object");
assert(typeof StopInputDeviceRequest$ === "object");
assert(typeof StopInputDeviceResponse$ === "object");
assert(typeof StopMultiplexRequest$ === "object");
assert(typeof StopMultiplexResponse$ === "object");
assert(typeof StopTimecode$ === "object");
assert(typeof SuccessfulMonitorDeployment$ === "object");
assert(typeof TeletextDestinationSettings$ === "object");
assert(typeof TeletextSourceSettings$ === "object");
assert(typeof TemporalFilterSettings$ === "object");
assert(typeof Thumbnail$ === "object");
assert(typeof ThumbnailConfiguration$ === "object");
assert(typeof ThumbnailDetail$ === "object");
assert(typeof TimecodeBurninSettings$ === "object");
assert(typeof TimecodeConfig$ === "object");
assert(typeof TimedMetadataScheduleActionSettings$ === "object");
assert(typeof TransferInputDeviceRequest$ === "object");
assert(typeof TransferInputDeviceResponse$ === "object");
assert(typeof TransferringInputDeviceSummary$ === "object");
assert(typeof TtmlDestinationSettings$ === "object");
assert(typeof UdpContainerSettings$ === "object");
assert(typeof UdpGroupSettings$ === "object");
assert(typeof UdpOutputSettings$ === "object");
assert(typeof UpdateAccountConfigurationRequest$ === "object");
assert(typeof UpdateAccountConfigurationResponse$ === "object");
assert(typeof UpdateChannelClassRequest$ === "object");
assert(typeof UpdateChannelClassResponse$ === "object");
assert(typeof UpdateChannelPlacementGroupRequest$ === "object");
assert(typeof UpdateChannelPlacementGroupResponse$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateChannelResponse$ === "object");
assert(typeof UpdateCloudWatchAlarmTemplateGroupRequest$ === "object");
assert(typeof UpdateCloudWatchAlarmTemplateGroupResponse$ === "object");
assert(typeof UpdateCloudWatchAlarmTemplateRequest$ === "object");
assert(typeof UpdateCloudWatchAlarmTemplateResponse$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResponse$ === "object");
assert(typeof UpdateEventBridgeRuleTemplateGroupRequest$ === "object");
assert(typeof UpdateEventBridgeRuleTemplateGroupResponse$ === "object");
assert(typeof UpdateEventBridgeRuleTemplateRequest$ === "object");
assert(typeof UpdateEventBridgeRuleTemplateResponse$ === "object");
assert(typeof UpdateInputDeviceRequest$ === "object");
assert(typeof UpdateInputDeviceResponse$ === "object");
assert(typeof UpdateInputRequest$ === "object");
assert(typeof UpdateInputResponse$ === "object");
assert(typeof UpdateInputSecurityGroupRequest$ === "object");
assert(typeof UpdateInputSecurityGroupResponse$ === "object");
assert(typeof UpdateMultiplexProgramRequest$ === "object");
assert(typeof UpdateMultiplexProgramResponse$ === "object");
assert(typeof UpdateMultiplexRequest$ === "object");
assert(typeof UpdateMultiplexResponse$ === "object");
assert(typeof UpdateNetworkRequest$ === "object");
assert(typeof UpdateNetworkResponse$ === "object");
assert(typeof UpdateNodeRequest$ === "object");
assert(typeof UpdateNodeResponse$ === "object");
assert(typeof UpdateNodeStateRequest$ === "object");
assert(typeof UpdateNodeStateResponse$ === "object");
assert(typeof UpdateReservationRequest$ === "object");
assert(typeof UpdateReservationResponse$ === "object");
assert(typeof UpdateSdiSourceRequest$ === "object");
assert(typeof UpdateSdiSourceResponse$ === "object");
assert(typeof ValidationError$ === "object");
assert(typeof VideoBlackFailoverSettings$ === "object");
assert(typeof VideoCodecSettings$ === "object");
assert(typeof VideoDescription$ === "object");
assert(typeof VideoSelector$ === "object");
assert(typeof VideoSelectorColorSpaceSettings$ === "object");
assert(typeof VideoSelectorPid$ === "object");
assert(typeof VideoSelectorProgramId$ === "object");
assert(typeof VideoSelectorSettings$ === "object");
assert(typeof VpcOutputSettings$ === "object");
assert(typeof VpcOutputSettingsDescription$ === "object");
assert(typeof WavSettings$ === "object");
assert(typeof WebvttDestinationSettings$ === "object");
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
assert(typeof BadGatewayException$ === "object");
assert(BadRequestException.prototype instanceof MediaLiveServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof MediaLiveServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof MediaLiveServiceException);
assert(typeof ForbiddenException$ === "object");
assert(GatewayTimeoutException.prototype instanceof MediaLiveServiceException);
assert(typeof GatewayTimeoutException$ === "object");
assert(InternalServerErrorException.prototype instanceof MediaLiveServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof MediaLiveServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof MediaLiveServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnprocessableEntityException.prototype instanceof MediaLiveServiceException);
assert(typeof UnprocessableEntityException$ === "object");
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
