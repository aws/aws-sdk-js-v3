import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxNumberOfAutoScalingGroups: {
      shape: {
        type: "integer"
      }
    },
    MaxNumberOfLaunchConfigurations: {
      shape: {
        type: "integer"
      }
    },
    NumberOfAutoScalingGroups: {
      shape: {
        type: "integer"
      }
    },
    NumberOfLaunchConfigurations: {
      shape: {
        type: "integer"
      }
    }
  }
};
