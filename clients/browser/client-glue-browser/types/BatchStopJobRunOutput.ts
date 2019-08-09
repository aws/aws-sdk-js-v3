import { _UnmarshalledBatchStopJobRunSuccessfulSubmission } from "./_BatchStopJobRunSuccessfulSubmission";
import { _UnmarshalledBatchStopJobRunError } from "./_BatchStopJobRunError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchStopJobRunOutput shape
 */
export interface BatchStopJobRunOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the JobRuns that were successfully submitted for stopping.</p>
   */
  SuccessfulSubmissions?: Array<
    _UnmarshalledBatchStopJobRunSuccessfulSubmission
  >;

  /**
   * <p>A list of the errors that were encountered in trying to stop <code>JobRuns</code>, including the <code>JobRunId</code> for which each error was encountered and details about the error.</p>
   */
  Errors?: Array<_UnmarshalledBatchStopJobRunError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
