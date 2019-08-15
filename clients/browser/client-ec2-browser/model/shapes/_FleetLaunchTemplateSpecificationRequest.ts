import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetLaunchTemplateSpecificationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};
