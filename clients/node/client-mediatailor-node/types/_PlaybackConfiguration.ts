import {
  _CdnConfiguration,
  _UnmarshalledCdnConfiguration
} from "./_CdnConfiguration";
import {
  _DashConfiguration,
  _UnmarshalledDashConfiguration
} from "./_DashConfiguration";
import {
  _HlsConfiguration,
  _UnmarshalledHlsConfiguration
} from "./_HlsConfiguration";

/**
 * <p>The AWSMediaTailor configuration.</p>
 */
export interface _PlaybackConfiguration {
  /**
   * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
   */
  AdDecisionServerUrl?: string;

  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
   */
  CdnConfiguration?: _CdnConfiguration;

  /**
   * <p>The configuration for DASH content. </p>
   */
  DashConfiguration?: _DashConfiguration;

  /**
   * <p>The configuration for HLS content. </p>
   */
  HlsConfiguration?: _HlsConfiguration;

  /**
   * <p>The identifier for the playback configuration.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the playback configuration. </p>
   */
  PlaybackConfigurationArn?: string;

  /**
   * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. </p>
   */
  PlaybackEndpointPrefix?: string;

  /**
   * <p>The URL that the player uses to initialize a session that uses client-side reporting. </p>
   */
  SessionInitializationEndpointPrefix?: string;

  /**
   * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. </p>
   */
  SlateAdUrl?: string;

  /**
   * <p>The tags assigned to the playback configuration. </p>
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
}

export interface _UnmarshalledPlaybackConfiguration
  extends _PlaybackConfiguration {
  /**
   * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. </p>
   */
  CdnConfiguration?: _UnmarshalledCdnConfiguration;

  /**
   * <p>The configuration for DASH content. </p>
   */
  DashConfiguration?: _UnmarshalledDashConfiguration;

  /**
   * <p>The configuration for HLS content. </p>
   */
  HlsConfiguration?: _UnmarshalledHlsConfiguration;

  /**
   * <p>The tags assigned to the playback configuration. </p>
   */
  Tags?: { [key: string]: string };
}
