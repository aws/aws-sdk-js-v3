import { _LaunchConfigurations } from "./_LaunchConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLaunchConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: ["LaunchConfigurations"],
  members: {
    LaunchConfigurations: {
      shape: _LaunchConfigurations
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
