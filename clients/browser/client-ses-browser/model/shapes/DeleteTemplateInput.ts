import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTemplateInput: _Structure_ = {
  type: "structure",
  required: ["TemplateName"],
  members: {
    TemplateName: {
      shape: {
        type: "string"
      }
    }
  }
};
