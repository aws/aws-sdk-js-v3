// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaPackageVodServiceException as __BaseException } from "./MediaPackageVodServiceException";

/**
 * @public
 * @enum
 */
export const __PeriodTriggersElement = {
  ADS: "ADS",
} as const;

/**
 * @public
 */
export type __PeriodTriggersElement = (typeof __PeriodTriggersElement)[keyof typeof __PeriodTriggersElement];

/**
 * A MediaPackage VOD Asset resource.
 * @public
 */
export interface AssetShallow {
  /**
   * The ARN of the Asset.
   * @public
   */
  Arn?: string;

  /**
   * The time the Asset was initially submitted for Ingest.
   * @public
   */
  CreatedAt?: string;

  /**
   * The unique identifier for the Asset.
   * @public
   */
  Id?: string;

  /**
   * The ID of the PackagingGroup for the Asset.
   * @public
   */
  PackagingGroupId?: string;

  /**
   * The resource ID to include in SPEKE key requests.
   * @public
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   * @public
   */
  SourceArn?: string;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   * @public
   */
  SourceRoleArn?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ManifestLayout = {
  COMPACT: "COMPACT",
  FULL: "FULL",
} as const;

/**
 * @public
 */
export type ManifestLayout = (typeof ManifestLayout)[keyof typeof ManifestLayout];

/**
 * @public
 * @enum
 */
export const Profile = {
  HBBTV_1_5: "HBBTV_1_5",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Profile = (typeof Profile)[keyof typeof Profile];

/**
 * @public
 * @enum
 */
export const ScteMarkersSource = {
  MANIFEST: "MANIFEST",
  SEGMENTS: "SEGMENTS",
} as const;

/**
 * @public
 */
export type ScteMarkersSource = (typeof ScteMarkersSource)[keyof typeof ScteMarkersSource];

/**
 * @public
 * @enum
 */
export const StreamOrder = {
  ORIGINAL: "ORIGINAL",
  VIDEO_BITRATE_ASCENDING: "VIDEO_BITRATE_ASCENDING",
  VIDEO_BITRATE_DESCENDING: "VIDEO_BITRATE_DESCENDING",
} as const;

/**
 * @public
 */
export type StreamOrder = (typeof StreamOrder)[keyof typeof StreamOrder];

/**
 * A StreamSelection configuration.
 * @public
 */
export interface StreamSelection {
  /**
   * The maximum video bitrate (bps) to include in output.
   * @public
   */
  MaxVideoBitsPerSecond?: number;

  /**
   * The minimum video bitrate (bps) to include in output.
   * @public
   */
  MinVideoBitsPerSecond?: number;

  /**
   * A directive that determines the order of streams in the output.
   * @public
   */
  StreamOrder?: StreamOrder;
}

/**
 * A DASH manifest configuration.
 * @public
 */
export interface DashManifest {
  /**
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   * @public
   */
  ManifestLayout?: ManifestLayout;

  /**
   * An optional string to include in the name of the manifest.
   * @public
   */
  ManifestName?: string;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   * @public
   */
  MinBufferTimeSeconds?: number;

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   * @public
   */
  Profile?: Profile;

  /**
   * The source of scte markers used. When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.
   * @public
   */
  ScteMarkersSource?: ScteMarkersSource;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection;
}

/**
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 * @public
 */
export interface EgressEndpoint {
  /**
   * The ID of the PackagingConfiguration being applied to the Asset.
   * @public
   */
  PackagingConfigurationId?: string;

  /**
   * The current processing status of the asset used for the packaging configuration. The status can be either QUEUED, PROCESSING, PLAYABLE, or FAILED. Status information won't be available for most assets ingested before 2021-09-30.
   * @public
   */
  Status?: string;

  /**
   * The URL of the parent manifest for the repackaged Asset.
   * @public
   */
  Url?: string;
}

/**
 * @public
 * @enum
 */
export const AdMarkers = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
  SCTE35_ENHANCED: "SCTE35_ENHANCED",
} as const;

/**
 * @public
 */
export type AdMarkers = (typeof AdMarkers)[keyof typeof AdMarkers];

/**
 * An HTTP Live Streaming (HLS) manifest configuration.
 * @public
 */
export interface HlsManifest {
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   * @public
   */
  AdMarkers?: AdMarkers;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   * @public
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional string to include in the name of the manifest.
   * @public
   */
  ManifestName?: string;

  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   * @public
   */
  RepeatExtXKey?: boolean;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection;
}

/**
 * A Microsoft Smooth Streaming (MSS) manifest configuration.
 * @public
 */
export interface MssManifest {
  /**
   * An optional string to include in the name of the manifest.
   * @public
   */
  ManifestName?: string;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection;
}

/**
 * @public
 * @enum
 */
export const PresetSpeke20Audio = {
  PRESET_AUDIO_1: "PRESET-AUDIO-1",
  PRESET_AUDIO_2: "PRESET-AUDIO-2",
  PRESET_AUDIO_3: "PRESET-AUDIO-3",
  SHARED: "SHARED",
  UNENCRYPTED: "UNENCRYPTED",
} as const;

/**
 * @public
 */
export type PresetSpeke20Audio = (typeof PresetSpeke20Audio)[keyof typeof PresetSpeke20Audio];

/**
 * @public
 * @enum
 */
export const PresetSpeke20Video = {
  PRESET_VIDEO_1: "PRESET-VIDEO-1",
  PRESET_VIDEO_2: "PRESET-VIDEO-2",
  PRESET_VIDEO_3: "PRESET-VIDEO-3",
  PRESET_VIDEO_4: "PRESET-VIDEO-4",
  PRESET_VIDEO_5: "PRESET-VIDEO-5",
  PRESET_VIDEO_6: "PRESET-VIDEO-6",
  PRESET_VIDEO_7: "PRESET-VIDEO-7",
  PRESET_VIDEO_8: "PRESET-VIDEO-8",
  SHARED: "SHARED",
  UNENCRYPTED: "UNENCRYPTED",
} as const;

/**
 * @public
 */
export type PresetSpeke20Video = (typeof PresetSpeke20Video)[keyof typeof PresetSpeke20Video];

/**
 * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
 * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
 * To configure the encryption contract, specify which audio and video encryption presets to use.
 * Note the following considerations when using encryptionContractConfiguration:
 * encryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
 * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
 * @public
 */
export interface EncryptionContractConfiguration {
  /**
   * A collection of audio encryption presets.
   * @public
   */
  PresetSpeke20Audio: PresetSpeke20Audio | undefined;

  /**
   * A collection of video encryption presets.
   * @public
   */
  PresetSpeke20Video: PresetSpeke20Video | undefined;
}

/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 * @public
 */
export interface SpekeKeyProvider {
  /**
   * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
   * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
   * To configure the encryption contract, specify which audio and video encryption presets to use.
   * Note the following considerations when using encryptionContractConfiguration:
   * encryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
   * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
   * @public
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration;

  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
   * MediaPackage will assume when accessing the key provider service.
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The system IDs to include in key requests.
   * @public
   */
  SystemIds: string[] | undefined;

  /**
   * The URL of the external key provider service.
   * @public
   */
  Url: string | undefined;
}

/**
 * A CMAF encryption configuration.
 * @public
 */
export interface CmafEncryption {
  /**
   * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
   * @public
   */
  ConstantInitializationVector?: string;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * A CMAF packaging configuration.
 * @public
 */
export interface CmafPackage {
  /**
   * A CMAF encryption configuration.
   * @public
   */
  Encryption?: CmafEncryption;

  /**
   * A list of HLS manifest configurations.
   * @public
   */
  HlsManifests: HlsManifest[] | undefined;

  /**
   * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   * @public
   */
  IncludeEncoderConfigurationInSegments?: boolean;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   * @public
   */
  SegmentDurationSeconds?: number;
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 * @public
 */
export interface DashEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * @public
 * @enum
 */
export const SegmentTemplateFormat = {
  NUMBER_WITH_DURATION: "NUMBER_WITH_DURATION",
  NUMBER_WITH_TIMELINE: "NUMBER_WITH_TIMELINE",
  TIME_WITH_TIMELINE: "TIME_WITH_TIMELINE",
} as const;

/**
 * @public
 */
export type SegmentTemplateFormat = (typeof SegmentTemplateFormat)[keyof typeof SegmentTemplateFormat];

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 * @public
 */
export interface DashPackage {
  /**
   * A list of DASH manifest configurations.
   * @public
   */
  DashManifests: DashManifest[] | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   * @public
   */
  Encryption?: DashEncryption;

  /**
   * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   * @public
   */
  IncludeEncoderConfigurationInSegments?: boolean;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   * @public
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Asset contains SCTE-35 ad markers.
   * @public
   */
  PeriodTriggers?: __PeriodTriggersElement[];

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   * @public
   */
  SegmentDurationSeconds?: number;

  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   * @public
   */
  SegmentTemplateFormat?: SegmentTemplateFormat;
}

/**
 * @public
 * @enum
 */
export const EncryptionMethod = {
  AES_128: "AES_128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;

/**
 * @public
 */
export type EncryptionMethod = (typeof EncryptionMethod)[keyof typeof EncryptionMethod];

/**
 * An HTTP Live Streaming (HLS) encryption configuration.
 * @public
 */
export interface HlsEncryption {
  /**
   * A constant initialization vector for encryption (optional).
   * When not specified the initialization vector will be periodically rotated.
   * @public
   */
  ConstantInitializationVector?: string;

  /**
   * The encryption method to use.
   * @public
   */
  EncryptionMethod?: EncryptionMethod;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 * @public
 */
export interface HlsPackage {
  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   * @public
   */
  Encryption?: HlsEncryption;

  /**
   * A list of HLS manifest configurations.
   * @public
   */
  HlsManifests: HlsManifest[] | undefined;

  /**
   * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   * @public
   */
  IncludeDvbSubtitles?: boolean;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   * @public
   */
  SegmentDurationSeconds?: number;

  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   * @public
   */
  UseAudioRenditionGroup?: boolean;
}

/**
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 * @public
 */
export interface MssEncryption {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
 * @public
 */
export interface MssPackage {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   * @public
   */
  Encryption?: MssEncryption;

  /**
   * A list of MSS manifest configurations.
   * @public
   */
  MssManifests: MssManifest[] | undefined;

  /**
   * The duration (in seconds) of each segment.
   * @public
   */
  SegmentDurationSeconds?: number;
}

/**
 * A MediaPackage VOD PackagingConfiguration resource.
 * @public
 */
export interface PackagingConfiguration {
  /**
   * The ARN of the PackagingConfiguration.
   * @public
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage;

  /**
   * The time the PackagingConfiguration was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   * @public
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   * @public
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   * @public
   */
  PackagingGroupId?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * CDN Authorization credentials
 * @public
 */
export interface Authorization {
  /**
   * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
   * @public
   */
  CdnIdentifierSecret: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
   * @public
   */
  SecretsRoleArn: string | undefined;
}

/**
 * Configure egress access logging.
 * @public
 */
export interface EgressAccessLogs {
  /**
   * Customize the log group name.
   * @public
   */
  LogGroupName?: string;
}

/**
 * A MediaPackage VOD PackagingGroup resource.
 * @public
 */
export interface PackagingGroup {
  /**
   * The approximate asset count of the PackagingGroup.
   * @public
   */
  ApproximateAssetCount?: number;

  /**
   * The ARN of the PackagingGroup.
   * @public
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization;

  /**
   * The time the PackagingGroup was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   * @public
   */
  DomainName?: string;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * The ID of the PackagingGroup.
   * @public
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * The option to configure log subscription.
 * @public
 */
export interface ConfigureLogsRequest {
  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * The ID of a MediaPackage VOD PackagingGroup resource.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface ConfigureLogsResponse {
  /**
   * The ARN of the PackagingGroup.
   * @public
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization;

  /**
   * The time the PackagingGroup was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   * @public
   */
  DomainName?: string;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * The ID of the PackagingGroup.
   * @public
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * The client is not authorized to access the requested resource.
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
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
 * An unexpected error occurred.
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
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
 * The requested resource does not exist.
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
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
 * An unexpected error occurred.
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The client has exceeded their resource or throttling limits.
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
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
 * The parameters sent in the request are not valid.
 * @public
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

/**
 * A new MediaPackage VOD Asset configuration.
 * @public
 */
export interface CreateAssetRequest {
  /**
   * The unique identifier for the Asset.
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the PackagingGroup for the Asset.
   * @public
   */
  PackagingGroupId: string | undefined;

  /**
   * The resource ID to include in SPEKE key requests.
   * @public
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   * @public
   */
  SourceRoleArn: string | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAssetResponse {
  /**
   * The ARN of the Asset.
   * @public
   */
  Arn?: string;

  /**
   * The time the Asset was initially submitted for Ingest.
   * @public
   */
  CreatedAt?: string;

  /**
   * The list of egress endpoints available for the Asset.
   * @public
   */
  EgressEndpoints?: EgressEndpoint[];

  /**
   * The unique identifier for the Asset.
   * @public
   */
  Id?: string;

  /**
   * The ID of the PackagingGroup for the Asset.
   * @public
   */
  PackagingGroupId?: string;

  /**
   * The resource ID to include in SPEKE key requests.
   * @public
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   * @public
   */
  SourceArn?: string;

  /**
   * The IAM role_arn used to access the source S3 bucket.
   * @public
   */
  SourceRoleArn?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * A new MediaPackage VOD PackagingConfiguration resource configuration.
 * @public
 */
export interface CreatePackagingConfigurationRequest {
  /**
   * A CMAF packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   * @public
   */
  Id: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   * @public
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   * @public
   */
  PackagingGroupId: string | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePackagingConfigurationResponse {
  /**
   * The ARN of the PackagingConfiguration.
   * @public
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage;

  /**
   * The time the PackagingConfiguration was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   * @public
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   * @public
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   * @public
   */
  PackagingGroupId?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * A new MediaPackage VOD PackagingGroup resource configuration.
 * @public
 */
export interface CreatePackagingGroupRequest {
  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * The ID of the PackagingGroup.
   * @public
   */
  Id: string | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePackagingGroupResponse {
  /**
   * The ARN of the PackagingGroup.
   * @public
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization;

  /**
   * The time the PackagingGroup was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   * @public
   */
  DomainName?: string;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * The ID of the PackagingGroup.
   * @public
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * The ID of the MediaPackage VOD Asset resource to delete.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetResponse {}

/**
 * @public
 */
export interface DeletePackagingConfigurationRequest {
  /**
   * The ID of the MediaPackage VOD PackagingConfiguration resource to delete.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeletePackagingConfigurationResponse {}

/**
 * @public
 */
export interface DeletePackagingGroupRequest {
  /**
   * The ID of the MediaPackage VOD PackagingGroup resource to delete.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeletePackagingGroupResponse {}

/**
 * @public
 */
export interface DescribeAssetRequest {
  /**
   * The ID of an MediaPackage VOD Asset resource.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetResponse {
  /**
   * The ARN of the Asset.
   * @public
   */
  Arn?: string;

  /**
   * The time the Asset was initially submitted for Ingest.
   * @public
   */
  CreatedAt?: string;

  /**
   * The list of egress endpoints available for the Asset.
   * @public
   */
  EgressEndpoints?: EgressEndpoint[];

  /**
   * The unique identifier for the Asset.
   * @public
   */
  Id?: string;

  /**
   * The ID of the PackagingGroup for the Asset.
   * @public
   */
  PackagingGroupId?: string;

  /**
   * The resource ID to include in SPEKE key requests.
   * @public
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   * @public
   */
  SourceArn?: string;

  /**
   * The IAM role_arn used to access the source S3 bucket.
   * @public
   */
  SourceRoleArn?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribePackagingConfigurationRequest {
  /**
   * The ID of a MediaPackage VOD PackagingConfiguration resource.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribePackagingConfigurationResponse {
  /**
   * The ARN of the PackagingConfiguration.
   * @public
   */
  Arn?: string;

  /**
   * A CMAF packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage;

  /**
   * The time the PackagingConfiguration was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the PackagingConfiguration.
   * @public
   */
  Id?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   * @public
   */
  MssPackage?: MssPackage;

  /**
   * The ID of a PackagingGroup.
   * @public
   */
  PackagingGroupId?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribePackagingGroupRequest {
  /**
   * The ID of a MediaPackage VOD PackagingGroup resource.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribePackagingGroupResponse {
  /**
   * The approximate asset count of the PackagingGroup.
   * @public
   */
  ApproximateAssetCount?: number;

  /**
   * The ARN of the PackagingGroup.
   * @public
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization;

  /**
   * The time the PackagingGroup was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   * @public
   */
  DomainName?: string;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * The ID of the PackagingGroup.
   * @public
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListAssetsRequest {
  /**
   * Upper bound on number of records to return.
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   * @public
   */
  NextToken?: string;

  /**
   * Returns Assets associated with the specified PackagingGroup.
   * @public
   */
  PackagingGroupId?: string;
}

/**
 * @public
 */
export interface ListAssetsResponse {
  /**
   * A list of MediaPackage VOD Asset resources.
   * @public
   */
  Assets?: AssetShallow[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPackagingConfigurationsRequest {
  /**
   * Upper bound on number of records to return.
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   * @public
   */
  NextToken?: string;

  /**
   * Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.
   * @public
   */
  PackagingGroupId?: string;
}

/**
 * @public
 */
export interface ListPackagingConfigurationsResponse {
  /**
   * A token that can be used to resume pagination from the end of the collection.
   * @public
   */
  NextToken?: string;

  /**
   * A list of MediaPackage VOD PackagingConfiguration resources.
   * @public
   */
  PackagingConfigurations?: PackagingConfiguration[];
}

/**
 * @public
 */
export interface ListPackagingGroupsRequest {
  /**
   * Upper bound on number of records to return.
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPackagingGroupsResponse {
  /**
   * A token that can be used to resume pagination from the end of the collection.
   * @public
   */
  NextToken?: string;

  /**
   * A list of MediaPackage VOD PackagingGroup resources.
   * @public
   */
  PackagingGroups?: PackagingGroup[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A comma-separated list of the tag keys to remove from the resource.
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * A MediaPackage VOD PackagingGroup resource configuration.
 * @public
 */
export interface UpdatePackagingGroupRequest {
  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization;

  /**
   * The ID of a MediaPackage VOD PackagingGroup resource.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface UpdatePackagingGroupResponse {
  /**
   * The approximate asset count of the PackagingGroup.
   * @public
   */
  ApproximateAssetCount?: number;

  /**
   * The ARN of the PackagingGroup.
   * @public
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization;

  /**
   * The time the PackagingGroup was created.
   * @public
   */
  CreatedAt?: string;

  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   * @public
   */
  DomainName?: string;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * The ID of the PackagingGroup.
   * @public
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string>;
}
