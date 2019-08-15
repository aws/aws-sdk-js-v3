import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateComputeEnvironmentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    computeEnvironmentName: {
      shape: {
        type: "string"
      }
    },
    computeEnvironmentArn: {
      shape: {
        type: "string"
      }
    }
  }
};
