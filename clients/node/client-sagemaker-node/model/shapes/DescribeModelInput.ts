import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeModelInput: _Structure_ = {
  type: "structure",
  required: ["ModelName"],
  members: {
    ModelName: {
      shape: {
        type: "string"
      }
    }
  }
};
