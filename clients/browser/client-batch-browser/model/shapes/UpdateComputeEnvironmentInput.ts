import { _ComputeResourceUpdate } from "./_ComputeResourceUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateComputeEnvironmentInput: _Structure_ = {
  type: "structure",
  required: ["computeEnvironment"],
  members: {
    computeEnvironment: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    computeResources: {
      shape: _ComputeResourceUpdate
    },
    serviceRole: {
      shape: {
        type: "string"
      }
    }
  }
};
