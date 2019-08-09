import { _UnmarshalledDirectConnectGatewayAssociation } from "./_DirectConnectGatewayAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDirectConnectGatewayAssociationOutput shape
 */
export interface CreateDirectConnectGatewayAssociationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The association to be created.</p>
   */
  directConnectGatewayAssociation?: _UnmarshalledDirectConnectGatewayAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
