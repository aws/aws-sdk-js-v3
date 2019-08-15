import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FilteredLogEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    timestamp: {
      shape: {
        type: "integer"
      }
    },
    message: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ingestionTime: {
      shape: {
        type: "integer"
      }
    },
    eventId: {
      shape: {
        type: "string"
      }
    }
  }
};
