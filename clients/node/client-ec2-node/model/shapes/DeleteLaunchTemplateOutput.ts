import { _LaunchTemplate } from "./_LaunchTemplate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLaunchTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplate: {
      shape: _LaunchTemplate,
      locationName: "launchTemplate"
    }
  }
};
