import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StoppingCondition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxRuntimeInSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
