import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDirectConnectGatewayInput: _Structure_ = {
  type: "structure",
  required: ["directConnectGatewayName"],
  members: {
    directConnectGatewayName: {
      shape: {
        type: "string"
      }
    },
    amazonSideAsn: {
      shape: {
        type: "integer"
      }
    }
  }
};
