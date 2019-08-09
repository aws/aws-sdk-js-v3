import { _UnmarshalledGatewayInfo } from "./_GatewayInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGatewaysOutput shape
 */
export interface ListGatewaysOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <a>GatewayInfo</a> objects.</p>
   */
  Gateways?: Array<_UnmarshalledGatewayInfo>;

  /**
   * <p>Use the marker in your next request to fetch the next set of gateways in the list. If there are no more gateways to list, this field does not appear in the response.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
