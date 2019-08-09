import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UploadEntityDefinitionsOutput shape
 */
export interface UploadEntityDefinitionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID that specifies the upload action. You can use this to track the status of the upload.</p>
   */
  uploadId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
