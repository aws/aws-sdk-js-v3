import { _AutoScalingGroupList } from "./_AutoScalingGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeploymentGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    hooksNotCleanedUp: {
      shape: _AutoScalingGroupList
    }
  }
};
