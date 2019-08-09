import { _UnmarshalledVpcEndpointConnection } from "./_VpcEndpointConnection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcEndpointConnectionsOutput shape
 */
export interface DescribeVpcEndpointConnectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about one or more VPC endpoint connections.</p>
   */
  VpcEndpointConnections?: Array<_UnmarshalledVpcEndpointConnection>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
