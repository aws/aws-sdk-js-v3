import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidTemplateException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemplateName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidTemplateException",
  exceptionCode: "InvalidTemplate"
};
