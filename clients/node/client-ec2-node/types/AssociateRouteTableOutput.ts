import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateRouteTableOutput shape
 */
export interface AssociateRouteTableOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The route table association ID. This ID is required for disassociating the route table.</p>
   */
  AssociationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
