import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordMarkerFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["markerName", "cause", "decisionTaskCompletedEventId"],
  members: {
    markerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    cause: {
      shape: {
        type: "string"
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
