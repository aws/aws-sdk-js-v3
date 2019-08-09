import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteJobInput: _Structure_ = {
  type: "structure",
  required: ["JobName"],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
