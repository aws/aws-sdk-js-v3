import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComputeEnvironmentOrder: _Structure_ = {
  type: "structure",
  required: ["order", "computeEnvironment"],
  members: {
    order: {
      shape: {
        type: "integer"
      }
    },
    computeEnvironment: {
      shape: {
        type: "string"
      }
    }
  }
};
