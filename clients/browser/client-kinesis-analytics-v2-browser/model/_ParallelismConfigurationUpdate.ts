import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParallelismConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationTypeUpdate: {
      shape: {
        type: "string"
      }
    },
    ParallelismUpdate: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ParallelismPerKPUUpdate: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AutoScalingEnabledUpdate: {
      shape: {
        type: "boolean"
      }
    }
  }
};
