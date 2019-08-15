import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableUserInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "AuthenticationType"],
  members: {
    UserName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    AuthenticationType: {
      shape: {
        type: "string"
      }
    }
  }
};
