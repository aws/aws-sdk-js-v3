import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Amount: {
      shape: {
        type: "string"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
