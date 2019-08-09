import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventCode: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventTime: {
      shape: {
        type: "timestamp"
      }
    },
    PreSignedLogUrl: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
