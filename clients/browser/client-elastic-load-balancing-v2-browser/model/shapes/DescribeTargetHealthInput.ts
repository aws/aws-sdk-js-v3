import { _TargetDescriptions } from "./_TargetDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTargetHealthInput: _Structure_ = {
  type: "structure",
  required: ["TargetGroupArn"],
  members: {
    TargetGroupArn: {
      shape: {
        type: "string"
      }
    },
    Targets: {
      shape: _TargetDescriptions
    }
  }
};
