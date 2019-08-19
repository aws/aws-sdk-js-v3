import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityTaskTimedOutEventAttributes: _Structure_ = {
  type: "structure",
  required: ["timeoutType", "scheduledEventId", "startedEventId"],
  members: {
    timeoutType: {
      shape: {
        type: "string"
      }
    },
    scheduledEventId: {
      shape: {
        type: "integer"
      }
    },
    startedEventId: {
      shape: {
        type: "integer"
      }
    },
    details: {
      shape: {
        type: "string"
      }
    }
  }
};
