import { List as _List_ } from "@aws-sdk/types";
import { _DirectConnectGatewayAssociationProposal } from "./_DirectConnectGatewayAssociationProposal";

export const _DirectConnectGatewayAssociationProposalList: _List_ = {
  type: "list",
  member: {
    shape: _DirectConnectGatewayAssociationProposal
  }
};
