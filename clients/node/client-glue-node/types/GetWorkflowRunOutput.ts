import { _UnmarshalledWorkflowRun } from "./_WorkflowRun";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWorkflowRunOutput shape
 */
export interface GetWorkflowRunOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested workflow run metadata.</p>
   */
  Run?: _UnmarshalledWorkflowRun;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
