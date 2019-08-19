import { _UnmarshalledPipelineSummary } from "./_PipelineSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPipelinesOutput shape
 */
export interface ListPipelinesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of "PipelineSummary" objects.</p>
   */
  pipelineSummaries?: Array<_UnmarshalledPipelineSummary>;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
