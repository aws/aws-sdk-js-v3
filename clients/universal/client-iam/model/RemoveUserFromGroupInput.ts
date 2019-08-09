import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveUserFromGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName", "UserName"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
