import { _TargetIdList } from "./_TargetIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentTargetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    targetIds: {
      shape: _TargetIdList
    }
  }
};
