import { _UnmarshalledPendingAggregationRequest } from "./_PendingAggregationRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePendingAggregationRequestsOutput shape
 */
export interface DescribePendingAggregationRequestsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a PendingAggregationRequests object.</p>
   */
  PendingAggregationRequests?: Array<_UnmarshalledPendingAggregationRequest>;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
