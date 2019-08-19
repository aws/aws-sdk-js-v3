import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDirectConnectGatewayAssociationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    associationId: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    virtualGatewayId: {
      shape: {
        type: "string"
      }
    }
  }
};
