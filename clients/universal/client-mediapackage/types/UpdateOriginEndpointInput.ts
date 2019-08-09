import { _CmafPackageCreateOrUpdateParameters } from "./_CmafPackageCreateOrUpdateParameters";
import { _DashPackage } from "./_DashPackage";
import { _HlsPackage } from "./_HlsPackage";
import { _MssPackage } from "./_MssPackage";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Configuration parameters used to update an existing OriginEndpoint.
 */
export interface UpdateOriginEndpointInput {
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
   * The ID of the OriginEndpoint to update.
   */
  Id: string;

  /**
   * A short string that will be appended to the end of the Endpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: _MssPackage;

  /**
   * Maximum duration (in seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * Amount of delay (in seconds) to enforce on the playback of live content.
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
