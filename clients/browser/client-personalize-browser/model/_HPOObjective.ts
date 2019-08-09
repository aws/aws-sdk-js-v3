import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HPOObjective: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    metricName: {
      shape: {
        type: "string"
      }
    },
    metricRegex: {
      shape: {
        type: "string"
      }
    }
  }
};
