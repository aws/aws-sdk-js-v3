import { _PolicyTargets } from "./_PolicyTargets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTargetsForPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Targets: {
      shape: _PolicyTargets
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
