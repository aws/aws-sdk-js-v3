import { Structure as _Structure_ } from "@aws-sdk/types";

export const CustomVerificationEmailTemplateDoesNotExistException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomVerificationEmailTemplateName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "CustomVerificationEmailTemplateDoesNotExistException",
  exceptionCode: "CustomVerificationEmailTemplateDoesNotExist"
};
