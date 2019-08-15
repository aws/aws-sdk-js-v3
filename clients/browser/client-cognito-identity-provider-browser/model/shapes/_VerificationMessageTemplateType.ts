import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VerificationMessageTemplateType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SmsMessage: {
      shape: {
        type: "string",
        min: 6
      }
    },
    EmailMessage: {
      shape: {
        type: "string",
        min: 6
      }
    },
    EmailSubject: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EmailMessageByLink: {
      shape: {
        type: "string",
        min: 6
      }
    },
    EmailSubjectByLink: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DefaultEmailOption: {
      shape: {
        type: "string"
      }
    }
  }
};
