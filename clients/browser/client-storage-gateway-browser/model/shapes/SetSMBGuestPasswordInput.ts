import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetSMBGuestPasswordInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "Password"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    }
  }
};
