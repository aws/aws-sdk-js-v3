import { _UnmarshalledEndpoint } from "./_Endpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEndpointsOutput shape
 */
export interface DescribeEndpointsOutput {
  /**
   * _Endpoints shape
   */
  Endpoints: Array<_UnmarshalledEndpoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
