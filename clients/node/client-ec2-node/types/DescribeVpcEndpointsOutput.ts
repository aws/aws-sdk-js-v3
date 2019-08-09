import { _UnmarshalledVpcEndpoint } from "./_VpcEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the endpoints.</p>
   */
  VpcEndpoints?: Array<_UnmarshalledVpcEndpoint>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
