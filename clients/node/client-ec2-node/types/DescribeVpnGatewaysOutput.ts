import { _UnmarshalledVpnGateway } from "./_VpnGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about one or more virtual private gateways.</p>
   */
  VpnGateways?: Array<_UnmarshalledVpnGateway>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
