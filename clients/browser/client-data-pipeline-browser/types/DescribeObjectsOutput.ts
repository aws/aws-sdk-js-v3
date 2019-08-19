import { _UnmarshalledPipelineObject } from "./_PipelineObject";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeObjects.</p>
 */
export interface DescribeObjectsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of object definitions.</p>
   */
  pipelineObjects: Array<_UnmarshalledPipelineObject>;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>DescribeObjects</code> again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>Indicates whether there are more results to return.</p>
   */
  hasMoreResults?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
