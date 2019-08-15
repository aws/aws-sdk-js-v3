import { _TargetFilters } from "./_TargetFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentTargetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    targetFilters: {
      shape: _TargetFilters
    }
  }
};
