import { _UnmarshalledTransitGatewayPropagation } from "./_TransitGatewayPropagation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * EnableTransitGatewayRouteTablePropagationOutput shape
 */
export interface EnableTransitGatewayRouteTablePropagationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: _UnmarshalledTransitGatewayPropagation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
