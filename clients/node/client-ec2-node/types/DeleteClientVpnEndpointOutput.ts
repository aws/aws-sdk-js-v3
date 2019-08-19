import { _UnmarshalledClientVpnEndpointStatus } from "./_ClientVpnEndpointStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteClientVpnEndpointOutput shape
 */
export interface DeleteClientVpnEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: _UnmarshalledClientVpnEndpointStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
