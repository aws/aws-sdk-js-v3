import { _UnmarshalledTransitGatewayRoute } from "./_TransitGatewayRoute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchTransitGatewayRoutesOutput shape
 */
export interface SearchTransitGatewayRoutesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the routes.</p>
   */
  Routes?: Array<_UnmarshalledTransitGatewayRoute>;

  /**
   * <p>Indicates whether there are additional routes available.</p>
   */
  AdditionalRoutesAvailable?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
