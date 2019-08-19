import { _DirectConnectGatewayAssociationProposalList } from "./_DirectConnectGatewayAssociationProposalList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectConnectGatewayAssociationProposalsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayAssociationProposals: {
      shape: _DirectConnectGatewayAssociationProposalList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
