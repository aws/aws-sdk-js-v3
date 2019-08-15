import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MetricName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: {
        type: "float"
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
