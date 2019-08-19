import { _LaunchTemplateVersion } from "./_LaunchTemplateVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLaunchTemplateVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateVersion: {
      shape: _LaunchTemplateVersion,
      locationName: "launchTemplateVersion"
    }
  }
};
