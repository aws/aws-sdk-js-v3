import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDirectConnectGatewayAssociationProposalInput: _Structure_ = {
  type: "structure",
  required: [
    "directConnectGatewayId",
    "directConnectGatewayOwnerAccount",
    "gatewayId"
  ],
  members: {
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
    gatewayId: {
      shape: {
        type: "string"
      }
    },
    addAllowedPrefixesToDirectConnectGateway: {
      shape: _RouteFilterPrefixList
    },
    removeAllowedPrefixesToDirectConnectGateway: {
      shape: _RouteFilterPrefixList
    }
  }
};
