import { _AddressList } from "./_AddressList";
import { _RawMessage } from "./_RawMessage";
import { _MessageTagList } from "./_MessageTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendRawEmailInput: _Structure_ = {
  type: "structure",
  required: ["RawMessage"],
  members: {
    Source: {
      shape: {
        type: "string"
      }
    },
    Destinations: {
      shape: _AddressList
    },
    RawMessage: {
      shape: _RawMessage
    },
    FromArn: {
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
