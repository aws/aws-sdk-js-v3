import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateImageBuilderStreamingURLOutput shape
 */
export interface CreateImageBuilderStreamingURLOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The URL to start the AppStream 2.0 streaming session.</p>
   */
  StreamingURL?: string;

  /**
   * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
   */
  Expires?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
