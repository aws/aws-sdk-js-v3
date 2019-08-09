import { _VersionStringList } from "./_VersionStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLaunchTemplateVersionsInput: _Structure_ = {
  type: "structure",
  required: ["Versions"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    LaunchTemplateId: {
      shape: {
        type: "string"
      }
    },
    LaunchTemplateName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Versions: {
      shape: _VersionStringList,
      locationName: "LaunchTemplateVersion"
    }
  }
};
