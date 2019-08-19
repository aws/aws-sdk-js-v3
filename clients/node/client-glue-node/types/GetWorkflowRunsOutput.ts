import { _UnmarshalledWorkflowRun } from "./_WorkflowRun";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWorkflowRunsOutput shape
 */
export interface GetWorkflowRunsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of workflow run metadata objects.</p>
   */
  Runs?: Array<_UnmarshalledWorkflowRun>;

  /**
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
