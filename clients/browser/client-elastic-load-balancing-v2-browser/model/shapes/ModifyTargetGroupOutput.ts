import { _TargetGroups } from "./_TargetGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTargetGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetGroups: {
      shape: _TargetGroups
    }
  }
};
