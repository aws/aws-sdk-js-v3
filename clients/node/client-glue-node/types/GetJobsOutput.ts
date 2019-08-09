import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetJobsOutput shape
 */
export interface GetJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Array<_UnmarshalledJob>;

  /**
   * <p>A continuation token, if not all job definitions have yet been returned.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
