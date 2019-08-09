import { _UnmarshalledNotebookInstanceSummary } from "./_NotebookInstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNotebookInstancesOutput shape
 */
export interface ListNotebookInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was truncated, Amazon SageMaker returns this token. To retrieve the next set of notebook instances, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook instance.</p>
   */
  NotebookInstances?: Array<_UnmarshalledNotebookInstanceSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
