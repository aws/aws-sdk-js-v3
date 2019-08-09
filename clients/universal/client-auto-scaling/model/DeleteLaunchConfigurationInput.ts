import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLaunchConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["LaunchConfigurationName"],
  members: {
    LaunchConfigurationName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
