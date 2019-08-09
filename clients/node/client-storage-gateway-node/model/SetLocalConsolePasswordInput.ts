import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetLocalConsolePasswordInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "LocalConsolePassword"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    LocalConsolePassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    }
  }
};
