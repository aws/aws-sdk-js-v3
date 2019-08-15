import { _DirectConnectGatewayAssociationProposal } from "./_DirectConnectGatewayAssociationProposal";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDirectConnectGatewayAssociationProposalOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayAssociationProposal: {
      shape: _DirectConnectGatewayAssociationProposal
    }
  }
};
