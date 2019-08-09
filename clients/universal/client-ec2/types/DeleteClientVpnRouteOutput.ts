import { _UnmarshalledClientVpnRouteStatus } from "./_ClientVpnRouteStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteClientVpnRouteOutput shape
 */
export interface DeleteClientVpnRouteOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: _UnmarshalledClientVpnRouteStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
