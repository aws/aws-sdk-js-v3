import { Structure as _Structure_ } from "@aws-sdk/types";

export const ChangePasswordInput: _Structure_ = {
  type: "structure",
  required: ["OldPassword", "NewPassword"],
  members: {
    OldPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    NewPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
