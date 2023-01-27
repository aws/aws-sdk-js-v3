// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MediaTailorServiceException as __BaseException } from "./MediaTailorServiceException";

export enum MessageType {
  SPLICE_INSERT = "SPLICE_INSERT",
  TIME_SIGNAL = "TIME_SIGNAL",
}

/**
 * <p>Slate VOD source configuration.</p>
 */
export interface SlateSource {
  /**
   * <p>The name of the source location where the slate VOD source is stored.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>
   */
  VodSourceName?: string;
}

/**
 * <p>Splice insert message configuration.</p>
 */
export interface SpliceInsertMessage {
  /**
   * <p>This is written to <code>splice_insert.avail_num</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.</p>
   */
  AvailNum?: number;

  /**
   * <p>This is written to <code>splice_insert.avails_expected</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.</p>
   */
  AvailsExpected?: number;

  /**
   * <p>This is written to <code>splice_insert.splice_event_id</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>1</code>.</p>
   */
  SpliceEventId?: number;

  /**
   * <p>This is written to <code>splice_insert.unique_program_id</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.</p>
   */
  UniqueProgramId?: number;
}

/**
 * <p>The <code>segmentation_descriptor</code> message can contain advanced metadata fields, like content identifiers, to convey a wide range of information about the ad break. MediaTailor writes the ad metadata in the egress manifest as part of the <code>EXT-X-DATERANGE</code> or <code>EventStream</code> ad marker's SCTE-35 data.</p>
 *          <p>
 *             <code>segmentation_descriptor</code> messages must be sent with the <code>time_signal</code> message type.</p>
 *          <p>See the <code>segmentation_descriptor()</code> table of the 2022 SCTE-35 specification for more information.</p>
 */
export interface SegmentationDescriptor {
  /**
   * <p>The Event Identifier to assign to the <code>segmentation_descriptor.segmentation_event_id</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The default value is 1.</p>
   */
  SegmentationEventId?: number;

  /**
   * <p>The Upid Type to assign to the <code>segmentation_descriptor.segmentation_upid_type</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 14.</p>
   */
  SegmentationUpidType?: number;

  /**
   * <p>The Upid to assign to the <code>segmentation_descriptor.segmentation_upid</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The value must be a hexadecimal string containing only the characters 0 though 9 and A through F. The default value is "" (an empty string).</p>
   */
  SegmentationUpid?: string;

  /**
   * <p>The Type Identifier to assign to the <code>segmentation_descriptor.segmentation_type_id</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 48.</p>
   */
  SegmentationTypeId?: number;

  /**
   * <p>The segment number to assign to the <code>segmentation_descriptor.segment_num</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.</p>
   */
  SegmentNum?: number;

  /**
   * <p>The number of segments expected, which is assigned to the <code>segmentation_descriptor.segments_expectedS</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.</p>
   */
  SegmentsExpected?: number;

  /**
   * <p>The sub-segment number to assign to the <code>segmentation_descriptor.sub_segment_num</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The defualt value is null.</p>
   */
  SubSegmentNum?: number;

  /**
   * <p>The number of sub-segments expected, which is assigned to the <code>segmentation_descriptor.sub_segments_expected</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is null.</p>
   */
  SubSegmentsExpected?: number;
}

/**
 * <p>The SCTE-35 <code>time_signal</code> message can be sent with one or more <code>segmentation_descriptor</code> messages. A <code>time_signal</code> message can be sent only if a single <code>segmentation_descriptor</code> message is sent.</p>
 *          <p>The <code>time_signal</code> message contains only the <code>splice_time</code> field which is constructed using a given presentation timestamp. When sending a <code>time_signal</code> message, the <code>splice_command_type</code> field in the <code>splice_info_section</code> message is set to 6 (0x06).</p>
 *          <p>See the <code>time_signal()</code> table of the 2022 SCTE-35 specification for more information.</p>
 */
export interface TimeSignalMessage {
  /**
   * <p>The configurations for the SCTE-35 <code>segmentation_descriptor</code> message(s) sent with the <code>time_signal</code> message.</p>
   */
  SegmentationDescriptors?: SegmentationDescriptor[];
}

/**
 * <p>Ad break configuration parameters.</p>
 */
export interface AdBreak {
  /**
   * <p>The SCTE-35 ad insertion type. Accepted value: <code>SPLICE_INSERT</code>, <code>TIME_SIGNAL</code>.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>How long (in milliseconds) after the beginning of the program that an ad starts. This value must fall within 100ms of a segment boundary, otherwise the ad break will be skipped.</p>
   */
  OffsetMillis?: number;

  /**
   * <p>Ad break slate configuration.</p>
   */
  Slate?: SlateSource;

  /**
   * <p>This defines the SCTE-35 <code>splice_insert()</code> message inserted around the ad. For information about using <code>splice_insert()</code>, see the SCTE-35 specficiaiton, section 9.7.3.1.</p>
   */
  SpliceInsertMessage?: SpliceInsertMessage;

  /**
   * <p>Defines the SCTE-35 <code>time_signal</code> message inserted around the ad.</p>
   *          <p>Programs on a channel's schedule can be configured with one or more ad breaks. You can attach a <code>splice_insert</code> SCTE-35 message to the ad break. This message provides basic metadata about the ad break.</p>
   *          <p>See section 9.7.4 of the 2022 SCTE-35 specification for more information.</p>
   */
  TimeSignalMessage?: TimeSignalMessage;
}

/**
 * <p>Alert configuration parameters.</p>
 */
export interface Alert {
  /**
   * <p>The code for the alert. For example, <code>NOT_PROCESSED</code>.</p>
   */
  AlertCode: string | undefined;

  /**
   * <p>If an alert is generated for a resource, an explanation of the reason for the alert.</p>
   */
  AlertMessage: string | undefined;

  /**
   * <p>The timestamp when the alert was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) related to this alert.</p>
   */
  RelatedResourceArns: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export enum Operator {
  EQUALS = "EQUALS",
}

/**
 * <p>MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.</p>
 *          <p>As an example, let's say that you set <code>DynamicVariable</code> to <code>scte.event_id</code> and <code>Operator</code> to <code>EQUALS</code>, and your playback configuration has an ADS URL of <code>https://my.ads.server.com/path?&amp;podId=[scte.avail_num]&amp;event=[scte.event_id]&amp;duration=[session.avail_duration_secs]</code>. And the prefetch request to the ADS contains these values <code>https://my.ads.server.com/path?&amp;podId=3&amp;event=my-awesome-event&amp;duration=30</code>. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of <code>my-awesome-event</code>, since it must match the event id that MediaTailor uses to query the ADS.</p>
 *          <p>You can specify up to five <code>AvailMatchingCriteria</code>. If you specify multiple <code>AvailMatchingCriteria</code>, MediaTailor combines them to match using a logical <code>AND</code>. You can model logical <code>OR</code> combinations by creating multiple prefetch schedules.</p>
 */
export interface AvailMatchingCriteria {
  /**
   * <p>The dynamic variable(s) that MediaTailor should use as avail matching criteria. MediaTailor only places the prefetched ads into the avail if the avail matches the criteria defined by the dynamic variable. For information about dynamic variables, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">Using dynamic ad variables</a> in the <i>MediaTailor User Guide</i>.</p>
   *          <p>You can include up to 100 dynamic variables.</p>
   */
  DynamicVariable: string | undefined;

  /**
   * <p>For the <code>DynamicVariable</code> specified in <code>AvailMatchingCriteria</code>, the Operator that is used for the comparison.</p>
   */
  Operator: Operator | string | undefined;
}

export enum LogType {
  AS_RUN = "AS_RUN",
}

/**
 * <p>The log configuration for the channel.</p>
 */
export interface LogConfigurationForChannel {
  /**
   * <p>The log types.</p>
   */
  LogTypes?: (LogType | string)[];
}

/**
 * <p>Dash manifest configuration parameters.</p>
 */
export interface DashPlaylistSettings {
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
   */
  ManifestWindowSeconds?: number;

  /**
   * <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   */
  MinBufferTimeSeconds?: number;

  /**
   * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   */
  MinUpdatePeriodSeconds?: number;

  /**
   * <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   */
  SuggestedPresentationDelaySeconds?: number;
}

/**
 * <p>HLS playlist configuration parameters.</p>
 */
export interface HlsPlaylistSettings {
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
   */
  ManifestWindowSeconds?: number;
}

/**
 * <p>The output item response.</p>
 */
export interface ResponseOutputItem {
  /**
   * <p>DASH manifest configuration settings.</p>
   */
  DashPlaylistSettings?: DashPlaylistSettings;

  /**
   * <p>HLS manifest configuration settings.</p>
   */
  HlsPlaylistSettings?: HlsPlaylistSettings;

  /**
   * <p>The name of the manifest for the channel that will appear in the channel output's playback URL.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>The URL used for playback by content players.</p>
   */
  PlaybackUrl: string | undefined;

  /**
   * <p>A string used to associate a package configuration source group with a channel output.</p>
   */
  SourceGroup: string | undefined;
}

/**
 * <p>The configuration parameters for a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 */
export interface Channel {
  /**
   * <p>The ARN of the channel.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>Returns the state whether the channel is running or not.</p>
   */
  ChannelState: string | undefined;

  /**
   * <p>The timestamp of when the channel was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code>
   *             <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code>
   *             <code>PlaybackMode</code>.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The timestamp of when the channel was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The channel's output properties.</p>
   */
  Outputs: ResponseOutputItem[] | undefined;

  /**
   * <p>The type of playback mode for this channel.</p>
   *          <p>
   *             <code>LINEAR</code> - Programs play back-to-back only once.</p>
   *          <p>
   *             <code>LOOP</code> - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</p>
   */
  PlaybackMode: string | undefined;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The tier for this channel. STANDARD tier channels can contain live programs.</p>
   */
  Tier: string | undefined;

  /**
   * <p>The log configuration.</p>
   */
  LogConfiguration: LogConfigurationForChannel | undefined;
}

export enum Type {
  DASH = "DASH",
  HLS = "HLS",
}

/**
 * <p>The HTTP package configuration properties for the requested VOD source.</p>
 */
export interface HttpPackageConfiguration {
  /**
   * <p>The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>
   */
  Path: string | undefined;

  /**
   * <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>
   */
  SourceGroup: string | undefined;

  /**
   * <p>The streaming protocol for this package configuration. Supported values are <code>HLS</code> and <code>DASH</code>.</p>
   */
  Type: Type | string | undefined;
}

/**
 * <p>Live source configuration parameters.</p>
 */
export interface LiveSource {
  /**
   * <p>The ARN for the live source.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp that indicates when the live source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The HTTP package configurations for the live source.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The timestamp that indicates when the live source was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name that's used to refer to a live source.</p>
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export enum Mode {
  BEHIND_LIVE_EDGE = "BEHIND_LIVE_EDGE",
  OFF = "OFF",
}

/**
 * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
 */
export interface AvailSuppression {
  /**
   * <p>Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to <code>BEHIND_LIVE_EDGE</code>, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window.</p>
   */
  Mode?: Mode | string;

  /**
   * <p>A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.</p>
   */
  Value?: string;
}

/**
 * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
 */
export interface Bumper {
  /**
   * <p>The URL for the end bumper asset.</p>
   */
  EndUrl?: string;

  /**
   * <p>The URL for the start bumper asset.</p>
   */
  StartUrl?: string;
}

/**
 * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
 */
export interface CdnConfiguration {
  /**
   * <p>A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.<i>&lt;region&gt;</i>.amazonaws.com. Then specify the rule's name in this <code>AdSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.</p>
   */
  AdSegmentUrlPrefix?: string;

  /**
   * <p>A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this <code>ContentSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.</p>
   */
  ContentSegmentUrlPrefix?: string;
}

export enum OriginManifestType {
  MULTI_PERIOD = "MULTI_PERIOD",
  SINGLE_PERIOD = "SINGLE_PERIOD",
}

/**
 * <p>The configuration for DASH content.</p>
 */
export interface DashConfiguration {
  /**
   * <p>The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations.</p>
   */
  ManifestEndpointPrefix?: string;

  /**
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are <code>DISABLED</code> and <code>EMT_DEFAULT</code>. The <code>EMT_DEFAULT</code> setting enables the inclusion of the tag and is the default value.</p>
   */
  MpdLocation?: string;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to <code>SINGLE_PERIOD</code>. The default setting is <code>MULTI_PERIOD</code>. For multi-period manifests, omit this setting or set it to <code>MULTI_PERIOD</code>.</p>
   */
  OriginManifestType?: OriginManifestType | string;
}

/**
 * <p>The configuration for HLS content.</p>
 */
export interface HlsConfiguration {
  /**
   * <p>The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.</p>
   */
  ManifestEndpointPrefix?: string;
}

/**
 * <p>The configuration for pre-roll ad insertion.</p>
 */
export interface LivePreRollConfiguration {
  /**
   * <p>The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.</p>
   */
  MaxDurationSeconds?: number;
}

/**
 * <p>Returns Amazon CloudWatch log settings for a playback configuration.</p>
 */
export interface LogConfiguration {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and <code>percentEnabled</code> is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p>
   *          <p>Valid values: <code>0</code> - <code>100</code>
   *          </p>
   */
  PercentEnabled: number | undefined;
}

/**
 * <p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p>
 *          <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>
 */
export interface AdMarkerPassthrough {
  /**
   * <p>Enables ad marker passthrough for your configuration.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
 */
export interface ManifestProcessingRules {
  /**
   * <p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p>
   *          <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>
   */
  AdMarkerPassthrough?: AdMarkerPassthrough;
}

/**
 * <p>A playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 */
export interface PlaybackConfiguration {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
   */
  ConfigurationAliases?: Record<string, Record<string, string>>;

  /**
   * <p>The configuration for a DASH source.</p>
   */
  DashConfiguration?: DashConfiguration;

  /**
   * <p>The configuration for HLS content.</p>
   */
  HlsConfiguration?: HlsConfiguration;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   */
  LivePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * <p>The Amazon CloudWatch log settings for a playback configuration.</p>
   */
  LogConfiguration?: LogConfiguration;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration.</p>
   */
  PlaybackConfigurationArn?: string;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor.</p>
   */
  PlaybackEndpointPrefix?: string;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting.</p>
   */
  SessionInitializationEndpointPrefix?: string;

  /**
   * <p>The URL for a video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

/**
 * <p>A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks.</p>
 */
export interface PrefetchConsumption {
  /**
   * <p>If you only want MediaTailor to insert prefetched ads into avails (ad breaks) that match specific dynamic variables, such as <code>scte.event_id</code>, set the avail matching criteria.</p>
   */
  AvailMatchingCriteria?: AvailMatchingCriteria[];

  /**
   * <p>The time when MediaTailor no longer considers the prefetched ads for use in an ad break. MediaTailor automatically deletes prefetch schedules no less than seven days after the end time. If you'd like to manually delete the prefetch schedule, you can call <code>DeletePrefetchSchedule</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The time when prefetched ads are considered for use in an ad break. If you don't specify <code>StartTime</code>, the prefetched ads are available after MediaTailor retrives them from the ad decision server.</p>
   */
  StartTime?: Date;
}

/**
 * <p>A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.</p>
 */
export interface PrefetchRetrieval {
  /**
   * <p>The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).</p>
   *          <p>You initially configure <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">dynamic variables</a> for the ADS URL when you set up your playback configuration. When you specify <code>DynamicVariables</code> for prefetch retrieval, MediaTailor includes the dynamic variables in the request to the ADS.</p>
   */
  DynamicVariables?: Record<string, string>;

  /**
   * <p>The time when prefetch retrieval ends for the ad break. Prefetching will be attempted for manifest requests that occur at or before this time.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The time when prefetch retrievals can start for this break. Ad prefetching will be attempted for manifest requests that occur at or after this time. Defaults to the current time. If not specified, the prefetch retrieval starts as soon as possible.</p>
   */
  StartTime?: Date;
}

/**
 * <p>A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.</p>
 */
export interface PrefetchSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of the prefetch schedule.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Consumption settings determine how, and when, MediaTailor places the prefetched ads into ad breaks. Ad consumption occurs within a span of time that you define, called a <i>consumption window</i>. You can designate which ad breaks that MediaTailor fills with prefetch ads by setting avail matching criteria.</p>
   */
  Consumption: PrefetchConsumption | undefined;

  /**
   * <p>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the playback configuration to create the prefetch schedule for.</p>
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).</p>
   */
  Retrieval: PrefetchRetrieval | undefined;

  /**
   * <p>An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.</p>
   */
  StreamId?: string;
}

/**
 * <p>The schedule's ad break properties.</p>
 */
export interface ScheduleAdBreak {
  /**
   * <p>The approximate duration of the ad break, in seconds.</p>
   */
  ApproximateDurationSeconds?: number;

  /**
   * <p>The approximate time that the ad will start playing.</p>
   */
  ApproximateStartTime?: Date;

  /**
   * <p>The name of the source location containing the VOD source used for the ad break.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The name of the VOD source used for the ad break.</p>
   */
  VodSourceName?: string;
}

export enum ScheduleEntryType {
  FILLER_SLATE = "FILLER_SLATE",
  PROGRAM = "PROGRAM",
}

/**
 * <p>The properties for a schedule.</p>
 */
export interface ScheduleEntry {
  /**
   * <p>The approximate duration of this program, in seconds.</p>
   */
  ApproximateDurationSeconds?: number;

  /**
   * <p>The approximate time that the program will start playing.</p>
   */
  ApproximateStartTime?: Date;

  /**
   * <p>The ARN of the program.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the channel that uses this schedule.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the live source used for the program.</p>
   */
  LiveSourceName?: string;

  /**
   * <p>The name of the program.</p>
   */
  ProgramName: string | undefined;

  /**
   * <p>The schedule's ad break properties.</p>
   */
  ScheduleAdBreaks?: ScheduleAdBreak[];

  /**
   * <p>The type of schedule entry.</p>
   */
  ScheduleEntryType?: ScheduleEntryType | string;

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName?: string;
}

/**
 * <p>The segment delivery configuration settings.</p>
 */
export interface SegmentDeliveryConfiguration {
  /**
   * <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
   */
  BaseUrl?: string;

  /**
   * <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>
   */
  Name?: string;
}

export enum AccessType {
  S3_SIGV4 = "S3_SIGV4",
  SECRETS_MANAGER_ACCESS_TOKEN = "SECRETS_MANAGER_ACCESS_TOKEN",
}

/**
 * <p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>
 */
export interface SecretsManagerAccessTokenConfiguration {
  /**
   * <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
   */
  HeaderName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
   */
  SecretArn?: string;

  /**
   * <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>
   */
  SecretStringKey?: string;
}

/**
 * <p>Access configuration parameters.</p>
 */
export interface AccessConfiguration {
  /**
   * <p>The type of authentication used to access content from <code>HttpConfiguration::BaseUrl</code> on your source location. Accepted value: <code>S3_SIGV4</code>.</p>
   *          <p>
   *             <code>S3_SIGV4</code> - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.</p>
   *          <p>Before you can use <code>S3_SIGV4</code>, you must meet these requirements:</p>
   *          <p>• You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.</p>
   *          <p>• The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.</p>
   *          <p>• The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.</p>
   */
  AccessType?: AccessType | string;

  /**
   * <p>AWS Secrets Manager access token configuration parameters.</p>
   */
  SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
}

/**
 * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
 */
export interface DefaultSegmentDeliveryConfiguration {
  /**
   * <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>
   */
  BaseUrl?: string;
}

/**
 * <p>The HTTP configuration for the source location.</p>
 */
export interface HttpConfiguration {
  /**
   * <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>
   */
  BaseUrl: string | undefined;
}

/**
 * <p>A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 */
export interface SourceLocation {
  /**
   * <p>The access configuration for the source location.</p>
   */
  AccessConfiguration?: AccessConfiguration;

  /**
   * <p>The ARN of the SourceLocation.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp that indicates when the source location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The default segment delivery configuration.</p>
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

  /**
   * <p>The HTTP configuration for the source location.</p>
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * <p>The timestamp that indicates when the source location was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The segment delivery configurations for the source location.</p>
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[];

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>VOD source configuration parameters.</p>
 */
export interface VodSource {
  /**
   * <p>The ARN for the VOD source.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp that indicates when the VOD source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The HTTP package configurations for the VOD source.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The timestamp that indicates when the VOD source was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the source location that the VOD source is associated with.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName: string | undefined;
}

/**
 * <p>A request contains unexpected data.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
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

export interface DeleteChannelPolicyRequest {
  /**
   * <p>The name of the channel associated with this channel policy.</p>
   */
  ChannelName: string | undefined;
}

export interface DeleteChannelPolicyResponse {}

export interface GetChannelPolicyRequest {
  /**
   * <p>The name of the channel associated with this Channel Policy.</p>
   */
  ChannelName: string | undefined;
}

export interface GetChannelPolicyResponse {
  /**
   * <p>The IAM policy for the channel. IAM policies are used to control access to your channel.</p>
   */
  Policy?: string;
}

export interface PutChannelPolicyRequest {
  /**
   * <p>The channel name associated with this Channel Policy.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>Adds an IAM role that determines the permissions of your channel.</p>
   */
  Policy: string | undefined;
}

export interface PutChannelPolicyResponse {}

export interface ConfigureLogsForChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The types of logs to collect.</p>
   */
  LogTypes: (LogType | string)[] | undefined;
}

export interface ConfigureLogsForChannelResponse {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName?: string;

  /**
   * <p>The types of logs collected.</p>
   */
  LogTypes?: (LogType | string)[];
}

/**
 * <p>The output configuration for this channel.</p>
 */
export interface RequestOutputItem {
  /**
   * <p>DASH manifest configuration parameters.</p>
   */
  DashPlaylistSettings?: DashPlaylistSettings;

  /**
   * <p>HLS playlist configuration parameters.</p>
   */
  HlsPlaylistSettings?: HlsPlaylistSettings;

  /**
   * <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>
   */
  SourceGroup: string | undefined;
}

export enum PlaybackMode {
  LINEAR = "LINEAR",
  LOOP = "LOOP",
}

export enum Tier {
  BASIC = "BASIC",
  STANDARD = "STANDARD",
}

export interface CreateChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code>
   *             <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code>
   *             <code>PlaybackMode</code>.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The channel's output properties.</p>
   */
  Outputs: RequestOutputItem[] | undefined;

  /**
   * <p>The type of playback mode to use for this channel.</p>
   *          <p>
   *             <code>LINEAR</code> - The programs in the schedule play once back-to-back in the schedule.</p>
   *          <p>
   *             <code>LOOP</code> - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>
   */
  PlaybackMode: PlaybackMode | string | undefined;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The tier of the channel.</p>
   */
  Tier?: Tier | string;
}

export enum ChannelState {
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

export interface CreateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) to assign to the channel.</p>
   */
  Arn?: string;

  /**
   * <p>The name to assign to the channel.</p>
   */
  ChannelName?: string;

  /**
   * <p>Indicates whether the channel is in a running state or not.</p>
   */
  ChannelState?: ChannelState | string;

  /**
   * <p>The timestamp of when the channel was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Contains information about the slate used to fill gaps between programs in the schedule.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The timestamp of when the channel was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The output properties to assign to the channel.</p>
   */
  Outputs?: ResponseOutputItem[];

  /**
   * <p>The playback mode to assign to the channel.</p>
   */
  PlaybackMode?: string;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The tier of the channel.</p>
   */
  Tier?: string;
}

export interface DeleteChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;
}

export interface DeleteChannelResponse {}

export interface DescribeChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;
}

export interface DescribeChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the channel.</p>
   */
  ChannelName?: string;

  /**
   * <p>Indicates whether the channel is in a running state or not.</p>
   */
  ChannelState?: ChannelState | string;

  /**
   * <p>The timestamp of when the channel was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Contains information about the slate used to fill gaps between programs in the schedule.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The timestamp of when the channel was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The channel's output properties.</p>
   */
  Outputs?: ResponseOutputItem[];

  /**
   * <p>The channel's playback mode.</p>
   */
  PlaybackMode?: string;

  /**
   * <p>The tags assigned to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The channel's tier.</p>
   */
  Tier?: string;

  /**
   * <p>The log configuration for the channel.</p>
   */
  LogConfiguration: LogConfigurationForChannel | undefined;
}

export interface GetChannelScheduleRequest {
  /**
   * <p>The name of the channel associated with this Channel Schedule.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The duration in minutes of the channel schedule.</p>
   */
  DurationMinutes?: string;

  /**
   * <p>The maximum number of channel schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channel schedules, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) If the playback configuration has more than <code>MaxResults</code> channel schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p>
   *          <p>For the first <code>GetChannelScheduleRequest</code> request, omit this value.</p>
   *          <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p>
   *          <p>If the previous response didn't include a <code>NextToken</code> element, there are no more channel schedules to get.</p>
   */
  NextToken?: string;
}

export interface GetChannelScheduleResponse {
  /**
   * <p>A list of schedule entries for the channel.</p>
   */
  Items?: ScheduleEntry[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListChannelsRequest {
  /**
   * <p>The maximum number of channels that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channels, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListChannelsResponse {
  /**
   * <p>A list of channels that are associated with this account.</p>
   */
  Items?: Channel[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export enum RelativePosition {
  AFTER_PROGRAM = "AFTER_PROGRAM",
  BEFORE_PROGRAM = "BEFORE_PROGRAM",
}

/**
 * <p>Program transition configuration.</p>
 */
export interface Transition {
  /**
   * <p>The duration of the live program in seconds.</p>
   */
  DurationMillis?: number;

  /**
   * <p>The position where this program will be inserted relative to the <code>RelativePosition</code>.</p>
   */
  RelativePosition: RelativePosition | string | undefined;

  /**
   * <p>The name of the program that this program will be inserted next to, as defined by <code>RelativePosition</code>.</p>
   */
  RelativeProgram?: string;

  /**
   * <p>The date and time that the program is scheduled to start, in epoch milliseconds.</p>
   */
  ScheduledStartTimeMillis?: number;

  /**
   * <p>Defines when the program plays in the schedule. You can set the value to <code>ABSOLUTE</code> or <code>RELATIVE</code>.</p>
   *          <p>
   *             <code>ABSOLUTE</code> - The program plays at a specific wall clock time. This setting can only be used for channels using the <code>LINEAR</code>
   *             <code>PlaybackMode</code>.</p>
   *          <p>Note the following considerations when using <code>ABSOLUTE</code> transitions:</p>
   *          <p>If the preceding program in the schedule has a duration that extends past the wall clock time, MediaTailor truncates the preceding program on a common segment boundary.</p>
   *          <p>If there are gaps in playback, MediaTailor plays the <code>FillerSlate</code> you configured for your linear channel.</p>
   *          <p>
   *             <code>RELATIVE</code> - The program is inserted into the schedule either before or after a program that you specify via <code>RelativePosition</code>.</p>
   */
  Type: string | undefined;
}

/**
 * <p>Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.</p>
 */
export interface ScheduleConfiguration {
  /**
   * <p>Program transition configurations.</p>
   */
  Transition: Transition | undefined;
}

export interface CreateProgramRequest {
  /**
   * <p>The ad break configuration settings.</p>
   */
  AdBreaks?: AdBreak[];

  /**
   * <p>The name of the channel for this Program.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the LiveSource for this Program.</p>
   */
  LiveSourceName?: string;

  /**
   * <p>The name of the Program.</p>
   */
  ProgramName: string | undefined;

  /**
   * <p>The schedule configuration settings.</p>
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name that's used to refer to a VOD source.</p>
   */
  VodSourceName?: string;
}

export interface CreateProgramResponse {
  /**
   * <p>The ad break configuration settings.</p>
   */
  AdBreaks?: AdBreak[];

  /**
   * <p>The ARN to assign to the program.</p>
   */
  Arn?: string;

  /**
   * <p>The name to assign to the channel for this program.</p>
   */
  ChannelName?: string;

  /**
   * <p>The time the program was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the LiveSource for this Program.</p>
   */
  LiveSourceName?: string;

  /**
   * <p>The name to assign to this program.</p>
   */
  ProgramName?: string;

  /**
   * <p>The scheduled start time for this Program.</p>
   */
  ScheduledStartTime?: Date;

  /**
   * <p>The name to assign to the source location for this program.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The name that's used to refer to a VOD source.</p>
   */
  VodSourceName?: string;
}

export interface DeleteProgramRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the program.</p>
   */
  ProgramName: string | undefined;
}

export interface DeleteProgramResponse {}

export interface DescribeProgramRequest {
  /**
   * <p>The name of the channel associated with this Program.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the program.</p>
   */
  ProgramName: string | undefined;
}

export interface DescribeProgramResponse {
  /**
   * <p>The ad break configuration settings.</p>
   */
  AdBreaks?: AdBreak[];

  /**
   * <p>The ARN of the program.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the channel that the program belongs to.</p>
   */
  ChannelName?: string;

  /**
   * <p>The timestamp of when the program was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the LiveSource for this Program.</p>
   */
  LiveSourceName?: string;

  /**
   * <p>The name of the program.</p>
   */
  ProgramName?: string;

  /**
   * <p>The date and time that the program is scheduled to start in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2021-03-27T17:48:16.751Z represents March 27, 2021 at 17:48:16.751 UTC.</p>
   */
  ScheduledStartTime?: Date;

  /**
   * <p>The source location name.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The name that's used to refer to a VOD source.</p>
   */
  VodSourceName?: string;
}

export interface StartChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;
}

export interface StartChannelResponse {}

export interface StopChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;
}

export interface StopChannelResponse {}

export interface UpdateChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code>
   *             <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code>
   *             <code>PlaybackMode</code>.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The channel's output properties.</p>
   */
  Outputs: RequestOutputItem[] | undefined;
}

export interface UpdateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the channel.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the channel.</p>
   */
  ChannelName?: string;

  /**
   * <p>Returns the state whether the channel is running or not.</p>
   */
  ChannelState?: ChannelState | string;

  /**
   * <p>The timestamp of when the channel was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code>
   *             <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code>
   *             <code>PlaybackMode</code>.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The timestamp that indicates when the channel was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The channel's output properties.</p>
   */
  Outputs?: ResponseOutputItem[];

  /**
   * <p>The type of playback mode for this channel.</p>
   *          <p>
   *             <code>LINEAR</code> - Programs play back-to-back only once.</p>
   *          <p>
   *             <code>LOOP</code> - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</p>
   */
  PlaybackMode?: string;

  /**
   * <p>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The tier associated with this Channel.</p>
   */
  Tier?: string;
}

/**
 * <p>Configures Amazon CloudWatch log settings for a playback configuration.</p>
 */
export interface ConfigureLogsForPlaybackConfigurationRequest {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p>
   *          <p>Valid values: <code>0</code> - <code>100</code>
   *          </p>
   */
  PercentEnabled: number | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;
}

export interface ConfigureLogsForPlaybackConfigurationResponse {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account.</p>
   */
  PercentEnabled: number | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName?: string;
}

export interface CreateLiveSourceRequest {
  /**
   * <p>A list of HTTP package configuration parameters for this live source.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the live source.</p>
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateLiveSourceResponse {
  /**
   * <p>The ARN to assign to the live source.</p>
   */
  Arn?: string;

  /**
   * <p>The time the live source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A list of HTTP package configuration parameters for this live source.</p>
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[];

  /**
   * <p>The time the live source was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name to assign to the live source.</p>
   */
  LiveSourceName?: string;

  /**
   * <p>The name to assign to the source location of the live source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreatePrefetchScheduleRequest {
  /**
   * <p>The configuration settings for MediaTailor's <i>consumption</i> of the prefetched ads from the ad decision server. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.</p>
   */
  Consumption: PrefetchConsumption | undefined;

  /**
   * <p>The name to assign to the schedule request.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name to assign to the playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.</p>
   */
  Retrieval: PrefetchRetrieval | undefined;

  /**
   * <p>An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.</p>
   */
  StreamId?: string;
}

export interface CreatePrefetchScheduleResponse {
  /**
   * <p>The ARN to assign to the prefetch schedule.</p>
   */
  Arn?: string;

  /**
   * <p>The configuration settings for MediaTailor's <i>consumption</i> of the prefetched ads from the ad decision server. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.</p>
   */
  Consumption?: PrefetchConsumption;

  /**
   * <p>The name to assign to the prefetch schedule.</p>
   */
  Name?: string;

  /**
   * <p>The name to assign to the playback configuration.</p>
   */
  PlaybackConfigurationName?: string;

  /**
   * <p>The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.</p>
   */
  Retrieval?: PrefetchRetrieval;

  /**
   * <p>An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.</p>
   */
  StreamId?: string;
}

export interface CreateSourceLocationRequest {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   */
  AccessConfiguration?: AccessConfiguration;

  /**
   * <p>The optional configuration for the server that serves segments.</p>
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

  /**
   * <p>The source's HTTP package configurations.</p>
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * <p>A list of the segment delivery configurations associated with this resource.</p>
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[];

  /**
   * <p>The name associated with the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateSourceLocationResponse {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   */
  AccessConfiguration?: AccessConfiguration;

  /**
   * <p>The ARN to assign to the source location.</p>
   */
  Arn?: string;

  /**
   * <p>The time the source location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The optional configuration for the server that serves segments.</p>
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

  /**
   * <p>The source's HTTP package configurations.</p>
   */
  HttpConfiguration?: HttpConfiguration;

  /**
   * <p>The time the source location was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The segment delivery configurations for the source location. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[];

  /**
   * <p>The name to assign to the source location.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateVodSourceRequest {
  /**
   * <p>A list of HTTP package configuration parameters for this VOD source.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the source location for this VOD source.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name associated with the VOD source.&gt;</p>
   */
  VodSourceName: string | undefined;
}

export interface CreateVodSourceResponse {
  /**
   * <p>The ARN to assign to this VOD source.</p>
   */
  Arn?: string;

  /**
   * <p>The time the VOD source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A list of HTTP package configuration parameters for this VOD source.</p>
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[];

  /**
   * <p>The time the VOD source was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name to assign to the source location for this VOD source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name to assign to the VOD source.</p>
   */
  VodSourceName?: string;
}

/**
 * <p>The configuration for DASH PUT operations.</p>
 */
export interface DashConfigurationForPut {
  /**
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are <code>DISABLED</code> and <code>EMT_DEFAULT</code>. The <code>EMT_DEFAULT</code> setting enables the inclusion of the tag and is the default value.</p>
   */
  MpdLocation?: string;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to <code>SINGLE_PERIOD</code>. The default setting is <code>MULTI_PERIOD</code>. For multi-period manifests, omit this setting or set it to <code>MULTI_PERIOD</code>.</p>
   */
  OriginManifestType?: OriginManifestType | string;
}

export interface DeleteLiveSourceRequest {
  /**
   * <p>The name of the live source.</p>
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location associated with this Live Source.</p>
   */
  SourceLocationName: string | undefined;
}

export interface DeleteLiveSourceResponse {}

export interface DeletePlaybackConfigurationRequest {
  /**
   * <p>The name of the playback configuration.</p>
   */
  Name: string | undefined;
}

export interface DeletePlaybackConfigurationResponse {}

export interface DeletePrefetchScheduleRequest {
  /**
   * <p>The name of the prefetch schedule. If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the playback configuration for this prefetch schedule.</p>
   */
  PlaybackConfigurationName: string | undefined;
}

export interface DeletePrefetchScheduleResponse {}

export interface DeleteSourceLocationRequest {
  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;
}

export interface DeleteSourceLocationResponse {}

export interface DeleteVodSourceRequest {
  /**
   * <p>The name of the source location associated with this VOD Source.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName: string | undefined;
}

export interface DeleteVodSourceResponse {}

export interface DescribeLiveSourceRequest {
  /**
   * <p>The name of the live source.</p>
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location associated with this Live Source.</p>
   */
  SourceLocationName: string | undefined;
}

export interface DescribeLiveSourceResponse {
  /**
   * <p>The ARN of the live source.</p>
   */
  Arn?: string;

  /**
   * <p>The timestamp that indicates when the live source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The HTTP package configurations.</p>
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[];

  /**
   * <p>The timestamp that indicates when the live source was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the live source.</p>
   */
  LiveSourceName?: string;

  /**
   * <p>The name of the source location associated with the live source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeSourceLocationRequest {
  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;
}

export interface DescribeSourceLocationResponse {
  /**
   * <p>The access configuration for the source location.</p>
   */
  AccessConfiguration?: AccessConfiguration;

  /**
   * <p>The ARN of the source location.</p>
   */
  Arn?: string;

  /**
   * <p>The timestamp that indicates when the source location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The default segment delivery configuration settings.</p>
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

  /**
   * <p>The HTTP package configuration settings for the source location.</p>
   */
  HttpConfiguration?: HttpConfiguration;

  /**
   * <p>The timestamp that indicates when the source location was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A list of the segment delivery configurations associated with this resource.</p>
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[];

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeVodSourceRequest {
  /**
   * <p>The name of the source location associated with this VOD Source.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD Source.</p>
   */
  VodSourceName: string | undefined;
}

export interface DescribeVodSourceResponse {
  /**
   * <p>The ARN of the VOD source.</p>
   */
  Arn?: string;

  /**
   * <p>The timestamp that indicates when the VOD source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The HTTP package configurations.</p>
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[];

  /**
   * <p>The last modified time of the VOD source.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the source location associated with the VOD source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName?: string;
}

export interface GetPlaybackConfigurationRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;
}

export interface GetPlaybackConfigurationResponse {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
   */
  ConfigurationAliases?: Record<string, Record<string, string>>;

  /**
   * <p>The configuration for DASH content.</p>
   */
  DashConfiguration?: DashConfiguration;

  /**
   * <p>The configuration for HLS content.</p>
   */
  HlsConfiguration?: HlsConfiguration;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   */
  LivePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * <p>The Amazon CloudWatch log settings for a playback configuration.</p>
   */
  LogConfiguration?: LogConfiguration;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration.</p>
   */
  PlaybackConfigurationArn?: string;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting.</p>
   */
  PlaybackEndpointPrefix?: string;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting.</p>
   */
  SessionInitializationEndpointPrefix?: string;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags assigned to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export interface GetPrefetchScheduleRequest {
  /**
   * <p>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>Returns information about the prefetch schedule for a specific playback configuration. If you call <code>GetPrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code.</p>
   */
  PlaybackConfigurationName: string | undefined;
}

export interface GetPrefetchScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the prefetch schedule.</p>
   */
  Arn?: string;

  /**
   * <p>Consumption settings determine how, and when, MediaTailor places the prefetched ads into ad breaks. Ad consumption occurs within a span of time that you define, called a <i>consumption window</i>. You can designate which ad breaks that MediaTailor fills with prefetch ads by setting avail matching criteria.</p>
   */
  Consumption?: PrefetchConsumption;

  /**
   * <p>The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>The name of the playback configuration to create the prefetch schedule for.</p>
   */
  PlaybackConfigurationName?: string;

  /**
   * <p>A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).</p>
   */
  Retrieval?: PrefetchRetrieval;

  /**
   * <p>An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.</p>
   */
  StreamId?: string;
}

export interface ListAlertsRequest {
  /**
   * <p>The maximum number of alerts that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> alerts, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListAlertsResponse {
  /**
   * <p>A list of alerts that are associated with this resource.</p>
   */
  Items?: Alert[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListLiveSourcesRequest {
  /**
   * <p>The maximum number of live sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> live sources, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the source location associated with this Live Sources list.</p>
   */
  SourceLocationName: string | undefined;
}

export interface ListLiveSourcesResponse {
  /**
   * <p>Lists the live sources.</p>
   */
  Items?: LiveSource[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListPlaybackConfigurationsRequest {
  /**
   * <p>The maximum number of playback configurations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> playback configurations, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListPlaybackConfigurationsResponse {
  /**
   * <p>Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored.</p>
   */
  Items?: PlaybackConfiguration[];

  /**
   * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListPrefetchSchedulesRequest {
  /**
   * <p>The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> prefetch schedules, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) If the playback configuration has more than <code>MaxResults</code> prefetch schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p>
   *          <p> For the first <code>ListPrefetchSchedulesRequest</code> request, omit this value.</p>
   *          <p> For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p>
   *          <p> If the previous response didn't include a <code>NextToken</code> element, there are no more prefetch schedules to get.</p>
   */
  NextToken?: string;

  /**
   * <p>Retrieves the prefetch schedule(s) for a specific playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams.</p>
   */
  StreamId?: string;
}

export interface ListPrefetchSchedulesResponse {
  /**
   * <p>Lists the prefetch schedules. An empty <code>Items</code> list doesn't mean there aren't more items to fetch, just that that page was empty.</p>
   */
  Items?: PrefetchSchedule[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListSourceLocationsRequest {
  /**
   * <p> The maximum number of source locations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> source locations, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListSourceLocationsResponse {
  /**
   * <p>A list of source locations.</p>
   */
  Items?: SourceLocation[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with this resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with this resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface ListVodSourcesRequest {
  /**
   * <p> The maximum number of VOD sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> VOD sources, use the value of <code>NextToken</code> in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the source location associated with this VOD Source list.</p>
   */
  SourceLocationName: string | undefined;
}

export interface ListVodSourcesResponse {
  /**
   * <p>Lists the VOD sources.</p>
   */
  Items?: VodSource[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export interface UpdateLiveSourceRequest {
  /**
   * <p>A list of HTTP package configurations for the live source on this account.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the live source.</p>
   */
  LiveSourceName: string | undefined;

  /**
   * <p>The name of the source location associated with this Live Source.</p>
   */
  SourceLocationName: string | undefined;
}

export interface UpdateLiveSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with this live source.</p>
   */
  Arn?: string;

  /**
   * <p>The timestamp that indicates when the live source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A list of HTTP package configurations for the live source on this account.</p>
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[];

  /**
   * <p>The timestamp that indicates when the live source was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the live source.</p>
   */
  LiveSourceName?: string;

  /**
   * <p>The name of the source location associated with the live source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface PutPlaybackConfigurationRequest {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
   */
  ConfigurationAliases?: Record<string, Record<string, string>>;

  /**
   * <p>The configuration for DASH content.</p>
   */
  DashConfiguration?: DashConfigurationForPut;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   */
  LivePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export interface PutPlaybackConfigurationResponse {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
   */
  AvailSuppression?: AvailSuppression;

  /**
   * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
   */
  Bumper?: Bumper;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
   */
  CdnConfiguration?: CdnConfiguration;

  /**
   * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
   */
  ConfigurationAliases?: Record<string, Record<string, string>>;

  /**
   * <p>The configuration for DASH content.</p>
   */
  DashConfiguration?: DashConfiguration;

  /**
   * <p>The configuration for HLS content.</p>
   */
  HlsConfiguration?: HlsConfiguration;

  /**
   * <p>The configuration for pre-roll ad insertion.</p>
   */
  LivePreRollConfiguration?: LivePreRollConfiguration;

  /**
   * <p>The Amazon CloudWatch log settings for a playback configuration.</p>
   */
  LogConfiguration?: LogConfiguration;

  /**
   * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
   */
  ManifestProcessingRules?: ManifestProcessingRules;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the playback configuration.</p>
   */
  PlaybackConfigurationArn?: string;

  /**
   * <p>The playback endpoint prefix associated with the playback configuration.</p>
   */
  PlaybackEndpointPrefix?: string;

  /**
   * <p>The session initialization endpoint prefix associated with the playback configuration.</p>
   */
  SessionInitializationEndpointPrefix?: string;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export interface UpdateSourceLocationRequest {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   */
  AccessConfiguration?: AccessConfiguration;

  /**
   * <p>The optional configuration for the host server that serves segments.</p>
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

  /**
   * <p>The HTTP configuration for the source location.</p>
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * <p>A list of the segment delivery configurations associated with this resource.</p>
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[];

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;
}

export interface UpdateSourceLocationResponse {
  /**
   * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
   */
  AccessConfiguration?: AccessConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the source location.</p>
   */
  Arn?: string;

  /**
   * <p>The timestamp that indicates when the source location was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The optional configuration for the host server that serves segments.</p>
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

  /**
   * <p>The HTTP configuration for the source location.</p>
   */
  HttpConfiguration?: HttpConfiguration;

  /**
   * <p>The timestamp that indicates when the source location was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The segment delivery configurations for the source location. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[];

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to untag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateVodSourceRequest {
  /**
   * <p>A list of HTTP package configurations for the VOD source on this account.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The name of the source location associated with this VOD Source.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName: string | undefined;
}

export interface UpdateVodSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the VOD source.</p>
   */
  Arn?: string;

  /**
   * <p>The timestamp that indicates when the VOD source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A list of HTTP package configurations for the VOD source on this account.</p>
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[];

  /**
   * <p>The timestamp that indicates when the VOD source was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the source location associated with the VOD source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName?: string;
}

/**
 * @internal
 */
export const SlateSourceFilterSensitiveLog = (obj: SlateSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpliceInsertMessageFilterSensitiveLog = (obj: SpliceInsertMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SegmentationDescriptorFilterSensitiveLog = (obj: SegmentationDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeSignalMessageFilterSensitiveLog = (obj: TimeSignalMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdBreakFilterSensitiveLog = (obj: AdBreak): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlertFilterSensitiveLog = (obj: Alert): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailMatchingCriteriaFilterSensitiveLog = (obj: AvailMatchingCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogConfigurationForChannelFilterSensitiveLog = (obj: LogConfigurationForChannel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashPlaylistSettingsFilterSensitiveLog = (obj: DashPlaylistSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsPlaylistSettingsFilterSensitiveLog = (obj: HlsPlaylistSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseOutputItemFilterSensitiveLog = (obj: ResponseOutputItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelFilterSensitiveLog = (obj: Channel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpPackageConfigurationFilterSensitiveLog = (obj: HttpPackageConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LiveSourceFilterSensitiveLog = (obj: LiveSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailSuppressionFilterSensitiveLog = (obj: AvailSuppression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BumperFilterSensitiveLog = (obj: Bumper): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CdnConfigurationFilterSensitiveLog = (obj: CdnConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashConfigurationFilterSensitiveLog = (obj: DashConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsConfigurationFilterSensitiveLog = (obj: HlsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LivePreRollConfigurationFilterSensitiveLog = (obj: LivePreRollConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogConfigurationFilterSensitiveLog = (obj: LogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdMarkerPassthroughFilterSensitiveLog = (obj: AdMarkerPassthrough): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManifestProcessingRulesFilterSensitiveLog = (obj: ManifestProcessingRules): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlaybackConfigurationFilterSensitiveLog = (obj: PlaybackConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefetchConsumptionFilterSensitiveLog = (obj: PrefetchConsumption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefetchRetrievalFilterSensitiveLog = (obj: PrefetchRetrieval): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefetchScheduleFilterSensitiveLog = (obj: PrefetchSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleAdBreakFilterSensitiveLog = (obj: ScheduleAdBreak): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleEntryFilterSensitiveLog = (obj: ScheduleEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SegmentDeliveryConfigurationFilterSensitiveLog = (obj: SegmentDeliveryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecretsManagerAccessTokenConfigurationFilterSensitiveLog = (
  obj: SecretsManagerAccessTokenConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessConfigurationFilterSensitiveLog = (obj: AccessConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultSegmentDeliveryConfigurationFilterSensitiveLog = (
  obj: DefaultSegmentDeliveryConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpConfigurationFilterSensitiveLog = (obj: HttpConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceLocationFilterSensitiveLog = (obj: SourceLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VodSourceFilterSensitiveLog = (obj: VodSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelPolicyRequestFilterSensitiveLog = (obj: DeleteChannelPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelPolicyResponseFilterSensitiveLog = (obj: DeleteChannelPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelPolicyRequestFilterSensitiveLog = (obj: GetChannelPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelPolicyResponseFilterSensitiveLog = (obj: GetChannelPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutChannelPolicyRequestFilterSensitiveLog = (obj: PutChannelPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutChannelPolicyResponseFilterSensitiveLog = (obj: PutChannelPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureLogsForChannelRequestFilterSensitiveLog = (obj: ConfigureLogsForChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureLogsForChannelResponseFilterSensitiveLog = (obj: ConfigureLogsForChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestOutputItemFilterSensitiveLog = (obj: RequestOutputItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChannelRequestFilterSensitiveLog = (obj: CreateChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChannelResponseFilterSensitiveLog = (obj: CreateChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelRequestFilterSensitiveLog = (obj: DeleteChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelResponseFilterSensitiveLog = (obj: DeleteChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelRequestFilterSensitiveLog = (obj: DescribeChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelResponseFilterSensitiveLog = (obj: DescribeChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelScheduleRequestFilterSensitiveLog = (obj: GetChannelScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelScheduleResponseFilterSensitiveLog = (obj: GetChannelScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListChannelsRequestFilterSensitiveLog = (obj: ListChannelsRequest): any => ({
  ...obj,
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
export const TransitionFilterSensitiveLog = (obj: Transition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleConfigurationFilterSensitiveLog = (obj: ScheduleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProgramRequestFilterSensitiveLog = (obj: CreateProgramRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProgramResponseFilterSensitiveLog = (obj: CreateProgramResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProgramRequestFilterSensitiveLog = (obj: DeleteProgramRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProgramResponseFilterSensitiveLog = (obj: DeleteProgramResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProgramRequestFilterSensitiveLog = (obj: DescribeProgramRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProgramResponseFilterSensitiveLog = (obj: DescribeProgramResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartChannelRequestFilterSensitiveLog = (obj: StartChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartChannelResponseFilterSensitiveLog = (obj: StartChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopChannelRequestFilterSensitiveLog = (obj: StopChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopChannelResponseFilterSensitiveLog = (obj: StopChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelRequestFilterSensitiveLog = (obj: UpdateChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelResponseFilterSensitiveLog = (obj: UpdateChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureLogsForPlaybackConfigurationRequestFilterSensitiveLog = (
  obj: ConfigureLogsForPlaybackConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureLogsForPlaybackConfigurationResponseFilterSensitiveLog = (
  obj: ConfigureLogsForPlaybackConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLiveSourceRequestFilterSensitiveLog = (obj: CreateLiveSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLiveSourceResponseFilterSensitiveLog = (obj: CreateLiveSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePrefetchScheduleRequestFilterSensitiveLog = (obj: CreatePrefetchScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePrefetchScheduleResponseFilterSensitiveLog = (obj: CreatePrefetchScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSourceLocationRequestFilterSensitiveLog = (obj: CreateSourceLocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSourceLocationResponseFilterSensitiveLog = (obj: CreateSourceLocationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVodSourceRequestFilterSensitiveLog = (obj: CreateVodSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVodSourceResponseFilterSensitiveLog = (obj: CreateVodSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashConfigurationForPutFilterSensitiveLog = (obj: DashConfigurationForPut): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLiveSourceRequestFilterSensitiveLog = (obj: DeleteLiveSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLiveSourceResponseFilterSensitiveLog = (obj: DeleteLiveSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlaybackConfigurationRequestFilterSensitiveLog = (obj: DeletePlaybackConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlaybackConfigurationResponseFilterSensitiveLog = (
  obj: DeletePlaybackConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePrefetchScheduleRequestFilterSensitiveLog = (obj: DeletePrefetchScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePrefetchScheduleResponseFilterSensitiveLog = (obj: DeletePrefetchScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSourceLocationRequestFilterSensitiveLog = (obj: DeleteSourceLocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSourceLocationResponseFilterSensitiveLog = (obj: DeleteSourceLocationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVodSourceRequestFilterSensitiveLog = (obj: DeleteVodSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVodSourceResponseFilterSensitiveLog = (obj: DeleteVodSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLiveSourceRequestFilterSensitiveLog = (obj: DescribeLiveSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLiveSourceResponseFilterSensitiveLog = (obj: DescribeLiveSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSourceLocationRequestFilterSensitiveLog = (obj: DescribeSourceLocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSourceLocationResponseFilterSensitiveLog = (obj: DescribeSourceLocationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVodSourceRequestFilterSensitiveLog = (obj: DescribeVodSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVodSourceResponseFilterSensitiveLog = (obj: DescribeVodSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlaybackConfigurationRequestFilterSensitiveLog = (obj: GetPlaybackConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlaybackConfigurationResponseFilterSensitiveLog = (obj: GetPlaybackConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPrefetchScheduleRequestFilterSensitiveLog = (obj: GetPrefetchScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPrefetchScheduleResponseFilterSensitiveLog = (obj: GetPrefetchScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlertsRequestFilterSensitiveLog = (obj: ListAlertsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlertsResponseFilterSensitiveLog = (obj: ListAlertsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLiveSourcesRequestFilterSensitiveLog = (obj: ListLiveSourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLiveSourcesResponseFilterSensitiveLog = (obj: ListLiveSourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlaybackConfigurationsRequestFilterSensitiveLog = (obj: ListPlaybackConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlaybackConfigurationsResponseFilterSensitiveLog = (obj: ListPlaybackConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPrefetchSchedulesRequestFilterSensitiveLog = (obj: ListPrefetchSchedulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPrefetchSchedulesResponseFilterSensitiveLog = (obj: ListPrefetchSchedulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSourceLocationsRequestFilterSensitiveLog = (obj: ListSourceLocationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSourceLocationsResponseFilterSensitiveLog = (obj: ListSourceLocationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVodSourcesRequestFilterSensitiveLog = (obj: ListVodSourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVodSourcesResponseFilterSensitiveLog = (obj: ListVodSourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLiveSourceRequestFilterSensitiveLog = (obj: UpdateLiveSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLiveSourceResponseFilterSensitiveLog = (obj: UpdateLiveSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPlaybackConfigurationRequestFilterSensitiveLog = (obj: PutPlaybackConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPlaybackConfigurationResponseFilterSensitiveLog = (obj: PutPlaybackConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSourceLocationRequestFilterSensitiveLog = (obj: UpdateSourceLocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSourceLocationResponseFilterSensitiveLog = (obj: UpdateSourceLocationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVodSourceRequestFilterSensitiveLog = (obj: UpdateVodSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVodSourceResponseFilterSensitiveLog = (obj: UpdateVodSourceResponse): any => ({
  ...obj,
});
