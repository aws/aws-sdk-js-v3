import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParallelismConfiguration: _Structure_ = {
  type: "structure",
  required: ["ConfigurationType"],
  members: {
    ConfigurationType: {
      shape: {
        type: "string"
      }
    },
    Parallelism: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ParallelismPerKPU: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AutoScalingEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
