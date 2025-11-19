// smithy-typescript generated code
import {
  AccessType,
  AdMarkupType,
  AdsInteractionExcludeEventType,
  AdsInteractionPublishOptInEventType,
  AlertCategory,
  ChannelState,
  FillPolicy,
  InsertionMode,
  ListPrefetchScheduleType,
  LoggingStrategy,
  LogType,
  ManifestServiceExcludeEventType,
  MessageType,
  Mode,
  Operator,
  OriginManifestType,
  PlaybackMode,
  PrefetchScheduleType,
  RelativePosition,
  ScheduleEntryType,
  StreamingMediaFileConditioning,
  Tier,
  TrafficShapingType,
  Type,
} from "./enums";

/**
 * <p>For <code>SCTE35_ENHANCED</code> output, defines a key and corresponding value. MediaTailor generates these pairs within the <code>EXT-X-ASSET</code>tag.</p>
 * @public
 */
export interface KeyValuePair {
  /**
   * <p>For <code>SCTE35_ENHANCED</code> output, defines a key. MediaTailor takes this key, and its associated value, and generates the key/value pair within the <code>EXT-X-ASSET</code>tag. If you specify a key, you must also specify a corresponding value.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>For <code>SCTE35_ENHANCED</code> output, defines a value. MediaTailor; takes this value, and its associated key, and generates the key/value pair within the <code>EXT-X-ASSET</code>tag. If you specify a value, you must also specify a corresponding key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Slate VOD source configuration.</p>
 * @public
 */
export interface SlateSource {
  /**
   * <p>The name of the source location where the slate VOD source is stored.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * <p>Splice insert message configuration.</p>
 * @public
 */
export interface SpliceInsertMessage {
  /**
   * <p>This is written to <code>splice_insert.avail_num</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.</p>
   * @public
   */
  AvailNum?: number | undefined;

  /**
   * <p>This is written to <code>splice_insert.avails_expected</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.</p>
   * @public
   */
  AvailsExpected?: number | undefined;

  /**
   * <p>This is written to <code>splice_insert.splice_event_id</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>1</code>.</p>
   * @public
   */
  SpliceEventId?: number | undefined;

  /**
   * <p>This is written to <code>splice_insert.unique_program_id</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.</p>
   * @public
   */
  UniqueProgramId?: number | undefined;
}

/**
 * <p>The <code>segmentation_descriptor</code> message can contain advanced metadata fields, like content identifiers, to convey a wide range of information about the ad break. MediaTailor writes the ad metadata in the egress manifest as part of the <code>EXT-X-DATERANGE</code> or <code>EventStream</code> ad marker's SCTE-35 data.</p> <p> <code>segmentation_descriptor</code> messages must be sent with the <code>time_signal</code> message type.</p> <p>See the <code>segmentation_descriptor()</code> table of the 2022 SCTE-35 specification for more information.</p>
 * @public
 */
export interface SegmentationDescriptor {
  /**
   * <p>The Event Identifier to assign to the <code>segmentation_descriptor.segmentation_event_id</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The default value is 1.</p>
   * @public
   */
  SegmentationEventId?: number | undefined;

  /**
   * <p>The Upid Type to assign to the <code>segmentation_descriptor.segmentation_upid_type</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 14.</p>
   * @public
   */
  SegmentationUpidType?: number | undefined;

  /**
   * <p>The Upid to assign to the <code>segmentation_descriptor.segmentation_upid</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The value must be a hexadecimal string containing only the characters 0 though 9 and A through F. The default value is "" (an empty string).</p>
   * @public
   */
  SegmentationUpid?: string | undefined;

  /**
   * <p>The Type Identifier to assign to the <code>segmentation_descriptor.segmentation_type_id</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 48.</p>
   * @public
   */
  SegmentationTypeId?: number | undefined;

  /**
   * <p>The segment number to assign to the <code>segmentation_descriptor.segment_num</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.</p>
   * @public
   */
  SegmentNum?: number | undefined;

  /**
   * <p>The number of segments expected, which is assigned to the <code>segmentation_descriptor.segments_expectedS</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.</p>
   * @public
   */
  SegmentsExpected?: number | undefined;

  /**
   * <p>The sub-segment number to assign to the <code>segmentation_descriptor.sub_segment_num</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The defualt value is null.</p>
   * @public
   */
  SubSegmentNum?: number | undefined;

  /**
   * <p>The number of sub-segments expected, which is assigned to the <code>segmentation_descriptor.sub_segments_expected</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is null.</p>
   * @public
   */
  SubSegmentsExpected?: number | undefined;
}

/**
 * <p>The SCTE-35 <code>time_signal</code> message can be sent with one or more <code>segmentation_descriptor</code> messages. A <code>time_signal</code> message can be sent only if a single <code>segmentation_descriptor</code> message is sent.</p> <p>The <code>time_signal</code> message contains only the <code>splice_time</code> field which is constructed using a given presentation timestamp. When sending a <code>time_signal</code> message, the <code>splice_command_type</code> field in the <code>splice_info_section</code> message is set to 6 (0x06).</p> <p>See the <code>time_signal()</code> table of the 2022 SCTE-35 specification for more information.</p>
 * @public
 */
export interface TimeSignalMessage {
  /**
   * <p>The configurations for the SCTE-35 <code>segmentation_descriptor</code> message(s) sent with the <code>time_signal</code> message.</p>
   * @public
   */
  SegmentationDescriptors?: SegmentationDescriptor[] | undefined;
}

/**
 * <p>Ad break configuration parameters.</p>
 * @public
 */
export interface AdBreak {
  /**
   * <p>The SCTE-35 ad insertion type. Accepted value: <code>SPLICE_INSERT</code>, <code>TIME_SIGNAL</code>.</p>
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * <p>How long (in milliseconds) after the beginning of the program that an ad starts. This value must fall within 100ms of a segment boundary, otherwise the ad break will be skipped.</p>
   * @public
   */
  OffsetMillis: number | undefined;

  /**
   * <p>Ad break slate configuration.</p>
   * @public
   */
  Slate?: SlateSource | undefined;

  /**
   * <p>This defines the SCTE-35 <code>splice_insert()</code> message inserted around the ad. For information about using <code>splice_insert()</code>, see the SCTE-35 specficiaiton, section 9.7.3.1.</p>
   * @public
   */
  SpliceInsertMessage?: SpliceInsertMessage | undefined;

  /**
   * <p>Defines the SCTE-35 <code>time_signal</code> message inserted around the ad.</p> <p>Programs on a channel's schedule can be configured with one or more ad breaks. You can attach a <code>splice_insert</code> SCTE-35 message to the ad break. This message provides basic metadata about the ad break.</p> <p>See section 9.7.4 of the 2022 SCTE-35 specification for more information.</p>
   * @public
   */
  TimeSignalMessage?: TimeSignalMessage | undefined;

  /**
   * <p>Defines a list of key/value pairs that MediaTailor generates within the <code>EXT-X-ASSET</code>tag for <code>SCTE35_ENHANCED</code> output.</p>
   * @public
   */
  AdBreakMetadata?: KeyValuePair[] | undefined;
}

/**
 * <p>Alert configuration parameters.</p>
 * @public
 */
export interface Alert {
  /**
   * <p>The code for the alert. For example, <code>NOT_PROCESSED</code>.</p>
   * @public
   */
  AlertCode: string | undefined;

  /**
   * <p>If an alert is generated for a resource, an explanation of the reason for the alert.</p>
   * @public
   */
  AlertMessage: string | undefined;

  /**
   * <p>The timestamp when the alert was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) related to this alert.</p>
   * @public
   */
  RelatedResourceArns: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The category that MediaTailor assigns to the alert.</p>
   * @public
   */
  Category?: AlertCategory | undefined;
}

/**
 * <p>Clip range configuration for the VOD source associated with the program.</p>
 * @public
 */
export interface ClipRange {
  /**
   * <p>The end offset of the clip range, in milliseconds, starting from the beginning of the VOD source associated with the program.</p>
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * <p>The start offset of the clip range, in milliseconds. This offset truncates the start at the number of milliseconds into the duration of the VOD source.</p>
   * @public
   */
  StartOffsetMillis?: number | undefined;
}

/**
 * <p>A playlist of media (VOD and/or live) to be played instead of the default media on a particular program.</p>
 * @public
 */
export interface AlternateMedia {
  /**
   * <p>The name of the source location for alternateMedia.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The name of the live source for alternateMedia.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name of the VOD source for alternateMedia.</p>
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * <p>Clip range configuration for the VOD source associated with the program.</p>
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * <p>The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.</p>
   * @public
   */
  ScheduledStartTimeMillis?: number | undefined;

  /**
   * <p>Ad break configuration parameters defined in AlternateMedia.</p>
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * <p>The duration of the alternateMedia in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;
}

/**
 * <p>An AudienceMedia object contains an Audience and a list of AlternateMedia.</p>
 * @public
 */
export interface AudienceMedia {
  /**
   * <p>The Audience defined in AudienceMedia.</p>
   * @public
   */
  Audience?: string | undefined;

  /**
   * <p>The list of AlternateMedia defined in AudienceMedia.</p>
   * @public
   */
  AlternateMedia?: AlternateMedia[] | undefined;
}

/**
 * <p>MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.</p> <p>As an example, let's say that you set <code>DynamicVariable</code> to <code>scte.event_id</code> and <code>Operator</code> to <code>EQUALS</code>, and your playback configuration has an ADS URL of <code>https://my.ads.server.com/path?&amp;podId=[scte.avail_num]&amp;event=[scte.event_id]&amp;duration=[session.avail_duration_secs]</code>. And the prefetch request to the ADS contains these values <code>https://my.ads.server.com/path?&amp;podId=3&amp;event=my-awesome-event&amp;duration=30</code>. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of <code>my-awesome-event</code>, since it must match the event id that MediaTailor uses to query the ADS.</p> <p>You can specify up to five <code>AvailMatchingCriteria</code>. If you specify multiple <code>AvailMatchingCriteria</code>, MediaTailor combines them to match using a logical <code>AND</code>. You can model logical <code>OR</code> combinations by creating multiple prefetch schedules.</p>
 * @public
 */
export interface AvailMatchingCriteria {
  /**
   * <p>The dynamic variable(s) that MediaTailor should use as avail matching criteria. MediaTailor only places the prefetched ads into the avail if the avail matches the criteria defined by the dynamic variable. For information about dynamic variables, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">Using dynamic ad variables</a> in the <i>MediaTailor User Guide</i>.</p> <p>You can include up to 100 dynamic variables.</p>
   * @public
   */
  DynamicVariable: string | undefined;

  /**
   * <p>For the <code>DynamicVariable</code> specified in <code>AvailMatchingCriteria</code>, the Operator that is used for the comparison.</p>
   * @public
   */
  Operator: Operator | undefined;
}

/**
 * <p>The log configuration for the channel.</p>
 * @public
 */
export interface LogConfigurationForChannel {
  /**
   * <p>The log types.</p>
   * @public
   */
  LogTypes?: LogType[] | undefined;
}

/**
 * <p>Dash manifest configuration parameters.</p>
 * @public
 */
export interface DashPlaylistSettings {
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   * @public
   */
  MinBufferTimeSeconds?: number | undefined;

  /**
   * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   * @public
   */
  MinUpdatePeriodSeconds?: number | undefined;

  /**
   * <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   * @public
   */
  SuggestedPresentationDelaySeconds?: number | undefined;
}

/**
 * <p>HLS playlist configuration parameters.</p>
 * @public
 */
export interface HlsPlaylistSettings {
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Determines the type of SCTE 35 tags to use in ad markup. Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>
   * @public
   */
  AdMarkupType?: AdMarkupType[] | undefined;
}

/**
 * <p>The output item response.</p>
 * @public
 */
export interface ResponseOutputItem {
  /**
   * <p>DASH manifest configuration settings.</p>
   * @public
   */
  DashPlaylistSettings?: DashPlaylistSettings | undefined;

  /**
   * <p>HLS manifest configuration settings.</p>
   * @public
   */
  HlsPlaylistSettings?: HlsPlaylistSettings | undefined;

  /**
   * <p>The name of the manifest for the channel that will appear in the channel output's playback URL.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The URL used for playback by content players.</p>
   * @public
   */
  PlaybackUrl: string | undefined;

  /**
   * <p>A string used to associate a package configuration source group with a channel output.</p>
   * @public
   */
  SourceGroup: string | undefined;
}

/**
 * <p>The configuration parameters for a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @public
 */
export interface Channel {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>Returns the state whether the channel is running or not.</p>
   * @public
   */
  ChannelState: string | undefined;

  /**
   * <p>The timestamp of when the channel was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.</p>
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * <p>The timestamp of when the channel was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The channel's output properties.</p>
   * @public
   */
  Outputs: ResponseOutputItem[] | undefined;

  /**
   * <p>The type of playback mode for this channel.</p> <p> <code>LINEAR</code> - Programs play back-to-back only once.</p> <p> <code>LOOP</code> - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</p>
   * @public
   */
  PlaybackMode: string | undefined;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The tier for this channel. STANDARD tier channels can contain live programs.</p>
   * @public
   */
  Tier: string | undefined;

  /**
   * <p>The log configuration.</p>
   * @public
   */
  LogConfiguration: LogConfigurationForChannel | undefined;

  /**
   * <p>The list of audiences defined in channel.</p>
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * <p>The HTTP package configuration properties for the requested VOD source.</p>
 * @public
 */
export interface HttpPackageConfiguration {
  /**
   * <p>The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>
   * @public
   */
  SourceGroup: string | undefined;

  /**
   * <p>The streaming protocol for this package configuration. Supported values are <code>HLS</code> and <code>DASH</code>.</p>
   * @public
   */
  Type: Type | undefined;
}

/**
 * <p>Live source configuration parameters.</p>
 * @public
 */
export interface LiveSource {
  /**
   * <p>The ARN for the live source.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp that indicates when the live source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The HTTP package configurations for the live source.</p>
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The timestamp that indicates when the live source was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name that's used to refer to a live source.</p>
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns.</p>
 * @public
 */
export interface AdConditioningConfiguration {
  /**
   * <p>For ads that have media files with streaming delivery and supported file extensions, indicates what transcoding action MediaTailor takes when it first receives these ads from the ADS. <code>TRANSCODE</code> indicates that MediaTailor must transcode the ads. <code>NONE</code> indicates that you have already transcoded the ads outside of MediaTailor and don't need them transcoded as part of the ad insertion workflow. For more information about ad conditioning see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/precondition-ads.html">Using preconditioned ads</a> in the Elemental MediaTailor user guide.</p>
   * @public
   */
  StreamingMediaFileConditioning: StreamingMediaFileConditioning | undefined;
}

/**
 * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
 * @public
 */
export interface AvailSuppression {
  /**
   * <p>Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to <code>BEHIND_LIVE_EDGE</code>, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window. When Mode is set to <code>AFTER_LIVE_EDGE</code>, ad suppression is active and MediaTailor won't fill ad breaks that are within the live edge plus the avail suppression value.</p>
   * @public
   */
  Mode?: Mode | undefined;

  /**
   * <p>A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Defines the policy to apply to the avail suppression mode. <code>BEHIND_LIVE_EDGE</code> will always use the full avail suppression policy. <code>AFTER_LIVE_EDGE</code> mode can be used to invoke partial ad break fills when a session starts mid-break.</p>
   * @public
   */
  FillPolicy?: FillPolicy | undefined;
}

/**
 * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
 * @public
 */
export interface Bumper {
  /**
   * <p>The URL for the end bumper asset.</p>
   * @public
   */
  EndUrl?: string | undefined;

  /**
   * <p>The URL for the start bumper asset.</p>
   * @public
   */
  StartUrl?: string | undefined;
}

/**
 * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
 * @public
 */
export interface CdnConfiguration {
  /**
   * <p>A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.<i>&lt;region&gt;</i>.amazonaws.com. Then specify the rule's name in this <code>AdSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.</p>
   * @public
   */
  AdSegmentUrlPrefix?: string | undefined;

  /**
   * <p>A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this <code>ContentSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.</p>
   * @public
   */
  ContentSegmentUrlPrefix?: string | undefined;
}

/**
 * <p>The configuration for DASH content.</p>
 * @public
 */
export interface DashConfiguration {
  /**
   * <p>The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations.</p>
   * @public
   */
  ManifestEndpointPrefix?: string | undefined;

  /**
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are <code>DISABLED</code> and <code>EMT_DEFAULT</code>. The <code>EMT_DEFAULT</code> setting enables the inclusion of the tag and is the default value.</p>
   * @public
   */
  MpdLocation?: string | undefined;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to <code>SINGLE_PERIOD</code>. The default setting is <code>MULTI_PERIOD</code>. For multi-period manifests, omit this setting or set it to <code>MULTI_PERIOD</code>.</p>
   * @public
   */
  OriginManifestType?: OriginManifestType | undefined;
}

/**
 * <p>The configuration for HLS content.</p>
 * @public
 */
export interface HlsConfiguration {
  /**
   * <p>The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.</p>
   * @public
   */
  ManifestEndpointPrefix?: string | undefined;
}

/**
 * <p>The configuration for pre-roll ad insertion.</p>
 * @public
 */
export interface LivePreRollConfiguration {
  /**
   * <p>The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * <p>The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.</p>
   * @public
   */
  MaxDurationSeconds?: number | undefined;
}

/**
 * <p>Settings for customizing what events are included in logs for interactions with the ad decision server (ADS).</p> <p>For more information about ADS logs, inlcuding descriptions of the event types, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ads-log-format.html">MediaTailor ADS logs description and event types</a> in Elemental MediaTailor User Guide.</p>
 * @public
 */
export interface AdsInteractionLog {
  /**
   * <p>Indicates that MediaTailor emits <code>RAW_ADS_RESPONSE</code> logs for playback sessions that are initialized with this configuration.</p>
   * @public
   */
  PublishOptInEventTypes?: AdsInteractionPublishOptInEventType[] | undefined;

  /**
   * <p>Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration.</p>
   * @public
   */
  ExcludeEventTypes?: AdsInteractionExcludeEventType[] | undefined;
}

/**
 * <p>Settings for customizing what events are included in logs for interactions with the origin server.</p> <p>For more information about manifest service logs, including descriptions of the event types, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/log-types.html">MediaTailor manifest logs description and event types</a> in Elemental MediaTailor User Guide.</p>
 * @public
 */
export interface ManifestServiceInteractionLog {
  /**
   * <p>Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration.</p>
   * @public
   */
  ExcludeEventTypes?: ManifestServiceExcludeEventType[] | undefined;
}

/**
 * <p>Defines where AWS Elemental MediaTailor sends logs for the playback configuration.</p>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your configured log destination. For example, if your playback configuration has 1000 sessions and <code>percentEnabled</code> is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>
   * @public
   */
  PercentEnabled: number | undefined;

  /**
   * <p>The method used for collecting logs from AWS Elemental MediaTailor. <code>LEGACY_CLOUDWATCH</code> indicates that MediaTailor is sending logs directly to Amazon CloudWatch Logs. <code>VENDED_LOGS</code> indicates that MediaTailor is sending logs to CloudWatch, which then vends the logs to your destination of choice. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream. </p>
   * @public
   */
  EnabledLoggingStrategies: LoggingStrategy[] | undefined;

  /**
   * <p>Settings for customizing what events are included in logs for interactions with the ad decision server (ADS).</p>
   * @public
   */
  AdsInteractionLog?: AdsInteractionLog | undefined;

  /**
   * <p>Settings for customizing what events are included in logs for interactions with the origin server.</p>
   * @public
   */
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog | undefined;
}

/**
 * <p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>
 * @public
 */
export interface AdMarkerPassthrough {
  /**
   * <p>Enables ad marker passthrough for your configuration.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
 * @public
 */
export interface ManifestProcessingRules {
  /**
   * <p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>
   * @public
   */
  AdMarkerPassthrough?: AdMarkerPassthrough | undefined;
}

/**
 * <p>A playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 * @public
 */
export interface PlaybackConfiguration {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html">Domain Variables</a>.</p>
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The configuration for a DASH source.</p>
   * @public
   */
  DashConfiguration?: DashConfiguration | undefined;

  /**
   * <p>The configuration for HLS content.</p>
   * @public
   */
  HlsConfiguration?: HlsConfiguration | undefined;

  /**
   * <p>The setting that controls whether players can use stitched or guided ad insertion. The default, <code>STITCHED_ONLY</code>, forces all player sessions to use stitched (server-side) ad insertion. Choosing <code>PLAYER_SELECT</code> allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.</p>
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * <p>Defines where AWS Elemental MediaTailor sends logs for the playback configuration.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * <p>The identifier for the playback configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration.</p>
   * @public
   */
  PlaybackConfigurationArn?: string | undefined;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor.</p>
   * @public
   */
  PlaybackEndpointPrefix?: string | undefined;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting.</p>
   * @public
   */
  SessionInitializationEndpointPrefix?: string | undefined;

  /**
   * <p>The URL for a video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * <p>The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * <p>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads.</p>
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;
}

/**
 * <p>For single prefetch, describes how and when that MediaTailor places prefetched ads into upcoming ad breaks.</p>
 * @public
 */
export interface PrefetchConsumption {
  /**
   * <p>If you only want MediaTailor to insert prefetched ads into avails (ad breaks) that match specific dynamic variables, such as <code>scte.event_id</code>, set the avail matching criteria.</p>
   * @public
   */
  AvailMatchingCriteria?: AvailMatchingCriteria[] | undefined;

  /**
   * <p>The time when MediaTailor no longer considers the prefetched ads for use in an ad break. MediaTailor automatically deletes prefetch schedules no less than seven days after the end time. If you'd like to manually delete the prefetch schedule, you can call <code>DeletePrefetchSchedule</code>.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The time when prefetched ads are considered for use in an ad break. If you don't specify <code>StartTime</code>, the prefetched ads are available after MediaTailor retrieves them from the ad decision server.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * <p>The settings that determine how and when MediaTailor places prefetched ads into upcoming ad breaks for recurring prefetch scedules.</p>
 * @public
 */
export interface RecurringConsumption {
  /**
   * <p>The number of seconds that an ad is available for insertion after it was prefetched.</p>
   * @public
   */
  RetrievedAdExpirationSeconds?: number | undefined;

  /**
   * <p>The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in.</p>
   * @public
   */
  AvailMatchingCriteria?: AvailMatchingCriteria[] | undefined;
}

/**
 * <p>The configuration that tells Elemental MediaTailor how to spread out requests to the ad decision server (ADS). Instead of sending ADS requests for all sessions at the same time, MediaTailor spreads the requests across the amount of time specified in the retrieval window.</p>
 * @public
 */
export interface TrafficShapingRetrievalWindow {
  /**
   * <p>The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS. </p>
   * @public
   */
  RetrievalWindowDurationSeconds?: number | undefined;
}

/**
 * <p>The configuration for TPS-based traffic shaping. This approach limits requests to the ad decision server (ADS) based on transactions per second and concurrent users, providing more intuitive capacity management compared to time-window based traffic shaping.</p>
 * @public
 */
export interface TrafficShapingTpsConfiguration {
  /**
   * <p>The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle. MediaTailor uses this value along with concurrent users and headroom multiplier to calculate optimal traffic distribution and prevent ADS overload.</p>
   * @public
   */
  PeakTps?: number | undefined;

  /**
   * <p>The expected peak number of concurrent viewers for your content. MediaTailor uses this value along with peak TPS to determine how to distribute prefetch requests across the available capacity without exceeding your ADS limits.</p>
   * @public
   */
  PeakConcurrentUsers?: number | undefined;
}

/**
 * <p>With recurring prefetch, MediaTailor automatically prefetches ads for every avail that occurs during the retrieval window. The following configurations describe the MediaTailor behavior when prefetching ads for a live event.</p>
 * @public
 */
export interface RecurringRetrieval {
  /**
   * <p>The dynamic variables to use for substitution during prefetch requests to the ADS.</p>
   * @public
   */
  DynamicVariables?: Record<string, string> | undefined;

  /**
   * <p>The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail. If not set, the default is 0 (no delay).</p>
   * @public
   */
  DelayAfterAvailEndSeconds?: number | undefined;

  /**
   * <p>Indicates the type of traffic shaping used for traffic shaping and limiting the number of requests to the ADS at one time.</p>
   * @public
   */
  TrafficShapingType?: TrafficShapingType | undefined;

  /**
   * <p>Configuration for spreading ADS traffic across a set window instead of sending ADS requests for all sessions at the same time.</p>
   * @public
   */
  TrafficShapingRetrievalWindow?: TrafficShapingRetrievalWindow | undefined;

  /**
   * <p>The configuration for TPS-based traffic shaping that limits the number of requests to the ad decision server (ADS) based on transactions per second instead of time windows.</p>
   * @public
   */
  TrafficShapingTpsConfiguration?: TrafficShapingTpsConfiguration | undefined;
}

/**
 * <p>The configuration that defines how MediaTailor performs recurring prefetch. </p>
 * @public
 */
export interface RecurringPrefetchConfiguration {
  /**
   * <p>The start time for the window that MediaTailor prefetches and inserts ads in a live event. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time for the window that MediaTailor prefetches and inserts ads in a live event. </p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The settings that determine how and when MediaTailor places prefetched ads into upcoming ad breaks for recurring prefetch scedules.</p>
   * @public
   */
  RecurringConsumption: RecurringConsumption | undefined;

  /**
   * <p>The configuration for prefetch ad retrieval from the ADS.</p>
   * @public
   */
  RecurringRetrieval: RecurringRetrieval | undefined;
}

/**
 * <p>A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.</p>
 * @public
 */
export interface PrefetchRetrieval {
  /**
   * <p>The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).</p> <p>You initially configure <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">dynamic variables</a> for the ADS URL when you set up your playback configuration. When you specify <code>DynamicVariables</code> for prefetch retrieval, MediaTailor includes the dynamic variables in the request to the ADS.</p>
   * @public
   */
  DynamicVariables?: Record<string, string> | undefined;

  /**
   * <p>The time when prefetch retrieval ends for the ad break. Prefetching will be attempted for manifest requests that occur at or before this time.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The time when prefetch retrievals can start for this break. Ad prefetching will be attempted for manifest requests that occur at or after this time. Defaults to the current time. If not specified, the prefetch retrieval starts as soon as possible.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Indicates the type of traffic shaping used for prefetch traffic shaping and limiting the number of requests to the ADS at one time.</p>
   * @public
   */
  TrafficShapingType?: TrafficShapingType | undefined;

  /**
   * <p>Configuration for spreading ADS traffic across a set window instead of sending ADS requests for all sessions at the same time.</p>
   * @public
   */
  TrafficShapingRetrievalWindow?: TrafficShapingRetrievalWindow | undefined;

  /**
   * <p>The configuration for TPS-based traffic shaping that limits the number of requests to the ad decision server (ADS) based on transactions per second instead of time windows.</p>
   * @public
   */
  TrafficShapingTpsConfiguration?: TrafficShapingTpsConfiguration | undefined;
}

/**
 * <p>A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.</p>
 * @public
 */
export interface PrefetchSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of the prefetch schedule.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Consumption settings determine how, and when, MediaTailor places the prefetched ads into ad breaks for single prefetch schedules. Ad consumption occurs within a span of time that you define, called a <i>consumption window</i>. You can designate which ad breaks that MediaTailor fills with prefetch ads by setting avail matching criteria.</p>
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * <p>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the playback configuration to create the prefetch schedule for.</p>
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).</p>
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * <p>The frequency that MediaTailor creates prefetch schedules. <code>SINGLE</code> indicates that this schedule applies to one ad break. <code>RECURRING</code> indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.</p> <p>For more information about the prefetch types and when you might use each, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Prefetching ads in Elemental MediaTailor.</a> </p>
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * <p>The settings that determine how and when MediaTailor prefetches ads and inserts them into ad breaks.</p>
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * <p>An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.</p>
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * <p>The schedule's ad break properties.</p>
 * @public
 */
export interface ScheduleAdBreak {
  /**
   * <p>The approximate duration of the ad break, in seconds.</p>
   * @public
   */
  ApproximateDurationSeconds?: number | undefined;

  /**
   * <p>The approximate time that the ad will start playing.</p>
   * @public
   */
  ApproximateStartTime?: Date | undefined;

  /**
   * <p>The name of the source location containing the VOD source used for the ad break.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The name of the VOD source used for the ad break.</p>
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * <p>The properties for a schedule.</p>
 * @public
 */
export interface ScheduleEntry {
  /**
   * <p>The approximate duration of this program, in seconds.</p>
   * @public
   */
  ApproximateDurationSeconds?: number | undefined;

  /**
   * <p>The approximate time that the program will start playing.</p>
   * @public
   */
  ApproximateStartTime?: Date | undefined;

  /**
   * <p>The ARN of the program.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the channel that uses this schedule.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the live source used for the program.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name of the program.</p>
   * @public
   */
  ProgramName: string | undefined;

  /**
   * <p>The schedule's ad break properties.</p>
   * @public
   */
  ScheduleAdBreaks?: ScheduleAdBreak[] | undefined;

  /**
   * <p>The type of schedule entry.</p>
   * @public
   */
  ScheduleEntryType?: ScheduleEntryType | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * <p>The list of audiences defined in ScheduleEntry.</p>
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * <p>The segment delivery configuration settings.</p>
 * @public
 */
export interface SegmentDeliveryConfiguration {
  /**
   * <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>
 * @public
 */
export interface SecretsManagerAccessTokenConfiguration {
  /**
   * <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
   * @public
   */
  HeaderName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>
   * @public
   */
  SecretStringKey?: string | undefined;
}

/**
 * <p>Access configuration parameters.</p>
 * @public
 */
export interface AccessConfiguration {
  /**
   * <p>The type of authentication used to access content from <code>HttpConfiguration::BaseUrl</code> on your source location.</p> <p> <code>S3_SIGV4</code> - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.</p> <p>Before you can use <code>S3_SIGV4</code>, you must meet these requirements:</p> <p>• You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.</p> <p>• The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.</p> <p>• The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.</p> <p> <code>AUTODETECT_SIGV4</code> - AWS Signature Version 4 authentication for a set of supported services: MediaPackage Version 2 and Amazon S3 hosted virtual-style access. If your source location base URL is a MediaPackage Version 2 endpoint or an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the resource where your source content is stored.</p> <p>Before you can use <code>AUTODETECT_SIGV4</code> with a MediaPackage Version 2 endpoint, you must meet these requirements:</p> <p>• You must grant MediaTailor access to your MediaPackage endpoint by granting <code>mediatailor.amazonaws.com</code> principal access in an Origin Access policy on the endpoint.</p> <p>• Your MediaTailor source location base URL must be a MediaPackage V2 endpoint.</p> <p>• The caller of the API must have <code>mediapackagev2:GetObject</code> IAM permissions to read all top level manifests referenced by the MediaTailor source packaging configurations.</p> <p>Before you can use <code>AUTODETECT_SIGV4</code> with an Amazon S3 bucket, you must meet these requirements:</p> <p>• You must grant MediaTailor access to your S3 bucket by granting <code>mediatailor.amazonaws.com</code> principal access in IAM. For more information about configuring access in IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide.</i>.</p> <p>• The <code>mediatailor.amazonaws.com</code> service principal must have permissions to read all top-level manifests referenced by the <code>VodSource</code> packaging configurations.</p> <p>• The caller of the API must have <code>s3:GetObject</code> IAM permissions to read all top level manifests referenced by your MediaTailor <code>VodSource</code> packaging configurations.</p>
   * @public
   */
  AccessType?: AccessType | undefined;

  /**
   * <p>AWS Secrets Manager access token configuration parameters.</p>
   * @public
   */
  SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration | undefined;
}

/**
 * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
 * @public
 */
export interface DefaultSegmentDeliveryConfiguration {
  /**
   * <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>
   * @public
   */
  BaseUrl?: string | undefined;
}

/**
 * <p>The HTTP configuration for the source location.</p>
 * @public
 */
export interface HttpConfiguration {
  /**
   * <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>
   * @public
   */
  BaseUrl: string | undefined;
}

/**
 * <p>A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 * @public
 */
export interface SourceLocation {
  /**
   * <p>The access configuration for the source location.</p>
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * <p>The ARN of the SourceLocation.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp that indicates when the source location was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The default segment delivery configuration.</p>
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * <p>The HTTP configuration for the source location.</p>
   * @public
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * <p>The timestamp that indicates when the source location was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The segment delivery configurations for the source location.</p>
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>VOD source configuration parameters.</p>
 * @public
 */
export interface VodSource {
  /**
   * <p>The ARN for the VOD source.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp that indicates when the VOD source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The HTTP package configurations for the VOD source.</p>
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The timestamp that indicates when the VOD source was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name of the source location that the VOD source is associated with.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name of the VOD source.</p>
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * <p>A location at which a zero-duration ad marker was detected in a VOD source manifest.</p>
 * @public
 */
export interface AdBreakOpportunity {
  /**
   * <p>The offset in milliseconds from the start of the VOD source at which an ad marker was detected.</p>
   * @public
   */
  OffsetMillis: number | undefined;
}

/**
 * @public
 */
export interface DeleteChannelPolicyRequest {
  /**
   * <p>The name of the channel associated with this channel policy.</p>
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
   * <p>The name of the channel associated with this Channel Policy.</p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelPolicyResponse {
  /**
   * <p>The IAM policy for the channel. IAM policies are used to control access to your channel.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyRequest {
  /**
   * <p>The channel name associated with this Channel Policy.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>Adds an IAM role that determines the permissions of your channel.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyResponse {}

/**
 * @public
 */
export interface ConfigureLogsForChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The types of logs to collect.</p>
   * @public
   */
  LogTypes: LogType[] | undefined;
}

/**
 * @public
 */
export interface ConfigureLogsForChannelResponse {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>The types of logs collected.</p>
   * @public
   */
  LogTypes?: LogType[] | undefined;
}

/**
 * <p>The output configuration for this channel.</p>
 * @public
 */
export interface RequestOutputItem {
  /**
   * <p>DASH manifest configuration parameters.</p>
   * @public
   */
  DashPlaylistSettings?: DashPlaylistSettings | undefined;

  /**
   * <p>HLS playlist configuration parameters.</p>
   * @public
   */
  HlsPlaylistSettings?: HlsPlaylistSettings | undefined;

  /**
   * <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>
   * @public
   */
  SourceGroup: string | undefined;
}

/**
 * <p> The configuration for time-shifted viewing. </p>
 * @public
 */
export interface TimeShiftConfiguration {
  /**
   * <p> The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours). </p>
   * @public
   */
  MaxTimeDelaySeconds: number | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.</p>
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * <p>The channel's output properties.</p>
   * @public
   */
  Outputs: RequestOutputItem[] | undefined;

  /**
   * <p>The type of playback mode to use for this channel.</p> <p> <code>LINEAR</code> - The programs in the schedule play once back-to-back in the schedule.</p> <p> <code>LOOP</code> - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>
   * @public
   */
  PlaybackMode: PlaybackMode | undefined;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The tier of the channel.</p>
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * <p> The time-shifted viewing configuration you want to associate to the channel. </p>
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * <p>The list of audiences defined in channel.</p>
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) to assign to the channel.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name to assign to the channel.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>Indicates whether the channel is in a running state or not.</p>
   * @public
   */
  ChannelState?: ChannelState | undefined;

  /**
   * <p>The timestamp of when the channel was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Contains information about the slate used to fill gaps between programs in the schedule.</p>
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * <p>The timestamp of when the channel was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The output properties to assign to the channel.</p>
   * @public
   */
  Outputs?: ResponseOutputItem[] | undefined;

  /**
   * <p>The playback mode to assign to the channel.</p>
   * @public
   */
  PlaybackMode?: string | undefined;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The tier of the channel.</p>
   * @public
   */
  Tier?: string | undefined;

  /**
   * <p> The time-shifted viewing configuration assigned to the channel. </p>
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * <p>The list of audiences defined in channel.</p>
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * <p>The name of the channel.</p>
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
export interface DescribeChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>Indicates whether the channel is in a running state or not.</p>
   * @public
   */
  ChannelState?: ChannelState | undefined;

  /**
   * <p>The timestamp of when the channel was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Contains information about the slate used to fill gaps between programs in the schedule.</p>
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * <p>The timestamp of when the channel was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The channel's output properties.</p>
   * @public
   */
  Outputs?: ResponseOutputItem[] | undefined;

  /**
   * <p>The channel's playback mode.</p>
   * @public
   */
  PlaybackMode?: string | undefined;

  /**
   * <p>The tags assigned to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The channel's tier.</p>
   * @public
   */
  Tier?: string | undefined;

  /**
   * <p>The log configuration for the channel.</p>
   * @public
   */
  LogConfiguration: LogConfigurationForChannel | undefined;

  /**
   * <p> The time-shifted viewing configuration for the channel. </p>
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * <p>The list of audiences defined in channel.</p>
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface GetChannelScheduleRequest {
  /**
   * <p>The name of the channel associated with this Channel Schedule.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The duration in minutes of the channel schedule.</p>
   * @public
   */
  DurationMinutes?: string | undefined;

  /**
   * <p>The maximum number of channel schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channel schedules, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>(Optional) If the playback configuration has more than <code>MaxResults</code> channel schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>GetChannelScheduleRequest</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p>If the previous response didn't include a <code>NextToken</code> element, there are no more channel schedules to get.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The single audience for GetChannelScheduleRequest.</p>
   * @public
   */
  Audience?: string | undefined;
}

/**
 * @public
 */
export interface GetChannelScheduleResponse {
  /**
   * <p>A list of schedule entries for the channel.</p>
   * @public
   */
  Items?: ScheduleEntry[] | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p>The maximum number of channels that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channels, use the value of <code>NextToken</code> in the response to get the next page of results.</p> <p>The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than <code>MaxResults</code> items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the <code>NextToken</code> value from each response until the response no longer includes a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p> <p>For the first <code>ListChannels</code> request, omit this value. For subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request. Continue making requests until the response no longer includes a <code>NextToken</code> value, which indicates that all results have been retrieved.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>A list of channels that are associated with this account.</p>
   * @public
   */
  Items?: Channel[] | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Program transition configuration.</p>
 * @public
 */
export interface Transition {
  /**
   * <p>The duration of the live program in seconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>The position where this program will be inserted relative to the <code>RelativePosition</code>.</p>
   * @public
   */
  RelativePosition: RelativePosition | undefined;

  /**
   * <p>The name of the program that this program will be inserted next to, as defined by <code>RelativePosition</code>.</p>
   * @public
   */
  RelativeProgram?: string | undefined;

  /**
   * <p>The date and time that the program is scheduled to start, in epoch milliseconds.</p>
   * @public
   */
  ScheduledStartTimeMillis?: number | undefined;

  /**
   * <p>Defines when the program plays in the schedule. You can set the value to <code>ABSOLUTE</code> or <code>RELATIVE</code>.</p> <p> <code>ABSOLUTE</code> - The program plays at a specific wall clock time. This setting can only be used for channels using the <code>LINEAR</code> <code>PlaybackMode</code>.</p> <p>Note the following considerations when using <code>ABSOLUTE</code> transitions:</p> <p>If the preceding program in the schedule has a duration that extends past the wall clock time, MediaTailor truncates the preceding program on a common segment boundary.</p> <p>If there are gaps in playback, MediaTailor plays the <code>FillerSlate</code> you configured for your linear channel.</p> <p> <code>RELATIVE</code> - The program is inserted into the schedule either before or after a program that you specify via <code>RelativePosition</code>.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <p>Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.</p>
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * <p>Program transition configurations.</p>
   * @public
   */
  Transition: Transition | undefined;

  /**
   * <p>Program clip range configuration.</p>
   * @public
   */
  ClipRange?: ClipRange | undefined;
}

/**
 * @public
 */
export interface CreateProgramRequest {
  /**
   * <p>The ad break configuration settings.</p>
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * <p>The name of the channel for this Program.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the LiveSource for this Program.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name of the Program.</p>
   * @public
   */
  ProgramName: string | undefined;

  /**
   * <p>The schedule configuration settings.</p>
   * @public
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name that's used to refer to a VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * <p>The list of AudienceMedia defined in program.</p>
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;
}

/**
 * @public
 */
export interface CreateProgramResponse {
  /**
   * <p>The ad break configuration settings.</p>
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * <p>The ARN to assign to the program.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name to assign to the channel for this program.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>The time the program was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The name of the LiveSource for this Program.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name to assign to this program.</p>
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * <p>The scheduled start time for this Program.</p>
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * <p>The name to assign to the source location for this program.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The name that's used to refer to a VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * <p>The clip range configuration settings.</p>
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * <p>The duration of the live program in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>The list of AudienceMedia defined in program.</p>
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;
}

/**
 * @public
 */
export interface DeleteProgramRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the program.</p>
   * @public
   */
  ProgramName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProgramResponse {}

/**
 * @public
 */
export interface DescribeProgramRequest {
  /**
   * <p>The name of the channel associated with this Program.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the program.</p>
   * @public
   */
  ProgramName: string | undefined;
}

/**
 * @public
 */
export interface DescribeProgramResponse {
  /**
   * <p>The ad break configuration settings.</p>
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * <p>The ARN of the program.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the channel that the program belongs to.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>The timestamp of when the program was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The name of the LiveSource for this Program.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name of the program.</p>
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * <p>The date and time that the program is scheduled to start in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2021-03-27T17:48:16.751Z represents March 27, 2021 at 17:48:16.751 UTC.</p>
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * <p>The source location name.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The name that's used to refer to a VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * <p>The clip range configuration settings.</p>
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * <p>The duration of the live program in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>The list of AudienceMedia defined in program.</p>
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;
}

/**
 * <p>Program transition configuration.</p>
 * @public
 */
export interface UpdateProgramTransition {
  /**
   * <p>The date and time that the program is scheduled to start, in epoch milliseconds.</p>
   * @public
   */
  ScheduledStartTimeMillis?: number | undefined;

  /**
   * <p>The duration of the live program in seconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;
}

/**
 * <p>Schedule configuration parameters.</p>
 * @public
 */
export interface UpdateProgramScheduleConfiguration {
  /**
   * <p>Program transition configuration.</p>
   * @public
   */
  Transition?: UpdateProgramTransition | undefined;

  /**
   * <p>Program clip range configuration.</p>
   * @public
   */
  ClipRange?: ClipRange | undefined;
}

/**
 * @public
 */
export interface UpdateProgramRequest {
  /**
   * <p>The ad break configuration settings.</p>
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * <p>The name of the channel for this Program.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the Program.</p>
   * @public
   */
  ProgramName: string | undefined;

  /**
   * <p>The schedule configuration settings.</p>
   * @public
   */
  ScheduleConfiguration: UpdateProgramScheduleConfiguration | undefined;

  /**
   * <p>The list of AudienceMedia defined in program.</p>
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;
}

/**
 * @public
 */
export interface UpdateProgramResponse {
  /**
   * <p>The ad break configuration settings.</p>
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * <p>The ARN to assign to the program.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name to assign to the channel for this program.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>The time the program was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The name to assign to this program.</p>
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * <p>The name to assign to the source location for this program.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The name that's used to refer to a VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * <p>The name of the LiveSource for this Program.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The clip range configuration settings.</p>
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * <p>The duration of the live program in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>The scheduled start time for this Program.</p>
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * <p>The list of AudienceMedia defined in program.</p>
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;
}

/**
 * @public
 */
export interface StartChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface StartChannelResponse {}

/**
 * @public
 */
export interface StopChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface StopChannelResponse {}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.</p>
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * <p>The channel's output properties.</p>
   * @public
   */
  Outputs: RequestOutputItem[] | undefined;

  /**
   * <p> The time-shifted viewing configuration you want to associate to the channel. </p>
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * <p>The list of audiences defined in channel.</p>
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the channel.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the channel.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>Returns the state whether the channel is running or not.</p>
   * @public
   */
  ChannelState?: ChannelState | undefined;

  /**
   * <p>The timestamp of when the channel was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.</p>
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * <p>The timestamp that indicates when the channel was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The channel's output properties.</p>
   * @public
   */
  Outputs?: ResponseOutputItem[] | undefined;

  /**
   * <p>The type of playback mode for this channel.</p> <p> <code>LINEAR</code> - Programs play back-to-back only once.</p> <p> <code>LOOP</code> - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</p>
   * @public
   */
  PlaybackMode?: string | undefined;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The tier associated with this Channel.</p>
   * @public
   */
  Tier?: string | undefined;

  /**
   * <p> The time-shifted viewing configuration for the channel. </p>
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * <p>The list of audiences defined in channel.</p>
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * <p>Configures Amazon CloudWatch log settings for a playback configuration.</p>
 * @public
 */
export interface ConfigureLogsForPlaybackConfigurationRequest {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your CloudWatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>
   * @public
   */
  PercentEnabled: number | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>The method used for collecting logs from AWS Elemental MediaTailor. To configure MediaTailor to send logs directly to Amazon CloudWatch Logs, choose <code>LEGACY_CLOUDWATCH</code>. To configure MediaTailor to send logs to CloudWatch, which then vends the logs to your destination of choice, choose <code>VENDED_LOGS</code>. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream.</p> <p>To use vended logs, you must configure the delivery destination in Amazon CloudWatch, as described in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html#AWS-vended-logs-permissions-V2">Enable logging from AWS services, Logging that requires additional permissions [V2]</a>.</p>
   * @public
   */
  EnabledLoggingStrategies?: LoggingStrategy[] | undefined;

  /**
   * <p>The event types that MediaTailor emits in logs for interactions with the ADS.</p>
   * @public
   */
  AdsInteractionLog?: AdsInteractionLog | undefined;

  /**
   * <p>The event types that MediaTailor emits in logs for interactions with the origin server.</p>
   * @public
   */
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog | undefined;
}

/**
 * @public
 */
export interface ConfigureLogsForPlaybackConfigurationResponse {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account.</p>
   * @public
   */
  PercentEnabled: number | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   * @public
   */
  PlaybackConfigurationName?: string | undefined;

  /**
   * <p>The method used for collecting logs from AWS Elemental MediaTailor. <code>LEGACY_CLOUDWATCH</code> indicates that MediaTailor is sending logs directly to Amazon CloudWatch Logs. <code>VENDED_LOGS</code> indicates that MediaTailor is sending logs to CloudWatch, which then vends the logs to your destination of choice. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream. </p>
   * @public
   */
  EnabledLoggingStrategies?: LoggingStrategy[] | undefined;

  /**
   * <p>The event types that MediaTailor emits in logs for interactions with the ADS.</p>
   * @public
   */
  AdsInteractionLog?: AdsInteractionLog | undefined;

  /**
   * <p>The event types that MediaTailor emits in logs for interactions with the origin server.</p>
   * @public
   */
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog | undefined;
}

/**
 * @public
 */
export interface CreateLiveSourceRequest {
  /**
   * <p>A list of HTTP package configuration parameters for this live source.</p>
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the live source.</p>
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLiveSourceResponse {
  /**
   * <p>The ARN to assign to the live source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time the live source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A list of HTTP package configuration parameters for this live source.</p>
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The time the live source was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name to assign to the live source.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name to assign to the source location of the live source.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePrefetchScheduleRequest {
  /**
   * <p>The configuration settings for how and when MediaTailor consumes prefetched ads from the ad decision server for single prefetch schedules. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.</p>
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * <p>The name to assign to the schedule request.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name to assign to the playback configuration.</p>
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.</p>
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * <p>The configuration that defines how and when MediaTailor performs ad prefetching in a live event.</p>
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * <p>The frequency that MediaTailor creates prefetch schedules. <code>SINGLE</code> indicates that this schedule applies to one ad break. <code>RECURRING</code> indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.</p> <p>For more information about the prefetch types and when you might use each, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Prefetching ads in Elemental MediaTailor.</a> </p>
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * <p>An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.</p>
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePrefetchScheduleResponse {
  /**
   * <p>The ARN to assign to the prefetch schedule.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The configuration settings for how and when MediaTailor consumes prefetched ads from the ad decision server for single prefetch schedules. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.</p>
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * <p>The name to assign to the prefetch schedule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name to assign to the playback configuration.</p>
   * @public
   */
  PlaybackConfigurationName?: string | undefined;

  /**
   * <p>The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.</p>
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * <p>The configuration that defines how MediaTailor performs recurring prefetch. </p>
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * <p>The frequency that MediaTailor creates prefetch schedules. <code>SINGLE</code> indicates that this schedule applies to one ad break. <code>RECURRING</code> indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.</p>
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * <p>An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.</p>
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSourceLocationRequest {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * <p>The optional configuration for the server that serves segments.</p>
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * <p>The source's HTTP package configurations.</p>
   * @public
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * <p>A list of the segment delivery configurations associated with this resource.</p>
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * <p>The name associated with the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSourceLocationResponse {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * <p>The ARN to assign to the source location.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time the source location was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The optional configuration for the server that serves segments.</p>
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * <p>The source's HTTP package configurations.</p>
   * @public
   */
  HttpConfiguration?: HttpConfiguration | undefined;

  /**
   * <p>The time the source location was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The segment delivery configurations for the source location. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * <p>The name to assign to the source location.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVodSourceRequest {
  /**
   * <p>A list of HTTP package configuration parameters for this VOD source.</p>
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the source location for this VOD source.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name associated with the VOD source.&gt;</p>
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateVodSourceResponse {
  /**
   * <p>The ARN to assign to this VOD source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time the VOD source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A list of HTTP package configuration parameters for this VOD source.</p>
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The time the VOD source was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name to assign to the source location for this VOD source.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name to assign to the VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * <p>The configuration for DASH PUT operations.</p>
 * @public
 */
export interface DashConfigurationForPut {
  /**
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are <code>DISABLED</code> and <code>EMT_DEFAULT</code>. The <code>EMT_DEFAULT</code> setting enables the inclusion of the tag and is the default value.</p>
   * @public
   */
  MpdLocation?: string | undefined;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to <code>SINGLE_PERIOD</code>. The default setting is <code>MULTI_PERIOD</code>. For multi-period manifests, omit this setting or set it to <code>MULTI_PERIOD</code>.</p>
   * @public
   */
  OriginManifestType?: OriginManifestType | undefined;
}

/**
 * @public
 */
export interface DeleteLiveSourceRequest {
  /**
   * <p>The name of the live source.</p>
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location associated with this Live Source.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLiveSourceResponse {}

/**
 * @public
 */
export interface DeletePlaybackConfigurationRequest {
  /**
   * <p>The name of the playback configuration.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaybackConfigurationResponse {}

/**
 * @public
 */
export interface DeletePrefetchScheduleRequest {
  /**
   * <p>The name of the prefetch schedule. If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the playback configuration for this prefetch schedule.</p>
   * @public
   */
  PlaybackConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface DeletePrefetchScheduleResponse {}

/**
 * @public
 */
export interface DeleteSourceLocationRequest {
  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceLocationResponse {}

/**
 * @public
 */
export interface DeleteVodSourceRequest {
  /**
   * <p>The name of the source location associated with this VOD Source.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD source.</p>
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVodSourceResponse {}

/**
 * @public
 */
export interface DescribeLiveSourceRequest {
  /**
   * <p>The name of the live source.</p>
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location associated with this Live Source.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLiveSourceResponse {
  /**
   * <p>The ARN of the live source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp that indicates when the live source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The HTTP package configurations.</p>
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The timestamp that indicates when the live source was modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name of the live source.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name of the source location associated with the live source.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSourceLocationRequest {
  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceLocationResponse {
  /**
   * <p>The access configuration for the source location.</p>
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * <p>The ARN of the source location.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp that indicates when the source location was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The default segment delivery configuration settings.</p>
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * <p>The HTTP package configuration settings for the source location.</p>
   * @public
   */
  HttpConfiguration?: HttpConfiguration | undefined;

  /**
   * <p>The timestamp that indicates when the source location was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A list of the segment delivery configurations associated with this resource.</p>
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeVodSourceRequest {
  /**
   * <p>The name of the source location associated with this VOD Source.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD Source.</p>
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * @public
 */
export interface DescribeVodSourceResponse {
  /**
   * <p>The ad break opportunities within the VOD source.</p>
   * @public
   */
  AdBreakOpportunities?: AdBreakOpportunity[] | undefined;

  /**
   * <p>The ARN of the VOD source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp that indicates when the VOD source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The HTTP package configurations.</p>
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The last modified time of the VOD source.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name of the source location associated with the VOD source.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name of the VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * @public
 */
export interface GetPlaybackConfigurationRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetPlaybackConfigurationResponse {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html">Domain Variables</a>.</p>
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The configuration for DASH content.</p>
   * @public
   */
  DashConfiguration?: DashConfiguration | undefined;

  /**
   * <p>The configuration for HLS content.</p>
   * @public
   */
  HlsConfiguration?: HlsConfiguration | undefined;

  /**
   * <p>The setting that controls whether players can use stitched or guided ad insertion. The default, <code>STITCHED_ONLY</code>, forces all player sessions to use stitched (server-side) ad insertion. Choosing <code>PLAYER_SELECT</code> allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.</p>
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * <p>The configuration that defines where AWS Elemental MediaTailor sends logs for the playback configuration.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * <p>The identifier for the playback configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration.</p>
   * @public
   */
  PlaybackConfigurationArn?: string | undefined;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting.</p>
   * @public
   */
  PlaybackEndpointPrefix?: string | undefined;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting.</p>
   * @public
   */
  SessionInitializationEndpointPrefix?: string | undefined;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * <p>The tags assigned to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * <p>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads. </p>
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;
}

/**
 * @public
 */
export interface GetPrefetchScheduleRequest {
  /**
   * <p>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Returns information about the prefetch schedule for a specific playback configuration. If you call <code>GetPrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code.</p>
   * @public
   */
  PlaybackConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface GetPrefetchScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the prefetch schedule.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The configuration settings for how and when MediaTailor consumes prefetched ads from the ad decision server for single prefetch schedules. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.</p>
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * <p>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the playback configuration to create the prefetch schedule for.</p>
   * @public
   */
  PlaybackConfigurationName?: string | undefined;

  /**
   * <p>A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).</p>
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * <p>The frequency that MediaTailor creates prefetch schedules. <code>SINGLE</code> indicates that this schedule applies to one ad break. <code>RECURRING</code> indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.</p>
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * <p>The configuration that defines how and when MediaTailor performs ad prefetching in a live event.</p>
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * <p>An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.</p>
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface ListAlertsRequest {
  /**
   * <p>The maximum number of alerts that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> alerts, use the value of <code>NextToken</code> in the response to get the next page of results.</p> <p>The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than <code>MaxResults</code> items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the <code>NextToken</code> value from each response until the response no longer includes a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p> <p>For the first <code>ListAlerts</code> request, omit this value. For subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request. Continue making requests until the response no longer includes a <code>NextToken</code> value, which indicates that all results have been retrieved.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListAlertsResponse {
  /**
   * <p>A list of alerts that are associated with this resource.</p>
   * @public
   */
  Items?: Alert[] | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLiveSourcesRequest {
  /**
   * <p>The maximum number of live sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> live sources, use the value of <code>NextToken</code> in the response to get the next page of results.</p> <p>The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than <code>MaxResults</code> items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the <code>NextToken</code> value from each response until the response no longer includes a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p> <p>For the first <code>ListLiveSources</code> request, omit this value. For subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request. Continue making requests until the response no longer includes a <code>NextToken</code> value, which indicates that all results have been retrieved.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the source location associated with this Live Sources list.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface ListLiveSourcesResponse {
  /**
   * <p>Lists the live sources.</p>
   * @public
   */
  Items?: LiveSource[] | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlaybackConfigurationsRequest {
  /**
   * <p>The maximum number of playback configurations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> playback configurations, use the value of <code>NextToken</code> in the response to get the next page of results.</p> <p>The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than <code>MaxResults</code> items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the <code>NextToken</code> value from each response until the response no longer includes a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p> <p>For the first <code>ListPlaybackConfigurations</code> request, omit this value. For subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request. Continue making requests until the response no longer includes a <code>NextToken</code> value, which indicates that all results have been retrieved.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlaybackConfigurationsResponse {
  /**
   * <p>Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored.</p>
   * @public
   */
  Items?: PlaybackConfiguration[] | undefined;

  /**
   * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPrefetchSchedulesRequest {
  /**
   * <p>The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> prefetch schedules, use the value of <code>NextToken</code> in the response to get the next page of results.</p> <p>The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than <code>MaxResults</code> items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the <code>NextToken</code> value from each response until the response no longer includes a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p> <p>For the first <code>ListPrefetchSchedules</code> request, omit this value. For subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request. Continue making requests until the response no longer includes a <code>NextToken</code> value, which indicates that all results have been retrieved.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Retrieves the prefetch schedule(s) for a specific playback configuration.</p>
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>The type of prefetch schedules that you want to list. <code>SINGLE</code> indicates that you want to list the configured single prefetch schedules. <code>RECURRING</code> indicates that you want to list the configured recurring prefetch schedules. <code>ALL</code> indicates that you want to list all configured prefetch schedules.</p>
   * @public
   */
  ScheduleType?: ListPrefetchScheduleType | undefined;

  /**
   * <p>An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams.</p>
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface ListPrefetchSchedulesResponse {
  /**
   * <p>Lists the prefetch schedules. An empty <code>Items</code> list doesn't mean there aren't more items to fetch, just that that page was empty.</p>
   * @public
   */
  Items?: PrefetchSchedule[] | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceLocationsRequest {
  /**
   * <p> The maximum number of source locations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> source locations, use the value of <code>NextToken</code> in the response to get the next page of results.</p> <p>The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than <code>MaxResults</code> items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the <code>NextToken</code> value from each response until the response no longer includes a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p> <p>For the first <code>ListSourceLocations</code> request, omit this value. For subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request. Continue making requests until the response no longer includes a <code>NextToken</code> value, which indicates that all results have been retrieved.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceLocationsResponse {
  /**
   * <p>A list of source locations.</p>
   * @public
   */
  Items?: SourceLocation[] | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with this resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with this resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVodSourcesRequest {
  /**
   * <p> The maximum number of VOD sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> VOD sources, use the value of <code>NextToken</code> in the response to get the next page of results.</p> <p>The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than <code>MaxResults</code> items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the <code>NextToken</code> value from each response until the response no longer includes a <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p> <p>For the first <code>ListVodSources</code> request, omit this value. For subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request. Continue making requests until the response no longer includes a <code>NextToken</code> value, which indicates that all results have been retrieved.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the source location associated with this VOD Source list.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface ListVodSourcesResponse {
  /**
   * <p>Lists the VOD sources.</p>
   * @public
   */
  Items?: VodSource[] | undefined;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLiveSourceRequest {
  /**
   * <p>A list of HTTP package configurations for the live source on this account.</p>
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the live source.</p>
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location associated with this Live Source.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface UpdateLiveSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with this live source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp that indicates when the live source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A list of HTTP package configurations for the live source on this account.</p>
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The timestamp that indicates when the live source was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name of the live source.</p>
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * <p>The name of the source location associated with the live source.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutPlaybackConfigurationRequest {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html">Domain Variables</a>.</p>
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The configuration for DASH content.</p>
   * @public
   */
  DashConfiguration?: DashConfigurationForPut | undefined;

  /**
   * <p>The setting that controls whether players can use stitched or guided ad insertion. The default, <code>STITCHED_ONLY</code>, forces all player sessions to use stitched (server-side) ad insertion. Choosing <code>PLAYER_SELECT</code> allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.</p>
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * <p>The identifier for the playback configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * <p>The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * <p>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads. </p>
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutPlaybackConfigurationResponse {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html">Domain Variables</a>.</p>
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The configuration for DASH content.</p>
   * @public
   */
  DashConfiguration?: DashConfiguration | undefined;

  /**
   * <p>The configuration for HLS content.</p>
   * @public
   */
  HlsConfiguration?: HlsConfiguration | undefined;

  /**
   * <p>The setting that controls whether players can use stitched or guided ad insertion. The default, <code>STITCHED_ONLY</code>, forces all player sessions to use stitched (server-side) ad insertion. Choosing <code>PLAYER_SELECT</code> allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.</p>
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * <p>The configuration that defines where AWS Elemental MediaTailor sends logs for the playback configuration.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * <p>The identifier for the playback configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the playback configuration.</p>
   * @public
   */
  PlaybackConfigurationArn?: string | undefined;

  /**
   * <p>The playback endpoint prefix associated with the playback configuration.</p>
   * @public
   */
  PlaybackEndpointPrefix?: string | undefined;

  /**
   * <p>The session initialization endpoint prefix associated with the playback configuration.</p>
   * @public
   */
  SessionInitializationEndpointPrefix?: string | undefined;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * <p>The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * <p>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads. </p>
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSourceLocationRequest {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * <p>The optional configuration for the host server that serves segments.</p>
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * <p>The HTTP configuration for the source location.</p>
   * @public
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * <p>A list of the segment delivery configurations associated with this resource.</p>
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceLocationResponse {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the source location.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp that indicates when the source location was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The optional configuration for the host server that serves segments.</p>
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * <p>The HTTP configuration for the source location.</p>
   * @public
   */
  HttpConfiguration?: HttpConfiguration | undefined;

  /**
   * <p>The timestamp that indicates when the source location was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The segment delivery configurations for the source location. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to untag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateVodSourceRequest {
  /**
   * <p>A list of HTTP package configurations for the VOD source on this account.</p>
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the source location associated with this VOD Source.</p>
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD source.</p>
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateVodSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the VOD source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp that indicates when the VOD source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A list of HTTP package configurations for the VOD source on this account.</p>
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The timestamp that indicates when the VOD source was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name of the source location associated with the VOD source.</p>
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * <p>The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name of the VOD source.</p>
   * @public
   */
  VodSourceName?: string | undefined;
}
