import { _UnmarshalledQueryInfo } from "./_QueryInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeQueriesOutput shape
 */
export interface DescribeQueriesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of queries that match the request.</p>
   */
  queries?: Array<_UnmarshalledQueryInfo>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
