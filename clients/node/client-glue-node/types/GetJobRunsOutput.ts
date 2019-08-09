import { _UnmarshalledJobRun } from "./_JobRun";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetJobRunsOutput shape
 */
export interface GetJobRunsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of job-run metadata objects.</p>
   */
  JobRuns?: Array<_UnmarshalledJobRun>;

  /**
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
