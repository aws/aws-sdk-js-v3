import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyProductOutput shape
 */
export interface CopyProductOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use to track the progress of the operation.</p>
   */
  CopyProductToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
