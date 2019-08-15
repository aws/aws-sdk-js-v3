import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLoginProfileInput: _Structure_ = {
  type: "structure",
  required: ["UserName"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
