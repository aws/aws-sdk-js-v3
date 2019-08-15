import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateSpecification: _Structure_ = {
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
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};
