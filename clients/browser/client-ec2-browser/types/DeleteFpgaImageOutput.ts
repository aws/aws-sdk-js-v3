import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteFpgaImageOutput shape
 */
export interface DeleteFpgaImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
