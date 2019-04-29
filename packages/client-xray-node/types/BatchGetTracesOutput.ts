import { _UnmarshalledTrace } from "./_Trace";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetTracesOutput shape
 */
export interface BatchGetTracesOutput {
  /**
   * <p>Full traces for the specified requests.</p>
   */
  Traces?: Array<_UnmarshalledTrace>;

  /**
   * <p>Trace IDs of requests that haven't been processed.</p>
   */
  UnprocessedTraceIds?: Array<string>;

  /**
   * <p>Pagination token. Not used.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
