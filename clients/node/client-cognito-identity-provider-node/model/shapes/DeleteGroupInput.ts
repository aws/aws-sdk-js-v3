import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName", "UserPoolId"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
