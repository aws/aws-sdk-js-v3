import { _UnmarshalledAggregationAuthorization } from "./_AggregationAuthorization";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAggregationAuthorizationsOutput shape
 */
export interface DescribeAggregationAuthorizationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a list of authorizations granted to various aggregator accounts and regions.</p>
   */
  AggregationAuthorizations?: Array<_UnmarshalledAggregationAuthorization>;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
