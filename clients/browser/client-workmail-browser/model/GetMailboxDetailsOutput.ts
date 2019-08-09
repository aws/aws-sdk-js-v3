import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMailboxDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MailboxQuota: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MailboxSize: {
      shape: {
        type: "float"
      }
    }
  }
};
