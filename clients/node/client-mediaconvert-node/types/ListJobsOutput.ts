import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobsOutput shape
 */
export interface ListJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * List of jobs
   */
  Jobs?: Array<_UnmarshalledJob>;

  /**
   * Use this string to request the next batch of jobs.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
