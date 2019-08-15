import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteStackSetInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName"],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    }
  }
};
