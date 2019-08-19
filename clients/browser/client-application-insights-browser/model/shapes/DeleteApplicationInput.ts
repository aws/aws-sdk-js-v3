import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ResourceGroupName"],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
