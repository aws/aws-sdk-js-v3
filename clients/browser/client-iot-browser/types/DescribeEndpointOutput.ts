import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The endpoint. The format of the endpoint is as follows: <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
   */
  endpointAddress?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
