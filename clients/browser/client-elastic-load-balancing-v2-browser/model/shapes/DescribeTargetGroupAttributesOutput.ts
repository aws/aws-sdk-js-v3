import { _TargetGroupAttributes } from "./_TargetGroupAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTargetGroupAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _TargetGroupAttributes
    }
  }
};
