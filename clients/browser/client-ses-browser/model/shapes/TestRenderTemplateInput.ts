import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestRenderTemplateInput: _Structure_ = {
  type: "structure",
  required: ["TemplateName", "TemplateData"],
  members: {
    TemplateName: {
      shape: {
        type: "string"
      }
    },
    TemplateData: {
      shape: {
        type: "string"
      }
    }
  }
};
