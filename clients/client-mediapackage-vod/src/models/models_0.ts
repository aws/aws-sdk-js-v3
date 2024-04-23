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
 * @public
 * A MediaPackage VOD Asset resource.
 */
export interface AssetShallow {
  /**
   * @public
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * @public
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * @public
   * The unique identifier for the Asset.
   */
  Id?: string;

  /**
   * @public
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId?: string;

  /**
   * @public
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * @public
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * @public
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn?: string;

  /**
   * @public
   * A collection of tags associated with a resource
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
 * @public
 * A StreamSelection configuration.
 */
export interface StreamSelection {
  /**
   * @public
   * The maximum video bitrate (bps) to include in output.
   */
  MaxVideoBitsPerSecond?: number;

  /**
   * @public
   * The minimum video bitrate (bps) to include in output.
   */
  MinVideoBitsPerSecond?: number;

  /**
   * @public
   * A directive that determines the order of streams in the output.
   */
  StreamOrder?: StreamOrder;
}

/**
 * @public
 * A DASH manifest configuration.
 */
export interface DashManifest {
  /**
   * @public
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: ManifestLayout;

  /**
   * @public
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * @public
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * @public
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: Profile;

  /**
   * @public
   * The source of scte markers used. When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.
   */
  ScteMarkersSource?: ScteMarkersSource;

  /**
   * @public
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

/**
 * @public
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 */
export interface EgressEndpoint {
  /**
   * @public
   * The ID of the PackagingConfiguration being applied to the Asset.
   */
  PackagingConfigurationId?: string;

  /**
   * @public
   * The current processing status of the asset used for the packaging configuration. The status can be either QUEUED, PROCESSING, PLAYABLE, or FAILED. Status information won't be available for most assets ingested before 2021-09-30.
   */
  Status?: string;

  /**
   * @public
   * The URL of the parent manifest for the repackaged Asset.
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
 * @public
 * An HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifest {
  /**
   * @public
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   */
  AdMarkers?: AdMarkers;

  /**
   * @public
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * @public
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * @public
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * @public
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

  /**
   * @public
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

/**
 * @public
 * A Microsoft Smooth Streaming (MSS) manifest configuration.
 */
export interface MssManifest {
  /**
   * @public
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;

  /**
   * @public
   * A StreamSelection configuration.
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
 * @public
 * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
 * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
 * To configure the encryption contract, specify which audio and video encryption presets to use.
 * Note the following considerations when using encryptionContractConfiguration:
 * encryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
 * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
 */
export interface EncryptionContractConfiguration {
  /**
   * @public
   * A collection of audio encryption presets.
   */
  PresetSpeke20Audio: PresetSpeke20Audio | undefined;

  /**
   * @public
   * A collection of video encryption presets.
   */
  PresetSpeke20Video: PresetSpeke20Video | undefined;
}

/**
 * @public
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface SpekeKeyProvider {
  /**
   * @public
   * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
   * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
   * To configure the encryption contract, specify which audio and video encryption presets to use.
   * Note the following considerations when using encryptionContractConfiguration:
   * encryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
   * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration;

  /**
   * @public
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
   * MediaPackage will assume when accessing the key provider service.
   */
  RoleArn: string | undefined;

  /**
   * @public
   * The system IDs to include in key requests.
   */
  SystemIds: string[] | undefined;

  /**
   * @public
   * The URL of the external key provider service.
   */
  Url: string | undefined;
}

/**
 * @public
 * A CMAF encryption configuration.
 */
export interface CmafEncryption {
  /**
   * @public
   * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
   */
  ConstantInitializationVector?: string;

  /**
   * @public
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * @public
 * A CMAF packaging configuration.
 */
export interface CmafPackage {
  /**
   * @public
   * A CMAF encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * @public
   * A list of HLS manifest configurations.
   */
  HlsManifests: HlsManifest[] | undefined;

  /**
   * @public
   * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   */
  IncludeEncoderConfigurationInSegments?: boolean;

  /**
   * @public
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
}

/**
 * @public
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface DashEncryption {
  /**
   * @public
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
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
 * @public
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
  /**
   * @public
   * A list of DASH manifest configurations.
   */
  DashManifests: DashManifest[] | undefined;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;

  /**
   * @public
   * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   */
  IncludeEncoderConfigurationInSegments?: boolean;

  /**
   * @public
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * @public
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Asset contains SCTE-35 ad markers.
   */
  PeriodTriggers?: __PeriodTriggersElement[];

  /**
   * @public
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * @public
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
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
 * @public
 * An HTTP Live Streaming (HLS) encryption configuration.
 */
export interface HlsEncryption {
  /**
   * @public
   * A constant initialization vector for encryption (optional).
   * When not specified the initialization vector will be periodically rotated.
   */
  ConstantInitializationVector?: string;

  /**
   * @public
   * The encryption method to use.
   */
  EncryptionMethod?: EncryptionMethod;

  /**
   * @public
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * @public
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface HlsPackage {
  /**
   * @public
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;

  /**
   * @public
   * A list of HLS manifest configurations.
   */
  HlsManifests: HlsManifest[] | undefined;

  /**
   * @public
   * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   */
  IncludeDvbSubtitles?: boolean;

  /**
   * @public
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * @public
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
}

/**
 * @public
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 */
export interface MssEncryption {
  /**
   * @public
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * @public
 * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
 */
export interface MssPackage {
  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: MssEncryption;

  /**
   * @public
   * A list of MSS manifest configurations.
   */
  MssManifests: MssManifest[] | undefined;

  /**
   * @public
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;
}

/**
 * @public
 * A MediaPackage VOD PackagingConfiguration resource.
 */
export interface PackagingConfiguration {
  /**
   * @public
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * @public
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * The time the PackagingConfiguration was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * CDN Authorization credentials
 */
export interface Authorization {
  /**
   * @public
   * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
   */
  CdnIdentifierSecret: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
   */
  SecretsRoleArn: string | undefined;
}

/**
 * @public
 * Configure egress access logging.
 */
export interface EgressAccessLogs {
  /**
   * @public
   * Customize the log group name.
   */
  LogGroupName?: string;
}

/**
 * @public
 * A MediaPackage VOD PackagingGroup resource.
 */
export interface PackagingGroup {
  /**
   * @public
   * The approximate asset count of the PackagingGroup.
   */
  ApproximateAssetCount?: number;

  /**
   * @public
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The time the PackagingGroup was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of the PackagingGroup.
   */
  Id?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * The option to configure log subscription.
 */
export interface ConfigureLogsRequest {
  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of a MediaPackage VOD PackagingGroup resource.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface ConfigureLogsResponse {
  /**
   * @public
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The time the PackagingGroup was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of the PackagingGroup.
   */
  Id?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * The client is not authorized to access the requested resource.
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
 * @public
 * An unexpected error occurred.
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
 * @public
 * The requested resource does not exist.
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
 * @public
 * An unexpected error occurred.
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
 * @public
 * The client has exceeded their resource or throttling limits.
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
 * @public
 * The parameters sent in the request are not valid.
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
 * @public
 * A new MediaPackage VOD Asset configuration.
 */
export interface CreateAssetRequest {
  /**
   * @public
   * The unique identifier for the Asset.
   */
  Id: string | undefined;

  /**
   * @public
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId: string | undefined;

  /**
   * @public
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * @public
   * ARN of the source object in S3.
   */
  SourceArn: string | undefined;

  /**
   * @public
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn: string | undefined;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAssetResponse {
  /**
   * @public
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * @public
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * @public
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];

  /**
   * @public
   * The unique identifier for the Asset.
   */
  Id?: string;

  /**
   * @public
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId?: string;

  /**
   * @public
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * @public
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * @public
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * A new MediaPackage VOD PackagingConfiguration resource configuration.
 */
export interface CreatePackagingConfigurationRequest {
  /**
   * @public
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the PackagingConfiguration.
   */
  Id: string | undefined;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * The ID of a PackagingGroup.
   */
  PackagingGroupId: string | undefined;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePackagingConfigurationResponse {
  /**
   * @public
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * @public
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * The time the PackagingConfiguration was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * A new MediaPackage VOD PackagingGroup resource configuration.
 */
export interface CreatePackagingGroupRequest {
  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of the PackagingGroup.
   */
  Id: string | undefined;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePackagingGroupResponse {
  /**
   * @public
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The time the PackagingGroup was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of the PackagingGroup.
   */
  Id?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * @public
   * The ID of the MediaPackage VOD Asset resource to delete.
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
   * @public
   * The ID of the MediaPackage VOD PackagingConfiguration resource to delete.
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
   * @public
   * The ID of the MediaPackage VOD PackagingGroup resource to delete.
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
   * @public
   * The ID of an MediaPackage VOD Asset resource.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetResponse {
  /**
   * @public
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * @public
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;

  /**
   * @public
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];

  /**
   * @public
   * The unique identifier for the Asset.
   */
  Id?: string;

  /**
   * @public
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId?: string;

  /**
   * @public
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * @public
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * @public
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribePackagingConfigurationRequest {
  /**
   * @public
   * The ID of a MediaPackage VOD PackagingConfiguration resource.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribePackagingConfigurationResponse {
  /**
   * @public
   * The ARN of the PackagingConfiguration.
   */
  Arn?: string;

  /**
   * @public
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * The time the PackagingConfiguration was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the PackagingConfiguration.
   */
  Id?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * The ID of a PackagingGroup.
   */
  PackagingGroupId?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribePackagingGroupRequest {
  /**
   * @public
   * The ID of a MediaPackage VOD PackagingGroup resource.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribePackagingGroupResponse {
  /**
   * @public
   * The approximate asset count of the PackagingGroup.
   */
  ApproximateAssetCount?: number;

  /**
   * @public
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The time the PackagingGroup was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of the PackagingGroup.
   */
  Id?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListAssetsRequest {
  /**
   * @public
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * @public
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * @public
   * Returns Assets associated with the specified PackagingGroup.
   */
  PackagingGroupId?: string;
}

/**
 * @public
 */
export interface ListAssetsResponse {
  /**
   * @public
   * A list of MediaPackage VOD Asset resources.
   */
  Assets?: AssetShallow[];

  /**
   * @public
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPackagingConfigurationsRequest {
  /**
   * @public
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * @public
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * @public
   * Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.
   */
  PackagingGroupId?: string;
}

/**
 * @public
 */
export interface ListPackagingConfigurationsResponse {
  /**
   * @public
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * @public
   * A list of MediaPackage VOD PackagingConfiguration resources.
   */
  PackagingConfigurations?: PackagingConfiguration[];
}

/**
 * @public
 */
export interface ListPackagingGroupsRequest {
  /**
   * @public
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * @public
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPackagingGroupsResponse {
  /**
   * @public
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * @public
   * A list of MediaPackage VOD PackagingGroup resources.
   */
  PackagingGroups?: PackagingGroup[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * A comma-separated list of the tag keys to remove from the resource.
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * A MediaPackage VOD PackagingGroup resource configuration.
 */
export interface UpdatePackagingGroupRequest {
  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The ID of a MediaPackage VOD PackagingGroup resource.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface UpdatePackagingGroupResponse {
  /**
   * @public
   * The approximate asset count of the PackagingGroup.
   */
  ApproximateAssetCount?: number;

  /**
   * @public
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The time the PackagingGroup was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of the PackagingGroup.
   */
  Id?: string;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}
