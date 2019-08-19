import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFileUploadURLOutput shape
 */
export interface GetFileUploadURLOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A temporary URL for the file that the Worker uploaded for the answer. </p>
   */
  FileUploadURL?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
