import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCustomVerificationEmailTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
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
