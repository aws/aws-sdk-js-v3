// smithy-typescript generated code
import {
  __AdTriggersElement,
  __PeriodTriggersElement,
  AdMarkers,
  AdsOnDeliveryRestrictions,
  CmafEncryptionMethod,
  EncryptionMethod,
  ManifestLayout,
  Origination,
  PlaylistType,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  Profile,
  SegmentTemplateFormat,
  Status,
  StreamOrder,
  UtcTiming,
} from "./enums";

/**
 * Configure egress access logging.
 * @public
 */
export interface EgressAccessLogs {
  /**
   * Customize the log group name.
   * @public
   */
  LogGroupName?: string | undefined;
}

/**
 * An endpoint for ingesting source content for a Channel.
 * @public
 */
export interface IngestEndpoint {
  /**
   * The system generated unique identifier for the IngestEndpoint
   * @public
   */
  Id?: string | undefined;

  /**
   * The system generated password for ingest authentication.
   * @public
   */
  Password?: string | undefined;

  /**
   * The ingest URL to which the source stream should be sent.
   * @public
   */
  Url?: string | undefined;

  /**
   * The system generated username for ingest authentication.
   * @public
   */
  Username?: string | undefined;
}

/**
 * An HTTP Live Streaming (HLS) ingest resource configuration.
 * @public
 */
export interface HlsIngest {
  /**
   * A list of endpoints to which the source stream should be sent.
   * @public
   */
  IngestEndpoints?: IngestEndpoint[] | undefined;
}

/**
 * Configure ingress access logging.
 * @public
 */
export interface IngressAccessLogs {
  /**
   * Customize the log group name.
   * @public
   */
  LogGroupName?: string | undefined;
}

/**
 * A Channel resource configuration.
 * @public
 */
export interface Channel {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time the Channel was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   * @public
   */
  HlsIngest?: HlsIngest | undefined;

  /**
   * The ID of the Channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Configuration parameters for where in an S3 bucket to place the harvested content
 * @public
 */
export interface S3Destination {
  /**
   * The name of an S3 bucket within which harvested content will be exported
   * @public
   */
  BucketName: string | undefined;

  /**
   * The key in the specified S3 bucket where the harvested top-level manifest will be placed.
   * @public
   */
  ManifestKey: string | undefined;

  /**
   * The IAM role used to write to the specified S3 bucket
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * A HarvestJob resource configuration
 * @public
 */
export interface HarvestJob {
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The date and time the HarvestJob was submitted.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The end of the time-window which will be harvested.
   * @public
   */
  EndTime?: string | undefined;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   * @public
   */
  OriginEndpointId?: string | undefined;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   * @public
   */
  S3Destination?: S3Destination | undefined;

  /**
   * The start of the time-window which will be harvested.
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   * @public
   */
  Status?: Status | undefined;
}

/**
 * A HTTP Live Streaming (HLS) manifest configuration.
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
   * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
   * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
   * that is greater than 0.
   * @public
   */
  AdMarkers?: AdMarkers | undefined;

  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   * @public
   */
  Id: string | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   * @public
   */
  IncludeIframeOnlyStream?: boolean | undefined;

  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   * @public
   */
  PlaylistType?: PlaylistType | undefined;

  /**
   * Time window (in seconds) contained in each parent manifest.
   * @public
   */
  PlaylistWindowSeconds?: number | undefined;

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
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   * @public
   */
  Url?: string | undefined;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   * @public
   */
  AdTriggers?: __AdTriggersElement[] | undefined;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   * @public
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | undefined;
}

/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 * @public
 */
export interface HlsManifestCreateOrUpdateParameters {
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
   * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
   * that is greater than 0.
   * @public
   */
  AdMarkers?: AdMarkers | undefined;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   * @public
   */
  AdTriggers?: __AdTriggersElement[] | undefined;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   * @public
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | undefined;

  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   * @public
   */
  Id: string | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   * @public
   */
  IncludeIframeOnlyStream?: boolean | undefined;

  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   * @public
   */
  PlaylistType?: PlaylistType | undefined;

  /**
   * Time window (in seconds) contained in each parent manifest.
   * @public
   */
  PlaylistWindowSeconds?: number | undefined;

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
  ProgramDateTimeIntervalSeconds?: number | undefined;
}

/**
 * CDN Authorization credentials
 * @public
 */
export interface Authorization {
  /**
   * The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
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
 * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
 * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
 * To configure the encryption contract, specify which audio and video encryption presets to use.
 * Note the following considerations when using encryptionContractConfiguration:
 * encryptionContractConfiguration can be used for DASH or CMAF endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
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
   * An Amazon Resource Name (ARN) of a Certificate Manager certificate
   * that MediaPackage will use for enforcing secure end-to-end data
   * transfer with the key provider service.
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
   * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
   * To configure the encryption contract, specify which audio and video encryption presets to use.
   * Note the following considerations when using encryptionContractConfiguration:
   * encryptionContractConfiguration can be used for DASH or CMAF endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
   * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
   * @public
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration | undefined;

  /**
   * The resource ID to include in key requests.
   * @public
   */
  ResourceId: string | undefined;

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
 * A Common Media Application Format (CMAF) encryption configuration.
 * @public
 */
export interface CmafEncryption {
  /**
   * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * The encryption method to use.
   * @public
   */
  EncryptionMethod?: CmafEncryptionMethod | undefined;

  /**
   * Time (in seconds) between each encryption key rotation.
   * @public
   */
  KeyRotationIntervalSeconds?: number | undefined;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * A StreamSelection configuration.
 * @public
 */
export interface StreamSelection {
  /**
   * The maximum video bitrate (bps) to include in output.
   * @public
   */
  MaxVideoBitsPerSecond?: number | undefined;

  /**
   * The minimum video bitrate (bps) to include in output.
   * @public
   */
  MinVideoBitsPerSecond?: number | undefined;

  /**
   * A directive that determines the order of streams in the output.
   * @public
   */
  StreamOrder?: StreamOrder | undefined;
}

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 * @public
 */
export interface CmafPackage {
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   * @public
   */
  Encryption?: CmafEncryption | undefined;

  /**
   * A list of HLS manifest configurations
   * @public
   */
  HlsManifests?: HlsManifest[] | undefined;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   * @public
   */
  SegmentDurationSeconds?: number | undefined;

  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   * @public
   */
  SegmentPrefix?: string | undefined;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection | undefined;
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 * @public
 */
export interface DashEncryption {
  /**
   * Time (in seconds) between each encryption key rotation.
   * @public
   */
  KeyRotationIntervalSeconds?: number | undefined;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 * @public
 */
export interface DashPackage {
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   * @public
   */
  AdTriggers?: __AdTriggersElement[] | undefined;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   * @public
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   * @public
   */
  Encryption?: DashEncryption | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   * @public
   */
  IncludeIframeOnlyStream?: boolean | undefined;

  /**
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level. When set to DRM_TOP_LEVEL_COMPACT, content protection elements are placed the MPD level and referenced at the AdaptationSet level.
   * @public
   */
  ManifestLayout?: ManifestLayout | undefined;

  /**
   * Time window (in seconds) contained in each manifest.
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   * @public
   */
  MinBufferTimeSeconds?: number | undefined;

  /**
   * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
   * @public
   */
  MinUpdatePeriodSeconds?: number | undefined;

  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Channel source contains SCTE-35 ad markers.
   * @public
   */
  PeriodTriggers?: __PeriodTriggersElement[] | undefined;

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. When set to "DVB-DASH_2014", DVB-DASH 2014 compliant output is enabled.
   * @public
   */
  Profile?: Profile | undefined;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   * @public
   */
  SegmentDurationSeconds?: number | undefined;

  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   * @public
   */
  SegmentTemplateFormat?: SegmentTemplateFormat | undefined;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection | undefined;

  /**
   * Duration (in seconds) to delay live content before presentation.
   * @public
   */
  SuggestedPresentationDelaySeconds?: number | undefined;

  /**
   * Determines the type of UTCTiming included in the Media Presentation Description (MPD)
   * @public
   */
  UtcTiming?: UtcTiming | undefined;

  /**
   * Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE
   * @public
   */
  UtcTimingUri?: string | undefined;
}

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
  ConstantInitializationVector?: string | undefined;

  /**
   * The encryption method to use.
   * @public
   */
  EncryptionMethod?: EncryptionMethod | undefined;

  /**
   * Interval (in seconds) between each encryption key rotation.
   * @public
   */
  KeyRotationIntervalSeconds?: number | undefined;

  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   * @public
   */
  RepeatExtXKey?: boolean | undefined;

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
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
   * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
   * that is greater than 0.
   * @public
   */
  AdMarkers?: AdMarkers | undefined;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   * @public
   */
  AdTriggers?: __AdTriggersElement[] | undefined;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   * @public
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | undefined;

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   * @public
   */
  Encryption?: HlsEncryption | undefined;

  /**
   * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   * @public
   */
  IncludeDvbSubtitles?: boolean | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   * @public
   */
  IncludeIframeOnlyStream?: boolean | undefined;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   * @public
   */
  PlaylistType?: PlaylistType | undefined;

  /**
   * Time window (in seconds) contained in each parent manifest.
   * @public
   */
  PlaylistWindowSeconds?: number | undefined;

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
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   * @public
   */
  SegmentDurationSeconds?: number | undefined;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection | undefined;

  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   * @public
   */
  UseAudioRenditionGroup?: boolean | undefined;
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
 * A Microsoft Smooth Streaming (MSS) packaging configuration.
 * @public
 */
export interface MssPackage {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   * @public
   */
  Encryption?: MssEncryption | undefined;

  /**
   * The time window (in seconds) contained in each manifest.
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * The duration (in seconds) of each segment.
   * @public
   */
  SegmentDurationSeconds?: number | undefined;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection | undefined;
}

/**
 * An OriginEndpoint resource configuration.
 * @public
 */
export interface OriginEndpoint {
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   * @public
   */
  Arn?: string | undefined;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage | undefined;

  /**
   * The date and time the OriginEndpoint was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage | undefined;

  /**
   * A short text description of the OriginEndpoint.
   * @public
   */
  Description?: string | undefined;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage | undefined;

  /**
   * The ID of the OriginEndpoint.
   * @public
   */
  Id?: string | undefined;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   * @public
   */
  MssPackage?: MssPackage | undefined;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   * @public
   */
  Origination?: Origination | undefined;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   * @public
   */
  Url?: string | undefined;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   * @public
   */
  Whitelist?: string[] | undefined;
}

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 * @public
 */
export interface CmafPackageCreateOrUpdateParameters {
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   * @public
   */
  Encryption?: CmafEncryption | undefined;

  /**
   * A list of HLS manifest configurations
   * @public
   */
  HlsManifests?: HlsManifestCreateOrUpdateParameters[] | undefined;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   * @public
   */
  SegmentDurationSeconds?: number | undefined;

  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   * @public
   */
  SegmentPrefix?: string | undefined;

  /**
   * A StreamSelection configuration.
   * @public
   */
  StreamSelection?: StreamSelection | undefined;
}

/**
 * the option to configure log subscription.
 * @public
 */
export interface ConfigureLogsRequest {
  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * The ID of the channel to log subscription.
   * @public
   */
  Id: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;
}

/**
 * @public
 */
export interface ConfigureLogsResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time the Channel was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   * @public
   */
  HlsIngest?: HlsIngest | undefined;

  /**
   * The ID of the Channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * A new Channel configuration.
 * @public
 */
export interface CreateChannelRequest {
  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the Channel. The ID must be unique within the region and it
   * cannot be changed after a Channel is created.
   * @public
   */
  Id: string | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time the Channel was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   * @public
   */
  HlsIngest?: HlsIngest | undefined;

  /**
   * The ID of the Channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Configuration parameters used to create a new HarvestJob.
 * @public
 */
export interface CreateHarvestJobRequest {
  /**
   * The end of the time-window which will be harvested
   * @public
   */
  EndTime: string | undefined;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   * @public
   */
  OriginEndpointId: string | undefined;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   * @public
   */
  S3Destination: S3Destination | undefined;

  /**
   * The start of the time-window which will be harvested
   * @public
   */
  StartTime: string | undefined;
}

/**
 * @public
 */
export interface CreateHarvestJobResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The date and time the HarvestJob was submitted.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The end of the time-window which will be harvested.
   * @public
   */
  EndTime?: string | undefined;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   * @public
   */
  OriginEndpointId?: string | undefined;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   * @public
   */
  S3Destination?: S3Destination | undefined;

  /**
   * The start of the time-window which will be harvested.
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   * @public
   */
  Status?: Status | undefined;
}

/**
 * Configuration parameters used to create a new OriginEndpoint.
 * @public
 */
export interface CreateOriginEndpointRequest {
  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The ID of the Channel that the OriginEndpoint will be associated with.
   * This cannot be changed after the OriginEndpoint is created.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage | undefined;

  /**
   * A short text description of the OriginEndpoint.
   * @public
   */
  Description?: string | undefined;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage | undefined;

  /**
   * The ID of the OriginEndpoint.  The ID must be unique within the region
   * and it cannot be changed after the OriginEndpoint is created.
   * @public
   */
  Id: string | undefined;

  /**
   * A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   * @public
   */
  MssPackage?: MssPackage | undefined;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   * @public
   */
  Origination?: Origination | undefined;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   * @public
   */
  Whitelist?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateOriginEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   * @public
   */
  Arn?: string | undefined;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage | undefined;

  /**
   * The date and time the OriginEndpoint was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage | undefined;

  /**
   * A short text description of the OriginEndpoint.
   * @public
   */
  Description?: string | undefined;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage | undefined;

  /**
   * The ID of the OriginEndpoint.
   * @public
   */
  Id?: string | undefined;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   * @public
   */
  MssPackage?: MssPackage | undefined;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   * @public
   */
  Origination?: Origination | undefined;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   * @public
   */
  Url?: string | undefined;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   * @public
   */
  Whitelist?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * The ID of the Channel to delete.
   * @public
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
   * The ID of the OriginEndpoint to delete.
   * @public
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
   * The ID of a Channel.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time the Channel was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   * @public
   */
  HlsIngest?: HlsIngest | undefined;

  /**
   * The ID of the Channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeHarvestJobRequest {
  /**
   * The ID of the HarvestJob.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeHarvestJobResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The date and time the HarvestJob was submitted.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The end of the time-window which will be harvested.
   * @public
   */
  EndTime?: string | undefined;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   * @public
   */
  OriginEndpointId?: string | undefined;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   * @public
   */
  S3Destination?: S3Destination | undefined;

  /**
   * The start of the time-window which will be harvested.
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface DescribeOriginEndpointRequest {
  /**
   * The ID of the OriginEndpoint.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeOriginEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   * @public
   */
  Arn?: string | undefined;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage | undefined;

  /**
   * The date and time the OriginEndpoint was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage | undefined;

  /**
   * A short text description of the OriginEndpoint.
   * @public
   */
  Description?: string | undefined;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage | undefined;

  /**
   * The ID of the OriginEndpoint.
   * @public
   */
  Id?: string | undefined;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   * @public
   */
  MssPackage?: MssPackage | undefined;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   * @public
   */
  Origination?: Origination | undefined;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   * @public
   */
  Url?: string | undefined;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   * @public
   */
  Whitelist?: string[] | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * Upper bound on number of records to return.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to resume pagination from the end of a previous request.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * A list of Channel records.
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * A token that can be used to resume pagination from the end of the collection.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHarvestJobsRequest {
  /**
   * When specified, the request will return only HarvestJobs associated with the given Channel ID.
   * @public
   */
  IncludeChannelId?: string | undefined;

  /**
   * When specified, the request will return only HarvestJobs in the given status.
   * @public
   */
  IncludeStatus?: string | undefined;

  /**
   * The upper bound on the number of records to return.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to resume pagination from the end of a previous request.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHarvestJobsResponse {
  /**
   * A list of HarvestJob records.
   * @public
   */
  HarvestJobs?: HarvestJob[] | undefined;

  /**
   * A token that can be used to resume pagination from the end of the collection.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOriginEndpointsRequest {
  /**
   * When specified, the request will return only OriginEndpoints associated with the given Channel ID.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The upper bound on the number of records to return.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to resume pagination from the end of a previous request.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOriginEndpointsResponse {
  /**
   * A token that can be used to resume pagination from the end of the collection.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of OriginEndpoint records.
   * @public
   */
  OriginEndpoints?: OriginEndpoint[] | undefined;
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
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RotateChannelCredentialsRequest {
  /**
   * The ID of the channel to update.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface RotateChannelCredentialsResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time the Channel was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   * @public
   */
  HlsIngest?: HlsIngest | undefined;

  /**
   * The ID of the Channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RotateIngestEndpointCredentialsRequest {
  /**
   * The ID of the channel the IngestEndpoint is on.
   * @public
   */
  Id: string | undefined;

  /**
   * The id of the IngestEndpoint whose credentials should be rotated
   * @public
   */
  IngestEndpointId: string | undefined;
}

/**
 * @public
 */
export interface RotateIngestEndpointCredentialsResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time the Channel was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   * @public
   */
  HlsIngest?: HlsIngest | undefined;

  /**
   * The ID of the Channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
   * The key(s) of tag to be deleted
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Configuration parameters used to update the Channel.
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the Channel to update.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time the Channel was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A short text description of the Channel.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configure egress access logging.
   * @public
   */
  EgressAccessLogs?: EgressAccessLogs | undefined;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   * @public
   */
  HlsIngest?: HlsIngest | undefined;

  /**
   * The ID of the Channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configure ingress access logging.
   * @public
   */
  IngressAccessLogs?: IngressAccessLogs | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Configuration parameters used to update an existing OriginEndpoint.
 * @public
 */
export interface UpdateOriginEndpointRequest {
  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage | undefined;

  /**
   * A short text description of the OriginEndpoint.
   * @public
   */
  Description?: string | undefined;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage | undefined;

  /**
   * The ID of the OriginEndpoint to update.
   * @public
   */
  Id: string | undefined;

  /**
   * A short string that will be appended to the end of the Endpoint URL.
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   * @public
   */
  MssPackage?: MssPackage | undefined;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   * @public
   */
  Origination?: Origination | undefined;

  /**
   * Maximum duration (in seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * Amount of delay (in seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   * @public
   */
  Whitelist?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOriginEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   * @public
   */
  Arn?: string | undefined;

  /**
   * CDN Authorization credentials
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   * @public
   */
  CmafPackage?: CmafPackage | undefined;

  /**
   * The date and time the OriginEndpoint was created.
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   * @public
   */
  DashPackage?: DashPackage | undefined;

  /**
   * A short text description of the OriginEndpoint.
   * @public
   */
  Description?: string | undefined;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   * @public
   */
  HlsPackage?: HlsPackage | undefined;

  /**
   * The ID of the OriginEndpoint.
   * @public
   */
  Id?: string | undefined;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   * @public
   */
  ManifestName?: string | undefined;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   * @public
   */
  MssPackage?: MssPackage | undefined;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   * @public
   */
  Origination?: Origination | undefined;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * A collection of tags associated with a resource
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   * @public
   */
  Url?: string | undefined;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   * @public
   */
  Whitelist?: string[] | undefined;
}
