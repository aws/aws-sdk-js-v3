// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import { MediaLiveServiceException as __BaseException } from "./MediaLiveServiceException";
import {
  ArchiveGroupSettings,
  AudioDescription,
  BatchFailedResultModel,
  BatchSuccessfulResultModel,
  CaptionDescription,
  CaptionLanguageMapping,
  CdiInputSpecification,
  ChannelClass,
  ChannelEgressEndpoint,
  ChannelState,
  ChannelSummary,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  FrameCaptureGroupSettings,
  Hdr10Settings,
  HlsAdMarkers,
  HlsCaptionLanguageSetting,
  HlsCdnSettings,
  HlsClientCache,
  HlsCodecSpecification,
  HlsDirectoryStructure,
  HlsDiscontinuityTags,
  HlsEncryptionType,
  HlsId3SegmentTaggingState,
  HlsIncompleteSegmentBehavior,
  HlsIvInManifest,
  IFrameOnlyPlaylistType,
  Input,
  InputAttachment,
  InputClass,
  InputDestination,
  InputDestinationRequest,
  InputDeviceCodec,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceOutputType,
  InputDeviceSettings,
  InputDeviceSummary,
  InputDeviceType,
  InputDeviceUhdSettings,
  InputLocation,
  InputLossActionForHlsOut,
  InputSecurityGroup,
  InputSecurityGroupState,
  InputSource,
  InputSourceRequest,
  InputSourceType,
  InputSpecification,
  InputState,
  InputType,
  InputWhitelistRule,
  InputWhitelistRuleCidr,
  LogLevel,
  MaintenanceDay,
  MaintenanceStatus,
  MediaConnectFlow,
  MediaConnectFlowRequest,
  MultiplexOutputDestination,
  MultiplexProgramPipelineDetail,
  MultiplexState,
  OfferingDurationUnits,
  OfferingType,
  Output,
  OutputDestination,
  OutputLocationRef,
  ReservationResourceSpecification,
  VpcOutputSettingsDescription,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const HlsIvSource = {
  EXPLICIT: "EXPLICIT",
  FOLLOWS_SEGMENT_NUMBER: "FOLLOWS_SEGMENT_NUMBER",
} as const;

/**
 * @public
 */
export type HlsIvSource = (typeof HlsIvSource)[keyof typeof HlsIvSource];

/**
 * @public
 * Static Key Settings
 */
export interface StaticKeySettings {
  /**
   * @public
   * The URL of the license server used for protecting content.
   */
  KeyProviderServer?: InputLocation;

  /**
   * @public
   * Static key value as a 32 character hexadecimal string.
   */
  StaticKeyValue: string | undefined;
}

/**
 * @public
 * Key Provider Settings
 */
export interface KeyProviderSettings {
  /**
   * @public
   * Static Key Settings
   */
  StaticKeySettings?: StaticKeySettings;
}

/**
 * @public
 * @enum
 */
export const HlsManifestCompression = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type HlsManifestCompression = (typeof HlsManifestCompression)[keyof typeof HlsManifestCompression];

/**
 * @public
 * @enum
 */
export const HlsManifestDurationFormat = {
  FLOATING_POINT: "FLOATING_POINT",
  INTEGER: "INTEGER",
} as const;

/**
 * @public
 */
export type HlsManifestDurationFormat = (typeof HlsManifestDurationFormat)[keyof typeof HlsManifestDurationFormat];

/**
 * @public
 * @enum
 */
export const HlsMode = {
  LIVE: "LIVE",
  VOD: "VOD",
} as const;

/**
 * @public
 */
export type HlsMode = (typeof HlsMode)[keyof typeof HlsMode];

/**
 * @public
 * @enum
 */
export const HlsOutputSelection = {
  MANIFESTS_AND_SEGMENTS: "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY: "SEGMENTS_ONLY",
  VARIANT_MANIFESTS_AND_SEGMENTS: "VARIANT_MANIFESTS_AND_SEGMENTS",
} as const;

/**
 * @public
 */
export type HlsOutputSelection = (typeof HlsOutputSelection)[keyof typeof HlsOutputSelection];

/**
 * @public
 * @enum
 */
export const HlsProgramDateTime = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsProgramDateTime = (typeof HlsProgramDateTime)[keyof typeof HlsProgramDateTime];

/**
 * @public
 * @enum
 */
export const HlsProgramDateTimeClock = {
  INITIALIZE_FROM_OUTPUT_TIMECODE: "INITIALIZE_FROM_OUTPUT_TIMECODE",
  SYSTEM_CLOCK: "SYSTEM_CLOCK",
} as const;

/**
 * @public
 */
export type HlsProgramDateTimeClock = (typeof HlsProgramDateTimeClock)[keyof typeof HlsProgramDateTimeClock];

/**
 * @public
 * @enum
 */
export const HlsRedundantManifest = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type HlsRedundantManifest = (typeof HlsRedundantManifest)[keyof typeof HlsRedundantManifest];

/**
 * @public
 * @enum
 */
export const HlsSegmentationMode = {
  USE_INPUT_SEGMENTATION: "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION: "USE_SEGMENT_DURATION",
} as const;

/**
 * @public
 */
export type HlsSegmentationMode = (typeof HlsSegmentationMode)[keyof typeof HlsSegmentationMode];

/**
 * @public
 * @enum
 */
export const HlsStreamInfResolution = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsStreamInfResolution = (typeof HlsStreamInfResolution)[keyof typeof HlsStreamInfResolution];

/**
 * @public
 * @enum
 */
export const HlsTimedMetadataId3Frame = {
  NONE: "NONE",
  PRIV: "PRIV",
  TDRL: "TDRL",
} as const;

/**
 * @public
 */
export type HlsTimedMetadataId3Frame = (typeof HlsTimedMetadataId3Frame)[keyof typeof HlsTimedMetadataId3Frame];

/**
 * @public
 * @enum
 */
export const HlsTsFileMode = {
  SEGMENTED_FILES: "SEGMENTED_FILES",
  SINGLE_FILE: "SINGLE_FILE",
} as const;

/**
 * @public
 */
export type HlsTsFileMode = (typeof HlsTsFileMode)[keyof typeof HlsTsFileMode];

/**
 * @public
 * Hls Group Settings
 */
export interface HlsGroupSettings {
  /**
   * @public
   * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
   */
  AdMarkers?: HlsAdMarkers[];

  /**
   * @public
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlContent?: string;

  /**
   * @public
   * Optional. One value per output group.
   *
   * This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
   */
  BaseUrlContent1?: string;

  /**
   * @public
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlManifest?: string;

  /**
   * @public
   * Optional. One value per output group.
   *
   * Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
   */
  BaseUrlManifest1?: string;

  /**
   * @public
   * Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".
   */
  CaptionLanguageMappings?: CaptionLanguageMapping[];

  /**
   * @public
   * Applies only to 608 Embedded output captions.
   * insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.
   * none: Include CLOSED-CAPTIONS=NONE line in the manifest.
   * omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting;

  /**
   * @public
   * When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
   */
  ClientCache?: HlsClientCache;

  /**
   * @public
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: HlsCodecSpecification;

  /**
   * @public
   * For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.
   */
  ConstantIv?: string;

  /**
   * @public
   * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
   */
  Destination: OutputLocationRef | undefined;

  /**
   * @public
   * Place segments in subdirectories.
   */
  DirectoryStructure?: HlsDirectoryStructure;

  /**
   * @public
   * Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group.
   * Typically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose.
   * Choose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.
   */
  DiscontinuityTags?: HlsDiscontinuityTags;

  /**
   * @public
   * Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.
   */
  EncryptionType?: HlsEncryptionType;

  /**
   * @public
   * Parameters that control interactions with the CDN.
   */
  HlsCdnSettings?: HlsCdnSettings;

  /**
   * @public
   * State of HLS ID3 Segment Tagging
   */
  HlsId3SegmentTagging?: HlsId3SegmentTaggingState;

  /**
   * @public
   * DISABLED: Do not create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).
   *
   * STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888"
   */
  IFrameOnlyPlaylists?: IFrameOnlyPlaylistType;

  /**
   * @public
   * Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline.
   * Auto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups.
   * Suppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.
   */
  IncompleteSegmentBehavior?: HlsIncompleteSegmentBehavior;

  /**
   * @public
   * Applies only if Mode field is LIVE.
   *
   * Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be smaller than the number in the Keep Segments field.
   */
  IndexNSegments?: number;

  /**
   * @public
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForHlsOut;

  /**
   * @public
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.
   */
  IvInManifest?: HlsIvInManifest;

  /**
   * @public
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.
   */
  IvSource?: HlsIvSource;

  /**
   * @public
   * Applies only if Mode field is LIVE.
   *
   * Specifies the number of media segments to retain in the destination directory. This number should be bigger than indexNSegments (Num segments). We recommend (value = (2 x indexNsegments) + 1).
   *
   * If this "keep segments" number is too low, the following might happen: the player is still reading a media manifest file that lists this segment, but that segment has been removed from the destination directory (as directed by indexNSegments). This situation would result in a 404 HTTP error on the player.
   */
  KeepSegments?: number;

  /**
   * @public
   * The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.
   */
  KeyFormat?: string;

  /**
   * @public
   * Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * @public
   * The key provider settings.
   */
  KeyProviderSettings?: KeyProviderSettings;

  /**
   * @public
   * When set to gzip, compresses HLS playlist.
   */
  ManifestCompression?: HlsManifestCompression;

  /**
   * @public
   * Indicates whether the output manifest should use floating point or integer values for segment duration.
   */
  ManifestDurationFormat?: HlsManifestDurationFormat;

  /**
   * @public
   * Minimum length of MPEG-2 Transport Stream segments in seconds. When set, minimum segment length is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * @public
   * If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.
   *
   * VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
   */
  Mode?: HlsMode;

  /**
   * @public
   * MANIFESTS_AND_SEGMENTS: Generates manifests (master manifest, if applicable, and media manifests) for this output group.
   *
   * VARIANT_MANIFESTS_AND_SEGMENTS: Generates media manifests for this output group, but not a master manifest.
   *
   * SEGMENTS_ONLY: Does not generate any manifests for this output group.
   */
  OutputSelection?: HlsOutputSelection;

  /**
   * @public
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated using the program date time clock.
   */
  ProgramDateTime?: HlsProgramDateTime;

  /**
   * @public
   * Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock. Options include:
   *
   * INITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment.
   *
   * SYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.
   */
  ProgramDateTimeClock?: HlsProgramDateTimeClock;

  /**
   * @public
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * @public
   * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows playout device that support stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines.
   *
   * DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only.
   *
   * For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players so a redundant manifest from MediaLive is irrelevant.
   */
  RedundantManifest?: HlsRedundantManifest;

  /**
   * @public
   * Length of MPEG-2 Transport Stream segments to create in seconds. Note that segments will end on the next keyframe after this duration, so actual segment length may be longer.
   */
  SegmentLength?: number;

  /**
   * @public
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: HlsSegmentationMode;

  /**
   * @public
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * @public
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: HlsStreamInfResolution;

  /**
   * @public
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;

  /**
   * @public
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;

  /**
   * @public
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;

  /**
   * @public
   * SEGMENTED_FILES: Emit the program as segments - multiple .ts media files.
   *
   * SINGLE_FILE: Applies only if Mode field is VOD. Emit the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
   */
  TsFileMode?: HlsTsFileMode;
}

/**
 * @public
 * Media Package Group Settings
 */
export interface MediaPackageGroupSettings {
  /**
   * @public
   * MediaPackage channel destination.
   */
  Destination: OutputLocationRef | undefined;
}

/**
 * @public
 * @enum
 */
export const SmoothGroupAudioOnlyTimecodeControl = {
  PASSTHROUGH: "PASSTHROUGH",
  USE_CONFIGURED_CLOCK: "USE_CONFIGURED_CLOCK",
} as const;

/**
 * @public
 */
export type SmoothGroupAudioOnlyTimecodeControl =
  (typeof SmoothGroupAudioOnlyTimecodeControl)[keyof typeof SmoothGroupAudioOnlyTimecodeControl];

/**
 * @public
 * @enum
 */
export const SmoothGroupCertificateMode = {
  SELF_SIGNED: "SELF_SIGNED",
  VERIFY_AUTHENTICITY: "VERIFY_AUTHENTICITY",
} as const;

/**
 * @public
 */
export type SmoothGroupCertificateMode = (typeof SmoothGroupCertificateMode)[keyof typeof SmoothGroupCertificateMode];

/**
 * @public
 * @enum
 */
export const SmoothGroupEventIdMode = {
  NO_EVENT_ID: "NO_EVENT_ID",
  USE_CONFIGURED: "USE_CONFIGURED",
  USE_TIMESTAMP: "USE_TIMESTAMP",
} as const;

/**
 * @public
 */
export type SmoothGroupEventIdMode = (typeof SmoothGroupEventIdMode)[keyof typeof SmoothGroupEventIdMode];

/**
 * @public
 * @enum
 */
export const SmoothGroupEventStopBehavior = {
  NONE: "NONE",
  SEND_EOS: "SEND_EOS",
} as const;

/**
 * @public
 */
export type SmoothGroupEventStopBehavior =
  (typeof SmoothGroupEventStopBehavior)[keyof typeof SmoothGroupEventStopBehavior];

/**
 * @public
 * @enum
 */
export const InputLossActionForMsSmoothOut = {
  EMIT_OUTPUT: "EMIT_OUTPUT",
  PAUSE_OUTPUT: "PAUSE_OUTPUT",
} as const;

/**
 * @public
 */
export type InputLossActionForMsSmoothOut =
  (typeof InputLossActionForMsSmoothOut)[keyof typeof InputLossActionForMsSmoothOut];

/**
 * @public
 * @enum
 */
export const SmoothGroupSegmentationMode = {
  USE_INPUT_SEGMENTATION: "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION: "USE_SEGMENT_DURATION",
} as const;

/**
 * @public
 */
export type SmoothGroupSegmentationMode =
  (typeof SmoothGroupSegmentationMode)[keyof typeof SmoothGroupSegmentationMode];

/**
 * @public
 * @enum
 */
export const SmoothGroupSparseTrackType = {
  NONE: "NONE",
  SCTE_35: "SCTE_35",
  SCTE_35_WITHOUT_SEGMENTATION: "SCTE_35_WITHOUT_SEGMENTATION",
} as const;

/**
 * @public
 */
export type SmoothGroupSparseTrackType = (typeof SmoothGroupSparseTrackType)[keyof typeof SmoothGroupSparseTrackType];

/**
 * @public
 * @enum
 */
export const SmoothGroupStreamManifestBehavior = {
  DO_NOT_SEND: "DO_NOT_SEND",
  SEND: "SEND",
} as const;

/**
 * @public
 */
export type SmoothGroupStreamManifestBehavior =
  (typeof SmoothGroupStreamManifestBehavior)[keyof typeof SmoothGroupStreamManifestBehavior];

/**
 * @public
 * @enum
 */
export const SmoothGroupTimestampOffsetMode = {
  USE_CONFIGURED_OFFSET: "USE_CONFIGURED_OFFSET",
  USE_EVENT_START_DATE: "USE_EVENT_START_DATE",
} as const;

/**
 * @public
 */
export type SmoothGroupTimestampOffsetMode =
  (typeof SmoothGroupTimestampOffsetMode)[keyof typeof SmoothGroupTimestampOffsetMode];

/**
 * @public
 * Ms Smooth Group Settings
 */
export interface MsSmoothGroupSettings {
  /**
   * @public
   * The ID to include in each message in the sparse track. Ignored if sparseTrackType is NONE.
   */
  AcquisitionPointId?: string;

  /**
   * @public
   * If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.
   */
  AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl;

  /**
   * @public
   * If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail.
   */
  CertificateMode?: SmoothGroupCertificateMode;

  /**
   * @public
   * Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.
   */
  ConnectionRetryInterval?: number;

  /**
   * @public
   * Smooth Streaming publish point on an IIS server. Elemental Live acts as a "Push" encoder to IIS.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * @public
   * MS Smooth event ID to be sent to the IIS server.
   *
   * Should only be specified if eventIdMode is set to useConfigured.
   */
  EventId?: string;

  /**
   * @public
   * Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.
   *
   * Options:
   * - "useConfigured" - use the value provided in eventId
   * - "useTimestamp" - generate and send an event ID based on the current timestamp
   * - "noEventId" - do not send an event ID to the IIS server.
   */
  EventIdMode?: SmoothGroupEventIdMode;

  /**
   * @public
   * When set to sendEos, send EOS signal to IIS server when stopping the event
   */
  EventStopBehavior?: SmoothGroupEventStopBehavior;

  /**
   * @public
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * @public
   * Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.
   */
  FragmentLength?: number;

  /**
   * @public
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForMsSmoothOut;

  /**
   * @public
   * Number of retry attempts.
   */
  NumRetries?: number;

  /**
   * @public
   * Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
   */
  RestartDelay?: number;

  /**
   * @public
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: SmoothGroupSegmentationMode;

  /**
   * @public
   * Number of milliseconds to delay the output from the second pipeline.
   */
  SendDelayMs?: number;

  /**
   * @public
   * Identifies the type of data to place in the sparse track:
   * - SCTE35: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame to start a new segment.
   * - SCTE35_WITHOUT_SEGMENTATION: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame but don't start a new segment.
   * - NONE: Don't generate a sparse track for any outputs in this output group.
   */
  SparseTrackType?: SmoothGroupSparseTrackType;

  /**
   * @public
   * When set to send, send stream manifest so publishing point doesn't start until all streams start.
   */
  StreamManifestBehavior?: SmoothGroupStreamManifestBehavior;

  /**
   * @public
   * Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.
   */
  TimestampOffset?: string;

  /**
   * @public
   * Type of timestamp date offset to use.
   * - useEventStartDate: Use the date the event was started as the offset
   * - useConfiguredOffset: Use an explicitly configured date as the offset
   */
  TimestampOffsetMode?: SmoothGroupTimestampOffsetMode;
}

/**
 * @public
 * Multiplex Group Settings
 */
export interface MultiplexGroupSettings {}

/**
 * @public
 * @enum
 */
export const RtmpAdMarkers = {
  ON_CUE_POINT_SCTE35: "ON_CUE_POINT_SCTE35",
} as const;

/**
 * @public
 */
export type RtmpAdMarkers = (typeof RtmpAdMarkers)[keyof typeof RtmpAdMarkers];

/**
 * @public
 * @enum
 */
export const AuthenticationScheme = {
  AKAMAI: "AKAMAI",
  COMMON: "COMMON",
} as const;

/**
 * @public
 */
export type AuthenticationScheme = (typeof AuthenticationScheme)[keyof typeof AuthenticationScheme];

/**
 * @public
 * @enum
 */
export const RtmpCacheFullBehavior = {
  DISCONNECT_IMMEDIATELY: "DISCONNECT_IMMEDIATELY",
  WAIT_FOR_SERVER: "WAIT_FOR_SERVER",
} as const;

/**
 * @public
 */
export type RtmpCacheFullBehavior = (typeof RtmpCacheFullBehavior)[keyof typeof RtmpCacheFullBehavior];

/**
 * @public
 * @enum
 */
export const RtmpCaptionData = {
  ALL: "ALL",
  FIELD1_608: "FIELD1_608",
  FIELD1_AND_FIELD2_608: "FIELD1_AND_FIELD2_608",
} as const;

/**
 * @public
 */
export type RtmpCaptionData = (typeof RtmpCaptionData)[keyof typeof RtmpCaptionData];

/**
 * @public
 * @enum
 */
export const IncludeFillerNalUnits = {
  AUTO: "AUTO",
  DROP: "DROP",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type IncludeFillerNalUnits = (typeof IncludeFillerNalUnits)[keyof typeof IncludeFillerNalUnits];

/**
 * @public
 * @enum
 */
export const InputLossActionForRtmpOut = {
  EMIT_OUTPUT: "EMIT_OUTPUT",
  PAUSE_OUTPUT: "PAUSE_OUTPUT",
} as const;

/**
 * @public
 */
export type InputLossActionForRtmpOut = (typeof InputLossActionForRtmpOut)[keyof typeof InputLossActionForRtmpOut];

/**
 * @public
 * Rtmp Group Settings
 */
export interface RtmpGroupSettings {
  /**
   * @public
   * Choose the ad marker type for this output group. MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.
   */
  AdMarkers?: RtmpAdMarkers[];

  /**
   * @public
   * Authentication scheme to use when connecting with CDN
   */
  AuthenticationScheme?: AuthenticationScheme;

  /**
   * @public
   * Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again.
   */
  CacheFullBehavior?: RtmpCacheFullBehavior;

  /**
   * @public
   * Cache length, in seconds, is used to calculate buffer size.
   */
  CacheLength?: number;

  /**
   * @public
   * Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed.
   */
  CaptionData?: RtmpCaptionData;

  /**
   * @public
   * Controls the behavior of this RTMP group if input becomes unavailable.
   *
   * - emitOutput: Emit a slate until input returns.
   * - pauseOutput: Stop transmitting data until input returns. This does not close the underlying RTMP connection.
   */
  InputLossAction?: InputLossActionForRtmpOut;

  /**
   * @public
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * @public
   * Applies only when the rate control mode (in the codec settings) is CBR (constant bit rate). Controls whether the RTMP output stream is padded (with FILL NAL units) in order to achieve a constant bit rate that is truly constant. When there is no padding, the bandwidth varies (up to the bitrate value in the codec settings). We recommend that you choose Auto.
   */
  IncludeFillerNalUnits?: IncludeFillerNalUnits;
}

/**
 * @public
 * @enum
 */
export const InputLossActionForUdpOut = {
  DROP_PROGRAM: "DROP_PROGRAM",
  DROP_TS: "DROP_TS",
  EMIT_PROGRAM: "EMIT_PROGRAM",
} as const;

/**
 * @public
 */
export type InputLossActionForUdpOut = (typeof InputLossActionForUdpOut)[keyof typeof InputLossActionForUdpOut];

/**
 * @public
 * @enum
 */
export const UdpTimedMetadataId3Frame = {
  NONE: "NONE",
  PRIV: "PRIV",
  TDRL: "TDRL",
} as const;

/**
 * @public
 */
export type UdpTimedMetadataId3Frame = (typeof UdpTimedMetadataId3Frame)[keyof typeof UdpTimedMetadataId3Frame];

/**
 * @public
 * Udp Group Settings
 */
export interface UdpGroupSettings {
  /**
   * @public
   * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   */
  InputLossAction?: InputLossActionForUdpOut;

  /**
   * @public
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: UdpTimedMetadataId3Frame;

  /**
   * @public
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;
}

/**
 * @public
 * Output Group Settings
 */
export interface OutputGroupSettings {
  /**
   * @public
   * Archive Group Settings
   */
  ArchiveGroupSettings?: ArchiveGroupSettings;

  /**
   * @public
   * Frame Capture Group Settings
   */
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings;

  /**
   * @public
   * Hls Group Settings
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * @public
   * Media Package Group Settings
   */
  MediaPackageGroupSettings?: MediaPackageGroupSettings;

  /**
   * @public
   * Ms Smooth Group Settings
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * @public
   * Multiplex Group Settings
   */
  MultiplexGroupSettings?: MultiplexGroupSettings;

  /**
   * @public
   * Rtmp Group Settings
   */
  RtmpGroupSettings?: RtmpGroupSettings;

  /**
   * @public
   * Udp Group Settings
   */
  UdpGroupSettings?: UdpGroupSettings;
}

/**
 * @public
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface OutputGroup {
  /**
   * @public
   * Custom output group name optionally defined by the user.
   */
  Name?: string;

  /**
   * @public
   * Settings associated with the output group.
   */
  OutputGroupSettings: OutputGroupSettings | undefined;

  /**
   * @public
   * Placeholder documentation for __listOfOutput
   */
  Outputs: Output[] | undefined;
}

/**
 * @public
 * Runtime details of a pipeline when a channel is running.
 */
export interface PipelineDetail {
  /**
   * @public
   * The name of the active input attachment currently being ingested by this pipeline.
   */
  ActiveInputAttachmentName?: string;

  /**
   * @public
   * The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.
   */
  ActiveInputSwitchActionName?: string;

  /**
   * @public
   * The name of the motion graphics activate action that occurred most recently and that resulted in the current graphics URI for this pipeline.
   */
  ActiveMotionGraphicsActionName?: string;

  /**
   * @public
   * The current URI being used for HTML5 motion graphics for this pipeline.
   */
  ActiveMotionGraphicsUri?: string;

  /**
   * @public
   * Pipeline ID
   */
  PipelineId?: string;
}

/**
 * @public
 * @enum
 */
export const PipelineId = {
  PIPELINE_0: "PIPELINE_0",
  PIPELINE_1: "PIPELINE_1",
} as const;

/**
 * @public
 */
export type PipelineId = (typeof PipelineId)[keyof typeof PipelineId];

/**
 * @public
 * Settings for pausing a pipeline.
 */
export interface PipelinePauseStateSettings {
  /**
   * @public
   * Pipeline ID to pause ("PIPELINE_0" or "PIPELINE_1").
   */
  PipelineId: PipelineId | undefined;
}

/**
 * @public
 * @enum
 */
export const ReservationAutomaticRenewal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type ReservationAutomaticRenewal =
  (typeof ReservationAutomaticRenewal)[keyof typeof ReservationAutomaticRenewal];

/**
 * @public
 * The Renewal settings for Reservations
 */
export interface RenewalSettings {
  /**
   * @public
   * Automatic renewal status for the reservation
   */
  AutomaticRenewal?: ReservationAutomaticRenewal;

  /**
   * @public
   * Count for the reservation renewal
   */
  RenewalCount?: number;
}

/**
 * @public
 * @enum
 */
export const ReservationState = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  DELETED: "DELETED",
  EXPIRED: "EXPIRED",
} as const;

/**
 * @public
 */
export type ReservationState = (typeof ReservationState)[keyof typeof ReservationState];

/**
 * @public
 * Reserved resources available to use
 */
export interface Reservation {
  /**
   * @public
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * @public
   * Number of reserved resources
   */
  Count?: number;

  /**
   * @public
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * @public
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * @public
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * @public
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * @public
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * @public
   * User specified reservation name
   */
  Name?: string;

  /**
   * @public
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * @public
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * @public
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType;

  /**
   * @public
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * @public
   * Renewal settings for the reservation
   */
  RenewalSettings?: RenewalSettings;

  /**
   * @public
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * @public
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * @public
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * @public
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState;

  /**
   * @public
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

/**
 * @public
 * Settings for the action to insert a user-defined ID3 tag in each HLS segment
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * @public
   * ID3 tag to insert into each segment. Supports special keyword identifiers to substitute in segment-related values.\nSupported keyword identifiers: https://docs.aws.amazon.com/medialive/latest/ug/variable-data-identifiers.html
   */
  Tag?: string;

  /**
   * @public
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   */
  Id3?: string;
}

/**
 * @public
 * Settings for the action to emit HLS metadata
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * @public
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   */
  Id3: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InputTimecodeSource = {
  EMBEDDED: "EMBEDDED",
  ZEROBASED: "ZEROBASED",
} as const;

/**
 * @public
 */
export type InputTimecodeSource = (typeof InputTimecodeSource)[keyof typeof InputTimecodeSource];

/**
 * @public
 * Settings to identify the start of the clip.
 */
export interface StartTimecode {
  /**
   * @public
   * The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

/**
 * @public
 * @enum
 */
export const LastFrameClippingBehavior = {
  EXCLUDE_LAST_FRAME: "EXCLUDE_LAST_FRAME",
  INCLUDE_LAST_FRAME: "INCLUDE_LAST_FRAME",
} as const;

/**
 * @public
 */
export type LastFrameClippingBehavior = (typeof LastFrameClippingBehavior)[keyof typeof LastFrameClippingBehavior];

/**
 * @public
 * Settings to identify the end of the clip.
 */
export interface StopTimecode {
  /**
   * @public
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   */
  LastFrameClippingBehavior?: LastFrameClippingBehavior;

  /**
   * @public
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

/**
 * @public
 * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
 */
export interface InputClippingSettings {
  /**
   * @public
   * The source of the timecodes in the source being clipped.
   */
  InputTimecodeSource: InputTimecodeSource | undefined;

  /**
   * @public
   * Settings to identify the start of the clip.
   */
  StartTimecode?: StartTimecode;

  /**
   * @public
   * Settings to identify the end of the clip.
   */
  StopTimecode?: StopTimecode;
}

/**
 * @public
 * Action to prepare an input for a future immediate input switch.
 */
export interface InputPrepareScheduleActionSettings {
  /**
   * @public
   * The name of the input attachment that should be prepared by this action. If no name is provided, the action will stop the most recent prepare (if any) when activated.
   */
  InputAttachmentNameReference?: string;

  /**
   * @public
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * @public
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];
}

/**
 * @public
 * Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
 */
export interface InputSwitchScheduleActionSettings {
  /**
   * @public
   * The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.
   */
  InputAttachmentNameReference: string | undefined;

  /**
   * @public
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * @public
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];
}

/**
 * @public
 * Settings to specify the rendering of motion graphics into the video stream.
 */
export interface MotionGraphicsActivateScheduleActionSettings {
  /**
   * @public
   * Duration (in milliseconds) that motion graphics should render on to the video stream. Leaving out this property or setting to 0 will result in rendering continuing until a deactivate action is processed.
   */
  Duration?: number;

  /**
   * @public
   * Key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * @public
   * URI of the HTML5 content to be rendered into the live stream.
   */
  Url?: string;

  /**
   * @public
   * Documentation update needed
   */
  Username?: string;
}

/**
 * @public
 * Settings to specify the ending of rendering motion graphics into the video stream.
 */
export interface MotionGraphicsDeactivateScheduleActionSettings {}

/**
 * @public
 * Settings for the action to set pause state of a channel.
 */
export interface PauseStateScheduleActionSettings {
  /**
   * @public
   * Placeholder documentation for __listOfPipelinePauseStateSettings
   */
  Pipelines?: PipelinePauseStateSettings[];
}

/**
 * @public
 * @enum
 */
export const Scte35InputMode = {
  FIXED: "FIXED",
  FOLLOW_ACTIVE: "FOLLOW_ACTIVE",
} as const;

/**
 * @public
 */
export type Scte35InputMode = (typeof Scte35InputMode)[keyof typeof Scte35InputMode];

/**
 * @public
 * Scte35Input Schedule Action Settings
 */
export interface Scte35InputScheduleActionSettings {
  /**
   * @public
   * In fixed mode, enter the name of the input attachment that you want to use as a SCTE-35 input. (Don't enter the ID of the input.)"
   */
  InputAttachmentNameReference?: string;

  /**
   * @public
   * Whether the SCTE-35 input should be the active input or a fixed input.
   */
  Mode: Scte35InputMode | undefined;
}

/**
 * @public
 * Settings for a SCTE-35 return_to_network message.
 */
export interface Scte35ReturnToNetworkScheduleActionSettings {
  /**
   * @public
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

/**
 * @public
 * Settings for a SCTE-35 splice_insert message.
 */
export interface Scte35SpliceInsertScheduleActionSettings {
  /**
   * @public
   * Optional, the duration for the splice_insert, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. If you enter a duration, there is an expectation that the downstream system can read the duration and cue in at that time. If you do not enter a duration, the splice_insert will continue indefinitely and there is an expectation that you will enter a return_to_network to end the splice_insert at the appropriate time.
   */
  Duration?: number;

  /**
   * @public
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Scte35ArchiveAllowedFlag = {
  ARCHIVE_ALLOWED: "ARCHIVE_ALLOWED",
  ARCHIVE_NOT_ALLOWED: "ARCHIVE_NOT_ALLOWED",
} as const;

/**
 * @public
 */
export type Scte35ArchiveAllowedFlag = (typeof Scte35ArchiveAllowedFlag)[keyof typeof Scte35ArchiveAllowedFlag];

/**
 * @public
 * @enum
 */
export const Scte35DeviceRestrictions = {
  NONE: "NONE",
  RESTRICT_GROUP0: "RESTRICT_GROUP0",
  RESTRICT_GROUP1: "RESTRICT_GROUP1",
  RESTRICT_GROUP2: "RESTRICT_GROUP2",
} as const;

/**
 * @public
 */
export type Scte35DeviceRestrictions = (typeof Scte35DeviceRestrictions)[keyof typeof Scte35DeviceRestrictions];

/**
 * @public
 * @enum
 */
export const Scte35NoRegionalBlackoutFlag = {
  NO_REGIONAL_BLACKOUT: "NO_REGIONAL_BLACKOUT",
  REGIONAL_BLACKOUT: "REGIONAL_BLACKOUT",
} as const;

/**
 * @public
 */
export type Scte35NoRegionalBlackoutFlag =
  (typeof Scte35NoRegionalBlackoutFlag)[keyof typeof Scte35NoRegionalBlackoutFlag];

/**
 * @public
 * @enum
 */
export const Scte35WebDeliveryAllowedFlag = {
  WEB_DELIVERY_ALLOWED: "WEB_DELIVERY_ALLOWED",
  WEB_DELIVERY_NOT_ALLOWED: "WEB_DELIVERY_NOT_ALLOWED",
} as const;

/**
 * @public
 */
export type Scte35WebDeliveryAllowedFlag =
  (typeof Scte35WebDeliveryAllowedFlag)[keyof typeof Scte35WebDeliveryAllowedFlag];

/**
 * @public
 * Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.
 */
export interface Scte35DeliveryRestrictions {
  /**
   * @public
   * Corresponds to SCTE-35 archive_allowed_flag.
   */
  ArchiveAllowedFlag: Scte35ArchiveAllowedFlag | undefined;

  /**
   * @public
   * Corresponds to SCTE-35 device_restrictions parameter.
   */
  DeviceRestrictions: Scte35DeviceRestrictions | undefined;

  /**
   * @public
   * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
   */
  NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag | undefined;

  /**
   * @public
   * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
   */
  WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag | undefined;
}

/**
 * @public
 * @enum
 */
export const Scte35SegmentationCancelIndicator = {
  SEGMENTATION_EVENT_CANCELED: "SEGMENTATION_EVENT_CANCELED",
  SEGMENTATION_EVENT_NOT_CANCELED: "SEGMENTATION_EVENT_NOT_CANCELED",
} as const;

/**
 * @public
 */
export type Scte35SegmentationCancelIndicator =
  (typeof Scte35SegmentationCancelIndicator)[keyof typeof Scte35SegmentationCancelIndicator];

/**
 * @public
 * Corresponds to SCTE-35 segmentation_descriptor.
 */
export interface Scte35SegmentationDescriptor {
  /**
   * @public
   * Holds the four SCTE-35 delivery restriction parameters.
   */
  DeliveryRestrictions?: Scte35DeliveryRestrictions;

  /**
   * @public
   * Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SegmentNum?: number;

  /**
   * @public
   * Corresponds to SCTE-35 segmentation_event_cancel_indicator.
   */
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator | undefined;

  /**
   * @public
   * Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.
   */
  SegmentationDuration?: number;

  /**
   * @public
   * Corresponds to SCTE-35 segmentation_event_id.
   */
  SegmentationEventId: number | undefined;

  /**
   * @public
   * Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").
   */
  SegmentationTypeId?: number;

  /**
   * @public
   * Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.
   */
  SegmentationUpid?: string;

  /**
   * @public
   * Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").
   */
  SegmentationUpidType?: number;

  /**
   * @public
   * Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SegmentsExpected?: number;

  /**
   * @public
   * Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentNum?: number;

  /**
   * @public
   * Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentsExpected?: number;
}

/**
 * @public
 * SCTE-35 Descriptor settings.
 */
export interface Scte35DescriptorSettings {
  /**
   * @public
   * SCTE-35 Segmentation Descriptor.
   */
  SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor | undefined;
}

/**
 * @public
 * Holds one set of SCTE-35 Descriptor Settings.
 */
export interface Scte35Descriptor {
  /**
   * @public
   * SCTE-35 Descriptor Settings.
   */
  Scte35DescriptorSettings: Scte35DescriptorSettings | undefined;
}

/**
 * @public
 * Settings for a SCTE-35 time_signal.
 */
export interface Scte35TimeSignalScheduleActionSettings {
  /**
   * @public
   * The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.
   */
  Scte35Descriptors: Scte35Descriptor[] | undefined;
}

/**
 * @public
 * Settings for the action to activate a static image.
 */
export interface StaticImageActivateScheduleActionSettings {
  /**
   * @public
   * The duration in milliseconds for the image to remain on the video. If omitted or set to 0 the duration is unlimited and the image will remain until it is explicitly deactivated.
   */
  Duration?: number;

  /**
   * @public
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   */
  FadeIn?: number;

  /**
   * @public
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * @public
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   */
  Height?: number;

  /**
   * @public
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   */
  Image: InputLocation | undefined;

  /**
   * @public
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   */
  ImageX?: number;

  /**
   * @public
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   */
  ImageY?: number;

  /**
   * @public
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   */
  Layer?: number;

  /**
   * @public
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   */
  Opacity?: number;

  /**
   * @public
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   */
  Width?: number;
}

/**
 * @public
 * Settings for the action to deactivate the image in a specific layer.
 */
export interface StaticImageDeactivateScheduleActionSettings {
  /**
   * @public
   * The time in milliseconds for the image to fade out. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * @public
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   */
  Layer?: number;
}

/**
 * @public
 * Holds the settings for a single schedule action.
 */
export interface ScheduleActionSettings {
  /**
   * @public
   * Action to insert HLS ID3 segment tagging
   */
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

  /**
   * @public
   * Action to insert HLS metadata
   */
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

  /**
   * @public
   * Action to prepare an input for a future immediate input switch
   */
  InputPrepareSettings?: InputPrepareScheduleActionSettings;

  /**
   * @public
   * Action to switch the input
   */
  InputSwitchSettings?: InputSwitchScheduleActionSettings;

  /**
   * @public
   * Action to activate a motion graphics image overlay
   */
  MotionGraphicsImageActivateSettings?: MotionGraphicsActivateScheduleActionSettings;

  /**
   * @public
   * Action to deactivate a motion graphics image overlay
   */
  MotionGraphicsImageDeactivateSettings?: MotionGraphicsDeactivateScheduleActionSettings;

  /**
   * @public
   * Action to pause or unpause one or both channel pipelines
   */
  PauseStateSettings?: PauseStateScheduleActionSettings;

  /**
   * @public
   * Action to specify scte35 input
   */
  Scte35InputSettings?: Scte35InputScheduleActionSettings;

  /**
   * @public
   * Action to insert SCTE-35 return_to_network message
   */
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * @public
   * Action to insert SCTE-35 splice_insert message
   */
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

  /**
   * @public
   * Action to insert SCTE-35 time_signal message
   */
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

  /**
   * @public
   * Action to activate a static image overlay
   */
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

  /**
   * @public
   * Action to deactivate a static image overlay
   */
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;
}

/**
 * @public
 * Start time for the action.
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * @public
   * Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".
   */
  Time: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FollowPoint = {
  END: "END",
  START: "START",
} as const;

/**
 * @public
 */
export type FollowPoint = (typeof FollowPoint)[keyof typeof FollowPoint];

/**
 * @public
 * Settings to specify if an action follows another.
 */
export interface FollowModeScheduleActionStartSettings {
  /**
   * @public
   * Identifies whether this action starts relative to the start or relative to the end of the reference action.
   */
  FollowPoint: FollowPoint | undefined;

  /**
   * @public
   * The action name of another action that this one refers to.
   */
  ReferenceActionName: string | undefined;
}

/**
 * @public
 * Settings to configure an action so that it occurs as soon as possible.
 */
export interface ImmediateModeScheduleActionStartSettings {}

/**
 * @public
 * Settings to specify when an action should occur. Only one of the options must be selected.
 */
export interface ScheduleActionStartSettings {
  /**
   * @public
   * Option for specifying the start time for an action.
   */
  FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;

  /**
   * @public
   * Option for specifying an action as relative to another action.
   */
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

  /**
   * @public
   * Option for specifying an action that should be applied immediately.
   */
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;
}

/**
 * @public
 * Contains information on a single schedule action.
 */
export interface ScheduleAction {
  /**
   * @public
   * The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.
   */
  ActionName: string | undefined;

  /**
   * @public
   * Settings for this schedule action.
   */
  ScheduleActionSettings: ScheduleActionSettings | undefined;

  /**
   * @public
   * The time for the action to start in the channel.
   */
  ScheduleActionStartSettings: ScheduleActionStartSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const ThumbnailType = {
  CURRENT_ACTIVE: "CURRENT_ACTIVE",
  UNSPECIFIED: "UNSPECIFIED",
} as const;

/**
 * @public
 */
export type ThumbnailType = (typeof ThumbnailType)[keyof typeof ThumbnailType];

/**
 * @public
 * Details of a single thumbnail
 */
export interface Thumbnail {
  /**
   * @public
   * The binary data for the latest thumbnail.
   */
  Body?: string;

  /**
   * @public
   * The content type for the latest thumbnail.
   */
  ContentType?: string;

  /**
   * @public
   * Thumbnail Type
   */
  ThumbnailType?: ThumbnailType;

  /**
   * @public
   * Time stamp for the latest thumbnail.
   */
  TimeStamp?: Date;
}

/**
 * @public
 * Thumbnail details for one pipeline of a running channel.
 */
export interface ThumbnailDetail {
  /**
   * @public
   * Pipeline ID
   */
  PipelineId?: string;

  /**
   * @public
   * thumbnails of a single pipeline
   */
  Thumbnails?: Thumbnail[];
}

/**
 * @public
 * @enum
 */
export const InputDeviceTransferType = {
  INCOMING: "INCOMING",
  OUTGOING: "OUTGOING",
} as const;

/**
 * @public
 */
export type InputDeviceTransferType = (typeof InputDeviceTransferType)[keyof typeof InputDeviceTransferType];

/**
 * @public
 * Details about the input device that is being transferred.
 */
export interface TransferringInputDeviceSummary {
  /**
   * @public
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * @public
   * The optional message that the sender has attached to the transfer.
   */
  Message?: string;

  /**
   * @public
   * The AWS account ID for the recipient of the input device transfer.
   */
  TargetCustomerId?: string;

  /**
   * @public
   * The type (direction) of the input device transfer.
   */
  TransferType?: InputDeviceTransferType;
}

/**
 * @public
 * Placeholder documentation for ValidationError
 */
export interface ValidationError {
  /**
   * @public
   * Path to the source of the error.
   */
  ElementPath?: string;

  /**
   * @public
   * The error message.
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const FrameCaptureIntervalUnit = {
  MILLISECONDS: "MILLISECONDS",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type FrameCaptureIntervalUnit = (typeof FrameCaptureIntervalUnit)[keyof typeof FrameCaptureIntervalUnit];

/**
 * @public
 * @enum
 */
export const TimecodeBurninFontSize = {
  EXTRA_SMALL_10: "EXTRA_SMALL_10",
  LARGE_48: "LARGE_48",
  MEDIUM_32: "MEDIUM_32",
  SMALL_16: "SMALL_16",
} as const;

/**
 * @public
 */
export type TimecodeBurninFontSize = (typeof TimecodeBurninFontSize)[keyof typeof TimecodeBurninFontSize];

/**
 * @public
 * @enum
 */
export const TimecodeBurninPosition = {
  BOTTOM_CENTER: "BOTTOM_CENTER",
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
  MIDDLE_CENTER: "MIDDLE_CENTER",
  MIDDLE_LEFT: "MIDDLE_LEFT",
  MIDDLE_RIGHT: "MIDDLE_RIGHT",
  TOP_CENTER: "TOP_CENTER",
  TOP_LEFT: "TOP_LEFT",
  TOP_RIGHT: "TOP_RIGHT",
} as const;

/**
 * @public
 */
export type TimecodeBurninPosition = (typeof TimecodeBurninPosition)[keyof typeof TimecodeBurninPosition];

/**
 * @public
 * Timecode Burnin Settings
 */
export interface TimecodeBurninSettings {
  /**
   * @public
   * Choose a timecode burn-in font size
   */
  FontSize: TimecodeBurninFontSize | undefined;

  /**
   * @public
   * Choose a timecode burn-in output position
   */
  Position: TimecodeBurninPosition | undefined;

  /**
   * @public
   * Create a timecode burn-in prefix (optional)
   */
  Prefix?: string;
}

/**
 * @public
 * Frame Capture Settings
 */
export interface FrameCaptureSettings {
  /**
   * @public
   * The frequency at which to capture frames for inclusion in the output. May be specified in either seconds or milliseconds, as specified by captureIntervalUnits.
   */
  CaptureInterval?: number;

  /**
   * @public
   * Unit for the frame capture interval.
   */
  CaptureIntervalUnits?: FrameCaptureIntervalUnit;

  /**
   * @public
   * Timecode burn-in settings
   */
  TimecodeBurninSettings?: TimecodeBurninSettings;
}

/**
 * @public
 * @enum
 */
export const H264AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type H264AdaptiveQuantization = (typeof H264AdaptiveQuantization)[keyof typeof H264AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const AfdSignaling = {
  AUTO: "AUTO",
  FIXED: "FIXED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AfdSignaling = (typeof AfdSignaling)[keyof typeof AfdSignaling];

/**
 * @public
 * @enum
 */
export const H264ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;

/**
 * @public
 */
export type H264ColorMetadata = (typeof H264ColorMetadata)[keyof typeof H264ColorMetadata];

/**
 * @public
 * Passthrough applies no color space conversion to the output
 */
export interface ColorSpacePassthroughSettings {}

/**
 * @public
 * Rec601 Settings
 */
export interface Rec601Settings {}

/**
 * @public
 * Rec709 Settings
 */
export interface Rec709Settings {}

/**
 * @public
 * H264 Color Space Settings
 */
export interface H264ColorSpaceSettings {
  /**
   * @public
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * @public
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * @public
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;
}

/**
 * @public
 * @enum
 */
export const H264EntropyEncoding = {
  CABAC: "CABAC",
  CAVLC: "CAVLC",
} as const;

/**
 * @public
 */
export type H264EntropyEncoding = (typeof H264EntropyEncoding)[keyof typeof H264EntropyEncoding];

/**
 * @public
 * @enum
 */
export const TemporalFilterPostFilterSharpening = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type TemporalFilterPostFilterSharpening =
  (typeof TemporalFilterPostFilterSharpening)[keyof typeof TemporalFilterPostFilterSharpening];

/**
 * @public
 * @enum
 */
export const TemporalFilterStrength = {
  AUTO: "AUTO",
  STRENGTH_1: "STRENGTH_1",
  STRENGTH_10: "STRENGTH_10",
  STRENGTH_11: "STRENGTH_11",
  STRENGTH_12: "STRENGTH_12",
  STRENGTH_13: "STRENGTH_13",
  STRENGTH_14: "STRENGTH_14",
  STRENGTH_15: "STRENGTH_15",
  STRENGTH_16: "STRENGTH_16",
  STRENGTH_2: "STRENGTH_2",
  STRENGTH_3: "STRENGTH_3",
  STRENGTH_4: "STRENGTH_4",
  STRENGTH_5: "STRENGTH_5",
  STRENGTH_6: "STRENGTH_6",
  STRENGTH_7: "STRENGTH_7",
  STRENGTH_8: "STRENGTH_8",
  STRENGTH_9: "STRENGTH_9",
} as const;

/**
 * @public
 */
export type TemporalFilterStrength = (typeof TemporalFilterStrength)[keyof typeof TemporalFilterStrength];

/**
 * @public
 * Temporal Filter Settings
 */
export interface TemporalFilterSettings {
  /**
   * @public
   * If you enable this filter, the results are the following:
   * - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.
   * - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
   */
  PostFilterSharpening?: TemporalFilterPostFilterSharpening;

  /**
   * @public
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   */
  Strength?: TemporalFilterStrength;
}

/**
 * @public
 * H264 Filter Settings
 */
export interface H264FilterSettings {
  /**
   * @public
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

/**
 * @public
 * @enum
 */
export const FixedAfd = {
  AFD_0000: "AFD_0000",
  AFD_0010: "AFD_0010",
  AFD_0011: "AFD_0011",
  AFD_0100: "AFD_0100",
  AFD_1000: "AFD_1000",
  AFD_1001: "AFD_1001",
  AFD_1010: "AFD_1010",
  AFD_1011: "AFD_1011",
  AFD_1101: "AFD_1101",
  AFD_1110: "AFD_1110",
  AFD_1111: "AFD_1111",
} as const;

/**
 * @public
 */
export type FixedAfd = (typeof FixedAfd)[keyof typeof FixedAfd];

/**
 * @public
 * @enum
 */
export const H264FlickerAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264FlickerAq = (typeof H264FlickerAq)[keyof typeof H264FlickerAq];

/**
 * @public
 * @enum
 */
export const H264ForceFieldPictures = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264ForceFieldPictures = (typeof H264ForceFieldPictures)[keyof typeof H264ForceFieldPictures];

/**
 * @public
 * @enum
 */
export const H264FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type H264FramerateControl = (typeof H264FramerateControl)[keyof typeof H264FramerateControl];

/**
 * @public
 * @enum
 */
export const H264GopBReference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264GopBReference = (typeof H264GopBReference)[keyof typeof H264GopBReference];

/**
 * @public
 * @enum
 */
export const H264GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type H264GopSizeUnits = (typeof H264GopSizeUnits)[keyof typeof H264GopSizeUnits];

/**
 * @public
 * @enum
 */
export const H264Level = {
  H264_LEVEL_1: "H264_LEVEL_1",
  H264_LEVEL_1_1: "H264_LEVEL_1_1",
  H264_LEVEL_1_2: "H264_LEVEL_1_2",
  H264_LEVEL_1_3: "H264_LEVEL_1_3",
  H264_LEVEL_2: "H264_LEVEL_2",
  H264_LEVEL_2_1: "H264_LEVEL_2_1",
  H264_LEVEL_2_2: "H264_LEVEL_2_2",
  H264_LEVEL_3: "H264_LEVEL_3",
  H264_LEVEL_3_1: "H264_LEVEL_3_1",
  H264_LEVEL_3_2: "H264_LEVEL_3_2",
  H264_LEVEL_4: "H264_LEVEL_4",
  H264_LEVEL_4_1: "H264_LEVEL_4_1",
  H264_LEVEL_4_2: "H264_LEVEL_4_2",
  H264_LEVEL_5: "H264_LEVEL_5",
  H264_LEVEL_5_1: "H264_LEVEL_5_1",
  H264_LEVEL_5_2: "H264_LEVEL_5_2",
  H264_LEVEL_AUTO: "H264_LEVEL_AUTO",
} as const;

/**
 * @public
 */
export type H264Level = (typeof H264Level)[keyof typeof H264Level];

/**
 * @public
 * @enum
 */
export const H264LookAheadRateControl = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type H264LookAheadRateControl = (typeof H264LookAheadRateControl)[keyof typeof H264LookAheadRateControl];

/**
 * @public
 * @enum
 */
export const H264ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type H264ParControl = (typeof H264ParControl)[keyof typeof H264ParControl];

/**
 * @public
 * @enum
 */
export const H264Profile = {
  BASELINE: "BASELINE",
  HIGH: "HIGH",
  HIGH_10BIT: "HIGH_10BIT",
  HIGH_422: "HIGH_422",
  HIGH_422_10BIT: "HIGH_422_10BIT",
  MAIN: "MAIN",
} as const;

/**
 * @public
 */
export type H264Profile = (typeof H264Profile)[keyof typeof H264Profile];

/**
 * @public
 * @enum
 */
export const H264QualityLevel = {
  ENHANCED_QUALITY: "ENHANCED_QUALITY",
  STANDARD_QUALITY: "STANDARD_QUALITY",
} as const;

/**
 * @public
 */
export type H264QualityLevel = (typeof H264QualityLevel)[keyof typeof H264QualityLevel];

/**
 * @public
 * @enum
 */
export const H264RateControlMode = {
  CBR: "CBR",
  MULTIPLEX: "MULTIPLEX",
  QVBR: "QVBR",
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type H264RateControlMode = (typeof H264RateControlMode)[keyof typeof H264RateControlMode];

/**
 * @public
 * @enum
 */
export const H264ScanType = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;

/**
 * @public
 */
export type H264ScanType = (typeof H264ScanType)[keyof typeof H264ScanType];

/**
 * @public
 * @enum
 */
export const H264SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264SceneChangeDetect = (typeof H264SceneChangeDetect)[keyof typeof H264SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H264SpatialAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264SpatialAq = (typeof H264SpatialAq)[keyof typeof H264SpatialAq];

/**
 * @public
 * @enum
 */
export const H264SubGopLength = {
  DYNAMIC: "DYNAMIC",
  FIXED: "FIXED",
} as const;

/**
 * @public
 */
export type H264SubGopLength = (typeof H264SubGopLength)[keyof typeof H264SubGopLength];

/**
 * @public
 * @enum
 */
export const H264Syntax = {
  DEFAULT: "DEFAULT",
  RP2027: "RP2027",
} as const;

/**
 * @public
 */
export type H264Syntax = (typeof H264Syntax)[keyof typeof H264Syntax];

/**
 * @public
 * @enum
 */
export const H264TemporalAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264TemporalAq = (typeof H264TemporalAq)[keyof typeof H264TemporalAq];

/**
 * @public
 * @enum
 */
export const H264TimecodeInsertionBehavior = {
  DISABLED: "DISABLED",
  PIC_TIMING_SEI: "PIC_TIMING_SEI",
} as const;

/**
 * @public
 */
export type H264TimecodeInsertionBehavior =
  (typeof H264TimecodeInsertionBehavior)[keyof typeof H264TimecodeInsertionBehavior];

/**
 * @public
 * H264 Settings
 */
export interface H264Settings {
  /**
   * @public
   * Enables or disables adaptive quantization, which is a technique MediaLive can apply to video on a frame-by-frame basis to produce more compression without losing quality. There are three types of adaptive quantization: flicker, spatial, and temporal. Set the field in one of these ways: Set to Auto. Recommended. For each type of AQ, MediaLive will determine if AQ is needed, and if so, the appropriate strength. Set a strength (a value other than Auto or Disable). This strength will apply to any of the AQ fields that you choose to enable. Set to Disabled to disable all types of adaptive quantization.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization;

  /**
   * @public
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling;

  /**
   * @public
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * @public
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  BufFillPct?: number;

  /**
   * @public
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * @public
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H264ColorMetadata;

  /**
   * @public
   * Color Space settings
   */
  ColorSpaceSettings?: H264ColorSpaceSettings;

  /**
   * @public
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   */
  EntropyEncoding?: H264EntropyEncoding;

  /**
   * @public
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H264FilterSettings;

  /**
   * @public
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd;

  /**
   * @public
   * Flicker AQ makes adjustments within each frame to reduce flicker or 'pop' on I-frames. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if flicker AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply flicker AQ using the specified strength. Disabled: MediaLive won't apply flicker AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply flicker AQ.
   */
  FlickerAq?: H264FlickerAq;

  /**
   * @public
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)
   * enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.
   * disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   */
  ForceFieldPictures?: H264ForceFieldPictures;

  /**
   * @public
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   */
  FramerateControl?: H264FramerateControl;

  /**
   * @public
   * Framerate denominator.
   */
  FramerateDenominator?: number;

  /**
   * @public
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * @public
   * Documentation update needed
   */
  GopBReference?: H264GopBReference;

  /**
   * @public
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * @public
   * Number of B-frames between reference frames.
   */
  GopNumBFrames?: number;

  /**
   * @public
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * @public
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H264GopSizeUnits;

  /**
   * @public
   * H.264 Level.
   */
  Level?: H264Level;

  /**
   * @public
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H264LookAheadRateControl;

  /**
   * @public
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   */
  MaxBitrate?: number;

  /**
   * @public
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * @public
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumRefFrames?: number;

  /**
   * @public
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   */
  ParControl?: H264ParControl;

  /**
   * @public
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * @public
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * @public
   * H.264 Profile.
   */
  Profile?: H264Profile;

  /**
   * @public
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
   * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
   * - STANDARD_QUALITY: Valid for any Rate control mode.
   */
  QualityLevel?: H264QualityLevel;

  /**
   * @public
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. You can set a target quality or you can let MediaLive determine the best quality. To set a target quality, enter values in the QVBR quality level field and the Max bitrate field. Enter values that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   * To let MediaLive decide, leave the QVBR quality level field empty, and in Max bitrate enter the maximum rate you want in the video. For more information, see the section called "Video - rate control mode" in the MediaLive user guide
   */
  QvbrQualityLevel?: number;

  /**
   * @public
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
  RateControlMode?: H264RateControlMode;

  /**
   * @public
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H264ScanType;

  /**
   * @public
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   */
  SceneChangeDetect?: H264SceneChangeDetect;

  /**
   * @public
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * @public
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.  If not set to zero, must be greater than 15.
   */
  Softness?: number;

  /**
   * @public
   * Spatial AQ makes adjustments within each frame based on spatial variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if spatial AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply spatial AQ using the specified strength. Disabled: MediaLive won't apply spatial AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply spatial AQ.
   */
  SpatialAq?: H264SpatialAq;

  /**
   * @public
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   */
  SubgopLength?: H264SubGopLength;

  /**
   * @public
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax;

  /**
   * @public
   * Temporal makes adjustments within each frame based on temporal variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if temporal AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply temporal AQ using the specified strength. Disabled: MediaLive won't apply temporal AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply temporal AQ.
   */
  TemporalAq?: H264TemporalAq;

  /**
   * @public
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H264TimecodeInsertionBehavior;

  /**
   * @public
   * Timecode burn-in settings
   */
  TimecodeBurninSettings?: TimecodeBurninSettings;
}

/**
 * @public
 * @enum
 */
export const H265AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type H265AdaptiveQuantization = (typeof H265AdaptiveQuantization)[keyof typeof H265AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265AlternativeTransferFunction = {
  INSERT: "INSERT",
  OMIT: "OMIT",
} as const;

/**
 * @public
 */
export type H265AlternativeTransferFunction =
  (typeof H265AlternativeTransferFunction)[keyof typeof H265AlternativeTransferFunction];

/**
 * @public
 * @enum
 */
export const H265ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;

/**
 * @public
 */
export type H265ColorMetadata = (typeof H265ColorMetadata)[keyof typeof H265ColorMetadata];

/**
 * @public
 * Dolby Vision81 Settings
 */
export interface DolbyVision81Settings {}

/**
 * @public
 * H265 Color Space Settings
 */
export interface H265ColorSpaceSettings {
  /**
   * @public
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * @public
   * Dolby Vision81 Settings
   */
  DolbyVision81Settings?: DolbyVision81Settings;

  /**
   * @public
   * Hdr10 Settings
   */
  Hdr10Settings?: Hdr10Settings;

  /**
   * @public
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * @public
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;
}

/**
 * @public
 * H265 Filter Settings
 */
export interface H265FilterSettings {
  /**
   * @public
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

/**
 * @public
 * @enum
 */
export const H265FlickerAq = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265FlickerAq = (typeof H265FlickerAq)[keyof typeof H265FlickerAq];

/**
 * @public
 * @enum
 */
export const H265GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type H265GopSizeUnits = (typeof H265GopSizeUnits)[keyof typeof H265GopSizeUnits];

/**
 * @public
 * @enum
 */
export const H265Level = {
  H265_LEVEL_1: "H265_LEVEL_1",
  H265_LEVEL_2: "H265_LEVEL_2",
  H265_LEVEL_2_1: "H265_LEVEL_2_1",
  H265_LEVEL_3: "H265_LEVEL_3",
  H265_LEVEL_3_1: "H265_LEVEL_3_1",
  H265_LEVEL_4: "H265_LEVEL_4",
  H265_LEVEL_4_1: "H265_LEVEL_4_1",
  H265_LEVEL_5: "H265_LEVEL_5",
  H265_LEVEL_5_1: "H265_LEVEL_5_1",
  H265_LEVEL_5_2: "H265_LEVEL_5_2",
  H265_LEVEL_6: "H265_LEVEL_6",
  H265_LEVEL_6_1: "H265_LEVEL_6_1",
  H265_LEVEL_6_2: "H265_LEVEL_6_2",
  H265_LEVEL_AUTO: "H265_LEVEL_AUTO",
} as const;

/**
 * @public
 */
export type H265Level = (typeof H265Level)[keyof typeof H265Level];

/**
 * @public
 * @enum
 */
export const H265LookAheadRateControl = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type H265LookAheadRateControl = (typeof H265LookAheadRateControl)[keyof typeof H265LookAheadRateControl];

/**
 * @public
 * @enum
 */
export const H265Profile = {
  MAIN: "MAIN",
  MAIN_10BIT: "MAIN_10BIT",
} as const;

/**
 * @public
 */
export type H265Profile = (typeof H265Profile)[keyof typeof H265Profile];

/**
 * @public
 * @enum
 */
export const H265RateControlMode = {
  CBR: "CBR",
  MULTIPLEX: "MULTIPLEX",
  QVBR: "QVBR",
} as const;

/**
 * @public
 */
export type H265RateControlMode = (typeof H265RateControlMode)[keyof typeof H265RateControlMode];

/**
 * @public
 * @enum
 */
export const H265ScanType = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;

/**
 * @public
 */
export type H265ScanType = (typeof H265ScanType)[keyof typeof H265ScanType];

/**
 * @public
 * @enum
 */
export const H265SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265SceneChangeDetect = (typeof H265SceneChangeDetect)[keyof typeof H265SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H265Tier = {
  HIGH: "HIGH",
  MAIN: "MAIN",
} as const;

/**
 * @public
 */
export type H265Tier = (typeof H265Tier)[keyof typeof H265Tier];

/**
 * @public
 * @enum
 */
export const H265TimecodeInsertionBehavior = {
  DISABLED: "DISABLED",
  PIC_TIMING_SEI: "PIC_TIMING_SEI",
} as const;

/**
 * @public
 */
export type H265TimecodeInsertionBehavior =
  (typeof H265TimecodeInsertionBehavior)[keyof typeof H265TimecodeInsertionBehavior];

/**
 * @public
 * H265 Settings
 */
export interface H265Settings {
  /**
   * @public
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H265AdaptiveQuantization;

  /**
   * @public
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling;

  /**
   * @public
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   */
  AlternativeTransferFunction?: H265AlternativeTransferFunction;

  /**
   * @public
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * @public
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * @public
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H265ColorMetadata;

  /**
   * @public
   * Color Space settings
   */
  ColorSpaceSettings?: H265ColorSpaceSettings;

  /**
   * @public
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H265FilterSettings;

  /**
   * @public
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd;

  /**
   * @public
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: H265FlickerAq;

  /**
   * @public
   * Framerate denominator.
   */
  FramerateDenominator: number | undefined;

  /**
   * @public
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator: number | undefined;

  /**
   * @public
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * @public
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * @public
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits;

  /**
   * @public
   * H.265 Level.
   */
  Level?: H265Level;

  /**
   * @public
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H265LookAheadRateControl;

  /**
   * @public
   * For QVBR: See the tooltip for Quality level
   */
  MaxBitrate?: number;

  /**
   * @public
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * @public
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * @public
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * @public
   * H.265 Profile.
   */
  Profile?: H265Profile;

  /**
   * @public
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   */
  QvbrQualityLevel?: number;

  /**
   * @public
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
  RateControlMode?: H265RateControlMode;

  /**
   * @public
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H265ScanType;

  /**
   * @public
   * Scene change detection.
   */
  SceneChangeDetect?: H265SceneChangeDetect;

  /**
   * @public
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * @public
   * H.265 Tier.
   */
  Tier?: H265Tier;

  /**
   * @public
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H265TimecodeInsertionBehavior;

  /**
   * @public
   * Timecode burn-in settings
   */
  TimecodeBurninSettings?: TimecodeBurninSettings;
}

/**
 * @public
 * @enum
 */
export const Mpeg2AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type Mpeg2AdaptiveQuantization = (typeof Mpeg2AdaptiveQuantization)[keyof typeof Mpeg2AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Mpeg2ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;

/**
 * @public
 */
export type Mpeg2ColorMetadata = (typeof Mpeg2ColorMetadata)[keyof typeof Mpeg2ColorMetadata];

/**
 * @public
 * @enum
 */
export const Mpeg2ColorSpace = {
  AUTO: "AUTO",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type Mpeg2ColorSpace = (typeof Mpeg2ColorSpace)[keyof typeof Mpeg2ColorSpace];

/**
 * @public
 * @enum
 */
export const Mpeg2DisplayRatio = {
  DISPLAYRATIO16X9: "DISPLAYRATIO16X9",
  DISPLAYRATIO4X3: "DISPLAYRATIO4X3",
} as const;

/**
 * @public
 */
export type Mpeg2DisplayRatio = (typeof Mpeg2DisplayRatio)[keyof typeof Mpeg2DisplayRatio];

/**
 * @public
 * Mpeg2 Filter Settings
 */
export interface Mpeg2FilterSettings {
  /**
   * @public
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

/**
 * @public
 * @enum
 */
export const Mpeg2GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type Mpeg2GopSizeUnits = (typeof Mpeg2GopSizeUnits)[keyof typeof Mpeg2GopSizeUnits];

/**
 * @public
 * @enum
 */
export const Mpeg2ScanType = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;

/**
 * @public
 */
export type Mpeg2ScanType = (typeof Mpeg2ScanType)[keyof typeof Mpeg2ScanType];

/**
 * @public
 * @enum
 */
export const Mpeg2SubGopLength = {
  DYNAMIC: "DYNAMIC",
  FIXED: "FIXED",
} as const;

/**
 * @public
 */
export type Mpeg2SubGopLength = (typeof Mpeg2SubGopLength)[keyof typeof Mpeg2SubGopLength];

/**
 * @public
 * @enum
 */
export const Mpeg2TimecodeInsertionBehavior = {
  DISABLED: "DISABLED",
  GOP_TIMECODE: "GOP_TIMECODE",
} as const;

/**
 * @public
 */
export type Mpeg2TimecodeInsertionBehavior =
  (typeof Mpeg2TimecodeInsertionBehavior)[keyof typeof Mpeg2TimecodeInsertionBehavior];

/**
 * @public
 * Mpeg2 Settings
 */
export interface Mpeg2Settings {
  /**
   * @public
   * Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization;

  /**
   * @public
   * Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.
   * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
   * FIXED: MediaLive will use the value you specify in fixedAFD.
   */
  AfdSignaling?: AfdSignaling;

  /**
   * @public
   * Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
   */
  ColorMetadata?: Mpeg2ColorMetadata;

  /**
   * @public
   * Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \"MediaLive Features - Video - color space\" in the MediaLive User Guide.
   * PASSTHROUGH: Keep the color space of the input content - do not convert it.
   * AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
   */
  ColorSpace?: Mpeg2ColorSpace;

  /**
   * @public
   * Sets the pixel aspect ratio for the encode.
   */
  DisplayAspectRatio?: Mpeg2DisplayRatio;

  /**
   * @public
   * Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied.
   * TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.
   * When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.
   * When the content is reasonably clean, the filter tends to decrease the bitrate.
   */
  FilterSettings?: Mpeg2FilterSettings;

  /**
   * @public
   * Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.
   */
  FixedAfd?: FixedAfd;

  /**
   * @public
   * description": "The framerate denominator. For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateDenominator: number | undefined;

  /**
   * @public
   * The framerate numerator. For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   */
  FramerateNumerator: number | undefined;

  /**
   * @public
   * MPEG2: default is open GOP.
   */
  GopClosedCadence?: number;

  /**
   * @public
   * Relates to the GOP structure. The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.
   */
  GopNumBFrames?: number;

  /**
   * @public
   * Relates to the GOP structure. The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default.
   * If gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.
   */
  GopSize?: number;

  /**
   * @public
   * Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
   */
  GopSizeUnits?: Mpeg2GopSizeUnits;

  /**
   * @public
   * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
   */
  ScanType?: Mpeg2ScanType;

  /**
   * @public
   * Relates to the GOP structure. If you do not know what GOP is, use the default.
   * FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.
   * DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
   */
  SubgopLength?: Mpeg2SubGopLength;

  /**
   * @public
   * Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on \"MediaLive Features - Timecode configuration\" in the MediaLive User Guide.
   * DISABLED: do not include timecodes.
   * GOP_TIMECODE: Include timecode metadata in the GOP header.
   */
  TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior;

  /**
   * @public
   * Timecode burn-in settings
   */
  TimecodeBurninSettings?: TimecodeBurninSettings;
}

/**
 * @public
 * Video Codec Settings
 */
export interface VideoCodecSettings {
  /**
   * @public
   * Frame Capture Settings
   */
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * @public
   * H264 Settings
   */
  H264Settings?: H264Settings;

  /**
   * @public
   * H265 Settings
   */
  H265Settings?: H265Settings;

  /**
   * @public
   * Mpeg2 Settings
   */
  Mpeg2Settings?: Mpeg2Settings;
}

/**
 * @public
 * @enum
 */
export const VideoDescriptionRespondToAfd = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
  RESPOND: "RESPOND",
} as const;

/**
 * @public
 */
export type VideoDescriptionRespondToAfd =
  (typeof VideoDescriptionRespondToAfd)[keyof typeof VideoDescriptionRespondToAfd];

/**
 * @public
 * @enum
 */
export const VideoDescriptionScalingBehavior = {
  DEFAULT: "DEFAULT",
  STRETCH_TO_OUTPUT: "STRETCH_TO_OUTPUT",
} as const;

/**
 * @public
 */
export type VideoDescriptionScalingBehavior =
  (typeof VideoDescriptionScalingBehavior)[keyof typeof VideoDescriptionScalingBehavior];

/**
 * @public
 * Video settings for this stream.
 */
export interface VideoDescription {
  /**
   * @public
   * Video codec settings.
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * @public
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Height?: number;

  /**
   * @public
   * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * @public
   * Indicates how MediaLive will respond to the AFD values that might be in the input video. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose PASSTHROUGH.
   * RESPOND: MediaLive clips the input video using a formula that uses the AFD values (configured in afdSignaling ), the input display aspect ratio, and the output display aspect ratio. MediaLive also includes the AFD values in the output, unless the codec for this encode is FRAME_CAPTURE.
   * PASSTHROUGH: MediaLive ignores the AFD values and does not clip the video. But MediaLive does include the values in the output.
   * NONE: MediaLive does not clip the input video and does not include the AFD values in the output
   */
  RespondToAfd?: VideoDescriptionRespondToAfd;

  /**
   * @public
   * STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   */
  ScalingBehavior?: VideoDescriptionScalingBehavior;

  /**
   * @public
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   */
  Sharpness?: number;

  /**
   * @public
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Width?: number;
}

/**
 * @public
 * @enum
 */
export const AcceptHeader = {
  image_jpeg: "image/jpeg",
} as const;

/**
 * @public
 */
export type AcceptHeader = (typeof AcceptHeader)[keyof typeof AcceptHeader];

/**
 * @public
 * Placeholder documentation for AcceptInputDeviceTransferRequest
 */
export interface AcceptInputDeviceTransferRequest {
  /**
   * @public
   * The unique ID of the input device to accept. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for AcceptInputDeviceTransferResponse
 */
export interface AcceptInputDeviceTransferResponse {}

/**
 * @public
 * Placeholder documentation for BadGatewayException
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * Placeholder documentation for BadRequestException
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * Placeholder documentation for ConflictException
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * Placeholder documentation for ForbiddenException
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * Placeholder documentation for GatewayTimeoutException
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name: "GatewayTimeoutException" = "GatewayTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * Placeholder documentation for InternalServerErrorException
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * Placeholder documentation for NotFoundException
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * Placeholder documentation for TooManyRequestsException
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * Placeholder documentation for UnprocessableEntityException
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message.
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * Placeholder documentation for AccountConfiguration
 */
export interface AccountConfiguration {
  /**
   * @public
   * Specifies the KMS key to use for all features that use key encryption. Specify the ARN of a KMS key that you have created. Or leave blank to use the key that MediaLive creates and manages for you.
   */
  KmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const AvailBlankingState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AvailBlankingState = (typeof AvailBlankingState)[keyof typeof AvailBlankingState];

/**
 * @public
 * Avail Blanking
 */
export interface AvailBlanking {
  /**
   * @public
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: InputLocation;

  /**
   * @public
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   */
  State?: AvailBlankingState;
}

/**
 * @public
 * Esam
 */
export interface Esam {
  /**
   * @public
   * Sent as acquisitionPointIdentity to identify the MediaLive channel to the POIS.
   */
  AcquisitionPointId: string | undefined;

  /**
   * @public
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * @public
   * Documentation update needed
   */
  PasswordParam?: string;

  /**
   * @public
   * The URL of the signal conditioner endpoint on the Placement Opportunity Information System (POIS). MediaLive sends SignalProcessingEvents here when SCTE-35 messages are read.
   */
  PoisEndpoint: string | undefined;

  /**
   * @public
   * Documentation update needed
   */
  Username?: string;

  /**
   * @public
   * Optional data sent as zoneIdentity to identify the MediaLive channel to the POIS.
   */
  ZoneIdentity?: string;
}

/**
 * @public
 * @enum
 */
export const Scte35SpliceInsertNoRegionalBlackoutBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;

/**
 * @public
 */
export type Scte35SpliceInsertNoRegionalBlackoutBehavior =
  (typeof Scte35SpliceInsertNoRegionalBlackoutBehavior)[keyof typeof Scte35SpliceInsertNoRegionalBlackoutBehavior];

/**
 * @public
 * @enum
 */
export const Scte35SpliceInsertWebDeliveryAllowedBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;

/**
 * @public
 */
export type Scte35SpliceInsertWebDeliveryAllowedBehavior =
  (typeof Scte35SpliceInsertWebDeliveryAllowedBehavior)[keyof typeof Scte35SpliceInsertWebDeliveryAllowedBehavior];

/**
 * @public
 * Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.
 */
export interface Scte35SpliceInsert {
  /**
   * @public
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * @public
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;

  /**
   * @public
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior;
}

/**
 * @public
 * @enum
 */
export const Scte35AposNoRegionalBlackoutBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;

/**
 * @public
 */
export type Scte35AposNoRegionalBlackoutBehavior =
  (typeof Scte35AposNoRegionalBlackoutBehavior)[keyof typeof Scte35AposNoRegionalBlackoutBehavior];

/**
 * @public
 * @enum
 */
export const Scte35AposWebDeliveryAllowedBehavior = {
  FOLLOW: "FOLLOW",
  IGNORE: "IGNORE",
} as const;

/**
 * @public
 */
export type Scte35AposWebDeliveryAllowedBehavior =
  (typeof Scte35AposWebDeliveryAllowedBehavior)[keyof typeof Scte35AposWebDeliveryAllowedBehavior];

/**
 * @public
 * Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.
 */
export interface Scte35TimeSignalApos {
  /**
   * @public
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * @public
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior;

  /**
   * @public
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior;
}

/**
 * @public
 * Avail Settings
 */
export interface AvailSettings {
  /**
   * @public
   * Esam
   */
  Esam?: Esam;

  /**
   * @public
   * Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.
   */
  Scte35SpliceInsert?: Scte35SpliceInsert;

  /**
   * @public
   * Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.
   */
  Scte35TimeSignalApos?: Scte35TimeSignalApos;
}

/**
 * @public
 * Avail Configuration
 */
export interface AvailConfiguration {
  /**
   * @public
   * Controls how SCTE-35 messages create cues. Splice Insert mode treats all segmentation signals traditionally. With Time Signal APOS mode only Time Signal Placement Opportunity and Break messages create segment breaks. With ESAM mode, signals are forwarded to an ESAM server for possible update.
   */
  AvailSettings?: AvailSettings;
}

/**
 * @public
 * A request to delete resources
 */
export interface BatchDeleteRequest {
  /**
   * @public
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * @public
   * List of input IDs
   */
  InputIds?: string[];

  /**
   * @public
   * List of input security group IDs
   */
  InputSecurityGroupIds?: string[];

  /**
   * @public
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

/**
 * @public
 * Placeholder documentation for BatchDeleteResponse
 */
export interface BatchDeleteResponse {
  /**
   * @public
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * @public
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

/**
 * @public
 * A list of schedule actions to create (in a request) or that have been created (in a response).
 */
export interface BatchScheduleActionCreateRequest {
  /**
   * @public
   * A list of schedule actions to create.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

/**
 * @public
 * List of actions that have been created in the schedule.
 */
export interface BatchScheduleActionCreateResult {
  /**
   * @public
   * List of actions that have been created in the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

/**
 * @public
 * A list of schedule actions to delete.
 */
export interface BatchScheduleActionDeleteRequest {
  /**
   * @public
   * A list of schedule actions to delete.
   */
  ActionNames: string[] | undefined;
}

/**
 * @public
 * List of actions that have been deleted from the schedule.
 */
export interface BatchScheduleActionDeleteResult {
  /**
   * @public
   * List of actions that have been deleted from the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

/**
 * @public
 * A request to start resources
 */
export interface BatchStartRequest {
  /**
   * @public
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * @public
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

/**
 * @public
 * Placeholder documentation for BatchStartResponse
 */
export interface BatchStartResponse {
  /**
   * @public
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * @public
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

/**
 * @public
 * A request to stop resources
 */
export interface BatchStopRequest {
  /**
   * @public
   * List of channel IDs
   */
  ChannelIds?: string[];

  /**
   * @public
   * List of multiplex IDs
   */
  MultiplexIds?: string[];
}

/**
 * @public
 * Placeholder documentation for BatchStopResponse
 */
export interface BatchStopResponse {
  /**
   * @public
   * List of failed operations
   */
  Failed?: BatchFailedResultModel[];

  /**
   * @public
   * List of successful operations
   */
  Successful?: BatchSuccessfulResultModel[];
}

/**
 * @public
 * List of actions to create and list of actions to delete.
 */
export interface BatchUpdateScheduleRequest {
  /**
   * @public
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * @public
   * Schedule actions to create in the schedule.
   */
  Creates?: BatchScheduleActionCreateRequest;

  /**
   * @public
   * Schedule actions to delete from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteRequest;
}

/**
 * @public
 * Placeholder documentation for BatchUpdateScheduleResponse
 */
export interface BatchUpdateScheduleResponse {
  /**
   * @public
   * Schedule actions created in the schedule.
   */
  Creates?: BatchScheduleActionCreateResult;

  /**
   * @public
   * Schedule actions deleted from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteResult;
}

/**
 * @public
 * @enum
 */
export const BlackoutSlateNetworkEndBlackout = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type BlackoutSlateNetworkEndBlackout =
  (typeof BlackoutSlateNetworkEndBlackout)[keyof typeof BlackoutSlateNetworkEndBlackout];

/**
 * @public
 * @enum
 */
export const BlackoutSlateState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type BlackoutSlateState = (typeof BlackoutSlateState)[keyof typeof BlackoutSlateState];

/**
 * @public
 * Blackout Slate
 */
export interface BlackoutSlate {
  /**
   * @public
   * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  BlackoutSlateImage?: InputLocation;

  /**
   * @public
   * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
   */
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout;

  /**
   * @public
   * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
   */
  NetworkEndBlackoutImage?: InputLocation;

  /**
   * @public
   * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   */
  NetworkId?: string;

  /**
   * @public
   * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
   */
  State?: BlackoutSlateState;
}

/**
 * @public
 * Placeholder documentation for CancelInputDeviceTransferRequest
 */
export interface CancelInputDeviceTransferRequest {
  /**
   * @public
   * The unique ID of the input device to cancel. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for CancelInputDeviceTransferResponse
 */
export interface CancelInputDeviceTransferResponse {}

/**
 * @public
 * @enum
 */
export const FeatureActivationsInputPrepareScheduleActions = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type FeatureActivationsInputPrepareScheduleActions =
  (typeof FeatureActivationsInputPrepareScheduleActions)[keyof typeof FeatureActivationsInputPrepareScheduleActions];

/**
 * @public
 * Feature Activations
 */
export interface FeatureActivations {
  /**
   * @public
   * Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled.
   * If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
   */
  InputPrepareScheduleActions?: FeatureActivationsInputPrepareScheduleActions;
}

/**
 * @public
 * @enum
 */
export const GlobalConfigurationInputEndAction = {
  NONE: "NONE",
  SWITCH_AND_LOOP_INPUTS: "SWITCH_AND_LOOP_INPUTS",
} as const;

/**
 * @public
 */
export type GlobalConfigurationInputEndAction =
  (typeof GlobalConfigurationInputEndAction)[keyof typeof GlobalConfigurationInputEndAction];

/**
 * @public
 * @enum
 */
export const InputLossImageType = {
  COLOR: "COLOR",
  SLATE: "SLATE",
} as const;

/**
 * @public
 */
export type InputLossImageType = (typeof InputLossImageType)[keyof typeof InputLossImageType];

/**
 * @public
 * Input Loss Behavior
 */
export interface InputLossBehavior {
  /**
   * @public
   * Documentation update needed
   */
  BlackFrameMsec?: number;

  /**
   * @public
   * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
   */
  InputLossImageColor?: string;

  /**
   * @public
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   */
  InputLossImageSlate?: InputLocation;

  /**
   * @public
   * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
   */
  InputLossImageType?: InputLossImageType;

  /**
   * @public
   * Documentation update needed
   */
  RepeatFrameMsec?: number;
}

/**
 * @public
 * @enum
 */
export const GlobalConfigurationOutputLockingMode = {
  EPOCH_LOCKING: "EPOCH_LOCKING",
  PIPELINE_LOCKING: "PIPELINE_LOCKING",
} as const;

/**
 * @public
 */
export type GlobalConfigurationOutputLockingMode =
  (typeof GlobalConfigurationOutputLockingMode)[keyof typeof GlobalConfigurationOutputLockingMode];

/**
 * @public
 * Epoch Locking Settings
 */
export interface EpochLockingSettings {
  /**
   * @public
   * Optional. Enter a value here to use a custom epoch, instead of the standard epoch (which started at 1970-01-01T00:00:00 UTC). Specify the start time of the custom epoch, in YYYY-MM-DDTHH:MM:SS in UTC. The time must be 2000-01-01T00:00:00 or later. Always set the MM:SS portion to 00:00.
   */
  CustomEpoch?: string;

  /**
   * @public
   * Optional. Enter a time for the jam sync. The default is midnight UTC. When epoch locking is enabled, MediaLive performs a daily jam sync on every output encode to ensure timecodes don’t diverge from the wall clock. The jam sync applies only to encodes with frame rate of 29.97 or 59.94 FPS. To override, enter a time in HH:MM:SS in UTC. Always set the MM:SS portion to 00:00.
   */
  JamSyncTime?: string;
}

/**
 * @public
 * Pipeline Locking Settings
 */
export interface PipelineLockingSettings {}

/**
 * @public
 * Output Locking Settings
 */
export interface OutputLockingSettings {
  /**
   * @public
   * Epoch Locking Settings
   */
  EpochLockingSettings?: EpochLockingSettings;

  /**
   * @public
   * Pipeline Locking Settings
   */
  PipelineLockingSettings?: PipelineLockingSettings;
}

/**
 * @public
 * @enum
 */
export const GlobalConfigurationOutputTimingSource = {
  INPUT_CLOCK: "INPUT_CLOCK",
  SYSTEM_CLOCK: "SYSTEM_CLOCK",
} as const;

/**
 * @public
 */
export type GlobalConfigurationOutputTimingSource =
  (typeof GlobalConfigurationOutputTimingSource)[keyof typeof GlobalConfigurationOutputTimingSource];

/**
 * @public
 * @enum
 */
export const GlobalConfigurationLowFramerateInputs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type GlobalConfigurationLowFramerateInputs =
  (typeof GlobalConfigurationLowFramerateInputs)[keyof typeof GlobalConfigurationLowFramerateInputs];

/**
 * @public
 * Global Configuration
 */
export interface GlobalConfiguration {
  /**
   * @public
   * Value to set the initial audio gain for the Live Event.
   */
  InitialAudioGain?: number;

  /**
   * @public
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   */
  InputEndAction?: GlobalConfigurationInputEndAction;

  /**
   * @public
   * Settings for system actions when input is lost.
   */
  InputLossBehavior?: InputLossBehavior;

  /**
   * @public
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode;

  /**
   * @public
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource;

  /**
   * @public
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs;

  /**
   * @public
   * Advanced output locking settings
   */
  OutputLockingSettings?: OutputLockingSettings;
}

/**
 * @public
 * @enum
 */
export const MotionGraphicsInsertion = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MotionGraphicsInsertion = (typeof MotionGraphicsInsertion)[keyof typeof MotionGraphicsInsertion];

/**
 * @public
 * Html Motion Graphics Settings
 */
export interface HtmlMotionGraphicsSettings {}

/**
 * @public
 * Motion Graphics Settings
 */
export interface MotionGraphicsSettings {
  /**
   * @public
   * Html Motion Graphics Settings
   */
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
}

/**
 * @public
 * Motion Graphics Configuration
 */
export interface MotionGraphicsConfiguration {
  /**
   * @public
   * Motion Graphics Insertion
   */
  MotionGraphicsInsertion?: MotionGraphicsInsertion;

  /**
   * @public
   * Motion Graphics Settings
   */
  MotionGraphicsSettings: MotionGraphicsSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const NielsenPcmToId3TaggingState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type NielsenPcmToId3TaggingState =
  (typeof NielsenPcmToId3TaggingState)[keyof typeof NielsenPcmToId3TaggingState];

/**
 * @public
 * Nielsen Configuration
 */
export interface NielsenConfiguration {
  /**
   * @public
   * Enter the Distributor ID assigned to your organization by Nielsen.
   */
  DistributorId?: string;

  /**
   * @public
   * Enables Nielsen PCM to ID3 tagging
   */
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState;
}

/**
 * @public
 * @enum
 */
export const ThumbnailState = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type ThumbnailState = (typeof ThumbnailState)[keyof typeof ThumbnailState];

/**
 * @public
 * Thumbnail Configuration
 */
export interface ThumbnailConfiguration {
  /**
   * @public
   * Whether Thumbnail is enabled.
   */
  State: ThumbnailState | undefined;
}

/**
 * @public
 * @enum
 */
export const TimecodeConfigSource = {
  EMBEDDED: "EMBEDDED",
  SYSTEMCLOCK: "SYSTEMCLOCK",
  ZEROBASED: "ZEROBASED",
} as const;

/**
 * @public
 */
export type TimecodeConfigSource = (typeof TimecodeConfigSource)[keyof typeof TimecodeConfigSource];

/**
 * @public
 * Timecode Config
 */
export interface TimecodeConfig {
  /**
   * @public
   * Identifies the source for the timecode that will be associated with the events outputs.
   * -Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
   * -System Clock (systemclock): Use the UTC time.
   * -Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
   */
  Source: TimecodeConfigSource | undefined;

  /**
   * @public
   * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
   */
  SyncThreshold?: number;
}

/**
 * @public
 * Encoder Settings
 */
export interface EncoderSettings {
  /**
   * @public
   * Placeholder documentation for __listOfAudioDescription
   */
  AudioDescriptions: AudioDescription[] | undefined;

  /**
   * @public
   * Settings for ad avail blanking.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * @public
   * Event-wide configuration settings for ad avail insertion.
   */
  AvailConfiguration?: AvailConfiguration;

  /**
   * @public
   * Settings for blackout slate.
   */
  BlackoutSlate?: BlackoutSlate;

  /**
   * @public
   * Settings for caption decriptions
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * @public
   * Feature Activations
   */
  FeatureActivations?: FeatureActivations;

  /**
   * @public
   * Configuration settings that apply to the event as a whole.
   */
  GlobalConfiguration?: GlobalConfiguration;

  /**
   * @public
   * Settings for motion graphics.
   */
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration;

  /**
   * @public
   * Nielsen configuration settings.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * @public
   * Placeholder documentation for __listOfOutputGroup
   */
  OutputGroups: OutputGroup[] | undefined;

  /**
   * @public
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig: TimecodeConfig | undefined;

  /**
   * @public
   * Placeholder documentation for __listOfVideoDescription
   */
  VideoDescriptions: VideoDescription[] | undefined;

  /**
   * @public
   * Thumbnail configuration settings.
   */
  ThumbnailConfiguration?: ThumbnailConfiguration;
}

/**
 * @public
 * Placeholder documentation for Channel
 */
export interface Channel {
  /**
   * @public
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * @public
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * @public
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass;

  /**
   * @public
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * @public
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @public
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * @public
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * @public
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * @public
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * @public
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel;

  /**
   * @public
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * @public
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * @public
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * @public
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * @public
 * A request to claim an AWS Elemental device that you have purchased from a third-party vendor.
 */
export interface ClaimDeviceRequest {
  /**
   * @public
   * The id of the device you want to claim.
   */
  Id?: string;
}

/**
 * @public
 * Placeholder documentation for ClaimDeviceResponse
 */
export interface ClaimDeviceResponse {}

/**
 * @public
 * @enum
 */
export const ContentType = {
  image_jpeg: "image/jpeg",
} as const;

/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * Placeholder documentation for MaintenanceCreateSettings
 */
export interface MaintenanceCreateSettings {
  /**
   * @public
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * @public
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   */
  MaintenanceStartTime?: string;
}

/**
 * @public
 * The properties for a private VPC Output
 * When this property is specified, the output egress addresses will be created in a user specified VPC
 */
export interface VpcOutputSettings {
  /**
   * @public
   * List of public address allocation ids to associate with ENIs that will be created in Output VPC.
   * Must specify one for SINGLE_PIPELINE, two for STANDARD channels
   */
  PublicAddressAllocationIds?: string[];

  /**
   * @public
   * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.
   * If none are specified then the VPC default security group will be used
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 * A request to create a channel
 */
export interface CreateChannelRequest {
  /**
   * @public
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * @public
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass;

  /**
   * @public
   * Placeholder documentation for __listOfOutputDestination
   */
  Destinations?: OutputDestination[];

  /**
   * @public
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * @public
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * @public
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * @public
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel;

  /**
   * @public
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceCreateSettings;

  /**
   * @public
   * Name of channel.
   */
  Name?: string;

  /**
   * @public
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   */
  RequestId?: string;

  /**
   * @public
   * @deprecated
   *
   * Deprecated field that's only usable by whitelisted customers.
   */
  Reserved?: string;

  /**
   * @public
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   */
  RoleArn?: string;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Settings for the VPC outputs
   */
  Vpc?: VpcOutputSettings;
}

/**
 * @public
 * Placeholder documentation for CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * @public
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

/**
 * @public
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 */
export interface InputVpcRequest {
  /**
   * @public
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 * The name of the input
 */
export interface CreateInputRequest {
  /**
   * @public
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * @public
   * Settings for the devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * @public
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * @public
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * @public
   * Name of the input.
   */
  Name?: string;

  /**
   * @public
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * @public
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType;

  /**
   * @public
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   */
  Vpc?: InputVpcRequest;
}

/**
 * @public
 * Placeholder documentation for CreateInputResponse
 */
export interface CreateInputResponse {
  /**
   * @public
   * Placeholder documentation for Input
   */
  Input?: Input;
}

/**
 * @public
 * The IPv4 CIDRs to whitelist for this Input Security Group
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

/**
 * @public
 * Placeholder documentation for CreateInputSecurityGroupResponse
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * @public
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

/**
 * @public
 * Contains configuration for a Multiplex event
 */
export interface MultiplexSettings {
  /**
   * @public
   * Maximum video buffer delay in milliseconds.
   */
  MaximumVideoBufferDelayMilliseconds?: number;

  /**
   * @public
   * Transport stream bit rate.
   */
  TransportStreamBitrate: number | undefined;

  /**
   * @public
   * Transport stream ID.
   */
  TransportStreamId: number | undefined;

  /**
   * @public
   * Transport stream reserved bit rate.
   */
  TransportStreamReservedBitrate?: number;
}

/**
 * @public
 * A request to create a multiplex.
 */
export interface CreateMultiplexRequest {
  /**
   * @public
   * A list of availability zones for the multiplex. You must specify exactly two.
   */
  AvailabilityZones: string[] | undefined;

  /**
   * @public
   * Configuration for a multiplex event.
   */
  MultiplexSettings: MultiplexSettings | undefined;

  /**
   * @public
   * Name of multiplex.
   */
  Name: string | undefined;

  /**
   * @public
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * The multiplex object.
 */
export interface Multiplex {
  /**
   * @public
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * @public
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * @public
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * @public
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * @public
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * @public
   * The current state of the multiplex.
   */
  State?: MultiplexState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for CreateMultiplexResponse
 */
export interface CreateMultiplexResponse {
  /**
   * @public
   * The newly created multiplex.
   */
  Multiplex?: Multiplex;
}

/**
 * @public
 * @enum
 */
export const PreferredChannelPipeline = {
  CURRENTLY_ACTIVE: "CURRENTLY_ACTIVE",
  PIPELINE_0: "PIPELINE_0",
  PIPELINE_1: "PIPELINE_1",
} as const;

/**
 * @public
 */
export type PreferredChannelPipeline = (typeof PreferredChannelPipeline)[keyof typeof PreferredChannelPipeline];

/**
 * @public
 * Transport stream service descriptor configuration for the Multiplex program.
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * @public
   * Name of the provider.
   */
  ProviderName: string | undefined;

  /**
   * @public
   * Name of the service.
   */
  ServiceName: string | undefined;
}

/**
 * @public
 * Statmux rate control settings
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * @public
   * Maximum statmux bitrate.
   */
  MaximumBitrate?: number;

  /**
   * @public
   * Minimum statmux bitrate.
   */
  MinimumBitrate?: number;

  /**
   * @public
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   */
  Priority?: number;
}

/**
 * @public
 * The video configuration for each program in a multiplex.
 */
export interface MultiplexVideoSettings {
  /**
   * @public
   * The constant bitrate configuration for the video encode.
   * When this field is defined, StatmuxSettings must be undefined.
   */
  ConstantBitrate?: number;

  /**
   * @public
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings;
}

/**
 * @public
 * Multiplex Program settings configuration.
 */
export interface MultiplexProgramSettings {
  /**
   * @public
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   */
  PreferredChannelPipeline?: PreferredChannelPipeline;

  /**
   * @public
   * Unique program number.
   */
  ProgramNumber: number | undefined;

  /**
   * @public
   * Transport stream service descriptor configuration for the Multiplex program.
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * @public
   * Program video settings configuration.
   */
  VideoSettings?: MultiplexVideoSettings;
}

/**
 * @public
 * A request to create a program in a multiplex.
 */
export interface CreateMultiplexProgramRequest {
  /**
   * @public
   * ID of the multiplex where the program is to be created.
   */
  MultiplexId: string | undefined;

  /**
   * @public
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings: MultiplexProgramSettings | undefined;

  /**
   * @public
   * Name of multiplex program.
   */
  ProgramName: string | undefined;

  /**
   * @public
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;
}

/**
 * @public
 * Packet identifiers map for a given Multiplex program.
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * @public
   * Placeholder documentation for __listOf__integer
   */
  AudioPids?: number[];

  /**
   * @public
   * Placeholder documentation for __listOf__integer
   */
  DvbSubPids?: number[];

  /**
   * @public
   * Placeholder documentation for __integer
   */
  DvbTeletextPid?: number;

  /**
   * @public
   * Placeholder documentation for __integer
   */
  EtvPlatformPid?: number;

  /**
   * @public
   * Placeholder documentation for __integer
   */
  EtvSignalPid?: number;

  /**
   * @public
   * Placeholder documentation for __listOf__integer
   */
  KlvDataPids?: number[];

  /**
   * @public
   * Placeholder documentation for __integer
   */
  PcrPid?: number;

  /**
   * @public
   * Placeholder documentation for __integer
   */
  PmtPid?: number;

  /**
   * @public
   * Placeholder documentation for __integer
   */
  PrivateMetadataPid?: number;

  /**
   * @public
   * Placeholder documentation for __listOf__integer
   */
  Scte27Pids?: number[];

  /**
   * @public
   * Placeholder documentation for __integer
   */
  Scte35Pid?: number;

  /**
   * @public
   * Placeholder documentation for __integer
   */
  TimedMetadataPid?: number;

  /**
   * @public
   * Placeholder documentation for __integer
   */
  VideoPid?: number;
}

/**
 * @public
 * The multiplex program object.
 */
export interface MultiplexProgram {
  /**
   * @public
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * @public
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @public
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * @public
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * @public
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

/**
 * @public
 * Placeholder documentation for CreateMultiplexProgramResponse
 */
export interface CreateMultiplexProgramResponse {
  /**
   * @public
   * The newly created multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

/**
 * @public
 * A request to create a partner input
 */
export interface CreatePartnerInputRequest {
  /**
   * @public
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * @public
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for CreatePartnerInputResponse
 */
export interface CreatePartnerInputResponse {
  /**
   * @public
   * Placeholder documentation for Input
   */
  Input?: Input;
}

/**
 * @public
 * Placeholder documentation for CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * @public
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * Placeholder documentation for Tags
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * @public
   * Unique ID of the channel.
   */
  ChannelId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DeleteChannelResponse
 */
export interface DeleteChannelResponse {
  /**
   * @public
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * @public
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * @public
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass;

  /**
   * @public
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * @public
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @public
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * @public
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * @public
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * @public
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * @public
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel;

  /**
   * @public
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * @public
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * @public
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * @public
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * @public
 * Placeholder documentation for DeleteInputRequest
 */
export interface DeleteInputRequest {
  /**
   * @public
   * Unique ID of the input
   */
  InputId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DeleteInputResponse
 */
export interface DeleteInputResponse {}

/**
 * @public
 * Placeholder documentation for DeleteInputSecurityGroupRequest
 */
export interface DeleteInputSecurityGroupRequest {
  /**
   * @public
   * The Input Security Group to delete
   */
  InputSecurityGroupId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DeleteInputSecurityGroupResponse
 */
export interface DeleteInputSecurityGroupResponse {}

/**
 * @public
 * Placeholder documentation for DeleteMultiplexRequest
 */
export interface DeleteMultiplexRequest {
  /**
   * @public
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DeleteMultiplexResponse
 */
export interface DeleteMultiplexResponse {
  /**
   * @public
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * @public
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * @public
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * @public
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * @public
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * @public
   * The current state of the multiplex.
   */
  State?: MultiplexState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for DeleteMultiplexProgramRequest
 */
export interface DeleteMultiplexProgramRequest {
  /**
   * @public
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * @public
   * The multiplex program name.
   */
  ProgramName: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DeleteMultiplexProgramResponse
 */
export interface DeleteMultiplexProgramResponse {
  /**
   * @public
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * @public
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @public
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * @public
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * @public
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

/**
 * @public
 * Placeholder documentation for DeleteReservationRequest
 */
export interface DeleteReservationRequest {
  /**
   * @public
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DeleteReservationResponse
 */
export interface DeleteReservationResponse {
  /**
   * @public
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * @public
   * Number of reserved resources
   */
  Count?: number;

  /**
   * @public
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * @public
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * @public
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * @public
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * @public
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * @public
   * User specified reservation name
   */
  Name?: string;

  /**
   * @public
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * @public
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * @public
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType;

  /**
   * @public
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * @public
   * Renewal settings for the reservation
   */
  RenewalSettings?: RenewalSettings;

  /**
   * @public
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * @public
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * @public
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * @public
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState;

  /**
   * @public
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

/**
 * @public
 * Placeholder documentation for DeleteScheduleRequest
 */
export interface DeleteScheduleRequest {
  /**
   * @public
   * Id of the channel whose schedule is being deleted.
   */
  ChannelId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DeleteScheduleResponse
 */
export interface DeleteScheduleResponse {}

/**
 * @public
 * Placeholder documentation for DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * @public
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeAccountConfigurationRequest
 */
export interface DescribeAccountConfigurationRequest {}

/**
 * @public
 * Placeholder documentation for DescribeAccountConfigurationResponse
 */
export interface DescribeAccountConfigurationResponse {
  /**
   * @public
   * Placeholder documentation for AccountConfiguration
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * @public
 * Placeholder documentation for DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * @public
   * channel ID
   */
  ChannelId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * @public
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * @public
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * @public
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass;

  /**
   * @public
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * @public
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @public
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * @public
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * @public
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * @public
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * @public
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel;

  /**
   * @public
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * @public
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * @public
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * @public
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * @public
 * Placeholder documentation for DescribeInputRequest
 */
export interface DescribeInputRequest {
  /**
   * @public
   * Unique ID of the input
   */
  InputId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeInputResponse
 */
export interface DescribeInputResponse {
  /**
   * @public
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * @public
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * @public
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * @public
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * @public
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass;

  /**
   * @public
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * @public
   * A list of IDs for all Inputs which are partners of this one.
   */
  InputPartnerIds?: string[];

  /**
   * @public
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   */
  InputSourceType?: InputSourceType;

  /**
   * @public
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * @public
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * @public
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];

  /**
   * @public
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * @public
   * Placeholder documentation for InputState
   */
  State?: InputState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType;
}

/**
 * @public
 * Placeholder documentation for DescribeInputDeviceRequest
 */
export interface DescribeInputDeviceRequest {
  /**
   * @public
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeInputDeviceResponse
 */
export interface DescribeInputDeviceResponse {
  /**
   * @public
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * @public
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState;

  /**
   * @public
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState;

  /**
   * @public
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus;

  /**
   * @public
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * @public
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * @public
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * @public
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * @public
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * @public
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * @public
   * The type of the input device.
   */
  Type?: InputDeviceType;

  /**
   * @public
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * The Availability Zone associated with this input device.
   */
  AvailabilityZone?: string;

  /**
   * @public
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   */
  MedialiveInputArns?: string[];

  /**
   * @public
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   */
  OutputType?: InputDeviceOutputType;
}

/**
 * @public
 * Placeholder documentation for DescribeInputDeviceThumbnailRequest
 */
export interface DescribeInputDeviceThumbnailRequest {
  /**
   * @public
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * @public
   * The HTTP Accept header. Indicates the requested type for the thumbnail.
   */
  Accept: AcceptHeader | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeInputDeviceThumbnailResponse
 */
export interface DescribeInputDeviceThumbnailResponse {
  /**
   * @public
   * The binary data for the thumbnail that the Link device has most recently sent to MediaLive.
   */
  Body?: StreamingBlobTypes;

  /**
   * @public
   * Specifies the media type of the thumbnail.
   */
  ContentType?: ContentType;

  /**
   * @public
   * The length of the content.
   */
  ContentLength?: number;

  /**
   * @public
   * The unique, cacheable version of this thumbnail.
   */
  ETag?: string;

  /**
   * @public
   * The date and time the thumbnail was last updated at the device.
   */
  LastModified?: Date;
}

/**
 * @public
 * Placeholder documentation for DescribeInputSecurityGroupRequest
 */
export interface DescribeInputSecurityGroupRequest {
  /**
   * @public
   * The id of the Input Security Group to describe
   */
  InputSecurityGroupId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeInputSecurityGroupResponse
 */
export interface DescribeInputSecurityGroupResponse {
  /**
   * @public
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * @public
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * @public
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * @public
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];
}

/**
 * @public
 * Placeholder documentation for DescribeMultiplexRequest
 */
export interface DescribeMultiplexRequest {
  /**
   * @public
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeMultiplexResponse
 */
export interface DescribeMultiplexResponse {
  /**
   * @public
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * @public
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * @public
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * @public
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * @public
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * @public
   * The current state of the multiplex.
   */
  State?: MultiplexState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for DescribeMultiplexProgramRequest
 */
export interface DescribeMultiplexProgramRequest {
  /**
   * @public
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * @public
   * The name of the program.
   */
  ProgramName: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeMultiplexProgramResponse
 */
export interface DescribeMultiplexProgramResponse {
  /**
   * @public
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * @public
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @public
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * @public
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * @public
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

/**
 * @public
 * Placeholder documentation for DescribeOfferingRequest
 */
export interface DescribeOfferingRequest {
  /**
   * @public
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeOfferingResponse
 */
export interface DescribeOfferingResponse {
  /**
   * @public
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * @public
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * @public
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * @public
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * @public
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * @public
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * @public
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * @public
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType;

  /**
   * @public
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * @public
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * @public
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

/**
 * @public
 * Placeholder documentation for DescribeReservationRequest
 */
export interface DescribeReservationRequest {
  /**
   * @public
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeReservationResponse
 */
export interface DescribeReservationResponse {
  /**
   * @public
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * @public
   * Number of reserved resources
   */
  Count?: number;

  /**
   * @public
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * @public
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * @public
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * @public
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * @public
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * @public
   * User specified reservation name
   */
  Name?: string;

  /**
   * @public
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * @public
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * @public
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType;

  /**
   * @public
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * @public
   * Renewal settings for the reservation
   */
  RenewalSettings?: RenewalSettings;

  /**
   * @public
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * @public
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * @public
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * @public
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState;

  /**
   * @public
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

/**
 * @public
 * Placeholder documentation for DescribeScheduleRequest
 */
export interface DescribeScheduleRequest {
  /**
   * @public
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for DescribeScheduleResponse
 */
export interface DescribeScheduleResponse {
  /**
   * @public
   * The next token; for use in pagination.
   */
  NextToken?: string;

  /**
   * @public
   * The list of actions in the schedule.
   */
  ScheduleActions?: ScheduleAction[];
}

/**
 * @public
 * Placeholder documentation for DescribeThumbnailsRequest
 */
export interface DescribeThumbnailsRequest {
  /**
   * @public
   * Unique ID of the channel
   */
  ChannelId: string | undefined;

  /**
   * @public
   * Pipeline ID ("0" or "1")
   */
  PipelineId: string | undefined;

  /**
   * @public
   * thumbnail type
   */
  ThumbnailType: string | undefined;
}

/**
 * @public
 * Placeholder documentation for DescribeThumbnailsResponse
 */
export interface DescribeThumbnailsResponse {
  /**
   * @public
   * Placeholder documentation for __listOfThumbnailDetail
   */
  ThumbnailDetails?: ThumbnailDetail[];
}

/**
 * @public
 * Parameters required to attach a MediaConnect flow to the device.
 */
export interface InputDeviceMediaConnectConfigurableSettings {
  /**
   * @public
   * The ARN of the MediaConnect flow to attach this device to.
   */
  FlowArn?: string;

  /**
   * @public
   * The ARN for the role that MediaLive assumes to access the attached flow and secret. For more information about how to create this role, see the MediaLive user guide.
   */
  RoleArn?: string;

  /**
   * @public
   * The ARN for the secret that holds the encryption key to encrypt the content output by the device.
   */
  SecretArn?: string;

  /**
   * @public
   * The name of the MediaConnect Flow source to stream to.
   */
  SourceName?: string;
}

/**
 * @public
 * Configurable settings for the input device.
 */
export interface InputDeviceConfigurableSettings {
  /**
   * @public
   * The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput;

  /**
   * @public
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   */
  MaxBitrate?: number;

  /**
   * @public
   * The Link device's buffer size (latency) in milliseconds (ms).
   */
  LatencyMs?: number;

  /**
   * @public
   * Choose the codec for the video that the device produces. Only UHD devices can specify this parameter.
   */
  Codec?: InputDeviceCodec;

  /**
   * @public
   * To attach this device to a MediaConnect flow, specify these parameters. To detach an existing flow, enter \{\} for the value of mediaconnectSettings. Only UHD devices can specify this parameter.
   */
  MediaconnectSettings?: InputDeviceMediaConnectConfigurableSettings;
}

/**
 * @public
 * Placeholder documentation for ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * @public
   * Placeholder documentation for __listOfChannelSummary
   */
  Channels?: ChannelSummary[];

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListInputDevicesRequest
 */
export interface ListInputDevicesRequest {
  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListInputDevicesResponse
 */
export interface ListInputDevicesResponse {
  /**
   * @public
   * The list of input devices.
   */
  InputDevices?: InputDeviceSummary[];

  /**
   * @public
   * A token to get additional list results.
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListInputDeviceTransfersRequest
 */
export interface ListInputDeviceTransfersRequest {
  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * @public
   * Placeholder documentation for __string
   */
  TransferType: string | undefined;
}

/**
 * @public
 * Placeholder documentation for ListInputDeviceTransfersResponse
 */
export interface ListInputDeviceTransfersResponse {
  /**
   * @public
   * The list of devices that you are transferring or are being transferred to you.
   */
  InputDeviceTransfers?: TransferringInputDeviceSummary[];

  /**
   * @public
   * A token to get additional list results.
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListInputsRequest
 */
export interface ListInputsRequest {
  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListInputsResponse
 */
export interface ListInputsResponse {
  /**
   * @public
   * Placeholder documentation for __listOfInput
   */
  Inputs?: Input[];

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListInputSecurityGroupsRequest
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListInputSecurityGroupsResponse
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * @public
   * List of input security groups
   */
  InputSecurityGroups?: InputSecurityGroup[];

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListMultiplexesRequest
 */
export interface ListMultiplexesRequest {
  /**
   * @public
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * @public
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const DescribeInputDeviceThumbnailResponseFilterSensitiveLog = (
  obj: DescribeInputDeviceThumbnailResponse
): any => ({
  ...obj,
});
