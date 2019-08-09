import { _Activity } from "./_Activity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateInstanceInAutoScalingGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Activity: {
      shape: _Activity
    }
  }
};
