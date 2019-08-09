import { _UnmarshalledCmafPackage } from "./_CmafPackage";
import { _UnmarshalledDashPackage } from "./_DashPackage";
import { _UnmarshalledHlsPackage } from "./_HlsPackage";
import { _UnmarshalledMssPackage } from "./_MssPackage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeOriginEndpointOutput shape
 */
export interface DescribeOriginEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
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
  CmafPackage?: _UnmarshalledCmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: _UnmarshalledDashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: _UnmarshalledHlsPackage;

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
  MssPackage?: _UnmarshalledMssPackage;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

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
  Whitelist?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
