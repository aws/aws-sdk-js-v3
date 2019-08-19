import { _UnmarshalledSession } from "./_Session";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSessionsOutput shape
 */
export interface DescribeSessionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the streaming sessions.</p>
   */
  Sessions?: Array<_UnmarshalledSession>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
