import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyLaunchTemplateInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
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
    DefaultVersion: {
      shape: {
        type: "string"
      },
      locationName: "SetDefaultVersion"
    }
  }
};
