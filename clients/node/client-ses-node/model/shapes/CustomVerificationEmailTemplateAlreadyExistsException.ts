import { Structure as _Structure_ } from "@aws-sdk/types";

export const CustomVerificationEmailTemplateAlreadyExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomVerificationEmailTemplateName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "CustomVerificationEmailTemplateAlreadyExistsException",
  exceptionCode: "CustomVerificationEmailTemplateAlreadyExists"
};
