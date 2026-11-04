// smithy-typescript generated code
import type {
  AdMarkerDash,
  AdMarkerHls,
  CmafEncryptionMethod,
  ContainerType,
  ContentKeyPeriodTiming,
  CustomAdType,
  DashAudioTimelinePattern,
  DashCompactness,
  DashDrmSignaling,
  DashPeriodTrigger,
  DashProfile,
  DashSegmentTemplateFormat,
  DashTtmlProfile,
  DashUtcTimingMode,
  DrmSystem,
  EndpointErrorCondition,
  HarvestJobStatus,
  InputType,
  IsmEncryptionMethod,
  MssManifestLayout,
  MultiviewLayoutType,
  OutputLockingMode,
  OutputTimestampMode,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  ScteFilter,
  ScteInManifests,
  ScteInSegments,
  SpekeVersion,
  StreamNameOutputMode,
  TsEncryptionMethod,
  UriPathType,
  UriSeparator,
} from "./enums";

/**
 * @public
 */
export interface CancelHarvestJobRequest {
  /**
   * The name of the channel group containing the channel from which the harvest job is running.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel from which the harvest job is running.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint that the harvest job is harvesting from. This cannot be changed after the harvest job is submitted.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The name of the harvest job to cancel. This name must be unique within the channel and cannot be changed after the harvest job is submitted.
   *
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * The current Entity Tag (ETag) associated with the harvest job. Used for concurrency control.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CancelHarvestJobResponse {}

/**
 * The settings to enable CDN authorization headers in MediaPackage.
 *
 * @public
 */
export interface CdnAuthConfiguration {
  /**
   * The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.
   *
   * @public
   */
  CdnIdentifierSecretArns: string[] | undefined;

  /**
   * The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.
   *
   * @public
   */
  SecretsRoleArn: string | undefined;
}

/**
 * The configuration of the channel group.
 *
 * @public
 */
export interface ChannelGroupListConfiguration {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time the channel group was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel group was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * Any descriptive information that you want to add to the channel group for future identification purposes.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelPolicyRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelPolicyResponse {}

/**
 * @public
 */
export interface GetChannelPolicyRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelPolicyResponse {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The policy assigned to the channel.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The policy to attach to the specified channel.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyResponse {}

/**
 * The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.
 *
 * @public
 */
export interface InputSwitchConfiguration {
  /**
   * When true, AWS Elemental MediaPackage performs input switching based on the MQCS. Default is false. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  MQCSInputSwitching?: boolean | undefined;

  /**
   * For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. Select `1` to prefer the first ingest endpoint, or `2` to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.
   *
   * @public
   */
  PreferredInput?: number | undefined;
}

/**
 * The multiview configuration for a channel. A multiview channel composites video from several source channels into a single tiled output stream. Players receive one standard HLS or DASH stream instead of several separate streams. This setting is required when `InputType` is `MULTIVIEW`, and can't be set for any other input type.
 *
 * @public
 */
export interface MultiviewConfiguration {
  /**
   * The channels that players can use as tiles in this multiview channel's output. Each source channel must be in the same channel group as the multiview channel, and must have an `InputType` of `CMAF`. Only the channels that you list here are available as tiles.
   *
   * @public
   */
  AvailableSources: string[] | undefined;

  /**
   * The tile layouts that players can request from this multiview channel's origin endpoints. Only the layouts that you list here are available. Each layout must appear at most once.
   *
   * @public
   */
  AvailableLayouts: MultiviewLayoutType[] | undefined;
}

/**
 * The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.
 *
 * @public
 */
export interface OutputHeaderConfiguration {
  /**
   * When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  PublishMQCS?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. You can't change the name after you create the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The input type is an immutable field. It defines whether the channel allows CMAF ingest, HLS ingest, or server-side multiview output. Multiview channels receive no ingest of their own. If unprovided, the value defaults to HLS.
   *
   * The allowed values are:
   *
   * - `HLS` - The HLS streaming specification (which defines M3U8 manifests and TS segments).
   * - `CMAF` - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).
   * - `MULTIVIEW` – Server-side multiview. The channel receives no ingest of its own. Instead, it composites video from the source channels in its `MultiviewConfiguration` into a single tiled output stream.
   *
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * Enter any descriptive text that helps you to identify the channel.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;

  /**
   * The multiview configuration for the channel. This setting is required when `InputType` is `MULTIVIEW`, and can't be set for any other input type.
   *
   * @public
   */
  MultiviewConfiguration?: MultiviewConfiguration | undefined;

  /**
   * The output locking mode for the channel. This setting is only valid when `InputType` is `CMAF`. This value is immutable after channel creation. If you don't specify a value, the default is `EPOCH_LOCKED`.
   *
   * The allowed values are:
   *
   * - `EPOCH_LOCKED` - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time. This mode supports cross-region synchronization and failover.
   * - `NON_EPOCH_LOCKED` - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0. This mode does not support cross-region synchronization or failover.
   *
   * @public
   */
  OutputLockingMode?: OutputLockingMode | undefined;

  /**
   * A comma-separated list of tag key:value pairs that you define. For example:
   *
   * `"Key1": "Value1",`
   *
   * `"Key2": "Value2"`
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The ingest domain URL where the source stream should be sent.
 *
 * @public
 */
export interface IngestEndpoint {
  /**
   * The system-generated unique identifier for the IngestEndpoint.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ingest domain URL where the source stream should be sent.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * The multiview configuration for the channel. This is present only when `InputType` is `MULTIVIEW`.
   *
   * @public
   */
  MultiviewConfiguration?: MultiviewConfiguration | undefined;

  /**
   * The multiview channels, in the same channel group, that list this channel as an available source. This is a read-only field. You can't delete a channel while any multiview channel still lists it as a source. Use this field to find the multiview channels that you need to update first.
   *
   * @public
   */
  AttachedMultiviewChannels?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The date and time the channel was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The description for your channel.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of ingest endpoints.
   *
   * @public
   */
  IngestEndpoints?: IngestEndpoint[] | undefined;

  /**
   * The input type is an immutable field. It defines whether the channel allows CMAF ingest, HLS ingest, or server-side multiview output. Multiview channels receive no ingest of their own. If unprovided, the value defaults to HLS.
   *
   * The allowed values are:
   *
   * - `HLS` - The HLS streaming specification (which defines M3U8 manifests and TS segments).
   * - `CMAF` - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).
   * - `MULTIVIEW` – Server-side multiview. The channel receives no ingest of its own. Instead, it composites video from the source channels in its `MultiviewConfiguration` into a single tiled output stream.
   *
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the channel.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;

  /**
   * The output locking mode configured for the channel.
   *
   * The allowed values are:
   *
   * - `EPOCH_LOCKED` - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time.
   * - `NON_EPOCH_LOCKED` - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0.
   *
   * @public
   */
  OutputLockingMode?: OutputLockingMode | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelResponse {}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * The multiview configuration for the channel. This is present only when `InputType` is `MULTIVIEW`.
   *
   * @public
   */
  MultiviewConfiguration?: MultiviewConfiguration | undefined;

  /**
   * The multiview channels, in the same channel group, that list this channel as an available source. This is a read-only field. You can't delete a channel while any multiview channel still lists it as a source. Use this field to find the multiview channels that you need to update first.
   *
   * @public
   */
  AttachedMultiviewChannels?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The date and time the channel was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The time that the channel was last reset.
   *
   * @public
   */
  ResetAt?: Date | undefined;

  /**
   * The description for your channel.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of ingest endpoints.
   *
   * @public
   */
  IngestEndpoints?: IngestEndpoint[] | undefined;

  /**
   * The input type is an immutable field. It defines whether the channel allows CMAF ingest, HLS ingest, or server-side multiview output. Multiview channels receive no ingest of their own. If unprovided, the value defaults to HLS.
   *
   * The allowed values are:
   *
   * - `HLS` - The HLS streaming specification (which defines M3U8 manifests and TS segments).
   * - `CMAF` - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).
   * - `MULTIVIEW` – Server-side multiview. The channel receives no ingest of its own. Instead, it composites video from the source channels in its `MultiviewConfiguration` into a single tiled output stream.
   *
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the channel.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;

  /**
   * The output locking mode configured for the channel.
   *
   * The allowed values are:
   *
   * - `EPOCH_LOCKED` - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time.
   * - `NON_EPOCH_LOCKED` - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0.
   *
   * @public
   */
  OutputLockingMode?: OutputLockingMode | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from the GET list request. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The configuration of the channel.
 *
 * @public
 */
export interface ChannelListConfiguration {
  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The date and time the channel was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * Any descriptive information that you want to add to the channel for future identification purposes.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The input type is an immutable field. It defines whether the channel allows CMAF ingest, HLS ingest, or server-side multiview output. Multiview channels receive no ingest of their own. If unprovided, the value defaults to HLS.
   *
   * The allowed values are:
   *
   * - `HLS` - The HLS streaming specification (which defines M3U8 manifests and TS segments).
   * - `CMAF` - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).
   * - `MULTIVIEW` – Server-side multiview. The channel receives no ingest of its own. Instead, it composites video from the source channels in its `MultiviewConfiguration` into a single tiled output stream.
   *
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * The output locking mode configured for the channel.
   *
   * The allowed values are:
   *
   * - `EPOCH_LOCKED` - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time.
   * - `NON_EPOCH_LOCKED` - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0.
   *
   * @public
   */
  OutputLockingMode?: OutputLockingMode | undefined;

  /**
   * The multiview configuration for the channel. This is present only when `InputType` is `MULTIVIEW`.
   *
   * @public
   */
  MultiviewConfiguration?: MultiviewConfiguration | undefined;

  /**
   * The multiview channels, in the same channel group, that list this channel as an available source. This is a read-only field.
   *
   * @public
   */
  AttachedMultiviewChannels?: string[] | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * The objects being returned.
   *
   * @public
   */
  Items?: ChannelListConfiguration[] | undefined;

  /**
   * The pagination token from the GET list request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The configuration for the DASH `availabilityStartTime` attribute of the Media Presentation Description (MPD). Use this configuration to set a custom availability start time for your DASH manifest.
 *
 * @public
 */
export type DashAvailabilityStartTimeConfiguration =
  | DashAvailabilityStartTimeConfiguration.FixedAvailabilityStartTimeMember
  | DashAvailabilityStartTimeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DashAvailabilityStartTimeConfiguration {
  /**
   * The fixed availability start time for the DASH manifest, in ISO 8601 date-time format. The value must have hourly granularity, meaning that the minutes, seconds, and fractional seconds must be zero. The value must be on or after `2024-01-01T00:00:00Z` and must be at least 14 days before the current time.
   *
   * @public
   */
  export interface FixedAvailabilityStartTimeMember {
    FixedAvailabilityStartTime: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    FixedAvailabilityStartTime?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    FixedAvailabilityStartTime: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The base URLs to use for retrieving segments. You can specify multiple locations and indicate the priority and weight for when each should be used, for use in mutli-CDN workflows.
 *
 * @public
 */
export interface DashBaseUrl {
  /**
   * A source location for segments.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  ServiceLocation?: string | undefined;

  /**
   * For use with DVB-DASH profiles only. The priority of this location for servings segments. The lower the number, the higher the priority.
   *
   * @public
   */
  DvbPriority?: number | undefined;

  /**
   * For use with DVB-DASH profiles only. The weighting for source locations that have the same priority.
   *
   * @public
   */
  DvbWeight?: number | undefined;
}

/**
 * For use with DVB-DASH profiles only. The settings for error reporting from the playback device that you want Elemental MediaPackage to pass through to the manifest.
 *
 * @public
 */
export interface DashDvbMetricsReporting {
  /**
   * The URL where playback devices send error reports.
   *
   * @public
   */
  ReportingUrl: string | undefined;

  /**
   * The number of playback devices per 1000 that will send error reports to the reporting URL. This represents the probability that a playback device will be a reporting player for this session.
   *
   * @public
   */
  Probability?: number | undefined;
}

/**
 * For use with DVB-DASH profiles only. The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.
 *
 * @public
 */
export interface DashDvbFontDownload {
  /**
   * The URL for downloading fonts for subtitles.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The `mimeType` of the resource that's at the font download URL.
   *
   * For information about font MIME types, see the [MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks](https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf) document.
   *
   * @public
   */
  MimeType?: string | undefined;

  /**
   * The `fontFamily` name for subtitles, as described in [EBU-TT-D Subtitling Distribution Format](https://tech.ebu.ch/publications/tech3380).
   *
   * @public
   */
  FontFamily?: string | undefined;
}

/**
 * For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.
 *
 * @public
 */
export interface DashDvbSettings {
  /**
   * Subtitle font settings.
   *
   * @public
   */
  FontDownload?: DashDvbFontDownload | undefined;

  /**
   * Playback device error reporting settings.
   *
   * @public
   */
  ErrorMetrics?: DashDvbMetricsReporting[] | undefined;
}

/**
 * The multiview combination for a pinned manifest. MediaPackage serves the manifest with this layout and these sources, so players request it without an `aws.multiview` query parameter.
 *
 * If a request for a pinned manifest also includes an `aws.multiview` query parameter, MediaPackage rejects the request, even when that parameter requests the same combination.
 *
 * @public
 */
export interface MultiviewFilterConfiguration {
  /**
   * The layout that MediaPackage uses to composite the tiles into a single output. This layout must be one of the `AvailableLayouts` of the channel that this origin endpoint is on.
   *
   * @public
   */
  Layout: MultiviewLayoutType | undefined;

  /**
   * The source channels to composite, in tile order. Each channel must be one of the `AvailableSources` of the channel that this origin endpoint is on, and the number of channels must equal the number of tiles in `Layout`.
   *
   * @public
   */
  Sources: string[] | undefined;
}

/**
 * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
 *
 * @public
 */
export interface FilterConfiguration {
  /**
   * Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.
   *
   * @public
   */
  ManifestFilter?: string | undefined;

  /**
   * Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.
   *
   * @public
   */
  DrmSettings?: string | undefined;

  /**
   * Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.
   *
   * @public
   */
  Start?: Date | undefined;

  /**
   * Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.
   *
   * @public
   */
  End?: Date | undefined;

  /**
   * Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.
   *
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.
   *
   * @public
   */
  ClipStartTime?: Date | undefined;

  /**
   * Optionally pin this manifest to a single multiview combination, so that players request it without an `aws.multiview` query parameter. When you pin a combination, note that you cannot use the `aws.multiview` query parameter for this manifest's endpoint URL, even when that parameter requests the same combination.
   *
   * This setting is valid only on an origin endpoint whose channel has an `InputType` of `MULTIVIEW`.
   *
   * @public
   */
  Multiview?: MultiviewFilterConfiguration | undefined;
}

/**
 * Details about the content that you want MediaPackage to pass through in the manifest to the playback device.
 *
 * @public
 */
export interface DashProgramInformation {
  /**
   * The title for the manifest.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Information about the content provider.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * A copyright statement about the content.
   *
   * @public
   */
  Copyright?: string | undefined;

  /**
   * The language code for this manifest.
   *
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * An absolute URL that contains more information about this content.
   *
   * @public
   */
  MoreInformationUrl?: string | undefined;
}

/**
 * The SCTE configuration.
 *
 * @public
 */
export interface ScteDash {
  /**
   * Choose how ad markers are included in the packaged content. If you include ad markers in the content stream in your upstream encoders, then you need to inform MediaPackage what to do with the ad markers in the output.
   *
   * Value description:
   *
   * - `Binary` - The SCTE-35 marker is expressed as a hex-string (Base64 string) rather than full XML.
   * - `XML` - The SCTE marker is expressed fully in XML.
   *
   * @public
   */
  AdMarkerDash?: AdMarkerDash | undefined;

  /**
   * Controls which SCTE-35 events appear in DASH manifests. `ALL` includes all non-implicit SCTE-35 events. `MATCHES_FILTER` includes only events whose type matches the configured `ScteFilter`.
   *
   * If you don't specify a value, the default is `ALL`.
   *
   * @public
   */
  ScteInManifests?: ScteInManifests | undefined;
}

/**
 * The settings for TTML subtitles.
 *
 * @public
 */
export interface DashTtmlConfiguration {
  /**
   * The profile that MediaPackage uses when signaling subtitles in the manifest. `IMSC` is the default profile. `EBU-TT-D` produces subtitles that are compliant with the EBU-TT-D TTML profile. MediaPackage passes through subtitle styles to the manifest. For more information about EBU-TT-D subtitles, see [EBU-TT-D Subtitling Distribution Format](https://tech.ebu.ch/publications/tech3380).
   *
   * @public
   */
  TtmlProfile: DashTtmlProfile | undefined;
}

/**
 * The configuration for DASH subtitles.
 *
 * @public
 */
export interface DashSubtitleConfiguration {
  /**
   * Settings for TTML subtitles.
   *
   * @public
   */
  TtmlConfiguration?: DashTtmlConfiguration | undefined;
}

/**
 * Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).
 *
 * @public
 */
export interface DashUtcTiming {
  /**
   * The UTC timing mode.
   *
   * @public
   */
  TimingMode?: DashUtcTimingMode | undefined;

  /**
   * The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.
   *
   * @public
   */
  TimingSource?: string | undefined;
}

/**
 * Create a DASH manifest configuration.
 *
 * @public
 */
export interface CreateDashManifestConfiguration {
  /**
   * A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The total duration (in seconds) of the manifest's content.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.
   *
   * @public
   */
  MinUpdatePeriodSeconds?: number | undefined;

  /**
   * Minimum amount of content (in seconds) that a player must keep available in the buffer.
   *
   * @public
   */
  MinBufferTimeSeconds?: number | undefined;

  /**
   * The amount of time (in seconds) that the player should be from the end of the manifest.
   *
   * @public
   */
  SuggestedPresentationDelaySeconds?: number | undefined;

  /**
   * Determines the type of variable used in the `media` URL of the `SegmentTemplate` tag in the manifest. Also specifies if segment timeline information is included in `SegmentTimeline` or `SegmentTemplate`.
   *
   * Value description:
   *
   * - `NUMBER_WITH_TIMELINE` - The `$Number$` variable is used in the `media` URL. The value of this variable is the sequential number of the segment. A full `SegmentTimeline` object is presented in each `SegmentTemplate`.
   *
   * @public
   */
  SegmentTemplateFormat?: DashSegmentTemplateFormat | undefined;

  /**
   * A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Type `ADS` to indicate that AWS Elemental MediaPackage must create periods in the output manifest that correspond to SCTE-35 ad markers in the input source. Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see [Multi-period DASH in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html).
   *
   * @public
   */
  PeriodTriggers?: DashPeriodTrigger[] | undefined;

  /**
   * The SCTE configuration.
   *
   * @public
   */
  ScteDash?: ScteDash | undefined;

  /**
   * Determines how the DASH manifest signals the DRM content.
   *
   * @public
   */
  DrmSignaling?: DashDrmSignaling | undefined;

  /**
   * Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).
   *
   * @public
   */
  UtcTiming?: DashUtcTiming | undefined;

  /**
   * The profile that the output is compliant with.
   *
   * @public
   */
  Profiles?: DashProfile[] | undefined;

  /**
   * The base URLs to use for retrieving segments.
   *
   * @public
   */
  BaseUrls?: DashBaseUrl[] | undefined;

  /**
   * Details about the content that you want MediaPackage to pass through in the manifest to the playback device.
   *
   * @public
   */
  ProgramInformation?: DashProgramInformation | undefined;

  /**
   * For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.
   *
   * @public
   */
  DvbSettings?: DashDvbSettings | undefined;

  /**
   * The layout of the DASH manifest that MediaPackage produces. `STANDARD` indicates a default manifest, which is compacted. `NONE` indicates a full manifest.
   *
   * For information about compactness, see [DASH manifest compactness](https://docs.aws.amazon.com/mediapackage/latest/userguide/compacted.html) in the *Elemental MediaPackage v2 User Guide*.
   *
   * @public
   */
  Compactness?: DashCompactness | undefined;

  /**
   * How MediaPackage represents the audio timeline in the DASH manifest. This setting applies DASH Segment Duration Patternization, as defined in the MPEG-DASH specification, to audio adaptation sets. When set to `PATTERNED`, MediaPackage uses a pattern-based segment template for audio, which reduces manifest size by expressing repeating segment durations as a pattern instead of listing each segment individually. When set to `NONE`, the manifest contains an explicit timeline that lists each audio segment.
   *
   * Valid values: `NONE` | `PATTERNED`
   *
   * For information about audio timeline patterns, see [DASH audio timeline pattern](https://docs.aws.amazon.com/mediapackage/latest/userguide/dash-audio-timeline-pattern.html) in the *Elemental MediaPackage v2 User Guide*.
   *
   * @public
   */
  AudioTimelinePattern?: DashAudioTimelinePattern | undefined;

  /**
   * The configuration for DASH subtitles.
   *
   * @public
   */
  SubtitleConfiguration?: DashSubtitleConfiguration | undefined;

  /**
   * The type of path to use in manifest URIs. `LEAF` uses leaf-relative paths (for example, `index_1.mpd`). `ROOT` uses root-relative paths that include the full path from root (for example, `/out/v1/channel-group/channel/endpoint/index_1.mpd`). If you don't specify a value, the default is `LEAF`.
   *
   * @public
   */
  UriPathType?: UriPathType | undefined;

  /**
   * The configuration for the DASH `availabilityStartTime` attribute of the Media Presentation Description (MPD). If you don't specify a value, MediaPackage uses the default availability start time of `2024-01-01T00:00:00Z`.
   *
   * @public
   */
  AvailabilityStartTimeConfiguration?: DashAvailabilityStartTimeConfiguration | undefined;
}

/**
 * The failover settings for the endpoint.
 *
 * @public
 */
export interface ForceEndpointErrorConfiguration {
  /**
   * The failover conditions for the endpoint. The options are:
   *
   * - `STALE_MANIFEST` - The manifest stalled and there are no new segments or parts.
   * - `INCOMPLETE_MANIFEST` - There is a gap in the manifest.
   * - `MISSING_DRM_KEY` - Key rotation is enabled but we're unable to fetch the key for the current key period.
   * - `SLATE_INPUT` - The segments which contain slate content are considered to be missing content.
   *
   * @public
   */
  EndpointErrorConditions?: EndpointErrorCondition[] | undefined;
}

/**
 * The SCTE configuration.
 *
 * @public
 */
export interface ScteHls {
  /**
   * Ad markers indicate when ads should be inserted during playback. If you include ad markers in the content stream in your upstream encoders, then you need to inform MediaPackage what to do with the ad markers in the output. Choose what you want MediaPackage to do with the ad markers.
   *
   * Value description:
   *
   * - SCTE35_ENHANCED - Generate industry-standard CUE tag ad markers in HLS manifests based on SCTE-35 input messages from the input stream.
   * - DATERANGE - Insert EXT-X-DATERANGE tags to signal ad and program transition events in TS and CMAF manifests. If you use DATERANGE, you must set a programDateTimeIntervalSeconds value of 1 or higher. To learn more about DATERANGE, see [SCTE-35 Ad Marker EXT-X-DATERANGE](http://docs.aws.amazon.com/mediapackage/latest/ug/scte-35-ad-marker-ext-x-daterange.html).
   *
   * @public
   */
  AdMarkerHls?: AdMarkerHls | undefined;

  /**
   * Controls which SCTE-35 events appear in HLS manifests. `ALL` includes all non-implicit SCTE-35 events. `MATCHES_FILTER` includes only events whose type matches the configured `ScteFilter`.
   *
   * If you don't specify a value, the default is `ALL`.
   *
   * @public
   */
  ScteInManifests?: ScteInManifests | undefined;
}

/**
 * To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.
 *
 * @public
 */
export interface StartTag {
  /**
   * Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.
   *
   * @public
   */
  TimeOffset: number | undefined;

  /**
   * Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.
   *
   * @public
   */
  Precise?: boolean | undefined;
}

/**
 * Create an HTTP live streaming (HLS) manifest configuration.
 *
 * @public
 */
export interface CreateHlsManifestConfiguration {
  /**
   * A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index, with an added suffix to distinguish it from the manifest name. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * The SCTE configuration.
   *
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.
   *
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * The total duration (in seconds) of the manifest's content.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *
   * Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   *
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see [Amazon Web Services Signature Version 4 for API requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html) in *Identity and Access Management User Guide*.
   *
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;

  /**
   * The type of path to use in manifest URIs. `LEAF` uses leaf-relative paths (for example, `index_1.m3u8`). `ROOT` uses root-relative paths that include the full path from root (for example, `/out/v1/channel-group/channel/endpoint/index_1.m3u8`). If you don't specify a value, the default is `LEAF`.
   *
   * @public
   */
  UriPathType?: UriPathType | undefined;
}

/**
 * Create a low-latency HTTP live streaming (HLS) manifest configuration.
 *
 * @public
 */
export interface CreateLowLatencyHlsManifestConfiguration {
  /**
   * A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index, with an added suffix to distinguish it from the manifest name. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * The SCTE configuration.
   *
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.
   *
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * The total duration (in seconds) of the manifest's content.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *
   * Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   *
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see [Amazon Web Services Signature Version 4 for API requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html) in *Identity and Access Management User Guide*.
   *
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;

  /**
   * The type of path to use in manifest URIs. `LEAF` uses leaf-relative paths (for example, `index_1.m3u8`). `ROOT` uses root-relative paths that include the full path from root (for example, `/out/v1/channel-group/channel/endpoint/index_1.m3u8`). If you don't specify a value, the default is `LEAF`.
   *
   * @public
   */
  UriPathType?: UriPathType | undefined;
}

/**
 * Configuration parameters for creating a Microsoft Smooth Streaming (MSS) manifest. MSS is a streaming media format developed by Microsoft that delivers adaptive bitrate streaming content to compatible players and devices.
 *
 * @public
 */
export interface CreateMssManifestConfiguration {
  /**
   * A short string that's appended to the endpoint URL to create a unique path to this MSS manifest. The manifest name must be unique within the origin endpoint and can contain letters, numbers, hyphens, and underscores.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The total duration (in seconds) of the manifest window. This determines how much content is available in the manifest at any given time. The manifest window slides forward as new segments become available, maintaining a consistent duration of content. The minimum value is 30 seconds.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Determines the layout format of the MSS manifest. This controls how the manifest is structured and presented to client players, affecting compatibility with different MSS-compatible devices and applications.
   *
   * @public
   */
  ManifestLayout?: MssManifestLayout | undefined;
}

/**
 * The encryption type.
 *
 * @public
 */
export interface EncryptionMethod {
  /**
   * The encryption method to use.
   *
   * @public
   */
  TsEncryptionMethod?: TsEncryptionMethod | undefined;

  /**
   * The encryption method to use.
   *
   * @public
   */
  CmafEncryptionMethod?: CmafEncryptionMethod | undefined;

  /**
   * The encryption method used for Microsoft Smooth Streaming (MSS) content. This specifies how the MSS segments are encrypted to protect the content during delivery to client players.
   *
   * @public
   */
  IsmEncryptionMethod?: IsmEncryptionMethod | undefined;
}

/**
 * The configuration that controls the content key period timing information that MediaPackage signals to your DRM key provider.
 *
 * @public
 */
export interface ContentKeyPeriodConfiguration {
  /**
   * Specifies what timing information MediaPackage signals in the `ContentKeyPeriod` to your DRM key provider. If you don't specify a value, the default is `INDEX_ONLY`. Signaling start and end times (`START_END_ONLY` or `INDEX_WITH_START_END`) also requires key rotation to be enabled.
   *
   * The allowed values are:
   *
   * - `INDEX_ONLY` - Signals only the content key index. This is the default and matches the current behavior. It's supported for both SPEKE Version 2.0 and 2.1.
   * - `START_END_ONLY` - Signals only the start and end times the key is used for. Requires `SpekeVersion` `V2_1`.
   * - `INDEX_WITH_START_END` - Signals both the content key index and the start and end times the key is used for. Requires `SpekeVersion` `V2_1`.
   *
   * @public
   */
  ContentKeyPeriodTiming?: ContentKeyPeriodTiming | undefined;
}

/**
 * Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.
 *
 * @public
 */
export interface EncryptionContractConfiguration {
  /**
   * A collection of audio encryption presets.
   *
   * Value description:
   *
   * - PRESET-AUDIO-1 - Use one content key to encrypt all of the audio tracks in your stream.
   * - PRESET-AUDIO-2 - Use one content key to encrypt all of the stereo audio tracks and one content key to encrypt all of the multichannel audio tracks.
   * - PRESET-AUDIO-3 - Use one content key to encrypt all of the stereo audio tracks, one content key to encrypt all of the multichannel audio tracks with 3 to 6 channels, and one content key to encrypt all of the multichannel audio tracks with more than 6 channels.
   * - SHARED - Use the same content key for all of the audio and video tracks in your stream.
   * - UNENCRYPTED - Don't encrypt any of the audio tracks in your stream.
   *
   * @public
   */
  PresetSpeke20Audio: PresetSpeke20Audio | undefined;

  /**
   * A collection of video encryption presets.
   *
   * Value description:
   *
   * - PRESET-VIDEO-1 - Use one content key to encrypt all of the video tracks in your stream.
   * - PRESET-VIDEO-2 - Use one content key to encrypt all of the SD video tracks and one content key for all HD and higher resolutions video tracks.
   * - PRESET-VIDEO-3 - Use one content key to encrypt all of the SD video tracks, one content key for HD video tracks and one content key for all UHD video tracks.
   * - PRESET-VIDEO-4 - Use one content key to encrypt all of the SD video tracks, one content key for HD video tracks, one content key for all UHD1 video tracks and one content key for all UHD2 video tracks.
   * - PRESET-VIDEO-5 - Use one content key to encrypt all of the SD video tracks, one content key for HD1 video tracks, one content key for HD2 video tracks, one content key for all UHD1 video tracks and one content key for all UHD2 video tracks.
   * - PRESET-VIDEO-6 - Use one content key to encrypt all of the SD video tracks, one content key for HD1 video tracks, one content key for HD2 video tracks and one content key for all UHD video tracks.
   * - PRESET-VIDEO-7 - Use one content key to encrypt all of the SD+HD1 video tracks, one content key for HD2 video tracks and one content key for all UHD video tracks.
   * - PRESET-VIDEO-8 - Use one content key to encrypt all of the SD+HD1 video tracks, one content key for HD2 video tracks, one content key for all UHD1 video tracks and one content key for all UHD2 video tracks.
   * - SHARED - Use the same content key for all of the video and audio tracks in your stream.
   * - UNENCRYPTED - Don't encrypt any of the video tracks in your stream.
   *
   * @public
   */
  PresetSpeke20Video: PresetSpeke20Video | undefined;
}

/**
 * The parameters for the SPEKE key provider.
 *
 * @public
 */
export interface SpekeKeyProvider {
  /**
   * Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.
   *
   * @public
   */
  EncryptionContractConfiguration: EncryptionContractConfiguration | undefined;

  /**
   * The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.
   *
   * The following example shows a resource ID: `MovieNight20171126093045`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The DRM solution provider you're using to protect your content during distribution.
   *
   * @public
   */
  DrmSystems: DrmSystem[] | undefined;

  /**
   * The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.
   *
   * Valid format: `arn:aws:iam::\{accountID\}:role/\{name\}`. The following example shows a role ARN: `arn:aws:iam::444455556666:role/SpekeAccess`
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.
   *
   * The following example shows a URL: `https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection`
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The ARN for the certificate that you imported to Amazon Web Services Certificate Manager to add content key encryption to this endpoint. For this feature to work, your DRM key provider must support content key encryption.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Specifies the SPEKE version used with your DRM key provider. If you don't specify a value, the default is `V2_0`.
   *
   * The allowed values are:
   *
   * - `V2_0` - Follows the SPEKE Version 2.0 contract and signals only the content key index in key requests. This is the default.
   * - `V2_1` - Follows the SPEKE Version 2.1 contract and additionally supports signaling the start and end times a content key is used for, using `ContentKeyPeriodConfiguration`.
   *
   * For more information, see [SPEKE Version 2.0 payload](https://docs.aws.amazon.com/speke/latest/documentation/standard-payload-components-v2.html).
   *
   * @public
   */
  SpekeVersion?: SpekeVersion | undefined;

  /**
   * The configuration that controls whether MediaPackage signals the start and end times a content key is used for, in the `ContentKeyPeriod` sent to your DRM key provider. Signaling this timing is supported only when key rotation is enabled (`KeyRotationIntervalSeconds` is set to a non-zero value) and `SpekeVersion` is `V2_1`. You can update these settings on an existing origin endpoint.
   *
   * @public
   */
  ContentKeyPeriodConfiguration?: ContentKeyPeriodConfiguration | undefined;
}

/**
 * The parameters for encrypting content.
 *
 * @public
 */
export interface Encryption {
  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
   *
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * The encryption method to use.
   *
   * @public
   */
  EncryptionMethod: EncryptionMethod | undefined;

  /**
   * The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.
   *
   * The following example setting causes the service to rotate keys every thirty minutes: `1800`
   *
   * @public
   */
  KeyRotationIntervalSeconds?: number | undefined;

  /**
   * Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.
   *
   * When set to `true`, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.
   *
   * Important considerations:
   *
   * - This setting only affects CMAF container formats
   * - Key rotation can still be handled through media playlist signaling
   * - PSSH and TENC boxes remain unaffected
   * - Default behavior is preserved when this setting is disabled
   *
   * Valid values: `true` | `false`
   *
   * Default: `false`
   *
   * @public
   */
  CmafExcludeSegmentDrmMetadata?: boolean | undefined;

  /**
   * The parameters for the SPEKE key provider.
   *
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * The SCTE configuration.
 *
 * @public
 */
export interface Scte {
  /**
   * The SCTE-35 message types that you want to be treated as ad markers in the output.
   *
   * @public
   */
  ScteFilter?: ScteFilter[] | undefined;

  /**
   * Controls whether SCTE-35 messages are included in segment files.
   *
   * - None – SCTE-35 messages are not included in segments (default)
   * - All – SCTE-35 messages are embedded in segment data
   * - MatchesFilter – SCTE-35 messages which match the ScteFilter are embedded in segment data
   *
   * For DASH manifests, when set to `All` or `MatchesFilter`, an `InbandEventStream` tag signals that SCTE messages are present in segments. This setting works independently of manifest ad markers.
   *
   * @public
   */
  ScteInSegments?: ScteInSegments | undefined;

  /**
   * A list of additional non-Ad SCTE-35 event types to treat as advertisements. When configured, events matching these types produce ad markers (such as `SCTE35-OUT` and `SCTE35-IN` in HLS DATERANGE tags) in manifests.
   *
   * Valid values: `PROGRAM` | `CHAPTER` | `UNSCHEDULED_EVENT` | `ALTERNATE_CONTENT_OPPORTUNITY` | `NETWORK`
   *
   * If you don't specify any values, the default is empty (only default ad types are used).
   *
   * @public
   */
  CustomAdTypes?: CustomAdType[] | undefined;
}

/**
 * The segment configuration, including the segment name, duration, and other configuration values.
 *
 * @public
 */
export interface Segment {
  /**
   * The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.
   *
   * @public
   */
  SegmentDurationSeconds?: number | undefined;

  /**
   * The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.
   *
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.
   *
   * @public
   */
  TsUseAudioRenditionGroup?: boolean | undefined;

  /**
   * When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.
   *
   * @public
   */
  IncludeIframeOnlyStreams?: boolean | undefined;

  /**
   * By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.
   *
   * @public
   */
  TsIncludeDvbSubtitles?: boolean | undefined;

  /**
   * The SCTE configuration options in the segment settings.
   *
   * @public
   */
  Scte?: Scte | undefined;

  /**
   * The parameters for encrypting content.
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The output timestamp mode for the origin endpoint's segments. This setting is only configurable on channels with `OutputLockingMode` set to `NON_EPOCH_LOCKED`. This value is immutable after endpoint creation. If you don't specify a value, the default is `PASSTHROUGH`.
   *
   * The allowed values are:
   *
   * - `PASSTHROUGH` - Output PTS (Presentation Timestamp) values pass through unchanged from the input.
   * - `REBASED_TO_CHANNEL_START` - Output PTS is rebased relative to the channel start time.
   *
   * @public
   */
  OutputTimestampMode?: OutputTimestampMode | undefined;
}

/**
 * @public
 */
export interface CreateOriginEndpointRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and must be unique for your account in the AWS Region and channel. You can't use spaces in the name. You can't change the name after you create the endpoint.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The type of container to attach to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. You can't change the container type after you create the endpoint.
   *
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * The segment configuration, including the segment name, duration, and other configuration values.
   *
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Enter any descriptive text that helps you to identify the origin endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).
   *
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * An HTTP live streaming (HLS) manifest configuration.
   *
   * @public
   */
  HlsManifests?: CreateHlsManifestConfiguration[] | undefined;

  /**
   * A low-latency HLS manifest configuration.
   *
   * @public
   */
  LowLatencyHlsManifests?: CreateLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * A DASH manifest configuration.
   *
   * @public
   */
  DashManifests?: CreateDashManifestConfiguration[] | undefined;

  /**
   * A list of Microsoft Smooth Streaming (MSS) manifest configurations for the origin endpoint. You can configure multiple MSS manifests to provide different streaming experiences or to support different client requirements.
   *
   * @public
   */
  MssManifests?: CreateMssManifestConfiguration[] | undefined;

  /**
   * The failover settings for the endpoint.
   *
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * The separator character to use in generated URIs for this origin endpoint. This setting applies to all manifest types on the endpoint. If you don't specify a value, the default is `UNDERSCORE`.
   *
   * @public
   */
  UriSeparator?: UriSeparator | undefined;

  /**
   * The output mode for stream names in egress manifests. This setting is valid only when the associated channel's `InputType` is `HLS`. You can't change the stream name output mode after you create the endpoint.
   *
   * `INDEX` uses numeric indices for stream names (for example, 1, 2, 3). `PASSTHROUGH_NAME` uses the stream names from the input manifest. If you don't specify a value, the default is `INDEX`.
   *
   * @public
   */
  StreamNameOutputMode?: StreamNameOutputMode | undefined;

  /**
   * A comma-separated list of tag key:value pairs that you define. For example:
   *
   * `"Key1": "Value1",`
   *
   * `"Key2": "Value2"`
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Retrieve the DASH manifest configuration.
 *
 * @public
 */
export interface GetDashManifestConfiguration {
  /**
   * A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The egress domain URL for stream delivery from MediaPackage.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The total duration (in seconds) of the manifest's content.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.
   *
   * @public
   */
  MinUpdatePeriodSeconds?: number | undefined;

  /**
   * Minimum amount of content (in seconds) that a player must keep available in the buffer.
   *
   * @public
   */
  MinBufferTimeSeconds?: number | undefined;

  /**
   * The amount of time (in seconds) that the player should be from the end of the manifest.
   *
   * @public
   */
  SuggestedPresentationDelaySeconds?: number | undefined;

  /**
   * Determines the type of variable used in the `media` URL of the `SegmentTemplate` tag in the manifest. Also specifies if segment timeline information is included in `SegmentTimeline` or `SegmentTemplate`.
   *
   * Value description:
   *
   * - `NUMBER_WITH_TIMELINE` - The `$Number$` variable is used in the `media` URL. The value of this variable is the sequential number of the segment. A full `SegmentTimeline` object is presented in each `SegmentTemplate`.
   *
   * @public
   */
  SegmentTemplateFormat?: DashSegmentTemplateFormat | undefined;

  /**
   * A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see [Multi-period DASH in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html).
   *
   * @public
   */
  PeriodTriggers?: DashPeriodTrigger[] | undefined;

  /**
   * The SCTE configuration.
   *
   * @public
   */
  ScteDash?: ScteDash | undefined;

  /**
   * Determines how the DASH manifest signals the DRM content.
   *
   * @public
   */
  DrmSignaling?: DashDrmSignaling | undefined;

  /**
   * Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).
   *
   * @public
   */
  UtcTiming?: DashUtcTiming | undefined;

  /**
   * The profile that the output is compliant with.
   *
   * @public
   */
  Profiles?: DashProfile[] | undefined;

  /**
   * The base URL to use for retrieving segments.
   *
   * @public
   */
  BaseUrls?: DashBaseUrl[] | undefined;

  /**
   * Details about the content that you want MediaPackage to pass through in the manifest to the playback device.
   *
   * @public
   */
  ProgramInformation?: DashProgramInformation | undefined;

  /**
   * For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.
   *
   * @public
   */
  DvbSettings?: DashDvbSettings | undefined;

  /**
   * The layout of the DASH manifest that MediaPackage produces. `STANDARD` indicates a default manifest, which is compacted. `NONE` indicates a full manifest.
   *
   * @public
   */
  Compactness?: DashCompactness | undefined;

  /**
   * How MediaPackage represents the audio timeline in the DASH manifest, using DASH Segment Duration Patternization for audio adaptation sets. `PATTERNED` indicates that MediaPackage uses a pattern-based segment template for audio, reducing manifest size. `NONE` indicates that the manifest contains an explicit timeline for each audio segment.
   *
   * @public
   */
  AudioTimelinePattern?: DashAudioTimelinePattern | undefined;

  /**
   * The configuration for DASH subtitles.
   *
   * @public
   */
  SubtitleConfiguration?: DashSubtitleConfiguration | undefined;

  /**
   * The type of path used in manifest URIs. `LEAF` indicates leaf-relative paths. `ROOT` indicates root-relative paths that include the full path from root.
   *
   * @public
   */
  UriPathType?: UriPathType | undefined;

  /**
   * The configuration for the DASH `availabilityStartTime` attribute of the Media Presentation Description (MPD).
   *
   * @public
   */
  AvailabilityStartTimeConfiguration?: DashAvailabilityStartTimeConfiguration | undefined;
}

/**
 * Retrieve the HTTP live streaming (HLS) manifest configuration.
 *
 * @public
 */
export interface GetHlsManifestConfiguration {
  /**
   * A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The egress domain URL for stream delivery from MediaPackage.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * The total duration (in seconds) of the manifest's content.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *
   * Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   *
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * The SCTE configuration.
   *
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.
   *
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see [Amazon Web Services Signature Version 4 for API requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html) in *Identity and Access Management User Guide*.
   *
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;

  /**
   * The type of path used in manifest URIs. `LEAF` indicates leaf-relative paths. `ROOT` indicates root-relative paths that include the full path from root.
   *
   * @public
   */
  UriPathType?: UriPathType | undefined;
}

/**
 * Retrieve the low-latency HTTP live streaming (HLS) manifest configuration.
 *
 * @public
 */
export interface GetLowLatencyHlsManifestConfiguration {
  /**
   * A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The egress domain URL for stream delivery from MediaPackage.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * The total duration (in seconds) of the manifest's content.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *
   * Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   *
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * The SCTE configuration.
   *
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.
   *
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see [Amazon Web Services Signature Version 4 for API requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html) in *Identity and Access Management User Guide*.
   *
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;

  /**
   * The type of path used in manifest URIs. `LEAF` indicates leaf-relative paths. `ROOT` indicates root-relative paths that include the full path from root.
   *
   * @public
   */
  UriPathType?: UriPathType | undefined;
}

/**
 * Configuration details for a Microsoft Smooth Streaming (MSS) manifest associated with an origin endpoint. This includes all the settings and properties that define how the MSS content is packaged and delivered.
 *
 * @public
 */
export interface GetMssManifestConfiguration {
  /**
   * The name of the MSS manifest. This name is appended to the origin endpoint URL to create the unique path for accessing this specific MSS manifest.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The complete URL for accessing the MSS manifest. Client players use this URL to retrieve the manifest and begin streaming the Microsoft Smooth Streaming content.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.
   *
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * The duration (in seconds) of the manifest window. This represents the total amount of content available in the manifest at any given time.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * The layout format of the MSS manifest, which determines how the manifest is structured for client compatibility.
   *
   * @public
   */
  ManifestLayout?: MssManifestLayout | undefined;
}

/**
 * @public
 */
export interface CreateOriginEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The type of container attached to this origin endpoint.
   *
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * The segment configuration, including the segment name, duration, and other configuration values.
   *
   * @public
   */
  Segment: Segment | undefined;

  /**
   * The date and time the origin endpoint was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the origin endpoint was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The description for your origin endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.
   *
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * An HTTP live streaming (HLS) manifest configuration.
   *
   * @public
   */
  HlsManifests?: GetHlsManifestConfiguration[] | undefined;

  /**
   * A low-latency HLS manifest configuration.
   *
   * @public
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * A DASH manifest configuration.
   *
   * @public
   */
  DashManifests?: GetDashManifestConfiguration[] | undefined;

  /**
   * The Microsoft Smooth Streaming (MSS) manifest configurations that were created for this origin endpoint.
   *
   * @public
   */
  MssManifests?: GetMssManifestConfiguration[] | undefined;

  /**
   * The failover settings for the endpoint.
   *
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * The separator character used in generated URIs for this origin endpoint.
   *
   * @public
   */
  UriSeparator?: UriSeparator | undefined;

  /**
   * The output mode for stream names in egress manifests for this origin endpoint.
   *
   * @public
   */
  StreamNameOutputMode?: StreamNameOutputMode | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the origin endpoint.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointResponse {}

/**
 * @public
 */
export interface GetOriginEndpointRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetOriginEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The type of container attached to this origin endpoint.
   *
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * The segment configuration, including the segment name, duration, and other configuration values.
   *
   * @public
   */
  Segment: Segment | undefined;

  /**
   * The date and time the origin endpoint was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the origin endpoint was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The time that the origin endpoint was last reset.
   *
   * @public
   */
  ResetAt?: Date | undefined;

  /**
   * The description for your origin endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.
   *
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * An HTTP live streaming (HLS) manifest configuration.
   *
   * @public
   */
  HlsManifests?: GetHlsManifestConfiguration[] | undefined;

  /**
   * A low-latency HLS manifest configuration.
   *
   * @public
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * A DASH manifest configuration.
   *
   * @public
   */
  DashManifests?: GetDashManifestConfiguration[] | undefined;

  /**
   * The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.
   *
   * @public
   */
  MssManifests?: GetMssManifestConfiguration[] | undefined;

  /**
   * The failover settings for the endpoint.
   *
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * The separator character used in generated URIs for this origin endpoint.
   *
   * @public
   */
  UriSeparator?: UriSeparator | undefined;

  /**
   * The output mode for stream names in egress manifests for this origin endpoint.
   *
   * @public
   */
  StreamNameOutputMode?: StreamNameOutputMode | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the origin endpoint.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListOriginEndpointsRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from the GET list request. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * List the DASH manifest configuration.
 *
 * @public
 */
export interface ListDashManifestConfiguration {
  /**
   * A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The egress domain URL for stream delivery from MediaPackage.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * List the HTTP live streaming (HLS) manifest configuration.
 *
 * @public
 */
export interface ListHlsManifestConfiguration {
  /**
   * A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * The egress domain URL for stream delivery from MediaPackage.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * List the low-latency HTTP live streaming (HLS) manifest configuration.
 *
 * @public
 */
export interface ListLowLatencyHlsManifestConfiguration {
  /**
   * A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.
   *
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * The egress domain URL for stream delivery from MediaPackage.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Summary information about a Microsoft Smooth Streaming (MSS) manifest configuration. This provides key details about the MSS manifest without including all configuration parameters.
 *
 * @public
 */
export interface ListMssManifestConfiguration {
  /**
   * The name of the MSS manifest configuration.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The URL for accessing the MSS manifest.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * The configuration of the origin endpoint.
 *
 * @public
 */
export interface OriginEndpointListConfiguration {
  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file.
   *
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * Any descriptive information that you want to add to the origin endpoint for future identification purposes.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time the origin endpoint was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time the origin endpoint was modified.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * An HTTP live streaming (HLS) manifest configuration.
   *
   * @public
   */
  HlsManifests?: ListHlsManifestConfiguration[] | undefined;

  /**
   * A low-latency HLS manifest configuration.
   *
   * @public
   */
  LowLatencyHlsManifests?: ListLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * A DASH manifest configuration.
   *
   * @public
   */
  DashManifests?: ListDashManifestConfiguration[] | undefined;

  /**
   * A list of Microsoft Smooth Streaming (MSS) manifest configurations associated with the origin endpoint. Each configuration represents a different MSS streaming option available from this endpoint.
   *
   * @public
   */
  MssManifests?: ListMssManifestConfiguration[] | undefined;

  /**
   * The failover settings for the endpoint.
   *
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * The separator character used in generated URIs for this origin endpoint.
   *
   * @public
   */
  UriSeparator?: UriSeparator | undefined;

  /**
   * The output mode for stream names in egress manifests for this origin endpoint.
   *
   * @public
   */
  StreamNameOutputMode?: StreamNameOutputMode | undefined;
}

/**
 * @public
 */
export interface ListOriginEndpointsResponse {
  /**
   * The objects being returned.
   *
   * @public
   */
  Items?: OriginEndpointListConfiguration[] | undefined;

  /**
   * The pagination token from the GET list request. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointPolicyRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointPolicyResponse {}

/**
 * @public
 */
export interface GetOriginEndpointPolicyRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetOriginEndpointPolicyResponse {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The policy assigned to the origin endpoint.
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * The settings for using authorization headers between the MediaPackage endpoint and your CDN.
   *
   * For information about CDN authorization, see [CDN authorization in Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/userguide/cdn-auth.html) in the MediaPackage user guide.
   *
   * @public
   */
  CdnAuthConfiguration?: CdnAuthConfiguration | undefined;
}

/**
 * @public
 */
export interface PutOriginEndpointPolicyRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The policy to attach to the specified origin endpoint.
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * The settings for using authorization headers between the MediaPackage endpoint and your CDN.
   *
   * For information about CDN authorization, see [CDN authorization in Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/userguide/cdn-auth.html) in the MediaPackage user guide.
   *
   * @public
   */
  CdnAuthConfiguration?: CdnAuthConfiguration | undefined;
}

/**
 * @public
 */
export interface PutOriginEndpointPolicyResponse {}

/**
 * @public
 */
export interface ResetOriginEndpointStateRequest {
  /**
   * The name of the channel group that contains the channel with the origin endpoint that you are resetting.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel with the origin endpoint that you are resetting.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint that you are resetting.
   *
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface ResetOriginEndpointStateResponse {
  /**
   * The name of the channel group that contains the channel with the origin endpoint that you just reset.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel with the origin endpoint that you just reset.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint that you just reset.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the endpoint that you just reset.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The time that the origin endpoint was last reset.
   *
   * @public
   */
  ResetAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateOriginEndpointRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file.
   *
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * The segment configuration, including the segment name, duration, and other configuration values.
   *
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * Any descriptive information that you want to add to the origin endpoint for future identification purposes.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).
   *
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * An HTTP live streaming (HLS) manifest configuration.
   *
   * @public
   */
  HlsManifests?: CreateHlsManifestConfiguration[] | undefined;

  /**
   * A low-latency HLS manifest configuration.
   *
   * @public
   */
  LowLatencyHlsManifests?: CreateLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * A DASH manifest configuration.
   *
   * @public
   */
  DashManifests?: CreateDashManifestConfiguration[] | undefined;

  /**
   * A list of Microsoft Smooth Streaming (MSS) manifest configurations to update for the origin endpoint. This replaces the existing MSS manifest configurations.
   *
   * @public
   */
  MssManifests?: CreateMssManifestConfiguration[] | undefined;

  /**
   * The failover settings for the endpoint.
   *
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * The separator character to use in generated URIs for this origin endpoint. This setting applies to all manifest types on the endpoint. If you don't specify a value in the update request, the current value is preserved.
   *
   * @public
   */
  UriSeparator?: UriSeparator | undefined;

  /**
   * The output mode for stream names in egress manifests. If you provide a value, it must match the current value. You can't change the stream name output mode after you create the endpoint.
   *
   * @public
   */
  StreamNameOutputMode?: StreamNameOutputMode | undefined;

  /**
   * The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginEndpointResponse {
  /**
   * The ARN associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The type of container attached to this origin endpoint.
   *
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * The segment configuration, including the segment name, duration, and other configuration values.
   *
   * @public
   */
  Segment: Segment | undefined;

  /**
   * The date and time the origin endpoint was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the origin endpoint was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The description of the origin endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.
   *
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * An HTTP live streaming (HLS) manifest configuration.
   *
   * @public
   */
  HlsManifests?: GetHlsManifestConfiguration[] | undefined;

  /**
   * A low-latency HLS manifest configuration.
   *
   * @public
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * The updated Microsoft Smooth Streaming (MSS) manifest configurations for this origin endpoint.
   *
   * @public
   */
  MssManifests?: GetMssManifestConfiguration[] | undefined;

  /**
   * The failover settings for the endpoint.
   *
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * The separator character used in generated URIs for this origin endpoint.
   *
   * @public
   */
  UriSeparator?: UriSeparator | undefined;

  /**
   * The output mode for stream names in egress manifests for this origin endpoint.
   *
   * @public
   */
  StreamNameOutputMode?: StreamNameOutputMode | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the origin endpoint.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A DASH manifest configuration.
   *
   * @public
   */
  DashManifests?: GetDashManifestConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ResetChannelStateRequest {
  /**
   * The name of the channel group that contains the channel that you are resetting.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel that you are resetting.
   *
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface ResetChannelStateResponse {
  /**
   * The name of the channel group that contains the channel that you just reset.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel that you just reset.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the channel that you just reset.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The time that the channel was last reset.
   *
   * @public
   */
  ResetAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * Any descriptive information that you want to add to the channel for future identification purposes.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;

  /**
   * The multiview configuration for the channel. This setting is required when the channel's `InputType` is `MULTIVIEW`, and can't be set for any other input type. Because `InputType` is immutable, you can change a multiview channel's sources and layouts. You can't add or remove the multiview configuration itself.
   *
   * @public
   */
  MultiviewConfiguration?: MultiviewConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * The multiview configuration for the channel. This is present only when `InputType` is `MULTIVIEW`.
   *
   * @public
   */
  MultiviewConfiguration?: MultiviewConfiguration | undefined;

  /**
   * The multiview channels, in the same channel group, that list this channel as an available source. This is a read-only field. You can't delete a channel while any multiview channel still lists it as a source. Use this field to find the multiview channels that you need to update first.
   *
   * @public
   */
  AttachedMultiviewChannels?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The date and time the channel was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The description for your channel.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of ingest endpoints.
   *
   * @public
   */
  IngestEndpoints?: IngestEndpoint[] | undefined;

  /**
   * The input type is an immutable field. It defines whether the channel allows CMAF ingest, HLS ingest, or server-side multiview output. Multiview channels receive no ingest of their own. If unprovided, the value defaults to HLS.
   *
   * The allowed values are:
   *
   * - `HLS` - The HLS streaming specification (which defines M3U8 manifests and TS segments).
   * - `CMAF` - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).
   * - `MULTIVIEW` – Server-side multiview. The channel receives no ingest of its own. Instead, it composites video from the source channels in its `MultiviewConfiguration` into a single tiled output stream.
   *
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the channel.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when `InputType` is `CMAF`.
   *
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;

  /**
   * The output locking mode configured for the channel. This value is immutable after channel creation.
   *
   * The allowed values are:
   *
   * - `EPOCH_LOCKED` - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time.
   * - `NON_EPOCH_LOCKED` - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0.
   *
   * @public
   */
  OutputLockingMode?: OutputLockingMode | undefined;
}

/**
 * @public
 */
export interface CreateChannelGroupRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. You can't use spaces in the name. You can't change the name after you create the channel group.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Enter any descriptive text that helps you to identify the channel group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A comma-separated list of tag key:value pairs that you define. For example:
   *
   * `"Key1": "Value1",`
   *
   * `"Key2": "Value2"`
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateChannelGroupResponse {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The output domain where the source stream should be sent. Integrate the egress domain with a downstream CDN (such as Amazon CloudFront) or playback device.
   *
   * @public
   */
  EgressDomain: string | undefined;

  /**
   * The date and time the channel group was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel group was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The description for your channel group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the channel group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteChannelGroupRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelGroupResponse {}

/**
 * @public
 */
export interface GetChannelGroupRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelGroupResponse {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The output domain where the source stream should be sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.
   *
   * @public
   */
  EgressDomain: string | undefined;

  /**
   * The date and time the channel group was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel group was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The description for your channel group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the channel group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Configuration parameters for where in an S3 bucket to place the harvested content.
 *
 * @public
 */
export interface S3DestinationConfig {
  /**
   * The name of an S3 bucket within which harvested content will be exported.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * The path within the specified S3 bucket where the harvested content will be placed.
   *
   * @public
   */
  DestinationPath: string | undefined;
}

/**
 * The configuration for the destination where the harvested content will be exported.
 *
 * @public
 */
export interface Destination {
  /**
   * The configuration for exporting harvested content to an S3 bucket. This includes details such as the bucket name and destination path within the bucket.
   *
   * @public
   */
  S3Destination: S3DestinationConfig | undefined;
}

/**
 * Information about a harvested DASH manifest.
 *
 * @public
 */
export interface HarvestedDashManifest {
  /**
   * The name of the harvested DASH manifest.
   *
   * @public
   */
  ManifestName: string | undefined;
}

/**
 * Information about a harvested HLS manifest.
 *
 * @public
 */
export interface HarvestedHlsManifest {
  /**
   * The name of the harvested HLS manifest.
   *
   * @public
   */
  ManifestName: string | undefined;
}

/**
 * Information about a harvested Low-Latency HLS manifest.
 *
 * @public
 */
export interface HarvestedLowLatencyHlsManifest {
  /**
   * The name of the harvested Low-Latency HLS manifest.
   *
   * @public
   */
  ManifestName: string | undefined;
}

/**
 * A collection of harvested manifests of different types.
 *
 * @public
 */
export interface HarvestedManifests {
  /**
   * A list of harvested HLS manifests.
   *
   * @public
   */
  HlsManifests?: HarvestedHlsManifest[] | undefined;

  /**
   * A list of harvested DASH manifests.
   *
   * @public
   */
  DashManifests?: HarvestedDashManifest[] | undefined;

  /**
   * A list of harvested Low-Latency HLS manifests.
   *
   * @public
   */
  LowLatencyHlsManifests?: HarvestedLowLatencyHlsManifest[] | undefined;
}

/**
 * Defines the schedule configuration for a harvest job.
 *
 * @public
 */
export interface HarvesterScheduleConfiguration {
  /**
   * The start time for the harvest job.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time for the harvest job.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * The request object for creating a new harvest job.
 *
 * @public
 */
export interface CreateHarvestJobRequest {
  /**
   * The name of the channel group containing the channel from which to harvest content.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel from which to harvest content.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint from which to harvest content.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * An optional description for the harvest job.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of manifests to be harvested.
   *
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * The configuration for when the harvest job should run, including start and end times.
   *
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * The S3 destination where the harvested content will be placed.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A name for the harvest job. This name must be unique within the channel.
   *
   * @public
   */
  HarvestJobName?: string | undefined;

  /**
   * A collection of tags associated with the harvest job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The response object returned after creating a harvest job.
 *
 * @public
 */
export interface CreateHarvestJobResponse {
  /**
   * The name of the channel group containing the channel from which content is being harvested.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel from which content is being harvested.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint from which content is being harvested.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The S3 destination where the harvested content will be placed.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * The name of the created harvest job.
   *
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * A list of manifests that will be harvested.
   *
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * The description of the harvest job, if provided.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for when the harvest job will run, including start and end times.
   *
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created harvest job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time the harvest job was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the harvest job was last modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The current status of the harvest job (e.g., CREATED, IN_PROGRESS, ABORTED, COMPLETED, FAILED).
   *
   * @public
   */
  Status: HarvestJobStatus | undefined;

  /**
   * An error message if the harvest job creation failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The current version of the harvest job. Used for concurrency control.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * A collection of tags associated with the harvest job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The request object for retrieving a specific harvest job.
 *
 * @public
 */
export interface GetHarvestJobRequest {
  /**
   * The name of the channel group containing the channel associated with the harvest job.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel associated with the harvest job.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint associated with the harvest job.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The name of the harvest job to retrieve.
   *
   * @public
   */
  HarvestJobName: string | undefined;
}

/**
 * The response object containing the details of the requested harvest job.
 *
 * @public
 */
export interface GetHarvestJobResponse {
  /**
   * The name of the channel group containing the channel associated with the harvest job.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel associated with the harvest job.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint associated with the harvest job.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The S3 destination where the harvested content is being placed.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * The name of the harvest job.
   *
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * A list of manifests that are being or have been harvested.
   *
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * The description of the harvest job, if provided.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for when the harvest job is scheduled to run, including start and end times.
   *
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the harvest job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time when the harvest job was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time when the harvest job was last modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The current status of the harvest job (e.g., QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED).
   *
   * @public
   */
  Status: HarvestJobStatus | undefined;

  /**
   * An error message if the harvest job encountered any issues.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The current version of the harvest job. Used for concurrency control.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * A collection of tags associated with the harvest job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The request object for listing harvest jobs.
 *
 * @public
 */
export interface ListHarvestJobsRequest {
  /**
   * The name of the channel group to filter the harvest jobs by. If specified, only harvest jobs associated with channels in this group will be returned.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel to filter the harvest jobs by. If specified, only harvest jobs associated with this channel will be returned.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The name of the origin endpoint to filter the harvest jobs by. If specified, only harvest jobs associated with this origin endpoint will be returned.
   *
   * @public
   */
  OriginEndpointName?: string | undefined;

  /**
   * The status to filter the harvest jobs by. If specified, only harvest jobs with this status will be returned.
   *
   * @public
   */
  Status?: HarvestJobStatus | undefined;

  /**
   * The maximum number of harvest jobs to return in a single request. If not specified, a default value will be used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used for pagination. Provide this value in subsequent requests to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a harvest job resource in MediaPackage v2, which is used to export content from an origin endpoint to an S3 bucket.
 *
 * @public
 */
export interface HarvestJob {
  /**
   * The name of the channel group containing the channel associated with this harvest job.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The name of the channel associated with this harvest job.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the origin endpoint associated with this harvest job.
   *
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * The S3 destination where the harvested content will be placed.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * The name of the harvest job.
   *
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * A list of manifests that are being or have been harvested.
   *
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * An optional description of the harvest job.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for when the harvest job is scheduled to run.
   *
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the harvest job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time when the harvest job was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time when the harvest job was last modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The current status of the harvest job (e.g., QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED).
   *
   * @public
   */
  Status: HarvestJobStatus | undefined;

  /**
   * An error message if the harvest job encountered any issues.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The current version of the harvest job. Used for concurrency control.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The response object containing the list of harvest jobs that match the specified criteria.
 *
 * @public
 */
export interface ListHarvestJobsResponse {
  /**
   * An array of harvest job objects that match the specified criteria.
   *
   * @public
   */
  Items?: HarvestJob[] | undefined;

  /**
   * A token used for pagination. Include this value in subsequent requests to retrieve the next set of results. If null, there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelGroupsRequest {
  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from the GET list request. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelGroupsResponse {
  /**
   * The objects being returned.
   *
   * @public
   */
  Items?: ChannelGroupListConfiguration[] | undefined;

  /**
   * The pagination token from the GET list request. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelGroupRequest {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * Any descriptive information that you want to add to the channel group for future identification purposes.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelGroupResponse {
  /**
   * The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.
   *
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The output domain where the source stream is sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.
   *
   * @public
   */
  EgressDomain: string | undefined;

  /**
   * The date and time the channel group was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time the channel group was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The description for your channel group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The comma-separated list of tag key:value pairs assigned to the channel group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the CloudWatch resource that you want to view tags for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the MediaPackage resource that you're adding tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the MediaPackage resource that you're removing tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}
