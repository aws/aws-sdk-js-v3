import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FilterExpression: {
      shape: {
        type: "string"
      }
    }
  }
};
