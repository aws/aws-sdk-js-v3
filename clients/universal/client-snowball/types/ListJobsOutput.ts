import { _UnmarshalledJobListEntry } from "./_JobListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobsOutput shape
 */
export interface ListJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. </p>
   */
  JobListEntries?: Array<_UnmarshalledJobListEntry>;

  /**
   * <p>HTTP requests are stateless. If you use this automatically generated <code>NextToken</code> value in your next <code>ListJobs</code> call, your returned <code>JobListEntry</code> objects will start from this point in the array.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
