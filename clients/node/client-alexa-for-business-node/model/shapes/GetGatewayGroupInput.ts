import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGatewayGroupInput: _Structure_ = {
  type: "structure",
  required: ["GatewayGroupArn"],
  members: {
    GatewayGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
