import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDirectConnectGatewayAssociationProposalInput: _Structure_ = {
  type: "structure",
  required: ["proposalId"],
  members: {
    proposalId: {
      shape: {
        type: "string"
      }
    }
  }
};
