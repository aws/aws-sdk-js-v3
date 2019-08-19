import { _UnmarshalledEvent } from "./_Event";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventsOutput shape
 */
export interface DescribeEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The events that match the specified filter criteria.</p>
   */
  events?: Array<_UnmarshalledEvent>;

  /**
   * <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
