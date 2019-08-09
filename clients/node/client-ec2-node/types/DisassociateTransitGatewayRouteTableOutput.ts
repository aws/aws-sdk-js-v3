import { _UnmarshalledTransitGatewayAssociation } from "./_TransitGatewayAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateTransitGatewayRouteTableOutput shape
 */
export interface DisassociateTransitGatewayRouteTableOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the association.</p>
   */
  Association?: _UnmarshalledTransitGatewayAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
