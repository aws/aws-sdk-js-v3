import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGatewayGroupInput: _Structure_ = {
  type: "structure",
  required: ["GatewayGroupArn"],
  members: {
    GatewayGroupArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
