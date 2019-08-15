import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptDirectConnectGatewayAssociationProposalInput: _Structure_ = {
  type: "structure",
  required: [
    "directConnectGatewayId",
    "proposalId",
    "associatedGatewayOwnerAccount"
  ],
  members: {
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    proposalId: {
      shape: {
        type: "string"
      }
    },
    associatedGatewayOwnerAccount: {
      shape: {
        type: "string"
      }
    },
    overrideAllowedPrefixesToDirectConnectGateway: {
      shape: _RouteFilterPrefixList
    }
  }
};
