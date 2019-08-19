import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGatewayInput: _Structure_ = {
  type: "structure",
  required: ["GatewayArn"],
  members: {
    GatewayArn: {
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
    },
    SoftwareVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
