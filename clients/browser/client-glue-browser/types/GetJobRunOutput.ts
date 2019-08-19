import { _UnmarshalledJobRun } from "./_JobRun";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetJobRunOutput shape
 */
export interface GetJobRunOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested job-run metadata.</p>
   */
  JobRun?: _UnmarshalledJobRun;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
