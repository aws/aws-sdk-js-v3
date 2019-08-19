import { _AssociatedGateway } from "./_AssociatedGateway";
import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectConnectGatewayAssociationProposal: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    proposalId: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayOwnerAccount: {
      shape: {
        type: "string"
      }
    },
    proposalState: {
      shape: {
        type: "string"
      }
    },
    associatedGateway: {
      shape: _AssociatedGateway
    },
    existingAllowedPrefixesToDirectConnectGateway: {
      shape: _RouteFilterPrefixList
    },
    requestedAllowedPrefixesToDirectConnectGateway: {
      shape: _RouteFilterPrefixList
    }
  }
};
