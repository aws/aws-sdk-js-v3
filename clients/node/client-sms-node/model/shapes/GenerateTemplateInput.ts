import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateTemplateInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appId: {
      shape: {
        type: "string"
      }
    },
    templateFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
