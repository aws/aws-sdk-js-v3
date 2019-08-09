import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGatewayInformationInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    GatewayName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    GatewayTimezone: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
