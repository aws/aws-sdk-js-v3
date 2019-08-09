import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateJobOutput shape
 */
export interface CreateJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique name that was provided for this job definition.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
