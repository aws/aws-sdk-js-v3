import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MarkerRecordedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["markerName", "decisionTaskCompletedEventId"],
  members: {
    markerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    details: {
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
