import { _TargetGroupAttributes } from "./_TargetGroupAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTargetGroupAttributesInput: _Structure_ = {
  type: "structure",
  required: ["TargetGroupArn", "Attributes"],
  members: {
    TargetGroupArn: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _TargetGroupAttributes
    }
  }
};
