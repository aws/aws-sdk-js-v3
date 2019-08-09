import { Structure as _Structure_ } from "@aws-sdk/types";

export const MissingRenderingAttributeException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemplateName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "MissingRenderingAttributeException",
  exceptionCode: "MissingRenderingAttribute"
};
