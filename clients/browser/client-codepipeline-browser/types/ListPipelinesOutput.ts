import { _UnmarshalledPipelineSummary } from "./_PipelineSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>ListPipelines</code> action.</p>
 */
export interface ListPipelinesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of pipelines.</p>
   */
  pipelines?: Array<_UnmarshalledPipelineSummary>;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also returned which can be used in a subsequent list pipelines call to return the next set of pipelines in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
