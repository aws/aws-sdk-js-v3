import { _UnmarshalledTerminateConnectionStatus } from "./_TerminateConnectionStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TerminateClientVpnConnectionsOutput shape
 */
export interface TerminateClientVpnConnectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The user who established the terminated client connections.</p>
   */
  Username?: string;

  /**
   * <p>The current state of the client connections.</p>
   */
  ConnectionStatuses?: Array<_UnmarshalledTerminateConnectionStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
