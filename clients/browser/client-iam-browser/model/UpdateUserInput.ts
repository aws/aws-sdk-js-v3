import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserInput: _Structure_ = {
  type: "structure",
  required: ["UserName"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NewPath: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NewUserName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
