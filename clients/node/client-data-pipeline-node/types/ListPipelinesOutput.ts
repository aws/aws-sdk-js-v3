import { _UnmarshalledPipelineIdName } from "./_PipelineIdName";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ListPipelines.</p>
 */
export interface ListPipelinesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call <a>DescribePipelines</a> and <a>GetPipelineDefinition</a>.</p>
   */
  pipelineIdList: Array<_UnmarshalledPipelineIdName>;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>ListPipelinesOutput</code> again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
