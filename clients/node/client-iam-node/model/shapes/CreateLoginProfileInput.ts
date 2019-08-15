import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoginProfileInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "Password"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    PasswordResetRequired: {
      shape: {
        type: "boolean"
      }
    }
  }
};
