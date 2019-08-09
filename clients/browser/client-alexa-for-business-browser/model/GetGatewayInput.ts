import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGatewayInput: _Structure_ = {
  type: "structure",
  required: ["GatewayArn"],
  members: {
    GatewayArn: {
      shape: {
        type: "string"
      }
    }
  }
};
