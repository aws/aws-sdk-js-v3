import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetJobsOutput shape
 */
export interface BatchGetJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Array<_UnmarshalledJob>;

  /**
   * <p>A list of names of jobs not found.</p>
   */
  JobsNotFound?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
