import { _TargetDescriptions } from "./_TargetDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterTargetsInput: _Structure_ = {
  type: "structure",
  required: ["TargetGroupArn", "Targets"],
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
