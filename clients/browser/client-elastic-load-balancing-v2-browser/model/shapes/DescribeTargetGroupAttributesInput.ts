import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTargetGroupAttributesInput: _Structure_ = {
  type: "structure",
  required: ["TargetGroupArn"],
  members: {
    TargetGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
