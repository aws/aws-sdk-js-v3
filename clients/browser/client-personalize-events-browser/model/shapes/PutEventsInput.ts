import { _EventList } from "./_EventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventsInput: _Structure_ = {
  type: "structure",
  required: ["trackingId", "sessionId", "eventList"],
  members: {
    trackingId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    userId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    eventList: {
      shape: _EventList
    }
  }
};
