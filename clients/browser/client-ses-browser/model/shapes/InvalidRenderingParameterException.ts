import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidRenderingParameterException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemplateName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidRenderingParameterException",
  exceptionCode: "InvalidRenderingParameter"
};
