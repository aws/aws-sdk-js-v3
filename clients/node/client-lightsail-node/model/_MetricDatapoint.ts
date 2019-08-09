import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricDatapoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    average: {
      shape: {
        type: "float"
      }
    },
    maximum: {
      shape: {
        type: "float"
      }
    },
    minimum: {
      shape: {
        type: "float"
      }
    },
    sampleCount: {
      shape: {
        type: "float"
      }
    },
    sum: {
      shape: {
        type: "float"
      }
    },
    timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    unit: {
      shape: {
        type: "string"
      }
    }
  }
};
