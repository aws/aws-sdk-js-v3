import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeStatusEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    },
    NotAfter: {
      shape: {
        type: "timestamp"
      },
      locationName: "notAfter"
    },
    NotBefore: {
      shape: {
        type: "timestamp"
      },
      locationName: "notBefore"
    }
  }
};
