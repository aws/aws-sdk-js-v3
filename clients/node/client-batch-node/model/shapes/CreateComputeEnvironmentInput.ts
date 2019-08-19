import { _ComputeResource } from "./_ComputeResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateComputeEnvironmentInput: _Structure_ = {
  type: "structure",
  required: ["computeEnvironmentName", "type", "serviceRole"],
  members: {
    computeEnvironmentName: {
      shape: {
        type: "string"
      }
    },
    type: {
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
      shape: _ComputeResource
    },
    serviceRole: {
      shape: {
        type: "string"
      }
    }
  }
};
