import { _MessageDsn } from "./_MessageDsn";
import { _BouncedRecipientInfoList } from "./_BouncedRecipientInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendBounceInput: _Structure_ = {
  type: "structure",
  required: ["OriginalMessageId", "BounceSender", "BouncedRecipientInfoList"],
  members: {
    OriginalMessageId: {
      shape: {
        type: "string"
      }
    },
    BounceSender: {
      shape: {
        type: "string"
      }
    },
    Explanation: {
      shape: {
        type: "string"
      }
    },
    MessageDsn: {
      shape: _MessageDsn
    },
    BouncedRecipientInfoList: {
      shape: _BouncedRecipientInfoList
    },
    BounceSenderArn: {
      shape: {
        type: "string"
      }
    }
  }
};
