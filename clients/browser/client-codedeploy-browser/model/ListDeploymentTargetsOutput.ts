import { _TargetIdList } from "./_TargetIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    targetIds: {
      shape: _TargetIdList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
