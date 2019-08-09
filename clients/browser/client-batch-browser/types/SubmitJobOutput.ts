import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SubmitJobOutput shape
 */
export interface SubmitJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the job. </p>
   */
  jobName: string;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
