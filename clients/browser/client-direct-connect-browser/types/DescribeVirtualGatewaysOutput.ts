import { _UnmarshalledVirtualGateway } from "./_VirtualGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVirtualGatewaysOutput shape
 */
export interface DescribeVirtualGatewaysOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The virtual private gateways.</p>
   */
  virtualGateways?: Array<_UnmarshalledVirtualGateway>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
