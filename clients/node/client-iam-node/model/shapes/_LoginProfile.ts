import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoginProfile: _Structure_ = {
  type: "structure",
  required: ["UserName", "CreateDate"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    PasswordResetRequired: {
      shape: {
        type: "boolean"
      }
    }
  }
};
