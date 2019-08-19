import { _CmafPackage, _UnmarshalledCmafPackage } from "./_CmafPackage";
import { _DashPackage, _UnmarshalledDashPackage } from "./_DashPackage";
import { _HlsPackage, _UnmarshalledHlsPackage } from "./_HlsPackage";
import { _MssPackage, _UnmarshalledMssPackage } from "./_MssPackage";

/**
 * An OriginEndpoint resource configuration.
 */
export interface _OriginEndpoint {
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: _CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: _DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: _HlsPackage;

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
  MssPackage?: _MssPackage;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   *
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledOriginEndpoint extends _OriginEndpoint {
  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: _UnmarshalledCmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: _UnmarshalledDashPackage;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: _UnmarshalledHlsPackage;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: _UnmarshalledMssPackage;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string>;
}
