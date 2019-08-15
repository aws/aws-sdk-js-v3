import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConfigurationTemplateInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "TemplateName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
