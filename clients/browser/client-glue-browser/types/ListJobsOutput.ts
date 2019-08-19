import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobsOutput shape
 */
export interface ListJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
   */
  JobNames?: Array<string>;

  /**
   * <p>A continuation token, if the returned list does not contain the last metric available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
