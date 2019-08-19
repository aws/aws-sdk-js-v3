import { _AssociatedGateway } from "./_AssociatedGateway";
import { _RouteFilterPrefixList } from "./_RouteFilterPrefixList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectConnectGatewayAssociation: _Structure_ = {
  type: "structure",
  required: [],
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
    associationState: {
      shape: {
        type: "string"
      }
    },
    stateChangeError: {
      shape: {
        type: "string"
      }
    },
    associatedGateway: {
      shape: _AssociatedGateway
    },
    associationId: {
      shape: {
        type: "string"
      }
    },
    allowedPrefixesToDirectConnectGateway: {
      shape: _RouteFilterPrefixList
    },
    virtualGatewayId: {
      shape: {
        type: "string"
      }
    },
    virtualGatewayRegion: {
      shape: {
        type: "string"
      }
    },
    virtualGatewayOwnerAccount: {
      shape: {
        type: "string"
      }
    }
  }
};
