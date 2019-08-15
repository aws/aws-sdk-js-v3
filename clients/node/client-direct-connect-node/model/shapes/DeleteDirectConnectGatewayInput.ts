import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDirectConnectGatewayInput: _Structure_ = {
  type: "structure",
  required: ["directConnectGatewayId"],
  members: {
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    }
  }
};
