import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. </p>
 */
export interface InvokeAsyncOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status code.</p>
   */
  Status?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
