import { _StringMap } from "./_StringMap";
import { _ResponseCard } from "./_ResponseCard";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PostTextOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    intentName: {
      shape: {
        type: "string"
      }
    },
    slots: {
      shape: _StringMap
    },
    sessionAttributes: {
      shape: _StringMap
    },
    message: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    messageFormat: {
      shape: {
        type: "string"
      }
    },
    dialogState: {
      shape: {
        type: "string"
      }
    },
    slotToElicit: {
      shape: {
        type: "string"
      }
    },
    responseCard: {
      shape: _ResponseCard
    }
  }
};
