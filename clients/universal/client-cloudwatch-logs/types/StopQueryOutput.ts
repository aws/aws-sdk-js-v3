import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopQueryOutput shape
 */
export interface StopQueryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>This is true if the query was stopped by the <code>StopQuery</code> operation.</p>
   */
  success?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
