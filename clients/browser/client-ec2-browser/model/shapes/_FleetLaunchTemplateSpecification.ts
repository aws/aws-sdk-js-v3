import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetLaunchTemplateSpecification: _Structure_ = {
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
    Version: {
      shape: {
        type: "string"
      },
      locationName: "version"
    }
  }
};
