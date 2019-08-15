import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSMBSecurityStrategyInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "SMBSecurityStrategy"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    SMBSecurityStrategy: {
      shape: {
        type: "string"
      }
    }
  }
};
