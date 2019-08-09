import { _UnmarshalledStreamSummary } from "./_StreamSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStreamsOutput shape
 */
export interface ListStreamsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of streams.</p>
   */
  streams?: Array<_UnmarshalledStreamSummary>;

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
