import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The relative URI path of the job.</p>
   */
  location?: string;

  /**
   * <p>The ID of the job.</p>
   */
  jobId?: string;

  /**
   * <p>The path to the location of where the select results are stored.</p>
   */
  jobOutputPath?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
