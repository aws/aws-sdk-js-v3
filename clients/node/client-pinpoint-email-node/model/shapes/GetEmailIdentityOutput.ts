import { _DkimAttributes } from "./_DkimAttributes";
import { _MailFromAttributes } from "./_MailFromAttributes";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEmailIdentityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityType: {
      shape: {
        type: "string"
      }
    },
    FeedbackForwardingStatus: {
      shape: {
        type: "boolean"
      }
    },
    VerifiedForSendingStatus: {
      shape: {
        type: "boolean"
      }
    },
    DkimAttributes: {
      shape: _DkimAttributes
    },
    MailFromAttributes: {
      shape: _MailFromAttributes
    },
    Tags: {
      shape: _TagList
    }
  }
};
