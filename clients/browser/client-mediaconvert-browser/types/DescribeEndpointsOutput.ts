import { _UnmarshalledEndpoint } from "./_Endpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEndpointsOutput shape
 */
export interface DescribeEndpointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * List of endpoints
   */
  Endpoints?: Array<_UnmarshalledEndpoint>;

  /**
   * Use this string to request the next batch of endpoints.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
