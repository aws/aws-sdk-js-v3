import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDirectConnectGatewayAssociationInput: _Structure_ = {
  type: "structure",
  required: ["directConnectGatewayId"],
  members: {
    directConnectGatewayId: {
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
    virtualGatewayId: {
      shape: {
        type: "string"
      }
    }
  }
};
