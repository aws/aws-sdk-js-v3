import { _UnmarshalledRouteTable } from "./_RouteTable";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeRouteTables.</p>
 */
export interface DescribeRouteTablesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about one or more route tables.</p>
   */
  RouteTables?: Array<_UnmarshalledRouteTable>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
