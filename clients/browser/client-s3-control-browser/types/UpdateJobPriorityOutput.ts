import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobPriorityOutput shape
 */
export interface UpdateJobPriorityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID for the job whose priority Amazon S3 updated.</p>
   */
  JobId: string;

  /**
   * <p>The new priority assigned to the specified job.</p>
   */
  Priority: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
