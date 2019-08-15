import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
