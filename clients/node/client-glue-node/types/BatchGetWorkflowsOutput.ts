import { _UnmarshalledWorkflow } from "./_Workflow";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetWorkflowsOutput shape
 */
export interface BatchGetWorkflowsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of workflow resource metadata.</p>
   */
  Workflows?: Array<_UnmarshalledWorkflow>;

  /**
   * <p>A list of names of workflows not found.</p>
   */
  MissingWorkflows?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
