import { _MapOfListOf__string } from "./_MapOfListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SMSMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Body: {
      shape: {
        type: "string"
      }
    },
    Keyword: {
      shape: {
        type: "string"
      }
    },
    MessageType: {
      shape: {
        type: "string"
      }
    },
    OriginationNumber: {
      shape: {
        type: "string"
      }
    },
    SenderId: {
      shape: {
        type: "string"
      }
    },
    Substitutions: {
      shape: _MapOfListOf__string
    }
  }
};
