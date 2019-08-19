import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeBasedCanary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    canaryPercentage: {
      shape: {
        type: "integer"
      }
    },
    canaryInterval: {
      shape: {
        type: "integer"
      }
    }
  }
};
