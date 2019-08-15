import { _ProcessNames } from "./_ProcessNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResumeProcessesInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalingProcesses: {
      shape: _ProcessNames
    }
  }
};
