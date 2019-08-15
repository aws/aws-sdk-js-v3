import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SendDataPoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    DeliveryAttempts: {
      shape: {
        type: "integer"
      }
    },
    Bounces: {
      shape: {
        type: "integer"
      }
    },
    Complaints: {
      shape: {
        type: "integer"
      }
    },
    Rejects: {
      shape: {
        type: "integer"
      }
    }
  }
};
