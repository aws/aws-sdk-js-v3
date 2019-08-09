import { _UnmarshalledNotebookInstanceLifecycleConfigSummary } from "./_NotebookInstanceLifecycleConfigSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNotebookInstanceLifecycleConfigsOutput shape
 */
export interface ListNotebookInstanceLifecycleConfigsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To get the next set of lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: Array<
    _UnmarshalledNotebookInstanceLifecycleConfigSummary
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
