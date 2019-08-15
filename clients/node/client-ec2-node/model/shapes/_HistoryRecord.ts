import { _EventInformation } from "./_EventInformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HistoryRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventInformation: {
      shape: _EventInformation,
      locationName: "eventInformation"
    },
    EventType: {
      shape: {
        type: "string"
      },
      locationName: "eventType"
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      },
      locationName: "timestamp"
    }
  }
};
