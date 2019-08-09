import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserInput: _Structure_ = {
  type: "structure",
  required: ["ServerId", "UserName"],
  members: {
    ServerId: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string"
      }
    }
  }
};
