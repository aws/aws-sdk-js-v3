import { _StackResourceDrift } from "./_StackResourceDrift";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectStackResourceDriftOutput: _Structure_ = {
  type: "structure",
  required: ["StackResourceDrift"],
  members: {
    StackResourceDrift: {
      shape: _StackResourceDrift
    }
  }
};
