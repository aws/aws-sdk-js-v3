import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum __AdTriggersElement {
  BREAK = "BREAK",
  DISTRIBUTOR_ADVERTISEMENT = "DISTRIBUTOR_ADVERTISEMENT",
  DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY = "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
  DISTRIBUTOR_PLACEMENT_OPPORTUNITY = "DISTRIBUTOR_PLACEMENT_OPPORTUNITY",
  PROVIDER_ADVERTISEMENT = "PROVIDER_ADVERTISEMENT",
  PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY = "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY",
  PROVIDER_PLACEMENT_OPPORTUNITY = "PROVIDER_PLACEMENT_OPPORTUNITY",
  SPLICE_INSERT = "SPLICE_INSERT"
}

export enum __PeriodTriggersElement {
  ADS = "ADS"
}

export enum AdMarkers {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  SCTE35_ENHANCED = "SCTE35_ENHANCED"
}

export enum AdsOnDeliveryRestrictions {
  BOTH = "BOTH",
  NONE = "NONE",
  RESTRICTED = "RESTRICTED",
  UNRESTRICTED = "UNRESTRICTED"
}

/**
 * CDN Authorization credentials
 */
export interface Authorization {
  __type?: "Authorization";
  /**
   * The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
   */
  CdnIdentifierSecret: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
   */
  SecretsRoleArn: string | undefined;
}

export namespace Authorization {
  export const filterSensitiveLog = (obj: Authorization): any => ({
    ...obj
  });
  export const isa = (o: any): o is Authorization => __isa(o, "Authorization");
}

/**
 * A Channel resource configuration.
 */
export interface Channel {
  __type?: "Channel";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace Channel {
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj
  });
  export const isa = (o: any): o is Channel => __isa(o, "Channel");
}

/**
 * A Common Media Application Format (CMAF) encryption configuration.
 */
export interface CmafEncryption {
  __type?: "CmafEncryption";
  /**
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace CmafEncryption {
  export const filterSensitiveLog = (obj: CmafEncryption): any => ({
    ...obj
  });
  export const isa = (o: any): o is CmafEncryption =>
    __isa(o, "CmafEncryption");
}

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackage {
  __type?: "CmafPackage";
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: HlsManifest[];

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace CmafPackage {
  export const filterSensitiveLog = (obj: CmafPackage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CmafPackage => __isa(o, "CmafPackage");
}

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackageCreateOrUpdateParameters {
  __type?: "CmafPackageCreateOrUpdateParameters";
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: HlsManifestCreateOrUpdateParameters[];

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace CmafPackageCreateOrUpdateParameters {
  export const filterSensitiveLog = (
    obj: CmafPackageCreateOrUpdateParameters
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CmafPackageCreateOrUpdateParameters =>
    __isa(o, "CmafPackageCreateOrUpdateParameters");
}

/**
 * A new Channel configuration.
 */
export interface CreateChannelRequest {
  __type?: "CreateChannelRequest";
  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * The ID of the Channel. The ID must be unique within the region and it
   * cannot be changed after a Channel is created.
   */
  Id: string | undefined;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace CreateChannelRequest {
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateChannelRequest =>
    __isa(o, "CreateChannelRequest");
}

export interface CreateChannelResponse {
  __type?: "CreateChannelResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace CreateChannelResponse {
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateChannelResponse =>
    __isa(o, "CreateChannelResponse");
}

/**
 * Configuration parameters used to create a new HarvestJob.
 */
export interface CreateHarvestJobRequest {
  __type?: "CreateHarvestJobRequest";
  /**
   * The end of the time-window which will be harvested
   */
  EndTime: string | undefined;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted
   */
  Id: string | undefined;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId: string | undefined;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination: S3Destination | undefined;

  /**
   * The start of the time-window which will be harvested
   */
  StartTime: string | undefined;
}

export namespace CreateHarvestJobRequest {
  export const filterSensitiveLog = (obj: CreateHarvestJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHarvestJobRequest =>
    __isa(o, "CreateHarvestJobRequest");
}

export interface CreateHarvestJobResponse {
  __type?: "CreateHarvestJobResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   */
  Arn?: string;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   */
  ChannelId?: string;

  /**
   * The time the HarvestJob was submitted
   */
  CreatedAt?: string;

  /**
   * The end of the time-window which will be harvested.
   */
  EndTime?: string;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   */
  Id?: string;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId?: string;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination?: S3Destination;

  /**
   * The start of the time-window which will be harvested.
   */
  StartTime?: string;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   */
  Status?: Status | string;
}

export namespace CreateHarvestJobResponse {
  export const filterSensitiveLog = (obj: CreateHarvestJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHarvestJobResponse =>
    __isa(o, "CreateHarvestJobResponse");
}

/**
 * Configuration parameters used to create a new OriginEndpoint.
 */
export interface CreateOriginEndpointRequest {
  __type?: "CreateOriginEndpointRequest";
  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * The ID of the Channel that the OriginEndpoint will be associated with.
   * This cannot be changed after the OriginEndpoint is created.
   */
  ChannelId: string | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.  The ID must be unique within the region
   * and it cannot be changed after the OriginEndpoint is created.
   */
  Id: string | undefined;

  /**
   * A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

export namespace CreateOriginEndpointRequest {
  export const filterSensitiveLog = (
    obj: CreateOriginEndpointRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOriginEndpointRequest =>
    __isa(o, "CreateOriginEndpointRequest");
}

export interface CreateOriginEndpointResponse {
  __type?: "CreateOriginEndpointResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

export namespace CreateOriginEndpointResponse {
  export const filterSensitiveLog = (
    obj: CreateOriginEndpointResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOriginEndpointResponse =>
    __isa(o, "CreateOriginEndpointResponse");
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface DashEncryption {
  __type?: "DashEncryption";
  /**
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace DashEncryption {
  export const filterSensitiveLog = (obj: DashEncryption): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashEncryption =>
    __isa(o, "DashEncryption");
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
  __type?: "DashPackage";
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   */
  AdTriggers?: (__AdTriggersElement | string)[];

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;

  /**
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: ManifestLayout | string;

  /**
   * Time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
   */
  MinUpdatePeriodSeconds?: number;

  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Channel source contains SCTE-35 ad markers.
   */
  PeriodTriggers?: (__PeriodTriggersElement | string)[];

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: Profile | string;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   */
  SegmentTemplateFormat?: SegmentTemplateFormat | string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * Duration (in seconds) to delay live content before presentation.
   */
  SuggestedPresentationDelaySeconds?: number;
}

export namespace DashPackage {
  export const filterSensitiveLog = (obj: DashPackage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashPackage => __isa(o, "DashPackage");
}

export interface DeleteChannelRequest {
  __type?: "DeleteChannelRequest";
  /**
   * The ID of the Channel to delete.
   */
  Id: string | undefined;
}

export namespace DeleteChannelRequest {
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteChannelRequest =>
    __isa(o, "DeleteChannelRequest");
}

export interface DeleteChannelResponse {
  __type?: "DeleteChannelResponse";
}

export namespace DeleteChannelResponse {
  export const filterSensitiveLog = (obj: DeleteChannelResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteChannelResponse =>
    __isa(o, "DeleteChannelResponse");
}

export interface DeleteOriginEndpointRequest {
  __type?: "DeleteOriginEndpointRequest";
  /**
   * The ID of the OriginEndpoint to delete.
   */
  Id: string | undefined;
}

export namespace DeleteOriginEndpointRequest {
  export const filterSensitiveLog = (
    obj: DeleteOriginEndpointRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteOriginEndpointRequest =>
    __isa(o, "DeleteOriginEndpointRequest");
}

export interface DeleteOriginEndpointResponse {
  __type?: "DeleteOriginEndpointResponse";
}

export namespace DeleteOriginEndpointResponse {
  export const filterSensitiveLog = (
    obj: DeleteOriginEndpointResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteOriginEndpointResponse =>
    __isa(o, "DeleteOriginEndpointResponse");
}

export interface DescribeChannelRequest {
  __type?: "DescribeChannelRequest";
  /**
   * The ID of a Channel.
   */
  Id: string | undefined;
}

export namespace DescribeChannelRequest {
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeChannelRequest =>
    __isa(o, "DescribeChannelRequest");
}

export interface DescribeChannelResponse {
  __type?: "DescribeChannelResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeChannelResponse {
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeChannelResponse =>
    __isa(o, "DescribeChannelResponse");
}

export interface DescribeHarvestJobRequest {
  __type?: "DescribeHarvestJobRequest";
  /**
   * The ID of the HarvestJob.
   */
  Id: string | undefined;
}

export namespace DescribeHarvestJobRequest {
  export const filterSensitiveLog = (obj: DescribeHarvestJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHarvestJobRequest =>
    __isa(o, "DescribeHarvestJobRequest");
}

export interface DescribeHarvestJobResponse {
  __type?: "DescribeHarvestJobResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   */
  Arn?: string;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   */
  ChannelId?: string;

  /**
   * The time the HarvestJob was submitted
   */
  CreatedAt?: string;

  /**
   * The end of the time-window which will be harvested.
   */
  EndTime?: string;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   */
  Id?: string;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId?: string;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination?: S3Destination;

  /**
   * The start of the time-window which will be harvested.
   */
  StartTime?: string;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   */
  Status?: Status | string;
}

export namespace DescribeHarvestJobResponse {
  export const filterSensitiveLog = (obj: DescribeHarvestJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHarvestJobResponse =>
    __isa(o, "DescribeHarvestJobResponse");
}

export interface DescribeOriginEndpointRequest {
  __type?: "DescribeOriginEndpointRequest";
  /**
   * The ID of the OriginEndpoint.
   */
  Id: string | undefined;
}

export namespace DescribeOriginEndpointRequest {
  export const filterSensitiveLog = (
    obj: DescribeOriginEndpointRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOriginEndpointRequest =>
    __isa(o, "DescribeOriginEndpointRequest");
}

export interface DescribeOriginEndpointResponse {
  __type?: "DescribeOriginEndpointResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

export namespace DescribeOriginEndpointResponse {
  export const filterSensitiveLog = (
    obj: DescribeOriginEndpointResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOriginEndpointResponse =>
    __isa(o, "DescribeOriginEndpointResponse");
}

export enum EncryptionMethod {
  AES_128 = "AES_128",
  SAMPLE_AES = "SAMPLE_AES"
}

/**
 * The client is not authorized to access the requested resource.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForbiddenException =>
    __isa(o, "ForbiddenException");
}

/**
 * A HarvestJob resource configuration
 */
export interface HarvestJob {
  __type?: "HarvestJob";
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   */
  Arn?: string;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   */
  ChannelId?: string;

  /**
   * The time the HarvestJob was submitted
   */
  CreatedAt?: string;

  /**
   * The end of the time-window which will be harvested.
   */
  EndTime?: string;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   */
  Id?: string;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   */
  OriginEndpointId?: string;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   */
  S3Destination?: S3Destination;

  /**
   * The start of the time-window which will be harvested.
   */
  StartTime?: string;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   */
  Status?: Status | string;
}

export namespace HarvestJob {
  export const filterSensitiveLog = (obj: HarvestJob): any => ({
    ...obj
  });
  export const isa = (o: any): o is HarvestJob => __isa(o, "HarvestJob");
}

/**
 * An HTTP Live Streaming (HLS) encryption configuration.
 */
export interface HlsEncryption {
  __type?: "HlsEncryption";
  /**
   * A constant initialization vector for encryption (optional).
   * When not specified the initialization vector will be periodically rotated.
   */
  ConstantInitializationVector?: string;

  /**
   * The encryption method to use.
   */
  EncryptionMethod?: EncryptionMethod | string;

  /**
   * Interval (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace HlsEncryption {
  export const filterSensitiveLog = (obj: HlsEncryption): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsEncryption => __isa(o, "HlsEncryption");
}

/**
 * An HTTP Live Streaming (HLS) ingest resource configuration.
 */
export interface HlsIngest {
  __type?: "HlsIngest";
  /**
   * A list of endpoints to which the source stream should be sent.
   */
  IngestEndpoints?: IngestEndpoint[];
}

export namespace HlsIngest {
  export const filterSensitiveLog = (obj: HlsIngest): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsIngest => __isa(o, "HlsIngest");
}

/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifest {
  __type?: "HlsManifest";
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   */
  AdMarkers?: AdMarkers | string;

  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   */
  PlaylistType?: PlaylistType | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

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
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;
}

export namespace HlsManifest {
  export const filterSensitiveLog = (obj: HlsManifest): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsManifest => __isa(o, "HlsManifest");
}

/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifestCreateOrUpdateParameters {
  __type?: "HlsManifestCreateOrUpdateParameters";
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   */
  AdMarkers?: AdMarkers | string;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   */
  AdTriggers?: (__AdTriggersElement | string)[];

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;

  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   */
  PlaylistType?: PlaylistType | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

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
   */
  ProgramDateTimeIntervalSeconds?: number;
}

export namespace HlsManifestCreateOrUpdateParameters {
  export const filterSensitiveLog = (
    obj: HlsManifestCreateOrUpdateParameters
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsManifestCreateOrUpdateParameters =>
    __isa(o, "HlsManifestCreateOrUpdateParameters");
}

/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface HlsPackage {
  __type?: "HlsPackage";
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   */
  AdMarkers?: AdMarkers | string;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   */
  AdTriggers?: (__AdTriggersElement | string)[];

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   */
  PlaylistType?: PlaylistType | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

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
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
}

export namespace HlsPackage {
  export const filterSensitiveLog = (obj: HlsPackage): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsPackage => __isa(o, "HlsPackage");
}

/**
 * An endpoint for ingesting source content for a Channel.
 */
export interface IngestEndpoint {
  __type?: "IngestEndpoint";
  /**
   * The system generated unique identifier for the IngestEndpoint
   */
  Id?: string;

  /**
   * The system generated password for ingest authentication.
   */
  Password?: string;

  /**
   * The ingest URL to which the source stream should be sent.
   */
  Url?: string;

  /**
   * The system generated username for ingest authentication.
   */
  Username?: string;
}

export namespace IngestEndpoint {
  export const filterSensitiveLog = (obj: IngestEndpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is IngestEndpoint =>
    __isa(o, "IngestEndpoint");
}

/**
 * An unexpected error occurred.
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (
    obj: InternalServerErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerErrorException =>
    __isa(o, "InternalServerErrorException");
}

export interface ListChannelsRequest {
  __type?: "ListChannelsRequest";
  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListChannelsRequest {
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListChannelsRequest =>
    __isa(o, "ListChannelsRequest");
}

export interface ListChannelsResponse {
  __type?: "ListChannelsResponse";
  /**
   * A list of Channel records.
   */
  Channels?: Channel[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

export namespace ListChannelsResponse {
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListChannelsResponse =>
    __isa(o, "ListChannelsResponse");
}

export interface ListHarvestJobsRequest {
  __type?: "ListHarvestJobsRequest";
  /**
   * When specified, the request will return only HarvestJobs associated with the given Channel ID.
   */
  IncludeChannelId?: string;

  /**
   * When specified, the request will return only HarvestJobs in the given status.
   */
  IncludeStatus?: string;

  /**
   * The upper bound on the number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListHarvestJobsRequest {
  export const filterSensitiveLog = (obj: ListHarvestJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHarvestJobsRequest =>
    __isa(o, "ListHarvestJobsRequest");
}

export interface ListHarvestJobsResponse {
  __type?: "ListHarvestJobsResponse";
  /**
   * A list of HarvestJob records.
   */
  HarvestJobs?: HarvestJob[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

export namespace ListHarvestJobsResponse {
  export const filterSensitiveLog = (obj: ListHarvestJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHarvestJobsResponse =>
    __isa(o, "ListHarvestJobsResponse");
}

export interface ListOriginEndpointsRequest {
  __type?: "ListOriginEndpointsRequest";
  /**
   * When specified, the request will return only OriginEndpoints associated with the given Channel ID.
   */
  ChannelId?: string;

  /**
   * The upper bound on the number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListOriginEndpointsRequest {
  export const filterSensitiveLog = (obj: ListOriginEndpointsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOriginEndpointsRequest =>
    __isa(o, "ListOriginEndpointsRequest");
}

export interface ListOriginEndpointsResponse {
  __type?: "ListOriginEndpointsResponse";
  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of OriginEndpoint records.
   */
  OriginEndpoints?: OriginEndpoint[];
}

export namespace ListOriginEndpointsResponse {
  export const filterSensitiveLog = (
    obj: ListOriginEndpointsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOriginEndpointsResponse =>
    __isa(o, "ListOriginEndpointsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export enum ManifestLayout {
  COMPACT = "COMPACT",
  FULL = "FULL"
}

/**
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 */
export interface MssEncryption {
  __type?: "MssEncryption";
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace MssEncryption {
  export const filterSensitiveLog = (obj: MssEncryption): any => ({
    ...obj
  });
  export const isa = (o: any): o is MssEncryption => __isa(o, "MssEncryption");
}

/**
 * A Microsoft Smooth Streaming (MSS) packaging configuration.
 */
export interface MssPackage {
  __type?: "MssPackage";
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: MssEncryption;

  /**
   * The time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace MssPackage {
  export const filterSensitiveLog = (obj: MssPackage): any => ({
    ...obj
  });
  export const isa = (o: any): o is MssPackage => __isa(o, "MssPackage");
}

/**
 * The requested resource does not exist.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

export enum Origination {
  ALLOW = "ALLOW",
  DENY = "DENY"
}

/**
 * An OriginEndpoint resource configuration.
 */
export interface OriginEndpoint {
  __type?: "OriginEndpoint";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

export namespace OriginEndpoint {
  export const filterSensitiveLog = (obj: OriginEndpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is OriginEndpoint =>
    __isa(o, "OriginEndpoint");
}

export enum PlaylistType {
  EVENT = "EVENT",
  NONE = "NONE",
  VOD = "VOD"
}

export enum Profile {
  HBBTV_1_5 = "HBBTV_1_5",
  NONE = "NONE"
}

export interface RotateChannelCredentialsRequest {
  __type?: "RotateChannelCredentialsRequest";
  /**
   * The ID of the channel to update.
   */
  Id: string | undefined;
}

export namespace RotateChannelCredentialsRequest {
  export const filterSensitiveLog = (
    obj: RotateChannelCredentialsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateChannelCredentialsRequest =>
    __isa(o, "RotateChannelCredentialsRequest");
}

export interface RotateChannelCredentialsResponse {
  __type?: "RotateChannelCredentialsResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace RotateChannelCredentialsResponse {
  export const filterSensitiveLog = (
    obj: RotateChannelCredentialsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateChannelCredentialsResponse =>
    __isa(o, "RotateChannelCredentialsResponse");
}

export interface RotateIngestEndpointCredentialsRequest {
  __type?: "RotateIngestEndpointCredentialsRequest";
  /**
   * The ID of the channel the IngestEndpoint is on.
   */
  Id: string | undefined;

  /**
   * The id of the IngestEndpoint whose credentials should be rotated
   */
  IngestEndpointId: string | undefined;
}

export namespace RotateIngestEndpointCredentialsRequest {
  export const filterSensitiveLog = (
    obj: RotateIngestEndpointCredentialsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateIngestEndpointCredentialsRequest =>
    __isa(o, "RotateIngestEndpointCredentialsRequest");
}

export interface RotateIngestEndpointCredentialsResponse {
  __type?: "RotateIngestEndpointCredentialsResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace RotateIngestEndpointCredentialsResponse {
  export const filterSensitiveLog = (
    obj: RotateIngestEndpointCredentialsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateIngestEndpointCredentialsResponse =>
    __isa(o, "RotateIngestEndpointCredentialsResponse");
}

/**
 * Configuration parameters for where in an S3 bucket to place the harvested content
 */
export interface S3Destination {
  __type?: "S3Destination";
  /**
   * The name of an S3 bucket within which harvested content will be exported
   */
  BucketName: string | undefined;

  /**
   * The key in the specified S3 bucket where the harvested top-level manifest will be placed.
   */
  ManifestKey: string | undefined;

  /**
   * The IAM role used to write to the specified S3 bucket
   */
  RoleArn: string | undefined;
}

export namespace S3Destination {
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Destination => __isa(o, "S3Destination");
}

export enum SegmentTemplateFormat {
  NUMBER_WITH_DURATION = "NUMBER_WITH_DURATION",
  NUMBER_WITH_TIMELINE = "NUMBER_WITH_TIMELINE",
  TIME_WITH_TIMELINE = "TIME_WITH_TIMELINE"
}

/**
 * An unexpected error occurred.
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface SpekeKeyProvider {
  __type?: "SpekeKeyProvider";
  /**
   * An Amazon Resource Name (ARN) of a Certificate Manager certificate
   * that MediaPackage will use for enforcing secure end-to-end data
   * transfer with the key provider service.
   */
  CertificateArn?: string;

  /**
   * The resource ID to include in key requests.
   */
  ResourceId: string | undefined;

  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
   * MediaPackage will assume when accessing the key provider service.
   */
  RoleArn: string | undefined;

  /**
   * The system IDs to include in key requests.
   */
  SystemIds: string[] | undefined;

  /**
   * The URL of the external key provider service.
   */
  Url: string | undefined;
}

export namespace SpekeKeyProvider {
  export const filterSensitiveLog = (obj: SpekeKeyProvider): any => ({
    ...obj
  });
  export const isa = (o: any): o is SpekeKeyProvider =>
    __isa(o, "SpekeKeyProvider");
}

export enum Status {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED"
}

export enum StreamOrder {
  ORIGINAL = "ORIGINAL",
  VIDEO_BITRATE_ASCENDING = "VIDEO_BITRATE_ASCENDING",
  VIDEO_BITRATE_DESCENDING = "VIDEO_BITRATE_DESCENDING"
}

/**
 * A StreamSelection configuration.
 */
export interface StreamSelection {
  __type?: "StreamSelection";
  /**
   * The maximum video bitrate (bps) to include in output.
   */
  MaxVideoBitsPerSecond?: number;

  /**
   * The minimum video bitrate (bps) to include in output.
   */
  MinVideoBitsPerSecond?: number;

  /**
   * A directive that determines the order of streams in the output.
   */
  StreamOrder?: StreamOrder | string;
}

export namespace StreamSelection {
  export const filterSensitiveLog = (obj: StreamSelection): any => ({
    ...obj
  });
  export const isa = (o: any): o is StreamSelection =>
    __isa(o, "StreamSelection");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  ResourceArn: string | undefined;
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

/**
 * The client has exceeded their resource or throttling limits.
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
}

/**
 * The parameters sent in the request are not valid.
 */
export interface UnprocessableEntityException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Message?: string;
}

export namespace UnprocessableEntityException {
  export const filterSensitiveLog = (
    obj: UnprocessableEntityException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnprocessableEntityException =>
    __isa(o, "UnprocessableEntityException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  ResourceArn: string | undefined;
  /**
   * The key(s) of tag to be deleted
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

/**
 * Configuration parameters used to update the Channel.
 */
export interface UpdateChannelRequest {
  __type?: "UpdateChannelRequest";
  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * The ID of the Channel to update.
   */
  Id: string | undefined;
}

export namespace UpdateChannelRequest {
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateChannelRequest =>
    __isa(o, "UpdateChannelRequest");
}

export interface UpdateChannelResponse {
  __type?: "UpdateChannelResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateChannelResponse {
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateChannelResponse =>
    __isa(o, "UpdateChannelResponse");
}

/**
 * Configuration parameters used to update an existing OriginEndpoint.
 */
export interface UpdateOriginEndpointRequest {
  __type?: "UpdateOriginEndpointRequest";
  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint to update.
   */
  Id: string | undefined;

  /**
   * A short string that will be appended to the end of the Endpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (in seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * Amount of delay (in seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

export namespace UpdateOriginEndpointRequest {
  export const filterSensitiveLog = (
    obj: UpdateOriginEndpointRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateOriginEndpointRequest =>
    __isa(o, "UpdateOriginEndpointRequest");
}

export interface UpdateOriginEndpointResponse {
  __type?: "UpdateOriginEndpointResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
}

export namespace UpdateOriginEndpointResponse {
  export const filterSensitiveLog = (
    obj: UpdateOriginEndpointResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateOriginEndpointResponse =>
    __isa(o, "UpdateOriginEndpointResponse");
}
