import { _EventTypeList } from "./_EventTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotificationSpecification: _Structure_ = {
  type: "structure",
  required: ["Destination", "Transport", "Version", "EventTypes"],
  members: {
    Destination: {
      shape: {
        type: "string"
      }
    },
    Transport: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    },
    EventTypes: {
      shape: _EventTypeList
    }
  }
};
