import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDirectConnectGatewayAssociationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    associationId: {
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
