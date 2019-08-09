import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNamedQueriesOutput shape
 */
export interface ListNamedQueriesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of unique query IDs.</p>
   */
  NamedQueryIds?: Array<string>;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
