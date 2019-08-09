import { _UnmarshalledVpnConnection } from "./_VpnConnection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about one or more VPN connections.</p>
   */
  VpnConnections?: Array<_UnmarshalledVpnConnection>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
