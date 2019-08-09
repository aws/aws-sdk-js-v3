import { _UnmarshalledServiceDetail } from "./_ServiceDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of supported services.</p>
   */
  ServiceNames?: Array<string>;

  /**
   * <p>Information about the service.</p>
   */
  ServiceDetails?: Array<_UnmarshalledServiceDetail>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
