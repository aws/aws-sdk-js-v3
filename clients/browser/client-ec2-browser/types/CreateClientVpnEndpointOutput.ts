import { _UnmarshalledClientVpnEndpointStatus } from "./_ClientVpnEndpointStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClientVpnEndpointOutput shape
 */
export interface CreateClientVpnEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: _UnmarshalledClientVpnEndpointStatus;

  /**
   * <p>The DNS name to be used by clients when establishing their VPN session.</p>
   */
  DnsName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
