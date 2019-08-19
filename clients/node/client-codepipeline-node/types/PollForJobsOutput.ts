import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>PollForJobs</code> action.</p>
 */
export interface PollForJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the jobs to take action on.</p>
   */
  jobs?: Array<_UnmarshalledJob>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
