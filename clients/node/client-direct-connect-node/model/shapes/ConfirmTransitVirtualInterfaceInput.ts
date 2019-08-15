import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmTransitVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["virtualInterfaceId", "directConnectGatewayId"],
  members: {
    virtualInterfaceId: {
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
