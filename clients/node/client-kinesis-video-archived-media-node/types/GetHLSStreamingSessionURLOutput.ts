import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetHLSStreamingSessionURLOutput shape
 */
export interface GetHLSStreamingSessionURLOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The URL (containing the session token) that a media player can use to retrieve the HLS master playlist.</p>
   */
  HLSStreamingSessionURL?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
