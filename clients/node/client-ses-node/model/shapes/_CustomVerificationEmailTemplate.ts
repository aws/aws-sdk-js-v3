import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomVerificationEmailTemplate: _Structure_ = {
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
