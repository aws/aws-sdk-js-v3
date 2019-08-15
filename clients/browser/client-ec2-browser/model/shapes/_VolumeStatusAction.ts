import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeStatusAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string"
      },
      locationName: "code"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    EventId: {
      shape: {
        type: "string"
      },
      locationName: "eventId"
    },
    EventType: {
      shape: {
        type: "string"
      },
      locationName: "eventType"
    }
  }
};
