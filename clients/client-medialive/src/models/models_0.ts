// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { MediaLiveServiceException as __BaseException } from "./MediaLiveServiceException";
import {
  AacCodingMode,
  AacInputType,
  AacProfile,
  AacRateControlMode,
  AacRawFormat,
  AacSpec,
  AacVbrQuality,
  Ac3BitstreamMode,
  Ac3CodingMode,
  Ac3DrcProfile,
  Ac3LfeFilter,
  Ac3MetadataControl,
  AcceptHeader,
  AfdSignaling,
  AudioDescriptionAudioTypeControl,
  AudioDescriptionLanguageCodeControl,
  AudioLanguageSelectionPolicy,
  AudioNormalizationAlgorithm,
  AudioNormalizationAlgorithmControl,
  AudioOnlyHlsSegmentType,
  AudioOnlyHlsTrackType,
  AudioType,
  AvailBlankingState,
  BlackoutSlateNetworkEndBlackout,
  BlackoutSlateState,
  BurnInAlignment,
  BurnInBackgroundColor,
  BurnInFontColor,
  BurnInOutlineColor,
  BurnInShadowColor,
  BurnInTeletextGridControl,
  CdiInputResolution,
  ChannelClass,
  ChannelState,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  DvbSdtOutputSdt,
  DvbSubDestinationAlignment,
  DvbSubDestinationBackgroundColor,
  DvbSubDestinationFontColor,
  DvbSubDestinationOutlineColor,
  DvbSubDestinationShadowColor,
  DvbSubDestinationTeletextGridControl,
  DvbSubOcrLanguage,
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
  FeatureActivationsInputPrepareScheduleActions,
  FecOutputIncludeFec,
  FixedAfd,
  Fmp4NielsenId3Behavior,
  Fmp4TimedMetadataBehavior,
  FollowPoint,
  FrameCaptureIntervalUnit,
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
  H265FlickerAq,
  H265GopSizeUnits,
  H265Level,
  H265LookAheadRateControl,
  H265Profile,
  H265RateControlMode,
  H265ScanType,
  H265SceneChangeDetect,
  H265Tier,
  H265TimecodeInsertionBehavior,
  HlsAkamaiHttpTransferMode,
  HlsCaptionLanguageSetting,
  HlsClientCache,
  HlsCodecSpecification,
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
  InputClass,
  InputCodec,
  InputDeblockFilter,
  InputDenoiseFilter,
  InputDestinationVpc,
  InputDeviceActiveInput,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceIpScheme,
  InputDeviceScanType,
  InputDeviceState,
  InputDeviceTransferType,
  InputDeviceType,
  InputFilter,
  InputLossActionForHlsOut,
  InputLossImageType,
  InputMaximumBitrate,
  InputPreference,
  InputResolution,
  InputSecurityGroupState,
  InputSourceEndBehavior,
  InputSourceType,
  InputState,
  InputTimecodeSource,
  InputType,
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
  M3u8Settings,
  MaintenanceDay,
  MotionGraphicsInsertion,
  MotionGraphicsSettings,
  Mp2CodingMode,
  MultiplexMediaConnectOutputDestinationSettings,
  MultiplexProgramChannelDestinationSettings,
  MultiplexProgramServiceDescriptor,
  MultiplexSettingsSummary,
  MultiplexState,
  MultiplexVideoSettings,
  NetworkInputSettings,
  NielsenCBET,
  NielsenNaesIiNw,
  NielsenPcmToId3TaggingState,
  NielsenWatermarksDistributionTypes,
  OfferingDurationUnits,
  OfferingType,
  OutputGroupSettings,
  OutputSettings,
  PipelineId,
  ReservationCodec,
  ReservationMaximumBitrate,
  ReservationMaximumFramerate,
  ReservationResolution,
  ReservationResourceType,
  ReservationSpecialFeature,
  ReservationState,
  ReservationVideoQuality,
  S3CannedAcl,
  ScheduleActionSettings,
  ScheduleActionStartSettings,
  Scte20Convert608To708,
  Scte27OcrLanguage,
  Scte35AposNoRegionalBlackoutBehavior,
  Scte35AposWebDeliveryAllowedBehavior,
  Scte35DescriptorSettings,
  Scte35SpliceInsertNoRegionalBlackoutBehavior,
  Scte35SpliceInsertWebDeliveryAllowedBehavior,
  Smpte2038DataPreference,
  StartTimecode,
  StaticKeySettings,
  StopTimecode,
  TemporalFilterPostFilterSharpening,
  TemporalFilterStrength,
  TtmlDestinationStyleControl,
  VideoCodecSettings,
  VideoDescriptionRespondToAfd,
  VideoDescriptionScalingBehavior,
  VideoSelector,
  WavCodingMode,
  WebvttDestinationStyleControl,
} from "./models_1";
import { ContentType, PreferredChannelPipeline, TimecodeConfigSource } from "./models_2";

/**
 * Input Channel Level
 */
export interface InputChannelLevel {
  /**
   * Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.
   */
  Gain: number | undefined;

  /**
   * The index of the input channel used as a source.
   */
  InputChannel: number | undefined;
}

export namespace InputChannelLevel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputChannelLevel): any => ({
    ...obj,
  });
}

/**
 * Audio Channel Mapping
 */
export interface AudioChannelMapping {
  /**
   * Indices and gain values for each input channel that should be remixed into this output channel.
   */
  InputChannelLevels: InputChannelLevel[] | undefined;

  /**
   * The index of the output channel being produced.
   */
  OutputChannel: number | undefined;
}

export namespace AudioChannelMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioChannelMapping): any => ({
    ...obj,
  });
}

/**
 * Audio Normalization Settings
 */
export interface AudioNormalizationSettings {
  /**
   * Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification.
   */
  Algorithm?: AudioNormalizationAlgorithm | string;

  /**
   * When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted.
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | string;

  /**
   * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
   */
  TargetLkfs?: number;
}

export namespace AudioNormalizationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioNormalizationSettings): any => ({
    ...obj,
  });
}

/**
 * Nielsen Watermarks Settings
 */
export interface NielsenWatermarksSettings {
  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen CBET
   */
  NielsenCbetSettings?: NielsenCBET;

  /**
   * Choose the distribution types that you want to assign to the watermarks:
   * - PROGRAM_CONTENT
   * - FINAL_DISTRIBUTOR
   */
  NielsenDistributionType?: NielsenWatermarksDistributionTypes | string;

  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
   */
  NielsenNaesIiNwSettings?: NielsenNaesIiNw;
}

export namespace NielsenWatermarksSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NielsenWatermarksSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Watermark Settings
 */
export interface AudioWatermarkSettings {
  /**
   * Settings to configure Nielsen Watermarks in the audio encode
   */
  NielsenWatermarksSettings?: NielsenWatermarksSettings;
}

export namespace AudioWatermarkSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioWatermarkSettings): any => ({
    ...obj,
  });
}

/**
 * Aac Settings
 */
export interface AacSettings {
  /**
   * Average bitrate in bits/second. Valid values depend on rate control mode and profile.
   */
  Bitrate?: number;

  /**
   * Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   */
  CodingMode?: AacCodingMode | string;

  /**
   * Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.
   *
   * Leave set to "normal" when input does not contain pre-mixed audio + AD.
   */
  InputType?: AacInputType | string;

  /**
   * AAC Profile.
   */
  Profile?: AacProfile | string;

  /**
   * Rate Control Mode.
   */
  RateControlMode?: AacRateControlMode | string;

  /**
   * Sets LATM / LOAS AAC output for raw containers.
   */
  RawFormat?: AacRawFormat | string;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   */
  SampleRate?: number;

  /**
   * Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   */
  Spec?: AacSpec | string;

  /**
   * VBR Quality Level - Only used if rateControlMode is VBR.
   */
  VbrQuality?: AacVbrQuality | string;
}

export namespace AacSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AacSettings): any => ({
    ...obj,
  });
}

/**
 * Ac3 Settings
 */
export interface Ac3Settings {
  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.
   */
  BitstreamMode?: Ac3BitstreamMode | string;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   */
  CodingMode?: Ac3CodingMode | string;

  /**
   * Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   */
  DrcProfile?: Ac3DrcProfile | string;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode.
   */
  LfeFilter?: Ac3LfeFilter | string;

  /**
   * When set to "followInput", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Ac3MetadataControl | string;
}

export namespace Ac3Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ac3Settings): any => ({
    ...obj,
  });
}

/**
 * Eac3 Settings
 */
export interface Eac3Settings {
  /**
   * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: Eac3AttenuationControl | string;

  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.
   */
  BitstreamMode?: Eac3BitstreamMode | string;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   */
  CodingMode?: Eac3CodingMode | string;

  /**
   * When set to enabled, activates a DC highpass filter for all input channels.
   */
  DcFilter?: Eac3DcFilter | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * Sets the Dolby dynamic range compression profile.
   */
  DrcLine?: Eac3DrcLine | string;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   */
  DrcRf?: Eac3DrcRf | string;

  /**
   * When encoding 3/2 audio, setting to lfe enables the LFE channel
   */
  LfeControl?: Eac3LfeControl | string;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.
   */
  LfeFilter?: Eac3LfeFilter | string;

  /**
   * Left only/Right only center mix level. Only used for 3/2 coding mode.
   */
  LoRoCenterMixLevel?: number;

  /**
   * Left only/Right only surround mix level. Only used for 3/2 coding mode.
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Left total/Right total center mix level. Only used for 3/2 coding mode.
   */
  LtRtCenterMixLevel?: number;

  /**
   * Left total/Right total surround mix level. Only used for 3/2 coding mode.
   */
  LtRtSurroundMixLevel?: number;

  /**
   * When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Eac3MetadataControl | string;

  /**
   * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: Eac3PassthroughControl | string;

  /**
   * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: Eac3PhaseControl | string;

  /**
   * Stereo downmix preference. Only used for 3/2 coding mode.
   */
  StereoDownmix?: Eac3StereoDownmix | string;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   */
  SurroundExMode?: Eac3SurroundExMode | string;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   */
  SurroundMode?: Eac3SurroundMode | string;
}

export namespace Eac3Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Eac3Settings): any => ({
    ...obj,
  });
}

/**
 * Mp2 Settings
 */
export interface Mp2Settings {
  /**
   * Average bitrate in bits/second.
   */
  Bitrate?: number;

  /**
   * The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
   */
  CodingMode?: Mp2CodingMode | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

export namespace Mp2Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Mp2Settings): any => ({
    ...obj,
  });
}

/**
 * Pass Through Settings
 */
export interface PassThroughSettings {}

export namespace PassThroughSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PassThroughSettings): any => ({
    ...obj,
  });
}

/**
 * Wav Settings
 */
export interface WavSettings {
  /**
   * Bits per sample.
   */
  BitDepth?: number;

  /**
   * The audio coding mode for the WAV audio. The mode determines the number of channels in the audio.
   */
  CodingMode?: WavCodingMode | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

export namespace WavSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WavSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Codec Settings
 */
export interface AudioCodecSettings {
  /**
   * Aac Settings
   */
  AacSettings?: AacSettings;

  /**
   * Ac3 Settings
   */
  Ac3Settings?: Ac3Settings;

  /**
   * Eac3 Settings
   */
  Eac3Settings?: Eac3Settings;

  /**
   * Mp2 Settings
   */
  Mp2Settings?: Mp2Settings;

  /**
   * Pass Through Settings
   */
  PassThroughSettings?: PassThroughSettings;

  /**
   * Wav Settings
   */
  WavSettings?: WavSettings;
}

export namespace AudioCodecSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioCodecSettings): any => ({
    ...obj,
  });
}

/**
 * Remix Settings
 */
export interface RemixSettings {
  /**
   * Mapping of input channels to output channels, with appropriate gain adjustments.
   */
  ChannelMappings: AudioChannelMapping[] | undefined;

  /**
   * Number of input channels to be used.
   */
  ChannelsIn?: number;

  /**
   * Number of output channels to be produced.
   * Valid values: 1, 2, 4, 6, 8
   */
  ChannelsOut?: number;
}

export namespace RemixSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemixSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Description
 */
export interface AudioDescription {
  /**
   * Advanced audio normalization settings.
   */
  AudioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * The name of the AudioSelector used as the source for this AudioDescription.
   */
  AudioSelectorName: string | undefined;

  /**
   * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
   */
  AudioType?: AudioType | string;

  /**
   * Determines how audio type is determined.
   *   followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.
   *   useConfigured: The value in Audio Type is included in the output.
   * Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
   */
  AudioTypeControl?: AudioDescriptionAudioTypeControl | string;

  /**
   * Settings to configure one or more solutions that insert audio watermarks in the audio encode
   */
  AudioWatermarkingSettings?: AudioWatermarkSettings;

  /**
   * Audio codec settings.
   */
  CodecSettings?: AudioCodecSettings;

  /**
   * RFC 5646 language code representing the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
   */
  LanguageCode?: string;

  /**
   * Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCodeControl?: AudioDescriptionLanguageCodeControl | string;

  /**
   * The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * Settings that control how input audio channels are remixed into the output audio channels.
   */
  RemixSettings?: RemixSettings;

  /**
   * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).
   */
  StreamName?: string;
}

export namespace AudioDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioDescription): any => ({
    ...obj,
  });
}

/**
 * Audio Hls Rendition Selection
 */
export interface AudioHlsRenditionSelection {
  /**
   * Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   */
  GroupId: string | undefined;

  /**
   * Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   */
  Name: string | undefined;
}

export namespace AudioHlsRenditionSelection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioHlsRenditionSelection): any => ({
    ...obj,
  });
}

/**
 * Audio Language Selection
 */
export interface AudioLanguageSelection {
  /**
   * Selects a specific three-letter language code from within an audio source.
   */
  LanguageCode: string | undefined;

  /**
   * When set to "strict", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If "loose", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can't find one with the same language.
   */
  LanguageSelectionPolicy?: AudioLanguageSelectionPolicy | string;
}

export namespace AudioLanguageSelection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioLanguageSelection): any => ({
    ...obj,
  });
}

/**
 * Audio Pid Selection
 */
export interface AudioPidSelection {
  /**
   * Selects a specific PID from within a source.
   */
  Pid: number | undefined;
}

export namespace AudioPidSelection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioPidSelection): any => ({
    ...obj,
  });
}

/**
 * Audio Track
 */
export interface AudioTrack {
  /**
   * 1-based integer value that maps to a specific audio track
   */
  Track: number | undefined;
}

export namespace AudioTrack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioTrack): any => ({
    ...obj,
  });
}

/**
 * Audio Track Selection
 */
export interface AudioTrackSelection {
  /**
   * Selects one or more unique audio tracks from within a source.
   */
  Tracks: AudioTrack[] | undefined;
}

export namespace AudioTrackSelection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioTrackSelection): any => ({
    ...obj,
  });
}

/**
 * Audio Selector Settings
 */
export interface AudioSelectorSettings {
  /**
   * Audio Hls Rendition Selection
   */
  AudioHlsRenditionSelection?: AudioHlsRenditionSelection;

  /**
   * Audio Language Selection
   */
  AudioLanguageSelection?: AudioLanguageSelection;

  /**
   * Audio Pid Selection
   */
  AudioPidSelection?: AudioPidSelection;

  /**
   * Audio Track Selection
   */
  AudioTrackSelection?: AudioTrackSelection;
}

export namespace AudioSelectorSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioSelectorSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Selector
 */
export interface AudioSelector {
  /**
   * The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.
   */
  Name: string | undefined;

  /**
   * The audio selector settings.
   */
  SelectorSettings?: AudioSelectorSettings;
}

export namespace AudioSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioSelector): any => ({
    ...obj,
  });
}

/**
 * Details from a failed operation
 */
export interface BatchFailedResultModel {
  /**
   * ARN of the resource
   */
  Arn?: string;

  /**
   * Error code for the failed operation
   */
  Code?: string;

  /**
   * ID of the resource
   */
  Id?: string;

  /**
   * Error message for the failed operation
   */
  Message?: string;
}

export namespace BatchFailedResultModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchFailedResultModel): any => ({
    ...obj,
  });
}

/**
 * Details from a successful operation
 */
export interface BatchSuccessfulResultModel {
  /**
   * ARN of the resource
   */
  Arn?: string;

  /**
   * ID of the resource
   */
  Id?: string;

  /**
   * Current state of the resource
   */
  State?: string;
}

export namespace BatchSuccessfulResultModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchSuccessfulResultModel): any => ({
    ...obj,
  });
}

/**
 * Arib Destination Settings
 */
export interface AribDestinationSettings {}

export namespace AribDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AribDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Input Location
 */
export interface InputLocation {
  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: "rtmp://fmsserver/live".
   */
  Uri: string | undefined;

  /**
   * Documentation update needed
   */
  Username?: string;
}

export namespace InputLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputLocation): any => ({
    ...obj,
  });
}

/**
 * Burn In Destination Settings
 */
export interface BurnInDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: BurnInAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: BurnInBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   */
  Font?: InputLocation;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: BurnInFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: string;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: BurnInOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: BurnInShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   */
  TeletextGridControl?: BurnInTeletextGridControl | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export namespace BurnInDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BurnInDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Dvb Sub Destination Settings
 */
export interface DvbSubDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: DvbSubDestinationAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: DvbSubDestinationBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   */
  Font?: InputLocation;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: DvbSubDestinationFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: string;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: DvbSubDestinationOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: DvbSubDestinationShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   */
  TeletextGridControl?: DvbSubDestinationTeletextGridControl | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export namespace DvbSubDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DvbSubDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Ebu Tt DDestination Settings
 */
export interface EbuTtDDestinationSettings {
  /**
   * Complete this field if you want to include the name of the copyright holder in the copyright tag in the captions metadata.
   */
  CopyrightHolder?: string;

  /**
   * Specifies how to handle the gap between the lines (in multi-line captions).
   *
   * - enabled: Fill with the captions background color (as specified in the input captions).
   * - disabled: Leave the gap unfilled.
   */
  FillLineGap?: EbuTtDFillLineGapControl | string;

  /**
   * Specifies the font family to include in the font data attached to the EBU-TT captions. Valid only if styleControl is set to include. If you leave this field empty, the font family is set to "monospaced". (If styleControl is set to exclude, the font family is always set to "monospaced".)
   *
   * You specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size.
   *
   * - Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as “Arial”), or a generic font family (such as “serif”), or “default” (to let the downstream player choose the font).
   * - Leave blank to set the family to “monospace”.
   */
  FontFamily?: string;

  /**
   * Specifies the style information (font color, font position, and so on) to include in the font data that is attached to the EBU-TT captions.
   *
   * - include: Take the style information (font color, font position, and so on) from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext.
   * - exclude: In the font data attached to the EBU-TT captions, set the font family to "monospaced". Do not include any other style information.
   */
  StyleControl?: EbuTtDDestinationStyleControl | string;
}

export namespace EbuTtDDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbuTtDDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Embedded Destination Settings
 */
export interface EmbeddedDestinationSettings {}

export namespace EmbeddedDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmbeddedDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Embedded Plus Scte20 Destination Settings
 */
export interface EmbeddedPlusScte20DestinationSettings {}

export namespace EmbeddedPlusScte20DestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmbeddedPlusScte20DestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Rtmp Caption Info Destination Settings
 */
export interface RtmpCaptionInfoDestinationSettings {}

export namespace RtmpCaptionInfoDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RtmpCaptionInfoDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Scte20 Plus Embedded Destination Settings
 */
export interface Scte20PlusEmbeddedDestinationSettings {}

export namespace Scte20PlusEmbeddedDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte20PlusEmbeddedDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Scte27 Destination Settings
 */
export interface Scte27DestinationSettings {}

export namespace Scte27DestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte27DestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Smpte Tt Destination Settings
 */
export interface SmpteTtDestinationSettings {}

export namespace SmpteTtDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SmpteTtDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Teletext Destination Settings
 */
export interface TeletextDestinationSettings {}

export namespace TeletextDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TeletextDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Ttml Destination Settings
 */
export interface TtmlDestinationSettings {
  /**
   * This field is not currently supported and will not affect the output styling. Leave the default value.
   */
  StyleControl?: TtmlDestinationStyleControl | string;
}

export namespace TtmlDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TtmlDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Webvtt Destination Settings
 */
export interface WebvttDestinationSettings {
  /**
   * Controls whether the color and position of the source captions is passed through to the WebVTT output captions.  PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT.  NO_STYLE_DATA - Don't pass through the style. The output captions will not contain any font styling information.
   */
  StyleControl?: WebvttDestinationStyleControl | string;
}

export namespace WebvttDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WebvttDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Caption Destination Settings
 */
export interface CaptionDestinationSettings {
  /**
   * Arib Destination Settings
   */
  AribDestinationSettings?: AribDestinationSettings;

  /**
   * Burn In Destination Settings
   */
  BurnInDestinationSettings?: BurnInDestinationSettings;

  /**
   * Dvb Sub Destination Settings
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * Ebu Tt DDestination Settings
   */
  EbuTtDDestinationSettings?: EbuTtDDestinationSettings;

  /**
   * Embedded Destination Settings
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * Embedded Plus Scte20 Destination Settings
   */
  EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;

  /**
   * Rtmp Caption Info Destination Settings
   */
  RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;

  /**
   * Scte20 Plus Embedded Destination Settings
   */
  Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;

  /**
   * Scte27 Destination Settings
   */
  Scte27DestinationSettings?: Scte27DestinationSettings;

  /**
   * Smpte Tt Destination Settings
   */
  SmpteTtDestinationSettings?: SmpteTtDestinationSettings;

  /**
   * Teletext Destination Settings
   */
  TeletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * Ttml Destination Settings
   */
  TtmlDestinationSettings?: TtmlDestinationSettings;

  /**
   * Webvtt Destination Settings
   */
  WebvttDestinationSettings?: WebvttDestinationSettings;
}

export namespace CaptionDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptionDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Caption Description
 */
export interface CaptionDescription {
  /**
   * Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
   */
  CaptionSelectorName: string | undefined;

  /**
   * Additional settings for captions destination that depend on the destination type.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/
   */
  LanguageCode?: string;

  /**
   * Human readable information to indicate captions available for players (eg. English, or Spanish).
   */
  LanguageDescription?: string;

  /**
   * Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.
   */
  Name: string | undefined;
}

export namespace CaptionDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptionDescription): any => ({
    ...obj,
  });
}

/**
 * Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
 */
export interface CaptionLanguageMapping {
  /**
   * The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)
   */
  CaptionChannel: number | undefined;

  /**
   * Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)
   */
  LanguageCode: string | undefined;

  /**
   * Textual description of language
   */
  LanguageDescription: string | undefined;
}

export namespace CaptionLanguageMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptionLanguageMapping): any => ({
    ...obj,
  });
}

/**
 * Ancillary Source Settings
 */
export interface AncillarySourceSettings {
  /**
   * Specifies the number (1 to 4) of the captions channel you want to extract from the ancillary captions. If you plan to convert the ancillary captions to another format, complete this field. If you plan to choose Embedded as the captions destination in the output (to pass through all the channels in the ancillary captions), leave this field blank because MediaLive ignores the field.
   */
  SourceAncillaryChannelNumber?: number;
}

export namespace AncillarySourceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AncillarySourceSettings): any => ({
    ...obj,
  });
}

/**
 * Arib Source Settings
 */
export interface AribSourceSettings {}

export namespace AribSourceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AribSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Dvb Sub Source Settings
 */
export interface DvbSubSourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   */
  OcrLanguage?: DvbSubOcrLanguage | string;

  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   */
  Pid?: number;
}

export namespace DvbSubSourceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DvbSubSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Embedded Source Settings
 */
export interface EmbeddedSourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: EmbeddedConvert608To708 | string;

  /**
   * Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
   */
  Scte20Detection?: EmbeddedScte20Detection | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * This field is unused and deprecated.
   */
  Source608TrackNumber?: number;
}

export namespace EmbeddedSourceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmbeddedSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Scte20 Source Settings
 */
export interface Scte20SourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: Scte20Convert608To708 | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;
}

export namespace Scte20SourceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte20SourceSettings): any => ({
    ...obj,
  });
}

/**
 * Scte27 Source Settings
 */
export interface Scte27SourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   */
  OcrLanguage?: Scte27OcrLanguage | string;

  /**
   * The pid field is used in conjunction with the caption selector languageCode field as follows:
   *   - Specify PID and Language: Extracts captions from that PID; the language is "informational".
   *   - Specify PID and omit Language: Extracts the specified PID.
   *   - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.
   *   - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through.
   */
  Pid?: number;
}

export namespace Scte27SourceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte27SourceSettings): any => ({
    ...obj,
  });
}

/**
 * Caption Rectangle
 */
export interface CaptionRectangle {
  /**
   * See the description in leftOffset.
   * For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, \"80\" means the rectangle height is 80% of the underlying frame height. The topOffset and rectangleHeight must add up to 100% or less.
   * This field corresponds to tts:extent - Y in the TTML standard.
   */
  Height: number | undefined;

  /**
   * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don't have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages.
   * If you specify a value for one of these fields, you must specify a value for all of them.
   * For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame.
   * This field corresponds to tts:origin - X in the TTML standard.
   */
  LeftOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For topOffset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame.
   * This field corresponds to tts:origin - Y in the TTML standard.
   */
  TopOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, \"80\" means the rectangle width is 80% of the underlying frame width. The leftOffset and rectangleWidth must add up to 100% or less.
   * This field corresponds to tts:extent - X in the TTML standard.
   */
  Width: number | undefined;
}

export namespace CaptionRectangle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptionRectangle): any => ({
    ...obj,
  });
}

/**
 * Teletext Source Settings
 */
export interface TeletextSourceSettings {
  /**
   * Optionally defines a region where TTML style captions will be displayed
   */
  OutputRectangle?: CaptionRectangle;

  /**
   * Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.
   */
  PageNumber?: string;
}

export namespace TeletextSourceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TeletextSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Caption Selector Settings
 */
export interface CaptionSelectorSettings {
  /**
   * Ancillary Source Settings
   */
  AncillarySourceSettings?: AncillarySourceSettings;

  /**
   * Arib Source Settings
   */
  AribSourceSettings?: AribSourceSettings;

  /**
   * Dvb Sub Source Settings
   */
  DvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * Embedded Source Settings
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * Scte20 Source Settings
   */
  Scte20SourceSettings?: Scte20SourceSettings;

  /**
   * Scte27 Source Settings
   */
  Scte27SourceSettings?: Scte27SourceSettings;

  /**
   * Teletext Source Settings
   */
  TeletextSourceSettings?: TeletextSourceSettings;
}

export namespace CaptionSelectorSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptionSelectorSettings): any => ({
    ...obj,
  });
}

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface CaptionSelector {
  /**
   * When specified this field indicates the three letter language code of the caption track to extract from the source.
   */
  LanguageCode?: string;

  /**
   * Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.
   */
  Name: string | undefined;

  /**
   * Caption selector settings.
   */
  SelectorSettings?: CaptionSelectorSettings;
}

export namespace CaptionSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptionSelector): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ChannelEgressEndpoint
 */
export interface ChannelEgressEndpoint {
  /**
   * Public IP of where a channel's output comes from
   */
  SourceIp?: string;
}

export namespace ChannelEgressEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelEgressEndpoint): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CdiInputSpecification
 */
export interface CdiInputSpecification {
  /**
   * Maximum CDI input resolution
   */
  Resolution?: CdiInputResolution | string;
}

export namespace CdiInputSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CdiInputSpecification): any => ({
    ...obj,
  });
}

/**
 * MediaPackage Output Destination Settings
 */
export interface MediaPackageOutputDestinationSettings {
  /**
   * ID of the channel in MediaPackage that is the destination for this output group. You do not need to specify the individual inputs in MediaPackage; MediaLive will handle the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same region.
   */
  ChannelId?: string;
}

export namespace MediaPackageOutputDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaPackageOutputDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for OutputDestinationSettings
 */
export interface OutputDestinationSettings {
  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * Stream name for RTMP destinations (URLs of type rtmp://)
   */
  StreamName?: string;

  /**
   * A URL specifying a destination
   */
  Url?: string;

  /**
   * username for destination
   */
  Username?: string;
}

export namespace OutputDestinationSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for OutputDestination
 */
export interface OutputDestination {
  /**
   * User-specified id. This is used in an output group or an output.
   */
  Id?: string;

  /**
   * Destination settings for a MediaPackage output; one destination for both encoders.
   */
  MediaPackageSettings?: MediaPackageOutputDestinationSettings[];

  /**
   * Destination settings for a Multiplex output; one destination for both encoders.
   */
  MultiplexSettings?: MultiplexProgramChannelDestinationSettings;

  /**
   * Destination settings for a standard output; one destination for each redundant encoder.
   */
  Settings?: OutputDestinationSettings[];
}

export namespace OutputDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDestination): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for AudioSilenceFailoverSettings
 */
export interface AudioSilenceFailoverSettings {
  /**
   * The name of the audio selector in the input that MediaLive should monitor to detect silence. Select your most important rendition. If you didn't create an audio selector in this input, leave blank.
   */
  AudioSelectorName: string | undefined;

  /**
   * The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.
   */
  AudioSilenceThresholdMsec?: number;
}

export namespace AudioSilenceFailoverSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioSilenceFailoverSettings): any => ({
    ...obj,
  });
}

/**
 * MediaLive will perform a failover if content is not detected in this input for the specified period.
 */
export interface InputLossFailoverSettings {
  /**
   * The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.
   */
  InputLossThresholdMsec?: number;
}

export namespace InputLossFailoverSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputLossFailoverSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for VideoBlackFailoverSettings
 */
export interface VideoBlackFailoverSettings {
  /**
   * A value used in calculating the threshold below which MediaLive considers a pixel to be 'black'. For the input to be considered black, every pixel in a frame must be below this threshold. The threshold is calculated as a percentage (expressed as a decimal) of white. Therefore .1 means 10% white (or 90% black). Note how the formula works for any color depth. For example, if you set this field to 0.1 in 10-bit color depth: (1023*0.1=102.3), which means a pixel value of 102 or less is 'black'. If you set this field to .1 in an 8-bit color depth: (255*0.1=25.5), which means a pixel value of 25 or less is 'black'. The range is 0.0 to 1.0, with any number of decimal places.
   */
  BlackDetectThreshold?: number;

  /**
   * The amount of time (in milliseconds) that the active input must be black before automatic input failover occurs.
   */
  VideoBlackThresholdMsec?: number;
}

export namespace VideoBlackFailoverSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoBlackFailoverSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for one failover condition.
 */
export interface FailoverConditionSettings {
  /**
   * MediaLive will perform a failover if the specified audio selector is silent for the specified period.
   */
  AudioSilenceSettings?: AudioSilenceFailoverSettings;

  /**
   * MediaLive will perform a failover if content is not detected in this input for the specified period.
   */
  InputLossSettings?: InputLossFailoverSettings;

  /**
   * MediaLive will perform a failover if content is considered black for the specified period.
   */
  VideoBlackSettings?: VideoBlackFailoverSettings;
}

export namespace FailoverConditionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverConditionSettings): any => ({
    ...obj,
  });
}

/**
 * Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.
 */
export interface FailoverCondition {
  /**
   * Failover condition type-specific settings.
   */
  FailoverConditionSettings?: FailoverConditionSettings;
}

export namespace FailoverCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverCondition): any => ({
    ...obj,
  });
}

/**
 * The settings for Automatic Input Failover.
 */
export interface AutomaticInputFailoverSettings {
  /**
   * This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input_preference for the failover pair is set to PRIMARY_INPUT_PREFERRED, because after this time, MediaLive will switch back to the primary input.
   */
  ErrorClearTimeMsec?: number;

  /**
   * A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input.
   */
  FailoverConditions?: FailoverCondition[];

  /**
   * Input preference when deciding which input to make active when a previously failed input has recovered.
   */
  InputPreference?: InputPreference | string;

  /**
   * The input ID of the secondary input in the automatic input failover pair.
   */
  SecondaryInputId: string | undefined;
}

export namespace AutomaticInputFailoverSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomaticInputFailoverSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Input Settings
 */
export interface HlsInputSettings {
  /**
   * When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest.
   */
  Bandwidth?: number;

  /**
   * When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8.
   */
  BufferSegments?: number;

  /**
   * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
   */
  Retries?: number;

  /**
   * The number of seconds between retries when an attempt to read a manifest or segment fails.
   */
  RetryInterval?: number;

  /**
   * Identifies the source for the SCTE-35 messages that MediaLive will ingest. Messages can be ingested from the content segments (in the stream) or from tags in the playlist (the HLS manifest). MediaLive ignores SCTE-35 information in the source that is not selected.
   */
  Scte35Source?: HlsScte35SourceType | string;
}

export namespace HlsInputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsInputSettings): any => ({
    ...obj,
  });
}

/**
 * Hdr10 Settings
 */
export interface Hdr10Settings {
  /**
   * Maximum Content Light Level
   * An integer metadata value defining the maximum light level, in nits,
   * of any single pixel within an encoded HDR video stream or file.
   */
  MaxCll?: number;

  /**
   * Maximum Frame Average Light Level
   * An integer metadata value defining the maximum average light level, in nits,
   * for any single frame within an encoded HDR video stream or file.
   */
  MaxFall?: number;
}

export namespace Hdr10Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Hdr10Settings): any => ({
    ...obj,
  });
}

/**
 * Live Event input parameters. There can be multiple inputs in a single Live Event.
 */
export interface InputSettings {
  /**
   * Used to select the audio stream to decode for inputs that have multiple available.
   */
  AudioSelectors?: AudioSelector[];

  /**
   * Used to select the caption input to use for inputs that have multiple available.
   */
  CaptionSelectors?: CaptionSelector[];

  /**
   * Enable or disable the deblock filter when filtering.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Enable or disable the denoise filter when filtering.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
   */
  FilterStrength?: number;

  /**
   * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.
   * 1) auto - filtering will be applied depending on input type/quality
   * 2) disabled - no filtering will be applied to the input
   * 3) forced - filtering will be applied regardless of input type
   */
  InputFilter?: InputFilter | string;

  /**
   * Input settings.
   */
  NetworkInputSettings?: NetworkInputSettings;

  /**
   * PID from which to read SCTE-35 messages. If left undefined, EML will select the first SCTE-35 PID found in the input.
   */
  Scte35Pid?: number;

  /**
   * Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input. Applicable data types are captions, timecode, AFD, and SCTE-104 messages.
   * - PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any).
   * - IGNORE: Never extract any ancillary data from SMPTE-2038.
   */
  Smpte2038DataPreference?: Smpte2038DataPreference | string;

  /**
   * Loop input if it is a file. This allows a file input to be streamed indefinitely.
   */
  SourceEndBehavior?: InputSourceEndBehavior | string;

  /**
   * Informs which video elementary stream to decode for input types that have multiple available.
   */
  VideoSelector?: VideoSelector;
}

export namespace InputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for InputAttachment
 */
export interface InputAttachment {
  /**
   * User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input.
   */
  AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;

  /**
   * User-specified name for the attachment. This is required if the user wants to use this input in an input switch action.
   */
  InputAttachmentName?: string;

  /**
   * The ID of the input
   */
  InputId?: string;

  /**
   * Settings of an input (caption selector, etc.)
   */
  InputSettings?: InputSettings;
}

export namespace InputAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputAttachment): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for InputSpecification
 */
export interface InputSpecification {
  /**
   * Input codec
   */
  Codec?: InputCodec | string;

  /**
   * Maximum input bitrate, categorized coarsely
   */
  MaximumBitrate?: InputMaximumBitrate | string;

  /**
   * Input resolution, categorized coarsely
   */
  Resolution?: InputResolution | string;
}

export namespace InputSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSpecification): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MaintenanceStatus
 */
export interface MaintenanceStatus {
  /**
   * The currently selected maintenance day.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * Maintenance is required by the displayed date and time. Date and time is in ISO.
   */
  MaintenanceDeadline?: string;

  /**
   * The currently scheduled maintenance date and time. Date and time is in ISO.
   */
  MaintenanceScheduledDate?: string;

  /**
   * The currently selected maintenance start time. Time is in UTC.
   */
  MaintenanceStartTime?: string;
}

export namespace MaintenanceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceStatus): any => ({
    ...obj,
  });
}

/**
 * The properties for a private VPC Output
 */
export interface VpcOutputSettingsDescription {
  /**
   * The Availability Zones where the vpc subnets are located.
   * The first Availability Zone applies to the first subnet in the list of subnets.
   * The second Availability Zone applies to the second subnet.
   */
  AvailabilityZones?: string[];

  /**
   * A list of Elastic Network Interfaces created by MediaLive in the customer's VPC
   */
  NetworkInterfaceIds?: string[];

  /**
   * A list of up EC2 VPC security group IDs attached to the Output VPC network interfaces.
   */
  SecurityGroupIds?: string[];

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds?: string[];
}

export namespace VpcOutputSettingsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcOutputSettingsDescription): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ChannelSummary
 */
export interface ChannelSummary {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for any VPC outputs.
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace ChannelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
    ...obj,
  });
}

export enum HlsAdMarkers {
  ADOBE = "ADOBE",
  ELEMENTAL = "ELEMENTAL",
  ELEMENTAL_SCTE35 = "ELEMENTAL_SCTE35",
}

/**
 * The settings for a PUSH type input.
 */
export interface InputDestination {
  /**
   * The system-generated static IP address of endpoint.
   * It remains fixed for the lifetime of the input.
   */
  Ip?: string;

  /**
   * The port number for the input.
   */
  Port?: string;

  /**
   * This represents the endpoint that the customer stream will be
   * pushed to.
   */
  Url?: string;

  /**
   * The properties for a VPC type input destination.
   */
  Vpc?: InputDestinationVpc;
}

export namespace InputDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDestination): any => ({
    ...obj,
  });
}

/**
 * Settings for an input device.
 */
export interface InputDeviceSettings {
  /**
   * The unique ID for the device.
   */
  Id?: string;
}

export namespace InputDeviceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceSettings): any => ({
    ...obj,
  });
}

/**
 * The settings for a MediaConnect Flow.
 */
export interface MediaConnectFlow {
  /**
   * The unique ARN of the MediaConnect Flow being used as a source.
   */
  FlowArn?: string;
}

export namespace MediaConnectFlow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaConnectFlow): any => ({
    ...obj,
  });
}

/**
 * The settings for a PULL type input.
 */
export interface InputSource {
  /**
   * The key used to extract the password from EC2 Parameter store.
   */
  PasswordParam?: string;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   */
  Url?: string;

  /**
   * The username for the input source.
   */
  Username?: string;
}

export namespace InputSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSource): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for Input
 */
export interface Input {
  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass | string;

  /**
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of IDs for all Inputs which are partners of this one.
   */
  InputPartnerIds?: string[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   */
  InputSourceType?: InputSourceType | string;

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * Placeholder documentation for InputState
   */
  State?: InputState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType | string;
}

export namespace Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

/**
 * Endpoint settings for a PUSH type input.
 */
export interface InputDestinationRequest {
  /**
   * A unique name for the location the RTMP stream is being pushed
   * to.
   */
  StreamName?: string;
}

export namespace InputDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDestinationRequest): any => ({
    ...obj,
  });
}

/**
 * Settings for an input device.
 */
export interface InputDeviceRequest {
  /**
   * The unique ID for the device.
   */
  Id?: string;
}

export namespace InputDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 */
export interface InputDeviceHdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   */
  ActiveInput?: InputDeviceActiveInput | string;

  /**
   * The source at the input device that is currently active. You can specify this source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;

  /**
   * The state of the input device.
   */
  DeviceState?: InputDeviceState | string;

  /**
   * The frame rate of the video source.
   */
  Framerate?: number;

  /**
   * The height of the video source, in pixels.
   */
  Height?: number;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   */
  MaxBitrate?: number;

  /**
   * The scan type of the video source.
   */
  ScanType?: InputDeviceScanType | string;

  /**
   * The width of the video source, in pixels.
   */
  Width?: number;
}

export namespace InputDeviceHdSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceHdSettings): any => ({
    ...obj,
  });
}

/**
 * The network settings for the input device.
 */
export interface InputDeviceNetworkSettings {
  /**
   * The DNS addresses of the input device.
   */
  DnsAddresses?: string[];

  /**
   * The network gateway IP address.
   */
  Gateway?: string;

  /**
   * The IP address of the input device.
   */
  IpAddress?: string;

  /**
   * Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.
   */
  IpScheme?: InputDeviceIpScheme | string;

  /**
   * The subnet mask of the input device.
   */
  SubnetMask?: string;
}

export namespace InputDeviceNetworkSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceNetworkSettings): any => ({
    ...obj,
  });
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 */
export interface InputDeviceUhdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   */
  ActiveInput?: InputDeviceActiveInput | string;

  /**
   * The source at the input device that is currently active. You can specify this source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;

  /**
   * The state of the input device.
   */
  DeviceState?: InputDeviceState | string;

  /**
   * The frame rate of the video source.
   */
  Framerate?: number;

  /**
   * The height of the video source, in pixels.
   */
  Height?: number;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   */
  MaxBitrate?: number;

  /**
   * The scan type of the video source.
   */
  ScanType?: InputDeviceScanType | string;

  /**
   * The width of the video source, in pixels.
   */
  Width?: number;
}

export namespace InputDeviceUhdSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceUhdSettings): any => ({
    ...obj,
  });
}

/**
 * Details of the input device.
 */
export interface InputDeviceSummary {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * Network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;
}

export namespace InputDeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceSummary): any => ({
    ...obj,
  });
}

/**
 * Whitelist rule
 */
export interface InputWhitelistRule {
  /**
   * The IPv4 CIDR that's whitelisted.
   */
  Cidr?: string;
}

export namespace InputWhitelistRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputWhitelistRule): any => ({
    ...obj,
  });
}

/**
 * An Input Security Group
 */
export interface InputSecurityGroup {
  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];
}

export namespace InputSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * Settings for for a PULL type input.
 */
export interface InputSourceRequest {
  /**
   * The key used to extract the password from EC2 Parameter store.
   */
  PasswordParam?: string;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   */
  Url?: string;

  /**
   * The username for the input source.
   */
  Username?: string;
}

export namespace InputSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSourceRequest): any => ({
    ...obj,
  });
}

/**
 * An IPv4 CIDR to whitelist.
 */
export interface InputWhitelistRuleCidr {
  /**
   * The IPv4 CIDR to whitelist.
   */
  Cidr?: string;
}

export namespace InputWhitelistRuleCidr {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputWhitelistRuleCidr): any => ({
    ...obj,
  });
}

/**
 * The settings for a MediaConnect Flow.
 */
export interface MediaConnectFlowRequest {
  /**
   * The ARN of the MediaConnect Flow that you want to use as a source.
   */
  FlowArn?: string;
}

export namespace MediaConnectFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaConnectFlowRequest): any => ({
    ...obj,
  });
}

/**
 * Multiplex output destination settings
 */
export interface MultiplexOutputDestination {
  /**
   * Multiplex MediaConnect output destination settings.
   */
  MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings;
}

export namespace MultiplexOutputDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexOutputDestination): any => ({
    ...obj,
  });
}

/**
 * The current source for one of the pipelines in the multiplex.
 */
export interface MultiplexProgramPipelineDetail {
  /**
   * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
   */
  ActiveChannelPipeline?: string;

  /**
   * Identifies a specific pipeline in the multiplex.
   */
  PipelineId?: string;
}

export namespace MultiplexProgramPipelineDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramPipelineDetail): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MultiplexProgramSummary
 */
export interface MultiplexProgramSummary {
  /**
   * The MediaLive Channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

export namespace MultiplexProgramSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramSummary): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MultiplexSummary
 */
export interface MultiplexSummary {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettingsSummary;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace MultiplexSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexSummary): any => ({
    ...obj,
  });
}

/**
 * Resource configuration (codec, resolution, bitrate, ...)
 */
export interface ReservationResourceSpecification {
  /**
   * Channel class, e.g. 'STANDARD'
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Codec, e.g. 'AVC'
   */
  Codec?: ReservationCodec | string;

  /**
   * Maximum bitrate, e.g. 'MAX_20_MBPS'
   */
  MaximumBitrate?: ReservationMaximumBitrate | string;

  /**
   * Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)
   */
  MaximumFramerate?: ReservationMaximumFramerate | string;

  /**
   * Resolution, e.g. 'HD'
   */
  Resolution?: ReservationResolution | string;

  /**
   * Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: ReservationResourceType | string;

  /**
   * Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)
   */
  SpecialFeature?: ReservationSpecialFeature | string;

  /**
   * Video quality, e.g. 'STANDARD' (Outputs only)
   */
  VideoQuality?: ReservationVideoQuality | string;
}

export namespace ReservationResourceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservationResourceSpecification): any => ({
    ...obj,
  });
}

/**
 * Reserved resources available for purchase
 */
export interface Offering {
  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace Offering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Offering): any => ({
    ...obj,
  });
}

/**
 * DVB Network Information Table (NIT)
 */
export interface DvbNitSettings {
  /**
   * The numeric value placed in the Network Information Table (NIT).
   */
  NetworkId: number | undefined;

  /**
   * The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.
   */
  NetworkName: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export namespace DvbNitSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DvbNitSettings): any => ({
    ...obj,
  });
}

/**
 * DVB Service Description Table (SDT)
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information.
   */
  OutputSdt?: DvbSdtOutputSdt | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;

  /**
   * The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceName?: string;

  /**
   * The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceProviderName?: string;
}

export namespace DvbSdtSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DvbSdtSettings): any => ({
    ...obj,
  });
}

/**
 * DVB Time and Date Table (SDT)
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export namespace DvbTdtSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DvbTdtSettings): any => ({
    ...obj,
  });
}

/**
 * M2ts Settings
 */
export interface M2tsSettings {
  /**
   * When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
   */
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior | string;

  /**
   * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
   */
  Arib?: M2tsArib | string;

  /**
   * Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  AribCaptionsPid?: string;

  /**
   * If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number.
   */
  AribCaptionsPidControl?: M2tsAribCaptionsPidControl | string;

  /**
   * When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.
   */
  AudioBufferModel?: M2tsAudioBufferModel | string;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  AudioPids?: string;

  /**
   * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
   */
  AudioStreamType?: M2tsAudioStreamType | string;

  /**
   * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.
   */
  Bitrate?: number;

  /**
   * Controls the timing accuracy for output network traffic. Leave as MULTIPLEX to ensure accurate network packet timing. Or set to NONE, which might result in lower latency but will result in more variability in output network packet timing. This variability might cause interruptions, jitter, or bursty behavior in your playback or receiving devices.
   */
  BufferModel?: M2tsBufferModel | string;

  /**
   * When set to enabled, generates captionServiceDescriptor in PMT.
   */
  CcDescriptor?: M2tsCcDescriptor | string;

  /**
   * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
   */
  DvbNitSettings?: DvbNitSettings;

  /**
   * Inserts DVB Service Description Table (SDT) at the specified table repetition interval.
   */
  DvbSdtSettings?: DvbSdtSettings;

  /**
   * Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  DvbSubPids?: string;

  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
   */
  DvbTdtSettings?: DvbTdtSettings;

  /**
   * Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  DvbTeletextPid?: string;

  /**
   * If set to passthrough, passes any EBIF data from the input source to this output.
   */
  Ebif?: M2tsEbifControl | string;

  /**
   * When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval.
   */
  EbpAudioInterval?: M2tsAudioInterval | string;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   */
  EbpLookaheadMs?: number;

  /**
   * Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID.
   */
  EbpPlacement?: M2tsEbpPlacement | string;

  /**
   * This field is unused and deprecated.
   */
  EcmPid?: string;

  /**
   * Include or exclude the ES Rate field in the PES header.
   */
  EsRateInPes?: M2tsEsRateInPes | string;

  /**
   * Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  EtvPlatformPid?: string;

  /**
   * Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  EtvSignalPid?: string;

  /**
   * The length in seconds of each fragment. Only used with EBP markers.
   */
  FragmentTime?: number;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   */
  Klv?: M2tsKlv | string;

  /**
   * Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  KlvDataPids?: string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: M2tsNielsenId3Behavior | string;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   */
  NullPacketBitrate?: number;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000.
   */
  PatInterval?: number;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M2tsPcrControl | string;

  /**
   * Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.
   */
  PcrPeriod?: number;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  PcrPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  PmtPid?: string;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNum?: number;

  /**
   * When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set.
   */
  RateMode?: M2tsRateMode | string;

  /**
   * Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  Scte27Pids?: string;

  /**
   * Optionally pass SCTE-35 signals from the input source to this output.
   */
  Scte35Control?: M2tsScte35Control | string;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  Scte35Pid?: string;

  /**
   * Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | string;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.
   *
   * When a segmentation style of "resetCadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.
   *
   * When a segmentation style of "maintainCadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
   */
  SegmentationStyle?: M2tsSegmentationStyle | string;

  /**
   * The length in seconds of each segment. Required unless markers is set to _none_.
   */
  SegmentationTime?: number;

  /**
   * When set to passthrough, timed metadata will be passed through from input to output.
   */
  TimedMetadataBehavior?: M2tsTimedMetadataBehavior | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  TimedMetadataPid?: string;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  VideoPid?: string;
}

export namespace M2tsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: M2tsSettings): any => ({
    ...obj,
  });
}

/**
 * Raw Settings
 */
export interface RawSettings {}

export namespace RawSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RawSettings): any => ({
    ...obj,
  });
}

/**
 * Archive Container Settings
 */
export interface ArchiveContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: M2tsSettings;

  /**
   * Raw Settings
   */
  RawSettings?: RawSettings;
}

export namespace ArchiveContainerSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArchiveContainerSettings): any => ({
    ...obj,
  });
}

/**
 * Archive Output Settings
 */
export interface ArchiveOutputSettings {
  /**
   * Settings specific to the container type of the file.
   */
  ContainerSettings: ArchiveContainerSettings | undefined;

  /**
   * Output file extension. If excluded, this will be auto-selected from the container type.
   */
  Extension?: string;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;
}

export namespace ArchiveOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArchiveOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Frame Capture Output Settings
 */
export interface FrameCaptureOutputSettings {
  /**
   * Required if the output group contains more than one output. This modifier forms part of the output file name.
   */
  NameModifier?: string;
}

export namespace FrameCaptureOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Only Hls Settings
 */
export interface AudioOnlyHlsSettings {
  /**
   * Specifies the group to which the audio Rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * Optional. Specifies the .jpg or .png image to use as the cover art for an audio-only output. We recommend a low bit-size file because the image increases the output audio bandwidth.
   *
   * The image is attached to the audio as an ID3 tag, frame type APIC, picture type 0x10, as per the "ID3 tag version 2.4.0 - Native Frames" standard.
   */
  AudioOnlyImage?: InputLocation;

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
   */
  AudioTrackType?: AudioOnlyHlsTrackType | string;

  /**
   * Specifies the segment type.
   */
  SegmentType?: AudioOnlyHlsSegmentType | string;
}

export namespace AudioOnlyHlsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioOnlyHlsSettings): any => ({
    ...obj,
  });
}

/**
 * Fmp4 Hls Settings
 */
export interface Fmp4HlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: Fmp4NielsenId3Behavior | string;

  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   */
  TimedMetadataBehavior?: Fmp4TimedMetadataBehavior | string;
}

export namespace Fmp4HlsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Fmp4HlsSettings): any => ({
    ...obj,
  });
}

/**
 * Frame Capture Hls Settings
 */
export interface FrameCaptureHlsSettings {}

export namespace FrameCaptureHlsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureHlsSettings): any => ({
    ...obj,
  });
}

/**
 * Standard Hls Settings
 */
export interface StandardHlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Settings information for the .m3u8 container
   */
  M3u8Settings: M3u8Settings | undefined;
}

export namespace StandardHlsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardHlsSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Settings
 */
export interface HlsSettings {
  /**
   * Audio Only Hls Settings
   */
  AudioOnlyHlsSettings?: AudioOnlyHlsSettings;

  /**
   * Fmp4 Hls Settings
   */
  Fmp4HlsSettings?: Fmp4HlsSettings;

  /**
   * Frame Capture Hls Settings
   */
  FrameCaptureHlsSettings?: FrameCaptureHlsSettings;

  /**
   * Standard Hls Settings
   */
  StandardHlsSettings?: StandardHlsSettings;
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
 * Hls Output Settings
 */
export interface HlsOutputSettings {
  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   */
  H265PackagingType?: HlsH265PackagingType | string;

  /**
   * Settings regarding the underlying stream. These settings are different for audio-only outputs.
   */
  HlsSettings: HlsSettings | undefined;

  /**
   * String concatenated to the end of the destination filename. Accepts \"Format Identifiers\":#formatIdentifierParameters.
   */
  NameModifier?: string;

  /**
   * String concatenated to end of segment filenames.
   */
  SegmentModifier?: string;
}

export namespace HlsOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Reference to an OutputDestination ID defined in the channel
 */
export interface OutputLocationRef {
  /**
   * Placeholder documentation for __string
   */
  DestinationRefId?: string;
}

export namespace OutputLocationRef {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputLocationRef): any => ({
    ...obj,
  });
}

/**
 * Fec Output Settings
 */
export interface FecOutputSettings {
  /**
   * Parameter D from SMPTE 2022-1. The height of the FEC protection matrix.  The number of transport stream packets per column error correction packet. Must be between 4 and 20, inclusive.
   */
  ColumnDepth?: number;

  /**
   * Enables column only or column and row based FEC
   */
  IncludeFec?: FecOutputIncludeFec | string;

  /**
   * Parameter L from SMPTE 2022-1. The width of the FEC protection matrix.  Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness.  If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.
   */
  RowLength?: number;
}

export namespace FecOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FecOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Output settings. There can be multiple outputs within a group.
 */
export interface Output {
  /**
   * The names of the AudioDescriptions used as audio sources for this output.
   */
  AudioDescriptionNames?: string[];

  /**
   * The names of the CaptionDescriptions used as caption sources for this output.
   */
  CaptionDescriptionNames?: string[];

  /**
   * The name used to identify an output.
   */
  OutputName?: string;

  /**
   * Output type-specific settings.
   */
  OutputSettings: OutputSettings | undefined;

  /**
   * The name of the VideoDescription used as the source for this output.
   */
  VideoDescriptionName?: string;
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
 * Archive S3 Settings
 */
export interface ArchiveS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   */
  CannedAcl?: S3CannedAcl | string;
}

export namespace ArchiveS3Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArchiveS3Settings): any => ({
    ...obj,
  });
}

/**
 * Archive Cdn Settings
 */
export interface ArchiveCdnSettings {
  /**
   * Archive S3 Settings
   */
  ArchiveS3Settings?: ArchiveS3Settings;
}

export namespace ArchiveCdnSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArchiveCdnSettings): any => ({
    ...obj,
  });
}

/**
 * Archive Group Settings
 */
export interface ArchiveGroupSettings {
  /**
   * Parameters that control interactions with the CDN.
   */
  ArchiveCdnSettings?: ArchiveCdnSettings;

  /**
   * A directory and base filename where archive files should be written.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Number of seconds to write to archive file before closing and starting a new one.
   */
  RolloverInterval?: number;
}

export namespace ArchiveGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArchiveGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Frame Capture S3 Settings
 */
export interface FrameCaptureS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   */
  CannedAcl?: S3CannedAcl | string;
}

export namespace FrameCaptureS3Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureS3Settings): any => ({
    ...obj,
  });
}

/**
 * Frame Capture Cdn Settings
 */
export interface FrameCaptureCdnSettings {
  /**
   * Frame Capture S3 Settings
   */
  FrameCaptureS3Settings?: FrameCaptureS3Settings;
}

export namespace FrameCaptureCdnSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureCdnSettings): any => ({
    ...obj,
  });
}

/**
 * Frame Capture Group Settings
 */
export interface FrameCaptureGroupSettings {
  /**
   * The destination for the frame capture files. Either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling-) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling-). The final file names consist of the prefix from the destination field (for example, "curling-") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg).  For example, curling-low.00001.jpg
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Parameters that control interactions with the CDN.
   */
  FrameCaptureCdnSettings?: FrameCaptureCdnSettings;
}

export namespace FrameCaptureGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Akamai Settings
 */
export interface HlsAkamaiSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.
   */
  HttpTransferMode?: HlsAkamaiHttpTransferMode | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * Salt for authenticated Akamai.
   */
  Salt?: string;

  /**
   * Token parameter for authenticated akamai. If not specified, _gda_ is used.
   */
  Token?: string;
}

export namespace HlsAkamaiSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsAkamaiSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Basic Put Settings
 */
export interface HlsBasicPutSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

export namespace HlsBasicPutSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsBasicPutSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Media Store Settings
 */
export interface HlsMediaStoreSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
   */
  MediaStoreStorageClass?: HlsMediaStoreStorageClass | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

export namespace HlsMediaStoreSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsMediaStoreSettings): any => ({
    ...obj,
  });
}

/**
 * Hls S3 Settings
 */
export interface HlsS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   */
  CannedAcl?: S3CannedAcl | string;
}

export namespace HlsS3Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsS3Settings): any => ({
    ...obj,
  });
}

/**
 * Hls Webdav Settings
 */
export interface HlsWebdavSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Specify whether or not to use chunked transfer encoding to WebDAV.
   */
  HttpTransferMode?: HlsWebdavHttpTransferMode | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

export namespace HlsWebdavSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsWebdavSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Cdn Settings
 */
export interface HlsCdnSettings {
  /**
   * Hls Akamai Settings
   */
  HlsAkamaiSettings?: HlsAkamaiSettings;

  /**
   * Hls Basic Put Settings
   */
  HlsBasicPutSettings?: HlsBasicPutSettings;

  /**
   * Hls Media Store Settings
   */
  HlsMediaStoreSettings?: HlsMediaStoreSettings;

  /**
   * Hls S3 Settings
   */
  HlsS3Settings?: HlsS3Settings;

  /**
   * Hls Webdav Settings
   */
  HlsWebdavSettings?: HlsWebdavSettings;
}

export namespace HlsCdnSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsCdnSettings): any => ({
    ...obj,
  });
}

/**
 * Key Provider Settings
 */
export interface KeyProviderSettings {
  /**
   * Static Key Settings
   */
  StaticKeySettings?: StaticKeySettings;
}

export namespace KeyProviderSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyProviderSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Group Settings
 */
export interface HlsGroupSettings {
  /**
   * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
   */
  AdMarkers?: (HlsAdMarkers | string)[];

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlContent?: string;

  /**
   * Optional. One value per output group.
   *
   * This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
   */
  BaseUrlContent1?: string;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlManifest?: string;

  /**
   * Optional. One value per output group.
   *
   * Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
   */
  BaseUrlManifest1?: string;

  /**
   * Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".
   */
  CaptionLanguageMappings?: CaptionLanguageMapping[];

  /**
   * Applies only to 608 Embedded output captions.
   * insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.
   * none: Include CLOSED-CAPTIONS=NONE line in the manifest.
   * omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | string;

  /**
   * When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
   */
  ClientCache?: HlsClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: HlsCodecSpecification | string;

  /**
   * For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.
   */
  ConstantIv?: string;

  /**
   * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Place segments in subdirectories.
   */
  DirectoryStructure?: HlsDirectoryStructure | string;

  /**
   * Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group.
   * Typically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose.
   * Choose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.
   */
  DiscontinuityTags?: HlsDiscontinuityTags | string;

  /**
   * Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.
   */
  EncryptionType?: HlsEncryptionType | string;

  /**
   * Parameters that control interactions with the CDN.
   */
  HlsCdnSettings?: HlsCdnSettings;

  /**
   * State of HLS ID3 Segment Tagging
   */
  HlsId3SegmentTagging?: HlsId3SegmentTaggingState | string;

  /**
   * DISABLED: Do not create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).
   *
   * STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888"
   */
  IFrameOnlyPlaylists?: IFrameOnlyPlaylistType | string;

  /**
   * Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline.
   * Auto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups.
   * Suppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.
   */
  IncompleteSegmentBehavior?: HlsIncompleteSegmentBehavior | string;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be smaller than the number in the Keep Segments field.
   */
  IndexNSegments?: number;

  /**
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForHlsOut | string;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.
   */
  IvInManifest?: HlsIvInManifest | string;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.
   */
  IvSource?: HlsIvSource | string;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the number of media segments to retain in the destination directory. This number should be bigger than indexNSegments (Num segments). We recommend (value = (2 x indexNsegments) + 1).
   *
   * If this "keep segments" number is too low, the following might happen: the player is still reading a media manifest file that lists this segment, but that segment has been removed from the destination directory (as directed by indexNSegments). This situation would result in a 404 HTTP error on the player.
   */
  KeepSegments?: number;

  /**
   * The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.
   */
  KeyFormat?: string;

  /**
   * Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * The key provider settings.
   */
  KeyProviderSettings?: KeyProviderSettings;

  /**
   * When set to gzip, compresses HLS playlist.
   */
  ManifestCompression?: HlsManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point or integer values for segment duration.
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | string;

  /**
   * When set, minimumSegmentLength is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.
   *
   * VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
   */
  Mode?: HlsMode | string;

  /**
   * MANIFESTS_AND_SEGMENTS: Generates manifests (master manifest, if applicable, and media manifests) for this output group.
   *
   * VARIANT_MANIFESTS_AND_SEGMENTS: Generates media manifests for this output group, but not a master manifest.
   *
   * SEGMENTS_ONLY: Does not generate any manifests for this output group.
   */
  OutputSelection?: HlsOutputSelection | string;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated using the program date time clock.
   */
  ProgramDateTime?: HlsProgramDateTime | string;

  /**
   * Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock. Options include:
   *
   * INITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment.
   *
   * SYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.
   */
  ProgramDateTimeClock?: HlsProgramDateTimeClock | string;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows playout device that support stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines.
   *
   * DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only.
   *
   * For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players so a redundant manifest from MediaLive is irrelevant.
   */
  RedundantManifest?: HlsRedundantManifest | string;

  /**
   * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
   */
  SegmentLength?: number;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: HlsSegmentationMode | string;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: HlsStreamInfResolution | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;

  /**
   * SEGMENTED_FILES: Emit the program as segments - multiple .ts media files.
   *
   * SINGLE_FILE: Applies only if Mode field is VOD. Emit the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
   */
  TsFileMode?: HlsTsFileMode | string;
}

export namespace HlsGroupSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsGroupSettings): any => ({
    ...obj,
  });
}

export enum RtmpAdMarkers {
  ON_CUE_POINT_SCTE35 = "ON_CUE_POINT_SCTE35",
}

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface OutputGroup {
  /**
   * Custom output group name optionally defined by the user.
   */
  Name?: string;

  /**
   * Settings associated with the output group.
   */
  OutputGroupSettings: OutputGroupSettings | undefined;

  /**
   * Placeholder documentation for __listOfOutput
   */
  Outputs: Output[] | undefined;
}

export namespace OutputGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputGroup): any => ({
    ...obj,
  });
}

/**
 * Runtime details of a pipeline when a channel is running.
 */
export interface PipelineDetail {
  /**
   * The name of the active input attachment currently being ingested by this pipeline.
   */
  ActiveInputAttachmentName?: string;

  /**
   * The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.
   */
  ActiveInputSwitchActionName?: string;

  /**
   * The name of the motion graphics activate action that occurred most recently and that resulted in the current graphics URI for this pipeline.
   */
  ActiveMotionGraphicsActionName?: string;

  /**
   * The current URI being used for HTML5 motion graphics for this pipeline.
   */
  ActiveMotionGraphicsUri?: string;

  /**
   * Pipeline ID
   */
  PipelineId?: string;
}

export namespace PipelineDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineDetail): any => ({
    ...obj,
  });
}

/**
 * Settings for pausing a pipeline.
 */
export interface PipelinePauseStateSettings {
  /**
   * Pipeline ID to pause ("PIPELINE_0" or "PIPELINE_1").
   */
  PipelineId: PipelineId | string | undefined;
}

export namespace PipelinePauseStateSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelinePauseStateSettings): any => ({
    ...obj,
  });
}

/**
 * Reserved resources available to use
 */
export interface Reservation {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace Reservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Reservation): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to insert a user-defined ID3 tag in each HLS segment
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * ID3 tag to insert into each segment. Supports special keyword identifiers to substitute in segment-related values.\nSupported keyword identifiers: https://docs.aws.amazon.com/medialive/latest/ug/variable-data-identifiers.html
   */
  Tag: string | undefined;
}

export namespace HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsId3SegmentTaggingScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to emit HLS metadata
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   */
  Id3: string | undefined;
}

export namespace HlsTimedMetadataScheduleActionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsTimedMetadataScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
 */
export interface InputClippingSettings {
  /**
   * The source of the timecodes in the source being clipped.
   */
  InputTimecodeSource: InputTimecodeSource | string | undefined;

  /**
   * Settings to identify the start of the clip.
   */
  StartTimecode?: StartTimecode;

  /**
   * Settings to identify the end of the clip.
   */
  StopTimecode?: StopTimecode;
}

export namespace InputClippingSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputClippingSettings): any => ({
    ...obj,
  });
}

/**
 * Holds one set of SCTE-35 Descriptor Settings.
 */
export interface Scte35Descriptor {
  /**
   * SCTE-35 Descriptor Settings.
   */
  Scte35DescriptorSettings: Scte35DescriptorSettings | undefined;
}

export namespace Scte35Descriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35Descriptor): any => ({
    ...obj,
  });
}

/**
 * Start time for the action.
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".
   */
  Time: string | undefined;
}

export namespace FixedModeScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FixedModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify if an action follows another.
 */
export interface FollowModeScheduleActionStartSettings {
  /**
   * Identifies whether this action starts relative to the start or relative to the end of the reference action.
   */
  FollowPoint: FollowPoint | string | undefined;

  /**
   * The action name of another action that this one refers to.
   */
  ReferenceActionName: string | undefined;
}

export namespace FollowModeScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FollowModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to configure an action so that it occurs as soon as possible.
 */
export interface ImmediateModeScheduleActionStartSettings {}

export namespace ImmediateModeScheduleActionStartSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImmediateModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Contains information on a single schedule action.
 */
export interface ScheduleAction {
  /**
   * The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.
   */
  ActionName: string | undefined;

  /**
   * Settings for this schedule action.
   */
  ScheduleActionSettings: ScheduleActionSettings | undefined;

  /**
   * The time for the action to start in the channel.
   */
  ScheduleActionStartSettings: ScheduleActionStartSettings | undefined;
}

export namespace ScheduleAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleAction): any => ({
    ...obj,
  });
}

/**
 * Details about the input device that is being transferred.
 */
export interface TransferringInputDeviceSummary {
  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The optional message that the sender has attached to the transfer.
   */
  Message?: string;

  /**
   * The AWS account ID for the recipient of the input device transfer.
   */
  TargetCustomerId?: string;

  /**
   * The type (direction) of the input device transfer.
   */
  TransferType?: InputDeviceTransferType | string;
}

export namespace TransferringInputDeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferringInputDeviceSummary): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ValidationError
 */
export interface ValidationError {
  /**
   * Path to the source of the error.
   */
  ElementPath?: string;

  /**
   * The error message.
   */
  ErrorMessage?: string;
}

export namespace ValidationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

/**
 * Frame Capture Settings
 */
export interface FrameCaptureSettings {
  /**
   * The frequency at which to capture frames for inclusion in the output. May be specified in either seconds or milliseconds, as specified by captureIntervalUnits.
   */
  CaptureInterval?: number;

  /**
   * Unit for the frame capture interval.
   */
  CaptureIntervalUnits?: FrameCaptureIntervalUnit | string;
}

export namespace FrameCaptureSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameCaptureSettings): any => ({
    ...obj,
  });
}

/**
 * Passthrough applies no color space conversion to the output
 */
export interface ColorSpacePassthroughSettings {}

export namespace ColorSpacePassthroughSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColorSpacePassthroughSettings): any => ({
    ...obj,
  });
}

/**
 * Rec601 Settings
 */
export interface Rec601Settings {}

export namespace Rec601Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rec601Settings): any => ({
    ...obj,
  });
}

/**
 * Rec709 Settings
 */
export interface Rec709Settings {}

export namespace Rec709Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rec709Settings): any => ({
    ...obj,
  });
}

/**
 * H264 Color Space Settings
 */
export interface H264ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;
}

export namespace H264ColorSpaceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264ColorSpaceSettings): any => ({
    ...obj,
  });
}

/**
 * Temporal Filter Settings
 */
export interface TemporalFilterSettings {
  /**
   * If you enable this filter, the results are the following:
   * - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.
   * - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
   */
  PostFilterSharpening?: TemporalFilterPostFilterSharpening | string;

  /**
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   */
  Strength?: TemporalFilterStrength | string;
}

export namespace TemporalFilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemporalFilterSettings): any => ({
    ...obj,
  });
}

/**
 * H264 Filter Settings
 */
export interface H264FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H264FilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264FilterSettings): any => ({
    ...obj,
  });
}

/**
 * H264 Settings
 */
export interface H264Settings {
  /**
   * Enables or disables adaptive quantization, which is a technique MediaLive can apply to video on a frame-by-frame basis to produce more compression without losing quality. There are three types of adaptive quantization: flicker, spatial, and temporal. Set the field in one of these ways: Set to Auto. Recommended. For each type of AQ, MediaLive will determine if AQ is needed, and if so, the appropriate strength. Set a strength (a value other than Auto or Disable). This strength will apply to any of the AQ fields that you choose to enable. Set to Disabled to disable all types of adaptive quantization.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | string;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  BufFillPct?: number;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H264ColorMetadata | string;

  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H264ColorSpaceSettings;

  /**
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   */
  EntropyEncoding?: H264EntropyEncoding | string;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H264FilterSettings;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * Flicker AQ makes adjustments within each frame to reduce flicker or 'pop' on I-frames. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if flicker AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply flicker AQ using the specified strength. Disabled: MediaLive won't apply flicker AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply flicker AQ.
   */
  FlickerAq?: H264FlickerAq | string;

  /**
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)
   * enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.
   * disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   */
  ForceFieldPictures?: H264ForceFieldPictures | string;

  /**
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   */
  FramerateControl?: H264FramerateControl | string;

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
  GopBReference?: H264GopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Number of B-frames between reference frames.
   */
  GopNumBFrames?: number;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H264GopSizeUnits | string;

  /**
   * H.264 Level.
   */
  Level?: H264Level | string;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H264LookAheadRateControl | string;

  /**
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   */
  MaxBitrate?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumRefFrames?: number;

  /**
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   */
  ParControl?: H264ParControl | string;

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
  Profile?: H264Profile | string;

  /**
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
   * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
   * - STANDARD_QUALITY: Valid for any Rate control mode.
   */
  QualityLevel?: H264QualityLevel | string;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. You can set a target quality or you can let MediaLive determine the best quality. To set a target quality, enter values in the QVBR quality level field and the Max bitrate field. Enter values that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   * To let MediaLive decide, leave the QVBR quality level field empty, and in Max bitrate enter the maximum rate you want in the video. For more information, see the section called "Video - rate control mode" in the MediaLive user guide
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
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H264RateControlMode | string;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H264ScanType | string;

  /**
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   */
  SceneChangeDetect?: H264SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.  If not set to zero, must be greater than 15.
   */
  Softness?: number;

  /**
   * Spatial AQ makes adjustments within each frame based on spatial variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if spatial AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply spatial AQ using the specified strength. Disabled: MediaLive won't apply spatial AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply spatial AQ.
   */
  SpatialAq?: H264SpatialAq | string;

  /**
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   */
  SubgopLength?: H264SubGopLength | string;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax | string;

  /**
   * Temporal makes adjustments within each frame based on temporal variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if temporal AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply temporal AQ using the specified strength. Disabled: MediaLive won't apply temporal AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply temporal AQ.
   */
  TemporalAq?: H264TemporalAq | string;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H264TimecodeInsertionBehavior | string;
}

export namespace H264Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H264Settings): any => ({
    ...obj,
  });
}

/**
 * H265 Color Space Settings
 */
export interface H265ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * Hdr10 Settings
   */
  Hdr10Settings?: Hdr10Settings;

  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;
}

export namespace H265ColorSpaceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H265ColorSpaceSettings): any => ({
    ...obj,
  });
}

/**
 * H265 Filter Settings
 */
export interface H265FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H265FilterSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H265FilterSettings): any => ({
    ...obj,
  });
}

/**
 * H265 Settings
 */
export interface H265Settings {
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | string;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   */
  AlternativeTransferFunction?: H265AlternativeTransferFunction | string;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H265ColorMetadata | string;

  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H265ColorSpaceSettings;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H265FilterSettings;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: H265FlickerAq | string;

  /**
   * Framerate denominator.
   */
  FramerateDenominator: number | undefined;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator: number | undefined;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * H.265 Level.
   */
  Level?: H265Level | string;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H265LookAheadRateControl | string;

  /**
   * For QVBR: See the tooltip for Quality level
   */
  MaxBitrate?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * H.265 Profile.
   */
  Profile?: H265Profile | string;

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
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H265ScanType | string;

  /**
   * Scene change detection.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * H.265 Tier.
   */
  Tier?: H265Tier | string;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H265TimecodeInsertionBehavior | string;
}

export namespace H265Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: H265Settings): any => ({
    ...obj,
  });
}

/**
 * Video settings for this stream.
 */
export interface VideoDescription {
  /**
   * Video codec settings.
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Height?: number;

  /**
   * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * Indicates how MediaLive will respond to the AFD values that might be in the input video. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose PASSTHROUGH.
   * RESPOND: MediaLive clips the input video using a formula that uses the AFD values (configured in afdSignaling ), the input display aspect ratio, and the output display aspect ratio. MediaLive also includes the AFD values in the output, unless the codec for this encode is FRAME_CAPTURE.
   * PASSTHROUGH: MediaLive ignores the AFD values and does not clip the video. But MediaLive does include the values in the output.
   * NONE: MediaLive does not clip the input video and does not include the AFD values in the output
   */
  RespondToAfd?: VideoDescriptionRespondToAfd | string;

  /**
   * STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   */
  ScalingBehavior?: VideoDescriptionScalingBehavior | string;

  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   */
  Sharpness?: number;

  /**
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
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
 * Placeholder documentation for AcceptInputDeviceTransferRequest
 */
export interface AcceptInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to accept. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace AcceptInputDeviceTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for AcceptInputDeviceTransferResponse
 */
export interface AcceptInputDeviceTransferResponse {}

export namespace AcceptInputDeviceTransferResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BadGatewayException
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for BadRequestException
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for ConflictException
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for ForbiddenException
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for GatewayTimeoutException
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name: "GatewayTimeoutException" = "GatewayTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GatewayTimeoutException, __BaseException>) {
    super({
      name: "GatewayTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, GatewayTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for InternalServerErrorException
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for NotFoundException
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for TooManyRequestsException
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Placeholder documentation for UnprocessableEntityException
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  /**
   * The error message.
   */
  Message?: string;

  /**
   * A collection of validation error responses.
   */
  ValidationErrors?: ValidationError[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
    this.Message = opts.Message;
    this.ValidationErrors = opts.ValidationErrors;
  }
}

/**
 * Avail Blanking
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: InputLocation;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   */
  State?: AvailBlankingState | string;
}

export namespace AvailBlanking {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailBlanking): any => ({
    ...obj,
  });
}

/**
 * Scte35 Splice Insert
 */
export interface Scte35SpliceInsert {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior | string;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior | string;
}

export namespace Scte35SpliceInsert {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35SpliceInsert): any => ({
    ...obj,
  });
}

/**
 * Scte35 Time Signal Apos
 */
export interface Scte35TimeSignalApos {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior | string;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior | string;
}

export namespace Scte35TimeSignalApos {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scte35TimeSignalApos): any => ({
    ...obj,
  });
}

/**
 * Avail Settings
 */
export interface AvailSettings {
  /**
   * Scte35 Splice Insert
   */
  Scte35SpliceInsert?: Scte35SpliceInsert;

  /**
   * Scte35 Time Signal Apos
   */
  Scte35TimeSignalApos?: Scte35TimeSignalApos;
}

export namespace AvailSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailSettings): any => ({
    ...obj,
  });
}

/**
 * Avail Configuration
 */
export interface AvailConfiguration {
  /**
   * Ad avail settings.
   */
  AvailSettings?: AvailSettings;
}

export namespace AvailConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailConfiguration): any => ({
    ...obj,
  });
}

/**
 * A request to delete resources
 */
export interface BatchDeleteRequest {
  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of input IDs
   */
  InputIds?: string[];

  /**
   * List of input security group IDs
   */
  InputSecurityGroupIds?: string[];

  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

export namespace BatchDeleteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchDeleteResponse
 */
export interface BatchDeleteResponse {
  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

export namespace BatchDeleteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteResponse): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to create (in a request) or that have been created (in a response).
 */
export interface BatchScheduleActionCreateRequest {
  /**
   * A list of schedule actions to create.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been created in the schedule.
 */
export interface BatchScheduleActionCreateResult {
  /**
   * List of actions that have been created in the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateResult): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to delete.
 */
export interface BatchScheduleActionDeleteRequest {
  /**
   * A list of schedule actions to delete.
   */
  ActionNames: string[] | undefined;
}

export namespace BatchScheduleActionDeleteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been deleted from the schedule.
 */
export interface BatchScheduleActionDeleteResult {
  /**
   * List of actions that have been deleted from the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionDeleteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteResult): any => ({
    ...obj,
  });
}

/**
 * A request to start resources
 */
export interface BatchStartRequest {
  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

export namespace BatchStartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStartRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchStartResponse
 */
export interface BatchStartResponse {
  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

export namespace BatchStartResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStartResponse): any => ({
    ...obj,
  });
}

/**
 * A request to stop resources
 */
export interface BatchStopRequest {
  /**
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

export namespace BatchStopRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchStopResponse
 */
export interface BatchStopResponse {
  /**
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

export namespace BatchStopResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopResponse): any => ({
    ...obj,
  });
}

/**
 * List of actions to create and list of actions to delete.
 */
export interface BatchUpdateScheduleRequest {
  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * Schedule actions to create in the schedule.
   */
  Creates?: BatchScheduleActionCreateRequest;

  /**
   * Schedule actions to delete from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteRequest;
}

export namespace BatchUpdateScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchUpdateScheduleResponse
 */
export interface BatchUpdateScheduleResponse {
  /**
   * Schedule actions created in the schedule.
   */
  Creates?: BatchScheduleActionCreateResult;

  /**
   * Schedule actions deleted from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteResult;
}

export namespace BatchUpdateScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Blackout Slate
 */
export interface BlackoutSlate {
  /**
   * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  BlackoutSlateImage?: InputLocation;

  /**
   * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
   */
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout | string;

  /**
   * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
   */
  NetworkEndBlackoutImage?: InputLocation;

  /**
   * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   */
  NetworkId?: string;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
   */
  State?: BlackoutSlateState | string;
}

export namespace BlackoutSlate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlackoutSlate): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CancelInputDeviceTransferRequest
 */
export interface CancelInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to cancel. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace CancelInputDeviceTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CancelInputDeviceTransferResponse
 */
export interface CancelInputDeviceTransferResponse {}

export namespace CancelInputDeviceTransferResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

/**
 * Feature Activations
 */
export interface FeatureActivations {
  /**
   * Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled.
   * If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
   */
  InputPrepareScheduleActions?: FeatureActivationsInputPrepareScheduleActions | string;
}

export namespace FeatureActivations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureActivations): any => ({
    ...obj,
  });
}

/**
 * Input Loss Behavior
 */
export interface InputLossBehavior {
  /**
   * Documentation update needed
   */
  BlackFrameMsec?: number;

  /**
   * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
   */
  InputLossImageColor?: string;

  /**
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   */
  InputLossImageSlate?: InputLocation;

  /**
   * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
   */
  InputLossImageType?: InputLossImageType | string;

  /**
   * Documentation update needed
   */
  RepeatFrameMsec?: number;
}

export namespace InputLossBehavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputLossBehavior): any => ({
    ...obj,
  });
}

/**
 * Global Configuration
 */
export interface GlobalConfiguration {
  /**
   * Value to set the initial audio gain for the Live Event.
   */
  InitialAudioGain?: number;

  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   */
  InputEndAction?: GlobalConfigurationInputEndAction | string;

  /**
   * Settings for system actions when input is lost.
   */
  InputLossBehavior?: InputLossBehavior;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode | string;

  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource | string;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs | string;
}

export namespace GlobalConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalConfiguration): any => ({
    ...obj,
  });
}

/**
 * Html Motion Graphics Settings
 */
export interface HtmlMotionGraphicsSettings {}

export namespace HtmlMotionGraphicsSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HtmlMotionGraphicsSettings): any => ({
    ...obj,
  });
}

/**
 * Motion Graphics Configuration
 */
export interface MotionGraphicsConfiguration {
  /**
   * Motion Graphics Insertion
   */
  MotionGraphicsInsertion?: MotionGraphicsInsertion | string;

  /**
   * Motion Graphics Settings
   */
  MotionGraphicsSettings: MotionGraphicsSettings | undefined;
}

export namespace MotionGraphicsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MotionGraphicsConfiguration): any => ({
    ...obj,
  });
}

/**
 * Nielsen Configuration
 */
export interface NielsenConfiguration {
  /**
   * Enter the Distributor ID assigned to your organization by Nielsen.
   */
  DistributorId?: string;

  /**
   * Enables Nielsen PCM to ID3 tagging
   */
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState | string;
}

export namespace NielsenConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NielsenConfiguration): any => ({
    ...obj,
  });
}

/**
 * Timecode Config
 */
export interface TimecodeConfig {
  /**
   * Identifies the source for the timecode that will be associated with the events outputs.
   * -Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
   * -System Clock (systemclock): Use the UTC time.
   * -Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
   */
  Source: TimecodeConfigSource | string | undefined;

  /**
   * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
   */
  SyncThreshold?: number;
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
 * Encoder Settings
 */
export interface EncoderSettings {
  /**
   * Placeholder documentation for __listOfAudioDescription
   */
  AudioDescriptions: AudioDescription[] | undefined;

  /**
   * Settings for ad avail blanking.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Event-wide configuration settings for ad avail insertion.
   */
  AvailConfiguration?: AvailConfiguration;

  /**
   * Settings for blackout slate.
   */
  BlackoutSlate?: BlackoutSlate;

  /**
   * Settings for caption decriptions
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Feature Activations
   */
  FeatureActivations?: FeatureActivations;

  /**
   * Configuration settings that apply to the event as a whole.
   */
  GlobalConfiguration?: GlobalConfiguration;

  /**
   * Settings for motion graphics.
   */
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration;

  /**
   * Nielsen configuration settings.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Placeholder documentation for __listOfOutputGroup
   */
  OutputGroups: OutputGroup[] | undefined;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig: TimecodeConfig | undefined;

  /**
   * Placeholder documentation for __listOfVideoDescription
   */
  VideoDescriptions: VideoDescription[] | undefined;
}

export namespace EncoderSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncoderSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for Channel
 */
export interface Channel {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

/**
 * A request to claim an AWS Elemental device that you have purchased from a third-party vendor.
 */
export interface ClaimDeviceRequest {
  /**
   * The id of the device you want to claim.
   */
  Id?: string;
}

export namespace ClaimDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ClaimDeviceResponse
 */
export interface ClaimDeviceResponse {}

export namespace ClaimDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MaintenanceCreateSettings
 */
export interface MaintenanceCreateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   */
  MaintenanceStartTime?: string;
}

export namespace MaintenanceCreateSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceCreateSettings): any => ({
    ...obj,
  });
}

/**
 * The properties for a private VPC Output
 * When this property is specified, the output egress addresses will be created in a user specified VPC
 */
export interface VpcOutputSettings {
  /**
   * List of public address allocation ids to associate with ENIs that will be created in Output VPC.
   * Must specify one for SINGLE_PIPELINE, two for STANDARD channels
   */
  PublicAddressAllocationIds?: string[];

  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.
   * If none are specified then the VPC default security group will be used
   */
  SecurityGroupIds?: string[];

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;
}

export namespace VpcOutputSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcOutputSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a channel
 */
export interface CreateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Placeholder documentation for __listOfOutputDestination
   */
  Destinations?: OutputDestination[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceCreateSettings;

  /**
   * Name of channel.
   */
  Name?: string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   */
  RequestId?: string;

  /**
   * @deprecated
   *
   * Deprecated field that's only usable by whitelisted customers.
   */
  Reserved?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   */
  RoleArn?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for the VPC outputs
   */
  Vpc?: VpcOutputSettings;
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace CreateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 */
export interface InputVpcRequest {
  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   */
  SecurityGroupIds?: string[];

  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;
}

export namespace InputVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputVpcRequest): any => ({
    ...obj,
  });
}

/**
 * The name of the input
 */
export interface CreateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType | string;

  /**
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   */
  Vpc?: InputVpcRequest;
}

export namespace CreateInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputResponse
 */
export interface CreateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace CreateInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputResponse): any => ({
    ...obj,
  });
}

/**
 * The IPv4 CIDRs to whitelist for this Input Security Group
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

export namespace CreateInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputSecurityGroupResponse
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace CreateInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Contains configuration for a Multiplex event
 */
export interface MultiplexSettings {
  /**
   * Maximum video buffer delay in milliseconds.
   */
  MaximumVideoBufferDelayMilliseconds?: number;

  /**
   * Transport stream bit rate.
   */
  TransportStreamBitrate: number | undefined;

  /**
   * Transport stream ID.
   */
  TransportStreamId: number | undefined;

  /**
   * Transport stream reserved bit rate.
   */
  TransportStreamReservedBitrate?: number;
}

export namespace MultiplexSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a multiplex.
 */
export interface CreateMultiplexRequest {
  /**
   * A list of availability zones for the multiplex. You must specify exactly two.
   */
  AvailabilityZones: string[] | undefined;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings: MultiplexSettings | undefined;

  /**
   * Name of multiplex.
   */
  Name: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace CreateMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * The multiplex object.
 */
export interface Multiplex {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace Multiplex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Multiplex): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexResponse
 */
export interface CreateMultiplexResponse {
  /**
   * The newly created multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace CreateMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Multiplex Program settings configuration.
 */
export interface MultiplexProgramSettings {
  /**
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   */
  PreferredChannelPipeline?: PreferredChannelPipeline | string;

  /**
   * Unique program number.
   */
  ProgramNumber: number | undefined;

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * Program video settings configuration.
   */
  VideoSettings?: MultiplexVideoSettings;
}

export namespace MultiplexProgramSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramSettings): any => ({
    ...obj,
  });
}

/**
 * A request to create a program in a multiplex.
 */
export interface CreateMultiplexProgramRequest {
  /**
   * ID of the multiplex where the program is to be created.
   */
  MultiplexId: string | undefined;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings: MultiplexProgramSettings | undefined;

  /**
   * Name of multiplex program.
   */
  ProgramName: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;
}

export namespace CreateMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Packet identifiers map for a given Multiplex program.
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * Placeholder documentation for __listOf__integer
   */
  AudioPids?: number[];

  /**
   * Placeholder documentation for __listOf__integer
   */
  DvbSubPids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  DvbTeletextPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  EtvPlatformPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  EtvSignalPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  KlvDataPids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  PcrPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PmtPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PrivateMetadataPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  Scte27Pids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  Scte35Pid?: number;

  /**
   * Placeholder documentation for __integer
   */
  TimedMetadataPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  VideoPid?: number;
}

export namespace MultiplexProgramPacketIdentifiersMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgramPacketIdentifiersMap): any => ({
    ...obj,
  });
}

/**
 * The multiplex program object.
 */
export interface MultiplexProgram {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

export namespace MultiplexProgram {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiplexProgram): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexProgramResponse
 */
export interface CreateMultiplexProgramResponse {
  /**
   * The newly created multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace CreateMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * A request to create a partner input
 */
export interface CreatePartnerInputRequest {
  /**
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace CreatePartnerInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartnerInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreatePartnerInputResponse
 */
export interface CreatePartnerInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace CreatePartnerInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartnerInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * Placeholder documentation for Tags
   */
  Tags?: Record<string, string>;
}

export namespace CreateTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * Unique ID of the channel.
   */
  ChannelId: string | undefined;
}

export namespace DeleteChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelResponse
 */
export interface DeleteChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace DeleteChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputRequest
 */
export interface DeleteInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DeleteInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputResponse
 */
export interface DeleteInputResponse {}

export namespace DeleteInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupRequest
 */
export interface DeleteInputSecurityGroupRequest {
  /**
   * The Input Security Group to delete
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DeleteInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupResponse
 */
export interface DeleteInputSecurityGroupResponse {}

export namespace DeleteInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexRequest
 */
export interface DeleteMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DeleteMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexResponse
 */
export interface DeleteMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace DeleteMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramRequest
 */
export interface DeleteMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * The multiplex program name.
   */
  ProgramName: string | undefined;
}

export namespace DeleteMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramResponse
 */
export interface DeleteMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

export namespace DeleteMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationRequest
 */
export interface DeleteReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DeleteReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationResponse
 */
export interface DeleteReservationResponse {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace DeleteReservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleRequest
 */
export interface DeleteScheduleRequest {
  /**
   * Id of the channel whose schedule is being deleted.
   */
  ChannelId: string | undefined;
}

export namespace DeleteScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleResponse
 */
export interface DeleteScheduleResponse {}

export namespace DeleteScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * channel ID
   */
  ChannelId: string | undefined;
}

export namespace DescribeChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace DescribeChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputRequest
 */
export interface DescribeInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DescribeInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputResponse
 */
export interface DescribeInputResponse {
  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass | string;

  /**
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of IDs for all Inputs which are partners of this one.
   */
  InputPartnerIds?: string[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   */
  InputSourceType?: InputSourceType | string;

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * Placeholder documentation for InputState
   */
  State?: InputState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType | string;
}

export namespace DescribeInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceRequest
 */
export interface DescribeInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace DescribeInputDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceResponse
 */
export interface DescribeInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;
}

export namespace DescribeInputDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailRequest
 */
export interface DescribeInputDeviceThumbnailRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The HTTP Accept header. Indicates the requested type for the thumbnail.
   */
  Accept: AcceptHeader | string | undefined;
}

export namespace DescribeInputDeviceThumbnailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailResponse
 */
export interface DescribeInputDeviceThumbnailResponse {
  /**
   * The binary data for the thumbnail that the Link device has most recently sent to MediaLive.
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * Specifies the media type of the thumbnail.
   */
  ContentType?: ContentType | string;

  /**
   * The length of the content.
   */
  ContentLength?: number;

  /**
   * The unique, cacheable version of this thumbnail.
   */
  ETag?: string;

  /**
   * The date and time the thumbnail was last updated at the device.
   */
  LastModified?: Date;
}

export namespace DescribeInputDeviceThumbnailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupRequest
 */
export interface DescribeInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to describe
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DescribeInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupResponse
 */
export interface DescribeInputSecurityGroupResponse {
  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];
}

export namespace DescribeInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexRequest
 */
export interface DescribeMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DescribeMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexResponse
 */
export interface DescribeMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace DescribeMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramRequest
 */
export interface DescribeMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * The name of the program.
   */
  ProgramName: string | undefined;
}

export namespace DescribeMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramResponse
 */
export interface DescribeMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

export namespace DescribeMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingRequest
 */
export interface DescribeOfferingRequest {
  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId: string | undefined;
}

export namespace DescribeOfferingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingResponse
 */
export interface DescribeOfferingResponse {
  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace DescribeOfferingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationRequest
 */
export interface DescribeReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DescribeReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationResponse
 */
export interface DescribeReservationResponse {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export namespace DescribeReservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleRequest
 */
export interface DescribeScheduleRequest {
  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace DescribeScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleResponse
 */
export interface DescribeScheduleResponse {
  /**
   * The next token; for use in pagination.
   */
  NextToken?: string;

  /**
   * The list of actions in the schedule.
   */
  ScheduleActions?: ScheduleAction[];
}

export namespace DescribeScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Configurable settings for the input device.
 */
export interface InputDeviceConfigurableSettings {
  /**
   * The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;

  /**
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   */
  MaxBitrate?: number;
}

export namespace InputDeviceConfigurableSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDeviceConfigurableSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * Placeholder documentation for __listOfChannelSummary
   */
  Channels?: ChannelSummary[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesRequest
 */
export interface ListInputDevicesRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesResponse
 */
export interface ListInputDevicesResponse {
  /**
   * The list of input devices.
   */
  InputDevices?: InputDeviceSummary[];

  /**
   * A token to get additional list results.
   */
  NextToken?: string;
}

export namespace ListInputDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDevicesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDeviceTransfersRequest
 */
export interface ListInputDeviceTransfersRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __string
   */
  TransferType: string | undefined;
}

export namespace ListInputDeviceTransfersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDeviceTransfersRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDeviceTransfersResponse
 */
export interface ListInputDeviceTransfersResponse {
  /**
   * The list of devices that you are transferring or are being transferred to you.
   */
  InputDeviceTransfers?: TransferringInputDeviceSummary[];

  /**
   * A token to get additional list results.
   */
  NextToken?: string;
}

export namespace ListInputDeviceTransfersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputDeviceTransfersResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsRequest
 */
export interface ListInputsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsResponse
 */
export interface ListInputsResponse {
  /**
   * Placeholder documentation for __listOfInput
   */
  Inputs?: Input[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsRequest
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputSecurityGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsResponse
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * List of input security groups
   */
  InputSecurityGroups?: InputSecurityGroup[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputSecurityGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesRequest
 */
export interface ListMultiplexesRequest {
  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

export namespace ListMultiplexesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesResponse
 */
export interface ListMultiplexesResponse {
  /**
   * List of multiplexes.
   */
  Multiplexes?: MultiplexSummary[];

  /**
   * Token for the next ListMultiplexes request.
   */
  NextToken?: string;
}

export namespace ListMultiplexesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsRequest
 */
export interface ListMultiplexProgramsRequest {
  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * The ID of the multiplex that the programs belong to.
   */
  MultiplexId: string | undefined;

  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

export namespace ListMultiplexProgramsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexProgramsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsResponse
 */
export interface ListMultiplexProgramsResponse {
  /**
   * List of multiplex programs.
   */
  MultiplexPrograms?: MultiplexProgramSummary[];

  /**
   * Token for the next ListMultiplexProgram request.
   */
  NextToken?: string;
}

export namespace ListMultiplexProgramsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMultiplexProgramsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   */
  ChannelConfiguration?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * Filter by offering duration, e.g. '12'
   */
  Duration?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;
}

export namespace ListOfferingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsResponse
 */
export interface ListOfferingsResponse {
  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * List of offerings
   */
  Offerings?: Offering[];
}

export namespace ListOfferingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOfferingsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsRequest
 */
export interface ListReservationsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;
}

export namespace ListReservationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReservationsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsResponse
 */
export interface ListReservationsResponse {
  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * List of reservations
   */
  Reservations?: Reservation[];
}

export namespace ListReservationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReservationsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;
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
 * Placeholder documentation for ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * Placeholder documentation for Tags
   */
  Tags?: Record<string, string>;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MaintenanceUpdateSettings
 */
export interface MaintenanceUpdateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.
   */
  MaintenanceScheduledDate?: string;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   */
  MaintenanceStartTime?: string;
}

export namespace MaintenanceUpdateSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceUpdateSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * Number of resources
   */
  Count: number | undefined;

  /**
   * Name for the new reservation
   */
  Name?: string;

  /**
   * Offering to purchase, e.g. '87654321'
   */
  OfferingId: string | undefined;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   */
  RequestId?: string;

  /**
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   */
  Start?: string;

  /**
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;
}

export namespace PurchaseOfferingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for PurchaseOfferingResponse
 */
export interface PurchaseOfferingResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace PurchaseOfferingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for RejectInputDeviceTransferRequest
 */
export interface RejectInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to reject. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace RejectInputDeviceTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectInputDeviceTransferRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for RejectInputDeviceTransferResponse
 */
export interface RejectInputDeviceTransferResponse {}

export namespace RejectInputDeviceTransferResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectInputDeviceTransferResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelRequest
 */
export interface StartChannelRequest {
  /**
   * A request to start a channel
   */
  ChannelId: string | undefined;
}

export namespace StartChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelResponse
 */
export interface StartChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace StartChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexRequest
 */
export interface StartMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StartMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexResponse
 */
export interface StartMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace StartMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelRequest
 */
export interface StopChannelRequest {
  /**
   * A request to stop a running channel
   */
  ChannelId: string | undefined;
}

export namespace StopChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelResponse
 */
export interface StopChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

export namespace StopChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexRequest
 */
export interface StopMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StopMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexResponse
 */
export interface StopMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export namespace StopMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * A request to transfer an input device.
 */
export interface TransferInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The AWS account ID (12 digits) for the recipient of the device transfer.
   */
  TargetCustomerId?: string;

  /**
   * The target AWS region to transfer the device.
   */
  TargetRegion?: string;

  /**
   * An optional message for the recipient. Maximum 280 characters.
   */
  TransferMessage?: string;
}

export namespace TransferInputDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for TransferInputDeviceResponse
 */
export interface TransferInputDeviceResponse {}

export namespace TransferInputDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a channel.
 */
export interface UpdateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * channel ID
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];

  /**
   * The encoder settings for this channel.
   */
  EncoderSettings?: EncoderSettings;

  /**
   * Placeholder documentation for __listOfInputAttachment
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceUpdateSettings;

  /**
   * The name of the channel.
   */
  Name?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   */
  RoleArn?: string;
}

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Channel class that the channel should be updated to.
 */
export interface UpdateChannelClassRequest {
  /**
   * The channel class that you wish to update this channel to use.
   */
  ChannelClass: ChannelClass | string | undefined;

  /**
   * Channel Id of the channel whose class should be updated.
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];
}

export namespace UpdateChannelClassRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelClassRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelClassResponse
 */
export interface UpdateChannelClassResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelClassResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelClassResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input.
 */
export interface UpdateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];
}

export namespace UpdateInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace UpdateInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input device.
 */
export interface UpdateInputDeviceRequest {
  /**
   * The settings that you want to apply to the HD input device.
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The name that you assigned to this input device (not the unique ID).
   */
  Name?: string;

  /**
   * The settings that you want to apply to the UHD input device.
   */
  UhdDeviceSettings?: InputDeviceConfigurableSettings;
}

export namespace UpdateInputDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputDeviceResponse
 */
export interface UpdateInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;
}

export namespace UpdateInputDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to update.
   */
  InputSecurityGroupId: string | undefined;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

export namespace UpdateInputSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace UpdateInputSecurityGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a multiplex.
 */
export interface UpdateMultiplexRequest {
  /**
   * ID of the multiplex to update.
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * Name of the multiplex.
   */
  Name?: string;
}

export namespace UpdateMultiplexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateMultiplexResponse
 */
export interface UpdateMultiplexResponse {
  /**
   * The updated multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace UpdateMultiplexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a program in a multiplex.
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * The ID of the multiplex of the program to update.
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The name of the program to update.
   */
  ProgramName: string | undefined;
}

export namespace UpdateMultiplexProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateMultiplexProgramResponse
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * The updated multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace UpdateMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Request to update a reservation
 */
export interface UpdateReservationRequest {
  /**
   * Name of the reservation
   */
  Name?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace UpdateReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateReservationResponse
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace UpdateReservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReservationResponse): any => ({
    ...obj,
  });
}
