import { _UnmarshalledDirectConnectGatewayAssociation } from "./_DirectConnectGatewayAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AcceptDirectConnectGatewayAssociationProposalOutput shape
 */
export interface AcceptDirectConnectGatewayAssociationProposalOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.</p>
   */
  directConnectGatewayAssociation?: _UnmarshalledDirectConnectGatewayAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
