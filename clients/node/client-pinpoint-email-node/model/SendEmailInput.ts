import { _Destination } from "./_Destination";
import { _EmailAddressList } from "./_EmailAddressList";
import { _EmailContent } from "./_EmailContent";
import { _MessageTagList } from "./_MessageTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendEmailInput: _Structure_ = {
  type: "structure",
  required: ["Destination", "Content"],
  members: {
    FromEmailAddress: {
      shape: {
        type: "string"
      }
    },
    Destination: {
      shape: _Destination
    },
    ReplyToAddresses: {
      shape: _EmailAddressList
    },
    FeedbackForwardingEmailAddress: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: _EmailContent
    },
    EmailTags: {
      shape: _MessageTagList
    },
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  }
};
