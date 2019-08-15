import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidateTemplateInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemplateBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateURL: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
