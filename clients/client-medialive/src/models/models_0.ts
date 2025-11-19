// smithy-typescript generated code
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
  BandwidthReductionFilterStrength,
  BandwidthReductionPostFilterSharpening,
  BlackoutSlateNetworkEndBlackout,
  BlackoutSlateState,
  BurnInAlignment,
  BurnInBackgroundColor,
  BurnInDestinationSubtitleRows,
  BurnInFontColor,
  BurnInOutlineColor,
  BurnInShadowColor,
  BurnInTeletextGridControl,
  CdiInputResolution,
  ChannelAlertState,
  ChannelClass,
  ChannelPlacementGroupState,
  ChannelState,
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
  DashRoleAudio,
  DashRoleCaption,
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
  FecOutputIncludeFec,
  FixedAfd,
  Fmp4NielsenId3Behavior,
  Fmp4TimedMetadataBehavior,
  FollowPoint,
  FrameCaptureIntervalUnit,
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
  LastFrameClippingBehavior,
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
  NielsenWatermarksCbetStepaside,
  NielsenWatermarksDistributionTypes,
  NielsenWatermarkTimezones,
  NodeConnectionState,
  NodeRole,
  NodeState,
  OfferingDurationUnits,
  OfferingType,
  PipelineId,
  ReservationAutomaticRenewal,
  ReservationCodec,
  ReservationMaximumBitrate,
  ReservationMaximumFramerate,
  ReservationResolution,
  ReservationResourceType,
  ReservationSpecialFeature,
  ReservationState,
  ReservationVideoQuality,
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
  TemporalFilterPostFilterSharpening,
  TemporalFilterStrength,
  ThumbnailType,
  TimecodeBurninFontSize,
  TimecodeBurninPosition,
  TtmlDestinationStyleControl,
  UdpTimedMetadataId3Frame,
  VideoDescriptionRespondToAfd,
  VideoDescriptionScalingBehavior,
  VideoSelectorColorSpace,
  VideoSelectorColorSpaceUsage,
  WavCodingMode,
  WebvttDestinationStyleControl,
} from "./enums";

/**
 * Reference to an OutputDestination ID defined in the channel
 * @public
 */
export interface OutputLocationRef {
  /**
   * Placeholder documentation for __string
   * @public
   */
  DestinationRefId?: string | undefined;
}

/**
 * Additional output destinations for a CMAF Ingest output group
 * @public
 */
export interface AdditionalDestinations {
  /**
   * The destination location
   * @public
   */
  Destination: OutputLocationRef | undefined;
}

/**
 * Input Channel Level
 * @public
 */
export interface InputChannelLevel {
  /**
   * Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.
   * @public
   */
  Gain: number | undefined;

  /**
   * The index of the input channel used as a source.
   * @public
   */
  InputChannel: number | undefined;
}

/**
 * Audio Channel Mapping
 * @public
 */
export interface AudioChannelMapping {
  /**
   * Indices and gain values for each input channel that should be remixed into this output channel.
   * @public
   */
  InputChannelLevels: InputChannelLevel[] | undefined;

  /**
   * The index of the output channel being produced.
   * @public
   */
  OutputChannel: number | undefined;
}

/**
 * Audio Normalization Settings
 * @public
 */
export interface AudioNormalizationSettings {
  /**
   * Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification.
   * @public
   */
  Algorithm?: AudioNormalizationAlgorithm | undefined;

  /**
   * When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted.
   * @public
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | undefined;

  /**
   * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
   * @public
   */
  TargetLkfs?: number | undefined;
}

/**
 * Nielsen CBET
 * @public
 */
export interface NielsenCBET {
  /**
   * Enter the CBET check digits to use in the watermark.
   * @public
   */
  CbetCheckDigitString: string | undefined;

  /**
   * Determines the method of CBET insertion mode when prior encoding is detected on the same layer.
   * @public
   */
  CbetStepaside: NielsenWatermarksCbetStepaside | undefined;

  /**
   * Enter the CBET Source ID (CSID) to use in the watermark
   * @public
   */
  Csid: string | undefined;
}

/**
 * Nielsen Naes Ii Nw
 * @public
 */
export interface NielsenNaesIiNw {
  /**
   * Enter the check digit string for the watermark
   * @public
   */
  CheckDigitString: string | undefined;

  /**
   * Enter the Nielsen Source ID (SID) to include in the watermark
   * @public
   */
  Sid: number | undefined;

  /**
   * Choose the timezone for the time stamps in the watermark. If not provided,
   * the timestamps will be in Coordinated Universal Time (UTC)
   * @public
   */
  Timezone?: NielsenWatermarkTimezones | undefined;
}

/**
 * Nielsen Watermarks Settings
 * @public
 */
export interface NielsenWatermarksSettings {
  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen CBET
   * @public
   */
  NielsenCbetSettings?: NielsenCBET | undefined;

  /**
   * Choose the distribution types that you want to assign to the watermarks:
   * - PROGRAM_CONTENT
   * - FINAL_DISTRIBUTOR
   * @public
   */
  NielsenDistributionType?: NielsenWatermarksDistributionTypes | undefined;

  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
   * @public
   */
  NielsenNaesIiNwSettings?: NielsenNaesIiNw | undefined;
}

/**
 * Audio Watermark Settings
 * @public
 */
export interface AudioWatermarkSettings {
  /**
   * Settings to configure Nielsen Watermarks in the audio encode
   * @public
   */
  NielsenWatermarksSettings?: NielsenWatermarksSettings | undefined;
}

/**
 * Aac Settings
 * @public
 */
export interface AacSettings {
  /**
   * Average bitrate in bits/second. Valid values depend on rate control mode and profile.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   * @public
   */
  CodingMode?: AacCodingMode | undefined;

  /**
   * Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.
   *
   * Leave set to "normal" when input does not contain pre-mixed audio + AD.
   * @public
   */
  InputType?: AacInputType | undefined;

  /**
   * AAC Profile.
   * @public
   */
  Profile?: AacProfile | undefined;

  /**
   * Rate Control Mode.
   * @public
   */
  RateControlMode?: AacRateControlMode | undefined;

  /**
   * Sets LATM / LOAS AAC output for raw containers.
   * @public
   */
  RawFormat?: AacRawFormat | undefined;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   * @public
   */
  Spec?: AacSpec | undefined;

  /**
   * VBR Quality Level - Only used if rateControlMode is VBR.
   * @public
   */
  VbrQuality?: AacVbrQuality | undefined;
}

/**
 * Ac3 Settings
 * @public
 */
export interface Ac3Settings {
  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.
   * @public
   */
  BitstreamMode?: Ac3BitstreamMode | undefined;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Ac3CodingMode | undefined;

  /**
   * Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   * @public
   */
  DrcProfile?: Ac3DrcProfile | undefined;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode.
   * @public
   */
  LfeFilter?: Ac3LfeFilter | undefined;

  /**
   * When set to "followInput", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Ac3MetadataControl | undefined;

  /**
   * Applies a 3 dB attenuation to the surround channels. Applies only when the coding mode parameter is CODING_MODE_3_2_LFE.
   * @public
   */
  AttenuationControl?: Ac3AttenuationControl | undefined;
}

/**
 * Eac3 Atmos Settings
 * @public
 */
export interface Eac3AtmosSettings {
  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Dolby Digital Plus with Dolby Atmos coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Eac3AtmosCodingMode | undefined;

  /**
   * Sets the dialnorm for the output. Default 23.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Sets the Dolby dynamic range compression profile.
   * @public
   */
  DrcLine?: Eac3AtmosDrcLine | undefined;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   * @public
   */
  DrcRf?: Eac3AtmosDrcRf | undefined;

  /**
   * Height dimensional trim. Sets the maximum amount to attenuate the height channels when the downstream player isn??t configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.
   * @public
   */
  HeightTrim?: number | undefined;

  /**
   * Surround dimensional trim. Sets the maximum amount to attenuate the surround channels when the downstream player isn't configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.
   * @public
   */
  SurroundTrim?: number | undefined;
}

/**
 * Eac3 Settings
 * @public
 */
export interface Eac3Settings {
  /**
   * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  AttenuationControl?: Eac3AttenuationControl | undefined;

  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.
   * @public
   */
  BitstreamMode?: Eac3BitstreamMode | undefined;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   * @public
   */
  CodingMode?: Eac3CodingMode | undefined;

  /**
   * When set to enabled, activates a DC highpass filter for all input channels.
   * @public
   */
  DcFilter?: Eac3DcFilter | undefined;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   * @public
   */
  Dialnorm?: number | undefined;

  /**
   * Sets the Dolby dynamic range compression profile.
   * @public
   */
  DrcLine?: Eac3DrcLine | undefined;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   * @public
   */
  DrcRf?: Eac3DrcRf | undefined;

  /**
   * When encoding 3/2 audio, setting to lfe enables the LFE channel
   * @public
   */
  LfeControl?: Eac3LfeControl | undefined;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.
   * @public
   */
  LfeFilter?: Eac3LfeFilter | undefined;

  /**
   * Left only/Right only center mix level. Only used for 3/2 coding mode.
   * @public
   */
  LoRoCenterMixLevel?: number | undefined;

  /**
   * Left only/Right only surround mix level. Only used for 3/2 coding mode.
   * @public
   */
  LoRoSurroundMixLevel?: number | undefined;

  /**
   * Left total/Right total center mix level. Only used for 3/2 coding mode.
   * @public
   */
  LtRtCenterMixLevel?: number | undefined;

  /**
   * Left total/Right total surround mix level. Only used for 3/2 coding mode.
   * @public
   */
  LtRtSurroundMixLevel?: number | undefined;

  /**
   * When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   * @public
   */
  MetadataControl?: Eac3MetadataControl | undefined;

  /**
   * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   * @public
   */
  PassthroughControl?: Eac3PassthroughControl | undefined;

  /**
   * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.
   * @public
   */
  PhaseControl?: Eac3PhaseControl | undefined;

  /**
   * Stereo downmix preference. Only used for 3/2 coding mode.
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
 * Mp2 Settings
 * @public
 */
export interface Mp2Settings {
  /**
   * Average bitrate in bits/second.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
   * @public
   */
  CodingMode?: Mp2CodingMode | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Pass Through Settings
 * @public
 */
export interface PassThroughSettings {}

/**
 * Wav Settings
 * @public
 */
export interface WavSettings {
  /**
   * Bits per sample.
   * @public
   */
  BitDepth?: number | undefined;

  /**
   * The audio coding mode for the WAV audio. The mode determines the number of channels in the audio.
   * @public
   */
  CodingMode?: WavCodingMode | undefined;

  /**
   * Sample rate in Hz.
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Audio Codec Settings
 * @public
 */
export interface AudioCodecSettings {
  /**
   * Aac Settings
   * @public
   */
  AacSettings?: AacSettings | undefined;

  /**
   * Ac3 Settings
   * @public
   */
  Ac3Settings?: Ac3Settings | undefined;

  /**
   * Eac3 Atmos Settings
   * @public
   */
  Eac3AtmosSettings?: Eac3AtmosSettings | undefined;

  /**
   * Eac3 Settings
   * @public
   */
  Eac3Settings?: Eac3Settings | undefined;

  /**
   * Mp2 Settings
   * @public
   */
  Mp2Settings?: Mp2Settings | undefined;

  /**
   * Pass Through Settings
   * @public
   */
  PassThroughSettings?: PassThroughSettings | undefined;

  /**
   * Wav Settings
   * @public
   */
  WavSettings?: WavSettings | undefined;
}

/**
 * Remix Settings
 * @public
 */
export interface RemixSettings {
  /**
   * Mapping of input channels to output channels, with appropriate gain adjustments.
   * @public
   */
  ChannelMappings: AudioChannelMapping[] | undefined;

  /**
   * Number of input channels to be used.
   * @public
   */
  ChannelsIn?: number | undefined;

  /**
   * Number of output channels to be produced.
   * Valid values: 1, 2, 4, 6, 8
   * @public
   */
  ChannelsOut?: number | undefined;
}

/**
 * Audio Description
 * @public
 */
export interface AudioDescription {
  /**
   * Advanced audio normalization settings.
   * @public
   */
  AudioNormalizationSettings?: AudioNormalizationSettings | undefined;

  /**
   * The name of the AudioSelector used as the source for this AudioDescription.
   * @public
   */
  AudioSelectorName: string | undefined;

  /**
   * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
   * @public
   */
  AudioType?: AudioType | undefined;

  /**
   * Determines how audio type is determined.
   *   followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.
   *   useConfigured: The value in Audio Type is included in the output.
   * Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
   * @public
   */
  AudioTypeControl?: AudioDescriptionAudioTypeControl | undefined;

  /**
   * Settings to configure one or more solutions that insert audio watermarks in the audio encode
   * @public
   */
  AudioWatermarkingSettings?: AudioWatermarkSettings | undefined;

  /**
   * Audio codec settings.
   * @public
   */
  CodecSettings?: AudioCodecSettings | undefined;

  /**
   * RFC 5646 language code representing the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
   * @public
   */
  LanguageCodeControl?: AudioDescriptionLanguageCodeControl | undefined;

  /**
   * The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.
   * @public
   */
  Name: string | undefined;

  /**
   * Settings that control how input audio channels are remixed into the output audio channels.
   * @public
   */
  RemixSettings?: RemixSettings | undefined;

  /**
   * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).
   * @public
   */
  StreamName?: string | undefined;

  /**
   * Identifies the DASH roles to assign to this audio output. Applies only when the audio output is configured for DVB DASH accessibility signaling.
   * @public
   */
  AudioDashRoles?: DashRoleAudio[] | undefined;

  /**
   * Identifies DVB DASH accessibility signaling in this audio output. Used in Microsoft Smooth Streaming outputs to signal accessibility information to packagers.
   * @public
   */
  DvbDashAccessibility?: DvbDashAccessibility | undefined;
}

/**
 * Audio Hls Rendition Selection
 * @public
 */
export interface AudioHlsRenditionSelection {
  /**
   * Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   * @public
   */
  GroupId: string | undefined;

  /**
   * Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   * @public
   */
  Name: string | undefined;
}

/**
 * Audio Language Selection
 * @public
 */
export interface AudioLanguageSelection {
  /**
   * Selects a specific three-letter language code from within an audio source.
   * @public
   */
  LanguageCode: string | undefined;

  /**
   * When set to "strict", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If "loose", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can't find one with the same language.
   * @public
   */
  LanguageSelectionPolicy?: AudioLanguageSelectionPolicy | undefined;
}

/**
 * Audio Pid Selection
 * @public
 */
export interface AudioPidSelection {
  /**
   * Selects a specific PID from within a source.
   * @public
   */
  Pid: number | undefined;
}

/**
 * Audio Dolby EDecode
 * @public
 */
export interface AudioDolbyEDecode {
  /**
   * Applies only to Dolby E. Enter the program ID (according to the metadata in the audio) of the Dolby E program to extract from the specified track. One program extracted per audio selector. To select multiple programs, create multiple selectors with the same Track and different Program numbers. “All channels” means to ignore the program IDs and include all the channels in this selector; useful if metadata is known to be incorrect.
   * @public
   */
  ProgramSelection: DolbyEProgramSelection | undefined;
}

/**
 * Audio Track
 * @public
 */
export interface AudioTrack {
  /**
   * 1-based integer value that maps to a specific audio track
   * @public
   */
  Track: number | undefined;
}

/**
 * Audio Track Selection
 * @public
 */
export interface AudioTrackSelection {
  /**
   * Selects one or more unique audio tracks from within a source.
   * @public
   */
  Tracks: AudioTrack[] | undefined;

  /**
   * Configure decoding options for Dolby E streams - these should be Dolby E frames carried in PCM streams tagged with SMPTE-337
   * @public
   */
  DolbyEDecode?: AudioDolbyEDecode | undefined;
}

/**
 * Audio Selector Settings
 * @public
 */
export interface AudioSelectorSettings {
  /**
   * Audio Hls Rendition Selection
   * @public
   */
  AudioHlsRenditionSelection?: AudioHlsRenditionSelection | undefined;

  /**
   * Audio Language Selection
   * @public
   */
  AudioLanguageSelection?: AudioLanguageSelection | undefined;

  /**
   * Audio Pid Selection
   * @public
   */
  AudioPidSelection?: AudioPidSelection | undefined;

  /**
   * Audio Track Selection
   * @public
   */
  AudioTrackSelection?: AudioTrackSelection | undefined;
}

/**
 * Audio Selector
 * @public
 */
export interface AudioSelector {
  /**
   * The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.
   * @public
   */
  Name: string | undefined;

  /**
   * The audio selector settings.
   * @public
   */
  SelectorSettings?: AudioSelectorSettings | undefined;
}

/**
 * Details from a failed operation
 * @public
 */
export interface BatchFailedResultModel {
  /**
   * ARN of the resource
   * @public
   */
  Arn?: string | undefined;

  /**
   * Error code for the failed operation
   * @public
   */
  Code?: string | undefined;

  /**
   * ID of the resource
   * @public
   */
  Id?: string | undefined;

  /**
   * Error message for the failed operation
   * @public
   */
  Message?: string | undefined;
}

/**
 * Details from a successful operation
 * @public
 */
export interface BatchSuccessfulResultModel {
  /**
   * ARN of the resource
   * @public
   */
  Arn?: string | undefined;

  /**
   * ID of the resource
   * @public
   */
  Id?: string | undefined;

  /**
   * Current state of the resource
   * @public
   */
  State?: string | undefined;
}

/**
 * Arib Destination Settings
 * @public
 */
export interface AribDestinationSettings {}

/**
 * Input Location
 * @public
 */
export interface InputLocation {
  /**
   * key used to extract the password from EC2 Parameter store
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: "rtmp://fmsserver/live".
   * @public
   */
  Uri: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  Username?: string | undefined;
}

/**
 * Burn In Destination Settings
 * @public
 */
export interface BurnInDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Alignment?: BurnInAlignment | undefined;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundColor?: BurnInBackgroundColor | undefined;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Font?: InputLocation | undefined;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontColor?: BurnInFontColor | undefined;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontSize?: string | undefined;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineColor?: BurnInOutlineColor | undefined;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowColor?: BurnInShadowColor | undefined;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   * @public
   */
  TeletextGridControl?: BurnInTeletextGridControl | undefined;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  YPosition?: number | undefined;

  /**
   * Applies only when the input captions are Teletext and the output captions are DVB-Sub or Burn-In. Choose the number of lines for the captions bitmap. The captions bitmap is 700 wide × 576 high and will be laid over the video. For example, a value of 16 divides the bitmap into 16 lines, with each line 36 pixels high (16 × 36 = 576). The default is 24 (24 pixels high). Enter the same number in every encode in every output that converts the same Teletext source to DVB-Sub or Burn-in.
   * @public
   */
  SubtitleRows?: BurnInDestinationSubtitleRows | undefined;
}

/**
 * Dvb Sub Destination Settings
 * @public
 */
export interface DvbSubDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Alignment?: DvbSubDestinationAlignment | undefined;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundColor?: DvbSubDestinationBackgroundColor | undefined;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  BackgroundOpacity?: number | undefined;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  Font?: InputLocation | undefined;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontColor?: DvbSubDestinationFontColor | undefined;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontOpacity?: number | undefined;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontResolution?: number | undefined;

  /**
   * When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  FontSize?: string | undefined;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineColor?: DvbSubDestinationOutlineColor | undefined;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   * @public
   */
  OutlineSize?: number | undefined;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowColor?: DvbSubDestinationShadowColor | undefined;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowOpacity?: number | undefined;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowXOffset?: number | undefined;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  ShadowYOffset?: number | undefined;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   * @public
   */
  TeletextGridControl?: DvbSubDestinationTeletextGridControl | undefined;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  XPosition?: number | undefined;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   * @public
   */
  YPosition?: number | undefined;

  /**
   * Applies only when the input captions are Teletext and the output captions are DVB-Sub or Burn-In. Choose the number of lines for the captions bitmap. The captions bitmap is 700 wide × 576 high and will be laid over the video. For example, a value of 16 divides the bitmap into 16 lines, with each line 36 pixels high (16 × 36 = 576). The default is 24 (24 pixels high). Enter the same number in every encode in every output that converts the same Teletext source to DVB-Sub or Burn-in.
   * @public
   */
  SubtitleRows?: DvbSubDestinationSubtitleRows | undefined;
}

/**
 * Ebu Tt DDestination Settings
 * @public
 */
export interface EbuTtDDestinationSettings {
  /**
   * Complete this field if you want to include the name of the copyright holder in the copyright tag in the captions metadata.
   * @public
   */
  CopyrightHolder?: string | undefined;

  /**
   * Specifies how to handle the gap between the lines (in multi-line captions). ENABLED: Fill with the captions background color (as specified in the input captions). DISABLED: Leave the gap unfilled
   * @public
   */
  FillLineGap?: EbuTtDFillLineGapControl | undefined;

  /**
   * Specifies the font family to include in the font data attached to the EBU-TT captions. Valid only if style_control is set to include. (If style_control is set to exclude, the font family is always set to monospaced.) Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as Arial), or a generic font family (such as serif), or default (to let the downstream player choose the font). Or leave blank to set the family to monospace. Note that you can specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size.
   * @public
   */
  FontFamily?: string | undefined;

  /**
   * Specifies the style information to include in the font data that is attached to the EBU-TT captions. INCLUDE: Take the style information from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext. EXCLUDE: Set the font family to monospaced. Do not include any other style information.
   * @public
   */
  StyleControl?: EbuTtDDestinationStyleControl | undefined;

  /**
   * Specifies the default font size as a percentage of the computed cell size. Valid only if the defaultLineHeight is also set. If you leave this field empty, the default font size is 80% of the cell size.
   * @public
   */
  DefaultFontSize?: number | undefined;

  /**
   * Documentation update needed
   * @public
   */
  DefaultLineHeight?: number | undefined;
}

/**
 * Embedded Destination Settings
 * @public
 */
export interface EmbeddedDestinationSettings {}

/**
 * Embedded Plus Scte20 Destination Settings
 * @public
 */
export interface EmbeddedPlusScte20DestinationSettings {}

/**
 * Rtmp Caption Info Destination Settings
 * @public
 */
export interface RtmpCaptionInfoDestinationSettings {}

/**
 * Scte20 Plus Embedded Destination Settings
 * @public
 */
export interface Scte20PlusEmbeddedDestinationSettings {}

/**
 * Scte27 Destination Settings
 * @public
 */
export interface Scte27DestinationSettings {}

/**
 * Smpte Tt Destination Settings
 * @public
 */
export interface SmpteTtDestinationSettings {}

/**
 * Teletext Destination Settings
 * @public
 */
export interface TeletextDestinationSettings {}

/**
 * Ttml Destination Settings
 * @public
 */
export interface TtmlDestinationSettings {
  /**
   * This field is not currently supported and will not affect the output styling. Leave the default value.
   * @public
   */
  StyleControl?: TtmlDestinationStyleControl | undefined;
}

/**
 * Webvtt Destination Settings
 * @public
 */
export interface WebvttDestinationSettings {
  /**
   * Controls whether the color and position of the source captions is passed through to the WebVTT output captions.  PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT.  NO_STYLE_DATA - Don't pass through the style. The output captions will not contain any font styling information.
   * @public
   */
  StyleControl?: WebvttDestinationStyleControl | undefined;
}

/**
 * Caption Destination Settings
 * @public
 */
export interface CaptionDestinationSettings {
  /**
   * Arib Destination Settings
   * @public
   */
  AribDestinationSettings?: AribDestinationSettings | undefined;

  /**
   * Burn In Destination Settings
   * @public
   */
  BurnInDestinationSettings?: BurnInDestinationSettings | undefined;

  /**
   * Dvb Sub Destination Settings
   * @public
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings | undefined;

  /**
   * Ebu Tt DDestination Settings
   * @public
   */
  EbuTtDDestinationSettings?: EbuTtDDestinationSettings | undefined;

  /**
   * Embedded Destination Settings
   * @public
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings | undefined;

  /**
   * Embedded Plus Scte20 Destination Settings
   * @public
   */
  EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings | undefined;

  /**
   * Rtmp Caption Info Destination Settings
   * @public
   */
  RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings | undefined;

  /**
   * Scte20 Plus Embedded Destination Settings
   * @public
   */
  Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings | undefined;

  /**
   * Scte27 Destination Settings
   * @public
   */
  Scte27DestinationSettings?: Scte27DestinationSettings | undefined;

  /**
   * Smpte Tt Destination Settings
   * @public
   */
  SmpteTtDestinationSettings?: SmpteTtDestinationSettings | undefined;

  /**
   * Teletext Destination Settings
   * @public
   */
  TeletextDestinationSettings?: TeletextDestinationSettings | undefined;

  /**
   * Ttml Destination Settings
   * @public
   */
  TtmlDestinationSettings?: TtmlDestinationSettings | undefined;

  /**
   * Webvtt Destination Settings
   * @public
   */
  WebvttDestinationSettings?: WebvttDestinationSettings | undefined;
}

/**
 * Caption Description
 * @public
 */
export interface CaptionDescription {
  /**
   * Indicates whether the caption track implements accessibility features such as written descriptions of spoken dialog, music, and sounds. This signaling is added to HLS output group and MediaPackage output group.
   * @public
   */
  Accessibility?: AccessibilityType | undefined;

  /**
   * Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
   * @public
   */
  CaptionSelectorName: string | undefined;

  /**
   * Additional settings for captions destination that depend on the destination type.
   * @public
   */
  DestinationSettings?: CaptionDestinationSettings | undefined;

  /**
   * ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * Human readable information to indicate captions available for players (eg. English, or Spanish).
   * @public
   */
  LanguageDescription?: string | undefined;

  /**
   * Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.
   * @public
   */
  Name: string | undefined;

  /**
   * Identifies the DASH roles to assign to this captions output. Applies only when the captions output is configured for DVB DASH accessibility signaling.
   * @public
   */
  CaptionDashRoles?: DashRoleCaption[] | undefined;

  /**
   * Identifies DVB DASH accessibility signaling in this captions output. Used in Microsoft Smooth Streaming outputs to signal accessibility information to packagers.
   * @public
   */
  DvbDashAccessibility?: DvbDashAccessibility | undefined;
}

/**
 * Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
 * @public
 */
export interface CaptionLanguageMapping {
  /**
   * The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)
   * @public
   */
  CaptionChannel: number | undefined;

  /**
   * Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)
   * @public
   */
  LanguageCode: string | undefined;

  /**
   * Textual description of language
   * @public
   */
  LanguageDescription: string | undefined;
}

/**
 * Ancillary Source Settings
 * @public
 */
export interface AncillarySourceSettings {
  /**
   * Specifies the number (1 to 4) of the captions channel you want to extract from the ancillary captions. If you plan to convert the ancillary captions to another format, complete this field. If you plan to choose Embedded as the captions destination in the output (to pass through all the channels in the ancillary captions), leave this field blank because MediaLive ignores the field.
   * @public
   */
  SourceAncillaryChannelNumber?: number | undefined;
}

/**
 * Arib Source Settings
 * @public
 */
export interface AribSourceSettings {}

/**
 * Dvb Sub Source Settings
 * @public
 */
export interface DvbSubSourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   * @public
   */
  OcrLanguage?: DvbSubOcrLanguage | undefined;

  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   * @public
   */
  Pid?: number | undefined;
}

/**
 * Embedded Source Settings
 * @public
 */
export interface EmbeddedSourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   * @public
   */
  Convert608To708?: EmbeddedConvert608To708 | undefined;

  /**
   * Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
   * @public
   */
  Scte20Detection?: EmbeddedScte20Detection | undefined;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   * @public
   */
  Source608ChannelNumber?: number | undefined;

  /**
   * This field is unused and deprecated.
   * @public
   */
  Source608TrackNumber?: number | undefined;
}

/**
 * Scte20 Source Settings
 * @public
 */
export interface Scte20SourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   * @public
   */
  Convert608To708?: Scte20Convert608To708 | undefined;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   * @public
   */
  Source608ChannelNumber?: number | undefined;
}

/**
 * Scte27 Source Settings
 * @public
 */
export interface Scte27SourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   * @public
   */
  OcrLanguage?: Scte27OcrLanguage | undefined;

  /**
   * The pid field is used in conjunction with the caption selector languageCode field as follows:
   *   - Specify PID and Language: Extracts captions from that PID; the language is "informational".
   *   - Specify PID and omit Language: Extracts the specified PID.
   *   - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.
   *   - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through.
   * @public
   */
  Pid?: number | undefined;
}

/**
 * Caption Rectangle
 * @public
 */
export interface CaptionRectangle {
  /**
   * See the description in leftOffset.
   * For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, \"80\" means the rectangle height is 80% of the underlying frame height. The topOffset and rectangleHeight must add up to 100% or less.
   * This field corresponds to tts:extent - Y in the TTML standard.
   * @public
   */
  Height: number | undefined;

  /**
   * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don't have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages.
   * If you specify a value for one of these fields, you must specify a value for all of them.
   * For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame.
   * This field corresponds to tts:origin - X in the TTML standard.
   * @public
   */
  LeftOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For topOffset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame.
   * This field corresponds to tts:origin - Y in the TTML standard.
   * @public
   */
  TopOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, \"80\" means the rectangle width is 80% of the underlying frame width. The leftOffset and rectangleWidth must add up to 100% or less.
   * This field corresponds to tts:extent - X in the TTML standard.
   * @public
   */
  Width: number | undefined;
}

/**
 * Teletext Source Settings
 * @public
 */
export interface TeletextSourceSettings {
  /**
   * Optionally defines a region where TTML style captions will be displayed
   * @public
   */
  OutputRectangle?: CaptionRectangle | undefined;

  /**
   * Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.
   * @public
   */
  PageNumber?: string | undefined;
}

/**
 * Caption Selector Settings
 * @public
 */
export interface CaptionSelectorSettings {
  /**
   * Ancillary Source Settings
   * @public
   */
  AncillarySourceSettings?: AncillarySourceSettings | undefined;

  /**
   * Arib Source Settings
   * @public
   */
  AribSourceSettings?: AribSourceSettings | undefined;

  /**
   * Dvb Sub Source Settings
   * @public
   */
  DvbSubSourceSettings?: DvbSubSourceSettings | undefined;

  /**
   * Embedded Source Settings
   * @public
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings | undefined;

  /**
   * Scte20 Source Settings
   * @public
   */
  Scte20SourceSettings?: Scte20SourceSettings | undefined;

  /**
   * Scte27 Source Settings
   * @public
   */
  Scte27SourceSettings?: Scte27SourceSettings | undefined;

  /**
   * Teletext Source Settings
   * @public
   */
  TeletextSourceSettings?: TeletextSourceSettings | undefined;
}

/**
 * Caption Selector
 * @public
 */
export interface CaptionSelector {
  /**
   * When specified this field indicates the three letter language code of the caption track to extract from the source.
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.
   * @public
   */
  Name: string | undefined;

  /**
   * Caption selector settings.
   * @public
   */
  SelectorSettings?: CaptionSelectorSettings | undefined;
}

/**
 * An alert on a channel
 * @public
 */
export interface ChannelAlert {
  /**
   * The type of the alert
   * @public
   */
  AlertType?: string | undefined;

  /**
   * The time when the alert was cleared
   * @public
   */
  ClearedTimestamp?: Date | undefined;

  /**
   * The unique ID for this alert instance
   * @public
   */
  Id?: string | undefined;

  /**
   * The user facing alert message which can have more context
   * @public
   */
  Message?: string | undefined;

  /**
   * The ID of the pipeline this alert is associated with
   * @public
   */
  PipelineId?: string | undefined;

  /**
   * The time when the alert was set
   * @public
   */
  SetTimestamp?: Date | undefined;

  /**
   * The state of the alert
   * @public
   */
  State?: ChannelAlertState | undefined;
}

/**
 * Placeholder documentation for ChannelEgressEndpoint
 * @public
 */
export interface ChannelEgressEndpoint {
  /**
   * Public IP of where a channel's output comes from
   * @public
   */
  SourceIp?: string | undefined;
}

/**
 * Placeholder documentation for ChannelEngineVersionResponse
 * @public
 */
export interface ChannelEngineVersionResponse {
  /**
   * The UTC time when the version expires.
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The build identifier for this version of the channel version.
   * @public
   */
  Version?: string | undefined;
}

/**
 * Elemental anywhere settings
 * @public
 */
export interface DescribeAnywhereSettings {
  /**
   * The ID of the channel placement group for the channel.
   * @public
   */
  ChannelPlacementGroupId?: string | undefined;

  /**
   * The ID of the cluster for the channel.
   * @public
   */
  ClusterId?: string | undefined;
}

/**
 * Placeholder documentation for CdiInputSpecification
 * @public
 */
export interface CdiInputSpecification {
  /**
   * Maximum CDI input resolution
   * @public
   */
  Resolution?: CdiInputResolution | undefined;
}

/**
 * MediaPackage Output Destination Settings
 * @public
 */
export interface MediaPackageOutputDestinationSettings {
  /**
   * ID of the channel in MediaPackage that is the destination for this output group. You do not need to specify the individual inputs in MediaPackage; MediaLive will handle the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same region.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * Name of the channel group in MediaPackageV2. Only use if you are sending CMAF Ingest output to a CMAF ingest endpoint on a MediaPackage channel that uses MediaPackage v2.
   * @public
   */
  ChannelGroup?: string | undefined;

  /**
   * Name of the channel in MediaPackageV2. Only use if you are sending CMAF Ingest output to a CMAF ingest endpoint on a MediaPackage channel that uses MediaPackage v2.
   * @public
   */
  ChannelName?: string | undefined;
}

/**
 * Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex
 * @public
 */
export interface MultiplexProgramChannelDestinationSettings {
  /**
   * The ID of the Multiplex that the encoder is providing output to. You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances.
   * The Multiplex must be in the same region as the Channel.
   * @public
   */
  MultiplexId?: string | undefined;

  /**
   * The program name of the Multiplex program that the encoder is providing output to.
   * @public
   */
  ProgramName?: string | undefined;
}

/**
 * Placeholder documentation for OutputDestinationSettings
 * @public
 */
export interface OutputDestinationSettings {
  /**
   * key used to extract the password from EC2 Parameter store
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * Stream name for RTMP destinations (URLs of type rtmp://)
   * @public
   */
  StreamName?: string | undefined;

  /**
   * A URL specifying a destination
   * @public
   */
  Url?: string | undefined;

  /**
   * username for destination
   * @public
   */
  Username?: string | undefined;
}

/**
 * Placeholder documentation for SrtOutputDestinationSettings
 * @public
 */
export interface SrtOutputDestinationSettings {
  /**
   * Arn used to extract the password from Secrets Manager
   * @public
   */
  EncryptionPassphraseSecretArn?: string | undefined;

  /**
   * Stream id for SRT destinations (URLs of type srt://)
   * @public
   */
  StreamId?: string | undefined;

  /**
   * A URL specifying a destination
   * @public
   */
  Url?: string | undefined;
}

/**
 * Placeholder documentation for OutputDestination
 * @public
 */
export interface OutputDestination {
  /**
   * User-specified id. This is used in an output group or an output.
   * @public
   */
  Id?: string | undefined;

  /**
   * Destination settings for a MediaPackage output; one destination for both encoders.
   * @public
   */
  MediaPackageSettings?: MediaPackageOutputDestinationSettings[] | undefined;

  /**
   * Destination settings for a Multiplex output; one destination for both encoders.
   * @public
   */
  MultiplexSettings?: MultiplexProgramChannelDestinationSettings | undefined;

  /**
   * Destination settings for a standard output; one destination for each redundant encoder.
   * @public
   */
  Settings?: OutputDestinationSettings[] | undefined;

  /**
   * SRT settings for an SRT output; one destination for each redundant encoder.
   * @public
   */
  SrtSettings?: SrtOutputDestinationSettings[] | undefined;

  /**
   * Optional assignment of an output to a logical interface on the Node. Only applies to on premises channels.
   * @public
   */
  LogicalInterfaceNames?: string[] | undefined;
}

/**
 * Placeholder documentation for AudioSilenceFailoverSettings
 * @public
 */
export interface AudioSilenceFailoverSettings {
  /**
   * The name of the audio selector in the input that MediaLive should monitor to detect silence. Select your most important rendition. If you didn't create an audio selector in this input, leave blank.
   * @public
   */
  AudioSelectorName: string | undefined;

  /**
   * The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.
   * @public
   */
  AudioSilenceThresholdMsec?: number | undefined;
}

/**
 * MediaLive will perform a failover if content is not detected in this input for the specified period.
 * @public
 */
export interface InputLossFailoverSettings {
  /**
   * The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.
   * @public
   */
  InputLossThresholdMsec?: number | undefined;
}

/**
 * Placeholder documentation for VideoBlackFailoverSettings
 * @public
 */
export interface VideoBlackFailoverSettings {
  /**
   * A value used in calculating the threshold below which MediaLive considers a pixel to be 'black'. For the input to be considered black, every pixel in a frame must be below this threshold. The threshold is calculated as a percentage (expressed as a decimal) of white. Therefore .1 means 10% white (or 90% black). Note how the formula works for any color depth. For example, if you set this field to 0.1 in 10-bit color depth: (1023*0.1=102.3), which means a pixel value of 102 or less is 'black'. If you set this field to .1 in an 8-bit color depth: (255*0.1=25.5), which means a pixel value of 25 or less is 'black'. The range is 0.0 to 1.0, with any number of decimal places.
   * @public
   */
  BlackDetectThreshold?: number | undefined;

  /**
   * The amount of time (in milliseconds) that the active input must be black before automatic input failover occurs.
   * @public
   */
  VideoBlackThresholdMsec?: number | undefined;
}

/**
 * Settings for one failover condition.
 * @public
 */
export interface FailoverConditionSettings {
  /**
   * MediaLive will perform a failover if the specified audio selector is silent for the specified period.
   * @public
   */
  AudioSilenceSettings?: AudioSilenceFailoverSettings | undefined;

  /**
   * MediaLive will perform a failover if content is not detected in this input for the specified period.
   * @public
   */
  InputLossSettings?: InputLossFailoverSettings | undefined;

  /**
   * MediaLive will perform a failover if content is considered black for the specified period.
   * @public
   */
  VideoBlackSettings?: VideoBlackFailoverSettings | undefined;
}

/**
 * Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.
 * @public
 */
export interface FailoverCondition {
  /**
   * Failover condition type-specific settings.
   * @public
   */
  FailoverConditionSettings?: FailoverConditionSettings | undefined;
}

/**
 * The settings for Automatic Input Failover.
 * @public
 */
export interface AutomaticInputFailoverSettings {
  /**
   * This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input_preference for the failover pair is set to PRIMARY_INPUT_PREFERRED, because after this time, MediaLive will switch back to the primary input.
   * @public
   */
  ErrorClearTimeMsec?: number | undefined;

  /**
   * A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input.
   * @public
   */
  FailoverConditions?: FailoverCondition[] | undefined;

  /**
   * Input preference when deciding which input to make active when a previously failed input has recovered.
   * @public
   */
  InputPreference?: InputPreference | undefined;

  /**
   * The input ID of the secondary input in the automatic input failover pair.
   * @public
   */
  SecondaryInputId: string | undefined;
}

/**
 * Hls Input Settings
 * @public
 */
export interface HlsInputSettings {
  /**
   * When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest.
   * @public
   */
  Bandwidth?: number | undefined;

  /**
   * When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8.
   * @public
   */
  BufferSegments?: number | undefined;

  /**
   * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
   * @public
   */
  Retries?: number | undefined;

  /**
   * The number of seconds between retries when an attempt to read a manifest or segment fails.
   * @public
   */
  RetryInterval?: number | undefined;

  /**
   * Identifies the source for the SCTE-35 messages that MediaLive will ingest. Messages can be ingested from the content segments (in the stream) or from tags in the playlist (the HLS manifest). MediaLive ignores SCTE-35 information in the source that is not selected.
   * @public
   */
  Scte35Source?: HlsScte35SourceType | undefined;
}

/**
 * Multicast-specific input settings.
 * @public
 */
export interface MulticastInputSettings {
  /**
   * Optionally, a source ip address to filter by for Source-specific Multicast (SSM)
   * @public
   */
  SourceIpAddress?: string | undefined;
}

/**
 * Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
 * @public
 */
export interface NetworkInputSettings {
  /**
   * Specifies HLS input settings when the uri is for a HLS manifest.
   * @public
   */
  HlsInputSettings?: HlsInputSettings | undefined;

  /**
   * Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.
   * @public
   */
  ServerValidation?: NetworkInputServerValidation | undefined;

  /**
   * Specifies multicast input settings when the uri is for a multicast event.
   * @public
   */
  MulticastInputSettings?: MulticastInputSettings | undefined;
}

/**
 * Hdr10 Settings
 * @public
 */
export interface Hdr10Settings {
  /**
   * Maximum Content Light Level
   * An integer metadata value defining the maximum light level, in nits,
   * of any single pixel within an encoded HDR video stream or file.
   * @public
   */
  MaxCll?: number | undefined;

  /**
   * Maximum Frame Average Light Level
   * An integer metadata value defining the maximum average light level, in nits,
   * for any single frame within an encoded HDR video stream or file.
   * @public
   */
  MaxFall?: number | undefined;
}

/**
 * Video Selector Color Space Settings
 * @public
 */
export interface VideoSelectorColorSpaceSettings {
  /**
   * Hdr10 Settings
   * @public
   */
  Hdr10Settings?: Hdr10Settings | undefined;
}

/**
 * Video Selector Pid
 * @public
 */
export interface VideoSelectorPid {
  /**
   * Selects a specific PID from within a video source.
   * @public
   */
  Pid?: number | undefined;
}

/**
 * Video Selector Program Id
 * @public
 */
export interface VideoSelectorProgramId {
  /**
   * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.
   * @public
   */
  ProgramId?: number | undefined;
}

/**
 * Video Selector Settings
 * @public
 */
export interface VideoSelectorSettings {
  /**
   * Video Selector Pid
   * @public
   */
  VideoSelectorPid?: VideoSelectorPid | undefined;

  /**
   * Video Selector Program Id
   * @public
   */
  VideoSelectorProgramId?: VideoSelectorProgramId | undefined;
}

/**
 * Specifies a particular video stream within an input source. An input may have only a single video selector.
 * @public
 */
export interface VideoSelector {
  /**
   * Controls how MediaLive will use the color space metadata from the source. Typically, choose FOLLOW, which means to use the color space metadata without changing it. Or choose another value (a standard). In this case, the handling is controlled by the colorspaceUsage property.
   * @public
   */
  ColorSpace?: VideoSelectorColorSpace | undefined;

  /**
   * Choose HDR10 only if the following situation applies. Firstly, you specified HDR10 in ColorSpace. Secondly, the attached input is for AWS Elemental Link. Thirdly, you plan to convert the content to another color space. You need to specify the color space metadata that is missing from the source sent from AWS Elemental Link.
   * @public
   */
  ColorSpaceSettings?: VideoSelectorColorSpaceSettings | undefined;

  /**
   * Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
   * @public
   */
  ColorSpaceUsage?: VideoSelectorColorSpaceUsage | undefined;

  /**
   * The video selector settings.
   * @public
   */
  SelectorSettings?: VideoSelectorSettings | undefined;
}

/**
 * Live Event input parameters. There can be multiple inputs in a single Live Event.
 * @public
 */
export interface InputSettings {
  /**
   * Used to select the audio stream to decode for inputs that have multiple available.
   * @public
   */
  AudioSelectors?: AudioSelector[] | undefined;

  /**
   * Used to select the caption input to use for inputs that have multiple available.
   * @public
   */
  CaptionSelectors?: CaptionSelector[] | undefined;

  /**
   * Enable or disable the deblock filter when filtering.
   * @public
   */
  DeblockFilter?: InputDeblockFilter | undefined;

  /**
   * Enable or disable the denoise filter when filtering.
   * @public
   */
  DenoiseFilter?: InputDenoiseFilter | undefined;

  /**
   * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
   * @public
   */
  FilterStrength?: number | undefined;

  /**
   * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.
   * 1) auto - filtering will be applied depending on input type/quality
   * 2) disabled - no filtering will be applied to the input
   * 3) forced - filtering will be applied regardless of input type
   * @public
   */
  InputFilter?: InputFilter | undefined;

  /**
   * Input settings.
   * @public
   */
  NetworkInputSettings?: NetworkInputSettings | undefined;

  /**
   * PID from which to read SCTE-35 messages. If left undefined, EML will select the first SCTE-35 PID found in the input.
   * @public
   */
  Scte35Pid?: number | undefined;

  /**
   * Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input. Applicable data types are captions, timecode, AFD, and SCTE-104 messages.
   * - PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any).
   * - IGNORE: Never extract any ancillary data from SMPTE-2038.
   * @public
   */
  Smpte2038DataPreference?: Smpte2038DataPreference | undefined;

  /**
   * Loop input if it is a file. This allows a file input to be streamed indefinitely.
   * @public
   */
  SourceEndBehavior?: InputSourceEndBehavior | undefined;

  /**
   * Informs which video elementary stream to decode for input types that have multiple available.
   * @public
   */
  VideoSelector?: VideoSelector | undefined;
}

/**
 * Placeholder documentation for InputAttachment
 * @public
 */
export interface InputAttachment {
  /**
   * User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input.
   * @public
   */
  AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings | undefined;

  /**
   * User-specified name for the attachment. This is required if the user wants to use this input in an input switch action.
   * @public
   */
  InputAttachmentName?: string | undefined;

  /**
   * The ID of the input
   * @public
   */
  InputId?: string | undefined;

  /**
   * Settings of an input (caption selector, etc.)
   * @public
   */
  InputSettings?: InputSettings | undefined;

  /**
   * Optional assignment of an input to a logical interface on the Node. Only applies to on premises channels.
   * @public
   */
  LogicalInterfaceNames?: string[] | undefined;
}

/**
 * Placeholder documentation for InputSpecification
 * @public
 */
export interface InputSpecification {
  /**
   * Input codec
   * @public
   */
  Codec?: InputCodec | undefined;

  /**
   * Maximum input bitrate, categorized coarsely
   * @public
   */
  MaximumBitrate?: InputMaximumBitrate | undefined;

  /**
   * Input resolution, categorized coarsely
   * @public
   */
  Resolution?: InputResolution | undefined;
}

/**
 * Placeholder documentation for MaintenanceStatus
 * @public
 */
export interface MaintenanceStatus {
  /**
   * The currently selected maintenance day.
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * Maintenance is required by the displayed date and time. Date and time is in ISO.
   * @public
   */
  MaintenanceDeadline?: string | undefined;

  /**
   * The currently scheduled maintenance date and time. Date and time is in ISO.
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * The currently selected maintenance start time. Time is in UTC.
   * @public
   */
  MaintenanceStartTime?: string | undefined;
}

/**
 * The properties for a private VPC Output
 * @public
 */
export interface VpcOutputSettingsDescription {
  /**
   * The Availability Zones where the vpc subnets are located.
   * The first Availability Zone applies to the first subnet in the list of subnets.
   * The second Availability Zone applies to the second subnet.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of Elastic Network Interfaces created by MediaLive in the customer's VPC
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * A list of up EC2 VPC security group IDs attached to the Output VPC network interfaces.
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * Placeholder documentation for ChannelSummary
 * @public
 */
export interface ChannelSummary {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for any VPC outputs.
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * AnywhereSettings settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;

  /**
   * The engine version that you requested for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;

  /**
   * The engine version that the running pipelines are using.
   * @public
   */
  UsedChannelEngineVersions?: ChannelEngineVersionResponse[] | undefined;
}

/**
 * Placeholder documentation for CloudWatchAlarmTemplateGroupSummary
 * @public
 */
export interface CloudWatchAlarmTemplateGroupSummary {
  /**
   * A cloudwatch alarm template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The number of templates in a group.
   * @public
   */
  TemplateCount: number | undefined;
}

/**
 * Placeholder documentation for CloudWatchAlarmTemplateSummary
 * @public
 */
export interface CloudWatchAlarmTemplateSummary {
  /**
   * A cloudwatch alarm template's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods: number | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId: string | undefined;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period: number | undefined;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic: CloudWatchAlarmTemplateStatistic | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType: CloudWatchAlarmTemplateTargetResourceType | undefined;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold: number | undefined;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData: CloudWatchAlarmTemplateTreatMissingData | undefined;
}

/**
 * An alert on a cluster
 * @public
 */
export interface ClusterAlert {
  /**
   * The type of the alert
   * @public
   */
  AlertType?: string | undefined;

  /**
   * The ID of the channel this alert is associated with
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The time when the alert was cleared
   * @public
   */
  ClearedTimestamp?: Date | undefined;

  /**
   * The further subtype of this alert
   * @public
   */
  Id?: string | undefined;

  /**
   * The user facing alert message which can have more context
   * @public
   */
  Message?: string | undefined;

  /**
   * The ID of the node this alert is associated with
   * @public
   */
  NodeId?: string | undefined;

  /**
   * The time when the alert was set
   * @public
   */
  SetTimestamp?: Date | undefined;

  /**
   * The state of the alert
   * @public
   */
  State?: ClusterAlertState | undefined;
}

/**
 * Add an array item for each language. Follow the order of the caption descriptions. For example, if the first caption description is for German, then the first array item must be for German, and its caption channel must be set to 1. The second array item must be 2, and so on.
 * @public
 */
export interface CmafIngestCaptionLanguageMapping {
  /**
   * A number for the channel for this caption, 1 to 4.
   * @public
   */
  CaptionChannel: number | undefined;

  /**
   * Language code for the language of the caption in this channel.  For example, ger/deu. See http://www.loc.gov/standards/iso639-2
   * @public
   */
  LanguageCode: string | undefined;
}

/**
 * Property of ColorCorrectionSettings. Used for custom color space conversion. The object identifies one 3D LUT file and specifies the input/output color space combination that the file will be used for.
 * @public
 */
export interface ColorCorrection {
  /**
   * The color space of the input.
   * @public
   */
  InputColorSpace: ColorSpace | undefined;

  /**
   * The color space of the output.
   * @public
   */
  OutputColorSpace: ColorSpace | undefined;

  /**
   * The URI of the 3D LUT file. The protocol must be 's3:' or 's3ssl:':.
   * @public
   */
  Uri: string | undefined;
}

/**
 * Contains the response for ListChannelPlacementGroups
 * @public
 */
export interface DescribeChannelPlacementGroupSummary {
  /**
   * The ARN of this ChannelPlacementGroup. It is automatically assigned when the ChannelPlacementGroup is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array with one item, which is the single Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[] | undefined;

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState | undefined;
}

/**
 * Used in ClusterNetworkSettings
 * @public
 */
export interface InterfaceMapping {
  /**
   * The logical name for one interface (on every Node) that handles a specific type of traffic. We recommend that the name hints at the physical interface it applies to. For example, it could refer to the traffic that the physical interface handles. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The ID of the network that you want to connect to the specified logicalInterfaceName.
   * @public
   */
  NetworkId?: string | undefined;
}

/**
 * Used in DescribeClusterResult, DescribeClusterSummary, UpdateClusterResult.
 * @public
 */
export interface ClusterNetworkSettings {
  /**
   * The network interface that is the default route for traffic to and from the node. MediaLive Anywhere uses this default when the destination for the traffic isn't covered by the route table for any of the networks. Specify the value of the appropriate logicalInterfaceName parameter that you create in the interfaceMappings.
   * @public
   */
  DefaultRoute?: string | undefined;

  /**
   * An array of interfaceMapping objects for this Cluster. Each mapping logically connects one interface on the nodes with one Network. You need only one mapping for each interface because all the Nodes share the mapping.
   * @public
   */
  InterfaceMappings?: InterfaceMapping[] | undefined;
}

/**
 * Used in ListClustersResult.
 * @public
 */
export interface DescribeClusterSummary {
  /**
   * The ARN of this Cluster. It is automatically assigned when the Cluster is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * An array of the IDs of the Channels that are associated with this Cluster. One Channel is associated with the Cluster as follows: A Channel belongs to a ChannelPlacementGroup. A ChannelPlacementGroup is attached to a Node. A Node belongs to a Cluster.
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * The hardware type for the Cluster.
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The ID of the Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings | undefined;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState | undefined;
}

/**
 * Used in DescribeNetworkResult, DescribeNetworkSummary, UpdateNetworkResult.
 * @public
 */
export interface IpPool {
  /**
   * A CIDR block of IP addresses that are reserved for MediaLive Anywhere.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Used in DescribeNetworkResult, DescribeNetworkSummary, UpdateNetworkResult.
 * @public
 */
export interface Route {
  /**
   * A CIDR block for one Route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The IP address of the Gateway for this route, if applicable.
   * @public
   */
  Gateway?: string | undefined;
}

/**
 * Used in ListNetworksResult.
 * @public
 */
export interface DescribeNetworkSummary {
  /**
   * The ARN of this Network. It is automatically assigned when the Network is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[] | undefined;

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in your organization's network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[] | undefined;

  /**
   * The name that you specified for this Network.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState | undefined;
}

/**
 * A mapping that's used to pair a logical network interface name on a Node with the physical interface name exposed in the operating system.
 * @public
 */
export interface NodeInterfaceMapping {
  /**
   * A uniform logical interface name to address in a MediaLive channel configuration.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * Used in NodeInterfaceMapping and NodeInterfaceMappingCreateRequest
   * @public
   */
  NetworkInterfaceMode?: NetworkInterfaceMode | undefined;

  /**
   * The name of the physical interface on the hardware that will be running Elemental anywhere.
   * @public
   */
  PhysicalInterfaceName?: string | undefined;
}

/**
 * Used in DescribeNodeSummary, DescribeNodeResult.
 * @public
 */
export interface SdiSourceMapping {
  /**
   * A number that uniquely identifies the SDI card on the node hardware.
   * @public
   */
  CardNumber?: number | undefined;

  /**
   * A number that uniquely identifies a port on the SDI card.
   * @public
   */
  ChannelNumber?: number | undefined;

  /**
   * The ID of the SdiSource to associate with this port on this card. You can use the ListSdiSources operation to discover all the IDs.
   * @public
   */
  SdiSource?: string | undefined;
}

/**
 * Placeholder documentation for DescribeNodeSummary
 * @public
 */
export interface DescribeNodeSummary {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The EC2 ARN of the Instance associated with the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * At the routing layer will get it from the callerId/context for use with bring your own device.
   * @public
   */
  ManagedInstanceId?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;

  /**
   * An array of SDI source mappings. Each mapping connects one logical SdiSource to the physical SDI card and port that the physical SDI source uses.
   * @public
   */
  SdiSourceMappings?: SdiSourceMapping[] | undefined;
}

/**
 * Placeholder documentation for EventBridgeRuleTemplateGroupSummary
 * @public
 */
export interface EventBridgeRuleTemplateGroupSummary {
  /**
   * An eventbridge rule template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The number of templates in a group.
   * @public
   */
  TemplateCount: number | undefined;
}

/**
 * Placeholder documentation for EventBridgeRuleTemplateSummary
 * @public
 */
export interface EventBridgeRuleTemplateSummary {
  /**
   * An eventbridge rule template's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of targets configured to send matching events.
   * @public
   */
  EventTargetCount: number | undefined;

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId: string | undefined;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The target to which to send matching events.
 * @public
 */
export interface EventBridgeRuleTemplateTarget {
  /**
   * Target ARNs must be either an SNS topic or CloudWatch log group.
   * @public
   */
  Arn: string | undefined;
}

/**
 * A network route configuration.
 * @public
 */
export interface InputDestinationRoute {
  /**
   * The CIDR of the route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * An optional gateway for the route.
   * @public
   */
  Gateway?: string | undefined;
}

/**
 * The properties for a VPC type input destination.
 * @public
 */
export interface InputDestinationVpc {
  /**
   * The availability zone of the Input destination.
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The network interface ID of the Input destination in the VPC.
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * The settings for a PUSH type input.
 * @public
 */
export interface InputDestination {
  /**
   * The system-generated static IP address of endpoint.
   * It remains fixed for the lifetime of the input.
   * @public
   */
  Ip?: string | undefined;

  /**
   * The port number for the input.
   * @public
   */
  Port?: string | undefined;

  /**
   * This represents the endpoint that the customer stream will be
   * pushed to.
   * @public
   */
  Url?: string | undefined;

  /**
   * The properties for a VPC type input destination.
   * @public
   */
  Vpc?: InputDestinationVpc | undefined;

  /**
   * The ID of the attached network.
   * @public
   */
  Network?: string | undefined;

  /**
   * If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input
   * is going to be on the customer local network.
   * @public
   */
  NetworkRoutes?: InputDestinationRoute[] | undefined;
}

/**
 * Settings for an input device.
 * @public
 */
export interface InputDeviceSettings {
  /**
   * The unique ID for the device.
   * @public
   */
  Id?: string | undefined;
}

/**
 * The settings for a MediaConnect Flow.
 * @public
 */
export interface MediaConnectFlow {
  /**
   * The unique ARN of the MediaConnect Flow being used as a source.
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * Pair of multicast url and source ip address (optional) that make up a multicast source.
 * @public
 */
export interface MulticastSource {
  /**
   * This represents the ip address of the device sending the multicast stream.
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * This represents the customer's source URL where multicast stream is pulled from.
   * @public
   */
  Url: string | undefined;
}

/**
 * Settings for a Multicast input. Contains a list of multicast Urls and optional source ip addresses.
 * @public
 */
export interface MulticastSettings {
  /**
   * Placeholder documentation for __listOfMulticastSource
   * @public
   */
  Sources?: MulticastSource[] | undefined;
}

/**
 * Placeholder documentation for RouterDestination
 * @public
 */
export interface RouterDestination {
  /**
   * The Availability Zone (AZ) names of the AZs this destination is created in.
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * ARN of the output from MediaConnect Router currently connected to this input.
   * @public
   */
  RouterOutputArn?: string | undefined;
}

/**
 * The settings for a MediaConnect Router Input.
 * @public
 */
export interface RouterInputSettings {
  /**
   * MediaConnect Router destinations associated with the MediaLive Input.
   * @public
   */
  Destinations?: RouterDestination[] | undefined;

  /**
   * Encryption configuration for MediaConnect router. When using SECRETS_MANAGER encryption, you must provide the ARN of the secret used to encrypt data in transit. When using AUTOMATIC encryption, a service-managed secret will be used instead.
   * @public
   */
  EncryptionType?: RouterEncryptionType | undefined;

  /**
   * ARN of the secret used to encrypt this input.
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * The location of the SDP file for one of the SMPTE 2110 streams in a receiver group.
 * @public
 */
export interface InputSdpLocation {
  /**
   * The index of the media stream in the SDP file for one SMPTE 2110 stream.
   * @public
   */
  MediaIndex?: number | undefined;

  /**
   * The URL of the SDP file for one SMPTE 2110 stream.
   * @public
   */
  SdpUrl?: string | undefined;
}

/**
 * Information about the SDP files that describe the SMPTE 2110 streams that go into one SMPTE 2110 receiver group.
 * @public
 */
export interface Smpte2110ReceiverGroupSdpSettings {
  /**
   * A list of InputSdpLocations. Each item in the list specifies the SDP file and index for one ancillary SMPTE 2110 stream.
   * Each stream encapsulates one captions stream (out of any number you can include) or the single SCTE 35 stream that you can include.
   * @public
   */
  AncillarySdps?: InputSdpLocation[] | undefined;

  /**
   * A list of InputSdpLocations. Each item in the list specifies the SDP file and index for one audio SMPTE 2110 stream.
   * @public
   */
  AudioSdps?: InputSdpLocation[] | undefined;

  /**
   * The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input.
   * @public
   */
  VideoSdp?: InputSdpLocation | undefined;
}

/**
 * A receiver group is a collection of video, audio, and ancillary streams that you want to group together and attach to one input.
 * @public
 */
export interface Smpte2110ReceiverGroup {
  /**
   * The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group.
   * @public
   */
  SdpSettings?: Smpte2110ReceiverGroupSdpSettings | undefined;
}

/**
 * Configures the sources for the SMPTE 2110 Receiver Group input.
 * @public
 */
export interface Smpte2110ReceiverGroupSettings {
  /**
   * Placeholder documentation for __listOfSmpte2110ReceiverGroup
   * @public
   */
  Smpte2110ReceiverGroups?: Smpte2110ReceiverGroup[] | undefined;
}

/**
 * The settings for a PULL type input.
 * @public
 */
export interface InputSource {
  /**
   * The key used to extract the password from EC2 Parameter store.
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   * @public
   */
  Url?: string | undefined;

  /**
   * The username for the input source.
   * @public
   */
  Username?: string | undefined;
}

/**
 * The decryption settings for the SRT caller source. Present only if the source has decryption enabled.
 * @public
 */
export interface SrtCallerDecryption {
  /**
   * The algorithm used to encrypt content.
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.
   * @public
   */
  PassphraseSecretArn?: string | undefined;
}

/**
 * The configuration for a source that uses SRT as the connection protocol. In terms of establishing the connection, MediaLive is always caller and the upstream system is always the listener. In terms of transmission of the source content, MediaLive is always the receiver and the upstream system is always the sender.
 * @public
 */
export interface SrtCallerSource {
  /**
   * The decryption settings for the SRT caller source. Present only if the source has decryption enabled.
   * @public
   */
  Decryption?: SrtCallerDecryption | undefined;

  /**
   * The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.
   * @public
   */
  MinimumLatency?: number | undefined;

  /**
   * The IP address at the upstream system (the listener) that MediaLive (the caller) connects to.
   * @public
   */
  SrtListenerAddress?: string | undefined;

  /**
   * The port at the upstream system (the listener) that MediaLive (the caller) connects to.
   * @public
   */
  SrtListenerPort?: string | undefined;

  /**
   * The stream ID, if the upstream system uses this identifier.
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * The configured sources for this SRT input.
 * @public
 */
export interface SrtSettings {
  /**
   * Placeholder documentation for __listOfSrtCallerSource
   * @public
   */
  SrtCallerSources?: SrtCallerSource[] | undefined;
}

/**
 * Placeholder documentation for Input
 * @public
 */
export interface Input {
  /**
   * The Unique ARN of the input (generated, immutable).
   * @public
   */
  Arn?: string | undefined;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   * @public
   */
  AttachedChannels?: string[] | undefined;

  /**
   * A list of the destinations of the input (PUSH-type).
   * @public
   */
  Destinations?: InputDestination[] | undefined;

  /**
   * The generated ID of the input (unique for user account, immutable).
   * @public
   */
  Id?: string | undefined;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   * @public
   */
  InputClass?: InputClass | undefined;

  /**
   * Settings for the input devices.
   * @public
   */
  InputDevices?: InputDeviceSettings[] | undefined;

  /**
   * A list of IDs for all Inputs which are partners of this one.
   * @public
   */
  InputPartnerIds?: string[] | undefined;

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   * @public
   */
  InputSourceType?: InputSourceType | undefined;

  /**
   * A list of MediaConnect Flows for this input.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlow[] | undefined;

  /**
   * The user-assigned name (This is a mutable value).
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * A list of the sources of the input (PULL-type).
   * @public
   */
  Sources?: InputSource[] | undefined;

  /**
   * Placeholder documentation for InputState
   * @public
   */
  State?: InputState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   * @public
   */
  Type?: InputType | undefined;

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettings | undefined;

  /**
   * The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
   * an input in a customer network.
   * @public
   */
  InputNetworkLocation?: InputNetworkLocation | undefined;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettings | undefined;

  /**
   * Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.
   * @public
   */
  Smpte2110ReceiverGroupSettings?: Smpte2110ReceiverGroupSettings | undefined;

  /**
   * SDI Sources for this Input.
   * @public
   */
  SdiSources?: string[] | undefined;

  /**
   * Information about any MediaConnect router association with this input.
   * @public
   */
  RouterSettings?: RouterInputSettings | undefined;
}

/**
 * A network route configuration.
 * @public
 */
export interface InputRequestDestinationRoute {
  /**
   * The CIDR of the route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * An optional gateway for the route.
   * @public
   */
  Gateway?: string | undefined;
}

/**
 * Endpoint settings for a PUSH type input.
 * @public
 */
export interface InputDestinationRequest {
  /**
   * A unique name for the location the RTMP stream is being pushed
   * to.
   * @public
   */
  StreamName?: string | undefined;

  /**
   * If the push input has an input location of ON-PREM, ID the ID of the attached network.
   * @public
   */
  Network?: string | undefined;

  /**
   * If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input
   * is going to be on the customer local network.
   * @public
   */
  NetworkRoutes?: InputRequestDestinationRoute[] | undefined;

  /**
   * If the push input has an input location of ON-PREM it's optional to specify what the ip address
   * of the input is going to be on the customer local network.
   * @public
   */
  StaticIpAddress?: string | undefined;
}

/**
 * One audio configuration that specifies the format for one audio pair that the device produces as output.
 * @public
 */
export interface InputDeviceConfigurableAudioChannelPairConfig {
  /**
   * The ID for one audio pair configuration, a value from 1 to 8.
   * @public
   */
  Id?: number | undefined;

  /**
   * The profile to set for one audio pair configuration. Choose an enumeration value. Each value describes one audio configuration using the format (rate control algorithm)-(codec)_(quality)-(bitrate in bytes). For example, CBR-AAC_HQ-192000. Or choose DISABLED, in which case the device won't produce audio for this pair.
   * @public
   */
  Profile?: InputDeviceConfigurableAudioChannelPairProfile | undefined;
}

/**
 * Settings for an input device.
 * @public
 */
export interface InputDeviceRequest {
  /**
   * The unique ID for the device.
   * @public
   */
  Id?: string | undefined;
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 * @public
 */
export interface InputDeviceHdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   * @public
   */
  ActiveInput?: InputDeviceActiveInput | undefined;

  /**
   * The source at the input device that is currently active. You can specify this source.
   * @public
   */
  ConfiguredInput?: InputDeviceConfiguredInput | undefined;

  /**
   * The state of the input device.
   * @public
   */
  DeviceState?: InputDeviceState | undefined;

  /**
   * The frame rate of the video source.
   * @public
   */
  Framerate?: number | undefined;

  /**
   * The height of the video source, in pixels.
   * @public
   */
  Height?: number | undefined;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The scan type of the video source.
   * @public
   */
  ScanType?: InputDeviceScanType | undefined;

  /**
   * The width of the video source, in pixels.
   * @public
   */
  Width?: number | undefined;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.
   * @public
   */
  LatencyMs?: number | undefined;
}

/**
 * The network settings for the input device.
 * @public
 */
export interface InputDeviceNetworkSettings {
  /**
   * The DNS addresses of the input device.
   * @public
   */
  DnsAddresses?: string[] | undefined;

  /**
   * The network gateway IP address.
   * @public
   */
  Gateway?: string | undefined;

  /**
   * The IP address of the input device.
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.
   * @public
   */
  IpScheme?: InputDeviceIpScheme | undefined;

  /**
   * The subnet mask of the input device.
   * @public
   */
  SubnetMask?: string | undefined;
}

/**
 * One audio configuration that specifies the format for one audio pair that the device produces as output.
 * @public
 */
export interface InputDeviceUhdAudioChannelPairConfig {
  /**
   * The ID for one audio pair configuration, a value from 1 to 8.
   * @public
   */
  Id?: number | undefined;

  /**
   * The profile for one audio pair configuration. This property describes one audio configuration in the format (rate control algorithm)-(codec)_(quality)-(bitrate in bytes). For example, CBR-AAC_HQ-192000. Or DISABLED, in which case the device won't produce audio for this pair.
   * @public
   */
  Profile?: InputDeviceUhdAudioChannelPairProfile | undefined;
}

/**
 * Information about the MediaConnect flow attached to the device.
 * @public
 */
export interface InputDeviceMediaConnectSettings {
  /**
   * The ARN of the MediaConnect flow.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN for the role that MediaLive assumes to access the attached flow and secret.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN of the secret used to encrypt the stream.
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The name of the MediaConnect flow source.
   * @public
   */
  SourceName?: string | undefined;
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 * @public
 */
export interface InputDeviceUhdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   * @public
   */
  ActiveInput?: InputDeviceActiveInput | undefined;

  /**
   * The source at the input device that is currently active. You can specify this source.
   * @public
   */
  ConfiguredInput?: InputDeviceConfiguredInput | undefined;

  /**
   * The state of the input device.
   * @public
   */
  DeviceState?: InputDeviceState | undefined;

  /**
   * The frame rate of the video source.
   * @public
   */
  Framerate?: number | undefined;

  /**
   * The height of the video source, in pixels.
   * @public
   */
  Height?: number | undefined;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The scan type of the video source.
   * @public
   */
  ScanType?: InputDeviceScanType | undefined;

  /**
   * The width of the video source, in pixels.
   * @public
   */
  Width?: number | undefined;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.
   * @public
   */
  LatencyMs?: number | undefined;

  /**
   * The codec for the video that the device produces.
   * @public
   */
  Codec?: InputDeviceCodec | undefined;

  /**
   * Information about the MediaConnect flow attached to the device. Returned only if the outputType is MEDIACONNECT_FLOW.
   * @public
   */
  MediaconnectSettings?: InputDeviceMediaConnectSettings | undefined;

  /**
   * An array of eight audio configurations, one for each audio pair in the source. Each audio configuration specifies either to exclude the pair, or to format it and include it in the output from the UHD device. Applies only when the device is configured as the source for a MediaConnect flow.
   * @public
   */
  AudioChannelPairs?: InputDeviceUhdAudioChannelPairConfig[] | undefined;

  /**
   * The resolution of the Link device's source (HD or UHD). This value determines MediaLive resource allocation and billing for this input.
   * @public
   */
  InputResolution?: string | undefined;
}

/**
 * Details of the input device.
 * @public
 */
export interface InputDeviceSummary {
  /**
   * The unique ARN of the input device.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The state of the connection between the input device and AWS.
   * @public
   */
  ConnectionState?: InputDeviceConnectionState | undefined;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   * @public
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | undefined;

  /**
   * The status of software on the input device.
   * @public
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | undefined;

  /**
   * Settings that describe an input device that is type HD.
   * @public
   */
  HdDeviceSettings?: InputDeviceHdSettings | undefined;

  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string | undefined;

  /**
   * The network MAC address of the input device.
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * A name that you specify for the input device.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings for the input device.
   * @public
   */
  NetworkSettings?: InputDeviceNetworkSettings | undefined;

  /**
   * The unique serial number of the input device.
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The type of the input device.
   * @public
   */
  Type?: InputDeviceType | undefined;

  /**
   * Settings that describe an input device that is type UHD.
   * @public
   */
  UhdDeviceSettings?: InputDeviceUhdSettings | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Availability Zone associated with this input device.
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   * @public
   */
  MedialiveInputArns?: string[] | undefined;

  /**
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   * @public
   */
  OutputType?: InputDeviceOutputType | undefined;
}

/**
 * Whitelist rule
 * @public
 */
export interface InputWhitelistRule {
  /**
   * The IPv4 CIDR that's whitelisted.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * An Input Security Group
 * @public
 */
export interface InputSecurityGroup {
  /**
   * Unique ARN of Input Security Group
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Id of the Input Security Group
   * @public
   */
  Id?: string | undefined;

  /**
   * The list of inputs currently using this Input Security Group.
   * @public
   */
  Inputs?: string[] | undefined;

  /**
   * The current state of the Input Security Group.
   * @public
   */
  State?: InputSecurityGroupState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Whitelist rules and their sync status
   * @public
   */
  WhitelistRules?: InputWhitelistRule[] | undefined;
}

/**
 * Settings for for a PULL type input.
 * @public
 */
export interface InputSourceRequest {
  /**
   * The key used to extract the password from EC2 Parameter store.
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   * @public
   */
  Url?: string | undefined;

  /**
   * The username for the input source.
   * @public
   */
  Username?: string | undefined;
}

/**
 * An IPv4 CIDR to whitelist.
 * @public
 */
export interface InputWhitelistRuleCidr {
  /**
   * The IPv4 CIDR to whitelist.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Used in ClusterNetworkSettingsCreateRequest.
 * @public
 */
export interface InterfaceMappingCreateRequest {
  /**
   * The logical name for one interface (on every Node) that handles a specific type of traffic. We recommend that the name hints at the physical interface it applies to. For example, it could refer to the traffic that the physical interface handles. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The ID of the network that you want to connect to the specified logicalInterfaceName.
   * @public
   */
  NetworkId?: string | undefined;
}

/**
 * Placeholder documentation for InterfaceMappingUpdateRequest
 * @public
 */
export interface InterfaceMappingUpdateRequest {
  /**
   * The logical name for one interface (on every Node) that handles a specific type of traffic. We recommend that the name hints at the physical interface it applies to. For example, it could refer to the traffic that the physical interface handles. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The ID of the network that you want to connect to the specified logicalInterfaceName. You can use the ListNetworks operation to discover all the IDs.
   * @public
   */
  NetworkId?: string | undefined;
}

/**
 * Used in CreateNetworkRequest.
 * @public
 */
export interface IpPoolCreateRequest {
  /**
   * A CIDR block of IP addresses to reserve for MediaLive Anywhere.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Used in UpdateNetworkRequest.
 * @public
 */
export interface IpPoolUpdateRequest {
  /**
   * A CIDR block of IP addresses to reserve for MediaLive Anywhere.
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * The settings for a MediaConnect Flow.
 * @public
 */
export interface MediaConnectFlowRequest {
  /**
   * The ARN of the MediaConnect Flow that you want to use as a source.
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * A direct source or destination neighbor to an AWS media resource.
 * @public
 */
export interface MediaResourceNeighbor {
  /**
   * The ARN of a resource used in AWS media workflows.
   * @public
   */
  Arn: string | undefined;

  /**
   * The logical name of an AWS media resource.
   * @public
   */
  Name?: string | undefined;
}

/**
 * Pair of multicast url and source ip address (optional) that make up a multicast source.
 * @public
 */
export interface MulticastSourceCreateRequest {
  /**
   * This represents the ip address of the device sending the multicast stream.
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * This represents the customer's source URL where multicast stream is pulled from.
   * @public
   */
  Url: string | undefined;
}

/**
 * Pair of multicast url and source ip address (optional) that make up a multicast source.
 * @public
 */
export interface MulticastSourceUpdateRequest {
  /**
   * This represents the ip address of the device sending the multicast stream.
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * This represents the customer's source URL where multicast stream is pulled from.
   * @public
   */
  Url: string | undefined;
}

/**
 * An alert on a multiplex
 * @public
 */
export interface MultiplexAlert {
  /**
   * The type of the alert
   * @public
   */
  AlertType?: string | undefined;

  /**
   * The time when the alert was cleared
   * @public
   */
  ClearedTimestamp?: Date | undefined;

  /**
   * The unique ID for this alert instance
   * @public
   */
  Id?: string | undefined;

  /**
   * The user facing alert message which can have more context
   * @public
   */
  Message?: string | undefined;

  /**
   * The ID of the pipeline this alert is associated with
   * @public
   */
  PipelineId?: string | undefined;

  /**
   * The time when the alert was set
   * @public
   */
  SetTimestamp?: Date | undefined;

  /**
   * The state of the alert
   * @public
   */
  State?: MultiplexAlertState | undefined;
}

/**
 * Multiplex MediaConnect output destination settings.
 * @public
 */
export interface MultiplexMediaConnectOutputDestinationSettings {
  /**
   * The MediaConnect entitlement ARN available as a Flow source.
   * @public
   */
  EntitlementArn?: string | undefined;
}

/**
 * Multiplex output destination settings
 * @public
 */
export interface MultiplexOutputDestination {
  /**
   * Multiplex MediaConnect output destination settings.
   * @public
   */
  MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings | undefined;
}

/**
 * The current source for one of the pipelines in the multiplex.
 * @public
 */
export interface MultiplexProgramPipelineDetail {
  /**
   * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
   * @public
   */
  ActiveChannelPipeline?: string | undefined;

  /**
   * Identifies a specific pipeline in the multiplex.
   * @public
   */
  PipelineId?: string | undefined;
}

/**
 * Placeholder documentation for MultiplexProgramSummary
 * @public
 */
export interface MultiplexProgramSummary {
  /**
   * The MediaLive Channel associated with the program.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string | undefined;
}

/**
 * Contains summary configuration for a Multiplex event.
 * @public
 */
export interface MultiplexSettingsSummary {
  /**
   * Transport stream bit rate.
   * @public
   */
  TransportStreamBitrate?: number | undefined;
}

/**
 * Placeholder documentation for MultiplexSummary
 * @public
 */
export interface MultiplexSummary {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string | undefined;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettingsSummary | undefined;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number | undefined;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Used in CreateNodeRequest.
 * @public
 */
export interface NodeInterfaceMappingCreateRequest {
  /**
   * Specify one of the logicalInterfaceNames that you created in the Cluster that this node belongs to. For example, my-Inputs-Interface.
   * @public
   */
  LogicalInterfaceName?: string | undefined;

  /**
   * The style of the network -- NAT or BRIDGE.
   * @public
   */
  NetworkInterfaceMode?: NetworkInterfaceMode | undefined;

  /**
   * Specify the physical name that corresponds to the logicalInterfaceName that you specified in this interface mapping. For example, Eth1 or ENO1234EXAMPLE.
   * @public
   */
  PhysicalInterfaceName?: string | undefined;
}

/**
 * Resource configuration (codec, resolution, bitrate, ...)
 * @public
 */
export interface ReservationResourceSpecification {
  /**
   * Channel class, e.g. 'STANDARD'
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * Codec, e.g. 'AVC'
   * @public
   */
  Codec?: ReservationCodec | undefined;

  /**
   * Maximum bitrate, e.g. 'MAX_20_MBPS'
   * @public
   */
  MaximumBitrate?: ReservationMaximumBitrate | undefined;

  /**
   * Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)
   * @public
   */
  MaximumFramerate?: ReservationMaximumFramerate | undefined;

  /**
   * Resolution, e.g. 'HD'
   * @public
   */
  Resolution?: ReservationResolution | undefined;

  /**
   * Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: ReservationResourceType | undefined;

  /**
   * Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)
   * @public
   */
  SpecialFeature?: ReservationSpecialFeature | undefined;

  /**
   * Video quality, e.g. 'STANDARD' (Outputs only)
   * @public
   */
  VideoQuality?: ReservationVideoQuality | undefined;
}

/**
 * Reserved resources available for purchase
 * @public
 */
export interface Offering {
  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   * @public
   */
  Arn?: string | undefined;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number | undefined;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits | undefined;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string | undefined;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType | undefined;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string | undefined;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification | undefined;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number | undefined;
}

/**
 * DVB Network Information Table (NIT)
 * @public
 */
export interface DvbNitSettings {
  /**
   * The numeric value placed in the Network Information Table (NIT).
   * @public
   */
  NetworkId: number | undefined;

  /**
   * The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  RepInterval?: number | undefined;
}

/**
 * DVB Service Description Table (SDT)
 * @public
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information.
   * @public
   */
  OutputSdt?: DvbSdtOutputSdt | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  RepInterval?: number | undefined;

  /**
   * The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   * @public
   */
  ServiceProviderName?: string | undefined;
}

/**
 * DVB Time and Date Table (SDT)
 * @public
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   * @public
   */
  RepInterval?: number | undefined;
}

/**
 * M2ts Settings
 * @public
 */
export interface M2tsSettings {
  /**
   * When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
   * @public
   */
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior | undefined;

  /**
   * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
   * @public
   */
  Arib?: M2tsArib | undefined;

  /**
   * Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  AribCaptionsPid?: string | undefined;

  /**
   * If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number.
   * @public
   */
  AribCaptionsPidControl?: M2tsAribCaptionsPidControl | undefined;

  /**
   * When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.
   * @public
   */
  AudioBufferModel?: M2tsAudioBufferModel | undefined;

  /**
   * The number of audio frames to insert for each PES packet.
   * @public
   */
  AudioFramesPerPes?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  AudioPids?: string | undefined;

  /**
   * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
   * @public
   */
  AudioStreamType?: M2tsAudioStreamType | undefined;

  /**
   * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Controls the timing accuracy for output network traffic. Leave as MULTIPLEX to ensure accurate network packet timing. Or set to NONE, which might result in lower latency but will result in more variability in output network packet timing. This variability might cause interruptions, jitter, or bursty behavior in your playback or receiving devices.
   * @public
   */
  BufferModel?: M2tsBufferModel | undefined;

  /**
   * When set to enabled, generates captionServiceDescriptor in PMT.
   * @public
   */
  CcDescriptor?: M2tsCcDescriptor | undefined;

  /**
   * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
   * @public
   */
  DvbNitSettings?: DvbNitSettings | undefined;

  /**
   * Inserts DVB Service Description Table (SDT) at the specified table repetition interval.
   * @public
   */
  DvbSdtSettings?: DvbSdtSettings | undefined;

  /**
   * Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  DvbSubPids?: string | undefined;

  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
   * @public
   */
  DvbTdtSettings?: DvbTdtSettings | undefined;

  /**
   * Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  DvbTeletextPid?: string | undefined;

  /**
   * If set to passthrough, passes any EBIF data from the input source to this output.
   * @public
   */
  Ebif?: M2tsEbifControl | undefined;

  /**
   * When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval.
   * @public
   */
  EbpAudioInterval?: M2tsAudioInterval | undefined;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   * @public
   */
  EbpLookaheadMs?: number | undefined;

  /**
   * Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID.
   * @public
   */
  EbpPlacement?: M2tsEbpPlacement | undefined;

  /**
   * This field is unused and deprecated.
   * @public
   */
  EcmPid?: string | undefined;

  /**
   * Include or exclude the ES Rate field in the PES header.
   * @public
   */
  EsRateInPes?: M2tsEsRateInPes | undefined;

  /**
   * Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  EtvPlatformPid?: string | undefined;

  /**
   * Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  EtvSignalPid?: string | undefined;

  /**
   * The length in seconds of each fragment. Only used with EBP markers.
   * @public
   */
  FragmentTime?: number | undefined;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   * @public
   */
  Klv?: M2tsKlv | undefined;

  /**
   * Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  KlvDataPids?: string | undefined;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3Behavior?: M2tsNielsenId3Behavior | undefined;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   * @public
   */
  NullPacketBitrate?: number | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000.
   * @public
   */
  PatInterval?: number | undefined;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   * @public
   */
  PcrControl?: M2tsPcrControl | undefined;

  /**
   * Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.
   * @public
   */
  PcrPeriod?: number | undefined;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  PcrPid?: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
   * @public
   */
  PmtInterval?: number | undefined;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  PmtPid?: string | undefined;

  /**
   * The value of the program number field in the Program Map Table.
   * @public
   */
  ProgramNum?: number | undefined;

  /**
   * When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set.
   * @public
   */
  RateMode?: M2tsRateMode | undefined;

  /**
   * Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  Scte27Pids?: string | undefined;

  /**
   * Optionally pass SCTE-35 signals from the input source to this output.
   * @public
   */
  Scte35Control?: M2tsScte35Control | undefined;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  Scte35Pid?: string | undefined;

  /**
   * Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   * @public
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | undefined;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.
   *
   * When a segmentation style of "resetCadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.
   *
   * When a segmentation style of "maintainCadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
   * @public
   */
  SegmentationStyle?: M2tsSegmentationStyle | undefined;

  /**
   * The length in seconds of each segment. Required unless markers is set to _none_.
   * @public
   */
  SegmentationTime?: number | undefined;

  /**
   * When set to passthrough, timed metadata will be passed through from input to output.
   * @public
   */
  TimedMetadataBehavior?: M2tsTimedMetadataBehavior | undefined;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  TimedMetadataPid?: string | undefined;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   * @public
   */
  TransportStreamId?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  VideoPid?: string | undefined;

  /**
   * Defines the amount SCTE-35 preroll will be increased (in milliseconds) on the output. Preroll is the amount of time between the presence of a SCTE-35 indication in a transport stream and the PTS of the video frame it references. Zero means don't add pullup (it doesn't mean set the preroll to zero). Negative pullup is not supported, which means that you can't make the preroll shorter. Be aware that latency in the output will increase by the pullup amount.
   * @public
   */
  Scte35PrerollPullupMilliseconds?: number | undefined;
}

/**
 * Raw Settings
 * @public
 */
export interface RawSettings {}

/**
 * Archive Container Settings
 * @public
 */
export interface ArchiveContainerSettings {
  /**
   * M2ts Settings
   * @public
   */
  M2tsSettings?: M2tsSettings | undefined;

  /**
   * Raw Settings
   * @public
   */
  RawSettings?: RawSettings | undefined;
}

/**
 * Archive Output Settings
 * @public
 */
export interface ArchiveOutputSettings {
  /**
   * Container for this output. Can be auto-detected from extension field.
   * @public
   */
  ContainerSettings: ArchiveContainerSettings | undefined;

  /**
   * Output file extension. If excluded, this will be auto-selected from the container type.
   * @public
   */
  Extension?: string | undefined;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   * @public
   */
  NameModifier?: string | undefined;
}

/**
 * Cmaf Ingest Output Settings
 * @public
 */
export interface CmafIngestOutputSettings {
  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   * @public
   */
  NameModifier?: string | undefined;
}

/**
 * Frame Capture Output Settings
 * @public
 */
export interface FrameCaptureOutputSettings {
  /**
   * Required if the output group contains more than one output. This modifier forms part of the output file name.
   * @public
   */
  NameModifier?: string | undefined;
}

/**
 * Audio Only Hls Settings
 * @public
 */
export interface AudioOnlyHlsSettings {
  /**
   * Specifies the group to which the audio Rendition belongs.
   * @public
   */
  AudioGroupId?: string | undefined;

  /**
   * Optional. Specifies the .jpg or .png image to use as the cover art for an audio-only output. We recommend a low bit-size file because the image increases the output audio bandwidth.
   *
   * The image is attached to the audio as an ID3 tag, frame type APIC, picture type 0x10, as per the "ID3 tag version 2.4.0 - Native Frames" standard.
   * @public
   */
  AudioOnlyImage?: InputLocation | undefined;

  /**
   * Four types of audio-only tracks are supported:
   *
   * Audio-Only Variant Stream
   * The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest.
   *
   * Alternate Audio, Auto Select, Default
   * Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES
   *
   * Alternate Audio, Auto Select, Not Default
   * Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES
   *
   * Alternate Audio, not Auto Select
   * Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   * @public
   */
  AudioTrackType?: AudioOnlyHlsTrackType | undefined;

  /**
   * Specifies the segment type.
   * @public
   */
  SegmentType?: AudioOnlyHlsSegmentType | undefined;
}

/**
 * Fmp4 Hls Settings
 * @public
 */
export interface Fmp4HlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   * @public
   */
  AudioRenditionSets?: string | undefined;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3Behavior?: Fmp4NielsenId3Behavior | undefined;

  /**
   * Set to PASSTHROUGH to enable ID3 metadata insertion. To include metadata, you configure other parameters in the output group or individual outputs, or you add an ID3 action to the channel schedule.
   * @public
   */
  TimedMetadataBehavior?: Fmp4TimedMetadataBehavior | undefined;
}

/**
 * Frame Capture Hls Settings
 * @public
 */
export interface FrameCaptureHlsSettings {}

/**
 * Settings information for the .m3u8 container
 * @public
 */
export interface M3u8Settings {
  /**
   * The number of audio frames to insert for each PES packet.
   * @public
   */
  AudioFramesPerPes?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.
   * @public
   */
  AudioPids?: string | undefined;

  /**
   * This parameter is unused and deprecated.
   * @public
   */
  EcmPid?: string | undefined;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3Behavior?: M3u8NielsenId3Behavior | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   * @public
   */
  PatInterval?: number | undefined;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   * @public
   */
  PcrControl?: M3u8PcrControl | undefined;

  /**
   * Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.
   * @public
   */
  PcrPeriod?: number | undefined;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.
   * @public
   */
  PcrPid?: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   * @public
   */
  PmtInterval?: number | undefined;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value.
   * @public
   */
  PmtPid?: string | undefined;

  /**
   * The value of the program number field in the Program Map Table.
   * @public
   */
  ProgramNum?: number | undefined;

  /**
   * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
   * @public
   */
  Scte35Behavior?: M3u8Scte35Behavior | undefined;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   * @public
   */
  Scte35Pid?: string | undefined;

  /**
   * Set to PASSTHROUGH to enable ID3 metadata insertion. To include metadata, you configure other parameters in the output group or individual outputs, or you add an ID3 action to the channel schedule.
   * @public
   */
  TimedMetadataBehavior?: M3u8TimedMetadataBehavior | undefined;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  TimedMetadataPid?: string | undefined;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   * @public
   */
  TransportStreamId?: number | undefined;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   * @public
   */
  VideoPid?: string | undefined;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   * @public
   */
  KlvBehavior?: M3u8KlvBehavior | undefined;

  /**
   * Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   * @public
   */
  KlvDataPids?: string | undefined;
}

/**
 * Standard Hls Settings
 * @public
 */
export interface StandardHlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   * @public
   */
  AudioRenditionSets?: string | undefined;

  /**
   * Settings information for the .m3u8 container
   * @public
   */
  M3u8Settings: M3u8Settings | undefined;
}

/**
 * Hls Settings
 * @public
 */
export interface HlsSettings {
  /**
   * Audio Only Hls Settings
   * @public
   */
  AudioOnlyHlsSettings?: AudioOnlyHlsSettings | undefined;

  /**
   * Fmp4 Hls Settings
   * @public
   */
  Fmp4HlsSettings?: Fmp4HlsSettings | undefined;

  /**
   * Frame Capture Hls Settings
   * @public
   */
  FrameCaptureHlsSettings?: FrameCaptureHlsSettings | undefined;

  /**
   * Standard Hls Settings
   * @public
   */
  StandardHlsSettings?: StandardHlsSettings | undefined;
}

/**
 * Hls Output Settings
 * @public
 */
export interface HlsOutputSettings {
  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   * @public
   */
  H265PackagingType?: HlsH265PackagingType | undefined;

  /**
   * Settings regarding the underlying stream. These settings are different for audio-only outputs.
   * @public
   */
  HlsSettings: HlsSettings | undefined;

  /**
   * String concatenated to the end of the destination filename. Accepts \"Format Identifiers\":#formatIdentifierParameters.
   * @public
   */
  NameModifier?: string | undefined;

  /**
   * String concatenated to end of segment filenames.
   * @public
   */
  SegmentModifier?: string | undefined;
}

/**
 * Media Package V2 Destination Settings
 * @public
 */
export interface MediaPackageV2DestinationSettings {
  /**
   * Applies only to an output that contains audio. If you want to put several audio encodes into one audio rendition group, decide on a name (ID) for the group. Then in every audio output that you want to belong to that group, enter that ID in this field. Note that this information is part of the HLS specification (not the CMAF specification), but if you include it then MediaPackage will include it in the manifest it creates for the video player.
   * @public
   */
  AudioGroupId?: string | undefined;

  /**
   * Applies only to an output that contains video, and only if you want to associate one or more audio groups to this video. In this field you assign the groups that you create (in the Group ID fields in the various audio outputs). Enter one group ID, or enter a comma-separated list of group IDs. Note that this information is part of the HLS specification (not the CMAF specification), but if you include it then MediaPackage will include it in the manifest it creates for the video player.
   * @public
   */
  AudioRenditionSets?: string | undefined;

  /**
   * Specifies whether MediaPackage should set this output as the auto-select rendition in the HLS manifest. YES means this must be the auto-select. NO means this should never be the auto-select. OMIT means MediaPackage decides what to set on this rendition.
   * When you consider all the renditions, follow these guidelines. You can set zero or one renditions to YES. You can set zero or more renditions to NO, but you can't set all renditions to NO. You can set zero, some, or all to OMIT.
   * @public
   */
  HlsAutoSelect?: HlsAutoSelect | undefined;

  /**
   * Specifies whether MediaPackage should set this output as the default rendition in the HLS manifest. YES means this must be the default. NO means this should never be the default. OMIT means MediaPackage decides what to set on this rendition.
   * When you consider all the renditions, follow these guidelines. You can set zero or one renditions to YES. You can set zero or more renditions to NO, but you can't set all renditions to NO. You can set zero, some, or all to OMIT.
   * @public
   */
  HlsDefault?: HlsDefault | undefined;
}

/**
 * Media Package Output Settings
 * @public
 */
export interface MediaPackageOutputSettings {
  /**
   * Optional settings for MediaPackage V2 destinations
   * @public
   */
  MediaPackageV2DestinationSettings?: MediaPackageV2DestinationSettings | undefined;
}

/**
 * Ms Smooth Output Settings
 * @public
 */
export interface MsSmoothOutputSettings {
  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   * @public
   */
  H265PackagingType?: MsSmoothH265PackagingType | undefined;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   * @public
   */
  NameModifier?: string | undefined;
}

/**
 * Multiplex M2ts Settings
 * @public
 */
export interface MultiplexM2tsSettings {
  /**
   * When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
   * @public
   */
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior | undefined;

  /**
   * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
   * @public
   */
  Arib?: M2tsArib | undefined;

  /**
   * When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.
   * @public
   */
  AudioBufferModel?: M2tsAudioBufferModel | undefined;

  /**
   * The number of audio frames to insert for each PES packet.
   * @public
   */
  AudioFramesPerPes?: number | undefined;

  /**
   * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
   * @public
   */
  AudioStreamType?: M2tsAudioStreamType | undefined;

  /**
   * When set to enabled, generates captionServiceDescriptor in PMT.
   * @public
   */
  CcDescriptor?: M2tsCcDescriptor | undefined;

  /**
   * If set to passthrough, passes any EBIF data from the input source to this output.
   * @public
   */
  Ebif?: M2tsEbifControl | undefined;

  /**
   * Include or exclude the ES Rate field in the PES header.
   * @public
   */
  EsRateInPes?: M2tsEsRateInPes | undefined;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   * @public
   */
  Klv?: M2tsKlv | undefined;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3Behavior?: M2tsNielsenId3Behavior | undefined;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   * @public
   */
  PcrControl?: M2tsPcrControl | undefined;

  /**
   * Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.
   * @public
   */
  PcrPeriod?: number | undefined;

  /**
   * Optionally pass SCTE-35 signals from the input source to this output.
   * @public
   */
  Scte35Control?: M2tsScte35Control | undefined;

  /**
   * Defines the amount SCTE-35 preroll will be increased (in milliseconds) on the output. Preroll is the amount of time between the presence of a SCTE-35 indication in a transport stream and the PTS of the video frame it references. Zero means don't add pullup (it doesn't mean set the preroll to zero). Negative pullup is not supported, which means that you can't make the preroll shorter. Be aware that latency in the output will increase by the pullup amount.
   * @public
   */
  Scte35PrerollPullupMilliseconds?: number | undefined;
}

/**
 * Multiplex Container Settings
 * @public
 */
export interface MultiplexContainerSettings {
  /**
   * Multiplex M2ts Settings
   * @public
   */
  MultiplexM2tsSettings?: MultiplexM2tsSettings | undefined;
}

/**
 * Multiplex Output Settings
 * @public
 */
export interface MultiplexOutputSettings {
  /**
   * Destination is a Multiplex.
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Multiplex Container Settings
   * @public
   */
  ContainerSettings?: MultiplexContainerSettings | undefined;
}

/**
 * Rtmp Output Settings
 * @public
 */
export interface RtmpOutputSettings {
  /**
   * If set to verifyAuthenticity, verify the tls certificate chain to a trusted Certificate Authority (CA).  This will cause rtmps outputs with self-signed certificates to fail.
   * @public
   */
  CertificateMode?: RtmpOutputCertificateMode | undefined;

  /**
   * Number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number | undefined;

  /**
   * The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers.
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Number of retry attempts.
   * @public
   */
  NumRetries?: number | undefined;
}

/**
 * Udp Container Settings
 * @public
 */
export interface UdpContainerSettings {
  /**
   * M2ts Settings
   * @public
   */
  M2tsSettings?: M2tsSettings | undefined;
}

/**
 * Srt Output Settings
 * @public
 */
export interface SrtOutputSettings {
  /**
   * SRT output buffering in milliseconds. A higher value increases latency through the encoder. But the benefits are that it helps to maintain a constant, low-jitter SRT output, and it accommodates clock recovery, input switching, input disruptions, picture reordering, and so on. Range: 0-10000 milliseconds.
   * @public
   */
  BufferMsec?: number | undefined;

  /**
   * Udp Container Settings
   * @public
   */
  ContainerSettings: UdpContainerSettings | undefined;

  /**
   * Reference to an OutputDestination ID defined in the channel
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * The encryption level for the content. Valid values are AES128, AES192, AES256. You and the downstream system should plan how to set this field because the values must not conflict with each other.
   * @public
   */
  EncryptionType?: SrtEncryptionType | undefined;

  /**
   * The latency value, in milliseconds, that is proposed during the SRT connection handshake. SRT will choose the maximum of the values proposed by the sender and receiver. On the sender side, latency is the amount of time a packet is held to give it a chance to be delivered successfully. On the receiver side, latency is the amount of time the packet is held before delivering to the application, aiding in packet recovery and matching as closely as possible the packet timing of the sender. Range: 40-16000 milliseconds.
   * @public
   */
  Latency?: number | undefined;
}

/**
 * Fec Output Settings
 * @public
 */
export interface FecOutputSettings {
  /**
   * Parameter D from SMPTE 2022-1. The height of the FEC protection matrix.  The number of transport stream packets per column error correction packet. Must be between 4 and 20, inclusive.
   * @public
   */
  ColumnDepth?: number | undefined;

  /**
   * Enables column only or column and row based FEC
   * @public
   */
  IncludeFec?: FecOutputIncludeFec | undefined;

  /**
   * Parameter L from SMPTE 2022-1. The width of the FEC protection matrix.  Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness.  If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.
   * @public
   */
  RowLength?: number | undefined;
}

/**
 * Udp Output Settings
 * @public
 */
export interface UdpOutputSettings {
  /**
   * UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc.
   * @public
   */
  BufferMsec?: number | undefined;

  /**
   * Udp Container Settings
   * @public
   */
  ContainerSettings: UdpContainerSettings | undefined;

  /**
   * Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Settings for enabling and adjusting Forward Error Correction on UDP outputs.
   * @public
   */
  FecOutputSettings?: FecOutputSettings | undefined;
}

/**
 * Output Settings
 * @public
 */
export interface OutputSettings {
  /**
   * Archive Output Settings
   * @public
   */
  ArchiveOutputSettings?: ArchiveOutputSettings | undefined;

  /**
   * Frame Capture Output Settings
   * @public
   */
  FrameCaptureOutputSettings?: FrameCaptureOutputSettings | undefined;

  /**
   * Hls Output Settings
   * @public
   */
  HlsOutputSettings?: HlsOutputSettings | undefined;

  /**
   * Media Package Output Settings
   * @public
   */
  MediaPackageOutputSettings?: MediaPackageOutputSettings | undefined;

  /**
   * Ms Smooth Output Settings
   * @public
   */
  MsSmoothOutputSettings?: MsSmoothOutputSettings | undefined;

  /**
   * Multiplex Output Settings
   * @public
   */
  MultiplexOutputSettings?: MultiplexOutputSettings | undefined;

  /**
   * Rtmp Output Settings
   * @public
   */
  RtmpOutputSettings?: RtmpOutputSettings | undefined;

  /**
   * Udp Output Settings
   * @public
   */
  UdpOutputSettings?: UdpOutputSettings | undefined;

  /**
   * Cmaf Ingest Output Settings
   * @public
   */
  CmafIngestOutputSettings?: CmafIngestOutputSettings | undefined;

  /**
   * Srt Output Settings
   * @public
   */
  SrtOutputSettings?: SrtOutputSettings | undefined;
}

/**
 * Output settings. There can be multiple outputs within a group.
 * @public
 */
export interface Output {
  /**
   * The names of the AudioDescriptions used as audio sources for this output.
   * @public
   */
  AudioDescriptionNames?: string[] | undefined;

  /**
   * The names of the CaptionDescriptions used as caption sources for this output.
   * @public
   */
  CaptionDescriptionNames?: string[] | undefined;

  /**
   * The name used to identify an output.
   * @public
   */
  OutputName?: string | undefined;

  /**
   * Output type-specific settings.
   * @public
   */
  OutputSettings: OutputSettings | undefined;

  /**
   * The name of the VideoDescription used as the source for this output.
   * @public
   */
  VideoDescriptionName?: string | undefined;
}

/**
 * Archive S3 Settings
 * @public
 */
export interface ArchiveS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   * @public
   */
  CannedAcl?: S3CannedAcl | undefined;
}

/**
 * Archive Cdn Settings
 * @public
 */
export interface ArchiveCdnSettings {
  /**
   * Archive S3 Settings
   * @public
   */
  ArchiveS3Settings?: ArchiveS3Settings | undefined;
}

/**
 * Archive Group Settings
 * @public
 */
export interface ArchiveGroupSettings {
  /**
   * Parameters that control interactions with the CDN.
   * @public
   */
  ArchiveCdnSettings?: ArchiveCdnSettings | undefined;

  /**
   * A directory and base filename where archive files should be written.
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Number of seconds to write to archive file before closing and starting a new one.
   * @public
   */
  RolloverInterval?: number | undefined;
}

/**
 * Cmaf Ingest Group Settings
 * @public
 */
export interface CmafIngestGroupSettings {
  /**
   * A HTTP destination for the tracks
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3Behavior?: CmafNielsenId3Behavior | undefined;

  /**
   * Type of scte35 track to add. none or scte35WithoutSegmentation
   * @public
   */
  Scte35Type?: Scte35Type | undefined;

  /**
   * The nominal duration of segments. The units are specified in SegmentLengthUnits. The segments will end on the next keyframe after the specified duration, so the actual segment length might be longer, and it might be a fraction of the units.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * Time unit for segment length parameter.
   * @public
   */
  SegmentLengthUnits?: CmafIngestSegmentLengthUnits | undefined;

  /**
   * Number of milliseconds to delay the output from the second pipeline.
   * @public
   */
  SendDelayMs?: number | undefined;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   * @public
   */
  KlvBehavior?: CmafKLVBehavior | undefined;

  /**
   * Change the modifier that MediaLive automatically adds to the Streams() name that identifies a KLV track. The default is "klv", which means the default name will be Streams(klv.cmfm). Any string you enter here will replace the "klv" string.\nThe modifier can only contain: numbers, letters, plus (+), minus (-), underscore (_) and period (.) and has a maximum length of 100 characters.
   * @public
   */
  KlvNameModifier?: string | undefined;

  /**
   * Change the modifier that MediaLive automatically adds to the Streams() name that identifies a Nielsen ID3 track. The default is "nid3", which means the default name will be Streams(nid3.cmfm). Any string you enter here will replace the "nid3" string.\nThe modifier can only contain: numbers, letters, plus (+), minus (-), underscore (_) and period (.) and has a maximum length of 100 characters.
   * @public
   */
  NielsenId3NameModifier?: string | undefined;

  /**
   * Change the modifier that MediaLive automatically adds to the Streams() name for a SCTE 35 track. The default is "scte", which means the default name will be Streams(scte.cmfm). Any string you enter here will replace the "scte" string.\nThe modifier can only contain: numbers, letters, plus (+), minus (-), underscore (_) and period (.) and has a maximum length of 100 characters.
   * @public
   */
  Scte35NameModifier?: string | undefined;

  /**
   * Set to ENABLED to enable ID3 metadata insertion. To include metadata, you configure other parameters in the output group, or you add an ID3 action to the channel schedule.
   * @public
   */
  Id3Behavior?: CmafId3Behavior | undefined;

  /**
   * Change the modifier that MediaLive automatically adds to the Streams() name that identifies an ID3 track. The default is "id3", which means the default name will be Streams(id3.cmfm). Any string you enter here will replace the "id3" string.\nThe modifier can only contain: numbers, letters, plus (+), minus (-), underscore (_) and period (.) and has a maximum length of 100 characters.
   * @public
   */
  Id3NameModifier?: string | undefined;

  /**
   * An array that identifies the languages in the four caption channels in the embedded captions.
   * @public
   */
  CaptionLanguageMappings?: CmafIngestCaptionLanguageMapping[] | undefined;

  /**
   * Set to none if you don't want to insert a timecode in the output. Otherwise choose the frame type for the timecode.
   * @public
   */
  TimedMetadataId3Frame?: CmafTimedMetadataId3Frame | undefined;

  /**
   * If you set up to insert a timecode in the output, specify the frequency for the frame, in seconds.
   * @public
   */
  TimedMetadataId3Period?: number | undefined;

  /**
   * Set to enabled to pass through ID3 metadata from the input sources.
   * @public
   */
  TimedMetadataPassthrough?: CmafTimedMetadataPassthrough | undefined;

  /**
   * Optional an array of additional destinational HTTP destinations for the OutputGroup outputs
   * @public
   */
  AdditionalDestinations?: AdditionalDestinations[] | undefined;
}

/**
 * Frame Capture S3 Settings
 * @public
 */
export interface FrameCaptureS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   * @public
   */
  CannedAcl?: S3CannedAcl | undefined;
}

/**
 * Frame Capture Cdn Settings
 * @public
 */
export interface FrameCaptureCdnSettings {
  /**
   * Frame Capture S3 Settings
   * @public
   */
  FrameCaptureS3Settings?: FrameCaptureS3Settings | undefined;
}

/**
 * Frame Capture Group Settings
 * @public
 */
export interface FrameCaptureGroupSettings {
  /**
   * The destination for the frame capture files. Either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling-) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling-). The final file names consist of the prefix from the destination field (for example, "curling-") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg).  For example, curling-low.00001.jpg
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Parameters that control interactions with the CDN.
   * @public
   */
  FrameCaptureCdnSettings?: FrameCaptureCdnSettings | undefined;
}

/**
 * Hls Akamai Settings
 * @public
 */
export interface HlsAkamaiSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number | undefined;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number | undefined;

  /**
   * Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.
   * @public
   */
  HttpTransferMode?: HlsAkamaiHttpTransferMode | undefined;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number | undefined;

  /**
   * Salt for authenticated Akamai.
   * @public
   */
  Salt?: string | undefined;

  /**
   * Token parameter for authenticated akamai. If not specified, _gda_ is used.
   * @public
   */
  Token?: string | undefined;
}

/**
 * Hls Basic Put Settings
 * @public
 */
export interface HlsBasicPutSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number | undefined;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number | undefined;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number | undefined;
}

/**
 * Hls Media Store Settings
 * @public
 */
export interface HlsMediaStoreSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number | undefined;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number | undefined;

  /**
   * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
   * @public
   */
  MediaStoreStorageClass?: HlsMediaStoreStorageClass | undefined;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number | undefined;
}

/**
 * Hls S3 Settings
 * @public
 */
export interface HlsS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   * @public
   */
  CannedAcl?: S3CannedAcl | undefined;
}

/**
 * Hls Webdav Settings
 * @public
 */
export interface HlsWebdavSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number | undefined;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number | undefined;

  /**
   * Specify whether or not to use chunked transfer encoding to WebDAV.
   * @public
   */
  HttpTransferMode?: HlsWebdavHttpTransferMode | undefined;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number | undefined;
}

/**
 * Hls Cdn Settings
 * @public
 */
export interface HlsCdnSettings {
  /**
   * Hls Akamai Settings
   * @public
   */
  HlsAkamaiSettings?: HlsAkamaiSettings | undefined;

  /**
   * Hls Basic Put Settings
   * @public
   */
  HlsBasicPutSettings?: HlsBasicPutSettings | undefined;

  /**
   * Hls Media Store Settings
   * @public
   */
  HlsMediaStoreSettings?: HlsMediaStoreSettings | undefined;

  /**
   * Hls S3 Settings
   * @public
   */
  HlsS3Settings?: HlsS3Settings | undefined;

  /**
   * Hls Webdav Settings
   * @public
   */
  HlsWebdavSettings?: HlsWebdavSettings | undefined;
}

/**
 * Static Key Settings
 * @public
 */
export interface StaticKeySettings {
  /**
   * The URL of the license server used for protecting content.
   * @public
   */
  KeyProviderServer?: InputLocation | undefined;

  /**
   * Static key value as a 32 character hexadecimal string.
   * @public
   */
  StaticKeyValue: string | undefined;
}

/**
 * Key Provider Settings
 * @public
 */
export interface KeyProviderSettings {
  /**
   * Static Key Settings
   * @public
   */
  StaticKeySettings?: StaticKeySettings | undefined;
}

/**
 * Hls Group Settings
 * @public
 */
export interface HlsGroupSettings {
  /**
   * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
   * @public
   */
  AdMarkers?: HlsAdMarkers[] | undefined;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   * @public
   */
  BaseUrlContent?: string | undefined;

  /**
   * Optional. One value per output group.
   *
   * This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
   * @public
   */
  BaseUrlContent1?: string | undefined;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   * @public
   */
  BaseUrlManifest?: string | undefined;

  /**
   * Optional. One value per output group.
   *
   * Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
   * @public
   */
  BaseUrlManifest1?: string | undefined;

  /**
   * Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".
   * @public
   */
  CaptionLanguageMappings?: CaptionLanguageMapping[] | undefined;

  /**
   * Applies only to 608 Embedded output captions.
   * insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.
   * none: Include CLOSED-CAPTIONS=NONE line in the manifest.
   * omit: Omit any CLOSED-CAPTIONS line from the manifest.
   * @public
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | undefined;

  /**
   * When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
   * @public
   */
  ClientCache?: HlsClientCache | undefined;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   * @public
   */
  CodecSpecification?: HlsCodecSpecification | undefined;

  /**
   * For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.
   * @public
   */
  ConstantIv?: string | undefined;

  /**
   * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Place segments in subdirectories.
   * @public
   */
  DirectoryStructure?: HlsDirectoryStructure | undefined;

  /**
   * Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group.
   * Typically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose.
   * Choose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.
   * @public
   */
  DiscontinuityTags?: HlsDiscontinuityTags | undefined;

  /**
   * Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.
   * @public
   */
  EncryptionType?: HlsEncryptionType | undefined;

  /**
   * Parameters that control interactions with the CDN.
   * @public
   */
  HlsCdnSettings?: HlsCdnSettings | undefined;

  /**
   * State of HLS ID3 Segment Tagging
   * @public
   */
  HlsId3SegmentTagging?: HlsId3SegmentTaggingState | undefined;

  /**
   * DISABLED: Do not create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).
   *
   * STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888"
   * @public
   */
  IFrameOnlyPlaylists?: IFrameOnlyPlaylistType | undefined;

  /**
   * Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline.
   * Auto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups.
   * Suppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.
   * @public
   */
  IncompleteSegmentBehavior?: HlsIncompleteSegmentBehavior | undefined;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be smaller than the number in the Keep Segments field.
   * @public
   */
  IndexNSegments?: number | undefined;

  /**
   * Parameter that control output group behavior on input loss.
   * @public
   */
  InputLossAction?: InputLossActionForHlsOut | undefined;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.
   * @public
   */
  IvInManifest?: HlsIvInManifest | undefined;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.
   * @public
   */
  IvSource?: HlsIvSource | undefined;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the number of media segments to retain in the destination directory. This number should be bigger than indexNSegments (Num segments). We recommend (value = (2 x indexNsegments) + 1).
   *
   * If this "keep segments" number is too low, the following might happen: the player is still reading a media manifest file that lists this segment, but that segment has been removed from the destination directory (as directed by indexNSegments). This situation would result in a 404 HTTP error on the player.
   * @public
   */
  KeepSegments?: number | undefined;

  /**
   * The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.
   * @public
   */
  KeyFormat?: string | undefined;

  /**
   * Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   * @public
   */
  KeyFormatVersions?: string | undefined;

  /**
   * The key provider settings.
   * @public
   */
  KeyProviderSettings?: KeyProviderSettings | undefined;

  /**
   * When set to gzip, compresses HLS playlist.
   * @public
   */
  ManifestCompression?: HlsManifestCompression | undefined;

  /**
   * Indicates whether the output manifest should use floating point or integer values for segment duration.
   * @public
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | undefined;

  /**
   * Minimum length of MPEG-2 Transport Stream segments in seconds. When set, minimum segment length is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   * @public
   */
  MinSegmentLength?: number | undefined;

  /**
   * If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.
   *
   * VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
   * @public
   */
  Mode?: HlsMode | undefined;

  /**
   * MANIFESTS_AND_SEGMENTS: Generates manifests (master manifest, if applicable, and media manifests) for this output group.
   *
   * VARIANT_MANIFESTS_AND_SEGMENTS: Generates media manifests for this output group, but not a master manifest.
   *
   * SEGMENTS_ONLY: Does not generate any manifests for this output group.
   * @public
   */
  OutputSelection?: HlsOutputSelection | undefined;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated using the program date time clock.
   * @public
   */
  ProgramDateTime?: HlsProgramDateTime | undefined;

  /**
   * Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock. Options include:
   *
   * INITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment.
   *
   * SYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.
   * @public
   */
  ProgramDateTimeClock?: HlsProgramDateTimeClock | undefined;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   * @public
   */
  ProgramDateTimePeriod?: number | undefined;

  /**
   * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows playout device that support stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines.
   *
   * DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only.
   *
   * For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players so a redundant manifest from MediaLive is irrelevant.
   * @public
   */
  RedundantManifest?: HlsRedundantManifest | undefined;

  /**
   * Length of MPEG-2 Transport Stream segments to create in seconds. Note that segments will end on the next keyframe after this duration, so actual segment length may be longer.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   * @public
   */
  SegmentationMode?: HlsSegmentationMode | undefined;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.
   * @public
   */
  SegmentsPerSubdirectory?: number | undefined;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   * @public
   */
  StreamInfResolution?: HlsStreamInfResolution | undefined;

  /**
   * Indicates ID3 frame that has the timecode.
   * @public
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | undefined;

  /**
   * Timed Metadata interval in seconds.
   * @public
   */
  TimedMetadataId3Period?: number | undefined;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   * @public
   */
  TimestampDeltaMilliseconds?: number | undefined;

  /**
   * SEGMENTED_FILES: Emit the program as segments - multiple .ts media files.
   *
   * SINGLE_FILE: Applies only if Mode field is VOD. Emit the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
   * @public
   */
  TsFileMode?: HlsTsFileMode | undefined;
}

/**
 * Media Package V2 Group Settings
 * @public
 */
export interface MediaPackageV2GroupSettings {
  /**
   * Mapping of up to 4 caption channels to caption languages.
   * @public
   */
  CaptionLanguageMappings?: CaptionLanguageMapping[] | undefined;

  /**
   * Set to ENABLED to enable ID3 metadata insertion. To include metadata, you configure other parameters in the output group, or you add an ID3 action to the channel schedule.
   * @public
   */
  Id3Behavior?: CmafId3Behavior | undefined;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   * @public
   */
  KlvBehavior?: CmafKLVBehavior | undefined;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   * @public
   */
  NielsenId3Behavior?: CmafNielsenId3Behavior | undefined;

  /**
   * Type of scte35 track to add. none or scte35WithoutSegmentation
   * @public
   */
  Scte35Type?: Scte35Type | undefined;

  /**
   * The nominal duration of segments. The units are specified in SegmentLengthUnits. The segments will end on the next keyframe after the specified duration, so the actual segment length might be longer, and it might be a fraction of the units.
   * @public
   */
  SegmentLength?: number | undefined;

  /**
   * Time unit for segment length parameter.
   * @public
   */
  SegmentLengthUnits?: CmafIngestSegmentLengthUnits | undefined;

  /**
   * Set to none if you don't want to insert a timecode in the output. Otherwise choose the frame type for the timecode.
   * @public
   */
  TimedMetadataId3Frame?: CmafTimedMetadataId3Frame | undefined;

  /**
   * If you set up to insert a timecode in the output, specify the frequency for the frame, in seconds.
   * @public
   */
  TimedMetadataId3Period?: number | undefined;

  /**
   * Set to enabled to pass through ID3 metadata from the input sources.
   * @public
   */
  TimedMetadataPassthrough?: CmafTimedMetadataPassthrough | undefined;
}

/**
 * Media Package Group Settings
 * @public
 */
export interface MediaPackageGroupSettings {
  /**
   * MediaPackage channel destination.
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Parameters that apply only if the destination parameter (for the output group) specifies a channelGroup and channelName. Use of these two paramters indicates that the output group is for MediaPackage V2 (CMAF Ingest).
   * @public
   */
  MediapackageV2GroupSettings?: MediaPackageV2GroupSettings | undefined;
}

/**
 * Ms Smooth Group Settings
 * @public
 */
export interface MsSmoothGroupSettings {
  /**
   * The ID to include in each message in the sparse track. Ignored if sparseTrackType is NONE.
   * @public
   */
  AcquisitionPointId?: string | undefined;

  /**
   * If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.
   * @public
   */
  AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl | undefined;

  /**
   * If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail.
   * @public
   */
  CertificateMode?: SmoothGroupCertificateMode | undefined;

  /**
   * Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.
   * @public
   */
  ConnectionRetryInterval?: number | undefined;

  /**
   * Smooth Streaming publish point on an IIS server. Elemental Live acts as a "Push" encoder to IIS.
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * MS Smooth event ID to be sent to the IIS server.
   *
   * Should only be specified if eventIdMode is set to useConfigured.
   * @public
   */
  EventId?: string | undefined;

  /**
   * Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.
   *
   * Options:
   * - "useConfigured" - use the value provided in eventId
   * - "useTimestamp" - generate and send an event ID based on the current timestamp
   * - "noEventId" - do not send an event ID to the IIS server.
   * @public
   */
  EventIdMode?: SmoothGroupEventIdMode | undefined;

  /**
   * When set to sendEos, send EOS signal to IIS server when stopping the event
   * @public
   */
  EventStopBehavior?: SmoothGroupEventStopBehavior | undefined;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number | undefined;

  /**
   * Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.
   * @public
   */
  FragmentLength?: number | undefined;

  /**
   * Parameter that control output group behavior on input loss.
   * @public
   */
  InputLossAction?: InputLossActionForMsSmoothOut | undefined;

  /**
   * Number of retry attempts.
   * @public
   */
  NumRetries?: number | undefined;

  /**
   * Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
   * @public
   */
  RestartDelay?: number | undefined;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   * @public
   */
  SegmentationMode?: SmoothGroupSegmentationMode | undefined;

  /**
   * Number of milliseconds to delay the output from the second pipeline.
   * @public
   */
  SendDelayMs?: number | undefined;

  /**
   * Identifies the type of data to place in the sparse track:
   * - SCTE35: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame to start a new segment.
   * - SCTE35_WITHOUT_SEGMENTATION: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame but don't start a new segment.
   * - NONE: Don't generate a sparse track for any outputs in this output group.
   * @public
   */
  SparseTrackType?: SmoothGroupSparseTrackType | undefined;

  /**
   * When set to send, send stream manifest so publishing point doesn't start until all streams start.
   * @public
   */
  StreamManifestBehavior?: SmoothGroupStreamManifestBehavior | undefined;

  /**
   * Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.
   * @public
   */
  TimestampOffset?: string | undefined;

  /**
   * Type of timestamp date offset to use.
   * - useEventStartDate: Use the date the event was started as the offset
   * - useConfiguredOffset: Use an explicitly configured date as the offset
   * @public
   */
  TimestampOffsetMode?: SmoothGroupTimestampOffsetMode | undefined;
}

/**
 * Multiplex Group Settings
 * @public
 */
export interface MultiplexGroupSettings {}

/**
 * Rtmp Group Settings
 * @public
 */
export interface RtmpGroupSettings {
  /**
   * Choose the ad marker type for this output group. MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.
   * @public
   */
  AdMarkers?: RtmpAdMarkers[] | undefined;

  /**
   * Authentication scheme to use when connecting with CDN
   * @public
   */
  AuthenticationScheme?: AuthenticationScheme | undefined;

  /**
   * Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again.
   * @public
   */
  CacheFullBehavior?: RtmpCacheFullBehavior | undefined;

  /**
   * Cache length, in seconds, is used to calculate buffer size.
   * @public
   */
  CacheLength?: number | undefined;

  /**
   * Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed.
   * @public
   */
  CaptionData?: RtmpCaptionData | undefined;

  /**
   * Controls the behavior of this RTMP group if input becomes unavailable.
   *
   * - emitOutput: Emit a slate until input returns.
   * - pauseOutput: Stop transmitting data until input returns. This does not close the underlying RTMP connection.
   * @public
   */
  InputLossAction?: InputLossActionForRtmpOut | undefined;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number | undefined;

  /**
   * Applies only when the rate control mode (in the codec settings) is CBR (constant bit rate). Controls whether the RTMP output stream is padded (with FILL NAL units) in order to achieve a constant bit rate that is truly constant. When there is no padding, the bandwidth varies (up to the bitrate value in the codec settings). We recommend that you choose Auto.
   * @public
   */
  IncludeFillerNalUnits?: IncludeFillerNalUnits | undefined;
}

/**
 * Srt Group Settings
 * @public
 */
export interface SrtGroupSettings {
  /**
   * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   * @public
   */
  InputLossAction?: InputLossActionForUdpOut | undefined;
}

/**
 * Udp Group Settings
 * @public
 */
export interface UdpGroupSettings {
  /**
   * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   * @public
   */
  InputLossAction?: InputLossActionForUdpOut | undefined;

  /**
   * Indicates ID3 frame that has the timecode.
   * @public
   */
  TimedMetadataId3Frame?: UdpTimedMetadataId3Frame | undefined;

  /**
   * Timed Metadata interval in seconds.
   * @public
   */
  TimedMetadataId3Period?: number | undefined;
}

/**
 * Output Group Settings
 * @public
 */
export interface OutputGroupSettings {
  /**
   * Archive Group Settings
   * @public
   */
  ArchiveGroupSettings?: ArchiveGroupSettings | undefined;

  /**
   * Frame Capture Group Settings
   * @public
   */
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings | undefined;

  /**
   * Hls Group Settings
   * @public
   */
  HlsGroupSettings?: HlsGroupSettings | undefined;

  /**
   * Media Package Group Settings
   * @public
   */
  MediaPackageGroupSettings?: MediaPackageGroupSettings | undefined;

  /**
   * Ms Smooth Group Settings
   * @public
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings | undefined;

  /**
   * Multiplex Group Settings
   * @public
   */
  MultiplexGroupSettings?: MultiplexGroupSettings | undefined;

  /**
   * Rtmp Group Settings
   * @public
   */
  RtmpGroupSettings?: RtmpGroupSettings | undefined;

  /**
   * Udp Group Settings
   * @public
   */
  UdpGroupSettings?: UdpGroupSettings | undefined;

  /**
   * Cmaf Ingest Group Settings
   * @public
   */
  CmafIngestGroupSettings?: CmafIngestGroupSettings | undefined;

  /**
   * Srt Group Settings
   * @public
   */
  SrtGroupSettings?: SrtGroupSettings | undefined;
}

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 * @public
 */
export interface OutputGroup {
  /**
   * Custom output group name optionally defined by the user.
   * @public
   */
  Name?: string | undefined;

  /**
   * Settings associated with the output group.
   * @public
   */
  OutputGroupSettings: OutputGroupSettings | undefined;

  /**
   * Placeholder documentation for __listOfOutput
   * @public
   */
  Outputs: Output[] | undefined;
}

/**
 * Runtime details of a pipeline when a channel is running.
 * @public
 */
export interface PipelineDetail {
  /**
   * The name of the active input attachment currently being ingested by this pipeline.
   * @public
   */
  ActiveInputAttachmentName?: string | undefined;

  /**
   * The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.
   * @public
   */
  ActiveInputSwitchActionName?: string | undefined;

  /**
   * The name of the motion graphics activate action that occurred most recently and that resulted in the current graphics URI for this pipeline.
   * @public
   */
  ActiveMotionGraphicsActionName?: string | undefined;

  /**
   * The current URI being used for HTML5 motion graphics for this pipeline.
   * @public
   */
  ActiveMotionGraphicsUri?: string | undefined;

  /**
   * Pipeline ID
   * @public
   */
  PipelineId?: string | undefined;

  /**
   * Current engine version of the encoder for this pipeline.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;
}

/**
 * Settings for pausing a pipeline.
 * @public
 */
export interface PipelinePauseStateSettings {
  /**
   * Pipeline ID to pause ("PIPELINE_0" or "PIPELINE_1").
   * @public
   */
  PipelineId: PipelineId | undefined;
}

/**
 * The Renewal settings for Reservations
 * @public
 */
export interface RenewalSettings {
  /**
   * Automatic renewal status for the reservation
   * @public
   */
  AutomaticRenewal?: ReservationAutomaticRenewal | undefined;

  /**
   * Count for the reservation renewal
   * @public
   */
  RenewalCount?: number | undefined;
}

/**
 * Reserved resources available to use
 * @public
 */
export interface Reservation {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   * @public
   */
  Arn?: string | undefined;

  /**
   * Number of reserved resources
   * @public
   */
  Count?: number | undefined;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number | undefined;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits | undefined;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   * @public
   */
  End?: string | undefined;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * User specified reservation name
   * @public
   */
  Name?: string | undefined;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string | undefined;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType | undefined;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings | undefined;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification | undefined;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   * @public
   */
  Start?: string | undefined;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   * @public
   */
  State?: ReservationState | undefined;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number | undefined;
}

/**
 * Used in CreateNetworkRequest.
 * @public
 */
export interface RouteCreateRequest {
  /**
   * A CIDR block for one Route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The IP address of the Gateway for this route, if applicable.
   * @public
   */
  Gateway?: string | undefined;
}

/**
 * Placeholder documentation for RouterDestinationSettings
 * @public
 */
export interface RouterDestinationSettings {
  /**
   * Availability Zone for this MediaConnect Router destination.
   * @public
   */
  AvailabilityZoneName: string | undefined;
}

/**
 * Used in UpdateNetworkRequest.
 * @public
 */
export interface RouteUpdateRequest {
  /**
   * A CIDR block for one Route.
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The IP address of the Gateway for this route, if applicable.
   * @public
   */
  Gateway?: string | undefined;
}

/**
 * Settings for the action to insert ID3 metadata in every segment, in HLS output groups.
 * @public
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * Complete this parameter if you want to specify only the metadata, not the entire frame. MediaLive will insert the metadata in a TXXX frame. Enter the value as plain text. You can include standard MediaLive variable data such as the current segment number.
   * @public
   */
  Tag?: string | undefined;

  /**
   * Complete this parameter if you want to specify the entire ID3 metadata. Enter a base64 string that contains one or more fully formed ID3 tags, according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   * @public
   */
  Id3?: string | undefined;
}

/**
 * Settings for the action to insert ID3 metadata (as a one-time action) in HLS output groups.
 * @public
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * Enter a base64 string that contains one or more fully formed ID3 tags.See the ID3 specification: http://id3.org/id3v2.4.0-structure
   * @public
   */
  Id3: string | undefined;
}

/**
 * Settings for the action to insert ID3 metadata in every segment, in applicable output groups.
 * @public
 */
export interface Id3SegmentTaggingScheduleActionSettings {
  /**
   * Complete this parameter if you want to specify the entire ID3 metadata. Enter a base64 string that contains one or more fully formed ID3 tags, according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   * @public
   */
  Id3?: string | undefined;

  /**
   * Complete this parameter if you want to specify only the metadata, not the entire frame. MediaLive will insert the metadata in a TXXX frame. Enter the value as plain text. You can include standard MediaLive variable data such as the current segment number.
   * @public
   */
  Tag?: string | undefined;
}

/**
 * Settings to identify the start of the clip.
 * @public
 */
export interface StartTimecode {
  /**
   * The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   * @public
   */
  Timecode?: string | undefined;
}

/**
 * Settings to identify the end of the clip.
 * @public
 */
export interface StopTimecode {
  /**
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   * @public
   */
  LastFrameClippingBehavior?: LastFrameClippingBehavior | undefined;

  /**
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   * @public
   */
  Timecode?: string | undefined;
}

/**
 * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
 * @public
 */
export interface InputClippingSettings {
  /**
   * The source of the timecodes in the source being clipped.
   * @public
   */
  InputTimecodeSource: InputTimecodeSource | undefined;

  /**
   * Settings to identify the start of the clip.
   * @public
   */
  StartTimecode?: StartTimecode | undefined;

  /**
   * Settings to identify the end of the clip.
   * @public
   */
  StopTimecode?: StopTimecode | undefined;
}

/**
 * Action to prepare an input for a future immediate input switch.
 * @public
 */
export interface InputPrepareScheduleActionSettings {
  /**
   * The name of the input attachment that should be prepared by this action. If no name is provided, the action will stop the most recent prepare (if any) when activated.
   * @public
   */
  InputAttachmentNameReference?: string | undefined;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   * @public
   */
  InputClippingSettings?: InputClippingSettings | undefined;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   * @public
   */
  UrlPath?: string[] | undefined;
}

/**
 * Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
 * @public
 */
export interface InputSwitchScheduleActionSettings {
  /**
   * The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.
   * @public
   */
  InputAttachmentNameReference: string | undefined;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   * @public
   */
  InputClippingSettings?: InputClippingSettings | undefined;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   * @public
   */
  UrlPath?: string[] | undefined;
}

/**
 * Settings to specify the rendering of motion graphics into the video stream.
 * @public
 */
export interface MotionGraphicsActivateScheduleActionSettings {
  /**
   * Duration (in milliseconds) that motion graphics should render on to the video stream. Leaving out this property or setting to 0 will result in rendering continuing until a deactivate action is processed.
   * @public
   */
  Duration?: number | undefined;

  /**
   * Key used to extract the password from EC2 Parameter store
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * URI of the HTML5 content to be rendered into the live stream.
   * @public
   */
  Url?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  Username?: string | undefined;
}

/**
 * Settings to specify the ending of rendering motion graphics into the video stream.
 * @public
 */
export interface MotionGraphicsDeactivateScheduleActionSettings {}

/**
 * Settings for the action to set pause state of a channel.
 * @public
 */
export interface PauseStateScheduleActionSettings {
  /**
   * Placeholder documentation for __listOfPipelinePauseStateSettings
   * @public
   */
  Pipelines?: PipelinePauseStateSettings[] | undefined;
}

/**
 * Scte35Input Schedule Action Settings
 * @public
 */
export interface Scte35InputScheduleActionSettings {
  /**
   * In fixed mode, enter the name of the input attachment that you want to use as a SCTE-35 input. (Don't enter the ID of the input.)"
   * @public
   */
  InputAttachmentNameReference?: string | undefined;

  /**
   * Whether the SCTE-35 input should be the active input or a fixed input.
   * @public
   */
  Mode: Scte35InputMode | undefined;
}

/**
 * Settings for a SCTE-35 return_to_network message.
 * @public
 */
export interface Scte35ReturnToNetworkScheduleActionSettings {
  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   * @public
   */
  SpliceEventId: number | undefined;
}

/**
 * Settings for a SCTE-35 splice_insert message.
 * @public
 */
export interface Scte35SpliceInsertScheduleActionSettings {
  /**
   * Optional, the duration for the splice_insert, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. If you enter a duration, there is an expectation that the downstream system can read the duration and cue in at that time. If you do not enter a duration, the splice_insert will continue indefinitely and there is an expectation that you will enter a return_to_network to end the splice_insert at the appropriate time.
   * @public
   */
  Duration?: number | undefined;

  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   * @public
   */
  SpliceEventId: number | undefined;
}

/**
 * Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.
 * @public
 */
export interface Scte35DeliveryRestrictions {
  /**
   * Corresponds to SCTE-35 archive_allowed_flag.
   * @public
   */
  ArchiveAllowedFlag: Scte35ArchiveAllowedFlag | undefined;

  /**
   * Corresponds to SCTE-35 device_restrictions parameter.
   * @public
   */
  DeviceRestrictions: Scte35DeviceRestrictions | undefined;

  /**
   * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
   * @public
   */
  NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag | undefined;

  /**
   * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
   * @public
   */
  WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag | undefined;
}

/**
 * Corresponds to SCTE-35 segmentation_descriptor.
 * @public
 */
export interface Scte35SegmentationDescriptor {
  /**
   * Holds the four SCTE-35 delivery restriction parameters.
   * @public
   */
  DeliveryRestrictions?: Scte35DeliveryRestrictions | undefined;

  /**
   * Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SegmentNum?: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_event_cancel_indicator.
   * @public
   */
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.
   * @public
   */
  SegmentationDuration?: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_event_id.
   * @public
   */
  SegmentationEventId: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").
   * @public
   */
  SegmentationTypeId?: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.
   * @public
   */
  SegmentationUpid?: string | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").
   * @public
   */
  SegmentationUpidType?: number | undefined;

  /**
   * Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SegmentsExpected?: number | undefined;

  /**
   * Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SubSegmentNum?: number | undefined;

  /**
   * Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SubSegmentsExpected?: number | undefined;
}

/**
 * SCTE-35 Descriptor settings.
 * @public
 */
export interface Scte35DescriptorSettings {
  /**
   * SCTE-35 Segmentation Descriptor.
   * @public
   */
  SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor | undefined;
}

/**
 * Holds one set of SCTE-35 Descriptor Settings.
 * @public
 */
export interface Scte35Descriptor {
  /**
   * SCTE-35 Descriptor Settings.
   * @public
   */
  Scte35DescriptorSettings: Scte35DescriptorSettings | undefined;
}

/**
 * Settings for a SCTE-35 time_signal.
 * @public
 */
export interface Scte35TimeSignalScheduleActionSettings {
  /**
   * The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.
   * @public
   */
  Scte35Descriptors: Scte35Descriptor[] | undefined;
}

/**
 * Settings for the action to activate a static image.
 * @public
 */
export interface StaticImageActivateScheduleActionSettings {
  /**
   * The duration in milliseconds for the image to remain on the video. If omitted or set to 0 the duration is unlimited and the image will remain until it is explicitly deactivated.
   * @public
   */
  Duration?: number | undefined;

  /**
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   * @public
   */
  FadeIn?: number | undefined;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   * @public
   */
  FadeOut?: number | undefined;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   * @public
   */
  Height?: number | undefined;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   * @public
   */
  Image: InputLocation | undefined;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   * @public
   */
  ImageX?: number | undefined;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   * @public
   */
  ImageY?: number | undefined;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   * @public
   */
  Layer?: number | undefined;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   * @public
   */
  Opacity?: number | undefined;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Settings for the action to deactivate the image in a specific layer.
 * @public
 */
export interface StaticImageDeactivateScheduleActionSettings {
  /**
   * The time in milliseconds for the image to fade out. Default is 0 (no fade-out).
   * @public
   */
  FadeOut?: number | undefined;

  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   * @public
   */
  Layer?: number | undefined;
}

/**
 * Settings for the action to activate a static image.
 * @public
 */
export interface StaticImageOutputActivateScheduleActionSettings {
  /**
   * The duration in milliseconds for the image to remain on the video. If omitted or set to 0 the duration is unlimited and the image will remain until it is explicitly deactivated.
   * @public
   */
  Duration?: number | undefined;

  /**
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   * @public
   */
  FadeIn?: number | undefined;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   * @public
   */
  FadeOut?: number | undefined;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   * @public
   */
  Height?: number | undefined;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   * @public
   */
  Image: InputLocation | undefined;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   * @public
   */
  ImageX?: number | undefined;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   * @public
   */
  ImageY?: number | undefined;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   * @public
   */
  Layer?: number | undefined;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   * @public
   */
  Opacity?: number | undefined;

  /**
   * The name(s) of the output(s) the activation should apply to.
   * @public
   */
  OutputNames: string[] | undefined;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Settings for the action to deactivate the image in a specific layer.
 * @public
 */
export interface StaticImageOutputDeactivateScheduleActionSettings {
  /**
   * The time in milliseconds for the image to fade out. Default is 0 (no fade-out).
   * @public
   */
  FadeOut?: number | undefined;

  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   * @public
   */
  Layer?: number | undefined;

  /**
   * The name(s) of the output(s) the deactivation should apply to.
   * @public
   */
  OutputNames: string[] | undefined;
}

/**
 * Settings for the action to insert ID3 metadata (as a one-time action) in applicable output groups.
 * @public
 */
export interface TimedMetadataScheduleActionSettings {
  /**
   * Enter a base64 string that contains one or more fully formed ID3 tags.See the ID3 specification: http://id3.org/id3v2.4.0-structure
   * @public
   */
  Id3: string | undefined;
}

/**
 * Holds the settings for a single schedule action.
 * @public
 */
export interface ScheduleActionSettings {
  /**
   * Action to insert ID3 metadata in every segment, in HLS output groups
   * @public
   */
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings | undefined;

  /**
   * Action to insert ID3 metadata once, in HLS output groups
   * @public
   */
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings | undefined;

  /**
   * Action to prepare an input for a future immediate input switch
   * @public
   */
  InputPrepareSettings?: InputPrepareScheduleActionSettings | undefined;

  /**
   * Action to switch the input
   * @public
   */
  InputSwitchSettings?: InputSwitchScheduleActionSettings | undefined;

  /**
   * Action to activate a motion graphics image overlay
   * @public
   */
  MotionGraphicsImageActivateSettings?: MotionGraphicsActivateScheduleActionSettings | undefined;

  /**
   * Action to deactivate a motion graphics image overlay
   * @public
   */
  MotionGraphicsImageDeactivateSettings?: MotionGraphicsDeactivateScheduleActionSettings | undefined;

  /**
   * Action to pause or unpause one or both channel pipelines
   * @public
   */
  PauseStateSettings?: PauseStateScheduleActionSettings | undefined;

  /**
   * Action to specify scte35 input
   * @public
   */
  Scte35InputSettings?: Scte35InputScheduleActionSettings | undefined;

  /**
   * Action to insert SCTE-35 return_to_network message
   * @public
   */
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings | undefined;

  /**
   * Action to insert SCTE-35 splice_insert message
   * @public
   */
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings | undefined;

  /**
   * Action to insert SCTE-35 time_signal message
   * @public
   */
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings | undefined;

  /**
   * Action to activate a static image overlay
   * @public
   */
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings | undefined;

  /**
   * Action to deactivate a static image overlay
   * @public
   */
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings | undefined;

  /**
   * Action to activate a static image overlay in one or more specified outputs
   * @public
   */
  StaticImageOutputActivateSettings?: StaticImageOutputActivateScheduleActionSettings | undefined;

  /**
   * Action to deactivate a static image overlay in one or more specified outputs
   * @public
   */
  StaticImageOutputDeactivateSettings?: StaticImageOutputDeactivateScheduleActionSettings | undefined;

  /**
   * Action to insert ID3 metadata in every segment, in applicable output groups
   * @public
   */
  Id3SegmentTaggingSettings?: Id3SegmentTaggingScheduleActionSettings | undefined;

  /**
   * Action to insert ID3 metadata once, in applicable output groups
   * @public
   */
  TimedMetadataSettings?: TimedMetadataScheduleActionSettings | undefined;
}

/**
 * Start time for the action.
 * @public
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".
   * @public
   */
  Time: string | undefined;
}

/**
 * Settings to specify if an action follows another.
 * @public
 */
export interface FollowModeScheduleActionStartSettings {
  /**
   * Identifies whether this action starts relative to the start or relative to the end of the reference action.
   * @public
   */
  FollowPoint: FollowPoint | undefined;

  /**
   * The action name of another action that this one refers to.
   * @public
   */
  ReferenceActionName: string | undefined;
}

/**
 * Settings to configure an action so that it occurs as soon as possible.
 * @public
 */
export interface ImmediateModeScheduleActionStartSettings {}

/**
 * Settings to specify when an action should occur. Only one of the options must be selected.
 * @public
 */
export interface ScheduleActionStartSettings {
  /**
   * Option for specifying the start time for an action.
   * @public
   */
  FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings | undefined;

  /**
   * Option for specifying an action as relative to another action.
   * @public
   */
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings | undefined;

  /**
   * Option for specifying an action that should be applied immediately.
   * @public
   */
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings | undefined;
}

/**
 * Contains information on a single schedule action.
 * @public
 */
export interface ScheduleAction {
  /**
   * The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.
   * @public
   */
  ActionName: string | undefined;

  /**
   * Settings for this schedule action.
   * @public
   */
  ScheduleActionSettings: ScheduleActionSettings | undefined;

  /**
   * The time for the action to start in the channel.
   * @public
   */
  ScheduleActionStartSettings: ScheduleActionStartSettings | undefined;
}

/**
 * Used in CreateSdiSourceResponse, DeleteSdiSourceResponse, DescribeSdiSourceResponse, ListSdiSourcesResponse, UpdateSdiSourceResponse
 * @public
 */
export interface SdiSourceSummary {
  /**
   * The ARN of this SdiSource. It is automatically assigned when the SdiSource is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the SdiSource. Unique in the AWS account.The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The list of inputs that are currently using this SDI source. This list will be empty if the SdiSource has just been deleted.
   * @public
   */
  Inputs?: string[] | undefined;

  /**
   * Applies only if the type is QUAD. The mode for handling the quad-link signal QUADRANT or INTERLEAVE.
   * @public
   */
  Mode?: SdiSourceMode | undefined;

  /**
   * The name of the SdiSource.
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies whether the SDI source is attached to an SDI input (IN_USE) or not (IDLE).
   * @public
   */
  State?: SdiSourceState | undefined;

  /**
   * Used in SdiSource, CreateSdiSourceRequest, UpdateSdiSourceRequest.
   * @public
   */
  Type?: SdiSourceType | undefined;
}

/**
 * Placeholder documentation for SignalMapSummary
 * @public
 */
export interface SignalMapSummary {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @public
   */
  Arn: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A signal map's id.
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A signal map's monitor deployment status.
   * @public
   */
  MonitorDeploymentStatus: SignalMapMonitorDeploymentStatus | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status: SignalMapStatus | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Complete these parameters only if the content is encrypted.
 * @public
 */
export interface SrtCallerDecryptionRequest {
  /**
   * The algorithm used to encrypt content.
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. This secret holds the passphrase that MediaLive will use to decrypt the source content.
   * @public
   */
  PassphraseSecretArn?: string | undefined;
}

/**
 * Configures the connection for a source that uses SRT as the connection protocol. In terms of establishing the connection, MediaLive is always the caller and the upstream system is always the listener. In terms of transmission of the source content, MediaLive is always the receiver and the upstream system is always the sender.
 * @public
 */
export interface SrtCallerSourceRequest {
  /**
   * Complete these parameters only if the content is encrypted.
   * @public
   */
  Decryption?: SrtCallerDecryptionRequest | undefined;

  /**
   * The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT. Obtain this value from the operator at the upstream system.
   * @public
   */
  MinimumLatency?: number | undefined;

  /**
   * The IP address at the upstream system (the listener) that MediaLive (the caller) will connect to.
   * @public
   */
  SrtListenerAddress?: string | undefined;

  /**
   * The port at the upstream system (the listener) that MediaLive (the caller) will connect to.
   * @public
   */
  SrtListenerPort?: string | undefined;

  /**
   * This value is required if the upstream system uses this identifier because without it, the SRT handshake between MediaLive (the caller) and the upstream system (the listener) might fail.
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Details of a single thumbnail
 * @public
 */
export interface Thumbnail {
  /**
   * The binary data for the latest thumbnail.
   * @public
   */
  Body?: string | undefined;

  /**
   * The content type for the latest thumbnail.
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Thumbnail Type
   * @public
   */
  ThumbnailType?: ThumbnailType | undefined;

  /**
   * Time stamp for the latest thumbnail.
   * @public
   */
  TimeStamp?: Date | undefined;
}

/**
 * Thumbnail details for one pipeline of a running channel.
 * @public
 */
export interface ThumbnailDetail {
  /**
   * Pipeline ID
   * @public
   */
  PipelineId?: string | undefined;

  /**
   * thumbnails of a single pipeline
   * @public
   */
  Thumbnails?: Thumbnail[] | undefined;
}

/**
 * Details about the input device that is being transferred.
 * @public
 */
export interface TransferringInputDeviceSummary {
  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string | undefined;

  /**
   * The optional message that the sender has attached to the transfer.
   * @public
   */
  Message?: string | undefined;

  /**
   * The AWS account ID for the recipient of the input device transfer.
   * @public
   */
  TargetCustomerId?: string | undefined;

  /**
   * The type (direction) of the input device transfer.
   * @public
   */
  TransferType?: InputDeviceTransferType | undefined;
}

/**
 * Placeholder documentation for ValidationError
 * @public
 */
export interface ValidationError {
  /**
   * Path to the source of the error.
   * @public
   */
  ElementPath?: string | undefined;

  /**
   * The error message.
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Passthrough applies no color space conversion to the output
 * @public
 */
export interface ColorSpacePassthroughSettings {}

/**
 * Rec601 Settings
 * @public
 */
export interface Rec601Settings {}

/**
 * Rec709 Settings
 * @public
 */
export interface Rec709Settings {}

/**
 * Av1 Color Space Settings
 * @public
 */
export interface Av1ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   * @public
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings | undefined;

  /**
   * Hdr10 Settings
   * @public
   */
  Hdr10Settings?: Hdr10Settings | undefined;

  /**
   * Rec601 Settings
   * @public
   */
  Rec601Settings?: Rec601Settings | undefined;

  /**
   * Rec709 Settings
   * @public
   */
  Rec709Settings?: Rec709Settings | undefined;
}

/**
 * Timecode Burnin Settings
 * @public
 */
export interface TimecodeBurninSettings {
  /**
   * Choose a timecode burn-in font size
   * @public
   */
  FontSize: TimecodeBurninFontSize | undefined;

  /**
   * Choose a timecode burn-in output position
   * @public
   */
  Position: TimecodeBurninPosition | undefined;

  /**
   * Create a timecode burn-in prefix (optional)
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Av1 Settings
 * @public
 */
export interface Av1Settings {
  /**
   * Configures whether MediaLive will write AFD values into the video.
   * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
   * FIXED: the AFD value will be the value configured in the fixedAfd parameter.
   * NONE: MediaLive won't write AFD into the video
   * @public
   */
  AfdSignaling?: AfdSignaling | undefined;

  /**
   * The size of the buffer (HRD buffer model) in bits.
   * @public
   */
  BufSize?: number | undefined;

  /**
   * Specify the type of color space to apply or choose to pass through. The default is to pass through the color space that is in the source.
   * @public
   */
  ColorSpaceSettings?: Av1ColorSpaceSettings | undefined;

  /**
   * Complete this property only if you set the afdSignaling property to FIXED. Choose the AFD value (4 bits) to write on all frames of the video encode.
   * @public
   */
  FixedAfd?: FixedAfd | undefined;

  /**
   * The denominator for the framerate. Framerate is a fraction, for example, 24000 / 1001.
   * @public
   */
  FramerateDenominator: number | undefined;

  /**
   * The numerator for the framerate. Framerate is a fraction, for example, 24000 / 1001.
   * @public
   */
  FramerateNumerator: number | undefined;

  /**
   * The GOP size (keyframe interval).
   * If GopSizeUnits is frames, GopSize must be a whole number and must be greater than or equal to 1.
   * If GopSizeUnits is seconds, GopSize must be greater than 0, but it can be a decimal.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Choose the units for the GOP size: FRAMES or SECONDS. For SECONDS, MediaLive converts the size into a frame count at run time.
   * @public
   */
  GopSizeUnits?: Av1GopSizeUnits | undefined;

  /**
   * Sets the level. This parameter is one of the properties of the encoding scheme for AV1.
   * @public
   */
  Level?: Av1Level | undefined;

  /**
   * Sets the amount of lookahead. A value of LOW can decrease latency and memory usage. A value of HIGH can produce better quality for certain content.
   * @public
   */
  LookAheadRateControl?: Av1LookAheadRateControl | undefined;

  /**
   * The maximum bitrate to assign.
   * For recommendations, see the description for qvbrQualityLevel.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Applies only if you enable SceneChangeDetect. Sets the interval between frames. This property ensures a minimum separation between repeated (cadence) I-frames and any I-frames inserted by scene change detection (SCD frames).
   * Enter a number for the interval, measured in number of frames.
   * If an SCD frame and a cadence frame are closer than the specified number of frames, MediaLive shrinks or stretches the GOP to include the SCD frame. Then normal cadence resumes in the next GOP. For GOP stretch to succeed, you must enable LookAheadRateControl.
   * Note that the maximum GOP stretch = (GOP size) + (Minimum I-interval) - 1
   * @public
   */
  MinIInterval?: number | undefined;

  /**
   * The denominator for the output pixel aspect ratio (PAR).
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * The numerator for the output pixel aspect ratio (PAR).
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * Controls the target quality for the video encode. With QVBR rate control mode, the final quality is the target quality, constrained by the maxBitrate.
   * Set values for the qvbrQualityLevel property and maxBitrate property that suit your most important viewing devices.
   * To let MediaLive set the quality level (AUTO mode), leave the qvbrQualityLevel field empty. In this case, MediaLive uses the maximum bitrate, and the quality follows from that: more complex content might have a lower quality.
   * Or set a target quality level and a maximum bitrate. With more complex content, MediaLive will try to achieve the target quality, but it won't exceed the maximum bitrate. With less complex content, This option will use only the bitrate needed to reach the target quality.
   * Recommended values are:
   * Primary screen: qvbrQualityLevel: Leave empty. maxBitrate: 4,000,000
   * PC or tablet: qvbrQualityLevel: Leave empty. maxBitrate: 1,500,000 to 3,000,000
   * Smartphone: qvbrQualityLevel: Leave empty. maxBitrate: 1,000,000 to 1,500,000
   * @public
   */
  QvbrQualityLevel?: number | undefined;

  /**
   * Controls whether MediaLive inserts I-frames when it detects a scene change. ENABLED or DISABLED.
   * @public
   */
  SceneChangeDetect?: Av1SceneChangeDetect | undefined;

  /**
   * Configures the timecode burn-in feature. If you enable this feature, the timecode will become part of the video.
   * @public
   */
  TimecodeBurninSettings?: TimecodeBurninSettings | undefined;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is CBR. Not used for QVBR.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   * @public
   */
  RateControlMode?: Av1RateControlMode | undefined;

  /**
   * Used for QVBR rate control mode only.
   * Optional.
   * Enter a minimum bitrate if you want to keep the output bitrate about a threshold, in order to prevent the downstream system from de-allocating network bandwidth for this output.
   * @public
   */
  MinBitrate?: number | undefined;

  /**
   * Spatial AQ makes adjustments within each frame based on spatial variation of content complexity. Enabled: MediaLive will determine the appropriate level of spatial AQ to apply. Disabled: No spatial AQ. For more information, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  SpatialAq?: Av1SpatialAq | undefined;

  /**
   * Temporal AQ makes adjustments within each frame based on variations in content complexity over time. Enabled: MediaLive will determine the appropriate level of temporal AQ to apply. Disabled: No temporal AQ. For more information, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  TemporalAq?: Av1TemporalAq | undefined;
}

/**
 * Frame Capture Settings
 * @public
 */
export interface FrameCaptureSettings {
  /**
   * The frequency at which to capture frames for inclusion in the output. May be specified in either seconds or milliseconds, as specified by captureIntervalUnits.
   * @public
   */
  CaptureInterval?: number | undefined;

  /**
   * Unit for the frame capture interval.
   * @public
   */
  CaptureIntervalUnits?: FrameCaptureIntervalUnit | undefined;

  /**
   * Timecode burn-in settings
   * @public
   */
  TimecodeBurninSettings?: TimecodeBurninSettings | undefined;
}

/**
 * H264 Color Space Settings
 * @public
 */
export interface H264ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   * @public
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings | undefined;

  /**
   * Rec601 Settings
   * @public
   */
  Rec601Settings?: Rec601Settings | undefined;

  /**
   * Rec709 Settings
   * @public
   */
  Rec709Settings?: Rec709Settings | undefined;
}

/**
 * Bandwidth Reduction Filter Settings
 * @public
 */
export interface BandwidthReductionFilterSettings {
  /**
   * Configures the sharpening control, which is available when the bandwidth reduction filter is enabled. This
   * control sharpens edges and contours, which produces a specific artistic effect that you might want.
   *
   * We recommend that you test each of the values (including DISABLED) to observe the sharpening effect on the
   * content.
   * @public
   */
  PostFilterSharpening?: BandwidthReductionPostFilterSharpening | undefined;

  /**
   * Enables the bandwidth reduction filter. The filter strengths range from 1 to 4. We recommend that you always
   * enable this filter and use AUTO, to let MediaLive apply the optimum filtering for the context.
   * @public
   */
  Strength?: BandwidthReductionFilterStrength | undefined;
}

/**
 * Temporal Filter Settings
 * @public
 */
export interface TemporalFilterSettings {
  /**
   * If you enable this filter, the results are the following:
   * - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.
   * - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
   * @public
   */
  PostFilterSharpening?: TemporalFilterPostFilterSharpening | undefined;

  /**
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   * @public
   */
  Strength?: TemporalFilterStrength | undefined;
}

/**
 * H264 Filter Settings
 * @public
 */
export interface H264FilterSettings {
  /**
   * Temporal Filter Settings
   * @public
   */
  TemporalFilterSettings?: TemporalFilterSettings | undefined;

  /**
   * Bandwidth Reduction Filter Settings
   * @public
   */
  BandwidthReductionFilterSettings?: BandwidthReductionFilterSettings | undefined;
}

/**
 * H264 Settings
 * @public
 */
export interface H264Settings {
  /**
   * Enables or disables adaptive quantization (AQ), which is a technique MediaLive can apply to video on a frame-by-frame basis to produce more compression without losing quality. There are three types of adaptive quantization: spatial, temporal, and flicker. We recommend that you set the field to Auto. For more information about all the options, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | undefined;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   * @public
   */
  AfdSignaling?: AfdSignaling | undefined;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   * @public
   */
  BufFillPct?: number | undefined;

  /**
   * Size of buffer (HRD buffer model) in bits.
   * @public
   */
  BufSize?: number | undefined;

  /**
   * Includes colorspace metadata in the output.
   * @public
   */
  ColorMetadata?: H264ColorMetadata | undefined;

  /**
   * Specify the type of color space to apply or choose to pass through. The default is to pass through the color space that is in the source.
   * @public
   */
  ColorSpaceSettings?: H264ColorSpaceSettings | undefined;

  /**
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   * @public
   */
  EntropyEncoding?: H264EntropyEncoding | undefined;

  /**
   * Optional. Both filters reduce bandwidth by removing imperceptible details. You can enable one of the filters. We
   * recommend that you try both filters and observe the results to decide which one to use.
   *
   * The Temporal Filter reduces bandwidth by removing imperceptible details in the content. It combines perceptual
   * filtering and motion compensated temporal filtering (MCTF). It operates independently of the compression level.
   *
   * The Bandwidth Reduction filter is a perceptual filter located within the encoding loop. It adapts to the current
   * compression level to filter imperceptible signals. This filter works only when the resolution is 1080p or lower.
   * @public
   */
  FilterSettings?: H264FilterSettings | undefined;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   * @public
   */
  FixedAfd?: FixedAfd | undefined;

  /**
   * Flicker AQ makes adjustments within each frame to reduce flicker or 'pop' on I-frames. The value to enter in this field depends on the value in the Adaptive quantization field. For more information, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  FlickerAq?: H264FlickerAq | undefined;

  /**
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)
   * enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.
   * disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   * @public
   */
  ForceFieldPictures?: H264ForceFieldPictures | undefined;

  /**
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   * @public
   */
  FramerateControl?: H264FramerateControl | undefined;

  /**
   * Framerate denominator.
   * @public
   */
  FramerateDenominator?: number | undefined;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   * @public
   */
  FramerateNumerator?: number | undefined;

  /**
   * Documentation update needed
   * @public
   */
  GopBReference?: H264GopBReference | undefined;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * Number of B-frames between reference frames.
   * @public
   */
  GopNumBFrames?: number | undefined;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   * @public
   */
  GopSizeUnits?: H264GopSizeUnits | undefined;

  /**
   * H.264 Level.
   * @public
   */
  Level?: H264Level | undefined;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   * @public
   */
  LookAheadRateControl?: H264LookAheadRateControl | undefined;

  /**
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   * @public
   */
  MinIInterval?: number | undefined;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   * @public
   */
  NumRefFrames?: number | undefined;

  /**
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   * @public
   */
  ParControl?: H264ParControl | undefined;

  /**
   * Pixel Aspect Ratio denominator.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Pixel Aspect Ratio numerator.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * H.264 Profile.
   * @public
   */
  Profile?: H264Profile | undefined;

  /**
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
   * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
   * - STANDARD_QUALITY: Valid for any Rate control mode.
   * @public
   */
  QualityLevel?: H264QualityLevel | undefined;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. You can set a target quality or you can let MediaLive determine the best quality. To set a target quality, enter values in the QVBR quality level field and the Max bitrate field. Enter values that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   * To let MediaLive decide, leave the QVBR quality level field empty, and in Max bitrate enter the maximum rate you want in the video. For more information, see the section called "Video - rate control mode" in the MediaLive user guide
   * @public
   */
  QvbrQualityLevel?: number | undefined;

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
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   * @public
   */
  RateControlMode?: H264RateControlMode | undefined;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   * @public
   */
  ScanType?: H264ScanType | undefined;

  /**
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   * @public
   */
  SceneChangeDetect?: H264SceneChangeDetect | undefined;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   * @public
   */
  Slices?: number | undefined;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.  If not set to zero, must be greater than 15.
   * @public
   */
  Softness?: number | undefined;

  /**
   * Spatial AQ makes adjustments within each frame based on spatial variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field. For more information, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  SpatialAq?: H264SpatialAq | undefined;

  /**
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   * @public
   */
  SubgopLength?: H264SubGopLength | undefined;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   * @public
   */
  Syntax?: H264Syntax | undefined;

  /**
   * Temporal makes adjustments within each frame based on variations in content complexity over time. The value to enter in this field depends on the value in the Adaptive quantization field. For more information, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  TemporalAq?: H264TemporalAq | undefined;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   * @public
   */
  TimecodeInsertion?: H264TimecodeInsertionBehavior | undefined;

  /**
   * Timecode burn-in settings
   * @public
   */
  TimecodeBurninSettings?: TimecodeBurninSettings | undefined;

  /**
   * Sets the minimum QP. If you aren't familiar with quantization adjustment, leave the field empty. MediaLive will
   * apply an appropriate value.
   * @public
   */
  MinQp?: number | undefined;

  /**
   * Used for QVBR rate control mode only.
   * Optional.
   * Enter a minimum bitrate if you want to keep the output bitrate about a threshold, in order to prevent the downstream system from de-allocating network bandwidth for this output.
   * @public
   */
  MinBitrate?: number | undefined;
}

/**
 * Dolby Vision81 Settings
 * @public
 */
export interface DolbyVision81Settings {}

/**
 * Hlg2020 Settings
 * @public
 */
export interface Hlg2020Settings {}

/**
 * H265 Color Space Settings
 * @public
 */
export interface H265ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   * @public
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings | undefined;

  /**
   * Dolby Vision81 Settings
   * @public
   */
  DolbyVision81Settings?: DolbyVision81Settings | undefined;

  /**
   * Hdr10 Settings
   * @public
   */
  Hdr10Settings?: Hdr10Settings | undefined;

  /**
   * Rec601 Settings
   * @public
   */
  Rec601Settings?: Rec601Settings | undefined;

  /**
   * Rec709 Settings
   * @public
   */
  Rec709Settings?: Rec709Settings | undefined;

  /**
   * Hlg2020 Settings
   * @public
   */
  Hlg2020Settings?: Hlg2020Settings | undefined;
}

/**
 * H265 Filter Settings
 * @public
 */
export interface H265FilterSettings {
  /**
   * Temporal Filter Settings
   * @public
   */
  TemporalFilterSettings?: TemporalFilterSettings | undefined;

  /**
   * Bandwidth Reduction Filter Settings
   * @public
   */
  BandwidthReductionFilterSettings?: BandwidthReductionFilterSettings | undefined;
}

/**
 * H265 Settings
 * @public
 */
export interface H265Settings {
  /**
   * Enables or disables adaptive quantization (AQ), which is a technique MediaLive can apply to video on a frame-by-frame basis to produce more compression without losing quality. There are three types of adaptive quantization: spatial, temporal, and flicker. Flicker is the only type that you can customize. We recommend that you set the field to Auto. For more information about all the options, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | undefined;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   * @public
   */
  AfdSignaling?: AfdSignaling | undefined;

  /**
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   * @public
   */
  AlternativeTransferFunction?: H265AlternativeTransferFunction | undefined;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   * @public
   */
  Bitrate?: number | undefined;

  /**
   * Size of buffer (HRD buffer model) in bits.
   * @public
   */
  BufSize?: number | undefined;

  /**
   * Includes colorspace metadata in the output.
   * @public
   */
  ColorMetadata?: H265ColorMetadata | undefined;

  /**
   * Specify the type of color space to apply or choose to pass through. The default is to pass through the color space that is in the source.
   * @public
   */
  ColorSpaceSettings?: H265ColorSpaceSettings | undefined;

  /**
   * Optional. Both filters reduce bandwidth by removing imperceptible details. You can enable one of the filters. We
   * recommend that you try both filters and observe the results to decide which one to use.
   *
   * The Temporal Filter reduces bandwidth by removing imperceptible details in the content. It combines perceptual
   * filtering and motion compensated temporal filtering (MCTF). It operates independently of the compression level.
   *
   * The Bandwidth Reduction filter is a perceptual filter located within the encoding loop. It adapts to the current
   * compression level to filter imperceptible signals. This filter works only when the resolution is 1080p or lower.
   * @public
   */
  FilterSettings?: H265FilterSettings | undefined;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   * @public
   */
  FixedAfd?: FixedAfd | undefined;

  /**
   * Flicker AQ makes adjustments within each frame to reduce flicker or 'pop' on I-frames. The value to enter in this field depends on the value in the Adaptive quantization field. For more information, see the topic about video adaptive quantization in the MediaLive user guide.
   * @public
   */
  FlickerAq?: H265FlickerAq | undefined;

  /**
   * Framerate denominator.
   * @public
   */
  FramerateDenominator: number | undefined;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   * @public
   */
  FramerateNumerator: number | undefined;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   * @public
   */
  GopSizeUnits?: H265GopSizeUnits | undefined;

  /**
   * H.265 Level.
   * @public
   */
  Level?: H265Level | undefined;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   * @public
   */
  LookAheadRateControl?: H265LookAheadRateControl | undefined;

  /**
   * For QVBR: See the tooltip for Quality level
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   * @public
   */
  MinIInterval?: number | undefined;

  /**
   * Pixel Aspect Ratio denominator.
   * @public
   */
  ParDenominator?: number | undefined;

  /**
   * Pixel Aspect Ratio numerator.
   * @public
   */
  ParNumerator?: number | undefined;

  /**
   * H.265 Profile.
   * @public
   */
  Profile?: H265Profile | undefined;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   * @public
   */
  QvbrQualityLevel?: number | undefined;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   * @public
   */
  RateControlMode?: H265RateControlMode | undefined;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   * @public
   */
  ScanType?: H265ScanType | undefined;

  /**
   * Scene change detection.
   * @public
   */
  SceneChangeDetect?: H265SceneChangeDetect | undefined;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   * @public
   */
  Slices?: number | undefined;

  /**
   * H.265 Tier.
   * @public
   */
  Tier?: H265Tier | undefined;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   * @public
   */
  TimecodeInsertion?: H265TimecodeInsertionBehavior | undefined;

  /**
   * Timecode burn-in settings
   * @public
   */
  TimecodeBurninSettings?: TimecodeBurninSettings | undefined;

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
   * Set this field to set up the picture as a tile. You must also set tileWidth.
   * The tile height must result in 22 or fewer rows in the frame. The tile width
   * must result in 20 or fewer columns in the frame. And finally, the product of the
   * column count and row count must be 64 of less.
   * If the tile width and height are specified, MediaLive will override the video
   * codec slices field with a value that MediaLive calculates
   * @public
   */
  TileHeight?: number | undefined;

  /**
   * Set to "padded" to force MediaLive to add padding to the frame, to obtain a frame that is a whole multiple of the tile size.
   * If you are setting up the picture as a tile, you must enter "padded".
   * In all other configurations, you typically enter "none".
   * @public
   */
  TilePadding?: H265TilePadding | undefined;

  /**
   * Set this field to set up the picture as a tile. See tileHeight for more information.
   * @public
   */
  TileWidth?: number | undefined;

  /**
   * Select the tree block size used for encoding. If you enter "auto", the encoder will pick the best size. If you are setting up the picture as a tile, you must set this to 32x32. In all other configurations, you typically enter "auto".
   * @public
   */
  TreeblockSize?: H265TreeblockSize | undefined;

  /**
   * Sets the minimum QP. If you aren't familiar with quantization adjustment, leave the field empty. MediaLive will
   * apply an appropriate value.
   * @public
   */
  MinQp?: number | undefined;

  /**
   * Enable or disable the deblocking filter for this codec. The filter reduces blocking artifacts at block boundaries,
   * which improves overall video quality. If the filter is disabled, visible block edges might appear in the output,
   * especially at lower bitrates.
   * @public
   */
  Deblocking?: H265Deblocking | undefined;

  /**
   * Allows the encoder to use a B-Frame as a reference frame as well.
   * ENABLED: B-frames will also serve as reference frames.
   * DISABLED: B-frames won't be reference frames.
   * Must be DISABLED if resolution is greater than 1080p or when using tiled hevc encoding.
   * @public
   */
  GopBReference?: H265GopBReference | undefined;

  /**
   * Sets the number of B-frames between reference frames.
   * Set to 2 if resolution is greater than 1080p or when using tiled hevc encoding.
   * @public
   */
  GopNumBFrames?: number | undefined;

  /**
   * Used for QVBR rate control mode only.
   * Optional.
   * Enter a minimum bitrate if you want to keep the output bitrate about a threshold, in order to prevent the downstream system from de-allocating network bandwidth for this output.
   * @public
   */
  MinBitrate?: number | undefined;

  /**
   * Sets the number of B-frames in each sub-GOP.
   * FIXED: Use the value in Num B-frames.
   * DYNAMIC: Optimizes the number of B-frames in each sub-GOP to improve visual quality.
   * Must be FIXED if resolution is greater than 1080p or when using tiled hevc encoding.
   * @public
   */
  SubgopLength?: H265SubGopLength | undefined;
}

/**
 * Mpeg2 Filter Settings
 * @public
 */
export interface Mpeg2FilterSettings {
  /**
   * Temporal Filter Settings
   * @public
   */
  TemporalFilterSettings?: TemporalFilterSettings | undefined;
}

/**
 * Mpeg2 Settings
 * @public
 */
export interface Mpeg2Settings {
  /**
   * Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
   * @public
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | undefined;

  /**
   * Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.
   * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
   * FIXED: MediaLive will use the value you specify in fixedAFD.
   * @public
   */
  AfdSignaling?: AfdSignaling | undefined;

  /**
   * Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
   * @public
   */
  ColorMetadata?: Mpeg2ColorMetadata | undefined;

  /**
   * Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \"MediaLive Features - Video - color space\" in the MediaLive User Guide.
   * PASSTHROUGH: Keep the color space of the input content - do not convert it.
   * AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
   * @public
   */
  ColorSpace?: Mpeg2ColorSpace | undefined;

  /**
   * Sets the pixel aspect ratio for the encode.
   * @public
   */
  DisplayAspectRatio?: Mpeg2DisplayRatio | undefined;

  /**
   * Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied.
   * TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.
   * When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.
   * When the content is reasonably clean, the filter tends to decrease the bitrate.
   * @public
   */
  FilterSettings?: Mpeg2FilterSettings | undefined;

  /**
   * Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.
   * @public
   */
  FixedAfd?: FixedAfd | undefined;

  /**
   * description": "The framerate denominator. For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   * @public
   */
  FramerateDenominator: number | undefined;

  /**
   * The framerate numerator. For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   * @public
   */
  FramerateNumerator: number | undefined;

  /**
   * MPEG2: default is open GOP.
   * @public
   */
  GopClosedCadence?: number | undefined;

  /**
   * Relates to the GOP structure. The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.
   * @public
   */
  GopNumBFrames?: number | undefined;

  /**
   * Relates to the GOP structure. The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default.
   * If gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.
   * @public
   */
  GopSize?: number | undefined;

  /**
   * Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
   * @public
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | undefined;

  /**
   * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
   * @public
   */
  ScanType?: Mpeg2ScanType | undefined;

  /**
   * Relates to the GOP structure. If you do not know what GOP is, use the default.
   * FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.
   * DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
   * @public
   */
  SubgopLength?: Mpeg2SubGopLength | undefined;

  /**
   * Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on \"MediaLive Features - Timecode configuration\" in the MediaLive User Guide.
   * DISABLED: do not include timecodes.
   * GOP_TIMECODE: Include timecode metadata in the GOP header.
   * @public
   */
  TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior | undefined;

  /**
   * Timecode burn-in settings
   * @public
   */
  TimecodeBurninSettings?: TimecodeBurninSettings | undefined;
}

/**
 * Video Codec Settings
 * @public
 */
export interface VideoCodecSettings {
  /**
   * Frame Capture Settings
   * @public
   */
  FrameCaptureSettings?: FrameCaptureSettings | undefined;

  /**
   * H264 Settings
   * @public
   */
  H264Settings?: H264Settings | undefined;

  /**
   * H265 Settings
   * @public
   */
  H265Settings?: H265Settings | undefined;

  /**
   * Mpeg2 Settings
   * @public
   */
  Mpeg2Settings?: Mpeg2Settings | undefined;

  /**
   * Av1 Settings
   * @public
   */
  Av1Settings?: Av1Settings | undefined;
}

/**
 * Video settings for this stream.
 * @public
 */
export interface VideoDescription {
  /**
   * Video codec settings.
   * @public
   */
  CodecSettings?: VideoCodecSettings | undefined;

  /**
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   * @public
   */
  Height?: number | undefined;

  /**
   * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
   * @public
   */
  Name: string | undefined;

  /**
   * Indicates how MediaLive will respond to the AFD values that might be in the input video. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose PASSTHROUGH.
   * RESPOND: MediaLive clips the input video using a formula that uses the AFD values (configured in afdSignaling ), the input display aspect ratio, and the output display aspect ratio. MediaLive also includes the AFD values in the output, unless the codec for this encode is FRAME_CAPTURE.
   * PASSTHROUGH: MediaLive ignores the AFD values and does not clip the video. But MediaLive does include the values in the output.
   * NONE: MediaLive does not clip the input video and does not include the AFD values in the output
   * @public
   */
  RespondToAfd?: VideoDescriptionRespondToAfd | undefined;

  /**
   * STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   * @public
   */
  ScalingBehavior?: VideoDescriptionScalingBehavior | undefined;

  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   * @public
   */
  Sharpness?: number | undefined;

  /**
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   * @public
   */
  Width?: number | undefined;
}

/**
 * Placeholder documentation for AcceptInputDeviceTransferRequest
 * @public
 */
export interface AcceptInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to accept. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for AcceptInputDeviceTransferResponse
 * @public
 */
export interface AcceptInputDeviceTransferResponse {}

/**
 * Placeholder documentation for AccountConfiguration
 * @public
 */
export interface AccountConfiguration {
  /**
   * Specifies the KMS key to use for all features that use key encryption. Specify the ARN of a KMS key that you have created. Or leave blank to use the key that MediaLive creates and manages for you.
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Elemental anywhere settings
 * @public
 */
export interface AnywhereSettings {
  /**
   * The ID of the channel placement group for the channel.
   * @public
   */
  ChannelPlacementGroupId?: string | undefined;

  /**
   * The ID of the cluster for the channel.
   * @public
   */
  ClusterId?: string | undefined;
}

/**
 * Avail Blanking
 * @public
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   * @public
   */
  AvailBlankingImage?: InputLocation | undefined;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   * @public
   */
  State?: AvailBlankingState | undefined;
}

/**
 * Esam
 * @public
 */
export interface Esam {
  /**
   * Sent as acquisitionPointIdentity to identify the MediaLive channel to the POIS.
   * @public
   */
  AcquisitionPointId: string | undefined;

  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   * @public
   */
  AdAvailOffset?: number | undefined;

  /**
   * Documentation update needed
   * @public
   */
  PasswordParam?: string | undefined;

  /**
   * The URL of the signal conditioner endpoint on the Placement Opportunity Information System (POIS). MediaLive sends SignalProcessingEvents here when SCTE-35 messages are read.
   * @public
   */
  PoisEndpoint: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  Username?: string | undefined;

  /**
   * Optional data sent as zoneIdentity to identify the MediaLive channel to the POIS.
   * @public
   */
  ZoneIdentity?: string | undefined;
}

/**
 * Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.
 * @public
 */
export interface Scte35SpliceInsert {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   * @public
   */
  AdAvailOffset?: number | undefined;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
   */
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior | undefined;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
   */
  WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior | undefined;
}

/**
 * Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.
 * @public
 */
export interface Scte35TimeSignalApos {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   * @public
   */
  AdAvailOffset?: number | undefined;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
   */
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior | undefined;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
   */
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior | undefined;
}

/**
 * Avail Settings
 * @public
 */
export interface AvailSettings {
  /**
   * Esam
   * @public
   */
  Esam?: Esam | undefined;

  /**
   * Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.
   * @public
   */
  Scte35SpliceInsert?: Scte35SpliceInsert | undefined;

  /**
   * Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.
   * @public
   */
  Scte35TimeSignalApos?: Scte35TimeSignalApos | undefined;
}

/**
 * Avail Configuration
 * @public
 */
export interface AvailConfiguration {
  /**
   * Controls how SCTE-35 messages create cues. Splice Insert mode treats all segmentation signals traditionally. With Time Signal APOS mode only Time Signal Placement Opportunity and Break messages create segment breaks. With ESAM mode, signals are forwarded to an ESAM server for possible update.
   * @public
   */
  AvailSettings?: AvailSettings | undefined;

  /**
   * Configures whether SCTE 35 passthrough triggers segment breaks in all output groups that use segmented outputs. Insertion of a SCTE 35 message typically results in a segment break, in addition to the regular cadence of breaks. The segment breaks appear in video outputs, audio outputs, and captions outputs (if any).
   *
   * ALL_OUTPUT_GROUPS: Default. Insert the segment break in in all output groups that have segmented outputs. This is the legacy behavior.
   * SCTE35_ENABLED_OUTPUT_GROUPS: Insert the segment break only in output groups that have SCTE 35 passthrough enabled. This is the recommended value, because it reduces unnecessary segment breaks.
   * @public
   */
  Scte35SegmentationScope?: Scte35SegmentationScope | undefined;
}

/**
 * A request to delete resources
 * @public
 */
export interface BatchDeleteRequest {
  /**
   * List of channel IDs
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * List of input IDs
   * @public
   */
  InputIds?: string[] | undefined;

  /**
   * List of input security group IDs
   * @public
   */
  InputSecurityGroupIds?: string[] | undefined;

  /**
   * List of multiplex IDs
   * @public
   */
  MultiplexIds?: string[] | undefined;
}

/**
 * Placeholder documentation for BatchDeleteResponse
 * @public
 */
export interface BatchDeleteResponse {
  /**
   * List of failed operations
   * @public
   */
  Failed?: BatchFailedResultModel[] | undefined;

  /**
   * List of successful operations
   * @public
   */
  Successful?: BatchSuccessfulResultModel[] | undefined;
}

/**
 * A list of schedule actions to create (in a request) or that have been created (in a response).
 * @public
 */
export interface BatchScheduleActionCreateRequest {
  /**
   * A list of schedule actions to create.
   * @public
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

/**
 * List of actions that have been created in the schedule.
 * @public
 */
export interface BatchScheduleActionCreateResult {
  /**
   * List of actions that have been created in the schedule.
   * @public
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

/**
 * A list of schedule actions to delete.
 * @public
 */
export interface BatchScheduleActionDeleteRequest {
  /**
   * A list of schedule actions to delete.
   * @public
   */
  ActionNames: string[] | undefined;
}

/**
 * List of actions that have been deleted from the schedule.
 * @public
 */
export interface BatchScheduleActionDeleteResult {
  /**
   * List of actions that have been deleted from the schedule.
   * @public
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

/**
 * A request to start resources
 * @public
 */
export interface BatchStartRequest {
  /**
   * List of channel IDs
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * List of multiplex IDs
   * @public
   */
  MultiplexIds?: string[] | undefined;
}

/**
 * Placeholder documentation for BatchStartResponse
 * @public
 */
export interface BatchStartResponse {
  /**
   * List of failed operations
   * @public
   */
  Failed?: BatchFailedResultModel[] | undefined;

  /**
   * List of successful operations
   * @public
   */
  Successful?: BatchSuccessfulResultModel[] | undefined;
}

/**
 * A request to stop resources
 * @public
 */
export interface BatchStopRequest {
  /**
   * List of channel IDs
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * List of multiplex IDs
   * @public
   */
  MultiplexIds?: string[] | undefined;
}

/**
 * Placeholder documentation for BatchStopResponse
 * @public
 */
export interface BatchStopResponse {
  /**
   * List of failed operations
   * @public
   */
  Failed?: BatchFailedResultModel[] | undefined;

  /**
   * List of successful operations
   * @public
   */
  Successful?: BatchSuccessfulResultModel[] | undefined;
}

/**
 * List of actions to create and list of actions to delete.
 * @public
 */
export interface BatchUpdateScheduleRequest {
  /**
   * Id of the channel whose schedule is being updated.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * Schedule actions to create in the schedule.
   * @public
   */
  Creates?: BatchScheduleActionCreateRequest | undefined;

  /**
   * Schedule actions to delete from the schedule.
   * @public
   */
  Deletes?: BatchScheduleActionDeleteRequest | undefined;
}

/**
 * Placeholder documentation for BatchUpdateScheduleResponse
 * @public
 */
export interface BatchUpdateScheduleResponse {
  /**
   * Schedule actions created in the schedule.
   * @public
   */
  Creates?: BatchScheduleActionCreateResult | undefined;

  /**
   * Schedule actions deleted from the schedule.
   * @public
   */
  Deletes?: BatchScheduleActionDeleteResult | undefined;
}

/**
 * Blackout Slate
 * @public
 */
export interface BlackoutSlate {
  /**
   * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
   * @public
   */
  BlackoutSlateImage?: InputLocation | undefined;

  /**
   * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
   * @public
   */
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout | undefined;

  /**
   * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
   * @public
   */
  NetworkEndBlackoutImage?: InputLocation | undefined;

  /**
   * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
   * @public
   */
  State?: BlackoutSlateState | undefined;
}

/**
 * Placeholder documentation for CancelInputDeviceTransferRequest
 * @public
 */
export interface CancelInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to cancel. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for CancelInputDeviceTransferResponse
 * @public
 */
export interface CancelInputDeviceTransferResponse {}
