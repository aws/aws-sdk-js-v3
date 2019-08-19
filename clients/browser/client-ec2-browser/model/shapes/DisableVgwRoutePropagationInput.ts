import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableVgwRoutePropagationInput: _Structure_ = {
  type: "structure",
  required: ["GatewayId", "RouteTableId"],
  members: {
    GatewayId: {
      shape: {
        type: "string"
      }
    },
    RouteTableId: {
      shape: {
        type: "string"
      }
    }
  }
};
