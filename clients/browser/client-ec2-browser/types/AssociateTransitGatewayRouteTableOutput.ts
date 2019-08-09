import { _UnmarshalledTransitGatewayAssociation } from "./_TransitGatewayAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateTransitGatewayRouteTableOutput shape
 */
export interface AssociateTransitGatewayRouteTableOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the association.</p>
   */
  Association?: _UnmarshalledTransitGatewayAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
