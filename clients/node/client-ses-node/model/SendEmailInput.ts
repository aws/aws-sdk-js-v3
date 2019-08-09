import { _Destination } from "./_Destination";
import { _Message } from "./_Message";
import { _AddressList } from "./_AddressList";
import { _MessageTagList } from "./_MessageTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendEmailInput: _Structure_ = {
  type: "structure",
  required: ["Source", "Destination", "Message"],
  members: {
    Source: {
      shape: {
        type: "string"
      }
    },
    Destination: {
      shape: _Destination
    },
    Message: {
      shape: _Message
    },
    ReplyToAddresses: {
      shape: _AddressList
    },
    ReturnPath: {
      shape: {
        type: "string"
      }
    },
    SourceArn: {
      shape: {
        type: "string"
      }
    },
    ReturnPathArn: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _MessageTagList
    },
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  }
};
