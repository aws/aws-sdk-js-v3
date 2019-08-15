import { _DirectConnectGateway } from "./_DirectConnectGateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDirectConnectGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGateway: {
      shape: _DirectConnectGateway
    }
  }
};
