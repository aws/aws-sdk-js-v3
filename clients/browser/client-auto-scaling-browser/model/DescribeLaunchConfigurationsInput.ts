import { _LaunchConfigurationNames } from "./_LaunchConfigurationNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLaunchConfigurationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchConfigurationNames: {
      shape: _LaunchConfigurationNames
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    }
  }
};
