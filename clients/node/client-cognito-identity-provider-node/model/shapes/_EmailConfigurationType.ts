import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EmailConfigurationType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ReplyToEmailAddress: {
      shape: {
        type: "string"
      }
    },
    EmailSendingAccount: {
      shape: {
        type: "string"
      }
    }
  }
};
