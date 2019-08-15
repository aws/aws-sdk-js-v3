import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WeightedTarget: _Structure_ = {
  type: "structure",
  required: ["virtualNode", "weight"],
  members: {
    virtualNode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    weight: {
      shape: {
        type: "integer"
      }
    }
  }
};
