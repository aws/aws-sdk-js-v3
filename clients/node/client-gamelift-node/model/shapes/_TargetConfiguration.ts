import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetConfiguration: _Structure_ = {
  type: "structure",
  required: ["TargetValue"],
  members: {
    TargetValue: {
      shape: {
        type: "float"
      }
    }
  }
};
