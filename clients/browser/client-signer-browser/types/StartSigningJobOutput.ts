import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSigningJobOutput shape
 */
export interface StartSigningJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of your signing job.</p>
   */
  jobId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
