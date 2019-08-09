import { _CdnConfiguration } from "./_CdnConfiguration";
import { _DashConfigurationForPut } from "./_DashConfigurationForPut";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutPlaybackConfigurationInput shape
 */
export interface PutPlaybackConfigurationInput {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
   */
  CdnConfiguration?: _CdnConfiguration;

  /**
   * <p>The configuration for DASH content. </p>
   */
  DashConfiguration?: _DashConfigurationForPut;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. </p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags to assign to the playback configuration. </p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
   */
  TranscodeProfileName?: string;

  /**
   * <p>The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.</p>
   */
  VideoContentSourceUrl?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
