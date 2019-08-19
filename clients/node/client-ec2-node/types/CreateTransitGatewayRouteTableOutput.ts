import { _UnmarshalledTransitGatewayRouteTable } from "./_TransitGatewayRouteTable";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTransitGatewayRouteTableOutput shape
 */
export interface CreateTransitGatewayRouteTableOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: _UnmarshalledTransitGatewayRouteTable;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
