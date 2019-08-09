import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmPrivateVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["virtualInterfaceId"],
  members: {
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    },
    virtualGatewayId: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    }
  }
};
