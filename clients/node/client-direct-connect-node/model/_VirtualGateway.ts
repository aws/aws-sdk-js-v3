import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualGatewayId: {
      shape: {
        type: "string"
      }
    },
    virtualGatewayState: {
      shape: {
        type: "string"
      }
    }
  }
};
