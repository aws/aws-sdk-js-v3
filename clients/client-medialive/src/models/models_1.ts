// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

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
  CloudWatchAlarmTemplateComparisonOperator,
  CloudWatchAlarmTemplateStatistic,
  CloudWatchAlarmTemplateTargetResourceType,
  CloudWatchAlarmTemplateTreatMissingData,
  CmafNielsenId3Behavior,
  ColorCorrection,
  EventBridgeRuleTemplateEventType,
  EventBridgeRuleTemplateTarget,
  Hdr10Settings,
  HlsAdMarkers,
  Input,
  InputAttachment,
  InputDestinationRequest,
  InputDeviceSettings,
  InputLocation,
  InputSecurityGroup,
  InputSourceRequest,
  InputSpecification,
  InputType,
  InputWhitelistRuleCidr,
  LogLevel,
  MaintenanceDay,
  MaintenanceStatus,
  MediaConnectFlowRequest,
  MediaResourceNeighbor,
  MultiplexOutputDestination,
  MultiplexProgramPipelineDetail,
  MultiplexState,
  OfferingDurationUnits,
  OfferingType,
  Output,
  OutputDestination,
  OutputLocationRef,
  ReservationResourceSpecification,
  S3CannedAcl,
  VpcOutputSettingsDescription,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const Scte35Type = {
  NONE: "NONE",
  SCTE_35_WITHOUT_SEGMENTATION: "SCTE_35_WITHOUT_SEGMENTATION",
} as const;

/**
 * @public
 */
export type Scte35Type = (typeof Scte35Type)[keyof typeof Scte35Type];

/**
 * @public
 * @enum
 */
export const CmafIngestSegmentLengthUnits = {
  MILLISECONDS: "MILLISECONDS",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type CmafIngestSegmentLengthUnits =
  (typeof CmafIngestSegmentLengthUnits)[keyof typeof CmafIngestSegmentLengthUnits];

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
  NielsenId3Behavior?: CmafNielsenId3Behavior;

  /**
   * Type of scte35 track to add. none or scte35WithoutSegmentation
   * @public
   */
  Scte35Type?: Scte35Type;

  /**
   * The nominal duration of segments. The units are specified in SegmentLengthUnits. The segments will end on the next keyframe after the specified duration, so the actual segment length might be longer, and it might be a fraction of the units.
   * @public
   */
  SegmentLength?: number;

  /**
   * Time unit for segment length parameter.
   * @public
   */
  SegmentLengthUnits?: CmafIngestSegmentLengthUnits;

  /**
   * Number of milliseconds to delay the output from the second pipeline.
   * @public
   */
  SendDelayMs?: number;
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
  CannedAcl?: S3CannedAcl;
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
  FrameCaptureS3Settings?: FrameCaptureS3Settings;
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
  FrameCaptureCdnSettings?: FrameCaptureCdnSettings;
}

/**
 * @public
 * @enum
 */
export const HlsCaptionLanguageSetting = {
  INSERT: "INSERT",
  NONE: "NONE",
  OMIT: "OMIT",
} as const;

/**
 * @public
 */
export type HlsCaptionLanguageSetting = (typeof HlsCaptionLanguageSetting)[keyof typeof HlsCaptionLanguageSetting];

/**
 * @public
 * @enum
 */
export const HlsClientCache = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type HlsClientCache = (typeof HlsClientCache)[keyof typeof HlsClientCache];

/**
 * @public
 * @enum
 */
export const HlsCodecSpecification = {
  RFC_4281: "RFC_4281",
  RFC_6381: "RFC_6381",
} as const;

/**
 * @public
 */
export type HlsCodecSpecification = (typeof HlsCodecSpecification)[keyof typeof HlsCodecSpecification];

/**
 * @public
 * @enum
 */
export const HlsDirectoryStructure = {
  SINGLE_DIRECTORY: "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM: "SUBDIRECTORY_PER_STREAM",
} as const;

/**
 * @public
 */
export type HlsDirectoryStructure = (typeof HlsDirectoryStructure)[keyof typeof HlsDirectoryStructure];

/**
 * @public
 * @enum
 */
export const HlsDiscontinuityTags = {
  INSERT: "INSERT",
  NEVER_INSERT: "NEVER_INSERT",
} as const;

/**
 * @public
 */
export type HlsDiscontinuityTags = (typeof HlsDiscontinuityTags)[keyof typeof HlsDiscontinuityTags];

/**
 * @public
 * @enum
 */
export const HlsEncryptionType = {
  AES128: "AES128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;

/**
 * @public
 */
export type HlsEncryptionType = (typeof HlsEncryptionType)[keyof typeof HlsEncryptionType];

/**
 * @public
 * @enum
 */
export const HlsAkamaiHttpTransferMode = {
  CHUNKED: "CHUNKED",
  NON_CHUNKED: "NON_CHUNKED",
} as const;

/**
 * @public
 */
export type HlsAkamaiHttpTransferMode = (typeof HlsAkamaiHttpTransferMode)[keyof typeof HlsAkamaiHttpTransferMode];

/**
 * Hls Akamai Settings
 * @public
 */
export interface HlsAkamaiSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number;

  /**
   * Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.
   * @public
   */
  HttpTransferMode?: HlsAkamaiHttpTransferMode;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number;

  /**
   * Salt for authenticated Akamai.
   * @public
   */
  Salt?: string;

  /**
   * Token parameter for authenticated akamai. If not specified, _gda_ is used.
   * @public
   */
  Token?: string;
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
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number;
}

/**
 * @public
 * @enum
 */
export const HlsMediaStoreStorageClass = {
  TEMPORAL: "TEMPORAL",
} as const;

/**
 * @public
 */
export type HlsMediaStoreStorageClass = (typeof HlsMediaStoreStorageClass)[keyof typeof HlsMediaStoreStorageClass];

/**
 * Hls Media Store Settings
 * @public
 */
export interface HlsMediaStoreSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number;

  /**
   * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
   * @public
   */
  MediaStoreStorageClass?: HlsMediaStoreStorageClass;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number;
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
  CannedAcl?: S3CannedAcl;
}

/**
 * @public
 * @enum
 */
export const HlsWebdavHttpTransferMode = {
  CHUNKED: "CHUNKED",
  NON_CHUNKED: "NON_CHUNKED",
} as const;

/**
 * @public
 */
export type HlsWebdavHttpTransferMode = (typeof HlsWebdavHttpTransferMode)[keyof typeof HlsWebdavHttpTransferMode];

/**
 * Hls Webdav Settings
 * @public
 */
export interface HlsWebdavSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   * @public
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number;

  /**
   * Specify whether or not to use chunked transfer encoding to WebDAV.
   * @public
   */
  HttpTransferMode?: HlsWebdavHttpTransferMode;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.
   * @public
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number;
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
  HlsAkamaiSettings?: HlsAkamaiSettings;

  /**
   * Hls Basic Put Settings
   * @public
   */
  HlsBasicPutSettings?: HlsBasicPutSettings;

  /**
   * Hls Media Store Settings
   * @public
   */
  HlsMediaStoreSettings?: HlsMediaStoreSettings;

  /**
   * Hls S3 Settings
   * @public
   */
  HlsS3Settings?: HlsS3Settings;

  /**
   * Hls Webdav Settings
   * @public
   */
  HlsWebdavSettings?: HlsWebdavSettings;
}

/**
 * @public
 * @enum
 */
export const HlsId3SegmentTaggingState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type HlsId3SegmentTaggingState = (typeof HlsId3SegmentTaggingState)[keyof typeof HlsId3SegmentTaggingState];

/**
 * @public
 * @enum
 */
export const IFrameOnlyPlaylistType = {
  DISABLED: "DISABLED",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type IFrameOnlyPlaylistType = (typeof IFrameOnlyPlaylistType)[keyof typeof IFrameOnlyPlaylistType];

/**
 * @public
 * @enum
 */
export const HlsIncompleteSegmentBehavior = {
  AUTO: "AUTO",
  SUPPRESS: "SUPPRESS",
} as const;

/**
 * @public
 */
export type HlsIncompleteSegmentBehavior =
  (typeof HlsIncompleteSegmentBehavior)[keyof typeof HlsIncompleteSegmentBehavior];

/**
 * @public
 * @enum
 */
export const InputLossActionForHlsOut = {
  EMIT_OUTPUT: "EMIT_OUTPUT",
  PAUSE_OUTPUT: "PAUSE_OUTPUT",
} as const;

/**
 * @public
 */
export type InputLossActionForHlsOut = (typeof InputLossActionForHlsOut)[keyof typeof InputLossActionForHlsOut];

/**
 * @public
 * @enum
 */
export const HlsIvInManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsIvInManifest = (typeof HlsIvInManifest)[keyof typeof HlsIvInManifest];

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
 * Static Key Settings
 * @public
 */
export interface StaticKeySettings {
  /**
   * The URL of the license server used for protecting content.
   * @public
   */
  KeyProviderServer?: InputLocation;

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
 * Hls Group Settings
 * @public
 */
export interface HlsGroupSettings {
  /**
   * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
   * @public
   */
  AdMarkers?: HlsAdMarkers[];

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   * @public
   */
  BaseUrlContent?: string;

  /**
   * Optional. One value per output group.
   *
   * This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
   * @public
   */
  BaseUrlContent1?: string;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   * @public
   */
  BaseUrlManifest?: string;

  /**
   * Optional. One value per output group.
   *
   * Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
   * @public
   */
  BaseUrlManifest1?: string;

  /**
   * Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".
   * @public
   */
  CaptionLanguageMappings?: CaptionLanguageMapping[];

  /**
   * Applies only to 608 Embedded output captions.
   * insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.
   * none: Include CLOSED-CAPTIONS=NONE line in the manifest.
   * omit: Omit any CLOSED-CAPTIONS line from the manifest.
   * @public
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting;

  /**
   * When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
   * @public
   */
  ClientCache?: HlsClientCache;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   * @public
   */
  CodecSpecification?: HlsCodecSpecification;

  /**
   * For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.
   * @public
   */
  ConstantIv?: string;

  /**
   * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
   * @public
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Place segments in subdirectories.
   * @public
   */
  DirectoryStructure?: HlsDirectoryStructure;

  /**
   * Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group.
   * Typically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose.
   * Choose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.
   * @public
   */
  DiscontinuityTags?: HlsDiscontinuityTags;

  /**
   * Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.
   * @public
   */
  EncryptionType?: HlsEncryptionType;

  /**
   * Parameters that control interactions with the CDN.
   * @public
   */
  HlsCdnSettings?: HlsCdnSettings;

  /**
   * State of HLS ID3 Segment Tagging
   * @public
   */
  HlsId3SegmentTagging?: HlsId3SegmentTaggingState;

  /**
   * DISABLED: Do not create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).
   *
   * STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888"
   * @public
   */
  IFrameOnlyPlaylists?: IFrameOnlyPlaylistType;

  /**
   * Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline.
   * Auto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups.
   * Suppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.
   * @public
   */
  IncompleteSegmentBehavior?: HlsIncompleteSegmentBehavior;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be smaller than the number in the Keep Segments field.
   * @public
   */
  IndexNSegments?: number;

  /**
   * Parameter that control output group behavior on input loss.
   * @public
   */
  InputLossAction?: InputLossActionForHlsOut;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.
   * @public
   */
  IvInManifest?: HlsIvInManifest;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.
   * @public
   */
  IvSource?: HlsIvSource;

  /**
   * Applies only if Mode field is LIVE.
   *
   * Specifies the number of media segments to retain in the destination directory. This number should be bigger than indexNSegments (Num segments). We recommend (value = (2 x indexNsegments) + 1).
   *
   * If this "keep segments" number is too low, the following might happen: the player is still reading a media manifest file that lists this segment, but that segment has been removed from the destination directory (as directed by indexNSegments). This situation would result in a 404 HTTP error on the player.
   * @public
   */
  KeepSegments?: number;

  /**
   * The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.
   * @public
   */
  KeyFormat?: string;

  /**
   * Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   * @public
   */
  KeyFormatVersions?: string;

  /**
   * The key provider settings.
   * @public
   */
  KeyProviderSettings?: KeyProviderSettings;

  /**
   * When set to gzip, compresses HLS playlist.
   * @public
   */
  ManifestCompression?: HlsManifestCompression;

  /**
   * Indicates whether the output manifest should use floating point or integer values for segment duration.
   * @public
   */
  ManifestDurationFormat?: HlsManifestDurationFormat;

  /**
   * Minimum length of MPEG-2 Transport Stream segments in seconds. When set, minimum segment length is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   * @public
   */
  MinSegmentLength?: number;

  /**
   * If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.
   *
   * VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
   * @public
   */
  Mode?: HlsMode;

  /**
   * MANIFESTS_AND_SEGMENTS: Generates manifests (master manifest, if applicable, and media manifests) for this output group.
   *
   * VARIANT_MANIFESTS_AND_SEGMENTS: Generates media manifests for this output group, but not a master manifest.
   *
   * SEGMENTS_ONLY: Does not generate any manifests for this output group.
   * @public
   */
  OutputSelection?: HlsOutputSelection;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated using the program date time clock.
   * @public
   */
  ProgramDateTime?: HlsProgramDateTime;

  /**
   * Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock. Options include:
   *
   * INITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment.
   *
   * SYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.
   * @public
   */
  ProgramDateTimeClock?: HlsProgramDateTimeClock;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   * @public
   */
  ProgramDateTimePeriod?: number;

  /**
   * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows playout device that support stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines.
   *
   * DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only.
   *
   * For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players so a redundant manifest from MediaLive is irrelevant.
   * @public
   */
  RedundantManifest?: HlsRedundantManifest;

  /**
   * Length of MPEG-2 Transport Stream segments to create in seconds. Note that segments will end on the next keyframe after this duration, so actual segment length may be longer.
   * @public
   */
  SegmentLength?: number;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   * @public
   */
  SegmentationMode?: HlsSegmentationMode;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.
   * @public
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   * @public
   */
  StreamInfResolution?: HlsStreamInfResolution;

  /**
   * Indicates ID3 frame that has the timecode.
   * @public
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;

  /**
   * Timed Metadata interval in seconds.
   * @public
   */
  TimedMetadataId3Period?: number;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   * @public
   */
  TimestampDeltaMilliseconds?: number;

  /**
   * SEGMENTED_FILES: Emit the program as segments - multiple .ts media files.
   *
   * SINGLE_FILE: Applies only if Mode field is VOD. Emit the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
   * @public
   */
  TsFileMode?: HlsTsFileMode;
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
 * Ms Smooth Group Settings
 * @public
 */
export interface MsSmoothGroupSettings {
  /**
   * The ID to include in each message in the sparse track. Ignored if sparseTrackType is NONE.
   * @public
   */
  AcquisitionPointId?: string;

  /**
   * If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.
   * @public
   */
  AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl;

  /**
   * If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail.
   * @public
   */
  CertificateMode?: SmoothGroupCertificateMode;

  /**
   * Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.
   * @public
   */
  ConnectionRetryInterval?: number;

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
  EventId?: string;

  /**
   * Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.
   *
   * Options:
   * - "useConfigured" - use the value provided in eventId
   * - "useTimestamp" - generate and send an event ID based on the current timestamp
   * - "noEventId" - do not send an event ID to the IIS server.
   * @public
   */
  EventIdMode?: SmoothGroupEventIdMode;

  /**
   * When set to sendEos, send EOS signal to IIS server when stopping the event
   * @public
   */
  EventStopBehavior?: SmoothGroupEventStopBehavior;

  /**
   * Size in seconds of file cache for streaming outputs.
   * @public
   */
  FilecacheDuration?: number;

  /**
   * Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.
   * @public
   */
  FragmentLength?: number;

  /**
   * Parameter that control output group behavior on input loss.
   * @public
   */
  InputLossAction?: InputLossActionForMsSmoothOut;

  /**
   * Number of retry attempts.
   * @public
   */
  NumRetries?: number;

  /**
   * Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
   * @public
   */
  RestartDelay?: number;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   * @public
   */
  SegmentationMode?: SmoothGroupSegmentationMode;

  /**
   * Number of milliseconds to delay the output from the second pipeline.
   * @public
   */
  SendDelayMs?: number;

  /**
   * Identifies the type of data to place in the sparse track:
   * - SCTE35: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame to start a new segment.
   * - SCTE35_WITHOUT_SEGMENTATION: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame but don't start a new segment.
   * - NONE: Don't generate a sparse track for any outputs in this output group.
   * @public
   */
  SparseTrackType?: SmoothGroupSparseTrackType;

  /**
   * When set to send, send stream manifest so publishing point doesn't start until all streams start.
   * @public
   */
  StreamManifestBehavior?: SmoothGroupStreamManifestBehavior;

  /**
   * Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.
   * @public
   */
  TimestampOffset?: string;

  /**
   * Type of timestamp date offset to use.
   * - useEventStartDate: Use the date the event was started as the offset
   * - useConfiguredOffset: Use an explicitly configured date as the offset
   * @public
   */
  TimestampOffsetMode?: SmoothGroupTimestampOffsetMode;
}

/**
 * Multiplex Group Settings
 * @public
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
 * Rtmp Group Settings
 * @public
 */
export interface RtmpGroupSettings {
  /**
   * Choose the ad marker type for this output group. MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.
   * @public
   */
  AdMarkers?: RtmpAdMarkers[];

  /**
   * Authentication scheme to use when connecting with CDN
   * @public
   */
  AuthenticationScheme?: AuthenticationScheme;

  /**
   * Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again.
   * @public
   */
  CacheFullBehavior?: RtmpCacheFullBehavior;

  /**
   * Cache length, in seconds, is used to calculate buffer size.
   * @public
   */
  CacheLength?: number;

  /**
   * Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed.
   * @public
   */
  CaptionData?: RtmpCaptionData;

  /**
   * Controls the behavior of this RTMP group if input becomes unavailable.
   *
   * - emitOutput: Emit a slate until input returns.
   * - pauseOutput: Stop transmitting data until input returns. This does not close the underlying RTMP connection.
   * @public
   */
  InputLossAction?: InputLossActionForRtmpOut;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   * @public
   */
  RestartDelay?: number;

  /**
   * Applies only when the rate control mode (in the codec settings) is CBR (constant bit rate). Controls whether the RTMP output stream is padded (with FILL NAL units) in order to achieve a constant bit rate that is truly constant. When there is no padding, the bandwidth varies (up to the bitrate value in the codec settings). We recommend that you choose Auto.
   * @public
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
 * Udp Group Settings
 * @public
 */
export interface UdpGroupSettings {
  /**
   * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   * @public
   */
  InputLossAction?: InputLossActionForUdpOut;

  /**
   * Indicates ID3 frame that has the timecode.
   * @public
   */
  TimedMetadataId3Frame?: UdpTimedMetadataId3Frame;

  /**
   * Timed Metadata interval in seconds.
   * @public
   */
  TimedMetadataId3Period?: number;
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
  ArchiveGroupSettings?: ArchiveGroupSettings;

  /**
   * Frame Capture Group Settings
   * @public
   */
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings;

  /**
   * Hls Group Settings
   * @public
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * Media Package Group Settings
   * @public
   */
  MediaPackageGroupSettings?: MediaPackageGroupSettings;

  /**
   * Ms Smooth Group Settings
   * @public
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * Multiplex Group Settings
   * @public
   */
  MultiplexGroupSettings?: MultiplexGroupSettings;

  /**
   * Rtmp Group Settings
   * @public
   */
  RtmpGroupSettings?: RtmpGroupSettings;

  /**
   * Udp Group Settings
   * @public
   */
  UdpGroupSettings?: UdpGroupSettings;

  /**
   * Cmaf Ingest Group Settings
   * @public
   */
  CmafIngestGroupSettings?: CmafIngestGroupSettings;
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
  Name?: string;

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
  ActiveInputAttachmentName?: string;

  /**
   * The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.
   * @public
   */
  ActiveInputSwitchActionName?: string;

  /**
   * The name of the motion graphics activate action that occurred most recently and that resulted in the current graphics URI for this pipeline.
   * @public
   */
  ActiveMotionGraphicsActionName?: string;

  /**
   * The current URI being used for HTML5 motion graphics for this pipeline.
   * @public
   */
  ActiveMotionGraphicsUri?: string;

  /**
   * Pipeline ID
   * @public
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
 * The Renewal settings for Reservations
 * @public
 */
export interface RenewalSettings {
  /**
   * Automatic renewal status for the reservation
   * @public
   */
  AutomaticRenewal?: ReservationAutomaticRenewal;

  /**
   * Count for the reservation renewal
   * @public
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
 * Reserved resources available to use
 * @public
 */
export interface Reservation {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   * @public
   */
  Arn?: string;

  /**
   * Number of reserved resources
   * @public
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   * @public
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   * @public
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   * @public
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   * @public
   */
  State?: ReservationState;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number;
}

/**
 * Settings for the action to insert a user-defined ID3 tag in each HLS segment
 * @public
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * ID3 tag to insert into each segment. Supports special keyword identifiers to substitute in segment-related values.\nSupported keyword identifiers: https://docs.aws.amazon.com/medialive/latest/ug/variable-data-identifiers.html
   * @public
   */
  Tag?: string;

  /**
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   * @public
   */
  Id3?: string;
}

/**
 * Settings for the action to emit HLS metadata
 * @public
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   * @public
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
 * Settings to identify the start of the clip.
 * @public
 */
export interface StartTimecode {
  /**
   * The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   * @public
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
 * Settings to identify the end of the clip.
 * @public
 */
export interface StopTimecode {
  /**
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   * @public
   */
  LastFrameClippingBehavior?: LastFrameClippingBehavior;

  /**
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   * @public
   */
  Timecode?: string;
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
  StartTimecode?: StartTimecode;

  /**
   * Settings to identify the end of the clip.
   * @public
   */
  StopTimecode?: StopTimecode;
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
  InputAttachmentNameReference?: string;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   * @public
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   * @public
   */
  UrlPath?: string[];
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
  InputClippingSettings?: InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   * @public
   */
  UrlPath?: string[];
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
  Duration?: number;

  /**
   * Key used to extract the password from EC2 Parameter store
   * @public
   */
  PasswordParam?: string;

  /**
   * URI of the HTML5 content to be rendered into the live stream.
   * @public
   */
  Url?: string;

  /**
   * Documentation update needed
   * @public
   */
  Username?: string;
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
 * Scte35Input Schedule Action Settings
 * @public
 */
export interface Scte35InputScheduleActionSettings {
  /**
   * In fixed mode, enter the name of the input attachment that you want to use as a SCTE-35 input. (Don't enter the ID of the input.)"
   * @public
   */
  InputAttachmentNameReference?: string;

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
  Duration?: number;

  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   * @public
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
 * Corresponds to SCTE-35 segmentation_descriptor.
 * @public
 */
export interface Scte35SegmentationDescriptor {
  /**
   * Holds the four SCTE-35 delivery restriction parameters.
   * @public
   */
  DeliveryRestrictions?: Scte35DeliveryRestrictions;

  /**
   * Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SegmentNum?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_cancel_indicator.
   * @public
   */
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.
   * @public
   */
  SegmentationDuration?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_id.
   * @public
   */
  SegmentationEventId: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").
   * @public
   */
  SegmentationTypeId?: number;

  /**
   * Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.
   * @public
   */
  SegmentationUpid?: string;

  /**
   * Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").
   * @public
   */
  SegmentationUpidType?: number;

  /**
   * Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SegmentsExpected?: number;

  /**
   * Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SubSegmentNum?: number;

  /**
   * Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.
   * @public
   */
  SubSegmentsExpected?: number;
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
  Duration?: number;

  /**
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   * @public
   */
  FadeIn?: number;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   * @public
   */
  FadeOut?: number;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   * @public
   */
  Height?: number;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   * @public
   */
  Image: InputLocation | undefined;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   * @public
   */
  ImageX?: number;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   * @public
   */
  ImageY?: number;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   * @public
   */
  Layer?: number;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   * @public
   */
  Opacity?: number;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   * @public
   */
  Width?: number;
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
  FadeOut?: number;

  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   * @public
   */
  Layer?: number;
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
  Duration?: number;

  /**
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   * @public
   */
  FadeIn?: number;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   * @public
   */
  FadeOut?: number;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   * @public
   */
  Height?: number;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   * @public
   */
  Image: InputLocation | undefined;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   * @public
   */
  ImageX?: number;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   * @public
   */
  ImageY?: number;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   * @public
   */
  Layer?: number;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   * @public
   */
  Opacity?: number;

  /**
   * The name(s) of the output(s) the activation should apply to.
   * @public
   */
  OutputNames: string[] | undefined;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   * @public
   */
  Width?: number;
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
  FadeOut?: number;

  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   * @public
   */
  Layer?: number;

  /**
   * The name(s) of the output(s) the deactivation should apply to.
   * @public
   */
  OutputNames: string[] | undefined;
}

/**
 * Holds the settings for a single schedule action.
 * @public
 */
export interface ScheduleActionSettings {
  /**
   * Action to insert HLS ID3 segment tagging
   * @public
   */
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

  /**
   * Action to insert HLS metadata
   * @public
   */
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

  /**
   * Action to prepare an input for a future immediate input switch
   * @public
   */
  InputPrepareSettings?: InputPrepareScheduleActionSettings;

  /**
   * Action to switch the input
   * @public
   */
  InputSwitchSettings?: InputSwitchScheduleActionSettings;

  /**
   * Action to activate a motion graphics image overlay
   * @public
   */
  MotionGraphicsImageActivateSettings?: MotionGraphicsActivateScheduleActionSettings;

  /**
   * Action to deactivate a motion graphics image overlay
   * @public
   */
  MotionGraphicsImageDeactivateSettings?: MotionGraphicsDeactivateScheduleActionSettings;

  /**
   * Action to pause or unpause one or both channel pipelines
   * @public
   */
  PauseStateSettings?: PauseStateScheduleActionSettings;

  /**
   * Action to specify scte35 input
   * @public
   */
  Scte35InputSettings?: Scte35InputScheduleActionSettings;

  /**
   * Action to insert SCTE-35 return_to_network message
   * @public
   */
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * Action to insert SCTE-35 splice_insert message
   * @public
   */
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

  /**
   * Action to insert SCTE-35 time_signal message
   * @public
   */
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

  /**
   * Action to activate a static image overlay
   * @public
   */
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay
   * @public
   */
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;

  /**
   * Action to activate a static image overlay in one or more specified outputs
   * @public
   */
  StaticImageOutputActivateSettings?: StaticImageOutputActivateScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay in one or more specified outputs
   * @public
   */
  StaticImageOutputDeactivateSettings?: StaticImageOutputDeactivateScheduleActionSettings;
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
  FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;

  /**
   * Option for specifying an action as relative to another action.
   * @public
   */
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

  /**
   * Option for specifying an action that should be applied immediately.
   * @public
   */
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;
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
 * @public
 * @enum
 */
export const SignalMapMonitorDeploymentStatus = {
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DEPLOYMENT_COMPLETE: "DEPLOYMENT_COMPLETE",
  DEPLOYMENT_FAILED: "DEPLOYMENT_FAILED",
  DEPLOYMENT_IN_PROGRESS: "DEPLOYMENT_IN_PROGRESS",
  DRY_RUN_DEPLOYMENT_COMPLETE: "DRY_RUN_DEPLOYMENT_COMPLETE",
  DRY_RUN_DEPLOYMENT_FAILED: "DRY_RUN_DEPLOYMENT_FAILED",
  DRY_RUN_DEPLOYMENT_IN_PROGRESS: "DRY_RUN_DEPLOYMENT_IN_PROGRESS",
  NOT_DEPLOYED: "NOT_DEPLOYED",
} as const;

/**
 * @public
 */
export type SignalMapMonitorDeploymentStatus =
  (typeof SignalMapMonitorDeploymentStatus)[keyof typeof SignalMapMonitorDeploymentStatus];

/**
 * @public
 * @enum
 */
export const SignalMapStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  NOT_READY: "NOT_READY",
  READY: "READY",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_REVERTED: "UPDATE_REVERTED",
} as const;

/**
 * @public
 */
export type SignalMapStatus = (typeof SignalMapStatus)[keyof typeof SignalMapStatus];

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
  Description?: string;

  /**
   * A signal map's id.
   * @public
   */
  Id: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

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
  Tags?: Record<string, string>;
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
 * Details of a single thumbnail
 * @public
 */
export interface Thumbnail {
  /**
   * The binary data for the latest thumbnail.
   * @public
   */
  Body?: string;

  /**
   * The content type for the latest thumbnail.
   * @public
   */
  ContentType?: string;

  /**
   * Thumbnail Type
   * @public
   */
  ThumbnailType?: ThumbnailType;

  /**
   * Time stamp for the latest thumbnail.
   * @public
   */
  TimeStamp?: Date;
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
  PipelineId?: string;

  /**
   * thumbnails of a single pipeline
   * @public
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
 * Details about the input device that is being transferred.
 * @public
 */
export interface TransferringInputDeviceSummary {
  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string;

  /**
   * The optional message that the sender has attached to the transfer.
   * @public
   */
  Message?: string;

  /**
   * The AWS account ID for the recipient of the input device transfer.
   * @public
   */
  TargetCustomerId?: string;

  /**
   * The type (direction) of the input device transfer.
   * @public
   */
  TransferType?: InputDeviceTransferType;
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
  ElementPath?: string;

  /**
   * The error message.
   * @public
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
  Prefix?: string;
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
  CaptureInterval?: number;

  /**
   * Unit for the frame capture interval.
   * @public
   */
  CaptureIntervalUnits?: FrameCaptureIntervalUnit;

  /**
   * Timecode burn-in settings
   * @public
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
 * H264 Color Space Settings
 * @public
 */
export interface H264ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   * @public
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * Rec601 Settings
   * @public
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   * @public
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
  PostFilterSharpening?: TemporalFilterPostFilterSharpening;

  /**
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   * @public
   */
  Strength?: TemporalFilterStrength;
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
 * H264 Settings
 * @public
 */
export interface H264Settings {
  /**
   * Enables or disables adaptive quantization, which is a technique MediaLive can apply to video on a frame-by-frame basis to produce more compression without losing quality. There are three types of adaptive quantization: flicker, spatial, and temporal. Set the field in one of these ways: Set to Auto. Recommended. For each type of AQ, MediaLive will determine if AQ is needed, and if so, the appropriate strength. Set a strength (a value other than Auto or Disable). This strength will apply to any of the AQ fields that you choose to enable. Set to Disabled to disable all types of adaptive quantization.
   * @public
   */
  AdaptiveQuantization?: H264AdaptiveQuantization;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   * @public
   */
  AfdSignaling?: AfdSignaling;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   * @public
   */
  Bitrate?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   * @public
   */
  BufFillPct?: number;

  /**
   * Size of buffer (HRD buffer model) in bits.
   * @public
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   * @public
   */
  ColorMetadata?: H264ColorMetadata;

  /**
   * Color Space settings
   * @public
   */
  ColorSpaceSettings?: H264ColorSpaceSettings;

  /**
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   * @public
   */
  EntropyEncoding?: H264EntropyEncoding;

  /**
   * Optional filters that you can apply to an encode.
   * @public
   */
  FilterSettings?: H264FilterSettings;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   * @public
   */
  FixedAfd?: FixedAfd;

  /**
   * Flicker AQ makes adjustments within each frame to reduce flicker or 'pop' on I-frames. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if flicker AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply flicker AQ using the specified strength. Disabled: MediaLive won't apply flicker AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply flicker AQ.
   * @public
   */
  FlickerAq?: H264FlickerAq;

  /**
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)
   * enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.
   * disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   * @public
   */
  ForceFieldPictures?: H264ForceFieldPictures;

  /**
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   * @public
   */
  FramerateControl?: H264FramerateControl;

  /**
   * Framerate denominator.
   * @public
   */
  FramerateDenominator?: number;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   * @public
   */
  FramerateNumerator?: number;

  /**
   * Documentation update needed
   * @public
   */
  GopBReference?: H264GopBReference;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   * @public
   */
  GopClosedCadence?: number;

  /**
   * Number of B-frames between reference frames.
   * @public
   */
  GopNumBFrames?: number;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   * @public
   */
  GopSize?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   * @public
   */
  GopSizeUnits?: H264GopSizeUnits;

  /**
   * H.264 Level.
   * @public
   */
  Level?: H264Level;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   * @public
   */
  LookAheadRateControl?: H264LookAheadRateControl;

  /**
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   * @public
   */
  MaxBitrate?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   * @public
   */
  MinIInterval?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   * @public
   */
  NumRefFrames?: number;

  /**
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   * @public
   */
  ParControl?: H264ParControl;

  /**
   * Pixel Aspect Ratio denominator.
   * @public
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   * @public
   */
  ParNumerator?: number;

  /**
   * H.264 Profile.
   * @public
   */
  Profile?: H264Profile;

  /**
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
   * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
   * - STANDARD_QUALITY: Valid for any Rate control mode.
   * @public
   */
  QualityLevel?: H264QualityLevel;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. You can set a target quality or you can let MediaLive determine the best quality. To set a target quality, enter values in the QVBR quality level field and the Max bitrate field. Enter values that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   * To let MediaLive decide, leave the QVBR quality level field empty, and in Max bitrate enter the maximum rate you want in the video. For more information, see the section called "Video - rate control mode" in the MediaLive user guide
   * @public
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
   * @public
   */
  RateControlMode?: H264RateControlMode;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   * @public
   */
  ScanType?: H264ScanType;

  /**
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   * @public
   */
  SceneChangeDetect?: H264SceneChangeDetect;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   * @public
   */
  Slices?: number;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.  If not set to zero, must be greater than 15.
   * @public
   */
  Softness?: number;

  /**
   * Spatial AQ makes adjustments within each frame based on spatial variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if spatial AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply spatial AQ using the specified strength. Disabled: MediaLive won't apply spatial AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply spatial AQ.
   * @public
   */
  SpatialAq?: H264SpatialAq;

  /**
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   * @public
   */
  SubgopLength?: H264SubGopLength;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   * @public
   */
  Syntax?: H264Syntax;

  /**
   * Temporal makes adjustments within each frame based on temporal variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if temporal AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply temporal AQ using the specified strength. Disabled: MediaLive won't apply temporal AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply temporal AQ.
   * @public
   */
  TemporalAq?: H264TemporalAq;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   * @public
   */
  TimecodeInsertion?: H264TimecodeInsertionBehavior;

  /**
   * Timecode burn-in settings
   * @public
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
 * Dolby Vision81 Settings
 * @public
 */
export interface DolbyVision81Settings {}

/**
 * H265 Color Space Settings
 * @public
 */
export interface H265ColorSpaceSettings {
  /**
   * Passthrough applies no color space conversion to the output
   * @public
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

  /**
   * Dolby Vision81 Settings
   * @public
   */
  DolbyVision81Settings?: DolbyVision81Settings;

  /**
   * Hdr10 Settings
   * @public
   */
  Hdr10Settings?: Hdr10Settings;

  /**
   * Rec601 Settings
   * @public
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   * @public
   */
  Rec709Settings?: Rec709Settings;
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
export const H265MvOverPictureBoundaries = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265MvOverPictureBoundaries =
  (typeof H265MvOverPictureBoundaries)[keyof typeof H265MvOverPictureBoundaries];

/**
 * @public
 * @enum
 */
export const H265MvTemporalPredictor = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265MvTemporalPredictor = (typeof H265MvTemporalPredictor)[keyof typeof H265MvTemporalPredictor];

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
export const H265TilePadding = {
  NONE: "NONE",
  PADDED: "PADDED",
} as const;

/**
 * @public
 */
export type H265TilePadding = (typeof H265TilePadding)[keyof typeof H265TilePadding];

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
 * @enum
 */
export const H265TreeblockSize = {
  AUTO: "AUTO",
  TREE_SIZE_32X32: "TREE_SIZE_32X32",
} as const;

/**
 * @public
 */
export type H265TreeblockSize = (typeof H265TreeblockSize)[keyof typeof H265TreeblockSize];

/**
 * H265 Settings
 * @public
 */
export interface H265Settings {
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   * @public
   */
  AdaptiveQuantization?: H265AdaptiveQuantization;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   * @public
   */
  AfdSignaling?: AfdSignaling;

  /**
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   * @public
   */
  AlternativeTransferFunction?: H265AlternativeTransferFunction;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   * @public
   */
  Bitrate?: number;

  /**
   * Size of buffer (HRD buffer model) in bits.
   * @public
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   * @public
   */
  ColorMetadata?: H265ColorMetadata;

  /**
   * Color Space settings
   * @public
   */
  ColorSpaceSettings?: H265ColorSpaceSettings;

  /**
   * Optional filters that you can apply to an encode.
   * @public
   */
  FilterSettings?: H265FilterSettings;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   * @public
   */
  FixedAfd?: FixedAfd;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   * @public
   */
  FlickerAq?: H265FlickerAq;

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
  GopClosedCadence?: number;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   * @public
   */
  GopSize?: number;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   * @public
   */
  GopSizeUnits?: H265GopSizeUnits;

  /**
   * H.265 Level.
   * @public
   */
  Level?: H265Level;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   * @public
   */
  LookAheadRateControl?: H265LookAheadRateControl;

  /**
   * For QVBR: See the tooltip for Quality level
   * @public
   */
  MaxBitrate?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   * @public
   */
  MinIInterval?: number;

  /**
   * Pixel Aspect Ratio denominator.
   * @public
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   * @public
   */
  ParNumerator?: number;

  /**
   * H.265 Profile.
   * @public
   */
  Profile?: H265Profile;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   * @public
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
   * @public
   */
  RateControlMode?: H265RateControlMode;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   * @public
   */
  ScanType?: H265ScanType;

  /**
   * Scene change detection.
   * @public
   */
  SceneChangeDetect?: H265SceneChangeDetect;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   * @public
   */
  Slices?: number;

  /**
   * H.265 Tier.
   * @public
   */
  Tier?: H265Tier;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   * @public
   */
  TimecodeInsertion?: H265TimecodeInsertionBehavior;

  /**
   * Timecode burn-in settings
   * @public
   */
  TimecodeBurninSettings?: TimecodeBurninSettings;

  /**
   * If you are setting up the picture as a tile, you must set this to "disabled". In all other configurations, you typically enter "enabled".
   * @public
   */
  MvOverPictureBoundaries?: H265MvOverPictureBoundaries;

  /**
   * If you are setting up the picture as a tile, you must set this to "disabled". In other configurations, you typically enter "enabled".
   * @public
   */
  MvTemporalPredictor?: H265MvTemporalPredictor;

  /**
   * Set this field to set up the picture as a tile. You must also set tileWidth.
   * The tile height must result in 22 or fewer rows in the frame. The tile width
   * must result in 20 or fewer columns in the frame. And finally, the product of the
   * column count and row count must be 64 of less.
   * If the tile width and height are specified, MediaLive will override the video
   * codec slices field with a value that MediaLive calculates
   * @public
   */
  TileHeight?: number;

  /**
   * Set to "padded" to force MediaLive to add padding to the frame, to obtain a frame that is a whole multiple of the tile size.
   * If you are setting up the picture as a tile, you must enter "padded".
   * In all other configurations, you typically enter "none".
   * @public
   */
  TilePadding?: H265TilePadding;

  /**
   * Set this field to set up the picture as a tile. See tileHeight for more information.
   * @public
   */
  TileWidth?: number;

  /**
   * Select the tree block size used for encoding. If you enter "auto", the encoder will pick the best size. If you are setting up the picture as a tile, you must set this to 32x32. In all other configurations, you typically enter "auto".
   * @public
   */
  TreeblockSize?: H265TreeblockSize;
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
 * Mpeg2 Filter Settings
 * @public
 */
export interface Mpeg2FilterSettings {
  /**
   * Temporal Filter Settings
   * @public
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
 * Mpeg2 Settings
 * @public
 */
export interface Mpeg2Settings {
  /**
   * Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
   * @public
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization;

  /**
   * Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.
   * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
   * FIXED: MediaLive will use the value you specify in fixedAFD.
   * @public
   */
  AfdSignaling?: AfdSignaling;

  /**
   * Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
   * @public
   */
  ColorMetadata?: Mpeg2ColorMetadata;

  /**
   * Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \"MediaLive Features - Video - color space\" in the MediaLive User Guide.
   * PASSTHROUGH: Keep the color space of the input content - do not convert it.
   * AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
   * @public
   */
  ColorSpace?: Mpeg2ColorSpace;

  /**
   * Sets the pixel aspect ratio for the encode.
   * @public
   */
  DisplayAspectRatio?: Mpeg2DisplayRatio;

  /**
   * Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied.
   * TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.
   * When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.
   * When the content is reasonably clean, the filter tends to decrease the bitrate.
   * @public
   */
  FilterSettings?: Mpeg2FilterSettings;

  /**
   * Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.
   * @public
   */
  FixedAfd?: FixedAfd;

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
  GopClosedCadence?: number;

  /**
   * Relates to the GOP structure. The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.
   * @public
   */
  GopNumBFrames?: number;

  /**
   * Relates to the GOP structure. The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default.
   * If gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.
   * @public
   */
  GopSize?: number;

  /**
   * Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
   * @public
   */
  GopSizeUnits?: Mpeg2GopSizeUnits;

  /**
   * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
   * @public
   */
  ScanType?: Mpeg2ScanType;

  /**
   * Relates to the GOP structure. If you do not know what GOP is, use the default.
   * FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.
   * DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
   * @public
   */
  SubgopLength?: Mpeg2SubGopLength;

  /**
   * Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on \"MediaLive Features - Timecode configuration\" in the MediaLive User Guide.
   * DISABLED: do not include timecodes.
   * GOP_TIMECODE: Include timecode metadata in the GOP header.
   * @public
   */
  TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior;

  /**
   * Timecode burn-in settings
   * @public
   */
  TimecodeBurninSettings?: TimecodeBurninSettings;
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
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * H264 Settings
   * @public
   */
  H264Settings?: H264Settings;

  /**
   * H265 Settings
   * @public
   */
  H265Settings?: H265Settings;

  /**
   * Mpeg2 Settings
   * @public
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
 * Video settings for this stream.
 * @public
 */
export interface VideoDescription {
  /**
   * Video codec settings.
   * @public
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   * @public
   */
  Height?: number;

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
  RespondToAfd?: VideoDescriptionRespondToAfd;

  /**
   * STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   * @public
   */
  ScalingBehavior?: VideoDescriptionScalingBehavior;

  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   * @public
   */
  Sharpness?: number;

  /**
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   * @public
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
 * Placeholder documentation for BadGatewayException
 * @public
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name: "GatewayTimeoutException" = "GatewayTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * Placeholder documentation for __string
   * @public
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
 * @public
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  /**
   * The error message.
   * @public
   */
  Message?: string;

  /**
   * A collection of validation error responses.
   * @public
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
 * Placeholder documentation for AccountConfiguration
 * @public
 */
export interface AccountConfiguration {
  /**
   * Specifies the KMS key to use for all features that use key encryption. Specify the ARN of a KMS key that you have created. Or leave blank to use the key that MediaLive creates and manages for you.
   * @public
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
 * Avail Blanking
 * @public
 */
export interface AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   * @public
   */
  AvailBlankingImage?: InputLocation;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   * @public
   */
  State?: AvailBlankingState;
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
  AdAvailOffset?: number;

  /**
   * Documentation update needed
   * @public
   */
  PasswordParam?: string;

  /**
   * The URL of the signal conditioner endpoint on the Placement Opportunity Information System (POIS). MediaLive sends SignalProcessingEvents here when SCTE-35 messages are read.
   * @public
   */
  PoisEndpoint: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  Username?: string;

  /**
   * Optional data sent as zoneIdentity to identify the MediaLive channel to the POIS.
   * @public
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
 * Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.
 * @public
 */
export interface Scte35SpliceInsert {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   * @public
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
   */
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
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
 * Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.
 * @public
 */
export interface Scte35TimeSignalApos {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   * @public
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
   */
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   * @public
   */
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior;
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
  Esam?: Esam;

  /**
   * Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.
   * @public
   */
  Scte35SpliceInsert?: Scte35SpliceInsert;

  /**
   * Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.
   * @public
   */
  Scte35TimeSignalApos?: Scte35TimeSignalApos;
}

/**
 * @public
 * @enum
 */
export const Scte35SegmentationScope = {
  ALL_OUTPUT_GROUPS: "ALL_OUTPUT_GROUPS",
  SCTE35_ENABLED_OUTPUT_GROUPS: "SCTE35_ENABLED_OUTPUT_GROUPS",
} as const;

/**
 * @public
 */
export type Scte35SegmentationScope = (typeof Scte35SegmentationScope)[keyof typeof Scte35SegmentationScope];

/**
 * Avail Configuration
 * @public
 */
export interface AvailConfiguration {
  /**
   * Controls how SCTE-35 messages create cues. Splice Insert mode treats all segmentation signals traditionally. With Time Signal APOS mode only Time Signal Placement Opportunity and Break messages create segment breaks. With ESAM mode, signals are forwarded to an ESAM server for possible update.
   * @public
   */
  AvailSettings?: AvailSettings;

  /**
   * Configures whether SCTE 35 passthrough triggers segment breaks in all output groups that use segmented outputs. Insertion of a SCTE 35 message typically results in a segment break, in addition to the regular cadence of breaks. The segment breaks appear in video outputs, audio outputs, and captions outputs (if any).
   *
   * ALL_OUTPUT_GROUPS: Default. Insert the segment break in in all output groups that have segmented outputs. This is the legacy behavior.
   * SCTE35_ENABLED_OUTPUT_GROUPS: Insert the segment break only in output groups that have SCTE 35 passthrough enabled. This is the recommended value, because it reduces unnecessary segment breaks.
   * @public
   */
  Scte35SegmentationScope?: Scte35SegmentationScope;
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
  ChannelIds?: string[];

  /**
   * List of input IDs
   * @public
   */
  InputIds?: string[];

  /**
   * List of input security group IDs
   * @public
   */
  InputSecurityGroupIds?: string[];

  /**
   * List of multiplex IDs
   * @public
   */
  MultiplexIds?: string[];
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
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   * @public
   */
  Successful?: BatchSuccessfulResultModel[];
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
  ChannelIds?: string[];

  /**
   * List of multiplex IDs
   * @public
   */
  MultiplexIds?: string[];
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
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   * @public
   */
  Successful?: BatchSuccessfulResultModel[];
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
  ChannelIds?: string[];

  /**
   * List of multiplex IDs
   * @public
   */
  MultiplexIds?: string[];
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
  Failed?: BatchFailedResultModel[];

  /**
   * List of successful operations
   * @public
   */
  Successful?: BatchSuccessfulResultModel[];
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
  Creates?: BatchScheduleActionCreateRequest;

  /**
   * Schedule actions to delete from the schedule.
   * @public
   */
  Deletes?: BatchScheduleActionDeleteRequest;
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
  Creates?: BatchScheduleActionCreateResult;

  /**
   * Schedule actions deleted from the schedule.
   * @public
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
 * Blackout Slate
 * @public
 */
export interface BlackoutSlate {
  /**
   * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
   * @public
   */
  BlackoutSlateImage?: InputLocation;

  /**
   * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
   * @public
   */
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout;

  /**
   * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
   * @public
   */
  NetworkEndBlackoutImage?: InputLocation;

  /**
   * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   * @public
   */
  NetworkId?: string;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
   * @public
   */
  State?: BlackoutSlateState;
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

/**
 * Property of encoderSettings. Controls color conversion when you are using 3D LUT files to perform color conversion on video.
 * @public
 */
export interface ColorCorrectionSettings {
  /**
   * An array of colorCorrections that applies when you are using 3D LUT files to perform color conversion on video. Each colorCorrection contains one 3D LUT file (that defines the color mapping for converting an input color space to an output color space), and the input/output combination that this 3D LUT file applies to. MediaLive reads the color space in the input metadata, determines the color space that you have specified for the output, and finds and uses the LUT file that applies to this combination.
   * @public
   */
  GlobalColorCorrections: ColorCorrection[] | undefined;
}

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
 * @enum
 */
export const FeatureActivationsOutputStaticImageOverlayScheduleActions = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type FeatureActivationsOutputStaticImageOverlayScheduleActions =
  (typeof FeatureActivationsOutputStaticImageOverlayScheduleActions)[keyof typeof FeatureActivationsOutputStaticImageOverlayScheduleActions];

/**
 * Feature Activations
 * @public
 */
export interface FeatureActivations {
  /**
   * Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled.
   * If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
   * @public
   */
  InputPrepareScheduleActions?: FeatureActivationsInputPrepareScheduleActions;

  /**
   * Enables the output static image overlay feature. Enabling this feature allows you to send channel schedule updates
   * to display/clear/modify image overlays on an output-by-output bases.
   * @public
   */
  OutputStaticImageOverlayScheduleActions?: FeatureActivationsOutputStaticImageOverlayScheduleActions;
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
 * Input Loss Behavior
 * @public
 */
export interface InputLossBehavior {
  /**
   * Documentation update needed
   * @public
   */
  BlackFrameMsec?: number;

  /**
   * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
   * @public
   */
  InputLossImageColor?: string;

  /**
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   * @public
   */
  InputLossImageSlate?: InputLocation;

  /**
   * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
   * @public
   */
  InputLossImageType?: InputLossImageType;

  /**
   * Documentation update needed
   * @public
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
 * Epoch Locking Settings
 * @public
 */
export interface EpochLockingSettings {
  /**
   * Optional. Enter a value here to use a custom epoch, instead of the standard epoch (which started at 1970-01-01T00:00:00 UTC). Specify the start time of the custom epoch, in YYYY-MM-DDTHH:MM:SS in UTC. The time must be 2000-01-01T00:00:00 or later. Always set the MM:SS portion to 00:00.
   * @public
   */
  CustomEpoch?: string;

  /**
   * Optional. Enter a time for the jam sync. The default is midnight UTC. When epoch locking is enabled, MediaLive performs a daily jam sync on every output encode to ensure timecodes don’t diverge from the wall clock. The jam sync applies only to encodes with frame rate of 29.97 or 59.94 FPS. To override, enter a time in HH:MM:SS in UTC. Always set the MM:SS portion to 00:00.
   * @public
   */
  JamSyncTime?: string;
}

/**
 * Pipeline Locking Settings
 * @public
 */
export interface PipelineLockingSettings {}

/**
 * Output Locking Settings
 * @public
 */
export interface OutputLockingSettings {
  /**
   * Epoch Locking Settings
   * @public
   */
  EpochLockingSettings?: EpochLockingSettings;

  /**
   * Pipeline Locking Settings
   * @public
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
 * Global Configuration
 * @public
 */
export interface GlobalConfiguration {
  /**
   * Value to set the initial audio gain for the Live Event.
   * @public
   */
  InitialAudioGain?: number;

  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   * @public
   */
  InputEndAction?: GlobalConfigurationInputEndAction;

  /**
   * Settings for system actions when input is lost.
   * @public
   */
  InputLossBehavior?: InputLossBehavior;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   * @public
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode;

  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   * @public
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   * @public
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs;

  /**
   * Advanced output locking settings
   * @public
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
 * Html Motion Graphics Settings
 * @public
 */
export interface HtmlMotionGraphicsSettings {}

/**
 * Motion Graphics Settings
 * @public
 */
export interface MotionGraphicsSettings {
  /**
   * Html Motion Graphics Settings
   * @public
   */
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
}

/**
 * Motion Graphics Configuration
 * @public
 */
export interface MotionGraphicsConfiguration {
  /**
   * Motion Graphics Insertion
   * @public
   */
  MotionGraphicsInsertion?: MotionGraphicsInsertion;

  /**
   * Motion Graphics Settings
   * @public
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
 * Nielsen Configuration
 * @public
 */
export interface NielsenConfiguration {
  /**
   * Enter the Distributor ID assigned to your organization by Nielsen.
   * @public
   */
  DistributorId?: string;

  /**
   * Enables Nielsen PCM to ID3 tagging
   * @public
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
 * Thumbnail Configuration
 * @public
 */
export interface ThumbnailConfiguration {
  /**
   * Enables the thumbnail feature. The feature generates thumbnails of the incoming video in each pipeline in the channel. AUTO turns the feature on, DISABLE turns the feature off.
   * @public
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
 * Timecode Config
 * @public
 */
export interface TimecodeConfig {
  /**
   * Identifies the source for the timecode that will be associated with the events outputs.
   * -Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
   * -System Clock (systemclock): Use the UTC time.
   * -Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
   * @public
   */
  Source: TimecodeConfigSource | undefined;

  /**
   * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
   * @public
   */
  SyncThreshold?: number;
}

/**
 * Encoder Settings
 * @public
 */
export interface EncoderSettings {
  /**
   * Placeholder documentation for __listOfAudioDescription
   * @public
   */
  AudioDescriptions: AudioDescription[] | undefined;

  /**
   * Settings for ad avail blanking.
   * @public
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Event-wide configuration settings for ad avail insertion.
   * @public
   */
  AvailConfiguration?: AvailConfiguration;

  /**
   * Settings for blackout slate.
   * @public
   */
  BlackoutSlate?: BlackoutSlate;

  /**
   * Settings for caption decriptions
   * @public
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Feature Activations
   * @public
   */
  FeatureActivations?: FeatureActivations;

  /**
   * Configuration settings that apply to the event as a whole.
   * @public
   */
  GlobalConfiguration?: GlobalConfiguration;

  /**
   * Settings for motion graphics.
   * @public
   */
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration;

  /**
   * Nielsen configuration settings.
   * @public
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Placeholder documentation for __listOfOutputGroup
   * @public
   */
  OutputGroups: OutputGroup[] | undefined;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   * @public
   */
  TimecodeConfig: TimecodeConfig | undefined;

  /**
   * Placeholder documentation for __listOfVideoDescription
   * @public
   */
  VideoDescriptions: VideoDescription[] | undefined;

  /**
   * Thumbnail configuration settings.
   * @public
   */
  ThumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * Color Correction Settings
   * @public
   */
  ColorCorrectionSettings?: ColorCorrectionSettings;
}

/**
 * Placeholder documentation for Channel
 * @public
 */
export interface Channel {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * A request to claim an AWS Elemental device that you have purchased from a third-party vendor.
 * @public
 */
export interface ClaimDeviceRequest {
  /**
   * The id of the device you want to claim.
   * @public
   */
  Id?: string;
}

/**
 * Placeholder documentation for ClaimDeviceResponse
 * @public
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
 * Placeholder documentation for MaintenanceCreateSettings
 * @public
 */
export interface MaintenanceCreateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   * @public
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   * @public
   */
  MaintenanceStartTime?: string;
}

/**
 * The properties for a private VPC Output
 * When this property is specified, the output egress addresses will be created in a user specified VPC
 * @public
 */
export interface VpcOutputSettings {
  /**
   * List of public address allocation ids to associate with ENIs that will be created in Output VPC.
   * Must specify one for SINGLE_PIPELINE, two for STANDARD channels
   * @public
   */
  PublicAddressAllocationIds?: string[];

  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.
   * If none are specified then the VPC default security group will be used
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * A request to create a channel
 * @public
 */
export interface CreateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * Placeholder documentation for __listOfOutputDestination
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceCreateSettings;

  /**
   * Name of channel.
   * @public
   */
  Name?: string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   * @public
   */
  RequestId?: string;

  /**
   * @deprecated
   *
   * Deprecated field that's only usable by whitelisted customers.
   * @public
   */
  Reserved?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for the VPC outputs
   * @public
   */
  Vpc?: VpcOutputSettings;
}

/**
 * Placeholder documentation for CreateChannelResponse
 * @public
 */
export interface CreateChannelResponse {
  /**
   * Placeholder documentation for Channel
   * @public
   */
  Channel?: Channel;
}

/**
 * Placeholder documentation for CreateCloudWatchAlarmTemplateRequest
 * @public
 */
export interface CreateCloudWatchAlarmTemplateRequest {
  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods: number | undefined;

  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName: string | undefined;

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
  Tags?: Record<string, string>;

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
 * Placeholder documentation for CreateCloudWatchAlarmTemplateResponse
 * @public
 */
export interface CreateCloudWatchAlarmTemplateResponse {
  /**
   * A cloudwatch alarm template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}

/**
 * Placeholder documentation for CreateCloudWatchAlarmTemplateGroupRequest
 * @public
 */
export interface CreateCloudWatchAlarmTemplateGroupRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateCloudWatchAlarmTemplateGroupResponse
 * @public
 */
export interface CreateCloudWatchAlarmTemplateGroupResponse {
  /**
   * A cloudwatch alarm template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateRequest
 * @public
 */
export interface CreateEventBridgeRuleTemplateRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateResponse
 * @public
 */
export interface CreateEventBridgeRuleTemplateResponse {
  /**
   * An eventbridge rule template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateGroupRequest
 * @public
 */
export interface CreateEventBridgeRuleTemplateGroupRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateGroupResponse
 * @public
 */
export interface CreateEventBridgeRuleTemplateGroupResponse {
  /**
   * An eventbridge rule template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 * @public
 */
export interface InputVpcRequest {
  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * The name of the input
 * @public
 */
export interface CreateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   * @public
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   * @public
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of security groups referenced by IDs to attach to the input.
   * @public
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   * @public
   */
  Name?: string;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   * @public
   */
  RequestId?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   * @public
   */
  Sources?: InputSourceRequest[];

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   * @public
   */
  Type?: InputType;

  /**
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   * @public
   */
  Vpc?: InputVpcRequest;
}

/**
 * Placeholder documentation for CreateInputResponse
 * @public
 */
export interface CreateInputResponse {
  /**
   * Placeholder documentation for Input
   * @public
   */
  Input?: Input;
}

/**
 * The IPv4 CIDRs to whitelist for this Input Security Group
 * @public
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * List of IPv4 CIDR addresses to whitelist
   * @public
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

/**
 * Placeholder documentation for CreateInputSecurityGroupResponse
 * @public
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   * @public
   */
  SecurityGroup?: InputSecurityGroup;
}

/**
 * Contains configuration for a Multiplex event
 * @public
 */
export interface MultiplexSettings {
  /**
   * Maximum video buffer delay in milliseconds.
   * @public
   */
  MaximumVideoBufferDelayMilliseconds?: number;

  /**
   * Transport stream bit rate.
   * @public
   */
  TransportStreamBitrate: number | undefined;

  /**
   * Transport stream ID.
   * @public
   */
  TransportStreamId: number | undefined;

  /**
   * Transport stream reserved bit rate.
   * @public
   */
  TransportStreamReservedBitrate?: number;
}

/**
 * A request to create a multiplex.
 * @public
 */
export interface CreateMultiplexRequest {
  /**
   * A list of availability zones for the multiplex. You must specify exactly two.
   * @public
   */
  AvailabilityZones: string[] | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings: MultiplexSettings | undefined;

  /**
   * Name of multiplex.
   * @public
   */
  Name: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   * @public
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * The multiplex object.
 * @public
 */
export interface Multiplex {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateMultiplexResponse
 * @public
 */
export interface CreateMultiplexResponse {
  /**
   * The newly created multiplex.
   * @public
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
 * Transport stream service descriptor configuration for the Multiplex program.
 * @public
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * Name of the provider.
   * @public
   */
  ProviderName: string | undefined;

  /**
   * Name of the service.
   * @public
   */
  ServiceName: string | undefined;
}

/**
 * Statmux rate control settings
 * @public
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * Maximum statmux bitrate.
   * @public
   */
  MaximumBitrate?: number;

  /**
   * Minimum statmux bitrate.
   * @public
   */
  MinimumBitrate?: number;

  /**
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   * @public
   */
  Priority?: number;
}

/**
 * The video configuration for each program in a multiplex.
 * @public
 */
export interface MultiplexVideoSettings {
  /**
   * The constant bitrate configuration for the video encode.
   * When this field is defined, StatmuxSettings must be undefined.
   * @public
   */
  ConstantBitrate?: number;

  /**
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   * @public
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings;
}

/**
 * Multiplex Program settings configuration.
 * @public
 */
export interface MultiplexProgramSettings {
  /**
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   * @public
   */
  PreferredChannelPipeline?: PreferredChannelPipeline;

  /**
   * Unique program number.
   * @public
   */
  ProgramNumber: number | undefined;

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   * @public
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * Program video settings configuration.
   * @public
   */
  VideoSettings?: MultiplexVideoSettings;
}

/**
 * A request to create a program in a multiplex.
 * @public
 */
export interface CreateMultiplexProgramRequest {
  /**
   * ID of the multiplex where the program is to be created.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings: MultiplexProgramSettings | undefined;

  /**
   * Name of multiplex program.
   * @public
   */
  ProgramName: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   * @public
   */
  RequestId?: string;
}

/**
 * Packet identifiers map for a given Multiplex program.
 * @public
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  AudioPids?: number[];

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  DvbSubPids?: number[];

  /**
   * Placeholder documentation for __integer
   * @public
   */
  DvbTeletextPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EtvPlatformPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EtvSignalPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  KlvDataPids?: number[];

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PcrPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PmtPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PrivateMetadataPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  Scte27Pids?: number[];

  /**
   * Placeholder documentation for __integer
   * @public
   */
  Scte35Pid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  TimedMetadataPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  VideoPid?: number;
}

/**
 * The multiplex program object.
 * @public
 */
export interface MultiplexProgram {
  /**
   * The MediaLive channel associated with the program.
   * @public
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   * @public
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   * @public
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string;
}

/**
 * Placeholder documentation for CreateMultiplexProgramResponse
 * @public
 */
export interface CreateMultiplexProgramResponse {
  /**
   * The newly created multiplex program.
   * @public
   */
  MultiplexProgram?: MultiplexProgram;
}

/**
 * A request to create a partner input
 * @public
 */
export interface CreatePartnerInputRequest {
  /**
   * Unique ID of the input.
   * @public
   */
  InputId: string | undefined;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   * @public
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreatePartnerInputResponse
 * @public
 */
export interface CreatePartnerInputResponse {
  /**
   * Placeholder documentation for Input
   * @public
   */
  Input?: Input;
}

/**
 * Placeholder documentation for CreateSignalMapRequest
 * @public
 */
export interface CreateSignalMapRequest {
  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  CloudWatchAlarmTemplateGroupIdentifiers?: string[];

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  EventBridgeRuleTemplateGroupIdentifiers?: string[];

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * An AWS resource used in media workflows.
 * @public
 */
export interface MediaResource {
  /**
   * Placeholder documentation for __listOfMediaResourceNeighbor
   * @public
   */
  Destinations?: MediaResourceNeighbor[];

  /**
   * The logical name of an AWS media resource.
   * @public
   */
  Name?: string;

  /**
   * Placeholder documentation for __listOfMediaResourceNeighbor
   * @public
   */
  Sources?: MediaResourceNeighbor[];
}

/**
 * Represents the latest successful monitor deployment of a signal map.
 * @public
 */
export interface SuccessfulMonitorDeployment {
  /**
   * URI associated with a signal map's monitor deployment.
   * @public
   */
  DetailsUri: string | undefined;

  /**
   * A signal map's monitor deployment status.
   * @public
   */
  Status: SignalMapMonitorDeploymentStatus | undefined;
}

/**
 * Represents the latest monitor deployment of a signal map.
 * @public
 */
export interface MonitorDeployment {
  /**
   * URI associated with a signal map's monitor deployment.
   * @public
   */
  DetailsUri?: string;

  /**
   * Error message associated with a failed monitor deployment of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * A signal map's monitor deployment status.
   * @public
   */
  Status: SignalMapMonitorDeploymentStatus | undefined;
}

/**
 * Placeholder documentation for CreateSignalMapResponse
 * @public
 */
export interface CreateSignalMapResponse {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[];

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[];

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource>;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource>;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateTagsRequest
 * @public
 */
export interface CreateTagsRequest {
  /**
   * Placeholder documentation for __string
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Placeholder documentation for Tags
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for DeleteChannelRequest
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * Unique ID of the channel.
   * @public
   */
  ChannelId: string | undefined;
}
