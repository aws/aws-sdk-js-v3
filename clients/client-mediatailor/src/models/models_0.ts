// smithy-typescript generated code
import type {
  AccessType,
  AdMarkupType,
  AdSequencingMode,
  AdsInteractionExcludeEventType,
  AdsInteractionPublishOptInEventType,
  AlertCategory,
  ApsRegion,
  BeaconEventType,
  ChannelState,
  ClientSideBeaconingMode,
  CompressionMethod,
  EventName,
  FillPolicy,
  FunctionType,
  InsertionMode,
  ListPrefetchScheduleType,
  LoggingStrategy,
  LogType,
  ManifestServiceExcludeEventType,
  ManifestServicePublishOptInEventType,
  MessageType,
  Method,
  MethodType,
  Mode,
  Operator,
  OriginManifestType,
  PlaybackMode,
  PrefetchScheduleType,
  PreRollAdSequencingMode,
  RelativePosition,
  RuntimeType,
  ScheduleEntryType,
  StreamingMediaFileConditioning,
  Tier,
  TrafficShapingType,
  Type,
} from "./enums";

/**
 * For `SCTE35_ENHANCED` output, defines a key and corresponding value. MediaTailor generates these pairs within the `EXT-X-ASSET`tag.
 *
 * @public
 */
export interface KeyValuePair {
  /**
   * For `SCTE35_ENHANCED` output, defines a key. MediaTailor takes this key, and its associated value, and generates the key/value pair within the `EXT-X-ASSET`tag. If you specify a key, you must also specify a corresponding value.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * For `SCTE35_ENHANCED` output, defines a value. MediaTailor; takes this value, and its associated key, and generates the key/value pair within the `EXT-X-ASSET`tag. If you specify a value, you must also specify a corresponding key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Slate VOD source configuration.
 *
 * @public
 */
export interface SlateSource {
  /**
   * The name of the source location where the slate VOD source is stored.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.
   *
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * Splice insert message configuration.
 *
 * @public
 */
export interface SpliceInsertMessage {
  /**
   * This is written to `splice_insert.avail_num`, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is `0`. Values must be between `0` and `256`, inclusive.
   *
   * @public
   */
  AvailNum?: number | undefined;

  /**
   * This is written to `splice_insert.avails_expected`, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is `0`. Values must be between `0` and `256`, inclusive.
   *
   * @public
   */
  AvailsExpected?: number | undefined;

  /**
   * This is written to `splice_insert.splice_event_id`, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is `1`.
   *
   * @public
   */
  SpliceEventId?: number | undefined;

  /**
   * This is written to `splice_insert.unique_program_id`, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is `0`. Values must be between `0` and `256`, inclusive.
   *
   * @public
   */
  UniqueProgramId?: number | undefined;
}

/**
 * The `segmentation_descriptor` message can contain advanced metadata fields, like content identifiers, to convey a wide range of information about the ad break. MediaTailor writes the ad metadata in the egress manifest as part of the `EXT-X-DATERANGE` or `EventStream` ad marker's SCTE-35 data.
 *
 * `segmentation_descriptor` messages must be sent with the `time_signal` message type.
 *
 * See the `segmentation_descriptor()` table of the 2022 SCTE-35 specification for more information.
 *
 * @public
 */
export interface SegmentationDescriptor {
  /**
   * The Event Identifier to assign to the `segmentation_descriptor.segmentation_event_id` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The default value is 1.
   *
   * @public
   */
  SegmentationEventId?: number | undefined;

  /**
   * The Upid Type to assign to the `segmentation_descriptor.segmentation_upid_type` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 14.
   *
   * @public
   */
  SegmentationUpidType?: number | undefined;

  /**
   * The Upid to assign to the `segmentation_descriptor.segmentation_upid` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The value must be a hexadecimal string containing only the characters 0 though 9 and A through F. The default value is "" (an empty string).
   *
   * @public
   */
  SegmentationUpid?: string | undefined;

  /**
   * The Type Identifier to assign to the `segmentation_descriptor.segmentation_type_id` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 48.
   *
   * @public
   */
  SegmentationTypeId?: number | undefined;

  /**
   * The segment number to assign to the `segmentation_descriptor.segment_num` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.
   *
   * @public
   */
  SegmentNum?: number | undefined;

  /**
   * The number of segments expected, which is assigned to the `segmentation_descriptor.segments_expectedS` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.
   *
   * @public
   */
  SegmentsExpected?: number | undefined;

  /**
   * The sub-segment number to assign to the `segmentation_descriptor.sub_segment_num` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The defualt value is null.
   *
   * @public
   */
  SubSegmentNum?: number | undefined;

  /**
   * The number of sub-segments expected, which is assigned to the `segmentation_descriptor.sub_segments_expected` message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is null.
   *
   * @public
   */
  SubSegmentsExpected?: number | undefined;
}

/**
 * The SCTE-35 `time_signal` message can be sent with one or more `segmentation_descriptor` messages. A `time_signal` message can be sent only if a single `segmentation_descriptor` message is sent.
 *
 * The `time_signal` message contains only the `splice_time` field which is constructed using a given presentation timestamp. When sending a `time_signal` message, the `splice_command_type` field in the `splice_info_section` message is set to 6 (0x06).
 *
 * See the `time_signal()` table of the 2022 SCTE-35 specification for more information.
 *
 * @public
 */
export interface TimeSignalMessage {
  /**
   * The configurations for the SCTE-35 `segmentation_descriptor` message(s) sent with the `time_signal` message.
   *
   * @public
   */
  SegmentationDescriptors?: SegmentationDescriptor[] | undefined;
}

/**
 * Ad break configuration parameters.
 *
 * @public
 */
export interface AdBreak {
  /**
   * The SCTE-35 ad insertion type. Accepted value: `SPLICE_INSERT`, `TIME_SIGNAL`.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * How long (in milliseconds) after the beginning of the program that an ad starts. This value must fall within 100ms of a segment boundary, otherwise the ad break will be skipped.
   *
   * @public
   */
  OffsetMillis: number | undefined;

  /**
   * Ad break slate configuration.
   *
   * @public
   */
  Slate?: SlateSource | undefined;

  /**
   * This defines the SCTE-35 `splice_insert()` message inserted around the ad. For information about using `splice_insert()`, see the SCTE-35 specficiaiton, section 9.7.3.1.
   *
   * @public
   */
  SpliceInsertMessage?: SpliceInsertMessage | undefined;

  /**
   * Defines the SCTE-35 `time_signal` message inserted around the ad.
   *
   * Programs on a channel's schedule can be configured with one or more ad breaks. You can attach a `splice_insert` SCTE-35 message to the ad break. This message provides basic metadata about the ad break.
   *
   * See section 9.7.4 of the 2022 SCTE-35 specification for more information.
   *
   * @public
   */
  TimeSignalMessage?: TimeSignalMessage | undefined;

  /**
   * Defines a list of key/value pairs that MediaTailor generates within the `EXT-X-ASSET`tag for `SCTE35_ENHANCED` output.
   *
   * @public
   */
  AdBreakMetadata?: KeyValuePair[] | undefined;
}

/**
 * Alert configuration parameters.
 *
 * @public
 */
export interface Alert {
  /**
   * The code for the alert. For example, `NOT_PROCESSED`.
   *
   * @public
   */
  AlertCode: string | undefined;

  /**
   * If an alert is generated for a resource, an explanation of the reason for the alert.
   *
   * @public
   */
  AlertMessage: string | undefined;

  /**
   * The timestamp when the alert was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Names (ARNs) related to this alert.
   *
   * @public
   */
  RelatedResourceArns: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The category that MediaTailor assigns to the alert.
   *
   * @public
   */
  Category?: AlertCategory | undefined;
}

/**
 * Clip range configuration for the VOD source associated with the program.
 *
 * @public
 */
export interface ClipRange {
  /**
   * The end offset of the clip range, in milliseconds, starting from the beginning of the VOD source associated with the program.
   *
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * The start offset of the clip range, in milliseconds. This offset truncates the start at the number of milliseconds into the duration of the VOD source.
   *
   * @public
   */
  StartOffsetMillis?: number | undefined;
}

/**
 * A playlist of media (VOD and/or live) to be played instead of the default media on a particular program.
 *
 * @public
 */
export interface AlternateMedia {
  /**
   * The name of the source location for alternateMedia.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The name of the live source for alternateMedia.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name of the VOD source for alternateMedia.
   *
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * Clip range configuration for the VOD source associated with the program.
   *
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.
   *
   * @public
   */
  ScheduledStartTimeMillis?: number | undefined;

  /**
   * Ad break configuration parameters defined in AlternateMedia.
   *
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * The duration of the alternateMedia in milliseconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;
}

/**
 * An AudienceMedia object contains an Audience and a list of AlternateMedia.
 *
 * @public
 */
export interface AudienceMedia {
  /**
   * The Audience defined in AudienceMedia.
   *
   * @public
   */
  Audience?: string | undefined;

  /**
   * The list of AlternateMedia defined in AudienceMedia.
   *
   * @public
   */
  AlternateMedia?: AlternateMedia[] | undefined;
}

/**
 * MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.
 *
 * As an example, let's say that you set `DynamicVariable` to `scte.event_id` and `Operator` to `EQUALS`, and your playback configuration has an ADS URL of `https://my.ads.server.com/path?&podId=[scte.avail_num]&event=[scte.event_id]&duration=[session.avail_duration_secs]`. And the prefetch request to the ADS contains these values `https://my.ads.server.com/path?&podId=3&event=my-awesome-event&duration=30`. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of `my-awesome-event`, since it must match the event id that MediaTailor uses to query the ADS.
 *
 * You can specify up to five `AvailMatchingCriteria`. If you specify multiple `AvailMatchingCriteria`, MediaTailor combines them to match using a logical `AND`. You can model logical `OR` combinations by creating multiple prefetch schedules.
 *
 * @public
 */
export interface AvailMatchingCriteria {
  /**
   * The dynamic variable(s) that MediaTailor should use as avail matching criteria. MediaTailor only places the prefetched ads into the avail if the avail matches the criteria defined by the dynamic variable. For information about dynamic variables, see [Using dynamic ad variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html) in the *MediaTailor User Guide*.
   *
   * You can include up to 100 dynamic variables.
   *
   * @public
   */
  DynamicVariable: string | undefined;

  /**
   * For the `DynamicVariable` specified in `AvailMatchingCriteria`, the Operator that is used for the comparison.
   *
   * @public
   */
  Operator: Operator | undefined;
}

/**
 * The log configuration for the channel.
 *
 * @public
 */
export interface LogConfigurationForChannel {
  /**
   * The log types.
   *
   * @public
   */
  LogTypes?: LogType[] | undefined;
}

/**
 * Dash manifest configuration parameters.
 *
 * @public
 */
export interface DashPlaylistSettings {
  /**
   * The total duration (in seconds) of each manifest. Minimum value: `30` seconds. Maximum value: `3600` seconds.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: `2` seconds. Maximum value: `60` seconds.
   *
   * @public
   */
  MinBufferTimeSeconds?: number | undefined;

  /**
   * Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: `2` seconds. Maximum value: `60` seconds.
   *
   * @public
   */
  MinUpdatePeriodSeconds?: number | undefined;

  /**
   * Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: `2` seconds. Maximum value: `60` seconds.
   *
   * @public
   */
  SuggestedPresentationDelaySeconds?: number | undefined;
}

/**
 * HLS playlist configuration parameters.
 *
 * @public
 */
export interface HlsPlaylistSettings {
  /**
   * The total duration (in seconds) of each manifest. Minimum value: `30` seconds. Maximum value: `3600` seconds.
   *
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * Determines the type of SCTE 35 tags to use in ad markup. Specify `DATERANGE` to use `DATERANGE` tags (for live or VOD content). Specify `SCTE35_ENHANCED` to use `EXT-X-CUE-OUT` and `EXT-X-CUE-IN` tags (for VOD content only).
   *
   * @public
   */
  AdMarkupType?: AdMarkupType[] | undefined;
}

/**
 * The output item response.
 *
 * @public
 */
export interface ResponseOutputItem {
  /**
   * DASH manifest configuration settings.
   *
   * @public
   */
  DashPlaylistSettings?: DashPlaylistSettings | undefined;

  /**
   * HLS manifest configuration settings.
   *
   * @public
   */
  HlsPlaylistSettings?: HlsPlaylistSettings | undefined;

  /**
   * The name of the manifest for the channel that will appear in the channel output's playback URL.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * The URL that your player uses for playback.
   *
   * @public
   */
  PlaybackUrl: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) URL that your player uses for playback.
   *
   * @public
   */
  DualStackPlaybackUrl?: string | undefined;

  /**
   * A string used to associate a package configuration source group with a channel output.
   *
   * @public
   */
  SourceGroup: string | undefined;
}

/**
 * The configuration parameters for a channel. For information about MediaTailor channels, see [Working with channels](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface Channel {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * Returns the state whether the channel is running or not.
   *
   * @public
   */
  ChannelState: string | undefined;

  /**
   * The timestamp of when the channel was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the `LINEAR` `PlaybackMode`. MediaTailor doesn't support filler slate for channels using the `LOOP` `PlaybackMode`.
   *
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * The timestamp of when the channel was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The channel's output properties.
   *
   * @public
   */
  Outputs: ResponseOutputItem[] | undefined;

  /**
   * The type of playback mode for this channel.
   *
   * `LINEAR` - Programs play back-to-back only once.
   *
   * `LOOP` - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.
   *
   * @public
   */
  PlaybackMode: string | undefined;

  /**
   * The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The tier for this channel. STANDARD tier channels can contain live programs.
   *
   * @public
   */
  Tier: string | undefined;

  /**
   * The log configuration.
   *
   * @public
   */
  LogConfiguration: LogConfigurationForChannel | undefined;

  /**
   * The list of audiences defined in channel.
   *
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * A reference to a child function within a `SEQUENTIAL_EXECUTOR` function.
 *
 * @public
 */
export interface FunctionRef {
  /**
   * An optional expression that evaluates to a boolean. MediaTailor evaluates this expression immediately before running the step, using the accumulated state at that point in the sequence. If the expression evaluates to `false`, MediaTailor skips the step and moves to the next one. If omitted, the step always runs.
   *
   * @public
   */
  RunCondition?: string | undefined;

  /**
   * The identifier of the child function to execute in this step.
   *
   * @public
   */
  FunctionId?: string | undefined;

  /**
   * An optional alternate name for the function within the executor. If omitted, MediaTailor uses the function identifier.
   *
   * @public
   */
  Alias?: string | undefined;
}

/**
 * The optional response-caching configuration shared by the HTTP-based function types (`HTTP_REQUEST`, `AWS_SERVICE_REQUEST`, and `VAST_REQUEST`). When you provide this configuration, MediaTailor caches the function's responses that have one of the following HTTP status codes: `200`, `203`, `204`, `404`, `405`, `410`, `414`, and `501`. For a cacheable response, MediaTailor caches it for the number of seconds given by the response's `Cache-Control` `max-age` directive, limited to the range between `TtlMinimumSeconds` and `TtlMaximumSeconds`. If the response has no `Cache-Control` `max-age` directive, MediaTailor caches it for `TtlMinimumSeconds` seconds. Cached HTTP responses are scoped per playback configuration, not per function.
 *
 * @public
 */
export interface HttpRequestCacheConfiguration {
  /**
   * The lower bound, in seconds, on how long MediaTailor caches a response. MediaTailor also uses this value as the cache duration when a response has no `Cache-Control` `max-age` directive.
   *
   * @public
   */
  TtlMinimumSeconds: number | undefined;

  /**
   * The upper bound, in seconds, on how long MediaTailor caches a response. This value must be greater than or equal to `TtlMinimumSeconds`.
   *
   * @public
   */
  TtlMaximumSeconds: number | undefined;

  /**
   * A JSONata expression that MediaTailor evaluates to a custom cache key. By default, the cache key is a hash of the HTTP URL, the request body, and the HTTP method; request headers are not included. You can specify a custom cache key expression to vary caching by request headers and more. The evaluated key must be smaller than 1 KB; otherwise the HTTP function will fail.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * The configuration for an `AWS_SERVICE_REQUEST` function. Contains the target service, target Region, and request parameters that the function uses to call an AWS service API. For more information, see [AWS_SERVICE_REQUEST](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-aws-service-request.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface AwsServiceRequestConfiguration {
  /**
   * The expression language used to evaluate expressions in the function configuration. The only supported value is `JSONata`.
   *
   * @public
   */
  Runtime: RuntimeType | undefined;

  /**
   * A map of output bindings. Each key is a namespaced output path, such as `player_params.device_type`. Each value is an expression that MediaTailor evaluates at runtime and can reference the `response` object from the target service. For more information, see [JSONata expression reference](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  Output?: Record<string, string> | undefined;

  /**
   * Specifies how the function sends the request to the target service. The value must match what the target service operation requires. Valid values:
   *
   * - `GET` – Retrieves data from the target service.
   * - `POST` – Submits a request body to the target service.
   *
   * @public
   */
  MethodType: MethodType | undefined;

  /**
   * The maximum time, in milliseconds, that MediaTailor waits for a response from the AWS service. If the call exceeds this timeout, MediaTailor sets the response status code to `null` and proceeds with output expression evaluation. Valid values: `100` to `2000`.
   *
   * @public
   */
  RequestTimeoutMilliseconds: number | undefined;

  /**
   * An expression that evaluates to the endpoint URL for the target AWS service API operation. Use `\{%...%\}` delimiters for dynamic expressions. The URL must correspond to a valid endpoint for the service specified in `TargetService`. The maximum length after evaluation is 2,048 characters.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * An expression that evaluates to the request body for the AWS service API call. The body must conform to the input format that the target service operation expects. Applies only when the target operation accepts a request body. The maximum size after evaluation is 64 KB.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * A map of HTTP header names to expression values. MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request to the AWS service. Use this to pass any headers required by the target service operation. You can include a maximum of 50 headers.
   *
   * @public
   */
  Headers?: Record<string, string> | undefined;

  /**
   * The optional response-caching configuration for the function. When present, MediaTailor caches the responses that the function receives from the AWS service, within the time-to-live (TTL) bounds that you specify. Omit this configuration to disable response caching.
   *
   * @public
   */
  Cache?: HttpRequestCacheConfiguration | undefined;

  /**
   * The AWS service to call. Valid value: `elemental-inference` (AWS Elemental Inference).
   *
   * @public
   */
  TargetService: string | undefined;

  /**
   * The AWS Region for the target service. Specify a static Region code (for example, `us-east-1`) or a JSONata expression that resolves to a Region code at runtime (for example, `\{%inference.region%\}`).
   *
   * @public
   */
  TargetRegion: string | undefined;
}

/**
 * The configuration for a `CONCURRENT_EXECUTOR` function. A `CONCURRENT_EXECUTOR` runs a set of child functions in parallel, up to a maximum concurrency, and combines their output when all functions complete. For more information about functions, see [Working with functions](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface ConcurrentExecutorConfiguration {
  /**
   * The expression language used to evaluate expressions in the function configuration. Set this to `JSONata`.
   *
   * @public
   */
  Runtime: RuntimeType | undefined;

  /**
   * A map of output bindings that controls which bindings the executor commits to the session state after all child functions complete. Each key is a namespaced output path, and each value is an expression that MediaTailor evaluates against the combined results of the child functions.
   *
   * @public
   */
  Output: Record<string, string> | undefined;

  /**
   * The list of child functions that MediaTailor runs in parallel. Each entry specifies a child function to execute and an optional run condition expression that controls whether the function runs.
   *
   * @public
   */
  FunctionList: FunctionRef[] | undefined;

  /**
   * The maximum time, in milliseconds, for all child functions to complete. This timeout covers every function in the list, including any HTTP calls the child functions make. If the executor exceeds this timeout, MediaTailor discards all output from the executor and proceeds with default behavior.
   *
   * @public
   */
  TimeoutMilliseconds: number | undefined;

  /**
   * The maximum number of child functions that MediaTailor runs simultaneously. When the list contains more functions than `MaxConcurrency`, MediaTailor starts additional functions as running ones complete, so that no more than `MaxConcurrency` functions run at the same time.
   *
   * @public
   */
  MaxConcurrency: number | undefined;
}

/**
 * The configuration for a `CUSTOM_OUTPUT` function. MediaTailor evaluates the output expressions against the current session state and commits the results as output bindings. `CUSTOM_OUTPUT` functions do not make external calls. For more information, see [CUSTOM_OUTPUT](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-custom-output.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface CustomOutputConfiguration {
  /**
   * The expression language used to evaluate expressions in the function configuration. Set this to `JSONata`.
   *
   * @public
   */
  Runtime: RuntimeType | undefined;

  /**
   * A map of output bindings. Each key is a namespaced output path (such as `player_params.device_type` or `temp.variant`), and each value is an expression that MediaTailor evaluates at runtime against the current session state. For more information about expression syntax, see [JSONata expression reference](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  Output?: Record<string, string> | undefined;
}

/**
 * The configuration for an `HTTP_REQUEST` function. Specifies the HTTP method, URL, headers, body, timeout, and output expressions for the request. For more information, see [HTTP_REQUEST](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-http-request.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface HttpRequestConfiguration {
  /**
   * The expression language used to evaluate expressions in the function configuration. Set this to `JSONata`.
   *
   * @public
   */
  Runtime: RuntimeType | undefined;

  /**
   * A map of output bindings. Each key is a namespaced output path (such as `player_params.device_type` or `temp.identity`), and each value is an expression that MediaTailor evaluates at runtime. Output expressions in an `HTTP_REQUEST` function can reference the `response` object returned by the HTTP call. For more information about expression syntax, see [JSONata expression reference](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  Output?: Record<string, string> | undefined;

  /**
   * The HTTP method for the request. Valid values: `GET` and `POST`.
   *
   * @public
   */
  MethodType: MethodType | undefined;

  /**
   * The maximum time, in milliseconds, that MediaTailor waits for a response from the external service. If the call exceeds this timeout, MediaTailor sets the response status code to `null` and proceeds with output expression evaluation. Valid values: `100` to `2000`.
   *
   * @public
   */
  RequestTimeoutMilliseconds: number | undefined;

  /**
   * An expression that evaluates to the request URL. Use `\{%...%\}` delimiters for dynamic expressions. The maximum length after evaluation is 2,048 characters.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * An expression that evaluates to the request body. Used with `POST` requests. The maximum size after evaluation is 64 KB.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * A map of HTTP header names to expression values. MediaTailor evaluates each header value expression at runtime and includes the result in the outbound HTTP request. Maximum 50 headers.
   *
   * @public
   */
  Headers?: Record<string, string> | undefined;

  /**
   * The optional response-caching configuration for the function. When present, MediaTailor caches the responses that the function receives from the HTTP endpoint, within the time-to-live (TTL) bounds that you specify. Omit this configuration to disable response caching.
   *
   * @public
   */
  Cache?: HttpRequestCacheConfiguration | undefined;
}

/**
 * The configuration for a `SEQUENTIAL_EXECUTOR` function. A `SEQUENTIAL_EXECUTOR` runs a sequence of child functions in order, passing data between steps through temporary data. For more information, see [SEQUENTIAL_EXECUTOR](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-sequential-executor.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface SequentialExecutorConfiguration {
  /**
   * The expression language used to evaluate expressions in the function configuration. Set this to `JSONata`.
   *
   * @public
   */
  Runtime: RuntimeType | undefined;

  /**
   * An optional map of output bindings that controls which bindings the sequence commits to the session state after all steps complete. If omitted, MediaTailor commits all accumulated output bindings from all child steps.
   *
   * @public
   */
  Output?: Record<string, string> | undefined;

  /**
   * An ordered list of 1 to 10 steps. Each step specifies a child function to execute and an optional run condition expression that controls whether the step runs. MediaTailor executes steps in order, passing data between steps through temporary data.
   *
   * @public
   */
  FunctionList: FunctionRef[] | undefined;

  /**
   * The maximum time, in milliseconds, for the entire sequence to complete. This timeout covers all steps, including any HTTP calls made by child functions. If the sequence exceeds this timeout, MediaTailor discards all output from the sequence and proceeds with default behavior.
   *
   * @public
   */
  TimeoutMilliseconds: number | undefined;
}

/**
 * The configuration for a `VAST_REQUEST` function. Specifies the HTTP method, URL, headers, body, timeout, and output expressions for a request to a VAST endpoint. MediaTailor parses the response as VAST and resolves wrapper redirects, then makes the parsed ads available to the function's output expressions. For more information, see [Function types and composition](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface VastRequestConfiguration {
  /**
   * The expression language used to evaluate expressions in the function configuration. Set this to `JSONata`.
   *
   * @public
   */
  Runtime: RuntimeType | undefined;

  /**
   * A map of output bindings. Each key is a namespaced output path (such as `temp.wrappedAds`), and each value is an expression that MediaTailor evaluates at runtime. Output expressions in a `VAST_REQUEST` function can reference the `response` object, which exposes `response.parsedAds` — the ads parsed from the VAST response after schema validation and wrapper resolution — and `response.statusCode`. For more information about expression syntax, see [JSONata expression reference](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  Output?: Record<string, string> | undefined;

  /**
   * The HTTP method for the request to the VAST endpoint. Valid values: `GET` and `POST`. Use `POST` to send a bid request body, such as an OpenRTB payload.
   *
   * @public
   */
  MethodType: MethodType | undefined;

  /**
   * The maximum time, in milliseconds, that MediaTailor waits for a response from the VAST endpoint. The timeout covers the entire response, including any wrapper redirects that MediaTailor follows. If the call exceeds this timeout, MediaTailor proceeds with an empty ad list and continues output expression evaluation. Valid values: `100` to `2000`.
   *
   * @public
   */
  RequestTimeoutMilliseconds: number | undefined;

  /**
   * An expression that evaluates to the VAST endpoint URL. Use `\{%...%\}` delimiters for dynamic expressions. A literal value must be an `https://` URL. The expression can be up to 25,000 characters, and the URL after evaluation can be up to 2,048 characters.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * An expression that evaluates to the request body, for example to send an OpenRTB bid request. The expression can be up to 100,000 characters, and the body after evaluation can be up to 64 KB.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * A map of HTTP header names to expression values. MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request. Headers beginning with `X-Amz-` are reserved by the service, and method override headers are not allowed.
   *
   * @public
   */
  Headers?: Record<string, string> | undefined;

  /**
   * The optional response-caching configuration for the function. When present, MediaTailor caches the responses that the function receives from the HTTP endpoint, within the time-to-live (TTL) bounds that you specify. Omit this configuration to disable response caching.
   *
   * @public
   */
  Cache?: HttpRequestCacheConfiguration | undefined;
}

/**
 * Defines reusable logic that MediaTailor executes at lifecycle hooks during ad insertion. The `FunctionType` determines the function's runtime behavior. For more information about functions, see [Working with functions](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface Function {
  /**
   * The identifier of the function.
   *
   * @public
   */
  FunctionId: string | undefined;

  /**
   * The type of the function.
   *
   * @public
   */
  FunctionType: FunctionType | undefined;

  /**
   * A description of the function.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for an `HTTP_REQUEST` function.
   *
   * @public
   */
  HttpRequestConfiguration?: HttpRequestConfiguration | undefined;

  /**
   * The configuration for an `AWS_SERVICE_REQUEST` function. Specifies the target service, target Region, and request parameters.
   *
   * @public
   */
  AwsServiceRequestConfiguration?: AwsServiceRequestConfiguration | undefined;

  /**
   * The configuration for a `CUSTOM_OUTPUT` function.
   *
   * @public
   */
  CustomOutputConfiguration?: CustomOutputConfiguration | undefined;

  /**
   * The configuration for a `CONCURRENT_EXECUTOR` function.
   *
   * @public
   */
  ConcurrentExecutorConfiguration?: ConcurrentExecutorConfiguration | undefined;

  /**
   * The configuration for a `SEQUENTIAL_EXECUTOR` function.
   *
   * @public
   */
  SequentialExecutorConfiguration?: SequentialExecutorConfiguration | undefined;

  /**
   * The configuration for a `VAST_REQUEST` function.
   *
   * @public
   */
  VastRequestConfiguration?: VastRequestConfiguration | undefined;

  /**
   * The tags assigned to the function. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The HTTP package configuration properties for the requested VOD source.
 *
 * @public
 */
export interface HttpPackageConfiguration {
  /**
   * The relative path to the URL for this VOD source. This is combined with `SourceLocation::HttpConfiguration::BaseUrl` to form a valid URL.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The name of the source group. This has to match one of the `Channel::Outputs::SourceGroup`.
   *
   * @public
   */
  SourceGroup: string | undefined;

  /**
   * The streaming protocol for this package configuration. Supported values are `HLS` and `DASH`.
   *
   * @public
   */
  Type: Type | undefined;
}

/**
 * Live source configuration parameters.
 *
 * @public
 */
export interface LiveSource {
  /**
   * The ARN for the live source.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp that indicates when the live source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The HTTP package configurations for the live source.
   *
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * The timestamp that indicates when the live source was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name that's used to refer to a live source.
   *
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns.
 *
 * @public
 */
export interface AdConditioningConfiguration {
  /**
   * For ads that have media files with streaming delivery and supported file extensions, indicates what transcoding action MediaTailor takes when it first receives these ads from the ADS. `TRANSCODE` indicates that MediaTailor must transcode the ads. `NONE` indicates that you have already transcoded the ads outside of MediaTailor and don't need them transcoded as part of the ad insertion workflow. For more information about ad conditioning see [Using preconditioned ads](https://docs.aws.amazon.com/mediatailor/latest/ug/precondition-ads.html) in the Elemental MediaTailor user guide.
   *
   * @public
   */
  StreamingMediaFileConditioning: StreamingMediaFileConditioning | undefined;
}

/**
 * HTTP request configuration parameters that define how MediaTailor communicates with the ad decision server.
 *
 * @public
 */
export interface HttpRequest {
  /**
   * The HTTP method to use when making requests to the ad decision server. Supported values are `GET` and `POST`.
   *
   * @public
   */
  Method?: Method | undefined;

  /**
   * The request body content to send with HTTP requests to the ad decision server. This value is only eligible for `POST` requests.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * Custom HTTP headers to include in requests to the ad decision server. Specify headers as key-value pairs. This value is only eligible for `POST` requests.
   *
   * @public
   */
  Headers?: Record<string, string> | undefined;

  /**
   * The compression method to apply to requests sent to the ad decision server. Supported values are `NONE` and `GZIP`. This value is only eligible for `POST` requests.
   *
   * @public
   */
  CompressRequest?: CompressionMethod | undefined;
}

/**
 * The settings that control how MediaTailor processes VAST responses from the ad decision server.
 *
 * @public
 */
export interface VastResponse {
  /**
   * The ad sequencing mode that controls how MediaTailor handles sequenced and standalone ads in VAST responses. `FOLLOW_AD_SEQUENCE` inserts sequenced ads in increasing order for both live and VOD workflows, using standalone ads only as replacements when a sequenced ad fails. `FOLLOW_AD_SEQUENCE_ONLY_LIVE` enables ad sequencing for live workflows only. `FOLLOW_AD_SEQUENCE_ONLY_VOD` enables ad sequencing for VOD workflows only. `IGNORE_AD_SEQUENCE` inserts ads in the order they appear in the VAST response, regardless of sequence attributes. The default behavior is `IGNORE_AD_SEQUENCE`.
   *
   * @public
   */
  AdSequencingMode?: AdSequencingMode | undefined;
}

/**
 * Configuration parameters for customizing HTTP requests sent to the ad decision server (ADS). This allows you to specify the HTTP method, headers, request body, and compression settings for ADS requests.
 *
 * @public
 */
export interface AdDecisionServerConfiguration {
  /**
   * The HTTP request configuration parameters for the ad decision server.
   *
   * @public
   */
  HttpRequest?: HttpRequest | undefined;

  /**
   * The settings that control how MediaTailor processes VAST responses from the ad decision server.
   *
   * @public
   */
  VastResponse?: VastResponse | undefined;
}

/**
 * The concurrency settings for ad decision server interactions during ad personalization.
 *
 * @public
 */
export interface AdsPersonalizationConcurrency {
  /**
   * The maximum number of simultaneous requests that MediaTailor makes to the ad decision server per manifest request. The default is 1.
   *
   * @public
   */
  MaxConcurrentAdsRequests?: number | undefined;

  /**
   * Enables parallel processing of ad decision server requests in VOD workflows when the ADS returns VAST responses. The default is false.
   *
   * @public
   */
  EnableVodVastParallelization?: boolean | undefined;
}

/**
 * The timeout settings for ad decision server interactions during ad personalization.
 *
 * @public
 */
export interface AdsPersonalizationTimeouts {
  /**
   * The maximum time, in milliseconds, that MediaTailor waits for a single ad decision server response during live or VOD playback. The default is 3000.
   *
   * @public
   */
  AdsRequestTimeoutMilliseconds?: number | undefined;

  /**
   * The maximum total time, in milliseconds, that MediaTailor spends on ad decision server activity for live manifests, including making requests, waiting for responses, and following VAST wrapper redirects. The default is 10000.
   *
   * @public
   */
  LiveMaximumAdsPersonalizationTimeMilliseconds?: number | undefined;

  /**
   * The maximum total time, in milliseconds, that MediaTailor spends on ad decision server activity for VOD manifests, including making requests, waiting for responses, and following VAST wrapper redirects. The default is 10000.
   *
   * @public
   */
  VodMaximumAdsPersonalizationTimeMilliseconds?: number | undefined;

  /**
   * The maximum time, in milliseconds, that MediaTailor waits for a single ad decision server response during prefetch retrieval. If not set, the value of AdsRequestTimeoutMilliseconds is used.
   *
   * @public
   */
  PrefetchAdsRequestTimeoutMilliseconds?: number | undefined;

  /**
   * The maximum total time, in milliseconds, that MediaTailor spends on ad decision server activity during prefetch retrieval, including making requests, waiting for responses, and following VAST wrapper redirects.
   *
   * @public
   */
  PrefetchMaximumAdsPersonalizationTimeMilliseconds?: number | undefined;
}

/**
 * The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see [Ad Suppression](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
 *
 * @public
 */
export interface AvailSuppression {
  /**
   * Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to `BEHIND_LIVE_EDGE`, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window. When Mode is set to `AFTER_LIVE_EDGE`, ad suppression is active and MediaTailor won't fill ad breaks that are within the live edge plus the avail suppression value.
   *
   * @public
   */
  Mode?: Mode | undefined;

  /**
   * A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Defines the policy to apply to the avail suppression mode. `BEHIND_LIVE_EDGE` will always use the full avail suppression policy. `AFTER_LIVE_EDGE` mode can be used to invoke partial ad break fills when a session starts mid-break.
   *
   * @public
   */
  FillPolicy?: FillPolicy | undefined;
}

/**
 * The beaconing settings that apply to client-side reporting sessions: whether MediaTailor includes its beacons in the ad tracking response, and which player operation events it reports on.
 *
 * @public
 */
export interface ClientSideBeaconingConfiguration {
  /**
   * Specifies whether MediaTailor includes its beacons in the ad tracking response. Valid values, which are case-sensitive:
   *
   * - `INSIGHTS` – MediaTailor includes its beacons in the ad tracking response.
   * - `DISABLED` – MediaTailor doesn't include its beacons in the ad tracking response.
   *
   * If you send a `ClientSide` object, this setting is required. If you omit `BeaconingConfiguration` or `ClientSide` entirely, MediaTailor uses `INSIGHTS`.
   *
   * `PutPlaybackConfiguration` replaces the whole playback configuration. To keep beaconing off, include `DISABLED` in every subsequent write.
   *
   * @public
   */
  ReportingMode: ClientSideBeaconingMode | undefined;

  /**
   * The player operation events to report on, in addition to the ad progress events that MediaTailor always reports on. The default is an empty list. This parameter is valid only when `ReportingMode` is `INSIGHTS`. MediaTailor rejects the request if you specify a value while `ReportingMode` is `DISABLED`, or if you specify duplicate values.
   *
   * @public
   */
  AdditionalEventTypes?: BeaconEventType[] | undefined;
}

/**
 * The beaconing configuration for a playback configuration. Beaconing controls whether MediaTailor includes its own beacons in the ad tracking response, in addition to the ad server beacons.
 *
 * @public
 */
export interface BeaconingConfiguration {
  /**
   * The beaconing settings for client-side reporting sessions. If you omit this object, MediaTailor uses `INSIGHTS` reporting mode.
   *
   * @public
   */
  ClientSide?: ClientSideBeaconingConfiguration | undefined;
}

/**
 * The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see [Bumpers](https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).
 *
 * @public
 */
export interface Bumper {
  /**
   * The URL for the end bumper asset.
   *
   * @public
   */
  EndUrl?: string | undefined;

  /**
   * The URL for the start bumper asset.
   *
   * @public
   */
  StartUrl?: string | undefined;
}

/**
 * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
 *
 * @public
 */
export interface CdnConfiguration {
  /**
   * A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.*&lt;region&gt;*.amazonaws.com. Then specify the rule's name in this `AdSegmentUrlPrefix`. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.
   *
   * @public
   */
  AdSegmentUrlPrefix?: string | undefined;

  /**
   * A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this `ContentSegmentUrlPrefix`. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.
   *
   * @public
   */
  ContentSegmentUrlPrefix?: string | undefined;
}

/**
 * The configuration for DASH content.
 *
 * @public
 */
export interface DashConfiguration {
  /**
   * The URL that MediaTailor generates to initiate a playback session. The session uses server-side reporting.
   *
   * @public
   */
  ManifestEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) URL that MediaTailor generates to initiate a playback session. The session uses server-side reporting.
   *
   * @public
   */
  DualStackManifestEndpointPrefix?: string | undefined;

  /**
   * The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are `DISABLED` and `EMT_DEFAULT`. The `EMT_DEFAULT` setting enables the inclusion of the tag and is the default value.
   *
   * @public
   */
  MpdLocation?: string | undefined;

  /**
   * The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to `SINGLE_PERIOD`. The default setting is `MULTI_PERIOD`. For multi-period manifests, omit this setting or set it to `MULTI_PERIOD`.
   *
   * @public
   */
  OriginManifestType?: OriginManifestType | undefined;
}

/**
 * The configuration for HLS content.
 *
 * @public
 */
export interface HlsConfiguration {
  /**
   * The URL that MediaTailor generates to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.
   *
   * @public
   */
  ManifestEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) URL that MediaTailor generates to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.
   *
   * @public
   */
  DualStackManifestEndpointPrefix?: string | undefined;
}

/**
 * The settings that control how MediaTailor processes VAST responses from the ad decision server for live pre-roll ad breaks.
 *
 * @public
 */
export interface PreRollVastResponse {
  /**
   * The ad sequencing mode for live pre-roll ads. `FOLLOW_AD_SEQUENCE` inserts sequenced ads in increasing order and uses standalone ads only as replacements when a sequenced ad fails. `IGNORE_AD_SEQUENCE` inserts ads in the order they appear in the VAST response, regardless of sequence attributes. The default behavior is `IGNORE_AD_SEQUENCE`.
   *
   * @public
   */
  AdSequencingMode?: PreRollAdSequencingMode | undefined;
}

/**
 * The ad decision server configuration for live pre-roll ads. It contains settings that control how MediaTailor processes VAST responses for pre-roll ad breaks.
 *
 * @public
 */
export interface PreRollAdDecisionServerConfiguration {
  /**
   * The settings that control how MediaTailor processes VAST responses for live pre-roll ad breaks.
   *
   * @public
   */
  VastResponse?: PreRollVastResponse | undefined;
}

/**
 * The configuration for pre-roll ad insertion.
 *
 * @public
 */
export interface LivePreRollConfiguration {
  /**
   * The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
   *
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.
   *
   * @public
   */
  MaxDurationSeconds?: number | undefined;

  /**
   * The configuration for the ad decision server (ADS) for live pre-roll ads. The configuration contains settings that control how MediaTailor processes VAST responses for pre-roll ad breaks.
   *
   * @public
   */
  AdDecisionServerConfiguration?: PreRollAdDecisionServerConfiguration | undefined;
}

/**
 * Settings for customizing what events are included in logs for interactions with the ad decision server (ADS).
 *
 * For more information about ADS logs, inlcuding descriptions of the event types, see [MediaTailor ADS logs description and event types](https://docs.aws.amazon.com/mediatailor/latest/ug/ads-log-format.html) in Elemental MediaTailor User Guide.
 *
 * @public
 */
export interface AdsInteractionLog {
  /**
   * Indicates that MediaTailor will emit the selected events in the logs for playback sessions that are initialized with this configuration. These events are not emitted by default and must be explicitly opted in. For descriptions of each event type, see [MediaTailor ADS logs description and event types](https://docs.aws.amazon.com/mediatailor/latest/ug/ads-log-format.html) in Elemental MediaTailor User Guide.
   *
   * @public
   */
  PublishOptInEventTypes?: AdsInteractionPublishOptInEventType[] | undefined;

  /**
   * Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration.
   *
   * @public
   */
  ExcludeEventTypes?: AdsInteractionExcludeEventType[] | undefined;
}

/**
 * Settings for customizing what events are included in logs for interactions with the origin server.
 *
 * For more information about manifest service logs, including descriptions of the event types, see [MediaTailor manifest logs description and event types](https://docs.aws.amazon.com/mediatailor/latest/ug/log-types.html) in Elemental MediaTailor User Guide.
 *
 * @public
 */
export interface ManifestServiceInteractionLog {
  /**
   * Indicates that MediaTailor will emit the selected events in the logs for playback sessions that are initialized with this configuration. These events are not emitted by default and must be explicitly opted in.
   *
   * @public
   */
  PublishOptInEventTypes?: ManifestServicePublishOptInEventType[] | undefined;

  /**
   * Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration.
   *
   * @public
   */
  ExcludeEventTypes?: ManifestServiceExcludeEventType[] | undefined;
}

/**
 * Defines where AWS Elemental MediaTailor sends logs for the playback configuration.
 *
 * @public
 */
export interface LogConfiguration {
  /**
   * The percentage of session logs that MediaTailor sends to your configured log destination. For example, if your playback configuration has 1000 sessions and `percentEnabled` is set to `60`, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the [debug log mode](https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html).
   *
   * Valid values: `0` - `100`
   *
   * @public
   */
  PercentEnabled: number | undefined;

  /**
   * The method used for collecting logs from AWS Elemental MediaTailor. `LEGACY_CLOUDWATCH` indicates that MediaTailor is sending logs directly to Amazon CloudWatch Logs. `VENDED_LOGS` indicates that MediaTailor is sending logs to CloudWatch, which then vends the logs to your destination of choice. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream.
   *
   * @public
   */
  EnabledLoggingStrategies: LoggingStrategy[] | undefined;

  /**
   * Settings for customizing what events are included in logs for interactions with the ad decision server (ADS).
   *
   * @public
   */
  AdsInteractionLog?: AdsInteractionLog | undefined;

  /**
   * Settings for customizing what events are included in logs for interactions with the origin server.
   *
   * @public
   */
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog | undefined;
}

/**
 * For HLS, when set to `true`, MediaTailor passes through `EXT-X-CUE-IN`, `EXT-X-CUE-OUT`, and `EXT-X-SPLICEPOINT-SCTE35` ad markers from the origin manifest to the MediaTailor personalized manifest.
 *
 * No logic is applied to these ad markers. For example, if `EXT-X-CUE-OUT` has a value of `60`, but no ads are filled for that ad break, MediaTailor will not set the value to `0`.
 *
 * @public
 */
export interface AdMarkerPassthrough {
  /**
   * Enables ad marker passthrough for your configuration.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
 *
 * @public
 */
export interface ManifestProcessingRules {
  /**
   * For HLS, when set to `true`, MediaTailor passes through `EXT-X-CUE-IN`, `EXT-X-CUE-OUT`, and `EXT-X-SPLICEPOINT-SCTE35` ad markers from the origin manifest to the MediaTailor personalized manifest.
   *
   * No logic is applied to these ad markers. For example, if `EXT-X-CUE-OUT` has a value of `60`, but no ads are filled for that ad break, MediaTailor will not set the value to `0`.
   *
   * @public
   */
  AdMarkerPassthrough?: AdMarkerPassthrough | undefined;
}

/**
 * Configuration for Yield Optimization, which fills unsold ad inventory in ad breaks with programmatic ads from Amazon Publisher Services (APS).
 *
 * @public
 */
export interface YieldOptimizationConfiguration {
  /**
   * The minimum unfilled duration, in seconds, that must remain in an ad break before MediaTailor requests additional ads from Amazon Publisher Services (APS). For example, if set to 6 seconds, yield optimization triggers only when at least 6 seconds of unfilled time remains after the primary ad server response.
   *
   * @public
   */
  MinimumUnfilledDuration: number | undefined;

  /**
   * Publisher ID for an existing Amazon Publisher Services configuration. This ID must be obtained by registering with APS prior to using the Yield Optimization feature. The Publisher ID identifies your account in the APS system and is required for all bid requests.
   *
   * @public
   */
  PublisherId: string | undefined;

  /**
   * The Amazon Publisher Services (APS) region that MediaTailor sends bid requests to. Choose the region closest to your primary audience, because the selection affects both latency and the ad inventory available to you. This setting applies to the entire playback configuration, not to individual viewers. If you serve traffic across multiple regions, create a separate playback configuration for each APS region.
   *
   * @public
   */
  Region: ApsRegion | undefined;

  /**
   * The OpenRTB bid request template, in JSON, that MediaTailor sends to Amazon Publisher Services (APS). The template must include an `imp` array with one impression specifying `bidfloor`, an `app` object specifying `bundle` and `storeurl`, and a `device` object specifying `ua` and `ip`. Use double curly braces (for example, `\{\{player_params.user_agent\}\}`) to insert session variables and player parameters.
   *
   * @public
   */
  OpenRtbTemplate: string | undefined;
}

/**
 * A playback configuration. For information about MediaTailor configurations, see [Working with configurations in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html).
 *
 * @public
 */
export interface PlaybackConfiguration {
  /**
   * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
   *
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see [Ad Suppression](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see [Bumpers](https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).
   *
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
   *
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * The player parameters and aliases used as dynamic variables during session initialization. For more information, see [Domain Variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html).
   *
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * The configuration for a DASH source.
   *
   * @public
   */
  DashConfiguration?: DashConfiguration | undefined;

  /**
   * The configuration for HLS content.
   *
   * @public
   */
  HlsConfiguration?: HlsConfiguration | undefined;

  /**
   * The setting that controls whether players can use stitched or guided ad insertion. The default, `STITCHED_ONLY`, forces all player sessions to use stitched (server-side) ad insertion. Choosing `PLAYER_SELECT` allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.
   *
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * The configuration for pre-roll ad insertion.
   *
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * Defines where AWS Elemental MediaTailor sends logs for the playback configuration.
   *
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
   *
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * The identifier for the playback configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to *ad replacement* in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see [Ad Behavior in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the playback configuration.
   *
   * @public
   */
  PlaybackConfigurationArn?: string | undefined;

  /**
   * The URL that your player accesses to get a manifest from AWS Elemental MediaTailor.
   *
   * @public
   */
  PlaybackEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) URL that your player accesses to get a manifest from AWS Elemental MediaTailor.
   *
   * @public
   */
  DualStackPlaybackEndpointPrefix?: string | undefined;

  /**
   * The URL that your player uses to initialize a session that uses client-side reporting.
   *
   * @public
   */
  SessionInitializationEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) URL that your player uses to initialize a session that uses client-side reporting.
   *
   * @public
   */
  DualStackSessionInitializationEndpointPrefix?: string | undefined;

  /**
   * The URL for a video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.
   *
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
   *
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.
   *
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads.
   *
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;

  /**
   * Configuration parameters for customizing HTTP requests sent to the ad decision server (ADS). This allows you to specify the HTTP method, headers, request body, and compression settings for ADS requests.
   *
   * @public
   */
  AdDecisionServerConfiguration?: AdDecisionServerConfiguration | undefined;

  /**
   * Configuration for Yield Optimization, which fills unsold ad inventory in ad breaks with programmatic ads from Amazon Publisher Services (APS).
   *
   * @public
   */
  YieldOptimizationConfiguration?: YieldOptimizationConfiguration | undefined;

  /**
   * A map of lifecycle hook event names to function identifiers. The function mapping specifies which function MediaTailor executes at each lifecycle hook during ad insertion. Valid keys are `PRE_SESSION_INITIALIZATION`, `PRE_ADS_REQUEST`, `POST_ADS_RESPONSE`, and `PRE_MANIFEST_INSERTION`. For more information, see [Functions lifecycle hooks](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-hooks.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  FunctionMapping?: Partial<Record<EventName, string>> | undefined;

  /**
   * The timeout settings for ad decision server interactions. These settings control how long MediaTailor waits for ADS responses and the total time budget for ad personalization across live, VOD, and prefetch workflows.
   *
   * @public
   */
  AdsPersonalizationTimeouts?: AdsPersonalizationTimeouts | undefined;

  /**
   * The concurrency settings for ad decision server interactions. These settings control how many simultaneous ADS requests MediaTailor makes per manifest request.
   *
   * @public
   */
  AdsPersonalizationConcurrency?: AdsPersonalizationConcurrency | undefined;

  /**
   * The beaconing configuration for this playback configuration, which controls whether MediaTailor includes beacons of its own in the ad tracking response.
   *
   * @public
   */
  BeaconingConfiguration?: BeaconingConfiguration | undefined;
}

/**
 * For single prefetch, describes how and when that MediaTailor places prefetched ads into upcoming ad breaks.
 *
 * @public
 */
export interface PrefetchConsumption {
  /**
   * If you only want MediaTailor to insert prefetched ads into avails (ad breaks) that match specific dynamic variables, such as `scte.event_id`, set the avail matching criteria.
   *
   * @public
   */
  AvailMatchingCriteria?: AvailMatchingCriteria[] | undefined;

  /**
   * The time when MediaTailor no longer considers the prefetched ads for use in an ad break. MediaTailor automatically deletes prefetch schedules no less than seven days after the end time. If you'd like to manually delete the prefetch schedule, you can call `DeletePrefetchSchedule`.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The time when prefetched ads are considered for use in an ad break. If you don't specify `StartTime`, the prefetched ads are available after MediaTailor retrieves them from the ad decision server.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * The settings that determine how and when MediaTailor places prefetched ads into upcoming ad breaks for recurring prefetch scedules.
 *
 * @public
 */
export interface RecurringConsumption {
  /**
   * The number of seconds that an ad is available for insertion after it was prefetched.
   *
   * @public
   */
  RetrievedAdExpirationSeconds?: number | undefined;

  /**
   * The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in.
   *
   * @public
   */
  AvailMatchingCriteria?: AvailMatchingCriteria[] | undefined;
}

/**
 * The configuration that tells Elemental MediaTailor how many seconds to spread out requests to the ad decision server (ADS). Instead of sending ADS requests for all sessions at the same time, MediaTailor spreads the requests across the amount of time specified in the retrieval window.
 *
 * @public
 */
export interface TrafficShapingRetrievalWindow {
  /**
   * The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.
   *
   * @public
   */
  RetrievalWindowDurationSeconds?: number | undefined;
}

/**
 * The configuration for TPS-based traffic shaping. This approach limits requests to the ad decision server (ADS) based on transactions per second and concurrent users.
 *
 * @public
 */
export interface TrafficShapingTpsConfiguration {
  /**
   * The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle. MediaTailor uses this value along with concurrent users and headroom multiplier to calculate optimal traffic distribution and prevent ADS overload.
   *
   * @public
   */
  PeakTps?: number | undefined;

  /**
   * The expected peak number of concurrent viewers for your content. MediaTailor uses this value along with peak TPS to determine how to distribute prefetch requests across the available capacity without exceeding your ADS limits.
   *
   * @public
   */
  PeakConcurrentUsers?: number | undefined;
}

/**
 * With recurring prefetch, MediaTailor automatically prefetches ads for every avail that occurs during the retrieval window. The following configurations describe the MediaTailor behavior when prefetching ads for a live event.
 *
 * @public
 */
export interface RecurringRetrieval {
  /**
   * The dynamic variables to use for substitution during prefetch requests to the ADS.
   *
   * @public
   */
  DynamicVariables?: Record<string, string> | undefined;

  /**
   * The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail. If not set, the default is 0 (no delay).
   *
   * @public
   */
  DelayAfterAvailEndSeconds?: number | undefined;

  /**
   * Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.
   *
   * @public
   */
  TrafficShapingType?: TrafficShapingType | undefined;

  /**
   * The configuration that tells Elemental MediaTailor how many seconds to spread out requests to the ad decision server (ADS). Instead of sending ADS requests for all sessions at the same time, MediaTailor spreads the requests across the amount of time specified in the retrieval window.
   *
   * @public
   */
  TrafficShapingRetrievalWindow?: TrafficShapingRetrievalWindow | undefined;

  /**
   * The configuration for TPS-based traffic shaping. This approach limits requests to the ad decision server (ADS) based on transactions per second and concurrent users.
   *
   * @public
   */
  TrafficShapingTpsConfiguration?: TrafficShapingTpsConfiguration | undefined;
}

/**
 * The configuration that defines how MediaTailor performs recurring prefetch.
 *
 * @public
 */
export interface RecurringPrefetchConfiguration {
  /**
   * The start time for the window that MediaTailor prefetches and inserts ads in a live event.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time for the window that MediaTailor prefetches and inserts ads in a live event.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The settings that determine how and when MediaTailor places prefetched ads into upcoming ad breaks for recurring prefetch scedules.
   *
   * @public
   */
  RecurringConsumption: RecurringConsumption | undefined;

  /**
   * The configuration for prefetch ad retrieval from the ADS.
   *
   * @public
   */
  RecurringRetrieval: RecurringRetrieval | undefined;
}

/**
 * A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.
 *
 * @public
 */
export interface PrefetchRetrieval {
  /**
   * The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).
   *
   * You initially configure [dynamic variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html) for the ADS URL when you set up your playback configuration. When you specify `DynamicVariables` for prefetch retrieval, MediaTailor includes the dynamic variables in the request to the ADS.
   *
   * @public
   */
  DynamicVariables?: Record<string, string> | undefined;

  /**
   * The time when prefetch retrieval ends for the ad break. Prefetching will be attempted for manifest requests that occur at or before this time.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The time when prefetch retrievals can start for this break. Ad prefetching will be attempted for manifest requests that occur at or after this time. Defaults to the current time. If not specified, the prefetch retrieval starts as soon as possible.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.
   *
   * @public
   */
  TrafficShapingType?: TrafficShapingType | undefined;

  /**
   * The configuration that tells Elemental MediaTailor how many seconds to spread out requests to the ad decision server (ADS). Instead of sending ADS requests for all sessions at the same time, MediaTailor spreads the requests across the amount of time specified in the retrieval window.
   *
   * @public
   */
  TrafficShapingRetrievalWindow?: TrafficShapingRetrievalWindow | undefined;

  /**
   * The configuration for TPS-based traffic shaping. This approach limits requests to the ad decision server (ADS) based on transactions per second and concurrent users.
   *
   * @public
   */
  TrafficShapingTpsConfiguration?: TrafficShapingTpsConfiguration | undefined;
}

/**
 * A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see [Using ad prefetching](https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface PrefetchSchedule {
  /**
   * The Amazon Resource Name (ARN) of the prefetch schedule.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Consumption settings determine how, and when, MediaTailor places the prefetched ads into ad breaks for single prefetch schedules. Ad consumption occurs within a span of time that you define, called a *consumption window*. You can designate which ad breaks that MediaTailor fills with prefetch ads by setting avail matching criteria.
   *
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the playback configuration to create the prefetch schedule for.
   *
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).
   *
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * The frequency that MediaTailor creates prefetch schedules. `SINGLE` indicates that this schedule applies to one ad break. `RECURRING` indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.
   *
   * For more information about the prefetch types and when you might use each, see [Prefetching ads in Elemental MediaTailor.](https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html)
   *
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * The settings that determine how and when MediaTailor prefetches ads and inserts them into ad breaks.
   *
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The tags assigned to the prefetch schedule. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The schedule's ad break properties.
 *
 * @public
 */
export interface ScheduleAdBreak {
  /**
   * The approximate duration of the ad break, in seconds.
   *
   * @public
   */
  ApproximateDurationSeconds?: number | undefined;

  /**
   * The approximate time that the ad will start playing.
   *
   * @public
   */
  ApproximateStartTime?: Date | undefined;

  /**
   * The name of the source location containing the VOD source used for the ad break.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The name of the VOD source used for the ad break.
   *
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * The properties for a schedule.
 *
 * @public
 */
export interface ScheduleEntry {
  /**
   * The approximate duration of this program, in seconds.
   *
   * @public
   */
  ApproximateDurationSeconds?: number | undefined;

  /**
   * The approximate time that the program will start playing.
   *
   * @public
   */
  ApproximateStartTime?: Date | undefined;

  /**
   * The ARN of the program.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the channel that uses this schedule.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the live source used for the program.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name of the program.
   *
   * @public
   */
  ProgramName: string | undefined;

  /**
   * The schedule's ad break properties.
   *
   * @public
   */
  ScheduleAdBreaks?: ScheduleAdBreak[] | undefined;

  /**
   * The type of schedule entry.
   *
   * @public
   */
  ScheduleEntryType?: ScheduleEntryType | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The name of the VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * The list of audiences defined in ScheduleEntry.
   *
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * The segment delivery configuration settings.
 *
 * @public
 */
export interface SegmentDeliveryConfiguration {
  /**
   * The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as `https://example.com/some/path`. To use a relative URL specify the relative path, such as `/some/path*`.
   *
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * A unique identifier used to distinguish between multiple segment delivery configurations in a source location.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see [Working with AWS Secrets Manager access token authentication](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html).
 *
 * @public
 */
export interface SecretsManagerAccessTokenConfiguration {
  /**
   * The name of the HTTP header used to supply the access token in requests to the source location.
   *
   * @public
   */
  HeaderName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The AWS Secrets Manager [SecretString](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html) key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.
   *
   * @public
   */
  SecretStringKey?: string | undefined;
}

/**
 * Access configuration parameters.
 *
 * @public
 */
export interface AccessConfiguration {
  /**
   * The type of authentication used to access content from `HttpConfiguration::BaseUrl` on your source location.
   *
   * `S3_SIGV4` - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.
   *
   * Before you can use `S3_SIGV4`, you must meet these requirements:
   *
   * • You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.
   *
   * • The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.
   *
   * • The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.
   *
   * `AUTODETECT_SIGV4` - AWS Signature Version 4 authentication for a set of supported services: MediaPackage Version 2 and Amazon S3 hosted virtual-style access. If your source location base URL is a MediaPackage Version 2 endpoint or an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the resource where your source content is stored.
   *
   * Before you can use `AUTODETECT_SIGV4` with a MediaPackage Version 2 endpoint, you must meet these requirements:
   *
   * • You must grant MediaTailor access to your MediaPackage endpoint by granting `mediatailor.amazonaws.com` principal access in an Origin Access policy on the endpoint.
   *
   * • Your MediaTailor source location base URL must be a MediaPackage V2 endpoint.
   *
   * • The caller of the API must have `mediapackagev2:GetObject` IAM permissions to read all top level manifests referenced by the MediaTailor source packaging configurations.
   *
   * Before you can use `AUTODETECT_SIGV4` with an Amazon S3 bucket, you must meet these requirements:
   *
   * • You must grant MediaTailor access to your S3 bucket by granting `mediatailor.amazonaws.com` principal access in IAM. For more information about configuring access in IAM, see [Access management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide.*.
   *
   * • The `mediatailor.amazonaws.com` service principal must have permissions to read all top-level manifests referenced by the `VodSource` packaging configurations.
   *
   * • The caller of the API must have `s3:GetObject` IAM permissions to read all top level manifests referenced by your MediaTailor `VodSource` packaging configurations.
   *
   * @public
   */
  AccessType?: AccessType | undefined;

  /**
   * AWS Secrets Manager access token configuration parameters.
   *
   * @public
   */
  SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration | undefined;
}

/**
 * The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.
 *
 * @public
 */
export interface DefaultSegmentDeliveryConfiguration {
  /**
   * The hostname of the server that will be used to serve segments. This string must include the protocol, such as **https://**.
   *
   * @public
   */
  BaseUrl?: string | undefined;
}

/**
 * The HTTP configuration for the source location.
 *
 * @public
 */
export interface HttpConfiguration {
  /**
   * The base URL for the source location host server. This string must include the protocol, such as **https://**.
   *
   * @public
   */
  BaseUrl: string | undefined;
}

/**
 * A source location is a container for sources. For more information about source locations, see [Working with source locations](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html) in the *MediaTailor User Guide*.
 *
 * @public
 */
export interface SourceLocation {
  /**
   * The access configuration for the source location.
   *
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * The ARN of the SourceLocation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp that indicates when the source location was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The default segment delivery configuration.
   *
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * The HTTP configuration for the source location.
   *
   * @public
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * The timestamp that indicates when the source location was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The segment delivery configurations for the source location.
   *
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * VOD source configuration parameters.
 *
 * @public
 */
export interface VodSource {
  /**
   * The ARN for the VOD source.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp that indicates when the VOD source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The HTTP package configurations for the VOD source.
   *
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * The timestamp that indicates when the VOD source was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name of the source location that the VOD source is associated with.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name of the VOD source.
   *
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * A location at which a zero-duration ad marker was detected in a VOD source manifest.
 *
 * @public
 */
export interface AdBreakOpportunity {
  /**
   * The offset in milliseconds from the start of the VOD source at which an ad marker was detected.
   *
   * @public
   */
  OffsetMillis: number | undefined;
}

/**
 * @public
 */
export interface DeleteChannelPolicyRequest {
  /**
   * The name of the channel associated with this channel policy.
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
   * The name of the channel associated with this Channel Policy.
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
   * The IAM policy for the channel. IAM policies are used to control access to your channel.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyRequest {
  /**
   * The channel name associated with this Channel Policy.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * Adds an IAM role that determines the permissions of your channel.
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
 * @public
 */
export interface ConfigureLogsForChannelRequest {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The types of logs to collect.
   *
   * @public
   */
  LogTypes: LogType[] | undefined;
}

/**
 * @public
 */
export interface ConfigureLogsForChannelResponse {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The types of logs collected.
   *
   * @public
   */
  LogTypes?: LogType[] | undefined;
}

/**
 * The output configuration for this channel.
 *
 * @public
 */
export interface RequestOutputItem {
  /**
   * DASH manifest configuration parameters.
   *
   * @public
   */
  DashPlaylistSettings?: DashPlaylistSettings | undefined;

  /**
   * HLS playlist configuration parameters.
   *
   * @public
   */
  HlsPlaylistSettings?: HlsPlaylistSettings | undefined;

  /**
   * The name of the manifest for the channel. The name appears in the `PlaybackUrl`.
   *
   * @public
   */
  ManifestName: string | undefined;

  /**
   * A string used to match which `HttpPackageConfiguration` is used for each `VodSource`.
   *
   * @public
   */
  SourceGroup: string | undefined;
}

/**
 * The configuration for time-shifted viewing.
 *
 * @public
 */
export interface TimeShiftConfiguration {
  /**
   * The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).
   *
   * @public
   */
  MaxTimeDelaySeconds: number | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the `LINEAR` `PlaybackMode`. MediaTailor doesn't support filler slate for channels using the `LOOP` `PlaybackMode`.
   *
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * The channel's output properties.
   *
   * @public
   */
  Outputs: RequestOutputItem[] | undefined;

  /**
   * The type of playback mode to use for this channel.
   *
   * `LINEAR` - The programs in the schedule play once back-to-back in the schedule.
   *
   * `LOOP` - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.
   *
   * @public
   */
  PlaybackMode: PlaybackMode | undefined;

  /**
   * The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The tier of the channel.
   *
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * The time-shifted viewing configuration you want to associate to the channel.
   *
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * The list of audiences defined in channel.
   *
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * The Amazon Resource Name (ARN) to assign to the channel.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name to assign to the channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * Indicates whether the channel is in a running state or not.
   *
   * @public
   */
  ChannelState?: ChannelState | undefined;

  /**
   * The timestamp of when the channel was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Contains information about the slate used to fill gaps between programs in the schedule.
   *
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * The timestamp of when the channel was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The output properties to assign to the channel.
   *
   * @public
   */
  Outputs?: ResponseOutputItem[] | undefined;

  /**
   * The playback mode to assign to the channel.
   *
   * @public
   */
  PlaybackMode?: string | undefined;

  /**
   * The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The tier of the channel.
   *
   * @public
   */
  Tier?: string | undefined;

  /**
   * The time-shifted viewing configuration assigned to the channel.
   *
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * The list of audiences defined in channel.
   *
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * The name of the channel.
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
export interface DescribeChannelRequest {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * Indicates whether the channel is in a running state or not.
   *
   * @public
   */
  ChannelState?: ChannelState | undefined;

  /**
   * The timestamp of when the channel was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Contains information about the slate used to fill gaps between programs in the schedule.
   *
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * The timestamp of when the channel was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The channel's output properties.
   *
   * @public
   */
  Outputs?: ResponseOutputItem[] | undefined;

  /**
   * The channel's playback mode.
   *
   * @public
   */
  PlaybackMode?: string | undefined;

  /**
   * The tags assigned to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The channel's tier.
   *
   * @public
   */
  Tier?: string | undefined;

  /**
   * The log configuration for the channel.
   *
   * @public
   */
  LogConfiguration: LogConfigurationForChannel | undefined;

  /**
   * The time-shifted viewing configuration for the channel.
   *
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * The list of audiences defined in channel.
   *
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface GetChannelScheduleRequest {
  /**
   * The name of the channel associated with this Channel Schedule.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The duration in minutes of the channel schedule.
   *
   * @public
   */
  DurationMinutes?: string | undefined;

  /**
   * The maximum number of channel schedules that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` channel schedules, use the value of `NextToken` in the response to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) If the playback configuration has more than `MaxResults` channel schedules, use `NextToken` to get the second and subsequent pages of results.
   *
   * For the first `GetChannelScheduleRequest` request, omit this value.
   *
   * For the second and subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request.
   *
   * If the previous response didn't include a `NextToken` element, there are no more channel schedules to get.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The single audience for GetChannelScheduleRequest.
   *
   * @public
   */
  Audience?: string | undefined;
}

/**
 * @public
 */
export interface GetChannelScheduleResponse {
  /**
   * A list of schedule entries for the channel.
   *
   * @public
   */
  Items?: ScheduleEntry[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * The maximum number of channels that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` channels, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListChannels` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * A list of channels that are associated with this account.
   *
   * @public
   */
  Items?: Channel[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Program transition configuration.
 *
 * @public
 */
export interface Transition {
  /**
   * The duration of the live program in seconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * The position where this program will be inserted relative to the `RelativePosition`.
   *
   * @public
   */
  RelativePosition: RelativePosition | undefined;

  /**
   * The name of the program that this program will be inserted next to, as defined by `RelativePosition`.
   *
   * @public
   */
  RelativeProgram?: string | undefined;

  /**
   * The date and time that the program is scheduled to start, in epoch milliseconds.
   *
   * @public
   */
  ScheduledStartTimeMillis?: number | undefined;

  /**
   * Defines when the program plays in the schedule. You can set the value to `ABSOLUTE` or `RELATIVE`.
   *
   * `ABSOLUTE` - The program plays at a specific wall clock time. This setting can only be used for channels using the `LINEAR` `PlaybackMode`.
   *
   * Note the following considerations when using `ABSOLUTE` transitions:
   *
   * If the preceding program in the schedule has a duration that extends past the wall clock time, MediaTailor truncates the preceding program on a common segment boundary.
   *
   * If there are gaps in playback, MediaTailor plays the `FillerSlate` you configured for your linear channel.
   *
   * `RELATIVE` - The program is inserted into the schedule either before or after a program that you specify via `RelativePosition`.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.
 *
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * Program transition configurations.
   *
   * @public
   */
  Transition: Transition | undefined;

  /**
   * Program clip range configuration.
   *
   * @public
   */
  ClipRange?: ClipRange | undefined;
}

/**
 * @public
 */
export interface CreateProgramRequest {
  /**
   * The ad break configuration settings.
   *
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * The name of the channel for this Program.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the LiveSource for this Program.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name of the Program.
   *
   * @public
   */
  ProgramName: string | undefined;

  /**
   * The schedule configuration settings.
   *
   * @public
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The name that's used to refer to a VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * The list of AudienceMedia defined in program.
   *
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;

  /**
   * The tags to assign to the program. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProgramResponse {
  /**
   * The ad break configuration settings.
   *
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * The ARN to assign to the program.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name to assign to the channel for this program.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The time the program was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The name of the LiveSource for this Program.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name to assign to this program.
   *
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * The scheduled start time for this Program.
   *
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * The name to assign to the source location for this program.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The name that's used to refer to a VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * The clip range configuration settings.
   *
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * The duration of the live program in milliseconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * The list of AudienceMedia defined in program.
   *
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;

  /**
   * The tags assigned to the program. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteProgramRequest {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the program.
   *
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
   * The name of the channel associated with this Program.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the program.
   *
   * @public
   */
  ProgramName: string | undefined;
}

/**
 * @public
 */
export interface DescribeProgramResponse {
  /**
   * The ad break configuration settings.
   *
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * The ARN of the program.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the channel that the program belongs to.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The timestamp of when the program was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The name of the LiveSource for this Program.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name of the program.
   *
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * The date and time that the program is scheduled to start in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2021-03-27T17:48:16.751Z represents March 27, 2021 at 17:48:16.751 UTC.
   *
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * The source location name.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The name that's used to refer to a VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * The clip range configuration settings.
   *
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * The duration of the live program in milliseconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * The list of AudienceMedia defined in program.
   *
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;

  /**
   * The tags assigned to the program. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Program transition configuration.
 *
 * @public
 */
export interface UpdateProgramTransition {
  /**
   * The date and time that the program is scheduled to start, in epoch milliseconds.
   *
   * @public
   */
  ScheduledStartTimeMillis?: number | undefined;

  /**
   * The duration of the live program in seconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;
}

/**
 * Schedule configuration parameters.
 *
 * @public
 */
export interface UpdateProgramScheduleConfiguration {
  /**
   * Program transition configuration.
   *
   * @public
   */
  Transition?: UpdateProgramTransition | undefined;

  /**
   * Program clip range configuration.
   *
   * @public
   */
  ClipRange?: ClipRange | undefined;
}

/**
 * @public
 */
export interface UpdateProgramRequest {
  /**
   * The ad break configuration settings.
   *
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * The name of the channel for this Program.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The name of the Program.
   *
   * @public
   */
  ProgramName: string | undefined;

  /**
   * The schedule configuration settings.
   *
   * @public
   */
  ScheduleConfiguration: UpdateProgramScheduleConfiguration | undefined;

  /**
   * The list of AudienceMedia defined in program.
   *
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;
}

/**
 * @public
 */
export interface UpdateProgramResponse {
  /**
   * The ad break configuration settings.
   *
   * @public
   */
  AdBreaks?: AdBreak[] | undefined;

  /**
   * The ARN to assign to the program.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name to assign to the channel for this program.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The time the program was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The name to assign to this program.
   *
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * The name to assign to the source location for this program.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The name that's used to refer to a VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;

  /**
   * The name of the LiveSource for this Program.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The clip range configuration settings.
   *
   * @public
   */
  ClipRange?: ClipRange | undefined;

  /**
   * The duration of the live program in milliseconds.
   *
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * The scheduled start time for this Program.
   *
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * The list of AudienceMedia defined in program.
   *
   * @public
   */
  AudienceMedia?: AudienceMedia[] | undefined;

  /**
   * The tags assigned to the program. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartChannelRequest {
  /**
   * The name of the channel.
   *
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
   * The name of the channel.
   *
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
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the `LINEAR` `PlaybackMode`. MediaTailor doesn't support filler slate for channels using the `LOOP` `PlaybackMode`.
   *
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * The channel's output properties.
   *
   * @public
   */
  Outputs: RequestOutputItem[] | undefined;

  /**
   * The time-shifted viewing configuration you want to associate to the channel.
   *
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * The list of audiences defined in channel.
   *
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * The Amazon Resource Name (ARN) associated with the channel.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * Returns the state whether the channel is running or not.
   *
   * @public
   */
  ChannelState?: ChannelState | undefined;

  /**
   * The timestamp of when the channel was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the `LINEAR` `PlaybackMode`. MediaTailor doesn't support filler slate for channels using the `LOOP` `PlaybackMode`.
   *
   * @public
   */
  FillerSlate?: SlateSource | undefined;

  /**
   * The timestamp that indicates when the channel was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The channel's output properties.
   *
   * @public
   */
  Outputs?: ResponseOutputItem[] | undefined;

  /**
   * The type of playback mode for this channel.
   *
   * `LINEAR` - Programs play back-to-back only once.
   *
   * `LOOP` - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.
   *
   * @public
   */
  PlaybackMode?: string | undefined;

  /**
   * The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The tier associated with this Channel.
   *
   * @public
   */
  Tier?: string | undefined;

  /**
   * The time-shifted viewing configuration for the channel.
   *
   * @public
   */
  TimeShiftConfiguration?: TimeShiftConfiguration | undefined;

  /**
   * The list of audiences defined in channel.
   *
   * @public
   */
  Audiences?: string[] | undefined;
}

/**
 * Configures Amazon CloudWatch log settings for a playback configuration.
 *
 * @public
 */
export interface ConfigureLogsForPlaybackConfigurationRequest {
  /**
   * The percentage of session logs that MediaTailor sends to your CloudWatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to `60`, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the [debug log mode](https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html).
   *
   * Valid values: `0` - `100`
   *
   * @public
   */
  PercentEnabled: number | undefined;

  /**
   * The name of the playback configuration.
   *
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * The method used for collecting logs from AWS Elemental MediaTailor. To configure MediaTailor to send logs directly to Amazon CloudWatch Logs, choose `LEGACY_CLOUDWATCH`. To configure MediaTailor to send logs to CloudWatch, which then vends the logs to your destination of choice, choose `VENDED_LOGS`. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream.
   *
   * To use vended logs, you must configure the delivery destination in Amazon CloudWatch, as described in [Enable logging from AWS services, Logging that requires additional permissions [V2\]](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html#AWS-vended-logs-permissions-V2).
   *
   * @public
   */
  EnabledLoggingStrategies?: LoggingStrategy[] | undefined;

  /**
   * The event types that MediaTailor emits in logs for interactions with the ADS.
   *
   * @public
   */
  AdsInteractionLog?: AdsInteractionLog | undefined;

  /**
   * The event types that MediaTailor emits in logs for interactions with the origin server.
   *
   * @public
   */
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog | undefined;
}

/**
 * @public
 */
export interface ConfigureLogsForPlaybackConfigurationResponse {
  /**
   * The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account.
   *
   * @public
   */
  PercentEnabled: number | undefined;

  /**
   * The name of the playback configuration.
   *
   * @public
   */
  PlaybackConfigurationName?: string | undefined;

  /**
   * The method used for collecting logs from AWS Elemental MediaTailor. `LEGACY_CLOUDWATCH` indicates that MediaTailor is sending logs directly to Amazon CloudWatch Logs. `VENDED_LOGS` indicates that MediaTailor is sending logs to CloudWatch, which then vends the logs to your destination of choice. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream.
   *
   * @public
   */
  EnabledLoggingStrategies?: LoggingStrategy[] | undefined;

  /**
   * The event types that MediaTailor emits in logs for interactions with the ADS.
   *
   * @public
   */
  AdsInteractionLog?: AdsInteractionLog | undefined;

  /**
   * The event types that MediaTailor emits in logs for interactions with the origin server.
   *
   * @public
   */
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog | undefined;
}

/**
 * @public
 */
export interface CreateLiveSourceRequest {
  /**
   * A list of HTTP package configuration parameters for this live source.
   *
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * The name of the live source.
   *
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLiveSourceResponse {
  /**
   * The ARN to assign to the live source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time the live source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A list of HTTP package configuration parameters for this live source.
   *
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * The time the live source was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name to assign to the live source.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name to assign to the source location of the live source.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePrefetchScheduleRequest {
  /**
   * The configuration settings for how and when MediaTailor consumes prefetched ads from the ad decision server for single prefetch schedules. Each consumption configuration contains an end time and an optional start time that define the *consumption window*. Prefetch schedules automatically expire no earlier than seven days after the end time.
   *
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * The name to assign to the schedule request.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name to assign to the playback configuration.
   *
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.
   *
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * The configuration that defines how and when MediaTailor performs ad prefetching in a live event.
   *
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * The frequency that MediaTailor creates prefetch schedules. `SINGLE` indicates that this schedule applies to one ad break. `RECURRING` indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.
   *
   * For more information about the prefetch types and when you might use each, see [Prefetching ads in Elemental MediaTailor.](https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html)
   *
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If `StreamId` is specified, MediaTailor returns all of the prefetch schedules with an exact match on `StreamId`. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of `StreamId`.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The tags to assign to the prefetch schedule. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePrefetchScheduleResponse {
  /**
   * The ARN to assign to the prefetch schedule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The configuration settings for how and when MediaTailor consumes prefetched ads from the ad decision server for single prefetch schedules. Each consumption configuration contains an end time and an optional start time that define the *consumption window*. Prefetch schedules automatically expire no earlier than seven days after the end time.
   *
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * The name to assign to the prefetch schedule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name to assign to the playback configuration.
   *
   * @public
   */
  PlaybackConfigurationName?: string | undefined;

  /**
   * The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.
   *
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * The configuration that defines how MediaTailor performs recurring prefetch.
   *
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * The frequency that MediaTailor creates prefetch schedules. `SINGLE` indicates that this schedule applies to one ad break. `RECURRING` indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.
   *
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If `StreamId` is specified, MediaTailor returns all of the prefetch schedules with an exact match on `StreamId`. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of `StreamId`.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The tags assigned to the prefetch schedule. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSourceLocationRequest {
  /**
   * Access configuration parameters. Configures the type of authentication used to access content from your source location.
   *
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * The optional configuration for the server that serves segments.
   *
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * The source's HTTP package configurations.
   *
   * @public
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * A list of the segment delivery configurations associated with this resource.
   *
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * The name associated with the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSourceLocationResponse {
  /**
   * Access configuration parameters. Configures the type of authentication used to access content from your source location.
   *
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * The ARN to assign to the source location.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time the source location was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The optional configuration for the server that serves segments.
   *
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * The source's HTTP package configurations.
   *
   * @public
   */
  HttpConfiguration?: HttpConfiguration | undefined;

  /**
   * The time the source location was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The segment delivery configurations for the source location. For information about MediaTailor configurations, see [Working with configurations in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html).
   *
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * The name to assign to the source location.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVodSourceRequest {
  /**
   * A list of HTTP package configuration parameters for this VOD source.
   *
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * The name of the source location for this VOD source.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name associated with the VOD source.&gt;
   *
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateVodSourceResponse {
  /**
   * The ARN to assign to this VOD source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time the VOD source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A list of HTTP package configuration parameters for this VOD source.
   *
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * The time the VOD source was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name to assign to the source location for this VOD source.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name to assign to the VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * The configuration for DASH PUT operations.
 *
 * @public
 */
export interface DashConfigurationForPut {
  /**
   * The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are `DISABLED` and `EMT_DEFAULT`. The `EMT_DEFAULT` setting enables the inclusion of the tag and is the default value.
   *
   * @public
   */
  MpdLocation?: string | undefined;

  /**
   * The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to `SINGLE_PERIOD`. The default setting is `MULTI_PERIOD`. For multi-period manifests, omit this setting or set it to `MULTI_PERIOD`.
   *
   * @public
   */
  OriginManifestType?: OriginManifestType | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionRequest {
  /**
   * The identifier of the function to delete.
   *
   * @public
   */
  FunctionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionResponse {}

/**
 * @public
 */
export interface DeleteLiveSourceRequest {
  /**
   * The name of the live source.
   *
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * The name of the source location associated with this Live Source.
   *
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
   * The name of the playback configuration.
   *
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
   * The name of the prefetch schedule. If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the playback configuration for this prefetch schedule.
   *
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
   * The name of the source location.
   *
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
   * The name of the source location associated with this VOD Source.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The name of the VOD source.
   *
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
   * The name of the live source.
   *
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * The name of the source location associated with this Live Source.
   *
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLiveSourceResponse {
  /**
   * The ARN of the live source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp that indicates when the live source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The HTTP package configurations.
   *
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * The timestamp that indicates when the live source was modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name of the live source.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name of the source location associated with the live source.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSourceLocationRequest {
  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSourceLocationResponse {
  /**
   * The access configuration for the source location.
   *
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * The ARN of the source location.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp that indicates when the source location was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The default segment delivery configuration settings.
   *
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * The HTTP package configuration settings for the source location.
   *
   * @public
   */
  HttpConfiguration?: HttpConfiguration | undefined;

  /**
   * The timestamp that indicates when the source location was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A list of the segment delivery configurations associated with this resource.
   *
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeVodSourceRequest {
  /**
   * The name of the source location associated with this VOD Source.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The name of the VOD Source.
   *
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * @public
 */
export interface DescribeVodSourceResponse {
  /**
   * The ad break opportunities within the VOD source.
   *
   * @public
   */
  AdBreakOpportunities?: AdBreakOpportunity[] | undefined;

  /**
   * The ARN of the VOD source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp that indicates when the VOD source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The HTTP package configurations.
   *
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * The last modified time of the VOD source.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name of the source location associated with the VOD source.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name of the VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;
}

/**
 * -- Request/Response DataStructures --
 * @public
 */
export interface GetFunctionRequest {
  /**
   * The identifier of the function.
   *
   * @public
   */
  FunctionId: string | undefined;
}

/**
 * -- Define Mixin --
 * @public
 */
export interface GetFunctionResponse {
  /**
   * The identifier of the function.
   *
   * @public
   */
  FunctionId: string | undefined;

  /**
   * The type of the function.
   *
   * @public
   */
  FunctionType: FunctionType | undefined;

  /**
   * A description of the function.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for an `HTTP_REQUEST` function.
   *
   * @public
   */
  HttpRequestConfiguration?: HttpRequestConfiguration | undefined;

  /**
   * The configuration for an `AWS_SERVICE_REQUEST` function. Specifies the target service, target Region, and request parameters.
   *
   * @public
   */
  AwsServiceRequestConfiguration?: AwsServiceRequestConfiguration | undefined;

  /**
   * The configuration for a `CUSTOM_OUTPUT` function.
   *
   * @public
   */
  CustomOutputConfiguration?: CustomOutputConfiguration | undefined;

  /**
   * The configuration for a `CONCURRENT_EXECUTOR` function.
   *
   * @public
   */
  ConcurrentExecutorConfiguration?: ConcurrentExecutorConfiguration | undefined;

  /**
   * The configuration for a `SEQUENTIAL_EXECUTOR` function.
   *
   * @public
   */
  SequentialExecutorConfiguration?: SequentialExecutorConfiguration | undefined;

  /**
   * The configuration for a `VAST_REQUEST` function.
   *
   * @public
   */
  VastRequestConfiguration?: VastRequestConfiguration | undefined;

  /**
   * The tags assigned to the function. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * The maximum number of functions that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` functions, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses token-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListFunctions` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionsResponse {
  /**
   * A list of functions associated with your account in the current Region.
   *
   * @public
   */
  Items?: Function[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListFunctions` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * -- Define Mixin --
 * @public
 */
export interface PutFunctionRequest {
  /**
   * The identifier of the function. The identifier must be unique within your account.
   *
   * @public
   */
  FunctionId: string | undefined;

  /**
   * The type of the function, which determines what the function can do at runtime. Valid values:
   *
   * - `CUSTOM_OUTPUT` – Evaluates expressions and produces output bindings with no external calls.
   * - `HTTP_REQUEST` – Makes an HTTP call to an external service and evaluates output expressions that can reference the response.
   * - `AWS_SERVICE_REQUEST` – Makes an authenticated request to a supported AWS service API and evaluates output expressions that can reference the response.
   * - `VAST_REQUEST` – Calls a VAST endpoint, parses the response as VAST, and makes the parsed ads available to output expressions.
   * - `SEQUENTIAL_EXECUTOR` – Runs a sequence of child functions in order, passing data between steps through temporary data.
   * - `CONCURRENT_EXECUTOR` – Runs a set of child functions in parallel, up to a maximum concurrency, and combines their output when all functions complete.
   *
   * For more information, see [Function types and composition](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  FunctionType: FunctionType | undefined;

  /**
   * A description of the function.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for an `HTTP_REQUEST` function. Specifies the HTTP method, URL, headers, body, timeout, and output expressions. Required when `FunctionType` is `HTTP_REQUEST`.
   *
   * @public
   */
  HttpRequestConfiguration?: HttpRequestConfiguration | undefined;

  /**
   * The configuration for an `AWS_SERVICE_REQUEST` function. You must specify this parameter when `FunctionType` is `AWS_SERVICE_REQUEST`.
   *
   * @public
   */
  AwsServiceRequestConfiguration?: AwsServiceRequestConfiguration | undefined;

  /**
   * The configuration for a `CUSTOM_OUTPUT` function. Specifies the runtime and output expressions. Required when `FunctionType` is `CUSTOM_OUTPUT`.
   *
   * @public
   */
  CustomOutputConfiguration?: CustomOutputConfiguration | undefined;

  /**
   * The configuration for a `CONCURRENT_EXECUTOR` function. Specifies the list of child functions to run in parallel, the maximum concurrency, an optional output block, and a timeout. Required when `FunctionType` is `CONCURRENT_EXECUTOR`.
   *
   * @public
   */
  ConcurrentExecutorConfiguration?: ConcurrentExecutorConfiguration | undefined;

  /**
   * The configuration for a `SEQUENTIAL_EXECUTOR` function. Specifies the ordered list of child functions to execute, an optional output block, and a timeout. Required when `FunctionType` is `SEQUENTIAL_EXECUTOR`.
   *
   * @public
   */
  SequentialExecutorConfiguration?: SequentialExecutorConfiguration | undefined;

  /**
   * The configuration for a `VAST_REQUEST` function. Specifies the HTTP method, URL, headers, body, timeout, and output expressions. Required when `FunctionType` is `VAST_REQUEST`.
   *
   * @public
   */
  VastRequestConfiguration?: VastRequestConfiguration | undefined;

  /**
   * The tags to assign to the function. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * -- Define Mixin --
 * @public
 */
export interface PutFunctionResponse {
  /**
   * The identifier of the function.
   *
   * @public
   */
  FunctionId: string | undefined;

  /**
   * The type of the function.
   *
   * @public
   */
  FunctionType: FunctionType | undefined;

  /**
   * A description of the function.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for an `HTTP_REQUEST` function.
   *
   * @public
   */
  HttpRequestConfiguration?: HttpRequestConfiguration | undefined;

  /**
   * The configuration for an `AWS_SERVICE_REQUEST` function. Specifies the target service, target Region, and request parameters.
   *
   * @public
   */
  AwsServiceRequestConfiguration?: AwsServiceRequestConfiguration | undefined;

  /**
   * The configuration for a `CUSTOM_OUTPUT` function.
   *
   * @public
   */
  CustomOutputConfiguration?: CustomOutputConfiguration | undefined;

  /**
   * The configuration for a `CONCURRENT_EXECUTOR` function.
   *
   * @public
   */
  ConcurrentExecutorConfiguration?: ConcurrentExecutorConfiguration | undefined;

  /**
   * The configuration for a `SEQUENTIAL_EXECUTOR` function.
   *
   * @public
   */
  SequentialExecutorConfiguration?: SequentialExecutorConfiguration | undefined;

  /**
   * The configuration for a `VAST_REQUEST` function.
   *
   * @public
   */
  VastRequestConfiguration?: VastRequestConfiguration | undefined;

  /**
   * The tags assigned to the function. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface GetPlaybackConfigurationRequest {
  /**
   * The identifier for the playback configuration.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetPlaybackConfigurationResponse {
  /**
   * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
   *
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see [Ad Suppression](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see [Bumpers](https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).
   *
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
   *
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * The player parameters and aliases used as dynamic variables during session initialization. For more information, see [Domain Variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html).
   *
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * The configuration for DASH content.
   *
   * @public
   */
  DashConfiguration?: DashConfiguration | undefined;

  /**
   * The configuration for HLS content.
   *
   * @public
   */
  HlsConfiguration?: HlsConfiguration | undefined;

  /**
   * The setting that controls whether players can use stitched or guided ad insertion. The default, `STITCHED_ONLY`, forces all player sessions to use stitched (server-side) ad insertion. Choosing `PLAYER_SELECT` allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.
   *
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * The configuration for pre-roll ad insertion.
   *
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * The configuration that defines where AWS Elemental MediaTailor sends logs for the playback configuration.
   *
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
   *
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * The identifier for the playback configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to *ad replacement* in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see [Ad Behavior in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the playback configuration.
   *
   * @public
   */
  PlaybackConfigurationArn?: string | undefined;

  /**
   * The URL that your player accesses to get a manifest from AWS Elemental MediaTailor. The session uses server-side reporting.
   *
   * @public
   */
  PlaybackEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) URL that your player accesses to get a manifest from AWS Elemental MediaTailor. The session uses server-side reporting.
   *
   * @public
   */
  DualStackPlaybackEndpointPrefix?: string | undefined;

  /**
   * The URL that your player uses to initialize a session that uses client-side reporting.
   *
   * @public
   */
  SessionInitializationEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) URL that your player uses to initialize a session that uses client-side reporting.
   *
   * @public
   */
  DualStackSessionInitializationEndpointPrefix?: string | undefined;

  /**
   * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.
   *
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * The tags assigned to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
   *
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.
   *
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads.
   *
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;

  /**
   * The configuration for customizing HTTP requests to the ad decision server (ADS). This includes settings for request method, headers, body content, and compression options.
   *
   * @public
   */
  AdDecisionServerConfiguration?: AdDecisionServerConfiguration | undefined;

  /**
   * Configuration for Yield Optimization, which fills unsold ad inventory in ad breaks with programmatic ads from Amazon Publisher Services (APS).
   *
   * @public
   */
  YieldOptimizationConfiguration?: YieldOptimizationConfiguration | undefined;

  /**
   * A map of lifecycle hook event names to function identifiers. The function mapping specifies which function MediaTailor executes at each lifecycle hook during ad insertion. Valid keys are `PRE_SESSION_INITIALIZATION`, `PRE_ADS_REQUEST`, `POST_ADS_RESPONSE`, and `PRE_MANIFEST_INSERTION`. For more information, see [Functions lifecycle hooks](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-hooks.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  FunctionMapping?: Partial<Record<EventName, string>> | undefined;

  /**
   * The timeout settings for ad decision server interactions. These settings control how long MediaTailor waits for ADS responses and the total time budget for ad personalization across live, VOD, and prefetch workflows.
   *
   * @public
   */
  AdsPersonalizationTimeouts?: AdsPersonalizationTimeouts | undefined;

  /**
   * The concurrency settings for ad decision server interactions. These settings control how many simultaneous ADS requests MediaTailor makes per manifest request.
   *
   * @public
   */
  AdsPersonalizationConcurrency?: AdsPersonalizationConcurrency | undefined;

  /**
   * The beaconing configuration for this playback configuration, which controls whether MediaTailor includes beacons of its own in the ad tracking response. MediaTailor always returns this setting. If you created the playback configuration before this setting existed, MediaTailor reports `ReportingMode` as `INSIGHTS`. This is also the value MediaTailor uses for that configuration at playback time.
   *
   * @public
   */
  BeaconingConfiguration?: BeaconingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetPrefetchScheduleRequest {
  /**
   * The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Returns information about the prefetch schedule for a specific playback configuration. If you call `GetPrefetchSchedule` on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code.
   *
   * @public
   */
  PlaybackConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface GetPrefetchScheduleResponse {
  /**
   * The Amazon Resource Name (ARN) of the prefetch schedule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The configuration settings for how and when MediaTailor consumes prefetched ads from the ad decision server for single prefetch schedules. Each consumption configuration contains an end time and an optional start time that define the *consumption window*. Prefetch schedules automatically expire no earlier than seven days after the end time.
   *
   * @public
   */
  Consumption?: PrefetchConsumption | undefined;

  /**
   * The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the playback configuration to create the prefetch schedule for.
   *
   * @public
   */
  PlaybackConfigurationName?: string | undefined;

  /**
   * A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).
   *
   * @public
   */
  Retrieval?: PrefetchRetrieval | undefined;

  /**
   * The frequency that MediaTailor creates prefetch schedules. `SINGLE` indicates that this schedule applies to one ad break. `RECURRING` indicates that MediaTailor automatically creates a schedule for each ad avail in a live event.
   *
   * @public
   */
  ScheduleType?: PrefetchScheduleType | undefined;

  /**
   * The configuration that defines how and when MediaTailor performs ad prefetching in a live event.
   *
   * @public
   */
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration | undefined;

  /**
   * An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The tags assigned to the prefetch schedule. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAlertsRequest {
  /**
   * The maximum number of alerts that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` alerts, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListAlerts` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListAlertsResponse {
  /**
   * A list of alerts that are associated with this resource.
   *
   * @public
   */
  Items?: Alert[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLiveSourcesRequest {
  /**
   * The maximum number of live sources that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` live sources, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListLiveSources` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the source location associated with this Live Sources list.
   *
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface ListLiveSourcesResponse {
  /**
   * Lists the live sources.
   *
   * @public
   */
  Items?: LiveSource[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlaybackConfigurationsRequest {
  /**
   * The maximum number of playback configurations that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` playback configurations, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListPlaybackConfigurations` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlaybackConfigurationsResponse {
  /**
   * Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored.
   *
   * @public
   */
  Items?: PlaybackConfiguration[] | undefined;

  /**
   * Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPrefetchSchedulesRequest {
  /**
   * The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` prefetch schedules, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListPrefetchSchedules` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Retrieves the prefetch schedule(s) for a specific playback configuration.
   *
   * @public
   */
  PlaybackConfigurationName: string | undefined;

  /**
   * The type of prefetch schedules that you want to list. `SINGLE` indicates that you want to list the configured single prefetch schedules. `RECURRING` indicates that you want to list the configured recurring prefetch schedules. `ALL` indicates that you want to list all configured prefetch schedules.
   *
   * @public
   */
  ScheduleType?: ListPrefetchScheduleType | undefined;

  /**
   * An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface ListPrefetchSchedulesResponse {
  /**
   * Lists the prefetch schedules. An empty `Items` list doesn't mean there aren't more items to fetch, just that that page was empty.
   *
   * @public
   */
  Items?: PrefetchSchedule[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceLocationsRequest {
  /**
   * The maximum number of source locations that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` source locations, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListSourceLocations` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceLocationsResponse {
  /**
   * A list of source locations.
   *
   * @public
   */
  Items?: SourceLocation[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) associated with this resource.
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
   * The tags associated with this resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVodSourcesRequest {
  /**
   * The maximum number of VOD sources that you want MediaTailor to return in response to the current request. If there are more than `MaxResults` VOD sources, use the value of `NextToken` in the response to get the next page of results.
   *
   * The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than `MaxResults` items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the `NextToken` value from each response until the response no longer includes a `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * For the first `ListVodSources` request, omit this value. For subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request. Continue making requests until the response no longer includes a `NextToken` value, which indicates that all results have been retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the source location associated with this VOD Source list.
   *
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface ListVodSourcesResponse {
  /**
   * Lists the VOD sources.
   *
   * @public
   */
  Items?: VodSource[] | undefined;

  /**
   * Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLiveSourceRequest {
  /**
   * A list of HTTP package configurations for the live source on this account.
   *
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * The name of the live source.
   *
   * @public
   */
  LiveSourceName: string | undefined;

  /**
   * The name of the source location associated with this Live Source.
   *
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface UpdateLiveSourceResponse {
  /**
   * The Amazon Resource Name (ARN) associated with this live source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp that indicates when the live source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A list of HTTP package configurations for the live source on this account.
   *
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * The timestamp that indicates when the live source was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name of the live source.
   *
   * @public
   */
  LiveSourceName?: string | undefined;

  /**
   * The name of the source location associated with the live source.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutPlaybackConfigurationRequest {
  /**
   * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
   *
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see [Ad Suppression](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see [Bumpers](https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).
   *
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
   *
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * The player parameters and aliases used as dynamic variables during session initialization. For more information, see [Domain Variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html).
   *
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * The configuration for DASH content.
   *
   * @public
   */
  DashConfiguration?: DashConfigurationForPut | undefined;

  /**
   * The setting that controls whether players can use stitched or guided ad insertion. The default, `STITCHED_ONLY`, forces all player sessions to use stitched (server-side) ad insertion. Choosing `PLAYER_SELECT` allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.
   *
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * The configuration for pre-roll ad insertion.
   *
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
   *
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * The identifier for the playback configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to *ad replacement* in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see [Ad Behavior in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.
   *
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
   *
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.
   *
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads.
   *
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;

  /**
   * The configuration for customizing HTTP requests to the ad decision server (ADS). This includes settings for request method, headers, body content, and compression options.
   *
   * @public
   */
  AdDecisionServerConfiguration?: AdDecisionServerConfiguration | undefined;

  /**
   * Configuration for Yield Optimization, which fills unsold ad inventory in ad breaks with programmatic ads from Amazon Publisher Services (APS).
   *
   * @public
   */
  YieldOptimizationConfiguration?: YieldOptimizationConfiguration | undefined;

  /**
   * A map of lifecycle hook event names to function identifiers. The function mapping specifies which function MediaTailor executes at each lifecycle hook during ad insertion. Valid keys are `PRE_SESSION_INITIALIZATION`, `PRE_ADS_REQUEST`, `POST_ADS_RESPONSE`, and `PRE_MANIFEST_INSERTION`. For more information, see [Functions lifecycle hooks](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-hooks.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  FunctionMapping?: Partial<Record<EventName, string>> | undefined;

  /**
   * The timeout settings for ad decision server interactions. These settings control how long MediaTailor waits for ADS responses and the total time budget for ad personalization across live, VOD, and prefetch workflows.
   *
   * @public
   */
  AdsPersonalizationTimeouts?: AdsPersonalizationTimeouts | undefined;

  /**
   * The concurrency settings for ad decision server interactions. These settings control how many simultaneous ADS requests MediaTailor makes per manifest request.
   *
   * @public
   */
  AdsPersonalizationConcurrency?: AdsPersonalizationConcurrency | undefined;

  /**
   * The beaconing configuration for this playback configuration, which controls whether MediaTailor includes beacons of its own in the ad tracking response. If you omit this setting, MediaTailor uses `INSIGHTS`.
   *
   * @public
   */
  BeaconingConfiguration?: BeaconingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutPlaybackConfigurationResponse {
  /**
   * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
   *
   * @public
   */
  AdDecisionServerUrl?: string | undefined;

  /**
   * The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see [Ad Suppression](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  AvailSuppression?: AvailSuppression | undefined;

  /**
   * The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see [Bumpers](https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).
   *
   * @public
   */
  Bumper?: Bumper | undefined;

  /**
   * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
   *
   * @public
   */
  CdnConfiguration?: CdnConfiguration | undefined;

  /**
   * The player parameters and aliases used as dynamic variables during session initialization. For more information, see [Domain Variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domains.html).
   *
   * @public
   */
  ConfigurationAliases?: Record<string, Record<string, string>> | undefined;

  /**
   * The configuration for DASH content.
   *
   * @public
   */
  DashConfiguration?: DashConfiguration | undefined;

  /**
   * The configuration for HLS content.
   *
   * @public
   */
  HlsConfiguration?: HlsConfiguration | undefined;

  /**
   * The setting that controls whether players can use stitched or guided ad insertion. The default, `STITCHED_ONLY`, forces all player sessions to use stitched (server-side) ad insertion. Choosing `PLAYER_SELECT` allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.
   *
   * @public
   */
  InsertionMode?: InsertionMode | undefined;

  /**
   * The configuration for pre-roll ad insertion.
   *
   * @public
   */
  LivePreRollConfiguration?: LivePreRollConfiguration | undefined;

  /**
   * The configuration that defines where AWS Elemental MediaTailor sends logs for the playback configuration.
   *
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
   *
   * @public
   */
  ManifestProcessingRules?: ManifestProcessingRules | undefined;

  /**
   * The identifier for the playback configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to *ad replacement* in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see [Ad Behavior in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
   *
   * @public
   */
  PersonalizationThresholdSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the playback configuration.
   *
   * @public
   */
  PlaybackConfigurationArn?: string | undefined;

  /**
   * The playback endpoint prefix associated with the playback configuration.
   *
   * @public
   */
  PlaybackEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) playback endpoint prefix associated with the playback configuration.
   *
   * @public
   */
  DualStackPlaybackEndpointPrefix?: string | undefined;

  /**
   * The session initialization endpoint prefix associated with the playback configuration.
   *
   * @public
   */
  SessionInitializationEndpointPrefix?: string | undefined;

  /**
   * The dual-stack (IPv4 and IPv6) session initialization endpoint prefix associated with the playback configuration.
   *
   * @public
   */
  DualStackSessionInitializationEndpointPrefix?: string | undefined;

  /**
   * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.
   *
   * @public
   */
  SlateAdUrl?: string | undefined;

  /**
   * The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
   *
   * @public
   */
  TranscodeProfileName?: string | undefined;

  /**
   * The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.
   *
   * @public
   */
  VideoContentSourceUrl?: string | undefined;

  /**
   * The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads.
   *
   * @public
   */
  AdConditioningConfiguration?: AdConditioningConfiguration | undefined;

  /**
   * The configuration for customizing HTTP requests to the ad decision server (ADS). This includes settings for request method, headers, body content, and compression options.
   *
   * @public
   */
  AdDecisionServerConfiguration?: AdDecisionServerConfiguration | undefined;

  /**
   * Configuration for Yield Optimization, which fills unsold ad inventory in ad breaks with programmatic ads from Amazon Publisher Services (APS).
   *
   * @public
   */
  YieldOptimizationConfiguration?: YieldOptimizationConfiguration | undefined;

  /**
   * A map of lifecycle hook event names to function identifiers. The function mapping specifies which function MediaTailor executes at each lifecycle hook during ad insertion. Valid keys are `PRE_SESSION_INITIALIZATION`, `PRE_ADS_REQUEST`, `POST_ADS_RESPONSE`, and `PRE_MANIFEST_INSERTION`. For more information, see [Functions lifecycle hooks](https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-hooks.html) in the *MediaTailor User Guide*.
   *
   * @public
   */
  FunctionMapping?: Partial<Record<EventName, string>> | undefined;

  /**
   * The timeout settings for ad decision server interactions. These settings control how long MediaTailor waits for ADS responses and the total time budget for ad personalization across live, VOD, and prefetch workflows.
   *
   * @public
   */
  AdsPersonalizationTimeouts?: AdsPersonalizationTimeouts | undefined;

  /**
   * The concurrency settings for ad decision server interactions. These settings control how many simultaneous ADS requests MediaTailor makes per manifest request.
   *
   * @public
   */
  AdsPersonalizationConcurrency?: AdsPersonalizationConcurrency | undefined;

  /**
   * The beaconing configuration for this playback configuration, which controls whether MediaTailor includes beacons of its own in the ad tracking response.
   *
   * @public
   */
  BeaconingConfiguration?: BeaconingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSourceLocationRequest {
  /**
   * Access configuration parameters. Configures the type of authentication used to access content from your source location.
   *
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * The optional configuration for the host server that serves segments.
   *
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * The HTTP configuration for the source location.
   *
   * @public
   */
  HttpConfiguration: HttpConfiguration | undefined;

  /**
   * A list of the segment delivery configurations associated with this resource.
   *
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName: string | undefined;
}

/**
 * @public
 */
export interface UpdateSourceLocationResponse {
  /**
   * Access configuration parameters. Configures the type of authentication used to access content from your source location.
   *
   * @public
   */
  AccessConfiguration?: AccessConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the source location.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp that indicates when the source location was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The optional configuration for the host server that serves segments.
   *
   * @public
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration | undefined;

  /**
   * The HTTP configuration for the source location.
   *
   * @public
   */
  HttpConfiguration?: HttpConfiguration | undefined;

  /**
   * The timestamp that indicates when the source location was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The segment delivery configurations for the source location. For information about MediaTailor configurations, see [Working with configurations in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html).
   *
   * @public
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[] | undefined;

  /**
   * The name of the source location.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
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
   * The Amazon Resource Name (ARN) associated with the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
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
   * The Amazon Resource Name (ARN) of the resource to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys associated with the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateVodSourceRequest {
  /**
   * A list of HTTP package configurations for the VOD source on this account.
   *
   * @public
   */
  HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;

  /**
   * The name of the source location associated with this VOD Source.
   *
   * @public
   */
  SourceLocationName: string | undefined;

  /**
   * The name of the VOD source.
   *
   * @public
   */
  VodSourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateVodSourceResponse {
  /**
   * The Amazon Resource Name (ARN) associated with the VOD source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp that indicates when the VOD source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A list of HTTP package configurations for the VOD source on this account.
   *
   * @public
   */
  HttpPackageConfigurations?: HttpPackageConfiguration[] | undefined;

  /**
   * The timestamp that indicates when the VOD source was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name of the source location associated with the VOD source.
   *
   * @public
   */
  SourceLocationName?: string | undefined;

  /**
   * The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name of the VOD source.
   *
   * @public
   */
  VodSourceName?: string | undefined;
}
