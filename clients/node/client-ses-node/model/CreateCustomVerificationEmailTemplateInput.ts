import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomVerificationEmailTemplateInput: _Structure_ = {
  type: "structure",
  required: [
    "TemplateName",
    "FromEmailAddress",
    "TemplateSubject",
    "TemplateContent",
    "SuccessRedirectionURL",
    "FailureRedirectionURL"
  ],
  members: {
    TemplateName: {
      shape: {
        type: "string"
      }
    },
    FromEmailAddress: {
      shape: {
        type: "string"
      }
    },
    TemplateSubject: {
      shape: {
        type: "string"
      }
    },
    TemplateContent: {
      shape: {
        type: "string"
      }
    },
    SuccessRedirectionURL: {
      shape: {
        type: "string"
      }
    },
    FailureRedirectionURL: {
      shape: {
        type: "string"
      }
    }
  }
};
