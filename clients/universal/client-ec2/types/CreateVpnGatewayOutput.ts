import { _UnmarshalledVpnGateway } from "./_VpnGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the virtual private gateway.</p>
   */
  VpnGateway?: _UnmarshalledVpnGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
