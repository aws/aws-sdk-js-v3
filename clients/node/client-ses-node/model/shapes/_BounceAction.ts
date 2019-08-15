import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BounceAction: _Structure_ = {
  type: "structure",
  required: ["SmtpReplyCode", "Message", "Sender"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    SmtpReplyCode: {
      shape: {
        type: "string"
      }
    },
    StatusCode: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    Sender: {
      shape: {
        type: "string"
      }
    }
  }
};
