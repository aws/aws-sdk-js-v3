import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> </p>
 */
export interface CountClosedWorkflowExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of workflow executions.</p>
   */
  count: number;

  /**
   * <p>If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.</p>
   */
  truncated?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
