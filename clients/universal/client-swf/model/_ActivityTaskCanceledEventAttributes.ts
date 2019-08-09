import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityTaskCanceledEventAttributes: _Structure_ = {
  type: "structure",
  required: ["scheduledEventId", "startedEventId"],
  members: {
    details: {
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
    latestCancelRequestedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
