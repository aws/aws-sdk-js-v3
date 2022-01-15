import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum MessageType {
  SPLICE_INSERT = "SPLICE_INSERT",
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

export namespace SlateSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlateSource): any => ({
    ...obj,
  });
}

/**
 * <p>Splice insert message configuration.</p>
 */
export interface SpliceInsertMessage {
  /**
   * <p>This is written to splice_insert.avail_num, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 0. Values must be between 0 and 256, inclusive.</p>
   */
  AvailNum?: number;

  /**
   * <p>This is written to splice_insert.avails_expected, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 0. Values must be between 0 and 256, inclusive.</p>
   */
  AvailsExpected?: number;

  /**
   * <p>This is written to splice_insert.splice_event_id, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 1.</p>
   */
  SpliceEventId?: number;

  /**
   * <p>This is written to splice_insert.unique_program_id, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 0. Values must be between 0 and 256, inclusive.</p>
   */
  UniqueProgramId?: number;
}

export namespace SpliceInsertMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpliceInsertMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Ad break configuration parameters.</p>
 */
export interface AdBreak {
  /**
   * <p>The SCTE-35 ad insertion type. Accepted value: SPLICE_INSERT.</p>
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
   * <p>This defines the SCTE-35 splice_insert() message inserted around the ad. For information about using splice_insert(), see the SCTE-35 specficiaiton, section 9.7.3.1.</p>
   */
  SpliceInsertMessage?: SpliceInsertMessage;
}

export namespace AdBreak {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdBreak): any => ({
    ...obj,
  });
}

/**
 * <p>Alert configuration parameters.</p>
 */
export interface Alert {
  /**
   * <p>The code for the alert. For example, NOT_PROCESSED.</p>
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

export namespace Alert {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alert): any => ({
    ...obj,
  });
}

export enum Operator {
  EQUALS = "EQUALS",
}

/**
 * <p>MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.</p> <p>As an example, let's say that you set DynamicVariable to scte.event_id and Operator to EQUALS, and your playback configuration has an ADS URL of https://my.ads.server.com/path?&amp;podId=[scte.avail_num]&amp;event=[scte.event_id]&amp;duration=[session.avail_duration_secs]. And the prefetch request to the ADS contains these values https://my.ads.server.com/path?&amp;podId=3&amp;event=my-awesome-event&amp;duration=30. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of my-awesome-event, since it must match the event id that MediaTailor uses to query the ADS.</p> <p>You can specify up to five AvailMatchingCriteria. If you specify multiple AvailMatchingCriteria, MediaTailor combines them to match using a logical AND. You can model logical OR combinations by creating multiple prefetch schedules.</p>
 */
export interface AvailMatchingCriteria {
  /**
   * <p>The dynamic variable(s) that MediaTailor should use as avail matching criteria. MediaTailor only places the prefetched ads into the avail if the avail matches the criteria defined by the dynamic variable. For information about dynamic variables, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">Using dynamic ad variables</a> in the <i>MediaTailor User Guide</i>.</p> <p>You can include up to 100 dynamic variables.</p>
   */
  DynamicVariable: string | undefined;

  /**
   * <p>For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.</p>
   */
  Operator: Operator | string | undefined;
}

export namespace AvailMatchingCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailMatchingCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>Dash manifest configuration parameters.</p>
 */
export interface DashPlaylistSettings {
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: 30 seconds. Maximum value: 3600 seconds.</p>
   */
  ManifestWindowSeconds?: number;

  /**
   * <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: 2 seconds. Maximum value: 60 seconds.</p>
   */
  MinBufferTimeSeconds?: number;

  /**
   * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: 2 seconds. Maximum value: 60 seconds.</p>
   */
  MinUpdatePeriodSeconds?: number;

  /**
   * <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: 2 seconds. Maximum value: 60 seconds.</p>
   */
  SuggestedPresentationDelaySeconds?: number;
}

export namespace DashPlaylistSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashPlaylistSettings): any => ({
    ...obj,
  });
}

/**
 * <p>HLS playlist configuration parameters.</p>
 */
export interface HlsPlaylistSettings {
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: 30 seconds. Maximum value: 3600 seconds.</p>
   */
  ManifestWindowSeconds?: number;
}

export namespace HlsPlaylistSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsPlaylistSettings): any => ({
    ...obj,
  });
}

/**
 * <p>This response includes only the "property" : "type" property.</p>
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

export namespace ResponseOutputItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseOutputItem): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration parameters for a channel.</p>
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
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the LINEAR PlaybackMode. MediaTailor doesn't support filler slate for channels using the LOOP PlaybackMode.</p>
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
   * <p>The type of playback mode for this channel.</p> <p>LINEAR - Programs play back-to-back only once.</p> <p>LOOP - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</p>
   */
  PlaybackMode: string | undefined;

  /**
   * <p>The tags to assign to the channel.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
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
   * <p>Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to BEHIND_LIVE_EDGE, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window.</p>
   */
  Mode?: Mode | string;

  /**
   * <p>A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.</p>
   */
  Value?: string;
}

export namespace AvailSuppression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailSuppression): any => ({
    ...obj,
  });
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

export namespace Bumper {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bumper): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
 */
export interface CdnConfiguration {
  /**
   * <p>A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.&amp;lt;region&gt;.amazonaws.com. Then specify the rule's name in this AdSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.</p>
   */
  AdSegmentUrlPrefix?: string;

  /**
   * <p>A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this ContentSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.</p>
   */
  ContentSegmentUrlPrefix?: string;
}

export namespace CdnConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CdnConfiguration): any => ({
    ...obj,
  });
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
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value.</p>
   */
  MpdLocation?: string;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD.</p>
   */
  OriginManifestType?: OriginManifestType | string;
}

export namespace DashConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashConfiguration): any => ({
    ...obj,
  });
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

export namespace HlsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HlsConfiguration): any => ({
    ...obj,
  });
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
   * The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.
   */
  MaxDurationSeconds?: number;
}

export namespace LivePreRollConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LivePreRollConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Returns Amazon CloudWatch log settings for a playback configuration.</p>
 */
export interface LogConfiguration {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to 60, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: 0 - 100</p>
   */
  PercentEnabled: number | undefined;
}

export namespace LogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.</p>
 */
export interface AdMarkerPassthrough {
  /**
   * <p>Enables ad marker passthrough for your configuration.</p>
   */
  Enabled?: boolean;
}

export namespace AdMarkerPassthrough {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdMarkerPassthrough): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
 */
export interface ManifestProcessingRules {
  /**
   * <p>For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.</p>
   */
  AdMarkerPassthrough?: AdMarkerPassthrough;
}

export namespace ManifestProcessingRules {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManifestProcessingRules): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
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
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

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
   * <p>The tags to assign to the playback configuration.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace PlaybackConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaybackConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks.</p>
 */
export interface PrefetchConsumption {
  /**
   * <p>If you only want MediaTailor to insert prefetched ads into avails (ad breaks) that match specific dynamic variables, such as scte.event_id, set the avail matching criteria.</p>
   */
  AvailMatchingCriteria?: AvailMatchingCriteria[];

  /**
   * <p>The time when MediaTailor no longer considers the prefetched ads for use in an ad break. MediaTailor automatically deletes prefetch schedules no less than seven days after the end time. If you'd like to manually delete the prefetch schedule, you can call DeletePrefetchSchedule.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The time when prefetched ads are considered for use in an ad break. If you don't specify StartTime, the prefetched ads are available after MediaTailor retrives them from the ad decision server.</p>
   */
  StartTime?: Date;
}

export namespace PrefetchConsumption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefetchConsumption): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.</p>
 */
export interface PrefetchRetrieval {
  /**
   * <p>The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).</p> <p>You intially configure <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">dynamic variables</a> for the ADS URL when you set up your playback configuration. When you specify DynamicVariables for prefetch retrieval, MediaTailor includes the dynamic variables in the request to the ADS.</p>
   */
  DynamicVariables?: { [key: string]: string };

  /**
   * <p>The time when prefetch retrieval ends for the ad break. Prefetching will be attempted for manifest requests that occur at or before this time.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The time when prefetch retrievals can start for this break. Ad prefetching will be attempted for manifest requests that occur at or after this time. Defaults to the current time. If not specified, the prefetch retrieval starts as soon as possible.</p>
   */
  StartTime?: Date;
}

export namespace PrefetchRetrieval {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefetchRetrieval): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains prefetch schedule information.</p>
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

export namespace PrefetchSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefetchSchedule): any => ({
    ...obj,
  });
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

export namespace ScheduleAdBreak {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleAdBreak): any => ({
    ...obj,
  });
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
   * <p>The name of the program.</p>
   */
  ProgramName: string | undefined;

  /**
   * <p>The schedule's ad break properties.</p>
   */
  ScheduleAdBreaks?: ScheduleAdBreak[];

  /**
   * <p>The type of schedule entry.</p> <p>Valid values: PROGRAM or FILLER_SLATE.</p>
   */
  ScheduleEntryType?: ScheduleEntryType | string;

  /**
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName: string | undefined;
}

export namespace ScheduleEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleEntry): any => ({
    ...obj,
  });
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

export namespace SecretsManagerAccessTokenConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecretsManagerAccessTokenConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Access configuration parameters.</p>
 */
export interface AccessConfiguration {
  /**
   * <p>The type of authentication used to access content from HttpConfiguration::BaseUrl on your source location. Accepted value: S3_SIGV4.</p> <p>S3_SIGV4 - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.</p> <p>Before you can use S3_SIGV4, you must meet these requirements:</p> <p>• You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.</p> <p>• The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.</p> <p>• The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.</p>
   */
  AccessType?: AccessType | string;

  /**
   * <p>AWS Secrets Manager access token configuration parameters.</p>
   */
  SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
}

export namespace AccessConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessConfiguration): any => ({
    ...obj,
  });
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

export namespace DefaultSegmentDeliveryConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultSegmentDeliveryConfiguration): any => ({
    ...obj,
  });
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

export namespace HttpConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>This response includes only the "type" : "object" property.</p>
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
   * <p>The name of the source location.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags assigned to the source location.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace SourceLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceLocation): any => ({
    ...obj,
  });
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
   * <p>The relative path to the URL for this VOD source. This is combined with SourceLocation::HttpConfiguration::BaseUrl to form a valid URL.</p>
   */
  Path: string | undefined;

  /**
   * <p>The name of the source group. This has to match one of the Channel::Outputs::SourceGroup.</p>
   */
  SourceGroup: string | undefined;

  /**
   * <p>The streaming protocol for this package configuration. Supported values are HLS and DASH.</p>
   */
  Type: Type | string | undefined;
}

export namespace HttpPackageConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPackageConfiguration): any => ({
    ...obj,
  });
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
   * <p>The tags assigned to the VOD source.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName: string | undefined;
}

export namespace VodSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VodSource): any => ({
    ...obj,
  });
}

/**
 * Invalid request parameters.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export enum ChannelState {
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

/**
 * <p>Configures Amazon CloudWatch log settings for a playback configuration.</p>
 */
export interface ConfigureLogsForPlaybackConfigurationRequest {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to 60, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: 0 - 100</p>
   */
  PercentEnabled: number | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;
}

export namespace ConfigureLogsForPlaybackConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigureLogsForPlaybackConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ConfigureLogsForPlaybackConfigurationResponse {
  /**
   * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account.</p>
   */
  PercentEnabled?: number;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName?: string;
}

export namespace ConfigureLogsForPlaybackConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigureLogsForPlaybackConfigurationResponse): any => ({
    ...obj,
  });
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
   * <p>The name of the manifest for the channel. The name appears in the PlaybackUrl.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>A string used to match which HttpPackageConfiguration is used for each VodSource.</p>
   */
  SourceGroup: string | undefined;
}

export namespace RequestOutputItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestOutputItem): any => ({
    ...obj,
  });
}

export enum PlaybackMode {
  LINEAR = "LINEAR",
  LOOP = "LOOP",
}

export interface CreateChannelRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the LINEAR PlaybackMode. MediaTailor doesn't support filler slate for channels using the LOOP PlaybackMode.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The channel's output properties.</p>
   */
  Outputs: RequestOutputItem[] | undefined;

  /**
   * <p>The type of playback mode to use for this channel.</p> <p>LINEAR - The programs in the schedule play once back-to-back in the schedule.</p> <p>LOOP - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>
   */
  PlaybackMode: PlaybackMode | string | undefined;

  /**
   * <p>The tags to assign to the channel.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelResponse {
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
   * <p>The tags assigned to the channel.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

export interface CreatePrefetchScheduleRequest {
  /**
   * <p>The configuration settings for MediaTailor's <i>consumption</i> of the prefetched ads from the ad decision server. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.</p>
   */
  Consumption: PrefetchConsumption | undefined;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.</p>
   */
  Retrieval: PrefetchRetrieval | undefined;

  /**
   * <p>An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If StreamId is specified, MediaTailor returns all of the prefetch schedules with an exact match on StreamId. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of StreamId.</p>
   */
  StreamId?: string;
}

export namespace CreatePrefetchScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePrefetchScheduleRequest): any => ({
    ...obj,
  });
}

export interface CreatePrefetchScheduleResponse {
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

export namespace CreatePrefetchScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePrefetchScheduleResponse): any => ({
    ...obj,
  });
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
   * <p>The position where this program will be inserted relative to the RelativePosition.</p>
   */
  RelativePosition: RelativePosition | string | undefined;

  /**
   * <p>The name of the program that this program will be inserted next to, as defined by RelativePosition.</p>
   */
  RelativeProgram?: string;

  /**
   * <p>The date and time that the program is scheduled to start, in epoch milliseconds.</p>
   */
  ScheduledStartTimeMillis?: number;

  /**
   * <p>Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.</p> <p>ABSOLUTE - The program plays at a specific wall clock time. This setting can only be used for channels using the LINEAR PlaybackMode.</p> <p>Note the following considerations when using ABSOLUTE transitions:</p> <p>If the preceding program in the schedule has a duration that extends past the wall clock time, MediaTailor truncates the preceding program on a common segment boundary.</p> <p>If there are gaps in playback, MediaTailor plays the FillerSlate you configured for your linear channel.</p> <p>RELATIVE - The program is inserted into the schedule either before or after a program that you specify via RelativePosition.</p>
   */
  Type: string | undefined;
}

export namespace Transition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Transition): any => ({
    ...obj,
  });
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

export namespace ScheduleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleConfiguration): any => ({
    ...obj,
  });
}

export interface CreateProgramRequest {
  /**
   * <p>The ad break configuration settings.</p>
   */
  AdBreaks?: AdBreak[];

  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The identifier for the program you are working on.</p>
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
  VodSourceName: string | undefined;
}

export namespace CreateProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProgramRequest): any => ({
    ...obj,
  });
}

export interface CreateProgramResponse {
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

export namespace CreateProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProgramResponse): any => ({
    ...obj,
  });
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
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the source location.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateSourceLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSourceLocationRequest): any => ({
    ...obj,
  });
}

export interface CreateSourceLocationResponse {
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
   * <p>The name of the source location.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the source location.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateSourceLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSourceLocationResponse): any => ({
    ...obj,
  });
}

export interface CreateVodSourceRequest {
  /**
   * <p>An array of HTTP package configuration parameters for this VOD source.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The tags to assign to the VOD source.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The identifier for the VOD source you are working on.</p>
   */
  VodSourceName: string | undefined;
}

export namespace CreateVodSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVodSourceRequest): any => ({
    ...obj,
  });
}

export interface CreateVodSourceResponse {
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
   * <p>The ARN for the VOD source.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the source location associated with the VOD source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the VOD source.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName?: string;
}

export namespace CreateVodSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVodSourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for DASH PUT operations.</p>
 */
export interface DashConfigurationForPut {
  /**
   * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value.</p>
   */
  MpdLocation?: string;

  /**
   * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD.</p>
   */
  OriginManifestType?: OriginManifestType | string;
}

export namespace DashConfigurationForPut {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashConfigurationForPut): any => ({
    ...obj,
  });
}

export interface DeleteChannelRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;
}

export namespace DeleteChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelResponse {}

export namespace DeleteChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteChannelPolicyRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;
}

export namespace DeleteChannelPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelPolicyResponse {}

export namespace DeleteChannelPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelPolicyResponse): any => ({
    ...obj,
  });
}

export interface DeletePlaybackConfigurationRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;
}

export namespace DeletePlaybackConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaybackConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeletePlaybackConfigurationResponse {}

export namespace DeletePlaybackConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaybackConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeletePrefetchScheduleRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;
}

export namespace DeletePrefetchScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePrefetchScheduleRequest): any => ({
    ...obj,
  });
}

export interface DeletePrefetchScheduleResponse {}

export namespace DeletePrefetchScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePrefetchScheduleResponse): any => ({
    ...obj,
  });
}

export interface DeleteProgramRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The identifier for the program you are working on.</p>
   */
  ProgramName: string | undefined;
}

export namespace DeleteProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProgramRequest): any => ({
    ...obj,
  });
}

export interface DeleteProgramResponse {}

export namespace DeleteProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProgramResponse): any => ({
    ...obj,
  });
}

export interface DeleteSourceLocationRequest {
  /**
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;
}

export namespace DeleteSourceLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSourceLocationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSourceLocationResponse {}

export namespace DeleteSourceLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSourceLocationResponse): any => ({
    ...obj,
  });
}

export interface DeleteVodSourceRequest {
  /**
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The identifier for the VOD source you are working on.</p>
   */
  VodSourceName: string | undefined;
}

export namespace DeleteVodSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVodSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteVodSourceResponse {}

export namespace DeleteVodSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVodSourceResponse): any => ({
    ...obj,
  });
}

export interface DescribeChannelRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;
}

export namespace DescribeChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
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
   * <p>The tags assigned to the channel.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
  });
}

export interface DescribeProgramRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The identifier for the program you are working on.</p>
   */
  ProgramName: string | undefined;
}

export namespace DescribeProgramRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProgramRequest): any => ({
    ...obj,
  });
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

export namespace DescribeProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProgramResponse): any => ({
    ...obj,
  });
}

export interface DescribeSourceLocationRequest {
  /**
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;
}

export namespace DescribeSourceLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSourceLocationRequest): any => ({
    ...obj,
  });
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
   * <p>The name of the source location.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the source location.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeSourceLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSourceLocationResponse): any => ({
    ...obj,
  });
}

export interface DescribeVodSourceRequest {
  /**
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The identifier for the VOD source you are working on.</p>
   */
  VodSourceName: string | undefined;
}

export namespace DescribeVodSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVodSourceRequest): any => ({
    ...obj,
  });
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
   * <p>The ARN for the VOD source.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the source location associated with the VOD source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the VOD source.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName?: string;
}

export namespace DescribeVodSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVodSourceResponse): any => ({
    ...obj,
  });
}

export interface GetChannelPolicyRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;
}

export namespace GetChannelPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetChannelPolicyResponse {
  /**
   * <p>The IAM policy for the channel.</p>
   */
  Policy?: string;
}

export namespace GetChannelPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetChannelScheduleRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The schedule duration in minutes. The maximum duration is 4320 minutes (three days).</p>
   */
  DurationMinutes?: string;

  /**
   * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetChannelScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelScheduleRequest): any => ({
    ...obj,
  });
}

export interface GetChannelScheduleResponse {
  /**
   * <p>An array of schedule entries for the channel.</p>
   */
  Items?: ScheduleEntry[];

  /**
   * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetChannelScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelScheduleResponse): any => ({
    ...obj,
  });
}

export interface GetPlaybackConfigurationRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;
}

export namespace GetPlaybackConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlaybackConfigurationRequest): any => ({
    ...obj,
  });
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
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

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
   * <p>The tags assigned to the playback configuration.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace GetPlaybackConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlaybackConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetPrefetchScheduleRequest {
  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;
}

export namespace GetPrefetchScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPrefetchScheduleRequest): any => ({
    ...obj,
  });
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

export namespace GetPrefetchScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPrefetchScheduleResponse): any => ({
    ...obj,
  });
}

export interface ListAlertsRequest {
  /**
   * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListAlertsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlertsRequest): any => ({
    ...obj,
  });
}

export interface ListAlertsResponse {
  /**
   * <p>An array of alerts that are associated with this resource.</p>
   */
  Items?: Alert[];

  /**
   * <p>Pagination token from the list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAlertsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlertsResponse): any => ({
    ...obj,
  });
}

export interface ListChannelsRequest {
  /**
   * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

export interface ListChannelsResponse {
  /**
   * <p>An array of channels that are associated with this account.</p>
   */
  Items?: Channel[];

  /**
   * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListPlaybackConfigurationsRequest {
  /**
   * <p>Maximum number of records to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListPlaybackConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaybackConfigurationsRequest): any => ({
    ...obj,
  });
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

export namespace ListPlaybackConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaybackConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListPrefetchSchedulesRequest {
  /**
   * <p>The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If the playback configuration has more than MaxResults prefetch schedules, use the value of NextToken in the response to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) If the playback configuration has more than MaxResults prefetch schedules, use NextToken to get the second and subsequent pages of results.</p> <p>For the first ListPrefetchSchedulesRequest request, omit this value.</p> <p>For the second and subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request.</p> <p>If the previous response didn't include a NextToken element, there are no more prefetch schedules to get.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the playback configuration.</p>
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * <p>An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams.</p>
   */
  StreamId?: string;
}

export namespace ListPrefetchSchedulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrefetchSchedulesRequest): any => ({
    ...obj,
  });
}

export interface ListPrefetchSchedulesResponse {
  /**
   * <p>Lists the prefetch schedules. An empty Items list doesn't mean there aren't more items to fetch, just that that page was empty.</p>
   */
  Items?: PrefetchSchedule[];

  /**
   * <p>The value that you will use forNextToken in the next ListPrefetchSchedulesRequest request.</p>
   */
  NextToken?: string;
}

export namespace ListPrefetchSchedulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrefetchSchedulesResponse): any => ({
    ...obj,
  });
}

export interface ListSourceLocationsRequest {
  /**
   * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListSourceLocationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSourceLocationsRequest): any => ({
    ...obj,
  });
}

export interface ListSourceLocationsResponse {
  /**
   * <p>An array of source locations.</p>
   */
  Items?: SourceLocation[];

  /**
   * <p>Pagination token from the list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListSourceLocationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSourceLocationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A comma-separated list of tag key:value pairs.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListVodSourcesRequest {
  /**
   * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;
}

export namespace ListVodSourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVodSourcesRequest): any => ({
    ...obj,
  });
}

export interface ListVodSourcesResponse {
  /**
   * <p>Lists the VOD sources.</p>
   */
  Items?: VodSource[];

  /**
   * <p>Pagination token from the list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListVodSourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVodSourcesResponse): any => ({
    ...obj,
  });
}

export interface PutChannelPolicyRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>Adds an IAM role that determines the permissions of your channel.</p>
   */
  Policy: string | undefined;
}

export namespace PutChannelPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutChannelPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutChannelPolicyResponse {}

export namespace PutChannelPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutChannelPolicyResponse): any => ({
    ...obj,
  });
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
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

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
  Name?: string;

  /**
   * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
   */
  PersonalizationThresholdSeconds?: number;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags to assign to the playback configuration.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace PutPlaybackConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutPlaybackConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutPlaybackConfigurationResponse {
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
  ConfigurationAliases?: { [key: string]: { [key: string]: string } };

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
   * <p>The tags assigned to the playback configuration.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;
}

export namespace PutPlaybackConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutPlaybackConfigurationResponse): any => ({
    ...obj,
  });
}

export interface StartChannelRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;
}

export namespace StartChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChannelRequest): any => ({
    ...obj,
  });
}

export interface StartChannelResponse {}

export namespace StartChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChannelResponse): any => ({
    ...obj,
  });
}

export interface StopChannelRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;
}

export namespace StopChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopChannelRequest): any => ({
    ...obj,
  });
}

export interface StopChannelResponse {}

export namespace StopChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopChannelResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A comma-separated list of tag key:value pairs.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A comma-separated list of the tag keys to remove from the playback configuration.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateChannelRequest {
  /**
   * <p>The identifier for the channel you are working on.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the LINEAR PlaybackMode. MediaTailor doesn't support filler slate for channels using the LOOP PlaybackMode.</p>
   */
  FillerSlate?: SlateSource;

  /**
   * <p>The channel's output properties.</p>
   */
  Outputs: RequestOutputItem[] | undefined;
}

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateChannelResponse {
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
   * <p>The tags assigned to the channel.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
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
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;
}

export namespace UpdateSourceLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSourceLocationRequest): any => ({
    ...obj,
  });
}

export interface UpdateSourceLocationResponse {
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
   * <p>The name of the source location.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the source location.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateSourceLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSourceLocationResponse): any => ({
    ...obj,
  });
}

export interface UpdateVodSourceRequest {
  /**
   * <p>An array of HTTP package configurations for the VOD source on this account.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * <p>The identifier for the source location you are working on.</p>
   */
  SourceLocationName: string | undefined;

  /**
   * <p>The identifier for the VOD source you are working on.</p>
   */
  VodSourceName: string | undefined;
}

export namespace UpdateVodSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVodSourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateVodSourceResponse {
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
   * <p>The ARN for the VOD source.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the source location associated with the VOD source.</p>
   */
  SourceLocationName?: string;

  /**
   * <p>The tags assigned to the VOD source.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the VOD source.</p>
   */
  VodSourceName?: string;
}

export namespace UpdateVodSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVodSourceResponse): any => ({
    ...obj,
  });
}
