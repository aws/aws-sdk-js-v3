import { _CmafPackageCreateOrUpdateParameters } from "./_CmafPackageCreateOrUpdateParameters";
import { _DashPackage } from "./_DashPackage";
import { _HlsPackage } from "./_HlsPackage";
import { _MssPackage } from "./_MssPackage";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Configuration parameters used to create a new OriginEndpoint.
 */
export interface CreateOriginEndpointInput {
  /**
   * The ID of the Channel that the OriginEndpoint will be associated with.
   * This cannot be changed after the OriginEndpoint is created.
   *
   */
  ChannelId: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: _CmafPackageCreateOrUpdateParameters;

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
   * The ID of the OriginEndpoint.  The ID must be unique within the region
   * and it cannot be changed after the OriginEndpoint is created.
   *
   */
  Id: string;

  /**
   * A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").
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
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string> | Iterable<string>;

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
