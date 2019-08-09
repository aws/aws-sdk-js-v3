import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListQueryExecutionsOutput shape
 */
export interface ListQueryExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique IDs of each query execution as an array of strings.</p>
   */
  QueryExecutionIds?: Array<string>;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
