import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageTemplateType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SMSMessage: {
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
    }
  }
};
