import { _RequestLaunchTemplateData } from "./_RequestLaunchTemplateData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLaunchTemplateVersionInput: _Structure_ = {
  type: "structure",
  required: ["LaunchTemplateData"],
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
    SourceVersion: {
      shape: {
        type: "string"
      }
    },
    VersionDescription: {
      shape: {
        type: "string"
      }
    },
    LaunchTemplateData: {
      shape: _RequestLaunchTemplateData
    }
  }
};
