import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteComputeEnvironmentInput: _Structure_ = {
  type: "structure",
  required: ["computeEnvironment"],
  members: {
    computeEnvironment: {
      shape: {
        type: "string"
      }
    }
  }
};
