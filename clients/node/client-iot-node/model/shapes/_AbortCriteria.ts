import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AbortCriteria: _Structure_ = {
  type: "structure",
  required: [
    "failureType",
    "action",
    "thresholdPercentage",
    "minNumberOfExecutedThings"
  ],
  members: {
    failureType: {
      shape: {
        type: "string"
      }
    },
    action: {
      shape: {
        type: "string"
      }
    },
    thresholdPercentage: {
      shape: {
        type: "float"
      }
    },
    minNumberOfExecutedThings: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
