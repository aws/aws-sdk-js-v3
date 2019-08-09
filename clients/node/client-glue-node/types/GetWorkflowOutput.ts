import { _UnmarshalledWorkflow } from "./_Workflow";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWorkflowOutput shape
 */
export interface GetWorkflowOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The resource metadata for the workflow.</p>
   */
  Workflow?: _UnmarshalledWorkflow;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
