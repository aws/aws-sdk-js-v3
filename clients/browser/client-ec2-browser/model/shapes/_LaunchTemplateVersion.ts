import { _ResponseLaunchTemplateData } from "./_ResponseLaunchTemplateData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateId: {
      shape: {
        type: "string"
      },
      locationName: "launchTemplateId"
    },
    LaunchTemplateName: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "launchTemplateName"
    },
    VersionNumber: {
      shape: {
        type: "integer"
      },
      locationName: "versionNumber"
    },
    VersionDescription: {
      shape: {
        type: "string"
      },
      locationName: "versionDescription"
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
    },
    CreatedBy: {
      shape: {
        type: "string"
      },
      locationName: "createdBy"
    },
    DefaultVersion: {
      shape: {
        type: "boolean"
      },
      locationName: "defaultVersion"
    },
    LaunchTemplateData: {
      shape: _ResponseLaunchTemplateData,
      locationName: "launchTemplateData"
    }
  }
};
