import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    launchTemplateId: {
      shape: {
        type: "string"
      }
    },
    launchTemplateName: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    }
  }
};
