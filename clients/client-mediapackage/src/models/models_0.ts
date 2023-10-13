// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MediaPackageServiceException as __BaseException } from "./MediaPackageServiceException";

/**
 * @public
 * @enum
 */
export const __AdTriggersElement = {
  BREAK: "BREAK",
  DISTRIBUTOR_ADVERTISEMENT: "DISTRIBUTOR_ADVERTISEMENT",
  DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY: "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
  DISTRIBUTOR_PLACEMENT_OPPORTUNITY: "DISTRIBUTOR_PLACEMENT_OPPORTUNITY",
  PROVIDER_ADVERTISEMENT: "PROVIDER_ADVERTISEMENT",
  PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY: "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY",
  PROVIDER_PLACEMENT_OPPORTUNITY: "PROVIDER_PLACEMENT_OPPORTUNITY",
  SPLICE_INSERT: "SPLICE_INSERT",
} as const;

/**
 * @public
 */
export type __AdTriggersElement = (typeof __AdTriggersElement)[keyof typeof __AdTriggersElement];

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
 * An endpoint for ingesting source content for a Channel.
 */
export interface IngestEndpoint {
  /**
   * @public
   * The system generated unique identifier for the IngestEndpoint
   */
  Id?: string;

  /**
   * @public
   * The system generated password for ingest authentication.
   */
  Password?: string;

  /**
   * @public
   * The ingest URL to which the source stream should be sent.
   */
  Url?: string;

  /**
   * @public
   * The system generated username for ingest authentication.
   */
  Username?: string;
}

/**
 * @public
 * An HTTP Live Streaming (HLS) ingest resource configuration.
 */
export interface HlsIngest {
  /**
   * @public
   * A list of endpoints to which the source stream should be sent.
   */
  IngestEndpoints?: IngestEndpoint[];
}

/**
 * @public
 * Configure ingress access logging.
 */
export interface IngressAccessLogs {
  /**
   * @public
   * Customize the log group name.
   */
  LogGroupName?: string;
}

/**
 * @public
 * A Channel resource configuration.
 */
export interface Channel {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * @public
   * The date and time the Channel was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * @public
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Configuration parameters for where in an S3 bucket to place the harvested content
 */
export interface S3Destination {
  /**
   * @public
   * The name of an S3 bucket within which harvested content will be exported
   */
  BucketName: string | undefined;

  /**
   * @public
   * The key in the specified S3 bucket where the harvested top-level manifest will be placed.
   */
  ManifestKey: string | undefined;

  /**
   * @public
   * The IAM role used to write to the specified S3 bucket
   */
  RoleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * A HarvestJob resource configuration
 */
export interface HarvestJob {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   */
  Arn?: string;

  /**
   * @public
   * The ID of the Channel that the HarvestJob will harvest from.
   */
  ChannelId?: string;

  /**
   * @public
   * The date and time the HarvestJob was submitted.
   */
  CreatedAt?: string;

  /**
   * @public
   * The end of the time-window which will be harvested.
   */
  EndTime?: string;

  /**
   * @public
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   */
  Id?: string;

  /**
   * @public
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId?: string;

  /**
   * @public
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination?: S3Destination;

  /**
   * @public
   * The start of the time-window which will be harvested.
   */
  StartTime?: string;

  /**
   * @public
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   */
  Status?: Status;
}

/**
 * @public
 * @enum
 */
export const AdMarkers = {
  DATERANGE: "DATERANGE",
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
 * @enum
 */
export const AdsOnDeliveryRestrictions = {
  BOTH: "BOTH",
  NONE: "NONE",
  RESTRICTED: "RESTRICTED",
  UNRESTRICTED: "UNRESTRICTED",
} as const;

/**
 * @public
 */
export type AdsOnDeliveryRestrictions = (typeof AdsOnDeliveryRestrictions)[keyof typeof AdsOnDeliveryRestrictions];

/**
 * @public
 * @enum
 */
export const PlaylistType = {
  EVENT: "EVENT",
  NONE: "NONE",
  VOD: "VOD",
} as const;

/**
 * @public
 */
export type PlaylistType = (typeof PlaylistType)[keyof typeof PlaylistType];

/**
 * @public
 * A HTTP Live Streaming (HLS) manifest configuration.
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
   * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
   * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
   * that is greater than 0.
   */
  AdMarkers?: AdMarkers;

  /**
   * @public
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string | undefined;

  /**
   * @public
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * @public
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;

  /**
   * @public
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   */
  PlaylistType?: PlaylistType;

  /**
   * @public
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

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
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * @public
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   */
  AdTriggers?: __AdTriggersElement[];

  /**
   * @public
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
}

/**
 * @public
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifestCreateOrUpdateParameters {
  /**
   * @public
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
   * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
   * that is greater than 0.
   */
  AdMarkers?: AdMarkers;

  /**
   * @public
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   */
  AdTriggers?: __AdTriggersElement[];

  /**
   * @public
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;

  /**
   * @public
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string | undefined;

  /**
   * @public
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * @public
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;

  /**
   * @public
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   */
  PlaylistType?: PlaylistType;

  /**
   * @public
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

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
}

/**
 * @public
 * CDN Authorization credentials
 */
export interface Authorization {
  /**
   * @public
   * The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
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
 * @enum
 */
export const CmafEncryptionMethod = {
  AES_CTR: "AES_CTR",
  SAMPLE_AES: "SAMPLE_AES",
} as const;

/**
 * @public
 */
export type CmafEncryptionMethod = (typeof CmafEncryptionMethod)[keyof typeof CmafEncryptionMethod];

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
 * encryptionContractConfiguration can be used for DASH or CMAF endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
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
   * An Amazon Resource Name (ARN) of a Certificate Manager certificate
   * that MediaPackage will use for enforcing secure end-to-end data
   * transfer with the key provider service.
   */
  CertificateArn?: string;

  /**
   * @public
   * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
   * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
   * To configure the encryption contract, specify which audio and video encryption presets to use.
   * Note the following considerations when using encryptionContractConfiguration:
   * encryptionContractConfiguration can be used for DASH or CMAF endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
   * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration;

  /**
   * @public
   * The resource ID to include in key requests.
   */
  ResourceId: string | undefined;

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
 * A Common Media Application Format (CMAF) encryption configuration.
 */
export interface CmafEncryption {
  /**
   * @public
   * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
   */
  ConstantInitializationVector?: string;

  /**
   * @public
   * The encryption method to use.
   */
  EncryptionMethod?: CmafEncryptionMethod;

  /**
   * @public
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

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
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackage {
  /**
   * @public
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * @public
   * A list of HLS manifest configurations
   */
  HlsManifests?: HlsManifest[];

  /**
   * @public
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * @public
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;

  /**
   * @public
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

/**
 * @public
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface DashEncryption {
  /**
   * @public
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

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
  DVB_DASH_2014: "DVB_DASH_2014",
  HBBTV_1_5: "HBBTV_1_5",
  HYBRIDCAST: "HYBRIDCAST",
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
 * @enum
 */
export const UtcTiming = {
  HTTP_HEAD: "HTTP-HEAD",
  HTTP_ISO: "HTTP-ISO",
  HTTP_XSDATE: "HTTP-XSDATE",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type UtcTiming = (typeof UtcTiming)[keyof typeof UtcTiming];

/**
 * @public
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
  /**
   * @public
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   */
  AdTriggers?: __AdTriggersElement[];

  /**
   * @public
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;

  /**
   * @public
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * @public
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: ManifestLayout;

  /**
   * @public
   * Time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * @public
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * @public
   * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
   */
  MinUpdatePeriodSeconds?: number;

  /**
   * @public
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Channel source contains SCTE-35 ad markers.
   */
  PeriodTriggers?: __PeriodTriggersElement[];

  /**
   * @public
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. When set to "DVB-DASH_2014", DVB-DASH 2014 compliant output is enabled.
   */
  Profile?: Profile;

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

  /**
   * @public
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * @public
   * Duration (in seconds) to delay live content before presentation.
   */
  SuggestedPresentationDelaySeconds?: number;

  /**
   * @public
   * Determines the type of UTCTiming included in the Media Presentation Description (MPD)
   */
  UtcTiming?: UtcTiming;

  /**
   * @public
   * Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE
   */
  UtcTimingUri?: string;
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
   * Interval (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * @public
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

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
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
   * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
   * that is greater than 0.
   */
  AdMarkers?: AdMarkers;

  /**
   * @public
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   */
  AdTriggers?: __AdTriggersElement[];

  /**
   * @public
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;

  /**
   * @public
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;

  /**
   * @public
   * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   */
  IncludeDvbSubtitles?: boolean;

  /**
   * @public
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * @public
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   */
  PlaylistType?: PlaylistType;

  /**
   * @public
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

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
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * @public
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

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
 * A Microsoft Smooth Streaming (MSS) packaging configuration.
 */
export interface MssPackage {
  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: MssEncryption;

  /**
   * @public
   * The time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * @public
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;

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
export const Origination = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type Origination = (typeof Origination)[keyof typeof Origination];

/**
 * @public
 * An OriginEndpoint resource configuration.
 */
export interface OriginEndpoint {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * @public
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * The date and time the OriginEndpoint was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * @public
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination;

  /**
   * @public
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * @public
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * @public
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

/**
 * @public
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackageCreateOrUpdateParameters {
  /**
   * @public
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * @public
   * A list of HLS manifest configurations
   */
  HlsManifests?: HlsManifestCreateOrUpdateParameters[];

  /**
   * @public
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * @public
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;

  /**
   * @public
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

/**
 * @public
 * the option to configure log subscription.
 */
export interface ConfigureLogsRequest {
  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * The ID of the channel to log subscription.
   */
  Id: string | undefined;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;
}

/**
 * @public
 */
export interface ConfigureLogsResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * @public
   * The date and time the Channel was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * @public
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;

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
 * A new Channel configuration.
 */
export interface CreateChannelRequest {
  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * The ID of the Channel. The ID must be unique within the region and it
   * cannot be changed after a Channel is created.
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
export interface CreateChannelResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * @public
   * The date and time the Channel was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * @public
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Configuration parameters used to create a new HarvestJob.
 */
export interface CreateHarvestJobRequest {
  /**
   * @public
   * The end of the time-window which will be harvested
   */
  EndTime: string | undefined;

  /**
   * @public
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted
   */
  Id: string | undefined;

  /**
   * @public
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId: string | undefined;

  /**
   * @public
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination: S3Destination | undefined;

  /**
   * @public
   * The start of the time-window which will be harvested
   */
  StartTime: string | undefined;
}

/**
 * @public
 */
export interface CreateHarvestJobResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   */
  Arn?: string;

  /**
   * @public
   * The ID of the Channel that the HarvestJob will harvest from.
   */
  ChannelId?: string;

  /**
   * @public
   * The date and time the HarvestJob was submitted.
   */
  CreatedAt?: string;

  /**
   * @public
   * The end of the time-window which will be harvested.
   */
  EndTime?: string;

  /**
   * @public
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   */
  Id?: string;

  /**
   * @public
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId?: string;

  /**
   * @public
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination?: S3Destination;

  /**
   * @public
   * The start of the time-window which will be harvested.
   */
  StartTime?: string;

  /**
   * @public
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   */
  Status?: Status;
}

/**
 * @public
 * Configuration parameters used to create a new OriginEndpoint.
 */
export interface CreateOriginEndpointRequest {
  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The ID of the Channel that the OriginEndpoint will be associated with.
   * This cannot be changed after the OriginEndpoint is created.
   */
  ChannelId: string | undefined;

  /**
   * @public
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the OriginEndpoint.  The ID must be unique within the region
   * and it cannot be changed after the OriginEndpoint is created.
   */
  Id: string | undefined;

  /**
   * @public
   * A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").
   */
  ManifestName?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination;

  /**
   * @public
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * @public
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

/**
 * @public
 */
export interface CreateOriginEndpointResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * @public
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * The date and time the OriginEndpoint was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * @public
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination;

  /**
   * @public
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * @public
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * @public
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * @public
   * The ID of the Channel to delete.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelResponse {}

/**
 * @public
 */
export interface DeleteOriginEndpointRequest {
  /**
   * @public
   * The ID of the OriginEndpoint to delete.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointResponse {}

/**
 * @public
 */
export interface DescribeChannelRequest {
  /**
   * @public
   * The ID of a Channel.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * @public
   * The date and time the Channel was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * @public
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeHarvestJobRequest {
  /**
   * @public
   * The ID of the HarvestJob.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeHarvestJobResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   */
  Arn?: string;

  /**
   * @public
   * The ID of the Channel that the HarvestJob will harvest from.
   */
  ChannelId?: string;

  /**
   * @public
   * The date and time the HarvestJob was submitted.
   */
  CreatedAt?: string;

  /**
   * @public
   * The end of the time-window which will be harvested.
   */
  EndTime?: string;

  /**
   * @public
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   */
  Id?: string;

  /**
   * @public
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId?: string;

  /**
   * @public
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination?: S3Destination;

  /**
   * @public
   * The start of the time-window which will be harvested.
   */
  StartTime?: string;

  /**
   * @public
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   */
  Status?: Status;
}

/**
 * @public
 */
export interface DescribeOriginEndpointRequest {
  /**
   * @public
   * The ID of the OriginEndpoint.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeOriginEndpointResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * @public
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * The date and time the OriginEndpoint was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * @public
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination;

  /**
   * @public
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * @public
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * @public
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

/**
 * @public
 */
export interface ListChannelsRequest {
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
export interface ListChannelsResponse {
  /**
   * @public
   * A list of Channel records.
   */
  Channels?: Channel[];

  /**
   * @public
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHarvestJobsRequest {
  /**
   * @public
   * When specified, the request will return only HarvestJobs associated with the given Channel ID.
   */
  IncludeChannelId?: string;

  /**
   * @public
   * When specified, the request will return only HarvestJobs in the given status.
   */
  IncludeStatus?: string;

  /**
   * @public
   * The upper bound on the number of records to return.
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
export interface ListHarvestJobsResponse {
  /**
   * @public
   * A list of HarvestJob records.
   */
  HarvestJobs?: HarvestJob[];

  /**
   * @public
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOriginEndpointsRequest {
  /**
   * @public
   * When specified, the request will return only OriginEndpoints associated with the given Channel ID.
   */
  ChannelId?: string;

  /**
   * @public
   * The upper bound on the number of records to return.
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
export interface ListOriginEndpointsResponse {
  /**
   * @public
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * @public
   * A list of OriginEndpoint records.
   */
  OriginEndpoints?: OriginEndpoint[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RotateChannelCredentialsRequest {
  /**
   * @public
   * The ID of the channel to update.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface RotateChannelCredentialsResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * @public
   * The date and time the Channel was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * @public
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RotateIngestEndpointCredentialsRequest {
  /**
   * @public
   * The ID of the channel the IngestEndpoint is on.
   */
  Id: string | undefined;

  /**
   * @public
   * The id of the IngestEndpoint whose credentials should be rotated
   */
  IngestEndpointId: string | undefined;
}

/**
 * @public
 */
export interface RotateIngestEndpointCredentialsResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * @public
   * The date and time the Channel was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * @public
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;

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
  ResourceArn: string | undefined;
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  ResourceArn: string | undefined;
  /**
   * @public
   * The key(s) of tag to be deleted
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * Configuration parameters used to update the Channel.
 */
export interface UpdateChannelRequest {
  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * The ID of the Channel to update.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * @public
   * The date and time the Channel was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * @public
   * Configure egress access logging.
   */
  EgressAccessLogs?: EgressAccessLogs;

  /**
   * @public
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * @public
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * @public
   * Configure ingress access logging.
   */
  IngressAccessLogs?: IngressAccessLogs;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Configuration parameters used to update an existing OriginEndpoint.
 */
export interface UpdateOriginEndpointRequest {
  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the OriginEndpoint to update.
   */
  Id: string | undefined;

  /**
   * @public
   * A short string that will be appended to the end of the Endpoint URL.
   */
  ManifestName?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination;

  /**
   * @public
   * Maximum duration (in seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * @public
   * Amount of delay (in seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * @public
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

/**
 * @public
 */
export interface UpdateOriginEndpointResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * @public
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * @public
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * @public
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * @public
   * The date and time the OriginEndpoint was created.
   */
  CreatedAt?: string;

  /**
   * @public
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * @public
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * @public
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * @public
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * @public
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * @public
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * @public
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination;

  /**
   * @public
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * @public
   * A collection of tags associated with a resource
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * @public
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * @public
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

/**
 * @internal
 */
export const IngestEndpointFilterSensitiveLog = (obj: IngestEndpoint): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HlsIngestFilterSensitiveLog = (obj: HlsIngest): any => ({
  ...obj,
  ...(obj.IngestEndpoints && {
    IngestEndpoints: obj.IngestEndpoints.map((item) => IngestEndpointFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ChannelFilterSensitiveLog = (obj: Channel): any => ({
  ...obj,
  ...(obj.HlsIngest && { HlsIngest: HlsIngestFilterSensitiveLog(obj.HlsIngest) }),
});

/**
 * @internal
 */
export const ConfigureLogsResponseFilterSensitiveLog = (obj: ConfigureLogsResponse): any => ({
  ...obj,
  ...(obj.HlsIngest && { HlsIngest: HlsIngestFilterSensitiveLog(obj.HlsIngest) }),
});

/**
 * @internal
 */
export const CreateChannelResponseFilterSensitiveLog = (obj: CreateChannelResponse): any => ({
  ...obj,
  ...(obj.HlsIngest && { HlsIngest: HlsIngestFilterSensitiveLog(obj.HlsIngest) }),
});

/**
 * @internal
 */
export const DescribeChannelResponseFilterSensitiveLog = (obj: DescribeChannelResponse): any => ({
  ...obj,
  ...(obj.HlsIngest && { HlsIngest: HlsIngestFilterSensitiveLog(obj.HlsIngest) }),
});

/**
 * @internal
 */
export const ListChannelsResponseFilterSensitiveLog = (obj: ListChannelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RotateChannelCredentialsResponseFilterSensitiveLog = (obj: RotateChannelCredentialsResponse): any => ({
  ...obj,
  ...(obj.HlsIngest && { HlsIngest: HlsIngestFilterSensitiveLog(obj.HlsIngest) }),
});

/**
 * @internal
 */
export const RotateIngestEndpointCredentialsResponseFilterSensitiveLog = (
  obj: RotateIngestEndpointCredentialsResponse
): any => ({
  ...obj,
  ...(obj.HlsIngest && { HlsIngest: HlsIngestFilterSensitiveLog(obj.HlsIngest) }),
});

/**
 * @internal
 */
export const UpdateChannelResponseFilterSensitiveLog = (obj: UpdateChannelResponse): any => ({
  ...obj,
  ...(obj.HlsIngest && { HlsIngest: HlsIngestFilterSensitiveLog(obj.HlsIngest) }),
});
