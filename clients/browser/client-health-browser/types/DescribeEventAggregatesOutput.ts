import { _UnmarshalledEventAggregate } from "./_EventAggregate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventAggregatesOutput shape
 */
export interface DescribeEventAggregatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of events in each category that meet the optional filter criteria.</p>
   */
  eventAggregates?: Array<_UnmarshalledEventAggregate>;

  /**
   * <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
