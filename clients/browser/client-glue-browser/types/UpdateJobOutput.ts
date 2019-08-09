import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobOutput shape
 */
export interface UpdateJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
