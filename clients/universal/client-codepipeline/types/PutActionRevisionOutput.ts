import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>PutActionRevision</code> action.</p>
 */
export interface PutActionRevisionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the artifact revision was previously used in an execution of the specified pipeline.</p>
   */
  newRevision?: boolean;

  /**
   * <p>The ID of the current workflow state of the pipeline.</p>
   */
  pipelineExecutionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
