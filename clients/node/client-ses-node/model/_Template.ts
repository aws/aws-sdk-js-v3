import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Template: _Structure_ = {
  type: "structure",
  required: ["TemplateName"],
  members: {
    TemplateName: {
      shape: {
        type: "string"
      }
    },
    SubjectPart: {
      shape: {
        type: "string"
      }
    },
    TextPart: {
      shape: {
        type: "string"
      }
    },
    HtmlPart: {
      shape: {
        type: "string"
      }
    }
  }
};
