import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: ["eventType", "properties", "sentAt"],
  members: {
    eventId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    eventType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    properties: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sentAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
