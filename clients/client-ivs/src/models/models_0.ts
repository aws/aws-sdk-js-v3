// smithy-typescript generated code
import type {
  ChannelLatencyMode,
  ChannelType,
  ContainerFormat,
  FailoverSlateConfigurationState,
  MultitrackMaximumResolution,
  MultitrackPolicy,
  RecordingConfigurationState,
  RecordingMode,
  RenditionConfigurationRendition,
  RenditionConfigurationRenditionSelection,
  StreamHealth,
  StreamState,
  ThumbnailConfigurationResolution,
  ThumbnailConfigurationStorage,
  TranscodePreset,
} from "./enums";

/**
 * Object specifying a configuration for integration with an AWS Elemental MediaTailor (EMT).
 *
 * @public
 */
export interface MediaTailorPlaybackConfiguration {
  /**
   * ARN of the customer-created EMT PlaybackConfiguration resource in the same region and account.
   *
   * @public
   */
  playbackConfigurationArn?: string | undefined;
}

/**
 * Configuration for the post-roll ad break to use for this ad configuration.
 *
 * @public
 */
export interface PostRollConfiguration {
  /**
   * Duration of the post-roll ad break, in seconds.
   *
   * @public
   */
  durationSeconds: number | undefined;

  /**
   * Whether the post-roll ad configuration is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * Object specifying a configuration for a server-side advertising insertion (which can be triggered with the operation).
 *
 * @public
 */
export interface AdConfiguration {
  /**
   * Ad configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Ad configuration name. Defaults to “”.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration. To select a different configuration per viewing session, see [Generate and Sign IVS Playback Tokens](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/private-channels-generate-tokens.html).
   *
   * @public
   */
  mediaTailorPlaybackConfigurations: MediaTailorPlaybackConfiguration[] | undefined;

  /**
   * Configuration for the post-roll ad break to use for this ad configuration.
   *
   * @public
   */
  postRollConfiguration?: PostRollConfiguration | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Summary information about an ad configuration.
 *
 * @public
 */
export interface AdConfigurationSummary {
  /**
   * Ad configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Ad configuration name. Defaults to “”.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration. To select a different configuration per viewing session, see [Generate and Sign IVS Playback Tokens](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/private-channels-generate-tokens.html).
   *
   * @public
   */
  mediaTailorPlaybackConfigurations: MediaTailorPlaybackConfiguration[] | undefined;

  /**
   * Configuration for the post-roll ad break to use for this ad configuration.
   *
   * @public
   */
  postRollConfiguration?: PostRollConfiguration | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetChannelRequest {
  /**
   * Array of ARNs, one per channel.
   *
   * @public
   */
  arns: string[] | undefined;
}

/**
 * A complex type that specifies multitrack input configuration.
 *
 * @public
 */
export interface MultitrackInputConfiguration {
  /**
   * Indicates whether multitrack input is enabled. Can be set to `true` only if channel type is `STANDARD`. Setting `enabled` to `true` with any other channel type will cause an exception. If `true`, then `policy`, `maximumResolution`, and `containerFormat` are required, and `containerFormat` must be set to `FRAGMENTED_MP4`. Default: `false`.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * Indicates whether multitrack input is allowed or required. Required if `enabled` is `true`.
   *
   * @public
   */
  policy?: MultitrackPolicy | undefined;

  /**
   * Maximum resolution for multitrack input. Required if `enabled` is `true`.
   *
   * @public
   */
  maximumResolution?: MultitrackMaximumResolution | undefined;
}

/**
 * Specifies information needed to stream using the SRT protocol.
 *
 * @public
 */
export interface Srt {
  /**
   * The endpoint to be used when streaming with IVS using the SRT protocol.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * Auto-generated passphrase to enable encryption. This field is applicable only if the end user has *not* enabled the `insecureIngest` option for the channel.
   *
   * @public
   */
  passphrase?: string | undefined;
}

/**
 * Object specifying a channel.
 *
 * @public
 */
export interface Channel {
  /**
   * Channel ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Channel name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Channel latency mode. Use `NORMAL` to broadcast and deliver live video up to Full HD. Use `LOW` for near-real-time interaction with viewers. Default: `LOW`.
   *
   * @public
   */
  latencyMode?: ChannelLatencyMode | undefined;

  /**
   * Channel type, which determines the allowable resolution and bitrate. *If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.* Default: `STANDARD`. For details, see [Channel Types](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/channel-types.html).
   *
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording. Default: "" (empty string, recording is disabled).
   *
   * @public
   */
  recordingConfigurationArn?: string | undefined;

  /**
   * Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
   *
   * @public
   */
  ingestEndpoint?: string | undefined;

  /**
   * Channel playback URL.
   *
   * @public
   */
  playbackUrl?: string | undefined;

  /**
   * Whether the channel is private (enabled for playback authorization). Default: `false`.
   *
   * @public
   */
  authorized?: boolean | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Whether the channel allows insecure RTMP ingest. Default: `false`.
   *
   * @public
   */
  insecureIngest?: boolean | undefined;

  /**
   * Optional transcode preset for the channel. This is selectable only for `ADVANCED_HD` and `ADVANCED_SD` channel types. For those channel types, the default `preset` is `HIGHER_BANDWIDTH_DELIVERY`. For other channel types (`BASIC` and `STANDARD`), `preset` is the empty string (`""`).
   *
   * @public
   */
  preset?: TranscodePreset | undefined;

  /**
   * Specifies the endpoint and optional passphrase for streaming with the SRT protocol.
   *
   * @public
   */
  srt?: Srt | undefined;

  /**
   * Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction. Default: "" (empty string, no playback restriction policy is applied).
   *
   * @public
   */
  playbackRestrictionPolicyArn?: string | undefined;

  /**
   * Object specifying multitrack input configuration. Default: no multitrack input configuration is specified.
   *
   * @public
   */
  multitrackInputConfiguration?: MultitrackInputConfiguration | undefined;

  /**
   * Indicates which content-packaging format is used (MPEG-TS or fMP4). If `multitrackInputConfiguration` is specified and `enabled` is `true`, then `containerFormat` is required and must be set to `FRAGMENTED_MP4`. Otherwise, `containerFormat` may be set to `TS` or `FRAGMENTED_MP4`. Default: `TS`.
   *
   * @public
   */
  containerFormat?: ContainerFormat | undefined;

  /**
   * ARN of the ad configuration associated with the channel.
   *
   * @public
   */
  adConfigurationArn?: string | undefined;

  /**
   * Failover-slate-configuration ARN. A valid ARN value here both specifies the ARN and enables failover slate. Default: "" (empty string, no failover slate configuration is applied).
   *
   * @public
   */
  failoverSlateConfigurationArn?: string | undefined;
}

/**
 * Error related to a specific channel, specified by its ARN.
 *
 * @public
 */
export interface BatchError {
  /**
   * ARN of an IVS resource; e.g., channel.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Error code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Error message, determined by the application.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetChannelResponse {
  /**
   * See [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * See [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * See [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) in the MDN Web Docs.
   *
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * See [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * See [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * See [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * See [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  channels?: Channel[] | undefined;

  /**
   * Each error object is related to a specific ARN in the request.
   *
   * @public
   */
  errors?: BatchError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetStreamKeyRequest {
  /**
   * Array of ARNs, one per stream key.
   *
   * @public
   */
  arns: string[] | undefined;
}

/**
 * Object specifying a stream key.
 *
 * @public
 */
export interface StreamKey {
  /**
   * Stream-key ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Stream-key value.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * Channel ARN for the stream.
   *
   * @public
   */
  channelArn?: string | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetStreamKeyResponse {
  /**
   * See [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * See [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * See [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) in the MDN Web Docs.
   *
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * See [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * See [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * See [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * See [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  streamKeys?: StreamKey[] | undefined;

  /**
   * @public
   */
  errors?: BatchError[] | undefined;
}

/**
 * A viewer session to revoke in the call to BatchStartViewerSessionRevocation.
 *
 * @public
 */
export interface BatchStartViewerSessionRevocationViewerSession {
  /**
   * The ARN of the channel associated with the viewer session to revoke.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The ID of the viewer associated with the viewer session to revoke. Do not use this field for personally identifying, confidential, or sensitive information.
   *
   * @public
   */
  viewerId: string | undefined;

  /**
   * An optional filter on which versions of the viewer session to revoke. All versions less than or equal to the specified version will be revoked. Default: 0.
   *
   * @public
   */
  viewerSessionVersionsLessThanOrEqualTo?: number | undefined;
}

/**
 * @public
 */
export interface BatchStartViewerSessionRevocationRequest {
  /**
   * Array of viewer sessions, one per channel-ARN and viewer-ID pair.
   *
   * @public
   */
  viewerSessions: BatchStartViewerSessionRevocationViewerSession[] | undefined;
}

/**
 * Error for a request in the batch for BatchStartViewerSessionRevocation. Each error is related to a specific channel-ARN and viewer-ID pair.
 *
 * @public
 */
export interface BatchStartViewerSessionRevocationError {
  /**
   * Channel ARN.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The ID of the viewer session to revoke.
   *
   * @public
   */
  viewerId: string | undefined;

  /**
   * Error code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Error message, determined by the application.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchStartViewerSessionRevocationResponse {
  /**
   * See [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * See [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * See [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) in the MDN Web Docs.
   *
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * See [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * See [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * See [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * See [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * Each error object is related to a specific `channelArn` and `viewerId` pair in the request.
   *
   * @public
   */
  errors?: BatchStartViewerSessionRevocationError[] | undefined;
}

/**
 * @public
 */
export interface CreateAdConfigurationRequest {
  /**
   * Ad configuration name. Defaults to “”.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration. To select a different configuration per viewing session, see [Generate and Sign IVS Playback Tokens](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/private-channels-generate-tokens.html).
   *
   * @public
   */
  mediaTailorPlaybackConfigurations: MediaTailorPlaybackConfiguration[] | undefined;

  /**
   * Configuration for the post-roll ad break to use for this ad configuration. Default: disabled (`enabled` set to false, `durationSeconds` set to 15).
   *
   * @public
   */
  postRollConfiguration?: PostRollConfiguration | undefined;

  /**
   * Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAdConfigurationResponse {
  /**
   * @public
   */
  adConfiguration: AdConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * Channel name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Channel latency mode. Use `NORMAL` to broadcast and deliver live video up to Full HD. Use `LOW` for near-real-time interaction with viewers. Default: `LOW`.
   *
   * @public
   */
  latencyMode?: ChannelLatencyMode | undefined;

  /**
   * Channel type, which determines the allowable resolution and bitrate. *If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.* Default: `STANDARD`. For details, see [Channel Types](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/channel-types.html).
   *
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * Whether the channel is private (enabled for playback authorization). Default: `false`.
   *
   * @public
   */
  authorized?: boolean | undefined;

  /**
   * Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording. Default: "" (empty string, recording is disabled).
   *
   * @public
   */
  recordingConfigurationArn?: string | undefined;

  /**
   * Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Whether the channel allows insecure RTMP and SRT ingest. Default: `false`.
   *
   * @public
   */
  insecureIngest?: boolean | undefined;

  /**
   * Optional transcode preset for the channel. This is selectable only for `ADVANCED_HD` and `ADVANCED_SD` channel types. For those channel types, the default `preset` is `HIGHER_BANDWIDTH_DELIVERY`. For other channel types (`BASIC` and `STANDARD`), `preset` is the empty string (`""`).
   *
   * @public
   */
  preset?: TranscodePreset | undefined;

  /**
   * Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction. Default: "" (empty string, no playback restriction policy is applied).
   *
   * @public
   */
  playbackRestrictionPolicyArn?: string | undefined;

  /**
   * Object specifying multitrack input configuration. Default: no multitrack input configuration is specified.
   *
   * @public
   */
  multitrackInputConfiguration?: MultitrackInputConfiguration | undefined;

  /**
   * Indicates which content-packaging format is used (MPEG-TS or fMP4). If `multitrackInputConfiguration` is specified and `enabled` is `true`, then `containerFormat` is required and must be set to `FRAGMENTED_MP4`. Otherwise, `containerFormat` may be set to `TS` or `FRAGMENTED_MP4`. Default: `TS`.
   *
   * @public
   */
  containerFormat?: ContainerFormat | undefined;

  /**
   * ARN of the ad configuration associated with the channel.
   *
   * @public
   */
  adConfigurationArn?: string | undefined;

  /**
   * Failover-slate-configuration ARN. A valid ARN value here both specifies the ARN and enables failover slate. Default: "" (empty string, no failover slate configuration is applied).
   *
   * @public
   */
  failoverSlateConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * @public
   */
  channel?: Channel | undefined;

  /**
   * @public
   */
  streamKey?: StreamKey | undefined;
}

/**
 * @public
 */
export interface CreateFailoverSlateConfigurationRequest {
  /**
   * Failover-slate-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Number of seconds of ingest interruption before the failover slate activates. Default: `3`.
   *
   * @public
   */
  activationThresholdSeconds?: number | undefined;

  /**
   * Minimum number of seconds that the failover slate displays after activation. Default: `3`.
   *
   * @public
   */
  minSlateDisplaySeconds?: number | undefined;

  /**
   * Maximum number of seconds that the failover slate displays. Default: `60`.
   *
   * @public
   */
  maxSlateDisplaySeconds?: number | undefined;

  /**
   * Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Object specifying a failover slate configuration.
 *
 * @public
 */
export interface FailoverSlateConfiguration {
  /**
   * Failover-slate-configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Failover-slate-configuration name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Number of seconds of ingest interruption before the failover slate activates. Default: `3`.
   *
   * @public
   */
  activationThresholdSeconds?: number | undefined;

  /**
   * Minimum number of seconds that the failover slate displays after activation. Default: `3`.
   *
   * @public
   */
  minSlateDisplaySeconds?: number | undefined;

  /**
   * Maximum number of seconds that the failover slate displays. Default: `60`.
   *
   * @public
   */
  maxSlateDisplaySeconds?: number | undefined;

  /**
   * Current state of the failover slate configuration.
   *
   * @public
   */
  state: FailoverSlateConfigurationState | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFailoverSlateConfigurationResponse {
  /**
   * The failover slate configuration that was created.
   *
   * @public
   */
  failoverSlateConfiguration: FailoverSlateConfiguration | undefined;
}

/**
 * @public
 */
export interface CreatePlaybackRestrictionPolicyRequest {
  /**
   * A list of country codes that control geoblocking restriction. Allowed values are the officially assigned [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes. Default: All countries (an empty array).
   *
   * @public
   */
  allowedCountries?: string[] | undefined;

  /**
   * A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin). Default: All origins (an empty array).
   *
   * @public
   */
  allowedOrigins?: string[] | undefined;

  /**
   * Whether channel playback is constrained by origin site. Default: `false`.
   *
   * @public
   */
  enableStrictOriginEnforcement?: boolean | undefined;

  /**
   * Playback-restriction-policy name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An object representing a policy to constrain playback by country and/or origin sites.
 *
 * @public
 */
export interface PlaybackRestrictionPolicy {
  /**
   * Playback-restriction-policy ARN
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A list of country codes that control geoblocking restriction. Allowed values are the officially assigned [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes. Default: All countries (an empty array).
   *
   * @public
   */
  allowedCountries: string[] | undefined;

  /**
   * A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin). Default: All origins (an empty array).
   *
   * @public
   */
  allowedOrigins: string[] | undefined;

  /**
   * Whether channel playback is constrained by origin site. Default: `false`.
   *
   * @public
   */
  enableStrictOriginEnforcement?: boolean | undefined;

  /**
   * Playback-restriction-policy name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePlaybackRestrictionPolicyResponse {
  /**
   * @public
   */
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy | undefined;
}

/**
 * A complex type that describes an S3 location where recorded videos will be stored.
 *
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * Location (S3 bucket name) where recorded videos will be stored.
   *
   * @public
   */
  bucketName: string | undefined;
}

/**
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
 *
 * @public
 */
export interface DestinationConfiguration {
  /**
   * An S3 destination configuration where recorded videos will be stored.
   *
   * @public
   */
  s3?: S3DestinationConfiguration | undefined;
}

/**
 * Object that describes which renditions should be recorded for a stream.
 *
 * @public
 */
export interface RenditionConfiguration {
  /**
   * Indicates which set of renditions are recorded for a stream. For `BASIC` channels, the `CUSTOM` value has no effect. If `CUSTOM` is specified, a set of renditions must be specified in the `renditions` field. Default: `ALL`.
   *
   * @public
   */
  renditionSelection?: RenditionConfigurationRenditionSelection | undefined;

  /**
   * Indicates which renditions are recorded for a stream, if `renditionSelection` is `CUSTOM`; otherwise, this field is irrelevant. The selected renditions are recorded if they are available during the stream. If a selected rendition is unavailable, the best available rendition is recorded. For details on the resolution dimensions of each rendition, see [Auto-Record to Amazon S3](https://docs.aws.amazon.com/ivs/latest/userguide/record-to-s3.html).
   *
   * @public
   */
  renditions?: RenditionConfigurationRendition[] | undefined;
}

/**
 * An object representing a configuration of thumbnails for recorded video.
 *
 * @public
 */
export interface ThumbnailConfiguration {
  /**
   * Thumbnail recording mode. Default: `INTERVAL`.
   *
   * @public
   */
  recordingMode?: RecordingMode | undefined;

  /**
   * The targeted thumbnail-generation interval in seconds. This is configurable (and required) only if `recordingMode` is `INTERVAL`. Default: 60.
   *
   * **Important:** For the `BASIC` channel type, or the `STANDARD` channel type with multitrack input, setting a value for `targetIntervalSeconds` does not guarantee that thumbnails are generated at the specified interval. For thumbnails to be generated at the `targetIntervalSeconds` interval, the `IDR/Keyframe` value for the input video must be less than the `targetIntervalSeconds` value. See [Amazon IVS Streaming Configuration](https://docs.aws.amazon.com/ivs/latest/userguide/streaming-config.html) for information on setting `IDR/Keyframe` to the recommended value in video-encoder settings.
   *
   * @public
   */
  targetIntervalSeconds?: number | undefined;

  /**
   * Indicates the desired resolution of recorded thumbnails. Thumbnails are recorded at the selected resolution if the corresponding rendition is available during the stream; otherwise, they are recorded at source resolution. For more information about resolution values and their corresponding height and width dimensions, see [Auto-Record to Amazon S3](https://docs.aws.amazon.com/ivs/latest/userguide/record-to-s3.html). Default: Null (source resolution is returned).
   *
   * @public
   */
  resolution?: ThumbnailConfigurationResolution | undefined;

  /**
   * Indicates the format in which thumbnails are recorded. `SEQUENTIAL` records all generated thumbnails in a serial manner, to the media/thumbnails directory. `LATEST` saves the latest thumbnail in media/latest_thumbnail/thumb.jpg and overwrites it at the interval specified by `targetIntervalSeconds`. You can enable both `SEQUENTIAL` and `LATEST`. Default: `SEQUENTIAL`.
   *
   * @public
   */
  storage?: ThumbnailConfigurationStorage[] | undefined;
}

/**
 * @public
 */
export interface CreateRecordingConfigurationRequest {
  /**
   * Recording-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a destination configuration for where recorded video will be stored.
   *
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A complex type that allows you to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session.
   *
   * @public
   */
  thumbnailConfiguration?: ThumbnailConfiguration | undefined;

  /**
   * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.
   *
   * @public
   */
  recordingReconnectWindowSeconds?: number | undefined;

  /**
   * Object that describes which renditions should be recorded for a stream.
   *
   * @public
   */
  renditionConfiguration?: RenditionConfiguration | undefined;
}

/**
 * An object representing a configuration to record a channel stream.
 *
 * @public
 */
export interface RecordingConfiguration {
  /**
   * Recording-configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Recording-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains information about where recorded video will be stored.
   *
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * Indicates the current state of the recording configuration. When the state is `ACTIVE`, the configuration is ready for recording a channel stream.
   *
   * @public
   */
  state: RecordingConfigurationState | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A complex type that allows you to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session.
   *
   * @public
   */
  thumbnailConfiguration?: ThumbnailConfiguration | undefined;

  /**
   * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.
   *
   * @public
   */
  recordingReconnectWindowSeconds?: number | undefined;

  /**
   * Object that describes which renditions should be recorded for a stream.
   *
   * @public
   */
  renditionConfiguration?: RenditionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRecordingConfigurationResponse {
  /**
   *
   * @public
   */
  recordingConfiguration?: RecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateStreamKeyRequest {
  /**
   * ARN of the channel for which to create the stream key.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateStreamKeyResponse {
  /**
   * Stream key used to authenticate an RTMPS stream for ingestion.
   *
   * @public
   */
  streamKey?: StreamKey | undefined;
}

/**
 * @public
 */
export interface DeleteAdConfigurationRequest {
  /**
   * ARN of the ad configuration to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * ARN of the channel to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFailoverSlateConfigurationRequest {
  /**
   * ARN of the failover slate configuration to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaybackKeyPairRequest {
  /**
   * ARN of the key pair to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaybackKeyPairResponse {}

/**
 * @public
 */
export interface DeletePlaybackRestrictionPolicyRequest {
  /**
   * ARN of the playback restriction policy to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecordingConfigurationRequest {
  /**
   * ARN of the recording configuration to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamKeyRequest {
  /**
   * ARN of the stream key to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetAdConfigurationRequest {
  /**
   * ARN of the ad configuration to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetAdConfigurationResponse {
  /**
   * @public
   */
  adConfiguration?: AdConfiguration | undefined;
}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * ARN of the channel for which the configuration is to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * @public
   */
  channel?: Channel | undefined;
}

/**
 * @public
 */
export interface GetFailoverSlateConfigurationRequest {
  /**
   * ARN of the failover slate configuration to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetFailoverSlateConfigurationResponse {
  /**
   * The failover slate configuration that was retrieved.
   *
   * @public
   */
  failoverSlateConfiguration: FailoverSlateConfiguration | undefined;
}

/**
 * @public
 */
export interface GetPlaybackKeyPairRequest {
  /**
   * ARN of the key pair to be returned.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * A key pair used to sign and validate a playback authorization token.
 *
 * @public
 */
export interface PlaybackKeyPair {
  /**
   * Key-pair ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Playback-key-pair name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Key-pair identifier.
   *
   * @public
   */
  fingerprint?: string | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPlaybackKeyPairResponse {
  /**
   *
   * @public
   */
  keyPair?: PlaybackKeyPair | undefined;
}

/**
 * @public
 */
export interface GetPlaybackRestrictionPolicyRequest {
  /**
   * ARN of the playback restriction policy to be returned.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetPlaybackRestrictionPolicyResponse {
  /**
   * @public
   */
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy | undefined;
}

/**
 * @public
 */
export interface GetRecordingConfigurationRequest {
  /**
   * ARN of the recording configuration to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetRecordingConfigurationResponse {
  /**
   *
   * @public
   */
  recordingConfiguration?: RecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetStreamRequest {
  /**
   * Channel ARN for stream to be accessed.
   *
   * @public
   */
  channelArn: string | undefined;
}

/**
 * Specifies a live video stream that has been ingested and distributed.
 *
 * @public
 */
export interface _Stream {
  /**
   * Channel ARN for the stream.
   *
   * @public
   */
  channelArn?: string | undefined;

  /**
   * Unique identifier for a live or previously live stream in the specified channel.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * URL of the master playlist, required by the video player to play the HLS stream.
   *
   * @public
   */
  playbackUrl?: string | undefined;

  /**
   * Time of the stream’s start. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The stream’s state. Do not rely on the `OFFLINE` state, as the API may not return it; instead, a "NotBroadcasting" error will indicate that the stream is not live.
   *
   * @public
   */
  state?: StreamState | undefined;

  /**
   * The stream’s health.
   *
   * @public
   */
  health?: StreamHealth | undefined;

  /**
   * A count of concurrent views of the stream. Typically, a new view appears in `viewerCount` within 15 seconds of when video playback starts and a view is removed from `viewerCount` within 1 minute of when video playback ends. A value of -1 indicates that the request timed out; in this case, retry.
   *
   * @public
   */
  viewerCount?: number | undefined;
}

/**
 * @public
 */
export interface GetStreamResponse {
  /**
   * @public
   */
  stream?: _Stream | undefined;
}

/**
 * @public
 */
export interface GetStreamKeyRequest {
  /**
   * ARN for the stream key to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStreamKeyResponse {
  /**
   *
   * @public
   */
  streamKey?: StreamKey | undefined;
}

/**
 * @public
 */
export interface GetStreamSessionRequest {
  /**
   * ARN of the channel resource
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * Unique identifier for a live or previously live stream in the specified channel. If no `streamId` is provided, this returns the most recent stream session for the channel, if it exists.
   *
   * @public
   */
  streamId?: string | undefined;
}

/**
 * Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in an encoder). This is part of the IngestConfigurations object and the deprecated IngestConfiguration object. It is used for monitoring stream health.
 *
 * @public
 */
export interface AudioConfiguration {
  /**
   * Codec used for the audio encoding.
   *
   * @public
   */
  codec?: string | undefined;

  /**
   * The expected ingest bitrate (bits per second). This is configured in the encoder.
   *
   * @public
   */
  targetBitrate?: number | undefined;

  /**
   * Number of audio samples recorded per second.
   *
   * @public
   */
  sampleRate?: number | undefined;

  /**
   * Number of audio channels.
   *
   * @public
   */
  channels?: number | undefined;

  /**
   * Name of the audio track (if the stream has an audio track). If multitrack is not enabled, this is Track0 (the sole track).
   *
   * @public
   */
  track?: string | undefined;
}

/**
 * Object specifying a stream’s video configuration, as set up by the broadcaster (usually in an encoder). This is part of the IngestConfigurations object and the deprecated IngestConfiguration object. It is used for monitoring stream health.
 *
 * @public
 */
export interface VideoConfiguration {
  /**
   * (Deprecated) Indicates to the decoder the requirements for decoding the stream. For definitions of the valid values, see the H.264 specification. This is populated only when VideoConfiguration is part of the deprecated IngestConfiguration; otherwise, this is an empty string.
   *
   * @public
   */
  avcProfile?: string | undefined;

  /**
   * (Deprecated) Indicates the degree of required decoder performance for a profile. Normally this is set automatically by the encoder. For details, see the H.264 specification. This is populated only when VideoConfiguration is part of the deprecated IngestConfiguration; otherwise, this is an empty string.
   *
   * @public
   */
  avcLevel?: string | undefined;

  /**
   * Codec used for the video encoding.
   *
   * @public
   */
  codec?: string | undefined;

  /**
   * Software or hardware used to encode the video.
   *
   * @public
   */
  encoder?: string | undefined;

  /**
   * The expected ingest bitrate (bits per second). This is configured in the encoder.
   *
   * @public
   */
  targetBitrate?: number | undefined;

  /**
   * The expected ingest framerate. This is configured in the encoder.
   *
   * @public
   */
  targetFramerate?: number | undefined;

  /**
   * Video-resolution height in pixels.
   *
   * @public
   */
  videoHeight?: number | undefined;

  /**
   * Video-resolution width in pixels.
   *
   * @public
   */
  videoWidth?: number | undefined;

  /**
   * Indicates the degree of required decoder performance for a profile. Normally this is set automatically by the encoder. When an AVC codec is used, this field has the same value as `avcLevel`.
   *
   * @public
   */
  level?: string | undefined;

  /**
   * Name of the video track. If multitrack is not enabled, this is Track0 (the sole track).
   *
   * @public
   */
  track?: string | undefined;

  /**
   * Indicates to the decoder the requirements for decoding the stream. When an AVC codec is used, this field has the same value as `avcProfile`.
   *
   * @public
   */
  profile?: string | undefined;
}

/**
 * Object specifying the ingest configuration set up by the broadcaster, usually in an encoder.
 *
 * **Note:** IngestConfiguration is deprecated in favor of IngestConfigurations but retained to ensure backward compatibility. If multitrack is not enabled, IngestConfiguration and IngestConfigurations contain the same data, namely information about Track0 (the sole track). If multitrack is enabled, IngestConfiguration contains data for only the first track (Track0) and IngestConfigurations contains data for all tracks.
 *
 * @public
 */
export interface IngestConfiguration {
  /**
   * Encoder settings for video.
   *
   * @public
   */
  video?: VideoConfiguration | undefined;

  /**
   * Encoder settings for audio.
   *
   * @public
   */
  audio?: AudioConfiguration | undefined;
}

/**
 * Object specifying the ingest configuration set up by the broadcaster, usually in an encoder.
 *
 * **Note:** Use IngestConfigurations instead of IngestConfiguration (which is deprecated). If multitrack is not enabled, IngestConfiguration and IngestConfigurations contain the same data, namely information about Track0 (the sole track). If multitrack is enabled, IngestConfiguration contains data for only the first track (Track0) and IngestConfigurations contains data for all tracks.
 *
 * @public
 */
export interface IngestConfigurations {
  /**
   * Encoder settings for video
   *
   * @public
   */
  videoConfigurations: VideoConfiguration[] | undefined;

  /**
   * Encoder settings for audio.
   *
   * @public
   */
  audioConfigurations: AudioConfiguration[] | undefined;
}

/**
 * Object specifying a stream’s events. For a list of events, see [Using Amazon EventBridge with Amazon IVS](https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html).
 *
 * @public
 */
export interface StreamEvent {
  /**
   * Name that identifies the stream event within a `type`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Logical group for certain events.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * Time when the event occurred. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * Provides additional details about the stream event. There are several values; the long descriptions are provided in the IVS console but not delivered through the IVS API or EventBridge. Multitrack-related codes are used only for certain Session Ended events.
   *
   * - `MultitrackInputNotAllowed` — The broadcast client attempted to connect with multitrack input, but multitrack input was not enabled on the channel. Check your broadcast software settings or set `MultitrackInputConfiguration.Policy` to `ALLOW` or `REQUIRE`.
   * - `MultitrackInputRequired` — The broadcast client attempted to connect with single-track video, but multitrack input is required on this channel. Enable multitrack video in your broadcast software or configure the channel’s `MultitrackInputConfiguration.Policy` to `ALLOW`.
   * - `InvalidGetClientConfigurationStreamKey` — The broadcast client attempted to connect with an invalid, expired, or corrupt stream key.
   * - `GetClientConfigurationStreamKeyRequired` — The broadcast client attempted to stream multitrack video without providing an authenticated stream key from GetClientConfiguration.
   * - `InvalidMultitrackInputTrackCount` — The multitrack input stream contained an invalid number of tracks.
   * - `InvalidMultitrackInputVideoTrackMediaProperties` — The multitrack input stream contained one or more tracks with an invalid codec, resolution, bitrate, or framerate.
   * - `StreamTakeoverMediaMismatch` — The broadcast client attempted to take over with different media properties (e.g., codec, resolution, or video track type) from the original stream.
   * - `StreamTakeoverInvalidPriority` — The broadcast client attempted a takeover with either a priority integer value equal to or lower than the original stream's value or a value outside the allowed range of 1 to 2,147,483,647.
   *
   *   `StreamTakeoverLimitBreached` — The broadcast client reached the maximum allowed takeover attempts for this stream.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * Object that captures the Amazon IVS configuration that the customer provisioned, the ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events it encountered.
 *
 * @public
 */
export interface StreamSession {
  /**
   * Unique identifier for a live or previously live stream in the specified channel.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * Time when the channel went live. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Time when the channel went offline. This is an ISO 8601 timestamp; *note that this is returned as a string*. For live streams, this is `NULL`.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The properties of the channel at the time of going live.
   *
   * @public
   */
  channel?: Channel | undefined;

  /**
   * The properties of the incoming RTMP stream.
   *
   * **Note:** `ingestConfiguration` is deprecated in favor of `ingestConfigurations` but retained to ensure backward compatibility. If multitrack is not enabled, `ingestConfiguration` and `ingestConfigurations` contain the same data, namely information about Track0 (the sole track). If multitrack is enabled, `ingestConfiguration` contains data for only the first track (Track0) and `ingestConfigurations` contains data for all tracks.
   *
   * @public
   */
  ingestConfiguration?: IngestConfiguration | undefined;

  /**
   * The properties of the incoming RTMP stream. If multitrack is enabled, `ingestConfigurations` contains data for all tracks; otherwise, it contains data only for Track0 (the sole track).
   *
   * @public
   */
  ingestConfigurations?: IngestConfigurations | undefined;

  /**
   * The properties of recording the live stream.
   *
   * @public
   */
  recordingConfiguration?: RecordingConfiguration | undefined;

  /**
   * List of Amazon IVS events that the stream encountered. The list is sorted by most recent events and contains up to 500 events. For Amazon IVS events, see [Using Amazon EventBridge with Amazon IVS](https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html).
   *
   * @public
   */
  truncatedEvents?: StreamEvent[] | undefined;

  /**
   * The properties of the failover slate configuration at the time of going live.
   *
   * @public
   */
  failoverSlateConfiguration?: FailoverSlateConfiguration | undefined;
}

/**
 * @public
 */
export interface GetStreamSessionResponse {
  /**
   * List of stream details.
   *
   * @public
   */
  streamSession?: StreamSession | undefined;
}

/**
 * @public
 */
export interface ImportPlaybackKeyPairRequest {
  /**
   * The public portion of a customer-generated key pair.
   *
   * @public
   */
  publicKeyMaterial: string | undefined;

  /**
   * Playback-key-pair name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Any tags provided with the request are added to the playback key pair tags. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ImportPlaybackKeyPairResponse {
  /**
   * @public
   */
  keyPair?: PlaybackKeyPair | undefined;
}

/**
 * @public
 */
export interface InsertAdBreakRequest {
  /**
   * ARN of the channel into which the ad break is inserted.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * Duration of the ad break, in seconds.
   *
   * @public
   */
  durationSeconds: number | undefined;

  /**
   * Caller-specified unique identifier for the ad break to insert into the playlist.
   *
   * @public
   */
  adBreakId?: string | undefined;

  /**
   * Target time at which the ad break starts.
   *
   * @public
   */
  targetStartAt?: Date | undefined;
}

/**
 * @public
 */
export interface InsertAdBreakResponse {
  /**
   * Unique identifier for the ad break that was inserted into the playlist.
   *
   * @public
   */
  adBreakId?: string | undefined;

  /**
   * Target start time for the inserted ad break.
   *
   * @public
   */
  targetStartAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListAdConfigurationsRequest {
  /**
   * The first ad configuration to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of ad configurations to return. Default: your service quota or 100, whichever is smaller.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAdConfigurationsResponse {
  /**
   * List of the matching ad configurations.
   *
   * @public
   */
  adConfigurations: AdConfigurationSummary[] | undefined;

  /**
   * If there are more ad configurations than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * Filters the channel list to match the specified name.
   *
   * @public
   */
  filterByName?: string | undefined;

  /**
   * Filters the channel list to match the specified recording-configuration ARN.
   *
   * @public
   */
  filterByRecordingConfigurationArn?: string | undefined;

  /**
   * Filters the channel list to match the specified policy.
   *
   * @public
   */
  filterByPlaybackRestrictionPolicyArn?: string | undefined;

  /**
   * Filters the channel list to match the specified ad configuration ARN.
   *
   * @public
   */
  filterByAdConfigurationArn?: string | undefined;

  /**
   * Filters the channel list to match the specified failover-slate-configuration ARN.
   *
   * @public
   */
  filterByFailoverSlateConfigurationArn?: string | undefined;

  /**
   * The first channel to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of channels to return. Default: 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a channel.
 *
 * @public
 */
export interface ChannelSummary {
  /**
   * Channel ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Channel name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Channel latency mode. Use `NORMAL` to broadcast and deliver live video up to Full HD. Use `LOW` for near-real-time interaction with viewers. Default: `LOW`.
   *
   * @public
   */
  latencyMode?: ChannelLatencyMode | undefined;

  /**
   * Whether the channel is private (enabled for playback authorization). Default: `false`.
   *
   * @public
   */
  authorized?: boolean | undefined;

  /**
   * Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording. Default: "" (empty string, recording is disabled).
   *
   * @public
   */
  recordingConfigurationArn?: string | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Whether the channel allows insecure RTMP ingest. Default: `false`.
   *
   * @public
   */
  insecureIngest?: boolean | undefined;

  /**
   * Channel type, which determines the allowable resolution and bitrate. *If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.* Default: `STANDARD`. For details, see [Channel Types](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/channel-types.html).
   *
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * Optional transcode preset for the channel. This is selectable only for `ADVANCED_HD` and `ADVANCED_SD` channel types. For those channel types, the default `preset` is `HIGHER_BANDWIDTH_DELIVERY`. For other channel types (`BASIC` and `STANDARD`), `preset` is the empty string (`""`).
   *
   * @public
   */
  preset?: TranscodePreset | undefined;

  /**
   * Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction. Default: "" (empty string, no playback restriction policy is applied).
   *
   * @public
   */
  playbackRestrictionPolicyArn?: string | undefined;

  /**
   * ARN of the ad configuration associated with the channel.
   *
   * @public
   */
  adConfigurationArn?: string | undefined;

  /**
   * Failover-slate-configuration ARN. A valid ARN value here both specifies the ARN and enables failover slate. Default: "" (empty string, no failover slate configuration is applied).
   *
   * @public
   */
  failoverSlateConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * List of the matching channels.
   *
   * @public
   */
  channels: ChannelSummary[] | undefined;

  /**
   * If there are more channels than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFailoverSlateConfigurationsRequest {
  /**
   * The first failover slate configuration to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of failover slate configurations to return. Default: your service quota or 100, whichever is smaller.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a failover slate configuration.
 *
 * @public
 */
export interface FailoverSlateConfigurationSummary {
  /**
   * Failover-slate-configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Failover-slate-configuration name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Number of seconds of ingest interruption before the failover slate activates. Default: `3`.
   *
   * @public
   */
  activationThresholdSeconds?: number | undefined;

  /**
   * Minimum number of seconds that the failover slate displays after activation. Default: `3`.
   *
   * @public
   */
  minSlateDisplaySeconds?: number | undefined;

  /**
   * Maximum number of seconds that the failover slate displays. Default: `60`.
   *
   * @public
   */
  maxSlateDisplaySeconds?: number | undefined;

  /**
   * Current state of the failover slate configuration.
   *
   * @public
   */
  state: FailoverSlateConfigurationState | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListFailoverSlateConfigurationsResponse {
  /**
   * List of the matching failover slate configurations.
   *
   * @public
   */
  failoverSlateConfigurations: FailoverSlateConfigurationSummary[] | undefined;

  /**
   * If there are more failover slate configurations than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlaybackKeyPairsRequest {
  /**
   * The first key pair to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of key pairs to return. Default: your service quota or 100, whichever is smaller.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a playback key pair.
 *
 * @public
 */
export interface PlaybackKeyPairSummary {
  /**
   * Key-pair ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Playback-key-pair name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPlaybackKeyPairsResponse {
  /**
   * List of key pairs.
   *
   * @public
   */
  keyPairs: PlaybackKeyPairSummary[] | undefined;

  /**
   * If there are more key pairs than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlaybackRestrictionPoliciesRequest {
  /**
   * The first policy to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of policies to return. Default: 1.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a PlaybackRestrictionPolicy.
 *
 * @public
 */
export interface PlaybackRestrictionPolicySummary {
  /**
   * Playback-restriction-policy ARN
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A list of country codes that control geoblocking restriction. Allowed values are the officially assigned [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes. Default: All countries (an empty array).
   *
   * @public
   */
  allowedCountries: string[] | undefined;

  /**
   * A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin). Default: All origins (an empty array).
   *
   * @public
   */
  allowedOrigins: string[] | undefined;

  /**
   * Whether channel playback is constrained by origin site. Default: `false`.
   *
   * @public
   */
  enableStrictOriginEnforcement?: boolean | undefined;

  /**
   * Playback-restriction-policy name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPlaybackRestrictionPoliciesResponse {
  /**
   * List of the matching policies.
   *
   * @public
   */
  playbackRestrictionPolicies: PlaybackRestrictionPolicySummary[] | undefined;

  /**
   * If there are more channels than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecordingConfigurationsRequest {
  /**
   * The first recording configuration to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of recording configurations to return. Default: your service quota or 100, whichever is smaller.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a RecordingConfiguration.
 *
 * @public
 */
export interface RecordingConfigurationSummary {
  /**
   * Recording-configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Recording-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains information about where recorded video will be stored.
   *
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * Indicates the current state of the recording configuration. When the state is `ACTIVE`, the configuration is ready for recording a channel stream.
   *
   * @public
   */
  state: RecordingConfigurationState | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListRecordingConfigurationsResponse {
  /**
   * List of the matching recording configurations.
   *
   * @public
   */
  recordingConfigurations: RecordingConfigurationSummary[] | undefined;

  /**
   * If there are more recording configurations than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamKeysRequest {
  /**
   * Channel ARN used to filter the list.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The first stream key to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of streamKeys to return. Default: 1.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a stream key.
 *
 * @public
 */
export interface StreamKeySummary {
  /**
   * Stream-key ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Channel ARN for the stream.
   *
   * @public
   */
  channelArn?: string | undefined;

  /**
   * Tags attached to the resource. Array of 1-50 maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListStreamKeysResponse {
  /**
   * List of stream keys.
   *
   * @public
   */
  streamKeys: StreamKeySummary[] | undefined;

  /**
   * If there are more stream keys than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Object specifying the stream attribute on which to filter.
 *
 * @public
 */
export interface StreamFilters {
  /**
   * The stream’s health.
   *
   * @public
   */
  health?: StreamHealth | undefined;
}

/**
 * @public
 */
export interface ListStreamsRequest {
  /**
   * Filters the stream list to match the specified criterion.
   *
   * @public
   */
  filterBy?: StreamFilters | undefined;

  /**
   * The first stream to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of streams to return. Default: 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a stream.
 *
 * @public
 */
export interface StreamSummary {
  /**
   * Channel ARN for the stream.
   *
   * @public
   */
  channelArn?: string | undefined;

  /**
   * Unique identifier for a live or previously live stream in the specified channel.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * The stream’s state. Do not rely on the `OFFLINE` state, as the API may not return it; instead, a "NotBroadcasting" error will indicate that the stream is not live.
   *
   * @public
   */
  state?: StreamState | undefined;

  /**
   * The stream’s health.
   *
   * @public
   */
  health?: StreamHealth | undefined;

  /**
   * A count of concurrent views of the stream. Typically, a new view appears in `viewerCount` within 15 seconds of when video playback starts and a view is removed from `viewerCount` within 1 minute of when video playback ends. A value of -1 indicates that the request timed out; in this case, retry.
   *
   * @public
   */
  viewerCount?: number | undefined;

  /**
   * Time of the stream’s start. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListStreamsResponse {
  /**
   * List of streams.
   *
   * @public
   */
  streams: StreamSummary[] | undefined;

  /**
   * If there are more streams than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamSessionsRequest {
  /**
   * Channel ARN used to filter the list.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The first stream to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of streams to return. Default: 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a stream session.
 *
 * @public
 */
export interface StreamSessionSummary {
  /**
   * Unique identifier for a live or previously live stream in the specified channel.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * Time when the channel went live. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Time when the channel went offline. This is an ISO 8601 timestamp; *note that this is returned as a string*. For live streams, this is `NULL`.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * If `true`, this stream encountered a quota breach or failure.
   *
   * @public
   */
  hasErrorEvent?: boolean | undefined;
}

/**
 * @public
 */
export interface ListStreamSessionsResponse {
  /**
   * List of stream sessions.
   *
   * @public
   */
  streamSessions: StreamSessionSummary[] | undefined;

  /**
   * If there are more streams than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource to be retrieved. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutMetadataRequest {
  /**
   * ARN of the channel into which metadata is inserted. This channel must have an active stream.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * Metadata to insert into the stream. Maximum: 1 KB per request.
   *
   * @public
   */
  metadata: string | undefined;
}

/**
 * @public
 */
export interface StartViewerSessionRevocationRequest {
  /**
   * The ARN of the channel associated with the viewer session to revoke.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The ID of the viewer associated with the viewer session to revoke. Do not use this field for personally identifying, confidential, or sensitive information.
   *
   * @public
   */
  viewerId: string | undefined;

  /**
   * An optional filter on which versions of the viewer session to revoke. All versions less than or equal to the specified version will be revoked. Default: 0.
   *
   * @public
   */
  viewerSessionVersionsLessThanOrEqualTo?: number | undefined;
}

/**
 * @public
 */
export interface StartViewerSessionRevocationResponse {}

/**
 * @public
 */
export interface StopStreamRequest {
  /**
   * ARN of the channel for which the stream is to be stopped.
   *
   * @public
   */
  channelArn: string | undefined;
}

/**
 * @public
 */
export interface StopStreamResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN of the resource for which tags are to be added or updated. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tags to be added or updated. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * ARN of the resource for which tags are to be removed. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tag keys (strings) for the tags to be removed. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAdConfigurationRequest {
  /**
   * ARN of the ad configuration to be updated.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Ad configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration. To select a different configuration per viewing session, see [Generate and Sign IVS Playback Tokens](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/private-channels-generate-tokens.html).
   *
   * @public
   */
  mediaTailorPlaybackConfigurations?: MediaTailorPlaybackConfiguration[] | undefined;

  /**
   * Configuration for the post-roll ad break to use for this ad configuration.
   *
   * @public
   */
  postRollConfiguration?: PostRollConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAdConfigurationResponse {
  /**
   * Object specifying the updated ad configuration.
   *
   * @public
   */
  adConfiguration: AdConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * ARN of the channel to be updated.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Channel name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Channel latency mode. Use `NORMAL` to broadcast and deliver live video up to Full HD. Use `LOW` for near-real-time interaction with viewers.
   *
   * @public
   */
  latencyMode?: ChannelLatencyMode | undefined;

  /**
   * Channel type, which determines the allowable resolution and bitrate. *If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.* Default: `STANDARD`. For details, see [Channel Types](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/channel-types.html).
   *
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * Whether the channel is private (enabled for playback authorization).
   *
   * @public
   */
  authorized?: boolean | undefined;

  /**
   * Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording. If this is set to an empty string, recording is disabled.
   *
   * @public
   */
  recordingConfigurationArn?: string | undefined;

  /**
   * Whether the channel allows insecure RTMP and SRT ingest. Default: `false`.
   *
   * @public
   */
  insecureIngest?: boolean | undefined;

  /**
   * Optional transcode preset for the channel. This is selectable only for `ADVANCED_HD` and `ADVANCED_SD` channel types. For those channel types, the default `preset` is `HIGHER_BANDWIDTH_DELIVERY`. For other channel types (`BASIC` and `STANDARD`), `preset` is the empty string (`""`).
   *
   * @public
   */
  preset?: TranscodePreset | undefined;

  /**
   * Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction. If this is set to an empty string, playback restriction policy is disabled.
   *
   * @public
   */
  playbackRestrictionPolicyArn?: string | undefined;

  /**
   * Object specifying multitrack input configuration. Default: no multitrack input configuration is specified.
   *
   * @public
   */
  multitrackInputConfiguration?: MultitrackInputConfiguration | undefined;

  /**
   * Indicates which content-packaging format is used (MPEG-TS or fMP4). If `multitrackInputConfiguration` is specified and `enabled` is `true`, then `containerFormat` is required and must be set to `FRAGMENTED_MP4`. Otherwise, `containerFormat` may be set to `TS` or `FRAGMENTED_MP4`. Default: `TS`.
   *
   * @public
   */
  containerFormat?: ContainerFormat | undefined;

  /**
   * ARN of the ad configuration associated with the channel.
   *
   * @public
   */
  adConfigurationArn?: string | undefined;

  /**
   * Failover-slate-configuration ARN. A valid ARN value here both specifies the ARN and enables failover slate. If this is set to an empty string, failover slate configuration is disabled.
   *
   * @public
   */
  failoverSlateConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * Object specifying the updated channel.
   *
   * @public
   */
  channel?: Channel | undefined;
}

/**
 * @public
 */
export interface UpdateFailoverSlateConfigurationRequest {
  /**
   * ARN of the failover slate configuration to be updated.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Failover-slate-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Number of seconds of ingest interruption before the failover slate activates. Default: `3`.
   *
   * @public
   */
  activationThresholdSeconds?: number | undefined;

  /**
   * Minimum number of seconds that the failover slate displays after activation. Default: `3`.
   *
   * @public
   */
  minSlateDisplaySeconds?: number | undefined;

  /**
   * Maximum number of seconds that the failover slate displays. Default: `60`.
   *
   * @public
   */
  maxSlateDisplaySeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFailoverSlateConfigurationResponse {
  /**
   * Object specifying the updated failover slate configuration.
   *
   * @public
   */
  failoverSlateConfiguration: FailoverSlateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePlaybackRestrictionPolicyRequest {
  /**
   * ARN of the playback-restriction-policy to be updated.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A list of country codes that control geoblocking restriction. Allowed values are the officially assigned [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes. Default: All countries (an empty array).
   *
   * @public
   */
  allowedCountries?: string[] | undefined;

  /**
   * A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin). Default: All origins (an empty array).
   *
   * @public
   */
  allowedOrigins?: string[] | undefined;

  /**
   * Whether channel playback is constrained by origin site. Default: `false`.
   *
   * @public
   */
  enableStrictOriginEnforcement?: boolean | undefined;

  /**
   * Playback-restriction-policy name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePlaybackRestrictionPolicyResponse {
  /**
   * Object specifying the updated policy.
   *
   * @public
   */
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy | undefined;
}
