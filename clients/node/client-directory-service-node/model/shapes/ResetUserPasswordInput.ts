import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetUserPasswordInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "UserName", "NewPassword"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string",
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
