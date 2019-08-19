import { _UnmarshalledDirectConnectGatewayAssociationProposal } from "./_DirectConnectGatewayAssociationProposal";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDirectConnectGatewayAssociationProposalOutput shape
 */
export interface CreateDirectConnectGatewayAssociationProposalOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Direct Connect gateway proposal.</p>
   */
  directConnectGatewayAssociationProposal?: _UnmarshalledDirectConnectGatewayAssociationProposal;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
